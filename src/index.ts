import { parse } from "node-html-parser";
import { join } from "path";
import fsp from "node:fs/promises";
import { parseArgs } from "util";
import beautify from "js-beautify";
import { pushChanges } from "./push";
import { sendEmbed } from "./webhook";

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

// get the index script
console.log("Fetching html...");

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
    console.log("No changes since last run");
    process.exit();
}

lastIndex = indexUrl;

// Clear the temp directory
console.log("Clearing temp directory...");

const tmpPath = join(data, "tmp");
await fsp.rm(tmpPath, { recursive: true, force: true });
await fsp.mkdir(tmpPath, { recursive: true });

// Fetch the index file and get the urls of all the assets
console.log("Fetching index file...");

const indexRes = await fetch(assets + indexUrl);
const index = await indexRes.text();

// Write the index file
await fsp.writeFile(join(tmpPath, indexUrl), index);

const importRegex = /import\("\.\/([^"]+\.js)"\)/g;
const queue = Array.from(getUrls(index));
const seenUrls = new Set<string>(queue);

// Fetch all assets
let processed = 0;
let clearLine = false;
let fails = 0;
let failedUrls = new Set<string>(["hithere.js"]);

while(queue.length > 0) {
    const url = queue.shift()!;
    
    // Log progress
    if(clearLine) process.stdout.write("\x1b[2K\r");
    process.stdout.write(`Downloading assets (${processed + 1} ${url})`);
    clearLine = true;

    const res = await fetch(assets + url);
    
    // Make sure the response is good
    const contentType = res.headers.get("content-type");
    if(!res.ok || !contentType.includes("application/javascript")) {
        clearLine = false;
        console.log("Failed to fetch asset:", url);

        failedUrls.add(url);
        queue.push(url);
        fails++;
        
        if(fails <= 5) {
            // Wait 5 seconds and try again
            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
        }
        
        // Abort after 5 failed attempts
        console.error("Failed to fetch assets 5 times, aborting");
        const failedList = Array.from(failedUrls).map((url) => `* ${url}`).join("\n");

        await sendEmbed({
            title: "Failed to fetch Gimkit's bundle after five tries",
            description: `The following assets could not be fetched:\n${failedList}`,
            color: 14948890,
            author: {
                name: "Gimkit Bundle Tracker",
                url: "https://github.com/Gimloader/bundle-tracker"
            }
        });
        process.exit(1);

    }

    const text = await res.text();

    // Add on any new assets
    const newUrls = getUrls(text);
    for(const newUrl of newUrls) {
        if(seenUrls.has(newUrl) || newUrl === indexUrl) continue;

        seenUrls.add(newUrl);
        queue.push(newUrl);
    }

    await fsp.writeFile(join(tmpPath, url), text);
    processed++;
}

// Map the random names to fixed ones
const urlMap: Record<string, string> = { [indexUrl]: "_index.js" };
const urls = Array.from(seenUrls);
const names = urls.map((url) => url.slice(0, -12));
const nameCounts: Record<string, number> = {};

for(const name of names) {
    nameCounts[name] ??= 0;
    nameCounts[name]++;
}

const nameCountup = {};
for(let i = 0; i < names.length; i++) {
    if(nameCounts[names[i]] === 1) {
        urlMap[urls[i]] = names[i] + ".js";
    } else {
        nameCountup[names[i]] ??= 0;
        nameCountup[names[i]]++;
        urlMap[urls[i]] = `${names[i]}-${nameCountup[names[i]]}.js`;
    }
}

// Clear the js directory
console.log("\nFormatting files...");

const jsPath = join(data, "js");
await fsp.rm(jsPath, { recursive: true, force: true });
await fsp.mkdir(jsPath, { recursive: true });

// Update the files to have consistent names and formatted code
for(const url in urlMap) {
    const filePath = join(tmpPath, url);
    const js = await fsp.readFile(filePath, "utf-8");

    await fsp.writeFile(join(jsPath, urlMap[url]), format(js));
}

// Delete the temp directory
console.log("Cleaning up...");
await fsp.rm(tmpPath, { recursive: true, force: true });
lastRunFile.write(JSON.stringify({ lastIndex, urls: urlMap }, null, 4));

if(push) pushChanges();

function getUrls(code: string) {
    if(!code.startsWith("const __vite__mapDeps")) return [];

    const start = code.indexOf("=[") + 1;
    const end = code.indexOf("]", start) + 1;
    const urls: string[] = JSON.parse(code.slice(start, end))
        .map((url: string) => url.split("/").pop())
        .filter((url: string) => url.endsWith(".js"));
    const urlSet = new Set(urls);

    const matches = code.matchAll(importRegex);
    for(const match of matches) {
        const url = match[1].split("/").pop();
        if(url.endsWith(".js")) urlSet.add(url);
    }

    return urlSet;
}

function format(js: string) {
    js = beautify.js(js);

    // Replace the names in the file with the local names
    for(const url in urlMap) {
        js = js.replaceAll(url, urlMap[url]);
    }

    return js;
}