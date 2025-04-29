var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('vZVkZ', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _q;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('gRbUn'),
        j = a('O0Kav'),
        k = a('YbZFB'),
        l = a('u4s09');
    let m, n, o = a => a;
    const p = a => {
        const q = j.useRef(null);
        return j.useEffect(() => {
            (0, k.renderMathInElement)(q.current, {});
        }, []), (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_s, {}),
                (0, i.jsx)(_r, {
                    children: (0, i.jsx)('math-field', {
                        className: 'latex',
                        tabIndex: '-1',
                        ref: q,
                        'read-only': !0,
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: a.latex
                    })
                })
            ]
        });
    };
    var _q = a => (0, i.jsx)(p, {
        ...a
    }, a.latex);
    const _r = l.default.div(m || (m = o`
  pointer-events: none;
`)),
        _s = (0, l.createGlobalStyle)(n || (n = o`
  .latex {
    .ML__base {
      cursor: inherit !important;
    }
  }
`));
});