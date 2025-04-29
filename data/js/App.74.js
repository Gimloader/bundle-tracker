function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('SSj1l', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _n;
    });
    var e = a('0hzx+'),
        f = a('6CIVV'),
        g = a('LEQ5w'),
        h = a('70AkF'),
        i = a('gs4MT'),
        j = a('jzxyj10'),
        k = a('PMl60'),
        l = a('0AyJ3'),
        m = a('5cFKR');
    var _n = () => {
        const [_o, p] = (0, k.useBoolean)(!1), [q, r] = g.useState(null), [s, t] = g.useState(''), {
            id: u
        } = (0, h.useParams)();
        return g.useEffect(() => {
            (0, k.request)({
                url: `/api/games/fetch/${ u }`,
                success: _o => {
                    r(_o.kit), t(_o.creator.name);
                },
                error: () => (0, j.NavigateTo)(i.HOMEPAGE)
            });
        }, []), q ? _o ? (0, e.jsx)(m.default, {
            questions: q.questions
        }) : (0, e.jsx)(l.default, {
            title: q.title,
            image: q.gif,
            creator: s,
            numberOfQuestions: q.questions.length,
            setToPreview: p
        }) : (0, e.jsx)('div', {
            className: 'maxAll flex-center',
            style: {
                background: '#303f9f'
            },
            children: (0, e.jsx)(f.default, {
                size: 'large'
            })
        });
    };
}), a.register('jzxyj10', function(b, c) {
    _b(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _b => {
        d.history.push(_b);
    };
}), a.register('0AyJ3', function(b, c) {
    _b(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('fmVdR');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('hHkFq'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('led8j'),
        k = a('7s5R80'),
        l = a('PMl60'),
        m = a('DKaq/');
    let n, o, p, q, r, s = _b => _b;
    var _t = _b => (0, d.jsx)(_u, {
        children: (0, d.jsxs)(_v, {
            children: [
                (0, d.jsx)(m.default, {
                    size: 92,
                    blockModalOpen: !0,
                    image: _b.image,
                    style: {
                        cursor: 'default'
                    }
                }),
                (0, d.jsx)(_w, {
                    children: _b.title
                }),
                (0, d.jsx)(_x, {
                    children: _b.creator
                }),
                (0, d.jsx)(e.default, {}),
                0 === _b.numberOfQuestions ? (0, d.jsx)('div', {
                    style: {
                        fontSize: 18
                    },
                    children: 'This kit cannot be practiced as it does not contain any questions.'
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(j.default, {
                            customFontWeight: i.FontWeights.Bold,
                            type: 'success',
                            size: 'large',
                            onClick: _b.setToPreview,
                            ariaLabel: 'Practice',
                            children: 'Practice'
                        }),
                        (0, d.jsxs)(_y, {
                            children: [
                                (0, d.jsxs)('div', {
                                    children: [
                                        _b.numberOfQuestions,
                                        ' ',
                                        (0, l.plural)('question', _b.numberOfQuestions)
                                    ]
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        margin: '0px 12px'
                                    },
                                    className: 'flex',
                                    children: (0, d.jsx)('i', {
                                        className: 'fas fa-circle',
                                        style: {
                                            fontSize: 10
                                        }
                                    })
                                }),
                                (0, d.jsxs)('div', {
                                    children: [
                                        'Powered by ',
                                        g.COMPANY_NAME
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
    const _u = f.default.div.attrs({
            className: 'flex-center scroll-y maxAll'
        })(n || (n = s`
  background: #303f9f;
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro),
        _v = (0, f.default)(k.default).attrs({
            className: 'flex-center flex-column animated fadeIn'
        })(o || (o = s`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`)),
        _w = f.default.div(p || (p = s`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${ 0 };
  text-align: center;
`), i.FontWeights.UltraBold),
        _x = f.default.div(q || (q = s`
  font-size: 24px;
  margin-top: -4px;
`)),
        _y = f.default.div.attrs({
            className: 'flex vc'
        })(r || (r = s`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`));
}), a.register('led8j', function(b, c) {
    _b(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('GT7Vh'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('vShe/');
    let j;
    var _k = _b => {
        const l = _b.size || 'default',
            m = f.useMemo(() => _b.customColor ? _b.customColor : _b.disabled ? '#546e7a' : 'success' === _b.type ? '#2e7d32' : 'danger' === _b.type ? '#c62828' : '#3f51b5', [
                _b.disabled,
                _b.type,
                _b.customColor
            ]),
            n = f.useMemo(() => (0, e.darken)(0.1, m), [m]),
            o = f.useMemo(() => 'small' === l || 'default' === l ? 14 : 20, [l]),
            p = f.useMemo(() => 'small' === l ? 6 : 'default' === l ? 8 : 12, [l]),
            q = f.useMemo(() => {
                const r = 'small' === l ? '8px' : '12px';
                return _b.customHorizontalPadding ? `${ r } ${ _b.customHorizontalPadding }px` : 'small' === l ? `${ r } 24px` : 'default' === l ? `${ r } 28px` : `${ r } 42px`;
            }, [
                l,
                _b.customHorizontalPadding
            ]),
            r = f.useMemo(() => 'small' === l ? 41 : 49, [l]),
            s = f.useMemo(() => _b.customFontWeight ? _b.customFontWeight : 'large' === l ? h.FontWeights.Bold : h.FontWeights.Normal, [
                _b.customFontWeight,
                l
            ]),
            t = () => {
                _b.disabled || _b.onClick && _b.onClick();
            };
        return (0, d.jsx)(_l, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: r
            }, _b.style || {}),
            children: (0, d.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': _b.ariaLabel,
                onClick: _b.usePointerDownEvent ? void 0 : t,
                onPointerDown: _b.usePointerDownEvent ? t : void 0,
                style: {
                    cursor: _b.disabled ? 'not-allowed' : 'pointer',
                    width: _b.block ? '100%' : 'auto'
                },
                children: [
                    (0, d.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: p
                        }
                    }),
                    (0, d.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: n,
                            borderRadius: p
                        }
                    }),
                    (0, d.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: m,
                            fontSize: o,
                            borderRadius: p,
                            padding: q,
                            fontWeight: s
                        },
                        children: _b.children
                    })
                ]
            })
        });
    };
    const _l = g.default.div.attrs({
        className: 'flex'
    })(j || (j = (_b => _b)`
  align-items: flex-end;

  .btn-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    transition: filter 250ms;
  }
  .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .btn-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.25s;
  }
  .btn-front {
    display: block;
    position: relative;
    color: ${ 0 };
    will-change: transform;
    transform: translateY(-4px);
    transition: background 0.25s, transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    user-select: none;
  }
  .btn-pushable:hover {
    filter: brightness(110%);
  }
  .btn-pushable:hover .btn-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .btn-pushable:hover .btn-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`), i.default.White);
}), a.register('vShe/', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), a.register('7s5R80', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _b => (0, d.jsx)(_i, {
        onClick: _b.onClick,
        className: _b.className,
        style: _b.style,
        children: _b.children
    });
    const _i = e.default.div(g || (g = (_b => _b)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('DKaq/', function(b, c) {
    _b(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_b => ({
        src: _b.image
    }))(j || (j = (_b => _b)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _b => _b.size, _b => _b.size, _b => _b.customRightMargin ? _b.customRightMargin : 0, _b => _b.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _b => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._b,
                    onClick: m => {
                        m.stopPropagation(), _b.onClick && _b.onClick(), _b.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _b => {
                        _b.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_b.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _b(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _b => {
            const e = _e(_b);
            return e ? _b.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _b;
        },
        _e = _b => {
            if (!_i.some(b => _b.includes(b)))
                return null;
            if (_b.includes(_g) && !_b.includes(`/${ _h }/`))
                return null;
            const f = _b.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('JtnSG', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('am6fB'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('am6fB', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('emcKB')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
});