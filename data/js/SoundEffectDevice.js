function a(a, b, t, c) {
    Object.defineProperty(a, b, {
        get: t,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('wXgxl', function(t, c) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'default', function() {
        return r;
    });
    var d = b('UM8oI'),
        e = b('s2CSz'),
        f = b('JJQ0+'),
        g = b('Il8g9'),
        h = b('PUlKf'),
        i = b('Bpt+p'),
        j = b('5Ux1a'),
        k = b('Ena4B'),
        l = b('OlpXx'),
        m = b('sgILU'),
        n = b('phu0d'),
        o = b('Gqspz'),
        p = b('YX0qO');
    class q extends m.default {
        play() {
            this.options.audioUrl && (this.options.characterType !== p.SoundEffectCharacterType.gameOwner || (0, g.AmIGameOwner)()) && (0, l.playSound)({
                path: (0, e.GetSoundUrl)(this.options.audioUrl),
                volume: (0, k.getVolume)({
                    volume: this.options.volume / 100,
                    type: k.SoundType.soundEffect
                })
            });
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onMessage', a => {
                    a.key === p.Messages.play && a.data.characterId === (0, h.default)() && this.play();
                }), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const r = o.default.Utility;
                new(0, n.default)({
                    device: this,
                    baseColor: r.baseColor,
                    boxColor: r.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/sound_effect/icon.png')
                        }
                    }
                });
            }
        }
    }
    var r = s;
}), b.register('YX0qO', function(b, t) {
    let c;
    let d;
    var e;
    a(b.exports, 'Messages', function() {
        return c;
    }), a(b.exports, 'SoundEffectCharacterType', function() {
        return d;
    }), (c || (c = {})).play = 'play', (e = d || (d = {})).all = 'all', e.gameOwner = 'gameOwner';
});