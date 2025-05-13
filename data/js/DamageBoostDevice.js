var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _p;
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
        n = a('.....');
    class o extends l.default {
        constructor(p) {
            if (super(p), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const q = n.default.Utility;
                new(0, m.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)('devices/damage_boost/icon.png'),
                            scale: 1
                        }
                    }
                });
            }
        }
    }
    var _p = o;
});