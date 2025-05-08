function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _o;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    class n extends j.default {
        constructor(o) {
            if (super(o), (0, f.default)(this, 'useCallToAction', () => {
                    this.sendToServerDevice(m.Messages.callToAction);
                }), (0, i.InPreGamePhase)() && (0, h.isSavedVersion)()) {
                const p = l.default.Overlay;
                new (0, k.default)({
                    device: this,
                    baseColor: p.baseColor,
                    boxColor: p.boxColor,
                    content: {
                        icon: {
                            image: (0, g.default)('devices/notification/icon.png'),
                            scale: 0.8
                        }
                    }
                });
            }
        }
    }
    var _o = n;
}), b.register('.....', function (c, d) {
    let e;
    a(c.exports, 'Messages', function () {
        return e;
    }), (e || (e = {})).callToAction = 'primaryCallToAction';
});