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
import {
    t as i
} from "./FetchItemById.js";
import {
    Ot as a,
    Tt as o
} from "./App-42.js";
import {
    n as s
} from "./Assets.js";
var c = class extends r {
    constructor(r) {
        if (super(r), n() || t()) return;
        let c = s.imageUrl,
            l = i(this.options.itemId);
        l && (c = l.previewImage);
        let u = a.Overlay;
        new o({
            device: this,
            baseColor: u.baseColor,
            boxColor: u.boxColor,
            content: {
                topLeftIcon: {
                    image: e(`devices/starting_inventory/icon.png`),
                    scale: 1
                },
                icon: {
                    image: c,
                    scale: 1
                }
            }
        })
    }
};
export {
    c as
    default
};