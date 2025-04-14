var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("dBAJR", (function(t, o) {
    var i, a, d, n, s;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), a = t.exports, d = "default", n = function() {
        return b
    }, Object.defineProperty(a, d, {
        get: n,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var l = e("divCp"),
        r = e("iRjsB"),
        f = e("alREA"),
        u = e("4uojN"),
        c = e("6Tpu2"),
        v = e("bNmF9"),
        m = e("dPNN3"),
        h = e("h6SIm");
    class g extends v.default {
        constructor(e) {
            if (super(e), (0, l.default)(this, "resetStore", (() => {
                    r.default.me.mood.activeDeviceId = "", r.default.me.mood.vignetteActive = !1, r.default.me.mood.vignetteStrength = 0
                })), (0, l.default)(this, "setStore", (() => {
                    r.default.me.mood.activeDeviceId = this.id, r.default.me.mood.vignetteActive = !0, r.default.me.mood.vignetteStrength = this.options.vignetteStrength
                })), (0, l.default)(this, "onStateChange", (e => {
                    (0, c.InPreGamePhase)() || "active" === e && (!1 === this.state.active && r.default.me.mood.activeDeviceId === this.id && this.resetStore(), this.state.active && this.setStore())
                })), (0, c.InPreGamePhase)() && (0, u.isSavedVersion)()) {
                const e = h.default.Overlay;
                new(0, m.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)("devices/mood/icon.png"),
                            scale: 1
                        }
                    }
                })
            }
        }
    }
    var b = g
}));