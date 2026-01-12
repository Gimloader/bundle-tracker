import {
    r as p,
    bg as Le,
    x as ce,
    b9 as Oe,
    dg as rr,
    aB as Ke,
    _ as W,
    az as yt,
    dI as nr,
    aA as Pe
} from "./_index.js";
import {
    u as wt,
    d as or,
    w as ir,
    b as ut,
    c as ke,
    e as ar,
    a as sr
} from "./capitalize.js";
import {
    _ as ur
} from "./inheritsLoose.js";

function xt() {
    var e = wt() || or;
    return e
}

function ft() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return t.reduce(function(n, i) {
        return i == null ? n : function() {
            for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
            n.apply(this, s), i.apply(this, s)
        }
    }, function() {})
}

function oe(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}

function fr(e) {
    var t = e.controlled,
        r = e.default;
    e.name, e.state;
    var n = p.useRef(t !== void 0),
        i = n.current,
        o = p.useState(r),
        a = o[0],
        s = o[1],
        u = i ? t : a,
        f = p.useCallback(function(c) {
            i || s(c)
        }, []);
    return [u, f]
}

function z(e, t) {
    return p.useMemo(function() {
        return e == null && t == null ? null : function(r) {
            oe(e, r), oe(t, r)
        }
    }, [e, t])
}

function lr(e) {
    var t = p.useState(e),
        r = t[0],
        n = t[1],
        i = e || r;
    return p.useEffect(function() {
        r == null && n("mui-".concat(Math.round(Math.random() * 1e5)))
    }, [r]), i
}
var De = !0,
    He = !1,
    lt = null,
    cr = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
    };

function pr(e) {
    var t = e.type,
        r = e.tagName;
    return !!(r === "INPUT" && cr[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable)
}

function dr(e) {
    e.metaKey || e.altKey || e.ctrlKey || (De = !0)
}

function Ie() {
    De = !1
}

function hr() {
    this.visibilityState === "hidden" && He && (De = !0)
}

function vr(e) {
    e.addEventListener("keydown", dr, !0), e.addEventListener("mousedown", Ie, !0), e.addEventListener("pointerdown", Ie, !0), e.addEventListener("touchstart", Ie, !0), e.addEventListener("visibilitychange", hr, !0)
}

function mr(e) {
    var t = e.target;
    try {
        return t.matches(":focus-visible")
    } catch {}
    return De || pr(t)
}

function gr() {
    He = !0, window.clearTimeout(lt), lt = window.setTimeout(function() {
        He = !1
    }, 100)
}

function br() {
    var e = p.useCallback(function(t) {
        var r = Le.findDOMNode(t);
        r != null && vr(r.ownerDocument)
    }, []);
    return {
        isFocusVisible: mr,
        onBlurVisible: gr,
        ref: e
    }
}
const ct = {
        disabled: !1
    },
    Tt = ce.createContext(null);
var Er = function(t) {
        return t.scrollTop
    },
    pe = "unmounted",
    X = "exited",
    q = "entering",
    ne = "entered",
    Ve = "exiting",
    _ = function(e) {
        ur(t, e);

        function t(n, i) {
            var o;
            o = e.call(this, n, i) || this;
            var a = i,
                s = a && !a.isMounting ? n.enter : n.appear,
                u;
            return o.appearStatus = null, n.in ? s ? (u = X, o.appearStatus = q) : u = ne : n.unmountOnExit || n.mountOnEnter ? u = pe : u = X, o.state = {
                status: u
            }, o.nextCallback = null, o
        }
        t.getDerivedStateFromProps = function(i, o) {
            var a = i.in;
            return a && o.status === pe ? {
                status: X
            } : null
        };
        var r = t.prototype;
        return r.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, r.componentDidUpdate = function(i) {
            var o = null;
            if (i !== this.props) {
                var a = this.state.status;
                this.props.in ? a !== q && a !== ne && (o = q) : (a === q || a === ne) && (o = Ve)
            }
            this.updateStatus(!1, o)
        }, r.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, r.getTimeouts = function() {
            var i = this.props.timeout,
                o, a, s;
            return o = a = s = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, s = i.appear !== void 0 ? i.appear : a), {
                exit: o,
                enter: a,
                appear: s
            }
        }, r.updateStatus = function(i, o) {
            if (i === void 0 && (i = !1), o !== null)
                if (this.cancelNextCallback(), o === q) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var a = this.props.nodeRef ? this.props.nodeRef.current : Oe.findDOMNode(this);
                        a && Er(a)
                    }
                    this.performEnter(i)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === X && this.setState({
                status: pe
            })
        }, r.performEnter = function(i) {
            var o = this,
                a = this.props.enter,
                s = this.context ? this.context.isMounting : i,
                u = this.props.nodeRef ? [s] : [Oe.findDOMNode(this), s],
                f = u[0],
                c = u[1],
                l = this.getTimeouts(),
                h = s ? l.appear : l.enter;
            if (!i && !a || ct.disabled) {
                this.safeSetState({
                    status: ne
                }, function() {
                    o.props.onEntered(f)
                });
                return
            }
            this.props.onEnter(f, c), this.safeSetState({
                status: q
            }, function() {
                o.props.onEntering(f, c), o.onTransitionEnd(h, function() {
                    o.safeSetState({
                        status: ne
                    }, function() {
                        o.props.onEntered(f, c)
                    })
                })
            })
        }, r.performExit = function() {
            var i = this,
                o = this.props.exit,
                a = this.getTimeouts(),
                s = this.props.nodeRef ? void 0 : Oe.findDOMNode(this);
            if (!o || ct.disabled) {
                this.safeSetState({
                    status: X
                }, function() {
                    i.props.onExited(s)
                });
                return
            }
            this.props.onExit(s), this.safeSetState({
                status: Ve
            }, function() {
                i.props.onExiting(s), i.onTransitionEnd(a.exit, function() {
                    i.safeSetState({
                        status: X
                    }, function() {
                        i.props.onExited(s)
                    })
                })
            })
        }, r.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, r.safeSetState = function(i, o) {
            o = this.setNextCallback(o), this.setState(i, o)
        }, r.setNextCallback = function(i) {
            var o = this,
                a = !0;
            return this.nextCallback = function(s) {
                a && (a = !1, o.nextCallback = null, i(s))
            }, this.nextCallback.cancel = function() {
                a = !1
            }, this.nextCallback
        }, r.onTransitionEnd = function(i, o) {
            this.setNextCallback(o);
            var a = this.props.nodeRef ? this.props.nodeRef.current : Oe.findDOMNode(this),
                s = i == null && !this.props.addEndListener;
            if (!a || s) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback],
                    f = u[0],
                    c = u[1];
                this.props.addEndListener(f, c)
            }
            i != null && setTimeout(this.nextCallback, i)
        }, r.render = function() {
            var i = this.state.status;
            if (i === pe) return null;
            var o = this.props,
                a = o.children;
            o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
            var s = rr(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return ce.createElement(Tt.Provider, {
                value: null
            }, typeof a == "function" ? a(i, s) : ce.cloneElement(ce.Children.only(a), s))
        }, t
    }(ce.Component);
_.contextType = Tt;
_.propTypes = {};

function re() {}
_.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: re,
    onEntering: re,
    onEntered: re,
    onExit: re,
    onExiting: re,
    onExited: re
};
_.UNMOUNTED = pe;
_.EXITED = X;
_.ENTERING = q;
_.ENTERED = ne;
_.EXITING = Ve;
var yr = function(t) {
    return t.scrollTop
};

function pt(e, t) {
    var r = e.timeout,
        n = e.style,
        i = n === void 0 ? {} : n;
    return {
        duration: i.transitionDuration || typeof r == "number" ? r : r[t.mode] || 0,
        delay: i.transitionDelay
    }
}

function wr(e) {
    return e = typeof e == "function" ? e() : e, Le.findDOMNode(e)
}
var Be = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
    xr = p.forwardRef(function(t, r) {
        var n = t.children,
            i = t.container,
            o = t.disablePortal,
            a = o === void 0 ? !1 : o,
            s = t.onRendered,
            u = p.useState(null),
            f = u[0],
            c = u[1],
            l = z(p.isValidElement(n) ? n.ref : null, r);
        return Be(function() {
            a || c(wr(i) || document.body)
        }, [i, a]), Be(function() {
            if (f && !a) return oe(r, f),
                function() {
                    oe(r, null)
                }
        }, [r, f, a]), Be(function() {
            s && (f || a) && s()
        }, [s, f, a]), a ? p.isValidElement(n) ? p.cloneElement(n, {
            ref: l
        }) : n : f && Le.createPortal(n, f)
    });

function Ue(e) {
    return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")")
}
var Tr = {
        entering: {
            opacity: 1,
            transform: Ue(1)
        },
        entered: {
            opacity: 1,
            transform: "none"
        }
    },
    Ot = p.forwardRef(function(t, r) {
        var n = t.children,
            i = t.disableStrictModeCompat,
            o = i === void 0 ? !1 : i,
            a = t.in,
            s = t.onEnter,
            u = t.onEntered,
            f = t.onEntering,
            c = t.onExit,
            l = t.onExited,
            h = t.onExiting,
            d = t.style,
            v = t.timeout,
            m = v === void 0 ? "auto" : v,
            w = t.TransitionComponent,
            S = w === void 0 ? _ : w,
            y = Ke(t, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]),
            x = p.useRef(),
            I = p.useRef(),
            T = xt(),
            B = T.unstable_strictMode && !o,
            R = p.useRef(null),
            H = z(n.ref, r),
            V = z(B ? R : void 0, H),
            F = function(O) {
                return function(D, C) {
                    if (O) {
                        var P = B ? [R.current, D] : [D, C],
                            L = yt(P, 2),
                            N = L[0],
                            k = L[1];
                        k === void 0 ? O(N) : O(N, k)
                    }
                }
            },
            Q = F(f),
            Z = F(function(b, O) {
                yr(b);
                var D = pt({
                        style: d,
                        timeout: m
                    }, {
                        mode: "enter"
                    }),
                    C = D.duration,
                    P = D.delay,
                    L;
                m === "auto" ? (L = T.transitions.getAutoHeightDuration(b.clientHeight), I.current = L) : L = C, b.style.transition = [T.transitions.create("opacity", {
                    duration: L,
                    delay: P
                }), T.transitions.create("transform", {
                    duration: L * .666,
                    delay: P
                })].join(","), s && s(b, O)
            }),
            ee = F(u),
            G = F(h),
            K = F(function(b) {
                var O = pt({
                        style: d,
                        timeout: m
                    }, {
                        mode: "exit"
                    }),
                    D = O.duration,
                    C = O.delay,
                    P;
                m === "auto" ? (P = T.transitions.getAutoHeightDuration(b.clientHeight), I.current = P) : P = D, b.style.transition = [T.transitions.create("opacity", {
                    duration: P,
                    delay: C
                }), T.transitions.create("transform", {
                    duration: P * .666,
                    delay: C || P * .333
                })].join(","), b.style.opacity = "0", b.style.transform = Ue(.75), c && c(b)
            }),
            fe = F(l),
            te = function(O, D) {
                var C = B ? O : D;
                m === "auto" && (x.current = setTimeout(C, I.current || 0))
            };
        return p.useEffect(function() {
            return function() {
                clearTimeout(x.current)
            }
        }, []), p.createElement(S, W({
            appear: !0,
            in: a,
            nodeRef: B ? R : void 0,
            onEnter: Z,
            onEntered: ee,
            onEntering: Q,
            onExit: K,
            onExited: fe,
            onExiting: G,
            addEndListener: te,
            timeout: m === "auto" ? null : m
        }, y), function(b, O) {
            return p.cloneElement(n, W({
                style: W({
                    opacity: 0,
                    transform: Ue(.75),
                    visibility: b === "exited" && !a ? "hidden" : void 0
                }, Tr[b], d, n.props.style),
                ref: V
            }, O))
        })
    });
Ot.muiSupportAuto = !0;
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var de = typeof window < "u" && typeof document < "u" && typeof navigator < "u",
    Or = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (de && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0
    }();

function Pr(e) {
    var t = !1;
    return function() {
        t || (t = !0, window.Promise.resolve().then(function() {
            t = !1, e()
        }))
    }
}

function Sr(e) {
    var t = !1;
    return function() {
        t || (t = !0, setTimeout(function() {
            t = !1, e()
        }, Or))
    }
}
var Rr = de && window.Promise,
    Cr = Rr ? Pr : Sr;

function Pt(e) {
    var t = {};
    return e && t.toString.call(e) === "[object Function]"
}

function J(e, t) {
    if (e.nodeType !== 1) return [];
    var r = e.ownerDocument.defaultView,
        n = r.getComputedStyle(e, null);
    return t ? n[t] : n
}

function Ye(e) {
    return e.nodeName === "HTML" ? e : e.parentNode || e.host
}

function he(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
    }
    var t = J(e),
        r = t.overflow,
        n = t.overflowX,
        i = t.overflowY;
    return /(auto|scroll|overlay)/.test(r + i + n) ? e : he(Ye(e))
}

function St(e) {
    return e && e.referenceNode ? e.referenceNode : e
}
var dt = de && !!(window.MSInputMethodContext && document.documentMode),
    ht = de && /MSIE 10/.test(navigator.userAgent);

function ue(e) {
    return e === 11 ? dt : e === 10 ? ht : dt || ht
}

function ie(e) {
    if (!e) return document.documentElement;
    for (var t = ue(10) ? document.body : null, r = e.offsetParent || null; r === t && e.nextElementSibling;) r = (e = e.nextElementSibling).offsetParent;
    var n = r && r.nodeName;
    return !n || n === "BODY" || n === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(r.nodeName) !== -1 && J(r, "position") === "static" ? ie(r) : r
}

function Lr(e) {
    var t = e.nodeName;
    return t === "BODY" ? !1 : t === "HTML" || ie(e.firstElementChild) === e
}

function ze(e) {
    return e.parentNode !== null ? ze(e.parentNode) : e
}

function Re(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = r ? e : t,
        i = r ? t : e,
        o = document.createRange();
    o.setStart(n, 0), o.setEnd(i, 0);
    var a = o.commonAncestorContainer;
    if (e !== a && t !== a || n.contains(i)) return Lr(a) ? a : ie(a);
    var s = ze(e);
    return s.host ? Re(s.host, t) : Re(e, ze(t).host)
}

function ae(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
        r = t === "top" ? "scrollTop" : "scrollLeft",
        n = e.nodeName;
    if (n === "BODY" || n === "HTML") {
        var i = e.ownerDocument.documentElement,
            o = e.ownerDocument.scrollingElement || i;
        return o[r]
    }
    return e[r]
}

function Dr(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        n = ae(t, "top"),
        i = ae(t, "left"),
        o = r ? -1 : 1;
    return e.top += n * o, e.bottom += n * o, e.left += i * o, e.right += i * o, e
}

function vt(e, t) {
    var r = t === "x" ? "Left" : "Top",
        n = r === "Left" ? "Right" : "Bottom";
    return parseFloat(e["border" + r + "Width"]) + parseFloat(e["border" + n + "Width"])
}

function mt(e, t, r, n) {
    return Math.max(t["offset" + e], t["scroll" + e], r["client" + e], r["offset" + e], r["scroll" + e], ue(10) ? parseInt(r["offset" + e]) + parseInt(n["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(n["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0)
}

function Rt(e) {
    var t = e.body,
        r = e.documentElement,
        n = ue(10) && getComputedStyle(r);
    return {
        height: mt("Height", t, r, n),
        width: mt("Width", t, r, n)
    }
}
var Nr = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    Mr = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var i = r[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    se = function(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    },
    $ = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    };

function j(e) {
    return $({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
    })
}

function je(e) {
    var t = {};
    try {
        if (ue(10)) {
            t = e.getBoundingClientRect();
            var r = ae(e, "top"),
                n = ae(e, "left");
            t.top += r, t.left += n, t.bottom += r, t.right += n
        } else t = e.getBoundingClientRect()
    } catch {}
    var i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        },
        o = e.nodeName === "HTML" ? Rt(e.ownerDocument) : {},
        a = o.width || e.clientWidth || i.width,
        s = o.height || e.clientHeight || i.height,
        u = e.offsetWidth - a,
        f = e.offsetHeight - s;
    if (u || f) {
        var c = J(e);
        u -= vt(c, "x"), f -= vt(c, "y"), i.width -= u, i.height -= f
    }
    return j(i)
}

function Xe(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        n = ue(10),
        i = t.nodeName === "HTML",
        o = je(e),
        a = je(t),
        s = he(e),
        u = J(t),
        f = parseFloat(u.borderTopWidth),
        c = parseFloat(u.borderLeftWidth);
    r && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
    var l = j({
        top: o.top - a.top - f,
        left: o.left - a.left - c,
        width: o.width,
        height: o.height
    });
    if (l.marginTop = 0, l.marginLeft = 0, !n && i) {
        var h = parseFloat(u.marginTop),
            d = parseFloat(u.marginLeft);
        l.top -= f - h, l.bottom -= f - h, l.left -= c - d, l.right -= c - d, l.marginTop = h, l.marginLeft = d
    }
    return (n && !r ? t.contains(s) : t === s && s.nodeName !== "BODY") && (l = Dr(l, t)), l
}

function Fr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = e.ownerDocument.documentElement,
        n = Xe(e, r),
        i = Math.max(r.clientWidth, window.innerWidth || 0),
        o = Math.max(r.clientHeight, window.innerHeight || 0),
        a = t ? 0 : ae(r),
        s = t ? 0 : ae(r, "left"),
        u = {
            top: a - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: o
        };
    return j(u)
}

function Ct(e) {
    var t = e.nodeName;
    if (t === "BODY" || t === "HTML") return !1;
    if (J(e, "position") === "fixed") return !0;
    var r = Ye(e);
    return r ? Ct(r) : !1
}

function Lt(e) {
    if (!e || !e.parentElement || ue()) return document.documentElement;
    for (var t = e.parentElement; t && J(t, "transform") === "none";) t = t.parentElement;
    return t || document.documentElement
}

function qe(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        o = {
            top: 0,
            left: 0
        },
        a = i ? Lt(e) : Re(e, St(t));
    if (n === "viewport") o = Fr(a, i);
    else {
        var s = void 0;
        n === "scrollParent" ? (s = he(Ye(t)), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement)) : n === "window" ? s = e.ownerDocument.documentElement : s = n;
        var u = Xe(s, a, i);
        if (s.nodeName === "HTML" && !Ct(a)) {
            var f = Rt(e.ownerDocument),
                c = f.height,
                l = f.width;
            o.top += u.top - u.marginTop, o.bottom = c + u.top, o.left += u.left - u.marginLeft, o.right = l + u.left
        } else o = u
    }
    r = r || 0;
    var h = typeof r == "number";
    return o.left += h ? r : r.left || 0, o.top += h ? r : r.top || 0, o.right -= h ? r : r.right || 0, o.bottom -= h ? r : r.bottom || 0, o
}

function $r(e) {
    var t = e.width,
        r = e.height;
    return t * r
}

function Dt(e, t, r, n, i) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    if (e.indexOf("auto") === -1) return e;
    var a = qe(r, n, o, i),
        s = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        },
        u = Object.keys(s).map(function(h) {
            return $({
                key: h
            }, s[h], {
                area: $r(s[h])
            })
        }).sort(function(h, d) {
            return d.area - h.area
        }),
        f = u.filter(function(h) {
            var d = h.width,
                v = h.height;
            return d >= r.clientWidth && v >= r.clientHeight
        }),
        c = f.length > 0 ? f[0].key : u[0].key,
        l = e.split("-")[1];
    return c + (l ? "-" + l : "")
}

function Nt(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = n ? Lt(t) : Re(t, St(r));
    return Xe(r, i, n)
}

function Mt(e) {
    var t = e.ownerDocument.defaultView,
        r = t.getComputedStyle(e),
        n = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0),
        i = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0),
        o = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
    return o
}

function Ce(e) {
    var t = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function(r) {
        return t[r]
    })
}

function Ft(e, t, r) {
    r = r.split("-")[0];
    var n = Mt(e),
        i = {
            width: n.width,
            height: n.height
        },
        o = ["right", "left"].indexOf(r) !== -1,
        a = o ? "top" : "left",
        s = o ? "left" : "top",
        u = o ? "height" : "width",
        f = o ? "width" : "height";
    return i[a] = t[a] + t[u] / 2 - n[u] / 2, r === s ? i[s] = t[s] - n[f] : i[s] = t[Ce(s)], i
}

function ve(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
}

function kr(e, t, r) {
    if (Array.prototype.findIndex) return e.findIndex(function(i) {
        return i[t] === r
    });
    var n = ve(e, function(i) {
        return i[t] === r
    });
    return e.indexOf(n)
}

function $t(e, t, r) {
    var n = r === void 0 ? e : e.slice(0, kr(e, "name", r));
    return n.forEach(function(i) {
        i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var o = i.function || i.fn;
        i.enabled && Pt(o) && (t.offsets.popper = j(t.offsets.popper), t.offsets.reference = j(t.offsets.reference), t = o(t, i))
    }), t
}

function Ir() {
    if (!this.state.isDestroyed) {
        var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
        };
        e.offsets.reference = Nt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Dt(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Ft(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = $t(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
}

function kt(e, t) {
    return e.some(function(r) {
        var n = r.name,
            i = r.enabled;
        return i && n === t
    })
}

function Je(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], r = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
        var i = t[n],
            o = i ? "" + i + r : e;
        if (typeof document.body.style[o] < "u") return o
    }
    return null
}

function Br() {
    return this.state.isDestroyed = !0, kt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Je("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
}

function It(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
}

function Bt(e, t, r, n) {
    var i = e.nodeName === "BODY",
        o = i ? e.ownerDocument.defaultView : e;
    o.addEventListener(t, r, {
        passive: !0
    }), i || Bt(he(o.parentNode), t, r, n), n.push(o)
}

function Ar(e, t, r, n) {
    r.updateBound = n, It(e).addEventListener("resize", r.updateBound, {
        passive: !0
    });
    var i = he(e);
    return Bt(i, "scroll", r.updateBound, r.scrollParents), r.scrollElement = i, r.eventsEnabled = !0, r
}

function Wr() {
    this.state.eventsEnabled || (this.state = Ar(this.reference, this.options, this.state, this.scheduleUpdate))
}

function _r(e, t) {
    return It(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(r) {
        r.removeEventListener("scroll", t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
}

function Hr() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = _r(this.reference, this.state))
}

function Qe(e) {
    return e !== "" && !isNaN(parseFloat(e)) && isFinite(e)
}

function Ge(e, t) {
    Object.keys(t).forEach(function(r) {
        var n = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(r) !== -1 && Qe(t[r]) && (n = "px"), e.style[r] = t[r] + n
    })
}

function Vr(e, t) {
    Object.keys(t).forEach(function(r) {
        var n = t[r];
        n !== !1 ? e.setAttribute(r, t[r]) : e.removeAttribute(r)
    })
}

function Ur(e) {
    return Ge(e.instance.popper, e.styles), Vr(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Ge(e.arrowElement, e.arrowStyles), e
}

function zr(e, t, r, n, i) {
    var o = Nt(i, t, e, r.positionFixed),
        a = Dt(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
    return t.setAttribute("x-placement", a), Ge(t, {
        position: r.positionFixed ? "fixed" : "absolute"
    }), r
}

function jr(e, t) {
    var r = e.offsets,
        n = r.popper,
        i = r.reference,
        o = Math.round,
        a = Math.floor,
        s = function(S) {
            return S
        },
        u = o(i.width),
        f = o(n.width),
        c = ["left", "right"].indexOf(e.placement) !== -1,
        l = e.placement.indexOf("-") !== -1,
        h = u % 2 === f % 2,
        d = u % 2 === 1 && f % 2 === 1,
        v = t ? c || l || h ? o : a : s,
        m = t ? o : s;
    return {
        left: v(d && !l && t ? n.left - 1 : n.left),
        top: m(n.top),
        bottom: m(n.bottom),
        right: v(n.right)
    }
}
var Gr = de && /Firefox/i.test(navigator.userAgent);

function Kr(e, t) {
    var r = t.x,
        n = t.y,
        i = e.offsets.popper,
        o = ve(e.instance.modifiers, function(x) {
            return x.name === "applyStyle"
        }).gpuAcceleration;
    o !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var a = o !== void 0 ? o : t.gpuAcceleration,
        s = ie(e.instance.popper),
        u = je(s),
        f = {
            position: i.position
        },
        c = jr(e, window.devicePixelRatio < 2 || !Gr),
        l = r === "bottom" ? "top" : "bottom",
        h = n === "right" ? "left" : "right",
        d = Je("transform"),
        v = void 0,
        m = void 0;
    if (l === "bottom" ? s.nodeName === "HTML" ? m = -s.clientHeight + c.bottom : m = -u.height + c.bottom : m = c.top, h === "right" ? s.nodeName === "HTML" ? v = -s.clientWidth + c.right : v = -u.width + c.right : v = c.left, a && d) f[d] = "translate3d(" + v + "px, " + m + "px, 0)", f[l] = 0, f[h] = 0, f.willChange = "transform";
    else {
        var w = l === "bottom" ? -1 : 1,
            S = h === "right" ? -1 : 1;
        f[l] = m * w, f[h] = v * S, f.willChange = l + ", " + h
    }
    var y = {
        "x-placement": e.placement
    };
    return e.attributes = $({}, y, e.attributes), e.styles = $({}, f, e.styles), e.arrowStyles = $({}, e.offsets.arrow, e.arrowStyles), e
}

function At(e, t, r) {
    var n = ve(e, function(s) {
            var u = s.name;
            return u === t
        }),
        i = !!n && e.some(function(s) {
            return s.name === r && s.enabled && s.order < n.order
        });
    if (!i) {
        var o = "`" + t + "`",
            a = "`" + r + "`";
        console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
    }
    return i
}

function Yr(e, t) {
    var r;
    if (!At(e.instance.modifiers, "arrow", "keepTogether")) return e;
    var n = t.element;
    if (typeof n == "string") {
        if (n = e.instance.popper.querySelector(n), !n) return e
    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
    var i = e.placement.split("-")[0],
        o = e.offsets,
        a = o.popper,
        s = o.reference,
        u = ["left", "right"].indexOf(i) !== -1,
        f = u ? "height" : "width",
        c = u ? "Top" : "Left",
        l = c.toLowerCase(),
        h = u ? "left" : "top",
        d = u ? "bottom" : "right",
        v = Mt(n)[f];
    s[d] - v < a[l] && (e.offsets.popper[l] -= a[l] - (s[d] - v)), s[l] + v > a[d] && (e.offsets.popper[l] += s[l] + v - a[d]), e.offsets.popper = j(e.offsets.popper);
    var m = s[l] + s[f] / 2 - v / 2,
        w = J(e.instance.popper),
        S = parseFloat(w["margin" + c]),
        y = parseFloat(w["border" + c + "Width"]),
        x = m - e.offsets.popper[l] - S - y;
    return x = Math.max(Math.min(a[f] - v, x), 0), e.arrowElement = n, e.offsets.arrow = (r = {}, se(r, l, Math.round(x)), se(r, h, ""), r), e
}

function Xr(e) {
    return e === "end" ? "start" : e === "start" ? "end" : e
}
var Wt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    Ae = Wt.slice(3);

function gt(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = Ae.indexOf(e),
        n = Ae.slice(r + 1).concat(Ae.slice(0, r));
    return t ? n.reverse() : n
}
var We = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
};

function qr(e, t) {
    if (kt(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement) return e;
    var r = qe(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
        n = e.placement.split("-")[0],
        i = Ce(n),
        o = e.placement.split("-")[1] || "",
        a = [];
    switch (t.behavior) {
        case We.FLIP:
            a = [n, i];
            break;
        case We.CLOCKWISE:
            a = gt(n);
            break;
        case We.COUNTERCLOCKWISE:
            a = gt(n, !0);
            break;
        default:
            a = t.behavior
    }
    return a.forEach(function(s, u) {
        if (n !== s || a.length === u + 1) return e;
        n = e.placement.split("-")[0], i = Ce(n);
        var f = e.offsets.popper,
            c = e.offsets.reference,
            l = Math.floor,
            h = n === "left" && l(f.right) > l(c.left) || n === "right" && l(f.left) < l(c.right) || n === "top" && l(f.bottom) > l(c.top) || n === "bottom" && l(f.top) < l(c.bottom),
            d = l(f.left) < l(r.left),
            v = l(f.right) > l(r.right),
            m = l(f.top) < l(r.top),
            w = l(f.bottom) > l(r.bottom),
            S = n === "left" && d || n === "right" && v || n === "top" && m || n === "bottom" && w,
            y = ["top", "bottom"].indexOf(n) !== -1,
            x = !!t.flipVariations && (y && o === "start" && d || y && o === "end" && v || !y && o === "start" && m || !y && o === "end" && w),
            I = !!t.flipVariationsByContent && (y && o === "start" && v || y && o === "end" && d || !y && o === "start" && w || !y && o === "end" && m),
            T = x || I;
        (h || S || T) && (e.flipped = !0, (h || S) && (n = a[u + 1]), T && (o = Xr(o)), e.placement = n + (o ? "-" + o : ""), e.offsets.popper = $({}, e.offsets.popper, Ft(e.instance.popper, e.offsets.reference, e.placement)), e = $t(e.instance.modifiers, e, "flip"))
    }), e
}

function Jr(e) {
    var t = e.offsets,
        r = t.popper,
        n = t.reference,
        i = e.placement.split("-")[0],
        o = Math.floor,
        a = ["top", "bottom"].indexOf(i) !== -1,
        s = a ? "right" : "bottom",
        u = a ? "left" : "top",
        f = a ? "width" : "height";
    return r[s] < o(n[u]) && (e.offsets.popper[u] = o(n[u]) - r[f]), r[u] > o(n[s]) && (e.offsets.popper[u] = o(n[s])), e
}

function Qr(e, t, r, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +i[1],
        a = i[2];
    if (!o) return e;
    if (a.indexOf("%") === 0) {
        var s = void 0;
        switch (a) {
            case "%p":
                s = r;
                break;
            case "%":
            case "%r":
            default:
                s = n
        }
        var u = j(s);
        return u[t] / 100 * o
    } else if (a === "vh" || a === "vw") {
        var f = void 0;
        return a === "vh" ? f = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : f = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), f / 100 * o
    } else return o
}

function Zr(e, t, r, n) {
    var i = [0, 0],
        o = ["right", "left"].indexOf(n) !== -1,
        a = e.split(/(\+|\-)/).map(function(c) {
            return c.trim()
        }),
        s = a.indexOf(ve(a, function(c) {
            return c.search(/,|\s/) !== -1
        }));
    a[s] && a[s].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var u = /\s*,\s*|\s+/,
        f = s !== -1 ? [a.slice(0, s).concat([a[s].split(u)[0]]), [a[s].split(u)[1]].concat(a.slice(s + 1))] : [a];
    return f = f.map(function(c, l) {
        var h = (l === 1 ? !o : o) ? "height" : "width",
            d = !1;
        return c.reduce(function(v, m) {
            return v[v.length - 1] === "" && ["+", "-"].indexOf(m) !== -1 ? (v[v.length - 1] = m, d = !0, v) : d ? (v[v.length - 1] += m, d = !1, v) : v.concat(m)
        }, []).map(function(v) {
            return Qr(v, h, t, r)
        })
    }), f.forEach(function(c, l) {
        c.forEach(function(h, d) {
            Qe(h) && (i[l] += h * (c[d - 1] === "-" ? -1 : 1))
        })
    }), i
}

function en(e, t) {
    var r = t.offset,
        n = e.placement,
        i = e.offsets,
        o = i.popper,
        a = i.reference,
        s = n.split("-")[0],
        u = void 0;
    return Qe(+r) ? u = [+r, 0] : u = Zr(r, o, a, s), s === "left" ? (o.top += u[0], o.left -= u[1]) : s === "right" ? (o.top += u[0], o.left += u[1]) : s === "top" ? (o.left += u[0], o.top -= u[1]) : s === "bottom" && (o.left += u[0], o.top += u[1]), e.popper = o, e
}

function tn(e, t) {
    var r = t.boundariesElement || ie(e.instance.popper);
    e.instance.reference === r && (r = ie(r));
    var n = Je("transform"),
        i = e.instance.popper.style,
        o = i.top,
        a = i.left,
        s = i[n];
    i.top = "", i.left = "", i[n] = "";
    var u = qe(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
    i.top = o, i.left = a, i[n] = s, t.boundaries = u;
    var f = t.priority,
        c = e.offsets.popper,
        l = {
            primary: function(d) {
                var v = c[d];
                return c[d] < u[d] && !t.escapeWithReference && (v = Math.max(c[d], u[d])), se({}, d, v)
            },
            secondary: function(d) {
                var v = d === "right" ? "left" : "top",
                    m = c[v];
                return c[d] > u[d] && !t.escapeWithReference && (m = Math.min(c[v], u[d] - (d === "right" ? c.width : c.height))), se({}, v, m)
            }
        };
    return f.forEach(function(h) {
        var d = ["left", "top"].indexOf(h) !== -1 ? "primary" : "secondary";
        c = $({}, c, l[d](h))
    }), e.offsets.popper = c, e
}

function rn(e) {
    var t = e.placement,
        r = t.split("-")[0],
        n = t.split("-")[1];
    if (n) {
        var i = e.offsets,
            o = i.reference,
            a = i.popper,
            s = ["bottom", "top"].indexOf(r) !== -1,
            u = s ? "left" : "top",
            f = s ? "width" : "height",
            c = {
                start: se({}, u, o[u]),
                end: se({}, u, o[u] + o[f] - a[f])
            };
        e.offsets.popper = $({}, a, c[n])
    }
    return e
}

function nn(e) {
    if (!At(e.instance.modifiers, "hide", "preventOverflow")) return e;
    var t = e.offsets.reference,
        r = ve(e.instance.modifiers, function(n) {
            return n.name === "preventOverflow"
        }).boundaries;
    if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
        if (e.hide === !0) return e;
        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
    } else {
        if (e.hide === !1) return e;
        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
    }
    return e
}

function on(e) {
    var t = e.placement,
        r = t.split("-")[0],
        n = e.offsets,
        i = n.popper,
        o = n.reference,
        a = ["left", "right"].indexOf(r) !== -1,
        s = ["top", "left"].indexOf(r) === -1;
    return i[a ? "left" : "top"] = o[r] - (s ? i[a ? "width" : "height"] : 0), e.placement = Ce(t), e.offsets.popper = j(i), e
}
var an = {
        shift: {
            order: 100,
            enabled: !0,
            fn: rn
        },
        offset: {
            order: 200,
            enabled: !0,
            fn: en,
            offset: 0
        },
        preventOverflow: {
            order: 300,
            enabled: !0,
            fn: tn,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
        },
        keepTogether: {
            order: 400,
            enabled: !0,
            fn: Jr
        },
        arrow: {
            order: 500,
            enabled: !0,
            fn: Yr,
            element: "[x-arrow]"
        },
        flip: {
            order: 600,
            enabled: !0,
            fn: qr,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1
        },
        inner: {
            order: 700,
            enabled: !1,
            fn: on
        },
        hide: {
            order: 800,
            enabled: !0,
            fn: nn
        },
        computeStyle: {
            order: 850,
            enabled: !0,
            fn: Kr,
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
        },
        applyStyle: {
            order: 900,
            enabled: !0,
            fn: Ur,
            onLoad: zr,
            gpuAcceleration: void 0
        }
    },
    sn = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: an
    },
    Ne = function() {
        function e(t, r) {
            var n = this,
                i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            Nr(this, e), this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }, this.update = Cr(this.update.bind(this)), this.options = $({}, e.Defaults, i), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys($({}, e.Defaults.modifiers, i.modifiers)).forEach(function(a) {
                n.options.modifiers[a] = $({}, e.Defaults.modifiers[a] || {}, i.modifiers ? i.modifiers[a] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
                return $({
                    name: a
                }, n.options.modifiers[a])
            }).sort(function(a, s) {
                return a.order - s.order
            }), this.modifiers.forEach(function(a) {
                a.enabled && Pt(a.onLoad) && a.onLoad(n.reference, n.popper, n.options, a, n.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }
        return Mr(e, [{
            key: "update",
            value: function() {
                return Ir.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return Br.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return Wr.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return Hr.call(this)
            }
        }]), e
    }();
Ne.Utils = (typeof window < "u" ? window : nr).PopperUtils;
Ne.placements = Wt;
Ne.Defaults = sn;

function un(e, t) {
    var r = t && t.direction || "ltr";
    if (r === "ltr") return e;
    switch (e) {
        case "bottom-end":
            return "bottom-start";
        case "bottom-start":
            return "bottom-end";
        case "top-end":
            return "top-start";
        case "top-start":
            return "top-end";
        default:
            return e
    }
}

function bt(e) {
    return typeof e == "function" ? e() : e
}
var fn = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
    ln = {},
    cn = p.forwardRef(function(t, r) {
        var n = t.anchorEl,
            i = t.children,
            o = t.container,
            a = t.disablePortal,
            s = a === void 0 ? !1 : a,
            u = t.keepMounted,
            f = u === void 0 ? !1 : u,
            c = t.modifiers,
            l = t.open,
            h = t.placement,
            d = h === void 0 ? "bottom" : h,
            v = t.popperOptions,
            m = v === void 0 ? ln : v,
            w = t.popperRef,
            S = t.style,
            y = t.transition,
            x = y === void 0 ? !1 : y,
            I = Ke(t, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]),
            T = p.useRef(null),
            B = z(T, r),
            R = p.useRef(null),
            H = z(R, w),
            V = p.useRef(H);
        fn(function() {
            V.current = H
        }, [H]), p.useImperativeHandle(w, function() {
            return R.current
        }, []);
        var F = p.useState(!0),
            Q = F[0],
            Z = F[1],
            ee = wt(),
            G = un(d, ee),
            K = p.useState(G),
            fe = K[0],
            te = K[1];
        p.useEffect(function() {
            R.current && R.current.update()
        });
        var b = p.useCallback(function() {
                if (!(!T.current || !n || !l)) {
                    R.current && (R.current.destroy(), V.current(null));
                    var N = function(me) {
                        te(me.placement)
                    };
                    bt(n);
                    var k = new Ne(bt(n), T.current, W({
                        placement: G
                    }, m, {
                        modifiers: W({}, s ? {} : {
                            preventOverflow: {
                                boundariesElement: "window"
                            }
                        }, c, m.modifiers),
                        onCreate: ft(N, m.onCreate),
                        onUpdate: ft(N, m.onUpdate)
                    }));
                    V.current(k)
                }
            }, [n, s, c, l, G, m]),
            O = p.useCallback(function(N) {
                oe(B, N), b()
            }, [B, b]),
            D = function() {
                Z(!1)
            },
            C = function() {
                R.current && (R.current.destroy(), V.current(null))
            },
            P = function() {
                Z(!0), C()
            };
        if (p.useEffect(function() {
                return function() {
                    C()
                }
            }, []), p.useEffect(function() {
                !l && !x && C()
            }, [l, x]), !f && !l && (!x || Q)) return null;
        var L = {
            placement: fe
        };
        return x && (L.TransitionProps = {
            in: l,
            onEnter: D,
            onExited: P
        }), p.createElement(xr, {
            disablePortal: s,
            container: o
        }, p.createElement("div", W({
            ref: O,
            role: "tooltip"
        }, I, {
            style: W({
                position: "fixed",
                top: 0,
                left: 0,
                display: !l && f && !x ? "none" : null
            }, S)
        }), typeof i == "function" ? i(L) : i))
    });

function Et(e) {
    return Math.round(e * 1e5) / 1e5
}

function pn() {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: "-0.71em",
            marginLeft: 4,
            marginRight: 4,
            "&::before": {
                transformOrigin: "0 100%"
            }
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: "-0.71em",
            marginLeft: 4,
            marginRight: 4,
            "&::before": {
                transformOrigin: "100% 0"
            }
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: "-0.71em",
            height: "1em",
            width: "0.71em",
            marginTop: 4,
            marginBottom: 4,
            "&::before": {
                transformOrigin: "100% 100%"
            }
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: "-0.71em",
            height: "1em",
            width: "0.71em",
            marginTop: 4,
            marginBottom: 4,
            "&::before": {
                transformOrigin: "0 0"
            }
        }
    }
}
var dn = function(t) {
        return {
            popper: {
                zIndex: t.zIndex.tooltip,
                pointerEvents: "none"
            },
            popperInteractive: {
                pointerEvents: "auto"
            },
            popperArrow: pn(),
            tooltip: {
                backgroundColor: ut(t.palette.grey[700], .9),
                borderRadius: t.shape.borderRadius,
                color: t.palette.common.white,
                fontFamily: t.typography.fontFamily,
                padding: "4px 8px",
                fontSize: t.typography.pxToRem(10),
                lineHeight: "".concat(Et(14 / 10), "em"),
                maxWidth: 300,
                wordWrap: "break-word",
                fontWeight: t.typography.fontWeightMedium
            },
            tooltipArrow: {
                position: "relative",
                margin: "0"
            },
            arrow: {
                overflow: "hidden",
                position: "absolute",
                width: "1em",
                height: "0.71em",
                boxSizing: "border-box",
                color: ut(t.palette.grey[700], .9),
                "&::before": {
                    content: '""',
                    margin: "auto",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "currentColor",
                    transform: "rotate(45deg)"
                }
            },
            touch: {
                padding: "8px 16px",
                fontSize: t.typography.pxToRem(14),
                lineHeight: "".concat(Et(16 / 14), "em"),
                fontWeight: t.typography.fontWeightRegular
            },
            tooltipPlacementLeft: Pe({
                transformOrigin: "right center",
                margin: "0 24px "
            }, t.breakpoints.up("sm"), {
                margin: "0 14px"
            }),
            tooltipPlacementRight: Pe({
                transformOrigin: "left center",
                margin: "0 24px"
            }, t.breakpoints.up("sm"), {
                margin: "0 14px"
            }),
            tooltipPlacementTop: Pe({
                transformOrigin: "center bottom",
                margin: "24px 0"
            }, t.breakpoints.up("sm"), {
                margin: "14px 0"
            }),
            tooltipPlacementBottom: Pe({
                transformOrigin: "center top",
                margin: "24px 0"
            }, t.breakpoints.up("sm"), {
                margin: "14px 0"
            })
        }
    },
    Se = !1,
    _e = null,
    hn = p.forwardRef(function(t, r) {
        var n = t.arrow,
            i = n === void 0 ? !1 : n,
            o = t.children,
            a = t.classes,
            s = t.disableFocusListener,
            u = s === void 0 ? !1 : s,
            f = t.disableHoverListener,
            c = f === void 0 ? !1 : f,
            l = t.disableTouchListener,
            h = l === void 0 ? !1 : l,
            d = t.enterDelay,
            v = d === void 0 ? 100 : d,
            m = t.enterNextDelay,
            w = m === void 0 ? 0 : m,
            S = t.enterTouchDelay,
            y = S === void 0 ? 700 : S,
            x = t.id,
            I = t.interactive,
            T = I === void 0 ? !1 : I,
            B = t.leaveDelay,
            R = B === void 0 ? 0 : B,
            H = t.leaveTouchDelay,
            V = H === void 0 ? 1500 : H,
            F = t.onClose,
            Q = t.onOpen,
            Z = t.open,
            ee = t.placement,
            G = ee === void 0 ? "bottom" : ee,
            K = t.PopperComponent,
            fe = K === void 0 ? cn : K,
            te = t.PopperProps,
            b = t.title,
            O = t.TransitionComponent,
            D = O === void 0 ? Ot : O,
            C = t.TransitionProps,
            P = Ke(t, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]),
            L = xt(),
            N = p.useState(),
            k = N[0],
            Me = N[1],
            me = p.useState(null),
            Fe = me[0],
            _t = me[1],
            ge = p.useRef(!1),
            be = p.useRef(),
            Ee = p.useRef(),
            Y = p.useRef(),
            ye = p.useRef(),
            Ht = fr({
                controlled: Z,
                default: !1,
                name: "Tooltip",
                state: "open"
            }),
            Ze = yt(Ht, 2),
            Vt = Ze[0],
            et = Ze[1],
            we = Vt,
            Ut = lr(x);
        p.useEffect(function() {
            return function() {
                clearTimeout(be.current), clearTimeout(Ee.current), clearTimeout(Y.current), clearTimeout(ye.current)
            }
        }, []);
        var tt = function(E) {
                clearTimeout(_e), Se = !0, et(!0), Q && Q(E)
            },
            xe = function() {
                var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                return function(g) {
                    var A = o.props;
                    g.type === "mouseover" && A.onMouseOver && E && A.onMouseOver(g), !(ge.current && g.type !== "touchstart") && (k && k.removeAttribute("title"), clearTimeout(Ee.current), clearTimeout(Y.current), v || Se && w ? (g.persist(), Ee.current = setTimeout(function() {
                        tt(g)
                    }, Se ? w : v)) : tt(g))
                }
            },
            $e = br(),
            zt = $e.isFocusVisible,
            jt = $e.onBlurVisible,
            Gt = $e.ref,
            rt = p.useState(!1),
            Kt = rt[0],
            nt = rt[1],
            Yt = function() {
                Kt && (nt(!1), jt())
            },
            ot = function() {
                var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                return function(g) {
                    k || Me(g.currentTarget), zt(g) && (nt(!0), xe()(g));
                    var A = o.props;
                    A.onFocus && E && A.onFocus(g)
                }
            },
            it = function(E) {
                clearTimeout(_e), _e = setTimeout(function() {
                    Se = !1
                }, 800 + R), et(!1), F && F(E), clearTimeout(be.current), be.current = setTimeout(function() {
                    ge.current = !1
                }, L.transitions.duration.shortest)
            },
            Te = function() {
                var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                return function(g) {
                    var A = o.props;
                    g.type === "blur" && (A.onBlur && E && A.onBlur(g), Yt()), g.type === "mouseleave" && A.onMouseLeave && g.currentTarget === k && A.onMouseLeave(g), clearTimeout(Ee.current), clearTimeout(Y.current), g.persist(), Y.current = setTimeout(function() {
                        it(g)
                    }, R)
                }
            },
            at = function(E) {
                ge.current = !0;
                var g = o.props;
                g.onTouchStart && g.onTouchStart(E)
            },
            Xt = function(E) {
                at(E), clearTimeout(Y.current), clearTimeout(be.current), clearTimeout(ye.current), E.persist(), ye.current = setTimeout(function() {
                    xe()(E)
                }, y)
            },
            qt = function(E) {
                o.props.onTouchEnd && o.props.onTouchEnd(E), clearTimeout(ye.current), clearTimeout(Y.current), E.persist(), Y.current = setTimeout(function() {
                    it(E)
                }, V)
            },
            Jt = z(Me, r),
            st = z(Gt, Jt),
            Qt = p.useCallback(function(M) {
                oe(st, Le.findDOMNode(M))
            }, [st]),
            Zt = z(o.ref, Qt);
        b === "" && (we = !1);
        var er = !we && !c,
            U = W({
                "aria-describedby": we ? Ut : null,
                title: er && typeof b == "string" ? b : null
            }, P, o.props, {
                className: ke(P.className, o.props.className),
                onTouchStart: at,
                ref: Zt
            }),
            le = {};
        h || (U.onTouchStart = Xt, U.onTouchEnd = qt), c || (U.onMouseOver = xe(), U.onMouseLeave = Te(), T && (le.onMouseOver = xe(!1), le.onMouseLeave = Te(!1))), u || (U.onFocus = ot(), U.onBlur = Te(), T && (le.onFocus = ot(!1), le.onBlur = Te(!1)));
        var tr = p.useMemo(function() {
            return ar({
                popperOptions: {
                    modifiers: {
                        arrow: {
                            enabled: !!Fe,
                            element: Fe
                        }
                    }
                }
            }, te)
        }, [Fe, te]);
        return p.createElement(p.Fragment, null, p.cloneElement(o, U), p.createElement(fe, W({
            className: ke(a.popper, T && a.popperInteractive, i && a.popperArrow),
            placement: G,
            anchorEl: k,
            open: k ? we : !1,
            id: U["aria-describedby"],
            transition: !0
        }, le, tr), function(M) {
            var E = M.placement,
                g = M.TransitionProps;
            return p.createElement(D, W({
                timeout: L.transitions.duration.shorter
            }, g, C), p.createElement("div", {
                className: ke(a.tooltip, a["tooltipPlacement".concat(sr(E.split("-")[0]))], ge.current && a.touch, i && a.tooltipArrow)
            }, b, i ? p.createElement("span", {
                className: a.arrow,
                ref: _t
            }) : null))
        }))
    });
const bn = ir(dn, {
    name: "MuiTooltip",
    flip: !1
})(hn);
export {
    xr as P, bn as T, fr as a, z as b, ft as c, br as d, Tt as e, xt as f, _ as g, pt as h, yr as r, oe as s, lr as u
};