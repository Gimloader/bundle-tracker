function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('TdwCd', function(b, d) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return w;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('Yn39D'),
        i = c('1//3g'),
        j = c('UnfL724'),
        k = c('lmfrI'),
        l = c('laJ/S'),
        m = c('PjB0f'),
        n = c('q721a'),
        o = c('EKzax2'),
        p = c('iMnBi'),
        q = c('0R8EW'),
        r = c('KzqIz'),
        s = c('rRu0c');
    let t;
    const u = f.lazy(() => c('DoTGA')),
        v = f.lazy(() => c('4KFX5'));
    var w = () => {
        (0, l.useDidMount)(() => {
            (0, m.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        const {
            pathname: x
        } = (0, r.useLocation)(), y = f.useMemo(() => (0, q.matchPath)({
            path: n.CREATIVE_MAP
        }, x) ? (0, e.jsx)(u, {}) : (0, q.matchPath)({
            path: n.CREATIVE_DISCOVERY
        }, x) ? (0, e.jsx)(v, {}) : (0, e.jsx)(s.default, {}), [x]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(m.Title, {
                    title: 'Gimkit Creative',
                    override: !0
                }),
                (0, e.jsxs)(h.default, {
                    children: [
                        (0, e.jsx)(i.default, {
                            theme: j.SiteHeaderTheme.dark,
                            includeSpacer: !0,
                            hideBorder: !0,
                            containerDivStyle: {
                                backdropFilter: 'blur(4px)'
                            },
                            children: (0, e.jsx)(o.default, {
                                theme: j.SiteHeaderTheme.dark,
                                bottomContent: (0, e.jsx)('div', {
                                    style: {
                                        height: 9
                                    }
                                }),
                                options: [{
                                        id: 'creative-home',
                                        label: 'Build',
                                        path: n.CREATIVE_BASE,
                                        icon: (0, e.jsx)(p.default, {
                                            name: 'fas fa-hammer'
                                        })
                                    },
                                    {
                                        id: 'creative-explore',
                                        label: 'Discovery',
                                        path: n.CREATIVE_DISCOVERY,
                                        icon: (0, e.jsx)(p.default, {
                                            name: 'fas fa-gamepad-alt'
                                        })
                                    }
                                ]
                            })
                        }),
                        (0, e.jsx)(x, {
                            children: (0, e.jsx)(f.Suspense, {
                                fallback: null,
                                children: y
                            })
                        })
                    ]
                })
            ]
        });
    };
    const x = g.default.div(t || (t = (a => a)`
  color: ${ 0 };
`), k.default.White);
}), c.register('Yn39D', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu');
    let f, g, h = a => a;
    var i = a => (0, d.jsxs)(j, {
        children: [
            (0, d.jsx)(k, {
                children: a.children
            }),
            (0, d.jsx)('div', {
                className: 'area',
                children: (0, d.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {})
                    ]
                })
            })
        ]
    });
    const j = e.default.div(f || (f = h`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #1b065b;
    background: linear-gradient(304deg, #2a5b93, #1b065b);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`)),
        k = e.default.div(g || (g = h`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`));
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('EKzax2', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('UnfL724'),
        h = c('dN+BG24'),
        i = c('HKMol0');
    let j, k, l = a => a;
    var m = a => {
        const n = e.useMemo(() => {
                var o;
                return null !== (o = a.theme) && void 0 !== o ? o : g.SiteHeaderTheme.light;
            }, [a.theme]),
            o = e.useMemo(() => {
                var p;
                return null !== (p = a.alpha) && void 0 !== p ? p : h.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            p = e.useMemo(() => {
                const q = o === h.SiteHeaderAlpha.none ? 1 : n === g.SiteHeaderTheme.light ? 0.85 : 0.45;
                return n === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ q })` : `rgba(16, 16, 16, ${ q })`;
            }, [
                n,
                o
            ]),
            q = e.useMemo(() => n === g.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [n]);
        return (0, d.jsxs)(n, {
            background: p,
            borderColor: q,
            children: [
                (0, d.jsxs)(o, {
                    children: [
                        (0, d.jsx)(i.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: n
                        }),
                        (0, d.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
            ]
        });
    };
    const n = f.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), a => a.background, a => a.borderColor),
        o = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = l``));
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('HKMol0', function(b, n) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('5nJMd26'),
        f = c('pSEDe2'),
        g = c('h99Nu');
    let h;
    var i = a => (0, d.jsx)(j, {
        children: (0, d.jsx)(e.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(b => (0, d.jsx)(f.default, {
                option: b,
                selected: a.selectedOption === b.id,
                theme: a.theme
            }, `option-${ b.id }`))
        })
    });
    const j = g.default.div.attrs({
        className: 'scroll-x'
    })(h || (h = (a => a)`
  flex: 1;
`));
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('pSEDe2', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('UnfL724'),
        g = c('h99Nu'),
        h = c('cdiGP23'),
        i = c('0R8EW'),
        j = c('KzqIz'),
        k = c('iYEuk12');
    let l;
    var m = a => {
        const {
            theme: n,
            option: o
        } = p, {
            pathname: q
        } = (0, j.useLocation)(), {
            label: r,
            icon: s,
            path: t,
            otherMatchingPaths: u
        } = v, w = (() => {
            if (t) {
                if ((0, i.matchPath)({
                        path: t
                    }, q))
                    return !0;
                if ((null == u ? void 0 : u.length) && u.some(p => (0, i.matchPath)({
                        path: p
                    }, q)))
                    return !0;
            }
            return !1;
        })(), x = e.useMemo(() => !!w || p.selected, [
            w,
            p.selected
        ]), y = e.useMemo(() => x ? '#1677ff' : 'transparent', [
            n,
            x
        ]), z = e.useMemo(() => x ? h.default.White : n === f.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : h.default.White, [
            n,
            x
        ]), A = e.useMemo(() => x ? y : n === f.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            n,
            x,
            y
        ]);
        return (0, d.jsx)(k.default, {
            to: t,
            target: p.option.target,
            onClick: v.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(n, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    s ? (0, d.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: s
                    }) : null,
                    r
                ]
            })
        });
    };
    const n = g.default.div.attrs({
        className: 'flex-center'
    })(l || (l = (a => a)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${ 0 };
  white-space: nowrap;
  color: ${ 0 };
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${ 0 };
  }
`), a => a.background, a => a.color, a => a.hoverBackground);
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('iYEuk12', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('iMnBi', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('rRu0c', function(b, d) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('BJU9C'),
        g = c('YimJ0'),
        h = c('5nJMd26'),
        i = c('heX9A'),
        j = c('mZ5QQ'),
        k = c('YD08C'),
        l = c('/naIW'),
        m = c('zKQKU'),
        n = c('5UzpR'),
        o = c('fgVTE0'),
        p = c('lmfrI');
    let q;
    var r = () => {
        const {
            data: s,
            isLoading: t,
            error: u
        } = (0, n.default)();
        return u ? (0, d.jsx)('div', {
            className: 'flex-center maxWidth',
            style: {
                marginTop: 50
            },
            children: (0, d.jsx)('div', {
                className: 'light-shadow',
                style: {
                    background: 'rgba(255,255,255,0.1)',
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: '90%'
                },
                children: 'There was an error loading Gimkit Creative. Please refresh and try again.'
            })
        }) : t ? (0, d.jsx)(g.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, d.jsx)(o.default, {
                style: {
                    color: p.default.White
                }
            })
        }) : (0, d.jsxs)(s, {
            children: [
                (0, d.jsx)(f.default, {}),
                (0, d.jsxs)(h.default, {
                    className: 'maxWidth',
                    direction: 'vertical',
                    size: 25,
                    style: {
                        marginTop: 30,
                        width: j.CreativeContentWidth.width,
                        maxWidth: j.CreativeContentWidth.maxWidth
                    },
                    children: [
                        s.completedTutorial ? null : (0, d.jsx)(i.default, {
                            children: (0, d.jsx)(k.default, {})
                        }),
                        (0, d.jsx)(i.default, {
                            children: (0, d.jsx)(l.default, {
                                mapLimit: s.mapLimit
                            })
                        }),
                        (0, d.jsx)(i.default, {
                            children: (0, d.jsx)(m.default, {})
                        })
                    ]
                })
            ]
        });
    };
    const s = (0, e.default)(g.CenteredColumn).attrs({
        className: 'maxWidth'
    })(q || (q = (a => a)`
  padding: 35px 0px;
`));
}), c.register('BJU9C', function(b, d) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('mZ5QQ'),
        g = c('YimJ0'),
        h = c('gSUVO'),
        i = c('nHOR/');
    let j, k, l, m, n, o = a => a;
    var p = () => (0, d.jsxs)(q, {
        children: [
            (0, d.jsxs)(r, {
                children: [
                    (0, d.jsx)(s, {
                        src: '/client/img/svgLogoWhite.svg'
                    }),
                    (0, d.jsx)(t, {
                        children: 'Creative'
                    })
                ]
            }),
            (0, d.jsx)(u, {
                children: (0, d.jsx)(i.default, {
                    children: 'Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!'
                })
            })
        ]
    });
    const q = (0, e.default)(g.CenteredColumn)(j || (j = o`
  width: ${ 0 };
  max-width: ${ 0 };
`), f.CreativeContentWidth.width, f.CreativeContentWidth.maxWidth),
        r = (0, e.default)(g.CenteredColumn)(k || (k = o``)),
        s = e.default.img(l || (l = o`
  height: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.9) 0px 1px 2px);
`)),
        t = e.default.div(m || (m = o`
  text-shadow: rgba(0, 0, 0, 0.6) 0px 3px 15px;
  font-size: 72px;
  font-family: ${ 0 };
  text-transform: uppercase;
  line-height: 1;
  margin-top: 10px;
`), h.Fonts.FugazOne),
        u = e.default.div(n || (n = o`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
`));
}), c.register('mZ5QQ', function(b, c) {
    a(b.exports, 'CreativeContentWidth', function() {
        return d;
    });
    const d = {
        width: '90%',
        maxWidth: '800px'
    };
}), c.register('YimJ0', function(b, i) {
    a(b.exports, 'Centered', function() {
        return j;
    }), a(b.exports, 'VerticallyCentered', function() {
        return k;
    }), a(b.exports, 'CenteredColumn', function() {
        return l;
    }), a(b.exports, 'VerticalCentered', function() {
        return m;
    });
    var d = c('h99Nu');
    let e, f, g, h, i = a => a;
    const j = d.default.div.attrs({
            className: 'flex-center'
        })(e || (e = i``)),
        k = d.default.div.attrs({
            className: 'flex vc'
        })(f || (f = i``)),
        l = (0, d.default)(j).attrs({
            className: 'flex-column'
        })(g || (g = i``)),
        m = d.default.div.attrs({
            className: 'flex vc'
        })(h || (h = i``));
}), c.register('nHOR/', function(i, j) {
    a(i.exports, 'Provider', function() {
        return m;
    }), a(i.exports, 'default', function() {
        return o;
    });
    var d = c('uPP4W'),
        e = '__wrap_b',
        f = '__wrap_o',
        g = 'undefined' == typeof window ? b(d).useEffect : b(d).useLayoutEffect,
        h = (a, b, c) => {
            let i = (c = c || document.querySelector(`[data-br="${ a }"]`)).parentElement,
                j = a => c.style.maxWidth = a + 'px';
            c.style.maxWidth = '';
            let k, l = i.clientWidth,
                m = i.clientHeight,
                n = l / 2 - 0.25,
                o = l + 0.5;
            if (l) {
                for (; n + 1 < o;)
                    k = Math.round((n + o) / 2), j(k), i.clientHeight === m ? o = k : n = k;
                j(o * b + l * (1 - b));
            }
            c.__wrap_o || (c.__wrap_o = new ResizeObserver(() => {
                self.__wrap_b(0, +c.dataset.brr, c);
            })).observe(i);
        },
        i = h.toString(),
        j = (a, k = '') => b(d).createElement('script', {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: (a ? '' : `self.${ e }=${ i };`) + k
            }
        }),
        l = b(d).createContext(!1),
        m = ({
            children: n
        }) => b(d).createElement(l.Provider, {
            value: !0
        }, j(!1), n),
        o = ({
            as: p = 'span',
            ratio: q = 1,
            children: r,
            ...s
        }) => {
            let t = b(d).useId(),
                u = b(d).useRef(),
                v = b(d).useContext(l);
            return g(() => {
                u.current && (self[e] = h)(0, q, u.current);
            }, [
                r,
                q
            ]), g(() => () => {
                if (!u.current)
                    return;
                let w = u.current[f];
                !w || (w.disconnect(), delete u.current[f]);
            }, []), b(d).createElement(b(d).Fragment, null, b(d).createElement(p, {
                ...s,
                'data-br': t,
                'data-brr': q,
                ref: u,
                style: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    textDecoration: 'inherit'
                },
                suppressHydrationWarning: !0
            }, r), j(v, `self.${ e }("${ t }",${ q })`));
        };
}), c.register('heX9A', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu');
    let f;
    var g = a => (0, d.jsx)(h, {
        className: a.className,
        children: a.children
    });
    const h = e.default.div.attrs({
        className: 'maxWidth light-shadow'
    })(f || (f = (a => a)`
  background: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 12px;
  backdrop-filter: blur(3px);
`));
}), c.register('YD08C', function(b, n) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('Dog9Y'),
        g = c('gSUVO'),
        h = c('q721a'),
        i = c('nHOR/'),
        j = c('JJQ0+');
    let k, l, m, n, o, p, q = a => a;
    var r = () => (0, d.jsxs)(s, {
        children: [
            (0, d.jsx)(t, {
                children: (0, d.jsx)(u, {})
            }),
            (0, d.jsxs)(v, {
                children: [
                    (0, d.jsx)(w, {
                        children: (0, d.jsx)(i.default, {
                            children: 'Complete the Gimkit Creative tutorial and receive the Blueprint Gim for free!'
                        })
                    }),
                    (0, d.jsx)(x, {
                        children: 'The tutorial takes about 10 minutes to complete.'
                    }),
                    (0, d.jsx)(f.default, {
                        size: 'small',
                        customFontWeight: g.FontWeights.Bold,
                        type: 'success',
                        onClick: () => window.location.href = h.CREATIVE_TUTORIAL,
                        ariaLabel: 'Start Tutorial',
                        children: 'Start Tutorial'
                    })
                ]
            })
        ]
    });
    const s = e.default.div.attrs({
            className: 'maxWidth flex-center'
        })(k || (k = q``)),
        t = e.default.div(l || (l = q``)),
        u = e.default.img.attrs({
            src: (0, j.default)('characters/spine/preview/construction.png')
        })(m || (m = q`
  height: 155px;
  transform: rotate(353deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        v = e.default.div(n || (n = q`
  margin-left: 20px;
`)),
        w = e.default.div(o || (o = q`
  font-weight: ${ 0 };
  font-size: 18px;
  line-height: 1.3;
`), g.FontWeights.Bold),
        x = e.default.div(p || (p = q`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-style: italic;
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
}), c.register('JJQ0+', function(b, c) {
    let d;
    a(b.exports, 'default', function() {
        return e;
    });
    var e = a => {
        const f = (() => {
            var g;
            if (d)
                return d;
            const h = null === (g = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === g ? void 0 : g.getAttribute('content');
            return void 0 !== h && '$CDN_MAP_ASSETS_URL' !== h ? (d = h, d) : '';
        })();
        return a.startsWith('/assets/map') ? `${ f }${ a }` : `${ f }/assets/map/${ a }`;
    };
}), c.register('/naIW', function(b, x) {
    a(b.exports, 'Title', function() {
        return y;
    }), a(b.exports, 'Description', function() {
        return z;
    }), a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('QiEwJ'),
        g = c('PjB0f'),
        h = c('Dog9Y'),
        i = c('gSUVO'),
        j = c('5nJMd26'),
        k = c('Aui5a'),
        l = c('rZ5J1'),
        m = c('/6tvL');
    let n, o, p, q, r, s, t = a => a;
    var u = a => {
        const {
            data: v,
            isLoading: w,
            error: x
        } = (0, f.default)(), [y, z, A] = (0, g.useBoolean)(!1);
        if (w || x)
            return null;
        const B = v.length < a.mapLimit,
            C = v.slice(0, a.mapLimit),
            D = v.slice(a.mapLimit);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(v, {
                    children: [
                        (0, d.jsxs)(w, {
                            children: [
                                (0, d.jsxs)(x, {
                                    children: [
                                        (0, d.jsx)(y, {
                                            children: 'My Maps'
                                        }),
                                        (0, d.jsxs)(z, {
                                            children: [
                                                v.length,
                                                '/',
                                                a.mapLimit,
                                                ' slots used'
                                            ]
                                        }),
                                        v.length >= 2 ? (0, d.jsx)(m.default, {
                                            marginTop: 8,
                                            text: 'Store up to 25 maps'
                                        }) : null
                                    ]
                                }),
                                B ? (0, d.jsx)(h.default, {
                                    size: 'small',
                                    customFontWeight: i.FontWeights.Bold,
                                    onClick: z,
                                    ariaLabel: 'Create New Map',
                                    type: 'success',
                                    children: 'Create New Map'
                                }) : null
                            ]
                        }),
                        v.length ? (0, d.jsxs)(j.default, {
                            direction: 'vertical',
                            size: 14,
                            className: 'maxWidth',
                            style: {
                                marginTop: 20
                            },
                            children: [
                                C.map(a => (0, d.jsx)(k.default, {
                                    id: a._id,
                                    name: a.name,
                                    disabled: !1
                                }, a._id)),
                                D.length ? (0, d.jsxs)(j.default, {
                                    direction: 'vertical',
                                    size: 14,
                                    className: 'maxWidth medium-shadow',
                                    style: {
                                        background: 'rgba(255,56,56,0.3)',
                                        padding: 30,
                                        borderRadius: 10
                                    },
                                    children: [
                                        (0, d.jsx)('div', {
                                            style: {
                                                fontSize: 14,
                                                fontStyle: 'italic',
                                                color: 'yellow',
                                                opacity: 0.9,
                                                marginBottom: 10,
                                                textAlign: 'center'
                                            },
                                            children: 'The following maps cannot be accessed until your map limit increases or you delete maps above to make space'
                                        }),
                                        D.map((a, v) => (0, d.jsx)(k.default, {
                                            id: a._id,
                                            name: a.name,
                                            disabled: !0
                                        }, a._id))
                                    ]
                                }) : null,
                                v.length ? (0, d.jsx)('div', {
                                    style: {
                                        fontSize: 14,
                                        fontStyle: 'italic',
                                        color: 'rgba(255,255,255,0.8)'
                                    },
                                    children: 'In Gimkit Creative, you can collaborate and play your maps with up to 60 players!'
                                }) : null
                            ]
                        }) : (0, d.jsxs)(A, {
                            children: [
                                'You haven\'t built any maps yet. Click the',
                                ' ',
                                (0, d.jsx)('b', {
                                    style: {
                                        color: '#ffff94'
                                    },
                                    children: 'Create New Map'
                                }),
                                ' button above to get started.'
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(l.default, {
                    open: y,
                    close: A
                })
            ]
        });
    };
    const v = e.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = t``)),
        w = e.default.div.attrs({
            className: 'flex between maxWidth vc'
        })(o || (o = t``)),
        x = e.default.div(p || (p = t``)),
        y = e.default.div(q || (q = t`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 3px;
`), i.Fonts.FugazOne),
        z = e.default.div(r || (r = t`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`)),
        A = e.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = t`
  border: 2px dashed rgba(255, 255, 255, 0.25);
  padding: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`));
}), c.register('QiEwJ', function(b, v) {
    a(b.exports, 'invalidateCreatedMaps', function() {
        return h;
    }), a(b.exports, 'default', function() {
        return i;
    });
    var d = c('IsAdf'),
        e = c('PjB0f'),
        f = c('jnSVn');
    const g = ['creative-created-maps'],
        h = () => f.default.invalidateQueries(g);
    var i = () => (0, d.useQuery)(g, () => (0, e.requestAsPromise)({
        url: '/api/created-maps'
    }));
}), c.register('Aui5a', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('c6x8w'),
        j = c('cR5QE'),
        k = c('UzdPH'),
        l = c('gSUVO'),
        m = c('lmfrI'),
        n = c('PjB0f'),
        o = c('QiEwJ'),
        p = c('iMnBi'),
        q = c('YimJ0');
    let r;
    var s = a => {
        const [t, u, v] = (0, n.useBoolean)(!1), [w, x, y] = (0, n.useBoolean)(!1), [z, A] = e.useState(''), [B, C] = e.useState(''), [D, E, F] = (0, n.useBoolean)(!1), [G, H, I] = (0, n.useBoolean)(!1), [J, K, L] = (0, n.useBoolean)(!1);
        e.useEffect(() => {
            A('');
        }, [t]), e.useEffect(() => {
            C('');
        }, [w]);
        const M = (null == z ? void 0 : z.trim().length) < 2,
            N = () => {
                M || D || (E(), (0, n.request)({
                    url: '/api/created-map/rename',
                    data: {
                        id: a.id,
                        name: z
                    },
                    success: () => {
                        (0, o.invalidateCreatedMaps)();
                    },
                    error: a => {
                        (0, n.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error renaming map'
                            }
                        });
                    },
                    both: () => {
                        v(), F();
                    }
                }));
            },
            O = B !== a.name;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(t, {
                    onClick: () => {
                        a.disabled || J || (K(), (0, n.request)({
                            url: '/api/matchmaker/intent/map/edit/create',
                            data: {
                                mapId: a.id
                            },
                            success: a => window.location.href = `/host?id=${ a }`,
                            error: a => {
                                (0, n.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error loading into your map. Please try again.'
                                    }
                                });
                            },
                            both: L
                        }));
                    },
                    disabled: a.disabled,
                    children: [
                        (0, d.jsx)('div', {
                            children: a.name
                        }),
                        (0, d.jsx)('div', {
                            onClick: a => a.stopPropagation(),
                            children: (0, d.jsx)(h.default, {
                                menu: {
                                    items: [{
                                            key: `rename-${ a.id }`,
                                            label: 'Rename',
                                            icon: (0, d.jsx)(p.default, {
                                                name: 'far fa-edit'
                                            }),
                                            onClick: a => {
                                                a.domEvent.stopPropagation(), u();
                                            }
                                        },
                                        {
                                            key: `delete-${ a.id }`,
                                            label: 'Delete',
                                            icon: (0, d.jsx)(p.default, {
                                                name: 'far fa-trash-alt'
                                            }),
                                            danger: !0,
                                            onClick: a => {
                                                a.domEvent.stopPropagation(), x();
                                            }
                                        }
                                    ]
                                },
                                children: (0, d.jsx)(g.default, {
                                    icon: (0, d.jsx)(p.default, {
                                        name: 'far fa-ellipsis-h'
                                    }),
                                    type: 'text',
                                    style: {
                                        color: m.default.White
                                    }
                                })
                            })
                        })
                    ]
                }),
                (0, d.jsxs)(j.default, {
                    open: t,
                    onCancel: v,
                    title: 'Rename',
                    footer: [
                        (0, d.jsx)(g.default, {
                            onClick: v,
                            children: 'Cancel'
                        }, 'cancel-rename'),
                        (0, d.jsx)(g.default, {
                            type: 'primary',
                            onClick: N,
                            disabled: M,
                            loading: D,
                            children: 'Rename'
                        }, 'rename-map')
                    ],
                    children: [
                        (0, d.jsxs)(k.default.Text, {
                            children: [
                                'Enter a new name for ',
                                (0, d.jsxs)('b', {
                                    children: [
                                        a.name,
                                        ':'
                                    ]
                                })
                            ]
                        }),
                        (0, d.jsx)(i.default, {
                            value: z,
                            style: {
                                marginTop: 5
                            },
                            placeholder: 'New name...',
                            maxLength: 32,
                            onChange: a => A(a.target.value),
                            onPressEnter: N
                        })
                    ]
                }),
                (0, d.jsxs)(j.default, {
                    open: w,
                    onCancel: y,
                    title: 'Delete Map',
                    footer: [
                        (0, d.jsx)(g.default, {
                            onClick: y,
                            children: 'Cancel'
                        }, 'cancel-delete'),
                        (0, d.jsx)(g.default, {
                            type: 'primary',
                            danger: !0,
                            disabled: O,
                            onClick: () => {
                                O || G || (H(), (0, n.request)({
                                    url: '/api/created-map/delete',
                                    data: {
                                        id: a.id
                                    },
                                    success: () => {
                                        (0, o.invalidateCreatedMaps)();
                                    },
                                    error: a => {
                                        (0, n.throwMessageError)({
                                            e: a,
                                            default: {
                                                title: 'Error deleting map'
                                            }
                                        });
                                    },
                                    both: () => {
                                        y(), I();
                                    }
                                }));
                            },
                            loading: G,
                            children: 'Delete Map'
                        }, 'delete-map')
                    ],
                    children: [
                        (0, d.jsxs)(k.default.Text, {
                            children: [
                                'Deleting a map is permanent and cannot be undone. Please enter the name of the map',
                                ' ',
                                (0, d.jsx)('code', {
                                    style: {
                                        userSelect: 'none'
                                    },
                                    children: a.name
                                }),
                                ' to confirm. Note that deleting a map will also remove it from Creative Discovery.'
                            ]
                        }),
                        (0, d.jsx)(i.default, {
                            value: B,
                            style: {
                                marginTop: 10
                            },
                            placeholder: 'Enter map name here ...',
                            maxLength: 32,
                            onChange: a => C(a.target.value)
                        })
                    ]
                })
            ]
        });
    };
    const t = (0, f.default)(q.VerticallyCentered).attrs({
        className: 'maxWidth between'
    })(r || (r = (a => a)`
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-weight: ${ 0 };
  line-height: 1;
  font-size: 14px;
  cursor: ${ 0 };
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), l.FontWeights.Bold, a => a.disabled ? 'not-allowed' : 'pointer');
}), c.register('rZ5J1', function(b, x) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('qEw51'),
        g = c('c6x8w'),
        h = c('cR5QE'),
        i = c('5nJMd26'),
        j = c('KlhV/'),
        k = c('uPP4W'),
        l = c('PjB0f'),
        m = c('QiEwJ'),
        n = c('CJCMN4'),
        o = c('h99Nu'),
        p = c('gSUVO'),
        q = c('bb3T8'),
        r = c('JJQ0+'),
        s = c('lljX3');
    let t;
    var u = a => {
        const v = k.useRef(null),
            [w, x] = k.useState(''),
            [y, z] = k.useState(),
            [A, B, C] = (0, l.useBoolean)(!1),
            D = (null == w ? void 0 : w.trim().length) < 2 || !y;
        k.useEffect(() => {
            a.open && setTimeout(() => {
                var E;
                null === (E = v.current) || void 0 === E || E.focus();
            }, 1);
        }, [a.open]);
        const E = () => {
                D || A || (B(), (0, l.request)({
                    url: '/api/created-map/create',
                    data: {
                        name: w,
                        mapStyle: y
                    },
                    success: v => {
                        (0, n.AnalyticsTrackEvent)({
                            event: 'creative_map_created',
                            properties: {
                                mapStyle: y
                            }
                        }), (0, m.invalidateCreatedMaps)(), (0, l.request)({
                            url: '/api/matchmaker/intent/map/edit/create',
                            data: {
                                mapId: v
                            },
                            success: a => window.location.href = `/host?id=${ a }`,
                            both: a.close
                        });
                    },
                    error: a => {
                        (0, l.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error creating map'
                            }
                        });
                    },
                    both: () => {
                        C(), x('');
                    }
                }));
            },
            F = a => {
                z(a);
            };
        return (0, d.jsx)(f.default, {
            theme: {
                algorithm: j.default.darkAlgorithm,
                token: {
                    colorBgBase: '#1C1D57'
                }
            },
            children: (0, d.jsx)(h.default, {
                open: a.open,
                onCancel: a.close,
                width: 668,
                footer: [
                    (0, d.jsx)(e.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-new-map'),
                    (0, d.jsx)(e.default, {
                        type: 'primary',
                        disabled: D,
                        loading: A,
                        onClick: E,
                        children: 'Create'
                    }, 'create-new-map')
                ],
                children: (0, d.jsxs)(i.default, {
                    direction: 'vertical',
                    size: 20,
                    className: 'maxWidth',
                    children: [
                        (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(v, {
                                    children: 'Map Name'
                                }),
                                (0, d.jsx)(g.default, {
                                    ref: v,
                                    value: w,
                                    onChange: a => {
                                        x(a.target.value);
                                    },
                                    placeholder: 'Enter map name here...',
                                    maxLength: 32,
                                    onPressEnter: E,
                                    size: 'large'
                                })
                            ]
                        }),
                        (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(v, {
                                    children: 'Map Style'
                                }),
                                (0, d.jsxs)('div', {
                                    className: 'flex',
                                    style: {
                                        flexWrap: 'wrap',
                                        gap: 14,
                                        marginBottom: 3
                                    },
                                    children: [
                                        (0, d.jsx)(q.default, {
                                            image: (0, r.default)('creative/top-down.jpeg'),
                                            name: 'Top-Down',
                                            description: 'Players move in all four directions',
                                            selected: y === s.default.topDown,
                                            onSelect: () => F(s.default.topDown)
                                        }),
                                        (0, d.jsx)(q.default, {
                                            image: (0, r.default)('creative/platformer.jpeg'),
                                            name: 'Platformer',
                                            description: 'Players move left & right, but can also jump',
                                            selected: y === s.default.platformer,
                                            onSelect: () => F(s.default.platformer)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
    const v = o.default.div(t || (t = (a => a)`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
`), p.Fonts.FugazOne);
}), c.register('CJCMN4', function(b, k) {
    a(b.exports, 'AnalyticsTrackEvent', function() {
        return h;
    });
    var d = c('pvZv3'),
        e = c('PjB0f'),
        f = c('61G7M'),
        g = c('OW/xn');
    const h = a => {
        var i, j, k;
        if ((window.gtag && !(null === (i = a.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', a.event, a.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = a.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('bb3T8', function(b, s) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('gSUVO'),
        h = c('S/jX4');
    let i, j, k, l, m, n, o = a => a;
    var p = a => {
        const {
            image: q,
            name: r,
            description: s
        } = t;
        return (0, d.jsxs)(q, {
            onClick: t.onSelect,
            style: {
                borderColor: t.selected ? h.default.Yellow : 'rgba(255, 255, 255, 0.1)'
            },
            children: [
                t.tag ? (0, d.jsx)(t, {
                    children: t.tag
                }) : null,
                (0, d.jsx)(r, {
                    style: {
                        backgroundImage: `url("${ q }")`
                    }
                }),
                (0, d.jsxs)(s, {
                    children: [
                        (0, d.jsx)(u, {
                            children: r
                        }),
                        (0, d.jsx)(v, {
                            children: s
                        })
                    ]
                })
            ]
        });
    };
    const q = e.default.div(i || (i = o`
  background: rgba(255, 255, 255, 0.1);
  width: 303px;
  border-radius: 8px;
  overflow: hidden;
  border-width: 4px;
  border-style: solid;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`)),
        r = e.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = o`
  height: 132px;
  background-size: cover;
  background-position: center -57px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`)),
        s = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(k || (k = o`
  padding: 10px;
  padding-top: 0px;
`)),
        t = e.default.div(l || (l = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 9px;
  padding: 3px 9px;
  border-radius: 20px;
  margin-bottom: 5px;
  background: ${ 0 };
  color: ${ 0 };
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`), g.Fonts.FugazOne, h.default.Yellow, h.default.Black),
        u = e.default.div(m || (m = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
`), g.Fonts.FugazOne),
        v = e.default.div(n || (n = o`
  font-family: ${ 0 };
  font-size: 13px;
  margin-top: -3px;
`), g.Fonts.SFPro);
}), c.register('lljX3', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).topDown = 'topDown', e.platformer = 'platformer';
    var f = g;
}), c.register('/6tvL', function(b, d) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('bPH7V'),
        f = c('qEw51'),
        g = c('KlhV/');
    c('uPP4W');
    var h = c('iYEuk12'),
        i = c('q721a'),
        j = c('gSUVO'),
        k = c('ImHrc1'),
        l = c('rZ3/P');
    var m = a => {
        return (0, l.OwnsSeasonTicket)() ? null : (0, d.jsx)(f.default, {
            theme: {
                algorithm: g.default.defaultAlgorithm
            },
            children: (0, d.jsx)(e.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (b = a.marginTop) && void 0 !== b ? b : 0,
                    marginBottom: null !== (c = a.marginBottom) && void 0 !== c ? c : 0
                },
                message: (0, d.jsxs)('span', {
                    children: [
                        a.text,
                        ' with the',
                        ' ',
                        (0, d.jsx)(h.default, {
                            to: i.SEASON_TICKET_BASE,
                            style: {
                                textDecoration: 'underline',
                                fontWeight: j.FontWeights.Bold
                            },
                            children: k.SeasonTicketName.name
                        })
                    ]
                })
            })
        });
        var n, o;
    };
}), c.register('ImHrc1', function(b, c) {
    a(b.exports, 'SeasonTicketName', function() {
        return d;
    }), a(b.exports, 'SeasonTicketSeason', function() {
        return e;
    });
    const d = {
            name: 'Season Ticket',
            singularName: 'ticket'
        },
        e = {
            seasonYear: '2025',
            seasonName: 'Season',
            seasonNumber: '3'
        };
}), c.register('rZ3/P', function(b, n) {
    a(b.exports, 'OwnsSeasonTicket', function() {
        return e;
    });
    var d = c('PjB0f');
    const e = () => {
        var f, g, h;
        return null !== (h = null === (f = (0, d.getUser)()) || void 0 === f || null === (g = f.seasonTicket) || void 0 === g ? void 0 : g.active) && void 0 !== h && h;
    };
}), c.register('zKQKU', function(b, n) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('5nJMd26'),
        f = c('UzdPH');
    c('uPP4W');
    var g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('lmfrI'),
        j = c('iMnBi'),
        k = c('YimJ0'),
        l = c('/naIW');
    let m, n, o = a => a;
    const p = a => (0, d.jsx)('a', {
        href: a.url,
        target: '_blank',
        className: 'maxWidth',
        children: (0, d.jsxs)(s, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(f.default.Text, {
                                style: {
                                    fontWeight: h.FontWeights.Bold,
                                    color: i.default.White,
                                    textDecoration: 'underline'
                                },
                                children: a.title
                            })
                        }),
                        (0, d.jsx)(f.default.Text, {
                            style: {
                                color: 'rgba(255,255,255,0.8)'
                            },
                            italic: !0,
                            children: a.description
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(f.default.Text, {
                        style: {
                            color: i.default.White
                        },
                        children: (0, d.jsx)(j.default, {
                            name: 'fas fa-external-link'
                        })
                    })
                })
            ]
        })
    });
    var q = () => (0, d.jsxs)(r, {
        children: [
            (0, d.jsx)(l.Title, {
                children: 'Resources'
            }),
            (0, d.jsxs)(e.default, {
                size: 10,
                direction: 'vertical',
                className: 'maxWidth',
                style: {
                    marginTop: 10
                },
                children: [
                    (0, d.jsx)(p, {
                        title: 'Changelog',
                        description: 'Read about the latest updates to Gimkit Creative!',
                        url: 'https://docs.creative.gimkit.com/changelog'
                    }),
                    (0, d.jsx)(p, {
                        title: 'Community Forum',
                        description: 'Ask questions and get help building your own maps!',
                        url: 'https://forum.creative.gimkit.com'
                    }),
                    (0, d.jsx)(p, {
                        title: 'Documentation',
                        description: 'Documentation to help you build your own maps.',
                        url: 'https://docs.creative.gimkit.com'
                    })
                ]
            })
        ]
    });
    const r = g.default.div(m || (m = o``)),
        s = (0, g.default)(k.VerticallyCentered).attrs({
            className: 'maxWidth'
        })(n || (n = o`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('5UzpR', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    c('jnSVn');
    const f = ['creative-creative-basics'];
    var g = () => (0, d.useQuery)(f, () => (0, e.requestAsPromise)({
        url: '/api/created-map/basics'
    }));
}), c.register('fgVTE0', function(b, n) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('b5p1k12'),
        e = c('lWzbN'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('LS7Qv'),
        h = c('knVNm'),
        i = c('l/I4j'),
        j = 44;

    function k(a) {
        var l, m, n;
        return l = a, m = 0, n = 1, a = (Math.min(Math.max(m, l), n) - m) / (n - m), a = (a -= 1) * a * a + 1;
    }
    var l = f.forwardRef(function(a, b) {
            var m, n = a.classes,
                o = a.className,
                p = a.color,
                q = void 0 === p ? 'primary' : p,
                r = a.disableShrink,
                s = void 0 !== r && r,
                t = a.size,
                u = void 0 === t ? 40 : t,
                v = a.style,
                w = a.thickness,
                x = void 0 === w ? 3.6 : w,
                y = a.value,
                z = void 0 === y ? 0 : y,
                A = a.variant,
                B = void 0 === A ? 'indeterminate' : A,
                C = (0, e.default)(a, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]),
                D = {},
                E = {},
                F = {};
            if ('determinate' === B || 'static' === B) {
                var G = 2 * Math.PI * ((j - x) / 2);
                D.strokeDasharray = G.toFixed(3), F['aria-valuenow'] = Math.round(z), 'static' === B ? (D.strokeDashoffset = ''.concat(((100 - z) / 100 * G).toFixed(3), 'px'), E.transform = 'rotate(-90deg)') : (D.strokeDashoffset = ''.concat((m = (100 - z) / 100, m * m * G).toFixed(3), 'px'), E.transform = 'rotate('.concat((270 * k(z / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(n.root, o, 'inherit' !== q && n['color'.concat((0, i.default)(q))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [B]),
                style: (0, d.default)({
                    width: u,
                    height: u
                }, E, v),
                ref: b,
                role: 'progressbar'
            }, F, C), f.createElement('svg', {
                className: n.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(n.circle, s && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [B]),
                style: D,
                cx: j,
                cy: j,
                r: (j - x) / 2,
                fill: 'none',
                strokeWidth: x
            })));
        }),
        m = (0, h.default)(function(a) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: a.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: a.palette.primary.main
                },
                colorSecondary: {
                    color: a.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: a.transitions.create('stroke-dashoffset')
                },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': {
                        transformOrigin: '50% 50%'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: {
                    animation: 'none'
                }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(l);
}), c.register('DoTGA', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('1wUUq')).then(() => c('kxc8y'));
}), c.register('4KFX5', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('3X4Jt')).then(() => c('SZZAz'));
}), c.register('SHiyt7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Gxa0x7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var i = e.forwardRef(h);
}), c.register('Gxa0x7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('Ynp9Z7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('6bYDI7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var i = e.forwardRef(h);
}), c.register('6bYDI7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = arguments.length; f < g; f++)
                    for (var h in e = arguments[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, arguments);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('oSNZM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('lByv9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var i = e.forwardRef(h);
}), c.register('lByv9', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('bdX0N23', function(b, d) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
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
}), c.register('k0s2g17', function(b, d) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('0Vm3k', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('3nT4r'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EnterOutlined';
    var i = e.forwardRef(h);
}), c.register('3nT4r', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'enter',
        theme: 'outlined'
    };
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
});