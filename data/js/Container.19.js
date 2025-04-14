function e(e, t, a, i) {
    Object.defineProperty(e, t, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("iGJex", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        titleFont: a("69SUA").Fonts.FugazOne
    }
})), a.register("bLpUD", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var r = a("fywoC"),
        n = a("2L4Kr"),
        o = new Map([
            ["Win", "Meta"],
            ["Scroll", "ScrollLock"],
            ["Spacebar", " "],
            ["Down", "ArrowDown"],
            ["Left", "ArrowLeft"],
            ["Right", "ArrowRight"],
            ["Up", "ArrowUp"],
            ["Del", "Delete"],
            ["Crsel", "CrSel"],
            ["Exsel", "ExSel"],
            ["Apps", "ContextMenu"],
            ["Esc", "Escape"],
            ["Decimal", "."],
            ["Multiply", "*"],
            ["Add", "+"],
            ["Subtract", "-"],
            ["Divide", "/"]
        ]),
        s = function(e, t) {
            var a = (0, n.default)(e),
                i = (0, n.default)(t);
            (0, r.useEffect)((function() {
                var e = function(e) {
                    var t;
                    ! function(e) {
                        if (o.has(e.key)) {
                            var t = o.get(e.key);
                            Object.defineProperty(e, "key", {
                                get: function() {
                                    return t
                                }
                            })
                        }
                    }(e), (t = a.current, Array.isArray(t) ? t : [t]).includes(e.key) && i.current(e)
                };
                return window.addEventListener("keydown", e),
                    function() {
                        window.removeEventListener("keydown", e)
                    }
            }), [])
        }
})), a.register("2L4Kr", (function(t, i) {
    e(t.exports, "default", (function() {
        return o
    }));
    var r = a("fywoC"),
        n = a("d9lZV"),
        o = function(e) {
            var t = (0, r.useRef)(e);
            return (0, n.default)((function() {
                t.current = e
            })), t
        }
})), a.register("d9lZV", (function(t, i) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = a("fywoC").useLayoutEffect
})), a.register("17sBx", (function(t, i) {
    e(t.exports, "FreePlanType", (function() {
        return n
    })), e(t.exports, "getFreePlanType", (function() {
        return s
    })), e(t.exports, "getLimitedGameLimit", (function() {
        return l
    }));
    var r = a("hrYih");
    let n;
    var o;
    (o = n || (n = {})).limitedModes = "limitedModes", o.limitedGames = "limitedGames";
    const s = () => "game-limit" === r.default.getFeatureFlag("game-limit-free-plan-secondary") ? n.limitedGames : n.limitedModes,
        l = () => 5
})), a.register("jFM7l", (function(t, i) {
    e(t.exports, "default", (function() {
        return M
    }));
    var r = a("hxEiv"),
        n = a("6vbUb"),
        o = a("fywoC"),
        s = a("2FDaO"),
        l = a("6LAmO"),
        d = a("56tQE"),
        c = a("bLpUD"),
        u = a("6WS0O"),
        f = a("iGJex"),
        p = a("lKmIF");
    let h, m, x, g, y, v, w, b, j, k = e => e;
    var M = e => {
        const [t, a] = o.useState(0), i = o.useRef(!1), n = o.useRef(null), [s] = (0, d.default)(n), f = o.useMemo((() => e.verticalList ? 0 : t * l.EXPERIENCE_FULL_WIDTH * -1 + u.default.sideMargin), [t, e.verticalList]), p = o.useMemo((() => !(t <= 0)), [t]);
        (0, c.default)(["ArrowLeft", "ArrowRight"], (e => {
            i.current && ("ArrowLeft" === e.key && m(), "ArrowRight" === e.key && x())
        }));
        const h = o.useMemo((() => {
                if (t + 1 === e.list.items.length) return !1;
                const a = (s - u.default.sideMargin) / l.EXPERIENCE_FULL_WIDTH;
                return !(t >= e.list.items.length - a)
            }), [s, t, e.list.items.length]),
            m = () => {
                p && a(Math.max(0, t - 1))
            },
            x = () => {
                h && a(t + 1)
            };
        return (0, r.jsxs)(E, {
            onMouseEnter: () => {
                i.current = !0
            },
            onMouseLeave: () => {
                i.current = !1
            },
            children: [e.hideListName ? null : (0, r.jsx)(F, {
                children: e.list.name
            }), (0, r.jsxs)(P, {
                children: [(0, r.jsx)(N, {
                    animate: {
                        x: f
                    },
                    initial: {
                        x: e.verticalList ? 0 : u.default.sideMargin
                    },
                    transition: {
                        duration: .3,
                        ease: "easeOut"
                    },
                    style: e.verticalList ? {
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fill, ${l.EXPERIENCE_WIDTH}px)`,
                        justifyContent: "center",
                        gap: 20,
                        margin: "0px 25px"
                    } : {
                        gap: l.MARGIN_RIGHT
                    },
                    ref: n,
                    children: e.list.items.map((t => (0, r.jsx)(l.default, {
                        name: t.name,
                        tagline: t.tagline,
                        image: t.imageUrl,
                        currentlySelected: !!e.forceAllSelected || e.currentlySelectedExperienceId === t._id,
                        onSelect: e.onExperienceSelected ? () => e.onExperienceSelected(t._id) : null,
                        isProExperience: t.isPremiumExperience,
                        noShadowOnContainer: e.noShadowOnItems,
                        forcePremiumBadge: e.forcePremiumBadge,
                        tag: t.tag
                    }, `list-${e.list._id}-${t._id}`)))
                }), e.verticalList ? null : (0, r.jsxs)(C, {
                    children: [(0, r.jsx)(A, {
                        animate: {
                            opacity: p ? 1 : 0
                        },
                        initial: {
                            opacity: 0
                        },
                        onClick: m,
                        children: (0, r.jsx)($, {
                            style: {
                                cursor: p ? "pointer" : "auto"
                            },
                            children: (0, r.jsx)("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    }), (0, r.jsx)(O, {
                        animate: {
                            opacity: h ? 1 : 0
                        },
                        initial: {
                            opacity: 0
                        },
                        onClick: x,
                        children: (0, r.jsx)($, {
                            style: {
                                cursor: h ? "pointer" : "auto"
                            },
                            children: (0, r.jsx)("i", {
                                className: "fas fa-chevron-right"
                            })
                        })
                    })]
                })]
            })]
        })
    };
    const E = s.default.div.attrs({
            className: "maxWidth"
        })(h || (h = k``)),
        F = s.default.div(m || (m = k`
  font-family: ${0};
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`), f.default.titleFont),
        P = s.default.div.attrs({
            className: "maxWidth"
        })(x || (x = k`
  position: relative;
  overflow: hidden;
`)),
        N = (0, s.default)(n.motion.div).attrs({
            className: "flex"
        })(g || (g = k``)),
        C = s.default.div.attrs({
            className: "maxAll flex vc between"
        })(y || (y = k`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`)),
        S = (0, s.default)(n.motion.div).attrs({
            className: "flex-center maxHeight"
        })(v || (v = k`
  width: 60px;
  line-height: 1;
  color: ${0};
`), p.default.White),
        A = (0, s.default)(S)(w || (w = k`
  background: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`)),
        O = (0, s.default)(S)(b || (b = k`
  background: linear-gradient(
    to left,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`)),
        $ = s.default.div.attrs({
            className: "flex-center"
        })(j || (j = k`
  font-size: 32px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`))
})), a.register("6LAmO", (function(t, i) {
    e(t.exports, "EXPERIENCE_WIDTH", (function() {
        return j
    })), e(t.exports, "MARGIN_RIGHT", (function() {
        return k
    })), e(t.exports, "EXPERIENCE_FULL_WIDTH", (function() {
        return M
    })), e(t.exports, "default", (function() {
        return F
    }));
    var r = a("hxEiv"),
        n = a("lKmIF"),
        o = a("69SUA"),
        s = a("iMOcM"),
        l = a("6vbUb"),
        d = a("fywoC"),
        c = a("2FDaO"),
        u = a("iGJex"),
        f = a("17sBx");
    let p, h, m, x, g, y, v, w, b = e => e;
    const j = 350,
        k = 10,
        M = j + k,
        E = .2;
    var F = e => {
        const [t, a, i] = (0, s.useBoolean)(!1), o = (0, f.getFreePlanType)(), l = d.useMemo((() => e.isProExperience && !(0, s.isStudent)() && o === f.FreePlanType.limitedModes && !(0, s.isUpgraded)()), [e.isProExperience, o]);
        return (0, r.jsxs)(P, {
            onMouseEnter: a,
            onMouseLeave: i,
            style: {
                backgroundImage: `url('${e.image}')`,
                borderColor: e.currentlySelected ? "#fdd835" : n.default.White
            },
            onClick: e.onSelect,
            className: e.noShadowOnContainer ? "" : "light-shadow",
            children: [e.forcePremiumBadge || l ? (0, r.jsx)(N, {
                animate: {
                    opacity: t ? 0 : 1
                },
                initial: {
                    opacity: 1
                },
                transition: {
                    duration: E
                },
                children: (0, r.jsx)(C, {})
            }) : (0, r.jsx)("div", {}), (0, r.jsxs)(S, {
                children: [l ? (0, r.jsx)(A, {
                    animate: {
                        opacity: t ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: E
                    },
                    children: "Gimkit Pro Exclusive"
                }) : null, !l && e.tag ? (0, r.jsx)(O, {
                    animate: {
                        opacity: t ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: E
                    },
                    children: e.tag
                }) : null, (0, r.jsx)($, {
                    children: e.name
                }), (0, r.jsx)(I, {
                    animate: {
                        height: t ? "auto" : 0
                    },
                    initial: {
                        height: 0
                    },
                    transition: {
                        duration: E
                    },
                    children: e.tagline
                })]
            })]
        })
    };
    const P = c.default.div.attrs({
            className: "flex flex-column between"
        })(p || (p = b`
  border-width: 4px;
  border-style: solid;
  width: ${0}px;
  height: 180px;
  border-radius: 4px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.3s;
`), j),
        N = (0, c.default)(l.motion.div).attrs({
            className: "maxWidth"
        })(h || (h = b`
  padding: 10px 15px;
`)),
        C = c.default.img.attrs({
            src: "/client/img/pro/star.svg"
        })(m || (m = b`
  height: 20px;
`)),
        S = c.default.div.attrs({
            className: "maxWidth flex-column"
        })(x || (x = b`
  padding: 10px 15px;
  background: linear-gradient(
    to top,
    hsla(0, 0%, 0%, 0.69) 0%,
    hsla(0, 0%, 0%, 0.681) 8.1%,
    hsla(0, 0%, 0%, 0.656) 15.5%,
    hsla(0, 0%, 0%, 0.618) 22.4%,
    hsla(0, 0%, 0%, 0.569) 28.9%,
    hsla(0, 0%, 0%, 0.511) 35%,
    hsla(0, 0%, 0%, 0.447) 41%,
    hsla(0, 0%, 0%, 0.379) 46.7%,
    hsla(0, 0%, 0%, 0.311) 52.5%,
    hsla(0, 0%, 0%, 0.243) 58.3%,
    hsla(0, 0%, 0%, 0.179) 64.3%,
    hsla(0, 0%, 0%, 0.121) 70.5%,
    hsla(0, 0%, 0%, 0.072) 77.1%,
    hsla(0, 0%, 0%, 0.034) 84.2%,
    hsla(0, 0%, 0%, 0.009) 91.8%,
    hsla(0, 0%, 0%, 0) 100%
  );
  overflow: hidden;
  align-items: flex-start;
`)),
        A = (0, c.default)(l.motion.div)(g || (g = b`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${0};
  color: ${0};
`), u.default.titleFont, n.default.Black, n.default.White),
        O = (0, c.default)(l.motion.div)(y || (y = b`
  font-family: ${0};
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`), u.default.titleFont),
        $ = c.default.div(v || (v = b`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${0};
  color: ${0};
`), u.default.titleFont, n.default.Black, n.default.White),
        I = (0, c.default)(l.motion.div)(w || (w = b`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${0};
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${0};
`), n.default.Black, o.Fonts.ProductSans)
})), a.register("8j47p", (function(t, i) {
    e(t.exports, "PADDING", (function() {
        return w
    })), e(t.exports, "default", (function() {
        return b
    }));
    var r = a("hxEiv"),
        n = a("fBuQJ"),
        o = a("lKmIF"),
        s = a("69SUA"),
        l = a("iMOcM"),
        d = a("fywoC"),
        c = a("2FDaO"),
        u = a("6WS0O"),
        f = a("i25FO"),
        p = a("3VrfV"),
        h = a("adidf"),
        m = a("amvOw"),
        x = a("17sBx");
    let g, y, v = e => e;
    const w = u.default.sideMargin;
    var b = e => {
        d.useEffect((() => {
            e.visible && e.showModes && (0, l.loadFont)("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        }), [e.visible, e.showModes]), d.useEffect((() => {
            e.visible && (0, m.TrackPostHogEvent)({
                event: "upgrade modal open",
                properties: {
                    reason: e.id
                }
            })
        }), [e.visible, e.id]);
        const t = (0, l.getUser)();
        if (!t) return null;
        const a = (0, x.getFreePlanType)(),
            i = e.showModes && a === x.FreePlanType.limitedModes;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(j, {}), (0, r.jsx)(n.default, {
                className: "upgrade-modal",
                footer: null,
                width: 850,
                style: {
                    top: 30
                },
                bodyStyle: {
                    padding: "0px",
                    background: o.default.Snow
                },
                open: e.visible,
                onCancel: e.close,
                closable: !1,
                children: (0, r.jsxs)(k, {
                    children: [(0, r.jsx)(h.default, {
                        user: t,
                        close: e.close,
                        copy: e.copy,
                        showingModes: i
                    }), i ? (0, r.jsx)(p.default, {}) : null, (0, r.jsx)(f.default, {
                        showingModes: i
                    })]
                })
            })]
        })
    };
    const j = (0, c.createGlobalStyle)(g || (g = v`
  .upgrade-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden !important;
    padding: 0px !important;
  }
`)),
        k = c.default.div.attrs({
            className: "maxWidth"
        })(y || (y = v`
  color: ${0};
  font-family: ${0};
`), o.default.Black, s.Fonts.SFPro)
})), a.register("i25FO", (function(t, i) {
    e(t.exports, "default", (function() {
        return b
    }));
    var r = a("hxEiv"),
        n = a("aYYSA"),
        o = a("93yIm"),
        s = a("fC6cp"),
        l = a("lKmIF"),
        d = a("b1oE9"),
        c = a("kyvf1"),
        u = a("iMOcM"),
        f = a("fywoC"),
        p = a("2FDaO"),
        h = a("9kZfj"),
        m = a("hSDTW"),
        x = a("44o2v");
    let g, y, v, w = e => e;
    var b = e => {
        const [t, a] = f.useState(!1), [i, l] = f.useState(!1);
        return (0, r.jsxs)("div", {
            className: "flex flex-column vc",
            style: {
                marginTop: e.showingModes ? 25 : 20,
                paddingBottom: 30
            },
            children: [(0, r.jsx)(c.default, {
                to: d.CHECKOUT,
                children: (0, r.jsx)(o.default, {
                    type: "primary",
                    size: "large",
                    icon: (0, r.jsx)(n.default, {}),
                    style: {
                        width: 380,
                        height: 70
                    },
                    children: (0, u.isUpgraded)() ? "Upgrade to Gimkit Pro early" : "Upgrade to Gimkit Pro"
                })
            }), (0, h.onlyOfferAnnualUpgrade)() ? (0, r.jsx)(j, {
                children: "$59.88 a year - works out to $4.99 a month"
            }) : null, (0, r.jsx)(s.default, {
                style: {
                    margin: "26px 0px"
                }
            }), (0, r.jsxs)("div", {
                className: "flex vc",
                children: [(0, r.jsx)(k, {
                    to: d.GROUP_PRICING,
                    children: "Group license pricing"
                }), (0, r.jsx)(M, {}), (0, r.jsx)(k, {
                    onClick: () => l(!0),
                    children: "Pay For Me Link"
                }), !t && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(M, {}), (0, r.jsx)(k, {
                        onClick: () => a(!0),
                        children: "FAQ"
                    })]
                })]
            }), t && (0, r.jsx)(m.default, {}), (0, r.jsx)(x.default, {
                showPayForMeModal: i,
                onCancel: () => l(!1)
            })]
        })
    };
    const j = p.default.div(g || (g = w`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`)),
        k = (0, p.default)(c.default)(y || (y = w`
  font-size: 16px;
  display: block;
  color: ${0};
  text-decoration: underline;
`), l.default.Black),
        M = p.default.i.attrs({
            className: "fas fa-circle"
        })(v || (v = w`
  margin: 0px 12px;
  font-size: 10px;
`))
})), a.register("hSDTW", (function(t, i) {
    e(t.exports, "default", (function() {
        return g
    }));
    var r = a("hxEiv"),
        n = a("fC6cp"),
        o = a("lKmIF"),
        s = a("69SUA");
    a("fywoC");
    var l = a("2FDaO"),
        d = a("8j47p"),
        c = a("17sBx");
    let u, f, p, h, m = e => e;
    const x = [{
        question: "What happens if I pay now and my school pays later?",
        answer: (0, r.jsxs)("span", {
            children: ["If your school purchases a group license and you've already purchased Gimkit Pro, you’ll get refunded for your unused time.", " ", (0, r.jsx)("b", {
                children: "So if you purchase a year of Gimkit Pro today and your school upgrades next month, we’d refund you $54.89."
            }), " ", "That refund happens automatically. No need to contact support!"]
        })
    }, {
        question: "What's included with Gimkit Pro?",
        answer: (0, r.jsxs)("span", {
            children: [(0, c.getFreePlanType)() === c.FreePlanType.limitedModes ? "Unrestricted access to all modes, including Gimkit Pro Exclusives." : "No game limits, host as many games as you'd like!", " ", "You'll also be able to create assignments (play Gimkit asynchronously) and upload audio + images to your questions."]
        })
    }, {
        question: "What's your refund policy?",
        answer: (0, r.jsxs)("span", {
            children: ["Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with your subscription for any reason, just contact us and we’ll take care of you.", " ", (0, r.jsx)("a", {
                href: "https://www.notion.so/gimkit/A-fair-refund-policy-a1688f61330b49a495a48bd0fd08697b",
                target: "_blank",
                children: "Check out our full refund policy here."
            })]
        })
    }];
    var g = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(n.default, {
            style: {
                margin: "26px 0px"
            }
        }), (0, r.jsx)(y, {
            children: x.map((e => (0, r.jsxs)(v, {
                children: [(0, r.jsx)(w, {
                    children: e.question
                }), (0, r.jsx)(b, {
                    children: e.answer
                })]
            }, e.question)))
        })]
    });
    const y = l.default.div.attrs({
            className: "maxWidth"
        })(u || (u = m`
  padding: 0px ${0}px;
`), (() => d.PADDING)),
        v = l.default.div(f || (f = m`
  margin-bottom: 15px;
  background: ${0};
  padding: 30px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${0};
  border-width: 2px;
  &:last-child {
    margin-bottom: 0px;
  }
`), o.default.White, o.default.BorderGray),
        w = l.default.div(p || (p = m`
  font-size: 21px;
  font-weight: ${0};
`), s.FontWeights.Bold),
        b = l.default.div(h || (h = m`
  font-size: 16px;
  margin-top: 5px;
`))
})), a.register("44o2v", (function(i, r) {
    e(i.exports, "default", (function() {
        return M
    }));
    var n = a("hxEiv"),
        o = a("fywoC"),
        s = a("93yIm"),
        l = a("fC6cp"),
        d = a("b9Zw0"),
        c = a("cy4A6"),
        u = a("fBuQJ"),
        f = a("gHmyG"),
        p = a("iMOcM"),
        h = a("dhxiD"),
        m = a("46bRO"),
        x = a("2FDaO"),
        g = a("lKmIF"),
        y = a("69SUA");
    let v, w, b, j, k = e => e;
    var M = e => {
        const [a, i] = t(o).useState(!0), [r, x] = t(o).useState(null), [g, v] = t(o).useState(null), w = () => `${(0,p.getDomain)()}/pay-for-me/${g}`;
        return t(o).useEffect((() => {
            (0, p.request)({
                method: "GET",
                url: "/api/billing/pay-for-me-link",
                success: e => {
                    v(e)
                },
                error: e => {
                    x(e), (0, p.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error connecting to our server",
                            content: "An error ocurred while connecting to our server. Please try again later."
                        }
                    })
                },
                both: () => i(!1)
            })
        }), []), (0, n.jsx)(u.default, {
            open: e.showPayForMeModal,
            onCancel: e.onCancel,
            footer: null,
            closable: !1,
            width: 690,
            bodyStyle: {
                padding: 0
            },
            children: a ? (0, n.jsx)("div", {
                style: {
                    height: 361
                },
                className: "flex maxWidth maxHeight hc vc",
                children: (0, n.jsx)(f.default, {
                    size: "large"
                })
            }) : (0, n.jsxs)(E, {
                children: [(0, n.jsx)(N, {
                    onClick: e.onCancel
                }), (0, n.jsxs)(F, {
                    children: [(0, n.jsx)("span", {
                        style: {
                            fontWeight: y.FontWeights.UltraBold
                        },
                        children: "Pay For Me"
                    }), " ", "link"]
                }), (0, n.jsxs)(P, {
                    children: ["Send this link to someone to allow them to pay for your", " ", m.COMPANY_NAME, " Pro subscription. Once they pay, you'll get one full year of ", m.COMPANY_NAME, " Pro and we'll make sure autorenew is off so they aren't charged again.", (0, n.jsx)("br", {}), " ", (0, n.jsx)("br", {}), "One more thing: once they pay for your subscription, we'll send you an email letting you know!"]
                }), (0, n.jsx)(l.default, {}), !r && (0, n.jsxs)("div", {
                    className: "flex",
                    children: [(0, n.jsx)(d.default, {
                        value: w(),
                        size: "large",
                        readOnly: !0
                    }), (0, n.jsx)(s.default, {
                        size: "large",
                        type: "primary",
                        style: {
                            marginLeft: 10
                        },
                        onClick: () => {
                            t(h)(w()), c.default.success("Pay For Me link copied to clipboard!")
                        },
                        children: "Copy Link"
                    })]
                })]
            })
        })
    };
    const E = x.default.div.attrs({
            className: "maxWidth"
        })(v || (v = k`
  color: ${0};
  font-family: ${0};
  padding: 30px;
`), g.default.Black, y.Fonts.SFPro),
        F = x.default.div(w || (w = k`
  font-size: 32px;
`)),
        P = x.default.div(b || (b = k`
  font-size: 17px;
  margin-top: 14px;
`)),
        N = x.default.i.attrs({
            className: "fal fa-times"
        })(j || (j = k`
  position: absolute;
  font-size: 24px;
  top: 30px;
  right: 30px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`))
})), a.register("3VrfV", (function(t, i) {
    e(t.exports, "default", (function() {
        return f
    }));
    var r = a("hxEiv"),
        n = a("iMOcM"),
        o = a("fywoC"),
        s = a("2FDaO"),
        l = a("jFM7l"),
        d = a("adidf");
    let c;
    const u = {
        Classic: 1
    };
    var f = () => {
        const [e, t] = o.useState([]);
        return o.useEffect((() => {
            (0, n.request)({
                url: "/api/experiences",
                data: {
                    mode: "liveGame"
                },
                cacheKey: "EXPERIENCES",
                success: e => {
                    let a = [];
                    const i = [];
                    e.forEach((e => {
                        e.items.forEach((e => {
                            e.isPremiumExperience && (i.includes(e._id) || (a.push({
                                ...e,
                                isPremiumExperience: !0
                            }), i.push(e._id)))
                        }))
                    })), Object.keys(u).forEach((e => {
                        const t = u[e],
                            i = a.find((t => t.name === e));
                        i && (a = a.filter((t => t.name !== e)), a.splice(t, 0, i))
                    })), t(a)
                }
            })
        }), []), e.length ? (0, r.jsx)(p, {
            children: (0, r.jsx)(l.default, {
                list: {
                    _id: "_",
                    name: "_",
                    items: e
                },
                hideListName: !0,
                noShadowOnItems: !0,
                forceAllSelected: !0,
                forcePremiumBadge: !0
            })
        }) : (0, r.jsx)(p, {
            children: (0, r.jsx)("div", {
                style: {
                    height: 180
                }
            })
        })
    };
    const p = s.default.div.attrs({
        className: "maxWidth"
    })(c || (c = (e => e)`
  margin-top: ${0}px;
`), (() => 25 - d.BOTTOM_PADDING))
})), a.register("adidf", (function(t, i) {
    e(t.exports, "BOTTOM_PADDING", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return y
    }));
    var r = a("hxEiv"),
        n = a("lKmIF"),
        o = a("69SUA"),
        s = a("iMOcM");
    a("fywoC");
    var l = a("2FDaO"),
        d = a("8j47p"),
        c = a("17sBx");
    let u, f, p, h, m, x = e => e;
    const g = 180;
    var y = e => {
        const {
            copy: t
        } = e;
        return (0, r.jsxs)(v, {
            background: e.showingModes ? "#0A2540" : "transparent",
            color: e.showingModes ? n.default.White : n.default.Black,
            bottomPadding: e.showingModes ? g : 0,
            maskImage: !!e.showingModes,
            children: [(0, r.jsx)(w, {
                onClick: e.close
            }), (0, r.jsxs)(b, {
                children: [(0, r.jsx)(j, {
                    children: t && t.title ? t.title : (0, s.isUpgraded)() ? (0, r.jsx)(r.Fragment, {
                        children: "Your trial ends soon."
                    }) : (0, c.getFreePlanType)() === c.FreePlanType.limitedGames ? (0, r.jsx)(r.Fragment, {
                        children: "Upgrade to host unlimited games"
                    }) : (0, r.jsx)("div", {
                        style: {
                            fontSize: 40,
                            marginTop: 30
                        },
                        children: "Get all game modes for $4.99 a month."
                    })
                }), (0, r.jsx)(k, {
                    style: {
                        marginTop: e.showingModes ? 10 : 5
                    },
                    children: (() => {
                        if (t && t.description) return t.description;
                        const e = (0, c.getFreePlanType)(),
                            a = e === c.FreePlanType.limitedModes ? "a few game modes that rotate every few weeks" : `host ${(0,c.getLimitedGameLimit)()} games per month`;
                        return (0, r.jsxs)("div", {
                            className: "maxWidth",
                            style: {
                                textAlign: "left"
                            },
                            children: [(0, s.isUpgraded)() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${a}.` : `You're on the free version of Gimkit, which limits you to ${a}.`, (0, r.jsx)("br", {}), " ", (0, r.jsx)("br", {}), e === c.FreePlanType.limitedModes ? "Want access to every single mode?" : "Want to host unlimited games?", " ", "Upgrade to Gimkit Pro! It’s just $4.99 a month and you’ll be helping support us, an independent small business.", e === c.FreePlanType.limitedModes ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("br", {}), " ", (0, r.jsx)("br", {}), "Upgrade to get access to these game modes and more:"]
                            }) : null]
                        })
                    })()
                })]
            })]
        })
    };
    const v = l.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(u || (u = x`
  padding: ${0}px 0px;
  padding-top: 30px;
  background: ${0};
  color: ${0};
  text-align: center;
  padding-bottom: ${0}px;
  ${0}
`), (() => d.PADDING), (e => e.background), (e => e.color), (e => e.bottomPadding), (e => e.maskImage ? `mask-image: linear-gradient(\n    to bottom,\n    ${e.background} 50%,\n    transparent 100%);` : "")),
        w = l.default.i.attrs({
            className: "fal fa-times"
        })(f || (f = x`
  position: absolute;
  font-size: 24px;
  top: 25px;
  right: ${0}px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`), (() => d.PADDING)),
        b = l.default.div.attrs({
            className: "maxWidth"
        })(p || (p = x`
  padding: 0px ${0}px;
`), (() => d.PADDING)),
        j = l.default.div(h || (h = x`
  font-size: 42px;
  font-weight: ${0};
`), o.FontWeights.UltraBold),
        k = l.default.div(m || (m = x`
  font-size: 20px;
`))
})), a.register("hKWVS", (function(t, i) {
    e(t.exports, "default", (function() {
        return d
    }));
    var r = a("dnh3u"),
        n = a("fywoC"),
        o = a("7rAu2"),
        s = a("dwKuN"),
        l = function(e, t) {
            return n.createElement(s.default, (0, r.default)((0, r.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "ReadOutlined";
    var d = n.forwardRef(l)
})), a.register("7rAu2", (function(t, a) {
    e(t.exports, "default", (function() {
        return i
    }));
    var i = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"
                }
            }]
        },
        name: "read",
        theme: "outlined"
    }
}));