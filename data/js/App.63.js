function e(e, t, o, r) {
    Object.defineProperty(e, t, {
        get: o,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("iecur", (function(o, r) {
    var n;
    n = o.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return v
    }));
    var i = t("hxEiv"),
        s = t("fywoC"),
        a = t("fBuQJ"),
        c = t("gHmyG"),
        u = t("iMOcM"),
        l = t("bGoag"),
        d = t("b1oE9"),
        g = t("3uz2P"),
        f = t("iROck"),
        p = t("8p0tB");
    var v = () => {
        const {
            id: e
        } = (0, g.useParams)();
        return s.useEffect((() => {
            (0, u.request)({
                url: "/api/bulk/join",
                method: "post",
                data: {
                    id: e
                },
                success: e => {
                    var t;
                    const o = (0, u.isUpgraded)(),
                        r = String(null === (t = (0, u.getUser)()) || void 0 === t ? void 0 : t.type),
                        n = () => {
                            var t;
                            o || (0, p.AnalyticsTrackEvent)({
                                event: "upgrade",
                                properties: {
                                    plan: null === (t = (0, u.getUser)()) || void 0 === t ? void 0 : t.type,
                                    source: "group"
                                },
                                forcePostHog: !0
                            }), (0, p.AnalyticsTrackEvent)({
                                event: "group_join",
                                properties: {
                                    currentPlan: r
                                },
                                forcePostHog: !0
                            }), (0, f.NavigateTo)(d.DASHBOARD), a.default.success({
                                title: "Joined Group License!",
                                content: e && e.message ? e.message : ""
                            })
                        };
                    (0, l.default)({
                        onSuccess: n,
                        onError: n
                    })
                },
                error: e => {
                    (0, f.NavigateTo)(d.DASHBOARD), e && e.message && e.message.text ? a.default.error({
                        title: "Error joining group",
                        content: e.message.text
                    }) : a.default.error({
                        title: "Error joining subscription",
                        content: "Please try again"
                    })
                }
            })
        }), []), (0, i.jsx)("div", {
            className: "maxWidth maxHeight flex hc vc",
            children: (0, i.jsx)(c.default, {
                size: "large"
            })
        })
    }
})), t.register("iROck", (function(o, r) {
    e(o.exports, "NavigateTo", (function() {
        return i
    }));
    var n = t("bd8je");
    const i = e => {
        n.history.push(e)
    }
})), t.register("8p0tB", (function(o, r) {
    e(o.exports, "AnalyticsTrackEvent", (function() {
        return c
    }));
    var n = t("6fFlL"),
        i = t("iMOcM"),
        s = t("dOsOD"),
        a = t("amvOw");
    const c = e => {
        var t, o, r;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), s.AnalyticsFlags.educatorOnly) && (null === (r = (0, i.getUser)()) || void 0 === r ? void 0 : r.accountType) !== n.default.educator) return;
        (null === (o = e.blockedSource) || void 0 === o ? void 0 : o.posthog) || (0, a.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
}));