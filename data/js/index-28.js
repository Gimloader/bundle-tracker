import {
    r,
    aD as pt,
    _ as at,
    aF as K,
    ao as ge,
    aC as Se,
    aE as W,
    aB as ie,
    bh as _t,
    bg as jt,
    bi as Je,
    aM as we,
    aL as Lt,
    aI as At,
    bj as qt,
    aJ as Ct,
    cW as It,
    b9 as Ge,
    ak as zt,
    al as Wt,
    aN as Xt,
    am as ue,
    bG as St,
    x as Pe,
    aQ as Ut,
    bW as Yt
} from "./_index.js";
import {
    T as Gt
} from "./index-5.js";

function rt(e, t, o) {
    return (e - t) / (o - t)
}

function nt(e, t, o, n) {
    var i = rt(t, o, n),
        u = {};
    switch (e) {
        case "rtl":
            u.right = "".concat(i * 100, "%"), u.transform = "translateX(50%)";
            break;
        case "btt":
            u.bottom = "".concat(i * 100, "%"), u.transform = "translateY(50%)";
            break;
        case "ttb":
            u.top = "".concat(i * 100, "%"), u.transform = "translateY(-50%)";
            break;
        default:
            u.left = "".concat(i * 100, "%"), u.transform = "translateX(-50%)";
            break
    }
    return u
}

function Le(e, t) {
    return Array.isArray(e) ? e[t] : e
}
var Ae = r.createContext({
        min: 0,
        max: 0,
        direction: "ltr",
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0,
        styles: {},
        classNames: {}
    }),
    Kt = r.createContext({}),
    Vt = ["prefixCls", "value", "valueIndex", "onStartMove", "onDelete", "style", "render", "dragging", "draggingDelete", "onOffsetChange", "onChangeComplete", "onFocus", "onMouseEnter"],
    yt = r.forwardRef(function(e, t) {
        var o = e.prefixCls,
            n = e.value,
            i = e.valueIndex,
            u = e.onStartMove,
            m = e.onDelete,
            c = e.style,
            E = e.render,
            g = e.dragging,
            v = e.draggingDelete,
            S = e.onOffsetChange,
            y = e.onChangeComplete,
            b = e.onFocus,
            f = e.onMouseEnter,
            s = pt(e, Vt),
            a = r.useContext(Ae),
            d = a.min,
            l = a.max,
            C = a.direction,
            M = a.disabled,
            R = a.keyboard,
            B = a.range,
            _ = a.tabIndex,
            q = a.ariaLabelForHandle,
            D = a.ariaLabelledByForHandle,
            p = a.ariaRequired,
            k = a.ariaValueTextFormatterForHandle,
            $ = a.styles,
            I = a.classNames,
            X = "".concat(o, "-handle"),
            j = function(w) {
                M || u(w, i)
            },
            V = function(w) {
                b == null || b(w, i)
            },
            T = function(w) {
                f(w, i)
            },
            ye = function(w) {
                if (!M && R) {
                    var x = null;
                    switch (w.which || w.keyCode) {
                        case W.LEFT:
                            x = C === "ltr" || C === "btt" ? -1 : 1;
                            break;
                        case W.RIGHT:
                            x = C === "ltr" || C === "btt" ? 1 : -1;
                            break;
                        case W.UP:
                            x = C !== "ttb" ? 1 : -1;
                            break;
                        case W.DOWN:
                            x = C !== "ttb" ? -1 : 1;
                            break;
                        case W.HOME:
                            x = "min";
                            break;
                        case W.END:
                            x = "max";
                            break;
                        case W.PAGE_UP:
                            x = 2;
                            break;
                        case W.PAGE_DOWN:
                            x = -2;
                            break;
                        case W.BACKSPACE:
                        case W.DELETE:
                            m(i);
                            break
                    }
                    x !== null && (w.preventDefault(), S(x, i))
                }
            },
            te = function(w) {
                switch (w.which || w.keyCode) {
                    case W.LEFT:
                    case W.RIGHT:
                    case W.UP:
                    case W.DOWN:
                    case W.HOME:
                    case W.END:
                    case W.PAGE_UP:
                    case W.PAGE_DOWN:
                        y == null || y();
                        break
                }
            },
            fe = nt(C, n, d, l),
            de = {};
        if (i !== null) {
            var ae;
            de = {
                tabIndex: M ? null : Le(_, i),
                role: "slider",
                "aria-valuemin": d,
                "aria-valuemax": l,
                "aria-valuenow": n,
                "aria-disabled": M,
                "aria-label": Le(q, i),
                "aria-labelledby": Le(D, i),
                "aria-required": Le(p, i),
                "aria-valuetext": (ae = Le(k, i)) === null || ae === void 0 ? void 0 : ae(n),
                "aria-orientation": C === "ltr" || C === "rtl" ? "horizontal" : "vertical",
                onMouseDown: j,
                onTouchStart: j,
                onFocus: V,
                onMouseEnter: T,
                onKeyDown: ye,
                onKeyUp: te
            }
        }
        var ke = r.createElement("div", at({
            ref: t,
            className: ge(X, Se(Se(Se({}, "".concat(X, "-").concat(i + 1), i !== null && B), "".concat(X, "-dragging"), g), "".concat(X, "-dragging-delete"), v), I.handle),
            style: K(K(K({}, fe), c), $.handle)
        }, de, s));
        return E && (ke = E(ke, {
            index: i,
            prefixCls: o,
            value: n,
            dragging: g,
            draggingDelete: v
        })), ke
    }),
    Jt = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "activeHandleRender", "draggingIndex", "draggingDelete", "onFocus"],
    Qt = r.forwardRef(function(e, t) {
        var o = e.prefixCls,
            n = e.style,
            i = e.onStartMove,
            u = e.onOffsetChange,
            m = e.values,
            c = e.handleRender,
            E = e.activeHandleRender,
            g = e.draggingIndex,
            v = e.draggingDelete,
            S = e.onFocus,
            y = pt(e, Jt),
            b = r.useRef({}),
            f = r.useState(!1),
            s = ie(f, 2),
            a = s[0],
            d = s[1],
            l = r.useState(-1),
            C = ie(l, 2),
            M = C[0],
            R = C[1],
            B = function(k) {
                R(k), d(!0)
            },
            _ = function(k, $) {
                B($), S == null || S(k)
            },
            q = function(k, $) {
                B($)
            };
        r.useImperativeHandle(t, function() {
            return {
                focus: function(k) {
                    var $;
                    ($ = b.current[k]) === null || $ === void 0 || $.focus()
                },
                hideHelp: function() {
                    _t.flushSync(function() {
                        d(!1)
                    })
                }
            }
        });
        var D = K({
            prefixCls: o,
            onStartMove: i,
            onOffsetChange: u,
            render: c,
            onFocus: _,
            onMouseEnter: q
        }, y);
        return r.createElement(r.Fragment, null, m.map(function(p, k) {
            var $ = g === k;
            return r.createElement(yt, at({
                ref: function(X) {
                    X ? b.current[k] = X : delete b.current[k]
                },
                dragging: $,
                draggingDelete: $ && v,
                style: Le(n, k),
                key: k,
                value: p,
                valueIndex: k
            }, D))
        }), E && a && r.createElement(yt, at({
            key: "a11y"
        }, D, {
            value: m[M],
            valueIndex: null,
            dragging: g !== -1,
            draggingDelete: v,
            render: E,
            style: {
                pointerEvents: "none"
            },
            tabIndex: null,
            "aria-hidden": !0
        })))
    }),
    Zt = function(t) {
        var o = t.prefixCls,
            n = t.style,
            i = t.children,
            u = t.value,
            m = t.onClick,
            c = r.useContext(Ae),
            E = c.min,
            g = c.max,
            v = c.direction,
            S = c.includedStart,
            y = c.includedEnd,
            b = c.included,
            f = "".concat(o, "-text"),
            s = nt(v, u, E, g);
        return r.createElement("span", {
            className: ge(f, Se({}, "".concat(f, "-active"), b && S <= u && u <= y)),
            style: K(K({}, s), n),
            onMouseDown: function(d) {
                d.stopPropagation()
            },
            onClick: function() {
                m(u)
            }
        }, i)
    },
    ea = function(t) {
        var o = t.prefixCls,
            n = t.marks,
            i = t.onClick,
            u = "".concat(o, "-mark");
        return n.length ? r.createElement("div", {
            className: u
        }, n.map(function(m) {
            var c = m.value,
                E = m.style,
                g = m.label;
            return r.createElement(Zt, {
                key: c,
                prefixCls: u,
                style: E,
                value: c,
                onClick: i
            }, g)
        })) : null
    },
    ta = function(t) {
        var o = t.prefixCls,
            n = t.value,
            i = t.style,
            u = t.activeStyle,
            m = r.useContext(Ae),
            c = m.min,
            E = m.max,
            g = m.direction,
            v = m.included,
            S = m.includedStart,
            y = m.includedEnd,
            b = "".concat(o, "-dot"),
            f = v && S <= n && n <= y,
            s = K(K({}, nt(g, n, c, E)), typeof i == "function" ? i(n) : i);
        return f && (s = K(K({}, s), typeof u == "function" ? u(n) : u)), r.createElement("span", {
            className: ge(b, Se({}, "".concat(b, "-active"), f)),
            style: s
        })
    },
    aa = function(t) {
        var o = t.prefixCls,
            n = t.marks,
            i = t.dots,
            u = t.style,
            m = t.activeStyle,
            c = r.useContext(Ae),
            E = c.min,
            g = c.max,
            v = c.step,
            S = r.useMemo(function() {
                var y = new Set;
                if (n.forEach(function(f) {
                        y.add(f.value)
                    }), i && v !== null)
                    for (var b = E; b <= g;) y.add(b), b += v;
                return Array.from(y)
            }, [E, g, v, i, n]);
        return r.createElement("div", {
            className: "".concat(o, "-step")
        }, S.map(function(y) {
            return r.createElement(ta, {
                prefixCls: o,
                key: y,
                value: y,
                style: u,
                activeStyle: m
            })
        }))
    },
    kt = function(t) {
        var o = t.prefixCls,
            n = t.style,
            i = t.start,
            u = t.end,
            m = t.index,
            c = t.onStartMove,
            E = t.replaceCls,
            g = r.useContext(Ae),
            v = g.direction,
            S = g.min,
            y = g.max,
            b = g.disabled,
            f = g.range,
            s = g.classNames,
            a = "".concat(o, "-track"),
            d = rt(i, S, y),
            l = rt(u, S, y),
            C = function(_) {
                !b && c && c(_, -1)
            },
            M = {};
        switch (v) {
            case "rtl":
                M.right = "".concat(d * 100, "%"), M.width = "".concat(l * 100 - d * 100, "%");
                break;
            case "btt":
                M.bottom = "".concat(d * 100, "%"), M.height = "".concat(l * 100 - d * 100, "%");
                break;
            case "ttb":
                M.top = "".concat(d * 100, "%"), M.height = "".concat(l * 100 - d * 100, "%");
                break;
            default:
                M.left = "".concat(d * 100, "%"), M.width = "".concat(l * 100 - d * 100, "%")
        }
        var R = E || ge(a, Se(Se({}, "".concat(a, "-").concat(m + 1), m !== null && f), "".concat(o, "-track-draggable"), c), s.track);
        return r.createElement("div", {
            className: R,
            style: K(K({}, M), n),
            onMouseDown: C,
            onTouchStart: C
        })
    },
    ra = function(t) {
        var o = t.prefixCls,
            n = t.style,
            i = t.values,
            u = t.startPoint,
            m = t.onStartMove,
            c = r.useContext(Ae),
            E = c.included,
            g = c.range,
            v = c.min,
            S = c.styles,
            y = c.classNames,
            b = r.useMemo(function() {
                if (!g) {
                    if (i.length === 0) return [];
                    var s = u ?? v,
                        a = i[0];
                    return [{
                        start: Math.min(s, a),
                        end: Math.max(s, a)
                    }]
                }
                for (var d = [], l = 0; l < i.length - 1; l += 1) d.push({
                    start: i[l],
                    end: i[l + 1]
                });
                return d
            }, [i, g, u, v]);
        if (!E) return null;
        var f = b != null && b.length && (y.tracks || S.tracks) ? r.createElement(kt, {
            index: null,
            prefixCls: o,
            start: b[0].start,
            end: b[b.length - 1].end,
            replaceCls: ge(y.tracks, "".concat(o, "-tracks")),
            style: S.tracks
        }) : null;
        return r.createElement(r.Fragment, null, f, b.map(function(s, a) {
            var d = s.start,
                l = s.end;
            return r.createElement(kt, {
                index: a,
                prefixCls: o,
                style: K(K({}, Le(n, a)), S.track),
                start: d,
                end: l,
                key: a,
                onStartMove: m
            })
        }))
    },
    na = 130;

function Et(e) {
    var t = "targetTouches" in e ? e.targetTouches[0] : e;
    return {
        pageX: t.pageX,
        pageY: t.pageY
    }
}

function oa(e, t, o, n, i, u, m, c, E, g, v) {
    var S = r.useState(null),
        y = ie(S, 2),
        b = y[0],
        f = y[1],
        s = r.useState(-1),
        a = ie(s, 2),
        d = a[0],
        l = a[1],
        C = r.useState(!1),
        M = ie(C, 2),
        R = M[0],
        B = M[1],
        _ = r.useState(o),
        q = ie(_, 2),
        D = q[0],
        p = q[1],
        k = r.useState(o),
        $ = ie(k, 2),
        I = $[0],
        X = $[1],
        j = r.useRef(null),
        V = r.useRef(null),
        T = r.useRef(null),
        ye = r.useContext(Kt),
        te = ye.onDragStart,
        fe = ye.onDragChange;
    jt(function() {
        d === -1 && p(o)
    }, [o, d]), r.useEffect(function() {
        return function() {
            document.removeEventListener("mousemove", j.current), document.removeEventListener("mouseup", V.current), T.current && (T.current.removeEventListener("touchmove", j.current), T.current.removeEventListener("touchend", V.current))
        }
    }, []);
    var de = function(x, L, A) {
            L !== void 0 && f(L), p(x);
            var Q = x;
            A && (Q = x.filter(function(N, U) {
                return U !== d
            })), m(Q), fe && fe({
                rawValues: x,
                deleteIndex: A ? d : -1,
                draggingIndex: d,
                draggingValue: L
            })
        },
        ae = Je(function(w, x, L) {
            if (w === -1) {
                var A = I[0],
                    Q = I[I.length - 1],
                    N = n - A,
                    U = i - Q,
                    re = x * (i - n);
                re = Math.max(re, N), re = Math.min(re, U);
                var se = u(A + re);
                re = se - A;
                var me = I.map(function(ve) {
                    return ve + re
                });
                de(me)
            } else {
                var he = (i - n) * x,
                    be = we(D);
                be[w] = I[w];
                var Ee = E(be, he, w, "dist");
                de(Ee.values, Ee.value, L)
            }
        }),
        ke = function(x, L, A) {
            x.stopPropagation();
            var Q = A || o,
                N = Q[L];
            l(L), f(N), X(Q), p(Q), B(!1);
            var U = Et(x),
                re = U.pageX,
                se = U.pageY,
                me = !1;
            te && te({
                rawValues: Q,
                draggingIndex: L,
                draggingValue: N
            });
            var he = function(ve) {
                    ve.preventDefault();
                    var ne = Et(ve),
                        He = ne.pageX,
                        Be = ne.pageY,
                        pe = He - re,
                        ce = Be - se,
                        H = e.current.getBoundingClientRect(),
                        Y = H.width,
                        $e = H.height,
                        Ce, oe;
                    switch (t) {
                        case "btt":
                            Ce = -ce / $e, oe = pe;
                            break;
                        case "ttb":
                            Ce = ce / $e, oe = pe;
                            break;
                        case "rtl":
                            Ce = -pe / Y, oe = ce;
                            break;
                        default:
                            Ce = pe / Y, oe = ce
                    }
                    me = g ? Math.abs(oe) > na && v < D.length : !1, B(me), ae(L, Ce, me)
                },
                be = function Ee(ve) {
                    ve.preventDefault(), document.removeEventListener("mouseup", Ee), document.removeEventListener("mousemove", he), T.current && (T.current.removeEventListener("touchmove", j.current), T.current.removeEventListener("touchend", V.current)), j.current = null, V.current = null, T.current = null, c(me), l(-1), B(!1)
                };
            document.addEventListener("mouseup", be), document.addEventListener("mousemove", he), x.currentTarget.addEventListener("touchend", be), x.currentTarget.addEventListener("touchmove", he), j.current = he, V.current = be, T.current = x.currentTarget
        },
        J = r.useMemo(function() {
            var w = we(o).sort(function(N, U) {
                    return N - U
                }),
                x = we(D).sort(function(N, U) {
                    return N - U
                }),
                L = {};
            x.forEach(function(N) {
                L[N] = (L[N] || 0) + 1
            }), w.forEach(function(N) {
                L[N] = (L[N] || 0) - 1
            });
            var A = g ? 1 : 0,
                Q = Object.values(L).reduce(function(N, U) {
                    return N + Math.abs(U)
                }, 0);
            return Q <= A ? D : o
        }, [o, D, g]);
    return [d, b, R, J, ke]
}

function la(e, t, o, n, i, u) {
    var m = r.useCallback(function(b) {
            return Math.max(e, Math.min(t, b))
        }, [e, t]),
        c = r.useCallback(function(b) {
            if (o !== null) {
                var f = e + Math.round((m(b) - e) / o) * o,
                    s = function(C) {
                        return (String(C).split(".")[1] || "").length
                    },
                    a = Math.max(s(o), s(t), s(e)),
                    d = Number(f.toFixed(a));
                return e <= d && d <= t ? d : null
            }
            return null
        }, [o, e, t, m]),
        E = r.useCallback(function(b) {
            var f = m(b),
                s = n.map(function(l) {
                    return l.value
                });
            o !== null && s.push(c(b)), s.push(e, t);
            var a = s[0],
                d = t - e;
            return s.forEach(function(l) {
                var C = Math.abs(f - l);
                C <= d && (a = l, d = C)
            }), a
        }, [e, t, n, o, m, c]),
        g = function b(f, s, a) {
            var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
            if (typeof s == "number") {
                var l, C = f[a],
                    M = C + s,
                    R = [];
                n.forEach(function(p) {
                    R.push(p.value)
                }), R.push(e, t), R.push(c(C));
                var B = s > 0 ? 1 : -1;
                d === "unit" ? R.push(c(C + B * o)) : R.push(c(M)), R = R.filter(function(p) {
                    return p !== null
                }).filter(function(p) {
                    return s < 0 ? p <= C : p >= C
                }), d === "unit" && (R = R.filter(function(p) {
                    return p !== C
                }));
                var _ = d === "unit" ? C : M;
                l = R[0];
                var q = Math.abs(l - _);
                if (R.forEach(function(p) {
                        var k = Math.abs(p - _);
                        k < q && (l = p, q = k)
                    }), l === void 0) return s < 0 ? e : t;
                if (d === "dist") return l;
                if (Math.abs(s) > 1) {
                    var D = we(f);
                    return D[a] = l, b(D, s - B, a, d)
                }
                return l
            } else {
                if (s === "min") return e;
                if (s === "max") return t
            }
        },
        v = function(f, s, a) {
            var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit",
                l = f[a],
                C = g(f, s, a, d);
            return {
                value: C,
                changed: C !== l
            }
        },
        S = function(f) {
            return u === null && f === 0 || typeof u == "number" && f < u
        },
        y = function(f, s, a) {
            var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit",
                l = f.map(E),
                C = l[a],
                M = g(l, s, a, d);
            if (l[a] = M, i === !1) {
                var R = u || 0;
                a > 0 && l[a - 1] !== C && (l[a] = Math.max(l[a], l[a - 1] + R)), a < l.length - 1 && l[a + 1] !== C && (l[a] = Math.min(l[a], l[a + 1] - R))
            } else if (typeof u == "number" || u === null) {
                for (var B = a + 1; B < l.length; B += 1)
                    for (var _ = !0; S(l[B] - l[B - 1]) && _;) {
                        var q = v(l, 1, B);
                        l[B] = q.value, _ = q.changed
                    }
                for (var D = a; D > 0; D -= 1)
                    for (var p = !0; S(l[D] - l[D - 1]) && p;) {
                        var k = v(l, -1, D - 1);
                        l[D - 1] = k.value, p = k.changed
                    }
                for (var $ = l.length - 1; $ > 0; $ -= 1)
                    for (var I = !0; S(l[$] - l[$ - 1]) && I;) {
                        var X = v(l, -1, $ - 1);
                        l[$ - 1] = X.value, I = X.changed
                    }
                for (var j = 0; j < l.length - 1; j += 1)
                    for (var V = !0; S(l[j + 1] - l[j]) && V;) {
                        var T = v(l, 1, j + 1);
                        l[j + 1] = T.value, V = T.changed
                    }
            }
            return {
                value: l[a],
                values: l
            }
        };
    return [E, y]
}

function ia(e) {
    return r.useMemo(function() {
        if (e === !0 || !e) return [!!e, !1, !1, 0];
        var t = e.editable,
            o = e.draggableTrack,
            n = e.minCount,
            i = e.maxCount;
        return [!0, t, !t && o, n || 0, i]
    }, [e])
}
var sa = r.forwardRef(function(e, t) {
    var o = e.prefixCls,
        n = o === void 0 ? "rc-slider" : o,
        i = e.className,
        u = e.style,
        m = e.classNames,
        c = e.styles,
        E = e.id,
        g = e.disabled,
        v = g === void 0 ? !1 : g,
        S = e.keyboard,
        y = S === void 0 ? !0 : S,
        b = e.autoFocus,
        f = e.onFocus,
        s = e.onBlur,
        a = e.min,
        d = a === void 0 ? 0 : a,
        l = e.max,
        C = l === void 0 ? 100 : l,
        M = e.step,
        R = M === void 0 ? 1 : M,
        B = e.value,
        _ = e.defaultValue,
        q = e.range,
        D = e.count,
        p = e.onChange,
        k = e.onBeforeChange,
        $ = e.onAfterChange,
        I = e.onChangeComplete,
        X = e.allowCross,
        j = X === void 0 ? !0 : X,
        V = e.pushable,
        T = V === void 0 ? !1 : V,
        ye = e.reverse,
        te = e.vertical,
        fe = e.included,
        de = fe === void 0 ? !0 : fe,
        ae = e.startPoint,
        ke = e.trackStyle,
        J = e.handleStyle,
        w = e.railStyle,
        x = e.dotStyle,
        L = e.activeDotStyle,
        A = e.marks,
        Q = e.dots,
        N = e.handleRender,
        U = e.activeHandleRender,
        re = e.track,
        se = e.tabIndex,
        me = se === void 0 ? 0 : se,
        he = e.ariaLabelForHandle,
        be = e.ariaLabelledByForHandle,
        Ee = e.ariaRequired,
        ve = e.ariaValueTextFormatterForHandle,
        ne = r.useRef(null),
        He = r.useRef(null),
        Be = r.useMemo(function() {
            return te ? ye ? "ttb" : "btt" : ye ? "rtl" : "ltr"
        }, [ye, te]),
        pe = ia(q),
        ce = ie(pe, 5),
        H = ce[0],
        Y = ce[1],
        $e = ce[2],
        Ce = ce[3],
        oe = ce[4],
        le = r.useMemo(function() {
            return isFinite(d) ? d : 0
        }, [d]),
        xe = r.useMemo(function() {
            return isFinite(C) ? C : 100
        }, [C]),
        Me = r.useMemo(function() {
            return R !== null && R <= 0 ? 1 : R
        }, [R]),
        G = r.useMemo(function() {
            return typeof T == "boolean" ? T ? Me : !1 : T >= 0 ? T : !1
        }, [T, Me]),
        Z = r.useMemo(function() {
            return Object.keys(A || {}).map(function(O) {
                var h = A[O],
                    P = {
                        value: Number(O)
                    };
                return h && Lt(h) === "object" && !r.isValidElement(h) && ("label" in h || "style" in h) ? (P.style = h.style, P.label = h.label) : P.label = h, P
            }).filter(function(O) {
                var h = O.label;
                return h || typeof h == "number"
            }).sort(function(O, h) {
                return O.value - h.value
            })
        }, [A]),
        Qe = la(le, xe, Me, Z, j, G),
        ze = ie(Qe, 2),
        Fe = ze[0],
        We = ze[1],
        Xe = At(_, {
            value: B
        }),
        ot = ie(Xe, 2),
        Te = ot[0],
        Mt = ot[1],
        ee = r.useMemo(function() {
            var O = Te == null ? [] : Array.isArray(Te) ? Te : [Te],
                h = ie(O, 1),
                P = h[0],
                F = P === void 0 ? le : P,
                z = Te === null ? [] : [F];
            if (H) {
                if (z = we(O), D || Te === void 0) {
                    var Ne = D >= 0 ? D + 1 : 2;
                    for (z = z.slice(0, Ne); z.length < Ne;) {
                        var Re;
                        z.push((Re = z[z.length - 1]) !== null && Re !== void 0 ? Re : le)
                    }
                }
                z.sort(function(De, Oe) {
                    return De - Oe
                })
            }
            return z.forEach(function(De, Oe) {
                z[Oe] = Fe(De)
            }), z
        }, [Te, H, le, D, Fe]),
        qe = function(h) {
            return H ? h : h[0]
        },
        Ke = Je(function(O) {
            var h = we(O).sort(function(P, F) {
                return P - F
            });
            p && !qt(h, ee, !0) && p(qe(h)), Mt(h)
        }),
        lt = Je(function(O) {
            O && ne.current.hideHelp();
            var h = qe(ee);
            $ == null || $(h), Ct(!$, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), I == null || I(h)
        }),
        Rt = function(h) {
            if (!(v || !Y || ee.length <= Ce)) {
                var P = we(ee);
                P.splice(h, 1), k == null || k(qe(P)), Ke(P);
                var F = Math.max(0, h - 1);
                ne.current.hideHelp(), ne.current.focus(F)
            }
        },
        Dt = oa(He, Be, ee, le, xe, Fe, Ke, lt, We, Y, Ce),
        Ue = ie(Dt, 5),
        it = Ue[0],
        Ot = Ue[1],
        Pt = Ue[2],
        Ze = Ue[3],
        st = Ue[4],
        ct = function(h, P) {
            if (!v) {
                var F = we(ee),
                    z = 0,
                    Ne = 0,
                    Re = xe - le;
                ee.forEach(function(_e, Ve) {
                    var bt = Math.abs(h - _e);
                    bt <= Re && (Re = bt, z = Ve), _e < h && (Ne = Ve)
                });
                var De = z;
                Y && Re !== 0 && (!oe || ee.length < oe) ? (F.splice(Ne + 1, 0, h), De = Ne + 1) : F[z] = h, H && !ee.length && D === void 0 && F.push(h);
                var Oe = qe(F);
                if (k == null || k(Oe), Ke(F), P) {
                    var je, Ie;
                    (je = document.activeElement) === null || je === void 0 || (Ie = je.blur) === null || Ie === void 0 || Ie.call(je), ne.current.focus(De), st(P, De, F)
                } else $ == null || $(Oe), Ct(!$, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), I == null || I(Oe)
            }
        },
        wt = function(h) {
            h.preventDefault();
            var P = He.current.getBoundingClientRect(),
                F = P.width,
                z = P.height,
                Ne = P.left,
                Re = P.top,
                De = P.bottom,
                Oe = P.right,
                je = h.clientX,
                Ie = h.clientY,
                _e;
            switch (Be) {
                case "btt":
                    _e = (De - Ie) / z;
                    break;
                case "ttb":
                    _e = (Ie - Re) / z;
                    break;
                case "rtl":
                    _e = (Oe - je) / F;
                    break;
                default:
                    _e = (je - Ne) / F
            }
            var Ve = le + _e * (xe - le);
            ct(Fe(Ve), h)
        },
        Ht = r.useState(null),
        ut = ie(Ht, 2),
        et = ut[0],
        dt = ut[1],
        Bt = function(h, P) {
            if (!v) {
                var F = We(ee, h, P);
                k == null || k(qe(ee)), Ke(F.values), dt(F.value)
            }
        };
    r.useEffect(function() {
        if (et !== null) {
            var O = ee.indexOf(et);
            O >= 0 && ne.current.focus(O)
        }
        dt(null)
    }, [et]);
    var Ft = r.useMemo(function() {
            return $e && Me === null ? !1 : $e
        }, [$e, Me]),
        vt = Je(function(O, h) {
            st(O, h), k == null || k(qe(ee))
        }),
        gt = it !== -1;
    r.useEffect(function() {
        if (!gt) {
            var O = ee.lastIndexOf(Ot);
            ne.current.focus(O)
        }
    }, [gt]);
    var Ye = r.useMemo(function() {
            return we(Ze).sort(function(O, h) {
                return O - h
            })
        }, [Ze]),
        Tt = r.useMemo(function() {
            return H ? [Ye[0], Ye[Ye.length - 1]] : [le, Ye[0]]
        }, [Ye, H, le]),
        ft = ie(Tt, 2),
        mt = ft[0],
        ht = ft[1];
    r.useImperativeHandle(t, function() {
        return {
            focus: function() {
                ne.current.focus(0)
            },
            blur: function() {
                var h, P = document,
                    F = P.activeElement;
                (h = He.current) !== null && h !== void 0 && h.contains(F) && (F == null || F.blur())
            }
        }
    }), r.useEffect(function() {
        b && ne.current.focus(0)
    }, []);
    var Nt = r.useMemo(function() {
        return {
            min: le,
            max: xe,
            direction: Be,
            disabled: v,
            keyboard: y,
            step: Me,
            included: de,
            includedStart: mt,
            includedEnd: ht,
            range: H,
            tabIndex: me,
            ariaLabelForHandle: he,
            ariaLabelledByForHandle: be,
            ariaRequired: Ee,
            ariaValueTextFormatterForHandle: ve,
            styles: c || {},
            classNames: m || {}
        }
    }, [le, xe, Be, v, y, Me, de, mt, ht, H, me, he, be, Ee, ve, c, m]);
    return r.createElement(Ae.Provider, {
        value: Nt
    }, r.createElement("div", {
        ref: He,
        className: ge(n, i, Se(Se(Se(Se({}, "".concat(n, "-disabled"), v), "".concat(n, "-vertical"), te), "".concat(n, "-horizontal"), !te), "".concat(n, "-with-marks"), Z.length)),
        style: u,
        onMouseDown: wt,
        id: E
    }, r.createElement("div", {
        className: ge("".concat(n, "-rail"), m == null ? void 0 : m.rail),
        style: K(K({}, w), c == null ? void 0 : c.rail)
    }), re !== !1 && r.createElement(ra, {
        prefixCls: n,
        style: ke,
        values: ee,
        startPoint: ae,
        onStartMove: Ft ? vt : void 0
    }), r.createElement(aa, {
        prefixCls: n,
        marks: Z,
        dots: Q,
        style: x,
        activeStyle: L
    }), r.createElement(Qt, {
        ref: ne,
        prefixCls: n,
        style: J,
        values: Ze,
        draggingIndex: it,
        draggingDelete: Pt,
        onStartMove: vt,
        onOffsetChange: Bt,
        onFocus: f,
        onBlur: s,
        handleRender: N,
        activeHandleRender: U,
        onChangeComplete: lt,
        onDelete: Y ? Rt : void 0
    }), r.createElement(ea, {
        prefixCls: n,
        marks: Z,
        onClick: ct
    })))
});
const ca = r.createContext({}),
    $t = r.forwardRef((e, t) => {
        const {
            open: o,
            draggingDelete: n,
            value: i
        } = e, u = r.useRef(null), m = o && !n, c = r.useRef(null);

        function E() {
            Ge.cancel(c.current), c.current = null
        }

        function g() {
            c.current = Ge(() => {
                var v;
                (v = u.current) === null || v === void 0 || v.forceAlign(), c.current = null
            })
        }
        return r.useEffect(() => (m ? g() : E(), E), [m, e.title, i]), r.createElement(Gt, Object.assign({
            ref: It(u, t)
        }, e, {
            open: m
        }))
    }),
    ua = e => {
        const {
            componentCls: t,
            antCls: o,
            controlSize: n,
            dotSize: i,
            marginFull: u,
            marginPart: m,
            colorFillContentHover: c,
            handleColorDisabled: E,
            calc: g,
            handleSize: v,
            handleSizeHover: S,
            handleActiveColor: y,
            handleActiveOutlineColor: b,
            handleLineWidth: f,
            handleLineWidthHover: s,
            motionDurationMid: a
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, Xt(e)), {
                position: "relative",
                height: n,
                margin: `${ue(m)} ${ue(u)}`,
                padding: 0,
                cursor: "pointer",
                touchAction: "none",
                "&-vertical": {
                    margin: `${ue(u)} ${ue(m)}`
                },
                [`${t}-rail`]: {
                    position: "absolute",
                    backgroundColor: e.railBg,
                    borderRadius: e.borderRadiusXS,
                    transition: `background-color ${a}`
                },
                [`${t}-track,${t}-tracks`]: {
                    position: "absolute",
                    transition: `background-color ${a}`
                },
                [`${t}-track`]: {
                    backgroundColor: e.trackBg,
                    borderRadius: e.borderRadiusXS
                },
                [`${t}-track-draggable`]: {
                    boxSizing: "content-box",
                    backgroundClip: "content-box",
                    border: "solid rgba(0,0,0,0)"
                },
                "&:hover": {
                    [`${t}-rail`]: {
                        backgroundColor: e.railHoverBg
                    },
                    [`${t}-track`]: {
                        backgroundColor: e.trackHoverBg
                    },
                    [`${t}-dot`]: {
                        borderColor: c
                    },
                    [`${t}-handle::after`]: {
                        boxShadow: `0 0 0 ${ue(f)} ${e.colorPrimaryBorderHover}`
                    },
                    [`${t}-dot-active`]: {
                        borderColor: e.dotActiveBorderColor
                    }
                },
                [`${t}-handle`]: {
                    position: "absolute",
                    width: v,
                    height: v,
                    outline: "none",
                    userSelect: "none",
                    "&-dragging-delete": {
                        opacity: 0
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        insetInlineStart: g(f).mul(-1).equal(),
                        insetBlockStart: g(f).mul(-1).equal(),
                        width: g(v).add(g(f).mul(2)).equal(),
                        height: g(v).add(g(f).mul(2)).equal(),
                        backgroundColor: "transparent"
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: v,
                        height: v,
                        backgroundColor: e.colorBgElevated,
                        boxShadow: `0 0 0 ${ue(f)} ${e.handleColor}`,
                        outline: "0px solid transparent",
                        borderRadius: "50%",
                        cursor: "pointer",
                        transition: `
            inset-inline-start ${a},
            inset-block-start ${a},
            width ${a},
            height ${a},
            box-shadow ${a},
            outline ${a}
          `
                    },
                    "&:hover, &:active, &:focus": {
                        "&::before": {
                            insetInlineStart: g(S).sub(v).div(2).add(s).mul(-1).equal(),
                            insetBlockStart: g(S).sub(v).div(2).add(s).mul(-1).equal(),
                            width: g(S).add(g(s).mul(2)).equal(),
                            height: g(S).add(g(s).mul(2)).equal()
                        },
                        "&::after": {
                            boxShadow: `0 0 0 ${ue(s)} ${y}`,
                            outline: `6px solid ${b}`,
                            width: S,
                            height: S,
                            insetInlineStart: e.calc(v).sub(S).div(2).equal(),
                            insetBlockStart: e.calc(v).sub(S).div(2).equal()
                        }
                    }
                },
                [`&-lock ${t}-handle`]: {
                    "&::before, &::after": {
                        transition: "none"
                    }
                },
                [`${t}-mark`]: {
                    position: "absolute",
                    fontSize: e.fontSize
                },
                [`${t}-mark-text`]: {
                    position: "absolute",
                    display: "inline-block",
                    color: e.colorTextDescription,
                    textAlign: "center",
                    wordBreak: "keep-all",
                    cursor: "pointer",
                    userSelect: "none",
                    "&-active": {
                        color: e.colorText
                    }
                },
                [`${t}-step`]: {
                    position: "absolute",
                    background: "transparent",
                    pointerEvents: "none"
                },
                [`${t}-dot`]: {
                    position: "absolute",
                    width: i,
                    height: i,
                    backgroundColor: e.colorBgElevated,
                    border: `${ue(f)} solid ${e.dotBorderColor}`,
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: `border-color ${e.motionDurationSlow}`,
                    pointerEvents: "auto",
                    "&-active": {
                        borderColor: e.dotActiveBorderColor
                    }
                },
                [`&${t}-disabled`]: {
                    cursor: "not-allowed",
                    [`${t}-rail`]: {
                        backgroundColor: `${e.railBg} !important`
                    },
                    [`${t}-track`]: {
                        backgroundColor: `${e.trackBgDisabled} !important`
                    },
                    [`
          ${t}-dot
        `]: {
                        backgroundColor: e.colorBgElevated,
                        borderColor: e.trackBgDisabled,
                        boxShadow: "none",
                        cursor: "not-allowed"
                    },
                    [`${t}-handle::after`]: {
                        backgroundColor: e.colorBgElevated,
                        cursor: "not-allowed",
                        width: v,
                        height: v,
                        boxShadow: `0 0 0 ${ue(f)} ${E}`,
                        insetInlineStart: 0,
                        insetBlockStart: 0
                    },
                    [`
          ${t}-mark-text,
          ${t}-dot
        `]: {
                        cursor: "not-allowed !important"
                    }
                },
                [`&-tooltip ${o}-tooltip-inner`]: {
                    minWidth: "unset"
                }
            })
        }
    },
    xt = (e, t) => {
        const {
            componentCls: o,
            railSize: n,
            handleSize: i,
            dotSize: u,
            marginFull: m,
            calc: c
        } = e, E = t ? "paddingBlock" : "paddingInline", g = t ? "width" : "height", v = t ? "height" : "width", S = t ? "insetBlockStart" : "insetInlineStart", y = t ? "top" : "insetInlineStart", b = c(n).mul(3).sub(i).div(2).equal(), f = c(i).sub(n).div(2).equal(), s = t ? {
            borderWidth: `${ue(f)} 0`,
            transform: `translateY(${ue(c(f).mul(-1).equal())})`
        } : {
            borderWidth: `0 ${ue(f)}`,
            transform: `translateX(${ue(e.calc(f).mul(-1).equal())})`
        };
        return {
            [E]: n,
            [v]: c(n).mul(3).equal(),
            [`${o}-rail`]: {
                [g]: "100%",
                [v]: n
            },
            [`${o}-track,${o}-tracks`]: {
                [v]: n
            },
            [`${o}-track-draggable`]: Object.assign({}, s),
            [`${o}-handle`]: {
                [S]: b
            },
            [`${o}-mark`]: {
                insetInlineStart: 0,
                top: 0,
                [y]: c(n).mul(3).add(t ? 0 : m).equal(),
                [g]: "100%"
            },
            [`${o}-step`]: {
                insetInlineStart: 0,
                top: 0,
                [y]: n,
                [g]: "100%",
                [v]: n
            },
            [`${o}-dot`]: {
                position: "absolute",
                [S]: c(n).sub(u).div(2).equal()
            }
        }
    },
    da = e => {
        const {
            componentCls: t,
            marginPartWithMark: o
        } = e;
        return {
            [`${t}-horizontal`]: Object.assign(Object.assign({}, xt(e, !0)), {
                [`&${t}-with-marks`]: {
                    marginBottom: o
                }
            })
        }
    },
    va = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-vertical`]: Object.assign(Object.assign({}, xt(e, !1)), {
                height: "100%"
            })
        }
    },
    ga = e => {
        const o = e.controlHeightLG / 4,
            n = e.controlHeightSM / 2,
            i = e.lineWidth + 1,
            u = e.lineWidth + 1 * 1.5,
            m = e.colorPrimary,
            c = new St(m).setA(.2).toRgbString();
        return {
            controlSize: o,
            railSize: 4,
            handleSize: o,
            handleSizeHover: n,
            dotSize: 8,
            handleLineWidth: i,
            handleLineWidthHover: u,
            railBg: e.colorFillTertiary,
            railHoverBg: e.colorFillSecondary,
            trackBg: e.colorPrimaryBorder,
            trackHoverBg: e.colorPrimaryBorderHover,
            handleColor: e.colorPrimaryBorder,
            handleActiveColor: m,
            handleActiveOutlineColor: c,
            handleColorDisabled: new St(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),
            dotBorderColor: e.colorBorderSecondary,
            dotActiveBorderColor: e.colorPrimaryBorder,
            trackBgDisabled: e.colorBgContainerDisabled
        }
    },
    fa = zt("Slider", e => {
        const t = Wt(e, {
            marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
            marginFull: e.calc(e.controlSize).div(2).equal(),
            marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
        });
        return [ua(t), da(t), va(t)]
    }, ga);

function tt() {
    const [e, t] = r.useState(!1), o = r.useRef(null), n = () => {
        Ge.cancel(o.current)
    }, i = u => {
        n(), u ? t(u) : o.current = Ge(() => {
            t(u)
        })
    };
    return r.useEffect(() => n, []), [e, i]
}
var ma = function(e, t) {
    var o = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
    return o
};

function ha(e, t) {
    return e || e === null ? e : t || t === null ? t : o => typeof o == "number" ? o.toString() : ""
}
const Sa = Pe.forwardRef((e, t) => {
    const {
        prefixCls: o,
        range: n,
        className: i,
        rootClassName: u,
        style: m,
        disabled: c,
        tooltipPrefixCls: E,
        tipFormatter: g,
        tooltipVisible: v,
        getTooltipPopupContainer: S,
        tooltipPlacement: y,
        tooltip: b = {},
        onChangeComplete: f,
        classNames: s,
        styles: a
    } = e, d = ma(e, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement", "tooltip", "onChangeComplete", "classNames", "styles"]), {
        vertical: l
    } = e, {
        getPrefixCls: C,
        direction: M,
        className: R,
        style: B,
        classNames: _,
        styles: q,
        getPopupContainer: D
    } = Ut("slider"), p = Pe.useContext(Yt), k = c ?? p, {
        handleRender: $,
        direction: I
    } = Pe.useContext(ca), j = (I || M) === "rtl", [V, T] = tt(), [ye, te] = tt(), fe = Object.assign({}, b), {
        open: de,
        placement: ae,
        getPopupContainer: ke,
        prefixCls: J,
        formatter: w
    } = fe, x = de ?? v, L = (V || ye) && x !== !1, A = ha(w, g), [Q, N] = tt(), U = H => {
        f == null || f(H), N(!1)
    }, re = (H, Y) => H || (Y ? j ? "left" : "right" : "top"), se = C("slider", o), [me, he, be] = fa(se), Ee = ge(i, R, _.root, s == null ? void 0 : s.root, u, {
        [`${se}-rtl`]: j,
        [`${se}-lock`]: Q
    }, he, be);
    j && !d.vertical && (d.reverse = !d.reverse), Pe.useEffect(() => {
        const H = () => {
            Ge(() => {
                te(!1)
            }, 1)
        };
        return document.addEventListener("mouseup", H), () => {
            document.removeEventListener("mouseup", H)
        }
    }, []);
    const ve = n && !x,
        ne = $ || ((H, Y) => {
            const {
                index: $e
            } = Y, Ce = H.props;

            function oe(G, Z, Qe) {
                var ze, Fe, We, Xe;
                Qe && ((Fe = (ze = d)[G]) === null || Fe === void 0 || Fe.call(ze, Z)), (Xe = (We = Ce)[G]) === null || Xe === void 0 || Xe.call(We, Z)
            }
            const le = Object.assign(Object.assign({}, Ce), {
                    onMouseEnter: G => {
                        T(!0), oe("onMouseEnter", G)
                    },
                    onMouseLeave: G => {
                        T(!1), oe("onMouseLeave", G)
                    },
                    onMouseDown: G => {
                        te(!0), N(!0), oe("onMouseDown", G)
                    },
                    onFocus: G => {
                        var Z;
                        te(!0), (Z = d.onFocus) === null || Z === void 0 || Z.call(d, G), oe("onFocus", G, !0)
                    },
                    onBlur: G => {
                        var Z;
                        te(!1), (Z = d.onBlur) === null || Z === void 0 || Z.call(d, G), oe("onBlur", G, !0)
                    }
                }),
                xe = Pe.cloneElement(H, le),
                Me = (!!x || L) && A !== null;
            return ve ? xe : Pe.createElement($t, Object.assign({}, fe, {
                prefixCls: C("tooltip", J ?? E),
                title: A ? A(Y.value) : "",
                value: Y.value,
                open: Me,
                placement: re(ae ?? y, l),
                key: $e,
                classNames: {
                    root: `${se}-tooltip`
                },
                getPopupContainer: ke || S || D
            }), xe)
        }),
        He = ve ? (H, Y) => {
            const $e = Pe.cloneElement(H, {
                style: Object.assign(Object.assign({}, H.props.style), {
                    visibility: "hidden"
                })
            });
            return Pe.createElement($t, Object.assign({}, fe, {
                prefixCls: C("tooltip", J ?? E),
                title: A ? A(Y.value) : "",
                open: A !== null && L,
                placement: re(ae ?? y, l),
                key: "tooltip",
                classNames: {
                    root: `${se}-tooltip`
                },
                getPopupContainer: ke || S || D,
                draggingDelete: Y.draggingDelete
            }), $e)
        } : void 0,
        Be = Object.assign(Object.assign(Object.assign(Object.assign({}, q.root), B), a == null ? void 0 : a.root), m),
        pe = Object.assign(Object.assign({}, q.tracks), a == null ? void 0 : a.tracks),
        ce = ge(_.tracks, s == null ? void 0 : s.tracks);
    return me(Pe.createElement(sa, Object.assign({}, d, {
        classNames: Object.assign({
            handle: ge(_.handle, s == null ? void 0 : s.handle),
            rail: ge(_.rail, s == null ? void 0 : s.rail),
            track: ge(_.track, s == null ? void 0 : s.track)
        }, ce ? {
            tracks: ce
        } : {}),
        styles: Object.assign({
            handle: Object.assign(Object.assign({}, q.handle), a == null ? void 0 : a.handle),
            rail: Object.assign(Object.assign({}, q.rail), a == null ? void 0 : a.rail),
            track: Object.assign(Object.assign({}, q.track), a == null ? void 0 : a.track)
        }, Object.keys(pe).length ? {
            tracks: pe
        } : {}),
        step: d.step,
        range: n,
        className: Ee,
        style: Be,
        disabled: k,
        ref: t,
        prefixCls: se,
        handleRender: ne,
        activeHandleRender: He,
        onChangeComplete: U
    })))
});
export {
    Sa as S
};