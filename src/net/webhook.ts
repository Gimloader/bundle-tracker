export async function sendError(title: string, description: string) {
    await sendEmbed({
        title,
        description,
        color: 14948890
    });
}

export async function sendEmbed(embed: any) {
    const webhook = Bun.env.WEBHOOK_URL;
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