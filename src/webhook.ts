export async function sendEmbed(embed: any) {
    const webhook = Bun.env.WEBHOOK_URL;
    if(!webhook) return;

    await fetch(webhook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: null,
            embeds: [
                embed
            ],
            attachments: []
        })
    });
}