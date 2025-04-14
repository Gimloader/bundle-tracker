var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("aUOFs", (function(o, n) {
    var t, a, l, r, i;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), a = o.exports, l = "default", r = function() {
        return g
    }, Object.defineProperty(a, l, {
        get: r,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var s = e("alREA"),
        d = e("4uojN"),
        f = e("6Tpu2"),
        u = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends u.default {
        constructor(e) {
            if (super(e), (0, f.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = b.default.Utility;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, s.default)("devices/damage_boost/icon.png"),
                            scale: 1
                        }
                    }
                })
            }
        }
    }
    var g = p
}));