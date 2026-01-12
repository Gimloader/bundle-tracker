import {
    x as tr,
    _ as Q,
    r as w,
    aB as ue,
    az as uc,
    by as pc,
    aK as fc,
    bw as hc,
    bg as Lr,
    m as Be,
    o as E,
    a9 as ka,
    aZ as or,
    dD as xs,
    ar as Le,
    ax as mc,
    bI as ze,
    bJ as kt,
    dZ as ys,
    d_ as Pa,
    ah as yn,
    j as i,
    aw as Ar,
    dL as gc,
    d as k,
    e as de,
    a4 as Cs,
    dM as vc,
    d$ as bs,
    D as ut,
    q as Cn,
    dO as lt,
    F as Re,
    B as uo,
    a3 as xc,
    l as yc,
    S as Cc,
    M as bc,
    e0 as wc
} from "./_index.js";
import {
    i as F,
    o as D,
    P as kc
} from "./mobxreact.esm.js";
import {
    G as ws,
    a as Pc,
    Q as Qs,
    t as Sc,
    b as $e
} from "./QuizTypes.js";
import {
    C as $
} from "./colors.js";
import {
    h as se
} from "./howler.js";
import {
    H as Sa,
    B as Ta,
    T as Tc
} from "./Codes.js";
import {
    D as sr,
    E as bn,
    T as nt,
    G as Ba
} from "./GimkitLiveQuestion.js";
import {
    u as Ea,
    n as Bc,
    T as Ec,
    w as Qe,
    c as ie,
    b as He,
    a as Ie,
    f as rr,
    g as Yt,
    h as _c,
    z as Rc,
    i as jc
} from "./capitalize.js";
import {
    B as Mr,
    d as je,
    o as Rn,
    e as Oc,
    u as Ys,
    f as Mc,
    g as Dc,
    R as Yr,
    r as ks,
    h as _a,
    j as Ra
} from "./Text.js";
import {
    L as Ic,
    B as Ae
} from "./App-9.js";
import {
    O as zr,
    L as $c,
    A as Nc,
    m as Lc
} from "./index-26.js";
import {
    f as Ps,
    b as _t,
    g as ja,
    h as wn,
    r as Oa,
    c as Xs,
    P as Ac,
    T as Ss
} from "./Tooltip.js";
import {
    m as ke
} from "./motion.js";
import {
    S as zc
} from "./index-9.js";
import {
    I as Ma
} from "./index-3.js";
import {
    D as Da
} from "./index-6.js";
import {
    a as Wc
} from "./polished.esm.js";
import {
    C as Ia
} from "./confetti.js";
import {
    C as $a
} from "./CircularProgress.js";
import {
    b as Fc
} from "./index-1.js";
import {
    u as Uc
} from "./index-23.js";
import {
    r as qc
} from "./react.js";
import {
    T as Gc
} from "./index-7.js";
import {
    F as Hc
} from "./FontAwesomeIcon.js";
import {
    R as Vc
} from "./___vite-browser-external_commonjs-proxy.js";
import {
    F as Qc
} from "./FillRemainingSpace.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./index-17.js";
import "./use-force-update.js";
import "./use-motion-value.js";
import "./inheritsLoose.js";
import "./index-15.js";
import "./index-5.js";
import "./util-2.js";
import "./util-1.js";
import "./index-18.js";
import "./context.js";
import "./AccessibleAnchor.js";
import "./DownOutlined.js";
var Wn = {
        exports: {}
    },
    re = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;

function Yc() {
    if (Js) return re;
    Js = 1;
    var e = 60103,
        t = 60106,
        n = 60107,
        o = 60108,
        r = 60114,
        s = 60109,
        a = 60110,
        c = 60112,
        d = 60113,
        l = 60120,
        f = 60115,
        g = 60116,
        b = 60121,
        v = 60122,
        y = 60117,
        C = 60129,
        p = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
        var u = Symbol.for;
        e = u("react.element"), t = u("react.portal"), n = u("react.fragment"), o = u("react.strict_mode"), r = u("react.profiler"), s = u("react.provider"), a = u("react.context"), c = u("react.forward_ref"), d = u("react.suspense"), l = u("react.suspense_list"), f = u("react.memo"), g = u("react.lazy"), b = u("react.block"), v = u("react.server.block"), y = u("react.fundamental"), C = u("react.debug_trace_mode"), p = u("react.legacy_hidden")
    }

    function m(j) {
        if (typeof j == "object" && j !== null) {
            var U = j.$$typeof;
            switch (U) {
                case e:
                    switch (j = j.type, j) {
                        case n:
                        case r:
                        case o:
                        case d:
                        case l:
                            return j;
                        default:
                            switch (j = j && j.$$typeof, j) {
                                case a:
                                case c:
                                case g:
                                case f:
                                case s:
                                    return j;
                                default:
                                    return U
                            }
                    }
                case t:
                    return U
            }
        }
    }
    var h = s,
        x = e,
        S = c,
        P = n,
        B = g,
        _ = f,
        R = t,
        O = r,
        A = o,
        I = d;
    return re.ContextConsumer = a, re.ContextProvider = h, re.Element = x, re.ForwardRef = S, re.Fragment = P, re.Lazy = B, re.Memo = _, re.Portal = R, re.Profiler = O, re.StrictMode = A, re.Suspense = I, re.isAsyncMode = function() {
        return !1
    }, re.isConcurrentMode = function() {
        return !1
    }, re.isContextConsumer = function(j) {
        return m(j) === a
    }, re.isContextProvider = function(j) {
        return m(j) === s
    }, re.isElement = function(j) {
        return typeof j == "object" && j !== null && j.$$typeof === e
    }, re.isForwardRef = function(j) {
        return m(j) === c
    }, re.isFragment = function(j) {
        return m(j) === n
    }, re.isLazy = function(j) {
        return m(j) === g
    }, re.isMemo = function(j) {
        return m(j) === f
    }, re.isPortal = function(j) {
        return m(j) === t
    }, re.isProfiler = function(j) {
        return m(j) === r
    }, re.isStrictMode = function(j) {
        return m(j) === o
    }, re.isSuspense = function(j) {
        return m(j) === d
    }, re.isValidElementType = function(j) {
        return typeof j == "string" || typeof j == "function" || j === n || j === r || j === C || j === o || j === d || j === l || j === p || typeof j == "object" && j !== null && (j.$$typeof === g || j.$$typeof === f || j.$$typeof === s || j.$$typeof === a || j.$$typeof === c || j.$$typeof === y || j.$$typeof === b || j[0] === v)
    }, re.typeOf = m, re
}
var Ks;

function Xc() {
    return Ks || (Ks = 1, Wn.exports = Yc()), Wn.exports
}
Xc();

function Jc(e, t) {
    if (typeof t == "function") {
        var n = t(e);
        return n
    }
    return Q({}, e, t)
}

function Kc(e) {
    var t = e.children,
        n = e.theme,
        o = Ea(),
        r = tr.useMemo(function() {
            var s = o === null ? n : Jc(o, n);
            return s != null && (s[Bc] = o !== null), s
        }, [n, o]);
    return tr.createElement(Ec.Provider, {
        value: r
    }, t)
}
var Zc = function(t) {
        var n = {};
        return t.shadows.forEach(function(o, r) {
            n["elevation".concat(r)] = {
                boxShadow: o
            }
        }), Q({
            root: {
                backgroundColor: t.palette.background.paper,
                color: t.palette.text.primary,
                transition: t.transitions.create("box-shadow")
            },
            rounded: {
                borderRadius: t.shape.borderRadius
            },
            outlined: {
                border: "1px solid ".concat(t.palette.divider)
            }
        }, n)
    },
    el = w.forwardRef(function(t, n) {
        var o = t.classes,
            r = t.className,
            s = t.component,
            a = s === void 0 ? "div" : s,
            c = t.square,
            d = c === void 0 ? !1 : c,
            l = t.elevation,
            f = l === void 0 ? 1 : l,
            g = t.variant,
            b = g === void 0 ? "elevation" : g,
            v = ue(t, ["classes", "className", "component", "square", "elevation", "variant"]);
        return w.createElement(a, Q({
            className: ie(o.root, r, b === "outlined" ? o.outlined : o["elevation".concat(f)], !d && o.rounded),
            ref: n
        }, v))
    });
const tl = Qe(Zc, {
    name: "MuiPaper"
})(el);
var rl = function(t) {
        return {
            root: {
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: t.typography.pxToRem(24),
                padding: 12,
                borderRadius: "50%",
                overflow: "visible",
                color: t.palette.action.active,
                transition: t.transitions.create("background-color", {
                    duration: t.transitions.duration.shortest
                }),
                "&:hover": {
                    backgroundColor: He(t.palette.action.active, t.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                },
                "&$disabled": {
                    backgroundColor: "transparent",
                    color: t.palette.action.disabled
                }
            },
            edgeStart: {
                marginLeft: -12,
                "$sizeSmall&": {
                    marginLeft: -3
                }
            },
            edgeEnd: {
                marginRight: -12,
                "$sizeSmall&": {
                    marginRight: -3
                }
            },
            colorInherit: {
                color: "inherit"
            },
            colorPrimary: {
                color: t.palette.primary.main,
                "&:hover": {
                    backgroundColor: He(t.palette.primary.main, t.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            },
            colorSecondary: {
                color: t.palette.secondary.main,
                "&:hover": {
                    backgroundColor: He(t.palette.secondary.main, t.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            },
            disabled: {},
            sizeSmall: {
                padding: 3,
                fontSize: t.typography.pxToRem(18)
            },
            label: {
                width: "100%",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit"
            }
        }
    },
    nl = w.forwardRef(function(t, n) {
        var o = t.edge,
            r = o === void 0 ? !1 : o,
            s = t.children,
            a = t.classes,
            c = t.className,
            d = t.color,
            l = d === void 0 ? "default" : d,
            f = t.disabled,
            g = f === void 0 ? !1 : f,
            b = t.disableFocusRipple,
            v = b === void 0 ? !1 : b,
            y = t.size,
            C = y === void 0 ? "medium" : y,
            p = ue(t, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
        return w.createElement(Mr, Q({
            className: ie(a.root, c, l !== "default" && a["color".concat(Ie(l))], g && a.disabled, C === "small" && a["size".concat(Ie(C))], {
                start: a.edgeStart,
                end: a.edgeEnd
            } [r]),
            centerRipple: !0,
            focusRipple: !v,
            disabled: g,
            ref: n
        }, p), w.createElement("span", {
            className: a.label
        }, s))
    });
const ir = Qe(rl, {
    name: "MuiIconButton"
})(nl);
var ol = {
        entering: {
            opacity: 1
        },
        entered: {
            opacity: 1
        }
    },
    sl = {
        enter: rr.enteringScreen,
        exit: rr.leavingScreen
    },
    il = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.disableStrictModeCompat,
            s = r === void 0 ? !1 : r,
            a = t.in,
            c = t.onEnter,
            d = t.onEntered,
            l = t.onEntering,
            f = t.onExit,
            g = t.onExited,
            b = t.onExiting,
            v = t.style,
            y = t.TransitionComponent,
            C = y === void 0 ? ja : y,
            p = t.timeout,
            u = p === void 0 ? sl : p,
            m = ue(t, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]),
            h = Ps(),
            x = h.unstable_strictMode && !s,
            S = w.useRef(null),
            P = _t(o.ref, n),
            B = _t(x ? S : void 0, P),
            _ = function(N) {
                return function(q, W) {
                    if (N) {
                        var he = x ? [S.current, q] : [q, W],
                            te = uc(he, 2),
                            ae = te[0],
                            G = te[1];
                        G === void 0 ? N(ae) : N(ae, G)
                    }
                }
            },
            R = _(l),
            O = _(function(z, N) {
                Oa(z);
                var q = wn({
                    style: v,
                    timeout: u
                }, {
                    mode: "enter"
                });
                z.style.webkitTransition = h.transitions.create("opacity", q), z.style.transition = h.transitions.create("opacity", q), c && c(z, N)
            }),
            A = _(d),
            I = _(b),
            j = _(function(z) {
                var N = wn({
                    style: v,
                    timeout: u
                }, {
                    mode: "exit"
                });
                z.style.webkitTransition = h.transitions.create("opacity", N), z.style.transition = h.transitions.create("opacity", N), f && f(z)
            }),
            U = _(g);
        return w.createElement(C, Q({
            appear: !0,
            in: a,
            nodeRef: x ? S : void 0,
            onEnter: O,
            onEntered: A,
            onEntering: R,
            onExit: j,
            onExited: U,
            onExiting: I,
            timeout: u
        }, m), function(z, N) {
            return w.cloneElement(o, Q({
                style: Q({
                    opacity: 0,
                    visibility: z === "exited" && !a ? "hidden" : void 0
                }, ol[z], v, o.props.style),
                ref: B
            }, N))
        })
    }),
    al = {
        root: {
            zIndex: -1,
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent"
        },
        invisible: {
            backgroundColor: "transparent"
        }
    },
    cl = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.classes,
            s = t.className,
            a = t.invisible,
            c = a === void 0 ? !1 : a,
            d = t.open,
            l = t.transitionDuration,
            f = t.TransitionComponent,
            g = f === void 0 ? il : f,
            b = ue(t, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);
        return w.createElement(g, Q({
            in: d,
            timeout: l
        }, b), w.createElement("div", {
            className: ie(r.root, s, c && r.invisible),
            "aria-hidden": !0,
            ref: n
        }, o))
    });
const ll = Qe(al, {
    name: "MuiBackdrop"
})(cl);
var dl = function(t) {
        return {
            root: {
                display: "flex",
                justifyContent: "center",
                height: 56,
                backgroundColor: t.palette.background.paper
            }
        }
    },
    ul = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.classes,
            s = t.className,
            a = t.component,
            c = a === void 0 ? "div" : a,
            d = t.onChange,
            l = t.showLabels,
            f = l === void 0 ? !1 : l,
            g = t.value,
            b = ue(t, ["children", "classes", "className", "component", "onChange", "showLabels", "value"]);
        return w.createElement(c, Q({
            className: ie(r.root, s),
            ref: n
        }, b), w.Children.map(o, function(v, y) {
            if (!w.isValidElement(v)) return null;
            var C = v.props.value === void 0 ? y : v.props.value;
            return w.cloneElement(v, {
                selected: C === g,
                showLabel: v.props.showLabel !== void 0 ? v.props.showLabel : f,
                value: C,
                onChange: d
            })
        }))
    });
const pl = Qe(dl, {
    name: "MuiBottomNavigation"
})(ul);
var fl = function(t) {
        return {
            root: {
                transition: t.transitions.create(["color", "padding-top"], {
                    duration: t.transitions.duration.short
                }),
                padding: "6px 12px 8px",
                minWidth: 80,
                maxWidth: 168,
                color: t.palette.text.secondary,
                flex: "1",
                "&$iconOnly": {
                    paddingTop: 16
                },
                "&$selected": {
                    paddingTop: 6,
                    color: t.palette.primary.main
                }
            },
            selected: {},
            iconOnly: {},
            wrapper: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column"
            },
            label: {
                fontFamily: t.typography.fontFamily,
                fontSize: t.typography.pxToRem(12),
                opacity: 1,
                transition: "font-size 0.2s, opacity 0.2s",
                transitionDelay: "0.1s",
                "&$iconOnly": {
                    opacity: 0,
                    transitionDelay: "0s"
                },
                "&$selected": {
                    fontSize: t.typography.pxToRem(14)
                }
            }
        }
    },
    hl = w.forwardRef(function(t, n) {
        var o = t.classes,
            r = t.className,
            s = t.icon,
            a = t.label,
            c = t.onChange,
            d = t.onClick,
            l = t.selected,
            f = t.showLabel,
            g = t.value,
            b = ue(t, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]),
            v = function(C) {
                c && c(C, g), d && d(C)
            };
        return w.createElement(Mr, Q({
            ref: n,
            className: ie(o.root, r, l ? o.selected : !f && o.iconOnly),
            focusRipple: !0,
            onClick: v
        }, b), w.createElement("span", {
            className: o.wrapper
        }, s, w.createElement("span", {
            className: ie(o.label, l ? o.selected : !f && o.iconOnly)
        }, a)))
    });
const $t = Qe(fl, {
    name: "MuiBottomNavigationAction"
})(hl);
var ml = function(t) {
        return {
            root: {
                margin: 0
            },
            body2: t.typography.body2,
            body1: t.typography.body1,
            caption: t.typography.caption,
            button: t.typography.button,
            h1: t.typography.h1,
            h2: t.typography.h2,
            h3: t.typography.h3,
            h4: t.typography.h4,
            h5: t.typography.h5,
            h6: t.typography.h6,
            subtitle1: t.typography.subtitle1,
            subtitle2: t.typography.subtitle2,
            overline: t.typography.overline,
            srOnly: {
                position: "absolute",
                height: 1,
                width: 1,
                overflow: "hidden"
            },
            alignLeft: {
                textAlign: "left"
            },
            alignCenter: {
                textAlign: "center"
            },
            alignRight: {
                textAlign: "right"
            },
            alignJustify: {
                textAlign: "justify"
            },
            noWrap: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            },
            gutterBottom: {
                marginBottom: "0.35em"
            },
            paragraph: {
                marginBottom: 16
            },
            colorInherit: {
                color: "inherit"
            },
            colorPrimary: {
                color: t.palette.primary.main
            },
            colorSecondary: {
                color: t.palette.secondary.main
            },
            colorTextPrimary: {
                color: t.palette.text.primary
            },
            colorTextSecondary: {
                color: t.palette.text.secondary
            },
            colorError: {
                color: t.palette.error.main
            },
            displayInline: {
                display: "inline"
            },
            displayBlock: {
                display: "block"
            }
        }
    },
    Zs = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p"
    },
    gl = w.forwardRef(function(t, n) {
        var o = t.align,
            r = o === void 0 ? "inherit" : o,
            s = t.classes,
            a = t.className,
            c = t.color,
            d = c === void 0 ? "initial" : c,
            l = t.component,
            f = t.display,
            g = f === void 0 ? "initial" : f,
            b = t.gutterBottom,
            v = b === void 0 ? !1 : b,
            y = t.noWrap,
            C = y === void 0 ? !1 : y,
            p = t.paragraph,
            u = p === void 0 ? !1 : p,
            m = t.variant,
            h = m === void 0 ? "body1" : m,
            x = t.variantMapping,
            S = x === void 0 ? Zs : x,
            P = ue(t, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]),
            B = l || (u ? "p" : S[h] || Zs[h]) || "span";
        return w.createElement(B, Q({
            className: ie(s.root, a, h !== "inherit" && s[h], d !== "initial" && s["color".concat(Ie(d))], C && s.noWrap, v && s.gutterBottom, u && s.paragraph, r !== "inherit" && s["align".concat(Ie(r))], g !== "initial" && s["display".concat(Ie(g))]),
            ref: n
        }, P))
    });
const Xr = Qe(ml, {
        name: "MuiTypography"
    })(gl),
    vl = je(w.createElement("path", {
        d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }));
var xl = function(t) {
    var n = t.palette.type === "light" ? t.palette.grey[300] : t.palette.grey[700],
        o = He(t.palette.text.primary, .26);
    return {
        root: {
            fontFamily: t.typography.fontFamily,
            fontSize: t.typography.pxToRem(13),
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            color: t.palette.getContrastText(n),
            backgroundColor: n,
            borderRadius: 32 / 2,
            whiteSpace: "nowrap",
            transition: t.transitions.create(["background-color", "box-shadow"]),
            cursor: "default",
            outline: 0,
            textDecoration: "none",
            border: "none",
            padding: 0,
            verticalAlign: "middle",
            boxSizing: "border-box",
            "&$disabled": {
                opacity: .5,
                pointerEvents: "none"
            },
            "& $avatar": {
                marginLeft: 5,
                marginRight: -6,
                width: 24,
                height: 24,
                color: t.palette.type === "light" ? t.palette.grey[700] : t.palette.grey[300],
                fontSize: t.typography.pxToRem(12)
            },
            "& $avatarColorPrimary": {
                color: t.palette.primary.contrastText,
                backgroundColor: t.palette.primary.dark
            },
            "& $avatarColorSecondary": {
                color: t.palette.secondary.contrastText,
                backgroundColor: t.palette.secondary.dark
            },
            "& $avatarSmall": {
                marginLeft: 4,
                marginRight: -4,
                width: 18,
                height: 18,
                fontSize: t.typography.pxToRem(10)
            }
        },
        sizeSmall: {
            height: 24
        },
        colorPrimary: {
            backgroundColor: t.palette.primary.main,
            color: t.palette.primary.contrastText
        },
        colorSecondary: {
            backgroundColor: t.palette.secondary.main,
            color: t.palette.secondary.contrastText
        },
        disabled: {},
        clickable: {
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            "&:hover, &:focus": {
                backgroundColor: Yt(n, .08)
            },
            "&:active": {
                boxShadow: t.shadows[1]
            }
        },
        clickableColorPrimary: {
            "&:hover, &:focus": {
                backgroundColor: Yt(t.palette.primary.main, .08)
            }
        },
        clickableColorSecondary: {
            "&:hover, &:focus": {
                backgroundColor: Yt(t.palette.secondary.main, .08)
            }
        },
        deletable: {
            "&:focus": {
                backgroundColor: Yt(n, .08)
            }
        },
        deletableColorPrimary: {
            "&:focus": {
                backgroundColor: Yt(t.palette.primary.main, .2)
            }
        },
        deletableColorSecondary: {
            "&:focus": {
                backgroundColor: Yt(t.palette.secondary.main, .2)
            }
        },
        outlined: {
            backgroundColor: "transparent",
            border: "1px solid ".concat(t.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
            "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                backgroundColor: He(t.palette.text.primary, t.palette.action.hoverOpacity)
            },
            "& $avatar": {
                marginLeft: 4
            },
            "& $avatarSmall": {
                marginLeft: 2
            },
            "& $icon": {
                marginLeft: 4
            },
            "& $iconSmall": {
                marginLeft: 2
            },
            "& $deleteIcon": {
                marginRight: 5
            },
            "& $deleteIconSmall": {
                marginRight: 3
            }
        },
        outlinedPrimary: {
            color: t.palette.primary.main,
            border: "1px solid ".concat(t.palette.primary.main),
            "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                backgroundColor: He(t.palette.primary.main, t.palette.action.hoverOpacity)
            }
        },
        outlinedSecondary: {
            color: t.palette.secondary.main,
            border: "1px solid ".concat(t.palette.secondary.main),
            "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                backgroundColor: He(t.palette.secondary.main, t.palette.action.hoverOpacity)
            }
        },
        avatar: {},
        avatarSmall: {},
        avatarColorPrimary: {},
        avatarColorSecondary: {},
        icon: {
            color: t.palette.type === "light" ? t.palette.grey[700] : t.palette.grey[300],
            marginLeft: 5,
            marginRight: -6
        },
        iconSmall: {
            width: 18,
            height: 18,
            marginLeft: 4,
            marginRight: -4
        },
        iconColorPrimary: {
            color: "inherit"
        },
        iconColorSecondary: {
            color: "inherit"
        },
        label: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingLeft: 12,
            paddingRight: 12,
            whiteSpace: "nowrap"
        },
        labelSmall: {
            paddingLeft: 8,
            paddingRight: 8
        },
        deleteIcon: {
            WebkitTapHighlightColor: "transparent",
            color: o,
            height: 22,
            width: 22,
            cursor: "pointer",
            margin: "0 5px 0 -6px",
            "&:hover": {
                color: He(o, .4)
            }
        },
        deleteIconSmall: {
            height: 16,
            width: 16,
            marginRight: 4,
            marginLeft: -4
        },
        deleteIconColorPrimary: {
            color: He(t.palette.primary.contrastText, .7),
            "&:hover, &:active": {
                color: t.palette.primary.contrastText
            }
        },
        deleteIconColorSecondary: {
            color: He(t.palette.secondary.contrastText, .7),
            "&:hover, &:active": {
                color: t.palette.secondary.contrastText
            }
        },
        deleteIconOutlinedColorPrimary: {
            color: He(t.palette.primary.main, .7),
            "&:hover, &:active": {
                color: t.palette.primary.main
            }
        },
        deleteIconOutlinedColorSecondary: {
            color: He(t.palette.secondary.main, .7),
            "&:hover, &:active": {
                color: t.palette.secondary.main
            }
        }
    }
};

function ei(e) {
    return e.key === "Backspace" || e.key === "Delete"
}
var yl = w.forwardRef(function(t, n) {
    var o = t.avatar,
        r = t.classes,
        s = t.className,
        a = t.clickable,
        c = t.color,
        d = c === void 0 ? "default" : c,
        l = t.component,
        f = t.deleteIcon,
        g = t.disabled,
        b = g === void 0 ? !1 : g,
        v = t.icon,
        y = t.label,
        C = t.onClick,
        p = t.onDelete,
        u = t.onKeyDown,
        m = t.onKeyUp,
        h = t.size,
        x = h === void 0 ? "medium" : h,
        S = t.variant,
        P = S === void 0 ? "default" : S,
        B = ue(t, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]),
        _ = w.useRef(null),
        R = _t(_, n),
        O = function(G) {
            G.stopPropagation(), p && p(G)
        },
        A = function(G) {
            G.currentTarget === G.target && ei(G) && G.preventDefault(), u && u(G)
        },
        I = function(G) {
            G.currentTarget === G.target && (p && ei(G) ? p(G) : G.key === "Escape" && _.current && _.current.blur()), m && m(G)
        },
        j = a !== !1 && C ? !0 : a,
        U = x === "small",
        z = l || (j ? Mr : "div"),
        N = z === Mr ? {
            component: "div"
        } : {},
        q = null;
    if (p) {
        var W = ie(d !== "default" && (P === "default" ? r["deleteIconColor".concat(Ie(d))] : r["deleteIconOutlinedColor".concat(Ie(d))]), U && r.deleteIconSmall);
        q = f && w.isValidElement(f) ? w.cloneElement(f, {
            className: ie(f.props.className, r.deleteIcon, W),
            onClick: O
        }) : w.createElement(vl, {
            className: ie(r.deleteIcon, W),
            onClick: O
        })
    }
    var he = null;
    o && w.isValidElement(o) && (he = w.cloneElement(o, {
        className: ie(r.avatar, o.props.className, U && r.avatarSmall, d !== "default" && r["avatarColor".concat(Ie(d))])
    }));
    var te = null;
    return v && w.isValidElement(v) && (te = w.cloneElement(v, {
        className: ie(r.icon, v.props.className, U && r.iconSmall, d !== "default" && r["iconColor".concat(Ie(d))])
    })), w.createElement(z, Q({
        role: j || p ? "button" : void 0,
        className: ie(r.root, s, d !== "default" && [r["color".concat(Ie(d))], j && r["clickableColor".concat(Ie(d))], p && r["deletableColor".concat(Ie(d))]], P !== "default" && [r.outlined, {
            primary: r.outlinedPrimary,
            secondary: r.outlinedSecondary
        } [d]], b && r.disabled, U && r.sizeSmall, j && r.clickable, p && r.deletable),
        "aria-disabled": b ? !0 : void 0,
        tabIndex: j || p ? 0 : void 0,
        onClick: C,
        onKeyDown: A,
        onKeyUp: I,
        ref: R
    }, N, B), he || te, w.createElement("span", {
        className: ie(r.label, U && r.labelSmall)
    }, y), q)
});
const Na = Qe(xl, {
    name: "MuiChip"
})(yl);

function Cl() {
    var e = document.createElement("div");
    e.style.width = "99px", e.style.height = "99px", e.style.position = "absolute", e.style.top = "-9999px", e.style.overflow = "scroll", document.body.appendChild(e);
    var t = e.offsetWidth - e.clientWidth;
    return document.body.removeChild(e), t
}

function bl(e) {
    var t = Rn(e);
    return t.body === e ? Oc(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}

function Rr(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}

function ti(e) {
    return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0
}

function ri(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [],
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = [t, n].concat(fc(o)),
        a = ["TEMPLATE", "SCRIPT", "STYLE"];
    [].forEach.call(e.children, function(c) {
        c.nodeType === 1 && s.indexOf(c) === -1 && a.indexOf(c.tagName) === -1 && Rr(c, r)
    })
}

function Fn(e, t) {
    var n = -1;
    return e.some(function(o, r) {
        return t(o) ? (n = r, !0) : !1
    }), n
}

function wl(e, t) {
    var n = [],
        o = [],
        r = e.container,
        s;
    if (!t.disableScrollLock) {
        if (bl(r)) {
            var a = Cl();
            n.push({
                value: r.style.paddingRight,
                key: "padding-right",
                el: r
            }), r.style["padding-right"] = "".concat(ti(r) + a, "px"), s = Rn(r).querySelectorAll(".mui-fixed"), [].forEach.call(s, function(f) {
                o.push(f.style.paddingRight), f.style.paddingRight = "".concat(ti(f) + a, "px")
            })
        }
        var c = r.parentElement,
            d = c.nodeName === "HTML" && window.getComputedStyle(c)["overflow-y"] === "scroll" ? c : r;
        n.push({
            value: d.style.overflow,
            key: "overflow",
            el: d
        }), d.style.overflow = "hidden"
    }
    var l = function() {
        s && [].forEach.call(s, function(g, b) {
            o[b] ? g.style.paddingRight = o[b] : g.style.removeProperty("padding-right")
        }), n.forEach(function(g) {
            var b = g.value,
                v = g.el,
                y = g.key;
            b ? v.style.setProperty(y, b) : v.style.removeProperty(y)
        })
    };
    return l
}

function kl(e) {
    var t = [];
    return [].forEach.call(e.children, function(n) {
        n.getAttribute && n.getAttribute("aria-hidden") === "true" && t.push(n)
    }), t
}
var Pl = function() {
    function e() {
        hc(this, e), this.modals = [], this.containers = []
    }
    return pc(e, [{
        key: "add",
        value: function(n, o) {
            var r = this.modals.indexOf(n);
            if (r !== -1) return r;
            r = this.modals.length, this.modals.push(n), n.modalRef && Rr(n.modalRef, !1);
            var s = kl(o);
            ri(o, n.mountNode, n.modalRef, s, !0);
            var a = Fn(this.containers, function(c) {
                return c.container === o
            });
            return a !== -1 ? (this.containers[a].modals.push(n), r) : (this.containers.push({
                modals: [n],
                container: o,
                restore: null,
                hiddenSiblingNodes: s
            }), r)
        }
    }, {
        key: "mount",
        value: function(n, o) {
            var r = Fn(this.containers, function(a) {
                    return a.modals.indexOf(n) !== -1
                }),
                s = this.containers[r];
            s.restore || (s.restore = wl(s, o))
        }
    }, {
        key: "remove",
        value: function(n) {
            var o = this.modals.indexOf(n);
            if (o === -1) return o;
            var r = Fn(this.containers, function(c) {
                    return c.modals.indexOf(n) !== -1
                }),
                s = this.containers[r];
            if (s.modals.splice(s.modals.indexOf(n), 1), this.modals.splice(o, 1), s.modals.length === 0) s.restore && s.restore(), n.modalRef && Rr(n.modalRef, !0), ri(s.container, n.mountNode, n.modalRef, s.hiddenSiblingNodes, !1), this.containers.splice(r, 1);
            else {
                var a = s.modals[s.modals.length - 1];
                a.modalRef && Rr(a.modalRef, !1)
            }
            return o
        }
    }, {
        key: "isTopModal",
        value: function(n) {
            return this.modals.length > 0 && this.modals[this.modals.length - 1] === n
        }
    }]), e
}();

function Sl(e) {
    var t = e.children,
        n = e.disableAutoFocus,
        o = n === void 0 ? !1 : n,
        r = e.disableEnforceFocus,
        s = r === void 0 ? !1 : r,
        a = e.disableRestoreFocus,
        c = a === void 0 ? !1 : a,
        d = e.getDoc,
        l = e.isEnabled,
        f = e.open,
        g = w.useRef(),
        b = w.useRef(null),
        v = w.useRef(null),
        y = w.useRef(),
        C = w.useRef(null),
        p = w.useCallback(function(h) {
            C.current = Lr.findDOMNode(h)
        }, []),
        u = _t(t.ref, p),
        m = w.useRef();
    return w.useEffect(function() {
        m.current = f
    }, [f]), !m.current && f && typeof window < "u" && (y.current = d().activeElement), w.useEffect(function() {
        if (f) {
            var h = Rn(C.current);
            !o && C.current && !C.current.contains(h.activeElement) && (C.current.hasAttribute("tabIndex") || C.current.setAttribute("tabIndex", -1), C.current.focus());
            var x = function() {
                    var _ = C.current;
                    if (_ !== null) {
                        if (!h.hasFocus() || s || !l() || g.current) {
                            g.current = !1;
                            return
                        }
                        C.current && !C.current.contains(h.activeElement) && C.current.focus()
                    }
                },
                S = function(_) {
                    s || !l() || _.keyCode !== 9 || h.activeElement === C.current && (g.current = !0, _.shiftKey ? v.current.focus() : b.current.focus())
                };
            h.addEventListener("focus", x, !0), h.addEventListener("keydown", S, !0);
            var P = setInterval(function() {
                x()
            }, 50);
            return function() {
                clearInterval(P), h.removeEventListener("focus", x, !0), h.removeEventListener("keydown", S, !0), c || (y.current && y.current.focus && y.current.focus(), y.current = null)
            }
        }
    }, [o, s, c, l, f]), w.createElement(w.Fragment, null, w.createElement("div", {
        tabIndex: 0,
        ref: b,
        "data-test": "sentinelStart"
    }), w.cloneElement(t, {
        ref: u
    }), w.createElement("div", {
        tabIndex: 0,
        ref: v,
        "data-test": "sentinelEnd"
    }))
}
var ni = {
        root: {
            zIndex: -1,
            position: "fixed",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent"
        },
        invisible: {
            backgroundColor: "transparent"
        }
    },
    Tl = w.forwardRef(function(t, n) {
        var o = t.invisible,
            r = o === void 0 ? !1 : o,
            s = t.open,
            a = ue(t, ["invisible", "open"]);
        return s ? w.createElement("div", Q({
            "aria-hidden": !0,
            ref: n
        }, a, {
            style: Q({}, ni.root, r ? ni.invisible : {}, a.style)
        })) : null
    });

function Bl(e) {
    return e = typeof e == "function" ? e() : e, Lr.findDOMNode(e)
}

function El(e) {
    return e.children ? e.children.props.hasOwnProperty("in") : !1
}
var _l = new Pl,
    Rl = function(t) {
        return {
            root: {
                position: "fixed",
                zIndex: t.zIndex.modal,
                right: 0,
                bottom: 0,
                top: 0,
                left: 0
            },
            hidden: {
                visibility: "hidden"
            }
        }
    },
    jl = w.forwardRef(function(t, n) {
        var o = Ea(),
            r = _c({
                name: "MuiModal",
                props: Q({}, t),
                theme: o
            }),
            s = r.BackdropComponent,
            a = s === void 0 ? Tl : s,
            c = r.BackdropProps,
            d = r.children,
            l = r.closeAfterTransition,
            f = l === void 0 ? !1 : l,
            g = r.container,
            b = r.disableAutoFocus,
            v = b === void 0 ? !1 : b,
            y = r.disableBackdropClick,
            C = y === void 0 ? !1 : y,
            p = r.disableEnforceFocus,
            u = p === void 0 ? !1 : p,
            m = r.disableEscapeKeyDown,
            h = m === void 0 ? !1 : m,
            x = r.disablePortal,
            S = x === void 0 ? !1 : x,
            P = r.disableRestoreFocus,
            B = P === void 0 ? !1 : P,
            _ = r.disableScrollLock,
            R = _ === void 0 ? !1 : _,
            O = r.hideBackdrop,
            A = O === void 0 ? !1 : O,
            I = r.keepMounted,
            j = I === void 0 ? !1 : I,
            U = r.manager,
            z = U === void 0 ? _l : U,
            N = r.onBackdropClick,
            q = r.onClose,
            W = r.onEscapeKeyDown,
            he = r.onRendered,
            te = r.open,
            ae = ue(r, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]),
            G = w.useState(!0),
            at = G[0],
            mt = G[1],
            De = w.useRef({}),
            we = w.useRef(null),
            gt = w.useRef(null),
            Vt = _t(gt, n),
            Pt = El(r),
            hr = function() {
                return Rn(we.current)
            },
            Dt = function() {
                return De.current.modalRef = gt.current, De.current.mountNode = we.current, De.current
            },
            vt = function() {
                z.mount(Dt(), {
                    disableScrollLock: R
                }), gt.current.scrollTop = 0
            },
            Qt = Ys(function() {
                var et = Bl(g) || hr().body;
                z.add(Dt(), et), gt.current && vt()
            }),
            ct = w.useCallback(function() {
                return z.isTopModal(Dt())
            }, [z]),
            An = Ys(function(et) {
                we.current = et, et && (he && he(), te && ct() ? vt() : Rr(gt.current, !0))
            }),
            It = w.useCallback(function() {
                z.remove(Dt())
            }, [z]);
        if (w.useEffect(function() {
                return function() {
                    It()
                }
            }, [It]), w.useEffect(function() {
                te ? Qt() : (!Pt || !f) && It()
            }, [te, It, Pt, f, Qt]), !j && !te && (!Pt || at)) return null;
        var Pe = function() {
                mt(!1)
            },
            Vr = function() {
                mt(!0), f && It()
            },
            zn = function(xt) {
                xt.target === xt.currentTarget && (N && N(xt), !C && q && q(xt, "backdropClick"))
            },
            dc = function(xt) {
                xt.key !== "Escape" || !ct() || (W && W(xt), h || (xt.stopPropagation(), q && q(xt, "escapeKeyDown")))
            },
            Vs = Rl(o || {
                zIndex: Rc
            }),
            Qr = {};
        return d.props.tabIndex === void 0 && (Qr.tabIndex = d.props.tabIndex || "-1"), Pt && (Qr.onEnter = Xs(Pe, d.props.onEnter), Qr.onExited = Xs(Vr, d.props.onExited)), w.createElement(Ac, {
            ref: An,
            container: g,
            disablePortal: S
        }, w.createElement("div", Q({
            ref: Vt,
            onKeyDown: dc,
            role: "presentation"
        }, ae, {
            style: Q({}, Vs.root, !te && at ? Vs.hidden : {}, ae.style)
        }), A ? null : w.createElement(a, Q({
            open: te,
            onClick: zn
        }, c)), w.createElement(Sl, {
            disableEnforceFocus: u,
            disableAutoFocus: v,
            disableRestoreFocus: B,
            getDoc: hr,
            isEnabled: ct,
            open: te
        }, w.cloneElement(d, Qr))))
    }),
    Ol = function(t) {
        return {
            root: {
                height: 1,
                margin: 0,
                border: "none",
                flexShrink: 0,
                backgroundColor: t.palette.divider
            },
            absolute: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
            },
            inset: {
                marginLeft: 72
            },
            light: {
                backgroundColor: He(t.palette.divider, .08)
            },
            middle: {
                marginLeft: t.spacing(2),
                marginRight: t.spacing(2)
            },
            vertical: {
                height: "100%",
                width: 1
            },
            flexItem: {
                alignSelf: "stretch",
                height: "auto"
            }
        }
    },
    Ml = w.forwardRef(function(t, n) {
        var o = t.absolute,
            r = o === void 0 ? !1 : o,
            s = t.classes,
            a = t.className,
            c = t.component,
            d = c === void 0 ? "hr" : c,
            l = t.flexItem,
            f = l === void 0 ? !1 : l,
            g = t.light,
            b = g === void 0 ? !1 : g,
            v = t.orientation,
            y = v === void 0 ? "horizontal" : v,
            C = t.role,
            p = C === void 0 ? d !== "hr" ? "separator" : void 0 : C,
            u = t.variant,
            m = u === void 0 ? "fullWidth" : u,
            h = ue(t, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);
        return w.createElement(d, Q({
            className: ie(s.root, a, m !== "fullWidth" && s[m], r && s.absolute, f && s.flexItem, b && s.light, y === "vertical" && s.vertical),
            role: p,
            ref: n
        }, h))
    });
const La = Qe(Ol, {
    name: "MuiDivider"
})(Ml);

function Dl(e, t) {
    var n = t.getBoundingClientRect(),
        o;
    if (t.fakeTransform) o = t.fakeTransform;
    else {
        var r = window.getComputedStyle(t);
        o = r.getPropertyValue("-webkit-transform") || r.getPropertyValue("transform")
    }
    var s = 0,
        a = 0;
    if (o && o !== "none" && typeof o == "string") {
        var c = o.split("(")[1].split(")")[0].split(",");
        s = parseInt(c[4], 10), a = parseInt(c[5], 10)
    }
    return e === "left" ? "translateX(".concat(window.innerWidth, "px) translateX(").concat(s - n.left, "px)") : e === "right" ? "translateX(-".concat(n.left + n.width - s, "px)") : e === "up" ? "translateY(".concat(window.innerHeight, "px) translateY(").concat(a - n.top, "px)") : "translateY(-".concat(n.top + n.height - a, "px)")
}

function Jr(e, t) {
    var n = Dl(e, t);
    n && (t.style.webkitTransform = n, t.style.transform = n)
}
var Il = {
        enter: rr.enteringScreen,
        exit: rr.leavingScreen
    },
    $l = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.direction,
            s = r === void 0 ? "down" : r,
            a = t.in,
            c = t.onEnter,
            d = t.onEntered,
            l = t.onEntering,
            f = t.onExit,
            g = t.onExited,
            b = t.onExiting,
            v = t.style,
            y = t.timeout,
            C = y === void 0 ? Il : y,
            p = t.TransitionComponent,
            u = p === void 0 ? ja : p,
            m = ue(t, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]),
            h = Ps(),
            x = w.useRef(null),
            S = w.useCallback(function(N) {
                x.current = Lr.findDOMNode(N)
            }, []),
            P = _t(o.ref, S),
            B = _t(P, n),
            _ = function(q) {
                return function(W) {
                    q && (W === void 0 ? q(x.current) : q(x.current, W))
                }
            },
            R = _(function(N, q) {
                Jr(s, N), Oa(N), c && c(N, q)
            }),
            O = _(function(N, q) {
                var W = wn({
                    timeout: C,
                    style: v
                }, {
                    mode: "enter"
                });
                N.style.webkitTransition = h.transitions.create("-webkit-transform", Q({}, W, {
                    easing: h.transitions.easing.easeOut
                })), N.style.transition = h.transitions.create("transform", Q({}, W, {
                    easing: h.transitions.easing.easeOut
                })), N.style.webkitTransform = "none", N.style.transform = "none", l && l(N, q)
            }),
            A = _(d),
            I = _(b),
            j = _(function(N) {
                var q = wn({
                    timeout: C,
                    style: v
                }, {
                    mode: "exit"
                });
                N.style.webkitTransition = h.transitions.create("-webkit-transform", Q({}, q, {
                    easing: h.transitions.easing.sharp
                })), N.style.transition = h.transitions.create("transform", Q({}, q, {
                    easing: h.transitions.easing.sharp
                })), Jr(s, N), f && f(N)
            }),
            U = _(function(N) {
                N.style.webkitTransition = "", N.style.transition = "", g && g(N)
            }),
            z = w.useCallback(function() {
                x.current && Jr(s, x.current)
            }, [s]);
        return w.useEffect(function() {
            if (!(a || s === "down" || s === "right")) {
                var N = Mc(function() {
                    x.current && Jr(s, x.current)
                });
                return window.addEventListener("resize", N),
                    function() {
                        N.clear(), window.removeEventListener("resize", N)
                    }
            }
        }, [s, a]), w.useEffect(function() {
            a || z()
        }, [a, z]), w.createElement(u, Q({
            nodeRef: x,
            onEnter: R,
            onEntered: A,
            onEntering: O,
            onExit: j,
            onExited: U,
            onExiting: I,
            appear: !0,
            in: a,
            timeout: C
        }, m), function(N, q) {
            return w.cloneElement(o, Q({
                ref: B,
                style: Q({
                    visibility: N === "exited" && !a ? "hidden" : void 0
                }, v, o.props.style)
            }, q))
        })
    }),
    Nl = function(t) {
        return {
            root: {},
            docked: {
                flex: "0 0 auto"
            },
            paper: {
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                flex: "1 0 auto",
                zIndex: t.zIndex.drawer,
                WebkitOverflowScrolling: "touch",
                position: "fixed",
                top: 0,
                outline: 0
            },
            paperAnchorLeft: {
                left: 0,
                right: "auto"
            },
            paperAnchorRight: {
                left: "auto",
                right: 0
            },
            paperAnchorTop: {
                top: 0,
                left: 0,
                bottom: "auto",
                right: 0,
                height: "auto",
                maxHeight: "100%"
            },
            paperAnchorBottom: {
                top: "auto",
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%"
            },
            paperAnchorDockedLeft: {
                borderRight: "1px solid ".concat(t.palette.divider)
            },
            paperAnchorDockedTop: {
                borderBottom: "1px solid ".concat(t.palette.divider)
            },
            paperAnchorDockedRight: {
                borderLeft: "1px solid ".concat(t.palette.divider)
            },
            paperAnchorDockedBottom: {
                borderTop: "1px solid ".concat(t.palette.divider)
            },
            modal: {}
        }
    },
    Aa = {
        left: "right",
        right: "left",
        top: "down",
        bottom: "up"
    };

function Ll(e) {
    return ["left", "right"].indexOf(e) !== -1
}

function Al(e, t) {
    return e.direction === "rtl" && Ll(t) ? Aa[t] : t
}
var zl = {
        enter: rr.enteringScreen,
        exit: rr.leavingScreen
    },
    Wl = w.forwardRef(function(t, n) {
        var o = t.anchor,
            r = o === void 0 ? "left" : o,
            s = t.BackdropProps,
            a = t.children,
            c = t.classes,
            d = t.className,
            l = t.elevation,
            f = l === void 0 ? 16 : l,
            g = t.ModalProps;
        g = g === void 0 ? {} : g;
        var b = g.BackdropProps,
            v = ue(g, ["BackdropProps"]),
            y = t.onClose,
            C = t.open,
            p = C === void 0 ? !1 : C,
            u = t.PaperProps,
            m = u === void 0 ? {} : u,
            h = t.SlideProps,
            x = t.TransitionComponent,
            S = x === void 0 ? $l : x,
            P = t.transitionDuration,
            B = P === void 0 ? zl : P,
            _ = t.variant,
            R = _ === void 0 ? "temporary" : _,
            O = ue(t, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]),
            A = Ps(),
            I = w.useRef(!1);
        w.useEffect(function() {
            I.current = !0
        }, []);
        var j = Al(A, r),
            U = w.createElement(tl, Q({
                elevation: R === "temporary" ? f : 0,
                square: !0
            }, m, {
                className: ie(c.paper, c["paperAnchor".concat(Ie(j))], m.className, R !== "temporary" && c["paperAnchorDocked".concat(Ie(j))])
            }), a);
        if (R === "permanent") return w.createElement("div", Q({
            className: ie(c.root, c.docked, d),
            ref: n
        }, O), U);
        var z = w.createElement(S, Q({
            in: p,
            direction: Aa[j],
            timeout: B,
            appear: I.current
        }, h), U);
        return R === "persistent" ? w.createElement("div", Q({
            className: ie(c.root, c.docked, d),
            ref: n
        }, O), z) : w.createElement(jl, Q({
            BackdropProps: Q({}, s, b, {
                transitionDuration: B
            }),
            BackdropComponent: ll,
            className: ie(c.root, c.modal, d),
            open: p,
            onClose: y,
            ref: n
        }, O, v), z)
    });
const Fl = Qe(Nl, {
    name: "MuiDrawer",
    flip: !1
})(Wl);
var Zt = w.createContext({}),
    Ul = {
        root: {
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "relative"
        },
        padding: {
            paddingTop: 8,
            paddingBottom: 8
        },
        dense: {},
        subheader: {
            paddingTop: 0
        }
    },
    ql = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.classes,
            s = t.className,
            a = t.component,
            c = a === void 0 ? "ul" : a,
            d = t.dense,
            l = d === void 0 ? !1 : d,
            f = t.disablePadding,
            g = f === void 0 ? !1 : f,
            b = t.subheader,
            v = ue(t, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]),
            y = w.useMemo(function() {
                return {
                    dense: l
                }
            }, [l]);
        return w.createElement(Zt.Provider, {
            value: y
        }, w.createElement(c, Q({
            className: ie(r.root, s, l && r.dense, !g && r.padding, b && r.subheader),
            ref: n
        }, v), b, o))
    });
const oi = Qe(Ul, {
    name: "MuiList"
})(ql);
var Gl = function(t) {
        return {
            root: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "left",
                paddingTop: 8,
                paddingBottom: 8,
                "&$focusVisible": {
                    backgroundColor: t.palette.action.selected
                },
                "&$selected, &$selected:hover": {
                    backgroundColor: t.palette.action.selected
                },
                "&$disabled": {
                    opacity: .5
                }
            },
            container: {
                position: "relative"
            },
            focusVisible: {},
            dense: {
                paddingTop: 4,
                paddingBottom: 4
            },
            alignItemsFlexStart: {
                alignItems: "flex-start"
            },
            disabled: {},
            divider: {
                borderBottom: "1px solid ".concat(t.palette.divider),
                backgroundClip: "padding-box"
            },
            gutters: {
                paddingLeft: 16,
                paddingRight: 16
            },
            button: {
                transition: t.transitions.create("background-color", {
                    duration: t.transitions.duration.shortest
                }),
                "&:hover": {
                    textDecoration: "none",
                    backgroundColor: t.palette.action.hover,
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                }
            },
            secondaryAction: {
                paddingRight: 48
            },
            selected: {}
        }
    },
    Hl = typeof window > "u" ? w.useEffect : w.useLayoutEffect,
    Vl = w.forwardRef(function(t, n) {
        var o = t.alignItems,
            r = o === void 0 ? "center" : o,
            s = t.autoFocus,
            a = s === void 0 ? !1 : s,
            c = t.button,
            d = c === void 0 ? !1 : c,
            l = t.children,
            f = t.classes,
            g = t.className,
            b = t.component,
            v = t.ContainerComponent,
            y = v === void 0 ? "li" : v,
            C = t.ContainerProps;
        C = C === void 0 ? {} : C;
        var p = C.className,
            u = ue(C, ["className"]),
            m = t.dense,
            h = m === void 0 ? !1 : m,
            x = t.disabled,
            S = x === void 0 ? !1 : x,
            P = t.disableGutters,
            B = P === void 0 ? !1 : P,
            _ = t.divider,
            R = _ === void 0 ? !1 : _,
            O = t.focusVisibleClassName,
            A = t.selected,
            I = A === void 0 ? !1 : A,
            j = ue(t, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]),
            U = w.useContext(Zt),
            z = {
                dense: h || U.dense || !1,
                alignItems: r
            },
            N = w.useRef(null);
        Hl(function() {
            a && N.current && N.current.focus()
        }, [a]);
        var q = w.Children.toArray(l),
            W = q.length && Dc(q[q.length - 1], ["ListItemSecondaryAction"]),
            he = w.useCallback(function(at) {
                N.current = Lr.findDOMNode(at)
            }, []),
            te = _t(he, n),
            ae = Q({
                className: ie(f.root, g, z.dense && f.dense, !B && f.gutters, R && f.divider, S && f.disabled, d && f.button, r !== "center" && f.alignItemsFlexStart, W && f.secondaryAction, I && f.selected),
                disabled: S
            }, j),
            G = b || "li";
        return d && (ae.component = b || "div", ae.focusVisibleClassName = ie(f.focusVisible, O), G = Mr), W ? (G = !ae.component && !b ? "div" : G, y === "li" && (G === "li" ? G = "div" : ae.component === "li" && (ae.component = "div")), w.createElement(Zt.Provider, {
            value: z
        }, w.createElement(y, Q({
            className: ie(f.container, p),
            ref: te
        }, u), w.createElement(G, ae, q), q.pop()))) : w.createElement(Zt.Provider, {
            value: z
        }, w.createElement(G, Q({
            ref: te
        }, ae), q))
    });
const Un = Qe(Gl, {
    name: "MuiListItem"
})(Vl);
var Ql = function(t) {
        return {
            root: {
                minWidth: 56,
                color: t.palette.action.active,
                flexShrink: 0,
                display: "inline-flex"
            },
            alignItemsFlexStart: {
                marginTop: 8
            }
        }
    },
    Yl = w.forwardRef(function(t, n) {
        var o = t.classes,
            r = t.className,
            s = ue(t, ["classes", "className"]),
            a = w.useContext(Zt);
        return w.createElement("div", Q({
            className: ie(o.root, r, a.alignItems === "flex-start" && o.alignItemsFlexStart),
            ref: n
        }, s))
    });
const si = Qe(Ql, {
    name: "MuiListItemIcon"
})(Yl);
var Xl = {
        root: {
            flex: "1 1 auto",
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
        },
        multiline: {
            marginTop: 6,
            marginBottom: 6
        },
        dense: {},
        inset: {
            paddingLeft: 56
        },
        primary: {},
        secondary: {}
    },
    Jl = w.forwardRef(function(t, n) {
        var o = t.children,
            r = t.classes,
            s = t.className,
            a = t.disableTypography,
            c = a === void 0 ? !1 : a,
            d = t.inset,
            l = d === void 0 ? !1 : d,
            f = t.primary,
            g = t.primaryTypographyProps,
            b = t.secondary,
            v = t.secondaryTypographyProps,
            y = ue(t, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]),
            C = w.useContext(Zt),
            p = C.dense,
            u = f ?? o;
        u != null && u.type !== Xr && !c && (u = w.createElement(Xr, Q({
            variant: p ? "body2" : "body1",
            className: r.primary,
            component: "span",
            display: "block"
        }, g), u));
        var m = b;
        return m != null && m.type !== Xr && !c && (m = w.createElement(Xr, Q({
            variant: "body2",
            className: r.secondary,
            color: "textSecondary",
            display: "block"
        }, v), m)), w.createElement("div", Q({
            className: ie(r.root, s, p && r.dense, l && r.inset, u && m && r.multiline),
            ref: n
        }, y), u, m)
    });
const qn = Qe(Xl, {
    name: "MuiListItemText"
})(Jl);
var Kl = Object.defineProperty,
    Ut = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && Kl(t, n, r), r
    };
class jt {
    constructor() {
        this.balance = 0, this.maxBalance = 0, this.balanceChangeIfCorrect = 1, this.balanceChangeIfIncorrect = -1, this.incomeMultiplier = 1, this.streakAmount = 0, this.customColor = "", Be(this)
    }
}
Ut([E], jt.prototype, "balance");
Ut([E], jt.prototype, "maxBalance");
Ut([E], jt.prototype, "balanceChangeIfCorrect");
Ut([E], jt.prototype, "balanceChangeIfIncorrect");
Ut([E], jt.prototype, "incomeMultiplier");
Ut([E], jt.prototype, "streakAmount");
Ut([E], jt.prototype, "customColor");
var Zl = Object.defineProperty,
    We = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && Zl(t, n, r), r
    };
class Oe {
    constructor() {
        this.game = null, this.client = null, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.hasLeftRoom = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, Be(this)
    }
}
We([E], Oe.prototype, "game");
We([E], Oe.prototype, "client");
We([E], Oe.prototype, "findingServerForGame");
We([E], Oe.prototype, "errorFindingServerForGame");
We([E], Oe.prototype, "attemptingToConnect");
We([E], Oe.prototype, "hasConnected");
We([E], Oe.prototype, "connected");
We([E], Oe.prototype, "connectionError");
We([E], Oe.prototype, "hasLeftRoom");
We([E], Oe.prototype, "hasJoinedRoom");
We([E], Oe.prototype, "joinedRoom");
We([E], Oe.prototype, "attemptingToJoinRoom");
We([E], Oe.prototype, "errorJoiningRoom");
We([E], Oe.prototype, "roomError");
var ed = Object.defineProperty,
    za = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && ed(t, n, r), r
    };
class Ts {
    constructor() {
        this.defendingHomebase = null, this.lava = null, Be(this)
    }
}
za([E], Ts.prototype, "defendingHomebase");
za([E], Ts.prototype, "lava");
class td {}
var rd = Object.defineProperty,
    nd = Object.getOwnPropertyDescriptor,
    ye = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? nd(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = (o ? a(t, n, r) : a(r)) || r);
        return o && r && rd(t, n, r), r
    };
class pe {
    constructor() {
        this.type = ws.live, this.goal = {
            type: Pc.time,
            value: 10
        }, this.specialGameType = E.array(), this.group = "", this.currency = "$", this.language = "en", this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.enablePowerupRNGAnimation = !1, this.music = !0, this.modeOptions = {}, this.setGameOptions = t => {
            Object.keys(t).forEach(n => {
                this[n] !== null && (n === "specialGameType" ? this.specialGameType.replace(t.specialGameType) : this[n] = t[n])
            })
        }, Be(this)
    }
    get formattedGameOptions() {
        return ka(this)
    }
}
ye([E], pe.prototype, "type", 2);
ye([E], pe.prototype, "goal", 2);
ye([E], pe.prototype, "specialGameType", 2);
ye([E], pe.prototype, "group", 2);
ye([E], pe.prototype, "currency", 2);
ye([E], pe.prototype, "language", 2);
ye([E], pe.prototype, "startingCash", 2);
ye([E], pe.prototype, "handicap", 2);
ye([E], pe.prototype, "clapping", 2);
ye([E], pe.prototype, "powerups", 2);
ye([E], pe.prototype, "themes", 2);
ye([E], pe.prototype, "cleanPowerupsOnly", 2);
ye([E], pe.prototype, "allowGoogleTranslate", 2);
ye([E], pe.prototype, "enablePowerupRNGAnimation", 2);
ye([E], pe.prototype, "music", 2);
ye([E], pe.prototype, "modeOptions", 2);
ye([or.bound], pe.prototype, "setGameOptions", 2);
ye([xs], pe.prototype, "formattedGameOptions", 1);
var od = Object.defineProperty,
    ft = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && od(t, n, r), r
    };
class ot {
    constructor() {
        this.connected = !1, this.connectionError = !1, this.gameStatus = null, this.gameCode = null, this.players = E.array(), this.teams = E.array(), this.nonDismissMessage = {
            message: "",
            title: "",
            link: "",
            buttonText: ""
        }, this.thanosValues = null, this.news = E.array([]), Be(this)
    }
}
ft([E], ot.prototype, "connected");
ft([E], ot.prototype, "connectionError");
ft([E], ot.prototype, "gameStatus");
ft([E], ot.prototype, "gameCode");
ft([E], ot.prototype, "players");
ft([E], ot.prototype, "teams");
ft([E], ot.prototype, "nonDismissMessage");
ft([E], ot.prototype, "thanosValues");
ft([E], ot.prototype, "defendingHomebaseResults");
ft([E], ot.prototype, "news");
const At = "/play",
    sd = At + "/shop",
    L = {
        join: At + "/join",
        waiting: At + "/waiting",
        gameOver: At + "/results",
        questions: At + "/questions",
        team: At + "/team",
        shop: sd,
        upgrade: At + "/upgrade",
        nonDismissMessage: "/message",
        imposterMode: "/imposter-mode",
        drawMode: "/draw-mode",
        pardyMode: "/pardy-mode"
    };
var id = Object.defineProperty,
    ad = Object.getOwnPropertyDescriptor,
    ht = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? ad(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = (o ? a(t, n, r) : a(r)) || r);
        return o && r && id(t, n, r), r
    },
    me = (e => (e.lava = "lava", e.defendingHomebase = "defendingHomebase", e.upgrades = "upgrades", e.powerups = "powerups", e.themes = "themes", e.powerupsNonMusic = "powerupsNonMusic", e.powerupsMusic = "powerupsMusic", e))(me || {});
let st = class {
    constructor() {
        this.currentRoute = L.join, this.canChangeRoute = !0, this.drawerOpen = !1, this.settingsOpen = !1, this.leaderboardDrawerOpen = !1, this.currentShopTab = "upgrades", this.powerupRNGAnimationDone = !1, this.visitedPowerupSection = !1, this.attackModal = {
            open: !1,
            powerup: ""
        }, Be(this)
    }
    changeRoute(t) {
        this.currentRoute = t
    }
};
ht([E], st.prototype, "currentRoute", 2);
ht([E], st.prototype, "canChangeRoute", 2);
ht([E], st.prototype, "drawerOpen", 2);
ht([E], st.prototype, "settingsOpen", 2);
ht([E], st.prototype, "leaderboardDrawerOpen", 2);
ht([E], st.prototype, "currentShopTab", 2);
ht([E], st.prototype, "powerupRNGAnimationDone", 2);
ht([E], st.prototype, "visitedPowerupSection", 2);
ht([E], st.prototype, "attackModal", 2);
ht([or.bound], st.prototype, "changeRoute", 1);
var cd = Object.defineProperty,
    ld = Object.getOwnPropertyDescriptor,
    Ye = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? ld(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = (o ? a(t, n, r) : a(r)) || r);
        return o && r && cd(t, n, r), r
    };
let Fe = class {
    constructor() {
        this.availablePowerups = E.array(), this.disabledPowerups = E.array(), this.purchasedPowerups = E.array(), this.usedPowerups = E.array(), this.personalActivePowerups = E.array(), this.teamActivePowerups = E.array(), this.personalAppliedPowerups = E.array(), this.teamAppliedPowerups = E.array(), this.hasShownHelperModal = !1, this.screenAttack = {
            powerupName: "",
            attackerName: "",
            fullScreen: !1
        }, this.linkPartnerName = "", Be(this)
    }
    get activePowerups() {
        return Le.uniq(this.personalActivePowerups.concat(this.teamActivePowerups))
    }
    get appliedPowerups() {
        return Le.uniq(this.personalAppliedPowerups.concat(this.teamAppliedPowerups))
    }
};
Ye([E], Fe.prototype, "availablePowerups", 2);
Ye([E], Fe.prototype, "disabledPowerups", 2);
Ye([E], Fe.prototype, "purchasedPowerups", 2);
Ye([E], Fe.prototype, "usedPowerups", 2);
Ye([E], Fe.prototype, "personalActivePowerups", 2);
Ye([E], Fe.prototype, "teamActivePowerups", 2);
Ye([E], Fe.prototype, "personalAppliedPowerups", 2);
Ye([E], Fe.prototype, "teamAppliedPowerups", 2);
Ye([xs], Fe.prototype, "activePowerups", 1);
Ye([xs], Fe.prototype, "appliedPowerups", 1);
Ye([E], Fe.prototype, "hasShownHelperModal", 2);
Ye([E], Fe.prototype, "screenAttack", 2);
Ye([E], Fe.prototype, "linkPartnerName", 2);
var Je = {},
    mr = {},
    Kr = {
        exports: {}
    };

function Wa() {
    var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
    e != null && this.setState(e)
}

function Fa(e) {
    function t(n) {
        var o = this.constructor.getDerivedStateFromProps(e, n);
        return o ?? null
    }
    this.setState(t.bind(this))
}

function Ua(e, t) {
    try {
        var n = this.props,
            o = this.state;
        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o)
    } finally {
        this.props = n, this.state = o
    }
}
Wa.__suppressDeprecationWarning = !0;
Fa.__suppressDeprecationWarning = !0;
Ua.__suppressDeprecationWarning = !0;

function dd(e) {
    var t = e.prototype;
    if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
    if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function") return e;
    var n = null,
        o = null,
        r = null;
    if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? o = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (o = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? r = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (r = "UNSAFE_componentWillUpdate"), n !== null || o !== null || r !== null) {
        var s = e.displayName || e.name,
            a = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + s + " uses " + a + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (o !== null ? `
  ` + o : "") + (r !== null ? `
  ` + r : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)
    }
    if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Wa, t.componentWillReceiveProps = Fa), typeof t.getSnapshotBeforeUpdate == "function") {
        if (typeof t.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        t.componentWillUpdate = Ua;
        var c = t.componentDidUpdate;
        t.componentDidUpdate = function(l, f, g) {
            var b = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : g;
            c.call(this, l, f, b)
        }
    }
    return e
}
const ud = Object.freeze(Object.defineProperty({
        __proto__: null,
        polyfill: dd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qa = mc(ud);
var Nt = {},
    ii;

function pd() {
    if (ii) return Nt;
    ii = 1, Nt.__esModule = !0, Nt.getChildMapping = t, Nt.mergeChildMappings = n, Nt.getInitialChildMapping = r, Nt.getNextChildMapping = s;
    var e = ze();

    function t(a, c) {
        var d = function(g) {
                return c && (0, e.isValidElement)(g) ? c(g) : g
            },
            l = Object.create(null);
        return a && e.Children.map(a, function(f) {
            return f
        }).forEach(function(f) {
            l[f.key] = d(f)
        }), l
    }

    function n(a, c) {
        a = a || {}, c = c || {};

        function d(p) {
            return p in c ? c[p] : a[p]
        }
        var l = Object.create(null),
            f = [];
        for (var g in a) g in c ? f.length && (l[g] = f, f = []) : f.push(g);
        var b, v = {};
        for (var y in c) {
            if (l[y])
                for (b = 0; b < l[y].length; b++) {
                    var C = l[y][b];
                    v[l[y][b]] = d(C)
                }
            v[y] = d(y)
        }
        for (b = 0; b < f.length; b++) v[f[b]] = d(f[b]);
        return v
    }

    function o(a, c, d) {
        return d[c] != null ? d[c] : a.props[c]
    }

    function r(a, c) {
        return t(a.children, function(d) {
            return (0, e.cloneElement)(d, {
                onExited: c.bind(null, d),
                in: !0,
                appear: o(d, "appear", a),
                enter: o(d, "enter", a),
                exit: o(d, "exit", a)
            })
        })
    }

    function s(a, c, d) {
        var l = t(a.children),
            f = n(c, l);
        return Object.keys(f).forEach(function(g) {
            var b = f[g];
            if ((0, e.isValidElement)(b)) {
                var v = g in c,
                    y = g in l,
                    C = c[g],
                    p = (0, e.isValidElement)(C) && !C.props.in;
                y && (!v || p) ? f[g] = (0, e.cloneElement)(b, {
                    onExited: d.bind(null, b),
                    in: !0,
                    exit: o(b, "exit", a),
                    enter: o(b, "enter", a)
                }) : !y && v && !p ? f[g] = (0, e.cloneElement)(b, {
                    in: !1
                }) : y && v && (0, e.isValidElement)(C) && (f[g] = (0, e.cloneElement)(b, {
                    onExited: d.bind(null, b),
                    in: C.props.in,
                    exit: o(b, "exit", a),
                    enter: o(b, "enter", a)
                }))
            }
        }), f
    }
    return Nt
}
var ai;

function Bs() {
    return ai || (ai = 1, function(e, t) {
        t.__esModule = !0, t.default = void 0;
        var n = a(kt()),
            o = a(ze()),
            r = qa,
            s = pd();

        function a(C) {
            return C && C.__esModule ? C : {
                default: C
            }
        }

        function c(C, p) {
            if (C == null) return {};
            var u = {},
                m = Object.keys(C),
                h, x;
            for (x = 0; x < m.length; x++) h = m[x], !(p.indexOf(h) >= 0) && (u[h] = C[h]);
            return u
        }

        function d() {
            return d = Object.assign || function(C) {
                for (var p = 1; p < arguments.length; p++) {
                    var u = arguments[p];
                    for (var m in u) Object.prototype.hasOwnProperty.call(u, m) && (C[m] = u[m])
                }
                return C
            }, d.apply(this, arguments)
        }

        function l(C, p) {
            C.prototype = Object.create(p.prototype), C.prototype.constructor = C, C.__proto__ = p
        }

        function f(C) {
            if (C === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return C
        }
        var g = Object.values || function(C) {
                return Object.keys(C).map(function(p) {
                    return C[p]
                })
            },
            b = {
                component: "div",
                childFactory: function(p) {
                    return p
                }
            },
            v = function(C) {
                l(p, C);

                function p(m, h) {
                    var x;
                    x = C.call(this, m, h) || this;
                    var S = x.handleExited.bind(f(f(x)));
                    return x.state = {
                        handleExited: S,
                        firstRender: !0
                    }, x
                }
                var u = p.prototype;
                return u.getChildContext = function() {
                    return {
                        transitionGroup: {
                            isMounting: !this.appeared
                        }
                    }
                }, u.componentDidMount = function() {
                    this.appeared = !0, this.mounted = !0
                }, u.componentWillUnmount = function() {
                    this.mounted = !1
                }, p.getDerivedStateFromProps = function(h, x) {
                    var S = x.children,
                        P = x.handleExited,
                        B = x.firstRender;
                    return {
                        children: B ? (0, s.getInitialChildMapping)(h, P) : (0, s.getNextChildMapping)(h, S, P),
                        firstRender: !1
                    }
                }, u.handleExited = function(h, x) {
                    var S = (0, s.getChildMapping)(this.props.children);
                    h.key in S || (h.props.onExited && h.props.onExited(x), this.mounted && this.setState(function(P) {
                        var B = d({}, P.children);
                        return delete B[h.key], {
                            children: B
                        }
                    }))
                }, u.render = function() {
                    var h = this.props,
                        x = h.component,
                        S = h.childFactory,
                        P = c(h, ["component", "childFactory"]),
                        B = g(this.state.children).map(S);
                    return delete P.appear, delete P.enter, delete P.exit, x === null ? B : o.default.createElement(x, P, B)
                }, p
            }(o.default.Component);
        v.childContextTypes = {
            transitionGroup: n.default.object.isRequired
        }, v.propTypes = {}, v.defaultProps = b;
        var y = (0, r.polyfill)(v);
        t.default = y, e.exports = t.default
    }(Kr, Kr.exports)), Kr.exports
}
var gr = {},
    vr = {},
    yt = {},
    ci;

function Wr() {
    if (ci) return yt;
    ci = 1, yt.__esModule = !0, yt.ACTION = yt.TYPE = yt.POSITION = void 0;
    var e = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center"
    };
    yt.POSITION = e;
    var t = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error",
        DEFAULT: "default"
    };
    yt.TYPE = t;
    var n = {
        SHOW: 0,
        CLEAR: 1,
        DID_MOUNT: 2,
        WILL_UNMOUNT: 3,
        ON_CHANGE: 4
    };
    return yt.ACTION = n, yt
}
var Ct = {},
    li;

function Es() {
    if (li) return Ct;
    li = 1, Ct.__esModule = !0, Ct.isValidDelay = t, Ct.objectValues = n, Ct.falseOrElement = Ct.falseOrDelay = void 0;
    var e = ze();

    function t(a) {
        return typeof a == "number" && !isNaN(a) && a > 0
    }

    function n(a) {
        return Object.keys(a).map(function(c) {
            return a[c]
        })
    }

    function o(a) {
        return a.isRequired = function(c, d, l) {
            var f = c[d];
            if (typeof f > "u") return new Error("The prop " + d + ` is marked as required in 
      ` + l + ", but its value is undefined.");
            a(c, d, l)
        }, a
    }
    var r = o(function(a, c, d) {
        var l = a[c];
        return l !== !1 && !t(l) ? new Error(d + " expect " + c + ` 
      to be a valid Number > 0 or equal to false. ` + l + " given.") : null
    });
    Ct.falseOrDelay = r;
    var s = o(function(a, c, d) {
        var l = a[c];
        return l !== !1 && !(0, e.isValidElement)(l) ? new Error(d + " expect " + c + ` 
      to be a valid react element or equal to false. ` + l + " given.") : null
    });
    return Ct.falseOrElement = s, Ct
}
var di;

function fd() {
    if (di) return vr;
    di = 1, vr.__esModule = !0, vr.default = void 0;
    var e = s(ze()),
        t = s(kt()),
        n = s(ys()),
        o = Wr(),
        r = Es();

    function s(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }

    function a() {
        return a = Object.assign || function(l) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (l[b] = g[b])
            }
            return l
        }, a.apply(this, arguments)
    }

    function c(l) {
        var f, g = l.delay,
            b = l.isRunning,
            v = l.closeToast,
            y = l.type,
            C = l.hide,
            p = l.className,
            u = l.style,
            m = l.controlledProgress,
            h = l.progress,
            x = l.isProgressDone,
            S = l.rtl,
            P = a({}, u, {
                animationDuration: g + "ms",
                animationPlayState: b ? "running" : "paused",
                opacity: C ? 0 : 1,
                transform: m ? "scaleX(" + h + ")" : null
            }),
            B = (0, n.default)("Toastify__progress-bar", m ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar--" + y, {
                "Toastify__progress-bar--rtl": S
            }, p),
            _ = (f = {}, f[m && x ? "onTransitionEnd" : "onAnimationEnd"] = m && !x ? null : v, f);
        return e.default.createElement("div", a({
            className: B,
            style: P
        }, _))
    }
    c.propTypes = {
        delay: r.falseOrDelay.isRequired,
        isRunning: t.default.bool.isRequired,
        closeToast: t.default.func.isRequired,
        rtl: t.default.bool.isRequired,
        type: t.default.string,
        hide: t.default.bool,
        className: t.default.oneOfType([t.default.string, t.default.object]),
        progress: t.default.number,
        controlledProgress: t.default.bool,
        isProgressDone: t.default.bool
    }, c.defaultProps = {
        type: o.TYPE.DEFAULT,
        hide: !1
    };
    var d = c;
    return vr.default = d, vr
}
var ui;

function hd() {
    if (ui) return gr;
    ui = 1, gr.__esModule = !0, gr.default = void 0;
    var e = c(ze()),
        t = a(kt()),
        n = a(ys()),
        o = a(fd()),
        r = Wr(),
        s = Es();

    function a(C) {
        return C && C.__esModule ? C : {
            default: C
        }
    }

    function c(C) {
        if (C && C.__esModule) return C;
        var p = {};
        if (C != null) {
            for (var u in C)
                if (Object.prototype.hasOwnProperty.call(C, u)) {
                    var m = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(C, u) : {};
                    m.get || m.set ? Object.defineProperty(p, u, m) : p[u] = C[u]
                }
        }
        return p.default = C, p
    }

    function d() {
        return d = Object.assign || function(C) {
            for (var p = 1; p < arguments.length; p++) {
                var u = arguments[p];
                for (var m in u) Object.prototype.hasOwnProperty.call(u, m) && (C[m] = u[m])
            }
            return C
        }, d.apply(this, arguments)
    }

    function l(C, p) {
        C.prototype = Object.create(p.prototype), C.prototype.constructor = C, C.__proto__ = p
    }

    function f(C) {
        return C.targetTouches && C.targetTouches.length >= 1 ? C.targetTouches[0].clientX : C.clientX
    }

    function g(C) {
        return C.targetTouches && C.targetTouches.length >= 1 ? C.targetTouches[0].clientY : C.clientY
    }
    var b = function() {},
        v = function(C) {
            l(p, C);

            function p() {
                for (var m, h = arguments.length, x = new Array(h), S = 0; S < h; S++) x[S] = arguments[S];
                return m = C.call.apply(C, [this].concat(x)) || this, m.state = {
                    isRunning: !0,
                    preventExitTransition: !1
                }, m.flag = {
                    canCloseOnClick: !0,
                    canDrag: !1
                }, m.drag = {
                    start: 0,
                    x: 0,
                    y: 0,
                    deltaX: 0,
                    removalDistance: 0
                }, m.ref = null, m.pauseToast = function() {
                    m.props.autoClose && m.setState({
                        isRunning: !1
                    })
                }, m.playToast = function() {
                    m.props.autoClose && m.setState({
                        isRunning: !0
                    })
                }, m.onDragStart = function(P) {
                    m.flag.canCloseOnClick = !0, m.flag.canDrag = !0, m.ref.style.transition = "", m.drag.start = m.drag.x = f(P.nativeEvent), m.drag.removalDistance = m.ref.offsetWidth * (m.props.draggablePercent / 100)
                }, m.onDragMove = function(P) {
                    m.flag.canDrag && (m.state.isRunning && m.pauseToast(), m.drag.x = f(P), m.drag.deltaX = m.drag.x - m.drag.start, m.drag.start !== m.drag.x && (m.flag.canCloseOnClick = !1), m.ref.style.transform = "translateX(" + m.drag.deltaX + "px)", m.ref.style.opacity = 1 - Math.abs(m.drag.deltaX / m.drag.removalDistance))
                }, m.onDragEnd = function(P) {
                    if (m.flag.canDrag) {
                        if (m.flag.canDrag = !1, Math.abs(m.drag.deltaX) > m.drag.removalDistance) {
                            m.setState({
                                preventExitTransition: !0
                            }, m.props.closeToast);
                            return
                        }
                        m.drag.y = g(P), m.ref.style.transition = "transform 0.2s, opacity 0.2s", m.ref.style.transform = "translateX(0)", m.ref.style.opacity = 1
                    }
                }, m.onDragTransitionEnd = function() {
                    var P = m.ref.getBoundingClientRect(),
                        B = P.top,
                        _ = P.bottom,
                        R = P.left,
                        O = P.right;
                    m.props.pauseOnHover && m.drag.x >= R && m.drag.x <= O && m.drag.y >= B && m.drag.y <= _ ? m.pauseToast() : m.playToast()
                }, m
            }
            var u = p.prototype;
            return u.componentDidMount = function() {
                this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents()
            }, u.componentDidUpdate = function(h) {
                h.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), h.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents())
            }, u.componentWillUnmount = function() {
                this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents()
            }, u.bindFocusEvents = function() {
                window.addEventListener("focus", this.playToast), window.addEventListener("blur", this.pauseToast)
            }, u.unbindFocusEvents = function() {
                window.removeEventListener("focus", this.playToast), window.removeEventListener("blur", this.pauseToast)
            }, u.bindDragEvents = function() {
                document.addEventListener("mousemove", this.onDragMove), document.addEventListener("mouseup", this.onDragEnd), document.addEventListener("touchmove", this.onDragMove), document.addEventListener("touchend", this.onDragEnd)
            }, u.unbindDragEvents = function() {
                document.removeEventListener("mousemove", this.onDragMove), document.removeEventListener("mouseup", this.onDragEnd), document.removeEventListener("touchmove", this.onDragMove), document.removeEventListener("touchend", this.onDragEnd)
            }, u.render = function() {
                var h = this,
                    x = this.props,
                    S = x.closeButton,
                    P = x.children,
                    B = x.autoClose,
                    _ = x.pauseOnHover,
                    R = x.closeOnClick,
                    O = x.type,
                    A = x.hideProgressBar,
                    I = x.closeToast,
                    j = x.transition,
                    U = x.position,
                    z = x.onExited,
                    N = x.className,
                    q = x.bodyClassName,
                    W = x.progressClassName,
                    he = x.progressStyle,
                    te = x.updateId,
                    ae = x.role,
                    G = x.progress,
                    at = x.isProgressDone,
                    mt = x.rtl,
                    De = {
                        className: (0, n.default)("Toastify__toast", "Toastify__toast--" + O, {
                            "Toastify__toast--rtl": mt
                        }, N)
                    };
                B && _ && (De.onMouseEnter = this.pauseToast, De.onMouseLeave = this.playToast), R && (De.onClick = function() {
                    return h.flag.canCloseOnClick && I()
                });
                var we = parseFloat(G) === G;
                return e.default.createElement(j, {
                    in: this.props.in,
                    appear: !0,
                    unmountOnExit: !0,
                    onExited: z,
                    position: U,
                    preventExitTransition: this.state.preventExitTransition
                }, e.default.createElement("div", d({}, De, {
                    ref: function(Vt) {
                        return h.ref = Vt
                    },
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    onTransitionEnd: this.onDragTransitionEnd
                }), e.default.createElement("div", d({}, this.props.in && {
                    role: ae
                }, {
                    className: (0, n.default)("Toastify__toast-body", q)
                }), P), S && S, (B || we) && e.default.createElement(o.default, d({}, te && !we ? {
                    key: "pb-" + te
                } : {}, {
                    rtl: mt,
                    delay: B,
                    isRunning: this.state.isRunning,
                    closeToast: I,
                    hide: A,
                    type: O,
                    style: he,
                    className: W,
                    controlledProgress: we,
                    isProgressDone: at,
                    progress: G
                }))))
            }, p
        }(e.Component);
    v.propTypes = {
        closeButton: s.falseOrElement.isRequired,
        autoClose: s.falseOrDelay.isRequired,
        children: t.default.node.isRequired,
        closeToast: t.default.func.isRequired,
        position: t.default.oneOf((0, s.objectValues)(r.POSITION)).isRequired,
        pauseOnHover: t.default.bool.isRequired,
        pauseOnFocusLoss: t.default.bool.isRequired,
        closeOnClick: t.default.bool.isRequired,
        transition: t.default.func.isRequired,
        rtl: t.default.bool.isRequired,
        hideProgressBar: t.default.bool.isRequired,
        draggable: t.default.bool.isRequired,
        draggablePercent: t.default.number.isRequired,
        in: t.default.bool,
        onExited: t.default.func,
        onOpen: t.default.func,
        onClose: t.default.func,
        type: t.default.oneOf((0, s.objectValues)(r.TYPE)),
        className: t.default.oneOfType([t.default.string, t.default.object]),
        bodyClassName: t.default.oneOfType([t.default.string, t.default.object]),
        progressClassName: t.default.oneOfType([t.default.string, t.default.object]),
        progressStyle: t.default.object,
        progress: t.default.number,
        isProgressDone: t.default.bool,
        updateId: t.default.oneOfType([t.default.string, t.default.number]),
        ariaLabel: t.default.string
    }, v.defaultProps = {
        type: r.TYPE.DEFAULT,
        in: !0,
        onOpen: b,
        onClose: b,
        className: null,
        bodyClassName: null,
        progressClassName: null,
        updateId: null,
        role: "alert"
    };
    var y = v;
    return gr.default = y, gr
}
var xr = {},
    pi;

function md() {
    if (pi) return xr;
    pi = 1, xr.__esModule = !0, xr.default = void 0;
    var e = n(ze()),
        t = n(kt());

    function n(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }

    function o(s) {
        var a = s.closeToast,
            c = s.type,
            d = s.ariaLabel;
        return e.default.createElement("button", {
            className: "Toastify__close-button Toastify__close-button--" + c,
            type: "button",
            onClick: a,
            "aria-label": d
        }, "✖")
    }
    o.propTypes = {
        closeToast: t.default.func,
        arialLabel: t.default.string
    }, o.defaultProps = {
        ariaLabel: "close"
    };
    var r = o;
    return xr.default = r, xr
}
var tt = {},
    Zr = {},
    _e = {},
    fi;

function _s() {
    if (fi) return _e;
    fi = 1, _e.__esModule = !0, _e.default = _e.EXITING = _e.ENTERED = _e.ENTERING = _e.EXITED = _e.UNMOUNTED = void 0;
    var e = s(kt()),
        t = r(ze()),
        n = r(Pa()),
        o = qa;

    function r(p) {
        return p && p.__esModule ? p : {
            default: p
        }
    }

    function s(p) {
        if (p && p.__esModule) return p;
        var u = {};
        if (p != null) {
            for (var m in p)
                if (Object.prototype.hasOwnProperty.call(p, m)) {
                    var h = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(p, m) : {};
                    h.get || h.set ? Object.defineProperty(u, m, h) : u[m] = p[m]
                }
        }
        return u.default = p, u
    }

    function a(p, u) {
        if (p == null) return {};
        var m = {},
            h = Object.keys(p),
            x, S;
        for (S = 0; S < h.length; S++) x = h[S], !(u.indexOf(x) >= 0) && (m[x] = p[x]);
        return m
    }

    function c(p, u) {
        p.prototype = Object.create(u.prototype), p.prototype.constructor = p, p.__proto__ = u
    }
    var d = "unmounted";
    _e.UNMOUNTED = d;
    var l = "exited";
    _e.EXITED = l;
    var f = "entering";
    _e.ENTERING = f;
    var g = "entered";
    _e.ENTERED = g;
    var b = "exiting";
    _e.EXITING = b;
    var v = function(p) {
        c(u, p);

        function u(h, x) {
            var S;
            S = p.call(this, h, x) || this;
            var P = x.transitionGroup,
                B = P && !P.isMounting ? h.enter : h.appear,
                _;
            return S.appearStatus = null, h.in ? B ? (_ = l, S.appearStatus = f) : _ = g : h.unmountOnExit || h.mountOnEnter ? _ = d : _ = l, S.state = {
                status: _
            }, S.nextCallback = null, S
        }
        var m = u.prototype;
        return m.getChildContext = function() {
            return {
                transitionGroup: null
            }
        }, u.getDerivedStateFromProps = function(x, S) {
            var P = x.in;
            return P && S.status === d ? {
                status: l
            } : null
        }, m.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, m.componentDidUpdate = function(x) {
            var S = null;
            if (x !== this.props) {
                var P = this.state.status;
                this.props.in ? P !== f && P !== g && (S = f) : (P === f || P === g) && (S = b)
            }
            this.updateStatus(!1, S)
        }, m.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, m.getTimeouts = function() {
            var x = this.props.timeout,
                S, P, B;
            return S = P = B = x, x != null && typeof x != "number" && (S = x.exit, P = x.enter, B = x.appear !== void 0 ? x.appear : P), {
                exit: S,
                enter: P,
                appear: B
            }
        }, m.updateStatus = function(x, S) {
            if (x === void 0 && (x = !1), S !== null) {
                this.cancelNextCallback();
                var P = n.default.findDOMNode(this);
                S === f ? this.performEnter(P, x) : this.performExit(P)
            } else this.props.unmountOnExit && this.state.status === l && this.setState({
                status: d
            })
        }, m.performEnter = function(x, S) {
            var P = this,
                B = this.props.enter,
                _ = this.context.transitionGroup ? this.context.transitionGroup.isMounting : S,
                R = this.getTimeouts(),
                O = _ ? R.appear : R.enter;
            if (!S && !B) {
                this.safeSetState({
                    status: g
                }, function() {
                    P.props.onEntered(x)
                });
                return
            }
            this.props.onEnter(x, _), this.safeSetState({
                status: f
            }, function() {
                P.props.onEntering(x, _), P.onTransitionEnd(x, O, function() {
                    P.safeSetState({
                        status: g
                    }, function() {
                        P.props.onEntered(x, _)
                    })
                })
            })
        }, m.performExit = function(x) {
            var S = this,
                P = this.props.exit,
                B = this.getTimeouts();
            if (!P) {
                this.safeSetState({
                    status: l
                }, function() {
                    S.props.onExited(x)
                });
                return
            }
            this.props.onExit(x), this.safeSetState({
                status: b
            }, function() {
                S.props.onExiting(x), S.onTransitionEnd(x, B.exit, function() {
                    S.safeSetState({
                        status: l
                    }, function() {
                        S.props.onExited(x)
                    })
                })
            })
        }, m.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, m.safeSetState = function(x, S) {
            S = this.setNextCallback(S), this.setState(x, S)
        }, m.setNextCallback = function(x) {
            var S = this,
                P = !0;
            return this.nextCallback = function(B) {
                P && (P = !1, S.nextCallback = null, x(B))
            }, this.nextCallback.cancel = function() {
                P = !1
            }, this.nextCallback
        }, m.onTransitionEnd = function(x, S, P) {
            this.setNextCallback(P);
            var B = S == null && !this.props.addEndListener;
            if (!x || B) {
                setTimeout(this.nextCallback, 0);
                return
            }
            this.props.addEndListener && this.props.addEndListener(x, this.nextCallback), S != null && setTimeout(this.nextCallback, S)
        }, m.render = function() {
            var x = this.state.status;
            if (x === d) return null;
            var S = this.props,
                P = S.children,
                B = a(S, ["children"]);
            if (delete B.in, delete B.mountOnEnter, delete B.unmountOnExit, delete B.appear, delete B.enter, delete B.exit, delete B.timeout, delete B.addEndListener, delete B.onEnter, delete B.onEntering, delete B.onEntered, delete B.onExit, delete B.onExiting, delete B.onExited, typeof P == "function") return P(x, B);
            var _ = t.default.Children.only(P);
            return t.default.cloneElement(_, B)
        }, u
    }(t.default.Component);
    v.contextTypes = {
        transitionGroup: e.object
    }, v.childContextTypes = {
        transitionGroup: function() {}
    }, v.propTypes = {};

    function y() {}
    v.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: y,
        onEntering: y,
        onEntered: y,
        onExit: y,
        onExiting: y,
        onExited: y
    }, v.UNMOUNTED = 0, v.EXITED = 1, v.ENTERING = 2, v.ENTERED = 3, v.EXITING = 4;
    var C = (0, o.polyfill)(v);
    return _e.default = C, _e
}
var hi;

function Ga() {
    if (hi) return Zr;
    hi = 1, Zr.__esModule = !0, Zr.default = a;
    var e = n(ze()),
        t = n(_s());

    function n(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function o() {
        return o = Object.assign || function(c) {
            for (var d = 1; d < arguments.length; d++) {
                var l = arguments[d];
                for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (c[f] = l[f])
            }
            return c
        }, o.apply(this, arguments)
    }

    function r(c, d) {
        if (c == null) return {};
        var l = {},
            f = Object.keys(c),
            g, b;
        for (b = 0; b < f.length; b++) g = f[b], !(d.indexOf(g) >= 0) && (l[g] = c[g]);
        return l
    }
    var s = function() {};

    function a(c) {
        var d = c.enter,
            l = c.exit,
            f = c.duration,
            g = f === void 0 ? 750 : f,
            b = c.appendPosition,
            v = b === void 0 ? !1 : b;
        return function(C) {
            var p = C.children,
                u = C.position,
                m = C.preventExitTransition,
                h = r(C, ["children", "position", "preventExitTransition"]),
                x = v ? d + "--" + u : d,
                S = v ? l + "--" + u : l,
                P, B;
            Array.isArray(g) && g.length === 2 ? (P = g[0], B = g[1]) : P = B = g;
            var _ = function(I) {
                    I.classList.add(x), I.style.animationFillMode = "forwards", I.style.animationDuration = P * .001 + "s"
                },
                R = function(I) {
                    I.classList.remove(x), I.style.cssText = ""
                },
                O = function(I) {
                    I.classList.add(S), I.style.animationFillMode = "forwards", I.style.animationDuration = B * .001 + "s"
                };
            return e.default.createElement(t.default, o({}, h, {
                timeout: m ? 0 : {
                    enter: P,
                    exit: B
                },
                onEnter: _,
                onEntered: R,
                onExit: m ? s : O
            }), p)
        }
    }
    return Zr
}
var mi;

function Ha() {
    if (mi) return tt;
    mi = 1, tt.__esModule = !0, tt.Flip = tt.Zoom = tt.Slide = tt.Bounce = void 0;
    var e = t(Ga());

    function t(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var n = (0, e.default)({
        enter: "Toastify__bounce-enter",
        exit: "Toastify__bounce-exit",
        appendPosition: !0
    });
    tt.Bounce = n;
    var o = (0, e.default)({
        enter: "Toastify__slide-enter",
        exit: "Toastify__slide-exit",
        duration: [450, 750],
        appendPosition: !0
    });
    tt.Slide = o;
    var r = (0, e.default)({
        enter: "Toastify__zoom-enter",
        exit: "Toastify__zoom-exit"
    });
    tt.Zoom = r;
    var s = (0, e.default)({
        enter: "Toastify__flip-enter",
        exit: "Toastify__flip-exit"
    });
    return tt.Flip = s, tt
}
var yr = {},
    gi;

function Va() {
    if (gi) return yr;
    gi = 1, yr.__esModule = !0, yr.default = void 0;
    var e = {
            list: new Map,
            on: function(o, r) {
                return this.list.has(o) || this.list.set(o, []), this.list.get(o).push(r), this
            },
            off: function(o) {
                return this.list.delete(o), this
            },
            emit: function(o) {
                for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) s[a - 1] = arguments[a];
                return this.list.has(o) ? (this.list.get(o).forEach(function(c) {
                    return setTimeout(function() {
                        return c.call.apply(c, [null].concat(s))
                    }, 0)
                }), !0) : !1
            }
        },
        t = e;
    return yr.default = t, yr
}
var vi;

function gd() {
    if (vi) return mr;
    vi = 1, mr.__esModule = !0, mr.default = void 0;
    var e = g(ze()),
        t = f(kt()),
        n = f(ys()),
        o = f(Bs()),
        r = f(hd()),
        s = f(md()),
        a = Ha(),
        c = Wr(),
        d = f(Va()),
        l = Es();

    function f(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }

    function g(x) {
        if (x && x.__esModule) return x;
        var S = {};
        if (x != null) {
            for (var P in x)
                if (Object.prototype.hasOwnProperty.call(x, P)) {
                    var B = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(x, P) : {};
                    B.get || B.set ? Object.defineProperty(S, P, B) : S[P] = x[P]
                }
        }
        return S.default = x, S
    }

    function b(x) {
        return C(x) || y(x) || v()
    }

    function v() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }

    function y(x) {
        if (Symbol.iterator in Object(x) || Object.prototype.toString.call(x) === "[object Arguments]") return Array.from(x)
    }

    function C(x) {
        if (Array.isArray(x)) {
            for (var S = 0, P = new Array(x.length); S < x.length; S++) P[S] = x[S];
            return P
        }
    }

    function p() {
        return p = Object.assign || function(x) {
            for (var S = 1; S < arguments.length; S++) {
                var P = arguments[S];
                for (var B in P) Object.prototype.hasOwnProperty.call(P, B) && (x[B] = P[B])
            }
            return x
        }, p.apply(this, arguments)
    }

    function u(x, S) {
        x.prototype = Object.create(S.prototype), x.prototype.constructor = x, x.__proto__ = S
    }
    var m = function(x) {
        u(S, x);

        function S() {
            for (var B, _ = arguments.length, R = new Array(_), O = 0; O < _; O++) R[O] = arguments[O];
            return B = x.call.apply(x, [this].concat(R)) || this, B.state = {
                toast: []
            }, B.toastKey = 1, B.collection = {}, B.isToastActive = function(A) {
                return B.state.toast.indexOf(A) !== -1
            }, B
        }
        var P = S.prototype;
        return P.componentDidMount = function() {
            var _ = this;
            d.default.on(c.ACTION.SHOW, function(R, O) {
                return _.show(R, O)
            }).on(c.ACTION.CLEAR, function(R) {
                return R ? _.removeToast(R) : _.clear()
            }).emit(c.ACTION.DID_MOUNT, this)
        }, P.componentWillUnmount = function() {
            d.default.off(c.ACTION.SHOW).off(c.ACTION.CLEAR).emit(c.ACTION.WILL_UNMOUNT)
        }, P.removeToast = function(_) {
            this.setState({
                toast: this.state.toast.filter(function(R) {
                    return R !== _
                })
            }, this.dispatchChange)
        }, P.dispatchChange = function() {
            d.default.emit(c.ACTION.ON_CHANGE, this.state.toast.length)
        }, P.makeCloseButton = function(_, R, O) {
            var A = this,
                I = this.props.closeButton;
            return ((0, e.isValidElement)(_) || _ === !1) && (I = _), I === !1 ? !1 : (0, e.cloneElement)(I, {
                closeToast: function() {
                    return A.removeToast(R)
                },
                type: O
            })
        }, P.getAutoCloseDelay = function(_) {
            return _ === !1 || (0, l.isValidDelay)(_) ? _ : this.props.autoClose
        }, P.canBeRendered = function(_) {
            return (0, e.isValidElement)(_) || typeof _ == "string" || typeof _ == "number" || typeof _ == "function"
        }, P.parseClassName = function(_) {
            return typeof _ == "string" ? _ : _ !== null && typeof _ == "object" && "toString" in _ ? _.toString() : null
        }, P.show = function(_, R) {
            var O = this,
                A;
            if (!this.canBeRendered(_)) throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof _);
            var I = R.toastId,
                j = function() {
                    return O.removeToast(I)
                },
                U = {
                    id: I,
                    key: R.key || this.toastKey++,
                    type: R.type,
                    closeToast: j,
                    updateId: R.updateId,
                    rtl: this.props.rtl,
                    position: R.position || this.props.position,
                    transition: R.transition || this.props.transition,
                    className: this.parseClassName(R.className || this.props.toastClassName),
                    bodyClassName: this.parseClassName(R.bodyClassName || this.props.bodyClassName),
                    closeButton: this.makeCloseButton(R.closeButton, I, R.type),
                    pauseOnHover: typeof R.pauseOnHover == "boolean" ? R.pauseOnHover : this.props.pauseOnHover,
                    pauseOnFocusLoss: typeof R.pauseOnFocusLoss == "boolean" ? R.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
                    draggable: typeof R.draggable == "boolean" ? R.draggable : this.props.draggable,
                    draggablePercent: typeof R.draggablePercent == "number" && !isNaN(R.draggablePercent) ? R.draggablePercent : this.props.draggablePercent,
                    closeOnClick: typeof R.closeOnClick == "boolean" ? R.closeOnClick : this.props.closeOnClick,
                    progressClassName: this.parseClassName(R.progressClassName || this.props.progressClassName),
                    progressStyle: this.props.progressStyle,
                    autoClose: this.getAutoCloseDelay(R.autoClose),
                    hideProgressBar: typeof R.hideProgressBar == "boolean" ? R.hideProgressBar : this.props.hideProgressBar,
                    progress: parseFloat(R.progress),
                    isProgressDone: R.isProgressDone
                };
            typeof R.onOpen == "function" && (U.onOpen = R.onOpen), typeof R.onClose == "function" && (U.onClose = R.onClose), (0, e.isValidElement)(_) && typeof _.type != "string" && typeof _.type != "number" ? _ = (0, e.cloneElement)(_, {
                closeToast: j
            }) : typeof _ == "function" && (_ = _({
                closeToast: j
            })), this.collection = p({}, this.collection, (A = {}, A[I] = {
                position: U.position,
                options: U,
                content: _
            }, A)), this.setState({
                toast: (U.updateId ? b(this.state.toast) : b(this.state.toast).concat([I])).filter(function(z) {
                    return z !== R.staleToastId
                })
            }, this.dispatchChange)
        }, P.makeToast = function(_, R) {
            return e.default.createElement(r.default, p({}, R, {
                isDocumentHidden: this.state.isDocumentHidden,
                key: "toast-" + R.key
            }), _)
        }, P.clear = function() {
            this.setState({
                toast: []
            })
        }, P.renderToast = function() {
            var _ = this,
                R = {},
                O = this.props,
                A = O.className,
                I = O.style,
                j = O.newestOnTop,
                U = j ? Object.keys(this.collection).reverse() : Object.keys(this.collection);
            return U.forEach(function(z) {
                var N = _.collection[z],
                    q = N.position,
                    W = N.options,
                    he = N.content;
                R[q] || (R[q] = []), _.state.toast.indexOf(W.id) !== -1 ? R[q].push(_.makeToast(he, W)) : (R[q].push(null), delete _.collection[z])
            }), Object.keys(R).map(function(z) {
                var N = R[z].length === 1 && R[z][0] === null,
                    q = {
                        className: (0, n.default)("Toastify__toast-container", "Toastify__toast-container--" + z, {
                            "Toastify__toast-container--rtl": _.props.rtl
                        }, _.parseClassName(A)),
                        style: N ? p({}, I, {
                            pointerEvents: "none"
                        }) : p({}, I)
                    };
                return e.default.createElement(o.default, p({}, q, {
                    key: "container-" + z
                }), R[z])
            })
        }, P.render = function() {
            return e.default.createElement("div", {
                className: "Toastify"
            }, this.renderToast())
        }, S
    }(e.Component);
    m.propTypes = {
        position: t.default.oneOf((0, l.objectValues)(c.POSITION)),
        autoClose: l.falseOrDelay,
        closeButton: l.falseOrElement,
        hideProgressBar: t.default.bool,
        pauseOnHover: t.default.bool,
        closeOnClick: t.default.bool,
        newestOnTop: t.default.bool,
        className: t.default.oneOfType([t.default.string, t.default.object]),
        style: t.default.object,
        toastClassName: t.default.oneOfType([t.default.string, t.default.object]),
        bodyClassName: t.default.oneOfType([t.default.string, t.default.object]),
        progressClassName: t.default.oneOfType([t.default.string, t.default.object]),
        progressStyle: t.default.object,
        transition: t.default.func,
        rtl: t.default.bool,
        draggable: t.default.bool,
        draggablePercent: t.default.number,
        pauseOnFocusLoss: t.default.bool
    }, m.defaultProps = {
        position: c.POSITION.TOP_RIGHT,
        transition: a.Bounce,
        rtl: !1,
        autoClose: 5e3,
        hideProgressBar: !1,
        closeButton: e.default.createElement(s.default, null),
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        newestOnTop: !1,
        draggable: !0,
        draggablePercent: 80,
        className: null,
        style: null,
        toastClassName: null,
        bodyClassName: null,
        progressClassName: null,
        progressStyle: null
    };
    var h = m;
    return mr.default = h, mr
}
var Cr = {},
    xi;

function vd() {
    if (xi) return Cr;
    xi = 1, Cr.__esModule = !0, Cr.default = void 0;
    var e = n(Va()),
        t = Wr();

    function n(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }

    function o() {
        return o = Object.assign || function(v) {
            for (var y = 1; y < arguments.length; y++) {
                var C = arguments[y];
                for (var p in C) Object.prototype.hasOwnProperty.call(C, p) && (v[p] = C[p])
            }
            return v
        }, o.apply(this, arguments)
    }
    var r = null,
        s = [],
        a = function() {
            return !1
        };

    function c(v, y) {
        return o({}, v, {
            type: y,
            toastId: l(v)
        })
    }

    function d() {
        return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
    }

    function l(v) {
        return v && (typeof v.toastId == "string" || typeof v.toastId == "number" && !isNaN(v.toastId)) ? v.toastId : d()
    }

    function f(v, y) {
        return r !== null ? e.default.emit(t.ACTION.SHOW, v, y) : s.push({
            action: t.ACTION.SHOW,
            content: v,
            options: y
        }), y.toastId
    }
    var g = o(function(v, y) {
        return f(v, c(y, y && y.type || t.TYPE.DEFAULT))
    }, {
        success: function(y, C) {
            return f(y, c(C, t.TYPE.SUCCESS))
        },
        info: function(y, C) {
            return f(y, c(C, t.TYPE.INFO))
        },
        warn: function(y, C) {
            return f(y, c(C, t.TYPE.WARNING))
        },
        warning: function(y, C) {
            return f(y, c(C, t.TYPE.WARNING))
        },
        error: function(y, C) {
            return f(y, c(C, t.TYPE.ERROR))
        },
        dismiss: function(y) {
            return y === void 0 && (y = null), r && e.default.emit(t.ACTION.CLEAR, y)
        },
        isActive: a,
        update: function(y, C) {
            setTimeout(function() {
                if (r && typeof r.collection[y] < "u") {
                    var p = r.collection[y],
                        u = p.options,
                        m = p.content,
                        h = o({}, u, C, {
                            toastId: C.toastId || y
                        });
                    !C.toastId || C.toastId === y ? h.updateId = d() : h.staleToastId = y;
                    var x = typeof h.render < "u" ? h.render : m;
                    delete h.render, f(x, h)
                }
            }, 0)
        },
        done: function(y, C) {
            C === void 0 && (C = 1), g.update(y, {
                progress: C,
                isProgressDone: !0
            })
        },
        onChange: function(y) {
            typeof y == "function" && e.default.on(t.ACTION.ON_CHANGE, y)
        },
        POSITION: t.POSITION,
        TYPE: t.TYPE
    });
    e.default.on(t.ACTION.DID_MOUNT, function(v) {
        r = v, g.isActive = function(y) {
            return r.isToastActive(y)
        }, s.forEach(function(y) {
            e.default.emit(y.action, y.content, y.options)
        }), s = []
    }).on(t.ACTION.WILL_UNMOUNT, function() {
        r = null, g.isActive = a
    });
    var b = g;
    return Cr.default = b, Cr
}
var yi;

function xd() {
    if (yi) return Je;
    yi = 1, Je.__esModule = !0;
    var e = s(gd());
    Je.ToastContainer = e.default;
    var t = Ha();
    Je.Bounce = t.Bounce, Je.Slide = t.Slide, Je.Zoom = t.Zoom, Je.Flip = t.Flip;
    var n = Wr();
    Je.ToastPosition = n.POSITION, Je.ToastType = n.TYPE;
    var o = s(vd());
    Je.toast = o.default;
    var r = s(Ga());
    Je.cssTransition = r.default;

    function s(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    return Je
}
var po = xd();
const Ve = {
        moneyPerQuestion: "Money Per Question",
        streakBonus: "Streak Bonus",
        multiplier: "Multiplier",
        insurance: "Insurance"
    },
    yd = new se.Howl({
        src: [H("correct.mp3")]
    }),
    Cd = new se.Howl({
        src: [H("incorrect.mp3")]
    }),
    jn = new se.Howl({
        src: [H("click.wav")]
    }),
    Qa = new se.Howl({
        src: [H("click2.wav")]
    }),
    Ya = new se.Howl({
        src: [H("applyTheme.wav")]
    }),
    On = new se.Howl({
        src: [H("successClick.wav")]
    }),
    Xa = new se.Howl({
        src: [H("woosh.wav")]
    });
new se.Howl({
    src: [H("splash.wav")]
});
const bd = new se.Howl({
        src: [H("done.wav")]
    }),
    wd = new se.Howl({
        src: [H("celebrate.mp3")],
        volume: .5
    }),
    kd = new se.Howl({
        src: [H("error.wav")]
    }),
    Pd = new se.Howl({
        src: [H("success.wav")]
    }),
    Sd = new se.Howl({
        src: [H("alert.wav")]
    }),
    Td = new se.Howl({
        src: [H("clap.wav")]
    }),
    en = new se.Howl({
        src: [H("pop.mp3")]
    }),
    Bd = new se.Howl({
        src: [H("freeze.mp3")]
    }),
    Ed = new se.Howl({
        src: [H("stone.mp3")]
    }),
    _d = new se.Howl({
        src: [H("drain.mp3")],
        volume: .7
    }),
    Rd = new se.Howl({
        src: [H("pieSlice.mp3")]
    }),
    jd = new se.Howl({
        src: [H("spark.mp3")],
        volume: .4
    }),
    Od = new se.Howl({
        src: [H("bounce.wav")]
    }),
    Md = "THANOS",
    Dd = "HIDDEN",
    Id = "SHOP_QR_SCAN",
    $d = "DEFENDING_HOMEBASE",
    Nd = "LAVA",
    Ld = "IMPOSTER",
    Ad = "DRAW",
    zd = "COMEBACK",
    Rs = "PARDY",
    ne = {
        questionAnswered: "QUESTION_ANSWERED",
        upgradePurchased: "UPGRADE_PURCHASED",
        powerupPurchased: "POWERUP_PURCHASED",
        powerupActivated: "POWERUP_ACTIVATED",
        powerupAttack: "POWERUP_ATTACK",
        requestPlayerLeaderboard: "PLAYER_LEADERBOARD_REQUESTED",
        requestTeamLeaderboard: "TEAM_LEADERBOARD_REQUESTED",
        themePurchased: "THEME_PURCHASED",
        themeApplied: "THEME_APPLIED",
        clap: "CLAP",
        requestPlayerDefendingHomebase: "REQUEST_PLAYER_DEFENDING_HOMEBASE",
        upgradeDefendingHomebase: "UPGRADE_DEFENDING_HOMEBASE",
        lavaPurchasePiece: "LAVA_PURCHASE_PIECE",
        imposter: {
            requestPeople: "IMPOSTER_MODE_REQUEST_PEOPLE",
            purchase: "IMPOSTER_MODE_PURCHASE",
            vote: "IMPOSTER_MODE_VOTE",
            notes: "IMPOSTER_MODE_NOTES"
        },
        draw: {
            termSelected: "DRAW_MODE_TERM_SELECTED",
            lineDrawn: "DRAW_MODE_LD",
            imageDrawn: "DRAW_MODE_ID",
            guess: "DRAW_MODE_GUESS"
        },
        outnumberedComplete: "OUTNUMBERED_COMPLETE",
        pardy: {
            setPower: "PARDY_SET_POWER",
            setBet: "PARDY_SET_BET"
        }
    },
    Wd = "'Pangolin', sans-serif",
    Ci = '"Product Sans"',
    Ee = {
        mainFontName: Ci,
        name: Ci + ", sans-serif"
    },
    js = 250,
    Fd = e => {
        if (!T.questions.canAnswerQuestion) return !1;
        const t = T.questions.ceq ? sr(T.questions.ceq) : null;
        let n = !1;
        if (t) {
            const o = t.answers.filter(r => r.correct);
            t.type === Qs.textInput && o.map(r => Pi(r.text)).includes(Pi(e)) && (n = !0), t.type === Qs.multipleChoice && o.map(r => r._id).includes(e) && (n = !0), T.questions.questionAnswered(n, t._id), oe(ne.questionAnswered, {
                questionId: t._id,
                answer: e
            }), T.questions.transitioningToNextQuestion = !0
        }
        return n
    },
    nr = (e, t, n) => t === 1 ? e : n || e + "s",
    ge = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    xe = e => {
        if (Wt()) {
            const t = Math.round(e);
            return `${ge(t)} ${nr("point",t)}`
        }
        return (e < 0 ? "-" : "") + T.gameOptions.currency + ge(Math.round(Math.abs(e)))
    },
    Mn = (e, t) => {
        t || Xa.play(), T.navigation.drawerOpen = e, e == !0 && (T.navigation.settingsOpen = !1)
    },
    Ud = e => {
        oe(ne.themePurchased, e)
    },
    zt = e => e === Ve.moneyPerQuestion ? "moneyPerQuestion" : e === Ve.streakBonus ? "streakBonus" : e === Ve.multiplier ? "multiplier" : "insurance",
    qd = (e, t) => {
        const {
            type: n,
            blockSound: o
        } = t;
        o || (n === "error" ? kd.play() : n === "success" ? Pd.play() : Sd.play()), po.toast[n || "info"](e, {
            position: po.toast.POSITION.TOP_RIGHT,
            autoClose: e.length * .2 * 1e3 + 1e3
        })
    },
    Os = e => e ? e.charAt(0).toUpperCase() + e.slice(1) : "",
    bi = e => Os(e),
    Ja = e => {
        let t = "";
        return e.forEach((n, o) => {
            t += n, o + 1 !== e.length && (t += ", ")
        }), t
    },
    Ms = e => {
        let t = null;
        return e ? t = T.gameValues.teams.find(n => n.id === e) : t = T.user.team, t && t.color ? t.color.background : $.White
    },
    Gd = e => {
        let t = null;
        return e ? t = T.gameValues.teams.find(n => n.id === e) : t = T.user.team, t && t.icon ? t.icon : null
    },
    Dn = () => [Tc, Sa, Ta].includes(T.gameOptions.specialGameType[0]),
    wi = (e, t) => {
        const n = T.navigation.attackModal;
        oe(ne.powerupAttack, {
            name: n.powerup,
            target: e
        })
    },
    Ds = e => e.replace("#", Dn() ? "team" : "player"),
    Is = () => T.questions.eqt ? sr(T.questions.eqt) : [],
    Hd = () => Xe(),
    In = () => Xe();

function H(e) {
    return "/assets/play/" + e
}
const $n = e => e.displayName ? e.displayName : e.name,
    Ka = e => e * T.upgrades.upgradePricingDiscount,
    $s = () => {
        let e = L.questions;
        Xe() && (e = L.pardyMode), ve() && yn("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"), Wt() && yn("https://fonts.googleapis.com/css2?family=Pangolin&display=swap"), ee(e), Tt() && fo()
    },
    ee = e => {
        if (T.navigation.currentRoute !== e) {
            if (!T.navigation.canChangeRoute) {
                setTimeout(() => ee(e), js);
                return
            }
            T.navigation.currentRoute !== L.nonDismissMessage && (e === L.questions && Hd() || e === L.shop && In() || T.navigation.changeRoute(e))
        }
    },
    fo = () => oe(ne.requestPlayerDefendingHomebase),
    ki = () => {
        let e = !1;
        const t = T.gameValues.defendingHomebaseResults;
        return t && t.winner && t.winner.linked && T.user.team.id === t.winner.linked && (e = !0), {
            won: e,
            text: e ? "You Won!" : "😥"
        }
    },
    Vd = () => {
        window.onbeforeunload = () => {
            const e = T.navigation.currentRoute;
            return [L.waiting, L.questions, L.shop, L.upgrade, L.team].includes(e) ? !0 : null
        }
    },
    Qd = (e, t) => {
        T.gameValues.nonDismissMessage.title = t, T.gameValues.nonDismissMessage.message = e, ee(L.nonDismissMessage)
    },
    oe = (e, t) => {
        const n = T.engine.game;
        n && n.send(e, t)
    },
    Dr = () => T.gameOptions.specialGameType.includes(Md),
    Yd = () => T.gameOptions.specialGameType.includes(Id),
    Xd = () => T.gameOptions.specialGameType.includes(Ta),
    Ns = () => T.gameOptions.specialGameType.includes(Dd),
    ar = () => T.gameOptions.specialGameType.includes(Nd),
    ve = () => T.gameOptions.specialGameType.includes(Ld),
    Wt = () => T.gameOptions.specialGameType.includes(Ad),
    Gn = () => T.gameOptions.specialGameType.includes(zd),
    Xe = () => T.gameOptions.specialGameType.includes(Rs),
    Tt = () => T.gameOptions.specialGameType.includes(Sa),
    Pi = e => {
        let t = e.trim();
        return t = t.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"'), t = t.toLowerCase(), t
    },
    Za = () => ve() ? "Mission Control" : "Shop",
    Fr = () => Wt() ? Wd : Ee.mainFontName;
var Jd = Object.defineProperty,
    Ue = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && Jd(t, n, r), r
    };
class Me {
    constructor() {
        this.ceq = null, this.currentQuestionIndex = 0, this.questionList = E.array(), this.lastQuestion = "", this.canAnswerQuestion = !0, this.lockedViewingCorrectAnswer = !1, this.eqt = "", this.lastQuestionAnsweredTimestamp = 0, this.currentQuestionLoaded = !1, this.transitioningToNextQuestion = !1, this.questionsAnsweredCorrectly = 0, this.questionsAnsweredIncorrectly = 0, this.setQuestions = t => {
            this.eqt = bn(t, "questions")
        }, this.nextQuestion = () => {
            this.setCurrentQuestion(this.currentQuestionIndex + 1)
        }, this.setCurrentQuestion = t => {
            const n = Is();
            if (!n || !n.length) return;
            const o = this.questionList.length;
            t >= o ? this.currentQuestionIndex = 0 : this.currentQuestionIndex = t;
            const r = n.find(s => s._id === this.questionList[this.currentQuestionIndex]);
            r && (this.ceq = bn({
                ...r,
                answers: Le.shuffle(r.answers)
            }, r._id), this.currentQuestionLoaded = !0)
        }, this.questionAnswered = (t, n) => {
            this.lastQuestionAnsweredTimestamp = Date.now() / 1e3, this.lastQuestionCorrect = t, this.lastQuestion = n, this.canAnswerQuestion = !1, setTimeout(() => {
                this.canAnswerQuestion = !0
            }, js)
        }, Be(this)
    }
}
Ue([E], Me.prototype, "ceq");
Ue([E], Me.prototype, "currentQuestionIndex");
Ue([E], Me.prototype, "questionList");
Ue([E], Me.prototype, "lastQuestion");
Ue([E], Me.prototype, "lastQuestionCorrect");
Ue([E], Me.prototype, "canAnswerQuestion");
Ue([E], Me.prototype, "lockedViewingCorrectAnswer");
Ue([E], Me.prototype, "lastQuestionAnsweredTimestamp");
Ue([E], Me.prototype, "currentQuestionLoaded");
Ue([E], Me.prototype, "transitioningToNextQuestion");
Ue([or.bound], Me.prototype, "setQuestions");
Ue([or.bound], Me.prototype, "nextQuestion");
Ue([or.bound], Me.prototype, "setCurrentQuestion");
Ue([or.bound], Me.prototype, "questionAnswered");
var Kd = Object.defineProperty,
    Ur = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && Kd(t, n, r), r
    };
const tn = Sc.filter(e => e.name === "Default")[0],
    e3 = {
        background: "#311B92",
        text: $.White
    },
    t3 = {
        background: "#1A237E",
        text: $.White
    };
let cr = class {
    constructor() {
        this.theme = {
            defaultBackground: tn.question.background,
            question: tn.question,
            palette: tn.palette,
            response: {
                correctAnswer: {
                    background: "#388E3C",
                    text: $.White
                },
                incorrectAnswer: {
                    background: "#B71C1C",
                    text: $.White
                },
                shop: e3,
                continue: t3
            },
            desktopBreakpoint: 650
        }, this.availableThemes = E.array(), this.disabledThemes = E.array(), this.themeName = tn.name, this.ownedThemes = E.array(), Be(this)
    }
};
Ur([E], cr.prototype, "theme");
Ur([E], cr.prototype, "availableThemes");
Ur([E], cr.prototype, "disabledThemes");
Ur([E], cr.prototype, "themeName");
Ur([E], cr.prototype, "ownedThemes");
var Zd = Object.defineProperty,
    e2 = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && Zd(t, n, r), r
    };
class r3 {
    constructor() {
        Be(this)
    }
}
e2([E], r3.prototype, "translations");
var t2 = Object.defineProperty,
    qr = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && t2(t, n, r), r
    };
class lr {
    constructor() {
        this.fullBlackScreen = !1, this.snowing = !1, this.blurredScreen = !1, this.showingSuccessModal = !1, this.successModalInfo = {
            icon: "",
            background: "",
            color: "",
            title: "",
            description: "",
            sound: "",
            textOptions: null
        }, Be(this)
    }
}
qr([E], lr.prototype, "fullBlackScreen");
qr([E], lr.prototype, "snowing");
qr([E], lr.prototype, "blurredScreen");
qr([E], lr.prototype, "showingSuccessModal");
qr([E], lr.prototype, "successModalInfo");
var r2 = Object.defineProperty,
    qt = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && r2(t, n, r), r
    };
const Pr = {
    moneyPerQuestion: "Money Per Question",
    streakBonus: "Streak Bonus",
    multiplier: "Multiplier",
    insurance: "Insurance"
};
class Ot {
    constructor() {
        this.upgradePricingDiscount = 1, this.upgrades = E.array(), this.currentlySelectedUpgrade = Pr.moneyPerQuestion, this.upgradeLevels = {
            moneyPerQuestion: 1,
            streakBonus: 1,
            multiplier: 1,
            insurance: 1
        }, this.upgradeLevelTabs = {
            moneyPerQuestion: 2,
            streakBonus: 2,
            multiplier: 2,
            insurance: 2
        }, this.homebaseUpgades = E.array(), this.lavaUpgrades = E.array(), Be(this)
    }
}
qt([E], Ot.prototype, "upgradePricingDiscount");
qt([E], Ot.prototype, "upgrades");
qt([E], Ot.prototype, "currentlySelectedUpgrade");
qt([E], Ot.prototype, "upgradeLevels");
qt([E], Ot.prototype, "upgradeLevelTabs");
qt([E], Ot.prototype, "homebaseUpgades");
qt([E], Ot.prototype, "lavaUpgrades");
var n2 = Object.defineProperty,
    Gt = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && n2(t, n, r), r
    };
class Mt {
    constructor() {
        this.name = "", this.groupId = "", this.groupMemberId = "", this.theme = "Default", this.team = null, this.place = 1, this.readToMeEnabled = !1, Be(this)
    }
}
Gt([E], Mt.prototype, "name");
Gt([E], Mt.prototype, "groupId");
Gt([E], Mt.prototype, "groupMemberId");
Gt([E], Mt.prototype, "theme");
Gt([E], Mt.prototype, "team");
Gt([E], Mt.prototype, "place");
Gt([E], Mt.prototype, "readToMeEnabled");
var o2 = Object.defineProperty,
    it = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && o2(t, n, r), r
    },
    Ke = (e => (e.intro = "intro", e.questions = "questions", e.discussion = "discussion", e.voting = "voting", e.votingResult = "votingResult", e))(Ke || {}),
    dt = (e => (e.detective = "detective", e.imposter = "imposter", e))(dt || {}),
    Te = (e => (e.donate = "donate", e.privateInvestigation = "privateInvestigation", e.publicInvestigation = "publicInvestigation", e.meeting = "meeting", e.investigationRemover = "investigationRemover", e.fakeInvestigation = "fakeInvestigation", e.noteViewer = "noteViewer", e.blendIn = "blendIn", e.clearListRemover = "clearListRemover", e))(Te || {});
class Ze {
    constructor() {
        this.status = "intro", this.me = null, this.meetingsLeft = 0, this.impostersLeft = 0, this.investigationsLeft = 0, this.epl = null, this.shopItems = E.array(), this.currentShopItem = null, this.currentShopItemModalVisible = !1, this.noteDrawerOpen = !1, this.roleModalOpen = !0, Be(this)
    }
}
it([E], Ze.prototype, "status");
it([E], Ze.prototype, "me");
it([E], Ze.prototype, "meetingsLeft");
it([E], Ze.prototype, "impostersLeft");
it([E], Ze.prototype, "investigationsLeft");
it([E], Ze.prototype, "epl");
it([E], Ze.prototype, "shopItems");
it([E], Ze.prototype, "currentShopItem");
it([E], Ze.prototype, "currentShopItemModalVisible");
it([E], Ze.prototype, "noteDrawerOpen");
it([E], Ze.prototype, "roleModalOpen");
var s2 = Object.defineProperty,
    dr = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && s2(t, n, r), r
    },
    Sr = (e => (e.correct = "correct", e.speed = "speed", e.firstGuess = "firstGuess", e.goodDrawer = "goodDrawer", e))(Sr || {}),
    kn = (e => (e.drawer = "Drawer", e.guesser = "Guesser", e))(kn || {}),
    Pn = (e => (e.pickDrawer = "pickDrawer", e.termSelection = "termSelection", e.drawing = "drawing", e.results = "results", e))(Pn || {});
let Ht = class {
    constructor() {
        this.round = {
            term: "",
            secondsLeft: 0,
            drawingBase64: "",
            revealText: "",
            drawer: {
                id: "",
                name: ""
            },
            termOptions: []
        }, this.me = {
            role: "Guesser",
            lastRound: null,
            answeredCorrectly: !1
        }, this.status = "pickDrawer", this.latestLine = null, this.latestFeedItem = null, this.shouldClearCanvas = !1, Be(this)
    }
};
dr([E], Ht.prototype, "round");
dr([E], Ht.prototype, "me");
dr([E], Ht.prototype, "status");
dr([E], Ht.prototype, "latestLine");
dr([E], Ht.prototype, "latestFeedItem");
dr([E], Ht.prototype, "shouldClearCanvas");
var i2 = Object.defineProperty,
    Ce = (e, t, n, o) => {
        for (var r = void 0, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(t, n, r) || r);
        return r && i2(t, n, r), r
    },
    n3 = (e => (e.home = "home", e.question = "question", e.answer = "answer", e))(n3 || {}),
    o3 = (e => (e.preview = "preview", e.finale = "finale", e.question = "question", e))(o3 || {}),
    Tr = (e => (e.preview = "preview", e.ask = "ask", e.timesUp = "timesUp", e))(Tr || {});
class fe {
    constructor() {
        this.screen = "home", this.questionScreen = "preview", this.questionStatus = "preview", this.powers = E.array(), this.power = "", this.powerOptions = E.array(), this.currentQuestion = null, this.animatingQuestionScreenOut = !1, this.animatingBetScreenOut = !1, this.answered = !1, this.answeredCorrectly = !1, this.answerResponseItems = E.array(), this.maxBet = 1, this.currentBet = 0, this.tips = E.array(), this.answerLockedInWittyMessages = E.array(), this.correctWittyMessages = E.array(), this.incorrectWittyMessages = E.array(), Be(this)
    }
}
Ce([E], fe.prototype, "screen");
Ce([E], fe.prototype, "questionScreen");
Ce([E], fe.prototype, "questionStatus");
Ce([E], fe.prototype, "powers");
Ce([E], fe.prototype, "power");
Ce([E], fe.prototype, "powerOptions");
Ce([E], fe.prototype, "currentQuestion");
Ce([E], fe.prototype, "animatingQuestionScreenOut");
Ce([E], fe.prototype, "animatingBetScreenOut");
Ce([E], fe.prototype, "answered");
Ce([E], fe.prototype, "answeredCorrectly");
Ce([E], fe.prototype, "answerResponseItems");
Ce([E], fe.prototype, "maxBet");
Ce([E], fe.prototype, "currentBet");
Ce([E], fe.prototype, "tips");
Ce([E], fe.prototype, "answerLockedInWittyMessages");
Ce([E], fe.prototype, "correctWittyMessages");
Ce([E], fe.prototype, "incorrectWittyMessages");
const T = {
    gameValues: new ot,
    gameOptions: new pe,
    user: new Mt,
    questions: new Me,
    powerups: new Fe,
    balance: new jt,
    engine: new Oe,
    theme: new cr,
    navigation: new st,
    upgrades: new Ot,
    translations: new r3,
    entities: new Ts,
    ui: new lr,
    events: new td,
    imposter: new Ze,
    draw: new Ht,
    pardy: new fe
};
var rn = ["clickElement", "Exploit", "msgpack", "AYO_YOU_SHOULDNT_BE_HERE_ROCKS_NETWORK_VAREDZP", "getAnswer"];
const a2 = [rn[0], rn[1], rn[2], rn[3]],
    c2 = e => {
        setTimeout(() => {
            oe("REDBOAT", e)
        }, 130)
    },
    l2 = () => {
        a2.forEach(e => {
            window[e] && c2(e)
        })
    },
    d2 = () => {
        setInterval(l2, 1e4)
    },
    u2 = je(w.createElement("path", {
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
    })),
    p2 = je(w.createElement("path", {
        d: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
    })),
    f2 = je(w.createElement("path", {
        d: "M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z"
    })),
    h2 = je(w.createElement("path", {
        d: "M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"
    })),
    m2 = je(w.createElement("path", {
        d: "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"
    })),
    g2 = je(w.createElement("path", {
        d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    })),
    v2 = je(w.createElement("path", {
        d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
    })),
    x2 = je(w.createElement("path", {
        d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    })),
    y2 = je(w.createElement("path", {
        d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
    })),
    Si = je(w.createElement("path", {
        d: "M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"
    })),
    C2 = je(w.createElement("path", {
        d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
    })),
    b2 = je(w.createElement("path", {
        d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    })),
    w2 = je(w.createElement("path", {
        d: "M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"
    })),
    k2 = je(w.createElement("path", {
        d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
    })),
    be = {
        basic: "0px 4px 33px -6px rgba(0, 0, 0, 0.46)"
    };
var P2 = Object.getOwnPropertyDescriptor,
    S2 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? P2(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const T2 = e => i.jsx("div", {
    style: {
        color: $.White
    },
    children: i.jsx(ir, {
        onClick: e.goBack,
        color: "inherit",
        children: i.jsx(u2, {})
    })
});
let ho = class extends w.Component {
    constructor() {
        super(...arguments), this.goBack = () => {
            jn.play(), ee(L.shop)
        }
    }
    render() {
        return this.props.navigation.currentRoute === L.upgrade ? i.jsx(T2, {
            goBack: this.goBack
        }) : null
    }
};
ho = S2([F("navigation"), D], ho);
const K = w.createContext(T),
    B2 = D(() => {
        const {
            navigation: e,
            questions: t,
            user: n,
            pardy: o
        } = w.useContext(K), r = () => e.currentRoute === L.questions || e.currentRoute === L.pardyMode, s = () => {
            Xe() ? Yr.play(o.currentQuestion) : Yr.play(sr(t.ceq))
        };
        return i.jsx(i.Fragment, {
            children: n.readToMeEnabled && Yr.hasFinishedReading() && Yr.canPlayAgain() && r() && i.jsx("div", {
                style: {
                    color: $.White
                },
                children: i.jsx(ir, {
                    onClick: s,
                    color: "inherit",
                    children: i.jsx(m2, {})
                })
            })
        })
    });
var br = {},
    Ti;

function E2() {
    if (Ti) return br;
    Ti = 1;
    var e = ks(),
        t = _a();
    Object.defineProperty(br, "__esModule", {
        value: !0
    }), br.default = void 0;
    var n = t(ze()),
        o = e(Ra()),
        r = (0, o.default)(n.createElement("path", {
            d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
        }), "Games");
    return br.default = r, br
}
var _2 = E2();
const R2 = Ar(_2);
let le = class extends w.Component {
    render() {
        return i.jsx("i", {
            className: this.props.name,
            style: this.props.style
        })
    }
};
var j2 = Object.getOwnPropertyDescriptor,
    O2 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? j2(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let M = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            text: this.props.text
        }, this.buildString = () => {
            let t = this.state.text;
            return this.props.suffix && (t += this.props.suffix), t
        }, this.requestTranslation = async () => {
            try {
                return (await gc.post("/api/translate", {
                    to: this.props.gameOptions.language,
                    text: this.props.text
                })).data
            } catch {
                return this.props.text
            }
        }
    }
    componentDidUpdate(t) {
        t.text !== this.props.text && (this.setState({
            text: this.props.text
        }), this.onTranslate())
    }
    componentDidMount() {
        this.onTranslate()
    }
    onTranslate() {
        if (this.props.gameOptions.language !== "en" && !this.props.text.includes(this.props.disableIfContains)) {
            if (this.props.translations[this.props.text]) return this.setState({
                text: this.props.translations[this.props.text]
            });
            this.requestTranslation().then(t => {
                this.props.translations[this.props.text] = t, this.setState({
                    text: t
                })
            }).catch()
        }
    }
    render() {
        return this.buildString()
    }
};
M = O2([F("translations", "gameOptions"), D], M);
const ce = {
        updatedPlayerLeaderboard: "UPDATED_PLAYER_LEADERBOARD",
        updatedTeamLeaderboard: "UPDATED_TEAM_LEADERBOARD",
        toast: "TOAST",
        nonDismissMessage: "NON_DISMISS_MESSAGE",
        playerJoinsStaticState: "PLAYER_JOINS_STATIC_STATE",
        stateUpdate: "STATE_UPDATE",
        thanosResults: "THANOS_RESULTS",
        balanceFlashRed: "BALANCE_FLASH_RED",
        deflected: "DEFLECTED",
        enablePowerupRNGAnimation: "ENABLE_POWERUP_RNG_ANIMATION",
        availableHomebaseUpgrades: "AVAILABLE_HOMEBASE_UPGRADES",
        defendingHomebaseStatus: "DEFENDING_HOMEBASE_STATUS",
        defendingHomebaseResults: "DEFENDING_HOMEBASE_RESULTS",
        playAgainNewGameCode: "PLAY_AGAIN_NEW_GAME_CODE",
        availableLavaUpgrades: "AVAILABLE_LAVA_UPGRADES",
        lavaResults: "LAVA_RESULTS",
        successModalInfo: "SUCCESS_MODAL_INFO",
        imposter: {
            people: "IMPOSTER_MODE_PEOPLE"
        },
        draw: {
            line: "DRAW_MODE_LINE",
            feedItem: "DRAW_MODE_FEED_ITEM",
            clear: "DRAW_MODE_CLEAR"
        }
    },
    V = {
        subtractor: "Subtractor",
        reducer: "Reducer",
        shield: "Shield",
        pumpkinPie: "Pumpkin Pie",
        icer: "Icer",
        fivePercentBot: "5 Percent Bot",
        giving: "Giving",
        repurchasePowerups: "repurchasePowerups",
        link: "Link",
        undercover: "Undercover",
        clapMultiplier: "Clap Multiplier",
        blurredScreen: "Blurred Screen",
        cashConcealer: "Cash Concealer",
        outnumbered: "outnumbered",
        minuteMoreEarnings: "minuteMoreEarnings"
    };
var mo = (e => (e.specialSound = "specialSound", e))(mo || {});
const ur = () => T && T.powerups && T.powerups.screenAttack && T.powerups.screenAttack.powerupName ? T.powerups.screenAttack.powerupName : "",
    M2 = () => {
        const e = ur();
        return e === V.icer ? H("iced.jpeg") : e === V.pumpkinPie ? H("pied.jpeg") : ""
    },
    D2 = () => {
        const e = ur();
        e === V.icer && Bd.play(), e === V.pumpkinPie && Rd.play()
    },
    I2 = () => {
        const e = ur();
        return e === V.icer ? "Frozen" : e === V.pumpkinPie ? "Pied" : ""
    },
    $2 = () => {
        const e = ur();
        return e === V.icer ? "You're Frozen!" : e === V.pumpkinPie ? "You've been Pied!" : ""
    },
    N2 = () => {
        const e = ur();
        return e === V.icer ? $.White : e === V.pumpkinPie ? "#e65100" : $.White
    },
    L2 = () => {
        const e = ur();
        return e === V.icer ? "far fa-snowflake" : e === V.pumpkinPie ? "far fa-pie" : ""
    },
    A2 = () => {
        const e = T.powerups.screenAttack;
        if (!e.powerupName || e.powerupName !== V.blurredScreen) {
            T.ui.blurredScreen && (T.ui.blurredScreen = !1);
            return
        }
        e.powerupName === V.blurredScreen && (T.ui.blurredScreen = !0)
    },
    Y = {
        playerQuestionList: "PLAYER_QUESTION_LIST",
        playerQuestionListIndex: "PLAYER_QUESTION_LIST_INDEX",
        gameQuestions: "GAME_QUESTIONS",
        purchasedPowerups: "PURCHASED_POWERUPS",
        usedPowerups: "USED_POWERUPS",
        personalActivePowerups: "PERSONAL_ACTIVE_POWERUPS",
        balance: "BALANCE",
        balanceChange: "BALANCE_CHANGE",
        name: "NAME",
        group: "GROUP",
        theme: "THEME",
        purchasedThemes: "PURCHASED_THEMES",
        upgradeLevels: "UPGRADE_LEVELS",
        upgradePricingDiscount: "UPGRADE_PRICING_DISCOUNT",
        gameStatus: "GAME_STATUS",
        incomeMultiplier: "INCOME_MULTIPLIER",
        teamActivePowerups: "TEAM_ACTIVE_POWERUPS",
        linkInfo: "LINK_INFO",
        teamInfo: "TEAM_INFO",
        maxBalance: "MAX_BALANCE",
        disabledPowerups: "DISABLED_POWERUPS",
        fullScreenPlayerBlack: "FULL_SCREEN_PLAYER_BLACK",
        screenAttack: "SCREEN_ATTACK",
        streakAmount: "STREAK_AMOUNT",
        appliedPowerups: "APPLIED_POWERUPS",
        teamAppliedPowerups: "TEAM_APPLIED_POWERUPS",
        questionsAnsweredCorrectly: "QUESTIONS_ANSWERED_CORRECTLY",
        questionsAnsweredIncorrectly: "QUESTIONS_ANSWERED_INCORRECTLY",
        imposter: {
            status: "IMPOSTER_MODE_STATUS",
            remainingInvestigations: "IMPOSTER_MODE_REMAINING_INVESTIGATIONS",
            remainingMeetings: "IMPOSTER_MODE_REMAINING_MEETINGS",
            remainingImposters: "IMPOSTER_MODE_REMAINING_IMPOSTERS",
            person: "IMPOSTER_MODE_PERSON",
            shopItems: "IMPOSTER_MODE_SHOP_ITEMS"
        },
        draw: {
            round: "DRAW_MODE_ROUND",
            person: "DRAW_MODE_PERSON",
            status: "DRAW_MODE_STATUS"
        },
        pardy: {
            state: "PARDY_MODE_STATE",
            person: "PARDY_MODE_PERSON"
        }
    },
    z2 = () => {
        if (T.gameValues.gameStatus === $e.results) {
            ee(L.gameOver);
            return
        }
        if (T.gameValues.gameStatus === $e.teams) {
            ee(L.team);
            return
        }
        if (T.gameValues.gameStatus === $e.gameplay) {
            $s();
            return
        }
        ee(L.waiting)
    },
    W2 = "Player [Still Entering Name]";
let Bi = !1;
const F2 = (e, t) => {
        const {
            type: n,
            value: o
        } = e;
        if (n === Y.balance) {
            T.balance.balance = o, o > T.balance.maxBalance && (T.balance.maxBalance = o);
            return
        }
        if (n === Y.balanceChange) {
            T.balance.balanceChangeIfCorrect = o.balanceChangeIfCorrect, T.balance.balanceChangeIfIncorrect = o.balanceChangeIfIncorrect;
            return
        }
        if (n === Y.gameQuestions) {
            T.questions.setQuestions(o);
            return
        }
        if (n === Y.playerQuestionList) {
            T.questions.questionList.replace(o.questionList), (!T.questions.ceq || T.questions.transitioningToNextQuestion) && T.questions.setCurrentQuestion(o.questionIndex);
            return
        }
        if (n === Y.playerQuestionListIndex) {
            T.questions.transitioningToNextQuestion && T.questions.setCurrentQuestion(o);
            return
        }
        if (n === Y.purchasedPowerups) {
            T.powerups.purchasedPowerups.replace(o);
            return
        }
        if (n === Y.usedPowerups) {
            T.powerups.usedPowerups.replace(o);
            return
        }
        if (n === Y.personalActivePowerups) {
            T.powerups.personalActivePowerups.replace(o);
            return
        }
        if (n === Y.teamActivePowerups) {
            T.powerups.teamActivePowerups.replace(o);
            return
        }
        if (n === Y.name) {
            if (o === W2) {
                T.engine.hasLeftRoom && window.location.reload();
                return
            }
            T.user.name = o;
            return
        }
        if (n === Y.group) {
            T.user.groupId = o.groupId, T.user.groupMemberId = o.groupMemberId;
            return
        }
        if (n === Y.theme) {
            const s = o,
                a = T.theme.availableThemes.filter(c => c && c.name && c.name === s)[0];
            if (!a) return;
            T.theme.themeName = s, T.theme.theme.defaultBackground = a.question.background, T.theme.theme.question = a.question, T.theme.theme.palette = a.palette, s === "Default" ? (T.theme.theme.response.shop = e3, T.theme.theme.response.continue = t3) : (T.theme.theme.response.shop = a.palette[0], T.theme.theme.response.continue = a.palette[1]);
            return
        }
        if (n === Y.purchasedThemes) {
            T.theme.ownedThemes.replace(o);
            return
        }
        if (n === Y.upgradeLevels) {
            T.upgrades.upgradeLevels = o;
            return
        }
        if (n === Y.upgradePricingDiscount) {
            T.upgrades.upgradePricingDiscount = o;
            return
        }
        if (n === Y.gameStatus) {
            T.gameValues.gameStatus = o, Bi || (Bi = !0, z2());
            return
        }
        if (n === Y.incomeMultiplier) {
            T.balance.incomeMultiplier = o;
            return
        }
        if (n === Y.linkInfo) {
            T.powerups.linkPartnerName = o.name;
            return
        }
        if (n === Y.teamInfo) {
            T.user.team = o;
            return
        }
        if (n === Y.maxBalance) {
            T.balance.maxBalance = o;
            return
        }
        if (n === Y.disabledPowerups) {
            T.powerups.disabledPowerups.replace(o);
            return
        }
        if (n === Y.fullScreenPlayerBlack) {
            T.ui.fullBlackScreen = o.on;
            return
        }
        if (n === Y.screenAttack) {
            o && (T.powerups.screenAttack.attackerName = o.attackerName, T.powerups.screenAttack.powerupName = o.powerupName, T.powerups.screenAttack.fullScreen = o.fullScreen), A2();
            return
        }
        if (n === Y.streakAmount) {
            T.balance.streakAmount = o;
            return
        }
        if (n === Y.appliedPowerups) {
            T.powerups.personalAppliedPowerups.replace(o);
            return
        }
        if (n === Y.teamAppliedPowerups) {
            T.powerups.teamAppliedPowerups.replace(o);
            return
        }
        if (n === Y.imposter.status) {
            T.imposter.status = o, T.imposter.currentShopItemModalVisible = !1;
            return
        }
        if (n === Y.imposter.shopItems) {
            T.imposter.shopItems.replace(o);
            return
        }
        if (n === Y.imposter.person) {
            T.imposter.me = o;
            return
        }
        if (n === Y.imposter.remainingInvestigations) {
            T.imposter.investigationsLeft = o;
            return
        }
        if (n === Y.imposter.remainingMeetings) {
            T.imposter.meetingsLeft = o;
            return
        }
        if (n === Y.imposter.remainingImposters) {
            T.imposter.impostersLeft = o;
            return
        }
        if (n === Y.questionsAnsweredCorrectly) {
            T.questions.questionsAnsweredCorrectly = o;
            return
        }
        if (n === Y.questionsAnsweredIncorrectly) {
            T.questions.questionsAnsweredIncorrectly = o;
            return
        }
        const r = t.find(s => s.key === e.type);
        if (r) {
            r.listener.applyPatches(e.value);
            return
        }
    },
    U2 = ["secondsLeft", "term", "drawer", "drawingBase64", "termOptions", "revealText"],
    q2 = () => {
        const e = new zr;
        return U2.forEach(t => {
            e.onPropChange(t, n => {
                T.draw.round[t] = n
            })
        }), {
            key: Y.draw.round,
            listener: e
        }
    },
    G2 = ["answeredCorrectly", "lastRound", "role"],
    H2 = () => {
        const e = new zr;
        return G2.forEach(t => {
            e.onPropChange(t, n => {
                T.draw.me[t] = n
            })
        }), {
            key: Y.draw.person,
            listener: e
        }
    },
    V2 = () => {
        const e = new zr;
        return e.onPropChange("value", t => {
            T.draw.status = t
        }), {
            key: Y.draw.status,
            listener: e
        }
    },
    Q2 = ["screen", "questionScreen", "questionStatus", "powers", "currentQuestionId", "tips", "answerLockedInWittyMessages", "correctWittyMessages", "incorrectWittyMessages"],
    Y2 = ["powers", "tips", "answerLockedInWittyMessages", "correctWittyMessages", "incorrectWittyMessages"],
    X2 = () => {
        const e = new zr;
        return Q2.forEach(t => {
            e.onPropChange(t, n => {
                if (Y2.includes(t)) T.pardy[t].replace(n);
                else if (t === "currentQuestionId") {
                    const o = Is().find(r => r._id === n);
                    o && (T.pardy.currentQuestion = {
                        ...o,
                        answers: Le.shuffle(o.answers)
                    })
                } else T.pardy[t] = n
            })
        }), {
            key: Y.pardy.state,
            listener: e
        }
    },
    J2 = ["answerResponseItems", "powerOptions"],
    K2 = ["power", "answered", "answeredCorrectly", "answerResponseItems", "maxBet", "currentBet", "powerOptions"],
    Z2 = () => {
        const e = new zr;
        return K2.forEach(t => {
            e.onPropChange(t, n => {
                J2.includes(t) ? T.pardy[t].replace(n) : T.pardy[t] = n
            })
        }), {
            key: Y.pardy.person,
            listener: e
        }
    },
    eu = [q2, H2, V2, X2, Z2],
    Ls = () => {
        var e, t;
        return ((t = (e = T == null ? void 0 : T.engine) == null ? void 0 : e.client) == null ? void 0 : t.id) || ""
    },
    tu = e => {
        T.engine.game = e;
        const t = eu.map(n => n());
        e.onMessage.add((n, o) => {
            const r = {
                action: n,
                payload: o
            };
            if (r.action === ce.stateUpdate) {
                F2({
                    type: o.type,
                    value: o.value
                }, t);
                return
            }
            if (r.action === ce.playerJoinsStaticState) {
                const s = o;
                T.gameOptions.setGameOptions(s.gameOptions), T.upgrades.upgrades.replace(s.upgrades), T.theme.availableThemes.replace(s.themes), T.powerups.availablePowerups.replace(s.powerups), s.news && T.gameValues.news.replace(s.news), s.gameOptions.specialGameType.includes($d) && (T.navigation.currentShopTab = me.defendingHomebase), s.gameOptions.specialGameType.includes(Rs) && yn("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap");
                return
            }
            if (r.action === ce.updatedPlayerLeaderboard) {
                let s = 1;
                Tn(r.payload.items).forEach((c, d) => {
                    c.id === Ls() && (s = d + 1)
                }), T.user.place = s, T.gameValues.players.replace(r.payload.items);
                return
            }
            if (r.action === ce.updatedTeamLeaderboard) {
                let s = 1;
                Tn(r.payload.items).forEach((c, d) => {
                    c.id === T.user.team.id && (s = d + 1)
                }), T.user.place = s, T.gameValues.teams.replace(r.payload.items);
                return
            }
            if (r.action === ce.toast) {
                qd(r.payload.message, r.payload);
                return
            }
            if (r.action === ce.nonDismissMessage) {
                Qd(r.payload.message, r.payload.title);
                return
            }
            if (r.action === ce.thanosResults) {
                T.gameValues.thanosValues = r.payload;
                return
            }
            if (r.action === ce.balanceFlashRed && (T.balance.customColor = "#f44336", _d.play(), setTimeout(() => T.balance.customColor = "", 1e3)), r.action === ce.deflected) {
                Od.play();
                return
            }
            if (r.action === ce.enablePowerupRNGAnimation) {
                T.gameOptions.enablePowerupRNGAnimation = !0;
                return
            }
            if (r.action === ce.availableHomebaseUpgrades) {
                T.navigation.currentShopTab = me.defendingHomebase, T.upgrades.homebaseUpgades.replace(r.payload);
                return
            }
            if (r.action === ce.defendingHomebaseStatus) {
                T.entities.defendingHomebase = r.payload;
                return
            }
            if (r.action === ce.defendingHomebaseResults) {
                T.gameValues.defendingHomebaseResults = r.payload;
                return
            }
            if (r.action === ce.playAgainNewGameCode) {
                T.user.groupMemberId || localStorage.setItem(Ic, T.user.name), window.location.href = `/join?gc=${r.payload}`;
                return
            }
            if (r.action === ce.availableLavaUpgrades) {
                T.navigation.currentShopTab = me.lava, T.upgrades.lavaUpgrades.replace(o);
                return
            }
            if (r.action === ce.lavaResults) {
                T.entities.lava = o;
                return
            }
            if (r.action === ce.successModalInfo) {
                T.ui.successModalInfo = o, T.ui.showingSuccessModal = !0, o.sound && new se.Howl({
                    src: [H(o.sound)]
                }).play();
                return
            }
            if (r.action === ce.imposter.people) {
                T.imposter.epl = bn(o, "impostor");
                return
            }
            if (r.action === ce.draw.line) {
                T.draw.latestLine = o;
                return
            }
            if (r.action === ce.draw.feedItem) {
                T.draw.latestFeedItem = o;
                return
            }
            if (r.action === ce.draw.clear) {
                T.draw.shouldClearCanvas = !0;
                return
            }
        })
    };
var ru = Object.getOwnPropertyDescriptor,
    nu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? ru(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const ou = "fas fa-shield-alt",
    s3 = "fas fa-link",
    Ei = k.div`
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100%;
  background: ${e=>e.backgroundColor};
  border-radius: ${e=>e.customBorderRadius||3}px;
  color: ${e=>e.textColor};
  padding: 9px;
  box-sizing: border-box;
  box-shadow: ${be.basic};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: bold;
  font-size: 23px;
  align-items: center;
  font-family: ${()=>Fr()};
`,
    _i = k.div`
  display: flex;
  align-items: center;
  flex: 1;
`,
    Ri = k.div`
  height: 40px;
  margin-right: 5px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.backgroundColor};
  color: ${e=>e.textColor};
`,
    su = k.div`
  font-weight: normal;
  font-size: 15px;
`,
    iu = e => {
        let t = "";
        return e.players.forEach((n, o) => {
            t += n, o + 1 !== e.players.length && (t += ", ")
        }), t
    };
let Sn = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            showingBalance: !1
        }, this.canUsePowerup = () => {
            const e = this.props.navigation.attackModal.powerup;
            return !e || e === V.giving ? !0 : !(this.props.item.activePowerups.includes(V.shield) || e === V.link && this.props.item.activePowerups.includes(V.link))
        }, this.getIcon = () => {
            const e = this.props.item.activePowerups;
            if (e.includes(V.shield)) return ou;
            if (e.includes(V.link)) return s3;
            if (this.props.isPlayer) return null;
            {
                const t = this.props.item;
                return Gd(t.id)
            }
        }, this.getUseButtonText = () => {
            const e = this.props.navigation.attackModal.powerup;
            return e === V.link ? "Link" : e === V.giving ? "Give" : "Use"
        }, this.attack = () => {
            if (this.props.isPlayer) {
                const e = this.props.item;
                wi(e.id, e.name)
            } else {
                const e = this.props.item;
                wi(e.id, bi(e.id))
            }
            this.props.parentAction && this.props.parentAction()
        }, this.toggleBalanceVisiblity = () => {
            !Dr() && (Ns() || !Dn() && this.props.gameValues.gameStatus === $e.gameplay) || this.setState({
                showingBalance: !this.state.showingBalance
            })
        }
    }
    render() {
        const e = this.props,
            t = this.getIcon();
        if (e.item.activePowerups.includes(V.undercover) && !this.props.showHidden) return null;
        const {
            isPlayer: n
        } = e;
        if (n) {
            const r = e.item;
            if (r.id === Ls() && !this.props.showSelf) return null;
            const s = this.props.theme.availableThemes.filter(d => d.name === r.theme)[0];
            s || (s.name = "Default");
            let a = $.White,
                c = $.Black;
            return s.name !== "Default" && (a = s.question.background, c = s.question.text), i.jsxs(Ei, {
                backgroundColor: a,
                textColor: c,
                customBorderRadius: this.props.customBorderRadius,
                children: [i.jsxs(_i, {
                    children: [i.jsx(Ri, {
                        backgroundColor: s.palette[0].background,
                        textColor: s.palette[0].text,
                        children: i.jsx(nt, {
                            paddingHorizontal: 7,
                            paddingVertical: 7,
                            text: t ? i.jsx(le, {
                                name: t
                            }) : e.position.toString()
                        })
                    }), i.jsx("div", {
                        onClick: this.toggleBalanceVisiblity,
                        style: {
                            width: "calc(100% - 50px)",
                            marginLeft: 7,
                            cursor: "pointer"
                        },
                        children: this.state.showingBalance ? Dr() ? `${r.stones} stone${r.stones===1?"":"s"}` : xe(r.balance) : r.name
                    })]
                }), this.props.usePowerupAction && i.jsx("div", {
                    style: {
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 15
                    },
                    children: i.jsx(Ae, {
                        type: this.canUsePowerup() ? "primary" : "disabled",
                        label: i.jsx(M, {
                            text: this.getUseButtonText()
                        }),
                        size: "small",
                        onClick: this.attack
                    })
                })]
            })
        }
        const o = e.item;
        return o.id === e.user.team.id && !this.props.showSelf ? null : i.jsxs(Ei, {
            backgroundColor: $.White,
            textColor: $.Black,
            customBorderRadius: this.props.customBorderRadius,
            children: [i.jsxs(_i, {
                children: [i.jsx(Ri, {
                    backgroundColor: Ms(o.id),
                    textColor: $.White,
                    children: i.jsx(nt, {
                        paddingHorizontal: 7,
                        paddingVertical: 7,
                        text: t ? i.jsx(le, {
                            name: t
                        }) : e.position.toString()
                    })
                }), i.jsxs("div", {
                    onClick: this.toggleBalanceVisiblity,
                    style: {
                        width: "calc(100% - 50px)",
                        marginLeft: 7,
                        cursor: "pointer"
                    },
                    children: [i.jsx("div", {
                        children: this.state.showingBalance ? xe(o.balance) : i.jsx(M, {
                            text: bi(o.id)
                        })
                    }), i.jsx(su, {
                        children: iu(o)
                    })]
                })]
            }), this.props.usePowerupAction && i.jsx("div", {
                style: {
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 15
                },
                children: i.jsx(Ae, {
                    type: this.canUsePowerup() ? "primary" : "disabled",
                    label: i.jsx(M, {
                        text: this.getUseButtonText()
                    }),
                    size: "small",
                    onClick: this.attack
                })
            })]
        })
    }
};
Sn = nu([F("engine", "user", "theme", "gameOptions", "navigation", "gameValues"), D], Sn);
var au = Object.getOwnPropertyDescriptor,
    cu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? au(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Tn = e => {
        const t = Dr() ? "stones" : "balance";
        return e.slice().sort((n, o) => n[t] === o[t] ? 0 : n[t] > o[t] ? -1 : 1)
    },
    i3 = () => oe(Dn() ? ne.requestTeamLeaderboard : ne.requestPlayerLeaderboard);
let Ir = class extends w.Component {
    componentDidMount() {
        i3()
    }
    render() {
        const e = Dn();
        let t = [],
            n = [];
        return e && !this.props.gameValues.teams.length || !e && !this.props.gameValues.players.length ? null : (e ? t = Tn(this.props.gameValues.teams) : n = Tn(this.props.gameValues.players), i.jsx("div", {
            style: {
                width: "100%"
            },
            children: e ? t.map((o, r) => i.jsx(Sn, {
                item: o,
                position: r + 1,
                isPlayer: !1,
                usePowerupAction: this.props.usePowerupAction,
                parentAction: this.props.parentAction,
                showSelf: this.props.showSelf,
                showHidden: this.props.showHidden,
                customBorderRadius: this.props.customItemBorderRadius
            }, o.id)) : n.map((o, r) => i.jsx(Sn, {
                item: o,
                position: r + 1,
                isPlayer: !0,
                usePowerupAction: this.props.usePowerupAction,
                parentAction: this.props.parentAction,
                showSelf: this.props.showSelf,
                showHidden: this.props.showHidden,
                customBorderRadius: this.props.customItemBorderRadius
            }, o.id))
        }))
    }
};
Ir = cu([F("gameValues", "gameOptions"), D], Ir);
var lu = Object.getOwnPropertyDescriptor,
    du = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? lu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let go = class extends w.Component {
    constructor() {
        super(...arguments), this.open = () => {
            this.props.navigation.leaderboardDrawerOpen = !0, i3()
        }
    }
    render() {
        return this.props.gameOptions.type !== ws.live || ar() || Tt() || ve() || Ns() || Xe() ? null : i.jsx(ir, {
            onClick: this.open,
            color: "inherit",
            "aria-label": "Leaderboard",
            children: i.jsx(R2, {})
        })
    }
};
go = du([F("navigation", "gameOptions"), D], go);
var uu = Object.getOwnPropertyDescriptor,
    pu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? uu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const fu = k.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.colors.background};
  color: ${e=>e.colors.text};
  margin-right: 5px;
`,
    a3 = e => i.jsx(Ss, {
        placement: "right",
        title: e.name ? i.jsx("div", {
            style: {
                fontSize: 15
            },
            children: i.jsx(M, {
                text: e.name + " active"
            })
        }) : null,
        children: i.jsx(fu, {
            colors: e.color,
            children: i.jsx(le, {
                name: e.icon
            })
        })
    });
let vo = class extends w.Component {
    render() {
        const e = this.props.powerups.availablePowerups.filter(t => this.props.powerups.activePowerups.includes(t.name));
        return i.jsx("div", {
            style: {
                display: "flex"
            },
            children: e.map(t => i.jsx(a3, {
                name: $n(t),
                icon: t.icon,
                color: t.color
            }, t.name))
        })
    }
};
vo = pu([F("powerups"), D], vo);
const hu = e => {
        const t = w.useRef(),
            n = `bonus-item-index-${e.index}`;
        return w.useEffect(() => {
            if (e.selected) {
                const o = document.getElementById(n);
                o && e.onX(o.offsetLeft)
            }
        }, [e.selected, e.amount]), i.jsxs(i.Fragment, {
            children: [i.jsxs(mu, {
                id: n,
                ref: t,
                children: [i.jsx(gu, {
                    children: e.index
                }), i.jsx(vu, {
                    children: xe(e.amount)
                })]
            }), e.hideArrow ? null : i.jsx(le, {
                style: {
                    marginRight: 30,
                    opacity: .5
                },
                name: "fas fa-long-arrow-right"
            })]
        })
    },
    mu = k.div`
  margin-right: 30px;
`,
    gu = k.div`
  font-size: 11px;
  margin-bottom: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`,
    vu = k.div`
  padding: 8px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`,
    xu = e => {
        const {
            moneyPerQuestion: t,
            streakBonus: n,
            multiplier: o,
            incomeMultiplier: r,
            activePowerups: s
        } = e, a = s.includes(V.minuteMoreEarnings);
        return Array.from(Array(100).keys()).map((c, d) => {
            let l = t;
            return l += n * d, l *= o, l *= r, a && (l *= 2), Math.round(l)
        })
    };
var yu = Object.getOwnPropertyDescriptor,
    Cu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? yu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let xo = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            xValue: 0
        }, this.changeX = t => this.setState({
            xValue: t
        }), this.findUpgradeValue = t => {
            const n = this.props.upgrades.upgrades.find(r => r.name === t);
            if (!n) return 1;
            const o = n.levels[this.props.upgrades.upgradeLevels[zt(t)] - 1];
            return o ? o.value : 1
        }, this.canShow = () => {
            const {
                navigation: {
                    currentRoute: t
                },
                upgrades: n
            } = this.props;
            return n.upgrades.length ? t === L.questions || t === L.upgrade : !1
        }
    }
    render() {
        if (ve() || Xe()) return null;
        const {
            balance: t
        } = this.props, n = this.canShow(), o = xu({
            moneyPerQuestion: this.findUpgradeValue(Ve.moneyPerQuestion),
            streakBonus: this.findUpgradeValue(Ve.streakBonus),
            multiplier: this.findUpgradeValue(Ve.multiplier),
            incomeMultiplier: t.incomeMultiplier,
            activePowerups: this.props.powerups.activePowerups
        });
        return i.jsx(bu, {
            animate: {
                height: n ? "auto" : 0
            },
            transition: {
                duration: .3
            },
            children: i.jsx(wu, {
                children: i.jsx(ku, {
                    initial: {
                        x: 20
                    },
                    animate: {
                        x: this.state.xValue ? -this.state.xValue + 20 : 20
                    },
                    transition: {
                        ease: "anticipate",
                        duration: .6
                    },
                    children: o.map((r, s) => i.jsx(hu, {
                        index: s,
                        amount: this.props.balance.streakAmount === s ? Math.max(r, t.balanceChangeIfCorrect) : r,
                        onX: this.changeX,
                        selected: this.props.balance.streakAmount === s,
                        hideArrow: s >= 99
                    }, `money-item-${s}`))
                })
            })
        })
    }
};
xo = Cu([F("navigation", "balance", "upgrades", "powerups"), D], xo);
const bu = k(ke.div)`
  width: 100%;
  background: #4252af;
  overflow: hidden;
`,
    wu = k.div`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 7.5px;
  width: 100%;
`,
    ku = k(ke.div)`
  display: flex;
  align-items: center;
`;
var wr = {},
    ji;

function Pu() {
    if (ji) return wr;
    ji = 1;
    var e = ks(),
        t = _a();
    Object.defineProperty(wr, "__esModule", {
        value: !0
    }), wr.default = void 0;
    var n = t(ze()),
        o = e(Ra()),
        r = (0, o.default)(n.createElement("path", {
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        }), "Description");
    return wr.default = r, wr
}
var Su = Pu();
const Tu = Ar(Su);
var Bu = Object.getOwnPropertyDescriptor,
    Eu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Bu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let yo = class extends w.Component {
    constructor() {
        super(...arguments), this.open = () => {
            this.props.imposter.noteDrawerOpen = !0
        }
    }
    render() {
        return ve() ? i.jsx(ir, {
            onClick: this.open,
            color: "inherit",
            "aria-label": "notes",
            children: i.jsx(Tu, {})
        }) : null
    }
};
yo = Eu([F("imposter"), D], yo);
const _u = 63,
    Ru = [L.join, L.drawMode],
    c3 = [L.waiting, L.gameOver, L.team, L.nonDismissMessage, L.imposterMode],
    ju = k.div`
  flex: 0 1 auto;
  color: ${$.White};
`,
    Oi = k.div`
  height: ${_u}px;
  background: #4252af;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${be.basic};
  z-index: 1;
`,
    Mi = k.div`
  width: 100%;
  display: flex;
  align-items: center;
`,
    Ou = D(() => {
        const {
            balance: e,
            user: t,
            navigation: n,
            powerups: o,
            questions: {
                lockedViewingCorrectAnswer: r
            }
        } = w.useContext(K), s = w.useCallback(() => {
            if (!r) return n.currentRoute === L.questions ? ee(L.shop) : ee(L.questions)
        }, [n.currentRoute, r]), a = w.useCallback(() => {
            const l = {
                fontWeight: 900,
                cursor: "pointer",
                fontSize: 22
            };
            return t.team ? {
                ...l,
                padding: 5,
                backgroundColor: Ms(),
                borderRadius: 4
            } : l
        }, [t.team]), c = w.useCallback(() => Mn(!0), []), d = () => Ns() || o.appliedPowerups.includes(V.cashConcealer) ? i.jsx("div", {}) : i.jsx("div", {
            onClick: s,
            style: a(),
            children: xe(e.balance)
        });
        return Ru.includes(n.currentRoute) ? null : c3.includes(n.currentRoute) ? i.jsx(Oi, {
            children: i.jsx(Mi, {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: i.jsx("img", {
                    src: "/client/img/svgLogoWhite.svg",
                    style: {
                        height: 30
                    }
                })
            })
        }) : i.jsxs(ju, {
            children: [i.jsx(Oi, {
                children: i.jsxs(Mi, {
                    style: {
                        paddingLeft: 8,
                        paddingRight: 10
                    },
                    children: [i.jsx(ho, {}), i.jsx(ir, {
                        onClick: c,
                        color: "inherit",
                        "aria-label": "Menu",
                        children: i.jsx(x2, {})
                    }), i.jsx(go, {}), i.jsx(B2, {}), i.jsx(yo, {}), i.jsx(vo, {}), i.jsxs("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: e.customColor ? e.customColor : "inherit",
                            transition: "color 0.25s"
                        },
                        children: [i.jsx("div", {}), i.jsx("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: i.jsx("div", {
                                children: t.team ? i.jsx(Ss, {
                                    title: i.jsx("div", {
                                        style: {
                                            fontSize: 19,
                                            padding: 5
                                        },
                                        children: Os(t.team.id)
                                    }),
                                    placement: "left",
                                    children: d()
                                }) : d()
                            })
                        })]
                    })]
                })
            }), i.jsx(xo, {})]
        })
    }),
    Di = e => {
        const t = () => {
            e.disabled || (e.onClick && e.onClick(), ee(e.to))
        };
        return i.jsx("span", {
            onClick: t,
            children: e.children
        })
    },
    Mu = k.div`
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 2px;
  border-radius: 6px;
  margin-bottom: 5px;
  font-family: ${Ee.name};
`;
var Du = Object.getOwnPropertyDescriptor,
    Iu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Du(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Ii = 43;
let Co = class extends w.Component {
    render() {
        return this.props.powerups.linkPartnerName ? i.jsx(Mu, {
            children: i.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [i.jsx("div", {
                    style: {
                        background: $.DarkSuccessGreen,
                        color: $.White,
                        height: Ii,
                        width: Ii,
                        marginRight: 7,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: i.jsx(le, {
                        name: s3
                    })
                }), i.jsxs("div", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: [i.jsx($u, {
                        children: i.jsx(M, {
                            text: "Link Active"
                        })
                    }), i.jsx(Nu, {
                        children: this.props.powerups.linkPartnerName
                    })]
                })]
            })
        }) : null
    }
};
Co = Iu([F("powerups"), D], Co);
const $u = k.div`
  font-size: 17px;
  opacity: 0.8;
`,
    Nu = k.div`
  font-size: 20px;
  text-overflow: ellipsis;
  width: 261px;
  white-space: nowrap;
  overflow: hidden;
`;
var l3 = (e => (e.setup = "setup", e.join = "join", e.teams = "teams", e.gameplay = "gameplay", e.results = "results", e))(l3 || {}),
    Lu = Object.getOwnPropertyDescriptor,
    Au = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Lu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const zu = k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  animation-duration: 0.5;
  font-family: ${Ee.name};
  z-index: 9999999999999;
`,
    Wu = k.div`
  background: ${$.White};
  border-radius: 4px;
  box-shadow: ${be.basic};
  animation-duration: 0.5s;
  ${e=>e.fullScreen?`
  height: 100%;
  width: 100%;
  `:`
  max-width: ${e.customMaxWidth?e.customMaxWidth:"540px"};
  ${e.customWidth?"width: "+e.customWidth+";":null}
  max-height: 79vh;
  margin: 20px;
  `}
  padding: ${e=>e.customPadding||"18px"};
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 9999999999999;
`,
    Fu = e => e.stopPropagation();
let wt = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            exiting: !1,
            open: !1
        }
    }
    static getDerivedStateFromProps(t, n) {
        return !t.open && n.open ? (bd.play(), {
            exiting: !0,
            open: !1
        }) : t.open && !n.open ? {
            exiting: !1,
            open: !0
        } : null
    }
    componentDidUpdate(t, n) {
        this.state.exiting && !n.exiting && setTimeout(() => this.setState({
            exiting: !1
        }), 500)
    }
    render() {
        const {
            close: t,
            gameValues: {
                gameStatus: n
            }
        } = this.props, {
            open: o,
            exiting: r
        } = this.state;
        if (!o && !r || n === l3.results) return null;
        const s = {
            container: r ? "fadeOut" : "fadeIn",
            content: r ? "zoomOut" : "zoomIn"
        };
        return Lr.createPortal(i.jsx(zu, {
            className: `animated ${s.container}`,
            onClick: t,
            children: i.jsx(Wu, {
                onClick: Fu,
                fullScreen: this.props.fullscreen,
                className: `animated ${s.content}`,
                customPadding: this.props.customPadding,
                customMaxWidth: this.props.customMaxWidth,
                customWidth: this.props.customWidth,
                style: this.props.customStyle,
                children: this.props.children
            })
        }), document.body)
    }
};
wt = Au([F("gameValues"), D], wt);
var Uu = Object.getOwnPropertyDescriptor,
    qu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Uu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Gu = k.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${Ee.name};
`,
    Hu = k.div`
  font-size: 38px;
  margin-left: 5px;
  font-weight: 900;
`,
    Vu = k.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${e=>e.backgroundColor};
  color: ${e=>e.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`,
    Qu = k.div`
  font-size: 19px;
  opacity: 0.8;
  margin-bottom: 7px;
  font-family: ${Ee.name};
`;
let bo = class extends w.Component {
    constructor() {
        super(...arguments), this.close = () => this.props.navigation.attackModal.open = !1
    }
    render() {
        const e = (this.props.powerups.availablePowerups.filter(n => n.name === this.props.navigation.attackModal.powerup) || [])[0];
        if (!e) return null;
        const t = !(e.name === V.link && this.props.powerups.activePowerups.includes(V.shield));
        return i.jsxs(wt, {
            open: this.props.navigation.attackModal.open,
            close: this.close,
            customMaxWidth: "90%",
            customWidth: "600px",
            children: [i.jsxs(Gu, {
                children: [i.jsx(Vu, {
                    backgroundColor: e.color.background,
                    textColor: e.color.text,
                    children: i.jsx(le, {
                        name: e.icon
                    })
                }), i.jsx(Hu, {
                    children: i.jsx(M, {
                        text: $n(e)
                    })
                })]
            }), i.jsx(Qu, {
                children: i.jsx(M, {
                    text: t ? Ds(e.description) : "This powerup is disabled while shield is active"
                })
            }), t && i.jsx(Ir, {
                usePowerupAction: !0,
                parentAction: this.close
            })]
        })
    }
};
bo = qu([F("powerups", "navigation"), D], bo);
var Yu = Object.getOwnPropertyDescriptor,
    Xu = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Yu(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Ju = [V.pumpkinPie, V.icer, V.reducer, V.subtractor, V.giving, V.link, V.blurredScreen, V.cashConcealer, V.outnumbered],
    Ku = k.div`
  margin: 5px;
  margin-bottom: 3px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${Ee.name};
  border-style: solid;
  border-radius: 6px;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 2px;
  padding: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 52px;
`,
    Zu = k.div`
  display: flex;
  align-items: center;
`,
    e0 = k.div`
  background-color: ${e=>e.colors.background};
  color: ${e=>e.colors.text};
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    t0 = k.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7px;
`;
let wo = class extends w.Component {
    constructor() {
        super(...arguments), this.activatePowerup = () => {
            this.props.powerup.name.includes("Stone") ? Ed.play() : (On.play(), this.props.powerup.name !== V.repurchasePowerups && Mn(!1)), oe(ne.powerupActivated, this.props.powerup.name), Ju.includes(this.props.powerup.name) && (this.props.navigation.attackModal.powerup = this.props.powerup.name, this.props.navigation.attackModal.open = !0)
        }
    }
    render() {
        const {
            powerup: t
        } = this.props;
        return i.jsx("div", {
            style: {
                display: "inline-block",
                width: "100%"
            },
            children: i.jsxs(Ku, {
                children: [i.jsxs(Zu, {
                    children: [i.jsx(Ss, {
                        title: i.jsx("div", {
                            style: {
                                fontSize: 15
                            },
                            children: i.jsx(M, {
                                text: Ds(t.description)
                            })
                        }),
                        children: i.jsx(e0, {
                            colors: t.color,
                            children: i.jsx(le, {
                                name: t.icon
                            })
                        })
                    }), i.jsx(t0, {
                        children: i.jsx(M, {
                            text: $n(t)
                        })
                    })]
                }), i.jsx(Ae, {
                    onClick: this.activatePowerup,
                    label: i.jsx(M, {
                        text: "Use"
                    }),
                    type: this.props.powerups.activePowerups.includes(t.name) ? "disabled" : "primary",
                    size: "small"
                })]
            })
        })
    }
};
wo = Xu([F("powerups", "navigation"), D], wo);
var r0 = Object.getOwnPropertyDescriptor,
    n0 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? r0(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let ko = class extends w.Component {
    constructor() {
        super(...arguments), this.useablePowerups = () => this.props.powerups.availablePowerups.filter(t => this.props.powerups.purchasedPowerups.includes(t.name) && !this.props.powerups.usedPowerups.includes(t.name))
    }
    render() {
        const t = this.useablePowerups();
        return t.length < 1 ? null : i.jsxs(w.Fragment, {
            children: [i.jsx(La, {}), i.jsx("div", {
                style: {
                    height: 5
                }
            }), t.map(n => i.jsx(wo, {
                powerup: n
            }, n.name))]
        })
    }
};
ko = n0([F("powerups"), D], ko);
const o0 = e => i.jsxs(s0, {
        children: [i.jsxs(i0, {
            children: [i.jsx(a0, {
                children: e.playerName
            }), e.teamName && i.jsx(c0, {
                children: e.teamName
            })]
        }), i.jsx(l0, {
            children: i.jsx(ir, {
                style: {
                    color: "rgba(117, 117, 117, 1.0)"
                },
                onClick: e.isSettingsOpen ? e.onBack : e.onClickSettings,
                children: e.isSettingsOpen ? i.jsx(v2, {}) : i.jsx(b2, {})
            })
        })]
    }),
    s0 = k.div.attrs({
        className: "maxWidth flex vc between"
    })`
  font-family: ${Fr};
  flex-shrink: 0;
  padding: 12px 16px;
  padding-right: 5px;
  background-color: #f2f2f2;
`,
    i0 = k.div.attrs({
        className: "flex flex-column hc"
    })`
  align-items: flex-start;
  overflow: hidden;
`,
    a0 = k.div`
  color: #222222;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`,
    c0 = k.div`
  font-size: 12px;
  color: #696969;
`,
    l0 = k.div`
  margin-left: 10px;
`,
    $i = D(() => {
        const {
            pardy: e
        } = w.useContext(K), t = e.powers.find(n => n.id === e.power);
        return t ? i.jsx(d0, {
            children: i.jsxs(u0, {
                children: [i.jsx(p0, {
                    style: {
                        backgroundColor: t.background
                    },
                    children: i.jsx(f0, {
                        src: t.image
                    })
                }), i.jsxs(h0, {
                    children: [i.jsx(m0, {
                        children: t.name
                    }), i.jsx(g0, {
                        children: t.description
                    })]
                })]
            })
        }) : null
    }),
    d0 = k.div.attrs({
        className: "maxWidth"
    })`
  font-family: ${Fr};
  padding: 15px;
`,
    u0 = k.div.attrs({
        className: "maxWidth light-shadow"
    })`
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 5px;
  overflow: hidden;
`,
    p0 = k.div.attrs({
        className: "maxWidth flex-center"
    })`
  height: 80px;
`,
    f0 = k.img`
  height: 40px;
  filter: drop-shadow(2px 2px 2px #222);
`,
    h0 = k.div.attrs({
        className: "maxWidth flex-center flex-column"
    })`
  background: ${de.Snow};
  padding: 20px 15px;
  text-align: center;
`,
    m0 = k.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 2px;
`,
    g0 = k.div`
  font-size: 14px;
`,
    v0 = D(() => {
        var d;
        const {
            navigation: e,
            user: t,
            questions: {
                lockedViewingCorrectAnswer: n
            }
        } = w.useContext(K), o = n, r = () => Mn(!1), s = () => Xe() ? i.jsx($i, {}) : i.jsxs(i.Fragment, {
            children: [i.jsxs(oi, {
                style: {
                    width: "100%"
                },
                component: "nav",
                children: [i.jsx(Co, {}), i.jsx($i, {}), i.jsx(Di, {
                    to: L.questions,
                    onClick: r,
                    disabled: o,
                    children: i.jsxs(Un, {
                        button: !0,
                        children: [i.jsx(si, {
                            children: i.jsx(C2, {})
                        }), i.jsx(qn, {
                            primary: i.jsx(M, {
                                text: "Questions"
                            })
                        })]
                    })
                }), !In() && i.jsx(Di, {
                    to: L.shop,
                    onClick: r,
                    disabled: o,
                    children: i.jsxs(Un, {
                        button: !0,
                        children: [i.jsx(si, {
                            children: ve() ? i.jsx(f2, {}) : i.jsx(w2, {})
                        }), i.jsx(qn, {
                            primary: i.jsx(M, {
                                text: Za()
                            })
                        })]
                    })
                })]
            }), i.jsx(ko, {})]
        }), a = () => i.jsx(oi, {
            style: {
                width: "100%"
            },
            component: "nav",
            children: i.jsxs(Un, {
                children: [i.jsx(qn, {
                    primary: i.jsx(M, {
                        text: "Read to Me"
                    })
                }), i.jsx(zc, {
                    checked: t.readToMeEnabled,
                    onChange: l => {
                        t.readToMeEnabled = l
                    }
                })]
            })
        }), c = e.drawerOpen;
        return c3.includes(e.currentRoute) ? null : i.jsxs(i.Fragment, {
            children: [i.jsx(bo, {}), i.jsx(Fl, {
                open: c,
                onClose: r,
                children: i.jsxs("div", {
                    className: "flex flex-column maxHeight",
                    style: {
                        width: "70vw",
                        maxWidth: 300
                    },
                    children: [i.jsx("div", {
                        className: "maxWidth scroll-y",
                        style: {
                            flex: 1,
                            overflowX: "hidden"
                        },
                        children: e.settingsOpen ? a() : s()
                    }), i.jsx(o0, {
                        playerName: t.name,
                        teamName: (d = t.team) == null ? void 0 : d.id,
                        onClickSettings: () => e.settingsOpen = !0,
                        onBack: () => e.settingsOpen = !1,
                        isSettingsOpen: e.settingsOpen
                    })]
                })
            })]
        })
    });
var x0 = Object.getOwnPropertyDescriptor,
    y0 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? x0(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const {
    TextArea: C0
} = Ma;
let Bn = class extends w.Component {
    constructor() {
        super(...arguments), this.handleChange = e => {
            this.props.imposter.me.notes = e.target.value
        }, this.onBlur = () => this.save(), this.save = () => {
            oe(ne.imposter.notes, this.props.imposter.me.notes)
        }
    }
    componentWillUnmount() {
        this.save()
    }
    render() {
        return this.props.imposter.me ? i.jsx(C0, {
            placeholder: "Leave notes or observations here!",
            value: this.props.imposter.me.notes,
            onChange: this.handleChange,
            onBlur: this.onBlur,
            autoSize: {
                minRows: this.props.minRows || 4
            }
        }) : null
    }
};
Bn = y0([F("imposter"), D], Bn);
class b0 extends w.Component {
    render() {
        return i.jsx(w.Fragment, {
            children: i.jsx(Ir, {
                showSelf: !0,
                customItemBorderRadius: 7
            })
        })
    }
}
var w0 = Object.getOwnPropertyDescriptor,
    k0 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? w0(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const d3 = k(Da)`
  .ant-drawer-wrapper-body {
    width: 100%;
    height: 100%;
  }
`;
let Po = class extends w.Component {
    constructor() {
        super(...arguments), this.close = () => this.props.navigation.leaderboardDrawerOpen = !1
    }
    render() {
        return this.props.gameOptions.type !== ws.live ? null : i.jsx(d3, {
            closable: !1,
            placement: "left",
            visible: this.props.navigation.leaderboardDrawerOpen,
            onClose: this.close,
            width: window.innerWidth > 500 ? 364 : "80vw",
            bodyStyle: {
                background: "#673AB7",
                height: "100%",
                overflow: "hidden",
                padding: 0
            },
            children: i.jsx(u3, {
                children: i.jsx(b0, {})
            })
        })
    }
};
Po = k0([F("navigation", "gameOptions"), D], Po);
const u3 = k.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
var P0 = Object.getOwnPropertyDescriptor,
    S0 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? P0(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let So = class extends w.Component {
    constructor() {
        super(...arguments), this.close = () => this.props.imposter.noteDrawerOpen = !1
    }
    render() {
        const e = this.props.imposter.noteDrawerOpen;
        return ve() ? i.jsx(d3, {
            closable: !1,
            placement: "left",
            visible: e,
            onClose: this.close,
            width: window.innerWidth > 500 ? 364 : "80vw",
            bodyStyle: {
                height: "100%",
                overflow: "hidden",
                padding: 0,
                fontFamily: "'Space Grotesk', monospace"
            },
            children: i.jsxs(u3, {
                style: {
                    paddingLeft: 20,
                    paddingRight: 20
                },
                children: [i.jsxs(T0, {
                    children: [i.jsx("span", {
                        role: "img",
                        "aria-label": "notebook",
                        children: "📓"
                    }), " ", "Notebook"]
                }), i.jsx(Bn, {
                    minRows: 8
                }), i.jsx(Cs, {
                    type: "info",
                    style: {
                        marginTop: 17,
                        marginBottom: 25
                    },
                    message: i.jsx(M, {
                        text: "Tip"
                    }),
                    description: i.jsx(M, {
                        text: "Pay attention to the Investigation Log for more clues."
                    }),
                    showIcon: !0
                })]
            })
        }) : null
    }
};
So = S0([F("imposter"), D], So);
const T0 = k.div`
  font-weight: 900;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 7px;
`;
let B0 = class extends w.Component {
    render() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(v0, {}), i.jsx(Po, {}), i.jsx(So, {}), i.jsx(Ou, {})]
        })
    }
};
var bt = {},
    nn = {},
    on = {},
    sn = {},
    Ni;

function p3() {
    if (Ni) return sn;
    Ni = 1, Object.defineProperty(sn, "__esModule", {
        value: !0
    });

    function e(n, o) {
        if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function")
    }
    var t = function n(o, r) {
        e(this, n), this.x = o, this.y = r
    };
    return sn.default = t, sn
}
var Li;

function f3() {
    if (Li) return on;
    Li = 1, Object.defineProperty(on, "__esModule", {
        value: !0
    });
    var e = function() {
            function d(l, f) {
                for (var g = 0; g < f.length; g++) {
                    var b = f[g];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, b.key, b)
                }
            }
            return function(l, f, g) {
                return f && d(l.prototype, f), g && d(l, g), l
            }
        }(),
        t = p3(),
        n = o(t);

    function o(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }

    function r(d, l) {
        if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function")
    }

    function s(d, l) {
        if (!d) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l && (typeof l == "object" || typeof l == "function") ? l : d
    }

    function a(d, l) {
        if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
        d.prototype = Object.create(l && l.prototype, {
            constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(d, l) : d.__proto__ = l)
    }
    var c = function(d) {
        a(l, d);

        function l() {
            return r(this, l), s(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
        }
        return e(l, [{
            key: "update",
            value: function(g) {
                this.x = g.x, this.y = g.y
            }
        }, {
            key: "moveByAngle",
            value: function(g, b) {
                var v = g + Math.PI / 2;
                this.x = this.x + Math.sin(v) * b, this.y = this.y - Math.cos(v) * b
            }
        }, {
            key: "equalsTo",
            value: function(g) {
                return this.x === g.x && this.y === g.y
            }
        }, {
            key: "getDifferenceTo",
            value: function(g) {
                return new n.default(this.x - g.x, this.y - g.y)
            }
        }, {
            key: "getDistanceTo",
            value: function(g) {
                var b = this.getDifferenceTo(g);
                return Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2))
            }
        }, {
            key: "getAngleTo",
            value: function(g) {
                var b = this.getDifferenceTo(g);
                return Math.atan2(b.y, b.x)
            }
        }, {
            key: "toObject",
            value: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
        }]), l
    }(n.default);
    return on.default = c, on
}
var Ai;

function E0() {
    if (Ai) return nn;
    Ai = 1, Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    var e = function() {
            function c(d, l) {
                for (var f = 0; f < l.length; f++) {
                    var g = l[f];
                    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(d, g.key, g)
                }
            }
            return function(d, l, f) {
                return l && c(d.prototype, l), f && c(d, f), d
            }
        }(),
        t = f3(),
        n = o(t);

    function o(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function r(c, d) {
        if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function")
    }
    var s = 30,
        a = function() {
            function c() {
                var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    l = d.radius,
                    f = l === void 0 ? s : l,
                    g = d.enabled,
                    b = g === void 0 ? !0 : g,
                    v = d.initialPoint,
                    y = v === void 0 ? {
                        x: 0,
                        y: 0
                    } : v;
                r(this, c), this.radius = f, this._isEnabled = b, this.pointer = new n.default(y.x, y.y), this.brush = new n.default(y.x, y.y), this.angle = 0, this.distance = 0, this._hasMoved = !1
            }
            return e(c, [{
                key: "enable",
                value: function() {
                    this._isEnabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this._isEnabled = !1
                }
            }, {
                key: "isEnabled",
                value: function() {
                    return this._isEnabled
                }
            }, {
                key: "setRadius",
                value: function(l) {
                    this.radius = l
                }
            }, {
                key: "getRadius",
                value: function() {
                    return this.radius
                }
            }, {
                key: "getBrushCoordinates",
                value: function() {
                    return this.brush.toObject()
                }
            }, {
                key: "getPointerCoordinates",
                value: function() {
                    return this.pointer.toObject()
                }
            }, {
                key: "getBrush",
                value: function() {
                    return this.brush
                }
            }, {
                key: "getPointer",
                value: function() {
                    return this.pointer
                }
            }, {
                key: "getAngle",
                value: function() {
                    return this.angle
                }
            }, {
                key: "getDistance",
                value: function() {
                    return this.distance
                }
            }, {
                key: "brushHasMoved",
                value: function() {
                    return this._hasMoved
                }
            }, {
                key: "update",
                value: function(l) {
                    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        g = f.both,
                        b = g === void 0 ? !1 : g;
                    return this._hasMoved = !1, this.pointer.equalsTo(l) && !b ? !1 : (this.pointer.update(l), b ? (this._hasMoved = !0, this.brush.update(l), !0) : (this._isEnabled ? (this.distance = this.pointer.getDistanceTo(this.brush), this.angle = this.pointer.getAngleTo(this.brush), this.distance > this.radius && (this.brush.moveByAngle(this.angle, this.distance - this.radius), this._hasMoved = !0)) : (this.distance = 0, this.angle = 0, this.brush.update(l), this._hasMoved = !0), !0))
                }
            }]), c
        }();
    return nn.default = a, nn
}
var zi;

function _0() {
    if (zi) return bt;
    zi = 1, Object.defineProperty(bt, "__esModule", {
        value: !0
    }), bt.LazyPoint = bt.Point = bt.LazyBrush = void 0;
    var e = E0(),
        t = a(e),
        n = p3(),
        o = a(n),
        r = f3(),
        s = a(r);

    function a(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    return bt.LazyBrush = t.default, bt.Point = o.default, bt.LazyPoint = s.default, bt
}
var R0 = _0(),
    Lt = {},
    an = {},
    cn = {},
    Wi;

function h3() {
    if (Wi) return cn;
    Wi = 1, Object.defineProperty(cn, "__esModule", {
        value: !0
    });
    var e = function() {
        function o(r, s) {
            for (var a = 0; a < s.length; a++) {
                var c = s[a];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, c.key, c)
            }
        }
        return function(r, s, a) {
            return s && o(r.prototype, s), a && o(r, a), r
        }
    }();

    function t(o, r) {
        if (!(o instanceof r)) throw new TypeError("Cannot call a class as a function")
    }
    var n = function() {
        function o(r, s) {
            t(this, o), this.x = r, this.y = s
        }
        return e(o, [{
            key: "update",
            value: function(s) {
                this.x = s.x, this.y = s.y
            }
        }, {
            key: "getDifferenceTo",
            value: function(s) {
                return new o(this.x - s.x, this.y - s.y)
            }
        }, {
            key: "getDistanceTo",
            value: function(s) {
                var a = this.getDifferenceTo(s);
                return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2))
            }
        }]), o
    }();
    return cn.default = n, cn
}
var Fi;

function j0() {
    if (Fi) return an;
    Fi = 1, Object.defineProperty(an, "__esModule", {
        value: !0
    });
    var e = function() {
            function c(d, l) {
                for (var f = 0; f < l.length; f++) {
                    var g = l[f];
                    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(d, g.key, g)
                }
            }
            return function(d, l, f) {
                return l && c(d.prototype, l), f && c(d, f), d
            }
        }(),
        t = h3(),
        n = o(t);

    function o(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function r(c, d) {
        if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function")
    }
    var s = 1e-6,
        a = function() {
            function c() {
                var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    l = d.segments,
                    f = l === void 0 ? 50 : l,
                    g = d.iterationLimit,
                    b = g === void 0 ? 100 : g;
                r(this, c), this.p1 = new n.default, this.p2 = new n.default, this.segments = f, this.iterationLimit = b
            }
            return e(c, [{
                key: "drawToCanvas",
                value: function(l, f, g, b) {
                    this.p1.update(f), this.p2.update(g);
                    var v = this.p1.x > this.p2.x,
                        y = v ? this.p2 : this.p1,
                        C = v ? this.p1 : this.p2,
                        p = y.getDistanceTo(C),
                        u = [],
                        m = !0;
                    if (p < b) {
                        var h = C.x - y.x;
                        if (h > .01) {
                            var x = C.x - y.x,
                                S = C.y - y.y,
                                P = -this.getCatenaryParameter(x, S, b, this.iterationLimit),
                                B = (P * Math.log((b + S) / (b - S)) - x) * .5,
                                _ = P * Math.cosh(B / P),
                                R = y.x - B,
                                O = y.y - _;
                            u = this.getCurve(P, y, C, R, O, this.segments), m = !1
                        } else {
                            var A = (y.x + C.x) * .5,
                                I = (y.y + C.y + b) * .5;
                            u = [
                                [y.x, y.y],
                                [A, I],
                                [C.x, C.y]
                            ]
                        }
                    } else u = [
                        [y.x, y.y],
                        [C.x, C.y]
                    ];
                    return m ? this.drawLine(u, l) : this.drawCurve(u, l), u
                }
            }, {
                key: "getCatenaryParameter",
                value: function(l, f, g, b) {
                    for (var v = Math.sqrt(g * g - f * f) / l, y = Math.acosh(v) + 1, C = -1, p = 0; Math.abs(y - C) > s && p < b;) C = y, y = y - (Math.sinh(y) - v * y) / (Math.cosh(y) - v), p++;
                    return l / (2 * y)
                }
            }, {
                key: "getCurve",
                value: function(l, f, g, b, v, y) {
                    for (var C = [f.x, l * Math.cosh((f.x - b) / l) + v], p = g.x - f.x, u = y - 1, m = 0; m < u; m++) {
                        var h = f.x + p * (m + .5) / u,
                            x = l * Math.cosh((h - b) / l) + v;
                        C.push(h, x)
                    }
                    return C.push(g.x, l * Math.cosh((g.x - b) / l) + v), C
                }
            }, {
                key: "drawLine",
                value: function(l, f) {
                    f.moveTo(l[0][0], l[0][1]), f.lineTo(l[1][0], l[1][1])
                }
            }, {
                key: "drawCurve",
                value: function(l, f) {
                    var g = l.length * .5 - 1,
                        b = l[2],
                        v = l[3],
                        y = [];
                    f.moveTo(l[0], l[1]);
                    for (var C = 2; C < g; C++) {
                        var p = l[C * 2],
                            u = l[C * 2 + 1],
                            m = (p + b) * .5,
                            h = (u + v) * .5;
                        y.push([b, v, m, h]), f.quadraticCurveTo(b, v, m, h), b = p, v = u
                    }
                    return g = l.length, f.quadraticCurveTo(l[g - 4], l[g - 3], l[g - 2], l[g - 1]), y
                }
            }]), c
        }();
    return an.default = a, an
}
var Ui;

function O0() {
    if (Ui) return Lt;
    Ui = 1, Object.defineProperty(Lt, "__esModule", {
        value: !0
    }), Lt.Point = Lt.Catenary = void 0;
    var e = j0(),
        t = r(e),
        n = h3(),
        o = r(n);

    function r(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    return Lt.Catenary = t.default, Lt.Point = o.default, Lt
}
var M0 = O0();

function St() {
    return St = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }, St.apply(this, arguments)
}

function D0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function I0(e, t, n) {
    return t && D0(e.prototype, t), e
}

function Ge(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var qi = Object.freeze({
        x: 0,
        y: 0,
        untransformedX: 0,
        untransformedY: 0
    }),
    Hn = Object.freeze({
        canvasWidth: 0,
        canvasHeight: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        viewMin: qi,
        viewMax: qi
    }),
    Xt = Object.freeze({
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    }),
    $0 = function() {
        function e(t) {
            var n = this,
                o = t.scaleExtents,
                r = t.documentSize;
            Ge(this, "_scaleExtents", void 0), Ge(this, "_documentSize", void 0), Ge(this, "_canvas", null), Ge(this, "_view", {
                scale: 1,
                x: 0,
                y: 0
            }), Ge(this, "_viewChangeListeners", new Set), Ge(this, "setScale", function(s) {
                n.setView({
                    scale: s
                })
            }), Ge(this, "clampView", function(s) {
                var a = s.scale,
                    c = s.x,
                    d = s.y,
                    l = n.scaleExtents,
                    f = l.min,
                    g = l.max,
                    b = n.documentSize,
                    v = b.width,
                    y = b.height,
                    C = n.canvasRect || Hn,
                    p = C.left,
                    u = C.top,
                    m = C.right,
                    h = C.bottom,
                    x = m - p,
                    S = h - u,
                    P = x / 2,
                    B = -(v * n._view.scale - x / 2),
                    _ = S / 2,
                    R = -(y * n._view.scale - S / 2);
                return {
                    scale: Math.min(Math.max(a, f), g),
                    x: Math.min(Math.max(c, B), P),
                    y: Math.min(Math.max(d, R), _)
                }
            }), Ge(this, "resetView", function() {
                n.setView({
                    scale: 1,
                    x: 0,
                    y: 0
                })
            }), Ge(this, "setView", function(s) {
                var a = n.clampView(St({}, n._view, s || {})),
                    c = n._view,
                    d = c.scale,
                    l = c.x,
                    f = c.y;
                return (a.scale !== d || a.x !== l || a.y !== f) && (n._view = a, n._viewChangeListeners.forEach(function(g) {
                    return g && g(a)
                })), St({}, n._view)
            }), Ge(this, "scaleAtClientPoint", function(s, a) {
                var c = n.clientPointToViewPoint(a),
                    d = n.clampView(St({}, n._view, {
                        scale: n._view.scale + s
                    })),
                    l = n.viewPointToClientPoint(c, d);
                return d.x = n._view.x - (l.clientX - a.clientX), d.y = n._view.y - (l.clientY - a.clientY), n.setView(d)
            }), Ge(this, "clientPointToViewPoint", function(s, a) {
                var c = s.clientX,
                    d = s.clientY;
                a === void 0 && (a = n._view);
                var l = n.canvasRect || Hn,
                    f = l.left,
                    g = l.top,
                    b = c - f,
                    v = d - g;
                return {
                    x: (b - a.x) / a.scale,
                    y: (v - a.y) / a.scale,
                    relativeClientX: b,
                    relativeClientY: v
                }
            }), Ge(this, "viewPointToClientPoint", function(s, a) {
                var c = s.x,
                    d = s.y;
                a === void 0 && (a = n._view);
                var l = n.canvasRect || Hn,
                    f = l.left,
                    g = l.top,
                    b = c * a.scale + a.x,
                    v = d * a.scale + a.y,
                    y = b + f,
                    C = v + g;
                return {
                    clientX: y,
                    clientY: C,
                    relativeX: b,
                    relativeY: v,
                    x: y,
                    y: C
                }
            }), Ge(this, "attachViewChangeListener", function(s) {
                n._viewChangeListeners.add(s)
            }), this._scaleExtents = o, this._documentSize = r
        }
        return I0(e, [{
            key: "canvas",
            get: function() {
                return this._canvas
            },
            set: function(n) {
                this._canvas = n, this.setView()
            }
        }, {
            key: "scale",
            get: function() {
                return this._view.scale
            }
        }, {
            key: "x",
            get: function() {
                return this._view.x
            },
            set: function(n) {
                this.setView({
                    x: n
                })
            }
        }, {
            key: "y",
            get: function() {
                return this._view.y
            },
            set: function(n) {
                this.setView({
                    y: n
                })
            }
        }, {
            key: "view",
            get: function() {
                return St({}, this._view)
            }
        }, {
            key: "scaleExtents",
            get: function() {
                return St({}, this._scaleExtents)
            },
            set: function(n) {
                var o = n.min,
                    r = n.max;
                this._scaleExtents = {
                    min: o,
                    max: r
                }, this.setView()
            }
        }, {
            key: "documentSize",
            get: function() {
                return St({}, this._documentSize)
            },
            set: function(n) {
                var o = n.width,
                    r = n.height;
                this._documentSize = {
                    width: o,
                    height: r
                }, this.setView()
            }
        }, {
            key: "transformMatrix",
            get: function() {
                return {
                    a: this._view.scale,
                    b: 0,
                    c: 0,
                    d: this._view.scale,
                    e: this._view.x,
                    f: this._view.y
                }
            }
        }, {
            key: "canvasBounds",
            get: function() {
                if (this._canvas) {
                    var n = this._canvas.getBoundingClientRect(),
                        o = n.left,
                        r = n.top,
                        s = n.right,
                        a = n.bottom;
                    return {
                        viewMin: this.clientPointToViewPoint({
                            clientX: o,
                            clientY: r
                        }),
                        viewMax: this.clientPointToViewPoint({
                            clientX: s,
                            clientY: a
                        }),
                        left: o,
                        top: r,
                        right: s,
                        bottom: a,
                        canvasWidth: this._canvas.width,
                        canvasHeight: this._canvas.height
                    }
                } else return
            }
        }, {
            key: "canvasRect",
            get: function() {
                if (this.canvas) return this.canvas.getBoundingClientRect()
            }
        }]), e
    }();

function N0(e) {
    var t = e === void 0 ? {} : e,
        n = t.ctx,
        o = t.img,
        r = t.x,
        s = t.y,
        a = t.w,
        c = t.h,
        d = t.offsetX,
        l = t.offsetY;
    typeof r != "number" && (r = 0), typeof s != "number" && (s = 0), typeof a != "number" && (a = n.canvas.width), typeof c != "number" && (c = n.canvas.height), typeof d != "number" && (d = .5), typeof l != "number" && (l = .5), d < 0 && (d = 0), l < 0 && (l = 0), d > 1 && (d = 1), l > 1 && (l = 1);
    var f = o.width,
        g = o.height,
        b = Math.min(a / f, c / g),
        v = f * b,
        y = g * b,
        C, p, u, m, h = 1;
    v < a && (h = a / v), Math.abs(h - 1) < 1e-14 && y < c && (h = c / y), v *= h, y *= h, u = f / (v / a), m = g / (y / c), C = (f - u) * d, p = (g - m) * l, C < 0 && (C = 0), p < 0 && (p = 0), u > f && (u = f), m > g && (m = g), n.drawImage(o, C, p, u, m, r, s, a, c)
}
var L0 = void 0;

function J(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var To = 10,
    A0 = 250,
    pr = function(t) {
        return t.preventDefault(), L0
    },
    Ne = function() {
        var t = this;
        J(this, "handleMouseWheel", function(n, o) {
            var r = o.props,
                s = r.disabled,
                a = r.enablePanAndZoom,
                c = r.mouseZoomFactor;
            return s ? new ln : (a && n.ctrlKey && (n.preventDefault(), o.coordSystem.scaleAtClientPoint(c * n.deltaY, Ft(n))), t)
        }), J(this, "handleDrawStart", function(n, o) {
            return o.props.disabled ? new ln : n.ctrlKey && o.props.enablePanAndZoom ? new z0().handleDrawStart(n, o) : new W0().handleDrawStart(n, o)
        }), J(this, "handleDrawMove", function(n, o) {
            if (o.props.disabled) return new ln;
            var r = Bo(o.coordSystem, n),
                s = r.x,
                a = r.y;
            return o.lazy.update({
                x: s,
                y: a
            }), t
        }), J(this, "handleDrawEnd", function(n, o) {
            return o.props.disabled ? new ln : t
        })
    },
    ln = function() {
        var t = this;
        J(this, "handleMouseWheel", function(n, o) {
            return o.props.disabled ? t : new Ne().handleMouseWheel(n, o)
        }), J(this, "handleDrawStart", function(n, o) {
            return o.props.disabled ? t : new Ne().handleDrawStart(n, o)
        }), J(this, "handleDrawMove", function(n, o) {
            return o.props.disabled ? t : new Ne().handleDrawMove(n, o)
        }), J(this, "handleDrawEnd", function(n, o) {
            return o.props.disabled ? t : new Ne().handleDrawEnd(n, o)
        })
    },
    z0 = function() {
        var t = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function(n, o) {
            return n.preventDefault(), t.dragStart = Ft(n), t.panStart = {
                x: o.coordSystem.x,
                y: o.coordSystem.y
            }, t
        }), J(this, "handleDrawMove", function(n, o) {
            n.preventDefault();
            var r = Ft(n),
                s = r.clientX,
                a = r.clientY,
                c = s - t.dragStart.clientX,
                d = a - t.dragStart.clientY;
            return o.coordSystem.setView({
                x: t.panStart.x + c,
                y: t.panStart.y + d
            }), t
        }), J(this, "handleDrawEnd", function() {
            return new Ne
        })
    },
    W0 = function() {
        var t = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function(n, o) {
            var r = o.props.enablePanAndZoom;
            return n.preventDefault(), !n.touches || !n.touches.length || !r ? new Hi().handleDrawStart(n, o) : r && n.touches && n.touches.length >= 2 ? new Gi().handleDrawStart(n, o) : t.handleDrawMove(n, o)
        }), J(this, "handleDrawMove", function(n, o) {
            if (n.preventDefault(), n.touches && n.touches.length >= 2) return new Gi().handleDrawStart(n, o);
            var r = Ft(n);
            if (t.deferredPoints.push(r), new Date().valueOf() - t.startTimestamp < A0) {
                t.startClientPoint === null && (t.startClientPoint = r);
                var s = Math.abs(r.clientX - t.startClientPoint.clientX) + Math.abs(r.clientY - t.startClientPoint.clientY);
                if (s < To) return t
            }
            return t.issueDeferredPoints(o)
        }), J(this, "handleDrawEnd", function(n, o) {
            return t.issueDeferredPoints(o).handleDrawEnd(n, o)
        }), J(this, "issueDeferredPoints", function(n) {
            for (var o = new Hi, r = 0; r < t.deferredPoints.length; r++) {
                var s = t.deferredPoints[r],
                    a = new q0(s),
                    c = r === 0 ? o.handleDrawStart : o.handleDrawMove;
                o = c(a, n)
            }
            return o
        }), this.startClientPoint = null, this.startTimestamp = new Date().valueOf(), this.deferredPoints = []
    },
    Gi = function() {
        var t = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function(n, o) {
            return n.preventDefault(), !n.touches || n.touches.length < 2 ? new Ne : (t.start = t.getTouchMetrics(n), t.panStart = {
                x: o.coordSystem.x,
                y: o.coordSystem.y
            }, t.scaleStart = o.coordSystem.scale, t)
        }), J(this, "handleDrawMove", function(n, o) {
            if (n.preventDefault(), !n.touches || n.touches.length < 2) return new Ne;
            var r = t.recentMetrics = t.getTouchMetrics(n),
                s = r.centroid,
                a = r.distance,
                c = Math.abs(a - t.start.distance);
            if (c >= To) return new U0(t).handleDrawMove(n, o);
            var d = s.clientX - t.start.centroid.clientX,
                l = s.clientY - t.start.centroid.clientY,
                f = Math.abs(d) + Math.abs(l);
            return f >= To ? new F0(t).handleDrawMove(n, o) : t
        }), J(this, "handleDrawEnd", function() {
            return new Ne
        }), J(this, "getTouchMetrics", function(n) {
            var o = Ft(n.touches[0]),
                r = o.clientX,
                s = o.clientY,
                a = Ft(n.touches[1]),
                c = a.clientX,
                d = a.clientY,
                l = c - r,
                f = d - s;
            return {
                t1: {
                    clientX: r,
                    clientY: s
                },
                t2: {
                    clientX: c,
                    clientY: d
                },
                distance: Math.sqrt(l * l + f * f),
                centroid: {
                    clientX: (r + c) / 2,
                    clientY: (s + d) / 2
                }
            }
        })
    },
    F0 = function(t) {
        var n = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function() {
            return n
        }), J(this, "handleDrawMove", function(o, r) {
            if (o.preventDefault(), !o.touches || o.touches.length < 2) return new Ne;
            var s = n.scaleOrPanState,
                a = s.recentMetrics = s.getTouchMetrics(o),
                c = a.centroid;
            a.distance;
            var d = c.clientX - s.start.centroid.clientX,
                l = c.clientY - s.start.centroid.clientY;
            return r.setView({
                x: s.panStart.x + d,
                y: s.panStart.y + l
            }), n
        }), J(this, "handleDrawEnd", function() {
            return new Ne
        }), this.scaleOrPanState = t
    },
    U0 = function(t) {
        var n = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function() {
            return n
        }), J(this, "handleDrawMove", function(o, r) {
            if (o.preventDefault(), !o.touches || o.touches.length < 2) return new Ne;
            var s = n.scaleOrPanState,
                a = s.recentMetrics = s.getTouchMetrics(o),
                c = a.centroid,
                d = a.distance,
                l = s.scaleStart * (d / s.start.distance),
                f = l - r.coordSystem.scale;
            return r.coordSystem.scaleAtClientPoint(f, c), n
        }), J(this, "handleDrawEnd", function() {
            return new Ne
        }), this.scaleOrPanState = t
    },
    Hi = function() {
        var t = this;
        J(this, "handleMouseWheel", pr.bind(this)), J(this, "handleDrawStart", function(n, o) {
            if (n.preventDefault(), n.touches && n.touches.length) {
                var r = Bo(o.coordSystem, n),
                    s = r.x,
                    a = r.y;
                o.lazy.update({
                    x: s,
                    y: a
                }, {
                    both: !0
                })
            }
            return t.handleDrawMove(n, o)
        }), J(this, "handleDrawMove", function(n, o) {
            n.preventDefault();
            var r = Bo(o.coordSystem, n),
                s = r.x,
                a = r.y;
            o.lazy.update({
                x: s,
                y: a
            });
            var c = !o.lazy.isEnabled();
            return (!t.isDrawing || c) && (o.points.push(o.clampPointToDocument(o.lazy.brush.toObject())), t.isDrawing = !0), o.points.push(o.clampPointToDocument(o.lazy.brush.toObject())), o.drawPoints({
                points: o.points,
                brushColor: o.props.brushColor,
                brushRadius: o.props.brushRadius
            }), t
        }), J(this, "handleDrawEnd", function(n, o) {
            return n.preventDefault(), t.handleDrawMove(n, o), o.saveLine(), new Ne
        }), this.isDrawing = !1
    },
    q0 = function(t) {
        var n = t.clientX,
            o = t.clientY;
        J(this, "preventDefault", function() {}), this.clientX = n, this.clientY = o, this.touches = [{
            clientX: n,
            clientY: o
        }]
    };

function Ft(e) {
    var t = e.clientX,
        n = e.clientY;
    return e.changedTouches && e.changedTouches.length > 0 && (t = e.changedTouches[0].clientX, n = e.changedTouches[0].clientY), {
        clientX: t,
        clientY: n
    }
}

function Bo(e, t) {
    return e.clientPointToViewPoint(Ft(t))
}
var Eo = !1;
try {
    var dn = {
        get passive() {
            return Eo = !0, !1
        }
    };
    window.addEventListener("test", dn, dn), window.removeEventListener("test", dn, dn)
} catch {
    Eo = !1
}

function G0(e) {
    return Eo ? {
        passive: e
    } : e
}

function H0(e, t) {
    var n;
    if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (n = V0(e)) || t) {
            n && (e = n);
            var o = 0;
            return function() {
                return o >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[o++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return n = e[Symbol.iterator](), n.next.bind(n)
}

function V0(e, t) {
    if (e) {
        if (typeof e == "string") return Vi(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vi(e, t)
    }
}

function Vi(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o
}

function jr() {
    return jr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }, jr.apply(this, arguments)
}

function X(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Q0(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function Z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Y0(e, t) {
    return {
        x: e.x + (t.x - e.x) / 2,
        y: e.y + (t.y - e.y) / 2
    }
}
var X0 = {
        display: "block",
        position: "absolute"
    },
    Qi = ["grid", "drawing", "temp", "interface"],
    As = function(e) {
        Q0(t, e);

        function t(o) {
            var r;
            return r = e.call(this, o) || this, Z(X(r), "undo", function() {
                var s = [];
                r.lines.length ? s = r.lines.slice(0, -1) : r.erasedLines.length && (s = r.erasedLines.pop()), r.clearExceptErasedLines(), r.simulateDrawingLines({
                    lines: s,
                    immediate: !0
                }), r.triggerOnChange()
            }), Z(X(r), "eraseAll", function() {
                r.erasedLines.push([].concat(r.lines)), r.clearExceptErasedLines(), r.triggerOnChange()
            }), Z(X(r), "clear", function() {
                r.erasedLines = [], r.clearExceptErasedLines(), r.resetView()
            }), Z(X(r), "resetView", function() {
                return r.coordSystem.resetView()
            }), Z(X(r), "setView", function(s) {
                return r.coordSystem.setView(s)
            }), Z(X(r), "getSaveData", function() {
                return JSON.stringify({
                    lines: r.lines,
                    width: r.props.canvasWidth,
                    height: r.props.canvasHeight
                })
            }), Z(X(r), "getDataURL", function(s, a, c) {
                var d = r.canvas.drawing,
                    l = d.getContext("2d"),
                    f = d.width,
                    g = d.height,
                    b = l.getImageData(0, 0, f, g),
                    v = l.globalCompositeOperation;
                if (l.globalCompositeOperation = "destination-over", a) {
                    if (!r.props.imgSrc) return "Background image source not set";
                    r.drawImage()
                } else c != null && (l.fillStyle = c, l.fillRect(0, 0, f, g));
                s || (s = "png");
                var y = d.toDataURL("image/" + s);
                return l.clearRect(0, 0, f, g), l.putImageData(b, 0, 0), l.globalCompositeOperation = v, y
            }), Z(X(r), "loadSaveData", function(s, a) {
                if (a === void 0 && (a = r.props.immediateLoading), typeof s != "string") throw new Error("saveData needs to be of type string!");
                var c = JSON.parse(s),
                    d = c.lines,
                    l = c.width,
                    f = c.height;
                if (!d || typeof d.push != "function") throw new Error("saveData.lines needs to be an array!");
                if (r.clear(), l === r.props.canvasWidth && f === r.props.canvasHeight) r.simulateDrawingLines({
                    lines: d,
                    immediate: a
                });
                else {
                    var g = r.props.canvasWidth / l,
                        b = r.props.canvasHeight / f,
                        v = (g + b) / 2;
                    r.simulateDrawingLines({
                        lines: d.map(function(y) {
                            return jr({}, y, {
                                points: y.points.map(function(C) {
                                    return {
                                        x: C.x * g,
                                        y: C.y * b
                                    }
                                }),
                                brushRadius: y.brushRadius * v
                            })
                        }),
                        immediate: a
                    })
                }
            }), Z(X(r), "componentWillUnmount", function() {
                r.canvasObserver.unobserve(r.canvasContainer), r.canvas.interface && r.canvas.interface.removeEventListener("wheel", r.handleWheel)
            }), Z(X(r), "handleWheel", function(s) {
                r.interactionSM = r.interactionSM.handleMouseWheel(s, X(r))
            }), Z(X(r), "handleDrawStart", function(s) {
                r.interactionSM = r.interactionSM.handleDrawStart(s, X(r)), r.mouseHasMoved = !0
            }), Z(X(r), "handleDrawMove", function(s) {
                r.interactionSM = r.interactionSM.handleDrawMove(s, X(r)), r.mouseHasMoved = !0
            }), Z(X(r), "handleDrawEnd", function(s) {
                r.interactionSM = r.interactionSM.handleDrawEnd(s, X(r)), r.mouseHasMoved = !0
            }), Z(X(r), "applyView", function() {
                if (r.ctx.drawing && (Qi.map(function(a) {
                        return r.ctx[a]
                    }).forEach(function(a) {
                        r.clearWindow(a);
                        var c = r.coordSystem.transformMatrix;
                        a.setTransform(c.a, c.b, c.c, c.d, c.e, c.f)
                    }), !r.deferRedrawOnViewChange)) {
                    r.drawGrid(r.ctx.grid), r.redrawImage(), r.loop({
                        once: !0
                    });
                    var s = r.lines;
                    r.lines = [], r.simulateDrawingLines({
                        lines: s,
                        immediate: !0
                    })
                }
            }), Z(X(r), "handleCanvasResize", function(s) {
                var a = r.getSaveData();
                r.deferRedrawOnViewChange = !0;
                try {
                    for (var c = H0(s), d; !(d = c()).done;) {
                        var l = d.value,
                            f = l.contentRect,
                            g = f.width,
                            b = f.height;
                        r.setCanvasSize(r.canvas.interface, g, b), r.setCanvasSize(r.canvas.drawing, g, b), r.setCanvasSize(r.canvas.temp, g, b), r.setCanvasSize(r.canvas.grid, g, b), r.coordSystem.documentSize = {
                            width: g,
                            height: b
                        }, r.drawGrid(r.ctx.grid), r.drawImage(), r.loop({
                            once: !0
                        })
                    }
                    r.loadSaveData(a, !0)
                } finally {
                    r.deferRedrawOnViewChange = !1
                }
            }), Z(X(r), "clampPointToDocument", function(s) {
                return r.props.clampLinesToDocument ? {
                    x: Math.max(Math.min(s.x, r.props.canvasWidth), 0),
                    y: Math.max(Math.min(s.y, r.props.canvasHeight), 0)
                } : s
            }), Z(X(r), "redrawImage", function() {
                r.image && r.image.complete && N0({
                    ctx: r.ctx.grid,
                    img: r.image
                })
            }), Z(X(r), "simulateDrawingLines", function(s) {
                var a = s.lines,
                    c = s.immediate,
                    d = 0,
                    l = c ? 0 : r.props.loadTimeOffset;
                a.forEach(function(f) {
                    var g = f.points,
                        b = f.brushColor,
                        v = f.brushRadius;
                    if (c) {
                        r.drawPoints({
                            points: g,
                            brushColor: b,
                            brushRadius: v
                        }), r.points = g, r.saveLine({
                            brushColor: b,
                            brushRadius: v
                        });
                        return
                    }
                    for (var y = function(u) {
                            d += l, window.setTimeout(function() {
                                r.drawPoints({
                                    points: g.slice(0, u + 1),
                                    brushColor: b,
                                    brushRadius: v
                                })
                            }, d)
                        }, C = 1; C < g.length; C++) y(C);
                    d += l, window.setTimeout(function() {
                        r.points = g, r.saveLine({
                            brushColor: b,
                            brushRadius: v
                        })
                    }, d)
                })
            }), Z(X(r), "setCanvasSize", function(s, a, c) {
                s.width = a, s.height = c, s.style.width = a, s.style.height = c
            }), Z(X(r), "drawPoints", function(s) {
                var a = s.points,
                    c = s.brushColor,
                    d = s.brushRadius;
                r.ctx.temp.lineJoin = "round", r.ctx.temp.lineCap = "round", r.ctx.temp.strokeStyle = c, r.clearWindow(r.ctx.temp), r.ctx.temp.lineWidth = d * 2;
                var l = a[0],
                    f = a[1];
                r.ctx.temp.moveTo(f.x, f.y), r.ctx.temp.beginPath();
                for (var g = 1, b = a.length; g < b; g++) {
                    var v = Y0(l, f);
                    r.ctx.temp.quadraticCurveTo(l.x, l.y, v.x, v.y), l = a[g], f = a[g + 1]
                }
                r.ctx.temp.lineTo(l.x, l.y), r.ctx.temp.stroke()
            }), Z(X(r), "saveLine", function(s) {
                var a = s === void 0 ? {} : s,
                    c = a.brushColor,
                    d = a.brushRadius;
                r.points.length < 2 || (r.lines.push({
                    points: [].concat(r.points),
                    brushColor: c || r.props.brushColor,
                    brushRadius: d || r.props.brushRadius
                }), r.points.length = 0, r.inClientSpace([r.ctx.drawing, r.ctx.temp], function() {
                    r.ctx.drawing.drawImage(r.canvas.temp, 0, 0, r.canvas.drawing.width, r.canvas.drawing.height)
                }), r.clearWindow(r.ctx.temp), r.triggerOnChange())
            }), Z(X(r), "triggerOnChange", function() {
                r.props.onChange && r.props.onChange(X(r))
            }), Z(X(r), "clearWindow", function(s) {
                r.inClientSpace([s], function() {
                    return s.clearRect(0, 0, s.canvas.width, s.canvas.height)
                })
            }), Z(X(r), "clearExceptErasedLines", function() {
                r.lines = [], r.valuesChanged = !0, r.clearWindow(r.ctx.drawing), r.clearWindow(r.ctx.temp)
            }), Z(X(r), "loop", function(s) {
                var a = s === void 0 ? {} : s,
                    c = a.once,
                    d = c === void 0 ? !1 : c;
                if (r.lazy && (r.mouseHasMoved || r.valuesChanged)) {
                    var l = r.lazy.getPointerCoordinates(),
                        f = r.lazy.getBrushCoordinates();
                    r.drawInterface(r.ctx.interface, l, f), r.mouseHasMoved = !1, r.valuesChanged = !1
                }
                d || window.requestAnimationFrame(function() {
                    r.loop()
                })
            }), Z(X(r), "inClientSpace", function(s, a) {
                s.forEach(function(c) {
                    c.save(), c.setTransform(Xt.a, Xt.b, Xt.c, Xt.d, Xt.e, Xt.f)
                });
                try {
                    a()
                } finally {
                    s.forEach(function(c) {
                        return c.restore()
                    })
                }
            }), Z(X(r), "drawImage", function() {
                r.props.imgSrc && (r.image = new Image, r.image.crossOrigin = "anonymous", r.image.onload = r.redrawImage, r.image.src = r.props.imgSrc)
            }), Z(X(r), "drawGrid", function(s) {
                if (!r.props.hideGrid) {
                    r.clearWindow(s);
                    var a = 25,
                        c = r.coordSystem.canvasBounds,
                        d = c.viewMin,
                        l = c.viewMax,
                        f = Math.floor(d.x / a - 1) * a,
                        g = Math.floor(d.y / a - 1) * a,
                        b = l.x + a,
                        v = l.y + a;
                    if (s.beginPath(), s.setLineDash([5, 1]), s.setLineDash([]), s.strokeStyle = r.props.gridColor, s.lineWidth = r.props.gridLineWidth, !r.props.hideGridX) {
                        for (var y = f, C = r.props.gridSizeX; y < b;) y += C, s.moveTo(y, g), s.lineTo(y, v);
                        s.stroke()
                    }
                    if (!r.props.hideGridY) {
                        for (var p = g, u = r.props.gridSizeY; p < v;) p += u, s.moveTo(f, p), s.lineTo(b, p);
                        s.stroke()
                    }
                }
            }), Z(X(r), "drawInterface", function(s, a, c) {
                r.props.hideInterface || (r.clearWindow(s), s.beginPath(), s.fillStyle = r.props.brushColor, s.arc(c.x, c.y, r.props.brushRadius, 0, Math.PI * 2, !0), s.fill(), s.beginPath(), s.fillStyle = r.props.catenaryColor, s.arc(a.x, a.y, 4, 0, Math.PI * 2, !0), s.fill(), r.lazy.isEnabled() && (s.beginPath(), s.lineWidth = 2, s.lineCap = "round", s.setLineDash([2, 4]), s.strokeStyle = r.props.catenaryColor, r.catenary.drawToCanvas(r.ctx.interface, c, a, r.chainLength), s.stroke()), s.beginPath(), s.fillStyle = r.props.catenaryColor, s.arc(c.x, c.y, 2, 0, Math.PI * 2, !0), s.fill())
            }), r.canvas = {}, r.ctx = {}, r.catenary = new M0.Catenary, r.points = [], r.lines = [], r.erasedLines = [], r.mouseHasMoved = !0, r.valuesChanged = !0, r.isDrawing = !1, r.isPressing = !1, r.deferRedrawOnViewChange = !1, r.interactionSM = new Ne, r.coordSystem = new $0({
                scaleExtents: o.zoomExtents,
                documentSize: {
                    width: o.canvasWidth,
                    height: o.canvasHeight
                }
            }), r.coordSystem.attachViewChangeListener(r.applyView.bind(X(r))), r
        }
        var n = t.prototype;
        return n.componentDidMount = function() {
            var r = this;
            this.lazy = new R0.LazyBrush({
                radius: this.props.lazyRadius * window.devicePixelRatio,
                enabled: !0,
                initialPoint: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                }
            }), this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.canvasObserver = new vc(function(s, a) {
                return r.handleCanvasResize(s, a)
            }), this.canvasObserver.observe(this.canvasContainer), this.drawImage(), this.loop(), window.setTimeout(function() {
                var s = window.innerWidth / 2,
                    a = window.innerHeight / 2;
                r.lazy.update({
                    x: s - r.chainLength / 4,
                    y: a
                }, {
                    both: !0
                }), r.lazy.update({
                    x: s + r.chainLength / 4,
                    y: a
                }, {
                    both: !1
                }), r.mouseHasMoved = !0, r.valuesChanged = !0, r.clearExceptErasedLines(), r.props.saveData && r.loadSaveData(r.props.saveData)
            }, 100), this.canvas.interface && this.canvas.interface.addEventListener("wheel", this.handleWheel, G0())
        }, n.componentDidUpdate = function(r) {
            r.lazyRadius !== this.props.lazyRadius && (this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)), r.saveData !== this.props.saveData && this.loadSaveData(this.props.saveData), JSON.stringify(r) !== JSON.stringify(this.props) && (this.valuesChanged = !0), this.coordSystem.scaleExtents = this.props.zoomExtents, this.props.enablePanAndZoom || this.coordSystem.resetView(), r.imgSrc !== this.props.imgSrc && this.drawImage()
        }, n.render = function() {
            var r = this;
            return tr.createElement("div", {
                className: this.props.className,
                style: jr({
                    display: "block",
                    background: this.props.backgroundColor,
                    touchAction: "none",
                    width: this.props.canvasWidth,
                    height: this.props.canvasHeight
                }, this.props.style),
                ref: function(a) {
                    a && (r.canvasContainer = a)
                }
            }, Qi.map(function(s) {
                var a = s === "interface";
                return tr.createElement("canvas", {
                    key: s,
                    ref: function(d) {
                        d && (r.canvas[s] = d, r.ctx[s] = d.getContext("2d"), a && (r.coordSystem.canvas = d))
                    },
                    style: jr({}, X0),
                    onMouseDown: a ? r.handleDrawStart : void 0,
                    onMouseMove: a ? r.handleDrawMove : void 0,
                    onMouseUp: a ? r.handleDrawEnd : void 0,
                    onMouseOut: a ? r.handleDrawEnd : void 0,
                    onTouchStart: a ? r.handleDrawStart : void 0,
                    onTouchMove: a ? r.handleDrawMove : void 0,
                    onTouchEnd: a ? r.handleDrawEnd : void 0,
                    onTouchCancel: a ? r.handleDrawEnd : void 0
                })
            }))
        }, t
    }(w.PureComponent);
Z(As, "defaultProps", {
    onChange: null,
    loadTimeOffset: 5,
    lazyRadius: 12,
    brushRadius: 10,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    backgroundColor: "#FFF",
    hideGrid: !1,
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: !1,
    imgSrc: "",
    saveData: "",
    immediateLoading: !1,
    hideInterface: !1,
    gridSizeX: 25,
    gridSizeY: 25,
    gridLineWidth: .5,
    hideGridX: !1,
    hideGridY: !1,
    enablePanAndZoom: !1,
    mouseZoomFactor: .01,
    zoomExtents: {
        min: .33,
        max: 3
    },
    clampLinesToDocument: !1
});
As.propTypes = {};
const Bt = {
        pen: 8,
        marker: 18,
        eraser: 18
    },
    J0 = k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
`,
    K0 = k.div`
  margin-bottom: 15px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${$.DisabledGray};
  border-width: 2px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${$.White};
`,
    kr = k.div`
  cursor: pointer;
  font-size: 35px;
  background: ${e=>e.enabled?"#E0E0E0":"transparent"};
  color: ${e=>e.customColor?e.customColor:$.Black};
  padding: 5px;
  border-radius: 6px;
`,
    Yi = {
        borderColor: $.Black,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "50%"
    };
class Z0 extends w.Component {
    constructor() {
        super(...arguments), this.changeToDefaultColor = () => this.props.changeColor(Or()), this.changeToSecondaryColor = () => this.props.changeColor(Qn()), this.changeToPen = () => this.props.changeSize(Bt.pen), this.changeToMarker = () => this.props.changeSize(Bt.marker)
    }
    render() {
        if (!this.props.show) return null;
        const {
            drawState: t
        } = this.props;
        return i.jsx(J0, {
            children: i.jsxs(K0, {
                children: [i.jsx(kr, {
                    customColor: Or,
                    enabled: t.brushColor === Or(),
                    onClick: this.changeToDefaultColor,
                    children: i.jsx(le, {
                        name: "fas fa-circle",
                        style: Yi
                    })
                }), i.jsx(kr, {
                    onClick: this.changeToSecondaryColor,
                    enabled: t.brushColor === Qn(),
                    customColor: Qn(),
                    children: i.jsx(le, {
                        name: "fas fa-circle",
                        style: Yi
                    })
                }), i.jsx("div", {
                    style: {
                        height: 35,
                        width: 5,
                        background: $.DisabledGray,
                        marginLeft: 10,
                        marginRight: 10
                    }
                }), i.jsx(kr, {
                    onClick: this.changeToPen,
                    enabled: t.brushColor !== Et() && t.brushSize === Bt.pen,
                    children: i.jsx(le, {
                        name: "fas fa-pen"
                    })
                }), i.jsx(kr, {
                    onClick: this.changeToMarker,
                    enabled: t.brushColor !== Et() && t.brushSize === Bt.marker,
                    children: i.jsx(le, {
                        name: "fas fa-marker"
                    })
                }), i.jsx(kr, {
                    onClick: this.props.changeToEraser,
                    enabled: t.brushColor === Et(),
                    children: i.jsx(le, {
                        name: "fas fa-eraser"
                    })
                })]
            })
        })
    }
}
const Vn = "gimkit-draw-canvas",
    Et = () => ve() ? "#313639" : ar() ? "#263238" : Xe() ? "#525380" : "#4caf50",
    Or = () => ve() ? $.White : ar() || Xe() ? "#ffeb3b" : "#424242",
    Qn = () => ve() ? "#ffee58" : Dr() ? "#5e35b1" : ar() ? "#ff6f00" : Xe() ? "#99f6a9" : "#e1f5fe",
    e5 = k.div`
  height: 100%;
  width: 100%;
  background: ${Et};
`;
let t5 = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            width: 0,
            height: 0,
            drawState: {
                brushColor: Or(),
                brushSize: Bt.pen
            },
            showingControls: !0
        }, this.changeBrushColor = t => {
            this.setState({
                drawState: {
                    ...this.state.drawState,
                    brushColor: t,
                    brushSize: this.state.drawState.brushSize === Bt.eraser ? Bt.pen : this.state.drawState.brushSize
                }
            })
        }, this.changeBrushSize = t => {
            this.setState({
                drawState: {
                    ...this.state.drawState,
                    brushSize: t,
                    brushColor: Or()
                }
            })
        }, this.changeToEraser = () => this.setState({
            drawState: {
                brushSize: Bt.eraser,
                brushColor: Et()
            }
        }), this.onTouch = t => {
            t.preventDefault()
        }, this.onResize = () => {
            const t = document.getElementById(Vn).clientHeight,
                n = document.getElementById(Vn).clientWidth;
            this.setState({
                height: t,
                width: n
            })
        }
    }
    componentDidMount() {
        this.onResize(), window.addEventListener("resize", this.onResize), document.addEventListener("touchmove", this.onTouch, {
            passive: !1
        })
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize), document.removeEventListener("touchmove", this.onTouch)
    }
    render() {
        const {
            width: t,
            height: n
        } = this.state;
        return i.jsx(i.Fragment, {
            children: i.jsxs(e5, {
                id: Vn,
                children: [i.jsx(As, {
                    canvasHeight: n,
                    canvasWidth: t,
                    brushRadius: this.state.drawState.brushSize,
                    brushColor: this.state.drawState.brushColor,
                    hideGrid: !0,
                    style: {
                        background: Et
                    },
                    lazyRadius: 0,
                    catenaryColor: this.state.drawState.brushColor
                }), i.jsx(Z0, {
                    show: this.state.showingControls,
                    drawState: this.state.drawState,
                    changeSize: this.changeBrushSize,
                    changeColor: this.changeBrushColor,
                    changeToEraser: this.changeToEraser
                })]
            })
        })
    }
};
const r5 = k.div`
  padding: 20px;
  box-sizing: border-box;
  box-shadow: ${be.basic};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: auto;
  cursor: pointer;
  background: ${()=>Wc(.3,Et())};
  color: ${$.White};
  font-weight: 900;
`,
    n5 = k.div`
  font-size: 37px;
  margin-bottom: 4px;
`,
    o5 = k.div`
  box-shadow: ${be.basic};
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 5px;
  box-sizing: border-box;
  border-style: solid;
  border-width: 2px;
`,
    s5 = k.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`,
    i5 = k.div`
  font-size: 20px;
`,
    a5 = k.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  margin-top: 2px;
`,
    Se = e => i.jsxs(o5, {
        children: [i.jsx("div", {
            style: {
                fontSize: 31,
                flexShrink: 0
            },
            children: i.jsx(le, {
                name: e.icon
            })
        }), i.jsx("div", {
            style: {
                marginLeft: 15
            },
            children: i.jsx(M, {
                text: e.message
            })
        })]
    }),
    c5 = () => {
        const e = () => ar() ? i.jsxs(i.Fragment, {
            children: [i.jsx(Se, {
                icon: "fas fa-volcano",
                message: "The lava is rising..."
            }), i.jsx(Se, {
                icon: "fas fa-building",
                message: "Work together to keep your building above the lava"
            }), i.jsx(Se, {
                icon: "fas fa-shopping-bag",
                message: "Purchase builds in the shop"
            }), i.jsx(Se, {
                icon: "fas fa-star",
                message: "Survive as long as you can"
            })]
        }) : ve() ? i.jsxs(i.Fragment, {
            children: [i.jsx(Se, {
                icon: "fa fa-user-astronaut",
                message: "Crewmates: run investigations and collect evidence to vote the impostors off the ship!"
            }), i.jsx(Se, {
                icon: "fa fa-user-secret",
                message: "Impostors: sabotage crewmate investigations and blend in. Try not to get voted off!"
            }), i.jsx(Se, {
                icon: "fa fa-info-circle",
                message: "We'll reveal your role once we liftoff."
            })]
        }) : Wt() ? i.jsxs(i.Fragment, {
            children: [i.jsx(Se, {
                icon: "fa fa-question-circle",
                message: "For each round, guess the term being drawn!"
            }), i.jsx(Se, {
                icon: "fa fa-chart-line",
                message: "Gain points by guessing correctly."
            }), i.jsx(Se, {
                icon: "fa fa-trophy",
                message: "Have the most points by the end to be declared the winner!"
            })]
        }) : Xe() ? i.jsxs(i.Fragment, {
            children: [i.jsx(Se, {
                icon: "far fa-money-bill-alt",
                message: "For each round, answer the question correctly to earn cash!"
            }), i.jsx(Se, {
                icon: "fas fa-bolt",
                message: "Pick a power that fits your play-style to come out on top."
            }), i.jsx(Se, {
                icon: "fas fa-sack-dollar",
                message: "Make your final bet in The Finale!"
            })]
        }) : i.jsxs(i.Fragment, {
            children: [i.jsx(Se, {
                icon: "far fa-money-bill-alt",
                message: "Answer questions to earn cash"
            }), i.jsx(Se, {
                icon: "fas fa-shopping-cart",
                message: "Purchase upgrades and powerups with your cash"
            }), i.jsx(Se, {
                icon: "fas fa-level-up-alt",
                message: "Earn cash faster!"
            })]
        });
        return i.jsxs(r5, {
            children: [i.jsx(n5, {
                children: i.jsx(M, {
                    text: ve() ? "Ready for liftoff?" : "Get ready..."
                })
            }), e(), i.jsxs(s5, {
                children: [i.jsx(i5, {
                    children: i.jsx(M, {
                        text: "You can draw while you're waiting!"
                    })
                }), i.jsx(a5, {
                    children: i.jsx(M, {
                        text: "Click/tap here to draw!"
                    })
                })]
            })]
        })
    },
    l5 = e => {
        const {
            tag: t,
            header: n,
            image: o,
            description: r
        } = e.item;
        let s = !1;
        if ((t || n || o || r) && (s = !0), !s) return null;
        const a = c => {
            c.stopPropagation()
        };
        return i.jsxs(d5, {
            onClick: a,
            children: [t && i.jsx(Na, {
                color: "secondary",
                style: {
                    marginBottom: 10,
                    fontWeight: 900
                },
                label: t
            }), n && i.jsx(u5, {
                children: n
            }), o && i.jsx("img", {
                src: o,
                style: {
                    maxWidth: "100%",
                    maxHeight: 170,
                    borderRadius: 5,
                    boxShadow: be.basic,
                    marginBottom: r ? 10 : 0,
                    marginTop: n || t ? 10 : 0
                }
            }), r && i.jsx(p5, {
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })]
        })
    },
    d5 = k.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${()=>m3}px;
  padding: 20px;
  box-shadow: ${be.basic};
  margin-top: 17px;
  border-radius: 7px;
  background: ${$.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${Ee.mainFontName};
`,
    u5 = k.div`
  font-size: 28px;
  font-weight: bold;
`,
    p5 = k.div`
  font-weight: normal;
  font-family: ${Ee.name};
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
`;
var f5 = Object.getOwnPropertyDescriptor,
    h5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? f5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let _o = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            hasCalledStart: !1
        }
    }
    componentDidMount() {
        bs(() => this.props.gameValues.gameStatus === $e.gameplay || this.props.gameValues.gameStatus === $e.teams || this.props.gameValues.gameStatus === $e.results, () => {
            if (this.props.gameValues.gameStatus === $e.teams) {
                ee(L.team);
                return
            }
            if (this.props.gameValues.gameStatus === $e.results) {
                ee(L.gameOver);
                return
            }
            $s()
        }, {})
    }
    render() {
        return null
    }
};
_o = h5([F("gameValues", "gameOptions"), D], _o);
var m5 = Object.getOwnPropertyDescriptor,
    g5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? m5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const m3 = 600,
    v5 = k.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background: ${Et};
  -webkit-overflow-scrolling: touch;
`,
    x5 = k.div`
  width: 90%;
  max-width: ${m3}px;
  min-height: 100%;
`;
let Ro = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            screen: "information"
        }, this.switchToDrawing = () => {
            this.setState({
                screen: "drawing"
            })
        }, this.getContent = () => this.state.screen === "information" ? i.jsx(v5, {
            onClick: this.switchToDrawing,
            children: i.jsxs(x5, {
                children: [i.jsx("div", {
                    style: {
                        height: 20
                    }
                }), i.jsx(c5, {}), this.props.gameValues.news.map(t => i.jsx(l5, {
                    item: t
                }, t.description)), i.jsx("div", {
                    style: {
                        height: 20
                    }
                })]
            })
        }) : i.jsx(t5, {})
    }
    render() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(_o, {}), this.getContent()]
        })
    }
};
Ro = g5([F("gameValues"), D], Ro);
var y5 = Object.getOwnPropertyDescriptor,
    C5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? y5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const b5 = k(pl)`
  height: 68px !important;
  border-top-color: rgba(0, 0, 0, 0.6);
  border-top-style: solid;
  border-top-width: 2px;
`;
let jo = class extends w.Component {
    constructor() {
        super(...arguments), this.canShowPowerups = () => this.props.gameOptions.powerups && !Gn(), this.canShowThemes = () => this.props.gameOptions.themes, this.handleTabChange = (e, t) => {
            this.props.changeShopTab(t)
        }
    }
    render() {
        return i.jsxs(b5, {
            value: this.props.value,
            onChange: this.handleTabChange,
            style: {
                zIndex: 0
            },
            showLabels: !0,
            children: [ar() && i.jsx($t, {
                label: i.jsx(M, {
                    text: "Build"
                }),
                icon: i.jsx(p2, {}),
                value: me.lava
            }), Tt() && i.jsx($t, {
                label: i.jsx(M, {
                    text: "Home"
                }),
                icon: i.jsx(g2, {}),
                value: me.defendingHomebase
            }), i.jsx($t, {
                label: i.jsx(M, {
                    text: "Upgrades"
                }),
                icon: i.jsx(k2, {}),
                value: me.upgrades
            }), this.canShowPowerups() && i.jsx($t, {
                label: i.jsx(M, {
                    text: Dr() ? "Items" : "Powerups"
                }),
                icon: i.jsx(Si, {}),
                value: me.powerups
            }), Gn() && i.jsx($t, {
                label: i.jsx(M, {
                    text: "Powerups"
                }),
                icon: i.jsx(Si, {}),
                value: me.powerupsNonMusic
            }), this.props.gameOptions.music && Gn() && i.jsx($t, {
                label: i.jsx(M, {
                    text: "Music"
                }),
                icon: i.jsx(y2, {}),
                value: me.powerupsMusic
            }), this.canShowThemes() && i.jsx($t, {
                label: i.jsx(M, {
                    text: "Themes"
                }),
                icon: i.jsx(h2, {}),
                value: me.themes
            })]
        })
    }
};
jo = C5([F("gameOptions"), D], jo);
var w5 = Object.getOwnPropertyDescriptor,
    k5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? w5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Oo = 5,
    P5 = k.div`
  box-shadow: ${be.basic};
  flex-grow: 1;
  width: 510px;
  border-radius: ${Oo}px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`,
    S5 = k.div`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${e=>e.colors.background};
  color: ${e=>e.colors.text};
  border-top-left-radius: ${Oo}px;
  border-top-right-radius: ${Oo}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`,
    T5 = k.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-end;
`,
    B5 = k.div`
  font-weight: bold;
  font-size: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,
    E5 = k.div`
  color: rgba(0, 0, 0, 0.7);
`;
let Mo = class extends w.Component {
    constructor() {
        super(...arguments), this.getCost = () => Math.ceil((this.props.balance.balance * this.props.powerup.percentageCost + this.props.powerup.baseCost) / 5) * 5, this.getButtonDetails = () => {
            const {
                balance: e,
                powerup: t
            } = this.props, n = this.getCost(), o = e.balance >= n && !this.props.powerups.purchasedPowerups.includes(t.name);
            return {
                label: this.props.powerups.purchasedPowerups.includes(t.name) ? this.props.powerups.usedPowerups.includes(t.name) ? "Used" : "Purchased" : xe(n),
                type: o ? "primary" : "disabled",
                onClick: o ? this.purchase : null
            }
        }, this.purchase = () => {
            On.play(), !this.props.powerups.hasShownHelperModal && !this.props.powerup.autoActivate && (this.props.powerups.hasShownHelperModal = !0, this.props.openModal()), oe(ne.powerupPurchased, this.props.powerup.name), this.props.powerup.autoActivate && ee(L.questions)
        }
    }
    render() {
        const {
            powerup: e
        } = this.props, t = this.getButtonDetails();
        return i.jsxs(P5, {
            children: [i.jsxs(S5, {
                colors: e.color,
                children: [i.jsx(le, {
                    name: e.icon
                }), e.customTag && i.jsx(Na, {
                    style: {
                        marginTop: 5
                    },
                    label: e.customTag
                })]
            }), i.jsxs(T5, {
                children: [i.jsxs("div", {
                    style: {
                        marginRight: 10
                    },
                    children: [i.jsx(B5, {
                        children: i.jsx("div", {
                            style: {
                                marginRight: 5
                            },
                            children: i.jsx(M, {
                                text: $n(e)
                            })
                        })
                    }), i.jsx(E5, {
                        children: i.jsx(M, {
                            text: Ds(e.description)
                        })
                    })]
                }), i.jsx(Ae, {
                    type: t.type,
                    label: i.jsx(M, {
                        text: t.label,
                        disableIfContains: this.props.gameOptions.currency
                    }),
                    onClick: t.onClick
                })]
            })]
        })
    }
};
Mo = k5([F("powerups", "gameOptions", "balance"), D], Mo);
const _5 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${Ee.name};
`,
    R5 = k.div`
  font-weight: bold;
  font-size: 29px;
`,
    j5 = k.div`
  font-size: 21px;
  text-align: center;
  margin-bottom: 15px;
`;
class O5 extends w.Component {
    render() {
        return i.jsx(wt, {
            open: this.props.open,
            close: this.props.close,
            children: i.jsxs(_5, {
                children: [i.jsx(R5, {
                    children: i.jsx(M, {
                        text: "Powerup Purchased!"
                    })
                }), i.jsx(j5, {
                    children: i.jsx(M, {
                        text: "Activate your powerup via the tray menu"
                    })
                }), i.jsx("img", {
                    src: H("PowerupTutorial.gif"),
                    style: {
                        maxHeight: 270,
                        borderRadius: 3,
                        boxShadow: be.basic,
                        marginBottom: 15
                    }
                }), i.jsx(Ae, {
                    type: "secondary",
                    size: "large",
                    onClick: this.props.closeAndReturnToQuestions,
                    label: i.jsx(M, {
                        text: "Got It"
                    })
                })]
            })
        })
    }
}
var M5 = Object.getOwnPropertyDescriptor,
    D5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? M5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const I5 = k.div`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`,
    $5 = k.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
`,
    N5 = k.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`,
    L5 = k.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`,
    A5 = k.img.attrs({
        src: H("treasure.svg")
    })`
  width: 50%;
  max-width: 250px;
  max-height: 25vh;
  cursor: pointer;
`;
let er = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            showPowerupsHelperModal: !1,
            showTreasureChest: !0,
            currentScreen: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.powerupRNGAnimationDone ? "Treaure" : "Powerups"
        }, this.renderScreens = () => {
            const {
                currentScreen: e
            } = this.state;
            let t = null;
            return e === "Treaure" ? t = this.treasureChestScreen() : e === "Powerups" && (t = this.powerupsScreen()), t
        }, this.treasureChestScreen = () => i.jsxs(L5, {
            className: !this.state.showTreasureChest && "animated fadeOut",
            children: [i.jsx(N5, {
                children: i.jsx(M, {
                    text: "Open The Treasure Chest To Unlock Your Powerups!"
                })
            }), i.jsx(A5, {
                className: this.state.showTreasureChest ? "animated pulse infinite" : "animated bounceOut",
                onClick: this.hideTreasureChest
            })]
        }), this.powerupsScreen = () => i.jsxs(i.Fragment, {
            children: [i.jsx($5, {
                className: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.visitedPowerupSection ? "animated fadeIn" : "",
                children: this.props.powerups.availablePowerups.filter(e => this.props.powerups.disabledPowerups.includes(e.name) ? !1 : this.props.hidePowerup ? !this.props.hidePowerup(e) : !0).map(e => i.jsx(Mo, {
                    powerup: e,
                    openModal: this.openModal
                }, e.name))
            }), i.jsx(O5, {
                open: this.state.showPowerupsHelperModal,
                close: this.closeModal,
                closeAndReturnToQuestions: this.closeAndReturnToQuestions
            })]
        }), this.hideTreasureChest = () => {
            this.props.navigation.powerupRNGAnimationDone = !0, this.setState({
                showTreasureChest: !1
            }, () => setTimeout(() => this.setState({
                currentScreen: "Powerups"
            }, () => setTimeout(() => this.props.navigation.visitedPowerupSection = !0, 500)), 1e3))
        }, this.openModal = () => this.setState({
            showPowerupsHelperModal: !0
        }), this.closeAndReturnToQuestions = () => {
            this.closeModal(), setTimeout(() => ee(L.questions), 510)
        }, this.closeModal = () => {
            this.setState({
                showPowerupsHelperModal: !1
            })
        }
    }
    render() {
        return i.jsx(I5, {
            children: this.renderScreens()
        })
    }
};
er = D5([F("powerups", "gameOptions", "navigation"), D], er);
var z5 = Object.getOwnPropertyDescriptor,
    W5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? z5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const $r = 5,
    F5 = k.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 470px;
  border-radius: ${$r}px;
  margin: 10px;
  box-shadow: ${be.basic};
`,
    U5 = k.div`
  width: 100%;
  height: 100px;
  display: flex;
`,
    q5 = k.div`
  height: 100%;
  width: 25%;
  border-top-left-radius: ${e=>e.index===0?$r:0}px;
  border-top-right-radius: ${e=>e.index===3?$r:0}px;
  background: ${e=>e.color};
`,
    G5 = k.div`
  border-bottom-left-radius: ${$r}px;
  border-bottom-right-radius: ${$r}px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
    H5 = k.div`
  color: rgba(0, 0, 0, 0.7);
`,
    V5 = k.div`
  font-weight: bold;
  font-size: 26px;
  font-weight: bold;
`;
let Do = class extends w.Component {
    constructor() {
        super(...arguments), this.getButtonDetails = () => {
            if (this.ownsTheme()) return this.canApplyTheme() ? {
                type: "secondary",
                text: i.jsx(M, {
                    text: "Apply"
                }),
                onClick: () => {
                    Ya.play(), this.props.navigation.currentShopTab = me.upgrades, oe(ne.themeApplied, this.props.specifiedTheme.name), ee(L.questions)
                }
            } : {
                type: "disabled",
                text: i.jsx(M, {
                    text: "Applied"
                })
            };
            const e = xe(this.props.specifiedTheme.cost);
            return this.canPurchaseTheme() ? {
                type: "primary",
                text: e,
                onClick: () => {
                    On.play(), Ud(this.props.specifiedTheme.name)
                }
            } : {
                type: "disabled",
                text: e
            }
        }, this.ownsTheme = () => this.props.theme.ownedThemes.includes(this.props.specifiedTheme.name), this.canApplyTheme = () => this.ownsTheme() && this.props.theme.themeName !== this.props.specifiedTheme.name, this.canPurchaseTheme = () => !this.ownsTheme() && this.props.specifiedTheme.cost <= this.props.balance.balance
    }
    render() {
        const e = this.getButtonDetails(),
            t = this.props.specifiedTheme;
        return i.jsxs(F5, {
            children: [i.jsx(U5, {
                children: t.palette.map((n, o) => i.jsx(q5, {
                    index: o,
                    color: n.background
                }, n.background + o))
            }), i.jsxs(G5, {
                children: [i.jsxs("div", {
                    style: {
                        marginRight: 10
                    },
                    children: [i.jsx(V5, {
                        children: t.name
                    }), i.jsx(H5, {
                        children: i.jsx(M, {
                            text: t.description
                        })
                    })]
                }), i.jsx(Ae, {
                    onClick: e.onClick,
                    type: e.type,
                    label: e.text
                })]
            })]
        })
    }
};
Do = W5([F("balance", "theme", "navigation"), D], Do);
var Q5 = Object.getOwnPropertyDescriptor,
    Y5 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Q5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Nn = k.div`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`,
    X5 = k.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
`;
let En = class extends w.Component {
    render() {
        const {
            theme: {
                availableThemes: e
            }
        } = this.props;
        return i.jsx(Nn, {
            children: i.jsx(X5, {
                children: e.slice().sort((t, n) => t.cost - n.cost).filter(t => !this.props.theme.disabledThemes.includes(t.name)).map(t => i.jsx(Do, {
                    specifiedTheme: t
                }, t.name))
            })
        })
    }
};
En = Y5([F("theme"), D], En);
const J5 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  height: 100%;
  width: 6%;
  min-width: 44px;
  background: ${e=>e.theme.palette[e.index].background};
  color: ${e=>e.theme.palette[e.index].text};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 25px;
  @media (min-width: ${e=>`${e.breakpoint}px`}) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    padding: 0px;
    font-size: 30px;
  }
`;
let K5 = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            screenWidth: 0
        }, this.updateWidth = () => {
            this.setState({
                screenWidth: window.innerWidth
            })
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateWidth)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth)
    }
    render() {
        return i.jsx(J5, {
            breakpoint: this.props.desktopBreakpoint,
            index: this.props.index,
            children: i.jsx(le, {
                name: this.props.name
            })
        })
    }
};
var Z5 = Object.getOwnPropertyDescriptor,
    ep = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Z5(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const tp = k.div`
  margin-bottom: 10px;
  background: ${$.White};
  display: flex;
  align-items: center;
  color: ${$.Black};
  border-radius: 4px;
  box-shadow: ${be.basic};
  width: 100%;
  height: calc(25% - 10px);
  min-height: 80px;
  cursor: pointer;
  @media (min-width: ${e=>e.breakpoint}px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: calc(50% - 20px);
    height: calc(50% - 20px);
    flex-direction: column;
    justify-content: center;
    transition: transform 0.25s;
    &:hover {
      transform: scale(1.02);
    }
  }
`,
    rp = k.div`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 12px;
  @media (min-width: ${e=>e.breakpoint}px) {
    text-align: center;
  }
`;
let Io = class extends w.Component {
    constructor() {
        super(...arguments), this.handleClick = () => {
            jn.play(), this.props.upgrades.currentlySelectedUpgrade = this.props.title, ee(L.upgrade)
        }
    }
    render() {
        return i.jsxs(tp, {
            onClick: this.handleClick,
            breakpoint: 700,
            children: [i.jsx(K5, {
                index: this.props.index,
                name: this.props.icon,
                desktopBreakpoint: 700
            }), i.jsxs(rp, {
                breakpoint: 700,
                children: [i.jsx("div", {
                    style: {
                        fontWeight: "bold",
                        fontSize: 24
                    },
                    children: i.jsx(M, {
                        text: this.props.title
                    })
                }), i.jsx("div", {
                    children: i.jsx(M, {
                        text: this.props.description
                    })
                })]
            })]
        })
    }
};
Io = ep([F("upgrades"), D], Io);
var np = Object.getOwnPropertyDescriptor,
    op = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? np(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const sp = k.div`
  flex: 1;
  background: ${$.BackgroundGray};
  color: ${$.Black};
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;
let $o = class extends w.Component {
    render() {
        const {
            upgrades: e
        } = this.props;
        return i.jsx(sp, {
            children: e.upgrades.map((t, n) => i.jsx(Io, {
                title: t.name,
                description: t.description,
                icon: t.icon,
                index: n
            }, t.name))
        })
    }
};
$o = op([F("upgrades"), D], $o);
var ip = Object.getOwnPropertyDescriptor,
    ap = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? ip(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const cp = e => Math.round(e * 10) / 10,
    No = 5;
let Lo = class extends w.Component {
    render() {
        const e = this.props.entities.defendingHomebase;
        return e ? i.jsxs(zs, {
            children: [i.jsx(Ws, {
                colors: {
                    text: $.White,
                    background: e.backgroundColor
                },
                children: i.jsx(le, {
                    name: e.icon
                })
            }), i.jsxs("div", {
                style: {
                    padding: 23,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: [i.jsx("div", {
                    style: {
                        fontWeight: 900,
                        fontSize: 35
                    },
                    children: i.jsx(M, {
                        text: e.name
                    })
                }), i.jsxs("div", {
                    style: {
                        fontSize: 23,
                        marginTop: -5
                    },
                    children: [ge(e.health), "/", ge(e.maxHealth), " ", i.jsx(M, {
                        text: "health"
                    })]
                }), i.jsx(La, {
                    style: {
                        width: "100%",
                        marginTop: 5,
                        marginBottom: 10,
                        maxWidth: 400
                    }
                }), i.jsxs("div", {
                    children: [i.jsx(M, {
                        text: "Losing"
                    }), " ", i.jsx("b", {
                        children: ge(cp(e.healthDecreasePerTick))
                    }), " ", i.jsx(M, {
                        text: "health per second"
                    })]
                })]
            })]
        }) : null
    }
};
Lo = ap([F("entities"), D], Lo);
const zs = k.div`
  margin: 20px;
  border-radius: ${No}px;
  box-shadow: ${be.basic};
`,
    Ws = k.div`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  box-sizing: border-box;
  background: ${e=>e.colors.background};
  color: ${e=>e.colors.text};
  border-top-left-radius: ${No}px;
  border-top-right-radius: ${No}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`,
    Ao = 5;
class Fs extends w.Component {
    render() {
        const t = this.props;
        return i.jsxs(lp, {
            style: t.style,
            children: [i.jsx(dp, {
                colors: {
                    text: $.White,
                    background: t.background
                },
                children: i.jsx(le, {
                    name: t.icon
                })
            }), i.jsxs("div", {
                style: {
                    padding: 23,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between"
                },
                children: [i.jsxs("div", {
                    className: "flex flex-column",
                    style: {
                        alignItems: "flex-start"
                    },
                    children: [t.aboveNameComponent ? t.aboveNameComponent : null, i.jsx("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 25
                        },
                        children: i.jsx(M, {
                            text: t.name
                        })
                    }), i.jsx("div", {
                        children: i.jsx(M, {
                            text: t.description
                        })
                    })]
                }), i.jsx("div", {
                    children: i.jsx(Ae, {
                        type: t.canAfford ? "primary" : "disabled",
                        size: "medium",
                        label: xe(t.cost),
                        style: {
                            marginLeft: 25
                        },
                        onClick: t.onClick
                    })
                })]
            })]
        })
    }
}
const lp = k.div`
  margin: 20px;
  border-radius: ${Ao}px;
  box-shadow: ${be.basic};
`,
    dp = k.div`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${e=>e.colors.background};
  color: ${e=>e.colors.text};
  border-top-left-radius: ${Ao}px;
  border-top-right-radius: ${Ao}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`;
var up = Object.getOwnPropertyDescriptor,
    pp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? up(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let zo = class extends w.Component {
    constructor() {
        super(...arguments), this.checkHomebaseInterval = null, this.getCost = (e, t) => Math.ceil((e + t * this.props.balance.maxBalance) / 5) * 5
    }
    componentDidMount() {
        fo(), this.checkHomebaseInterval = setInterval(() => {
            fo()
        }, 5e3)
    }
    componentWillUnmount() {
        this.checkHomebaseInterval && clearInterval(this.checkHomebaseInterval)
    }
    render() {
        return i.jsx(Nn, {
            style: {
                display: "flex",
                justifyContent: "center"
            },
            children: i.jsxs(fp, {
                children: [i.jsx(Lo, {}), this.props.upgrades.homebaseUpgades.map(e => {
                    const t = this.getCost(e.baseCost, e.percentageCost),
                        n = this.props.balance.balance >= t,
                        o = () => {
                            n && (oe(ne.upgradeDefendingHomebase, {
                                id: e.id
                            }), ee(L.questions))
                        };
                    return i.jsx(Fs, {
                        name: e.name,
                        description: e.description,
                        cost: t,
                        canAfford: n,
                        icon: e.icon,
                        background: e.background,
                        onClick: o
                    }, e.id)
                }), i.jsx("div", {
                    style: {
                        height: 20,
                        width: "100%"
                    }
                })]
            })
        })
    }
};
zo = pp([F("upgrades", "balance"), D], zo);
const fp = k.div`
  width: 100%;
  max-width: 700px;
`;
var Yn, Xi;

function hp() {
    if (Xi) return Yn;
    Xi = 1;

    function e() {
        this.name = "NoVideoInputDevicesError", this.message = "No video input devices found"
    }
    return e.prototype = new Error, Yn = {
        NoVideoInputDevicesError: e
    }, Yn
}
var Xn, Ji;

function mp() {
    if (Ji) return Xn;
    Ji = 1;
    var e = hp(),
        t = e.NoVideoInputDevicesError;

    function n(s, a, c) {
        return s.length > 0 ? s[0].deviceId : a.length == 1 || c == "user" ? a[0].deviceId : a[1].deviceId
    }
    var o = function(a) {
        return a == "environment" ? /rear|back|environment/ig : /front|user|face/ig
    };

    function r(s) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n;
        return new Promise(function(c, d) {
            var l = void 0;
            try {
                l = navigator.mediaDevices.enumerateDevices()
            } catch {
                d(new t)
            }
            l.then(function(f) {
                var g = f.filter(function(y) {
                    return y.kind == "videoinput"
                });
                if (g.length < 1) {
                    d(new t);
                    return
                }
                var b = o(s),
                    v = g.filter(function(y) {
                        var C = y.label;
                        return b.test(C)
                    });
                c(a(v, g, s))
            })
        })
    }
    return Xn = {
        getDeviceId: r,
        getFacingModePattern: o
    }, Xn
}
var Jn, Ki;

function gp() {
    return Ki || (Ki = 1, Jn = function(t, n, o) {
        var r = [];
        return o.forEach(function(s) {
            t[s] != n[s] && r.push(s)
        }), r
    }), Jn
}
var Kn, Zi;

function vp() {
    return Zi || (Zi = 1, Kn = function(t, n) {
        t = t || [], n = n || {};
        try {
            return new Blob(t, n)
        } catch (a) {
            if (a.name !== "TypeError") throw a;
            for (var o = window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder, r = new o, s = 0; s < t.length; s += 1) r.append(t[s]);
            return r.getBlob(n.type)
        }
    }), Kn
}
let g3 = !0,
    v3 = !0;

function Br(e, t, n) {
    const o = e.match(t);
    return o && o.length >= n && parseInt(o[n], 10)
}

function fr(e, t, n) {
    if (!e.RTCPeerConnection) return;
    const o = e.RTCPeerConnection.prototype,
        r = o.addEventListener;
    o.addEventListener = function(a, c) {
        if (a !== t) return r.apply(this, arguments);
        const d = l => {
            const f = n(l);
            f && (c.handleEvent ? c.handleEvent(f) : c(f))
        };
        return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map), this._eventMap[t].set(c, d), r.apply(this, [a, d])
    };
    const s = o.removeEventListener;
    o.removeEventListener = function(a, c) {
        if (a !== t || !this._eventMap || !this._eventMap[t]) return s.apply(this, arguments);
        if (!this._eventMap[t].has(c)) return s.apply(this, arguments);
        const d = this._eventMap[t].get(c);
        return this._eventMap[t].delete(c), this._eventMap[t].size === 0 && delete this._eventMap[t], Object.keys(this._eventMap).length === 0 && delete this._eventMap, s.apply(this, [a, d])
    }, Object.defineProperty(o, "on" + t, {
        get() {
            return this["_on" + t]
        },
        set(a) {
            this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), a && this.addEventListener(t, this["_on" + t] = a)
        },
        enumerable: !0,
        configurable: !0
    })
}

function xp(e) {
    return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (g3 = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
}

function yp(e) {
    return typeof e != "boolean" ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (v3 = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
}

function Us() {
    if (typeof window == "object") {
        if (g3) return;
        typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments)
    }
}

function Ln(e, t) {
    v3 && console.warn(e + " is deprecated, please use " + t + " instead.")
}

function Cp(e) {
    const t = {
        browser: null,
        version: null
    };
    if (typeof e > "u" || !e.navigator) return t.browser = "Not a browser.", t;
    const {
        navigator: n
    } = e;
    if (n.mozGetUserMedia) t.browser = "firefox", t.version = Br(n.userAgent, /Firefox\/(\d+)\./, 1);
    else if (n.webkitGetUserMedia || e.isSecureContext === !1 && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = Br(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = Br(n.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    else if (e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./)) t.browser = "safari", t.version = Br(n.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
    else return t.browser = "Not a supported browser.", t;
    return t
}

function ea(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function x3(e) {
    return ea(e) ? Object.keys(e).reduce(function(t, n) {
        const o = ea(e[n]),
            r = o ? x3(e[n]) : e[n],
            s = o && !Object.keys(r).length;
        return r === void 0 || s ? t : Object.assign(t, {
            [n]: r
        })
    }, {}) : e
}

function Wo(e, t, n) {
    !t || n.has(t.id) || (n.set(t.id, t), Object.keys(t).forEach(o => {
        o.endsWith("Id") ? Wo(e, e.get(t[o]), n) : o.endsWith("Ids") && t[o].forEach(r => {
            Wo(e, e.get(r), n)
        })
    }))
}

function ta(e, t, n) {
    const o = n ? "outbound-rtp" : "inbound-rtp",
        r = new Map;
    if (t === null) return r;
    const s = [];
    return e.forEach(a => {
        a.type === "track" && a.trackIdentifier === t.id && s.push(a)
    }), s.forEach(a => {
        e.forEach(c => {
            c.type === o && c.trackId === a.id && Wo(e, c, r)
        })
    }), r
}
const ra = Us;

function y3(e, t) {
    const n = e && e.navigator;
    if (!n.mediaDevices) return;
    const o = function(c) {
            if (typeof c != "object" || c.mandatory || c.optional) return c;
            const d = {};
            return Object.keys(c).forEach(l => {
                if (l === "require" || l === "advanced" || l === "mediaSource") return;
                const f = typeof c[l] == "object" ? c[l] : {
                    ideal: c[l]
                };
                f.exact !== void 0 && typeof f.exact == "number" && (f.min = f.max = f.exact);
                const g = function(b, v) {
                    return b ? b + v.charAt(0).toUpperCase() + v.slice(1) : v === "deviceId" ? "sourceId" : v
                };
                if (f.ideal !== void 0) {
                    d.optional = d.optional || [];
                    let b = {};
                    typeof f.ideal == "number" ? (b[g("min", l)] = f.ideal, d.optional.push(b), b = {}, b[g("max", l)] = f.ideal, d.optional.push(b)) : (b[g("", l)] = f.ideal, d.optional.push(b))
                }
                f.exact !== void 0 && typeof f.exact != "number" ? (d.mandatory = d.mandatory || {}, d.mandatory[g("", l)] = f.exact) : ["min", "max"].forEach(b => {
                    f[b] !== void 0 && (d.mandatory = d.mandatory || {}, d.mandatory[g(b, l)] = f[b])
                })
            }), c.advanced && (d.optional = (d.optional || []).concat(c.advanced)), d
        },
        r = function(c, d) {
            if (t.version >= 61) return d(c);
            if (c = JSON.parse(JSON.stringify(c)), c && typeof c.audio == "object") {
                const l = function(f, g, b) {
                    g in f && !(b in f) && (f[b] = f[g], delete f[g])
                };
                c = JSON.parse(JSON.stringify(c)), l(c.audio, "autoGainControl", "googAutoGainControl"), l(c.audio, "noiseSuppression", "googNoiseSuppression"), c.audio = o(c.audio)
            }
            if (c && typeof c.video == "object") {
                let l = c.video.facingMode;
                l = l && (typeof l == "object" ? l : {
                    ideal: l
                });
                const f = t.version < 66;
                if (l && (l.exact === "user" || l.exact === "environment" || l.ideal === "user" || l.ideal === "environment") && !(n.mediaDevices.getSupportedConstraints && n.mediaDevices.getSupportedConstraints().facingMode && !f)) {
                    delete c.video.facingMode;
                    let g;
                    if (l.exact === "environment" || l.ideal === "environment" ? g = ["back", "rear"] : (l.exact === "user" || l.ideal === "user") && (g = ["front"]), g) return n.mediaDevices.enumerateDevices().then(b => {
                        b = b.filter(y => y.kind === "videoinput");
                        let v = b.find(y => g.some(C => y.label.toLowerCase().includes(C)));
                        return !v && b.length && g.includes("back") && (v = b[b.length - 1]), v && (c.video.deviceId = l.exact ? {
                            exact: v.deviceId
                        } : {
                            ideal: v.deviceId
                        }), c.video = o(c.video), ra("chrome: " + JSON.stringify(c)), d(c)
                    })
                }
                c.video = o(c.video)
            }
            return ra("chrome: " + JSON.stringify(c)), d(c)
        },
        s = function(c) {
            return t.version >= 64 ? c : {
                name: {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError"
                } [c.name] || c.name,
                message: c.message,
                constraint: c.constraint || c.constraintName,
                toString() {
                    return this.name + (this.message && ": ") + this.message
                }
            }
        },
        a = function(c, d, l) {
            r(c, f => {
                n.webkitGetUserMedia(f, d, g => {
                    l && l(s(g))
                })
            })
        };
    if (n.getUserMedia = a.bind(n), n.mediaDevices.getUserMedia) {
        const c = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
        n.mediaDevices.getUserMedia = function(d) {
            return r(d, l => c(l).then(f => {
                if (l.audio && !f.getAudioTracks().length || l.video && !f.getVideoTracks().length) throw f.getTracks().forEach(g => {
                    g.stop()
                }), new DOMException("", "NotFoundError");
                return f
            }, f => Promise.reject(s(f))))
        }
    }
}

function bp(e, t) {
    if (!(e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) && e.navigator.mediaDevices) {
        if (typeof t != "function") {
            console.error("shimGetDisplayMedia: getSourceId argument is not a function");
            return
        }
        e.navigator.mediaDevices.getDisplayMedia = function(o) {
            return t(o).then(r => {
                const s = o.video && o.video.width,
                    a = o.video && o.video.height,
                    c = o.video && o.video.frameRate;
                return o.video = {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: r,
                        maxFrameRate: c || 3
                    }
                }, s && (o.video.mandatory.maxWidth = s), a && (o.video.mandatory.maxHeight = a), e.navigator.mediaDevices.getUserMedia(o)
            })
        }
    }
}

function C3(e) {
    e.MediaStream = e.MediaStream || e.webkitMediaStream
}

function b3(e) {
    if (typeof e == "object" && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
            get() {
                return this._ontrack
            },
            set(n) {
                this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = n)
            },
            enumerable: !0,
            configurable: !0
        });
        const t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
            return this._ontrackpoly || (this._ontrackpoly = o => {
                o.stream.addEventListener("addtrack", r => {
                    let s;
                    e.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find(c => c.track && c.track.id === r.track.id) : s = {
                        track: r.track
                    };
                    const a = new Event("track");
                    a.track = r.track, a.receiver = s, a.transceiver = {
                        receiver: s
                    }, a.streams = [o.stream], this.dispatchEvent(a)
                }), o.stream.getTracks().forEach(r => {
                    let s;
                    e.RTCPeerConnection.prototype.getReceivers ? s = this.getReceivers().find(c => c.track && c.track.id === r.id) : s = {
                        track: r
                    };
                    const a = new Event("track");
                    a.track = r, a.receiver = s, a.transceiver = {
                        receiver: s
                    }, a.streams = [o.stream], this.dispatchEvent(a)
                })
            }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
        }
    } else fr(e, "track", t => (t.transceiver || Object.defineProperty(t, "transceiver", {
        value: {
            receiver: t.receiver
        }
    }), t))
}

function w3(e) {
    if (typeof e == "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
        const t = function(r, s) {
            return {
                track: s,
                get dtmf() {
                    return this._dtmf === void 0 && (s.kind === "audio" ? this._dtmf = r.createDTMFSender(s) : this._dtmf = null), this._dtmf
                },
                _pc: r
            }
        };
        if (!e.RTCPeerConnection.prototype.getSenders) {
            e.RTCPeerConnection.prototype.getSenders = function() {
                return this._senders = this._senders || [], this._senders.slice()
            };
            const r = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addTrack = function(c, d) {
                let l = r.apply(this, arguments);
                return l || (l = t(this, c), this._senders.push(l)), l
            };
            const s = e.RTCPeerConnection.prototype.removeTrack;
            e.RTCPeerConnection.prototype.removeTrack = function(c) {
                s.apply(this, arguments);
                const d = this._senders.indexOf(c);
                d !== -1 && this._senders.splice(d, 1)
            }
        }
        const n = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(s) {
            this._senders = this._senders || [], n.apply(this, [s]), s.getTracks().forEach(a => {
                this._senders.push(t(this, a))
            })
        };
        const o = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(s) {
            this._senders = this._senders || [], o.apply(this, [s]), s.getTracks().forEach(a => {
                const c = this._senders.find(d => d.track === a);
                c && this._senders.splice(this._senders.indexOf(c), 1)
            })
        }
    } else if (typeof e == "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
        const t = e.RTCPeerConnection.prototype.getSenders;
        e.RTCPeerConnection.prototype.getSenders = function() {
            const o = t.apply(this, []);
            return o.forEach(r => r._pc = this), o
        }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get() {
                return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
            }
        })
    }
}

function k3(e) {
    if (!e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function() {
        const [o, r, s] = arguments;
        if (arguments.length > 0 && typeof o == "function") return t.apply(this, arguments);
        if (t.length === 0 && (arguments.length === 0 || typeof o != "function")) return t.apply(this, []);
        const a = function(d) {
                const l = {};
                return d.result().forEach(g => {
                    const b = {
                        id: g.id,
                        timestamp: g.timestamp,
                        type: {
                            localcandidate: "local-candidate",
                            remotecandidate: "remote-candidate"
                        } [g.type] || g.type
                    };
                    g.names().forEach(v => {
                        b[v] = g.stat(v)
                    }), l[b.id] = b
                }), l
            },
            c = function(d) {
                return new Map(Object.keys(d).map(l => [l, d[l]]))
            };
        if (arguments.length >= 2) {
            const d = function(l) {
                r(c(a(l)))
            };
            return t.apply(this, [d, o])
        }
        return new Promise((d, l) => {
            t.apply(this, [function(f) {
                d(c(a(f)))
            }, l])
        }).then(r, s)
    }
}

function P3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
    if (!("getStats" in e.RTCRtpSender.prototype)) {
        const n = e.RTCPeerConnection.prototype.getSenders;
        n && (e.RTCPeerConnection.prototype.getSenders = function() {
            const s = n.apply(this, []);
            return s.forEach(a => a._pc = this), s
        });
        const o = e.RTCPeerConnection.prototype.addTrack;
        o && (e.RTCPeerConnection.prototype.addTrack = function() {
            const s = o.apply(this, arguments);
            return s._pc = this, s
        }), e.RTCRtpSender.prototype.getStats = function() {
            const s = this;
            return this._pc.getStats().then(a => ta(a, s.track, !0))
        }
    }
    if (!("getStats" in e.RTCRtpReceiver.prototype)) {
        const n = e.RTCPeerConnection.prototype.getReceivers;
        n && (e.RTCPeerConnection.prototype.getReceivers = function() {
            const r = n.apply(this, []);
            return r.forEach(s => s._pc = this), r
        }), fr(e, "track", o => (o.receiver._pc = o.srcElement, o)), e.RTCRtpReceiver.prototype.getStats = function() {
            const r = this;
            return this._pc.getStats().then(s => ta(s, r.track, !1))
        }
    }
    if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
    const t = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function() {
        if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
            const o = arguments[0];
            let r, s, a;
            return this.getSenders().forEach(c => {
                c.track === o && (r ? a = !0 : r = c)
            }), this.getReceivers().forEach(c => (c.track === o && (s ? a = !0 : s = c), c.track === o)), a || r && s ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : s ? s.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
        }
        return t.apply(this, arguments)
    }
}

function S3(e) {
    e.RTCPeerConnection.prototype.getLocalStreams = function() {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(a => this._shimmedLocalStreams[a][0])
    };
    const t = e.RTCPeerConnection.prototype.addTrack;
    e.RTCPeerConnection.prototype.addTrack = function(a, c) {
        if (!c) return t.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const d = t.apply(this, arguments);
        return this._shimmedLocalStreams[c.id] ? this._shimmedLocalStreams[c.id].indexOf(d) === -1 && this._shimmedLocalStreams[c.id].push(d) : this._shimmedLocalStreams[c.id] = [c, d], d
    };
    const n = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function(a) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach(l => {
            if (this.getSenders().find(g => g.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError")
        });
        const c = this.getSenders();
        n.apply(this, arguments);
        const d = this.getSenders().filter(l => c.indexOf(l) === -1);
        this._shimmedLocalStreams[a.id] = [a].concat(d)
    };
    const o = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = function(a) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], o.apply(this, arguments)
    };
    const r = e.RTCPeerConnection.prototype.removeTrack;
    e.RTCPeerConnection.prototype.removeTrack = function(a) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach(c => {
            const d = this._shimmedLocalStreams[c].indexOf(a);
            d !== -1 && this._shimmedLocalStreams[c].splice(d, 1), this._shimmedLocalStreams[c].length === 1 && delete this._shimmedLocalStreams[c]
        }), r.apply(this, arguments)
    }
}

function T3(e, t) {
    if (!e.RTCPeerConnection) return;
    if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return S3(e);
    const n = e.RTCPeerConnection.prototype.getLocalStreams;
    e.RTCPeerConnection.prototype.getLocalStreams = function() {
        const f = n.apply(this);
        return this._reverseStreams = this._reverseStreams || {}, f.map(g => this._reverseStreams[g.id])
    };
    const o = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function(f) {
        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, f.getTracks().forEach(g => {
                if (this.getSenders().find(v => v.track === g)) throw new DOMException("Track already exists.", "InvalidAccessError")
            }), !this._reverseStreams[f.id]) {
            const g = new e.MediaStream(f.getTracks());
            this._streams[f.id] = g, this._reverseStreams[g.id] = f, f = g
        }
        o.apply(this, [f])
    };
    const r = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = function(f) {
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, r.apply(this, [this._streams[f.id] || f]), delete this._reverseStreams[this._streams[f.id] ? this._streams[f.id].id : f.id], delete this._streams[f.id]
    }, e.RTCPeerConnection.prototype.addTrack = function(f, g) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        const b = [].slice.call(arguments, 1);
        if (b.length !== 1 || !b[0].getTracks().find(C => C === f)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        if (this.getSenders().find(C => C.track === f)) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
        const y = this._streams[g.id];
        if (y) y.addTrack(f), Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"))
        });
        else {
            const C = new e.MediaStream([f]);
            this._streams[g.id] = C, this._reverseStreams[C.id] = g, this.addStream(C)
        }
        return this.getSenders().find(C => C.track === f)
    };

    function s(l, f) {
        let g = f.sdp;
        return Object.keys(l._reverseStreams || []).forEach(b => {
            const v = l._reverseStreams[b],
                y = l._streams[v.id];
            g = g.replace(new RegExp(y.id, "g"), v.id)
        }), new RTCSessionDescription({
            type: f.type,
            sdp: g
        })
    }

    function a(l, f) {
        let g = f.sdp;
        return Object.keys(l._reverseStreams || []).forEach(b => {
            const v = l._reverseStreams[b],
                y = l._streams[v.id];
            g = g.replace(new RegExp(v.id, "g"), y.id)
        }), new RTCSessionDescription({
            type: f.type,
            sdp: g
        })
    } ["createOffer", "createAnswer"].forEach(function(l) {
        const f = e.RTCPeerConnection.prototype[l],
            g = {
                [l]() {
                    const b = arguments;
                    return arguments.length && typeof arguments[0] == "function" ? f.apply(this, [y => {
                        const C = s(this, y);
                        b[0].apply(null, [C])
                    }, y => {
                        b[1] && b[1].apply(null, y)
                    }, arguments[2]]) : f.apply(this, arguments).then(y => s(this, y))
                }
            };
        e.RTCPeerConnection.prototype[l] = g[l]
    });
    const c = e.RTCPeerConnection.prototype.setLocalDescription;
    e.RTCPeerConnection.prototype.setLocalDescription = function() {
        return !arguments.length || !arguments[0].type ? c.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), c.apply(this, arguments))
    };
    const d = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
        get() {
            const l = d.get.apply(this);
            return l.type === "" ? l : s(this, l)
        }
    }), e.RTCPeerConnection.prototype.removeTrack = function(f) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!f._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        if (!(f._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        this._streams = this._streams || {};
        let b;
        Object.keys(this._streams).forEach(v => {
            this._streams[v].getTracks().find(C => f.track === C) && (b = this._streams[v])
        }), b && (b.getTracks().length === 1 ? this.removeStream(this._reverseStreams[b.id]) : b.removeTrack(f.track), this.dispatchEvent(new Event("negotiationneeded")))
    }
}

function Fo(e, t) {
    !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(n) {
        const o = e.RTCPeerConnection.prototype[n],
            r = {
                [n]() {
                    return arguments[0] = new(n === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), o.apply(this, arguments)
                }
            };
        e.RTCPeerConnection.prototype[n] = r[n]
    })
}

function B3(e, t) {
    fr(e, "negotiationneeded", n => {
        const o = n.target;
        if (!((t.version < 72 || o.getConfiguration && o.getConfiguration().sdpSemantics === "plan-b") && o.signalingState !== "stable")) return n
    })
}
const na = Object.freeze(Object.defineProperty({
    __proto__: null,
    fixNegotiationNeeded: B3,
    shimAddTrackRemoveTrack: T3,
    shimAddTrackRemoveTrackWithNative: S3,
    shimGetDisplayMedia: bp,
    shimGetSendersWithDtmf: w3,
    shimGetStats: k3,
    shimGetUserMedia: y3,
    shimMediaStream: C3,
    shimOnTrack: b3,
    shimPeerConnection: Fo,
    shimSenderReceiverGetStats: P3
}, Symbol.toStringTag, {
    value: "Module"
}));

function wp(e, t) {
    let n = !1;
    return e = JSON.parse(JSON.stringify(e)), e.filter(o => {
        if (o && (o.urls || o.url)) {
            let r = o.urls || o.url;
            o.url && !o.urls && Ln("RTCIceServer.url", "RTCIceServer.urls");
            const s = typeof r == "string";
            return s && (r = [r]), r = r.filter(a => {
                if (a.indexOf("stun:") === 0) return !1;
                const c = a.startsWith("turn") && !a.startsWith("turn:[") && a.includes("transport=udp");
                return c && !n ? (n = !0, !0) : c && !n
            }), delete o.url, o.urls = s ? r[0] : r, !!r.length
        }
    })
}
var Zn = {
        exports: {}
    },
    oa;

function E3() {
    return oa || (oa = 1, function(e) {
        var t = {};
        t.generateIdentifier = function() {
            return Math.random().toString(36).substr(2, 10)
        }, t.localCName = t.generateIdentifier(), t.splitLines = function(n) {
            return n.trim().split(`
`).map(function(o) {
                return o.trim()
            })
        }, t.splitSections = function(n) {
            var o = n.split(`
m=`);
            return o.map(function(r, s) {
                return (s > 0 ? "m=" + r : r).trim() + `\r
`
            })
        }, t.getDescription = function(n) {
            var o = t.splitSections(n);
            return o && o[0]
        }, t.getMediaSections = function(n) {
            var o = t.splitSections(n);
            return o.shift(), o
        }, t.matchPrefix = function(n, o) {
            return t.splitLines(n).filter(function(r) {
                return r.indexOf(o) === 0
            })
        }, t.parseCandidate = function(n) {
            var o;
            n.indexOf("a=candidate:") === 0 ? o = n.substring(12).split(" ") : o = n.substring(10).split(" ");
            for (var r = {
                    foundation: o[0],
                    component: parseInt(o[1], 10),
                    protocol: o[2].toLowerCase(),
                    priority: parseInt(o[3], 10),
                    ip: o[4],
                    address: o[4],
                    port: parseInt(o[5], 10),
                    type: o[7]
                }, s = 8; s < o.length; s += 2) switch (o[s]) {
                case "raddr":
                    r.relatedAddress = o[s + 1];
                    break;
                case "rport":
                    r.relatedPort = parseInt(o[s + 1], 10);
                    break;
                case "tcptype":
                    r.tcpType = o[s + 1];
                    break;
                case "ufrag":
                    r.ufrag = o[s + 1], r.usernameFragment = o[s + 1];
                    break;
                default:
                    r[o[s]] = o[s + 1];
                    break
            }
            return r
        }, t.writeCandidate = function(n) {
            var o = [];
            o.push(n.foundation), o.push(n.component), o.push(n.protocol.toUpperCase()), o.push(n.priority), o.push(n.address || n.ip), o.push(n.port);
            var r = n.type;
            return o.push("typ"), o.push(r), r !== "host" && n.relatedAddress && n.relatedPort && (o.push("raddr"), o.push(n.relatedAddress), o.push("rport"), o.push(n.relatedPort)), n.tcpType && n.protocol.toLowerCase() === "tcp" && (o.push("tcptype"), o.push(n.tcpType)), (n.usernameFragment || n.ufrag) && (o.push("ufrag"), o.push(n.usernameFragment || n.ufrag)), "candidate:" + o.join(" ")
        }, t.parseIceOptions = function(n) {
            return n.substr(14).split(" ")
        }, t.parseRtpMap = function(n) {
            var o = n.substr(9).split(" "),
                r = {
                    payloadType: parseInt(o.shift(), 10)
                };
            return o = o[0].split("/"), r.name = o[0], r.clockRate = parseInt(o[1], 10), r.channels = o.length === 3 ? parseInt(o[2], 10) : 1, r.numChannels = r.channels, r
        }, t.writeRtpMap = function(n) {
            var o = n.payloadType;
            n.preferredPayloadType !== void 0 && (o = n.preferredPayloadType);
            var r = n.channels || n.numChannels || 1;
            return "a=rtpmap:" + o + " " + n.name + "/" + n.clockRate + (r !== 1 ? "/" + r : "") + `\r
`
        }, t.parseExtmap = function(n) {
            var o = n.substr(9).split(" ");
            return {
                id: parseInt(o[0], 10),
                direction: o[0].indexOf("/") > 0 ? o[0].split("/")[1] : "sendrecv",
                uri: o[1]
            }
        }, t.writeExtmap = function(n) {
            return "a=extmap:" + (n.id || n.preferredId) + (n.direction && n.direction !== "sendrecv" ? "/" + n.direction : "") + " " + n.uri + `\r
`
        }, t.parseFmtp = function(n) {
            for (var o = {}, r, s = n.substr(n.indexOf(" ") + 1).split(";"), a = 0; a < s.length; a++) r = s[a].trim().split("="), o[r[0].trim()] = r[1];
            return o
        }, t.writeFmtp = function(n) {
            var o = "",
                r = n.payloadType;
            if (n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType), n.parameters && Object.keys(n.parameters).length) {
                var s = [];
                Object.keys(n.parameters).forEach(function(a) {
                    n.parameters[a] ? s.push(a + "=" + n.parameters[a]) : s.push(a)
                }), o += "a=fmtp:" + r + " " + s.join(";") + `\r
`
            }
            return o
        }, t.parseRtcpFb = function(n) {
            var o = n.substr(n.indexOf(" ") + 1).split(" ");
            return {
                type: o.shift(),
                parameter: o.join(" ")
            }
        }, t.writeRtcpFb = function(n) {
            var o = "",
                r = n.payloadType;
            return n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType), n.rtcpFeedback && n.rtcpFeedback.length && n.rtcpFeedback.forEach(function(s) {
                o += "a=rtcp-fb:" + r + " " + s.type + (s.parameter && s.parameter.length ? " " + s.parameter : "") + `\r
`
            }), o
        }, t.parseSsrcMedia = function(n) {
            var o = n.indexOf(" "),
                r = {
                    ssrc: parseInt(n.substr(7, o - 7), 10)
                },
                s = n.indexOf(":", o);
            return s > -1 ? (r.attribute = n.substr(o + 1, s - o - 1), r.value = n.substr(s + 1)) : r.attribute = n.substr(o + 1), r
        }, t.parseSsrcGroup = function(n) {
            var o = n.substr(13).split(" ");
            return {
                semantics: o.shift(),
                ssrcs: o.map(function(r) {
                    return parseInt(r, 10)
                })
            }
        }, t.getMid = function(n) {
            var o = t.matchPrefix(n, "a=mid:")[0];
            if (o) return o.substr(6)
        }, t.parseFingerprint = function(n) {
            var o = n.substr(14).split(" ");
            return {
                algorithm: o[0].toLowerCase(),
                value: o[1]
            }
        }, t.getDtlsParameters = function(n, o) {
            var r = t.matchPrefix(n + o, "a=fingerprint:");
            return {
                role: "auto",
                fingerprints: r.map(t.parseFingerprint)
            }
        }, t.writeDtlsParameters = function(n, o) {
            var r = "a=setup:" + o + `\r
`;
            return n.fingerprints.forEach(function(s) {
                r += "a=fingerprint:" + s.algorithm + " " + s.value + `\r
`
            }), r
        }, t.parseCryptoLine = function(n) {
            var o = n.substr(9).split(" ");
            return {
                tag: parseInt(o[0], 10),
                cryptoSuite: o[1],
                keyParams: o[2],
                sessionParams: o.slice(3)
            }
        }, t.writeCryptoLine = function(n) {
            return "a=crypto:" + n.tag + " " + n.cryptoSuite + " " + (typeof n.keyParams == "object" ? t.writeCryptoKeyParams(n.keyParams) : n.keyParams) + (n.sessionParams ? " " + n.sessionParams.join(" ") : "") + `\r
`
        }, t.parseCryptoKeyParams = function(n) {
            if (n.indexOf("inline:") !== 0) return null;
            var o = n.substr(7).split("|");
            return {
                keyMethod: "inline",
                keySalt: o[0],
                lifeTime: o[1],
                mkiValue: o[2] ? o[2].split(":")[0] : void 0,
                mkiLength: o[2] ? o[2].split(":")[1] : void 0
            }
        }, t.writeCryptoKeyParams = function(n) {
            return n.keyMethod + ":" + n.keySalt + (n.lifeTime ? "|" + n.lifeTime : "") + (n.mkiValue && n.mkiLength ? "|" + n.mkiValue + ":" + n.mkiLength : "")
        }, t.getCryptoParameters = function(n, o) {
            var r = t.matchPrefix(n + o, "a=crypto:");
            return r.map(t.parseCryptoLine)
        }, t.getIceParameters = function(n, o) {
            var r = t.matchPrefix(n + o, "a=ice-ufrag:")[0],
                s = t.matchPrefix(n + o, "a=ice-pwd:")[0];
            return r && s ? {
                usernameFragment: r.substr(12),
                password: s.substr(10)
            } : null
        }, t.writeIceParameters = function(n) {
            return "a=ice-ufrag:" + n.usernameFragment + `\r
a=ice-pwd:` + n.password + `\r
`
        }, t.parseRtpParameters = function(n) {
            for (var o = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                }, r = t.splitLines(n), s = r[0].split(" "), a = 3; a < s.length; a++) {
                var c = s[a],
                    d = t.matchPrefix(n, "a=rtpmap:" + c + " ")[0];
                if (d) {
                    var l = t.parseRtpMap(d),
                        f = t.matchPrefix(n, "a=fmtp:" + c + " ");
                    switch (l.parameters = f.length ? t.parseFmtp(f[0]) : {}, l.rtcpFeedback = t.matchPrefix(n, "a=rtcp-fb:" + c + " ").map(t.parseRtcpFb), o.codecs.push(l), l.name.toUpperCase()) {
                        case "RED":
                        case "ULPFEC":
                            o.fecMechanisms.push(l.name.toUpperCase());
                            break
                    }
                }
            }
            return t.matchPrefix(n, "a=extmap:").forEach(function(g) {
                o.headerExtensions.push(t.parseExtmap(g))
            }), o
        }, t.writeRtpDescription = function(n, o) {
            var r = "";
            r += "m=" + n + " ", r += o.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += o.codecs.map(function(a) {
                return a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType
            }).join(" ") + `\r
`, r += `c=IN IP4 0.0.0.0\r
`, r += `a=rtcp:9 IN IP4 0.0.0.0\r
`, o.codecs.forEach(function(a) {
                r += t.writeRtpMap(a), r += t.writeFmtp(a), r += t.writeRtcpFb(a)
            });
            var s = 0;
            return o.codecs.forEach(function(a) {
                a.maxptime > s && (s = a.maxptime)
            }), s > 0 && (r += "a=maxptime:" + s + `\r
`), r += `a=rtcp-mux\r
`, o.headerExtensions && o.headerExtensions.forEach(function(a) {
                r += t.writeExtmap(a)
            }), r
        }, t.parseRtpEncodingParameters = function(n) {
            var o = [],
                r = t.parseRtpParameters(n),
                s = r.fecMechanisms.indexOf("RED") !== -1,
                a = r.fecMechanisms.indexOf("ULPFEC") !== -1,
                c = t.matchPrefix(n, "a=ssrc:").map(function(b) {
                    return t.parseSsrcMedia(b)
                }).filter(function(b) {
                    return b.attribute === "cname"
                }),
                d = c.length > 0 && c[0].ssrc,
                l, f = t.matchPrefix(n, "a=ssrc-group:FID").map(function(b) {
                    var v = b.substr(17).split(" ");
                    return v.map(function(y) {
                        return parseInt(y, 10)
                    })
                });
            f.length > 0 && f[0].length > 1 && f[0][0] === d && (l = f[0][1]), r.codecs.forEach(function(b) {
                if (b.name.toUpperCase() === "RTX" && b.parameters.apt) {
                    var v = {
                        ssrc: d,
                        codecPayloadType: parseInt(b.parameters.apt, 10)
                    };
                    d && l && (v.rtx = {
                        ssrc: l
                    }), o.push(v), s && (v = JSON.parse(JSON.stringify(v)), v.fec = {
                        ssrc: d,
                        mechanism: a ? "red+ulpfec" : "red"
                    }, o.push(v))
                }
            }), o.length === 0 && d && o.push({
                ssrc: d
            });
            var g = t.matchPrefix(n, "b=");
            return g.length && (g[0].indexOf("b=TIAS:") === 0 ? g = parseInt(g[0].substr(7), 10) : g[0].indexOf("b=AS:") === 0 ? g = parseInt(g[0].substr(5), 10) * 1e3 * .95 - 2e3 * 8 : g = void 0, o.forEach(function(b) {
                b.maxBitrate = g
            })), o
        }, t.parseRtcpParameters = function(n) {
            var o = {},
                r = t.matchPrefix(n, "a=ssrc:").map(function(c) {
                    return t.parseSsrcMedia(c)
                }).filter(function(c) {
                    return c.attribute === "cname"
                })[0];
            r && (o.cname = r.value, o.ssrc = r.ssrc);
            var s = t.matchPrefix(n, "a=rtcp-rsize");
            o.reducedSize = s.length > 0, o.compound = s.length === 0;
            var a = t.matchPrefix(n, "a=rtcp-mux");
            return o.mux = a.length > 0, o
        }, t.parseMsid = function(n) {
            var o, r = t.matchPrefix(n, "a=msid:");
            if (r.length === 1) return o = r[0].substr(7).split(" "), {
                stream: o[0],
                track: o[1]
            };
            var s = t.matchPrefix(n, "a=ssrc:").map(function(a) {
                return t.parseSsrcMedia(a)
            }).filter(function(a) {
                return a.attribute === "msid"
            });
            if (s.length > 0) return o = s[0].value.split(" "), {
                stream: o[0],
                track: o[1]
            }
        }, t.parseSctpDescription = function(n) {
            var o = t.parseMLine(n),
                r = t.matchPrefix(n, "a=max-message-size:"),
                s;
            r.length > 0 && (s = parseInt(r[0].substr(19), 10)), isNaN(s) && (s = 65536);
            var a = t.matchPrefix(n, "a=sctp-port:");
            if (a.length > 0) return {
                port: parseInt(a[0].substr(12), 10),
                protocol: o.fmt,
                maxMessageSize: s
            };
            var c = t.matchPrefix(n, "a=sctpmap:");
            if (c.length > 0) {
                var d = t.matchPrefix(n, "a=sctpmap:")[0].substr(10).split(" ");
                return {
                    port: parseInt(d[0], 10),
                    protocol: d[1],
                    maxMessageSize: s
                }
            }
        }, t.writeSctpDescription = function(n, o) {
            var r = [];
            return n.protocol !== "DTLS/SCTP" ? r = ["m=" + n.kind + " 9 " + n.protocol + " " + o.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + o.port + `\r
`] : r = ["m=" + n.kind + " 9 " + n.protocol + " " + o.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + o.port + " " + o.protocol + ` 65535\r
`], o.maxMessageSize !== void 0 && r.push("a=max-message-size:" + o.maxMessageSize + `\r
`), r.join("")
        }, t.generateSessionId = function() {
            return Math.random().toString().substr(2, 21)
        }, t.writeSessionBoilerplate = function(n, o, r) {
            var s, a = o !== void 0 ? o : 2;
            n ? s = n : s = t.generateSessionId();
            var c = r || "thisisadapterortc";
            return `v=0\r
o=` + c + " " + s + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
        }, t.writeMediaSection = function(n, o, r, s) {
            var a = t.writeRtpDescription(n.kind, o);
            if (a += t.writeIceParameters(n.iceGatherer.getLocalParameters()), a += t.writeDtlsParameters(n.dtlsTransport.getLocalParameters(), r === "offer" ? "actpass" : "active"), a += "a=mid:" + n.mid + `\r
`, n.direction ? a += "a=" + n.direction + `\r
` : n.rtpSender && n.rtpReceiver ? a += `a=sendrecv\r
` : n.rtpSender ? a += `a=sendonly\r
` : n.rtpReceiver ? a += `a=recvonly\r
` : a += `a=inactive\r
`, n.rtpSender) {
                var c = "msid:" + s.id + " " + n.rtpSender.track.id + `\r
`;
                a += "a=" + c, a += "a=ssrc:" + n.sendEncodingParameters[0].ssrc + " " + c, n.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + n.sendEncodingParameters[0].rtx.ssrc + " " + c, a += "a=ssrc-group:FID " + n.sendEncodingParameters[0].ssrc + " " + n.sendEncodingParameters[0].rtx.ssrc + `\r
`)
            }
            return a += "a=ssrc:" + n.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + `\r
`, n.rtpSender && n.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + n.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + `\r
`), a
        }, t.getDirection = function(n, o) {
            for (var r = t.splitLines(n), s = 0; s < r.length; s++) switch (r[s]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                    return r[s].substr(2)
            }
            return o ? t.getDirection(o) : "sendrecv"
        }, t.getKind = function(n) {
            var o = t.splitLines(n),
                r = o[0].split(" ");
            return r[0].substr(2)
        }, t.isRejected = function(n) {
            return n.split(" ", 2)[1] === "0"
        }, t.parseMLine = function(n) {
            var o = t.splitLines(n),
                r = o[0].substr(2).split(" ");
            return {
                kind: r[0],
                port: parseInt(r[1], 10),
                protocol: r[2],
                fmt: r.slice(3).join(" ")
            }
        }, t.parseOLine = function(n) {
            var o = t.matchPrefix(n, "o=")[0],
                r = o.substr(2).split(" ");
            return {
                username: r[0],
                sessionId: r[1],
                sessionVersion: parseInt(r[2], 10),
                netType: r[3],
                addressType: r[4],
                address: r[5]
            }
        }, t.isValidSDP = function(n) {
            if (typeof n != "string" || n.length === 0) return !1;
            for (var o = t.splitLines(n), r = 0; r < o.length; r++)
                if (o[r].length < 2 || o[r].charAt(1) !== "=") return !1;
            return !0
        }, e.exports = t
    }(Zn)), Zn.exports
}
var eo, sa;

function kp() {
    if (sa) return eo;
    sa = 1;
    var e = E3();

    function t(d) {
        return {
            inboundrtp: "inbound-rtp",
            outboundrtp: "outbound-rtp",
            candidatepair: "candidate-pair",
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
        } [d.type] || d.type
    }

    function n(d, l, f, g, b) {
        var v = e.writeRtpDescription(d.kind, l);
        if (v += e.writeIceParameters(d.iceGatherer.getLocalParameters()), v += e.writeDtlsParameters(d.dtlsTransport.getLocalParameters(), f === "offer" ? "actpass" : b || "active"), v += "a=mid:" + d.mid + `\r
`, d.rtpSender && d.rtpReceiver ? v += `a=sendrecv\r
` : d.rtpSender ? v += `a=sendonly\r
` : d.rtpReceiver ? v += `a=recvonly\r
` : v += `a=inactive\r
`, d.rtpSender) {
            var y = d.rtpSender._initialTrackId || d.rtpSender.track.id;
            d.rtpSender._initialTrackId = y;
            var C = "msid:" + (g ? g.id : "-") + " " + y + `\r
`;
            v += "a=" + C, v += "a=ssrc:" + d.sendEncodingParameters[0].ssrc + " " + C, d.sendEncodingParameters[0].rtx && (v += "a=ssrc:" + d.sendEncodingParameters[0].rtx.ssrc + " " + C, v += "a=ssrc-group:FID " + d.sendEncodingParameters[0].ssrc + " " + d.sendEncodingParameters[0].rtx.ssrc + `\r
`)
        }
        return v += "a=ssrc:" + d.sendEncodingParameters[0].ssrc + " cname:" + e.localCName + `\r
`, d.rtpSender && d.sendEncodingParameters[0].rtx && (v += "a=ssrc:" + d.sendEncodingParameters[0].rtx.ssrc + " cname:" + e.localCName + `\r
`), v
    }

    function o(d, l) {
        var f = !1;
        return d = JSON.parse(JSON.stringify(d)), d.filter(function(g) {
            if (g && (g.urls || g.url)) {
                var b = g.urls || g.url;
                g.url && !g.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                var v = typeof b == "string";
                return v && (b = [b]), b = b.filter(function(y) {
                    var C = y.indexOf("turn:") === 0 && y.indexOf("transport=udp") !== -1 && y.indexOf("turn:[") === -1 && !f;
                    return C ? (f = !0, !0) : y.indexOf("stun:") === 0 && l >= 14393 && y.indexOf("?transport=udp") === -1
                }), delete g.url, g.urls = v ? b[0] : b, !!b.length
            }
        })
    }

    function r(d, l) {
        var f = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            g = function(v, y) {
                v = parseInt(v, 10);
                for (var C = 0; C < y.length; C++)
                    if (y[C].payloadType === v || y[C].preferredPayloadType === v) return y[C]
            },
            b = function(v, y, C, p) {
                var u = g(v.parameters.apt, C),
                    m = g(y.parameters.apt, p);
                return u && m && u.name.toLowerCase() === m.name.toLowerCase()
            };
        return d.codecs.forEach(function(v) {
            for (var y = 0; y < l.codecs.length; y++) {
                var C = l.codecs[y];
                if (v.name.toLowerCase() === C.name.toLowerCase() && v.clockRate === C.clockRate) {
                    if (v.name.toLowerCase() === "rtx" && v.parameters && C.parameters.apt && !b(v, C, d.codecs, l.codecs)) continue;
                    C = JSON.parse(JSON.stringify(C)), C.numChannels = Math.min(v.numChannels, C.numChannels), f.codecs.push(C), C.rtcpFeedback = C.rtcpFeedback.filter(function(p) {
                        for (var u = 0; u < v.rtcpFeedback.length; u++)
                            if (v.rtcpFeedback[u].type === p.type && v.rtcpFeedback[u].parameter === p.parameter) return !0;
                        return !1
                    });
                    break
                }
            }
        }), d.headerExtensions.forEach(function(v) {
            for (var y = 0; y < l.headerExtensions.length; y++) {
                var C = l.headerExtensions[y];
                if (v.uri === C.uri) {
                    f.headerExtensions.push(C);
                    break
                }
            }
        }), f
    }

    function s(d, l, f) {
        return {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        } [l][d].indexOf(f) !== -1
    }

    function a(d, l) {
        var f = d.getRemoteCandidates().find(function(g) {
            return l.foundation === g.foundation && l.ip === g.ip && l.port === g.port && l.priority === g.priority && l.protocol === g.protocol && l.type === g.type
        });
        return f || d.addRemoteCandidate(l), !f
    }

    function c(d, l) {
        var f = new Error(l);
        return f.name = d, f.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        } [d], f
    }
    return eo = function(d, l) {
        function f(p, u) {
            u.addTrack(p), u.dispatchEvent(new d.MediaStreamTrackEvent("addtrack", {
                track: p
            }))
        }

        function g(p, u) {
            u.removeTrack(p), u.dispatchEvent(new d.MediaStreamTrackEvent("removetrack", {
                track: p
            }))
        }

        function b(p, u, m, h) {
            var x = new Event("track");
            x.track = u, x.receiver = m, x.transceiver = {
                receiver: m
            }, x.streams = h, d.setTimeout(function() {
                p._dispatchEvent("track", x)
            })
        }
        var v = function(p) {
            var u = this,
                m = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(x) {
                    u[x] = m[x].bind(m)
                }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", p = JSON.parse(JSON.stringify(p || {})), this.usingBundle = p.bundlePolicy === "max-bundle", p.rtcpMuxPolicy === "negotiate") throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
            switch (p.rtcpMuxPolicy || (p.rtcpMuxPolicy = "require"), p.iceTransportPolicy) {
                case "all":
                case "relay":
                    break;
                default:
                    p.iceTransportPolicy = "all";
                    break
            }
            switch (p.bundlePolicy) {
                case "balanced":
                case "max-compat":
                case "max-bundle":
                    break;
                default:
                    p.bundlePolicy = "balanced";
                    break
            }
            if (p.iceServers = o(p.iceServers || [], l), this._iceGatherers = [], p.iceCandidatePoolSize)
                for (var h = p.iceCandidatePoolSize; h > 0; h--) this._iceGatherers.push(new d.RTCIceGatherer({
                    iceServers: p.iceServers,
                    gatherPolicy: p.iceTransportPolicy
                }));
            else p.iceCandidatePoolSize = 0;
            this._config = p, this.transceivers = [], this._sdpSessionId = e.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
        };
        Object.defineProperty(v.prototype, "localDescription", {
            configurable: !0,
            get: function() {
                return this._localDescription
            }
        }), Object.defineProperty(v.prototype, "remoteDescription", {
            configurable: !0,
            get: function() {
                return this._remoteDescription
            }
        }), v.prototype.onicecandidate = null, v.prototype.onaddstream = null, v.prototype.ontrack = null, v.prototype.onremovestream = null, v.prototype.onsignalingstatechange = null, v.prototype.oniceconnectionstatechange = null, v.prototype.onconnectionstatechange = null, v.prototype.onicegatheringstatechange = null, v.prototype.onnegotiationneeded = null, v.prototype.ondatachannel = null, v.prototype._dispatchEvent = function(p, u) {
            this._isClosed || (this.dispatchEvent(u), typeof this["on" + p] == "function" && this["on" + p](u))
        }, v.prototype._emitGatheringStateChange = function() {
            var p = new Event("icegatheringstatechange");
            this._dispatchEvent("icegatheringstatechange", p)
        }, v.prototype.getConfiguration = function() {
            return this._config
        }, v.prototype.getLocalStreams = function() {
            return this.localStreams
        }, v.prototype.getRemoteStreams = function() {
            return this.remoteStreams
        }, v.prototype._createTransceiver = function(p, u) {
            var m = this.transceivers.length > 0,
                h = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: p,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && m) h.iceTransport = this.transceivers[0].iceTransport, h.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var x = this._createIceAndDtlsTransports();
                h.iceTransport = x.iceTransport, h.dtlsTransport = x.dtlsTransport
            }
            return u || this.transceivers.push(h), h
        }, v.prototype.addTrack = function(p, u) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var m = this.transceivers.find(function(S) {
                return S.track === p
            });
            if (m) throw c("InvalidAccessError", "Track already exists.");
            for (var h, x = 0; x < this.transceivers.length; x++) !this.transceivers[x].track && this.transceivers[x].kind === p.kind && (h = this.transceivers[x]);
            return h || (h = this._createTransceiver(p.kind)), this._maybeFireNegotiationNeeded(), this.localStreams.indexOf(u) === -1 && this.localStreams.push(u), h.track = p, h.stream = u, h.rtpSender = new d.RTCRtpSender(p, h.dtlsTransport), h.rtpSender
        }, v.prototype.addStream = function(p) {
            var u = this;
            if (l >= 15025) p.getTracks().forEach(function(h) {
                u.addTrack(h, p)
            });
            else {
                var m = p.clone();
                p.getTracks().forEach(function(h, x) {
                    var S = m.getTracks()[x];
                    h.addEventListener("enabled", function(P) {
                        S.enabled = P.enabled
                    })
                }), m.getTracks().forEach(function(h) {
                    u.addTrack(h, m)
                })
            }
        }, v.prototype.removeTrack = function(p) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(p instanceof d.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var u = this.transceivers.find(function(x) {
                return x.rtpSender === p
            });
            if (!u) throw c("InvalidAccessError", "Sender was not created by this connection.");
            var m = u.stream;
            u.rtpSender.stop(), u.rtpSender = null, u.track = null, u.stream = null;
            var h = this.transceivers.map(function(x) {
                return x.stream
            });
            h.indexOf(m) === -1 && this.localStreams.indexOf(m) > -1 && this.localStreams.splice(this.localStreams.indexOf(m), 1), this._maybeFireNegotiationNeeded()
        }, v.prototype.removeStream = function(p) {
            var u = this;
            p.getTracks().forEach(function(m) {
                var h = u.getSenders().find(function(x) {
                    return x.track === m
                });
                h && u.removeTrack(h)
            })
        }, v.prototype.getSenders = function() {
            return this.transceivers.filter(function(p) {
                return !!p.rtpSender
            }).map(function(p) {
                return p.rtpSender
            })
        }, v.prototype.getReceivers = function() {
            return this.transceivers.filter(function(p) {
                return !!p.rtpReceiver
            }).map(function(p) {
                return p.rtpReceiver
            })
        }, v.prototype._createIceGatherer = function(p, u) {
            var m = this;
            if (u && p > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var h = new d.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(h, "state", {
                value: "new",
                writable: !0
            }), this.transceivers[p].bufferedCandidateEvents = [], this.transceivers[p].bufferCandidates = function(x) {
                var S = !x.candidate || Object.keys(x.candidate).length === 0;
                h.state = S ? "completed" : "gathering", m.transceivers[p].bufferedCandidateEvents !== null && m.transceivers[p].bufferedCandidateEvents.push(x)
            }, h.addEventListener("localcandidate", this.transceivers[p].bufferCandidates), h
        }, v.prototype._gather = function(p, u) {
            var m = this,
                h = this.transceivers[u].iceGatherer;
            if (!h.onlocalcandidate) {
                var x = this.transceivers[u].bufferedCandidateEvents;
                this.transceivers[u].bufferedCandidateEvents = null, h.removeEventListener("localcandidate", this.transceivers[u].bufferCandidates), h.onlocalcandidate = function(S) {
                    if (!(m.usingBundle && u > 0)) {
                        var P = new Event("icecandidate");
                        P.candidate = {
                            sdpMid: p,
                            sdpMLineIndex: u
                        };
                        var B = S.candidate,
                            _ = !B || Object.keys(B).length === 0;
                        if (_)(h.state === "new" || h.state === "gathering") && (h.state = "completed");
                        else {
                            h.state === "new" && (h.state = "gathering"), B.component = 1, B.ufrag = h.getLocalParameters().usernameFragment;
                            var R = e.writeCandidate(B);
                            P.candidate = Object.assign(P.candidate, e.parseCandidate(R)), P.candidate.candidate = R, P.candidate.toJSON = function() {
                                return {
                                    candidate: P.candidate.candidate,
                                    sdpMid: P.candidate.sdpMid,
                                    sdpMLineIndex: P.candidate.sdpMLineIndex,
                                    usernameFragment: P.candidate.usernameFragment
                                }
                            }
                        }
                        var O = e.getMediaSections(m._localDescription.sdp);
                        _ ? O[P.candidate.sdpMLineIndex] += `a=end-of-candidates\r
` : O[P.candidate.sdpMLineIndex] += "a=" + P.candidate.candidate + `\r
`, m._localDescription.sdp = e.getDescription(m._localDescription.sdp) + O.join("");
                        var A = m.transceivers.every(function(I) {
                            return I.iceGatherer && I.iceGatherer.state === "completed"
                        });
                        m.iceGatheringState !== "gathering" && (m.iceGatheringState = "gathering", m._emitGatheringStateChange()), _ || m._dispatchEvent("icecandidate", P), A && (m._dispatchEvent("icecandidate", new Event("icecandidate")), m.iceGatheringState = "complete", m._emitGatheringStateChange())
                    }
                }, d.setTimeout(function() {
                    x.forEach(function(S) {
                        h.onlocalcandidate(S)
                    })
                }, 0)
            }
        }, v.prototype._createIceAndDtlsTransports = function() {
            var p = this,
                u = new d.RTCIceTransport(null);
            u.onicestatechange = function() {
                p._updateIceConnectionState(), p._updateConnectionState()
            };
            var m = new d.RTCDtlsTransport(u);
            return m.ondtlsstatechange = function() {
                p._updateConnectionState()
            }, m.onerror = function() {
                Object.defineProperty(m, "state", {
                    value: "failed",
                    writable: !0
                }), p._updateConnectionState()
            }, {
                iceTransport: u,
                dtlsTransport: m
            }
        }, v.prototype._disposeIceAndDtlsTransports = function(p) {
            var u = this.transceivers[p].iceGatherer;
            u && (delete u.onlocalcandidate, delete this.transceivers[p].iceGatherer);
            var m = this.transceivers[p].iceTransport;
            m && (delete m.onicestatechange, delete this.transceivers[p].iceTransport);
            var h = this.transceivers[p].dtlsTransport;
            h && (delete h.ondtlsstatechange, delete h.onerror, delete this.transceivers[p].dtlsTransport)
        }, v.prototype._transceive = function(p, u, m) {
            var h = r(p.localCapabilities, p.remoteCapabilities);
            u && p.rtpSender && (h.encodings = p.sendEncodingParameters, h.rtcp = {
                cname: e.localCName,
                compound: p.rtcpParameters.compound
            }, p.recvEncodingParameters.length && (h.rtcp.ssrc = p.recvEncodingParameters[0].ssrc), p.rtpSender.send(h)), m && p.rtpReceiver && h.codecs.length > 0 && (p.kind === "video" && p.recvEncodingParameters && l < 15019 && p.recvEncodingParameters.forEach(function(x) {
                delete x.rtx
            }), p.recvEncodingParameters.length ? h.encodings = p.recvEncodingParameters : h.encodings = [{}], h.rtcp = {
                compound: p.rtcpParameters.compound
            }, p.rtcpParameters.cname && (h.rtcp.cname = p.rtcpParameters.cname), p.sendEncodingParameters.length && (h.rtcp.ssrc = p.sendEncodingParameters[0].ssrc), p.rtpReceiver.receive(h))
        }, v.prototype.setLocalDescription = function(p) {
            var u = this;
            if (["offer", "answer"].indexOf(p.type) === -1) return Promise.reject(c("TypeError", 'Unsupported type "' + p.type + '"'));
            if (!s("setLocalDescription", p.type, u.signalingState) || u._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + p.type + " in state " + u.signalingState));
            var m, h;
            if (p.type === "offer") m = e.splitSections(p.sdp), h = m.shift(), m.forEach(function(S, P) {
                var B = e.parseRtpParameters(S);
                u.transceivers[P].localCapabilities = B
            }), u.transceivers.forEach(function(S, P) {
                u._gather(S.mid, P)
            });
            else if (p.type === "answer") {
                m = e.splitSections(u._remoteDescription.sdp), h = m.shift();
                var x = e.matchPrefix(h, "a=ice-lite").length > 0;
                m.forEach(function(S, P) {
                    var B = u.transceivers[P],
                        _ = B.iceGatherer,
                        R = B.iceTransport,
                        O = B.dtlsTransport,
                        A = B.localCapabilities,
                        I = B.remoteCapabilities,
                        j = e.isRejected(S) && e.matchPrefix(S, "a=bundle-only").length === 0;
                    if (!j && !B.rejected) {
                        var U = e.getIceParameters(S, h),
                            z = e.getDtlsParameters(S, h);
                        x && (z.role = "server"), (!u.usingBundle || P === 0) && (u._gather(B.mid, P), R.state === "new" && R.start(_, U, x ? "controlling" : "controlled"), O.state === "new" && O.start(z));
                        var N = r(A, I);
                        u._transceive(B, N.codecs.length > 0, !1)
                    }
                })
            }
            return u._localDescription = {
                type: p.type,
                sdp: p.sdp
            }, p.type === "offer" ? u._updateSignalingState("have-local-offer") : u._updateSignalingState("stable"), Promise.resolve()
        }, v.prototype.setRemoteDescription = function(p) {
            var u = this;
            if (["offer", "answer"].indexOf(p.type) === -1) return Promise.reject(c("TypeError", 'Unsupported type "' + p.type + '"'));
            if (!s("setRemoteDescription", p.type, u.signalingState) || u._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + p.type + " in state " + u.signalingState));
            var m = {};
            u.remoteStreams.forEach(function(R) {
                m[R.id] = R
            });
            var h = [],
                x = e.splitSections(p.sdp),
                S = x.shift(),
                P = e.matchPrefix(S, "a=ice-lite").length > 0,
                B = e.matchPrefix(S, "a=group:BUNDLE ").length > 0;
            u.usingBundle = B;
            var _ = e.matchPrefix(S, "a=ice-options:")[0];
            return _ ? u.canTrickleIceCandidates = _.substr(14).split(" ").indexOf("trickle") >= 0 : u.canTrickleIceCandidates = !1, x.forEach(function(R, O) {
                var A = e.splitLines(R),
                    I = e.getKind(R),
                    j = e.isRejected(R) && e.matchPrefix(R, "a=bundle-only").length === 0,
                    U = A[0].substr(2).split(" ")[2],
                    z = e.getDirection(R, S),
                    N = e.parseMsid(R),
                    q = e.getMid(R) || e.generateIdentifier();
                if (j || I === "application" && (U === "DTLS/SCTP" || U === "UDP/DTLS/SCTP")) {
                    u.transceivers[O] = {
                        mid: q,
                        kind: I,
                        protocol: U,
                        rejected: !0
                    };
                    return
                }!j && u.transceivers[O] && u.transceivers[O].rejected && (u.transceivers[O] = u._createTransceiver(I, !0));
                var W, he, te, ae, G, at, mt, De, we, gt = e.parseRtpParameters(R),
                    Vt, Pt;
                j || (Vt = e.getIceParameters(R, S), Pt = e.getDtlsParameters(R, S), Pt.role = "client"), mt = e.parseRtpEncodingParameters(R);
                var hr = e.parseRtcpParameters(R),
                    Dt = e.matchPrefix(R, "a=end-of-candidates", S).length > 0,
                    vt = e.matchPrefix(R, "a=candidate:").map(function(Pe) {
                        return e.parseCandidate(Pe)
                    }).filter(function(Pe) {
                        return Pe.component === 1
                    });
                if ((p.type === "offer" || p.type === "answer") && !j && B && O > 0 && u.transceivers[O] && (u._disposeIceAndDtlsTransports(O), u.transceivers[O].iceGatherer = u.transceivers[0].iceGatherer, u.transceivers[O].iceTransport = u.transceivers[0].iceTransport, u.transceivers[O].dtlsTransport = u.transceivers[0].dtlsTransport, u.transceivers[O].rtpSender && u.transceivers[O].rtpSender.setTransport(u.transceivers[0].dtlsTransport), u.transceivers[O].rtpReceiver && u.transceivers[O].rtpReceiver.setTransport(u.transceivers[0].dtlsTransport)), p.type === "offer" && !j) {
                    W = u.transceivers[O] || u._createTransceiver(I), W.mid = q, W.iceGatherer || (W.iceGatherer = u._createIceGatherer(O, B)), vt.length && W.iceTransport.state === "new" && (Dt && (!B || O === 0) ? W.iceTransport.setRemoteCandidates(vt) : vt.forEach(function(Pe) {
                        a(W.iceTransport, Pe)
                    })), De = d.RTCRtpReceiver.getCapabilities(I), l < 15019 && (De.codecs = De.codecs.filter(function(Pe) {
                        return Pe.name !== "rtx"
                    })), at = W.sendEncodingParameters || [{
                        ssrc: (2 * O + 2) * 1001
                    }];
                    var Qt = !1;
                    if (z === "sendrecv" || z === "sendonly") {
                        if (Qt = !W.rtpReceiver, G = W.rtpReceiver || new d.RTCRtpReceiver(W.dtlsTransport, I), Qt) {
                            var ct;
                            we = G.track, N && N.stream === "-" || (N ? (m[N.stream] || (m[N.stream] = new d.MediaStream, Object.defineProperty(m[N.stream], "id", {
                                get: function() {
                                    return N.stream
                                }
                            })), Object.defineProperty(we, "id", {
                                get: function() {
                                    return N.track
                                }
                            }), ct = m[N.stream]) : (m.default || (m.default = new d.MediaStream), ct = m.default)), ct && (f(we, ct), W.associatedRemoteMediaStreams.push(ct)), h.push([we, G, ct])
                        }
                    } else W.rtpReceiver && W.rtpReceiver.track && (W.associatedRemoteMediaStreams.forEach(function(Pe) {
                        var Vr = Pe.getTracks().find(function(zn) {
                            return zn.id === W.rtpReceiver.track.id
                        });
                        Vr && g(Vr, Pe)
                    }), W.associatedRemoteMediaStreams = []);
                    W.localCapabilities = De, W.remoteCapabilities = gt, W.rtpReceiver = G, W.rtcpParameters = hr, W.sendEncodingParameters = at, W.recvEncodingParameters = mt, u._transceive(u.transceivers[O], !1, Qt)
                } else if (p.type === "answer" && !j) {
                    W = u.transceivers[O], he = W.iceGatherer, te = W.iceTransport, ae = W.dtlsTransport, G = W.rtpReceiver, at = W.sendEncodingParameters, De = W.localCapabilities, u.transceivers[O].recvEncodingParameters = mt, u.transceivers[O].remoteCapabilities = gt, u.transceivers[O].rtcpParameters = hr, vt.length && te.state === "new" && ((P || Dt) && (!B || O === 0) ? te.setRemoteCandidates(vt) : vt.forEach(function(Pe) {
                        a(W.iceTransport, Pe)
                    })), (!B || O === 0) && (te.state === "new" && te.start(he, Vt, "controlling"), ae.state === "new" && ae.start(Pt));
                    var An = r(W.localCapabilities, W.remoteCapabilities),
                        It = An.codecs.filter(function(Pe) {
                            return Pe.name.toLowerCase() === "rtx"
                        }).length;
                    !It && W.sendEncodingParameters[0].rtx && delete W.sendEncodingParameters[0].rtx, u._transceive(W, z === "sendrecv" || z === "recvonly", z === "sendrecv" || z === "sendonly"), G && (z === "sendrecv" || z === "sendonly") ? (we = G.track, N ? (m[N.stream] || (m[N.stream] = new d.MediaStream), f(we, m[N.stream]), h.push([we, G, m[N.stream]])) : (m.default || (m.default = new d.MediaStream), f(we, m.default), h.push([we, G, m.default]))) : delete W.rtpReceiver
                }
            }), u._dtlsRole === void 0 && (u._dtlsRole = p.type === "offer" ? "active" : "passive"), u._remoteDescription = {
                type: p.type,
                sdp: p.sdp
            }, p.type === "offer" ? u._updateSignalingState("have-remote-offer") : u._updateSignalingState("stable"), Object.keys(m).forEach(function(R) {
                var O = m[R];
                if (O.getTracks().length) {
                    if (u.remoteStreams.indexOf(O) === -1) {
                        u.remoteStreams.push(O);
                        var A = new Event("addstream");
                        A.stream = O, d.setTimeout(function() {
                            u._dispatchEvent("addstream", A)
                        })
                    }
                    h.forEach(function(I) {
                        var j = I[0],
                            U = I[1];
                        O.id === I[2].id && b(u, j, U, [O])
                    })
                }
            }), h.forEach(function(R) {
                R[2] || b(u, R[0], R[1], [])
            }), d.setTimeout(function() {
                u && u.transceivers && u.transceivers.forEach(function(R) {
                    R.iceTransport && R.iceTransport.state === "new" && R.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), R.iceTransport.addRemoteCandidate({}))
                })
            }, 4e3), Promise.resolve()
        }, v.prototype.close = function() {
            this.transceivers.forEach(function(p) {
                p.iceTransport && p.iceTransport.stop(), p.dtlsTransport && p.dtlsTransport.stop(), p.rtpSender && p.rtpSender.stop(), p.rtpReceiver && p.rtpReceiver.stop()
            }), this._isClosed = !0, this._updateSignalingState("closed")
        }, v.prototype._updateSignalingState = function(p) {
            this.signalingState = p;
            var u = new Event("signalingstatechange");
            this._dispatchEvent("signalingstatechange", u)
        }, v.prototype._maybeFireNegotiationNeeded = function() {
            var p = this;
            this.signalingState !== "stable" || this.needNegotiation === !0 || (this.needNegotiation = !0, d.setTimeout(function() {
                if (p.needNegotiation) {
                    p.needNegotiation = !1;
                    var u = new Event("negotiationneeded");
                    p._dispatchEvent("negotiationneeded", u)
                }
            }, 0))
        }, v.prototype._updateIceConnectionState = function() {
            var p, u = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(h) {
                    h.iceTransport && !h.rejected && u[h.iceTransport.state]++
                }), p = "new", u.failed > 0 ? p = "failed" : u.checking > 0 ? p = "checking" : u.disconnected > 0 ? p = "disconnected" : u.new > 0 ? p = "new" : u.connected > 0 ? p = "connected" : u.completed > 0 && (p = "completed"), p !== this.iceConnectionState) {
                this.iceConnectionState = p;
                var m = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", m)
            }
        }, v.prototype._updateConnectionState = function() {
            var p, u = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(h) {
                    h.iceTransport && h.dtlsTransport && !h.rejected && (u[h.iceTransport.state]++, u[h.dtlsTransport.state]++)
                }), u.connected += u.completed, p = "new", u.failed > 0 ? p = "failed" : u.connecting > 0 ? p = "connecting" : u.disconnected > 0 ? p = "disconnected" : u.new > 0 ? p = "new" : u.connected > 0 && (p = "connected"), p !== this.connectionState) {
                this.connectionState = p;
                var m = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", m)
            }
        }, v.prototype.createOffer = function() {
            var p = this;
            if (p._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
            var u = p.transceivers.filter(function(P) {
                    return P.kind === "audio"
                }).length,
                m = p.transceivers.filter(function(P) {
                    return P.kind === "video"
                }).length,
                h = arguments[0];
            if (h) {
                if (h.mandatory || h.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                h.offerToReceiveAudio !== void 0 && (h.offerToReceiveAudio === !0 ? u = 1 : h.offerToReceiveAudio === !1 ? u = 0 : u = h.offerToReceiveAudio), h.offerToReceiveVideo !== void 0 && (h.offerToReceiveVideo === !0 ? m = 1 : h.offerToReceiveVideo === !1 ? m = 0 : m = h.offerToReceiveVideo)
            }
            for (p.transceivers.forEach(function(P) {
                    P.kind === "audio" ? (u--, u < 0 && (P.wantReceive = !1)) : P.kind === "video" && (m--, m < 0 && (P.wantReceive = !1))
                }); u > 0 || m > 0;) u > 0 && (p._createTransceiver("audio"), u--), m > 0 && (p._createTransceiver("video"), m--);
            var x = e.writeSessionBoilerplate(p._sdpSessionId, p._sdpSessionVersion++);
            p.transceivers.forEach(function(P, B) {
                var _ = P.track,
                    R = P.kind,
                    O = P.mid || e.generateIdentifier();
                P.mid = O, P.iceGatherer || (P.iceGatherer = p._createIceGatherer(B, p.usingBundle));
                var A = d.RTCRtpSender.getCapabilities(R);
                l < 15019 && (A.codecs = A.codecs.filter(function(j) {
                    return j.name !== "rtx"
                })), A.codecs.forEach(function(j) {
                    j.name === "H264" && j.parameters["level-asymmetry-allowed"] === void 0 && (j.parameters["level-asymmetry-allowed"] = "1"), P.remoteCapabilities && P.remoteCapabilities.codecs && P.remoteCapabilities.codecs.forEach(function(U) {
                        j.name.toLowerCase() === U.name.toLowerCase() && j.clockRate === U.clockRate && (j.preferredPayloadType = U.payloadType)
                    })
                }), A.headerExtensions.forEach(function(j) {
                    var U = P.remoteCapabilities && P.remoteCapabilities.headerExtensions || [];
                    U.forEach(function(z) {
                        j.uri === z.uri && (j.id = z.id)
                    })
                });
                var I = P.sendEncodingParameters || [{
                    ssrc: (2 * B + 1) * 1001
                }];
                _ && l >= 15019 && R === "video" && !I[0].rtx && (I[0].rtx = {
                    ssrc: I[0].ssrc + 1
                }), P.wantReceive && (P.rtpReceiver = new d.RTCRtpReceiver(P.dtlsTransport, R)), P.localCapabilities = A, P.sendEncodingParameters = I
            }), p._config.bundlePolicy !== "max-compat" && (x += "a=group:BUNDLE " + p.transceivers.map(function(P) {
                return P.mid
            }).join(" ") + `\r
`), x += `a=ice-options:trickle\r
`, p.transceivers.forEach(function(P, B) {
                x += n(P, P.localCapabilities, "offer", P.stream, p._dtlsRole), x += `a=rtcp-rsize\r
`, P.iceGatherer && p.iceGatheringState !== "new" && (B === 0 || !p.usingBundle) && (P.iceGatherer.getLocalCandidates().forEach(function(_) {
                    _.component = 1, x += "a=" + e.writeCandidate(_) + `\r
`
                }), P.iceGatherer.state === "completed" && (x += `a=end-of-candidates\r
`))
            });
            var S = new d.RTCSessionDescription({
                type: "offer",
                sdp: x
            });
            return Promise.resolve(S)
        }, v.prototype.createAnswer = function() {
            var p = this;
            if (p._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
            if (!(p.signalingState === "have-remote-offer" || p.signalingState === "have-local-pranswer")) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + p.signalingState));
            var u = e.writeSessionBoilerplate(p._sdpSessionId, p._sdpSessionVersion++);
            p.usingBundle && (u += "a=group:BUNDLE " + p.transceivers.map(function(x) {
                return x.mid
            }).join(" ") + `\r
`), u += `a=ice-options:trickle\r
`;
            var m = e.getMediaSections(p._remoteDescription.sdp).length;
            p.transceivers.forEach(function(x, S) {
                if (!(S + 1 > m)) {
                    if (x.rejected) {
                        x.kind === "application" ? x.protocol === "DTLS/SCTP" ? u += `m=application 0 DTLS/SCTP 5000\r
` : u += "m=application 0 " + x.protocol + ` webrtc-datachannel\r
` : x.kind === "audio" ? u += `m=audio 0 UDP/TLS/RTP/SAVPF 0\r
a=rtpmap:0 PCMU/8000\r
` : x.kind === "video" && (u += `m=video 0 UDP/TLS/RTP/SAVPF 120\r
a=rtpmap:120 VP8/90000\r
`), u += `c=IN IP4 0.0.0.0\r
a=inactive\r
a=mid:` + x.mid + `\r
`;
                        return
                    }
                    if (x.stream) {
                        var P;
                        x.kind === "audio" ? P = x.stream.getAudioTracks()[0] : x.kind === "video" && (P = x.stream.getVideoTracks()[0]), P && l >= 15019 && x.kind === "video" && !x.sendEncodingParameters[0].rtx && (x.sendEncodingParameters[0].rtx = {
                            ssrc: x.sendEncodingParameters[0].ssrc + 1
                        })
                    }
                    var B = r(x.localCapabilities, x.remoteCapabilities),
                        _ = B.codecs.filter(function(R) {
                            return R.name.toLowerCase() === "rtx"
                        }).length;
                    !_ && x.sendEncodingParameters[0].rtx && delete x.sendEncodingParameters[0].rtx, u += n(x, B, "answer", x.stream, p._dtlsRole), x.rtcpParameters && x.rtcpParameters.reducedSize && (u += `a=rtcp-rsize\r
`)
                }
            });
            var h = new d.RTCSessionDescription({
                type: "answer",
                sdp: u
            });
            return Promise.resolve(h)
        }, v.prototype.addIceCandidate = function(p) {
            var u = this,
                m;
            return p && !(p.sdpMLineIndex !== void 0 || p.sdpMid) ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(h, x) {
                if (u._remoteDescription)
                    if (!p || p.candidate === "")
                        for (var S = 0; S < u.transceivers.length && !(!u.transceivers[S].rejected && (u.transceivers[S].iceTransport.addRemoteCandidate({}), m = e.getMediaSections(u._remoteDescription.sdp), m[S] += `a=end-of-candidates\r
`, u._remoteDescription.sdp = e.getDescription(u._remoteDescription.sdp) + m.join(""), u.usingBundle)); S++);
                    else {
                        var P = p.sdpMLineIndex;
                        if (p.sdpMid) {
                            for (var B = 0; B < u.transceivers.length; B++)
                                if (u.transceivers[B].mid === p.sdpMid) {
                                    P = B;
                                    break
                                }
                        }
                        var _ = u.transceivers[P];
                        if (_) {
                            if (_.rejected) return h();
                            var R = Object.keys(p.candidate).length > 0 ? e.parseCandidate(p.candidate) : {};
                            if (R.protocol === "tcp" && (R.port === 0 || R.port === 9) || R.component && R.component !== 1) return h();
                            if ((P === 0 || P > 0 && _.iceTransport !== u.transceivers[0].iceTransport) && !a(_.iceTransport, R)) return x(c("OperationError", "Can not add ICE candidate"));
                            var O = p.candidate.trim();
                            O.indexOf("a=") === 0 && (O = O.substr(2)), m = e.getMediaSections(u._remoteDescription.sdp), m[P] += "a=" + (R.type ? O : "end-of-candidates") + `\r
`, u._remoteDescription.sdp = e.getDescription(u._remoteDescription.sdp) + m.join("")
                        } else return x(c("OperationError", "Can not add ICE candidate"))
                    }
                else return x(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                h()
            })
        }, v.prototype.getStats = function(p) {
            if (p && p instanceof d.MediaStreamTrack) {
                var u = null;
                if (this.transceivers.forEach(function(h) {
                        h.rtpSender && h.rtpSender.track === p ? u = h.rtpSender : h.rtpReceiver && h.rtpReceiver.track === p && (u = h.rtpReceiver)
                    }), !u) throw c("InvalidAccessError", "Invalid selector.");
                return u.getStats()
            }
            var m = [];
            return this.transceivers.forEach(function(h) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(x) {
                    h[x] && m.push(h[x].getStats())
                })
            }), Promise.all(m).then(function(h) {
                var x = new Map;
                return h.forEach(function(S) {
                    S.forEach(function(P) {
                        x.set(P.id, P)
                    })
                }), x
            })
        };
        var y = ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"];
        y.forEach(function(p) {
            var u = d[p];
            if (u && u.prototype && u.prototype.getStats) {
                var m = u.prototype.getStats;
                u.prototype.getStats = function() {
                    return m.apply(this).then(function(h) {
                        var x = new Map;
                        return Object.keys(h).forEach(function(S) {
                            h[S].type = t(h[S]), x.set(S, h[S])
                        }), x
                    })
                }
            }
        });
        var C = ["createOffer", "createAnswer"];
        return C.forEach(function(p) {
            var u = v.prototype[p];
            v.prototype[p] = function() {
                var m = arguments;
                return typeof m[0] == "function" || typeof m[1] == "function" ? u.apply(this, [arguments[2]]).then(function(h) {
                    typeof m[0] == "function" && m[0].apply(null, [h])
                }, function(h) {
                    typeof m[1] == "function" && m[1].apply(null, [h])
                }) : u.apply(this, arguments)
            }
        }), C = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"], C.forEach(function(p) {
            var u = v.prototype[p];
            v.prototype[p] = function() {
                var m = arguments;
                return typeof m[1] == "function" || typeof m[2] == "function" ? u.apply(this, arguments).then(function() {
                    typeof m[1] == "function" && m[1].apply(null)
                }, function(h) {
                    typeof m[2] == "function" && m[2].apply(null, [h])
                }) : u.apply(this, arguments)
            }
        }), ["getStats"].forEach(function(p) {
            var u = v.prototype[p];
            v.prototype[p] = function() {
                var m = arguments;
                return typeof m[1] == "function" ? u.apply(this, arguments).then(function() {
                    typeof m[1] == "function" && m[1].apply(null)
                }) : u.apply(this, arguments)
            }
        }), v
    }, eo
}
var Pp = kp();
const Sp = Ar(Pp);

function _3(e) {
    const t = e && e.navigator,
        n = function(r) {
            return {
                name: {
                    PermissionDeniedError: "NotAllowedError"
                } [r.name] || r.name,
                message: r.message,
                constraint: r.constraint,
                toString() {
                    return this.name
                }
            }
        },
        o = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function(r) {
        return o(r).catch(s => Promise.reject(n(s)))
    }
}

function R3(e) {
    "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)))
}

function Uo(e, t) {
    if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(r) {
            return r
        }), e.RTCSessionDescription || (e.RTCSessionDescription = function(r) {
            return r
        }), t.version < 15025)) {
        const o = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
        Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
            set(r) {
                o.set.call(this, r);
                const s = new Event("enabled");
                s.enabled = r, this.dispatchEvent(s)
            }
        })
    }
    e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype) && Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
        get() {
            return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = new e.RTCDtmfSender(this) : this.track.kind === "video" && (this._dtmf = null)), this._dtmf
        }
    }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
    const n = Sp(e, t.version);
    e.RTCPeerConnection = function(r) {
        return r && r.iceServers && (r.iceServers = wp(r.iceServers, t.version), Us("ICE servers after filtering:", r.iceServers)), new n(r)
    }, e.RTCPeerConnection.prototype = n.prototype
}

function j3(e) {
    e.RTCRtpSender && !("replaceTrack" in e.RTCRtpSender.prototype) && (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
}
const ia = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimGetDisplayMedia: R3,
    shimGetUserMedia: _3,
    shimPeerConnection: Uo,
    shimReplaceTrack: j3
}, Symbol.toStringTag, {
    value: "Module"
}));

function O3(e, t) {
    const n = e && e.navigator,
        o = e && e.MediaStreamTrack;
    if (n.getUserMedia = function(r, s, a) {
            Ln("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(r).then(s, a)
        }, !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
        const r = function(a, c, d) {
                c in a && !(d in a) && (a[d] = a[c], delete a[c])
            },
            s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
        if (n.mediaDevices.getUserMedia = function(a) {
                return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), r(a.audio, "autoGainControl", "mozAutoGainControl"), r(a.audio, "noiseSuppression", "mozNoiseSuppression")), s(a)
            }, o && o.prototype.getSettings) {
            const a = o.prototype.getSettings;
            o.prototype.getSettings = function() {
                const c = a.apply(this, arguments);
                return r(c, "mozAutoGainControl", "autoGainControl"), r(c, "mozNoiseSuppression", "noiseSuppression"), c
            }
        }
        if (o && o.prototype.applyConstraints) {
            const a = o.prototype.applyConstraints;
            o.prototype.applyConstraints = function(c) {
                return this.kind === "audio" && typeof c == "object" && (c = JSON.parse(JSON.stringify(c)), r(c, "autoGainControl", "mozAutoGainControl"), r(c, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [c])
            }
        }
    }
}

function Tp(e, t) {
    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(o) {
        if (!(o && o.video)) {
            const r = new DOMException("getDisplayMedia without video constraints is undefined");
            return r.name = "NotFoundError", r.code = 8, Promise.reject(r)
        }
        return o.video === !0 ? o.video = {
            mediaSource: t
        } : o.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(o)
    })
}

function M3(e) {
    typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}

function qo(e, t) {
    if (typeof e != "object" || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return;
    !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(r) {
        const s = e.RTCPeerConnection.prototype[r],
            a = {
                [r]() {
                    return arguments[0] = new(r === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), s.apply(this, arguments)
                }
            };
        e.RTCPeerConnection.prototype[r] = a[r]
    });
    const n = {
            inboundrtp: "inbound-rtp",
            outboundrtp: "outbound-rtp",
            candidatepair: "candidate-pair",
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
        },
        o = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function() {
        const [s, a, c] = arguments;
        return o.apply(this, [s || null]).then(d => {
            if (t.version < 53 && !a) try {
                d.forEach(l => {
                    l.type = n[l.type] || l.type
                })
            } catch (l) {
                if (l.name !== "TypeError") throw l;
                d.forEach((f, g) => {
                    d.set(g, Object.assign({}, f, {
                        type: n[f.type] || f.type
                    }))
                })
            }
            return d
        }).then(a, c)
    }
}

function D3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
    const t = e.RTCPeerConnection.prototype.getSenders;
    t && (e.RTCPeerConnection.prototype.getSenders = function() {
        const r = t.apply(this, []);
        return r.forEach(s => s._pc = this), r
    });
    const n = e.RTCPeerConnection.prototype.addTrack;
    n && (e.RTCPeerConnection.prototype.addTrack = function() {
        const r = n.apply(this, arguments);
        return r._pc = this, r
    }), e.RTCRtpSender.prototype.getStats = function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
    }
}

function I3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
    const t = e.RTCPeerConnection.prototype.getReceivers;
    t && (e.RTCPeerConnection.prototype.getReceivers = function() {
        const o = t.apply(this, []);
        return o.forEach(r => r._pc = this), o
    }), fr(e, "track", n => (n.receiver._pc = n.srcElement, n)), e.RTCRtpReceiver.prototype.getStats = function() {
        return this._pc.getStats(this.track)
    }
}

function $3(e) {
    !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(n) {
        Ln("removeStream", "removeTrack"), this.getSenders().forEach(o => {
            o.track && n.getTracks().includes(o.track) && this.removeTrack(o)
        })
    })
}

function N3(e) {
    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
}

function L3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    const t = e.RTCPeerConnection.prototype.addTransceiver;
    t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
        this.setParametersPromises = [];
        const o = arguments[1],
            r = o && "sendEncodings" in o;
        r && o.sendEncodings.forEach(a => {
            if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid)) throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in a && !(parseFloat(a.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0")
        });
        const s = t.apply(this, arguments);
        if (r) {
            const {
                sender: a
            } = s, c = a.getParameters();
            (!("encodings" in c) || c.encodings.length === 1 && Object.keys(c.encodings[0]).length === 0) && (c.encodings = o.sendEncodings, a.sendEncodings = o.sendEncodings, this.setParametersPromises.push(a.setParameters(c).then(() => {
                delete a.sendEncodings
            }).catch(() => {
                delete a.sendEncodings
            })))
        }
        return s
    })
}

function A3(e) {
    if (!(typeof e == "object" && e.RTCRtpSender)) return;
    const t = e.RTCRtpSender.prototype.getParameters;
    t && (e.RTCRtpSender.prototype.getParameters = function() {
        const o = t.apply(this, arguments);
        return "encodings" in o || (o.encodings = [].concat(this.sendEncodings || [{}])), o
    })
}

function z3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    const t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }) : t.apply(this, arguments)
    }
}

function W3(e) {
    if (!(typeof e == "object" && e.RTCPeerConnection)) return;
    const t = e.RTCPeerConnection.prototype.createAnswer;
    e.RTCPeerConnection.prototype.createAnswer = function() {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }) : t.apply(this, arguments)
    }
}
const aa = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAddTransceiver: L3,
    shimCreateAnswer: W3,
    shimCreateOffer: z3,
    shimGetDisplayMedia: Tp,
    shimGetParameters: A3,
    shimGetUserMedia: O3,
    shimOnTrack: M3,
    shimPeerConnection: qo,
    shimRTCDataChannel: N3,
    shimReceiverGetStats: I3,
    shimRemoveStream: $3,
    shimSenderGetStats: D3
}, Symbol.toStringTag, {
    value: "Module"
}));

function F3(e) {
    if (!(typeof e != "object" || !e.RTCPeerConnection)) {
        if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                return this._localStreams || (this._localStreams = []), this._localStreams
            }), !("addStream" in e.RTCPeerConnection.prototype)) {
            const t = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addStream = function(o) {
                this._localStreams || (this._localStreams = []), this._localStreams.includes(o) || this._localStreams.push(o), o.getAudioTracks().forEach(r => t.call(this, r, o)), o.getVideoTracks().forEach(r => t.call(this, r, o))
            }, e.RTCPeerConnection.prototype.addTrack = function(o, ...r) {
                return r && r.forEach(s => {
                    this._localStreams ? this._localStreams.includes(s) || this._localStreams.push(s) : this._localStreams = [s]
                }), t.apply(this, arguments)
            }
        }
        "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(n) {
            this._localStreams || (this._localStreams = []);
            const o = this._localStreams.indexOf(n);
            if (o === -1) return;
            this._localStreams.splice(o, 1);
            const r = n.getTracks();
            this.getSenders().forEach(s => {
                r.includes(s.track) && this.removeTrack(s)
            })
        })
    }
}

function U3(e) {
    if (!(typeof e != "object" || !e.RTCPeerConnection) && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : []
        }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
            get() {
                return this._onaddstream
            },
            set(n) {
                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = n), this.addEventListener("track", this._onaddstreampoly = o => {
                    o.streams.forEach(r => {
                        if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(r)) return;
                        this._remoteStreams.push(r);
                        const s = new Event("addstream");
                        s.stream = r, this.dispatchEvent(s)
                    })
                })
            }
        });
        const t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
            const o = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(r) {
                r.streams.forEach(s => {
                    if (o._remoteStreams || (o._remoteStreams = []), o._remoteStreams.indexOf(s) >= 0) return;
                    o._remoteStreams.push(s);
                    const a = new Event("addstream");
                    a.stream = s, o.dispatchEvent(a)
                })
            }), t.apply(o, arguments)
        }
    }
}

function q3(e) {
    if (typeof e != "object" || !e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype,
        n = t.createOffer,
        o = t.createAnswer,
        r = t.setLocalDescription,
        s = t.setRemoteDescription,
        a = t.addIceCandidate;
    t.createOffer = function(l, f) {
        const g = arguments.length >= 2 ? arguments[2] : arguments[0],
            b = n.apply(this, [g]);
        return f ? (b.then(l, f), Promise.resolve()) : b
    }, t.createAnswer = function(l, f) {
        const g = arguments.length >= 2 ? arguments[2] : arguments[0],
            b = o.apply(this, [g]);
        return f ? (b.then(l, f), Promise.resolve()) : b
    };
    let c = function(d, l, f) {
        const g = r.apply(this, [d]);
        return f ? (g.then(l, f), Promise.resolve()) : g
    };
    t.setLocalDescription = c, c = function(d, l, f) {
        const g = s.apply(this, [d]);
        return f ? (g.then(l, f), Promise.resolve()) : g
    }, t.setRemoteDescription = c, c = function(d, l, f) {
        const g = a.apply(this, [d]);
        return f ? (g.then(l, f), Promise.resolve()) : g
    }, t.addIceCandidate = c
}

function G3(e) {
    const t = e && e.navigator;
    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
        const n = t.mediaDevices,
            o = n.getUserMedia.bind(n);
        t.mediaDevices.getUserMedia = r => o(H3(r))
    }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(o, r, s) {
        t.mediaDevices.getUserMedia(o).then(r, s)
    }).bind(t))
}

function H3(e) {
    return e && e.video !== void 0 ? Object.assign({}, e, {
        video: x3(e.video)
    }) : e
}

function V3(e) {
    if (!e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection;
    e.RTCPeerConnection = function(o, r) {
        if (o && o.iceServers) {
            const s = [];
            for (let a = 0; a < o.iceServers.length; a++) {
                let c = o.iceServers[a];
                !c.hasOwnProperty("urls") && c.hasOwnProperty("url") ? (Ln("RTCIceServer.url", "RTCIceServer.urls"), c = JSON.parse(JSON.stringify(c)), c.urls = c.url, delete c.url, s.push(c)) : s.push(o.iceServers[a])
            }
            o.iceServers = s
        }
        return new t(o, r)
    }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
        get() {
            return t.generateCertificate
        }
    })
}

function Q3(e) {
    typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}

function Y3(e) {
    const t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function(o) {
        if (o) {
            typeof o.offerToReceiveAudio < "u" && (o.offerToReceiveAudio = !!o.offerToReceiveAudio);
            const r = this.getTransceivers().find(a => a.receiver.track.kind === "audio");
            o.offerToReceiveAudio === !1 && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : o.offerToReceiveAudio === !0 && !r && this.addTransceiver("audio"), typeof o.offerToReceiveVideo < "u" && (o.offerToReceiveVideo = !!o.offerToReceiveVideo);
            const s = this.getTransceivers().find(a => a.receiver.track.kind === "video");
            o.offerToReceiveVideo === !1 && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : o.offerToReceiveVideo === !0 && !s && this.addTransceiver("video")
        }
        return t.apply(this, arguments)
    }
}

function X3(e) {
    typeof e != "object" || e.AudioContext || (e.AudioContext = e.webkitAudioContext)
}
const ca = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAudioContext: X3,
    shimCallbacksAPI: q3,
    shimConstraints: H3,
    shimCreateOfferLegacy: Y3,
    shimGetUserMedia: G3,
    shimLocalStreamsAPI: F3,
    shimRTCIceServerUrls: V3,
    shimRemoteStreamsAPI: U3,
    shimTrackEventTransceiver: Q3
}, Symbol.toStringTag, {
    value: "Module"
}));
var Bp = E3();
const gn = Ar(Bp);

function vn(e) {
    if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
    const t = e.RTCIceCandidate;
    e.RTCIceCandidate = function(o) {
        if (typeof o == "object" && o.candidate && o.candidate.indexOf("a=") === 0 && (o = JSON.parse(JSON.stringify(o)), o.candidate = o.candidate.substr(2)), o.candidate && o.candidate.length) {
            const r = new t(o),
                s = gn.parseCandidate(o.candidate),
                a = Object.assign(r, s);
            return a.toJSON = function() {
                return {
                    candidate: a.candidate,
                    sdpMid: a.sdpMid,
                    sdpMLineIndex: a.sdpMLineIndex,
                    usernameFragment: a.usernameFragment
                }
            }, a
        }
        return new t(o)
    }, e.RTCIceCandidate.prototype = t.prototype, fr(e, "icecandidate", n => (n.candidate && Object.defineProperty(n, "candidate", {
        value: new e.RTCIceCandidate(n.candidate),
        writable: "false"
    }), n))
}

function Er(e, t) {
    if (!e.RTCPeerConnection) return;
    "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
        get() {
            return typeof this._sctp > "u" ? null : this._sctp
        }
    });
    const n = function(c) {
            if (!c || !c.sdp) return !1;
            const d = gn.splitSections(c.sdp);
            return d.shift(), d.some(l => {
                const f = gn.parseMLine(l);
                return f && f.kind === "application" && f.protocol.indexOf("SCTP") !== -1
            })
        },
        o = function(c) {
            const d = c.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (d === null || d.length < 2) return -1;
            const l = parseInt(d[1], 10);
            return l !== l ? -1 : l
        },
        r = function(c) {
            let d = 65536;
            return t.browser === "firefox" && (t.version < 57 ? c === -1 ? d = 16384 : d = 2147483637 : t.version < 60 ? d = t.version === 57 ? 65535 : 65536 : d = 2147483637), d
        },
        s = function(c, d) {
            let l = 65536;
            t.browser === "firefox" && t.version === 57 && (l = 65535);
            const f = gn.matchPrefix(c.sdp, "a=max-message-size:");
            return f.length > 0 ? l = parseInt(f[0].substr(19), 10) : t.browser === "firefox" && d !== -1 && (l = 2147483637), l
        },
        a = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = function() {
        if (this._sctp = null, t.browser === "chrome" && t.version >= 76) {
            const {
                sdpSemantics: d
            } = this.getConfiguration();
            d === "plan-b" && Object.defineProperty(this, "sctp", {
                get() {
                    return typeof this._sctp > "u" ? null : this._sctp
                },
                enumerable: !0,
                configurable: !0
            })
        }
        if (n(arguments[0])) {
            const d = o(arguments[0]),
                l = r(d),
                f = s(arguments[0], d);
            let g;
            l === 0 && f === 0 ? g = Number.POSITIVE_INFINITY : l === 0 || f === 0 ? g = Math.max(l, f) : g = Math.min(l, f);
            const b = {};
            Object.defineProperty(b, "maxMessageSize", {
                get() {
                    return g
                }
            }), this._sctp = b
        }
        return a.apply(this, arguments)
    }
}

function _r(e) {
    if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;

    function t(o, r) {
        const s = o.send;
        o.send = function() {
            const c = arguments[0],
                d = c.length || c.size || c.byteLength;
            if (o.readyState === "open" && r.sctp && d > r.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + r.sctp.maxMessageSize + " bytes)");
            return s.apply(o, arguments)
        }
    }
    const n = e.RTCPeerConnection.prototype.createDataChannel;
    e.RTCPeerConnection.prototype.createDataChannel = function() {
        const r = n.apply(this, arguments);
        return t(r, this), r
    }, fr(e, "datachannel", o => (t(o.channel, o.target), o))
}

function Go(e) {
    if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
    const t = e.RTCPeerConnection.prototype;
    Object.defineProperty(t, "connectionState", {
        get() {
            return {
                completed: "connected",
                checking: "connecting"
            } [this.iceConnectionState] || this.iceConnectionState
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "onconnectionstatechange", {
        get() {
            return this._onconnectionstatechange || null
        },
        set(n) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), n && this.addEventListener("connectionstatechange", this._onconnectionstatechange = n)
        },
        enumerable: !0,
        configurable: !0
    }), ["setLocalDescription", "setRemoteDescription"].forEach(n => {
        const o = t[n];
        t[n] = function() {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = r => {
                const s = r.target;
                if (s._lastConnectionState !== s.connectionState) {
                    s._lastConnectionState = s.connectionState;
                    const a = new Event("connectionstatechange", r);
                    s.dispatchEvent(a)
                }
                return r
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), o.apply(this, arguments)
        }
    })
}

function Ho(e, t) {
    if (!e.RTCPeerConnection || t.browser === "chrome" && t.version >= 71 || t.browser === "safari" && t.version >= 605) return;
    const n = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = function(r) {
        if (r && r.sdp && r.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
            const s = r.sdp.split(`
`).filter(a => a.trim() !== "a=extmap-allow-mixed").join(`
`);
            e.RTCSessionDescription && r instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
                type: r.type,
                sdp: s
            }) : r.sdp = s
        }
        return n.apply(this, arguments)
    }
}

function xn(e, t) {
    if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
    const n = e.RTCPeerConnection.prototype.addIceCandidate;
    !n || n.length === 0 || (e.RTCPeerConnection.prototype.addIceCandidate = function() {
        return arguments[0] ? (t.browser === "chrome" && t.version < 78 || t.browser === "firefox" && t.version < 68 || t.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
    })
}
const Ep = Object.freeze(Object.defineProperty({
    __proto__: null,
    removeExtmapAllowMixed: Ho,
    shimAddIceCandidateNullOrEmpty: xn,
    shimConnectionState: Go,
    shimMaxMessageSize: Er,
    shimRTCIceCandidate: vn,
    shimSendThrowTypeError: _r
}, Symbol.toStringTag, {
    value: "Module"
}));

function _p({
    window: e
} = {}, t = {
    shimChrome: !0,
    shimFirefox: !0,
    shimEdge: !0,
    shimSafari: !0
}) {
    const n = Us,
        o = Cp(e),
        r = {
            browserDetails: o,
            commonShim: Ep,
            extractVersion: Br,
            disableLog: xp,
            disableWarnings: yp
        };
    switch (o.browser) {
        case "chrome":
            if (!na || !Fo || !t.shimChrome) return n("Chrome shim is not included in this adapter release."), r;
            if (o.version === null) return n("Chrome shim can not determine version, not shimming."), r;
            n("adapter.js shimming chrome."), r.browserShim = na, xn(e, o), y3(e, o), C3(e), Fo(e, o), b3(e), T3(e, o), w3(e), k3(e), P3(e), B3(e, o), vn(e), Go(e), Er(e, o), _r(e), Ho(e, o);
            break;
        case "firefox":
            if (!aa || !qo || !t.shimFirefox) return n("Firefox shim is not included in this adapter release."), r;
            n("adapter.js shimming firefox."), r.browserShim = aa, xn(e, o), O3(e, o), qo(e, o), M3(e), $3(e), D3(e), I3(e), N3(e), L3(e), A3(e), z3(e), W3(e), vn(e), Go(e), Er(e, o), _r(e);
            break;
        case "edge":
            if (!ia || !Uo || !t.shimEdge) return n("MS edge shim is not included in this adapter release."), r;
            n("adapter.js shimming edge."), r.browserShim = ia, _3(e), R3(e), Uo(e, o), j3(e), Er(e, o), _r(e);
            break;
        case "safari":
            if (!ca || !t.shimSafari) return n("Safari shim is not included in this adapter release."), r;
            n("adapter.js shimming safari."), r.browserShim = ca, xn(e, o), V3(e), Y3(e), q3(e), F3(e), U3(e), Q3(e), G3(e), X3(e), vn(e), Er(e, o), _r(e), Ho(e, o);
            break;
        default:
            n("Unsupported browser!");
            break
    }
    return r
}
_p({
    window: typeof window > "u" ? void 0 : window
});
var to, la;

function Rp() {
    if (la) return to;
    la = 1;
    var e = Object.assign || function(p) {
            for (var u = 1; u < arguments.length; u++) {
                var m = arguments[u];
                for (var h in m) Object.prototype.hasOwnProperty.call(m, h) && (p[h] = m[h])
            }
            return p
        },
        t = function() {
            function p(u, m) {
                for (var h = 0; h < m.length; h++) {
                    var x = m[h];
                    x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(u, x.key, x)
                }
            }
            return function(u, m, h) {
                return m && p(u.prototype, m), h && p(u, h), u
            }
        }(),
        n, o;

    function r(p, u) {
        if (!(p instanceof u)) throw new TypeError("Cannot call a class as a function")
    }

    function s(p, u) {
        if (!p) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return u && (typeof u == "object" || typeof u == "function") ? u : p
    }

    function a(p, u) {
        if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof u);
        p.prototype = Object.create(u && u.prototype, {
            constructor: {
                value: p,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(p, u) : p.__proto__ = u)
    }
    var c = ze(),
        d = c.Component,
        l = kt(),
        f = mp(),
        g = f.getDeviceId;
    f.getFacingModePattern;
    var b = gp(),
        v = vp(),
        y = v([`!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can't take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,
36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,
39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,
59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){
var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});`], {
            type: "application/javascript"
        }),
        C = ["delay", "legacyMode", "facingMode"];
    return to = (o = n = function(p) {
        a(u, p);

        function u(m) {
            r(this, u);
            var h = s(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, m));
            return h.els = {}, h.state = {
                mirrorVideo: !1
            }, h.initiate = h.initiate.bind(h), h.initiateLegacyMode = h.initiateLegacyMode.bind(h), h.check = h.check.bind(h), h.handleVideo = h.handleVideo.bind(h), h.handleLoadStart = h.handleLoadStart.bind(h), h.handleInputChange = h.handleInputChange.bind(h), h.clearComponent = h.clearComponent.bind(h), h.handleReaderLoad = h.handleReaderLoad.bind(h), h.openImageDialog = h.openImageDialog.bind(h), h.handleWorkerMessage = h.handleWorkerMessage.bind(h), h.setRefFactory = h.setRefFactory.bind(h), h
        }
        return t(u, [{
            key: "componentDidMount",
            value: function() {
                this.worker = new Worker(URL.createObjectURL(y)), this.worker.onmessage = this.handleWorkerMessage, this.props.legacyMode ? this.initiateLegacyMode() : this.initiate()
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(h) {
                var x = b(this.props, h, C),
                    S = !0,
                    P = !1,
                    B = void 0;
                try {
                    for (var _ = x[Symbol.iterator](), R; !(S = (R = _.next()).done); S = !0) {
                        var O = R.value;
                        if (O == "facingMode") {
                            this.clearComponent(), this.initiate(h);
                            break
                        } else if (O == "delay") this.props.delay == !1 && !h.legacyMode && (this.timeout = setTimeout(this.check, h.delay)), h.delay == !1 && clearTimeout(this.timeout);
                        else if (O == "legacyMode") {
                            this.props.legacyMode && !h.legacyMode ? (this.clearComponent(), this.initiate(h)) : (this.clearComponent(), this.componentDidUpdate = this.initiateLegacyMode);
                            break
                        }
                    }
                } catch (A) {
                    P = !0, B = A
                } finally {
                    try {
                        !S && _.return && _.return()
                    } finally {
                        if (P) throw B
                    }
                }
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(h, x) {
                if (x !== this.state) return !0;
                var S = b(this.props, h, C);
                return S.length > 0
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.worker && (this.worker.terminate(), this.worker = void 0), this.clearComponent()
            }
        }, {
            key: "clearComponent",
            value: function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = void 0), this.stopCamera && this.stopCamera(), this.reader && this.reader.removeEventListener("load", this.handleReaderLoad), this.els.img && this.els.img.removeEventListener("load", this.check)
            }
        }, {
            key: "initiate",
            value: function() {
                var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props,
                    x = h.onError,
                    S = h.facingMode,
                    P = /firefox/i.test(navigator.userAgent),
                    B = {};
                navigator.mediaDevices && typeof navigator.mediaDevices.getSupportedConstraints == "function" && (B = navigator.mediaDevices.getSupportedConstraints());
                var _ = {};
                B.facingMode && (_.facingMode = {
                    ideal: S
                }), B.frameRate && (_.frameRate = {
                    ideal: 25,
                    min: 10
                });
                var R = B.facingMode || P ? Promise.resolve(h.constraints || _) : g(S).then(function(O) {
                    return Object.assign({}, {
                        deviceId: O
                    }, h.constraints)
                });
                R.then(function(O) {
                    return navigator.mediaDevices.getUserMedia({
                        video: O
                    })
                }).then(this.handleVideo).catch(x)
            }
        }, {
            key: "handleVideo",
            value: function(h) {
                var x = this.els.preview,
                    S = this.props.facingMode;
                if (!x) return setTimeout(this.handleVideo, 200, h);
                (x || {}).srcObject !== void 0 ? x.srcObject = h : x.mozSrcObject !== void 0 ? x.mozSrcObject = h : window.URL.createObjectURL ? x.src = window.URL.createObjectURL(h) : window.webkitURL ? x.src = window.webkitURL.createObjectURL(h) : x.src = h, x.playsInline = !0;
                var P = h.getTracks()[0];
                this.stopCamera = P.stop.bind(P), x.addEventListener("loadstart", this.handleLoadStart), this.setState({
                    mirrorVideo: S == "user",
                    streamLabel: P.label
                })
            }
        }, {
            key: "handleLoadStart",
            value: function() {
                var h = this.props,
                    x = h.delay,
                    S = h.onLoad,
                    P = this.state,
                    B = P.mirrorVideo,
                    _ = P.streamLabel,
                    R = this.els.preview;
                R.play(), typeof S == "function" && S({
                    mirrorVideo: B,
                    streamLabel: _
                }), typeof x == "number" && (this.timeout = setTimeout(this.check, x)), R.removeEventListener("loadstart", this.handleLoadStart)
            }
        }, {
            key: "check",
            value: function() {
                var h = this.props,
                    x = h.legacyMode,
                    S = h.resolution,
                    P = h.delay,
                    B = this.els,
                    _ = B.preview,
                    R = B.canvas,
                    O = B.img,
                    A = Math.floor(x ? O.naturalWidth : _.videoWidth),
                    I = Math.floor(x ? O.naturalHeight : _.videoHeight),
                    j = 0,
                    U = 0;
                if (x) {
                    var z = A > I ? A : I,
                        N = S / z;
                    I = N * I, A = N * A, R.width = A, R.height = I
                } else {
                    var q = A < I ? A : I,
                        W = S / q;
                    I = W * I, A = W * A, U = (I - S) / 2 * -1, j = (A - S) / 2 * -1, R.width = S, R.height = S
                }
                var he = _ && _.readyState === _.HAVE_ENOUGH_DATA;
                if (x || he) {
                    var te = R.getContext("2d");
                    te.drawImage(x ? O : _, j, U, A, I);
                    var ae = te.getImageData(0, 0, R.width, R.height);
                    this.worker.postMessage(ae)
                } else this.timeout = setTimeout(this.check, P)
            }
        }, {
            key: "handleWorkerMessage",
            value: function(h) {
                var x = this.props,
                    S = x.onScan,
                    P = x.legacyMode,
                    B = x.delay,
                    _ = h.data;
                S(_ || null), !P && typeof B == "number" && this.worker && (this.timeout = setTimeout(this.check, B))
            }
        }, {
            key: "initiateLegacyMode",
            value: function() {
                this.reader = new FileReader, this.reader.addEventListener("load", this.handleReaderLoad), this.els.img.addEventListener("load", this.check, !1), this.componentDidUpdate = void 0, typeof this.props.onLoad == "function" && this.props.onLoad()
            }
        }, {
            key: "handleInputChange",
            value: function(h) {
                var x = h.target.files[0];
                this.reader.readAsDataURL(x)
            }
        }, {
            key: "handleReaderLoad",
            value: function(h) {
                this.els.img.src = h.target.result
            }
        }, {
            key: "openImageDialog",
            value: function() {
                this.els.input.click()
            }
        }, {
            key: "setRefFactory",
            value: function(h) {
                var x = this;
                return function(S) {
                    x.els[h] = S
                }
            }
        }, {
            key: "render",
            value: function() {
                var h = this.props,
                    x = h.style,
                    S = h.className,
                    P = h.onImageLoad,
                    B = h.legacyMode,
                    _ = h.showViewFinder;
                h.facingMode;
                var R = {
                        overflow: "hidden",
                        position: "relative",
                        width: "100%",
                        paddingTop: "100%"
                    },
                    O = {
                        display: "none"
                    },
                    A = {
                        top: 0,
                        left: 0,
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                    },
                    I = e({}, A, {
                        objectFit: "cover",
                        transform: this.state.mirrorVideo ? "scaleX(-1)" : void 0
                    }),
                    j = e({}, A, {
                        objectFit: "scale-down"
                    }),
                    U = {
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        boxSizing: "border-box",
                        border: "50px solid rgba(0, 0, 0, 0.3)",
                        boxShadow: "inset 0 0 0 5px rgba(255, 0, 0, 0.5)",
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    };
                return c.createElement("section", {
                    className: S,
                    style: x
                }, c.createElement("section", {
                    style: R
                }, !B && _ ? c.createElement("div", {
                    style: U
                }) : null, B ? c.createElement("input", {
                    style: O,
                    type: "file",
                    accept: "image/*",
                    ref: this.setRefFactory("input"),
                    onChange: this.handleInputChange
                }) : null, B ? c.createElement("img", {
                    style: j,
                    ref: this.setRefFactory("img"),
                    onLoad: P
                }) : c.createElement("video", {
                    style: I,
                    ref: this.setRefFactory("preview")
                }), c.createElement("canvas", {
                    style: O,
                    ref: this.setRefFactory("canvas")
                })))
            }
        }]), u
    }(d), n.propTypes = {
        onScan: l.func.isRequired,
        onError: l.func.isRequired,
        onLoad: l.func,
        onImageLoad: l.func,
        delay: l.oneOfType([l.number, l.bool]),
        facingMode: l.oneOf(["user", "environment"]),
        legacyMode: l.bool,
        resolution: l.number,
        showViewFinder: l.bool,
        style: l.any,
        className: l.string,
        constraints: l.object
    }, n.defaultProps = {
        delay: 500,
        resolution: 600,
        facingMode: "environment",
        showViewFinder: !0,
        constraints: null
    }, o), to
}
var jp = Rp();
const Op = Ar(jp);
var Mp = Object.getOwnPropertyDescriptor,
    Dp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Mp(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Ip = k.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${$.White};
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
`,
    $p = k.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 9px;
`;
let Vo = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            showReader: !0,
            screen: ""
        }, this.handleScan = e => {
            if (e && JSON.parse(e)) {
                const t = JSON.parse(e);
                t.route && (Ya.play(), this.setState({
                    showReader: !1,
                    screen: t.route
                }, () => {
                    this.state.screen === "moneyPerQuestion" && this.onUpgradeScanned(Pr.moneyPerQuestion), this.state.screen === "streakBonus" && this.onUpgradeScanned(Pr.streakBonus), this.state.screen === "multiplier" && this.onUpgradeScanned(Pr.multiplier), this.state.screen === "insurance" && this.onUpgradeScanned(Pr.insurance)
                }))
            }
        }, this.getContent = () => this.state.showReader ? i.jsxs(Ip, {
            children: [i.jsx($p, {
                children: "Find a KitCode to scan!"
            }), i.jsx(Op, {
                onScan: this.handleScan,
                style: {
                    width: 300,
                    height: 300
                },
                onError: null
            })]
        }) : this.state.screen === "themes" ? i.jsx(En, {}) : this.state.screen === "powerups" ? i.jsx(er, {}) : null, this.onUpgradeScanned = e => {
            this.props.upgrades.currentlySelectedUpgrade = e, ee(L.upgrade)
        }
    }
    render() {
        return this.getContent()
    }
};
Vo = Dp([F("upgrades"), D], Vo);
var Np = Object.getOwnPropertyDescriptor,
    Lp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Np(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let Qo = class extends w.Component {
    render() {
        return this.props.entities.lava ? i.jsxs(zs, {
            children: [i.jsx(Ws, {
                colors: {
                    text: $.White,
                    background: "#009624"
                },
                children: i.jsx(le, {
                    name: "fas fa-wrench fa-flip-horizontal"
                })
            }), i.jsxs("div", {
                style: {
                    padding: 23,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: [i.jsx("div", {
                    style: {
                        fontWeight: 900,
                        fontSize: 35,
                        lineHeight: "35px",
                        marginTop: 4
                    },
                    children: i.jsx(M, {
                        text: "Build"
                    })
                }), i.jsx(ut, {
                    style: {
                        marginBottom: 15,
                        marginTop: 18
                    }
                }), i.jsxs("div", {
                    style: {
                        fontSize: 16,
                        textAlign: "center"
                    },
                    children: [i.jsxs("b", {
                        children: [i.jsx(M, {
                            text: "Building Height"
                        }), ":"]
                    }), " ", ge(this.props.entities.lava.buildHeight), " ", i.jsx(M, {
                        text: Cn("block", this.props.entities.lava.buildHeight)
                    }), i.jsx("br", {}), i.jsxs("b", {
                        children: [i.jsx(M, {
                            text: "Lava Height"
                        }), ":"]
                    }), " ", ge(this.props.entities.lava.lavaHeight), " ", i.jsx(M, {
                        text: Cn("block", this.props.entities.lava.lavaHeight)
                    })]
                })]
            })]
        }) : null
    }
};
Qo = Lp([F("entities"), D], Qo);
var Ap = Object.getOwnPropertyDescriptor,
    zp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Ap(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let Yo = class extends w.Component {
    constructor() {
        super(...arguments), this.canAffordUpgrade = e => {
            const t = this.props.upgrades.lavaUpgrades.find(n => n.id === e);
            return t ? this.props.balance.balance >= t.price : !1
        }, this.purchaseUpgrade = e => {
            this.canAffordUpgrade(e) && (oe(ne.lavaPurchasePiece, {
                type: e
            }), ee(L.questions))
        }
    }
    render() {
        const {
            upgrades: {
                lavaUpgrades: e
            }
        } = this.props;
        return i.jsx(Nn, {
            style: {
                display: "flex",
                justifyContent: "center"
            },
            children: i.jsxs(J3, {
                children: [i.jsx(Qo, {}), e.map(t => i.jsx(Fs, {
                    icon: t.icon,
                    background: t.background,
                    name: t.name,
                    description: t.description,
                    cost: t.price,
                    canAfford: this.canAffordUpgrade(t.id),
                    onClick: () => this.purchaseUpgrade(t.id)
                }, `lava-upgrade-${t.id}`)), i.jsx("div", {
                    style: {
                        height: 20,
                        width: "100%"
                    }
                })]
            })
        })
    }
};
Yo = zp([F("upgrades", "balance"), D], Yo);
const J3 = k.div`
  width: 100%;
  max-width: 700px;
`;
var Wp = Object.getOwnPropertyDescriptor,
    Fp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Wp(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let Xo = class extends w.Component {
    render() {
        const {
            me: e,
            investigationsLeft: t,
            meetingsLeft: n,
            impostersLeft: o
        } = this.props.imposter;
        if (!e) return null;
        const r = e.role === dt.imposter;
        return i.jsxs(zs, {
            style: {
                background: "#263238",
                color: $.White
            },
            children: [i.jsx(Ws, {
                colors: {
                    text: "#ffeb3b",
                    background: "#000a12"
                },
                children: i.jsx(le, {
                    name: "far fa-space-station-moon-alt"
                })
            }), i.jsxs("div", {
                style: {
                    padding: 23,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: [i.jsx("div", {
                    style: {
                        fontWeight: 900,
                        fontSize: 35,
                        lineHeight: "35px",
                        marginTop: 4
                    },
                    children: i.jsx(M, {
                        text: "Mission Control"
                    })
                }), i.jsx(ut, {
                    style: {
                        marginBottom: 15,
                        marginTop: 18
                    }
                }), i.jsxs("div", {
                    style: {
                        fontSize: 16,
                        textAlign: "center"
                    },
                    children: [i.jsxs("b", {
                        children: [i.jsx(M, {
                            text: "Investigations Left"
                        }), ":"]
                    }), " ", ge(t), i.jsx("br", {}), !r && i.jsxs(i.Fragment, {
                        children: [i.jsxs("b", {
                            children: [i.jsx(M, {
                                text: "Impostors Left"
                            }), ":"]
                        }), " ", ge(o), i.jsx("br", {})]
                    }), i.jsxs("b", {
                        children: [i.jsx(M, {
                            text: "Meetings Left"
                        }), ":"]
                    }), " ", ge(n)]
                })]
            })]
        })
    }
};
Xo = Fp([F("imposter"), D], Xo);
var Up = Object.getOwnPropertyDescriptor,
    qp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Up(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const da = [Te.fakeInvestigation, Te.investigationRemover, Te.privateInvestigation, Te.publicInvestigation];
let Jo = class extends w.Component {
    constructor() {
        super(...arguments), this.isItemNotAvailable = e => !!(this.props.imposter.investigationsLeft === 0 && da.includes(e) || e === Te.blendIn && this.props.imposter.me && this.props.imposter.me.blendingIn), this.canPurchaseItem = e => !this.isItemNotAvailable(e) && this.canAffordItem(e), this.canAffordItem = e => {
            const t = this.props.imposter.shopItems.find(n => n.id === e);
            return t ? this.props.balance.balance >= t.cost : !1
        }, this.purchaseItem = e => {
            if (da.includes(e) && e !== Te.investigationRemover || e === Te.donate || e === Te.noteViewer || e === Te.clearListRemover) {
                this.props.imposter.currentShopItem = e, this.props.imposter.currentShopItemModalVisible = !0;
                return
            } else oe(ne.imposter.purchase, {
                item: e
            }), e !== Te.meeting && ee(L.questions)
        }
    }
    render() {
        return i.jsx(Nn, {
            style: {
                display: "flex",
                justifyContent: "center",
                background: "#cfd8dc",
                fontFamily: "'Space Grotesk', monospace"
            },
            children: i.jsxs(J3, {
                children: [i.jsx(Xo, {}), this.props.imposter.shopItems.map(e => i.jsx(Fs, {
                    style: {
                        color: $.White,
                        background: "#000a12"
                    },
                    icon: e.icon,
                    background: e.background,
                    name: e.name,
                    description: e.description,
                    cost: e.cost,
                    canAfford: this.canPurchaseItem(e.id),
                    aboveNameComponent: this.isItemNotAvailable(e.id) ? i.jsx(Gp, {}) : null,
                    onClick: () => this.purchaseItem(e.id)
                }, `imposter-item-${e.id}`)), i.jsx("div", {
                    style: {
                        height: 25
                    }
                })]
            })
        })
    }
};
Jo = qp([F("imposter", "balance"), D], Jo);
const Gp = () => i.jsx(Hp, {
        children: i.jsx(M, {
            text: "Not Available"
        })
    }),
    Hp = k.div`
  background: #d32f2f;
  font-size: 14px;
  padding: 3px 11px;
  border-radius: 8px;
  margin-bottom: 2px;
`;
var Vp = Object.getOwnPropertyDescriptor,
    Qp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Vp(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Yp = e => e === me.upgrades ? i.jsx($o, {}) : e === me.powerups ? i.jsx(er, {}) : e === me.defendingHomebase ? i.jsx(zo, {}) : e === me.lava ? i.jsx(Yo, {}) : e === me.powerupsNonMusic ? i.jsx(er, {
    hidePowerup: t => !!(t.category && t.category.includes(mo.specialSound))
}) : e === me.powerupsMusic ? i.jsx(er, {
    hidePowerup: t => !(t.category && t.category.includes(mo.specialSound))
}) : i.jsx(En, {});
let Ko = class extends w.Component {
    constructor() {
        super(...arguments), this.changeShopTab = e => {
            Qa.play(), this.props.navigation.currentShopTab = e
        }, this.getContent = () => Yd() ? i.jsx(Vo, {}) : ve() ? i.jsx(Jo, {}) : i.jsxs(i.Fragment, {
            children: [Yp(this.props.navigation.currentShopTab), i.jsx(jo, {
                changeShopTab: this.changeShopTab,
                value: this.props.navigation.currentShopTab
            })]
        })
    }
    componentDidMount() {
        In() && ee(L.questions)
    }
    render() {
        return i.jsx(lc, {
            customBackground: $.White,
            children: this.getContent()
        })
    }
};
Ko = Qp([F("navigation"), D], Ko);
var Xp = Object.getOwnPropertyDescriptor,
    Jp = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Xp(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const Nr = "4px",
    Kp = k.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    Zp = k.div`
  height: 90%;
  max-height: 500px;
  width: 90%;
  max-width: 700px;
  border-radius: ${Nr};
  box-shadow: ${be.basic};
  background: ${e=>e.theme.question.background};
  color: ${e=>e.theme.question.text};
`,
    e1 = k.div`
  height: 20%;
  border-top-left-radius: ${Nr};
  border-top-right-radius: ${Nr};
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`,
    t1 = k.div`
  height: 50%;
  width: 100%;
`,
    r1 = k.div`
  height: 30%;
  width: 100%;
  background: ${e=>e.disabled?$.DisabledGray:"rgba(255,255,255,0.2)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  color: ${$.White};
  border-bottom-left-radius: ${Nr};
  border-bottom-right-radius: ${Nr};
  transition: background 0.25s;
  &:hover {
    background: ${e=>e.disabled?$.DisabledGray:"rgba(255,255,255,0.25)"};
  }
`;
let Zo = class extends w.Component {
    constructor() {
        super(...arguments), this.canPurchase = () => this.ownedLevel() < this.currentlySelectedLevel() && this.getPrice() <= this.props.balance.balance, this.currentlySelectedLevel = () => this.props.upgrades.upgradeLevelTabs[zt(this.currentUpgrade().name)], this.ownedLevel = () => this.props.upgrades.upgradeLevels[zt(this.currentUpgrade().name)], this.currentUpgrade = () => this.props.upgrades.upgrades.filter(e => e.name === this.props.upgrades.currentlySelectedUpgrade)[0], this.getTitle = () => {
            const e = this.currentUpgrade();
            return e.name === Ve.insurance ? "Amount Covered" : e.name
        }, this.getValue = () => {
            const e = this.currentUpgrade(),
                t = this.getLevel().value;
            return e.name === Ve.insurance ? Math.round((1 - t) * 100) + "%" : e.name === Ve.multiplier ? t + "x" : xe(t * this.props.balance.incomeMultiplier)
        }, this.getBuyDetails = () => {
            if (this.ownedLevel() >= this.currentlySelectedLevel()) return {
                text: "Already Owned",
                disabled: !0,
                onClick: null
            };
            const e = this.canPurchase();
            return {
                text: xe(this.getPrice()),
                disabled: !e,
                onClick: e ? this.purchaseUpgrade : null,
                disabledAllText: !0
            }
        }, this.purchaseUpgrade = () => {
            const e = this.currentUpgrade(),
                t = this.currentlySelectedLevel();
            oe(ne.upgradePurchased, {
                upgradeName: e.name,
                level: t
            }), this.props.onPurchase()
        }, this.getLevel = () => {
            const e = this.currentlySelectedLevel();
            return this.currentUpgrade().levels.filter((t, n) => n + 1 === e)[0]
        }, this.getPrice = () => Ka(this.getLevel().price)
    }
    render() {
        const e = this.getBuyDetails();
        return i.jsx(Kp, {
            children: i.jsxs(Zp, {
                children: [i.jsx(e1, {
                    children: i.jsx(nt, {
                        paddingHorizontal: 30,
                        max: 40,
                        text: i.jsx(M, {
                            text: this.getTitle()
                        })
                    })
                }), i.jsx(t1, {
                    children: i.jsx(nt, {
                        mode: "multi",
                        max: 200,
                        text: this.getValue()
                    })
                }), i.jsx(r1, {
                    onClick: e.onClick,
                    disabled: e.disabled,
                    children: i.jsx(nt, {
                        max: 45,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        text: e.disabledAllText ? i.jsx(M, {
                            text: "Buy for",
                            suffix: ` ${e.text}`
                        }) : i.jsx(M, {
                            text: e.text
                        })
                    })
                })]
            })
        })
    }
};
Zo = Jp([F("upgrades", "balance"), D], Zo);
var n1 = Object.getOwnPropertyDescriptor,
    o1 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? n1(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const K3 = {
        angle: 90,
        spread: 67,
        startVelocity: 60,
        elementCount: 50,
        decay: .87
    },
    s1 = k.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: ${e=>e.open?0:-1};
  display: ${e=>e.visible?"flex":"none"};
`,
    i1 = k.div`
  background: ${$.White};
  font-family: ${Ee.name};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,
    a1 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2.5s;
`,
    c1 = k.div`
  font-weight: bold;
  font-size: 45px;
`,
    l1 = k.div`
  font-size: 23px;
  text-align: center;
`;
let es = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            showConfetti: !1
        }, this.upgradeName = () => this.props.upgrades.currentlySelectedUpgrade, this.upgradeDetails = () => {
            const e = this.props.upgrades.upgrades.filter(o => o.name === this.upgradeName())[0];
            let t = 1;
            return {
                ...e.levels.filter((o, r) => r + 1 === this.props.upgrades.upgradeLevelTabs[zt(this.upgradeName())] ? (t = r + 1, !0) : !1)[0],
                level: t
            }
        }, this.closeWithMovingForward = () => this.close(!0), this.closeWithoutMovingForward = () => this.close(!1), this.close = e => {
            this.setState({
                showConfetti: !1
            }, () => this.props.onContinue(e))
        }, this.handleKeyDown = ({
            keyCode: e = 0
        }) => {
            e === 13 && this.props.open && this.props.onContinue(!0)
        }, this.getDescription = () => {
            const e = this.upgradeDetails().value,
                t = this.upgradeName();
            return t === Ve.moneyPerQuestion ? `You will now earn/lose ${xe(e*this.props.balance.incomeMultiplier)} per question.` : t === Ve.streakBonus ? `You'll now earn an extra ${xe(e*this.props.balance.incomeMultiplier)} for each question you answer correctly in a row.` : t === Ve.multiplier ? `Each question's earnings/loss will now be multiplied by ${ge(e)}x.` : t === Ve.insurance ? `After answering incorrectly, you will now only have to pay back ${e*100}% of the cost.` : null
        }
    }
    componentDidUpdate(e) {
        this.props.open && !e.open && (wd.play(), setTimeout(() => this.setState({
            showConfetti: !0
        }), 1e3))
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown)
    }
    render() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(wt, {
                open: this.props.open,
                close: this.closeWithoutMovingForward,
                customMaxWidth: "500px",
                children: i.jsxs(i1, {
                    children: [i.jsx(a1, {
                        className: "animated pulse infinite",
                        children: i.jsx("img", {
                            style: {
                                maxHeight: 150
                            },
                            src: H("balloons.svg")
                        })
                    }), i.jsxs(c1, {
                        children: [i.jsx(M, {
                            text: "Purchased"
                        }), "!"]
                    }), i.jsx(l1, {
                        children: i.jsx(M, {
                            text: this.getDescription()
                        })
                    }), i.jsx("div", {
                        style: {
                            marginTop: 10
                        },
                        children: i.jsx(Ae, {
                            onClick: this.closeWithMovingForward,
                            type: "primary",
                            label: i.jsx(M, {
                                text: "Continue to Questions"
                            })
                        })
                    })]
                })
            }), i.jsx(s1, {
                visible: this.state.showConfetti,
                open: this.props.open,
                children: i.jsx(Ia, {
                    active: this.state.showConfetti,
                    config: K3
                })
            })]
        })
    }
};
es = o1([F("upgrades", "balance"), D], es);
class d1 extends w.Component {
    constructor() {
        super(...arguments), this.getCircleColor = () => this.props.alreadyPurchased ? "gray" : this.props.canAfford ? "green" : "red", this.changeLevel = () => this.props.changeLevel(this.props.level)
    }
    render() {
        return i.jsx(u1, {
            onMouseDown: this.changeLevel,
            chosen: this.props.chosen,
            children: i.jsx(nt, {
                mode: "single",
                max: 30,
                paddingHorizontal: 10,
                text: i.jsxs(p1, {
                    children: [i.jsx("div", {
                        style: {
                            color: this.getCircleColor(),
                            marginRight: 3
                        },
                        children: i.jsx(le, {
                            name: "fas fa-circle"
                        })
                    }), i.jsx("div", {
                        children: i.jsx(M, {
                            text: "Level " + this.props.level
                        })
                    })]
                })
            })
        })
    }
}
const u1 = k.div`
  width: 20%;
  height: 50%;
  border-style: solid;
  border-width: 0.17em;
  box-sizing: border-box;
  display: flex;
  border-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${e=>e.chosen?"#28004c":"#0D0019"};
  color: ${$.White};
  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    border-right-style: none;
    border-bottom-style: none;
  }
  &:nth-child(5) {
    border-bottom-style: none;
  }
  &:nth-child(6),
  :nth-child(7),
  :nth-child(8),
  :nth-child(9) {
    border-right-style: none;
  }
`,
    p1 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`;
var f1 = Object.getOwnPropertyDescriptor,
    h1 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? f1(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const m1 = k.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
let ts = class extends w.Component {
    constructor() {
        super(...arguments), this.changeLevel = e => {
            e !== this.props.active && (Qa.play(), this.props.upgrades.upgradeLevelTabs[zt(this.props.upgrades.currentlySelectedUpgrade)] = e)
        }, this.currentLevel = () => this.props.upgrades.upgradeLevels[zt(this.props.upgrades.currentlySelectedUpgrade)], this.getNextPosition = e => {
            const t = this.props.active;
            return e === "left" && t !== 1 && t !== 6 ? t - 1 : e === "right" && t !== 5 && t !== 10 ? t + 1 : e === "up" && t - 5 > 0 ? t - 5 : e === "down" && t + 5 < 11 ? t + 5 : t
        }, this.handleKeyDown = ({
            keyCode: e = 0
        }) => {
            (e === 37 || e === 65) && this.changeLevel(this.getNextPosition("left")), (e === 38 || e === 87) && this.changeLevel(this.getNextPosition("up")), (e === 39 || e === 68) && this.changeLevel(this.getNextPosition("right")), (e === 40 || e === 83) && this.changeLevel(this.getNextPosition("down"))
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown)
    }
    render() {
        const e = this.currentLevel();
        return i.jsx(m1, {
            children: this.props.levels.map((t, n) => i.jsx(d1, {
                level: n + 1,
                changeLevel: this.changeLevel,
                chosen: n + 1 === this.props.active,
                canAfford: this.props.balance.balance >= Ka(t.price),
                alreadyPurchased: e >= n + 1
            }, t.value))
        })
    }
};
ts = h1([F("upgrades", "balance"), D], ts);
var g1 = Object.getOwnPropertyDescriptor,
    v1 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? g1(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const x1 = k.div`
  height: 100%;
  width: 100%;
  background: ${$.BackgroundGray};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
let rs = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            purchased: !1
        }, this.closeModal = e => {
            this.setState({
                purchased: !1
            }, () => e ? setTimeout(() => ee(L.questions), 300) : null)
        }, this.markAsPurchased = () => this.setState({
            purchased: !0
        })
    }
    render() {
        const e = this.props.upgrades.upgrades.filter(n => n.name === this.props.upgrades.currentlySelectedUpgrade)[0],
            t = this.props.upgrades.upgradeLevelTabs[zt(this.props.upgrades.currentlySelectedUpgrade)];
        return i.jsxs(x1, {
            children: [i.jsx(Zo, {
                onPurchase: this.markAsPurchased
            }), i.jsx(ts, {
                levels: e.levels,
                active: t
            }), i.jsx(es, {
                open: this.state.purchased,
                onContinue: this.closeModal
            })]
        })
    }
};
rs = v1([F("upgrades"), D], rs);
var un = {
        exports: {}
    },
    pn = {
        exports: {}
    },
    fn = {
        exports: {}
    },
    ua;

function y1() {
    return ua || (ua = 1, function(e, t) {
        t.__esModule = !0, t.default = n;

        function n(o, r) {
            return o.classList ? !!r && o.classList.contains(r) : (" " + (o.className.baseVal || o.className) + " ").indexOf(" " + r + " ") !== -1
        }
        e.exports = t.default
    }(fn, fn.exports)), fn.exports
}
var pa;

function C1() {
    return pa || (pa = 1, function(e, t) {
        var n = ks();
        t.__esModule = !0, t.default = r;
        var o = n(y1());

        function r(s, a) {
            s.classList ? s.classList.add(a) : (0, o.default)(s, a) || (typeof s.className == "string" ? s.className = s.className + " " + a : s.setAttribute("class", (s.className && s.className.baseVal || "") + " " + a))
        }
        e.exports = t.default
    }(pn, pn.exports)), pn.exports
}
var ro, fa;

function b1() {
    if (fa) return ro;
    fa = 1;

    function e(t, n) {
        return t.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    return ro = function(n, o) {
        n.classList ? n.classList.remove(o) : typeof n.className == "string" ? n.className = e(n.className, o) : n.setAttribute("class", e(n.className && n.className.baseVal || "", o))
    }, ro
}
var ha;

function w1() {
    return ha || (ha = 1, function(e, t) {
        t.__esModule = !0, t.default = void 0, c(kt());
        var n = a(C1()),
            o = a(b1()),
            r = a(ze()),
            s = a(_s());

        function a(y) {
            return y && y.__esModule ? y : {
                default: y
            }
        }

        function c(y) {
            if (y && y.__esModule) return y;
            var C = {};
            if (y != null) {
                for (var p in y)
                    if (Object.prototype.hasOwnProperty.call(y, p)) {
                        var u = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(y, p) : {};
                        u.get || u.set ? Object.defineProperty(C, p, u) : C[p] = y[p]
                    }
            }
            return C.default = y, C
        }

        function d() {
            return d = Object.assign || function(y) {
                for (var C = 1; C < arguments.length; C++) {
                    var p = arguments[C];
                    for (var u in p) Object.prototype.hasOwnProperty.call(p, u) && (y[u] = p[u])
                }
                return y
            }, d.apply(this, arguments)
        }

        function l(y, C) {
            y.prototype = Object.create(C.prototype), y.prototype.constructor = y, y.__proto__ = C
        }
        var f = function(C, p) {
                return C && p && p.split(" ").forEach(function(u) {
                    return (0, n.default)(C, u)
                })
            },
            g = function(C, p) {
                return C && p && p.split(" ").forEach(function(u) {
                    return (0, o.default)(C, u)
                })
            },
            b = function(y) {
                l(C, y);

                function C() {
                    for (var u, m = arguments.length, h = new Array(m), x = 0; x < m; x++) h[x] = arguments[x];
                    return u = y.call.apply(y, [this].concat(h)) || this, u.onEnter = function(S, P) {
                        var B = u.getClassNames(P ? "appear" : "enter"),
                            _ = B.className;
                        u.removeClasses(S, "exit"), f(S, _), u.props.onEnter && u.props.onEnter(S, P)
                    }, u.onEntering = function(S, P) {
                        var B = u.getClassNames(P ? "appear" : "enter"),
                            _ = B.activeClassName;
                        u.reflowAndAddClass(S, _), u.props.onEntering && u.props.onEntering(S, P)
                    }, u.onEntered = function(S, P) {
                        var B = u.getClassNames("appear").doneClassName,
                            _ = u.getClassNames("enter").doneClassName,
                            R = P ? B + " " + _ : _;
                        u.removeClasses(S, P ? "appear" : "enter"), f(S, R), u.props.onEntered && u.props.onEntered(S, P)
                    }, u.onExit = function(S) {
                        var P = u.getClassNames("exit"),
                            B = P.className;
                        u.removeClasses(S, "appear"), u.removeClasses(S, "enter"), f(S, B), u.props.onExit && u.props.onExit(S)
                    }, u.onExiting = function(S) {
                        var P = u.getClassNames("exit"),
                            B = P.activeClassName;
                        u.reflowAndAddClass(S, B), u.props.onExiting && u.props.onExiting(S)
                    }, u.onExited = function(S) {
                        var P = u.getClassNames("exit"),
                            B = P.doneClassName;
                        u.removeClasses(S, "exit"), f(S, B), u.props.onExited && u.props.onExited(S)
                    }, u.getClassNames = function(S) {
                        var P = u.props.classNames,
                            B = typeof P == "string",
                            _ = B && P ? P + "-" : "",
                            R = B ? _ + S : P[S],
                            O = B ? R + "-active" : P[S + "Active"],
                            A = B ? R + "-done" : P[S + "Done"];
                        return {
                            className: R,
                            activeClassName: O,
                            doneClassName: A
                        }
                    }, u
                }
                var p = C.prototype;
                return p.removeClasses = function(m, h) {
                    var x = this.getClassNames(h),
                        S = x.className,
                        P = x.activeClassName,
                        B = x.doneClassName;
                    S && g(m, S), P && g(m, P), B && g(m, B)
                }, p.reflowAndAddClass = function(m, h) {
                    h && (m && m.scrollTop, f(m, h))
                }, p.render = function() {
                    var m = d({}, this.props);
                    return delete m.classNames, r.default.createElement(s.default, d({}, m, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited
                    }))
                }, C
            }(r.default.Component);
        b.defaultProps = {
            classNames: ""
        }, b.propTypes = {};
        var v = b;
        t.default = v, e.exports = t.default
    }(un, un.exports)), un.exports
}
var hn = {
        exports: {}
    },
    ma;

function k1() {
    return ma || (ma = 1, function(e, t) {
        t.__esModule = !0, t.default = void 0, s(kt());
        var n = s(ze()),
            o = Pa(),
            r = s(Bs());

        function s(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        }

        function a(f, g) {
            if (f == null) return {};
            var b = {},
                v = Object.keys(f),
                y, C;
            for (C = 0; C < v.length; C++) y = v[C], !(g.indexOf(y) >= 0) && (b[y] = f[y]);
            return b
        }

        function c(f, g) {
            f.prototype = Object.create(g.prototype), f.prototype.constructor = f, f.__proto__ = g
        }
        var d = function(f) {
            c(g, f);

            function g() {
                for (var v, y = arguments.length, C = new Array(y), p = 0; p < y; p++) C[p] = arguments[p];
                return v = f.call.apply(f, [this].concat(C)) || this, v.handleEnter = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onEnter", 0, m)
                }, v.handleEntering = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onEntering", 0, m)
                }, v.handleEntered = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onEntered", 0, m)
                }, v.handleExit = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onExit", 1, m)
                }, v.handleExiting = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onExiting", 1, m)
                }, v.handleExited = function() {
                    for (var u = arguments.length, m = new Array(u), h = 0; h < u; h++) m[h] = arguments[h];
                    return v.handleLifecycle("onExited", 1, m)
                }, v
            }
            var b = g.prototype;
            return b.handleLifecycle = function(y, C, p) {
                var u, m = this.props.children,
                    h = n.default.Children.toArray(m)[C];
                h.props[y] && (u = h.props)[y].apply(u, p), this.props[y] && this.props[y]((0, o.findDOMNode)(this))
            }, b.render = function() {
                var y = this.props,
                    C = y.children,
                    p = y.in,
                    u = a(y, ["children", "in"]),
                    m = n.default.Children.toArray(C),
                    h = m[0],
                    x = m[1];
                return delete u.onEnter, delete u.onEntering, delete u.onEntered, delete u.onExit, delete u.onExiting, delete u.onExited, n.default.createElement(r.default, u, p ? n.default.cloneElement(h, {
                    key: "first",
                    onEnter: this.handleEnter,
                    onEntering: this.handleEntering,
                    onEntered: this.handleEntered
                }) : n.default.cloneElement(x, {
                    key: "second",
                    onEnter: this.handleExit,
                    onEntering: this.handleExiting,
                    onEntered: this.handleExited
                }))
            }, g
        }(n.default.Component);
        d.propTypes = {};
        var l = d;
        t.default = l, e.exports = t.default
    }(hn, hn.exports)), hn.exports
}
var no, ga;

function P1() {
    if (ga) return no;
    ga = 1;
    var e = r(w1()),
        t = r(k1()),
        n = r(Bs()),
        o = r(_s());

    function r(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    return no = {
        Transition: o.default,
        TransitionGroup: n.default,
        ReplaceTransition: t.default,
        CSSTransition: e.default
    }, no
}
var va = P1();
const S1 = () => "👏",
    T1 = () => Td;
var B1 = Object.getOwnPropertyDescriptor,
    E1 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? B1(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const _1 = k.div`
  height: 20vh;
  box-shadow: ${be.basic};
  background: ${$.White};
  width: 100%;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.21s;
  box-sizing: border-box;
  &:hover {
    background: ${e=>e.theme.question.background};
    color: ${e=>e.theme.question.text};
  }
`;
let _n = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            clapCount: 0
        }, this.onClap = () => {
            const e = this.props.powerups.activePowerups.includes(V.clapMultiplier) ? 10 : 1;
            T1().play(), oe(ne.clap, {
                amount: e
            }), this.setState({
                clapCount: this.state.clapCount + e
            })
        }
    }
    render() {
        return this.props.gameOptions.clapping ? i.jsx(_1, {
            onClick: this.onClap,
            children: i.jsx(nt, {
                max: 75,
                text: i.jsxs("div", {
                    className: "animated pulse infinite",
                    children: [S1(), " ", ge(this.state.clapCount)]
                })
            })
        }) : null
    }
};
_n = E1([F("gameOptions", "powerups"), D], _n);
const R1 = k.div`
  box-sizing: border-box;
  background: ${$.White};
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,
    j1 = k.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`,
    O1 = k.div`
  height: 72px;
  width: 100%;
  color: ${e=>e.customColor?e.customColor:$.Black};
`,
    Jt = e => i.jsxs(R1, {
        children: [i.jsx(j1, {
            children: e.tagline
        }), i.jsx(O1, {
            customColor: e.customColor,
            children: i.jsx(nt, {
                paddingHorizontal: 10,
                paddingVertical: 0,
                max: 72,
                text: e.amount
            })
        })]
    }),
    M1 = e => {
        const t = e % 10,
            n = e % 100;
        return t === 1 && n !== 11 ? e + "st" : t === 2 && n !== 12 ? e + "nd" : t === 3 && n !== 13 ? e + "rd" : e + "th"
    },
    D1 = k.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${$.White};
  box-shadow: ${be.basic};
  border-radius: 8px;
  margin-bottom: 5px;
  animation-delay: 7s;
`,
    I1 = D(e => {
        const [t, n] = w.useState(!1), {
            user: o
        } = w.useContext(K);
        return w.useEffect(() => {
            setTimeout(() => {
                n(!0)
            }, 7.1 * 1e3)
        }, []), i.jsxs(D1, {
            children: [i.jsx(Ia, {
                active: t,
                config: {
                    ...K3,
                    angle: 270
                }
            }), i.jsx(nt, {
                customClass: "animated fadeIn",
                customStyle: {
                    animationDelay: "7s"
                },
                max: 250,
                text: e.customText || M1(o.place) + "!"
            })]
        })
    }),
    $1 = D(() => {
        const {
            imposter: e
        } = w.useContext(K), t = e.impostersLeft >= 1, n = sr(e.epl) || [], o = () => Ja(n.filter(r => r.role === dt.imposter).map(r => r.name));
        return w.useEffect(() => {
            oe(ne.imposter.requestPeople)
        }, []), i.jsx(N1, {
            children: i.jsxs(L1, {
                children: [i.jsx(A1, {
                    children: i.jsx(nt, {
                        max: 120,
                        paddingVertical: 0,
                        paddingHorizontal: 0,
                        text: `${t?"Impostors":"Crewmates"} Win`
                    })
                }), i.jsxs(z1, {
                    children: [i.jsx(W1, {
                        style: {
                            background: t ? "#d32f2f" : "#4caf50"
                        }
                    }), i.jsx(F1, {
                        children: i.jsx(U1, {
                            src: H(t ? "astronaut2.svg" : "astronaut.svg")
                        })
                    })]
                }), i.jsxs(q1, {
                    children: [i.jsxs("b", {
                        children: [nr("Impostor", n.filter(r => r.role === dt.imposter).length), ":"]
                    }), " ", o()]
                })]
            })
        })
    }),
    N1 = k.div.attrs({
        className: "flex hc maxWidth maxHeight scroll-y"
    })`
  background: ${$.Black};
  color: ${$.White};
  align-items: flex-start;
`,
    L1 = k.div.attrs({
        className: "flex flex-column vc animated fadeIn"
    })`
  animation-duration: 12s;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
  width: 80%;
  max-width: 500px;
`,
    A1 = k.div.attrs({
        className: "maxWidth"
    })`
  height: 77px;
  font-weight: 700;
`,
    z1 = k.div`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`,
    W1 = k.div.attrs({
        className: "maxWidth maxHeight animated pulse infinite"
    })`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`,
    F1 = k.div.attrs({
        className: "flex maxWidth hc vc"
    })`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,
    U1 = k.img`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`,
    q1 = k.div`
  font-size: 24px;
`,
    G1 = k.div.attrs({
        className: "scroll-y"
    })`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${H("background.png")}) repeat 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${()=>Fr()};
`,
    H1 = k.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  max-width: 700px;
  animation-delay: ${e=>e.animationDelay}s;
  animation-duration: 7s;
`,
    V1 = e => {
        const t = (r, s) => (Math.pow(10, s) + ~~r).toString().substring(1),
            n = Math.floor(e / 60),
            o = e % 60;
        return `${t(n,2)}:${t(o,2)}`
    },
    Q1 = D(() => {
        const {
            entities: {
                lava: e
            },
            balance: t,
            questions: n
        } = w.useContext(K);
        if (ve()) return i.jsx($1, {});
        let o = 0;
        return Xd() && (o = 11), Tt() && (o = 17), Xe() && (o = 16), e && (o = 13), i.jsx(G1, {
            children: i.jsxs(H1, {
                className: "animated zoomInDown",
                animationDelay: o,
                children: [i.jsx(I1, {
                    customText: e ? "🌋 Game Over!" : Tt() ? ki().text : null
                }), Tt() ? ki().won ? i.jsx(_n, {}) : null : i.jsx(_n, {}), e ? i.jsxs(i.Fragment, {
                    children: [i.jsx(Jt, {
                        customColor: "#1B5E20",
                        amount: V1(e.secondsLasted),
                        tagline: i.jsx(M, {
                            text: "Lava Survival Time"
                        })
                    }), i.jsx(Jt, {
                        amount: `${ge(e.buildHeight)} ${Cn("block",e.buildHeight)}`,
                        tagline: i.jsx(M, {
                            text: "Building Height"
                        })
                    }), i.jsx(Jt, {
                        amount: `${ge(e.buildPieces)} ${Cn("piece",e.buildPieces)}`,
                        tagline: i.jsx(M, {
                            text: "Building Pieces"
                        })
                    })]
                }) : null, i.jsx(Jt, {
                    amount: xe(t.balance),
                    tagline: i.jsx(M, {
                        text: Wt() ? "Final Score" : "Final Balance"
                    })
                }), !Wt() && i.jsxs(i.Fragment, {
                    children: [i.jsx(Jt, {
                        customColor: "#1B5E20",
                        amount: ge(n.questionsAnsweredCorrectly),
                        tagline: i.jsx(M, {
                            text: "Questions Answered Correctly"
                        })
                    }), i.jsx(Jt, {
                        customColor: "#DD2C00",
                        amount: ge(n.questionsAnsweredIncorrectly),
                        tagline: i.jsx(M, {
                            text: "Questions Answered Incorrectly"
                        })
                    })]
                }), !Tt() && !e && i.jsx(Ir, {
                    showSelf: !0
                })]
            })
        })
    }),
    Z3 = k.div`
  font-size: 34px;
  font-weight: bold;
`,
    ec = k.div`
  font-size: 21px;
  margin-bottom: 7px;
`,
    tc = k.div`
  padding: 20px;
  margin: 15px;
  box-shadow: ${be.basic};
  background: ${$.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
`;
var Y1 = Object.getOwnPropertyDescriptor,
    X1 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? Y1(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const J1 = k(tc)`
  @media (min-width: 760px) and (min-height: 719px) {
    transform: scale(1.5);
  }
`,
    K1 = k.div`
  background: ${e=>e.background};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let ns = class extends w.Component {
    componentDidMount() {
        bs(() => this.props.gameValues.gameStatus === $e.gameplay, () => $s())
    }
    render() {
        const {
            user: e
        } = this.props, t = e.team && e.team.meta && e.team.meta.isBoss;
        return i.jsx(K1, {
            background: Ms(),
            children: i.jsx(J1, {
                children: e.team ? i.jsxs(i.Fragment, {
                    children: [t ? i.jsx("img", {
                        src: H("power-fight.svg"),
                        style: {
                            width: "40%"
                        }
                    }) : i.jsx("img", {
                        src: H("team.svg"),
                        style: {
                            width: "60%"
                        }
                    }), i.jsx(Z3, {
                        children: i.jsx(M, {
                            text: Os(e.team.id)
                        })
                    }), i.jsx(ec, {
                        children: t ? i.jsx(M, {
                            text: "You're the boss. Ready to face the challengers?"
                        }) : Tt() ? i.jsx(M, {
                            text: "Get ready for battle!"
                        }) : i.jsx(M, {
                            text: "Go find the rest of your team!"
                        })
                    })]
                }) : i.jsx($a, {})
            })
        })
    }
};
ns = X1([F("user", "gameValues"), D], ns);
const Z1 = D(() => {
    const {
        questions: e,
        balance: t,
        gameOptions: n,
        user: o,
        translations: r,
        imposter: s,
        theme: a
    } = tr.useContext(K);
    tr.useEffect(() => (e.lockedViewingCorrectAnswer = !1, () => {
        e.lockedViewingCorrectAnswer = !1
    }), []);
    const c = y => ve() ? `${y<=0?"-":"+"}${ge(Math.round(Math.abs(y)))}` : `${y>0?"+":""}${xe(y)}`,
        d = () => {
            const y = [];
            return e.lastQuestionCorrect && (In() || y.push({
                handleClick: () => ee(L.shop),
                background: a.theme.response.shop.background,
                text: Za()
            })), y
        },
        l = () => {
            const y = Is().find(C => C._id === e.lastQuestion);
            return y || null
        },
        f = () => {
            const y = l();
            if (!y) return null;
            let C = y.answers.find(p => p.correct);
            return C || (C = {
                text: "No Correct Answer",
                correct: !1,
                _id: "no-correct-answer"
            }), C
        },
        g = y => Fd(y),
        b = () => {
            e.transitioningToNextQuestion = !1
        },
        v = y => {
            e.lockedViewingCorrectAnswer = y
        };
    return i.jsx(Ba, {
        continueAction: b,
        ecc: e.ceq,
        lastQuestion: l(),
        lastQuestionCorrectAnswer: f(),
        lastQuestionAnsweredCorrect: e.lastQuestionCorrect,
        onQuestionAnswered: g,
        nextQuestion: e.nextQuestion,
        responseActions: d(),
        textShownWhenAnsweringCorrectly: c(t.balanceChangeIfCorrect),
        textShownWhenAnsweringIncorrectly: c(t.balanceChangeIfIncorrect),
        correctSound: ve() ? jd : yd,
        incorrectSound: Cd,
        onActionSound: jn,
        language: n.language,
        translations: r.translations,
        allowGoogleTranslate: n.allowGoogleTranslate,
        readToMeEnabled: o.readToMeEnabled,
        blockKeyboardEvents: s.noteDrawerOpen,
        defaultBackgroundColor: a.theme.defaultBackground,
        continueButtonColor: a.theme.response.continue,
        answerColors: a.theme.palette,
        questionColor: a.theme.question,
        textInputButtonColor: a.theme.palette[2],
        correctAnswerColor: ve() ? {
            background: de.Black,
            text: "#ffeb3b"
        } : a.theme.response.correctAnswer,
        incorrectAnswerColor: a.theme.response.incorrectAnswer,
        onLockedChange: v
    })
});
var e8 = Object.getOwnPropertyDescriptor,
    t8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? e8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const r8 = e => new Promise(t => setTimeout(t, e)),
    n8 = k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${$.Black};
`,
    o8 = k.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
url("${e=>e.backgroundImage}");
  background-size: cover;
  background-position: center;
  color: ${$.White};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,
    s8 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 736px) and (min-height: 483px) {
    transform: scale(1.4);
  }
  font-weight: bold;
`,
    i8 = k.div`
  font-size: 37px;
  margin-bottom: 3px;
`,
    a8 = k.div`
  font-size: 20px;
  opacity: 0.8;
`,
    c8 = k.div`
  font-size: 23px;
`;
let os = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            secondsPassed: 0
        }, this.mounted = !1, this.beginCountdown = async () => {
            for (let e = 0; e < 15; e++) await r8(1e3), this.addSecond();
            this.mounted && this.setState({
                secondsPassed: 0
            })
        }, this.addSecond = () => {
            this.mounted && this.setState({
                secondsPassed: this.state.secondsPassed + 1
            })
        }, this.secondsLeft = () => 15 - this.state.secondsPassed
    }
    componentDidMount() {
        this.mounted = !0, this.beginCountdown(), D2()
    }
    componentWillUnmount() {
        this.mounted = !1
    }
    render() {
        const e = this.secondsLeft();
        return i.jsx(n8, {
            children: i.jsx(o8, {
                backgroundImage: M2(),
                children: i.jsxs(s8, {
                    children: [i.jsx(i8, {
                        children: $2()
                    }), i.jsxs(a8, {
                        children: [I2(), " by ", this.props.powerups.screenAttack.attackerName]
                    }), i.jsx("i", {
                        style: {
                            color: N2(),
                            fontSize: 95,
                            marginTop: 10,
                            marginBottom: 10
                        },
                        className: `${L2()} animated pulse infinite`
                    }), i.jsxs(c8, {
                        children: ["Wait ", e, " ", "second" + (e === 1 ? "" : "s")]
                    })]
                })
            })
        })
    }
};
os = t8([F("powerups")], os);
var l8 = Object.getOwnPropertyDescriptor,
    d8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? l8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let ss = class extends w.Component {
    render() {
        return this.props.powerups.screenAttack.powerupName && this.props.powerups.screenAttack.attackerName && this.props.powerups.screenAttack.fullScreen ? i.jsx(os, {}) : null
    }
};
ss = d8([F("powerups"), D], ss);
var u8 = Object.getOwnPropertyDescriptor,
    p8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? u8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const qs = 1.2,
    f8 = {
        show: {
            opacity: 1,
            transition: {
                staggerChildren: qs
            }
        },
        hidden: {
            opacity: 1
        }
    },
    h8 = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    },
    Kt = e => i.jsx(ke.div, {
        variants: h8,
        initial: "hidden",
        transition: {
            duration: qs
        },
        children: i.jsx(a3, {
            color: {
                text: $.White,
                background: e.color
            },
            icon: "far fa-gem"
        })
    }),
    m8 = k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${$.Black};
  color: ${$.White};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
`,
    g8 = k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 736px) and (min-height: 483px) {
    transform: scale(1.4);
  }
`,
    mn = k.div`
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,
    oo = e => {
        let t = "";
        return e.forEach((n, o) => {
            t += n, o + 1 !== e.length && (t += ", ")
        }), t
    };
let is = class extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            stage: "Winner",
            secondsLeft: 0,
            showStones: !1
        }, this.getContent = () => {
            const {
                thanosValues: e
            } = this.props.gameValues;
            if (this.state.stage === "Waiting") return i.jsx("div", {
                children: i.jsxs(mn, {
                    className: "animated fadeIn",
                    children: [i.jsx("div", {
                        style: {
                            fontSize: 25
                        },
                        children: "The snap is about to happen..."
                    }), i.jsxs("b", {
                        style: {
                            fontSize: 119
                        },
                        children: ["0:", this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft]
                    })]
                })
            }, "2");
            if (this.state.stage === "Results Showing") return i.jsx(mn, {
                children: i.jsx("div", {
                    style: {
                        fontSize: 25,
                        textAlign: "center",
                        maxWidth: 500
                    },
                    children: "Look up! The snap results are showing..."
                })
            });
            if (this.state.stage === "Result") {
                const t = Ls();
                let n = !0,
                    o = "You Got Snapped!",
                    r = "";
                return e.saved.map(s => s.id).includes(t) ? (n = !1, o = "You Survived The Snap!", r = `You survived along with ${oo(e.saved.filter(a=>a.id!==t).map(a=>a.name))}`) : e.winner.id === t ? (n = !1, o = "You Won!", r = `You snapped ${oo(e.snapped.map(s=>s.name))}`) : r = `You got snapped along with ${oo(e.snapped.filter(s=>s.id!==t).map(s=>s.name))}`, i.jsx("div", {
                    children: i.jsxs(mn, {
                        style: {
                            animationDuration: "22s"
                        },
                        className: n ? "animated fadeOut" : "",
                        children: [i.jsx("b", {
                            style: {
                                fontSize: 46,
                                textAlign: "center"
                            },
                            children: o
                        }), i.jsx("div", {
                            style: {
                                margin: 10,
                                maxWidth: 500,
                                textAlign: "center"
                            },
                            children: r
                        })]
                    })
                }, "3")
            }
            return this.state.stage === "Winner" ? i.jsx("div", {
                children: i.jsxs(mn, {
                    className: "animated fadeIn",
                    children: [i.jsx("b", {
                        style: {
                            fontSize: 43
                        },
                        children: e.winner.name
                    }), i.jsx("div", {
                        style: {
                            fontSize: 25
                        },
                        children: "acquired all 6 Infinity Stones"
                    }), i.jsx("div", {
                        style: {
                            height: 10
                        }
                    }), i.jsxs(ke.div, {
                        animate: this.state.showStones ? "show" : "hidden",
                        style: {
                            display: "flex"
                        },
                        variants: f8,
                        children: [i.jsx(Kt, {
                            color: "#f4511e"
                        }), i.jsx(Kt, {
                            color: "#388e3c"
                        }), i.jsx(Kt, {
                            color: "#1976d2"
                        }), i.jsx(Kt, {
                            color: "#ffcc80"
                        }), i.jsx(Kt, {
                            color: "#d32f2f"
                        }), i.jsx(Kt, {
                            color: "#4527a0"
                        })]
                    })]
                })
            }, "1") : null
        }
    }
    componentDidMount() {
        Mn(!1, !0), setTimeout(() => this.setState({
            showStones: !0
        }), 1200), setTimeout(() => this.setState({
            stage: "Waiting"
        }), qs * 1e3 * 6 + 1200 + 3e3);
        const e = this.props.gameValues.thanosValues.showAt,
            t = setInterval(() => {
                const n = Math.round((e - Date.now()) / 1e3);
                if (n <= 0) {
                    this.setState({
                        stage: "Results Showing"
                    }), setTimeout(() => this.setState({
                        stage: "Result"
                    }), (this.props.gameValues.thanosValues.saved.length + this.props.gameValues.thanosValues.snapped.length) * 4e3), clearInterval(t);
                    return
                }
                this.setState({
                    secondsLeft: n
                })
            }, 200)
    }
    render() {
        return i.jsx(m8, {
            children: i.jsx(g8, {
                children: this.getContent()
            })
        })
    }
};
is = p8([F("gameValues")], is);
var v8 = Object.getOwnPropertyDescriptor,
    x8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? v8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let as = class extends w.Component {
    render() {
        return this.props.gameValues.thanosValues ? i.jsx(is, {}) : null
    }
};
as = x8([F("gameValues"), D], as);
const rc = k.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${H("background.png")}) repeat 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var y8 = Object.getOwnPropertyDescriptor,
    C8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? y8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const b8 = () => window.location.reload();
let cs = class extends w.Component {
    constructor() {
        super(...arguments), this.handleClick = () => {
            if (this.props.gameValues.nonDismissMessage.link) {
                window.location.href = this.props.gameValues.nonDismissMessage.link;
                return
            }
            b8()
        }
    }
    render() {
        return i.jsx(rc, {
            children: i.jsxs(tc, {
                children: [i.jsx(Z3, {
                    children: i.jsx(M, {
                        text: this.props.gameValues.nonDismissMessage.title
                    })
                }), i.jsx(ec, {
                    children: i.jsx(M, {
                        text: this.props.gameValues.nonDismissMessage.message
                    })
                }), i.jsx(Ae, {
                    label: this.props.gameValues.nonDismissMessage.buttonText || "Join New Game",
                    onClick: this.handleClick,
                    type: "secondary"
                })]
            })
        })
    }
};
cs = C8([F("gameValues"), D], cs);
var w8 = Object.getOwnPropertyDescriptor,
    k8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? w8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let ls = class extends w.Component {
    render() {
        return this.props.ui.fullBlackScreen ? i.jsx(P8, {}) : null
    }
};
ls = k8([F("ui"), D], ls);
const P8 = k.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999999;
  background: ${$.Black};
`;

function S8() {
    var e = !0,
        t = document.getElementById("snow-canv");
    if (!t) return;
    for (var n = t.getContext("2d"), o = t.width = window.innerWidth, r = t.height = window.innerHeight, s, a = [], c = 29, d = 1, l = 1, f = 1.3, g = 20, b = 1, v = 0; v < c; ++v) s = new C, s.y = Math.random() * (r + 50), s.x = Math.random() * o, s.t = Math.random() * (Math.PI * 2), s.sz = 100 / (10 + Math.random() * 100) * f, s.sp = Math.pow(s.sz * .8, 2) * .15 * l, s.sp = s.sp < b ? b : s.sp, a.push(s);
    y();

    function y() {
        if (e) {
            window.requestAnimationFrame(y), n.clearRect(0, 0, o, r), n.fillRect(0, 0, o, r), n.fill();
            for (var p = 0; p < a.length; ++p) {
                var u = a[p];
                u.t += .05, u.t = u.t >= Math.PI * 2 ? 0 : u.t, u.y += u.sp, u.x += Math.sin(u.t * d) * (u.sz * .3), u.y > r + 50 && (u.y = -10 - Math.random() * g), u.x > o + g && (u.x = -g), u.x < -g && (u.x = o + g), u.draw()
            }
        }
    }

    function C() {
        this.draw = function() {
            this.g = n.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, "hsla(255,255%,255%,1)"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), n.moveTo(this.x, this.y), n.fillStyle = this.g, n.beginPath(), n.arc(this.x, this.y, this.sz, 0, Math.PI * 2, !0), n.fill()
        }
    }
    lt(() => T.ui.isSnowing, () => {
        const p = T.ui.isSnowing;
        !e && p ? (e = p, y()) : e = p
    })
}
class T8 extends w.Component {
    constructor() {
        super(...arguments), this.state = {
            hasShown: !1
        }
    }
    componentDidUpdate(t) {
        this.state.hasShown || !t.isSnowing && this.props.isSnowing && (this.setState({
            hasShown: !0
        }), S8())
    }
    render() {
        return i.jsx("canvas", {
            style: {
                position: "absolute",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                pointerEvents: "none",
                display: this.props.isSnowing ? "initial" : "none"
            },
            id: "snow-canv"
        })
    }
}
var B8 = Object.getOwnPropertyDescriptor,
    E8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? B8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let ds = class extends w.Component {
    render() {
        return i.jsx(T8, {
            isSnowing: this.props.ui.snowing
        })
    }
};
ds = E8([F("ui"), D], ds);
var _8 = Object.getOwnPropertyDescriptor,
    R8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? _8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let us = class extends w.Component {
    constructor() {
        super(...arguments), this.getImage = () => {
            const {
                status: t
            } = this.props.imposter;
            return t === Ke.discussion ? H("discussion.svg") : H("vote.svg")
        }, this.getTitle = () => {
            const {
                status: t
            } = this.props.imposter;
            return t === Ke.discussion ? "Discussion" : "Vote"
        }, this.getDescription = () => {
            const {
                status: t
            } = this.props.imposter;
            return t === Ke.discussion ? "Who is the impostor?" : "Vote out who you think the impostor is!"
        }
    }
    render() {
        return i.jsxs(j8, {
            children: [i.jsx(O8, {
                src: this.getImage()
            }), i.jsx(M8, {
                children: this.getTitle()
            }), i.jsx(D8, {
                children: this.getDescription()
            })]
        })
    }
};
us = R8([F("imposter"), D], us);
const j8 = k.div.attrs({
        className: "maxWidth flex flex-column vc"
    })``,
    O8 = k.img`
  max-width: 150px;
  margin-top: 15px;
`,
    M8 = k.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 50px;
`,
    D8 = k.div`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.9);
`,
    I8 = e => i.jsxs($8, {
        children: [i.jsxs(N8, {
            children: [i.jsx(L8, {
                style: {
                    color: e.nameColor || $.Black
                },
                children: e.name
            }), e.description && i.jsx(A8, {
                children: e.description
            })]
        }), e.button && i.jsx(z8, {
            children: i.jsx(Ae, {
                type: "primary",
                onClick: e.button.onClick,
                label: e.button.label,
                size: "small"
            })
        })]
    }),
    $8 = k.div.attrs({
        className: "flex vc light-shadow"
    })`
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: left;
  padding: 13px 20px;
  border-radius: 7px;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
`,
    N8 = k.div``,
    L8 = k.div`
  font-size: 22px;
  font-weight: 500;
  overflow-wrap: anywhere;
`,
    A8 = k.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`,
    z8 = k.div`
  flex-shrink: 0;
  margin-left: 10px;
`,
    Gs = D(e => {
        const {
            imposter: t
        } = w.useContext(K);
        w.useEffect(() => {
            oe(ne.imposter.requestPeople)
        }, []);
        const {
            showAction: n,
            actionText: o,
            onSelect: r
        } = e, {
            epl: s,
            me: a
        } = t, c = sr(s) || [];
        if (!a) return null;
        const d = a && a.role === dt.imposter;
        return i.jsx(W8, {
            children: c.filter(l => l.id === a.id || l.votedOff ? !1 : e.filter ? e.filter(l) : !0).map(l => i.jsx(I8, {
                name: l.name,
                nameColor: l.markedAsClear ? $.DarkSuccessGreen : l.role === dt.imposter && d ? "#c62828" : $.Black,
                description: l.markedAsClear ? "On the clear list" : l.role === dt.imposter && d ? "An Impostor" : void 0,
                button: n ? {
                    label: o,
                    onClick: () => r(l.id)
                } : null
            }, l.id))
        })
    }),
    W8 = k.div.attrs({
        className: "maxWidth"
    })``;
var F8 = Object.getOwnPropertyDescriptor,
    U8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? F8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let ps = class extends w.Component {
    constructor() {
        super(...arguments), this.vote = e => {
            On.play(), oe(ne.imposter.vote, e)
        }
    }
    render() {
        const {
            me: e
        } = this.props.imposter;
        return e && e.currentVote ? i.jsx(Cs, {
            type: "success",
            showIcon: !0,
            message: "Voted!",
            description: "Your vote is in!",
            style: {
                textAlign: "left",
                marginTop: 20
            }
        }) : i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
                style: {
                    marginTop: 25,
                    marginBottom: 20
                },
                className: "maxWidth",
                children: i.jsx(ut, {
                    children: "👩‍🚀 People"
                })
            }), i.jsx(Gs, {
                showAction: !0,
                actionText: "Vote",
                onSelect: this.vote
            })]
        })
    }
};
ps = U8([F("imposter"), D], ps);
var q8 = Object.getOwnPropertyDescriptor,
    G8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? q8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let fs = class extends w.Component {
    constructor() {
        super(...arguments), this.getContent = () => {
            const {
                me: e,
                status: t
            } = this.props.imposter;
            return e && e.votedOff ? i.jsx(Cs, {
                type: "warning",
                showIcon: !0,
                message: "Voted Off",
                description: "You've been voted off and cannot contribute.",
                style: {
                    textAlign: "left",
                    marginTop: 35
                }
            }) : i.jsxs(i.Fragment, {
                children: [i.jsx("div", {
                    style: {
                        marginTop: 25,
                        marginBottom: 20
                    },
                    className: "maxWidth",
                    children: i.jsxs(ut, {
                        children: [i.jsx("span", {
                            role: "img",
                            "aria-label": "notebook",
                            children: "📓"
                        }), " ", "Notebook"]
                    })
                }), i.jsx(Bn, {}), t === Ke.discussion ? i.jsxs(i.Fragment, {
                    children: [i.jsx("div", {
                        style: {
                            marginTop: 25,
                            marginBottom: 20
                        },
                        className: "maxWidth",
                        children: i.jsxs(ut, {
                            children: [i.jsx("span", {
                                role: "img",
                                "aria-label": "astronaut",
                                children: "👩‍🚀"
                            }), " ", "People"]
                        })
                    }), i.jsx(Gs, {})]
                }) : i.jsx(ps, {})]
            })
        }
    }
    render() {
        return i.jsx(H8, {
            children: i.jsx(V8, {
                children: i.jsxs(Q8, {
                    children: [i.jsx(us, {}), this.getContent()]
                })
            })
        })
    }
};
fs = G8([F("imposter"), D], fs);
const H8 = k.div.attrs({
        className: "maxWidth maxHeight flex hc"
    })``,
    V8 = k.div.attrs({
        className: "scroll-y"
    })`
  flex: 1;
`,
    Q8 = k.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 600px;
  background: ${$.White};
  color: ${$.Black};
`,
    xa = e => i.jsx(Y8, {
        children: i.jsx(X8, {
            children: i.jsx(M, {
                text: e.text
            })
        })
    }),
    Y8 = k.div.attrs({
        className: "flex hc vc maxWidth maxHeight"
    })``,
    X8 = k.div`
  background: rgba(97, 97, 97, 0.8);
  padding: 48px;
  border-radius: 8px;
  font-size: 22px;
  border-style: solid;
  border-color: #ff9800;
  border-width: 3px;
  margin: 30px;
`;
var J8 = Object.getOwnPropertyDescriptor,
    K8 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? J8(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let hs = class extends w.Component {
    constructor() {
        super(...arguments), this.getContent = () => {
            const {
                status: e
            } = this.props.imposter;
            return e === Ke.discussion || e === Ke.voting ? i.jsx(fs, {}) : e === Ke.votingResult ? i.jsx(xa, {
                text: "Look at your captain's screen for voting results."
            }) : e === Ke.intro ? i.jsx(xa, {
                text: "Look at your captain's screen for instructions."
            }) : (e == Ke.questions && ee(L.questions), null)
        }
    }
    render() {
        return i.jsx(Z8, {
            children: this.getContent()
        })
    }
};
hs = K8([F("imposter"), D], hs);
const Z8 = k.div`
  color: ${$.White};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Space Grotesk', monospace;
  background-size: cover;
  background-position: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1535007726788-fed8106a64cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80');
  text-align: center;
`,
    Hs = k.div`
  border: solid
    ${e=>e.borderWidth!==void 0?e.borderWidth:3}px
    ${$.Black};
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`,
    ef = e => {
        const t = e.text.split("");
        return i.jsx(i.Fragment, {
            children: i.jsx("span", {
                children: t.map((n, o) => {
                    const r = `letter-${o}`;
                    return n === " " && !e.noTimeLeft ? i.jsx(w.Fragment, {
                        children: "   "
                    }, r) : i.jsx(w.Fragment, {
                        children: n
                    }, r)
                })
            })
        })
    },
    tf = e => {
        const t = w.useRef(null),
            [n, o] = Fc(t),
            r = Uc(),
            s = Math.min(n / 4, o / 3),
            a = s * 4,
            c = s * 3,
            d = () => r < qe ? e.timeText : e.isDrawer ? "You're drawing..." : null,
            l = () => e.isDrawer ? e.hidingTerm ? "Term Hidden" : e.term : i.jsx(ef, {
                text: e.revealText,
                noTimeLeft: !e.secondsLeft
            }),
            f = () => e.isDrawer ? null : i.jsxs("span", {
                children: ["Drawer: ", i.jsx("b", {
                    children: e.drawerName
                })]
            }),
            g = d(),
            b = f();
        return i.jsx(rf, {
            children: i.jsxs(nf, {
                children: [i.jsxs(of, {
                    children: [g ? i.jsx(sf, {
                        children: g
                    }) : null, i.jsx(af, {
                        children: l()
                    })]
                }), i.jsx(cf, {
                    ref: t,
                    children: a && c ? i.jsx(Hs, {
                        style: {
                            width: a,
                            height: c
                        },
                        children: i.jsx($c, {
                            ref: e.canvasRef,
                            width: a,
                            height: c,
                            canEdit: e.canEdit,
                            color: e.color,
                            strokeWidth: e.brushSize,
                            emitLine: e.emitLine,
                            onLatestImage: e.emitImage,
                            initialImage: e.initialImage
                        })
                    }) : null
                }), b ? i.jsx(lf, {
                    children: b
                }) : null]
            })
        })
    },
    rf = k.div`
  flex: 1;
  overflow: hidden;
  @media (max-width: ${()=>qe}px) {
    overflow: visible;
    height: 60vh;
  }
`,
    nf = k.div.attrs({
        className: "maxWidth maxHeight flex flex-column vc"
    })`
  padding: 20px;
  max-height: 100%;
  overflow: hidden;
  @media (max-width: ${()=>qe}px) {
    padding: 20px 15px;
  }
`,
    of = k.div.attrs({
        className: "flex flex-column vc"
    })`
  margin-bottom: 10px;
  @media (max-width: ${()=>qe}px) {
    margin-bottom: 7px;
  }
`,
    sf = k.div`
  font-size: 23px;
  @media (max-width: ${()=>qe}px) {
    font-size: 18px;
  }
`,
    af = k.div`
  font-size: 41px;
  font-weight: ${Re.Bold};
  @media (max-width: ${()=>qe}px) {
    font-size: 32px;
  }
`,
    cf = k.div.attrs({
        className: "flex hc vc maxWidth"
    })`
  flex: 1;
  overflow: hidden;
`,
    lf = k.div`
  margin-top: 15px;
  font-size: 19px;
  @media (max-width: ${()=>qe}px) {
    display: none;
  }
`,
    nc = "#7cb342",
    oc = [$.Black, $.White, "#C1C1C1", "#EF130B", "#FF7100", "#FFE400", "#00CC00", "#00B2FF", "#231FD3", "#A300BA", "#D37CAA", "#A0522D"],
    sc = [5, 10, 20, 40],
    df = e => i.jsxs(i.Fragment, {
        children: [i.jsxs(uf, {
            children: [i.jsx(so, {
                children: "Color"
            }), i.jsx(io, {
                children: oc.map(t => i.jsx(pf, {
                    color: t,
                    selected: t === e.color,
                    onClick: () => {
                        en.play(), e.setColor(t)
                    }
                }, t))
            }), i.jsx(so, {
                children: "Brush Size"
            }), i.jsx(io, {
                children: sc.map(t => i.jsx(ff, {
                    onClick: () => {
                        en.play(), e.setBrushSize(t)
                    },
                    selected: t === e.brushSize,
                    children: i.jsx("div", {
                        style: {
                            width: t,
                            height: t,
                            borderRadius: "50%",
                            background: "black"
                        }
                    })
                }, `size-${t}`))
            }), i.jsx(so, {
                children: "Tools"
            }), i.jsxs(io, {
                children: [i.jsxs(ao, {
                    onClick: () => {
                        en.play(), e.undo()
                    },
                    children: [i.jsx(co, {
                        className: "fas fa-undo"
                    }), " Undo"]
                }), i.jsxs(ao, {
                    onClick: () => {
                        en.play(), e.clear()
                    },
                    children: [i.jsx(co, {
                        className: "far fa-trash"
                    }), " Clear"]
                }), i.jsxs(ao, {
                    onClick: () => {
                        e.setHidingTerm(!e.hidingTerm)
                    },
                    children: [i.jsx(co, {
                        className: e.hidingTerm ? "fas fa-eye" : "fas fa-eye-slash"
                    }), " ", e.hidingTerm ? "Show Term" : "Hide Term"]
                })]
            })]
        }), i.jsx(hf, {
            children: e.timeText
        })]
    }),
    uf = k.div`
  padding: 20px;
`,
    so = k.div`
  font-weight: ${Re.Bold};
  font-size: 34px;
`,
    io = k.div.attrs({
        className: "flex maxWidth wrap"
    })`
  margin-top: 5px;
  margin-bottom: 15px;
`,
    pf = k.div`
  background: ${e=>e.color};
  height: 50px;
  width: 50px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 50%;
  border-style: solid;
  border-width: ${e=>e.selected?4:2}px;
  border-color: ${e=>e.selected?nc:$.Black};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`,
    ff = k.div.attrs({
        className: "flex hc vc"
    })`
  height: 60px;
  width: 70px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: ${e=>e.selected?4:2}px;
  border-color: ${e=>e.selected?nc:$.Black};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`,
    ao = k.div.attrs({
        className: "flex hc vc"
    })`
  padding: 10px 20px;
  font-size: 20px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  border-color: ${$.Black};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`,
    co = k.i`
  margin-right: 10px;
`,
    hf = k.div`
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  margin-top: 30px;
  @media (max-width: ${()=>qe}px) {
    display: none;
  }
`,
    mf = 200,
    gf = e => {
        const {
            name: t,
            action: n,
            translateAllowed: o,
            nameColor: r,
            actionColor: s,
            important: a
        } = e.item, c = a && n && !t;
        return i.jsxs("div", {
            style: {
                fontSize: 17
            },
            children: [t && i.jsxs(i.Fragment, {
                children: [i.jsx("b", {
                    style: {
                        color: r || $.Black
                    },
                    children: t
                }), " "]
            }), n && i.jsx("span", {
                style: {
                    color: s || $.Black,
                    fontWeight: c ? "bold" : "normal"
                },
                children: o ? i.jsx(M, {
                    text: n
                }) : n
            })]
        })
    },
    vf = D(() => {
        const e = w.useRef(null),
            [t, n] = w.useState([]),
            {
                draw: o
            } = w.useContext(K),
            r = a => {
                a.important ? n(c => [...c, a]) : s(a)
            },
            s = Le.debounce(a => {
                n(c => [...c, a])
            }, mf);
        return w.useEffect(() => {
            const a = lt(() => o.latestFeedItem, c => {
                c && r({
                    ...c,
                    id: Date.now().toString() + Math.random().toString()
                })
            });
            return () => a()
        }, []), w.useEffect(() => {
            e.current && (e.current.scrollTop = e.current.scrollHeight)
        }, [t.length]), i.jsx(xf, {
            ref: e,
            children: Le.takeRight(t, 60).map(a => i.jsx(gf, {
                item: a
            }, `guess-item-${a.id}`))
        })
    }),
    xf = k.div.attrs({
        className: "flex flex-column"
    })`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15px;
`,
    ya = 21,
    yf = e => e.length !== 1 ? !1 : !!(e === " " || e === "." || e === "," || !isNaN(Number(e)) || e.match(/[a-z]/i)),
    Cf = D(e => {
        const t = w.useRef(null),
            [n, o] = w.useState(""),
            {
                gameOptions: {
                    modeOptions: r
                }
            } = w.useContext(K),
            s = b => {
                o(b.target.value)
            };
        w.useEffect(() => {
            e.guessedCorrectly && o("")
        }, [e.guessedCorrectly]), w.useEffect(() => {
            e.secondsLeft === 0 && o("")
        }, [e.secondsLeft]);
        const a = w.useMemo(() => {
                const b = e.term.split("");
                return Le.uniq(b.filter(v => !yf(v)))
            }, [e.term]),
            c = () => {
                !n || e.guessedCorrectly || (oe(ne.draw.guess, n), o(""))
            },
            d = b => {
                n.length < ya && o(`${n}${b}`), t.current && t.current.focus()
            },
            l = !e.secondsLeft,
            f = e.guessedCorrectly ? "You guessed correctly!" : l ? "Time's up!" : "Type your guess here!",
            g = e.guessedCorrectly || l;
        return i.jsxs(bf, {
            children: [i.jsx(wf, {
                children: e.timeText
            }), i.jsxs(kf, {
                children: [i.jsx(vf, {}), i.jsxs(Pf, {
                    children: [a.length && r && r.symbolKeyboardEnabled ? i.jsx("div", {
                        className: "flex vc",
                        style: {
                            marginBottom: 10
                        },
                        children: a.map(b => i.jsx(uo, {
                            size: "small",
                            type: "dashed",
                            style: {
                                marginRight: 5
                            },
                            disabled: g,
                            onClick: () => d(b),
                            children: b
                        }, `non-traditional-${b}`))
                    }) : null, i.jsxs(Sf, {
                        children: [i.jsx(Ma, {
                            ref: t,
                            autoFocus: !0,
                            placeholder: f,
                            size: "large",
                            value: n,
                            onChange: s,
                            onPressEnter: c,
                            disabled: g,
                            maxLength: ya
                        }), i.jsx(uo, {
                            onClick: c,
                            style: {
                                marginLeft: 10
                            },
                            type: "primary",
                            size: "large",
                            disabled: g,
                            children: "Submit"
                        })]
                    })]
                })]
            })]
        })
    }),
    bf = k.div.attrs({
        className: "flex flex-column"
    })`
  flex: 1;
  overflow: hidden;
`,
    wf = k.div`
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  @media (max-width: ${()=>qe}px) {
    display: none;
  }
`,
    kf = k.div.attrs({
        className: "flex flex-column"
    })`
  flex: 1;
  padding: 0px 20px;
  overflow: hidden;
`,
    Pf = k.div`
  padding-bottom: 20px;
`,
    Sf = k.div.attrs({
        className: "flex"
    })``,
    Tf = e => i.jsx(Bf, {
        children: e.isDrawer ? i.jsx(df, {
            setColor: e.setColor,
            setBrushSize: e.setBrushSize,
            clear: e.clear,
            undo: e.undo,
            color: e.color,
            brushSize: e.brushSize,
            timeText: e.timeText,
            hidingTerm: e.hidingTerm,
            setHidingTerm: e.setHidingTerm
        }) : i.jsx(Cf, {
            guessedCorrectly: e.guessedCorrectly,
            secondsLeft: e.secondsLeft,
            timeText: e.timeText,
            term: e.term
        })
    }),
    Bf = k.div.attrs({
        className: "scroll-y flex flex-column"
    })`
  flex-shrink: 0;
  width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
  justify-content: space-between;
  @media (max-width: ${()=>qe}px) {
    flex: 1;
    width: 100%;
  }
`,
    qe = 890,
    Ef = D(() => {
        var p;
        const {
            draw: e
        } = w.useContext(K), t = w.useRef(), [n, o] = w.useState(oc[0]), [r, s] = w.useState(sc[1]), [a, c] = w.useState(), d = ((p = e == null ? void 0 : e.me) == null ? void 0 : p.role) === kn.drawer, l = w.useMemo(() => e.round.drawingBase64, []);
        w.useEffect(() => {
            const u = lt(() => e.latestLine, x => {
                    var S;
                    x && !d && ((S = t == null ? void 0 : t.current) == null || S.addLine(x))
                }),
                m = lt(() => e.round.drawingBase64, x => {
                    var S;
                    x && !d && ((S = t == null ? void 0 : t.current) == null || S.drawImage(x))
                }),
                h = lt(() => e.shouldClearCanvas, x => {
                    x && d && (C(), e.shouldClearCanvas = !1)
                });
            return () => {
                u(), m(), h()
            }
        }, [d]);
        const f = w.useCallback(u => {
                d && oe(ne.draw.lineDrawn, u)
            }, [d]),
            g = w.useCallback(u => {
                d && oe(ne.draw.imageDrawn, u)
            }, [d]),
            b = w.useMemo(() => e.round.secondsLeft ? `${e.round.secondsLeft} ${nr("second",e.round.secondsLeft)} left...` : "Time's up!", [e.round.secondsLeft]),
            v = !!(d && e.round.secondsLeft),
            y = () => {
                t.current && d && t.current.undo()
            },
            C = () => {
                t.current && d && t.current.clear()
            };
        return i.jsxs(_f, {
            children: [i.jsx(tf, {
                canEdit: v,
                color: n,
                brushSize: r,
                initialImage: l,
                canvasRef: t,
                emitLine: f,
                emitImage: g,
                term: e.round.term,
                isDrawer: d,
                drawerName: e.round.drawer.name,
                revealText: e.round.revealText,
                timeText: b,
                secondsLeft: e.round.secondsLeft,
                hidingTerm: a
            }), i.jsx(Tf, {
                isDrawer: d,
                setColor: o,
                setBrushSize: s,
                color: n,
                brushSize: r,
                undo: y,
                clear: C,
                guessedCorrectly: e.me.answeredCorrectly,
                secondsLeft: e.round.secondsLeft,
                timeText: b,
                term: e.round.term,
                hidingTerm: a,
                setHidingTerm: c
            })]
        })
    }),
    _f = k.div.attrs({
        className: "maxWidth maxHeight flex"
    })`
  align-items: stretch;
  @media (max-width: ${qe}px) {
    flex-direction: column;
  }
`,
    Rf = D(() => {
        const {
            balance: e
        } = w.useContext(K);
        return i.jsx(jf, {
            children: xe(e.balance)
        })
    }),
    jf = k.div.attrs({
        className: "maxWidth flex"
    })`
  padding: 10px 20px;
  background: #4252af;
  color: ${$.White};
  justify-content: flex-end;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 4px 8px -2px gray;
`,
    Of = () => i.jsx(Mf, {
        children: i.jsx(M, {
            text: "Waiting for round to begin..."
        })
    }),
    Mf = k.div.attrs({
        className: "flex hc vc"
    })`
  flex: 1;
  text-align: center;
  font-size: 38px;
  padding: 40px;
`,
    Df = D(() => {
        const {
            draw: {
                round: {
                    termOptions: e
                }
            }
        } = w.useContext(K), t = n => oe(ne.draw.termSelected, n);
        return i.jsx(If, {
            children: i.jsx("div", {
                className: "maxWidth flex hc",
                children: i.jsxs($f, {
                    children: [i.jsx(Nf, {
                        children: i.jsx(M, {
                            text: "You are this round's drawer!"
                        })
                    }), i.jsx(Lf, {
                        children: i.jsx(M, {
                            text: "Which term do you want to draw?"
                        })
                    }), i.jsx(ut, {}), i.jsx("div", {
                        style: {
                            height: 7
                        }
                    }), e.map(n => i.jsx(Af, {
                        onClick: () => t(n.id),
                        children: n.term
                    }, n.id))]
                })
            })
        })
    }),
    If = k.div.attrs({
        className: "flex flex-column vc scroll-y"
    })`
  flex: 1;
  padding: 40px 0px;
`,
    $f = k(Hs).attrs({
        className: "animated fadeInDown"
    })`
  width: 700px;
  max-width: 90%;
  padding: 35px;
  background: ${$.White};
`,
    Nf = k.div`
  font-size: 22px;
  color: #1b5e20;
`,
    Lf = k.div`
  font-size: 32px;
  font-weight: ${Re.Bold};
`,
    Af = k(Hs).attrs({
        className: "maxWidth"
    })`
  padding: 10px 20px;
  background-color: #fdfafa;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.3s;
  will-change: transform;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.03);
  }
  &:last-child {
    margin-bottom: 0px;
  }
`,
    zf = ["Don't worry, you'll get it next time!", "You must have drawn a blank.", "Being honest, even I couldn't tell what that was.", "Let's just pretend that didn't happen.", "You tried your best!", "Yeah, that wasn't an easy one.", "You were on the right track!", "We don't talk about it.", "You can still catch up!"],
    Wf = (e, t) => e + t.amount,
    Ff = e => {
        const t = (s, a) => s === Sr.correct ? i.jsx(M, {
                text: "for correct guess"
            }) : s === Sr.firstGuess ? i.jsx(M, {
                text: "for correct first guess"
            }) : s === Sr.speed ? i.jsx(M, {
                text: "for speed"
            }) : s === Sr.goodDrawer && a && typeof a == "number" ? `for ${a} ${nr("person",a,"people")} guessing your drawing correctly!` : "",
            n = e.additions.reduce(Wf, 0) || 0,
            o = n > 0,
            r = () => o ? i.jsx(i.Fragment, {
                children: e.additions.map(s => i.jsxs(Ca, {
                    children: ["+ ", xe(s.amount), " ", t(s.type, s.metadata)]
                }, s.type))
            }) : i.jsx(i.Fragment, {
                children: i.jsx(Ca, {
                    children: i.jsx(M, {
                        text: e.isDrawer ? "You tried your best!" : Le.sample(zf)
                    })
                })
            });
        return i.jsx(Uf, {
            className: "flex",
            correct: o,
            children: i.jsx(qf, {
                children: i.jsxs(Gf, {
                    children: [i.jsx(Hf, {
                        children: e.isDrawer && o ? i.jsx(M, {
                            text: "Nice work!"
                        }) : `+ ${xe(n)}`
                    }), i.jsx(Vf, {
                        children: r()
                    })]
                })
            })
        })
    },
    Uf = k.div.attrs({
        className: "scroll-y"
    })`
  flex: 1;
  background: ${e=>e.correct?"rgba(56, 142, 60, 0.85)":"rgba(123, 31, 162, 0.85)"};
  color: ${$.White};
`,
    qf = k.div`
  margin: auto;
`,
    Gf = k.div.attrs({
        className: "flex flex-column vc"
    })`
  margin: 40px;
  @media (max-width: ${()=>qe}px) {
    margin: 30px;
  }
`,
    Hf = k.div`
  font-size: 70px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${()=>qe}px) {
    font-size: 55px;
  }
`,
    Vf = k.div``,
    Ca = k.div`
  font-size: 26px;
  @media (max-width: ${()=>qe}px) {
    font-size: 22px;
  }
`,
    Qf = D(() => {
        const {
            draw: e
        } = w.useContext(K), t = () => {
            var n, o, r;
            return e.status === Pn.termSelection && ((n = e == null ? void 0 : e.me) == null ? void 0 : n.role) === kn.drawer ? i.jsx(Df, {}) : e.status === Pn.results ? i.jsx(Ff, {
                additions: ((o = e == null ? void 0 : e.me) == null ? void 0 : o.lastRound) || [],
                isDrawer: ((r = e == null ? void 0 : e.me) == null ? void 0 : r.role) === kn.drawer
            }) : i.jsx(Of, {})
        };
        return i.jsxs(Yf, {
            children: [i.jsx(Rf, {}), t()]
        })
    }),
    Yf = k.div.attrs({
        className: "maxWidth maxHeight flex flex-column"
    })``,
    Xf = D(() => {
        const {
            draw: {
                status: e
            }
        } = w.useContext(K), t = () => e === Pn.drawing ? i.jsx(Ef, {}) : i.jsx(Qf, {});
        return i.jsx(Jf, {
            children: t()
        })
    }),
    Jf = k.div.attrs({
        className: "maxWidth maxHeight"
    })`
  font-family: ${()=>Fr()};
  color: ${$.Black};
  background-color: #f1f2f3;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);

  background-size: 45px 45px;
  background-position: center;
`,
    pt = {
        background: "#0f1150",
        questionBackground: "#303f9f",
        answerResponseCorrect: "#2e7d32",
        answerResponseIncorrect: "#c62828"
    },
    ic = 650,
    ac = e => i.jsx(Kf, {
        children: i.jsxs(Zf, {
            children: [i.jsx("div", {
                className: "loader",
                style: {
                    margin: 0
                }
            }), i.jsx(e9, {
                children: e.message
            })]
        })
    }),
    Kf = k.div.attrs({
        className: "maxAll flex-center"
    })``,
    Zf = k.div.attrs({
        className: "flex-center flex-column"
    })`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
  font-weight: ${Re.Normal};
  @media (max-width: ${ic}px) {
    margin: 20px;
    padding: 35px;
  }
`,
    e9 = k.div`
  margin-top: 25px;
  font-size: 32px;
  @media (max-width: ${ic}px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,
    t9 = () => i.jsx(ac, {
        message: "Waiting for round to begin..."
    }),
    r9 = () => i.jsx(ac, {
        message: "Get ready to answer!"
    }),
    n9 = {
        intensity: 4
    },
    o9 = {
        width: "100%",
        height: "100%"
    },
    s9 = () => i.jsx(i9, {
        children: i.jsx(qc.Fireworks, {
            options: n9,
            style: o9
        })
    }),
    i9 = k.div.attrs({
        className: "maxWidth maxHeight"
    })`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`,
    a9 = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .4,
                delayChildren: 1.3
            }
        }
    },
    c9 = {
        hidden: {
            opacity: 0,
            scale: .4
        },
        show: {
            opacity: 1,
            scale: 1
        }
    },
    l9 = e => i.jsx(d9, {
        initial: "hidden",
        animate: "show",
        onAnimationComplete: e.onReasonsAnimatedIn,
        children: e.reasons.map(t => i.jsx(u9, {
            children: t
        }, t))
    }),
    d9 = k(ke.div).attrs({
        className: "maxWidth flex-center flex-column",
        variants: a9
    })``,
    u9 = k(ke.div).attrs({
        className: "maxWidth",
        variants: c9,
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    })`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${de.White};
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`,
    p9 = D(e => {
        const {
            pardy: {
                correctWittyMessages: t,
                incorrectWittyMessages: n
            }
        } = w.useContext(K), [o, r] = w.useState(!1), {
            correct: s,
            reasons: a
        } = e, c = () => {
            s && r(!0)
        }, d = w.useMemo(() => Le.sample(t), []), l = w.useMemo(() => Le.sample(n), []);
        return i.jsxs(i.Fragment, {
            children: [i.jsx(f9, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .7
                },
                style: {
                    background: s ? pt.answerResponseCorrect : pt.answerResponseIncorrect
                },
                children: i.jsxs(h9, {
                    initial: {
                        opacity: 0,
                        y: "-50%"
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .6,
                        ease: "easeOut"
                    },
                    children: [i.jsx(m9, {
                        className: s ? "fal fa-check-circle" : "fal fa-times-circle"
                    }), i.jsx(g9, {
                        children: i.jsx(M, {
                            text: `${s?"Correct":"Incorrect"}!`
                        })
                    }), i.jsx(v9, {
                        children: s ? d : l
                    }), i.jsx("div", {
                        style: {
                            height: 60
                        }
                    }), i.jsx(l9, {
                        reasons: a,
                        onReasonsAnimatedIn: c
                    })]
                })
            }), o ? i.jsx(s9, {}) : null]
        })
    }),
    f9 = k(ke.div).attrs({
        className: "maxAll scroll-y"
    })``,
    h9 = k(ke.div).attrs({
        className: "maxWidth flex-center flex-column"
    })`
  min-height: 100%;
  padding: 40px 20px;
  text-align: center;
`,
    m9 = k.i`
  color: ${de.White};
  font-size: 144px;
`,
    g9 = k.div`
  font-weight: ${Re.Normal};
  font-size: 64px;
  margin-top: 10px;
`,
    v9 = k.div`
  font-size: 22px;
`,
    x9 = D(() => {
        const [e, t] = w.useState(!1), {
            user: n,
            pardy: o
        } = w.useContext(K);
        w.useEffect(() => (o.animatingQuestionScreenOut = !1, () => o.animatingQuestionScreenOut = !1), []);
        const r = o.currentQuestion,
            s = c => (jn.play(), t(!0), o.animatingQuestionScreenOut = !0, oe(ne.questionAnswered, {
                questionId: o.currentQuestion._id,
                answer: c
            }), !1),
            a = () => {
                o.animatingQuestionScreenOut = !1
            };
        return e && !o.animatingQuestionScreenOut || !r ? null : i.jsx(Ba, {
            ecc: bn(r, r._id),
            onQuestionAnswered: s,
            beforeOpenAnswerResponse: a,
            readToMeEnabled: n.readToMeEnabled,
            questionColor: {
                background: "transparent",
                text: de.White
            },
            defaultBackgroundColor: "transparent",
            blockKeyboardEvents: !0
        })
    }),
    y9 = e => i.jsxs(i.Fragment, {
        children: [i.jsx(b9, {
            initial: {
                background: pt.background
            },
            animate: {
                background: pt.questionBackground
            },
            transition: {
                duration: 1.2,
                ease: "easeOut"
            },
            children: i.jsx(w9, {
                initial: {
                    opacity: 0,
                    y: "100%"
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    ease: "easeOut"
                },
                children: i.jsx(x9, {})
            })
        }), e.timesUp && !e.answered ? i.jsx(C9, {}) : null]
    }),
    C9 = () => i.jsx(k9, {
        children: i.jsx(P9, {
            children: i.jsx(nt, {
                text: "Time's Up!",
                max: 80,
                noBold: !0,
                paddingHorizontal: "10%"
            })
        })
    }),
    b9 = k(ke.div).attrs({
        className: "maxAll"
    })``,
    w9 = k(ke.div).attrs({
        className: "maxAll"
    })`
  font-family: ${Ee.mainFontName};
  overflow: hidden;
  color: ${de.Black};
`,
    k9 = k.div.attrs({
        className: "maxAll flex-center animated fadeIn"
    })`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`,
    P9 = k.div.attrs({
        className: "medium-shadow animated jackInTheBox"
    })`
  background: ${pt.questionBackground};
  color: ${de.White};
  width: 80%;
  max-width: 700px;
  height: 40%;
  max-height: 240px;
  font-weight: ${Re.Normal};
  border-radius: 10px;
  border: 3px solid;
  animation-delay: 0.5;
`,
    Gr = 700,
    S9 = D(() => {
        const {
            pardy: e
        } = w.useContext(K), [t, n] = w.useState(0), [o, r] = w.useState(!1), s = e.maxBet, a = 1, c = () => {
            if (!t) return;
            const g = Math.max(a, Math.min(t, s));
            oe(ne.pardy.setBet, g), e.animatingBetScreenOut = !0, e.currentBet = g, d()
        }, d = () => r(!0), l = () => {
            e.animatingBetScreenOut = !1
        }, f = g => {
            if (!g) return "";
            let b = a;
            return b = Number(g), isNaN(b) && (b = a), b = Math.max(a, Math.min(b, s)), ge(b)
        };
        return i.jsx(Nc, {
            children: i.jsx(T9, {
                initial: {
                    background: "rgba(0,0,0,0)"
                },
                animate: {
                    background: o ? pt.background : "rgba(0,0,0,0)"
                },
                transition: {
                    duration: .7
                },
                children: i.jsx(B9, {
                    children: i.jsxs(E9, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: .8,
                            x: 0
                        },
                        animate: o ? {
                            opacity: 0,
                            y: 0,
                            scale: 1,
                            x: "-100%"
                        } : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            x: 0
                        },
                        transition: {
                            duration: .7
                        },
                        onAnimationComplete: l,
                        children: [i.jsx(_9, {
                            children: "The Finale"
                        }), i.jsx(R9, {
                            children: "Place Your Bet!"
                        }), i.jsxs("div", {
                            className: "flex maxWidth vc",
                            children: [i.jsx("div", {
                                style: {
                                    fontSize: 26,
                                    marginRight: 10
                                },
                                children: "$"
                            }), i.jsx(Gc, {
                                size: "large",
                                placeholder: "1,000",
                                min: a,
                                max: s,
                                autoFocus: !0,
                                formatter: f,
                                parser: g => Number(g.replace(",", "")),
                                onChange: n,
                                style: {
                                    width: "100%",
                                    height: 55,
                                    display: "flex",
                                    alignItems: "center",
                                    color: de.White,
                                    fontSize: 26,
                                    background: "rgba(0,0,0,0.2)"
                                },
                                step: 1,
                                onPressEnter: c
                            })]
                        }), i.jsx(ut, {
                            style: {
                                margin: "40px 0px"
                            }
                        }), i.jsxs(j9, {
                            children: [i.jsxs(O9, {
                                children: ["Max Bet: ", xe(s)]
                            }), i.jsx(uo, {
                                size: "large",
                                type: "primary",
                                style: {
                                    height: 50,
                                    width: 200
                                },
                                onClick: c,
                                children: "Place Bet"
                            })]
                        })]
                    })
                })
            })
        })
    }),
    T9 = k(ke.div).attrs({
        className: "maxAll scroll-y"
    })``,
    B9 = k.div.attrs({
        className: "maxWidth flex-center"
    })`
  min-height: 100%;
  padding: 30px 0px;
`,
    E9 = k(ke.div).attrs({
        className: "flex-column flex-center medium-shadow"
    })`
  background: rgba(255, 255, 255, 0.1);
  color: ${de.White};
  padding: 60px 70px;
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
  text-shadow: 0px 2px 2px ${de.Black};
  border: 4px solid #fffde7;
  text-align: center;
  @media (max-width: ${Gr}px) {
    padding: 40px 30px;
  }
  .ant-input-number-input-wrap {
    width: 100%;
  }
`,
    _9 = k.div`
  text-shadow: 0px 3px 3px ${de.Black};
  text-transform: uppercase;
  font-weight: ${Re.UltraBold};
  font-size: 72px;
  line-height: 1;
  margin-bottom: 10px;
  @media (max-width: ${Gr}px) {
    font-size: 64px;
    margin-bottom: 10px;
  }
`,
    R9 = k.div`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: ${Re.Normal};
  @media (max-width: ${Gr}px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`,
    j9 = k.div.attrs({
        className: "flex maxWidth vc between"
    })`
  @media (max-width: ${Gr}px) {
    flex-direction: column;
  }
`,
    O9 = k.div`
  font-size: 18px;
  @media (max-width: ${Gr}px) {
    margin-bottom: 10px;
  }
`,
    M9 = D(() => {
        const {
            pardy: {
                currentBet: e
            }
        } = w.useContext(K);
        return i.jsx(D9, {
            children: i.jsxs(I9, {
                children: [i.jsx($9, {}), i.jsxs(N9, {
                    children: ["Your bet of ", i.jsx("b", {
                        children: xe(e)
                    }), " is in!"]
                })]
            })
        })
    }),
    D9 = k.div.attrs({
        className: "maxAll flex-center"
    })``,
    I9 = k(ke.div).attrs({
        className: "flex-center flex-column",
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: .7
        }
    })`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
`,
    $9 = k(Hc).attrs({
        name: "fas fa-check",
        className: "animated pulse infinite"
    })`
  font-size: 64px;
  margin-bottom: 25px;
`,
    N9 = k.div`
  font-size: 32px;
`,
    Hr = 650,
    L9 = D(() => {
        const {
            pardy: {
                tips: e,
                answerLockedInWittyMessages: t
            }
        } = w.useContext(K), n = w.useMemo(() => Le.sample(t), []), o = w.useMemo(() => Le.sample(e), []);
        return i.jsxs(A9, {
            initial: {
                background: pt.questionBackground
            },
            animate: {
                background: pt.background
            },
            transition: {
                duration: 1.3
            },
            children: [i.jsxs(z9, {
                children: [i.jsx(W9, {}), i.jsx(F9, {
                    children: "Answer locked in!"
                }), i.jsx(U9, {
                    children: n
                })]
            }), i.jsx(q9, {
                children: i.jsx(G9, {
                    initial: {
                        y: "100%"
                    },
                    animate: {
                        y: 0
                    },
                    transition: {
                        duration: 1.5,
                        delay: 3
                    },
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })
            })]
        })
    }),
    A9 = k(ke.div).attrs({
        className: "maxAll flex-center"
    })``,
    z9 = k.div.attrs({
        className: "flex-center flex-column animated jackInTheBox"
    })`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  @media (max-width: ${Hr}px) {
    padding: 40px 20px;
  }
`,
    W9 = k.img.attrs({
        src: H("lock.svg"),
        className: "animated pulse infinite"
    })`
  height: 120px;
  animation-duration: 3s;
  @media (max-width: ${Hr}px) {
    height: 100px;
  }
`,
    F9 = k.div`
  font-size: 52px;
  margin-top: 15px;
  font-weight: ${Re.Normal};
  @media (max-width: ${Hr}px) {
    font-size: 36px;
    margin-top: 10px;
  }
`,
    U9 = k.div`
  font-size: 22px;
  margin-top: 10px;
  @media (max-width: ${Hr}px) {
    font-size: 14px;
    margin-top: 8px;
  }
`,
    q9 = k.div.attrs({
        className: "maxAll flex hc"
    })`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  pointer-events: none;
`,
    G9 = k(ke.div)`
  padding: 15px;
  width: 90%;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  @media (max-width: ${Hr}px) {
    font-size: 14px;
    padding: 12px;
  }
`,
    H9 = D(() => {
        const {
            pardy: e
        } = w.useContext(K), t = () => {
            if (e.screen === n3.question) {
                if (e.questionScreen === o3.finale) return !e.currentBet || e.animatingBetScreenOut ? i.jsx(S9, {}) : i.jsx(M9, {});
                if (e.questionStatus === Tr.preview) return i.jsx(r9, {});
                if (e.questionStatus === Tr.ask || e.questionStatus === Tr.timesUp) return e.answered && !e.animatingQuestionScreenOut ? i.jsx(L9, {}) : i.jsx(y9, {
                    timesUp: e.questionStatus === Tr.timesUp,
                    answered: e.answered
                })
            }
            return e.answerResponseItems.length ? i.jsx(p9, {
                correct: e.answeredCorrectly,
                reasons: e.answerResponseItems
            }) : i.jsx(t9, {})
        };
        return i.jsx(V9, {
            children: t()
        })
    }),
    V9 = k.div.attrs({
        className: "maxAll"
    })`
  font-family: 'Londrina Solid', cursive;
  font-weight: ${Re.Light};
  background: ${pt.background};
  color: ${de.White};
  user-select: none;
`,
    Q9 = () => i.jsx(rc, {
        children: i.jsx($a, {
            style: {
                color: de.White
            },
            size: 48
        })
    }),
    Rt = {
        width: 800,
        height: 700
    },
    Y9 = e => i.jsx(s4, {
        background: e.color,
        onClick: e.select,
        children: e.num
    }),
    X9 = e => {
        const t = new se.Howl({
                src: [H("numberSwitch.mp3")]
            }),
            n = new se.Howl({
                src: [H("numberLogo.mp3")]
            }),
            o = new se.Howl({
                src: [H("numberSuccess.mp3")]
            }),
            r = new se.Howl({
                src: [H("numberError.mp3")]
            }),
            [s] = w.useState(Le.shuffle(Array.from(Array(9).keys()).map(y => y + 1))),
            [a, c] = w.useState(1),
            [d, l] = w.useState(!1),
            [f, g] = w.useState(!1);
        w.useEffect(() => {
            yn("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"), n.play()
        }, []);
        const b = y => d ? "#ffebee" : y < a ? "#c8e6c9" : "#fff8e1",
            v = y => {
                a !== 10 && (y !== a ? (c(1), l(!0), r.play(), setTimeout(() => {
                    l(!1)
                }, 1e3)) : (c(y + 1), l(!1), y === 9 ? (setTimeout(() => {
                    g(!0)
                }, 350), setTimeout(() => {
                    e.onFinish()
                }, 1200), o.play()) : t.play()))
            };
        return i.jsx(K9, {
            children: i.jsx(Z9, {
                animate: {
                    opacity: f ? 0 : 1
                },
                transition: {
                    duration: .8
                },
                initial: {
                    opacity: 0
                },
                children: i.jsxs(e4, {
                    animate: {
                        opacity: f ? 0 : 1,
                        y: f ? 20 : 0
                    },
                    transition: {
                        duration: .8
                    },
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    children: [i.jsx(t4, {}), i.jsx(r4, {
                        children: i.jsx(M, {
                            text: "Outnumbered"
                        })
                    }), i.jsxs(n4, {
                        children: ["by ", e.name, "."]
                    }), i.jsx(ut, {}), i.jsx(o4, {
                        children: s.map(y => i.jsx(Y9, {
                            num: y,
                            color: b(y),
                            select: () => v(y)
                        }, `numblock-${y}`))
                    })]
                })
            })
        })
    },
    J9 = D(() => {
        var o;
        const {
            powerups: e,
            gameValues: t
        } = w.useContext(K), n = () => {
            e.screenAttack = {
                powerupName: "",
                attackerName: "",
                fullScreen: !1
            }, oe(ne.outnumberedComplete)
        };
        return ((o = e == null ? void 0 : e.screenAttack) == null ? void 0 : o.powerupName) === V.outnumbered && t.gameStatus === $e.gameplay && !t.nonDismissMessage.title ? i.jsx(X9, {
            name: e.screenAttack.attackerName,
            onFinish: n
        }) : null
    }),
    K9 = k.div.attrs({
        className: "maxWidth maxHeight"
    })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`,
    Z9 = k(ke.div).attrs({
        className: "maxWidth maxHeight flex hc vc"
    })`
  background: rgba(0, 0, 0, 0.35);
`,
    e4 = k(ke.div).attrs({
        className: "flex flex-column hc vc"
    })`
  padding: 60px;
  color: ${$.Black};
  background: ${$.White};
  border-radius: 5px;
  box-shadow: ${be.basic};
  @media (max-width: ${Rt.width}px),
    (max-height: ${Rt.height}px) {
    padding: 35px;
  }
  @media (max-width: 550px) {
    padding: 25px;
  }
`,
    t4 = k.img.attrs({
        src: H("numbers.svg"),
        alt: "number blocks"
    })`
  height: 125px;
  @media (max-width: ${Rt.width}px),
    (max-height: ${Rt.height}px) {
    height: 110px;
  }
  @media (max-width: 550px) {
    height: 80px;
  }
`,
    r4 = k.div`
  font-size: 48px;
  font-weight: ${Re.Bold};
  margin-top: 12px;
  text-transform: uppercase;
  font-family: 'Dela Gothic One', '${Ee.mainFontName}';
  @media (max-width: ${Rt.width}px),
    (max-height: ${Rt.height}px) {
    font-size: 30px;
    margin-top: 10px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
    margin-top: 8px;
  }
`,
    n4 = k.div`
  font-size: 21px;
  @media (max-width: ${Rt.width}px),
    (max-height: ${Rt.height}px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`,
    o4 = k.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`,
    s4 = k.div.attrs({
        className: "flex hc vc"
    })`
  width: 90px;
  height: 75px;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: ${Re.Bold};
  font-size: 20px;
  background: ${e=>e.background};
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 550px) {
    width: 70px;
  }
  @media (max-height: 450px) {
    height: 50px;
  }
`,
    i4 = e => {
        const t = () => {
            oe(ne.pardy.setPower, e.id)
        };
        return i.jsxs(a4, {
            children: [i.jsx(c4, {
                style: {
                    background: e.background
                },
                children: i.jsx(l4, {
                    src: e.image
                })
            }), i.jsxs(d4, {
                children: [i.jsx(u4, {
                    children: e.name
                }), i.jsx(p4, {
                    children: e.description
                }), i.jsx(Ae, {
                    type: "primary",
                    style: {
                        width: 250
                    },
                    size: "small",
                    label: "Select",
                    onClick: t
                })]
            })]
        })
    },
    a4 = k.div.attrs({
        className: "maxWidth medium-shadow"
    })`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid #90a4ae;
  color: ${de.Black};
  background: ${de.White};
  text-align: center;
`,
    c4 = k.div.attrs({
        className: "maxWidth flex-center"
    })`
  height: 80px;
`,
    l4 = k.img`
  height: 42px;
  filter: drop-shadow(2px 2px 2px #222);
`,
    d4 = k.div.attrs({
        className: "maxWidth flex-column flex-center"
    })`
  padding: 20px;
  background: #f5f5f5;
`,
    u4 = k.div`
  font-weight: ${Re.Normal};
  font-size: 34px;
`,
    p4 = k.div`
  font-size: 18px;
  margin-bottom: 15px;
`,
    f4 = [L.waiting, L.pardyMode],
    h4 = D(() => {
        const {
            pardy: e,
            navigation: {
                currentRoute: t
            }
        } = w.useContext(K), n = w.useMemo(() => !!(!e.power && f4.includes(t) && e.powers.length && e.powerOptions.length), [e.power, t, e.powers.length, e.powerOptions.length]);
        return i.jsx(wt, {
            open: n,
            close: () => !1,
            customWidth: "700px",
            customMaxWidth: "95%",
            customPadding: "0px",
            customStyle: {
                border: `3px solid ${de.White}`
            },
            children: i.jsxs(g4, {
                children: [i.jsxs(v4, {
                    children: [i.jsx(x4, {
                        children: "Pick Your"
                    }), i.jsx(y4, {
                        children: "Power!"
                    })]
                }), i.jsx(ut, {
                    style: {
                        margin: "30px 0px"
                    }
                }), e.powers.filter(o => e.powerOptions.includes(o.id)).map(o => i.jsx(i4, {
                    id: o.id,
                    name: o.name,
                    image: o.image,
                    description: o.description,
                    background: o.background
                }, o.id))]
            })
        })
    }),
    m4 = D(() => {
        const {
            gameOptions: {
                specialGameType: e
            }
        } = w.useContext(K);
        return e && e.includes(Rs) ? i.jsx(h4, {}) : null
    }),
    g4 = k.div.attrs({
        className: "maxWidth"
    })`
  padding: 40px;
  background: ${pt.background};
  color: ${de.White};
  font-family: 'Londrina Solid', cursive;
  font-weight: ${Re.Light};
`,
    v4 = k.div.attrs({
        className: "maxWidth flex-column flex-center"
    })`
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0px 3px 3px ${de.Black};
`,
    x4 = k.div`
  font-size: 42px;
`,
    y4 = k.div`
  font-size: 84px;
  font-weight: ${Re.Bold};
`,
    C4 = [L.questions, L.shop],
    lo = () => {
        if (T.gameValues.gameStatus === $e.gameplay) {
            if (ve()) {
                if (T.imposter.status === Ke.questions) {
                    C4.includes(T.navigation.currentRoute) || ee(L.questions);
                    return
                }
                ee(L.imposterMode);
                return
            }
            if (Wt()) {
                ee(L.drawMode);
                return
            }
            if (Xe()) {
                ee(L.pardyMode);
                return
            }
        }
    },
    b4 = () => {
        lt(() => T.powerups.activePowerups, e => {
            e.includes(V.fivePercentBot) ? T.ui.snowing = !0 : T.ui.snowing = !1
        }), lt(() => T.navigation.leaderboardDrawerOpen, () => Xa.play()), lt(() => T.imposter.status, () => lo()), lt(() => T.gameValues.gameStatus, () => lo()), lt(() => T.navigation.currentRoute, () => lo())
    },
    w4 = e => {
        const {
            joinOptions: t,
            createOptions: n
        } = e;
        if (!t && !n) return;
        const o = () => {
            T.engine.attemptingToConnect = !1, T.engine.hasConnected = !1, T.engine.connected = !1, T.engine.connectionError = !1, T.engine.joinedRoom = !1, T.engine.attemptingToJoinRoom = !1, T.engine.errorJoiningRoom = !1, T.engine.roomError = null
        };
        o(), T.engine.attemptingToConnect = !0;
        const r = new Lc.Client(t ? t.serverUrl : n.serverUrl, {
                transports: ["websocket"],
                clientIdSuffix: "-play"
            }),
            s = r.onConnectError.add(a => {
                console.log({
                    connectionError: a
                }), e.onConnectError && e.onConnectError(a), e.disposeOnError && o(), T.engine.connectionError = !0, T.engine.attemptingToConnect = !1
            });
        r.onConnect.add(() => {
            s(), T.engine.client = r, T.engine.connected = !0, T.engine.hasConnected = !0, T.engine.attemptingToConnect = !1, T.engine.attemptingToJoinRoom = !0, r.onConnectError.add(() => {
                T.engine.connectionError = !0
            }), r.onConnect.add(() => {
                T.engine.connected = !0, T.engine.connectionError = !1, T.engine.attemptingToConnect = !1, T.engine.attemptingToJoinRoom = !0
            }), r.onReconnect.add(() => {
                T.engine.connected = !0, T.engine.connectionError = !1, T.engine.attemptingToConnect = !1, T.engine.attemptingToJoinRoom = !0
            }), T.engine.attemptingToJoinRoom = !0;
            const a = t ? r.joinRoom(t.roomId, t.options) : r.createRoom(n.roomType, n.options);
            a.onJoinAttempt.add(() => {
                T.engine.attemptingToJoinRoom = !0
            }), a.onJoinError.add(d => {
                console.log({
                    roomJoinError: d
                }), e.onRoomJoinError && e.onRoomJoinError(d), T.engine.roomError = d, T.engine.errorJoiningRoom = !0, T.engine.attemptingToJoinRoom = !1
            });
            const c = a.onJoinError.add(() => {
                e.disposeOnError && o()
            });
            a.onJoin.add(() => {
                tu(a), b4(), e.onRoomJoin && e.onRoomJoin(), T.engine.hasJoinedRoom = !0
            }, !0), a.onJoin.add(() => {
                c(), T.engine.joinedRoom = !0, T.engine.attemptingToJoinRoom = !1, T.engine.game || (T.engine.game = a)
            }), a.onLeave.add(() => {
                T.engine.joinedRoom = !1
            })
        }, !0), r.onDisconnect.add(() => {
            T.engine.attemptingToConnect = !0, T.engine.connected = !1, e.onDisconnect && e.onDisconnect()
        })
    },
    k4 = async e => {
        const {
            serverUrl: t,
            roomId: n,
            intentId: o
        } = e, r = {
            intent: o
        };
        xc() && (r.authToken = yc().token), w4({
            joinOptions: {
                serverUrl: t,
                roomId: n,
                options: r
            },
            disposeOnError: !1
        })
    }, P4 = [L.questions], cc = () => Le.sample("abcdefghijklmnopqrstuvwxyz".split("")), S4 = cc(), T4 = cc(), lc = k.div.withConfig({
        displayName: `sc-${S4+T4}`
    }).attrs({
        className: "maxAll flex-column"
    })`
  flex: 1 1 auto;
  min-height: 0;
  background: ${e=>e.customBackground||e.theme.defaultBackground};
  overflow-x: hidden;
  overflow-y: hidden;
`, ba = {
        width: "100%",
        height: "100%"
    }, rt = e => {
        if (e.currentRoute === e.path) {
            const t = e.component;
            return i.jsx(t, {})
        }
        return null
    }, B4 = () => T.navigation.canChangeRoute = !1, E4 = () => T.navigation.canChangeRoute = !0, _4 = e => {
        const [t, n] = w.useState(!0);
        return w.useEffect(() => {
            n(!1)
        }, []), i.jsx(va.TransitionGroup, {
            style: ba,
            children: i.jsx(va.CSSTransition, {
                style: ba,
                timeout: js,
                onExit: B4,
                onEntered: E4,
                classNames: P4.includes(e.currentRoute) || t ? "" : "fade-router",
                children: i.jsxs(i.Fragment, {
                    children: [i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.upgrade,
                        component: rs
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.shop,
                        component: Ko
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.questions,
                        component: Z1
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.team,
                        component: ns
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.waiting,
                        component: Ro
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.gameOver,
                        component: Q1
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.nonDismissMessage,
                        component: cs
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.imposterMode,
                        component: hs
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.drawMode,
                        component: Xf
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.pardyMode,
                        component: H9
                    }), i.jsx(rt, {
                        currentRoute: e.currentRoute,
                        path: L.join,
                        component: Q9
                    })]
                })
            }, e.currentRoute)
        })
    }, R4 = D(e => {
        const {
            gameValues: t,
            navigation: n
        } = w.useContext(K);
        return w.useEffect(() => {
            e.joinDetails && (k4({
                serverUrl: e.joinDetails.serverUrl,
                roomId: e.joinDetails.roomId,
                intentId: e.joinDetails.intentId
            }), bs(() => t.gameStatus === $e.results, () => {
                ee(L.gameOver)
            }), Vd())
        }, []), i.jsxs(lc, {
            children: [i.jsx(_4, {
                currentRoute: n.currentRoute
            }), i.jsx(ss, {}), i.jsx(J9, {}), i.jsx(as, {}), i.jsx(ls, {}), i.jsx(ds, {}), i.jsx(m4, {})]
        })
    }), j4 = e => {
        let t = "Error joining game",
            n = "",
            o = typeof e == "string" ? e : e.type;
        if (o === "MAX_PLAYERS") {
            let {
                message: r
            } = e;
            t = r.title ? r.title : "Game full", n = r.description ? r.description : "There are too many players in this game"
        } else o === "HOST_DISCONNECTED" ? (t = "All done.", n = "The host for this game has left.") : o === "GAME_FINISHED" ? (t = "Game ended.", n = "This game has already ended.") : o === "INVALID_INTENT" ? (t = "Reservation expired", n = "Your reservation to join this game has expired. Refresh and try joining again.") : o && o.includes && o.includes("No data found") ? T.engine.hasJoinedRoom ? (t = "All gone.", n = "The game you were in no longer exists.") : (t = "No game found.", n = "The game you were trying to join does not exist.") : n = "An unknown error occurred.";
        return {
            title: t,
            description: n
        }
    };
var O4 = Object.getOwnPropertyDescriptor,
    M4 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? O4(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const D4 = "https://www.gimkit.com/connection",
    wa = "https://status.gimkit.com",
    I4 = (e, t, n) => t.gameStatus === $e.results ? !1 : e.connectionError && !e.game || e.errorFindingServerForGame || e.errorJoiningRoom ? !0 : !(n.currentRoute === L.join || !e.game || e.joinedRoom || n.currentRoute === L.nonDismissMessage);
let ms = class extends w.Component {
    constructor() {
        super(...arguments), this.getLoading = () => {
            const {
                engine: e
            } = this.props;
            return !(e.errorJoiningRoom || e.errorFindingServerForGame || !e.game && e.connectionError)
        }, this.getContent = () => {
            const e = this.getLoading();
            return i.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    fontFamily: Ee.name,
                    color: de.Black,
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [e && i.jsx(Cc, {
                    size: "large",
                    style: {
                        marginBottom: 10
                    }
                }), !e && i.jsxs(i.Fragment, {
                    children: [i.jsx(Vc, {
                        style: {
                            color: "red",
                            fontSize: 51
                        }
                    }), i.jsx(ut, {})]
                }), i.jsx("div", {
                    style: {
                        textAlign: "center",
                        fontSize: 23,
                        fontWeight: "bold"
                    },
                    children: this.getMessage()
                })]
            })
        }, this.getMessage = () => {
            const {
                engine: e
            } = this.props;
            if (e.errorFindingServerForGame) return i.jsxs("span", {
                children: ["We couldn't find any available game servers. Gimkit might be down. Check ", i.jsx("a", {
                    href: wa,
                    children: wa
                }), " for more info."]
            });
            if (!e.game && e.connectionError) return i.jsxs("span", {
                children: ["Your network is blocking connection to our game servers. Get more details on how to fix this ", i.jsx("a", {
                    href: D4,
                    children: "here."
                })]
            });
            if (e.errorJoiningRoom) {
                const t = j4(e.roomError);
                return i.jsxs("span", {
                    children: [i.jsx("span", {
                        style: {
                            fontSize: 23
                        },
                        children: t.title
                    }), i.jsx("br", {}), i.jsx("span", {
                        style: {
                            fontWeight: "normal",
                            fontSize: 18
                        },
                        children: t.description
                    })]
                })
            }
            return e.attemptingToConnect ? i.jsxs("span", {
                children: ["Disconnected!", " ", i.jsx("span", {
                    style: {
                        fontWeight: "normal"
                    },
                    children: "Attempting to reconnect..."
                })]
            }) : e.attemptingToJoinRoom ? i.jsxs("span", {
                children: ["Connected!", " ", i.jsx("span", {
                    style: {
                        fontWeight: "normal"
                    },
                    children: "Attempting to rejoin..."
                })]
            }) : "Attempting to reconnect..."
        }
    }
    render() {
        const {
            engine: e,
            gameValues: t,
            navigation: n
        } = this.props, o = I4(e, t, n);
        return n.currentRoute === L.join ? i.jsx(bc, {
            open: o,
            closable: !1,
            footer: null,
            width: 700,
            centered: !0,
            bodyStyle: {
                padding: 40
            },
            maskStyle: {
                background: "transparent"
            },
            children: this.getContent()
        }) : i.jsx(Da, {
            open: o,
            placement: "bottom",
            closable: !1,
            height: "auto",
            children: this.getContent()
        })
    }
};
ms = M4([F("engine", "gameValues", "navigation"), D], ms);
var $4 = Object.getOwnPropertyDescriptor,
    N4 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? $4(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
let gs = class extends w.Component {
    constructor() {
        super(...arguments), this.close = () => this.props.ui.showingSuccessModal = !1, this.getContent = () => {
            const {
                successModalInfo: e
            } = this.props.ui;
            if (!e || !e.title) return null;
            const {
                textOptions: t
            } = e, {
                icon: n,
                background: o,
                color: r,
                title: s,
                description: a
            } = e;
            return i.jsxs("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: [i.jsx(L4, {
                    style: {
                        background: o,
                        color: r
                    },
                    children: i.jsx("i", {
                        className: n
                    })
                }), i.jsx(A4, {
                    children: s
                }), i.jsx(z4, {
                    style: {
                        textAlign: t && t.align ? t.align : "center",
                        whiteSpace: t && t.customLines ? "pre-wrap" : "normal"
                    },
                    children: a
                }), i.jsx(Ae, {
                    onClick: this.close,
                    style: {
                        marginTop: 14
                    },
                    type: "secondary",
                    label: "Close",
                    size: "medium"
                })]
            })
        }
    }
    render() {
        return i.jsx(wt, {
            open: this.props.ui.showingSuccessModal,
            close: this.close,
            customWidth: "570px",
            customPadding: "26px",
            children: this.getContent()
        })
    }
};
gs = N4([F("ui"), D], gs);
const L4 = k.div`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`,
    A4 = k.div`
  font-size: 38px;
  font-weight: 900;
  margin-top: 6px;
`,
    z4 = k.div`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`;
var W4 = Object.getOwnPropertyDescriptor,
    F4 = (e, t, n, o) => {
        for (var r = o > 1 ? void 0 : o ? W4(t, n) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (r = a(r) || r);
        return r
    };
const U4 = e => e === Te.fakeInvestigation || e === Te.privateInvestigation || e === Te.publicInvestigation ? "Investigate" : e === Te.donate ? "Donate" : "Use",
    q4 = e => {
        if (e === Te.clearListRemover) return t => !t.canNeverBeClear && t.role === dt.detective
    },
    G4 = e => {
        const t = e.items.find(n => n.id === e.shopItem);
        return t ? i.jsxs(H4, {
            children: [i.jsxs(V4, {
                style: {
                    color: $.White,
                    background: t.background
                },
                children: [i.jsx(Q4, {
                    children: i.jsx(le, {
                        style: {
                            fontSize: 34
                        },
                        name: t.icon
                    })
                }), i.jsxs(Y4, {
                    children: [i.jsx(X4, {
                        children: i.jsx(M, {
                            text: t.name
                        })
                    }), i.jsx(J4, {
                        children: i.jsx(M, {
                            text: t.description
                        })
                    })]
                })]
            }), i.jsx(K4, {
                children: i.jsx(Gs, {
                    actionText: U4(t.id),
                    showAction: !0,
                    onSelect: e.handleSelect,
                    filter: q4(t.id)
                })
            })]
        }) : (e.close(), null)
    };
let vs = class extends w.Component {
    constructor() {
        super(...arguments), this.close = () => {
            this.props.imposter.currentShopItemModalVisible = !1
        }, this.handlePersonSelect = e => {
            oe(ne.imposter.purchase, {
                item: this.props.imposter.currentShopItem,
                on: e
            }), ee(L.questions), this.close()
        }
    }
    render() {
        if (!this.props.imposter.me) return null;
        const {
            imposter: e
        } = this.props, t = e.currentShopItemModalVisible;
        return i.jsx(wt, {
            open: t,
            close: this.close,
            customMaxWidth: "90%",
            customWidth: "600px",
            customPadding: "0px",
            children: i.jsx(G4, {
                shopItem: e.currentShopItem,
                items: e.shopItems,
                close: this.close,
                handleSelect: this.handlePersonSelect
            })
        })
    }
};
vs = F4([F("imposter"), D], vs);
const H4 = k.div.attrs({
        className: "maxWidth flex flex-column"
    })`
  font-family: 'Space Grotesk', monospace;
`,
    V4 = k.div`
  height: 170px;
  padding: 20px;
`,
    Q4 = k.div.attrs({
        className: "flex maxWidth vc hc"
    })`
  height: 60px;
`,
    Y4 = k.div`
  text-align: center;
  margin-top: 4px;
`,
    X4 = k.div`
  font-size: 25px;
  font-weight: 900;
`,
    J4 = k.div`
  font-size: 14px;
`,
    K4 = k.div.attrs({
        className: "maxWidth"
    })`
  padding: 20px;
`,
    Z4 = D(() => {
        const [e, t] = w.useState("intro"), {
            imposter: n
        } = w.useContext(K), o = () => {
            e !== "intro" && (n.roleModalOpen = !1)
        }, r = () => {
            t("role")
        }, s = () => n.me.role === dt.imposter, a = () => {
            const {
                epl: l,
                impostersLeft: f,
                me: g
            } = n, b = sr(l) || [];
            let v = [];
            if (s()) {
                const y = b.filter(C => C.role === dt.imposter && C.id !== g.id);
                y.length && v.push(`Other ${nr("Impostor",y.length)}: ${Ja(y.map(C=>C.name))}`), v.push(`Visit Mission Control to decrease the number of investigations
      crewmates can have.`), v.push("Blend in by running fake investigations or putting on a disguise.")
            } else v.push(`There ${f===1?"is":"are"} ${f} ${nr("impostor",f)} on board. Find and vote them out!`), v.push("Run investigations in Mission Control to rule out fellow crewmates."), v.push("Use your notebook to keep track of your suspicions."), v.push("Call a meeting when you're ready to vote someone out.");
            return v
        }, c = () => e === "intro" ? i.jsxs(i.Fragment, {
            children: [i.jsx(rh, {
                children: i.jsx(M, {
                    text: "Welcome aboard."
                })
            }), i.jsx(nh, {}), i.jsx(oh, {
                children: i.jsx(M, {
                    text: `Make sure nobody can see your screen, and then click to view your
            role!`
                })
            }), i.jsx(Ae, {
                style: {
                    width: "100%"
                },
                size: "medium",
                type: "primary",
                onClick: r,
                label: i.jsx(M, {
                    text: "View Role"
                })
            })]
        }) : i.jsxs(i.Fragment, {
            children: [i.jsx(sh, {
                children: i.jsx(M, {
                    text: `You are ${s()?"an":"a"}`
                })
            }), i.jsx(ih, {
                children: i.jsx(M, {
                    text: s() ? "Impostor" : "Crewmate"
                })
            }), i.jsx(ah, {
                children: a().map(l => i.jsx(ch, {
                    children: i.jsx(M, {
                        text: l
                    })
                }, l))
            }), i.jsx(Ae, {
                style: {
                    marginTop: 5
                },
                size: "medium",
                type: "primary",
                onClick: o,
                label: i.jsx(M, {
                    text: "Close"
                })
            })]
        }), d = n.roleModalOpen && n.status !== Ke.intro;
        return i.jsx(wt, {
            open: d,
            close: o,
            customPadding: "0px",
            customWidth: "600px",
            customMaxWidth: "600px",
            children: i.jsx(th, {
                children: c()
            })
        })
    }),
    eh = D(() => {
        const {
            imposter: e
        } = w.useContext(K);
        return e.me ? i.jsx(Z4, {}) : null
    }),
    th = k.div.attrs({
        className: "maxWidth flex flex-column hc vc"
    })`
  background: ${$.Black};
  color: ${$.White};
  padding: 40px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
`,
    rh = k.div`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 16px;
`,
    nh = k.img.attrs({
        src: H("space-ship.svg")
    })`
  height: 125px;
`,
    oh = k.div`
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
`,
    sh = k.div`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: -8px;
`,
    ih = k.div`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;
`,
    ah = k.ul.attrs({
        className: "maxWidth"
    })`
  font-size: 16px;
  text-align: left;
`,
    ch = k.li`
  margin-bottom: 13px;
`,
    lh = k.div`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  color: ${de.Black};
`,
    dh = k.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-family: ${Ee.name};
  user-select: none;
  ${e=>e.blurred&&"filter: blur(5px);"}
  transition: filter 1s;
  overflow: hidden;
`,
    uh = k.div`
  height: 0px;
  width: 0px;
  .toast-body {
    font-family: ${Ee.name};
  }
`,
    ph = D(e => {
        const {
            ui: t
        } = w.useContext(K);
        return i.jsxs(i.Fragment, {
            children: [i.jsx(Qc, {
                children: i.jsx(lh, {
                    children: i.jsxs(dh, {
                        blurred: t.blurredScreen,
                        children: [i.jsx(B0, {}), i.jsx(R4, {
                            ...e
                        })]
                    })
                })
            }), i.jsx(uh, {
                children: i.jsx(po.ToastContainer, {
                    bodyClassName: "toast-body"
                })
            }), i.jsx(gs, {}), i.jsx(vs, {}), i.jsx(eh, {}), i.jsx(ms, {})]
        })
    }),
    fh = e => i.jsx(ph, {
        ...e
    }),
    hh = jc({
        typography: {
            fontFamily: [Ee.mainFontName, "sans-serif"].join(",")
        }
    }),
    mh = D(e => {
        const {
            theme: t
        } = w.useContext(K);
        return i.jsx(Kc, {
            theme: hh,
            children: i.jsx(wc, {
                theme: ka(t.theme),
                children: i.jsx(i.Fragment, {
                    children: i.jsx(fh, {
                        ...e
                    })
                })
            })
        })
    }),
    gh = e => e && (e.isTrusted === !0 || e.isTrusted === !1) ? e.isTrusted : !0,
    vh = e => (w.useEffect(() => {
        d2(), document.addEventListener("click", t => {
            gh(t) || t.stopPropagation()
        })
    }, []), i.jsx(K.Provider, {
        value: T,
        children: i.jsx(kc, {
            ...T,
            children: i.jsx(mh, {
                ...e
            })
        })
    })),
    y6 = e => i.jsx(i.Fragment, {
        children: i.jsx(vh, {
            ...e
        })
    });
export {
    y6 as
    default
};