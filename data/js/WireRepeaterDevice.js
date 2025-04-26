function a(a, b, t, n) {
    Object.defineProperty(a, b, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('v6Ldk', function(t, n) {
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
        g = b('67M3C');
    class h extends f.default {
        constructor(a) {
            super(a), (0, e.InGamePhase)() || (0, d.isPublishedVersion)() || this.parts.add.sprite({
                ...g.BaseAsset,
                onReady: a => {
                    a.view.setScale(0.5);
                }
            });
        }
    }
    var i = j;
}), b.register('67M3C', function(t, n) {
    a(t.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'wire_repeater_device',
        imageUrl: (0, b('JJQ0+').default)('devices/wire_repeater/base.png')
    };
});