var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lEA2e', function(b, c) {
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
    var i = a('1bFPu'),
        j = a('L1523'),
        k = a('2Xvuf'),
        l = a('9tz3H'),
        m = a('/pbxo'),
        n = a('I35Ay'),
        o = a('+uQv7'),
        p = a('dTXti');
    class q extends n.default {
        constructor(r) {
            if (super(r), (0, i.default)(this, 'onMessage', r => {
                    'end_game' == r.key && (0, j.EmitTutorialEvent)({
                        event: j.TutorialEventName.END_THE_GAME_BY_DEVICE
                    });
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const s = p.default.Utility;
                new(0, o.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
                    content: {
                        icon: {
                            image: (0, k.default)('devices/end_game/icon.png'),
                            scale: 0.8
                        }
                    }
                });
            }
        }
    }
    var _r = q;
});