function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('CAZzV', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('s/YA9'),
        g = b('fI6of'),
        h = b('p7Hfe'),
        i = b('CbU7r'),
        j = b('6yrsF'),
        k = (b('UaUBz0'), b('TB4da')),
        l = b('hycyg'),
        m = b('UkCpC'),
        n = b('ltxDW'),
        o = (b('73Aki'), b('AHhkR'), b('a9TTj0')),
        p = b('TUJO2'),
        q = b('6m3uj');
    const r = new Map(),
        s = new Map();
    class t extends n.default {
        get howl() {
            return r.get(this.id);
        }
        get isPlaying() {
            return s.get(this.id) || !1;
        }
        set isPlaying(u) {
            s.set(this.id, u);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, i.getVolume)({
                volume: (0, q.getMusicVolume)(this) / 100,
                type: i.SoundType.music
            }), o.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, o.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(u) {
            if (super(u), (0, f.default)(this, 'onUpdate', () => {
                    if (!this.state.countdownActive && !this.state.countupActive)
                        return;
                    const v = g.default.session.gameTime,
                        w = this.state.countdownActive ? this.state.countdownEndTimestamp - v : v - this.state.countupStartTimestamp,
                        x = Math.max(0, w / 1000);
                    g.default.session.gameClockDuration = (0, k.SecondsToDuration)(x);
                }), (0, f.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, i.getVolume)({
                        volume: (0, q.getMusicVolume)(this) / 100,
                        type: i.SoundType.music
                    }));
                }), (0, f.default)(this, 'onStateChange', u => {
                    'gameMusicState' === u && (this.state.gameMusicState === p.GameMusicState.playing ? this.play() : this.state.gameMusicState === p.GameMusicState.stopped ? this.stop() : this.state.gameMusicState === p.GameMusicState.fadingOut && this.fadeOut()), 'allowedToAddTimeToEndCountdown' === u && (g.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown);
                }), (0, f.default)(this, 'onDestroy', u => {
                    var v;
                    u.isBeingReplaced || (null === (v = r.get(this.id)) || void 0 === v || v.unload(), r.delete(this.id), s.delete(this.id));
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)(), (0, m.InGamePhase)() && (0, h.AmIGameOwner)()) {
                if (!r.get(this.id)) {
                    const v = new(0, j.Howl)({
                        src: [(0, q.getMusicUrl)(this)],
                        preload: !0,
                        loop: !0
                    });
                    r.set(this.id, v);
                }
                this.state.gameMusicState === p.GameMusicState.playing && this.play(), this.state.gameMusicState === p.GameMusicState.stopped && this.isPlaying && this.stop();
            }
            (0, m.InPreGamePhase)() && r.delete(this.id), g.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown;
        }
    }
    var _u = t;
}), b.register('TB4da', function(c, d) {
    a(c.exports, 'SecondsToDuration', function() {
        return _e;
    });
    const _e = a => {
            const f = Math.floor(a / 3600),
                g = Math.floor(a % 3600 / 60),
                h = Math.floor(a % 60);
            return f > 0 ? `${ f }:${ _f(g) }:${ _f(h) }` : `${ g }:${ _f(h) }`;
        },
        _f = a => a < 10 ? `0${ a }` : `${ a }`;
}), b.register('a9TTj0', function(c, d) {
    a(c.exports, 'Consts', function() {
        return _e;
    });
    const _e = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), b.register('TUJO2', function(c, d) {
    let e;
    var f;
    a(c.exports, 'GameMusicState', function() {
        return e;
    }), (f = e || (e = {})).stopped = 'stopped', f.playing = 'playing', f.fadingOut = 'fadingOut';
}), b.register('6m3uj', function(c, d) {
    a(c.exports, 'getMusicUrl', function() {
        return _h;
    }), a(c.exports, 'getMusicVolume', function() {
        return _i;
    });
    var e = b('oH3gV'),
        f = b('yhnQh'),
        g = b('UaUBz0');
    const _h = a => {
            if ((0, f.IsTutorial)())
                return '';
            if (a.options.musicUrl)
                return (0, e.GetSoundUrl)(a.options.musicUrl);
            const i = a.options.presetMusicId;
            return 'NONE' !== i ? (0, g.default)('music/presets/' + i + '.mp3') : null;
        },
        _i = a => a.options.musicUrl ? a.options.musicVolume : 25;
});