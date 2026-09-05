import { execSync } from "node:child_process";
import { sendEmbed, sendError } from "./webhook.ts";
import { HandledError } from "../util.ts";

export async function rebaseToLatest() {
    execSync("git fetch");
    try {
        execSync("git rebase --no-ff");
    } catch {
        await sendError(
            "Failed to rebase",
            "Could not rebase to latest commit before pushing changes. This will require manual fixing."
        );
    
        execSync("git rebase --abort");
        throw new HandledError("Failed to rebase to latest commit");
    }
}

export async function checkIfChanges() {
    try {
        execSync("git update-index --refresh");
        execSync("git diff-index --quiet HEAD --");
        return false;
    } catch {
        return true;
    }
}

const getStat = () => execSync("git diff --shortstat").toString();
const getHash = () => execSync("git rev-parse HEAD").toString();
const getDateStr = () => {
    const date = new Date();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export async function pushDataChanges() {
    const hash = getHash();

    execSync("git add data");
    execSync(`git commit -m "Update game data (${getDateStr()})"`);

    if(!process.env.WEBHOOK_URL) return;

    await sendEmbed({
        title: "New updates to Gimkit's game data",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${getStat()}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975
    });
}

export async function pushMapChanges() {
    const hash = getHash();

    execSync("git add data");
    execSync(`git commit -m "Update game data (${getDateStr()})"`);

    if(!process.env.WEBHOOK_URL) return;

    await sendEmbed({
        title: "New updates to Gimkit's map data",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${getStat()}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975
    });
}

export async function pushJsChanges() {
    const stat = getStat();
    const dateStr = getDateStr();

    execSync("git add data/js data/lastRun.json");
    execSync(`git commit -m "Update data (${dateStr})"`);
    const hash = getHash();

    execSync("git add data/rawjs");
    execSync(`git commit -m "Update raw js (${dateStr})`);
    execSync("git push");

    if(!process.env.WEBHOOK_URL) return;

    await sendEmbed({
        title: "New updates to Gimkit's bundle",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${stat}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975
    });
}