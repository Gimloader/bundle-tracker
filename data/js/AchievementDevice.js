import {
    c as e
} from "./utils.js";
import {
    t
} from "./GetAssetPath.js";
import {
    t as n
} from "./stores-2.js";
import {
    t as r
} from "./isVersion.js";
import {
    t as i
} from "./InPhase.js";
import {
    t as a
} from "./FetchMyId.js";
import {
    t as o
} from "./Device.js";
var s = {
        imageId: `achievement_device`,
        imageUrl: t(`devices/achievement/icon.png`)
    },
    c = function(e) {
        return e.show = `show`, e
    }({}),
    l = class extends o {
        constructor(t) {
            super(t), this.onMessage = t => {
                t.key === c.show && (t == null ? void 0 : t.data) === a() && n.gui.achievement.update(this.id, e())
            }, !(r() || i()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(s))
        }
    };
export {
    l as
    default
};