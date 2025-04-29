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
c.register('JIwzI', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _q;
    });
    var g = c('s/YA9'),
        h = c('UkCpC'),
        i = c('ltxDW'),
        j = c('gl6Wg'),
        k = c('bMaPZ2'),
        l = c('hycyg'),
        m = c('73Aki'),
        n = c('UaUBz0'),
        o = c('AHhkR');
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
                }), (0, g.default)(this, 'callAction', q => {
                    this.sendToServerDevice(j.Messages.callAction, {
                        calledActionName: q
                    });
                }), (0, k.default)({
                    familyName: this.options.defaultFontFamily
                }), (0, h.InPreGamePhase)() && (0, l.isSavedVersion)()) {
                const r = o.default.Overlay;
                new(0, m.default)({
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
}), c.register('gl6Wg', function(d, e) {
    let f;
    a(d.exports, 'Messages', function() {
        return f;
    }), (f || (f = {})).callAction = 'callAction';
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
});