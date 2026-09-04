import { Client } from "colyseus.js";
import { base, matchmaker } from "../consts";

const cookie = `connect.sid=${process.env.CONNECT_SID}`;

export function get(url: string) {
    return fetch(url, {
        headers: {
            "Cookie": cookie
        }
    });
}

export function post(url: string, body: any) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookie
        },
        body: JSON.stringify(body)
    });
}

export async function createCreativeGame(mapId: string): Promise<string> {
    const url = `${matchmaker}/intent/map/edit/create`;
    const res = await post(url, { mapId });
    const intentId = await res.text();
    return intentId;
}

export async function getToken(): Promise<string> {
    const url = `${base}/pages/general`;
    const res = await get(url);
    const json = await res.json() as any;
    return json.userData.token;
}

export async function getSource(intentId: string): Promise<string> {
    const url = `${matchmaker}/intent/fetch-source/${intentId}`;
    const res = await get(url);
    const source = await res.text();
    return source;
}

export async function findServer(source: string): Promise<string> {
    const url = `${matchmaker}/find-server-to-host-game`;
    const res = await post(url, { source });
    const json = await res.json() as { url: string };
    return json.url;
}

export async function getExperiences(): Promise<any> {
    const url = `${base}/api/experiences`;
    const res = await post(url, {
        forceUpgradedExeriences: false,
        mode: "liveGame"
    });
    const json = await res.json();
    return json;
}

export async function getHooks(experience: string): Promise<any> {
    const url =`${base}/api/experience/map/hooks`;
    const res = await post(url, { experience });
    const json = await res.json() as any;
    return json.hooks;
}

export async function createGame(experienceId: string, hooks: any): Promise<string> {
    const url = `${matchmaker}/intent/map/play/create`;
    const hookOptions: Record<string, any> = {
        kit: process.env.KIT_ID
    };

    for(const hook of hooks) {
        if(hook.options.defaultValue === undefined) continue;
        hookOptions[hook.key] = hook.options.defaultValue;
    }

    const res = await post(url, {
        experienceId,
        matchmakerOptions: {
            group: "",
            joinInLate: true
        },
        options: {
            allowGoogleTranslate: false,
            cosmosBlocked: false,
            hookOptions
        }
    });
    const intentId = res.text();
    return intentId;
}

export async function getRoom(serverUrl: string, intentId: string, authToken: string) {
    const wsUrl = serverUrl.replace("https://", "wss://");

    const client = new Client(wsUrl);
    const room = await client.create<Gimloader.Schema.GimkitSchema>("MapRoom", {
        intentId,
        authToken
    });

    room.onMessage("*", () => {});
    return room;
}