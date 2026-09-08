import { spawn, execSync } from "node:child_process";
import { writeFile, rm, mkdir } from "node:fs/promises";
import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { generate } from "escodegen";

const [oldCommit, newCommit, file] = process.argv.slice(2);
if(!oldCommit || !newCommit || !file) {
    throw new Error("Usage: node scripts/smalldiff.ts <oldCommit> <newCommit> <file>");
}

await rm("tmp", { recursive: true, force: true });
await mkdir("tmp", { recursive: true });

const oldPath = await normalize(oldCommit, file);
const newPath = await normalize(newCommit, file);

try {
    execSync(`git diff --no-index ${oldPath} ${newPath} --output=tmp/changes.diff`);
} catch {}

async function normalize(commit: string, file: string) {
    const code = await getFile(commit, `data/js/${file}`);
    const ast = acorn.parse(code, { ecmaVersion: "latest", sourceType: "module" });
    
    walk.simple(ast, {
        Pattern(node) {
			if(node.type !== "Identifier") return;
            node.name = "a";
		},
        Identifier(node) {
            node.name = "a";
        },
        Program(node) {
            node.body = node.body.filter((n) => n.type !== "ImportDeclaration" && n.type !== "ExportNamedDeclaration");
        },
        ArrayExpression(node) {
            if(!node.elements.every((e) => e.type === "Literal")) return;

            if(node.elements.every((e) => typeof e.value === "number")) {
                node.elements = [];
            } else if(node.elements.every((e) => typeof e.value === "string" && e.value.startsWith("assets"))) {
                node.elements = [];
            }
        }
    });

    const path = `tmp/normalized-${commit.slice(0, 5)}.js`;
    await writeFile(path, generate(ast));

    return path;
}

function getFile(commit: string, file: string): Promise<string> {
    return new Promise<string>((res) => {
        const child = spawn("git", ["show", `${commit}:${file}`]);
        let buffer = "";

        child.stdout.on("data", (data) => {
            buffer += data.toString();
        });

        child.on("close", () => {
            res(buffer);
        });
    });
}