import { $ } from "bun";
import { sendEmbed } from "./webhook";

export async function pushChanges() {
    let stat = await $`git diff --shortstat`.text();

    let date = new Date();
    let dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

    await $`git add data`;
    await $`git commit -m "Update data (${dateStr})"`;
    await $`git push`;

    if(!Bun.env.WEBHOOK_URL) return;

    let hash = await $`git rev-parse HEAD`.text();
    await sendEmbed({
        title: "New updates to Gimkit's bundle",
        description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${stat}`,
        url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
        color: 7220975,
        author: {
            name: "Gimkit Bundle Tracker",
            url: "https://github.com/Gimloader/bundle-tracker"
        }
    });
}