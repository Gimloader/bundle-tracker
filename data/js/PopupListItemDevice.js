var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _u;
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
        r = a('.....'),
        s = a('.....');
    class t extends q.default {
        constructor(u) {
            if (super(u), (0, i.default)(this, 'onInit', () => {
                    this.alertTextExplainerDeviceAboutChange();
                }), (0, i.default)(this, 'alertTextExplainerDeviceAboutChange', () => {
                    if (j.default.me.currentAction === l.default.deviceUI) {
                        const v = j.default.me.deviceUI.current.deviceId,
                            w = (0, p.FetchDeviceById)(v);
                        w && w.deviceOption.id === k.default.textExplainer && (null == w || w.onPopupListItemStateChange());
                    }
                }), (0, i.default)(this, 'onStateChange', v => {
                    this.alertTextExplainerDeviceAboutChange();
                }), (0, o.InPreGamePhase)() && (0, n.isSavedVersion)()) {
                const v = s.default.Overlay;
                new(0, r.default)({
                    device: this,
                    baseColor: v.baseColor,
                    boxColor: v.boxColor,
                    content: {
                        icon: {
                            image: (0, m.default)('devices/popup_list_item/icon.png'),
                            scale: 0.85
                        }
                    }
                });
            }
        }
    }
    var _u = t;
});