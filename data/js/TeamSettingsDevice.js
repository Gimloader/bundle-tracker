var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("6ngRb", (function(o, n) {
    var t, r, a, i, l;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), r = o.exports, a = "default", i = function() {
        return p
    }, Object.defineProperty(r, a, {
        get: i,
        set: l,
        enumerable: !0,
        configurable: !0
    });
    var s = e("alREA"),
        d = e("4uojN"),
        f = e("6Tpu2"),
        u = e("bNmF9"),
        b = e("dPNN3"),
        c = e("h6SIm");
    class g extends u.default {
        constructor(e) {
            if (super(e), (0, f.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = c.default.Setting;
                new(0, b.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, s.default)("devices/team_settings/icon.png")
                        }
                    }
                })
            }
        }
    }
    var p = g
}));