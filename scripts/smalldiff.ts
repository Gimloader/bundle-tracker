import { readFile, writeFile } from "node:fs/promises";

const diff = await readFile("./scripts/change.diff", "utf-8");
const files = diff.split(/(^|\n)diff --git /);

files.splice(0, 1);

for(let i = files.length - 1; i >= 0; i--) {
    const parts = files[i].split("\n@@");
    
    for(let j = parts.length - 1; j >= 1; j--) {
        const added = parts[j].split("\n+").length;
        const removed = parts[j].split("\n-").length;

        if(added === removed) parts.splice(j, 1);
    }

    if(parts.length === 1) {
        files.splice(i, 1);
    } else {
        files[i] = "diff --git " + parts.join("\n@@");
    }
}

await writeFile("./scripts/small.diff", files.join("\n"));