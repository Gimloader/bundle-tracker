import {
    t as e
} from "./GetAssetPath.js";
import {
    n as t
} from "./isVersion.js";
import {
    r as n
} from "./InPhase.js";
import {
    t as r
} from "./Device.js";
import {
    i,
    n as a
} from "./ActionButton.js";
import {
    Ot as o,
    Tt as s
} from "./App-42.js";
var c = class extends r {
    constructor(r) {
        if (super(r), this.onMessage = e => {
                e.key == `end_game` && a({
                    event: i.END_THE_GAME_BY_DEVICE
                })
            }, n() && t()) {
            let t = o.Utility;
            new s({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: e(`devices/end_game/icon.png`),
                        scale: .8
                    }
                }
            })
        }
    }
};
export {
    c as
    default
};