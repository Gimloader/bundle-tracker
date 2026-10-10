var e = e => {
        let t = `#ffffff`;
        if (!e.startsWith(`rgba(`) || !e.endsWith(`)`)) return t;
        let [n, r, i, a] = e.slice(5, -1).split(`,`).map(e => parseInt(e.trim()));
        return n < 0 || n > 255 || r < 0 || r > 255 || i < 0 || i > 255 || a < 0 || a > 1 ? t : `#` + ((1 << 24) + (n << 16) + (r << 8) + i).toString(16).slice(1)
    },
    t = (e, t) => `radial-gradient(circle, ${e} 0%, ${t} 100%)`,
    n = {
        common: {
            a: `rgba(212,212,212,1)`,
            b: `rgba(138,138,138,1)`
        },
        uncommon: {
            a: `rgba(174,255,181,1)`,
            b: `rgba(71,194,82,1)`
        },
        rare: {
            a: `rgba(174,211,255,1)`,
            b: `rgba(59,148,255,1)`
        },
        epic: {
            a: `rgba(205,174,255,1)`,
            b: `rgba(147,80,255,1)`
        },
        legendary: {
            a: `rgba(255,228,160,1)`,
            b: `rgba(230,188,83,1)`
        }
    },
    r = {
        common: t(n.common.a, n.common.b),
        uncommon: t(n.uncommon.a, n.uncommon.b),
        rare: t(n.rare.a, n.rare.b),
        epic: t(n.epic.a, n.epic.b),
        legendary: t(n.legendary.a, n.legendary.b)
    },
    i = {
        common: {
            a: e(n.common.a),
            b: e(n.common.b)
        },
        uncommon: {
            a: e(n.uncommon.a),
            b: e(n.uncommon.b)
        },
        rare: {
            a: e(n.rare.a),
            b: e(n.rare.b)
        },
        epic: {
            a: e(n.epic.a),
            b: e(n.epic.b)
        },
        legendary: {
            a: e(n.legendary.a),
            b: e(n.legendary.b)
        }
    };
export {
    i as n, r as t
};