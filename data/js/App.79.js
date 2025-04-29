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
c.register('EX23x', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _y;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('8j4mV'),
        k = c('tBC08'),
        l = c('W/XnX24'),
        m = c('8KqQ+'),
        n = c('lKjHC'),
        o = c('quE27'),
        p = c('nKuOQ'),
        q = c('M3OCl2'),
        r = c('t52Ep'),
        s = c('zcfNM'),
        t = c('+cTfn'),
        u = c('Q7yTi');
    let v;
    const w = h.lazy(() => c('4+WtL')),
        x = h.lazy(() => c('biMaA'));
    var _y = () => {
        (0, n.useDidMount)(() => {
            (0, o.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        const {
            pathname: z
        } = (0, t.useLocation)(), A = h.useMemo(() => (0, s.matchPath)({
            path: p.CREATIVE_MAP
        }, z) ? (0, g.jsx)(w, {}) : (0, s.matchPath)({
            path: p.CREATIVE_DISCOVERY
        }, z) ? (0, g.jsx)(x, {}) : (0, g.jsx)(u.default, {}), [z]);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(o.Title, {
                    title: 'Gimkit Creative',
                    override: !0
                }),
                (0, g.jsxs)(j.default, {
                    children: [
                        (0, g.jsx)(k.default, {
                            theme: l.SiteHeaderTheme.dark,
                            includeSpacer: !0,
                            hideBorder: !0,
                            containerDivStyle: {
                                backdropFilter: 'blur(4px)'
                            },
                            children: (0, g.jsx)(q.default, {
                                theme: l.SiteHeaderTheme.dark,
                                bottomContent: (0, g.jsx)('div', {
                                    style: {
                                        height: 9
                                    }
                                }),
                                options: [{
                                        id: 'creative-home',
                                        label: 'Build',
                                        path: p.CREATIVE_BASE,
                                        icon: (0, g.jsx)(r.default, {
                                            name: 'fas fa-hammer'
                                        })
                                    },
                                    {
                                        id: 'creative-explore',
                                        label: 'Discovery',
                                        path: p.CREATIVE_DISCOVERY,
                                        icon: (0, g.jsx)(r.default, {
                                            name: 'fas fa-gamepad-alt'
                                        })
                                    }
                                ]
                            })
                        }),
                        (0, g.jsx)(_z, {
                            children: (0, g.jsx)(h.Suspense, {
                                fallback: null,
                                children: A
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _z = i.default.div(v || (v = (a => a)`
  color: ${ 0 };
`), m.default.White);
}), c.register('8j4mV', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09');
    let h, i, j = a => a;
    var _k = a => (0, f.jsxs)(_l, {
        children: [
            (0, f.jsx)(_m, {
                children: a.children
            }),
            (0, f.jsx)('div', {
                className: 'area',
                children: (0, f.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {})
                    ]
                })
            })
        ]
    });
    const _l = g.default.div(h || (h = j`
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
        _m = g.default.div(i || (i = j`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`));
}), c.register('W/XnX24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('M3OCl2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('W/XnX24'),
        j = c('zOtFd24'),
        k = c('3IofR2');
    let l, m, n = a => a;
    var _o = a => {
        const p = g.useMemo(() => {
                var q;
                return null !== (q = a.theme) && void 0 !== q ? q : i.SiteHeaderTheme.light;
            }, [a.theme]),
            q = g.useMemo(() => {
                var r;
                return null !== (r = a.alpha) && void 0 !== r ? r : j.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            r = g.useMemo(() => {
                const s = q === j.SiteHeaderAlpha.none ? 1 : p === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return p === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ s })` : `rgba(16, 16, 16, ${ s })`;
            }, [
                p,
                q
            ]),
            s = g.useMemo(() => p === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [p]);
        return (0, f.jsxs)(_p, {
            background: r,
            borderColor: s,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: p
                        }),
                        (0, f.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
            ]
        });
    };
    const _p = h.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), a => a.background, a => a.borderColor),
        _q = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = n``));
}), c.register('zOtFd24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('3IofR2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('E2AMI26'),
        h = c('pWL4I2'),
        i = c('u4s09');
    let j;
    var _k = a => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(d => (0, f.jsx)(h.default, {
                option: d,
                selected: a.selectedOption === d.id,
                theme: a.theme
            }, `option-${ d.id }`))
        })
    });
    const _l = i.default.div.attrs({
        className: 'scroll-x'
    })(j || (j = (a => a)`
  flex: 1;
`));
}), c.register('E2AMI26', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('42T6R26'),
        k = c('yRLYd'),
        l = c('qW/eZ26'),
        m = c('AzDc2'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = a => {
        const {
            getPrefixCls: r,
            space: s,
            direction: t
        } = h.useContext(i.ConfigContext), {
            size: u = (null == s ? void 0 : s.size) || 'small',
            align: v,
            className: _w,
            rootClassName: x,
            children: y,
            direction: z = 'horizontal',
            prefixCls: A,
            split: B,
            style: C,
            wrap: D = !1
        } = a, E = n(a, [
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
        ]), F = (0, j.default)(), [G, H] = h.useMemo(() => (Array.isArray(u) ? u : [
            u,
            u
        ]).map(a => function(I) {
            return 'string' == typeof I ? p[I] : I || 0;
        }(a)), [u]), I = (0, g.default)(y, {
            keepEmpty: !0
        }), J = void 0 === v && 'horizontal' === z ? 'center' : v, K = r('space', A), [L, M] = (0, m.default)(K), N = b(f)(K, M, `${ K }-${ z }`, {
            [`${ K }-rtl`]: 'rtl' === t,
            [`${ K }-align-${ J }`]: J
        }, _w, x), O = `${ K }-item`, P = 'rtl' === t ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((a, b) => {
                null != a && (Q = b);
                const S = a && a.key || `${ O }-${ b }`;
                return h.createElement(l.default, {
                    className: O,
                    key: S,
                    direction: z,
                    index: b,
                    marginDirection: P,
                    split: B,
                    wrap: D
                }, a);
            }),
            S = h.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return D && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(h.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), C)
        }, E), h.createElement(_o.Provider, {
            value: S
        }, R)));
    };
    q.Compact = k.default;
    var r = q;
}), c.register('42T6R26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nzHVd'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('qW/eZ26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('E2AMI26');

    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = {
            marginBottom: q / (o ? 2 : 1)
        }) : u = Object.assign(Object.assign({}, l < s && {
            [m]: q / (o ? 2 : 1)
        }), p && {
            paddingBottom: r
        })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('pWL4I2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('W/XnX24'),
        i = c('u4s09'),
        j = c('44iM223'),
        k = c('zcfNM'),
        l = c('+cTfn'),
        m = c('FB7HT26');
    let n;
    var _o = a => {
        const {
            theme: p,
            option: q
        } = a, {
            pathname: r
        } = (0, l.useLocation)(), {
            label: s,
            icon: t,
            path: u,
            otherMatchingPaths: v
        } = q, w = (() => {
            if (u) {
                if ((0, k.matchPath)({
                        path: u
                    }, r))
                    return !0;
                if ((null == v ? void 0 : v.length) && v.some(a => (0, k.matchPath)({
                        path: a
                    }, r)))
                    return !0;
            }
            return !1;
        })(), x = g.useMemo(() => !!w || a.selected, [
            w,
            a.selected
        ]), y = g.useMemo(() => x ? '#1677ff' : 'transparent', [
            p,
            x
        ]), z = g.useMemo(() => x ? j.default.White : p === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
            p,
            x
        ]), A = g.useMemo(() => x ? y : p === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            p,
            x,
            y
        ]);
        return (0, f.jsx)(m.default, {
            to: u,
            target: a.option.target,
            onClick: q.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, f.jsxs)(_p, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    t ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: t
                    }) : null,
                    s
                ]
            })
        });
    };
    const _p = i.default.div.attrs({
        className: 'flex-center'
    })(n || (n = (a => a)`
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
}), c.register('44iM223', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('FB7HT26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('+cTfn');
    c('O0Kav');
    var _h = a => a.external || !a.to ? (0, f.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: d => {
            a.onClick && 'Enter' === d.key && (d.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, f.jsx)(g.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('t52Ep', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('Q7yTi', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('m5F5G'),
        i = c('MgONH'),
        j = c('E2AMI26'),
        k = c('4DY7h'),
        l = c('ngmu/'),
        m = c('hphdI'),
        n = c('jQPD7'),
        o = c('xo476'),
        p = c('mZxOZ'),
        q = c('JNGrh0'),
        r = c('8KqQ+');
    let s;
    var _t = () => {
        const {
            data: u,
            isLoading: v,
            error: w
        } = (0, p.default)();
        return w ? (0, f.jsx)('div', {
            className: 'flex-center maxWidth',
            style: {
                marginTop: 50
            },
            children: (0, f.jsx)('div', {
                className: 'light-shadow',
                style: {
                    background: 'rgba(255,255,255,0.1)',
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: '90%'
                },
                children: 'There was an error loading Gimkit Creative. Please refresh and try again.'
            })
        }) : v ? (0, f.jsx)(i.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, f.jsx)(q.default, {
                style: {
                    color: r.default.White
                }
            })
        }) : (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(h.default, {}),
                (0, f.jsxs)(j.default, {
                    className: 'maxWidth',
                    direction: 'vertical',
                    size: 25,
                    style: {
                        marginTop: 30,
                        width: l.CreativeContentWidth.width,
                        maxWidth: l.CreativeContentWidth.maxWidth
                    },
                    children: [
                        u.completedTutorial ? null : (0, f.jsx)(k.default, {
                            children: (0, f.jsx)(m.default, {})
                        }),
                        (0, f.jsx)(k.default, {
                            children: (0, f.jsx)(n.default, {
                                mapLimit: u.mapLimit
                            })
                        }),
                        (0, f.jsx)(k.default, {
                            children: (0, f.jsx)(o.default, {})
                        })
                    ]
                })
            ]
        });
    };
    const _u = (0, g.default)(i.CenteredColumn).attrs({
        className: 'maxWidth'
    })(s || (s = (a => a)`
  padding: 35px 0px;
`));
}), c.register('m5F5G', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('ngmu/'),
        i = c('MgONH'),
        j = c('Eh2Wh'),
        k = c('V704d');
    let l, m, n, o, p, q = a => a;
    var _r = () => (0, f.jsxs)(_s, {
        children: [
            (0, f.jsxs)(_t, {
                children: [
                    (0, f.jsx)(_u, {
                        src: '/client/img/svgLogoWhite.svg'
                    }),
                    (0, f.jsx)(_v, {
                        children: 'Creative'
                    })
                ]
            }),
            (0, f.jsx)(_w, {
                children: (0, f.jsx)(k.default, {
                    children: 'Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!'
                })
            })
        ]
    });
    const _s = (0, g.default)(i.CenteredColumn)(l || (l = q`
  width: ${ 0 };
  max-width: ${ 0 };
`), h.CreativeContentWidth.width, h.CreativeContentWidth.maxWidth),
        _t = (0, g.default)(i.CenteredColumn)(m || (m = q``)),
        _u = g.default.img(n || (n = q`
  height: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.9) 0px 1px 2px);
`)),
        _v = g.default.div(o || (o = q`
  text-shadow: rgba(0, 0, 0, 0.6) 0px 3px 15px;
  font-size: 72px;
  font-family: ${ 0 };
  text-transform: uppercase;
  line-height: 1;
  margin-top: 10px;
`), j.Fonts.FugazOne),
        _w = g.default.div(p || (p = q`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
`));
}), c.register('ngmu/', function(d, e) {
    a(d.exports, 'CreativeContentWidth', function() {
        return _f;
    });
    const _f = {
        width: '90%',
        maxWidth: '800px'
    };
}), c.register('MgONH', function(d, e) {
    a(d.exports, 'Centered', function() {
        return _l;
    }), a(d.exports, 'VerticallyCentered', function() {
        return _m;
    }), a(d.exports, 'CenteredColumn', function() {
        return _n;
    }), a(d.exports, 'VerticalCentered', function() {
        return _o;
    });
    var f = c('u4s09');
    let g, h, i, j, k = a => a;
    const _l = f.default.div.attrs({
            className: 'flex-center'
        })(g || (g = k``)),
        _m = f.default.div.attrs({
            className: 'flex vc'
        })(h || (h = k``)),
        _n = (0, f.default)(_l).attrs({
            className: 'flex-column'
        })(i || (i = k``)),
        _o = f.default.div.attrs({
            className: 'flex vc'
        })(j || (j = k``));
}), c.register('V704d', function(d, e) {
    a(d.exports, 'Provider', function() {
        return _o;
    }), a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('O0Kav'),
        g = '__wrap_b',
        h = '__wrap_o',
        i = 'undefined' == typeof window ? b(f).useEffect : b(f).useLayoutEffect,
        j = (a, b, c) => {
            let k = (c = c || document.querySelector(`[data-br="${ a }"]`)).parentElement,
                l = a => c.style.maxWidth = a + 'px';
            c.style.maxWidth = '';
            let m, n = k.clientWidth,
                o = k.clientHeight,
                p = n / 2 - 0.25,
                q = n + 0.5;
            if (n) {
                for (; p + 1 < q;)
                    m = Math.round((p + q) / 2), l(m), k.clientHeight === o ? q = m : p = m;
                l(q * b + n * (1 - b));
            }
            c.__wrap_o || (c.__wrap_o = new ResizeObserver(() => {
                self.__wrap_b(0, +c.dataset.brr, c);
            })).observe(k);
        },
        k = j.toString(),
        l = (a, m = '') => b(f).createElement('script', {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: (a ? '' : `self.${ g }=${ k };`) + m
            }
        }),
        n = b(f).createContext(!1),
        _o = ({
            children: p
        }) => b(f).createElement(n.Provider, {
            value: !0
        }, l(!1), p),
        _q = ({
            as: r = 'span',
            ratio: s = 1,
            children: t,
            ...u
        }) => {
            let v = b(f).useId(),
                w = b(f).useRef(),
                x = b(f).useContext(n);
            return i(() => {
                w.current && (self[g] = j)(0, s, w.current);
            }, [
                t,
                s
            ]), i(() => () => {
                if (!w.current)
                    return;
                let y = w.current[h];
                !y || (y.disconnect(), delete w.current[h]);
            }, []), b(f).createElement(b(f).Fragment, null, b(f).createElement(r, {
                ...u,
                'data-br': v,
                'data-brr': s,
                ref: w,
                style: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    textDecoration: 'inherit'
                },
                suppressHydrationWarning: !0
            }, t), l(x, `self.${ g }("${ v }",${ s })`));
        };
}), c.register('4DY7h', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09');
    let h;
    var _i = a => (0, f.jsx)(_j, {
        className: a.className,
        children: a.children
    });
    const _j = g.default.div.attrs({
        className: 'maxWidth light-shadow'
    })(h || (h = (a => a)`
  background: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 12px;
  backdrop-filter: blur(3px);
`));
}), c.register('hphdI', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('aPZ+w'),
        i = c('Eh2Wh'),
        j = c('nKuOQ'),
        k = c('V704d'),
        l = c('UaUBz0');
    let m, n, o, p, q, r, s = a => a;
    var _t = () => (0, f.jsxs)(_u, {
        children: [
            (0, f.jsx)(_v, {
                children: (0, f.jsx)(_w, {})
            }),
            (0, f.jsxs)(_x, {
                children: [
                    (0, f.jsx)(_y, {
                        children: (0, f.jsx)(k.default, {
                            children: 'Complete the Gimkit Creative tutorial and receive the Blueprint Gim for free!'
                        })
                    }),
                    (0, f.jsx)(_z, {
                        children: 'The tutorial takes about 10 minutes to complete.'
                    }),
                    (0, f.jsx)(h.default, {
                        size: 'small',
                        customFontWeight: i.FontWeights.Bold,
                        type: 'success',
                        onClick: () => window.location.href = j.CREATIVE_TUTORIAL,
                        ariaLabel: 'Start Tutorial',
                        children: 'Start Tutorial'
                    })
                ]
            })
        ]
    });
    const _u = g.default.div.attrs({
            className: 'maxWidth flex-center'
        })(m || (m = s``)),
        _v = g.default.div(n || (n = s``)),
        _w = g.default.img.attrs({
            src: (0, l.default)('characters/spine/preview/construction.png')
        })(o || (o = s`
  height: 155px;
  transform: rotate(353deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        _x = g.default.div(p || (p = s`
  margin-left: 20px;
`)),
        _y = g.default.div(q || (q = s`
  font-weight: ${ 0 };
  font-size: 18px;
  line-height: 1.3;
`), i.FontWeights.Bold),
        _z = g.default.div(r || (r = s`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-style: italic;
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
}), c.register('UaUBz0', function(d, e) {
    let f;
    a(d.exports, 'default', function() {
        return _g;
    });
    var _g = a => {
        const h = (() => {
            var i;
            if (f)
                return f;
            const j = null === (i = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === i ? void 0 : i.getAttribute('content');
            return void 0 !== j && '$CDN_MAP_ASSETS_URL' !== j ? (f = j, f) : '';
        })();
        return a.startsWith('/assets/map') ? `${ h }${ a }` : `${ h }/assets/map/${ a }`;
    };
}), c.register('jQPD7', function(d, e) {
    a(d.exports, 'Title', function() {
        return _A;
    }), a(d.exports, 'Description', function() {
        return _B;
    }), a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('/x6lc'),
        i = c('quE27'),
        j = c('aPZ+w'),
        k = c('Eh2Wh'),
        l = c('E2AMI26'),
        m = c('Skuh5'),
        n = c('6oQwW'),
        o = c('C1J2w');
    let p, q, r, s, t, u, v = a => a;
    var _w = a => {
        const {
            data: x,
            isLoading: y,
            error: z
        } = (0, h.default)(), [A, B, C] = (0, i.useBoolean)(!1);
        if (y || z)
            return null;
        const D = x.length < a.mapLimit,
            E = x.slice(0, a.mapLimit),
            F = x.slice(a.mapLimit);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsxs)(_z, {
                                    children: [
                                        (0, f.jsx)(_A, {
                                            children: 'My Maps'
                                        }),
                                        (0, f.jsxs)(_B, {
                                            children: [
                                                x.length,
                                                '/',
                                                a.mapLimit,
                                                ' slots used'
                                            ]
                                        }),
                                        x.length >= 2 ? (0, f.jsx)(o.default, {
                                            marginTop: 8,
                                            text: 'Store up to 25 maps'
                                        }) : null
                                    ]
                                }),
                                D ? (0, f.jsx)(j.default, {
                                    size: 'small',
                                    customFontWeight: k.FontWeights.Bold,
                                    onClick: B,
                                    ariaLabel: 'Create New Map',
                                    type: 'success',
                                    children: 'Create New Map'
                                }) : null
                            ]
                        }),
                        x.length ? (0, f.jsxs)(l.default, {
                            direction: 'vertical',
                            size: 14,
                            className: 'maxWidth',
                            style: {
                                marginTop: 20
                            },
                            children: [
                                E.map(a => (0, f.jsx)(m.default, {
                                    id: a._id,
                                    name: a.name,
                                    disabled: !1
                                }, a._id)),
                                F.length ? (0, f.jsxs)(l.default, {
                                    direction: 'vertical',
                                    size: 14,
                                    className: 'maxWidth medium-shadow',
                                    style: {
                                        background: 'rgba(255,56,56,0.3)',
                                        padding: 30,
                                        borderRadius: 10
                                    },
                                    children: [
                                        (0, f.jsx)('div', {
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
                                        F.map((a, x) => (0, f.jsx)(m.default, {
                                            id: a._id,
                                            name: a.name,
                                            disabled: !0
                                        }, a._id))
                                    ]
                                }) : null,
                                x.length ? (0, f.jsx)('div', {
                                    style: {
                                        fontSize: 14,
                                        fontStyle: 'italic',
                                        color: 'rgba(255,255,255,0.8)'
                                    },
                                    children: 'In Gimkit Creative, you can collaborate and play your maps with up to 60 players!'
                                }) : null
                            ]
                        }) : (0, f.jsxs)(_C, {
                            children: [
                                'You haven\'t built any maps yet. Click the',
                                ' ',
                                (0, f.jsx)('b', {
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
                (0, f.jsx)(n.default, {
                    open: A,
                    close: C
                })
            ]
        });
    };
    const _x = g.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = v``)),
        _y = g.default.div.attrs({
            className: 'flex between maxWidth vc'
        })(q || (q = v``)),
        _z = g.default.div(r || (r = v``)),
        _A = g.default.div(s || (s = v`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 3px;
`), k.Fonts.FugazOne),
        _B = g.default.div(t || (t = v`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`)),
        _C = g.default.div.attrs({
            className: 'maxWidth'
        })(u || (u = v`
  border: 2px dashed rgba(255, 255, 255, 0.25);
  padding: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`));
}), c.register('/x6lc', function(d, e) {
    a(d.exports, 'invalidateCreatedMaps', function() {
        return _j;
    }), a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('GmO9j'),
        g = c('quE27'),
        h = c('9IJbB');
    const i = ['creative-created-maps'],
        _j = () => h.default.invalidateQueries(i);
    var _k = () => (0, f.useQuery)(i, () => (0, g.requestAsPromise)({
        url: '/api/created-maps'
    }));
}), c.register('Skuh5', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('aevdF'),
        l = c('AE7vR'),
        m = c('22RS1'),
        n = c('Eh2Wh'),
        o = c('8KqQ+'),
        p = c('quE27'),
        q = c('/x6lc'),
        r = c('t52Ep'),
        s = c('MgONH');
    let t;
    var _u = a => {
        const [v, w, x] = (0, p.useBoolean)(!1), [y, z, A] = (0, p.useBoolean)(!1), [B, C] = g.useState(''), [D, E] = g.useState(''), [F, G, H] = (0, p.useBoolean)(!1), [I, J, K] = (0, p.useBoolean)(!1), [L, M, N] = (0, p.useBoolean)(!1);
        g.useEffect(() => {
            C('');
        }, [v]), g.useEffect(() => {
            E('');
        }, [y]);
        const O = (null == B ? void 0 : B.trim().length) < 2,
            P = () => {
                O || F || (G(), (0, p.request)({
                    url: '/api/created-map/rename',
                    data: {
                        id: a.id,
                        name: B
                    },
                    success: () => {
                        (0, q.invalidateCreatedMaps)();
                    },
                    error: a => {
                        (0, p.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error renaming map'
                            }
                        });
                    },
                    both: () => {
                        x(), H();
                    }
                }));
            },
            Q = D !== a.name;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_v, {
                    onClick: () => {
                        a.disabled || L || (M(), (0, p.request)({
                            url: '/api/matchmaker/intent/map/edit/create',
                            data: {
                                mapId: a.id
                            },
                            success: a => window.location.href = `/host?id=${ a }`,
                            error: a => {
                                (0, p.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error loading into your map. Please try again.'
                                    }
                                });
                            },
                            both: N
                        }));
                    },
                    disabled: a.disabled,
                    children: [
                        (0, f.jsx)('div', {
                            children: a.name
                        }),
                        (0, f.jsx)('div', {
                            onClick: a => a.stopPropagation(),
                            children: (0, f.jsx)(j.default, {
                                menu: {
                                    items: [{
                                            key: `rename-${ a.id }`,
                                            label: 'Rename',
                                            icon: (0, f.jsx)(r.default, {
                                                name: 'far fa-edit'
                                            }),
                                            onClick: a => {
                                                a.domEvent.stopPropagation(), w();
                                            }
                                        },
                                        {
                                            key: `delete-${ a.id }`,
                                            label: 'Delete',
                                            icon: (0, f.jsx)(r.default, {
                                                name: 'far fa-trash-alt'
                                            }),
                                            danger: !0,
                                            onClick: a => {
                                                a.domEvent.stopPropagation(), z();
                                            }
                                        }
                                    ]
                                },
                                children: (0, f.jsx)(i.default, {
                                    icon: (0, f.jsx)(r.default, {
                                        name: 'far fa-ellipsis-h'
                                    }),
                                    type: 'text',
                                    style: {
                                        color: o.default.White
                                    }
                                })
                            })
                        })
                    ]
                }),
                (0, f.jsxs)(l.default, {
                    open: v,
                    onCancel: x,
                    title: 'Rename',
                    footer: [
                        (0, f.jsx)(i.default, {
                            onClick: x,
                            children: 'Cancel'
                        }, 'cancel-rename'),
                        (0, f.jsx)(i.default, {
                            type: 'primary',
                            onClick: P,
                            disabled: O,
                            loading: F,
                            children: 'Rename'
                        }, 'rename-map')
                    ],
                    children: [
                        (0, f.jsxs)(m.default.Text, {
                            children: [
                                'Enter a new name for ',
                                (0, f.jsxs)('b', {
                                    children: [
                                        a.name,
                                        ':'
                                    ]
                                })
                            ]
                        }),
                        (0, f.jsx)(k.default, {
                            value: B,
                            style: {
                                marginTop: 5
                            },
                            placeholder: 'New name...',
                            maxLength: 32,
                            onChange: a => C(a.target.value),
                            onPressEnter: P
                        })
                    ]
                }),
                (0, f.jsxs)(l.default, {
                    open: y,
                    onCancel: A,
                    title: 'Delete Map',
                    footer: [
                        (0, f.jsx)(i.default, {
                            onClick: A,
                            children: 'Cancel'
                        }, 'cancel-delete'),
                        (0, f.jsx)(i.default, {
                            type: 'primary',
                            danger: !0,
                            disabled: Q,
                            onClick: () => {
                                Q || I || (J(), (0, p.request)({
                                    url: '/api/created-map/delete',
                                    data: {
                                        id: a.id
                                    },
                                    success: () => {
                                        (0, q.invalidateCreatedMaps)();
                                    },
                                    error: a => {
                                        (0, p.throwMessageError)({
                                            e: a,
                                            default: {
                                                title: 'Error deleting map'
                                            }
                                        });
                                    },
                                    both: () => {
                                        A(), K();
                                    }
                                }));
                            },
                            loading: I,
                            children: 'Delete Map'
                        }, 'delete-map')
                    ],
                    children: [
                        (0, f.jsxs)(m.default.Text, {
                            children: [
                                'Deleting a map is permanent and cannot be undone. Please enter the name of the map',
                                ' ',
                                (0, f.jsx)('code', {
                                    style: {
                                        userSelect: 'none'
                                    },
                                    children: a.name
                                }),
                                ' to confirm. Note that deleting a map will also remove it from Creative Discovery.'
                            ]
                        }),
                        (0, f.jsx)(k.default, {
                            value: D,
                            style: {
                                marginTop: 10
                            },
                            placeholder: 'Enter map name here ...',
                            maxLength: 32,
                            onChange: a => E(a.target.value)
                        })
                    ]
                })
            ]
        });
    };
    const _v = (0, h.default)(s.VerticallyCentered).attrs({
        className: 'maxWidth between'
    })(t || (t = (a => a)`
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
`), n.FontWeights.Bold, a => a.disabled ? 'not-allowed' : 'pointer');
}), c.register('6oQwW', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('R2nG3'),
        i = c('aevdF'),
        j = c('AE7vR'),
        k = c('E2AMI26'),
        l = c('NmQt6'),
        m = c('O0Kav'),
        n = c('quE27'),
        o = c('/x6lc'),
        p = c('IMf/b4'),
        q = c('u4s09'),
        r = c('Eh2Wh'),
        s = c('pegt5'),
        t = c('UaUBz0'),
        u = c('5Gr2R');
    let v;
    var _w = a => {
        const x = m.useRef(null),
            [y, z] = m.useState(''),
            [A, B] = m.useState(),
            [C, D, E] = (0, n.useBoolean)(!1),
            F = (null == y ? void 0 : y.trim().length) < 2 || !A;
        m.useEffect(() => {
            a.open && setTimeout(() => {
                var G;
                null === (G = x.current) || void 0 === G || G.focus();
            }, 1);
        }, [a.open]);
        const G = () => {
                F || C || (D(), (0, n.request)({
                    url: '/api/created-map/create',
                    data: {
                        name: y,
                        mapStyle: A
                    },
                    success: x => {
                        (0, p.AnalyticsTrackEvent)({
                            event: 'creative_map_created',
                            properties: {
                                mapStyle: A
                            }
                        }), (0, o.invalidateCreatedMaps)(), (0, n.request)({
                            url: '/api/matchmaker/intent/map/edit/create',
                            data: {
                                mapId: x
                            },
                            success: a => window.location.href = `/host?id=${ a }`,
                            both: a.close
                        });
                    },
                    error: a => {
                        (0, n.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error creating map'
                            }
                        });
                    },
                    both: () => {
                        E(), z('');
                    }
                }));
            },
            H = a => {
                B(a);
            };
        return (0, f.jsx)(h.default, {
            theme: {
                algorithm: l.default.darkAlgorithm,
                token: {
                    colorBgBase: '#1C1D57'
                }
            },
            children: (0, f.jsx)(j.default, {
                open: a.open,
                onCancel: a.close,
                width: 668,
                footer: [
                    (0, f.jsx)(g.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-new-map'),
                    (0, f.jsx)(g.default, {
                        type: 'primary',
                        disabled: F,
                        loading: C,
                        onClick: G,
                        children: 'Create'
                    }, 'create-new-map')
                ],
                children: (0, f.jsxs)(k.default, {
                    direction: 'vertical',
                    size: 20,
                    className: 'maxWidth',
                    children: [
                        (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(_x, {
                                    children: 'Map Name'
                                }),
                                (0, f.jsx)(i.default, {
                                    ref: x,
                                    value: y,
                                    onChange: a => {
                                        z(a.target.value);
                                    },
                                    placeholder: 'Enter map name here...',
                                    maxLength: 32,
                                    onPressEnter: G,
                                    size: 'large'
                                })
                            ]
                        }),
                        (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(_x, {
                                    children: 'Map Style'
                                }),
                                (0, f.jsxs)('div', {
                                    className: 'flex',
                                    style: {
                                        flexWrap: 'wrap',
                                        gap: 14,
                                        marginBottom: 3
                                    },
                                    children: [
                                        (0, f.jsx)(s.default, {
                                            image: (0, t.default)('creative/top-down.jpeg'),
                                            name: 'Top-Down',
                                            description: 'Players move in all four directions',
                                            selected: A === u.default.topDown,
                                            onSelect: () => H(u.default.topDown)
                                        }),
                                        (0, f.jsx)(s.default, {
                                            image: (0, t.default)('creative/platformer.jpeg'),
                                            name: 'Platformer',
                                            description: 'Players move left & right, but can also jump',
                                            selected: A === u.default.platformer,
                                            onSelect: () => H(u.default.platformer)
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
    const _x = q.default.div(v || (v = (a => a)`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
`), r.Fonts.FugazOne);
}), c.register('IMf/b4', function(d, e) {
    a(d.exports, 'AnalyticsTrackEvent', function() {
        return _j;
    });
    var f = c('gK+6L'),
        g = c('quE27'),
        h = c('95m0H'),
        i = c('50Ts4');
    const _j = a => {
        var k, l, m;
        if ((window.gtag && !(null === (k = a.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', a.event, a.properties), h.AnalyticsFlags.educatorOnly) && (null === (m = (0, g.getUser)()) || void 0 === m ? void 0 : m.accountType) !== f.default.educator)
            return;
        (null === (l = a.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, i.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('pegt5', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('Eh2Wh'),
        j = c('HOIhZ');
    let k, l, m, n, o, p, q = a => a;
    var _r = a => {
        const {
            image: s,
            name: t,
            description: u
        } = a;
        return (0, f.jsxs)(_s, {
            onClick: a.onSelect,
            style: {
                borderColor: a.selected ? j.default.Yellow : 'rgba(255, 255, 255, 0.1)'
            },
            children: [
                a.tag ? (0, f.jsx)(_v, {
                    children: a.tag
                }) : null,
                (0, f.jsx)(_t, {
                    style: {
                        backgroundImage: `url("${ s }")`
                    }
                }),
                (0, f.jsxs)(_u, {
                    children: [
                        (0, f.jsx)(_w, {
                            children: t
                        }),
                        (0, f.jsx)(_x, {
                            children: u
                        })
                    ]
                })
            ]
        });
    };
    const _s = g.default.div(k || (k = q`
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
        _t = g.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = q`
  height: 132px;
  background-size: cover;
  background-position: center -57px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`)),
        _u = (0, g.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(m || (m = q`
  padding: 10px;
  padding-top: 0px;
`)),
        _v = g.default.div(n || (n = q`
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
`), i.Fonts.FugazOne, j.default.Yellow, j.default.Black),
        _w = g.default.div(o || (o = q`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
`), i.Fonts.FugazOne),
        _x = g.default.div(p || (p = q`
  font-family: ${ 0 };
  font-size: 13px;
  margin-top: -3px;
`), i.Fonts.SFPro);
}), c.register('5Gr2R', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).topDown = 'topDown', g.platformer = 'platformer';
    var _h = f;
}), c.register('C1J2w', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('qMSe6'),
        h = c('R2nG3'),
        i = c('NmQt6');
    c('O0Kav');
    var j = c('FB7HT26'),
        k = c('nKuOQ'),
        l = c('Eh2Wh'),
        m = c('hupyL1'),
        n = c('B/GC10');
    var _o = a => {
        return (0, n.OwnsSeasonTicket)() ? null : (0, f.jsx)(h.default, {
            theme: {
                algorithm: i.default.defaultAlgorithm
            },
            children: (0, f.jsx)(g.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (d = a.marginTop) && void 0 !== d ? d : 0,
                    marginBottom: null !== (c = a.marginBottom) && void 0 !== c ? c : 0
                },
                message: (0, f.jsxs)('span', {
                    children: [
                        a.text,
                        ' with the',
                        ' ',
                        (0, f.jsx)(j.default, {
                            to: k.SEASON_TICKET_BASE,
                            style: {
                                textDecoration: 'underline',
                                fontWeight: l.FontWeights.Bold
                            },
                            children: m.SeasonTicketName.name
                        })
                    ]
                })
            })
        });
        var p, q;
    };
}), c.register('hupyL1', function(d, e) {
    a(d.exports, 'SeasonTicketName', function() {
        return _f;
    }), a(d.exports, 'SeasonTicketSeason', function() {
        return _g;
    });
    const _f = {
            name: 'Season Ticket',
            singularName: 'ticket'
        },
        _g = {
            seasonYear: '2025',
            seasonName: 'Season',
            seasonNumber: '3'
        };
}), c.register('B/GC10', function(d, e) {
    a(d.exports, 'OwnsSeasonTicket', function() {
        return _g;
    });
    var f = c('quE27');
    const _g = () => {
        var h, i, j;
        return null !== (j = null === (h = (0, f.getUser)()) || void 0 === h || null === (i = h.seasonTicket) || void 0 === i ? void 0 : i.active) && void 0 !== j && j;
    };
}), c.register('xo476', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('E2AMI26'),
        h = c('22RS1');
    c('O0Kav');
    var i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('8KqQ+'),
        l = c('t52Ep'),
        m = c('MgONH'),
        n = c('jQPD7');
    let o, p, q = a => a;
    const r = a => (0, f.jsx)('a', {
        href: a.url,
        target: '_blank',
        className: 'maxWidth',
        children: (0, f.jsxs)(_u, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(h.default.Text, {
                                style: {
                                    fontWeight: j.FontWeights.Bold,
                                    color: k.default.White,
                                    textDecoration: 'underline'
                                },
                                children: a.title
                            })
                        }),
                        (0, f.jsx)(h.default.Text, {
                            style: {
                                color: 'rgba(255,255,255,0.8)'
                            },
                            italic: !0,
                            children: a.description
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(h.default.Text, {
                        style: {
                            color: k.default.White
                        },
                        children: (0, f.jsx)(l.default, {
                            name: 'fas fa-external-link'
                        })
                    })
                })
            ]
        })
    });
    var _s = () => (0, f.jsxs)(_t, {
        children: [
            (0, f.jsx)(n.Title, {
                children: 'Resources'
            }),
            (0, f.jsxs)(g.default, {
                size: 10,
                direction: 'vertical',
                className: 'maxWidth',
                style: {
                    marginTop: 10
                },
                children: [
                    (0, f.jsx)(r, {
                        title: 'Changelog',
                        description: 'Read about the latest updates to Gimkit Creative!',
                        url: 'https://docs.creative.gimkit.com/changelog'
                    }),
                    (0, f.jsx)(r, {
                        title: 'Community Forum',
                        description: 'Ask questions and get help building your own maps!',
                        url: 'https://forum.creative.gimkit.com'
                    }),
                    (0, f.jsx)(r, {
                        title: 'Documentation',
                        description: 'Documentation to help you build your own maps.',
                        url: 'https://docs.creative.gimkit.com'
                    })
                ]
            })
        ]
    });
    const _t = i.default.div(o || (o = q``)),
        _u = (0, i.default)(m.VerticallyCentered).attrs({
            className: 'maxWidth'
        })(p || (p = q`
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
}), c.register('mZxOZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    c('9IJbB');
    const h = ['creative-creative-basics'];
    var _i = () => (0, f.useQuery)(h, () => (0, g.requestAsPromise)({
        url: '/api/created-map/basics'
    }));
}), c.register('JNGrh0', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('+pD1R19'),
        g = c('DFnC8'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('PEco5'),
        j = c('T8OqN'),
        k = c('KOz0K'),
        l = 44;

    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var n = h.forwardRef(function(o, p) {
            var q, r = o.classes,
                s = o.className,
                t = o.color,
                _u = void 0 === t ? 'primary' : t,
                v = o.disableShrink,
                w = void 0 !== v && v,
                x = o.size,
                y = void 0 === x ? 40 : x,
                z = o.style,
                A = o.thickness,
                B = void 0 === A ? 3.6 : A,
                C = o.value,
                D = void 0 === C ? 0 : C,
                E = o.variant,
                F = void 0 === E ? 'indeterminate' : E,
                G = (0, g.default)(o, [
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
                H = {},
                I = {},
                J = {};
            if ('determinate' === F || 'static' === F) {
                var K = 2 * Math.PI * ((l - B) / 2);
                H.strokeDasharray = K.toFixed(3), J['aria-valuenow'] = Math.round(D), 'static' === F ? (H.strokeDashoffset = ''.concat(((100 - D) / 100 * K).toFixed(3), 'px'), I.transform = 'rotate(-90deg)') : (H.strokeDashoffset = ''.concat((q = (100 - D) / 100, q * q * K).toFixed(3), 'px'), I.transform = 'rotate('.concat((270 * m(D / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(r.root, s, 'inherit' !== _u && r['color'.concat((0, k.default)(_u))], {
                    indeterminate: r.indeterminate,
                    static: r.static
                } [F]),
                style: (0, f.default)({
                    width: y,
                    height: y
                }, I, z),
                ref: p,
                role: 'progressbar'
            }, J, G), h.createElement('svg', {
                className: r.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(r.circle, w && r.circleDisableShrink, {
                    indeterminate: r.circleIndeterminate,
                    static: r.circleStatic
                } [F]),
                style: H,
                cx: l,
                cy: l,
                r: (l - B) / 2,
                fill: 'none',
                strokeWidth: B
            })));
        }),
        o = (0, j.default)(function(p) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: p.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: p.palette.primary.main
                },
                colorSecondary: {
                    color: p.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: p.transitions.create('stroke-dashoffset')
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
        })(n);
}), c.register('4+WtL', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('1wUUq')).then(() => c('EndGa'));
}), c.register('biMaA', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('3X4Jt')).then(() => c('62MCK'));
}), c.register('rLQJQ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('M2CB57'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('M2CB57', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('+Nyqr7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lzm1Z7'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('lzm1Z7', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('e5xHg25', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('MsxQz'),
        g = c('O0Kav'),
        h = c('R2nG3');

    function _i(j, k, l) {
        return function(m) {
            const {
                prefixCls: n,
                style: o
            } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, {
                value: m.open
            }), {
                getPrefixCls: w
            } = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(y => {
                            const z = y[0].target;
                            r(z.offsetHeight + 8), t(z.offsetWidth);
                        }),
                        z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`,
                                C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), {
                    margin: 0
                }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('kufQf25', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('ZyWBF'),
        g = c('6vEai');
    const h = new(0, f.Keyframes)('antMoveDownIn', {
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
        i = new(0, f.Keyframes)('antMoveDownOut', {
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
        j = new(0, f.Keyframes)('antMoveLeftIn', {
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
        k = new(0, f.Keyframes)('antMoveLeftOut', {
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
        l = new(0, f.Keyframes)('antMoveRightIn', {
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
        m = new(0, f.Keyframes)('antMoveRightOut', {
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
        n = {
            'move-up': {
                inKeyframes: new(0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, f.Keyframes)('antMoveUpOut', {
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
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        },
        _o = (a, d) => {
            const {
                antCls: p
            } = a, q = `${ p }-${ d }`, {
                inKeyframes: r,
                outKeyframes: s
            } = n[d];
            return [
                (0, g.initMotion)(q, r, s, a.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('gS4g327', function(d, e) {
    var f = c('OG3rI27'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('OG3rI27', function(d, e) {
    d.exports = function() {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function() {};
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                g.blur();
                break;
            default:
                g = null;
        }
        return f.removeAllRanges(),
            function() {
                'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function(j) {
                    f.addRange(j);
                }), g && g.focus();
            };
    };
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('ZIYAX24', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function() {
                return window.matchMedia(h);
            }, [h]),
            j = (0, f.useState)(function() {
                return i.matches;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useEffect)(function() {
            l(i.matches);
            var m = function(n) {
                return l(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('d/TAL25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__exportStar || function(h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), g(c('Tn4aA25'), d.exports), g(c('R+vNj25'), d.exports), g(c('5nRuZ25'), d.exports);
}), c.register('Tn4aA25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('5nRuZ25');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('5nRuZ25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__setModuleDefault || (Object.create ? function(h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function(h, i) {
            h.default = i;
        }),
        h = d.exports && d.exports.__importStar || function(i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useWindowSize = void 0;
    var i = h(c('O0Kav'));

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function() {
        var k = i.useState(j()),
            l = k[0],
            m = k[1];
        return i.useLayoutEffect(function() {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n),
                function() {
                    return window.removeEventListener('resize', n);
                };
        }, []), l;
    };
}), c.register('R+vNj25', function(d, e) {
    var f = d.exports && d.exports.__assign || function() {
            return f = Object.assign || function(g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        },
        g = d.exports && d.exports.__createBinding || (Object.create ? function(h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function() {
                    return i[j];
                }
            });
        } : function(h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }),
        h = d.exports && d.exports.__setModuleDefault || (Object.create ? function(i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function(i, j) {
            i.default = j;
        }),
        i = d.exports && d.exports.__importStar || function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useComponentSize = void 0;
    var j = i(c('O0Kav'));
    d.exports.useComponentSize = function() {
        var k = j.useState({
                height: 0,
                width: 0
            }),
            l = k[0],
            m = k[1],
            n = j.useRef(),
            o = j.useCallback(function() {
                if (n.current) {
                    var p = n.current.offsetHeight,
                        q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function() {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current),
                    function() {
                        return p.disconnect();
                    };
            }
        }, [
            n,
            o
        ]), f({
            ref: n
        }, l);
    };
}), c.register('vJWh924', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('LE3I425').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('LE3I425', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('8sxYw24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('2lnmQ24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('2lnmQ24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('JTTlV24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('P++lt24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('P++lt24', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('BA14D', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('+iTmi'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('+iTmi', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
}), c.register('/poDA27', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('mQ0iF27'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('mQ0iF27', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('gWjq2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('Omeih'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EnterOutlined';
    var _k = g.forwardRef(j);
}), c.register('Omeih', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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
}), c.register('AKtTq25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('O0Kav');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : k);
                return (0, f.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, m));
            });
        return l.preload = function() {
            return j || (j = h().then(function(m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('hxyXq25', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1XwWU13'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('1XwWU13', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
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