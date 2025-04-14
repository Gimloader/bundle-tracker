function e(e, t, n, o) {
    Object.defineProperty(e, t, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("aUm5X", (function(n, o) {
    var i;
    i = n.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return m
    }));
    var r = t("6EcnK"),
        a = t("alREA"),
        s = t("4uojN"),
        l = t("6Tpu2"),
        d = t("bNmF9"),
        u = t("dPNN3"),
        f = t("h6SIm"),
        c = t("fniCL");
    class g extends d.default {
        constructor(e) {
            if (super(e), (0, l.InGamePhase)() || (0, s.isPublishedVersion)()) return;
            let t = c.UnknownItemAsset.imageUrl;
            const n = (0, r.default)(this.options.itemId);
            n && (t = n.previewImage);
            const o = f.default.Overlay;
            new(0, u.default)({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, a.default)("devices/gadget_modifier/icon.png"),
                        scale: 1
                    },
                    icon: {
                        image: t,
                        scale: 1
                    }
                }
            })
        }
    }
    var m = g
})), t.register("fniCL", (function(n, o) {
    e(n.exports, "BaseAsset", (function() {
        return r
    })), e(n.exports, "UnknownItemAsset", (function() {
        return a
    }));
    var i = t("alREA");
    const r = {
            imageId: (0, i.default)("devices/item_granter/base.png"),
            imageUrl: (0, i.default)("devices/item_granter/base.png")
        },
        a = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, i.default)("devices/item_granter/question-mark-2.png")
        }
}));