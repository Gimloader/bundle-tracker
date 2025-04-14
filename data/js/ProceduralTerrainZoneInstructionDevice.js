function e(e, r, n, t) {
    Object.defineProperty(e, r, {
        get: n,
        set: t,
        enumerable: !0,
        configurable: !0
    })
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("ffpg2", (function(n, t) {
    var i;
    i = n.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return f
    }));
    var o = r("4uojN"),
        s = r("6Tpu2"),
        a = r("bNmF9"),
        u = r("5S7QR");
    class l extends a.default {
        constructor(e) {
            if (super(e), (0, s.InGamePhase)() || (0, o.isPublishedVersion)()) return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(u.BaseAsset).view.setScale(.25)
        }
    }
    var f = l
})), r.register("5S7QR", (function(n, t) {
    e(n.exports, "BaseAsset", (function() {
        return i
    }));
    const i = {
        imageId: "procedural-terrain-zone-instruction-device",
        imageUrl: (0, r("alREA").default)("devices/procedural_terrain_zone_instruction/icon.png")
    }
}));