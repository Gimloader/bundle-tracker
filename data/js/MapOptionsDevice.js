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
        return _u;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = (b('.....'), b('.....')), l = b('.....'), m = b('.....'), n = b('.....'), o = (b('.....'), b('.....'), b('.....')), p = b('.....'), q = b('.....');
    const r = new Map(), s = new Map();
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
                    const v = g.default.session.gameTime, w = this.state.countdownActive ? this.state.countdownEndTimestamp - v : v - this.state.countupStartTimestamp, x = Math.max(0, w / 1000);
                    g.default.session.gameClockDuration = (0, k.SecondsToDuration)(x);
                }), (0, f.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, i.getVolume)({
                        volume: (0, q.getMusicVolume)(this) / 100,
                        type: i.SoundType.music
                    }));
                }), (0, f.default)(this, 'onStateChange', v => {
                    'gameMusicState' === v && (this.state.gameMusicState === p.GameMusicState.playing ? this.play() : this.state.gameMusicState === p.GameMusicState.stopped ? this.stop() : this.state.gameMusicState === p.GameMusicState.fadingOut && this.fadeOut()), 'allowedToAddTimeToEndCountdown' === v && (g.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown);
                }), (0, f.default)(this, 'onDestroy', v => {
                    var w;
                    v.isBeingReplaced || (null === (w = r.get(this.id)) || void 0 === w || w.unload(), r.delete(this.id), s.delete(this.id));
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)(), (0, m.InGamePhase)() && (0, h.AmIGameOwner)()) {
                if (!r.get(this.id)) {
                    const v = new (0, j.Howl)({
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'SecondsToDuration', function () {
        return _e;
    });
    const _e = f => {
            const g = Math.floor(f / 3600), h = Math.floor(f % 3600 / 60), i = Math.floor(f % 60);
            return g > 0 ? `${ g }:${ _f(h) }:${ _f(i) }` : `${ h }:${ _f(i) }`;
        }, _f = g => g < 10 ? `0${ g }` : `${ g }`;
}), b.register('.....', function (c, d) {
    a(c.exports, 'Consts', function () {
        return _e;
    });
    const _e = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'GameMusicState', function () {
        return e;
    }), (f = e || (e = {})).stopped = 'stopped', f.playing = 'playing', f.fadingOut = 'fadingOut';
}), b.register('.....', function (c, d) {
    a(c.exports, 'getMusicUrl', function () {
        return _h;
    }), a(c.exports, 'getMusicVolume', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = i => {
            if ((0, f.IsTutorial)())
                return '';
            if (i.options.musicUrl)
                return (0, e.GetSoundUrl)(i.options.musicUrl);
            const j = i.options.presetMusicId;
            return 'NONE' !== j ? (0, g.default)('music/presets/' + j + '.mp3') : null;
        }, _i = j => j.options.musicUrl ? j.options.musicVolume : 25;
});