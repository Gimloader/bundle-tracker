function e(e, t, a, r) {
    Object.defineProperty(e, t, {
        get: a,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("2XIEk", (function(t, r) {
    e(t.exports, "default", (function() {
        return b
    }));
    var n = a("hxEiv"),
        i = a("fywoC"),
        l = a("iMOcM"),
        o = a("cPGmn"),
        s = a("jtOL4"),
        d = a("93yIm"),
        c = a("4gMdJ"),
        u = a("fC6cp"),
        f = a("fBuQJ"),
        h = a("i5Qjx"),
        g = a("l4uFh"),
        m = a("1DrO4"),
        p = a("2FDaO"),
        v = a("jERab");
    let x;
    var b = e => {
        const [t, a] = i.useState(!0), [r, p] = i.useState([]), [x, b] = (0, s.useLocalstorage)("last-viewed-news", 0), [j, w] = i.useState(!1), [C, S, k] = (0, l.useBoolean)(!0), N = i.useCallback((() => {
            w(!0)
        }), [w]), M = i.useCallback((() => {
            w(!1), e.onClose && e.onClose()
        }), [w, e.onClose]);
        if ((0, o.useDidMount)((() => {
                (0, l.request)({
                    url: "/api/news/fetch",
                    data: {
                        isStudent: (0, l.isStudent)()
                    },
                    success: t => {
                        p(t);
                        const a = null != x ? x : 0,
                            r = t[0];
                        r && (r && r.publishDate > a && e.allowAutoOpen && N(), b(r.publishDate))
                    },
                    error: t => {
                        e.open && (0, l.throwMessageError)({
                            e: t,
                            default: {
                                title: "Error loading news"
                            }
                        })
                    },
                    both: () => {
                        a(!1)
                    }
                })
            })), i.useEffect((() => {
                e.open && N()
            }), [e.open]), t) return null;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(y, {}), (0, n.jsx)(c.default, {
                theme: {
                    algorithm: g.default.defaultAlgorithm
                },
                children: (0, n.jsxs)(f.default, {
                    className: "news-modal",
                    open: j,
                    onCancel: M,
                    closable: !1,
                    footer: null,
                    width: 650,
                    bodyStyle: {
                        padding: 0
                    },
                    style: {
                        top: 25,
                        padding: 0,
                        marginBottom: 100
                    },
                    children: [(0, n.jsx)(v.default, {
                        close: M
                    }), r.length ? 1 !== r.length && C ? (0, n.jsxs)("div", {
                        style: {
                            paddingBottom: 35
                        },
                        children: [(0, n.jsx)(m.default, {
                            item: r[0],
                            isFirstItem: !0
                        }), (0, n.jsx)("div", {
                            className: "maxWidth flex-center",
                            style: {
                                marginTop: 30
                            },
                            children: (0, n.jsx)(d.default, {
                                shape: "round",
                                onClick: k,
                                children: "View more news..."
                            })
                        })]
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(h.default, {
                            className: "maxWidth",
                            size: 30,
                            direction: "vertical",
                            style: {
                                paddingBottom: 35
                            },
                            split: (0, n.jsx)(u.default, {
                                style: {
                                    margin: 0
                                }
                            }),
                            children: r.map(((e, t) => (0, n.jsx)(m.default, {
                                item: e,
                                isFirstItem: 0 === t
                            }, e._id)))
                        })
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "maxWidth flex-center",
                            style: {
                                padding: 50,
                                fontSize: 16,
                                textAlign: "center"
                            },
                            children: "There currently is no news. Check back again later!"
                        })
                    })]
                })
            })]
        })
    };
    const y = (0, p.createGlobalStyle)(x || (x = (e => e)`
  .news-modal > .ant-modal-content {
    overflow: hidden;
    padding: 0px !important;
  }
`))
})), a.register("jtOL4", (function(t, r) {
    e(t.exports, "useLocalstorage", (function() {
        return i
    }));
    var n = a("fywoC");

    function i(e, t) {
        void 0 === t && (t = null);
        var a = (0, n.useState)(l()),
            r = a[0],
            i = a[1];

        function l() {
            if ("undefined" == typeof localStorage) return null;
            var t = localStorage.getItem(e) || "null";
            try {
                return JSON.parse(t)
            } catch (e) {
                console.error(e)
            }
            return t
        }
        var o = (0, n.useCallback)((function(t) {
                var a;
                i(t), a = t, "undefined" != typeof localStorage && localStorage.setItem(e, JSON.stringify(a))
            }), []),
            s = (0, n.useCallback)((function(t) {
                t.storageArea === localStorage && t.key === e && i(t.newValue)
            }), []),
            d = (0, n.useCallback)((function() {
                if (o(null), "undefined" == typeof localStorage) return !1;
                localStorage.removeItem(e)
            }), [e]);
        return (0, n.useEffect)((function() {
            var e;
            null !== (e = l()) && "null" !== e || o(t)
        }), []), (0, n.useEffect)((function() {
            if ("undefined" != typeof window) return window.addEventListener("storage", s),
                function() {
                    window.removeEventListener("storage", s)
                };
            console.warn("useLocalstorage: window is undefined.")
        }), []), Object.assign([r, o, d], {
            value: r,
            remove: d,
            set: o
        })
    }
})), a.register("1DrO4", (function(r, n) {
    e(r.exports, "default", (function() {
        return k
    }));
    var i = a("hxEiv"),
        l = a("fywoC"),
        o = a("eEYFA"),
        s = a("4Gnmi"),
        d = a("bmTnW"),
        c = a("cPGmn"),
        u = a("2FDaO"),
        f = a("iMOcM"),
        h = a("2nCEo"),
        g = a("69SUA"),
        m = a("py2Xr");
    let p, v, x, b, y, j, w = e => e;
    const C = t(d)((() => a("9mi4b"))),
        S = () => (0, i.jsx)(s.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            },
            style: {
                padding: 20
            }
        });
    var k = e => {
        const [a, r] = l.useState(), {
            item: {
                notionPageId: n,
                publishDate: s
            }
        } = e;
        (0, c.useDidMount)((() => {
            C.preload()
        })), l.useEffect((() => {
            !a && n && (0, o.Request)({
                url: `/api/content/${n}`,
                cacheKey: "NOTION_CONTENT",
                success: e => r(e)
            })
        }), [n, a]);
        return (0, i.jsx)(N, {
            children: (() => {
                if (!a) return (0, i.jsx)(S, {});
                const {
                    title: r,
                    coverImage: o
                } = (() => {
                    var e, t;
                    const r = n.replace(/-/g, ""),
                        i = Object.keys(a).find((e => e.replace(/-/g, "") === r));
                    if (!i) return null;
                    const l = a[i];
                    var o;
                    const s = null !== (o = null === (e = l.value.properties) || void 0 === e ? void 0 : e.title[0][0]) && void 0 !== o ? o : "News";
                    var d;
                    let c = null !== (d = null === (t = l.value.format) || void 0 === t ? void 0 : t.page_cover) && void 0 !== d ? d : null;
                    return c && c.startsWith("/") && (c = `https://notion.so${c}`), {
                        title: s,
                        coverImage: c
                    }
                })();
                return (0, i.jsxs)(l.Suspense, {
                    fallback: (0, i.jsx)(S, {}),
                    children: [o ? (0, i.jsx)(M, {
                        draggable: !1,
                        src: o
                    }) : null, (0, i.jsxs)(E, {
                        children: [(0, i.jsxs)(O, {
                            style: {
                                marginTop: e.isFirstItem && !o ? 30 : 0
                            },
                            children: [(0, i.jsx)(A, {
                                children: r
                            }), (0, i.jsxs)(I, {
                                children: [(0, i.jsx)(m.default, {
                                    name: "far fa-calendar-alt",
                                    style: {
                                        fontSize: "0.8em",
                                        marginRight: 5
                                    }
                                }), (0, f.capitalizeFirstLetter)(t(h).unix(s).fromNow())]
                            })]
                        }), (0, i.jsx)(C, {
                            content: a
                        })]
                    })]
                })
            })()
        })
    };
    const N = u.default.div.attrs({
            className: "maxWidth"
        })(p || (p = w``)),
        M = u.default.img.attrs({
            className: "maxWidth"
        })(v || (v = w`
  margin-bottom: 25px;
`)),
        E = u.default.div.attrs({
            className: "maxWidth"
        })(x || (x = w`
  padding: 0px 20px;
  font-family: ${0};
`), g.Fonts.SFPro),
        O = u.default.div.attrs({
            className: "maxWidth flex between vc"
        })(b || (b = w`
  line-height: 1;
  margin-bottom: 20px;
`)),
        A = u.default.div(y || (y = w`
  font-size: 28px;
  font-weight: ${0};
`), g.FontWeights.Bold),
        I = u.default.div.attrs({
            className: "flex vc"
        })(j || (j = w`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 20px;
  font-size: 12px;
  flex-shrink: 0;
`))
})), a.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([a("g2MeW")(new URL(a("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + a("ihc6Q").resolve("6iUO5"))]).then((() => a("jLITb")))
})), a.register("g2MeW", (function(e, t) {
    var r = a("7vyZq");
    e.exports = r((function(e) {
        return new Promise((function(t, a) {
            var r = document.getElementsByTagName("link");
            if ([].concat(r).some((function(t) {
                    return t.href === e && t.rel.indexOf("stylesheet") > -1
                }))) t();
            else {
                var n = document.createElement("link");
                n.rel = "stylesheet", n.href = e, n.onerror = function(e) {
                    n.onerror = n.onload = null, n.remove(), a(e)
                }, n.onload = function() {
                    n.onerror = n.onload = null, t()
                }, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }))
    }))
})), a.register("7vyZq", (function(e, t) {
    var a = {},
        r = {},
        n = {};

    function i(e) {
        switch (e) {
            case "preload":
                return r;
            case "prefetch":
                return n;
            default:
                return a
        }
    }
    e.exports = function(e, t) {
        return function(a) {
            var r = i(t);
            return r[a] ? r[a] : r[a] = e.apply(null, arguments).catch((function(e) {
                throw delete r[a], e
            }))
        }
    }
})), a.register("ihc6Q", (function(t, a) {
    var r, n;
    e(t.exports, "register", (function() {
        return r
    }), (function(e) {
        return r = e
    })), e(t.exports, "resolve", (function() {
        return n
    }), (function(e) {
        return n = e
    }));
    var i = {};
    r = function(e) {
        for (var t = Object.keys(e), a = 0; a < t.length; a++) i[t[a]] = e[t[a]]
    }, n = function(e) {
        var t = i[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t
    }
})), a.register("jERab", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var n = a("hxEiv");
    a("fywoC");
    var i = a("2FDaO"),
        l = a("4aaLU"),
        o = a("93yIm"),
        s = a("4gMdJ"),
        d = a("l4uFh"),
        c = a("legzE"),
        u = a("69SUA"),
        f = a("46bRO");
    let h, g, m, p, v = e => e;
    var x = e => (0, n.jsxs)(b, {
        children: [(0, n.jsxs)(y, {
            children: [(0, n.jsxs)(j, {
                children: [f.COMPANY_NAME, " News"]
            }), (0, n.jsxs)(w, {
                children: ["Your source for all things ", f.COMPANY_NAME, "!"]
            })]
        }), (0, n.jsx)("div", {
            children: (0, n.jsx)(s.default, {
                theme: {
                    algorithm: d.default.darkAlgorithm
                },
                children: (0, n.jsx)(o.default, {
                    onClick: e.close,
                    type: "text",
                    icon: (0, n.jsx)(c.default, {})
                })
            })
        })]
    });
    const b = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(h || (h = v`
  color: ${0};
  padding: 20px;
  background: #730aad;
`), l.default.White),
        y = i.default.div(g || (g = v``)),
        j = i.default.div(m || (m = v`
  font-size: 16px;
  font-weight: ${0};
`), u.FontWeights.Bold),
        w = i.default.div(p || (p = v`
  font-size: 12px;
  font-style: italic;
  opacity: 0.9;
`))
})), a.register("cHCps", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = a("hxEiv");
    a("fywoC");
    var i = a("dsIqT");
    var l = e => (0, n.jsx)(i.default, {
        ...e
    })
})), a.register("dsIqT", (function(t, r) {
    e(t.exports, "default", (function() {
        return N
    }));
    var n = a("hxEiv"),
        i = a("fywoC"),
        l = a("iMOcM"),
        o = a("fBwf1"),
        s = a("jIVjI"),
        d = a("3bHhZ"),
        c = a("gvUHr"),
        u = a("2FDaO"),
        f = a("lABPu"),
        h = a("8j47p"),
        g = a("hDWWf"),
        m = a("hSz8d"),
        p = a("aYjbz"),
        v = a("69SUA"),
        x = a("4gMdJ"),
        b = a("l4uFh"),
        y = a("Divs5"),
        j = a("h5M3u");
    let w, C, S, k = e => e;
    var N = e => {
        const [t, a] = i.useState(!1), {
            navigation: r
        } = i.useContext(c.default), {
            ref: u,
            height: w
        } = (0, d.useComponentSize)();
        i.useEffect((() => {
            document.documentElement.style.setProperty("--header-height", `${w}px`), r.headerHeight = w
        }), [w]);
        const C = i.useMemo((() => {
                var t;
                return null !== (t = e.theme) && void 0 !== t ? t : g.SiteHeaderTheme.light
            }), [e.theme]),
            S = i.useMemo((() => {
                var t;
                return null !== (t = e.alpha) && void 0 !== t ? t : m.SiteHeaderAlpha.standard
            }), [e.alpha]),
            k = i.useMemo((() => S === m.SiteHeaderAlpha.none ? 1 : S === m.SiteHeaderAlpha.darker ? C === g.SiteHeaderTheme.light ? .9 : .75 : C === g.SiteHeaderTheme.light ? .85 : .45), [S, C]),
            N = i.useMemo((() => C === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${k})` : `rgba(16,16,16, ${k})`), [C, S]),
            A = i.useMemo((() => C === g.SiteHeaderTheme.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)"), [C, k]);
        return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(x.default, {
                theme: {
                    algorithm: C === g.SiteHeaderTheme.light ? b.default.defaultAlgorithm : b.default.darkAlgorithm,
                    token: {
                        fontFamily: v.Fonts.SFPro
                    }
                },
                children: [(0, n.jsxs)(M, {
                    ref: u,
                    style: e.containerDivStyle,
                    children: [(0, n.jsx)(E, {
                        background: N,
                        hideBorder: e.hideBorder,
                        borderColor: A,
                        children: (0, n.jsx)(o.default.Provider, {
                            value: s.default,
                            children: (0, n.jsxs)(O, {
                                children: [(0, n.jsx)(j.default, {
                                    theme: e.theme
                                }), (0, l.isLoggedIn)() ? (0, n.jsx)(y.default, {
                                    showUpgradeModal: () => a(!0),
                                    theme: C
                                }) : (0, n.jsx)(f.default, {
                                    theme: e.theme
                                })]
                            })
                        })
                    }), e.children]
                }), t ? (0, n.jsx)(h.default, {
                    id: "header",
                    visible: t,
                    close: () => a(!1),
                    showModes: !0
                }) : null, e.includeSpacer ? (0, n.jsx)(p.default, {}) : null]
            })
        })
    };
    const M = u.default.div.attrs({
            className: "maxWidth"
        })(w || (w = k`
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`)),
        E = u.default.header(C || (C = k`
  display: flex;
  height: auto;
  background: ${0};
  backdrop-filter: blur(4px);
  overflow: hidden;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 25px;
  justify-content: space-between;
  width: 100%;
  box-shadow: inset 0 -1px ${0};
  @media print {
    display: none;
  }
`), (e => e.background), (e => e.hideBorder ? "rgba(255,255,255,0)" : e.borderColor)),
        O = u.default.div.attrs({
            className: "flex maxWidth between vc"
        })(S || (S = k``))
})), a.register("fBwf1", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = a("fywoC"),
        i = a("jIVjI");
    var l = n.createContext(i.default)
})), a.register("jIVjI", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = a("7guh7"),
        i = a("3mkC4");
    var l = {
        navigation: new(0, n.default),
        billing: new(0, i.default)
    }
})), a.register("7guh7", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = a("kHqmx"),
        i = a("4MuSt"),
        l = a("9XhDS");
    class o {
        constructor() {
            this.currentTab = l.default.accountInformation, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], o.prototype, "currentTab", void 0);
    var s = o
})), a.register("9XhDS", (function(t, a) {
    let r;
    var n;
    e(t.exports, "default", (function() {
        return i
    })), (n = r || (r = {})).accountInformation = "accountInformation", n.gameSettings = "gameSettings", n.billing = "billing", n.support = "support";
    var i = r
})), a.register("3mkC4", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = a("kHqmx"),
        i = a("4MuSt");
    const l = i.observable.array();
    class o {
        constructor() {
            this.planName = "", this.planDescription = "", this.billingInterval = "", this.hasNextCharge = false, this.nextChargeAmount = "", this.nextChargeDate = "", this.accountBalance = 0, this.charges = l, this.cardName = "", this.last4DigitsOfCard = "", this.stripePublicKey = "", this.canDowngrade = false, this.downgradeMessage = "", this.downgradeDateMessage = "", this.reset = () => {
                this.planName = "", this.planDescription = "", this.billingInterval = "", this.hasNextCharge = false, this.nextChargeAmount = "", this.nextChargeDate = "", this.accountBalance = 0, this.charges.replace([]), this.cardName = "", this.last4DigitsOfCard = "", this.stripePublicKey = "", this.canDowngrade = false, this.downgradeMessage = "", this.downgradeDateMessage = ""
            }, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], o.prototype, "planName", void 0), (0, n.__decorate)([i.observable], o.prototype, "planDescription", void 0), (0, n.__decorate)([i.observable], o.prototype, "billingInterval", void 0), (0, n.__decorate)([i.observable], o.prototype, "hasNextCharge", void 0), (0, n.__decorate)([i.observable], o.prototype, "nextChargeAmount", void 0), (0, n.__decorate)([i.observable], o.prototype, "nextChargeDate", void 0), (0, n.__decorate)([i.observable], o.prototype, "accountBalance", void 0), (0, n.__decorate)([i.observable], o.prototype, "charges", void 0), (0, n.__decorate)([i.observable], o.prototype, "cardName", void 0), (0, n.__decorate)([i.observable], o.prototype, "last4DigitsOfCard", void 0), (0, n.__decorate)([i.observable], o.prototype, "stripePublicKey", void 0), (0, n.__decorate)([i.observable], o.prototype, "canDowngrade", void 0), (0, n.__decorate)([i.observable], o.prototype, "downgradeMessage", void 0), (0, n.__decorate)([i.observable], o.prototype, "downgradeDateMessage", void 0), (0, n.__decorate)([i.action], o.prototype, "reset", void 0);
    var s = o
})), a.register("lABPu", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = a("hxEiv"),
        i = a("lpEVe");
    a("fywoC");
    var l = a("97s6z"),
        o = a("93yIm"),
        s = a("kyvf1"),
        d = a("b1oE9"),
        c = a("77qSl"),
        u = a("fzxir"),
        f = a("e1mXL"),
        h = a("hDWWf");
    var g = (0, i.observer)((e => {
        const t = (0, c.useMediaMatch)("(max-width: 600px)"),
            a = (0, c.useMediaMatch)("(max-width: 750px)"),
            r = [];
        return r.push({
            key: "join",
            item: (0, n.jsx)(f.default, {
                onClick: () => {
                    window.open("/join", "_self")
                },
                icon: (0, n.jsx)("i", {
                    className: "far fa-gamepad"
                }),
                theme: h.SiteHeaderTheme.light,
                fontSize: 15,
                children: "Join Game"
            })
        }), t || a || r.push({
            key: "pricing",
            item: (0, n.jsx)(f.default, {
                path: d.GROUP_PRICING,
                icon: (0, n.jsx)("i", {
                    className: "far fa-users"
                }),
                theme: h.SiteHeaderTheme.light,
                fontSize: 15,
                children: "  Group Pricing"
            })
        }), r.push({
            key: "signup",
            item: (0, n.jsx)(f.default, {
                path: d.REGISTER_BASE,
                icon: (0, n.jsx)("i", {
                    className: "far fa-user-plus"
                }),
                theme: h.SiteHeaderTheme.light,
                fontSize: 15,
                children: "Sign Up"
            })
        }), r.push({
            key: "login",
            item: (0, n.jsx)(s.default, {
                to: (() => {
                    let e = "/login";
                    return window && window.location && window.location.pathname && window.location.pathname.startsWith("/view") && (e += `?location=${encodeURIComponent(window.location.pathname)}`), e
                })(),
                className: "maxAll",
                children: (0, n.jsx)(o.default, {
                    type: "primary",
                    size: "large",
                    icon: (0, n.jsx)(l.default, {}),
                    children: "Login"
                })
            })
        }), (0, n.jsx)(u.default, {
            items: r
        })
    }))
})), a.register("97s6z", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = a("dnh3u"),
        i = a("fywoC"),
        l = a("ldkoB"),
        o = a("dwKuN"),
        s = function(e, t) {
            return i.createElement(o.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "LoginOutlined";
    var d = i.forwardRef(s)
})), a.register("ldkoB", (function(t, a) {
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
                tag: "defs",
                attrs: {},
                children: [{
                    tag: "style",
                    attrs: {}
                }]
            }, {
                tag: "path",
                attrs: {
                    d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"
                }
            }]
        },
        name: "login",
        theme: "outlined"
    }
})), a.register("fzxir", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var n = a("hxEiv"),
        i = a("93yIm"),
        l = a("fC6cp"),
        o = a("9xElQ"),
        s = a("i5Qjx"),
        d = a("fywoC"),
        c = a("2FDaO"),
        u = a("eOMWZ"),
        f = a("56tQE"),
        h = a("3bHhZ"),
        g = a("iMOcM");
    let m, p, v = e => e;
    var x = e => {
        const {
            width: t
        } = (0, h.useWindowSize)(), [a, r, c] = (0, g.useBoolean)(!1), [m, p] = d.useState(!1), [v, x] = d.useState(null), j = d.useRef(), [w] = (0, f.default)(j), C = d.useRef(), [S] = (0, f.default)(C);
        return d.useEffect((() => {
            !!t && !!w && !S && (!v || t > v) && x(t)
        }), [t, v, w, S]), d.useEffect((() => {
            p(!!(v && t <= v))
        }), [t, v]), (0, n.jsxs)(b, {
            ref: j,
            children: [(0, n.jsx)("div", {
                ref: C,
                style: {
                    flex: 1
                }
            }), m ? (0, n.jsx)("div", {
                style: {
                    flexShrink: 0
                },
                children: (0, n.jsx)(i.default, {
                    onClick: r,
                    type: "text",
                    icon: (0, n.jsx)(u.default, {})
                })
            }) : (0, n.jsx)(y, {
                style: {
                    opacity: S ? 1 : 0
                },
                children: (0, n.jsx)(s.default, {
                    size: 10,
                    split: (0, n.jsx)(l.default, {
                        type: "vertical"
                    }),
                    direction: "horizontal",
                    children: e.items.map((e => (0, n.jsx)(d.Fragment, {
                        children: e.item
                    }, e.key)))
                })
            }), m ? (0, n.jsx)(o.default, {
                placement: "right",
                open: a,
                onClose: c,
                children: (0, n.jsx)(s.default, {
                    size: 2,
                    split: (0, n.jsx)(l.default, {
                        type: "horizontal"
                    }),
                    direction: "vertical",
                    className: "maxWidth",
                    children: e.items.map((e => (0, n.jsx)(d.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "maxAll flex-center",
                            children: e.item
                        })
                    }, e.key)))
                })
            }) : null]
        })
    };
    const b = c.default.div(m || (m = v`
  flex: 1;
  overflow: hidden;
  display: flex;
`)),
        y = c.default.div(p || (p = v`
  flex-shrink: 0;
`))
})), a.register("eOMWZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = a("dnh3u"),
        i = a("fywoC"),
        l = a("3s2Wi"),
        o = a("dwKuN"),
        s = function(e, t) {
            return i.createElement(o.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "MenuOutlined";
    var d = i.forwardRef(s)
})), a.register("3s2Wi", (function(t, a) {
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
                    d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "menu",
        theme: "outlined"
    }
})), a.register("e1mXL", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = a("hxEiv"),
        i = a("fywoC"),
        l = a("2FDaO"),
        o = a("hDWWf"),
        s = a("lKmIF"),
        d = a("kyvf1"),
        c = a("69SUA");
    let u;
    var f = e => {
        const {
            icon: t,
            path: a,
            theme: r
        } = e, l = i.useMemo((() => r === o.SiteHeaderTheme.light ? "inherit" : s.default.White), [r]);
        return (0, n.jsx)(d.default, {
            className: "flex maxWidth",
            to: a,
            onClick: e.onClick,
            style: {
                cursor: "pointer"
            },
            children: (0, n.jsxs)(h, {
                color: l,
                style: {
                    fontSize: e.fontSize || 20
                },
                children: [t ? (0, n.jsx)("span", {
                    style: {
                        marginRight: "0.35em",
                        fontSize: "1em"
                    },
                    children: t
                }) : null, (0, n.jsx)("span", {
                    style: {
                        fontSize: "0.9em",
                        marginTop: "0.1em"
                    },
                    children: e.children
                })]
            })
        })
    };
    const h = l.default.div.attrs({
        className: "flex-center"
    })(u || (u = (e => e)`
  line-height: 1;
  background: transparent;
  white-space: nowrap;
  color: ${0};
  font-family: ${0};
  cursor: pointer;
  font-weight: ${0};
`), (e => e.color), c.Fonts.SFPro, c.FontWeights.Bold)
})), a.register("aYjbz", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var n = a("hxEiv");
    a("fywoC");
    var i = () => (0, n.jsx)("div", {
        style: {
            height: "var(--header-height)",
            flexShrink: 0,
            width: "100%"
        }
    })
})), a.register("Divs5", (function(t, r) {
    e(t.exports, "default", (function() {
        return W
    }));
    var n = a("hxEiv"),
        i = a("fywoC"),
        l = a("93yIm"),
        o = a("4gMdJ"),
        s = a("gnAdP"),
        d = a("13AMv"),
        c = a("l4uFh"),
        u = a("jIVjI"),
        f = a("b1oE9"),
        h = a("9XhDS"),
        g = a("iMOcM"),
        m = a("2FDaO"),
        p = a("69SUA"),
        v = a("6HXn4"),
        x = a("dv9KL"),
        b = a("kiOoU"),
        y = a("kVS28"),
        j = a("exbzb"),
        w = a("hKWVS"),
        C = a("aXEUe"),
        S = a("dohZB"),
        k = a("iROck"),
        N = a("fzxir"),
        M = a("e1mXL"),
        E = a("9Vz35"),
        O = a("2XIEk"),
        A = a("hrYih");
    let I, z, _, F = e => e;
    const D = e => (0, n.jsx)("img", {
        src: e.src,
        style: {
            height: "1em",
            display: "block"
        }
    });
    var W = e => {
        const [t, a, r] = (0, g.useBoolean)(!1), [m, p] = (0, g.useBoolean)(!1), I = (0, g.isUpgraded)(), z = [], _ = i.useMemo((() => () => {
            const e = [{
                name: "Settings",
                icon: C.default,
                onClick: () => (0, k.NavigateTo)("/settings")
            }, {
                name: "Billing",
                icon: x.default,
                onClick: () => {
                    u.default.navigation.currentTab = h.default.billing, (0, k.NavigateTo)("/settings")
                },
                blockIf: [g.isStudent]
            }, {
                name: "News",
                icon: w.default,
                onClick: () => {
                    a(), p()
                }
            }, {
                name: "Group Licenses",
                icon: S.default,
                onClick: () => (0, k.NavigateTo)(f.GROUP_DASHBOARD),
                blockIf: [g.isStudent]
            }, {
                name: "GiveKit",
                icon: b.default,
                onClick: () => (0, k.NavigateTo)(f.GIVEKIT),
                blockIf: [g.isStudent]
            }, {
                name: "Support",
                icon: j.default,
                onClick: () => {
                    u.default.navigation.currentTab = h.default.support, (0, k.NavigateTo)("/settings")
                },
                blockIf: [g.isStudent]
            }, {
                name: "Logout",
                icon: y.default,
                onClick: () => (0, g.request)({
                    url: "/logout",
                    success: () => {
                        A.default.reset()
                    },
                    both: () => window.open("/", "_self")
                })
            }];
            return (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)(d.default, {
                    style: {
                        width: 250
                    },
                    children: [(0, g.isStudent)() ? null : (0, n.jsxs)(B, {
                        children: [(0, n.jsx)(T, {
                            children: (0, g.getFirstName)((0, g.getUser)())
                        }), (0, n.jsx)(P, {
                            children: (0, v.default)((0, g.getUser)().type)
                        })]
                    }), e.filter((e => !e.blockIf || !e.blockIf.some((e => e())))).map((e => (0, n.jsx)(d.default.Item, {
                        onClick: e.onClick,
                        children: (0, n.jsxs)("div", {
                            className: "flex vc",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, n.jsx)(e.icon, {}), (0, n.jsx)("div", {
                                style: {
                                    marginLeft: 7
                                },
                                children: e.name
                            })]
                        })
                    }, e.name)))]
                })
            })
        }), [a]);
        return z.push({
            key: "creative",
            item: (0, n.jsx)(M.default, {
                path: f.CREATIVE_BASE,
                icon: (0, n.jsx)(D, {
                    src: "/client/img/header/creative.svg"
                }),
                theme: e.theme,
                children: "Creative"
            })
        }), z.push({
            key: "rewards",
            item: (0, n.jsx)(M.default, {
                path: f.COSMOS_BASE,
                icon: (0, n.jsx)(D, {
                    src: E.default.iconImage
                }),
                theme: e.theme,
                children: E.default.name
            })
        }), z.push({
            key: "me",
            item: (0, n.jsx)(o.default, {
                theme: {
                    algorithm: c.default.defaultAlgorithm
                },
                children: (0, n.jsx)(s.default, {
                    trigger: ["click"],
                    overlay: _,
                    children: (0, n.jsx)("div", {
                        className: "maxWidth",
                        children: (0, n.jsx)(M.default, {
                            icon: (0, n.jsx)(D, {
                                src: "/client/img/header/smile.svg"
                            }),
                            theme: e.theme,
                            children: "Me"
                        })
                    })
                })
            })
        }), I || (0, g.isStudent)() || z.push({
            key: "upgrade",
            item: (0, n.jsx)("div", {
                className: "maxAll",
                children: (0, n.jsx)(l.default, {
                    size: "large",
                    type: "primary",
                    onClick: e.showUpgradeModal,
                    children: "Upgrade"
                })
            })
        }), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(N.default, {
                items: z
            }), (0, n.jsx)(i.Suspense, {
                fallback: null,
                children: m ? (0, n.jsx)(O.default, {
                    open: t,
                    onClose: r
                }) : null
            })]
        })
    };
    const B = m.default.div(I || (I = F`
  background: rgb(232, 232, 232);
  margin: 6px 12px;
  padding: 14px;
  border-radius: 4px;
  font-family: ${0};
  color: rgba(0, 0, 0, 0.8);
`), p.Fonts.SFPro),
        T = m.default.div(z || (z = F`
  font-size: 18px;
  font-weight: ${0};
`), p.FontWeights.Bold),
        P = m.default.div(_ || (_ = F`
  font-size: 12px;
`))
})), a.register("6HXn4", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var n = a("46bRO"),
        i = a("91OKC");
    var l = e => e === i.PlanIds.pro ? `${n.COMPANY_NAME} Pro` : e === i.PlanIds.go ? `${n.COMPANY_NAME} Go` : e === i.PlanIds.proPass ? `${n.COMPANY_NAME} Pro (Monthly)` : e === i.PlanIds.basic ? `${n.COMPANY_NAME} Basic` : `Unknown ${n.COMPANY_NAME} Plan`
})), a.register("dv9KL", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = a("dnh3u"),
        i = a("fywoC"),
        l = a("hxrfV"),
        o = a("dwKuN"),
        s = function(e, t) {
            return i.createElement(o.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "CreditCardOutlined";
    var d = i.forwardRef(s)
})), a.register("hxrfV", (function(t, a) {
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
                    d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "credit-card",
        theme: "outlined"
    }
})), a.register("kiOoU", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = a("dnh3u"),
        i = a("fywoC"),
        l = a("26gAl"),
        o = a("dwKuN"),
        s = function(e, t) {
            return i.createElement(o.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "HeartOutlined";
    var d = i.forwardRef(s)
})), a.register("26gAl", (function(t, a) {
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
                    d: "M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                }
            }]
        },
        name: "heart",
        theme: "outlined"
    }
})), a.register("aXEUe", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var n = a("dnh3u"),
        i = a("fywoC"),
        l = a("iunFU"),
        o = a("dwKuN"),
        s = function(e, t) {
            return i.createElement(o.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: l.default
            }))
        };
    s.displayName = "SettingOutlined";
    var d = i.forwardRef(s)
})), a.register("iunFU", (function(t, a) {
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
                    d: "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"
                }
            }]
        },
        name: "setting",
        theme: "outlined"
    }
})), a.register("h5M3u", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = a("hxEiv"),
        i = a("fywoC"),
        l = a("2FDaO"),
        o = a("beXRF"),
        s = a("lpEVe"),
        d = a("gvUHr"),
        c = a("hDWWf");
    let u, f, h = e => e;
    var g = (0, s.observer)((e => {
        const {
            navigation: {
                homeUrl: t
            }
        } = i.useContext(d.default), a = e.theme === c.SiteHeaderTheme.dark ? "/client/img/svgLogoWhite.svg" : "/client/img/svgLogo.svg";
        return (0, n.jsx)(m, {
            to: t,
            children: (0, n.jsx)(p, {
                src: a
            }, a)
        })
    }));
    const m = (0, l.default)(o.Link)(u || (u = h``)),
        p = l.default.img.attrs({
            alt: "Gimkit Logo"
        })(f || (f = h`
  height: 32px;
  margin-right: 90px;
`))
}));