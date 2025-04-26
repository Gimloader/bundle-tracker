function a(a, b, i, j) {
    Object.defineProperty(a, b, {
        get: i,
        set: j,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('0GMUe', function(i, j) {
    var c;
    c = i.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(i.exports, 'default', function() {
        return s;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('h99Nu'),
        g = b('cR5QE'),
        h = b('iHElh'),
        i = b('Vlfxs'),
        j = b('PjB0f'),
        k = b('gSUVO'),
        l = b('lmfrI'),
        m = b('+3d9H'),
        n = b('q721a'),
        o = b('k0s2g17');
    let p, q, r = a => a;
    var s = (0, i.observer)(() => {
        const t = (0, j.getUrlVariable)('session_id');
        e.useEffect(() => {
            (0, j.isStudent)() ? (0, o.NavigateTo)(n.DASHBOARD) : t && (0, m.default)(t);
        }, []);
        return (0, d.jsx)(t, {
            children: (0, d.jsx)(u, {
                children: t ? (0, d.jsxs)('div', {
                    className: 'maxWidth flex hc vc flex-column',
                    children: [
                        (0, d.jsx)(h.default, {
                            size: 'large'
                        }),
                        (0, j.isLoggedIn)() && (0, d.jsx)('div', {
                            style: {
                                fontSize: 23,
                                fontWeight: k.FontWeights.UltraBold
                            },
                            children: 'Upgrading your account...'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 16
                            },
                            children: 'Please don\'t close this tab'
                        })
                    ]
                }) : (g.default.error({
                    title: 'An error ocurred during checkout. Please contact customer support'
                }), null)
            })
        });
    });
    const t = f.default.div(p || (p = r`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        u = f.default.div.attrs({
            className: 'scroll-y'
        })(q || (q = r`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), l.default.White, k.Fonts.SFPro, l.default.Black);
}), b.register('+3d9H', function(i, j) {
    a(i.exports, 'default', function() {
        return j;
    });
    var c = b('PjB0f'),
        d = b('I1CoM'),
        e = b('q721a'),
        f = b('I9mdQ'),
        g = b('cR5QE'),
        h = b('k0s2g17'),
        i = b('CJCMN4');
    var j = a => {
        d.default.navigation.loadingTokenSubmit = !0;
        (0, c.verifyStripe)({
            sessionId: a,
            onSuccess: (0, c.isLoggedIn)() ? () => {
                const k = (0, c.isUpgraded)();
                (0, f.default)({
                    onSuccess: () => {
                        var l;
                        k || (0, i.AnalyticsTrackEvent)({
                            event: 'upgrade',
                            properties: {
                                plan: null === (l = (0, c.getUser)()) || void 0 === l ? void 0 : l.type,
                                source: 'individual'
                            },
                            forcePostHog: !0
                        }), window.location.href = e.DASHBOARD + '?from=upgrade';
                    },
                    onError: () => g.default.success({
                        title: 'Upgraded!',
                        content: 'You have upgraded but must log out and back in first.',
                        onOk: () => (0, c.request)({
                            url: '/logout',
                            both: () => window.open('/login', '_self')
                        })
                    })
                });
            } : () => {
                g.default.success({
                    title: 'The purchase has been completed',
                    onOk: () => (0, h.NavigateTo)(e.HOMEPAGE)
                });
            },
            onError: a => {
                d.default.navigation.loadingTokenSubmit = !1, (0, c.throwMessageError)({
                    e: a,
                    default: {
                        title: 'Error ocurred when upgrading account',
                        content: 'An error ocurred on our end while upgrading your account. Please contact support.'
                    }
                });
            }
        });
    };
}), b.register('I1CoM', function(i, j) {
    a(i.exports, 'default', function() {
        return e;
    });
    var c = b('SWSuU'),
        d = b('voqY9');
    var e = {
        navigation: new(0, c.default)(),
        checkout: new(0, d.default)()
    };
}), b.register('SWSuU', function(i, j) {
    a(i.exports, 'Screen', function() {
        return e;
    }), a(i.exports, 'default', function() {
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
}), b.register('voqY9', function(i, j) {
    a(i.exports, 'default', function() {
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
}), b.register('k0s2g17', function(i, j) {
    a(i.exports, 'NavigateTo', function() {
        return d;
    });
    var c = b('Cr/BM');
    const d = a => {
        c.history.push(a);
    };
}), b.register('CJCMN4', function(i, j) {
    a(i.exports, 'AnalyticsTrackEvent', function() {
        return g;
    });
    var c = b('pvZv3'),
        d = b('PjB0f'),
        e = b('61G7M'),
        f = b('OW/xn');
    const g = a => {
        var h, i, j;
        if ((window.gtag && !(null === (h = a.blockedSource) || void 0 === h ? void 0 : h.google) && window.gtag('event', a.event, a.properties), e.AnalyticsFlags.educatorOnly) && (null === (j = (0, d.getUser)()) || void 0 === j ? void 0 : j.accountType) !== c.default.educator)
            return;
        (null === (i = a.blockedSource) || void 0 === i ? void 0 : i.posthog) || (0, f.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
});