function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("liVM1", (function(n, r) {
    var s;
    s = n.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return d
    }));
    var i = t("4uojN"),
        a = t("6Tpu2"),
        o = t("bNmF9"),
        l = t("3e03Q");
    class u extends o.default {
        constructor(e) {
            super(e), (0, a.InGamePhase)() || (0, i.isPublishedVersion)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(l.BaseAsset))
        }
    }
    var d = u
})), t.register("3e03Q", (function(n, r) {
    e(n.exports, "BaseAsset", (function() {
        return s
    }));
    const s = {
        imageId: "xp_device",
        imageUrl: (0, t("alREA").default)("devices/xp/xp.png")
    }
}));