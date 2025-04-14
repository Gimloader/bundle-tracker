function e(e, n, t, i) {
    Object.defineProperty(e, n, {
        get: t,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("7qiFg", (function(t, i) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return p
    }));
    var r = n("alREA"),
        a = n("4uojN"),
        s = n("6Tpu2"),
        l = n("6EcnK"),
        u = n("bNmF9"),
        f = n("dPNN3"),
        d = n("h6SIm"),
        c = n("fniCL");
    class g extends u.default {
        constructor(e) {
            if (super(e), (0, a.isPublishedVersion)() || (0, s.InGamePhase)()) return;
            let n = c.UnknownItemAsset.imageUrl;
            const t = (0, l.default)(this.options.item);
            t && (n = t.previewImage);
            const i = d.default.Overlay;
            new(0, f.default)({
                device: this,
                baseColor: i.baseColor,
                boxColor: i.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, r.default)("devices/crafting_recipe/icon.png"),
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
})), n.register("fniCL", (function(t, i) {
    e(t.exports, "BaseAsset", (function() {
        return r
    })), e(t.exports, "UnknownItemAsset", (function() {
        return a
    }));
    var o = n("alREA");
    const r = {
            imageId: (0, o.default)("devices/item_granter/base.png"),
            imageUrl: (0, o.default)("devices/item_granter/base.png")
        },
        a = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, o.default)("devices/item_granter/question-mark-2.png")
        }
}));