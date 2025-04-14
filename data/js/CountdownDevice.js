function e(e, n, t, o) {
    Object.defineProperty(e, n, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("fc1ju", (function(t, o) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return f
    }));
    var s = n("4uojN"),
        i = n("6Tpu2"),
        u = n("bNmF9"),
        a = n("8j4Ly");
    class d extends u.default {
        constructor(e) {
            super(e), (0, i.InPreGamePhase)() && (0, s.isSavedVersion)() && this.parts.add.sprite(a.BaseAsset)
        }
    }
    var f = d
})), n.register("8j4Ly", (function(t, o) {
    e(t.exports, "BaseAsset", (function() {
        return r
    }));
    const r = {
        imageId: "countdown_device",
        imageUrl: (0, n("alREA").default)("devices/countdown/count-down-device.png")
    }
}));