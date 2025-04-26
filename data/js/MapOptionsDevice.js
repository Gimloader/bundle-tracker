function a(a, b, u, c) {
    Object.defineProperty(a, b, {
        get: u,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('qFyas', function(u, c) {
    var c;
    c = u.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(u.exports, 'default', function() {
        return s;
    });
    var d = b('UM8oI'),
        e = b('7Sbqr'),
        f = b('Il8g9'),
        g = b('Ena4B'),
        h = b('6yrsF'),
        i = (b('JJQ0+'), b('sZQtn')),
        j = b('Bpt+p'),
        k = b('5Ux1a'),
        l = b('sgILU'),
        m = (b('phu0d'), b('Gqspz'), b('5Zmzq0')),
        n = b('9nqqJ'),
        o = b('pu4uI');
    const p = new Map(),
        q = new Map();
    class r extends l.default {
        get howl() {
            return p.get(this.id);
        }
        get isPlaying() {
            return q.get(this.id) || !1;
        }
        set isPlaying(a) {
            q.set(this.id, a);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, g.getVolume)({
                volume: (0, o.getMusicVolume)(this) / 100,
                type: g.SoundType.music
            }), m.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, m.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onUpdate', () => {
                    if (!this.state.countdownActive && !this.state.countupActive)
                        return;
                    const s = e.default.session.gameTime,
                        t = this.state.countdownActive ? this.state.countdownEndTimestamp - s : s - this.state.countupStartTimestamp,
                        u = Math.max(0, t / 1000);
                    e.default.session.gameClockDuration = (0, i.SecondsToDuration)(u);
                }), (0, d.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, g.getVolume)({
                        volume: (0, o.getMusicVolume)(this) / 100,
                        type: g.SoundType.music
                    }));
                }), (0, d.default)(this, 'onStateChange', a => {
                    'gameMusicState' === a && (this.state.gameMusicState === n.GameMusicState.playing ? this.play() : this.state.gameMusicState === n.GameMusicState.stopped ? this.stop() : this.state.gameMusicState === n.GameMusicState.fadingOut && this.fadeOut()), 'allowedToAddTimeToEndCountdown' === a && (e.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown);
                }), (0, d.default)(this, 'onDestroy', a => {
                    var s;
                    a.isBeingReplaced || (null === (s = p.get(this.id)) || void 0 === s || s.unload(), p.delete(this.id), q.delete(this.id));
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)(), (0, k.InGamePhase)() && (0, f.AmIGameOwner)()) {
                if (!p.get(this.id)) {
                    const s = new(0, h.Howl)({
                        src: [(0, o.getMusicUrl)(this)],
                        preload: !0,
                        loop: !0
                    });
                    p.set(this.id, s);
                }
                this.state.gameMusicState === n.GameMusicState.playing && this.play(), this.state.gameMusicState === n.GameMusicState.stopped && this.isPlaying && this.stop();
            }
            (0, k.InPreGamePhase)() && p.delete(this.id), e.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown;
        }
    }
    var s = t;
}), b.register('sZQtn', function(b, e) {
    a(b.exports, 'SecondsToDuration', function() {
        return c;
    });
    const c = a => {
            const d = Math.floor(a / 3600),
                e = Math.floor(a % 3600 / 60),
                f = Math.floor(a % 60);
            return d > 0 ? `${ d }:${ d(e) }:${ d(f) }` : `${ e }:${ d(f) }`;
        },
        d = a => a < 10 ? `0${ a }` : `${ a }`;
}), b.register('5Zmzq0', function(b, i) {
    a(b.exports, 'Consts', function() {
        return c;
    });
    const c = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), b.register('9nqqJ', function(b, i) {
    let c;
    var d;
    a(b.exports, 'GameMusicState', function() {
        return c;
    }), (d = c || (c = {})).stopped = 'stopped', d.playing = 'playing', d.fadingOut = 'fadingOut';
}), b.register('pu4uI', function(i, s) {
    a(i.exports, 'getMusicUrl', function() {
        return f;
    }), a(i.exports, 'getMusicVolume', function() {
        return g;
    });
    var c = b('s2CSz'),
        d = b('SUzmj'),
        e = b('JJQ0+');
    const f = a => {
            if ((0, d.IsTutorial)())
                return '';
            if (a.options.musicUrl)
                return (0, c.GetSoundUrl)(a.options.musicUrl);
            const g = a.options.presetMusicId;
            return 'NONE' !== g ? (0, e.default)('music/presets/' + g + '.mp3') : null;
        },
        g = a => a.options.musicUrl ? a.options.musicVolume : 25;
});