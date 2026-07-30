import { writeFileSync, readFileSync, existsSync, readdirSync, rmSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";
import { minify } from "terser";

if(!existsSync("tracker-temp")) {
    execSync("git clone https://github.com/Gimloader/bundle-tracker.git tracker-temp");
} else {
    execSync("cd tracker-temp && git checkout origin/main");
}

const log = execSync("cd tracker-temp && git log").toString();
const allCommits = log.matchAll(/commit (\S+)\nAuthor: GimloaderBot.+\n.+\n\n(.+)/g).toArray();

// Everything before this is a bit different
const firstCommit = "1df7a884fef9c1a02728a7f3d89f4982663ec876";
const commits = allCommits.slice(0, allCommits.findIndex((c) => c[1] === firstCommit) + 1);
const rawjsPath = join("data", "rawjs");

commits.reverse();

for(const commit of commits) {
    const hash = commit[1];
    const message = commit[2].trim();

    console.log(`Checking out ${hash} (${message})`);
    rmSync(rawjsPath, { force: true, recursive: true });
    mkdirSync(rawjsPath, { recursive: true });
    execSync(`cd tracker-temp && git checkout ${hash}`);

    const jsPath = join("tracker-temp", "data", "js");
    const files = readdirSync(jsPath);

    for(const file of files) {
        console.log(`Minifying ${file}`);
        const contents = readFileSync(join(jsPath, file), "utf-8");

        // Pretty close to how Gimkit does it
        const minified = await minify(contents, {
            mangle: false,
            compress: false
        });

        writeFileSync(join(rawjsPath, file), minified.code);
    }

    execSync("git add data");
    execSync(`git commit -m "Backfill raw js ${message.slice(message.indexOf("("))}"`);
}