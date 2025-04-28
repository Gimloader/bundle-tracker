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
a.register('nNplT', function(b, c) {
    _f(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('+i8ep'),
        h = a('L9I9e'),
        i = a('ulE4q'),
        j = a('1P5ls'),
        k = a('fmVdR'),
        l = a('YRlpt'),
        m = a('cvto726'),
        n = a('cH8qQ'),
        o = a('aG/k7'),
        p = a('Axq+p'),
        q = a('YYeL3');
    let r;
    var _s = _f => {
        const [t, u] = e.useState(!0), [v, w] = e.useState([]), [x, y] = (0, h.useLocalstorage)('last-viewed-news', 0), [z, A] = e.useState(!1), [B, C, D] = (0, f.useBoolean)(!0), E = e.useCallback(() => {
            A(!0);
        }, [A]), F = e.useCallback(() => {
            A(!1), _f.onClose && _f.onClose();
        }, [
            A,
            _f.onClose
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
                        H && (H && H.publishDate > G && _f.allowAutoOpen && E(), y(H.publishDate));
                    },
                    error: t => {
                        _f.open && (0, f.throwMessageError)({
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
                _f.open && E();
            }, [_f.open]), t)
            return null;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_t, {}),
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
                                    children: v.map((_f, t) => (0, d.jsx)(o.default, {
                                        item: _f,
                                        isFirstItem: 0 === t
                                    }, _f._id))
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
    const _t = (0, p.createGlobalStyle)(r || (r = (_f => _f)`
  .news-modal > .ant-modal-content {
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), a.register('L9I9e', function(b, c) {
    _f(b.exports, 'useLocalstorage', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g) {
        void 0 === g && (g = null);
        var h = (0, d.useState)(_k()),
            i = h[0],
            j = h[1];

        function _k() {
            if ('undefined' == typeof localStorage)
                return null;
            var l = localStorage.getItem(_f) || 'null';
            try {
                return JSON.parse(l);
            } catch (_f) {
                console.error(_f);
            }
            return l;
        }
        var k = (0, d.useCallback)(function(l) {
                var m;
                j(l), m = l, 'undefined' != typeof localStorage && localStorage.setItem(_f, JSON.stringify(m));
            }, []),
            l = (0, d.useCallback)(function(m) {
                m.storageArea === localStorage && m.key === _f && j(m.newValue);
            }, []),
            m = (0, d.useCallback)(function() {
                if (k(null), 'undefined' == typeof localStorage)
                    return !1;
                localStorage.removeItem(_f);
            }, [_f]);
        return (0, d.useEffect)(function() {
            var n;
            null !== (n = _e()) && 'null' !== n || k(g);
        }, []), (0, d.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', l),
                    function() {
                        window.removeEventListener('storage', l);
                    };
            console.warn('useLocalstorage: window is undefined.');
        }, []), Object.assign([
            i,
            k,
            m
        ], {
            value: i,
            remove: m,
            set: k
        });
    }
}), a.register('aG/k7', function(b, c) {
    _E(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        _e = a('LEQ5w'),
        f = a('w0a3U'),
        g = a('oBBW6'),
        h = a('7B+hJ16'),
        i = a('+i8ep'),
        j = a('Axq+p'),
        k = a('PMl60'),
        l = a('ECzOP'),
        m = a('b5kvC'),
        n = a('9R7cy');
    let o, p, q, r, s, t, u = _E => _E;
    const v = _F(h)(() => a('7cBN63')),
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
    var _x = _E => {
        const [y, z] = _e.useState(), {
            item: {
                notionPageId: A,
                publishDate: B
            }
        } = _E;
        (0, i.useDidMount)(() => {
            v.preload();
        }), _e.useEffect(() => {
            !y && A && (0, f.Request)({
                url: `/api/content/${ A }`,
                cacheKey: 'NOTION_CONTENT',
                success: _E => z(_E)
            });
        }, [
            A,
            y
        ]);
        return (0, d.jsx)(_y, {
            children: (() => {
                if (!y)
                    return (0, d.jsx)(w, {});
                const {
                    title: C,
                    coverImage: D
                } = (() => {
                    var _E, _F;
                    const G = A.replace(/-/g, ''),
                        H = Object.keys(y).find(_E => _E.replace(/-/g, '') === G);
                    if (!H)
                        return null;
                    const I = y[H];
                    var J;
                    const K = null !== (J = null === (_E = I.value.properties) || void 0 === _E ? void 0 : _E.title[0][0]) && void 0 !== J ? J : 'News';
                    var L;
                    let M = null !== (L = null === (_F = I.value.format) || void 0 === _F ? void 0 : _F.page_cover) && void 0 !== L ? L : null;
                    return M && M.startsWith('/') && (M = `https://notion.so${ M }`), {
                        title: K,
                        coverImage: M
                    };
                })();
                return (0, d.jsxs)(_e.Suspense, {
                    fallback: (0, d.jsx)(w, {}),
                    children: [
                        D ? (0, d.jsx)(_z, {
                            draggable: !1,
                            src: D
                        }) : null,
                        (0, d.jsxs)(_A, {
                            children: [
                                (0, d.jsxs)(_B, {
                                    style: {
                                        marginTop: _b.isFirstItem && !D ? 30 : 0
                                    },
                                    children: [
                                        (0, d.jsx)(_C, {
                                            children: C
                                        }),
                                        (0, d.jsxs)(_D, {
                                            children: [
                                                (0, d.jsx)(n.default, {
                                                    name: 'far fa-calendar-alt',
                                                    style: {
                                                        fontSize: '0.8em',
                                                        marginRight: 5
                                                    }
                                                }),
                                                (0, k.capitalizeFirstLetter)(_c(l).unix(B).fromNow())
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
    const _y = j.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = u``)),
        _z = j.default.img.attrs({
            className: 'maxWidth'
        })(p || (p = u`
  margin-bottom: 25px;
`)),
        _A = j.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u`
  padding: 0px 20px;
  font-family: ${ 0 };
`), m.Fonts.SFPro),
        _B = j.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(r || (r = u`
  line-height: 1;
  margin-bottom: 20px;
`)),
        _C = j.default.div(s || (s = u`
  font-size: 28px;
  font-weight: ${ 0 };
`), m.FontWeights.Bold),
        _D = j.default.div.attrs({
            className: 'flex vc'
        })(t || (t = u`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`));
}), a.register('7cBN63', function(_b, _c) {
    _b.exports = Promise.all([
        a('o60By')(new URL(a('HmN9A').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + a('HmN9A').resolve('6iUO5'))
    ]).then(() => a('cg5Ud'));
}), a.register('o60By', function(b, c) {
    var d = a('0k2Qd');
    b.exports = d(function(e) {
        return new Promise(function(f, g) {
            var h = document.getElementsByTagName('link');
            if ([].concat(h).some(function(i) {
                    return i.href === e && i.rel.indexOf('stylesheet') > -1;
                }))
                f();
            else {
                var i = document.createElement('link');
                i.rel = 'stylesheet', i.href = e, i.onerror = function(j) {
                    i.onerror = i.onload = null, i.remove(), g(j);
                }, i.onload = function() {
                    i.onerror = i.onload = null, f();
                }, document.getElementsByTagName('head')[0].appendChild(i);
            }
        });
    });
}), a.register('0k2Qd', function(b, c) {
    var d = {},
        e = {},
        f = {};

    function g(h) {
        switch (h) {
            case 'preload':
                return e;
            case 'prefetch':
                return f;
            default:
                return d;
        }
    }
    b.exports = function(g, h) {
        return function(i) {
            var j = _f(h);
            return j[i] ? j[i] : j[i] = g.apply(null, arguments).catch(function(k) {
                throw delete j[i], k;
            });
        };
    };
}), a.register('HmN9A', function(b, c) {
    var d, e;
    _f(b.exports, 'register', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'resolve', function() {
        return e;
    }, function(_f) {
        return e = _f;
    });
    var _f = {};
    d = function(g) {
        for (var h = Object.keys(g), i = 0; i < h.length; i++)
            _f[h[i]] = g[h[i]];
    }, e = function(g) {
        var h = _f[g];
        if (null == h)
            throw new Error('Could not resolve bundle with id ' + g);
        return h;
    };
}), a.register('YYeL3', function(b, c) {
    _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ibLRf19'),
        g = a('ulE4q'),
        h = a('1P5ls'),
        i = a('cH8qQ'),
        j = a('QECub'),
        k = a('b5kvC'),
        l = a('hHkFq');
    let m, n, o, p, q = _r => _r;
    var _r = _r => (0, d.jsxs)(_s, {
        children: [
            (0, d.jsxs)(_t, {
                children: [
                    (0, d.jsxs)(_u, {
                        children: [
                            l.COMPANY_NAME,
                            ' News'
                        ]
                    }),
                    (0, d.jsxs)(_v, {
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
                        onClick: _r.close,
                        type: 'text',
                        icon: (0, d.jsx)(j.default, {})
                    })
                })
            })
        ]
    });
    const _s = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = q`
  color: ${ 0 };
  padding: 20px;
  background: #730aad;
`), f.default.White),
        _t = e.default.div(n || (n = q``)),
        _u = e.default.div(o || (o = q`
  font-size: 16px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _v = e.default.div(p || (p = q`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`));
}), a.register('RJjEi', function(b, c) {
    _r(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('aHDfy');
    var _f = _r => (0, d.jsx)(e.default, {
        ..._r
    });
}), a.register('aHDfy', function(b, c) {
    _r(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('R3x1N'),
        h = a('78pxp'),
        i = a('ptkti24'),
        j = a('Genmk'),
        k = a('Axq+p'),
        l = a('voEoW'),
        m = a('BtZXP'),
        n = a('s+8hx17'),
        o = a('bdn4O17'),
        p = a('iIoYI'),
        q = a('b5kvC'),
        r = a('1P5ls'),
        s = a('cH8qQ'),
        t = a('Rzoyo'),
        u = a('SjnO4');
    let v, w, x, y = _r => _r;
    var _z = _r => {
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
                return null !== (G = _r.theme) && void 0 !== G ? G : n.SiteHeaderTheme.light;
            }, [_r.theme]),
            G = e.useMemo(() => {
                var H;
                return null !== (H = _r.alpha) && void 0 !== H ? H : o.SiteHeaderAlpha.standard;
            }, [_r.alpha]),
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
                    (0, d.jsxs)(_A, {
                        ref: D,
                        style: _r.containerDivStyle,
                        children: [
                            (0, d.jsx)(_B, {
                                background: I,
                                hideBorder: _r.hideBorder,
                                borderColor: J,
                                children: (0, d.jsx)(g.default.Provider, {
                                    value: h.default,
                                    children: (0, d.jsxs)(_C, {
                                        children: [
                                            (0, d.jsx)(u.default, {
                                                theme: _r.theme
                                            }),
                                            (0, f.isLoggedIn)() ? (0, d.jsx)(t.default, {
                                                showUpgradeModal: () => B(!0),
                                                theme: F
                                            }) : (0, d.jsx)(l.default, {
                                                theme: _r.theme
                                            })
                                        ]
                                    })
                                })
                            }),
                            _r.children
                        ]
                    }),
                    A ? (0, d.jsx)(m.default, {
                        id: 'header',
                        visible: A,
                        close: () => B(!1),
                        showModes: !0
                    }) : null,
                    _r.includeSpacer ? (0, d.jsx)(p.default, {}) : null
                ]
            })
        });
    };
    const _A = k.default.div.attrs({
            className: 'maxWidth'
        })(v || (v = y`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`)),
        _B = k.default.header(w || (w = y`
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
`), _r => _r.background, _r => _r.hideBorder ? 'rgba(255,255,255,0)' : _r.borderColor),
        _C = k.default.div.attrs({
            className: 'flex maxWidth between vc'
        })(x || (x = y``));
}), a.register('R3x1N', function(b, c) {
    _r(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('78pxp');
    var _f = d.createContext(e.default);
}), a.register('78pxp', function(b, c) {
    _r(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Ge19+'),
        e = a('f2xFb');
    var _f = {
        navigation: new(0, d.default)(),
        billing: new(0, e.default)()
    };
}), a.register('Ge19+', function(b, c) {
    _r(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('YuT/D'),
        f = a('ahAbF');
    class g {
        constructor() {
            this.currentTab = f.default.accountInformation, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'currentTab', void 0);
    var _h = g;
}), a.register('ahAbF', function(b, c) {
    let d;
    var e;
    _r(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).accountInformation = 'accountInformation', e.gameSettings = 'gameSettings', e.billing = 'billing', e.support = 'support';
    var _f = d;
}), a.register('f2xFb', function(b, c) {
    _r(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = e.observable.array();
    class g {
        constructor() {
            this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges = f, this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '', this.reset = () => {
                this.planName = '', this.planDescription = '', this.billingInterval = '', this.hasNextCharge = false, this.nextChargeAmount = '', this.nextChargeDate = '', this.accountBalance = 0, this.charges.replace([]), this.cardName = '', this.last4DigitsOfCard = '', this.stripePublicKey = '', this.canDowngrade = false, this.downgradeMessage = '', this.downgradeDateMessage = '';
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], g.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], g.prototype, 'billingInterval', void 0), (0, d.__decorate)([e.observable], g.prototype, 'hasNextCharge', void 0), (0, d.__decorate)([e.observable], g.prototype, 'nextChargeAmount', void 0), (0, d.__decorate)([e.observable], g.prototype, 'nextChargeDate', void 0), (0, d.__decorate)([e.observable], g.prototype, 'accountBalance', void 0), (0, d.__decorate)([e.observable], g.prototype, 'charges', void 0), (0, d.__decorate)([e.observable], g.prototype, 'cardName', void 0), (0, d.__decorate)([e.observable], g.prototype, 'last4DigitsOfCard', void 0), (0, d.__decorate)([e.observable], g.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.observable], g.prototype, 'canDowngrade', void 0), (0, d.__decorate)([e.observable], g.prototype, 'downgradeMessage', void 0), (0, d.__decorate)([e.observable], g.prototype, 'downgradeDateMessage', void 0), (0, d.__decorate)([e.action], g.prototype, 'reset', void 0);
    var _h = g;
}), a.register('voEoW', function(b, c) {
    _r(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('HM87Y'),
        g = a('ulE4q'),
        h = a('2HvvA11'),
        i = a('gs4MT'),
        j = a('/2bBN24'),
        k = a('76NCl'),
        l = a('IWIj7'),
        m = a('s+8hx17');
    var _n = (0, e.observer)(_r => {
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
                    let _r = '/login';
                    return window && window.location && window.location.pathname && window.location.pathname.startsWith('/view') && (_r += `?location=${ encodeURIComponent(window.location.pathname) }`), _r;
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
}), a.register('HM87Y', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('2dRy9'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LoginOutlined';
    var _i = e.forwardRef(h);
}), a.register('2dRy9', function(b, c) {
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
}), a.register('76NCl', function(b, c) {
    _i(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('fmVdR'),
        g = a('sgToH'),
        h = a('cvto726'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('HjqyT'),
        l = a('BXKZi0'),
        m = a('ptkti24'),
        n = a('PMl60');
    let o, p, q = _i => _i;
    var _r = _i => {
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
        ]), (0, d.jsxs)(_s, {
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
                }) : (0, d.jsx)(_t, {
                    style: {
                        opacity: D ? 1 : 0
                    },
                    children: (0, d.jsx)(h.default, {
                        size: 10,
                        split: (0, d.jsx)(f.default, {
                            type: 'vertical'
                        }),
                        direction: 'horizontal',
                        children: _i.items.map(_i => (0, d.jsx)(i.Fragment, {
                            children: _i.item
                        }, _i.key))
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
                        children: _i.items.map(_i => (0, d.jsx)(i.Fragment, {
                            children: (0, d.jsx)('div', {
                                className: 'maxAll flex-center',
                                children: _i.item
                            })
                        }, _i.key))
                    })
                }) : null
            ]
        });
    };
    const _s = j.default.div(o || (o = q`
  flex: 1;
  overflow: hidden;
  display: flex;
`)),
        _t = j.default.div(p || (p = q`
  flex-shrink: 0;
`));
}), a.register('HjqyT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('A7k50'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'MenuOutlined';
    var _i = e.forwardRef(h);
}), a.register('A7k50', function(b, c) {
    _S(b.exports, 'default', function() {
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
                    d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'menu',
        theme: 'outlined'
    };
}), a.register('IWIj7', function(b, c) {
    _S(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('s+8hx17'),
        h = a('sHRDd'),
        i = a('2HvvA11'),
        j = a('b5kvC');
    let k;
    var _l = _S => {
        const {
            icon: m,
            path: n,
            theme: o
        } = _S, p = e.useMemo(() => o === g.SiteHeaderTheme.light ? 'inherit' : h.default.White, [o]);
        return (0, d.jsx)(i.default, {
            className: 'flex maxWidth',
            to: n,
            onClick: _S.onClick,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(_m, {
                color: p,
                style: {
                    fontSize: _S.fontSize || 20
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
                        children: _S.children
                    })
                ]
            })
        });
    };
    const _m = f.default.div.attrs({
        className: 'flex-center'
    })(k || (k = (_S => _S)`
  line-height: 1;
  background: transparent;
  white-space: nowrap;
  color: ${ 0 };
  font-family: ${ 0 };
  cursor: pointer;
  font-weight: ${ 0 };
`), _S => _S.color, j.Fonts.SFPro, j.FontWeights.Bold);
}), a.register('iIoYI', function(b, c) {
    _S(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = () => (0, d.jsx)('div', {
        style: {
            height: 'var(--header-height)',
            flexShrink: 0,
            width: '100%'
        }
    });
}), a.register('Rzoyo', function(b, c) {
    _S(b.exports, 'default', function() {
        return _J;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('1P5ls'),
        h = a('/rAT0'),
        i = a('WfOD7'),
        j = a('cH8qQ'),
        k = a('78pxp'),
        l = a('gs4MT'),
        m = a('ahAbF'),
        n = a('PMl60'),
        o = a('Axq+p'),
        p = a('b5kvC'),
        q = a('OI9Yf'),
        r = a('XetsG'),
        s = a('mBug4'),
        t = a('+UyIc24'),
        u = a('dBHoZ22'),
        v = a('kXV54'),
        w = a('LuMZa'),
        x = a('gCqar24'),
        y = a('jzxyj10'),
        z = a('76NCl'),
        A = a('IWIj7'),
        B = a('PqMjn20'),
        C = a('nNplT'),
        D = a('THxMC');
    let E, F, G, H = _S => _S;
    const I = _S => (0, d.jsx)('img', {
        src: _S.src,
        style: {
            height: '1em',
            display: 'block'
        }
    });
    var _J = _S => {
        const [K, L, M] = (0, n.useBoolean)(!1), [N, O] = (0, n.useBoolean)(!1), P = (0, n.isUpgraded)(), Q = [], R = e.useMemo(() => () => {
            const _S = [{
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
                        (0, n.isStudent)() ? null : (0, d.jsxs)(_K, {
                            children: [
                                (0, d.jsx)(_L, {
                                    children: (0, n.getFirstName)((0, n.getUser)())
                                }),
                                (0, d.jsx)(_M, {
                                    children: (0, q.default)((0, n.getUser)().type)
                                })
                            ]
                        }),
                        _S.filter(_S => !_S.blockIf || !_S.blockIf.some(_S => _S())).map(_S => (0, d.jsx)(i.default.Item, {
                            onClick: _S.onClick,
                            children: (0, d.jsxs)('div', {
                                className: 'flex vc',
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, d.jsx)(_S.icon, {}),
                                    (0, d.jsx)('div', {
                                        style: {
                                            marginLeft: 7
                                        },
                                        children: _S.name
                                    })
                                ]
                            })
                        }, _S.name))
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
                theme: _i.theme,
                children: 'Creative'
            })
        }), Q.push({
            key: 'rewards',
            item: (0, d.jsx)(A.default, {
                path: l.COSMOS_BASE,
                icon: (0, d.jsx)(I, {
                    src: B.default.iconImage
                }),
                theme: _i.theme,
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
                            theme: _i.theme,
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
                    onClick: _i.showUpgradeModal,
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
    const _K = o.default.div(E || (E = H`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${ 0 };
  color: rgba(0, 0, 0, 0.8);
`), p.Fonts.SFPro),
        _L = o.default.div(F || (F = H`
  font-size: 18px;
  font-weight: ${ 0 };
`), p.FontWeights.Bold),
        _M = o.default.div(G || (G = H`
  font-size: 12px;
`));
}), a.register('OI9Yf', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('hHkFq'),
        e = a('nCi40');
    var _f = _i => _i === e.PlanIds.pro ? `${ d.COMPANY_NAME } Pro` : _i === e.PlanIds.go ? `${ d.COMPANY_NAME } Go` : _i === e.PlanIds.proPass ? `${ d.COMPANY_NAME } Pro (Monthly)` : _i === e.PlanIds.basic ? `${ d.COMPANY_NAME } Basic` : `Unknown ${ d.COMPANY_NAME } Plan`;
}), a.register('XetsG', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Dh/f9'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CreditCardOutlined';
    var _i = e.forwardRef(h);
}), a.register('Dh/f9', function(b, c) {
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
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'credit-card',
        theme: 'outlined'
    };
}), a.register('mBug4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('J4ZXu'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'HeartOutlined';
    var _i = e.forwardRef(h);
}), a.register('J4ZXu', function(b, c) {
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
                    d: 'M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z'
                }
            }]
        },
        name: 'heart',
        theme: 'outlined'
    };
}), a.register('LuMZa', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('MH0UT'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'SettingOutlined';
    var _i = e.forwardRef(h);
}), a.register('MH0UT', function(b, c) {
    e(b.exports, 'default', function() {
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
                    d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z'
                }
            }]
        },
        name: 'setting',
        theme: 'outlined'
    };
}), a.register('SjnO4', function(b, c) {
    e(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('wYGc3'),
        h = a('2x11J'),
        i = a('Genmk'),
        j = a('s+8hx17');
    let k, l, m = e => e;
    var _n = (0, h.observer)(e => {
        const {
            navigation: {
                homeUrl: o
            }
        } = e.useContext(i.default), p = e.theme === j.SiteHeaderTheme.dark ? '/client/img/svgLogoWhite.svg' : '/client/img/svgLogo.svg';
        return (0, d.jsx)(_o, {
            to: o,
            children: (0, d.jsx)(_p, {
                src: p
            }, p)
        });
    });
    const _o = (0, f.default)(g.Link)(k || (k = m``)),
        _p = f.default.img.attrs({
            alt: 'Gimkit Logo'
        })(l || (l = m`
  height: 32px;
  margin-right: 90px;
`));
});