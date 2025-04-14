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
r.register("836Jk", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("2FDaO"),
        u = r("69SUA"),
        c = r("gcwhv"),
        l = r("bFxwg"),
        f = r("gHmyG"),
        d = r("iMOcM"),
        p = r("3uz2P"),
        g = r("iROck"),
        v = r("cHCps");
    let m, y, h = e => e;
    var x = () => {
        const [e, t] = i.useState(!0), [r, n] = i.useState(""), [a, s] = i.useState(""), [u, m] = i.useState(!1), [y, h] = i.useState(!1), {
            id: x
        } = (0, p.useParams)();
        return i.useEffect((() => {
            (0, d.request)({
                url: "/api/quote/fetch/" + x,
                success: e => {
                    const {
                        quote: r,
                        plan: a
                    } = e;
                    n(r.name), s(a.name), h(r.converted), m(!!r.renewalForExistingBulk), t(!1)
                },
                error: e => {
                    (0, d.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error fetching quote."
                        }
                    }), (0, g.NavigateTo)("/")
                }
            })
        }), []), e ? (0, o.jsx)("div", {
            className: "hc vc flex maxWidth maxHeight",
            children: (0, o.jsx)(f.default, {})
        }) : (0, o.jsxs)(w, {
            children: [(0, o.jsx)(v.default, {
                includeSpacer: !0
            }), (0, o.jsxs)(b, {
                children: [(0, o.jsx)(c.default, {
                    id: x,
                    name: r,
                    planName: a,
                    converted: y,
                    isRenewal: u
                }), (0, o.jsx)(l.default, {
                    id: x
                })]
            })]
        })
    };
    const w = s.default.div(m || (m = h`
  flex: 1;
  width: 100%;
`)),
        b = s.default.div(y || (y = h`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${0};
`), u.Fonts.SFPro)
})), r.register("gcwhv", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        i = r("lKmIF"),
        s = r("fC6cp"),
        u = r("iMOcM"),
        c = r("gJefE"),
        l = r("3CZSK"),
        f = r("2kQkW"),
        d = r("l7TLn"),
        p = r("j8rYp"),
        g = r("aj25P");
    let v;
    const m = () => (0, a.jsx)("div", {
        style: {
            height: 10
        }
    });
    var y = e => (0, a.jsxs)(h, {
        children: [(0, a.jsx)(u.Title, {
            title: `Quote for ${e.name}`
        }), (0, a.jsx)(l.default, {
            name: e.name,
            quoteId: e.id,
            planName: e.planName
        }), (0, a.jsx)(s.default, {}), (0, a.jsx)(c.default, {
            converted: e.converted,
            quoteId: e.id,
            isRenewal: e.isRenewal
        }), (0, a.jsx)(m, {}), (0, a.jsx)(p.default, {
            converted: e.converted,
            quoteId: e.id,
            isRenewal: e.isRenewal
        }), (0, a.jsx)(m, {}), (0, a.jsx)(f.default, {
            quoteId: e.id
        }), (0, a.jsx)(m, {}), (0, a.jsx)(d.default, {
            quoteId: e.id,
            name: e.name,
            isRenewal: e.isRenewal
        }), (0, a.jsx)(m, {}), (0, a.jsx)(g.default, {})]
    });
    const h = o.default.div.attrs({
        className: "flex vc flex-column"
    })(v || (v = (e => e)`
  height: 100%;
  width: 500px;
  margin-right: 20px;
  padding: 20px;
  color: ${0};
  box-sizing: border-box;
`), i.default.Black)
})), r.register("gJefE", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("lPcFV"),
        i = r("93yIm"),
        s = r("iMOcM"),
        u = r("46bRO"),
        c = r("iROck");
    var l = e => (0, a.jsxs)(o.AntCard, {
        children: [(0, a.jsxs)(o.Header, {
            children: [e.isRenewal ? "Renew" : "Pay", " with Purchase Order"]
        }), (0, a.jsx)(o.Description, {
            children: e.isRenewal ? `Upload your purchase order to instantly renew your group's ${u.COMPANY_NAME} Pro access and get your invoice!` : `Get your group license up and running today! Upload your purchase order to get your group access to ${u.COMPANY_NAME} Pro!`
        }), (0, a.jsxs)(i.default, {
            onClick: () => {
                (0, s.requireAuthentication)((() => {
                    (0, c.NavigateTo)(`/group-subscription/pay/${e.quoteId}/po`)
                }))
            },
            type: "primary",
            block: !0,
            style: {
                marginTop: 5
            },
            disabled: e.converted,
            children: [e.isRenewal ? "Renew" : "Pay", " with Purchase Order"]
        })]
    })
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var a = r("bd8je");
    const o = e => {
        a.history.push(e)
    }
})), r.register("3CZSK", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("lPcFV"),
        i = r("7nbEZ"),
        s = r("69SUA"),
        u = r("93yIm");
    var c = e => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(o.AntCard, {
            children: [(0, a.jsx)("div", {
                style: {
                    fontWeight: s.FontWeights.UltraBold,
                    fontSize: 27
                },
                children: e.name
            }), (0, a.jsx)("div", {
                style: {
                    fontWeight: s.FontWeights.Bold,
                    fontSize: 14,
                    opacity: .8
                },
                children: e.planName
            })]
        }), (0, a.jsx)("div", {
            style: {
                height: 10
            }
        }), (0, a.jsx)(u.default, {
            size: "large",
            block: !0,
            type: "primary",
            href: (0, i.getQuotePDFLink)(e.quoteId),
            target: "_blank",
            children: "Download Quote PDF"
        })]
    })
})), r.register("7nbEZ", (function(t, r) {
    e(t.exports, "getQuoteLink", (function() {
        return n
    })), e(t.exports, "getQuotePDFLink", (function() {
        return a
    }));
    const n = e => "https://www.gimkit.com/quote/" + e,
        a = e => "/quote-printable/" + e
})), r.register("2kQkW", (function(n, a) {
    e(n.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lPcFV"),
        s = r("7nbEZ"),
        u = r("dhxiD"),
        c = r("93yIm"),
        l = r("b9Zw0"),
        f = r("cy4A6");
    var d = e => (0, o.jsxs)(i.AntCard, {
        children: [(0, o.jsx)(i.Header, {
            children: "Quote Link"
        }), (0, o.jsx)(i.Description, {
            children: "Come back to this link to view the quote at anytime"
        }), (0, o.jsx)(l.default, {
            value: (0, s.getQuoteLink)(e.quoteId),
            readOnly: !0
        }), (0, o.jsx)(c.default, {
            onClick: () => {
                t(u)((0, s.getQuoteLink)(e.quoteId)), f.default.success("Quote link copied to clipboard.")
            },
            style: {
                marginTop: 5
            },
            block: !0,
            type: "dashed",
            children: "Copy Link"
        })]
    })
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, o, i, s, u, c, l = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            l = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return l
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
})), r.register("l7TLn", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("lPcFV"),
        i = r("93yIm"),
        s = r("46bRO");
    var u = e => (0, a.jsxs)(o.AntCard, {
        children: [(0, a.jsx)(o.Header, {
            children: "Contact"
        }), (0, a.jsx)(o.Description, {
            children: e.isRenewal ? "We're here to help! Let us know if you have any questions about your group license renewal." : "Let us know if you have any questions about your group quote!"
        }), (0, a.jsxs)(i.default, {
            href: "mailto:groups@gimkit.com?subject=" + (s.COMPANY_NAME + " Quote for " + e.name + " - " + e.quoteId),
            block: !0,
            type: "primary",
            children: ["Contact ", s.COMPANY_NAME, " Support"]
        })]
    })
})), r.register("j8rYp", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("lPcFV"),
        i = r("93yIm"),
        s = r("iMOcM"),
        u = r("46bRO"),
        c = r("iROck");
    var l = e => (0, a.jsxs)(o.AntCard, {
        children: [(0, a.jsxs)(o.Header, {
            children: [e.isRenewal ? "Renew" : "Pay", " with Credit Card"]
        }), (0, a.jsx)(o.Description, {
            children: e.isRenewal ? `Use a credit card to renew your group's ${u.COMPANY_NAME} Pro license!` : `Pay with credit card to get your group access to ${u.COMPANY_NAME} Pro!`
        }), (0, a.jsxs)(i.default, {
            onClick: () => {
                (0, s.requireAuthentication)((() => {
                    (0, c.NavigateTo)(`/group-subscription/pay/${e.quoteId}/cc`)
                }))
            },
            type: "primary",
            block: !0,
            style: {
                marginTop: 5
            },
            disabled: e.converted,
            children: [e.isRenewal ? "Renew" : "Pay", " with Credit Card"]
        })]
    })
})), r.register("bFxwg", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("7nbEZ"),
        s = r("lpEVe"),
        u = r("gvUHr");
    var c = (0, s.observer)((e => {
        const {
            navigation: {
                headerHeight: t
            }
        } = o.useContext(u.default);
        return (0, a.jsx)("div", {
            className: "flex hc vc",
            style: {
                width: 400,
                height: `calc(100vh - ${t}px)`
            },
            children: (0, a.jsx)("iframe", {
                src: (0, i.getQuotePDFLink)(e.id) + "/#toolbar=0",
                title: "Quote",
                style: {
                    width: 400,
                    height: "75%",
                    position: "fixed"
                },
                frameBorder: 0
            })
        })
    }))
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
                style: u
            } = n, c = o.useRef(null), [l, f] = o.useState(0), [d, p] = o.useState(0), [g, v] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = o.useContext(i.ConfigContext), y = m(t || "select", s);
            return o.useEffect((() => {
                if (v(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(y)}` : `.${y}-dropdown`,
                                o = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
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
                ref: c,
                style: {
                    paddingBottom: l,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, o.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, u), {
                    margin: 0
                }),
                open: g,
                visible: g,
                getPopupContainer: () => c.current
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
        u = new(0, a.Keyframes)("antMoveLeftIn", {
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
        l = new(0, a.Keyframes)("antMoveRightIn", {
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
                inKeyframes: u,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: l,
                outKeyframes: f
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = d[t];
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
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(n.exports, "default", (function() {
        return y
    }), (function(e) {
        return y = e
    }));
    var o = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        u = r("4gMdJ"),
        c = r("1eqVQ"),
        l = r("7yXSw"),
        f = r("c9Vcn"),
        d = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
            }
            return r
        };
    const g = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        v = {
            small: 8,
            middle: 16,
            large: 24
        };
    const m = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: a
        } = s.useContext(u.ConfigContext), {
            size: l = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: y,
            rootClassName: h,
            children: x,
            direction: w = "horizontal",
            prefixCls: b,
            split: C,
            style: j,
            wrap: O = !1
        } = e, E = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), k = (0, c.default)(), [M, S] = s.useMemo((() => (Array.isArray(l) ? l : [l, l]).map((e => function(e) {
            return "string" == typeof e ? v[e] : e || 0
        }(e)))), [l]), N = (0, i.default)(x, {
            keepEmpty: !0
        }), P = void 0 === m && "horizontal" === w ? "center" : m, R = r("space", b), [z, D] = (0, d.default)(R), _ = t(o)(R, D, `${R}-${w}`, {
            [`${R}-rtl`]: "rtl" === a,
            [`${R}-align-${P}`]: P
        }, y, h), A = `${R}-item`, I = "rtl" === a ? "marginLeft" : "marginRight";
        let L = 0;
        const K = N.map(((e, t) => {
                null != e && (L = t);
                const r = e && e.key || `${A}-${t}`;
                return s.createElement(f.default, {
                    className: A,
                    key: r,
                    direction: w,
                    index: t,
                    marginDirection: I,
                    split: C,
                    wrap: O
                }, e)
            })),
            W = s.useMemo((() => ({
                horizontalSize: M,
                verticalSize: S,
                latestIndex: L,
                supportFlexGap: k
            })), [M, S, L, k]);
        if (0 === N.length) return null;
        const F = {};
        return O && (F.flexWrap = "wrap", k || (F.marginBottom = -S)), k && (F.columnGap = M, F.rowGap = S), z(s.createElement("div", Object.assign({
            className: _,
            style: Object.assign(Object.assign({}, F), j)
        }, E), s.createElement(g.Provider, {
            value: W
        }, K)))
    };
    m.Compact = l.default;
    var y = m
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
            split: u,
            wrap: c
        } = e;
        const {
            horizontalSize: l,
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let g = {};
        return p || ("vertical" === r ? n < d && (g = {
            marginBottom: l / (u ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, n < d && {
            [i]: l / (u ? 2 : 1)
        }), c && {
            paddingBottom: f
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: g
        }, s), n < d && u && a.createElement("span", {
            className: `${t}-split`,
            style: g
        }, u))
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
})), r.register("hDWWf", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (a = n || (n = {})).light = "light", a.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (a = n || (n = {})).none = "none", a.standard = "standard", a.darker = "darker"
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
        o = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "UsergroupAddOutlined";
    var c = o.forwardRef(u)
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
        o = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "LogoutOutlined";
    var c = o.forwardRef(u)
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
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return o
    }));
    var a = r("hrYih");
    const o = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "StarOutlined";
    var c = o.forwardRef(u)
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
        return l
    }));
    var a = r("6rvT3"),
        o = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let u;
    const c = () => u || (u = function() {
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
    var l = function(e, t) {
        const r = c(),
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
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "QuestionCircleOutlined";
    var c = o.forwardRef(u)
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