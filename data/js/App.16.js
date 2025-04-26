function a(a, b, t, r) {
    Object.defineProperty(a, b, {
        get: t,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('ge6u9', function(t, r) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'ANIMATION_DURATION', function() {
        return p;
    }), a(t.exports, 'default', function() {
        return q;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('h99Nu'),
        g = b('b9Bct'),
        h = b('+0Tb/'),
        i = b('EefFJ'),
        j = b('FZOhR'),
        k = b('wnmVt');
    let l, m, n = a => a;
    const o = e.lazy(() => b('9ABPx')),
        p = 0.3;
    var q = (0, j.withDeviceUIWrapper)(a => ((0, h.default)(Phaser.Input.Keyboard.KeyCodes.ESC, a.close, [a.close]), (0, d.jsx)(r, {
        children: (0, d.jsx)(s, {
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
                duration: p
            },
            children: (0, d.jsx)(e.Suspense, {
                fallback: null,
                children: (0, d.jsx)(o, {
                    ...a
                })
            })
        })
    })));
    const r = (0, f.default)(i.default).attrs({
            className: 'maxAll'
        })(l || (l = n`
  overflow: hidden;
  z-index: ${ 0 };
`), k.default.primaryContent),
        s = (0, f.default)(g.motion.div).attrs({
            className: 'maxAll'
        })(m || (m = n``));
}), b.register('9ABPx', function(a, t) {
    a.exports = import('./' + b('tIOy4').resolve('jcmm2')).then(() => b('OGpWH'));
});