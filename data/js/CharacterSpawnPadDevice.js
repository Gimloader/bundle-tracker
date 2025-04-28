function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('VifXL', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _k(b.exports, 'default', function() {
        return _k;
    });
    var e = a('/pbxo'),
        f = a('I35Ay'),
        g = a('9tz3H'),
        h = a('d+duS'),
        i = a('JqBF0');
    class j extends f.default {
        constructor(_k) {
            if (super(_k), !this.options.visibleInGame && ((0, e.InGamePhase)() || (0, g.isPublishedVersion)()))
                return;
            const l = (0, e.InPreGamePhase)() ? h.BaseWithCharacterAsset : h.BaseWithoutCharacterAsset;
            this.parts.add.sprite({
                ...l,
                y: -18
            }).view.setScale(0.5), this.layers.setDefaultLayer(i.default.DevicesUnderCharacters);
        }
    }
    var _k = j;
}), a.register('d+duS', function(b, c) {
    e(b.exports, 'BaseWithoutCharacterAsset', function() {
        return _e;
    }), e(b.exports, 'BaseWithCharacterAsset', function() {
        return _f;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: (0, d.default)('devices/spawn_pad/base_without_character.png'),
            imageUrl: (0, d.default)('devices/spawn_pad/base_without_character.png')
        },
        _f = {
            imageId: (0, d.default)('devices/spawn_pad/base_with_character.png'),
            imageUrl: (0, d.default)('devices/spawn_pad/base_with_character.png')
        };
});