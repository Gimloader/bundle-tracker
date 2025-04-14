var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("6mB1r", (function(o, n) {
    var r, t, l, i, a;
    r = o.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), t = o.exports, l = "default", i = function() {
        return g
    }, Object.defineProperty(t, l, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    });
    var d = e("alREA"),
        f = e("4uojN"),
        s = e("6Tpu2"),
        u = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends u.default {
        constructor(e) {
            if (super(e), (0, s.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const e = b.default.Utility;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, d.default)("devices/checker/icon.png")
                        }
                    }
                })
            }
        }
    }
    var g = p
}));