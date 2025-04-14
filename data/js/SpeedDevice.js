var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("d7iPL", (function(o, n) {
    var t, i, l, r, a;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), i = o.exports, l = "default", r = function() {
        return g
    }, Object.defineProperty(i, l, {
        get: r,
        set: a,
        enumerable: !0,
        configurable: !0
    });
    var d = e("alREA"),
        s = e("4uojN"),
        f = e("6Tpu2"),
        u = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends u.default {
        constructor(e) {
            if (super(e), (0, f.InPreGamePhase)() && (0, s.isSavedVersion)()) {
                const e = b.default.Utility;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, d.default)("devices/speed/icon.png")
                        }
                    }
                })
            }
        }
    }
    var g = p
}));