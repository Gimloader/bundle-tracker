import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    l as r,
    s as i
} from "./assertThisInitialized.js";
import {
    Bt as a,
    C as o,
    Dt as s,
    E as c,
    Et as l,
    Ft as u,
    H as d,
    Ht as f,
    It as p,
    J as m,
    Lt as h,
    Nt as g,
    Ot as _,
    Pt as v,
    Tt as y,
    Ut as b,
    Vt as x,
    X as S,
    _ as C,
    a as w,
    b as T,
    ct as E,
    g as D,
    gt as O,
    h as k,
    ht as A,
    k as j,
    lt as M,
    m as N,
    nt as P,
    r as ee,
    s as F,
    tt as te,
    ut as I,
    wt as L,
    x as R,
    zt as z
} from "./Compact.js";
import {
    h as B,
    i as ne,
    v as V
} from "./color.js";
import {
    t as re
} from "./es-2.js";
import {
    n as H,
    t as U
} from "./compact-item.js";
import {
    C as W,
    E as ie,
    O as G,
    P as ae,
    r as oe,
    t as K
} from "./ContextIsolator.js";
import {
    r as se
} from "./InfoCircleFilled.js";
import {
    t as ce
} from "./useLocale.js";
import {
    n as le,
    t as ue
} from "./useCSSVarCls.js";
import {
    t as q
} from "./pickAttrs.js";
import {
    t as de
} from "./move.js";
import {
    a as fe,
    i as pe,
    n as me,
    o as he,
    r as J,
    t as ge
} from "./es-3.js";
import {
    t as Y
} from "./PurePanel.js";
import {
    n as _e,
    t as ve
} from "./es-1.js";
import {
    C as ye,
    S as be,
    x as xe
} from "./input.js";
import {
    t as Se
} from "./useVariants.js";
import {
    t as Ce
} from "./CheckOutlined.js";
import {
    t as we
} from "./DownOutlined.js";
n(), f(), h(), O(), I(), P();
var X = e(t()),
    Z = e(b()),
    Te = function(e) {
        var t = e.className,
            n = e.customizeIcon,
            r = e.customizeIconProps,
            i = e.children,
            a = e.onMouseDown,
            o = e.onClick,
            s = typeof n == `function` ? n(r) : n;
        return X.createElement(`span`, {
            className: t,
            onMouseDown: function(e) {
                e.preventDefault(), a == null || a(e)
            },
            style: {
                userSelect: `none`,
                WebkitUserSelect: `none`
            },
            unselectable: `on`,
            onClick: o,
            "aria-hidden": !0
        }, s === void 0 ? X.createElement(`span`, {
            className: (0, Z.default)(t.split(/\s+/).map(function(e) {
                return `${e}-icon`
            }))
        }, i) : s)
    },
    Ee = function(e, t, n, r, i) {
        var a = arguments.length > 5 && arguments[5] !== void 0 && arguments[5],
            o = arguments.length > 6 ? arguments[6] : void 0,
            s = arguments.length > 7 ? arguments[7] : void 0,
            c = X.useMemo(function() {
                if (x(r) === `object`) return r.clearIcon;
                if (i) return i
            }, [r, i]);
        return {
            allowClear: X.useMemo(function() {
                return !(a || !r || !n.length && !o || s === `combobox` && o === ``)
            }, [r, a, n.length, o, s]),
            clearIcon: X.createElement(Te, {
                className: `${e}-clear`,
                onMouseDown: t,
                customizeIcon: c
            }, `×`)
        }
    },
    De = X.createContext(null);

function Q() {
    return X.useContext(De)
}

function Oe() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
        t = X.useState(!1),
        n = M(t, 2),
        r = n[0],
        i = n[1],
        a = X.useRef(null),
        o = function() {
            window.clearTimeout(a.current)
        };
    return X.useEffect(function() {
        return o
    }, []), [r, function(t, n) {
        o(), a.current = window.setTimeout(function() {
            i(t), n && n()
        }, e)
    }, o]
}

function ke() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
        t = X.useRef(null),
        n = X.useRef(null);
    X.useEffect(function() {
        return function() {
            window.clearTimeout(n.current)
        }
    }, []);

    function r(r) {
        (r || t.current === null) && (t.current = r), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
            t.current = null
        }, e)
    }
    return [function() {
        return t.current
    }, r]
}

function Ae(e, t, n, r) {
    var i = X.useRef(null);
    i.current = {
        open: t,
        triggerOpen: n,
        customizedTrigger: r
    }, X.useEffect(function() {
        function t(t) {
            var n;
            if (!((n = i.current) != null && n.customizedTrigger)) {
                var r = t.target;
                r.shadowRoot && t.composed && (r = t.composedPath()[0] || r), i.current.open && e().filter(function(e) {
                    return e
                }).every(function(e) {
                    return !e.contains(r) && e !== r
                }) && i.current.triggerOpen(!1)
            }
        }
        return window.addEventListener(`mousedown`, t),
            function() {
                return window.removeEventListener(`mousedown`, t)
            }
    }, [])
}

function je(e) {
    return e && ![G.ESC, G.SHIFT, G.BACKSPACE, G.TAB, G.WIN_KEY, G.ALT, G.META, G.WIN_KEY_RIGHT, G.CTRL, G.SEMICOLON, G.EQUALS, G.CAPS_LOCK, G.CONTEXT_MENU, G.F1, G.F2, G.F3, G.F4, G.F5, G.F6, G.F7, G.F8, G.F9, G.F10, G.F11, G.F12].includes(e)
}

function Me(e, t, n) {
    var r = u(u({}, e), n ? t : {});
    return Object.keys(t).forEach(function(n) {
        var i = t[n];
        typeof i == `function` && (r[n] = function() {
            var t, r = [...arguments];
            return i.apply(void 0, r), (t = e[n]) == null ? void 0 : t.call.apply(t, [e].concat(r))
        })
    }), r
}
var Ne = [`prefixCls`, `id`, `inputElement`, `autoFocus`, `autoComplete`, `editable`, `activeDescendantId`, `value`, `open`, `attrs`],
    Pe = X.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.id,
            i = e.inputElement,
            a = e.autoFocus,
            o = e.autoComplete,
            s = e.editable,
            c = e.activeDescendantId,
            l = e.value,
            d = e.open,
            f = e.attrs,
            p = te(e, Ne),
            m = i || X.createElement(`input`, null),
            h = m,
            g = h.ref,
            v = h.props;
        return `maxLength` in m.props, m = X.cloneElement(m, u(u(u({
            type: `search`
        }, Me(p, v, !0)), {}, {
            id: r,
            ref: _(t, g),
            autoComplete: o || `off`,
            autoFocus: a,
            className: (0, Z.default)(`${n}-selection-search-input`, v == null ? void 0 : v.className),
            role: `combobox`,
            "aria-expanded": d || !1,
            "aria-haspopup": `listbox`,
            "aria-owns": `${r}_list`,
            "aria-autocomplete": `list`,
            "aria-controls": `${r}_list`,
            "aria-activedescendant": d ? c : void 0
        }, f), {}, {
            value: s ? l : ``,
            readOnly: !s,
            unselectable: s ? null : `on`,
            style: u(u({}, v.style), {}, {
                opacity: s ? null : 0
            })
        })), m
    });
f();

function Fe(e) {
    return Array.isArray(e) ? e : e === void 0 ? [] : [e]
}
var Ie = typeof window < `u` && window.document && window.document.documentElement;

function Le(e) {
    return e != null
}

function Re(e) {
    return !e && e !== 0
}

function ze(e) {
    return [`string`, `number`].includes(x(e))
}

function Be(e) {
    var t = void 0;
    return e && (ze(e.title) ? t = e.title.toString() : ze(e.label) && (t = e.label.toString())), t
}

function Ve(e, t) {
    Ie ? X.useLayoutEffect(e, t) : X.useEffect(e, t)
}
I();

function He(e) {
    return e.key ?? e.value
}
var Ue = function(e) {
        e.preventDefault(), e.stopPropagation()
    },
    We = function(e) {
        var t = e.id,
            n = e.prefixCls,
            r = e.values,
            i = e.open,
            a = e.searchValue,
            o = e.autoClearSearchValue,
            s = e.inputRef,
            c = e.placeholder,
            l = e.disabled,
            u = e.mode,
            d = e.showSearch,
            f = e.autoFocus,
            m = e.autoComplete,
            h = e.activeDescendantId,
            g = e.tabIndex,
            _ = e.removeIcon,
            v = e.maxTagCount,
            y = e.maxTagTextLength,
            b = e.maxTagPlaceholder,
            x = b === void 0 ? function(e) {
                return `+ ${e.length} ...`
            } : b,
            S = e.tagRender,
            C = e.onToggleOpen,
            w = e.onRemove,
            T = e.onInputChange,
            E = e.onInputPaste,
            D = e.onInputKeyDown,
            O = e.onInputMouseDown,
            k = e.onInputCompositionStart,
            A = e.onInputCompositionEnd,
            j = e.onInputBlur,
            N = X.useRef(null),
            P = (0, X.useState)(0),
            ee = M(P, 2),
            F = ee[0],
            te = ee[1],
            I = (0, X.useState)(!1),
            L = M(I, 2),
            R = L[0],
            z = L[1],
            B = `${n}-selection`,
            ne = i || u === `multiple` && o === !1 || u === `tags` ? a : ``,
            V = u === `tags` || u === `multiple` && o === !1 || d && (i || R);
        Ve(function() {
            te(N.current.scrollWidth)
        }, [ne]);
        var re = function(e, t, n, r, i) {
                return X.createElement(`span`, {
                    title: Be(e),
                    className: (0, Z.default)(`${B}-item`, p({}, `${B}-item-disabled`, n))
                }, X.createElement(`span`, {
                    className: `${B}-item-content`
                }, t), r && X.createElement(Te, {
                    className: `${B}-item-remove`,
                    onMouseDown: Ue,
                    onClick: i,
                    customizeIcon: _
                }, `×`))
            },
            H = function(e, t, n, r, a, o) {
                return X.createElement(`span`, {
                    onMouseDown: function(e) {
                        Ue(e), C(!i)
                    }
                }, S({
                    label: t,
                    value: e,
                    disabled: n,
                    closable: r,
                    onClose: a,
                    isMaxTag: !!o
                }))
            },
            U = function(e) {
                var t = e.disabled,
                    n = e.label,
                    r = e.value,
                    i = !l && !t,
                    a = n;
                if (typeof y == `number` && (typeof n == `string` || typeof n == `number`)) {
                    var o = String(a);
                    o.length > y && (a = `${o.slice(0,y)}...`)
                }
                var s = function(t) {
                    t && t.stopPropagation(), w(e)
                };
                return typeof S == `function` ? H(r, a, t, i, s) : re(e, a, t, i, s)
            },
            W = function(e) {
                if (!r.length) return null;
                var t = typeof x == `function` ? x(e) : x;
                return typeof S == `function` ? H(void 0, t, !1, !1, void 0, !0) : re({
                    title: t
                }, t, !1)
            },
            ie = X.createElement(`div`, {
                className: `${B}-search`,
                style: {
                    width: F
                },
                onFocus: function() {
                    z(!0)
                },
                onBlur: function() {
                    z(!1)
                }
            }, X.createElement(Pe, {
                ref: s,
                open: i,
                prefixCls: n,
                id: t,
                inputElement: null,
                disabled: l,
                autoFocus: f,
                autoComplete: m,
                editable: V,
                activeDescendantId: h,
                value: ne,
                onKeyDown: D,
                onMouseDown: O,
                onChange: T,
                onPaste: E,
                onCompositionStart: k,
                onCompositionEnd: A,
                onBlur: j,
                tabIndex: g,
                attrs: q(e, !0)
            }), X.createElement(`span`, {
                ref: N,
                className: `${B}-search-mirror`,
                "aria-hidden": !0
            }, ne, `\xA0`)),
            G = X.createElement(ge, {
                prefixCls: `${B}-overflow`,
                data: r,
                renderItem: U,
                renderRest: W,
                suffix: ie,
                itemKey: He,
                maxCount: v
            });
        return X.createElement(`span`, {
            className: `${B}-wrap`
        }, G, !r.length && !ne && X.createElement(`span`, {
            className: `${B}-placeholder`
        }, c))
    };
I();
var Ge = function(e) {
    var t = e.inputElement,
        n = e.prefixCls,
        r = e.id,
        i = e.inputRef,
        a = e.disabled,
        o = e.autoFocus,
        s = e.autoComplete,
        c = e.activeDescendantId,
        l = e.mode,
        u = e.open,
        d = e.values,
        f = e.placeholder,
        p = e.tabIndex,
        m = e.showSearch,
        h = e.searchValue,
        g = e.activeValue,
        _ = e.maxLength,
        v = e.onInputKeyDown,
        y = e.onInputMouseDown,
        b = e.onInputChange,
        x = e.onInputPaste,
        S = e.onInputCompositionStart,
        C = e.onInputCompositionEnd,
        w = e.onInputBlur,
        T = e.title,
        E = X.useState(!1),
        D = M(E, 2),
        O = D[0],
        k = D[1],
        A = l === `combobox`,
        j = A || m,
        N = d[0],
        P = h || ``;
    A && g && !O && (P = g), X.useEffect(function() {
        A && k(!1)
    }, [A, g]);
    var ee = l !== `combobox` && !u && !m ? !1 : !!P,
        F = T === void 0 ? Be(N) : T,
        te = X.useMemo(function() {
            return N ? null : X.createElement(`span`, {
                className: `${n}-selection-placeholder`,
                style: ee ? {
                    visibility: `hidden`
                } : void 0
            }, f)
        }, [N, ee, f, n]);
    return X.createElement(`span`, {
        className: `${n}-selection-wrap`
    }, X.createElement(`span`, {
        className: `${n}-selection-search`
    }, X.createElement(Pe, {
        ref: i,
        prefixCls: n,
        id: r,
        open: u,
        inputElement: t,
        disabled: a,
        autoFocus: o,
        autoComplete: s,
        editable: j,
        activeDescendantId: c,
        value: P,
        onKeyDown: v,
        onMouseDown: y,
        onChange: function(e) {
            k(!0), b(e)
        },
        onPaste: x,
        onCompositionStart: S,
        onCompositionEnd: C,
        onBlur: w,
        tabIndex: p,
        attrs: q(e, !0),
        maxLength: A ? _ : void 0
    })), !A && N ? X.createElement(`span`, {
        className: `${n}-selection-item`,
        title: F,
        style: ee ? {
            visibility: `hidden`
        } : void 0
    }, N.label) : null, te)
};
I();
var Ke = X.forwardRef(function(e, t) {
    var n = (0, X.useRef)(null),
        r = (0, X.useRef)(!1),
        a = e.prefixCls,
        o = e.open,
        s = e.mode,
        c = e.showSearch,
        l = e.tokenWithEnter,
        u = e.disabled,
        d = e.prefix,
        f = e.autoClearSearchValue,
        p = e.onSearch,
        m = e.onSearchSubmit,
        h = e.onToggleOpen,
        g = e.onInputKeyDown,
        _ = e.onInputBlur,
        v = e.domRef;
    X.useImperativeHandle(t, function() {
        return {
            focus: function(e) {
                n.current.focus(e)
            },
            blur: function() {
                n.current.blur()
            }
        }
    });
    var y = ke(0),
        b = M(y, 2),
        x = b[0],
        S = b[1],
        C = function(e) {
            var t = e.which,
                i = n.current instanceof HTMLTextAreaElement;
            !i && o && (t === G.UP || t === G.DOWN) && e.preventDefault(), g && g(e), t === G.ENTER && s === `tags` && !r.current && !o && (m == null || m(e.target.value)), !(i && !o && ~[G.UP, G.DOWN, G.LEFT, G.RIGHT].indexOf(t)) && je(t) && h(!0)
        },
        w = function() {
            S(!0)
        },
        T = (0, X.useRef)(null),
        E = function(e) {
            p(e, !0, r.current) !== !1 && h(!0)
        },
        D = function() {
            r.current = !0
        },
        O = function(e) {
            r.current = !1, s !== `combobox` && E(e.target.value)
        },
        k = function(e) {
            var t = e.target.value;
            if (l && T.current && /[\r\n]/.test(T.current)) {
                var n = T.current.replace(/[\r\n]+$/, ``).replace(/\r\n/g, ` `).replace(/[\r\n]/g, ` `);
                t = t.replace(n, T.current)
            }
            T.current = null, E(t)
        },
        A = function(e) {
            var t = e.clipboardData;
            T.current = (t == null ? void 0 : t.getData(`text`)) || ``
        },
        j = function(e) {
            e.target !== n.current && (document.body.style.msTouchAction === void 0 ? n.current.focus() : setTimeout(function() {
                n.current.focus()
            }))
        },
        N = function(e) {
            var t = x();
            e.target !== n.current && !t && !(s === `combobox` && u) && e.preventDefault(), (s !== `combobox` && (!c || !t) || !o) && (o && f !== !1 && p(``, !0, !1), h())
        },
        P = {
            inputRef: n,
            onInputKeyDown: C,
            onInputMouseDown: w,
            onInputChange: k,
            onInputPaste: A,
            onInputCompositionStart: D,
            onInputCompositionEnd: O,
            onInputBlur: _
        },
        ee = s === `multiple` || s === `tags` ? X.createElement(We, i({}, e, P)) : X.createElement(Ge, i({}, e, P));
    return X.createElement(`div`, {
        ref: v,
        className: `${a}-selector`,
        onClick: j,
        onMouseDown: N
    }, d && X.createElement(`div`, {
        className: `${a}-prefix`
    }, d), ee)
});
n(), h(), P();
var qe = [`prefixCls`, `disabled`, `visible`, `children`, `popupElement`, `animation`, `transitionName`, `dropdownStyle`, `dropdownClassName`, `direction`, `placement`, `builtinPlacements`, `dropdownMatchSelectWidth`, `dropdownRender`, `dropdownAlign`, `getPopupContainer`, `empty`, `getTriggerDOMNode`, `onPopupVisibleChange`, `onPopupMouseEnter`],
    Je = function(e) {
        var t = e === !0 ? 0 : 1;
        return {
            bottomLeft: {
                points: [`tl`, `bl`],
                offset: [0, 4],
                overflow: {
                    adjustX: t,
                    adjustY: 1
                },
                htmlRegion: `scroll`
            },
            bottomRight: {
                points: [`tr`, `br`],
                offset: [0, 4],
                overflow: {
                    adjustX: t,
                    adjustY: 1
                },
                htmlRegion: `scroll`
            },
            topLeft: {
                points: [`bl`, `tl`],
                offset: [0, -4],
                overflow: {
                    adjustX: t,
                    adjustY: 1
                },
                htmlRegion: `scroll`
            },
            topRight: {
                points: [`br`, `tr`],
                offset: [0, -4],
                overflow: {
                    adjustX: t,
                    adjustY: 1
                },
                htmlRegion: `scroll`
            }
        }
    },
    Ye = X.forwardRef(function(e, t) {
        var n = e.prefixCls;
        e.disabled;
        var r = e.visible,
            a = e.children,
            o = e.popupElement,
            s = e.animation,
            c = e.transitionName,
            l = e.dropdownStyle,
            d = e.dropdownClassName,
            f = e.direction,
            m = f === void 0 ? `ltr` : f,
            h = e.placement,
            g = e.builtinPlacements,
            _ = e.dropdownMatchSelectWidth,
            v = e.dropdownRender,
            y = e.dropdownAlign,
            b = e.getPopupContainer,
            x = e.empty,
            S = e.getTriggerDOMNode,
            C = e.onPopupVisibleChange,
            w = e.onPopupMouseEnter,
            T = te(e, qe),
            E = `${n}-dropdown`,
            D = o;
        v && (D = v(o));
        var O = X.useMemo(function() {
                return g || Je(_)
            }, [g, _]),
            k = s ? `${E}-${s}` : c,
            A = typeof _ == `number`,
            j = X.useMemo(function() {
                return A ? null : _ === !1 ? `minWidth` : `width`
            }, [_, A]),
            M = l;
        A && (M = u(u({}, M), {}, {
            width: _
        }));
        var N = X.useRef(null);
        return X.useImperativeHandle(t, function() {
            return {
                getPopupElement: function() {
                    var e;
                    return (e = N.current) == null ? void 0 : e.popupElement
                }
            }
        }), X.createElement(ve, i({}, T, {
            showAction: C ? [`click`] : [],
            hideAction: C ? [`click`] : [],
            popupPlacement: h || (m === `rtl` ? `bottomRight` : `bottomLeft`),
            builtinPlacements: O,
            prefixCls: E,
            popupTransitionName: k,
            popup: X.createElement(`div`, {
                onMouseEnter: w
            }, D),
            ref: N,
            stretch: j,
            popupAlign: y,
            popupVisible: r,
            getPopupContainer: b,
            popupClassName: (0, Z.default)(d, p({}, `${E}-empty`, x)),
            popupStyle: M,
            getTriggerDOMNode: S,
            onPopupVisibleChange: C
        }), a)
    });

function Xe(e, t) {
    var n = e.key,
        r;
    return `value` in e && (r = e.value), n ?? (r === void 0 ? `rc-index-key-${t}` : r)
}

function Ze(e) {
    return e !== void 0 && !Number.isNaN(e)
}

function Qe(e, t) {
    var n = e || {},
        r = n.label,
        i = n.value,
        a = n.options,
        o = n.groupLabel,
        s = r || (t ? `children` : `label`);
    return {
        label: s,
        value: i || `value`,
        options: a || `options`,
        groupLabel: o || s
    }
}

function $(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.fieldNames,
        r = t.childrenAsData,
        i = [],
        a = Qe(n, !1),
        o = a.label,
        s = a.value,
        c = a.options,
        l = a.groupLabel;

    function u(e, t) {
        Array.isArray(e) && e.forEach(function(e) {
            if (t || !(c in e)) {
                var n = e[s];
                i.push({
                    key: Xe(e, i.length),
                    groupOption: t,
                    data: e,
                    label: e[o],
                    value: n
                })
            } else {
                var a = e[l];
                a === void 0 && r && (a = e.label), i.push({
                    key: Xe(e, i.length),
                    group: !0,
                    data: e,
                    label: a
                }), u(e[c], !0)
            }
        })
    }
    return u(e, !1), i
}

function $e(e) {
    var t = u({}, e);
    return `props` in t || Object.defineProperty(t, "props", {
        get: function() {
            return z(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t
        }
    }), t
}
var et = function(e, t, n) {
        if (!t || !t.length) return null;
        var r = !1,
            i = function e(t, n) {
                var i = ae(n),
                    a = i[0],
                    o = i.slice(1);
                if (!a) return [t];
                var s = t.split(a);
                return r = r || s.length > 1, s.reduce(function(t, n) {
                    return [].concat(A(t), A(e(n, o)))
                }, []).filter(Boolean)
            }(e, t);
        return r ? n === void 0 ? i : i.slice(0, n) : null
    },
    tt = X.createContext(null);
f();

function nt(e) {
    var t = e.visible,
        n = e.values;
    if (!t) return null;
    var r = 50;
    return X.createElement(`span`, {
        "aria-live": `polite`,
        style: {
            width: 0,
            height: 0,
            position: `absolute`,
            overflow: `hidden`,
            opacity: 0
        }
    }, `${n.slice(0,r).map(function(e){var t=e.label,n=e.value;return[`number`,`string`].includes(x(t))?t:n}).join(`, `)}`, n.length > r ? `, ...` : null)
}
n(), h(), O(), I(), P();
var rt = `id.prefixCls.className.showSearch.tagRender.direction.omitDomProps.displayValues.onDisplayValuesChange.emptyOptions.notFoundContent.onClear.mode.disabled.loading.getInputElement.getRawInputElement.open.defaultOpen.onDropdownVisibleChange.activeValue.onActiveValueChange.activeDescendantId.searchValue.autoClearSearchValue.onSearch.onSearchSplit.tokenSeparators.allowClear.prefix.suffixIcon.clearIcon.OptionList.animation.transitionName.dropdownStyle.dropdownClassName.dropdownMatchSelectWidth.dropdownRender.dropdownAlign.placement.builtinPlacements.getPopupContainer.showAction.onFocus.onBlur.onKeyUp.onKeyDown.onMouseDown`.split(`.`),
    it = [`value`, `onChange`, `removeIcon`, `placeholder`, `autoFocus`, `maxTagCount`, `maxTagTextLength`, `maxTagPlaceholder`, `choiceTransitionName`, `onInputKeyDown`, `onPopupScroll`, `tabIndex`],
    at = function(e) {
        return e === `tags` || e === `multiple`
    },
    ot = X.forwardRef(function(e, t) {
        var n, r = e.id,
            a = e.prefixCls,
            o = e.className,
            s = e.showSearch,
            c = e.tagRender,
            l = e.direction,
            d = e.omitDomProps,
            f = e.displayValues,
            h = e.onDisplayValuesChange,
            _ = e.emptyOptions,
            v = e.notFoundContent,
            y = v === void 0 ? `Not Found` : v,
            b = e.onClear,
            x = e.mode,
            S = e.disabled,
            C = e.loading,
            w = e.getInputElement,
            T = e.getRawInputElement,
            E = e.open,
            D = e.defaultOpen,
            O = e.onDropdownVisibleChange,
            k = e.activeValue,
            j = e.onActiveValueChange,
            N = e.activeDescendantId,
            P = e.searchValue,
            ee = e.autoClearSearchValue,
            F = e.onSearch,
            I = e.onSearchSplit,
            L = e.tokenSeparators,
            z = e.allowClear,
            B = e.prefix,
            ne = e.suffixIcon,
            V = e.clearIcon,
            re = e.OptionList,
            H = e.animation,
            U = e.transitionName,
            W = e.dropdownStyle,
            ie = e.dropdownClassName,
            G = e.dropdownMatchSelectWidth,
            ae = e.dropdownRender,
            oe = e.dropdownAlign,
            K = e.placement,
            se = e.builtinPlacements,
            ce = e.getPopupContainer,
            le = e.showAction,
            ue = le === void 0 ? [] : le,
            q = e.onFocus,
            de = e.onBlur,
            fe = e.onKeyUp,
            pe = e.onKeyDown,
            me = e.onMouseDown,
            he = te(e, rt),
            J = at(x),
            ge = (s === void 0 ? J : s) || x === `combobox`,
            Y = u({}, he);
        it.forEach(function(e) {
            delete Y[e]
        }), d == null || d.forEach(function(e) {
            delete Y[e]
        });
        var ve = X.useState(!1),
            ye = M(ve, 2),
            be = ye[0],
            xe = ye[1];
        X.useEffect(function() {
            xe(_e())
        }, []);
        var Se = X.useRef(null),
            Ce = X.useRef(null),
            we = X.useRef(null),
            Q = X.useRef(null),
            je = X.useRef(null),
            Me = X.useRef(!1),
            Ne = Oe(),
            Pe = M(Ne, 3),
            Fe = Pe[0],
            Ie = Pe[1],
            Le = Pe[2];
        X.useImperativeHandle(t, function() {
            var e, t;
            return {
                focus: (e = Q.current) == null ? void 0 : e.focus,
                blur: (t = Q.current) == null ? void 0 : t.blur,
                scrollTo: function(e) {
                    var t;
                    return (t = je.current) == null ? void 0 : t.scrollTo(e)
                },
                nativeElement: Se.current || Ce.current
            }
        });
        var Re = X.useMemo(function() {
                var e;
                if (x !== `combobox`) return P;
                var t = (e = f[0]) == null ? void 0 : e.value;
                return typeof t == `string` || typeof t == `number` ? String(t) : ``
            }, [P, x, f]),
            ze = x === `combobox` && typeof w == `function` && w() || null,
            Be = typeof T == `function` && T(),
            Ve = g(Ce, Be == null || (n = Be.props) == null ? void 0 : n.ref),
            He = X.useState(!1),
            Ue = M(He, 2),
            We = Ue[0],
            Ge = Ue[1];
        m(function() {
            Ge(!0)
        }, []);
        var qe = R(!1, {
                defaultValue: D,
                value: E
            }),
            Je = M(qe, 2),
            Xe = Je[0],
            Qe = Je[1],
            $ = We ? Xe : !1,
            $e = !y && _;
        (S || $e && $ && x === `combobox`) && ($ = !1);
        var ot = !$e && $,
            st = X.useCallback(function(e) {
                var t = e === void 0 ? !$ : e;
                S || (Qe(t), $ !== t && (O == null || O(t)))
            }, [S, $, Qe, O]),
            ct = X.useMemo(function() {
                return (L || []).some(function(e) {
                    return [`
`, `\r
`].includes(e)
                })
            }, [L]),
            lt = X.useContext(tt) || {},
            ut = lt.maxCount,
            dt = lt.rawValues,
            ft = function(e, t, n) {
                if (!(J && Ze(ut) && (dt == null ? void 0 : dt.size) >= ut)) {
                    var r = !0,
                        i = e;
                    j == null || j(null);
                    var a = et(e, L, Ze(ut) ? ut - dt.size : void 0),
                        o = n ? null : a;
                    return x !== `combobox` && o && (i = ``, I == null || I(o), st(!1), r = !1), F && Re !== i && F(i, {
                        source: t ? `typing` : `effect`
                    }), r
                }
            },
            pt = function(e) {
                e && e.trim() && F(e, {
                    source: `submit`
                })
            };
        X.useEffect(function() {
            !$ && !J && x !== `combobox` && ft(``, !1, !1)
        }, [$]), X.useEffect(function() {
            Xe && S && Qe(!1), S && !Me.current && Ie(!1)
        }, [S]);
        var mt = ke(),
            ht = M(mt, 2),
            gt = ht[0],
            _t = ht[1],
            vt = X.useRef(!1),
            yt = function(e) {
                var t = gt(),
                    n = e.key,
                    r = n === `Enter`;
                if (r && (x !== `combobox` && e.preventDefault(), $ || st(!0)), _t(!!Re), n === `Backspace` && !t && J && !Re && f.length) {
                    for (var i = A(f), a = null, o = i.length - 1; o >= 0; --o) {
                        var s = i[o];
                        if (!s.disabled) {
                            i.splice(o, 1), a = s;
                            break
                        }
                    }
                    a && h(i, {
                        type: `remove`,
                        values: [a]
                    })
                }
                var c = [...arguments].slice(1);
                if ($ && (!r || !vt.current)) {
                    var l;
                    r && (vt.current = !0), (l = je.current) == null || l.onKeyDown.apply(l, [e].concat(c))
                }
                pe == null || pe.apply(void 0, [e].concat(c))
            },
            bt = function(e) {
                var t = [...arguments].slice(1);
                if ($) {
                    var n;
                    (n = je.current) == null || n.onKeyUp.apply(n, [e].concat(t))
                }
                e.key === `Enter` && (vt.current = !1), fe == null || fe.apply(void 0, [e].concat(t))
            },
            xt = function(e) {
                h(f.filter(function(t) {
                    return t !== e
                }), {
                    type: `remove`,
                    values: [e]
                })
            },
            St = function() {
                vt.current = !1
            },
            Ct = X.useRef(!1),
            wt = function() {
                Ie(!0), S || (q && !Ct.current && q.apply(void 0, arguments), ue.includes(`focus`) && st(!0)), Ct.current = !0
            },
            Tt = function() {
                Me.current = !0, Ie(!1, function() {
                    Ct.current = !1, Me.current = !1, st(!1)
                }), !S && (Re && (x === `tags` ? F(Re, {
                    source: `submit`
                }) : x === `multiple` && F(``, {
                    source: `blur`
                })), de && de.apply(void 0, arguments))
            },
            Et = [];
        X.useEffect(function() {
            return function() {
                Et.forEach(function(e) {
                    return clearTimeout(e)
                }), Et.splice(0, Et.length)
            }
        }, []);
        var Dt = function(e) {
                var t, n = e.target,
                    r = (t = we.current) == null ? void 0 : t.getPopupElement();
                if (r && r.contains(n)) {
                    var i = setTimeout(function() {
                        var e = Et.indexOf(i);
                        if (e !== -1 && Et.splice(e, 1), Le(), !be && !r.contains(document.activeElement)) {
                            var t;
                            (t = Q.current) == null || t.focus()
                        }
                    });
                    Et.push(i)
                }
                var a = [...arguments].slice(1);
                me == null || me.apply(void 0, [e].concat(a))
            },
            Ot = X.useState({}),
            kt = M(Ot, 2)[1];

        function At() {
            kt({})
        }
        var jt;
        Be && (jt = function(e) {
            st(e)
        }), Ae(function() {
            var e;
            return [Se.current, (e = we.current) == null ? void 0 : e.getPopupElement()]
        }, ot, st, !!Be);
        var Mt = X.useMemo(function() {
                return u(u({}, e), {}, {
                    notFoundContent: y,
                    open: $,
                    triggerOpen: ot,
                    id: r,
                    showSearch: ge,
                    multiple: J,
                    toggleOpen: st
                })
            }, [e, y, ot, $, r, ge, J, st]),
            Nt = !!ne || C,
            Pt;
        Nt && (Pt = X.createElement(Te, {
            className: (0, Z.default)(`${a}-arrow`, p({}, `${a}-arrow-loading`, C)),
            customizeIcon: ne,
            customizeIconProps: {
                loading: C,
                searchValue: Re,
                open: $,
                focused: Fe,
                showSearch: ge
            }
        }));
        var Ft = Ee(a, function() {
                var e;
                b == null || b(), (e = Q.current) == null || e.focus(), h([], {
                    type: `clear`,
                    values: f
                }), ft(``, !1, !1)
            }, f, z, V, S, Re, x),
            It = Ft.allowClear,
            Lt = Ft.clearIcon,
            Rt = X.createElement(re, {
                ref: je
            }),
            zt = (0, Z.default)(a, o, p(p(p(p(p(p(p(p(p(p({}, `${a}-focused`, Fe), `${a}-multiple`, J), `${a}-single`, !J), `${a}-allow-clear`, z), `${a}-show-arrow`, Nt), `${a}-disabled`, S), `${a}-loading`, C), `${a}-open`, $), `${a}-customize-input`, ze), `${a}-show-search`, ge)),
            Bt = X.createElement(Ye, {
                ref: we,
                disabled: S,
                prefixCls: a,
                visible: ot,
                popupElement: Rt,
                animation: H,
                transitionName: U,
                dropdownStyle: W,
                dropdownClassName: ie,
                direction: l,
                dropdownMatchSelectWidth: G,
                dropdownRender: ae,
                dropdownAlign: oe,
                placement: K,
                builtinPlacements: se,
                getPopupContainer: ce,
                empty: _,
                getTriggerDOMNode: function(e) {
                    return Ce.current || e
                },
                onPopupVisibleChange: jt,
                onPopupMouseEnter: At
            }, Be ? X.cloneElement(Be, {
                ref: Ve
            }) : X.createElement(Ke, i({}, e, {
                domRef: Ce,
                prefixCls: a,
                inputElement: ze,
                ref: Q,
                id: r,
                prefix: B,
                showSearch: ge,
                autoClearSearchValue: ee,
                mode: x,
                activeDescendantId: N,
                tagRender: c,
                values: f,
                open: $,
                onToggleOpen: st,
                activeValue: k,
                searchValue: Re,
                onSearch: ft,
                onSearchSubmit: pt,
                onRemove: xt,
                tokenWithEnter: ct,
                onInputBlur: St
            }))),
            Vt = Be ? Bt : X.createElement(`div`, i({
                className: zt
            }, Y, {
                ref: Se,
                onMouseDown: Dt,
                onKeyDown: yt,
                onKeyUp: bt,
                onFocus: wt,
                onBlur: Tt
            }), X.createElement(nt, {
                visible: Fe && !$,
                values: f
            }), Bt, Pt, It && Lt);
        return X.createElement(De.Provider, {
            value: Mt
        }, Vt)
    }),
    st = function() {
        return null
    };
st.isSelectOptGroup = !0;
var ct = function() {
    return null
};
ct.isSelectOption = !0;
var lt = e(r());
n(), h();
var ut = X.forwardRef(function(e, t) {
    var n = e.height,
        r = e.offsetY,
        a = e.offsetX,
        o = e.children,
        s = e.prefixCls,
        c = e.onInnerResize,
        l = e.innerProps,
        d = e.rtl,
        f = e.extra,
        m = {},
        h = {
            display: `flex`,
            flexDirection: `column`
        };
    return r !== void 0 && (m = {
        height: n,
        position: `relative`,
        overflow: `hidden`
    }, h = u(u({}, h), {}, p(p(p(p(p({
        transform: `translateY(${r}px)`
    }, d ? `marginRight` : `marginLeft`, -a), `position`, `absolute`), `left`, 0), `right`, 0), `top`, 0))), X.createElement(`div`, {
        style: m
    }, X.createElement(re, {
        onResize: function(e) {
            e.offsetHeight && c && c()
        }
    }, X.createElement(`div`, i({
        style: h,
        className: (0, Z.default)(p({}, `${s}-holder-inner`, s)),
        ref: t
    }, l), o, f)))
});
ut.displayName = `Filler`;

function dt(e) {
    var t = e.children,
        n = e.setRef,
        r = X.useCallback(function(e) {
            n(e)
        }, []);
    return X.cloneElement(t, {
        ref: r
    })
}

function ft(e, t, n, r, i, a, o, s) {
    var c = s.getKey;
    return e.slice(t, n + 1).map(function(e, n) {
        var s = o(e, t + n, {
                style: {
                    width: r
                },
                offsetX: i
            }),
            l = c(e);
        return X.createElement(dt, {
            key: l,
            setRef: function(t) {
                return a(e, t)
            }
        }, s)
    })
}

function pt(e, t, n) {
    var r = e.length,
        i = t.length,
        a, o;
    if (r === 0 && i === 0) return null;
    r < i ? (a = e, o = t) : (a = t, o = e);
    var s = {
        __EMPTY_ITEM__: !0
    };

    function c(e) {
        return e === void 0 ? s : n(e)
    }
    for (var l = null, u = Math.abs(r - i) !== 1, d = 0; d < o.length; d += 1) {
        var f = c(a[d]);
        if (f !== c(o[d])) {
            l = d, u = u || f !== c(o[d + 1]);
            break
        }
    }
    return l === null ? null : {
        index: l,
        multiple: u
    }
}
I();

function mt(e, t, n) {
    var r = X.useState(e),
        i = M(r, 2),
        a = i[0],
        o = i[1],
        s = X.useState(null),
        c = M(s, 2),
        l = c[0],
        u = c[1];
    return X.useEffect(function() {
        var r = pt(a || [], e || [], t);
        (r == null ? void 0 : r.index) !== void 0 && (n == null || n(r.index), u(e[r.index])), o(e)
    }, [e]), [l]
}
f();
var ht = (typeof navigator > `u` ? `undefined` : x(navigator)) === `object` && /Firefox/i.test(navigator.userAgent),
    gt = (function(e, t, n, r) {
        var i = (0, X.useRef)(!1),
            a = (0, X.useRef)(null);

        function o() {
            clearTimeout(a.current), i.current = !0, a.current = setTimeout(function() {
                i.current = !1
            }, 50)
        }
        var s = (0, X.useRef)({
            top: e,
            bottom: t,
            left: n,
            right: r
        });
        return s.current.top = e, s.current.bottom = t, s.current.left = n, s.current.right = r,
            function(e, t) {
                var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                    r = e ? t < 0 && s.current.left || t > 0 && s.current.right : t < 0 && s.current.top || t > 0 && s.current.bottom;
                return n && r ? (clearTimeout(a.current), i.current = !1) : (!r || i.current) && o(), !i.current && r
            }
    });

function _t(e, t, n, r, i, a, o) {
    var s = (0, X.useRef)(0),
        c = (0, X.useRef)(null),
        l = (0, X.useRef)(null),
        u = (0, X.useRef)(!1),
        d = gt(t, n, r, i);

    function f(e, t) {
        if (V.cancel(c.current), !d(!1, t)) {
            var n = e;
            if (!n._virtualHandled) n._virtualHandled = !0;
            else return;
            s.current += t, l.current = t, ht || n.preventDefault(), c.current = V(function() {
                var e = u.current ? 10 : 1;
                o(s.current * e, !1), s.current = 0
            })
        }
    }

    function p(e, t) {
        o(t, !0), ht || e.preventDefault()
    }
    var m = (0, X.useRef)(null),
        h = (0, X.useRef)(null);

    function g(t) {
        if (e) {
            V.cancel(h.current), h.current = V(function() {
                m.current = null
            }, 2);
            var n = t.deltaX,
                r = t.deltaY,
                i = t.shiftKey,
                o = n,
                s = r;
            (m.current === `sx` || !m.current && i && r && !n) && (o = r, s = 0, m.current = `sx`);
            var c = Math.abs(o),
                l = Math.abs(s);
            m.current === null && (m.current = a && c > l ? `x` : `y`), m.current === `y` ? f(t, s) : p(t, o)
        }
    }

    function _(t) {
        e && (u.current = t.detail === l.current)
    }
    return [g, _]
}
I();

function vt(e, t, n, r) {
    var i = X.useMemo(function() {
            return [new Map, []]
        }, [e, n.id, r]),
        a = M(i, 2),
        o = a[0],
        s = a[1];
    return function(i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i,
            c = o.get(i),
            l = o.get(a);
        if (c === void 0 || l === void 0)
            for (var u = e.length, d = s.length; d < u; d += 1) {
                var f = e[d],
                    p = t(f);
                o.set(p, d);
                var m = n.get(p) ?? r;
                if (s[d] = (s[d - 1] || 0) + m, p === i && (c = d), p === a && (l = d), c !== void 0 && l !== void 0) break
            }
        return {
            top: s[c - 1] || 0,
            bottom: s[l]
        }
    }
}
s(), y(), h();
var yt = function() {
    function e() {
        l(this, e), p(this, `maps`, void 0), p(this, `id`, 0), p(this, `diffRecords`, new Map), this.maps = Object.create(null)
    }
    return L(e, [{
        key: `set`,
        value: function(e, t) {
            this.diffRecords.set(e, this.maps[e]), this.maps[e] = t, this.id += 1
        }
    }, {
        key: `get`,
        value: function(e) {
            return this.maps[e]
        }
    }, {
        key: `resetRecord`,
        value: function() {
            this.diffRecords.clear()
        }
    }, {
        key: `getRecord`,
        value: function() {
            return this.diffRecords
        }
    }]), e
}();
I();

function bt(e) {
    var t = parseFloat(e);
    return isNaN(t) ? 0 : t
}

function xt(e, t, n) {
    var r = X.useState(0),
        i = M(r, 2),
        a = i[0],
        o = i[1],
        s = (0, X.useRef)(new Map),
        c = (0, X.useRef)(new yt),
        l = (0, X.useRef)(0);

    function u() {
        l.current += 1
    }

    function d() {
        var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        u();
        var t = function() {
            var e = !1;
            s.current.forEach(function(t, n) {
                if (t && t.offsetParent) {
                    var r = t.offsetHeight,
                        i = getComputedStyle(t),
                        a = i.marginTop,
                        o = i.marginBottom,
                        s = bt(a),
                        l = bt(o),
                        u = r + s + l;
                    c.current.get(n) !== u && (c.current.set(n, u), e = !0)
                }
            }), e && o(function(e) {
                return e + 1
            })
        };
        if (e) t();
        else {
            l.current += 1;
            var n = l.current;
            Promise.resolve().then(function() {
                n === l.current && t()
            })
        }
    }

    function f(r, i) {
        var a = e(r),
            o = s.current.get(a);
        i ? (s.current.set(a, i), d()) : s.current.delete(a), !o != !i && (i ? t == null || t(r) : n == null || n(r))
    }
    return (0, X.useEffect)(function() {
        return u
    }, []), [f, d, c.current, a]
}
var St = 14 / 15;

function Ct(e, t, n) {
    var r = (0, X.useRef)(!1),
        i = (0, X.useRef)(0),
        a = (0, X.useRef)(0),
        o = (0, X.useRef)(null),
        s = (0, X.useRef)(null),
        c, l = function(e) {
            if (r.current) {
                var t = Math.ceil(e.touches[0].pageX),
                    o = Math.ceil(e.touches[0].pageY),
                    c = i.current - t,
                    l = a.current - o,
                    u = Math.abs(c) > Math.abs(l);
                u ? i.current = t : a.current = o;
                var d = n(u, u ? c : l, !1, e);
                d && e.preventDefault(), clearInterval(s.current), d && (s.current = setInterval(function() {
                    u ? c *= St : l *= St;
                    var e = Math.floor(u ? c : l);
                    (!n(u, e, !0) || Math.abs(e) <= .1) && clearInterval(s.current)
                }, 16))
            }
        },
        u = function() {
            r.current = !1, c()
        },
        d = function(e) {
            c(), e.touches.length === 1 && !r.current && (r.current = !0, i.current = Math.ceil(e.touches[0].pageX), a.current = Math.ceil(e.touches[0].pageY), o.current = e.target, o.current.addEventListener(`touchmove`, l, {
                passive: !1
            }), o.current.addEventListener(`touchend`, u, {
                passive: !0
            }))
        };
    c = function() {
        o.current && (o.current.removeEventListener(`touchmove`, l), o.current.removeEventListener(`touchend`, u))
    }, m(function() {
        return e && t.current.addEventListener(`touchstart`, d, {
                passive: !0
            }),
            function() {
                var e;
                (e = t.current) == null || e.removeEventListener(`touchstart`, d), c(), clearInterval(s.current)
            }
    }, [e])
}

function wt(e) {
    return Math.floor(e ** .5)
}

function Tt(e, t) {
    return (`touches` in e ? e.touches[0] : e)[t ? `pageX` : `pageY`] - window[t ? `scrollX` : `scrollY`]
}

function Et(e, t, n) {
    X.useEffect(function() {
        var r = t.current;
        if (e && r) {
            var i = !1,
                a, o, s = function() {
                    V.cancel(a)
                },
                c = function e() {
                    s(), a = V(function() {
                        n(o), e()
                    })
                },
                l = function(e) {
                    if (!(e.target.draggable || e.button !== 0)) {
                        var t = e;
                        t._virtualHandled || (t._virtualHandled = !0, i = !0)
                    }
                },
                u = function() {
                    i = !1, s()
                },
                d = function(e) {
                    if (i) {
                        var t = Tt(e, !1),
                            n = r.getBoundingClientRect(),
                            a = n.top,
                            l = n.bottom;
                        t <= a ? (o = -wt(a - t), c()) : t >= l ? (o = wt(t - l), c()) : s()
                    }
                };
            return r.addEventListener(`mousedown`, l), r.ownerDocument.addEventListener(`mouseup`, u), r.ownerDocument.addEventListener(`mousemove`, d),
                function() {
                    r.removeEventListener(`mousedown`, l), r.ownerDocument.removeEventListener(`mouseup`, u), r.ownerDocument.removeEventListener(`mousemove`, d), s()
                }
        }
    }, [e])
}
f(), I();
var Dt = 10;

function Ot(e, t, n, r, i, a, o, s) {
    var c = X.useRef(),
        l = X.useState(null),
        d = M(l, 2),
        f = d[0],
        p = d[1];
    return m(function() {
            if (f && f.times < Dt) {
                if (!e.current) {
                    p(function(e) {
                        return u({}, e)
                    });
                    return
                }
                a();
                var s = f.targetAlign,
                    c = f.originAlign,
                    l = f.index,
                    d = f.offset,
                    m = e.current.clientHeight,
                    h = !1,
                    g = s,
                    _ = null;
                if (m) {
                    for (var v = s || c, y = 0, b = 0, x = 0, S = Math.min(t.length - 1, l), C = 0; C <= S; C += 1) {
                        var w = i(t[C]);
                        b = y;
                        var T = n.get(w);
                        x = b + (T === void 0 ? r : T), y = x
                    }
                    for (var E = v === `top` ? d : m - d, D = S; D >= 0; --D) {
                        var O = i(t[D]),
                            k = n.get(O);
                        if (k === void 0) {
                            h = !0;
                            break
                        }
                        if (E -= k, E <= 0) break
                    }
                    switch (v) {
                        case `top`:
                            _ = b - d;
                            break;
                        case `bottom`:
                            _ = x - m + d;
                            break;
                        default:
                            var A = e.current.scrollTop,
                                j = A + m;
                            b < A ? g = `top` : x > j && (g = `bottom`)
                    }
                    _ !== null && o(_), _ !== f.lastTop && (h = !0)
                }
                h && p(u(u({}, f), {}, {
                    times: f.times + 1,
                    targetAlign: g,
                    lastTop: _
                }))
            }
        }, [f, e.current]),
        function(e) {
            if (e == null) s();
            else if (V.cancel(c.current), typeof e == `number`) o(e);
            else if (e && x(e) === `object`) {
                var n, r = e.align;
                n = `index` in e ? e.index : t.findIndex(function(t) {
                    return i(t) === e.key
                });
                var a = e.offset;
                p({
                    times: 0,
                    index: n,
                    offset: a === void 0 ? 0 : a,
                    originAlign: r
                })
            }
        }
}
h(), I();
var kt = X.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.rtl,
            i = e.scrollOffset,
            a = e.scrollRange,
            o = e.onStartMove,
            s = e.onStopMove,
            c = e.onScroll,
            l = e.horizontal,
            d = e.spinSize,
            f = e.containerSize,
            m = e.style,
            h = e.thumbStyle,
            g = e.showScrollBar,
            _ = X.useState(!1),
            v = M(_, 2),
            y = v[0],
            b = v[1],
            x = X.useState(null),
            S = M(x, 2),
            C = S[0],
            w = S[1],
            T = X.useState(null),
            E = M(T, 2),
            D = E[0],
            O = E[1],
            k = !r,
            A = X.useRef(),
            j = X.useRef(),
            N = X.useState(g),
            P = M(N, 2),
            ee = P[0],
            F = P[1],
            te = X.useRef(),
            I = function() {
                g !== !0 && g !== !1 && (clearTimeout(te.current), F(!0), te.current = setTimeout(function() {
                    F(!1)
                }, 3e3))
            },
            L = a - f || 0,
            R = f - d || 0,
            z = X.useMemo(function() {
                return i === 0 || L === 0 ? 0 : i / L * R
            }, [i, L, R]),
            B = function(e) {
                e.stopPropagation(), e.preventDefault()
            },
            ne = X.useRef({
                top: z,
                dragging: y,
                pageY: C,
                startTop: D
            });
        ne.current = {
            top: z,
            dragging: y,
            pageY: C,
            startTop: D
        };
        var re = function(e) {
            b(!0), w(Tt(e, l)), O(ne.current.top), o(), e.stopPropagation(), e.preventDefault()
        };
        X.useEffect(function() {
            var e = function(e) {
                    e.preventDefault()
                },
                t = A.current,
                n = j.current;
            return t.addEventListener(`touchstart`, e, {
                    passive: !1
                }), n.addEventListener(`touchstart`, re, {
                    passive: !1
                }),
                function() {
                    t.removeEventListener(`touchstart`, e), n.removeEventListener(`touchstart`, re)
                }
        }, []);
        var H = X.useRef();
        H.current = L;
        var U = X.useRef();
        U.current = R, X.useEffect(function() {
            if (y) {
                var e, t = function(t) {
                        var n = ne.current,
                            r = n.dragging,
                            i = n.pageY,
                            a = n.startTop;
                        V.cancel(e);
                        var o = A.current.getBoundingClientRect(),
                            s = f / (l ? o.width : o.height);
                        if (r) {
                            var u = (Tt(t, l) - i) * s,
                                d = a;
                            !k && l ? d -= u : d += u;
                            var p = H.current,
                                m = U.current,
                                h = m ? d / m : 0,
                                g = Math.ceil(h * p);
                            g = Math.max(g, 0), g = Math.min(g, p), e = V(function() {
                                c(g, l)
                            })
                        }
                    },
                    n = function() {
                        b(!1), s()
                    };
                return window.addEventListener(`mousemove`, t, {
                        passive: !0
                    }), window.addEventListener(`touchmove`, t, {
                        passive: !0
                    }), window.addEventListener(`mouseup`, n, {
                        passive: !0
                    }), window.addEventListener(`touchend`, n, {
                        passive: !0
                    }),
                    function() {
                        window.removeEventListener(`mousemove`, t), window.removeEventListener(`touchmove`, t), window.removeEventListener(`mouseup`, n), window.removeEventListener(`touchend`, n), V.cancel(e)
                    }
            }
        }, [y]), X.useEffect(function() {
            return I(),
                function() {
                    clearTimeout(te.current)
                }
        }, [i]), X.useImperativeHandle(t, function() {
            return {
                delayHidden: I
            }
        });
        var W = `${n}-scrollbar`,
            ie = {
                position: `absolute`,
                visibility: ee ? null : `hidden`
            },
            G = {
                position: `absolute`,
                borderRadius: 99,
                background: `var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))`,
                cursor: `pointer`,
                userSelect: `none`
            };
        return l ? (Object.assign(ie, {
            height: 8,
            left: 0,
            right: 0,
            bottom: 0
        }), Object.assign(G, p({
            height: `100%`,
            width: d
        }, k ? `left` : `right`, z))) : (Object.assign(ie, p({
            width: 8,
            top: 0,
            bottom: 0
        }, k ? `right` : `left`, 0)), Object.assign(G, {
            width: `100%`,
            height: d,
            top: z
        })), X.createElement(`div`, {
            ref: A,
            className: (0, Z.default)(W, p(p(p({}, `${W}-horizontal`, l), `${W}-vertical`, !l), `${W}-visible`, ee)),
            style: u(u({}, ie), m),
            onMouseDown: B,
            onMouseMove: I
        }, X.createElement(`div`, {
            ref: j,
            className: (0, Z.default)(`${W}-thumb`, p({}, `${W}-thumb-moving`, y)),
            style: u(u({}, G), h),
            onMouseDown: re
        }))
    }),
    At = 20;

function jt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        t = e / (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) * e;
    return isNaN(t) && (t = 0), t = Math.max(t, At), Math.floor(t)
}
n(), f(), h(), I(), P();
var Mt = [`prefixCls`, `className`, `height`, `itemHeight`, `fullHeight`, `style`, `data`, `children`, `itemKey`, `virtual`, `direction`, `scrollWidth`, `component`, `onScroll`, `onVirtualScroll`, `onVisibleChange`, `innerProps`, `extraRender`, `styles`, `showScrollBar`],
    Nt = [],
    Pt = {
        overflowY: `auto`,
        overflowAnchor: `none`
    };

function Ft(e, t) {
    var n = e.prefixCls,
        r = n === void 0 ? `rc-virtual-list` : n,
        a = e.className,
        s = e.height,
        c = e.itemHeight,
        l = e.fullHeight,
        d = l === void 0 || l,
        f = e.style,
        h = e.data,
        g = e.children,
        _ = e.itemKey,
        v = e.virtual,
        y = e.direction,
        b = e.scrollWidth,
        S = e.component,
        C = S === void 0 ? `div` : S,
        w = e.onScroll,
        T = e.onVirtualScroll,
        E = e.onVisibleChange,
        D = e.innerProps,
        O = e.extraRender,
        k = e.styles,
        A = e.showScrollBar,
        j = A === void 0 ? `optional` : A,
        N = te(e, Mt),
        P = X.useCallback(function(e) {
            return typeof _ == `function` ? _(e) : e == null ? void 0 : e[_]
        }, [_]),
        ee = xt(P, null, null),
        F = M(ee, 4),
        I = F[0],
        L = F[1],
        R = F[2],
        z = F[3],
        B = !!(v !== !1 && s && c),
        ne = X.useMemo(function() {
            return Object.values(R.maps).reduce(function(e, t) {
                return e + t
            }, 0)
        }, [R.id, R.maps]),
        V = B && h && (Math.max(c * h.length, ne) > s || !!b),
        H = y === `rtl`,
        U = (0, Z.default)(r, p({}, `${r}-rtl`, H), a),
        W = h || Nt,
        ie = (0, X.useRef)(),
        G = (0, X.useRef)(),
        ae = (0, X.useRef)(),
        oe = (0, X.useState)(0),
        K = M(oe, 2),
        se = K[0],
        ce = K[1],
        le = (0, X.useState)(0),
        ue = M(le, 2),
        q = ue[0],
        de = ue[1],
        fe = (0, X.useState)(!1),
        pe = M(fe, 2),
        me = pe[0],
        he = pe[1],
        J = function() {
            he(!0)
        },
        ge = function() {
            he(!1)
        },
        Y = {
            getKey: P
        };

    function _e(e) {
        ce(function(t) {
            var n = Ie(typeof e == `function` ? e(t) : e);
            return ie.current.scrollTop = n, n
        })
    }
    var ve = (0, X.useRef)({
            start: 0,
            end: W.length
        }),
        ye = (0, X.useRef)(),
        be = mt(W, P);
    ye.current = M(be, 1)[0];
    var xe = X.useMemo(function() {
            if (!B) return {
                scrollHeight: void 0,
                start: 0,
                end: W.length - 1,
                offset: void 0
            };
            if (!V) {
                var e;
                return {
                    scrollHeight: ((e = G.current) == null ? void 0 : e.offsetHeight) || 0,
                    start: 0,
                    end: W.length - 1,
                    offset: void 0
                }
            }
            for (var t = 0, n, r, i, a = W.length, o = 0; o < a; o += 1) {
                var l = W[o],
                    u = P(l),
                    d = R.get(u),
                    f = t + (d === void 0 ? c : d);
                f >= se && n === void 0 && (n = o, r = t), f > se + s && i === void 0 && (i = o), t = f
            }
            return n === void 0 && (n = 0, r = 0, i = Math.ceil(s / c)), i === void 0 && (i = W.length - 1), i = Math.min(i + 1, W.length - 1), {
                scrollHeight: t,
                start: n,
                end: i,
                offset: r
            }
        }, [V, B, se, W, z, s]),
        Se = xe.scrollHeight,
        Ce = xe.start,
        we = xe.end,
        Te = xe.offset;
    ve.current.start = Ce, ve.current.end = we, X.useLayoutEffect(function() {
        var e = R.getRecord();
        if (e.size === 1) {
            var t = Array.from(e.keys())[0],
                n = e.get(t),
                r = W[Ce];
            if (r && n === void 0 && P(r) === t) {
                var i = R.get(t) - c;
                _e(function(e) {
                    return e + i
                })
            }
        }
        R.resetRecord()
    }, [Se]);
    var Ee = X.useState({
            width: 0,
            height: s
        }),
        De = M(Ee, 2),
        Q = De[0],
        Oe = De[1],
        ke = function(e) {
            Oe({
                width: e.offsetWidth,
                height: e.offsetHeight
            })
        },
        Ae = (0, X.useRef)(),
        je = (0, X.useRef)(),
        Me = X.useMemo(function() {
            return jt(Q.width, b)
        }, [Q.width, b]),
        Ne = X.useMemo(function() {
            return jt(Q.height, Se)
        }, [Q.height, Se]),
        Pe = Se - s,
        Fe = (0, X.useRef)(Pe);
    Fe.current = Pe;

    function Ie(e) {
        var t = e;
        return Number.isNaN(Fe.current) || (t = Math.min(t, Fe.current)), t = Math.max(t, 0), t
    }
    var Le = se <= 0,
        Re = se >= Pe,
        ze = q <= 0,
        Be = q >= b,
        Ve = gt(Le, Re, ze, Be),
        He = function() {
            return {
                x: H ? -q : q,
                y: se
            }
        },
        Ue = (0, X.useRef)(He()),
        We = o(function(e) {
            if (T) {
                var t = u(u({}, He()), e);
                (Ue.current.x !== t.x || Ue.current.y !== t.y) && (T(t), Ue.current = t)
            }
        });

    function Ge(e, t) {
        var n = e;
        t ? ((0, lt.flushSync)(function() {
            de(n)
        }), We()) : _e(n)
    }

    function Ke(e) {
        var t = e.currentTarget.scrollTop;
        t !== se && _e(t), w == null || w(e), We()
    }
    var qe = function(e) {
            var t = e,
                n = b ? b - Q.width : 0;
            return t = Math.max(t, 0), t = Math.min(t, n), t
        },
        Je = o(function(e, t) {
            t ? ((0, lt.flushSync)(function() {
                de(function(t) {
                    return qe(t + (H ? -e : e))
                })
            }), We()) : _e(function(t) {
                return t + e
            })
        }),
        Ye = _t(B, Le, Re, ze, Be, !!b, Je),
        Xe = M(Ye, 2),
        Ze = Xe[0],
        Qe = Xe[1];
    Ct(B, ie, function(e, t, n, r) {
        var i = r;
        return Ve(e, t, n) ? !1 : !i || !i._virtualHandled ? (i && (i._virtualHandled = !0), Ze({
            preventDefault: function() {},
            deltaX: e ? t : 0,
            deltaY: e ? 0 : t
        }), !0) : !1
    }), Et(V, ie, function(e) {
        _e(function(t) {
            return t + e
        })
    }), m(function() {
        function e(e) {
            var t = Le && e.detail < 0,
                n = Re && e.detail > 0;
            B && !t && !n && e.preventDefault()
        }
        var t = ie.current;
        return t.addEventListener(`wheel`, Ze, {
                passive: !1
            }), t.addEventListener(`DOMMouseScroll`, Qe, {
                passive: !0
            }), t.addEventListener(`MozMousePixelScroll`, e, {
                passive: !1
            }),
            function() {
                t.removeEventListener(`wheel`, Ze), t.removeEventListener(`DOMMouseScroll`, Qe), t.removeEventListener(`MozMousePixelScroll`, e)
            }
    }, [B, Le, Re]), m(function() {
        if (b) {
            var e = qe(q);
            de(e), We({
                x: e
            })
        }
    }, [Q.width, b]);
    var $ = function() {
            var e, t;
            (e = Ae.current) == null || e.delayHidden(), (t = je.current) == null || t.delayHidden()
        },
        $e = Ot(ie, W, R, c, P, function() {
            return L(!0)
        }, _e, $);
    X.useImperativeHandle(t, function() {
        return {
            nativeElement: ae.current,
            getScrollInfo: He,
            scrollTo: function(e) {
                function t(e) {
                    return e && x(e) === `object` && (`left` in e || `top` in e)
                }
                t(e) ? (e.left !== void 0 && de(qe(e.left)), $e(e.top)) : $e(e)
            }
        }
    }), m(function() {
        E && E(W.slice(Ce, we + 1), W)
    }, [Ce, we, W]);
    var et = vt(W, P, R, c),
        tt = O == null ? void 0 : O({
            start: Ce,
            end: we,
            virtual: V,
            offsetX: q,
            offsetY: Te,
            rtl: H,
            getSize: et
        }),
        nt = ft(W, Ce, we, b, q, I, g, Y),
        rt = null;
    s && (rt = u(p({}, d ? `height` : `maxHeight`, s), Pt), B && (rt.overflowY = `hidden`, b && (rt.overflowX = `hidden`), me && (rt.pointerEvents = `none`)));
    var it = {};
    return H && (it.dir = `rtl`), X.createElement(`div`, i({
        ref: ae,
        style: u(u({}, f), {}, {
            position: `relative`
        }),
        className: U
    }, it, N), X.createElement(re, {
        onResize: ke
    }, X.createElement(C, {
        className: `${r}-holder`,
        style: rt,
        ref: ie,
        onScroll: Ke,
        onMouseEnter: $
    }, X.createElement(ut, {
        prefixCls: r,
        height: Se,
        offsetX: q,
        offsetY: Te,
        scrollWidth: b,
        onInnerResize: L,
        ref: G,
        innerProps: D,
        rtl: H,
        extra: tt
    }, nt))), V && Se > s && X.createElement(kt, {
        ref: Ae,
        prefixCls: r,
        scrollOffset: se,
        scrollRange: Se,
        rtl: H,
        onScroll: Ge,
        onStartMove: J,
        onStopMove: ge,
        spinSize: Ne,
        containerSize: Q.height,
        style: k == null ? void 0 : k.verticalScrollBar,
        thumbStyle: k == null ? void 0 : k.verticalScrollBarThumb,
        showScrollBar: j
    }), V && b > Q.width && X.createElement(kt, {
        ref: je,
        prefixCls: r,
        scrollOffset: q,
        scrollRange: b,
        rtl: H,
        onScroll: Ge,
        onStartMove: J,
        onStopMove: ge,
        spinSize: Me,
        containerSize: Q.width,
        horizontal: !0,
        style: k == null ? void 0 : k.horizontalScrollBar,
        thumbStyle: k == null ? void 0 : k.horizontalScrollBarThumb,
        showScrollBar: j
    }))
}
var It = X.forwardRef(Ft);
It.displayName = `List`;
var Lt = It;

function Rt() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
h(), P(), n(), I(), O();
var zt = [`disabled`, `title`, `children`, `style`, `className`];

function Bt(e) {
    return typeof e == `string` || typeof e == `number`
}
var Vt = X.forwardRef(function(e, t) {
        var n = Q(),
            r = n.prefixCls,
            a = n.id,
            o = n.open,
            s = n.multiple,
            c = n.mode,
            l = n.searchValue,
            u = n.toggleOpen,
            d = n.notFoundContent,
            f = n.onPopupScroll,
            m = X.useContext(tt),
            h = m.maxCount,
            g = m.flattenOptions,
            _ = m.onActiveValue,
            y = m.defaultActiveFirstOption,
            b = m.onSelect,
            x = m.menuItemSelectedIcon,
            S = m.rawValues,
            C = m.fieldNames,
            w = m.virtual,
            T = m.direction,
            E = m.listHeight,
            D = m.listItemHeight,
            O = m.optionRender,
            k = `${r}-item`,
            j = v(function() {
                return g
            }, [o, g], function(e, t) {
                return t[0] && e[1] !== t[1]
            }),
            N = X.useRef(null),
            P = X.useMemo(function() {
                return s && Ze(h) && (S == null ? void 0 : S.size) >= h
            }, [s, h, S == null ? void 0 : S.size]),
            ee = function(e) {
                e.preventDefault()
            },
            F = function(e) {
                var t;
                (t = N.current) == null || t.scrollTo(typeof e == `number` ? {
                    index: e
                } : e)
            },
            I = X.useCallback(function(e) {
                return c !== `combobox` && S.has(e)
            }, [c, A(S).toString(), S.size]),
            L = function(e) {
                for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = j.length, r = 0; r < n; r += 1) {
                    var i = (e + r * t + n) % n,
                        a = j[i] || {},
                        o = a.group,
                        s = a.data;
                    if (!o && !(s != null && s.disabled) && (I(s.value) || !P)) return i
                }
                return -1
            },
            R = X.useState(function() {
                return L(0)
            }),
            z = M(R, 2),
            B = z[0],
            V = z[1],
            re = function(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                V(e);
                var n = {
                        source: t ? `keyboard` : `mouse`
                    },
                    r = j[e];
                r ? _(r.value, e, n) : _(null, -1, n)
            };
        (0, X.useEffect)(function() {
            re(y === !1 ? -1 : L(0))
        }, [j.length, l]);
        var H = X.useCallback(function(e) {
            return c === `combobox` ? String(e).toLowerCase() === l.toLowerCase() : S.has(e)
        }, [c, l, A(S).toString(), S.size]);
        (0, X.useEffect)(function() {
            var e = setTimeout(function() {
                if (!s && o && S.size === 1) {
                    var e = Array.from(S)[0],
                        t = j.findIndex(function(t) {
                            var n = t.data;
                            return l ? String(n.value).startsWith(l) : n.value === e
                        });
                    t !== -1 && (re(t), F(t))
                }
            });
            if (o) {
                var t;
                (t = N.current) == null || t.scrollTo(void 0)
            }
            return function() {
                return clearTimeout(e)
            }
        }, [o, l]);
        var U = function(e) {
            e !== void 0 && b(e, {
                selected: !S.has(e)
            }), s || u(!1)
        };
        if (X.useImperativeHandle(t, function() {
                return {
                    onKeyDown: function(e) {
                        var t = e.which,
                            n = e.ctrlKey;
                        switch (t) {
                            case G.N:
                            case G.P:
                            case G.UP:
                            case G.DOWN:
                                var r = 0;
                                if (t === G.UP ? r = -1 : t === G.DOWN ? r = 1 : Rt() && n && (t === G.N ? r = 1 : t === G.P && (r = -1)), r !== 0) {
                                    var i = L(B + r, r);
                                    F(i), re(i, !0)
                                }
                                break;
                            case G.TAB:
                            case G.ENTER:
                                var a, s = j[B];
                                s && !(s != null && (a = s.data) != null && a.disabled) && !P ? U(s.value) : U(void 0), o && e.preventDefault();
                                break;
                            case G.ESC:
                                u(!1), o && e.stopPropagation()
                        }
                    },
                    onKeyUp: function() {},
                    scrollTo: function(e) {
                        F(e)
                    }
                }
            }), j.length === 0) return X.createElement(`div`, {
            role: `listbox`,
            id: `${a}_list`,
            className: `${k}-empty`,
            onMouseDown: ee
        }, d);
        var W = Object.keys(C).map(function(e) {
                return C[e]
            }),
            ie = function(e) {
                return e.label
            };

        function ae(e, t) {
            return {
                role: e.group ? `presentation` : `option`,
                id: `${a}_list_${t}`
            }
        }
        var oe = function(e) {
                var t = j[e];
                if (!t) return null;
                var n = t.data || {},
                    r = n.value,
                    a = t.group,
                    o = q(n, !0),
                    s = ie(t);
                return t ? X.createElement(`div`, i({
                    "aria-label": typeof s == `string` && !a ? s : null
                }, o, {
                    key: e
                }, ae(t, e), {
                    "aria-selected": H(r)
                }), r) : null
            },
            K = {
                role: `listbox`,
                id: `${a}_list`
            };
        return X.createElement(X.Fragment, null, w && X.createElement(`div`, i({}, K, {
            style: {
                height: 0,
                width: 0,
                overflow: `hidden`
            }
        }), oe(B - 1), oe(B), oe(B + 1)), X.createElement(Lt, {
            itemKey: `key`,
            ref: N,
            data: j,
            height: E,
            itemHeight: D,
            fullHeight: !1,
            onMouseDown: ee,
            onScroll: f,
            virtual: w,
            direction: T,
            innerProps: w ? null : K
        }, function(e, t) {
            var n = e.group,
                r = e.groupOption,
                a = e.data,
                o = e.label,
                s = e.value,
                c = a.key;
            if (n) {
                var l = a.title ?? (Bt(o) ? o.toString() : void 0);
                return X.createElement(`div`, {
                    className: (0, Z.default)(k, `${k}-group`, a.className),
                    title: l
                }, o === void 0 ? c : o)
            }
            var u = a.disabled,
                d = a.title;
            a.children;
            var f = a.style,
                m = a.className,
                h = te(a, zt),
                g = ne(h, W),
                _ = I(s),
                v = u || !_ && P,
                y = `${k}-option`,
                b = (0, Z.default)(k, y, m, p(p(p(p({}, `${y}-grouped`, r), `${y}-active`, B === t && !v), `${y}-disabled`, v), `${y}-selected`, _)),
                S = ie(e),
                C = !x || typeof x == `function` || _,
                T = typeof S == `number` ? S : S || s,
                E = Bt(T) ? T.toString() : void 0;
            return d !== void 0 && (E = d), X.createElement(`div`, i({}, q(g), w ? {} : ae(e, t), {
                "aria-selected": H(s),
                className: b,
                title: E,
                onMouseMove: function() {
                    B === t || v || re(t)
                },
                onClick: function() {
                    v || U(s)
                },
                style: f
            }), X.createElement(`div`, {
                className: `${y}-content`
            }, typeof O == `function` ? O(e, {
                index: t
            }) : T), X.isValidElement(x) || _, C && X.createElement(Te, {
                className: `${k}-option-state`,
                customizeIcon: x,
                customizeIconProps: {
                    value: s,
                    disabled: v,
                    isSelected: _
                }
            }, _ ? `✓` : null))
        }))
    }),
    Ht = (function(e, t) {
        var n = X.useRef({
            values: new Map,
            options: new Map
        });
        return [X.useMemo(function() {
            var r = n.current,
                i = r.values,
                a = r.options,
                o = e.map(function(e) {
                    if (e.label === void 0) {
                        var t;
                        return u(u({}, e), {}, {
                            label: (t = i.get(e.value)) == null ? void 0 : t.label
                        })
                    }
                    return e
                }),
                s = new Map,
                c = new Map;
            return o.forEach(function(e) {
                s.set(e.value, e), c.set(e.value, t.get(e.value) || a.get(e.value))
            }), n.current.values = s, n.current.options = c, o
        }, [e, t]), X.useCallback(function(e) {
            return t.get(e) || n.current.options.get(e)
        }, [t])]
    });
h();

function Ut(e, t) {
    return Fe(e).join(``).toUpperCase().includes(t)
}
var Wt = (function(e, t, n, r, i) {
    return X.useMemo(function() {
        if (!n || r === !1) return e;
        var a = t.options,
            o = t.label,
            s = t.value,
            c = [],
            l = typeof r == `function`,
            d = n.toUpperCase(),
            f = l ? r : function(e, t) {
                return i ? Ut(t[i], d) : t[a] ? Ut(t[o === `children` ? `label` : o], d) : Ut(t[s], d)
            },
            m = l ? function(e) {
                return $e(e)
            } : function(e) {
                return e
            };
        return e.forEach(function(e) {
            if (e[a]) {
                if (f(n, m(e))) c.push(e);
                else {
                    var t = e[a].filter(function(e) {
                        return f(n, m(e))
                    });
                    t.length && c.push(u(u({}, e), {}, p({}, a, t)))
                }
            } else f(n, m(e)) && c.push(e)
        }), c
    }, [e, r, i, n, t])
});
I();
var Gt = 0,
    Kt = E();

function qt() {
    var e;
    return Kt ? (e = Gt, Gt += 1) : e = `TEST_OR_SSR`, e
}

function Jt(e) {
    var t = X.useState(),
        n = M(t, 2),
        r = n[0],
        i = n[1];
    return X.useEffect(function() {
        i(`rc_select_${qt()}`)
    }, []), e || r
}
P();
var Yt = [`children`, `value`],
    Xt = [`children`];

function Zt(e) {
    var t = e,
        n = t.key,
        r = t.props,
        i = r.children,
        a = r.value,
        o = te(r, Yt);
    return u({
        key: n,
        value: a === void 0 ? n : a,
        children: i
    }, o)
}

function Qt(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return a(e).map(function(e, n) {
        if (!X.isValidElement(e) || !e.type) return null;
        var r = e,
            i = r.type.isSelectOptGroup,
            a = r.key,
            o = r.props,
            s = o.children,
            c = te(o, Xt);
        return t || !i ? Zt(e) : u(u({
            key: `__RC_SELECT_GRP__${a===null?n:a}__`,
            label: a
        }, c), {}, {
            options: Qt(s)
        })
    }).filter(function(e) {
        return e
    })
}
var $t = function(e, t, n, r, i) {
    return X.useMemo(function() {
        var a = e;
        e || (a = Qt(t));
        var o = new Map,
            s = new Map,
            c = function(e, t, n) {
                n && typeof n == `string` && e.set(t[n], t)
            };
        return (function e(t) {
            for (var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], l = 0; l < t.length; l += 1) {
                var u = t[l];
                !u[n.options] || a ? (o.set(u[n.value], u), c(s, u, n.label), c(s, u, r), c(s, u, i)) : e(u[n.options], !0)
            }
        })(a), {
            options: a,
            valueOptions: o,
            labelOptions: s
        }
    }, [e, t, n, r, i])
};

function en(e) {
    var t = X.useRef();
    return t.current = e, X.useCallback(function() {
        return t.current.apply(t, arguments)
    }, [])
}
n(), O(), h(), I(), P(), f();
var tn = `id.mode.prefixCls.backfill.fieldNames.inputValue.searchValue.onSearch.autoClearSearchValue.onSelect.onDeselect.dropdownMatchSelectWidth.filterOption.filterSort.optionFilterProp.optionLabelProp.options.optionRender.children.defaultActiveFirstOption.menuItemSelectedIcon.virtual.direction.listHeight.listItemHeight.labelRender.value.defaultValue.labelInValue.onChange.maxCount`.split(`.`),
    nn = [`inputValue`];

function rn(e) {
    return !e || x(e) !== `object`
}
var an = X.forwardRef(function(e, t) {
    var n = e.id,
        r = e.mode,
        a = e.prefixCls,
        o = a === void 0 ? `rc-select` : a,
        s = e.backfill,
        c = e.fieldNames,
        l = e.inputValue,
        d = e.searchValue,
        f = e.onSearch,
        m = e.autoClearSearchValue,
        h = m === void 0 || m,
        g = e.onSelect,
        _ = e.onDeselect,
        v = e.dropdownMatchSelectWidth,
        y = v === void 0 || v,
        b = e.filterOption,
        x = e.filterSort,
        S = e.optionFilterProp,
        C = e.optionLabelProp,
        w = e.options,
        T = e.optionRender,
        E = e.children,
        D = e.defaultActiveFirstOption,
        O = e.menuItemSelectedIcon,
        k = e.virtual,
        j = e.direction,
        N = e.listHeight,
        P = N === void 0 ? 200 : N,
        ee = e.listItemHeight,
        F = ee === void 0 ? 20 : ee,
        I = e.labelRender,
        L = e.value,
        z = e.defaultValue,
        B = e.labelInValue,
        ne = e.onChange,
        V = e.maxCount,
        re = te(e, tn),
        H = Jt(n),
        U = at(r),
        W = !(w || !E),
        ie = X.useMemo(function() {
            return b === void 0 && r === `combobox` ? !1 : b
        }, [b, r]),
        G = X.useMemo(function() {
            return Qe(c, W)
        }, [JSON.stringify(c), W]),
        ae = R(``, {
            value: d === void 0 ? l : d,
            postState: function(e) {
                return e || ``
            }
        }),
        oe = M(ae, 2),
        K = oe[0],
        se = oe[1],
        ce = $t(w, E, G, S, C),
        le = ce.valueOptions,
        ue = ce.labelOptions,
        q = ce.options,
        de = X.useCallback(function(e) {
            return Fe(e).map(function(e) {
                var t, n, r, i, a;
                rn(e) ? t = e : (r = e.key, n = e.label, t = e.value ?? r);
                var o = le.get(t);
                return o && (n === void 0 && (n = o == null ? void 0 : o[C || G.label]), r === void 0 && (r = (o == null ? void 0 : o.key) ?? t), i = o == null ? void 0 : o.disabled, a = o == null ? void 0 : o.title), {
                    label: n,
                    value: t,
                    key: r,
                    disabled: i,
                    title: a
                }
            })
        }, [G, C, le]),
        fe = R(z, {
            value: L
        }),
        pe = M(fe, 2),
        me = pe[0],
        he = pe[1],
        J = Ht(X.useMemo(function() {
            var e, t = de(U && me === null ? [] : me);
            return r === `combobox` && Re((e = t[0]) == null ? void 0 : e.value) ? [] : t
        }, [me, de, r, U]), le),
        ge = M(J, 2),
        Y = ge[0],
        _e = ge[1],
        ve = X.useMemo(function() {
            if (!r && Y.length === 1) {
                var e = Y[0];
                if (e.value === null && (e.label === null || e.label === void 0)) return []
            }
            return Y.map(function(e) {
                return u(u({}, e), {}, {
                    label: (typeof I == `function` ? I(e) : e.label) ?? e.value
                })
            })
        }, [r, Y, I]),
        ye = X.useMemo(function() {
            return new Set(Y.map(function(e) {
                return e.value
            }))
        }, [Y]);
    X.useEffect(function() {
        if (r === `combobox`) {
            var e, t = (e = Y[0]) == null ? void 0 : e.value;
            se(Le(t) ? String(t) : ``)
        }
    }, [Y]);
    var be = en(function(e, t) {
            var n = t ?? e;
            return p(p({}, G.value, e), G.label, n)
        }),
        xe = Wt(X.useMemo(function() {
            if (r !== `tags`) return q;
            var e = A(q),
                t = function(e) {
                    return le.has(e)
                };
            return A(Y).sort(function(e, t) {
                return e.value < t.value ? -1 : 1
            }).forEach(function(n) {
                var r = n.value;
                t(r) || e.push(be(r, n.label))
            }), e
        }, [be, q, le, Y, r]), G, K, ie, S),
        Se = X.useMemo(function() {
            return r !== `tags` || !K || xe.some(function(e) {
                return e[S || `value`] === K
            }) || xe.some(function(e) {
                return e[G.value] === K
            }) ? xe : [be(K)].concat(A(xe))
        }, [be, S, r, xe, K, G]),
        Ce = function e(t) {
            return A(t).sort(function(e, t) {
                return x(e, t, {
                    searchValue: K
                })
            }).map(function(t) {
                return Array.isArray(t.options) ? u(u({}, t), {}, {
                    options: t.options.length > 0 ? e(t.options) : t.options
                }) : t
            })
        },
        we = X.useMemo(function() {
            return x ? Ce(Se) : Se
        }, [Se, x, K]),
        Z = X.useMemo(function() {
            return $(we, {
                fieldNames: G,
                childrenAsData: W
            })
        }, [we, G, W]),
        Te = function(e) {
            var t = de(e);
            if (he(t), ne && (t.length !== Y.length || t.some(function(e, t) {
                    var n;
                    return ((n = Y[t]) == null ? void 0 : n.value) !== (e == null ? void 0 : e.value)
                }))) {
                var n = B ? t : t.map(function(e) {
                        return e.value
                    }),
                    r = t.map(function(e) {
                        return $e(_e(e.value))
                    });
                ne(U ? n : n[0], U ? r : r[0])
            }
        },
        Ee = X.useState(null),
        De = M(Ee, 2),
        Q = De[0],
        Oe = De[1],
        ke = X.useState(0),
        Ae = M(ke, 2),
        je = Ae[0],
        Me = Ae[1],
        Ne = D === void 0 ? r !== `combobox` : D,
        Pe = X.useCallback(function(e, t) {
            var n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).source,
                i = n === void 0 ? `keyboard` : n;
            Me(t), s && r === `combobox` && e !== null && i === `keyboard` && Oe(String(e))
        }, [s, r]),
        Ie = function(e, t, n) {
            var r = function() {
                var t = _e(e);
                return [B ? {
                    label: t == null ? void 0 : t[G.label],
                    value: e,
                    key: (t == null ? void 0 : t.key) ?? e
                } : e, $e(t)]
            };
            if (t && g) {
                var i = r(),
                    a = M(i, 2),
                    o = a[0],
                    s = a[1];
                g(o, s)
            } else if (!t && _ && n !== `clear`) {
                var c = r(),
                    l = M(c, 2),
                    u = l[0],
                    d = l[1];
                _(u, d)
            }
        },
        ze = en(function(e, t) {
            var n, i = !U || t.selected;
            n = i ? U ? [].concat(A(Y), [e]) : [e] : Y.filter(function(t) {
                return t.value !== e
            }), Te(n), Ie(e, i), r === `combobox` ? Oe(``) : (!at || h) && (se(``), Oe(``))
        }),
        Be = function(e, t) {
            Te(e);
            var n = t.type,
                r = t.values;
            (n === `remove` || n === `clear`) && r.forEach(function(e) {
                Ie(e.value, !1, n)
            })
        },
        Ve = function(e, t) {
            if (se(e), Oe(null), t.source === `submit`) {
                var n = (e || ``).trim();
                n && (Te(Array.from(new Set([].concat(A(ye), [n])))), Ie(n, !0), se(``))
            } else t.source !== `blur` && (r === `combobox` && Te(e), f == null || f(e))
        },
        He = function(e) {
            var t = e;
            r !== `tags` && (t = e.map(function(e) {
                var t = ue.get(e);
                return t == null ? void 0 : t.value
            }).filter(function(e) {
                return e !== void 0
            }));
            var n = Array.from(new Set([].concat(A(ye), A(t))));
            Te(n), n.forEach(function(e) {
                Ie(e, !0)
            })
        },
        Ue = X.useMemo(function() {
            var e = k !== !1 && y !== !1;
            return u(u({}, ce), {}, {
                flattenOptions: Z,
                onActiveValue: Pe,
                defaultActiveFirstOption: Ne,
                onSelect: ze,
                menuItemSelectedIcon: O,
                rawValues: ye,
                fieldNames: G,
                virtual: e,
                direction: j,
                listHeight: P,
                listItemHeight: F,
                childrenAsData: W,
                maxCount: V,
                optionRender: T
            })
        }, [V, ce, Z, Pe, Ne, ze, O, ye, G, k, y, j, P, F, W, T]);
    return X.createElement(tt.Provider, {
        value: Ue
    }, X.createElement(ot, i({}, re, {
        id: H,
        prefixCls: o,
        ref: t,
        omitDomProps: nn,
        mode: r,
        displayValues: ve,
        onDisplayValuesChange: Be,
        direction: j,
        searchValue: K,
        onSearch: Ve,
        autoClearSearchValue: h,
        onSearchSplit: He,
        dropdownMatchSelectWidth: y,
        OptionList: Vt,
        emptyOptions: !Z.length,
        activeValue: Q,
        activeDescendantId: `${H}_list_${je}`
    })))
});
an.Option = ct, an.OptGroup = st;
var on = an,
    sn = () => {
        let [, e] = C(), [t] = ce(`Empty`), n = new d(e.colorBgBase).toHsl().l < .5 ? {
            opacity: .65
        } : {};
        return X.createElement(`svg`, {
            style: n,
            width: `184`,
            height: `152`,
            viewBox: `0 0 184 152`,
            xmlns: `http://www.w3.org/2000/svg`
        }, X.createElement(`title`, null, (t == null ? void 0 : t.description) || `Empty`), X.createElement(`g`, {
            fill: `none`,
            fillRule: `evenodd`
        }, X.createElement(`g`, {
            transform: `translate(24 31.67)`
        }, X.createElement(`ellipse`, {
            fillOpacity: `.8`,
            fill: `#F5F5F7`,
            cx: `67.797`,
            cy: `106.89`,
            rx: `67.797`,
            ry: `12.668`
        }), X.createElement(`path`, {
            d: `M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z`,
            fill: `#AEB8C2`
        }), X.createElement(`path`, {
            d: `M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z`,
            fill: `url(#linearGradient-1)`,
            transform: `translate(13.56)`
        }), X.createElement(`path`, {
            d: `M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z`,
            fill: `#F5F5F7`
        }), X.createElement(`path`, {
            d: `M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z`,
            fill: `#DCE0E6`
        })), X.createElement(`path`, {
            d: `M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z`,
            fill: `#DCE0E6`
        }), X.createElement(`g`, {
            transform: `translate(149.65 15.383)`,
            fill: `#FFF`
        }, X.createElement(`ellipse`, {
            cx: `20.654`,
            cy: `3.167`,
            rx: `2.849`,
            ry: `2.815`
        }), X.createElement(`path`, {
            d: `M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z`
        }))))
    },
    cn = () => {
        let [, e] = C(), [t] = ce(`Empty`), {
            colorFill: n,
            colorFillTertiary: r,
            colorFillQuaternary: i,
            colorBgContainer: a
        } = e, {
            borderColor: o,
            shadowColor: s,
            contentColor: c
        } = (0, X.useMemo)(() => ({
            borderColor: new d(n).onBackground(a).toHexString(),
            shadowColor: new d(r).onBackground(a).toHexString(),
            contentColor: new d(i).onBackground(a).toHexString()
        }), [n, r, i, a]);
        return X.createElement(`svg`, {
            width: `64`,
            height: `41`,
            viewBox: `0 0 64 41`,
            xmlns: `http://www.w3.org/2000/svg`
        }, X.createElement(`title`, null, (t == null ? void 0 : t.description) || `Empty`), X.createElement(`g`, {
            transform: `translate(0 1)`,
            fill: `none`,
            fillRule: `evenodd`
        }, X.createElement(`ellipse`, {
            fill: s,
            cx: `32`,
            cy: `33`,
            rx: `32`,
            ry: `7`
        }), X.createElement(`g`, {
            fillRule: `nonzero`,
            stroke: o
        }, X.createElement(`path`, {
            d: `M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z`
        }), X.createElement(`path`, {
            d: `M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z`,
            fill: c
        }))))
    },
    ln = e => {
        let {
            componentCls: t,
            margin: n,
            marginXS: r,
            marginXL: i,
            fontSize: a,
            lineHeight: o
        } = e;
        return {
            [t]: {
                marginInline: r,
                fontSize: a,
                lineHeight: o,
                textAlign: `center`,
                [`${t}-image`]: {
                    height: e.emptyImgHeight,
                    marginBottom: r,
                    opacity: e.opacityImage,
                    img: {
                        height: `100%`
                    },
                    svg: {
                        maxWidth: `100%`,
                        height: `100%`,
                        margin: `auto`
                    }
                },
                [`${t}-description`]: {
                    color: e.colorTextDescription
                },
                [`${t}-footer`]: {
                    marginTop: n
                },
                "&-normal": {
                    marginBlock: i,
                    color: e.colorTextDescription,
                    [`${t}-description`]: {
                        color: e.colorTextDescription
                    },
                    [`${t}-image`]: {
                        height: e.emptyImgHeightMD
                    }
                },
                "&-small": {
                    marginBlock: r,
                    color: e.colorTextDescription,
                    [`${t}-image`]: {
                        height: e.emptyImgHeightSM
                    }
                }
            }
        }
    },
    un = F(`Empty`, e => {
        let {
            componentCls: t,
            controlHeightLG: n,
            calc: r
        } = e;
        return ln(T(e, {
            emptyImgCls: `${t}-img`,
            emptyImgHeight: r(n).mul(2.5).equal(),
            emptyImgHeightMD: n,
            emptyImgHeightSM: r(n).mul(.875).equal()
        }))
    }),
    dn = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    fn = X.createElement(sn, null),
    pn = X.createElement(cn, null),
    mn = e => {
        let {
            className: t,
            rootClassName: n,
            prefixCls: r,
            image: i,
            description: a,
            children: o,
            imageStyle: s,
            style: c,
            classNames: l,
            styles: u
        } = e, d = dn(e, [`className`, `rootClassName`, `prefixCls`, `image`, `description`, `children`, `imageStyle`, `style`, `classNames`, `styles`]), {
            getPrefixCls: f,
            direction: p,
            className: m,
            style: h,
            classNames: g,
            styles: _,
            image: v
        } = j(`empty`), y = f(`empty`, r), [b, x, S] = un(y), [C] = ce(`Empty`), w = a === void 0 ? C == null ? void 0 : C.description : a, T = typeof w == `string` ? w : `empty`, E = i ?? v ?? fn, D = null;
        return D = typeof E == `string` ? X.createElement(`img`, {
            alt: T,
            src: E
        }) : E, b(X.createElement(`div`, Object.assign({
            className: (0, Z.default)(x, S, y, m, {
                [`${y}-normal`]: E === pn,
                [`${y}-rtl`]: p === `rtl`
            }, t, n, g.root, l == null ? void 0 : l.root),
            style: Object.assign(Object.assign(Object.assign(Object.assign({}, _.root), h), u == null ? void 0 : u.root), c)
        }, d), X.createElement(`div`, {
            className: (0, Z.default)(`${y}-image`, g.image, l == null ? void 0 : l.image),
            style: Object.assign(Object.assign(Object.assign({}, s), _.image), u == null ? void 0 : u.image)
        }, D), w && X.createElement(`div`, {
            className: (0, Z.default)(`${y}-description`, g.description, l == null ? void 0 : l.description),
            style: Object.assign(Object.assign({}, _.description), u == null ? void 0 : u.description)
        }, w), o && X.createElement(`div`, {
            className: (0, Z.default)(`${y}-footer`, g.footer, l == null ? void 0 : l.footer),
            style: Object.assign(Object.assign({}, _.footer), u == null ? void 0 : u.footer)
        }, o)))
    };
mn.PRESENTED_IMAGE_DEFAULT = fn, mn.PRESENTED_IMAGE_SIMPLE = pn;
var hn = e => {
        let {
            componentName: t
        } = e, {
            getPrefixCls: n
        } = (0, X.useContext)(c), r = n(`empty`);
        switch (t) {
            case `Table`:
            case `List`:
                return X.createElement(mn, {
                    image: mn.PRESENTED_IMAGE_SIMPLE
                });
            case `Select`:
            case `TreeSelect`:
            case `Cascader`:
            case `Transfer`:
            case `Mentions`:
                return X.createElement(mn, {
                    image: mn.PRESENTED_IMAGE_SIMPLE,
                    className: `${r}-small`
                });
            case `Table.filter`:
                return null;
            default:
                return X.createElement(mn, null)
        }
    },
    gn = e => {
        let t = {
            overflow: {
                adjustX: !0,
                adjustY: !0,
                shiftY: !0
            },
            htmlRegion: e === `scroll` ? `scroll` : `visible`,
            dynamicInset: !0
        };
        return {
            bottomLeft: Object.assign(Object.assign({}, t), {
                points: [`tl`, `bl`],
                offset: [0, 4]
            }),
            bottomRight: Object.assign(Object.assign({}, t), {
                points: [`tr`, `br`],
                offset: [0, 4]
            }),
            topLeft: Object.assign(Object.assign({}, t), {
                points: [`bl`, `tl`],
                offset: [0, -4]
            }),
            topRight: Object.assign(Object.assign({}, t), {
                points: [`br`, `tr`],
                offset: [0, -4]
            })
        }
    };

function _n(e, t) {
    return e || gn(t)
}
var vn = e => {
        let {
            optionHeight: t,
            optionFontSize: n,
            optionLineHeight: r,
            optionPadding: i
        } = e;
        return {
            position: `relative`,
            display: `block`,
            minHeight: t,
            padding: i,
            color: e.colorText,
            fontWeight: `normal`,
            fontSize: n,
            lineHeight: r,
            boxSizing: `border-box`
        }
    },
    yn = e => {
        let {
            antCls: t,
            componentCls: n
        } = e, r = `${n}-item`, i = `&${t}-slide-up-enter${t}-slide-up-enter-active`, a = `&${t}-slide-up-appear${t}-slide-up-appear-active`, o = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`, c = `${r}-option-selected`;
        return [{
            [`${n}-dropdown`]: Object.assign(Object.assign({}, N(e)), {
                position: `absolute`,
                top: -9999,
                zIndex: e.zIndexPopup,
                boxSizing: `border-box`,
                padding: e.paddingXXS,
                overflow: `hidden`,
                fontSize: e.fontSize,
                fontVariant: `initial`,
                backgroundColor: e.colorBgElevated,
                borderRadius: e.borderRadiusLG,
                outline: `none`,
                boxShadow: e.boxShadowSecondary,
                [`
          ${i}${s}bottomLeft,
          ${a}${s}bottomLeft
        `]: {
                    animationName: fe
                },
                [`
          ${i}${s}topLeft,
          ${a}${s}topLeft,
          ${i}${s}topRight,
          ${a}${s}topRight
        `]: {
                    animationName: J
                },
                [`${o}${s}bottomLeft`]: {
                    animationName: he
                },
                [`
          ${o}${s}topLeft,
          ${o}${s}topRight
        `]: {
                    animationName: pe
                },
                "&-hidden": {
                    display: `none`
                },
                [r]: Object.assign(Object.assign({}, vn(e)), {
                    cursor: `pointer`,
                    transition: `background ${e.motionDurationSlow} ease`,
                    borderRadius: e.borderRadiusSM,
                    "&-group": {
                        color: e.colorTextDescription,
                        fontSize: e.fontSizeSM,
                        cursor: `default`
                    },
                    "&-option": {
                        display: `flex`,
                        "&-content": Object.assign({
                            flex: `auto`
                        }, D),
                        "&-state": {
                            flex: `none`,
                            display: `flex`,
                            alignItems: `center`
                        },
                        [`&-active:not(${r}-option-disabled)`]: {
                            backgroundColor: e.optionActiveBg
                        },
                        [`&-selected:not(${r}-option-disabled)`]: {
                            color: e.optionSelectedColor,
                            fontWeight: e.optionSelectedFontWeight,
                            backgroundColor: e.optionSelectedBg,
                            [`${r}-option-state`]: {
                                color: e.colorPrimary
                            }
                        },
                        "&-disabled": {
                            [`&${r}-option-selected`]: {
                                backgroundColor: e.colorBgContainerDisabled
                            },
                            color: e.colorTextDisabled,
                            cursor: `not-allowed`
                        },
                        "&-grouped": {
                            paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
                        }
                    },
                    "&-empty": Object.assign(Object.assign({}, vn(e)), {
                        color: e.colorTextDisabled
                    })
                }),
                [`${c}:has(+ ${c})`]: {
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                    [`& + ${c}`]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0
                    }
                },
                "&-rtl": {
                    direction: `rtl`
                }
            })
        }, me(e, `slide-up`), me(e, `slide-down`), de(e, `move-up`), de(e, `move-down`)]
    },
    bn = e => {
        let {
            multipleSelectItemHeight: t,
            paddingXXS: n,
            lineWidth: r,
            INTERNAL_FIXED_ITEM_MARGIN: i
        } = e, a = e.max(e.calc(n).sub(r).equal(), 0);
        return {
            basePadding: a,
            containerPadding: e.max(e.calc(a).sub(i).equal(), 0),
            itemHeight: S(t),
            itemLineHeight: S(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
        }
    },
    xn = e => {
        let {
            multipleSelectItemHeight: t,
            selectHeight: n,
            lineWidth: r
        } = e;
        return e.calc(n).sub(t).div(2).sub(r).equal()
    },
    Sn = e => {
        let {
            componentCls: t,
            iconCls: n,
            borderRadiusSM: r,
            motionDurationSlow: i,
            paddingXS: a,
            multipleItemColorDisabled: o,
            multipleItemBorderColorDisabled: s,
            colorIcon: c,
            colorIconHover: l,
            INTERNAL_FIXED_ITEM_MARGIN: u
        } = e;
        return {
            [`${t}-selection-overflow`]: {
                position: `relative`,
                display: `flex`,
                flex: `auto`,
                flexWrap: `wrap`,
                maxWidth: `100%`,
                "&-item": {
                    flex: `none`,
                    alignSelf: `center`,
                    maxWidth: `calc(100% - 4px)`,
                    display: `inline-flex`
                },
                [`${t}-selection-item`]: {
                    display: `flex`,
                    alignSelf: `center`,
                    flex: `none`,
                    boxSizing: `border-box`,
                    maxWidth: `100%`,
                    marginBlock: u,
                    borderRadius: r,
                    cursor: `default`,
                    transition: `font-size ${i}, line-height ${i}, height ${i}`,
                    marginInlineEnd: e.calc(u).mul(2).equal(),
                    paddingInlineStart: a,
                    paddingInlineEnd: e.calc(a).div(2).equal(),
                    [`${t}-disabled&`]: {
                        color: o,
                        borderColor: s,
                        cursor: `not-allowed`
                    },
                    "&-content": {
                        display: `inline-block`,
                        marginInlineEnd: e.calc(a).div(2).equal(),
                        overflow: `hidden`,
                        whiteSpace: `pre`,
                        textOverflow: `ellipsis`
                    },
                    "&-remove": Object.assign(Object.assign({}, k()), {
                        display: `inline-flex`,
                        alignItems: `center`,
                        color: c,
                        fontWeight: `bold`,
                        fontSize: 10,
                        lineHeight: `inherit`,
                        cursor: `pointer`,
                        [`> ${n}`]: {
                            verticalAlign: `-0.2em`
                        },
                        "&:hover": {
                            color: l
                        }
                    })
                }
            }
        }
    },
    Cn = (e, t) => {
        let {
            componentCls: n,
            INTERNAL_FIXED_ITEM_MARGIN: r
        } = e, i = `${n}-selection-overflow`, a = e.multipleSelectItemHeight, o = xn(e), s = t ? `${n}-${t}` : ``, c = bn(e);
        return {
            [`${n}-multiple${s}`]: Object.assign(Object.assign({}, Sn(e)), {
                [`${n}-selector`]: {
                    display: `flex`,
                    alignItems: `center`,
                    width: `100%`,
                    height: `100%`,
                    paddingInline: c.basePadding,
                    paddingBlock: c.containerPadding,
                    borderRadius: e.borderRadius,
                    [`${n}-disabled&`]: {
                        background: e.multipleSelectorBgDisabled,
                        cursor: `not-allowed`
                    },
                    "&:after": {
                        display: `inline-block`,
                        width: 0,
                        margin: `${S(r)} 0`,
                        lineHeight: S(a),
                        visibility: `hidden`,
                        content: `"\\a0"`
                    }
                },
                [`${n}-selection-item`]: {
                    height: c.itemHeight,
                    lineHeight: S(c.itemLineHeight)
                },
                [`${n}-selection-wrap`]: {
                    alignSelf: `flex-start`,
                    "&:after": {
                        lineHeight: S(a),
                        marginBlock: r
                    }
                },
                [`${n}-prefix`]: {
                    marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal()
                },
                [`${i}-item + ${i}-item,
        ${n}-prefix + ${n}-selection-wrap
      `]: {
                    [`${n}-selection-search`]: {
                        marginInlineStart: 0
                    },
                    [`${n}-selection-placeholder`]: {
                        insetInlineStart: 0
                    }
                },
                [`${i}-item-suffix`]: {
                    minHeight: c.itemHeight,
                    marginBlock: r
                },
                [`${n}-selection-search`]: {
                    display: `inline-flex`,
                    position: `relative`,
                    maxWidth: `100%`,
                    marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(o).equal(),
                    "\n          &-input,\n          &-mirror\n        ": {
                        height: a,
                        fontFamily: e.fontFamily,
                        lineHeight: S(a),
                        transition: `all ${e.motionDurationSlow}`
                    },
                    "&-input": {
                        width: `100%`,
                        minWidth: 4.1
                    },
                    "&-mirror": {
                        position: `absolute`,
                        top: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: `auto`,
                        zIndex: 999,
                        whiteSpace: `pre`,
                        visibility: `hidden`
                    }
                },
                [`${n}-selection-placeholder`]: {
                    position: `absolute`,
                    top: `50%`,
                    insetInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal(),
                    insetInlineEnd: e.inputPaddingHorizontalBase,
                    transform: `translateY(-50%)`,
                    transition: `all ${e.motionDurationSlow}`
                }
            })
        }
    };

function wn(e, t) {
    let {
        componentCls: n
    } = e, r = {
        [`${n}-multiple${t?`${n}-${t}`:``}`]: {
            fontSize: e.fontSize,
            [`${n}-selector`]: {
                [`${n}-show-search&`]: {
                    cursor: `text`
                }
            },
            [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
                paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
            }
        }
    };
    return [Cn(e, t), r]
}
var Tn = e => {
    let {
        componentCls: t
    } = e, n = T(e, {
        selectHeight: e.controlHeightSM,
        multipleSelectItemHeight: e.multipleItemHeightSM,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS
    }), r = T(e, {
        fontSize: e.fontSizeLG,
        selectHeight: e.controlHeightLG,
        multipleSelectItemHeight: e.multipleItemHeightLG,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius
    });
    return [wn(e), wn(n, `sm`), {
        [`${t}-multiple${t}-sm`]: {
            [`${t}-selection-placeholder`]: {
                insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
            },
            [`${t}-selection-search`]: {
                marginInlineStart: 2
            }
        }
    }, wn(r, `lg`)]
};

function En(e, t) {
    let {
        componentCls: n,
        inputPaddingHorizontalBase: r,
        borderRadius: i
    } = e, a = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal();
    return {
        [`${n}-single${t?`${n}-${t}`:``}`]: {
            fontSize: e.fontSize,
            height: e.controlHeight,
            [`${n}-selector`]: Object.assign(Object.assign({}, N(e, !0)), {
                display: `flex`,
                borderRadius: i,
                flex: `1 1 auto`,
                [`${n}-selection-wrap:after`]: {
                    lineHeight: S(a)
                },
                [`${n}-selection-search`]: {
                    position: `absolute`,
                    inset: 0,
                    width: `100%`,
                    "&-input": {
                        width: `100%`,
                        WebkitAppearance: `textfield`
                    }
                },
                [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
                    display: `block`,
                    padding: 0,
                    lineHeight: S(a),
                    transition: `all ${e.motionDurationSlow}, visibility 0s`,
                    alignSelf: `center`
                },
                [`${n}-selection-placeholder`]: {
                    transition: `none`,
                    pointerEvents: `none`
                },
                [
                    [`&:after`, `${n}-selection-item:empty:after`, `${n}-selection-placeholder:empty:after`].join(`,`)
                ]: {
                    display: `inline-block`,
                    width: 0,
                    visibility: `hidden`,
                    content: `"\\a0"`
                }
            }),
            [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-search,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
                paddingInlineEnd: e.showArrowPaddingInlineEnd
            },
            [`&${n}-open ${n}-selection-item`]: {
                color: e.colorTextPlaceholder
            },
            [`&:not(${n}-customize-input)`]: {
                [`${n}-selector`]: {
                    width: `100%`,
                    height: `100%`,
                    alignItems: `center`,
                    padding: `0 ${S(r)}`,
                    [`${n}-selection-search-input`]: {
                        height: a,
                        fontSize: e.fontSize
                    },
                    "&:after": {
                        lineHeight: S(a)
                    }
                }
            },
            [`&${n}-customize-input`]: {
                [`${n}-selector`]: {
                    "&:after": {
                        display: `none`
                    },
                    [`${n}-selection-search`]: {
                        position: `static`,
                        width: `100%`
                    },
                    [`${n}-selection-placeholder`]: {
                        position: `absolute`,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        padding: `0 ${S(r)}`,
                        "&:after": {
                            display: `none`
                        }
                    }
                }
            }
        }
    }
}

function Dn(e) {
    let {
        componentCls: t
    } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
    return [En(e), En(T(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM
    }), `sm`), {
        [`${t}-single${t}-sm`]: {
            [`&:not(${t}-customize-input)`]: {
                [`${t}-selector`]: {
                    padding: `0 ${S(n)}`
                },
                [`&${t}-show-arrow ${t}-selection-search`]: {
                    insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
                },
                [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
                    paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
                }
            }
        }
    }, En(T(e, {
        controlHeight: e.singleItemHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG
    }), `lg`)]
}
var On = e => {
        let {
            fontSize: t,
            lineHeight: n,
            lineWidth: r,
            controlHeight: i,
            controlHeightSM: a,
            controlHeightLG: o,
            paddingXXS: s,
            controlPaddingHorizontal: c,
            zIndexPopupBase: l,
            colorText: u,
            fontWeightStrong: d,
            controlItemBgActive: f,
            controlItemBgHover: p,
            colorBgContainer: m,
            colorFillSecondary: h,
            colorBgContainerDisabled: g,
            colorTextDisabled: _,
            colorPrimaryHover: v,
            colorPrimary: y,
            controlOutline: b
        } = e, x = s * 2, S = r * 2, C = Math.min(i - x, i - S), w = Math.min(a - x, a - S), T = Math.min(o - x, o - S);
        return {
            INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2),
            zIndexPopup: l + 50,
            optionSelectedColor: u,
            optionSelectedFontWeight: d,
            optionSelectedBg: f,
            optionActiveBg: p,
            optionPadding: `${(i-t*n)/2}px ${c}px`,
            optionFontSize: t,
            optionLineHeight: n,
            optionHeight: i,
            selectorBg: m,
            clearBg: m,
            singleItemHeightLG: o,
            multipleItemBg: h,
            multipleItemBorderColor: `transparent`,
            multipleItemHeight: C,
            multipleItemHeightSM: w,
            multipleItemHeightLG: T,
            multipleSelectorBgDisabled: g,
            multipleItemColorDisabled: _,
            multipleItemBorderColorDisabled: `transparent`,
            showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
            hoverBorderColor: v,
            activeBorderColor: y,
            activeOutlineColor: b,
            selectAffixPadding: s
        }
    },
    kn = (e, t) => {
        let {
            componentCls: n,
            antCls: r,
            controlOutlineWidth: i
        } = e;
        return {
            [`&:not(${n}-customize-input) ${n}-selector`]: {
                border: `${S(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
                background: e.selectorBg
            },
            [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
                [`&:hover ${n}-selector`]: {
                    borderColor: t.hoverBorderHover
                },
                [`${n}-focused& ${n}-selector`]: {
                    borderColor: t.activeBorderColor,
                    boxShadow: `0 0 0 ${S(i)} ${t.activeOutlineColor}`,
                    outline: 0
                },
                [`${n}-prefix`]: {
                    color: t.color
                }
            }
        }
    },
    An = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, kn(e, t))
    }),
    jn = e => ({
        "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, kn(e, {
            borderColor: e.colorBorder,
            hoverBorderHover: e.hoverBorderColor,
            activeBorderColor: e.activeBorderColor,
            activeOutlineColor: e.activeOutlineColor,
            color: e.colorText
        })), An(e, {
            status: `error`,
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeOutlineColor: e.colorErrorOutline,
            color: e.colorError
        })), An(e, {
            status: `warning`,
            borderColor: e.colorWarning,
            hoverBorderHover: e.colorWarningHover,
            activeBorderColor: e.colorWarning,
            activeOutlineColor: e.colorWarningOutline,
            color: e.colorWarning
        })), {
            [`&${e.componentCls}-disabled`]: {
                [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
                    background: e.colorBgContainerDisabled,
                    color: e.colorTextDisabled
                }
            },
            [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
                background: e.multipleItemBg,
                border: `${S(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
            }
        })
    }),
    Mn = (e, t) => {
        let {
            componentCls: n,
            antCls: r
        } = e;
        return {
            [`&:not(${n}-customize-input) ${n}-selector`]: {
                background: t.bg,
                border: `${S(e.lineWidth)} ${e.lineType} transparent`,
                color: t.color
            },
            [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
                [`&:hover ${n}-selector`]: {
                    background: t.hoverBg
                },
                [`${n}-focused& ${n}-selector`]: {
                    background: e.selectorBg,
                    borderColor: t.activeBorderColor,
                    outline: 0
                }
            }
        }
    },
    Nn = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Mn(e, t))
    }),
    Pn = e => ({
        "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Mn(e, {
            bg: e.colorFillTertiary,
            hoverBg: e.colorFillSecondary,
            activeBorderColor: e.activeBorderColor,
            color: e.colorText
        })), Nn(e, {
            status: `error`,
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            color: e.colorError
        })), Nn(e, {
            status: `warning`,
            bg: e.colorWarningBg,
            hoverBg: e.colorWarningBgHover,
            activeBorderColor: e.colorWarning,
            color: e.colorWarning
        })), {
            [`&${e.componentCls}-disabled`]: {
                [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
                    borderColor: e.colorBorder,
                    background: e.colorBgContainerDisabled,
                    color: e.colorTextDisabled
                }
            },
            [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
                background: e.colorBgContainer,
                border: `${S(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
            }
        })
    }),
    Fn = e => ({
        "&-borderless": {
            [`${e.componentCls}-selector`]: {
                background: `transparent`,
                border: `${S(e.lineWidth)} ${e.lineType} transparent`
            },
            [`&${e.componentCls}-disabled`]: {
                [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
                    color: e.colorTextDisabled
                }
            },
            [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
                background: e.multipleItemBg,
                border: `${S(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
            },
            [`&${e.componentCls}-status-error`]: {
                [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
                    color: e.colorError
                }
            },
            [`&${e.componentCls}-status-warning`]: {
                [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
                    color: e.colorWarning
                }
            }
        }
    }),
    In = (e, t) => {
        let {
            componentCls: n,
            antCls: r
        } = e;
        return {
            [`&:not(${n}-customize-input) ${n}-selector`]: {
                borderWidth: `0 0 ${S(e.lineWidth)} 0`,
                borderStyle: `none none ${e.lineType} none`,
                borderColor: t.borderColor,
                background: e.selectorBg,
                borderRadius: 0
            },
            [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
                [`&:hover ${n}-selector`]: {
                    borderColor: t.hoverBorderHover
                },
                [`${n}-focused& ${n}-selector`]: {
                    borderColor: t.activeBorderColor,
                    outline: 0
                },
                [`${n}-prefix`]: {
                    color: t.color
                }
            }
        }
    },
    Ln = (e, t) => ({
        [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, In(e, t))
    }),
    Rn = e => ({
        "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign({}, In(e, {
            borderColor: e.colorBorder,
            hoverBorderHover: e.hoverBorderColor,
            activeBorderColor: e.activeBorderColor,
            activeOutlineColor: e.activeOutlineColor,
            color: e.colorText
        })), Ln(e, {
            status: `error`,
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeOutlineColor: e.colorErrorOutline,
            color: e.colorError
        })), Ln(e, {
            status: `warning`,
            borderColor: e.colorWarning,
            hoverBorderHover: e.colorWarningHover,
            activeBorderColor: e.colorWarning,
            activeOutlineColor: e.colorWarningOutline,
            color: e.colorWarning
        })), {
            [`&${e.componentCls}-disabled`]: {
                [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
                    color: e.colorTextDisabled
                }
            },
            [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
                background: e.multipleItemBg,
                border: `${S(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
            }
        })
    }),
    zn = e => ({
        [e.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, jn(e)), Pn(e)), Fn(e)), Rn(e))
    }),
    Bn = e => {
        let {
            componentCls: t
        } = e;
        return {
            position: `relative`,
            transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
            input: {
                cursor: `pointer`
            },
            [`${t}-show-search&`]: {
                cursor: `text`,
                input: {
                    cursor: `auto`,
                    color: `inherit`,
                    height: `100%`
                }
            },
            [`${t}-disabled&`]: {
                cursor: `not-allowed`,
                input: {
                    cursor: `not-allowed`
                }
            }
        }
    },
    Vn = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-selection-search-input`]: {
                margin: 0,
                padding: 0,
                background: `transparent`,
                border: `none`,
                outline: `none`,
                appearance: `none`,
                fontFamily: `inherit`,
                "&::-webkit-search-cancel-button": {
                    display: `none`,
                    appearance: `none`
                }
            }
        }
    },
    Hn = e => {
        let {
            antCls: t,
            componentCls: n,
            inputPaddingHorizontalBase: r,
            iconCls: i
        } = e, a = {
            [`${n}-clear`]: {
                opacity: 1,
                background: e.colorBgBase,
                borderRadius: `50%`
            }
        };
        return {
            [n]: Object.assign(Object.assign({}, N(e)), {
                position: `relative`,
                display: `inline-flex`,
                cursor: `pointer`,
                [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, Bn(e)), Vn(e)),
                [`${n}-selection-item`]: Object.assign(Object.assign({
                    flex: 1,
                    fontWeight: `normal`,
                    position: `relative`,
                    userSelect: `none`
                }, D), {
                    [`> ${t}-typography`]: {
                        display: `inline`
                    }
                }),
                [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, D), {
                    flex: 1,
                    color: e.colorTextPlaceholder,
                    pointerEvents: `none`
                }),
                [`${n}-arrow`]: Object.assign(Object.assign({}, k()), {
                    position: `absolute`,
                    top: `50%`,
                    insetInlineStart: `auto`,
                    insetInlineEnd: r,
                    height: e.fontSizeIcon,
                    marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
                    color: e.colorTextQuaternary,
                    fontSize: e.fontSizeIcon,
                    lineHeight: 1,
                    textAlign: `center`,
                    pointerEvents: `none`,
                    display: `flex`,
                    alignItems: `center`,
                    transition: `opacity ${e.motionDurationSlow} ease`,
                    [i]: {
                        verticalAlign: `top`,
                        transition: `transform ${e.motionDurationSlow}`,
                        "> svg": {
                            verticalAlign: `top`
                        },
                        [`&:not(${n}-suffix)`]: {
                            pointerEvents: `auto`
                        }
                    },
                    [`${n}-disabled &`]: {
                        cursor: `not-allowed`
                    },
                    "> *:not(:last-child)": {
                        marginInlineEnd: 8
                    }
                }),
                [`${n}-selection-wrap`]: {
                    display: `flex`,
                    width: `100%`,
                    position: `relative`,
                    minWidth: 0,
                    "&:after": {
                        content: `"\\a0"`,
                        width: 0,
                        overflow: `hidden`
                    }
                },
                [`${n}-prefix`]: {
                    flex: `none`,
                    marginInlineEnd: e.selectAffixPadding
                },
                [`${n}-clear`]: {
                    position: `absolute`,
                    top: `50%`,
                    insetInlineStart: `auto`,
                    insetInlineEnd: r,
                    zIndex: 1,
                    display: `inline-block`,
                    width: e.fontSizeIcon,
                    height: e.fontSizeIcon,
                    marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
                    color: e.colorTextQuaternary,
                    fontSize: e.fontSizeIcon,
                    fontStyle: `normal`,
                    lineHeight: 1,
                    textAlign: `center`,
                    textTransform: `none`,
                    cursor: `pointer`,
                    opacity: 0,
                    transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
                    textRendering: `auto`,
                    transform: `translateZ(0)`,
                    "&:before": {
                        display: `block`
                    },
                    "&:hover": {
                        color: e.colorIcon
                    }
                },
                "@media(hover:none)": a,
                "&:hover": a
            }),
            [`${n}-status`]: {
                "&-error, &-warning, &-success, &-validating": {
                    [`&${n}-has-feedback`]: {
                        [`${n}-clear`]: {
                            insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
                        }
                    }
                }
            }
        }
    },
    Un = e => {
        let {
            componentCls: t
        } = e;
        return [{
            [t]: {
                [`&${t}-in-form-item`]: {
                    width: `100%`
                }
            }
        }, Hn(e), Dn(e), Tn(e), yn(e), {
            [`${t}-rtl`]: {
                direction: `rtl`
            }
        }, U(e, {
            borderElCls: `${t}-selector`,
            focusElCls: `${t}-focused`
        })]
    },
    Wn = F(`Select`, (e, {
        rootPrefixCls: t
    }) => {
        let n = T(e, {
            rootPrefixCls: t,
            inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
            multipleSelectItemHeight: e.multipleItemHeight,
            selectHeight: e.controlHeight
        });
        return [Un(n), zn(n)]
    }, On, {
        unitless: {
            optionLineHeight: !0,
            optionSelectedFontWeight: !0
        }
    });

function Gn({
    suffixIcon: e,
    clearIcon: t,
    menuItemSelectedIcon: n,
    removeIcon: r,
    loading: i,
    multiple: a,
    hasFeedback: o,
    prefixCls: s,
    showSuffixIcon: c,
    feedbackIcon: l,
    showArrow: u,
    componentName: d
}) {
    let f = t ?? X.createElement(le, null),
        p = t => e === null && !o && !u ? null : X.createElement(X.Fragment, null, c !== !1 && t, o && l),
        m = null;
    if (e !== void 0) m = p(e);
    else if (i) m = p(X.createElement(H, {
        spin: !0
    }));
    else {
        let e = `${s}-suffix`;
        m = ({
            open: t,
            showSearch: n
        }) => p(t && n ? X.createElement(xe, {
            className: e
        }) : X.createElement(we, {
            className: e
        }))
    }
    let h = null;
    h = n === void 0 ? a ? X.createElement(Ce, null) : null : n;
    let g = null;
    return g = r === void 0 ? X.createElement(se, null) : r, {
        clearIcon: f,
        suffixIcon: m,
        itemIcon: h,
        removeIcon: g
    }
}

function Kn(e) {
    return X.useMemo(() => {
        if (e) return (...t) => X.createElement(K, {
            space: !0
        }, e.apply(void 0, t))
    }, [e])
}

function qn(e, t) {
    return t === void 0 ? e !== null : t
}
var Jn = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    Yn = `SECRET_COMBOBOX_MODE_DO_NOT_USE`,
    Xn = X.forwardRef((e, t) => {
        var n, r, i, a;
        let {
            prefixCls: o,
            bordered: s,
            className: l,
            rootClassName: u,
            getPopupContainer: d,
            popupClassName: f,
            dropdownClassName: p,
            listHeight: m = 256,
            placement: h,
            listItemHeight: g,
            size: _,
            disabled: v,
            notFoundContent: y,
            status: b,
            builtinPlacements: x,
            dropdownMatchSelectWidth: S,
            popupMatchSelectWidth: T,
            direction: E,
            style: D,
            allowClear: O,
            variant: k,
            dropdownStyle: A,
            transitionName: M,
            tagRender: N,
            maxCount: P,
            prefix: F,
            dropdownRender: te,
            popupRender: I,
            onDropdownVisibleChange: L,
            onOpenChange: R,
            styles: z,
            classNames: V
        } = e, re = Jn(e, `prefixCls.bordered.className.rootClassName.getPopupContainer.popupClassName.dropdownClassName.listHeight.placement.listItemHeight.size.disabled.notFoundContent.status.builtinPlacements.dropdownMatchSelectWidth.popupMatchSelectWidth.direction.style.allowClear.variant.dropdownStyle.transitionName.tagRender.maxCount.prefix.dropdownRender.popupRender.onDropdownVisibleChange.onOpenChange.styles.classNames`.split(`.`)), {
            getPopupContainer: H,
            getPrefixCls: U,
            renderEmpty: G,
            direction: ae,
            virtual: K,
            popupMatchSelectWidth: se,
            popupOverflow: ce
        } = X.useContext(c), {
            showSearch: le,
            style: q,
            styles: de,
            className: fe,
            classNames: pe
        } = j(`select`), [, me] = C(), he = g ?? (me == null ? void 0 : me.controlHeight), J = U(`select`, o), ge = U(), Y = E ?? ae, {
            compactSize: _e,
            compactItemClassnames: ve
        } = ee(J, Y), [xe, Ce] = Se(`select`, k, s), we = ue(J), [Te, Ee, De] = Wn(J, we), Q = X.useMemo(() => {
            let {
                mode: t
            } = e;
            if (t !== `combobox`) return t === Yn ? `combobox` : t
        }, [e.mode]), Oe = Q === `multiple` || Q === `tags`, ke = qn(e.suffixIcon, e.showArrow), Ae = T ?? S ?? se, je = ((n = z == null ? void 0 : z.popup) == null ? void 0 : n.root) || ((r = de.popup) == null ? void 0 : r.root) || A, Me = Kn(I || te), Ne = R || L, {
            status: Pe,
            hasFeedback: Fe,
            isFormItemInput: Ie,
            feedbackIcon: Le
        } = X.useContext(oe), Re = be(Pe, b), ze;
        ze = y === void 0 ? Q === `combobox` ? null : (G == null ? void 0 : G(`Select`)) || X.createElement(hn, {
            componentName: `Select`
        }) : y;
        let {
            suffixIcon: Be,
            itemIcon: Ve,
            removeIcon: He,
            clearIcon: Ue
        } = Gn(Object.assign(Object.assign({}, re), {
            multiple: Oe,
            hasFeedback: Fe,
            feedbackIcon: Le,
            showSuffixIcon: ke,
            prefixCls: J,
            componentName: `Select`
        })), We = O === !0 ? {
            clearIcon: Ue
        } : O, Ge = ne(re, [`suffixIcon`, `itemIcon`]), Ke = (0, Z.default)(((i = V == null ? void 0 : V.popup) == null ? void 0 : i.root) || ((a = pe == null ? void 0 : pe.popup) == null ? void 0 : a.root) || f || p, {
            [`${J}-dropdown-${Y}`]: Y === `rtl`
        }, u, pe.root, V == null ? void 0 : V.root, De, we, Ee), qe = w(e => _ ?? _e ?? e), Je = X.useContext(B), Ye = v ?? Je, Xe = (0, Z.default)({
            [`${J}-lg`]: qe === `large`,
            [`${J}-sm`]: qe === `small`,
            [`${J}-rtl`]: Y === `rtl`,
            [`${J}-${xe}`]: Ce,
            [`${J}-in-form-item`]: Ie
        }, ye(J, Re, Fe), ve, fe, l, pe.root, V == null ? void 0 : V.root, u, De, we, Ee), Ze = X.useMemo(() => h === void 0 ? Y === `rtl` ? `bottomRight` : `bottomLeft` : h, [h, Y]), [Qe] = ie(`SelectLike`, je == null ? void 0 : je.zIndex);
        return Te(X.createElement(on, Object.assign({
            ref: t,
            virtual: K,
            showSearch: le
        }, Ge, {
            style: Object.assign(Object.assign(Object.assign(Object.assign({}, de.root), z == null ? void 0 : z.root), q), D),
            dropdownMatchSelectWidth: Ae,
            transitionName: W(ge, `slide-up`, M),
            builtinPlacements: _n(x, ce),
            listHeight: m,
            listItemHeight: he,
            mode: Q,
            prefixCls: J,
            placement: Ze,
            direction: Y,
            prefix: F,
            suffixIcon: Be,
            menuItemSelectedIcon: Ve,
            removeIcon: He,
            allowClear: We,
            notFoundContent: ze,
            className: Xe,
            getPopupContainer: d || H,
            dropdownClassName: Ke,
            disabled: Ye,
            dropdownStyle: Object.assign(Object.assign({}, je), {
                zIndex: Qe
            }),
            maxCount: Oe ? P : void 0,
            tagRender: Oe ? N : void 0,
            dropdownRender: Me,
            onDropdownVisibleChange: Ne
        })))
    }),
    Zn = Y(Xn, `dropdownAlign`);
Xn.SECRET_COMBOBOX_MODE_DO_NOT_USE = Yn, Xn.Option = ct, Xn.OptGroup = st, Xn._InternalPanelDoNotUseOrYouWillBeFired = Zn;
export {
    hn as a, bn as i, Gn as n, mn as o, Sn as r, Lt as s, Xn as t
};