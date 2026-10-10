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
        if (super(r), n() && t()) {
            let t = s.imageUrl,
                n = i(this.options.itemId);
            n && (t = n.previewImage);
            let r = a.Manager;
            new o({
                device: this,
                baseColor: r.baseColor,
                boxColor: r.boxColor,
                content: {
                    topLeftIcon: {
                        image: e(`devices/inventory_item_manager/icon.png`),
                        scale: 1
                    },
                    icon: {
                        image: t,
                        scale: 1
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