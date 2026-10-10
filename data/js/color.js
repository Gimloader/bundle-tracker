import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    l as r,
    n as i,
    s as a,
    t as o
} from "./assertThisInitialized.js";
import {
    At as s,
    C as c,
    Ct as l,
    Dt as u,
    Et as d,
    Ft as f,
    H as p,
    Ht as m,
    It as h,
    Lt as g,
    Mt as ee,
    S as _,
    Tt as v,
    Ut as te,
    Vt as y,
    ct as b,
    kt as ne,
    lt as x,
    nt as S,
    tt as C,
    ut as w,
    wt as T,
    xt as E
} from "./Compact.js";
var re = e(te());
g(), m();
var D = e(t()),
    O = e(r());

function k(e) {
    return e instanceof HTMLElement || e instanceof SVGElement
}

function A(e) {
    return e && y(e) === `object` && k(e.nativeElement) ? e.nativeElement : k(e) ? e : null
}

function ie(e) {
    var t = A(e);
    if (t) return t;
    if (e instanceof D.Component) {
        var n;
        return (n = O.findDOMNode) == null ? void 0 : n.call(O.default, e)
    }
    return null
}
u(), v();
var j = function(e) {
        return +setTimeout(e, 16)
    },
    M = function(e) {
        return clearTimeout(e)
    };
typeof window < `u` && `requestAnimationFrame` in window && (j = function(e) {
    return window.requestAnimationFrame(e)
}, M = function(e) {
    return window.cancelAnimationFrame(e)
});
var N = 0,
    ae = new Map;

function oe(e) {
    ae.delete(e)
}
var P = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    N += 1;
    var n = N;

    function r(t) {
        if (t === 0) oe(n), e();
        else {
            var i = j(function() {
                r(t - 1)
            });
            ae.set(n, i)
        }
    }
    return r(t), n
};
P.cancel = function(e) {
    var t = ae.get(e);
    return oe(e), M(t)
};
var se = function() {
        function e(t, n) {
            d(this, e), h(this, `name`, void 0), h(this, `style`, void 0), h(this, `_keyframe`, !0), this.name = t, this.style = n
        }
        return T(e, [{
            key: `getName`,
            value: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``;
                return e ? `${e}-${this.name}` : this.name
            }
        }]), e
    }(),
    F = D.createContext(!1),
    I = ({
        children: e,
        disabled: t
    }) => {
        let n = D.useContext(F);
        return D.createElement(F.Provider, {
            value: t ?? n
        }, e)
    },
    L = [`blue`, `purple`, `cyan`, `green`, `magenta`, `pink`, `red`, `orange`, `yellow`, `volcano`, `geekblue`, `lime`, `gold`];
w(), S();
var R = [`children`],
    z = D.createContext({});

function ce(e) {
    var t = e.children,
        n = C(e, R);
    return D.createElement(z.Provider, {
        value: n
    }, t)
}
u(), v();
var le = function(e) {
    l(n, e);
    var t = E(n);

    function n() {
        return d(this, n), t.apply(this, arguments)
    }
    return T(n, [{
        key: `render`,
        value: function() {
            return this.props.children
        }
    }]), n
}(D.Component);

function ue(e) {
    var t = D.useReducer(function(e) {
            return e + 1
        }, 0),
        n = x(t, 2)[1],
        r = D.useRef(e);
    return [c(function() {
        return r.current
    }), c(function(e) {
        r.current = typeof e == `function` ? e(r.current) : e, n()
    })]
}
var B = `none`,
    de = `appear`,
    fe = `enter`,
    pe = `leave`,
    me = `none`,
    V = `prepare`,
    H = `start`,
    U = `active`,
    he = `prepared`;
m();

function W(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit${e}`] = `webkit${t}`, n[`Moz${e}`] = `moz${t}`, n[`ms${e}`] = `MS${t}`, n[`O${e}`] = `o${t.toLowerCase()}`, n
}

function G(e, t) {
    var n = {
        animationend: W(`Animation`, `AnimationEnd`),
        transitionend: W(`Transition`, `TransitionEnd`)
    };
    return e && (`AnimationEvent` in t || delete n.animationend.animation, `TransitionEvent` in t || delete n.transitionend.transition), n
}
var ge = G(b(), typeof window < `u` ? window : {}),
    K = {};
b() && (K = document.createElement(`div`).style);
var q = {};

function J(e) {
    if (q[e]) return q[e];
    var t = ge[e];
    if (t)
        for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
            var a = n[i];
            if (Object.prototype.hasOwnProperty.call(t, a) && a in K) return q[e] = t[a], q[e]
        }
    return ``
}
var Y = J(`animationend`),
    X = J(`transitionend`),
    Z = !!(Y && X),
    _e = Y || `animationend`,
    ve = X || `transitionend`;

function ye(e, t) {
    return e ? y(e) === `object` ? e[t.replace(/-\w/g, function(e) {
        return e[1].toUpperCase()
    })] : `${e}-${t}` : null
}
var be = (function(e) {
        var t = (0, D.useRef)();

        function n(t) {
            t && (t.removeEventListener(ve, e), t.removeEventListener(_e, e))
        }

        function r(r) {
            t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(ve, e), r.addEventListener(_e, e), t.current = r)
        }
        return D.useEffect(function() {
            return function() {
                n(t.current)
            }
        }, []), [r, n]
    }),
    xe = b() ? D.useLayoutEffect : D.useEffect,
    Se = (function() {
        var e = D.useRef(null);

        function t() {
            P.cancel(e.current)
        }

        function n(r) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
            t();
            var a = P(function() {
                i <= 1 ? r({
                    isCanceled: function() {
                        return a !== e.current
                    }
                }) : n(r, i - 1)
            });
            e.current = a
        }
        return D.useEffect(function() {
            return function() {
                t()
            }
        }, []), [n, t]
    });
w();
var Ce = [V, H, U, `end`],
    we = [V, he];

function Te(e) {
    return e === `active` || e === `end`
}
var Ee = (function(e, t, n) {
    var r = _(me),
        i = x(r, 2),
        a = i[0],
        o = i[1],
        s = Se(),
        c = x(s, 2),
        l = c[0],
        u = c[1];

    function d() {
        o(V, !0)
    }
    var f = t ? we : Ce;
    return xe(function() {
        if (a !== `none` && a !== `end`) {
            var e = f[f.indexOf(a) + 1],
                t = n(a);
            t === !1 ? o(e, !0) : e && l(function(n) {
                function r() {
                    n.isCanceled() || o(e, !0)
                }
                t === !0 ? r() : Promise.resolve(t).then(r)
            })
        }
    }, [e, a]), D.useEffect(function() {
        return function() {
            u()
        }
    }, []), [d, a]
});
g(), w();

function De(e, t, n, r) {
    var i = r.motionEnter,
        a = i === void 0 || i,
        o = r.motionAppear,
        s = o === void 0 || o,
        l = r.motionLeave,
        u = l === void 0 || l,
        d = r.motionDeadline,
        p = r.motionLeaveImmediately,
        m = r.onAppearPrepare,
        g = r.onEnterPrepare,
        ee = r.onLeavePrepare,
        v = r.onAppearStart,
        te = r.onEnterStart,
        y = r.onLeaveStart,
        b = r.onAppearActive,
        ne = r.onEnterActive,
        S = r.onLeaveActive,
        C = r.onAppearEnd,
        w = r.onEnterEnd,
        T = r.onLeaveEnd,
        E = r.onVisibleChanged,
        re = _(),
        O = x(re, 2),
        k = O[0],
        A = O[1],
        ie = ue(B),
        j = x(ie, 2),
        M = j[0],
        N = j[1],
        ae = _(null),
        oe = x(ae, 2),
        P = oe[0],
        se = oe[1],
        F = M(),
        I = (0, D.useRef)(!1),
        L = (0, D.useRef)(null);

    function R() {
        return n()
    }
    var z = (0, D.useRef)(!1);

    function ce() {
        N(B), se(null, !0)
    }
    var le = c(function(e) {
            var t = M();
            if (t !== `none`) {
                var n = R();
                if (!e || e.deadline || e.target === n) {
                    var r = z.current,
                        i;
                    t === `appear` && r ? i = C == null ? void 0 : C(n, e) : t === `enter` && r ? i = w == null ? void 0 : w(n, e) : t === `leave` && r && (i = T == null ? void 0 : T(n, e)), r && i !== !1 && ce()
                }
            }
        }),
        me = be(le),
        he = x(me, 1)[0],
        W = function(e) {
            switch (e) {
                case de:
                    return h(h(h({}, V, m), H, v), U, b);
                case fe:
                    return h(h(h({}, V, g), H, te), U, ne);
                case pe:
                    return h(h(h({}, V, ee), H, y), U, S);
                default:
                    return {}
            }
        },
        G = D.useMemo(function() {
            return W(F)
        }, [F]),
        ge = Ee(F, !e, function(e) {
            if (e === `prepare`) {
                var t = G[V];
                return t ? t(R()) : !1
            }
            if (J in G) {
                var n;
                se(((n = G[J]) == null ? void 0 : n.call(G, R(), null)) || null)
            }
            return J === `active` && F !== `none` && (he(R()), d > 0 && (clearTimeout(L.current), L.current = setTimeout(function() {
                le({
                    deadline: !0
                })
            }, d))), J === `prepared` && ce(), !0
        }),
        K = x(ge, 2),
        q = K[0],
        J = K[1];
    z.current = Te(J);
    var Y = (0, D.useRef)(null);
    xe(function() {
        if (!(I.current && Y.current === t)) {
            A(t);
            var n = I.current;
            I.current = !0;
            var r;
            !n && t && s && (r = de), n && t && a && (r = fe), (n && !t && u || !n && p && !t && u) && (r = pe);
            var i = W(r);
            r && (e || i.prepare) ? (N(r), q()) : N(B), Y.current = t
        }
    }, [t]), (0, D.useEffect)(function() {
        (F === `appear` && !s || F === `enter` && !a || F === `leave` && !u) && N(B)
    }, [s, a, u]), (0, D.useEffect)(function() {
        return function() {
            I.current = !1, clearTimeout(L.current)
        }
    }, []);
    var X = D.useRef(!1);
    (0, D.useEffect)(function() {
        k && (X.current = !0), k !== void 0 && F === `none` && ((X.current || k) && (E == null || E(k)), X.current = !0)
    }, [k, F]);
    var Z = P;
    return G.prepare && J === `start` && (Z = f({
        transition: `none`
    }, Z)), [F, J, Z, k ?? t]
}
g(), w(), m();

function Oe(e) {
    var t = e;
    y(e) === `object` && (t = e.transitionSupport);

    function n(e, n) {
        return !!(e.motionName && t && n !== !1)
    }
    var r = D.forwardRef(function(e, t) {
        var r = e.visible,
            i = r === void 0 || r,
            a = e.removeOnLeave,
            o = a === void 0 || a,
            c = e.forceRender,
            l = e.children,
            u = e.motionName,
            d = e.leavedClassName,
            p = e.eventProps,
            m = D.useContext(z).motion,
            g = n(e, m),
            _ = (0, D.useRef)(),
            v = (0, D.useRef)();

        function te() {
            try {
                return _.current instanceof HTMLElement ? _.current : ie(v.current)
            } catch {
                return null
            }
        }
        var y = De(g, i, te, e),
            b = x(y, 4),
            S = b[0],
            C = b[1],
            w = b[2],
            T = b[3],
            E = D.useRef(T);
        T && (E.current = !0);
        var O = D.useCallback(function(e) {
                _.current = e, ne(t, e)
            }, [t]),
            k, A = f(f({}, p), {}, {
                visible: i
            });
        if (!l) k = null;
        else if (S === `none`) k = T ? l(f({}, A), O) : !o && E.current && d ? l(f(f({}, A), {}, {
            className: d
        }), O) : c || !o && !d ? l(f(f({}, A), {}, {
            style: {
                display: `none`
            }
        }), O) : null;
        else {
            var j;
            C === `prepare` ? j = `prepare` : Te(C) ? j = `active` : C === `start` && (j = `start`);
            var M = ye(u, `${S}-${j}`);
            k = l(f(f({}, A), {}, {
                className: (0, re.default)(ye(u, S), h(h({}, M, M && j), u, typeof u == `string`)),
                style: w
            }), O)
        }
        return D.isValidElement(k) && ee(k) && (s(k) || (k = D.cloneElement(k, {
            ref: O
        }))), D.createElement(le, {
            ref: v
        }, k)
    });
    return r.displayName = `CSSMotion`, r
}
var ke = Oe(Z);
n(), i(), m();
var Ae = `keep`,
    je = `remove`,
    Me = `removed`;

function Ne(e) {
    var t = e && y(e) === `object` && `key` in e ? e : {
        key: e
    };
    return f(f({}, t), {}, {
        key: String(t.key)
    })
}

function Pe() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map(Ne)
}

function Fe() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        n = [],
        r = 0,
        i = t.length,
        a = Pe(e),
        o = Pe(t);
    a.forEach(function(e) {
        for (var t = !1, a = r; a < i; a += 1) {
            var s = o[a];
            if (s.key === e.key) {
                r < a && (n = n.concat(o.slice(r, a).map(function(e) {
                    return f(f({}, e), {}, {
                        status: `add`
                    })
                })), r = a), n.push(f(f({}, s), {}, {
                    status: Ae
                })), r += 1, t = !0;
                break
            }
        }
        t || n.push(f(f({}, e), {}, {
            status: je
        }))
    }), r < i && (n = n.concat(o.slice(r).map(function(e) {
        return f(f({}, e), {}, {
            status: `add`
        })
    })));
    var s = {};
    return n.forEach(function(e) {
        var t = e.key;
        s[t] = (s[t] || 0) + 1
    }), Object.keys(s).filter(function(e) {
        return s[e] > 1
    }).forEach(function(e) {
        n = n.filter(function(t) {
            var n = t.key,
                r = t.status;
            return n !== e || r !== `remove`
        }), n.forEach(function(t) {
            t.key === e && (t.status = Ae)
        })
    }), n
}
S(), u(), v(), g();
var Ie = [`component`, `children`, `onVisibleChanged`, `onAllRemoved`],
    Le = [`status`],
    Re = [`eventProps`, `visible`, `children`, `motionName`, `motionAppear`, `motionEnter`, `motionLeave`, `motionLeaveImmediately`, `motionDeadline`, `removeOnLeave`, `leavedClassName`, `onAppearPrepare`, `onAppearStart`, `onAppearActive`, `onAppearEnd`, `onEnterStart`, `onEnterActive`, `onEnterEnd`, `onLeaveStart`, `onLeaveActive`, `onLeaveEnd`];

function ze(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke,
        n = function(e) {
            l(r, e);
            var n = E(r);

            function r() {
                var e;
                d(this, r);
                var t = [...arguments];
                return e = n.call.apply(n, [this].concat(t)), h(o(e), `state`, {
                    keyEntities: []
                }), h(o(e), `removeKey`, function(t) {
                    e.setState(function(e) {
                        return {
                            keyEntities: e.keyEntities.map(function(e) {
                                return e.key === t ? f(f({}, e), {}, {
                                    status: Me
                                }) : e
                            })
                        }
                    }, function() {
                        e.state.keyEntities.filter(function(e) {
                            return e.status !== `removed`
                        }).length === 0 && e.props.onAllRemoved && e.props.onAllRemoved()
                    })
                }), e
            }
            return T(r, [{
                key: `render`,
                value: function() {
                    var e = this,
                        n = this.state.keyEntities,
                        r = this.props,
                        i = r.component,
                        o = r.children,
                        s = r.onVisibleChanged;
                    r.onAllRemoved;
                    var c = C(r, Ie),
                        l = i || D.Fragment,
                        u = {};
                    return Re.forEach(function(e) {
                        u[e] = c[e], delete c[e]
                    }), delete c.keys, D.createElement(l, c, n.map(function(n, r) {
                        var i = n.status,
                            c = C(n, Le),
                            l = i === `add` || i === `keep`;
                        return D.createElement(t, a({}, u, {
                            key: c.key,
                            visible: l,
                            eventProps: c,
                            onVisibleChanged: function(t) {
                                s == null || s(t, {
                                    key: c.key
                                }), t || e.removeKey(c.key)
                            }
                        }), function(e, t) {
                            return o(f(f({}, e), {}, {
                                index: r
                            }), t)
                        })
                    }))
                }
            }], [{
                key: `getDerivedStateFromProps`,
                value: function(e, t) {
                    var n = e.keys,
                        r = t.keyEntities;
                    return {
                        keyEntities: Fe(r, Pe(n)).filter(function(e) {
                            var t = r.find(function(t) {
                                var n = t.key;
                                return e.key === n
                            });
                            return !(t && t.status === `removed` && e.status === `remove`)
                        })
                    }
                }
            }]), r
        }(D.Component);
    return h(n, `defaultProps`, {
        component: `div`
    }), n
}
var Be = ze(Z),
    Ve = ke;

function He(e) {
    var t;
    return e == null || (t = e.getRootNode) == null ? void 0 : t.call(e)
}

function Ue(e) {
    return He(e) instanceof ShadowRoot
}

function We(e) {
    return Ue(e) ? He(e) : null
}

function Ge(e) {
    return e && D.isValidElement(e) && e.type === D.Fragment
}
var Ke = (e, t, n) => D.isValidElement(e) ? D.cloneElement(e, typeof n == `function` ? n(e.props || {}) : n) : t;

function qe(e, t) {
    return Ke(e, e, t)
}

function Je(e, t) {
    this.v = e, this.k = t
}

function Q(e, t, n, r) {
    var i = Object.defineProperty;
    try {
        i({}, ``, {})
    } catch {
        i = 0
    }
    Q = function(e, t, n, r) {
        function a(t, n) {
            Q(e, t, function(e) {
                return this._invoke(t, n, e)
            })
        }
        t ? i ? i(e, t, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r
        }) : e[t] = n : (a(`next`, 0), a(`throw`, 1), a(`return`, 2))
    }, Q(e, t, n, r)
}

function Ye() {
    var e, t, n = typeof Symbol == `function` ? Symbol : {},
        r = n.iterator || `@@iterator`,
        i = n.toStringTag || `@@toStringTag`;

    function a(n, r, i, a) {
        var c = r && r.prototype instanceof s ? r : s,
            l = Object.create(c.prototype);
        return Q(l, `_invoke`, function(n, r, i) {
            var a, s, c, l = 0,
                u = i || [],
                d = !1,
                f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function(t, n) {
                        return a = t, s = 0, c = e, f.n = n, o
                    }
                };

            function p(n, r) {
                for (s = n, c = r, t = 0; !d && l && !i && t < u.length; t++) {
                    var i, a = u[t],
                        p = f.p,
                        m = a[2];
                    n > 3 ? (i = m === r) && (c = a[(s = a[4]) ? 5 : (s = 3, 3)], a[4] = a[5] = e) : a[0] <= p && ((i = n < 2 && p < a[1]) ? (s = 0, f.v = r, f.n = a[1]) : p < m && (i = n < 3 || a[0] > r || r > m) && (a[4] = n, a[5] = r, f.n = m, s = 0))
                }
                if (i || n > 1) return o;
                throw d = !0, r
            }
            return function(i, u, m) {
                if (l > 1) throw TypeError(`Generator is already running`);
                for (d && u === 1 && p(u, m), s = u, c = m;
                    (t = s < 2 ? e : c) || !d;) {
                    a || (s ? s < 3 ? (s > 1 && (f.n = -1), p(s, c)) : f.n = c : f.v = c);
                    try {
                        if (l = 2, a) {
                            if (s || (i = `next`), t = a[i]) {
                                if (!(t = t.call(a, c))) throw TypeError(`iterator result is not an object`);
                                if (!t.done) return t;
                                c = t.value, s < 2 && (s = 0)
                            } else s === 1 && (t = a.return) && t.call(a), s < 2 && (c = TypeError(`The iterator does not provide a '` + i + `' method`), s = 1);
                            a = e
                        } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== o) break
                    } catch (t) {
                        a = e, s = 1, c = t
                    } finally {
                        l = 1
                    }
                }
                return {
                    value: t,
                    done: d
                }
            }
        }(n, i, a), !0), l
    }
    var o = {};

    function s() {}

    function c() {}

    function l() {}
    t = Object.getPrototypeOf;
    var u = [][r] ? t(t([][r]())) : (Q(t = {}, r, function() {
            return this
        }), t),
        d = l.prototype = s.prototype = Object.create(u);

    function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : (e.__proto__ = l, Q(e, i, `GeneratorFunction`)), e.prototype = Object.create(d), e
    }
    return c.prototype = l, Q(d, `constructor`, l), Q(l, `constructor`, c), c.displayName = `GeneratorFunction`, Q(l, i, `GeneratorFunction`), Q(d), Q(d, i, `Generator`), Q(d, r, function() {
        return this
    }), Q(d, `toString`, function() {
        return `[object Generator]`
    }), (Ye = function() {
        return {
            w: a,
            m: f
        }
    })()
}

function Xe(e, t) {
    function n(r, i, a, o) {
        try {
            var s = e[r](i),
                c = s.value;
            return c instanceof Je ? t.resolve(c.v).then(function(e) {
                n(`next`, e, a, o)
            }, function(e) {
                n(`throw`, e, a, o)
            }) : t.resolve(c).then(function(e) {
                s.value = e, a(s)
            }, function(e) {
                return n(`throw`, e, a, o)
            })
        } catch (e) {
            o(e)
        }
    }
    var r;
    this.next || (Q(Xe.prototype), Q(Xe.prototype, typeof Symbol == `function` && Symbol.asyncIterator || `@asyncIterator`, function() {
        return this
    })), Q(this, `_invoke`, function(e, i, a) {
        function o() {
            return new t(function(t, r) {
                n(e, a, t, r)
            })
        }
        return r = r ? r.then(o, o) : o()
    }, !0)
}

function Ze(e, t, n, r, i) {
    return new Xe(Ye().w(e, t, n, r), i || Promise)
}

function Qe(e, t, n, r, i) {
    var a = Ze(e, t, n, r, i);
    return a.next().then(function(e) {
        return e.done ? e.value : a.next()
    })
}

function $e(e) {
    var t = Object(e),
        n = [];
    for (var r in t) n.unshift(r);
    return function e() {
        for (; n.length;)
            if ((r = n.pop()) in t) return e.value = r, e.done = !1, e;
        return e.done = !0, e
    }
}
m();

function et(e) {
    if (e != null) {
        var t = e[typeof Symbol == `function` && Symbol.iterator || `@@iterator`],
            n = 0;
        if (t) return t.call(e);
        if (typeof e.next == `function`) return e;
        if (!isNaN(e.length)) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }
    throw TypeError(y(e) + ` is not iterable`)
}

function tt() {
    var e = Ye(),
        t = e.m(tt),
        n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;

    function r(e) {
        var t = typeof e == `function` && e.constructor;
        return !!t && (t === n || (t.displayName || t.name) === `GeneratorFunction`)
    }
    var i = {
        throw: 1,
        return: 2,
        break: 3,
        continue: 3
    };

    function a(e) {
        var t, n;
        return function(r) {
            t || (t = {
                stop: function() {
                    return n(r.a, 2)
                },
                catch: function() {
                    return r.v
                },
                abrupt: function(e, t) {
                    return n(r.a, i[e], t)
                },
                delegateYield: function(e, i, a) {
                    return t.resultName = i, n(r.d, et(e), a)
                },
                finish: function(e) {
                    return n(r.f, e)
                }
            }, n = function(e, n, i) {
                r.p = t.prev, r.n = t.next;
                try {
                    return e(n, i)
                } finally {
                    t.next = r.n
                }
            }), t.resultName && (t[t.resultName] = r.v, t.resultName = void 0), t.sent = r.v, t.next = r.n;
            try {
                return e.call(this, t)
            } finally {
                r.p = t.prev, r.n = t.next
            }
        }
    }
    return (tt = function() {
        return {
            wrap: function(t, n, r, i) {
                return e.w(a(t), n, r, i && i.reverse())
            },
            isGeneratorFunction: r,
            mark: e.m,
            awrap: function(e, t) {
                return new Je(e, t)
            },
            AsyncIterator: Xe,
            async: function(e, t, n, i, o) {
                return (r(t) ? Ze : Qe)(a(e), t, n, i, o)
            },
            keys: $e,
            values: et
        }
    })()
}

function nt(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            c = s.value
    } catch (e) {
        n(e);
        return
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i)
}

function rt(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, i) {
            var a = e.apply(t, n);

            function o(e) {
                nt(a, r, i, o, s, `next`, e)
            }

            function s(e) {
                nt(a, r, i, o, s, `throw`, e)
            }
            o(void 0)
        })
    }
}

function it(e, t) {
    var n = Object.assign({}, e);
    return Array.isArray(t) && t.forEach(function(e) {
        delete n[e]
    }), n
}
var at = (function(e) {
    if (!e) return !1;
    if (e instanceof Element) {
        if (e.offsetParent) return !0;
        if (e.getBBox) {
            var t = e.getBBox(),
                n = t.width,
                r = t.height;
            if (n || r) return !0
        }
        if (e.getBoundingClientRect) {
            var i = e.getBoundingClientRect(),
                a = i.width,
                o = i.height;
            if (a || o) return !0
        }
    }
    return !1
});
u(), v(), S(), m();
var ot = [`b`],
    st = [`v`],
    ct = function(e) {
        return Math.round(Number(e || 0))
    },
    lt = function(e) {
        if (e instanceof p) return e;
        if (e && y(e) === `object` && `h` in e && `b` in e) {
            var t = e,
                n = t.b,
                r = C(t, ot);
            return f(f({}, r), {}, {
                v: n
            })
        }
        return typeof e == `string` && /hsb/.test(e) ? e.replace(/hsb/, `hsv`) : e
    },
    $ = function(e) {
        l(n, e);
        var t = E(n);

        function n(e) {
            return d(this, n), t.call(this, lt(e))
        }
        return T(n, [{
            key: `toHsbString`,
            value: function() {
                var e = this.toHsb(),
                    t = ct(e.s * 100),
                    n = ct(e.b * 100),
                    r = ct(e.h),
                    i = e.a,
                    a = `hsb(${r}, ${t}%, ${n}%)`,
                    o = `hsba(${r}, ${t}%, ${n}%, ${i.toFixed(i===0?0:2)})`;
                return i === 1 ? a : o
            }
        }, {
            key: `toHsb`,
            value: function() {
                var e = this.toHsv(),
                    t = e.v,
                    n = C(e, st);
                return f(f({}, n), {}, {
                    b: t,
                    a: this.a
                })
            }
        }]), n
    }(p);
(function(e) {
    return e instanceof $ ? e : new $(e)
})(`#1677ff`), u(), v();
var ut = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, ``).slice(0, t ? 8 : 6)) || ``,
    dt = (e, t) => e ? ut(e, t) : ``,
    ft = function() {
        function e(t) {
            d(this, e);
            var n;
            if (this.cleared = !1, t instanceof e) {
                this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) == null ? void 0 : n.map(t => ({
                    color: new e(t.color),
                    percent: t.percent
                })), this.cleared = t.cleared;
                return
            }
            let r = Array.isArray(t);
            r && t.length ? (this.colors = t.map(({
                color: t,
                percent: n
            }) => ({
                color: new e(t),
                percent: n
            })), this.metaColor = new $(this.colors[0].color.metaColor)) : this.metaColor = new $(r ? `` : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0)
        }
        return T(e, [{
            key: `toHsb`,
            value: function() {
                return this.metaColor.toHsb()
            }
        }, {
            key: `toHsbString`,
            value: function() {
                return this.metaColor.toHsbString()
            }
        }, {
            key: `toHex`,
            value: function() {
                return dt(this.toHexString(), this.metaColor.a < 1)
            }
        }, {
            key: `toHexString`,
            value: function() {
                return this.metaColor.toHexString()
            }
        }, {
            key: `toRgb`,
            value: function() {
                return this.metaColor.toRgb()
            }
        }, {
            key: `toRgbString`,
            value: function() {
                return this.metaColor.toRgbString()
            }
        }, {
            key: `isGradient`,
            value: function() {
                return !!this.colors && !this.cleared
            }
        }, {
            key: `getColors`,
            value: function() {
                return this.colors || [{
                    color: this,
                    percent: 0
                }]
            }
        }, {
            key: `toCssString`,
            value: function() {
                let {
                    colors: e
                } = this;
                return e ? `linear-gradient(90deg, ${e.map(e=>`${e.color.toRgbString()} ${e.percent}%`).join(`, `)})` : this.metaColor.toRgbString()
            }
        }, {
            key: `equals`,
            value: function(e) {
                return !e || this.isGradient() !== e.isGradient() ? !1 : this.isGradient() ? this.colors.length === e.colors.length && this.colors.every((t, n) => {
                    let r = e.colors[n];
                    return t.percent === r.percent && t.color.equals(r.color)
                }) : this.toHexString() === e.toHexString()
            }
        }])
    }();
export {
    se as _, rt as a, A as b, Ge as c, Ve as d, Be as f, I as g, F as h, it as i, Ke as l, L as m, $ as n, tt as o, ce as p, at as r, qe as s, ft as t, We as u, P as v, k as x, ie as y
};