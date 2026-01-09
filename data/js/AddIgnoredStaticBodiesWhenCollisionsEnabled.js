import {
    T as e
} from "./App-41.js";
import {
    F as i
} from "./FixSpinePlugin.js";
const l = r => {
    const o = i(e());
    r.colliders.forEach(s => {
        var d, t, c;
        const a = s.bodyId;
        (c = (t = (d = o == null ? void 0 : o.physics.getBody()) == null ? void 0 : d.character) == null ? void 0 : t.ignoredStaticBodies) == null || c.add(a)
    })
};
export {
    l as A
};