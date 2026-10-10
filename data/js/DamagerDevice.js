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
    Ot as i,
    Tt as a
} from "./App-42.js";
import {
    t as o
} from "./OnHit.js";
var s = class extends r {
    constructor(r) {
        if (super(r), this.onMessage = e => {
                e.key === `hit` && o(e.data)
            }, n() && t()) {
            let t = i.Utility;
            new a({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: e(`devices/damager/icon.png`),
                        scale: .85
                    }
                }
            })
        }
    }
};
export {
    s as
    default
};