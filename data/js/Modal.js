function a(a, b, u, v) {
    Object.defineProperty(a, b, {
        get: u,
        set: v,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('OGpWH', function(u, v) {
    var c;
    c = u.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(u.exports, 'default', function() {
        return s;
    });
    var d = b('8kSQZ');
    b('uPP4W');
    var e = b('b9Bct'),
        f = b('USLU1'),
        g = b('h99Nu'),
        h = b('ge6u9'),
        i = b('nbHO+'),
        j = b('PjB0f'),
        k = b('gSUVO'),
        l = b('0PMO4'),
        m = b('laJ/S');
    let n, o, p = a => a;
    const q = {
            y: ' 100%',
            opacity: 0
        },
        r = {
            y: '0%',
            opacity: 1
        };
    var s = a => {
        const t = (0, f.useIsPresent)(),
            [u, v] = (0, j.useBoolean)(!1);
        (0, m.useDidMount)(() => {
            (0, j.loadFont)('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
        });
        return (0, d.jsxs)(t, {
            onClick: () => {
                t && u && a.close();
            },
            children: [
                (0, d.jsx)(u, {
                    initial: q,
                    animate: r,
                    exit: q,
                    transition: {
                        duration: h.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: a => a.stopPropagation(),
                    onAnimationComplete: v,
                    children: (0, d.jsx)(l.default, {
                        ...a
                    })
                }),
                (0, d.jsx)(i.default, {
                    onClick: a.close
                })
            ]
        });
    };
    const t = g.default.div.attrs({
            className: 'maxAll flex-center'
        })(n || (n = p``)),
        u = (0, g.default)(e.motion.div).attrs({
            className: 'medium-shadow scroll-y'
        })(o || (o = p`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${ 0 };
`), k.FontWeights.Bold);
}), b.register('0PMO4', function(p, q) {
    a(p.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('4MvmP'),
        f = b('h99Nu'),
        g = b('PjB0f'),
        h = b('Dog9Y');
    let i, j, k, l, m = a => a;
    var n = a => {
        const [o, p] = d.useState(''), [q, r, s] = (0, g.useBoolean)(!1), t = () => {
            const u = o.trim();
            u.length && a.guess(u);
        };
        (0, e.useDidUpdate)(() => {
            r(), p('');
        }, [a.incorrectCounter]), d.useEffect(() => {
            a.useMaxAttempts && a.attempts >= a.maxAttempts && p('');
        }, [
            a.attempts,
            a.maxAttempts,
            a.useMaxAttempts
        ]);
        const u = d.useMemo(() => {
                if (!a.useMaxAttempts)
                    return null;
                if (a.attempts >= a.maxAttempts)
                    return {
                        message: 'No More Guesses Allowed',
                        color: 'red'
                    };
                const v = a.maxAttempts - a.attempts;
                return {
                    message: `${ v } ${ (0, g.plural)('attempt', v) } remaining`,
                    color: 'yellow'
                };
            }, [
                a.maxAttempts,
                a.attempts,
                a.useMaxAttempts
            ]),
            v = a.useMaxAttempts && a.attempts >= a.maxAttempts;
        return (0, c.jsxs)(o, {
            children: [
                (0, c.jsx)(p, {
                    children: 'Enter Password:'
                }),
                u ? (0, c.jsx)(q, {
                    style: {
                        color: u.color
                    },
                    children: u.message
                }) : null,
                (0, c.jsx)(r, {
                    className: q ? 'animated shake' : '',
                    placeholder: 'Enter password here...',
                    type: 'text',
                    autoFocus: !0,
                    value: o,
                    onChange: a => {
                        p(a.target.value), s();
                    },
                    maxLength: '64',
                    onKeyDown: a => {
                        'Enter' === a.key && t();
                    },
                    disabled: v,
                    style: v ? {} : {
                        cursor: 'not-allowed'
                    }
                }),
                (0, c.jsx)(h.default, {
                    size: 'small',
                    type: 'success',
                    onClick: t,
                    ariaLabel: 'Submit',
                    children: 'Submit'
                })
            ]
        });
    };
    const o = f.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(i || (i = m`
  line-height: 1;
`)),
        p = f.default.div(j || (j = m`
  font-size: 26px;
`)),
        q = f.default.div(k || (k = m`
  font-size: 14px;
  margin-top: 11px;
`)),
        r = f.default.input.attrs({
            className: 'maxWidth'
        })(l || (l = m`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`));
}), b.register('4MvmP', function(e, s) {
    a(e.exports, 'useDidUpdate', function() {
        return d;
    });
    var c = b('uPP4W');

    function d(a, b) {
        var e = (0, c.useRef)(!1);
        void 0 === b || Array.isArray(b) ? Array.isArray(b) && 0 === b.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : b = [b], (0, c.useEffect)(function() {
            e.current ? a() : e.current = !0;
        }, b);
    }
});