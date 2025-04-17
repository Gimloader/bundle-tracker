function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, r, o) {
    Object.defineProperty(e, t, {
        get: r,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("94YQP", (function(o, n) {
    var i;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), t(o.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        s = r("fywoC"),
        c = r("93yIm"),
        l = r("fC6cp"),
        u = r("gHmyG"),
        d = r("kgPjU"),
        p = r("iMOcM"),
        f = r("dNca6"),
        h = r("ijM5J"),
        g = r("46bRO"),
        y = r("fp7ER"),
        v = r("3uz2P");
    var b = () => {
        const {
            checkout: t
        } = e(s).useContext(f.default);
        let [r, o] = e(s).useState(!1), [n, i] = e(s).useState(!0), [b, m] = e(s).useState(""), [x, w] = e(s).useState(""), [P, _] = e(s).useState(!1), [O, j] = e(s).useState(null);
        const {
            id: C
        } = (0, v.useParams)();
        e(s).useEffect((() => {
            (0, h.default)();
            const e = (0, p.getUrlVariable)("session_id");
            e ? (0, p.verifyStripe)({
                sessionId: e,
                onSuccess: () => {
                    _(!0), M()
                },
                onError: e => {
                    i(!1), (0, p.throwMessageError)({
                        e: e,
                        default: {
                            title: "An error ocurred when charging your card",
                            content: "Please contact support."
                        }
                    })
                }
            }) : M()
        }), []);
        const M = () => {
                (0, p.request)({
                    url: `/api/billing/pay-for-me-info/${C}`,
                    method: "GET",
                    success: e => {
                        o(e.isUpgraded), m(e.firstName), w(e.lastName), j(e.receiptUrl)
                    },
                    error: e => (0, p.throwMessageError)({
                        e: e,
                        default: {
                            title: "We were unable to verify the user's id",
                            content: "Please try again later"
                        }
                    }),
                    both: () => i(!1)
                })
            },
            S = async e => {
                if (t.stripePublicKey) {
                    if (n) return;
                    let e;
                    i(!0);
                    try {
                        e = await (0, d.loadStripe)(t.stripePublicKey)
                    } catch (e) {
                        i(!1), (0, p.throwMessageError)({
                            default: {
                                title: "Connection Error",
                                content: "An error ocurred while connecting to our payments provider. Please try again later"
                            }
                        })
                    }
                    e && (0, p.request)({
                        url: "/api/billing/create-pay-for-me-session",
                        method: "POST",
                        data: {
                            encryptedUserId: C
                        },
                        success: async t => {
                            const r = t;
                            let o;
                            try {
                                if (o = await e.redirectToCheckout({
                                        sessionId: r.id
                                    }), o && o.error) throw o.error
                            } catch (e) {
                                i(!1), (0, p.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Connection Error",
                                        content: "An error ocurred. Please try again later"
                                    }
                                })
                            }
                        },
                        error: e => {
                            i(!1), (0, p.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Connection Error",
                                    content: "An error ocurred while connecting to our payments provider. Please try again later"
                                }
                            })
                        }
                    })
                }
            }, E = () => {
                O && window.open(O)
            };
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(p.Title, {
                title: "Pay For Me"
            }), (0, a.jsx)(y.Container, {
                children: (0, a.jsxs)(y.Content, {
                    children: [(0, a.jsxs)(y.TopSectionContainer, {
                        children: [(0, a.jsx)(y.Logo, {}), (0, a.jsx)(l.default, {})]
                    }), (0, a.jsx)(y.MainContent, {
                        children: n ? (0, a.jsx)(u.default, {
                            size: "large",
                            style: {
                                marginTop: 10
                            }
                        }) : (() => {
                            const e = (0, p.getUrlVariable)("session_id");
                            return r && !e ? (0, a.jsxs)("div", {
                                style: {
                                    fontSize: 20
                                },
                                children: [b, " has already been upgraded to ", g.COMPANY_NAME, " Pro."]
                            }) : e && r && P ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(y.Message.TopHeader, {
                                    children: [b, " has been upgraded to"]
                                }), (0, a.jsxs)(y.Message.Title, {
                                    children: [g.COMPANY_NAME, " Pro!"]
                                }), (0, a.jsxs)(y.Message.Description, {
                                    children: ["We charged your card $59.88 and upgraded ", b, " to", " ", g.COMPANY_NAME, " Pro for one year. This was a one-time charge and auto-renew is off."]
                                }), O && (0, a.jsx)("div", {
                                    style: {
                                        marginTop: 30
                                    },
                                    children: (0, a.jsx)(c.default, {
                                        type: "primary",
                                        size: "large",
                                        onClick: E,
                                        style: {
                                            width: 400,
                                            height: 60
                                        },
                                        children: "View and Print Receipt"
                                    })
                                })]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(y.Message.TopHeader, {
                                    children: ["Purchase ", g.COMPANY_NAME, " Pro for"]
                                }), (0, a.jsxs)(y.Message.Title, {
                                    children: [b, " ", x]
                                }), (0, a.jsxs)(y.Message.Description, {
                                    children: ["Make a one-time $59.88 payment for ", b, " to receive one year of ", g.COMPANY_NAME, " Pro. Auto-renew is off, which means you will only be charged once."]
                                }), (0, a.jsx)("div", {
                                    style: {
                                        marginTop: 30
                                    },
                                    children: (0, a.jsxs)(c.default, {
                                        type: "primary",
                                        size: "large",
                                        onClick: S,
                                        style: {
                                            width: 400,
                                            height: 60
                                        },
                                        children: ["Purchase ", g.COMPANY_NAME, " Pro for ", b]
                                    })
                                })]
                            })
                        })()
                    })]
                })
            })]
        })
    }
})), r.register("kgPjU", (function(e, r) {
    t(e.exports, "loadStripe", (function() {
        return d
    }));
    var o = "https://js.stripe.com/v3",
        n = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        i = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        a = null,
        s = function(e) {
            return null !== a || (a = new Promise((function(t, r) {
                if ("undefined" != typeof window)
                    if (window.Stripe && e && console.warn(i), window.Stripe) t(window.Stripe);
                    else try {
                        var a = function() {
                            for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
                                var r = e[t];
                                if (n.test(r.src)) return r
                            }
                            return null
                        }();
                        a && e ? console.warn(i) : a || (a = function(e) {
                            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                r = document.createElement("script");
                            r.src = "".concat(o).concat(t);
                            var n = document.head || document.body;
                            if (!n) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                            return n.appendChild(r), r
                        }(e)), a.addEventListener("load", (function() {
                            window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
                        })), a.addEventListener("error", (function() {
                            r(new Error("Failed to load Stripe.js"))
                        }))
                    } catch (e) {
                        return void r(e)
                    } else t(null)
            }))), a
        },
        c = function(e, t, r) {
            if (null === e) return null;
            var o = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.9.0",
                    startTime: t
                })
            }(o, r), o
        },
        l = Promise.resolve().then((function() {
            return s(null)
        })),
        u = !1;
    l.catch((function(e) {
        u || console.warn(e)
    }));
    var d = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        u = !0;
        var o = Date.now();
        return l.then((function(e) {
            return c(e, t, o)
        }))
    }
})), r.register("dNca6", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = r("fywoC"),
        i = r("jszEY");
    var a = n.createContext(i.default)
})), r.register("jszEY", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = r("jpcnY"),
        i = r("34qqz");
    var a = {
        navigation: new(0, n.default),
        checkout: new(0, i.default)
    }
})), r.register("jpcnY", (function(e, o) {
    t(e.exports, "Screen", (function() {
        return a
    })), t(e.exports, "default", (function() {
        return d
    }));
    var n = r("kHqmx"),
        i = r("4MuSt");
    let a;
    (a || (a = {})).checkout = "checkout";
    const s = {
            screen: a.checkout,
            loadingTokenSubmit: !1
        },
        {
            screen: c,
            loadingTokenSubmit: l
        } = s;
    class u {
        constructor() {
            this.screen = c, this.loadingTokenSubmit = l, this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e]))
            }, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], u.prototype, "screen", void 0), (0, n.__decorate)([i.observable], u.prototype, "loadingTokenSubmit", void 0), (0, n.__decorate)([i.action], u.prototype, "reset", void 0);
    var d = u
})), r.register("34qqz", (function(e, o) {
    t(e.exports, "default", (function() {
        return P
    }));
    var n = r("kHqmx"),
        i = r("4MuSt");
    const a = {
            planName: "",
            planId: "",
            couponId: "",
            planCost: 0,
            planDescription: "",
            accountCredit: 0,
            percentageOff: 1,
            amountOff: 0,
            couponDescription: "",
            hasCoupon: !1,
            couponOneUseOnly: !0,
            couponIsOnlyForPlan: "",
            existingPayingPlan: "",
            stripePublicKey: ""
        },
        {
            planName: s,
            planId: c,
            couponId: l,
            planCost: u,
            planDescription: d,
            accountCredit: p,
            percentageOff: f,
            amountOff: h,
            couponDescription: g,
            hasCoupon: y,
            couponOneUseOnly: v,
            couponIsOnlyForPlan: b,
            existingPayingPlan: m,
            stripePublicKey: x
        } = a;
    class w {
        get totalCost() {
            const e = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return e < 0 ? 0 : e
        }
        constructor() {
            this.planName = s, this.planId = c, this.couponId = l, this.planCost = u, this.planDescription = d, this.accountCredit = p, this.percentageOff = f, this.amountOff = h, this.couponDescription = g, this.hasCoupon = y, this.couponOneUseOnly = v, this.couponIsOnlyForPlan = b, this.existingPayingPlan = m, this.stripePublicKey = x, this.reset = () => {
                Object.keys(a).forEach((e => {
                    this[e] = a[e]
                }))
            }, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], w.prototype, "planName", void 0), (0, n.__decorate)([i.observable], w.prototype, "planId", void 0), (0, n.__decorate)([i.observable], w.prototype, "couponId", void 0), (0, n.__decorate)([i.observable], w.prototype, "planCost", void 0), (0, n.__decorate)([i.observable], w.prototype, "planDescription", void 0), (0, n.__decorate)([i.observable], w.prototype, "accountCredit", void 0), (0, n.__decorate)([i.observable], w.prototype, "percentageOff", void 0), (0, n.__decorate)([i.observable], w.prototype, "amountOff", void 0), (0, n.__decorate)([i.observable], w.prototype, "couponDescription", void 0), (0, n.__decorate)([i.observable], w.prototype, "hasCoupon", void 0), (0, n.__decorate)([i.observable], w.prototype, "couponOneUseOnly", void 0), (0, n.__decorate)([i.observable], w.prototype, "couponIsOnlyForPlan", void 0), (0, n.__decorate)([i.observable], w.prototype, "existingPayingPlan", void 0), (0, n.__decorate)([i.observable], w.prototype, "stripePublicKey", void 0), (0, n.__decorate)([i.computed], w.prototype, "totalCost", null), (0, n.__decorate)([i.action], w.prototype, "reset", void 0);
    var P = w
})), r.register("ijM5J", (function(e, o) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = r("iMOcM"),
        i = r("jszEY"),
        a = r("sgWtV"),
        s = r("b1oE9"),
        c = r("iROck");
    var l = () => {
        (0, n.request)({
            url: "/api/billing/stripe-key",
            success: e => i.default.checkout.stripePublicKey = e.key,
            error: () => (0, a.throwError)({
                title: "Our payments provider is currently down",
                content: "Please try again later",
                onOk: () => (0, c.NavigateTo)(s.DASHBOARD)
            })
        })
    }
})), r.register("iROck", (function(e, o) {
    t(e.exports, "NavigateTo", (function() {
        return i
    }));
    var n = r("bd8je");
    const i = e => {
        n.history.push(e)
    }
})), r.register("fp7ER", (function(e, o) {
    t(e.exports, "Container", (function() {
        return y
    })), t(e.exports, "Content", (function() {
        return v
    })), t(e.exports, "TopSectionContainer", (function() {
        return b
    })), t(e.exports, "Logo", (function() {
        return m
    })), t(e.exports, "MainContent", (function() {
        return x
    })), t(e.exports, "Message", (function() {
        return w
    }));
    var n = r("lKmIF"),
        i = r("69SUA"),
        a = r("2FDaO");
    let s, c, l, u, d, p, f, h, g = e => e;
    const y = a.default.div.attrs({
            className: "maxWidth maxHeight flex hc vc"
        })(s || (s = g`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`)),
        v = a.default.div.attrs({
            className: "scroll-y"
        })(c || (c = g`
  background: ${0};
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${0};
  color: ${0};
`), n.default.White, i.Fonts.SFPro, n.default.Black),
        b = a.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(l || (l = g``)),
        m = a.default.img.attrs({
            src: "/client/img/svgLogo.svg"
        })(u || (u = g`
  height: 35px;
`)),
        x = a.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(d || (d = g``)),
        w = {
            TopHeader: a.default.div(p || (p = g`
    font-size: 17px;
  `)),
            Title: a.default.div(f || (f = g`
    font-size: 36px;
    font-weight: ${0};
  `), i.FontWeights.Bold),
            Description: a.default.div(h || (h = g`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `))
        }
}));