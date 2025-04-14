function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("jPAXw", (function(r, n) {
    var o;
    o = r.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(r.exports, "default", (function() {
        return p
    }));
    var a = t("hxEiv");
    t("fywoC");
    var i = t("aHKz1"),
        s = t("jYr4j"),
        l = t("fFAil"),
        c = t("i5Qjx"),
        d = t("1iNoj"),
        u = t("guNSj"),
        f = t("77Dar");
    var p = e => (0, a.jsx)(f.LimitedWidth, {
        children: (0, a.jsxs)(c.default, {
            direction: "vertical",
            size: 30,
            className: "maxWidth",
            children: [(0, a.jsx)(i.default, {
                pageMode: e.pageMode
            }), (0, a.jsx)(s.default, {
                title: "Benefits",
                description: "Access these exclusive benefits all season long",
                children: (0, a.jsx)(l.default, {
                    forSelf: !0
                })
            }), (0, a.jsx)(d.default, {}), (0, a.jsx)(u.default, {
                pageMode: e.pageMode
            })]
        })
    })
})), t.register("aHKz1", (function(r, n) {
    e(r.exports, "default", (function() {
        return k
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("4ifJF"),
        s = t("69SUA"),
        l = t("aQuqp"),
        c = t("py2Xr"),
        d = t("lKmIF"),
        u = t("kyvf1"),
        f = t("b1oE9"),
        p = t("hqWys"),
        x = t("6tOle"),
        h = t("7u0qw"),
        m = t("lR9Fx");
    let g, y, v, b, j, w, S = e => e;
    var k = e => (0, o.jsxs)(C, {
        children: [(0, o.jsx)(E, {}), (0, o.jsxs)(T, {
            children: [p.SeasonTicketSeason.seasonName, " ", p.SeasonTicketSeason.seasonNumber]
        }), (0, o.jsx)(O, {
            children: p.SeasonTicketName.name
        }), (0, h.OwnsSeasonTicket)() ? (0, o.jsxs)(F, {
            children: ["You already own this ", p.SeasonTicketName.name, ". Thanks so much for your support!"]
        }) : (0, o.jsx)(u.default, {
            to: f.SEASON_TICKET_BASE,
            style: {
                textDecoration: "none"
            },
            target: e.pageMode ? void 0 : "_blank",
            children: (0, o.jsxs)(l.default, {
                style: {
                    fontFamily: s.Fonts.SFPro,
                    marginTop: 15
                },
                customFontWeight: s.FontWeights.Bold,
                customColor: "#1677ff",
                ariaLabel: `Purchase ${p.SeasonTicketName.name}`,
                children: [(0, o.jsx)(c.default, {
                    name: "fal fa-sparkles",
                    style: {
                        marginRight: 10
                    }
                }), "Purchase ", p.SeasonTicketName.name]
            })
        }), (0, o.jsxs)(N, {
            children: ["Season ends ", m.SEASON_TICKET_END_DATE, "."]
        })]
    });
    const C = (0, a.default)(i.CenteredColumn).attrs({
            className: "maxWidth medium-shadow"
        })(g || (g = S`
  font-family: ${0};
  text-transform: uppercase;
  padding: 60px 30px;
  border-radius: 8px;
  border: 4px solid ${0};
  background-image: linear-gradient(
    179deg,
    rgb(255 226 6) 9.2%,
    rgb(170 95 41) 103.9%
  );
  @media (max-width: 820px) {
    text-align: center;
  }
`), s.Fonts.FugazOne, d.default.White),
        E = a.default.img.attrs({
            src: x.SEASON_TICKET_TICKET_IMAGE
        })(y || (y = S`
  height: 97px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`)),
        T = a.default.div(v || (v = S`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        O = a.default.div(b || (b = S`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`)),
        F = a.default.div(j || (j = S`
  text-transform: none;
  font-family: ${0};
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`), s.Fonts.SFPro),
        N = a.default.div(w || (w = S`
  text-transform: none;
  font-family: ${0};
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`), s.Fonts.SFPro)
})), t.register("6tOle", (function(r, n) {
    e(r.exports, "SEASON_TICKET_TICKET_IMAGE", (function() {
        return o
    }));
    const o = (0, t("alREA").default)("stickers/season_3_2025.png")
})), t.register("lR9Fx", (function(t, r) {
    e(t.exports, "SEASON_TICKET_END_DATE", (function() {
        return n
    }));
    const n = "August 20th"
})), t.register("jYr4j", (function(r, n) {
    e(r.exports, "default", (function() {
        return u
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("69SUA");
    let s, l, c, d = e => e;
    var u = e => (0, o.jsxs)(f, {
        children: [(0, o.jsx)(p, {
            children: e.title
        }), (0, o.jsx)(x, {
            children: e.description
        }), e.children]
    });
    const f = a.default.div(s || (s = d``)),
        p = a.default.div(l || (l = d`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 32px;
`), i.Fonts.FugazOne),
        x = a.default.div(c || (c = d`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`))
})), t.register("fFAil", (function(r, n) {
    e(r.exports, "default", (function() {
        return u
    }));
    var o = t("hxEiv"),
        a = t("i5Qjx");
    t("fywoC");
    var i = t("39g5p"),
        s = t("hqWys"),
        l = t("iMOcM"),
        c = t("2Y5iQ");
    const d = [{
        icon: "vip",
        title: "Exclusive Cosmetics",
        description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${s.SeasonTicketName.singularName}. Cosmetics stay in your Locker after the season ends.`
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
    var u = e => (0, o.jsx)(a.default, {
        direction: "vertical",
        size: 20,
        className: "maxWidth",
        children: d.filter((t => !t.show || t.show(e.forSelf))).map(((e, t) => (0, o.jsx)(i.default, {
            ...e
        }, "benefit" + t)))
    })
})), t.register("39g5p", (function(r, n) {
    e(r.exports, "default", (function() {
        return g
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("4ifJF"),
        s = t("69SUA"),
        l = t("alREA");
    let c, d, u, f, p, x, h, m = e => e;
    var g = e => (0, o.jsxs)(y, {
        children: [(0, o.jsx)(v, {
            children: (0, o.jsx)(b, {
                src: (0, l.default)(`seasonTicket/${e.icon}.svg`)
            })
        }), (0, o.jsxs)(j, {
            children: [e.tag ? (0, o.jsx)(w, {
                children: e.tag
            }) : null, (0, o.jsx)(S, {
                children: e.title
            }), (0, o.jsx)(k, {
                children: e.description
            })]
        })]
    });
    const y = (0, a.default)(i.VerticalCentered).attrs({
            className: "maxWidth light-shadow"
        })(c || (c = m`
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
        v = a.default.div(d || (d = m`
  margin-right: 32px;
`)),
        b = a.default.img(u || (u = m`
  width: 40px;
`)),
        j = a.default.div.attrs({
            className: "flex-column"
        })(f || (f = m`
  align-items: flex-start;
`)),
        w = a.default.div(p || (p = m`
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
`), s.Fonts.FugazOne),
        S = a.default.div(x || (x = m`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 22px;
`), s.Fonts.FugazOne),
        k = a.default.div(h || (h = m`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`))
})), t.register("1iNoj", (function(r, n) {
    e(r.exports, "default", (function() {
        return l
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("jYr4j"),
        i = t("y1HNZ"),
        s = t("iNk8F");
    var l = () => {
        const {
            data: e
        } = (0, i.default)();
        return e && e.length ? (0, o.jsx)(a.default, {
            title: "Cosmetics",
            description: "Instantly earn these exclusive cosmetics",
            children: e.map((e => (0, o.jsx)(s.default, {
                cosmetic: e
            }, e.id + "-item")))
        }) : null
    }
})), t.register("y1HNZ", (function(r, n) {
    e(r.exports, "default", (function() {
        return s
    }));
    var o = t("eMRqp"),
        a = t("iMOcM");
    const i = ["season-ticket-cosmetics"];
    var s = () => (0, o.useQuery)(i, (() => (0, a.requestAsPromise)({
        url: "/api/cosmos/season-ticket"
    })))
})), t.register("iNk8F", (function(r, n) {
    e(r.exports, "default", (function() {
        return h
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("6a2jS"),
        s = t("6Jzz1"),
        l = t("2PrJL"),
        c = t("iMOcM"),
        d = t("53ySl"),
        u = t("1lU5G"),
        f = t("a5sZj"),
        p = t("bDJkg"),
        x = t("hifxW");
    var h = e => {
        const {
            cosmetic: t
        } = e, [r, n, h] = (0, c.useBoolean)(!1), [m, g, y] = (0, c.useBoolean)(!1), v = a.useMemo((() => t.type === i.CosmeticType.sticker ? 30 : 10), [t.type]);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(s.Container, {
                onMouseEnter: g,
                onMouseLeave: y,
                onClick: n,
                children: [(0, o.jsx)(s.PreviewArea, {
                    children: (0, o.jsx)(s.PreviewContent, {
                        style: {
                            transform: `scale(${m?1.1:1})`
                        },
                        children: (0, o.jsx)(d.default, {
                            image: (0, u.default)({
                                id: t.id,
                                type: t.type
                            }),
                            background: (0, f.rarityToBackground)(t.rarity),
                            padding: v
                        })
                    })
                }), (0, o.jsx)(l.Container, {
                    style: {
                        background: (0, f.rarityToBackground)(t.rarity)
                    },
                    children: (0, o.jsx)(l.Content, {
                        className: "flex-center",
                        children: (0, o.jsxs)("div", {
                            className: "flex-column flex-center",
                            children: [(0, o.jsx)(l.Title, {
                                children: t.name
                            }), (0, o.jsx)(l.Description, {
                                children: (0, p.cosmeticTypeName)(t.type)
                            })]
                        })
                    })
                })]
            }), (0, o.jsx)(x.default, {
                open: r,
                close: h,
                pack: t.packName,
                ...t,
                image: (0, u.default)({
                    id: t.id,
                    type: t.type
                }),
                callToAction: () => {}
            })]
        })
    }
})), t.register("6Jzz1", (function(r, n) {
    e(r.exports, "BORDER_RADIUS", (function() {
        return v
    })), e(r.exports, "Container", (function() {
        return j
    })), e(r.exports, "PreviewArea", (function() {
        return w
    })), e(r.exports, "PreviewContent", (function() {
        return S
    })), e(r.exports, "default", (function() {
        return b
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("2FDaO"),
        s = t("2PrJL"),
        l = t("6a2jS"),
        c = t("iMOcM"),
        d = t("6BIRj"),
        u = t("53ySl"),
        f = t("a5sZj"),
        p = t("69SUA"),
        x = t("e5CAx");
    let h, m, g, y = e => e;
    const v = 6;
    var b = e => {
        const [t, r, n] = (0, c.useBoolean)(!1), [i, p, h] = (0, c.useBoolean)(!1), m = a.useMemo((() => e.type === l.CosmeticType.sticker ? 30 : 10), [e.type]);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(j, {
                onMouseEnter: p,
                onMouseLeave: h,
                onClick: () => {
                    (0, d.playClickSound)(), r()
                },
                children: [(0, o.jsx)(w, {
                    children: (0, o.jsx)(S, {
                        style: {
                            transform: `scale(${i?1.1:1})`
                        },
                        children: (0, o.jsx)(u.default, {
                            image: e.image,
                            background: (0, f.rarityToBackground)(e.rarity),
                            padding: m
                        })
                    })
                }), (0, o.jsx)(s.default, {
                    name: e.name,
                    type: e.type,
                    rarity: e.rarity,
                    owned: e.owned,
                    cost: e.cost,
                    tag: e.tag
                })]
            }), (0, o.jsx)(x.default, {
                open: t,
                close: n,
                ...e
            })]
        })
    };
    const j = i.default.div.attrs({
            className: "maxWidth medium-shadow"
        })(h || (h = y`
  border-radius: ${0}px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${0};
  &:last-child {
    margin-bottom: 0px;
  }
`), v, p.Fonts.FugazOne),
        w = i.default.div.attrs({
            className: "maxWidth"
        })(m || (m = y`
  height: 140px;
  overflow: hidden;
`)),
        S = i.default.div.attrs({
            className: "maxAll"
        })(g || (g = y`
  transition: transform 0.25s;
`))
})), t.register("2PrJL", (function(r, n) {
    e(r.exports, "Container", (function() {
        return v
    })), e(r.exports, "Content", (function() {
        return b
    })), e(r.exports, "Title", (function() {
        return j
    })), e(r.exports, "Description", (function() {
        return w
    })), e(r.exports, "default", (function() {
        return y
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("6Jzz1"),
        s = t("a5sZj"),
        l = t("bDJkg"),
        c = t("7v0W8"),
        d = t("lKmIF");
    let u, f, p, x, h, m, g = e => e;
    var y = e => (0, o.jsx)(v, {
        style: {
            background: (0, s.rarityToBackground)(e.rarity)
        },
        children: (0, o.jsxs)(b, {
            children: [(0, o.jsxs)("div", {
                className: "flex-column",
                style: {
                    alignItems: "flex-start"
                },
                children: [e.tag ? (0, o.jsx)(k, {
                    children: e.tag
                }) : null, (0, o.jsx)(j, {
                    children: e.name
                }), (0, o.jsx)(w, {
                    children: e.owned ? "Owned" : (0, l.cosmeticTypeName)(e.type)
                })]
            }), (0, o.jsx)(S, {
                children: e.owned ? null : (0, o.jsx)(c.default, {
                    amount: e.cost
                })
            })]
        })
    });
    const v = a.default.div(u || (u = g`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${0};
  text-transform: uppercase;
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${0}px;
  overflow: hidden;
  line-height: 1;
`), d.default.White, (() => i.BORDER_RADIUS), (() => i.BORDER_RADIUS)),
        b = a.default.div.attrs({
            className: "maxWidth flex vc between"
        })(f || (f = g`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        j = a.default.div(p || (p = g`
  font-size: 24px;
`)),
        w = a.default.div(x || (x = g`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        S = a.default.div(h || (h = g`
  margin-left: 10px;
`)),
        k = a.default.div(m || (m = g`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`))
})), t.register("53ySl", (function(r, n) {
    e(r.exports, "default", (function() {
        return d
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("6L1wG");
    let s, l, c = e => e;
    var d = e => {
        const [t, r] = (0, i.useInViewRef)();
        return (0, o.jsx)(u, {
            ref: t,
            style: {
                padding: e.padding,
                background: e.background
            },
            children: r ? (0, o.jsx)(f, {
                draggable: !1,
                src: e.image
            }) : null
        })
    };
    const u = a.default.div.attrs({
            className: "maxAll flex-center"
        })(s || (s = c`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        f = a.default.img(l || (l = c`
  max-width: 100%;
  max-height: 100%;
`))
})), t.register("6L1wG", (function(r, n) {
    e(r.exports, "useInViewRef", (function() {
        return i
    }));
    var o = t("fywoC"),
        a = {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: [0, 1]
        };

    function i(e, t) {
        void 0 === e && (e = function() {}), void 0 === t && (t = a);
        var r = t.root,
            n = void 0 === r ? null : r,
            i = t.rootMargin,
            s = t.threshold,
            l = (0, o.useState)(null),
            c = l[0],
            d = l[1],
            u = (0, o.useState)(!1),
            f = u[0],
            p = u[1];
        (0, o.useEffect)((function() {
            if (c) {
                var r = new IntersectionObserver((function(t, r) {
                    t.forEach((function(e) {
                        var t = e.isIntersecting;
                        return p(t)
                    })), e(t, r)
                }), t);
                return r.observe(c),
                    function() {
                        r.disconnect()
                    }
            }
        }), [c, e, n, i, s]);
        var x = (0, o.useCallback)((function(e) {
            d(e)
        }), []);
        return [x, f]
    }
})), t.register("e5CAx", (function(r, n) {
    e(r.exports, "default", (function() {
        return h
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("hifxW"),
        s = t("1lU5G"),
        l = t("7v0W8"),
        c = t("iMOcM"),
        d = t("jVQO4"),
        u = t("alREA"),
        f = t("djNPM"),
        p = t("79q1I"),
        x = t("8p0tB");
    var h = e => {
        const [t, r] = a.useState(!1), [n, h] = a.useState(!1), {
            id: m,
            name: g,
            rarity: y,
            type: v,
            description: b,
            style: j
        } = e, w = e.owned || e.currentCurrency < e.cost, S = () => {
            w || t || (r(!0), (0, c.request)({
                url: "/api/cosmos/purchase-item",
                data: {
                    cosmeticId: e.id
                },
                success: () => {
                    (0, x.AnalyticsTrackEvent)({
                        event: "cosmetic_purchased",
                        properties: {
                            id: m,
                            name: g,
                            type: v
                        }
                    }), (0, d.playSound)({
                        path: (0, u.default)("cosmos/cosmeticPurchased.mp3"),
                        volume: .6
                    }), (0, p.invalidateCosmosBasics)(), (0, f.refetchCosmosItemShop)(), h(!0)
                },
                error: t => {
                    (0, c.throwMessageError)({
                        e: t,
                        default: {
                            title: "Error purchasing item.",
                            content: "Please try again later."
                        }
                    }), e.close()
                }
            }))
        };
        return (0, o.jsx)(i.default, {
            open: e.open,
            close: e.close,
            id: m,
            name: g,
            image: (0, s.default)({
                id: m,
                type: v
            }),
            rarity: y,
            type: v,
            description: b,
            style: j,
            purchased: n,
            callToAction: () => ({
                text: e.owned ? "Owned" : (0, o.jsxs)("div", {
                    className: "flex vc",
                    style: {
                        lineHeight: 1,
                        padding: "2px 0px"
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            marginTop: 2
                        },
                        children: "Purchase"
                    }), (0, o.jsx)("div", {
                        style: {
                            margin: "0px 7px"
                        },
                        children: "-"
                    }), (0, o.jsx)(l.default, {
                        amount: e.cost,
                        size: 16,
                        grayscale: w
                    })]
                }),
                ariaLabel: e.owned ? "Owned" : "Purchase",
                disabled: w,
                onClick: S
            }),
            blockCharacterPreview: e.blockCharacterPreview,
            onCosmeticSelectionChanged: e.onCosmeticSelectionChanged
        })
    }
})), t.register("jVQO4", (function(r, n) {
    e(r.exports, "playSound", (function() {
        return i
    })), e(r.exports, "preloadSound", (function() {
        return l
    }));
    var o = t("6yrsF");
    const a = new Map,
        i = e => {
            const t = Date.now();
            if (!e.path) return null;
            const r = e.forceCreateNewSound ? void 0 : a.get(e.path),
                n = r || new(0, o.Howl)({
                    src: e.path
                });
            if (n.volume(e.volume), r) e.delay ? setTimeout((() => {
                n.play()
            }), e.delay) : n.play();
            else {
                const r = () => {
                    if (a.get(e.path) || e.forceCreateNewSound || a.set(e.path, n), e.delay) {
                        const r = t + e.delay,
                            o = Date.now();
                        o > r ? n.play() : setTimeout((() => {
                            n.play()
                        }), r - o)
                    } else n.play()
                };
                "loaded" === n.state() ? r() : n.once("load", r)
            }
            return n
        },
        s = new Set,
        l = e => {
            const {
                path: t
            } = e;
            if (a.get(t)) return;
            if (s.has(t)) return;
            s.add(t);
            const r = new(0, o.Howl)({
                src: t
            });
            r.once("load", (() => {
                s.delete(t), a.set(t, r)
            }))
        }
})), t.register("djNPM", (function(r, n) {
    e(r.exports, "removeCosmosItemShop", (function() {
        return l
    })), e(r.exports, "refetchCosmosItemShop", (function() {
        return c
    })), e(r.exports, "default", (function() {
        return d
    }));
    var o = t("eMRqp"),
        a = t("bKPD8"),
        i = t("iMOcM");
    const s = ["cosmos-item-shop"],
        l = () => {
            a.default.removeQueries(s)
        },
        c = () => a.default.refetchQueries(s);
    var d = () => (0, o.useQuery)(s, (() => (0, i.requestAsPromise)({
        url: "/api/cosmos/shop"
    })))
})), t.register("8p0tB", (function(r, n) {
    e(r.exports, "AnalyticsTrackEvent", (function() {
        return l
    }));
    var o = t("6fFlL"),
        a = t("iMOcM"),
        i = t("dOsOD"),
        s = t("amvOw");
    const l = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), i.AnalyticsFlags.educatorOnly) && (null === (n = (0, a.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), t.register("guNSj", (function(r, n) {
    e(r.exports, "default", (function() {
        return y
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("4ifJF"),
        s = t("69SUA"),
        l = t("aQuqp"),
        c = t("py2Xr"),
        d = t("kyvf1"),
        u = t("b1oE9"),
        f = t("hqWys"),
        p = t("7u0qw"),
        x = t("lR9Fx");
    let h, m, g = e => e;
    var y = e => (0, p.OwnsSeasonTicket)() ? null : (0, o.jsxs)(v, {
        children: [(0, o.jsx)(d.default, {
            to: u.SEASON_TICKET_BASE,
            style: {
                textDecoration: "none"
            },
            target: e.pageMode ? void 0 : "_blank",
            children: (0, o.jsxs)(l.default, {
                style: {
                    fontFamily: s.Fonts.SFPro,
                    marginTop: 15
                },
                size: "large",
                customFontWeight: s.FontWeights.Bold,
                customColor: "#1677ff",
                ariaLabel: `Purchase ${f.SeasonTicketName.name}`,
                children: [(0, o.jsx)(c.default, {
                    name: "fal fa-sparkles",
                    style: {
                        marginRight: 10
                    }
                }), "Purchase ", f.SeasonTicketName.name]
            })
        }), (0, o.jsxs)(b, {
            children: ["Season ends ", x.SEASON_TICKET_END_DATE, "."]
        })]
    });
    const v = (0, a.default)(i.CenteredColumn).attrs({
            className: "maxWidth"
        })(h || (h = g`
  padding: 6px 0px;
`)),
        b = a.default.div(m || (m = g`
  text-transform: none;
  font-family: ${0};
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`), s.Fonts.SFPro)
})), t.register("2RhIb", (function(e, r) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var n, o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        a = t("fywoC"),
        i = (n = a) && n.__esModule ? n : {
            default: n
        },
        s = t("3o5yH");
    var l = {
            position: "relative"
        },
        c = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.setRef = r.setRef.bind(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), o(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.active && !this.props.active && (0, s.confetti)(this.container, e.config)
                }
            }, {
                key: "setRef",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "render",
                value: function() {
                    return i.default.createElement("div", {
                        className: this.props.className,
                        style: l,
                        ref: this.setRef
                    })
                }
            }]), t
        }(a.Component);
    e.exports.default = c
})), t.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, a, t),
            s = i.elementCount,
            l = i.colors,
            c = i.width,
            d = i.height,
            u = i.angle,
            f = i.spread,
            p = i.startVelocity,
            x = i.decay,
            h = i.duration,
            m = i.random,
            g = r(e, s, l, c, d),
            y = g.map((function(e) {
                return {
                    element: e,
                    physics: n(u, f, p, m)
                }
            }));
        return o(e, y, x, h)
    };

    function r(e, t, r, n, o) {
        return Array.from({
            length: t
        }).map((function(t, a) {
            var i = document.createElement("div"),
                s = r[a % r.length];
            return i.style["background-color"] = s, i.style.width = n, i.style.height = o, i.style.position = "absolute", i.style.willChange = "transform, opacity", e.appendChild(i), i
        }))
    }

    function n(e, t, r, n) {
        var o = e * (Math.PI / 180),
            a = t * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * n(),
            wobbleSpeed: .1 + .1 * n(),
            velocity: .5 * r + n() * r,
            angle2D: -o + (.5 * a - n() * a),
            angle3D: -Math.PI / 4 + n() * (Math.PI / 2),
            tiltAngle: n() * Math.PI,
            tiltAngleSpeed: .1 + .3 * n()
        }
    }

    function o(e, t, r, n) {
        var o = void 0;
        return new Promise((function(a) {
            requestAnimationFrame((function i(s) {
                o || (o = s);
                var l = o === s ? 0 : (s - o) / n;
                t.forEach((function(e) {
                    return function(e, t, r) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= r, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var n = e.physics,
                            o = n.x,
                            a = n.y,
                            i = n.tiltAngle,
                            s = n.wobble,
                            l = "translate3d(" + (o + 10 * Math.cos(s)) + "px, " + (a + 10 * Math.sin(s)) + "px, 0) rotate3d(1, 1, 1, " + i + "rad)";
                        e.element.style.transform = l, e.element.style.opacity = 1 - t
                    }(e, l, r)
                })), s - o < n ? requestAnimationFrame(i) : (t.forEach((function(t) {
                    if (t.element.parentNode === e) return e.removeChild(t.element)
                })), a())
            }))
        }))
    }
    var a = {
        angle: 90,
        decay: .9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        duration: 3e3,
        random: Math.random
    }
}));