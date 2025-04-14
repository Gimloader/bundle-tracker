function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("12hlY", (function(t, r) {
    e(t.exports, "useNotification", (function() {
        return n("9zs3m").default
    })), e(t.exports, "Notice", (function() {
        return n("2bY47").default
    }));
    n("9zs3m"), n("2bY47")
})), n.register("9zs3m", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("gAt4b"),
        u = n("le5aZ"),
        i = n("bntjz"),
        a = n("fywoC"),
        f = n("jRt7A"),
        c = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"],
        l = function() {
            return document.body
        },
        s = 0;

    function d() {
        for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return n.forEach((function(t) {
            t && Object.keys(t).forEach((function(n) {
                var r = t[n];
                void 0 !== r && (e[n] = r)
            }))
        })), e
    }

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.getContainer,
            n = void 0 === t ? l : t,
            r = e.motion,
            p = e.prefixCls,
            v = e.maxCount,
            y = e.className,
            E = e.style,
            m = e.onAllRemoved,
            T = (0, i.default)(e, c),
            S = a.useState(),
            b = (0, u.default)(S, 2),
            A = b[0],
            g = b[1],
            x = a.useRef(),
            h = a.createElement(f.default, {
                container: A,
                ref: x,
                prefixCls: p,
                motion: r,
                maxCount: v,
                className: y,
                style: E,
                onAllRemoved: m
            }),
            P = a.useState([]),
            O = (0, u.default)(P, 2),
            R = O[0],
            _ = O[1],
            k = a.useMemo((function() {
                return {
                    open: function(e) {
                        var t = d(T, e);
                        null !== t.key && void 0 !== t.key || (t.key = "rc-notification-".concat(s), s += 1), _((function(e) {
                            return [].concat((0, o.default)(e), [{
                                type: "open",
                                config: t
                            }])
                        }))
                    },
                    close: function(e) {
                        _((function(t) {
                            return [].concat((0, o.default)(t), [{
                                type: "close",
                                key: e
                            }])
                        }))
                    },
                    destroy: function() {
                        _((function(e) {
                            return [].concat((0, o.default)(e), [{
                                type: "destroy"
                            }])
                        }))
                    }
                }
            }), []);
        return a.useEffect((function() {
            g(n())
        })), a.useEffect((function() {
            x.current && R.length && (R.forEach((function(e) {
                switch (e.type) {
                    case "open":
                        x.current.open(e.config);
                        break;
                    case "close":
                        x.current.close(e.key);
                        break;
                    case "destroy":
                        x.current.destroy()
                }
            })), _([]))
        }), [R]), [k, h]
    }
})), n.register("gAt4b", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("LpsVp"),
        u = n("kA9cn"),
        i = n("lPW0X"),
        a = n("eBfu5");

    function f(e) {
        return (0, o.default)(e) || (0, u.default)(e) || (0, i.default)(e) || (0, a.default)()
    }
})), n.register("LpsVp", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("8sWv6");

    function u(e) {
        if (Array.isArray(e)) return (0, o.default)(e)
    }
})), n.register("8sWv6", (function(t, n) {
    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("kA9cn", (function(t, n) {
    function r(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("lPW0X", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("8sWv6");

    function u(e, t) {
        if (e) {
            if ("string" == typeof e) return (0, o.default)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, o.default)(e, t) : void 0
        }
    }
})), n.register("eBfu5", (function(t, n) {
    function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("le5aZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("4xADb"),
        u = n("7HruQ"),
        i = n("lPW0X"),
        a = n("2lg54");

    function f(e, t) {
        return (0, o.default)(e) || (0, u.default)(e, t) || (0, i.default)(e, t) || (0, a.default)()
    }
})), n.register("4xADb", (function(t, n) {
    function r(e) {
        if (Array.isArray(e)) return e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("7HruQ", (function(t, n) {
    function r(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, u = [],
                i = !0,
                a = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (u.push(r.value), !t || u.length !== t); i = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (a) throw o
                }
            }
            return u
        }
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("2lg54", (function(t, n) {
    function r() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("bntjz", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("3o88e");

    function u(e, t) {
        if (null == e) return {};
        var n, r, u = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n])
        }
        return u
    }
})), n.register("3o88e", (function(t, n) {
    function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            u = Object.keys(e);
        for (r = 0; r < u.length; r++) n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("jRt7A", (function(r, o) {
    e(r.exports, "default", (function() {
        return v
    }));
    var u = n("eNTDm"),
        i = n("bKsxa"),
        a = n("gAt4b"),
        f = n("le5aZ"),
        c = n("fywoC"),
        l = n("kK88x");
    n("5pQrD");
    var s = n("kDECZ"),
        d = n("fe1on"),
        p = n("2bY47"),
        v = c.forwardRef((function(e, n) {
            var r = e.prefixCls,
                o = void 0 === r ? "rc-notification" : r,
                v = e.container,
                y = e.motion,
                E = e.maxCount,
                m = e.className,
                T = e.style,
                S = e.onAllRemoved,
                b = c.useState([]),
                A = (0, f.default)(b, 2),
                g = A[0],
                x = A[1],
                h = function(e) {
                    var t, n = g.find((function(t) {
                        return t.key === e
                    }));
                    null == n || null === (t = n.onClose) || void 0 === t || t.call(n), x((function(t) {
                        return t.filter((function(t) {
                            return t.key !== e
                        }))
                    }))
                };
            c.useImperativeHandle(n, (function() {
                return {
                    open: function(e) {
                        x((function(t) {
                            var n, r = (0, a.default)(t),
                                o = r.findIndex((function(t) {
                                    return t.key === e.key
                                })),
                                u = (0, i.default)({}, e);
                            o >= 0 ? (u.times = ((null === (n = t[o]) || void 0 === n ? void 0 : n.times) || 0) + 1, r[o] = u) : (u.times = 0, r.push(u));
                            return E > 0 && r.length > E && (r = r.slice(-E)), r
                        }))
                    },
                    close: function(e) {
                        h(e)
                    },
                    destroy: function() {
                        x([])
                    }
                }
            }));
            var P = c.useState({}),
                O = (0, f.default)(P, 2),
                R = O[0],
                _ = O[1];
            c.useEffect((function() {
                var e = {};
                g.forEach((function(t) {
                    var n = t.placement,
                        r = void 0 === n ? "topRight" : n;
                    r && (e[r] = e[r] || [], e[r].push(t))
                })), Object.keys(R).forEach((function(t) {
                    e[t] = e[t] || []
                })), _(e)
            }), [g]);
            var k = c.useRef(!1);
            if (c.useEffect((function() {
                    Object.keys(R).length > 0 ? k.current = !0 : k.current && (null == S || S(), k.current = !1)
                }), [R]), !v) return null;
            var C = Object.keys(R);
            return (0, l.createPortal)(c.createElement(c.Fragment, null, C.map((function(e) {
                var n = R[e].map((function(e) {
                        return {
                            config: e,
                            key: e.key
                        }
                    })),
                    r = "function" == typeof y ? y(e) : y;
                return c.createElement(s.default, (0, u.default)({
                    key: e,
                    className: t(d)(o, "".concat(o, "-").concat(e), null == m ? void 0 : m(e)),
                    style: null == T ? void 0 : T(e),
                    keys: n,
                    motionAppear: !0
                }, r, {
                    onAllRemoved: function() {
                        ! function(e) {
                            _((function(t) {
                                var n = (0, i.default)({}, t);
                                return (n[e] || []).length || delete n[e], n
                            }))
                        }(e)
                    }
                }), (function(e, n) {
                    var r = e.config,
                        a = e.className,
                        f = e.style,
                        l = r.key,
                        s = r.times,
                        v = r.className,
                        y = r.style;
                    return c.createElement(p.default, (0, u.default)({}, r, {
                        ref: n,
                        prefixCls: o,
                        className: t(d)(a, v),
                        style: (0, i.default)((0, i.default)({}, f), y),
                        times: s,
                        key: l,
                        eventKey: l,
                        onNoticeClose: h
                    }))
                }))
            }))), v)
        }))
})), n.register("eNTDm", (function(t, n) {
    function r() {
        return r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, r.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("bKsxa", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("dldTV");

    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
                (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
})), n.register("dldTV", (function(t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("5pQrD", (function(t, r) {
    e(t.exports, "CSSMotionList", (function() {
        return n("kDECZ").default
    }));
    var o = n("hoR7f");
    n("kDECZ"), o.default
})), n.register("hoR7f", (function(r, o) {
    e(r.exports, "default", (function() {
        return T
    }));
    var u = n("dldTV"),
        i = n("bKsxa"),
        a = n("le5aZ"),
        f = n("cpTZT"),
        c = n("fywoC"),
        l = (c = n("fywoC"), n("3qdcB")),
        s = n("fk9zJ"),
        d = n("fe1on"),
        p = n("1aJtd"),
        v = n("5995i"),
        y = n("03tOr"),
        E = n("dIswj"),
        m = n("4CMOi");
    var T = function(e) {
        var n = e;

        function r(e) {
            return !(!e.motionName || !n)
        }
        "object" === (0, f.default)(e) && (n = e.transitionSupport);
        var o = c.forwardRef((function(e, n) {
            var o = e.visible,
                f = void 0 === o || o,
                T = e.removeOnLeave,
                S = void 0 === T || T,
                b = e.forceRender,
                A = e.children,
                g = e.motionName,
                x = e.leavedClassName,
                h = e.eventProps,
                P = r(e),
                O = (0, c.useRef)(),
                R = (0, c.useRef)();
            var _ = (0, y.default)(P, f, (function() {
                    try {
                        return O.current instanceof HTMLElement ? O.current : (0, l.default)(R.current)
                    } catch (e) {
                        return null
                    }
                }), e),
                k = (0, a.default)(_, 4),
                C = k[0],
                N = k[1],
                w = k[2],
                j = k[3],
                V = c.useRef(j);
            j && (V.current = !0);
            var D, U = c.useCallback((function(e) {
                    O.current = e, (0, s.fillRef)(n, e)
                }), [n]),
                L = (0, i.default)((0, i.default)({}, h), {}, {
                    visible: f
                });
            if (A)
                if (C !== v.STATUS_NONE && r(e)) {
                    var M, I;
                    N === v.STEP_PREPARE ? I = "prepare" : (0, m.isActive)(N) ? I = "active" : N === v.STEP_START && (I = "start"), D = A((0, i.default)((0, i.default)({}, L), {}, {
                        className: t(d)((0, p.getTransitionName)(g, C), (M = {}, (0, u.default)(M, (0, p.getTransitionName)(g, "".concat(C, "-").concat(I)), I), (0, u.default)(M, g, "string" == typeof g), M)),
                        style: w
                    }), U)
                } else D = j ? A((0, i.default)({}, L), U) : !S && V.current && x ? A((0, i.default)((0, i.default)({}, L), {}, {
                    className: x
                }), U) : b || !S && !x ? A((0, i.default)((0, i.default)({}, L), {}, {
                    style: {
                        display: "none"
                    }
                }), U) : null;
            else D = null;
            c.isValidElement(D) && (0, s.supportRef)(D) && (D.ref || (D = c.cloneElement(D, {
                ref: U
            })));
            return c.createElement(E.default, {
                ref: R
            }, D)
        }));
        return o.displayName = "CSSMotion", o
    }(p.supportTransition)
})), n.register("cpTZT", (function(t, n) {
    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("1aJtd", (function(t, r) {
    e(t.exports, "supportTransition", (function() {
        return m
    })), e(t.exports, "animationEndName", (function() {
        return T
    })), e(t.exports, "transitionEndName", (function() {
        return S
    })), e(t.exports, "getTransitionName", (function() {
        return b
    }));
    var o = n("cpTZT"),
        u = n("9U8Wa");

    function i(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n
    }
    var a, f, c, l = (a = (0, u.default)(), f = "undefined" != typeof window ? window : {}, c = {
            animationend: i("Animation", "AnimationEnd"),
            transitionend: i("Transition", "TransitionEnd")
        }, a && ("AnimationEvent" in f || delete c.animationend.animation, "TransitionEvent" in f || delete c.transitionend.transition), c),
        s = {};
    if ((0, u.default)()) {
        var d = document.createElement("div");
        s = d.style
    }
    var p = {};

    function v(e) {
        if (p[e]) return p[e];
        var t = l[e];
        if (t)
            for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
                var u = n[o];
                if (Object.prototype.hasOwnProperty.call(t, u) && u in s) return p[e] = t[u], p[e]
            }
        return ""
    }
    var y = v("animationend"),
        E = v("transitionend"),
        m = !(!y || !E),
        T = y || "animationend",
        S = E || "transitionend";

    function b(e, t) {
        return e ? "object" === (0, o.default)(e) ? e[t.replace(/-\w/g, (function(e) {
            return e[1].toUpperCase()
        }))] : "".concat(e, "-").concat(t) : null
    }
})), n.register("5995i", (function(t, n) {
    e(t.exports, "STATUS_NONE", (function() {
        return r
    })), e(t.exports, "STATUS_APPEAR", (function() {
        return o
    })), e(t.exports, "STATUS_ENTER", (function() {
        return u
    })), e(t.exports, "STATUS_LEAVE", (function() {
        return i
    })), e(t.exports, "STEP_NONE", (function() {
        return a
    })), e(t.exports, "STEP_PREPARE", (function() {
        return f
    })), e(t.exports, "STEP_START", (function() {
        return c
    })), e(t.exports, "STEP_ACTIVE", (function() {
        return l
    })), e(t.exports, "STEP_ACTIVATED", (function() {
        return s
    }));
    var r = "none",
        o = "appear",
        u = "enter",
        i = "leave",
        a = "none",
        f = "prepare",
        c = "start",
        l = "active",
        s = "end"
})), n.register("03tOr", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("bKsxa"),
        u = n("dldTV"),
        i = n("le5aZ"),
        a = n("fywoC"),
        f = (a = n("fywoC"), n("e62KD")),
        c = n("5995i"),
        l = n("4CMOi"),
        s = n("htiqe"),
        d = n("fyvas");

    function p(e, t, n, r) {
        var p = r.motionEnter,
            v = void 0 === p || p,
            y = r.motionAppear,
            E = void 0 === y || y,
            m = r.motionLeave,
            T = void 0 === m || m,
            S = r.motionDeadline,
            b = r.motionLeaveImmediately,
            A = r.onAppearPrepare,
            g = r.onEnterPrepare,
            x = r.onLeavePrepare,
            h = r.onAppearStart,
            P = r.onEnterStart,
            O = r.onLeaveStart,
            R = r.onAppearActive,
            _ = r.onEnterActive,
            k = r.onLeaveActive,
            C = r.onAppearEnd,
            N = r.onEnterEnd,
            w = r.onLeaveEnd,
            j = r.onVisibleChanged,
            V = (0, f.default)(),
            D = (0, i.default)(V, 2),
            U = D[0],
            L = D[1],
            M = (0, f.default)(c.STATUS_NONE),
            I = (0, i.default)(M, 2),
            K = I[0],
            Z = I[1],
            J = (0, f.default)(null),
            z = (0, i.default)(J, 2),
            W = z[0],
            F = z[1],
            q = (0, a.useRef)(!1),
            H = (0, a.useRef)(null);

        function B() {
            return n()
        }
        var Y = (0, a.useRef)(!1);

        function Q(e) {
            var t = B();
            if (!e || e.deadline || e.target === t) {
                var n, r = Y.current;
                K === c.STATUS_APPEAR && r ? n = null == C ? void 0 : C(t, e) : K === c.STATUS_ENTER && r ? n = null == N ? void 0 : N(t, e) : K === c.STATUS_LEAVE && r && (n = null == w ? void 0 : w(t, e)), K !== c.STATUS_NONE && r && !1 !== n && (Z(c.STATUS_NONE, !0), F(null, !0))
            }
        }
        var X = (0, s.default)(Q),
            $ = (0, i.default)(X, 1)[0],
            G = a.useMemo((function() {
                var e, t, n;
                switch (K) {
                    case c.STATUS_APPEAR:
                        return e = {}, (0, u.default)(e, c.STEP_PREPARE, A), (0, u.default)(e, c.STEP_START, h), (0, u.default)(e, c.STEP_ACTIVE, R), e;
                    case c.STATUS_ENTER:
                        return t = {}, (0, u.default)(t, c.STEP_PREPARE, g), (0, u.default)(t, c.STEP_START, P), (0, u.default)(t, c.STEP_ACTIVE, _), t;
                    case c.STATUS_LEAVE:
                        return n = {}, (0, u.default)(n, c.STEP_PREPARE, x), (0, u.default)(n, c.STEP_START, O), (0, u.default)(n, c.STEP_ACTIVE, k), n;
                    default:
                        return {}
                }
            }), [K]),
            ee = (0, l.default)(K, (function(e) {
                if (e === c.STEP_PREPARE) {
                    var t = G[c.STEP_PREPARE];
                    return t ? t(B()) : l.SkipStep
                }
                var n;
                re in G && F((null === (n = G[re]) || void 0 === n ? void 0 : n.call(G, B(), null)) || null);
                return re === c.STEP_ACTIVE && ($(B()), S > 0 && (clearTimeout(H.current), H.current = setTimeout((function() {
                    Q({
                        deadline: !0
                    })
                }), S))), l.DoStep
            })),
            te = (0, i.default)(ee, 2),
            ne = te[0],
            re = te[1],
            oe = (0, l.isActive)(re);
        Y.current = oe, (0, d.default)((function() {
            L(t);
            var n, r = q.current;
            (q.current = !0, e) && (!r && t && E && (n = c.STATUS_APPEAR), r && t && v && (n = c.STATUS_ENTER), (r && !t && T || !r && b && !t && T) && (n = c.STATUS_LEAVE), n && (Z(n), ne()))
        }), [t]), (0, a.useEffect)((function() {
            (K === c.STATUS_APPEAR && !E || K === c.STATUS_ENTER && !v || K === c.STATUS_LEAVE && !T) && Z(c.STATUS_NONE)
        }), [E, v, T]), (0, a.useEffect)((function() {
            return function() {
                q.current = !1, clearTimeout(H.current)
            }
        }), []);
        var ue = a.useRef(!1);
        (0, a.useEffect)((function() {
            U && (ue.current = !0), void 0 !== U && K === c.STATUS_NONE && ((ue.current || U) && (null == j || j(U)), ue.current = !0)
        }), [U, K]);
        var ie = W;
        return G[c.STEP_PREPARE] && re === c.STEP_START && (ie = (0, o.default)({
            transition: "none"
        }, ie)), [K, re, ie, null != U ? U : t]
    }
})), n.register("4CMOi", (function(t, r) {
    e(t.exports, "SkipStep", (function() {
        return s
    })), e(t.exports, "DoStep", (function() {
        return d
    })), e(t.exports, "isActive", (function() {
        return p
    })), e(t.exports, "default", (function() {
        return v
    }));
    var o = n("le5aZ"),
        u = n("fywoC"),
        i = n("e62KD"),
        a = n("5995i"),
        f = n("2SCf6"),
        c = n("fyvas"),
        l = [a.STEP_PREPARE, a.STEP_START, a.STEP_ACTIVE, a.STEP_ACTIVATED],
        s = !1,
        d = !0;

    function p(e) {
        return e === a.STEP_ACTIVE || e === a.STEP_ACTIVATED
    }
    var v = function(e, t) {
        var n = (0, i.default)(a.STEP_NONE),
            r = (0, o.default)(n, 2),
            d = r[0],
            p = r[1],
            v = (0, f.default)(),
            y = (0, o.default)(v, 2),
            E = y[0],
            m = y[1];
        return (0, c.default)((function() {
            if (d !== a.STEP_NONE && d !== a.STEP_ACTIVATED) {
                var e = l.indexOf(d),
                    n = l[e + 1],
                    r = t(d);
                r === s ? p(n, !0) : E((function(e) {
                    function t() {
                        e.isCanceled() || p(n, !0)
                    }!0 === r ? t() : Promise.resolve(r).then(t)
                }))
            }
        }), [e, d]), u.useEffect((function() {
            return function() {
                m()
            }
        }), []), [function() {
            p(a.STEP_PREPARE, !0)
        }, d]
    }
})), n.register("2SCf6", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        u = n("iTPiI"),
        i = function() {
            var e = o.useRef(null);

            function t() {
                u.default.cancel(e.current)
            }
            return o.useEffect((function() {
                return function() {
                    t()
                }
            }), []), [function n(r) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                t();
                var i = (0, u.default)((function() {
                    o <= 1 ? r({
                        isCanceled: function() {
                            return i !== e.current
                        }
                    }) : n(r, o - 1)
                }));
                e.current = i
            }, t]
        }
})), n.register("fyvas", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("fywoC"),
        u = (0, n("9U8Wa").default)() ? o.useLayoutEffect : o.useEffect
})), n.register("htiqe", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        u = (o = n("fywoC"), n("1aJtd")),
        i = function(e) {
            var t = (0, o.useRef)(),
                n = (0, o.useRef)(e);
            n.current = e;
            var r = o.useCallback((function(e) {
                n.current(e)
            }), []);

            function i(e) {
                e && (e.removeEventListener(u.transitionEndName, r), e.removeEventListener(u.animationEndName, r))
            }
            return o.useEffect((function() {
                return function() {
                    i(t.current)
                }
            }), []), [function(e) {
                t.current && t.current !== e && i(t.current), e && e !== t.current && (e.addEventListener(u.transitionEndName, r), e.addEventListener(u.animationEndName, r), t.current = e)
            }, i]
        }
})), n.register("dIswj", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("cuNNr"),
        u = n("8VOmo"),
        i = n("5J89k"),
        a = n("dMlmf"),
        f = function(e) {
            (0, i.default)(n, e);
            var t = (0, a.default)(n);

            function n() {
                return (0, o.default)(this, n), t.apply(this, arguments)
            }
            return (0, u.default)(n, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), n
        }(n("fywoC").Component),
        c = f
})), n.register("cuNNr", (function(t, n) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("8VOmo", (function(t, n) {
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), n.register("5J89k", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("404gh");

    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), n.register("404gh", (function(t, n) {
    function r(e, t) {
        return r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(e, t)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("dMlmf", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("8HJbl"),
        u = n("dbjeq"),
        i = n("5xhje");

    function a(e) {
        var t = (0, u.default)();
        return function() {
            var n, r = (0, o.default)(e);
            if (t) {
                var u = (0, o.default)(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return (0, i.default)(this, n)
        }
    }
})), n.register("8HJbl", (function(t, n) {
    function r(e) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, r(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("dbjeq", (function(t, n) {
    function r() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("5xhje", (function(r, o) {
    e(r.exports, "default", (function() {
        return a
    }));
    var u = n("8tFuM"),
        i = n("iCEOF");

    function a(e, n) {
        if (n && ("object" === t(u)(n) || "function" == typeof n)) return n;
        if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), n.register("8tFuM", (function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = n = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), n(t)
    }
    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
})), n.register("iCEOF", (function(t, n) {
    function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("kDECZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = n("eNTDm"),
        u = n("bntjz"),
        i = n("bKsxa"),
        a = n("cuNNr"),
        f = n("8VOmo"),
        c = n("iCEOF"),
        l = n("5J89k"),
        s = n("dMlmf"),
        d = n("dldTV"),
        p = n("fywoC"),
        v = n("hoR7f"),
        y = n("1aJtd"),
        E = n("8EaNO"),
        m = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        T = ["status"],
        S = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
    var b = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.default,
            n = function(e) {
                (0, l.default)(r, e);
                var n = (0, s.default)(r);

                function r() {
                    var e;
                    (0, a.default)(this, r);
                    for (var t = arguments.length, o = new Array(t), u = 0; u < t; u++) o[u] = arguments[u];
                    return e = n.call.apply(n, [this].concat(o)), (0, d.default)((0, c.default)(e), "state", {
                        keyEntities: []
                    }), (0, d.default)((0, c.default)(e), "removeKey", (function(t) {
                        var n = e.state.keyEntities.map((function(e) {
                            return e.key !== t ? e : (0, i.default)((0, i.default)({}, e), {}, {
                                status: E.STATUS_REMOVED
                            })
                        }));
                        return e.setState({
                            keyEntities: n
                        }), n.filter((function(e) {
                            return e.status !== E.STATUS_REMOVED
                        })).length
                    })), e
                }
                return (0, f.default)(r, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            n = this.state.keyEntities,
                            r = this.props,
                            i = r.component,
                            a = r.children,
                            f = r.onVisibleChanged,
                            c = r.onAllRemoved,
                            l = (0, u.default)(r, m),
                            s = i || p.Fragment,
                            d = {};
                        return S.forEach((function(e) {
                            d[e] = l[e], delete l[e]
                        })), delete l.keys, p.createElement(s, l, n.map((function(n) {
                            var r = n.status,
                                i = (0, u.default)(n, T),
                                l = r === E.STATUS_ADD || r === E.STATUS_KEEP;
                            return p.createElement(t, (0, o.default)({}, d, {
                                key: i.key,
                                visible: l,
                                eventProps: i,
                                onVisibleChanged: function(t) {
                                    (null == f || f(t, {
                                        key: i.key
                                    }), t) || 0 === e.removeKey(i.key) && c && c()
                                }
                            }), a)
                        })))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = e.keys,
                            r = t.keyEntities,
                            o = (0, E.parseKeys)(n);
                        return {
                            keyEntities: (0, E.diffKeys)(r, o).filter((function(e) {
                                var t = r.find((function(t) {
                                    var n = t.key;
                                    return e.key === n
                                }));
                                return !t || t.status !== E.STATUS_REMOVED || e.status !== E.STATUS_REMOVE
                            }))
                        }
                    }
                }]), r
            }(p.Component);
        return (0, d.default)(n, "defaultProps", {
            component: "div"
        }), n
    }(y.supportTransition)
})), n.register("8EaNO", (function(t, r) {
    e(t.exports, "STATUS_ADD", (function() {
        return i
    })), e(t.exports, "STATUS_KEEP", (function() {
        return a
    })), e(t.exports, "STATUS_REMOVE", (function() {
        return f
    })), e(t.exports, "STATUS_REMOVED", (function() {
        return c
    })), e(t.exports, "parseKeys", (function() {
        return s
    })), e(t.exports, "diffKeys", (function() {
        return d
    }));
    var o = n("bKsxa"),
        u = n("cpTZT"),
        i = "add",
        a = "keep",
        f = "remove",
        c = "removed";

    function l(e) {
        var t;
        return t = e && "object" === (0, u.default)(e) && "key" in e ? e : {
            key: e
        }, (0, o.default)((0, o.default)({}, t), {}, {
            key: String(t.key)
        })
    }

    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.map(l)
    }

    function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = [],
            r = 0,
            u = t.length,
            c = s(e),
            l = s(t);
        c.forEach((function(e) {
            for (var t = !1, c = r; c < u; c += 1) {
                var s = l[c];
                if (s.key === e.key) {
                    r < c && (n = n.concat(l.slice(r, c).map((function(e) {
                        return (0, o.default)((0, o.default)({}, e), {}, {
                            status: i
                        })
                    }))), r = c), n.push((0, o.default)((0, o.default)({}, s), {}, {
                        status: a
                    })), r += 1, t = !0;
                    break
                }
            }
            t || n.push((0, o.default)((0, o.default)({}, e), {}, {
                status: f
            }))
        })), r < u && (n = n.concat(l.slice(r).map((function(e) {
            return (0, o.default)((0, o.default)({}, e), {}, {
                status: i
            })
        }))));
        var d = {};
        n.forEach((function(e) {
            var t = e.key;
            d[t] = (d[t] || 0) + 1
        }));
        var p = Object.keys(d).filter((function(e) {
            return d[e] > 1
        }));
        return p.forEach((function(e) {
            (n = n.filter((function(t) {
                var n = t.key,
                    r = t.status;
                return n !== e || r !== f
            }))).forEach((function(t) {
                t.key === e && (t.status = a)
            }))
        })), n
    }
})), n.register("2bY47", (function(r, o) {
    e(r.exports, "default", (function() {
        return l
    }));
    var u = n("eNTDm"),
        i = n("dldTV"),
        a = n("le5aZ"),
        f = n("fywoC"),
        c = n("fe1on"),
        l = f.forwardRef((function(e, n) {
            var r = e.prefixCls,
                o = e.style,
                l = e.className,
                s = e.duration,
                d = void 0 === s ? 4.5 : s,
                p = e.eventKey,
                v = e.content,
                y = e.closable,
                E = e.closeIcon,
                m = void 0 === E ? "x" : E,
                T = e.props,
                S = e.onClick,
                b = e.onNoticeClose,
                A = e.times,
                g = f.useState(!1),
                x = (0, a.default)(g, 2),
                h = x[0],
                P = x[1],
                O = function() {
                    b(p)
                };
            f.useEffect((function() {
                if (!h && d > 0) {
                    var e = setTimeout((function() {
                        O()
                    }), 1e3 * d);
                    return function() {
                        clearTimeout(e)
                    }
                }
            }), [d, h, A]);
            var R = "".concat(r, "-notice");
            return f.createElement("div", (0, u.default)({}, T, {
                ref: n,
                className: t(c)(R, l, (0, i.default)({}, "".concat(R, "-closable"), y)),
                style: o,
                onMouseEnter: function() {
                    P(!0)
                },
                onMouseLeave: function() {
                    P(!1)
                },
                onClick: S
            }), f.createElement("div", {
                className: "".concat(R, "-content")
            }, v), y && f.createElement("a", {
                tabIndex: 0,
                className: "".concat(R, "-close"),
                onClick: function(e) {
                    e.preventDefault(), e.stopPropagation(), O()
                }
            }, m))
        }))
}));