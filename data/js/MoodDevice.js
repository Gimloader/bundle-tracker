var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('GnQiO', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _r;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('s/YA9'),
        j = a('fI6of'),
        k = a('UaUBz0'),
        l = a('hycyg'),
        m = a('UkCpC'),
        n = a('ltxDW'),
        o = a('73Aki'),
        p = a('AHhkR');
    class q extends n.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'resetStore', () => {
                    j.default.me.mood.activeDeviceId = '', j.default.me.mood.vignetteActive = !1, j.default.me.mood.vignetteStrength = 0;
                }), (0, i.default)(this, 'setStore', () => {
                    j.default.me.mood.activeDeviceId = this.id, j.default.me.mood.vignetteActive = !0, j.default.me.mood.vignetteStrength = this.options.vignetteStrength;
                }), (0, i.default)(this, 'onStateChange', r => {
                    (0, m.InPreGamePhase)() || 'active' === r && (!1 === this.state.active && j.default.me.mood.activeDeviceId === this.id && this.resetStore(), this.state.active && this.setStore());
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const s = p.default.Overlay;
                new(0, o.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
                    content: {
                        icon: {
                            image: (0, k.default)('devices/mood/icon.png'),
                            scale: 1
                        }
                    }
                });
            }
        }
    }
    var _r = q;
});