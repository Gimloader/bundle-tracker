var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("a7j2s", (function(o, i) {
    var n, t, a, l, d;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t = o.exports, a = "default", l = function() {
        return C
    }, Object.defineProperty(t, a, {
        get: l,
        set: d,
        enumerable: !0,
        configurable: !0
    });
    var r = e("divCp"),
        u = e("iRjsB"),
        c = e("z5iun"),
        f = e("alREA"),
        s = e("4uojN"),
        v = e("6Tpu2"),
        g = e("goohJ"),
        b = e("bNmF9"),
        p = e("dPNN3"),
        h = e("h6SIm");
    class y extends b.default {
        constructor(e) {
            if (super(e), (0, r.default)(this, "onStateChange", (e => {
                    if ("active" === e) {
                        var o;
                        const e = null === (o = u.default.me.deviceUI.current) || void 0 === o ? void 0 : o.deviceId;
                        if (!e) return;
                        const i = (0, g.FetchDeviceById)(e);
                        if (!i || i.deviceOption.id !== c.default.dialogue) return;
                        null == i || i.onDialogueActionChange()
                    }
                })), (0, v.InPreGamePhase)() && (0, s.isSavedVersion)()) {
                const e = h.default.Overlay;
                new(0, p.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)("devices/dialogue_action/icon.png"),
                            scale: .92
                        }
                    }
                })
            }
        }
    }
    var C = y
}));