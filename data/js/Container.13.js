function e(e) {
    return e && e.__esModule ? e.default : e
}

function n(e, n, t, i) {
    Object.defineProperty(e, n, {
        get: t,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("l89Zc", (function(i, r) {
    n(i.exports, "default", (function() {
        return S
    }), (function(e) {
        return S = e
    }));
    var a = t("kpdXN"),
        o = t("fe1on"),
        c = t("79t6J"),
        s = t("fywoC"),
        l = t("4gMdJ"),
        d = t("cmARv"),
        u = t("3Ocec"),
        h = t("eM84N"),
        f = t("aPNKT"),
        g = function(e, n) {
            var t = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (t[i[r]] = e[i[r]])
            }
            return t
        };
    const p = s.forwardRef(((n, t) => {
        var {
            prefixCls: i,
            size: r,
            disabled: p,
            loading: S,
            className: M,
            rootClassName: w
        } = n, E = g(n, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName"]);
        const {
            getPrefixCls: I,
            direction: x
        } = s.useContext(l.ConfigContext), m = s.useContext(u.default), b = s.useContext(d.default), N = (null != p ? p : b) || S, C = I("switch", i), y = s.createElement("div", {
            className: `${C}-handle`
        }, S && s.createElement(a.default, {
            className: `${C}-loading-icon`
        })), [$, _] = (0, f.default)(C), O = e(o)({
            [`${C}-small`]: "small" === (r || m),
            [`${C}-loading`]: S,
            [`${C}-rtl`]: "rtl" === x
        }, M, w, _);
        return $(s.createElement(h.default, null, s.createElement(c.default, Object.assign({}, E, {
            prefixCls: C,
            className: O,
            disabled: N,
            ref: t,
            loadingIcon: y
        }))))
    }));
    p.__ANT_SWITCH = !0;
    var S = p
})), t.register("79t6J", (function(i, r) {
    n(i.exports, "default", (function() {
        return p
    }));
    var a = t("20f6l"),
        o = t("86otN"),
        c = t("4WMr0"),
        s = t("kYjTQ"),
        l = t("fywoC"),
        d = t("fe1on"),
        u = t("5DLn5"),
        h = t("aaRU0"),
        f = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"],
        g = l.forwardRef((function(n, t) {
            var i, r = n.prefixCls,
                g = void 0 === r ? "rc-switch" : r,
                p = n.className,
                S = n.checked,
                M = n.defaultChecked,
                w = n.disabled,
                E = n.loadingIcon,
                I = n.checkedChildren,
                x = n.unCheckedChildren,
                m = n.onClick,
                b = n.onChange,
                N = n.onKeyDown,
                C = e(s)(n, f),
                y = (0, u.default)(!1, {
                    value: S,
                    defaultValue: M
                }),
                $ = e(c)(y, 2),
                _ = $[0],
                O = $[1];

            function P(e, n) {
                var t = _;
                return w || (O(t = e), null == b || b(t, n)), t
            }
            var v = e(d)(g, p, (i = {}, e(o)(i, "".concat(g, "-checked"), _), e(o)(i, "".concat(g, "-disabled"), w), i));
            return l.createElement("button", e(a)({}, C, {
                type: "button",
                role: "switch",
                "aria-checked": _,
                disabled: w,
                className: v,
                ref: t,
                onKeyDown: function(e) {
                    e.which === h.default.LEFT ? P(!1, e) : e.which === h.default.RIGHT && P(!0, e), null == N || N(e)
                },
                onClick: function(e) {
                    var n = P(!_, e);
                    null == m || m(n, e)
                }
            }), E, l.createElement("span", {
                className: "".concat(g, "-inner")
            }, l.createElement("span", {
                className: "".concat(g, "-inner-checked")
            }, I), l.createElement("span", {
                className: "".concat(g, "-inner-unchecked")
            }, x)))
        }));
    g.displayName = "Switch";
    var p = g
})), t.register("20f6l", (function(e, n) {
    function t() {
        return e.exports = t = Object.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, e.exports.default = e.exports, e.exports.__esModule = !0, t.apply(this, arguments)
    }
    e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("86otN", (function(e, n) {
    e.exports = function(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("4WMr0", (function(e, n) {
    var i = t("kD6bR"),
        r = t("itQK0"),
        a = t("8PrcS"),
        o = t("dFpxz");
    e.exports = function(e, n) {
        return i(e) || r(e, n) || a(e, n) || o()
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("kD6bR", (function(e, n) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("itQK0", (function(e, n) {
    e.exports = function(e, n) {
        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != t) {
            var i, r, a = [],
                o = !0,
                c = !1;
            try {
                for (t = t.call(e); !(o = (i = t.next()).done) && (a.push(i.value), !n || a.length !== n); o = !0);
            } catch (e) {
                c = !0, r = e
            } finally {
                try {
                    o || null == t.return || t.return()
                } finally {
                    if (c) throw r
                }
            }
            return a
        }
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("8PrcS", (function(e, n) {
    var i = t("7eFHB");
    e.exports = function(e, n) {
        if (e) {
            if ("string" == typeof e) return i(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0
        }
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("7eFHB", (function(e, n) {
    e.exports = function(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("dFpxz", (function(e, n) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("kYjTQ", (function(e, n) {
    var i = t("c51kx");
    e.exports = function(e, n) {
        if (null == e) return {};
        var t, r, a = i(e, n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
        }
        return a
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("c51kx", (function(e, n) {
    e.exports = function(e, n) {
        if (null == e) return {};
        var t, i, r = {},
            a = Object.keys(e);
        for (i = 0; i < a.length; i++) t = a[i], n.indexOf(t) >= 0 || (r[t] = e[t]);
        return r
    }, e.exports.default = e.exports, e.exports.__esModule = !0
})), t.register("5DLn5", (function(e, i) {
    n(e.exports, "default", (function() {
        return o
    }));
    var r = t("jhEcc"),
        a = t("fywoC");

    function o(e, n) {
        var t = n || {},
            i = t.defaultValue,
            o = t.value,
            c = t.onChange,
            s = t.postState,
            l = a.useState((function() {
                return void 0 !== o ? o : void 0 !== i ? "function" == typeof i ? i() : i : "function" == typeof e ? e() : e
            })),
            d = (0, r.default)(l, 2),
            u = d[0],
            h = d[1],
            f = void 0 !== o ? o : u;
        s && (f = s(f));
        var g = a.useRef(!0);
        return a.useEffect((function() {
            g.current ? g.current = !1 : void 0 === o && h(o)
        }), [o]), [f, function(e) {
            h(e), f !== e && c && c(e, f)
        }]
    }
})), t.register("jhEcc", (function(e, i) {
    n(e.exports, "default", (function() {
        return s
    }));
    var r = t("hi3kt"),
        a = t("5qJTN"),
        o = t("gEFS6"),
        c = t("4UXqp");

    function s(e, n) {
        return (0, r.default)(e) || (0, a.default)(e, n) || (0, o.default)(e, n) || (0, c.default)()
    }
})), t.register("hi3kt", (function(e, t) {
    function i(e) {
        if (Array.isArray(e)) return e
    }
    n(e.exports, "default", (function() {
        return i
    }))
})), t.register("5qJTN", (function(e, t) {
    function i(e, n) {
        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != t) {
            var i, r, a = [],
                o = !0,
                c = !1;
            try {
                for (t = t.call(e); !(o = (i = t.next()).done) && (a.push(i.value), !n || a.length !== n); o = !0);
            } catch (e) {
                c = !0, r = e
            } finally {
                try {
                    o || null == t.return || t.return()
                } finally {
                    if (c) throw r
                }
            }
            return a
        }
    }
    n(e.exports, "default", (function() {
        return i
    }))
})), t.register("gEFS6", (function(e, i) {
    n(e.exports, "default", (function() {
        return a
    }));
    var r = t("Czg2C");

    function a(e, n) {
        if (e) {
            if ("string" == typeof e) return (0, r.default)(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, r.default)(e, n) : void 0
        }
    }
})), t.register("Czg2C", (function(e, t) {
    function i(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i
    }
    n(e.exports, "default", (function() {
        return i
    }))
})), t.register("4UXqp", (function(e, t) {
    function i() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    n(e.exports, "default", (function() {
        return i
    }))
})), t.register("aaRU0", (function(e, t) {
    n(e.exports, "default", (function() {
        return r
    }));
    var i = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(e) {
                var n = e.keyCode;
                if (e.altKey && !e.ctrlKey || e.metaKey || n >= i.F1 && n <= i.F12) return !1;
                switch (n) {
                    case i.ALT:
                    case i.CAPS_LOCK:
                    case i.CONTEXT_MENU:
                    case i.CTRL:
                    case i.DOWN:
                    case i.END:
                    case i.ESC:
                    case i.HOME:
                    case i.INSERT:
                    case i.LEFT:
                    case i.MAC_FF_META:
                    case i.META:
                    case i.NUMLOCK:
                    case i.NUM_CENTER:
                    case i.PAGE_DOWN:
                    case i.PAGE_UP:
                    case i.PAUSE:
                    case i.PRINT_SCREEN:
                    case i.RIGHT:
                    case i.SHIFT:
                    case i.UP:
                    case i.WIN_KEY:
                    case i.WIN_KEY_RIGHT:
                        return !1;
                    default:
                        return !0
                }
            },
            isCharacterKey: function(e) {
                if (e >= i.ZERO && e <= i.NINE) return !0;
                if (e >= i.NUM_ZERO && e <= i.NUM_MULTIPLY) return !0;
                if (e >= i.A && e <= i.Z) return !0;
                if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
                switch (e) {
                    case i.SPACE:
                    case i.QUESTION_MARK:
                    case i.NUM_PLUS:
                    case i.NUM_MINUS:
                    case i.NUM_PERIOD:
                    case i.NUM_DIVISION:
                    case i.SEMICOLON:
                    case i.DASH:
                    case i.EQUALS:
                    case i.COMMA:
                    case i.PERIOD:
                    case i.SLASH:
                    case i.APOSTROPHE:
                    case i.SINGLE_QUOTE:
                    case i.OPEN_SQUARE_BRACKET:
                    case i.BACKSLASH:
                    case i.CLOSE_SQUARE_BRACKET:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        r = i
})), t.register("aPNKT", (function(e, i) {
    n(e.exports, "default", (function() {
        return f
    }));
    var r = t("Bb28M"),
        a = t("huF4L"),
        o = t("1QMe3"),
        c = t("kCC5O");
    const s = e => {
            const {
                componentCls: n
            } = e, t = `${n}-inner`;
            return {
                [n]: {
                    [`&${n}-small`]: {
                        minWidth: e.switchMinWidthSM,
                        height: e.switchHeightSM,
                        lineHeight: `${e.switchHeightSM}px`,
                        [`${n}-inner`]: {
                            paddingInlineStart: e.switchInnerMarginMaxSM,
                            paddingInlineEnd: e.switchInnerMarginMinSM,
                            [`${t}-checked`]: {
                                marginInlineStart: `calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`,
                                marginInlineEnd: `calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`
                            },
                            [`${t}-unchecked`]: {
                                marginTop: -e.switchHeightSM,
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            }
                        },
                        [`${n}-handle`]: {
                            width: e.switchPinSizeSM,
                            height: e.switchPinSizeSM
                        },
                        [`${n}-loading-icon`]: {
                            top: (e.switchPinSizeSM - e.switchLoadingIconSize) / 2,
                            fontSize: e.switchLoadingIconSize
                        },
                        [`&${n}-checked`]: {
                            [`${n}-inner`]: {
                                paddingInlineStart: e.switchInnerMarginMinSM,
                                paddingInlineEnd: e.switchInnerMarginMaxSM,
                                [`${t}-checked`]: {
                                    marginInlineStart: 0,
                                    marginInlineEnd: 0
                                },
                                [`${t}-unchecked`]: {
                                    marginInlineStart: `calc(100% - ${e.switchPinSizeSM+2*e.switchPadding}px + ${2*e.switchInnerMarginMaxSM}px)`,
                                    marginInlineEnd: `calc(-100% + ${e.switchPinSizeSM+2*e.switchPadding}px - ${2*e.switchInnerMarginMaxSM}px)`
                                }
                            },
                            [`${n}-handle`]: {
                                insetInlineStart: `calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`
                            }
                        },
                        [`&:not(${n}-disabled):active`]: {
                            [`&:not(${n}-checked) ${t}`]: {
                                [`${t}-unchecked`]: {
                                    marginInlineStart: e.marginXXS / 2,
                                    marginInlineEnd: -e.marginXXS / 2
                                }
                            },
                            [`&${n}-checked ${t}`]: {
                                [`${t}-checked`]: {
                                    marginInlineStart: -e.marginXXS / 2,
                                    marginInlineEnd: e.marginXXS / 2
                                }
                            }
                        }
                    }
                }
            }
        },
        l = e => {
            const {
                componentCls: n
            } = e;
            return {
                [n]: {
                    [`${n}-loading-icon${e.iconCls}`]: {
                        position: "relative",
                        top: (e.switchPinSize - e.fontSize) / 2,
                        color: e.switchLoadingIconColor,
                        verticalAlign: "top"
                    },
                    [`&${n}-checked ${n}-loading-icon`]: {
                        color: e.switchColor
                    }
                }
            }
        },
        d = e => {
            const {
                componentCls: n
            } = e, t = `${n}-handle`;
            return {
                [n]: {
                    [t]: {
                        position: "absolute",
                        top: e.switchPadding,
                        insetInlineStart: e.switchPadding,
                        width: e.switchPinSize,
                        height: e.switchPinSize,
                        transition: `all ${e.switchDuration} ease-in-out`,
                        "&::before": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            backgroundColor: e.colorWhite,
                            borderRadius: e.switchPinSize / 2,
                            boxShadow: e.switchHandleShadow,
                            transition: `all ${e.switchDuration} ease-in-out`,
                            content: '""'
                        }
                    },
                    [`&${n}-checked ${t}`]: {
                        insetInlineStart: `calc(100% - ${e.switchPinSize+e.switchPadding}px)`
                    },
                    [`&:not(${n}-disabled):active`]: {
                        [`${t}::before`]: {
                            insetInlineEnd: e.switchHandleActiveInset,
                            insetInlineStart: 0
                        },
                        [`&${n}-checked ${t}::before`]: {
                            insetInlineEnd: 0,
                            insetInlineStart: e.switchHandleActiveInset
                        }
                    }
                }
            }
        },
        u = e => {
            const {
                componentCls: n
            } = e, t = `${n}-inner`;
            return {
                [n]: {
                    [t]: {
                        display: "block",
                        overflow: "hidden",
                        borderRadius: 100,
                        height: "100%",
                        paddingInlineStart: e.switchInnerMarginMax,
                        paddingInlineEnd: e.switchInnerMarginMin,
                        transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
                        [`${t}-checked, ${t}-unchecked`]: {
                            display: "block",
                            color: e.colorTextLightSolid,
                            fontSize: e.fontSizeSM,
                            transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
                            pointerEvents: "none"
                        },
                        [`${t}-checked`]: {
                            marginInlineStart: `calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`,
                            marginInlineEnd: `calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`
                        },
                        [`${t}-unchecked`]: {
                            marginTop: -e.switchHeight,
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`&${n}-checked ${t}`]: {
                        paddingInlineStart: e.switchInnerMarginMin,
                        paddingInlineEnd: e.switchInnerMarginMax,
                        [`${t}-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${t}-unchecked`]: {
                            marginInlineStart: `calc(100% - ${e.switchPinSize+2*e.switchPadding}px + ${2*e.switchInnerMarginMax}px)`,
                            marginInlineEnd: `calc(-100% + ${e.switchPinSize+2*e.switchPadding}px - ${2*e.switchInnerMarginMax}px)`
                        }
                    },
                    [`&:not(${n}-disabled):active`]: {
                        [`&:not(${n}-checked) ${t}`]: {
                            [`${t}-unchecked`]: {
                                marginInlineStart: 2 * e.switchPadding,
                                marginInlineEnd: 2 * -e.switchPadding
                            }
                        },
                        [`&${n}-checked ${t}`]: {
                            [`${t}-checked`]: {
                                marginInlineStart: 2 * -e.switchPadding,
                                marginInlineEnd: 2 * e.switchPadding
                            }
                        }
                    }
                }
            }
        },
        h = e => {
            const {
                componentCls: n
            } = e;
            return {
                [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0, c.resetComponent)(e)), {
                    position: "relative",
                    display: "inline-block",
                    boxSizing: "border-box",
                    minWidth: e.switchMinWidth,
                    height: e.switchHeight,
                    lineHeight: `${e.switchHeight}px`,
                    verticalAlign: "middle",
                    background: e.colorTextQuaternary,
                    border: "0",
                    borderRadius: 100,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationMid}`,
                    userSelect: "none",
                    [`&:hover:not(${n}-disabled)`]: {
                        background: e.colorTextTertiary
                    }
                }), (0, c.genFocusStyle)(e)), {
                    [`&${n}-checked`]: {
                        background: e.switchColor,
                        [`&:hover:not(${n}-disabled)`]: {
                            background: e.colorPrimaryHover
                        }
                    },
                    [`&${n}-loading, &${n}-disabled`]: {
                        cursor: "not-allowed",
                        opacity: e.switchDisabledOpacity,
                        "*": {
                            boxShadow: "none",
                            cursor: "not-allowed"
                        }
                    },
                    [`&${n}-rtl`]: {
                        direction: "rtl"
                    }
                })
            }
        };
    var f = (0, a.default)("Switch", (e => {
        const n = e.fontSize * e.lineHeight,
            t = e.controlHeight / 2,
            i = n - 4,
            a = t - 4,
            c = (0, o.merge)(e, {
                switchMinWidth: 2 * i + 8,
                switchHeight: n,
                switchDuration: e.motionDurationMid,
                switchColor: e.colorPrimary,
                switchDisabledOpacity: e.opacityLoading,
                switchInnerMarginMin: i / 2,
                switchInnerMarginMax: i + 2 + 4,
                switchPadding: 2,
                switchPinSize: i,
                switchBg: e.colorBgContainer,
                switchMinWidthSM: 2 * a + 4,
                switchHeightSM: t,
                switchInnerMarginMinSM: a / 2,
                switchInnerMarginMaxSM: a + 2 + 4,
                switchPinSizeSM: a,
                switchHandleShadow: `0 2px 4px 0 ${new(0,r.TinyColor)("#00230b").setAlpha(.2).toRgbString()}`,
                switchLoadingIconSize: .75 * e.fontSizeIcon,
                switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
                switchHandleActiveInset: "-30%"
            });
        return [h(c), u(c), d(c), l(c), s(c)]
    }))
}));