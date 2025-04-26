function a(a, b, t, o) {
    Object.defineProperty(a, b, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('8kQSj', function(t, o) {
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
        g = b('EZP85');
    class h extends f.default {
        constructor(a) {
            super(a), (0, e.InPreGamePhase)() && (0, d.isSavedVersion)() && this.parts.add.sprite(g.BaseAsset);
        }
    }
    var i = j;
}), b.register('EZP85', function(t, o) {
    a(t.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'countdown_device',
        imageUrl: (0, b('JJQ0+').default)('devices/countdown/count-down-device.png')
    };
});