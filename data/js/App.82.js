function e(e, t, a, n) {
    Object.defineProperty(e, t, {
        get: a,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("3kbkT", (function(t, n) {
    var i;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return w
    }));
    var r = a("hxEiv"),
        s = a("fywoC"),
        o = a("cPGmn"),
        l = a("eEYFA"),
        c = a("iMOcM"),
        d = a("3uz2P"),
        u = a("85FzS"),
        f = a("bM2u5"),
        p = a("4ifJF"),
        m = a("9Mv96"),
        x = a("lKmIF"),
        h = a("2FDaO"),
        g = a("lTe33"),
        v = a("461I3"),
        y = a("hqWys");
    let b;
    var w = () => {
        const [e, t] = s.useState(null), a = (0, c.getUrlVariable)("session_id"), [n, i] = s.useState(!!a), {
            id: h
        } = (0, d.useParams)();
        (0, o.useDidMount)((() => {
            (0, c.loadFont)("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        }));
        const b = () => {
            (0, c.isLoggedIn)() || h ? (0, l.Request)({
                url: h ? `/api/billing/season-ticket/info/${h}` : "/api/billing/season-ticket/info",
                success: e => t(e),
                error: e => (0, c.throwMessageError)({
                    e: e,
                    default: {
                        title: "Error loading season ticket info",
                        content: "Please refresh and try again."
                    },
                    onOk: f.RedirectToHomepage
                })
            }) : (0, f.ReplaceToHomePage)()
        };
        (0, o.useDidMount)((() => {
            a ? (0, c.verifyStripe)({
                sessionId: a,
                onSuccess: () => {
                    i(!1), b()
                },
                onError: e => {
                    (0, c.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error completion purchase",
                            content: "Refresh and try again. If the issue persists, please contact support."
                        },
                        onOk: f.RedirectToHomepage
                    })
                }
            }) : b()
        }));
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.Title, {
                title: y.SeasonTicketName.name
            }), (0, r.jsx)(k, {
                children: (0, r.jsx)(v.default, {
                    children: !e || n ? (0, r.jsx)(p.Centered, {
                        className: "maxAll",
                        children: (0, r.jsx)(m.default, {
                            style: {
                                color: x.default.White
                            }
                        })
                    }) : e.hasSeasonTicket ? (0, r.jsx)(g.default, {
                        info: e,
                        hasSessionId: !!a,
                        boughtForSelf: !h
                    }) : (0, r.jsx)(u.default, {
                        info: e
                    })
                })
            })]
        })
    };
    const k = h.default.div(b || (b = (e => e)`
  flex: 1;
  color: ${0};
`), x.default.White)
})), a.register("85FzS", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO"),
        s = a("fFAil"),
        o = a("ctbjA"),
        l = a("3I2yd"),
        c = a("kyvf1"),
        d = a("bM2u5");
    let u, f, p, m, x, h = e => e;
    var g = e => {
        const t = !e.info.linkId && e.info.firstName;
        return (0, i.jsxs)(v, {
            children: [(0, i.jsx)(y, {
                className: "flex-center",
                children: (0, i.jsx)(c.default, {
                    to: (0, d.GetHomepagePath)(),
                    children: (0, i.jsx)(b, {
                        src: "/client/img/svgLogoWhite.svg"
                    })
                })
            }), (0, i.jsx)(w, {
                children: (0, i.jsx)(l.default, {})
            }), (0, i.jsxs)(k, {
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsx)(s.default, {
                        forSelf: !t
                    })
                }), (0, i.jsx)(o.default, {
                    info: e.info
                })]
            })]
        })
    };
    const v = r.default.div.attrs({
            className: "maxWidth flex-column vc"
        })(u || (u = h`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`)),
        y = r.default.div(f || (f = h`
  margin-bottom: 30px;
`)),
        b = r.default.img(p || (p = h`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`)),
        w = r.default.div(m || (m = h`
  width: 100%;
  max-width: 1200px;
`)),
        k = (0, r.default)(w).attrs({
            className: "flex"
        })(x || (x = h`
  margin-top: 20px;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 10px;
  }
`))
})), a.register("fFAil", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = a("hxEiv"),
        r = a("i5Qjx");
    a("fywoC");
    var s = a("39g5p"),
        o = a("hqWys"),
        l = a("iMOcM"),
        c = a("2Y5iQ");
    const d = [{
        icon: "vip",
        title: "Exclusive Cosmetics",
        description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${o.SeasonTicketName.singularName}. Cosmetics stay in your Locker after the season ends.`
    }, {
        icon: "rise",
        title: "Increased XP Limit",
        description: "Weekly XP limit increased to 20,000. Earn more GimBucks and rewards for your learning!"
    }, {
        icon: "hammer",
        title: "Terrains, Props, & Devices",
        description: "Exclusive access to over 75 terrains, props, and devices to use in your Gimkit Creative maps."
    }, {
        icon: "megaphone",
        title: "Free Creative Publishing",
        description: `Publish your maps to the world without paying 1,000 ${c.default.currency}!`
    }, {
        icon: "idea",
        title: "Creative Slots",
        description: "Store up to 25 maps on your account!"
    }, {
        icon: "dog",
        title: "Play With Friends",
        description: "Host live games with up to 15 players!",
        show: e => !e || (0, l.isStudent)()
    }];
    var u = e => (0, i.jsx)(r.default, {
        direction: "vertical",
        size: 20,
        className: "maxWidth",
        children: d.filter((t => !t.show || t.show(e.forSelf))).map(((e, t) => (0, i.jsx)(s.default, {
            ...e
        }, "benefit" + t)))
    })
})), a.register("i5Qjx", (function(n, i) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var r = a("fe1on"),
        s = a("jyxW7"),
        o = a("fywoC"),
        l = a("4gMdJ"),
        c = a("1eqVQ"),
        d = a("7yXSw"),
        u = a("c9Vcn"),
        f = a("5gjI2"),
        p = function(e, t) {
            var a = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (a[n[i]] = e[n[i]])
            }
            return a
        };
    const m = o.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        x = {
            small: 8,
            middle: 16,
            large: 24
        };
    const h = e => {
        const {
            getPrefixCls: a,
            space: n,
            direction: i
        } = o.useContext(l.ConfigContext), {
            size: d = (null == n ? void 0 : n.size) || "small",
            align: h,
            className: g,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: k,
            style: j,
            wrap: S = !1
        } = e, C = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [N, F] = o.useMemo((() => (Array.isArray(d) ? d : [d, d]).map((e => function(e) {
            return "string" == typeof e ? x[e] : e || 0
        }(e)))), [d]), T = (0, s.default)(y, {
            keepEmpty: !0
        }), z = void 0 === h && "horizontal" === b ? "center" : h, D = a("space", w), [O, M] = (0, f.default)(D), I = t(r)(D, M, `${D}-${b}`, {
            [`${D}-rtl`]: "rtl" === i,
            [`${D}-align-${z}`]: z
        }, g, v), P = `${D}-item`, A = "rtl" === i ? "marginLeft" : "marginRight";
        let W = 0;
        const R = T.map(((e, t) => {
                null != e && (W = t);
                const a = e && e.key || `${P}-${t}`;
                return o.createElement(u.default, {
                    className: P,
                    key: a,
                    direction: b,
                    index: t,
                    marginDirection: A,
                    split: k,
                    wrap: S
                }, e)
            })),
            $ = o.useMemo((() => ({
                horizontalSize: N,
                verticalSize: F,
                latestIndex: W,
                supportFlexGap: E
            })), [N, F, W, E]);
        if (0 === T.length) return null;
        const L = {};
        return S && (L.flexWrap = "wrap", E || (L.marginBottom = -F)), E && (L.columnGap = N, L.rowGap = F), O(o.createElement("div", Object.assign({
            className: I,
            style: Object.assign(Object.assign({}, L), j)
        }, C), o.createElement(m.Provider, {
            value: $
        }, R)))
    };
    h.Compact = d.default;
    var g = h
})), a.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = a("fywoC"),
        r = a("azMeL"),
        s = () => {
            const [e, t] = i.useState(!1);
            return i.useEffect((() => {
                t((0, r.detectFlexGapSupported)())
            }), []), e
        }
})), a.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = a("fywoC"),
        r = a("i5Qjx");

    function s(e) {
        let {
            className: t,
            direction: a,
            index: n,
            marginDirection: s,
            children: o,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: d,
            verticalSize: u,
            latestIndex: f,
            supportFlexGap: p
        } = i.useContext(r.SpaceContext);
        let m = {};
        return p || ("vertical" === a ? n < f && (m = {
            marginBottom: d / (l ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [s]: d / (l ? 2 : 1)
        }), c && {
            paddingBottom: u
        })), null == o ? null : i.createElement(i.Fragment, null, i.createElement("div", {
            className: t,
            style: m
        }, o), n < f && l && i.createElement("span", {
            className: `${t}-split`,
            style: m
        }, l))
    }
})), a.register("39g5p", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO"),
        s = a("4ifJF"),
        o = a("69SUA"),
        l = a("alREA");
    let c, d, u, f, p, m, x, h = e => e;
    var g = e => (0, i.jsxs)(v, {
        children: [(0, i.jsx)(y, {
            children: (0, i.jsx)(b, {
                src: (0, l.default)(`seasonTicket/${e.icon}.svg`)
            })
        }), (0, i.jsxs)(w, {
            children: [e.tag ? (0, i.jsx)(k, {
                children: e.tag
            }) : null, (0, i.jsx)(j, {
                children: e.title
            }), (0, i.jsx)(S, {
                children: e.description
            })]
        })]
    });
    const v = (0, r.default)(s.VerticalCentered).attrs({
            className: "maxWidth light-shadow"
        })(c || (c = h`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        y = r.default.div(d || (d = h`
  margin-right: 32px;
`)),
        b = r.default.img(u || (u = h`
  width: 40px;
`)),
        w = r.default.div.attrs({
            className: "flex-column"
        })(f || (f = h`
  align-items: flex-start;
`)),
        k = r.default.div(p || (p = h`
  font-family: ${0};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  text-transform: uppercase;
  font-size: 12px;
  padding: 6px 14px 4px 14px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  margin-bottom: 7px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), o.Fonts.FugazOne),
        j = r.default.div(m || (m = h`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 22px;
`), o.Fonts.FugazOne),
        S = r.default.div(x || (x = h`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`))
})), a.register("4ifJF", (function(t, n) {
    e(t.exports, "Centered", (function() {
        return d
    })), e(t.exports, "VerticallyCentered", (function() {
        return u
    })), e(t.exports, "CenteredColumn", (function() {
        return f
    })), e(t.exports, "VerticalCentered", (function() {
        return p
    }));
    var i = a("2FDaO");
    let r, s, o, l, c = e => e;
    const d = i.default.div.attrs({
            className: "flex-center"
        })(r || (r = c``)),
        u = i.default.div.attrs({
            className: "flex vc"
        })(s || (s = c``)),
        f = (0, i.default)(d).attrs({
            className: "flex-column"
        })(o || (o = c``)),
        p = i.default.div.attrs({
            className: "flex vc"
        })(l || (l = c``))
})), a.register("alREA", (function(t, a) {
    let n;
    e(t.exports, "default", (function() {
        return i
    }));
    var i = e => {
        const t = (() => {
            var e;
            if (n) return n;
            const t = null === (e = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === e ? void 0 : e.getAttribute("content");
            return void 0 !== t && "$CDN_MAP_ASSETS_URL" !== t ? (n = t, n) : ""
        })();
        return e.startsWith("/assets/map") ? `${t}${e}` : `${t}/assets/map/${e}`
    }
})), a.register("hqWys", (function(t, a) {
    e(t.exports, "SeasonTicketName", (function() {
        return n
    })), e(t.exports, "SeasonTicketSeason", (function() {
        return i
    }));
    const n = {
            name: "Season Ticket",
            singularName: "ticket"
        },
        i = {
            seasonYear: "2025",
            seasonName: "Season",
            seasonNumber: "3"
        }
})), a.register("2Y5iQ", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), a.register("ctbjA", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO"),
        s = a("lKmIF"),
        o = a("jscMY"),
        l = a("6pZlp"),
        c = a("i5Qjx");
    let d, u, f = e => e;
    var p = e => {
        const t = !e.info.linkId && e.info.firstName;
        return (0, i.jsx)(m, {
            children: (0, i.jsxs)(c.default, {
                direction: "vertical",
                size: 20,
                className: "maxWidth",
                children: [(0, i.jsx)(x, {
                    children: (0, i.jsx)(o.default, {
                        info: e.info
                    })
                }), t ? null : (0, i.jsx)(x, {
                    children: (0, i.jsx)(l.default, {
                        info: e.info
                    })
                })]
            })
        })
    };
    const m = r.default.div(d || (d = f`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`)),
        x = r.default.div.attrs({
            className: "medium-shadow"
        })(u || (u = f`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${0};
  padding: 35px;
  border-radius: 8px;
`), s.default.Black)
})), a.register("jscMY", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var i = a("hxEiv"),
        r = a("aYYSA"),
        s = a("93yIm"),
        o = a("i5Qjx");
    a("fywoC");
    var l = a("2FDaO"),
        c = a("iMOcM"),
        d = a("69SUA"),
        u = a("eEYFA"),
        f = a("kgPjU"),
        p = a("3uz2P"),
        m = a("hqWys"),
        x = a("lR9Fx");
    let h, g, v = e => e;
    var y = e => {
        const [t, a, n] = (0, c.useBoolean)(!1), {
            info: l
        } = e, {
            id: h
        } = (0, p.useParams)(), g = !l.linkId && l.firstName, v = e => {
            (0, c.throwMessageError)({
                e: e,
                default: {
                    title: "There was an error connecting with our payments provider.",
                    content: "Please try again."
                }
            }), n()
        };
        return (0, i.jsxs)(b, {
            children: [(0, i.jsxs)(o.default, {
                direction: "vertical",
                size: 12,
                style: {
                    fontFamily: d.Fonts.SFPro,
                    fontSize: 16
                },
                children: [g ? (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(w, {
                        children: ["You are purchasing a Gimkit ", m.SeasonTicketName.name, " for", " ", (0, i.jsxs)("b", {
                            children: [l.firstName, "."]
                        })]
                    })
                }) : null, (0, i.jsxs)(w, {
                    children: ["The ", m.SeasonTicketName.name, " is not a subscription.", " ", (0, i.jsx)("b", {
                        children: "You will only be charged once."
                    })]
                }), (0, i.jsxs)(w, {
                    children: ["Includes access to all the ", m.SeasonTicketName.name, " benefits until the end of the season on ", x.SEASON_TICKET_END_DATE, "."]
                })]
            }), (0, i.jsxs)(s.default, {
                style: {
                    height: 65,
                    marginTop: 15
                },
                size: "large",
                block: !0,
                icon: (0, i.jsx)(r.default, {}),
                type: "primary",
                loading: t,
                onClick: () => {
                    a(), (0, u.Request)({
                        url: "/api/billing/stripe-key",
                        success: async e => {
                            let t;
                            t = await (0, f.loadStripe)(e.key), (0, u.Request)({
                                url: "/api/billing/create-season-ticket-session",
                                method: "POST",
                                data: h ? {
                                    encryptedUserId: h
                                } : void 0,
                                success: async e => {
                                    await t.redirectToCheckout({
                                        sessionId: e.id
                                    }).catch((e => v(e)))
                                },
                                error: e => {
                                    v(e)
                                }
                            })
                        },
                        error: e => {
                            v(e)
                        }
                    })
                },
                children: ["Purchase ", m.SeasonTicketName.name, " - $5.00"]
            })]
        })
    };
    const b = l.default.div(h || (h = v``)),
        w = l.default.div(g || (g = v``))
})), a.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = a("dnh3u"),
        r = a("fywoC"),
        s = a("5UEB4"),
        o = a("dwKuN"),
        l = function(e, t) {
            return r.createElement(o.default, (0, i.default)((0, i.default)({}, e), {}, {
                ref: t,
                icon: s.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = r.forwardRef(l)
})), a.register("5UEB4", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                }
            }]
        },
        name: "star",
        theme: "outlined"
    }
})), a.register("kgPjU", (function(t, a) {
    e(t.exports, "loadStripe", (function() {
        return u
    }));
    var n = "https://js.stripe.com/v3",
        i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        r = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        s = null,
        o = function(e) {
            return null !== s || (s = new Promise((function(t, a) {
                if ("undefined" != typeof window)
                    if (window.Stripe && e && console.warn(r), window.Stripe) t(window.Stripe);
                    else try {
                        var s = function() {
                            for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
                                var a = e[t];
                                if (i.test(a.src)) return a
                            }
                            return null
                        }();
                        s && e ? console.warn(r) : s || (s = function(e) {
                            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                a = document.createElement("script");
                            a.src = "".concat(n).concat(t);
                            var i = document.head || document.body;
                            if (!i) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                            return i.appendChild(a), a
                        }(e)), s.addEventListener("load", (function() {
                            window.Stripe ? t(window.Stripe) : a(new Error("Stripe.js not available"))
                        })), s.addEventListener("error", (function() {
                            a(new Error("Failed to load Stripe.js"))
                        }))
                    } catch (e) {
                        return void a(e)
                    } else t(null)
            }))), s
        },
        l = function(e, t, a) {
            if (null === e) return null;
            var n = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.9.0",
                    startTime: t
                })
            }(n, a), n
        },
        c = Promise.resolve().then((function() {
            return o(null)
        })),
        d = !1;
    c.catch((function(e) {
        d || console.warn(e)
    }));
    var u = function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        d = !0;
        var n = Date.now();
        return c.then((function(e) {
            return l(e, t, n)
        }))
    }
})), a.register("lR9Fx", (function(t, a) {
    e(t.exports, "SEASON_TICKET_END_DATE", (function() {
        return n
    }));
    const n = "August 20th"
})), a.register("6pZlp", (function(n, i) {
    e(n.exports, "default", (function() {
        return m
    }));
    var r = a("hxEiv"),
        s = a("93yIm"),
        o = a("b9Zw0"),
        l = a("cy4A6"),
        c = a("dhxiD");
    a("fywoC");
    var d = a("2FDaO"),
        u = a("iMOcM"),
        f = a("hqWys");
    let p;
    var m = e => {
        const a = `${(0,u.getDomain)()}/season-ticket/${e.info.linkId}`;
        return (0, r.jsxs)(x, {
            children: [(0, r.jsxs)("div", {
                children: ["Need somebody else to pay for your ", f.SeasonTicketName.singularName, "? Send this link to them and they can purchase the ", f.SeasonTicketName.name, " for you!"]
            }), (0, r.jsxs)("div", {
                className: "flex vc",
                style: {
                    gap: 6,
                    marginTop: 12
                },
                children: [(0, r.jsx)(o.default, {
                    value: a,
                    readOnly: !0
                }), (0, r.jsx)(s.default, {
                    onClick: () => {
                        t(c)(a), l.default.success("Link copied to clipboard!")
                    },
                    type: "primary",
                    children: "Copy Link"
                })]
            })]
        })
    };
    const x = d.default.div(p || (p = (e => e)`
  font-size: 15px;
`))
})), a.register("dhxiD", (function(e, t) {
    var n = a("1fK2g"),
        i = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var a, r, s, o, l, c, d = !1;
        t || (t = {}), a = t.debug || !1;
        try {
            if (s = n(), o = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            a && console.warn("unable to use e.clipboardData"), a && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var r = i[t.format] || i.default;
                            window.clipboardData.setData(r, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), o.selectNodeContents(c), l.addRange(o), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            d = !0
        } catch (n) {
            a && console.error("unable to copy using execCommand: ", n), a && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
            } catch (n) {
                a && console.error("unable to copy using clipboardData: ", n), a && console.error("falling back to prompt"), r = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(r, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(o) : l.removeAllRanges()), c && document.body.removeChild(c), s()
        }
        return d
    }
})), a.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, a = [], n = 0; n < e.rangeCount; n++) a.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
        }
        return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || a.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), a.register("3I2yd", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO"),
        s = a("69SUA"),
        o = a("hqWys");
    let l, c, d, u = e => e;
    var f = () => (0, i.jsxs)(p, {
        children: [(0, i.jsxs)(m, {
            children: [o.SeasonTicketSeason.seasonName, " ", o.SeasonTicketSeason.seasonNumber]
        }), (0, i.jsx)(x, {
            children: o.SeasonTicketName.name
        })]
    });
    const p = r.default.div(l || (l = u`
  font-family: ${0};
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`), s.Fonts.FugazOne),
        m = r.default.div(c || (c = u`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        x = r.default.div(d || (d = u`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`))
})), a.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var i = a("hxEiv"),
        r = a("beXRF");
    a("fywoC");
    var s = e => e.external || !e.to ? (0, i.jsx)("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: t => {
            e.onClick && "Enter" === t.key && (t.preventDefault(), e.onClick())
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, i.jsx)(r.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), a.register("bM2u5", (function(t, n) {
    e(t.exports, "GetHomepagePath", (function() {
        return l
    })), e(t.exports, "RedirectToHomepage", (function() {
        return c
    })), e(t.exports, "ReplaceToHomePage", (function() {
        return d
    }));
    var i = a("b1oE9"),
        r = a("bd8je"),
        s = a("iMOcM"),
        o = a("iROck");
    const l = () => (0, s.isLoggedIn)() ? (0, s.isStudent)() ? i.HOME : i.KITS : "/",
        c = () => {
            (0, o.NavigateTo)(l())
        },
        d = () => {
            r.history.replace(l())
        }
})), a.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return r
    }));
    var i = a("bd8je");
    const r = e => {
        i.history.push(e)
    }
})), a.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var i = a("kqQIs"),
        r = a("2Af7I"),
        s = a("fywoC");
    a("djNMu");
    var o = a("aWdbz"),
        l = a("cY4lv"),
        c = a("kYx4h"),
        d = 44;

    function u(e) {
        var t, a, n;
        return t = e, a = 0, n = 1, e = (Math.min(Math.max(a, t), n) - a) / (n - a), e = (e -= 1) * e * e + 1
    }
    var f = s.forwardRef((function(e, t) {
            var a, n = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                m = e.disableShrink,
                x = void 0 !== m && m,
                h = e.size,
                g = void 0 === h ? 40 : h,
                v = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                w = e.value,
                k = void 0 === w ? 0 : w,
                j = e.variant,
                S = void 0 === j ? "indeterminate" : j,
                C = (0, r.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                E = {},
                N = {},
                F = {};
            if ("determinate" === S || "static" === S) {
                var T = 2 * Math.PI * ((d - b) / 2);
                E.strokeDasharray = T.toFixed(3), F["aria-valuenow"] = Math.round(k), "static" === S ? (E.strokeDashoffset = "".concat(((100 - k) / 100 * T).toFixed(3), "px"), N.transform = "rotate(-90deg)") : (E.strokeDashoffset = "".concat((a = (100 - k) / 100, a * a * T).toFixed(3), "px"), N.transform = "rotate(".concat((270 * u(k / 70)).toFixed(3), "deg)"))
            }
            return s.createElement("div", (0, i.default)({
                className: (0, o.default)(n.root, l, "inherit" !== p && n["color".concat((0, c.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [S]),
                style: (0, i.default)({
                    width: g,
                    height: g
                }, N, v),
                ref: t,
                role: "progressbar"
            }, F, C), s.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(d, " ").concat(d)
            }, s.createElement("circle", {
                className: (0, o.default)(n.circle, x && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [S]),
                style: E,
                cx: d,
                cy: d,
                r: (d - b) / 2,
                fill: "none",
                strokeWidth: b
            })))
        })),
        p = (0, l.default)((function(e) {
            return {
                root: {
                    display: "inline-block"
                },
                static: {
                    transition: e.transitions.create("transform")
                },
                indeterminate: {
                    animation: "$circular-rotate 1.4s linear infinite"
                },
                colorPrimary: {
                    color: e.palette.primary.main
                },
                colorSecondary: {
                    color: e.palette.secondary.main
                },
                svg: {
                    display: "block"
                },
                circle: {
                    stroke: "currentColor"
                },
                circleStatic: {
                    transition: e.transitions.create("stroke-dashoffset")
                },
                circleIndeterminate: {
                    animation: "$circular-dash 1.4s ease-in-out infinite",
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: "0px"
                },
                "@keyframes circular-rotate": {
                    "0%": {
                        transformOrigin: "50% 50%"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                },
                "@keyframes circular-dash": {
                    "0%": {
                        strokeDasharray: "1px, 200px",
                        strokeDashoffset: "0px"
                    },
                    "50%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-15px"
                    },
                    "100%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-125px"
                    }
                },
                circleDisableShrink: {
                    animation: "none"
                }
            }
        }), {
            name: "MuiCircularProgress",
            flip: !1
        })(f)
})), a.register("lTe33", (function(t, n) {
    e(t.exports, "default", (function() {
        return N
    }));
    var i = a("hxEiv"),
        r = a("fywoC"),
        s = a("2FDaO"),
        o = a("4ifJF"),
        l = a("69SUA"),
        c = a("j4bBW"),
        d = a("aQuqp"),
        u = a("kyvf1"),
        f = a("iMOcM"),
        p = a("b1oE9"),
        m = a("bGoag"),
        x = a("hqWys"),
        h = a("6tOle");
    let g, v, y, b, w, k, j, S, C, E = e => e;
    var N = e => (r.useEffect((() => {
        var t, a;
        e.boughtForSelf && (0, f.isLoggedIn)() && !(null === (t = (0, f.getUser)()) || void 0 === t || null === (a = t.seasonTicket) || void 0 === a ? void 0 : a.viewed) && (0, m.default)({})
    }), [e.boughtForSelf]), (0, i.jsxs)(F, {
        children: [(0, i.jsx)(T, {
            children: (0, i.jsxs)(z, {
                children: [(0, i.jsx)(D, {
                    children: (0, i.jsx)(O, {
                        src: h.SEASON_TICKET_TICKET_IMAGE
                    })
                }), (0, i.jsxs)(M, {
                    children: [(0, i.jsxs)("div", {
                        style: {
                            fontFamily: l.Fonts.FugazOne,
                            textTransform: "uppercase"
                        },
                        children: [(0, i.jsx)(I, {
                            children: x.SeasonTicketName.name
                        }), (0, i.jsxs)(P, {
                            children: [e.hasSessionId ? "Purchased" : "Activated", "!"]
                        })]
                    }), (0, i.jsx)(A, {
                        children: e.boughtForSelf ? (0, i.jsx)(i.Fragment, {
                            children: "Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!"
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("b", {
                                children: e.info.firstName
                            }), " now has access to all Season Ticket benefits. Thanks for your support!"]
                        })
                    }), (0, f.isLoggedIn)() ? (0, i.jsx)("div", {
                        style: {
                            marginTop: 25
                        },
                        children: (0, i.jsx)(u.default, {
                            to: p.COSMOS_BASE + "/locker",
                            style: {
                                textDecoration: "none"
                            },
                            children: (0, i.jsx)(d.default, {
                                type: "success",
                                customFontWeight: l.FontWeights.Bold,
                                ariaLabel: "Continue",
                                children: "Continue"
                            })
                        })
                    }) : null]
                })]
            })
        }), (0, i.jsx)(c.default, {})]
    }));
    const F = (0, s.default)(o.Centered).attrs({
            className: "maxAll"
        })(g || (g = E`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`)),
        T = s.default.div.attrs({
            className: "animated bounceIn"
        })(v || (v = E`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`)),
        z = (0, s.default)(o.Centered)(y || (y = E`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`)),
        D = s.default.div(b || (b = E``)),
        O = s.default.img(w || (w = E`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`)),
        M = s.default.div(k || (k = E``)),
        I = s.default.div(j || (j = E`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`)),
        P = s.default.div(S || (S = E`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`)),
        A = s.default.div(C || (C = E`
  font-size: 18px;
  max-width: 400px;
`))
})), a.register("j4bBW", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO"),
        s = a("iC8LK");
    let o;
    const l = {
            intensity: 13,
            acceleration: 1.01,
            brightness: {
                min: 50,
                max: 80
            },
            autoresize: !0,
            flickering: 0,
            traceSpeed: 1,
            explosion: 5,
            particles: 60,
            rocketsPoint: {
                min: 0,
                max: 100
            }
        },
        c = {
            width: "100%",
            height: "100%"
        };
    var d = () => !!window.matchMedia("(prefers-reduced-motion: reduce)").matches ? null : (0, i.jsx)(u, {
        children: (0, i.jsx)(s.Fireworks, {
            options: l,
            style: c
        })
    });
    const u = r.default.div.attrs({
        className: "maxWidth maxHeight"
    })(o || (o = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`))
})), a.register("aQuqp", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var i = a("hxEiv"),
        r = a("6edaj"),
        s = a("fywoC"),
        o = a("2FDaO"),
        l = a("69SUA"),
        c = a("8UJqa");
    let d;
    var u = e => {
        const t = e.size || "default",
            a = s.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            n = s.useMemo((() => (0, r.darken)(.1, a)), [a]),
            o = s.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            c = s.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            d = s.useMemo((() => {
                const a = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${a} ${e.customHorizontalPadding}px` : "small" === t ? `${a} 24px` : "default" === t ? `${a} 28px` : `${a} 42px`
            }), [t, e.customHorizontalPadding]),
            u = s.useMemo((() => "small" === t ? 41 : 49), [t]),
            p = s.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? l.FontWeights.Bold : l.FontWeights.Normal), [e.customFontWeight, t]),
            m = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, i.jsx)(f, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: u
            }, e.style || {}),
            children: (0, i.jsxs)("button", {
                className: "btn-pushable",
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : m,
                onPointerDown: e.usePointerDownEvent ? m : void 0,
                style: {
                    cursor: e.disabled ? "not-allowed" : "pointer",
                    width: e.block ? "100%" : "auto"
                },
                children: [(0, i.jsx)("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: c
                    }
                }), (0, i.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: n,
                        borderRadius: c
                    }
                }), (0, i.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: a,
                        fontSize: o,
                        borderRadius: c,
                        padding: d,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    };
    const f = o.default.div.attrs({
        className: "flex"
    })(d || (d = (e => e)`
  align-items: flex-end;

  .btn-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    transition: filter 250ms;
  }
  .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .btn-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.25s;
  }
  .btn-front {
    display: block;
    position: relative;
    color: ${0};
    will-change: transform;
    transform: translateY(-4px);
    transition: background 0.25s, transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    user-select: none;
  }
  .btn-pushable:hover {
    filter: brightness(110%);
  }
  .btn-pushable:hover .btn-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .btn-pushable:hover .btn-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`), c.default.White)
})), a.register("8UJqa", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    }
})), a.register("6tOle", (function(t, n) {
    e(t.exports, "SEASON_TICKET_TICKET_IMAGE", (function() {
        return i
    }));
    const i = (0, a("alREA").default)("stickers/season_3_2025.png")
})), a.register("461I3", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var i = a("hxEiv");
    a("fywoC");
    var r = a("2FDaO");
    let s, o, l = e => e;
    var c = e => (0, i.jsxs)(d, {
        children: [(0, i.jsx)(u, {
            children: e.children
        }), (0, i.jsx)("div", {
            className: "area",
            children: (0, i.jsxs)("ul", {
                className: "circles",
                children: [(0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {})]
            })
        })]
    });
    const d = r.default.div(s || (s = l`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #4527a0;
    background: linear-gradient(304deg, #4527a0, #2d1a68);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(180deg); // Make the circles go the other way
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`)),
        u = r.default.div.attrs({
            className: "flex-column"
        })(o || (o = l`
  z-index: 1;
  flex: 1;
`))
}));