function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("buvaz", (function(i, a) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return w
    }));
    var n = t("divCp"),
        d = t("bvStP"),
        r = t("iRjsB"),
        o = t("9oxA4"),
        h = t("050o1"),
        u = t("fHf8O"),
        l = t("4uojN"),
        f = t("6Tpu2"),
        g = t("bNmF9"),
        p = t("fniCL");
    class m extends g.default {
        constructor(e) {
            super(e), (0, n.default)(this, "addBase", (() => {
                const e = (0, h.default)(1);
                this.base = this.parts.add.sprite({
                    ...p.BaseAsset,
                    y: -30,
                    depthChange: e
                }), this.base.view.setScale(.5), this.colliders.add.box({
                    x: 0,
                    y: 10,
                    w: 90,
                    h: 40
                })
            })), (0, n.default)(this, "addItemPreview", (() => {
                if (!this.base) return;
                const e = (0, h.default)(2),
                    t = {
                        ...p.UnknownItemAsset
                    };
                if (this.options.itemId) {
                    const e = r.default.worldOptions.itemOptions.find((e => e.id === this.options.itemId));
                    e && (t.imageId = e.id, t.imageUrl = e.previewImage)
                }
                const i = (0, u.default)(t.imageId),
                    a = (0, o.default)({
                        height: i.height,
                        width: i.width,
                        newWidth: 60
                    });
                this.itemPreview = this.parts.add.sprite({
                    imageId: t.imageId,
                    imageUrl: t.imageUrl,
                    depthChange: e,
                    y: -43,
                    displayWidth: a.width,
                    displayHeight: a.height
                }), this.itemPreview.view.alpha = .6, this.tweens.add({
                    targets: this.itemPreview.view,
                    y: this.itemPreview.view.y - 10,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), this.tweens.add({
                    targets: this.itemPreview.view,
                    alpha: 1,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                })
            })), (0, l.isPublishedVersion)() || (0, f.InGamePhase)() || (this.layers.setDefaultLayer(d.default.DepthSortedCharactersAndDevices), this.addBase(), this.addItemPreview())
        }
    }
    var w = m
})), t.register("9oxA4", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
})), t.register("fniCL", (function(i, a) {
    e(i.exports, "BaseAsset", (function() {
        return n
    })), e(i.exports, "UnknownItemAsset", (function() {
        return d
    }));
    var s = t("alREA");
    const n = {
            imageId: (0, s.default)("devices/item_granter/base.png"),
            imageUrl: (0, s.default)("devices/item_granter/base.png")
        },
        d = {
            imageId: "__UNKNOWN_ITEM",
            imageUrl: (0, s.default)("devices/item_granter/question-mark-2.png")
        }
}));