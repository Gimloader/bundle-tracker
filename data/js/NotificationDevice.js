function a(a, b, n, c) {
    Object.defineProperty(a, b, {
        get: n,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('8Rbag', function(n, c) {
    var c;
    c = n.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(n.exports, 'default', function() {
        return m;
    });
    var d = b('UM8oI'),
        e = b('JJQ0+'),
        f = b('Bpt+p'),
        g = b('5Ux1a'),
        h = b('sgILU'),
        i = b('phu0d'),
        j = b('Gqspz'),
        k = b('X3k95');
    class l extends h.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'useCallToAction', () => {
                    this.sendToServerDevice(k.Messages.callToAction);
                }), (0, g.InPreGamePhase)() && (0, f.isSavedVersion)()) {
                const m = j.default.Overlay;
                new(0, i.default)({
                    device: this,
                    baseColor: m.baseColor,
                    boxColor: m.boxColor,
                    content: {
                        icon: {
                            image: (0, e.default)('devices/notification/icon.png'),
                            scale: 0.8
                        }
                    }
                });
            }
        }
    }
    var m = n;
}), b.register('X3k95', function(b, n) {
    let c;
    a(b.exports, 'Messages', function() {
        return c;
    }), (c || (c = {})).callToAction = 'primaryCallToAction';
});