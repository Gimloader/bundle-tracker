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
        return _u;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....');
    let r, s, t = u => u;
    var _u = (0, k.observer)(() => {
        const v = (0, l.getUrlVariable)('session_id');
        g.useEffect(() => {
            (0, l.isStudent)() ? (0, q.NavigateTo)(p.DASHBOARD) : v && (0, o.default)(v);
        }, []);
        return (0, f.jsx)(_v, {
            children: (0, f.jsx)(_w, {
                children: v ? (0, f.jsxs)('div', {
                    className: 'maxWidth flex hc vc flex-column',
                    children: [
                        (0, f.jsx)(j.default, { size: 'large' }),
                        (0, l.isLoggedIn)() && (0, f.jsx)('div', {
                            style: {
                                fontSize: 23,
                                fontWeight: m.FontWeights.UltraBold
                            },
                            children: 'Upgrading your account...'
                        }),
                        (0, f.jsx)('div', {
                            style: { fontSize: 16 },
                            children: 'Please don\'t close this tab'
                        })
                    ]
                }) : (i.default.error({ title: 'An error ocurred during checkout. Please contact customer support' }), null)
            })
        });
    });
    const _v = h.default.div(r || (r = t`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)), _w = h.default.div.attrs({ className: 'scroll-y' })(s || (s = t`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), n.default.White, m.Fonts.SFPro, n.default.Black);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    var _l = m => {
        f.default.navigation.loadingTokenSubmit = !0;
        (0, e.verifyStripe)({
            sessionId: m,
            onSuccess: (0, e.isLoggedIn)() ? () => {
                const n = (0, e.isUpgraded)();
                (0, h.default)({
                    onSuccess: () => {
                        var o;
                        n || (0, k.AnalyticsTrackEvent)({
                            event: 'upgrade',
                            properties: {
                                plan: null === (o = (0, e.getUser)()) || void 0 === o ? void 0 : o.type,
                                source: 'individual'
                            },
                            forcePostHog: !0
                        }), window.location.href = g.DASHBOARD + '?from=upgrade';
                    },
                    onError: () => i.default.success({
                        title: 'Upgraded!',
                        content: 'You have upgraded but must log out and back in first.',
                        onOk: () => (0, e.request)({
                            url: '/logout',
                            both: () => window.open('/login', '_self')
                        })
                    })
                });
            } : () => {
                i.default.success({
                    title: 'The purchase has been completed',
                    onOk: () => (0, j.NavigateTo)(g.HOMEPAGE)
                });
            },
            onError: n => {
                f.default.navigation.loadingTokenSubmit = !1, (0, e.throwMessageError)({
                    e: n,
                    default: {
                        title: 'Error ocurred when upgrading account',
                        content: 'An error ocurred on our end while upgrading your account. Please contact support.'
                    }
                });
            }
        });
    };
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
    a(c.exports, 'NavigateTo', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        e.history.push(g);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = j => {
        var k, l, m;
        if ((window.gtag && !(null === (k = j.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', j.event, j.properties), g.AnalyticsFlags.educatorOnly) && (null === (m = (0, f.getUser)()) || void 0 === m ? void 0 : m.accountType) !== e.default.educator)
            return;
        (null === (l = j.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, h.TrackPostHogEvent)({
            event: j.event,
            properties: j.properties,
            force: j.forcePostHog
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'TrackPostHogEvent', function () {
        return _e;
    });
    b('.....');
    const _e = f => {
    };
});