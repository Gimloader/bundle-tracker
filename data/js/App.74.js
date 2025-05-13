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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    var _p = () => {
        const [q, r] = (0, m.useBoolean)(!1), [s, t] = i.useState(null), [u, v] = i.useState(''), {
            id: w
        } = (0, j.useParams)();
        return i.useEffect(() => {
            (0, m.request)({
                url: `/api/games/fetch/${ w }`,
                success: x => {
                    t(x.kit), v(x.creator.name);
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p, q, r, s, t, u = v => v;
    var _v = w => (0, f.jsx)(_w, {
        children: (0, f.jsxs)(_x, {
            children: [
                (0, f.jsx)(o.default, {
                    size: 92,
                    blockModalOpen: !0,
                    image: w.image,
                    style: {
                        cursor: 'default'
                    }
                }),
                (0, f.jsx)(_y, {
                    children: w.title
                }),
                (0, f.jsx)(_z, {
                    children: w.creator
                }),
                (0, f.jsx)(g.default, {}),
                0 === w.numberOfQuestions ? (0, f.jsx)('div', {
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
                            onClick: w.setToPreview,
                            ariaLabel: 'Practice',
                            children: 'Practice'
                        }),
                        (0, f.jsxs)(_A, {
                            children: [
                                (0, f.jsxs)('div', {
                                    children: [
                                        w.numberOfQuestions,
                                        ' ',
                                        (0, n.plural)('question', w.numberOfQuestions)
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l;
    var _m = n => {
        const o = n.size || 'default',
            p = h.useMemo(() => n.customColor ? n.customColor : n.disabled ? '#546e7a' : 'success' === n.type ? '#2e7d32' : 'danger' === n.type ? '#c62828' : '#3f51b5', [
                n.disabled,
                n.type,
                n.customColor
            ]),
            q = h.useMemo(() => (0, g.darken)(0.1, p), [p]),
            r = h.useMemo(() => 'small' === o || 'default' === o ? 14 : 20, [o]),
            s = h.useMemo(() => 'small' === o ? 6 : 'default' === o ? 8 : 12, [o]),
            t = h.useMemo(() => {
                const u = 'small' === o ? '8px' : '12px';
                return n.customHorizontalPadding ? `${ u } ${ n.customHorizontalPadding }px` : 'small' === o ? `${ u } 24px` : 'default' === o ? `${ u } 28px` : `${ u } 42px`;
            }, [
                o,
                n.customHorizontalPadding
            ]),
            u = h.useMemo(() => 'small' === o ? 41 : 49, [o]),
            v = h.useMemo(() => n.customFontWeight ? n.customFontWeight : 'large' === o ? j.FontWeights.Bold : j.FontWeights.Normal, [
                n.customFontWeight,
                o
            ]),
            w = () => {
                n.disabled || n.onClick && n.onClick();
            };
        return (0, f.jsx)(_n, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: u
            }, n.style || {}),
            children: (0, f.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': n.ariaLabel,
                onClick: n.usePointerDownEvent ? void 0 : w,
                onPointerDown: n.usePointerDownEvent ? w : void 0,
                style: {
                    cursor: n.disabled ? 'not-allowed' : 'pointer',
                    width: n.block ? '100%' : 'auto'
                },
                children: [
                    (0, f.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: s
                        }
                    }),
                    (0, f.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: q,
                            borderRadius: s
                        }
                    }),
                    (0, f.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: p,
                            fontSize: r,
                            borderRadius: s,
                            padding: t,
                            fontWeight: v
                        },
                        children: n.children
                    })
                ]
            })
        });
    };
    const _n = i.default.div.attrs({
        className: 'flex'
    })(l || (l = (o => o)`
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        onClick: k.onClick,
        className: k.className,
        style: k.style,
        children: k.children
    });
    const _k = g.default.div(i || (i = (l => l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({
        src: n.image
    }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        },
        _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2],
                k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, {
            latex: j.latex
        })
    });
}), c.register('.....', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = (j, k) => {
        const [l, m] = f.useState(() => {
            var n, o;
            const p = j && 'current' in j ? j.current : j;
            return p ? [
                p.offsetWidth,
                p.offsetHeight
            ] : [
                null !== (n = null == k ? void 0 : k.initialWidth) && void 0 !== n ? n : 0,
                null !== (o = null == k ? void 0 : k.initialHeight) && void 0 !== o ? o : 0
            ];
        });
        return (0, h.default)(() => {
            const n = j && 'current' in j ? j.current : j;
            n && m([
                n.offsetWidth,
                n.offsetHeight
            ]);
        }, [j]), (0, g.default)(j, n => {
            const o = n.target;
            m([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }), l;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((n, o) => {
                var p;
                if (1 === n.length)
                    null === (p = l.get(n[0].target)) || void 0 === p || p(n[0], o);
                else
                    for (let q = 0; q < n.length; q++) {
                        var r;
                        null === (r = l.get(n[q].target)) || void 0 === r || r(n[q], o);
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
                return o.subscribe(r, (s, t) => {
                    q || p.current(s, t);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.useRef(h);
        return f.useEffect(() => {
            i.current = h;
        }), i;
    };
}), c.register('.....', function(d, e) {
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