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
        imageId: `cosmos_modifier`,
        imageUrl: e(`devices/cosmos_modifier/icon.png`)
    },
    a = class extends r {
        constructor(e) {
            super(e), !(t() || n()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(i))
        }
    };
export {
    a as
    default
};