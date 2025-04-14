var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("328SL", (function(t, i) {
    var n, o, a, l, r;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), o = t.exports, a = "default", l = function() {
        return m
    }, Object.defineProperty(o, a, {
        get: l,
        set: r,
        enumerable: !0,
        configurable: !0
    });
    var d = e("divCp"),
        u = e("iRjsB"),
        s = e("z5iun"),
        f = e("fwdZN"),
        c = e("alREA"),
        p = e("4uojN"),
        b = e("6Tpu2"),
        v = e("goohJ"),
        h = e("bNmF9"),
        g = e("dPNN3"),
        x = e("h6SIm");
    class C extends h.default {
        constructor(e) {
            if (super(e), (0, d.default)(this, "onInit", (() => {
                    this.alertTextExplainerDeviceAboutChange()
                })), (0, d.default)(this, "alertTextExplainerDeviceAboutChange", (() => {
                    if (u.default.me.currentAction === f.default.deviceUI) {
                        const e = u.default.me.deviceUI.current.deviceId,
                            t = (0, v.FetchDeviceById)(e);
                        t && t.deviceOption.id === s.default.textExplainer && (null == t || t.onPopupListItemStateChange())
                    }
                })), (0, d.default)(this, "onStateChange", (e => {
                    this.alertTextExplainerDeviceAboutChange()
                })), (0, b.InPreGamePhase)() && (0, p.isSavedVersion)()) {
                const e = x.default.Overlay;
                new(0, g.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, c.default)("devices/popup_list_item/icon.png"),
                            scale: .85
                        }
                    }
                })
            }
        }
    }
    var m = C
}));