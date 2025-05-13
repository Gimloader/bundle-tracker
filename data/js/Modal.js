function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....');
    let p, q, r = s => s;
    const s = {
            y: ' 100%',
            opacity: 0
        },
        t = {
            y: '0%',
            opacity: 1
        };
    var _u = v => {
        const w = (0, h.useIsPresent)(),
            [x, y] = (0, l.useBoolean)(!1);
        (0, o.useDidMount)(() => {
            (0, l.loadFont)('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
        });
        return (0, f.jsxs)(_v, {
            onClick: () => {
                w && x && v.close();
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
                    onClick: z => z.stopPropagation(),
                    onAnimationComplete: y,
                    children: (0, f.jsx)(n.default, {
                        ...v
                    })
                }),
                (0, f.jsx)(k.default, {
                    onClick: v.close
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....');
    let k, l, m, n, o = p => p;
    var _p = q => {
        const [r, s] = f.useState(''), [t, u, v] = (0, i.useBoolean)(!1), w = () => {
            const x = r.trim();
            x.length && q.guess(x);
        };
        (0, g.useDidUpdate)(() => {
            u(), s('');
        }, [q.incorrectCounter]), f.useEffect(() => {
            q.useMaxAttempts && q.attempts >= q.maxAttempts && s('');
        }, [
            q.attempts,
            q.maxAttempts,
            q.useMaxAttempts
        ]);
        const x = f.useMemo(() => {
                if (!q.useMaxAttempts)
                    return null;
                if (q.attempts >= q.maxAttempts)
                    return {
                        message: 'No More Guesses Allowed',
                        color: 'red'
                    };
                const y = q.maxAttempts - q.attempts;
                return {
                    message: `${ y } ${ (0, i.plural)('attempt', y) } remaining`,
                    color: 'yellow'
                };
            }, [
                q.maxAttempts,
                q.attempts,
                q.useMaxAttempts
            ]),
            y = q.useMaxAttempts && q.attempts >= q.maxAttempts;
        return (0, e.jsxs)(_q, {
            children: [
                (0, e.jsx)(_r, {
                    children: 'Enter Password:'
                }),
                x ? (0, e.jsx)(_s, {
                    style: {
                        color: x.color
                    },
                    children: x.message
                }) : null,
                (0, e.jsx)(_t, {
                    className: t ? 'animated shake' : '',
                    placeholder: 'Enter password here...',
                    type: 'text',
                    autoFocus: !0,
                    value: r,
                    onChange: z => {
                        s(z.target.value), v();
                    },
                    maxLength: '64',
                    onKeyDown: z => {
                        'Enter' === z.key && w();
                    },
                    disabled: y,
                    style: y ? {} : {
                        cursor: 'not-allowed'
                    }
                }),
                (0, e.jsx)(j.default, {
                    size: 'small',
                    type: 'success',
                    onClick: w,
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'useDidUpdate', function() {
        return _f;
    });
    var e = b('.....');

    function _f(g, h) {
        var i = (0, e.useRef)(!1);
        void 0 === h || Array.isArray(h) ? Array.isArray(h) && 0 === h.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : h = [h], (0, e.useEffect)(function() {
            i.current ? g() : i.current = !0;
        }, h);
    }
});