var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
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
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....'),
        p = a('.....');
    class q extends n.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'resetStore', () => {
                    j.default.me.mood.activeDeviceId = '', j.default.me.mood.vignetteActive = !1, j.default.me.mood.vignetteStrength = 0;
                }), (0, i.default)(this, 'setStore', () => {
                    j.default.me.mood.activeDeviceId = this.id, j.default.me.mood.vignetteActive = !0, j.default.me.mood.vignetteStrength = this.options.vignetteStrength;
                }), (0, i.default)(this, 'onStateChange', s => {
                    (0, m.InPreGamePhase)() || 'active' === s && (!1 === this.state.active && j.default.me.mood.activeDeviceId === this.id && this.resetStore(), this.state.active && this.setStore());
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