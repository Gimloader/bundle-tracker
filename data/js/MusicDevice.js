function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('HNLh2', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'MusicDevice', function() {
        return _q;
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('6yrsF'),
        g = a('i3kcr'),
        h = a('/pbxo'),
        i = a('1f1YX'),
        j = a('I35Ay'),
        k = a('NZSfi'),
        l = a('eIAtr'),
        m = a('m3Lon'),
        n = a('UJCwk');
    const o = new Map(),
        p = new Map();
    class _q extends j.default {
        get howl() {
            return o.get(this.id);
        }
        get isPlaying() {
            return p.get(this.id) || !1;
        }
        set isPlaying(_r) {
            p.set(this.id, _r);
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, (0, i.getVolume)({
                volume: this.options.volume / 100,
                type: i.SoundType.music
            }), l.Consts.fadeInTime));
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1);
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, l.Consts.fadeOutTime), this.isPlaying = !1);
        }
        constructor(r) {
            if (super(r), (0, e.default)(this, 'onMasterVolumeChange', () => {
                    this.howl && this.howl.volume((0, i.getVolume)({
                        volume: this.options.volume / 100,
                        type: i.SoundType.music
                    }));
                }), (0, e.default)(this, 'onStateChange', r => {
                    'currentState' === r && (this.state.currentState === m.MusicDeviceState.playing ? this.play() : this.state.currentState === m.MusicDeviceState.stopped ? this.stop() : this.state.currentState === m.MusicDeviceState.fadingOut && this.fadeOut());
                }), (0, e.default)(this, 'onDestroy', r => {
                    var s;
                    r.isBeingReplaced || (null === (s = o.get(this.id)) || void 0 === s || s.unload(), o.delete(this.id), p.delete(this.id));
                }), (0, h.InGamePhase)() && (0, g.AmIGameOwner)()) {
                if (!o.get(this.id)) {
                    const s = new(0, f.Howl)({
                        src: [(0, n.GetSoundUrl)(this.options.audioUrl)],
                        volume: this.options.volume / 100,
                        preload: !0,
                        loop: !0
                    });
                    o.set(this.id, s);
                }
                this.state.currentState === m.MusicDeviceState.playing && this.play(), this.state.currentState === m.MusicDeviceState.stopped && this.isPlaying && this.stop();
            }
            (0, h.InPreGamePhase)() && (this.parts.add.sprite(k.BaseAsset), o.delete(this.id));
        }
    }
    var _r = _q;
}), a.register('NZSfi', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'music_device',
        imageUrl: (0, a('2Xvuf').default)('devices/music/music-device.png')
    };
}), a.register('eIAtr', function(b, c) {
    e(b.exports, 'Consts', function() {
        return _d;
    });
    const _d = {
        fadeInTime: 1000,
        fadeOutTime: 1000
    };
}), a.register('m3Lon', function(b, c) {
    let d;
    var e;
    e(b.exports, 'MusicDeviceState', function() {
        return d;
    }), (e = d || (d = {})).stopped = 'stopped', e.playing = 'playing', e.fadingOut = 'fadingOut';
});