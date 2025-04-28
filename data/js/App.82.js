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
a.register('IOpcD', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _v(b.exports, 'default', function() {
        return _u;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('+i8ep'),
        h = a('w0a3U'),
        i = a('PMl60'),
        j = a('70AkF'),
        k = a('PLj8p'),
        l = a('vj5K40'),
        m = a('0HHAH'),
        n = a('FpbFp'),
        o = a('sHRDd'),
        p = a('Axq+p'),
        q = a('I7afj'),
        r = a('E956I'),
        s = a('l0C72');
    let t;
    var _u = () => {
        const [_v, w] = f.useState(null), x = (0, i.getUrlVariable)('session_id'), [y, z] = f.useState(!!x), {
            id: A
        } = (0, j.useParams)();
        (0, g.useDidMount)(() => {
            (0, i.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        const B = () => {
            (0, i.isLoggedIn)() || A ? (0, h.Request)({
                url: A ? `/api/billing/season-ticket/info/${ A }` : '/api/billing/season-ticket/info',
                success: _v => w(_v),
                error: _v => (0, i.throwMessageError)({
                    e: _v,
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
                onError: _v => {
                    (0, i.throwMessageError)({
                        e: _v,
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
                (0, e.jsx)(_v, {
                    children: (0, e.jsx)(r.default, {
                        children: !_v || y ? (0, e.jsx)(m.Centered, {
                            className: 'maxAll',
                            children: (0, e.jsx)(n.default, {
                                style: {
                                    color: o.default.White
                                }
                            })
                        }) : _v.hasSeasonTicket ? (0, e.jsx)(q.default, {
                            info: _v,
                            hasSessionId: !!x,
                            boughtForSelf: !A
                        }) : (0, e.jsx)(k.default, {
                            info: _v
                        })
                    })
                })
            ]
        });
    };
    const _v = p.default.div(t || (t = (_d => _d)`
  flex: 1;
  color: ${ 0 };
`), o.default.White);
}), a.register('PLj8p', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('C+hiJ'),
        g = a('ev2uT'),
        h = a('aQrPE'),
        i = a('2HvvA11'),
        j = a('vj5K40');
    let k, l, m, n, o, p = _d => _d;
    var _q = _d => {
        const r = !_d.info.linkId && _d.info.firstName;
        return (0, d.jsxs)(_r, {
            children: [
                (0, d.jsx)(_s, {
                    className: 'flex-center',
                    children: (0, d.jsx)(i.default, {
                        to: (0, j.GetHomepagePath)(),
                        children: (0, d.jsx)(_t, {
                            src: '/client/img/svgLogoWhite.svg'
                        })
                    })
                }),
                (0, d.jsx)(_u, {
                    children: (0, d.jsx)(h.default, {})
                }),
                (0, d.jsxs)(_v, {
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(f.default, {
                                forSelf: !r
                            })
                        }),
                        (0, d.jsx)(g.default, {
                            info: _d.info
                        })
                    ]
                })
            ]
        });
    };
    const _r = e.default.div.attrs({
            className: 'maxWidth flex-column vc'
        })(k || (k = p`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`)),
        _s = e.default.div(l || (l = p`
  margin-bottom: 30px;
`)),
        _t = e.default.img(m || (m = p`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`)),
        _u = e.default.div(n || (n = p`
  width: 100%;
  max-width: 1200px;
`)),
        _v = (0, e.default)(_u).attrs({
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
}), a.register('C+hiJ', function(b, c) {
    _d(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('cvto726');
    a('LEQ5w');
    var f = a('QYnkY'),
        g = a('l0C72'),
        h = a('PMl60'),
        i = a('Mmd0d21');
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
            show: _d => !_d || (0, h.isStudent)()
        }
    ];
    var _k = _d => (0, d.jsx)(e.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: j.filter(b => !b.show || b.show(_d.forSelf)).map((_d, b) => (0, d.jsx)(f.default, {
            ..._d
        }, 'benefit' + b))
    });
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
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
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
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
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('QYnkY', function(b, c) {
    _g(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('2Xvuf');
    let i, j, k, l, m, n, o, p = _g => _g;
    var _q = _g => (0, d.jsxs)(_r, {
        children: [
            (0, d.jsx)(_s, {
                children: (0, d.jsx)(_t, {
                    src: (0, h.default)(`seasonTicket/${ _g.icon }.svg`)
                })
            }),
            (0, d.jsxs)(_u, {
                children: [
                    _g.tag ? (0, d.jsx)(_v, {
                        children: _g.tag
                    }) : null,
                    (0, d.jsx)(_w, {
                        children: _g.title
                    }),
                    (0, d.jsx)(_x, {
                        children: _g.description
                    })
                ]
            })
        ]
    });
    const _r = (0, e.default)(f.VerticalCentered).attrs({
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
        _s = e.default.div(j || (j = p`
  margin-right: 32px;
`)),
        _t = e.default.img(k || (k = p`
  width: 40px;
`)),
        _u = e.default.div.attrs({
            className: 'flex-column'
        })(l || (l = p`
  align-items: flex-start;
`)),
        _v = e.default.div(m || (m = p`
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
        _w = e.default.div(n || (n = p`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), g.Fonts.FugazOne),
        _x = e.default.div(o || (o = p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), a.register('0HHAH', function(b, c) {
    _g(b.exports, 'Centered', function() {
        return _j;
    }), _g(b.exports, 'VerticallyCentered', function() {
        return _k;
    }), _g(b.exports, 'CenteredColumn', function() {
        return _l;
    }), _g(b.exports, 'VerticalCentered', function() {
        return _m;
    });
    var d = a('Axq+p');
    let e, f, g, h, i = _g => _g;
    const _j = d.default.div.attrs({
            className: 'flex-center'
        })(e || (e = i``)),
        _k = d.default.div.attrs({
            className: 'flex vc'
        })(f || (f = i``)),
        _l = (0, d.default)(_j).attrs({
            className: 'flex-column'
        })(g || (g = i``)),
        _m = d.default.div.attrs({
            className: 'flex vc'
        })(h || (h = i``));
}), a.register('2Xvuf', function(b, c) {
    let d;
    _g(b.exports, 'default', function() {
        return _e;
    });
    var _e = _g => {
        const f = (() => {
            var _g;
            if (d)
                return d;
            const h = null === (_g = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === _g ? void 0 : _g.getAttribute('content');
            return void 0 !== h && '$CDN_MAP_ASSETS_URL' !== h ? (d = h, d) : '';
        })();
        return _i.startsWith('/assets/map') ? `${ f }${ _i }` : `${ f }/assets/map/${ _i }`;
    };
}), a.register('l0C72', function(b, c) {
    _i(b.exports, 'SeasonTicketName', function() {
        return _d;
    }), _i(b.exports, 'SeasonTicketSeason', function() {
        return _e;
    });
    const _d = {
            name: 'Season Ticket',
            singularName: 'ticket'
        },
        _e = {
            seasonYear: '2025',
            seasonName: 'Season',
            seasonNumber: '3'
        };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('ev2uT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('5EYJ8'),
        h = a('Xo93Q'),
        i = a('cvto726');
    let j, k, l = _i => _i;
    var _m = _i => {
        const n = !_i.info.linkId && _i.info.firstName;
        return (0, d.jsx)(_n, {
            children: (0, d.jsxs)(i.default, {
                direction: 'vertical',
                size: 20,
                className: 'maxWidth',
                children: [
                    (0, d.jsx)(_o, {
                        children: (0, d.jsx)(g.default, {
                            info: _i.info
                        })
                    }),
                    n ? null : (0, d.jsx)(_o, {
                        children: (0, d.jsx)(h.default, {
                            info: _i.info
                        })
                    })
                ]
            })
        });
    };
    const _n = e.default.div(j || (j = l`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`)),
        _o = e.default.div.attrs({
            className: 'medium-shadow'
        })(k || (k = l`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${ 0 };
  padding: 35px;
  border-radius: 8px;
`), f.default.Black);
}), a.register('5EYJ8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('xQDqe25'),
        f = a('ulE4q'),
        g = a('cvto726');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('PMl60'),
        j = a('b5kvC'),
        k = a('w0a3U'),
        l = a('AzS0C1'),
        m = a('70AkF'),
        n = a('l0C72'),
        o = a('+xZ86');
    let p, q, r = _i => _i;
    var _s = _i => {
        const [t, u, v] = (0, i.useBoolean)(!1), {
            info: w
        } = _i, {
            id: x
        } = (0, m.useParams)(), y = !w.linkId && w.firstName, z = _i => {
            (0, i.throwMessageError)({
                e: _i,
                default: {
                    title: 'There was an error connecting with our payments provider.',
                    content: 'Please try again.'
                }
            }), v();
        };
        return (0, d.jsxs)(_t, {
            children: [
                (0, d.jsxs)(g.default, {
                    direction: 'vertical',
                    size: 12,
                    style: {
                        fontFamily: j.Fonts.SFPro,
                        fontSize: 16
                    },
                    children: [
                        y ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)(_u, {
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
                        (0, d.jsxs)(_u, {
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
                        (0, d.jsxs)(_u, {
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
                            success: async _i => {
                                let A;
                                A = await (0, l.loadStripe)(_i.key), (0, k.Request)({
                                    url: '/api/billing/create-season-ticket-session',
                                    method: 'POST',
                                    data: x ? {
                                        encryptedUserId: x
                                    } : void 0,
                                    success: async _i => {
                                        await A.redirectToCheckout({
                                            sessionId: _i.id
                                        }).catch(_i => z(_i));
                                    },
                                    error: _i => {
                                        z(_i);
                                    }
                                });
                            },
                            error: _i => {
                                z(_i);
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
    const _t = h.default.div(p || (p = r``)),
        _u = h.default.div(q || (q = r``));
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('AzS0C1', function(b, c) {
    _i(b.exports, 'loadStripe', function() {
        return _l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(_i) {
            return null !== g || (g = new Promise(function(j, k) {
                if ('undefined' != typeof window)
                    if (window.Stripe && _i && console.warn(f), window.Stripe)
                        j(window.Stripe);
                    else
                        try {
                            var l = function() {
                                for (var m = document.querySelectorAll('script[src^="'.concat(d, '"]')), n = 0; n < m.length; n++) {
                                    var o = m[n];
                                    if (e.test(o.src))
                                        return o;
                                }
                                return null;
                            }();
                            l && _i ? console.warn(f) : l || (l = function(m) {
                                var n = m && !m.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    o = document.createElement('script');
                                o.src = ''.concat(d).concat(n);
                                var p = document.head || document.body;
                                if (!p)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return p.appendChild(o), o;
                            }(_i)), l.addEventListener('load', function() {
                                window.Stripe ? j(window.Stripe) : k(new Error('Stripe.js not available'));
                            }), l.addEventListener('error', function() {
                                k(new Error('Failed to load Stripe.js'));
                            });
                        } catch (_i) {
                            return void k(_i);
                        }
                else
                    j(null);
            })), g;
        },
        i = function(j, k, l) {
            if (null === j)
                return null;
            var m = j.apply(void 0, k);
            return function(n, o) {
                n && n._registerWrapper && n._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: o
                });
            }(m, l), m;
        },
        j = Promise.resolve().then(function() {
            return h(null);
        }),
        k = !1;
    j.catch(function(l) {
        k || console.warn(l);
    });
    var _l = function() {
        for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
            n[o] = arguments[o];
        k = !0;
        var p = Date.now();
        return j.then(function(q) {
            return i(q, n, p);
        });
    };
}), a.register('+xZ86', function(b, c) {
    _b(b.exports, 'SEASON_TICKET_END_DATE', function() {
        return _d;
    });
    const _d = 'August 20th';
}), a.register('Xo93Q', function(b, c) {
    _b(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('MSsQO'),
        h = a('jlX4s16');
    a('LEQ5w');
    var i = a('Axq+p'),
        j = a('PMl60'),
        k = a('l0C72');
    let l;
    var _m = _b => {
        const n = `${ (0, j.getDomain)() }/season-ticket/${ _b.info.linkId }`;
        return (0, d.jsxs)(_n, {
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
                                _c(h)(n), g.default.success('Link copied to clipboard!');
                            },
                            type: 'primary',
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
    const _n = i.default.div(l || (l = (_b => _b)`
  font-size: 15px;
`));
}), a.register('jlX4s16', function(_b, _c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('aQrPE', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('l0C72');
    let h, i, j, k = _l => _l;
    var _l = () => (0, d.jsxs)(_m, {
        children: [
            (0, d.jsxs)(_n, {
                children: [
                    g.SeasonTicketSeason.seasonName,
                    ' ',
                    g.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, d.jsx)(_o, {
                children: g.SeasonTicketName.name
            })
        ]
    });
    const _m = e.default.div(h || (h = k`
  font-family: ${ 0 };
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`), f.Fonts.FugazOne),
        _n = e.default.div(i || (i = k`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        _o = e.default.div(j || (j = k`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`));
}), a.register('2HvvA11', function(b, c) {
    _l(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _l => _l.external || !_l.to ? (0, d.jsx)('a', {
        href: _l.to,
        tabIndex: Number(_l.tabIndex || '0'),
        onClick: _l.onClick,
        onKeyPress: b => {
            _l.onClick && 'Enter' === b.key && (b.preventDefault(), _l.onClick());
        },
        className: _l.className,
        target: _l.target,
        style: _l.style,
        children: _l.children
    }) : (0, d.jsx)(e.Link, {
        to: _l.to,
        tabIndex: Number(_l.tabIndex || '0'),
        onClick: _l.onClick,
        className: _l.className,
        target: _l.target,
        style: _l.style,
        children: _l.children
    });
}), a.register('vj5K40', function(b, c) {
    _l(b.exports, 'GetHomepagePath', function() {
        return _h;
    }), _l(b.exports, 'RedirectToHomepage', function() {
        return _i;
    }), _l(b.exports, 'ReplaceToHomePage', function() {
        return _j;
    });
    var d = a('gs4MT'),
        e = a('oBJ9G'),
        f = a('PMl60'),
        g = a('jzxyj10');
    const _h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        _i = () => {
            (0, g.NavigateTo)(_h());
        },
        _j = () => {
            e.history.replace(_h());
        };
}), a.register('jzxyj10', function(b, c) {
    _l(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _l => {
        d.history.push(_l);
    };
}), a.register('FpbFp', function(b, c) {
    _l(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = 44;

    function k(_l) {
        var m, n, o;
        return m = _l, n = 0, o = 1, _l = (Math.min(Math.max(n, m), o) - n) / (o - n), _l = (_l -= 1) * _l * _l + 1;
    }
    var k = f.forwardRef(function(l, m) {
            var n, o = l.classes,
                p = l.className,
                q = l.color,
                _r = void 0 === q ? 'primary' : q,
                s = l.disableShrink,
                t = void 0 !== s && s,
                u = l.size,
                v = void 0 === u ? 40 : u,
                w = l.style,
                x = l.thickness,
                y = void 0 === x ? 3.6 : x,
                z = l.value,
                A = void 0 === z ? 0 : z,
                B = l.variant,
                C = void 0 === B ? 'indeterminate' : B,
                D = (0, e.default)(l, [
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
                E = {},
                F = {},
                G = {};
            if ('determinate' === C || 'static' === C) {
                var H = 2 * Math.PI * ((j - y) / 2);
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * _k(A / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(o.root, p, 'inherit' !== _r && o['color'.concat((0, i.default)(_r))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, d.default)({
                    width: v,
                    height: v
                }, F, w),
                ref: m,
                role: 'progressbar'
            }, G, D), f.createElement('svg', {
                className: o.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(o.circle, t && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: E,
                cx: j,
                cy: j,
                r: (j - y) / 2,
                fill: 'none',
                strokeWidth: y
            })));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: m.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: m.palette.primary.main
                },
                colorSecondary: {
                    color: m.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: m.transitions.create('stroke-dashoffset')
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
        })(k);
}), a.register('I7afj', function(b, c) {
    e(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('0HHAH'),
        h = a('b5kvC'),
        i = a('iJX6C'),
        j = a('led8j'),
        _k = a('2HvvA11'),
        l = a('PMl60'),
        m = a('gs4MT'),
        n = a('Pkvp4'),
        o = a('l0C72'),
        p = a('1Doax');
    let q, r, s, t, u, v, w, x, y, z = e => e;
    var _A = e => (e.useEffect(() => {
        var B, C;
        e.boughtForSelf && (0, l.isLoggedIn)() && !(null === (B = (0, l.getUser)()) || void 0 === B || null === (C = B.seasonTicket) || void 0 === C ? void 0 : C.viewed) && (0, n.default)({});
    }, [e.boughtForSelf]), (0, d.jsxs)(_B, {
        children: [
            (0, d.jsx)(_C, {
                children: (0, d.jsxs)(_D, {
                    children: [
                        (0, d.jsx)(_E, {
                            children: (0, d.jsx)(_F, {
                                src: p.SEASON_TICKET_TICKET_IMAGE
                            })
                        }),
                        (0, d.jsxs)(_G, {
                            children: [
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontFamily: h.Fonts.FugazOne,
                                        textTransform: 'uppercase'
                                    },
                                    children: [
                                        (0, d.jsx)(_H, {
                                            children: o.SeasonTicketName.name
                                        }),
                                        (0, d.jsxs)(_I, {
                                            children: [
                                                e.hasSessionId ? 'Purchased' : 'Activated',
                                                '!'
                                            ]
                                        })
                                    ]
                                }),
                                (0, d.jsx)(_J, {
                                    children: e.boughtForSelf ? (0, d.jsx)(d.Fragment, {
                                        children: 'Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!'
                                    }) : (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            (0, d.jsx)('b', {
                                                children: e.info.firstName
                                            }),
                                            ' now has access to all Season Ticket benefits. Thanks for your support!'
                                        ]
                                    })
                                }),
                                (0, l.isLoggedIn)() ? (0, d.jsx)('div', {
                                    style: {
                                        marginTop: 25
                                    },
                                    children: (0, d.jsx)(_k.default, {
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
    const _B = (0, f.default)(g.Centered).attrs({
            className: 'maxAll'
        })(q || (q = z`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`)),
        _C = f.default.div.attrs({
            className: 'animated bounceIn'
        })(r || (r = z`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`)),
        _D = (0, f.default)(g.Centered)(s || (s = z`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`)),
        _E = f.default.div(t || (t = z``)),
        _F = f.default.img(u || (u = z`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`)),
        _G = f.default.div(v || (v = z``)),
        _H = f.default.div(w || (w = z`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`)),
        _I = f.default.div(x || (x = z`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`)),
        _J = f.default.div(y || (y = z`
  font-size: 18px;
  max-width: 400px;
`));
}), a.register('iJX6C', function(b, c) {
    e(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('5GGbn');
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
    var _j = () => !!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? null : (0, d.jsx)(_k, {
        children: (0, d.jsx)(f.Fireworks, {
            options: h,
            style: i
        })
    });
    const _k = e.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(g || (g = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`));
}), a.register('led8j', function(b, c) {
    e(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('GT7Vh'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('vShe/');
    let j;
    var _k = e => {
        const l = e.size || 'default',
            m = f.useMemo(() => e.customColor ? e.customColor : e.disabled ? '#546e7a' : 'success' === e.type ? '#2e7d32' : 'danger' === e.type ? '#c62828' : '#3f51b5', [
                e.disabled,
                e.type,
                e.customColor
            ]),
            n = f.useMemo(() => (0, e.darken)(0.1, m), [m]),
            o = f.useMemo(() => 'small' === l || 'default' === l ? 14 : 20, [l]),
            p = f.useMemo(() => 'small' === l ? 6 : 'default' === l ? 8 : 12, [l]),
            q = f.useMemo(() => {
                const r = 'small' === l ? '8px' : '12px';
                return e.customHorizontalPadding ? `${ r } ${ e.customHorizontalPadding }px` : 'small' === l ? `${ r } 24px` : 'default' === l ? `${ r } 28px` : `${ r } 42px`;
            }, [
                l,
                e.customHorizontalPadding
            ]),
            r = f.useMemo(() => 'small' === l ? 41 : 49, [l]),
            s = f.useMemo(() => e.customFontWeight ? e.customFontWeight : 'large' === l ? h.FontWeights.Bold : h.FontWeights.Normal, [
                e.customFontWeight,
                l
            ]),
            t = () => {
                e.disabled || e.onClick && e.onClick();
            };
        return (0, d.jsx)(_l, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: r
            }, e.style || {}),
            children: (0, d.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : t,
                onPointerDown: e.usePointerDownEvent ? t : void 0,
                style: {
                    cursor: e.disabled ? 'not-allowed' : 'pointer',
                    width: e.block ? '100%' : 'auto'
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
                        children: e.children
                    })
                ]
            })
        });
    };
    const _l = g.default.div.attrs({
        className: 'flex'
    })(j || (j = (e => e)`
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
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), a.register('1Doax', function(b, c) {
    e(b.exports, 'SEASON_TICKET_TICKET_IMAGE', function() {
        return _d;
    });
    const _d = (0, a('2Xvuf').default)('stickers/season_3_2025.png');
}), a.register('E956I', function(b, c) {
    e(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p');
    let f, g, h = e => e;
    var _i = e => (0, d.jsxs)(_j, {
        children: [
            (0, d.jsx)(_k, {
                children: e.children
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
    const _j = e.default.div(f || (f = h`
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
        _k = e.default.div.attrs({
            className: 'flex-column'
        })(g || (g = h`
  z-index: 1;
  flex: 1;
`));
});