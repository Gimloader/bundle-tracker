var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
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
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....'),
        p = a('.....'),
        q = a('.....'),
        r = a('.....');
    class s extends p.default {
        constructor(t) {
            if (super(t), (0, i.default)(this, 'onStateChange', u => {
                    if ('active' === u) {
                        var v;
                        const w = null === (v = j.default.me.deviceUI.current) || void 0 === v ? void 0 : v.deviceId;
                        if (!w)
                            return;
                        const x = (0, o.FetchDeviceById)(w);
                        if (!x || x.deviceOption.id !== k.default.dialogue)
                            return;
                        null == x || x.onDialogueActionChange();
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