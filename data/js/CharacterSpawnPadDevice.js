import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./isVersion.js";
import {
    r as n,
    t as r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    r as a
} from "./GlobalLocalDepth.js";
var o = {
        imageId: e(`devices/spawn_pad/base_without_character.png`),
        imageUrl: e(`devices/spawn_pad/base_without_character.png`)
    },
    s = {
        imageId: e(`devices/spawn_pad/base_with_character.png`),
        imageUrl: e(`devices/spawn_pad/base_with_character.png`)
    },
    c = class extends i {
        constructor(e) {
            if (super(e), !this.options.visibleInGame && (r() || t())) return;
            let i = n() ? s : o;
            this.parts.add.sprite({
                ...i,
                y: -18
            }).view.setScale(.5), this.layers.setDefaultLayer(a.DevicesUnderCharacters)
        }
    };
export {
    c as
    default
};