function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('vI8Cw', function(c, d) {
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
        i = b('7Wt8E');
    class j extends h.default {
        constructor(k) {
            super(k), (0, f.isPublishedVersion)() || (0, g.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(i.BaseAsset));
        }
    }
    var _k = j;
}), b.register('7Wt8E', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'assignment_context_device',
        imageUrl: (0, b('UaUBz0').default)('devices/assignment_context/search.png')
    };
});