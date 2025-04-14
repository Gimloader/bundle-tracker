var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("dtGeI", (function(o, n) {
    var t, r, l, a, i;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), r = o.exports, l = "default", a = function() {
        return g
    }, Object.defineProperty(r, l, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var d = e("alREA"),
        s = e("4uojN"),
        u = e("6Tpu2"),
        f = e("bNmF9"),
        c = e("dPNN3"),
        b = e("h6SIm");
    class p extends f.default {
        constructor(e) {
            if (super(e), (0, u.InGamePhase)() || (0, s.isPublishedVersion)()) return;
            const o = b.default.Manager;
            new(0, c.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: (0, d.default)("devices/player_position_detector/icon.png"),
                        scale: .9
                    }
                }
            })
        }
    }
    var g = p
}));