function a(a, b, t, s) {
    Object.defineProperty(a, b, {
        get: t,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('PcjxR', function(t, s) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'default', function() {
        return i;
    });
    var d = b('Bpt+p'),
        e = b('5Ux1a'),
        f = b('sgILU'),
        g = b('yRyNh');
    class h extends f.default {
        constructor(a) {
            super(a), (0, d.isPublishedVersion)() || (0, e.InGamePhase)() || (this.layers.forceDepthManually(0), this.parts.add.sprite(g.BaseAsset));
        }
    }
    var i = j;
}), b.register('yRyNh', function(t, s) {
    a(t.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'assignment_checkpoint_device',
        imageUrl: (0, b('JJQ0+').default)('devices/assignment_checkpoint/flag.png')
    };
});