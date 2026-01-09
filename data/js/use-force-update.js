import {
    a as n,
    s as u
} from "./motion.js";
import {
    r
} from "./_index.js";

function c() {
    const e = r.useRef(!1);
    return n(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function i() {
    const e = c(),
        [t, s] = r.useState(0),
        o = r.useCallback(() => {
            e.current && s(t + 1)
        }, [t]);
    return [r.useCallback(() => u.postRender(o), [o]), t]
}
export {
    c as a, i as u
};