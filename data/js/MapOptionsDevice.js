function t(t, e, i, s) {
    Object.defineProperty(t, e, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("bwHLt", (function(i, s) {
    var o;
    o = i.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return T
    }));
    var n = e("divCp"),
        a = e("iRjsB"),
        u = e("lnD8D"),
        l = e("3iPiZ"),
        d = e("6yrsF"),
        r = (e("alREA"), e("3QJmn")),
        h = e("4uojN"),
        c = e("6Tpu2"),
        m = e("bNmF9"),
        p = (e("dPNN3"), e("h6SIm"), e("9lkHR")),
        f = e("26P1a"),
        g = e("iOMxb");
    const w = new Map,
        y = new Map;
    class M extends m.default {
        get howl() {
            return w.get(this.id)
        }
        get isPlaying() {
            return y.get(this.id) || !1
        }
        set isPlaying(t) {
            y.set(this.id, t)
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, l.getVolume)({
                volume: (0, g.getMusicVolume)(this) / 100,
                type: l.SoundType.music
            }), p.Consts.fadeInTime))
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1)
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, p.Consts.fadeOutTime), this.isPlaying = !1)
        }
        constructor(t) {
            if (super(t), (0, n.default)(this, "onUpdate", (() => {
                    if (!this.state.countdownActive && !this.state.countupActive) return;
                    const t = a.default.session.gameTime,
                        e = this.state.countdownActive ? this.state.countdownEndTimestamp - t : t - this.state.countupStartTimestamp,
                        i = Math.max(0, e / 1e3);
                    a.default.session.gameClockDuration = (0, r.SecondsToDuration)(i)
                })), (0, n.default)(this, "onMasterVolumeChange", (() => {
                    this.howl && this.howl.volume((0, l.getVolume)({
                        volume: (0, g.getMusicVolume)(this) / 100,
                        type: l.SoundType.music
                    }))
                })), (0, n.default)(this, "onStateChange", (t => {
                    "gameMusicState" === t && (this.state.gameMusicState === f.GameMusicState.playing ? this.play() : this.state.gameMusicState === f.GameMusicState.stopped ? this.stop() : this.state.gameMusicState === f.GameMusicState.fadingOut && this.fadeOut()), "allowedToAddTimeToEndCountdown" === t && (a.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown)
                })), (0, n.default)(this, "onDestroy", (t => {
                    var e;
                    t.isBeingReplaced || (null === (e = w.get(this.id)) || void 0 === e || e.unload(), w.delete(this.id), y.delete(this.id))
                })), (0, c.InPreGamePhase)() && (0, h.isSavedVersion)(), (0, c.InGamePhase)() && (0, u.AmIGameOwner)()) {
                if (!w.get(this.id)) {
                    const t = new(0, d.Howl)({
                        src: [(0, g.getMusicUrl)(this)],
                        preload: !0,
                        loop: !0
                    });
                    w.set(this.id, t)
                }
                this.state.gameMusicState === f.GameMusicState.playing && this.play(), this.state.gameMusicState === f.GameMusicState.stopped && this.isPlaying && this.stop()
            }(0, c.InPreGamePhase)() && w.delete(this.id), a.default.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown
        }
    }
    var T = M
})), e.register("3QJmn", (function(e, i) {
    t(e.exports, "SecondsToDuration", (function() {
        return s
    }));
    const s = t => {
            const e = Math.floor(t / 3600),
                i = Math.floor(t % 3600 / 60),
                s = Math.floor(t % 60);
            return e > 0 ? `${e}:${o(i)}:${o(s)}` : `${i}:${o(s)}`
        },
        o = t => t < 10 ? `0${t}` : `${t}`
})), e.register("9lkHR", (function(e, i) {
    t(e.exports, "Consts", (function() {
        return s
    }));
    const s = {
        fadeInTime: 1e3,
        fadeOutTime: 1e3
    }
})), e.register("26P1a", (function(e, i) {
    let s;
    var o;
    t(e.exports, "GameMusicState", (function() {
        return s
    })), (o = s || (s = {})).stopped = "stopped", o.playing = "playing", o.fadingOut = "fadingOut"
})), e.register("iOMxb", (function(i, s) {
    t(i.exports, "getMusicUrl", (function() {
        return u
    })), t(i.exports, "getMusicVolume", (function() {
        return l
    }));
    var o = e("3ydpO"),
        n = e("aNA20"),
        a = e("alREA");
    const u = t => {
            if ((0, n.IsTutorial)()) return "";
            if (t.options.musicUrl) return (0, o.GetSoundUrl)(t.options.musicUrl);
            const e = t.options.presetMusicId;
            return "NONE" !== e ? (0, a.default)("music/presets/" + e + ".mp3") : null
        },
        l = t => t.options.musicUrl ? t.options.musicVolume : 25
}));