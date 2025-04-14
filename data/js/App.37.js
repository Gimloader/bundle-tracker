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
r.register("8faOn", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("1aFWb"),
        c = r("lpEVe"),
        l = r("c6Gty"),
        u = r("j0J7y"),
        f = r("4bFQO"),
        d = r("3uz2P");
    var p = () => {
        const {
            id: e
        } = (0, d.useParams)();
        return i.useEffect((() => ((0, u.default)(e), () => {
            s.default.navigation.reset()
        })), [e]), (0, a.jsx)(f.default.Provider, {
            value: s.default,
            children: (0, a.jsx)(c.Provider, {
                ...s.default,
                children: (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.default, {
                        kitId: e
                    })
                })
            })
        })
    }
})), r.register("j0J7y", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("iMOcM"),
        a = r("1aFWb"),
        i = r("b1oE9"),
        s = r("iROck");
    var c = e => {
        const {
            kit: t
        } = a.default;
        t.errorFetchingKit = !1, t.fetchingKit = !0, (0, o.request)({
            url: `/api/games/fetch/${e}`,
            method: "get",
            success: e => {
                (0, o.isLoggedIn)() && (a.default.user.loggedIn = !0), t.id = e.kit._id, t.name = e.kit.title, t.coverPhoto = e.kit.gif, t.creatorName = e.creator.name, t.creatorId = e.creator._id, t.kitPrivacy = e.kit.privacy, t.questions.replace(e.kit.questions)
            },
            error: e => {
                t.errorFetchingKit = !0, (0, s.NavigateTo)(i.HOMEPAGE)
            },
            both: () => t.fetchingKit = !1
        })
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("7WFzL"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "CopyOutlined";
    var l = a.forwardRef(c)
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
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "DeleteOutlined";
    var l = a.forwardRef(c)
})), r.register("ewhoP", (function(t, r) {
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
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("6tWM4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "EditOutlined";
    var l = a.forwardRef(c)
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
})), r.register("5WQCk", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("wzfg8"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "PlayCircleOutlined";
    var l = a.forwardRef(c)
})), r.register("wzfg8", (function(t, r) {
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
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: c
            } = n, l = a.useRef(null), [u, f] = a.useState(0), [d, p] = a.useState(0), [h, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = a.useContext(i.ConfigContext), v = m(t || "select", s);
            return a.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(v)}` : `.${v}-dropdown`,
                                a = null === (n = l.current) || void 0 === n ? void 0 : n.querySelector(o);
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
                ref: l,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, a.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, c), {
                    margin: 0
                }),
                open: h,
                visible: h,
                getPopupContainer: () => l.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = r("lt5sb"),
        a = r("aWAHQ");
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
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = d[t];
            return [(0, a.initMotion)(n, o, i, e.motionDurationMid), {
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
        return h
    }), (function(e) {
        return h = e
    })), e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
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
    const h = s.createContext({
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
    const m = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(c.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: v,
            rootClassName: y,
            children: x,
            direction: b = "horizontal",
            prefixCls: w,
            split: k,
            style: C,
            wrap: O = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, l.default)(), [M, j] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), P = (0, i.default)(x, {
            keepEmpty: !0
        }), T = void 0 === m && "horizontal" === b ? "center" : m, D = r("space", w), [N, z] = (0, d.default)(D), F = t(a)(D, z, `${D}-${b}`, {
            [`${D}-rtl`]: "rtl" === o,
            [`${D}-align-${T}`]: T
        }, v, y), L = `${D}-item`, _ = "rtl" === o ? "marginLeft" : "marginRight";
        let $ = 0;
        const R = P.map(((e, t) => {
                null != e && ($ = t);
                const r = e && e.key || `${L}-${t}`;
                return s.createElement(f.default, {
                    className: L,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: _,
                    split: k,
                    wrap: O
                }, e)
            })),
            A = s.useMemo((() => ({
                horizontalSize: M,
                verticalSize: j,
                latestIndex: $,
                supportFlexGap: E
            })), [M, j, $, E]);
        if (0 === P.length) return null;
        const B = {};
        return O && (B.flexWrap = "wrap", E || (B.marginBottom = -j)), E && (B.columnGap = M, B.rowGap = j), N(s.createElement("div", Object.assign({
            className: F,
            style: Object.assign(Object.assign({}, B), C)
        }, S), s.createElement(h.Provider, {
            value: A
        }, R)))
    };
    m.Compact = u.default;
    var v = m
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("i5Qjx");

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
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let h = {};
        return p || ("vertical" === r ? n < d && (h = {
            marginBottom: u / (c ? 2 : 1)
        }) : h = Object.assign(Object.assign({}, n < d && {
            [i]: u / (c ? 2 : 1)
        }), l && {
            paddingBottom: f
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: h
        }, s), n < d && c && o.createElement("span", {
            className: `${t}-split`,
            style: h
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
        var r, a, i, s, c, l, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), c = document.getSelection(), (l = document.createElement("span")).textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(l), s.selectNodeContents(l), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
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
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        s = r("fywoC"),
        c = r("4gMdJ"),
        l = r("2iORQ"),
        u = r("eM84N"),
        f = r("8elTB"),
        d = r("jfXop"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: f,
                style: h,
                children: g,
                icon: m,
                color: v,
                onClose: y,
                closeIcon: x,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: k,
                direction: C
            } = s.useContext(c.ConfigContext), [O, S] = s.useState(!0);
            s.useEffect((() => {
                "visible" in w && S(w.visible)
            }), [w.visible]);
            const E = (0, l.isPresetColor)(v) || (0, l.isPresetStatusColor)(v),
                M = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, h),
                j = k("tag", n),
                [P, T] = (0, d.default)(j),
                D = t(i)(j, {
                    [`${j}-${v}`]: E,
                    [`${j}-has-color`]: v && !E,
                    [`${j}-hidden`]: !O,
                    [`${j}-rtl`]: "rtl" === C
                }, o, f, T),
                N = e => {
                    e.stopPropagation(), null == y || y(e), e.defaultPrevented || S(!1)
                },
                z = "function" == typeof w.onClick || g && "a" === g.type,
                F = m || null,
                L = F ? s.createElement(s.Fragment, null, F, s.createElement("span", null, g)) : g,
                _ = s.createElement("span", Object.assign({}, w, {
                    ref: r,
                    className: D,
                    style: M
                }), L, b ? x ? s.createElement("span", {
                    className: `${j}-close-icon`,
                    onClick: N
                }, x) : s.createElement(a.default, {
                    className: `${j}-close-icon`,
                    onClick: N
                }) : null);
            return P(z ? s.createElement(u.default, null, _) : _)
        },
        g = s.forwardRef(h);
    g.CheckableTag = f.default;
    var m = g
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        c = r("jfXop"),
        l = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    var u = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: u,
            onClick: f
        } = e, d = l(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(s.ConfigContext), h = p("tag", r), [g, m] = (0, c.default)(h), v = t(a)(h, {
            [`${h}-checkable`]: !0,
            [`${h}-checkable-checked`]: o
        }, n, m);
        return g(i.createElement("span", Object.assign({}, d, {
            className: v,
            onClick: e => {
                null == u || u(!o), null == f || f(e)
            }
        })))
    }
})), r.register("jfXop", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("3pCmM"),
        s = r("10VQw"),
        c = r("kCC5O");
    const l = (e, t, r) => {
            const n = (0, i.default)(r);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${r}`],
                    background: e[`color${n}Bg`],
                    borderColor: e[`color${n}Border`]
                }
            }
        },
        u = e => (0, s.genPresetColor)(e, ((t, r) => {
            let {
                textColor: n,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
                    background: a,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: i,
                        borderColor: i
                    }
                }
            }
        })),
        f = e => {
            const {
                paddingXXS: t,
                lineWidth: r,
                tagPaddingHorizontal: n,
                componentCls: o
            } = e, a = n - r, i = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, c.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: a,
                    fontSize: e.tagFontSize,
                    lineHeight: `${e.tagLineHeight}px`,
                    whiteSpace: "nowrap",
                    background: e.tagDefaultBg,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${e.motionDurationMid}`,
                    textAlign: "start",
                    [`&${o}-rtl`]: {
                        direction: "rtl"
                    },
                    "&, a, a:hover": {
                        color: e.tagDefaultColor
                    },
                    [`${o}-close-icon`]: {
                        marginInlineStart: i,
                        color: e.colorTextDescription,
                        fontSize: e.tagIconSize,
                        cursor: "pointer",
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            color: e.colorTextHeading
                        }
                    },
                    [`&${o}-has-color`]: {
                        borderColor: "transparent",
                        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                            color: e.colorTextLightSolid
                        }
                    },
                    "&-checkable": {
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        [`&:not(${o}-checkable-checked):hover`]: {
                            color: e.colorPrimary,
                            backgroundColor: e.colorFillSecondary
                        },
                        "&:active, &-checked": {
                            color: e.colorTextLightSolid
                        },
                        "&-checked": {
                            backgroundColor: e.colorPrimary,
                            "&:hover": {
                                backgroundColor: e.colorPrimaryHover
                            }
                        },
                        "&:active": {
                            backgroundColor: e.colorPrimaryActive
                        }
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                        marginInlineStart: a
                    }
                })
            }
        };
    var d = (0, o.default)("Tag", (e => {
        const {
            fontSize: t,
            lineHeight: r,
            lineWidth: n,
            fontSizeIcon: o
        } = e, i = Math.round(t * r), s = e.fontSizeSM, c = i - 2 * n, d = e.colorFillAlter, p = e.colorText, h = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: c,
            tagDefaultBg: d,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [f(h), u(h), l(h, "success", "Success"), l(h, "processing", "Info"), l(h, "error", "Error"), l(h, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("fK8ya", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("fBuQJ"),
        c = r("lKmIF"),
        l = r("1djzF");
    let u;
    const f = i.default.img.attrs((e => ({
        src: e.image
    })))(u || (u = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${c.default.Black} 1px;`));
    var d = e => {
        const [t, r] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(f, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(s.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
                },
                footer: null,
                closable: !1,
                children: (0, o.jsx)("img", {
                    src: (0, l.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), r.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return n
    }));
    const n = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!c.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        c = [a, i]
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
        return a
    }));
    var o = r("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            a = r[1];
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
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(r("fywoC"));

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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return a(t, e), t
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
            o = s.useRef(),
            a = s.useCallback((function() {
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
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), n({
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
})), r.register("69bEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("4Gnmi"),
        i = r("fywoC");
    const s = i.lazy((() => r("9mi4b")));
    var c = e => {
        const t = e.hideSkeleton ? (0, o.jsx)("div", {
            className: "maxWidth"
        }) : (0, o.jsx)("div", {
            className: "maxWidth",
            children: (0, o.jsx)(a.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, o.jsx)(i.Suspense, {
            fallback: t,
            children: (0, o.jsx)(s, {
                ...e
            })
        })
    }
})), r.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([r("g2MeW")(new URL(r("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + r("ihc6Q").resolve("6iUO5"))]).then((() => r("jLITb")))
})), r.register("l5RHB", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5xGm1"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "ClockCircleOutlined";
    var l = a.forwardRef(c)
})), r.register("5xGm1", (function(t, r) {
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
                    d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                }
            }]
        },
        name: "clock-circle",
        theme: "outlined"
    }
})), r.register("lOxf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("cpDNt"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "TrophyOutlined";
    var l = a.forwardRef(c)
})), r.register("cpDNt", (function(t, r) {
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
                    d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
                }
            }]
        },
        name: "trophy",
        theme: "outlined"
    }
})), r.register("bbvHy", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        normal: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 400;\n",
        bold: "\n    font-family: 'Product Sans', sans-serif;\n    font-weight: 800;\n  ",
        black: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 900;\n",
        fontFamilyName: "Product Sans, sans-serif"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "UsergroupAddOutlined";
    var l = a.forwardRef(c)
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
        a = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "LogoutOutlined";
    var l = a.forwardRef(c)
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
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ayjhg"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "CheckOutlined";
    var l = a.forwardRef(c)
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
})), r.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5D7Fe"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "DownOutlined";
    var l = a.forwardRef(c)
})), r.register("5D7Fe", (function(t, r) {
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
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), r.register("5vs73", (function(t, r) {
    e(t.exports, "CLASSIC", (function() {
        return n
    })), e(t.exports, "TEAMS", (function() {
        return o
    })), e(t.exports, "THANOS", (function() {
        return a
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return i
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return c
    })), e(t.exports, "IMPOSTER", (function() {
        return l
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "PARDY", (function() {
        return f
    }));
    const n = "CLASSIC",
        o = "TEAMS",
        a = "THANOS",
        i = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        c = "LAVA",
        l = "IMPOSTER",
        u = "DRAW",
        f = "PARDY"
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("beXRF");
    r("fywoC");
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
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        s = r("hzerz"),
        c = r("46jhs"),
        l = r("hn4Tf"),
        u = r("7NK35"),
        f = r("b1RjK"),
        d = r("17aYs"),
        p = r("fywoC"),
        h = r("fe1on"),
        g = function(e) {
            (0, f.default)(n, e);
            var r = (0, d.default)(n);

            function n(e) {
                var t;
                (0, l.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, c.default)((0, c.default)({}, t.props), {}, {
                            checked: e.target.checked
                        }),
                        stopPropagation: function() {
                            e.stopPropagation()
                        },
                        preventDefault: function() {
                            e.preventDefault()
                        },
                        nativeEvent: e.nativeEvent
                    }))
                }, t.saveInput = function(e) {
                    t.input = e
                };
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
                }, t
            }
            return (0, u.default)(n, [{
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            }, {
                key: "render",
                value: function() {
                    var e, r = this.props,
                        n = r.prefixCls,
                        o = r.className,
                        c = r.style,
                        l = r.name,
                        u = r.id,
                        f = r.type,
                        d = r.disabled,
                        g = r.readOnly,
                        m = r.tabIndex,
                        v = r.onClick,
                        y = r.onFocus,
                        x = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        k = r.onKeyUp,
                        C = r.autoFocus,
                        O = r.value,
                        S = r.required,
                        E = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        M = Object.keys(E).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = E[t]), e
                        }), {}),
                        j = this.state.checked,
                        P = t(h)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), j), (0, i.default)(e, "".concat(n, "-disabled"), d), e));
                    return t(p).createElement("span", {
                        className: P,
                        style: c
                    }, t(p).createElement("input", (0, a.default)({
                        name: l,
                        id: u,
                        type: f,
                        required: S,
                        readOnly: g,
                        disabled: d,
                        tabIndex: m,
                        className: "".concat(n, "-input"),
                        checked: !!j,
                        onClick: v,
                        onFocus: y,
                        onBlur: x,
                        onKeyUp: k,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: C,
                        ref: this.saveInput,
                        value: O
                    }, M)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, c.default)((0, c.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    g.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var m = g
})), r.register("2ic9V", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("iStnv", (function(t, r) {
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("hzerz", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var r, n, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("iStnv");

    function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach((function(t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
})), r.register("hn4Tf", (function(t, r) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("7NK35", (function(t, r) {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("63PCo");

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), r.register("63PCo", (function(t, r) {
    function n(e, t) {
        return n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(e, t)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("17aYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function s(e) {
        var t = (0, a.default)();
        return function() {
            var r, n = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                r = Reflect.construct(n, arguments, a)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
})), r.register("bArAQ", (function(t, r) {
    function n(e) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lcgmN", (function(t, r) {
    function n() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("erlXZ", (function(n, o) {
    e(n.exports, "default", (function() {
        return s
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function s(e, r) {
        if (r && ("object" === t(a)(r) || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), r.register("1eKqi", (function(e, t) {
    function r(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
    }
    e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
})), r.register("cdb2f", (function(t, r) {
    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("fywoC");
    const i = a.lazy((() => r("h3n1W")));
    var s = e => (0, o.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(i, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("f9d7r", (function(t, r) {
    let n;
    var o;
    e(t.exports, "HookType", (function() {
        return n
    })), (o = n || (n = {})).selectBox = "selectBox", o.kit = "kit", o.number = "number"
})), r.register("5mRwo", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    e(t.exports, "LocalStorageNames", (function() {
        return a
    })), (o = n || (n = {})).time = "time", o.target = "target", o.race = "race", o.allIn = "allIn", (i = a || (a = {})).language = "gimkit-3.0-game-language", i.currency = "gimkit-game-currency", i.music = "gimkit-music-track", i.allowGoogleTranslate = "gimkit-google-translate-allowed", i.editorDefaultLanguage = "gimkit-editor-v4-default-language", i.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", i.editorDefaultSubject = "gimkit-editor-v4-default-subject", i.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", i.hookSavedOptions = "gimkit-hook-saved-options"
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = r("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "StarOutlined";
    var l = a.forwardRef(c)
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
})), r.register("j2XHK", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    let s;
    var c;
    let l;
    let u;
    var f;
    e(t.exports, "QuestionType", (function() {
        return n
    })), e(t.exports, "Privacy", (function() {
        return a
    })), e(t.exports, "GameStatus", (function() {
        return s
    })), e(t.exports, "GameType", (function() {
        return l
    })), e(t.exports, "GameGoal", (function() {
        return u
    })), e(t.exports, "themes", (function() {
        return m
    })), e(t.exports, "ExperienceSource", (function() {
        return v
    })), (o = n || (n = {})).multipleChoice = "mc", o.textInput = "text", (i = a || (a = {})).public = "public", i.private = "private", (c = s || (s = {})).setup = "setup", c.join = "join", c.teams = "teams", c.gameplay = "gameplay", c.results = "results", (l || (l = {})).live = "live", (f = u || (u = {})).time = "time", f.race = "race", f.allIn = "allIn";
    const d = "#ffffff",
        p = "#000000";
    let h;
    var g;
    (g = h || (h = {})).easy = "easy", g.medium = "medium", g.hard = "hard", g.veryHard = "veryHard", g.veryVeryHard = "veryVeryHard";
    const m = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: d
        },
        palette: [{
            background: "#771322",
            text: d
        }, {
            background: "#A85C15",
            text: d
        }, {
            background: "#0D6B33",
            text: d
        }, {
            background: "#076296",
            text: d
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: d
        },
        palette: [{
            background: "#9E682A",
            text: d
        }, {
            background: "#B54730",
            text: d
        }, {
            background: "#8A9748",
            text: d
        }, {
            background: "#F1B930",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: d
        },
        palette: [{
            background: "#263238",
            text: d
        }, {
            background: "#37474f",
            text: d
        }, {
            background: "#455a64",
            text: d
        }, {
            background: "#546e7a",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: d
        },
        palette: [{
            background: "#220044",
            text: d
        }, {
            background: "#330066",
            text: d
        }, {
            background: "#3E007C",
            text: d
        }, {
            background: "#4F1787",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: d
        },
        palette: [{
            background: "#283593",
            text: d
        }, {
            background: "#076296",
            text: d
        }, {
            background: "#0277bd",
            text: d
        }, {
            background: "#1565c0",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: d
        },
        palette: [{
            background: "#385645",
            text: d
        }, {
            background: "#425C49",
            text: d
        }, {
            background: "#415641",
            text: d
        }, {
            background: "#4C6349",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: d
        },
        palette: [{
            background: "#F46F5A",
            text: d
        }, {
            background: "#ED712D",
            text: d
        }, {
            background: "#7A596A",
            text: d
        }, {
            background: "#E8AB3C",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: d
        },
        palette: [{
            background: "#001D3B",
            text: d
        }, {
            background: "#FFAE52",
            text: d
        }, {
            background: "#FE5963",
            text: d
        }, {
            background: "#A71C94",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: p,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: p
        }, {
            background: "#FFC721",
            text: p
        }, {
            background: "#FFD147",
            text: p
        }, {
            background: "#FFCD38",
            text: p
        }],
        owned: !1,
        isActive: !1
    }];
    let v;
    var y;
    (y = v || (v = {})).original = "original", y.map = "map"
})), r.register("3aHwG", (function(t, r) {
    let n;
    var o;
    e(t.exports, "MapModeType", (function() {
        return n
    })), (o = n || (n = {})).liveGame = "liveGame", o.assignment = "assignment"
})), r.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return c
    }));
    var o = r("6fFlL"),
        a = r("iMOcM"),
        i = r("dOsOD"),
        s = r("amvOw");
    const c = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), i.AnalyticsFlags.educatorOnly) && (null === (n = (0, a.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
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
            n = (0, i.default)(t);
        return (0, a.default)((() => {
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
        return a
    }));
    var a = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");
    var a = e => {
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
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t = o, r || (r = requestAnimationFrame((function() {
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
    var o = r("kqQIs"),
        a = r("2Af7I"),
        i = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        c = r("cY4lv"),
        l = r("kYx4h"),
        u = 44;

    function f(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var d = i.forwardRef((function(e, t) {
            var r, n = e.classes,
                c = e.className,
                d = e.color,
                p = void 0 === d ? "primary" : d,
                h = e.disableShrink,
                g = void 0 !== h && h,
                m = e.size,
                v = void 0 === m ? 40 : m,
                y = e.style,
                x = e.thickness,
                b = void 0 === x ? 3.6 : x,
                w = e.value,
                k = void 0 === w ? 0 : w,
                C = e.variant,
                O = void 0 === C ? "indeterminate" : C,
                S = (0, a.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                E = {},
                M = {},
                j = {};
            if ("determinate" === O || "static" === O) {
                var P = 2 * Math.PI * ((u - b) / 2);
                E.strokeDasharray = P.toFixed(3), j["aria-valuenow"] = Math.round(k), "static" === O ? (E.strokeDashoffset = "".concat(((100 - k) / 100 * P).toFixed(3), "px"), M.transform = "rotate(-90deg)") : (E.strokeDashoffset = "".concat((r = (100 - k) / 100, r * r * P).toFixed(3), "px"), M.transform = "rotate(".concat((270 * f(k / 70)).toFixed(3), "deg)"))
            }
            return i.createElement("div", (0, o.default)({
                className: (0, s.default)(n.root, c, "inherit" !== p && n["color".concat((0, l.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [O]),
                style: (0, o.default)({
                    width: v,
                    height: v
                }, M, y),
                ref: t,
                role: "progressbar"
            }, j, S), i.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, i.createElement("circle", {
                className: (0, s.default)(n.circle, g && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [O]),
                style: E,
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
        })(d)
})), r.register("lvQ9C", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("1HsHH"),
        s = r("iMOcM");
    var c = e => {
        const [t, r] = a.useState([]), [n] = a.useState(e.limit), [c, l] = a.useState(e.defaultPage), [u, f] = a.useState(!0), [d, p] = a.useState([]), [h, g] = a.useState(!1), m = a.useMemo((() => (e.modifyItems ? e.modifyItems(d) : d).map(((t, r) => e.toRender(t, r)))), [d.length, e.toRender]), v = () => {
            if (t.includes(c)) return;
            r((e => [...e, c]));
            const o = {
                page: c,
                limit: n
            };
            (0, s.request)({
                url: e.url,
                method: "post",
                cacheKey: e.cacheKey,
                data: e.modifyBody ? e.modifyBody(o) : o,
                success: (t, r) => {
                    e.onTotalItems && !h && (e.onTotalItems(t.totalItems), g(!0)), t.items.forEach((t => {
                        e.onItemFetched && e.onItemFetched(t, r)
                    })), p((e => [...e, ...t.items])), f(t.hasNextPage), l(t.nextPage)
                },
                error: () => {
                    e.onTotalItems && !h && (e.onTotalItems(0), g(!0)), f(!1)
                },
                both: () => r((e => e.filter((e => e !== o.page))))
            })
        };
        return a.useEffect(v, []), !u && e.forceEmptyMessage || !u && 0 === d.length && e.emptyMessage ? e.emptyMessage(d) : (0, o.jsxs)(i.default, {
            dataLength: d.length,
            hasMore: u,
            style: e.scrollStyle,
            next: v,
            loader: e.loader || (0, o.jsx)("div", {}),
            scrollThreshold: e.scrollThreshold,
            endMessage: e.endMessage ? e.endMessage(d) : null,
            scrollableTarget: e.scrollableTarget,
            children: [e.prefix ? e.prefix() : null, m]
        })
    }
})), r.register("1HsHH", (function(n, o) {
    e(n.exports, "default", (function() {
        return p
    }));
    var a = r("fywoC"),
        i = function(e, t) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, i(e, t)
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var s = function() {
        return s = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, s.apply(this, arguments)
    };
    var c = "Pixel",
        l = "Percent",
        u = {
            unit: l,
            value: .8
        };

    function f(e) {
        return "number" == typeof e ? {
            unit: l,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: c,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: l,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), u) : (console.warn("scrollThreshold should be string or number"), u)
    }
    var d = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.lastScrollTop = 0, r.actionTriggered = !1, r.startY = 0, r.currentY = 0, r.dragging = !1, r.maxPullDownDistance = 0, r.getScrollableTarget = function() {
                    return r.props.scrollableTarget instanceof HTMLElement ? r.props.scrollableTarget : "string" == typeof r.props.scrollableTarget ? document.getElementById(r.props.scrollableTarget) : (null === r.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                }, r.onStart = function(e) {
                    r.lastScrollTop || (r.dragging = !0, e instanceof MouseEvent ? r.startY = e.pageY : e instanceof TouchEvent && (r.startY = e.touches[0].pageY), r.currentY = r.startY, r._infScroll && (r._infScroll.style.willChange = "transform", r._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                }, r.onMove = function(e) {
                    r.dragging && (e instanceof MouseEvent ? r.currentY = e.pageY : e instanceof TouchEvent && (r.currentY = e.touches[0].pageY), r.currentY < r.startY || (r.currentY - r.startY >= Number(r.props.pullDownToRefreshThreshold) && r.setState({
                        pullToRefreshThresholdBreached: !0
                    }), r.currentY - r.startY > 1.5 * r.maxPullDownDistance || r._infScroll && (r._infScroll.style.overflow = "visible", r._infScroll.style.transform = "translate3d(0px, " + (r.currentY - r.startY) + "px, 0px)")))
                }, r.onEnd = function() {
                    r.startY = 0, r.currentY = 0, r.dragging = !1, r.state.pullToRefreshThresholdBreached && (r.props.refreshFunction && r.props.refreshFunction(), r.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame((function() {
                        r._infScroll && (r._infScroll.style.overflow = "auto", r._infScroll.style.transform = "none", r._infScroll.style.willChange = "none")
                    }))
                }, r.onScrollListener = function(e) {
                    "function" == typeof r.props.onScroll && setTimeout((function() {
                        return r.props.onScroll && r.props.onScroll(e)
                    }), 0);
                    var t = r.props.height || r._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    r.actionTriggered || ((r.props.inverse ? r.isElementAtTop(t, r.props.scrollThreshold) : r.isElementAtBottom(t, r.props.scrollThreshold)) && r.props.hasMore && (r.actionTriggered = !0, r.setState({
                        showLoader: !0
                    }), r.props.next && r.props.next()), r.lastScrollTop = t.scrollTop)
                }, r.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, r.throttledOnScrollListener = function(e, t, r, n) {
                    var o, a = !1,
                        i = 0;

                    function s() {
                        o && clearTimeout(o)
                    }

                    function c() {
                        var c = this,
                            l = Date.now() - i,
                            u = arguments;

                        function f() {
                            i = Date.now(), r.apply(c, u)
                        }

                        function d() {
                            o = void 0
                        }
                        a || (n && !o && f(), s(), void 0 === n && l > e ? f() : !0 !== t && (o = setTimeout(n ? d : f, void 0 === n ? e - l : e)))
                    }
                    return "boolean" != typeof t && (n = r, r = t, t = void 0), c.cancel = function() {
                        s(), a = !0
                    }, c
                }(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
            }
            return function(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(r, e), r.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
            }, r.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
            }, r.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }))
            }, r.prototype.isElementAtTop = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = f(t);
                return n.unit === c ? e.scrollTop <= n.value + r - e.scrollHeight + 1 || 0 === e.scrollTop : e.scrollTop <= n.value / 100 + r - e.scrollHeight + 1 || 0 === e.scrollTop
            }, r.prototype.isElementAtBottom = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = f(t);
                return n.unit === c ? e.scrollTop + r >= e.scrollHeight - n.value : e.scrollTop + r >= n.value / 100 * e.scrollHeight
            }, r.prototype.render = function() {
                var e = this,
                    r = s({
                        height: this.props.height || "auto",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: "auto"
                    } : {};
                return t(a).createElement("div", {
                    style: o,
                    className: "infinite-scroll-component__outerdiv"
                }, t(a).createElement("div", {
                    className: "infinite-scroll-component " + (this.props.className || ""),
                    ref: function(t) {
                        return e._infScroll = t
                    },
                    style: r
                }, this.props.pullDownToRefresh && t(a).createElement("div", {
                    style: {
                        position: "relative"
                    },
                    ref: function(t) {
                        return e._pullDown = t
                    }
                }, t(a).createElement("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
            }, r
        }(a.Component),
        p = d
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var c = e => (0, o.jsx)(l, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const l = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("bM2u5", (function(t, n) {
    e(t.exports, "GetHomepagePath", (function() {
        return c
    })), e(t.exports, "RedirectToHomepage", (function() {
        return l
    })), e(t.exports, "ReplaceToHomePage", (function() {
        return u
    }));
    var o = r("b1oE9"),
        a = r("bd8je"),
        i = r("iMOcM"),
        s = r("iROck");
    const c = () => (0, i.isLoggedIn)() ? (0, i.isStudent)() ? o.HOME : o.KITS : "/",
        l = () => {
            (0, s.NavigateTo)(c())
        },
        u = () => {
            a.history.replace(c())
        }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("dFdNj", (function(t, n) {
    e(t.exports, "UpgradeModal_CopyKit", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("46bRO");
    const i = {
        title: (0, o.jsx)(o.Fragment, {
            children: "Copy kits with Pro"
        }),
        description: (0, o.jsxs)(o.Fragment, {
            children: ["To copy kits and make them your own, upgrade to ", a.COMPANY_NAME, " Pro."]
        })
    }
})), r.register("gJKjM", (function(n, o) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return c
    }));
    var a = r("fywoC"),
        i = r("2tfup");
    const s = ["xxl", "xl", "lg", "md", "sm", "xs"];

    function c() {
        const [, e] = (0, i.useToken)(), r = (e => ({
            xs: `(max-width: ${e.screenXSMax}px)`,
            sm: `(min-width: ${e.screenSM}px)`,
            md: `(min-width: ${e.screenMD}px)`,
            lg: `(min-width: ${e.screenLG}px)`,
            xl: `(min-width: ${e.screenXL}px)`,
            xxl: `(min-width: ${e.screenXXL}px)`
        }))((e => {
            const t = e,
                r = [].concat(s).reverse();
            return r.forEach(((e, n) => {
                const o = e.toUpperCase(),
                    a = `screen${o}Min`,
                    i = `screen${o}`;
                if (!(t[a] <= t[i])) throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
                if (n < r.length - 1) {
                    const e = `screen${o}Max`;
                    if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                    const a = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[a])) throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)
                }
            })), e
        })(e));
        return t(a).useMemo((() => {
            const e = new Map;
            let t = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: t => (n = t, e.forEach((e => e(n))), e.size >= 1),
                subscribe(r) {
                    return e.size || this.register(), t += 1, e.set(t, r), r(n), t
                },
                unsubscribe(t) {
                    e.delete(t), e.size || this.unregister()
                },
                unregister() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            n = this.matchHandlers[t];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener)
                    })), e.clear()
                },
                register() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            o = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            a = window.matchMedia(t);
                        a.addListener(o), this.matchHandlers[t] = {
                            mql: a,
                            listener: o
                        }, o(a)
                    }))
                },
                responsiveMap: r
            }
        }), [e])
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            a = (0, n.forwardRef)((function(e, r) {
                var a = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(a.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return a.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, a
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
        a = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "QuestionCircleOutlined";
    var l = a.forwardRef(c)
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
})), r.register("hFybW", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("lKmIF"),
        c = r("69SUA");
    let l, u, f, d = e => e;
    const p = "#1890FF",
        h = i.default.div(l || (l = d`
  width: 100%;
  box-sizing: border-box;
  font-family: ${0};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${0}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${0};
  color: ${0};
  ${0}
  transition: all 0.25s;
  &:hover {
    color: ${0};
  }
`), c.Fonts.SFPro, 14, (e => e.selected && !e.blockBackground ? "#E5F7FE" : s.default.White), (e => e.selected ? p : "rgba(0,0,0,.65)"), (e => e.selected && !e.blockStripe && "border-right: 3px solid " + p + ";"), p),
        g = i.default.div.attrs({
            className: "flex vc maxWidth"
        })(u || (u = d``)),
        m = i.default.div(f || (f = d``));
    class v extends a.Component {
        render() {
            const {
                title: e,
                onClick: t,
                selected: r,
                blockStripe: n,
                blockBackground: a
            } = this.props, i = this.props.icon;
            return (0, o.jsxs)(h, {
                selected: r,
                blockStripe: n,
                blockBackground: a,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [i ? (0, o.jsx)(i, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? "twoTone" : "outlined",
                    twoToneColor: this.props.customIconColor || ""
                }) : null, (0, o.jsxs)(g, {
                    children: [(0, o.jsx)(m, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    }
    var y = v
})), r.register("c6BvM", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("hwpEJ"),
        s = r("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "ShareAltOutlined";
    var l = a.forwardRef(c)
})), r.register("hwpEJ", (function(t, r) {
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
                    d: "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                }
            }]
        },
        name: "share-alt",
        theme: "outlined"
    }
})), r.register("kxv2V", (function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }
})), r.register("lJSKF", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("kQLx6");
    var i = e => {
        const t = (0, a.use100vh)();
        return (0, o.jsx)("div", {
            style: {
                height: t,
                width: "100%"
            },
            className: e.className,
            children: e.children
        })
    }
})), r.register("kQLx6", (function(n, o) {
    e(n.exports, "use100vh", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fywoC"),
        i = function() {
            return i = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        },
        s = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        },
        c = !1,
        l = (0, a.forwardRef)((function(e, r) {
            var n = e.style,
                o = s(e, ["style"]),
                l = u();
            !c && (null == n ? void 0 : n.height) && (c = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
            var f = i(i({}, n), {
                height: l ? l + "px" : "100vh"
            });
            return t(a).createElement("div", i({
                ref: r,
                style: f
            }, o))
        }));
    l.displayName = "Div100vh";

    function u() {
        var e = (0, a.useState)(f),
            t = e[0],
            r = e[1],
            n = function() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    r = e[1];
                return (0, a.useEffect)((function() {
                    d() && r(!0)
                }), []), t
            }();
        return (0, a.useEffect)((function() {
            if (n) return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                };

            function e() {
                var e = f();
                r(e)
            }
        }), [n]), n ? t : null
    }

    function f() {
        return d() ? window.innerHeight : null
    }

    function d() {
        return "undefined" != typeof window && "undefined" != typeof document
    }
}));