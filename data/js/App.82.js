function a(a, b, c, y) {
    Object.defineProperty(a, b, {
        get: c,
        set: y,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('oNDfm', function(b, y) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return u;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('laJ/S'),
        h = c('uVDHR'),
        i = c('PjB0f'),
        j = c('0R8EW'),
        k = c('nRYsO'),
        l = c('zZ+yD1'),
        m = c('YimJ0'),
        n = c('fgVTE0'),
        o = c('lmfrI'),
        p = c('h99Nu'),
        q = c('2Hdnb'),
        r = c('p/DNj'),
        s = c('ImHrc1');
    let t;
    var u = () => {
        const [v, w] = f.useState(null), x = (0, i.getUrlVariable)('session_id'), [y, z] = f.useState(!!x), {
            id: A
        } = (0, j.useParams)();
        (0, g.useDidMount)(() => {
            (0, i.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        const B = () => {
            (0, i.isLoggedIn)() || A ? (0, h.Request)({
                url: A ? `/api/billing/season-ticket/info/${ A }` : '/api/billing/season-ticket/info',
                success: v => w(v),
                error: v => (0, i.throwMessageError)({
                    e: v,
                    default: {
                        title: 'Error loading season ticket info',
                        content: 'Please refresh and try again.'
                    },
                    onOk: l.RedirectToHomepage
                })
            }) : (0, l.ReplaceToHomePage)();
        };
        (0, g.useDidMount)(() => {
            x ? (0, i.verifyStripe)({
                sessionId: x,
                onSuccess: () => {
                    z(!1), B();
                },
                onError: v => {
                    (0, i.throwMessageError)({
                        e: v,
                        default: {
                            title: 'Error completion purchase',
                            content: 'Refresh and try again. If the issue persists, please contact support.'
                        },
                        onOk: l.RedirectToHomepage
                    });
                }
            }) : B();
        });
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(i.Title, {
                    title: s.SeasonTicketName.name
                }),
                (0, e.jsx)(v, {
                    children: (0, e.jsx)(r.default, {
                        children: !v || y ? (0, e.jsx)(m.Centered, {
                            className: 'maxAll',
                            children: (0, e.jsx)(n.default, {
                                style: {
                                    color: o.default.White
                                }
                            })
                        }) : v.hasSeasonTicket ? (0, e.jsx)(q.default, {
                            info: v,
                            hasSessionId: !!x,
                            boughtForSelf: !A
                        }) : (0, e.jsx)(k.default, {
                            info: v
                        })
                    })
                })
            ]
        });
    };
    const v = p.default.div(t || (t = (a => a)`
  flex: 1;
  color: ${ 0 };
`), o.default.White);
}), c.register('nRYsO', function(b, n) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('tRI+l'),
        g = c('5Uf1p'),
        h = c('2ezXo'),
        i = c('iYEuk12'),
        j = c('zZ+yD1');
    let k, l, m, n, o, p = a => a;
    var q = a => {
        const r = !a.info.linkId && a.info.firstName;
        return (0, d.jsxs)(r, {
            children: [
                (0, d.jsx)(s, {
                    className: 'flex-center',
                    children: (0, d.jsx)(i.default, {
                        to: (0, j.GetHomepagePath)(),
                        children: (0, d.jsx)(t, {
                            src: '/client/img/svgLogoWhite.svg'
                        })
                    })
                }),
                (0, d.jsx)(u, {
                    children: (0, d.jsx)(h.default, {})
                }),
                (0, d.jsxs)(v, {
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(f.default, {
                                forSelf: !r
                            })
                        }),
                        (0, d.jsx)(g.default, {
                            info: a.info
                        })
                    ]
                })
            ]
        });
    };
    const r = e.default.div.attrs({
            className: 'maxWidth flex-column vc'
        })(k || (k = p`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`)),
        s = e.default.div(l || (l = p`
  margin-bottom: 30px;
`)),
        t = e.default.img(m || (m = p`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`)),
        u = e.default.div(n || (n = p`
  width: 100%;
  max-width: 1200px;
`)),
        v = (0, e.default)(u).attrs({
            className: 'flex'
        })(o || (o = p`
  margin-top: 20px;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 10px;
  }
`));
}), c.register('tRI+l', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('5nJMd26');
    c('uPP4W');
    var f = c('jxnVk'),
        g = c('ImHrc1'),
        h = c('PjB0f'),
        i = c('y8lS825');
    const j = [{
            icon: 'vip',
            title: 'Exclusive Cosmetics',
            description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${ g.SeasonTicketName.singularName }. Cosmetics stay in your Locker after the season ends.`
        },
        {
            icon: 'rise',
            title: 'Increased XP Limit',
            description: 'Weekly XP limit increased to 20,000. Earn more GimBucks and rewards for your learning!'
        },
        {
            icon: 'hammer',
            title: 'Terrains, Props, & Devices',
            description: 'Exclusive access to over 75 terrains, props, and devices to use in your Gimkit Creative maps.'
        },
        {
            icon: 'megaphone',
            title: 'Free Creative Publishing',
            description: `Publish your maps to the world without paying 1,000 ${ i.default.currency }!`
        },
        {
            icon: 'idea',
            title: 'Creative Slots',
            description: 'Store up to 25 maps on your account!'
        },
        {
            icon: 'dog',
            title: 'Play With Friends',
            description: 'Host live games with up to 15 players!',
            show: a => !a || (0, h.isStudent)()
        }
    ];
    var k = a => (0, d.jsx)(e.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: j.filter(b => !b.show || b.show(a.forSelf)).map((a, b) => (0, d.jsx)(f.default, {
            ...a
        }, 'benefit' + b))
    });
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
}), c.register('jxnVk', function(b, d) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('gSUVO'),
        h = c('JJQ0+');
    let i, j, k, l, m, n, o, p = a => a;
    var q = a => (0, d.jsxs)(r, {
        children: [
            (0, d.jsx)(s, {
                children: (0, d.jsx)(t, {
                    src: (0, h.default)(`seasonTicket/${ a.icon }.svg`)
                })
            }),
            (0, d.jsxs)(u, {
                children: [
                    a.tag ? (0, d.jsx)(v, {
                        children: a.tag
                    }) : null,
                    (0, d.jsx)(w, {
                        children: a.title
                    }),
                    (0, d.jsx)(x, {
                        children: a.description
                    })
                ]
            })
        ]
    });
    const r = (0, e.default)(f.VerticalCentered).attrs({
            className: 'maxWidth light-shadow'
        })(i || (i = p`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        s = e.default.div(j || (j = p`
  margin-right: 32px;
`)),
        t = e.default.img(k || (k = p`
  width: 40px;
`)),
        u = e.default.div.attrs({
            className: 'flex-column'
        })(l || (l = p`
  align-items: flex-start;
`)),
        v = e.default.div(m || (m = p`
  font-family: ${ 0 };
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  text-transform: uppercase;
  font-size: 12px;
  padding: 6px 14px 4px 14px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  margin-bottom: 7px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), g.Fonts.FugazOne),
        w = e.default.div(n || (n = p`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), g.Fonts.FugazOne),
        x = e.default.div(o || (o = p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), c.register('YimJ0', function(b, d) {
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
}), c.register('5Uf1p', function(b, v) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('ODKoY'),
        h = c('g6fId'),
        i = c('5nJMd26');
    let j, k, l = a => a;
    var m = a => {
        const n = !a.info.linkId && a.info.firstName;
        return (0, d.jsx)(n, {
            children: (0, d.jsxs)(i.default, {
                direction: 'vertical',
                size: 20,
                className: 'maxWidth',
                children: [
                    (0, d.jsx)(o, {
                        children: (0, d.jsx)(g.default, {
                            info: a.info
                        })
                    }),
                    n ? null : (0, d.jsx)(o, {
                        children: (0, d.jsx)(h.default, {
                            info: a.info
                        })
                    })
                ]
            })
        });
    };
    const n = e.default.div(j || (j = l`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`)),
        o = e.default.div.attrs({
            className: 'medium-shadow'
        })(k || (k = l`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${ 0 };
  padding: 35px;
  border-radius: 8px;
`), f.default.Black);
}), c.register('ODKoY', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('zgQWX27'),
        f = c('IsmrL'),
        g = c('5nJMd26');
    c('uPP4W');
    var h = c('h99Nu'),
        i = c('PjB0f'),
        j = c('gSUVO'),
        k = c('uVDHR'),
        l = c('mIF0p'),
        m = c('0R8EW'),
        n = c('ImHrc1'),
        o = c('uHmrc');
    let p, q, r = a => a;
    var s = a => {
        const [t, u, v] = (0, i.useBoolean)(!1), {
            info: w
        } = x, {
            id: y
        } = (0, m.useParams)(), z = !w.linkId && w.firstName, A = x => {
            (0, i.throwMessageError)({
                e: x,
                default: {
                    title: 'There was an error connecting with our payments provider.',
                    content: 'Please try again.'
                }
            }), v();
        };
        return (0, d.jsxs)(t, {
            children: [
                (0, d.jsxs)(g.default, {
                    direction: 'vertical',
                    size: 12,
                    style: {
                        fontFamily: j.Fonts.SFPro,
                        fontSize: 16
                    },
                    children: [
                        z ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)(u, {
                                children: [
                                    'You are purchasing a Gimkit ',
                                    n.SeasonTicketName.name,
                                    ' for',
                                    ' ',
                                    (0, d.jsxs)('b', {
                                        children: [
                                            w.firstName,
                                            '.'
                                        ]
                                    })
                                ]
                            })
                        }) : null,
                        (0, d.jsxs)(u, {
                            children: [
                                'The ',
                                n.SeasonTicketName.name,
                                ' is not a subscription.',
                                ' ',
                                (0, d.jsx)('b', {
                                    children: 'You will only be charged once.'
                                })
                            ]
                        }),
                        (0, d.jsxs)(u, {
                            children: [
                                'Includes access to all the ',
                                n.SeasonTicketName.name,
                                ' benefits until the end of the season on ',
                                o.SEASON_TICKET_END_DATE,
                                '.'
                            ]
                        })
                    ]
                }),
                (0, d.jsxs)(f.default, {
                    style: {
                        height: 65,
                        marginTop: 15
                    },
                    size: 'large',
                    block: !0,
                    icon: (0, d.jsx)(e.default, {}),
                    type: 'primary',
                    loading: t,
                    onClick: () => {
                        u(), (0, k.Request)({
                            url: '/api/billing/stripe-key',
                            success: async x => {
                                let B;
                                B = await (0, l.loadStripe)(x.key), (0, k.Request)({
                                    url: '/api/billing/create-season-ticket-session',
                                    method: 'POST',
                                    data: y ? {
                                        encryptedUserId: y
                                    } : void 0,
                                    success: async x => {
                                        await B.redirectToCheckout({
                                            sessionId: x.id
                                        }).catch(x => A(x));
                                    },
                                    error: x => {
                                        A(x);
                                    }
                                });
                            },
                            error: x => {
                                A(x);
                            }
                        });
                    },
                    children: [
                        'Purchase ',
                        n.SeasonTicketName.name,
                        ' - $5.00'
                    ]
                })
            ]
        });
    };
    const t = h.default.div(p || (p = r``)),
        u = h.default.div(q || (q = r``));
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
}), c.register('mIF0p', function(b, c) {
    a(b.exports, 'loadStripe', function() {
        return l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(a) {
            return null !== g || (g = new Promise(function(b, c) {
                if ('undefined' != typeof window)
                    if (window.Stripe && a && console.warn(f), window.Stripe)
                        b(window.Stripe);
                    else
                        try {
                            var i = function() {
                                for (var j = document.querySelectorAll('script[src^="'.concat(d, '"]')), k = 0; k < j.length; k++) {
                                    var l = j[k];
                                    if (e.test(l.src))
                                        return l;
                                }
                                return null;
                            }();
                            i && a ? console.warn(f) : i || (i = function(a) {
                                var j = a && !a.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    k = document.createElement('script');
                                k.src = ''.concat(d).concat(j);
                                var l = document.head || document.body;
                                if (!l)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return l.appendChild(k), k;
                            }(a)), i.addEventListener('load', function() {
                                window.Stripe ? b(window.Stripe) : c(new Error('Stripe.js not available'));
                            }), i.addEventListener('error', function() {
                                c(new Error('Failed to load Stripe.js'));
                            });
                        } catch (a) {
                            return void c(a);
                        }
                else
                    b(null);
            })), g;
        },
        i = function(a, b, c) {
            if (null === a)
                return null;
            var j = a.apply(void 0, b);
            return function(a, b) {
                a && a._registerWrapper && a._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: b
                });
            }(j, c), j;
        },
        j = Promise.resolve().then(function() {
            return h(null);
        }),
        k = !1;
    j.catch(function(a) {
        k || console.warn(a);
    });
    var l = function() {
        for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
            n[o] = arguments[o];
        k = !0;
        var p = Date.now();
        return j.then(function(m) {
            return i(m, n, p);
        });
    };
}), c.register('uHmrc', function(b, c) {
    a(b.exports, 'SEASON_TICKET_END_DATE', function() {
        return d;
    });
    const d = 'August 20th';
}), c.register('g6fId', function(d, e) {
    a(d.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('c6x8w'),
        g = c('jrTkz0'),
        h = c('SlNZ027');
    c('uPP4W');
    var i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('ImHrc1');
    let l;
    var m = a => {
        const n = `${ (0, j.getDomain)() }/season-ticket/${ a.info.linkId }`;
        return (0, d.jsxs)(n, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        'Need somebody else to pay for your ',
                        k.SeasonTicketName.singularName,
                        '? Send this link to them and they can purchase the ',
                        k.SeasonTicketName.name,
                        ' for you!'
                    ]
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        gap: 6,
                        marginTop: 12
                    },
                    children: [
                        (0, d.jsx)(f.default, {
                            value: n,
                            readOnly: !0
                        }),
                        (0, d.jsx)(e.default, {
                            onClick: () => {
                                b(h)(n), g.default.success('Link copied to clipboard!');
                            },
                            type: 'primary',
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
    const n = i.default.div(l || (l = (a => a)`
  font-size: 15px;
`));
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
}), c.register('2ezXo', function(b, n) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('ImHrc1');
    let h, i, j, k = a => a;
    var l = () => (0, d.jsxs)(m, {
        children: [
            (0, d.jsxs)(n, {
                children: [
                    g.SeasonTicketSeason.seasonName,
                    ' ',
                    g.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, d.jsx)(o, {
                children: g.SeasonTicketName.name
            })
        ]
    });
    const m = e.default.div(h || (h = k`
  font-family: ${ 0 };
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`), f.Fonts.FugazOne),
        n = e.default.div(i || (i = k`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        o = e.default.div(j || (j = k`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`));
}), c.register('iYEuk12', function(b, n) {
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
}), c.register('zZ+yD1', function(b, n) {
    a(b.exports, 'GetHomepagePath', function() {
        return h;
    }), a(b.exports, 'RedirectToHomepage', function() {
        return i;
    }), a(b.exports, 'ReplaceToHomePage', function() {
        return j;
    });
    var d = c('q721a'),
        e = c('Cr/BM'),
        f = c('PjB0f'),
        g = c('k0s2g17');
    const h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        i = () => {
            (0, g.NavigateTo)(h());
        },
        j = () => {
            e.history.replace(h());
        };
}), c.register('k0s2g17', function(b, n) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
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
}), c.register('2Hdnb', function(b, n) {
    a(b.exports, 'default', function() {
        return A;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('YimJ0'),
        h = c('gSUVO'),
        i = c('xV8Fm'),
        j = c('Dog9Y'),
        k = c('iYEuk12'),
        l = c('PjB0f'),
        m = c('q721a'),
        n = c('I9mdQ'),
        o = c('ImHrc1'),
        p = c('70zaw');
    let q, r, s, t, u, v, w, x, y, z = a => a;
    var A = a => (e.useEffect(() => {
        var B, C;
        a.boughtForSelf && (0, l.isLoggedIn)() && !(null === (B = (0, l.getUser)()) || void 0 === B || null === (C = B.seasonTicket) || void 0 === C ? void 0 : C.viewed) && (0, n.default)({});
    }, [a.boughtForSelf]), (0, d.jsxs)(B, {
        children: [
            (0, d.jsx)(C, {
                children: (0, d.jsxs)(D, {
                    children: [
                        (0, d.jsx)(E, {
                            children: (0, d.jsx)(F, {
                                src: p.SEASON_TICKET_TICKET_IMAGE
                            })
                        }),
                        (0, d.jsxs)(G, {
                            children: [
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontFamily: h.Fonts.FugazOne,
                                        textTransform: 'uppercase'
                                    },
                                    children: [
                                        (0, d.jsx)(H, {
                                            children: o.SeasonTicketName.name
                                        }),
                                        (0, d.jsxs)(I, {
                                            children: [
                                                a.hasSessionId ? 'Purchased' : 'Activated',
                                                '!'
                                            ]
                                        })
                                    ]
                                }),
                                (0, d.jsx)(J, {
                                    children: a.boughtForSelf ? (0, d.jsx)(d.Fragment, {
                                        children: 'Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!'
                                    }) : (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            (0, d.jsx)('b', {
                                                children: a.info.firstName
                                            }),
                                            ' now has access to all Season Ticket benefits. Thanks for your support!'
                                        ]
                                    })
                                }),
                                (0, l.isLoggedIn)() ? (0, d.jsx)('div', {
                                    style: {
                                        marginTop: 25
                                    },
                                    children: (0, d.jsx)(k.default, {
                                        to: m.COSMOS_BASE + '/locker',
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: (0, d.jsx)(j.default, {
                                            type: 'success',
                                            customFontWeight: h.FontWeights.Bold,
                                            ariaLabel: 'Continue',
                                            children: 'Continue'
                                        })
                                    })
                                }) : null
                            ]
                        })
                    ]
                })
            }),
            (0, d.jsx)(i.default, {})
        ]
    }));
    const B = (0, f.default)(g.Centered).attrs({
            className: 'maxAll'
        })(q || (q = z`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`)),
        C = f.default.div.attrs({
            className: 'animated bounceIn'
        })(r || (r = z`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`)),
        D = (0, f.default)(g.Centered)(s || (s = z`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`)),
        E = f.default.div(t || (t = z``)),
        F = f.default.img(u || (u = z`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`)),
        G = f.default.div(v || (v = z``)),
        H = f.default.div(w || (w = z`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`)),
        I = f.default.div(x || (x = z`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`)),
        J = f.default.div(y || (y = z`
  font-size: 18px;
  max-width: 400px;
`));
}), c.register('xV8Fm', function(b, n) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('4GmKU');
    let g;
    const h = {
            intensity: 13,
            acceleration: 1.01,
            brightness: {
                min: 50,
                max: 80
            },
            autoresize: !0,
            flickering: 0,
            traceSpeed: 1,
            explosion: 5,
            particles: 60,
            rocketsPoint: {
                min: 0,
                max: 100
            }
        },
        i = {
            width: '100%',
            height: '100%'
        };
    var j = () => !!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? null : (0, d.jsx)(k, {
        children: (0, d.jsx)(f.Fireworks, {
            options: h,
            style: i
        })
    });
    const k = e.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(g || (g = (a => a)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
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
}), c.register('70zaw', function(b, n) {
    a(b.exports, 'SEASON_TICKET_TICKET_IMAGE', function() {
        return d;
    });
    const d = (0, c('JJQ0+').default)('stickers/season_3_2025.png');
}), c.register('p/DNj', function(b, n) {
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
    background: #4527a0;
    background: linear-gradient(304deg, #4527a0, #2d1a68);
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
    transform: rotate(180deg); // Make the circles go the other way
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
        k = e.default.div.attrs({
            className: 'flex-column'
        })(g || (g = h`
  z-index: 1;
  flex: 1;
`));
});