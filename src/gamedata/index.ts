import { sendEmbed } from "../webhook";
import { createGame, findServer, getSource, getToken } from "./net";
import { Client } from "colyseus.js";
import { join } from "node:path";
import { data, prepareDataDir, writeJson } from "../util";
import { parseArgs } from "node:util";
import { checkIfChanges, pushDataChanges, rebaseToLatest } from "../push";

if(!process.env.CONNECT_SID) {
    await sendEmbed({
        title: "Cookie missing",
        description: "Cannot fetch game data without a cookie manually specified.",
        color: 14948890
    });
    throw new Error("CONNECT_SID environment variable missing");
}

if(!process.env.TOP_DOWN_MAP || !process.env.PLATFORMER_MAP) {
    await sendEmbed({
        title: "Map IDs missing",
        description: "Cannot fetch game data without map IDs manually specified.",
        color: 14948890
    });
    throw new Error("TOP_DOWN_MAP or PLATFORMER_MAP environment variable missing");
}

const { values: { push }} = parseArgs({
    args: process.argv.slice(2),
    options: {
        push: { type: "boolean", short: "p", default: false }
    }
});

if(push) await rebaseToLatest();

const propsPath = await prepareDataDir("props");
const itemsPath = await prepareDataDir("items");
const terrainPath = await prepareDataDir("terrain");
const devicesPath = await prepareDataDir("devices");
const blocksPath = await prepareDataDir("blocks");

const authToken = await getToken();
await extractGameData(process.env.TOP_DOWN_MAP);
await extractGameData(process.env.PLATFORMER_MAP);

if(push && await checkIfChanges()) await pushDataChanges();

// If colyseus is being weird force it to exit
process.exit(0);

async function extractGameData(mapId: string) {
    const intentId = await createGame(mapId);
    const source = await getSource(intentId);
    const serverUrl = await findServer(source);
    const wsUrl = serverUrl.replace("https://", "wss://");
    
    const client = new Client(wsUrl);
    const room = await client.create("MapRoom", {
        intentId,
        authToken
    });

    return new Promise<void>((res, rej) => {
        let messagesGotten = 0;
        const timeout = setTimeout(() => {
            room.leave();
            room.connection.close();
            rej(new Error("Timed out waiting for game data"));
        }, 30_000);

        const onGotten = () => {
            messagesGotten++;
            if(messagesGotten < 2) return;

            console.log("Got game data from", mapId);
            room.leave();
            room.connection.close();
            res();
            clearTimeout(timeout);
        }
    
        room.send("REQUEST_ALL_PROPS");
        
        room.onMessage("ALL_PROPS", async (props: Gimloader.ReceivedMessages2d["ALL_PROPS"]) => {
            for(const prop of props) {
                await writeJson(join(propsPath, `${prop.id}.json`), prop);
            }

            onGotten();
        });
        
        room.onMessage("WORLD_OPTIONS", async (options: Gimloader.Stores.WorldOptions) => {
            for(const item of options.itemOptions) {
                await writeJson(join(itemsPath, `${item.id}.json`), item);
            }
        
            for(const terrain of options.terrainOptions) {
                await writeJson(join(terrainPath, `${terrain.id}.json`), terrain);
            }
        
            for(const device of options.deviceOptions) {
                await writeJson(join(devicesPath, `${device.id}.json`), device);
            }
        
            const blocks = JSON.parse(options.codeGrids.customBlocks);
            for(const block of blocks) {
                await writeJson(join(blocksPath, `${block.type}.json`), block);
            }
        
            const blockCategories = JSON.parse(options.codeGrids.blockCategories);
            await writeJson(join(data, "blockCategories.json"), blockCategories);
            await writeJson(join(data, "skins.json"), options.skinOptions);

            onGotten();
        });
    });
}