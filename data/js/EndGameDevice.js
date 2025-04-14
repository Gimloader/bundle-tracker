var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("5RQoA", (function(o, t) {
    var n, a, i, l, r;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), a = o.exports, i = "default", l = function() {
        return m
    }, Object.defineProperty(a, i, {
        get: l,
        set: r,
        enumerable: !0,
        configurable: !0
    });
    var d = e("divCp"),
        s = e("6zpVf"),
        u = e("alREA"),
        f = e("4uojN"),
        c = e("6Tpu2"),
        b = e("bNmF9"),
        p = e("dPNN3"),
        g = e("h6SIm");
    class v extends b.default {
        constructor(e) {
            if (super(e), (0, d.default)(this, "onMessage", (e => {
                    "end_game" == e.key && (0, s.EmitTutorialEvent)({
                        event: s.TutorialEventName.END_THE_GAME_BY_DEVICE
                    })
                })), (0, c.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const e = g.default.Utility;
                new(0, p.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, u.default)("devices/end_game/icon.png"),
                            scale: .8
                        }
                    }
                })
            }
        }
    }
    var m = v
}));