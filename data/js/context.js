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
    Ht as s,
    It as c,
    Lt as l,
    Ut as u,
    Vt as d,
    gt as f,
    ht as p,
    lt as m,
    nt as h,
    tt as g,
    ut as _
} from "./Compact.js";
import {
    f as v
} from "./color.js";
import {
    O as y
} from "./ContextIsolator.js";
import {
    t as b
} from "./pickAttrs.js";
var x = e(r());
f(), h(), n(), l(), s(), _();
var S = e(u()),
    C = e(t()),
    w = C.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.style,
            a = e.className,
            o = e.duration,
            s = o === void 0 ? 4.5 : o,
            l = e.showProgress,
            u = e.pauseOnHover,
            f = u === void 0 || u,
            p = e.eventKey,
            h = e.content,
            g = e.closable,
            _ = e.closeIcon,
            v = _ === void 0 ? `x` : _,
            x = e.props,
            w = e.onClick,
            T = e.onNoticeClose,
            E = e.times,
            D = e.hovering,
            O = C.useState(!1),
            k = m(O, 2),
            A = k[0],
            j = k[1],
            M = C.useState(0),
            N = m(M, 2),
            P = N[0],
            F = N[1],
            I = C.useState(0),
            L = m(I, 2),
            R = L[0],
            z = L[1],
            B = D || A,
            V = s > 0 && l,
            H = function() {
                T(p)
            },
            U = function(e) {
                (e.key === `Enter` || e.code === `Enter` || e.keyCode === y.ENTER) && H()
            };
        C.useEffect(function() {
            if (!B && s > 0) {
                var e = Date.now() - R,
                    t = setTimeout(function() {
                        H()
                    }, s * 1e3 - R);
                return function() {
                    f && clearTimeout(t), z(Date.now() - e)
                }
            }
        }, [s, B, E]), C.useEffect(function() {
            if (!B && V && (f || R === 0)) {
                var e = performance.now(),
                    t;
                return (function n() {
                        cancelAnimationFrame(t), t = requestAnimationFrame(function(t) {
                            var r = t + R - e,
                                i = Math.min(r / (s * 1e3), 1);
                            F(i * 100), i < 1 && n()
                        })
                    })(),
                    function() {
                        f && cancelAnimationFrame(t)
                    }
            }
        }, [s, R, B, V, E]);
        var W = C.useMemo(function() {
                return d(g) === `object` && g !== null ? g : g ? {
                    closeIcon: v
                } : {}
            }, [g, v]),
            G = b(W, !0),
            K = 100 - (!P || P < 0 ? 0 : P > 100 ? 100 : P),
            q = `${n}-notice`;
        return C.createElement(`div`, i({}, x, {
            ref: t,
            className: (0, S.default)(q, a, c({}, `${q}-closable`, g)),
            style: r,
            onMouseEnter: function(e) {
                var t;
                j(!0), x == null || (t = x.onMouseEnter) == null || t.call(x, e)
            },
            onMouseLeave: function(e) {
                var t;
                j(!1), x == null || (t = x.onMouseLeave) == null || t.call(x, e)
            },
            onClick: w
        }), C.createElement(`div`, {
            className: `${q}-content`
        }, h), g && C.createElement(`a`, i({
            tabIndex: 0,
            className: `${q}-close`,
            onKeyDown: U,
            "aria-label": `Close`
        }, G, {
            onClick: function(e) {
                e.preventDefault(), e.stopPropagation(), H()
            }
        }), W.closeIcon), V && C.createElement(`progress`, {
            className: `${q}-progress`,
            max: `100`,
            value: K
        }, K + `%`))
    }),
    T = C.createContext({}),
    E = function(e) {
        var t = e.children,
            n = e.classNames;
        return C.createElement(T.Provider, {
            value: {
                classNames: n
            }
        }, t)
    };
s();
var D = 8,
    O = 3,
    k = 16,
    A = function(e) {
        var t = {
            offset: D,
            threshold: O,
            gap: k
        };
        return e && d(e) === `object` && (t.offset = e.offset ?? D, t.threshold = e.threshold ?? O, t.gap = e.gap ?? k), [!!e, t]
    };
n(), l(), _();
var j = [`className`, `style`, `classNames`, `styles`],
    M = function(e) {
        var t = e.configList,
            n = e.placement,
            r = e.prefixCls,
            a = e.className,
            s = e.style,
            l = e.motion,
            u = e.onAllNoticeRemoved,
            d = e.onNoticeClose,
            f = e.stack,
            h = (0, C.useContext)(T).classNames,
            _ = (0, C.useRef)({}),
            y = (0, C.useState)(null),
            b = m(y, 2),
            x = b[0],
            E = b[1],
            D = (0, C.useState)([]),
            O = m(D, 2),
            k = O[0],
            M = O[1],
            N = t.map(function(e) {
                return {
                    config: e,
                    key: String(e.key)
                }
            }),
            P = A(f),
            F = m(P, 2),
            I = F[0],
            L = F[1],
            R = L.offset,
            z = L.threshold,
            B = L.gap,
            V = I && (k.length > 0 || N.length <= z),
            H = typeof l == `function` ? l(n) : l;
        return (0, C.useEffect)(function() {
            I && k.length > 1 && M(function(e) {
                return e.filter(function(e) {
                    return N.some(function(t) {
                        return e === t.key
                    })
                })
            })
        }, [k, N, I]), (0, C.useEffect)(function() {
            var e;
            if (I && _.current[(e = N[N.length - 1]) == null ? void 0 : e.key]) {
                var t;
                E(_.current[(t = N[N.length - 1]) == null ? void 0 : t.key])
            }
        }, [N, I]), C.createElement(v, i({
            key: n,
            className: (0, S.default)(r, `${r}-${n}`, h == null ? void 0 : h.list, a, c(c({}, `${r}-stack`, !!I), `${r}-stack-expanded`, V)),
            style: s,
            keys: N,
            motionAppear: !0
        }, H, {
            onAllRemoved: function() {
                u(n)
            }
        }), function(e, t) {
            var a = e.config,
                s = e.className,
                c = e.style,
                l = e.index,
                u = a,
                f = u.key,
                m = u.times,
                v = String(f),
                y = a,
                b = y.className,
                T = y.style,
                E = y.classNames,
                D = y.styles,
                O = g(y, j),
                A = N.findIndex(function(e) {
                    return e.key === v
                }),
                P = {};
            if (I) {
                var F = N.length - 1 - (A > -1 ? A : l - 1),
                    L = n === `top` || n === `bottom` ? `-50%` : `0`;
                if (F > 0) {
                    var z, H, U;
                    P.height = V ? (z = _.current[v]) == null ? void 0 : z.offsetHeight : x == null ? void 0 : x.offsetHeight;
                    for (var W = 0, G = 0; G < F; G++) {
                        var K;
                        W += ((K = _.current[N[N.length - 1 - G].key]) == null ? void 0 : K.offsetHeight) + B
                    }
                    P.transform = `translate3d(${L}, ${(V?W:F*R)*(n.startsWith(`top`)?1:-1)}px, 0) scaleX(${!V&&x!=null&&x.offsetWidth&&(H=_.current[v])!=null&&H.offsetWidth?((x==null?void 0:x.offsetWidth)-R*2*(F<3?F:3))/((U=_.current[v])==null?void 0:U.offsetWidth):1})`
                } else P.transform = `translate3d(${L}, 0, 0)`
            }
            return C.createElement(`div`, {
                ref: t,
                className: (0, S.default)(`${r}-notice-wrapper`, s, E == null ? void 0 : E.wrapper),
                style: o(o(o({}, c), P), D == null ? void 0 : D.wrapper),
                onMouseEnter: function() {
                    return M(function(e) {
                        return e.includes(v) ? e : [].concat(p(e), [v])
                    })
                },
                onMouseLeave: function() {
                    return M(function(e) {
                        return e.filter(function(e) {
                            return e !== v
                        })
                    })
                }
            }, C.createElement(w, i({}, O, {
                ref: function(e) {
                    A > -1 ? _.current[v] = e : delete _.current[v]
                },
                prefixCls: r,
                classNames: E,
                styles: D,
                className: (0, S.default)(b, h == null ? void 0 : h.notice),
                style: T,
                times: m,
                key: f,
                eventKey: f,
                onNoticeClose: d,
                hovering: I && k.length > 0
            })))
        })
    };
f(), _();
var N = C.forwardRef(function(e, t) {
    var n = e.prefixCls,
        r = n === void 0 ? `rc-notification` : n,
        i = e.container,
        a = e.motion,
        s = e.maxCount,
        c = e.className,
        l = e.style,
        u = e.onAllRemoved,
        d = e.stack,
        f = e.renderNotifications,
        h = C.useState([]),
        g = m(h, 2),
        _ = g[0],
        v = g[1],
        y = function(e) {
            var t, n = _.find(function(t) {
                return t.key === e
            });
            n == null || (t = n.onClose) == null || t.call(n), v(function(t) {
                return t.filter(function(t) {
                    return t.key !== e
                })
            })
        };
    C.useImperativeHandle(t, function() {
        return {
            open: function(e) {
                v(function(t) {
                    var n = p(t),
                        r = n.findIndex(function(t) {
                            return t.key === e.key
                        }),
                        i = o({}, e);
                    if (r >= 0) {
                        var a;
                        i.times = (((a = t[r]) == null ? void 0 : a.times) || 0) + 1, n[r] = i
                    } else i.times = 0, n.push(i);
                    return s > 0 && n.length > s && (n = n.slice(-s)), n
                })
            },
            close: function(e) {
                y(e)
            },
            destroy: function() {
                v([])
            }
        }
    });
    var b = C.useState({}),
        S = m(b, 2),
        w = S[0],
        T = S[1];
    C.useEffect(function() {
        var e = {};
        _.forEach(function(t) {
            var n = t.placement,
                r = n === void 0 ? `topRight` : n;
            r && (e[r] = e[r] || [], e[r].push(t))
        }), Object.keys(w).forEach(function(t) {
            e[t] = e[t] || []
        }), T(e)
    }, [_]);
    var E = function(e) {
            T(function(t) {
                var n = o({}, t);
                return (n[e] || []).length || delete n[e], n
            })
        },
        D = C.useRef(!1);
    if (C.useEffect(function() {
            Object.keys(w).length > 0 ? D.current = !0 : D.current && (u == null || u(), D.current = !1)
        }, [w]), !i) return null;
    var O = Object.keys(w);
    return (0, x.createPortal)(C.createElement(C.Fragment, null, O.map(function(e) {
        var t = w[e],
            n = C.createElement(M, {
                key: e,
                configList: t,
                placement: e,
                prefixCls: r,
                className: c == null ? void 0 : c(e),
                style: l == null ? void 0 : l(e),
                motion: a,
                onNoticeClose: y,
                onAllNoticeRemoved: E,
                stack: d
            });
        return f ? f(n, {
            prefixCls: r,
            key: e
        }) : n
    })), i)
});
f(), _(), h();
var P = [`getContainer`, `motion`, `prefixCls`, `maxCount`, `className`, `style`, `onAllRemoved`, `stack`, `renderNotifications`],
    F = function() {
        return document.body
    },
    I = 0;

function L() {
    var e = {};
    return [...arguments].forEach(function(t) {
        t && Object.keys(t).forEach(function(n) {
            var r = t[n];
            r !== void 0 && (e[n] = r)
        })
    }), e
}

function R() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.getContainer,
        n = t === void 0 ? F : t,
        r = e.motion,
        i = e.prefixCls,
        o = e.maxCount,
        s = e.className,
        c = e.style,
        l = e.onAllRemoved,
        u = e.stack,
        d = e.renderNotifications,
        f = g(e, P),
        h = C.useState(),
        _ = m(h, 2),
        v = _[0],
        y = _[1],
        b = C.useRef(),
        x = C.createElement(N, {
            container: v,
            ref: b,
            prefixCls: i,
            motion: r,
            maxCount: o,
            className: s,
            style: c,
            onAllRemoved: l,
            stack: u,
            renderNotifications: d
        }),
        S = C.useState([]),
        w = m(S, 2),
        T = w[0],
        E = w[1],
        D = a(function(e) {
            var t = L(f, e);
            (t.key === null || t.key === void 0) && (t.key = `rc-notification-${I}`, I += 1), E(function(e) {
                return [].concat(p(e), [{
                    type: `open`,
                    config: t
                }])
            })
        }),
        O = C.useMemo(function() {
            return {
                open: D,
                close: function(e) {
                    E(function(t) {
                        return [].concat(p(t), [{
                            type: `close`,
                            key: e
                        }])
                    })
                },
                destroy: function() {
                    E(function(e) {
                        return [].concat(p(e), [{
                            type: `destroy`
                        }])
                    })
                }
            }
        }, []);
    return C.useEffect(function() {
        y(n())
    }), C.useEffect(function() {
        if (b.current && T.length) {
            T.forEach(function(e) {
                switch (e.type) {
                    case `open`:
                        b.current.open(e.config);
                        break;
                    case `close`:
                        b.current.close(e.key);
                        break;
                    case `destroy`:
                        b.current.destroy()
                }
            });
            var e, t;
            E(function(n) {
                return (e !== n || !t) && (e = n, t = n.filter(function(e) {
                    return !T.includes(e)
                })), t
            })
        }
    }, [T]), [O, x]
}
var z = C.createContext({});
export {
    w as i, R as n, E as r, z as t
};