import { $ } from "bun";

export async function pushChanges() {
    await $`git add data`;
    await $`git commit -m "Update data"`;
    await $`git push`;

    const webhook = Bun.env.WEBHOOK_URL;
    if(!webhook) return;

    let hash = await $`git rev-parse HEAD`.text();
    let stat = await $`git diff --shortstat`.text();

    await fetch(webhook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: null,
            embeds: [
                {
                    title: "New updates to Gimkit's bundle",
                    description: `**[View changes](https://github.com/Gimloader/source-tracker/commit/${hash})**\n${stat}`,
                    url: `https://github.com/Gimloader/source-tracker/commit/${hash}`,
                    color: 7220975,
                    author: {
                        name: "Gimloader Source Tracker",
                        url: "https://github.com/Gimloader/source-tracker",
                        icon_url: "https://gimloader.github.io/icon.png"
                    }
                }
            ],
            attachments: []
        })
    });
}