function e(e, s, o, t) {
    Object.defineProperty(e, s, {
        get: o,
        set: t,
        enumerable: !0,
        configurable: !0
    })
}
var s = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
s.register("efON3", (function(o, t) {
    var n;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return u
    }));
    var r = s("4uojN"),
        i = s("6Tpu2"),
        a = s("bNmF9"),
        f = s("6VXC4");
    class l extends a.default {
        constructor(e) {
            super(e), (0, r.isPublishedVersion)() || (0, i.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(f.BaseAsset))
        }
    }
    var u = l
})), s.register("6VXC4", (function(o, t) {
    e(o.exports, "BaseAsset", (function() {
        return n
    }));
    const n = {
        imageId: "cosmos_modifier",
        imageUrl: (0, s("alREA").default)("devices/cosmos_modifier/icon.png")
    }
}));