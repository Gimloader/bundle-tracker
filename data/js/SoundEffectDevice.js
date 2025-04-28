function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('6/JDK', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _s;
    });
    var e = a('1bFPu'),
        f = a('UJCwk'),
        g = a('2Xvuf'),
        h = a('i3kcr'),
        i = a('Jfada'),
        j = a('9tz3H'),
        k = a('/pbxo'),
        l = a('1f1YX'),
        m = a('07pQo'),
        n = a('I35Ay'),
        o = a('+uQv7'),
        p = a('dTXti'),
        q = a('tWv3W');
    class r extends n.default {
        play() {
            this.options.audioUrl && (this.options.characterType !== q.SoundEffectCharacterType.gameOwner || (0, h.AmIGameOwner)()) && (0, m.playSound)({
                path: (0, f.GetSoundUrl)(this.options.audioUrl),
                volume: (0, l.getVolume)({
                    volume: this.options.volume / 100,
                    type: l.SoundType.soundEffect
                })
            });
        }
        constructor(_s) {
            if (super(_s), (0, e.default)(this, 'onMessage', _s => {
                    _s.key === q.Messages.play && _s.data.characterId === (0, i.default)() && this.play();
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const t = p.default.Utility;
                new(0, o.default)({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/sound_effect/icon.png')
                        }
                    }
                });
            }
        }
    }
    var _s = r;
}), a.register('tWv3W', function(b, c) {
    let d;
    let e;
    var f;
    e(b.exports, 'Messages', function() {
        return d;
    }), e(b.exports, 'SoundEffectCharacterType', function() {
        return e;
    }), (d || (d = {})).play = 'play', (f = e || (e = {})).all = 'all', f.gameOwner = 'gameOwner';
});