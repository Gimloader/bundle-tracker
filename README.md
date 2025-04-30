# Gimkit Source Tracker

This repository automatically tracks changes made to Gimkit's bundled code, which happens relatively infrequently. The bundled code is normalized as much as possible to make it easier to see what changed between versions. 

All of the javascript/css is stored in the [data](/data) folder, and differences between versions can be viewed on the [commits](https://github.com/Gimloader/source-tracker/commits/main/data) page.

## Usage

1. Install [Bun](https://bun.sh/)
2. Clone this repository
3. Run `bun i`
4. Run `bun run getCode` to fetch the bundled code.

You can also pass `--push` to getCode to automatically commit and push if changes are made, as well as posting to an optional discord `WEBHOOK_URL` environment variable.