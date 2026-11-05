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

    const pingRole = error ? process.env.ERR_PING_ROLE_ID : process.env.PING_ROLE_ID;
    const content = pingRole ? `<@&${pingRole}>` : null;

    await fetch(webhook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content,
            embeds: [
                embedWithDefaults
            ],
            attachments: []
        })
    });
}