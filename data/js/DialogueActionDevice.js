var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('z6f3m', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _t;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('1bFPu'),
        j = a('iWivW'),
        k = a('cPBfb'),
        l = a('2Xvuf'),
        m = a('9tz3H'),
        n = a('/pbxo'),
        o = a('BYRTX'),
        p = a('I35Ay'),
        q = a('+uQv7'),
        r = a('dTXti');
    class s extends p.default {
        constructor(t) {
            if (super(t), (0, i.default)(this, 'onStateChange', t => {
                    if ('active' === t) {
                        var u;
                        const v = null === (u = j.default.me.deviceUI.current) || void 0 === u ? void 0 : u.deviceId;
                        if (!v)
                            return;
                        const w = (0, o.FetchDeviceById)(v);
                        if (!w || w.deviceOption.id !== k.default.dialogue)
                            return;
                        null == w || w.onDialogueActionChange();
                    }
                }), (0, n.InPreGamePhase)() && (0, m.isSavedVersion)()) {
                const u = r.default.Overlay;
                new(0, q.default)({
                    device: this,
                    baseColor: u.baseColor,
                    boxColor: u.boxColor,
                    content: {
                        icon: {
                            image: (0, l.default)('devices/dialogue_action/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _t = s;
});