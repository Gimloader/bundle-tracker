function a(a, b, q, r) {
    Object.defineProperty(a, b, {
        get: q,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('UzwMr', function(q, r) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return o;
    });
    var d = b('UM8oI'),
        e = b('cMsWT'),
        f = b('7Sbqr'),
        g = b('VkIHd0'),
        h = b('Q0Vn8'),
        i = b('Mr5c3'),
        j = b('Bpt+p'),
        k = b('5Ux1a'),
        l = b('sgILU'),
        m = b('Sbl6W');
    class n extends l.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'addBase', () => {
                const o = (0, h.default)(1);
                this.base = this.parts.add.sprite({
                    ...m.BaseAsset,
                    y: -30,
                    depthChange: o
                }), this.base.view.setScale(0.5), this.colliders.add.box({
                    x: 0,
                    y: 10,
                    w: 90,
                    h: 40
                });
            }), (0, d.default)(this, 'addItemPreview', () => {
                if (!this.base)
                    return;
                const o = (0, h.default)(2),
                    p = {
                        ...m.UnknownItemAsset
                    };
                if (this.options.itemId) {
                    const q = f.default.worldOptions.itemOptions.find(q => q.id === this.options.itemId);
                    q && (p.imageId = q.id, p.imageUrl = q.previewImage);
                }
                const q = (0, i.default)(p.imageId),
                    r = (0, g.default)({
                        height: q.height,
                        width: q.width,
                        newWidth: 60
                    });
                this.itemPreview = this.parts.add.sprite({
                    imageId: p.imageId,
                    imageUrl: p.imageUrl,
                    depthChange: o,
                    y: -43,
                    displayWidth: r.width,
                    displayHeight: r.height
                }), this.itemPreview.view.alpha = 0.6, this.tweens.add({
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
                });
            }), (0, j.isPublishedVersion)() || (0, k.InGamePhase)() || (this.layers.setDefaultLayer(e.default.DepthSortedCharactersAndDevices), this.addBase(), this.addItemPreview());
        }
    }
    var o = p;
}), b.register('VkIHd0', function(b, i) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = a => {
        const d = a.newWidth / a.width;
        return {
            height: a.height * d,
            width: a.width * d
        };
    };
}), b.register('Sbl6W', function(i, a) {
    a(i.exports, 'BaseAsset', function() {
        return d;
    }), a(i.exports, 'UnknownItemAsset', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/item_granter/base.png'),
            imageUrl: (0, c.default)('devices/item_granter/base.png')
        },
        e = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, c.default)('devices/item_granter/question-mark-2.png')
        };
});