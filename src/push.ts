import { $ } from "bun";
import { sendEmbed } from "./webhook";

export async function pushChanges() {
    let stat = await $`git diff --shortstat`.text();

    let date = new Date();
    let dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    
    await $`git add data/js data/lastRun.json`;
    await $`git commit -m "Update data (${dateStr})"`;
    const hash = await $`git rev-parse HEAD`.text();

    // Try to rebase before pushing to avoid issues
    await $`git fetch`;
    const result = await $`git rebase --no-ff`;

    if(result.exitCode !== 0) {
        await sendEmbed({
            title: "Failed to rebase",
            description: `Could not rebase to latest commit before pushing changes. This will require manual fixing.`,
            color: 14948890
        });

        await $`git rebase --abort`;
        return;
    }
    
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