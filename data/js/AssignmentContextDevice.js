function e(e, t, n, s) {
    Object.defineProperty(e, t, {
        get: n,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("9fxjW", (function(n, s) {
    var a;
    a = n.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return f
    }));
    var r = t("4uojN"),
        i = t("6Tpu2"),
        o = t("bNmF9"),
        l = t("7AaRj");
    class u extends o.default {
        constructor(e) {
            super(e), (0, r.isPublishedVersion)() || (0, i.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(l.BaseAsset))
        }
    }
    var f = u
})), t.register("7AaRj", (function(n, s) {
    e(n.exports, "BaseAsset", (function() {
        return a
    }));
    const a = {
        imageId: "assignment_context_device",
        imageUrl: (0, t("alREA").default)("devices/assignment_context/search.png")
    }
}));