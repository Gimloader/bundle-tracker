var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("ffy06", (function(o, n) {
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
    var f = e("alREA"),
        d = e("4uojN"),
        s = e("6Tpu2"),
        u = e("bNmF9"),
        b = e("dPNN3"),
        c = e("h6SIm");
    class g extends u.default {
        constructor(e) {
            if (super(e), (0, s.InPreGamePhase)() && (0, d.isSavedVersion)()) {
                const e = c.default.Manager;
                new(0, b.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)("devices/laser_beam_manager/icon.png")
                        }
                    }
                })
            }
        }
    }
    var p = g
}));