import { parse } from "node-html-parser";
import { join } from "path";
import fs from 'fs';
import { formatCss, formatJs } from "./format";
import cliProgress from "cli-progress";
import { parseArgs } from "util";
import { pushChanges } from "./push";

const { values: { force, push }} = parseArgs({
    args: process.argv.slice(2),
    options: {
        force: { type: "boolean", short: "f", default: false },
        push: { type: "boolean", short: "p", default: false },
    }
});

const base = "https://www.gimkit.com";
const data = join(__dirname, "../", "data");

// get the index script
const res = await fetch(base + '/join');
const text = await res.text();
const root = parse(text);

const script = root.querySelector(`script[type="module"]`);
if(!script) throw new Error("Failed to find index script");

// get the module registry
const indexUrl = script.getAttribute("src");

interface LastRun {
    lastIndex: string;
    urls: Record<string, string>;
}

// check that the url has changed
const lastRunFile = Bun.file(join(data, "lastRun.json"));
let lastRun: LastRun = { lastIndex: "", urls: {} };
if(await lastRunFile.exists()) {
    lastRun = await lastRunFile.json();
}

if(!force && lastRun.lastIndex === indexUrl) {
    console.log("No changes since last run");
    process.exit();
}

lastRun.lastIndex = indexUrl;

const indexRes = await fetch(base + indexUrl);
const indexFile = await indexRes.text();

const registryRegex = /register\(JSON.parse\('(.*?)'/g;
const registryJson = registryRegex.exec(indexFile)?.[1];
if(!registryJson) throw new Error("Failed to get module registry");

const registry = JSON.parse(registryJson);

// remove the existing files
const extensions = ["js", "css"]; 

for(const ext of extensions) {
    const folder = join(data, ext);

    if(fs.existsSync(folder)) fs.rmSync(folder, { recursive: true });
    fs.mkdirSync(folder);
}

await Bun.file(join(data, "js", "index.js")).write(formatJs(indexFile));

let groups: { name: string, ext: string, urls: { index: number, url: string }[] }[] = [];
let numFiles = 0;

// group the files
for(const id in registry) {
    const parts = registry[id].split(".");

    // skip the index, we already have that
    if(parts[0] === "index" && parts[2] === "js") continue;
    if(!extensions.includes(parts[2])) continue;

    let group = groups.find(g => g.name === parts[0] && g.ext === parts[2]);
    if(!group) {
        group = { name: parts[0], ext: parts[2], urls: [] };
        groups.push(group);
    }
    
    // This hopefully won't move, although there's no way to know except to wait and see
    const index = indexFile.indexOf(`resolve("${id}")`);
    group.urls.push({ index, url: registry[id] });
    numFiles++;
}

const bar = new cliProgress.Bar({
    hideCursor: true,
    format: '{bar} | {active} | {value}/{total}',
}, cliProgress.Presets.shades_grey);
bar.start(numFiles, 0, { active: "Loading..."});

// download and write the files
for(const group of groups) {
    group.urls.sort((a, b) => a.index - b.index);

    for(let i = 0; i < group.urls.length; i++) {
        const url = group.urls[i].url;

        bar.increment(1, { active: url });

        const res = await fetch(base + "/" + url);
        let text = await res.text();

        let name: string;
        if(group.urls.length === 1) {
            name = `${group.name}.${group.ext}`;
        } else {
            name = `${group.name}.${i + 1}.${group.ext}`;
        }

        if(group.ext === "js") text = formatJs(text);
        else text = formatCss(text);

        lastRun.urls[`${group.ext}/${name}`] = url;
        await Bun.file(join(data, group.ext, name)).write(text);
    }
}

lastRunFile.write(JSON.stringify(lastRun, null, 4));
bar.stop();

// push the changes if needed
if(push) await pushChanges();