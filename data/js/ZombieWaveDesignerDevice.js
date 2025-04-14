var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("bAADF", (function(o, n) {
    var t, r, i, a, s;
    t = o.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), r = o.exports, i = "default", a = function() {
        return p
    }, Object.defineProperty(r, i, {
        get: a,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var l = e("4uojN"),
        u = e("6Tpu2"),
        b = e("bNmF9"),
        d = e("dPNN3"),
        f = e("h6SIm");
    class c extends b.default {
        constructor(e) {
            if (super(e), (0, u.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const e = f.default.Zombies;
                new(0, d.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        text: {
                            text: this.options.waveNumber ? `Zombie\nWave\n${this.options.waveNumber}` : "Zombie\nWave\nDesigner"
                        }
                    }
                })
            }
        }
    }
    var p = c
}));