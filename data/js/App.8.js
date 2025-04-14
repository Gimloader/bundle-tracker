function e(e, t, i, l) {
    Object.defineProperty(e, t, {
        get: i,
        set: l,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("9kqD3", (function(t, l) {
    var n;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return c
    }));
    var s = i("hxEiv");
    i("fywoC");
    var r = i("begyZ"),
        a = i("i5Qjx"),
        o = i("dIJn5"),
        u = i("fiKt7"),
        d = i("1gesT");
    var c = e => {
        const {
            data: t
        } = e;
        return (0, s.jsxs)(a.default, {
            className: "maxWidth",
            direction: "vertical",
            size: 20,
            children: [(0, s.jsx)(r.default, {
                id: t._id
            }), (0, s.jsx)(o.default, {
                lastPublish: t.lastPublish,
                refetch: e.refetch
            }), (0, s.jsx)(u.default, {
                total: t.plays.total,
                last30: t.plays.last30,
                last7: t.plays.last7
            }), (0, s.jsx)(d.default, {
                id: t._id,
                close: e.close
            })]
        })
    }
})), i.register("begyZ", (function(l, n) {
    e(l.exports, "default", (function() {
        return h
    }));
    var s = i("hxEiv"),
        r = i("93yIm"),
        a = i("b9Zw0"),
        o = i("cy4A6"),
        u = i("4y75y"),
        d = i("iMOcM"),
        c = i("dhxiD"),
        f = i("6Zmdt");
    var h = e => {
        const i = `${(0,d.getDomain)()}/creative/map/${e.id}`;
        return (0, s.jsxs)(f.Container, {
            children: [(0, s.jsxs)("div", {
                children: [(0, s.jsx)(f.Title, {
                    children: "Public Link"
                }), (0, s.jsx)(u.default.Text, {
                    children: "This is a direct link to play your map! The link never expires as long as your map remains published."
                })]
            }), (0, s.jsxs)("div", {
                className: "flex vc",
                style: {
                    marginTop: 10
                },
                children: [(0, s.jsx)(a.default, {
                    style: {
                        width: "100%"
                    },
                    type: "text",
                    value: i,
                    readOnly: !0
                }), (0, s.jsx)(r.default, {
                    type: "primary",
                    onClick: () => {
                        t(c)(i), o.default.success("Link copied to clipboard!")
                    },
                    style: {
                        marginLeft: 10
                    },
                    children: "Copy Link"
                })]
            })]
        })
    }
})), i.register("6Zmdt", (function(t, l) {
    e(t.exports, "Container", (function() {
        return u
    })), e(t.exports, "Title", (function() {
        return d
    }));
    var n = i("hxEiv"),
        s = i("4y75y"),
        r = i("2FDaO"),
        a = i("69SUA");
    let o;
    const u = r.default.div.attrs({
            className: "maxWidth"
        })(o || (o = (e => e)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`)),
        d = e => (0, n.jsx)(s.default.Title, {
            style: {
                fontFamily: a.Fonts.FugazOne,
                textTransform: "uppercase",
                marginBottom: "0.2em"
            },
            level: 3,
            children: e.children
        })
})), i.register("dIJn5", (function(l, n) {
    e(l.exports, "default", (function() {
        return m
    }));
    var s = i("hxEiv"),
        r = i("93yIm"),
        a = i("fBuQJ"),
        o = i("4y75y");
    i("fywoC");
    var u = i("2nCEo"),
        d = i("kyvf1"),
        c = i("8UJqa"),
        f = i("6Zmdt"),
        h = i("iMOcM"),
        p = i("eEYFA"),
        y = i("cCnGt"),
        x = i("9q1Gv");
    var m = e => {
        const [i, l, n] = (0, h.useBoolean)(!1), m = t(u).unix(e.lastPublish);
        return (0, s.jsxs)(f.Container, {
            children: [(0, s.jsxs)("div", {
                children: [(0, s.jsx)(f.Title, {
                    children: "Publish New Version"
                }), (0, s.jsxs)(o.default.Text, {
                    children: ["Your map was last published on", " ", (0, s.jsxs)("b", {
                        children: [m.format("MMMM Do"), " at ", m.format("h:mmA"), "."]
                    }), " ", "If you've made changes since then, click the button below to publish them!"]
                })]
            }), (0, s.jsx)("div", {
                style: {
                    marginTop: 15
                },
                children: (0, s.jsx)(r.default, {
                    block: !0,
                    type: "primary",
                    loading: i,
                    onClick: () => {
                        i || (l(), window.addEventListener("MAP_SAVED", (() => {
                            (0, p.Request)({
                                url: "/api/created-map/listing/publish-new-version/" + window._mapId,
                                success: () => {
                                    a.default.success({
                                        title: "Changes published!",
                                        content: "Players will now experience the latest version of your map!"
                                    }), e.refetch()
                                },
                                error: e => {
                                    (0, h.throwMessageError)({
                                        e: e,
                                        default: {
                                            title: "Error publishing changes",
                                            content: "Please try again."
                                        }
                                    })
                                },
                                both: n
                            })
                        }), {
                            once: !0
                        }), (0, y.default)(x.default.save, {
                            ignoreNotification: !0
                        }))
                    },
                    children: "Publish Changes (Free)"
                })
            }), (0, s.jsx)("div", {
                style: {
                    marginTop: 9
                },
                children: (0, s.jsxs)("div", {
                    style: {
                        fontSize: 12,
                        lineHeight: 1.2,
                        opacity: .9,
                        color: "rgba(255,255,255,0.9)"
                    },
                    children: ["Ensure everything in your map follows our", " ", (0, s.jsx)(d.default, {
                        to: "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
                        external: !0,
                        target: "_blank",
                        style: {
                            color: c.default.Yellow,
                            textDecoration: "underline"
                        },
                        children: "community guidelines."
                    }), " ", "Failure to do so may result in account suspension."]
                })
            })]
        })
    }
})), i.register("fiKt7", (function(t, l) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = i("hxEiv"),
        s = i("i5Qjx"),
        r = i("4y75y");
    i("fywoC");
    var a = i("69SUA"),
        o = i("lKmIF"),
        u = i("iMOcM"),
        d = i("6Zmdt");
    const c = e => (0, n.jsxs)("div", {
        className: "maxWidth flex-column flex-center",
        style: {
            padding: 20,
            background: "rgba(255,255,255,0.1)",
            color: o.default.White,
            borderRadius: 6,
            lineHeight: 1
        },
        children: [(0, n.jsx)("div", {
            style: {
                fontFamily: a.Fonts.FugazOne,
                textTransform: "uppercase",
                opacity: .8,
                fontSize: 14,
                marginBottom: 8
            },
            children: e.label
        }), (0, n.jsx)("div", {
            style: {
                fontSize: 32,
                fontWeight: a.FontWeights.Black
            },
            children: (0, u.numberWithCommas)(e.value)
        })]
    });
    var f = e => (0, n.jsxs)(d.Container, {
        children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Title, {
                children: "Analytics"
            }), (0, n.jsx)(r.default.Text, {
                children: "See how many times your map has been played!"
            })]
        }), (0, n.jsxs)(s.default, {
            direction: "vertical",
            size: 12,
            style: {
                marginTop: 15
            },
            className: "maxWidth",
            children: [(0, n.jsx)(c, {
                label: "Total Plays",
                value: e.total
            }), (0, n.jsx)(c, {
                label: "Last 30 Days",
                value: e.last30
            }), (0, n.jsx)(c, {
                label: "Last 7 Days",
                value: e.last7
            })]
        })]
    })
})), i.register("1gesT", (function(t, l) {
    e(t.exports, "default", (function() {
        return c
    }));
    var n = i("hxEiv"),
        s = i("cy4A6"),
        r = i("fBuQJ"),
        a = i("kyvf1"),
        o = i("8UJqa"),
        u = i("eEYFA"),
        d = i("iMOcM");
    var c = e => (0, n.jsx)("div", {
        children: (0, n.jsx)(a.default, {
            style: {
                color: o.default.Yellow,
                textDecoration: "underline"
            },
            onClick: () => {
                r.default.confirm({
                    title: "Are you sure you want to unpublish?",
                    content: "Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.",
                    okText: "Yes",
                    onOk: () => {
                        (0, u.Request)({
                            url: `/api/created-map/listing/remove/${e.id}`,
                            success: () => {
                                s.default.success("Map unpublished!"), e.close()
                            },
                            error: e => {
                                (0, d.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error unpublishing map"
                                    }
                                })
                            }
                        })
                    }
                })
            },
            children: "Unpublish map"
        })
    })
}));