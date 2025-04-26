import beautify from "js-beautify";
import { createHash } from "node:crypto";
import * as walk from "acorn-walk";
import { parse, type ClassDeclaration, type FunctionDeclaration, type Identifier, type Node } from "acorn";
import { generate } from "escodegen";
import fs from "node:fs";
import { join } from "node:path";

export function formatJs(code: string) {
	let ast = parse(code, {
		ecmaVersion: "latest",
		sourceType: "module"
	});

	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
	let unassignedIdentifiers = new Map<string, Identifier[]>();
	let newNames: Map<string, string>[] = [];
	let nameIndex: number[] = [];
	let names: string[] = [];
	let nameNumber = 0;

	const nextName = () => {
		let number = nameNumber++;
		let name = "";

		let characters: number;
		if(number === 0) characters = 1;
		else characters = Math.floor(Math.log(number) / Math.log(chars.length)) + 1;

		for(let i = 0; i < characters; i++) {
			let index = number % chars.length;
			number = Math.floor(number / chars.length);
			name += chars[index];
		}

		if(reserved.includes(name)) nextName();
		else names.push(name);
	}

	// if we get beyond 3 characters something has gone seriously wrong
	const reserved = ["in", "if", "of", "do", "for", "try", "int", "new", "var"];
	const scopeChanges = ["IfStatement", "SwitchStatement", "TryStatement", "Function", "BlockStatement"];

	const Identifier = (node: Identifier, _: never, ancestors: Node[]) => {
		let depth = 0;
		let declaration = false;

		for(let ancestor of ancestors) {
			if(scopeChanges.includes(ancestor.type)) depth++;
		}

		let parent = ancestors[ancestors.length - 2];

		if(
			(parent.type === "VariableDeclarator") || (parent.type.endsWith("Pattern")) ||
			(parent.type === "FunctionDeclaration" && (parent as FunctionDeclaration).id === node) ||
			(parent.type === "ClassDeclaration" && (parent as ClassDeclaration).id === node)
		) {
			declaration = true;
		}
		
		newNames = newNames.slice(0, depth + 1);
		nameIndex = nameIndex.slice(0, depth + 1);

		if(declaration) {
			// generate a new name to replace it with
			if(!nameIndex[depth]) nameIndex[depth] = 1;
			else nameIndex[depth]++;

			let number = nameIndex.reduce((a, b) => a + b, 0) - 1;
			if(!names[number]) nextName();

			let name = names[number];

			// rename all the unassigned ones
			let unassigned = unassignedIdentifiers.get(node.name);
			if(unassigned) {
				for(let node of unassigned) node.name = name;
				unassignedIdentifiers.delete(node.name);
			}

			if(!newNames[depth]) newNames[depth] = new Map();
			newNames[depth].set(node.name, name);
			node.name = name;
		} else {
			// find the name to replace it with
			for(let i = newNames.length - 1; i >= 0; i--) {
				let names = newNames[i];
				if(!names || !names.has(node.name)) continue;

				node.name = names.get(node.name);
				return;
			}

			// make the node wait for an identifier to be created, if it ever is
			if(!unassignedIdentifiers.has(node.name)) unassignedIdentifiers.set(node.name, []);
			unassignedIdentifiers.get(node.name).push(node);
		}
	}

	walk.ancestor(ast, {
		Pattern(node, _, ancestors) {
			if(node.type !== "Identifier") return;
			Identifier(node, _, ancestors);
		},
		Identifier
	});
	
	return generate(ast);
}

const jsDir = join(__dirname, "../data/js");

export function renameModules(dir = jsDir) {
	// read all the modules, then generate a new id
	const files = fs.readdirSync(dir);

	let newIds = new Map<string, string>();
	let assignedIds = new Set<string>();

	for(const file of files) {
		const code = fs.readFileSync(join(dir, file)).toString();
		const [registerRegex, importRegex] = getModuleRegex(code);

		// get the indexes of module definitions
		let modules: [string, number][] = [];

		let match: RegExpExecArray;
		while(match = registerRegex.exec(code)) {
			modules.push([ match[1], match.index ]);
		}

		// replace modules with hashes of their contents
		for(let i = modules.length - 1; i >= 0; i--) {
			let [id, index] = modules[i];

			let end: number;
			if(i == modules.length - 1) end = code.length;
			else end = modules[i + 1][1];

			let start = code.indexOf("register", index) + 15;
			let moduleCode = code.slice(start, end);

			// remove any imports that may get shuffled around
			moduleCode.replaceAll(importRegex, "");

			let newId = createHash("md5").update(moduleCode).digest('base64').slice(0, 5);
			
			// not a great solution, but rare enough it doesn't matter
			if(assignedIds.has(newId)) {
				let discriminant = 0;
				let original = newId;

				// never thought i'd use one of these
				do newId = `${original}${discriminant++}`;
				while(assignedIds.has(newId));
			}

			assignedIds.add(newId);
			newIds.set(id, newId);
		}
	}

	for(const file of files) {
		let code = fs.readFileSync(join(dir, file)).toString();
		const [registerRegex, importRegex] = getModuleRegex(code);

		// update to use the new module ids
		let match: RegExpMatchArray;
		while(match = registerRegex.exec(code)) {
			let newId = newIds.get(match[1]);
			if(!newId) continue; // probably just some random other function that looks the same

			let start = code.indexOf("register", match.index);
			code = code.slice(0, start + 10) + newId + code.slice(start + 15);
		}

		while(match = importRegex.exec(code)) {
			let newId = newIds.get(match[1]);
			if(!newId) continue;

			let start = code.indexOf("(", match.index);
			code = code.slice(0, start + 2) + newId + code.slice(start + 7);
		}
		
		console.log("Finalized", file);
		fs.writeFileSync(join(dir, file), beautify.js(code));
	}
}

const requireRegex = /(.) = [^,]*?.\.parcelRequire388b/;

function getModuleRegex(code: string) {
	const requireRes = requireRegex.exec(code);
	const requireSymbol = requireRes?.[1] ?? "parcelRequire388b";

	const registerRegex = new RegExp(`${requireSymbol}\\.register\\('(.....)',`, 'g');
	const importRegex = new RegExp(`${requireSymbol}\\('(.....)'\\)`, 'g');

	return [registerRegex, importRegex];
}

export function formatCss(code: string) {
	return beautify.css(code);
}