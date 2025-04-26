function a(a, b, n, s) {
    Object.defineProperty(a, b, {
        get: n,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('fXAim', function(n, s) {
    var c;
    c = n.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(n.exports, 'default', function() {
        return i;
    });
    var d = b('Bpt+p'),
        e = b('5Ux1a'),
        f = b('sgILU'),
        g = b('Lg/JW');
    class h extends f.default {
        constructor(a) {
            super(a), (0, d.isPublishedVersion)() || (0, e.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(g.BaseAsset));
        }
    }
    var i = j;
}), b.register('Lg/JW', function(n, s) {
    a(n.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'assignment_context_device',
        imageUrl: (0, b('JJQ0+').default)('devices/assignment_context/search.png')
    };
});