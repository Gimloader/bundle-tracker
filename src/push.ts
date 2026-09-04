import { $ } from "bun";
import { sendEmbed } from "./webhook";

export async function rebaseToLatest() {
    await $`git fetch`;
    const result = await $`git rebase --no-ff`.nothrow();

    if(result.exitCode !== 0) {
        await sendEmbed({
            title: "Failed to rebase",
            description: `Could not rebase to latest commit before pushing changes. This will require manual fixing.`,
            color: 14948890
        });

        await $`git rebase --abort`;
        throw new Error("Failed to rebase to latest commit");
    }
}

export async function checkIfChanges() {
    await $`git update-index --refresh`;
    const result = await $`git diff-index --quiet HEAD --`.nothrow();
    return result.exitCode !== 0;
}

export async function pushDataChanges() {
    const stat = await $`git diff --shortstat`.text();

    const date = new Date();
    const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

    await $`git add data`;
    await $`git commit -m "Update game data (${dateStr})"`;
    const hash = await $`git rev-parse HEAD`.text();

    if(!Bun.env.WEBHOOK_URL) return;

    await sendEmbed({
        title: "New updates to Gimkit's game data",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${stat}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975
    });
}

export async function pushJsChanges() {
    const stat = await $`git diff --shortstat`.text();

    const date = new Date();
    const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    
    await $`git add data/js data/lastRun.json`;
    await $`git commit -m "Update data (${dateStr})"`;
    const hash = await $`git rev-parse HEAD`.text();
    
    await $`git add data/rawjs`;
    await $`git commit -m "Update raw js (${dateStr})`;
    await $`git push`;

    if(!Bun.env.WEBHOOK_URL) return;

    await sendEmbed({
        title: "New updates to Gimkit's bundle",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${stat}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975
    });
}