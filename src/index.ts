import { parse } from "node-html-parser";
import { join } from "path";
import fsp from 'node:fs/promises';
import cliProgress from "cli-progress";
import { parseArgs } from "util";
import beautify from "js-beautify";
import { pushChanges } from "./push";

const { values: { force, push }} = parseArgs({
    args: process.argv.slice(2),
    options: {
        force: { type: "boolean", short: "f", default: false },
        push: { type: "boolean", short: "p", default: false }
    }
});

const base = "https://www.gimkit.com";
const assets = base + "/assets/";
const data = join(__dirname, "../", "data");

const bar = new cliProgress.SingleBar({
    format: '{bar} | {status}',
}, cliProgress.Presets.shades_classic);

// get the index script
bar.start(0, 0, { status: "Fetching html" });

const res = await fetch(base + '/join');
const text = await res.text();
const root = parse(text);

const script = root.querySelector(`script[type="module"]`);
if(!script) throw new Error("Failed to find index script");

// get the module registry
const indexPath = script.getAttribute("src");
const indexUrl = indexPath.split("/").pop();

// check that the url has changed
const lastRunFile = Bun.file(join(data, "lastRun.json"));
let lastIndex = "";
if(await lastRunFile.exists()) {
    let lastRun = await lastRunFile.json();
    lastIndex = lastRun.lastIndex;
}

if(!force && lastIndex === indexUrl) {
    bar.stop();
    console.log("No changes since last run");
    process.exit();
}

lastIndex = indexUrl;

// Clear the js directory
bar.update(0, { status: "Clearing directory" });

const jsPath = join(data, "js");
await fsp.rm(jsPath, { recursive: true, force: true });
await fsp.mkdir(jsPath, { recursive: true });

// Fetch the index file and get the urls of all the assets
bar.update(0, { status: "Fetching index file" });

const indexRes = await fetch(assets + indexUrl);
const index = await indexRes.text();

const start = index.indexOf("=[") + 1;
const end = index.indexOf("]", start) + 1;
const urls: string[] = JSON.parse(index.slice(start, end))
    .map((url: string) => url.split("/").pop());
const names = urls.map((url) => url.slice(0, -12));

// Add a count to duplicate names
const nameCount: Record<string, number> = {};
for(const name of names) {
    nameCount[name] ??= 0;
    nameCount[name]++;
}

const nameCountup: Record<string, number> = {};
for(let i = 0; i < names.length; i++) {
    let name = names[i];

    if(nameCount[name] === 1) {
        names[i] = `${name}.js`;
    } else {
        nameCountup[name] ??= 0;
        nameCountup[name]++;
    
        names[i] = `${name}-${nameCountup[name]}.js`;
    }
}

// Write the index file
await fsp.writeFile(join(jsPath, "_index.js"), format(index));

// Download all the assets
bar.start(urls.length, 0, { status: "Downloading assets" });

let urlMap: Record<string, string> = {};
for(let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const name = names[i];
    urlMap[name] = url;

    bar.increment(1, { status: url });

    const res = await fetch(assets + url);
    let text = await res.text();

    await fsp.writeFile(join(jsPath, name), format(text));
}

bar.stop();
lastRunFile.write(JSON.stringify({ lastIndex, urls: urlMap }, null, 4));

if(push) pushChanges();

function format(js: string) {
    js = beautify.js(js);

    // Replace the names in the file with the local names
    js = js.replaceAll(indexUrl, "_index.js");
    for(let j = 0; j < urls.length; j++) {
        js = js.replaceAll(urls[j], names[j]);
    }

    return js;
}