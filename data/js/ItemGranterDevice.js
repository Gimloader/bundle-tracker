function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('iebt4', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _p;
    });
    var e = a('1bFPu'),
        f = a('JqBF0'),
        g = a('iWivW'),
        h = a('SINjC2'),
        i = a('5CmLs'),
        j = a('1Chka'),
        k = a('9tz3H'),
        l = a('/pbxo'),
        m = a('I35Ay'),
        n = a('2M6xn');
    class o extends m.default {
        constructor(_p) {
            super(_p), (0, e.default)(this, 'addBase', () => {
                const q = (0, i.default)(1);
                this.base = this.parts.add.sprite({
                    ...n.BaseAsset,
                    y: -30,
                    depthChange: q
                }), this.base.view.setScale(0.5), this.colliders.add.box({
                    x: 0,
                    y: 10,
                    w: 90,
                    h: 40
                });
            }), (0, e.default)(this, 'addItemPreview', () => {
                if (!this.base)
                    return;
                const q = (0, i.default)(2),
                    r = {
                        ...n.UnknownItemAsset
                    };
                if (this.options.itemId) {
                    const s = g.default.worldOptions.itemOptions.find(s => s.id === this.options.itemId);
                    s && (r.imageId = s.id, r.imageUrl = s.previewImage);
                }
                const s = (0, j.default)(r.imageId),
                    t = (0, h.default)({
                        height: s.height,
                        width: s.width,
                        newWidth: 60
                    });
                this.itemPreview = this.parts.add.sprite({
                    imageId: r.imageId,
                    imageUrl: r.imageUrl,
                    depthChange: q,
                    y: -43,
                    displayWidth: t.width,
                    displayHeight: t.height
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
            }), (0, k.isPublishedVersion)() || (0, l.InGamePhase)() || (this.layers.setDefaultLayer(f.default.DepthSortedCharactersAndDevices), this.addBase(), this.addItemPreview());
        }
    }
    var _p = o;
}), a.register('SINjC2', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        const e = e.newWidth / e.width;
        return {
            height: e.height * e,
            width: e.width * e
        };
    };
}), a.register('2M6xn', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _e;
    }), e(b.exports, 'UnknownItemAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/item_granter/base.png'),
            imageUrl: (0, d.default)('devices/item_granter/base.png')
        },
        _f = {
            imageId: '__UNKNOWN_ITEM',
            imageUrl: (0, d.default)('devices/item_granter/question-mark-2.png')
        };
});