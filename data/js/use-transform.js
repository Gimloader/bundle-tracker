import {
    h as i,
    a as f,
    s as m,
    j as p,
    u as l
} from "./motion.js";
import {
    u as y
} from "./use-motion-value.js";
const d = t => typeof t == "object" && t.mix,
    h = t => d(t) ? t.mix : void 0;

function x(...t) {
    const e = !Array.isArray(t[0]),
        n = e ? 0 : -1,
        s = t[0 + n],
        o = t[1 + n],
        u = t[2 + n],
        r = t[3 + n],
        c = i(o, u, {
            mixer: h(u[0]),
            ...r
        });
    return e ? c(s) : c
}

function V(t, e) {
    const n = y(e()),
        s = () => n.set(e());
    return s(), f(() => {
        const o = () => m.update(s, !1, !0),
            u = t.map(r => r.on("change", o));
        return () => {
            u.forEach(r => r()), p.update(s)
        }
    }), n
}

function M(t, e, n, s) {
    const o = typeof e == "function" ? e : x(e, n, s);
    return Array.isArray(t) ? a(t, o) : a([t], ([u]) => o(u))
}

function a(t, e) {
    const n = l(() => []);
    return V(t, () => {
        n.length = 0;
        const s = t.length;
        for (let o = 0; o < s; o++) n[o] = t[o].get();
        return e(n)
    })
}
export {
    M as u
};