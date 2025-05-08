function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _k;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    var _k = () => (g.useEffect(() => () => {
        j.default.checkout.reset(), j.default.navigation.reset();
    }, []), (0, f.jsx)(i.default.Provider, {
        value: j.default,
        children: (0, f.jsx)(h.default, {})
    }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _w;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....');
    let t, u, v = w => w;
    var _w = (0, i.observer)(() => {
        const {navigation: x} = f.useContext(j.default);
        f.useEffect(() => {
            if ((0, r.isStudent)())
                return void (0, s.NavigateTo)(l.DASHBOARD);
            (0, r.isLoggedIn)() && (0, o.default)(), (0, q.default)();
            const y = (0, r.getUrlVariable)('coupon');
            y && (0, p.default)(y);
        }, []);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_x, {
                    children: (0, e.jsx)(_y, {
                        children: (() => {
                            const {screen: y} = x;
                            return y === k.Screen.checkout ? (0, e.jsx)(m.default, {}) : null;
                        })()
                    })
                }),
                (0, e.jsx)(r.Title, { title: 'Checkout' })
            ]
        });
    });
    const _x = g.default.div(t || (t = v`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)), _y = g.default.div.attrs({ className: 'scroll-y' })(u || (u = v`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), h.default.White, n.Fonts.SFPro, h.default.Black);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = e.createContext(f.default);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = {
        navigation: new (0, e.default)(),
        checkout: new (0, f.default)()
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'Screen', function () {
        return _g;
    }), a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....');
    let _g;
    (_g || (_g = {})).checkout = 'checkout';
    const h = {
            screen: _g.checkout,
            loadingTokenSubmit: !1
        }, {
            screen: i,
            loadingTokenSubmit: j
        } = h;
    class k {
        constructor() {
            this.screen = i, this.loadingTokenSubmit = j, this.reset = () => {
                Object.keys(h).forEach(l => this[l] = h[l]);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], k.prototype, 'screen', void 0), (0, e.__decorate)([f.observable], k.prototype, 'loadingTokenSubmit', void 0), (0, e.__decorate)([f.action], k.prototype, 'reset', void 0);
    var _l = k;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _w;
    });
    var e = b('.....'), f = b('.....');
    const g = {
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
        }, {
            planName: h,
            planId: i,
            couponId: j,
            planCost: k,
            planDescription: l,
            accountCredit: m,
            percentageOff: n,
            amountOff: o,
            couponDescription: p,
            hasCoupon: q,
            couponOneUseOnly: r,
            couponIsOnlyForPlan: s,
            existingPayingPlan: t,
            stripePublicKey: u
        } = g;
    class v {
        get totalCost() {
            const w = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return w < 0 ? 0 : w;
        }
        constructor() {
            this.planName = h, this.planId = i, this.couponId = j, this.planCost = k, this.planDescription = l, this.accountCredit = m, this.percentageOff = n, this.amountOff = o, this.couponDescription = p, this.hasCoupon = q, this.couponOneUseOnly = r, this.couponIsOnlyForPlan = s, this.existingPayingPlan = t, this.stripePublicKey = u, this.reset = () => {
                Object.keys(g).forEach(w => {
                    this[w] = g[w];
                });
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], v.prototype, 'planName', void 0), (0, e.__decorate)([f.observable], v.prototype, 'planId', void 0), (0, e.__decorate)([f.observable], v.prototype, 'couponId', void 0), (0, e.__decorate)([f.observable], v.prototype, 'planCost', void 0), (0, e.__decorate)([f.observable], v.prototype, 'planDescription', void 0), (0, e.__decorate)([f.observable], v.prototype, 'accountCredit', void 0), (0, e.__decorate)([f.observable], v.prototype, 'percentageOff', void 0), (0, e.__decorate)([f.observable], v.prototype, 'amountOff', void 0), (0, e.__decorate)([f.observable], v.prototype, 'couponDescription', void 0), (0, e.__decorate)([f.observable], v.prototype, 'hasCoupon', void 0), (0, e.__decorate)([f.observable], v.prototype, 'couponOneUseOnly', void 0), (0, e.__decorate)([f.observable], v.prototype, 'couponIsOnlyForPlan', void 0), (0, e.__decorate)([f.observable], v.prototype, 'existingPayingPlan', void 0), (0, e.__decorate)([f.observable], v.prototype, 'stripePublicKey', void 0), (0, e.__decorate)([f.computed], v.prototype, 'totalCost', null), (0, e.__decorate)([f.action], v.prototype, 'reset', void 0);
    var _w = v;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _w;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    let v;
    var _w = (0, n.observer)(() => {
        const {checkout: x} = f.useContext(o.default);
        f.useEffect(() => {
            var y;
            (0, p.default)(q.PlanIds.pro);
            const z = (0, s.getUser)();
            if (!(null === (y = z.freeTrial) || void 0 === y ? void 0 : y.currentlyOnFreeTrial) && (0, s.isUpgraded)()) {
                if (z.type === q.PlanIds.pro) {
                    if ((0, t.onlyOfferAnnualUpgrade)())
                        return void (0, u.NavigateTo)(k.DASHBOARD);
                    (0, p.default)(q.PlanIds.proPass);
                }
                x.existingPayingPlan = z.type;
            }
        }, []);
        const y = (0, s.getUser)().type === q.PlanIds.proPass || (0, t.onlyOfferAnnualUpgrade)();
        return !x.stripePublicKey || y ? (0, e.jsxs)('div', {
            className: 'maxWidth flex hc',
            style: { padding: 40 },
            children: [
                (0, e.jsx)(i.default, { size: 'large' }),
                y ? (0, e.jsx)(m.default, {}) : null
            ]
        }) : (0, e.jsxs)(_x, {
            children: [
                (0, e.jsx)(j.Link, {
                    to: k.DASHBOARD,
                    children: (0, e.jsx)('img', {
                        src: '/client/img/svgLogo.svg',
                        style: {
                            width: 158,
                            marginTop: 6
                        }
                    })
                }),
                (0, e.jsx)(h.default, {}),
                (0, t.onlyOfferAnnualUpgrade)() ? null : (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsxs)('div', {
                            className: 'flex maxWidth',
                            style: {
                                justifyContent: 'space-between',
                                marginTop: 10
                            },
                            children: [
                                (0, e.jsx)(r.default, {
                                    title: 'Annually',
                                    description: (0, e.jsxs)('span', {
                                        children: [
                                            '$59.88 a year',
                                            (0, e.jsx)('br', {}),
                                            'That works out to $4.99 a month'
                                        ]
                                    }),
                                    selected: x.planId === q.PlanIds.pro,
                                    disabled: x.existingPayingPlan && x.existingPayingPlan === q.PlanIds.pro || x.couponIsOnlyForPlan && x.couponIsOnlyForPlan !== q.PlanIds.pro,
                                    onClick: () => (0, p.default)(q.PlanIds.pro),
                                    showSaveTag: !0
                                }),
                                (0, e.jsx)(r.default, {
                                    title: 'Monthly',
                                    description: (0, e.jsx)('span', { children: '$14.99 a month' }),
                                    selected: x.planId === q.PlanIds.proPass,
                                    disabled: x.existingPayingPlan && x.existingPayingPlan === q.PlanIds.proPass || x.couponIsOnlyForPlan && x.couponIsOnlyForPlan !== q.PlanIds.proPass,
                                    onClick: () => (0, p.default)(q.PlanIds.proPass)
                                })
                            ]
                        }),
                        (0, e.jsx)('div', { style: { height: 20 } })
                    ]
                }),
                (0, e.jsx)(l.default, {}),
                (0, e.jsx)('div', { style: { height: 10 } }),
                (0, e.jsx)(m.default, {})
            ]
        });
    });
    const _x = g.default.div(v || (v = (y => y)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    let m, n, o = p => p;
    var _p = (0, g.observer)(() => {
        const {checkout: q} = f.useContext(i.default);
        return (0, e.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, e.jsxs)(_q, {
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)('div', {
                                    style: {
                                        fontWeight: j.FontWeights.UltraBold,
                                        fontSize: 23,
                                        marginBottom: -7
                                    },
                                    children: q.planName
                                }),
                                (0, e.jsx)('div', {
                                    style: {
                                        fontSize: 13,
                                        opacity: 0.8
                                    },
                                    children: q.planDescription
                                })
                            ]
                        }),
                        (0, e.jsx)(_r, { children: (0, k.centsToFormatedMoney)(q.planCost) })
                    ]
                }),
                q.hasCoupon ? (0, e.jsxs)(_q, {
                    children: [
                        (0, e.jsx)('div', {
                            style: { fontSize: 15 },
                            children: q.couponDescription || 'Coupon'
                        }),
                        (0, e.jsx)('div', {
                            children: (0, e.jsxs)(_r, {
                                style: { color: 'green' },
                                children: [
                                    '-',
                                    (0, k.centsToFormatedMoney)(q.amountOff ? q.amountOff : q.percentageOff ? q.planCost * (1 - q.percentageOff) : 0)
                                ]
                            })
                        })
                    ]
                }) : null,
                q.accountCredit ? (0, e.jsxs)(_q, {
                    children: [
                        (0, e.jsx)('div', {
                            style: { fontSize: 15 },
                            children: 'Account Credit'
                        }),
                        (0, e.jsxs)(_r, {
                            style: { color: 'green' },
                            children: [
                                '-',
                                (0, k.centsToFormatedMoney)(q.accountCredit)
                            ]
                        })
                    ]
                }) : null,
                q.totalCost !== q.planCost ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(l.default, {}),
                        (0, e.jsxs)(_q, {
                            children: [
                                (0, e.jsx)('div', {}),
                                (0, e.jsx)(_r, {
                                    style: { fontWeight: j.FontWeights.UltraBold },
                                    children: (0, k.centsToFormatedMoney)(q.totalCost)
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        });
    });
    const _q = h.default.div(m || (m = o`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`)), _r = h.default.div(n || (n = o`
  font-size: 18px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'centsToFormatedMoney', function () {
        return _e;
    });
    const _e = f => (f / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o;
    var _p = (0, g.observer)(() => {
        const [q, r] = f.useState(!1), {checkout: s} = f.useContext(h.default);
        f.useEffect(() => {
            s.planId && s.stripePublicKey && ((0, m.onlyOfferAnnualUpgrade)() || (0, k.getUser)().type === n.PlanIds.proPass) && s.existingPayingPlan !== s.planId && d().then().catch(t => !1);
        }, [
            s.existingPayingPlan,
            s.stripePublicKey,
            s.planId
        ]);
        const t = async () => {
            if (s.stripePublicKey) {
                if (q)
                    return;
                let u;
                r(!0);
                try {
                    u = await (0, j.loadStripe)(s.stripePublicKey);
                } catch (q) {
                    r(!1), (0, k.throwMessageError)({
                        default: {
                            title: 'Connection Error',
                            content: 'An error ocurred while connecting to our payments provider. Please try again later'
                        }
                    });
                }
                u && (0, k.request)({
                    url: '/api/billing/create-upgrade-session',
                    method: 'POST',
                    data: { plan: s.planId },
                    success: async v => {
                        const w = v;
                        let x;
                        try {
                            if (x = await u.redirectToCheckout({ sessionId: w.id }), x && x.error)
                                throw x.error;
                        } catch (v) {
                            r(!1), (0, k.throwMessageError)({
                                e: v,
                                default: {
                                    title: 'Connection Error',
                                    content: 'An error ocurred. Please try again later'
                                }
                            });
                        }
                    },
                    error: v => {
                        r(!1), (0, k.throwMessageError)({
                            e: v,
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                });
            }
        };
        return (0, k.getUser)().type === n.PlanIds.proPass || (0, m.onlyOfferAnnualUpgrade)() ? null : (0, e.jsx)('div', {
            className: 'flex flex-column hc vc maxWidth',
            children: (0, e.jsx)(_q, {
                children: (0, e.jsx)(l.default, {
                    id: 'checkout-button',
                    onClick: () => {
                        t().then().catch(u => !1);
                    },
                    loading: q,
                    type: 'primary',
                    style: { width: '100%' },
                    size: 'large',
                    disabled: q,
                    children: `Subscribe to ${ s.planName }`
                })
            })
        });
    });
    const _q = i.default.div(o || (o = (r => r)`
  width: 100%;
  div {
    width: 100%;
  }
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'loadStripe', function () {
        return _m;
    });
    var e = 'https://js.stripe.com/v3', f = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, g = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used', h = null, i = function (j) {
            return null !== h || (h = new Promise(function (k, l) {
                if ('undefined' != typeof window)
                    if (window.Stripe && j && console.warn(g), window.Stripe)
                        k(window.Stripe);
                    else
                        try {
                            var m = function () {
                                for (var n = document.querySelectorAll('script[src^="'.concat(e, '"]')), o = 0; o < n.length; o++) {
                                    var p = n[o];
                                    if (f.test(p.src))
                                        return p;
                                }
                                return null;
                            }();
                            m && j ? console.warn(g) : m || (m = function (n) {
                                var o = n && !n.advancedFraudSignals ? '?advancedFraudSignals=false' : '', p = document.createElement('script');
                                p.src = ''.concat(e).concat(o);
                                var q = document.head || document.body;
                                if (!q)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return q.appendChild(p), p;
                            }(j)), m.addEventListener('load', function () {
                                window.Stripe ? k(window.Stripe) : l(new Error('Stripe.js not available'));
                            }), m.addEventListener('error', function () {
                                l(new Error('Failed to load Stripe.js'));
                            });
                        } catch (j) {
                            return void l(j);
                        }
                else
                    k(null);
            })), h;
        }, j = function (k, l, m) {
            if (null === k)
                return null;
            var n = k.apply(void 0, l);
            return function (o, p) {
                o && o._registerWrapper && o._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: p
                });
            }(n, m), n;
        }, k = Promise.resolve().then(function () {
            return i(null);
        }), l = !1;
    k.catch(function (m) {
        l || console.warn(m);
    });
    var _m = function () {
        for (var n = arguments.length, o = new Array(n), p = 0; p < n; p++)
            o[p] = arguments[p];
        l = !0;
        var q = Date.now();
        return k.then(function (r) {
            return j(r, o, q);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        f.default.checkout.planName = 'Gimkit Pro', f.default.checkout.planId = h, f.default.checkout.planDescription = ((i, j) => i === e.PlanIds.pro ? 'Billed annually' : i === e.PlanIds.proPass ? 'Billed monthly' : '')(h), f.default.checkout.planCost = (i => i === e.PlanIds.pro ? 5988 : i === e.PlanIds.proPass ? 1499 : 0)(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _o;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    let i, j, k, l, m = n => n;
    const n = '#F0FFF6';
    var _o = p => (0, e.jsxs)(_p, {
        selected: p.selected,
        onClick: p.onClick,
        disabled: p.disabled,
        children: [
            (0, e.jsx)(_q, { children: p.title }),
            (0, e.jsx)(_r, { children: p.description }),
            p.showSaveTag ? (0, e.jsx)(_s, { children: 'Save 65%' }) : null
        ]
    });
    const _p = f.default.div(i || (i = m`
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
`), q => q.disabled ? '\n  pointer-events: none;\n  opacity: 0.2;\n  ' : null, q => q.selected ? '#a5d6a7' : g.default.BorderGray, q => q.selected ? n : g.default.White, n), _q = f.default.h3(j || (j = m`
  font-weight: ${ 0 };
  font-size: 18px;
  margin-bottom: 0px;
  color: ${ 0 };
`), h.FontWeights.UltraBold, g.default.Black), _r = f.default.p(k || (k = m`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`)), _s = f.default.div.attrs({ className: 'flex hc vc' })(l || (l = m`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${ 0 };
  font-size: 14px;
  border-radius: 22px;
`), g.default.White);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = () => {
        (0, e.request)({
            url: '/api/billing/account-balance',
            success: h => {
                h.balance && h.balance > 0 && (f.default.checkout.accountCredit = h.balance);
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    var _h = i => {
        (0, e.request)({
            url: `/api/stripe/coupons/${ i }`,
            success: j => {
                j.metadata && j.metadata.onlyForPlan && ((0, g.default)(j.metadata.onlyForPlan), f.default.checkout.couponIsOnlyForPlan = f.default.checkout.planId), j.metadata && j.metadata.customDesc && (f.default.checkout.couponDescription = j.metadata.customDesc), f.default.checkout.amountOff = j.amountOff, f.default.checkout.percentageOff = 1 - 0.01 * j.percentageOff, f.default.checkout.couponOneUseOnly = j.oneUseOnly, f.default.checkout.couponId = i, f.default.checkout.hasCoupon = !0;
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = () => {
        (0, e.request)({
            url: '/api/billing/stripe-key',
            success: k => f.default.checkout.stripePublicKey = k.key,
            error: () => (0, g.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, i.NavigateTo)(h.DASHBOARD)
            })
        });
    };
});