function e(e, o, t, n) {
    Object.defineProperty(e, o, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function o(e) {
    return e && e.__esModule ? e.default : e
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("hWBX5", (function(o, n) {
    var i;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return b
    }));
    var l = t("divCp"),
        a = t("6Tpu2"),
        s = t("bNmF9"),
        r = t("hQzka"),
        c = t("2BPYb"),
        u = t("4uojN"),
        d = t("dPNN3"),
        f = t("alREA"),
        p = t("h6SIm");
    class g extends s.default {
        constructor(e) {
            if (super(e), (0, l.default)(this, "openDeviceUI", (() => {
                    this.deviceUI.open({
                        style: this.options.style,
                        defaultFontFamily: this.options.defaultFontFamily,
                        defaultBackgroundColor: this.options.defaultBackgroundColor,
                        closableByUser: this.options.closableByUser,
                        code: this.options.code
                    })
                })), (0, l.default)(this, "callAction", (e => {
                    this.sendToServerDevice(r.Messages.callAction, {
                        calledActionName: e
                    })
                })), (0, c.default)({
                    familyName: this.options.defaultFontFamily
                }), (0, a.InPreGamePhase)() && (0, u.isSavedVersion)()) {
                const e = p.default.Overlay;
                new(0, d.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)("devices/code_ui/icon.png"),
                            scale: .92
                        }
                    }
                })
            }
        }
    }
    var b = g
})), t.register("hQzka", (function(o, t) {
    let n;
    e(o.exports, "Messages", (function() {
        return n
    })), (n || (n = {})).callAction = "callAction"
})), t.register("2BPYb", (function(n, i) {
    e(n.exports, "isGoogleFontLoaded", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return r
    }));
    var l = t("7P9gc");
    const a = [],
        s = e => a.includes(e);
    var r = e => {
        const {
            familyName: t,
            onLoad: n
        } = e;
        a.includes(t) ? n && n() : o(l).load({
            google: {
                families: [`${t}:400,700`]
            },
            fontactive: e => {
                a.includes(e) || a.push(e), t === e && n && n()
            }
        })
    }
}));