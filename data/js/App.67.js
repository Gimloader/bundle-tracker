function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('FzQB2', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _q;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('ulE4q'),
        h = a('fmVdR'),
        i = a('6CIVV'),
        j = a('AzS0C1'),
        k = a('PMl60'),
        l = a('W2+XK'),
        m = a('KBJS7'),
        n = a('hHkFq'),
        o = a('XWne8'),
        p = a('70AkF');
    var _q = () => {
        const {
            checkout: _r
        } = _F(f).useContext(l.default);
        let [s, t] = _F(f).useState(!1), [u, v] = _F(f).useState(!0), [w, x] = _F(f).useState(''), [y, z] = _F(f).useState(''), [A, B] = _F(f).useState(!1), [C, D] = _F(f).useState(null);
        const {
            id: E
        } = (0, p.useParams)();
        _F(f).useEffect(() => {
            (0, m.default)();
            const _F = (0, k.getUrlVariable)('session_id');
            _F ? (0, k.verifyStripe)({
                sessionId: _F,
                onSuccess: () => {
                    B(!0), _F();
                },
                onError: _F => {
                    v(!1), (0, k.throwMessageError)({
                        e: _F,
                        default: {
                            title: 'An error ocurred when charging your card',
                            content: 'Please contact support.'
                        }
                    });
                }
            }) : _F();
        }, []);
        const _F = () => {
                (0, k.request)({
                    url: `/api/billing/pay-for-me-info/${ E }`,
                    method: 'GET',
                    success: _H => {
                        t(_H.isUpgraded), x(_H.firstName), z(_H.lastName), D(_H.receiptUrl);
                    },
                    error: _H => (0, k.throwMessageError)({
                        e: _H,
                        default: {
                            title: 'We were unable to verify the user\'s id',
                            content: 'Please try again later'
                        }
                    }),
                    both: () => v(!1)
                });
            },
            G = async _H => {
                if (_r.stripePublicKey) {
                    if (u)
                        return;
                    let _H;
                    v(!0);
                    try {
                        _H = await (0, j.loadStripe)(_r.stripePublicKey);
                    } catch (_H) {
                        v(!1), (0, k.throwMessageError)({
                            default: {
                                title: 'Connection Error',
                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                            }
                        });
                    }
                    _H && (0, k.request)({
                        url: '/api/billing/create-pay-for-me-session',
                        method: 'POST',
                        data: {
                            encryptedUserId: E
                        },
                        success: async _r => {
                            const I = _r;
                            let J;
                            try {
                                if (J = await _H.redirectToCheckout({
                                        sessionId: I.id
                                    }), J && J.error)
                                    throw J.error;
                            } catch (_H) {
                                v(!1), (0, k.throwMessageError)({
                                    e: _H,
                                    default: {
                                        title: 'Connection Error',
                                        content: 'An error ocurred. Please try again later'
                                    }
                                });
                            }
                        },
                        error: _H => {
                            v(!1), (0, k.throwMessageError)({
                                e: _H,
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
}), a.register('AzS0C1', function(b, c) {
    _j(b.exports, 'loadStripe', function() {
        return _l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(i) {
            return null !== g || (g = new Promise(function(_j, k) {
                if ('undefined' != typeof window)
                    if (window.Stripe && i && console.warn(f), window.Stripe)
                        _j(window.Stripe);
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
                            l && i ? console.warn(f) : l || (l = function(m) {
                                var n = m && !m.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    o = document.createElement('script');
                                o.src = ''.concat(d).concat(n);
                                var p = document.head || document.body;
                                if (!p)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return p.appendChild(o), o;
                            }(i)), l.addEventListener('load', function() {
                                window.Stripe ? _j(window.Stripe) : k(new Error('Stripe.js not available'));
                            }), l.addEventListener('error', function() {
                                k(new Error('Failed to load Stripe.js'));
                            });
                        } catch (i) {
                            return void k(i);
                        }
                else
                    _j(null);
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
}), a.register('W2+XK', function(b, c) {
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('x/Eg+0');
    var _f = d.createContext(e.default);
}), a.register('x/Eg+0', function(b, c) {
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('xguoe0'),
        e = a('QKunP');
    var _f = {
        navigation: new(0, d.default)(),
        checkout: new(0, e.default)()
    };
}), a.register('xguoe0', function(b, c) {
    t(b.exports, 'Screen', function() {
        return _f;
    }), t(b.exports, 'default', function() {
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
                Object.keys(g).forEach(b => this[b] = g[b]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], j.prototype, 'screen', void 0), (0, d.__decorate)([e.observable], j.prototype, 'loadingTokenSubmit', void 0), (0, d.__decorate)([e.action], j.prototype, 'reset', void 0);
    var _k = j;
}), a.register('QKunP', function(b, c) {
    t(b.exports, 'default', function() {
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
            const v = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return v < 0 ? 0 : v;
        }
        constructor() {
            this.planName = g, this.planId = h, this.couponId = i, this.planCost = j, this.planDescription = k, this.accountCredit = l, this.percentageOff = m, this.amountOff = n, this.couponDescription = o, this.hasCoupon = p, this.couponOneUseOnly = q, this.couponIsOnlyForPlan = r, this.existingPayingPlan = s, this.stripePublicKey = t, this.reset = () => {
                Object.keys(f).forEach(b => {
                    this[b] = f[b];
                });
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], u.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planCost', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'accountCredit', void 0), (0, d.__decorate)([e.observable], u.prototype, 'percentageOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'amountOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'hasCoupon', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponOneUseOnly', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponIsOnlyForPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'existingPayingPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.computed], u.prototype, 'totalCost', null), (0, d.__decorate)([e.action], u.prototype, 'reset', void 0);
    var _v = u;
}), a.register('KBJS7', function(b, c) {
    t(b.exports, 'default', function() {
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
            success: b => e.default.checkout.stripePublicKey = b.key,
            error: () => (0, f.throwError)({
                title: 'Our payments provider is currently down',
                content: 'Please try again later',
                onOk: () => (0, h.NavigateTo)(g.DASHBOARD)
            })
        });
    };
}), a.register('jzxyj10', function(b, c) {
    t(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = b => {
        d.history.push(b);
    };
}), a.register('XWne8', function(b, c) {
    t(b.exports, 'Container', function() {
        return _p;
    }), t(b.exports, 'Content', function() {
        return _q;
    }), t(b.exports, 'TopSectionContainer', function() {
        return _r;
    }), t(b.exports, 'Logo', function() {
        return _s;
    }), t(b.exports, 'MainContent', function() {
        return _t;
    }), t(b.exports, 'Message', function() {
        return _u;
    });
    var d = a('sHRDd'),
        e = a('b5kvC'),
        f = a('Axq+p');
    let g, h, i, j, k, l, m, n, o = b => b;
    const _p = f.default.div.attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(g || (g = o`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`)),
        _q = f.default.div.attrs({
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
        _r = f.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(i || (i = o``)),
        _s = f.default.img.attrs({
            src: '/client/img/svgLogo.svg'
        })(j || (j = o`
  height: 35px;
`)),
        _t = f.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(k || (k = o``)),
        _u = {
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