function e(e, t, i, s) {
    Object.defineProperty(e, t, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("2M5IW", (function(i, s) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "MusicDevice", (function() {
        return m
    })), e(i.exports, "default", (function() {
        return v
    }));
    var o = t("divCp"),
        a = t("6yrsF"),
        l = t("lnD8D"),
        u = t("6Tpu2"),
        r = t("3iPiZ"),
        d = t("bNmF9"),
        h = t("f0pfH"),
        p = t("9lkHR"),
        c = t("bNS7g"),
        f = t("3ydpO");
    const g = new Map,
        y = new Map;
    class m extends d.default {
        get howl() {
            return g.get(this.id)
        }
        get isPlaying() {
            return y.get(this.id) || !1
        }
        set isPlaying(e) {
            y.set(this.id, e)
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, r.getVolume)({
                volume: this.options.volume / 100,
                type: r.SoundType.music
            }), p.Consts.fadeInTime))
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1)
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, p.Consts.fadeOutTime), this.isPlaying = !1)
        }
        constructor(e) {
            if (super(e), (0, o.default)(this, "onMasterVolumeChange", (() => {
                    this.howl && this.howl.volume((0, r.getVolume)({
                        volume: this.options.volume / 100,
                        type: r.SoundType.music
                    }))
                })), (0, o.default)(this, "onStateChange", (e => {
                    "currentState" === e && (this.state.currentState === c.MusicDeviceState.playing ? this.play() : this.state.currentState === c.MusicDeviceState.stopped ? this.stop() : this.state.currentState === c.MusicDeviceState.fadingOut && this.fadeOut())
                })), (0, o.default)(this, "onDestroy", (e => {
                    var t;
                    e.isBeingReplaced || (null === (t = g.get(this.id)) || void 0 === t || t.unload(), g.delete(this.id), y.delete(this.id))
                })), (0, u.InGamePhase)() && (0, l.AmIGameOwner)()) {
                if (!g.get(this.id)) {
                    const e = new(0, a.Howl)({
                        src: [(0, f.GetSoundUrl)(this.options.audioUrl)],
                        volume: this.options.volume / 100,
                        preload: !0,
                        loop: !0
                    });
                    g.set(this.id, e)
                }
                this.state.currentState === c.MusicDeviceState.playing && this.play(), this.state.currentState === c.MusicDeviceState.stopped && this.isPlaying && this.stop()
            }(0, u.InPreGamePhase)() && (this.parts.add.sprite(h.BaseAsset), g.delete(this.id))
        }
    }
    var v = m
})), t.register("f0pfH", (function(i, s) {
    e(i.exports, "BaseAsset", (function() {
        return n
    }));
    const n = {
        imageId: "music_device",
        imageUrl: (0, t("alREA").default)("devices/music/music-device.png")
    }
})), t.register("9lkHR", (function(t, i) {
    e(t.exports, "Consts", (function() {
        return s
    }));
    const s = {
        fadeInTime: 1e3,
        fadeOutTime: 1e3
    }
})), t.register("bNS7g", (function(t, i) {
    let s;
    var n;
    e(t.exports, "MusicDeviceState", (function() {
        return s
    })), (n = s || (s = {})).stopped = "stopped", n.playing = "playing", n.fadingOut = "fadingOut"
}));