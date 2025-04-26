var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Dvo+z', function(t, o) {
    var b, c, d, e, f;
    b = t.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = t.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('7Sbqr'),
        i = a('JJQ0+'),
        j = a('Bpt+p'),
        k = a('5Ux1a'),
        l = a('sgILU'),
        m = a('phu0d'),
        n = a('Gqspz');
    class o extends l.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'resetStore', () => {
                    h.default.me.mood.activeDeviceId = '', h.default.me.mood.vignetteActive = !1, h.default.me.mood.vignetteStrength = 0;
                }), (0, g.default)(this, 'setStore', () => {
                    h.default.me.mood.activeDeviceId = this.id, h.default.me.mood.vignetteActive = !0, h.default.me.mood.vignetteStrength = this.options.vignetteStrength;
                }), (0, g.default)(this, 'onStateChange', a => {
                    (0, k.InPreGamePhase)() || 'active' === a && (!1 === this.state.active && h.default.me.mood.activeDeviceId === this.id && this.resetStore(), this.state.active && this.setStore());
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const p = n.default.Overlay;
                new(0, m.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)('devices/mood/icon.png'),
                            scale: 1
                        }
                    }
                });
            }
        }
    }
    var p = q;
});