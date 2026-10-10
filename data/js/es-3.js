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
    J as s,
    Ut as c,
    lt as l,
    nt as u,
    tt as d,
    ut as f
} from "./Compact.js";
import {
    _ as p,
    v as m
} from "./color.js";
import {
    t as ee
} from "./es-2.js";
import {
    S as h
} from "./ContextIsolator.js";
var g = new p(`antSlideUpIn`, {
        "0%": {
            transform: `scaleY(0.8)`,
            transformOrigin: `0% 0%`,
            opacity: 0
        },
        "100%": {
            transform: `scaleY(1)`,
            transformOrigin: `0% 0%`,
            opacity: 1
        }
    }),
    _ = new p(`antSlideUpOut`, {
        "0%": {
            transform: `scaleY(1)`,
            transformOrigin: `0% 0%`,
            opacity: 1
        },
        "100%": {
            transform: `scaleY(0.8)`,
            transformOrigin: `0% 0%`,
            opacity: 0
        }
    }),
    v = new p(`antSlideDownIn`, {
        "0%": {
            transform: `scaleY(0.8)`,
            transformOrigin: `100% 100%`,
            opacity: 0
        },
        "100%": {
            transform: `scaleY(1)`,
            transformOrigin: `100% 100%`,
            opacity: 1
        }
    }),
    y = new p(`antSlideDownOut`, {
        "0%": {
            transform: `scaleY(1)`,
            transformOrigin: `100% 100%`,
            opacity: 1
        },
        "100%": {
            transform: `scaleY(0.8)`,
            transformOrigin: `100% 100%`,
            opacity: 0
        }
    }),
    b = new p(`antSlideLeftIn`, {
        "0%": {
            transform: `scaleX(0.8)`,
            transformOrigin: `0% 0%`,
            opacity: 0
        },
        "100%": {
            transform: `scaleX(1)`,
            transformOrigin: `0% 0%`,
            opacity: 1
        }
    }),
    x = new p(`antSlideLeftOut`, {
        "0%": {
            transform: `scaleX(1)`,
            transformOrigin: `0% 0%`,
            opacity: 1
        },
        "100%": {
            transform: `scaleX(0.8)`,
            transformOrigin: `0% 0%`,
            opacity: 0
        }
    }),
    S = new p(`antSlideRightIn`, {
        "0%": {
            transform: `scaleX(0.8)`,
            transformOrigin: `100% 0%`,
            opacity: 0
        },
        "100%": {
            transform: `scaleX(1)`,
            transformOrigin: `100% 0%`,
            opacity: 1
        }
    }),
    C = new p(`antSlideRightOut`, {
        "0%": {
            transform: `scaleX(1)`,
            transformOrigin: `100% 0%`,
            opacity: 1
        },
        "100%": {
            transform: `scaleX(0.8)`,
            transformOrigin: `100% 0%`,
            opacity: 0
        }
    }),
    w = {
        "slide-up": {
            inKeyframes: g,
            outKeyframes: _
        },
        "slide-down": {
            inKeyframes: v,
            outKeyframes: y
        },
        "slide-left": {
            inKeyframes: b,
            outKeyframes: x
        },
        "slide-right": {
            inKeyframes: S,
            outKeyframes: C
        }
    },
    T = (e, t) => {
        let {
            antCls: n
        } = e, r = `${n}-${t}`, {
            inKeyframes: i,
            outKeyframes: a
        } = w[t];
        return [h(r, i, a, e.motionDurationMid), {
            [`
      ${r}-enter,
      ${r}-appear
    `]: {
                transform: `scale(0)`,
                transformOrigin: `0% 0%`,
                opacity: 0,
                animationTimingFunction: e.motionEaseOutQuint,
                "&-prepare": {
                    transform: `scale(1)`
                }
            },
            [`${r}-leave`]: {
                animationTimingFunction: e.motionEaseInQuint
            }
        }]
    };
f(), n(), u();
var E = e(t()),
    D = e(c()),
    O = [`prefixCls`, `invalidate`, `item`, `renderItem`, `responsive`, `responsiveDisabled`, `registerSize`, `itemKey`, `className`, `style`, `children`, `display`, `order`, `component`],
    k = void 0;

function A(e, t) {
    var n = e.prefixCls,
        r = e.invalidate,
        a = e.item,
        s = e.renderItem,
        c = e.responsive,
        l = e.responsiveDisabled,
        u = e.registerSize,
        f = e.itemKey,
        p = e.className,
        m = e.style,
        h = e.children,
        g = e.display,
        _ = e.order,
        v = e.component,
        y = v === void 0 ? `div` : v,
        b = d(e, O),
        x = c && !g;

    function S(e) {
        u(f, e)
    }
    E.useEffect(function() {
        return function() {
            S(null)
        }
    }, []);
    var C = s && a !== k ? s(a, {
            index: _
        }) : h,
        w;
    r || (w = {
        opacity: +!x,
        height: x ? 0 : k,
        overflowY: x ? `hidden` : k,
        order: c ? _ : k,
        pointerEvents: x ? `none` : k,
        position: x ? `absolute` : k
    });
    var T = {};
    x && (T[`aria-hidden`] = !0);
    var A = E.createElement(y, i({
        className: (0, D.default)(!r && n, p),
        style: o(o({}, w), m)
    }, T, b, {
        ref: t
    }), C);
    return c && (A = E.createElement(ee, {
        onResize: function(e) {
            var t = e.offsetWidth;
            S(t)
        },
        disabled: l
    }, A)), A
}
var j = E.forwardRef(A);
j.displayName = `Item`;
var M = e(r());

function te(e) {
    if (typeof MessageChannel > `u`) m(e);
    else {
        var t = new MessageChannel;
        t.port1.onmessage = function() {
            return e()
        }, t.port2.postMessage(void 0)
    }
}

function ne() {
    var e = E.useRef(null);
    return function(t) {
        e.current || (e.current = [], te(function() {
            (0, M.unstable_batchedUpdates)(function() {
                e.current.forEach(function(e) {
                    e()
                }), e.current = null
            })
        })), e.current.push(t)
    }
}

function N(e, t) {
    var n = E.useState(t),
        r = l(n, 2),
        i = r[0],
        o = r[1];
    return [i, a(function(t) {
        e(function() {
            o(t)
        })
    })]
}
var P = E.createContext(null);
n(), u();
var F = [`component`],
    I = [`className`],
    re = [`className`],
    L = E.forwardRef(function(e, t) {
        var n = E.useContext(P);
        if (!n) {
            var r = e.component,
                a = r === void 0 ? `div` : r,
                o = d(e, F);
            return E.createElement(a, i({}, o, {
                ref: t
            }))
        }
        var s = n.className,
            c = d(n, I),
            l = e.className,
            u = d(e, re);
        return E.createElement(P.Provider, {
            value: null
        }, E.createElement(j, i({
            ref: t,
            className: (0, D.default)(s, l)
        }, c, u)))
    });
L.displayName = `RawItem`, n(), f(), u();
var ie = [`prefixCls`, `data`, `renderItem`, `renderRawItem`, `itemKey`, `itemWidth`, `ssr`, `style`, `className`, `maxCount`, `renderRest`, `renderRawRest`, `suffix`, `component`, `itemComponent`, `onVisibleChange`],
    ae = `responsive`,
    oe = `invalidate`;

function se(e) {
    return `+ ${e.length} ...`
}

function ce(e, t) {
    var n = e.prefixCls,
        r = n === void 0 ? `rc-overflow` : n,
        a = e.data,
        c = a === void 0 ? [] : a,
        u = e.renderItem,
        f = e.renderRawItem,
        p = e.itemKey,
        m = e.itemWidth,
        h = m === void 0 ? 10 : m,
        g = e.ssr,
        _ = e.style,
        v = e.className,
        y = e.maxCount,
        b = e.renderRest,
        x = e.renderRawRest,
        S = e.suffix,
        C = e.component,
        w = C === void 0 ? `div` : C,
        T = e.itemComponent,
        O = e.onVisibleChange,
        k = d(e, ie),
        A = g === `full`,
        M = ne(),
        te = N(M, null),
        F = l(te, 2),
        I = F[0],
        re = F[1],
        L = I || 0,
        ce = N(M, new Map),
        R = l(ce, 2),
        z = R[0],
        le = R[1],
        ue = N(M, 0),
        de = l(ue, 2),
        fe = de[0],
        pe = de[1],
        me = N(M, 0),
        he = l(me, 2),
        B = he[0],
        ge = he[1],
        _e = N(M, 0),
        ve = l(_e, 2),
        V = ve[0],
        ye = ve[1],
        be = (0, E.useState)(null),
        xe = l(be, 2),
        H = xe[0],
        Se = xe[1],
        Ce = (0, E.useState)(null),
        we = l(Ce, 2),
        U = we[0],
        Te = we[1],
        W = E.useMemo(function() {
            return U === null && A ? 2 ** 53 - 1 : U || 0
        }, [U, I]),
        Ee = (0, E.useState)(!1),
        De = l(Ee, 2),
        Oe = De[0],
        ke = De[1],
        G = `${r}-item`,
        Ae = Math.max(fe, B),
        K = y === ae,
        q = c.length && K,
        je = y === oe,
        Me = q || typeof y == `number` && c.length > y,
        J = (0, E.useMemo)(function() {
            var e = c;
            return q ? e = I === null && A ? c : c.slice(0, Math.min(c.length, L / h)) : typeof y == `number` && (e = c.slice(0, y)), e
        }, [c, h, I, y, q]),
        Y = (0, E.useMemo)(function() {
            return q ? c.slice(W + 1) : c.slice(J.length)
        }, [c, J, q, W]),
        X = (0, E.useCallback)(function(e, t) {
            return typeof p == `function` ? p(e) : (p && (e == null ? void 0 : e[p])) ?? t
        }, [p]),
        Ne = (0, E.useCallback)(u || function(e) {
            return e
        }, [u]);

    function Z(e, t, n) {
        (U !== e || t !== void 0 && t !== H) && (Te(e), n || (ke(e < c.length - 1), O == null || O(e)), t !== void 0 && Se(t))
    }

    function Pe(e, t) {
        re(t.clientWidth)
    }

    function Fe(e, t) {
        le(function(n) {
            var r = new Map(n);
            return t === null ? r.delete(e) : r.set(e, t), r
        })
    }

    function Ie(e, t) {
        ge(t), pe(B)
    }

    function Le(e, t) {
        ye(t)
    }

    function Q(e) {
        return z.get(X(J[e], e))
    }
    s(function() {
        if (L && typeof Ae == `number` && J) {
            var e = V,
                t = J.length,
                n = t - 1;
            if (!t) {
                Z(0, null);
                return
            }
            for (var r = 0; r < t; r += 1) {
                var i = Q(r);
                if (A && (i = i || 0), i === void 0) {
                    Z(r - 1, void 0, !0);
                    break
                }
                if (e += i, n === 0 && e <= L || r === n - 1 && e + Q(n) <= L) {
                    Z(n, null);
                    break
                }
                if (e + Ae > L) {
                    Z(r - 1, e - i - V + B);
                    break
                }
            }
            S && Q(0) + V > L && Se(null)
        }
    }, [L, z, B, V, X, J]);
    var Re = Oe && !!Y.length,
        ze = {};
    H !== null && q && (ze = {
        position: `absolute`,
        left: H,
        top: 0
    });
    var $ = {
            prefixCls: G,
            responsive: q,
            component: T,
            invalidate: je
        },
        Be = f ? function(e, t) {
            var n = X(e, t);
            return E.createElement(P.Provider, {
                key: n,
                value: o(o({}, $), {}, {
                    order: t,
                    item: e,
                    itemKey: n,
                    registerSize: Fe,
                    display: t <= W
                })
            }, f(e, t))
        } : function(e, t) {
            var n = X(e, t);
            return E.createElement(j, i({}, $, {
                order: t,
                key: n,
                item: e,
                renderItem: Ne,
                itemKey: n,
                registerSize: Fe,
                display: t <= W
            }))
        },
        Ve = {
            order: Re ? W : 2 ** 53 - 1,
            className: `${G}-rest`,
            registerSize: Ie,
            display: Re
        },
        He = b || se,
        Ue = x ? E.createElement(P.Provider, {
            value: o(o({}, $), Ve)
        }, x(Y)) : E.createElement(j, i({}, $, Ve), typeof He == `function` ? He(Y) : He),
        We = E.createElement(w, i({
            className: (0, D.default)(!je && r, v),
            style: _,
            ref: t
        }, k), J.map(Be), Me ? Ue : null, S && E.createElement(j, i({}, $, {
            responsive: K,
            responsiveDisabled: !q,
            order: W,
            className: `${G}-suffix`,
            registerSize: Le,
            display: !0,
            style: ze
        }), S));
    return K ? E.createElement(ee, {
        onResize: Pe,
        disabled: !q
    }, We) : We
}
var R = E.forwardRef(ce);
R.displayName = `Overflow`, R.Item = L, R.RESPONSIVE = ae, R.INVALIDATE = oe;
var z = R;
export {
    g as a, y as i, T as n, _ as o, v as r, z as t
};