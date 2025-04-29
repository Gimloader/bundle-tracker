function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('etBEa', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('gRbUn');
    b('O0Kav');
    var g = b('9aZ6t'),
        h = b('hxGRM'),
        i = b('u4s09'),
        j = b('pDOwa'),
        k = b('V/q8i'),
        l = b('quE27'),
        m = b('Eh2Wh'),
        n = b('cFfeL'),
        o = b('lKjHC');
    let p, q, r = a => a;
    const s = {
            y: ' 100%',
            opacity: 0
        },
        t = {
            y: '0%',
            opacity: 1
        };
    var _u = a => {
        const v = (0, h.useIsPresent)(),
            [w, x] = (0, l.useBoolean)(!1);
        (0, o.useDidMount)(() => {
            (0, l.loadFont)('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
        });
        return (0, f.jsxs)(_v, {
            onClick: () => {
                v && w && a.close();
            },
            children: [
                (0, f.jsx)(_w, {
                    initial: s,
                    animate: t,
                    exit: s,
                    transition: {
                        duration: j.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: a => a.stopPropagation(),
                    onAnimationComplete: x,
                    children: (0, f.jsx)(n.default, {
                        ...a
                    })
                }),
                (0, f.jsx)(k.default, {
                    onClick: a.close
                })
            ]
        });
    };
    const _v = i.default.div.attrs({
            className: 'maxAll flex-center'
        })(p || (p = r``)),
        _w = (0, i.default)(g.motion.div).attrs({
            className: 'medium-shadow scroll-y'
        })(q || (q = r`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${ 0 };
`), m.FontWeights.Bold);
}), b.register('cFfeL', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('kyZNW'),
        h = b('u4s09'),
        i = b('quE27'),
        j = b('aPZ+w');
    let k, l, m, n, o = a => a;
    var _p = a => {
        const [q, r] = f.useState(''), [s, t, u] = (0, i.useBoolean)(!1), v = () => {
            const w = q.trim();
            w.length && a.guess(w);
        };
        (0, g.useDidUpdate)(() => {
            t(), r('');
        }, [a.incorrectCounter]), f.useEffect(() => {
            a.useMaxAttempts && a.attempts >= a.maxAttempts && r('');
        }, [
            a.attempts,
            a.maxAttempts,
            a.useMaxAttempts
        ]);
        const w = f.useMemo(() => {
                if (!a.useMaxAttempts)
                    return null;
                if (a.attempts >= a.maxAttempts)
                    return {
                        message: 'No More Guesses Allowed',
                        color: 'red'
                    };
                const x = a.maxAttempts - a.attempts;
                return {
                    message: `${ x } ${ (0, i.plural)('attempt', x) } remaining`,
                    color: 'yellow'
                };
            }, [
                a.maxAttempts,
                a.attempts,
                a.useMaxAttempts
            ]),
            x = a.useMaxAttempts && a.attempts >= a.maxAttempts;
        return (0, e.jsxs)(_q, {
            children: [
                (0, e.jsx)(_r, {
                    children: 'Enter Password:'
                }),
                w ? (0, e.jsx)(_s, {
                    style: {
                        color: w.color
                    },
                    children: w.message
                }) : null,
                (0, e.jsx)(_t, {
                    className: s ? 'animated shake' : '',
                    placeholder: 'Enter password here...',
                    type: 'text',
                    autoFocus: !0,
                    value: q,
                    onChange: a => {
                        r(a.target.value), u();
                    },
                    maxLength: '64',
                    onKeyDown: a => {
                        'Enter' === a.key && v();
                    },
                    disabled: x,
                    style: x ? {} : {
                        cursor: 'not-allowed'
                    }
                }),
                (0, e.jsx)(j.default, {
                    size: 'small',
                    type: 'success',
                    onClick: v,
                    ariaLabel: 'Submit',
                    children: 'Submit'
                })
            ]
        });
    };
    const _q = h.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(k || (k = o`
  line-height: 1;
`)),
        _r = h.default.div(l || (l = o`
  font-size: 26px;
`)),
        _s = h.default.div(m || (m = o`
  font-size: 14px;
  margin-top: 11px;
`)),
        _t = h.default.input.attrs({
            className: 'maxWidth'
        })(n || (n = o`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`));
}), b.register('kyZNW', function(c, d) {
    a(c.exports, 'useDidUpdate', function() {
        return _f;
    });
    var e = b('O0Kav');

    function _f(g, h) {
        var i = (0, e.useRef)(!1);
        void 0 === h || Array.isArray(h) ? Array.isArray(h) && 0 === h.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : h = [h], (0, e.useEffect)(function() {
            i.current ? g() : i.current = !0;
        }, h);
    }
});