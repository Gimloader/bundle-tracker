function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _q;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    class p extends i.default {
        constructor(q) {
            if (super(q), (0, g.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        style: this.options.style,
                        defaultFontFamily: this.options.defaultFontFamily,
                        defaultBackgroundColor: this.options.defaultBackgroundColor,
                        closableByUser: this.options.closableByUser,
                        code: this.options.code
                    });
                }), (0, g.default)(this, 'callAction', r => {
                    this.sendToServerDevice(j.Messages.callAction, { calledActionName: r });
                }), (0, k.default)({ familyName: this.options.defaultFontFamily }), (0, h.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const r = o.default.Overlay;
                new (0, m.default)({
                    device: this,
                    baseColor: r.baseColor,
                    boxColor: r.boxColor,
                    content: {
                        icon: {
                            image: (0, n.default)('devices/code_ui/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _q = p;
}), c.register('.....', function (d, e) {
    let f;
    a(d.exports, 'Messages', function () {
        return f;
    }), (f || (f = {})).callAction = 'callAction';
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
});