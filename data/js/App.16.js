function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('i0EEz', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _b(b.exports, 'ANIMATION_DURATION', function() {
        return _q;
    }), _b(b.exports, 'default', function() {
        return _r;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('TwXYL'),
        i = a('ryWAy'),
        j = a('2GeW4'),
        k = a('8eVLU'),
        l = a('qr+8A');
    let m, n, o = _b => _b;
    const p = f.lazy(() => a('BRuVz')),
        _q = 0.3;
    var _r = (0, k.withDeviceUIWrapper)(_b => ((0, i.default)(Phaser.Input.Keyboard.KeyCodes.ESC, _b.close, [_b.close]), (0, e.jsx)(_s, {
        children: (0, e.jsx)(_t, {
            initial: {
                background: 'rgba(0,0,0,0)'
            },
            animate: {
                background: 'rgba(0,0,0,0.7)'
            },
            exit: {
                background: 'rgba(0,0,0,0)'
            },
            transition: {
                duration: _q
            },
            children: (0, e.jsx)(f.Suspense, {
                fallback: null,
                children: (0, e.jsx)(p, {
                    ..._b
                })
            })
        })
    })));
    const _s = (0, g.default)(j.default).attrs({
            className: 'maxAll'
        })(m || (m = o`
  overflow: hidden;
  z-index: ${ 0 };
`), l.default.primaryContent),
        _t = (0, g.default)(h.motion.div).attrs({
            className: 'maxAll'
        })(n || (n = o``));
}), a.register('BRuVz', function(_b, c) {
    _b.exports = import('./' + a('HmN9A').resolve('jcmm2')).then(() => a('QiYJz'));
});