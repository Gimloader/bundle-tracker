function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('oMWyR', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var f = b('s/YA9'),
        g = b('GIe9o'),
        h = b('fI6of'),
        i = b('ktWA02'),
        j = b('H4eGM'),
        k = b('+7143'),
        l = b('hycyg'),
        m = b('UkCpC'),
        n = b('ltxDW'),
        o = b('T6zrb');
    class p extends n.default {
        constructor(q) {
            super(q), (0, f.default)(this, 'addBase', () => {
                const r = (0, j.default)(1);
                this.base = this.parts.add.sprite({
                    ...o.BaseAsset,
                    y: -30,
                    depthChange: r
                }), this.base.view.setScale(0.5), this.colliders.add.box({
                    x: 0,
                    y: 10,
                    w: 90,
                    h: 40
                });
            }), (0, f.default)(this, 'addItemPreview', () => {
                if (!this.base)
                    return;
                const r = (0, j.default)(2),
                    s = {
                        ...o.UnknownItemAsset
                    };
                if (this.options.itemId) {
                    const t = h.default.worldOptions.itemOptions.find(t => t.id === this.options.itemId);
                    t && (s.imageId = t.id, s.imageUrl = t.previewImage);
                }
                const t = (0, k.default)(s.imageId),
                    u = (0, i.default)({
                        height: t.height,
                        width: t.width,
                        newWidth: 60
                    });
                this.itemPreview = this.parts.add.sprite({
                    imageId: s.imageId,
                    imageUrl: s.imageUrl,
                    depthChange: r,
                    y: -43,
                    displayWidth: u.width,
                    displayHeight: u.height
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
            }), (0, l.isPublishedVersion)() || (0, m.InGamePhase)() || (this.layers.setDefaultLayer(g.default.DepthSortedCharactersAndDevices), this.addBase(), this.addItemPreview());
        }
    }
    var _q = p;
}), b.register('ktWA02', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = a => {
        const f = a.newWidth / a.width;
        return {
            height: a.height * f,
            width: a.width * f
        };
    };
}), b.register('T6zrb', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _f;
    }), a(c.exports, 'UnknownItemAsset', function() {
        return _g;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: (0, e.default)('devices/item_granter/base.png'),
            imageUrl: (0, e.default)('devices/item_granter/base.png')
        },
        _g = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, e.default)('devices/item_granter/question-mark-2.png')
        };
});