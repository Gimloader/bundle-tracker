const d = () => {},
    a = () => 5988,
    f = () => {},
    s = () => 1499,
    c = (e, r = !1) => {
        const t = Math.floor(e / 100),
            n = e % 100;
        return r && n === 0 ? `$${t}` : `$${t}.${n.toString().padStart(2,"0")}`
    },
    l = (e, r) => {
        let t = e;
        return r != null && r.roundUp && t % 100 !== 0 && (t = Math.ceil(t / 100) * 100), c(t, (r == null ? void 0 : r.simple) ?? !1)
    },
    g = e => l(a(), e),
    P = e => c(Math.round(a() / 12), (e == null ? void 0 : e.simple) ?? !1),
    i = e => l(s(), e);
export {
    f as a, a as b, s as c, g as d, P as e, i as f, d as g
};