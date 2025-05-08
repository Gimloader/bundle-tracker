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
    }), a(c.exports, 'ANIMATION_DURATION', function () {
        return _r;
    }), a(c.exports, 'default', function () {
        return _s;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    let n, o, p = q => q;
    const q = g.lazy(() => b('.....')), _r = 0.3;
    var _s = (0, l.withDeviceUIWrapper)(t => ((0, j.default)(Phaser.Input.Keyboard.KeyCodes.ESC, t.close, [t.close]), (0, f.jsx)(_t, {
        children: (0, f.jsx)(_u, {
            initial: { background: 'rgba(0,0,0,0)' },
            animate: { background: 'rgba(0,0,0,0.7)' },
            exit: { background: 'rgba(0,0,0,0)' },
            transition: { duration: _r },
            children: (0, f.jsx)(g.Suspense, {
                fallback: null,
                children: (0, f.jsx)(q, { ...t })
            })
        })
    })));
    const _t = (0, h.default)(k.default).attrs({ className: 'maxAll' })(n || (n = p`
  overflow: hidden;
  z-index: ${ 0 };
`), m.default.primaryContent), _u = (0, h.default)(i.motion.div).attrs({ className: 'maxAll' })(o || (o = p``));
}), b.register('.....', function (c, d) {
    c.exports = import('./' + b('.....').resolve('jcmm2')).then(() => b('.....'));
});