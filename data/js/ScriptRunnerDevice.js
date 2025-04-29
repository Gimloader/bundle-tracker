var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('sAum1', function(b, c) {
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
    var i = a('2Xvuf'),
        j = a('9tz3H'),
        k = a('/pbxo'),
        l = a('I35Ay'),
        m = a('+uQv7'),
        n = a('dTXti');
    class o extends l.default {
        constructor(p) {
            if (super(p), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const q = n.default.Communication;
                new(0, m.default)({
                    device: this,
                    baseColor: q.baseColor,
                    boxColor: q.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)('devices/script_runner/script.png')
                        }
                    }
                });
            }
        }
    }
    var _p = o;
});