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
                    description: `**[View changes](https://github.com/Gimloader/bundle-tracker/commit/${hash})**\n${stat}`,
                    url: `https://github.com/Gimloader/bundle-tracker/commit/${hash}`,
                    color: 7220975,
                    author: {
                        name: "Gimkit Bundle Tracker",
                        url: "https://github.com/Gimloader/bundle-tracker"
                    }
                }
            ],
            attachments: []
        })
    });
}