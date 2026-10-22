import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    l as r,
    s as i
} from "./assertThisInitialized.js";
import {
    C as a,
    Ft as o,
    H as s,
    Ht as c,
    It as l,
    J as u,
    Lt as d,
    Ot as f,
    Ut as p,
    Vt as m,
    X as h,
    b as g,
    et as _,
    gt as v,
    ht as y,
    k as b,
    lt as x,
    m as S,
    nt as C,
    s as w,
    tt as T,
    ut as E,
    x as ee,
    zt as D
} from "./Compact.js";
import {
    h as O,
    v as k
} from "./color.js";
import {
    O as A
} from "./ContextIsolator.js";
import {
    t as j
} from "./tooltip-1.js";
var M = e(t()),
    N = e(r()),
    P = e(p());
n(), c(), d(), v(), E(), C();

function F(e, t, n) {
    return (e - t) / (n - t)
}

function I(e, t, n, r) {
    var i = F(t, n, r),
        a = {};
    switch (e) {
        case `rtl`:
            a.right = `${i*100}%`, a.transform = `translateX(50%)`;
            break;
        case `btt`:
            a.bottom = `${i*100}%`, a.transform = `translateY(50%)`;
            break;
        case `ttb`:
            a.top = `${i*100}%`, a.transform = `translateY(-50%)`;
            break;
        default:
            a.left = `${i*100}%`, a.transform = `translateX(-50%)`
    }
    return a
}

function L(e, t) {
    return Array.isArray(e) ? e[t] : e
}
var R = M.createContext({
        min: 0,
        max: 0,
        direction: `ltr`,
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0,
        styles: {},
        classNames: {}
    }),
    z = M.createContext({}),
    B = [`prefixCls`, `value`, `valueIndex`, `onStartMove`, `onDelete`, `style`, `render`, `dragging`, `draggingDelete`, `onOffsetChange`, `onChangeComplete`, `onFocus`, `onMouseEnter`],
    V = M.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.value,
            a = e.valueIndex,
            s = e.onStartMove,
            c = e.onDelete,
            u = e.style,
            d = e.render,
            f = e.dragging,
            p = e.draggingDelete,
            m = e.onOffsetChange,
            h = e.onChangeComplete,
            g = e.onFocus,
            _ = e.onMouseEnter,
            v = T(e, B),
            y = M.useContext(R),
            b = y.min,
            x = y.max,
            S = y.direction,
            C = y.disabled,
            w = y.keyboard,
            E = y.range,
            ee = y.tabIndex,
            D = y.ariaLabelForHandle,
            O = y.ariaLabelledByForHandle,
            k = y.ariaRequired,
            j = y.ariaValueTextFormatterForHandle,
            N = y.styles,
            F = y.classNames,
            z = `${n}-handle`,
            V = function(e) {
                C || s(e, a)
            },
            H = function(e) {
                g == null || g(e, a)
            },
            te = function(e) {
                _(e, a)
            },
            ne = function(e) {
                if (!C && w) {
                    var t = null;
                    switch (e.which || e.keyCode) {
                        case A.LEFT:
                            t = S === `ltr` || S === `btt` ? -1 : 1;
                            break;
                        case A.RIGHT:
                            t = S === `ltr` || S === `btt` ? 1 : -1;
                            break;
                        case A.UP:
                            t = S === `ttb` ? -1 : 1;
                            break;
                        case A.DOWN:
                            t = S === `ttb` ? 1 : -1;
                            break;
                        case A.HOME:
                            t = `min`;
                            break;
                        case A.END:
                            t = `max`;
                            break;
                        case A.PAGE_UP:
                            t = 2;
                            break;
                        case A.PAGE_DOWN:
                            t = -2;
                            break;
                        case A.BACKSPACE:
                        case A.DELETE:
                            c(a)
                    }
                    t !== null && (e.preventDefault(), m(t, a))
                }
            },
            re = function(e) {
                switch (e.which || e.keyCode) {
                    case A.LEFT:
                    case A.RIGHT:
                    case A.UP:
                    case A.DOWN:
                    case A.HOME:
                    case A.END:
                    case A.PAGE_UP:
                    case A.PAGE_DOWN:
                        h == null || h()
                }
            },
            U = I(S, r, b, x),
            W = {};
        if (a !== null) {
            var G;
            W = {
                tabIndex: C ? null : L(ee, a),
                role: `slider`,
                "aria-valuemin": b,
                "aria-valuemax": x,
                "aria-valuenow": r,
                "aria-disabled": C,
                "aria-label": L(D, a),
                "aria-labelledby": L(O, a),
                "aria-required": L(k, a),
                "aria-valuetext": (G = L(j, a)) == null ? void 0 : G(r),
                "aria-orientation": S === `ltr` || S === `rtl` ? `horizontal` : `vertical`,
                onMouseDown: V,
                onTouchStart: V,
                onFocus: H,
                onMouseEnter: te,
                onKeyDown: ne,
                onKeyUp: re
            }
        }
        var K = M.createElement(`div`, i({
            ref: t,
            className: (0, P.default)(z, l(l(l({}, `${z}-${a+1}`, a !== null && E), `${z}-dragging`, f), `${z}-dragging-delete`, p), F.handle),
            style: o(o(o({}, U), u), N.handle)
        }, W, v));
        return d && (K = d(K, {
            index: a,
            prefixCls: n,
            value: r,
            dragging: f,
            draggingDelete: p
        })), K
    });
n(), C();
var H = [`prefixCls`, `style`, `onStartMove`, `onOffsetChange`, `values`, `handleRender`, `activeHandleRender`, `draggingIndex`, `draggingDelete`, `onFocus`],
    te = M.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.style,
            a = e.onStartMove,
            s = e.onOffsetChange,
            c = e.values,
            l = e.handleRender,
            u = e.activeHandleRender,
            d = e.draggingIndex,
            f = e.draggingDelete,
            p = e.onFocus,
            m = T(e, H),
            h = M.useRef({}),
            g = M.useState(!1),
            _ = x(g, 2),
            v = _[0],
            y = _[1],
            b = M.useState(-1),
            S = x(b, 2),
            C = S[0],
            w = S[1],
            E = function(e) {
                w(e), y(!0)
            },
            ee = function(e, t) {
                E(t), p == null || p(e)
            },
            D = function(e, t) {
                E(t)
            };
        M.useImperativeHandle(t, function() {
            return {
                focus: function(e) {
                    var t;
                    (t = h.current[e]) == null || t.focus()
                },
                hideHelp: function() {
                    (0, N.flushSync)(function() {
                        y(!1)
                    })
                }
            }
        });
        var O = o({
            prefixCls: n,
            onStartMove: a,
            onOffsetChange: s,
            render: l,
            onFocus: ee,
            onMouseEnter: D
        }, m);
        return M.createElement(M.Fragment, null, c.map(function(e, t) {
            var n = d === t;
            return M.createElement(V, i({
                ref: function(e) {
                    e ? h.current[t] = e : delete h.current[t]
                },
                dragging: n,
                draggingDelete: n && f,
                style: L(r, t),
                key: t,
                value: e,
                valueIndex: t
            }, O))
        }), u && v && M.createElement(V, i({
            key: `a11y`
        }, O, {
            value: c[C],
            valueIndex: null,
            dragging: d !== -1,
            draggingDelete: f,
            render: u,
            style: {
                pointerEvents: `none`
            },
            tabIndex: null,
            "aria-hidden": !0
        })))
    });
d();
var ne = function(e) {
        var t = e.prefixCls,
            n = e.style,
            r = e.children,
            i = e.value,
            a = e.onClick,
            s = M.useContext(R),
            c = s.min,
            u = s.max,
            d = s.direction,
            f = s.includedStart,
            p = s.includedEnd,
            m = s.included,
            h = `${t}-text`,
            g = I(d, i, c, u);
        return M.createElement(`span`, {
            className: (0, P.default)(h, l({}, `${h}-active`, m && f <= i && i <= p)),
            style: o(o({}, g), n),
            onMouseDown: function(e) {
                e.stopPropagation()
            },
            onClick: function() {
                a(i)
            }
        }, r)
    },
    re = function(e) {
        var t = e.prefixCls,
            n = e.marks,
            r = e.onClick,
            i = `${t}-mark`;
        return n.length ? M.createElement(`div`, {
            className: i
        }, n.map(function(e) {
            var t = e.value,
                n = e.style,
                a = e.label;
            return M.createElement(ne, {
                key: t,
                prefixCls: i,
                style: n,
                value: t,
                onClick: r
            }, a)
        })) : null
    };
d();
var U = function(e) {
        var t = e.prefixCls,
            n = e.value,
            r = e.style,
            i = e.activeStyle,
            a = M.useContext(R),
            s = a.min,
            c = a.max,
            u = a.direction,
            d = a.included,
            f = a.includedStart,
            p = a.includedEnd,
            m = `${t}-dot`,
            h = d && f <= n && n <= p,
            g = o(o({}, I(u, n, s, c)), typeof r == `function` ? r(n) : r);
        return h && (g = o(o({}, g), typeof i == `function` ? i(n) : i)), M.createElement(`span`, {
            className: (0, P.default)(m, l({}, `${m}-active`, h)),
            style: g
        })
    },
    W = function(e) {
        var t = e.prefixCls,
            n = e.marks,
            r = e.dots,
            i = e.style,
            a = e.activeStyle,
            o = M.useContext(R),
            s = o.min,
            c = o.max,
            l = o.step,
            u = M.useMemo(function() {
                var e = new Set;
                if (n.forEach(function(t) {
                        e.add(t.value)
                    }), r && l !== null)
                    for (var t = s; t <= c;) e.add(t), t += l;
                return Array.from(e)
            }, [s, c, l, r, n]);
        return M.createElement(`div`, {
            className: `${t}-step`
        }, u.map(function(e) {
            return M.createElement(U, {
                prefixCls: t,
                key: e,
                value: e,
                style: i,
                activeStyle: a
            })
        }))
    };
d();
var G = function(e) {
        var t = e.prefixCls,
            n = e.style,
            r = e.start,
            i = e.end,
            a = e.index,
            s = e.onStartMove,
            c = e.replaceCls,
            u = M.useContext(R),
            d = u.direction,
            f = u.min,
            p = u.max,
            m = u.disabled,
            h = u.range,
            g = u.classNames,
            _ = `${t}-track`,
            v = F(r, f, p),
            y = F(i, f, p),
            b = function(e) {
                !m && s && s(e, -1)
            },
            x = {};
        switch (d) {
            case `rtl`:
                x.right = `${v*100}%`, x.width = `${y*100-v*100}%`;
                break;
            case `btt`:
                x.bottom = `${v*100}%`, x.height = `${y*100-v*100}%`;
                break;
            case `ttb`:
                x.top = `${v*100}%`, x.height = `${y*100-v*100}%`;
                break;
            default:
                x.left = `${v*100}%`, x.width = `${y*100-v*100}%`
        }
        var S = c || (0, P.default)(_, l(l({}, `${_}-${a+1}`, a !== null && h), `${t}-track-draggable`, s), g.track);
        return M.createElement(`div`, {
            className: S,
            style: o(o({}, x), n),
            onMouseDown: b,
            onTouchStart: b
        })
    },
    K = function(e) {
        var t = e.prefixCls,
            n = e.style,
            r = e.values,
            i = e.startPoint,
            a = e.onStartMove,
            s = M.useContext(R),
            c = s.included,
            l = s.range,
            u = s.min,
            d = s.styles,
            f = s.classNames,
            p = M.useMemo(function() {
                if (!l) {
                    if (r.length === 0) return [];
                    var e = i ?? u,
                        t = r[0];
                    return [{
                        start: Math.min(e, t),
                        end: Math.max(e, t)
                    }]
                }
                for (var n = [], a = 0; a < r.length - 1; a += 1) n.push({
                    start: r[a],
                    end: r[a + 1]
                });
                return n
            }, [r, l, i, u]);
        if (!c) return null;
        var m = p != null && p.length && (f.tracks || d.tracks) ? M.createElement(G, {
            index: null,
            prefixCls: t,
            start: p[0].start,
            end: p[p.length - 1].end,
            replaceCls: (0, P.default)(f.tracks, `${t}-tracks`),
            style: d.tracks
        }) : null;
        return M.createElement(M.Fragment, null, m, p.map(function(e, r) {
            var i = e.start,
                s = e.end;
            return M.createElement(G, {
                index: r,
                prefixCls: t,
                style: o(o({}, L(n, r)), d.track),
                start: i,
                end: s,
                key: r,
                onStartMove: a
            })
        }))
    };
E();
var ie = 130;

function ae(e) {
    var t = `targetTouches` in e ? e.targetTouches[0] : e;
    return {
        pageX: t.pageX,
        pageY: t.pageY
    }
}

function q(e, t, n, r, i, o, s, c, l, d, f) {
    var p = M.useState(null),
        m = x(p, 2),
        h = m[0],
        g = m[1],
        _ = M.useState(-1),
        v = x(_, 2),
        b = v[0],
        S = v[1],
        C = M.useState(!1),
        w = x(C, 2),
        T = w[0],
        E = w[1],
        ee = M.useState(n),
        D = x(ee, 2),
        O = D[0],
        k = D[1],
        A = M.useState(n),
        j = x(A, 2),
        N = j[0],
        P = j[1],
        F = M.useRef(null),
        I = M.useRef(null),
        L = M.useRef(null),
        R = M.useContext(z),
        B = R.onDragStart,
        V = R.onDragChange;
    u(function() {
        b === -1 && k(n)
    }, [n, b]), M.useEffect(function() {
        return function() {
            document.removeEventListener(`mousemove`, F.current), document.removeEventListener(`mouseup`, I.current), L.current && (L.current.removeEventListener(`touchmove`, F.current), L.current.removeEventListener(`touchend`, I.current))
        }
    }, []);
    var H = function(e, t, n) {
            t !== void 0 && g(t), k(e);
            var r = e;
            n && (r = e.filter(function(e, t) {
                return t !== b
            })), s(r), V && V({
                rawValues: e,
                deleteIndex: n ? b : -1,
                draggingIndex: b,
                draggingValue: t
            })
        },
        te = a(function(e, t, n) {
            if (e === -1) {
                var a = N[0],
                    s = N[N.length - 1],
                    c = r - a,
                    u = i - s,
                    d = t * (i - r);
                d = Math.max(d, c), d = Math.min(d, u), d = o(a + d) - a, H(N.map(function(e) {
                    return e + d
                }))
            } else {
                var f = (i - r) * t,
                    p = y(O);
                p[e] = N[e];
                var m = l(p, f, e, `dist`);
                H(m.values, m.value, n)
            }
        });
    return [b, h, T, M.useMemo(function() {
        var e = y(n).sort(function(e, t) {
                return e - t
            }),
            t = y(O).sort(function(e, t) {
                return e - t
            }),
            r = {};
        t.forEach(function(e) {
            r[e] = (r[e] || 0) + 1
        }), e.forEach(function(e) {
            r[e] = (r[e] || 0) - 1
        });
        var i = +!!d;
        return Object.values(r).reduce(function(e, t) {
            return e + Math.abs(t)
        }, 0) <= i ? O : n
    }, [n, O, d]), function(r, i, a) {
        r.stopPropagation();
        var o = a || n,
            s = o[i];
        S(i), g(s), P(o), k(o), E(!1);
        var l = ae(r),
            u = l.pageX,
            p = l.pageY,
            m = !1;
        B && B({
            rawValues: o,
            draggingIndex: i,
            draggingValue: s
        });
        var h = function(n) {
                n.preventDefault();
                var r = ae(n),
                    a = r.pageX,
                    o = r.pageY,
                    s = a - u,
                    c = o - p,
                    l = e.current.getBoundingClientRect(),
                    h = l.width,
                    g = l.height,
                    _, v;
                switch (t) {
                    case `btt`:
                        _ = -c / g, v = s;
                        break;
                    case `ttb`:
                        _ = c / g, v = s;
                        break;
                    case `rtl`:
                        _ = -s / h, v = c;
                        break;
                    default:
                        _ = s / h, v = c
                }
                m = d ? Math.abs(v) > ie && f < O.length : !1, E(m), te(i, _, m)
            },
            _ = function e(t) {
                t.preventDefault(), document.removeEventListener(`mouseup`, e), document.removeEventListener(`mousemove`, h), L.current && (L.current.removeEventListener(`touchmove`, F.current), L.current.removeEventListener(`touchend`, I.current)), F.current = null, I.current = null, L.current = null, c(m), S(-1), E(!1)
            };
        document.addEventListener(`mouseup`, _), document.addEventListener(`mousemove`, h), r.currentTarget.addEventListener(`touchend`, _), r.currentTarget.addEventListener(`touchmove`, h), F.current = h, I.current = _, L.current = r.currentTarget
    }]
}
v();

function oe(e, t, n, r, i, a) {
    var o = M.useCallback(function(n) {
            return Math.max(e, Math.min(t, n))
        }, [e, t]),
        s = M.useCallback(function(r) {
            if (n !== null) {
                var i = e + Math.round((o(r) - e) / n) * n,
                    a = function(e) {
                        return (String(e).split(`.`)[1] || ``).length
                    },
                    s = Math.max(a(n), a(t), a(e)),
                    c = Number(i.toFixed(s));
                return e <= c && c <= t ? c : null
            }
            return null
        }, [n, e, t, o]),
        c = M.useCallback(function(i) {
            var a = o(i),
                c = r.map(function(e) {
                    return e.value
                });
            n !== null && c.push(s(i)), c.push(e, t);
            var l = c[0],
                u = t - e;
            return c.forEach(function(e) {
                var t = Math.abs(a - e);
                t <= u && (l = e, u = t)
            }), l
        }, [e, t, r, n, o, s]),
        l = function i(a, o, c) {
            var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `unit`;
            if (typeof o == `number`) {
                var u, d = a[c],
                    f = d + o,
                    p = [];
                r.forEach(function(e) {
                    p.push(e.value)
                }), p.push(e, t), p.push(s(d));
                var m = o > 0 ? 1 : -1;
                l === `unit` ? p.push(s(d + m * n)) : p.push(s(f)), p = p.filter(function(e) {
                    return e !== null
                }).filter(function(e) {
                    return o < 0 ? e <= d : e >= d
                }), l === `unit` && (p = p.filter(function(e) {
                    return e !== d
                }));
                var h = l === `unit` ? d : f;
                u = p[0];
                var g = Math.abs(u - h);
                if (p.forEach(function(e) {
                        var t = Math.abs(e - h);
                        t < g && (u = e, g = t)
                    }), u === void 0) return o < 0 ? e : t;
                if (l === `dist`) return u;
                if (Math.abs(o) > 1) {
                    var _ = y(a);
                    return _[c] = u, i(_, o - m, c, l)
                }
                return u
            }
            if (o === `min`) return e;
            if (o === `max`) return t
        },
        u = function(e, t, n) {
            var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `unit`,
                i = e[n],
                a = l(e, t, n, r);
            return {
                value: a,
                changed: a !== i
            }
        },
        d = function(e) {
            return a === null && e === 0 || typeof a == `number` && e < a
        };
    return [c, function(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `unit`,
            o = e.map(c),
            s = o[n];
        if (o[n] = l(o, t, n, r), i === !1) {
            var f = a || 0;
            n > 0 && o[n - 1] !== s && (o[n] = Math.max(o[n], o[n - 1] + f)), n < o.length - 1 && o[n + 1] !== s && (o[n] = Math.min(o[n], o[n + 1] - f))
        } else if (typeof a == `number` || a === null) {
            for (var p = n + 1; p < o.length; p += 1)
                for (var m = !0; d(o[p] - o[p - 1]) && m;) {
                    var h = u(o, 1, p);
                    o[p] = h.value, m = h.changed
                }
            for (var g = n; g > 0; --g)
                for (var _ = !0; d(o[g] - o[g - 1]) && _;) {
                    var v = u(o, -1, g - 1);
                    o[g - 1] = v.value, _ = v.changed
                }
            for (var y = o.length - 1; y > 0; --y)
                for (var b = !0; d(o[y] - o[y - 1]) && b;) {
                    var x = u(o, -1, y - 1);
                    o[y - 1] = x.value, b = x.changed
                }
            for (var S = 0; S < o.length - 1; S += 1)
                for (var C = !0; d(o[S + 1] - o[S]) && C;) {
                    var w = u(o, 1, S + 1);
                    o[S + 1] = w.value, C = w.changed
                }
        }
        return {
            value: o[n],
            values: o
        }
    }]
}

function se(e) {
    return (0, M.useMemo)(function() {
        if (e === !0 || !e) return [!!e, !1, !1, 0];
        var t = e.editable,
            n = e.draggableTrack,
            r = e.minCount,
            i = e.maxCount;
        return [!0, t, !t && n, r || 0, i]
    }, [e])
}
d(), v(), E();
var ce = M.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = n === void 0 ? `rc-slider` : n,
            i = e.className,
            s = e.style,
            c = e.classNames,
            u = e.styles,
            d = e.id,
            f = e.disabled,
            p = f !== void 0 && f,
            h = e.keyboard,
            g = h === void 0 || h,
            v = e.autoFocus,
            b = e.onFocus,
            S = e.onBlur,
            C = e.min,
            w = C === void 0 ? 0 : C,
            T = e.max,
            E = T === void 0 ? 100 : T,
            O = e.step,
            k = O === void 0 ? 1 : O,
            A = e.value,
            j = e.defaultValue,
            N = e.range,
            F = e.count,
            I = e.onChange,
            L = e.onBeforeChange,
            z = e.onAfterChange,
            B = e.onChangeComplete,
            V = e.allowCross,
            H = V === void 0 || V,
            ne = e.pushable,
            U = ne !== void 0 && ne,
            G = e.reverse,
            ie = e.vertical,
            ae = e.included,
            ce = ae === void 0 || ae,
            le = e.startPoint,
            ue = e.trackStyle,
            de = e.handleStyle,
            fe = e.railStyle,
            pe = e.dotStyle,
            me = e.activeDotStyle,
            he = e.marks,
            ge = e.dots,
            _e = e.handleRender,
            ve = e.activeHandleRender,
            ye = e.track,
            be = e.tabIndex,
            xe = be === void 0 ? 0 : be,
            Se = e.ariaLabelForHandle,
            Ce = e.ariaLabelledByForHandle,
            we = e.ariaRequired,
            Te = e.ariaValueTextFormatterForHandle,
            J = M.useRef(null),
            Ee = M.useRef(null),
            De = M.useMemo(function() {
                return ie ? G ? `ttb` : `btt` : G ? `rtl` : `ltr`
            }, [G, ie]),
            Oe = se(N),
            ke = x(Oe, 5),
            Y = ke[0],
            Ae = ke[1],
            je = ke[2],
            Me = ke[3],
            Ne = ke[4],
            X = M.useMemo(function() {
                return isFinite(w) ? w : 0
            }, [w]),
            Pe = M.useMemo(function() {
                return isFinite(E) ? E : 100
            }, [E]),
            Z = M.useMemo(function() {
                return k !== null && k <= 0 ? 1 : k
            }, [k]),
            Fe = M.useMemo(function() {
                return typeof U == `boolean` ? U ? Z : !1 : U >= 0 && U
            }, [U, Z]),
            Ie = M.useMemo(function() {
                return Object.keys(he || {}).map(function(e) {
                    var t = he[e],
                        n = {
                            value: Number(e)
                        };
                    return t && m(t) === `object` && !M.isValidElement(t) && (`label` in t || `style` in t) ? (n.style = t.style, n.label = t.label) : n.label = t, n
                }).filter(function(e) {
                    var t = e.label;
                    return t || typeof t == `number`
                }).sort(function(e, t) {
                    return e.value - t.value
                })
            }, [he]),
            Le = oe(X, Pe, Z, Ie, H, Fe),
            Re = x(Le, 2),
            ze = Re[0],
            Be = Re[1],
            Ve = ee(j, {
                value: A
            }),
            He = x(Ve, 2),
            Q = He[0],
            Ue = He[1],
            $ = M.useMemo(function() {
                var e = Q == null ? [] : Array.isArray(Q) ? Q : [Q],
                    t = x(e, 1)[0],
                    n = Q === null ? [] : [t === void 0 ? X : t];
                if (Y) {
                    if (n = y(e), F || Q === void 0) {
                        var r = F >= 0 ? F + 1 : 2;
                        for (n = n.slice(0, r); n.length < r;) n.push(n[n.length - 1] ?? X)
                    }
                    n.sort(function(e, t) {
                        return e - t
                    })
                }
                return n.forEach(function(e, t) {
                    n[t] = ze(e)
                }), n
            }, [Q, Y, X, F, ze]),
            We = function(e) {
                return Y ? e : e[0]
            },
            Ge = a(function(e) {
                var t = y(e).sort(function(e, t) {
                    return e - t
                });
                I && !_(t, $, !0) && I(We(t)), Ue(t)
            }),
            Ke = a(function(e) {
                e && J.current.hideHelp();
                var t = We($);
                z == null || z(t), D(!z, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), B == null || B(t)
            }),
            qe = function(e) {
                if (!(p || !Ae || $.length <= Me)) {
                    var t = y($);
                    t.splice(e, 1), L == null || L(We(t)), Ge(t);
                    var n = Math.max(0, e - 1);
                    J.current.hideHelp(), J.current.focus(n)
                }
            },
            Je = q(Ee, De, $, X, Pe, ze, Ge, Ke, Be, Ae, Me),
            Ye = x(Je, 5),
            Xe = Ye[0],
            Ze = Ye[1],
            Qe = Ye[2],
            $e = Ye[3],
            et = Ye[4],
            tt = function(e, t) {
                if (!p) {
                    var n = y($),
                        r = 0,
                        i = 0,
                        a = Pe - X;
                    $.forEach(function(t, n) {
                        var o = Math.abs(e - t);
                        o <= a && (a = o, r = n), t < e && (i = n)
                    });
                    var o = r;
                    Ae && a !== 0 && (!Ne || $.length < Ne) ? (n.splice(i + 1, 0, e), o = i + 1) : n[r] = e, Y && !$.length && F === void 0 && n.push(e);
                    var s = We(n);
                    if (L == null || L(s), Ge(n), t) {
                        var c, l;
                        (c = document.activeElement) == null || (l = c.blur) == null || l.call(c), J.current.focus(o), et(t, o, n)
                    } else z == null || z(s), D(!z, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), B == null || B(s)
                }
            },
            nt = function(e) {
                e.preventDefault();
                var t = Ee.current.getBoundingClientRect(),
                    n = t.width,
                    r = t.height,
                    i = t.left,
                    a = t.top,
                    o = t.bottom,
                    s = t.right,
                    c = e.clientX,
                    l = e.clientY,
                    u;
                switch (De) {
                    case `btt`:
                        u = (o - l) / r;
                        break;
                    case `ttb`:
                        u = (l - a) / r;
                        break;
                    case `rtl`:
                        u = (s - c) / n;
                        break;
                    default:
                        u = (c - i) / n
                }
                tt(ze(X + u * (Pe - X)), e)
            },
            rt = M.useState(null),
            it = x(rt, 2),
            at = it[0],
            ot = it[1],
            st = function(e, t) {
                if (!p) {
                    var n = Be($, e, t);
                    L == null || L(We($)), Ge(n.values), ot(n.value)
                }
            };
        M.useEffect(function() {
            if (at !== null) {
                var e = $.indexOf(at);
                e >= 0 && J.current.focus(e)
            }
            ot(null)
        }, [at]);
        var ct = M.useMemo(function() {
                return je && Z === null ? !1 : je
            }, [je, Z]),
            lt = a(function(e, t) {
                et(e, t), L == null || L(We($))
            }),
            ut = Xe !== -1;
        M.useEffect(function() {
            if (!ut) {
                var e = $.lastIndexOf(Ze);
                J.current.focus(e)
            }
        }, [ut]);
        var dt = M.useMemo(function() {
                return y($e).sort(function(e, t) {
                    return e - t
                })
            }, [$e]),
            ft = M.useMemo(function() {
                return Y ? [dt[0], dt[dt.length - 1]] : [X, dt[0]]
            }, [dt, Y, X]),
            pt = x(ft, 2),
            mt = pt[0],
            ht = pt[1];
        M.useImperativeHandle(t, function() {
            return {
                focus: function() {
                    J.current.focus(0)
                },
                blur: function() {
                    var e, t = document.activeElement;
                    (e = Ee.current) != null && e.contains(t) && (t == null || t.blur())
                }
            }
        }), M.useEffect(function() {
            v && J.current.focus(0)
        }, []);
        var gt = M.useMemo(function() {
            return {
                min: X,
                max: Pe,
                direction: De,
                disabled: p,
                keyboard: g,
                step: Z,
                included: ce,
                includedStart: mt,
                includedEnd: ht,
                range: Y,
                tabIndex: xe,
                ariaLabelForHandle: Se,
                ariaLabelledByForHandle: Ce,
                ariaRequired: we,
                ariaValueTextFormatterForHandle: Te,
                styles: u || {},
                classNames: c || {}
            }
        }, [X, Pe, De, p, g, Z, ce, mt, ht, Y, xe, Se, Ce, we, Te, u, c]);
        return M.createElement(R.Provider, {
            value: gt
        }, M.createElement(`div`, {
            ref: Ee,
            className: (0, P.default)(r, i, l(l(l(l({}, `${r}-disabled`, p), `${r}-vertical`, ie), `${r}-horizontal`, !ie), `${r}-with-marks`, Ie.length)),
            style: s,
            onMouseDown: nt,
            id: d
        }, M.createElement(`div`, {
            className: (0, P.default)(`${r}-rail`, c == null ? void 0 : c.rail),
            style: o(o({}, fe), u == null ? void 0 : u.rail)
        }), ye !== !1 && M.createElement(K, {
            prefixCls: r,
            style: ue,
            values: $,
            startPoint: le,
            onStartMove: ct ? lt : void 0
        }), M.createElement(W, {
            prefixCls: r,
            marks: Ie,
            dots: ge,
            style: pe,
            activeStyle: me
        }), M.createElement(te, {
            ref: J,
            prefixCls: r,
            style: de,
            values: $e,
            draggingIndex: Xe,
            draggingDelete: Qe,
            onStartMove: lt,
            onOffsetChange: st,
            onFocus: b,
            onBlur: S,
            handleRender: _e,
            activeHandleRender: ve,
            onChangeComplete: Ke,
            onDelete: Ae ? qe : void 0
        }), M.createElement(re, {
            prefixCls: r,
            marks: Ie,
            onClick: tt
        })))
    }),
    le = (0, M.createContext)({}),
    ue = M.forwardRef((e, t) => {
        let {
            open: n,
            draggingDelete: r,
            value: i
        } = e, a = (0, M.useRef)(null), o = n && !r, s = (0, M.useRef)(null);

        function c() {
            k.cancel(s.current), s.current = null
        }

        function l() {
            s.current = k(() => {
                var e;
                (e = a.current) == null || e.forceAlign(), s.current = null
            })
        }
        return M.useEffect(() => (o ? l() : c(), c), [o, e.title, i]), M.createElement(j, Object.assign({
            ref: f(a, t)
        }, e, {
            open: o
        }))
    }),
    de = e => {
        let {
            componentCls: t,
            antCls: n,
            controlSize: r,
            dotSize: i,
            marginFull: a,
            marginPart: o,
            colorFillContentHover: s,
            handleColorDisabled: c,
            calc: l,
            handleSize: u,
            handleSizeHover: d,
            handleActiveColor: f,
            handleActiveOutlineColor: p,
            handleLineWidth: m,
            handleLineWidthHover: g,
            motionDurationMid: _
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, S(e)), {
                position: `relative`,
                height: r,
                margin: `${h(o)} ${h(a)}`,
                padding: 0,
                cursor: `pointer`,
                touchAction: `none`,
                "&-vertical": {
                    margin: `${h(a)} ${h(o)}`
                },
                [`${t}-rail`]: {
                    position: `absolute`,
                    backgroundColor: e.railBg,
                    borderRadius: e.borderRadiusXS,
                    transition: `background-color ${_}`
                },
                [`${t}-track,${t}-tracks`]: {
                    position: `absolute`,
                    transition: `background-color ${_}`
                },
                [`${t}-track`]: {
                    backgroundColor: e.trackBg,
                    borderRadius: e.borderRadiusXS
                },
                [`${t}-track-draggable`]: {
                    boxSizing: `content-box`,
                    backgroundClip: `content-box`,
                    border: `solid rgba(0,0,0,0)`
                },
                "&:hover": {
                    [`${t}-rail`]: {
                        backgroundColor: e.railHoverBg
                    },
                    [`${t}-track`]: {
                        backgroundColor: e.trackHoverBg
                    },
                    [`${t}-dot`]: {
                        borderColor: s
                    },
                    [`${t}-handle::after`]: {
                        boxShadow: `0 0 0 ${h(m)} ${e.colorPrimaryBorderHover}`
                    },
                    [`${t}-dot-active`]: {
                        borderColor: e.dotActiveBorderColor
                    }
                },
                [`${t}-handle`]: {
                    position: `absolute`,
                    width: u,
                    height: u,
                    outline: `none`,
                    userSelect: `none`,
                    "&-dragging-delete": {
                        opacity: 0
                    },
                    "&::before": {
                        content: `""`,
                        position: `absolute`,
                        insetInlineStart: l(m).mul(-1).equal(),
                        insetBlockStart: l(m).mul(-1).equal(),
                        width: l(u).add(l(m).mul(2)).equal(),
                        height: l(u).add(l(m).mul(2)).equal(),
                        backgroundColor: `transparent`
                    },
                    "&::after": {
                        content: `""`,
                        position: `absolute`,
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: u,
                        height: u,
                        backgroundColor: e.colorBgElevated,
                        boxShadow: `0 0 0 ${h(m)} ${e.handleColor}`,
                        outline: `0px solid transparent`,
                        borderRadius: `50%`,
                        cursor: `pointer`,
                        transition: `
            inset-inline-start ${_},
            inset-block-start ${_},
            width ${_},
            height ${_},
            box-shadow ${_},
            outline ${_}
          `
                    },
                    "&:hover, &:active, &:focus": {
                        "&::before": {
                            insetInlineStart: l(d).sub(u).div(2).add(g).mul(-1).equal(),
                            insetBlockStart: l(d).sub(u).div(2).add(g).mul(-1).equal(),
                            width: l(d).add(l(g).mul(2)).equal(),
                            height: l(d).add(l(g).mul(2)).equal()
                        },
                        "&::after": {
                            boxShadow: `0 0 0 ${h(g)} ${f}`,
                            outline: `6px solid ${p}`,
                            width: d,
                            height: d,
                            insetInlineStart: e.calc(u).sub(d).div(2).equal(),
                            insetBlockStart: e.calc(u).sub(d).div(2).equal()
                        }
                    }
                },
                [`&-lock ${t}-handle`]: {
                    "&::before, &::after": {
                        transition: `none`
                    }
                },
                [`${t}-mark`]: {
                    position: `absolute`,
                    fontSize: e.fontSize
                },
                [`${t}-mark-text`]: {
                    position: `absolute`,
                    display: `inline-block`,
                    color: e.colorTextDescription,
                    textAlign: `center`,
                    wordBreak: `keep-all`,
                    cursor: `pointer`,
                    userSelect: `none`,
                    "&-active": {
                        color: e.colorText
                    }
                },
                [`${t}-step`]: {
                    position: `absolute`,
                    background: `transparent`,
                    pointerEvents: `none`
                },
                [`${t}-dot`]: {
                    position: `absolute`,
                    width: i,
                    height: i,
                    backgroundColor: e.colorBgElevated,
                    border: `${h(m)} solid ${e.dotBorderColor}`,
                    borderRadius: `50%`,
                    cursor: `pointer`,
                    transition: `border-color ${e.motionDurationSlow}`,
                    pointerEvents: `auto`,
                    "&-active": {
                        borderColor: e.dotActiveBorderColor
                    }
                },
                [`&${t}-disabled`]: {
                    cursor: `not-allowed`,
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
                        boxShadow: `none`,
                        cursor: `not-allowed`
                    },
                    [`${t}-handle::after`]: {
                        backgroundColor: e.colorBgElevated,
                        cursor: `not-allowed`,
                        width: u,
                        height: u,
                        boxShadow: `0 0 0 ${h(m)} ${c}`,
                        insetInlineStart: 0,
                        insetBlockStart: 0
                    },
                    [`
          ${t}-mark-text,
          ${t}-dot
        `]: {
                        cursor: `not-allowed !important`
                    }
                },
                [`&-tooltip ${n}-tooltip-inner`]: {
                    minWidth: `unset`
                }
            })
        }
    },
    fe = (e, t) => {
        let {
            componentCls: n,
            railSize: r,
            handleSize: i,
            dotSize: a,
            marginFull: o,
            calc: s
        } = e, c = t ? `paddingBlock` : `paddingInline`, l = t ? `width` : `height`, u = t ? `height` : `width`, d = t ? `insetBlockStart` : `insetInlineStart`, f = t ? `top` : `insetInlineStart`, p = s(r).mul(3).sub(i).div(2).equal(), m = s(i).sub(r).div(2).equal(), g = t ? {
            borderWidth: `${h(m)} 0`,
            transform: `translateY(${h(s(m).mul(-1).equal())})`
        } : {
            borderWidth: `0 ${h(m)}`,
            transform: `translateX(${h(e.calc(m).mul(-1).equal())})`
        };
        return {
            [c]: r,
            [u]: s(r).mul(3).equal(),
            [`${n}-rail`]: {
                [l]: `100%`,
                [u]: r
            },
            [`${n}-track,${n}-tracks`]: {
                [u]: r
            },
            [`${n}-track-draggable`]: Object.assign({}, g),
            [`${n}-handle`]: {
                [d]: p
            },
            [`${n}-mark`]: {
                insetInlineStart: 0,
                top: 0,
                [f]: s(r).mul(3).add(t ? 0 : o).equal(),
                [l]: `100%`
            },
            [`${n}-step`]: {
                insetInlineStart: 0,
                top: 0,
                [f]: r,
                [l]: `100%`,
                [u]: r
            },
            [`${n}-dot`]: {
                position: `absolute`,
                [d]: s(r).sub(a).div(2).equal()
            }
        }
    },
    pe = e => {
        let {
            componentCls: t,
            marginPartWithMark: n
        } = e;
        return {
            [`${t}-horizontal`]: Object.assign(Object.assign({}, fe(e, !0)), {
                [`&${t}-with-marks`]: {
                    marginBottom: n
                }
            })
        }
    },
    me = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-vertical`]: Object.assign(Object.assign({}, fe(e, !1)), {
                height: `100%`
            })
        }
    },
    he = w(`Slider`, e => {
        let t = g(e, {
            marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
            marginFull: e.calc(e.controlSize).div(2).equal(),
            marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
        });
        return [de(t), pe(t), me(t)]
    }, e => {
        let t = e.controlHeightLG / 4,
            n = e.controlHeightSM / 2,
            r = e.lineWidth + 1,
            i = e.lineWidth + 1.5,
            a = e.colorPrimary,
            o = new s(a).setA(.2).toRgbString();
        return {
            controlSize: t,
            railSize: 4,
            handleSize: t,
            handleSizeHover: n,
            dotSize: 8,
            handleLineWidth: r,
            handleLineWidthHover: i,
            railBg: e.colorFillTertiary,
            railHoverBg: e.colorFillSecondary,
            trackBg: e.colorPrimaryBorder,
            trackHoverBg: e.colorPrimaryBorderHover,
            handleColor: e.colorPrimaryBorder,
            handleActiveColor: a,
            handleActiveOutlineColor: o,
            handleColorDisabled: new s(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),
            dotBorderColor: e.colorBorderSecondary,
            dotActiveBorderColor: e.colorPrimaryBorder,
            trackBgDisabled: e.colorBgContainerDisabled
        }
    });

function ge() {
    let [e, t] = M.useState(!1), n = M.useRef(null), r = () => {
        k.cancel(n.current)
    };
    return M.useEffect(() => r, []), [e, e => {
        r(), e ? t(e) : n.current = k(() => {
            t(e)
        })
    }]
}
var _e = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

function ve(e, t) {
    return e || e === null ? e : t || t === null ? t : e => typeof e == `number` ? e.toString() : ``
}
var ye = M.forwardRef((e, t) => {
    let {
        prefixCls: n,
        range: r,
        className: i,
        rootClassName: a,
        style: o,
        disabled: s,
        tooltipPrefixCls: c,
        tipFormatter: l,
        tooltipVisible: u,
        getTooltipPopupContainer: d,
        tooltipPlacement: f,
        tooltip: p = {},
        onChangeComplete: m,
        classNames: h,
        styles: g
    } = e, _ = _e(e, [`prefixCls`, `range`, `className`, `rootClassName`, `style`, `disabled`, `tooltipPrefixCls`, `tipFormatter`, `tooltipVisible`, `getTooltipPopupContainer`, `tooltipPlacement`, `tooltip`, `onChangeComplete`, `classNames`, `styles`]), {
        vertical: v
    } = e, {
        getPrefixCls: y,
        direction: x,
        className: S,
        style: C,
        classNames: w,
        styles: T,
        getPopupContainer: E
    } = b(`slider`), ee = M.useContext(O), D = s ?? ee, {
        handleRender: A,
        direction: j
    } = M.useContext(le), N = (j || x) === `rtl`, [F, I] = ge(), [L, R] = ge(), z = Object.assign({}, p), {
        open: B,
        placement: V,
        getPopupContainer: H,
        prefixCls: te,
        formatter: ne
    } = z, re = B ?? u, U = (F || L) && re !== !1, W = ve(ne, l), [G, K] = ge(), ie = e => {
        m == null || m(e), K(!1)
    }, ae = (e, t) => e || (t ? N ? `left` : `right` : `top`), q = y(`slider`, n), [oe, se, de] = he(q), fe = (0, P.default)(i, S, w.root, h == null ? void 0 : h.root, a, {
        [`${q}-rtl`]: N,
        [`${q}-lock`]: G
    }, se, de);
    N && !_.vertical && (_.reverse = !_.reverse), M.useEffect(() => {
        let e = () => {
            k(() => {
                R(!1)
            }, 1)
        };
        return document.addEventListener(`mouseup`, e), () => {
            document.removeEventListener(`mouseup`, e)
        }
    }, []);
    let pe = r && !re,
        me = A || ((e, t) => {
            let {
                index: n
            } = t, r = e.props;

            function i(e, t, n) {
                var i, a, o, s;
                n && ((a = (i = _)[e]) == null || a.call(i, t)), (s = (o = r)[e]) == null || s.call(o, t)
            }
            let a = Object.assign(Object.assign({}, r), {
                    onMouseEnter: e => {
                        I(!0), i(`onMouseEnter`, e)
                    },
                    onMouseLeave: e => {
                        I(!1), i(`onMouseLeave`, e)
                    },
                    onMouseDown: e => {
                        R(!0), K(!0), i(`onMouseDown`, e)
                    },
                    onFocus: e => {
                        var t;
                        R(!0), (t = _.onFocus) == null || t.call(_, e), i(`onFocus`, e, !0)
                    },
                    onBlur: e => {
                        var t;
                        R(!1), (t = _.onBlur) == null || t.call(_, e), i(`onBlur`, e, !0)
                    }
                }),
                o = M.cloneElement(e, a),
                s = (!!re || U) && W !== null;
            return pe ? o : M.createElement(ue, Object.assign({}, z, {
                prefixCls: y(`tooltip`, te ?? c),
                title: W ? W(t.value) : ``,
                value: t.value,
                open: s,
                placement: ae(V ?? f, v),
                key: n,
                classNames: {
                    root: `${q}-tooltip`
                },
                getPopupContainer: H || d || E
            }), o)
        }),
        ye = pe ? (e, t) => {
            let n = M.cloneElement(e, {
                style: Object.assign(Object.assign({}, e.props.style), {
                    visibility: `hidden`
                })
            });
            return M.createElement(ue, Object.assign({}, z, {
                prefixCls: y(`tooltip`, te ?? c),
                title: W ? W(t.value) : ``,
                open: W !== null && U,
                placement: ae(V ?? f, v),
                key: `tooltip`,
                classNames: {
                    root: `${q}-tooltip`
                },
                getPopupContainer: H || d || E,
                draggingDelete: t.draggingDelete
            }), n)
        } : void 0,
        be = Object.assign(Object.assign(Object.assign(Object.assign({}, T.root), C), g == null ? void 0 : g.root), o),
        xe = Object.assign(Object.assign({}, T.tracks), g == null ? void 0 : g.tracks),
        Se = (0, P.default)(w.tracks, h == null ? void 0 : h.tracks);
    return oe(M.createElement(ce, Object.assign({}, _, {
        classNames: Object.assign({
            handle: (0, P.default)(w.handle, h == null ? void 0 : h.handle),
            rail: (0, P.default)(w.rail, h == null ? void 0 : h.rail),
            track: (0, P.default)(w.track, h == null ? void 0 : h.track)
        }, Se ? {
            tracks: Se
        } : {}),
        styles: Object.assign({
            handle: Object.assign(Object.assign({}, T.handle), g == null ? void 0 : g.handle),
            rail: Object.assign(Object.assign({}, T.rail), g == null ? void 0 : g.rail),
            track: Object.assign(Object.assign({}, T.track), g == null ? void 0 : g.track)
        }, Object.keys(xe).length ? {
            tracks: xe
        } : {}),
        step: _.step,
        range: r,
        className: fe,
        style: be,
        disabled: D,
        ref: t,
        prefixCls: q,
        handleRender: me,
        activeHandleRender: ye,
        onChangeComplete: ie
    })))
});
export {
    ye as t
};