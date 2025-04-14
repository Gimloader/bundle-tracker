function e(e, o, t, n) {
    Object.defineProperty(e, o, {
        get: t,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("jhieM", (function(t, n) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return _
    }));
    var i = o("hxEiv"),
        a = o("fywoC"),
        s = o("2FDaO"),
        c = o("fBuQJ"),
        l = o("gHmyG"),
        u = o("lpEVe"),
        d = o("iMOcM"),
        p = o("69SUA"),
        f = o("lKmIF"),
        g = o("lAIzT"),
        v = o("b1oE9"),
        b = o("iROck");
    let h, y, O = e => e;
    var _ = (0, u.observer)((() => {
        const e = (0, d.getUrlVariable)("session_id");
        a.useEffect((() => {
            (0, d.isStudent)() ? (0, b.NavigateTo)(v.DASHBOARD) : e && (0, g.default)(e)
        }), []);
        return (0, i.jsx)(m, {
            children: (0, i.jsx)(x, {
                children: e ? (0, i.jsxs)("div", {
                    className: "maxWidth flex hc vc flex-column",
                    children: [(0, i.jsx)(l.default, {
                        size: "large"
                    }), (0, d.isLoggedIn)() && (0, i.jsx)("div", {
                        style: {
                            fontSize: 23,
                            fontWeight: p.FontWeights.UltraBold
                        },
                        children: "Upgrading your account..."
                    }), (0, i.jsx)("div", {
                        style: {
                            fontSize: 16
                        },
                        children: "Please don't close this tab"
                    })]
                }) : (c.default.error({
                    title: "An error ocurred during checkout. Please contact customer support"
                }), null)
            })
        })
    }));
    const m = s.default.div(h || (h = O`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        x = s.default.div.attrs({
            className: "scroll-y"
        })(y || (y = O`
  background: ${0};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${0};
  color: ${0};
`), f.default.White, p.Fonts.SFPro, f.default.Black)
})), o.register("lAIzT", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var r = o("iMOcM"),
        i = o("jszEY"),
        a = o("b1oE9"),
        s = o("bGoag"),
        c = o("fBuQJ"),
        l = o("iROck"),
        u = o("8p0tB");
    var d = e => {
        i.default.navigation.loadingTokenSubmit = !0;
        (0, r.verifyStripe)({
            sessionId: e,
            onSuccess: (0, r.isLoggedIn)() ? () => {
                const e = (0, r.isUpgraded)();
                (0, s.default)({
                    onSuccess: () => {
                        var o;
                        e || (0, u.AnalyticsTrackEvent)({
                            event: "upgrade",
                            properties: {
                                plan: null === (o = (0, r.getUser)()) || void 0 === o ? void 0 : o.type,
                                source: "individual"
                            },
                            forcePostHog: !0
                        }), window.location.href = a.DASHBOARD + "?from=upgrade"
                    },
                    onError: () => c.default.success({
                        title: "Upgraded!",
                        content: "You have upgraded but must log out and back in first.",
                        onOk: () => (0, r.request)({
                            url: "/logout",
                            both: () => window.open("/login", "_self")
                        })
                    })
                })
            } : () => {
                c.default.success({
                    title: "The purchase has been completed",
                    onOk: () => (0, l.NavigateTo)(a.HOMEPAGE)
                })
            },
            onError: e => {
                i.default.navigation.loadingTokenSubmit = !1, (0, r.throwMessageError)({
                    e: e,
                    default: {
                        title: "Error ocurred when upgrading account",
                        content: "An error ocurred on our end while upgrading your account. Please contact support."
                    }
                })
            }
        })
    }
})), o.register("jszEY", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var r = o("jpcnY"),
        i = o("34qqz");
    var a = {
        navigation: new(0, r.default),
        checkout: new(0, i.default)
    }
})), o.register("jpcnY", (function(t, n) {
    e(t.exports, "Screen", (function() {
        return a
    })), e(t.exports, "default", (function() {
        return d
    }));
    var r = o("kHqmx"),
        i = o("4MuSt");
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
    }(0, r.__decorate)([i.observable], u.prototype, "screen", void 0), (0, r.__decorate)([i.observable], u.prototype, "loadingTokenSubmit", void 0), (0, r.__decorate)([i.action], u.prototype, "reset", void 0);
    var d = u
})), o.register("34qqz", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var r = o("kHqmx"),
        i = o("4MuSt");
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
            amountOff: g,
            couponDescription: v,
            hasCoupon: b,
            couponOneUseOnly: h,
            couponIsOnlyForPlan: y,
            existingPayingPlan: O,
            stripePublicKey: _
        } = a;
    class m {
        get totalCost() {
            const e = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return e < 0 ? 0 : e
        }
        constructor() {
            this.planName = s, this.planId = c, this.couponId = l, this.planCost = u, this.planDescription = d, this.accountCredit = p, this.percentageOff = f, this.amountOff = g, this.couponDescription = v, this.hasCoupon = b, this.couponOneUseOnly = h, this.couponIsOnlyForPlan = y, this.existingPayingPlan = O, this.stripePublicKey = _, this.reset = () => {
                Object.keys(a).forEach((e => {
                    this[e] = a[e]
                }))
            }, (0, i.makeObservable)(this)
        }
    }(0, r.__decorate)([i.observable], m.prototype, "planName", void 0), (0, r.__decorate)([i.observable], m.prototype, "planId", void 0), (0, r.__decorate)([i.observable], m.prototype, "couponId", void 0), (0, r.__decorate)([i.observable], m.prototype, "planCost", void 0), (0, r.__decorate)([i.observable], m.prototype, "planDescription", void 0), (0, r.__decorate)([i.observable], m.prototype, "accountCredit", void 0), (0, r.__decorate)([i.observable], m.prototype, "percentageOff", void 0), (0, r.__decorate)([i.observable], m.prototype, "amountOff", void 0), (0, r.__decorate)([i.observable], m.prototype, "couponDescription", void 0), (0, r.__decorate)([i.observable], m.prototype, "hasCoupon", void 0), (0, r.__decorate)([i.observable], m.prototype, "couponOneUseOnly", void 0), (0, r.__decorate)([i.observable], m.prototype, "couponIsOnlyForPlan", void 0), (0, r.__decorate)([i.observable], m.prototype, "existingPayingPlan", void 0), (0, r.__decorate)([i.observable], m.prototype, "stripePublicKey", void 0), (0, r.__decorate)([i.computed], m.prototype, "totalCost", null), (0, r.__decorate)([i.action], m.prototype, "reset", void 0);
    var x = m
})), o.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return i
    }));
    var r = o("bd8je");
    const i = e => {
        r.history.push(e)
    }
})), o.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return c
    }));
    var r = o("6fFlL"),
        i = o("iMOcM"),
        a = o("dOsOD"),
        s = o("amvOw");
    const c = e => {
        var o, t, n;
        if ((window.gtag && !(null === (o = e.blockedSource) || void 0 === o ? void 0 : o.google) && window.gtag("event", e.event, e.properties), a.AnalyticsFlags.educatorOnly) && (null === (n = (0, i.getUser)()) || void 0 === n ? void 0 : n.accountType) !== r.default.educator) return;
        (null === (t = e.blockedSource) || void 0 === t ? void 0 : t.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
}));