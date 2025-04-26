function a(a, b, i, c) {
    Object.defineProperty(a, b, {
        get: i,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('RQZNX', function(i, c) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'MusicDevice', function() {
        return p;
    }), a(i.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('6yrsF'),
        f = b('Il8g9'),
        g = b('5Ux1a'),
        h = b('Ena4B'),
        i = b('sgILU'),
        j = b('+Cz8o'),
        k = b('5Zmzq0'),
        l = b('w5ysd'),
        m = b('s2CSz');
    const n = new Map(),
        o = new Map();
    class p extends i.default {
        get howl() {
            return n.get(this.id);
        }
        get isPlaying() {
            return o.get(this.id) || !1;
        }
        set isPlaying(a) {
            o.set(this.id, a);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, h.getVolume)({
                volume: this.options.volume / 100,
                type: h.SoundType.music
            }), k.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, k.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(a) {
            if (super(a), (0, d.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, h.getVolume)({
                        volume: this.options.volume / 100,
                        type: h.SoundType.music
                    }));
                }), (0, d.default)(this, 'onStateChange', a => {
                    'currentState' === a && (this.state.currentState === l.MusicDeviceState.playing ? this.play() : this.state.currentState === l.MusicDeviceState.stopped ? this.stop() : this.state.currentState === l.MusicDeviceState.fadingOut && this.fadeOut());
                }), (0, d.default)(this, 'onDestroy', a => {
                    var q;
                    a.isBeingReplaced || (null === (q = n.get(this.id)) || void 0 === q || q.unload(), n.delete(this.id), o.delete(this.id));
                }), (0, g.InGamePhase)() && (0, f.AmIGameOwner)()) {
                if (!n.get(this.id)) {
                    const q = new(0, e.Howl)({
                        src: [(0, m.GetSoundUrl)(this.options.audioUrl)],
                        volume: this.options.volume / 100,
                        preload: !0,
                        loop: !0
                    });
                    n.set(this.id, q);
                }
                this.state.currentState === l.MusicDeviceState.playing && this.play(), this.state.currentState === l.MusicDeviceState.stopped && this.isPlaying && this.stop();
            }
            (0, g.InPreGamePhase)() && (this.parts.add.sprite(j.BaseAsset), n.delete(this.id));
        }
    }
    var q = r;
}), b.register('+Cz8o', function(i, c) {
    a(i.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'music_device',
        imageUrl: (0, b('JJQ0+').default)('devices/music/music-device.png')
    };
}), b.register('5Zmzq0', function(b, i) {
    a(b.exports, 'Consts', function() {
        return c;
    });
    const c = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), b.register('w5ysd', function(b, i) {
    let c;
    var d;
    a(b.exports, 'MusicDeviceState', function() {
        return c;
    }), (d = c || (c = {})).stopped = 'stopped', d.playing = 'playing', d.fadingOut = 'fadingOut';
});