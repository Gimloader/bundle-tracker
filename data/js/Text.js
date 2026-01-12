import {
    r as f,
    aB as $e,
    _ as re,
    x as p,
    bx as fn,
    dg as St,
    aK as dn,
    bg as pn,
    bI as Et,
    bJ as hn,
    j as M,
    d as _e,
    ax as mn,
    aw as gn,
    m as vn,
    aZ as yn,
    o as Q,
    dM as bn,
    b4 as X
} from "./_index.js";
import {
    g as be
} from "./getCloudinaryUrl.js";
import {
    L as Ot
} from "./LazyLatexRenderer.js";
import {
    o as _n
} from "./mobxreact.esm.js";
import {
    w as je,
    c as se,
    a as Ce
} from "./capitalize.js";
import {
    c as wn,
    s as xn,
    u as Rn,
    a as Tn,
    b as Ee,
    d as Pt,
    e as ot,
    T as Mn
} from "./Tooltip.js";
import {
    h as Ct
} from "./howler.js";
import {
    _ as zt
} from "./inheritsLoose.js";
var Sn = function(e) {
        return {
            root: {
                userSelect: "none",
                width: "1em",
                height: "1em",
                display: "inline-block",
                fill: "currentColor",
                flexShrink: 0,
                fontSize: e.typography.pxToRem(24),
                transition: e.transitions.create("fill", {
                    duration: e.transitions.duration.shorter
                })
            },
            colorPrimary: {
                color: e.palette.primary.main
            },
            colorSecondary: {
                color: e.palette.secondary.main
            },
            colorAction: {
                color: e.palette.action.active
            },
            colorError: {
                color: e.palette.error.main
            },
            colorDisabled: {
                color: e.palette.action.disabled
            },
            fontSizeInherit: {
                fontSize: "inherit"
            },
            fontSizeSmall: {
                fontSize: e.typography.pxToRem(20)
            },
            fontSizeLarge: {
                fontSize: e.typography.pxToRem(35)
            }
        }
    },
    It = f.forwardRef(function(e, r) {
        var n = e.children,
            o = e.classes,
            i = e.className,
            l = e.color,
            a = l === void 0 ? "inherit" : l,
            s = e.component,
            c = s === void 0 ? "svg" : s,
            u = e.fontSize,
            h = u === void 0 ? "medium" : u,
            d = e.htmlColor,
            g = e.titleAccess,
            I = e.viewBox,
            S = I === void 0 ? "0 0 24 24" : I,
            P = $e(e, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
        return f.createElement(c, re({
            className: se(o.root, i, a !== "inherit" && o["color".concat(Ce(a))], h !== "default" && h !== "medium" && o["fontSize".concat(Ce(h))]),
            focusable: "false",
            viewBox: S,
            color: d,
            "aria-hidden": g ? void 0 : !0,
            role: g ? "img" : void 0,
            ref: r
        }, P), n, g ? f.createElement("title", null, g) : null)
    });
It.muiName = "SvgIcon";
const it = je(Sn, {
    name: "MuiSvgIcon"
})(It);

function En(t, e) {
    var r = function(o, i) {
        return p.createElement(it, re({
            ref: i
        }, o), t)
    };
    return r.muiName = it.muiName, p.memo(p.forwardRef(r))
}

function On(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 166,
        r;

    function n() {
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        var a = this,
            s = function() {
                t.apply(a, i)
            };
        clearTimeout(r), r = setTimeout(s, e)
    }
    return n.clear = function() {
        clearTimeout(r)
    }, n
}

function Pn(t, e) {
    return function() {
        return null
    }
}

function Cn(t, e) {
    return f.isValidElement(t) && e.indexOf(t.type.muiName) !== -1
}

function Dt(t) {
    return t && t.ownerDocument || document
}

function zn(t) {
    var e = Dt(t);
    return e.defaultView || window
}

function In(t) {
    return function() {
        return null
    }
}

function Dn(t, e, r, n, o) {
    return null
}
var kn = typeof window < "u" ? f.useLayoutEffect : f.useEffect;

function ce(t) {
    var e = f.useRef(t);
    return kn(function() {
        e.current = t
    }), f.useCallback(function() {
        return e.current.apply(void 0, arguments)
    }, [])
}
const $n = Object.freeze(Object.defineProperty({
    __proto__: null,
    capitalize: Ce,
    createChainedFunction: wn,
    createSvgIcon: En,
    debounce: On,
    deprecatedPropType: Pn,
    isMuiElement: Cn,
    ownerDocument: Dt,
    ownerWindow: zn,
    requirePropFactory: In,
    setRef: xn,
    unstable_useId: Rn,
    unsupportedProp: Dn,
    useControlled: Tn,
    useEventCallback: ce,
    useForkRef: Ee,
    useIsFocusVisible: Pt
}, Symbol.toStringTag, {
    value: "Module"
}));

function Ge(t, e) {
    var r = function(i) {
            return e && f.isValidElement(i) ? e(i) : i
        },
        n = Object.create(null);
    return t && f.Children.map(t, function(o) {
        return o
    }).forEach(function(o) {
        n[o.key] = r(o)
    }), n
}

function jn(t, e) {
    t = t || {}, e = e || {};

    function r(u) {
        return u in e ? e[u] : t[u]
    }
    var n = Object.create(null),
        o = [];
    for (var i in t) i in e ? o.length && (n[i] = o, o = []) : o.push(i);
    var l, a = {};
    for (var s in e) {
        if (n[s])
            for (l = 0; l < n[s].length; l++) {
                var c = n[s][l];
                a[n[s][l]] = r(c)
            }
        a[s] = r(s)
    }
    for (l = 0; l < o.length; l++) a[o[l]] = r(o[l]);
    return a
}

function le(t, e, r) {
    return r[e] != null ? r[e] : t.props[e]
}

function Vn(t, e) {
    return Ge(t.children, function(r) {
        return f.cloneElement(r, {
            onExited: e.bind(null, r),
            in: !0,
            appear: le(r, "appear", t),
            enter: le(r, "enter", t),
            exit: le(r, "exit", t)
        })
    })
}

function Nn(t, e, r) {
    var n = Ge(t.children),
        o = jn(e, n);
    return Object.keys(o).forEach(function(i) {
        var l = o[i];
        if (f.isValidElement(l)) {
            var a = i in e,
                s = i in n,
                c = e[i],
                u = f.isValidElement(c) && !c.props.in;
            s && (!a || u) ? o[i] = f.cloneElement(l, {
                onExited: r.bind(null, l),
                in: !0,
                exit: le(l, "exit", t),
                enter: le(l, "enter", t)
            }) : !s && a && !u ? o[i] = f.cloneElement(l, {
                in: !1
            }) : s && a && f.isValidElement(c) && (o[i] = f.cloneElement(l, {
                onExited: r.bind(null, l),
                in: c.props.in,
                exit: le(l, "exit", t),
                enter: le(l, "enter", t)
            }))
        }
    }), o
}
var An = Object.values || function(t) {
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    },
    Wn = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    },
    Je = function(t) {
        zt(e, t);

        function e(n, o) {
            var i;
            i = t.call(this, n, o) || this;
            var l = i.handleExited.bind(fn(i));
            return i.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: l,
                firstRender: !0
            }, i
        }
        var r = e.prototype;
        return r.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, r.componentWillUnmount = function() {
            this.mounted = !1
        }, e.getDerivedStateFromProps = function(o, i) {
            var l = i.children,
                a = i.handleExited,
                s = i.firstRender;
            return {
                children: s ? Vn(o, a) : Nn(o, l, a),
                firstRender: !1
            }
        }, r.handleExited = function(o, i) {
            var l = Ge(this.props.children);
            o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
                var s = re({}, a.children);
                return delete s[o.key], {
                    children: s
                }
            }))
        }, r.render = function() {
            var o = this.props,
                i = o.component,
                l = o.childFactory,
                a = St(o, ["component", "childFactory"]),
                s = this.state.contextValue,
                c = An(this.state.children).map(l);
            return delete a.appear, delete a.enter, delete a.exit, i === null ? p.createElement(ot.Provider, {
                value: s
            }, c) : p.createElement(ot.Provider, {
                value: s
            }, p.createElement(i, a, c))
        }, e
    }(p.Component);
Je.propTypes = {};
Je.defaultProps = Wn;
var Ln = typeof window > "u" ? f.useEffect : f.useLayoutEffect;

function qn(t) {
    var e = t.classes,
        r = t.pulsate,
        n = r === void 0 ? !1 : r,
        o = t.rippleX,
        i = t.rippleY,
        l = t.rippleSize,
        a = t.in,
        s = t.onExited,
        c = s === void 0 ? function() {} : s,
        u = t.timeout,
        h = f.useState(!1),
        d = h[0],
        g = h[1],
        I = se(e.ripple, e.rippleVisible, n && e.ripplePulsate),
        S = {
            width: l,
            height: l,
            top: -(l / 2) + i,
            left: -(l / 2) + o
        },
        P = se(e.child, d && e.childLeaving, n && e.childPulsate),
        T = ce(c);
    return Ln(function() {
        if (!a) {
            g(!0);
            var z = setTimeout(T, u);
            return function() {
                clearTimeout(z)
            }
        }
    }, [T, a, u]), f.createElement("span", {
        className: I,
        style: S
    }, f.createElement("span", {
        className: P
    }))
}
var Be = 550,
    Fn = 80,
    Hn = function(e) {
        return {
            root: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                zIndex: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: "inherit"
            },
            ripple: {
                opacity: 0,
                position: "absolute"
            },
            rippleVisible: {
                opacity: .3,
                transform: "scale(1)",
                animation: "$enter ".concat(Be, "ms ").concat(e.transitions.easing.easeInOut)
            },
            ripplePulsate: {
                animationDuration: "".concat(e.transitions.duration.shorter, "ms")
            },
            child: {
                opacity: 1,
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "currentColor"
            },
            childLeaving: {
                opacity: 0,
                animation: "$exit ".concat(Be, "ms ").concat(e.transitions.easing.easeInOut)
            },
            childPulsate: {
                position: "absolute",
                left: 0,
                top: 0,
                animation: "$pulsate 2500ms ".concat(e.transitions.easing.easeInOut, " 200ms infinite")
            },
            "@keyframes enter": {
                "0%": {
                    transform: "scale(0)",
                    opacity: .1
                },
                "100%": {
                    transform: "scale(1)",
                    opacity: .3
                }
            },
            "@keyframes exit": {
                "0%": {
                    opacity: 1
                },
                "100%": {
                    opacity: 0
                }
            },
            "@keyframes pulsate": {
                "0%": {
                    transform: "scale(1)"
                },
                "50%": {
                    transform: "scale(0.92)"
                },
                "100%": {
                    transform: "scale(1)"
                }
            }
        }
    },
    Bn = f.forwardRef(function(e, r) {
        var n = e.center,
            o = n === void 0 ? !1 : n,
            i = e.classes,
            l = e.className,
            a = $e(e, ["center", "classes", "className"]),
            s = f.useState([]),
            c = s[0],
            u = s[1],
            h = f.useRef(0),
            d = f.useRef(null);
        f.useEffect(function() {
            d.current && (d.current(), d.current = null)
        }, [c]);
        var g = f.useRef(!1),
            I = f.useRef(null),
            S = f.useRef(null),
            P = f.useRef(null);
        f.useEffect(function() {
            return function() {
                clearTimeout(I.current)
            }
        }, []);
        var T = f.useCallback(function(R) {
                var C = R.pulsate,
                    V = R.rippleX,
                    G = R.rippleY,
                    Z = R.rippleSize,
                    w = R.cb;
                u(function(m) {
                    return [].concat(dn(m), [f.createElement(qn, {
                        key: h.current,
                        classes: i,
                        timeout: Be,
                        pulsate: C,
                        rippleX: V,
                        rippleY: G,
                        rippleSize: Z
                    })])
                }), h.current += 1, d.current = w
            }, [i]),
            z = f.useCallback(function() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    V = arguments.length > 2 ? arguments[2] : void 0,
                    G = C.pulsate,
                    Z = G === void 0 ? !1 : G,
                    w = C.center,
                    m = w === void 0 ? o || C.pulsate : w,
                    E = C.fakeElement,
                    v = E === void 0 ? !1 : E;
                if (R.type === "mousedown" && g.current) {
                    g.current = !1;
                    return
                }
                R.type === "touchstart" && (g.current = !0);
                var x = v ? null : P.current,
                    D = x ? x.getBoundingClientRect() : {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    },
                    j, N, W;
                if (m || R.clientX === 0 && R.clientY === 0 || !R.clientX && !R.touches) j = Math.round(D.width / 2), N = Math.round(D.height / 2);
                else {
                    var oe = R.touches ? R.touches[0] : R,
                        J = oe.clientX,
                        K = oe.clientY;
                    j = Math.round(J - D.left), N = Math.round(K - D.top)
                }
                if (m) W = Math.sqrt((2 * Math.pow(D.width, 2) + Math.pow(D.height, 2)) / 3), W % 2 === 0 && (W += 1);
                else {
                    var Y = Math.max(Math.abs((x ? x.clientWidth : 0) - j), j) * 2 + 2,
                        H = Math.max(Math.abs((x ? x.clientHeight : 0) - N), N) * 2 + 2;
                    W = Math.sqrt(Math.pow(Y, 2) + Math.pow(H, 2))
                }
                R.touches ? S.current === null && (S.current = function() {
                    T({
                        pulsate: Z,
                        rippleX: j,
                        rippleY: N,
                        rippleSize: W,
                        cb: V
                    })
                }, I.current = setTimeout(function() {
                    S.current && (S.current(), S.current = null)
                }, Fn)) : T({
                    pulsate: Z,
                    rippleX: j,
                    rippleY: N,
                    rippleSize: W,
                    cb: V
                })
            }, [o, T]),
            $ = f.useCallback(function() {
                z({}, {
                    pulsate: !0
                })
            }, [z]),
            _ = f.useCallback(function(R, C) {
                if (clearTimeout(I.current), R.type === "touchend" && S.current) {
                    R.persist(), S.current(), S.current = null, I.current = setTimeout(function() {
                        _(R, C)
                    });
                    return
                }
                S.current = null, u(function(V) {
                    return V.length > 0 ? V.slice(1) : V
                }), d.current = C
            }, []);
        return f.useImperativeHandle(r, function() {
            return {
                pulsate: $,
                start: z,
                stop: _
            }
        }, [$, z, _]), f.createElement("span", re({
            className: se(i.root, l),
            ref: P
        }, a), f.createElement(Je, {
            component: null,
            exit: !0
        }, c))
    });
const Un = je(Hn, {
    flip: !1,
    name: "MuiTouchRipple"
})(f.memo(Bn));
var Qn = {
        root: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            "-moz-appearance": "none",
            "-webkit-appearance": "none",
            textDecoration: "none",
            color: "inherit",
            "&::-moz-focus-inner": {
                borderStyle: "none"
            },
            "&$disabled": {
                pointerEvents: "none",
                cursor: "default"
            },
            "@media print": {
                colorAdjust: "exact"
            }
        },
        disabled: {},
        focusVisible: {}
    },
    Zn = f.forwardRef(function(e, r) {
        var n = e.action,
            o = e.buttonRef,
            i = e.centerRipple,
            l = i === void 0 ? !1 : i,
            a = e.children,
            s = e.classes,
            c = e.className,
            u = e.component,
            h = u === void 0 ? "button" : u,
            d = e.disabled,
            g = d === void 0 ? !1 : d,
            I = e.disableRipple,
            S = I === void 0 ? !1 : I,
            P = e.disableTouchRipple,
            T = P === void 0 ? !1 : P,
            z = e.focusRipple,
            $ = z === void 0 ? !1 : z,
            _ = e.focusVisibleClassName,
            R = e.onBlur,
            C = e.onClick,
            V = e.onFocus,
            G = e.onFocusVisible,
            Z = e.onKeyDown,
            w = e.onKeyUp,
            m = e.onMouseDown,
            E = e.onMouseLeave,
            v = e.onMouseUp,
            x = e.onTouchEnd,
            D = e.onTouchMove,
            j = e.onTouchStart,
            N = e.onDragLeave,
            W = e.tabIndex,
            oe = W === void 0 ? 0 : W,
            J = e.TouchRippleProps,
            K = e.type,
            Y = K === void 0 ? "button" : K,
            H = $e(e, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]),
            B = f.useRef(null);

        function ee() {
            return pn.findDOMNode(B.current)
        }
        var k = f.useRef(null),
            de = f.useState(!1),
            O = de[0],
            L = de[1];
        g && O && L(!1);
        var U = Pt(),
            q = U.isFocusVisible,
            te = U.onBlurVisible,
            Ht = U.ref;
        f.useImperativeHandle(n, function() {
            return {
                focusVisible: function() {
                    L(!0), B.current.focus()
                }
            }
        }, []), f.useEffect(function() {
            O && $ && !S && k.current.pulsate()
        }, [S, $, O]);

        function ie(b, me) {
            var un = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : T;
            return ce(function(rt) {
                me && me(rt);
                var cn = un;
                return !cn && k.current && k.current[b](rt), !0
            })
        }
        var Bt = ie("start", m),
            Ut = ie("stop", N),
            Qt = ie("stop", v),
            Zt = ie("stop", function(b) {
                O && b.preventDefault(), E && E(b)
            }),
            Kt = ie("start", j),
            Yt = ie("stop", x),
            Xt = ie("stop", D),
            Gt = ie("stop", function(b) {
                O && (te(b), L(!1)), R && R(b)
            }, !1),
            Jt = ce(function(b) {
                B.current || (B.current = b.currentTarget), q(b) && (L(!0), G && G(b)), V && V(b)
            }),
            Ve = function() {
                var me = ee();
                return h && h !== "button" && !(me.tagName === "A" && me.href)
            },
            Ne = f.useRef(!1),
            en = ce(function(b) {
                $ && !Ne.current && O && k.current && b.key === " " && (Ne.current = !0, b.persist(), k.current.stop(b, function() {
                    k.current.start(b)
                })), b.target === b.currentTarget && Ve() && b.key === " " && b.preventDefault(), Z && Z(b), b.target === b.currentTarget && Ve() && b.key === "Enter" && !g && (b.preventDefault(), C && C(b))
            }),
            tn = ce(function(b) {
                $ && b.key === " " && k.current && O && !b.defaultPrevented && (Ne.current = !1, b.persist(), k.current.stop(b, function() {
                    k.current.pulsate(b)
                })), w && w(b), C && b.target === b.currentTarget && Ve() && b.key === " " && !b.defaultPrevented && C(b)
            }),
            pe = h;
        pe === "button" && H.href && (pe = "a");
        var he = {};
        pe === "button" ? (he.type = Y, he.disabled = g) : ((pe !== "a" || !H.href) && (he.role = "button"), he["aria-disabled"] = g);
        var nn = Ee(o, r),
            rn = Ee(Ht, B),
            on = Ee(nn, rn),
            nt = f.useState(!1),
            an = nt[0],
            ln = nt[1];
        f.useEffect(function() {
            ln(!0)
        }, []);
        var sn = an && !S && !g;
        return f.createElement(pe, re({
            className: se(s.root, c, O && [s.focusVisible, _], g && s.disabled),
            onBlur: Gt,
            onClick: C,
            onFocus: Jt,
            onKeyDown: en,
            onKeyUp: tn,
            onMouseDown: Bt,
            onMouseLeave: Zt,
            onMouseUp: Qt,
            onDragLeave: Ut,
            onTouchEnd: Yt,
            onTouchMove: Xt,
            onTouchStart: Kt,
            ref: on,
            tabIndex: g ? -1 : oe
        }, he, H), a, sn ? f.createElement(Un, re({
            ref: k,
            center: l
        }, J)) : null)
    });
const Kn = je(Qn, {
    name: "MuiButtonBase"
})(Zn);
var Yn = function(e) {
        return {
            root: re({}, e.typography.button, {
                boxSizing: "border-box",
                minHeight: 36,
                transition: e.transitions.create(["background-color", "box-shadow", "border"], {
                    duration: e.transitions.duration.short
                }),
                borderRadius: "50%",
                padding: 0,
                minWidth: 0,
                width: 56,
                height: 56,
                boxShadow: e.shadows[6],
                "&:active": {
                    boxShadow: e.shadows[12]
                },
                color: e.palette.getContrastText(e.palette.grey[300]),
                backgroundColor: e.palette.grey[300],
                "&:hover": {
                    backgroundColor: e.palette.grey.A100,
                    "@media (hover: none)": {
                        backgroundColor: e.palette.grey[300]
                    },
                    "&$disabled": {
                        backgroundColor: e.palette.action.disabledBackground
                    },
                    textDecoration: "none"
                },
                "&$focusVisible": {
                    boxShadow: e.shadows[6]
                },
                "&$disabled": {
                    color: e.palette.action.disabled,
                    boxShadow: e.shadows[0],
                    backgroundColor: e.palette.action.disabledBackground
                }
            }),
            label: {
                width: "100%",
                display: "inherit",
                alignItems: "inherit",
                justifyContent: "inherit"
            },
            primary: {
                color: e.palette.primary.contrastText,
                backgroundColor: e.palette.primary.main,
                "&:hover": {
                    backgroundColor: e.palette.primary.dark,
                    "@media (hover: none)": {
                        backgroundColor: e.palette.primary.main
                    }
                }
            },
            secondary: {
                color: e.palette.secondary.contrastText,
                backgroundColor: e.palette.secondary.main,
                "&:hover": {
                    backgroundColor: e.palette.secondary.dark,
                    "@media (hover: none)": {
                        backgroundColor: e.palette.secondary.main
                    }
                }
            },
            extended: {
                borderRadius: 48 / 2,
                padding: "0 16px",
                width: "auto",
                minHeight: "auto",
                minWidth: 48,
                height: 48,
                "&$sizeSmall": {
                    width: "auto",
                    padding: "0 8px",
                    borderRadius: 34 / 2,
                    minWidth: 34,
                    height: 34
                },
                "&$sizeMedium": {
                    width: "auto",
                    padding: "0 16px",
                    borderRadius: 40 / 2,
                    minWidth: 40,
                    height: 40
                }
            },
            focusVisible: {},
            disabled: {},
            colorInherit: {
                color: "inherit"
            },
            sizeSmall: {
                width: 40,
                height: 40
            },
            sizeMedium: {
                width: 48,
                height: 48
            }
        }
    },
    Xn = f.forwardRef(function(e, r) {
        var n = e.children,
            o = e.classes,
            i = e.className,
            l = e.color,
            a = l === void 0 ? "default" : l,
            s = e.component,
            c = s === void 0 ? "button" : s,
            u = e.disabled,
            h = u === void 0 ? !1 : u,
            d = e.disableFocusRipple,
            g = d === void 0 ? !1 : d,
            I = e.focusVisibleClassName,
            S = e.size,
            P = S === void 0 ? "large" : S,
            T = e.variant,
            z = T === void 0 ? "circular" : T,
            $ = $e(e, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);
        return f.createElement(Kn, re({
            className: se(o.root, i, P !== "large" && o["size".concat(Ce(P))], h && o.disabled, z === "extended" && o.extended, {
                primary: o.primary,
                secondary: o.secondary,
                inherit: o.colorInherit
            } [a]),
            component: c,
            disabled: h,
            focusRipple: !g,
            focusVisibleClassName: se(o.focusVisible, I),
            ref: r
        }, $), f.createElement("span", {
            className: o.label
        }, n))
    });
const Gn = je(Yn, {
    name: "MuiFab"
})(Xn);

function Ue(t) {
    "@babel/helpers - typeof";
    return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ue(t)
}

function Jn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function er(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function tr(t, e, r) {
    return e && er(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function nr(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && Qe(t, e)
}

function Qe(t, e) {
    return Qe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Qe(t, e)
}

function rr(t) {
    var e = ar();
    return function() {
        var n = ze(t),
            o;
        if (e) {
            var i = ze(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return or(this, o)
    }
}

function or(t, e) {
    if (e && (Ue(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ir(t)
}

function ir(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function ar() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ze(t) {
    return ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ze(t)
}

function lr(t, e) {
    if (!document.head.querySelector("#" + t)) {
        var r = document.createElement("style");
        r.textContent = e, r.type = "text/css", r.id = t, document.head.appendChild(r)
    }
}
var sr = function(t) {
        nr(r, t);
        var e = rr(r);

        function r() {
            return Jn(this, r), e.apply(this, arguments)
        }
        return tr(r, [{
            key: "componentDidMount",
            value: function() {
                lr(this.props.name, this.props.css)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var o = document.getElementById(this.props.name);
                o.parentNode.removeChild(o)
            }
        }, {
            key: "render",
            value: function() {
                return null
            }
        }]), r
    }(f.Component),
    ur = function(e) {
        var r = e.imageBackgroundColor;
        return `
  body {
    overflow: hidden;
  }

  .__react_modal_image__modal_container {
    position: fixed;
    z-index: 5000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    touch-action: none;
    overflow: hidden;
  }

  .__react_modal_image__modal_content {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .__react_modal_image__modal_content img, 
  .__react_modal_image__modal_content svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .__react_modal_image__medium_img {
    max-width: 98%;
    max-height: 98%;
    background-color: `.concat(r, `;
  }

  .__react_modal_image__large_img {
    cursor: move;
    background-color: `).concat(r, `
  }

  .__react_modal_image__icon_menu a {
    display: inline-block;
    font-size: 40px;
    cursor: pointer;
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0px 5px 0px 5px;
    margin-left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }

  .__react_modal_image__icon_menu {
    display: inline-block;
    float: right;
  }

  .__react_modal_image__caption {
    display: inline-block;
    color: white;
    font-size: 120%;
    padding: 10px;
    margin: 0;
  }

  .__react_modal_image__header {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
`)
    },
    cr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }), p.createElement("path", {
            d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
        }))
    },
    fr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }), p.createElement("path", {
            d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
        }))
    },
    dr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
        }), p.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }))
    },
    pr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), p.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }))
    },
    hr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            height: "48",
            viewBox: "0 0 24 24",
            width: "48",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
        }), p.createElement("path", {
            d: "M0 0h24v24H0V0z",
            fill: "none"
        }))
    },
    mr = function() {
        return p.createElement("svg", {
            fill: "#ffffff",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        }, p.createElement("path", {
            fill: "none",
            d: "M0 0h24v24H0V0zm0 0h24v24H0V0z"
        }), p.createElement("path", {
            d: "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"
        }))
    };

function gr(t) {
    return document.location.hostname !== new URL(t, document.location).hostname
}
var vr = function(e) {
        return function(r) {
            gr(e) && (r.preventDefault(), fetch(e).then(function(n) {
                return n.ok || console.error("Failed to download image, HTTP status " + n.status + " from " + e), n.blob().then(function(o) {
                    var i = document.createElement("a");
                    i.setAttribute("download", e.split("/").pop()), i.href = URL.createObjectURL(o), i.click()
                })
            }).catch(function(n) {
                console.error(n), console.error("Failed to download image from " + e)
            }))
        }
    },
    yr = function(e) {
        var r = e.image,
            n = e.alt,
            o = e.zoomed,
            i = e.toggleZoom,
            l = e.toggleRotate,
            a = e.onClose,
            s = e.enableDownload,
            c = e.enableZoom,
            u = e.enableRotate;
        return p.createElement("div", {
            className: "__react_modal_image__header"
        }, p.createElement("span", {
            className: "__react_modal_image__icon_menu"
        }, s && p.createElement("a", {
            href: r,
            download: !0,
            onClick: vr(r)
        }, p.createElement(dr, null)), c && p.createElement("a", {
            onClick: i
        }, o ? p.createElement(fr, null) : p.createElement(cr, null)), u && p.createElement("a", {
            onClick: l
        }, p.createElement(mr, null)), p.createElement("a", {
            onClick: a
        }, p.createElement(pr, null))), n && p.createElement("span", {
            className: "__react_modal_image__caption"
        }, n))
    };

function Ze(t) {
    "@babel/helpers - typeof";
    return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ze(t)
}

function br(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _r(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function wr(t, e, r) {
    return e && _r(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function xr(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && Ke(t, e)
}

function Ke(t, e) {
    return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Ke(t, e)
}

function Rr(t) {
    var e = Mr();
    return function() {
        var n = Ie(t),
            o;
        if (e) {
            var i = Ie(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return Tr(this, o)
    }
}

function Tr(t, e) {
    if (e && (Ze(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Oe(t)
}

function Oe(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Mr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ie(t) {
    return Ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ie(t)
}

function Ae(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var at = function(t) {
    xr(r, t);
    var e = Rr(r);

    function r() {
        var n;
        br(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return n = e.call.apply(e, [this].concat(i)), Ae(Oe(n), "state", {
            loading: !0
        }), Ae(Oe(n), "handleOnLoad", function() {
            n.setState({
                loading: !1
            })
        }), Ae(Oe(n), "handleOnContextMenu", function(a) {
            !n.props.contextMenu && a.preventDefault()
        }), n
    }
    return wr(r, [{
        key: "render",
        value: function() {
            var o = this.props,
                i = o.id,
                l = o.className,
                a = o.src,
                s = o.style,
                c = o.handleDoubleClick;
            return p.createElement("div", null, this.state.loading && p.createElement(hr, null), p.createElement("img", {
                id: i,
                className: l,
                src: a,
                style: s,
                onLoad: this.handleOnLoad,
                onDoubleClick: c,
                onContextMenu: this.handleOnContextMenu
            }))
        }
    }]), r
}(f.Component);

function Ye(t) {
    "@babel/helpers - typeof";
    return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ye(t)
}

function Sr(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function Er(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function Or(t, e, r) {
    return e && Er(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Pr(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && Xe(t, e)
}

function Xe(t, e) {
    return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Xe(t, e)
}

function Cr(t) {
    var e = Ir();
    return function() {
        var n = De(t),
            o;
        if (e) {
            var i = De(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return zr(this, o)
    }
}

function zr(t, e) {
    if (e && (Ye(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ne(t)
}

function ne(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Ir() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function De(t) {
    return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, De(t)
}

function ae(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var kt = function(t) {
        Pr(r, t);
        var e = Cr(r);

        function r() {
            var n;
            Sr(this, r);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            return n = e.call.apply(e, [this].concat(i)), ae(ne(n), "state", {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), ae(ne(n), "handleKeyDown", function(a) {
                (a.keyCode === 27 || a.keyCode === 13) && n.props.onClose()
            }), ae(ne(n), "getCoordinatesIfOverImg", function(a) {
                var s = a.changedTouches ? a.changedTouches[0] : a;
                if (s.target.id === "react-modal-image-img") {
                    var c = n.contentEl.getBoundingClientRect(),
                        u = s.clientX - c.left,
                        h = s.clientY - c.top;
                    return {
                        x: u,
                        y: h
                    }
                }
            }), ae(ne(n), "handleMouseDownOrTouchStart", function(a) {
                if (a.preventDefault(), !(a.touches && a.touches.length > 1)) {
                    var s = n.getCoordinatesIfOverImg(a);
                    s || n.props.onClose(), n.state.zoomed && n.setState(function(c) {
                        return {
                            moveStart: {
                                x: s.x - c.move.x,
                                y: s.y - c.move.y
                            }
                        }
                    })
                }
            }), ae(ne(n), "handleMouseMoveOrTouchMove", function(a) {
                if (a.preventDefault(), !(!n.state.zoomed || !n.state.moveStart) && !(a.touches && a.touches.length > 1)) {
                    var s = n.getCoordinatesIfOverImg(a);
                    s && n.setState(function(c) {
                        return {
                            move: {
                                x: s.x - c.moveStart.x,
                                y: s.y - c.moveStart.y
                            }
                        }
                    })
                }
            }), ae(ne(n), "handleMouseUpOrTouchEnd", function(a) {
                n.setState({
                    moveStart: void 0
                })
            }), ae(ne(n), "toggleZoom", function(a) {
                a.preventDefault(), n.setState(function(s) {
                    return {
                        zoomed: !s.zoomed,
                        move: s.zoomed ? {
                            x: 0,
                            y: 0
                        } : s.move
                    }
                })
            }), ae(ne(n), "toggleRotate", function(a) {
                a.preventDefault();
                var s = n.state.rotationDeg;
                if (s === 360) {
                    n.setState({
                        rotationDeg: 90
                    });
                    return
                }
                n.setState(function(c) {
                    return {
                        rotationDeg: c.rotationDeg += 90
                    }
                })
            }), n
        }
        return Or(r, [{
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown, !1)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown, !1)
            }
        }, {
            key: "render",
            value: function() {
                var o = this,
                    i = this.props,
                    l = i.medium,
                    a = i.large,
                    s = i.alt,
                    c = i.onClose,
                    u = i.hideDownload,
                    h = i.hideZoom,
                    d = i.showRotate,
                    g = i.imageBackgroundColor,
                    I = g === void 0 ? "black" : g,
                    S = this.state,
                    P = S.move,
                    T = S.zoomed,
                    z = S.rotationDeg;
                return p.createElement("div", null, p.createElement(sr, {
                    name: "__react_modal_image__lightbox",
                    css: ur({
                        imageBackgroundColor: I
                    })
                }), p.createElement("div", {
                    className: "__react_modal_image__modal_container"
                }, p.createElement("div", {
                    className: "__react_modal_image__modal_content",
                    onMouseDown: this.handleMouseDownOrTouchStart,
                    onMouseUp: this.handleMouseUpOrTouchEnd,
                    onMouseMove: this.handleMouseMoveOrTouchMove,
                    onTouchStart: this.handleMouseDownOrTouchStart,
                    onTouchEnd: this.handleMouseUpOrTouchEnd,
                    onTouchMove: this.handleMouseMoveOrTouchMove,
                    ref: function(_) {
                        o.contentEl = _
                    }
                }, T && p.createElement(at, {
                    id: "react-modal-image-img",
                    className: "__react_modal_image__large_img",
                    src: a || l,
                    style: {
                        transform: "translate3d(-50%, -50%, 0) translate3d(".concat(P.x, "px, ").concat(P.y, "px, 0) rotate(").concat(z, "deg)"),
                        WebkitTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(P.x, "px, ").concat(P.y, "px, 0) rotate(").concat(z, "deg)"),
                        MsTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(P.x, "px, ").concat(P.y, "px, 0) rotate(").concat(z, "deg)")
                    },
                    handleDoubleClick: this.toggleZoom
                }), !T && p.createElement(at, {
                    id: "react-modal-image-img",
                    className: "__react_modal_image__medium_img",
                    src: l || a,
                    handleDoubleClick: this.toggleZoom,
                    contextMenu: !l,
                    style: {
                        transform: "translate3d(-50%, -50%, 0) rotate(".concat(z, "deg)"),
                        WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(z, "deg)"),
                        MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(z, "deg)")
                    }
                })), p.createElement(yr, {
                    image: a || l,
                    alt: s,
                    zoomed: T,
                    toggleZoom: this.toggleZoom,
                    toggleRotate: this.toggleRotate,
                    onClose: c,
                    enableDownload: !u,
                    enableZoom: !h,
                    enableRotate: !!d
                })))
            }
        }]), r
    }(f.Component),
    ue = {},
    we = {},
    xe = {},
    lt;

function Dr() {
    if (lt) return xe;
    lt = 1, Object.defineProperty(xe, "__esModule", {
        value: !0
    }), xe.default = t;

    function t(e, r) {
        if (e === r) return !0;
        var n = Object.keys(e),
            o = Object.keys(r);
        if (n.length !== o.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, l = 0; l < n.length; l++)
            if (!i.call(r, n[l]) || e[n[l]] !== r[n[l]]) return !1;
        return !0
    }
    return xe
}
var Re = {},
    We = {},
    st;

function kr() {
    return st || (st = 1, function(t) {
        Object.defineProperties(t, {
            __esModule: {
                value: !0
            },
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });

        function e(_) {
            return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _
        }
        var r = {
                exports: {}
            },
            n = r.exports = {},
            o, i;

        function l() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }(function() {
            try {
                typeof setTimeout == "function" ? o = setTimeout : o = l
            } catch {
                o = l
            }
            try {
                typeof clearTimeout == "function" ? i = clearTimeout : i = a
            } catch {
                i = a
            }
        })();

        function s(_) {
            if (o === setTimeout) return setTimeout(_, 0);
            if ((o === l || !o) && setTimeout) return o = setTimeout, setTimeout(_, 0);
            try {
                return o(_, 0)
            } catch {
                try {
                    return o.call(null, _, 0)
                } catch {
                    return o.call(this, _, 0)
                }
            }
        }

        function c(_) {
            if (i === clearTimeout) return clearTimeout(_);
            if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(_);
            try {
                return i(_)
            } catch {
                try {
                    return i.call(null, _)
                } catch {
                    return i.call(this, _)
                }
            }
        }
        var u = [],
            h = !1,
            d, g = -1;

        function I() {
            !h || !d || (h = !1, d.length ? u = d.concat(u) : g = -1, u.length && S())
        }

        function S() {
            if (!h) {
                var _ = s(I);
                h = !0;
                for (var R = u.length; R;) {
                    for (d = u, u = []; ++g < R;) d && d[g].run();
                    g = -1, R = u.length
                }
                d = null, h = !1, c(_)
            }
        }
        n.nextTick = function(_) {
            var R = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var C = 1; C < arguments.length; C++) R[C - 1] = arguments[C];
            u.push(new P(_, R)), u.length === 1 && !h && s(S)
        };

        function P(_, R) {
            this.fun = _, this.array = R
        }
        P.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};

        function T() {}
        n.on = T, n.addListener = T, n.once = T, n.off = T, n.removeListener = T, n.removeAllListeners = T, n.emit = T, n.prependListener = T, n.prependOnceListener = T, n.listeners = function(_) {
            return []
        }, n.binding = function(_) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(_) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        };
        var z = r.exports;
        const $ = e(z);
        t.default = $, t.process = $
    }(We)), We
}
var ut;

function $r() {
    if (ut) return Re;
    ut = 1, Object.defineProperty(Re, "__esModule", {
        value: !0
    }), Re.default = n;
    var t = kr(),
        e = r(t);

    function r(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function n(o, i) {
        var l = [],
            a = 0,
            s = !0;

        function c(h) {
            function d() {
                i && i(h, l)
            }
            s ? e.default.nextTick(d) : d()
        }

        function u(h, d) {
            l.push(d), ++a >= o.length || h ? c(h) : o[a](u)
        }
        o.length > 0 ? o[0](u) : c(null), s = !1
    }
    return Re
}
var Te = {},
    ct;

function jr() {
    if (ct) return Te;
    ct = 1, Object.defineProperty(Te, "__esModule", {
        value: !0
    }), Te.default = e;
    var t = function() {};

    function e(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t;
        r() ? n(function i(l) {
            for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) s[c - 1] = arguments[c];
            l ? o(l) : r.apply(this, s) ? n(i) : o(null)
        }) : o(null)
    }
    return Te
}
var Me = {},
    ft;

function Vr() {
    if (ft) return Me;
    ft = 1, Object.defineProperty(Me, "__esModule", {
        value: !0
    }), Me.default = t;

    function t(e, r) {
        var n = void 0,
            o = void 0,
            i = void 0,
            l = void 0,
            a = 0;

        function s() {
            l = 0, a = +new Date, i = e.apply(n, o), n = null, o = null
        }
        return function() {
            n = this, o = arguments;
            var u = new Date - a;
            return l || (u >= r ? s() : l = setTimeout(s, r - u)), i
        }
    }
    return Me
}
var Se = {},
    dt;

function Nr() {
    if (dt) return Se;
    dt = 1, Object.defineProperty(Se, "__esModule", {
        value: !0
    }), Se.default = e;
    var t = 0;

    function e() {
        return t++
    }
    return Se
}
var ge = {},
    pt;

function Ar() {
    if (pt) return ge;
    pt = 1, Object.defineProperty(ge, "__esModule", {
        value: !0
    }), ge.innerHeight = t, ge.innerWidth = e;

    function t(r) {
        var n = window.getComputedStyle(r, null);
        return n ? r.clientHeight - parseInt(n.getPropertyValue("padding-top"), 10) - parseInt(n.getPropertyValue("padding-bottom"), 10) : r.clientHeight
    }

    function e(r) {
        var n = window.getComputedStyle(r, null);
        return n ? r.clientWidth - parseInt(n.getPropertyValue("padding-left"), 10) - parseInt(n.getPropertyValue("padding-right"), 10) : r.clientWidth
    }
    return ge
}
var ht;

function Wr() {
    if (ht) return we;
    ht = 1, Object.defineProperty(we, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(w) {
            for (var m = 1; m < arguments.length; m++) {
                var E = arguments[m];
                for (var v in E) Object.prototype.hasOwnProperty.call(E, v) && (w[v] = E[v])
            }
            return w
        },
        e = function() {
            function w(m, E) {
                for (var v = 0; v < E.length; v++) {
                    var x = E[v];
                    x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(m, x.key, x)
                }
            }
            return function(m, E, v) {
                return E && w(m.prototype, E), v && w(m, v), m
            }
        }(),
        r = Et(),
        n = T(r),
        o = hn(),
        i = T(o),
        l = Dr(),
        a = T(l),
        s = $r(),
        c = T(s),
        u = jr(),
        h = T(u),
        d = Vr(),
        g = T(d),
        I = Nr(),
        S = T(I),
        P = Ar();

    function T(w) {
        return w && w.__esModule ? w : {
            default: w
        }
    }

    function z(w, m) {
        var E = {};
        for (var v in w) m.indexOf(v) >= 0 || Object.prototype.hasOwnProperty.call(w, v) && (E[v] = w[v]);
        return E
    }

    function $(w, m) {
        if (!(w instanceof m)) throw new TypeError("Cannot call a class as a function")
    }

    function _(w, m) {
        if (!w) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return m && (typeof m == "object" || typeof m == "function") ? m : w
    }

    function R(w, m) {
        if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof m);
        w.prototype = Object.create(m && m.prototype, {
            constructor: {
                value: w,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(w, m) : w.__proto__ = m)
    }

    function C(w, m) {
        return w.scrollWidth - 1 <= m
    }

    function V(w, m) {
        return w.scrollHeight - 1 <= m
    }

    function G() {}
    var Z = function(w) {
        R(m, w);

        function m(E) {
            $(this, m);
            var v = _(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, E));
            return v.state = {
                fontSize: null,
                ready: !1
            }, v.handleWindowResize = function() {
                v.process()
            }, "perfectFit" in E && console.warn("TextFit property perfectFit has been removed."), v.handleWindowResize = (0, g.default)(v.handleWindowResize, E.throttle), v
        }
        return e(m, [{
            key: "componentDidMount",
            value: function() {
                var v = this.props.autoResize;
                v && window.addEventListener("resize", this.handleWindowResize), this.process()
            }
        }, {
            key: "componentDidUpdate",
            value: function(v) {
                var x = this.state.ready;
                x && ((0, a.default)(this.props, v) || this.process())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var v = this.props.autoResize;
                v && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, S.default)()
            }
        }, {
            key: "process",
            value: function() {
                var v = this,
                    x = this.props,
                    D = x.min,
                    j = x.max,
                    N = x.mode,
                    W = x.forceSingleModeWidth,
                    oe = x.onReady,
                    J = this._parent,
                    K = this._child,
                    Y = (0, P.innerWidth)(J),
                    H = (0, P.innerHeight)(J);
                if (H <= 0 || isNaN(H)) {
                    console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
                    return
                }
                if (Y <= 0 || isNaN(Y)) {
                    console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
                    return
                }
                var B = (0, S.default)();
                this.pid = B;
                var ee = function() {
                        return B !== v.pid
                    },
                    k = N === "multi" ? function() {
                        return V(K, H)
                    } : function() {
                        return C(K, Y)
                    },
                    de = N === "multi" ? function() {
                        return C(K, Y)
                    } : function() {
                        return V(K, H)
                    },
                    O = void 0,
                    L = D,
                    U = j;
                this.setState({
                    ready: !1
                }), (0, c.default)([function(q) {
                    return (0, h.default)(function() {
                        return L <= U
                    }, function(te) {
                        if (ee()) return te(!0);
                        O = parseInt((L + U) / 2, 10), v.setState({
                            fontSize: O
                        }, function() {
                            return ee() ? te(!0) : (k() ? L = O + 1 : U = O - 1, te())
                        })
                    }, q)
                }, function(q) {
                    return N === "single" && W || de() ? q() : (L = D, U = O, (0, h.default)(function() {
                        return L < U
                    }, function(te) {
                        if (ee()) return te(!0);
                        O = parseInt((L + U) / 2, 10), v.setState({
                            fontSize: O
                        }, function() {
                            return B !== v.pid ? te(!0) : (de() ? L = O + 1 : U = O - 1, te())
                        })
                    }, q))
                }, function(q) {
                    if (O = Math.min(L, U), O = Math.max(O, D), O = Math.min(O, j), O = Math.max(O, 0), ee()) return q(!0);
                    v.setState({
                        fontSize: O
                    }, q)
                }], function(q) {
                    q || ee() || v.setState({
                        ready: !0
                    }, function() {
                        return oe(O)
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var v = this,
                    x = this.props,
                    D = x.children,
                    j = x.text,
                    N = x.style;
                x.min, x.max;
                var W = x.mode;
                x.forceWidth, x.forceSingleModeWidth, x.throttle, x.autoResize, x.onReady;
                var oe = z(x, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"]),
                    J = this.state,
                    K = J.fontSize,
                    Y = J.ready,
                    H = t({}, N, {
                        fontSize: K
                    }),
                    B = {
                        display: Y ? "block" : "inline-block"
                    };
                return W === "single" && (B.whiteSpace = "nowrap"), n.default.createElement("div", t({
                    ref: function(k) {
                        return v._parent = k
                    },
                    style: H
                }, oe), n.default.createElement("div", {
                    ref: function(k) {
                        return v._child = k
                    },
                    style: B
                }, j && typeof D == "function" ? Y ? D(j) : j : D))
            }
        }]), m
    }(n.default.Component);
    return Z.propTypes = {
        children: i.default.node,
        text: i.default.string,
        min: i.default.number,
        max: i.default.number,
        mode: i.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: i.default.bool,
        throttle: i.default.number,
        onReady: i.default.func
    }, Z.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: G
    }, we.default = Z, we
}
var mt;

function Lr() {
    if (mt) return ue;
    mt = 1, Object.defineProperty(ue, "__esModule", {
        value: !0
    }), ue.Textfit = void 0;
    var t = Wr(),
        e = r(t);

    function r(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    return ue.Textfit = e.default, ue.default = e.default, ue
}
var qr = Lr();
const Fr = {
        backgroundColor: "rgba(255,255,31, 0.21)",
        boxShadow: "10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)",
        borderRadius: 9
    },
    Hr = _e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,
    tt = class tt extends f.Component {
        render() {
            const {
                paddingHorizontal: e,
                paddingVertical: r,
                customStyle: n,
                ...o
            } = this.props;
            return delete o.text, delete o.highlighted, M.jsx(Hr, {
                className: this.props.customClass,
                style: n,
                children: M.jsx(qr.Textfit, {
                    style: {
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: this.props.disableHorizontalCentering ? "flex-start" : "center",
                        alignItems: "center",
                        paddingTop: r,
                        paddingBottom: r,
                        paddingLeft: this.props.paddingLeft || e,
                        paddingRight: e,
                        boxSizing: "border-box",
                        fontWeight: this.props.noBold ? "normal" : 900
                    },
                    ...o,
                    children: M.jsx("div", {
                        style: this.props.highlighted ? Fr : void 0,
                        children: this.props.text
                    })
                })
            })
        }
    };
tt.defaultProps = {
    paddingHorizontal: "6%",
    paddingVertical: 15,
    max: 50,
    mode: "single",
    forceSingleModeWidth: !1
};
let fe = tt;
var ve = {},
    Le = {
        exports: {}
    },
    gt;

function Br() {
    return gt || (gt = 1, function(t) {
        function e(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Le)), Le.exports
}
var qe = {
        exports: {}
    },
    Fe = {
        exports: {}
    },
    vt;

function Ur() {
    return vt || (vt = 1, function(t) {
        function e(r) {
            "@babel/helpers - typeof";
            return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                return typeof n
            } : function(n) {
                return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Fe)), Fe.exports
}
var yt;

function Qr() {
    return yt || (yt = 1, function(t) {
        var e = Ur().default;

        function r(n, o) {
            if (typeof WeakMap == "function") var i = new WeakMap,
                l = new WeakMap;
            return (t.exports = r = function(s, c) {
                if (!c && s && s.__esModule) return s;
                var u, h, d = {
                    __proto__: null,
                    default: s
                };
                if (s === null || e(s) != "object" && typeof s != "function") return d;
                if (u = c ? l : i) {
                    if (u.has(s)) return u.get(s);
                    u.set(s, d)
                }
                for (var g in s) g !== "default" && {}.hasOwnProperty.call(s, g) && ((h = (u = Object.defineProperty) && Object.getOwnPropertyDescriptor(s, g)) && (h.get || h.set) ? u(d, g, h) : d[g] = s[g]);
                return d
            }, t.exports.__esModule = !0, t.exports.default = t.exports)(n, o)
        }
        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    }(qe)), qe.exports
}
var He = {};
const Zr = mn($n);
var bt;

function Kr() {
    return bt || (bt = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return e.createSvgIcon
            }
        });
        var e = Zr
    }(He)), He
}
var _t;

function Yr() {
    if (_t) return ve;
    _t = 1;
    var t = Br(),
        e = Qr();
    Object.defineProperty(ve, "__esModule", {
        value: !0
    }), ve.default = void 0;
    var r = e(Et()),
        n = t(Kr()),
        o = (0, n.default)(r.createElement("path", {
            d: "M8 5v14l11-7z"
        }), "PlayArrow");
    return ve.default = o, ve
}
var Xr = Yr();
const Gr = gn(Xr);
var ke = (t => (t.multipleChoice = "mc", t.textInput = "text", t))(ke || {}),
    Pe = (t => (t[t.exact = 1] = "exact", t[t.contains = 2] = "contains", t))(Pe || {}),
    Jr = Object.defineProperty,
    F = (t, e, r, n) => {
        for (var o = void 0, i = t.length - 1, l; i >= 0; i--)(l = t[i]) && (o = l(e, r, o) || o);
        return o && Jr(e, r, o), o
    };
let A = class {
    constructor() {
        this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.audioQuestion = null, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = e => {
            this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, e && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0)
        }, vn(this)
    }
};
F([Q], A.prototype, "enabled");
F([Q], A.prototype, "canPlayAgain");
F([Q], A.prototype, "isCurrentlySpeaking");
F([Q], A.prototype, "hasPlayedForCurrentQuestion");
F([Q], A.prototype, "currentlyPlayingQuestionAudio");
F([Q], A.prototype, "currentlyPlayingQuestionText");
F([Q], A.prototype, "currentlyPlayingAnswerAudio");
F([Q], A.prototype, "answerIndex");
F([Q], A.prototype, "finishedReadingQuestion");
F([Q], A.prototype, "speechQuestion");
F([Q], A.prototype, "chosenVoice");
F([Q], A.prototype, "answersTimeout");
F([yn.bound], A.prototype, "reset");
const y = {
        readToMe: new A
    },
    $t = 500,
    jt = .8,
    eo = ["Samantha", "Victoria"],
    to = (t, e = !0) => {
        Vt(e), no(t)
    },
    Vt = t => {
        y.readToMe.audioQuestion && (y.readToMe.audioQuestion.stop(), y.readToMe.audioQuestion = null), y.readToMe.speechQuestion && (y.readToMe.speechQuestion.onend = null, y.readToMe.speechQuestion = null), y.readToMe.answersTimeout && clearTimeout(y.readToMe.answersTimeout), y.readToMe.reset(t), window.speechSynthesis.cancel()
    },
    no = async t => {
        if (!y.readToMe.enabled && t.audio && !y.readToMe.hasPlayedForCurrentQuestion) {
            Nt(t.audio);
            return
        }
        if ("speechSynthesis" in window && y.readToMe.enabled && !y.readToMe.isCurrentlySpeaking && !y.readToMe.hasPlayedForCurrentQuestion) {
            y.readToMe.isCurrentlySpeaking = !0;
            let e, r;
            t != null && t.text && (r = new SpeechSynthesisUtterance(t.text), r.voice = await Wt(), r.rate = jt, y.readToMe.speechQuestion = r), t != null && t.audio && (e = new Ct.Howl({
                src: [t.audio],
                onplay: At,
                onend: t != null && t.text ? () => window.speechSynthesis.speak(r) : () => ye(t)
            }), y.readToMe.audioQuestion = e), e && r ? (r.onstart = xt, r.onend = () => ye(t), e.play(), y.readToMe.hasPlayedForCurrentQuestion = !0) : r ? (r.onstart = xt, r.onend = () => ye(t), window.speechSynthesis.speak(r), y.readToMe.hasPlayedForCurrentQuestion = !0) : e ? (e.play(), y.readToMe.hasPlayedForCurrentQuestion = !0) : (ye(t), y.readToMe.hasPlayedForCurrentQuestion = !0)
        }
    }, Nt = t => {
        if (!y.readToMe.enabled || y.readToMe.enabled && !y.readToMe.currentlyPlayingQuestionAudio && !y.readToMe.currentlyPlayingAnswerAudio && y.readToMe.hasPlayedForCurrentQuestion) {
            let e = new Ct.Howl({
                src: [be(t)],
                onplay: () => At(),
                onend: () => ye(),
                html5: !0
            });
            y.readToMe.audioQuestion = e, e.play()
        }
    }, ro = async t => {
        y.readToMe.isCurrentlySpeaking = !0;
        const e = t.answers.filter(r => r.text != null);
        if (t.type === ke.multipleChoice && e.length) {
            y.readToMe.currentlyPlayingAnswerAudio = !0;
            const r = t.answers.findIndex(n => n._id === e[e.length - 1]._id);
            for (const [n, o] of t.answers.entries()) {
                if (!o.text) continue;
                let i = new SpeechSynthesisUtterance;
                i.text = o.text, i.rate = jt, i.voice = await Wt(), i.onstart = () => y.readToMe.answerIndex = n, i.onend = () => {
                    window.speechSynthesis.pause(), setTimeout(() => window.speechSynthesis.resume(), $t)
                }, n >= r && (i.onend = () => wt()), window.speechSynthesis.speak(i)
            }
        } else wt()
    }, wt = () => {
        y.readToMe.isCurrentlySpeaking = !1, y.readToMe.currentlyPlayingAnswerAudio = !1, y.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel()
    }, At = () => {
        y.readToMe.currentlyPlayingQuestionAudio = !0
    }, xt = () => {
        y.readToMe.currentlyPlayingQuestionText = !0
    }, ye = t => {
        y.readToMe.currentlyPlayingQuestionAudio = !1, y.readToMe.currentlyPlayingQuestionText = !1, t && (y.readToMe.answersTimeout = setTimeout(() => ro(t), $t))
    }, Wt = async () => {
        let t = await oo();
        if (t != null && t.length) {
            const e = t.filter(r => eo.includes(r.name));
            if (e.length) return e[0]
        }
        return null
    }, oo = () => new Promise(t => {
        y.readToMe.chosenVoice && t([y.readToMe.chosenVoice]);
        let e = speechSynthesis.getVoices();
        if (e.length) {
            t(e);
            return
        } else t([]);
        speechSynthesis.onvoiceschanged = () => {
            e = speechSynthesis.getVoices(), t(e)
        }
    }), io = () => y.readToMe.finishedReadingQuestion, ao = () => y.readToMe.canPlayAgain, lo = {
        play: to,
        stop: Vt,
        hasFinishedReading: io,
        playAudio: Nt,
        canPlayAgain: ao
    }, so = "Replay Audio", Lt = _n(t => {
        const e = () => {
            lo.playAudio(t.audio)
        };
        return M.jsx(Mn, {
            title: M.jsx("span", {
                style: {
                    fontSize: 14
                },
                children: so
            }),
            placement: "left",
            children: M.jsx(Gn, {
                onClick: e,
                color: "secondary",
                style: {
                    flexShrink: 0
                },
                children: M.jsx(Gr, {})
            })
        })
    });
var uo = ["client", "offset", "scroll", "bounds", "margin"];

function Rt(t) {
    var e = [];
    return uo.forEach(function(r) {
        t[r] && e.push(r)
    }), e
}

function Tt(t, e) {
    var r = {};
    if (e.indexOf("client") > -1 && (r.client = {
            top: t.clientTop,
            left: t.clientLeft,
            width: t.clientWidth,
            height: t.clientHeight
        }), e.indexOf("offset") > -1 && (r.offset = {
            top: t.offsetTop,
            left: t.offsetLeft,
            width: t.offsetWidth,
            height: t.offsetHeight
        }), e.indexOf("scroll") > -1 && (r.scroll = {
            top: t.scrollTop,
            left: t.scrollLeft,
            width: t.scrollWidth,
            height: t.scrollHeight
        }), e.indexOf("bounds") > -1) {
        var n = t.getBoundingClientRect();
        r.bounds = {
            top: n.top,
            right: n.right,
            bottom: n.bottom,
            left: n.left,
            width: n.width,
            height: n.height
        }
    }
    if (e.indexOf("margin") > -1) {
        var o = getComputedStyle(t);
        r.margin = {
            top: o ? parseInt(o.marginTop) : 0,
            right: o ? parseInt(o.marginRight) : 0,
            bottom: o ? parseInt(o.marginBottom) : 0,
            left: o ? parseInt(o.marginLeft) : 0
        }
    }
    return r
}

function co(t) {
    var e = t && t.ownerDocument && t.ownerDocument.defaultView;
    return e || window
}

function fo(t) {
    return function(e) {
        var r, n;
        return n = r = function(o) {
            zt(i, o);

            function i() {
                for (var a, s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                return a = o.call.apply(o, [this].concat(c)) || this, a.state = {
                    contentRect: {
                        entry: {},
                        client: {},
                        offset: {},
                        scroll: {},
                        bounds: {},
                        margin: {}
                    }
                }, a._animationFrameID = null, a._resizeObserver = null, a._node = null, a._window = null, a.measure = function(h) {
                    var d = Tt(a._node, Rt(a.props));
                    h && (d.entry = h[0].contentRect), a._animationFrameID = a._window.requestAnimationFrame(function() {
                        a._resizeObserver !== null && (a.setState({
                            contentRect: d
                        }), typeof a.props.onResize == "function" && a.props.onResize(d))
                    })
                }, a._handleRef = function(h) {
                    a._resizeObserver !== null && a._node !== null && a._resizeObserver.unobserve(a._node), a._node = h, a._window = co(a._node);
                    var d = a.props.innerRef;
                    d && (typeof d == "function" ? d(a._node) : d.current = a._node), a._resizeObserver !== null && a._node !== null && a._resizeObserver.observe(a._node)
                }, a
            }
            var l = i.prototype;
            return l.componentDidMount = function() {
                this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new bn(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Tt(this._node, Rt(this.props))))
            }, l.componentWillUnmount = function() {
                this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null)
            }, l.render = function() {
                var s = this.props;
                s.innerRef, s.onResize;
                var c = St(s, ["innerRef", "onResize"]);
                return f.createElement(e, re({}, c, {
                    measureRef: this._handleRef,
                    measure: this.measure,
                    contentRect: this.state.contentRect
                }))
            }, i
        }(f.Component), r.propTypes = {
            client: X.bool,
            offset: X.bool,
            scroll: X.bool,
            bounds: X.bool,
            margin: X.bool,
            innerRef: X.oneOfType([X.object, X.func]),
            onResize: X.func
        }, n
    }
}
var et = fo()(function(t) {
    var e = t.measure,
        r = t.measureRef,
        n = t.contentRect,
        o = t.children;
    return o({
        measure: e,
        measureRef: r,
        contentRect: n
    })
});
et.displayName = "Measure";
et.propTypes.children = X.func;
const qt = (t, e) => M.jsx("span", {
        className: t ? "" : "notranslate lang-en",
        children: e
    }),
    po = t => t && (t.isTrusted === !0 || t.isTrusted === !1) ? t.isTrusted : !0,
    So = (t, e) => {
        e && po(t) && e()
    },
    Eo = (t, e) => {
        if (!e) return !1;
        let r = !1;
        return t && t.answers.find(o => {
            if (o.correct) {
                if (t.type === ke.multipleChoice) return e === o._id;
                if (t.type === ke.textInput) {
                    const i = Mt(e),
                        l = Mt(o.text),
                        a = o.textType ?? Pe.exact;
                    if (a === Pe.exact) return i === l;
                    if (a === Pe.contains) return i.includes(l)
                }
            }
            return !1
        }) && (r = !0), r
    },
    Mt = t => {
        let e = t.trim();
        return e = e.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"'), e = e.toLowerCase(), e
    },
    Oo = t => {
        const [e, r] = p.useState({
            width: -1,
            height: -1
        }), [n, o] = p.useState(!1), i = g => {
            g.bounds && r(g.bounds)
        }, l = () => o(!0), a = () => o(!1), {
            text: s,
            image: c,
            audio: u,
            latex: h
        } = t, {
            width: d
        } = e;
        return M.jsxs(M.Fragment, {
            children: [n && M.jsx(kt, {
                large: be(c),
                onClose: a,
                hideDownload: !0,
                showRotate: !1,
                hideZoom: !0
            }), M.jsxs(Ft, {
                children: [M.jsxs(ho, {
                    children: [M.jsx(et, {
                        bounds: !0,
                        onResize: i,
                        children: ({
                            measureRef: g
                        }) => M.jsx("div", {
                            ref: g,
                            style: {
                                flex: 1
                            }
                        })
                    }), u && M.jsx(Lt, {
                        audio: u
                    }), u && !c && !h && M.jsx("div", {
                        style: {
                            width: "2vw"
                        }
                    }), c && M.jsx("img", {
                        src: be(c),
                        alt: "Question",
                        onClick: l,
                        style: {
                            maxHeight: "90%",
                            maxWidth: `calc(80% - ${u?56:0}px)`,
                            marginRight: "2vw",
                            marginLeft: u ? "2vw" : 0,
                            borderRadius: 4,
                            cursor: "pointer"
                        }
                    }), h && M.jsx(mo, {
                        style: {
                            width: `calc(80% - ${u?56:0}px)`,
                            marginLeft: u ? "2vw" : 0
                        },
                        children: M.jsx(fe, {
                            text: M.jsx(Ot, {
                                latex: h
                            }),
                            noBold: !0
                        })
                    })]
                }), M.jsxs(go, {
                    children: [M.jsx(fe, {
                        text: qt(t.allowGoogleTranslate, s),
                        paddingHorizontal: "0px",
                        paddingVertical: "6%",
                        customStyle: {
                            width: `calc(100% - ${d}px)`
                        },
                        mode: "multi",
                        disableHorizontalCentering: !0,
                        highlighted: t.highlighted,
                        noBold: t.noBold
                    }), M.jsx("div", {
                        style: {
                            width: d,
                            height: "100%"
                        }
                    })]
                })]
            })]
        })
    },
    Ft = _e.div`
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4%;
`,
    ho = _e.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`,
    mo = _e.div`
  height: 90%;
  margin-right: 2vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10%;
`,
    go = _e.div`
  width: 60%;
  display: flex;
  align-items: center;
  height: 100%;
`,
    Po = t => {
        const [e, r] = p.useState(!1), {
            image: n,
            audio: o,
            latex: i
        } = t, l = () => r(!0), a = () => r(!1);
        return M.jsxs(M.Fragment, {
            children: [n && e && M.jsx(kt, {
                large: be(n),
                onClose: a,
                hideDownload: !0,
                showRotate: !1,
                hideZoom: !0
            }), M.jsxs(Ft, {
                children: [o && M.jsx(Lt, {
                    audio: o
                }), n && M.jsx("img", {
                    src: be(n),
                    alt: "Question",
                    onClick: l,
                    style: {
                        maxHeight: "90%",
                        height: "90%",
                        maxWidth: "90%",
                        borderRadius: 4,
                        cursor: "pointer"
                    }
                }), i && M.jsx(fe, {
                    text: M.jsx(Ot, {
                        latex: i
                    }),
                    noBold: !0
                })]
            })]
        })
    },
    Co = t => M.jsx(fe, {
        mode: "multi",
        text: qt(t.allowGoogleTranslate || !1, t.text),
        highlighted: t.highlighted,
        noBold: t.noBold
    });
export {
    Kn as B, Po as I, ke as Q, lo as R, Co as T, Oo as a, fe as b, So as c, En as d, zn as e, On as f, Cn as g, Qr as h, Eo as i, Kr as j, qr as l, Dt as o, qt as p, Br as r, y as s, ce as u
};