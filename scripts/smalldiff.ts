import { spawn, execSync } from "node:child_process";
import { writeFile, rm, mkdir } from "node:fs/promises";
import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { generate } from "escodegen";

const [oldCommit, newCommit] = process.argv.slice(2);
if(!oldCommit || !newCommit) {
    throw new Error("Usage: node scripts/smalldiff.ts <oldCommit> <newCommit>");
}

await rm("tmp", { recursive: true, force: true });
await mkdir("tmp", { recursive: true });

const oldPath = await normalizeDir(oldCommit);
const newPath = await normalizeDir(newCommit);

try {
    execSync(`git diff --no-index ${oldPath} ${newPath} --output=tmp/changes.diff`);
} catch {}

async function normalizeDir(commit: string) {
  const path = `tmp/normalized-${commit.slice(0, 5)}`;
  await mkdir(path);
  const files = execSync(`git show --name-only ${commit}:data/js/`).toString().split('\n').slice(2);
  for (const file of files) {
    if (!file) continue;
    const code = await getFile(commit, `data/js/${file}`);
    try {
      const normalized = await normalizeCode(code);
      await writeFile(`${path}/${file}`, normalized);
    } catch(err) {
      throw new Error(`Error at ${file}: ${err}`)
    }
  }

  return path;
}

async function normalizeCode(code: string) {
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
            if(node.elements.some(e => !e)) return;
            if(!node.elements.every((e) => e.type === "Literal")) return;
            if(node.elements.every((e) => typeof e.value === "number")) {
                node.elements = [];
            } else if(node.elements.every((e) => typeof e.value === "string" && e.value.startsWith("assets"))) {
                node.elements = [];
            }
        },
        CallExpression(node) {
            if(
                node.callee.type === "MemberExpression" &&
                !node.callee.computed &&
                node.callee.property.type === "Identifier" &&
                (node.callee.property.name === "lazyWithPreload" || node.callee.property.name === "lazy")
            ) {
                node.arguments = [];
            }
        }
    });

    return generate(ast);
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
