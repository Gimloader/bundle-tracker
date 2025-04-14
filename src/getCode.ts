import { parse } from "node-html-parser";
import { join } from "path";
import fs from 'fs';
import beautify from "js-beautify";

const base = "https://www.gimkit.com";
const data = join(__dirname, "../", "data");

// get the index script
const res = await fetch(base + '/join');
const text = await res.text();
const root = parse(text);

const script = root.querySelector(`script[type="module"]`);
if(!script) throw new Error("Failed to find index script");

// get the module registry
const url = script.getAttribute("src");
const indexRes = await fetch(base + url);
const indexFile = await indexRes.text();

Bun.file(join(data, "js", "index.js")).write(beautify.js(indexFile));

const registryRegex = /register\(JSON.parse\('(.*?)'/g;
const registryJson = registryRegex.exec(indexFile)?.[1];
if(!registryJson) throw new Error("Failed to get module registry");

const registry = JSON.parse(registryJson);
let groups: { name: string, ext: string, urls: { index: number, url: string }[] }[] = [];

// remove the existing files
const extensions = ["js", "css"]; 

for(const ext of extensions) {
    const folder = join(data, ext);

    if(fs.existsSync(folder)) fs.rmSync(folder, { recursive: true });
    fs.mkdirSync(folder);
}

// group the files
for(const id in registry) {
    const parts = registry[id].split(".");

    // skip the index, we already have that
    if(parts[0] === "index" && parts[2] === "js") continue;
    if(!extensions.includes(parts[2])) continue;

    let group = groups.find(g => g.name === parts[0]);
    if(!group) {
        group = { name: parts[0], ext: parts[2], urls: [] };
        groups.push(group);
    }
    
    // This hopefully won't move, although there's no way to know except to wait and see
    const index = indexFile.indexOf(`resolve("${id}")`);
    group.urls.push({ index, url: registry[id] });
}

// download and write the files
for(const group of groups) {
    group.urls.sort((a, b) => a.index - b.index);

    for(let i = 0; i < group.urls.length; i++) {
        const url = group.urls[i].url;
        const res = await fetch(base + "/" + url);
        let text = await res.text();

        if(group.ext === "js") text = beautify.js(text);
        else text = beautify.css(text);

        let name: string;
        if(group.urls.length === 1) {
            name = `${group.name}.${group.ext}`;
        } else {
            name = `${group.name}.${i + 1}.${group.ext}`;
        }

        await Bun.file(join(data, group.ext, name)).write(text);
        console.log(`Downloaded ${name} from ${url}`);
    }
}