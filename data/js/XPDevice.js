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
        imageId: `xp_device`,
        imageUrl: e(`devices/xp/xp.png`)
    },
    a = class extends r {
        constructor(e) {
            super(e), !(n() || t()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(i))
        }
    };
export {
    a as
    default
};