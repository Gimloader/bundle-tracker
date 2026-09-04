import { createGame, findServer, getExperiences, getHooks, getRoom, getSource, getToken } from "../net/fetch";
import { checkIfChanges, pushMapChanges, rebaseToLatest } from "../net/git";
import { sendError } from "../net/webhook";
import { HandledError, prepareDataDir } from "../util";
import { writeJson } from "../util";
import { join } from "node:path";

export async function extractMaps(push: boolean) {
    if(!process.env.CONNECT_SID) {
        await sendError(
            "Cookie missing",
            "Cannot fetch game data without a cookie manually specified."
        );
        throw new HandledError("CONNECT_SID environment variable missing");
    }

    if(!process.env.KIT_ID) {
        await sendError(
            "Kit ID missing",
            "Cannot get official map data without a kit ID specified."
        );
        throw new HandledError("KIT_ID environment variable missing");
    }

    if(push) await rebaseToLatest();

    const maps = await prepareDataDir("maps");
    const authToken = await getToken();
    const experiences = await getExperiences();

    const processed = new Set<string>();
    for(const category of experiences) {
        for(const item of category.items) {
            if(item.source !== "map") continue;
            if(processed.has(item._id)) continue;
            processed.add(item._id);

            await getMapContents(item, authToken, maps);
        }
    }

    if(push && await checkIfChanges()) await pushMapChanges();
}

export async function getMapContents(experience: any, authToken: string, mapsDir: string) {
    console.log("Getting contents of", experience.name, experience._id);
    const hooks = await getHooks(experience._id);
    const intentId = await createGame(experience._id, hooks);
    const source = await getSource(intentId);
    const serverUrl = await findServer(source);
    const room = await getRoom(serverUrl, intentId, authToken);

    room.send("REQUEST_INITIAL_WORLD");

    let terrain: any;
    let devices: any[];
    let codeGrids: Record<string, any>;

    return new Promise<void>((res, rej) => {
        const timeout = setTimeout(() => {
            room.leave();
            room.connection.close();
            rej(new Error("Timed out waiting for game data"));
        }, 30_000);

        const onGotten = async () => {
            if(!terrain || !devices || !codeGrids) return;

            // Remove procedural terrain
            const proceduralZones = devices.filter((d) => d.deviceId === "proceduralTerrainZone");
            terrain = terrain.filter(({ x, y }) => {   
                const worldX = x * 64;
                const worldY = y * 64;
                return !proceduralZones.some((zone) => (
                    worldX > zone.x - zone.options.width / 2 && worldX < zone.x + zone.options.width / 2 &&
                    worldY > zone.y - zone.options.height / 2 && worldY < zone.y + zone.options.height / 2
                ));
            });

            const filename = experience.name.replace(/[^a-zA-Z0-9]/g, "");
            await writeJson(join(mapsDir, `${filename}.json`), {
                experience,
                hooks,
                terrain,
                devices,
                codeGrids
            });
            
            room.leave();
            room.connection.close();
            res();
            clearTimeout(timeout);
        }

        room.onStateChange(() => {
            const gridState = room.state?.world?.devices?.codeGrids;
            if(!gridState || codeGrids) return;

            codeGrids = {};
            for(const key of gridState.keys()) {
                codeGrids[key] = {};

                for(const gridKey of gridState[key].items.keys()) {
                    const { createdAt, json, owner, triggerType, triggerValue, updatedAt } = gridState[key].items[gridKey];
                    
                    codeGrids[key][gridKey] = {
                        createdAt,
                        json: JSON.parse(json),
                        owner,
                        triggerType,
                        triggerValue,
                        updatedAt
                    }
                }
            }

            onGotten();
        });

        room.onMessage("TERRAIN_CHANGES", async (message) => {
            const val = (index: number) => message.added.terrains[index];
            terrain = message.added.tiles.map((tile: any) => ({
                x: tile[0],
                y: tile[1],
                terrain: val(tile[2]),
                collides: tile[3] === 1,
                depth: tile[4]
            }));
            onGotten();
        });
        
        room.onMessage("WORLD_CHANGES", (message) => {
            const val = (index: string) => message.devices.addedDevices.values[index];

            devices = [];
            for(const device of message.devices.addedDevices.devices) {
                const [id, x, y, depth, _layerId, _deviceId, _options] = device;
                const layerId = val(_layerId);
                const deviceId = val(_deviceId);
                const options: Record<string, any> = {};

                for(const [k, v] of _options) {
                    options[val(k)] = val(v);
                }

                devices.push({
                    id,
                    x,
                    y,
                    depth,
                    layerId,
                    deviceId,
                    options
                });
            }
            onGotten();
        });
    })
}