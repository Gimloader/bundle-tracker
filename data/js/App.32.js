function e(e, t, r, i) {
    Object.defineProperty(e, t, {
        get: r,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("hiWRZ", (function(r, i) {
    var a;
    a = r.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(r.exports, "default", (function() {
        return h
    }));
    var n = t("hxEiv"),
        s = t("3uz2P"),
        l = t("iUJev"),
        o = t("2FDaO"),
        d = t("ihMI4"),
        u = t("9Mv96"),
        c = t("4ifJF"),
        f = t("py2Xr"),
        p = t("8UJqa");
    let x;
    var h = () => {
        var e;
        const {
            id: t
        } = (0, s.useParams)(), {
            data: r,
            isLoading: i,
            error: a
        } = (0, l.default)(t);
        return i ? (0, n.jsx)(g, {
            children: (0, n.jsx)(u.default, {
                style: {
                    color: p.default.White,
                    marginTop: 50
                }
            })
        }) : a ? (0, n.jsx)(g, {
            children: (0, n.jsxs)(c.CenteredColumn, {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 30,
                    borderRadius: 8,
                    width: "90%",
                    marginTop: 25,
                    maxWidth: 500
                },
                children: [(0, n.jsx)("div", {
                    children: (0, n.jsx)(f.default, {
                        name: "fas fa-exclamation-triangle",
                        style: {
                            color: p.default.Yellow,
                            fontSize: 42,
                            marginBottom: 20
                        }
                    })
                }), (0, n.jsx)("div", {
                    style: {
                        fontSize: 16
                    },
                    children: (null == a || null === (e = a.message) || void 0 === e ? void 0 : e.text) || "There was an error. Please refresh and try again."
                })]
            })
        }) : (0, n.jsx)(g, {
            children: r ? (0, n.jsx)(d.default, {
                response: r
            }) : null
        })
    };
    const g = o.default.div.attrs({
        className: "maxWidth flex-center"
    })(x || (x = (e => e)`
  padding: 35px 0px;
`))
})), t.register("iUJev", (function(r, i) {
    e(r.exports, "default", (function() {
        return l
    }));
    var a = t("eMRqp"),
        n = t("iMOcM");
    const s = ["creative-map-listing"];
    var l = e => (0, a.useQuery)({
        queryKey: [s, e],
        retry: !1,
        queryFn: () => (0, n.requestAsPromise)({
            url: `/api/created-map/listing/info/${e}`
        })
    })
})), t.register("ihMI4", (function(r, i) {
    e(r.exports, "default", (function() {
        return b
    }));
    var a = t("hxEiv"),
        n = t("fywoC"),
        s = t("2FDaO"),
        l = t("56tQE"),
        o = t("81HS0"),
        d = t("4gMdJ"),
        u = t("fC6cp"),
        c = t("l4uFh"),
        f = t("2BVGx"),
        p = t("iMOcM"),
        x = t("46bRO"),
        h = t("1djzF");
    let g, m, y, v = e => e;
    var b = e => {
        const t = n.useRef(null),
            [r] = (0, l.default)(t),
            i = Math.min(500, .9 * r),
            s = i * (9 / 16);
        return (0, a.jsxs)(j, {
            ref: t,
            children: [(0, a.jsx)(k, {
                style: {
                    width: i,
                    height: s,
                    backgroundImage: `url(${(0,h.getCloudinaryUrl)(e.response.image)})`
                }
            }), (0, a.jsxs)(w, {
                style: {
                    marginTop: s / 2 * -1,
                    paddingTop: s / 2 + 35
                },
                children: [(0, a.jsx)(p.Title, {
                    title: `${e.response.title} | ${x.COMPANY_NAME} Creative`,
                    override: !0
                }), (0, a.jsx)(o.default, {
                    ...e.response
                }), (0, a.jsx)(d.default, {
                    theme: {
                        algorithm: c.default.darkAlgorithm
                    },
                    children: (0, a.jsx)(u.default, {})
                }), (0, a.jsx)(f.default, {
                    response: e.response
                })]
            })]
        })
    };
    const j = s.default.div.attrs({
            className: "flex-column flex-center"
        })(g || (g = v`
  width: 80%;
  max-width: 900px;
`)),
        k = s.default.div.attrs({
            className: "medium-shadow"
        })(m || (m = v`
  border-radius: 8px;
  background-size: cover;
  z-index: 2;
`)),
        w = s.default.div.attrs({
            className: "maxWidth light-shadow"
        })(y || (y = v`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 35px;
  border-radius: 12px;
`))
})), t.register("81HS0", (function(r, i) {
    e(r.exports, "default", (function() {
        return x
    }));
    var a = t("hxEiv");
    t("fywoC");
    var n = t("2FDaO"),
        s = t("4ifJF"),
        l = t("69SUA"),
        o = t("i5Qjx");
    let d, u, c, f, p = e => e;
    var x = e => (0, a.jsxs)(h, {
        children: [e.tags.length ? (0, a.jsx)(o.default, {
            wrap: !0,
            direction: "horizontal",
            size: 10,
            style: {
                marginBottom: 6
            },
            children: e.tags.map(((e, t) => (0, a.jsx)(m, {
                children: e
            }, e + t)))
        }) : null, (0, a.jsx)(g, {
            children: e.title
        }), (0, a.jsx)(y, {
            children: e.description
        })]
    });
    const h = (0, n.default)(s.CenteredColumn).attrs({
            className: "maxWidth"
        })(d || (d = p`
  font-family: ${0};
  font-size: 42px;
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
`), l.Fonts.FugazOne),
        g = n.default.div(u || (u = p`
  margin-bottom: 2px;
  font-size: 42px;
`)),
        m = n.default.div(c || (c = p`
  font-family: ${0};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), l.Fonts.FugazOne),
        y = n.default.div(f || (f = p`
  font-family: ${0};
  text-transform: none;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
`), l.Fonts.SFPro)
})), t.register("2BVGx", (function(r, i) {
    e(r.exports, "default", (function() {
        return o
    }));
    var a = t("hxEiv"),
        n = t("fywoC"),
        s = t("kRXzc"),
        l = t("fe176");
    var o = e => {
        const [t, r] = n.useState();
        return !t && e.response.kits ? (0, a.jsx)(l.default, {
            kits: e.response.kits,
            selectKit: r
        }) : (0, a.jsx)(s.default, {
            kitId: t
        })
    }
})), t.register("kRXzc", (function(r, i) {
    e(r.exports, "default", (function() {
        return z
    }));
    var a = t("hxEiv"),
        n = t("fywoC"),
        s = t("aQuqp"),
        l = t("2FDaO"),
        o = t("4ifJF"),
        d = t("69SUA"),
        u = t("kyvf1"),
        c = t("8UJqa"),
        f = t("46bRO"),
        p = t("b1oE9"),
        x = t("93yIm"),
        h = t("b9Zw0"),
        g = t("fBuQJ"),
        m = t("iMOcM"),
        y = t("3uz2P"),
        v = t("8p0tB");
    let b, j, k, w = e => e;
    const C = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative";
    var z = e => {
        const [t, r, i] = (0, m.useBoolean)(!1), [l, o, b] = (0, m.useBoolean)(!1), [j, k] = (0, m.useBoolean)(!1), [w, z] = n.useState(""), [O, $, q] = (0, m.useBoolean)(!1), {
            id: N
        } = (0, y.useParams)();
        return (0, a.jsxs)(F, {
            children: [(0, m.isUpgraded)() || (0, m.isStudent)() ? null : (0, a.jsxs)(T, {
                children: ["This map is limited to 5 players.", " ", (0, a.jsxs)(u.default, {
                    to: p.CHECKOUT,
                    style: {
                        color: c.default.Yellow,
                        textDecoration: "underline"
                    },
                    children: ["Upgrade to ", f.COMPANY_NAME, " Pro"]
                }), " ", "to remove this limit."]
            }), (0, a.jsx)(s.default, {
                size: "large",
                type: "success",
                block: !0,
                onClick: () => {
                    if (t) return;
                    r();
                    const a = {
                        listing: N
                    };
                    e.kitId && (a.kit = e.kitId), (0, v.AnalyticsTrackEvent)({
                        event: "creative_discovery_hosted",
                        properties: {
                            id: N
                        }
                    }), (0, m.request)({
                        url: "/api/matchmaker/intent/map/play/listing/create",
                        data: a,
                        success: e => {
                            window.location.href = `/host?id=${e}`
                        },
                        error: e => {
                            (0, m.throwMessageError)({
                                e: e,
                                default: {
                                    title: "There was an error loading you in."
                                }
                            })
                        },
                        both: i
                    })
                },
                ariaLabel: "Play Live",
                style: {
                    fontFamily: d.Fonts.FugazOne,
                    width: "100%",
                    maxWidth: 350,
                    lineHeight: 1
                },
                children: (0, a.jsx)("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: "Play Live"
                })
            }), (0, a.jsxs)(M, {
                children: ["This map was not created by ", f.COMPANY_NAME, ". If anything in this map breaks our", " ", (0, a.jsx)(u.default, {
                    to: C,
                    external: !0,
                    target: "_blank",
                    style: {
                        color: c.default.Yellow,
                        textDecoration: "underline"
                    },
                    children: "Community Guidelines"
                }), ", please", " ", (0, a.jsx)(u.default, {
                    style: {
                        color: c.default.Yellow,
                        textDecoration: "underline",
                        cursor: "pointer"
                    },
                    onClick: $,
                    children: "report"
                }), " ", "and we will take proper action."]
            }), (0, a.jsx)(g.default, {
                open: O,
                onCancel: q,
                title: "Report map",
                footer: j ? (0, a.jsx)(x.default, {
                    onClick: q,
                    type: "primary",
                    children: "Close"
                }, "reported-close") : [(0, a.jsx)(x.default, {
                    onClick: q,
                    children: "Cancel"
                }, "reporting-close"), (0, a.jsx)(x.default, {
                    danger: !0,
                    loading: l,
                    onClick: () => {
                        l || (o(), (0, m.request)({
                            url: `/api/created-map/listing/report/${N}`,
                            data: {
                                comment: w
                            },
                            success: () => {
                                k()
                            },
                            both: () => {
                                b()
                            }
                        }))
                    },
                    children: "Report Map"
                }, "reporting-submit")],
                children: j ? (0, a.jsx)(a.Fragment, {
                    children: "Your report was sent to our team. Thanks for keeping Gimkit safe!"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: ["Found a map that breaks our", " ", (0, a.jsx)(u.default, {
                        to: C,
                        external: !0,
                        target: "_blank",
                        style: {
                            textDecoration: "underline"
                        },
                        children: "Community Guidelines"
                    }), "? Report it here and our team will take a look. Thanks for keeping Gimkit safe!", (0, a.jsx)(h.default.TextArea, {
                        placeholder: "Optional comment...",
                        style: {
                            marginTop: 10
                        },
                        maxLength: 1e3,
                        onChange: e => z(e.target.value)
                    })]
                })
            })]
        })
    };
    const F = (0, l.default)(o.CenteredColumn).attrs({
            className: "maxWidth"
        })(b || (b = w`
  padding-top: 10px;
`)),
        T = l.default.div(j || (j = w`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.15);
  padding: 14px 22px;
  border-radius: 6px;
`)),
        M = l.default.div(k || (k = w`
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`))
})), t.register("fe176", (function(r, i) {
    e(r.exports, "default", (function() {
        return b
    }));
    var a = t("hxEiv");
    t("fywoC");
    var n = t("2FDaO"),
        s = t("4ifJF"),
        l = t("8UJqa"),
        o = t("i5Qjx"),
        d = t("69SUA"),
        u = t("kyvf1"),
        c = t("b1oE9"),
        f = t("1djzF");
    let p, x, h, g, m, y = e => e;
    const v = e => (0, a.jsx)(w, {
        onClick: e.onSelect,
        children: (0, a.jsxs)(o.default, {
            direction: "horizontal",
            size: 16,
            wrap: !0,
            align: "center",
            children: [(0, a.jsx)(C, {
                style: {
                    backgroundImage: `url(${(0,f.getCloudinaryUrl)(e.gif)})`
                }
            }), (0, a.jsx)(z, {
                children: e.title
            })]
        })
    });
    var b = e => e.kits.length ? (0, a.jsxs)(j, {
        children: [(0, a.jsxs)(k, {
            children: ["This map allows players to answer questions.", (0, a.jsx)("br", {}), "Select the kit you would like players to answer questions from:"]
        }), (0, a.jsx)(o.default, {
            direction: "vertical",
            size: 15,
            className: "maxWidth",
            style: {
                marginTop: 25
            },
            children: e.kits.map((t => (0, a.jsx)(v, {
                onSelect: () => e.selectKit(t._id),
                title: t.title,
                gif: t.gif
            }, t._id)))
        })]
    }) : (0, a.jsx)(j, {
        children: (0, a.jsxs)(k, {
            children: ["This map has players answer questions from a kit, but you", " ", (0, a.jsx)("b", {
                children: "do not currently have any kits with questions."
            }), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsx)(u.default, {
                to: c.KIT_CREATOR,
                style: {
                    color: l.default.Yellow,
                    textDecoration: "underline"
                },
                children: "Create a kit,"
            }), " ", "add some questions and then come back here to play this map!"]
        })
    });
    const j = (0, n.default)(s.CenteredColumn).attrs({
            className: "maxWidth"
        })(p || (p = y``)),
        k = n.default.div(x || (x = y`
  text-align: center;
`)),
        w = n.default.div.attrs({
            className: "maxWidth flex vc"
        })(h || (h = y`
  cursor: pointer;

  border-radius: 6px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
    border-color: ${0};
  }
`), l.default.Yellow),
        C = n.default.div.attrs({
            className: "light-shadow"
        })(g || (g = y`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`)),
        z = n.default.div(m || (m = y`
  font-weight: ${0};
  font-size: 16px;
`), d.FontWeights.Bold)
})), t.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
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
}));