import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    s as r
} from "./assertThisInitialized.js";
import {
    E as i,
    H as a,
    It as o,
    Lt as s,
    Ut as c,
    X as l,
    a as u,
    b as d,
    d as f,
    lt as p,
    m,
    nt as h,
    s as g,
    tt as _,
    ut as v,
    x as y
} from "./Compact.js";
import {
    h as b
} from "./color.js";
import {
    n as x
} from "./compact-item.js";
import {
    O as S
} from "./ContextIsolator.js";
import {
    r as C
} from "./button-1.js";
n(), s(), v(), h();
var w = e(t()),
    T = e(c()),
    E = [`prefixCls`, `className`, `checked`, `defaultChecked`, `disabled`, `loadingIcon`, `checkedChildren`, `unCheckedChildren`, `onClick`, `onChange`, `onKeyDown`],
    D = w.forwardRef(function(e, t) {
        var n, i = e.prefixCls,
            a = i === void 0 ? `rc-switch` : i,
            s = e.className,
            c = e.checked,
            l = e.defaultChecked,
            u = e.disabled,
            d = e.loadingIcon,
            f = e.checkedChildren,
            m = e.unCheckedChildren,
            h = e.onClick,
            g = e.onChange,
            v = e.onKeyDown,
            b = _(e, E),
            x = y(!1, {
                value: c,
                defaultValue: l
            }),
            C = p(x, 2),
            D = C[0],
            O = C[1];

        function k(e, t) {
            var n = D;
            return u || (n = e, O(n), g == null || g(n, t)), n
        }

        function A(e) {
            e.which === S.LEFT ? k(!1, e) : e.which === S.RIGHT && k(!0, e), v == null || v(e)
        }

        function j(e) {
            var t = k(!D, e);
            h == null || h(t, e)
        }
        var M = (0, T.default)(a, s, (n = {}, o(n, `${a}-checked`, D), o(n, `${a}-disabled`, u), n));
        return w.createElement(`button`, r({}, b, {
            type: `button`,
            role: `switch`,
            "aria-checked": D,
            disabled: u,
            className: M,
            ref: t,
            onKeyDown: A,
            onClick: j
        }), d, w.createElement(`span`, {
            className: `${a}-inner`
        }, w.createElement(`span`, {
            className: `${a}-inner-checked`
        }, f), w.createElement(`span`, {
            className: `${a}-inner-unchecked`
        }, m)))
    });
D.displayName = `Switch`;
var O = e => {
        let {
            componentCls: t,
            trackHeightSM: n,
            trackPadding: r,
            trackMinWidthSM: i,
            innerMinMarginSM: a,
            innerMaxMarginSM: o,
            handleSizeSM: s,
            calc: c
        } = e, u = `${t}-inner`, d = l(c(s).add(c(r).mul(2)).equal()), f = l(c(o).mul(2).equal());
        return {
            [t]: {
                [`&${t}-small`]: {
                    minWidth: i,
                    height: n,
                    lineHeight: l(n),
                    [`${t}-inner`]: {
                        paddingInlineStart: o,
                        paddingInlineEnd: a,
                        [`${u}-checked, ${u}-unchecked`]: {
                            minHeight: n
                        },
                        [`${u}-checked`]: {
                            marginInlineStart: `calc(-100% + ${d} - ${f})`,
                            marginInlineEnd: `calc(100% - ${d} + ${f})`
                        },
                        [`${u}-unchecked`]: {
                            marginTop: c(n).mul(-1).equal(),
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        }
                    },
                    [`${t}-handle`]: {
                        width: s,
                        height: s
                    },
                    [`${t}-loading-icon`]: {
                        top: c(c(s).sub(e.switchLoadingIconSize)).div(2).equal(),
                        fontSize: e.switchLoadingIconSize
                    },
                    [`&${t}-checked`]: {
                        [`${t}-inner`]: {
                            paddingInlineStart: a,
                            paddingInlineEnd: o,
                            [`${u}-checked`]: {
                                marginInlineStart: 0,
                                marginInlineEnd: 0
                            },
                            [`${u}-unchecked`]: {
                                marginInlineStart: `calc(100% - ${d} + ${f})`,
                                marginInlineEnd: `calc(-100% + ${d} - ${f})`
                            }
                        },
                        [`${t}-handle`]: {
                            insetInlineStart: `calc(100% - ${l(c(s).add(r).equal())})`
                        }
                    },
                    [`&:not(${t}-disabled):active`]: {
                        [`&:not(${t}-checked) ${u}`]: {
                            [`${u}-unchecked`]: {
                                marginInlineStart: c(e.marginXXS).div(2).equal(),
                                marginInlineEnd: c(e.marginXXS).mul(-1).div(2).equal()
                            }
                        },
                        [`&${t}-checked ${u}`]: {
                            [`${u}-checked`]: {
                                marginInlineStart: c(e.marginXXS).mul(-1).div(2).equal(),
                                marginInlineEnd: c(e.marginXXS).div(2).equal()
                            }
                        }
                    }
                }
            }
        }
    },
    k = e => {
        let {
            componentCls: t,
            handleSize: n,
            calc: r
        } = e;
        return {
            [t]: {
                [`${t}-loading-icon${e.iconCls}`]: {
                    position: `relative`,
                    top: r(r(n).sub(e.fontSize)).div(2).equal(),
                    color: e.switchLoadingIconColor,
                    verticalAlign: `top`
                },
                [`&${t}-checked ${t}-loading-icon`]: {
                    color: e.switchColor
                }
            }
        }
    },
    A = e => {
        let {
            componentCls: t,
            trackPadding: n,
            handleBg: r,
            handleShadow: i,
            handleSize: a,
            calc: o
        } = e, s = `${t}-handle`;
        return {
            [t]: {
                [s]: {
                    position: `absolute`,
                    top: n,
                    insetInlineStart: n,
                    width: a,
                    height: a,
                    transition: `all ${e.switchDuration} ease-in-out`,
                    "&::before": {
                        position: `absolute`,
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        backgroundColor: r,
                        borderRadius: o(a).div(2).equal(),
                        boxShadow: i,
                        transition: `all ${e.switchDuration} ease-in-out`,
                        content: `""`
                    }
                },
                [`&${t}-checked ${s}`]: {
                    insetInlineStart: `calc(100% - ${l(o(a).add(n).equal())})`
                },
                [`&:not(${t}-disabled):active`]: {
                    [`${s}::before`]: {
                        insetInlineEnd: e.switchHandleActiveInset,
                        insetInlineStart: 0
                    },
                    [`&${t}-checked ${s}::before`]: {
                        insetInlineEnd: 0,
                        insetInlineStart: e.switchHandleActiveInset
                    }
                }
            }
        }
    },
    j = e => {
        let {
            componentCls: t,
            trackHeight: n,
            trackPadding: r,
            innerMinMargin: i,
            innerMaxMargin: a,
            handleSize: o,
            calc: s
        } = e, c = `${t}-inner`, u = l(s(o).add(s(r).mul(2)).equal()), d = l(s(a).mul(2).equal());
        return {
            [t]: {
                [c]: {
                    display: `block`,
                    overflow: `hidden`,
                    borderRadius: 100,
                    height: `100%`,
                    paddingInlineStart: a,
                    paddingInlineEnd: i,
                    transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
                    [`${c}-checked, ${c}-unchecked`]: {
                        display: `block`,
                        color: e.colorTextLightSolid,
                        fontSize: e.fontSizeSM,
                        transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
                        pointerEvents: `none`,
                        minHeight: n
                    },
                    [`${c}-checked`]: {
                        marginInlineStart: `calc(-100% + ${u} - ${d})`,
                        marginInlineEnd: `calc(100% - ${u} + ${d})`
                    },
                    [`${c}-unchecked`]: {
                        marginTop: s(n).mul(-1).equal(),
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    }
                },
                [`&${t}-checked ${c}`]: {
                    paddingInlineStart: i,
                    paddingInlineEnd: a,
                    [`${c}-checked`]: {
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    },
                    [`${c}-unchecked`]: {
                        marginInlineStart: `calc(100% - ${u} + ${d})`,
                        marginInlineEnd: `calc(-100% + ${u} - ${d})`
                    }
                },
                [`&:not(${t}-disabled):active`]: {
                    [`&:not(${t}-checked) ${c}`]: {
                        [`${c}-unchecked`]: {
                            marginInlineStart: s(r).mul(2).equal(),
                            marginInlineEnd: s(r).mul(-1).mul(2).equal()
                        }
                    },
                    [`&${t}-checked ${c}`]: {
                        [`${c}-checked`]: {
                            marginInlineStart: s(r).mul(-1).mul(2).equal(),
                            marginInlineEnd: s(r).mul(2).equal()
                        }
                    }
                }
            }
        }
    },
    M = e => {
        let {
            componentCls: t,
            trackHeight: n,
            trackMinWidth: r
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, m(e)), {
                position: `relative`,
                display: `inline-block`,
                boxSizing: `border-box`,
                minWidth: r,
                height: n,
                lineHeight: l(n),
                verticalAlign: `middle`,
                background: e.colorTextQuaternary,
                border: `0`,
                borderRadius: 100,
                cursor: `pointer`,
                transition: `all ${e.motionDurationMid}`,
                userSelect: `none`,
                [`&:hover:not(${t}-disabled)`]: {
                    background: e.colorTextTertiary
                }
            }), f(e)), {
                [`&${t}-checked`]: {
                    background: e.switchColor,
                    [`&:hover:not(${t}-disabled)`]: {
                        background: e.colorPrimaryHover
                    }
                },
                [`&${t}-loading, &${t}-disabled`]: {
                    cursor: `not-allowed`,
                    opacity: e.switchDisabledOpacity,
                    "*": {
                        boxShadow: `none`,
                        cursor: `not-allowed`
                    }
                },
                [`&${t}-rtl`]: {
                    direction: `rtl`
                }
            })
        }
    },
    N = g(`Switch`, e => {
        let t = d(e, {
            switchDuration: e.motionDurationMid,
            switchColor: e.colorPrimary,
            switchDisabledOpacity: e.opacityLoading,
            switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(.75).equal(),
            switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
            switchHandleActiveInset: `-30%`
        });
        return [M(t), j(t), A(t), k(t), O(t)]
    }, e => {
        let {
            fontSize: t,
            lineHeight: n,
            controlHeight: r,
            colorWhite: i
        } = e, o = t * n, s = r / 2, c = o - 4, l = s - 4;
        return {
            trackHeight: o,
            trackHeightSM: s,
            trackMinWidth: c * 2 + 8,
            trackMinWidthSM: l * 2 + 4,
            trackPadding: 2,
            handleBg: i,
            handleSize: c,
            handleSizeSM: l,
            handleShadow: `0 2px 4px 0 ${new a(`#00230b`).setA(.2).toRgbString()}`,
            innerMinMargin: c / 2,
            innerMaxMargin: c + 2 + 4,
            innerMinMarginSM: l / 2,
            innerMaxMarginSM: l + 2 + 4
        }
    }),
    P = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    F = w.forwardRef((e, t) => {
        let {
            prefixCls: n,
            size: r,
            disabled: a,
            loading: o,
            className: s,
            rootClassName: c,
            style: l,
            checked: d,
            value: f,
            defaultChecked: p,
            defaultValue: m,
            onChange: h
        } = e, g = P(e, [`prefixCls`, `size`, `disabled`, `loading`, `className`, `rootClassName`, `style`, `checked`, `value`, `defaultChecked`, `defaultValue`, `onChange`]), [_, v] = y(!1, {
            value: d ?? f,
            defaultValue: p ?? m
        }), {
            getPrefixCls: S,
            direction: E,
            switch: O
        } = w.useContext(i), k = w.useContext(b), A = (a ?? k) || o, j = S(`switch`, n), M = w.createElement(`div`, {
            className: `${j}-handle`
        }, o && w.createElement(x, {
            className: `${j}-loading-icon`
        })), [F, I, L] = N(j), R = u(r), z = (0, T.default)(O == null ? void 0 : O.className, {
            [`${j}-small`]: R === `small`,
            [`${j}-loading`]: o,
            [`${j}-rtl`]: E === `rtl`
        }, s, c, I, L), B = Object.assign(Object.assign({}, O == null ? void 0 : O.style), l);
        return F(w.createElement(C, {
            component: `Switch`
        }, w.createElement(D, Object.assign({}, g, {
            checked: _,
            onChange: (...e) => {
                v(e[0]), h == null || h.apply(void 0, e)
            },
            prefixCls: j,
            className: z,
            style: B,
            disabled: A,
            ref: t,
            loadingIcon: M
        }))))
    });
F.__ANT_SWITCH = !0;
export {
    F as t
};