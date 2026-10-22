import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    l as n
} from "./assertThisInitialized.js";
import {
    At as r,
    C as i,
    E as a,
    F as o,
    Ft as s,
    Ht as c,
    J as l,
    Mt as u,
    Nt as ee,
    Ot as te,
    Ut as d,
    Vt as ne,
    X as f,
    _ as p,
    a as re,
    b as m,
    c as h,
    d as ie,
    gt as ae,
    h as g,
    ht as _,
    k as oe,
    o as se,
    r as ce,
    s as le,
    y as ue
} from "./Compact.js";
import {
    a as de,
    c as fe,
    d as v,
    h as pe,
    i as me,
    m as y,
    n as b,
    o as x,
    r as S,
    s as C,
    t as he,
    v as w
} from "./color.js";
import {
    n as ge,
    t as _e
} from "./compact-item.js";
var T = e(t()),
    E = e(d());
c();
var ve = e(n()),
    D = s({}, ve),
    ye = D.version,
    O = D.render,
    k = D.unmountComponentAtNode,
    A;
try {
    Number((ye || ``).split(`.`)[0]) >= 18 && (A = D.createRoot)
} catch {}

function be(e) {
    var t = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && ne(t) === `object` && (t.usingClientEntryPoint = e)
}
var j = `__rc_react_root__`;

function xe(e, t) {
    be(!0);
    var n = t[j] || A(t);
    be(!1), n.render(e), t[j] = n
}

function M(e, t) {
    O == null || O(e, t)
}

function Se(e, t) {
    A ? xe(e, t) : M(e, t)
}

function N(e) {
    return P.apply(this, arguments)
}

function P() {
    return P = de(x().mark(function e(t) {
        return x().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.abrupt(`return`, Promise.resolve().then(function() {
                        var e;
                        (e = t[j]) == null || e.unmount(), delete t[j]
                    }));
                case 1:
                case `end`:
                    return e.stop()
            }
        }, e)
    })), P.apply(this, arguments)
}

function Ce(e) {
    k(e)
}

function F(e) {
    return I.apply(this, arguments)
}

function I() {
    return I = de(x().mark(function e(t) {
        return x().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (A === void 0) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt(`return`, N(t));
                case 2:
                    Ce(t);
                case 3:
                case `end`:
                    return e.stop()
            }
        }, e)
    })), I.apply(this, arguments)
}
var L = (e, t) => (Se(e, t), () => F(t));

function R(e) {
    return e && (L = e), L
}
var we = se(`Wave`, e => {
        let {
            componentCls: t,
            colorPrimary: n
        } = e;
        return {
            [t]: {
                position: `absolute`,
                background: `transparent`,
                pointerEvents: `none`,
                boxSizing: `border-box`,
                color: `var(--wave-color, ${n})`,
                boxShadow: `0 0 0 0 currentcolor`,
                opacity: .2,
                "&.wave-motion-appear": {
                    transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(`,`),
                    "&-active": {
                        boxShadow: `0 0 0 6px currentcolor`,
                        opacity: 0
                    },
                    "&.wave-quick": {
                        transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(`,`)
                    }
                }
            }
        }
    }),
    z = `ant-wave-target`;

function Te(e) {
    return e && e !== `#fff` && e !== `#ffffff` && e !== `rgb(255, 255, 255)` && e !== `rgba(255, 255, 255, 1)` && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== `transparent` && e !== `canvastext`
}

function Ee(e) {
    let {
        borderTopColor: t,
        borderColor: n,
        backgroundColor: r
    } = getComputedStyle(e);
    return [t, n, r].find(Te) ?? null
}

function B(e) {
    return Number.isNaN(e) ? 0 : e
}
var De = e => {
        let {
            className: t,
            target: n,
            component: r,
            registerUnmount: i
        } = e, a = T.useRef(null), o = T.useRef(null);
        T.useEffect(() => {
            o.current = i()
        }, []);
        let [s, c] = T.useState(null), [l, u] = T.useState([]), [ee, d] = T.useState(0), [ne, f] = T.useState(0), [p, re] = T.useState(0), [m, h] = T.useState(0), [ie, ae] = T.useState(!1), g = {
            left: ee,
            top: ne,
            width: p,
            height: m,
            borderRadius: l.map(e => `${e}px`).join(` `)
        };
        s && (g[`--wave-color`] = s);

        function _() {
            let e = getComputedStyle(n);
            c(Ee(n));
            let t = e.position === `static`,
                {
                    borderLeftWidth: r,
                    borderTopWidth: i
                } = e;
            d(t ? n.offsetLeft : B(-parseFloat(r))), f(t ? n.offsetTop : B(-parseFloat(i))), re(n.offsetWidth), h(n.offsetHeight);
            let {
                borderTopLeftRadius: a,
                borderTopRightRadius: o,
                borderBottomLeftRadius: s,
                borderBottomRightRadius: l
            } = e;
            u([a, o, l, s].map(e => B(parseFloat(e))))
        }
        if (T.useEffect(() => {
                if (n) {
                    let e = w(() => {
                            _(), ae(!0)
                        }),
                        t;
                    return typeof ResizeObserver < `u` && (t = new ResizeObserver(_), t.observe(n)), () => {
                        w.cancel(e), t == null || t.disconnect()
                    }
                }
            }, []), !ie) return null;
        let oe = (r === `Checkbox` || r === `Radio`) && (n == null ? void 0 : n.classList.contains(z));
        return T.createElement(v, {
            visible: !0,
            motionAppear: !0,
            motionName: `wave-motion`,
            motionDeadline: 5e3,
            onAppearEnd: (e, t) => {
                var n, r;
                if (t.deadline || t.propertyName === `opacity`) {
                    let e = (n = a.current) == null ? void 0 : n.parentElement;
                    (r = o.current) == null || r.call(o).then(() => {
                        e == null || e.remove()
                    })
                }
                return !1
            }
        }, ({
            className: e
        }, n) => T.createElement(`div`, {
            ref: te(a, n),
            className: (0, E.default)(t, e, {
                "wave-quick": oe
            }),
            style: g
        }))
    },
    Oe = (e, t) => {
        var n;
        let {
            component: r
        } = t;
        if (r === `Checkbox` && !((n = e.querySelector(`input`)) != null && n.checked)) return;
        let i = document.createElement(`div`);
        i.style.position = `absolute`, i.style.left = `0px`, i.style.top = `0px`, e == null || e.insertBefore(i, e == null ? void 0 : e.firstChild);
        let a = R(),
            o = null;

        function s() {
            return o
        }
        o = a(T.createElement(De, Object.assign({}, t, {
            target: e,
            registerUnmount: s
        })), i)
    },
    ke = (e, t, n) => {
        let {
            wave: r
        } = T.useContext(a), [, o, s] = p(), c = i(i => {
            let a = e.current;
            if (r != null && r.disabled || !a) return;
            let c = a.querySelector(`.${z}`) || a,
                {
                    showEffect: l
                } = r || {};
            (l || Oe)(c, {
                className: t,
                token: o,
                component: n,
                event: i,
                hashId: s
            })
        }), l = T.useRef(null);
        return e => {
            w.cancel(l.current), l.current = w(() => {
                c(e)
            })
        }
    },
    Ae = e => {
        let {
            children: t,
            disabled: n,
            component: i
        } = e, {
            getPrefixCls: o
        } = (0, T.useContext)(a), s = (0, T.useRef)(null), c = o(`wave`), [, l] = we(c), ee = ke(s, (0, E.default)(c, l), i);
        if (T.useEffect(() => {
                let e = s.current;
                if (!e || e.nodeType !== 1 || n) return;
                let t = t => {
                    !S(t.target) || !e.getAttribute || e.getAttribute(`disabled`) || e.disabled || e.className.includes(`disabled`) || e.className.includes(`-leave`) || ee(t)
                };
                return e.addEventListener(`click`, t, !0), () => {
                    e.removeEventListener(`click`, t, !0)
                }
            }, [n]), !T.isValidElement(t)) return t ?? null;
        let d = u(t) ? te(r(t), s) : s;
        return C(t, {
            ref: d
        })
    },
    je = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    Me = T.createContext(void 0),
    V = e => {
        let {
            getPrefixCls: t,
            direction: n
        } = T.useContext(a), {
            prefixCls: r,
            size: i,
            className: o
        } = e, s = je(e, [`prefixCls`, `size`, `className`]), c = t(`btn-group`, r), [, , l] = p(), u = T.useMemo(() => {
            switch (i) {
                case `large`:
                    return `lg`;
                case `small`:
                    return `sm`;
                default:
                    return ``
            }
        }, [i]), ee = (0, E.default)(c, {
            [`${c}-${u}`]: u,
            [`${c}-rtl`]: n === `rtl`
        }, o, l);
        return T.createElement(Me.Provider, {
            value: i
        }, T.createElement(`div`, Object.assign({}, s, {
            className: ee
        })))
    };
ae();
var H = /^[\u4E00-\u9FA5]{2}$/,
    Ne = H.test.bind(H);

function Pe(e) {
    return e === `danger` ? {
        danger: !0
    } : {
        type: e
    }
}

function U(e) {
    return typeof e == `string`
}

function Fe(e) {
    return e === `text` || e === `link`
}

function Ie(e, t) {
    if (e == null) return;
    let n = t ? ` ` : ``;
    return typeof e != `string` && typeof e != `number` && U(e.type) && Ne(e.props.children) ? C(e, {
        children: e.props.children.split(``).join(n)
    }) : U(e) ? Ne(e) ? T.createElement(`span`, null, e.split(``).join(n)) : T.createElement(`span`, null, e) : fe(e) ? T.createElement(`span`, null, e) : e
}

function Le(e, t) {
    let n = !1,
        r = [];
    return T.Children.forEach(e, e => {
        let t = typeof e,
            i = t === `string` || t === `number`;
        if (n && i) {
            let t = r.length - 1,
                n = r[t];
            r[t] = `${n}${e}`
        } else r.push(e);
        n = i
    }), T.Children.map(r, e => Ie(e, t))
} [`default`, `primary`, `danger`].concat(_(y));
var Re = (0, T.forwardRef)((e, t) => {
        let {
            className: n,
            style: r,
            children: i,
            prefixCls: a
        } = e, o = (0, E.default)(`${a}-icon`, n);
        return T.createElement(`span`, {
            ref: t,
            className: o,
            style: r
        }, i)
    }),
    W = (0, T.forwardRef)((e, t) => {
        let {
            prefixCls: n,
            className: r,
            style: i,
            iconClassName: a
        } = e, o = (0, E.default)(`${n}-loading-icon`, r);
        return T.createElement(Re, {
            prefixCls: n,
            className: o,
            style: i,
            ref: t
        }, T.createElement(ge, {
            className: a
        }))
    }),
    G = () => ({
        width: 0,
        opacity: 0,
        transform: `scale(0)`
    }),
    K = e => ({
        width: e.scrollWidth,
        opacity: 1,
        transform: `scale(1)`
    }),
    ze = e => {
        let {
            prefixCls: t,
            loading: n,
            existIcon: r,
            className: i,
            style: a,
            mount: o
        } = e, s = !!n;
        return r ? T.createElement(W, {
            prefixCls: t,
            className: i,
            style: a
        }) : T.createElement(v, {
            visible: s,
            motionName: `${t}-loading-icon-motion`,
            motionAppear: !o,
            motionEnter: !o,
            motionLeave: !o,
            removeOnLeave: !0,
            onAppearStart: G,
            onAppearActive: K,
            onEnterStart: G,
            onEnterActive: K,
            onLeaveStart: K,
            onLeaveActive: G
        }, ({
            className: e,
            style: n
        }, r) => {
            let o = Object.assign(Object.assign({}, a), n);
            return T.createElement(W, {
                prefixCls: t,
                className: (0, E.default)(i, e),
                style: o,
                ref: r
            })
        })
    },
    Be = (e, t) => ({
        [`> span, > ${e}`]: {
            "&:not(:last-child)": {
                [`&, & > ${e}`]: {
                    "&:not(:disabled)": {
                        borderInlineEndColor: t
                    }
                }
            },
            "&:not(:first-child)": {
                [`&, & > ${e}`]: {
                    "&:not(:disabled)": {
                        borderInlineStartColor: t
                    }
                }
            }
        }
    }),
    Ve = e => {
        let {
            componentCls: t,
            fontSize: n,
            lineWidth: r,
            groupBorderColor: i,
            colorErrorHover: a
        } = e;
        return {
            [`${t}-group`]: [{
                position: `relative`,
                display: `inline-flex`,
                [`> span, > ${t}`]: {
                    "&:not(:last-child)": {
                        [`&, & > ${t}`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    "&:not(:first-child)": {
                        marginInlineStart: e.calc(r).mul(-1).equal(),
                        [`&, & > ${t}`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                },
                [t]: {
                    position: `relative`,
                    zIndex: 1,
                    "&:hover, &:focus, &:active": {
                        zIndex: 2
                    },
                    "&[disabled]": {
                        zIndex: 0
                    }
                },
                [`${t}-icon-only`]: {
                    fontSize: n
                }
            }, Be(`${t}-primary`, i), Be(`${t}-danger`, a)]
        }
    },
    He = (e, t) => {
        let {
            r: n,
            g: r,
            b: i,
            a
        } = e.toRgb(), o = new b(e.toRgbString()).onBackground(t).toHsv();
        return a <= .5 ? o.v > .5 : n * .299 + r * .587 + i * .114 > 192
    },
    Ue = e => {
        let {
            paddingInline: t,
            onlyIconSize: n
        } = e;
        return m(e, {
            buttonPaddingHorizontal: t,
            buttonPaddingVertical: 0,
            buttonIconOnlyFontSize: n
        })
    },
    We = e => {
        let t = e.contentFontSize ?? e.fontSize,
            n = e.contentFontSizeSM ?? e.fontSize,
            r = e.contentFontSizeLG ?? e.fontSizeLG,
            i = e.contentLineHeight ?? o(t),
            a = e.contentLineHeightSM ?? o(n),
            s = e.contentLineHeightLG ?? o(r),
            c = He(new he(e.colorBgSolid), `#fff`) ? `#000` : `#fff`,
            l = y.reduce((t, n) => Object.assign(Object.assign({}, t), {
                [`${n}ShadowColor`]: `0 ${f(e.controlOutlineWidth)} 0 ${ue(e[`${n}1`],e.colorBgContainer)}`
            }), {});
        return Object.assign(Object.assign({}, l), {
            fontWeight: 400,
            iconGap: e.marginXS,
            defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
            primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
            dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
            primaryColor: e.colorTextLightSolid,
            dangerColor: e.colorTextLightSolid,
            borderColorDisabled: e.colorBorder,
            defaultGhostColor: e.colorBgContainer,
            ghostBg: `transparent`,
            defaultGhostBorderColor: e.colorBgContainer,
            paddingInline: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineSM: 8 - e.lineWidth,
            onlyIconSize: `inherit`,
            onlyIconSizeSM: `inherit`,
            onlyIconSizeLG: `inherit`,
            groupBorderColor: e.colorPrimaryHover,
            linkHoverBg: `transparent`,
            textTextColor: e.colorText,
            textTextHoverColor: e.colorText,
            textTextActiveColor: e.colorText,
            textHoverBg: e.colorFillTertiary,
            defaultColor: e.colorText,
            defaultBg: e.colorBgContainer,
            defaultBorderColor: e.colorBorder,
            defaultBorderColorDisabled: e.colorBorder,
            defaultHoverBg: e.colorBgContainer,
            defaultHoverColor: e.colorPrimaryHover,
            defaultHoverBorderColor: e.colorPrimaryHover,
            defaultActiveBg: e.colorBgContainer,
            defaultActiveColor: e.colorPrimaryActive,
            defaultActiveBorderColor: e.colorPrimaryActive,
            solidTextColor: c,
            contentFontSize: t,
            contentFontSizeSM: n,
            contentFontSizeLG: r,
            contentLineHeight: i,
            contentLineHeightSM: a,
            contentLineHeightLG: s,
            paddingBlock: Math.max((e.controlHeight - t * i) / 2 - e.lineWidth, 0),
            paddingBlockSM: Math.max((e.controlHeightSM - n * a) / 2 - e.lineWidth, 0),
            paddingBlockLG: Math.max((e.controlHeightLG - r * s) / 2 - e.lineWidth, 0)
        })
    },
    Ge = e => {
        let {
            componentCls: t,
            iconCls: n,
            fontWeight: r,
            opacityLoading: i,
            motionDurationSlow: a,
            motionEaseInOut: o,
            iconGap: s,
            calc: c
        } = e;
        return {
            [t]: {
                outline: `none`,
                position: `relative`,
                display: `inline-flex`,
                gap: s,
                alignItems: `center`,
                justifyContent: `center`,
                fontWeight: r,
                whiteSpace: `nowrap`,
                textAlign: `center`,
                backgroundImage: `none`,
                background: `transparent`,
                border: `${f(e.lineWidth)} ${e.lineType} transparent`,
                cursor: `pointer`,
                transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
                userSelect: `none`,
                touchAction: `manipulation`,
                color: e.colorText,
                "&:disabled > *": {
                    pointerEvents: `none`
                },
                [`${t}-icon > svg`]: g(),
                "> a": {
                    color: `currentColor`
                },
                "&:not(:disabled)": ie(e),
                [`&${t}-two-chinese-chars::first-letter`]: {
                    letterSpacing: `0.34em`
                },
                [`&${t}-two-chinese-chars > *:not(${n})`]: {
                    marginInlineEnd: `-0.34em`,
                    letterSpacing: `0.34em`
                },
                [`&${t}-icon-only`]: {
                    paddingInline: 0,
                    [`&${t}-compact-item`]: {
                        flex: `none`
                    },
                    [`&${t}-round`]: {
                        width: `auto`
                    }
                },
                [`&${t}-loading`]: {
                    opacity: i,
                    cursor: `default`
                },
                [`${t}-loading-icon`]: {
                    transition: [`width`, `opacity`, `margin`].map(e => `${e} ${a} ${o}`).join(`,`)
                },
                [`&:not(${t}-icon-end)`]: {
                    [`${t}-loading-icon-motion`]: {
                        "&-appear-start, &-enter-start": {
                            marginInlineEnd: c(s).mul(-1).equal()
                        },
                        "&-appear-active, &-enter-active": {
                            marginInlineEnd: 0
                        },
                        "&-leave-start": {
                            marginInlineEnd: 0
                        },
                        "&-leave-active": {
                            marginInlineEnd: c(s).mul(-1).equal()
                        }
                    }
                },
                "&-icon-end": {
                    flexDirection: `row-reverse`,
                    [`${t}-loading-icon-motion`]: {
                        "&-appear-start, &-enter-start": {
                            marginInlineStart: c(s).mul(-1).equal()
                        },
                        "&-appear-active, &-enter-active": {
                            marginInlineStart: 0
                        },
                        "&-leave-start": {
                            marginInlineStart: 0
                        },
                        "&-leave-active": {
                            marginInlineStart: c(s).mul(-1).equal()
                        }
                    }
                }
            }
        }
    },
    Ke = (e, t, n) => ({
        [`&:not(:disabled):not(${e}-disabled)`]: {
            "&:hover": t,
            "&:active": n
        }
    }),
    qe = e => ({
        minWidth: e.controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        borderRadius: `50%`
    }),
    Je = e => ({
        borderRadius: e.controlHeight,
        paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
        paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
    }),
    Ye = e => ({
        cursor: `not-allowed`,
        borderColor: e.borderColorDisabled,
        color: e.colorTextDisabled,
        background: e.colorBgContainerDisabled,
        boxShadow: `none`
    }),
    q = (e, t, n, r, i, a, o, s) => ({
        [`&${e}-background-ghost`]: Object.assign(Object.assign({
            color: n || void 0,
            background: t,
            borderColor: r || void 0,
            boxShadow: `none`
        }, Ke(e, Object.assign({
            background: t
        }, o), Object.assign({
            background: t
        }, s))), {
            "&:disabled": {
                cursor: `not-allowed`,
                color: i || void 0,
                borderColor: a || void 0
            }
        })
    }),
    Xe = e => ({
        [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Ye(e))
    }),
    Ze = e => ({
        [`&:disabled, &${e.componentCls}-disabled`]: {
            cursor: `not-allowed`,
            color: e.colorTextDisabled
        }
    }),
    J = (e, t, n, r) => {
        let i = r && [`link`, `text`].includes(r) ? Ze : Xe;
        return Object.assign(Object.assign({}, i(e)), Ke(e.componentCls, t, n))
    },
    Y = (e, t, n, r, i) => ({
        [`&${e.componentCls}-variant-solid`]: Object.assign({
            color: t,
            background: n
        }, J(e, r, i))
    }),
    X = (e, t, n, r, i) => ({
        [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
            borderColor: t,
            background: n
        }, J(e, r, i))
    }),
    Z = e => ({
        [`&${e.componentCls}-variant-dashed`]: {
            borderStyle: `dashed`
        }
    }),
    Q = (e, t, n, r) => ({
        [`&${e.componentCls}-variant-filled`]: Object.assign({
            boxShadow: `none`,
            background: t
        }, J(e, n, r))
    }),
    $ = (e, t, n, r, i) => ({
        [`&${e.componentCls}-variant-${n}`]: Object.assign({
            color: t,
            boxShadow: `none`
        }, J(e, r, i, n))
    }),
    Qe = e => {
        let {
            componentCls: t
        } = e;
        return y.reduce((n, r) => {
            let i = e[`${r}6`],
                a = e[`${r}1`],
                o = e[`${r}5`],
                s = e[`${r}2`],
                c = e[`${r}3`],
                l = e[`${r}7`];
            return Object.assign(Object.assign({}, n), {
                [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                    color: i,
                    boxShadow: e[`${r}ShadowColor`]
                }, Y(e, e.colorTextLightSolid, i, {
                    background: o
                }, {
                    background: l
                })), X(e, i, e.colorBgContainer, {
                    color: o,
                    borderColor: o,
                    background: e.colorBgContainer
                }, {
                    color: l,
                    borderColor: l,
                    background: e.colorBgContainer
                })), Z(e)), Q(e, a, {
                    color: i,
                    background: s
                }, {
                    color: i,
                    background: c
                })), $(e, i, `link`, {
                    color: o
                }, {
                    color: l
                })), $(e, i, `text`, {
                    color: o,
                    background: a
                }, {
                    color: l,
                    background: c
                }))
            })
        }, {})
    },
    $e = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: e.defaultColor,
        boxShadow: e.defaultShadow
    }, Y(e, e.solidTextColor, e.colorBgSolid, {
        color: e.solidTextColor,
        background: e.colorBgSolidHover
    }, {
        color: e.solidTextColor,
        background: e.colorBgSolidActive
    })), Z(e)), Q(e, e.colorFillTertiary, {
        color: e.defaultColor,
        background: e.colorFillSecondary
    }, {
        color: e.defaultColor,
        background: e.colorFill
    })), q(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), $(e, e.textTextColor, `link`, {
        color: e.colorLinkHover,
        background: e.linkHoverBg
    }, {
        color: e.colorLinkActive
    })),
    et = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: e.colorPrimary,
        boxShadow: e.primaryShadow
    }, X(e, e.colorPrimary, e.colorBgContainer, {
        color: e.colorPrimaryTextHover,
        borderColor: e.colorPrimaryHover,
        background: e.colorBgContainer
    }, {
        color: e.colorPrimaryTextActive,
        borderColor: e.colorPrimaryActive,
        background: e.colorBgContainer
    })), Z(e)), Q(e, e.colorPrimaryBg, {
        color: e.colorPrimary,
        background: e.colorPrimaryBgHover
    }, {
        color: e.colorPrimary,
        background: e.colorPrimaryBorder
    })), $(e, e.colorPrimaryText, `text`, {
        color: e.colorPrimaryTextHover,
        background: e.colorPrimaryBg
    }, {
        color: e.colorPrimaryTextActive,
        background: e.colorPrimaryBorder
    })), $(e, e.colorPrimaryText, `link`, {
        color: e.colorPrimaryTextHover,
        background: e.linkHoverBg
    }, {
        color: e.colorPrimaryTextActive
    })), q(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
        color: e.colorPrimaryHover,
        borderColor: e.colorPrimaryHover
    }, {
        color: e.colorPrimaryActive,
        borderColor: e.colorPrimaryActive
    })),
    tt = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: e.colorError,
        boxShadow: e.dangerShadow
    }, Y(e, e.dangerColor, e.colorError, {
        background: e.colorErrorHover
    }, {
        background: e.colorErrorActive
    })), X(e, e.colorError, e.colorBgContainer, {
        color: e.colorErrorHover,
        borderColor: e.colorErrorBorderHover
    }, {
        color: e.colorErrorActive,
        borderColor: e.colorErrorActive
    })), Z(e)), Q(e, e.colorErrorBg, {
        color: e.colorError,
        background: e.colorErrorBgFilledHover
    }, {
        color: e.colorError,
        background: e.colorErrorBgActive
    })), $(e, e.colorError, `text`, {
        color: e.colorErrorHover,
        background: e.colorErrorBg
    }, {
        color: e.colorErrorHover,
        background: e.colorErrorBgActive
    })), $(e, e.colorError, `link`, {
        color: e.colorErrorHover
    }, {
        color: e.colorErrorActive
    })), q(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
        color: e.colorErrorHover,
        borderColor: e.colorErrorHover
    }, {
        color: e.colorErrorActive,
        borderColor: e.colorErrorActive
    })),
    nt = e => Object.assign(Object.assign({}, $(e, e.colorLink, `link`, {
        color: e.colorLinkHover
    }, {
        color: e.colorLinkActive
    })), q(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
        color: e.colorInfoHover,
        borderColor: e.colorInfoHover
    }, {
        color: e.colorInfoActive,
        borderColor: e.colorInfoActive
    })),
    rt = e => {
        let {
            componentCls: t
        } = e;
        return Object.assign({
            [`${t}-color-default`]: $e(e),
            [`${t}-color-primary`]: et(e),
            [`${t}-color-dangerous`]: tt(e),
            [`${t}-color-link`]: nt(e)
        }, Qe(e))
    },
    it = e => Object.assign(Object.assign(Object.assign(Object.assign({}, X(e, e.defaultBorderColor, e.defaultBg, {
        color: e.defaultHoverColor,
        borderColor: e.defaultHoverBorderColor,
        background: e.defaultHoverBg
    }, {
        color: e.defaultActiveColor,
        borderColor: e.defaultActiveBorderColor,
        background: e.defaultActiveBg
    })), $(e, e.textTextColor, `text`, {
        color: e.textTextHoverColor,
        background: e.textHoverBg
    }, {
        color: e.textTextActiveColor,
        background: e.colorBgTextActive
    })), Y(e, e.primaryColor, e.colorPrimary, {
        background: e.colorPrimaryHover,
        color: e.primaryColor
    }, {
        background: e.colorPrimaryActive,
        color: e.primaryColor
    })), $(e, e.colorLink, `link`, {
        color: e.colorLinkHover,
        background: e.linkHoverBg
    }, {
        color: e.colorLinkActive
    })),
    at = (e, t = ``) => {
        let {
            componentCls: n,
            controlHeight: r,
            fontSize: i,
            borderRadius: a,
            buttonPaddingHorizontal: o,
            iconCls: s,
            buttonPaddingVertical: c,
            buttonIconOnlyFontSize: l
        } = e;
        return [{
            [t]: {
                fontSize: i,
                height: r,
                padding: `${f(c)} ${f(o)}`,
                borderRadius: a,
                [`&${n}-icon-only`]: {
                    width: r,
                    [s]: {
                        fontSize: l
                    }
                }
            }
        }, {
            [`${n}${n}-circle${t}`]: qe(e)
        }, {
            [`${n}${n}-round${t}`]: Je(e)
        }]
    },
    ot = e => at(m(e, {
        fontSize: e.contentFontSize
    }), e.componentCls),
    st = e => at(m(e, {
        controlHeight: e.controlHeightSM,
        fontSize: e.contentFontSizeSM,
        padding: e.paddingXS,
        buttonPaddingHorizontal: e.paddingInlineSM,
        buttonPaddingVertical: 0,
        borderRadius: e.borderRadiusSM,
        buttonIconOnlyFontSize: e.onlyIconSizeSM
    }), `${e.componentCls}-sm`),
    ct = e => at(m(e, {
        controlHeight: e.controlHeightLG,
        fontSize: e.contentFontSizeLG,
        buttonPaddingHorizontal: e.paddingInlineLG,
        buttonPaddingVertical: 0,
        borderRadius: e.borderRadiusLG,
        buttonIconOnlyFontSize: e.onlyIconSizeLG
    }), `${e.componentCls}-lg`),
    lt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [t]: {
                [`&${t}-block`]: {
                    width: `100%`
                }
            }
        }
    },
    ut = le(`Button`, e => {
        let t = Ue(e);
        return [Ge(t), ot(t), st(t), ct(t), lt(t), rt(t), it(t), Ve(t)]
    }, We, {
        unitless: {
            fontWeight: !0,
            contentLineHeight: !0,
            contentLineHeightSM: !0,
            contentLineHeightLG: !0
        }
    });

function dt(e, t, n) {
    return {
        [`&-item:not(${t}-last-item)`]: {
            marginBottom: e.calc(e.lineWidth).mul(-1).equal()
        },
        [`&-item:not(${n}-status-success)`]: {
            zIndex: 2
        },
        "&-item": {
            "&:hover,&:focus,&:active": {
                zIndex: 3
            },
            "&[disabled]": {
                zIndex: 0
            }
        }
    }
}

function ft(e, t) {
    return {
        [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
            borderRadius: 0
        },
        [`&-item${t}-first-item:not(${t}-last-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: {
                borderEndEndRadius: 0,
                borderEndStartRadius: 0
            }
        },
        [`&-item${t}-last-item:not(${t}-first-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: {
                borderStartStartRadius: 0,
                borderStartEndRadius: 0
            }
        }
    }
}

function pt(e) {
    let t = `${e.componentCls}-compact-vertical`;
    return {
        [t]: Object.assign(Object.assign({}, dt(e, t, e.componentCls)), ft(e.componentCls, t))
    }
}
var mt = e => {
        let {
            componentCls: t,
            colorPrimaryHover: n,
            lineWidth: r,
            calc: i
        } = e, a = i(r).mul(-1).equal(), o = e => {
            let i = `${t}-compact${e?`-vertical`:``}-item${t}-primary:not([disabled])`;
            return {
                [`${i} + ${i}::before`]: {
                    position: `absolute`,
                    top: e ? a : 0,
                    insetInlineStart: e ? 0 : a,
                    backgroundColor: n,
                    content: `""`,
                    width: e ? `100%` : r,
                    height: e ? r : `100%`
                }
            }
        };
        return Object.assign(Object.assign({}, o()), o(!0))
    },
    ht = h([`Button`, `compact`], e => {
        let t = Ue(e);
        return [_e(t), pt(t), mt(t)]
    }, We),
    gt = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    };

function _t(e) {
    if (typeof e == `object` && e) {
        let t = e == null ? void 0 : e.delay;
        return t = !Number.isNaN(t) && typeof t == `number` ? t : 0, {
            loading: t <= 0,
            delay: t
        }
    }
    return {
        loading: !!e,
        delay: 0
    }
}
var vt = {
        default: [`default`, `outlined`],
        primary: [`primary`, `solid`],
        dashed: [`default`, `dashed`],
        link: [`link`, `link`],
        text: [`default`, `text`]
    },
    yt = T.forwardRef((e, t) => {
        let {
            loading: n = !1,
            prefixCls: r,
            color: i,
            variant: o,
            type: s,
            danger: c = !1,
            shape: u,
            size: te,
            styles: d,
            disabled: ne,
            className: f,
            rootClassName: p,
            children: m,
            icon: h,
            iconPosition: ie = `start`,
            ghost: ae = !1,
            block: g = !1,
            htmlType: _ = `button`,
            classNames: se,
            style: le = {},
            autoInsertSpace: ue,
            autoFocus: de
        } = e, fe = gt(e, [`loading`, `prefixCls`, `color`, `variant`, `type`, `danger`, `shape`, `size`, `styles`, `disabled`, `className`, `rootClassName`, `children`, `icon`, `iconPosition`, `ghost`, `block`, `htmlType`, `classNames`, `style`, `autoInsertSpace`, `autoFocus`]), v = s || `default`, {
            button: y
        } = T.useContext(a), b = u || (y == null ? void 0 : y.shape) || `default`, [x, S] = (0, T.useMemo)(() => {
            if (i && o) return [i, o];
            if (s || c) {
                let e = vt[v] || [];
                return c ? [`danger`, e[1]] : e
            }
            return y != null && y.color && y != null && y.variant ? [y.color, y.variant] : [`default`, `outlined`]
        }, [s, i, o, c, y == null ? void 0 : y.variant, y == null ? void 0 : y.color]), C = x === `danger` ? `dangerous` : x, {
            getPrefixCls: he,
            direction: w,
            autoInsertSpace: ge,
            className: _e,
            style: ve,
            classNames: D,
            styles: ye
        } = oe(`button`), O = ue ?? ge ?? !0, k = he(`btn`, r), [A, be, j] = ut(k), xe = (0, T.useContext)(pe), M = ne ?? xe, Se = (0, T.useContext)(Me), N = (0, T.useMemo)(() => _t(n), [n]), [P, Ce] = (0, T.useState)(N.loading), [F, I] = (0, T.useState)(!1), L = (0, T.useRef)(null), R = ee(t, L), we = T.Children.count(m) === 1 && !h && !Fe(S), z = (0, T.useRef)(!0);
        T.useEffect(() => (z.current = !1, () => {
            z.current = !0
        }), []), l(() => {
            let e = null;
            N.delay > 0 ? e = setTimeout(() => {
                e = null, Ce(!0)
            }, N.delay) : Ce(N.loading);

            function t() {
                e && (clearTimeout(e), e = null)
            }
            return t
        }, [N.delay, N.loading]), (0, T.useEffect)(() => {
            if (!L.current || !O) return;
            let e = L.current.textContent || ``;
            we && Ne(e) ? F || I(!0) : F && I(!1)
        }), (0, T.useEffect)(() => {
            de && L.current && L.current.focus()
        }, []);
        let Te = T.useCallback(t => {
                var n;
                P || M ? t.preventDefault() : (n = e.onClick) == null || n.call(e, (`href` in e, t))
            }, [e.onClick, P, M]),
            {
                compactSize: Ee,
                compactItemClassnames: B
            } = ce(k, w),
            De = {
                large: `lg`,
                small: `sm`,
                middle: void 0
            },
            Oe = re(e => te ?? Ee ?? Se ?? e),
            ke = Oe ? De[Oe] ?? `` : ``,
            je = P ? `loading` : h,
            V = me(fe, [`navigate`]),
            H = (0, E.default)(k, be, j, {
                [`${k}-${b}`]: b !== "default" && b,
                [`${k}-${v}`]: v,
                [`${k}-dangerous`]: c,
                [`${k}-color-${C}`]: C,
                [`${k}-variant-${S}`]: S,
                [`${k}-${ke}`]: ke,
                [`${k}-icon-only`]: !m && m !== 0 && !!je,
                [`${k}-background-ghost`]: ae && !Fe(S),
                [`${k}-loading`]: P,
                [`${k}-two-chinese-chars`]: F && O && !P,
                [`${k}-block`]: g,
                [`${k}-rtl`]: w === `rtl`,
                [`${k}-icon-end`]: ie === `end`
            }, B, f, p, _e),
            Pe = Object.assign(Object.assign({}, ve), le),
            U = (0, E.default)(se == null ? void 0 : se.icon, D.icon),
            Ie = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ye.icon || {}),
            W = h && !P ? T.createElement(Re, {
                prefixCls: k,
                className: U,
                style: Ie
            }, h) : n && typeof n == `object` && n.icon ? T.createElement(Re, {
                prefixCls: k,
                className: U,
                style: Ie
            }, n.icon) : T.createElement(ze, {
                existIcon: !!h,
                prefixCls: k,
                loading: P,
                mount: z.current
            }),
            G = m || m === 0 ? Le(m, we && O) : null;
        if (V.href !== void 0) return A(T.createElement(`a`, Object.assign({}, V, {
            className: (0, E.default)(H, {
                [`${k}-disabled`]: M
            }),
            href: M ? void 0 : V.href,
            style: Pe,
            onClick: Te,
            ref: R,
            tabIndex: M ? -1 : 0
        }), W, G));
        let K = T.createElement(`button`, Object.assign({}, fe, {
            type: _,
            className: H,
            style: Pe,
            onClick: Te,
            disabled: M,
            ref: R
        }), W, G, B && T.createElement(ht, {
            prefixCls: k
        }));
        return Fe(S) || (K = T.createElement(Ae, {
            component: `Button`,
            disabled: P
        }, K)), A(K)
    });
yt.Group = V, yt.__ANT_BUTTON = !0;
var bt = yt;
export {
    R as a, z as i, Pe as n, Ae as r, bt as t
};