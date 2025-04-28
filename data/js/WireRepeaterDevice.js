function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('CR2Xs', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _j(b.exports, 'default', function() {
        return _j;
    });
    var e = a('9tz3H'),
        f = a('/pbxo'),
        g = a('I35Ay'),
        h = a('OIjTO');
    class i extends g.default {
        constructor(_j) {
            super(_j), (0, f.InGamePhase)() || (0, e.isPublishedVersion)() || this.parts.add.sprite({
                ...h.BaseAsset,
                onReady: _j => {
                    _j.view.setScale(0.5);
                }
            });
        }
    }
    var _j = i;
}), a.register('OIjTO', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'wire_repeater_device',
        imageUrl: (0, a('2Xvuf').default)('devices/wire_repeater/base.png')
    };
});