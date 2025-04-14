function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("nLJC2", (function(r, n) {
    var o;
    o = r.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(r.exports, "default", (function() {
        return S
    }));
    var a = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        s = t("djNPM"),
        c = t("4ifJF"),
        l = t("9Mv96"),
        u = t("lKmIF"),
        d = t("i5Qjx"),
        f = t("6Jzz1"),
        p = t("1lU5G"),
        h = t("79q1I"),
        m = t("lqbc4"),
        g = t("7wjlQ"),
        x = t("77Dar"),
        v = t("69SUA"),
        y = t("6BIRj"),
        w = t("lSFLh");
    let b, j, C, k, P = e => e;
    var S = e => {
        const {
            isLoading: t,
            data: r,
            error: n
        } = (0, s.default)(), {
            data: o,
            isLoading: i,
            error: v
        } = (0, h.default)();
        return (0, m.useWillUnmount)((() => {
            (0, s.removeCosmosItemShop)()
        })), t || i ? (0, a.jsx)(c.Centered, {
            className: "maxAll",
            children: (0, a.jsx)(l.default, {
                style: {
                    color: u.default.White
                }
            })
        }) : n || v ? (0, a.jsx)(c.Centered, {
            className: "maxAll",
            children: "There was an error loading The Shop. Please refresh and try again."
        }) : (0, a.jsx)(x.LimitedWidth, {
            customWidth: 900,
            children: (0, a.jsxs)(M, {
                children: [(0, a.jsx)(O, {
                    children: "Packs"
                }), (0, a.jsx)(I, {
                    children: "Open packs to earn new items that you can use in-game!"
                }), (0, a.jsx)(E, {
                    style: {
                        marginTop: 20
                    },
                    children: r.packs.map((t => (0, a.jsx)(g.Pack, {
                        id: t.id,
                        name: t.name,
                        color: t.color,
                        cost: t.currencyCost,
                        redirect: !e.setToPackScreen,
                        handleClick: () => {
                            (0, y.playPackClickSound)(), e.setToPackScreen && e.setToPackScreen(t.id)
                        }
                    }, t.id)))
                }), r.shop.items.length ? (0, a.jsxs)("div", {
                    className: "maxWidth",
                    style: {
                        marginTop: 40
                    },
                    children: [(0, a.jsxs)("div", {
                        className: "maxWidth flex between vc",
                        children: [(0, a.jsx)(O, {
                            children: "Items"
                        }), (0, a.jsx)(w.default, {
                            serverNowTime: r.shop.now,
                            shopRefreshTime: r.shop.endUnix
                        })]
                    }), (0, a.jsxs)(I, {
                        children: ["Purchase new items to use in-game!", (0, a.jsx)("br", {}), "Make sure to get the items you want before the shop refreshes!"]
                    }), (0, a.jsx)("div", {
                        className: "maxWidth",
                        style: {
                            marginTop: 20
                        },
                        children: (0, a.jsx)(d.default, {
                            direction: "vertical",
                            size: 20,
                            className: "maxWidth",
                            children: r.shop.items.map((t => (0, a.jsx)(f.default, {
                                id: t.cosmetic.id,
                                name: t.cosmetic.name,
                                image: (0, p.default)({
                                    id: t.cosmetic.id,
                                    type: t.cosmetic.type
                                }),
                                description: t.cosmetic.description,
                                type: t.cosmetic.type,
                                rarity: t.cosmetic.rarity,
                                cost: t.currencyCost,
                                owned: t.owned,
                                tag: t.tag,
                                style: t.cosmetic.style,
                                currentCurrency: o.currency,
                                onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                                blockCharacterPreview: e.blockCharacterPreview
                            }, t.cosmetic.id + "-item")))
                        })
                    })]
                }) : null]
            })
        })
    };
    const M = i.default.div.attrs({
            className: "flex-column"
        })(b || (b = P``)),
        O = i.default.div(j || (j = P`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 32px;
`), v.Fonts.FugazOne),
        I = i.default.div(C || (C = P`
  font-family: ${0};
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`), v.Fonts.SFPro),
        E = i.default.div(k || (k = P`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`))
})), t.register("djNPM", (function(r, n) {
    e(r.exports, "removeCosmosItemShop", (function() {
        return c
    })), e(r.exports, "refetchCosmosItemShop", (function() {
        return l
    })), e(r.exports, "default", (function() {
        return u
    }));
    var o = t("eMRqp"),
        a = t("bKPD8"),
        i = t("iMOcM");
    const s = ["cosmos-item-shop"],
        c = () => {
            a.default.removeQueries(s)
        },
        l = () => a.default.refetchQueries(s);
    var u = () => (0, o.useQuery)(s, (() => (0, i.requestAsPromise)({
        url: "/api/cosmos/shop"
    })))
})), t.register("6Jzz1", (function(r, n) {
    e(r.exports, "BORDER_RADIUS", (function() {
        return y
    })), e(r.exports, "Container", (function() {
        return b
    })), e(r.exports, "PreviewArea", (function() {
        return j
    })), e(r.exports, "PreviewContent", (function() {
        return C
    })), e(r.exports, "default", (function() {
        return w
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("2FDaO"),
        s = t("2PrJL"),
        c = t("6a2jS"),
        l = t("iMOcM"),
        u = t("6BIRj"),
        d = t("53ySl"),
        f = t("a5sZj"),
        p = t("69SUA"),
        h = t("e5CAx");
    let m, g, x, v = e => e;
    const y = 6;
    var w = e => {
        const [t, r, n] = (0, l.useBoolean)(!1), [i, p, m] = (0, l.useBoolean)(!1), g = a.useMemo((() => e.type === c.CosmeticType.sticker ? 30 : 10), [e.type]);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(b, {
                onMouseEnter: p,
                onMouseLeave: m,
                onClick: () => {
                    (0, u.playClickSound)(), r()
                },
                children: [(0, o.jsx)(j, {
                    children: (0, o.jsx)(C, {
                        style: {
                            transform: `scale(${i?1.1:1})`
                        },
                        children: (0, o.jsx)(d.default, {
                            image: e.image,
                            background: (0, f.rarityToBackground)(e.rarity),
                            padding: g
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
            }), (0, o.jsx)(h.default, {
                open: t,
                close: n,
                ...e
            })]
        })
    };
    const b = i.default.div.attrs({
            className: "maxWidth medium-shadow"
        })(m || (m = v`
  border-radius: ${0}px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${0};
  &:last-child {
    margin-bottom: 0px;
  }
`), y, p.Fonts.FugazOne),
        j = i.default.div.attrs({
            className: "maxWidth"
        })(g || (g = v`
  height: 140px;
  overflow: hidden;
`)),
        C = i.default.div.attrs({
            className: "maxAll"
        })(x || (x = v`
  transition: transform 0.25s;
`))
})), t.register("2PrJL", (function(r, n) {
    e(r.exports, "Container", (function() {
        return y
    })), e(r.exports, "Content", (function() {
        return w
    })), e(r.exports, "Title", (function() {
        return b
    })), e(r.exports, "Description", (function() {
        return j
    })), e(r.exports, "default", (function() {
        return v
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("6Jzz1"),
        s = t("a5sZj"),
        c = t("bDJkg"),
        l = t("7v0W8"),
        u = t("lKmIF");
    let d, f, p, h, m, g, x = e => e;
    var v = e => (0, o.jsx)(y, {
        style: {
            background: (0, s.rarityToBackground)(e.rarity)
        },
        children: (0, o.jsxs)(w, {
            children: [(0, o.jsxs)("div", {
                className: "flex-column",
                style: {
                    alignItems: "flex-start"
                },
                children: [e.tag ? (0, o.jsx)(k, {
                    children: e.tag
                }) : null, (0, o.jsx)(b, {
                    children: e.name
                }), (0, o.jsx)(j, {
                    children: e.owned ? "Owned" : (0, c.cosmeticTypeName)(e.type)
                })]
            }), (0, o.jsx)(C, {
                children: e.owned ? null : (0, o.jsx)(l.default, {
                    amount: e.cost
                })
            })]
        })
    });
    const y = a.default.div(d || (d = x`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${0};
  text-transform: uppercase;
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${0}px;
  overflow: hidden;
  line-height: 1;
`), u.default.White, (() => i.BORDER_RADIUS), (() => i.BORDER_RADIUS)),
        w = a.default.div.attrs({
            className: "maxWidth flex vc between"
        })(f || (f = x`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        b = a.default.div(p || (p = x`
  font-size: 24px;
`)),
        j = a.default.div(h || (h = x`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        C = a.default.div(m || (m = x`
  margin-left: 10px;
`)),
        k = a.default.div(g || (g = x`
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
        return u
    }));
    var o = t("hxEiv");
    t("fywoC");
    var a = t("2FDaO"),
        i = t("6L1wG");
    let s, c, l = e => e;
    var u = e => {
        const [t, r] = (0, i.useInViewRef)();
        return (0, o.jsx)(d, {
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
    const d = a.default.div.attrs({
            className: "maxAll flex-center"
        })(s || (s = l`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        f = a.default.img(c || (c = l`
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
            c = (0, o.useState)(null),
            l = c[0],
            u = c[1],
            d = (0, o.useState)(!1),
            f = d[0],
            p = d[1];
        (0, o.useEffect)((function() {
            if (l) {
                var r = new IntersectionObserver((function(t, r) {
                    t.forEach((function(e) {
                        var t = e.isIntersecting;
                        return p(t)
                    })), e(t, r)
                }), t);
                return r.observe(l),
                    function() {
                        r.disconnect()
                    }
            }
        }), [l, e, n, i, s]);
        var h = (0, o.useCallback)((function(e) {
            u(e)
        }), []);
        return [h, f]
    }
})), t.register("e5CAx", (function(r, n) {
    e(r.exports, "default", (function() {
        return m
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("hifxW"),
        s = t("1lU5G"),
        c = t("7v0W8"),
        l = t("iMOcM"),
        u = t("jVQO4"),
        d = t("alREA"),
        f = t("djNPM"),
        p = t("79q1I"),
        h = t("8p0tB");
    var m = e => {
        const [t, r] = a.useState(!1), [n, m] = a.useState(!1), {
            id: g,
            name: x,
            rarity: v,
            type: y,
            description: w,
            style: b
        } = e, j = e.owned || e.currentCurrency < e.cost, C = () => {
            j || t || (r(!0), (0, l.request)({
                url: "/api/cosmos/purchase-item",
                data: {
                    cosmeticId: e.id
                },
                success: () => {
                    (0, h.AnalyticsTrackEvent)({
                        event: "cosmetic_purchased",
                        properties: {
                            id: g,
                            name: x,
                            type: y
                        }
                    }), (0, u.playSound)({
                        path: (0, d.default)("cosmos/cosmeticPurchased.mp3"),
                        volume: .6
                    }), (0, p.invalidateCosmosBasics)(), (0, f.refetchCosmosItemShop)(), m(!0)
                },
                error: t => {
                    (0, l.throwMessageError)({
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
            id: g,
            name: x,
            image: (0, s.default)({
                id: g,
                type: y
            }),
            rarity: v,
            type: y,
            description: w,
            style: b,
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
                    }), (0, o.jsx)(c.default, {
                        amount: e.cost,
                        size: 16,
                        grayscale: j
                    })]
                }),
                ariaLabel: e.owned ? "Owned" : "Purchase",
                disabled: j,
                onClick: C
            }),
            blockCharacterPreview: e.blockCharacterPreview,
            onCosmeticSelectionChanged: e.onCosmeticSelectionChanged
        })
    }
})), t.register("jVQO4", (function(r, n) {
    e(r.exports, "playSound", (function() {
        return i
    })), e(r.exports, "preloadSound", (function() {
        return c
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
        c = e => {
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
})), t.register("8p0tB", (function(r, n) {
    e(r.exports, "AnalyticsTrackEvent", (function() {
        return c
    }));
    var o = t("6fFlL"),
        a = t("iMOcM"),
        i = t("dOsOD"),
        s = t("amvOw");
    const c = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), i.AnalyticsFlags.educatorOnly) && (null === (n = (0, a.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), t.register("lqbc4", (function(r, n) {
    e(r.exports, "useWillUnmount", (function() {
        return a
    }));
    var o = t("fywoC");

    function a(e) {
        (0, o.useEffect)((function() {
            return e
        }), [])
    }
})), t.register("7wjlQ", (function(r, n) {
    e(r.exports, "Pack", (function() {
        return w
    })), e(r.exports, "PackImage", (function() {
        return P
    }));
    var o = t("hxEiv"),
        a = t("2FDaO"),
        i = t("7v0W8"),
        s = t("69SUA"),
        c = t("iMOcM"),
        l = t("fywoC"),
        u = t("6edaj"),
        d = t("1nlzi"),
        f = t("kyvf1"),
        p = t("lKmIF");
    let h, m, g, x, v, y = e => e;
    const w = e => {
            const [t, r, n] = (0, c.useBoolean)(!1), a = (0, l.useMemo)((() => `radial-gradient(circle, ${(0,u.lighten)(.25,e.color)} 0%, ${e.color} 100%)`), [e.color, t]);
            return (0, o.jsx)(b, {
                to: e.redirect ? `/rewards/pack/${e.id}` : void 0,
                onClick: e.handleClick,
                children: (0, o.jsx)(j, {
                    onMouseEnter: r,
                    onMouseLeave: n,
                    background: a,
                    children: (0, o.jsxs)(C, {
                        children: [(0, o.jsx)(P, {
                            imageUrl: (0, d.getPackImage)(e.id),
                            hovering: t,
                            draggable: !1
                        }), (0, o.jsx)(k, {
                            children: e.name
                        }), (0, o.jsx)(i.default, {
                            amount: e.cost,
                            size: 15
                        })]
                    })
                })
            })
        },
        b = (0, a.default)(f.default)(h || (h = y`
  text-decoration: none;
  color: ${0} !important;
`), p.default.White),
        j = a.default.div.attrs({
            className: "medium-shadow"
        })(m || (m = y`
  background: ${0};

  border-radius: 8px;
  width: 280px;
  font-family: ${0};
  text-transform: uppercase;
  width: ${0}px;
  position: relative;
  cursor: pointer;
`), (e => e.background), s.Fonts.FugazOne, (() => 280)),
        C = a.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(g || (g = y`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`)),
        k = a.default.div(x || (x = y`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`)),
        P = a.default.div(v || (v = y`
  width: 195px;
  height: 333px;
  transform: rotate(
      ${0}deg
    )
    scale(${0});
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5))
    brightness(${0});
  transition: transform 0.22s ease-out, filter 0.22s ease-out;
  background-image: url(${0});
  background-size: cover;
`), (e => e.hovering ? 0 : 3), (e => e.hovering ? 1.02 : .98), (e => e.hovering ? 1.2 : 1), (e => e.imageUrl))
})), t.register("1nlzi", (function(r, n) {
    e(r.exports, "getPackImage", (function() {
        return a
    }));
    var o = t("alREA");
    const a = e => (0, o.default)("cosmos/packs/" + e + ".png")
})), t.register("lSFLh", (function(r, n) {
    e(r.exports, "default", (function() {
        return p
    }));
    var o = t("hxEiv"),
        a = t("fywoC"),
        i = t("7a91g"),
        s = t("2FDaO"),
        c = t("69SUA"),
        l = t("djNPM");
    let u;
    const d = (e, t) => {
            const r = e % t;
            return [Math.floor(e / t), r]
        },
        f = e => {
            const [t, r] = d(e, 86400), [n, o] = d(r, 3600), [a, i] = d(o, 60);
            let s = "";
            return t && (s += `${t}d `), (n || t) && (s += `${n}h `), s += `${a}m `, s += `${i}s`, s
        };
    var p = e => {
        const [t, r] = a.useState(Math.floor(Date.now() / 1e3) - e.serverNowTime), [n, s] = a.useState(-999999);
        a.useEffect((() => {
            r(Math.floor(Date.now() / 1e3) - e.serverNowTime), c()
        }), [e.serverNowTime]);
        const c = () => {
            const r = e.shopRefreshTime - (Math.floor(Date.now() / 1e3) - t);
            s(r)
        };
        return a.useEffect((() => {
            c()
        }), []), a.useEffect((() => {
            n < 0 && n > -999 && (0, l.refetchCosmosItemShop)()
        }), [n]), (0, i.useIntervalWhen)((() => {
            c()
        }), 1e3), n < 0 ? null : (0, o.jsx)(h, {
            children: f(n)
        })
    };
    const h = s.default.div(u || (u = (e => e)`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${0};
  color: rgba(255, 255, 255, 0.9);
`), c.Fonts.FugazOne)
})), t.register("7a91g", (function(r, n) {
    e(r.exports, "useIntervalWhen", (function() {
        return a
    }));
    var o = t("fywoC");

    function a(e, t, r, n) {
        void 0 === t && (t = 0), void 0 === r && (r = !0), void 0 === n && (n = !1);
        var a = (0, o.useRef)();

        function i() {
            a.current && a.current()
        }(0, o.useEffect)((function() {
            a.current = e
        })), (0, o.useEffect)((function() {
            if ("undefined" != typeof window) {
                if (r) {
                    n && i();
                    var e = window.setInterval(i, t);
                    return function() {
                        window.clearInterval(e)
                    }
                }
            } else console.warn("useIntervalWhen: window is undefined.")
        }), [r, t])
    }
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
    var c = {
            position: "relative"
        },
        l = function(e) {
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
                        style: c,
                        ref: this.setRef
                    })
                }
            }]), t
        }(a.Component);
    e.exports.default = l
})), t.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, a, t),
            s = i.elementCount,
            c = i.colors,
            l = i.width,
            u = i.height,
            d = i.angle,
            f = i.spread,
            p = i.startVelocity,
            h = i.decay,
            m = i.duration,
            g = i.random,
            x = r(e, s, c, l, u),
            v = x.map((function(e) {
                return {
                    element: e,
                    physics: n(d, f, p, g)
                }
            }));
        return o(e, v, h, m)
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
                var c = o === s ? 0 : (s - o) / n;
                t.forEach((function(e) {
                    return function(e, t, r) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= r, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var n = e.physics,
                            o = n.x,
                            a = n.y,
                            i = n.tiltAngle,
                            s = n.wobble,
                            c = "translate3d(" + (o + 10 * Math.cos(s)) + "px, " + (a + 10 * Math.sin(s)) + "px, 0) rotate3d(1, 1, 1, " + i + "rad)";
                        e.element.style.transform = c, e.element.style.opacity = 1 - t
                    }(e, c, r)
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