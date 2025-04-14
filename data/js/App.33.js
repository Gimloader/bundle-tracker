function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, r, i) {
    Object.defineProperty(e, t, {
        get: r,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("4rjol", (function(i, a) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return w
    }));
    var s = r("hxEiv"),
        l = r("fywoC"),
        o = r("6u6er"),
        d = r("aqZMy"),
        c = r("2FDaO"),
        u = r("fLaxH"),
        h = r("4ifJF"),
        f = r("9Mv96"),
        x = r("lKmIF"),
        g = r("iMOcM"),
        m = r("46bRO"),
        p = r("jjvL5"),
        v = r("2nCEo");
    p = r("jjvL5");
    let y, j, b = e => e;
    var w = () => {
        const {
            isLoading: t,
            error: r,
            data: i
        } = (0, o.default)(), a = l.useMemo((() => {
            const t = e(v)();
            return 0 !== t.day() && 6 !== t.day() && (t.hour() >= p.START_HOUR && t.hour() < p.END_HOUR)
        }), []);
        return (0, g.isStudent)() && a ? (0, s.jsx)(h.Centered, {
            style: {
                padding: 35
            },
            children: (0, s.jsx)(p.SchoolHours, {})
        }) : r ? (0, s.jsx)("div", {
            className: "flex-center maxWidth",
            style: {
                marginTop: 50
            },
            children: (0, s.jsx)("div", {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: "90%"
                },
                children: "There was an error loading Discovery. Please refresh and try again."
            })
        }) : t ? (0, s.jsx)(h.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, s.jsx)(f.default, {
                style: {
                    color: x.default.White
                }
            })
        }) : (0, s.jsxs)(C, {
            children: [(0, s.jsx)(g.Title, {
                title: `${m.COMPANY_NAME} Creative | Discovery`,
                override: !0
            }), (0, s.jsx)(S, {
                children: (0, s.jsx)(d.default, {
                    lists: null != i ? i : []
                })
            })]
        })
    };
    const C = c.default.div.attrs({
            className: "maxWidth flex hc"
        })(y || (y = b`
  padding: 35px 0px;
`)),
        S = c.default.div(j || (j = b`
  width: ${0};
  max-width: ${0};
`), u.CreativeContentWidth.width, u.CreativeContentWidth.maxWidth)
})), r.register("6u6er", (function(e, i) {
    t(e.exports, "default", (function() {
        return l
    }));
    var a = r("eMRqp"),
        n = r("iMOcM");
    const s = ["creative-discovery"];
    var l = () => (0, a.useQuery)(s, (() => (0, n.requestAsPromise)({
        url: "/api/created-map/listing/discovery"
    })), {
        refetchOnMount: !1,
        refetchOnWindowFocus: !1
    })
})), r.register("aqZMy", (function(e, i) {
    t(e.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        n = r("fywoC"),
        s = r("4gMdJ"),
        l = r("b9Zw0"),
        o = r("i5Qjx"),
        d = r("l4uFh"),
        c = r("bjocC"),
        u = r("arVbq"),
        h = r("7hg6s"),
        f = r("8UJqa"),
        x = r("beXRF"),
        g = r("e5Sb1");
    var m = e => {
        const [t] = (0, x.useSearchParams)(), [r, i] = n.useState(t.get("q")), {
            data: m,
            isLoading: p
        } = (0, g.useDiscoverySearch)(r), v = !(!r || !p);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(s.default, {
                theme: {
                    algorithm: d.default.darkAlgorithm
                },
                children: (0, a.jsx)(l.default.Search, {
                    onSearch: e => {
                        const t = new URL(window.location.href);
                        t.searchParams.set("q", e), window.history.pushState({}, "", t), i(e)
                    },
                    loading: v,
                    placeholder: "Search for maps...",
                    size: "large",
                    style: {
                        marginBottom: 20
                    }
                })
            }), !v && r ? (0, a.jsx)("div", {
                className: "maxWidth",
                style: {
                    marginBottom: 20
                },
                children: (0, a.jsx)(h.default, {
                    className: "maxWidth",
                    children: m.length ? (0, a.jsx)(o.default, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth",
                        children: m.map((e => (0, a.jsx)(u.default, {
                            listing: e
                        }, e._id + "-search")))
                    }) : (0, a.jsxs)("div", {
                        style: {
                            opacity: .9,
                            fontStyle: "italic"
                        },
                        children: [(0, a.jsx)("span", {
                            style: {
                                color: f.default.Yellow
                            },
                            children: "No results found."
                        }), " ", "Try searching for something else!"]
                    })
                })
            }) : null, (0, a.jsx)(o.default, {
                className: "maxWidth",
                direction: "vertical",
                size: 20,
                children: e.lists.map((e => (0, a.jsx)(c.default, {
                    list: e
                }, e.name + "-list")))
            })]
        })
    }
})), r.register("bjocC", (function(e, i) {
    t(e.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv"),
        n = r("i5Qjx"),
        s = r("arVbq"),
        l = r("7hg6s"),
        o = r("7C041");
    var d = e => {
        const {
            name: t,
            description: r,
            items: i
        } = e.list;
        return (0, a.jsxs)(l.default, {
            children: [(0, a.jsx)(o.Title, {
                children: t
            }), (0, a.jsx)(o.Description, {
                children: r
            }), (0, a.jsx)(n.default, {
                style: {
                    marginTop: 18
                },
                direction: "vertical",
                className: "maxWidth",
                size: 14,
                children: i.map((e => (0, a.jsx)(s.default, {
                    listing: e
                }, e._id)))
            })]
        })
    }
})), r.register("arVbq", (function(e, i) {
    t(e.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv");
    r("fywoC");
    var n = r("2FDaO"),
        s = r("kyvf1"),
        l = r("lKmIF"),
        o = r("i5Qjx"),
        d = r("69SUA"),
        c = r("1djzF");
    let u, h, f, x, g = e => e;
    var m = e => {
        const {
            _id: t,
            title: r,
            image: i,
            tags: n
        } = e.listing;
        return (0, a.jsx)("div", {
            className: "maxWidth",
            children: (0, a.jsx)(s.default, {
                className: "maxWidth",
                style: {
                    color: l.default.White
                },
                to: `/creative/map/${t}`,
                children: (0, a.jsx)(p, {
                    children: (0, a.jsxs)(o.default, {
                        direction: "horizontal",
                        size: 20,
                        align: "center",
                        children: [(0, a.jsx)(v, {
                            style: {
                                backgroundImage: `url(${(0,c.getCloudinaryUrl)(i)})`
                            }
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(y, {
                                children: r
                            }), n.length ? (0, a.jsx)(o.default, {
                                direction: "horizontal",
                                size: 6,
                                wrap: !0,
                                style: {
                                    marginTop: 6
                                },
                                children: n.map((e => (0, a.jsx)(j, {
                                    children: e
                                }, e + t)))
                            }) : null]
                        })]
                    })
                })
            })
        })
    };
    const p = n.default.div.attrs({
            className: "maxWidth"
        })(u || (u = g`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  line-height: 0;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        v = n.default.div(h || (h = g`
  width: ${0}px;
  height: ${0}px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-size: cover;
`), 130, 73.125),
        y = n.default.div(f || (f = g`
  font-family: ${0};
  font-size: 16px;
  line-height: 1;
  margin-top: 2px;
  text-transform: uppercase;
`), d.Fonts.FugazOne),
        j = n.default.div(x || (x = g`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 50px;
  font-style: italic;
  font-weight: ${0};
`), d.FontWeights.Bold)
})), r.register("1djzF", (function(e, r) {
    t(e.exports, "getCloudinaryUrl", (function() {
        return i
    }));
    const i = e => {
            const t = a(e);
            return t ? e.includes("/video/upload") ? `https://${n}/video/upload/${t}` : `https://${n}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        a = e => {
            if (!o.some((t => e.includes(t)))) return null;
            if (e.includes(s) && !e.includes(`/${l}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                i = t[t.length - 1];
            return r && i && r.startsWith("v") ? `${r}/${i}` : null
        },
        n = "media.gimkit.com",
        s = "res.cloudinary.com",
        l = "gimkit-production",
        o = [n, s]
})), r.register("e5Sb1", (function(e, i) {
    t(e.exports, "useDiscoverySearch", (function() {
        return s
    }));
    var a = r("eMRqp"),
        n = r("iMOcM");
    const s = e => (0, a.useQuery)({
        queryKey: ["useDiscoverySearch", {
            searchQuery: e
        }],
        enabled: !!e,
        queryFn: () => (0, n.requestAsPromise)({
            url: "/api/created-map/listing/discovery/search",
            data: {
                query: e
            }
        })
    })
})), r.register("jjvL5", (function(e, i) {
    t(e.exports, "START_HOUR", (function() {
        return f
    })), t(e.exports, "END_HOUR", (function() {
        return x
    })), t(e.exports, "SchoolHours", (function() {
        return g
    }));
    var a = r("hxEiv");
    r("fywoC");
    var n = r("7hg6s"),
        s = r("2FDaO"),
        l = r("69SUA"),
        o = r("8UJqa");
    let d, c, u, h = e => e;
    const f = 8,
        x = 16,
        g = () => (0, a.jsxs)(m, {
            children: [(0, a.jsx)("img", {
                src: "/client/img/creative/banner.png",
                style: {
                    height: 200
                }
            }), (0, a.jsx)(p, {
                children: "Discovery Is Closed During School Hours"
            }), (0, a.jsxs)(v, {
                children: ["Check back in after ", (0, a.jsx)("b", {
                    style: {
                        color: o.default.Yellow
                    },
                    children: "4pm"
                }), " to view & play maps made by the Gimkit Creative community!"]
            })]
        }),
        m = (0, s.default)(n.default).attrs({
            className: "flex-column flex-center"
        })(d || (d = h`
  max-width: 700px;
  font-family: ${0};
  overflow: hidden;
`), l.Fonts.FugazOne),
        p = s.default.div(c || (c = h`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`)),
        v = s.default.div(u || (u = h`
  font-family: ${0};
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`), l.Fonts.SFPro)
}));