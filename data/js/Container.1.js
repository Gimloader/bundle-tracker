function a(a, b, c, v) {
    Object.defineProperty(a, b, {
        get: c,
        set: v,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('EOKUI', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f'),
        g = c('laJ/S'),
        h = c('LI7Cy'),
        i = c('IsmrL'),
        j = c('qEw51'),
        k = c('ExtIT'),
        l = c('cR5QE'),
        m = c('5nJMd26'),
        n = c('KlhV/'),
        o = c('gL6W3'),
        p = c('h99Nu'),
        q = c('eFxzD');
    let r;
    var s = a => {
        const [t, u] = e.useState(!0), [v, w] = e.useState([]), [x, y] = (0, h.useLocalstorage)('last-viewed-news', 0), [z, A] = e.useState(!1), [B, C, D] = (0, f.useBoolean)(!0), E = e.useCallback(() => {
            A(!0);
        }, [A]), F = e.useCallback(() => {
            A(!1), a.onClose && a.onClose();
        }, [
            A,
            a.onClose
        ]);
        if ((0, g.useDidMount)(() => {
                (0, f.request)({
                    url: '/api/news/fetch',
                    data: {
                        isStudent: (0, f.isStudent)()
                    },
                    success: t => {
                        w(t);
                        const G = null != x ? x : 0,
                            H = t[0];
                        H && (H && H.publishDate > G && a.allowAutoOpen && E(), y(H.publishDate));
                    },
                    error: t => {
                        a.open && (0, f.throwMessageError)({
                            e: t,
                            default: {
                                title: 'Error loading news'
                            }
                        });
                    },
                    both: () => {
                        u(!1);
                    }
                });
            }), e.useEffect(() => {
                a.open && E();
            }, [a.open]), t)
            return null;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(t, {}),
                (0, d.jsx)(j.default, {
                    theme: {
                        algorithm: n.default.defaultAlgorithm
                    },
                    children: (0, d.jsxs)(l.default, {
                        className: 'news-modal',
                        open: z,
                        onCancel: F,
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
                            (0, d.jsx)(q.default, {
                                close: F
                            }),
                            v.length ? 1 !== v.length && B ? (0, d.jsxs)('div', {
                                style: {
                                    paddingBottom: 35
                                },
                                children: [
                                    (0, d.jsx)(o.default, {
                                        item: v[0],
                                        isFirstItem: !0
                                    }),
                                    (0, d.jsx)('div', {
                                        className: 'maxWidth flex-center',
                                        style: {
                                            marginTop: 30
                                        },
                                        children: (0, d.jsx)(i.default, {
                                            shape: 'round',
                                            onClick: D,
                                            children: 'View more news...'
                                        })
                                    })
                                ]
                            }) : (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)(m.default, {
                                    className: 'maxWidth',
                                    size: 30,
                                    direction: 'vertical',
                                    style: {
                                        paddingBottom: 35
                                    },
                                    split: (0, d.jsx)(k.default, {
                                        style: {
                                            margin: 0
                                        }
                                    }),
                                    children: v.map((a, t) => (0, d.jsx)(o.default, {
                                        item: a,
                                        isFirstItem: 0 === t
                                    }, a._id))
                                })
                            }) : (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)('div', {
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
    const t = (0, p.createGlobalStyle)(r || (r = (a => a)`
  .news-modal > .ant-modal-content {
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), c.register('LI7Cy', function(b, g) {
    a(b.exports, 'useLocalstorage', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a, b) {
        void 0 === b && (b = null);
        var f = (0, d.useState)(i()),
            g = f[0],
            h = f[1];

        function i() {
            if ('undefined' == typeof localStorage)
                return null;
            var j = localStorage.getItem(a) || 'null';
            try {
                return JSON.parse(j);
            } catch (a) {
                console.error(a);
            }
            return j;
        }
        var j = (0, d.useCallback)(function(b) {
                var k;
                h(b), k = b, 'undefined' != typeof localStorage && localStorage.setItem(a, JSON.stringify(k));
            }, []),
            k = (0, d.useCallback)(function(b) {
                b.storageArea === localStorage && b.key === a && h(b.newValue);
            }, []),
            l = (0, d.useCallback)(function() {
                if (j(null), 'undefined' == typeof localStorage)
                    return !1;
                localStorage.removeItem(a);
            }, [a]);
        return (0, d.useEffect)(function() {
            var m;
            null !== (m = i()) && 'null' !== m || j(b);
        }, []), (0, d.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', k),
                    function() {
                        window.removeEventListener('storage', k);
                    };
            console.warn('useLocalstorage: window is undefined.');
        }, []), Object.assign([
            g,
            j,
            l
        ], {
            value: g,
            remove: l,
            set: j
        });
    }
}), c.register('gL6W3', function(z, A) {
    a(z.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('uVDHR'),
        g = c('+98NM'),
        h = c('u1rFO25'),
        i = c('laJ/S'),
        j = c('h99Nu'),
        k = c('PjB0f'),
        l = c('2MCaL'),
        m = c('gSUVO'),
        n = c('iMnBi');
    let o, p, q, r, s, t, u = a => a;
    const v = b(h)(() => c('nRwdv4')),
        w = () => (0, d.jsx)(g.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            },
            style: {
                padding: 20
            }
        });
    var x = a => {
        const [y, z] = e.useState(), {
            item: {
                notionPageId: A,
                publishDate: B
            }
        } = C;
        (0, i.useDidMount)(() => {
            v.preload();
        }), e.useEffect(() => {
            !y && A && (0, f.Request)({
                url: `/api/content/${ A }`,
                cacheKey: 'NOTION_CONTENT',
                success: C => z(C)
            });
        }, [
            A,
            y
        ]);
        return (0, d.jsx)(y, {
            children: (() => {
                if (!y)
                    return (0, d.jsx)(w, {});
                const {
                    title: D,
                    coverImage: E
                } = (() => {
                    var F, G;
                    const H = A.replace(/-/g, ''),
                        I = Object.keys(y).find(F => F.replace(/-/g, '') === H);
                    if (!I)
                        return null;
                    const J = y[I];
                    var K;
                    const L = null !== (K = null === (F = J.value.properties) || void 0 === F ? void 0 : F.title[0][0]) && void 0 !== K ? K : 'News';
                    var M;
                    let N = null !== (M = null === (G = J.value.format) || void 0 === G ? void 0 : G.page_cover) && void 0 !== M ? M : null;
                    return N && N.startsWith('/') && (N = `https://notion.so${ N }`), {
                        title: L,
                        coverImage: N
                    };
                })();
                return (0, d.jsxs)(e.Suspense, {
                    fallback: (0, d.jsx)(w, {}),
                    children: [
                        E ? (0, d.jsx)(z, {
                            draggable: !1,
                            src: E
                        }) : null,
                        (0, d.jsxs)(A, {
                            children: [
                                (0, d.jsxs)(B, {
                                    style: {
                                        marginTop: C.isFirstItem && !E ? 30 : 0
                                    },
                                    children: [
                                        (0, d.jsx)(C, {
                                            children: D
                                        }),
                                        (0, d.jsxs)(D, {
                                            children: [
                                                (0, d.jsx)(n.default, {
                                                    name: 'far fa-calendar-alt',
                                                    style: {
                                                        fontSize: '0.8em',
                                                        marginRight: 5
                                                    }
                                                }),
                                                (0, k.capitalizeFirstLetter)(b(l).unix(B).fromNow())
                                            ]
                                        })
                                    ]
                                }),
                                (0, d.jsx)(v, {
                                    content: y
                                })
                            ]
                        })
                    ]
                });
            })()
        });
    };
    const y = j.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = u``)),
        z = j.default.img.attrs({
            className: 'maxWidth'
        })(p || (p = u`
  margin-bottom: 25px;
`)),
        A = j.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u`
  padding: 0px 20px;
  font-family: ${ 0 };
`), m.Fonts.SFPro),
        B = j.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(r || (r = u`
  line-height: 1;
  margin-bottom: 20px;
`)),
        C = j.default.div(s || (s = u`
  font-size: 28px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold),
        D = j.default.div.attrs({
            className: 'flex vc'
        })(t || (t = u`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`));
}), c.register('nRwdv4', function(a, b) {
    a.exports = Promise.all([
        c('wqdSG')(new URL(c('tIOy4').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('tIOy4').resolve('6iUO5'))
    ]).then(() => c('NBVgF'));
}), c.register('wqdSG', function(a, b) {
    var d = c('0Hkma');
    a.exports = d(function(a) {
        return new Promise(function(b, c) {
            var e = document.getElementsByTagName('link');
            if ([].concat(e).some(function(b) {
                    return b.href === a && b.rel.indexOf('stylesheet') > -1;
                }))
                b();
            else {
                var f = document.createElement('link');
                f.rel = 'stylesheet', f.href = a, f.onerror = function(a) {
                    f.onerror = f.onload = null, f.remove(), c(a);
                }, f.onload = function() {
                    f.onerror = f.onload = null, b();
                }, document.getElementsByTagName('head')[0].appendChild(f);
            }
        });
    });
}), c.register('0Hkma', function(a, b) {
    var d = {},
        e = {},
        f = {};

    function g(a) {
        switch (a) {
            case 'preload':
                return e;
            case 'prefetch':
                return f;
            default:
                return d;
        }
    }
    a.exports = function(a, b) {
        return function(d) {
            var h = g(b);
            return h[d] ? h[d] : h[d] = a.apply(null, arguments).catch(function(a) {
                throw delete h[d], a;
            });
        };
    };
}), c.register('tIOy4', function(b, c) {
    var d, e;
    a(b.exports, 'register', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'resolve', function() {
        return e;
    }, function(a) {
        return e = a;
    });
    var f = {};
    d = function(a) {
        for (var g = Object.keys(a), h = 0; h < g.length; h++)
            f[g[h]] = a[g[h]];
    }, e = function(a) {
        var g = f[a];
        if (null == g)
            throw new Error('Could not resolve bundle with id ' + a);
        return g;
    };
}), c.register('eFxzD', function(b, C) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('cdiGP23'),
        g = c('IsmrL'),
        h = c('qEw51'),
        i = c('KlhV/'),
        j = c('obWo+'),
        k = c('gSUVO'),
        l = c('0wLl2');
    let m, n, o, p, q = a => a;
    var r = a => (0, d.jsxs)(s, {
        children: [
            (0, d.jsxs)(t, {
                children: [
                    (0, d.jsxs)(u, {
                        children: [
                            l.COMPANY_NAME,
                            ' News'
                        ]
                    }),
                    (0, d.jsxs)(v, {
                        children: [
                            'Your source for all things ',
                            l.COMPANY_NAME,
                            '!'
                        ]
                    })
                ]
            }),
            (0, d.jsx)('div', {
                children: (0, d.jsx)(h.default, {
                    theme: {
                        algorithm: i.default.darkAlgorithm
                    },
                    children: (0, d.jsx)(g.default, {
                        onClick: a.close,
                        type: 'text',
                        icon: (0, d.jsx)(j.default, {})
                    })
                })
            })
        ]
    });
    const s = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = q`
  color: ${ 0 };
  padding: 20px;
  background: #730aad;
`), f.default.White),
        t = e.default.div(n || (n = q``)),
        u = e.default.div(o || (o = q`
  font-size: 16px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        v = e.default.div(p || (p = q`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`));
}), c.register('1//3g', function(b, C) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('4t8hY');
    var f = a => (0, d.jsx)(e.default, {
        ...a
    });
}), c.register('4t8hY', function(b, C) {
    a(b.exports, 'default', function() {
        return z;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f'),
        g = c('NS10B'),
        h = c('RrDRa'),
        i = c('tYruc25'),
        j = c('Xu07t'),
        k = c('h99Nu'),
        l = c('iUWIw'),
        m = c('VsZIM'),
        n = c('UnfL724'),
        o = c('dN+BG24'),
        p = c('C891a'),
        q = c('gSUVO'),
        r = c('qEw51'),
        s = c('KlhV/'),
        t = c('Xp99w'),
        u = c('umlOF');
    let v, w, x, y = a => a;
    var z = a => {
        const [A, B] = e.useState(!1), {
            navigation: C
        } = e.useContext(j.default), {
            ref: D,
            height: E
        } = (0, i.useComponentSize)();
        e.useEffect(() => {
            document.documentElement.style.setProperty('--header-height', `${ E }px`), C.headerHeight = E;
        }, [E]);
        const F = e.useMemo(() => {
                var G;
                return null !== (G = a.theme) && void 0 !== G ? G : n.SiteHeaderTheme.light;
            }, [a.theme]),
            G = e.useMemo(() => {
                var H;
                return null !== (H = a.alpha) && void 0 !== H ? H : o.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            H = e.useMemo(() => G === o.SiteHeaderAlpha.none ? 1 : G === o.SiteHeaderAlpha.darker ? F === n.SiteHeaderTheme.light ? 0.9 : 0.75 : F === n.SiteHeaderTheme.light ? 0.85 : 0.45, [
                G,
                F
            ]),
            I = e.useMemo(() => F === n.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ H })` : `rgba(16,16,16, ${ H })`, [
                F,
                G
            ]),
            J = e.useMemo(() => F === n.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [
                F,
                H
            ]);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(r.default, {
                theme: {
                    algorithm: F === n.SiteHeaderTheme.light ? s.default.defaultAlgorithm : s.default.darkAlgorithm,
                    token: {
                        fontFamily: q.Fonts.SFPro
                    }
                },
                children: [
                    (0, d.jsxs)(A, {
                        ref: D,
                        style: a.containerDivStyle,
                        children: [
                            (0, d.jsx)(B, {
                                background: I,
                                hideBorder: a.hideBorder,
                                borderColor: J,
                                children: (0, d.jsx)(g.default.Provider, {
                                    value: h.default,
                                    children: (0, d.jsxs)(C, {
                                        children: [
                                            (0, d.jsx)(u.default, {
                                                theme: a.theme
                                            }),
                                            (0, f.isLoggedIn)() ? (0, d.jsx)(t.default, {
                                                showUpgradeModal: () => B(!0),
                                                theme: F
                                            }) : (0, d.jsx)(l.default, {
                                                theme: a.theme
                                            })
                                        ]
                                    })
                                })
                            }),
                            a.children
                        ]
                    }),
                    A ? (0, d.jsx)(m.default, {
                        id: 'header',
                        visible: A,
                        close: () => B(!1),
                        showModes: !0
                    }) : null,
                    a.includeSpacer ? (0, d.jsx)(p.default, {}) : null
                ]
            })
        });
    };
    const A = k.default.div.attrs({
            className: 'maxWidth'
        })(v || (v = y`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`)),
        B = k.default.header(w || (w = y`
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
        C = k.default.div.attrs({
            className: 'flex maxWidth between vc'
        })(x || (x = y``));
}), c.register('NS10B', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('RrDRa');
    var f = d.createContext(e.default);
}), c.register('RrDRa', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('2RKXD'),
        e = c('TjX5L');
    var f = {
        navigation: new(0, d.default)(),
        billing: new(0, e.default)()
    };
}), c.register('2RKXD', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('6gioo'),
        e = c('UnUp5'),
        f = c('Is2Mj');
    class g {
        constructor() {
            this.currentTab = f.default.accountInformation, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'currentTab', void 0);
    var h = i;
}), c.register('Is2Mj', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).accountInformation = 'accountInformation', e.gameSettings = 'gameSettings', e.billing = 'billing', e.support = 'support';
    var f = g;
}), c.register('TjX5L', function(b, q) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = e.observable.array();
    class g {
        constructor() {
            this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges = f, this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '', this.reset = () => {
                this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges.replace([]), this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '';
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], g.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], g.prototype, 'billingInterval', void 0), (0, d.__decorate)([e.observable], g.prototype, 'hasNextCharge', void 0), (0, d.__decorate)([e.observable], g.prototype, 'nextChargeAmount', void 0), (0, d.__decorate)([e.observable], g.prototype, 'nextChargeDate', void 0), (0, d.__decorate)([e.observable], g.prototype, 'accountBalance', void 0), (0, d.__decorate)([e.observable], g.prototype, 'charges', void 0), (0, d.__decorate)([e.observable], g.prototype, 'cardName', void 0), (0, d.__decorate)([e.observable], g.prototype, 'last4DigitsOfCard', void 0), (0, d.__decorate)([e.observable], g.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.observable], g.prototype, 'canDowngrade', void 0), (0, d.__decorate)([e.observable], g.prototype, 'downgradeMessage', void 0), (0, d.__decorate)([e.observable], g.prototype, 'downgradeDateMessage', void 0), (0, d.__decorate)([e.action], g.prototype, 'reset', void 0);
    var h = i;
}), c.register('iUWIw', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('svNXj'),
        g = c('IsmrL'),
        h = c('iYEuk12'),
        i = c('q721a'),
        j = c('QNMlx24'),
        k = c('euCLs'),
        l = c('8vT5P'),
        m = c('UnfL724');
    var n = (0, e.observer)(a => {
        const o = (0, j.useMediaMatch)('(max-width: 600px)'),
            p = (0, j.useMediaMatch)('(max-width: 750px)'),
            q = [];
        return q.push({
            key: 'join',
            item: (0, d.jsx)(l.default, {
                onClick: () => {
                    window.open('/join', '_self');
                },
                icon: (0, d.jsx)('i', {
                    className: 'far fa-gamepad'
                }),
                theme: m.SiteHeaderTheme.light,
                fontSize: 15,
                children: 'Join Game'
            })
        }), o || p || q.push({
            key: 'pricing',
            item: (0, d.jsx)(l.default, {
                path: i.GROUP_PRICING,
                icon: (0, d.jsx)('i', {
                    className: 'far fa-users'
                }),
                theme: m.SiteHeaderTheme.light,
                fontSize: 15,
                children: '\xA0 Group Pricing'
            })
        }), q.push({
            key: 'signup',
            item: (0, d.jsx)(l.default, {
                path: i.REGISTER_BASE,
                icon: (0, d.jsx)('i', {
                    className: 'far fa-user-plus'
                }),
                theme: m.SiteHeaderTheme.light,
                fontSize: 15,
                children: 'Sign Up'
            })
        }), q.push({
            key: 'login',
            item: (0, d.jsx)(h.default, {
                to: (() => {
                    let r = '/login';
                    return window && window.location && window.location.pathname && window.location.pathname.startsWith('/view') && (r += `?location=${ encodeURIComponent(window.location.pathname) }`), r;
                })(),
                className: 'maxAll',
                children: (0, d.jsx)(g.default, {
                    type: 'primary',
                    size: 'large',
                    icon: (0, d.jsx)(f.default, {}),
                    children: 'Login'
                })
            })
        }), (0, d.jsx)(k.default, {
            items: q
        });
    });
}), c.register('svNXj', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('SsEbQ'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LoginOutlined';
    var i = e.forwardRef(h);
}), c.register('SsEbQ', function(b, c) {
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
}), c.register('euCLs', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('ExtIT'),
        g = c('KV+OV'),
        h = c('5nJMd26'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('+OzS/'),
        l = c('U8PGt'),
        m = c('tYruc25'),
        n = c('PjB0f');
    let o, p, q = a => a;
    var r = a => {
        const {
            width: s
        } = (0, m.useWindowSize)(), [t, u, v] = (0, n.useBoolean)(!1), [w, x] = i.useState(!1), [y, z] = i.useState(null), A = i.useRef(), [B] = (0, l.default)(A), C = i.useRef(), [D] = (0, l.default)(C);
        return i.useEffect(() => {
            !!s && !!B && !D && (!y || s > y) && z(s);
        }, [
            s,
            y,
            B,
            D
        ]), i.useEffect(() => {
            x(!!(y && s <= y));
        }, [
            s,
            y
        ]), (0, d.jsxs)(s, {
            ref: A,
            children: [
                (0, d.jsx)('div', {
                    ref: C,
                    style: {
                        flex: 1
                    }
                }),
                w ? (0, d.jsx)('div', {
                    style: {
                        flexShrink: 0
                    },
                    children: (0, d.jsx)(e.default, {
                        onClick: u,
                        type: 'text',
                        icon: (0, d.jsx)(k.default, {})
                    })
                }) : (0, d.jsx)(t, {
                    style: {
                        opacity: D ? 1 : 0
                    },
                    children: (0, d.jsx)(h.default, {
                        size: 10,
                        split: (0, d.jsx)(f.default, {
                            type: 'vertical'
                        }),
                        direction: 'horizontal',
                        children: a.items.map(a => (0, d.jsx)(i.Fragment, {
                            children: a.item
                        }, a.key))
                    })
                }),
                w ? (0, d.jsx)(g.default, {
                    placement: 'right',
                    open: t,
                    onClose: v,
                    children: (0, d.jsx)(h.default, {
                        size: 2,
                        split: (0, d.jsx)(f.default, {
                            type: 'horizontal'
                        }),
                        direction: 'vertical',
                        className: 'maxWidth',
                        children: a.items.map(a => (0, d.jsx)(i.Fragment, {
                            children: (0, d.jsx)('div', {
                                className: 'maxAll flex-center',
                                children: a.item
                            })
                        }, a.key))
                    })
                }) : null
            ]
        });
    };
    const s = j.default.div(o || (o = q`
  flex: 1;
  overflow: hidden;
  display: flex;
`)),
        t = j.default.div(p || (p = q`
  flex-shrink: 0;
`));
}), c.register('+OzS/', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('2KKLH'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'MenuOutlined';
    var i = e.forwardRef(h);
}), c.register('2KKLH', function(b, c) {
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
                    d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'menu',
        theme: 'outlined'
    };
}), c.register('8vT5P', function(b, o) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('UnfL724'),
        h = c('lmfrI'),
        i = c('iYEuk12'),
        j = c('gSUVO');
    let k;
    var l = a => {
        const {
            icon: m,
            path: n,
            theme: o
        } = p, q = e.useMemo(() => o === g.SiteHeaderTheme.light ? 'inherit' : h.default.White, [o]);
        return (0, d.jsx)(i.default, {
            className: 'flex maxWidth',
            to: n,
            onClick: p.onClick,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(m, {
                color: q,
                style: {
                    fontSize: p.fontSize || 20
                },
                children: [
                    m ? (0, d.jsx)('span', {
                        style: {
                            marginRight: '0.35em',
                            fontSize: '1em'
                        },
                        children: m
                    }) : null,
                    (0, d.jsx)('span', {
                        style: {
                            fontSize: '0.9em',
                            marginTop: '0.1em'
                        },
                        children: p.children
                    })
                ]
            })
        });
    };
    const m = f.default.div.attrs({
        className: 'flex-center'
    })(k || (k = (a => a)`
  line-height: 1;
  background: transparent;
  white-space: nowrap;
  color: ${ 0 };
  font-family: ${ 0 };
  cursor: pointer;
  font-weight: ${ 0 };
`), a => a.color, j.Fonts.SFPro, j.FontWeights.Bold);
}), c.register('C891a', function(b, M) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = () => (0, d.jsx)('div', {
        style: {
            height: 'var(--header-height)',
            flexShrink: 0,
            width: '100%'
        }
    });
}), c.register('Xp99w', function(b, M) {
    a(b.exports, 'default', function() {
        return J;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('qEw51'),
        h = c('M1Vx4'),
        i = c('u3X1v'),
        j = c('KlhV/'),
        k = c('RrDRa'),
        l = c('q721a'),
        m = c('Is2Mj'),
        n = c('PjB0f'),
        o = c('h99Nu'),
        p = c('gSUVO'),
        q = c('2lDHL'),
        r = c('HKcK8'),
        s = c('K4Jzb'),
        t = c('tK/kr24'),
        u = c('b+LEP25'),
        v = c('L2h2Z'),
        w = c('XSFhr'),
        x = c('qgO2124'),
        y = c('k0s2g17'),
        z = c('euCLs'),
        A = c('8vT5P'),
        B = c('mblWO24'),
        C = c('EOKUI'),
        D = c('3EnRx');
    let E, F, G, H = a => a;
    const I = a => (0, d.jsx)('img', {
        src: a.src,
        style: {
            height: '1em',
            display: 'block'
        }
    });
    var J = a => {
        const [K, L, M] = (0, n.useBoolean)(!1), [N, O] = (0, n.useBoolean)(!1), P = (0, n.isUpgraded)(), Q = [], R = e.useMemo(() => () => {
            const S = [{
                    name: 'Settings',
                    icon: w.default,
                    onClick: () => (0, y.NavigateTo)('/settings')
                },
                {
                    name: 'Billing',
                    icon: r.default,
                    onClick: () => {
                        k.default.navigation.currentTab = m.default.billing, (0, y.NavigateTo)('/settings');
                    },
                    blockIf: [n.isStudent]
                },
                {
                    name: 'News',
                    icon: v.default,
                    onClick: () => {
                        L(), O();
                    }
                },
                {
                    name: 'Group Licenses',
                    icon: x.default,
                    onClick: () => (0, y.NavigateTo)(l.GROUP_DASHBOARD),
                    blockIf: [n.isStudent]
                },
                {
                    name: 'GiveKit',
                    icon: s.default,
                    onClick: () => (0, y.NavigateTo)(l.GIVEKIT),
                    blockIf: [n.isStudent]
                },
                {
                    name: 'Support',
                    icon: u.default,
                    onClick: () => {
                        k.default.navigation.currentTab = m.default.support, (0, y.NavigateTo)('/settings');
                    },
                    blockIf: [n.isStudent]
                },
                {
                    name: 'Logout',
                    icon: t.default,
                    onClick: () => (0, n.request)({
                        url: '/logout',
                        success: () => {
                            D.default.reset();
                        },
                        both: () => window.open('/', '_self')
                    })
                }
            ];
            return (0, d.jsx)(d.Fragment, {
                children: (0, d.jsxs)(i.default, {
                    style: {
                        width: 250
                    },
                    children: [
                        (0, n.isStudent)() ? null : (0, d.jsxs)(K, {
                            children: [
                                (0, d.jsx)(L, {
                                    children: (0, n.getFirstName)((0, n.getUser)())
                                }),
                                (0, d.jsx)(M, {
                                    children: (0, q.default)((0, n.getUser)().type)
                                })
                            ]
                        }),
                        S.filter(S => !S.blockIf || !S.blockIf.some(S => S())).map(S => (0, d.jsx)(i.default.Item, {
                            onClick: S.onClick,
                            children: (0, d.jsxs)('div', {
                                className: 'flex vc',
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, d.jsx)(S.icon, {}),
                                    (0, d.jsx)('div', {
                                        style: {
                                            marginLeft: 7
                                        },
                                        children: S.name
                                    })
                                ]
                            })
                        }, S.name))
                    ]
                })
            });
        }, [L]);
        return Q.push({
            key: 'creative',
            item: (0, d.jsx)(A.default, {
                path: l.CREATIVE_BASE,
                icon: (0, d.jsx)(I, {
                    src: '/client/img/header/creative.svg'
                }),
                theme: a.theme,
                children: 'Creative'
            })
        }), Q.push({
            key: 'rewards',
            item: (0, d.jsx)(A.default, {
                path: l.COSMOS_BASE,
                icon: (0, d.jsx)(I, {
                    src: B.default.iconImage
                }),
                theme: a.theme,
                children: B.default.name
            })
        }), Q.push({
            key: 'me',
            item: (0, d.jsx)(g.default, {
                theme: {
                    algorithm: j.default.defaultAlgorithm
                },
                children: (0, d.jsx)(h.default, {
                    trigger: ['click'],
                    overlay: R,
                    children: (0, d.jsx)('div', {
                        className: 'maxWidth',
                        children: (0, d.jsx)(A.default, {
                            icon: (0, d.jsx)(I, {
                                src: '/client/img/header/smile.svg'
                            }),
                            theme: a.theme,
                            children: 'Me'
                        })
                    })
                })
            })
        }), P || (0, n.isStudent)() || Q.push({
            key: 'upgrade',
            item: (0, d.jsx)('div', {
                className: 'maxAll',
                children: (0, d.jsx)(f.default, {
                    size: 'large',
                    type: 'primary',
                    onClick: a.showUpgradeModal,
                    children: 'Upgrade'
                })
            })
        }), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(z.default, {
                    items: Q
                }),
                (0, d.jsx)(e.Suspense, {
                    fallback: null,
                    children: N ? (0, d.jsx)(C.default, {
                        open: K,
                        onClose: M
                    }) : null
                })
            ]
        });
    };
    const K = o.default.div(E || (E = H`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${ 0 };
  color: rgba(0, 0, 0, 0.8);
`), p.Fonts.SFPro),
        L = o.default.div(F || (F = H`
  font-size: 18px;
  font-weight: ${ 0 };
`), p.FontWeights.Bold),
        M = o.default.div(G || (G = H`
  font-size: 12px;
`));
}), c.register('2lDHL', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('0wLl2'),
        e = c('TO+cq');
    var f = a => a === e.PlanIds.pro ? `${ d.COMPANY_NAME } Pro` : a === e.PlanIds.go ? `${ d.COMPANY_NAME } Go` : a === e.PlanIds.proPass ? `${ d.COMPANY_NAME } Pro (Monthly)` : a === e.PlanIds.basic ? `${ d.COMPANY_NAME } Basic` : `Unknown ${ d.COMPANY_NAME } Plan`;
}), c.register('HKcK8', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('SuF5a'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CreditCardOutlined';
    var i = e.forwardRef(h);
}), c.register('SuF5a', function(b, c) {
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
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'credit-card',
        theme: 'outlined'
    };
}), c.register('K4Jzb', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+O/o9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'HeartOutlined';
    var i = e.forwardRef(h);
}), c.register('+O/o9', function(b, c) {
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
                    d: 'M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z'
                }
            }]
        },
        name: 'heart',
        theme: 'outlined'
    };
}), c.register('XSFhr', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('o3fwB'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'SettingOutlined';
    var i = e.forwardRef(h);
}), c.register('o3fwB', function(b, c) {
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
                    d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z'
                }
            }]
        },
        name: 'setting',
        theme: 'outlined'
    };
}), c.register('umlOF', function(b, r) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('KzqIz'),
        h = c('Vlfxs'),
        i = c('Xu07t'),
        j = c('UnfL724');
    let k, l, m = a => a;
    var n = (0, h.observer)(a => {
        const {
            navigation: {
                homeUrl: o
            }
        } = e.useContext(i.default), p = a.theme === j.SiteHeaderTheme.dark ? '/client/img/svgLogoWhite.svg' : '/client/img/svgLogo.svg';
        return (0, d.jsx)(o, {
            to: o,
            children: (0, d.jsx)(p, {
                src: p
            }, p)
        });
    });
    const o = (0, f.default)(g.Link)(k || (k = m``)),
        p = f.default.img.attrs({
            alt: 'Gimkit Logo'
        })(l || (l = m`
  height: 32px;
  margin-right: 90px;
`));
});