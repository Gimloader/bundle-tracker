function a(a, b, t, r) {
    Object.defineProperty(a, b, {
        get: t,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Wgkrw', function(t, r) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'default', function() {
        return j;
    });
    var d = b('5Ux1a'),
        e = b('sgILU'),
        f = b('Bpt+p'),
        g = b('AfyBA'),
        h = b('cMsWT');
    class i extends e.default {
        constructor(a) {
            if (super(a), !this.options.visibleInGame && ((0, d.InGamePhase)() || (0, f.isPublishedVersion)()))
                return;
            const j = (0, d.InPreGamePhase)() ? g.BaseWithCharacterAsset : g.BaseWithoutCharacterAsset;
            this.parts.add.sprite({
                ...j,
                y: -18
            }).view.setScale(0.5), this.layers.setDefaultLayer(h.default.DevicesUnderCharacters);
        }
    }
    var j = k;
}), b.register('AfyBA', function(t, r) {
    a(t.exports, 'BaseWithoutCharacterAsset', function() {
        return d;
    }), a(t.exports, 'BaseWithCharacterAsset', function() {
        return e;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: (0, c.default)('devices/spawn_pad/base_without_character.png'),
            imageUrl: (0, c.default)('devices/spawn_pad/base_without_character.png')
        },
        e = {
            imageId: (0, c.default)('devices/spawn_pad/base_with_character.png'),
            imageUrl: (0, c.default)('devices/spawn_pad/base_with_character.png')
        };
});