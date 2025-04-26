function a(a, b, q, r) {
    Object.defineProperty(a, b, {
        get: q,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('F9k3r', function(q, r) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return n;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('cR5QE'),
        g = b('iHElh'),
        h = b('PjB0f'),
        i = b('I9mdQ'),
        j = b('q721a'),
        k = b('0R8EW'),
        l = b('k0s2g17'),
        m = b('CJCMN4');
    var n = () => {
        const {
            id: o
        } = (0, k.useParams)();
        return e.useEffect(() => {
            (0, h.request)({
                url: '/api/bulk/join',
                method: 'post',
                data: {
                    id: o
                },
                success: o => {
                    var p;
                    const q = (0, h.isUpgraded)(),
                        r = String(null === (p = (0, h.getUser)()) || void 0 === p ? void 0 : p.type),
                        s = () => {
                            var t;
                            q || (0, m.AnalyticsTrackEvent)({
                                event: 'upgrade',
                                properties: {
                                    plan: null === (t = (0, h.getUser)()) || void 0 === t ? void 0 : t.type,
                                    source: 'group'
                                },
                                forcePostHog: !0
                            }), (0, m.AnalyticsTrackEvent)({
                                event: 'group_join',
                                properties: {
                                    currentPlan: r
                                },
                                forcePostHog: !0
                            }), (0, l.NavigateTo)(j.DASHBOARD), f.default.success({
                                title: 'Joined Group License!',
                                content: o && o.message ? o.message : ''
                            });
                        };
                    (0, i.default)({
                        onSuccess: s,
                        onError: s
                    });
                },
                error: o => {
                    (0, l.NavigateTo)(j.DASHBOARD), o && o.message && o.message.text ? f.default.error({
                        title: 'Error joining group',
                        content: o.message.text
                    }) : f.default.error({
                        title: 'Error joining subscription',
                        content: 'Please try again'
                    });
                }
            });
        }, []), (0, d.jsx)('div', {
            className: 'maxWidth maxHeight flex hc vc',
            children: (0, d.jsx)(g.default, {
                size: 'large'
            })
        });
    };
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