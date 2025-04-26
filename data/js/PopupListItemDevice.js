var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('CoBCG', function(t, i) {
    var b, c, d, e, f;
    b = t.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = t.exports, d = 'default', e = function() {
        return s;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('UM8oI'),
        h = a('7Sbqr'),
        i = a('7X8h3'),
        j = a('iAe3o'),
        k = a('JJQ0+'),
        l = a('Bpt+p'),
        m = a('5Ux1a'),
        n = a('vUNls'),
        o = a('sgILU'),
        p = a('phu0d'),
        q = a('Gqspz');
    class r extends o.default {
        constructor(a) {
            if (super(a), (0, g.default)(this, 'onInit', () => {
                    this.alertTextExplainerDeviceAboutChange();
                }), (0, g.default)(this, 'alertTextExplainerDeviceAboutChange', () => {
                    if (h.default.me.currentAction === j.default.deviceUI) {
                        const s = h.default.me.deviceUI.current.deviceId,
                            t = (0, n.FetchDeviceById)(s);
                        t && t.deviceOption.id === i.default.textExplainer && (null == t || t.onPopupListItemStateChange());
                    }
                }), (0, g.default)(this, 'onStateChange', a => {
                    this.alertTextExplainerDeviceAboutChange();
                }), (0, m.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const s = q.default.Overlay;
                new(0, p.default)({
                    device: this,
                    baseColor: s.baseColor,
                    boxColor: s.boxColor,
                    content: {
                        icon: {
                            image: (0, k.default)('devices/popup_list_item/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var s = t;
});