import {
    x as N,
    az as ze,
    am as ee,
    aA as X,
    aB as Re,
    aC as ke,
    _ as Z,
    aD as Xe,
    aE as Ze,
    aF as Fe,
    aG as Qe,
    aH as Je,
    aI as et,
    aJ as tt,
    aK as nt,
    r as i,
    al as st,
    ai as at,
    aj as ot,
    ak as G,
    aL as it,
    aM as rt,
    aN as lt,
    aO as ct,
    aP as dt,
    aQ as Ie,
    aR as ut,
    aS as Ne,
    I as Oe,
    i as W,
    j as e,
    aa as mt,
    F as y,
    aT as gt,
    e as k,
    d as _,
    a as I,
    W as ge,
    l as D,
    M as Y,
    U as T,
    B as q,
    D as Q,
    aU as ht,
    ab as re,
    ae as ft,
    a4 as xt,
    h as me,
    t as se,
    aV as pt,
    c as L,
    s as yt,
    aW as $e,
    y as vt,
    f as Ce,
    b as bt,
    V as De,
    ac as jt,
    ar as Ct,
    C as St,
    Z as wt,
    T as kt
} from "./_index.js";
import {
    b as U,
    a as Le,
    T as A,
    s as P,
    G as ue,
    S as It
} from "./App-4.js";
import {
    o as H
} from "./mobxreact.esm.js";
import {
    A as J
} from "./AccessibleAnchor.js";
import {
    M as le
} from "./MenuItem.js";
import {
    R as Nt
} from "./PlayCircleOutlined.js";
import {
    R as $t
} from "./QuestionCircleOutlined.js";
import {
    i as Pe
} from "./ContinueButton.js";
import {
    M as Pt,
    a as Bt
} from "./NameAndPasswordStage.js";
import {
    I as te,
    R as Et
} from "./index-3.js";
import {
    v as At,
    F as Tt
} from "./EmailStage.js";
import {
    E as Mt
} from "./ErrorMessage.js";
import {
    g as zt,
    R as Rt
} from "./index-10.js";
import {
    LIBRARY_CACHE_KEY as Ft
} from "./SchoolLibrary.js";
import {
    S as Ot
} from "./School.js";
import {
    D as Dt
} from "./index-6.js";
import {
    L as V
} from "./AppTypes.js";
import {
    S as he
} from "./index-8.js";
import {
    g as Lt,
    a as Gt,
    b as Wt
} from "./Language.js";
import {
    S as Se
} from "./index-9.js";
import {
    s as Ge
} from "./index-4.js";
import {
    u as _t
} from "./useQuery.js";
import {
    T as We
} from "./index-12.js";
import {
    S as Ut
} from "./index-2.js";
import {
    c as fe
} from "./Money.js";
import {
    l as Ht
} from "./stripe.esm.js";
import {
    R as Be
} from "./index-13.js";
import {
    R as Kt
} from "./StarOutlined.js";
import {
    F as Yt
} from "./FillRemainingSpace.js";
import "./Shortcut.js";
import "./Names.js";
import "./index-1.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-5.js";
import "./move.js";
import "./KitPreview.js";
import "./ImagePreview.js";
import "./getCloudinaryUrl.js";
import "./index.es.js";
import "./CheckOutlined.js";
import "./DownOutlined.js";
import "./context.js";
import "./useBubbleLock.js";
import "./useForm.js";
var _e = N.forwardRef(function(t, n) {
    var s = t.prefixCls,
        a = t.forceRender,
        o = t.className,
        l = t.style,
        r = t.children,
        c = t.isActive,
        m = t.role,
        d = t.classNames,
        g = t.styles,
        u = N.useState(c || a),
        v = ze(u, 2),
        f = v[0],
        p = v[1];
    return N.useEffect(function() {
        (a || c) && p(!0)
    }, [a, c]), f ? N.createElement("div", {
        ref: n,
        className: ee("".concat(s, "-content"), X(X({}, "".concat(s, "-content-active"), c), "".concat(s, "-content-inactive"), !c), o),
        style: l,
        role: m
    }, N.createElement("div", {
        className: ee("".concat(s, "-content-box"), d == null ? void 0 : d.body),
        style: g == null ? void 0 : g.body
    }, r)) : null
});
_e.displayName = "PanelContent";
var qt = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"],
    Ue = N.forwardRef(function(t, n) {
        var s = t.showArrow,
            a = s === void 0 ? !0 : s,
            o = t.headerClass,
            l = t.isActive,
            r = t.onItemClick,
            c = t.forceRender,
            m = t.className,
            d = t.classNames,
            g = d === void 0 ? {} : d,
            u = t.styles,
            v = u === void 0 ? {} : u,
            f = t.prefixCls,
            p = t.collapsible,
            j = t.accordion,
            C = t.panelKey,
            x = t.extra,
            S = t.header,
            w = t.expandIcon,
            h = t.openMotion,
            B = t.destroyInactivePanel,
            b = t.children,
            $ = Re(t, qt),
            E = p === "disabled",
            M = x != null && typeof x != "boolean",
            z = X(X(X({
                onClick: function() {
                    r == null || r(C)
                },
                onKeyDown: function(O) {
                    (O.key === "Enter" || O.keyCode === ke.ENTER || O.which === ke.ENTER) && (r == null || r(C))
                },
                role: j ? "tab" : "button"
            }, "aria-expanded", l), "aria-disabled", E), "tabIndex", E ? -1 : 0),
            K = typeof w == "function" ? w(t) : N.createElement("i", {
                className: "arrow"
            }),
            oe = K && N.createElement("div", Z({
                className: "".concat(f, "-expand-icon")
            }, ["header", "icon"].includes(p) ? z : {}), K),
            xe = ee("".concat(f, "-item"), X(X({}, "".concat(f, "-item-active"), l), "".concat(f, "-item-disabled"), E), m),
            pe = ee(o, "".concat(f, "-header"), X({}, "".concat(f, "-collapsible-").concat(p), !!p), g.header),
            R = Xe({
                className: pe,
                style: v.header
            }, ["header", "icon"].includes(p) ? {} : z);
        return N.createElement("div", Z({}, $, {
            ref: n,
            className: xe
        }), N.createElement("div", R, a && oe, N.createElement("span", Z({
            className: "".concat(f, "-header-text")
        }, p === "header" ? z : {}), S), M && N.createElement("div", {
            className: "".concat(f, "-extra")
        }, x)), N.createElement(Ze, Z({
            visible: l,
            leavedClassName: "".concat(f, "-content-hidden")
        }, h, {
            forceRender: c,
            removeOnLeave: B
        }), function(F, O) {
            var ie = F.className,
                ne = F.style;
            return N.createElement(_e, {
                ref: O,
                prefixCls: f,
                className: ie,
                classNames: g,
                style: ne,
                styles: v,
                isActive: l,
                forceRender: c,
                role: j ? "tabpanel" : void 0
            }, b)
        }))
    }),
    Vt = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"],
    Xt = function(n, s) {
        var a = s.prefixCls,
            o = s.accordion,
            l = s.collapsible,
            r = s.destroyInactivePanel,
            c = s.onItemClick,
            m = s.activeKey,
            d = s.openMotion,
            g = s.expandIcon;
        return n.map(function(u, v) {
            var f = u.children,
                p = u.label,
                j = u.key,
                C = u.collapsible,
                x = u.onItemClick,
                S = u.destroyInactivePanel,
                w = Re(u, Vt),
                h = String(j ?? v),
                B = C ?? l,
                b = S ?? r,
                $ = function(z) {
                    B !== "disabled" && (c(z), x == null || x(z))
                },
                E = !1;
            return o ? E = m[0] === h : E = m.indexOf(h) > -1, N.createElement(Ue, Z({}, w, {
                prefixCls: a,
                key: h,
                panelKey: h,
                isActive: E,
                accordion: o,
                openMotion: d,
                expandIcon: g,
                header: p,
                collapsible: B,
                onItemClick: $,
                destroyInactivePanel: b
            }), f)
        })
    },
    Zt = function(n, s, a) {
        if (!n) return null;
        var o = a.prefixCls,
            l = a.accordion,
            r = a.collapsible,
            c = a.destroyInactivePanel,
            m = a.onItemClick,
            d = a.activeKey,
            g = a.openMotion,
            u = a.expandIcon,
            v = n.key || String(s),
            f = n.props,
            p = f.header,
            j = f.headerClass,
            C = f.destroyInactivePanel,
            x = f.collapsible,
            S = f.onItemClick,
            w = !1;
        l ? w = d[0] === v : w = d.indexOf(v) > -1;
        var h = x ?? r,
            B = function(E) {
                h !== "disabled" && (m(E), S == null || S(E))
            },
            b = {
                key: v,
                panelKey: v,
                header: p,
                headerClass: j,
                isActive: w,
                prefixCls: o,
                destroyInactivePanel: C ?? c,
                openMotion: g,
                accordion: l,
                children: n.props.children,
                onItemClick: B,
                expandIcon: u,
                collapsible: h
            };
        return typeof n.type == "string" ? n : (Object.keys(b).forEach(function($) {
            typeof b[$] > "u" && delete b[$]
        }), N.cloneElement(n, b))
    };

function Qt(t, n, s) {
    return Array.isArray(t) ? Xt(t, s) : Fe(n).map(function(a, o) {
        return Zt(a, o, s)
    })
}

function Jt(t) {
    var n = t;
    if (!Array.isArray(n)) {
        var s = tt(n);
        n = s === "number" || s === "string" ? [n] : []
    }
    return n.map(function(a) {
        return String(a)
    })
}
var en = N.forwardRef(function(t, n) {
    var s = t.prefixCls,
        a = s === void 0 ? "rc-collapse" : s,
        o = t.destroyInactivePanel,
        l = o === void 0 ? !1 : o,
        r = t.style,
        c = t.accordion,
        m = t.className,
        d = t.children,
        g = t.collapsible,
        u = t.openMotion,
        v = t.expandIcon,
        f = t.activeKey,
        p = t.defaultActiveKey,
        j = t.onChange,
        C = t.items,
        x = ee(a, m),
        S = Qe([], {
            value: f,
            onChange: function(M) {
                return j == null ? void 0 : j(M)
            },
            defaultValue: p,
            postState: Jt
        }),
        w = ze(S, 2),
        h = w[0],
        B = w[1],
        b = function(M) {
            return B(function() {
                if (c) return h[0] === M ? [] : [M];
                var z = h.indexOf(M),
                    K = z > -1;
                return K ? h.filter(function(oe) {
                    return oe !== M
                }) : [].concat(nt(h), [M])
            })
        };
    Je(!d, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
    var $ = Qt(C, d, {
        prefixCls: a,
        accordion: c,
        openMotion: u,
        expandIcon: v,
        collapsible: g,
        destroyInactivePanel: l,
        onItemClick: b,
        activeKey: h
    });
    return N.createElement("div", Z({
        ref: n,
        className: x,
        style: r,
        role: c ? "tablist" : void 0
    }, et(t, {
        aria: !0,
        data: !0
    })), $)
});
const we = Object.assign(en, {
    Panel: Ue
});
we.Panel;
const tn = i.forwardRef((t, n) => {
        const {
            getPrefixCls: s
        } = i.useContext(st), {
            prefixCls: a,
            className: o,
            showArrow: l = !0
        } = t, r = s("collapse", a), c = ee({
            [`${r}-no-arrow`]: !l
        }, o);
        return i.createElement(we.Panel, Object.assign({
            ref: n
        }, t, {
            prefixCls: r,
            className: c
        }))
    }),
    nn = t => {
        const {
            componentCls: n,
            contentBg: s,
            padding: a,
            headerBg: o,
            headerPadding: l,
            collapseHeaderPaddingSM: r,
            collapseHeaderPaddingLG: c,
            collapsePanelBorderRadius: m,
            lineWidth: d,
            lineType: g,
            colorBorder: u,
            colorText: v,
            colorTextHeading: f,
            colorTextDisabled: p,
            fontSizeLG: j,
            lineHeight: C,
            lineHeightLG: x,
            marginSM: S,
            paddingSM: w,
            paddingLG: h,
            paddingXS: B,
            motionDurationSlow: b,
            fontSizeIcon: $,
            contentPadding: E,
            fontHeight: M,
            fontHeightLG: z
        } = t, K = `${G(d)} ${g} ${u}`;
        return {
            [n]: Object.assign(Object.assign({}, it(t)), {
                backgroundColor: o,
                border: K,
                borderRadius: m,
                "&-rtl": {
                    direction: "rtl"
                },
                [`& > ${n}-item`]: {
                    borderBottom: K,
                    "&:first-child": {
                        [`
            &,
            & > ${n}-header`]: {
                            borderRadius: `${G(m)} ${G(m)} 0 0`
                        }
                    },
                    "&:last-child": {
                        [`
            &,
            & > ${n}-header`]: {
                            borderRadius: `0 0 ${G(m)} ${G(m)}`
                        }
                    },
                    [`> ${n}-header`]: Object.assign(Object.assign({
                        position: "relative",
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        padding: l,
                        color: f,
                        lineHeight: C,
                        cursor: "pointer",
                        transition: `all ${b}, visibility 0s`
                    }, rt(t)), {
                        [`> ${n}-header-text`]: {
                            flex: "auto"
                        },
                        [`${n}-expand-icon`]: {
                            height: M,
                            display: "flex",
                            alignItems: "center",
                            paddingInlineEnd: S
                        },
                        [`${n}-arrow`]: Object.assign(Object.assign({}, lt()), {
                            fontSize: $,
                            transition: `transform ${b}`,
                            svg: {
                                transition: `transform ${b}`
                            }
                        }),
                        [`${n}-header-text`]: {
                            marginInlineEnd: "auto"
                        }
                    }),
                    [`${n}-collapsible-header`]: {
                        cursor: "default",
                        [`${n}-header-text`]: {
                            flex: "none",
                            cursor: "pointer"
                        }
                    },
                    [`${n}-collapsible-icon`]: {
                        cursor: "unset",
                        [`${n}-expand-icon`]: {
                            cursor: "pointer"
                        }
                    }
                },
                [`${n}-content`]: {
                    color: v,
                    backgroundColor: s,
                    borderTop: K,
                    [`& > ${n}-content-box`]: {
                        padding: E
                    },
                    "&-hidden": {
                        display: "none"
                    }
                },
                "&-small": {
                    [`> ${n}-item`]: {
                        [`> ${n}-header`]: {
                            padding: r,
                            paddingInlineStart: B,
                            [`> ${n}-expand-icon`]: {
                                marginInlineStart: t.calc(w).sub(B).equal()
                            }
                        },
                        [`> ${n}-content > ${n}-content-box`]: {
                            padding: w
                        }
                    }
                },
                "&-large": {
                    [`> ${n}-item`]: {
                        fontSize: j,
                        lineHeight: x,
                        [`> ${n}-header`]: {
                            padding: c,
                            paddingInlineStart: a,
                            [`> ${n}-expand-icon`]: {
                                height: z,
                                marginInlineStart: t.calc(h).sub(a).equal()
                            }
                        },
                        [`> ${n}-content > ${n}-content-box`]: {
                            padding: h
                        }
                    }
                },
                [`${n}-item:last-child`]: {
                    borderBottom: 0,
                    [`> ${n}-content`]: {
                        borderRadius: `0 0 ${G(m)} ${G(m)}`
                    }
                },
                [`& ${n}-item-disabled > ${n}-header`]: {
                    "\n          &,\n          & > .arrow\n        ": {
                        color: p,
                        cursor: "not-allowed"
                    }
                },
                [`&${n}-icon-position-end`]: {
                    [`& > ${n}-item`]: {
                        [`> ${n}-header`]: {
                            [`${n}-expand-icon`]: {
                                order: 1,
                                paddingInlineEnd: 0,
                                paddingInlineStart: S
                            }
                        }
                    }
                }
            })
        }
    },
    sn = t => {
        const {
            componentCls: n
        } = t, s = `> ${n}-item > ${n}-header ${n}-arrow`;
        return {
            [`${n}-rtl`]: {
                [s]: {
                    transform: "rotate(180deg)"
                }
            }
        }
    },
    an = t => {
        const {
            componentCls: n,
            headerBg: s,
            borderlessContentPadding: a,
            borderlessContentBg: o,
            colorBorder: l
        } = t;
        return {
            [`${n}-borderless`]: {
                backgroundColor: s,
                border: 0,
                [`> ${n}-item`]: {
                    borderBottom: `1px solid ${l}`
                },
                [`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]: {
                    borderRadius: 0
                },
                [`> ${n}-item:last-child`]: {
                    borderBottom: 0
                },
                [`> ${n}-item > ${n}-content`]: {
                    backgroundColor: o,
                    borderTop: 0
                },
                [`> ${n}-item > ${n}-content > ${n}-content-box`]: {
                    padding: a
                }
            }
        }
    },
    on = t => {
        const {
            componentCls: n,
            paddingSM: s
        } = t;
        return {
            [`${n}-ghost`]: {
                backgroundColor: "transparent",
                border: 0,
                [`> ${n}-item`]: {
                    borderBottom: 0,
                    [`> ${n}-content`]: {
                        backgroundColor: "transparent",
                        border: 0,
                        [`> ${n}-content-box`]: {
                            paddingBlock: s
                        }
                    }
                }
            }
        }
    },
    rn = t => ({
        headerPadding: `${t.paddingSM}px ${t.padding}px`,
        headerBg: t.colorFillAlter,
        contentPadding: `${t.padding}px 16px`,
        contentBg: t.colorBgContainer,
        borderlessContentPadding: `${t.paddingXXS}px 16px ${t.padding}px`,
        borderlessContentBg: "transparent"
    }),
    ln = at("Collapse", t => {
        const n = ot(t, {
            collapseHeaderPaddingSM: `${G(t.paddingXS)} ${G(t.paddingSM)}`,
            collapseHeaderPaddingLG: `${G(t.padding)} ${G(t.paddingLG)}`,
            collapsePanelBorderRadius: t.borderRadiusLG
        });
        return [nn(n), an(n), on(n), sn(n), zt(n)]
    }, rn),
    cn = i.forwardRef((t, n) => {
        const {
            getPrefixCls: s,
            direction: a,
            expandIcon: o,
            className: l,
            style: r
        } = ct("collapse"), {
            prefixCls: c,
            className: m,
            rootClassName: d,
            style: g,
            bordered: u = !0,
            ghost: v,
            size: f,
            expandIconPosition: p = "start",
            children: j,
            destroyInactivePanel: C,
            destroyOnHidden: x,
            expandIcon: S
        } = t, w = dt(R => {
            var F;
            return (F = f ?? R) !== null && F !== void 0 ? F : "middle"
        }), h = s("collapse", c), B = s(), [b, $, E] = ln(h), M = i.useMemo(() => p === "left" ? "start" : p === "right" ? "end" : p, [p]), z = S ?? o, K = i.useCallback((R = {}) => {
            const F = typeof z == "function" ? z(R) : i.createElement(Rt, {
                rotate: R.isActive ? a === "rtl" ? -90 : 90 : void 0,
                "aria-label": R.isActive ? "expanded" : "collapsed"
            });
            return Ie(F, () => {
                var O;
                return {
                    className: ee((O = F.props) === null || O === void 0 ? void 0 : O.className, `${h}-arrow`)
                }
            })
        }, [z, h, a]), oe = ee(`${h}-icon-position-${M}`, {
            [`${h}-borderless`]: !u,
            [`${h}-rtl`]: a === "rtl",
            [`${h}-ghost`]: !!v,
            [`${h}-${w}`]: w !== "middle"
        }, l, m, d, $, E), xe = i.useMemo(() => Object.assign(Object.assign({}, ut(B)), {
            motionAppear: !1,
            leavedClassName: `${h}-content-hidden`
        }), [B, h]), pe = i.useMemo(() => j ? Fe(j).map((R, F) => {
            var O, ie;
            const ne = R.props;
            if (ne != null && ne.disabled) {
                const qe = (O = R.key) !== null && O !== void 0 ? O : String(F),
                    Ve = Object.assign(Object.assign({}, Ne(R.props, ["disabled"])), {
                        key: qe,
                        collapsible: (ie = ne.collapsible) !== null && ie !== void 0 ? ie : "disabled"
                    });
                return Ie(R, Ve)
            }
            return R
        }) : null, [j]);
        return b(i.createElement(we, Object.assign({
            ref: n,
            openMotion: xe
        }, Ne(t, ["rootClassName"]), {
            expandIcon: K,
            prefixCls: h,
            className: oe,
            style: Object.assign(Object.assign({}, r), g),
            destroyInactivePanel: x ?? C
        }), pe))
    }),
    ye = Object.assign(cn, {
        Panel: tn
    });
var dn = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "credit-card",
        theme: "outlined"
    },
    un = function(n, s) {
        return i.createElement(Oe, Z({}, n, {
            ref: s,
            icon: dn
        }))
    },
    He = i.forwardRef(un),
    mn = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                }
            }]
        },
        name: "user",
        theme: "outlined"
    },
    gn = function(n, s) {
        return i.createElement(Oe, Z({}, n, {
            ref: s,
            icon: mn
        }))
    },
    hn = i.forwardRef(gn);
const fn = H(() => {
        const {
            navigation: t
        } = i.useContext(U), n = o => t.currentTab === o, s = o => t.currentTab = o, a = !W();
        return e.jsxs(xn, {
            children: [e.jsx(Le, {}), e.jsx(le, {
                title: W() ? "General Settings" : "Account Information",
                icon: hn,
                onClick: () => s(A.accountInformation),
                selected: n(A.accountInformation)
            }), !W() && e.jsx(le, {
                title: "Game Settings",
                icon: Nt,
                onClick: () => s(A.gameSettings),
                selected: n(A.gameSettings)
            }), a && e.jsx(le, {
                title: "Plan & Billing",
                icon: He,
                selected: n(A.billing),
                onClick: () => s(A.billing)
            }), !W() && e.jsx(le, {
                title: "Help & Support",
                icon: $t,
                selected: n(A.support),
                onClick: () => s(A.support)
            }), W() ? null : e.jsxs(pn, {
                children: ["Looking to manage a group license?", e.jsx("br", {}), e.jsx("br", {}), "We moved license management to a dedicated page:", e.jsx("br", {}), e.jsx("br", {}), e.jsxs(J, {
                    to: gt,
                    style: {
                        fontWeight: y.Bold
                    },
                    children: [mt(), "/groups"]
                })]
            })]
        })
    }),
    xn = _.div.attrs({
        className: "scroll-y"
    })`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${k.BorderGray};
`,
    pn = _.div`
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.07);
  font-size: 12px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 22px;
  width: 84%;
`,
    Ee = t => {
        I({
            url: "/api/users/update-information",
            method: "post",
            data: {
                changes: t.changes
            },
            success: n => {
                t.onSuccess && t.onSuccess(n), ge({})
            },
            error: n => {
                t.onError && t.onError(n)
            }
        })
    },
    yn = () => {
        const [t, n] = i.useState(D().firstName), [s, a] = i.useState(D().lastName), o = g => n(g.target.value), l = g => a(g.target.value), r = () => {
            t && Ee({
                changes: [{
                    key: Pe.firstName,
                    value: t
                }]
            })
        }, c = () => {
            s && Ee({
                changes: [{
                    key: Pe.lastName,
                    value: s
                }]
            })
        }, m = W() && D().lastName.length < 2 ? "Last Initial" : "Last Name", d = W() && D().lastName.length < 2 ? 1 : Pt;
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ae, {
                children: [e.jsx(je, {
                    children: "First Name"
                }), e.jsx(te, {
                    onBlur: r,
                    onChange: o,
                    value: t,
                    maxLength: Bt
                })]
            }), e.jsxs(Ae, {
                children: [e.jsx(je, {
                    children: m
                }), e.jsx(te, {
                    onBlur: c,
                    onChange: l,
                    value: s,
                    maxLength: d
                })]
            })]
        })
    },
    Ae = _.div`
  margin-bottom: 8px;
`,
    je = _.div`
  font-weight: ${y.Bold};
  font-size: 18px;
`,
    vn = t => {
        const [n, s] = i.useState("newEmail"), [a, o] = i.useState(""), [l, r] = i.useState(!1), [c, m] = i.useState(!1), [d, g] = i.useState(""), [u, v] = i.useState(""), [f, p] = i.useState(null), j = b => o(b.target.value.toLowerCase()), C = a && At(a) && a !== D().email, x = () => {
            C && (r(!0), I({
                url: "/api/users/register/email-info",
                method: "post",
                data: {
                    email: a
                },
                success: b => {
                    b.accountExists ? (p(`Account already exists with email "${a}"`), r(!1)) : I({
                        url: "/api/users/requestEmailChange",
                        method: "post",
                        data: {
                            emailToChangeTo: a
                        },
                        success: $ => {
                            g($.encryptedToken), s("code")
                        },
                        error: $ => p($),
                        both: () => r(!1)
                    })
                },
                error: () => r(!1)
            }))
        }, S = b => v(b.target.value), w = !!u, h = () => {
            w && (m(!0), I({
                url: "/api/users/changeEmail",
                method: "post",
                data: {
                    changeToken: d,
                    encryptCode: u
                },
                success: () => {
                    ge({
                        onSuccess: () => t.onEmailChange(a)
                    })
                },
                error: b => p(b),
                both: () => m(!1)
            }))
        }, B = () => n === "newEmail" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.UltraBold,
                    fontSize: 31
                },
                children: "New Account Email"
            }), e.jsx(te, {
                onChange: j,
                placeholder: "please-do-not-ice-me@gimkit.com",
                size: "large",
                value: a,
                autoFocus: !0,
                onPressEnter: x,
                maxLength: 256
            }), e.jsx(q, {
                type: "primary",
                disabled: !C,
                style: {
                    width: "100%",
                    marginTop: 7
                },
                size: "large",
                onClick: x,
                loading: l,
                children: "Continue"
            })]
        }) : n === "code" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.UltraBold,
                    fontSize: 31
                },
                children: "Enter Code"
            }), e.jsxs("div", {
                style: {
                    marginBottom: 9
                },
                children: ["A code was just sent to ", e.jsx("b", {
                    children: a
                }), ". Please check that email and enter it here. The code expires in 30 minutes."]
            }), e.jsx(te, {
                onChange: S,
                placeholder: "Enter code here...",
                size: "large",
                value: u,
                autoFocus: !0,
                onPressEnter: h
            }), e.jsx(q, {
                type: "primary",
                disabled: !w,
                style: {
                    width: "100%",
                    marginTop: 7
                },
                size: "large",
                onClick: h,
                loading: c,
                children: "Submit"
            })]
        }) : null;
        return e.jsxs(Y, {
            style: {
                fontFamily: T.SFPro,
                color: k.Black
            },
            footer: null,
            open: !0,
            onCancel: t.close,
            closable: !0,
            children: [B(), e.jsx(Mt, {
                error: f,
                style: {
                    marginTop: 10
                }
            })]
        })
    },
    bn = () => {
        const [t, n] = i.useState(D().email), [s, a] = i.useState(!1), [o, l] = i.useState(!1), r = () => l(!0), c = () => l(!1), m = () => a(!s), d = u => {
            Y.success({
                title: "Email changed!",
                content: `Email changed to "${u}"`
            }), n(u), a(!1)
        }, g = D().passwordless;
        return e.jsxs(e.Fragment, {
            children: [e.jsx(je, {
                children: "Email"
            }), e.jsx(te, {
                readOnly: !0,
                value: t,
                onFocus: m
            }), e.jsxs("div", {
                style: {
                    justifyContent: "space-between"
                },
                className: "maxWidth flex",
                children: [e.jsx("div", {}), e.jsx(J, {
                    style: {
                        marginTop: 9,
                        fontSize: 14
                    },
                    onClick: r,
                    children: g ? "Add password" : "Change password"
                })]
            }), s && e.jsx(vn, {
                onEmailChange: d,
                close: m
            }), e.jsx(Tt, {
                open: o,
                close: c,
                defaultEmail: D().email
            })]
        })
    },
    jn = t => t === re.educator ? "Educator" : t === re.student ? "Student" : t === re.guardian ? "Parent/Guardian" : t === re.nonSchool ? "Other" : "",
    Cn = () => {
        const t = () => I({
                url: "/api/user/request-info",
                success: l => {
                    Y.info({
                        title: "Information",
                        content: e.jsx("div", {
                            children: Object.keys(l).map(r => e.jsxs("div", {
                                children: [e.jsx("span", {
                                    style: {
                                        fontWeight: y.Bold
                                    },
                                    children: r
                                }), ":", " ", l[r], e.jsx("br", {})]
                            }, `info-item-${r}`))
                        })
                    })
                }
            }),
            n = l => {
                I({
                    url: "/api/user/reset-account-type",
                    success: () => {
                        I({
                            url: "/logout",
                            both: () => {
                                Y.success({
                                    title: "One more thing!",
                                    content: `When you log back in, choose "${l}" as your role.`,
                                    onOk: () => {
                                        window.location.href = ft
                                    }
                                })
                            }
                        })
                    }
                })
            },
            s = () => {
                W() ? Y.confirm({
                    title: "Are you sure you want to switch to an educator account?",
                    content: "Doing so will remove you from all your current classes.",
                    okText: "Yes",
                    onOk: () => n("Educator")
                }) : Y.confirm({
                    title: "Are you sure you want to switch to a student account?",
                    content: "Many educator features are not available with student accounts.",
                    okText: "Yes",
                    onOk: () => n("Student")
                })
            },
            a = D();
        let o = [];
        return o.push(["Account Email", a.email]), o.push(["Account Type", jn(a.accountType)]), e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontSize: 22,
                    fontWeight: y.Bold
                },
                children: "Account Information"
            }), e.jsxs("div", {
                className: "flex maxWidth between",
                style: {
                    alignItems: "flex-end"
                },
                children: [e.jsx("div", {
                    style: {
                        marginTop: 10
                    },
                    children: o.map(l => e.jsxs("div", {
                        children: [e.jsxs("b", {
                            children: [l[0], ":"]
                        }), " ", l[1]]
                    }, l[0]))
                }), e.jsx("div", {
                    children: e.jsxs(J, {
                        onClick: s,
                        children: ["Switch to ", W() ? "educator" : "student", " account"]
                    })
                })]
            }), e.jsx(Q, {}), e.jsx("div", {
                children: e.jsxs(ye, {
                    children: [e.jsx(ye.Panel, {
                        header: "Support",
                        children: e.jsx(J, {
                            onClick: t,
                            children: "Information Gimkit has collected on me"
                        })
                    }, "support"), e.jsx(ye.Panel, {
                        header: "Danger Zone",
                        children: e.jsx(J, {
                            to: ht,
                            children: "Delete my account"
                        })
                    }, "danger")]
                })
            })]
        })
    },
    Sn = t => {
        const {
            visible: n,
            close: s
        } = t, [a, o] = i.useState(null), [l, r] = i.useState(!1), [c, m] = i.useState([]), d = () => {
            if (a) {
                if (String(a).length !== 5) {
                    Y.warning({
                        title: "Please enter a 5 digit zip code"
                    });
                    return
                }
                r(!0), I({
                    url: "/api/users/fetch-schools",
                    method: "post",
                    data: {
                        zipCode: a
                    },
                    success: u => {
                        u && u.schoolList && u.schoolList.length ? m(u.schoolList) : me({
                            title: "No schools found for this zip code."
                        })
                    },
                    error: u => {
                        me({
                            title: "An error occurred while searching for your school",
                            content: "Please try again later"
                        })
                    },
                    both: () => {
                        r(!1)
                    }
                })
            }
        }, g = u => {
            const v = u.target.value;
            o(v)
        };
        return e.jsxs(Dt, {
            open: n,
            onClose: s,
            placement: "left",
            width: 560,
            closable: !0,
            drawerStyle: {
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "none"
            },
            children: [e.jsx(kn, {
                children: "School search"
            }), e.jsx(xt, {
                type: "info",
                showIcon: !0,
                banner: !0,
                style: {
                    width: "100%"
                },
                message: "We currently only support schools in the US."
            }), e.jsx(Q, {}), e.jsx(te.Search, {
                placeholder: "Zip Code",
                onSearch: d,
                size: "large",
                enterButton: "Search",
                autoFocus: !0,
                style: {
                    flex: 1
                },
                maxLength: 5,
                loading: l,
                value: a,
                onChange: g
            }), e.jsx("div", {
                style: {
                    marginTop: 25
                }
            }), c && c.length ? e.jsx(e.Fragment, {
                children: c.map(u => e.jsx(Ot, {
                    name: u.schoolName,
                    description: `${u.address.city}, ${u.address.stateFull}`,
                    onSelect: () => t.selectSchool(u)
                }, u.schoolid))
            }) : e.jsx(wn, {})]
        })
    },
    wn = () => e.jsxs("div", {
        className: "flex hc vc flex-column",
        style: {
            color: k.Black,
            marginTop: 10
        },
        children: [e.jsx(Et, {
            style: {
                fontSize: 50,
                marginBottom: 5
            }
        }), e.jsx("div", {
            style: {
                fontSize: 15,
                textAlign: "center"
            },
            children: "Enter your school's zip code above!"
        })]
    }),
    kn = _.div`
  font-weight: ${y.UltraBold};
  font-size: 42px;
  color: ${k.Black};
  line-height: 1;
  margin-bottom: 10px;
`,
    In = H(() => {
        var r;
        const [t, n] = i.useState(!1), s = () => {
            n(!0)
        }, a = () => {
            Y.confirm({
                title: "Are you sure you want to unenroll from your current school?",
                cancelText: "No",
                okText: "Yes",
                onOk: () => o(null)
            })
        }, o = c => {
            I({
                url: "/api/user/update-school",
                data: {
                    schoolDiggerId: c == null ? void 0 : c.schoolid
                },
                success: () => {
                    n(!1), ge({
                        onSuccess: () => {
                            pt(Ft)
                        }
                    })
                },
                error: () => {
                    se({
                        default: {
                            title: "An error ocurred while trying to update your school",
                            content: "Please try again later or contact support"
                        }
                    })
                }
            })
        }, l = (r = D()) == null ? void 0 : r.schoolName;
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                style: {
                    fontSize: 18
                },
                children: [e.jsx("span", {
                    style: {
                        fontWeight: y.Bold
                    },
                    children: "School:"
                }), " ", l || "None"]
            }), e.jsx(Q, {
                style: {
                    margin: "12px 0px"
                }
            }), e.jsxs("div", {
                className: "maxWidth flex",
                style: {
                    justifyContent: "space-between",
                    fontSize: 14
                },
                children: [e.jsxs(J, {
                    onClick: s,
                    children: [l ? "Change" : "Add", " school"]
                }), l && e.jsx(J, {
                    onClick: a,
                    children: "Unenroll from school"
                })]
            }), e.jsx(Sn, {
                visible: t,
                close: () => n(!1),
                selectSchool: o
            })]
        })
    }),
    ce = t => e.jsx(L, {
        style: {
            fontFamily: T.SFPro,
            color: k.Black,
            marginBottom: 20
        },
        ...t
    }),
    Nn = () => e.jsxs(e.Fragment, {
        children: [e.jsxs(e.Fragment, {
            children: [e.jsx(de, {
                children: "👋 Name"
            }), e.jsx(ce, {
                children: e.jsx(yn, {})
            }), e.jsx(de, {
                children: "🔑 Authentication"
            }), e.jsx(ce, {
                children: e.jsx(bn, {})
            }), !W() && e.jsxs(e.Fragment, {
                children: [e.jsx(de, {
                    children: "🏫 School"
                }), e.jsx(ce, {
                    children: e.jsx(In, {})
                })]
            })]
        }), e.jsx(de, {
            children: W() ? "⌨️ Manage" : "🔒 Account"
        }), e.jsx(ce, {
            children: e.jsx(Cn, {})
        })]
    }),
    de = _.div`
  font-size: 30px;
  font-weight: ${y.UltraBold};
  margin-bottom: 5px;
`,
    {
        Option: $n
    } = he,
    Pn = ["$", "€", "¥", "£", "X̶", "₩"],
    Bn = () => {
        const [t, n] = i.useState(localStorage.getItem(V.currency) || "$"), s = a => {
            localStorage.setItem(V.currency, a), n(a)
        };
        return e.jsx(ae, {
            title: "Currency",
            description: "Currency to be used while playing Gimkit (non-2D modes)",
            children: e.jsx(he, {
                value: t,
                style: {
                    width: 200
                },
                onChange: s,
                children: Pn.map(a => e.jsx($n, {
                    value: a,
                    children: a
                }, a))
            })
        })
    },
    {
        Option: En
    } = he,
    An = Gt(),
    Tn = () => {
        const [t, n] = i.useState(Lt(localStorage.getItem(V.language)) || "English"), s = a => {
            const o = Wt(a);
            localStorage.setItem(V.language, o), n(a)
        };
        return e.jsx(ae, {
            title: "Language",
            description: "Language used for upgrade names and other text while playing Gimkit (non-2D modes)",
            children: e.jsx(he, {
                value: t,
                style: {
                    width: 200
                },
                onChange: s,
                children: An.map(a => e.jsx(En, {
                    value: a,
                    children: a
                }, a))
            })
        })
    },
    Mn = () => {
        const [t, n] = i.useState(!!localStorage.getItem(V.allowGoogleTranslate)), s = a => {
            a ? localStorage.setItem(V.allowGoogleTranslate, "allow") : localStorage.removeItem(V.allowGoogleTranslate), n(a)
        };
        return e.jsx(ae, {
            title: "Allow Google Translate",
            description: "Allow Google Chrome to translate text inside of live games?",
            children: e.jsx(Se, {
                onClick: s,
                checked: t
            })
        })
    },
    zn = () => {
        const [t, n] = i.useState(!!localStorage.getItem(V.cosmosBlockedInGame)), s = a => {
            a ? localStorage.setItem(V.cosmosBlockedInGame, "true") : localStorage.removeItem(V.cosmosBlockedInGame), n(a)
        };
        return e.jsx(ae, {
            title: "Disable Cosmetics",
            description: "Gims, trails, and stickers are disabled in-game. All players appear as default Gims.",
            children: e.jsx(Se, {
                onClick: s,
                checked: t
            })
        })
    },
    Rn = () => {
        const [t, n] = i.useState(!0), [s, a] = i.useState(!1), [o, l] = i.useState(""), r = () => {
            $e({
                url: "/api/user/display-name",
                success: d => {
                    l(d.name)
                },
                both: () => n(!1)
            })
        }, c = d => {
            l(d.target.value)
        }, m = () => {
            if (s) return;
            let d = o;
            if (d && (d = d.trim(), d.length < 2)) {
                se({
                    default: {
                        title: "Display name must be at least 2 characters long"
                    }
                });
                return
            }
            a(!0), $e({
                url: "/api/user/display-name",
                data: {
                    name: d
                },
                success: g => {
                    Ge.success("Display name updated!"), l(g.name)
                },
                error: g => {
                    se({
                        e: g,
                        default: {
                            title: "Error updating display name"
                        }
                    })
                },
                both: () => a(!1)
            })
        };
        return yt(r), e.jsx(ae, {
            title: "Display Name",
            description: "The name you appear as in-game when hosting a game. Leave empty to use your account name.",
            children: e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx(te, {
                    disabled: t,
                    value: o,
                    maxLength: 20,
                    style: {
                        width: 200,
                        marginRight: 10
                    },
                    placeholder: "Ms. Gimkit",
                    onPressEnter: m,
                    onChange: c
                }), e.jsx(q, {
                    loading: s,
                    onClick: m,
                    type: "primary",
                    children: "Save"
                })]
            })
        })
    },
    Fn = ["user-preferences"],
    On = () => _t({
        queryKey: [Fn],
        retry: !1,
        queryFn: () => vt({
            url: "/api/user/preferences"
        })
    }),
    Te = "six-seven-mode",
    Dn = () => {
        const [t, n] = i.useState(!1), {
            data: s
        } = On();
        i.useEffect(() => {
            n((s == null ? void 0 : s[Te]) === !0)
        }, [s]);
        const a = o => {
            n(o), I({
                url: "/api/user/preferences",
                data: {
                    key: Te,
                    value: o
                }
            })
        };
        return s ? e.jsx(ae, {
            title: e.jsxs("div", {
                className: "flex vc",
                children: ["67 Mode", " ", e.jsx(We, {
                    color: "green",
                    style: {
                        marginLeft: 5
                    },
                    children: "Limited Time"
                })]
            }),
            description: `To be honest, we don't even know what this means. But the kids seem to like it. Ensures your game codes start with "67".`,
            children: e.jsx(Se, {
                onClick: a,
                checked: t
            })
        }) : null
    },
    ae = t => e.jsx(L, {
        style: {
            fontFamily: T.SFPro,
            color: k.Black
        },
        children: e.jsxs("div", {
            className: "maxWidth flex vc between",
            children: [e.jsxs("div", {
                style: {
                    marginRight: 40
                },
                children: [e.jsx(Gn, {
                    children: t.title
                }), e.jsx(Wn, {
                    children: t.description
                })]
            }), e.jsx("div", {
                children: t.children
            })]
        })
    }),
    Ln = () => e.jsx(e.Fragment, {
        children: e.jsxs(Ut, {
            direction: "vertical",
            size: 10,
            className: "maxWidth",
            children: [e.jsx(Dn, {}), e.jsx(zn, {}), e.jsx(Rn, {}), e.jsx(Bn, {}), e.jsx(Tn, {}), e.jsx(Mn, {})]
        })
    }),
    Gn = _.div`
  font-weight: ${y.UltraBold};
  font-size: 18px;
`,
    Wn = _.div`
  font-size: 14px;
`,
    _n = H(() => {
        const {
            billing: t
        } = i.useContext(U);
        return e.jsx(L, {
            style: {
                fontFamily: T.SFPro,
                color: k.Black
            },
            children: e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx("div", {
                    children: e.jsx("img", {
                        src: `/client/img/settings/${Ce()?"launch":"sprout"}.svg`,
                        style: {
                            height: 87
                        }
                    })
                }), e.jsxs("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [e.jsx("div", {
                        style: {
                            fontWeight: y.UltraBold,
                            fontSize: 28
                        },
                        children: t.planName
                    }), e.jsx("div", {
                        style: {
                            marginTop: -8
                        },
                        children: t.downgradeMessage || t.planDescription
                    })]
                })]
            })
        })
    }),
    Un = t => {
        const n = !!t.amountRefunded,
            s = n && t.amountRefunded === t.amount;
        return e.jsx("a", {
            href: t.link,
            target: "_blank",
            children: e.jsx(L, {
                style: {
                    color: k.Black,
                    fontFamily: T.SFPro,
                    marginBottom: 5
                },
                hoverable: !0,
                children: e.jsxs("div", {
                    className: "flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [e.jsxs("div", {
                        children: [e.jsx("div", {
                            style: {
                                fontSize: 11,
                                marginBottom: -5,
                                opacity: .7
                            },
                            children: t.date
                        }), e.jsx("div", {
                            style: {
                                fontSize: 14
                            },
                            children: fe(t.amount)
                        })]
                    }), e.jsx("div", {
                        children: n && e.jsx(We, {
                            color: "green",
                            children: s ? "Refunded" : "Partially Refunded"
                        })
                    })]
                })
            })
        })
    },
    Hn = H(() => {
        const {
            billing: t
        } = i.useContext(U);
        return t.charges.length ? e.jsxs(L, {
            style: {
                color: k.Black,
                fontFamily: T.SFPro,
                marginTop: 10
            },
            children: [e.jsx("div", {
                style: {
                    fontSize: 22,
                    fontWeight: y.UltraBold,
                    marginBottom: -7
                },
                children: "Receipts"
            }), e.jsx("div", {
                style: {
                    marginBottom: 7
                },
                children: "Click a charge to open the receipt"
            }), t.charges.map(n => e.jsx(Un, {
                date: bt.unix(n.unixDate).format("MMMM Do, YYYY"),
                amount: n.amount,
                link: n.receiptUrl,
                amountRefunded: n.amountRefunded
            }, n.id))]
        }) : null
    }),
    Kn = H(() => {
        const {
            billing: t
        } = i.useContext(U);
        return !t.hasNextCharge || t.planName.toLowerCase().includes("basic") ? null : e.jsxs(L, {
            style: {
                marginTop: 10,
                color: k.Black
            },
            children: [e.jsx("div", {
                style: {
                    fontSize: 14,
                    marginBottom: -5
                },
                children: "Next Charge"
            }), e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx("div", {
                    style: {
                        fontSize: 27,
                        fontWeight: y.UltraBold
                    },
                    children: t.nextChargeAmount
                }), e.jsxs("div", {
                    style: {
                        opacity: .8,
                        fontSize: 12,
                        marginLeft: 7
                    },
                    children: ["on ", t.nextChargeDate]
                })]
            })]
        })
    }),
    Yn = H(() => {
        const {
            billing: t
        } = i.useContext(U);
        return t.accountBalance ? e.jsxs(L, {
            style: {
                color: k.Black,
                fontFamily: T.SFPro,
                marginTop: 10
            },
            children: [e.jsx("div", {
                style: {
                    fontSize: 12
                },
                children: "Account Credit"
            }), e.jsx("div", {
                style: {
                    fontSize: 19,
                    marginTop: -5,
                    fontWeight: y.UltraBold
                },
                children: fe(t.accountBalance)
            })]
        }) : null
    }),
    Ke = () => {
        I({
            url: "/api/billing/payment-source",
            success: t => {
                P.billing.cardName = t.source.cardType, P.billing.last4DigitsOfCard = t.source.last4Digits, I({
                    url: "/api/billing/stripe-key",
                    success: n => P.billing.stripePublicKey = n.key
                })
            }
        })
    },
    qn = H(() => {
        const [t, n] = i.useState(!1), {
            billing: {
                last4DigitsOfCard: s,
                stripePublicKey: a,
                cardName: o
            }
        } = i.useContext(U);
        if (i.useEffect(() => {
                const r = De("session_id");
                r && (n(!0), jt({
                    sessionId: r,
                    onSuccess: () => {
                        Ke(), Ge.success("Credit card updated successfully")
                    },
                    onError: () => me({
                        title: "Error updating credit card",
                        content: "Please try again or contact support"
                    }),
                    onBoth: () => {
                        n(!1)
                    },
                    invokeImmediately: !0
                }))
            }, []), !s || !o) return null;
        const l = async () => {
            n(!0);
            let r;
            try {
                r = await Ht(a)
            } catch (c) {
                n(!1), se({
                    e: c,
                    default: {
                        title: "Our payment processor is currently down",
                        content: "Please try again later"
                    }
                })
            }
            r && I({
                url: "/api/billing/create-billing-info-session",
                method: "POST",
                success: async c => {
                    const m = c;
                    let d;
                    try {
                        if (d = await r.redirectToCheckout({
                                sessionId: m.id
                            }), d && d.error) throw d.error
                    } catch (g) {
                        se({
                            e: g,
                            default: {
                                title: "Error",
                                content: "An error ocurred. Please try again later"
                            }
                        })
                    }
                },
                error: c => {
                    n(!1), se({
                        e: c,
                        default: {
                            title: "Connection Error",
                            content: "An error ocurred while connecting to our payments provider. Please try again later"
                        }
                    })
                }
            })
        };
        return e.jsxs(L, {
            style: {
                color: k.Black,
                fontFamily: T.SFPro,
                marginTop: 10
            },
            children: [e.jsx("div", {
                style: {
                    fontSize: 17,
                    fontWeight: y.UltraBold,
                    marginBottom: 1
                },
                children: "Payment Method"
            }), e.jsx(L, {
                children: e.jsxs("div", {
                    className: "flex vc",
                    style: {
                        color: k.Black,
                        fontFamily: T.SFPro
                    },
                    children: [e.jsx(He, {
                        style: {
                            fontSize: 24,
                            marginRight: 10
                        }
                    }), e.jsxs("div", {
                        children: [e.jsx("span", {
                            style: {
                                fontWeight: y.UltraBold
                            },
                            children: o.toUpperCase()
                        }), " ", "ending in", " ", e.jsx("span", {
                            style: {
                                fontWeight: y.UltraBold
                            },
                            children: s
                        })]
                    })]
                })
            }), e.jsxs("div", {
                style: {
                    marginTop: 5,
                    justifyContent: "space-between"
                },
                className: "flex maxWidth",
                children: [e.jsx("div", {}), a && e.jsx(q, {
                    type: "primary",
                    size: "large",
                    onClick: l,
                    loading: t,
                    children: "Change Credit Card"
                })]
            })]
        })
    }),
    Vn = () => {
        I({
            url: "/api/billing/upcoming-invoice",
            success: t => {
                P.billing.nextChargeAmount = fe(t.amount), P.billing.nextChargeDate = t.date, P.billing.hasNextCharge = !0
            }
        })
    },
    Xn = () => {
        I({
            url: "/api/billing/downgrade-details",
            success: t => {
                P.billing.canDowngrade = t.canDowngrade, t.message && (P.billing.downgradeMessage = t.message), t.subscriptionEndDateText && (P.billing.downgradeDateMessage = t.subscriptionEndDateText)
            }
        })
    },
    Zn = t => {
        if (t.info.plan === "basic") return "Free Forever!";
        if (t.info.info) {
            const n = t.info.info;
            if (n.providedByMessage) return n.providedByMessage;
            if (n.cost && n.timePeriod) return `${fe(n.cost)} per ${n.timePeriod}`;
            if (n.bulkName) return `Paid by ${n.bulkName}.`
        }
        return ""
    },
    Qn = () => {
        Ce() && Xn(), I({
            url: "/api/billing/plan-info",
            success: t => {
                const {
                    info: n
                } = t;
                P.billing.planName = ue(n.plan), P.billing.planDescription = Zn(t), n.info && n.info.timePeriod && (P.billing.billingInterval = n.info.timePeriod), n.source === "stripe" && Vn()
            }
        })
    },
    Jn = () => {
        I({
            url: "/api/billing/charges",
            success: t => P.billing.charges.replace(t.charges)
        })
    },
    es = () => {
        I({
            url: "/api/billing/account-balance",
            success: t => {
                P.billing.accountBalance = t.balance
            }
        })
    },
    Ye = () => {
        ge({
            onSuccess: () => {
                Qn(), Jn(), es(), Ke()
            }
        })
    },
    ts = H(t => {
        const {
            billing: n
        } = i.useContext(U), [s, a] = i.useState("firstAsk"), [o, l] = i.useState(""), [r, c] = i.useState(""), [m, d] = i.useState(!1), g = !m, u = x => l(x.target.value), v = x => c(x.target.value), f = () => {
            g && (d(!0), I({
                url: "/api/billing/downgrade",
                data: {
                    reasonId: o,
                    otherReason: r
                },
                success: () => {
                    Y.success({
                        title: `You've canceled your ${ue(D().type)} subscription${n.downgradeDateMessage&&" to end on "+n.downgradeDateMessage}.`
                    }), n.reset(), Ye(), t.close()
                },
                error: () => me({
                    title: "Error canceling subscription",
                    content: "Please contact support"
                }),
                both: () => d(!1)
            }))
        }, p = () => a("reason"), j = () => a("groupOrder"), C = () => s === "firstAsk" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    textAlign: "center",
                    fontWeight: y.Bold,
                    fontSize: 25
                },
                children: "Are you canceling because you're joining a group license?"
            }), e.jsx(Q, {}), e.jsx(q, {
                style: {
                    marginBottom: 5
                },
                onClick: j,
                block: !0,
                size: "large",
                children: "Yes"
            }), e.jsx(q, {
                block: !0,
                size: "large",
                onClick: p,
                children: "No"
            })]
        }) : s === "groupOrder" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.Bold,
                    fontSize: 27,
                    lineHeight: "30px"
                },
                children: "To get a refund, don't cancel your subscription just yet!"
            }), e.jsx(Q, {}), e.jsxs("div", {
                style: {
                    fontSize: 15
                },
                children: ["If you're joining a group license, ask your group manager for the", " ", e.jsx("b", {
                    children: "invite link."
                }), " ", e.jsx("br", {}), " ", e.jsx("br", {}), "When you open the invite link, your current subscription will automatically be canceled, and you will receive a refund for your unused time on ", ue(D().type), ". ", e.jsx("br", {}), " ", e.jsx("br", {}), " If you cancel now, you will not be refunded for your unused time."]
            }), e.jsx(Q, {}), e.jsx(q, {
                block: !0,
                type: "primary",
                size: "large",
                onClick: t.close,
                children: "Got It!"
            }), e.jsx("div", {
                className: "maxWidth",
                style: {
                    textAlign: "center",
                    marginTop: 10
                },
                children: e.jsx("a", {
                    onClick: p,
                    children: "Cancel subscription anyway"
                })
            })]
        }) : s === "reason" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.UltraBold,
                    fontSize: 32
                },
                children: "Cancel Subscription"
            }), e.jsxs("div", {
                style: {
                    fontSize: 15,
                    marginTop: 10
                },
                children: ["Your ", e.jsx("b", {
                    children: ue(D().type)
                }), " subscription will end on", " ", e.jsx("b", {
                    children: n.downgradeDateMessage
                }), ". ", e.jsx("br", {}), " ", e.jsx("br", {}), " You won’t be charged again. You’ll keep everything you’ve created and you can restart your subscription anytime after your subscription ends.", " ", e.jsx("br", {}), " ", e.jsx("br", {}), " If you have a moment, let us know what made you cancel by selecting an option below. Thanks so much!"]
            }), e.jsx(Be.Group, {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20
                },
                onChange: u,
                value: o,
                children: ns.map(x => e.jsx(Be, {
                    value: x.id,
                    style: {
                        fontSize: 15,
                        color: k.Black,
                        marginBottom: 4
                    },
                    children: x.text
                }, x.id))
            }), o === "other" ? e.jsx(te, {
                placeholder: "Reason...",
                autoFocus: !0,
                style: {
                    marginTop: 10
                },
                value: r,
                onChange: v
            }) : null, e.jsx(q, {
                block: !0,
                style: {
                    marginTop: 25
                },
                type: "primary",
                danger: !0,
                onClick: f,
                loading: m,
                disabled: !g,
                children: "Cancel Subscription"
            })]
        }) : null;
        return e.jsx(Y, {
            open: t.visible,
            onCancel: t.close,
            style: {
                fontFamily: T.SFPro,
                color: k.Black
            },
            footer: null,
            closable: !1,
            children: C()
        })
    }),
    ns = [{
        id: "break",
        text: "Summer break/taking a break"
    }, ...Ct.shuffle([{
        id: "didNotUse",
        text: "Didn’t use it much"
    }, {
        id: "anotherService",
        text: "Using another service"
    }, {
        id: "unhappy",
        text: "Unhappy with the product"
    }, {
        id: "couldNotGetItToWork",
        text: "Couldn't get it to work"
    }, {
        id: "cost",
        text: "Too expensive"
    }, {
        id: "schoolNoPay",
        text: "My school won’t pay for it"
    }, {
        id: "noAutoRenew",
        text: "Don't want subscription to autorenew"
    }, {
        id: "leaving",
        text: "Leaving the classroom"
    }, {
        id: "retiring",
        text: "Retiring"
    }]), {
        id: "other",
        text: "Other"
    }],
    ss = H(() => {
        const {
            billing: t
        } = i.useContext(U), [n, s] = i.useState(!1), a = () => s(!n);
        if (!t.canDowngrade) {
            if (t.downgradeMessage && t.downgradeMessage.includes("set to end")) {
                const o = t.downgradeMessage.split("end on ")[1];
                return o ? e.jsxs(L, {
                    style: {
                        fontFamily: T.SFPro,
                        color: k.Black,
                        marginTop: 10
                    },
                    children: [e.jsx("b", {
                        children: "You've already canceled your subscription."
                    }), " You won't be charged again and will keep Pro access until ", o]
                }) : null
            }
            return null
        }
        return e.jsxs(e.Fragment, {
            children: [e.jsx(L, {
                style: {
                    fontFamily: T.SFPro,
                    color: k.Black,
                    marginTop: 10
                },
                children: e.jsxs("div", {
                    className: "flex maxWidth",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [e.jsx("div", {}), t.canDowngrade && e.jsx(q, {
                        onClick: a,
                        type: "primary",
                        danger: !0,
                        children: "Cancel Subscription"
                    })]
                })
            }), e.jsx(ts, {
                visible: n,
                close: a
            })]
        })
    }),
    as = t => e.jsx(L, {
        style: {
            fontFamily: T.SFPro,
            color: k.White,
            marginTop: 10,
            overflow: "hidden"
        },
        ...t
    }),
    os = H(() => {
        const {
            billing: t
        } = i.useContext(U);
        return Ce() ? !t.billingInterval || t.billingInterval === "year" ? null : e.jsx(as, {
            bodyStyle: {
                backgroundImage: "linear-gradient(to left, #434343 0%, #1c1c1c 100%)",
                padding: 40
            },
            children: e.jsxs("div", {
                className: "flex-column flex-center",
                style: {
                    textAlign: "center"
                },
                children: [e.jsx("div", {
                    style: {
                        fontSize: 22,
                        fontWeight: y.Bold,
                        textAlign: "center"
                    },
                    children: "Switch to annual billing and save 65%!"
                }), e.jsxs("div", {
                    style: {
                        fontSize: 14,
                        color: "rgba(255,255,255,0.9)",
                        marginTop: 2
                    },
                    children: ["If you use ", St, " more than 3 months a year, you'll save money by switching to annual billing!"]
                }), e.jsx("div", {
                    style: {
                        marginTop: 20
                    },
                    children: e.jsx(J, {
                        to: wt,
                        children: e.jsx(q, {
                            size: "large",
                            icon: e.jsx(Kt, {}),
                            type: "primary",
                            children: "Switch To Annual Billing"
                        })
                    })
                })]
            })
        }) : null
    }),
    is = () => (i.useEffect(() => {
        Ye()
    }, []), e.jsxs(e.Fragment, {
        children: [e.jsx(_n, {}), e.jsx(Kn, {}), e.jsx(os, {}), e.jsx(Hn, {}), e.jsx(qn, {}), e.jsx(Yn, {}), e.jsx(ss, {})]
    })),
    ve = t => e.jsx("div", {
        style: {
            backgroundImage: `url(${t.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            height: 70,
            width: 70,
            margin: 10,
            borderStyle: "solid",
            borderColor: "#607d8b"
        }
    }),
    be = t => e.jsxs("div", {
        className: "flex wrap vc",
        children: [e.jsx("div", {
            children: e.jsx("img", {
                src: t.image,
                style: {
                    height: 99,
                    marginRight: 22
                }
            })
        }), e.jsx("div", {
            style: {
                flex: 1
            },
            children: t.content
        })]
    }),
    rs = () => {
        const t = () => {
            window.open("https://help.gimkit.com")
        };
        return e.jsx(ls, {
            className: "flex hc",
            children: e.jsxs("div", {
                style: {
                    color: k.Black,
                    fontFamily: T.SFPro,
                    maxWidth: 700,
                    width: "100%"
                },
                className: "flex flex-column wrap",
                children: [e.jsxs("div", {
                    className: "flex hc vc flex-column",
                    children: [e.jsxs("div", {
                        className: "flex wrap",
                        children: [e.jsx(ve, {
                            src: "/client/img/settings/pharlain.jpg"
                        }), e.jsx(ve, {
                            src: "/client/img/settings/jeff.jpg"
                        }), e.jsx(ve, {
                            src: "/client/img/settings/rebecca.png"
                        })]
                    }), e.jsx("div", {
                        style: {
                            fontWeight: y.UltraBold,
                            fontSize: 40,
                            marginTop: -6,
                            marginBottom: -2
                        },
                        children: "Friendly folks, here to help."
                    }), e.jsxs("div", {
                        style: {
                            fontSize: 19,
                            textAlign: "center"
                        },
                        children: ["No robots, ", e.jsx("b", {
                            children: "just real humans!"
                        }), " Need something? We'll get back to you within ", e.jsx("b", {
                            children: "2 business days."
                        })]
                    })]
                }), e.jsx(Q, {}), e.jsx(be, {
                    image: "/client/img/settings/question.svg",
                    content: e.jsxs("div", {
                        children: [e.jsxs("div", {
                            style: {
                                fontWeight: y.UltraBold,
                                fontSize: 28
                            },
                            children: ["Check our", " ", e.jsx("a", {
                                onClick: t,
                                href: "#",
                                children: "helpdesk"
                            })]
                        }), e.jsxs("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Your question might have already been answered!", " ", e.jsx("a", {
                                href: "#",
                                onClick: t,
                                children: "Click here"
                            }), " ", "to search our helpdesk for an answer!"]
                        })]
                    })
                }), e.jsx(Q, {
                    style: {
                        marginTop: 30,
                        marginBottom: 30
                    },
                    children: e.jsx("span", {
                        style: {
                            fontSize: 20
                        },
                        children: "If you couldn't find your answer..."
                    })
                }), e.jsx(be, {
                    image: "/client/img/settings/email.svg",
                    content: e.jsxs("div", {
                        children: [e.jsxs("div", {
                            style: {
                                fontWeight: y.UltraBold,
                                fontSize: 28
                            },
                            children: ["Send us", " ", e.jsx("a", {
                                target: "_blank",
                                href: "mailto:hello@gimkit.com",
                                children: "an email"
                            })]
                        }), e.jsxs("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Email us at", " ", e.jsx("a", {
                                target: "_blank",
                                href: "mailto:hello@gimkit.com",
                                children: "hello@gimkit.com"
                            }), " ", "and we'll get back to you soon!"]
                        })]
                    })
                }), e.jsx(Me, {}), e.jsx(be, {
                    image: "/client/img/settings/heart.svg",
                    content: e.jsxs("div", {
                        children: [e.jsxs("div", {
                            style: {
                                fontWeight: y.UltraBold,
                                fontSize: 28
                            },
                            children: ["Suggest a", " ", e.jsx("a", {
                                target: "_blank",
                                href: "https://gimkit.nolt.io/",
                                children: "new feature"
                            })]
                        }), e.jsxs("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Have something you want to see in Gimkit?", " ", e.jsx("a", {
                                href: "https://gimkit.nolt.io/",
                                target: "_blank",
                                children: "Click here"
                            }), " ", "to visit our feedback center and suggest a new feature."]
                        })]
                    })
                }), e.jsx(Me, {})]
            })
        })
    },
    Me = () => e.jsx("div", {
        style: {
            height: 35
        }
    }),
    ls = _.div``,
    cs = H(() => {
        const {
            navigation: t
        } = i.useContext(U), n = () => {
            const {
                currentTab: s
            } = t;
            return s === A.accountInformation ? e.jsx(Nn, {}) : s === A.gameSettings ? e.jsx(Ln, {}) : s === A.billing ? e.jsx(is, {}) : s === A.support ? e.jsx(rs, {}) : null
        };
        return e.jsxs(ds, {
            children: [e.jsx(Le, {}), n()]
        })
    }),
    ds = _.div.attrs({
        className: "scroll"
    })`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${T.SFPro};
  color: ${k.Black};
`,
    ua = () => (i.useEffect(() => {
        const t = De("tab");
        t && t === A.billing ? P.navigation.currentTab = A.billing : t && t === A.gameSettings && (P.navigation.currentTab = A.gameSettings)
    }, []), e.jsxs(e.Fragment, {
        children: [e.jsx(U.Provider, {
            value: P,
            children: e.jsxs(Yt, {
                className: "flex-column",
                children: [e.jsx(It, {}), e.jsxs(us, {
                    children: [e.jsx(fn, {}), e.jsx(cs, {})]
                })]
            })
        }), e.jsx(kt, {
            title: "Settings"
        })]
    })),
    us = _.div.attrs({
        className: "flex"
    })`
  flex: 1;
  overflow: hidden;
`;
export {
    ua as
    default
};