function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('/BidE', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'MusicDevice', function() {
        return _r;
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('6yrsF'),
        h = b('p7Hfe'),
        i = b('UkCpC'),
        j = b('CbU7r'),
        k = b('ltxDW'),
        l = b('8YK5D'),
        m = b('a9TTj0'),
        n = b('y+rTc'),
        o = b('oH3gV');
    const p = new Map(),
        q = new Map();
    class _r extends k.default {
        get howl() {
            return p.get(this.id);
        }
        get isPlaying() {
            return q.get(this.id) || !1;
        }
        set isPlaying(s) {
            q.set(this.id, s);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, j.getVolume)({
                volume: this.options.volume / 100,
                type: j.SoundType.music
            }), m.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, m.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(s) {
            if (super(s), (0, f.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, j.getVolume)({
                        volume: this.options.volume / 100,
                        type: j.SoundType.music
                    }));
                }), (0, f.default)(this, 'onStateChange', s => {
                    'currentState' === s && (this.state.currentState === n.MusicDeviceState.playing ? this.play() : this.state.currentState === n.MusicDeviceState.stopped ? this.stop() : this.state.currentState === n.MusicDeviceState.fadingOut && this.fadeOut());
                }), (0, f.default)(this, 'onDestroy', s => {
                    var t;
                    s.isBeingReplaced || (null === (t = p.get(this.id)) || void 0 === t || t.unload(), p.delete(this.id), q.delete(this.id));
                }), (0, i.InGamePhase)() && (0, h.AmIGameOwner)()) {
                if (!p.get(this.id)) {
                    const t = new(0, g.Howl)({
                        src: [(0, o.GetSoundUrl)(this.options.audioUrl)],
                        volume: this.options.volume / 100,
                        preload: !0,
                        loop: !0
                    });
                    p.set(this.id, t);
                }
                this.state.currentState === n.MusicDeviceState.playing && this.play(), this.state.currentState === n.MusicDeviceState.stopped && this.isPlaying && this.stop();
            }
            (0, i.InPreGamePhase)() && (this.parts.add.sprite(l.BaseAsset), p.delete(this.id));
        }
    }
    var _s = _r;
}), b.register('8YK5D', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'music_device',
        imageUrl: (0, b('UaUBz0').default)('devices/music/music-device.png')
    };
}), b.register('a9TTj0', function(c, d) {
    a(c.exports, 'Consts', function() {
        return _e;
    });
    const _e = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), b.register('y+rTc', function(c, d) {
    let e;
    var f;
    a(c.exports, 'MusicDeviceState', function() {
        return e;
    }), (f = e || (e = {})).stopped = 'stopped', f.playing = 'playing', f.fadingOut = 'fadingOut';
});