function o(o, e, r, t) {
    Object.defineProperty(o, e, {
        get: r,
        set: t,
        enumerable: !0,
        configurable: !0
    })
}

function e(o) {
    return o && o.__esModule ? o.default : o
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("f1yKZ", (function(e, t) {
    o(e.exports, "default", (function() {
        return d
    }));
    var n = r("cZxaK"),
        i = r("59VTw"),
        a = r("dOhjT");
    const l = i.default;
    l.Button = a.default, l.Group = n.default, l.__ANT_RADIO = !0;
    var d = l
})), r.register("cZxaK", (function(t, n) {
    o(t.exports, "default", (function() {
        return g
    }));
    var i = r("fe1on"),
        a = r("iI4DW"),
        l = r("fywoC"),
        d = r("4gMdJ"),
        s = r("3Ocec"),
        c = r("jiZrK"),
        u = r("aqg3x"),
        b = r("59VTw"),
        p = r("2Lvty");
    const f = l.forwardRef(((o, r) => {
        const {
            getPrefixCls: t,
            direction: n
        } = l.useContext(d.ConfigContext), f = l.useContext(s.default), [g, h] = (0, a.default)(o.defaultValue, {
            value: o.value
        }), {
            prefixCls: C,
            className: v,
            rootClassName: m,
            options: x,
            buttonStyle: y = "outline",
            disabled: S,
            children: $,
            size: k,
            style: w,
            id: B,
            onMouseEnter: O,
            onMouseLeave: R,
            onFocus: I,
            onBlur: E
        } = o, D = t("radio", C), j = `${D}-group`, [T, z] = (0, p.default)(D);
        let M = $;
        x && x.length > 0 && (M = x.map((o => "string" == typeof o || "number" == typeof o ? l.createElement(b.default, {
            key: o.toString(),
            prefixCls: D,
            disabled: S,
            value: o,
            checked: g === o
        }, o) : l.createElement(b.default, {
            key: `radio-group-value-options-${o.value}`,
            prefixCls: D,
            disabled: o.disabled || S,
            value: o.value,
            checked: g === o.value,
            style: o.style
        }, o.label))));
        const P = k || f,
            L = e(i)(j, `${j}-${y}`, {
                [`${j}-${P}`]: P,
                [`${j}-rtl`]: "rtl" === n
            }, v, m, z);
        return T(l.createElement("div", Object.assign({}, (0, c.default)(o), {
            className: L,
            style: w,
            onMouseEnter: O,
            onMouseLeave: R,
            onFocus: I,
            onBlur: E,
            id: B,
            ref: r
        }), l.createElement(u.RadioGroupContextProvider, {
            value: {
                onChange: e => {
                    const r = g,
                        t = e.target.value;
                    "value" in o || h(t);
                    const {
                        onChange: n
                    } = o;
                    n && t !== r && n(e)
                },
                value: g,
                disabled: o.disabled,
                name: o.name,
                optionType: o.optionType
            }
        }, M)))
    }));
    var g = l.memo(f)
})), r.register("aqg3x", (function(e, t) {
    o(e.exports, "RadioGroupContextProvider", (function() {
        return a
    })), o(e.exports, "default", (function() {
        return l
    })), o(e.exports, "RadioOptionTypeContext", (function() {
        return d
    })), o(e.exports, "RadioOptionTypeContextProvider", (function() {
        return s
    }));
    var n = r("fywoC");
    const i = n.createContext(null),
        a = i.Provider;
    var l = i;
    const d = n.createContext(null),
        s = d.Provider
})), r.register("59VTw", (function(t, n) {
    o(t.exports, "default", (function() {
        return h
    }), (function(o) {
        return h = o
    }));
    var i = r("fe1on"),
        a = r("5AR3F"),
        l = r("fk9zJ"),
        d = r("fywoC"),
        s = r("4gMdJ"),
        c = r("cmARv"),
        u = r("jIMUD"),
        b = r("aqg3x"),
        p = r("2Lvty"),
        f = function(o, e) {
            var r = {};
            for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
            if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (t = Object.getOwnPropertySymbols(o); n < t.length; n++) e.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(o, t[n]) && (r[t[n]] = o[t[n]])
            }
            return r
        };
    const g = (o, r) => {
        var t, n;
        const g = d.useContext(b.default),
            h = d.useContext(b.RadioOptionTypeContext),
            {
                getPrefixCls: C,
                direction: v
            } = d.useContext(s.ConfigContext),
            m = d.useRef(),
            x = (0, l.composeRef)(r, m),
            {
                isFormItemInput: y
            } = d.useContext(u.FormItemInputContext),
            S = e => {
                var r, t;
                null === (r = o.onChange) || void 0 === r || r.call(o, e), null === (t = null == g ? void 0 : g.onChange) || void 0 === t || t.call(g, e)
            },
            {
                prefixCls: $,
                className: k,
                rootClassName: w,
                children: B,
                style: O
            } = o,
            R = f(o, ["prefixCls", "className", "rootClassName", "children", "style"]),
            I = C("radio", $),
            E = "button" === ((null == g ? void 0 : g.optionType) || h) ? `${I}-button` : I,
            [D, j] = (0, p.default)(I),
            T = Object.assign({}, R),
            z = d.useContext(c.default);
        g && (T.name = g.name, T.onChange = S, T.checked = o.value === g.value, T.disabled = null !== (t = T.disabled) && void 0 !== t ? t : g.disabled), T.disabled = null !== (n = T.disabled) && void 0 !== n ? n : z;
        const M = e(i)(`${E}-wrapper`, {
            [`${E}-wrapper-checked`]: T.checked,
            [`${E}-wrapper-disabled`]: T.disabled,
            [`${E}-wrapper-rtl`]: "rtl" === v,
            [`${E}-wrapper-in-form-item`]: y
        }, k, w, j);
        return D(d.createElement("label", {
            className: M,
            style: O,
            onMouseEnter: o.onMouseEnter,
            onMouseLeave: o.onMouseLeave
        }, d.createElement(a.default, Object.assign({}, T, {
            type: "radio",
            prefixCls: E,
            ref: x
        })), void 0 !== B ? d.createElement("span", null, B) : null))
    };
    var h = d.forwardRef(g)
})), r.register("2Lvty", (function(e, t) {
    o(e.exports, "default", (function() {
        return b
    }));
    var n = r("lt5sb"),
        i = r("huF4L"),
        a = r("1QMe3"),
        l = r("kCC5O");
    const d = new(0, n.Keyframes)("antRadioEffect", {
            "0%": {
                transform: "scale(1)",
                opacity: .5
            },
            "100%": {
                transform: "scale(1.6)",
                opacity: 0
            }
        }),
        s = o => {
            const {
                componentCls: e,
                antCls: r
            } = o, t = `${e}-group`;
            return {
                [t]: Object.assign(Object.assign({}, (0, l.resetComponent)(o)), {
                    display: "inline-block",
                    fontSize: 0,
                    [`&${t}-rtl`]: {
                        direction: "rtl"
                    },
                    [`${r}-badge ${r}-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]: {
                        borderInlineStart: "none"
                    }
                })
            }
        },
        c = o => {
            const {
                componentCls: e,
                radioWrapperMarginRight: r,
                radioCheckedColor: t,
                radioSize: n,
                motionDurationSlow: i,
                motionDurationMid: a,
                motionEaseInOut: s,
                motionEaseInOutCirc: c,
                radioButtonBg: u,
                colorBorder: b,
                lineWidth: p,
                radioDotSize: f,
                colorBgContainerDisabled: g,
                colorTextDisabled: h,
                paddingXS: C,
                radioDotDisabledColor: v,
                lineType: m,
                radioDotDisabledSize: x,
                wireframe: y,
                colorWhite: S
            } = o, $ = `${e}-inner`;
            return {
                [`${e}-wrapper`]: Object.assign(Object.assign({}, (0, l.resetComponent)(o)), {
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "baseline",
                    marginInlineStart: 0,
                    marginInlineEnd: r,
                    cursor: "pointer",
                    [`&${e}-wrapper-rtl`]: {
                        direction: "rtl"
                    },
                    "&-disabled": {
                        cursor: "not-allowed",
                        color: o.colorTextDisabled
                    },
                    "&::after": {
                        display: "inline-block",
                        width: 0,
                        overflow: "hidden",
                        content: '"\\a0"'
                    },
                    [`${e}-checked::after`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        border: `${p}px ${m} ${t}`,
                        borderRadius: "50%",
                        visibility: "hidden",
                        animationName: d,
                        animationDuration: i,
                        animationTimingFunction: s,
                        animationFillMode: "both",
                        content: '""'
                    },
                    [e]: Object.assign(Object.assign({}, (0, l.resetComponent)(o)), {
                        position: "relative",
                        display: "inline-block",
                        outline: "none",
                        cursor: "pointer",
                        alignSelf: "center"
                    }),
                    [`${e}-wrapper:hover &,\n        &:hover ${$}`]: {
                        borderColor: t
                    },
                    [`${e}-input:focus-visible + ${$}`]: Object.assign({}, (0, l.genFocusOutline)(o)),
                    [`${e}:hover::after, ${e}-wrapper:hover &::after`]: {
                        visibility: "visible"
                    },
                    [`${e}-inner`]: {
                        "&::after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            insetBlockStart: "50%",
                            insetInlineStart: "50%",
                            display: "block",
                            width: n,
                            height: n,
                            marginBlockStart: n / -2,
                            marginInlineStart: n / -2,
                            backgroundColor: y ? t : S,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: n,
                            transform: "scale(0)",
                            opacity: 0,
                            transition: `all ${i} ${c}`,
                            content: '""'
                        },
                        boxSizing: "border-box",
                        position: "relative",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: "block",
                        width: n,
                        height: n,
                        backgroundColor: u,
                        borderColor: b,
                        borderStyle: "solid",
                        borderWidth: p,
                        borderRadius: "50%",
                        transition: `all ${a}`
                    },
                    [`${e}-input`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: "pointer",
                        opacity: 0
                    },
                    [`${e}-checked`]: {
                        [$]: {
                            borderColor: t,
                            backgroundColor: y ? u : t,
                            "&::after": {
                                transform: `scale(${f/n})`,
                                opacity: 1,
                                transition: `all ${i} ${c}`
                            }
                        }
                    },
                    [`${e}-disabled`]: {
                        cursor: "not-allowed",
                        [$]: {
                            backgroundColor: g,
                            borderColor: b,
                            cursor: "not-allowed",
                            "&::after": {
                                backgroundColor: v
                            }
                        },
                        [`${e}-input`]: {
                            cursor: "not-allowed"
                        },
                        [`${e}-disabled + span`]: {
                            color: h,
                            cursor: "not-allowed"
                        },
                        [`&${e}-checked`]: {
                            [$]: {
                                "&::after": {
                                    transform: `scale(${x/n})`
                                }
                            }
                        }
                    },
                    [`span${e} + *`]: {
                        paddingInlineStart: C,
                        paddingInlineEnd: C
                    }
                })
            }
        },
        u = o => {
            const {
                radioButtonColor: e,
                controlHeight: r,
                componentCls: t,
                lineWidth: n,
                lineType: i,
                colorBorder: a,
                motionDurationSlow: d,
                motionDurationMid: s,
                radioButtonPaddingHorizontal: c,
                fontSize: u,
                radioButtonBg: b,
                fontSizeLG: p,
                controlHeightLG: f,
                controlHeightSM: g,
                paddingXS: h,
                borderRadius: C,
                borderRadiusSM: v,
                borderRadiusLG: m,
                radioCheckedColor: x,
                radioButtonCheckedBg: y,
                radioButtonHoverColor: S,
                radioButtonActiveColor: $,
                radioSolidCheckedColor: k,
                colorTextDisabled: w,
                colorBgContainerDisabled: B,
                radioDisabledButtonCheckedColor: O,
                radioDisabledButtonCheckedBg: R
            } = o;
            return {
                [`${t}-button-wrapper`]: {
                    position: "relative",
                    display: "inline-block",
                    height: r,
                    margin: 0,
                    paddingInline: c,
                    paddingBlock: 0,
                    color: e,
                    fontSize: u,
                    lineHeight: r - 2 * n + "px",
                    background: b,
                    border: `${n}px ${i} ${a}`,
                    borderBlockStartWidth: n + .02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: n,
                    cursor: "pointer",
                    transition: [`color ${s}`, `background ${s}`, `border-color ${s}`, `box-shadow ${s}`].join(","),
                    a: {
                        color: e
                    },
                    [`> ${t}-button`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        zIndex: -1,
                        width: "100%",
                        height: "100%"
                    },
                    "&:not(:first-child)": {
                        "&::before": {
                            position: "absolute",
                            insetBlockStart: -n,
                            insetInlineStart: -n,
                            display: "block",
                            boxSizing: "content-box",
                            width: 1,
                            height: "100%",
                            paddingBlock: n,
                            paddingInline: 0,
                            backgroundColor: a,
                            transition: `background-color ${d}`,
                            content: '""'
                        }
                    },
                    "&:first-child": {
                        borderInlineStart: `${n}px ${i} ${a}`,
                        borderStartStartRadius: C,
                        borderEndStartRadius: C
                    },
                    "&:last-child": {
                        borderStartEndRadius: C,
                        borderEndEndRadius: C
                    },
                    "&:first-child:last-child": {
                        borderRadius: C
                    },
                    [`${t}-group-large &`]: {
                        height: f,
                        fontSize: p,
                        lineHeight: f - 2 * n + "px",
                        "&:first-child": {
                            borderStartStartRadius: m,
                            borderEndStartRadius: m
                        },
                        "&:last-child": {
                            borderStartEndRadius: m,
                            borderEndEndRadius: m
                        }
                    },
                    [`${t}-group-small &`]: {
                        height: g,
                        paddingInline: h - n,
                        paddingBlock: 0,
                        lineHeight: g - 2 * n + "px",
                        "&:first-child": {
                            borderStartStartRadius: v,
                            borderEndStartRadius: v
                        },
                        "&:last-child": {
                            borderStartEndRadius: v,
                            borderEndEndRadius: v
                        }
                    },
                    "&:hover": {
                        position: "relative",
                        color: x
                    },
                    "&:has(:focus-visible)": Object.assign({}, (0, l.genFocusOutline)(o)),
                    [`${t}-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    [`&-checked:not(${t}-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: x,
                        background: y,
                        borderColor: x,
                        "&::before": {
                            backgroundColor: x
                        },
                        "&:first-child": {
                            borderColor: x
                        },
                        "&:hover": {
                            color: S,
                            borderColor: S,
                            "&::before": {
                                backgroundColor: S
                            }
                        },
                        "&:active": {
                            color: $,
                            borderColor: $,
                            "&::before": {
                                backgroundColor: $
                            }
                        }
                    },
                    [`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]: {
                        color: k,
                        background: x,
                        borderColor: x,
                        "&:hover": {
                            color: k,
                            background: S,
                            borderColor: S
                        },
                        "&:active": {
                            color: k,
                            background: $,
                            borderColor: $
                        }
                    },
                    "&-disabled": {
                        color: w,
                        backgroundColor: B,
                        borderColor: a,
                        cursor: "not-allowed",
                        "&:first-child, &:hover": {
                            color: w,
                            backgroundColor: B,
                            borderColor: a
                        }
                    },
                    [`&-disabled${t}-button-wrapper-checked`]: {
                        color: O,
                        backgroundColor: R,
                        borderColor: a,
                        boxShadow: "none"
                    }
                }
            }
        };
    var b = (0, i.default)("Radio", (o => {
        const {
            padding: e,
            lineWidth: r,
            controlItemBgActiveDisabled: t,
            colorTextDisabled: n,
            colorBgContainer: i,
            fontSizeLG: l,
            controlOutline: d,
            colorPrimaryHover: b,
            colorPrimaryActive: p,
            colorText: f,
            colorPrimary: g,
            marginXS: h,
            controlOutlineWidth: C,
            colorTextLightSolid: v,
            wireframe: m
        } = o, x = `0 0 0 ${C}px ${d}`, y = x, S = l, $ = S - 8, k = m ? $ : S - 2 * (4 + r), w = g, B = f, O = b, R = p, I = e - r, E = n, D = h, j = (0, a.merge)(o, {
            radioFocusShadow: x,
            radioButtonFocusShadow: y,
            radioSize: S,
            radioDotSize: k,
            radioDotDisabledSize: $,
            radioCheckedColor: w,
            radioDotDisabledColor: n,
            radioSolidCheckedColor: v,
            radioButtonBg: i,
            radioButtonCheckedBg: i,
            radioButtonColor: B,
            radioButtonHoverColor: O,
            radioButtonActiveColor: R,
            radioButtonPaddingHorizontal: I,
            radioDisabledButtonCheckedBg: t,
            radioDisabledButtonCheckedColor: E,
            radioWrapperMarginRight: D
        });
        return [s(j), c(j), u(j)]
    }))
})), r.register("dOhjT", (function(e, t) {
    o(e.exports, "default", (function() {
        return c
    }), (function(o) {
        return c = o
    }));
    var n = r("fywoC"),
        i = r("4gMdJ"),
        a = r("aqg3x"),
        l = r("59VTw"),
        d = function(o, e) {
            var r = {};
            for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
            if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (t = Object.getOwnPropertySymbols(o); n < t.length; n++) e.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(o, t[n]) && (r[t[n]] = o[t[n]])
            }
            return r
        };
    const s = (o, e) => {
        const {
            getPrefixCls: r
        } = n.useContext(i.ConfigContext), {
            prefixCls: t
        } = o, s = d(o, ["prefixCls"]), c = r("radio", t);
        return n.createElement(a.RadioOptionTypeContextProvider, {
            value: "button"
        }, n.createElement(l.default, Object.assign({
            prefixCls: c
        }, s, {
            type: "radio",
            ref: e
        })))
    };
    var c = n.forwardRef(s)
}));