var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("h40Hc", (function(o, n) {
    var r, t, l, a, i;
    r = o.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), t = o.exports, l = "default", a = function() {
        return g
    }, Object.defineProperty(t, l, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var s = e("alREA"),
        u = e("4uojN"),
        d = e("6Tpu2"),
        f = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends f.default {
        constructor(e) {
            if (super(e), (0, d.InGamePhase)() || (0, u.isPublishedVersion)()) return;
            const o = b.default.Manager;
            new(0, c.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: (0, s.default)("devices/movement_meter/icon.png"),
                        scale: 1
                    }
                }
            })
        }
    }
    var g = p
}));