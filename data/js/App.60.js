function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("iEbZz", (function(t, r) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return C
    }));
    var o = n("hxEiv");
    n("fywoC");
    var i = n("iMOcM"),
        s = n("6HErB"),
        c = n("dhtBz"),
        l = n("cnKYR"),
        u = n("7uhUF"),
        f = n("9yFzx"),
        d = n("fC6cp"),
        p = n("8Odwy"),
        g = n("2FDaO"),
        m = n("lKmIF"),
        v = n("69SUA"),
        h = n("cHCps");
    let x, y, w = e => e;
    const b = ["Payment with purchase order", "Payment with credit/debit card", "Group admin panel", "Discounted pricing"];
    var C = () => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(i.Title, {
            title: "Group Pricing"
        }), (0, o.jsxs)(j, {
            children: [(0, o.jsx)(h.default, {
                includeSpacer: !0
            }), (0, o.jsxs)(O, {
                style: {
                    maxWidth: 700
                },
                children: [(0, o.jsx)(u.default, {}), (0, o.jsx)(s.default, {}), (0, o.jsx)("div", {
                    style: {
                        height: 20
                    }
                }), (0, o.jsx)(f.default, {
                    features: b.map((e => ({
                        good: !0,
                        text: e
                    })))
                }), (0, o.jsx)("div", {
                    style: {
                        height: 20
                    }
                }), (0, o.jsx)(d.default, {
                    children: (0, o.jsx)("div", {
                        style: {
                            fontSize: 23
                        },
                        children: "Choose a plan to get a quote"
                    })
                }), (0, o.jsx)(c.default, {
                    plan: l.SchoolGroup,
                    size: "large"
                }), (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                }), (0, o.jsx)(c.default, {
                    plan: l.DepartmentGroup,
                    size: "small"
                }), (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                }), (0, o.jsxs)(d.default, {
                    children: [" ", (0, o.jsx)("div", {
                        style: {
                            fontSize: 23
                        },
                        children: "Have some more questions?"
                    })]
                }), (0, o.jsx)(p.default, {}), (0, o.jsx)("div", {
                    style: {
                        height: 40
                    }
                })]
            })]
        })]
    });
    const j = g.default.div.attrs({
            className: "flex-column vc maxWidth"
        })(x || (x = w`
  background: ${0};
  font-family: ${0};
  color: ${0};
`), m.default.Snow, v.Fonts.SFPro, m.default.Black),
        O = g.default.div(y || (y = w`
  width: 90%;
  max-width: 1000px;
`))
})), n.register("6HErB", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("2FDaO"),
        i = n("69SUA"),
        s = n("7ECC6"),
        c = n("lKmIF");
    let l;
    const u = ["Simple and transparent pricing.", "No quote forms asking a million things.", "No calls with the sales team."];
    var f = () => (0, a.jsx)(s.default, {
        style: {
            color: c.default.Black,
            textAlign: "left"
        },
        children: u.map((e => (0, a.jsx)(d, {
            children: e
        }, e)))
    });
    const d = o.default.div(l || (l = (e => e)`
  font-size: 23px;
  font-weight: ${0};
`), i.FontWeights.Bold)
})), n.register("dhtBz", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("lKmIF"),
        i = n("69SUA"),
        s = n("iMOcM"),
        c = n("2FDaO"),
        l = n("kyvf1"),
        u = n("b1oE9");
    let f;
    const d = c.default.div(f || (f = (e => e)`
  background: ${0};
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  color: ${0};
  font-family: ${0};
  text-align: left;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.04);
  }
`), (e => e.background || "#101da5"), o.default.White, i.Fonts.SFPro);
    var p = e => {
        const t = "large" == e.size,
            n = {
                imageHeight: t ? 14 : 10,
                planNameFontSize: t ? 48 : 30,
                planNameMarginTop: t ? 5 : 7,
                planNameLineHeight: t ? "35px" : "17px",
                priceFontSize: t ? 37 : 24,
                priceDescriptionFontSize: t ? 11 : 9,
                priceDescriptionMarginTop: t ? -9 : -7
            },
            r = (0, s.isLoggedIn)() && e.plan.id ? u.CHECKOUT : e.plan.link;
        return (0, a.jsx)(l.default, {
            to: r,
            className: "maxWidth",
            onClick: e.onClick,
            style: {
                textDecoration: "none"
            },
            children: (0, a.jsx)(d, {
                background: e.plan.background,
                children: (0, a.jsxs)("div", {
                    className: "flex flex-wrap vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("img", {
                            src: "/client/img/svgLogoWhite.svg",
                            style: {
                                opacity: .7,
                                height: n.imageHeight
                            }
                        }), (0, a.jsx)("div", {
                            style: {
                                fontWeight: i.FontWeights.UltraBold,
                                fontSize: n.planNameFontSize,
                                marginTop: n.planNameMarginTop,
                                lineHeight: n.planNameLineHeight
                            },
                            children: e.plan.name
                        })]
                    }), (0, a.jsxs)("div", {
                        style: {
                            textAlign: "right"
                        },
                        children: [(0, a.jsx)("div", {
                            style: {
                                fontSize: n.priceFontSize,
                                fontWeight: i.FontWeights.UltraBold
                            },
                            children: e.plan.price
                        }), e.plan.description && (0, a.jsx)("div", {
                            style: {
                                fontSize: n.priceDescriptionFontSize,
                                opacity: .7,
                                marginTop: n.priceDescriptionMarginTop
                            },
                            children: e.plan.description
                        })]
                    })]
                })
            })
        })
    }
})), n.register("kyvf1", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = n("hxEiv"),
        o = n("beXRF");
    n("fywoC");
    var i = e => e.external || !e.to ? (0, a.jsx)("a", {
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
    }) : (0, a.jsx)(o.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), n.register("cnKYR", (function(t, r) {
    e(t.exports, "DepartmentGroup", (function() {
        return c
    })), e(t.exports, "SchoolGroup", (function() {
        return l
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("69SUA"),
        i = n("b1oE9"),
        s = n("91OKC");
    s.PlanIds.basic, o.FontWeights.Bold, s.PlanIds.pro, s.PlanIds.pro, s.PlanIds.proPass, s.PlanIds.proPass, i.GROUP_PRICING;
    const c = {
            name: "Department",
            price: "$650",
            description: (0, a.jsx)("span", {
                style: {
                    fontSize: 16
                },
                children: "per year, Pro for 20 teachers"
            }),
            background: "#311b92",
            link: "/quote/new/department-1"
        },
        l = {
            name: "School",
            price: "$1,000",
            description: (0, a.jsx)("span", {
                style: {
                    fontSize: 16
                },
                children: "per year, Pro for every teacher at your school"
            }),
            background: "#2e7d32",
            link: "/quote/new/school-1"
        }
})), n.register("7uhUF", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("69SUA");
    var i = () => (0, a.jsxs)("div", {
        className: "flex vc maxWidth hc flex-column",
        style: {
            marginTop: 35
        },
        children: [(0, a.jsx)("img", {
            src: "/client/img/svgLogo.svg",
            style: {
                height: 36,
                opacity: .86
            }
        }), (0, a.jsx)("div", {
            style: {
                fontSize: 83,
                marginTop: -28,
                fontWeight: o.FontWeights.UltraBold
            },
            children: "Groups"
        })]
    })
})), n.register("9yFzx", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("2FDaO");
    let i;
    const s = e => (0, a.jsxs)("div", {
        className: "flex vc",
        style: {
            margin: 10
        },
        children: [(0, a.jsx)("div", {
            style: {
                marginRight: 7,
                fontSize: 25
            },
            children: e.good ? (0, a.jsx)("i", {
                className: "fad fa-check-circle",
                style: {
                    color: "green"
                }
            }) : (0, a.jsx)("i", {
                className: "fad fa-times-circle",
                style: {
                    color: "red"
                }
            })
        }), (0, a.jsx)("div", {
            children: e.text
        })]
    });
    var c = e => (0, a.jsx)(l, {
        className: "flex maxWidth wrap vc hc",
        children: e.features.map((e => (0, a.jsx)(s, {
            good: e.good,
            text: e.text
        }, `feat-${e.good}-${e.text}`)))
    });
    const l = o.default.div(i || (i = (e => e)`
  text-align: left;
  font-size: 17px;
`))
})), n.register("8Odwy", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = n("7ECC6"),
        i = n("lKmIF"),
        s = n("69SUA");
    const c = {
        width: "calc(100% - 10px)",
        color: i.default.Black,
        textAlign: "center",
        fontFamily: s.Fonts.SFPro,
        fontSize: 25,
        fontWeight: s.FontWeights.Bold,
        cursor: "pointer"
    };
    var l = () => (0, a.jsxs)("div", {
        className: "maxWidth flex",
        children: [(0, a.jsx)(o.default, {
            onClick: () => window.open("https://help.gimkit.com/en/category/group-subscriptions-3m7198/"),
            style: c,
            hoverable: !0,
            children: "FAQ"
        }), (0, a.jsx)("div", {
            style: {
                width: 20
            }
        }), (0, a.jsx)(o.default, {
            onClick: () => window.open("mailto:groups@gimkit.com", "_self"),
            style: c,
            hoverable: !0,
            children: "Ask a question"
        })]
    })
})), n.register("kuEJ4", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = n("iI4DW"),
        o = n("fywoC"),
        i = n("4gMdJ");

    function s(e, t, n) {
        return function(r) {
            const {
                prefixCls: s,
                style: c
            } = r, l = o.useRef(null), [u, f] = o.useState(0), [d, p] = o.useState(0), [g, m] = (0, a.default)(!1, {
                value: r.open
            }), {
                getPrefixCls: v
            } = o.useContext(i.ConfigContext), h = v(t || "select", s);
            return o.useEffect((() => {
                if (m(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var r;
                            const a = n ? `.${n(h)}` : `.${h}-dropdown`,
                                o = null === (r = l.current) || void 0 === r ? void 0 : r.querySelector(a);
                            o && (clearInterval(t), e.observe(o))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), o.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, o.createElement("div", {
                ref: l,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, o.createElement(e, Object.assign({}, r, {
                style: Object.assign(Object.assign({}, c), {
                    margin: 0
                }),
                open: g,
                visible: g,
                getPopupContainer: () => l.current
            }))))
        }
    }
})), n.register("hacAX", (function(t, r) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = n("lt5sb"),
        o = n("aWAHQ");
    const i = new(0, a.Keyframes)("antMoveDownIn", {
            "0%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        s = new(0, a.Keyframes)("antMoveDownOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        c = new(0, a.Keyframes)("antMoveLeftIn", {
            "0%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        l = new(0, a.Keyframes)("antMoveLeftOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        u = new(0, a.Keyframes)("antMoveRightIn", {
            "0%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        f = new(0, a.Keyframes)("antMoveRightOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        d = {
            "move-up": {
                inKeyframes: new(0, a.Keyframes)("antMoveUpIn", {
                    "0%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, a.Keyframes)("antMoveUpOut", {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    }
                })
            },
            "move-down": {
                inKeyframes: i,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: c,
                outKeyframes: l
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: f
            }
        },
        p = (e, t) => {
            const {
                antCls: n
            } = e, r = `${n}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = d[t];
            return [(0, o.initMotion)(r, a, i, e.motionDurationMid), {
                [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${r}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), n.register("i5Qjx", (function(r, a) {
    e(r.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(r.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var o = n("fe1on"),
        i = n("jyxW7"),
        s = n("fywoC"),
        c = n("4gMdJ"),
        l = n("1eqVQ"),
        u = n("7yXSw"),
        f = n("c9Vcn"),
        d = n("5gjI2"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
    const g = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        m = {
            small: 8,
            middle: 16,
            large: 24
        };
    const v = e => {
        const {
            getPrefixCls: n,
            space: r,
            direction: a
        } = s.useContext(c.ConfigContext), {
            size: u = (null == r ? void 0 : r.size) || "small",
            align: v,
            className: h,
            rootClassName: x,
            children: y,
            direction: w = "horizontal",
            prefixCls: b,
            split: C,
            style: j,
            wrap: O = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), z = (0, l.default)(), [E, k] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? m[e] : e || 0
        }(e)))), [u]), N = (0, i.default)(y, {
            keepEmpty: !0
        }), M = void 0 === v && "horizontal" === w ? "center" : v, P = n("space", b), [D, F] = (0, d.default)(P), W = t(o)(P, F, `${P}-${w}`, {
            [`${P}-rtl`]: "rtl" === a,
            [`${P}-align-${M}`]: M
        }, h, x), K = `${P}-item`, _ = "rtl" === a ? "marginLeft" : "marginRight";
        let B = 0;
        const I = N.map(((e, t) => {
                null != e && (B = t);
                const n = e && e.key || `${K}-${t}`;
                return s.createElement(f.default, {
                    className: K,
                    key: n,
                    direction: w,
                    index: t,
                    marginDirection: _,
                    split: C,
                    wrap: O
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: E,
                verticalSize: k,
                latestIndex: B,
                supportFlexGap: z
            })), [E, k, B, z]);
        if (0 === N.length) return null;
        const L = {};
        return O && (L.flexWrap = "wrap", z || (L.marginBottom = -k)), z && (L.columnGap = E, L.rowGap = k), D(s.createElement("div", Object.assign({
            className: W,
            style: Object.assign(Object.assign({}, L), j)
        }, S), s.createElement(g.Provider, {
            value: R
        }, I)))
    };
    v.Compact = u.default;
    var h = v
})), n.register("1eqVQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = n("fywoC"),
        o = n("azMeL"),
        i = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, o.detectFlexGapSupported)())
            }), []), e
        }
})), n.register("c9Vcn", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = n("fywoC"),
        o = n("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: n,
            index: r,
            marginDirection: i,
            children: s,
            split: c,
            wrap: l
        } = e;
        const {
            horizontalSize: u,
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let g = {};
        return p || ("vertical" === n ? r < d && (g = {
            marginBottom: u / (c ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, r < d && {
            [i]: u / (c ? 2 : 1)
        }), l && {
            paddingBottom: f
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: g
        }, s), r < d && c && a.createElement("span", {
            className: `${t}-split`,
            style: g
        }, c))
    }
})), n.register("dhxiD", (function(e, t) {
    var r = n("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var n, o, i, s, c, l, u = !1;
        t || (t = {}), n = t.debug || !1;
        try {
            if (i = r(), s = document.createRange(), c = document.getSelection(), (l = document.createElement("span")).textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(), t.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                    t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                })), document.body.appendChild(l), s.selectNodeContents(l), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (r) {
            n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (r) {
                n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), l && document.body.removeChild(l), i()
        }
        return u
    }
})), n.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
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
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), n.register("6WS0O", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        sideMargin: 50,
        optionWidth: 200
    }
})), n.register("77qSl", (function(t, r) {
    e(t.exports, "useMediaMatch", (function() {
        return o
    }));
    var a = n("fywoC");

    function o(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            n = (0, a.useState)((function() {
                return t.matches
            })),
            r = n[0],
            o = n[1];
        return (0, a.useEffect)((function() {
            o(t.matches);
            var e = function(e) {
                return o(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), r
    }
})), n.register("3bHhZ", (function(e, t) {
    var r = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = e.exports && e.exports.__exportStar || function(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), a(n("coa3i"), e.exports), a(n("exKSe"), e.exports), a(n("4Nv4f"), e.exports)
})), n.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var r = n("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, r.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, r.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), n.register("4Nv4f", (function(e, t) {
    var r = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = o(n("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            n = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                n(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), n.register("exKSe", (function(e, t) {
    var r = e.exports && e.exports.__assign || function() {
            return r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, r.apply(this, arguments)
        },
        a = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && a(t, e, n);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(n("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            n = e[1],
            a = s.useRef(),
            o = s.useCallback((function() {
                if (a.current) {
                    var e = a.current.offsetHeight,
                        r = a.current.offsetWidth;
                    e === t.height && r === t.width || n({
                        height: e,
                        width: r
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (a && a.current) {
                var e = new ResizeObserver(o);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, o]), r({
            ref: a
        }, t)
    }
})), n.register("hDWWf", (function(t, n) {
    let r;
    var a;
    e(t.exports, "SiteHeaderTheme", (function() {
        return r
    })), (a = r || (r = {})).light = "light", a.dark = "dark"
})), n.register("hSz8d", (function(t, n) {
    let r;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return r
    })), (a = r || (r = {})).none = "none", a.standard = "standard", a.darker = "darker"
})), n.register("9Vz35", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        name: n("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), n.register("2Y5iQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), n.register("dohZB", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("dnh3u"),
        o = n("fywoC"),
        i = n("bVHCc"),
        s = n("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "UsergroupAddOutlined";
    var l = o.forwardRef(c)
})), n.register("bVHCc", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), n.register("kVS28", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("dnh3u"),
        o = n("fywoC"),
        i = n("4GmeK"),
        s = n("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "LogoutOutlined";
    var l = o.forwardRef(c)
})), n.register("4GmeK", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), n.register("9kZfj", (function(t, r) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return o
    }));
    var a = n("hrYih");
    const o = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), n.register("aYYSA", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("dnh3u"),
        o = n("fywoC"),
        i = n("5UEB4"),
        s = n("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "StarOutlined";
    var l = o.forwardRef(c)
})), n.register("5UEB4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("56tQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = n("fywoC"),
        o = n("3KQc0"),
        i = n("9iNNJ");
    var s = (e, t) => {
        const [n, r] = a.useState((() => {
            var n, r;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), n.register("3KQc0", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = n("6rvT3"),
        o = n("9iNNJ"),
        i = n("3Yjty"),
        s = n("f1PHW");
    let c;
    const l = () => c || (c = function() {
        const e = new Map,
            t = new(0, a.default)((0, s.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var a;
                        null === (a = e.get(t[r].target)) || void 0 === a || a(t[r], n)
                    }
            })));
        return {
            observer: t,
            subscribe(n, r) {
                t.observe(n), e.set(n, r)
            },
            unsubscribe(n) {
                t.unobserve(n), e.delete(n)
            }
        }
    }());
    var u = function(e, t) {
        const n = l(),
            r = (0, i.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const a = e && "current" in e ? e.current : e;
            if (a) return n.subscribe(a, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(a)
            }
        }), [e, n, r]), n.observer
    }
})), n.register("9iNNJ", (function(r, a) {
    e(r.exports, "default", (function() {
        return o
    }));
    var o = t(n("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), n.register("3Yjty", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("fywoC");
    var o = e => {
        const t = a.useRef(e);
        return a.useEffect((() => {
            t.current = e
        })), t
    }
})), n.register("f1PHW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = function(e) {
        var t = [],
            n = null,
            r = function() {
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                t = a, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
})), n.register("iROck", (function(t, r) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var a = n("bd8je");
    const o = e => {
        a.history.push(e)
    }
})), n.register("py2Xr", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = n("hxEiv");
    n("fywoC");
    var o = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), n.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var r = n("fywoC");

    function a(e) {
        var t, n, a = (0, r.lazy)(e),
            o = (0, r.forwardRef)((function(e, n) {
                var o = (0, r.useRef)(null != t ? t : a);
                return (0, r.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, e))
            }));
        return o.preload = function() {
            return n || (n = e().then((function(e) {
                return t = e.default
            }))), n
        }, o
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
})), n.register("4aaLU", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), n.register("exbzb", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = n("dnh3u"),
        o = n("fywoC"),
        i = n("8N8s4"),
        s = n("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "QuestionCircleOutlined";
    var l = o.forwardRef(c)
})), n.register("8N8s4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }]
        },
        name: "question-circle",
        theme: "outlined"
    }
}));