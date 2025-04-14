function e(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("4I2uy", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = o("dtIp3"),
        a = o("eFQZy");
    const i = r.default;
    i.Group = a.default, i.__ANT_CHECKBOX = !0;
    var l = i
})), o.register("dtIp3", (function(n, r) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = o("fe1on"),
        i = o("5AR3F"),
        l = o("fywoC"),
        s = o("4gMdJ"),
        c = o("jIMUD"),
        d = o("eFQZy"),
        u = o("cmARv"),
        p = o("m9O7S"),
        f = function(e, t) {
            var o = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
            }
            return o
        };
    const b = (e, o) => {
        var n, {
                prefixCls: r,
                className: b,
                rootClassName: m,
                children: g,
                indeterminate: h = !1,
                style: v,
                onMouseEnter: y,
                onMouseLeave: C,
                skipGroup: $ = !1,
                disabled: x
            } = e,
            O = f(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
        const {
            getPrefixCls: k,
            direction: S
        } = l.useContext(s.ConfigContext), w = l.useContext(d.GroupContext), {
            isFormItemInput: I
        } = l.useContext(c.FormItemInputContext), j = l.useContext(u.default), E = null !== (n = (null == w ? void 0 : w.disabled) || x) && void 0 !== n ? n : j, P = l.useRef(O.value);
        l.useEffect((() => {
            null == w || w.registerValue(O.value)
        }), []), l.useEffect((() => {
            if (!$) return O.value !== P.current && (null == w || w.cancelValue(P.current), null == w || w.registerValue(O.value), P.current = O.value), () => null == w ? void 0 : w.cancelValue(O.value)
        }), [O.value]);
        const M = k("checkbox", r),
            [N, D] = (0, p.default)(M),
            F = Object.assign({}, O);
        w && !$ && (F.onChange = function() {
            O.onChange && O.onChange.apply(O, arguments), w.toggleOption && w.toggleOption({
                label: g,
                value: O.value
            })
        }, F.name = w.name, F.checked = w.value.includes(O.value));
        const z = t(a)({
                [`${M}-wrapper`]: !0,
                [`${M}-rtl`]: "rtl" === S,
                [`${M}-wrapper-checked`]: F.checked,
                [`${M}-wrapper-disabled`]: E,
                [`${M}-wrapper-in-form-item`]: I
            }, b, m, D),
            R = t(a)({
                [`${M}-indeterminate`]: h
            }, D),
            T = h ? "mixed" : void 0;
        return N(l.createElement("label", {
            className: z,
            style: v,
            onMouseEnter: y,
            onMouseLeave: C
        }, l.createElement(i.default, Object.assign({
            "aria-checked": T
        }, F, {
            prefixCls: M,
            className: R,
            disabled: E,
            ref: o
        })), void 0 !== g && l.createElement("span", null, g)))
    };
    var m = l.forwardRef(b)
})), o.register("eFQZy", (function(n, r) {
    e(n.exports, "GroupContext", (function() {
        return f
    }), (function(e) {
        return f = e
    })), e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var a = o("5Toxq"),
        i = o("fe1on"),
        l = o("8mdco"),
        s = o("fywoC"),
        c = o("4gMdJ"),
        d = o("dtIp3"),
        u = o("m9O7S"),
        p = function(e, t) {
            var o = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
            }
            return o
        };
    const f = s.createContext(null),
        b = (e, o) => {
            var {
                defaultValue: n,
                children: r,
                options: b = [],
                prefixCls: m,
                className: g,
                rootClassName: h,
                style: v,
                onChange: y
            } = e, C = p(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
            const {
                getPrefixCls: $,
                direction: x
            } = s.useContext(c.ConfigContext), [O, k] = s.useState(C.value || n || []), [S, w] = s.useState([]);
            s.useEffect((() => {
                "value" in C && k(C.value || [])
            }), [C.value]);
            const I = () => b.map((e => "string" == typeof e || "number" == typeof e ? {
                    label: e,
                    value: e
                } : e)),
                j = $("checkbox", m),
                E = `${j}-group`,
                [P, M] = (0, u.default)(j),
                N = (0, l.default)(C, ["value", "disabled"]);
            b && b.length > 0 && (r = I().map((e => s.createElement(d.default, {
                prefixCls: j,
                key: e.value.toString(),
                disabled: "disabled" in e ? e.disabled : C.disabled,
                value: e.value,
                checked: O.includes(e.value),
                onChange: e.onChange,
                className: `${E}-item`,
                style: e.style
            }, e.label))));
            const D = {
                    toggleOption: e => {
                        const t = O.indexOf(e.value),
                            o = (0, a.default)(O); - 1 === t ? o.push(e.value) : o.splice(t, 1), "value" in C || k(o);
                        const n = I();
                        null == y || y(o.filter((e => S.includes(e))).sort(((e, t) => n.findIndex((t => t.value === e)) - n.findIndex((e => e.value === t)))))
                    },
                    value: O,
                    disabled: C.disabled,
                    name: C.name,
                    registerValue: e => {
                        w((t => [].concat((0, a.default)(t), [e])))
                    },
                    cancelValue: e => {
                        w((t => t.filter((t => t !== e))))
                    }
                },
                F = t(i)(E, {
                    [`${E}-rtl`]: "rtl" === x
                }, g, h, M);
            return P(s.createElement("div", Object.assign({
                className: F,
                style: v
            }, N, {
                ref: o
            }), s.createElement(f.Provider, {
                value: D
            }, r)))
        },
        m = s.forwardRef(b);
    var g = s.memo(m)
})), o.register("m9O7S", (function(t, n) {
    e(t.exports, "getStyle", (function() {
        return d
    })), e(t.exports, "default", (function() {
        return u
    }));
    var r = o("lt5sb"),
        a = o("huF4L"),
        i = o("1QMe3"),
        l = o("kCC5O");
    const s = new(0, r.Keyframes)("antCheckboxEffect", {
            "0%": {
                transform: "scale(1)",
                opacity: .5
            },
            "100%": {
                transform: "scale(1.6)",
                opacity: 0
            }
        }),
        c = e => {
            const {
                checkboxCls: t
            } = e, o = `${t}-wrapper`;
            return [{
                [`${t}-group`]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-flex"
                }),
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    "&:after": {
                        display: "inline-block",
                        width: 0,
                        overflow: "hidden",
                        content: "'\\a0'"
                    },
                    [`& + ${o}`]: {
                        marginInlineStart: e.marginXS
                    },
                    [`&${o}-in-form-item`]: {
                        'input[type="checkbox"]': {
                            width: 14,
                            height: 14
                        }
                    }
                }),
                [t]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    top: "0.2em",
                    position: "relative",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    cursor: "pointer",
                    [`${t}-input`]: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        opacity: 0,
                        [`&:focus-visible + ${t}-inner`]: Object.assign({}, (0, l.genFocusOutline)(e))
                    },
                    [`${t}-inner`]: {
                        boxSizing: "border-box",
                        position: "relative",
                        top: 0,
                        insetInlineStart: 0,
                        display: "block",
                        width: e.checkboxSize,
                        height: e.checkboxSize,
                        direction: "ltr",
                        backgroundColor: e.colorBgContainer,
                        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusSM,
                        borderCollapse: "separate",
                        transition: `all ${e.motionDurationSlow}`,
                        "&:after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            top: "50%",
                            insetInlineStart: "21.5%",
                            display: "table",
                            width: e.checkboxSize / 14 * 5,
                            height: e.checkboxSize / 14 * 8,
                            border: `${e.lineWidthBold}px solid ${e.colorWhite}`,
                            borderTop: 0,
                            borderInlineStart: 0,
                            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                            opacity: 0,
                            content: '""',
                            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                        }
                    },
                    "& + span": {
                        paddingInlineStart: e.paddingXS,
                        paddingInlineEnd: e.paddingXS
                    }
                })
            }, {
                [t]: {
                    "&-indeterminate": {
                        [`${t}-inner`]: {
                            "&:after": {
                                top: "50%",
                                insetInlineStart: "50%",
                                width: e.fontSizeLG / 2,
                                height: e.fontSizeLG / 2,
                                backgroundColor: e.colorPrimary,
                                border: 0,
                                transform: "translate(-50%, -50%) scale(1)",
                                opacity: 1,
                                content: '""'
                            }
                        }
                    }
                }
            }, {
                [`${o}:hover ${t}:after`]: {
                    visibility: "visible"
                },
                [`\n        ${o}:not(${o}-disabled),\n        ${t}:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        borderColor: e.colorPrimary
                    }
                },
                [`${o}:not(${o}-disabled)`]: {
                    [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${t}-checked`]: {
                    [`${t}-inner`]: {
                        backgroundColor: e.colorPrimary,
                        borderColor: e.colorPrimary,
                        "&:after": {
                            opacity: 1,
                            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                        }
                    },
                    "&:after": {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: e.borderRadiusSM,
                        visibility: "hidden",
                        border: `${e.lineWidthBold}px solid ${e.colorPrimary}`,
                        animationName: s,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: "ease-in-out",
                        animationFillMode: "backwards",
                        content: '""',
                        transition: `all ${e.motionDurationSlow}`
                    }
                },
                [`\n        ${o}-checked:not(${o}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}:after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${o}-disabled`]: {
                    cursor: "not-allowed"
                },
                [`${t}-disabled`]: {
                    [`&, ${t}-input`]: {
                        cursor: "not-allowed",
                        pointerEvents: "none"
                    },
                    [`${t}-inner`]: {
                        background: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        "&:after": {
                            borderColor: e.colorTextDisabled
                        }
                    },
                    "&:after": {
                        display: "none"
                    },
                    "& + span": {
                        color: e.colorTextDisabled
                    },
                    [`&${t}-indeterminate ${t}-inner::after`]: {
                        background: e.colorTextDisabled
                    }
                }
            }]
        };

    function d(e, t) {
        const o = (0, i.merge)(t, {
            checkboxCls: `.${e}`,
            checkboxSize: t.controlInteractiveSize
        });
        return [c(o)]
    }
    var u = (0, a.default)("Checkbox", ((e, t) => {
        let {
            prefixCls: o
        } = t;
        return [d(o, e)]
    }))
}));