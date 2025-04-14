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
n.register("6myK7", (function(t, r) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return v
    }));
    var a = n("hxEiv");
    n("fywoC");
    var i = n("2FDaO"),
        s = n("lKmIF"),
        u = n("69SUA"),
        c = n("cO2Su"),
        l = n("iMOcM"),
        f = n("hr1He"),
        d = n("1kh58"),
        p = n("hqL8j"),
        m = n("cHCps");
    let g;
    var v = () => {
        const [e, t] = (0, l.useBoolean)(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(l.Title, {
                override: !0,
                title: "Delete Account"
            }), (0, a.jsxs)(y, {
                children: [(0, a.jsx)(m.default, {
                    includeSpacer: !0
                }), (0, a.jsx)(c.default, {
                    style: {
                        width: "90%",
                        maxWidth: 700,
                        marginTop: 30,
                        marginBottom: 50,
                        padding: 35,
                        flexDirection: "column"
                    },
                    children: (0, l.getUser)().passwordless ? (0, a.jsx)(d.default, {}) : e ? (0, a.jsx)(p.default, {}) : (0, a.jsx)(f.default, {
                        continue: t
                    })
                })]
            })]
        })
    };
    const y = i.default.div.attrs({
        className: "flex-column vc"
    })(g || (g = (e => e)`
  flex: 1;
  background: ${0};
  color: ${0};
  h1 {
    font-size: 32px;
    font-weight: ${0};
  }
  p {
    font-size: 18px;
  }
`), s.default.Snow, s.default.Black, u.FontWeights.UltraBold)
})), n.register("cO2Su", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("lKmIF");
    let s;
    var u = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), n.register("hr1He", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = n("hxEiv"),
        a = n("fC6cp"),
        i = n("b9Zw0"),
        s = n("fywoC"),
        u = n("iMOcM"),
        c = n("k0FBZ");
    const l = (0, o.jsxs)(o.Fragment, {
            children: ['If you are looking to downgrade/cancel your subscription, you can do so by visiting the "Plan & Billing" tab in settings. ', (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "By requesting account deletion, you will lose all of your kits, assignments, classes, and more. You also won't be able to login to your account again."]
        }),
        f = "delete my account";
    var d = e => {
        const [t, n] = s.useState(""), r = t !== f, d = () => {
            r || e.continue()
        };
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("h1", {
                children: "Are you sure you want to delete your account?"
            }), (0, o.jsxs)("p", {
                children: [(0, u.isStudent)() ? "By deleting your account, you will be removed from all classes\nyou're currently part of. You will also lose any content you've\ncreated and cosmetics earned." : l, " To continue deleting your account, type ", (0, o.jsx)("b", {
                    style: {
                        userSelect: "none"
                    },
                    children: f
                }), " ", "below."]
            }), (0, o.jsx)(a.default, {}), (0, o.jsx)(i.default, {
                size: "large",
                placeholder: "Enter here...",
                onChange: e => n(e.target.value),
                style: {
                    marginBottom: 10
                },
                onPressEnter: d
            }), (0, o.jsx)(c.default, {
                onClick: d,
                disabled: r,
                children: "Continue"
            })]
        })
    }
})), n.register("k0FBZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv"),
        a = n("93yIm");
    n("fywoC");
    var i = e => (0, o.jsx)(a.default, {
        block: !0,
        size: "large",
        type: "primary",
        disabled: e.disabled,
        loading: e.loading,
        onClick: e.onClick,
        children: e.children
    })
})), n.register("1kh58", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("hxEiv"),
        a = n("fC6cp");
    n("fywoC");
    var i = n("b1oE9"),
        s = n("iROck"),
        u = n("k0FBZ");
    var c = () => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("h1", {
            children: "Add a password to delete your account"
        }), (0, o.jsx)("p", {
            children: "In order to delete your account, you'll first need to attach a password to your account. You can attach a password in settings."
        }), (0, o.jsx)(a.default, {}), (0, o.jsx)(u.default, {
            onClick: () => (0, s.NavigateTo)(i.SETTINGS),
            children: "Go To Settings"
        })]
    })
})), n.register("iROck", (function(t, r) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = n("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), n.register("hqL8j", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("fC6cp"),
        i = n("b9Zw0"),
        s = n("fBuQJ"),
        u = n("fywoC"),
        c = n("iMOcM"),
        l = n("k0FBZ");
    var f = () => {
        const [e, t, n] = (0, c.useBoolean)(!1), [r, f] = u.useState(""), d = !r.length;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("h1", {
                children: "Last chance."
            }), (0, o.jsx)("p", {
                children: 'Deleting your account is permanent and cannot be reversed. If you are confident you want to delete your account, enter your password below. Once you click "Delete My Account", your account will be permanently deleted.'
            }), (0, o.jsx)(a.default, {}), (0, o.jsx)(i.default.Password, {
                size: "large",
                placeholder: "Password",
                onChange: e => f(e.target.value),
                style: {
                    marginBottom: 10
                }
            }), (0, o.jsx)(l.default, {
                onClick: () => {
                    if (d || e) return;
                    const o = (0, c.isStudent)();
                    t(), (0, c.request)({
                        url: "/api/user/delete",
                        data: {
                            password: r
                        },
                        success: () => {
                            (0, c.request)({
                                url: "/logout"
                            }), s.default.success({
                                title: "Account deleted",
                                content: o ? "You will be removed from all classes you are part of and all content you've created on Gimkit will be deleted. This process normally takes a few minutes, but can sometimes take up to a few hours." : "Your account and all the content you've created will be deleted. Additionally, if you had an active subscriptions, we've canceled them. This process normally only takes a few minutes, but can sometimes take a few hours.",
                                onOk: () => window.location.href = "/"
                            })
                        },
                        error: e => {
                            (0, c.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error deleting account"
                                }
                            }), n()
                        }
                    })
                },
                disabled: d,
                loading: e,
                children: "Delete My Account"
            })]
        })
    }
})), n.register("kuEJ4", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("iI4DW"),
        a = n("fywoC"),
        i = n("4gMdJ");

    function s(e, t, n) {
        return function(r) {
            const {
                prefixCls: s,
                style: u
            } = r, c = a.useRef(null), [l, f] = a.useState(0), [d, p] = a.useState(0), [m, g] = (0, o.default)(!1, {
                value: r.open
            }), {
                getPrefixCls: v
            } = a.useContext(i.ConfigContext), y = v(t || "select", s);
            return a.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var r;
                            const o = n ? `.${n(y)}` : `.${y}-dropdown`,
                                a = null === (r = c.current) || void 0 === r ? void 0 : r.querySelector(o);
                            a && (clearInterval(t), e.observe(a))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), a.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, a.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: l,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, a.createElement(e, Object.assign({}, r, {
                style: Object.assign(Object.assign({}, u), {
                    margin: 0
                }),
                open: m,
                visible: m,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), n.register("hacAX", (function(t, r) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = n("lt5sb"),
        a = n("aWAHQ");
    const i = new(0, o.Keyframes)("antMoveDownIn", {
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
        u = new(0, o.Keyframes)("antMoveLeftIn", {
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
        c = new(0, o.Keyframes)("antMoveLeftOut", {
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
        l = new(0, o.Keyframes)("antMoveRightIn", {
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
                antCls: n
            } = e, r = `${n}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = d[t];
            return [(0, a.initMotion)(r, o, i, e.motionDurationMid), {
                [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${r}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), n.register("i5Qjx", (function(r, o) {
    e(r.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(r.exports, "default", (function() {
        return y
    }), (function(e) {
        return y = e
    }));
    var a = n("fe1on"),
        i = n("jyxW7"),
        s = n("fywoC"),
        u = n("4gMdJ"),
        c = n("1eqVQ"),
        l = n("7yXSw"),
        f = n("c9Vcn"),
        d = n("5gjI2"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
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
            getPrefixCls: n,
            space: r,
            direction: o
        } = s.useContext(u.ConfigContext), {
            size: l = (null == r ? void 0 : r.size) || "small",
            align: v,
            className: y,
            rootClassName: h,
            children: x,
            direction: w = "horizontal",
            prefixCls: b,
            split: C,
            style: O,
            wrap: j = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), S = (0, c.default)(), [E, M] = s.useMemo((() => (Array.isArray(l) ? l : [l, l]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [l]), z = (0, i.default)(x, {
            keepEmpty: !0
        }), N = void 0 === v && "horizontal" === w ? "center" : v, D = n("space", b), [B, P] = (0, d.default)(D), _ = t(a)(D, P, `${D}-${w}`, {
            [`${D}-rtl`]: "rtl" === o,
            [`${D}-align-${N}`]: N
        }, y, h), K = `${D}-item`, R = "rtl" === o ? "marginLeft" : "marginRight";
        let I = 0;
        const L = z.map(((e, t) => {
                null != e && (I = t);
                const n = e && e.key || `${K}-${t}`;
                return s.createElement(f.default, {
                    className: K,
                    key: n,
                    direction: w,
                    index: t,
                    marginDirection: R,
                    split: C,
                    wrap: j
                }, e)
            })),
            W = s.useMemo((() => ({
                horizontalSize: E,
                verticalSize: M,
                latestIndex: I,
                supportFlexGap: S
            })), [E, M, I, S]);
        if (0 === z.length) return null;
        const A = {};
        return j && (A.flexWrap = "wrap", S || (A.marginBottom = -M)), S && (A.columnGap = E, A.rowGap = M), B(s.createElement("div", Object.assign({
            className: _,
            style: Object.assign(Object.assign({}, A), O)
        }, k), s.createElement(m.Provider, {
            value: W
        }, L)))
    };
    v.Compact = l.default;
    var y = v
})), n.register("1eqVQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), n.register("c9Vcn", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: n,
            index: r,
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
        } = o.useContext(a.SpaceContext);
        let m = {};
        return p || ("vertical" === n ? r < d && (m = {
            marginBottom: l / (u ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, r < d && {
            [i]: l / (u ? 2 : 1)
        }), c && {
            paddingBottom: f
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: m
        }, s), r < d && u && o.createElement("span", {
            className: `${t}-split`,
            style: m
        }, u))
    }
})), n.register("dhxiD", (function(e, t) {
    var r = n("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var n, a, i, s, u, c, l = !1;
        t || (t = {}), n = t.debug || !1;
        try {
            if (i = r(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(), t.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                    t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            l = !0
        } catch (r) {
            n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
            } catch (r) {
                n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return l
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
        return a
    }));
    var o = n("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            n = (0, o.useState)((function() {
                return t.matches
            })),
            r = n[0],
            a = n[1];
        return (0, o.useEffect)((function() {
            a(t.matches);
            var e = function(e) {
                return a(e.matches)
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
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(n("coa3i"), e.exports), o(n("exKSe"), e.exports), o(n("4Nv4f"), e.exports)
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
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(n("fywoC"));

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
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, r.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
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
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
            return a(t, e), t
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
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        r = o.current.offsetWidth;
                    e === t.height && r === t.width || n({
                        height: e,
                        width: r
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), r({
            ref: o
        }, t)
    }
})), n.register("hDWWf", (function(t, n) {
    let r;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return r
    })), (o = r || (r = {})).light = "light", o.dark = "dark"
})), n.register("hSz8d", (function(t, n) {
    let r;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return r
    })), (o = r || (r = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), n.register("9Vz35", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
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
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("bVHCc"),
        s = n("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(u)
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
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("4GmeK"),
        s = n("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "LogoutOutlined";
    var c = a.forwardRef(u)
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
})), n.register("kyvf1", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv"),
        a = n("beXRF");
    n("fywoC");
    var i = e => e.external || !e.to ? (0, o.jsx)("a", {
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
    }) : (0, o.jsx)(a.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), n.register("9kZfj", (function(t, r) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = n("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), n.register("aYYSA", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("5UEB4"),
        s = n("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "StarOutlined";
    var c = a.forwardRef(u)
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
    var o = n("fywoC"),
        a = n("3KQc0"),
        i = n("9iNNJ");
    var s = (e, t) => {
        const [n, r] = o.useState((() => {
            var n, r;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), n.register("3KQc0", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("6rvT3"),
        a = n("9iNNJ"),
        i = n("3Yjty"),
        s = n("f1PHW");
    let u;
    const c = () => u || (u = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var o;
                        null === (o = e.get(t[r].target)) || void 0 === o || o(t[r], n)
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
    var l = function(e, t) {
        const n = c(),
            r = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return n.subscribe(o, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(o)
            }
        }), [e, n, r]), n.observer
    }
})), n.register("9iNNJ", (function(r, o) {
    e(r.exports, "default", (function() {
        return a
    }));
    var a = t(n("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), n.register("3Yjty", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
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
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                t = o, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
})), n.register("py2Xr", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), n.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var r = n("fywoC");

    function o(e) {
        var t, n, o = (0, r.lazy)(e),
            a = (0, r.forwardRef)((function(e, n) {
                var a = (0, r.useRef)(null != t ? t : o);
                return (0, r.createElement)(a.current, Object.assign(n ? {
                    ref: n
                } : {}, e))
            }));
        return a.preload = function() {
            return n || (n = e().then((function(e) {
                return t = e.default
            }))), n
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
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
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("8N8s4"),
        s = n("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(u)
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