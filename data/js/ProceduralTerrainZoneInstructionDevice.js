function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('yZ5LC', function(c, d) {
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
        i = b('fw2nA');
    class j extends h.default {
        constructor(k) {
            if (super(k), (0, g.InGamePhase)() || (0, f.isPublishedVersion)())
                return;
            this.layers.forceDepthManually(0);
            this.parts.add.sprite(i.BaseAsset).view.setScale(0.25);
        }
    }
    var _k = j;
}), b.register('fw2nA', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'procedural-terrain-zone-instruction-device',
        imageUrl: (0, b('UaUBz0').default)('devices/procedural_terrain_zone_instruction/icon.png')
    };
});