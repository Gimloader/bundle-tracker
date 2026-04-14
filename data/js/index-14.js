import {
    r as o,
    I as Ye,
    _ as Ze,
    cU as et,
    bD as je,
    ak as tt,
    ai as nt,
    am as Y,
    aQ as ot,
    aC as he,
    bh as st,
    aO as rt,
    cV as Te,
    bA as it,
    aF as Ie,
    bf as U,
    aK as $e,
    al as lt,
    bd as at,
    aS as _e,
    aG as xe,
    bm as ct
} from "./_index.js";
import {
    R as ut
} from "./EditOutlined.js";
import {
    i as Se
} from "./styleChecker.js";
import {
    T as pe
} from "./index-5.js";
import {
    T as dt
} from "./index-3.js";
import {
    c as pt
} from "./index-2.js";
import {
    R as ft
} from "./CheckOutlined.js";
import {
    R as mt
} from "./CopyOutlined.js";
const gt = (e, n = !1) => n && e == null ? [] : Array.isArray(e) ? e : [e];
var bt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "enter",
        theme: "outlined"
    },
    yt = function(n, s) {
        return o.createElement(Ye, Ze({}, n, {
            ref: s,
            icon: bt
        }))
    },
    vt = o.forwardRef(yt);
const Et = (e, n, s, t) => {
        const {
            titleMarginBottom: r,
            fontWeightStrong: l
        } = t;
        return {
            marginBottom: r,
            color: s,
            fontWeight: l,
            fontSize: e,
            lineHeight: n
        }
    },
    ht = e => {
        const n = [1, 2, 3, 4, 5],
            s = {};
        return n.forEach(t => {
            s[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `] = Et(e[`fontSizeHeading${t}`], e[`lineHeightHeading${t}`], e.colorTextHeading, e)
        }), s
    },
    xt = e => {
        const {
            componentCls: n
        } = e;
        return {
            "a&, a": Object.assign(Object.assign({}, je(e)), {
                userSelect: "text",
                [`&[disabled], &${n}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed",
                    "&:active, &:hover": {
                        color: e.colorTextDisabled
                    },
                    "&:active": {
                        pointerEvents: "none"
                    }
                }
            })
        }
    },
    St = e => ({
        code: {
            margin: "0 0.2em",
            paddingInline: "0.4em",
            paddingBlock: "0.2em 0.1em",
            fontSize: "85%",
            fontFamily: e.fontFamilyCode,
            background: "rgba(150, 150, 150, 0.1)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderRadius: 3
        },
        kbd: {
            margin: "0 0.2em",
            paddingInline: "0.4em",
            paddingBlock: "0.15em 0.1em",
            fontSize: "90%",
            fontFamily: e.fontFamilyCode,
            background: "rgba(150, 150, 150, 0.06)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderBottomWidth: 2,
            borderRadius: 3
        },
        mark: {
            padding: 0,
            backgroundColor: et[2]
        },
        "u, ins": {
            textDecoration: "underline",
            textDecorationSkipInk: "auto"
        },
        "s, del": {
            textDecoration: "line-through"
        },
        strong: {
            fontWeight: e.fontWeightStrong
        },
        "ul, ol": {
            marginInline: 0,
            marginBlock: "0 1em",
            padding: 0,
            li: {
                marginInline: "20px 0",
                marginBlock: 0,
                paddingInline: "4px 0",
                paddingBlock: 0
            }
        },
        ul: {
            listStyleType: "circle",
            ul: {
                listStyleType: "disc"
            }
        },
        ol: {
            listStyleType: "decimal"
        },
        "pre, blockquote": {
            margin: "1em 0"
        },
        pre: {
            padding: "0.4em 0.6em",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            background: "rgba(150, 150, 150, 0.1)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderRadius: 3,
            fontFamily: e.fontFamilyCode,
            code: {
                display: "inline",
                margin: 0,
                padding: 0,
                fontSize: "inherit",
                fontFamily: "inherit",
                background: "transparent",
                border: 0
            }
        },
        blockquote: {
            paddingInline: "0.6em 0",
            paddingBlock: 0,
            borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
            opacity: .85
        }
    }),
    Ot = e => {
        const {
            componentCls: n,
            paddingSM: s
        } = e, t = s;
        return {
            "&-edit-content": {
                position: "relative",
                "div&": {
                    insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                    marginTop: e.calc(t).mul(-1).equal(),
                    marginBottom: `calc(1em - ${tt(t)})`
                },
                [`${n}-edit-content-confirm`]: {
                    position: "absolute",
                    insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
                    insetBlockEnd: e.marginXS,
                    color: e.colorIcon,
                    fontWeight: "normal",
                    fontSize: e.fontSize,
                    fontStyle: "normal",
                    pointerEvents: "none"
                },
                textarea: {
                    margin: "0!important",
                    MozTransition: "none",
                    height: "1em"
                }
            }
        }
    },
    Ct = e => ({
        [`${e.componentCls}-copy-success`]: {
            "\n    &,\n    &:hover,\n    &:focus": {
                color: e.colorSuccess
            }
        },
        [`${e.componentCls}-copy-icon-only`]: {
            marginInlineStart: 0
        }
    }),
    wt = () => ({
        "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
            display: "inline-block",
            maxWidth: "100%"
        },
        "&-ellipsis-single-line": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            "a&, span&": {
                verticalAlign: "bottom"
            },
            "> code": {
                paddingBlock: 0,
                maxWidth: "calc(100% - 1.2em)",
                display: "inline-block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                verticalAlign: "bottom",
                boxSizing: "content-box"
            }
        },
        "&-ellipsis-multiple-line": {
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
        }
    }),
    Rt = e => {
        const {
            componentCls: n,
            titleMarginTop: s
        } = e;
        return {
            [n]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: e.colorText,
                wordBreak: "break-word",
                lineHeight: e.lineHeight,
                [`&${n}-secondary`]: {
                    color: e.colorTextDescription
                },
                [`&${n}-success`]: {
                    color: e.colorSuccessText
                },
                [`&${n}-warning`]: {
                    color: e.colorWarningText
                },
                [`&${n}-danger`]: {
                    color: e.colorErrorText,
                    "a&:active, a&:focus": {
                        color: e.colorErrorTextActive
                    },
                    "a&:hover": {
                        color: e.colorErrorTextHover
                    }
                },
                [`&${n}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed",
                    userSelect: "none"
                },
                "\n        div&,\n        p\n      ": {
                    marginBottom: "1em"
                }
            }, ht(e)), {
                [`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]: {
                    marginTop: s
                },
                "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
                    "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
                        marginTop: s
                    }
                }
            }), St(e)), xt(e)), {
                [`
        ${n}-expand,
        ${n}-collapse,
        ${n}-edit,
        ${n}-copy
      `]: Object.assign(Object.assign({}, je(e)), {
                    marginInlineStart: e.marginXXS
                })
            }), Ot(e)), Ct(e)), wt()), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }
    },
    jt = () => ({
        titleMarginTop: "1.2em",
        titleMarginBottom: "0.5em"
    }),
    Le = nt("Typography", e => [Rt(e)], jt),
    Tt = e => {
        const {
            prefixCls: n,
            "aria-label": s,
            className: t,
            style: r,
            direction: l,
            maxLength: m,
            autoSize: v = !0,
            value: a,
            onSave: c,
            onCancel: d,
            onEnd: b,
            component: p,
            enterIcon: C = o.createElement(vt, null)
        } = e, w = o.useRef(null), R = o.useRef(!1), $ = o.useRef(null), [f, _] = o.useState(a);
        o.useEffect(() => {
            _(a)
        }, [a]), o.useEffect(() => {
            var g;
            if (!((g = w.current) === null || g === void 0) && g.resizableTextArea) {
                const {
                    textArea: h
                } = w.current.resizableTextArea;
                h.focus();
                const {
                    length: E
                } = h.value;
                h.setSelectionRange(E, E)
            }
        }, []);
        const H = ({
                target: g
            }) => {
                _(g.value.replace(/[\n\r]/g, ""))
            },
            x = () => {
                R.current = !0
            },
            S = () => {
                R.current = !1
            },
            T = ({
                keyCode: g
            }) => {
                R.current || ($.current = g)
            },
            y = () => {
                c(f.trim())
            },
            B = ({
                keyCode: g,
                ctrlKey: h,
                altKey: E,
                metaKey: A,
                shiftKey: j
            }) => {
                $.current !== g || R.current || h || E || A || j || (g === he.ENTER ? (y(), b == null || b()) : g === he.ESC && d())
            },
            F = () => {
                y()
            },
            [z, M, V] = Le(n),
            N = Y(n, `${n}-edit-content`, {
                [`${n}-rtl`]: l === "rtl",
                [`${n}-${p}`]: !!p
            }, t, M, V);
        return z(o.createElement("div", {
            className: N,
            style: r
        }, o.createElement(dt, {
            ref: w,
            maxLength: m,
            value: f,
            onChange: H,
            onKeyDown: T,
            onKeyUp: B,
            onCompositionStart: x,
            onCompositionEnd: S,
            onBlur: F,
            "aria-label": s,
            rows: 1,
            autoSize: v
        }), C !== null ? ot(C, {
            className: `${n}-edit-content-confirm`
        }) : null))
    };
var It = function(e, n, s, t) {
    function r(l) {
        return l instanceof s ? l : new s(function(m) {
            m(l)
        })
    }
    return new(s || (s = Promise))(function(l, m) {
        function v(d) {
            try {
                c(t.next(d))
            } catch (b) {
                m(b)
            }
        }

        function a(d) {
            try {
                c(t.throw(d))
            } catch (b) {
                m(b)
            }
        }

        function c(d) {
            d.done ? l(d.value) : r(d.value).then(v, a)
        }
        c((t = t.apply(e, n || [])).next())
    })
};
const $t = ({
    copyConfig: e,
    children: n
}) => {
    const [s, t] = o.useState(!1), [r, l] = o.useState(!1), m = o.useRef(null), v = () => {
        m.current && clearTimeout(m.current)
    }, a = {};
    e.format && (a.format = e.format), o.useEffect(() => v, []);
    const c = st(d => It(void 0, void 0, void 0, function*() {
        var b;
        d == null || d.preventDefault(), d == null || d.stopPropagation(), l(!0);
        try {
            const p = typeof e.text == "function" ? yield e.text(): e.text;
            pt(p || gt(n, !0).join("") || "", a), l(!1), t(!0), v(), m.current = setTimeout(() => {
                t(!1)
            }, 3e3), (b = e.onCopy) === null || b === void 0 || b.call(e, d)
        } catch (p) {
            throw l(!1), p
        }
    }));
    return {
        copied: s,
        copyLoading: r,
        onClick: c
    }
};

function ie(e, n) {
    return o.useMemo(() => {
        const s = !!e;
        return [s, Object.assign(Object.assign({}, n), s && typeof e == "object" ? e : null)]
    }, [e])
}
const _t = e => {
        const n = o.useRef(void 0);
        return o.useEffect(() => {
            n.current = e
        }), n.current
    },
    Lt = (e, n, s) => o.useMemo(() => e === !0 ? {
        title: n ?? s
    } : o.isValidElement(e) ? {
        title: e
    } : typeof e == "object" ? Object.assign({
        title: n ?? s
    }, e) : {
        title: e
    }, [e, n, s]);
var Pt = function(e, n) {
    var s = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (s[t[r]] = e[t[r]]);
    return s
};
const Pe = o.forwardRef((e, n) => {
    const {
        prefixCls: s,
        component: t = "article",
        className: r,
        rootClassName: l,
        setContentRef: m,
        children: v,
        direction: a,
        style: c
    } = e, d = Pt(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
        getPrefixCls: b,
        direction: p,
        className: C,
        style: w
    } = rt("typography"), R = a ?? p, $ = m ? Te(n, m) : n, f = b("typography", s), [_, H, x] = Le(f), S = Y(f, C, {
        [`${f}-rtl`]: R === "rtl"
    }, r, l, H, x), T = Object.assign(Object.assign({}, w), c);
    return _(o.createElement(t, Object.assign({
        className: S,
        style: T,
        ref: $
    }, d), v))
});

function Oe(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e]
}

function le(e, n, s) {
    return e === !0 || e === void 0 ? n : e || s && n
}

function Mt(e) {
    const n = document.createElement("em");
    e.appendChild(n);
    const s = e.getBoundingClientRect(),
        t = n.getBoundingClientRect();
    return e.removeChild(n), s.left > t.left || t.right > s.right || s.top > t.top || t.bottom > s.bottom
}
const fe = e => ["string", "number"].includes(typeof e),
    Nt = ({
        prefixCls: e,
        copied: n,
        locale: s,
        iconOnly: t,
        tooltips: r,
        icon: l,
        tabIndex: m,
        onCopy: v,
        loading: a
    }) => {
        const c = Oe(r),
            d = Oe(l),
            {
                copied: b,
                copy: p
            } = s ?? {},
            C = n ? b : p,
            w = le(c[n ? 1 : 0], C),
            R = typeof w == "string" ? w : C;
        return o.createElement(pe, {
            title: w
        }, o.createElement("button", {
            type: "button",
            className: Y(`${e}-copy`, {
                [`${e}-copy-success`]: n,
                [`${e}-copy-icon-only`]: t
            }),
            onClick: v,
            "aria-label": R,
            tabIndex: m
        }, n ? le(d[1], o.createElement(ft, null), !0) : le(d[0], a ? o.createElement(it, null) : o.createElement(mt, null), !0)))
    },
    G = o.forwardRef(({
        style: e,
        children: n
    }, s) => {
        const t = o.useRef(null);
        return o.useImperativeHandle(s, () => ({
            isExceed: () => {
                const r = t.current;
                return r.scrollHeight > r.clientHeight
            },
            getHeight: () => t.current.clientHeight
        })), o.createElement("span", {
            "aria-hidden": !0,
            ref: t,
            style: Object.assign({
                position: "fixed",
                display: "block",
                left: 0,
                top: 0,
                pointerEvents: "none",
                backgroundColor: "rgba(255, 0, 0, 0.65)"
            }, e)
        }, n)
    }),
    At = e => e.reduce((n, s) => n + (fe(s) ? String(s).length : 1), 0);

function Ce(e, n) {
    let s = 0;
    const t = [];
    for (let r = 0; r < e.length; r += 1) {
        if (s === n) return t;
        const l = e[r],
            v = fe(l) ? String(l).length : 1,
            a = s + v;
        if (a > n) {
            const c = n - s;
            return t.push(String(l).slice(0, c)), t
        }
        t.push(l), s = a
    }
    return e
}
const ae = 0,
    ce = 1,
    ue = 2,
    de = 3,
    we = 4,
    Q = {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical"
    };

function kt(e) {
    const {
        enableMeasure: n,
        width: s,
        text: t,
        children: r,
        rows: l,
        expanded: m,
        miscDeps: v,
        onEllipsis: a
    } = e, c = o.useMemo(() => Ie(t), [t]), d = o.useMemo(() => At(c), [t]), b = o.useMemo(() => r(c, !1), [t]), [p, C] = o.useState(null), w = o.useRef(null), R = o.useRef(null), $ = o.useRef(null), f = o.useRef(null), _ = o.useRef(null), [H, x] = o.useState(!1), [S, T] = o.useState(ae), [y, B] = o.useState(0), [F, z] = o.useState(null);
    U(() => {
        T(n && s && d ? ce : ae)
    }, [s, t, l, n, c]), U(() => {
        var g, h, E, A;
        if (S === ce) {
            T(ue);
            const j = R.current && getComputedStyle(R.current).whiteSpace;
            z(j)
        } else if (S === ue) {
            const j = !!(!((g = $.current) === null || g === void 0) && g.isExceed());
            T(j ? de : we), C(j ? [0, d] : null), x(j);
            const W = ((h = $.current) === null || h === void 0 ? void 0 : h.getHeight()) || 0,
                te = l === 1 ? 0 : ((E = f.current) === null || E === void 0 ? void 0 : E.getHeight()) || 0,
                q = ((A = _.current) === null || A === void 0 ? void 0 : A.getHeight()) || 0,
                ne = Math.max(W, te + q);
            B(ne + 1), a(j)
        }
    }, [S]);
    const M = p ? Math.ceil((p[0] + p[1]) / 2) : 0;
    U(() => {
        var g;
        const [h, E] = p || [0, 0];
        if (h !== E) {
            const j = (((g = w.current) === null || g === void 0 ? void 0 : g.getHeight()) || 0) > y;
            let W = M;
            E - h === 1 && (W = j ? h : E), C(j ? [h, W] : [W, E])
        }
    }, [p, M]);
    const V = o.useMemo(() => {
            if (!n) return r(c, !1);
            if (S !== de || !p || p[0] !== p[1]) {
                const g = r(c, !1);
                return [we, ae].includes(S) ? g : o.createElement("span", {
                    style: Object.assign(Object.assign({}, Q), {
                        WebkitLineClamp: l
                    })
                }, g)
            }
            return r(m ? c : Ce(c, p[0]), H)
        }, [m, S, p, c].concat($e(v))),
        N = {
            width: s,
            margin: 0,
            padding: 0,
            whiteSpace: F === "nowrap" ? "normal" : "inherit"
        };
    return o.createElement(o.Fragment, null, V, S === ue && o.createElement(o.Fragment, null, o.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: l
        }),
        ref: $
    }, b), o.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: l - 1
        }),
        ref: f
    }, b), o.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: 1
        }),
        ref: _
    }, r([], !0))), S === de && p && p[0] !== p[1] && o.createElement(G, {
        style: Object.assign(Object.assign({}, N), {
            top: 400
        }),
        ref: w
    }, r(Ce(c, M), !0)), S === ce && o.createElement("span", {
        style: {
            whiteSpace: "inherit"
        },
        ref: R
    }))
}
const Ht = ({
    enableEllipsis: e,
    isEllipsis: n,
    children: s,
    tooltipProps: t
}) => !(t != null && t.title) || !e ? s : o.createElement(pe, Object.assign({
    open: n ? void 0 : !1
}, t), s);
var Bt = function(e, n) {
    var s = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (s[t[r]] = e[t[r]]);
    return s
};

function Wt({
    mark: e,
    code: n,
    underline: s,
    delete: t,
    strong: r,
    keyboard: l,
    italic: m
}, v) {
    let a = v;

    function c(d, b) {
        b && (a = o.createElement(d, {}, a))
    }
    return c("strong", r), c("u", s), c("del", t), c("code", n), c("mark", e), c("kbd", l), c("i", m), a
}
const Dt = "...",
    Re = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"],
    Z = o.forwardRef((e, n) => {
        var s;
        const {
            prefixCls: t,
            className: r,
            style: l,
            type: m,
            disabled: v,
            children: a,
            ellipsis: c,
            editable: d,
            copyable: b,
            component: p,
            title: C
        } = e, w = Bt(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
            getPrefixCls: R,
            direction: $
        } = o.useContext(lt), [f] = at("Text"), _ = o.useRef(null), H = o.useRef(null), x = R("typography", t), S = _e(w, Re), [T, y] = ie(d), [B, F] = xe(!1, {
            value: y.editing
        }), {
            triggerType: z = ["icon"]
        } = y, M = i => {
            var u;
            i && ((u = y.onStart) === null || u === void 0 || u.call(y)), F(i)
        }, V = _t(B);
        U(() => {
            var i;
            !B && V && ((i = H.current) === null || i === void 0 || i.focus())
        }, [B]);
        const N = i => {
                i == null || i.preventDefault(), M(!0)
            },
            g = i => {
                var u;
                (u = y.onChange) === null || u === void 0 || u.call(y, i), M(!1)
            },
            h = () => {
                var i;
                (i = y.onCancel) === null || i === void 0 || i.call(y), M(!1)
            },
            [E, A] = ie(b),
            {
                copied: j,
                copyLoading: W,
                onClick: te
            } = $t({
                copyConfig: A,
                children: a
            }),
            [q, ne] = o.useState(!1),
            [me, Me] = o.useState(!1),
            [ge, Ne] = o.useState(!1),
            [be, Ae] = o.useState(!1),
            [ke, He] = o.useState(!0),
            [D, O] = ie(c, {
                expandable: !1,
                symbol: i => i ? f == null ? void 0 : f.collapse : f == null ? void 0 : f.expand
            }),
            [k, Be] = xe(O.defaultExpanded || !1, {
                value: O.expanded
            }),
            I = D && (!k || O.expandable === "collapsible"),
            {
                rows: K = 1
            } = O,
            X = o.useMemo(() => I && (O.suffix !== void 0 || O.onEllipsis || O.expandable || T || E), [I, O, T, E]);
        U(() => {
            D && !X && (ne(Se("webkitLineClamp")), Me(Se("textOverflow")))
        }, [X, D]);
        const [L, We] = o.useState(I), ye = o.useMemo(() => X ? !1 : K === 1 ? me : q, [X, me, q]);
        U(() => {
            We(ye && I)
        }, [ye, I]);
        const ve = I && (L ? be : ge),
            De = I && K === 1 && L,
            oe = I && K > 1 && L,
            ze = (i, u) => {
                var P;
                Be(u.expanded), (P = O.onExpand) === null || P === void 0 || P.call(O, i, u)
            },
            [Ee, Ue] = o.useState(0),
            Fe = ({
                offsetWidth: i
            }) => {
                Ue(i)
            },
            Ve = i => {
                var u;
                Ne(i), ge !== i && ((u = O.onEllipsis) === null || u === void 0 || u.call(O, i))
            };
        o.useEffect(() => {
            const i = _.current;
            if (D && L && i) {
                const u = Mt(i);
                be !== u && Ae(u)
            }
        }, [D, L, a, oe, ke, Ee]), o.useEffect(() => {
            const i = _.current;
            if (typeof IntersectionObserver > "u" || !i || !L || !I) return;
            const u = new IntersectionObserver(() => {
                He(!!i.offsetParent)
            });
            return u.observe(i), () => {
                u.disconnect()
            }
        }, [L, I]);
        const se = Lt(O.tooltip, y.text, a),
            J = o.useMemo(() => {
                if (!(!D || L)) return [y.text, a, C, se.title].find(fe)
            }, [D, L, C, se.title, ve]);
        if (B) return o.createElement(Tt, {
            value: (s = y.text) !== null && s !== void 0 ? s : typeof a == "string" ? a : "",
            onSave: g,
            onCancel: h,
            onEnd: y.onEnd,
            prefixCls: x,
            className: r,
            style: l,
            direction: $,
            component: p,
            maxLength: y.maxLength,
            autoSize: y.autoSize,
            enterIcon: y.enterIcon
        });
        const Ke = () => {
                const {
                    expandable: i,
                    symbol: u
                } = O;
                return i ? o.createElement("button", {
                    type: "button",
                    key: "expand",
                    className: `${x}-${k?"collapse":"expand"}`,
                    onClick: P => ze(P, {
                        expanded: !k
                    }),
                    "aria-label": k ? f.collapse : f == null ? void 0 : f.expand
                }, typeof u == "function" ? u(k) : u) : null
            },
            qe = () => {
                if (!T) return;
                const {
                    icon: i,
                    tooltip: u,
                    tabIndex: P
                } = y, re = Ie(u)[0] || (f == null ? void 0 : f.edit), Qe = typeof re == "string" ? re : "";
                return z.includes("icon") ? o.createElement(pe, {
                    key: "edit",
                    title: u === !1 ? "" : re
                }, o.createElement("button", {
                    type: "button",
                    ref: H,
                    className: `${x}-edit`,
                    onClick: N,
                    "aria-label": Qe,
                    tabIndex: P
                }, i || o.createElement(ut, {
                    role: "button"
                }))) : null
            },
            Xe = () => E ? o.createElement(Nt, Object.assign({
                key: "copy"
            }, A, {
                prefixCls: x,
                copied: j,
                locale: f,
                onCopy: te,
                loading: W,
                iconOnly: a == null
            })) : null,
            Je = i => [i && Ke(), qe(), Xe()],
            Ge = i => [i && !k && o.createElement("span", {
                "aria-hidden": !0,
                key: "ellipsis"
            }, Dt), O.suffix, Je(i)];
        return o.createElement(ct, {
            onResize: Fe,
            disabled: !I
        }, i => o.createElement(Ht, {
            tooltipProps: se,
            enableEllipsis: I,
            isEllipsis: ve
        }, o.createElement(Pe, Object.assign({
            className: Y({
                [`${x}-${m}`]: m,
                [`${x}-disabled`]: v,
                [`${x}-ellipsis`]: D,
                [`${x}-ellipsis-single-line`]: De,
                [`${x}-ellipsis-multiple-line`]: oe
            }, r),
            prefixCls: t,
            style: Object.assign(Object.assign({}, l), {
                WebkitLineClamp: oe ? K : void 0
            }),
            component: p,
            ref: Te(i, _, n),
            direction: $,
            onClick: z.includes("text") ? N : void 0,
            "aria-label": J == null ? void 0 : J.toString(),
            title: C
        }, S), o.createElement(kt, {
            enableMeasure: I && !L,
            text: a,
            rows: K,
            width: Ee,
            onEllipsis: Ve,
            expanded: k,
            miscDeps: [j, k, W, T, E, f].concat($e(Re.map(u => e[u])))
        }, (u, P) => Wt(e, o.createElement(o.Fragment, null, u.length > 0 && P && !k && J ? o.createElement("span", {
            key: "show-content",
            "aria-hidden": !0
        }, u) : u, Ge(P)))))))
    });
var zt = function(e, n) {
    var s = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (s[t[r]] = e[t[r]]);
    return s
};
const Ut = o.forwardRef((e, n) => {
        var {
            ellipsis: s,
            rel: t
        } = e, r = zt(e, ["ellipsis", "rel"]);
        const l = Object.assign(Object.assign({}, r), {
            rel: t === void 0 && r.target === "_blank" ? "noopener noreferrer" : t
        });
        return delete l.navigate, o.createElement(Z, Object.assign({}, l, {
            ref: n,
            ellipsis: !!s,
            component: "a"
        }))
    }),
    Ft = o.forwardRef((e, n) => o.createElement(Z, Object.assign({
        ref: n
    }, e, {
        component: "div"
    })));
var Vt = function(e, n) {
    var s = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (s[t[r]] = e[t[r]]);
    return s
};
const Kt = (e, n) => {
        var {
            ellipsis: s
        } = e, t = Vt(e, ["ellipsis"]);
        const r = o.useMemo(() => s && typeof s == "object" ? _e(s, ["expandable", "rows"]) : s, [s]);
        return o.createElement(Z, Object.assign({
            ref: n
        }, t, {
            ellipsis: r,
            component: "span"
        }))
    },
    qt = o.forwardRef(Kt);
var Xt = function(e, n) {
    var s = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (s[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (s[t[r]] = e[t[r]]);
    return s
};
const Jt = [1, 2, 3, 4, 5],
    Gt = o.forwardRef((e, n) => {
        const {
            level: s = 1
        } = e, t = Xt(e, ["level"]), r = Jt.includes(s) ? `h${s}` : "h1";
        return o.createElement(Z, Object.assign({
            ref: n
        }, t, {
            component: r
        }))
    }),
    ee = Pe;
ee.Text = qt;
ee.Link = Ut;
ee.Title = Gt;
ee.Paragraph = Ft;
export {
    ee as T
};