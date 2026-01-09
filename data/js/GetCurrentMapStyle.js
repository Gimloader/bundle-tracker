import {
    s
} from "./FixSpinePlugin.js";
import {
    z as l
} from "./App-41.js";
const p = r => {
        var n;
        const e = s.worldOptions.terrainOptions.find(t => t.id === r);
        if (!e) return !1;
        if ((n = e.blockedMapStyles) != null && n.length) {
            const t = s.session.mapStyle;
            if (e.blockedMapStyles.includes(t)) return !1
        }
        const o = e.minimumRoleLevel,
            i = e.maximumRoleLevel;
        return l(o, i)
    },
    c = () => s.session.mapStyle;
export {
    p as C, c as G
};