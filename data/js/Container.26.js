function a(a, b, x, c) {
    Object.defineProperty(a, b, {
        get: x,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('99v2J', function(x, c) {
    var c;
    c = x.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(x.exports, 'default', function() {
        return i;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('qtKN+'),
        g = b('IKf+p'),
        h = b('I1CoM');
    var i = () => (e.useEffect(() => () => {
        h.default.checkout.reset(), h.default.navigation.reset();
    }, []), (0, d.jsx)(g.default.Provider, {
        value: h.default,
        children: (0, d.jsx)(f.default, {})
    }));
}), b.register('qtKN+', function(x, c) {
    a(x.exports, 'default', function() {
        return u;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('lmfrI'),
        g = b('Vlfxs'),
        h = b('IKf+p'),
        i = b('SWSuU'),
        j = b('q721a'),
        k = b('g054J'),
        l = b('gSUVO'),
        m = b('tPBa7'),
        n = b('3C5Tu'),
        o = b('hF8r9'),
        p = b('PjB0f'),
        q = b('k0s2g17');
    let r, s, t = a => a;
    var u = (0, g.observer)(() => {
        const {
            navigation: v
        } = d.useContext(h.default);
        d.useEffect(() => {
            if ((0, p.isStudent)())
                return void(0, q.NavigateTo)(j.DASHBOARD);
            (0, p.isLoggedIn)() && (0, m.default)(), (0, o.default)();
            const w = (0, p.getUrlVariable)('coupon');
            w && (0, n.default)(w);
        }, []);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(v, {
                    children: (0, c.jsx)(w, {
                        children: (() => {
                            const {
                                screen: w
                            } = x;
                            return w === i.Screen.checkout ? (0, c.jsx)(k.default, {}) : null;
                        })()
                    })
                }),
                (0, c.jsx)(p.Title, {
                    title: 'Checkout'
                })
            ]
        });
    });
    const v = e.default.div(r || (r = t`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        w = e.default.div.attrs({
            className: 'scroll-y'
        })(s || (s = t`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), f.default.White, l.Fonts.SFPro, f.default.Black);
}), b.register('IKf+p', function(x, c) {
    a(x.exports, 'default', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = b('I1CoM');
    var e = c.createContext(d.default);
}), b.register('I1CoM', function(x, c) {
    a(x.exports, 'default', function() {
        return e;
    });
    var c = b('SWSuU'),
        d = b('voqY9');
    var e = {
        navigation: new(0, c.default)(),
        checkout: new(0, d.default)()
    };
}), b.register('SWSuU', function(x, c) {
    a(x.exports, 'Screen', function() {
        return e;
    }), a(x.exports, 'default', function() {
        return k;
    });
    var c = b('6gioo'),
        d = b('UnUp5');
    let e;
    (e || (e = {})).checkout = 'checkout';
    const f = {
            screen: e.checkout,
            loadingTokenSubmit: !1
        },
        {
            screen: g,
            loadingTokenSubmit: h
        } = i;
    class j {
        constructor() {
            this.screen = g, this.loadingTokenSubmit = h, this.reset = () => {
                Object.keys(i).forEach(a => this[a] = i[a]);
            }, (0, d.makeObservable)(this);
        }
    }
    (0, c.__decorate)([d.observable], j.prototype, 'screen', void 0), (0, c.__decorate)([d.observable], j.prototype, 'loadingTokenSubmit', void 0), (0, c.__decorate)([d.action], j.prototype, 'reset', void 0);
    var k = l;
}), b.register('voqY9', function(x, c) {
    a(x.exports, 'default', function() {
        return v;
    });
    var c = b('6gioo'),
        d = b('UnUp5');
    const e = {
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
            planName: f,
            planId: g,
            couponId: h,
            planCost: i,
            planDescription: j,
            accountCredit: k,
            percentageOff: l,
            amountOff: m,
            couponDescription: n,
            hasCoupon: o,
            couponOneUseOnly: p,
            couponIsOnlyForPlan: q,
            existingPayingPlan: r,
            stripePublicKey: s
        } = t;
    class u {
        get totalCost() {
            const v = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return v < 0 ? 0 : v;
        }
        constructor() {
            this.planName = f, this.planId = g, this.couponId = h, this.planCost = i, this.planDescription = j, this.accountCredit = k, this.percentageOff = l, this.amountOff = m, this.couponDescription = n, this.hasCoupon = o, this.couponOneUseOnly = p, this.couponIsOnlyForPlan = q, this.existingPayingPlan = r, this.stripePublicKey = s, this.reset = () => {
                Object.keys(t).forEach(v => {
                    this[v] = t[v];
                });
            }, (0, d.makeObservable)(this);
        }
    }
    (0, c.__decorate)([d.observable], u.prototype, 'planName', void 0), (0, c.__decorate)([d.observable], u.prototype, 'planId', void 0), (0, c.__decorate)([d.observable], u.prototype, 'couponId', void 0), (0, c.__decorate)([d.observable], u.prototype, 'planCost', void 0), (0, c.__decorate)([d.observable], u.prototype, 'planDescription', void 0), (0, c.__decorate)([d.observable], u.prototype, 'accountCredit', void 0), (0, c.__decorate)([d.observable], u.prototype, 'percentageOff', void 0), (0, c.__decorate)([d.observable], u.prototype, 'amountOff', void 0), (0, c.__decorate)([d.observable], u.prototype, 'couponDescription', void 0), (0, c.__decorate)([d.observable], u.prototype, 'hasCoupon', void 0), (0, c.__decorate)([d.observable], u.prototype, 'couponOneUseOnly', void 0), (0, c.__decorate)([d.observable], u.prototype, 'couponIsOnlyForPlan', void 0), (0, c.__decorate)([d.observable], u.prototype, 'existingPayingPlan', void 0), (0, c.__decorate)([d.observable], u.prototype, 'stripePublicKey', void 0), (0, c.__decorate)([d.computed], u.prototype, 'totalCost', null), (0, c.__decorate)([d.action], u.prototype, 'reset', void 0);
    var v = w;
}), b.register('g054J', function(x, c) {
    a(x.exports, 'default', function() {
        return u;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('ExtIT'),
        g = b('iHElh'),
        h = b('KzqIz'),
        i = b('q721a'),
        j = b('zbhXU'),
        k = b('MHRgJ'),
        l = b('Vlfxs'),
        m = b('IKf+p'),
        n = b('BtK1b'),
        o = b('TO+cq'),
        p = b('mlYwT'),
        q = b('PjB0f'),
        r = b('bdX0N23'),
        s = b('k0s2g17');
    let t;
    var u = (0, l.observer)(() => {
        const {
            checkout: v
        } = d.useContext(m.default);
        d.useEffect(() => {
            var w;
            (0, n.default)(o.PlanIds.pro);
            const x = (0, q.getUser)();
            if (!(null === (w = x.freeTrial) || void 0 === w ? void 0 : w.currentlyOnFreeTrial) && (0, q.isUpgraded)()) {
                if (x.type === o.PlanIds.pro) {
                    if ((0, r.onlyOfferAnnualUpgrade)())
                        return void(0, s.NavigateTo)(i.DASHBOARD);
                    (0, n.default)(o.PlanIds.proPass);
                }
                v.existingPayingPlan = x.type;
            }
        }, []);
        const w = (0, q.getUser)().type === o.PlanIds.proPass || (0, r.onlyOfferAnnualUpgrade)();
        return !v.stripePublicKey || w ? (0, c.jsxs)('div', {
            className: 'maxWidth flex hc',
            style: {
                padding: 40
            },
            children: [
                (0, c.jsx)(g.default, {
                    size: 'large'
                }),
                w ? (0, c.jsx)(k.default, {}) : null
            ]
        }) : (0, c.jsxs)(v, {
            children: [
                (0, c.jsx)(h.Link, {
                    to: i.DASHBOARD,
                    children: (0, c.jsx)('img', {
                        src: '/client/img/svgLogo.svg',
                        style: {
                            width: 158,
                            marginTop: 6
                        }
                    })
                }),
                (0, c.jsx)(f.default, {}),
                (0, r.onlyOfferAnnualUpgrade)() ? null : (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsxs)('div', {
                            className: 'flex maxWidth',
                            style: {
                                justifyContent: 'space-between',
                                marginTop: 10
                            },
                            children: [
                                (0, c.jsx)(p.default, {
                                    title: 'Annually',
                                    description: (0, c.jsxs)('span', {
                                        children: [
                                            '$59.88 a year',
                                            (0, c.jsx)('br', {}),
                                            'That works out to $4.99 a month'
                                        ]
                                    }),
                                    selected: v.planId === o.PlanIds.pro,
                                    disabled: v.existingPayingPlan && v.existingPayingPlan === o.PlanIds.pro || v.couponIsOnlyForPlan && v.couponIsOnlyForPlan !== o.PlanIds.pro,
                                    onClick: () => (0, n.default)(o.PlanIds.pro),
                                    showSaveTag: !0
                                }),
                                (0, c.jsx)(p.default, {
                                    title: 'Monthly',
                                    description: (0, c.jsx)('span', {
                                        children: '$14.99 a month'
                                    }),
                                    selected: v.planId === o.PlanIds.proPass,
                                    disabled: v.existingPayingPlan && v.existingPayingPlan === o.PlanIds.proPass || v.couponIsOnlyForPlan && v.couponIsOnlyForPlan !== o.PlanIds.proPass,
                                    onClick: () => (0, n.default)(o.PlanIds.proPass)
                                })
                            ]
                        }),
                        (0, c.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                }),
                (0, c.jsx)(j.default, {}),
                (0, c.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, c.jsx)(k.default, {})
            ]
        });
    });
    const v = e.default.div(t || (t = (a => a)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`));
}), b.register('zbhXU', function(q, c) {
    a(q.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Vlfxs'),
        f = b('h99Nu'),
        g = b('IKf+p'),
        h = b('gSUVO'),
        i = b('1nZYn'),
        j = b('ExtIT');
    let k, l, m = a => a;
    var n = (0, e.observer)(() => {
        const {
            checkout: o
        } = d.useContext(g.default);
        return (0, c.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, c.jsxs)(o, {
                    children: [
                        (0, c.jsxs)('div', {
                            children: [
                                (0, c.jsx)('div', {
                                    style: {
                                        fontWeight: h.FontWeights.UltraBold,
                                        fontSize: 23,
                                        marginBottom: -7
                                    },
                                    children: o.planName
                                }),
                                (0, c.jsx)('div', {
                                    style: {
                                        fontSize: 13,
                                        opacity: 0.8
                                    },
                                    children: o.planDescription
                                })
                            ]
                        }),
                        (0, c.jsx)(p, {
                            children: (0, i.centsToFormatedMoney)(o.planCost)
                        })
                    ]
                }),
                o.hasCoupon ? (0, c.jsxs)(o, {
                    children: [
                        (0, c.jsx)('div', {
                            style: {
                                fontSize: 15
                            },
                            children: o.couponDescription || 'Coupon'
                        }),
                        (0, c.jsx)('div', {
                            children: (0, c.jsxs)(p, {
                                style: {
                                    color: 'green'
                                },
                                children: [
                                    '-',
                                    (0, i.centsToFormatedMoney)(o.amountOff ? o.amountOff : o.percentageOff ? o.planCost * (1 - o.percentageOff) : 0)
                                ]
                            })
                        })
                    ]
                }) : null,
                o.accountCredit ? (0, c.jsxs)(o, {
                    children: [
                        (0, c.jsx)('div', {
                            style: {
                                fontSize: 15
                            },
                            children: 'Account Credit'
                        }),
                        (0, c.jsxs)(p, {
                            style: {
                                color: 'green'
                            },
                            children: [
                                '-',
                                (0, i.centsToFormatedMoney)(o.accountCredit)
                            ]
                        })
                    ]
                }) : null,
                o.totalCost !== o.planCost ? (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(j.default, {}),
                        (0, c.jsxs)(o, {
                            children: [
                                (0, c.jsx)('div', {}),
                                (0, c.jsx)(p, {
                                    style: {
                                        fontWeight: h.FontWeights.UltraBold
                                    },
                                    children: (0, i.centsToFormatedMoney)(o.totalCost)
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        });
    });
    const o = f.default.div(k || (k = m`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        p = f.default.div(l || (l = m`
  font-size: 18px;
`));
}), b.register('1nZYn', function(b, q) {
    a(b.exports, 'centsToFormatedMoney', function() {
        return c;
    });
    const c = a => (a / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), b.register('MHRgJ', function(q, r) {
    a(q.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Vlfxs'),
        f = b('IKf+p'),
        g = b('h99Nu'),
        h = b('mIF0p'),
        i = b('PjB0f'),
        j = b('IsmrL'),
        k = b('bdX0N23'),
        l = b('TO+cq');
    let m;
    var n = (0, e.observer)(() => {
        const [o, p] = d.useState(!1), {
            checkout: q
        } = d.useContext(f.default);
        d.useEffect(() => {
            q.planId && q.stripePublicKey && ((0, k.onlyOfferAnnualUpgrade)() || (0, i.getUser)().type === l.PlanIds.proPass) && q.existingPayingPlan !== q.planId && r().then().catch(o => !1);
        }, [
            q.existingPayingPlan,
            q.stripePublicKey,
            q.planId
        ]);
        const r = async () => {
            if (q.stripePublicKey) {
                if (o)
                    return;
                let s;
                p(!0);
                try {
                    s = await (0, h.loadStripe)(q.stripePublicKey);
                } catch (o) {
                    p(!1), (0, i.throwMessageError)({
                        default: {
                            title: 'Connection Error',
                            content: 'An error ocurred while connecting to our payments provider. Please try again later'
                        }
                    });
                }
                s && (0, i.request)({
                    url: '/api/billing/create-upgrade-session',
                    method: 'POST',
                    data: {
                        plan: q.planId
                    },
                    success: async o => {
                        const t = u;
                        let v;
                        try {
                            if (v = await s.redirectToCheckout({
                                    sessionId: t.id
                                }), v && v.error)
                                throw v.error;
                        } catch (u) {
                            p(!1), (0, i.throwMessageError)({
                                e: u,
                                default: {
                                    title: 'Connection Error',
                                    content: 'An error ocurred. Please try again later'
                                }
                            });
                        }
                    },
                    error: o => {
                        p(!1), (0, i.throwMessageError)({
                            e: o,
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                });
            }
        };
        return (0, i.getUser)().type === l.PlanIds.proPass || (0, k.onlyOfferAnnualUpgrade)() ? null : (0, c.jsx)('div', {
            className: 'flex flex-column hc vc maxWidth',
            children: (0, c.jsx)(o, {
                children: (0, c.jsx)(j.default, {
                    id: 'checkout-button',
                    onClick: () => {
                        r().then().catch(o => !1);
                    },
                    loading: o,
                    type: 'primary',
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    disabled: o,
                    children: `Subscribe to ${ q.planName }`
                })
            })
        });
    });
    const o = g.default.div(m || (m = (a => a)`
  width: 100%;
  div {
    width: 100%;
  }
`));
}), b.register('mIF0p', function(b, k) {
    a(b.exports, 'loadStripe', function() {
        return k;
    });
    var c = 'https://js.stripe.com/v3',
        d = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        e = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        f = null,
        g = function(a) {
            return null !== f || (f = new Promise(function(b, k) {
                if ('undefined' != typeof window)
                    if (window.Stripe && a && console.warn(e), window.Stripe)
                        b(window.Stripe);
                    else
                        try {
                            var h = function() {
                                for (var i = document.querySelectorAll('script[src^="'.concat(c, '"]')), j = 0; j < i.length; j++) {
                                    var k = i[j];
                                    if (d.test(k.src))
                                        return k;
                                }
                                return null;
                            }();
                            h && a ? console.warn(e) : h || (h = function(a) {
                                var i = a && !a.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    j = document.createElement('script');
                                j.src = ''.concat(c).concat(i);
                                var k = document.head || document.body;
                                if (!k)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return k.appendChild(j), j;
                            }(a)), h.addEventListener('load', function() {
                                window.Stripe ? b(window.Stripe) : n(new Error('Stripe.js not available'));
                            }), h.addEventListener('error', function() {
                                n(new Error('Failed to load Stripe.js'));
                            });
                        } catch (a) {
                            return void n(a);
                        }
                else
                    b(null);
            })), f;
        },
        h = function(a, b, n) {
            if (null === a)
                return null;
            var i = a.apply(void 0, b);
            return function(a, b) {
                a && a._registerWrapper && a._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: b
                });
            }(i, n), i;
        },
        i = Promise.resolve().then(function() {
            return g(null);
        }),
        j = !1;
    i.catch(function(a) {
        j || console.warn(a);
    });
    var k = function() {
        for (var l = arguments.length, m = new Array(l), n = 0; n < l; n++)
            m[n] = arguments[n];
        j = !0;
        var o = Date.now();
        return i.then(function(l) {
            return h(l, m, o);
        });
    };
}), b.register('bdX0N23', function(n, r) {
    a(n.exports, 'onlyOfferAnnualUpgrade', function() {
        return d;
    });
    var c = b('3EnRx');
    const d = () => 'annual-only' === c.default.getFeatureFlag('annual-only-pro');
}), b.register('BtK1b', function(n, r) {
    a(n.exports, 'default', function() {
        return e;
    });
    var c = b('TO+cq'),
        d = b('I1CoM');
    var e = a => {
        d.default.checkout.planName = 'Gimkit Pro', d.default.checkout.planId = a, d.default.checkout.planDescription = ((a, b) => a === c.PlanIds.pro ? 'Billed annually' : a === c.PlanIds.proPass ? 'Billed monthly' : '')(a), d.default.checkout.planCost = (a => a === c.PlanIds.pro ? 5988 : a === c.PlanIds.proPass ? 1499 : 0)(a);
    };
}), b.register('mlYwT', function(n, r) {
    a(n.exports, 'default', function() {
        return m;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('lmfrI'),
        f = b('gSUVO');
    let g, h, i, j, k = a => a;
    const l = '#F0FFF6';
    var m = a => (0, c.jsxs)(n, {
        selected: a.selected,
        onClick: a.onClick,
        disabled: a.disabled,
        children: [
            (0, c.jsx)(o, {
                children: a.title
            }),
            (0, c.jsx)(p, {
                children: a.description
            }),
            a.showSaveTag ? (0, c.jsx)(q, {
                children: 'Save 65%'
            }) : null
        ]
    });
    const n = d.default.div(g || (g = k`
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
`), a => a.disabled ? '\n  pointer-events: none;\n  opacity: 0.2;\n  ' : null, a => a.selected ? '#a5d6a7' : e.default.BorderGray, a => a.selected ? l : e.default.White, l),
        o = d.default.h3(h || (h = k`
  font-weight: ${ 0 };
  font-size: 18px;
  margin-bottom: 0px;
  color: ${ 0 };
`), f.FontWeights.UltraBold, e.default.Black),
        p = d.default.p(i || (i = k`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`)),
        q = d.default.div.attrs({
            className: 'flex hc vc'
        })(j || (j = k`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${ 0 };
  font-size: 14px;
  border-radius: 22px;
`), e.default.White);
}), b.register('k0s2g17', function(n, r) {
    a(n.exports, 'NavigateTo', function() {
        return d;
    });
    var c = b('Cr/BM');
    const d = a => {
        c.history.push(a);
    };
}), b.register('tPBa7', function(n, r) {
    a(n.exports, 'default', function() {
        return e;
    });
    var c = b('PjB0f'),
        d = b('I1CoM');
    var e = () => {
        (0, c.request)({
            url: '/api/billing/account-balance',
            success: a => {
                a.balance && a.balance > 0 && (d.default.checkout.accountCredit = a.balance);
            }
        });
    };
}), b.register('3C5Tu', function(n, r) {
    a(n.exports, 'default', function() {
        return f;
    });
    var c = b('PjB0f'),
        d = b('I1CoM'),
        e = b('BtK1b');
    var f = a => {
        (0, c.request)({
            url: `/api/stripe/coupons/${ a }`,
            success: b => {
                b.metadata && b.metadata.onlyForPlan && ((0, e.default)(b.metadata.onlyForPlan), d.default.checkout.couponIsOnlyForPlan = d.default.checkout.planId), b.metadata && b.metadata.customDesc && (d.default.checkout.couponDescription = b.metadata.customDesc), d.default.checkout.amountOff = b.amountOff, d.default.checkout.percentageOff = 1 - 0.01 * b.percentageOff, d.default.checkout.couponOneUseOnly = b.oneUseOnly, d.default.checkout.couponId = a, d.default.checkout.hasCoupon = !0;
            }
        });
    };
}), b.register('hF8r9', function(n, r) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('PjB0f'),
        d = b('I1CoM'),
        e = b('GFgjD'),
        f = b('q721a'),
        g = b('k0s2g17');
    var h = () => {
        (0, c.request)({
            url: '/api/billing/stripe-key',
            success: a => d.default.checkout.stripePublicKey = a.key,
            error: () => (0, e.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, g.NavigateTo)(f.DASHBOARD)
            })
        });
    };
});