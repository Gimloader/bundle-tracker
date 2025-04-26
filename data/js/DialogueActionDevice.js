var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('dib4B', function(r, t) {
    var b, c, d, e, f;
    b = r.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = r.exports, d = 'default', e = function() {
        return r;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('7Sbqr'),
        i = a('7X8h3'),
        j = a('JJQ0+'),
        k = a('Bpt+p'),
        l = a('5Ux1a'),
        m = a('vUNls'),
        n = a('sgILU'),
        o = a('phu0d'),
        p = a('Gqspz');
    class q extends n.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'onStateChange', a => {
                    if ('active' === a) {
                        var r;
                        const s = null === (r = h.default.me.deviceUI.current) || void 0 === r ? void 0 : r.deviceId;
                        if (!s)
                            return;
                        const t = (0, m.FetchDeviceById)(s);
                        if (!t || t.deviceOption.id !== i.default.dialogue)
                            return;
                        null == t || t.onDialogueActionChange();
                    }
                }), (0, l.InPreGamePhase)() && (0, k.isSavedVersion)()) {
                const r = p.default.Overlay;
                new(0, o.default)({
                    device: this,
                    baseColor: r.baseColor,
                    boxColor: r.boxColor,
                    content: {
                        icon: {
                            image: (0, j.default)('devices/dialogue_action/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var r = s;
});