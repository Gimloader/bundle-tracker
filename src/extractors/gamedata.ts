import { sendError } from "../net/webhook.ts";
import { createCreativeGame, findServer, getRoom, getSource, getToken } from "../net/fetch.ts";
import { join } from "node:path";
import { data, HandledError, prepareDataDir, writeJson } from "../util.ts";
import { checkIfChanges, pushDataChanges, rebaseToLatest } from "../net/git.ts";

export async function extractGamedata(push: boolean) {
    if(!process.env.CONNECT_SID) {
        await sendError(
            "Cookie missing",
            "Cannot fetch game data without a cookie manually specified.",
        );
        throw new HandledError("CONNECT_SID environment variable missing");
    }
    
    if(!process.env.TOP_DOWN_MAP || !process.env.PLATFORMER_MAP) {
        await sendError(
            "Map IDs missing",
            "Cannot fetch game data without map IDs manually specified.",
        );
        throw new HandledError("TOP_DOWN_MAP or PLATFORMER_MAP environment variable missing");
    }

    if(push) await rebaseToLatest();
    
    const propsPath = await prepareDataDir("props");
    const itemsPath = await prepareDataDir("items");
    const terrainPath = await prepareDataDir("terrain");
    const devicesPath = await prepareDataDir("devices");
    const blocksPath = await prepareDataDir("blocks");
    
    const authToken = await getToken();
    await extractFromMap(process.env.TOP_DOWN_MAP);
    await extractFromMap(process.env.PLATFORMER_MAP);
    
    if(push && await checkIfChanges()) await pushDataChanges();
    
    async function extractFromMap(mapId: string) {
        const intentId = await createCreativeGame(mapId);
        const source = await getSource(intentId);
        const serverUrl = await findServer(source);
        const room = await getRoom(serverUrl, intentId, authToken);
    
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
            
                for(const device of options.deviceOptions as any[]) {
                    if(device.optionSchema) device.optionSchema = JSON.parse(device.optionSchema);
                    if(device.defaultState) device.defaultState = JSON.parse(device.defaultState);
                    if(device.codeGridSchema) device.codeGridSchema = JSON.parse(device.codeGridSchema);
                    if(device.wireConfig) device.wireConfig = JSON.parse(device.wireConfig);
    
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
}