function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('kiaj0', function(b, d) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return o;
    });
    var e = c('UM8oI'),
        f = c('5Ux1a'),
        g = c('sgILU'),
        h = c('37gtH'),
        i = c('crVjo2'),
        j = c('Bpt+p'),
        k = c('phu0d'),
        l = c('JJQ0+'),
        m = c('Gqspz');
    class n extends g.default {
        constructor(a) {
            if (super(a), (0, e.default)(this, 'openDeviceUI', () => {
                    this.deviceUI.open({
                        style: this.options.style,
                        defaultFontFamily: this.options.defaultFontFamily,
                        defaultBackgroundColor: this.options.defaultBackgroundColor,
                        closableByUser: this.options.closableByUser,
                        code: this.options.code
                    });
                }), (0, e.default)(this, 'callAction', a => {
                    this.sendToServerDevice(h.Messages.callAction, {
                        calledActionName: a
                    });
                }), (0, i.default)({
                    familyName: this.options.defaultFontFamily
                }), (0, f.InPreGamePhase)() && (0, j.isSavedVersion)()) {
                const o = m.default.Overlay;
                new(0, k.default)({
                    device: this,
                    baseColor: o.baseColor,
                    boxColor: o.boxColor,
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
    var o = p;
}), c.register('37gtH', function(b, c) {
    let d;
    a(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).callAction = 'callAction';
}), c.register('crVjo2', function(i, i) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
});