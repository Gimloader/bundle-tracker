function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('KkLK0', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('btxlR'),
        f = a('2Xvuf'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('2M6xn');
    class m extends i.default {
        constructor(_n) {
            if (super(_n), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                let o = l.UnknownItemAsset.imageUrl;
                const p = (0, e.default)(this.options.itemId);
                p && (o = p.previewImage);
                const q = k.default.Manager;
                new(0, j.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: {
                        topLeftIcon: {
                            image: (0, f.default)('devices/inventory_item_manager/icon.png'),
                            scale: 1
                        },
                        icon: {
                            image: o,
                            scale: 1
                        }
                    }
                });
            }
        }
    }
    var _n = m;
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