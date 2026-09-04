import { writeFile, mkdir, rm } from "node:fs/promises";
import { join, dirname } from "node:path";

export const data = join(__dirname, "../", "data");

export async function prepareDataDir(name: string) {
    const path = join(data, name);
    await rm(path, { recursive: true, force: true });
    await mkdir(path, { recursive: true });

    return path;
}

export async function writeJson(path: string, contents: any) {
    const json = JSON.stringify(contents, null, 4);

    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, json);
}