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
r.register("64608", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return k
    }));
    var i = r("hxEiv"),
        a = r("fywoC"),
        s = r("2FDaO"),
        c = r("lKmIF"),
        l = r("69SUA"),
        u = r("2qgOv"),
        f = r("glDUi"),
        d = r("fC6cp"),
        p = r("gHmyG"),
        m = r("03k9L"),
        g = r("4xePQ"),
        v = r("giscZ"),
        h = r("iMOcM"),
        x = r("sgWtV"),
        y = r("bGoag"),
        b = r("cHCps");
    let w, j, C = e => e;
    const O = "Error fetching subscription info. Try refreshing the page. If you continue to see this error, please contact support.";
    var k = () => {
        const [e, t] = a.useState(!0), [r, n] = a.useState(""), [o, s] = a.useState(""), [c, l] = a.useState(""), [w, j] = a.useState(!1);
        a.useEffect((() => {
            (0, y.default)({})
        }), []), a.useEffect((() => {
            const e = (0, h.getUrlVariable)("session_id");
            if (e)(0, h.verifyStripe)({
                sessionId: e,
                onSuccess: e => {
                    (0, h.request)({
                        url: `/api/bulk/complete/${e.subscriptionId}`,
                        success: e => {
                            n(e.paymentMethod), s(e.receiptUrl), l(e.invoiceUrl), j(e.renewal), t(!1)
                        },
                        error: e => (0, x.throwError)({
                            title: O
                        })
                    })
                },
                onError: e => (0, x.throwError)({
                    title: O
                }),
                onBoth: () => t(!1)
            });
            else {
                const e = (0, h.getUrlVariable)("subscriptionId");
                (0, h.request)({
                    url: `/api/bulk/complete/${e}`,
                    success: e => {
                        n(e.paymentMethod), s(e.receiptUrl), l(e.invoiceUrl), j(e.renewal), t(!1)
                    },
                    error: e => (0, h.throwMessageError)({
                        e: e,
                        default: {
                            title: O
                        }
                    })
                })
            }
        }), []);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(h.Title, {
                title: "Group License Complete"
            }), (0, i.jsxs)(S, {
                className: "flex-column vc",
                children: [(0, i.jsx)(b.default, {
                    includeSpacer: !0
                }), (0, i.jsx)(E, {
                    children: e ? (0, i.jsx)("div", {
                        className: "maxWidth flex hc",
                        children: (0, i.jsx)(p.default, {})
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(u.default, {
                            isRenewal: w
                        }), (0, i.jsx)(d.default, {}), "creditCard" === r && (0, i.jsx)(m.default, {
                            receiptLink: o
                        }), "purchaseOrder" === r && (0, i.jsx)(f.default, {
                            invoiceLink: c
                        }), (0, i.jsx)("div", {
                            style: {
                                height: 10
                            }
                        }), (0, i.jsx)(g.default, {
                            isRenewal: w
                        }), (0, i.jsx)(d.default, {}), (0, i.jsx)(v.default, {})]
                    })
                })]
            })]
        })
    };
    const S = s.default.div(w || (w = C`
  flex: 1;
  background: ${0};
  width: 100%;
  color: ${0};
  font-family: ${0};
  padding: 20px;
  min-height: 900px;
`), c.default.Snow, c.default.Black, l.Fonts.SFPro),
        E = s.default.div(j || (j = C`
  width: 100%;
  max-width: 550px;
`))
})), r.register("2qgOv", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("lKmIF"),
        s = r("69SUA");
    let c, l, u = e => e;
    var f = e => (0, o.jsxs)("div", {
        className: "flex vc flex-column",
        children: [(0, o.jsx)("img", {
            src: "/client/img/quote/medal.svg",
            style: {
                height: 130
            }
        }), (0, o.jsx)(d, {
            children: "Woohoo!"
        }), (0, o.jsx)(p, {
            children: e.isRenewal ? "Your group license renewal is complete!" : "Your group license is ready to go!"
        })]
    });
    const d = i.default.h1(c || (c = u`
  color: ${0};
  font-weight: ${0};
  font-size: 50px;
`), a.default.Black, s.FontWeights.UltraBold),
        p = i.default.p(l || (l = u`
  margin-top: -41px;
  font-size: 18px;
`))
})), r.register("glDUi", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lPcFV"),
        a = r("93yIm"),
        s = r("fC6cp"),
        c = r("46bRO");
    var l = e => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsxs)(i.AntCard, {
            children: [(0, o.jsx)(i.Header, {
                children: "Invoice"
            }), (0, o.jsx)(i.Description, {
                children: "Click the button below to print out your invoice. A copy of this invoice has also been sent to your email."
            }), (0, o.jsx)(a.default, {
                style: {
                    marginTop: 5
                },
                href: e.invoiceLink,
                target: "_blank",
                type: "primary",
                block: !0,
                children: "Print Invoice"
            })]
        }), (0, o.jsx)("div", {
            style: {
                height: 10
            }
        }), (0, o.jsxs)(i.AntCard, {
            children: [(0, o.jsx)(i.Header, {
                children: "Payment Information"
            }), (0, o.jsxs)(i.Description, {
                children: [(0, o.jsx)("div", {
                    style: {
                        marginTop: 3
                    },
                    children: "Please send your check to the following address:"
                }), (0, o.jsx)("br", {}), (0, o.jsx)("div", {
                    children: (0, o.jsx)("b", {
                        children: "Gimkit, Inc"
                    })
                }), (0, o.jsx)("div", {
                    children: c.COMPANY_TOP_ADDRESS
                }), (0, o.jsx)("div", {
                    children: c.COMPANY_BOTTOM_ADDRESS
                }), (0, o.jsx)(s.default, {}), (0, o.jsx)("div", {
                    children: "With the check, please include a copy of the invoice. All Gimkit invoices on Purchase Orders have NET45 Terms."
                })]
            })]
        })]
    })
})), r.register("03k9L", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lPcFV"),
        a = r("93yIm");
    var s = e => (0, o.jsx)(o.Fragment, {
        children: (0, o.jsxs)(i.AntCard, {
            children: [(0, o.jsx)(i.Header, {
                children: "Receipt"
            }), (0, o.jsx)(i.Description, {
                children: "Click the button below to print out your receipt A copy of this receipt has also been sent to your email."
            }), (0, o.jsx)(a.default, {
                style: {
                    marginTop: 5
                },
                href: e.receiptLink,
                target: "_blank",
                type: "primary",
                block: !0,
                children: "Print Receipt"
            })]
        })
    })
})), r.register("4xePQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lPcFV"),
        a = r("93yIm"),
        s = r("b1oE9"),
        c = r("46bRO");
    var l = e => {
        const {
            isRenewal: t
        } = e;
        return (0, o.jsxs)(i.AntCard, {
            children: [(0, o.jsx)(i.Header, {
                children: t ? "Renewal Complete!" : "Get Started!"
            }), (0, o.jsx)(i.Description, {
                children: t ? "Your new group license is active! All of your teachers have been imported over from your expiring group. Click the button below to manage your new group license!" : `Your group license is active! Click the button below to invite your teachers to join your license and gain ${c.COMPANY_NAME} Pro access!`
            }), (0, o.jsx)(a.default, {
                href: s.GROUP_DASHBOARD,
                type: "primary",
                style: {
                    marginTop: 5
                },
                block: !0,
                children: "Manage Group"
            })]
        })
    }
})), r.register("giscZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("lKmIF"),
        s = r("69SUA"),
        c = r("fC6cp");
    let l, u, f, d = e => e;
    const p = [{
        text: "Group license help center",
        link: "https://help.gimkit.com/en/category/group-subscriptions-3m7198/"
    }, {
        text: "Managing group licenses",
        link: "https://help.gimkit.com/en/article/managing-group-subscriptions-117yzia/"
    }];
    var m = () => (0, o.jsxs)(g, {
        className: "flex vc flex-column",
        children: [(0, o.jsx)(v, {
            children: "📚 Resources"
        }), (0, o.jsx)(h, {
            children: "Take a look at the resources below to help you use your group license!"
        }), p.map((e => (0, o.jsx)("div", {
            style: {
                fontSize: 16,
                marginBottom: 5
            },
            children: (0, o.jsx)("a", {
                href: e.link,
                target: "_blank",
                children: e.text
            })
        }, e.link))), (0, o.jsx)(c.default, {}), (0, o.jsx)(v, {
            children: "👋 Need Help?"
        }), (0, o.jsx)("div", {
            style: {
                height: 5
            }
        }), (0, o.jsxs)(h, {
            children: ["Just email us at", " ", (0, o.jsx)("a", {
                href: "mailto:groups@gimkit.com",
                children: "groups@gimkit.com"
            }), "!"]
        })]
    });
    const g = i.default.div(l || (l = d`
  text-align: center;
`)),
        v = i.default.h2(u || (u = d`
  font-size: 32px;
  font-weight: ${0};
  color: ${0};
`), s.FontWeights.UltraBold, a.default.Black),
        h = i.default.p(f || (f = d`
  font-size: 17px;
  margin-top: -25px;
`))
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        i = r("fywoC"),
        a = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: c
            } = n, l = i.useRef(null), [u, f] = i.useState(0), [d, p] = i.useState(0), [m, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: v
            } = i.useContext(a.ConfigContext), h = v(t || "select", s);
            return i.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(h)}` : `.${h}-dropdown`,
                                i = null === (n = l.current) || void 0 === n ? void 0 : n.querySelector(o);
                            i && (clearInterval(t), e.observe(i))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), i.createElement(a.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, i.createElement("div", {
                ref: l,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, i.createElement(e, Object.assign({}, n, {
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
    var o = r("lt5sb"),
        i = r("aWAHQ");
    const a = new(0, o.Keyframes)("antMoveDownIn", {
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
        s = new(0, o.Keyframes)("antMoveDownOut", {
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
        c = new(0, o.Keyframes)("antMoveLeftIn", {
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
        l = new(0, o.Keyframes)("antMoveLeftOut", {
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
        u = new(0, o.Keyframes)("antMoveRightIn", {
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
        f = new(0, o.Keyframes)("antMoveRightOut", {
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
                inKeyframes: new(0, o.Keyframes)("antMoveUpIn", {
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
                outKeyframes: new(0, o.Keyframes)("antMoveUpOut", {
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
                inKeyframes: a,
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
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: a
            } = d[t];
            return [(0, i.initMotion)(n, o, a, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var i = r("fe1on"),
        a = r("jyxW7"),
        s = r("fywoC"),
        c = r("4gMdJ"),
        l = r("1eqVQ"),
        u = r("7yXSw"),
        f = r("c9Vcn"),
        d = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const m = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        g = {
            small: 8,
            middle: 16,
            large: 24
        };
    const v = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(c.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: v,
            className: h,
            rootClassName: x,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: C,
            wrap: O = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), S = (0, l.default)(), [E, M] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), N = (0, a.default)(y, {
            keepEmpty: !0
        }), z = void 0 === v && "horizontal" === b ? "center" : v, P = r("space", w), [D, _] = (0, d.default)(P), R = t(i)(P, _, `${P}-${b}`, {
            [`${P}-rtl`]: "rtl" === o,
            [`${P}-align-${z}`]: z
        }, h, x), A = `${P}-item`, I = "rtl" === o ? "marginLeft" : "marginRight";
        let K = 0;
        const L = N.map(((e, t) => {
                null != e && (K = t);
                const r = e && e.key || `${A}-${t}`;
                return s.createElement(f.default, {
                    className: A,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: I,
                    split: j,
                    wrap: O
                }, e)
            })),
            B = s.useMemo((() => ({
                horizontalSize: E,
                verticalSize: M,
                latestIndex: K,
                supportFlexGap: S
            })), [E, M, K, S]);
        if (0 === N.length) return null;
        const W = {};
        return O && (W.flexWrap = "wrap", S || (W.marginBottom = -M)), S && (W.columnGap = E, W.rowGap = M), D(s.createElement("div", Object.assign({
            className: R,
            style: Object.assign(Object.assign({}, W), C)
        }, k), s.createElement(m.Provider, {
            value: B
        }, L)))
    };
    v.Compact = u.default;
    var h = v
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("azMeL"),
        a = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, i.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("i5Qjx");

    function a(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: a,
            children: s,
            split: c,
            wrap: l
        } = e;
        const {
            horizontalSize: u,
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = o.useContext(i.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < d && (m = {
            marginBottom: u / (c ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < d && {
            [a]: u / (c ? 2 : 1)
        }), l && {
            paddingBottom: f
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: m
        }, s), n < d && c && o.createElement("span", {
            className: `${t}-split`,
            style: m
        }, c))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, i, a, s, c, l, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (a = n(), s = document.createRange(), c = document.getSelection(), (l = document.createElement("span")).textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = o[t.format] || o.default;
                            window.clipboardData.setData(i, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(l), s.selectNodeContents(l), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), l && document.body.removeChild(l), a()
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
        return i
    }));
    var o = r("fywoC");

    function i(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            i = r[1];
        return (0, o.useEffect)((function() {
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
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(r("coa3i"), e.exports), o(r("exKSe"), e.exports), o(r("4Nv4f"), e.exports)
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var a = i(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = a.useState(s()),
            t = e[0],
            r = e[1];
        return a.useLayoutEffect((function() {
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
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, n.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
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
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = a(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = s.useRef(),
            i = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(i);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, i]), n({
            ref: o
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (o = n || (n = {})).light = "light", o.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (o = n || (n = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
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
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("bVHCc"),
        s = r("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "UsergroupAddOutlined";
    var l = i.forwardRef(c)
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
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("4GmeK"),
        s = r("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "LogoutOutlined";
    var l = i.forwardRef(c)
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
        return a
    }));
    var o = r("hxEiv"),
        i = r("beXRF");
    r("fywoC");
    var a = e => e.external || !e.to ? (0, o.jsx)("a", {
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
    }) : (0, o.jsx)(i.Link, {
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
        return i
    }));
    var o = r("hrYih");
    const i = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("5UEB4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "StarOutlined";
    var l = i.forwardRef(c)
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
    var o = r("fywoC"),
        i = r("3KQc0"),
        a = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, a.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, i.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        i = r("9iNNJ"),
        a = r("3Yjty"),
        s = r("f1PHW");
    let c;
    const l = () => c || (c = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var o;
                        null === (o = e.get(t[n].target)) || void 0 === o || o(t[n], r)
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
            n = (0, a.default)(t);
        return (0, i.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return r.subscribe(o, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(o)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return i
    }));
    var i = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC");
    var i = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
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
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                t = o, r || (r = requestAnimationFrame((function() {
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
    var o = r("bd8je");
    const i = e => {
        o.history.push(e)
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            i = (0, n.forwardRef)((function(e, r) {
                var i = (0, n.useRef)(null != t ? t : o);
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
    e.exports.lazyWithPreload = o, e.exports.default = o
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
        return l
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("8N8s4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "QuestionCircleOutlined";
    var l = i.forwardRef(c)
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