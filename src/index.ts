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
        push: { type: "boolean", short: "p", default: false },
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
await fsp.writeFile(join(jsPath, "_index.js"), format(index));

const start = index.indexOf("=[") + 1;
const end = index.indexOf("]", start) + 1;
const urls: string[] = JSON.parse(index.slice(start, end));

const nameCount: Record<string, number> = {};
for(let url of urls) {
    const name = url.split("-").shift();

    nameCount[name] ??= 0;
    nameCount[name]++;
}

// Download all the assets
bar.start(urls.length, 0, { status: "Downloading assets" });
const nameCountup: Record<string, number> = {};

let urlMap: Record<string, string> = {};
for(let i = 0; i < urls.length; i++) {
    const url = urls[i].split("/").pop();
    let name = url.split("-").shift();

    if(nameCount[name] > 1) {
        nameCountup[name] ??= 0;
        nameCountup[name]++;

        name = `${name}-${nameCountup[name]}`;
    }

    name += ".js";
    urlMap[name] = url;
    
    bar.increment(1, { status: url });

    const res = await fetch(assets + url);
    const text = await res.text();

    await fsp.writeFile(join(jsPath, name), format(text));
}

bar.stop();
lastRunFile.write(JSON.stringify({ lastIndex, urls: urlMap }, null, 4));

if(push) pushChanges();

function format(js: string) {
    return beautify.js(js);
}