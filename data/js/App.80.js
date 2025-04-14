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
r.register("c7i3e", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return C
    }));
    var i = r("hxEiv"),
        o = r("fywoC"),
        s = r("2FDaO"),
        l = r("5JnD6"),
        c = r("cHCps"),
        d = r("hDWWf"),
        u = r("lKmIF"),
        f = r("cPGmn"),
        p = r("iMOcM"),
        m = r("b1oE9"),
        h = r("iE2C7"),
        g = r("py2Xr"),
        x = r("3uz2P"),
        v = r("beXRF"),
        y = r("97m1u");
    let b;
    const w = o.lazy((() => r("43I91"))),
        j = o.lazy((() => r("4S4N5")));
    var C = () => {
        (0, f.useDidMount)((() => {
            (0, p.loadFont)("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        }));
        const {
            pathname: e
        } = (0, v.useLocation)(), t = o.useMemo((() => (0, x.matchPath)({
            path: m.CREATIVE_MAP
        }, e) ? (0, i.jsx)(w, {}) : (0, x.matchPath)({
            path: m.CREATIVE_DISCOVERY
        }, e) ? (0, i.jsx)(j, {}) : (0, i.jsx)(y.default, {})), [e]);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.Title, {
                title: "Gimkit Creative",
                override: !0
            }), (0, i.jsxs)(l.default, {
                children: [(0, i.jsx)(c.default, {
                    theme: d.SiteHeaderTheme.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: "blur(4px)"
                    },
                    children: (0, i.jsx)(h.default, {
                        theme: d.SiteHeaderTheme.dark,
                        bottomContent: (0, i.jsx)("div", {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: "creative-home",
                            label: "Build",
                            path: m.CREATIVE_BASE,
                            icon: (0, i.jsx)(g.default, {
                                name: "fas fa-hammer"
                            })
                        }, {
                            id: "creative-explore",
                            label: "Discovery",
                            path: m.CREATIVE_DISCOVERY,
                            icon: (0, i.jsx)(g.default, {
                                name: "fas fa-gamepad-alt"
                            })
                        }]
                    })
                }), (0, i.jsx)(k, {
                    children: (0, i.jsx)(o.Suspense, {
                        fallback: null,
                        children: t
                    })
                })]
            })]
        })
    };
    const k = s.default.div(b || (b = (e => e)`
  color: ${0};
`), u.default.White)
})), r.register("5JnD6", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO");
    let o, s, l = e => e;
    var c = e => (0, a.jsxs)(d, {
        children: [(0, a.jsx)(u, {
            children: e.children
        }), (0, a.jsx)("div", {
            className: "area",
            children: (0, a.jsxs)("ul", {
                className: "circles",
                children: [(0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {})]
            })
        })]
    });
    const d = i.default.div(o || (o = l`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #1b065b;
    background: linear-gradient(304deg, #2a5b93, #1b065b);
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
        u = i.default.div(s || (s = l`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`))
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
        i = r("fywoC"),
        o = r("2FDaO"),
        s = r("hDWWf"),
        l = r("hSz8d"),
        c = r("5zUIN");
    let d, u, f = e => e;
    var p = e => {
        const t = i.useMemo((() => {
                var t;
                return null !== (t = e.theme) && void 0 !== t ? t : s.SiteHeaderTheme.light
            }), [e.theme]),
            r = i.useMemo((() => {
                var t;
                return null !== (t = e.alpha) && void 0 !== t ? t : l.SiteHeaderAlpha.standard
            }), [e.alpha]),
            n = i.useMemo((() => {
                const e = r === l.SiteHeaderAlpha.none ? 1 : t === s.SiteHeaderTheme.light ? .85 : .45;
                return t === s.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${e})` : `rgba(16, 16, 16, ${e})`
            }), [t, r]),
            o = i.useMemo((() => t === s.SiteHeaderTheme.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)"), [t]);
        return (0, a.jsxs)(m, {
            background: n,
            borderColor: o,
            children: [(0, a.jsxs)(h, {
                children: [(0, a.jsx)(c.default, {
                    options: e.options,
                    selectedOption: e.selectedOption,
                    theme: t
                }), (0, a.jsx)("div", {
                    children: e.rightSideContent
                })]
            }), e.bottomContent]
        })
    };
    const m = o.default.div.attrs({
            className: "maxWidth"
        })(d || (d = f`
  background: ${0};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${0};
`), (e => e.background), (e => e.borderColor)),
        h = o.default.div.attrs({
            className: "maxWidth flex vc between"
        })(u || (u = f``))
})), r.register("hSz8d", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (a = n || (n = {})).none = "none", a.standard = "standard", a.darker = "darker"
})), r.register("5zUIN", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("i5Qjx"),
        o = r("cDZyt"),
        s = r("2FDaO");
    let l;
    var c = e => (0, a.jsx)(d, {
        children: (0, a.jsx)(i.default, {
            direction: "horizontal",
            size: 8,
            wrap: !0,
            children: e.options.map((t => (0, a.jsx)(o.default, {
                option: t,
                selected: e.selectedOption === t.id,
                theme: e.theme
            }, `option-${t.id}`)))
        })
    });
    const d = s.default.div.attrs({
        className: "scroll-x"
    })(l || (l = (e => e)`
  flex: 1;
`))
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var i = r("fe1on"),
        o = r("jyxW7"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("1eqVQ"),
        d = r("7yXSw"),
        u = r("c9Vcn"),
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
        } = s.useContext(l.ConfigContext), {
            size: d = (null == n ? void 0 : n.size) || "small",
            align: g,
            className: x,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: C,
            wrap: k = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [O, M] = s.useMemo((() => (Array.isArray(d) ? d : [d, d]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [d]), N = (0, o.default)(y, {
            keepEmpty: !0
        }), z = void 0 === g && "horizontal" === b ? "center" : g, W = r("space", w), [D, F] = (0, f.default)(W), P = t(i)(W, F, `${W}-${b}`, {
            [`${W}-rtl`]: "rtl" === a,
            [`${W}-align-${z}`]: z
        }, x, v), T = `${W}-item`, _ = "rtl" === a ? "marginLeft" : "marginRight";
        let L = 0;
        const R = N.map(((e, t) => {
                null != e && (L = t);
                const r = e && e.key || `${T}-${t}`;
                return s.createElement(u.default, {
                    className: T,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: _,
                    split: j,
                    wrap: k
                }, e)
            })),
            $ = s.useMemo((() => ({
                horizontalSize: O,
                verticalSize: M,
                latestIndex: L,
                supportFlexGap: E
            })), [O, M, L, E]);
        if (0 === N.length) return null;
        const B = {};
        return k && (B.flexWrap = "wrap", E || (B.marginBottom = -M)), E && (B.columnGap = O, B.rowGap = M), D(s.createElement("div", Object.assign({
            className: P,
            style: Object.assign(Object.assign({}, B), C)
        }, S), s.createElement(m.Provider, {
            value: $
        }, R)))
    };
    g.Compact = d.default;
    var x = g
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("azMeL"),
        o = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, i.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("i5Qjx");

    function o(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: o,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: d,
            verticalSize: u,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(i.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: d / (l ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [o]: d / (l ? 2 : 1)
        }), c && {
            paddingBottom: u
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && l && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, l))
    }
})), r.register("cDZyt", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        o = r("hDWWf"),
        s = r("2FDaO"),
        l = r("4aaLU"),
        c = r("3uz2P"),
        d = r("beXRF"),
        u = r("kyvf1");
    let f;
    var p = e => {
        const {
            theme: t,
            option: r
        } = e, {
            pathname: n
        } = (0, d.useLocation)(), {
            label: s,
            icon: f,
            path: p,
            otherMatchingPaths: h
        } = r, g = (() => {
            if (p) {
                if ((0, c.matchPath)({
                        path: p
                    }, n)) return !0;
                if ((null == h ? void 0 : h.length) && h.some((e => (0, c.matchPath)({
                        path: e
                    }, n)))) return !0
            }
            return !1
        })(), x = i.useMemo((() => !!g || e.selected), [g, e.selected]), v = i.useMemo((() => x ? "#1677ff" : "transparent"), [t, x]), y = i.useMemo((() => x ? l.default.White : t === o.SiteHeaderTheme.light ? "rgb(26, 27, 37)" : l.default.White), [t, x]), b = i.useMemo((() => x ? v : t === o.SiteHeaderTheme.light ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)"), [t, x, v]);
        return (0, a.jsx)(u.default, {
            to: p,
            target: e.option.target,
            onClick: r.onSelect,
            style: {
                cursor: "pointer"
            },
            children: (0, a.jsxs)(m, {
                background: v,
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
        return o
    }));
    var a = r("hxEiv"),
        i = r("beXRF");
    r("fywoC");
    var o = e => e.external || !e.to ? (0, a.jsx)("a", {
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
    }) : (0, a.jsx)(i.Link, {
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
        return i
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("97m1u", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("iVy8h"),
        s = r("4ifJF"),
        l = r("i5Qjx"),
        c = r("7hg6s"),
        d = r("fLaxH"),
        u = r("lgXdK"),
        f = r("7C041"),
        p = r("lQNgb"),
        m = r("2LUs3"),
        h = r("9Mv96"),
        g = r("lKmIF");
    let x;
    var v = () => {
        const {
            data: e,
            isLoading: t,
            error: r
        } = (0, m.default)();
        return r ? (0, a.jsx)("div", {
            className: "flex-center maxWidth",
            style: {
                marginTop: 50
            },
            children: (0, a.jsx)("div", {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: "90%"
                },
                children: "There was an error loading Gimkit Creative. Please refresh and try again."
            })
        }) : t ? (0, a.jsx)(s.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, a.jsx)(h.default, {
                style: {
                    color: g.default.White
                }
            })
        }) : (0, a.jsxs)(y, {
            children: [(0, a.jsx)(o.default, {}), (0, a.jsxs)(l.default, {
                className: "maxWidth",
                direction: "vertical",
                size: 25,
                style: {
                    marginTop: 30,
                    width: d.CreativeContentWidth.width,
                    maxWidth: d.CreativeContentWidth.maxWidth
                },
                children: [e.completedTutorial ? null : (0, a.jsx)(c.default, {
                    children: (0, a.jsx)(u.default, {})
                }), (0, a.jsx)(c.default, {
                    children: (0, a.jsx)(f.default, {
                        mapLimit: e.mapLimit
                    })
                }), (0, a.jsx)(c.default, {
                    children: (0, a.jsx)(p.default, {})
                })]
            })]
        })
    };
    const y = (0, i.default)(s.CenteredColumn).attrs({
        className: "maxWidth"
    })(x || (x = (e => e)`
  padding: 35px 0px;
`))
})), r.register("iVy8h", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("fLaxH"),
        s = r("4ifJF"),
        l = r("69SUA"),
        c = r("ik3h7");
    let d, u, f, p, m, h = e => e;
    var g = () => (0, a.jsxs)(x, {
        children: [(0, a.jsxs)(v, {
            children: [(0, a.jsx)(y, {
                src: "/client/img/svgLogoWhite.svg"
            }), (0, a.jsx)(b, {
                children: "Creative"
            })]
        }), (0, a.jsx)(w, {
            children: (0, a.jsx)(c.default, {
                children: "Welcome to Gimkit Creative, where you can build your very own game modes, maps, & worlds! Creative is in early access, so there may be bugs & issues. Have fun building!"
            })
        })]
    });
    const x = (0, i.default)(s.CenteredColumn)(d || (d = h`
  width: ${0};
  max-width: ${0};
`), o.CreativeContentWidth.width, o.CreativeContentWidth.maxWidth),
        v = (0, i.default)(s.CenteredColumn)(u || (u = h``)),
        y = i.default.img(f || (f = h`
  height: 35px;
  filter: drop-shadow(rgba(0, 0, 0, 0.9) 0px 1px 2px);
`)),
        b = i.default.div(p || (p = h`
  text-shadow: rgba(0, 0, 0, 0.6) 0px 3px 15px;
  font-size: 72px;
  font-family: ${0};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 10px;
`), l.Fonts.FugazOne),
        w = i.default.div(m || (m = h`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
`))
})), r.register("fLaxH", (function(t, r) {
    e(t.exports, "CreativeContentWidth", (function() {
        return n
    }));
    const n = {
        width: "90%",
        maxWidth: "800px"
    }
})), r.register("4ifJF", (function(t, n) {
    e(t.exports, "Centered", (function() {
        return d
    })), e(t.exports, "VerticallyCentered", (function() {
        return u
    })), e(t.exports, "CenteredColumn", (function() {
        return f
    })), e(t.exports, "VerticalCentered", (function() {
        return p
    }));
    var a = r("2FDaO");
    let i, o, s, l, c = e => e;
    const d = a.default.div.attrs({
            className: "flex-center"
        })(i || (i = c``)),
        u = a.default.div.attrs({
            className: "flex vc"
        })(o || (o = c``)),
        f = (0, a.default)(d).attrs({
            className: "flex-column"
        })(s || (s = c``)),
        p = a.default.div.attrs({
            className: "flex vc"
        })(l || (l = c``))
})), r.register("ik3h7", (function(n, a) {
    e(n.exports, "Provider", (function() {
        return p
    })), e(n.exports, "default", (function() {
        return m
    }));
    var i = r("fywoC"),
        o = "__wrap_b",
        s = "__wrap_o",
        l = "undefined" == typeof window ? t(i).useEffect : t(i).useLayoutEffect,
        c = (e, t, r) => {
            let n = (r = r || document.querySelector(`[data-br="${e}"]`)).parentElement,
                a = e => r.style.maxWidth = e + "px";
            r.style.maxWidth = "";
            let i, o = n.clientWidth,
                s = n.clientHeight,
                l = o / 2 - .25,
                c = o + .5;
            if (o) {
                for (; l + 1 < c;) i = Math.round((l + c) / 2), a(i), n.clientHeight === s ? c = i : l = i;
                a(c * t + o * (1 - t))
            }
            r.__wrap_o || (r.__wrap_o = new ResizeObserver((() => {
                self.__wrap_b(0, +r.dataset.brr, r)
            }))).observe(n)
        },
        d = c.toString(),
        u = (e, r = "") => t(i).createElement("script", {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: (e ? "" : `self.${o}=${d};`) + r
            }
        }),
        f = t(i).createContext(!1),
        p = ({
            children: e
        }) => t(i).createElement(f.Provider, {
            value: !0
        }, u(!1), e),
        m = ({
            as: e = "span",
            ratio: r = 1,
            children: n,
            ...a
        }) => {
            let d = t(i).useId(),
                p = t(i).useRef(),
                m = t(i).useContext(f);
            return l((() => {
                p.current && (self[o] = c)(0, r, p.current)
            }), [n, r]), l((() => () => {
                if (!p.current) return;
                let e = p.current[s];
                !e || (e.disconnect(), delete p.current[s])
            }), []), t(i).createElement(t(i).Fragment, null, t(i).createElement(e, {
                ...a,
                "data-br": d,
                "data-brr": r,
                ref: p,
                style: {
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit"
                },
                suppressHydrationWarning: !0
            }, n), u(m, `self.${o}("${d}",${r})`))
        }
})), r.register("7hg6s", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO");
    let o;
    var s = e => (0, a.jsx)(l, {
        className: e.className,
        children: e.children
    });
    const l = i.default.div.attrs({
        className: "maxWidth light-shadow"
    })(o || (o = (e => e)`
  background: rgba(255, 255, 255, 0.1);
  padding: 35px;
  border-radius: 12px;
  backdrop-filter: blur(3px);
`))
})), r.register("lgXdK", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("aQuqp"),
        s = r("69SUA"),
        l = r("b1oE9"),
        c = r("ik3h7"),
        d = r("alREA");
    let u, f, p, m, h, g, x = e => e;
    var v = () => (0, a.jsxs)(y, {
        children: [(0, a.jsx)(b, {
            children: (0, a.jsx)(w, {})
        }), (0, a.jsxs)(j, {
            children: [(0, a.jsx)(C, {
                children: (0, a.jsx)(c.default, {
                    children: "Complete the Gimkit Creative tutorial and receive the Blueprint Gim for free!"
                })
            }), (0, a.jsx)(k, {
                children: "The tutorial takes about 10 minutes to complete."
            }), (0, a.jsx)(o.default, {
                size: "small",
                customFontWeight: s.FontWeights.Bold,
                type: "success",
                onClick: () => window.location.href = l.CREATIVE_TUTORIAL,
                ariaLabel: "Start Tutorial",
                children: "Start Tutorial"
            })]
        })]
    });
    const y = i.default.div.attrs({
            className: "maxWidth flex-center"
        })(u || (u = x``)),
        b = i.default.div(f || (f = x``)),
        w = i.default.img.attrs({
            src: (0, d.default)("characters/spine/preview/construction.png")
        })(p || (p = x`
  height: 155px;
  transform: rotate(353deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        j = i.default.div(m || (m = x`
  margin-left: 20px;
`)),
        C = i.default.div(h || (h = x`
  font-weight: ${0};
  font-size: 18px;
  line-height: 1.3;
`), s.FontWeights.Bold),
        k = i.default.div(g || (g = x`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-style: italic;
`))
})), r.register("aQuqp", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        i = r("6edaj"),
        o = r("fywoC"),
        s = r("2FDaO"),
        l = r("69SUA"),
        c = r("8UJqa");
    let d;
    var u = e => {
        const t = e.size || "default",
            r = o.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            n = o.useMemo((() => (0, i.darken)(.1, r)), [r]),
            s = o.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            c = o.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            d = o.useMemo((() => {
                const r = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${r} ${e.customHorizontalPadding}px` : "small" === t ? `${r} 24px` : "default" === t ? `${r} 28px` : `${r} 42px`
            }), [t, e.customHorizontalPadding]),
            u = o.useMemo((() => "small" === t ? 41 : 49), [t]),
            p = o.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? l.FontWeights.Bold : l.FontWeights.Normal), [e.customFontWeight, t]),
            m = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, a.jsx)(f, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: u
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
                        borderRadius: c
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: n,
                        borderRadius: c
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: r,
                        fontSize: s,
                        borderRadius: c,
                        padding: d,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    };
    const f = s.default.div.attrs({
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
})), r.register("7C041", (function(t, n) {
    e(t.exports, "Title", (function() {
        return S
    })), e(t.exports, "Description", (function() {
        return E
    })), e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("g3fST"),
        s = r("iMOcM"),
        l = r("aQuqp"),
        c = r("69SUA"),
        d = r("i5Qjx"),
        u = r("1qaQF"),
        f = r("2Mij8"),
        p = r("2O6vH");
    let m, h, g, x, v, y, b = e => e;
    var w = e => {
        const {
            data: t,
            isLoading: r,
            error: n
        } = (0, o.default)(), [i, m, h] = (0, s.useBoolean)(!1);
        if (r || n) return null;
        const g = t.length < e.mapLimit,
            x = t.slice(0, e.mapLimit),
            v = t.slice(e.mapLimit);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(j, {
                children: [(0, a.jsxs)(C, {
                    children: [(0, a.jsxs)(k, {
                        children: [(0, a.jsx)(S, {
                            children: "My Maps"
                        }), (0, a.jsxs)(E, {
                            children: [t.length, "/", e.mapLimit, " slots used"]
                        }), t.length >= 2 ? (0, a.jsx)(p.default, {
                            marginTop: 8,
                            text: "Store up to 25 maps"
                        }) : null]
                    }), g ? (0, a.jsx)(l.default, {
                        size: "small",
                        customFontWeight: c.FontWeights.Bold,
                        onClick: m,
                        ariaLabel: "Create New Map",
                        type: "success",
                        children: "Create New Map"
                    }) : null]
                }), t.length ? (0, a.jsxs)(d.default, {
                    direction: "vertical",
                    size: 14,
                    className: "maxWidth",
                    style: {
                        marginTop: 20
                    },
                    children: [x.map((e => (0, a.jsx)(u.default, {
                        id: e._id,
                        name: e.name,
                        disabled: !1
                    }, e._id))), v.length ? (0, a.jsxs)(d.default, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth medium-shadow",
                        style: {
                            background: "rgba(255,56,56,0.3)",
                            padding: 30,
                            borderRadius: 10
                        },
                        children: [(0, a.jsx)("div", {
                            style: {
                                fontSize: 14,
                                fontStyle: "italic",
                                color: "yellow",
                                opacity: .9,
                                marginBottom: 10,
                                textAlign: "center"
                            },
                            children: "The following maps cannot be accessed until your map limit increases or you delete maps above to make space"
                        }), v.map(((e, t) => (0, a.jsx)(u.default, {
                            id: e._id,
                            name: e.name,
                            disabled: !0
                        }, e._id)))]
                    }) : null, t.length ? (0, a.jsx)("div", {
                        style: {
                            fontSize: 14,
                            fontStyle: "italic",
                            color: "rgba(255,255,255,0.8)"
                        },
                        children: "In Gimkit Creative, you can collaborate and play your maps with up to 60 players!"
                    }) : null]
                }) : (0, a.jsxs)(O, {
                    children: ["You haven't built any maps yet. Click the", " ", (0, a.jsx)("b", {
                        style: {
                            color: "#ffff94"
                        },
                        children: "Create New Map"
                    }), " button above to get started."]
                })]
            }), (0, a.jsx)(f.default, {
                open: i,
                close: h
            })]
        })
    };
    const j = i.default.div.attrs({
            className: "maxWidth"
        })(m || (m = b``)),
        C = i.default.div.attrs({
            className: "flex between maxWidth vc"
        })(h || (h = b``)),
        k = i.default.div(g || (g = b``)),
        S = i.default.div(x || (x = b`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 3px;
`), c.Fonts.FugazOne),
        E = i.default.div(v || (v = b`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`)),
        O = i.default.div.attrs({
            className: "maxWidth"
        })(y || (y = b`
  border: 2px dashed rgba(255, 255, 255, 0.25);
  padding: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`))
})), r.register("g3fST", (function(t, n) {
    e(t.exports, "invalidateCreatedMaps", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return c
    }));
    var a = r("eMRqp"),
        i = r("iMOcM"),
        o = r("bKPD8");
    const s = ["creative-created-maps"],
        l = () => o.default.invalidateQueries(s);
    var c = () => (0, a.useQuery)(s, (() => (0, i.requestAsPromise)({
        url: "/api/created-maps"
    })))
})), r.register("1qaQF", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        o = r("2FDaO"),
        s = r("93yIm"),
        l = r("gnAdP"),
        c = r("b9Zw0"),
        d = r("fBuQJ"),
        u = r("4y75y"),
        f = r("69SUA"),
        p = r("lKmIF"),
        m = r("iMOcM"),
        h = r("g3fST"),
        g = r("py2Xr"),
        x = r("4ifJF");
    let v;
    var y = e => {
        const [t, r, n] = (0, m.useBoolean)(!1), [o, f, x] = (0, m.useBoolean)(!1), [v, y] = i.useState(""), [w, j] = i.useState(""), [C, k, S] = (0, m.useBoolean)(!1), [E, O, M] = (0, m.useBoolean)(!1), [N, z, W] = (0, m.useBoolean)(!1);
        i.useEffect((() => {
            y("")
        }), [t]), i.useEffect((() => {
            j("")
        }), [o]);
        const D = (null == v ? void 0 : v.trim().length) < 2,
            F = () => {
                D || C || (k(), (0, m.request)({
                    url: "/api/created-map/rename",
                    data: {
                        id: e.id,
                        name: v
                    },
                    success: () => {
                        (0, h.invalidateCreatedMaps)()
                    },
                    error: e => {
                        (0, m.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error renaming map"
                            }
                        })
                    },
                    both: () => {
                        n(), S()
                    }
                }))
            },
            P = w !== e.name;
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(b, {
                onClick: () => {
                    e.disabled || N || (z(), (0, m.request)({
                        url: "/api/matchmaker/intent/map/edit/create",
                        data: {
                            mapId: e.id
                        },
                        success: e => window.location.href = `/host?id=${e}`,
                        error: e => {
                            (0, m.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error loading into your map. Please try again."
                                }
                            })
                        },
                        both: W
                    }))
                },
                disabled: e.disabled,
                children: [(0, a.jsx)("div", {
                    children: e.name
                }), (0, a.jsx)("div", {
                    onClick: e => e.stopPropagation(),
                    children: (0, a.jsx)(l.default, {
                        menu: {
                            items: [{
                                key: `rename-${e.id}`,
                                label: "Rename",
                                icon: (0, a.jsx)(g.default, {
                                    name: "far fa-edit"
                                }),
                                onClick: e => {
                                    e.domEvent.stopPropagation(), r()
                                }
                            }, {
                                key: `delete-${e.id}`,
                                label: "Delete",
                                icon: (0, a.jsx)(g.default, {
                                    name: "far fa-trash-alt"
                                }),
                                danger: !0,
                                onClick: e => {
                                    e.domEvent.stopPropagation(), f()
                                }
                            }]
                        },
                        children: (0, a.jsx)(s.default, {
                            icon: (0, a.jsx)(g.default, {
                                name: "far fa-ellipsis-h"
                            }),
                            type: "text",
                            style: {
                                color: p.default.White
                            }
                        })
                    })
                })]
            }), (0, a.jsxs)(d.default, {
                open: t,
                onCancel: n,
                title: "Rename",
                footer: [(0, a.jsx)(s.default, {
                    onClick: n,
                    children: "Cancel"
                }, "cancel-rename"), (0, a.jsx)(s.default, {
                    type: "primary",
                    onClick: F,
                    disabled: D,
                    loading: C,
                    children: "Rename"
                }, "rename-map")],
                children: [(0, a.jsxs)(u.default.Text, {
                    children: ["Enter a new name for ", (0, a.jsxs)("b", {
                        children: [e.name, ":"]
                    })]
                }), (0, a.jsx)(c.default, {
                    value: v,
                    style: {
                        marginTop: 5
                    },
                    placeholder: "New name...",
                    maxLength: 32,
                    onChange: e => y(e.target.value),
                    onPressEnter: F
                })]
            }), (0, a.jsxs)(d.default, {
                open: o,
                onCancel: x,
                title: "Delete Map",
                footer: [(0, a.jsx)(s.default, {
                    onClick: x,
                    children: "Cancel"
                }, "cancel-delete"), (0, a.jsx)(s.default, {
                    type: "primary",
                    danger: !0,
                    disabled: P,
                    onClick: () => {
                        P || E || (O(), (0, m.request)({
                            url: "/api/created-map/delete",
                            data: {
                                id: e.id
                            },
                            success: () => {
                                (0, h.invalidateCreatedMaps)()
                            },
                            error: e => {
                                (0, m.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error deleting map"
                                    }
                                })
                            },
                            both: () => {
                                x(), M()
                            }
                        }))
                    },
                    loading: E,
                    children: "Delete Map"
                }, "delete-map")],
                children: [(0, a.jsxs)(u.default.Text, {
                    children: ["Deleting a map is permanent and cannot be undone. Please enter the name of the map", " ", (0, a.jsx)("code", {
                        style: {
                            userSelect: "none"
                        },
                        children: e.name
                    }), " to confirm. Note that deleting a map will also remove it from Creative Discovery."]
                }), (0, a.jsx)(c.default, {
                    value: w,
                    style: {
                        marginTop: 10
                    },
                    placeholder: "Enter map name here ...",
                    maxLength: 32,
                    onChange: e => j(e.target.value)
                })]
            })]
        })
    };
    const b = (0, o.default)(x.VerticallyCentered).attrs({
        className: "maxWidth between"
    })(v || (v = (e => e)`
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-weight: ${0};
  line-height: 1;
  font-size: 14px;
  cursor: ${0};
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), f.FontWeights.Bold, (e => e.disabled ? "not-allowed" : "pointer"))
})), r.register("2Mij8", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        i = r("93yIm"),
        o = r("4gMdJ"),
        s = r("b9Zw0"),
        l = r("fBuQJ"),
        c = r("i5Qjx"),
        d = r("l4uFh"),
        u = r("fywoC"),
        f = r("iMOcM"),
        p = r("g3fST"),
        m = r("8p0tB"),
        h = r("2FDaO"),
        g = r("69SUA"),
        x = r("3tsin"),
        v = r("alREA"),
        y = r("iLqvE");
    let b;
    var w = e => {
        const t = u.useRef(null),
            [r, n] = u.useState(""),
            [h, g] = u.useState(),
            [b, w, C] = (0, f.useBoolean)(!1),
            k = (null == r ? void 0 : r.trim().length) < 2 || !h;
        u.useEffect((() => {
            e.open && setTimeout((() => {
                var e;
                null === (e = t.current) || void 0 === e || e.focus()
            }), 1)
        }), [e.open]);
        const S = () => {
                k || b || (w(), (0, f.request)({
                    url: "/api/created-map/create",
                    data: {
                        name: r,
                        mapStyle: h
                    },
                    success: t => {
                        (0, m.AnalyticsTrackEvent)({
                            event: "creative_map_created",
                            properties: {
                                mapStyle: h
                            }
                        }), (0, p.invalidateCreatedMaps)(), (0, f.request)({
                            url: "/api/matchmaker/intent/map/edit/create",
                            data: {
                                mapId: t
                            },
                            success: e => window.location.href = `/host?id=${e}`,
                            both: e.close
                        })
                    },
                    error: e => {
                        (0, f.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error creating map"
                            }
                        })
                    },
                    both: () => {
                        C(), n("")
                    }
                }))
            },
            E = e => {
                g(e)
            };
        return (0, a.jsx)(o.default, {
            theme: {
                algorithm: d.default.darkAlgorithm,
                token: {
                    colorBgBase: "#1C1D57"
                }
            },
            children: (0, a.jsx)(l.default, {
                open: e.open,
                onCancel: e.close,
                width: 668,
                footer: [(0, a.jsx)(i.default, {
                    onClick: e.close,
                    children: "Cancel"
                }, "cancel-new-map"), (0, a.jsx)(i.default, {
                    type: "primary",
                    disabled: k,
                    loading: b,
                    onClick: S,
                    children: "Create"
                }, "create-new-map")],
                children: (0, a.jsxs)(c.default, {
                    direction: "vertical",
                    size: 20,
                    className: "maxWidth",
                    children: [(0, a.jsxs)("div", {
                        className: "maxWidth",
                        children: [(0, a.jsx)(j, {
                            children: "Map Name"
                        }), (0, a.jsx)(s.default, {
                            ref: t,
                            value: r,
                            onChange: e => {
                                n(e.target.value)
                            },
                            placeholder: "Enter map name here...",
                            maxLength: 32,
                            onPressEnter: S,
                            size: "large"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "maxWidth",
                        children: [(0, a.jsx)(j, {
                            children: "Map Style"
                        }), (0, a.jsxs)("div", {
                            className: "flex",
                            style: {
                                flexWrap: "wrap",
                                gap: 14,
                                marginBottom: 3
                            },
                            children: [(0, a.jsx)(x.default, {
                                image: (0, v.default)("creative/top-down.jpeg"),
                                name: "Top-Down",
                                description: "Players move in all four directions",
                                selected: h === y.default.topDown,
                                onSelect: () => E(y.default.topDown)
                            }), (0, a.jsx)(x.default, {
                                image: (0, v.default)("creative/platformer.jpeg"),
                                name: "Platformer",
                                description: "Players move left & right, but can also jump",
                                selected: h === y.default.platformer,
                                onSelect: () => E(y.default.platformer)
                            })]
                        })]
                    })]
                })
            })
        })
    };
    const j = h.default.div(b || (b = (e => e)`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
`), g.Fonts.FugazOne)
})), r.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return l
    }));
    var a = r("6fFlL"),
        i = r("iMOcM"),
        o = r("dOsOD"),
        s = r("amvOw");
    const l = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), o.AnalyticsFlags.educatorOnly) && (null === (n = (0, i.getUser)()) || void 0 === n ? void 0 : n.accountType) !== a.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), r.register("3tsin", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("4ifJF"),
        s = r("69SUA"),
        l = r("8UJqa");
    let c, d, u, f, p, m, h = e => e;
    var g = e => {
        const {
            image: t,
            name: r,
            description: n
        } = e;
        return (0, a.jsxs)(x, {
            onClick: e.onSelect,
            style: {
                borderColor: e.selected ? l.default.Yellow : "rgba(255, 255, 255, 0.1)"
            },
            children: [e.tag ? (0, a.jsx)(b, {
                children: e.tag
            }) : null, (0, a.jsx)(v, {
                style: {
                    backgroundImage: `url("${t}")`
                }
            }), (0, a.jsxs)(y, {
                children: [(0, a.jsx)(w, {
                    children: r
                }), (0, a.jsx)(j, {
                    children: n
                })]
            })]
        })
    };
    const x = i.default.div(c || (c = h`
  background: rgba(255, 255, 255, 0.1);
  width: 303px;
  border-radius: 8px;
  overflow: hidden;
  border-width: 4px;
  border-style: solid;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`)),
        v = i.default.div.attrs({
            className: "maxWidth"
        })(d || (d = h`
  height: 132px;
  background-size: cover;
  background-position: center -57px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`)),
        y = (0, i.default)(o.CenteredColumn).attrs({
            className: "maxWidth"
        })(u || (u = h`
  padding: 10px;
  padding-top: 0px;
`)),
        b = i.default.div(f || (f = h`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 9px;
  padding: 3px 9px;
  border-radius: 20px;
  margin-bottom: 5px;
  background: ${0};
  color: ${0};
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`), s.Fonts.FugazOne, l.default.Yellow, l.default.Black),
        w = i.default.div(p || (p = h`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 16px;
`), s.Fonts.FugazOne),
        j = i.default.div(m || (m = h`
  font-family: ${0};
  font-size: 13px;
  margin-top: -3px;
`), s.Fonts.SFPro)
})), r.register("iLqvE", (function(t, r) {
    let n;
    var a;
    e(t.exports, "default", (function() {
        return i
    })), (a = n || (n = {})).topDown = "topDown", a.platformer = "platformer";
    var i = n
})), r.register("2O6vH", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        i = r("bfV0l"),
        o = r("4gMdJ"),
        s = r("l4uFh");
    r("fywoC");
    var l = r("kyvf1"),
        c = r("b1oE9"),
        d = r("69SUA"),
        u = r("hqWys"),
        f = r("7u0qw");
    var p = e => {
        return (0, f.OwnsSeasonTicket)() ? null : (0, a.jsx)(o.default, {
            theme: {
                algorithm: s.default.defaultAlgorithm
            },
            children: (0, a.jsx)(i.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (t = e.marginTop) && void 0 !== t ? t : 0,
                    marginBottom: null !== (r = e.marginBottom) && void 0 !== r ? r : 0
                },
                message: (0, a.jsxs)("span", {
                    children: [e.text, " with the", " ", (0, a.jsx)(l.default, {
                        to: c.SEASON_TICKET_BASE,
                        style: {
                            textDecoration: "underline",
                            fontWeight: d.FontWeights.Bold
                        },
                        children: u.SeasonTicketName.name
                    })]
                })
            })
        });
        var t, r
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
})), r.register("7u0qw", (function(t, n) {
    e(t.exports, "OwnsSeasonTicket", (function() {
        return i
    }));
    var a = r("iMOcM");
    const i = () => {
        var e, t, r;
        return null !== (r = null === (e = (0, a.getUser)()) || void 0 === e || null === (t = e.seasonTicket) || void 0 === t ? void 0 : t.active) && void 0 !== r && r
    }
})), r.register("lQNgb", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("i5Qjx"),
        o = r("4y75y");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("69SUA"),
        c = r("lKmIF"),
        d = r("py2Xr"),
        u = r("4ifJF"),
        f = r("7C041");
    let p, m, h = e => e;
    const g = e => (0, a.jsx)("a", {
        href: e.url,
        target: "_blank",
        className: "maxWidth",
        children: (0, a.jsxs)(y, {
            children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)("div", {
                    children: (0, a.jsx)(o.default.Text, {
                        style: {
                            fontWeight: l.FontWeights.Bold,
                            color: c.default.White,
                            textDecoration: "underline"
                        },
                        children: e.title
                    })
                }), (0, a.jsx)(o.default.Text, {
                    style: {
                        color: "rgba(255,255,255,0.8)"
                    },
                    italic: !0,
                    children: e.description
                })]
            }), (0, a.jsx)("div", {
                children: (0, a.jsx)(o.default.Text, {
                    style: {
                        color: c.default.White
                    },
                    children: (0, a.jsx)(d.default, {
                        name: "fas fa-external-link"
                    })
                })
            })]
        })
    });
    var x = () => (0, a.jsxs)(v, {
        children: [(0, a.jsx)(f.Title, {
            children: "Resources"
        }), (0, a.jsxs)(i.default, {
            size: 10,
            direction: "vertical",
            className: "maxWidth",
            style: {
                marginTop: 10
            },
            children: [(0, a.jsx)(g, {
                title: "Changelog",
                description: "Read about the latest updates to Gimkit Creative!",
                url: "https://docs.creative.gimkit.com/changelog"
            }), (0, a.jsx)(g, {
                title: "Community Forum",
                description: "Ask questions and get help building your own maps!",
                url: "https://forum.creative.gimkit.com"
            }), (0, a.jsx)(g, {
                title: "Documentation",
                description: "Documentation to help you build your own maps.",
                url: "https://docs.creative.gimkit.com"
            })]
        })]
    });
    const v = s.default.div(p || (p = h``)),
        y = (0, s.default)(u.VerticallyCentered).attrs({
            className: "maxWidth"
        })(m || (m = h`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`))
})), r.register("2LUs3", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("eMRqp"),
        i = r("iMOcM");
    r("bKPD8");
    const o = ["creative-creative-basics"];
    var s = () => (0, a.useQuery)(o, (() => (0, i.requestAsPromise)({
        url: "/api/created-map/basics"
    })))
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("kqQIs"),
        i = r("2Af7I"),
        o = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        l = r("cY4lv"),
        c = r("kYx4h"),
        d = 44;

    function u(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var f = o.forwardRef((function(e, t) {
            var r, n = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                m = e.disableShrink,
                h = void 0 !== m && m,
                g = e.size,
                x = void 0 === g ? 40 : g,
                v = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                w = e.value,
                j = void 0 === w ? 0 : w,
                C = e.variant,
                k = void 0 === C ? "indeterminate" : C,
                S = (0, i.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                E = {},
                O = {},
                M = {};
            if ("determinate" === k || "static" === k) {
                var N = 2 * Math.PI * ((d - b) / 2);
                E.strokeDasharray = N.toFixed(3), M["aria-valuenow"] = Math.round(j), "static" === k ? (E.strokeDashoffset = "".concat(((100 - j) / 100 * N).toFixed(3), "px"), O.transform = "rotate(-90deg)") : (E.strokeDashoffset = "".concat((r = (100 - j) / 100, r * r * N).toFixed(3), "px"), O.transform = "rotate(".concat((270 * u(j / 70)).toFixed(3), "deg)"))
            }
            return o.createElement("div", (0, a.default)({
                className: (0, s.default)(n.root, l, "inherit" !== p && n["color".concat((0, c.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [k]),
                style: (0, a.default)({
                    width: x,
                    height: x
                }, O, v),
                ref: t,
                role: "progressbar"
            }, M, S), o.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(d, " ").concat(d)
            }, o.createElement("circle", {
                className: (0, s.default)(n.circle, h && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [k]),
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
})), r.register("43I91", (function(e, t) {
    e.exports = import("./" + r("ihc6Q").resolve("1wUUq")).then((() => r("hiWRZ")))
})), r.register("4S4N5", (function(e, t) {
    e.exports = import("./" + r("ihc6Q").resolve("3X4Jt")).then((() => r("4rjol")))
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("7WFzL"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "CopyOutlined";
    var c = i.forwardRef(l)
})), r.register("7WFzL", (function(t, r) {
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
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("6tWM4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "EditOutlined";
    var c = i.forwardRef(l)
})), r.register("6tWM4", (function(t, r) {
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
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        i = r("fywoC"),
        o = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = i.useRef(null), [d, u] = i.useState(0), [f, p] = i.useState(0), [m, h] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: g
            } = i.useContext(o.ConfigContext), x = g(t || "select", s);
            return i.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            u(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(x)}` : `.${x}-dropdown`,
                                i = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
                            i && (clearInterval(t), e.observe(i))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), i.createElement(o.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, i.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: d,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, i.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: m,
                visible: m,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = r("lt5sb"),
        i = r("aWAHQ");
    const o = new(0, a.Keyframes)("antMoveDownIn", {
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
        l = new(0, a.Keyframes)("antMoveLeftIn", {
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
        c = new(0, a.Keyframes)("antMoveLeftOut", {
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
        d = new(0, a.Keyframes)("antMoveRightIn", {
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
        u = new(0, a.Keyframes)("antMoveRightOut", {
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
                inKeyframes: o,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: l,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: d,
                outKeyframes: u
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: o
            } = f[t];
            return [(0, i.initMotion)(n, a, o, e.motionDurationMid), {
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
        var r, i, o, s, l, c, d = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (o = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = a[t.format] || a.default;
                            window.clipboardData.setData(i, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            d = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), o()
        }
        return d
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
        return i
    }));
    var a = r("fywoC");

    function i(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            i = r[1];
        return (0, a.useEffect)((function() {
            i(t.matches);
            var e = function(e) {
                return i(e.matches)
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
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var o = i(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = o.useState(s()),
            t = e[0],
            r = e[1];
        return o.useLayoutEffect((function() {
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
        i = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = o(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            i = s.useCallback((function() {
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
                var e = new ResizeObserver(i);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, i]), n({
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
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = i.forwardRef(l)
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
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = i.forwardRef(l)
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
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("ayjhg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = i.forwardRef(l)
})), r.register("ayjhg", (function(t, r) {
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
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return i
    }));
    var a = r("hrYih");
    const i = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = i.forwardRef(l)
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
        i = r("3KQc0"),
        o = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, o.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, i.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("6rvT3"),
        i = r("9iNNJ"),
        o = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
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
    var d = function(e, t) {
        const r = c(),
            n = (0, o.default)(t);
        return (0, i.default)((() => {
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
        return i
    }));
    var i = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC");
    var i = e => {
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
                for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return i
    }));
    var a = r("bd8je");
    const i = e => {
        a.history.push(e)
    }
})), r.register("7uYFt", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("hC3BQ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "EnterOutlined";
    var c = i.forwardRef(l)
})), r.register("hC3BQ", (function(t, r) {
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
                    d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "enter",
        theme: "outlined"
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            i = (0, n.forwardRef)((function(e, r) {
                var i = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(i.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return i.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, i
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = i.forwardRef(l)
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
}));