var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("7DObf", (function(o, n) {
    var r, t, a, l, i;
    r = o.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), t = o.exports, a = "default", l = function() {
        return g
    }, Object.defineProperty(t, a, {
        get: l,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var d = e("alREA"),
        f = e("4uojN"),
        u = e("6Tpu2"),
        s = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends s.default {
        constructor(e) {
            if (super(e), (0, u.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const e = b.default.Communication;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, d.default)("devices/relay/icon.png")
                        }
                    }
                })
            }
        }
    }
    var g = p
}));