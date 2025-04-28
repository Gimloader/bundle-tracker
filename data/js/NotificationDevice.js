function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('10ZuL', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _n;
    });
    var e = a('1bFPu'),
        f = a('2Xvuf'),
        g = a('9tz3H'),
        h = a('/pbxo'),
        i = a('I35Ay'),
        j = a('+uQv7'),
        k = a('dTXti'),
        l = a('ddHnt');
    class m extends i.default {
        constructor(_n) {
            if (super(_n), (0, e.default)(this, 'useCallToAction', () => {
                    this.sendToServerDevice(l.Messages.callToAction);
                }), (0, h.InPreGamePhase)() && (0, g.isSavedVersion)()) {
                const o = k.default.Overlay;
                new(0, j.default)({
                    device: this,
                    baseColor: o.baseColor,
                    boxColor: o.boxColor,
                    content: {
                        icon: {
                            image: (0, f.default)('devices/notification/icon.png'),
                            scale: 0.8
                        }
                    }
                });
            }
        }
    }
    var _n = m;
}), a.register('ddHnt', function(b, c) {
    let d;
    e(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).callToAction = 'primaryCallToAction';
});