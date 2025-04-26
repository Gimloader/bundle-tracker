function a(a, b, o, t) {
    Object.defineProperty(a, b, {
        get: o,
        set: t,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Nu0H2', function(o, t) {
    var c;
    c = o.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(o.exports, 'default', function() {
        return i;
    });
    var d = b('Bpt+p'),
        e = b('5Ux1a'),
        f = b('sgILU'),
        g = b('HyFtC');
    class h extends f.default {
        constructor(a) {
            super(a), (0, d.isPublishedVersion)() || (0, e.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(g.BaseAsset));
        }
    }
    var i = j;
}), b.register('HyFtC', function(o, t) {
    a(o.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'cosmos_modifier',
        imageUrl: (0, b('JJQ0+').default)('devices/cosmos_modifier/icon.png')
    };
});