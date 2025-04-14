function e(e, n, t, o) {
    Object.defineProperty(e, n, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("fOCTd", (function(t, o) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return m
    }));
    var i = n("6EcnK"),
        r = n("alREA"),
        s = n("4uojN"),
        l = n("6Tpu2"),
        d = n("bNmF9"),
        f = n("dPNN3"),
        u = n("h6SIm"),
        c = n("fniCL");
    class g extends d.default {
        constructor(e) {
            if (super(e), (0, l.InPreGamePhase)() && (0, s.isSavedVersion)()) {
                let e = c.UnknownItemAsset.imageUrl;
                const n = (0, i.default)(this.options.itemId);
                n && (e = n.previewImage);
                const t = u.default.Manager;
                new(0, f.default)({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        topLeftIcon: {
                            image: (0, r.default)("devices/inventory_item_manager/icon.png"),
                            scale: 1
                        },
                        icon: {
                            image: e,
                            scale: 1
                        }
                    }
                })
            }
        }
    }
    var m = g
})), n.register("fniCL", (function(t, o) {
    e(t.exports, "BaseAsset", (function() {
        return i
    })), e(t.exports, "UnknownItemAsset", (function() {
        return r
    }));
    var a = n("alREA");
    const i = {
            imageId: (0, a.default)("devices/item_granter/base.png"),
            imageUrl: (0, a.default)("devices/item_granter/base.png")
        },
        r = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, a.default)("devices/item_granter/question-mark-2.png")
        }
}));