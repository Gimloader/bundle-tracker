function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('QiYJz', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _f(b.exports, 'default', function() {
        return _t;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('TwXYL'),
        g = a('FytBL'),
        h = a('Axq+p'),
        i = a('i0EEz'),
        j = a('Ct4sg'),
        k = a('PMl60'),
        l = a('b5kvC'),
        m = a('9W7o3'),
        n = a('+i8ep');
    let o, p, q = _f => _f;
    const r = {
            y: ' 100%',
            opacity: 0
        },
        s = {
            y: '0%',
            opacity: 1
        };
    var _t = _f => {
        const u = (0, g.useIsPresent)(),
            [v, w] = (0, k.useBoolean)(!1);
        (0, n.useDidMount)(() => {
            (0, k.loadFont)('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
        });
        return (0, e.jsxs)(_u, {
            onClick: () => {
                u && v && _f.close();
            },
            children: [
                (0, e.jsx)(_v, {
                    initial: r,
                    animate: s,
                    exit: r,
                    transition: {
                        duration: i.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: _f => _f.stopPropagation(),
                    onAnimationComplete: w,
                    children: (0, e.jsx)(m.default, {
                        ..._f
                    })
                }),
                (0, e.jsx)(j.default, {
                    onClick: _f.close
                })
            ]
        });
    };
    const _u = h.default.div.attrs({
            className: 'maxAll flex-center'
        })(o || (o = q``)),
        _v = (0, h.default)(f.motion.div).attrs({
            className: 'medium-shadow scroll-y'
        })(p || (p = q`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${ 0 };
`), l.FontWeights.Bold);
}), a.register('9W7o3', function(b, c) {
    _f(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('IYtCH'),
        g = a('Axq+p'),
        h = a('PMl60'),
        i = a('led8j');
    let j, k, l, m, n = _f => _f;
    var _o = _f => {
        const [p, q] = e.useState(''), [r, s, t] = (0, h.useBoolean)(!1), u = () => {
            const v = p.trim();
            v.length && _f.guess(v);
        };
        (0, f.useDidUpdate)(() => {
            s(), q('');
        }, [_f.incorrectCounter]), e.useEffect(() => {
            _f.useMaxAttempts && _f.attempts >= _f.maxAttempts && q('');
        }, [
            _f.attempts,
            _f.maxAttempts,
            _f.useMaxAttempts
        ]);
        const v = e.useMemo(() => {
                if (!_f.useMaxAttempts)
                    return null;
                if (_f.attempts >= _f.maxAttempts)
                    return {
                        message: 'No More Guesses Allowed',
                        color: 'red'
                    };
                const w = _f.maxAttempts - _f.attempts;
                return {
                    message: `${ w } ${ (0, h.plural)('attempt', w) } remaining`,
                    color: 'yellow'
                };
            }, [
                _f.maxAttempts,
                _f.attempts,
                _f.useMaxAttempts
            ]),
            w = _f.useMaxAttempts && _f.attempts >= _f.maxAttempts;
        return (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(_q, {
                    children: 'Enter Password:'
                }),
                v ? (0, d.jsx)(_r, {
                    style: {
                        color: v.color
                    },
                    children: v.message
                }) : null,
                (0, d.jsx)(_s, {
                    className: r ? 'animated shake' : '',
                    placeholder: 'Enter password here...',
                    type: 'text',
                    autoFocus: !0,
                    value: p,
                    onChange: _f => {
                        q(_f.target.value), t();
                    },
                    maxLength: '64',
                    onKeyDown: _f => {
                        'Enter' === _f.key && u();
                    },
                    disabled: w,
                    style: w ? {} : {
                        cursor: 'not-allowed'
                    }
                }),
                (0, d.jsx)(i.default, {
                    size: 'small',
                    type: 'success',
                    onClick: u,
                    ariaLabel: 'Submit',
                    children: 'Submit'
                })
            ]
        });
    };
    const _p = g.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(j || (j = n`
  line-height: 1;
`)),
        _q = g.default.div(k || (k = n`
  font-size: 26px;
`)),
        _r = g.default.div(l || (l = n`
  font-size: 14px;
  margin-top: 11px;
`)),
        _s = g.default.input.attrs({
            className: 'maxWidth'
        })(m || (m = n`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`));
}), a.register('IYtCH', function(b, c) {
    _f(b.exports, 'useDidUpdate', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g) {
        var h = (0, d.useRef)(!1);
        void 0 === g || Array.isArray(g) ? Array.isArray(g) && 0 === g.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : g = [g], (0, d.useEffect)(function() {
            h.current ? _f() : h.current = !0;
        }, g);
    }
});