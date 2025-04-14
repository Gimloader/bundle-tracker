var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("79WBY", (function(o, t) {
    var n, r, i, l, a;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), r = o.exports, i = "default", l = function() {
        return g
    }, Object.defineProperty(r, i, {
        get: l,
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
                            image: (0, d.default)("devices/team_switcher/icon.png")
                        }
                    }
                })
            }
        }
    }
    var g = p
}));