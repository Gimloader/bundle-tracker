var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('4duon', function(o, n) {
    var b, c, d, e, f;
    b = o.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = o.exports, d = 'default', e = function() {
        return n;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('JJQ0+'),
        h = a('Bpt+p'),
        i = a('5Ux1a'),
        j = a('sgILU'),
        k = a('phu0d'),
        l = a('Gqspz');
    class m extends j.default {
        constructor(a) {
            if (super(a), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const n = l.default.Utility;
                new(0, k.default)({
                    device: this,
                    baseColor: n.baseColor,
                    boxColor: n.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/respawn/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var n = o;
});