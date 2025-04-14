function e(e, n, t, o) {
    Object.defineProperty(e, n, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("7CG5Z", (function(t, o) {
    var i;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return p
    }));
    var r = n("alREA"),
        a = n("4uojN"),
        s = n("6Tpu2"),
        l = n("bNmF9"),
        u = n("dPNN3"),
        d = n("h6SIm"),
        f = n("fniCL"),
        c = n("6EcnK");
    class g extends l.default {
        constructor(e) {
            if (super(e), (0, s.InGamePhase)() || (0, a.isPublishedVersion)()) return;
            let n = f.UnknownItemAsset.imageUrl;
            const t = (0, c.default)(this.options.itemId);
            t && (n = t.previewImage);
            const o = d.default.Overlay;
            new(0, u.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, r.default)("devices/starting_inventory/icon.png"),
                        scale: 1
                    },
                    icon: {
                        image: n,
                        scale: 1
                    }
                }
            })
        }
    }
    var p = g
})), n.register("fniCL", (function(t, o) {
    e(t.exports, "BaseAsset", (function() {
        return r
    })), e(t.exports, "UnknownItemAsset", (function() {
        return a
    }));
    var i = n("alREA");
    const r = {
            imageId: (0, i.default)("devices/item_granter/base.png"),
            imageUrl: (0, i.default)("devices/item_granter/base.png")
        },
        a = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, i.default)("devices/item_granter/question-mark-2.png")
        }
}));