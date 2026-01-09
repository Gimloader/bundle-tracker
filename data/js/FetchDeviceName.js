import {
    D as n
} from "./TutorialConsts.js";
import {
    k as p,
    p as c
} from "./App-41.js";
import {
    s as a
} from "./FixSpinePlugin.js";
const u = r => {
    var s, i;
    const e = a.world.devices.devices.get(r);
    if (!e) return "";
    if (e.name) return e.name;
    if (e.deviceOption.id === n.prop) {
        const o = e.options;
        if (o.propId) {
            const t = (s = p(o.propId)) == null ? void 0 : s.name;
            if (t) return t
        }
    }
    if (e.deviceOption.id === n.scalableShape) {
        const o = e.options;
        if (o.customAssetId) {
            const t = (i = c(o.customAssetId)) == null ? void 0 : i.name;
            if (t) return t
        }
    }
    return e.deviceOption.name
};
export {
    u as F
};