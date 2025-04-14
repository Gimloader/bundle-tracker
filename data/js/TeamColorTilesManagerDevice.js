var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("8ZAQ0", (function(o, n) {
    var a, r, l, t, i;
    a = o.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), r = o.exports, l = "default", t = function() {
        return p
    }, Object.defineProperty(r, l, {
        get: t,
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
    class g extends u.default {
        constructor(e) {
            if (super(e), (0, f.InPreGamePhase)() && (0, s.isSavedVersion)()) {
                const e = b.default.Manager;
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
    var p = g
}));