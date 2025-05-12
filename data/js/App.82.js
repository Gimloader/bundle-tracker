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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _w;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v;
    var _w = () => {
        const [x, y] = h.useState(null), z = (0, k.getUrlVariable)('session_id'), [A, B] = h.useState(!!z), {id: C} = (0, l.useParams)();
        (0, i.useDidMount)(() => {
            (0, k.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        const D = () => {
            (0, k.isLoggedIn)() || C ? (0, j.Request)({
                url: C ? `/api/billing/season-ticket/info/${ C }` : '/api/billing/season-ticket/info',
                success: E => y(E),
                error: E => (0, k.throwMessageError)({
                    e: E,
                    default: {
                        title: 'Error loading season ticket info',
                        content: 'Please refresh and try again.'
                    },
                    onOk: n.RedirectToHomepage
                })
            }) : (0, n.ReplaceToHomePage)();
        };
        (0, i.useDidMount)(() => {
            z ? (0, k.verifyStripe)({
                sessionId: z,
                onSuccess: () => {
                    B(!1), D();
                },
                onError: E => {
                    (0, k.throwMessageError)({
                        e: E,
                        default: {
                            title: 'Error completion purchase',
                            content: 'Refresh and try again. If the issue persists, please contact support.'
                        },
                        onOk: n.RedirectToHomepage
                    });
                }
            }) : D();
        });
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(k.Title, { title: u.SeasonTicketName.name }),
                (0, g.jsx)(_x, {
                    children: (0, g.jsx)(t.default, {
                        children: !x || A ? (0, g.jsx)(o.Centered, {
                            className: 'maxAll',
                            children: (0, g.jsx)(p.default, { style: { color: q.default.White } })
                        }) : x.hasSeasonTicket ? (0, g.jsx)(s.default, {
                            info: x,
                            hasSessionId: !!z,
                            boughtForSelf: !C
                        }) : (0, g.jsx)(m.default, { info: x })
                    })
                })
            ]
        });
    };
    const _x = r.default.div(v || (v = (y => y)`
  flex: 1;
  color: ${ 0 };
`), q.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, o, p, q, r = s => s;
    var _s = t => {
        const u = !t.info.linkId && t.info.firstName;
        return (0, f.jsxs)(_t, {
            children: [
                (0, f.jsx)(_u, {
                    className: 'flex-center',
                    children: (0, f.jsx)(k.default, {
                        to: (0, l.GetHomepagePath)(),
                        children: (0, f.jsx)(_v, { src: '/client/img/svgLogoWhite.svg' })
                    })
                }),
                (0, f.jsx)(_w, { children: (0, f.jsx)(j.default, {}) }),
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)('div', { children: (0, f.jsx)(h.default, { forSelf: !u }) }),
                        (0, f.jsx)(i.default, { info: t.info })
                    ]
                })
            ]
        });
    };
    const _t = g.default.div.attrs({ className: 'maxWidth flex-column vc' })(m || (m = r`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`)), _u = g.default.div(n || (n = r`
  margin-bottom: 30px;
`)), _v = g.default.img(o || (o = r`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`)), _w = g.default.div(p || (p = r`
  width: 100%;
  max-width: 1200px;
`)), _x = (0, g.default)(_w).attrs({ className: 'flex' })(q || (q = r`
  margin-top: 20px;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 10px;
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = [
        {
            icon: 'vip',
            title: 'Exclusive Cosmetics',
            description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${ i.SeasonTicketName.singularName }. Cosmetics stay in your Locker after the season ends.`
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
            description: `Publish your maps to the world without paying 1,000 ${ k.default.currency }!`
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
            show: m => !m || (0, j.isStudent)()
        }
    ];
    var _m = n => (0, f.jsx)(g.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: l.filter(o => !o.show || o.show(n.forSelf)).map((o, p) => (0, f.jsx)(h.default, { ...o }, 'benefit' + p))
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'SpaceContext', function () {
        return _o;
    }, function (f) {
        return _o = f;
    }), a(d.exports, 'default', function () {
        return _r;
    }, function (f) {
        return _r = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
        }), p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = r => {
        const {
                getPrefixCls: s,
                space: t,
                direction: u
            } = h.useContext(i.ConfigContext), {
                size: v = (null == t ? void 0 : t.size) || 'small',
                align: w,
                className: x,
                rootClassName: y,
                children: z,
                direction: A = 'horizontal',
                prefixCls: B,
                split: C,
                style: D,
                wrap: E = !1
            } = r, F = n(r, [
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
            ]), G = (0, j.default)(), [H, I] = h.useMemo(() => (Array.isArray(v) ? v : [
                v,
                v
            ]).map(J => function (K) {
                return 'string' == typeof K ? p[K] : K || 0;
            }(J)), [v]), J = (0, g.default)(z, { keepEmpty: !0 }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, m.default)(L), O = b(f)(L, N, `${ L }-${ A }`, {
                [`${ L }-rtl`]: 'rtl' === u,
                [`${ L }-align-${ K }`]: K
            }, x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((T, U) => {
                null != T && (R = U);
                const V = T && T.key || `${ P }-${ U }`;
                return h.createElement(l.default, {
                    className: P,
                    key: V,
                    direction: A,
                    index: U,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, T);
            }), T = h.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(h.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), h.createElement(_o.Provider, { value: T }, S)));
    };
    q.Compact = k.default;
    var _r = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....'), _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
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
        return t || ('vertical' === k ? l < s && (u = { marginBottom: q / (o ? 2 : 1) }) : u = Object.assign(Object.assign({}, l < s && { [m]: q / (o ? 2 : 1) }), p && { paddingBottom: r })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n, o, p, q, r = s => s;
    var _s = t => (0, f.jsxs)(_t, {
        children: [
            (0, f.jsx)(_u, { children: (0, f.jsx)(_v, { src: (0, j.default)(`seasonTicket/${ t.icon }.svg`) }) }),
            (0, f.jsxs)(_w, {
                children: [
                    t.tag ? (0, f.jsx)(_x, { children: t.tag }) : null,
                    (0, f.jsx)(_y, { children: t.title }),
                    (0, f.jsx)(_z, { children: t.description })
                ]
            })
        ]
    });
    const _t = (0, g.default)(h.VerticalCentered).attrs({ className: 'maxWidth light-shadow' })(k || (k = r`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)), _u = g.default.div(l || (l = r`
  margin-right: 32px;
`)), _v = g.default.img(m || (m = r`
  width: 40px;
`)), _w = g.default.div.attrs({ className: 'flex-column' })(n || (n = r`
  align-items: flex-start;
`)), _x = g.default.div(o || (o = r`
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
`), i.Fonts.FugazOne), _y = g.default.div(p || (p = r`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), i.Fonts.FugazOne), _z = g.default.div(q || (q = r`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'Centered', function () {
        return _l;
    }), a(d.exports, 'VerticallyCentered', function () {
        return _m;
    }), a(d.exports, 'CenteredColumn', function () {
        return _n;
    }), a(d.exports, 'VerticalCentered', function () {
        return _o;
    });
    var f = c('.....');
    let g, h, i, j, k = l => l;
    const _l = f.default.div.attrs({ className: 'flex-center' })(g || (g = k``)), _m = f.default.div.attrs({ className: 'flex vc' })(h || (h = k``)), _n = (0, f.default)(_l).attrs({ className: 'flex-column' })(i || (i = k``)), _o = f.default.div.attrs({ className: 'flex vc' })(j || (j = k``));
}), c.register('.....', function (d, e) {
    let f;
    a(d.exports, 'default', function () {
        return _g;
    });
    var _g = h => {
        const i = (() => {
            var j;
            if (f)
                return f;
            const k = null === (j = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === j ? void 0 : j.getAttribute('content');
            return void 0 !== k && '$CDN_MAP_ASSETS_URL' !== k ? (f = k, f) : '';
        })();
        return h.startsWith('/assets/map') ? `${ i }${ h }` : `${ i }/assets/map/${ h }`;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SeasonTicketName', function () {
        return _f;
    }), a(d.exports, 'SeasonTicketSeason', function () {
        return _g;
    });
    const _f = {
            name: 'Season Ticket',
            singularName: 'ticket'
        }, _g = {
            seasonYear: '2025',
            seasonName: 'Season',
            seasonNumber: '3'
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    var _o = p => {
        const q = !p.info.linkId && p.info.firstName;
        return (0, f.jsx)(_p, {
            children: (0, f.jsxs)(k.default, {
                direction: 'vertical',
                size: 20,
                className: 'maxWidth',
                children: [
                    (0, f.jsx)(_q, { children: (0, f.jsx)(i.default, { info: p.info }) }),
                    q ? null : (0, f.jsx)(_q, { children: (0, f.jsx)(j.default, { info: p.info }) })
                ]
            })
        });
    };
    const _p = g.default.div(l || (l = n`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`)), _q = g.default.div.attrs({ className: 'medium-shadow' })(m || (m = n`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${ 0 };
  padding: 35px;
  border-radius: 8px;
`), h.default.Black);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r, s, t = u => u;
    var _u = v => {
        const [w, x, y] = (0, k.useBoolean)(!1), {info: z} = v, {id: A} = (0, o.useParams)(), B = !z.linkId && z.firstName, C = D => {
                (0, k.throwMessageError)({
                    e: D,
                    default: {
                        title: 'There was an error connecting with our payments provider.',
                        content: 'Please try again.'
                    }
                }), y();
            };
        return (0, f.jsxs)(_v, {
            children: [
                (0, f.jsxs)(i.default, {
                    direction: 'vertical',
                    size: 12,
                    style: {
                        fontFamily: l.Fonts.SFPro,
                        fontSize: 16
                    },
                    children: [
                        B ? (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsxs)(_w, {
                                children: [
                                    'You are purchasing a Gimkit ',
                                    p.SeasonTicketName.name,
                                    ' for',
                                    ' ',
                                    (0, f.jsxs)('b', {
                                        children: [
                                            z.firstName,
                                            '.'
                                        ]
                                    })
                                ]
                            })
                        }) : null,
                        (0, f.jsxs)(_w, {
                            children: [
                                'The ',
                                p.SeasonTicketName.name,
                                ' is not a subscription.',
                                ' ',
                                (0, f.jsx)('b', { children: 'You will only be charged once.' })
                            ]
                        }),
                        (0, f.jsxs)(_w, {
                            children: [
                                'Includes access to all the ',
                                p.SeasonTicketName.name,
                                ' benefits until the end of the season on ',
                                q.SEASON_TICKET_END_DATE,
                                '.'
                            ]
                        })
                    ]
                }),
                (0, f.jsxs)(h.default, {
                    style: {
                        height: 65,
                        marginTop: 15
                    },
                    size: 'large',
                    block: !0,
                    icon: (0, f.jsx)(g.default, {}),
                    type: 'primary',
                    loading: w,
                    onClick: () => {
                        x(), (0, m.Request)({
                            url: '/api/billing/stripe-key',
                            success: async D => {
                                let E;
                                E = await (0, n.loadStripe)(D.key), (0, m.Request)({
                                    url: '/api/billing/create-season-ticket-session',
                                    method: 'POST',
                                    data: A ? { encryptedUserId: A } : void 0,
                                    success: async F => {
                                        await E.redirectToCheckout({ sessionId: F.id }).catch(G => C(G));
                                    },
                                    error: F => {
                                        C(F);
                                    }
                                });
                            },
                            error: D => {
                                C(D);
                            }
                        });
                    },
                    children: [
                        'Purchase ',
                        p.SeasonTicketName.name,
                        ' - $5.00'
                    ]
                })
            ]
        });
    };
    const _v = j.default.div(r || (r = t``)), _w = j.default.div(s || (s = t``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z' }
                }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'loadStripe', function () {
        return _n;
    });
    var f = 'https://js.stripe.com/v3', g = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, h = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used', i = null, j = function (k) {
            return null !== i || (i = new Promise(function (l, m) {
                if ('undefined' != typeof window)
                    if (window.Stripe && k && console.warn(h), window.Stripe)
                        l(window.Stripe);
                    else
                        try {
                            var n = function () {
                                for (var o = document.querySelectorAll('script[src^="'.concat(f, '"]')), p = 0; p < o.length; p++) {
                                    var q = o[p];
                                    if (g.test(q.src))
                                        return q;
                                }
                                return null;
                            }();
                            n && k ? console.warn(h) : n || (n = function (o) {
                                var p = o && !o.advancedFraudSignals ? '?advancedFraudSignals=false' : '', q = document.createElement('script');
                                q.src = ''.concat(f).concat(p);
                                var r = document.head || document.body;
                                if (!r)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return r.appendChild(q), q;
                            }(k)), n.addEventListener('load', function () {
                                window.Stripe ? l(window.Stripe) : m(new Error('Stripe.js not available'));
                            }), n.addEventListener('error', function () {
                                m(new Error('Failed to load Stripe.js'));
                            });
                        } catch (k) {
                            return void m(k);
                        }
                else
                    l(null);
            })), i;
        }, k = function (l, m, n) {
            if (null === l)
                return null;
            var o = l.apply(void 0, m);
            return function (p, q) {
                p && p._registerWrapper && p._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: q
                });
            }(o, n), o;
        }, l = Promise.resolve().then(function () {
            return j(null);
        }), m = !1;
    l.catch(function (n) {
        m || console.warn(n);
    });
    var _n = function () {
        for (var o = arguments.length, p = new Array(o), q = 0; q < o; q++)
            p[q] = arguments[q];
        m = !0;
        var r = Date.now();
        return l.then(function (s) {
            return k(s, p, r);
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SEASON_TICKET_END_DATE', function () {
        return _f;
    });
    const _f = 'August 20th';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    c('.....');
    var k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    var _o = p => {
        const q = `${ (0, l.getDomain)() }/season-ticket/${ p.info.linkId }`;
        return (0, f.jsxs)(_p, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        'Need somebody else to pay for your ',
                        m.SeasonTicketName.singularName,
                        '? Send this link to them and they can purchase the ',
                        m.SeasonTicketName.name,
                        ' for you!'
                    ]
                }),
                (0, f.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        gap: 6,
                        marginTop: 12
                    },
                    children: [
                        (0, f.jsx)(h.default, {
                            value: q,
                            readOnly: !0
                        }),
                        (0, f.jsx)(g.default, {
                            onClick: () => {
                                b(j)(q), i.default.success('Link copied to clipboard!');
                            },
                            type: 'primary',
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
    const _p = k.default.div(n || (n = (q => q)`
  font-size: 15px;
`));
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function (h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function (q) {
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
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function (q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('.....', function (d, e) {
    d.exports = function () {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function () {
            };
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
        return f.removeAllRanges(), function () {
            'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function (j) {
                f.addRange(j);
            }), g && g.focus();
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l, m = n => n;
    var _n = () => (0, f.jsxs)(_o, {
        children: [
            (0, f.jsxs)(_p, {
                children: [
                    i.SeasonTicketSeason.seasonName,
                    ' ',
                    i.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, f.jsx)(_q, { children: i.SeasonTicketName.name })
        ]
    });
    const _o = g.default.div(j || (j = m`
  font-family: ${ 0 };
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`), h.Fonts.FugazOne), _p = g.default.div(k || (k = m`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)), _q = g.default.div(l || (l = m`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var _h = i => i.external || !i.to ? (0, f.jsx)('a', {
        href: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        onKeyPress: j => {
            i.onClick && 'Enter' === j.key && (j.preventDefault(), i.onClick());
        },
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    }) : (0, f.jsx)(g.Link, {
        to: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetHomepagePath', function () {
        return _j;
    }), a(d.exports, 'RedirectToHomepage', function () {
        return _k;
    }), a(d.exports, 'ReplaceToHomePage', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = () => (0, h.isLoggedIn)() ? (0, h.isStudent)() ? f.HOME : f.KITS : '/', _k = () => {
            (0, i.NavigateTo)(_j());
        }, _l = () => {
            g.history.replace(_j());
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'NavigateTo', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = 44;
    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var q = h.forwardRef(function (r, s) {
            var t, u = r.classes, v = r.className, w = r.color, x = void 0 === w ? 'primary' : w, y = r.disableShrink, z = void 0 !== y && y, A = r.size, B = void 0 === A ? 40 : A, C = r.style, D = r.thickness, E = void 0 === D ? 3.6 : D, F = r.value, G = void 0 === F ? 0 : F, H = r.variant, I = void 0 === H ? 'indeterminate' : H, J = (0, g.default)(r, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]), K = {}, L = {}, M = {};
            if ('determinate' === I || 'static' === I) {
                var N = 2 * Math.PI * ((l - E) / 2);
                K.strokeDasharray = N.toFixed(3), M['aria-valuenow'] = Math.round(G), 'static' === I ? (K.strokeDashoffset = ''.concat(((100 - G) / 100 * N).toFixed(3), 'px'), L.transform = 'rotate(-90deg)') : (K.strokeDashoffset = ''.concat((t = (100 - G) / 100, t * t * N).toFixed(3), 'px'), L.transform = 'rotate('.concat((270 * m(G / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(u.root, v, 'inherit' !== x && u['color'.concat((0, k.default)(x))], {
                    indeterminate: u.indeterminate,
                    static: u.static
                }[I]),
                style: (0, f.default)({
                    width: B,
                    height: B
                }, L, C),
                ref: s,
                role: 'progressbar'
            }, M, J), h.createElement('svg', {
                className: u.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(u.circle, z && u.circleDisableShrink, {
                    indeterminate: u.circleIndeterminate,
                    static: u.circleStatic
                }[I]),
                style: K,
                cx: l,
                cy: l,
                r: (l - E) / 2,
                fill: 'none',
                strokeWidth: E
            })));
        }), _r = (0, j.default)(function (s) {
            return {
                root: { display: 'inline-block' },
                static: { transition: s.transitions.create('transform') },
                indeterminate: { animation: '$circular-rotate 1.4s linear infinite' },
                colorPrimary: { color: s.palette.primary.main },
                colorSecondary: { color: s.palette.secondary.main },
                svg: { display: 'block' },
                circle: { stroke: 'currentColor' },
                circleStatic: { transition: s.transitions.create('stroke-dashoffset') },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': { transformOrigin: '50% 50%' },
                    '100%': { transform: 'rotate(360deg)' }
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
                circleDisableShrink: { animation: 'none' }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(q);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _C;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s, t, u, v, w, x, y, z, A, B = C => C;
    var _C = D => (g.useEffect(() => {
        var E, F;
        D.boughtForSelf && (0, n.isLoggedIn)() && !(null === (E = (0, n.getUser)()) || void 0 === E || null === (F = E.seasonTicket) || void 0 === F ? void 0 : F.viewed) && (0, p.default)({});
    }, [D.boughtForSelf]), (0, f.jsxs)(_D, {
        children: [
            (0, f.jsx)(_E, {
                children: (0, f.jsxs)(_F, {
                    children: [
                        (0, f.jsx)(_G, { children: (0, f.jsx)(_H, { src: r.SEASON_TICKET_TICKET_IMAGE }) }),
                        (0, f.jsxs)(_I, {
                            children: [
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontFamily: j.Fonts.FugazOne,
                                        textTransform: 'uppercase'
                                    },
                                    children: [
                                        (0, f.jsx)(_J, { children: q.SeasonTicketName.name }),
                                        (0, f.jsxs)(_K, {
                                            children: [
                                                D.hasSessionId ? 'Purchased' : 'Activated',
                                                '!'
                                            ]
                                        })
                                    ]
                                }),
                                (0, f.jsx)(_L, {
                                    children: D.boughtForSelf ? (0, f.jsx)(f.Fragment, { children: 'Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!' }) : (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)('b', { children: D.info.firstName }),
                                            ' now has access to all Season Ticket benefits. Thanks for your support!'
                                        ]
                                    })
                                }),
                                (0, n.isLoggedIn)() ? (0, f.jsx)('div', {
                                    style: { marginTop: 25 },
                                    children: (0, f.jsx)(m.default, {
                                        to: o.COSMOS_BASE + '/locker',
                                        style: { textDecoration: 'none' },
                                        children: (0, f.jsx)(l.default, {
                                            type: 'success',
                                            customFontWeight: j.FontWeights.Bold,
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
            (0, f.jsx)(k.default, {})
        ]
    }));
    const _D = (0, h.default)(i.Centered).attrs({ className: 'maxAll' })(s || (s = B`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`)), _E = h.default.div.attrs({ className: 'animated bounceIn' })(t || (t = B`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`)), _F = (0, h.default)(i.Centered)(u || (u = B`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`)), _G = h.default.div(v || (v = B``)), _H = h.default.img(w || (w = B`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`)), _I = h.default.div(x || (x = B``)), _J = h.default.div(y || (y = B`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`)), _K = h.default.div(z || (z = B`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`)), _L = h.default.div(A || (A = B`
  font-size: 18px;
  max-width: 400px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    const j = {
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
        }, k = {
            width: '100%',
            height: '100%'
        };
    var _l = () => !!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? null : (0, f.jsx)(_m, {
        children: (0, f.jsx)(h.Fireworks, {
            options: j,
            style: k
        })
    });
    const _m = g.default.div.attrs({ className: 'maxWidth maxHeight' })(i || (i = (n => n)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    var _m = n => {
        const o = n.size || 'default', p = h.useMemo(() => n.customColor ? n.customColor : n.disabled ? '#546e7a' : 'success' === n.type ? '#2e7d32' : 'danger' === n.type ? '#c62828' : '#3f51b5', [
                n.disabled,
                n.type,
                n.customColor
            ]), q = h.useMemo(() => (0, g.darken)(0.1, p), [p]), r = h.useMemo(() => 'small' === o || 'default' === o ? 14 : 20, [o]), s = h.useMemo(() => 'small' === o ? 6 : 'default' === o ? 8 : 12, [o]), t = h.useMemo(() => {
                const u = 'small' === o ? '8px' : '12px';
                return n.customHorizontalPadding ? `${ u } ${ n.customHorizontalPadding }px` : 'small' === o ? `${ u } 24px` : 'default' === o ? `${ u } 28px` : `${ u } 42px`;
            }, [
                o,
                n.customHorizontalPadding
            ]), u = h.useMemo(() => 'small' === o ? 41 : 49, [o]), v = h.useMemo(() => n.customFontWeight ? n.customFontWeight : 'large' === o ? j.FontWeights.Bold : j.FontWeights.Normal, [
                n.customFontWeight,
                o
            ]), w = () => {
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
                        style: { borderRadius: s }
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
    const _n = i.default.div.attrs({ className: 'flex' })(l || (l = (o => o)`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SEASON_TICKET_TICKET_IMAGE', function () {
        return _f;
    });
    const _f = (0, c('.....').default)('stickers/season_3_2025.png');
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    let h, i, j = k => k;
    var _k = l => (0, f.jsxs)(_l, {
        children: [
            (0, f.jsx)(_m, { children: l.children }),
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
`)), _m = g.default.div.attrs({ className: 'flex-column' })(i || (i = j`
  z-index: 1;
  flex: 1;
`));
});