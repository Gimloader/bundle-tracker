var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('feyVh', function(o, n) {
    var b, c, d, e, f;
    b = o.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = o.exports, d = 'default', e = function() {
        return o;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ'),
        h = a('uPP4W'),
        i = a('f/Oze'),
        j = a('h99Nu');
    let k, l, m = a => a;
    const n = a => {
        const o = h.useRef(null);
        return h.useEffect(() => {
            (0, i.renderMathInElement)(o.current, {});
        }, []), (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(q, {}),
                (0, g.jsx)(p, {
                    children: (0, g.jsx)('math-field', {
                        className: 'latex',
                        tabIndex: '-1',
                        ref: o,
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
    var o = a => (0, g.jsx)(n, {
        ...a
    }, a.latex);
    const p = j.default.div(k || (k = m`
  pointer-events: none;
`)),
        q = (0, j.createGlobalStyle)(l || (l = m`
  .latex {
    .ML__base {
      cursor: inherit !important;
    }
  }
`));
});