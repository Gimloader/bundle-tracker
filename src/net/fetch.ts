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

export async function createGame(mapId: string): Promise<string> {
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