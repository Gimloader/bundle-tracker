import {
    r as o,
    aB as w,
    aL as ge,
    aK as Re,
    _ as ee,
    ao as Q,
    aC as ue,
    aE as Ae,
    x as U,
    dc as pe,
    aD as Ne,
    aF as J,
    aM as V,
    bh as Le,
    bi as _e
} from "./index-JueF_e_O.js";
var be = o.forwardRef(function(e, r) {
        var d = e.prefixCls,
            c = e.style,
            l = e.className,
            N = e.duration,
            C = N === void 0 ? 4.5 : N,
            A = e.showProgress,
            b = e.pauseOnHover,
            p = b === void 0 ? !0 : b,
            F = e.eventKey,
            D = e.content,
            m = e.closable,
            g = e.closeIcon,
            P = g === void 0 ? "x" : g,
            y = e.props,
            f = e.onClick,
            K = e.onNoticeClose,
            H = e.times,
            E = e.hovering,
            S = o.useState(!1),
            x = w(S, 2),
            u = x[0],
            O = x[1],
            a = o.useState(0),
            t = w(a, 2),
            n = t[0],
            i = t[1],
            R = o.useState(0),
            L = w(R, 2),
            k = L[0],
            q = L[1],
            v = E || u,
            _ = C > 0 && A,
            T = function() {
                K(F)
            },
            B = function(s) {
                (s.key === "Enter" || s.code === "Enter" || s.keyCode === Ae.ENTER) && T()
            };
        o.useEffect(function() {
            if (!v && C > 0) {
                var M = Date.now() - k,
                    s = setTimeout(function() {
                        T()
                    }, C * 1e3 - k);
                return function() {
                    p && clearTimeout(s), q(Date.now() - M)
                }
            }
        }, [C, v, H]), o.useEffect(function() {
            if (!v && _ && (p || k === 0)) {
                var M = performance.now(),
                    s, h = function ne() {
                        cancelAnimationFrame(s), s = requestAnimationFrame(function(oe) {
                            var G = oe + k - M,
                                j = Math.min(G / (C * 1e3), 1);
                            i(j * 100), j < 1 && ne()
                        })
                    };
                return h(),
                    function() {
                        p && cancelAnimationFrame(s)
                    }
            }
        }, [C, k, v, _, H]);
        var X = o.useMemo(function() {
                return ge(m) === "object" && m !== null ? m : m ? {
                    closeIcon: P
                } : {}
            }, [m, P]),
            te = Re(X, !0),
            $ = 100 - (!n || n < 0 ? 0 : n > 100 ? 100 : n),
            I = "".concat(d, "-notice");
        return o.createElement("div", ee({}, y, {
            ref: r,
            className: Q(I, l, ue({}, "".concat(I, "-closable"), m)),
            style: c,
            onMouseEnter: function(s) {
                var h;
                O(!0), y == null || (h = y.onMouseEnter) === null || h === void 0 || h.call(y, s)
            },
            onMouseLeave: function(s) {
                var h;
                O(!1), y == null || (h = y.onMouseLeave) === null || h === void 0 || h.call(y, s)
            },
            onClick: f
        }), o.createElement("div", {
            className: "".concat(I, "-content")
        }, D), m && o.createElement("a", ee({
            tabIndex: 0,
            className: "".concat(I, "-close"),
            onKeyDown: B,
            "aria-label": "Close"
        }, te, {
            onClick: function(s) {
                s.preventDefault(), s.stopPropagation(), T()
            }
        }), X.closeIcon), _ && o.createElement("progress", {
            className: "".concat(I, "-progress"),
            max: "100",
            value: $
        }, $ + "%"))
    }),
    he = U.createContext({}),
    Fe = function(r) {
        var d = r.children,
            c = r.classNames;
        return U.createElement(he.Provider, {
            value: {
                classNames: c
            }
        }, d)
    },
    de = 8,
    me = 3,
    ye = 16,
    Pe = function(r) {
        var d = {
            offset: de,
            threshold: me,
            gap: ye
        };
        if (r && ge(r) === "object") {
            var c, l, N;
            d.offset = (c = r.offset) !== null && c !== void 0 ? c : de, d.threshold = (l = r.threshold) !== null && l !== void 0 ? l : me, d.gap = (N = r.gap) !== null && N !== void 0 ? N : ye
        }
        return [!!r, d]
    },
    Me = ["className", "style", "classNames", "styles"],
    we = function(r) {
        var d = r.configList,
            c = r.placement,
            l = r.prefixCls,
            N = r.className,
            C = r.style,
            A = r.motion,
            b = r.onAllNoticeRemoved,
            p = r.onNoticeClose,
            F = r.stack,
            D = o.useContext(he),
            m = D.classNames,
            g = o.useRef({}),
            P = o.useState(null),
            y = w(P, 2),
            f = y[0],
            K = y[1],
            H = o.useState([]),
            E = w(H, 2),
            S = E[0],
            x = E[1],
            u = d.map(function(v) {
                return {
                    config: v,
                    key: String(v.key)
                }
            }),
            O = Pe(F),
            a = w(O, 2),
            t = a[0],
            n = a[1],
            i = n.offset,
            R = n.threshold,
            L = n.gap,
            k = t && (S.length > 0 || u.length <= R),
            q = typeof A == "function" ? A(c) : A;
        return o.useEffect(function() {
            t && S.length > 1 && x(function(v) {
                return v.filter(function(_) {
                    return u.some(function(T) {
                        var B = T.key;
                        return _ === B
                    })
                })
            })
        }, [S, u, t]), o.useEffect(function() {
            var v;
            if (t && g.current[(v = u[u.length - 1]) === null || v === void 0 ? void 0 : v.key]) {
                var _;
                K(g.current[(_ = u[u.length - 1]) === null || _ === void 0 ? void 0 : _.key])
            }
        }, [u, t]), U.createElement(pe, ee({
            key: c,
            className: Q(l, "".concat(l, "-").concat(c), m == null ? void 0 : m.list, N, ue(ue({}, "".concat(l, "-stack"), !!t), "".concat(l, "-stack-expanded"), k)),
            style: C,
            keys: u,
            motionAppear: !0
        }, q, {
            onAllRemoved: function() {
                b(c)
            }
        }), function(v, _) {
            var T = v.config,
                B = v.className,
                X = v.style,
                te = v.index,
                $ = T,
                I = $.key,
                M = $.times,
                s = String(I),
                h = T,
                ne = h.className,
                oe = h.style,
                G = h.classNames,
                j = h.styles,
                Se = Ne(h, Me),
                ae = u.findIndex(function(Z) {
                    return Z.key === s
                }),
                Y = {};
            if (t) {
                var z = u.length - 1 - (ae > -1 ? ae : te - 1),
                    fe = c === "top" || c === "bottom" ? "-50%" : "0";
                if (z > 0) {
                    var re, ie, se;
                    Y.height = k ? (re = g.current[s]) === null || re === void 0 ? void 0 : re.offsetHeight : f == null ? void 0 : f.offsetHeight;
                    for (var ve = 0, ce = 0; ce < z; ce++) {
                        var le;
                        ve += ((le = g.current[u[u.length - 1 - ce].key]) === null || le === void 0 ? void 0 : le.offsetHeight) + L
                    }
                    var ke = (k ? ve : z * i) * (c.startsWith("top") ? 1 : -1),
                        Ee = !k && f !== null && f !== void 0 && f.offsetWidth && (ie = g.current[s]) !== null && ie !== void 0 && ie.offsetWidth ? ((f == null ? void 0 : f.offsetWidth) - i * 2 * (z < 3 ? z : 3)) / ((se = g.current[s]) === null || se === void 0 ? void 0 : se.offsetWidth) : 1;
                    Y.transform = "translate3d(".concat(fe, ", ").concat(ke, "px, 0) scaleX(").concat(Ee, ")")
                } else Y.transform = "translate3d(".concat(fe, ", 0, 0)")
            }
            return U.createElement("div", {
                ref: _,
                className: Q("".concat(l, "-notice-wrapper"), B, G == null ? void 0 : G.wrapper),
                style: J(J(J({}, X), Y), j == null ? void 0 : j.wrapper),
                onMouseEnter: function() {
                    return x(function(W) {
                        return W.includes(s) ? W : [].concat(V(W), [s])
                    })
                },
                onMouseLeave: function() {
                    return x(function(W) {
                        return W.filter(function(xe) {
                            return xe !== s
                        })
                    })
                }
            }, U.createElement(be, ee({}, Se, {
                ref: function(W) {
                    ae > -1 ? g.current[s] = W : delete g.current[s]
                },
                prefixCls: l,
                classNames: G,
                styles: j,
                className: Q(ne, m == null ? void 0 : m.notice),
                style: oe,
                times: M,
                key: I,
                eventKey: I,
                onNoticeClose: p,
                hovering: t && S.length > 0
            })))
        })
    },
    He = o.forwardRef(function(e, r) {
        var d = e.prefixCls,
            c = d === void 0 ? "rc-notification" : d,
            l = e.container,
            N = e.motion,
            C = e.maxCount,
            A = e.className,
            b = e.style,
            p = e.onAllRemoved,
            F = e.stack,
            D = e.renderNotifications,
            m = o.useState([]),
            g = w(m, 2),
            P = g[0],
            y = g[1],
            f = function(t) {
                var n, i = P.find(function(R) {
                    return R.key === t
                });
                i == null || (n = i.onClose) === null || n === void 0 || n.call(i), y(function(R) {
                    return R.filter(function(L) {
                        return L.key !== t
                    })
                })
            };
        o.useImperativeHandle(r, function() {
            return {
                open: function(t) {
                    y(function(n) {
                        var i = V(n),
                            R = i.findIndex(function(q) {
                                return q.key === t.key
                            }),
                            L = J({}, t);
                        if (R >= 0) {
                            var k;
                            L.times = (((k = n[R]) === null || k === void 0 ? void 0 : k.times) || 0) + 1, i[R] = L
                        } else L.times = 0, i.push(L);
                        return C > 0 && i.length > C && (i = i.slice(-C)), i
                    })
                },
                close: function(t) {
                    f(t)
                },
                destroy: function() {
                    y([])
                }
            }
        });
        var K = o.useState({}),
            H = w(K, 2),
            E = H[0],
            S = H[1];
        o.useEffect(function() {
            var a = {};
            P.forEach(function(t) {
                var n = t.placement,
                    i = n === void 0 ? "topRight" : n;
                i && (a[i] = a[i] || [], a[i].push(t))
            }), Object.keys(E).forEach(function(t) {
                a[t] = a[t] || []
            }), S(a)
        }, [P]);
        var x = function(t) {
                S(function(n) {
                    var i = J({}, n),
                        R = i[t] || [];
                    return R.length || delete i[t], i
                })
            },
            u = o.useRef(!1);
        if (o.useEffect(function() {
                Object.keys(E).length > 0 ? u.current = !0 : u.current && (p == null || p(), u.current = !1)
            }, [E]), !l) return null;
        var O = Object.keys(E);
        return Le.createPortal(o.createElement(o.Fragment, null, O.map(function(a) {
            var t = E[a],
                n = o.createElement(we, {
                    key: a,
                    configList: t,
                    placement: a,
                    prefixCls: c,
                    className: A == null ? void 0 : A(a),
                    style: b == null ? void 0 : b(a),
                    motion: N,
                    onNoticeClose: f,
                    onAllNoticeRemoved: x,
                    stack: F
                });
            return D ? D(n, {
                prefixCls: c,
                key: a
            }) : n
        })), l)
    }),
    Ie = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"],
    De = function() {
        return document.body
    },
    Ce = 0;

function Oe() {
    for (var e = {}, r = arguments.length, d = new Array(r), c = 0; c < r; c++) d[c] = arguments[c];
    return d.forEach(function(l) {
        l && Object.keys(l).forEach(function(N) {
            var C = l[N];
            C !== void 0 && (e[N] = C)
        })
    }), e
}

function Ke() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = e.getContainer,
        d = r === void 0 ? De : r,
        c = e.motion,
        l = e.prefixCls,
        N = e.maxCount,
        C = e.className,
        A = e.style,
        b = e.onAllRemoved,
        p = e.stack,
        F = e.renderNotifications,
        D = Ne(e, Ie),
        m = o.useState(),
        g = w(m, 2),
        P = g[0],
        y = g[1],
        f = o.useRef(),
        K = o.createElement(He, {
            container: P,
            ref: f,
            prefixCls: l,
            motion: c,
            maxCount: N,
            className: C,
            style: A,
            onAllRemoved: b,
            stack: p,
            renderNotifications: F
        }),
        H = o.useState([]),
        E = w(H, 2),
        S = E[0],
        x = E[1],
        u = _e(function(a) {
            var t = Oe(D, a);
            (t.key === null || t.key === void 0) && (t.key = "rc-notification-".concat(Ce), Ce += 1), x(function(n) {
                return [].concat(V(n), [{
                    type: "open",
                    config: t
                }])
            })
        }),
        O = o.useMemo(function() {
            return {
                open: u,
                close: function(t) {
                    x(function(n) {
                        return [].concat(V(n), [{
                            type: "close",
                            key: t
                        }])
                    })
                },
                destroy: function() {
                    x(function(t) {
                        return [].concat(V(t), [{
                            type: "destroy"
                        }])
                    })
                }
            }
        }, []);
    return o.useEffect(function() {
        y(d())
    }), o.useEffect(function() {
        if (f.current && S.length) {
            S.forEach(function(n) {
                switch (n.type) {
                    case "open":
                        f.current.open(n.config);
                        break;
                    case "close":
                        f.current.close(n.key);
                        break;
                    case "destroy":
                        f.current.destroy();
                        break
                }
            });
            var a, t;
            x(function(n) {
                return (a !== n || !t) && (a = n, t = n.filter(function(i) {
                    return !S.includes(i)
                })), t
            })
        }
    }, [S]), [O, K]
}
const je = U.createContext({});
export {
    je as A, be as N, Fe as a, Ke as u
};