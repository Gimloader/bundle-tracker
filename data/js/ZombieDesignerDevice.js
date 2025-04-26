var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('fA24R', function(o, t) {
    var b, c, d, e, f;
    b = o.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = o.exports, d = 'default', e = function() {
        return m;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('Bpt+p'),
        h = a('5Ux1a'),
        i = a('sgILU'),
        j = a('phu0d'),
        k = a('Gqspz');
    class l extends i.default {
        constructor(a) {
            if (super(a), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const m = k.default.Zombies;
                new(0, j.default)({
                    device: this,
                    baseColor: m.baseColor,
                    boxColor: m.boxColor,
                    content: {
                        text: {
                            text: this.options.type ? `Zombie\n${ this.options.type }` : 'Zombie\nDesigner'
                        }
                    }
                });
            }
        }
    }
    var m = n;
});