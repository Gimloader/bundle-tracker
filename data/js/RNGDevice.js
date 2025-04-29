var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('1iSJa', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _o;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('hycyg'),
        j = a('UkCpC'),
        k = a('ltxDW'),
        l = a('73Aki'),
        m = a('AHhkR');
    class n extends k.default {
        constructor(o) {
            if (super(o), (0, j.InPreGamePhase)() && (0, i.isSavedVersion)()) {
                const p = m.default.Utility;
                new(0, l.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        text: {
                            text: 'RNG'
                        }
                    }
                });
            }
        }
    }
    var _o = n;
});