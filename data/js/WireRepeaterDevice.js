function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('eQnHl', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _k;
    });
    var f = b('hycyg'),
        g = b('UkCpC'),
        h = b('ltxDW'),
        i = b('ylFvJ');
    class j extends h.default {
        constructor(k) {
            super(k), (0, g.InGamePhase)() || (0, f.isPublishedVersion)() || this.parts.add.sprite({
                ...i.BaseAsset,
                onReady: k => {
                    k.view.setScale(0.5);
                }
            });
        }
    }
    var _k = j;
}), b.register('ylFvJ', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'wire_repeater_device',
        imageUrl: (0, b('UaUBz0').default)('devices/wire_repeater/base.png')
    };
});