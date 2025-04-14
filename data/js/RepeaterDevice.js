var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("josk5", (function(o, n) {
    var r, a, t, l, i;
    r = o.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), a = o.exports, t = "default", l = function() {
        return g
    }, Object.defineProperty(a, t, {
        get: l,
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
                const e = b.default.Manager;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, s.default)("devices/repeater/icon.png"),
                            scale: .8
                        }
                    }
                })
            }
        }
    }
    var g = p
}));