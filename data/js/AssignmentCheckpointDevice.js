function e(e, n, t, s) {
    Object.defineProperty(e, n, {
        get: t,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("e2zPP", (function(t, s) {
    var i;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return d
    }));
    var r = n("4uojN"),
        a = n("6Tpu2"),
        o = n("bNmF9"),
        l = n("ir3dU");
    class u extends o.default {
        constructor(e) {
            super(e), (0, r.isPublishedVersion)() || (0, a.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(l.BaseAsset))
        }
    }
    var d = u
})), n.register("ir3dU", (function(t, s) {
    e(t.exports, "BaseAsset", (function() {
        return i
    }));
    const i = {
        imageId: "assignment_checkpoint_device",
        imageUrl: (0, n("alREA").default)("devices/assignment_checkpoint/flag.png")
    }
}));