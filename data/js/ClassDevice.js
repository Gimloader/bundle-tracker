var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("80p9h", (function(o, n) {
    var t, l, a, r, i;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), l = o.exports, a = "default", r = function() {
        return g
    }, Object.defineProperty(l, a, {
        get: r,
        set: i,
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
                            image: (0, d.default)("devices/end_game/icon.png"),
                            scale: .8
                        }
                    }
                })
            }
        }
    }
    var g = p
}));