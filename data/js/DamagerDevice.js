function e(e, t, a, o) {
    Object.defineProperty(e, t, {
        get: a,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("aLZXT", (function(a, o) {
    var r;
    r = a.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(a.exports, "default", (function() {
        return g
    }));
    var n = t("divCp"),
        i = t("alREA"),
        d = t("4uojN"),
        l = t("6Tpu2"),
        s = t("bNmF9"),
        c = t("dPNN3"),
        u = t("h6SIm"),
        f = t("k0pDL");
    class p extends s.default {
        constructor(e) {
            if (super(e), (0, n.default)(this, "onMessage", (e => {
                    "hit" === e.key && (0, f.OnHit)(e.data)
                })), (0, l.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = u.default.Utility;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)("devices/damager/icon.png"),
                            scale: .85
                        }
                    }
                })
            }
        }
    }
    var g = p
})), t.register("k0pDL", (function(a, o) {
    e(a.exports, "OnHit", (function() {
        return s
    }));
    var r = t("fhnJp"),
        n = t("4xLrO"),
        i = t("gwuwo"),
        d = t("ePPug"),
        l = t("iG5Lo");
    const s = e => {
        const {
            characterId: t,
            damage: a,
            type: o
        } = e;
        if (t && a && o) {
            const e = (0, d.AmISpectator)() ? (0, n.FetchSpectatedId)() : (0, r.default)();
            (0, i.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: t,
                damage: a,
                type: o
            }), t === e && (0, l.default)({
                type: o
            })
        }
    }
}));