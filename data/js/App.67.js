function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, t) {
    Object.defineProperty(a, b, {
        get: c,
        set: t,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Cy7D8', function(t, u) {
    var d;
    d = t.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(t.exports, 'default', function() {
        return q;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('IsmrL'),
        h = c('ExtIT'),
        i = c('iHElh'),
        j = c('mIF0p'),
        k = c('PjB0f'),
        l = c('IKf+p'),
        m = c('hF8r9'),
        n = c('0wLl2'),
        o = c('iWnTh'),
        p = c('0R8EW');
    var q = () => {
        const {
            checkout: r
        } = a(f).useContext(l.default);
        let [s, t] = a(f).useState(!1), [u, v] = a(f).useState(!0), [w, x] = a(f).useState(''), [y, z] = a(f).useState(''), [A, B] = a(f).useState(!1), [C, D] = a(f).useState(null);
        const {
            id: E
        } = (0, p.useParams)();
        a(f).useEffect(() => {
            (0, m.default)();
            const F = (0, k.getUrlVariable)('session_id');
            F ? (0, k.verifyStripe)({
                sessionId: F,
                onSuccess: () => {
                    B(!0), F();
                },
                onError: F => {
                    v(!1), (0, k.throwMessageError)({
                        e: F,
                        default: {
                            title: 'An error ocurred when charging your card',
                            content: 'Please contact support.'
                        }
                    });
                }
            }) : F();
        }, []);
        const F = () => {
                (0, k.request)({
                    url: `/api/billing/pay-for-me-info/${ E }`,
                    method: 'GET',
                    success: a => {
                        t(a.isUpgraded), x(a.firstName), z(a.lastName), D(a.receiptUrl);
                    },
                    error: a => (0, k.throwMessageError)({
                        e: a,
                        default: {
                            title: 'We were unable to verify the user\'s id',
                            content: 'Please try again later'
                        }
                    }),
                    both: () => v(!1)
                });
            },
            G = async a => {
                if (r.stripePublicKey) {
                    if (u)
                        return;
                    let H;
                    v(!0);
                    try {
                        H = await (0, j.loadStripe)(r.stripePublicKey);
                    } catch (H) {
                        v(!1), (0, k.throwMessageError)({
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                    H && (0, k.request)({
                        url: '/api/billing/create-pay-for-me-session',
                        method: 'POST',
                        data: {
                            encryptedUserId: E
                        },
                        success: async r => {
                            const I = J;
                            let K;
                            try {
                                if (K = await H.redirectToCheckout({
                                        sessionId: I.id
                                    }), K && K.error)
                                    throw K.error;
                            } catch (H) {
                                v(!1), (0, k.throwMessageError)({
                                    e: H,
                                    default: {
                                        title: 'Connection Error',
                                        content: 'An error ocurred. Please try again later'
                                    }
                                });
                            }
                        },
                        error: H => {
                            v(!1), (0, k.throwMessageError)({
                                e: H,
                                default: {
                                    title: 'Connection Error',
                                    content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                }
                            });
                        }
                    });
                }
            }, H = () => {
                C && window.open(C);
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(k.Title, {
                    title: 'Pay For Me'
                }),
                (0, e.jsx)(o.Container, {
                    children: (0, e.jsxs)(o.Content, {
                        children: [
                            (0, e.jsxs)(o.TopSectionContainer, {
                                children: [
                                    (0, e.jsx)(o.Logo, {}),
                                    (0, e.jsx)(h.default, {})
                                ]
                            }),
                            (0, e.jsx)(o.MainContent, {
                                children: u ? (0, e.jsx)(i.default, {
                                    size: 'large',
                                    style: {
                                        marginTop: 10
                                    }
                                }) : (() => {
                                    const I = (0, k.getUrlVariable)('session_id');
                                    return s && !I ? (0, e.jsxs)('div', {
                                        style: {
                                            fontSize: 20
                                        },
                                        children: [
                                            w,
                                            ' has already been upgraded to ',
                                            n.COMPANY_NAME,
                                            ' Pro.'
                                        ]
                                    }) : I && s && A ? (0, e.jsxs)(e.Fragment, {
                                        children: [
                                            (0, e.jsxs)(o.Message.TopHeader, {
                                                children: [
                                                    w,
                                                    ' has been upgraded to'
                                                ]
                                            }),
                                            (0, e.jsxs)(o.Message.Title, {
                                                children: [
                                                    n.COMPANY_NAME,
                                                    ' Pro!'
                                                ]
                                            }),
                                            (0, e.jsxs)(o.Message.Description, {
                                                children: [
                                                    'We charged your card $59.88 and upgraded ',
                                                    w,
                                                    ' to',
                                                    ' ',
                                                    n.COMPANY_NAME,
                                                    ' Pro for one year. This was a one-time charge and auto-renew is off.'
                                                ]
                                            }),
                                            C && (0, e.jsx)('div', {
                                                style: {
                                                    marginTop: 30
                                                },
                                                children: (0, e.jsx)(g.default, {
                                                    type: 'primary',
                                                    size: 'large',
                                                    onClick: H,
                                                    style: {
                                                        width: 400,
                                                        height: 60
                                                    },
                                                    children: 'View and Print Receipt'
                                                })
                                            })
                                        ]
                                    }) : (0, e.jsxs)(e.Fragment, {
                                        children: [
                                            (0, e.jsxs)(o.Message.TopHeader, {
                                                children: [
                                                    'Purchase ',
                                                    n.COMPANY_NAME,
                                                    ' Pro for'
                                                ]
                                            }),
                                            (0, e.jsxs)(o.Message.Title, {
                                                children: [
                                                    w,
                                                    ' ',
                                                    y
                                                ]
                                            }),
                                            (0, e.jsxs)(o.Message.Description, {
                                                children: [
                                                    'Make a one-time $59.88 payment for ',
                                                    w,
                                                    ' to receive one year of ',
                                                    n.COMPANY_NAME,
                                                    ' Pro. Auto-renew is off, which means you will only be charged once.'
                                                ]
                                            }),
                                            (0, e.jsx)('div', {
                                                style: {
                                                    marginTop: 30
                                                },
                                                children: (0, e.jsxs)(g.default, {
                                                    type: 'primary',
                                                    size: 'large',
                                                    onClick: G,
                                                    style: {
                                                        width: 400,
                                                        height: 60
                                                    },
                                                    children: [
                                                        'Purchase ',
                                                        n.COMPANY_NAME,
                                                        ' Pro for ',
                                                        w
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
}), c.register('mIF0p', function(a, c) {
    b(a.exports, 'loadStripe', function() {
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
}), c.register('IKf+p', function(a, o) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('I1CoM');
    var f = d.createContext(e.default);
}), c.register('I1CoM', function(a, o) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('SWSuU'),
        e = c('voqY9');
    var f = {
        navigation: new(0, d.default)(),
        checkout: new(0, e.default)()
    };
}), c.register('SWSuU', function(a, o) {
    b(a.exports, 'Screen', function() {
        return f;
    }), b(a.exports, 'default', function() {
        return l;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    let f;
    (f || (f = {})).checkout = 'checkout';
    const g = {
            screen: f.checkout,
            loadingTokenSubmit: !1
        },
        {
            screen: h,
            loadingTokenSubmit: i
        } = j;
    class k {
        constructor() {
            this.screen = h, this.loadingTokenSubmit = i, this.reset = () => {
                Object.keys(j).forEach(a => this[a] = j[a]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], k.prototype, 'screen', void 0), (0, d.__decorate)([e.observable], k.prototype, 'loadingTokenSubmit', void 0), (0, d.__decorate)([e.action], k.prototype, 'reset', void 0);
    var l = m;
}), c.register('voqY9', function(a, o) {
    b(a.exports, 'default', function() {
        return w;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
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
        } = u;
    class v {
        get totalCost() {
            const w = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return w < 0 ? 0 : w;
        }
        constructor() {
            this.planName = g, this.planId = h, this.couponId = i, this.planCost = j, this.planDescription = k, this.accountCredit = l, this.percentageOff = m, this.amountOff = n, this.couponDescription = o, this.hasCoupon = p, this.couponOneUseOnly = q, this.couponIsOnlyForPlan = r, this.existingPayingPlan = s, this.stripePublicKey = t, this.reset = () => {
                Object.keys(u).forEach(w => {
                    this[w] = u[w];
                });
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], v.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], v.prototype, 'planId', void 0), (0, d.__decorate)([e.observable], v.prototype, 'couponId', void 0), (0, d.__decorate)([e.observable], v.prototype, 'planCost', void 0), (0, d.__decorate)([e.observable], v.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], v.prototype, 'accountCredit', void 0), (0, d.__decorate)([e.observable], v.prototype, 'percentageOff', void 0), (0, d.__decorate)([e.observable], v.prototype, 'amountOff', void 0), (0, d.__decorate)([e.observable], v.prototype, 'couponDescription', void 0), (0, d.__decorate)([e.observable], v.prototype, 'hasCoupon', void 0), (0, d.__decorate)([e.observable], v.prototype, 'couponOneUseOnly', void 0), (0, d.__decorate)([e.observable], v.prototype, 'couponIsOnlyForPlan', void 0), (0, d.__decorate)([e.observable], v.prototype, 'existingPayingPlan', void 0), (0, d.__decorate)([e.observable], v.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.computed], v.prototype, 'totalCost', null), (0, d.__decorate)([e.action], v.prototype, 'reset', void 0);
    var w = x;
}), c.register('hF8r9', function(a, o) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('PjB0f'),
        e = c('I1CoM'),
        f = c('GFgjD'),
        g = c('q721a'),
        h = c('k0s2g17');
    var i = () => {
        (0, d.request)({
            url: '/api/billing/stripe-key',
            success: a => e.default.checkout.stripePublicKey = a.key,
            error: () => (0, f.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, h.NavigateTo)(g.DASHBOARD)
            })
        });
    };
}), c.register('k0s2g17', function(a, o) {
    b(a.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('iWnTh', function(a, o) {
    b(a.exports, 'Container', function() {
        return p;
    }), b(a.exports, 'Content', function() {
        return q;
    }), b(a.exports, 'TopSectionContainer', function() {
        return r;
    }), b(a.exports, 'Logo', function() {
        return s;
    }), b(a.exports, 'MainContent', function() {
        return t;
    }), b(a.exports, 'Message', function() {
        return u;
    });
    var d = c('lmfrI'),
        e = c('gSUVO'),
        f = c('h99Nu');
    let g, h, i, j, k, l, m, n, o = a => a;
    const p = f.default.div.attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(g || (g = o`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`)),
        q = f.default.div.attrs({
            className: 'scroll-y'
        })(h || (h = o`
  background: ${ 0 };
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), d.default.White, e.Fonts.SFPro, d.default.Black),
        r = f.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(i || (i = o``)),
        s = f.default.img.attrs({
            src: '/client/img/svgLogo.svg'
        })(j || (j = o`
  height: 35px;
`)),
        t = f.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(k || (k = o``)),
        u = {
            TopHeader: f.default.div(l || (l = o`
    font-size: 17px;
  `)),
            Title: f.default.div(m || (m = o`
    font-size: 36px;
    font-weight: ${ 0 };
  `), e.FontWeights.Bold),
            Description: f.default.div(n || (n = o`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `))
        };
});