import {
    n as e
} from "./isVersion.js";
import {
    r as t
} from "./InPhase.js";
import {
    t as n
} from "./Device.js";
import {
    Ot as r,
    Tt as i
} from "./App-42.js";
import {
    n as a,
    t as o
} from "./FetchOptionSchemaProperty.js";
var s = class extends n {
    constructor(n) {
        if (super(n), t() && e()) {
            let e = r.Zombies,
                t = o(this, `targetRadius`);
            this.visualEditing.add.circle({
                angle: 0,
                rotable: !1,
                radius: this.options.targetRadius,
                minRadius: t.min,
                maxRadius: t.max,
                onChange: e => {
                    a(e.x, e.y, {
                        targetRadius: e.radius
                    })
                }
            }), new i({
                device: this,
                baseColor: e.baseColor,
                boxColor: e.boxColor,
                content: {
                    text: {
                        text: `Zombie
Invasion`
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