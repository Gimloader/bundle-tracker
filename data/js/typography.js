import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    Bt as n,
    C as r,
    E as i,
    J as a,
    Ot as o,
    Ut as s,
    X as c,
    gt as l,
    ht as u,
    k as d,
    p as f,
    s as p,
    x as m,
    z as h
} from "./Compact.js";
import {
    i as g,
    s as _
} from "./color.js";
import {
    t as v
} from "./es-2.js";
import {
    n as y
} from "./compact-item.js";
import {
    O as b
} from "./ContextIsolator.js";
import {
    t as x
} from "./useLocale.js";
import {
    t as S
} from "./tooltip-1.js";
import {
    t as C
} from "./styleChecker.js";
import {
    n as w
} from "./input.js";
import {
    t as T
} from "./CheckOutlined.js";
import {
    t as E
} from "./CopyOutlined.js";
import {
    t as ee
} from "./EditOutlined.js";
import {
    t as D
} from "./EnterOutlined.js";
import {
    t as O
} from "./copy-to-clipboard.js";
var k = e(t()),
    A = e(s());
l();
var j = (e, t = !1) => t && e == null ? [] : Array.isArray(e) ? e : [e],
    M = (e, t, n, r) => {
        let {
            titleMarginBottom: i,
            fontWeightStrong: a
        } = r;
        return {
            marginBottom: i,
            color: n,
            fontWeight: a,
            fontSize: e,
            lineHeight: t
        }
    },
    te = e => {
        let t = [1, 2, 3, 4, 5],
            n = {};
        return t.forEach(t => {
            n[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `] = M(e[`fontSizeHeading${t}`], e[`lineHeightHeading${t}`], e.colorTextHeading, e)
        }), n
    },
    N = e => {
        let {
            componentCls: t
        } = e;
        return {
            "a&, a": Object.assign(Object.assign({}, f(e)), {
                userSelect: `text`,
                [`&[disabled], &${t}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: `not-allowed`,
                    "&:active, &:hover": {
                        color: e.colorTextDisabled
                    },
                    "&:active": {
                        pointerEvents: `none`
                    }
                }
            })
        }
    },
    P = e => ({
        code: {
            margin: `0 0.2em`,
            paddingInline: `0.4em`,
            paddingBlock: `0.2em 0.1em`,
            fontSize: `85%`,
            fontFamily: e.fontFamilyCode,
            background: `rgba(150, 150, 150, 0.1)`,
            border: `1px solid rgba(100, 100, 100, 0.2)`,
            borderRadius: 3
        },
        kbd: {
            margin: `0 0.2em`,
            paddingInline: `0.4em`,
            paddingBlock: `0.15em 0.1em`,
            fontSize: `90%`,
            fontFamily: e.fontFamilyCode,
            background: `rgba(150, 150, 150, 0.06)`,
            border: `1px solid rgba(100, 100, 100, 0.2)`,
            borderBottomWidth: 2,
            borderRadius: 3
        },
        mark: {
            padding: 0,
            backgroundColor: h[2]
        },
        "u, ins": {
            textDecoration: `underline`,
            textDecorationSkipInk: `auto`
        },
        "s, del": {
            textDecoration: `line-through`
        },
        strong: {
            fontWeight: e.fontWeightStrong
        },
        "ul, ol": {
            marginInline: 0,
            marginBlock: `0 1em`,
            padding: 0,
            li: {
                marginInline: `20px 0`,
                marginBlock: 0,
                paddingInline: `4px 0`,
                paddingBlock: 0
            }
        },
        ul: {
            listStyleType: `circle`,
            ul: {
                listStyleType: `disc`
            }
        },
        ol: {
            listStyleType: `decimal`
        },
        "pre, blockquote": {
            margin: `1em 0`
        },
        pre: {
            padding: `0.4em 0.6em`,
            whiteSpace: `pre-wrap`,
            wordWrap: `break-word`,
            background: `rgba(150, 150, 150, 0.1)`,
            border: `1px solid rgba(100, 100, 100, 0.2)`,
            borderRadius: 3,
            fontFamily: e.fontFamilyCode,
            code: {
                display: `inline`,
                margin: 0,
                padding: 0,
                fontSize: `inherit`,
                fontFamily: `inherit`,
                background: `transparent`,
                border: 0
            }
        },
        blockquote: {
            paddingInline: `0.6em 0`,
            paddingBlock: 0,
            borderInlineStart: `4px solid rgba(100, 100, 100, 0.2)`,
            opacity: .85
        }
    }),
    F = e => {
        let {
            componentCls: t,
            paddingSM: n
        } = e, r = n;
        return {
            "&-edit-content": {
                position: `relative`,
                "div&": {
                    insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                    marginTop: e.calc(r).mul(-1).equal(),
                    marginBottom: `calc(1em - ${c(r)})`
                },
                [`${t}-edit-content-confirm`]: {
                    position: `absolute`,
                    insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
                    insetBlockEnd: e.marginXS,
                    color: e.colorIcon,
                    fontWeight: `normal`,
                    fontSize: e.fontSize,
                    fontStyle: `normal`,
                    pointerEvents: `none`
                },
                textarea: {
                    margin: `0!important`,
                    MozTransition: `none`,
                    height: `1em`
                }
            }
        }
    },
    ne = e => ({
        [`${e.componentCls}-copy-success`]: {
            "\n    &,\n    &:hover,\n    &:focus": {
                color: e.colorSuccess
            }
        },
        [`${e.componentCls}-copy-icon-only`]: {
            marginInlineStart: 0
        }
    }),
    re = () => ({
        "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
            display: `inline-block`,
            maxWidth: `100%`
        },
        "&-ellipsis-single-line": {
            whiteSpace: `nowrap`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            "a&, span&": {
                verticalAlign: `bottom`
            },
            "> code": {
                paddingBlock: 0,
                maxWidth: `calc(100% - 1.2em)`,
                display: `inline-block`,
                overflow: `hidden`,
                textOverflow: `ellipsis`,
                verticalAlign: `bottom`,
                boxSizing: `content-box`
            }
        },
        "&-ellipsis-multiple-line": {
            display: `-webkit-box`,
            overflow: `hidden`,
            WebkitLineClamp: 3,
            WebkitBoxOrient: `vertical`
        }
    }),
    I = p(`Typography`, e => {
        let {
            componentCls: t,
            titleMarginTop: n
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: e.colorText,
                wordBreak: `break-word`,
                lineHeight: e.lineHeight,
                [`&${t}-secondary`]: {
                    color: e.colorTextDescription
                },
                [`&${t}-success`]: {
                    color: e.colorSuccessText
                },
                [`&${t}-warning`]: {
                    color: e.colorWarningText
                },
                [`&${t}-danger`]: {
                    color: e.colorErrorText,
                    "a&:active, a&:focus": {
                        color: e.colorErrorTextActive
                    },
                    "a&:hover": {
                        color: e.colorErrorTextHover
                    }
                },
                [`&${t}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: `not-allowed`,
                    userSelect: `none`
                },
                "\n        div&,\n        p\n      ": {
                    marginBottom: `1em`
                }
            }, te(e)), {
                [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
                    marginTop: n
                },
                "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
                    "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
                        marginTop: n
                    }
                }
            }), P(e)), N(e)), {
                [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, f(e)), {
                    marginInlineStart: e.marginXXS
                })
            }), F(e)), ne(e)), re()), {
                "&-rtl": {
                    direction: `rtl`
                }
            })
        }
    }, () => ({
        titleMarginTop: `1.2em`,
        titleMarginBottom: `0.5em`
    })),
    ie = e => {
        let {
            prefixCls: t,
            "aria-label": n,
            className: r,
            style: i,
            direction: a,
            maxLength: o,
            autoSize: s = !0,
            value: c,
            onSave: l,
            onCancel: u,
            onEnd: d,
            component: f,
            enterIcon: p = k.createElement(D, null)
        } = e, m = k.useRef(null), h = k.useRef(!1), g = k.useRef(null), [v, y] = k.useState(c);
        k.useEffect(() => {
            y(c)
        }, [c]), k.useEffect(() => {
            var e;
            if ((e = m.current) != null && e.resizableTextArea) {
                let {
                    textArea: e
                } = m.current.resizableTextArea;
                e.focus();
                let {
                    length: t
                } = e.value;
                e.setSelectionRange(t, t)
            }
        }, []);
        let x = ({
                target: e
            }) => {
                y(e.value.replace(/[\n\r]/g, ``))
            },
            S = () => {
                h.current = !0
            },
            C = () => {
                h.current = !1
            },
            T = ({
                keyCode: e
            }) => {
                h.current || (g.current = e)
            },
            E = () => {
                l(v.trim())
            },
            ee = ({
                keyCode: e,
                ctrlKey: t,
                altKey: n,
                metaKey: r,
                shiftKey: i
            }) => {
                g.current !== e || h.current || t || n || r || i || (e === b.ENTER ? (E(), d == null || d()) : e === b.ESC && u())
            },
            O = () => {
                E()
            },
            [j, M, te] = I(t),
            N = (0, A.default)(t, `${t}-edit-content`, {
                [`${t}-rtl`]: a === `rtl`,
                [`${t}-${f}`]: !!f
            }, r, M, te);
        return j(k.createElement(`div`, {
            className: N,
            style: i
        }, k.createElement(w, {
            ref: m,
            maxLength: o,
            value: v,
            onChange: x,
            onKeyDown: T,
            onKeyUp: ee,
            onCompositionStart: S,
            onCompositionEnd: C,
            onBlur: O,
            "aria-label": n,
            rows: 1,
            autoSize: s
        }), p === null ? null : _(p, {
            className: `${t}-edit-content-confirm`
        })))
    },
    ae = e(O()),
    oe = function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function o(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? n(e.value) : i(e.value).then(o, s)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    se = ({
        copyConfig: e,
        children: t
    }) => {
        let [n, i] = k.useState(!1), [a, o] = k.useState(!1), s = k.useRef(null), c = () => {
            s.current && clearTimeout(s.current)
        }, l = {};
        return e.format && (l.format = e.format), k.useEffect(() => c, []), {
            copied: n,
            copyLoading: a,
            onClick: r(n => oe(void 0, void 0, void 0, function*() {
                var r;
                n == null || n.preventDefault(), n == null || n.stopPropagation(), o(!0);
                try {
                    let a = typeof e.text == `function` ? yield e.text(): e.text;
                    (0, ae.default)(a || j(t, !0).join(``) || ``, l), o(!1), i(!0), c(), s.current = setTimeout(() => {
                        i(!1)
                    }, 3e3), (r = e.onCopy) == null || r.call(e, n)
                } catch (e) {
                    throw o(!1), e
                }
            }))
        }
    };

function L(e, t) {
    return k.useMemo(() => {
        let n = !!e;
        return [n, Object.assign(Object.assign({}, t), n && typeof e == `object` ? e : null)]
    }, [e])
}
var ce = e => {
        let t = (0, k.useRef)(void 0);
        return (0, k.useEffect)(() => {
            t.current = e
        }), t.current
    },
    le = (e, t, n) => (0, k.useMemo)(() => e === !0 ? {
        title: t ?? n
    } : (0, k.isValidElement)(e) ? {
        title: e
    } : typeof e == `object` ? Object.assign({
        title: t ?? n
    }, e) : {
        title: e
    }, [e, t, n]),
    ue = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    de = k.forwardRef((e, t) => {
        let {
            prefixCls: n,
            component: r = `article`,
            className: i,
            rootClassName: a,
            setContentRef: s,
            children: c,
            direction: l,
            style: u
        } = e, f = ue(e, [`prefixCls`, `component`, `className`, `rootClassName`, `setContentRef`, `children`, `direction`, `style`]), {
            getPrefixCls: p,
            direction: m,
            className: h,
            style: g
        } = d(`typography`), _ = l ?? m, v = s ? o(t, s) : t, y = p(`typography`, n), [b, x, S] = I(y), C = (0, A.default)(y, h, {
            [`${y}-rtl`]: _ === `rtl`
        }, i, a, x, S), w = Object.assign(Object.assign({}, g), u);
        return b(k.createElement(r, Object.assign({
            className: C,
            style: w,
            ref: v
        }, f), c))
    });

function fe(e) {
    return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e]
}

function R(e, t, n) {
    return e === !0 || e === void 0 ? t : e || n && t
}

function pe(e) {
    let t = document.createElement(`em`);
    e.appendChild(t);
    let n = e.getBoundingClientRect(),
        r = t.getBoundingClientRect();
    return e.removeChild(t), n.left > r.left || r.right > n.right || n.top > r.top || r.bottom > n.bottom
}
var me = e => [`string`, `number`].includes(typeof e),
    he = ({
        prefixCls: e,
        copied: t,
        locale: n,
        iconOnly: r,
        tooltips: i,
        icon: a,
        tabIndex: o,
        onCopy: s,
        loading: c
    }) => {
        let l = fe(i),
            u = fe(a),
            {
                copied: d,
                copy: f
            } = n ?? {},
            p = t ? d : f,
            m = R(l[+!!t], p),
            h = typeof m == `string` ? m : p;
        return k.createElement(S, {
            title: m,
            getPopupContainer: e => e.parentNode
        }, k.createElement(`button`, {
            type: `button`,
            className: (0, A.default)(`${e}-copy`, {
                [`${e}-copy-success`]: t,
                [`${e}-copy-icon-only`]: r
            }),
            onClick: s,
            "aria-label": h,
            tabIndex: o
        }, t ? R(u[1], k.createElement(T, null), !0) : R(u[0], c ? k.createElement(y, null) : k.createElement(E, null), !0)))
    },
    z = k.forwardRef(({
        style: e,
        children: t
    }, n) => {
        let r = k.useRef(null);
        return k.useImperativeHandle(n, () => ({
            isExceed: () => {
                let e = r.current;
                return e.scrollHeight > e.clientHeight
            },
            getHeight: () => r.current.clientHeight
        })), k.createElement(`span`, {
            "aria-hidden": !0,
            ref: r,
            style: Object.assign({
                position: `fixed`,
                display: `block`,
                left: 0,
                top: 0,
                pointerEvents: `none`,
                backgroundColor: `rgba(255, 0, 0, 0.65)`
            }, e)
        }, t)
    }),
    ge = e => e.reduce((e, t) => e + (me(t) ? String(t).length : 1), 0);

function B(e, t) {
    let n = 0,
        r = [];
    for (let i = 0; i < e.length; i += 1) {
        if (n === t) return r;
        let a = e[i],
            o = me(a) ? String(a).length : 1,
            s = n + o;
        if (s > t) {
            let e = t - n;
            return r.push(String(a).slice(0, e)), r
        }
        r.push(a), n = s
    }
    return e
}
var V = 0,
    H = 1,
    U = 2,
    W = 3,
    _e = 4,
    G = {
        display: `-webkit-box`,
        overflow: `hidden`,
        WebkitBoxOrient: `vertical`
    };

function ve(e) {
    let {
        enableMeasure: t,
        width: r,
        text: i,
        children: o,
        rows: s,
        expanded: c,
        miscDeps: l,
        onEllipsis: d
    } = e, f = k.useMemo(() => n(i), [i]), p = k.useMemo(() => ge(f), [i]), m = k.useMemo(() => o(f, !1), [i]), [h, g] = k.useState(null), _ = k.useRef(null), v = k.useRef(null), y = k.useRef(null), b = k.useRef(null), x = k.useRef(null), [S, C] = k.useState(!1), [w, T] = k.useState(V), [E, ee] = k.useState(0), [D, O] = k.useState(null);
    a(() => {
        T(t && r && p ? H : V)
    }, [r, i, s, t, f]), a(() => {
        var e, t, n, r;
        if (w === H) {
            T(U);
            let e = v.current && getComputedStyle(v.current).whiteSpace;
            O(e)
        } else if (w === U) {
            let i = !!((e = y.current) != null && e.isExceed());
            T(i ? W : _e), g(i ? [0, p] : null), C(i);
            let a = ((t = y.current) == null ? void 0 : t.getHeight()) || 0,
                o = s === 1 ? 0 : ((n = b.current) == null ? void 0 : n.getHeight()) || 0,
                c = ((r = x.current) == null ? void 0 : r.getHeight()) || 0,
                l = Math.max(a, o + c);
            ee(l + 1), d(i)
        }
    }, [w]);
    let A = h ? Math.ceil((h[0] + h[1]) / 2) : 0;
    a(() => {
        var e;
        let [t, n] = h || [0, 0];
        if (t !== n) {
            let r = (((e = _.current) == null ? void 0 : e.getHeight()) || 0) > E,
                i = A;
            n - t === 1 && (i = r ? t : n), g(r ? [t, i] : [i, n])
        }
    }, [h, A]);
    let j = k.useMemo(() => {
            if (!t) return o(f, !1);
            if (w !== W || !h || h[0] !== h[1]) {
                let e = o(f, !1);
                return [_e, V].includes(w) ? e : k.createElement(`span`, {
                    style: Object.assign(Object.assign({}, G), {
                        WebkitLineClamp: s
                    })
                }, e)
            }
            return o(c ? f : B(f, h[0]), S)
        }, [c, w, h, f].concat(u(l))),
        M = {
            width: r,
            margin: 0,
            padding: 0,
            whiteSpace: D === `nowrap` ? `normal` : `inherit`
        };
    return k.createElement(k.Fragment, null, j, w === U && k.createElement(k.Fragment, null, k.createElement(z, {
        style: Object.assign(Object.assign(Object.assign({}, M), G), {
            WebkitLineClamp: s
        }),
        ref: y
    }, m), k.createElement(z, {
        style: Object.assign(Object.assign(Object.assign({}, M), G), {
            WebkitLineClamp: s - 1
        }),
        ref: b
    }, m), k.createElement(z, {
        style: Object.assign(Object.assign(Object.assign({}, M), G), {
            WebkitLineClamp: 1
        }),
        ref: x
    }, o([], !0))), w === W && h && h[0] !== h[1] && k.createElement(z, {
        style: Object.assign(Object.assign({}, M), {
            top: 400
        }),
        ref: _
    }, o(B(f, A), !0)), w === H && k.createElement(`span`, {
        style: {
            whiteSpace: `inherit`
        },
        ref: v
    }))
}
var ye = ({
    enableEllipsis: e,
    isEllipsis: t,
    children: n,
    tooltipProps: r
}) => !(r != null && r.title) || !e ? n : k.createElement(S, Object.assign({
    open: t ? void 0 : !1
}, r), n);
l();
var be = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

function xe({
    mark: e,
    code: t,
    underline: n,
    delete: r,
    strong: i,
    keyboard: a,
    italic: o
}, s) {
    let c = s;

    function l(e, t) {
        t && (c = k.createElement(e, {}, c))
    }
    return l(`strong`, i), l(`u`, n), l(`del`, r), l(`code`, t), l(`mark`, e), l(`kbd`, a), l(`i`, o), c
}
var Se = `...`,
    Ce = [`delete`, `mark`, `code`, `underline`, `strong`, `keyboard`, `italic`],
    K = k.forwardRef((e, t) => {
        let {
            prefixCls: r,
            className: s,
            style: c,
            type: l,
            disabled: d,
            children: f,
            ellipsis: p,
            editable: h,
            copyable: _,
            component: y,
            title: b
        } = e, w = be(e, [`prefixCls`, `className`, `style`, `type`, `disabled`, `children`, `ellipsis`, `editable`, `copyable`, `component`, `title`]), {
            getPrefixCls: T,
            direction: E
        } = k.useContext(i), [D] = x(`Text`), O = k.useRef(null), j = k.useRef(null), M = T(`typography`, r), te = g(w, Ce), [N, P] = L(h), [F, ne] = m(!1, {
            value: P.editing
        }), {
            triggerType: re = [`icon`]
        } = P, I = e => {
            var t;
            e && ((t = P.onStart) == null || t.call(P)), ne(e)
        }, ae = ce(F);
        a(() => {
            var e;
            !F && ae && ((e = j.current) == null || e.focus())
        }, [F]);
        let oe = e => {
                e == null || e.preventDefault(), I(!0)
            },
            ue = e => {
                var t;
                (t = P.onChange) == null || t.call(P, e), I(!1)
            },
            fe = () => {
                var e;
                (e = P.onCancel) == null || e.call(P), I(!1)
            },
            [R, z] = L(_),
            {
                copied: ge,
                copyLoading: B,
                onClick: V
            } = se({
                copyConfig: z,
                children: f
            }),
            [H, U] = k.useState(!1),
            [W, _e] = k.useState(!1),
            [G, K] = k.useState(!1),
            [we, Te] = k.useState(!1),
            [Ee, De] = k.useState(!0),
            [q, J] = L(p, {
                expandable: !1,
                symbol: e => e ? D == null ? void 0 : D.collapse : D == null ? void 0 : D.expand
            }),
            [Y, Oe] = m(J.defaultExpanded || !1, {
                value: J.expanded
            }),
            X = q && (!Y || J.expandable === `collapsible`),
            {
                rows: Z = 1
            } = J,
            Q = k.useMemo(() => X && (J.suffix !== void 0 || J.onEllipsis || J.expandable || N || R), [X, J, N, R]);
        a(() => {
            q && !Q && (U(C(`webkitLineClamp`)), _e(C(`textOverflow`)))
        }, [Q, q]);
        let [$, ke] = k.useState(X), Ae = k.useMemo(() => Q ? !1 : Z === 1 ? W : H, [Q, W, H]);
        a(() => {
            ke(Ae && X)
        }, [Ae, X]);
        let je = X && ($ ? we : G),
            Me = X && Z === 1 && $,
            Ne = X && Z > 1 && $,
            Pe = (e, t) => {
                var n;
                Oe(t.expanded), (n = J.onExpand) == null || n.call(J, e, t)
            },
            [Fe, Ie] = k.useState(0),
            Le = ({
                offsetWidth: e
            }) => {
                Ie(e)
            },
            Re = e => {
                var t;
                K(e), G !== e && ((t = J.onEllipsis) == null || t.call(J, e))
            };
        k.useEffect(() => {
            let e = O.current;
            if (q && $ && e) {
                let t = pe(e);
                we !== t && Te(t)
            }
        }, [q, $, f, Ne, Ee, Fe]), k.useEffect(() => {
            let e = O.current;
            if (typeof IntersectionObserver > `u` || !e || !$ || !X) return;
            let t = new IntersectionObserver(() => {
                De(!!e.offsetParent)
            });
            return t.observe(e), () => {
                t.disconnect()
            }
        }, [$, X]);
        let ze = le(J.tooltip, P.text, f),
            Be = k.useMemo(() => {
                if (q && !$) return [P.text, f, b, ze.title].find(me)
            }, [q, $, b, ze.title, je]);
        if (F) return k.createElement(ie, {
            value: P.text ?? (typeof f == `string` ? f : ``),
            onSave: ue,
            onCancel: fe,
            onEnd: P.onEnd,
            prefixCls: M,
            className: s,
            style: c,
            direction: E,
            component: y,
            maxLength: P.maxLength,
            autoSize: P.autoSize,
            enterIcon: P.enterIcon
        });
        let Ve = () => {
                let {
                    expandable: e,
                    symbol: t
                } = J;
                return e ? k.createElement(`button`, {
                    type: `button`,
                    key: `expand`,
                    className: `${M}-${Y?`collapse`:`expand`}`,
                    onClick: e => Pe(e, {
                        expanded: !Y
                    }),
                    "aria-label": Y ? D.collapse : D == null ? void 0 : D.expand
                }, typeof t == `function` ? t(Y) : t) : null
            },
            He = () => {
                if (!N) return;
                let {
                    icon: e,
                    tooltip: t,
                    tabIndex: r
                } = P, i = n(t)[0] || (D == null ? void 0 : D.edit), a = typeof i == `string` ? i : ``;
                return re.includes(`icon`) ? k.createElement(S, {
                    key: `edit`,
                    title: t === !1 ? `` : i
                }, k.createElement(`button`, {
                    type: `button`,
                    ref: j,
                    className: `${M}-edit`,
                    onClick: oe,
                    "aria-label": a,
                    tabIndex: r
                }, e || k.createElement(ee, {
                    role: `button`
                }))) : null
            },
            Ue = () => R ? k.createElement(he, Object.assign({
                key: `copy`
            }, z, {
                prefixCls: M,
                copied: ge,
                locale: D,
                onCopy: V,
                loading: B,
                iconOnly: f == null
            })) : null,
            We = e => [e && Ve(), He(), Ue()],
            Ge = e => [e && !Y && k.createElement(`span`, {
                "aria-hidden": !0,
                key: `ellipsis`
            }, Se), J.suffix, We(e)];
        return k.createElement(v, {
            onResize: Le,
            disabled: !X
        }, n => k.createElement(ye, {
            tooltipProps: ze,
            enableEllipsis: X,
            isEllipsis: je
        }, k.createElement(de, Object.assign({
            className: (0, A.default)({
                [`${M}-${l}`]: l,
                [`${M}-disabled`]: d,
                [`${M}-ellipsis`]: q,
                [`${M}-ellipsis-single-line`]: Me,
                [`${M}-ellipsis-multiple-line`]: Ne
            }, s),
            prefixCls: r,
            style: Object.assign(Object.assign({}, c), {
                WebkitLineClamp: Ne ? Z : void 0
            }),
            component: y,
            ref: o(n, O, t),
            direction: E,
            onClick: re.includes(`text`) ? oe : void 0,
            "aria-label": Be == null ? void 0 : Be.toString(),
            title: b
        }, te), k.createElement(ve, {
            enableMeasure: X && !$,
            text: f,
            rows: Z,
            width: Fe,
            onEllipsis: Re,
            expanded: Y,
            miscDeps: [ge, Y, B, N, R, D].concat(u(Ce.map(t => e[t])))
        }, (t, n) => xe(e, k.createElement(k.Fragment, null, t.length > 0 && n && !Y && Be ? k.createElement(`span`, {
            key: `show-content`,
            "aria-hidden": !0
        }, t) : t, Ge(n)))))))
    }),
    we = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    Te = k.forwardRef((e, t) => {
        var {
            ellipsis: n,
            rel: r
        } = e, i = we(e, [`ellipsis`, `rel`]);
        let a = Object.assign(Object.assign({}, i), {
            rel: r === void 0 && i.target === `_blank` ? `noopener noreferrer` : r
        });
        return delete a.navigate, k.createElement(K, Object.assign({}, a, {
            ref: t,
            ellipsis: !!n,
            component: `a`
        }))
    }),
    Ee = k.forwardRef((e, t) => k.createElement(K, Object.assign({
        ref: t
    }, e, {
        component: `div`
    }))),
    De = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    q = k.forwardRef((e, t) => {
        var {
            ellipsis: n
        } = e, r = De(e, [`ellipsis`]);
        let i = k.useMemo(() => n && typeof n == `object` ? g(n, [`expandable`, `rows`]) : n, [n]);
        return k.createElement(K, Object.assign({
            ref: t
        }, r, {
            ellipsis: i,
            component: `span`
        }))
    }),
    J = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    Y = [1, 2, 3, 4, 5],
    Oe = k.forwardRef((e, t) => {
        let {
            level: n = 1
        } = e, r = J(e, [`level`]), i = Y.includes(n) ? `h${n}` : `h1`;
        return k.createElement(K, Object.assign({
            ref: t
        }, r, {
            component: i
        }))
    }),
    X = de;
X.Text = q, X.Link = Te, X.Title = Oe, X.Paragraph = Ee;
export {
    X as t
};