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
c.register('wSjT+', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('quE27'),
        i = c('lKjHC'),
        j = c('WkHbI'),
        k = c('P1KtI'),
        l = c('R2nG3'),
        m = c('VNuyu'),
        n = c('AE7vR'),
        o = c('E2AMI26'),
        p = c('NmQt6'),
        q = c('0Afdr'),
        r = c('u4s09'),
        s = c('4ymda');
    let t;
    var _u = a => {
        const [v, w] = g.useState(!0), [x, y] = g.useState([]), [z, A] = (0, j.useLocalstorage)('last-viewed-news', 0), [B, C] = g.useState(!1), [D, E, F] = (0, h.useBoolean)(!0), G = g.useCallback(() => {
            C(!0);
        }, [C]), H = g.useCallback(() => {
            C(!1), a.onClose && a.onClose();
        }, [
            C,
            a.onClose
        ]);
        if ((0, i.useDidMount)(() => {
                (0, h.request)({
                    url: '/api/news/fetch',
                    data: {
                        isStudent: (0, h.isStudent)()
                    },
                    success: v => {
                        y(v);
                        const I = null != z ? z : 0,
                            J = v[0];
                        J && (J && J.publishDate > I && a.allowAutoOpen && G(), A(J.publishDate));
                    },
                    error: v => {
                        a.open && (0, h.throwMessageError)({
                            e: v,
                            default: {
                                title: 'Error loading news'
                            }
                        });
                    },
                    both: () => {
                        w(!1);
                    }
                });
            }), g.useEffect(() => {
                a.open && G();
            }, [a.open]), v)
            return null;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_v, {}),
                (0, f.jsx)(l.default, {
                    theme: {
                        algorithm: p.default.defaultAlgorithm
                    },
                    children: (0, f.jsxs)(n.default, {
                        className: 'news-modal',
                        open: B,
                        onCancel: H,
                        closable: !1,
                        footer: null,
                        width: 650,
                        bodyStyle: {
                            padding: 0
                        },
                        style: {
                            top: 25,
                            padding: 0,
                            marginBottom: 100
                        },
                        children: [
                            (0, f.jsx)(s.default, {
                                close: H
                            }),
                            x.length ? 1 !== x.length && D ? (0, f.jsxs)('div', {
                                style: {
                                    paddingBottom: 35
                                },
                                children: [
                                    (0, f.jsx)(q.default, {
                                        item: x[0],
                                        isFirstItem: !0
                                    }),
                                    (0, f.jsx)('div', {
                                        className: 'maxWidth flex-center',
                                        style: {
                                            marginTop: 30
                                        },
                                        children: (0, f.jsx)(k.default, {
                                            shape: 'round',
                                            onClick: F,
                                            children: 'View more news...'
                                        })
                                    })
                                ]
                            }) : (0, f.jsx)(f.Fragment, {
                                children: (0, f.jsx)(o.default, {
                                    className: 'maxWidth',
                                    size: 30,
                                    direction: 'vertical',
                                    style: {
                                        paddingBottom: 35
                                    },
                                    split: (0, f.jsx)(m.default, {
                                        style: {
                                            margin: 0
                                        }
                                    }),
                                    children: x.map((a, v) => (0, f.jsx)(q.default, {
                                        item: a,
                                        isFirstItem: 0 === v
                                    }, a._id))
                                })
                            }) : (0, f.jsx)(f.Fragment, {
                                children: (0, f.jsx)('div', {
                                    className: 'maxWidth flex-center',
                                    style: {
                                        padding: 50,
                                        fontSize: 16,
                                        textAlign: 'center'
                                    },
                                    children: 'There currently is no news. Check back again later!'
                                })
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _v = (0, r.createGlobalStyle)(t || (t = (a => a)`
  .news-modal > .ant-modal-content {
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), c.register('WkHbI', function(d, e) {
    a(d.exports, 'useLocalstorage', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h, i) {
        void 0 === i && (i = null);
        var j = (0, f.useState)(_m()),
            k = j[0],
            l = j[1];

        function _m() {
            if ('undefined' == typeof localStorage)
                return null;
            var n = localStorage.getItem(h) || 'null';
            try {
                return JSON.parse(n);
            } catch (h) {
                console.error(h);
            }
            return n;
        }
        var n = (0, f.useCallback)(function(o) {
                var p;
                l(o), p = o, 'undefined' != typeof localStorage && localStorage.setItem(h, JSON.stringify(p));
            }, []),
            o = (0, f.useCallback)(function(p) {
                p.storageArea === localStorage && p.key === h && l(p.newValue);
            }, []),
            p = (0, f.useCallback)(function() {
                if (n(null), 'undefined' == typeof localStorage)
                    return !1;
                localStorage.removeItem(h);
            }, [h]);
        return (0, f.useEffect)(function() {
            var q;
            null !== (q = _m()) && 'null' !== q || n(i);
        }, []), (0, f.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', o),
                    function() {
                        window.removeEventListener('storage', o);
                    };
            console.warn('useLocalstorage: window is undefined.');
        }, []), Object.assign([
            k,
            n,
            p
        ], {
            value: k,
            remove: p,
            set: n
        });
    }
}), c.register('0Afdr', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('sPeAY'),
        i = c('ZKc1Q'),
        j = c('AKtTq25'),
        k = c('lKjHC'),
        l = c('u4s09'),
        m = c('quE27'),
        n = c('Tzf4u'),
        o = c('Eh2Wh'),
        p = c('t52Ep');
    let q, r, s, t, u, v, w = a => a;
    const x = b(j)(() => c('p0EES4')),
        y = () => (0, f.jsx)(i.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            },
            style: {
                padding: 20
            }
        });
    var _z = a => {
        const [A, B] = g.useState(), {
            item: {
                notionPageId: C,
                publishDate: D
            }
        } = a;
        (0, k.useDidMount)(() => {
            x.preload();
        }), g.useEffect(() => {
            !A && C && (0, h.Request)({
                url: `/api/content/${ C }`,
                cacheKey: 'NOTION_CONTENT',
                success: a => B(a)
            });
        }, [
            C,
            A
        ]);
        return (0, f.jsx)(_A, {
            children: (() => {
                if (!A)
                    return (0, f.jsx)(y, {});
                const {
                    title: E,
                    coverImage: F
                } = (() => {
                    var G, H;
                    const I = C.replace(/-/g, ''),
                        J = Object.keys(A).find(G => G.replace(/-/g, '') === I);
                    if (!J)
                        return null;
                    const K = A[J];
                    var L;
                    const M = null !== (L = null === (G = K.value.properties) || void 0 === G ? void 0 : G.title[0][0]) && void 0 !== L ? L : 'News';
                    var N;
                    let O = null !== (N = null === (H = K.value.format) || void 0 === H ? void 0 : H.page_cover) && void 0 !== N ? N : null;
                    return O && O.startsWith('/') && (O = `https://notion.so${ O }`), {
                        title: M,
                        coverImage: O
                    };
                })();
                return (0, f.jsxs)(g.Suspense, {
                    fallback: (0, f.jsx)(y, {}),
                    children: [
                        F ? (0, f.jsx)(_B, {
                            draggable: !1,
                            src: F
                        }) : null,
                        (0, f.jsxs)(_C, {
                            children: [
                                (0, f.jsxs)(_D, {
                                    style: {
                                        marginTop: a.isFirstItem && !F ? 30 : 0
                                    },
                                    children: [
                                        (0, f.jsx)(_E, {
                                            children: E
                                        }),
                                        (0, f.jsxs)(_F, {
                                            children: [
                                                (0, f.jsx)(p.default, {
                                                    name: 'far fa-calendar-alt',
                                                    style: {
                                                        fontSize: '0.8em',
                                                        marginRight: 5
                                                    }
                                                }),
                                                (0, m.capitalizeFirstLetter)(b(n).unix(D).fromNow())
                                            ]
                                        })
                                    ]
                                }),
                                (0, f.jsx)(x, {
                                    content: A
                                })
                            ]
                        })
                    ]
                });
            })()
        });
    };
    const _A = l.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = w``)),
        _B = l.default.img.attrs({
            className: 'maxWidth'
        })(r || (r = w`
  margin-bottom: 25px;
`)),
        _C = l.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = w`
  padding: 0px 20px;
  font-family: ${ 0 };
`), o.Fonts.SFPro),
        _D = l.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(t || (t = w`
  line-height: 1;
  margin-bottom: 20px;
`)),
        _E = l.default.div(u || (u = w`
  font-size: 28px;
  font-weight: ${ 0 };
`), o.FontWeights.Bold),
        _F = l.default.div.attrs({
            className: 'flex vc'
        })(v || (v = w`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`));
}), c.register('p0EES4', function(d, e) {
    d.exports = Promise.all([
        c('k9Uhg')(new URL(c('Dq3qN').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('Dq3qN').resolve('6iUO5'))
    ]).then(() => c('62q3k'));
}), c.register('k9Uhg', function(d, e) {
    var f = c('uYchj');
    d.exports = f(function(g) {
        return new Promise(function(h, i) {
            var j = document.getElementsByTagName('link');
            if ([].concat(j).some(function(k) {
                    return k.href === g && k.rel.indexOf('stylesheet') > -1;
                }))
                h();
            else {
                var k = document.createElement('link');
                k.rel = 'stylesheet', k.href = g, k.onerror = function(l) {
                    k.onerror = k.onload = null, k.remove(), i(l);
                }, k.onload = function() {
                    k.onerror = k.onload = null, h();
                }, document.getElementsByTagName('head')[0].appendChild(k);
            }
        });
    });
}), c.register('uYchj', function(d, e) {
    var f = {},
        g = {},
        h = {};

    function i(j) {
        switch (j) {
            case 'preload':
                return g;
            case 'prefetch':
                return h;
            default:
                return f;
        }
    }
    d.exports = function(j, k) {
        return function(l) {
            var m = i(k);
            return m[l] ? m[l] : m[l] = j.apply(null, arguments).catch(function(n) {
                throw delete m[l], n;
            });
        };
    };
}), c.register('Dq3qN', function(d, e) {
    var f, g;
    a(d.exports, 'register', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'resolve', function() {
        return g;
    }, function(h) {
        return g = h;
    });
    var h = {};
    f = function(i) {
        for (var j = Object.keys(i), k = 0; k < j.length; k++)
            h[j[k]] = i[j[k]];
    }, g = function(i) {
        var j = h[i];
        if (null == j)
            throw new Error('Could not resolve bundle with id ' + i);
        return j;
    };
}), c.register('4ymda', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('44iM223'),
        i = c('P1KtI'),
        j = c('R2nG3'),
        k = c('NmQt6'),
        l = c('ReZvd'),
        m = c('Eh2Wh'),
        n = c('jw1ib');
    let o, p, q, r, s = a => a;
    var _t = a => (0, f.jsxs)(_u, {
        children: [
            (0, f.jsxs)(_v, {
                children: [
                    (0, f.jsxs)(_w, {
                        children: [
                            n.COMPANY_NAME,
                            ' News'
                        ]
                    }),
                    (0, f.jsxs)(_x, {
                        children: [
                            'Your source for all things ',
                            n.COMPANY_NAME,
                            '!'
                        ]
                    })
                ]
            }),
            (0, f.jsx)('div', {
                children: (0, f.jsx)(j.default, {
                    theme: {
                        algorithm: k.default.darkAlgorithm
                    },
                    children: (0, f.jsx)(i.default, {
                        onClick: a.close,
                        type: 'text',
                        icon: (0, f.jsx)(l.default, {})
                    })
                })
            })
        ]
    });
    const _u = g.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(o || (o = s`
  color: ${ 0 };
  padding: 20px;
  background: #730aad;
`), h.default.White),
        _v = g.default.div(p || (p = s``)),
        _w = g.default.div(q || (q = s`
  font-size: 16px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold),
        _x = g.default.div(r || (r = s`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`));
}), c.register('tBC08', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('kcevG');
    var _h = a => (0, f.jsx)(g.default, {
        ...a
    });
}), c.register('kcevG', function(d, e) {
    a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('quE27'),
        i = c('y5EHz'),
        j = c('0tKaU'),
        k = c('d/TAL25'),
        l = c('bnViL'),
        m = c('u4s09'),
        n = c('dVU37'),
        o = c('hecDa'),
        p = c('W/XnX24'),
        q = c('zOtFd24'),
        r = c('tJvRE'),
        s = c('Eh2Wh'),
        t = c('R2nG3'),
        u = c('NmQt6'),
        v = c('A1fqY'),
        w = c('6p0v5');
    let x, y, z, A = a => a;
    var _B = a => {
        const [C, D] = g.useState(!1), {
            navigation: E
        } = g.useContext(l.default), {
            ref: F,
            height: G
        } = (0, k.useComponentSize)();
        g.useEffect(() => {
            document.documentElement.style.setProperty('--header-height', `${ G }px`), E.headerHeight = G;
        }, [G]);
        const H = g.useMemo(() => {
                var I;
                return null !== (I = a.theme) && void 0 !== I ? I : p.SiteHeaderTheme.light;
            }, [a.theme]),
            I = g.useMemo(() => {
                var J;
                return null !== (J = a.alpha) && void 0 !== J ? J : q.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            J = g.useMemo(() => I === q.SiteHeaderAlpha.none ? 1 : I === q.SiteHeaderAlpha.darker ? H === p.SiteHeaderTheme.light ? 0.9 : 0.75 : H === p.SiteHeaderTheme.light ? 0.85 : 0.45, [
                I,
                H
            ]),
            K = g.useMemo(() => H === p.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ J })` : `rgba(16,16,16, ${ J })`, [
                H,
                I
            ]),
            L = g.useMemo(() => H === p.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [
                H,
                J
            ]);
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(t.default, {
                theme: {
                    algorithm: H === p.SiteHeaderTheme.light ? u.default.defaultAlgorithm : u.default.darkAlgorithm,
                    token: {
                        fontFamily: s.Fonts.SFPro
                    }
                },
                children: [
                    (0, f.jsxs)(_C, {
                        ref: F,
                        style: a.containerDivStyle,
                        children: [
                            (0, f.jsx)(_D, {
                                background: K,
                                hideBorder: a.hideBorder,
                                borderColor: L,
                                children: (0, f.jsx)(i.default.Provider, {
                                    value: j.default,
                                    children: (0, f.jsxs)(_E, {
                                        children: [
                                            (0, f.jsx)(w.default, {
                                                theme: a.theme
                                            }),
                                            (0, h.isLoggedIn)() ? (0, f.jsx)(v.default, {
                                                showUpgradeModal: () => D(!0),
                                                theme: H
                                            }) : (0, f.jsx)(n.default, {
                                                theme: a.theme
                                            })
                                        ]
                                    })
                                })
                            }),
                            a.children
                        ]
                    }),
                    C ? (0, f.jsx)(o.default, {
                        id: 'header',
                        visible: C,
                        close: () => D(!1),
                        showModes: !0
                    }) : null,
                    a.includeSpacer ? (0, f.jsx)(r.default, {}) : null
                ]
            })
        });
    };
    const _C = m.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = A`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`)),
        _D = m.default.header(y || (y = A`
  display: flex;
  height: auto;
  background: ${ 0 };
  backdrop-filter: blur(4px);
  overflow: hidden;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 25px;
  justify-content: space-between;
  width: 100%;
  box-shadow: inset 0 -1px ${ 0 };
  @media print {
    display: none;
  }
`), a => a.background, a => a.hideBorder ? 'rgba(255,255,255,0)' : a.borderColor),
        _E = m.default.div.attrs({
            className: 'flex maxWidth between vc'
        })(z || (z = A``));
}), c.register('y5EHz', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('0tKaU');
    var _h = f.createContext(g.default);
}), c.register('0tKaU', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('+Uz0o'),
        g = c('QNG2I');
    var _h = {
        navigation: new(0, f.default)(),
        billing: new(0, g.default)()
    };
}), c.register('+Uz0o', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT'),
        h = c('JOJnL');
    class i {
        constructor() {
            this.currentTab = h.default.accountInformation, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'currentTab', void 0);
    var _j = i;
}), c.register('JOJnL', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).accountInformation = 'accountInformation', g.gameSettings = 'gameSettings', g.billing = 'billing', g.support = 'support';
    var _h = f;
}), c.register('QNG2I', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    const h = g.observable.array();
    class i {
        constructor() {
            this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges = h, this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '', this.reset = () => {
                this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges.replace([]), this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '';
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'planName', void 0), (0, f.__decorate)([g.observable], i.prototype, 'planDescription', void 0), (0, f.__decorate)([g.observable], i.prototype, 'billingInterval', void 0), (0, f.__decorate)([g.observable], i.prototype, 'hasNextCharge', void 0), (0, f.__decorate)([g.observable], i.prototype, 'nextChargeAmount', void 0), (0, f.__decorate)([g.observable], i.prototype, 'nextChargeDate', void 0), (0, f.__decorate)([g.observable], i.prototype, 'accountBalance', void 0), (0, f.__decorate)([g.observable], i.prototype, 'charges', void 0), (0, f.__decorate)([g.observable], i.prototype, 'cardName', void 0), (0, f.__decorate)([g.observable], i.prototype, 'last4DigitsOfCard', void 0), (0, f.__decorate)([g.observable], i.prototype, 'stripePublicKey', void 0), (0, f.__decorate)([g.observable], i.prototype, 'canDowngrade', void 0), (0, f.__decorate)([g.observable], i.prototype, 'downgradeMessage', void 0), (0, f.__decorate)([g.observable], i.prototype, 'downgradeDateMessage', void 0), (0, f.__decorate)([g.action], i.prototype, 'reset', void 0);
    var _j = i;
}), c.register('dVU37', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('3KbkS'),
        i = c('P1KtI'),
        j = c('FB7HT26'),
        k = c('nKuOQ'),
        l = c('ZIYAX24'),
        m = c('VM+jB'),
        n = c('IDJbt'),
        o = c('W/XnX24');
    var _p = (0, g.observer)(a => {
        const q = (0, l.useMediaMatch)('(max-width: 600px)'),
            r = (0, l.useMediaMatch)('(max-width: 750px)'),
            s = [];
        return s.push({
            key: 'join',
            item: (0, f.jsx)(n.default, {
                onClick: () => {
                    window.open('/join', '_self');
                },
                icon: (0, f.jsx)('i', {
                    className: 'far fa-gamepad'
                }),
                theme: o.SiteHeaderTheme.light,
                fontSize: 15,
                children: 'Join Game'
            })
        }), q || r || s.push({
            key: 'pricing',
            item: (0, f.jsx)(n.default, {
                path: k.GROUP_PRICING,
                icon: (0, f.jsx)('i', {
                    className: 'far fa-users'
                }),
                theme: o.SiteHeaderTheme.light,
                fontSize: 15,
                children: '\xA0 Group Pricing'
            })
        }), s.push({
            key: 'signup',
            item: (0, f.jsx)(n.default, {
                path: k.REGISTER_BASE,
                icon: (0, f.jsx)('i', {
                    className: 'far fa-user-plus'
                }),
                theme: o.SiteHeaderTheme.light,
                fontSize: 15,
                children: 'Sign Up'
            })
        }), s.push({
            key: 'login',
            item: (0, f.jsx)(j.default, {
                to: (() => {
                    let t = '/login';
                    return window && window.location && window.location.pathname && window.location.pathname.startsWith('/view') && (t += `?location=${ encodeURIComponent(window.location.pathname) }`), t;
                })(),
                className: 'maxAll',
                children: (0, f.jsx)(i.default, {
                    type: 'primary',
                    size: 'large',
                    icon: (0, f.jsx)(h.default, {}),
                    children: 'Login'
                })
            })
        }), (0, f.jsx)(m.default, {
            items: s
        });
    });
}), c.register('3KbkS', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('kIeJ4'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LoginOutlined';
    var _k = g.forwardRef(j);
}), c.register('kIeJ4', function(d, e) {
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
                    tag: 'defs',
                    attrs: {},
                    children: [{
                        tag: 'style',
                        attrs: {}
                    }]
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z'
                    }
                }
            ]
        },
        name: 'login',
        theme: 'outlined'
    };
}), c.register('VM+jB', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('P1KtI'),
        h = c('VNuyu'),
        i = c('3t9ce'),
        j = c('E2AMI26'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('2zWqG'),
        n = c('bQWYI'),
        o = c('d/TAL25'),
        p = c('quE27');
    let q, r, s = a => a;
    var _t = a => {
        const {
            width: u
        } = (0, o.useWindowSize)(), [v, w, x] = (0, p.useBoolean)(!1), [y, z] = k.useState(!1), [A, B] = k.useState(null), C = k.useRef(), [D] = (0, n.default)(C), E = k.useRef(), [F] = (0, n.default)(E);
        return k.useEffect(() => {
            !!u && !!D && !F && (!A || u > A) && B(u);
        }, [
            u,
            A,
            D,
            F
        ]), k.useEffect(() => {
            z(!!(A && u <= A));
        }, [
            u,
            A
        ]), (0, f.jsxs)(_u, {
            ref: C,
            children: [
                (0, f.jsx)('div', {
                    ref: E,
                    style: {
                        flex: 1
                    }
                }),
                y ? (0, f.jsx)('div', {
                    style: {
                        flexShrink: 0
                    },
                    children: (0, f.jsx)(g.default, {
                        onClick: w,
                        type: 'text',
                        icon: (0, f.jsx)(m.default, {})
                    })
                }) : (0, f.jsx)(_v, {
                    style: {
                        opacity: F ? 1 : 0
                    },
                    children: (0, f.jsx)(j.default, {
                        size: 10,
                        split: (0, f.jsx)(h.default, {
                            type: 'vertical'
                        }),
                        direction: 'horizontal',
                        children: a.items.map(a => (0, f.jsx)(k.Fragment, {
                            children: a.item
                        }, a.key))
                    })
                }),
                y ? (0, f.jsx)(i.default, {
                    placement: 'right',
                    open: v,
                    onClose: x,
                    children: (0, f.jsx)(j.default, {
                        size: 2,
                        split: (0, f.jsx)(h.default, {
                            type: 'horizontal'
                        }),
                        direction: 'vertical',
                        className: 'maxWidth',
                        children: a.items.map(a => (0, f.jsx)(k.Fragment, {
                            children: (0, f.jsx)('div', {
                                className: 'maxAll flex-center',
                                children: a.item
                            })
                        }, a.key))
                    })
                }) : null
            ]
        });
    };
    const _u = l.default.div(q || (q = s`
  flex: 1;
  overflow: hidden;
  display: flex;
`)),
        _v = l.default.div(r || (r = s`
  flex-shrink: 0;
`));
}), c.register('2zWqG', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('dH3uv'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'MenuOutlined';
    var _k = g.forwardRef(j);
}), c.register('dH3uv', function(d, e) {
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
                    d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'menu',
        theme: 'outlined'
    };
}), c.register('IDJbt', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('W/XnX24'),
        j = c('8KqQ+'),
        k = c('FB7HT26'),
        l = c('Eh2Wh');
    let m;
    var _n = a => {
        const {
            icon: o,
            path: p,
            theme: q
        } = a, r = g.useMemo(() => q === i.SiteHeaderTheme.light ? 'inherit' : j.default.White, [q]);
        return (0, f.jsx)(k.default, {
            className: 'flex maxWidth',
            to: p,
            onClick: a.onClick,
            style: {
                cursor: 'pointer'
            },
            children: (0, f.jsxs)(_o, {
                color: r,
                style: {
                    fontSize: a.fontSize || 20
                },
                children: [
                    o ? (0, f.jsx)('span', {
                        style: {
                            marginRight: '0.35em',
                            fontSize: '1em'
                        },
                        children: o
                    }) : null,
                    (0, f.jsx)('span', {
                        style: {
                            fontSize: '0.9em',
                            marginTop: '0.1em'
                        },
                        children: a.children
                    })
                ]
            })
        });
    };
    const _o = h.default.div.attrs({
        className: 'flex-center'
    })(m || (m = (a => a)`
  line-height: 1;
  background: transparent;
  white-space: nowrap;
  color: ${ 0 };
  font-family: ${ 0 };
  cursor: pointer;
  font-weight: ${ 0 };
`), a => a.color, l.Fonts.SFPro, l.FontWeights.Bold);
}), c.register('tJvRE', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = () => (0, f.jsx)('div', {
        style: {
            height: 'var(--header-height)',
            flexShrink: 0,
            width: '100%'
        }
    });
}), c.register('A1fqY', function(d, e) {
    a(d.exports, 'default', function() {
        return _L;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('R2nG3'),
        j = c('M3JwW'),
        k = c('xAv1a'),
        l = c('NmQt6'),
        m = c('0tKaU'),
        n = c('nKuOQ'),
        o = c('JOJnL'),
        p = c('quE27'),
        q = c('u4s09'),
        r = c('Eh2Wh'),
        s = c('M+ehn'),
        t = c('envF1'),
        u = c('vet5K'),
        v = c('JTTlV24'),
        w = c('hxyXq25'),
        x = c('jH8Dk'),
        y = c('pg1KJ'),
        z = c('8sxYw24'),
        A = c('KxkP827'),
        B = c('VM+jB'),
        C = c('IDJbt'),
        D = c('vJWh924'),
        E = c('wSjT+'),
        F = c('SKBBo');
    let G, H, I, J = a => a;
    const K = a => (0, f.jsx)('img', {
        src: a.src,
        style: {
            height: '1em',
            display: 'block'
        }
    });
    var _L = a => {
        const [M, N, O] = (0, p.useBoolean)(!1), [P, Q] = (0, p.useBoolean)(!1), R = (0, p.isUpgraded)(), S = [], T = g.useMemo(() => () => {
            const U = [{
                    name: 'Settings',
                    icon: y.default,
                    onClick: () => (0, A.NavigateTo)('/settings')
                },
                {
                    name: 'Billing',
                    icon: t.default,
                    onClick: () => {
                        m.default.navigation.currentTab = o.default.billing, (0, A.NavigateTo)('/settings');
                    },
                    blockIf: [p.isStudent]
                },
                {
                    name: 'News',
                    icon: x.default,
                    onClick: () => {
                        N(), Q();
                    }
                },
                {
                    name: 'Group Licenses',
                    icon: z.default,
                    onClick: () => (0, A.NavigateTo)(n.GROUP_DASHBOARD),
                    blockIf: [p.isStudent]
                },
                {
                    name: 'GiveKit',
                    icon: u.default,
                    onClick: () => (0, A.NavigateTo)(n.GIVEKIT),
                    blockIf: [p.isStudent]
                },
                {
                    name: 'Support',
                    icon: w.default,
                    onClick: () => {
                        m.default.navigation.currentTab = o.default.support, (0, A.NavigateTo)('/settings');
                    },
                    blockIf: [p.isStudent]
                },
                {
                    name: 'Logout',
                    icon: v.default,
                    onClick: () => (0, p.request)({
                        url: '/logout',
                        success: () => {
                            F.default.reset();
                        },
                        both: () => window.open('/', '_self')
                    })
                }
            ];
            return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsxs)(k.default, {
                    style: {
                        width: 250
                    },
                    children: [
                        (0, p.isStudent)() ? null : (0, f.jsxs)(_M, {
                            children: [
                                (0, f.jsx)(_N, {
                                    children: (0, p.getFirstName)((0, p.getUser)())
                                }),
                                (0, f.jsx)(_O, {
                                    children: (0, s.default)((0, p.getUser)().type)
                                })
                            ]
                        }),
                        U.filter(U => !U.blockIf || !U.blockIf.some(U => U())).map(U => (0, f.jsx)(k.default.Item, {
                            onClick: U.onClick,
                            children: (0, f.jsxs)('div', {
                                className: 'flex vc',
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, f.jsx)(U.icon, {}),
                                    (0, f.jsx)('div', {
                                        style: {
                                            marginLeft: 7
                                        },
                                        children: U.name
                                    })
                                ]
                            })
                        }, U.name))
                    ]
                })
            });
        }, [N]);
        return S.push({
            key: 'creative',
            item: (0, f.jsx)(C.default, {
                path: n.CREATIVE_BASE,
                icon: (0, f.jsx)(K, {
                    src: '/client/img/header/creative.svg'
                }),
                theme: a.theme,
                children: 'Creative'
            })
        }), S.push({
            key: 'rewards',
            item: (0, f.jsx)(C.default, {
                path: n.COSMOS_BASE,
                icon: (0, f.jsx)(K, {
                    src: D.default.iconImage
                }),
                theme: a.theme,
                children: D.default.name
            })
        }), S.push({
            key: 'me',
            item: (0, f.jsx)(i.default, {
                theme: {
                    algorithm: l.default.defaultAlgorithm
                },
                children: (0, f.jsx)(j.default, {
                    trigger: ['click'],
                    overlay: T,
                    children: (0, f.jsx)('div', {
                        className: 'maxWidth',
                        children: (0, f.jsx)(C.default, {
                            icon: (0, f.jsx)(K, {
                                src: '/client/img/header/smile.svg'
                            }),
                            theme: a.theme,
                            children: 'Me'
                        })
                    })
                })
            })
        }), R || (0, p.isStudent)() || S.push({
            key: 'upgrade',
            item: (0, f.jsx)('div', {
                className: 'maxAll',
                children: (0, f.jsx)(h.default, {
                    size: 'large',
                    type: 'primary',
                    onClick: a.showUpgradeModal,
                    children: 'Upgrade'
                })
            })
        }), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(B.default, {
                    items: S
                }),
                (0, f.jsx)(g.Suspense, {
                    fallback: null,
                    children: P ? (0, f.jsx)(E.default, {
                        open: M,
                        onClose: O
                    }) : null
                })
            ]
        });
    };
    const _M = q.default.div(G || (G = J`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${ 0 };
  color: rgba(0, 0, 0, 0.8);
`), r.Fonts.SFPro),
        _N = q.default.div(H || (H = J`
  font-size: 18px;
  font-weight: ${ 0 };
`), r.FontWeights.Bold),
        _O = q.default.div(I || (I = J`
  font-size: 12px;
`));
}), c.register('M+ehn', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('jw1ib'),
        g = c('X8He6');
    var _h = a => a === g.PlanIds.pro ? `${ f.COMPANY_NAME } Pro` : a === g.PlanIds.go ? `${ f.COMPANY_NAME } Go` : a === g.PlanIds.proPass ? `${ f.COMPANY_NAME } Pro (Monthly)` : a === g.PlanIds.basic ? `${ f.COMPANY_NAME } Basic` : `Unknown ${ f.COMPANY_NAME } Plan`;
}), c.register('envF1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1MeJk'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CreditCardOutlined';
    var _k = g.forwardRef(j);
}), c.register('1MeJk', function(d, e) {
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
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'credit-card',
        theme: 'outlined'
    };
}), c.register('vet5K', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('JHATI'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'HeartOutlined';
    var _k = g.forwardRef(j);
}), c.register('JHATI', function(d, e) {
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
                    d: 'M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z'
                }
            }]
        },
        name: 'heart',
        theme: 'outlined'
    };
}), c.register('pg1KJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('txsxD'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SettingOutlined';
    var _k = g.forwardRef(j);
}), c.register('txsxD', function(d, e) {
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
                    d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z'
                }
            }]
        },
        name: 'setting',
        theme: 'outlined'
    };
}), c.register('6p0v5', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('+cTfn'),
        j = c('6jmvl'),
        k = c('bnViL'),
        l = c('W/XnX24');
    let m, n, o = a => a;
    var _p = (0, j.observer)(a => {
        const {
            navigation: {
                homeUrl: q
            }
        } = g.useContext(k.default), r = a.theme === l.SiteHeaderTheme.dark ? '/client/img/svgLogoWhite.svg' : '/client/img/svgLogo.svg';
        return (0, f.jsx)(_q, {
            to: q,
            children: (0, f.jsx)(_r, {
                src: r
            }, r)
        });
    });
    const _q = (0, h.default)(i.Link)(m || (m = o``)),
        _r = h.default.img.attrs({
            alt: 'Gimkit Logo'
        })(n || (n = o`
  height: 32px;
  margin-right: 90px;
`));
});