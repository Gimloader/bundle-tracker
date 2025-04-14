var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("4rewA", (function(o, n) {
    var r, a, t, l, i;
    r = o.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), a = o.exports, t = "default", l = function() {
        return p
    }, Object.defineProperty(a, t, {
        get: l,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var u = e("alREA"),
        s = e("4uojN"),
        d = e("6Tpu2"),
        f = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class g extends f.default {
        constructor(e) {
            if (super(e), (0, d.InGamePhase)() || (0, s.isPublishedVersion)()) return;
            const o = b.default.Manager;
            new(0, c.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: (0, u.default)("devices/knockout_manager/icon.png"),
                        scale: .95
                    }
                }
            })
        }
    }
    var p = g
}));