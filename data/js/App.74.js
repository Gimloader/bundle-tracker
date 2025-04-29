function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('nQgoc', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var g = c('gRbUn'),
        h = c('yruHD'),
        i = c('O0Kav'),
        j = c('zcfNM'),
        k = c('nKuOQ'),
        l = c('KxkP827'),
        m = c('quE27'),
        n = c('fEyuQ'),
        o = c('C7Pfa');
    var _p = () => {
        const [q, r] = (0, m.useBoolean)(!1), [s, t] = i.useState(null), [u, v] = i.useState(''), {
            id: w
        } = (0, j.useParams)();
        return i.useEffect(() => {
            (0, m.request)({
                url: `/api/games/fetch/${ w }`,
                success: q => {
                    t(q.kit), v(q.creator.name);
                },
                error: () => (0, l.NavigateTo)(k.HOMEPAGE)
            });
        }, []), s ? q ? (0, g.jsx)(o.default, {
            questions: s.questions
        }) : (0, g.jsx)(n.default, {
            title: s.title,
            image: s.gif,
            creator: u,
            numberOfQuestions: s.questions.length,
            setToPreview: r
        }) : (0, g.jsx)('div', {
            className: 'maxAll flex-center',
            style: {
                background: '#303f9f'
            },
            children: (0, g.jsx)(h.default, {
                size: 'large'
            })
        });
    };
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('fEyuQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('VNuyu');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('jw1ib'),
        j = c('8KqQ+'),
        k = c('Eh2Wh'),
        l = c('aPZ+w'),
        m = c('F0ESS9'),
        n = c('quE27'),
        o = c('HFnro8');
    let p, q, r, s, t, u = a => a;
    var _v = a => (0, f.jsx)(_w, {
        children: (0, f.jsxs)(_x, {
            children: [
                (0, f.jsx)(o.default, {
                    size: 92,
                    blockModalOpen: !0,
                    image: a.image,
                    style: {
                        cursor: 'default'
                    }
                }),
                (0, f.jsx)(_y, {
                    children: a.title
                }),
                (0, f.jsx)(_z, {
                    children: a.creator
                }),
                (0, f.jsx)(g.default, {}),
                0 === a.numberOfQuestions ? (0, f.jsx)('div', {
                    style: {
                        fontSize: 18
                    },
                    children: 'This kit cannot be practiced as it does not contain any questions.'
                }) : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(l.default, {
                            customFontWeight: k.FontWeights.Bold,
                            type: 'success',
                            size: 'large',
                            onClick: a.setToPreview,
                            ariaLabel: 'Practice',
                            children: 'Practice'
                        }),
                        (0, f.jsxs)(_A, {
                            children: [
                                (0, f.jsxs)('div', {
                                    children: [
                                        a.numberOfQuestions,
                                        ' ',
                                        (0, n.plural)('question', a.numberOfQuestions)
                                    ]
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        margin: '0px 12px'
                                    },
                                    className: 'flex',
                                    children: (0, f.jsx)('i', {
                                        className: 'fas fa-circle',
                                        style: {
                                            fontSize: 10
                                        }
                                    })
                                }),
                                (0, f.jsxs)('div', {
                                    children: [
                                        'Powered by ',
                                        i.COMPANY_NAME
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
    const _w = h.default.div.attrs({
            className: 'flex-center scroll-y maxAll'
        })(p || (p = u`
  background: #303f9f;
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro),
        _x = (0, h.default)(m.default).attrs({
            className: 'flex-center flex-column animated fadeIn'
        })(q || (q = u`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`)),
        _y = h.default.div(r || (r = u`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${ 0 };
  text-align: center;
`), k.FontWeights.UltraBold),
        _z = h.default.div(s || (s = u`
  font-size: 24px;
  margin-top: -4px;
`)),
        _A = h.default.div.attrs({
            className: 'flex vc'
        })(t || (t = u`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`));
}), c.register('aPZ+w', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('SAYZy'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('HOIhZ');
    let l;
    var _m = a => {
        const n = a.size || 'default',
            o = h.useMemo(() => a.customColor ? a.customColor : a.disabled ? '#546e7a' : 'success' === a.type ? '#2e7d32' : 'danger' === a.type ? '#c62828' : '#3f51b5', [
                a.disabled,
                a.type,
                a.customColor
            ]),
            p = h.useMemo(() => (0, g.darken)(0.1, o), [o]),
            q = h.useMemo(() => 'small' === n || 'default' === n ? 14 : 20, [n]),
            r = h.useMemo(() => 'small' === n ? 6 : 'default' === n ? 8 : 12, [n]),
            s = h.useMemo(() => {
                const t = 'small' === n ? '8px' : '12px';
                return a.customHorizontalPadding ? `${ t } ${ a.customHorizontalPadding }px` : 'small' === n ? `${ t } 24px` : 'default' === n ? `${ t } 28px` : `${ t } 42px`;
            }, [
                n,
                a.customHorizontalPadding
            ]),
            t = h.useMemo(() => 'small' === n ? 41 : 49, [n]),
            u = h.useMemo(() => a.customFontWeight ? a.customFontWeight : 'large' === n ? j.FontWeights.Bold : j.FontWeights.Normal, [
                a.customFontWeight,
                n
            ]),
            v = () => {
                a.disabled || a.onClick && a.onClick();
            };
        return (0, f.jsx)(_n, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: t
            }, a.style || {}),
            children: (0, f.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': a.ariaLabel,
                onClick: a.usePointerDownEvent ? void 0 : v,
                onPointerDown: a.usePointerDownEvent ? v : void 0,
                style: {
                    cursor: a.disabled ? 'not-allowed' : 'pointer',
                    width: a.block ? '100%' : 'auto'
                },
                children: [
                    (0, f.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: r
                        }
                    }),
                    (0, f.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: p,
                            borderRadius: r
                        }
                    }),
                    (0, f.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: o,
                            fontSize: q,
                            borderRadius: r,
                            padding: s,
                            fontWeight: u
                        },
                        children: a.children
                    })
                ]
            })
        });
    };
    const _n = i.default.div.attrs({
        className: 'flex'
    })(l || (l = (a => a)`
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
`), k.default.White);
}), c.register('HOIhZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), c.register('F0ESS9', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+');
    let i;
    var _j = a => (0, f.jsx)(_k, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const _k = g.default.div(i || (i = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('HFnro8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('HloXO');
    let l;
    const m = h.default.img.attrs(a => ({
        src: a.image
    }))(l || (l = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = a => {
        const [o, p] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...a,
                    onClick: o => {
                        o.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || p(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: o,
                    onCancel: a => {
                        a.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('HloXO', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = a => {
            const g = _g(a);
            return g ? a.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : a;
        },
        _g = a => {
            if (!_k.some(d => a.includes(d)))
                return null;
            if (a.includes(_i) && !a.includes(`/${ _j }/`))
                return null;
            const h = a.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('JuRCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = g.lazy(() => c('bPSSr0'));
    var _i = a => (0, f.jsx)(g.Suspense, {
        fallback: a.fallback || null,
        children: (0, f.jsx)(h, {
            latex: a.latex
        })
    });
}), c.register('bPSSr0', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('emcKB')),
        import('./' + c('Dq3qN').resolve('5OCdz'))
    ]).then(() => c('vZVkZ'));
}), c.register('bQWYI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('GkLtI'),
        h = c('Nnw7z');
    var _i = (a, d) => {
        const [j, k] = f.useState(() => {
            var l, m;
            const n = a && 'current' in a ? a.current : a;
            return n ? [
                n.offsetWidth,
                n.offsetHeight
            ] : [
                null !== (l = null == d ? void 0 : d.initialWidth) && void 0 !== l ? l : 0,
                null !== (m = null == d ? void 0 : d.initialHeight) && void 0 !== m ? m : 0
            ];
        });
        return (0, h.default)(() => {
            const l = a && 'current' in a ? a.current : a;
            l && k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }, [a]), (0, g.default)(a, a => {
            const l = a.target;
            k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }), j;
    };
}), c.register('GkLtI', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('1PitP'),
        g = c('Nnw7z'),
        h = c('xRoVg'),
        i = c('8Q3ZG');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((m, c) => {
                var n;
                if (1 === m.length)
                    null === (n = l.get(m[0].target)) || void 0 === n || n(m[0], c);
                else
                    for (let o = 0; o < m.length; o++) {
                        var p;
                        null === (p = l.get(m[o].target)) || void 0 === p || p(m[o], c);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function(m, n) {
        const o = k(),
            p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (m, o) => {
                    q || p.current(m, o);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('Nnw7z', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('xRoVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = a => {
        const h = f.useRef(a);
        return f.useEffect(() => {
            h.current = a;
        }), h;
    };
}), c.register('8Q3ZG', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = [],
            i = null,
            j = function() {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function() {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function() {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
});