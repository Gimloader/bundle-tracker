function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Lb0bk', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _u(b.exports, 'default', function() {
        return _t;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('YRlpt'),
        i = a('6CIVV'),
        j = a('2x11J'),
        k = a('PMl60'),
        l = a('b5kvC'),
        m = a('sHRDd'),
        n = a('jE4mH'),
        o = a('gs4MT'),
        p = a('jzxyj10');
    let q, r, s = _u => _u;
    var _t = (0, j.observer)(() => {
        const _u = (0, k.getUrlVariable)('session_id');
        f.useEffect(() => {
            (0, k.isStudent)() ? (0, p.NavigateTo)(o.DASHBOARD) : _u && (0, n.default)(_u);
        }, []);
        return (0, e.jsx)(_u, {
            children: (0, e.jsx)(_v, {
                children: _u ? (0, e.jsxs)('div', {
                    className: 'maxWidth flex hc vc flex-column',
                    children: [
                        (0, e.jsx)(i.default, {
                            size: 'large'
                        }),
                        (0, k.isLoggedIn)() && (0, e.jsx)('div', {
                            style: {
                                fontSize: 23,
                                fontWeight: l.FontWeights.UltraBold
                            },
                            children: 'Upgrading your account...'
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                fontSize: 16
                            },
                            children: 'Please don\'t close this tab'
                        })
                    ]
                }) : (h.default.error({
                    title: 'An error ocurred during checkout. Please contact customer support'
                }), null)
            })
        });
    });
    const _u = g.default.div(q || (q = s`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _v = g.default.div.attrs({
            className: 'scroll-y'
        })(r || (r = s`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${ 0 };
  color: ${ 0 };
`), m.default.White, l.Fonts.SFPro, m.default.Black);
}), a.register('jE4mH', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('PMl60'),
        e = a('x/Eg+0'),
        f = a('gs4MT'),
        g = a('Pkvp4'),
        h = a('YRlpt'),
        i = a('jzxyj10'),
        j = a('Pq0g9');
    var _k = _l => {
        e.default.navigation.loadingTokenSubmit = !0;
        (0, d.verifyStripe)({
            sessionId: _l,
            onSuccess: (0, d.isLoggedIn)() ? () => {
                const _l = (0, d.isUpgraded)();
                (0, g.default)({
                    onSuccess: () => {
                        var m;
                        _l || (0, j.AnalyticsTrackEvent)({
                            event: 'upgrade',
                            properties: {
                                plan: null === (m = (0, d.getUser)()) || void 0 === m ? void 0 : m.type,
                                source: 'individual'
                            },
                            forcePostHog: !0
                        }), window.location.href = f.DASHBOARD + '?from=upgrade';
                    },
                    onError: () => h.default.success({
                        title: 'Upgraded!',
                        content: 'You have upgraded but must log out and back in first.',
                        onOk: () => (0, d.request)({
                            url: '/logout',
                            both: () => window.open('/login', '_self')
                        })
                    })
                });
            } : () => {
                h.default.success({
                    title: 'The purchase has been completed',
                    onOk: () => (0, i.NavigateTo)(f.HOMEPAGE)
                });
            },
            onError: _v => {
                e.default.navigation.loadingTokenSubmit = !1, (0, d.throwMessageError)({
                    e: _v,
                    default: {
                        title: 'Error ocurred when upgrading account',
                        content: 'An error ocurred on our end while upgrading your account. Please contact support.'
                    }
                });
            }
        });
    };
}), a.register('x/Eg+0', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('xguoe0'),
        e = a('QKunP');
    var _f = {
        navigation: new(0, d.default)(),
        checkout: new(0, e.default)()
    };
}), a.register('xguoe0', function(b, c) {
    _v(b.exports, 'Screen', function() {
        return _f;
    }), _v(b.exports, 'default', function() {
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
                Object.keys(g).forEach(_v => this[_v] = g[_v]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], j.prototype, 'screen', void 0), (0, d.__decorate)([e.observable], j.prototype, 'loadingTokenSubmit', void 0), (0, d.__decorate)([e.action], j.prototype, 'reset', void 0);
    var _k = j;
}), a.register('QKunP', function(b, c) {
    _v(b.exports, 'default', function() {
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
            const _v = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
            return _v < 0 ? 0 : _v;
        }
        constructor() {
            this.planName = g, this.planId = h, this.couponId = i, this.planCost = j, this.planDescription = k, this.accountCredit = l, this.percentageOff = m, this.amountOff = n, this.couponDescription = o, this.hasCoupon = p, this.couponOneUseOnly = q, this.couponIsOnlyForPlan = r, this.existingPayingPlan = s, this.stripePublicKey = t, this.reset = () => {
                Object.keys(f).forEach(e => {
                    this[e] = f[e];
                });
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], u.prototype, 'planName', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponId', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planCost', void 0), (0, d.__decorate)([e.observable], u.prototype, 'planDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'accountCredit', void 0), (0, d.__decorate)([e.observable], u.prototype, 'percentageOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'amountOff', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponDescription', void 0), (0, d.__decorate)([e.observable], u.prototype, 'hasCoupon', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponOneUseOnly', void 0), (0, d.__decorate)([e.observable], u.prototype, 'couponIsOnlyForPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'existingPayingPlan', void 0), (0, d.__decorate)([e.observable], u.prototype, 'stripePublicKey', void 0), (0, d.__decorate)([e.computed], u.prototype, 'totalCost', null), (0, d.__decorate)([e.action], u.prototype, 'reset', void 0);
    var _v = u;
}), a.register('jzxyj10', function(b, c) {
    e(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = e => {
        d.history.push(e);
    };
}), a.register('Pq0g9', function(b, c) {
    e(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = e => {
        var i, j, k;
        if ((window.gtag && !(null === (i = e.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', e.event, e.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = e.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        });
    };
});