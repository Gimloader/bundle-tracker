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
        return _p;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    var _p = () => {
        const {id: q} = (0, m.useParams)();
        return g.useEffect(() => {
            (0, j.request)({
                url: '/api/bulk/join',
                method: 'post',
                data: { id: q },
                success: r => {
                    var s;
                    const t = (0, j.isUpgraded)(), u = String(null === (s = (0, j.getUser)()) || void 0 === s ? void 0 : s.type), v = () => {
                            var w;
                            t || (0, o.AnalyticsTrackEvent)({
                                event: 'upgrade',
                                properties: {
                                    plan: null === (w = (0, j.getUser)()) || void 0 === w ? void 0 : w.type,
                                    source: 'group'
                                },
                                forcePostHog: !0
                            }), (0, o.AnalyticsTrackEvent)({
                                event: 'group_join',
                                properties: { currentPlan: u },
                                forcePostHog: !0
                            }), (0, n.NavigateTo)(l.DASHBOARD), h.default.success({
                                title: 'Joined Group License!',
                                content: r && r.message ? r.message : ''
                            });
                        };
                    (0, k.default)({
                        onSuccess: v,
                        onError: v
                    });
                },
                error: r => {
                    (0, n.NavigateTo)(l.DASHBOARD), r && r.message && r.message.text ? h.default.error({
                        title: 'Error joining group',
                        content: r.message.text
                    }) : h.default.error({
                        title: 'Error joining subscription',
                        content: 'Please try again'
                    });
                }
            });
        }, []), (0, f.jsx)('div', {
            className: 'maxWidth maxHeight flex hc vc',
            children: (0, f.jsx)(i.default, { size: 'large' })
        });
    };
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