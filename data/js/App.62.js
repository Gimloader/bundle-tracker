function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('jD+rP', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _o;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('YRlpt'),
        h = a('6CIVV'),
        i = a('PMl60'),
        j = a('Pkvp4'),
        k = a('gs4MT'),
        l = a('70AkF'),
        m = a('jzxyj10'),
        n = a('Pq0g9');
    var _o = () => {
        const {
            id: _p
        } = (0, l.useParams)();
        return f.useEffect(() => {
            (0, i.request)({
                url: '/api/bulk/join',
                method: 'post',
                data: {
                    id: _p
                },
                success: _p => {
                    var q;
                    const r = (0, i.isUpgraded)(),
                        s = String(null === (q = (0, i.getUser)()) || void 0 === q ? void 0 : q.type),
                        t = () => {
                            var u;
                            r || (0, n.AnalyticsTrackEvent)({
                                event: 'upgrade',
                                properties: {
                                    plan: null === (u = (0, i.getUser)()) || void 0 === u ? void 0 : u.type,
                                    source: 'group'
                                },
                                forcePostHog: !0
                            }), (0, n.AnalyticsTrackEvent)({
                                event: 'group_join',
                                properties: {
                                    currentPlan: s
                                },
                                forcePostHog: !0
                            }), (0, m.NavigateTo)(k.DASHBOARD), g.default.success({
                                title: 'Joined Group License!',
                                content: _p && _p.message ? _p.message : ''
                            });
                        };
                    (0, j.default)({
                        onSuccess: t,
                        onError: t
                    });
                },
                error: _p => {
                    (0, m.NavigateTo)(k.DASHBOARD), _p && _p.message && _p.message.text ? g.default.error({
                        title: 'Error joining group',
                        content: _p.message.text
                    }) : g.default.error({
                        title: 'Error joining subscription',
                        content: 'Please try again'
                    });
                }
            });
        }, []), (0, e.jsx)('div', {
            className: 'maxWidth maxHeight flex hc vc',
            children: (0, e.jsx)(h.default, {
                size: 'large'
            })
        });
    };
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