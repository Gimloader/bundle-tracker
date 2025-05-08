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
        return _t;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....');
    class s extends o.default {
        play() {
            this.options.audioUrl && (this.options.characterType !== r.SoundEffectCharacterType.gameOwner || (0, i.AmIGameOwner)()) && (0, n.playSound)({
                path: (0, g.GetSoundUrl)(this.options.audioUrl),
                volume: (0, m.getVolume)({
                    volume: this.options.volume / 100,
                    type: m.SoundType.soundEffect
                })
            });
        }
        constructor(t) {
            if (super(t), (0, f.default)(this, 'onMessage', u => {
                    u.key === r.Messages.play && u.data.characterId === (0, j.default)() && this.play();
                }), (0, l.InPreGamePhase)() && (0, k.isSavedVersion)()) {
                const u = q.default.Utility;
                new (0, p.default)({
                    device: this,
                    baseColor: u.baseColor,
                    boxColor: u.boxColor,
                    content: { icon: { image: (0, h.default)('devices/sound_effect/icon.png') } }
                });
            }
        }
    }
    var _t = s;
}), b.register('.....', function (c, d) {
    let e;
    let f;
    var g;
    a(c.exports, 'Messages', function () {
        return e;
    }), a(c.exports, 'SoundEffectCharacterType', function () {
        return f;
    }), (e || (e = {})).play = 'play', (g = f || (f = {})).all = 'all', g.gameOwner = 'gameOwner';
});