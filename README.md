# Gimkit Bundle Tracker

This repository automatically tracks changes made to Gimkit's bundled code, which happens relatively infrequently. It also tracks changes to map data, such as changes to props, items, devices, terrain, or blocks.

All of the javascript/map data is stored in the [data](/data) folder, and differences between versions can be viewed on the [commits](https://github.com/Gimloader/bundle-tracker/commits/main/data) page.

## Usage

1. Install [Node.js](https://nodejs.org/)
2. Clone this repository
3. Run `npm ci`
4. Run `npm run getCode` to fetch the bundled code.

You can also pass `--push` to getCode to automatically commit and push if changes are made, as well as posting to an optional discord `WEBHOOK_URL` environment variable.

### Getting Map Data

To get map data, three environment variables need to be present.
1. `CONNECT_SID`: the `connect.sid` cookie of an account, used for authentication
2. `TOP_DOWN_MAP`: the id of a top-down map owned by the account with the associated `CONNECT_SID`
3. `PLATFORMER_MAP`: the id of a platformer map, also owned by said account.

Then, run `npm run getData`, again with the optional `--push` parameter.

### Getting Official Maps

To get official maps data, you need the aforementioned `CONNECT_SID`, as well as a `KIT_ID` variable. Again, run `npm run getMaps`, optionally with `--push`.