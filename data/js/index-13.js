import {
    r as i,
    ai as oe,
    aj as te,
    ak as z,
    aQ as _,
    b7 as F,
    al as L,
    cV as re,
    bW as X,
    bH as Q,
    bV as ne,
    am as H,
    d3 as ie,
    d9 as ae,
    da as le,
    b6 as de,
    bb as se,
    aP as ce
} from "./_index.js";
import {
    u as ue,
    C as be
} from "./useBubbleLock.js";
import {
    t as ge
} from "./useForm.js";
const J = i.createContext(null),
    pe = J.Provider,
    K = i.createContext(null),
    Ce = K.Provider,
    he = t => {
        const {
            componentCls: r,
            antCls: n
        } = t, o = `${r}-group`;
        return {
            [o]: Object.assign(Object.assign({}, _(t)), {
                display: "inline-block",
                fontSize: 0,
                [`&${o}-rtl`]: {
                    direction: "rtl"
                },
                [`&${o}-block`]: {
                    display: "flex"
                },
                [`${n}-badge ${n}-badge-count`]: {
                    zIndex: 1
                },
                [`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]: {
                    borderInlineStart: "none"
                }
            })
        }
    },
    fe = t => {
        const {
            componentCls: r,
            wrapperMarginInlineEnd: n,
            colorPrimary: o,
            radioSize: e,
            motionDurationSlow: s,
            motionDurationMid: p,
            motionEaseInOutCirc: m,
            colorBgContainer: c,
            colorBorder: S,
            lineWidth: x,
            colorBgContainerDisabled: C,
            colorTextDisabled: E,
            paddingXS: $,
            dotColorDisabled: w,
            lineType: R,
            radioColor: u,
            radioBgColor: h,
            calc: b
        } = t, y = `${r}-inner`, v = b(e).sub(b(4).mul(2)), l = b(1).mul(e).equal({
            unit: !0
        });
        return {
            [`${r}-wrapper`]: Object.assign(Object.assign({}, _(t)), {
                display: "inline-flex",
                alignItems: "baseline",
                marginInlineStart: 0,
                marginInlineEnd: n,
                cursor: "pointer",
                "&:last-child": {
                    marginInlineEnd: 0
                },
                [`&${r}-wrapper-rtl`]: {
                    direction: "rtl"
                },
                "&-disabled": {
                    cursor: "not-allowed",
                    color: t.colorTextDisabled
                },
                "&::after": {
                    display: "inline-block",
                    width: 0,
                    overflow: "hidden",
                    content: '"\\a0"'
                },
                "&-block": {
                    flex: 1,
                    justifyContent: "center"
                },
                [`${r}-checked::after`]: {
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    width: "100%",
                    height: "100%",
                    border: `${z(x)} ${R} ${o}`,
                    borderRadius: "50%",
                    visibility: "hidden",
                    opacity: 0,
                    content: '""'
                },
                [r]: Object.assign(Object.assign({}, _(t)), {
                    position: "relative",
                    display: "inline-block",
                    outline: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                    borderRadius: "50%"
                }),
                [`${r}-wrapper:hover &,
        &:hover ${y}`]: {
                    borderColor: o
                },
                [`${r}-input:focus-visible + ${y}`]: F(t),
                [`${r}:hover::after, ${r}-wrapper:hover &::after`]: {
                    visibility: "visible"
                },
                [`${r}-inner`]: {
                    "&::after": {
                        boxSizing: "border-box",
                        position: "absolute",
                        insetBlockStart: "50%",
                        insetInlineStart: "50%",
                        display: "block",
                        width: l,
                        height: l,
                        marginBlockStart: b(1).mul(e).div(-2).equal({
                            unit: !0
                        }),
                        marginInlineStart: b(1).mul(e).div(-2).equal({
                            unit: !0
                        }),
                        backgroundColor: u,
                        borderBlockStart: 0,
                        borderInlineStart: 0,
                        borderRadius: l,
                        transform: "scale(0)",
                        opacity: 0,
                        transition: `all ${s} ${m}`,
                        content: '""'
                    },
                    boxSizing: "border-box",
                    position: "relative",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    display: "block",
                    width: l,
                    height: l,
                    backgroundColor: c,
                    borderColor: S,
                    borderStyle: "solid",
                    borderWidth: x,
                    borderRadius: "50%",
                    transition: `all ${p}`
                },
                [`${r}-input`]: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    cursor: "pointer",
                    opacity: 0
                },
                [`${r}-checked`]: {
                    [y]: {
                        borderColor: o,
                        backgroundColor: h,
                        "&::after": {
                            transform: `scale(${t.calc(t.dotSize).div(e).equal()})`,
                            opacity: 1,
                            transition: `all ${s} ${m}`
                        }
                    }
                },
                [`${r}-disabled`]: {
                    cursor: "not-allowed",
                    [y]: {
                        backgroundColor: C,
                        borderColor: S,
                        cursor: "not-allowed",
                        "&::after": {
                            backgroundColor: w
                        }
                    },
                    [`${r}-input`]: {
                        cursor: "not-allowed"
                    },
                    [`${r}-disabled + span`]: {
                        color: E,
                        cursor: "not-allowed"
                    },
                    [`&${r}-checked`]: {
                        [y]: {
                            "&::after": {
                                transform: `scale(${b(v).div(e).equal()})`
                            }
                        }
                    }
                },
                [`span${r} + *`]: {
                    paddingInlineStart: $,
                    paddingInlineEnd: $
                }
            })
        }
    },
    me = t => {
        const {
            buttonColor: r,
            controlHeight: n,
            componentCls: o,
            lineWidth: e,
            lineType: s,
            colorBorder: p,
            motionDurationSlow: m,
            motionDurationMid: c,
            buttonPaddingInline: S,
            fontSize: x,
            buttonBg: C,
            fontSizeLG: E,
            controlHeightLG: $,
            controlHeightSM: w,
            paddingXS: R,
            borderRadius: u,
            borderRadiusSM: h,
            borderRadiusLG: b,
            buttonCheckedBg: y,
            buttonSolidCheckedColor: f,
            colorTextDisabled: v,
            colorBgContainerDisabled: l,
            buttonCheckedBgDisabled: j,
            buttonCheckedColorDisabled: D,
            colorPrimary: O,
            colorPrimaryHover: k,
            colorPrimaryActive: a,
            buttonSolidCheckedBg: P,
            buttonSolidCheckedHoverBg: I,
            buttonSolidCheckedActiveBg: B,
            calc: g
        } = t;
        return {
            [`${o}-button-wrapper`]: {
                position: "relative",
                display: "inline-block",
                height: n,
                margin: 0,
                paddingInline: S,
                paddingBlock: 0,
                color: r,
                fontSize: x,
                lineHeight: z(g(n).sub(g(e).mul(2)).equal()),
                background: C,
                border: `${z(e)} ${s} ${p}`,
                borderBlockStartWidth: g(e).add(.02).equal(),
                borderInlineStartWidth: 0,
                borderInlineEndWidth: e,
                cursor: "pointer",
                transition: [`color ${c}`, `background ${c}`, `box-shadow ${c}`].join(","),
                a: {
                    color: r
                },
                [`> ${o}-button`]: {
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
                        insetBlockStart: g(e).mul(-1).equal(),
                        insetInlineStart: g(e).mul(-1).equal(),
                        display: "block",
                        boxSizing: "content-box",
                        width: 1,
                        height: "100%",
                        paddingBlock: e,
                        paddingInline: 0,
                        backgroundColor: p,
                        transition: `background-color ${m}`,
                        content: '""'
                    }
                },
                "&:first-child": {
                    borderInlineStart: `${z(e)} ${s} ${p}`,
                    borderStartStartRadius: u,
                    borderEndStartRadius: u
                },
                "&:last-child": {
                    borderStartEndRadius: u,
                    borderEndEndRadius: u
                },
                "&:first-child:last-child": {
                    borderRadius: u
                },
                [`${o}-group-large &`]: {
                    height: $,
                    fontSize: E,
                    lineHeight: z(g($).sub(g(e).mul(2)).equal()),
                    "&:first-child": {
                        borderStartStartRadius: b,
                        borderEndStartRadius: b
                    },
                    "&:last-child": {
                        borderStartEndRadius: b,
                        borderEndEndRadius: b
                    }
                },
                [`${o}-group-small &`]: {
                    height: w,
                    paddingInline: g(R).sub(e).equal(),
                    paddingBlock: 0,
                    lineHeight: z(g(w).sub(g(e).mul(2)).equal()),
                    "&:first-child": {
                        borderStartStartRadius: h,
                        borderEndStartRadius: h
                    },
                    "&:last-child": {
                        borderStartEndRadius: h,
                        borderEndEndRadius: h
                    }
                },
                "&:hover": {
                    position: "relative",
                    color: O
                },
                "&:has(:focus-visible)": F(t),
                [`${o}-inner, input[type='checkbox'], input[type='radio']`]: {
                    width: 0,
                    height: 0,
                    opacity: 0,
                    pointerEvents: "none"
                },
                [`&-checked:not(${o}-button-wrapper-disabled)`]: {
                    zIndex: 1,
                    color: O,
                    background: y,
                    borderColor: O,
                    "&::before": {
                        backgroundColor: O
                    },
                    "&:first-child": {
                        borderColor: O
                    },
                    "&:hover": {
                        color: k,
                        borderColor: k,
                        "&::before": {
                            backgroundColor: k
                        }
                    },
                    "&:active": {
                        color: a,
                        borderColor: a,
                        "&::before": {
                            backgroundColor: a
                        }
                    }
                },
                [`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]: {
                    color: f,
                    background: P,
                    borderColor: P,
                    "&:hover": {
                        color: f,
                        background: I,
                        borderColor: I
                    },
                    "&:active": {
                        color: f,
                        background: B,
                        borderColor: B
                    }
                },
                "&-disabled": {
                    color: v,
                    backgroundColor: l,
                    borderColor: p,
                    cursor: "not-allowed",
                    "&:first-child, &:hover": {
                        color: v,
                        backgroundColor: l,
                        borderColor: p
                    }
                },
                [`&-disabled${o}-button-wrapper-checked`]: {
                    color: D,
                    backgroundColor: j,
                    borderColor: p,
                    boxShadow: "none"
                },
                "&-block": {
                    flex: 1,
                    textAlign: "center"
                }
            }
        }
    },
    Se = t => {
        const {
            wireframe: r,
            padding: n,
            marginXS: o,
            lineWidth: e,
            fontSizeLG: s,
            colorText: p,
            colorBgContainer: m,
            colorTextDisabled: c,
            controlItemBgActiveDisabled: S,
            colorTextLightSolid: x,
            colorPrimary: C,
            colorPrimaryHover: E,
            colorPrimaryActive: $,
            colorWhite: w
        } = t, R = 4, u = s, h = r ? u - R * 2 : u - (R + e) * 2;
        return {
            radioSize: u,
            dotSize: h,
            dotColorDisabled: c,
            buttonSolidCheckedColor: x,
            buttonSolidCheckedBg: C,
            buttonSolidCheckedHoverBg: E,
            buttonSolidCheckedActiveBg: $,
            buttonBg: m,
            buttonCheckedBg: m,
            buttonColor: p,
            buttonCheckedBgDisabled: S,
            buttonCheckedColorDisabled: c,
            buttonPaddingInline: n - e,
            wrapperMarginInlineEnd: o,
            radioColor: r ? C : w,
            radioBgColor: r ? m : C
        }
    },
    U = oe("Radio", t => {
        const {
            controlOutline: r,
            controlOutlineWidth: n
        } = t, o = `0 0 0 ${z(n)} ${r}`, s = te(t, {
            radioFocusShadow: o,
            radioButtonFocusShadow: o
        });
        return [he(s), fe(s), me(s)]
    }, Se, {
        unitless: {
            radioSize: !0,
            dotSize: !0
        }
    });
var ve = function(t, r) {
    var n = {};
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (n[o] = t[o]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var e = 0, o = Object.getOwnPropertySymbols(t); e < o.length; e++) r.indexOf(o[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[e]) && (n[o[e]] = t[o[e]]);
    return n
};
const ke = (t, r) => {
        var n, o;
        const e = i.useContext(J),
            s = i.useContext(K),
            {
                getPrefixCls: p,
                direction: m,
                radio: c
            } = i.useContext(L),
            S = i.useRef(null),
            x = re(r, S),
            {
                isFormItemInput: C
            } = i.useContext(X),
            E = M => {
                var T, N;
                (T = t.onChange) === null || T === void 0 || T.call(t, M), (N = e == null ? void 0 : e.onChange) === null || N === void 0 || N.call(e, M)
            },
            {
                prefixCls: $,
                className: w,
                rootClassName: R,
                children: u,
                style: h,
                title: b
            } = t,
            y = ve(t, ["prefixCls", "className", "rootClassName", "children", "style", "title"]),
            f = p("radio", $),
            v = ((e == null ? void 0 : e.optionType) || s) === "button",
            l = v ? `${f}-button` : f,
            j = Q(f),
            [D, O, k] = U(f, j),
            a = Object.assign({}, y),
            P = i.useContext(ne);
        e && (a.name = e.name, a.onChange = E, a.checked = t.value === e.value, a.disabled = (n = a.disabled) !== null && n !== void 0 ? n : e.disabled), a.disabled = (o = a.disabled) !== null && o !== void 0 ? o : P;
        const I = H(`${l}-wrapper`, {
                [`${l}-wrapper-checked`]: a.checked,
                [`${l}-wrapper-disabled`]: a.disabled,
                [`${l}-wrapper-rtl`]: m === "rtl",
                [`${l}-wrapper-in-form-item`]: C,
                [`${l}-wrapper-block`]: !!(e != null && e.block)
            }, c == null ? void 0 : c.className, w, R, O, k, j),
            [B, g] = ue(a.onClick);
        return D(i.createElement(ie, {
            component: "Radio",
            disabled: a.disabled
        }, i.createElement("label", {
            className: I,
            style: Object.assign(Object.assign({}, c == null ? void 0 : c.style), h),
            onMouseEnter: t.onMouseEnter,
            onMouseLeave: t.onMouseLeave,
            title: b,
            onClick: B
        }, i.createElement(be, Object.assign({}, a, {
            className: H(a.className, {
                [ae]: !v
            }),
            type: "radio",
            prefixCls: l,
            ref: x,
            onClick: g
        })), u !== void 0 ? i.createElement("span", {
            className: `${l}-label`
        }, u) : null)))
    },
    q = i.forwardRef(ke),
    $e = i.forwardRef((t, r) => {
        const {
            getPrefixCls: n,
            direction: o
        } = i.useContext(L), {
            name: e
        } = i.useContext(X), s = le(ge(e)), {
            prefixCls: p,
            className: m,
            rootClassName: c,
            options: S,
            buttonStyle: x = "outline",
            disabled: C,
            children: E,
            size: $,
            style: w,
            id: R,
            optionType: u,
            name: h = s,
            defaultValue: b,
            value: y,
            block: f = !1,
            onChange: v,
            onMouseEnter: l,
            onMouseLeave: j,
            onFocus: D,
            onBlur: O
        } = t, [k, a] = de(b, {
            value: y
        }), P = i.useCallback(d => {
            const ee = k,
                A = d.target.value;
            "value" in t || a(A), A !== ee && (v == null || v(d))
        }, [k, a, v]), I = n("radio", p), B = `${I}-group`, g = Q(I), [M, T, N] = U(I, g);
        let G = E;
        S && S.length > 0 && (G = S.map(d => typeof d == "string" || typeof d == "number" ? i.createElement(q, {
            key: d.toString(),
            prefixCls: I,
            disabled: C,
            value: d,
            checked: k === d
        }, d) : i.createElement(q, {
            key: `radio-group-value-options-${d.value}`,
            prefixCls: I,
            disabled: d.disabled || C,
            value: d.value,
            checked: k === d.value,
            title: d.title,
            style: d.style,
            className: d.className,
            id: d.id,
            required: d.required
        }, d.label)));
        const W = se($),
            Y = H(B, `${B}-${x}`, {
                [`${B}-${W}`]: W,
                [`${B}-rtl`]: o === "rtl",
                [`${B}-block`]: f
            }, m, c, T, N, g),
            Z = i.useMemo(() => ({
                onChange: P,
                value: k,
                disabled: C,
                name: h,
                optionType: u,
                block: f
            }), [P, k, C, h, u, f]);
        return M(i.createElement("div", Object.assign({}, ce(t, {
            aria: !0,
            data: !0
        }), {
            className: Y,
            style: w,
            onMouseEnter: l,
            onMouseLeave: j,
            onFocus: D,
            onBlur: O,
            id: R,
            ref: r
        }), i.createElement(pe, {
            value: Z
        }, G)))
    }),
    ye = i.memo($e);
var xe = function(t, r) {
    var n = {};
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (n[o] = t[o]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var e = 0, o = Object.getOwnPropertySymbols(t); e < o.length; e++) r.indexOf(o[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[e]) && (n[o[e]] = t[o[e]]);
    return n
};
const we = (t, r) => {
        const {
            getPrefixCls: n
        } = i.useContext(L), {
            prefixCls: o
        } = t, e = xe(t, ["prefixCls"]), s = n("radio", o);
        return i.createElement(Ce, {
            value: "button"
        }, i.createElement(q, Object.assign({
            prefixCls: s
        }, e, {
            type: "radio",
            ref: r
        })))
    },
    Re = i.forwardRef(we),
    V = q;
V.Button = Re;
V.Group = ye;
V.__ANT_RADIO = !0;
export {
    V as R
};