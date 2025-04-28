import beautify from "js-beautify";
import { createHash } from "node:crypto";
import * as walk from "acorn-walk";
import { parse, type ClassDeclaration, type FunctionDeclaration, type FunctionExpression, type Identifier, type Node, type VariableDeclarator } from "acorn";
import { generate } from "escodegen";
import fs from "node:fs";
import { join } from "node:path";

export function formatJs(code: string) {
	let ast = parse(code, {
		ecmaVersion: "latest",
		sourceType: "module"
	});

	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$";
	let names: string[] = [];
	let nameNumber = 0;

	// if we get beyond 3 characters something has gone seriously wrong
	const reserved = ["in", "if", "of", "do", "for", "try", "int", "new", "var"];

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

	const scopeChanges = ["Program", "IfStatement", "SwitchStatement", "TryStatement", "FunctionDeclaration", "FunctionExpression", "BlockStatement"];
	let unassignedIdentifiers = new Map<string, Identifier[]>();

	interface Scope {
		names: Map<string, string>;
		nameIndex: number;
		node: Node;
	}

	let scopes: Scope[] = [{ node: ast, nameIndex: 0, names: new Map() }];
	
	const Identifier = (node: Identifier, _: never, ancestors: Node[]) => {
		let declaration = false;

		// Find the first shared ancestor
		let ancestor = ancestors[0];
		let scopesIndex = 0;
		let ancestorIndex = 0;
		for(let i = ancestors.length - 1; i >= 1; i--) {
			let node = ancestors[i];
			if(!scopeChanges.includes(node.type)) continue;

			let index = scopes.findIndex(s => s.node === node);
			if(index === -1) continue;
			
			ancestor = node;
			scopesIndex = index;
			ancestorIndex = i;
			break;
		}

		// Remove all the unnecessary scopes
		scopes = scopes.slice(0, scopesIndex + 1);

		// Add on the new ones
		for(let i = ancestorIndex + 1; i < ancestors.length; i++) {
			let node = ancestors[i];
			if(!scopeChanges.includes(node.type)) continue;

			scopes.push({ node, nameIndex: 0, names: new Map() });
		}

		// console.log(node.name, scopes.length, scopes.map(s => s.node.type), ancestors.map(a => a.type));

		let parent = ancestors[ancestors.length - 2];

		if(
			(parent.type.endsWith("Pattern")) ||
			(parent.type === "VariableDeclarator" && (parent as VariableDeclarator).id === node) ||
			(parent.type === "FunctionDeclaration" && (parent as FunctionDeclaration).id === node) ||
			(parent.type === "FunctionDeclaration" && (parent as FunctionDeclaration).params.includes(node)) ||
			(parent.type === "FunctionExpression" && (parent as FunctionExpression).params.includes(node)) ||
			(parent.type === "ClassDeclaration" && (parent as ClassDeclaration).id === node)
		) {
			declaration = true;
		}

		let scope = scopes[scopes.length - 1];

		if(declaration) {
			// generate a new name to replace it with
			scope.nameIndex++;

			let number = scopes.reduce((a, b) => a + b.nameIndex, 0) - 1;
			if(!names[number]) nextName();

			let name = names[number];

			// rename all the unassigned ones
			let unassigned = unassignedIdentifiers.get(node.name);
			if(unassigned) {
				name = "_" + name;
				for(let node of unassigned) node.name = name;
				unassignedIdentifiers.delete(node.name);
			}

			scope.names.set(node.name, name);
			node.name = name;
		} else {
			// find the name to replace it with
			for(let i = scopes.length - 1; i >= 0; i--) {
				let scope = scopes[i];
				if(!scope.names.has(node.name)) continue;

				node.name = scope.names.get(node.name);
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

export async function renameModules(callback: (file: string) => void, dir = jsDir) {
	// read all the modules, then generate a new id
	const files = fs.readdirSync(dir);

	let newIds = new Map<string, string>();
	let assignedIds = new Set<string>();

	for(const file of files) {
		const code = await Bun.file(join(dir, file)).text();
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
		let code = await Bun.file(join(dir, file)).text();
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
		
		callback(file);
		await Bun.file(join(dir, file)).write(beautify.js(code));
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