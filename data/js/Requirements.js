var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("jRo8V", (function(t, i) {
    var l, r, n, s, a;
    l = t.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), r = t.exports, n = "default", s = function() {
        return v
    }, Object.defineProperty(r, n, {
        get: s,
        set: a,
        enumerable: !0,
        configurable: !0
    });
    var o = e("hxEiv"),
        d = e("93yIm"),
        u = e("fC6cp"),
        c = e("i5Qjx"),
        m = e("4y75y");
    e("fywoC");
    var f = e("69SUA"),
        h = e("46bRO"),
        x = e("hqWys"),
        p = e("2Y5iQ"),
        g = e("kyvf1"),
        y = e("b1oE9"),
        b = e("8UJqa");
    const j = e => (0, o.jsxs)("div", {
        style: {
            padding: 25,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8
        },
        children: [(0, o.jsx)("div", {
            style: {
                marginBottom: 5
            },
            children: (0, o.jsx)(m.default.Text, {
                style: {
                    fontWeight: f.FontWeights.Bold
                },
                children: e.title
            })
        }), (0, o.jsx)(m.default.Text, {
            italic: !0,
            children: e.description
        })]
    });
    var v = e => (0, o.jsxs)("div", {
        className: "maxWidth",
        children: [(0, o.jsx)(m.default.Title, {
            style: {
                fontFamily: f.Fonts.FugazOne,
                textTransform: "uppercase",
                marginBottom: 5
            },
            level: 3,
            children: "Community Guidelines"
        }), (0, o.jsxs)(m.default.Text, {
            children: ["All published content must follow our", " ", (0, o.jsx)(g.default, {
                style: {
                    color: b.default.Yellow,
                    textDecoration: "underline"
                },
                to: "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
                target: "_blank",
                external: !0,
                children: "community guidelines."
            }), " ", "Failure to meet our guidelines may result in permanent account suspension."]
        }), (0, o.jsx)(m.default.Title, {
            style: {
                fontFamily: f.Fonts.FugazOne,
                textTransform: "uppercase",
                marginTop: 35
            },
            level: 3,
            children: "Publishing Requirements"
        }), (0, o.jsxs)(c.default, {
            className: "maxWidth",
            direction: "vertical",
            size: 14,
            style: {
                marginTop: 10
            },
            children: [(0, o.jsx)(j, {
                title: "Career Level 50+",
                description: `You must have leveled up 50+ times in all your time playing ${h.COMPANY_NAME}, unless you're a ${x.SeasonTicketName.name} holder!`
            }), (0, o.jsx)(j, {
                title: `1,000+ ${p.default.currency}`,
                description: `Publishing a map costs 1,000 ${p.default.currency}. ${x.SeasonTicketName.name} holders publish for free!`
            })]
        }), (0, o.jsx)(u.default, {}), e.publishRequirementError ? (0, o.jsx)("div", {
            style: {
                background: "rgba(255,0,0,0.1)",
                padding: 25,
                borderRadius: 8,
                border: "1px solid rgba(255,0,0,0.5)"
            },
            children: (0, o.jsxs)(m.default.Text, {
                children: [e.publishRequirementError, " ", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), (0, o.jsxs)(g.default, {
                    style: {
                        color: b.default.Yellow,
                        textDecoration: "underline"
                    },
                    to: y.SEASON_TICKET_BASE,
                    target: "_blank",
                    children: ["Purchase the ", x.SeasonTicketName.name]
                }), " ", "to immediately become eligible & publish for free!"]
            })
        }) : (0, o.jsxs)("div", {
            className: "maxWidth flex-center flex-column",
            children: [(0, o.jsx)(d.default, {
                size: "large",
                block: !0,
                type: "primary",
                style: {
                    height: 55
                },
                onClick: e.next,
                children: "Continue"
            }), (0, o.jsx)(m.default.Text, {
                italic: !0,
                style: {
                    marginTop: 10,
                    opacity: .7
                },
                children: "You pass all the requirements."
            })]
        })]
    })
}));