function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('w57ai', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _o;
    });
    var e = a('1bFPu'),
        f = a('/pbxo'),
        g = a('I35Ay'),
        h = a('6Rd7a'),
        i = a('sCbH9'),
        j = a('9tz3H'),
        k = a('+uQv7'),
        l = a('2Xvuf'),
        m = a('dTXti');
    class n extends g.default {
        constructor(_o) {
            if (super(_o), (0, e.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        style: this.options.style,
                        defaultFontFamily: this.options.defaultFontFamily,
                        defaultBackgroundColor: this.options.defaultBackgroundColor,
                        closableByUser: this.options.closableByUser,
                        code: this.options.code
                    });
                }), (0, e.default)(this, 'callAction', _o => {
                    this.sendToServerDevice(h.Messages.callAction, {
                        calledActionName: _o
                    });
                }), (0, i.default)({
                    familyName: this.options.defaultFontFamily
                }), (0, f.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const p = m.default.Overlay;
                new(0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, l.default)('devices/code_ui/icon.png'),
                            scale: 0.92
                        }
                    }
                });
            }
        }
    }
    var _o = n;
}), a.register('6Rd7a', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).callAction = 'callAction';
}), a.register('sCbH9', function(b, c) {
    e(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('ARAVZ');
    const e = [],
        _f = e => e.includes(e);
    var _g = e => {
        const {
            familyName: h,
            onLoad: i
        } = e;
        e.includes(h) ? i && i() : o(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: e => {
                e.includes(e) || e.push(e), h === e && i && i();
            }
        });
    };
});