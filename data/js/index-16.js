import {
    r as o,
    al as ce,
    dj as Ke,
    am as D,
    dk as Ye,
    ai as Je,
    dl as Me,
    aj as Ue,
    aL as Ne,
    ak as K,
    dm as ge,
    bH as be,
    aR as ve,
    aK as W,
    aE as Qe,
    db as Ze,
    bV as ke,
    aO as et,
    aP as tt,
    dn as nt,
    dp as rt,
    dq as ot,
    dr as at,
    ds as Re,
    dt as Q,
    du as lt,
    aF as st,
    bW as le,
    b8 as Se,
    cM as it,
    cV as ct,
    bb as mt,
    bl as Oe,
    dv as ut,
    bf as Ve,
    bd as dt,
    bG as ft,
    bA as pt,
    ao as gt,
    an as bt,
    ap as ht,
    bn as yt,
    aS as $t,
    dw as _e,
    dx as xt,
    bt as Ct,
    dy as vt,
    dz as St,
    dA as Ot,
    bj as wt,
    aQ as Et,
    dB as It,
    dC as jt
} from "./_index.js";
import {
    g as Ft
} from "./index-10.js";
import {
    u as Le,
    g as ze,
    a as fe,
    b as Pt
} from "./useForm.js";
import {
    r as se,
    u as Mt
} from "./useBreakpoint.js";
import {
    R as Nt
} from "./QuestionCircleOutlined.js";
import {
    T as Rt
} from "./index-5.js";
const Te = o.createContext({});
var Vt = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};

function we(e) {
    return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e
}
const _t = ["xs", "sm", "md", "lg", "xl", "xxl"],
    Ae = o.forwardRef((e, t) => {
        const {
            getPrefixCls: r,
            direction: n
        } = o.useContext(ce), {
            gutter: a,
            wrap: s
        } = o.useContext(Te), {
            prefixCls: m,
            span: i,
            order: g,
            offset: c,
            push: $,
            pull: b,
            className: I,
            children: j,
            flex: w,
            style: x
        } = e, h = Vt(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), p = r("col", m), [E, d, l] = Ke(p), v = {};
        let C = {};
        _t.forEach(f => {
            let u = {};
            const O = e[f];
            typeof O == "number" ? u.span = O : typeof O == "object" && (u = O || {}), delete h[f], C = Object.assign(Object.assign({}, C), {
                [`${p}-${f}-${u.span}`]: u.span !== void 0,
                [`${p}-${f}-order-${u.order}`]: u.order || u.order === 0,
                [`${p}-${f}-offset-${u.offset}`]: u.offset || u.offset === 0,
                [`${p}-${f}-push-${u.push}`]: u.push || u.push === 0,
                [`${p}-${f}-pull-${u.pull}`]: u.pull || u.pull === 0,
                [`${p}-rtl`]: n === "rtl"
            }), u.flex && (C[`${p}-${f}-flex`] = !0, v[`--${p}-${f}-flex`] = we(u.flex))
        });
        const S = D(p, {
                [`${p}-${i}`]: i !== void 0,
                [`${p}-order-${g}`]: g,
                [`${p}-offset-${c}`]: c,
                [`${p}-push-${$}`]: $,
                [`${p}-pull-${b}`]: b
            }, I, C, d, l),
            y = {};
        if (a && a[0] > 0) {
            const f = a[0] / 2;
            y.paddingLeft = f, y.paddingRight = f
        }
        return w && (y.flex = we(w), s === !1 && !y.minWidth && (y.minWidth = 0)), E(o.createElement("div", Object.assign({}, h, {
            style: Object.assign(Object.assign(Object.assign({}, y), x), v),
            className: S,
            ref: t
        }), j))
    });

function Lt(e, t) {
    const r = [void 0, void 0],
        n = Array.isArray(e) ? e : [e, void 0],
        a = t || {
            xs: !0,
            sm: !0,
            md: !0,
            lg: !0,
            xl: !0,
            xxl: !0
        };
    return n.forEach((s, m) => {
        if (typeof s == "object" && s !== null)
            for (let i = 0; i < se.length; i++) {
                const g = se[i];
                if (a[g] && s[g] !== void 0) {
                    r[m] = s[g];
                    break
                }
            } else r[m] = s
    }), r
}
var zt = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};

function Ee(e, t) {
    const [r, n] = o.useState(typeof e == "string" ? e : ""), a = () => {
        if (typeof e == "string" && n(e), typeof e == "object")
            for (let s = 0; s < se.length; s++) {
                const m = se[s];
                if (!t || !t[m]) continue;
                const i = e[m];
                if (i !== void 0) {
                    n(i);
                    return
                }
            }
    };
    return o.useEffect(() => {
        a()
    }, [JSON.stringify(e), t]), r
}
const Tt = o.forwardRef((e, t) => {
    const {
        prefixCls: r,
        justify: n,
        align: a,
        className: s,
        style: m,
        children: i,
        gutter: g = 0,
        wrap: c
    } = e, $ = zt(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
        getPrefixCls: b,
        direction: I
    } = o.useContext(ce), j = Mt(!0, null), w = Ee(a, j), x = Ee(n, j), h = b("row", r), [p, E, d] = Ye(h), l = Lt(g, j), v = D(h, {
        [`${h}-no-wrap`]: c === !1,
        [`${h}-${x}`]: x,
        [`${h}-${w}`]: w,
        [`${h}-rtl`]: I === "rtl"
    }, s, E, d), C = {}, S = l[0] != null && l[0] > 0 ? l[0] / -2 : void 0;
    S && (C.marginLeft = S, C.marginRight = S);
    const [y, f] = l;
    C.rowGap = f;
    const u = o.useMemo(() => ({
        gutter: [y, f],
        wrap: c
    }), [y, f, c]);
    return p(o.createElement(Te.Provider, {
        value: u
    }, o.createElement("div", Object.assign({}, $, {
        className: v,
        style: Object.assign(Object.assign({}, C), m),
        ref: t
    }), i)))
});

function At(e) {
    return e == null ? null : typeof e == "object" && !o.isValidElement(e) ? e : {
        title: e
    }
}

function ie(e) {
    const [t, r] = o.useState(e);
    return o.useEffect(() => {
        const n = setTimeout(() => {
            r(e)
        }, e.length ? 0 : 10);
        return () => {
            clearTimeout(n)
        }
    }, [e]), t
}
const Ht = e => {
        const {
            componentCls: t
        } = e, r = `${t}-show-help`, n = `${t}-show-help-item`;
        return {
            [r]: {
                transition: `opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,
                "&-appear, &-enter": {
                    opacity: 0,
                    "&-active": {
                        opacity: 1
                    }
                },
                "&-leave": {
                    opacity: 1,
                    "&-active": {
                        opacity: 0
                    }
                },
                [n]: {
                    overflow: "hidden",
                    transition: `height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,
                    [`&${n}-appear, &${n}-enter`]: {
                        transform: "translateY(-5px)",
                        opacity: 0,
                        "&-active": {
                            transform: "translateY(0)",
                            opacity: 1
                        }
                    },
                    [`&${n}-leave-active`]: {
                        transform: "translateY(-5px)"
                    }
                }
            }
        }
    },
    Wt = e => ({
        legend: {
            display: "block",
            width: "100%",
            marginBottom: e.marginLG,
            padding: 0,
            color: e.colorTextDescription,
            fontSize: e.fontSizeLG,
            lineHeight: "inherit",
            border: 0,
            borderBottom: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        'input[type="search"]': {
            boxSizing: "border-box"
        },
        'input[type="radio"], input[type="checkbox"]': {
            lineHeight: "normal"
        },
        'input[type="file"]': {
            display: "block"
        },
        'input[type="range"]': {
            display: "block",
            width: "100%"
        },
        "select[multiple], select[size]": {
            height: "auto"
        },
        "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
            outline: 0,
            boxShadow: `0 0 0 ${K(e.controlOutlineWidth)} ${e.controlOutline}`
        },
        output: {
            display: "block",
            paddingTop: 15,
            color: e.colorText,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight
        }
    }),
    Ie = (e, t) => {
        const {
            formItemCls: r
        } = e;
        return {
            [r]: {
                [`${r}-label > label`]: {
                    height: t
                },
                [`${r}-control-input`]: {
                    minHeight: t
                }
            }
        }
    },
    qt = e => {
        const {
            componentCls: t
        } = e;
        return {
            [e.componentCls]: Object.assign(Object.assign(Object.assign({}, Ne(e)), Wt(e)), {
                [`${t}-text`]: {
                    display: "inline-block",
                    paddingInlineEnd: e.paddingSM
                },
                "&-small": Object.assign({}, Ie(e, e.controlHeightSM)),
                "&-large": Object.assign({}, Ie(e, e.controlHeightLG))
            })
        }
    },
    Dt = e => {
        const {
            formItemCls: t,
            iconCls: r,
            rootPrefixCls: n,
            antCls: a,
            labelRequiredMarkColor: s,
            labelColor: m,
            labelFontSize: i,
            labelHeight: g,
            labelColonMarginInlineStart: c,
            labelColonMarginInlineEnd: $,
            itemMarginBottom: b
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, Ne(e)), {
                marginBottom: b,
                verticalAlign: "top",
                "&-with-help": {
                    transition: "none"
                },
                [`&-hidden,
        &-hidden${a}-row`]: {
                    display: "none"
                },
                "&-has-warning": {
                    [`${t}-split`]: {
                        color: e.colorError
                    }
                },
                "&-has-error": {
                    [`${t}-split`]: {
                        color: e.colorWarning
                    }
                },
                [`${t}-label`]: {
                    flexGrow: 0,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textAlign: "end",
                    verticalAlign: "middle",
                    "&-left": {
                        textAlign: "start"
                    },
                    "&-wrap": {
                        overflow: "unset",
                        lineHeight: e.lineHeight,
                        whiteSpace: "unset",
                        "> label": {
                            verticalAlign: "middle",
                            textWrap: "balance"
                        }
                    },
                    "> label": {
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        maxWidth: "100%",
                        height: g,
                        color: m,
                        fontSize: i,
                        [`> ${r}`]: {
                            fontSize: e.fontSize,
                            verticalAlign: "top"
                        },
                        [`&${t}-required`]: {
                            "&::before": {
                                display: "inline-block",
                                marginInlineEnd: e.marginXXS,
                                color: s,
                                fontSize: e.fontSize,
                                fontFamily: "SimSun, sans-serif",
                                lineHeight: 1,
                                content: '"*"'
                            },
                            [`&${t}-required-mark-hidden, &${t}-required-mark-optional`]: {
                                "&::before": {
                                    display: "none"
                                }
                            }
                        },
                        [`${t}-optional`]: {
                            display: "inline-block",
                            marginInlineStart: e.marginXXS,
                            color: e.colorTextDescription,
                            [`&${t}-required-mark-hidden`]: {
                                display: "none"
                            }
                        },
                        [`${t}-tooltip`]: {
                            color: e.colorTextDescription,
                            cursor: "help",
                            writingMode: "horizontal-tb",
                            marginInlineStart: e.marginXXS
                        },
                        "&::after": {
                            content: '":"',
                            position: "relative",
                            marginBlock: 0,
                            marginInlineStart: c,
                            marginInlineEnd: $
                        },
                        [`&${t}-no-colon::after`]: {
                            content: '"\\a0"'
                        }
                    }
                },
                [`${t}-control`]: {
                    "--ant-display": "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    [`&:first-child:not([class^="'${n}-col-'"]):not([class*="' ${n}-col-'"])`]: {
                        width: "100%"
                    },
                    "&-input": {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        minHeight: e.controlHeight,
                        "&-content": {
                            flex: "auto",
                            maxWidth: "100%",
                            [`&:has(> ${a}-switch:only-child, > ${a}-rate:only-child)`]: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }
                    }
                },
                [t]: {
                    "&-additional": {
                        display: "flex",
                        flexDirection: "column"
                    },
                    "&-explain, &-extra": {
                        clear: "both",
                        color: e.colorTextDescription,
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight
                    },
                    "&-explain-connected": {
                        width: "100%"
                    },
                    "&-extra": {
                        minHeight: e.controlHeightSM,
                        transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
                    },
                    "&-explain": {
                        "&-error": {
                            color: e.colorError
                        },
                        "&-warning": {
                            color: e.colorWarning
                        }
                    }
                },
                [`&-with-help ${t}-explain`]: {
                    height: "auto",
                    opacity: 1
                },
                [`${t}-feedback-icon`]: {
                    fontSize: e.fontSize,
                    textAlign: "center",
                    visibility: "visible",
                    animationName: Me,
                    animationDuration: e.motionDurationMid,
                    animationTimingFunction: e.motionEaseOutBack,
                    pointerEvents: "none",
                    "&-success": {
                        color: e.colorSuccess
                    },
                    "&-error": {
                        color: e.colorError
                    },
                    "&-warning": {
                        color: e.colorWarning
                    },
                    "&-validating": {
                        color: e.colorPrimary
                    }
                }
            })
        }
    },
    je = (e, t) => {
        const {
            formItemCls: r
        } = e;
        return {
            [`${t}-horizontal`]: {
                [`${r}-label`]: {
                    flexGrow: 0
                },
                [`${r}-control`]: {
                    flex: "1 1 0",
                    minWidth: 0
                },
                [`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]: {
                    [`& + ${r}-control`]: {
                        minWidth: "unset"
                    }
                }
            }
        }
    },
    Bt = e => {
        const {
            componentCls: t,
            formItemCls: r,
            inlineItemMarginBottom: n
        } = e;
        return {
            [`${t}-inline`]: {
                display: "flex",
                flexWrap: "wrap",
                [r]: {
                    flex: "none",
                    marginInlineEnd: e.margin,
                    marginBottom: n,
                    "&-row": {
                        flexWrap: "nowrap"
                    },
                    [`> ${r}-label,
        > ${r}-control`]: {
                        display: "inline-block",
                        verticalAlign: "top"
                    },
                    [`> ${r}-label`]: {
                        flex: "none"
                    },
                    [`${t}-text`]: {
                        display: "inline-block"
                    },
                    [`${r}-has-feedback`]: {
                        display: "inline-block"
                    }
                }
            }
        }
    },
    q = e => ({
        padding: e.verticalLabelPadding,
        margin: e.verticalLabelMargin,
        whiteSpace: "initial",
        textAlign: "start",
        "> label": {
            margin: 0,
            "&::after": {
                visibility: "hidden"
            }
        }
    }),
    He = e => {
        const {
            componentCls: t,
            formItemCls: r,
            rootPrefixCls: n
        } = e;
        return {
            [`${r} ${r}-label`]: q(e),
            [`${t}:not(${t}-inline)`]: {
                [r]: {
                    flexWrap: "wrap",
                    [`${r}-label, ${r}-control`]: {
                        [`&:not([class*=" ${n}-col-xs"])`]: {
                            flex: "0 0 100%",
                            maxWidth: "100%"
                        }
                    }
                }
            }
        }
    },
    Gt = e => {
        const {
            componentCls: t,
            formItemCls: r,
            antCls: n
        } = e;
        return {
            [`${t}-vertical`]: {
                [`${r}:not(${r}-horizontal)`]: {
                    [`${r}-row`]: {
                        flexDirection: "column"
                    },
                    [`${r}-label > label`]: {
                        height: "auto"
                    },
                    [`${r}-control`]: {
                        width: "100%"
                    },
                    [`${r}-label,
        ${n}-col-24${r}-label,
        ${n}-col-xl-24${r}-label`]: q(e)
                }
            },
            [`@media (max-width: ${K(e.screenXSMax)})`]: [He(e), {
                [t]: {
                    [`${r}:not(${r}-horizontal)`]: {
                        [`${n}-col-xs-24${r}-label`]: q(e)
                    }
                }
            }],
            [`@media (max-width: ${K(e.screenSMMax)})`]: {
                [t]: {
                    [`${r}:not(${r}-horizontal)`]: {
                        [`${n}-col-sm-24${r}-label`]: q(e)
                    }
                }
            },
            [`@media (max-width: ${K(e.screenMDMax)})`]: {
                [t]: {
                    [`${r}:not(${r}-horizontal)`]: {
                        [`${n}-col-md-24${r}-label`]: q(e)
                    }
                }
            },
            [`@media (max-width: ${K(e.screenLGMax)})`]: {
                [t]: {
                    [`${r}:not(${r}-horizontal)`]: {
                        [`${n}-col-lg-24${r}-label`]: q(e)
                    }
                }
            }
        }
    },
    Xt = e => {
        const {
            formItemCls: t,
            antCls: r
        } = e;
        return {
            [`${t}-vertical`]: {
                [`${t}-row`]: {
                    flexDirection: "column"
                },
                [`${t}-label > label`]: {
                    height: "auto"
                },
                [`${t}-control`]: {
                    width: "100%"
                }
            },
            [`${t}-vertical ${t}-label,
      ${r}-col-24${t}-label,
      ${r}-col-xl-24${t}-label`]: q(e),
            [`@media (max-width: ${K(e.screenXSMax)})`]: [He(e), {
                [t]: {
                    [`${r}-col-xs-24${t}-label`]: q(e)
                }
            }],
            [`@media (max-width: ${K(e.screenSMMax)})`]: {
                [t]: {
                    [`${r}-col-sm-24${t}-label`]: q(e)
                }
            },
            [`@media (max-width: ${K(e.screenMDMax)})`]: {
                [t]: {
                    [`${r}-col-md-24${t}-label`]: q(e)
                }
            },
            [`@media (max-width: ${K(e.screenLGMax)})`]: {
                [t]: {
                    [`${r}-col-lg-24${t}-label`]: q(e)
                }
            }
        }
    },
    Kt = e => ({
        labelRequiredMarkColor: e.colorError,
        labelColor: e.colorTextHeading,
        labelFontSize: e.fontSize,
        labelHeight: e.controlHeight,
        labelColonMarginInlineStart: e.marginXXS / 2,
        labelColonMarginInlineEnd: e.marginXS,
        itemMarginBottom: e.marginLG,
        verticalLabelPadding: `0 0 ${e.paddingXS}px`,
        verticalLabelMargin: 0,
        inlineItemMarginBottom: 0
    }),
    We = (e, t) => Ue(e, {
        formItemCls: `${e.componentCls}-item`,
        rootPrefixCls: t
    }),
    he = Je("Form", (e, {
        rootPrefixCls: t
    }) => {
        const r = We(e, t);
        return [qt(r), Dt(r), Ht(r), je(r, r.componentCls), je(r, r.formItemCls), Bt(r), Gt(r), Xt(r), Ft(r), Me]
    }, Kt, {
        order: -1e3
    }),
    Fe = [];

function pe(e, t, r, n = 0) {
    return {
        key: typeof e == "string" ? e : `${t}-${n}`,
        error: e,
        errorStatus: r
    }
}
const qe = ({
    help: e,
    helpStatus: t,
    errors: r = Fe,
    warnings: n = Fe,
    className: a,
    fieldId: s,
    onVisibleChanged: m
}) => {
    const {
        prefixCls: i
    } = o.useContext(ge), g = `${i}-item-explain`, c = be(i), [$, b, I] = he(i, c), j = o.useMemo(() => ve(i), [i]), w = ie(r), x = ie(n), h = o.useMemo(() => e != null ? [pe(e, "help", t)] : [].concat(W(w.map((d, l) => pe(d, "error", "error", l))), W(x.map((d, l) => pe(d, "warning", "warning", l)))), [e, t, w, x]), p = o.useMemo(() => {
        const d = {};
        return h.forEach(({
            key: l
        }) => {
            d[l] = (d[l] || 0) + 1
        }), h.map((l, v) => Object.assign(Object.assign({}, l), {
            key: d[l.key] > 1 ? `${l.key}-fallback-${v}` : l.key
        }))
    }, [h]), E = {};
    return s && (E.id = `${s}_help`), $(o.createElement(Qe, {
        motionDeadline: j.motionDeadline,
        motionName: `${i}-show-help`,
        visible: !!p.length,
        onVisibleChanged: m
    }, d => {
        const {
            className: l,
            style: v
        } = d;
        return o.createElement("div", Object.assign({}, E, {
            className: D(g, l, I, c, a, b),
            style: v
        }), o.createElement(Ze, Object.assign({
            keys: p
        }, ve(i), {
            motionName: `${i}-show-help-item`,
            component: !1
        }), C => {
            const {
                key: S,
                error: y,
                errorStatus: f,
                className: u,
                style: O
            } = C;
            return o.createElement("div", {
                key: S,
                className: D(u, {
                    [`${g}-${f}`]: f
                }),
                style: O
            }, y)
        }))
    }))
};
var Yt = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};
const Jt = (e, t) => {
        const r = o.useContext(ke),
            {
                getPrefixCls: n,
                direction: a,
                requiredMark: s,
                colon: m,
                scrollToFirstError: i,
                className: g,
                style: c
            } = et("form"),
            {
                prefixCls: $,
                className: b,
                rootClassName: I,
                size: j,
                disabled: w = r,
                form: x,
                colon: h,
                labelAlign: p,
                labelWrap: E,
                labelCol: d,
                wrapperCol: l,
                hideRequiredMark: v,
                layout: C = "horizontal",
                scrollToFirstError: S,
                requiredMark: y,
                onFinishFailed: f,
                name: u,
                style: O,
                feedbackIcons: H,
                variant: Y
            } = e,
            V = Yt(e, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]),
            T = tt(j),
            A = o.useContext(nt),
            B = o.useMemo(() => y !== void 0 ? y : v ? !1 : s !== void 0 ? s : !0, [v, y, s]),
            P = h ?? m,
            L = n("form", $),
            z = be(L),
            [te, J, oe] = he(L, z),
            me = D(L, `${L}-${C}`, {
                [`${L}-hide-required-mark`]: B === !1,
                [`${L}-rtl`]: a === "rtl",
                [`${L}-${T}`]: T
            }, oe, z, J, g, b, I),
            [U] = Le(x),
            {
                __INTERNAL__: Z
            } = U;
        Z.name = u;
        const F = o.useMemo(() => ({
                name: u,
                labelAlign: p,
                labelCol: d,
                labelWrap: E,
                wrapperCol: l,
                vertical: C === "vertical",
                colon: P,
                requiredMark: B,
                itemRef: Z.itemRef,
                form: U,
                feedbackIcons: H
            }), [u, p, d, l, C, P, B, U, H]),
            _ = o.useRef(null);
        o.useImperativeHandle(t, () => {
            var M;
            return Object.assign(Object.assign({}, U), {
                nativeElement: (M = _.current) === null || M === void 0 ? void 0 : M.nativeElement
            })
        });
        const N = (M, X) => {
                if (M) {
                    let k = {
                        block: "nearest"
                    };
                    typeof M == "object" && (k = Object.assign(Object.assign({}, k), M)), U.scrollToField(X, k)
                }
            },
            G = M => {
                if (f == null || f(M), M.errorFields.length) {
                    const X = M.errorFields[0].name;
                    if (S !== void 0) {
                        N(S, X);
                        return
                    }
                    i !== void 0 && N(i, X)
                }
            };
        return te(o.createElement(rt.Provider, {
            value: Y
        }, o.createElement(ot, {
            disabled: w
        }, o.createElement(at.Provider, {
            value: T
        }, o.createElement(Re, {
            validateMessages: A
        }, o.createElement(Q.Provider, {
            value: F
        }, o.createElement(lt, Object.assign({
            id: u
        }, V, {
            name: u,
            onFinishFailed: G,
            form: U,
            ref: _,
            style: Object.assign(Object.assign({}, c), O),
            className: me
        }))))))))
    },
    Ut = o.forwardRef(Jt);

function Qt(e) {
    if (typeof e == "function") return e;
    const t = st(e);
    return t.length <= 1 ? t[0] : t
}
const De = () => {
    const {
        status: e,
        errors: t = [],
        warnings: r = []
    } = o.useContext(le);
    return {
        status: e,
        errors: t,
        warnings: r
    }
};
De.Context = le;

function Zt(e) {
    const [t, r] = o.useState(e), n = o.useRef(null), a = o.useRef([]), s = o.useRef(!1);
    o.useEffect(() => (s.current = !1, () => {
        s.current = !0, Se.cancel(n.current), n.current = null
    }), []);

    function m(i) {
        s.current || (n.current === null && (a.current = [], n.current = Se(() => {
            n.current = null, r(g => {
                let c = g;
                return a.current.forEach($ => {
                    c = $(c)
                }), c
            })
        })), a.current.push(i))
    }
    return [t, m]
}

function kt() {
    const {
        itemRef: e
    } = o.useContext(Q), t = o.useRef({});

    function r(n, a) {
        const s = a && typeof a == "object" && it(a),
            m = n.join("_");
        return (t.current.name !== m || t.current.originRef !== s) && (t.current.name = m, t.current.originRef = s, t.current.ref = ct(e(n), s)), t.current.ref
    }
    return r
}
const en = e => {
        const {
            formItemCls: t
        } = e;
        return {
            "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
                [`${t}-control`]: {
                    display: "flex"
                }
            }
        }
    },
    tn = mt(["Form", "item-item"], (e, {
        rootPrefixCls: t
    }) => {
        const r = We(e, t);
        return [en(r)]
    });
var nn = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};
const rn = 24,
    on = e => {
        const {
            prefixCls: t,
            status: r,
            labelCol: n,
            wrapperCol: a,
            children: s,
            errors: m,
            warnings: i,
            _internalItemRender: g,
            extra: c,
            help: $,
            fieldId: b,
            marginBottom: I,
            onErrorVisibleChanged: j,
            label: w
        } = e, x = `${t}-item`, h = o.useContext(Q), p = o.useMemo(() => {
            let V = Object.assign({}, a || h.wrapperCol || {});
            return w === null && !n && !a && h.labelCol && [void 0, "xs", "sm", "md", "lg", "xl", "xxl"].forEach(A => {
                const B = A ? [A] : [],
                    P = Oe(h.labelCol, B),
                    L = typeof P == "object" ? P : {},
                    z = Oe(V, B),
                    te = typeof z == "object" ? z : {};
                "span" in L && !("offset" in te) && L.span < rn && (V = ut(V, [].concat(B, ["offset"]), L.span))
            }), V
        }, [a, h]), E = D(`${x}-control`, p.className), d = o.useMemo(() => {
            const {
                labelCol: V,
                wrapperCol: T
            } = h;
            return nn(h, ["labelCol", "wrapperCol"])
        }, [h]), l = o.useRef(null), [v, C] = o.useState(0);
        Ve(() => {
            c && l.current ? C(l.current.clientHeight) : C(0)
        }, [c]);
        const S = o.createElement("div", {
                className: `${x}-control-input`
            }, o.createElement("div", {
                className: `${x}-control-input-content`
            }, s)),
            y = o.useMemo(() => ({
                prefixCls: t,
                status: r
            }), [t, r]),
            f = I !== null || m.length || i.length ? o.createElement(ge.Provider, {
                value: y
            }, o.createElement(qe, {
                fieldId: b,
                errors: m,
                warnings: i,
                help: $,
                helpStatus: r,
                className: `${x}-explain-connected`,
                onVisibleChanged: j
            })) : null,
            u = {};
        b && (u.id = `${b}_extra`);
        const O = c ? o.createElement("div", Object.assign({}, u, {
                className: `${x}-extra`,
                ref: l
            }), c) : null,
            H = f || O ? o.createElement("div", {
                className: `${x}-additional`,
                style: I ? {
                    minHeight: I + v
                } : {}
            }, f, O) : null,
            Y = g && g.mark === "pro_table_render" && g.render ? g.render(e, {
                input: S,
                errorList: f,
                extra: O
            }) : o.createElement(o.Fragment, null, S, H);
        return o.createElement(Q.Provider, {
            value: d
        }, o.createElement(Ae, Object.assign({}, p, {
            className: E
        }), Y), o.createElement(tn, {
            prefixCls: t
        }))
    };
var an = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};
const ln = ({
        prefixCls: e,
        label: t,
        htmlFor: r,
        labelCol: n,
        labelAlign: a,
        colon: s,
        required: m,
        requiredMark: i,
        tooltip: g,
        vertical: c
    }) => {
        var $;
        const [b] = dt("Form"), {
            labelAlign: I,
            labelCol: j,
            labelWrap: w,
            colon: x
        } = o.useContext(Q);
        if (!t) return null;
        const h = n || j || {},
            p = a || I,
            E = `${e}-item-label`,
            d = D(E, p === "left" && `${E}-left`, h.className, {
                [`${E}-wrap`]: !!w
            });
        let l = t;
        const v = s === !0 || x !== !1 && s !== !1;
        v && !c && typeof t == "string" && t.trim() && (l = t.replace(/[:|：]\s*$/, ""));
        const S = At(g);
        if (S) {
            const {
                icon: Y = o.createElement(Nt, null)
            } = S, V = an(S, ["icon"]), T = o.createElement(Rt, Object.assign({}, V), o.cloneElement(Y, {
                className: `${e}-item-tooltip`,
                title: "",
                onClick: A => {
                    A.preventDefault()
                },
                tabIndex: null
            }));
            l = o.createElement(o.Fragment, null, l, T)
        }
        const y = i === "optional",
            f = typeof i == "function",
            u = i === !1;
        f ? l = i(l, {
            required: !!m
        }) : y && !m && (l = o.createElement(o.Fragment, null, l, o.createElement("span", {
            className: `${e}-item-optional`,
            title: ""
        }, (b == null ? void 0 : b.optional) || (($ = ft.Form) === null || $ === void 0 ? void 0 : $.optional))));
        let O;
        u ? O = "hidden" : (y || f) && (O = "optional");
        const H = D({
            [`${e}-item-required`]: m,
            [`${e}-item-required-mark-${O}`]: O,
            [`${e}-item-no-colon`]: !v
        });
        return o.createElement(Ae, Object.assign({}, h, {
            className: d
        }), o.createElement("label", {
            htmlFor: r,
            className: H,
            title: typeof t == "string" ? t : ""
        }, l))
    },
    sn = {
        success: ht,
        warning: bt,
        error: gt,
        validating: pt
    };

function Be({
    children: e,
    errors: t,
    warnings: r,
    hasFeedback: n,
    validateStatus: a,
    prefixCls: s,
    meta: m,
    noStyle: i,
    name: g
}) {
    const c = `${s}-item`,
        {
            feedbackIcons: $
        } = o.useContext(Q),
        b = ze(t, r, m, null, !!n, a),
        {
            isFormItemInput: I,
            status: j,
            hasFeedback: w,
            feedbackIcon: x,
            name: h
        } = o.useContext(le),
        p = o.useMemo(() => {
            var E;
            let d;
            if (n) {
                const v = n !== !0 && n.icons || $,
                    C = b && ((E = v == null ? void 0 : v({
                        status: b,
                        errors: t,
                        warnings: r
                    })) === null || E === void 0 ? void 0 : E[b]),
                    S = b && sn[b];
                d = C !== !1 && S ? o.createElement("span", {
                    className: D(`${c}-feedback-icon`, `${c}-feedback-icon-${b}`)
                }, C || o.createElement(S, null)) : null
            }
            const l = {
                status: b || "",
                errors: t,
                warnings: r,
                hasFeedback: !!n,
                feedbackIcon: d,
                isFormItemInput: !0,
                name: g
            };
            return i && (l.status = (b ?? j) || "", l.isFormItemInput = I, l.hasFeedback = !!(n ?? w), l.feedbackIcon = n !== void 0 ? l.feedbackIcon : x, l.name = g ?? h), l
        }, [b, n, i, I, j]);
    return o.createElement(le.Provider, {
        value: p
    }, e)
}
var cn = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};

function mn(e) {
    const {
        prefixCls: t,
        className: r,
        rootClassName: n,
        style: a,
        help: s,
        errors: m,
        warnings: i,
        validateStatus: g,
        meta: c,
        hasFeedback: $,
        hidden: b,
        children: I,
        fieldId: j,
        required: w,
        isRequired: x,
        onSubItemMetaChange: h,
        layout: p,
        name: E
    } = e, d = cn(e, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange", "layout", "name"]), l = `${t}-item`, {
        requiredMark: v,
        vertical: C
    } = o.useContext(Q), S = C || p === "vertical", y = o.useRef(null), f = ie(m), u = ie(i), O = s != null, H = !!(O || m.length || i.length), Y = !!y.current && yt(y.current), [V, T] = o.useState(null);
    Ve(() => {
        if (H && y.current) {
            const z = getComputedStyle(y.current);
            T(parseInt(z.marginBottom, 10))
        }
    }, [H, Y]);
    const A = z => {
            z || T(null)
        },
        P = ((z = !1) => {
            const te = z ? f : c.errors,
                J = z ? u : c.warnings;
            return ze(te, J, c, "", !!$, g)
        })(),
        L = D(l, r, n, {
            [`${l}-with-help`]: O || f.length || u.length,
            [`${l}-has-feedback`]: P && $,
            [`${l}-has-success`]: P === "success",
            [`${l}-has-warning`]: P === "warning",
            [`${l}-has-error`]: P === "error",
            [`${l}-is-validating`]: P === "validating",
            [`${l}-hidden`]: b,
            [`${l}-${p}`]: p
        });
    return o.createElement("div", {
        className: L,
        style: a,
        ref: y
    }, o.createElement(Tt, Object.assign({
        className: `${l}-row`
    }, $t(d, ["_internalItemRender", "colon", "dependencies", "extra", "fieldKey", "getValueFromEvent", "getValueProps", "htmlFor", "id", "initialValue", "isListField", "label", "labelAlign", "labelCol", "labelWrap", "messageVariables", "name", "normalize", "noStyle", "preserve", "requiredMark", "rules", "shouldUpdate", "trigger", "tooltip", "validateFirst", "validateTrigger", "valuePropName", "wrapperCol", "validateDebounce"])), o.createElement(ln, Object.assign({
        htmlFor: j
    }, e, {
        requiredMark: v,
        required: w ?? x,
        prefixCls: t,
        vertical: S
    })), o.createElement(on, Object.assign({}, e, c, {
        errors: f,
        warnings: u,
        prefixCls: t,
        status: P,
        help: s,
        marginBottom: V,
        onErrorVisibleChanged: A
    }), o.createElement(_e.Provider, {
        value: h
    }, o.createElement(Be, {
        prefixCls: t,
        meta: c,
        errors: c.errors,
        warnings: c.warnings,
        hasFeedback: $,
        validateStatus: P,
        name: E
    }, I)))), !!V && o.createElement("div", {
        className: `${l}-margin-offset`,
        style: {
            marginBottom: -V
        }
    }))
}
const un = "__SPLIT__";

function dn(e, t) {
    const r = Object.keys(e),
        n = Object.keys(t);
    return r.length === n.length && r.every(a => {
        const s = e[a],
            m = t[a];
        return s === m || typeof s == "function" || typeof m == "function"
    })
}
const fn = o.memo(({
    children: e
}) => e, (e, t) => dn(e.control, t.control) && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every((r, n) => r === t.childProps[n]));

function Pe() {
    return {
        errors: [],
        warnings: [],
        touched: !1,
        validating: !1,
        name: [],
        validated: !1
    }
}

function pn(e) {
    const {
        name: t,
        noStyle: r,
        className: n,
        dependencies: a,
        prefixCls: s,
        shouldUpdate: m,
        rules: i,
        children: g,
        required: c,
        label: $,
        messageVariables: b,
        trigger: I = "onChange",
        validateTrigger: j,
        hidden: w,
        help: x,
        layout: h
    } = e, {
        getPrefixCls: p
    } = o.useContext(ce), {
        name: E
    } = o.useContext(Q), d = Qt(g), l = typeof d == "function", v = o.useContext(_e), {
        validateTrigger: C
    } = o.useContext(xt), S = j !== void 0 ? j : C, y = t != null, f = p("form", s), u = be(f), [O, H, Y] = he(f, u);
    Ct();
    const V = o.useContext(vt),
        T = o.useRef(null),
        [A, B] = Zt({}),
        [P, L] = St(() => Pe()),
        z = F => {
            const _ = V == null ? void 0 : V.getKey(F.name);
            if (L(F.destroy ? Pe() : F, !0), r && x !== !1 && v) {
                let N = F.name;
                if (F.destroy) N = T.current || N;
                else if (_ !== void 0) {
                    const [G, M] = _;
                    N = [G].concat(W(M)), T.current = N
                }
                v(F, N)
            }
        },
        te = (F, _) => {
            B(N => {
                const G = Object.assign({}, N),
                    X = [].concat(W(F.name.slice(0, -1)), W(_)).join(un);
                return F.destroy ? delete G[X] : G[X] = F, G
            })
        },
        [J, oe] = o.useMemo(() => {
            const F = W(P.errors),
                _ = W(P.warnings);
            return Object.values(A).forEach(N => {
                F.push.apply(F, W(N.errors || [])), _.push.apply(_, W(N.warnings || []))
            }), [F, _]
        }, [A, P.errors, P.warnings]),
        me = kt();

    function U(F, _, N) {
        return r && !w ? o.createElement(Be, {
            prefixCls: f,
            hasFeedback: e.hasFeedback,
            validateStatus: e.validateStatus,
            meta: P,
            errors: J,
            warnings: oe,
            noStyle: !0,
            name: t
        }, F) : o.createElement(mn, Object.assign({
            key: "row"
        }, e, {
            className: D(n, Y, u, H),
            prefixCls: f,
            fieldId: _,
            isRequired: N,
            errors: J,
            warnings: oe,
            meta: P,
            onSubItemMetaChange: te,
            layout: h,
            name: t
        }), F)
    }
    if (!y && !l && !a) return O(U(d));
    let Z = {};
    return typeof $ == "string" ? Z.label = $ : t && (Z.label = String(t)), b && (Z = Object.assign(Object.assign({}, Z), b)), O(o.createElement(Ot, Object.assign({}, e, {
        messageVariables: Z,
        trigger: I,
        validateTrigger: S,
        onMetaChange: z
    }), (F, _, N) => {
        const G = fe(t).length && _ ? _.name : [],
            M = Pt(G, E),
            X = c !== void 0 ? c : !!(i != null && i.some(R => {
                if (R && typeof R == "object" && R.required && !R.warningOnly) return !0;
                if (typeof R == "function") {
                    const ne = R(N);
                    return (ne == null ? void 0 : ne.required) && !(ne != null && ne.warningOnly)
                }
                return !1
            })),
            k = Object.assign({}, F);
        let ae = null;
        if (Array.isArray(d) && y) ae = d;
        else if (!(l && (!(m || a) || y))) {
            if (!(a && !l && !y))
                if (o.isValidElement(d)) {
                    const R = Object.assign(Object.assign({}, d.props), k);
                    if (R.id || (R.id = M), x || J.length > 0 || oe.length > 0 || e.extra) {
                        const re = [];
                        (x || J.length > 0) && re.push(`${M}_help`), e.extra && re.push(`${M}_extra`), R["aria-describedby"] = re.join(" ")
                    }
                    J.length > 0 && (R["aria-invalid"] = "true"), X && (R["aria-required"] = "true"), wt(d) && (R.ref = me(G, d)), new Set([].concat(W(fe(I)), W(fe(S)))).forEach(re => {
                        R[re] = (...ye) => {
                            var $e, xe, ue, Ce, de;
                            (ue = k[re]) === null || ue === void 0 || ($e = ue).call.apply($e, [k].concat(ye)), (de = (Ce = d.props)[re]) === null || de === void 0 || (xe = de).call.apply(xe, [Ce].concat(ye))
                        }
                    });
                    const Xe = [R["aria-required"], R["aria-invalid"], R["aria-describedby"]];
                    ae = o.createElement(fn, {
                        control: k,
                        update: d,
                        childProps: Xe
                    }, Et(d, R))
                } else l && (m || a) && !y ? ae = d(N) : ae = d
        }
        return U(ae, M, X)
    }))
}
const Ge = pn;
Ge.useStatus = De;
var gn = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
    return r
};
const bn = e => {
    var {
        prefixCls: t,
        children: r
    } = e, n = gn(e, ["prefixCls", "children"]);
    const {
        getPrefixCls: a
    } = o.useContext(ce), s = a("form", t), m = o.useMemo(() => ({
        prefixCls: s,
        status: "error"
    }), [s]);
    return o.createElement(It, Object.assign({}, n), (i, g, c) => o.createElement(ge.Provider, {
        value: m
    }, r(i.map($ => Object.assign(Object.assign({}, $), {
        fieldKey: $.key
    })), g, {
        errors: c.errors,
        warnings: c.warnings
    })))
};

function hn() {
    const {
        form: e
    } = o.useContext(Q);
    return e
}
const ee = Ut;
ee.Item = Ge;
ee.List = bn;
ee.ErrorList = qe;
ee.useForm = Le;
ee.useFormInstance = hn;
ee.useWatch = jt;
ee.Provider = Re;
ee.create = () => {};
export {
    ee as F
};