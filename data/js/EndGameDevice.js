var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('cyMa3', function(o, t) {
    var b, c, d, e, f;
    b = o.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = o.exports, d = 'default', e = function() {
        return p;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('D0n26'),
        i = a('JJQ0+'),
        j = a('Bpt+p'),
        k = a('5Ux1a'),
        l = a('sgILU'),
        m = a('phu0d'),
        n = a('Gqspz');
    class o extends l.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'onMessage', a => {
                    'end_game' == a.key && (0, h.EmitTutorialEvent)({
                        event: h.TutorialEventName.END_THE_GAME_BY_DEVICE
                    });
                }), (0, k.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const p = n.default.Utility;
                new(0, m.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, i.default)('devices/end_game/icon.png'),
                            scale: 0.8
                        }
                    }
                });
            }
        }
    }
    var p = q;
});