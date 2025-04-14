var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("5stb4", (function(o, t) {
    var n, i, r, s, l;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), i = o.exports, r = "default", s = function() {
        return c
    }, Object.defineProperty(i, r, {
        get: s,
        set: l,
        enumerable: !0,
        configurable: !0
    });
    var a = e("4uojN"),
        d = e("6Tpu2"),
        f = e("bNmF9"),
        u = e("dPNN3"),
        b = e("h6SIm");
    class p extends f.default {
        constructor(e) {
            if (super(e), (0, d.InPreGamePhase)() && (0, a.isSavedVersion)()) {
                const e = b.default.Zombies;
                new(0, u.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        text: {
                            text: this.options.type ? `Zombie\n${this.options.type}` : "Zombie\nDesigner"
                        }
                    }
                })
            }
        }
    }
    var c = p
}));