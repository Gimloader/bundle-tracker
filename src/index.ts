import { parseArgs } from "node:util";
import { sendError } from "./net/webhook";
import { HandledError } from "./util";
import extractCode from "./extractors/code";
import { extractGamedata } from "./extractors/gamedata";

const { values: { force, push }, positionals: [extractor] } = parseArgs({
    args: process.argv.slice(2),
    options: {
        force: { type: "boolean", short: "f", default: false },
        push: { type: "boolean", short: "p", default: false }
    },
    allowPositionals: true
});

if(extractor === "code") {
    extractCode(force, push).then(quit, onExtractError);
} else if(extractor === "gamedata") {
    extractGamedata(push).then(quit, onExtractError);
} else {
    throw new Error("Extractor must be either 'code' or 'gamedata'");
}

function quit() {
    // Force any stuff that might still be running to shut down
    process.exit(0);
}

function onExtractError(err: unknown) {
    console.error(err);
    if(err instanceof HandledError) process.exit(1);

    sendError("An Unexpected Error Occurred", `Failed to run ${extractor} extractor: ${err}`).then(() => {
        process.exit(1);
    });
}