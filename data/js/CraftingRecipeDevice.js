function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('vVuY/', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('2Xvuf'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('btxlR'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('2M6xn');
    class m extends i.default {
        constructor(_n) {
            if (super(_n), (0, f.isPublishedVersion)() || (0, g.InGamePhase)())
                return;
            let o = l.UnknownItemAsset.imageUrl;
            const p = (0, h.default)(this.options.item);
            p && (o = p.previewImage);
            const q = k.default.Overlay;
            new(0, j.default)({
                device: this,
                baseColor: q.baseColor,
                boxColor: q.boxColor,
                content: {
                    topLeftIcon: {
                        image: (0, e.default)('devices/crafting_recipe/icon.png'),
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