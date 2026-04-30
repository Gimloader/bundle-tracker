import {
    r,
    I as Ye,
    _ as Ze,
    cT as et,
    bE as je,
    ai as tt,
    am as Y,
    aQ as nt,
    aC as he,
    bf as ot,
    aO as rt,
    cU as Te,
    bA as st,
    aF as Ie,
    bg as U,
    aK as _e,
    al as it,
    bd as lt,
    aS as $e,
    aG as xe,
    bm as at
} from "./_index.js";
import {
    R as ct
} from "./EditOutlined.js";
import {
    i as Se
} from "./styleChecker.js";
import {
    T as pe
} from "./index-5.js";
import {
    T as ut
} from "./index-3.js";
import {
    c as dt
} from "./index-2.js";
import {
    R as pt
} from "./CheckOutlined.js";
import {
    R as ft
} from "./CopyOutlined.js";
const mt = (e, n = !1) => n && e == null ? [] : Array.isArray(e) ? e : [e];
var gt = {
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
    bt = function(n, o) {
        return r.createElement(Ye, Ze({}, n, {
            ref: o,
            icon: gt
        }))
    },
    yt = r.forwardRef(bt);
const vt = (e, n, o, t) => {
        const {
            titleMarginBottom: s,
            fontWeightStrong: l
        } = t;
        return {
            marginBottom: s,
            color: o,
            fontWeight: l,
            fontSize: e,
            lineHeight: n
        }
    },
    Et = e => {
        const n = [1, 2, 3, 4, 5],
            o = {};
        return n.forEach(t => {
            o[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `] = vt(e[`fontSizeHeading${t}`], e[`lineHeightHeading${t}`], e.colorTextHeading, e)
        }), o
    },
    ht = e => {
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
    xt = e => ({
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
    St = e => {
        const {
            componentCls: n,
            paddingSM: o
        } = e, t = o;
        return {
            "&-edit-content": {
                position: "relative",
                "div&": {
                    insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                    insetBlockStart: e.calc(t).div(-2).add(1).equal(),
                    marginBottom: e.calc(t).div(2).sub(2).equal()
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
    Ot = e => ({
        [`${e.componentCls}-copy-success`]: {
            "\n    &,\n    &:hover,\n    &:focus": {
                color: e.colorSuccess
            }
        },
        [`${e.componentCls}-copy-icon-only`]: {
            marginInlineStart: 0
        }
    }),
    Ct = () => ({
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
    wt = e => {
        const {
            componentCls: n,
            titleMarginTop: o
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
            }, Et(e)), {
                [`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]: {
                    marginTop: o
                },
                "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
                    "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
                        marginTop: o
                    }
                }
            }), xt(e)), ht(e)), {
                [`
        ${n}-expand,
        ${n}-collapse,
        ${n}-edit,
        ${n}-copy
      `]: Object.assign(Object.assign({}, je(e)), {
                    marginInlineStart: e.marginXXS
                })
            }), St(e)), Ot(e)), Ct()), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }
    },
    Rt = () => ({
        titleMarginTop: "1.2em",
        titleMarginBottom: "0.5em"
    }),
    Pe = tt("Typography", wt, Rt),
    jt = e => {
        const {
            prefixCls: n,
            "aria-label": o,
            className: t,
            style: s,
            direction: l,
            maxLength: p,
            autoSize: v = !0,
            value: a,
            onSave: c,
            onCancel: d,
            onEnd: b,
            component: f,
            enterIcon: C = r.createElement(yt, null)
        } = e, w = r.useRef(null), R = r.useRef(!1), _ = r.useRef(null), [m, $] = r.useState(a);
        r.useEffect(() => {
            $(a)
        }, [a]), r.useEffect(() => {
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
        const k = ({
                target: g
            }) => {
                $(g.value.replace(/[\n\r]/g, ""))
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
                R.current || (_.current = g)
            },
            y = () => {
                c(m.trim())
            },
            B = ({
                keyCode: g,
                ctrlKey: h,
                altKey: E,
                metaKey: A,
                shiftKey: j
            }) => {
                _.current !== g || R.current || h || E || A || j || (g === he.ENTER ? (y(), b == null || b()) : g === he.ESC && d())
            },
            F = () => {
                y()
            },
            [D, M, V] = Pe(n),
            N = Y(n, `${n}-edit-content`, {
                [`${n}-rtl`]: l === "rtl",
                [`${n}-${f}`]: !!f
            }, t, M, V);
        return D(r.createElement("div", {
            className: N,
            style: s
        }, r.createElement(ut, {
            ref: w,
            maxLength: p,
            value: m,
            onChange: k,
            onKeyDown: T,
            onKeyUp: B,
            onCompositionStart: x,
            onCompositionEnd: S,
            onBlur: F,
            "aria-label": o,
            rows: 1,
            autoSize: v
        }), C !== null ? nt(C, {
            className: `${n}-edit-content-confirm`
        }) : null))
    };
var Tt = function(e, n, o, t) {
    function s(l) {
        return l instanceof o ? l : new o(function(p) {
            p(l)
        })
    }
    return new(o || (o = Promise))(function(l, p) {
        function v(d) {
            try {
                c(t.next(d))
            } catch (b) {
                p(b)
            }
        }

        function a(d) {
            try {
                c(t.throw(d))
            } catch (b) {
                p(b)
            }
        }

        function c(d) {
            d.done ? l(d.value) : s(d.value).then(v, a)
        }
        c((t = t.apply(e, n || [])).next())
    })
};
const It = ({
    copyConfig: e,
    children: n
}) => {
    const [o, t] = r.useState(!1), [s, l] = r.useState(!1), p = r.useRef(null), v = () => {
        p.current && clearTimeout(p.current)
    }, a = {};
    e.format && (a.format = e.format), r.useEffect(() => v, []);
    const c = ot(d => Tt(void 0, void 0, void 0, function*() {
        var b;
        d == null || d.preventDefault(), d == null || d.stopPropagation(), l(!0);
        try {
            const f = typeof e.text == "function" ? yield e.text(): e.text;
            dt(f || mt(n, !0).join("") || "", a), l(!1), t(!0), v(), p.current = setTimeout(() => {
                t(!1)
            }, 3e3), (b = e.onCopy) === null || b === void 0 || b.call(e, d)
        } catch (f) {
            throw l(!1), f
        }
    }));
    return {
        copied: o,
        copyLoading: s,
        onClick: c
    }
};

function ie(e, n) {
    return r.useMemo(() => {
        const o = !!e;
        return [o, Object.assign(Object.assign({}, n), o && typeof e == "object" ? e : null)]
    }, [e])
}
const _t = e => {
        const n = r.useRef(void 0);
        return r.useEffect(() => {
            n.current = e
        }), n.current
    },
    $t = (e, n, o) => r.useMemo(() => e === !0 ? {
        title: n ?? o
    } : r.isValidElement(e) ? {
        title: e
    } : typeof e == "object" ? Object.assign({
        title: n ?? o
    }, e) : {
        title: e
    }, [e, n, o]);
var Pt = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const Le = r.forwardRef((e, n) => {
    const {
        prefixCls: o,
        component: t = "article",
        className: s,
        rootClassName: l,
        setContentRef: p,
        children: v,
        direction: a,
        style: c
    } = e, d = Pt(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
        getPrefixCls: b,
        direction: f,
        className: C,
        style: w
    } = rt("typography"), R = a ?? f, _ = p ? Te(n, p) : n, m = b("typography", o), [$, k, x] = Pe(m), S = Y(m, C, {
        [`${m}-rtl`]: R === "rtl"
    }, s, l, k, x), T = Object.assign(Object.assign({}, w), c);
    return $(r.createElement(t, Object.assign({
        className: S,
        style: T,
        ref: _
    }, d), v))
});

function Oe(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e]
}

function le(e, n, o) {
    return e === !0 || e === void 0 ? n : e || o && n
}

function Lt(e) {
    const n = document.createElement("em");
    e.appendChild(n);
    const o = e.getBoundingClientRect(),
        t = n.getBoundingClientRect();
    return e.removeChild(n), o.left > t.left || t.right > o.right || o.top > t.top || t.bottom > o.bottom
}
const fe = e => ["string", "number"].includes(typeof e),
    Mt = ({
        prefixCls: e,
        copied: n,
        locale: o,
        iconOnly: t,
        tooltips: s,
        icon: l,
        tabIndex: p,
        onCopy: v,
        loading: a
    }) => {
        const c = Oe(s),
            d = Oe(l),
            {
                copied: b,
                copy: f
            } = o ?? {},
            C = n ? b : f,
            w = le(c[n ? 1 : 0], C),
            R = typeof w == "string" ? w : C;
        return r.createElement(pe, {
            title: w
        }, r.createElement("button", {
            type: "button",
            className: Y(`${e}-copy`, {
                [`${e}-copy-success`]: n,
                [`${e}-copy-icon-only`]: t
            }),
            onClick: v,
            "aria-label": R,
            tabIndex: p
        }, n ? le(d[1], r.createElement(pt, null), !0) : le(d[0], a ? r.createElement(st, null) : r.createElement(ft, null), !0)))
    },
    G = r.forwardRef(({
        style: e,
        children: n
    }, o) => {
        const t = r.useRef(null);
        return r.useImperativeHandle(o, () => ({
            isExceed: () => {
                const s = t.current;
                return s.scrollHeight > s.clientHeight
            },
            getHeight: () => t.current.clientHeight
        })), r.createElement("span", {
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
    Nt = e => e.reduce((n, o) => n + (fe(o) ? String(o).length : 1), 0);

function Ce(e, n) {
    let o = 0;
    const t = [];
    for (let s = 0; s < e.length; s += 1) {
        if (o === n) return t;
        const l = e[s],
            v = fe(l) ? String(l).length : 1,
            a = o + v;
        if (a > n) {
            const c = n - o;
            return t.push(String(l).slice(0, c)), t
        }
        t.push(l), o = a
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

function At(e) {
    const {
        enableMeasure: n,
        width: o,
        text: t,
        children: s,
        rows: l,
        expanded: p,
        miscDeps: v,
        onEllipsis: a
    } = e, c = r.useMemo(() => Ie(t), [t]), d = r.useMemo(() => Nt(c), [t]), b = r.useMemo(() => s(c, !1), [t]), [f, C] = r.useState(null), w = r.useRef(null), R = r.useRef(null), _ = r.useRef(null), m = r.useRef(null), $ = r.useRef(null), [k, x] = r.useState(!1), [S, T] = r.useState(ae), [y, B] = r.useState(0), [F, D] = r.useState(null);
    U(() => {
        T(n && o && d ? ce : ae)
    }, [o, t, l, n, c]), U(() => {
        var g, h, E, A;
        if (S === ce) {
            T(ue);
            const j = R.current && getComputedStyle(R.current).whiteSpace;
            D(j)
        } else if (S === ue) {
            const j = !!(!((g = _.current) === null || g === void 0) && g.isExceed());
            T(j ? de : we), C(j ? [0, d] : null), x(j);
            const W = ((h = _.current) === null || h === void 0 ? void 0 : h.getHeight()) || 0,
                te = l === 1 ? 0 : ((E = m.current) === null || E === void 0 ? void 0 : E.getHeight()) || 0,
                q = ((A = $.current) === null || A === void 0 ? void 0 : A.getHeight()) || 0,
                ne = Math.max(W, te + q);
            B(ne + 1), a(j)
        }
    }, [S]);
    const M = f ? Math.ceil((f[0] + f[1]) / 2) : 0;
    U(() => {
        var g;
        const [h, E] = f || [0, 0];
        if (h !== E) {
            const j = (((g = w.current) === null || g === void 0 ? void 0 : g.getHeight()) || 0) > y;
            let W = M;
            E - h === 1 && (W = j ? h : E), C(j ? [h, W] : [W, E])
        }
    }, [f, M]);
    const V = r.useMemo(() => {
            if (!n) return s(c, !1);
            if (S !== de || !f || f[0] !== f[1]) {
                const g = s(c, !1);
                return [we, ae].includes(S) ? g : r.createElement("span", {
                    style: Object.assign(Object.assign({}, Q), {
                        WebkitLineClamp: l
                    })
                }, g)
            }
            return s(p ? c : Ce(c, f[0]), k)
        }, [p, S, f, c].concat(_e(v))),
        N = {
            width: o,
            margin: 0,
            padding: 0,
            whiteSpace: F === "nowrap" ? "normal" : "inherit"
        };
    return r.createElement(r.Fragment, null, V, S === ue && r.createElement(r.Fragment, null, r.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: l
        }),
        ref: _
    }, b), r.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: l - 1
        }),
        ref: m
    }, b), r.createElement(G, {
        style: Object.assign(Object.assign(Object.assign({}, N), Q), {
            WebkitLineClamp: 1
        }),
        ref: $
    }, s([], !0))), S === de && f && f[0] !== f[1] && r.createElement(G, {
        style: Object.assign(Object.assign({}, N), {
            top: 400
        }),
        ref: w
    }, s(Ce(c, M), !0)), S === ce && r.createElement("span", {
        style: {
            whiteSpace: "inherit"
        },
        ref: R
    }))
}
const Ht = ({
    enableEllipsis: e,
    isEllipsis: n,
    children: o,
    tooltipProps: t
}) => !(t != null && t.title) || !e ? o : r.createElement(pe, Object.assign({
    open: n ? void 0 : !1
}, t), o);
var kt = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};

function Bt({
    mark: e,
    code: n,
    underline: o,
    delete: t,
    strong: s,
    keyboard: l,
    italic: p
}, v) {
    let a = v;

    function c(d, b) {
        b && (a = r.createElement(d, {}, a))
    }
    return c("strong", s), c("u", o), c("del", t), c("code", n), c("mark", e), c("kbd", l), c("i", p), a
}
const Wt = "...",
    Re = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"],
    Z = r.forwardRef((e, n) => {
        var o;
        const {
            prefixCls: t,
            className: s,
            style: l,
            type: p,
            disabled: v,
            children: a,
            ellipsis: c,
            editable: d,
            copyable: b,
            component: f,
            title: C
        } = e, w = kt(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
            getPrefixCls: R,
            direction: _
        } = r.useContext(it), [m] = lt("Text"), $ = r.useRef(null), k = r.useRef(null), x = R("typography", t), S = $e(w, Re), [T, y] = ie(d), [B, F] = xe(!1, {
            value: y.editing
        }), {
            triggerType: D = ["icon"]
        } = y, M = i => {
            var u;
            i && ((u = y.onStart) === null || u === void 0 || u.call(y)), F(i)
        }, V = _t(B);
        U(() => {
            var i;
            !B && V && ((i = k.current) === null || i === void 0 || i.focus())
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
            } = It({
                copyConfig: A,
                children: a
            }),
            [q, ne] = r.useState(!1),
            [me, Me] = r.useState(!1),
            [ge, Ne] = r.useState(!1),
            [be, Ae] = r.useState(!1),
            [He, ke] = r.useState(!0),
            [z, O] = ie(c, {
                expandable: !1,
                symbol: i => i ? m == null ? void 0 : m.collapse : m == null ? void 0 : m.expand
            }),
            [H, Be] = xe(O.defaultExpanded || !1, {
                value: O.expanded
            }),
            I = z && (!H || O.expandable === "collapsible"),
            {
                rows: K = 1
            } = O,
            X = r.useMemo(() => I && (O.suffix !== void 0 || O.onEllipsis || O.expandable || T || E), [I, O, T, E]);
        U(() => {
            z && !X && (ne(Se("webkitLineClamp")), Me(Se("textOverflow")))
        }, [X, z]);
        const [P, We] = r.useState(I), ye = r.useMemo(() => X ? !1 : K === 1 ? me : q, [X, me, q]);
        U(() => {
            We(ye && I)
        }, [ye, I]);
        const ve = I && (P ? be : ge),
            ze = I && K === 1 && P,
            oe = I && K > 1 && P,
            De = (i, u) => {
                var L;
                Be(u.expanded), (L = O.onExpand) === null || L === void 0 || L.call(O, i, u)
            },
            [Ee, Ue] = r.useState(0),
            Fe = ({
                offsetWidth: i
            }) => {
                Ue(i)
            },
            Ve = i => {
                var u;
                Ne(i), ge !== i && ((u = O.onEllipsis) === null || u === void 0 || u.call(O, i))
            };
        r.useEffect(() => {
            const i = $.current;
            if (z && P && i) {
                const u = Lt(i);
                be !== u && Ae(u)
            }
        }, [z, P, a, oe, He, Ee]), r.useEffect(() => {
            const i = $.current;
            if (typeof IntersectionObserver > "u" || !i || !P || !I) return;
            const u = new IntersectionObserver(() => {
                ke(!!i.offsetParent)
            });
            return u.observe(i), () => {
                u.disconnect()
            }
        }, [P, I]);
        const re = $t(O.tooltip, y.text, a),
            J = r.useMemo(() => {
                if (!(!z || P)) return [y.text, a, C, re.title].find(fe)
            }, [z, P, C, re.title, ve]);
        if (B) return r.createElement(jt, {
            value: (o = y.text) !== null && o !== void 0 ? o : typeof a == "string" ? a : "",
            onSave: g,
            onCancel: h,
            onEnd: y.onEnd,
            prefixCls: x,
            className: s,
            style: l,
            direction: _,
            component: f,
            maxLength: y.maxLength,
            autoSize: y.autoSize,
            enterIcon: y.enterIcon
        });
        const Ke = () => {
                const {
                    expandable: i,
                    symbol: u
                } = O;
                return i ? r.createElement("button", {
                    type: "button",
                    key: "expand",
                    className: `${x}-${H?"collapse":"expand"}`,
                    onClick: L => De(L, {
                        expanded: !H
                    }),
                    "aria-label": H ? m.collapse : m == null ? void 0 : m.expand
                }, typeof u == "function" ? u(H) : u) : null
            },
            qe = () => {
                if (!T) return;
                const {
                    icon: i,
                    tooltip: u,
                    tabIndex: L
                } = y, se = Ie(u)[0] || (m == null ? void 0 : m.edit), Qe = typeof se == "string" ? se : "";
                return D.includes("icon") ? r.createElement(pe, {
                    key: "edit",
                    title: u === !1 ? "" : se
                }, r.createElement("button", {
                    type: "button",
                    ref: k,
                    className: `${x}-edit`,
                    onClick: N,
                    "aria-label": Qe,
                    tabIndex: L
                }, i || r.createElement(ct, {
                    role: "button"
                }))) : null
            },
            Xe = () => E ? r.createElement(Mt, Object.assign({
                key: "copy"
            }, A, {
                prefixCls: x,
                copied: j,
                locale: m,
                onCopy: te,
                loading: W,
                iconOnly: a == null
            })) : null,
            Je = i => [i && Ke(), qe(), Xe()],
            Ge = i => [i && !H && r.createElement("span", {
                "aria-hidden": !0,
                key: "ellipsis"
            }, Wt), O.suffix, Je(i)];
        return r.createElement(at, {
            onResize: Fe,
            disabled: !I
        }, i => r.createElement(Ht, {
            tooltipProps: re,
            enableEllipsis: I,
            isEllipsis: ve
        }, r.createElement(Le, Object.assign({
            className: Y({
                [`${x}-${p}`]: p,
                [`${x}-disabled`]: v,
                [`${x}-ellipsis`]: z,
                [`${x}-ellipsis-single-line`]: ze,
                [`${x}-ellipsis-multiple-line`]: oe
            }, s),
            prefixCls: t,
            style: Object.assign(Object.assign({}, l), {
                WebkitLineClamp: oe ? K : void 0
            }),
            component: f,
            ref: Te(i, $, n),
            direction: _,
            onClick: D.includes("text") ? N : void 0,
            "aria-label": J == null ? void 0 : J.toString(),
            title: C
        }, S), r.createElement(At, {
            enableMeasure: I && !P,
            text: a,
            rows: K,
            width: Ee,
            onEllipsis: Ve,
            expanded: H,
            miscDeps: [j, H, W, T, E, m].concat(_e(Re.map(u => e[u])))
        }, (u, L) => Bt(e, r.createElement(r.Fragment, null, u.length > 0 && L && !H && J ? r.createElement("span", {
            key: "show-content",
            "aria-hidden": !0
        }, u) : u, Ge(L)))))))
    });
var zt = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const Dt = r.forwardRef((e, n) => {
    const {
        ellipsis: o,
        rel: t,
        children: s,
        navigate: l
    } = e, p = zt(e, ["ellipsis", "rel", "children", "navigate"]), v = Object.assign(Object.assign({}, p), {
        rel: t === void 0 && p.target === "_blank" ? "noopener noreferrer" : t
    });
    return r.createElement(Z, Object.assign({}, v, {
        ref: n,
        ellipsis: !!o,
        component: "a"
    }), s)
});
var Ut = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const Ft = r.forwardRef((e, n) => {
    const {
        children: o
    } = e, t = Ut(e, ["children"]);
    return r.createElement(Z, Object.assign({
        ref: n
    }, t, {
        component: "div"
    }), o)
});
var Vt = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const Kt = (e, n) => {
        const {
            ellipsis: o,
            children: t
        } = e, s = Vt(e, ["ellipsis", "children"]), l = r.useMemo(() => o && typeof o == "object" ? $e(o, ["expandable", "rows"]) : o, [o]);
        return r.createElement(Z, Object.assign({
            ref: n
        }, s, {
            ellipsis: l,
            component: "span"
        }), t)
    },
    qt = r.forwardRef(Kt);
var Xt = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const Jt = [1, 2, 3, 4, 5],
    Gt = r.forwardRef((e, n) => {
        const {
            level: o = 1,
            children: t
        } = e, s = Xt(e, ["level", "children"]), l = Jt.includes(o) ? `h${o}` : "h1";
        return r.createElement(Z, Object.assign({
            ref: n
        }, s, {
            component: l
        }), t)
    }),
    ee = Le;
ee.Text = qt;
ee.Link = Dt;
ee.Title = Gt;
ee.Paragraph = Ft;
export {
    ee as T
};