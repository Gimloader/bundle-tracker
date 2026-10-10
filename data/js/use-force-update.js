import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    _ as n,
    d as r
} from "./motion.js";
var i = e(t(), 1);

function a() {
    let e = (0, i.useRef)(!1);
    return n(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function o() {
    let e = a(),
        [t, n] = (0, i.useState)(0),
        o = (0, i.useCallback)(() => {
            e.current && n(t + 1)
        }, [t]);
    return [(0, i.useCallback)(() => r.postRender(o), [o]), t]
}
export {
    a as n, o as t
};