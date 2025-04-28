function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('rUwLW', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'default', function() {
        return _t;
    });
    var e = a('1bFPu'),
        f = a('iWivW'),
        g = a('i3kcr'),
        h = a('1f1YX'),
        i = a('6yrsF'),
        j = (a('2Xvuf'), a('VvINu')),
        k = a('9tz3H'),
        l = a('/pbxo'),
        m = a('I35Ay'),
        n = (a('+uQv7'), a('dTXti'), a('eIAtr')),
        o = a('EVYxD'),
        p = a('2QUhJ');
    const q = new Map(),
        r = new Map();
    class s extends m.default {
        get howl() {
            return q.get(this.id);
        }
        get isPlaying() {
            return r.get(this.id) || !1;
        }
        set isPlaying(_t) {
            r.set(this.id, _t);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, h.getVolume)({
                volume: (0, p.getMusicVolume)(this) / 100,
                type: h.SoundType.music
            }), n.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, n.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(t) {
            if (super(t), (0, e.default)(this, 'onUpdate', () => {
                    if (!this.state.countdownActive && !this.state.countupActive)
                        return;
                    const u = f.default.session.gameTime,
                        v = this.state.countdownActive ? this.state.countdownEndTimestamp - u : u - this.state.countupStartTimestamp,
                        w = Math.max(0, v / 1000);
                    f.default.session.gameClockDuration = (0, j.SecondsToDuration)(w);
                }), (0, e.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, h.getVolume)({
                        volume: (0, p.getMusicVolume)(this) / 100,
                        type: h.SoundType.music
                    }));
                }), (0, e.default)(this, 'onStateChange', t => {
                    'gameMusicState' === t && (this.state.gameMusicState === o.GameMusicState.playing ? this.play() : this.state.gameMusicState === o.GameMusicState.stopped ? this.stop() : this.state.gameMusicState === o.GameMusicState.fadingOut && this.fadeOut()), 'allowedToAddTimeToEndCountdown' === t && (f.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown);
                }), (0, e.default)(this, 'onDestroy', t => {
                    var u;
                    t.isBeingReplaced || (null === (u = q.get(this.id)) || void 0 === u || u.unload(), q.delete(this.id), r.delete(this.id));
                }), (0, l.InPreGamePhase)() && (0, k.isSavedVersion)(), (0, l.InGamePhase)() && (0, g.AmIGameOwner)()) {
                if (!q.get(this.id)) {
                    const u = new(0, i.Howl)({
                        src: [(0, p.getMusicUrl)(this)],
                        preload: !0,
                        loop: !0
                    });
                    q.set(this.id, u);
                }
                this.state.gameMusicState === o.GameMusicState.playing && this.play(), this.state.gameMusicState === o.GameMusicState.stopped && this.isPlaying && this.stop();
            }
            (0, l.InPreGamePhase)() && q.delete(this.id), f.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown;
        }
    }
    var _t = s;
}), a.register('VvINu', function(b, c) {
    t(b.exports, 'SecondsToDuration', function() {
        return _d;
    });
    const _d = t => {
            const e = Math.floor(t / 3600),
                f = Math.floor(t % 3600 / 60),
                g = Math.floor(t % 60);
            return e > 0 ? `${ e }:${ _e(f) }:${ _e(g) }` : `${ f }:${ _e(g) }`;
        },
        _e = t => t < 10 ? `0${ t }` : `${ t }`;
}), a.register('eIAtr', function(b, c) {
    t(b.exports, 'Consts', function() {
        return _d;
    });
    const _d = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), a.register('EVYxD', function(b, c) {
    let d;
    var e;
    t(b.exports, 'GameMusicState', function() {
        return d;
    }), (e = d || (d = {})).stopped = 'stopped', e.playing = 'playing', e.fadingOut = 'fadingOut';
}), a.register('2QUhJ', function(b, c) {
    t(b.exports, 'getMusicUrl', function() {
        return _g;
    }), t(b.exports, 'getMusicVolume', function() {
        return _h;
    });
    var d = a('UJCwk'),
        e = a('Xc4Kz'),
        f = a('2Xvuf');
    const _g = t => {
            if ((0, e.IsTutorial)())
                return '';
            if (t.options.musicUrl)
                return (0, d.GetSoundUrl)(t.options.musicUrl);
            const h = t.options.presetMusicId;
            return 'NONE' !== h ? (0, f.default)('music/presets/' + h + '.mp3') : null;
        },
        _h = t => t.options.musicUrl ? t.options.musicVolume : 25;
});