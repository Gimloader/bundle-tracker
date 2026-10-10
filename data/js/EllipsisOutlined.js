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
    At as a,
    Bt as o,
    Ct as s,
    Dt as c,
    Et as l,
    Ft as u,
    Ht as d,
    It as f,
    Lt as p,
    Mt as m,
    Nt as h,
    Ot as g,
    Pt as _,
    Tt as v,
    Ut as y,
    Vt as b,
    et as x,
    gt as S,
    ht as C,
    lt as w,
    nt as T,
    tt as E,
    ut as D,
    wt as O,
    x as k,
    xt as A,
    zt as j
} from "./Compact.js";
import {
    d as M,
    i as N,
    r as ee,
    v as P
} from "./color.js";
import {
    r as te
} from "./compact-item.js";
import {
    O as F
} from "./ContextIsolator.js";
import {
    t as I
} from "./es-3.js";
import {
    t as ne
} from "./es-1.js";
var L = e(y());
n(), p(), D(), T();
var R = e(t()),
    re = F.ESC,
    z = F.TAB;

function ie(e) {
    var t = e.visible,
        n = e.triggerRef,
        r = e.onVisibleChange,
        i = e.autoFocus,
        a = e.overlayRef,
        o = R.useRef(!1),
        s = function() {
            if (t) {
                var e, i;
                (e = n.current) == null || (i = e.focus) == null || i.call(e), r == null || r(!1)
            }
        },
        c = function() {
            var e;
            return (e = a.current) != null && e.focus ? (a.current.focus(), o.current = !0, !0) : !1
        },
        l = function(e) {
            switch (e.keyCode) {
                case re:
                    s();
                    break;
                case z:
                    var t = !1;
                    o.current || (t = c()), t ? e.preventDefault() : s()
            }
        };
    R.useEffect(function() {
        return t ? (window.addEventListener(`keydown`, l), i && P(c, 3), function() {
            window.removeEventListener(`keydown`, l), o.current = !1
        }) : function() {
            o.current = !1
        }
    }, [t])
}
var ae = (0, R.forwardRef)(function(e, t) {
        var n = e.overlay,
            r = e.arrow,
            i = e.prefixCls,
            o = (0, R.useMemo)(function() {
                return typeof n == `function` ? n() : n
            }, [n]),
            s = g(t, a(o));
        return R.createElement(R.Fragment, null, r && R.createElement(`div`, {
            className: `${i}-arrow`
        }), R.cloneElement(o, {
            ref: m(o) ? s : void 0
        }))
    }),
    B = {
        adjustX: 1,
        adjustY: 1
    },
    V = [0, 0],
    oe = {
        topLeft: {
            points: [`bl`, `tl`],
            overflow: B,
            offset: [0, -4],
            targetOffset: V
        },
        top: {
            points: [`bc`, `tc`],
            overflow: B,
            offset: [0, -4],
            targetOffset: V
        },
        topRight: {
            points: [`br`, `tr`],
            overflow: B,
            offset: [0, -4],
            targetOffset: V
        },
        bottomLeft: {
            points: [`tl`, `bl`],
            overflow: B,
            offset: [0, 4],
            targetOffset: V
        },
        bottom: {
            points: [`tc`, `bc`],
            overflow: B,
            offset: [0, 4],
            targetOffset: V
        },
        bottomRight: {
            points: [`tr`, `br`],
            overflow: B,
            offset: [0, 4],
            targetOffset: V
        }
    },
    se = [`arrow`, `prefixCls`, `transitionName`, `animation`, `align`, `placement`, `placements`, `getPopupContainer`, `showAction`, `hideAction`, `overlayClassName`, `overlayStyle`, `visible`, `trigger`, `autoFocus`, `overlay`, `children`, `onVisibleChange`];

function ce(e, t) {
    var n, r = e.arrow,
        o = r !== void 0 && r,
        s = e.prefixCls,
        c = s === void 0 ? `rc-dropdown` : s,
        l = e.transitionName,
        u = e.animation,
        d = e.align,
        p = e.placement,
        h = p === void 0 ? `bottomLeft` : p,
        _ = e.placements,
        v = _ === void 0 ? oe : _,
        y = e.getPopupContainer,
        b = e.showAction,
        x = e.hideAction,
        S = e.overlayClassName,
        C = e.overlayStyle,
        T = e.visible,
        D = e.trigger,
        O = D === void 0 ? [`hover`] : D,
        k = e.autoFocus,
        A = e.overlay,
        j = e.children,
        M = e.onVisibleChange,
        N = E(e, se),
        ee = R.useState(),
        P = w(ee, 2),
        te = P[0],
        F = P[1],
        I = `visible` in e ? T : te,
        re = R.useRef(null),
        z = R.useRef(null),
        B = R.useRef(null);
    R.useImperativeHandle(t, function() {
        return re.current
    });
    var V = function(e) {
        F(e), M == null || M(e)
    };
    ie({
        visible: I,
        triggerRef: B,
        onVisibleChange: V,
        autoFocus: k,
        overlayRef: z
    });
    var ce = function(t) {
            var n = e.onOverlayClick;
            F(!1), n && n(t)
        },
        H = function() {
            return R.createElement(ae, {
                ref: z,
                overlay: A,
                prefixCls: c,
                arrow: o
            })
        },
        U = function() {
            return typeof A == `function` ? H : H()
        },
        W = function() {
            var t = e.minOverlayWidthMatchTrigger,
                n = e.alignPoint;
            return `minOverlayWidthMatchTrigger` in e ? t : !n
        },
        G = R.cloneElement(j, {
            className: (0, L.default)((n = j.props) == null ? void 0 : n.className, I && function() {
                var t = e.openClassName;
                return t === void 0 ? `${c}-open` : t
            }()),
            ref: m(j) ? g(B, a(j)) : void 0
        }),
        le = x;
    return !le && O.indexOf(`contextMenu`) !== -1 && (le = [`click`]), R.createElement(ne, i({
        builtinPlacements: v
    }, N, {
        prefixCls: c,
        ref: re,
        popupClassName: (0, L.default)(S, f({}, `${c}-show-arrow`, o)),
        popupStyle: C,
        action: O,
        showAction: b,
        hideAction: le,
        popupPlacement: h,
        popupAlign: d,
        popupTransitionName: l,
        popupAnimation: u,
        popupVisible: I,
        stretch: W() ? `minWidth` : ``,
        popup: U(),
        onPopupVisibleChange: V,
        onPopupClick: ce,
        getPopupContainer: y
    }), G)
}
var H = R.forwardRef(ce),
    U = e(r());
S();
var W = R.createContext(null);

function G(e, t) {
    return e === void 0 ? null : `${e}-${t}`
}

function le(e) {
    return G(R.useContext(W), e)
}
T();
var ue = [`children`, `locked`],
    K = R.createContext(null);

function de(e, t) {
    var n = u({}, e);
    return Object.keys(t).forEach(function(e) {
        var r = t[e];
        r !== void 0 && (n[e] = r)
    }), n
}

function fe(e) {
    var t = e.children,
        n = e.locked,
        r = E(e, ue),
        i = R.useContext(K),
        a = _(function() {
            return de(i, r)
        }, [i, r], function(e, t) {
            return !n && (e[0] !== t[0] || !x(e[1], t[1], !0))
        });
    return R.createElement(K.Provider, {
        value: a
    }, t)
}
var pe = [],
    me = R.createContext(null);

function q() {
    return R.useContext(me)
}
var he = R.createContext(pe);

function ge(e) {
    var t = R.useContext(he);
    return R.useMemo(function() {
        return e === void 0 ? t : [].concat(C(t), [e])
    }, [t, e])
}
var _e = R.createContext(null),
    ve = R.createContext({});
S();

function ye(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (ee(e)) {
        var n = e.nodeName.toLowerCase(),
            r = [`input`, `select`, `textarea`, `button`].includes(n) || e.isContentEditable || n === `a` && !!e.getAttribute(`href`),
            i = e.getAttribute(`tabindex`),
            a = Number(i),
            o = null;
        return i && !Number.isNaN(a) ? o = a : r && o === null && (o = 0), r && e.disabled && (o = null), o !== null && (o >= 0 || t && o < 0)
    }
    return !1
}

function be(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
        n = C(e.querySelectorAll(`*`)).filter(function(e) {
            return ye(e, t)
        });
    return ye(e, t) && n.unshift(e), n
}
p();
var xe = F.LEFT,
    Se = F.RIGHT,
    Ce = F.UP,
    we = F.DOWN,
    Te = F.ENTER,
    Ee = F.ESC,
    J = F.HOME,
    Y = F.END,
    De = [Ce, we, xe, Se];

function Oe(e, t, n, r) {
    var i, a = `prev`,
        o = `next`,
        s = `children`,
        c = `parent`;
    if (e === `inline` && r === Te) return {
        inlineTrigger: !0
    };
    var l = f(f({}, Ce, a), we, o),
        u = f(f(f(f({}, xe, n ? o : a), Se, n ? a : o), we, s), Te, s),
        d = f(f(f(f(f(f({}, Ce, a), we, o), Te, s), Ee, c), xe, n ? s : c), Se, n ? c : s);
    switch ((i = {
            inline: l,
            horizontal: u,
            vertical: d,
            inlineSub: l,
            horizontalSub: d,
            verticalSub: d
        } [`${e}${t?``:`Sub`}`]) == null ? void 0 : i[r]) {
        case a:
            return {
                offset: -1, sibling: !0
            };
        case o:
            return {
                offset: 1, sibling: !0
            };
        case c:
            return {
                offset: -1, sibling: !1
            };
        case s:
            return {
                offset: 1, sibling: !1
            };
        default:
            return null
    }
}

function ke(e) {
    for (var t = e; t;) {
        if (t.getAttribute(`data-menu-list`)) return t;
        t = t.parentElement
    }
    return null
}

function Ae(e, t) {
    for (var n = e || document.activeElement; n;) {
        if (t.has(n)) return n;
        n = n.parentElement
    }
    return null
}

function je(e, t) {
    return be(e, !0).filter(function(e) {
        return t.has(e)
    })
}

function Me(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    if (!e) return null;
    var i = je(e, t),
        a = i.length,
        o = i.findIndex(function(e) {
            return n === e
        });
    return r < 0 ? o === -1 ? o = a - 1 : --o : r > 0 && (o += 1), o = (o + a) % a, i[o]
}
var Ne = function(e, t) {
    var n = new Set,
        r = new Map,
        i = new Map;
    return e.forEach(function(e) {
        var a = document.querySelector(`[data-menu-id='${G(t,e)}']`);
        a && (n.add(a), i.set(a, e), r.set(e, a))
    }), {
        elements: n,
        key2element: r,
        element2key: i
    }
};

function Pe(e, t, n, r, i, a, o, s, c, l) {
    var u = R.useRef(),
        d = R.useRef();
    d.current = t;
    var f = function() {
        P.cancel(u.current)
    };
    return R.useEffect(function() {
            return function() {
                f()
            }
        }, []),
        function(p) {
            var m = p.which;
            if ([].concat(De, [Te, Ee, J, Y]).includes(m)) {
                var h = a(),
                    g = Ne(h, r),
                    _ = g,
                    v = _.elements,
                    y = _.key2element,
                    b = _.element2key,
                    x = Ae(y.get(t), v),
                    S = b.get(x),
                    C = Oe(e, o(S, !0).length === 1, n, m);
                if (!C && m !== J && m !== Y) return;
                (De.includes(m) || [J, Y].includes(m)) && p.preventDefault();
                var w = function(e) {
                    if (e) {
                        var t = e,
                            n = e.querySelector(`a`);
                        n != null && n.getAttribute(`href`) && (t = n);
                        var r = b.get(e);
                        s(r), f(), u.current = P(function() {
                            d.current === r && t.focus()
                        })
                    }
                };
                if ([J, Y].includes(m) || C.sibling || !x) {
                    var T = !x || e === `inline` ? i.current : ke(x),
                        E, D = je(T, v);
                    E = m === J ? D[0] : m === Y ? D[D.length - 1] : Me(T, v, x, C.offset), w(E)
                } else if (C.inlineTrigger) c(S);
                else if (C.offset > 0) c(S, !0), f(), u.current = P(function() {
                    g = Ne(h, r);
                    var e = x.getAttribute(`aria-controls`);
                    w(Me(document.getElementById(e), g.elements))
                }, 5);
                else if (C.offset < 0) {
                    var O = o(S, !0),
                        k = O[O.length - 2],
                        A = y.get(k);
                    c(k, !1), w(A)
                }
            }
            l == null || l(p)
        }
}

function Fe(e) {
    Promise.resolve().then(e)
}
S(), D();
var Ie = `__RC_UTIL_PATH_SPLIT__`,
    Le = function(e) {
        return e.join(Ie)
    },
    Re = function(e) {
        return e.split(Ie)
    },
    ze = `rc-menu-more`;

function Be() {
    var e = R.useState({}),
        t = w(e, 2)[1],
        n = (0, R.useRef)(new Map),
        r = (0, R.useRef)(new Map),
        i = R.useState([]),
        a = w(i, 2),
        o = a[0],
        s = a[1],
        c = (0, R.useRef)(0),
        l = (0, R.useRef)(!1),
        u = function() {
            l.current || t({})
        },
        d = (0, R.useCallback)(function(e, t) {
            var i = Le(t);
            r.current.set(i, e), n.current.set(e, i), c.current += 1;
            var a = c.current;
            Fe(function() {
                a === c.current && u()
            })
        }, []),
        f = (0, R.useCallback)(function(e, t) {
            var i = Le(t);
            r.current.delete(i), n.current.delete(e)
        }, []),
        p = (0, R.useCallback)(function(e) {
            s(e)
        }, []),
        m = (0, R.useCallback)(function(e, t) {
            var r = Re(n.current.get(e) || ``);
            return t && o.includes(r[0]) && r.unshift(ze), r
        }, [o]),
        h = (0, R.useCallback)(function(e, t) {
            return e.filter(function(e) {
                return e !== void 0
            }).some(function(e) {
                return m(e, !0).includes(t)
            })
        }, [m]),
        g = function() {
            var e = C(n.current.keys());
            return o.length && e.push(ze), e
        },
        _ = (0, R.useCallback)(function(e) {
            var t = `${n.current.get(e)}${Ie}`,
                i = new Set;
            return C(r.current.keys()).forEach(function(e) {
                e.startsWith(t) && i.add(r.current.get(e))
            }), i
        }, []);
    return R.useEffect(function() {
        return function() {
            l.current = !0
        }
    }, []), {
        registerPath: d,
        unregisterPath: f,
        refreshOverflowKeys: p,
        isSubPathKey: h,
        getKeyPath: m,
        getKeys: g,
        getSubPathKeys: _
    }
}

function Ve(e) {
    var t = R.useRef(e);
    t.current = e;
    var n = R.useCallback(function() {
        var e, n = [...arguments];
        return (e = t.current) == null ? void 0 : e.call.apply(e, [t].concat(n))
    }, []);
    return e ? n : void 0
}
D();
var He = Math.random().toFixed(5).toString().slice(2),
    X = 0;

function Ue(e) {
    var t = k(e, {
            value: e
        }),
        n = w(t, 2),
        r = n[0],
        i = n[1];
    return R.useEffect(function() {
        X += 1, i(`rc-menu-uuid-${`${He}-${X}`}`)
    }, []), r
}
c(), v();

function We(e, t, n, r) {
    var i = R.useContext(K),
        a = i.activeKey,
        o = i.onActive,
        s = i.onInactive,
        c = {
            active: a === e
        };
    return t || (c.onMouseEnter = function(t) {
        n == null || n({
            key: e,
            domEvent: t
        }), o(e)
    }, c.onMouseLeave = function(t) {
        r == null || r({
            key: e,
            domEvent: t
        }), s(e)
    }), c
}

function Ge(e) {
    var t = R.useContext(K),
        n = t.mode,
        r = t.rtl,
        i = t.inlineIndent;
    if (n !== `inline`) return null;
    var a = e;
    return r ? {
        paddingRight: a * i
    } : {
        paddingLeft: a * i
    }
}

function Ke(e) {
    var t = e.icon,
        n = e.props,
        r = e.children,
        i;
    return t === null || t === !1 ? null : (typeof t == `function` ? i = R.createElement(t, u({}, n)) : typeof t != `boolean` && (i = t), i || r || null)
}
T();
var qe = [`item`];

function Je(e) {
    var t = e.item,
        n = E(e, qe);
    return Object.defineProperty(n, "item", {
        get: function() {
            return j(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t
        }
    }), n
}
p(), S(), n(), T();
var Ye = [`title`, `attribute`, `elementRef`],
    Xe = [`style`, `className`, `eventKey`, `warnKey`, `disabled`, `itemIcon`, `children`, `role`, `onMouseEnter`, `onMouseLeave`, `onClick`, `onKeyDown`, `onFocus`],
    Ze = [`active`],
    Qe = function(e) {
        s(n, e);
        var t = A(n);

        function n() {
            return l(this, n), t.apply(this, arguments)
        }
        return O(n, [{
            key: `render`,
            value: function() {
                var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    r = e.elementRef,
                    a = E(e, Ye),
                    o = N(a, [`eventKey`, `popupClassName`, `popupOffset`, `onTitleClick`]);
                return j(!n, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), R.createElement(I.Item, i({}, n, {
                    title: typeof t == `string` ? t : void 0
                }, o, {
                    ref: r
                }))
            }
        }]), n
    }(R.Component),
    $e = R.forwardRef(function(e, t) {
        var n = e.style,
            r = e.className,
            a = e.eventKey;
        e.warnKey;
        var o = e.disabled,
            s = e.itemIcon,
            c = e.children,
            l = e.role,
            d = e.onMouseEnter,
            p = e.onMouseLeave,
            m = e.onClick,
            g = e.onKeyDown,
            _ = e.onFocus,
            v = E(e, Xe),
            y = le(a),
            b = R.useContext(K),
            x = b.prefixCls,
            S = b.onItemClick,
            w = b.disabled,
            T = b.overflowDisabled,
            D = b.itemIcon,
            O = b.selectedKeys,
            k = b.onActive,
            A = R.useContext(ve)._internalRenderMenuItem,
            j = `${x}-item`,
            M = R.useRef(),
            ee = R.useRef(),
            P = w || o,
            te = h(t, ee),
            I = ge(a),
            ne = function(e) {
                return {
                    key: a,
                    keyPath: C(I).reverse(),
                    item: M.current,
                    domEvent: e
                }
            },
            re = s || D,
            z = We(a, P, d, p),
            ie = z.active,
            ae = E(z, Ze),
            B = O.includes(a),
            V = Ge(I.length),
            oe = function(e) {
                if (!P) {
                    var t = ne(e);
                    m == null || m(Je(t)), S(t)
                }
            },
            se = function(e) {
                if (g == null || g(e), e.which === F.ENTER) {
                    var t = ne(e);
                    m == null || m(Je(t)), S(t)
                }
            },
            ce = function(e) {
                k(a), _ == null || _(e)
            },
            H = {};
        e.role === `option` && (H[`aria-selected`] = B);
        var U = R.createElement(Qe, i({
            ref: M,
            elementRef: te,
            role: l === null ? `none` : l || `menuitem`,
            tabIndex: o ? null : -1,
            "data-menu-id": T && y ? null : y
        }, N(v, [`extra`]), ae, H, {
            component: `li`,
            "aria-disabled": o,
            style: u(u({}, V), n),
            className: (0, L.default)(j, f(f(f({}, `${j}-active`, ie), `${j}-selected`, B), `${j}-disabled`, P), r),
            onClick: oe,
            onKeyDown: se,
            onFocus: ce
        }), c, R.createElement(Ke, {
            props: u(u({}, e), {}, {
                isSelected: B
            }),
            icon: re
        }));
        return A && (U = A(U, e, {
            selected: B
        })), U
    });

function et(e, t) {
    var n = e.eventKey,
        r = q(),
        a = ge(n);
    return R.useEffect(function() {
        if (r) return r.registerPath(n, a),
            function() {
                r.unregisterPath(n, a)
            }
    }, [a]), r ? null : R.createElement($e, i({}, e, {
        ref: t
    }))
}
var tt = R.forwardRef(et);
n(), T();
var nt = [`className`, `children`],
    rt = R.forwardRef(function(e, t) {
        var n = e.className,
            r = e.children,
            a = E(e, nt),
            o = R.useContext(K),
            s = o.prefixCls,
            c = o.mode,
            l = o.rtl;
        return R.createElement(`ul`, i({
            className: (0, L.default)(s, l && `${s}-rtl`, `${s}-sub`, `${s}-${c===`inline`?`inline`:`vertical`}`, n),
            role: `menu`
        }, a, {
            "data-menu-list": !0,
            ref: t
        }), r)
    });
rt.displayName = `SubMenuList`, S();

function it(e, t) {
    return o(e).map(function(e, n) {
        if (R.isValidElement(e)) {
            var r, i = e.key,
                a = ((r = e.props) == null ? void 0 : r.eventKey) ?? i;
            a ?? (a = `tmp_key-${[].concat(C(t),[n]).join(`-`)}`);
            var o = {
                key: a,
                eventKey: a
            };
            return R.cloneElement(e, o)
        }
        return e
    })
}
var Z = {
        adjustX: 1,
        adjustY: 1
    },
    Q = {
        topLeft: {
            points: [`bl`, `tl`],
            overflow: Z
        },
        topRight: {
            points: [`br`, `tr`],
            overflow: Z
        },
        bottomLeft: {
            points: [`tl`, `bl`],
            overflow: Z
        },
        bottomRight: {
            points: [`tr`, `br`],
            overflow: Z
        },
        leftTop: {
            points: [`tr`, `tl`],
            overflow: Z
        },
        leftBottom: {
            points: [`br`, `bl`],
            overflow: Z
        },
        rightTop: {
            points: [`tl`, `tr`],
            overflow: Z
        },
        rightBottom: {
            points: [`bl`, `br`],
            overflow: Z
        }
    },
    at = {
        topLeft: {
            points: [`bl`, `tl`],
            overflow: Z
        },
        topRight: {
            points: [`br`, `tr`],
            overflow: Z
        },
        bottomLeft: {
            points: [`tl`, `bl`],
            overflow: Z
        },
        bottomRight: {
            points: [`tr`, `br`],
            overflow: Z
        },
        rightTop: {
            points: [`tr`, `tl`],
            overflow: Z
        },
        rightBottom: {
            points: [`br`, `bl`],
            overflow: Z
        },
        leftTop: {
            points: [`tl`, `tr`],
            overflow: Z
        },
        leftBottom: {
            points: [`bl`, `br`],
            overflow: Z
        }
    };

function ot(e, t, n) {
    if (t) return t;
    if (n) return n[e] || n.other
}
p(), D();
var st = {
    horizontal: `bottomLeft`,
    vertical: `rightTop`,
    "vertical-left": `rightTop`,
    "vertical-right": `leftTop`
};

function ct(e) {
    var t = e.prefixCls,
        n = e.visible,
        r = e.children,
        i = e.popup,
        a = e.popupStyle,
        o = e.popupClassName,
        s = e.popupOffset,
        c = e.disabled,
        l = e.mode,
        d = e.onVisibleChange,
        p = R.useContext(K),
        m = p.getPopupContainer,
        h = p.rtl,
        g = p.subMenuOpenDelay,
        _ = p.subMenuCloseDelay,
        v = p.builtinPlacements,
        y = p.triggerSubMenuAction,
        b = p.forceSubMenuRender,
        x = p.rootClassName,
        S = p.motion,
        C = p.defaultMotions,
        T = R.useState(!1),
        E = w(T, 2),
        D = E[0],
        O = E[1],
        k = u(h ? u({}, at) : u({}, Q), v),
        A = st[l],
        j = ot(l, S, C),
        M = R.useRef(j);
    l !== `inline` && (M.current = j);
    var N = u(u({}, M.current), {}, {
            leavedClassName: `${t}-hidden`,
            removeOnLeave: !1,
            motionAppear: !0
        }),
        ee = R.useRef();
    return R.useEffect(function() {
        return ee.current = P(function() {
                O(n)
            }),
            function() {
                P.cancel(ee.current)
            }
    }, [n]), R.createElement(ne, {
        prefixCls: t,
        popupClassName: (0, L.default)(`${t}-popup`, f({}, `${t}-rtl`, h), o, x),
        stretch: l === `horizontal` ? `minWidth` : null,
        getPopupContainer: m,
        builtinPlacements: k,
        popupPlacement: A,
        popupVisible: D,
        popup: i,
        popupStyle: a,
        popupAlign: s && {
            offset: s
        },
        action: c ? [] : [y],
        mouseEnterDelay: g,
        mouseLeaveDelay: _,
        onPopupVisibleChange: d,
        forceRender: b,
        popupMotion: N,
        fresh: !0
    }, r)
}
n(), D();

function lt(e) {
    var t = e.id,
        n = e.open,
        r = e.keyPath,
        a = e.children,
        o = `inline`,
        s = R.useContext(K),
        c = s.prefixCls,
        l = s.forceSubMenuRender,
        d = s.motion,
        f = s.defaultMotions,
        p = s.mode,
        m = R.useRef(!1);
    m.current = p === o;
    var h = R.useState(!m.current),
        g = w(h, 2),
        _ = g[0],
        v = g[1],
        y = m.current ? n : !1;
    R.useEffect(function() {
        m.current && v(!1)
    }, [p]);
    var b = u({}, ot(o, d, f));
    r.length > 1 && (b.motionAppear = !1);
    var x = b.onVisibleChanged;
    return b.onVisibleChanged = function(e) {
        return !m.current && !e && v(!0), x == null ? void 0 : x(e)
    }, _ ? null : R.createElement(fe, {
        mode: o,
        locked: !m.current
    }, R.createElement(M, i({
        visible: y
    }, b, {
        forceRender: l,
        removeOnLeave: !1,
        leavedClassName: `${c}-hidden`
    }), function(e) {
        var n = e.className,
            r = e.style;
        return R.createElement(rt, {
            id: t,
            className: n,
            style: r
        }, a)
    }))
}
p(), n(), D(), T();
var ut = [`style`, `className`, `title`, `eventKey`, `warnKey`, `disabled`, `internalPopupClose`, `children`, `itemIcon`, `expandIcon`, `popupClassName`, `popupOffset`, `popupStyle`, `onClick`, `onMouseEnter`, `onMouseLeave`, `onTitleClick`, `onTitleMouseEnter`, `onTitleMouseLeave`],
    dt = [`active`],
    ft = R.forwardRef(function(e, t) {
        var n = e.style,
            r = e.className,
            a = e.title,
            o = e.eventKey;
        e.warnKey;
        var s = e.disabled,
            c = e.internalPopupClose,
            l = e.children,
            d = e.itemIcon,
            p = e.expandIcon,
            m = e.popupClassName,
            h = e.popupOffset,
            g = e.popupStyle,
            _ = e.onClick,
            v = e.onMouseEnter,
            y = e.onMouseLeave,
            b = e.onTitleClick,
            x = e.onTitleMouseEnter,
            S = e.onTitleMouseLeave,
            C = E(e, ut),
            T = le(o),
            D = R.useContext(K),
            O = D.prefixCls,
            k = D.mode,
            A = D.openKeys,
            j = D.disabled,
            M = D.overflowDisabled,
            N = D.activeKey,
            ee = D.selectedKeys,
            P = D.itemIcon,
            te = D.expandIcon,
            F = D.onItemClick,
            ne = D.onOpenChange,
            re = D.onActive,
            z = R.useContext(ve)._internalRenderSubMenuItem,
            ie = R.useContext(_e).isSubPathKey,
            ae = ge(),
            B = `${O}-submenu`,
            V = j || s,
            oe = R.useRef(),
            se = R.useRef(),
            ce = d ?? P,
            H = p ?? te,
            U = A.includes(o),
            W = !M && U,
            G = ie(ee, o),
            ue = We(o, V, x, S),
            de = ue.active,
            pe = E(ue, dt),
            me = R.useState(!1),
            q = w(me, 2),
            he = q[0],
            ye = q[1],
            be = function(e) {
                V || ye(e)
            },
            xe = function(e) {
                be(!0), v == null || v({
                    key: o,
                    domEvent: e
                })
            },
            Se = function(e) {
                be(!1), y == null || y({
                    key: o,
                    domEvent: e
                })
            },
            Ce = R.useMemo(function() {
                return de || (k === `inline` ? !1 : he || ie([N], o))
            }, [k, de, N, he, o, ie]),
            we = Ge(ae.length),
            Te = function(e) {
                V || (b == null || b({
                    key: o,
                    domEvent: e
                }), k === `inline` && ne(o, !U))
            },
            Ee = Ve(function(e) {
                _ == null || _(Je(e)), F(e)
            }),
            J = function(e) {
                k !== `inline` && ne(o, e)
            },
            Y = function() {
                re(o)
            },
            De = T && `${T}-popup`,
            Oe = R.useMemo(function() {
                return R.createElement(Ke, {
                    icon: k === `horizontal` ? void 0 : H,
                    props: u(u({}, e), {}, {
                        isOpen: W,
                        isSubMenu: !0
                    })
                }, R.createElement(`i`, {
                    className: `${B}-arrow`
                }))
            }, [k, H, e, W, B]),
            ke = R.createElement(`div`, i({
                role: `menuitem`,
                style: we,
                className: `${B}-title`,
                tabIndex: V ? null : -1,
                ref: oe,
                title: typeof a == `string` ? a : null,
                "data-menu-id": M && T ? null : T,
                "aria-expanded": W,
                "aria-haspopup": !0,
                "aria-controls": De,
                "aria-disabled": V,
                onClick: Te,
                onFocus: Y
            }, pe), a, Oe),
            Ae = R.useRef(k);
        if (Ae.current = k !== `inline` && ae.length > 1 ? `vertical` : k, !M) {
            var je = Ae.current;
            ke = R.createElement(ct, {
                mode: je,
                prefixCls: B,
                visible: !c && W && k !== `inline`,
                popupClassName: m,
                popupOffset: h,
                popupStyle: g,
                popup: R.createElement(fe, {
                    mode: je === `horizontal` ? `vertical` : je
                }, R.createElement(rt, {
                    id: De,
                    ref: se
                }, l)),
                disabled: V,
                onVisibleChange: J
            }, ke)
        }
        var Me = R.createElement(I.Item, i({
            ref: t,
            role: `none`
        }, C, {
            component: `li`,
            style: n,
            className: (0, L.default)(B, `${B}-${k}`, r, f(f(f(f({}, `${B}-open`, W), `${B}-active`, Ce), `${B}-selected`, G), `${B}-disabled`, V)),
            onMouseEnter: xe,
            onMouseLeave: Se
        }), ke, !M && R.createElement(lt, {
            id: De,
            open: W,
            keyPath: ae
        }, l));
        return z && (Me = z(Me, e, {
            selected: G,
            active: Ce,
            open: W,
            disabled: V
        })), R.createElement(fe, {
            onItemClick: Ee,
            mode: k === `horizontal` ? `vertical` : k,
            itemIcon: ce,
            expandIcon: H
        }, Me)
    }),
    pt = R.forwardRef(function(e, t) {
        var n = e.eventKey,
            r = e.children,
            a = ge(n),
            o = it(r, a),
            s = q();
        R.useEffect(function() {
            if (s) return s.registerPath(n, a),
                function() {
                    s.unregisterPath(n, a)
                }
        }, [a]);
        var c = s ? o : R.createElement(ft, i({
            ref: t
        }, e), o);
        return R.createElement(he.Provider, {
            value: a
        }, c)
    });
d();

function mt(e) {
    var t = e.className,
        n = e.style,
        r = R.useContext(K).prefixCls;
    return q() ? null : R.createElement(`li`, {
        role: `separator`,
        className: (0, L.default)(`${r}-item-divider`, t),
        style: n
    })
}
n(), T();
var ht = [`className`, `title`, `eventKey`, `children`],
    $ = R.forwardRef(function(e, t) {
        var n = e.className,
            r = e.title;
        e.eventKey;
        var a = e.children,
            o = E(e, ht),
            s = `${R.useContext(K).prefixCls}-item-group`;
        return R.createElement(`li`, i({
            ref: t,
            role: `presentation`
        }, o, {
            onClick: function(e) {
                return e.stopPropagation()
            },
            className: (0, L.default)(s, n)
        }), R.createElement(`div`, {
            role: `presentation`,
            className: `${s}-title`,
            title: typeof r == `string` ? r : void 0
        }, r), R.createElement(`ul`, {
            role: `group`,
            className: `${s}-list`
        }, a))
    }),
    gt = R.forwardRef(function(e, t) {
        var n = e.eventKey,
            r = e.children,
            a = it(r, ge(n));
        return q() ? a : R.createElement($, i({
            ref: t
        }, N(e, [`warnKey`])), a)
    });
n(), T();
var _t = [`label`, `children`, `key`, `type`, `extra`];

function vt(e, t, n) {
    var r = t.item,
        a = t.group,
        o = t.submenu,
        s = t.divider;
    return (e || []).map(function(e, c) {
        if (e && b(e) === `object`) {
            var l = e,
                u = l.label,
                d = l.children,
                f = l.key,
                p = l.type,
                m = l.extra,
                h = E(l, _t),
                g = f ?? `tmp-${c}`;
            return d || p === `group` ? p === `group` ? R.createElement(a, i({
                key: g
            }, h, {
                title: u
            }), vt(d, t, n)) : R.createElement(o, i({
                key: g
            }, h, {
                title: u
            }), vt(d, t, n)) : p === `divider` ? R.createElement(s, i({
                key: g
            }, h)) : R.createElement(r, i({
                key: g
            }, h, {
                extra: m
            }), u, (!!m || m === 0) && R.createElement(`span`, {
                className: `${n}-item-extra`
            }, m))
        }
        return null
    }).filter(function(e) {
        return e
    })
}

function yt(e, t, n, r, i) {
    var a = e,
        o = u({
            divider: mt,
            item: tt,
            group: gt,
            submenu: pt
        }, r);
    return t && (a = vt(t, o, i)), it(a, n)
}
n(), p(), S(), D(), T();
var bt = `prefixCls.rootClassName.style.className.tabIndex.items.children.direction.id.mode.inlineCollapsed.disabled.disabledOverflow.subMenuOpenDelay.subMenuCloseDelay.forceSubMenuRender.defaultOpenKeys.openKeys.activeKey.defaultActiveFirst.selectable.multiple.defaultSelectedKeys.selectedKeys.onSelect.onDeselect.inlineIndent.motion.defaultMotions.triggerSubMenuAction.builtinPlacements.itemIcon.expandIcon.overflowedIndicator.overflowedIndicatorPopupClassName.getPopupContainer.onClick.onOpenChange.onKeyDown.openAnimation.openTransitionName._internalRenderMenuItem._internalRenderSubMenuItem._internalComponents`.split(`.`),
    xt = [],
    St = R.forwardRef(function(e, t) {
        var n, r = e,
            a = r.prefixCls,
            o = a === void 0 ? `rc-menu` : a,
            s = r.rootClassName,
            c = r.style,
            l = r.className,
            d = r.tabIndex,
            p = d === void 0 ? 0 : d,
            m = r.items,
            h = r.children,
            g = r.direction,
            _ = r.id,
            v = r.mode,
            y = v === void 0 ? `vertical` : v,
            b = r.inlineCollapsed,
            S = r.disabled,
            T = r.disabledOverflow,
            D = r.subMenuOpenDelay,
            O = D === void 0 ? .1 : D,
            A = r.subMenuCloseDelay,
            j = A === void 0 ? .1 : A,
            M = r.forceSubMenuRender,
            N = r.defaultOpenKeys,
            ee = r.openKeys,
            P = r.activeKey,
            te = r.defaultActiveFirst,
            F = r.selectable,
            ne = F === void 0 || F,
            re = r.multiple,
            z = re !== void 0 && re,
            ie = r.defaultSelectedKeys,
            ae = r.selectedKeys,
            B = r.onSelect,
            V = r.onDeselect,
            oe = r.inlineIndent,
            se = oe === void 0 ? 24 : oe,
            ce = r.motion,
            H = r.defaultMotions,
            G = r.triggerSubMenuAction,
            le = G === void 0 ? `hover` : G,
            ue = r.builtinPlacements,
            K = r.itemIcon,
            de = r.expandIcon,
            pe = r.overflowedIndicator,
            q = pe === void 0 ? `...` : pe,
            he = r.overflowedIndicatorPopupClassName,
            ge = r.getPopupContainer,
            ye = r.onClick,
            be = r.onOpenChange,
            xe = r.onKeyDown;
        r.openAnimation, r.openTransitionName;
        var Se = r._internalRenderMenuItem,
            Ce = r._internalRenderSubMenuItem,
            we = r._internalComponents,
            Te = E(r, bt),
            Ee = R.useMemo(function() {
                return [yt(h, m, xt, we, o), yt(h, m, xt, {}, o)]
            }, [h, m, we]),
            J = w(Ee, 2),
            Y = J[0],
            De = J[1],
            Oe = R.useState(!1),
            ke = w(Oe, 2),
            Ae = ke[0],
            Me = ke[1],
            Fe = R.useRef(),
            Ie = Ue(_),
            Le = g === `rtl`,
            Re = k(N, {
                value: ee,
                postState: function(e) {
                    return e || xt
                }
            }),
            He = w(Re, 2),
            X = He[0],
            We = He[1],
            Ge = function(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];

                function n() {
                    We(e), be == null || be(e)
                }
                t ? (0, U.flushSync)(n) : n()
            },
            Ke = R.useState(X),
            qe = w(Ke, 2),
            Ye = qe[0],
            Xe = qe[1],
            Ze = R.useRef(!1),
            Qe = R.useMemo(function() {
                return (y === `inline` || y === `vertical`) && b ? [`vertical`, b] : [y, !1]
            }, [y, b]),
            $e = w(Qe, 2),
            et = $e[0],
            nt = $e[1],
            rt = et === `inline`,
            it = R.useState(et),
            Z = w(it, 2),
            Q = Z[0],
            at = Z[1],
            ot = R.useState(nt),
            st = w(ot, 2),
            ct = st[0],
            lt = st[1];
        R.useEffect(function() {
            at(et), lt(nt), Ze.current && (rt ? We(Ye) : Ge(xt))
        }, [et, nt]);
        var ut = R.useState(0),
            dt = w(ut, 2),
            ft = dt[0],
            mt = dt[1],
            ht = ft >= Y.length - 1 || Q !== `horizontal` || T;
        R.useEffect(function() {
            rt && Xe(X)
        }, [X]), R.useEffect(function() {
            return Ze.current = !0,
                function() {
                    Ze.current = !1
                }
        }, []);
        var $ = Be(),
            gt = $.registerPath,
            _t = $.unregisterPath,
            vt = $.refreshOverflowKeys,
            St = $.isSubPathKey,
            Ct = $.getKeyPath,
            wt = $.getKeys,
            Tt = $.getSubPathKeys,
            Et = R.useMemo(function() {
                return {
                    registerPath: gt,
                    unregisterPath: _t
                }
            }, [gt, _t]),
            Dt = R.useMemo(function() {
                return {
                    isSubPathKey: St
                }
            }, [St]);
        R.useEffect(function() {
            vt(ht ? xt : Y.slice(ft + 1).map(function(e) {
                return e.key
            }))
        }, [ft, ht]);
        var Ot = k(P || te && ((n = Y[0]) == null ? void 0 : n.key), {
                value: P
            }),
            kt = w(Ot, 2),
            At = kt[0],
            jt = kt[1],
            Mt = Ve(function(e) {
                jt(e)
            }),
            Nt = Ve(function() {
                jt(void 0)
            });
        (0, R.useImperativeHandle)(t, function() {
            return {
                list: Fe.current,
                focus: function(e) {
                    var t, n = Ne(wt(), Ie),
                        r = n.elements,
                        i = n.key2element,
                        a = n.element2key,
                        o = je(Fe.current, r),
                        s = At ?? (o[0] ? a.get(o[0]) : (t = Y.find(function(e) {
                            return !e.props.disabled
                        })) == null ? void 0 : t.key),
                        c = i.get(s);
                    if (s && c) {
                        var l;
                        c == null || (l = c.focus) == null || l.call(c, e)
                    }
                }
            }
        });
        var Pt = k(ie || [], {
                value: ae,
                postState: function(e) {
                    return Array.isArray(e) ? e : e == null ? xt : [e]
                }
            }),
            Ft = w(Pt, 2),
            It = Ft[0],
            Lt = Ft[1],
            Rt = function(e) {
                if (ne) {
                    var t = e.key,
                        n = It.includes(t),
                        r = z ? n ? It.filter(function(e) {
                            return e !== t
                        }) : [].concat(C(It), [t]) : [t];
                    Lt(r);
                    var i = u(u({}, e), {}, {
                        selectedKeys: r
                    });
                    n ? V == null || V(i) : B == null || B(i)
                }!z && X.length && Q !== `inline` && Ge(xt)
            },
            zt = Ve(function(e) {
                ye == null || ye(Je(e)), Rt(e)
            }),
            Bt = Ve(function(e, t) {
                var n = X.filter(function(t) {
                    return t !== e
                });
                if (t) n.push(e);
                else if (Q !== `inline`) {
                    var r = Tt(e);
                    n = n.filter(function(e) {
                        return !r.has(e)
                    })
                }
                x(X, n, !0) || Ge(n, !0)
            }),
            Vt = Pe(Q, At, Le, Ie, Fe, wt, Ct, jt, function(e, t) {
                Bt(e, t ?? !X.includes(e))
            }, xe);
        R.useEffect(function() {
            Me(!0)
        }, []);
        var Ht = R.useMemo(function() {
                return {
                    _internalRenderMenuItem: Se,
                    _internalRenderSubMenuItem: Ce
                }
            }, [Se, Ce]),
            Ut = Q !== `horizontal` || T ? Y : Y.map(function(e, t) {
                return R.createElement(fe, {
                    key: e.key,
                    overflowDisabled: t > ft
                }, e)
            }),
            Wt = R.createElement(I, i({
                id: _,
                ref: Fe,
                prefixCls: `${o}-overflow`,
                component: `ul`,
                itemComponent: tt,
                className: (0, L.default)(o, `${o}-root`, `${o}-${Q}`, l, f(f({}, `${o}-inline-collapsed`, ct), `${o}-rtl`, Le), s),
                dir: g,
                style: c,
                role: `menu`,
                tabIndex: p,
                data: Ut,
                renderRawItem: function(e) {
                    return e
                },
                renderRawRest: function(e) {
                    var t = e.length,
                        n = t ? Y.slice(-t) : null;
                    return R.createElement(pt, {
                        eventKey: ze,
                        title: q,
                        disabled: ht,
                        internalPopupClose: t === 0,
                        popupClassName: he
                    }, n)
                },
                maxCount: Q !== `horizontal` || T ? I.INVALIDATE : I.RESPONSIVE,
                ssr: `full`,
                "data-menu-list": !0,
                onVisibleChange: function(e) {
                    mt(e)
                },
                onKeyDown: Vt
            }, Te));
        return R.createElement(ve.Provider, {
            value: Ht
        }, R.createElement(W.Provider, {
            value: Ie
        }, R.createElement(fe, {
            prefixCls: o,
            rootClassName: s,
            mode: Q,
            openKeys: X,
            rtl: Le,
            disabled: S,
            motion: Ae ? ce : null,
            defaultMotions: Ae ? H : null,
            activeKey: At,
            onActive: Mt,
            onInactive: Nt,
            selectedKeys: It,
            inlineIndent: se,
            subMenuOpenDelay: O,
            subMenuCloseDelay: j,
            forceSubMenuRender: M,
            builtinPlacements: ue,
            triggerSubMenuAction: le,
            getPopupContainer: ge,
            itemIcon: K,
            expandIcon: de,
            onItemClick: zt,
            onOpenChange: Bt
        }, R.createElement(_e.Provider, {
            value: Dt
        }, Wt), R.createElement(`div`, {
            style: {
                display: `none`
            },
            "aria-hidden": !0
        }, R.createElement(me.Provider, {
            value: Et
        }, De)))))
    });
St.Item = tt, St.SubMenu = pt, St.ItemGroup = gt, St.Divider = mt;
var Ct = {
    icon: {
        tag: `svg`,
        attrs: {
            viewBox: `64 64 896 896`,
            focusable: `false`
        },
        children: [{
            tag: `path`,
            attrs: {
                d: `M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z`
            }
        }]
    },
    name: `ellipsis`,
    theme: `outlined`
};
n();
var wt = R.forwardRef(function(e, t) {
    return R.createElement(te, i({}, e, {
        ref: t,
        icon: Ct
    }))
});
export {
    pt as a, H as c, mt as i, St as n, tt as o, gt as r, ge as s, wt as t
};