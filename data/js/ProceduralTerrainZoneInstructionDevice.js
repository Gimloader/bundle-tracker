import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./isVersion.js";
import {
    t as n
} from "./InPhase.js";
import {
    t as r
} from "./Device.js";
var i = {
        imageId: `procedural-terrain-zone-instruction-device`,
        imageUrl: e(`devices/procedural_terrain_zone_instruction/icon.png`)
    },
    a = class extends r {
        constructor(e) {
            super(e), !(n() || t()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(i).view.setScale(.25))
        }
    };
export {
    a as
    default
};