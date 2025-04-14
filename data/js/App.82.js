function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("gNn36", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return O
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("cBwtl"),
        c = r("cNs4X"),
        l = r("2FDaO"),
        u = r("cHCps"),
        d = r("hDWWf"),
        f = r("iE2C7"),
        p = r("py2Xr"),
        m = r("3uz2P"),
        h = r("b1oE9"),
        g = r("3hVMZ"),
        v = r("8DkZP"),
        x = r("461I3"),
        y = r("8SNdT");
    let b, w, C, S = e => e;
    const k = [{
        param: "locker",
        screen: c.CosmosScreen.locker
    }, {
        param: "shop",
        screen: c.CosmosScreen.shop
    }, {
        param: "season-ticket",
        screen: c.CosmosScreen.seasonTicket
    }, {
        param: "pack",
        screen: c.CosmosScreen.pack
    }];
    var O = () => {
        const {
            id: e
        } = (0, m.useParams)(), t = i.useMemo((() => {
            var t;
            if (!e) return c.CosmosScreen.xp;
            return (null === (t = k.find((t => t.param === e))) || void 0 === t ? void 0 : t.screen) || !1
        }), [e]);
        return t ? (0, o.jsx)(j, {
            id: y.CosmosElementIds.container,
            children: (0, o.jsxs)(x.default, {
                children: [(0, o.jsx)(u.default, {
                    theme: d.SiteHeaderTheme.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: "blur(4px)"
                    },
                    children: (0, o.jsx)(f.default, {
                        theme: d.SiteHeaderTheme.dark,
                        rightSideContent: (0, o.jsx)(g.default, {}),
                        bottomContent: (0, o.jsx)("div", {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: c.CosmosScreen.xp,
                            label: v.CosmosNavigationScreenToInfo[c.CosmosScreen.xp].title,
                            path: h.COSMOS_BASE,
                            icon: (0, o.jsx)(p.default, {
                                name: v.CosmosNavigationScreenToInfo[c.CosmosScreen.xp].icon
                            })
                        }, {
                            id: c.CosmosScreen.seasonTicket,
                            label: v.CosmosNavigationScreenToInfo[c.CosmosScreen.seasonTicket].title,
                            path: `${h.COSMOS_BASE}/season-ticket`,
                            icon: (0, o.jsx)(p.default, {
                                name: v.CosmosNavigationScreenToInfo[c.CosmosScreen.seasonTicket].icon
                            })
                        }, {
                            id: c.CosmosScreen.locker,
                            label: v.CosmosNavigationScreenToInfo[c.CosmosScreen.locker].title,
                            path: `${h.COSMOS_BASE}/locker`,
                            icon: (0, o.jsx)(p.default, {
                                name: v.CosmosNavigationScreenToInfo[c.CosmosScreen.locker].icon
                            })
                        }, {
                            id: c.CosmosScreen.shop,
                            label: v.CosmosNavigationScreenToInfo[c.CosmosScreen.shop].title,
                            path: `${h.COSMOS_BASE}/shop`,
                            icon: (0, o.jsx)(p.default, {
                                name: v.CosmosNavigationScreenToInfo[c.CosmosScreen.shop].icon
                            })
                        }]
                    })
                }), (0, o.jsx)(N, {
                    id: y.CosmosElementIds.content,
                    children: (0, o.jsx)(M, {
                        children: (0, o.jsx)(s.default, {
                            screen: t,
                            pageMode: !0
                        })
                    })
                })]
            })
        }) : (0, o.jsx)(m.Navigate, {
            replace: !0,
            to: h.COSMOS_BASE
        })
    };
    const j = l.default.div.attrs({
            className: "flex-column"
        })(b || (b = S`
  flex: 1;
`)),
        N = l.default.div.attrs({
            className: "flex-column vc"
        })(w || (w = S`
  backdrop-filter: blur(4px);
  flex: 1;
`)),
        M = l.default.div.attrs({
            className: "flex-column"
        })(C || (C = S`
  width: 90%;
  max-width: 90%;
  padding: 30px 0px;
  padding-bottom: 100px;
  flex: 1;
`))
})), r.register("cNs4X", (function(t, r) {
    let n;
    var a;
    e(t.exports, "CosmosScreen", (function() {
        return n
    })), (a = n || (n = {})).xp = "xp", a.locker = "locker", a.seasonTicket = "seasonTicket", a.shop = "shop", a.pack = "pack"
})), r.register("hDWWf", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (a = n || (n = {})).light = "light", a.dark = "dark"
})), r.register("iE2C7", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("hDWWf"),
        c = r("hSz8d"),
        l = r("5zUIN");
    let u, d, f = e => e;
    var p = e => {
        const t = o.useMemo((() => {
                var t;
                return null !== (t = e.theme) && void 0 !== t ? t : s.SiteHeaderTheme.light
            }), [e.theme]),
            r = o.useMemo((() => {
                var t;
                return null !== (t = e.alpha) && void 0 !== t ? t : c.SiteHeaderAlpha.standard
            }), [e.alpha]),
            n = o.useMemo((() => {
                const e = r === c.SiteHeaderAlpha.none ? 1 : t === s.SiteHeaderTheme.light ? .85 : .45;
                return t === s.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${e})` : `rgba(16, 16, 16, ${e})`
            }), [t, r]),
            i = o.useMemo((() => t === s.SiteHeaderTheme.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)"), [t]);
        return (0, a.jsxs)(m, {
            background: n,
            borderColor: i,
            children: [(0, a.jsxs)(h, {
                children: [(0, a.jsx)(l.default, {
                    options: e.options,
                    selectedOption: e.selectedOption,
                    theme: t
                }), (0, a.jsx)("div", {
                    children: e.rightSideContent
                })]
            }), e.bottomContent]
        })
    };
    const m = i.default.div.attrs({
            className: "maxWidth"
        })(u || (u = f`
  background: ${0};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${0};
`), (e => e.background), (e => e.borderColor)),
        h = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(d || (d = f``))
})), r.register("hSz8d", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (a = n || (n = {})).none = "none", a.standard = "standard", a.darker = "darker"
})), r.register("5zUIN", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("i5Qjx"),
        i = r("cDZyt"),
        s = r("2FDaO");
    let c;
    var l = e => (0, a.jsx)(u, {
        children: (0, a.jsx)(o.default, {
            direction: "horizontal",
            size: 8,
            wrap: !0,
            children: e.options.map((t => (0, a.jsx)(i.default, {
                option: t,
                selected: e.selectedOption === t.id,
                theme: e.theme
            }, `option-${t.id}`)))
        })
    });
    const u = s.default.div.attrs({
        className: "scroll-x"
    })(c || (c = (e => e)`
  flex: 1;
`))
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var o = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        c = r("4gMdJ"),
        l = r("1eqVQ"),
        u = r("7yXSw"),
        d = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
            }
            return r
        };
    const m = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        h = {
            small: 8,
            middle: 16,
            large: 24
        };
    const g = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: a
        } = s.useContext(c.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: g,
            className: v,
            rootClassName: x,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: C,
            style: S,
            wrap: k = !1
        } = e, O = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), j = (0, l.default)(), [N, M] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [u]), E = (0, i.default)(y, {
            keepEmpty: !0
        }), z = void 0 === g && "horizontal" === b ? "center" : g, D = r("space", w), [W, _] = (0, f.default)(D), P = t(o)(D, _, `${D}-${b}`, {
            [`${D}-rtl`]: "rtl" === a,
            [`${D}-align-${z}`]: z
        }, v, x), $ = `${D}-item`, F = "rtl" === a ? "marginLeft" : "marginRight";
        let T = 0;
        const I = E.map(((e, t) => {
                null != e && (T = t);
                const r = e && e.key || `${$}-${t}`;
                return s.createElement(d.default, {
                    className: $,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: F,
                    split: C,
                    wrap: k
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: N,
                verticalSize: M,
                latestIndex: T,
                supportFlexGap: j
            })), [N, M, T, j]);
        if (0 === E.length) return null;
        const A = {};
        return k && (A.flexWrap = "wrap", j || (A.marginBottom = -M)), j && (A.columnGap = N, A.rowGap = M), W(s.createElement("div", Object.assign({
            className: P,
            style: Object.assign(Object.assign({}, A), S)
        }, O), s.createElement(m.Provider, {
            value: R
        }, I)))
    };
    g.Compact = u.default;
    var v = g
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("azMeL"),
        i = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, o.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: i,
            children: s,
            split: c,
            wrap: l
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: u / (c ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [i]: u / (c ? 2 : 1)
        }), l && {
            paddingBottom: d
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && c && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, c))
    }
})), r.register("cDZyt", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("hDWWf"),
        s = r("2FDaO"),
        c = r("4aaLU"),
        l = r("3uz2P"),
        u = r("beXRF"),
        d = r("kyvf1");
    let f;
    var p = e => {
        const {
            theme: t,
            option: r
        } = e, {
            pathname: n
        } = (0, u.useLocation)(), {
            label: s,
            icon: f,
            path: p,
            otherMatchingPaths: h
        } = r, g = (() => {
            if (p) {
                if ((0, l.matchPath)({
                        path: p
                    }, n)) return !0;
                if ((null == h ? void 0 : h.length) && h.some((e => (0, l.matchPath)({
                        path: e
                    }, n)))) return !0
            }
            return !1
        })(), v = o.useMemo((() => !!g || e.selected), [g, e.selected]), x = o.useMemo((() => v ? "#1677ff" : "transparent"), [t, v]), y = o.useMemo((() => v ? c.default.White : t === i.SiteHeaderTheme.light ? "rgb(26, 27, 37)" : c.default.White), [t, v]), b = o.useMemo((() => v ? x : t === i.SiteHeaderTheme.light ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)"), [t, v, x]);
        return (0, a.jsx)(d.default, {
            to: p,
            target: e.option.target,
            onClick: r.onSelect,
            style: {
                cursor: "pointer"
            },
            children: (0, a.jsxs)(m, {
                background: x,
                color: y,
                hoverBackground: b,
                children: [f ? (0, a.jsx)("span", {
                    style: {
                        marginRight: 6,
                        fontSize: "0.9em"
                    },
                    children: f
                }) : null, s]
            })
        })
    };
    const m = s.default.div.attrs({
        className: "flex-center"
    })(f || (f = (e => e)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${0};
  white-space: nowrap;
  color: ${0};
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${0};
  }
`), (e => e.background), (e => e.color), (e => e.hoverBackground))
})), r.register("4aaLU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv"),
        o = r("beXRF");
    r("fywoC");
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
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("3hVMZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("7v0W8"),
        i = r("2FDaO"),
        s = r("69SUA"),
        c = r("lKmIF"),
        l = r("79q1I");
    let u;
    var d = () => {
        const {
            data: e
        } = (0, l.default)();
        return e ? (0, a.jsx)(f, {
            children: (0, a.jsx)(o.default, {
                amount: e.currency,
                size: 16
            })
        }) : null
    };
    const f = i.default.div(u || (u = (e => e)`
  margin-left: 20px;
  font-family: ${0};
  color: ${0};
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`), s.Fonts.FugazOne, c.default.White)
})), r.register("7v0W8", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        i = r("alREA"),
        s = r("iMOcM"),
        c = r("69SUA");
    let l, u, d, f = e => e;
    var p = e => {
        const t = e.size || 18,
            r = Math.ceil(1.22 * t),
            n = Math.floor(t / 3),
            o = {
                height: r
            };
        return e.grayscale && (o.filter = "grayscale(1)"), (0, a.jsxs)(m, {
            style: {
                fontSize: e.size
            },
            children: [(0, a.jsx)(h, {
                draggable: !1,
                style: o
            }), (0, a.jsx)(g, {
                style: {
                    marginLeft: n
                },
                children: (0, s.numberWithCommas)(e.amount)
            })]
        })
    };
    const m = o.default.div.attrs({
            className: "flex vc"
        })(l || (l = f``)),
        h = o.default.img.attrs({
            src: (0, i.default)("cosmos/currency_v2.svg")
        })(u || (u = f``)),
        g = o.default.div(d || (d = f`
  line-height: 1;
  font-weight: ${0};
  margin-top: 0.15em;
`), c.FontWeights.Bold)
})), r.register("alREA", (function(t, r) {
    let n;
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        const t = (() => {
            var e;
            if (n) return n;
            const t = null === (e = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === e ? void 0 : e.getAttribute("content");
            return void 0 !== t && "$CDN_MAP_ASSETS_URL" !== t ? (n = t, n) : ""
        })();
        return e.startsWith("/assets/map") ? `${t}${e}` : `${t}/assets/map/${e}`
    }
})), r.register("79q1I", (function(t, n) {
    e(t.exports, "invalidateCosmosBasics", (function() {
        return c
    })), e(t.exports, "default", (function() {
        return l
    }));
    var a = r("eMRqp"),
        o = r("iMOcM"),
        i = r("bKPD8");
    const s = ["cosmos-basics"],
        c = () => i.default.invalidateQueries(s);
    var l = () => (0, a.useQuery)(s, (() => (0, o.requestAsPromise)({
        url: "/api/cosmos/basics"
    })), {
        staleTime: 2e4
    })
})), r.register("8DkZP", (function(t, n) {
    e(t.exports, "CosmosNavigationScreenToInfo", (function() {
        return c
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("hqWys"),
        i = r("cNs4X"),
        s = r("69SUA");
    const c = {
        [i.CosmosScreen.xp]: {
            title: "Home",
            icon: "fas fa-home"
        },
        [i.CosmosScreen.locker]: {
            title: "Locker",
            icon: "fas fa-th-large"
        },
        [i.CosmosScreen.seasonTicket]: {
            title: (0, a.jsxs)("div", {
                className: "flex vc",
                children: [(0, a.jsx)("div", {
                    children: o.SeasonTicketName.name
                }), (0, a.jsx)("div", {
                    style: {
                        fontSize: "0.7em",
                        padding: "0.3em 0.5em",
                        borderRadius: 50,
                        fontWeight: s.FontWeights.Bold,
                        background: "#009933",
                        marginLeft: "0.5em"
                    },
                    children: "New!"
                })]
            }),
            icon: "fas fa-ticket-alt"
        },
        [i.CosmosScreen.shop]: {
            title: "Shop",
            icon: "fas fa-store"
        }
    }
})), r.register("hqWys", (function(t, r) {
    e(t.exports, "SeasonTicketName", (function() {
        return n
    })), e(t.exports, "SeasonTicketSeason", (function() {
        return a
    }));
    const n = {
            name: "Season Ticket",
            singularName: "ticket"
        },
        a = {
            seasonYear: "2025",
            seasonName: "Season",
            seasonNumber: "3"
        }
})), r.register("461I3", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO");
    let i, s, c = e => e;
    var l = e => (0, a.jsxs)(u, {
        children: [(0, a.jsx)(d, {
            children: e.children
        }), (0, a.jsx)("div", {
            className: "area",
            children: (0, a.jsxs)("ul", {
                className: "circles",
                children: [(0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {})]
            })
        })]
    });
    const u = o.default.div(i || (i = c`
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
        d = o.default.div.attrs({
            className: "flex-column"
        })(s || (s = c`
  z-index: 1;
  flex: 1;
`))
})), r.register("8SNdT", (function(t, r) {
    e(t.exports, "CosmosElementIds", (function() {
        return n
    }));
    const n = {
        container: "cosmos-container",
        content: "cosmos-content"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        o = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: c
            } = n, l = o.useRef(null), [u, d] = o.useState(0), [f, p] = o.useState(0), [m, h] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: g
            } = o.useContext(i.ConfigContext), v = g(t || "select", s);
            return o.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(v)}` : `.${v}-dropdown`,
                                o = null === (n = l.current) || void 0 === n ? void 0 : n.querySelector(a);
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
                    minWidth: f
                }
            }, o.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, c), {
                    margin: 0
                }),
                open: m,
                visible: m,
                getPopupContainer: () => l.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = r("lt5sb"),
        o = r("aWAHQ");
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
        d = new(0, a.Keyframes)("antMoveRightOut", {
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
        f = {
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
                outKeyframes: d
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = f[t];
            return [(0, o.initMotion)(n, a, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, o, i, s, c, l, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), c = document.getSelection(), (l = document.createElement("span")).textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(l), s.selectNodeContents(l), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), l && document.body.removeChild(l), i()
        }
        return u
    }
})), r.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
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
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), r.register("6WS0O", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        sideMargin: 50,
        optionWidth: 200
    }
})), r.register("77qSl", (function(t, n) {
    e(t.exports, "useMediaMatch", (function() {
        return o
    }));
    var a = r("fywoC");

    function o(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            o = r[1];
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
        }), [t]), n
    }
})), r.register("3bHhZ", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), a(r("coa3i"), e.exports), a(r("exKSe"), e.exports), a(r("4Nv4f"), e.exports)
})), r.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var n = r("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, n.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, n.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), r.register("4Nv4f", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = o(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                r(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), r.register("exKSe", (function(e, t) {
    var n = e.exports && e.exports.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, n.apply(this, arguments)
        },
        a = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            o = s.useCallback((function() {
                if (a.current) {
                    var e = a.current.offsetHeight,
                        n = a.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
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
        }), [a, o]), n({
            ref: a
        }, t)
    }
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        name: r("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), r.register("2Y5iQ", (function(t, r) {
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
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "UsergroupAddOutlined";
    var l = o.forwardRef(c)
})), r.register("bVHCc", (function(t, r) {
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
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "LogoutOutlined";
    var l = o.forwardRef(c)
})), r.register("4GmeK", (function(t, r) {
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
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return o
    }));
    var a = r("hrYih");
    const o = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "StarOutlined";
    var l = o.forwardRef(c)
})), r.register("5UEB4", (function(t, r) {
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
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fywoC"),
        o = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("6rvT3"),
        o = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let c;
    const l = () => c || (c = function() {
        const e = new Map,
            t = new(0, a.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var a;
                        null === (a = e.get(t[n].target)) || void 0 === a || a(t[n], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, n) {
                t.observe(r), e.set(r, n)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var u = function(e, t) {
        const r = l(),
            n = (0, i.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const a = e && "current" in e ? e.current : e;
            if (a) return r.subscribe(a, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(a)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, a) {
    e(n.exports, "default", (function() {
        return o
    }));
    var o = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");
    var o = e => {
        const t = a.useRef(e);
        return a.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = function(e) {
        var t = [],
            r = null,
            n = function() {
                for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("kqQIs"),
        o = r("2Af7I"),
        i = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        c = r("cY4lv"),
        l = r("kYx4h"),
        u = 44;

    function d(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var f = i.forwardRef((function(e, t) {
            var r, n = e.classes,
                c = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                m = e.disableShrink,
                h = void 0 !== m && m,
                g = e.size,
                v = void 0 === g ? 40 : g,
                x = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                w = e.value,
                C = void 0 === w ? 0 : w,
                S = e.variant,
                k = void 0 === S ? "indeterminate" : S,
                O = (0, o.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                j = {},
                N = {},
                M = {};
            if ("determinate" === k || "static" === k) {
                var E = 2 * Math.PI * ((u - b) / 2);
                j.strokeDasharray = E.toFixed(3), M["aria-valuenow"] = Math.round(C), "static" === k ? (j.strokeDashoffset = "".concat(((100 - C) / 100 * E).toFixed(3), "px"), N.transform = "rotate(-90deg)") : (j.strokeDashoffset = "".concat((r = (100 - C) / 100, r * r * E).toFixed(3), "px"), N.transform = "rotate(".concat((270 * d(C / 70)).toFixed(3), "deg)"))
            }
            return i.createElement("div", (0, a.default)({
                className: (0, s.default)(n.root, c, "inherit" !== p && n["color".concat((0, l.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [k]),
                style: (0, a.default)({
                    width: v,
                    height: v
                }, N, x),
                ref: t,
                role: "progressbar"
            }, M, O), i.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, i.createElement("circle", {
                className: (0, s.default)(n.circle, h && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [k]),
                style: j,
                cx: u,
                cy: u,
                r: (u - b) / 2,
                fill: "none",
                strokeWidth: b
            })))
        })),
        p = (0, c.default)((function(e) {
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
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var a = r("bd8je");
    const o = e => {
        a.history.push(e)
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            o = (0, n.forwardRef)((function(e, r) {
                var o = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(o.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return o.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, o
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "QuestionCircleOutlined";
    var l = o.forwardRef(c)
})), r.register("8N8s4", (function(t, r) {
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
})), r.register("8UJqa", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    }
})), r.register("aQuqp", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv"),
        o = r("6edaj"),
        i = r("fywoC"),
        s = r("2FDaO"),
        c = r("69SUA"),
        l = r("8UJqa");
    let u;
    var d = e => {
        const t = e.size || "default",
            r = i.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            n = i.useMemo((() => (0, o.darken)(.1, r)), [r]),
            s = i.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            l = i.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            u = i.useMemo((() => {
                const r = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${r} ${e.customHorizontalPadding}px` : "small" === t ? `${r} 24px` : "default" === t ? `${r} 28px` : `${r} 42px`
            }), [t, e.customHorizontalPadding]),
            d = i.useMemo((() => "small" === t ? 41 : 49), [t]),
            p = i.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? c.FontWeights.Bold : c.FontWeights.Normal), [e.customFontWeight, t]),
            m = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, a.jsx)(f, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: d
            }, e.style || {}),
            children: (0, a.jsxs)("button", {
                className: "btn-pushable",
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : m,
                onPointerDown: e.usePointerDownEvent ? m : void 0,
                style: {
                    cursor: e.disabled ? "not-allowed" : "pointer",
                    width: e.block ? "100%" : "auto"
                },
                children: [(0, a.jsx)("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: l
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: n,
                        borderRadius: l
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: r,
                        fontSize: s,
                        borderRadius: l,
                        padding: u,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    };
    const f = s.default.div.attrs({
        className: "flex"
    })(u || (u = (e => e)`
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
`), l.default.White)
})), r.register("6a2jS", (function(t, r) {
    let n;
    var a;
    let o;
    var i;
    let s;
    var c;
    e(t.exports, "CosmeticType", (function() {
        return n
    })), e(t.exports, "CosmeticRarity", (function() {
        return o
    })), e(t.exports, "CosmeticStyleCategoryType", (function() {
        return s
    })), (a = n || (n = {})).character = "character", a.sticker = "sticker", a.trail = "trail", (i = o || (o = {})).common = "common", i.uncommon = "uncommon", i.rare = "rare", i.epic = "epic", i.legendary = "legendary", i.mythic = "mythic", (c = s || (s = {})).color = "color", c.select = "select"
})), r.register("4ifJF", (function(t, n) {
    e(t.exports, "Centered", (function() {
        return u
    })), e(t.exports, "VerticallyCentered", (function() {
        return d
    })), e(t.exports, "CenteredColumn", (function() {
        return f
    })), e(t.exports, "VerticalCentered", (function() {
        return p
    }));
    var a = r("2FDaO");
    let o, i, s, c, l = e => e;
    const u = a.default.div.attrs({
            className: "flex-center"
        })(o || (o = l``)),
        d = a.default.div.attrs({
            className: "flex vc"
        })(i || (i = l``)),
        f = (0, a.default)(u).attrs({
            className: "flex-column"
        })(s || (s = l``)),
        p = a.default.div.attrs({
            className: "flex vc"
        })(c || (c = l``))
})), r.register("ik3h7", (function(n, a) {
    e(n.exports, "Provider", (function() {
        return p
    })), e(n.exports, "default", (function() {
        return m
    }));
    var o = r("fywoC"),
        i = "__wrap_b",
        s = "__wrap_o",
        c = "undefined" == typeof window ? t(o).useEffect : t(o).useLayoutEffect,
        l = (e, t, r) => {
            let n = (r = r || document.querySelector(`[data-br="${e}"]`)).parentElement,
                a = e => r.style.maxWidth = e + "px";
            r.style.maxWidth = "";
            let o, i = n.clientWidth,
                s = n.clientHeight,
                c = i / 2 - .25,
                l = i + .5;
            if (i) {
                for (; c + 1 < l;) o = Math.round((c + l) / 2), a(o), n.clientHeight === s ? l = o : c = o;
                a(l * t + i * (1 - t))
            }
            r.__wrap_o || (r.__wrap_o = new ResizeObserver((() => {
                self.__wrap_b(0, +r.dataset.brr, r)
            }))).observe(n)
        },
        u = l.toString(),
        d = (e, r = "") => t(o).createElement("script", {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: (e ? "" : `self.${i}=${u};`) + r
            }
        }),
        f = t(o).createContext(!1),
        p = ({
            children: e
        }) => t(o).createElement(f.Provider, {
            value: !0
        }, d(!1), e),
        m = ({
            as: e = "span",
            ratio: r = 1,
            children: n,
            ...a
        }) => {
            let u = t(o).useId(),
                p = t(o).useRef(),
                m = t(o).useContext(f);
            return c((() => {
                p.current && (self[i] = l)(0, r, p.current)
            }), [n, r]), c((() => () => {
                if (!p.current) return;
                let e = p.current[s];
                !e || (e.disconnect(), delete p.current[s])
            }), []), t(o).createElement(t(o).Fragment, null, t(o).createElement(e, {
                ...a,
                "data-br": u,
                "data-brr": r,
                ref: p,
                style: {
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit"
                },
                suppressHydrationWarning: !0
            }, n), d(m, `self.${i}("${u}",${r})`))
        }
}));