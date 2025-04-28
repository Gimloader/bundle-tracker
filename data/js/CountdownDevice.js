function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('oysoq', function(b, c) {
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
        h = a('3PKZ6');
    class i extends g.default {
        constructor(_j) {
            super(_j), (0, f.InPreGamePhase)() && (0, e.isSavedVersion)() && this.parts.add.sprite(h.BaseAsset);
        }
    }
    var _j = i;
}), a.register('3PKZ6', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'countdown_device',
        imageUrl: (0, a('2Xvuf').default)('devices/countdown/count-down-device.png')
    };
});