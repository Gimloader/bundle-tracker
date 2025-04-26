function a(a, b, c, r) {
    Object.defineProperty(a, b, {
        get: c,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('LSIPD', function(b, r) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return n;
    });
    var e = c('8kSQZ'),
        f = c('iHElh'),
        g = c('uPP4W'),
        h = c('0R8EW'),
        i = c('q721a'),
        j = c('k0s2g17'),
        k = c('PjB0f'),
        l = c('oRaWm'),
        m = c('PLvTJ');
    var n = () => {
        const [o, p] = (0, k.useBoolean)(!1), [q, r] = g.useState(null), [s, t] = g.useState(''), {
            id: u
        } = (0, h.useParams)();
        return g.useEffect(() => {
            (0, k.request)({
                url: `/api/games/fetch/${ u }`,
                success: o => {
                    r(o.kit), t(o.creator.name);
                },
                error: () => (0, j.NavigateTo)(i.HOMEPAGE)
            });
        }, []), q ? o ? (0, e.jsx)(m.default, {
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
}), c.register('k0s2g17', function(b, n) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('oRaWm', function(b, n) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('0wLl2'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('Dog9Y'),
        k = c('FfkIK1'),
        l = c('PjB0f'),
        m = c('qLhB38');
    let n, o, p, q, r, s = a => a;
    var t = a => (0, d.jsx)(u, {
        children: (0, d.jsxs)(v, {
            children: [
                (0, d.jsx)(m.default, {
                    size: 92,
                    blockModalOpen: !0,
                    image: a.image,
                    style: {
                        cursor: 'default'
                    }
                }),
                (0, d.jsx)(w, {
                    children: a.title
                }),
                (0, d.jsx)(x, {
                    children: a.creator
                }),
                (0, d.jsx)(e.default, {}),
                0 === a.numberOfQuestions ? (0, d.jsx)('div', {
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
                            onClick: a.setToPreview,
                            ariaLabel: 'Practice',
                            children: 'Practice'
                        }),
                        (0, d.jsxs)(y, {
                            children: [
                                (0, d.jsxs)('div', {
                                    children: [
                                        a.numberOfQuestions,
                                        ' ',
                                        (0, l.plural)('question', a.numberOfQuestions)
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
    const u = f.default.div.attrs({
            className: 'flex-center scroll-y maxAll'
        })(n || (n = s`
  background: #303f9f;
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro),
        v = (0, f.default)(k.default).attrs({
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
        w = f.default.div(p || (p = s`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${ 0 };
  text-align: center;
`), i.FontWeights.UltraBold),
        x = f.default.div(q || (q = s`
  font-size: 24px;
  margin-top: -4px;
`)),
        y = f.default.div.attrs({
            className: 'flex vc'
        })(r || (r = s`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`));
}), c.register('Dog9Y', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('CDq40'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('S/jX4');
    let j;
    var k = a => {
        const l = a.size || 'default',
            m = f.useMemo(() => a.customColor ? a.customColor : a.disabled ? '#546e7a' : 'success' === a.type ? '#2e7d32' : 'danger' === a.type ? '#c62828' : '#3f51b5', [
                a.disabled,
                a.type,
                a.customColor
            ]),
            n = f.useMemo(() => (0, e.darken)(0.1, m), [m]),
            o = f.useMemo(() => 'small' === l || 'default' === l ? 14 : 20, [l]),
            p = f.useMemo(() => 'small' === l ? 6 : 'default' === l ? 8 : 12, [l]),
            q = f.useMemo(() => {
                const r = 'small' === l ? '8px' : '12px';
                return a.customHorizontalPadding ? `${ r } ${ a.customHorizontalPadding }px` : 'small' === l ? `${ r } 24px` : 'default' === l ? `${ r } 28px` : `${ r } 42px`;
            }, [
                l,
                a.customHorizontalPadding
            ]),
            r = f.useMemo(() => 'small' === l ? 41 : 49, [l]),
            s = f.useMemo(() => a.customFontWeight ? a.customFontWeight : 'large' === l ? h.FontWeights.Bold : h.FontWeights.Normal, [
                a.customFontWeight,
                l
            ]),
            t = () => {
                a.disabled || a.onClick && a.onClick();
            };
        return (0, d.jsx)(l, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: r
            }, a.style || {}),
            children: (0, d.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': a.ariaLabel,
                onClick: a.usePointerDownEvent ? void 0 : t,
                onPointerDown: a.usePointerDownEvent ? t : void 0,
                style: {
                    cursor: a.disabled ? 'not-allowed' : 'pointer',
                    width: a.block ? '100%' : 'auto'
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
                        children: a.children
                    })
                ]
            })
        });
    };
    const l = g.default.div.attrs({
        className: 'flex'
    })(j || (j = (a => a)`
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
}), c.register('S/jX4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), c.register('FfkIK1', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI');
    let g;
    var h = a => (0, d.jsx)(i, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const i = e.default.div(g || (g = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('bTRJM', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = e.lazy(() => c('FhxEZ0'));
    var g = a => (0, d.jsx)(e.Suspense, {
        fallback: a.fallback || null,
        children: (0, d.jsx)(f, {
            latex: a.latex
        })
    });
}), c.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('8pe9D')),
        import('./' + c('tIOy4').resolve('5OCdz'))
    ]).then(() => c('feyVh'));
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = arguments.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = arguments[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
});