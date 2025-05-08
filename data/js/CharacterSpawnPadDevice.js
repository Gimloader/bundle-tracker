function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _l;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    class k extends g.default {
        constructor(l) {
            if (super(l), !this.options.visibleInGame && ((0, f.InGamePhase)() || (0, h.isPublishedVersion)()))
                return;
            const m = (0, f.InPreGamePhase)() ? i.BaseWithCharacterAsset : i.BaseWithoutCharacterAsset;
            this.parts.add.sprite({
                ...m,
                y: -18
            }).view.setScale(0.5), this.layers.setDefaultLayer(j.default.DevicesUnderCharacters);
        }
    }
    var _l = k;
}), b.register('.....', function (c, d) {
    a(c.exports, 'BaseWithoutCharacterAsset', function () {
        return _f;
    }), a(c.exports, 'BaseWithCharacterAsset', function () {
        return _g;
    });
    var e = b('.....');
    const _f = {
            imageId: (0, e.default)('devices/spawn_pad/base_without_character.png'),
            imageUrl: (0, e.default)('devices/spawn_pad/base_without_character.png')
        }, _g = {
            imageId: (0, e.default)('devices/spawn_pad/base_with_character.png'),
            imageUrl: (0, e.default)('devices/spawn_pad/base_with_character.png')
        };
});