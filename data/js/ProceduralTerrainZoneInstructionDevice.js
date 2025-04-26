function a(a, b, n, t) {
    Object.defineProperty(a, b, {
        get: n,
        set: t,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GYi/3', function(n, t) {
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
        g = b('4qZlN');
    class h extends f.default {
        constructor(a) {
            if (super(a), (0, e.InGamePhase)() || (0, d.isPublishedVersion)())
                return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(g.BaseAsset).view.setScale(0.25);
        }
    }
    var i = j;
}), b.register('4qZlN', function(n, t) {
    a(n.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'procedural-terrain-zone-instruction-device',
        imageUrl: (0, b('JJQ0+').default)('devices/procedural_terrain_zone_instruction/icon.png')
    };
});