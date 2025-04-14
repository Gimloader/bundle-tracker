function e(e, o, n, t) {
    Object.defineProperty(e, o, {
        get: n,
        set: t,
        enumerable: !0,
        configurable: !0
    })
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("fGVfM", (function(n, t) {
    var i;
    i = n.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return g
    }));
    var l = o("divCp"),
        r = o("alREA"),
        a = o("4uojN"),
        s = o("6Tpu2"),
        f = o("bNmF9"),
        c = o("dPNN3"),
        u = o("h6SIm"),
        d = o("7Kygx");
    class b extends f.default {
        constructor(e) {
            if (super(e), (0, l.default)(this, "useCallToAction", (() => {
                    this.sendToServerDevice(d.Messages.callToAction)
                })), (0, s.InPreGamePhase)() && (0, a.isSavedVersion)()) {
                const e = u.default.Overlay;
                new(0, c.default)({
                    device: this,
                    baseColor: e.baseColor,
                    boxColor: e.boxColor,
                    content: {
                        icon: {
                            image: (0, r.default)("devices/notification/icon.png"),
                            scale: .8
                        }
                    }
                })
            }
        }
    }
    var g = b
})), o.register("7Kygx", (function(o, n) {
    let t;
    e(o.exports, "Messages", (function() {
        return t
    })), (t || (t = {})).callToAction = "primaryCallToAction"
}));