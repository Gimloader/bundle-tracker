var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("keVqa", (function(o, n) {
    var t, l, r, a, i;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), l = o.exports, r = "default", a = function() {
        return g
    }, Object.defineProperty(l, r, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var s = e("alREA"),
        u = e("4uojN"),
        d = e("6Tpu2"),
        f = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends f.default {
        constructor(e) {
            if (super(e), (0, d.InGamePhase)() || (0, u.isPublishedVersion)()) return;
            const o = b.default.Utility;
            new(0, c.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: (0, s.default)("devices/health_granter/icon.png"),
                        scale: .95
                    }
                }
            })
        }
    }
    var g = p
}));