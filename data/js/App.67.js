function a(b) {
    return b && b.__esModule ? b.default : b;
}
function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function () {
        return _s;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    var _s = () => {
        const {checkout: t} = a(h).useContext(n.default);
        let [u, v] = a(h).useState(!1), [w, x] = a(h).useState(!0), [y, z] = a(h).useState(''), [A, B] = a(h).useState(''), [C, D] = a(h).useState(!1), [E, F] = a(h).useState(null);
        const {id: G} = (0, r.useParams)();
        a(h).useEffect(() => {
            (0, o.default)();
            const H = (0, m.getUrlVariable)('session_id');
            H ? (0, m.verifyStripe)({
                sessionId: H,
                onSuccess: () => {
                    D(!0), _H();
                },
                onError: I => {
                    x(!1), (0, m.throwMessageError)({
                        e: I,
                        default: {
                            title: 'An error ocurred when charging your card',
                            content: 'Please contact support.'
                        }
                    });
                }
            }) : _H();
        }, []);
        const _H = () => {
                (0, m.request)({
                    url: `/api/billing/pay-for-me-info/${ G }`,
                    method: 'GET',
                    success: I => {
                        v(I.isUpgraded), z(I.firstName), B(I.lastName), F(I.receiptUrl);
                    },
                    error: I => (0, m.throwMessageError)({
                        e: I,
                        default: {
                            title: 'We were unable to verify the user\'s id',
                            content: 'Please try again later'
                        }
                    }),
                    both: () => x(!1)
                });
            }, I = async J => {
                if (t.stripePublicKey) {
                    if (w)
                        return;
                    let K;
                    x(!0);
                    try {
                        K = await (0, l.loadStripe)(t.stripePublicKey);
                    } catch (K) {
                        x(!1), (0, m.throwMessageError)({
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                    K && (0, m.request)({
                        url: '/api/billing/create-pay-for-me-session',
                        method: 'POST',
                        data: { encryptedUserId: G },
                        success: async L => {
                            const M = L;
                            let N;
                            try {
                                if (N = await K.redirectToCheckout({ sessionId: M.id }), N && N.error)
                                    throw N.error;
                            } catch (K) {
                                x(!1), (0, m.throwMessageError)({
                                    e: K,
                                    default: {
                                        title: 'Connection Error',
                                        content: 'An error ocurred. Please try again later'
                                    }
                                });
                            }
                        },
                        error: L => {
                            x(!1), (0, m.throwMessageError)({
                                e: L,
                                default: {
                                    title: 'Connection Error',
                                    content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                }
                            });
                        }
                    });
                }
            }, J = () => {
                E && window.open(E);
            };
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(m.Title, { title: 'Pay For Me' }),
                (0, g.jsx)(q.Container, {
                    children: (0, g.jsxs)(q.Content, {
                        children: [
                            (0, g.jsxs)(q.TopSectionContainer, {
                                children: [
                                    (0, g.jsx)(q.Logo, {}),
                                    (0, g.jsx)(j.default, {})
                                ]
                            }),
                            (0, g.jsx)(q.MainContent, {
                                children: w ? (0, g.jsx)(k.default, {
                                    size: 'large',
                                    style: { marginTop: 10 }
                                }) : (() => {
                                    const K = (0, m.getUrlVariable)('session_id');
                                    return u && !K ? (0, g.jsxs)('div', {
                                        style: { fontSize: 20 },
                                        children: [
                                            y,
                                            ' has already been upgraded to ',
                                            p.COMPANY_NAME,
                                            ' Pro.'
                                        ]
                                    }) : K && u && C ? (0, g.jsxs)(g.Fragment, {
                                        children: [
                                            (0, g.jsxs)(q.Message.TopHeader, {
                                                children: [
                                                    y,
                                                    ' has been upgraded to'
                                                ]
                                            }),
                                            (0, g.jsxs)(q.Message.Title, {
                                                children: [
                                                    p.COMPANY_NAME,
                                                    ' Pro!'
                                                ]
                                            }),
                                            (0, g.jsxs)(q.Message.Description, {
                                                children: [
                                                    'We charged your card $59.88 and upgraded ',
                                                    y,
                                                    ' to',
                                                    ' ',
                                                    p.COMPANY_NAME,
                                                    ' Pro for one year. This was a one-time charge and auto-renew is off.'
                                                ]
                                            }),
                                            E && (0, g.jsx)('div', {
                                                style: { marginTop: 30 },
                                                children: (0, g.jsx)(i.default, {
                                                    type: 'primary',
                                                    size: 'large',
                                                    onClick: J,
                                                    style: {
                                                        width: 400,
                                                        height: 60
                                                    },
                                                    children: 'View and Print Receipt'
                                                })
                                            })
                                        ]
                                    }) : (0, g.jsxs)(g.Fragment, {
                                        children: [
                                            (0, g.jsxs)(q.Message.TopHeader, {
                                                children: [
                                                    'Purchase ',
                                                    p.COMPANY_NAME,
                                                    ' Pro for'
                                                ]
                                            }),
                                            (0, g.jsxs)(q.Message.Title, {
                                                children: [
                                                    y,
                                                    ' ',
                                                    A
                                                ]
                                            }),
                                            (0, g.jsxs)(q.Message.Description, {
                                                children: [
                                                    'Make a one-time $59.88 payment for ',
                                                    y,
                                                    ' to receive one year of ',
                                                    p.COMPANY_NAME,
                                                    ' Pro. Auto-renew is off, which means you will only be charged once.'
                                                ]
                                            }),
                                            (0, g.jsx)('div', {
                                                style: { marginTop: 30 },
                                                children: (0, g.jsxs)(i.default, {
                                                    type: 'primary',
                                                    size: 'large',
                                                    onClick: I,
                                                    style: {
                                                        width: 400,
                                                        height: 60
                                                    },
                                                    children: [
                                                        'Purchase ',
                                                        p.COMPANY_NAME,
                                                        ' Pro for ',
                                                        y
                                                    ]
                                                })
                                            })
                                        ]
                                    });
                                })()
                            })
                        ]
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'loadStripe', function () {
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
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = {
        navigation: new (0, f.default)(),
        checkout: new (0, g.default)()
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'Screen', function () {
        return _h;
    }), b(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    let _h;
    (_h || (_h = {})).checkout = 'checkout';
    const i = {
            screen: _h.checkout,
            loadingTokenSubmit: !1
        }, {
            screen: j,
            loadingTokenSubmit: k
        } = i;
    class l {
        constructor() {
            this.screen = j, this.loadingTokenSubmit = k, this.reset = () => {
                Object.keys(i).forEach(m => this[m] = i[m]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], l.prototype, 'screen', void 0), (0, f.__decorate)([g.observable], l.prototype, 'loadingTokenSubmit', void 0), (0, f.__decorate)([g.action], l.prototype, 'reset', void 0);
    var _m = l;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....');
    const h = {
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
            planName: i,
            planId: j,
            couponId: k,
            planCost: l,
            planDescription: m,
            accountCredit: n,
            percentageOff: o,
            amountOff: p,
            couponDescription: q,
            hasCoupon: r,
            couponOneUseOnly: s,
            couponIsOnlyForPlan: t,
            existingPayingPlan: u,
            stripePublicKey: v
        } = h;
    class w {
        get totalCost() {
            const x = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return x < 0 ? 0 : x;
        }
        constructor() {
            this.planName = i, this.planId = j, this.couponId = k, this.planCost = l, this.planDescription = m, this.accountCredit = n, this.percentageOff = o, this.amountOff = p, this.couponDescription = q, this.hasCoupon = r, this.couponOneUseOnly = s, this.couponIsOnlyForPlan = t, this.existingPayingPlan = u, this.stripePublicKey = v, this.reset = () => {
                Object.keys(h).forEach(x => {
                    this[x] = h[x];
                });
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], w.prototype, 'planName', void 0), (0, f.__decorate)([g.observable], w.prototype, 'planId', void 0), (0, f.__decorate)([g.observable], w.prototype, 'couponId', void 0), (0, f.__decorate)([g.observable], w.prototype, 'planCost', void 0), (0, f.__decorate)([g.observable], w.prototype, 'planDescription', void 0), (0, f.__decorate)([g.observable], w.prototype, 'accountCredit', void 0), (0, f.__decorate)([g.observable], w.prototype, 'percentageOff', void 0), (0, f.__decorate)([g.observable], w.prototype, 'amountOff', void 0), (0, f.__decorate)([g.observable], w.prototype, 'couponDescription', void 0), (0, f.__decorate)([g.observable], w.prototype, 'hasCoupon', void 0), (0, f.__decorate)([g.observable], w.prototype, 'couponOneUseOnly', void 0), (0, f.__decorate)([g.observable], w.prototype, 'couponIsOnlyForPlan', void 0), (0, f.__decorate)([g.observable], w.prototype, 'existingPayingPlan', void 0), (0, f.__decorate)([g.observable], w.prototype, 'stripePublicKey', void 0), (0, f.__decorate)([g.computed], w.prototype, 'totalCost', null), (0, f.__decorate)([g.action], w.prototype, 'reset', void 0);
    var _x = w;
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        (0, f.request)({
            url: '/api/billing/stripe-key',
            success: l => g.default.checkout.stripePublicKey = l.key,
            error: () => (0, h.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, j.NavigateTo)(i.DASHBOARD)
            })
        });
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'NavigateTo', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'Container', function () {
        return _r;
    }), b(d.exports, 'Content', function () {
        return _s;
    }), b(d.exports, 'TopSectionContainer', function () {
        return _t;
    }), b(d.exports, 'Logo', function () {
        return _u;
    }), b(d.exports, 'MainContent', function () {
        return _v;
    }), b(d.exports, 'Message', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i, j, k, l, m, n, o, p, q = r => r;
    const _r = h.default.div.attrs({ className: 'maxWidth maxHeight flex hc vc' })(i || (i = q`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`)), _s = h.default.div.attrs({ className: 'scroll-y' })(j || (j = q`
  background: ${ 0 };
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), f.default.White, g.Fonts.SFPro, f.default.Black), _t = h.default.div.attrs({ className: 'maxWidth flex flex-column vc' })(k || (k = q``)), _u = h.default.img.attrs({ src: '/client/img/svgLogo.svg' })(l || (l = q`
  height: 35px;
`)), _v = h.default.div.attrs({ className: 'maxWidth flex flex-column vc' })(m || (m = q``)), _w = {
            TopHeader: h.default.div(n || (n = q`
    font-size: 17px;
  `)),
            Title: h.default.div(o || (o = q`
    font-size: 36px;
    font-weight: ${ 0 };
  `), g.FontWeights.Bold),
            Description: h.default.div(p || (p = q`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `))
        };
});