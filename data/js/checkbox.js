import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    E as n,
    Ot as r,
    Ut as i,
    X as a,
    b as o,
    gt as s,
    ht as c,
    m as l,
    s as u,
    u as d
} from "./Compact.js";
import {
    h as f,
    i as p
} from "./color.js";
import {
    r as m
} from "./ContextIsolator.js";
import {
    t as h
} from "./useCSSVarCls.js";
import {
    i as g,
    r as _
} from "./button-1.js";
import {
    n as v,
    t as y
} from "./useBubbleLock.js";
var b = e(t()),
    x = e(i()),
    S = e => {
        let {
            checkboxCls: t
        } = e, n = `${t}-wrapper`;
        return [{
            [`${t}-group`]: Object.assign(Object.assign({}, l(e)), {
                display: `inline-flex`,
                flexWrap: `wrap`,
                columnGap: e.marginXS,
                [`> ${e.antCls}-row`]: {
                    flex: 1
                }
            }),
            [n]: Object.assign(Object.assign({}, l(e)), {
                display: `inline-flex`,
                alignItems: `baseline`,
                cursor: `pointer`,
                "&:after": {
                    display: `inline-block`,
                    width: 0,
                    overflow: `hidden`,
                    content: `'\\a0'`
                },
                [`& + ${n}`]: {
                    marginInlineStart: 0
                },
                [`&${n}-in-form-item`]: {
                    'input[type="checkbox"]': {
                        width: 14,
                        height: 14
                    }
                }
            }),
            [t]: Object.assign(Object.assign({}, l(e)), {
                position: `relative`,
                whiteSpace: `nowrap`,
                lineHeight: 1,
                cursor: `pointer`,
                borderRadius: e.borderRadiusSM,
                alignSelf: `center`,
                [`${t}-input`]: {
                    position: `absolute`,
                    inset: 0,
                    zIndex: 1,
                    cursor: `pointer`,
                    opacity: 0,
                    margin: 0,
                    [`&:focus-visible + ${t}-inner`]: d(e)
                },
                [`${t}-inner`]: {
                    boxSizing: `border-box`,
                    display: `block`,
                    width: e.checkboxSize,
                    height: e.checkboxSize,
                    direction: `ltr`,
                    backgroundColor: e.colorBgContainer,
                    border: `${a(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    borderCollapse: `separate`,
                    transition: `all ${e.motionDurationSlow}`,
                    "&:after": {
                        boxSizing: `border-box`,
                        position: `absolute`,
                        top: `50%`,
                        insetInlineStart: `25%`,
                        display: `table`,
                        width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
                        height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
                        border: `${a(e.lineWidthBold)} solid ${e.colorWhite}`,
                        borderTop: 0,
                        borderInlineStart: 0,
                        transform: `rotate(45deg) scale(0) translate(-50%,-50%)`,
                        opacity: 0,
                        content: `""`,
                        transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                    }
                },
                "& + span": {
                    paddingInlineStart: e.paddingXS,
                    paddingInlineEnd: e.paddingXS
                }
            })
        }, {
            [`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]: {
                [`&:hover ${t}-inner`]: {
                    borderColor: e.colorPrimary
                }
            },
            [`${n}:not(${n}-disabled)`]: {
                [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                    backgroundColor: e.colorPrimaryHover,
                    borderColor: `transparent`
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
                        transform: `rotate(45deg) scale(1) translate(-50%,-50%)`,
                        transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                    }
                }
            },
            [`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
                [`&:hover ${t}-inner`]: {
                    backgroundColor: e.colorPrimaryHover,
                    borderColor: `transparent`
                }
            }
        }, {
            [t]: {
                "&-indeterminate": {
                    "&": {
                        [`${t}-inner`]: {
                            backgroundColor: `${e.colorBgContainer}`,
                            borderColor: `${e.colorBorder}`,
                            "&:after": {
                                top: `50%`,
                                insetInlineStart: `50%`,
                                width: e.calc(e.fontSizeLG).div(2).equal(),
                                height: e.calc(e.fontSizeLG).div(2).equal(),
                                backgroundColor: e.colorPrimary,
                                border: 0,
                                transform: `translate(-50%, -50%) scale(1)`,
                                opacity: 1,
                                content: `""`
                            }
                        },
                        [`&:hover ${t}-inner`]: {
                            backgroundColor: `${e.colorBgContainer}`,
                            borderColor: `${e.colorPrimary}`
                        }
                    }
                }
            }
        }, {
            [`${n}-disabled`]: {
                cursor: `not-allowed`
            },
            [`${t}-disabled`]: {
                [`&, ${t}-input`]: {
                    cursor: `not-allowed`,
                    pointerEvents: `none`
                },
                [`${t}-inner`]: {
                    background: e.colorBgContainerDisabled,
                    borderColor: e.colorBorder,
                    "&:after": {
                        borderColor: e.colorTextDisabled
                    }
                },
                "&:after": {
                    display: `none`
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

function C(e, t) {
    return S(o(t, {
        checkboxCls: `.${e}`,
        checkboxSize: t.controlInteractiveSize
    }))
}
var w = u(`Checkbox`, (e, {
        prefixCls: t
    }) => [C(t, e)]),
    T = b.createContext(null),
    E = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    D = b.forwardRef((e, t) => {
        let {
            prefixCls: i,
            className: a,
            rootClassName: o,
            children: s,
            indeterminate: c = !1,
            style: l,
            onMouseEnter: u,
            onMouseLeave: d,
            skipGroup: p = !1,
            disabled: S
        } = e, C = E(e, [`prefixCls`, `className`, `rootClassName`, `children`, `indeterminate`, `style`, `onMouseEnter`, `onMouseLeave`, `skipGroup`, `disabled`]), {
            getPrefixCls: D,
            direction: O,
            checkbox: k
        } = b.useContext(n), A = b.useContext(T), {
            isFormItemInput: j
        } = b.useContext(m), M = b.useContext(f), N = ((A == null ? void 0 : A.disabled) || S) ?? M, P = b.useRef(C.value), F = b.useRef(null), I = r(t, F);
        b.useEffect(() => {
            A == null || A.registerValue(C.value)
        }, []), b.useEffect(() => {
            if (!p) return C.value !== P.current && (A == null || A.cancelValue(P.current), A == null || A.registerValue(C.value), P.current = C.value), () => A == null ? void 0 : A.cancelValue(C.value)
        }, [C.value]), b.useEffect(() => {
            var e;
            (e = F.current) != null && e.input && (F.current.input.indeterminate = c)
        }, [c]);
        let L = D(`checkbox`, i),
            R = h(L),
            [z, B, V] = w(L, R),
            H = Object.assign({}, C);
        A && !p && (H.onChange = (...e) => {
            C.onChange && C.onChange.apply(C, e), A.toggleOption && A.toggleOption({
                label: s,
                value: C.value
            })
        }, H.name = A.name, H.checked = A.value.includes(C.value));
        let U = (0, x.default)(`${L}-wrapper`, {
                [`${L}-rtl`]: O === `rtl`,
                [`${L}-wrapper-checked`]: H.checked,
                [`${L}-wrapper-disabled`]: N,
                [`${L}-wrapper-in-form-item`]: j
            }, k == null ? void 0 : k.className, a, o, V, R, B),
            W = (0, x.default)({
                [`${L}-indeterminate`]: c
            }, g, B),
            [G, K] = y(H.onClick);
        return z(b.createElement(_, {
            component: `Checkbox`,
            disabled: N
        }, b.createElement(`label`, {
            className: U,
            style: Object.assign(Object.assign({}, k == null ? void 0 : k.style), l),
            onMouseEnter: u,
            onMouseLeave: d,
            onClick: G
        }, b.createElement(v, Object.assign({}, H, {
            onClick: K,
            prefixCls: L,
            className: W,
            disabled: N,
            ref: I
        })), s != null && b.createElement(`span`, {
            className: `${L}-label`
        }, s))))
    });
s();
var O = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    k = b.forwardRef((e, t) => {
        let {
            defaultValue: r,
            children: i,
            options: a = [],
            prefixCls: o,
            className: s,
            rootClassName: l,
            style: u,
            onChange: d
        } = e, f = O(e, [`defaultValue`, `children`, `options`, `prefixCls`, `className`, `rootClassName`, `style`, `onChange`]), {
            getPrefixCls: m,
            direction: g
        } = b.useContext(n), [_, v] = b.useState(f.value || r || []), [y, S] = b.useState([]);
        b.useEffect(() => {
            `value` in f && v(f.value || [])
        }, [f.value]);
        let C = b.useMemo(() => a.map(e => typeof e == `string` || typeof e == `number` ? {
                label: e,
                value: e
            } : e), [a]),
            E = e => {
                S(t => t.filter(t => t !== e))
            },
            k = e => {
                S(t => [].concat(c(t), [e]))
            },
            A = e => {
                let t = _.indexOf(e.value),
                    n = c(_);
                t === -1 ? n.push(e.value) : n.splice(t, 1), `value` in f || v(n), d == null || d(n.filter(e => y.includes(e)).sort((e, t) => C.findIndex(t => t.value === e) - C.findIndex(e => e.value === t)))
            },
            j = m(`checkbox`, o),
            M = `${j}-group`,
            N = h(j),
            [P, F, I] = w(j, N),
            L = p(f, [`value`, `disabled`]),
            R = a.length ? C.map(e => b.createElement(D, {
                prefixCls: j,
                key: e.value.toString(),
                disabled: `disabled` in e ? e.disabled : f.disabled,
                value: e.value,
                checked: _.includes(e.value),
                onChange: e.onChange,
                className: (0, x.default)(`${M}-item`, e.className),
                style: e.style,
                title: e.title,
                id: e.id,
                required: e.required
            }, e.label)) : i,
            z = b.useMemo(() => ({
                toggleOption: A,
                value: _,
                disabled: f.disabled,
                name: f.name,
                registerValue: k,
                cancelValue: E
            }), [A, _, f.disabled, f.name, k, E]),
            B = (0, x.default)(M, {
                [`${M}-rtl`]: g === `rtl`
            }, s, l, I, N, F);
        return P(b.createElement(`div`, Object.assign({
            className: B,
            style: u
        }, L, {
            ref: t
        }), b.createElement(T.Provider, {
            value: z
        }, R)))
    }),
    A = D;
A.Group = k, A.__ANT_CHECKBOX = !0;
export {
    C as n, A as t
};