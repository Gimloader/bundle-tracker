import {
    x as I,
    az as ze,
    am as Q,
    aA as V,
    aB as Re,
    aC as ke,
    _ as X,
    aD as Xe,
    aE as Ze,
    aF as Fe,
    aG as Qe,
    aH as Je,
    aI as et,
    aJ as tt,
    aK as nt,
    r as i,
    al as at,
    ai as st,
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
    i as q,
    j as e,
    aa as mt,
    F as y,
    aT as gt,
    e as k,
    d as W,
    a as $,
    W as ge,
    l as D,
    M as ee,
    U as T,
    B as K,
    D as Z,
    aU as ht,
    ab as re,
    a4 as ft,
    h as me,
    t as ae,
    aV as xt,
    c as L,
    s as pt,
    aW as $e,
    y as yt,
    f as Ce,
    b as vt,
    V as De,
    ac as bt,
    ar as jt,
    C as Ct,
    Z as St,
    T as wt
} from "./_index.js";
import {
    b as _,
    a as Le,
    T as A,
    s as P,
    G as ue,
    S as kt
} from "./App-4.js";
import {
    o as U
} from "./mobxreact.esm.js";
import {
    A as te
} from "./AccessibleAnchor.js";
import {
    M as le
} from "./MenuItem.js";
import {
    R as It
} from "./PlayCircleOutlined.js";
import {
    R as Nt
} from "./QuestionCircleOutlined.js";
import {
    i as Pe
} from "./ContinueButton.js";
import {
    M as $t,
    a as Pt
} from "./NameAndPasswordStage.js";
import {
    I as J,
    R as Bt
} from "./index-3.js";
import {
    v as Et,
    F as At
} from "./EmailStage.js";
import {
    E as Tt
} from "./ErrorMessage.js";
import {
    g as Mt,
    R as zt
} from "./index-10.js";
import {
    LIBRARY_CACHE_KEY as Rt
} from "./SchoolLibrary.js";
import {
    S as Ft
} from "./School.js";
import {
    D as Ot
} from "./index-6.js";
import {
    L as Y
} from "./AppTypes.js";
import {
    S as he
} from "./index-8.js";
import {
    g as Dt,
    a as Lt,
    b as Gt
} from "./Language.js";
import {
    S as Se
} from "./index-9.js";
import {
    s as Ge
} from "./index-4.js";
import {
    u as Wt
} from "./useQuery.js";
import {
    T as We
} from "./index-12.js";
import {
    S as _t
} from "./index-2.js";
import {
    c as fe
} from "./Money.js";
import {
    l as Ut
} from "./stripe.esm.js";
import {
    R as Be
} from "./index-13.js";
import {
    R as Ht
} from "./StarOutlined.js";
import {
    F as Kt
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
var _e = I.forwardRef(function(t, n) {
    var a = t.prefixCls,
        s = t.forceRender,
        o = t.className,
        u = t.style,
        r = t.children,
        l = t.isActive,
        m = t.role,
        c = t.classNames,
        g = t.styles,
        d = I.useState(l || s),
        v = ze(d, 2),
        f = v[0],
        p = v[1];
    return I.useEffect(function() {
        (s || l) && p(!0)
    }, [s, l]), f ? I.createElement("div", {
        ref: n,
        className: Q("".concat(a, "-content"), V(V({}, "".concat(a, "-content-active"), l), "".concat(a, "-content-inactive"), !l), o),
        style: u,
        role: m
    }, I.createElement("div", {
        className: Q("".concat(a, "-content-box"), c == null ? void 0 : c.body),
        style: g == null ? void 0 : g.body
    }, r)) : null
});
_e.displayName = "PanelContent";
var Yt = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"],
    Ue = I.forwardRef(function(t, n) {
        var a = t.showArrow,
            s = a === void 0 ? !0 : a,
            o = t.headerClass,
            u = t.isActive,
            r = t.onItemClick,
            l = t.forceRender,
            m = t.className,
            c = t.classNames,
            g = c === void 0 ? {} : c,
            d = t.styles,
            v = d === void 0 ? {} : d,
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
            N = Re(t, Yt),
            E = p === "disabled",
            M = x != null && typeof x != "boolean",
            z = V(V(V({
                onClick: function() {
                    r == null || r(C)
                },
                onKeyDown: function(O) {
                    (O.key === "Enter" || O.keyCode === ke.ENTER || O.which === ke.ENTER) && (r == null || r(C))
                },
                role: j ? "tab" : "button"
            }, "aria-expanded", u), "aria-disabled", E), "tabIndex", E ? -1 : 0),
            H = typeof w == "function" ? w(t) : I.createElement("i", {
                className: "arrow"
            }),
            oe = H && I.createElement("div", X({
                className: "".concat(f, "-expand-icon")
            }, ["header", "icon"].includes(p) ? z : {}), H),
            xe = Q("".concat(f, "-item"), V(V({}, "".concat(f, "-item-active"), u), "".concat(f, "-item-disabled"), E), m),
            pe = Q(o, "".concat(f, "-header"), V({}, "".concat(f, "-collapsible-").concat(p), !!p), g.header),
            R = Xe({
                className: pe,
                style: v.header
            }, ["header", "icon"].includes(p) ? {} : z);
        return I.createElement("div", X({}, N, {
            ref: n,
            className: xe
        }), I.createElement("div", R, s && oe, I.createElement("span", X({
            className: "".concat(f, "-header-text")
        }, p === "header" ? z : {}), S), M && I.createElement("div", {
            className: "".concat(f, "-extra")
        }, x)), I.createElement(Ze, X({
            visible: u,
            leavedClassName: "".concat(f, "-content-hidden")
        }, h, {
            forceRender: l,
            removeOnLeave: B
        }), function(F, O) {
            var ie = F.className,
                ne = F.style;
            return I.createElement(_e, {
                ref: O,
                prefixCls: f,
                className: ie,
                classNames: g,
                style: ne,
                styles: v,
                isActive: u,
                forceRender: l,
                role: j ? "tabpanel" : void 0
            }, b)
        }))
    }),
    qt = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"],
    Vt = function(n, a) {
        var s = a.prefixCls,
            o = a.accordion,
            u = a.collapsible,
            r = a.destroyInactivePanel,
            l = a.onItemClick,
            m = a.activeKey,
            c = a.openMotion,
            g = a.expandIcon;
        return n.map(function(d, v) {
            var f = d.children,
                p = d.label,
                j = d.key,
                C = d.collapsible,
                x = d.onItemClick,
                S = d.destroyInactivePanel,
                w = Re(d, qt),
                h = String(j ?? v),
                B = C ?? u,
                b = S ?? r,
                N = function(z) {
                    B !== "disabled" && (l(z), x == null || x(z))
                },
                E = !1;
            return o ? E = m[0] === h : E = m.indexOf(h) > -1, I.createElement(Ue, X({}, w, {
                prefixCls: s,
                key: h,
                panelKey: h,
                isActive: E,
                accordion: o,
                openMotion: c,
                expandIcon: g,
                header: p,
                collapsible: B,
                onItemClick: N,
                destroyInactivePanel: b
            }), f)
        })
    },
    Xt = function(n, a, s) {
        if (!n) return null;
        var o = s.prefixCls,
            u = s.accordion,
            r = s.collapsible,
            l = s.destroyInactivePanel,
            m = s.onItemClick,
            c = s.activeKey,
            g = s.openMotion,
            d = s.expandIcon,
            v = n.key || String(a),
            f = n.props,
            p = f.header,
            j = f.headerClass,
            C = f.destroyInactivePanel,
            x = f.collapsible,
            S = f.onItemClick,
            w = !1;
        u ? w = c[0] === v : w = c.indexOf(v) > -1;
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
                destroyInactivePanel: C ?? l,
                openMotion: g,
                accordion: u,
                children: n.props.children,
                onItemClick: B,
                expandIcon: d,
                collapsible: h
            };
        return typeof n.type == "string" ? n : (Object.keys(b).forEach(function(N) {
            typeof b[N] > "u" && delete b[N]
        }), I.cloneElement(n, b))
    };

function Zt(t, n, a) {
    return Array.isArray(t) ? Vt(t, a) : Fe(n).map(function(s, o) {
        return Xt(s, o, a)
    })
}

function Qt(t) {
    var n = t;
    if (!Array.isArray(n)) {
        var a = tt(n);
        n = a === "number" || a === "string" ? [n] : []
    }
    return n.map(function(s) {
        return String(s)
    })
}
var Jt = I.forwardRef(function(t, n) {
    var a = t.prefixCls,
        s = a === void 0 ? "rc-collapse" : a,
        o = t.destroyInactivePanel,
        u = o === void 0 ? !1 : o,
        r = t.style,
        l = t.accordion,
        m = t.className,
        c = t.children,
        g = t.collapsible,
        d = t.openMotion,
        v = t.expandIcon,
        f = t.activeKey,
        p = t.defaultActiveKey,
        j = t.onChange,
        C = t.items,
        x = Q(s, m),
        S = Qe([], {
            value: f,
            onChange: function(M) {
                return j == null ? void 0 : j(M)
            },
            defaultValue: p,
            postState: Qt
        }),
        w = ze(S, 2),
        h = w[0],
        B = w[1],
        b = function(M) {
            return B(function() {
                if (l) return h[0] === M ? [] : [M];
                var z = h.indexOf(M),
                    H = z > -1;
                return H ? h.filter(function(oe) {
                    return oe !== M
                }) : [].concat(nt(h), [M])
            })
        };
    Je(!c, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
    var N = Zt(C, c, {
        prefixCls: s,
        accordion: l,
        openMotion: d,
        expandIcon: v,
        collapsible: g,
        destroyInactivePanel: u,
        onItemClick: b,
        activeKey: h
    });
    return I.createElement("div", X({
        ref: n,
        className: x,
        style: r,
        role: l ? "tablist" : void 0
    }, et(t, {
        aria: !0,
        data: !0
    })), N)
});
const we = Object.assign(Jt, {
    Panel: Ue
});
we.Panel;
const en = i.forwardRef((t, n) => {
        const {
            getPrefixCls: a
        } = i.useContext(at), {
            prefixCls: s,
            className: o,
            showArrow: u = !0
        } = t, r = a("collapse", s), l = Q({
            [`${r}-no-arrow`]: !u
        }, o);
        return i.createElement(we.Panel, Object.assign({
            ref: n
        }, t, {
            prefixCls: r,
            className: l
        }))
    }),
    tn = t => {
        const {
            componentCls: n,
            contentBg: a,
            padding: s,
            headerBg: o,
            headerPadding: u,
            collapseHeaderPaddingSM: r,
            collapseHeaderPaddingLG: l,
            collapsePanelBorderRadius: m,
            lineWidth: c,
            lineType: g,
            colorBorder: d,
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
            fontSizeIcon: N,
            contentPadding: E,
            fontHeight: M,
            fontHeightLG: z
        } = t, H = `${G(c)} ${g} ${d}`;
        return {
            [n]: Object.assign(Object.assign({}, it(t)), {
                backgroundColor: o,
                border: H,
                borderRadius: m,
                "&-rtl": {
                    direction: "rtl"
                },
                [`& > ${n}-item`]: {
                    borderBottom: H,
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
                        padding: u,
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
                            fontSize: N,
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
                    backgroundColor: a,
                    borderTop: H,
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
                            padding: l,
                            paddingInlineStart: s,
                            [`> ${n}-expand-icon`]: {
                                height: z,
                                marginInlineStart: t.calc(h).sub(s).equal()
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
    nn = t => {
        const {
            componentCls: n
        } = t, a = `> ${n}-item > ${n}-header ${n}-arrow`;
        return {
            [`${n}-rtl`]: {
                [a]: {
                    transform: "rotate(180deg)"
                }
            }
        }
    },
    an = t => {
        const {
            componentCls: n,
            headerBg: a,
            borderlessContentPadding: s,
            borderlessContentBg: o,
            colorBorder: u
        } = t;
        return {
            [`${n}-borderless`]: {
                backgroundColor: a,
                border: 0,
                [`> ${n}-item`]: {
                    borderBottom: `1px solid ${u}`
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
                    padding: s
                }
            }
        }
    },
    sn = t => {
        const {
            componentCls: n,
            paddingSM: a
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
                            paddingBlock: a
                        }
                    }
                }
            }
        }
    },
    on = t => ({
        headerPadding: `${t.paddingSM}px ${t.padding}px`,
        headerBg: t.colorFillAlter,
        contentPadding: `${t.padding}px 16px`,
        contentBg: t.colorBgContainer,
        borderlessContentPadding: `${t.paddingXXS}px 16px ${t.padding}px`,
        borderlessContentBg: "transparent"
    }),
    rn = st("Collapse", t => {
        const n = ot(t, {
            collapseHeaderPaddingSM: `${G(t.paddingXS)} ${G(t.paddingSM)}`,
            collapseHeaderPaddingLG: `${G(t.padding)} ${G(t.paddingLG)}`,
            collapsePanelBorderRadius: t.borderRadiusLG
        });
        return [tn(n), an(n), sn(n), nn(n), Mt(n)]
    }, on),
    ln = i.forwardRef((t, n) => {
        const {
            getPrefixCls: a,
            direction: s,
            expandIcon: o,
            className: u,
            style: r
        } = ct("collapse"), {
            prefixCls: l,
            className: m,
            rootClassName: c,
            style: g,
            bordered: d = !0,
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
        }), h = a("collapse", l), B = a(), [b, N, E] = rn(h), M = i.useMemo(() => p === "left" ? "start" : p === "right" ? "end" : p, [p]), z = S ?? o, H = i.useCallback((R = {}) => {
            const F = typeof z == "function" ? z(R) : i.createElement(zt, {
                rotate: R.isActive ? s === "rtl" ? -90 : 90 : void 0,
                "aria-label": R.isActive ? "expanded" : "collapsed"
            });
            return Ie(F, () => {
                var O;
                return {
                    className: Q((O = F.props) === null || O === void 0 ? void 0 : O.className, `${h}-arrow`)
                }
            })
        }, [z, h, s]), oe = Q(`${h}-icon-position-${M}`, {
            [`${h}-borderless`]: !d,
            [`${h}-rtl`]: s === "rtl",
            [`${h}-ghost`]: !!v,
            [`${h}-${w}`]: w !== "middle"
        }, u, m, c, N, E), xe = i.useMemo(() => Object.assign(Object.assign({}, ut(B)), {
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
            expandIcon: H,
            prefixCls: h,
            className: oe,
            style: Object.assign(Object.assign({}, r), g),
            destroyInactivePanel: x ?? C
        }), pe))
    }),
    ye = Object.assign(ln, {
        Panel: en
    });
var cn = {
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
    dn = function(n, a) {
        return i.createElement(Oe, X({}, n, {
            ref: a,
            icon: cn
        }))
    },
    He = i.forwardRef(dn),
    un = {
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
    mn = function(n, a) {
        return i.createElement(Oe, X({}, n, {
            ref: a,
            icon: un
        }))
    },
    gn = i.forwardRef(mn);
const hn = U(() => {
        const {
            navigation: t
        } = i.useContext(_), n = o => t.currentTab === o, a = o => t.currentTab = o, s = !q();
        return e.jsxs(fn, {
            children: [e.jsx(Le, {}), e.jsx(le, {
                title: q() ? "General Settings" : "Account Information",
                icon: gn,
                onClick: () => a(A.accountInformation),
                selected: n(A.accountInformation)
            }), !q() && e.jsx(le, {
                title: "Game Settings",
                icon: It,
                onClick: () => a(A.gameSettings),
                selected: n(A.gameSettings)
            }), s && e.jsx(le, {
                title: "Plan & Billing",
                icon: He,
                selected: n(A.billing),
                onClick: () => a(A.billing)
            }), !q() && e.jsx(le, {
                title: "Help & Support",
                icon: Nt,
                selected: n(A.support),
                onClick: () => a(A.support)
            }), q() ? null : e.jsxs(xn, {
                children: ["Looking to manage a group license?", e.jsx("br", {}), e.jsx("br", {}), "We moved license management to a dedicated page:", e.jsx("br", {}), e.jsx("br", {}), e.jsxs(te, {
                    to: gt,
                    style: {
                        fontWeight: y.Bold
                    },
                    children: [mt(), "/groups"]
                })]
            })]
        })
    }),
    fn = W.div.attrs({
        className: "scroll-y"
    })`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${k.BorderGray};
`,
    xn = W.div`
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
        $({
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
    pn = () => {
        const [t, n] = i.useState(D().firstName), [a, s] = i.useState(D().lastName), o = g => n(g.target.value), u = g => s(g.target.value), r = () => {
            t && Ee({
                changes: [{
                    key: Pe.firstName,
                    value: t
                }]
            })
        }, l = () => {
            a && Ee({
                changes: [{
                    key: Pe.lastName,
                    value: a
                }]
            })
        }, m = q() && D().lastName.length < 2 ? "Last Initial" : "Last Name", c = q() && D().lastName.length < 2 ? 1 : $t;
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ae, {
                children: [e.jsx(je, {
                    children: "First Name"
                }), e.jsx(J, {
                    onBlur: r,
                    onChange: o,
                    value: t,
                    maxLength: Pt
                })]
            }), e.jsxs(Ae, {
                children: [e.jsx(je, {
                    children: m
                }), e.jsx(J, {
                    onBlur: l,
                    onChange: u,
                    value: a,
                    maxLength: c
                })]
            })]
        })
    },
    Ae = W.div`
  margin-bottom: 8px;
`,
    je = W.div`
  font-weight: ${y.Bold};
  font-size: 18px;
`,
    yn = t => {
        const [n, a] = i.useState("newEmail"), [s, o] = i.useState(""), [u, r] = i.useState(!1), [l, m] = i.useState(!1), [c, g] = i.useState(""), [d, v] = i.useState(""), [f, p] = i.useState(null), j = b => o(b.target.value.toLowerCase()), C = s && Et(s) && s !== D().email, x = () => {
            C && (r(!0), $({
                url: "/api/users/register/email-info",
                method: "post",
                data: {
                    email: s
                },
                success: b => {
                    b.accountExists ? (p(`Account already exists with email "${s}"`), r(!1)) : $({
                        url: "/api/users/requestEmailChange",
                        method: "post",
                        data: {
                            emailToChangeTo: s
                        },
                        success: N => {
                            g(N.encryptedToken), a("code")
                        },
                        error: N => p(N),
                        both: () => r(!1)
                    })
                },
                error: () => r(!1)
            }))
        }, S = b => v(b.target.value), w = !!d, h = () => {
            w && (m(!0), $({
                url: "/api/users/changeEmail",
                method: "post",
                data: {
                    changeToken: c,
                    encryptCode: d
                },
                success: () => {
                    ge({
                        onSuccess: () => t.onEmailChange(s)
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
            }), e.jsx(J, {
                onChange: j,
                placeholder: "please-do-not-ice-me@gimkit.com",
                size: "large",
                value: s,
                autoFocus: !0,
                onPressEnter: x,
                maxLength: 256
            }), e.jsx(K, {
                type: "primary",
                disabled: !C,
                style: {
                    width: "100%",
                    marginTop: 7
                },
                size: "large",
                onClick: x,
                loading: u,
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
                    children: s
                }), ". Please check that email and enter it here. The code expires in 30 minutes."]
            }), e.jsx(J, {
                onChange: S,
                placeholder: "Enter code here...",
                size: "large",
                value: d,
                autoFocus: !0,
                onPressEnter: h
            }), e.jsx(K, {
                type: "primary",
                disabled: !w,
                style: {
                    width: "100%",
                    marginTop: 7
                },
                size: "large",
                onClick: h,
                loading: l,
                children: "Submit"
            })]
        }) : null;
        return e.jsxs(ee, {
            style: {
                fontFamily: T.SFPro,
                color: k.Black
            },
            footer: null,
            open: !0,
            onCancel: t.close,
            closable: !0,
            children: [B(), e.jsx(Tt, {
                error: f,
                style: {
                    marginTop: 10
                }
            })]
        })
    },
    vn = () => {
        const [t, n] = i.useState(D().email), [a, s] = i.useState(!1), [o, u] = i.useState(!1), r = () => u(!0), l = () => u(!1), m = () => s(!a), c = d => {
            ee.success({
                title: "Email changed!",
                content: `Email changed to "${d}"`
            }), n(d), s(!1)
        }, g = D().passwordless;
        return e.jsxs(e.Fragment, {
            children: [e.jsx(je, {
                children: "Email"
            }), e.jsx(J, {
                readOnly: !0,
                value: t,
                onFocus: m
            }), e.jsxs("div", {
                style: {
                    justifyContent: "space-between"
                },
                className: "maxWidth flex",
                children: [e.jsx("div", {}), e.jsx(te, {
                    style: {
                        marginTop: 9,
                        fontSize: 14
                    },
                    onClick: r,
                    children: g ? "Add password" : "Change password"
                })]
            }), a && e.jsx(yn, {
                onEmailChange: c,
                close: m
            }), e.jsx(At, {
                open: o,
                close: l,
                defaultEmail: D().email
            })]
        })
    },
    bn = t => t === re.educator ? "Educator" : t === re.student ? "Student" : t === re.guardian ? "Parent/Guardian" : t === re.nonSchool ? "Other" : "",
    jn = () => {
        const t = () => $({
                url: "/api/user/request-info",
                success: s => {
                    ee.info({
                        title: "Information",
                        content: e.jsx("div", {
                            children: Object.keys(s).map(o => e.jsxs("div", {
                                children: [e.jsx("span", {
                                    style: {
                                        fontWeight: y.Bold
                                    },
                                    children: o
                                }), ":", " ", s[o], e.jsx("br", {})]
                            }, `info-item-${o}`))
                        })
                    })
                }
            }),
            n = D();
        let a = [];
        return a.push(["Account Email", n.email]), a.push(["Account Type", bn(n.accountType)]), e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontSize: 22,
                    fontWeight: y.Bold
                },
                children: "Account Information"
            }), e.jsx("div", {
                className: "flex maxWidth between",
                style: {
                    alignItems: "flex-end"
                },
                children: e.jsx("div", {
                    style: {
                        marginTop: 10
                    },
                    children: a.map(s => e.jsxs("div", {
                        children: [e.jsxs("b", {
                            children: [s[0], ":"]
                        }), " ", s[1]]
                    }, s[0]))
                })
            }), e.jsx(Z, {}), e.jsx("div", {
                children: e.jsxs(ye, {
                    children: [e.jsx(ye.Panel, {
                        header: "Support",
                        children: e.jsx(te, {
                            onClick: t,
                            children: "Information Gimkit has collected on me"
                        })
                    }, "support"), e.jsx(ye.Panel, {
                        header: "Danger Zone",
                        children: e.jsx(te, {
                            to: ht,
                            children: "Delete my account"
                        })
                    }, "danger")]
                })
            })]
        })
    },
    Cn = t => {
        const {
            visible: n,
            close: a
        } = t, [s, o] = i.useState(null), [u, r] = i.useState(!1), [l, m] = i.useState([]), c = () => {
            if (s) {
                if (String(s).length !== 5) {
                    ee.warning({
                        title: "Please enter a 5 digit zip code"
                    });
                    return
                }
                r(!0), $({
                    url: "/api/users/fetch-schools",
                    method: "post",
                    data: {
                        zipCode: s
                    },
                    success: d => {
                        d && d.schoolList && d.schoolList.length ? m(d.schoolList) : me({
                            title: "No schools found for this zip code."
                        })
                    },
                    error: d => {
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
        }, g = d => {
            const v = d.target.value;
            o(v)
        };
        return e.jsxs(Ot, {
            open: n,
            onClose: a,
            placement: "left",
            width: 560,
            closable: !0,
            drawerStyle: {
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "none"
            },
            children: [e.jsx(wn, {
                children: "School search"
            }), e.jsx(ft, {
                type: "info",
                showIcon: !0,
                banner: !0,
                style: {
                    width: "100%"
                },
                message: "We currently only support schools in the US."
            }), e.jsx(Z, {}), e.jsx(J.Search, {
                placeholder: "Zip Code",
                onSearch: c,
                size: "large",
                enterButton: "Search",
                autoFocus: !0,
                style: {
                    flex: 1
                },
                maxLength: 5,
                loading: u,
                value: s,
                onChange: g
            }), e.jsx("div", {
                style: {
                    marginTop: 25
                }
            }), l && l.length ? e.jsx(e.Fragment, {
                children: l.map(d => e.jsx(Ft, {
                    name: d.schoolName,
                    description: `${d.address.city}, ${d.address.stateFull}`,
                    onSelect: () => t.selectSchool(d)
                }, d.schoolid))
            }) : e.jsx(Sn, {})]
        })
    },
    Sn = () => e.jsxs("div", {
        className: "flex hc vc flex-column",
        style: {
            color: k.Black,
            marginTop: 10
        },
        children: [e.jsx(Bt, {
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
    wn = W.div`
  font-weight: ${y.UltraBold};
  font-size: 42px;
  color: ${k.Black};
  line-height: 1;
  margin-bottom: 10px;
`,
    kn = U(() => {
        var r;
        const [t, n] = i.useState(!1), a = () => {
            n(!0)
        }, s = () => {
            ee.confirm({
                title: "Are you sure you want to unenroll from your current school?",
                cancelText: "No",
                okText: "Yes",
                onOk: () => o(null)
            })
        }, o = l => {
            $({
                url: "/api/user/update-school",
                data: {
                    schoolDiggerId: l == null ? void 0 : l.schoolid
                },
                success: () => {
                    n(!1), ge({
                        onSuccess: () => {
                            xt(Rt)
                        }
                    })
                },
                error: () => {
                    ae({
                        default: {
                            title: "An error ocurred while trying to update your school",
                            content: "Please try again later or contact support"
                        }
                    })
                }
            })
        }, u = (r = D()) == null ? void 0 : r.schoolName;
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
                }), " ", u || "None"]
            }), e.jsx(Z, {
                style: {
                    margin: "12px 0px"
                }
            }), e.jsxs("div", {
                className: "maxWidth flex",
                style: {
                    justifyContent: "space-between",
                    fontSize: 14
                },
                children: [e.jsxs(te, {
                    onClick: a,
                    children: [u ? "Change" : "Add", " school"]
                }), u && e.jsx(te, {
                    onClick: s,
                    children: "Unenroll from school"
                })]
            }), e.jsx(Cn, {
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
    In = () => e.jsxs(e.Fragment, {
        children: [e.jsxs(e.Fragment, {
            children: [e.jsx(de, {
                children: "👋 Name"
            }), e.jsx(ce, {
                children: e.jsx(pn, {})
            }), e.jsx(de, {
                children: "🔑 Authentication"
            }), e.jsx(ce, {
                children: e.jsx(vn, {})
            }), !q() && e.jsxs(e.Fragment, {
                children: [e.jsx(de, {
                    children: "🏫 School"
                }), e.jsx(ce, {
                    children: e.jsx(kn, {})
                })]
            })]
        }), e.jsx(de, {
            children: q() ? "⌨️ Manage" : "🔒 Account"
        }), e.jsx(ce, {
            children: e.jsx(jn, {})
        })]
    }),
    de = W.div`
  font-size: 30px;
  font-weight: ${y.UltraBold};
  margin-bottom: 5px;
`,
    {
        Option: Nn
    } = he,
    $n = ["$", "€", "¥", "£", "X̶", "₩"],
    Pn = () => {
        const [t, n] = i.useState(localStorage.getItem(Y.currency) || "$"), a = s => {
            localStorage.setItem(Y.currency, s), n(s)
        };
        return e.jsx(se, {
            title: "Currency",
            description: "Currency to be used while playing Gimkit (non-2D modes)",
            children: e.jsx(he, {
                value: t,
                style: {
                    width: 200
                },
                onChange: a,
                children: $n.map(s => e.jsx(Nn, {
                    value: s,
                    children: s
                }, s))
            })
        })
    },
    {
        Option: Bn
    } = he,
    En = Lt(),
    An = () => {
        const [t, n] = i.useState(Dt(localStorage.getItem(Y.language)) || "English"), a = s => {
            const o = Gt(s);
            localStorage.setItem(Y.language, o), n(s)
        };
        return e.jsx(se, {
            title: "Language",
            description: "Language used for upgrade names and other text while playing Gimkit (non-2D modes)",
            children: e.jsx(he, {
                value: t,
                style: {
                    width: 200
                },
                onChange: a,
                children: En.map(s => e.jsx(Bn, {
                    value: s,
                    children: s
                }, s))
            })
        })
    },
    Tn = () => {
        const [t, n] = i.useState(!!localStorage.getItem(Y.allowGoogleTranslate)), a = s => {
            s ? localStorage.setItem(Y.allowGoogleTranslate, "allow") : localStorage.removeItem(Y.allowGoogleTranslate), n(s)
        };
        return e.jsx(se, {
            title: "Allow Google Translate",
            description: "Allow Google Chrome to translate text inside of live games?",
            children: e.jsx(Se, {
                onClick: a,
                checked: t
            })
        })
    },
    Mn = () => {
        const [t, n] = i.useState(!!localStorage.getItem(Y.cosmosBlockedInGame)), a = s => {
            s ? localStorage.setItem(Y.cosmosBlockedInGame, "true") : localStorage.removeItem(Y.cosmosBlockedInGame), n(s)
        };
        return e.jsx(se, {
            title: "Disable Cosmetics",
            description: "Gims, trails, and stickers are disabled in-game. All players appear as default Gims.",
            children: e.jsx(Se, {
                onClick: a,
                checked: t
            })
        })
    },
    zn = () => {
        const [t, n] = i.useState(!0), [a, s] = i.useState(!1), [o, u] = i.useState(""), r = () => {
            $e({
                url: "/api/user/display-name",
                success: c => {
                    u(c.name)
                },
                both: () => n(!1)
            })
        }, l = c => {
            u(c.target.value)
        }, m = () => {
            if (a) return;
            let c = o;
            if (c && (c = c.trim(), c.length < 2)) {
                ae({
                    default: {
                        title: "Display name must be at least 2 characters long"
                    }
                });
                return
            }
            s(!0), $e({
                url: "/api/user/display-name",
                data: {
                    name: c
                },
                success: g => {
                    Ge.success("Display name updated!"), u(g.name)
                },
                error: g => {
                    ae({
                        e: g,
                        default: {
                            title: "Error updating display name"
                        }
                    })
                },
                both: () => s(!1)
            })
        };
        return pt(r), e.jsx(se, {
            title: "Display Name",
            description: "The name you appear as in-game when hosting a game. Leave empty to use your account name.",
            children: e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx(J, {
                    disabled: t,
                    value: o,
                    maxLength: 20,
                    style: {
                        width: 200,
                        marginRight: 10
                    },
                    placeholder: "Ms. Gimkit",
                    onPressEnter: m,
                    onChange: l
                }), e.jsx(K, {
                    loading: a,
                    onClick: m,
                    type: "primary",
                    children: "Save"
                })]
            })
        })
    },
    Rn = ["user-preferences"],
    Fn = () => Wt({
        queryKey: [Rn],
        retry: !1,
        queryFn: () => yt({
            url: "/api/user/preferences"
        })
    }),
    Te = "six-seven-mode",
    On = () => {
        const [t, n] = i.useState(!1), {
            data: a
        } = Fn();
        i.useEffect(() => {
            n((a == null ? void 0 : a[Te]) === !0)
        }, [a]);
        const s = o => {
            n(o), $({
                url: "/api/user/preferences",
                data: {
                    key: Te,
                    value: o
                }
            })
        };
        return a ? e.jsx(se, {
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
                onClick: s,
                checked: t
            })
        }) : null
    },
    se = t => e.jsx(L, {
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
                children: [e.jsx(Ln, {
                    children: t.title
                }), e.jsx(Gn, {
                    children: t.description
                })]
            }), e.jsx("div", {
                children: t.children
            })]
        })
    }),
    Dn = () => e.jsx(e.Fragment, {
        children: e.jsxs(_t, {
            direction: "vertical",
            size: 10,
            className: "maxWidth",
            children: [e.jsx(On, {}), e.jsx(Mn, {}), e.jsx(zn, {}), e.jsx(Pn, {}), e.jsx(An, {}), e.jsx(Tn, {})]
        })
    }),
    Ln = W.div`
  font-weight: ${y.UltraBold};
  font-size: 18px;
`,
    Gn = W.div`
  font-size: 14px;
`,
    Wn = U(() => {
        const {
            billing: t
        } = i.useContext(_);
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
    _n = t => {
        const n = !!t.amountRefunded,
            a = n && t.amountRefunded === t.amount;
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
                            children: a ? "Refunded" : "Partially Refunded"
                        })
                    })]
                })
            })
        })
    },
    Un = U(() => {
        const {
            billing: t
        } = i.useContext(_);
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
            }), t.charges.map(n => e.jsx(_n, {
                date: vt.unix(n.unixDate).format("MMMM Do, YYYY"),
                amount: n.amount,
                link: n.receiptUrl,
                amountRefunded: n.amountRefunded
            }, n.id))]
        }) : null
    }),
    Hn = U(() => {
        const {
            billing: t
        } = i.useContext(_);
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
    Kn = U(() => {
        const {
            billing: t
        } = i.useContext(_);
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
        $({
            url: "/api/billing/payment-source",
            success: t => {
                P.billing.cardName = t.source.cardType, P.billing.last4DigitsOfCard = t.source.last4Digits, $({
                    url: "/api/billing/stripe-key",
                    success: n => P.billing.stripePublicKey = n.key
                })
            }
        })
    },
    Yn = U(() => {
        const [t, n] = i.useState(!1), {
            billing: {
                last4DigitsOfCard: a,
                stripePublicKey: s,
                cardName: o
            }
        } = i.useContext(_);
        if (i.useEffect(() => {
                const r = De("session_id");
                r && (n(!0), bt({
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
            }, []), !a || !o) return null;
        const u = async () => {
            n(!0);
            let r;
            try {
                r = await Ut(s)
            } catch (l) {
                n(!1), ae({
                    e: l,
                    default: {
                        title: "Our payment processor is currently down",
                        content: "Please try again later"
                    }
                })
            }
            r && $({
                url: "/api/billing/create-billing-info-session",
                method: "POST",
                success: async l => {
                    const m = l;
                    let c;
                    try {
                        if (c = await r.redirectToCheckout({
                                sessionId: m.id
                            }), c && c.error) throw c.error
                    } catch (g) {
                        ae({
                            e: g,
                            default: {
                                title: "Error",
                                content: "An error ocurred. Please try again later"
                            }
                        })
                    }
                },
                error: l => {
                    n(!1), ae({
                        e: l,
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
                            children: a
                        })]
                    })]
                })
            }), e.jsxs("div", {
                style: {
                    marginTop: 5,
                    justifyContent: "space-between"
                },
                className: "flex maxWidth",
                children: [e.jsx("div", {}), s && e.jsx(K, {
                    type: "primary",
                    size: "large",
                    onClick: u,
                    loading: t,
                    children: "Change Credit Card"
                })]
            })]
        })
    }),
    qn = () => {
        $({
            url: "/api/billing/upcoming-invoice",
            success: t => {
                P.billing.nextChargeAmount = fe(t.amount), P.billing.nextChargeDate = t.date, P.billing.hasNextCharge = !0
            }
        })
    },
    Vn = () => {
        $({
            url: "/api/billing/downgrade-details",
            success: t => {
                P.billing.canDowngrade = t.canDowngrade, t.message && (P.billing.downgradeMessage = t.message), t.subscriptionEndDateText && (P.billing.downgradeDateMessage = t.subscriptionEndDateText)
            }
        })
    },
    Xn = t => {
        if (t.info.plan === "basic") return "Free Forever!";
        if (t.info.info) {
            const n = t.info.info;
            if (n.providedByMessage) return n.providedByMessage;
            if (n.cost && n.timePeriod) return `${fe(n.cost)} per ${n.timePeriod}`;
            if (n.bulkName) return `Paid by ${n.bulkName}.`
        }
        return ""
    },
    Zn = () => {
        Ce() && Vn(), $({
            url: "/api/billing/plan-info",
            success: t => {
                const {
                    info: n
                } = t;
                P.billing.planName = ue(n.plan), P.billing.planDescription = Xn(t), n.info && n.info.timePeriod && (P.billing.billingInterval = n.info.timePeriod), n.source === "stripe" && qn()
            }
        })
    },
    Qn = () => {
        $({
            url: "/api/billing/charges",
            success: t => P.billing.charges.replace(t.charges)
        })
    },
    Jn = () => {
        $({
            url: "/api/billing/account-balance",
            success: t => {
                P.billing.accountBalance = t.balance
            }
        })
    },
    Ye = () => {
        ge({
            onSuccess: () => {
                Zn(), Qn(), Jn(), Ke()
            }
        })
    },
    ea = U(t => {
        const {
            billing: n
        } = i.useContext(_), [a, s] = i.useState("firstAsk"), [o, u] = i.useState(""), [r, l] = i.useState(""), [m, c] = i.useState(!1), g = !m, d = x => u(x.target.value), v = x => l(x.target.value), f = () => {
            g && (c(!0), $({
                url: "/api/billing/downgrade",
                data: {
                    reasonId: o,
                    otherReason: r
                },
                success: () => {
                    ee.success({
                        title: `You've canceled your ${ue(D().type)} subscription${n.downgradeDateMessage&&" to end on "+n.downgradeDateMessage}.`
                    }), n.reset(), Ye(), t.close()
                },
                error: () => me({
                    title: "Error canceling subscription",
                    content: "Please contact support"
                }),
                both: () => c(!1)
            }))
        }, p = () => s("reason"), j = () => s("groupOrder"), C = () => a === "firstAsk" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    textAlign: "center",
                    fontWeight: y.Bold,
                    fontSize: 25
                },
                children: "Are you canceling because you're joining a group license?"
            }), e.jsx(Z, {}), e.jsx(K, {
                style: {
                    marginBottom: 5
                },
                onClick: j,
                block: !0,
                size: "large",
                children: "Yes"
            }), e.jsx(K, {
                block: !0,
                size: "large",
                onClick: p,
                children: "No"
            })]
        }) : a === "groupOrder" ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.Bold,
                    fontSize: 27,
                    lineHeight: "30px"
                },
                children: "To get a refund, don't cancel your subscription just yet!"
            }), e.jsx(Z, {}), e.jsxs("div", {
                style: {
                    fontSize: 15
                },
                children: ["If you're joining a group license, ask your group manager for the", " ", e.jsx("b", {
                    children: "invite link."
                }), " ", e.jsx("br", {}), " ", e.jsx("br", {}), "When you open the invite link, your current subscription will automatically be canceled, and you will receive a refund for your unused time on ", ue(D().type), ". ", e.jsx("br", {}), " ", e.jsx("br", {}), " If you cancel now, you will not be refunded for your unused time."]
            }), e.jsx(Z, {}), e.jsx(K, {
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
        }) : a === "reason" ? e.jsxs(e.Fragment, {
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
                onChange: d,
                value: o,
                children: ta.map(x => e.jsx(Be, {
                    value: x.id,
                    style: {
                        fontSize: 15,
                        color: k.Black,
                        marginBottom: 4
                    },
                    children: x.text
                }, x.id))
            }), o === "other" ? e.jsx(J, {
                placeholder: "Reason...",
                autoFocus: !0,
                style: {
                    marginTop: 10
                },
                value: r,
                onChange: v
            }) : null, e.jsx(K, {
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
        return e.jsx(ee, {
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
    ta = [{
        id: "break",
        text: "Summer break/taking a break"
    }, ...jt.shuffle([{
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
    na = U(() => {
        const {
            billing: t
        } = i.useContext(_), [n, a] = i.useState(!1), s = () => a(!n);
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
                    children: [e.jsx("div", {}), t.canDowngrade && e.jsx(K, {
                        onClick: s,
                        type: "primary",
                        danger: !0,
                        children: "Cancel Subscription"
                    })]
                })
            }), e.jsx(ea, {
                visible: n,
                close: s
            })]
        })
    }),
    aa = t => e.jsx(L, {
        style: {
            fontFamily: T.SFPro,
            color: k.White,
            marginTop: 10,
            overflow: "hidden"
        },
        ...t
    }),
    sa = U(() => {
        const {
            billing: t
        } = i.useContext(_);
        return Ce() ? !t.billingInterval || t.billingInterval === "year" ? null : e.jsx(aa, {
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
                    children: ["If you use ", Ct, " more than 3 months a year, you'll save money by switching to annual billing!"]
                }), e.jsx("div", {
                    style: {
                        marginTop: 20
                    },
                    children: e.jsx(te, {
                        to: St,
                        children: e.jsx(K, {
                            size: "large",
                            icon: e.jsx(Ht, {}),
                            type: "primary",
                            children: "Switch To Annual Billing"
                        })
                    })
                })]
            })
        }) : null
    }),
    oa = () => (i.useEffect(() => {
        Ye()
    }, []), e.jsxs(e.Fragment, {
        children: [e.jsx(Wn, {}), e.jsx(Hn, {}), e.jsx(sa, {}), e.jsx(Un, {}), e.jsx(Yn, {}), e.jsx(Kn, {}), e.jsx(na, {})]
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
    ia = () => {
        const t = () => {
            window.open("https://help.gimkit.com")
        };
        return e.jsx(ra, {
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
                }), e.jsx(Z, {}), e.jsx(be, {
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
                }), e.jsx(Z, {
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
    ra = W.div``,
    la = U(() => {
        const {
            navigation: t
        } = i.useContext(_), n = () => {
            const {
                currentTab: a
            } = t;
            return a === A.accountInformation ? e.jsx(In, {}) : a === A.gameSettings ? e.jsx(Dn, {}) : a === A.billing ? e.jsx(oa, {}) : a === A.support ? e.jsx(ia, {}) : null
        };
        return e.jsxs(ca, {
            children: [e.jsx(Le, {}), n()]
        })
    }),
    ca = W.div.attrs({
        className: "scroll"
    })`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${T.SFPro};
  color: ${k.Black};
`,
    ds = () => (i.useEffect(() => {
        const t = De("tab");
        t && t === A.billing ? P.navigation.currentTab = A.billing : t && t === A.gameSettings && (P.navigation.currentTab = A.gameSettings)
    }, []), e.jsxs(e.Fragment, {
        children: [e.jsx(_.Provider, {
            value: P,
            children: e.jsxs(Kt, {
                className: "flex-column",
                children: [e.jsx(kt, {}), e.jsxs(da, {
                    children: [e.jsx(hn, {}), e.jsx(la, {})]
                })]
            })
        }), e.jsx(wt, {
            title: "Settings"
        })]
    })),
    da = W.div.attrs({
        className: "flex"
    })`
  flex: 1;
  overflow: hidden;
`;
export {
    ds as
    default
};