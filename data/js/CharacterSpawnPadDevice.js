function e(e, a, t, r) {
    Object.defineProperty(e, a, {
        get: t,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("aQDHN", (function(t, r) {
    var s;
    s = t.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return l
    }));
    var i = a("6Tpu2"),
        n = a("bNmF9"),
        d = a("4uojN"),
        o = a("dAV8G"),
        u = a("bvStP");
    class c extends n.default {
        constructor(e) {
            if (super(e), !this.options.visibleInGame && ((0, i.InGamePhase)() || (0, d.isPublishedVersion)())) return;
            const a = (0, i.InPreGamePhase)() ? o.BaseWithCharacterAsset : o.BaseWithoutCharacterAsset;
            this.parts.add.sprite({
                ...a,
                y: -18
            }).view.setScale(.5), this.layers.setDefaultLayer(u.default.DevicesUnderCharacters)
        }
    }
    var l = c
})), a.register("dAV8G", (function(t, r) {
    e(t.exports, "BaseWithoutCharacterAsset", (function() {
        return i
    })), e(t.exports, "BaseWithCharacterAsset", (function() {
        return n
    }));
    var s = a("alREA");
    const i = {
            imageId: (0, s.default)("devices/spawn_pad/base_without_character.png"),
            imageUrl: (0, s.default)("devices/spawn_pad/base_without_character.png")
        },
        n = {
            imageId: (0, s.default)("devices/spawn_pad/base_with_character.png"),
            imageUrl: (0, s.default)("devices/spawn_pad/base_with_character.png")
        }
}));