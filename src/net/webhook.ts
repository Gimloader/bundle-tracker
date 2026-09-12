export async function sendError(title: string, description: string) {
    await sendEmbed({
        title,
        description,
        color: 14948890
    }, true);
}

export async function sendEmbed(embed: any, error?: boolean) {
    const webhook = error ? (process.env.ERR_WEBHOOK_URL ?? process.env.WEBHOOK_URL) : process.env.WEBHOOK_URL;
    if(!webhook) return;

    const embedWithDefaults = {
        author: {
            name: "Gimkit Bundle Tracker",
            url: "https://github.com/Gimloader/bundle-tracker"
        },
        ...embed
    }

    await fetch(webhook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: null,
            embeds: [
                embedWithDefaults
            ],
            attachments: []
        })
    });
}