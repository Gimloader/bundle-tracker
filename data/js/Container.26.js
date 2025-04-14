function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("kQrsx", (function(n, r) {
    var o;
    o = n.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return d
    }));
    var a = t("hxEiv"),
        i = t("fywoC"),
        s = t("8Ffmc"),
        l = t("dNca6"),
        c = t("jszEY");
    var d = () => (i.useEffect((() => () => {
        c.default.checkout.reset(), c.default.navigation.reset()
    }), []), (0, a.jsx)(l.default.Provider, {
        value: c.default,
        children: (0, a.jsx)(s.default, {})
    }))
})), t.register("8Ffmc", (function(n, r) {
    e(n.exports, "default", (function() {
        return P
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("2FDaO"),
        s = t("lKmIF"),
        l = t("lpEVe"),
        c = t("dNca6"),
        d = t("jpcnY"),
        u = t("b1oE9"),
        p = t("8kzqI"),
        f = t("69SUA"),
        h = t("c1S08"),
        g = t("1NGHn"),
        y = t("ijM5J"),
        v = t("iMOcM"),
        x = t("iROck");
    let b, m, j = e => e;
    var P = (0, l.observer)((() => {
        const {
            navigation: e
        } = a.useContext(c.default);
        a.useEffect((() => {
            if ((0, v.isStudent)()) return void(0, x.NavigateTo)(u.DASHBOARD);
            (0, v.isLoggedIn)() && (0, h.default)(), (0, y.default)();
            const e = (0, v.getUrlVariable)("coupon");
            e && (0, g.default)(e)
        }), []);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(O, {
                children: (0, o.jsx)(k, {
                    children: (() => {
                        const {
                            screen: t
                        } = e;
                        return t === d.Screen.checkout ? (0, o.jsx)(p.default, {}) : null
                    })()
                })
            }), (0, o.jsx)(v.Title, {
                title: "Checkout"
            })]
        })
    }));
    const O = i.default.div(b || (b = j`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        k = i.default.div.attrs({
            className: "scroll-y"
        })(m || (m = j`
  background: ${0};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${0};
  color: ${0};
`), s.default.White, f.Fonts.SFPro, s.default.Black)
})), t.register("dNca6", (function(n, r) {
    e(n.exports, "default", (function() {
        return i
    }));
    var o = t("fywoC"),
        a = t("jszEY");
    var i = o.createContext(a.default)
})), t.register("jszEY", (function(n, r) {
    e(n.exports, "default", (function() {
        return i
    }));
    var o = t("jpcnY"),
        a = t("34qqz");
    var i = {
        navigation: new(0, o.default),
        checkout: new(0, a.default)
    }
})), t.register("jpcnY", (function(n, r) {
    e(n.exports, "Screen", (function() {
        return i
    })), e(n.exports, "default", (function() {
        return u
    }));
    var o = t("kHqmx"),
        a = t("4MuSt");
    let i;
    (i || (i = {})).checkout = "checkout";
    const s = {
            screen: i.checkout,
            loadingTokenSubmit: !1
        },
        {
            screen: l,
            loadingTokenSubmit: c
        } = s;
    class d {
        constructor() {
            this.screen = l, this.loadingTokenSubmit = c, this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e]))
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], d.prototype, "screen", void 0), (0, o.__decorate)([a.observable], d.prototype, "loadingTokenSubmit", void 0), (0, o.__decorate)([a.action], d.prototype, "reset", void 0);
    var u = d
})), t.register("34qqz", (function(n, r) {
    e(n.exports, "default", (function() {
        return P
    }));
    var o = t("kHqmx"),
        a = t("4MuSt");
    const i = {
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
            planId: l,
            couponId: c,
            planCost: d,
            planDescription: u,
            accountCredit: p,
            percentageOff: f,
            amountOff: h,
            couponDescription: g,
            hasCoupon: y,
            couponOneUseOnly: v,
            couponIsOnlyForPlan: x,
            existingPayingPlan: b,
            stripePublicKey: m
        } = i;
    class j {
        get totalCost() {
            const e = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return e < 0 ? 0 : e
        }
        constructor() {
            this.planName = s, this.planId = l, this.couponId = c, this.planCost = d, this.planDescription = u, this.accountCredit = p, this.percentageOff = f, this.amountOff = h, this.couponDescription = g, this.hasCoupon = y, this.couponOneUseOnly = v, this.couponIsOnlyForPlan = x, this.existingPayingPlan = b, this.stripePublicKey = m, this.reset = () => {
                Object.keys(i).forEach((e => {
                    this[e] = i[e]
                }))
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], j.prototype, "planName", void 0), (0, o.__decorate)([a.observable], j.prototype, "planId", void 0), (0, o.__decorate)([a.observable], j.prototype, "couponId", void 0), (0, o.__decorate)([a.observable], j.prototype, "planCost", void 0), (0, o.__decorate)([a.observable], j.prototype, "planDescription", void 0), (0, o.__decorate)([a.observable], j.prototype, "accountCredit", void 0), (0, o.__decorate)([a.observable], j.prototype, "percentageOff", void 0), (0, o.__decorate)([a.observable], j.prototype, "amountOff", void 0), (0, o.__decorate)([a.observable], j.prototype, "couponDescription", void 0), (0, o.__decorate)([a.observable], j.prototype, "hasCoupon", void 0), (0, o.__decorate)([a.observable], j.prototype, "couponOneUseOnly", void 0), (0, o.__decorate)([a.observable], j.prototype, "couponIsOnlyForPlan", void 0), (0, o.__decorate)([a.observable], j.prototype, "existingPayingPlan", void 0), (0, o.__decorate)([a.observable], j.prototype, "stripePublicKey", void 0), (0, o.__decorate)([a.computed], j.prototype, "totalCost", null), (0, o.__decorate)([a.action], j.prototype, "reset", void 0);
    var P = j
})), t.register("8kzqI", (function(n, r) {
    e(n.exports, "default", (function() {
        return P
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("2FDaO"),
        s = t("fC6cp"),
        l = t("gHmyG"),
        c = t("beXRF"),
        d = t("b1oE9"),
        u = t("6OGjs"),
        p = t("7YOjp"),
        f = t("lpEVe"),
        h = t("dNca6"),
        g = t("cpRVT"),
        y = t("91OKC"),
        v = t("hhDry"),
        x = t("iMOcM"),
        b = t("9kZfj"),
        m = t("iROck");
    let j;
    var P = (0, f.observer)((() => {
        const {
            checkout: e
        } = a.useContext(h.default);
        a.useEffect((() => {
            var t;
            (0, g.default)(y.PlanIds.pro);
            const n = (0, x.getUser)();
            if (!(null === (t = n.freeTrial) || void 0 === t ? void 0 : t.currentlyOnFreeTrial) && (0, x.isUpgraded)()) {
                if (n.type === y.PlanIds.pro) {
                    if ((0, b.onlyOfferAnnualUpgrade)()) return void(0, m.NavigateTo)(d.DASHBOARD);
                    (0, g.default)(y.PlanIds.proPass)
                }
                e.existingPayingPlan = n.type
            }
        }), []);
        const t = (0, x.getUser)().type === y.PlanIds.proPass || (0, b.onlyOfferAnnualUpgrade)();
        return !e.stripePublicKey || t ? (0, o.jsxs)("div", {
            className: "maxWidth flex hc",
            style: {
                padding: 40
            },
            children: [(0, o.jsx)(l.default, {
                size: "large"
            }), t ? (0, o.jsx)(p.default, {}) : null]
        }) : (0, o.jsxs)(O, {
            children: [(0, o.jsx)(c.Link, {
                to: d.DASHBOARD,
                children: (0, o.jsx)("img", {
                    src: "/client/img/svgLogo.svg",
                    style: {
                        width: 158,
                        marginTop: 6
                    }
                })
            }), (0, o.jsx)(s.default, {}), (0, b.onlyOfferAnnualUpgrade)() ? null : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)("div", {
                    className: "flex maxWidth",
                    style: {
                        justifyContent: "space-between",
                        marginTop: 10
                    },
                    children: [(0, o.jsx)(v.default, {
                        title: "Annually",
                        description: (0, o.jsxs)("span", {
                            children: ["$59.88 a year", (0, o.jsx)("br", {}), "That works out to $4.99 a month"]
                        }),
                        selected: e.planId === y.PlanIds.pro,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === y.PlanIds.pro || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== y.PlanIds.pro,
                        onClick: () => (0, g.default)(y.PlanIds.pro),
                        showSaveTag: !0
                    }), (0, o.jsx)(v.default, {
                        title: "Monthly",
                        description: (0, o.jsx)("span", {
                            children: "$14.99 a month"
                        }),
                        selected: e.planId === y.PlanIds.proPass,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === y.PlanIds.proPass || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== y.PlanIds.proPass,
                        onClick: () => (0, g.default)(y.PlanIds.proPass)
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        height: 20
                    }
                })]
            }), (0, o.jsx)(u.default, {}), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(p.default, {})]
        })
    }));
    const O = i.default.div(j || (j = (e => e)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`))
})), t.register("6OGjs", (function(n, r) {
    e(n.exports, "default", (function() {
        return g
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("lpEVe"),
        s = t("2FDaO"),
        l = t("dNca6"),
        c = t("69SUA"),
        d = t("2KDwk"),
        u = t("fC6cp");
    let p, f, h = e => e;
    var g = (0, i.observer)((() => {
        const {
            checkout: e
        } = a.useContext(l.default);
        return (0, o.jsxs)("div", {
            className: "maxWidth",
            children: [(0, o.jsxs)(y, {
                children: [(0, o.jsxs)("div", {
                    children: [(0, o.jsx)("div", {
                        style: {
                            fontWeight: c.FontWeights.UltraBold,
                            fontSize: 23,
                            marginBottom: -7
                        },
                        children: e.planName
                    }), (0, o.jsx)("div", {
                        style: {
                            fontSize: 13,
                            opacity: .8
                        },
                        children: e.planDescription
                    })]
                }), (0, o.jsx)(v, {
                    children: (0, d.centsToFormatedMoney)(e.planCost)
                })]
            }), e.hasCoupon ? (0, o.jsxs)(y, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 15
                    },
                    children: e.couponDescription || "Coupon"
                }), (0, o.jsx)("div", {
                    children: (0, o.jsxs)(v, {
                        style: {
                            color: "green"
                        },
                        children: ["-", (0, d.centsToFormatedMoney)(e.amountOff ? e.amountOff : e.percentageOff ? e.planCost * (1 - e.percentageOff) : 0)]
                    })
                })]
            }) : null, e.accountCredit ? (0, o.jsxs)(y, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 15
                    },
                    children: "Account Credit"
                }), (0, o.jsxs)(v, {
                    style: {
                        color: "green"
                    },
                    children: ["-", (0, d.centsToFormatedMoney)(e.accountCredit)]
                })]
            }) : null, e.totalCost !== e.planCost ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(u.default, {}), (0, o.jsxs)(y, {
                    children: [(0, o.jsx)("div", {}), (0, o.jsx)(v, {
                        style: {
                            fontWeight: c.FontWeights.UltraBold
                        },
                        children: (0, d.centsToFormatedMoney)(e.totalCost)
                    })]
                })]
            }) : null]
        })
    }));
    const y = s.default.div(p || (p = h`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        v = s.default.div(f || (f = h`
  font-size: 18px;
`))
})), t.register("2KDwk", (function(t, n) {
    e(t.exports, "centsToFormatedMoney", (function() {
        return r
    }));
    const r = e => (e / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
})), t.register("7YOjp", (function(n, r) {
    e(n.exports, "default", (function() {
        return g
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("lpEVe"),
        s = t("dNca6"),
        l = t("2FDaO"),
        c = t("kgPjU"),
        d = t("iMOcM"),
        u = t("93yIm"),
        p = t("9kZfj"),
        f = t("91OKC");
    let h;
    var g = (0, i.observer)((() => {
        const [e, t] = a.useState(!1), {
            checkout: n
        } = a.useContext(s.default);
        a.useEffect((() => {
            n.planId && n.stripePublicKey && ((0, p.onlyOfferAnnualUpgrade)() || (0, d.getUser)().type === f.PlanIds.proPass) && n.existingPayingPlan !== n.planId && r().then().catch((e => !1))
        }), [n.existingPayingPlan, n.stripePublicKey, n.planId]);
        const r = async () => {
            if (n.stripePublicKey) {
                if (e) return;
                let r;
                t(!0);
                try {
                    r = await (0, c.loadStripe)(n.stripePublicKey)
                } catch (e) {
                    t(!1), (0, d.throwMessageError)({
                        default: {
                            title: "Connection Error",
                            content: "An error ocurred while connecting to our payments provider. Please try again later"
                        }
                    })
                }
                r && (0, d.request)({
                    url: "/api/billing/create-upgrade-session",
                    method: "POST",
                    data: {
                        plan: n.planId
                    },
                    success: async e => {
                        const n = e;
                        let o;
                        try {
                            if (o = await r.redirectToCheckout({
                                    sessionId: n.id
                                }), o && o.error) throw o.error
                        } catch (e) {
                            t(!1), (0, d.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Connection Error",
                                    content: "An error ocurred. Please try again later"
                                }
                            })
                        }
                    },
                    error: e => {
                        t(!1), (0, d.throwMessageError)({
                            e: e,
                            default: {
                                title: "Connection Error",
                                content: "An error ocurred while connecting to our payments provider. Please try again later"
                            }
                        })
                    }
                })
            }
        };
        return (0, d.getUser)().type === f.PlanIds.proPass || (0, p.onlyOfferAnnualUpgrade)() ? null : (0, o.jsx)("div", {
            className: "flex flex-column hc vc maxWidth",
            children: (0, o.jsx)(y, {
                children: (0, o.jsx)(u.default, {
                    id: "checkout-button",
                    onClick: () => {
                        r().then().catch((e => !1))
                    },
                    loading: e,
                    type: "primary",
                    style: {
                        width: "100%"
                    },
                    size: "large",
                    disabled: e,
                    children: `Subscribe to ${n.planName}`
                })
            })
        })
    }));
    const y = l.default.div(h || (h = (e => e)`
  width: 100%;
  div {
    width: 100%;
  }
`))
})), t.register("kgPjU", (function(t, n) {
    e(t.exports, "loadStripe", (function() {
        return u
    }));
    var r = "https://js.stripe.com/v3",
        o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        a = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        i = null,
        s = function(e) {
            return null !== i || (i = new Promise((function(t, n) {
                if ("undefined" != typeof window)
                    if (window.Stripe && e && console.warn(a), window.Stripe) t(window.Stripe);
                    else try {
                        var i = function() {
                            for (var e = document.querySelectorAll('script[src^="'.concat(r, '"]')), t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (o.test(n.src)) return n
                            }
                            return null
                        }();
                        i && e ? console.warn(a) : i || (i = function(e) {
                            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                n = document.createElement("script");
                            n.src = "".concat(r).concat(t);
                            var o = document.head || document.body;
                            if (!o) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                            return o.appendChild(n), n
                        }(e)), i.addEventListener("load", (function() {
                            window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
                        })), i.addEventListener("error", (function() {
                            n(new Error("Failed to load Stripe.js"))
                        }))
                    } catch (e) {
                        return void n(e)
                    } else t(null)
            }))), i
        },
        l = function(e, t, n) {
            if (null === e) return null;
            var r = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.9.0",
                    startTime: t
                })
            }(r, n), r
        },
        c = Promise.resolve().then((function() {
            return s(null)
        })),
        d = !1;
    c.catch((function(e) {
        d || console.warn(e)
    }));
    var u = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        d = !0;
        var r = Date.now();
        return c.then((function(e) {
            return l(e, t, r)
        }))
    }
})), t.register("9kZfj", (function(n, r) {
    e(n.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = t("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), t.register("cpRVT", (function(n, r) {
    e(n.exports, "default", (function() {
        return i
    }));
    var o = t("91OKC"),
        a = t("jszEY");
    var i = e => {
        a.default.checkout.planName = "Gimkit Pro", a.default.checkout.planId = e, a.default.checkout.planDescription = ((e, t) => e === o.PlanIds.pro ? "Billed annually" : e === o.PlanIds.proPass ? "Billed monthly" : "")(e), a.default.checkout.planCost = (e => e === o.PlanIds.pro ? 5988 : e === o.PlanIds.proPass ? 1499 : 0)(e)
    }
})), t.register("hhDry", (function(n, r) {
    e(n.exports, "default", (function() {
        return h
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("lKmIF"),
        s = t("69SUA");
    let l, c, d, u, p = e => e;
    const f = "#F0FFF6";
    var h = e => (0, o.jsxs)(g, {
        selected: e.selected,
        onClick: e.onClick,
        disabled: e.disabled,
        children: [(0, o.jsx)(y, {
            children: e.title
        }), (0, o.jsx)(v, {
            children: e.description
        }), e.showSaveTag ? (0, o.jsx)(x, {
            children: "Save 65%"
        }) : null]
    });
    const g = a.default.div(l || (l = p`
  border-style: solid;
  border-width: 2px;
  width: 284px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  ${0}
  border-color: ${0};
  background: ${0};
  transition: all 0.35s;
  &:hover {
    background: ${0};
  }
`), (e => e.disabled ? "\n  pointer-events: none;\n  opacity: 0.2;\n  " : null), (e => e.selected ? "#a5d6a7" : i.default.BorderGray), (e => e.selected ? f : i.default.White), f),
        y = a.default.h3(c || (c = p`
  font-weight: ${0};
  font-size: 18px;
  margin-bottom: 0px;
  color: ${0};
`), s.FontWeights.UltraBold, i.default.Black),
        v = a.default.p(d || (d = p`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`)),
        x = a.default.div.attrs({
            className: "flex hc vc"
        })(u || (u = p`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${0};
  font-size: 14px;
  border-radius: 22px;
`), i.default.White)
})), t.register("iROck", (function(n, r) {
    e(n.exports, "NavigateTo", (function() {
        return a
    }));
    var o = t("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), t.register("c1S08", (function(n, r) {
    e(n.exports, "default", (function() {
        return i
    }));
    var o = t("iMOcM"),
        a = t("jszEY");
    var i = () => {
        (0, o.request)({
            url: "/api/billing/account-balance",
            success: e => {
                e.balance && e.balance > 0 && (a.default.checkout.accountCredit = e.balance)
            }
        })
    }
})), t.register("1NGHn", (function(n, r) {
    e(n.exports, "default", (function() {
        return s
    }));
    var o = t("iMOcM"),
        a = t("jszEY"),
        i = t("cpRVT");
    var s = e => {
        (0, o.request)({
            url: `/api/stripe/coupons/${e}`,
            success: t => {
                t.metadata && t.metadata.onlyForPlan && ((0, i.default)(t.metadata.onlyForPlan), a.default.checkout.couponIsOnlyForPlan = a.default.checkout.planId), t.metadata && t.metadata.customDesc && (a.default.checkout.couponDescription = t.metadata.customDesc), a.default.checkout.amountOff = t.amountOff, a.default.checkout.percentageOff = 1 - .01 * t.percentageOff, a.default.checkout.couponOneUseOnly = t.oneUseOnly, a.default.checkout.couponId = e, a.default.checkout.hasCoupon = !0
            }
        })
    }
})), t.register("ijM5J", (function(n, r) {
    e(n.exports, "default", (function() {
        return c
    }));
    var o = t("iMOcM"),
        a = t("jszEY"),
        i = t("sgWtV"),
        s = t("b1oE9"),
        l = t("iROck");
    var c = () => {
        (0, o.request)({
            url: "/api/billing/stripe-key",
            success: e => a.default.checkout.stripePublicKey = e.key,
            error: () => (0, i.throwError)({
                title: "Our payments provider is currently down",
                content: "Please try again later",
                onOk: () => (0, l.NavigateTo)(s.DASHBOARD)
            })
        })
    }
}));