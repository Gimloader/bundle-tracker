function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('GdMw0', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _w(b.exports, 'default', function() {
        return _j;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('cOojK'),
        h = a('W2+XK'),
        i = a('x/Eg+0');
    var _j = () => (f.useEffect(() => () => {
        i.default.checkout.reset(), i.default.navigation.reset();
    }, []), (0, e.jsx)(h.default.Provider, {
        value: i.default,
        children: (0, e.jsx)(g.default, {})
    }));
}), a.register('cOojK', function(b, c) {
    _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('2x11J'),
        i = a('W2+XK'),
        j = a('xguoe0'),
        k = a('gs4MT'),
        l = a('Wg/LK'),
        m = a('b5kvC'),
        n = a('q5U/e'),
        o = a('I3I1F'),
        p = a('KBJS7'),
        q = a('PMl60'),
        r = a('jzxyj10');
    let s, t, u = _w => _w;
    var _v = (0, h.observer)(() => {
        const {
            navigation: _w
        } = e.useContext(i.default);
        e.useEffect(() => {
            if ((0, q.isStudent)())
                return void(0, r.NavigateTo)(k.DASHBOARD);
            (0, q.isLoggedIn)() && (0, n.default)(), (0, p.default)();
            const x = (0, q.getUrlVariable)('coupon');
            x && (0, o.default)(x);
        }, []);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_w, {
                    children: (0, d.jsx)(_x, {
                        children: (() => {
                            const {
                                screen: x
                            } = _w;
                            return x === j.Screen.checkout ? (0, d.jsx)(l.default, {}) : null;
                        })()
                    })
                }),
                (0, d.jsx)(q.Title, {
                    title: 'Checkout'
                })
            ]
        });
    });
    const _w = f.default.div(s || (s = u`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _x = f.default.div.attrs({
            className: 'scroll-y'
        })(t || (t = u`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), g.default.White, m.Fonts.SFPro, g.default.Black);
}), a.register('W2+XK', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('x/Eg+0');
    var _f = d.createContext(e.default);
}), a.register('x/Eg+0', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('xguoe0'),
        e = a('QKunP');
    var _f = {
        navigation: new(0, d.default)(),
        checkout: new(0, e.default)()
    };
}), a.register('xguoe0', function(b, c) {
    _v(b.exports, 'Screen', function() {
        return _f;
    }), _v(b.exports, 'default', function() {
        return _k;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    let _f;
    (_f || (_f = {})).checkout = 'checkout';
    const g = {
            screen: _f.checkout,
            loadingTokenSubmit: !1
        },
        {
            screen: h,
            loadingTokenSubmit: i
        } = g;
    class j {
        constructor() {
            this.screen = h, this.loadingTokenSubmit = i, this.reset = () => {
                Object.keys(g).forEach(_v => this[_v] = g[_v]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], j.prototype, 'screen', void 0), (0, d.__decorate)([e.observable], j.prototype, 'loadingTokenSubmit', void 0), (0, d.__decorate)([e.action], j.prototype, 'reset', void 0);
    var _k = j;
}), a.register('QKunP', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = {
            planName: '',
            planId: '',
            couponId: '',
            planCost: 0,
            planDescription: '',
            accountCredit: 0,
            percentageOff: 1,
            amountOff: 0,
            couponDescription: '',
            hasCoupon: !1,
            couponOneUseOnly: !0,
            couponIsOnlyForPlan: '',
            existingPayingPlan: '',
            stripePublicKey: ''
        },
        {
            planName: g,
            planId: h,
            couponId: i,
            planCost: j,
            planDescription: k,
            accountCredit: l,
            percentageOff: m,
            amountOff: n,
            couponDescription: o,
            hasCoupon: p,
            couponOneUseOnly: q,
            couponIsOnlyForPlan: r,
            existingPayingPlan: s,
            stripePublicKey: t
        } = f;
    class u {
        get totalCost() {
            const _v = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return _v < 0 ? 0 : _v;
        }
        constructor() {
            this.planName = g, this.planId = h, this.couponId = i, this.planCost = j, this.planDescription = k, this.accountCredit = l, this.percentageOff = m, this.amountOff = n, this.couponDescription = o, this.hasCoupon = p, this.couponOneUseOnly = q, this.couponIsOnlyForPlan = r, this.existingPayingPlan = s, this.stripePublicKey = t, this.reset = () => {
                Object.keys(f).forEach(_w => {
                    this[_w] = f[_w];
                });
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], u.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planCost', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'accountCredit', void 0), (0, d.__decorate)([e.observable], u.prototype, 'percentageOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'amountOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'hasCoupon', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponOneUseOnly', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponIsOnlyForPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'existingPayingPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.computed], u.prototype, 'totalCost', null), (0, d.__decorate)([e.action], u.prototype, 'reset', void 0);
    var _v = u;
}), a.register('Wg/LK', function(b, c) {
    _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('fmVdR'),
        h = a('6CIVV'),
        i = a('wYGc3'),
        j = a('gs4MT'),
        k = a('g+sKd'),
        l = a('5mvMJ'),
        m = a('2x11J'),
        n = a('W2+XK'),
        o = a('rC9KP'),
        p = a('nCi40'),
        q = a('1Nso7'),
        r = a('PMl60'),
        s = a('Rtfgy20'),
        t = a('jzxyj10');
    let u;
    var _v = (0, m.observer)(() => {
        const {
            checkout: _w
        } = e.useContext(n.default);
        e.useEffect(() => {
            var x;
            (0, o.default)(p.PlanIds.pro);
            const y = (0, r.getUser)();
            if (!(null === (x = y.freeTrial) || void 0 === x ? void 0 : x.currentlyOnFreeTrial) && (0, r.isUpgraded)()) {
                if (y.type === p.PlanIds.pro) {
                    if ((0, s.onlyOfferAnnualUpgrade)())
                        return void(0, t.NavigateTo)(j.DASHBOARD);
                    (0, o.default)(p.PlanIds.proPass);
                }
                _w.existingPayingPlan = y.type;
            }
        }, []);
        const x = (0, r.getUser)().type === p.PlanIds.proPass || (0, s.onlyOfferAnnualUpgrade)();
        return !_w.stripePublicKey || x ? (0, d.jsxs)('div', {
            className: 'maxWidth flex hc',
            style: {
                padding: 40
            },
            children: [
                (0, d.jsx)(h.default, {
                    size: 'large'
                }),
                x ? (0, d.jsx)(l.default, {}) : null
            ]
        }) : (0, d.jsxs)(_w, {
            children: [
                (0, d.jsx)(i.Link, {
                    to: j.DASHBOARD,
                    children: (0, d.jsx)('img', {
                        src: '/client/img/svgLogo.svg',
                        style: {
                            width: 158,
                            marginTop: 6
                        }
                    })
                }),
                (0, d.jsx)(g.default, {}),
                (0, s.onlyOfferAnnualUpgrade)() ? null : (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsxs)('div', {
                            className: 'flex maxWidth',
                            style: {
                                justifyContent: 'space-between',
                                marginTop: 10
                            },
                            children: [
                                (0, d.jsx)(q.default, {
                                    title: 'Annually',
                                    description: (0, d.jsxs)('span', {
                                        children: [
                                            '$59.88 a year',
                                            (0, d.jsx)('br', {}),
                                            'That works out to $4.99 a month'
                                        ]
                                    }),
                                    selected: _w.planId === p.PlanIds.pro,
                                    disabled: _w.existingPayingPlan && _w.existingPayingPlan === p.PlanIds.pro || _w.couponIsOnlyForPlan && _w.couponIsOnlyForPlan !== p.PlanIds.pro,
                                    onClick: () => (0, o.default)(p.PlanIds.pro),
                                    showSaveTag: !0
                                }),
                                (0, d.jsx)(q.default, {
                                    title: 'Monthly',
                                    description: (0, d.jsx)('span', {
                                        children: '$14.99 a month'
                                    }),
                                    selected: _w.planId === p.PlanIds.proPass,
                                    disabled: _w.existingPayingPlan && _w.existingPayingPlan === p.PlanIds.proPass || _w.couponIsOnlyForPlan && _w.couponIsOnlyForPlan !== p.PlanIds.proPass,
                                    onClick: () => (0, o.default)(p.PlanIds.proPass)
                                })
                            ]
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                }),
                (0, d.jsx)(k.default, {}),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(l.default, {})
            ]
        });
    });
    const _w = f.default.div(u || (u = (_p => _p)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`));
}), a.register('g+sKd', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('Axq+p'),
        h = a('W2+XK'),
        i = a('b5kvC'),
        j = a('ctFqV'),
        k = a('fmVdR');
    let l, m, n = _p => _p;
    var _o = (0, f.observer)(() => {
        const {
            checkout: _p
        } = e.useContext(h.default);
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsxs)(_p, {
                    children: [
                        (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsx)('div', {
                                    style: {
                                        fontWeight: i.FontWeights.UltraBold,
                                        fontSize: 23,
                                        marginBottom: -7
                                    },
                                    children: _p.planName
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        fontSize: 13,
                                        opacity: 0.8
                                    },
                                    children: _p.planDescription
                                })
                            ]
                        }),
                        (0, d.jsx)(_q, {
                            children: (0, j.centsToFormatedMoney)(_p.planCost)
                        })
                    ]
                }),
                _p.hasCoupon ? (0, d.jsxs)(_p, {
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 15
                            },
                            children: _p.couponDescription || 'Coupon'
                        }),
                        (0, d.jsx)('div', {
                            children: (0, d.jsxs)(_q, {
                                style: {
                                    color: 'green'
                                },
                                children: [
                                    '-',
                                    (0, j.centsToFormatedMoney)(_p.amountOff ? _p.amountOff : _p.percentageOff ? _p.planCost * (1 - _p.percentageOff) : 0)
                                ]
                            })
                        })
                    ]
                }) : null,
                _p.accountCredit ? (0, d.jsxs)(_p, {
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 15
                            },
                            children: 'Account Credit'
                        }),
                        (0, d.jsxs)(_q, {
                            style: {
                                color: 'green'
                            },
                            children: [
                                '-',
                                (0, j.centsToFormatedMoney)(_p.accountCredit)
                            ]
                        })
                    ]
                }) : null,
                _p.totalCost !== _p.planCost ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(k.default, {}),
                        (0, d.jsxs)(_p, {
                            children: [
                                (0, d.jsx)('div', {}),
                                (0, d.jsx)(_q, {
                                    style: {
                                        fontWeight: i.FontWeights.UltraBold
                                    },
                                    children: (0, j.centsToFormatedMoney)(_p.totalCost)
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        });
    });
    const _p = g.default.div(l || (l = n`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        _q = g.default.div(m || (m = n`
  font-size: 18px;
`));
}), a.register('ctFqV', function(b, c) {
    _p(b.exports, 'centsToFormatedMoney', function() {
        return _d;
    });
    const _d = _p => (_p / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), a.register('5mvMJ', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('W2+XK'),
        h = a('Axq+p'),
        i = a('AzS0C1'),
        j = a('PMl60'),
        k = a('ulE4q'),
        l = a('Rtfgy20'),
        m = a('nCi40');
    let n;
    var _o = (0, f.observer)(() => {
        const [_p, q] = e.useState(!1), {
            checkout: r
        } = e.useContext(g.default);
        e.useEffect(() => {
            r.planId && r.stripePublicKey && ((0, l.onlyOfferAnnualUpgrade)() || (0, j.getUser)().type === m.PlanIds.proPass) && r.existingPayingPlan !== r.planId && c().then().catch(_p => !1);
        }, [
            r.existingPayingPlan,
            r.stripePublicKey,
            r.planId
        ]);
        const s = async () => {
            if (r.stripePublicKey) {
                if (_p)
                    return;
                let t;
                q(!0);
                try {
                    t = await (0, i.loadStripe)(r.stripePublicKey);
                } catch (_p) {
                    q(!1), (0, j.throwMessageError)({
                        default: {
                            title: 'Connection Error',
                            content: 'An error ocurred while connecting to our payments provider. Please try again later'
                        }
                    });
                }
                t && (0, j.request)({
                    url: '/api/billing/create-upgrade-session',
                    method: 'POST',
                    data: {
                        plan: r.planId
                    },
                    success: async _p => {
                        const u = _p;
                        let v;
                        try {
                            if (v = await t.redirectToCheckout({
                                    sessionId: u.id
                                }), v && v.error)
                                throw v.error;
                        } catch (_p) {
                            q(!1), (0, j.throwMessageError)({
                                e: _p,
                                default: {
                                    title: 'Connection Error',
                                    content: 'An error ocurred. Please try again later'
                                }
                            });
                        }
                    },
                    error: _p => {
                        q(!1), (0, j.throwMessageError)({
                            e: _p,
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                });
            }
        };
        return (0, j.getUser)().type === m.PlanIds.proPass || (0, l.onlyOfferAnnualUpgrade)() ? null : (0, d.jsx)('div', {
            className: 'flex flex-column hc vc maxWidth',
            children: (0, d.jsx)(_p, {
                children: (0, d.jsx)(k.default, {
                    id: 'checkout-button',
                    onClick: () => {
                        s().then().catch(_p => !1);
                    },
                    loading: _p,
                    type: 'primary',
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    disabled: _p,
                    children: `Subscribe to ${ r.planName }`
                })
            })
        });
    });
    const _p = h.default.div(n || (n = (_i => _i)`
  width: 100%;
  div {
    width: 100%;
  }
`));
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
}), a.register('Rtfgy20', function(b, c) {
    e(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('rC9KP', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('nCi40'),
        e = a('x/Eg+0');
    var _f = e => {
        e.default.checkout.planName = 'Gimkit Pro', e.default.checkout.planId = e, e.default.checkout.planDescription = ((e, a) => e === d.PlanIds.pro ? 'Billed annually' : e === d.PlanIds.proPass ? 'Billed monthly' : '')(e), e.default.checkout.planCost = (e => e === d.PlanIds.pro ? 5988 : e === d.PlanIds.proPass ? 1499 : 0)(e);
    };
}), a.register('1Nso7', function(b, c) {
    e(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('b5kvC');
    let h, i, j, k, l = e => e;
    const m = '#F0FFF6';
    var _n = e => (0, d.jsxs)(_o, {
        selected: e.selected,
        onClick: e.onClick,
        disabled: e.disabled,
        children: [
            (0, d.jsx)(_p, {
                children: e.title
            }),
            (0, d.jsx)(_q, {
                children: e.description
            }),
            e.showSaveTag ? (0, d.jsx)(_r, {
                children: 'Save 65%'
            }) : null
        ]
    });
    const _o = e.default.div(h || (h = l`
  border-style: solid;
  border-width: 2px;
  width: 284px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  ${ 0 }
  border-color: ${ 0 };
  background: ${ 0 };
  transition: all 0.35s;
  &:hover {
    background: ${ 0 };
  }
`), e => e.disabled ? '\n  pointer-events: none;\n  opacity: 0.2;\n  ' : null, e => e.selected ? '#a5d6a7' : f.default.BorderGray, e => e.selected ? m : f.default.White, m),
        _p = e.default.h3(i || (i = l`
  font-weight: ${ 0 };
  font-size: 18px;
  margin-bottom: 0px;
  color: ${ 0 };
`), g.FontWeights.UltraBold, f.default.Black),
        _q = e.default.p(j || (j = l`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`)),
        _r = e.default.div.attrs({
            className: 'flex hc vc'
        })(k || (k = l`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${ 0 };
  font-size: 14px;
  border-radius: 22px;
`), f.default.White);
}), a.register('jzxyj10', function(b, c) {
    e(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = e => {
        d.history.push(e);
    };
}), a.register('q5U/e', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('x/Eg+0');
    var _f = () => {
        (0, d.request)({
            url: '/api/billing/account-balance',
            success: e => {
                e.balance && e.balance > 0 && (e.default.checkout.accountCredit = e.balance);
            }
        });
    };
}), a.register('I3I1F', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('PMl60'),
        e = a('x/Eg+0'),
        f = a('rC9KP');
    var _g = e => {
        (0, d.request)({
            url: `/api/stripe/coupons/${ e }`,
            success: a => {
                a.metadata && a.metadata.onlyForPlan && ((0, f.default)(a.metadata.onlyForPlan), e.default.checkout.couponIsOnlyForPlan = e.default.checkout.planId), a.metadata && a.metadata.customDesc && (e.default.checkout.couponDescription = a.metadata.customDesc), e.default.checkout.amountOff = a.amountOff, e.default.checkout.percentageOff = 1 - 0.01 * a.percentageOff, e.default.checkout.couponOneUseOnly = a.oneUseOnly, e.default.checkout.couponId = e, e.default.checkout.hasCoupon = !0;
            }
        });
    };
}), a.register('KBJS7', function(b, c) {
    e(b.exports, 'default', function() {
        return _i;
    });
    var d = a('PMl60'),
        e = a('x/Eg+0'),
        f = a('INKb2'),
        g = a('gs4MT'),
        h = a('jzxyj10');
    var _i = () => {
        (0, d.request)({
            url: '/api/billing/stripe-key',
            success: e => e.default.checkout.stripePublicKey = e.key,
            error: () => (0, f.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, h.NavigateTo)(g.DASHBOARD)
            })
        });
    };
});