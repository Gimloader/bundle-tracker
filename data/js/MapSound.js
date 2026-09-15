import {
    h as g
} from "./howler.js";
const i = "map-settings",
    r = new Set,
    p = e => (r.add(e), () => {
        r.delete(e)
    }),
    n = {
        renderingQuality: null,
        simpleCharacters: !1,
        otherPlayerTrails: !0,
        muted: !1,
        musicVolume: 1,
        soundEffectVolume: 1,
        teamSymbol: !1,
        lexend: !1,
        highContrast: !1,
        largeFontMode: !1,
        readToMe: !1
    },
    m = Object.keys(n),
    h = () => {
        let e = {};
        try {
            const s = localStorage.getItem(i);
            if (s === null) {
                const t = f => {
                    const u = Number(localStorage.getItem(f) ?? 1);
                    return Number.isFinite(u) ? Math.max(0, Math.min(1, u)) : 1
                };
                e = {
                    musicVolume: t("map-music-volume"),
                    soundEffectVolume: t("map-sound-effect-volume"),
                    readToMe: !!localStorage.getItem("read-to-me")
                }
            } else {
                const t = JSON.parse(s);
                t && typeof t == "object" && !Array.isArray(t) && (e = t)
            }
        } catch {}
        const o = {
            ...n
        };
        return m.forEach(s => {
            const t = e[s];
            (typeof t == "boolean" && typeof n[s] == "boolean" || typeof t == "number" && Number.isFinite(t) && (s === "renderingQuality" || typeof n[s] == "number")) && Object.assign(o, {
                [s]: t
            })
        }), o
    };
let a = h();
const c = () => {
    try {
        localStorage.setItem(i, JSON.stringify(a))
    } catch {}
};
c();
const b = () => a,
    d = e => a[e],
    M = (e, o) => {
        a[e] !== o && (a = {
            ...a,
            [e]: o
        }, c(), r.forEach(s => s()))
    },
    y = () => m.some(e => a[e] !== n[e]),
    E = () => {
        a = {
            ...n
        }, c(), r.forEach(e => e())
    },
    l = new Set;
p(() => {
    const e = d("muted");
    l.forEach(o => o.mute(e))
});
class w extends g.Howl {
    constructor(o) {
        super({
            ...o,
            mute: d("muted")
        }), l.add(this)
    }
    unload() {
        return l.delete(this), super.unload()
    }
}
export {
    w as M, b as a, M as b, d as g, y as h, E as r, p as s
};