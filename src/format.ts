import { parse, type CallExpression } from "acorn";
import beautify from "js-beautify";
import { normalizeAst } from "normalize-js-code";
import { simple } from "acorn-walk";
import { generate } from "escodegen";

const requireRegex = /(.)=[^,]*.\.parcelRequire388b/;
export function formatJs(code: string) {
	const requireRes = requireRegex.exec(code);
	const requireSymbol = requireRes?.[1] ?? "parcelRequire388b";

	const ast = parse(code, {
		ecmaVersion: "latest",
		sourceType: "module"
	});

	const CallExpression = (node: CallExpression) => {
		if(
			(
				node.arguments.length > 0 &&
				node.arguments[0].type === "Literal" &&
				typeof node.arguments[0].value === "string" &&
				node.arguments[0].value.length === 5
			) && (
				(
					// Replace imports
					node.arguments.length === 1 &&
					node.callee.type === "Identifier" &&
					node.callee.name === requireSymbol
				) || (
					// Replace definitions
					node.arguments.length === 2 &&
					node.callee.type === "MemberExpression" &&
					node.callee.object.type === "Identifier" &&
					node.callee.object.name === requireSymbol &&
					node.callee.property.type === "Identifier" &&
					node.callee.property.name === "register"
				)
			)
		) {
			node.arguments[0].value = ".....";
		}
	}

	simple(ast, {
		CallExpression
	});

	normalizeAst(ast);

	return beautify.js(generate(ast));
}

export function formatCss(code: string) {
	return beautify.css(code);
}