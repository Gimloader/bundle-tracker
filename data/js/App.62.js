function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GKkR3', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('AE7vR'),
        i = b('yruHD'),
        j = b('quE27'),
        k = b('+/x68'),
        l = b('nKuOQ'),
        m = b('zcfNM'),
        n = b('KxkP827'),
        o = b('IMf/b4');
    var _p = () => {
        const {
            id: q
        } = (0, m.useParams)();
        return g.useEffect(() => {
            (0, j.request)({
                url: '/api/bulk/join',
                method: 'post',
                data: {
                    id: q
                },
                success: q => {
                    var r;
                    const s = (0, j.isUpgraded)(),
                        t = String(null === (r = (0, j.getUser)()) || void 0 === r ? void 0 : r.type),
                        u = () => {
                            var v;
                            s || (0, o.AnalyticsTrackEvent)({
                                event: 'upgrade',
                                properties: {
                                    plan: null === (v = (0, j.getUser)()) || void 0 === v ? void 0 : v.type,
                                    source: 'group'
                                },
                                forcePostHog: !0
                            }), (0, o.AnalyticsTrackEvent)({
                                event: 'group_join',
                                properties: {
                                    currentPlan: t
                                },
                                forcePostHog: !0
                            }), (0, n.NavigateTo)(l.DASHBOARD), h.default.success({
                                title: 'Joined Group License!',
                                content: q && q.message ? q.message : ''
                            });
                        };
                    (0, k.default)({
                        onSuccess: u,
                        onError: u
                    });
                },
                error: q => {
                    (0, n.NavigateTo)(l.DASHBOARD), q && q.message && q.message.text ? h.default.error({
                        title: 'Error joining group',
                        content: q.message.text
                    }) : h.default.error({
                        title: 'Error joining subscription',
                        content: 'Please try again'
                    });
                }
            });
        }, []), (0, f.jsx)('div', {
            className: 'maxWidth maxHeight flex hc vc',
            children: (0, f.jsx)(i.default, {
                size: 'large'
            })
        });
    };
}), b.register('KxkP827', function(c, d) {
    a(c.exports, 'NavigateTo', function() {
        return _f;
    });
    var e = b('qb3Ih');
    const _f = a => {
        e.history.push(a);
    };
}), b.register('IMf/b4', function(c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function() {
        return _i;
    });
    var e = b('gK+6L'),
        f = b('quE27'),
        g = b('95m0H'),
        h = b('50Ts4');
    const _i = a => {
        var j, k, l;
        if ((window.gtag && !(null === (j = a.blockedSource) || void 0 === j ? void 0 : j.google) && window.gtag('event', a.event, a.properties), g.AnalyticsFlags.educatorOnly) && (null === (l = (0, f.getUser)()) || void 0 === l ? void 0 : l.accountType) !== e.default.educator)
            return;
        (null === (k = a.blockedSource) || void 0 === k ? void 0 : k.posthog) || (0, h.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
});