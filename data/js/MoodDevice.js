import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./stores-2.js";
import {
    n
} from "./isVersion.js";
import {
    r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    Ot as a,
    Tt as o
} from "./App-42.js";
var s = class extends i {
    constructor(i) {
        if (super(i), this.resetStore = () => {
                t.me.mood.activeDeviceId = ``, t.me.mood.vignetteActive = !1, t.me.mood.vignetteStrength = 0
            }, this.setStore = () => {
                t.me.mood.activeDeviceId = this.id, t.me.mood.vignetteActive = !0, t.me.mood.vignetteStrength = this.options.vignetteStrength
            }, this.onStateChange = e => {
                r() || e === `active` && (this.state.active === !1 && t.me.mood.activeDeviceId === this.id && this.resetStore(), this.state.active && this.setStore())
            }, r() && n()) {
            let t = a.Overlay;
            new o({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: e(`devices/mood/icon.png`),
                        scale: 1
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