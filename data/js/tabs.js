import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    s as r
} from "./assertThisInitialized.js";
import {
    Bt as i,
    C as a,
    E as o,
    Ft as s,
    Ht as c,
    It as l,
    Lt as u,
    Nt as d,
    Ut as f,
    Vt as p,
    X as m,
    Y as h,
    a as g,
    b as _,
    d as v,
    g as y,
    gt as b,
    ht as x,
    lt as S,
    m as C,
    nt as w,
    s as T,
    tt as E,
    u as D,
    ut as O,
    x as k
} from "./Compact.js";
import {
    d as A,
    v as j
} from "./color.js";
import {
    t as M
} from "./es-2.js";
import {
    r as N
} from "./compact-item.js";
import {
    C as P,
    O as F
} from "./ContextIsolator.js";
import {
    r as ee
} from "./InfoCircleFilled.js";
import {
    t as I
} from "./useCSSVarCls.js";
import {
    n as L
} from "./es-3.js";
import {
    n as R
} from "./es-1.js";
import {
    c as z,
    n as B,
    o as V,
    t as H
} from "./EllipsisOutlined.js";
var U = e(t());
n();
var W = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z`
                }
            }, {
                tag: `path`,
                attrs: {
                    d: `M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z`
                }
            }]
        },
        name: `plus`,
        theme: `outlined`
    },
    G = U.forwardRef(function(e, t) {
        return U.createElement(N, r({}, e, {
            ref: t,
            icon: W
        }))
    }),
    K = e(f());
c(), u(), O(), w();
var te = (0, U.createContext)(null);
b();
var ne = function(e) {
        var t = e.activeTabOffset,
            n = e.horizontal,
            r = e.rtl,
            i = e.indicator,
            a = i === void 0 ? {} : i,
            o = a.size,
            s = a.align,
            c = s === void 0 ? `center` : s,
            l = (0, U.useState)(),
            u = S(l, 2),
            d = u[0],
            f = u[1],
            p = (0, U.useRef)(),
            m = U.useCallback(function(e) {
                return typeof o == `function` ? o(e) : typeof o == `number` ? o : e
            }, [o]);

        function h() {
            j.cancel(p.current)
        }
        return (0, U.useEffect)(function() {
            var e = {};
            if (t) {
                if (n) {
                    e.width = m(t.width);
                    var i = r ? `right` : `left`;
                    c === `start` && (e[i] = t[i]), c === `center` && (e[i] = t[i] + t.width / 2, e.transform = r ? `translateX(50%)` : `translateX(-50%)`), c === `end` && (e[i] = t[i] + t.width, e.transform = `translateX(-100%)`)
                } else e.height = m(t.height), c === `start` && (e.top = t.top), c === `center` && (e.top = t.top + t.height / 2, e.transform = `translateY(-50%)`), c === `end` && (e.top = t.top + t.height, e.transform = `translateY(-100%)`)
            }
            return h(), p.current = j(function() {
                d && e && Object.keys(e).every(function(t) {
                    var n = e[t],
                        r = d[t];
                    return typeof n == `number` && typeof r == `number` ? Math.round(n) === Math.round(r) : n === r
                }) || f(e)
            }), h
        }, [JSON.stringify(t), n, r, c, m]), {
            style: d
        }
    },
    re = {
        width: 0,
        height: 0,
        left: 0,
        top: 0
    };

function ie(e, t, n) {
    return (0, U.useMemo)(function() {
        for (var n, r = new Map, i = t.get((n = e[0]) == null ? void 0 : n.key) || re, a = i.left + i.width, o = 0; o < e.length; o += 1) {
            var c = e[o].key,
                l = t.get(c);
            if (!l) {
                var u;
                l = t.get((u = e[o - 1]) == null ? void 0 : u.key) || re
            }
            var d = r.get(c) || s({}, l);
            d.right = a - d.left - d.width, r.set(c, d)
        }
        return r
    }, [e.map(function(e) {
        return e.key
    }).join(`_`), t, n])
}
O();

function ae(e, t) {
    var n = U.useRef(e),
        r = U.useState({}),
        i = S(r, 2)[1];

    function a(e) {
        var r = typeof e == `function` ? e(n.current) : e;
        r !== n.current && t(r, n.current), n.current = r, i({})
    }
    return [n.current, a]
}
O();
var oe = .1,
    se = .01,
    q = 20,
    ce = .995 ** q;

function le(e, t) {
    var n = (0, U.useState)(),
        r = S(n, 2),
        i = r[0],
        a = r[1],
        o = (0, U.useState)(0),
        s = S(o, 2),
        c = s[0],
        l = s[1],
        u = (0, U.useState)(0),
        d = S(u, 2),
        f = d[0],
        p = d[1],
        m = (0, U.useState)(),
        h = S(m, 2),
        g = h[0],
        _ = h[1],
        v = (0, U.useRef)();

    function y(e) {
        var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
        a({
            x: n,
            y: r
        }), window.clearInterval(v.current)
    }

    function b(e) {
        if (i) {
            var n = e.touches[0],
                r = n.screenX,
                o = n.screenY;
            a({
                x: r,
                y: o
            });
            var s = r - i.x,
                u = o - i.y;
            t(s, u);
            var d = Date.now();
            l(d), p(d - c), _({
                x: s,
                y: u
            })
        }
    }

    function x() {
        if (i && (a(null), _(null), g)) {
            var e = g.x / f,
                n = g.y / f;
            if (Math.max(Math.abs(e), Math.abs(n)) < oe) return;
            var r = e,
                o = n;
            v.current = window.setInterval(function() {
                Math.abs(r) < se && Math.abs(o) < se ? window.clearInterval(v.current) : (r *= ce, o *= ce, t(r * q, o * q))
            }, q)
        }
    }
    var C = (0, U.useRef)();

    function w(e) {
        var n = e.deltaX,
            r = e.deltaY,
            i = 0,
            a = Math.abs(n),
            o = Math.abs(r);
        a === o ? i = C.current === `x` ? n : r : a > o ? (i = n, C.current = `x`) : (i = r, C.current = `y`), t(-i, -i) && e.preventDefault()
    }
    var T = (0, U.useRef)(null);
    T.current = {
        onTouchStart: y,
        onTouchMove: b,
        onTouchEnd: x,
        onWheel: w
    }, U.useEffect(function() {
        function t(e) {
            T.current.onTouchStart(e)
        }

        function n(e) {
            T.current.onTouchMove(e)
        }

        function r(e) {
            T.current.onTouchEnd(e)
        }

        function i(e) {
            T.current.onWheel(e)
        }
        return document.addEventListener(`touchmove`, n, {
                passive: !1
            }), document.addEventListener(`touchend`, r, {
                passive: !0
            }), e.current.addEventListener(`touchstart`, t, {
                passive: !0
            }), e.current.addEventListener(`wheel`, i, {
                passive: !1
            }),
            function() {
                document.removeEventListener(`touchmove`, n), document.removeEventListener(`touchend`, r)
            }
    }, [])
}
O();

function ue(e) {
    var t = (0, U.useState)(0),
        n = S(t, 2),
        r = n[0],
        i = n[1],
        a = (0, U.useRef)(0),
        o = (0, U.useRef)();
    return o.current = e, h(function() {
            var e;
            (e = o.current) == null || e.call(o)
        }, [r]),
        function() {
            a.current === r && (a.current += 1, i(a.current))
        }
}

function de(e) {
    var t = (0, U.useRef)([]),
        n = (0, U.useState)({}),
        r = S(n, 2)[1],
        i = (0, U.useRef)(typeof e == `function` ? e() : e),
        a = ue(function() {
            var e = i.current;
            t.current.forEach(function(t) {
                e = t(e)
            }), t.current = [], i.current = e, r({})
        });

    function o(e) {
        t.current.push(e), a()
    }
    return [i.current, o]
}
var fe = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    right: 0
};

function pe(e, t, n, r, i, a, o) {
    var s = o.tabs,
        c = o.tabPosition,
        l = o.rtl,
        u, d, f;
    return [`top`, `bottom`].includes(c) ? (u = `width`, d = l ? `right` : `left`, f = Math.abs(n)) : (u = `height`, d = `top`, f = -n), (0, U.useMemo)(function() {
        if (!s.length) return [0, 0];
        for (var n = s.length, r = n, i = 0; i < n; i += 1) {
            var a = e.get(s[i].key) || fe;
            if (Math.floor(a[d] + a[u]) > Math.floor(f + t)) {
                r = i - 1;
                break
            }
        }
        for (var o = 0, c = n - 1; c >= 0; --c)
            if ((e.get(s[c].key) || fe)[d] < f) {
                o = c + 1;
                break
            } return o > r ? [0, -1] : [o, r]
    }, [e, t, r, i, a, f, c, s.map(function(e) {
        return e.key
    }).join(`_`), l])
}

function me(e) {
    var t;
    return e instanceof Map ? (t = {}, e.forEach(function(e, n) {
        t[n] = e
    })) : t = e, JSON.stringify(t)
}
var he = `TABS_DQ`;

function ge(e) {
    return String(e).replace(/"/g, he)
}

function _e(e, t, n, r) {
    return !(!n || r || e === !1 || e === void 0 && (t === !1 || t === null))
}
var ve = U.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.editable,
            i = e.locale,
            a = e.style;
        return !r || r.showAdd === !1 ? null : U.createElement(`button`, {
            ref: t,
            type: `button`,
            className: `${n}-nav-add`,
            style: a,
            "aria-label": (i == null ? void 0 : i.addAriaLabel) || `Add tab`,
            onClick: function(e) {
                r.onEdit(`add`, {
                    event: e
                })
            }
        }, r.addIcon || `+`)
    }),
    ye = U.forwardRef(function(e, t) {
        var n = e.position,
            r = e.prefixCls,
            i = e.extra;
        if (!i) return null;
        var a, o = {};
        return p(i) === `object` && !U.isValidElement(i) ? o = i : o.right = i, n === `right` && (a = o.right), n === `left` && (a = o.left), a ? U.createElement(`div`, {
            className: `${r}-extra-content`,
            ref: t
        }, a) : null
    });
n(), O();
var be = U.forwardRef(function(e, t) {
        var n = e.prefixCls,
            i = e.id,
            a = e.tabs,
            o = e.locale,
            s = e.mobile,
            c = e.more,
            u = c === void 0 ? {} : c,
            d = e.style,
            f = e.className,
            p = e.editable,
            m = e.tabBarGutter,
            h = e.rtl,
            g = e.removeAriaLabel,
            _ = e.onTabClick,
            v = e.getPopupContainer,
            y = e.popupClassName,
            b = (0, U.useState)(!1),
            x = S(b, 2),
            C = x[0],
            w = x[1],
            T = (0, U.useState)(null),
            E = S(T, 2),
            D = E[0],
            O = E[1],
            k = u.icon,
            A = k === void 0 ? `More` : k,
            j = `${i}-more-popup`,
            M = `${n}-dropdown`,
            N = D === null ? null : `${j}-${D}`,
            P = o == null ? void 0 : o.dropdownAriaLabel;

        function ee(e, t) {
            e.preventDefault(), e.stopPropagation(), p.onEdit(`remove`, {
                key: t,
                event: e
            })
        }
        var I = U.createElement(B, {
            onClick: function(e) {
                var t = e.key,
                    n = e.domEvent;
                _(t, n), w(!1)
            },
            prefixCls: `${M}-menu`,
            id: j,
            tabIndex: -1,
            role: `listbox`,
            "aria-activedescendant": N,
            selectedKeys: [D],
            "aria-label": P === void 0 ? `expanded dropdown` : P
        }, a.map(function(e) {
            var t = e.closable,
                n = e.disabled,
                r = e.closeIcon,
                a = e.key,
                o = e.label,
                s = _e(t, r, p, n);
            return U.createElement(V, {
                key: a,
                id: `${j}-${a}`,
                role: `option`,
                "aria-controls": i && `${i}-panel-${a}`,
                disabled: n
            }, U.createElement(`span`, null, o), s && U.createElement(`button`, {
                type: `button`,
                "aria-label": g || `remove`,
                tabIndex: 0,
                className: `${M}-menu-item-remove`,
                onClick: function(e) {
                    e.stopPropagation(), ee(e, a)
                }
            }, r || p.removeIcon || `×`))
        }));

        function L(e) {
            for (var t = a.filter(function(e) {
                    return !e.disabled
                }), n = t.findIndex(function(e) {
                    return e.key === D
                }) || 0, r = t.length, i = 0; i < r; i += 1) {
                n = (n + e + r) % r;
                var o = t[n];
                if (!o.disabled) {
                    O(o.key);
                    return
                }
            }
        }

        function R(e) {
            var t = e.which;
            if (!C)[F.DOWN, F.SPACE, F.ENTER].includes(t) && (w(!0), e.preventDefault());
            else switch (t) {
                case F.UP:
                    L(-1), e.preventDefault();
                    break;
                case F.DOWN:
                    L(1), e.preventDefault();
                    break;
                case F.ESC:
                    w(!1);
                    break;
                case F.SPACE:
                case F.ENTER:
                    D !== null && _(D, e)
            }
        }(0, U.useEffect)(function() {
            var e = document.getElementById(N);
            e && e.scrollIntoView && e.scrollIntoView(!1)
        }, [D]), (0, U.useEffect)(function() {
            C || O(null)
        }, [C]);
        var H = l({}, h ? `marginRight` : `marginLeft`, m);
        a.length || (H.visibility = `hidden`, H.order = 1);
        var W = (0, K.default)(l({}, `${M}-rtl`, h)),
            G = s ? null : U.createElement(z, r({
                prefixCls: M,
                overlay: I,
                visible: a.length ? C : !1,
                onVisibleChange: w,
                overlayClassName: (0, K.default)(W, y),
                mouseEnterDelay: .1,
                mouseLeaveDelay: .1,
                getPopupContainer: v
            }, u), U.createElement(`button`, {
                type: `button`,
                className: `${n}-nav-more`,
                style: H,
                "aria-haspopup": `listbox`,
                "aria-controls": j,
                id: `${i}-more`,
                "aria-expanded": C,
                onKeyDown: R
            }, A));
        return U.createElement(`div`, {
            className: (0, K.default)(`${n}-nav-operations`, f),
            style: d,
            ref: t
        }, G, U.createElement(ve, {
            prefixCls: n,
            locale: o,
            editable: p
        }))
    }),
    xe = U.memo(be, function(e, t) {
        return t.tabMoving
    });
u();
var Se = function(e) {
    var t = e.prefixCls,
        n = e.id,
        r = e.active,
        i = e.focus,
        a = e.tab,
        o = a.key,
        s = a.label,
        c = a.disabled,
        u = a.closeIcon,
        d = a.icon,
        f = e.closable,
        p = e.renderWrapper,
        m = e.removeAriaLabel,
        h = e.editable,
        g = e.onClick,
        _ = e.onFocus,
        v = e.onBlur,
        y = e.onKeyDown,
        b = e.onMouseDown,
        x = e.onMouseUp,
        S = e.style,
        C = e.tabCount,
        w = e.currentPosition,
        T = `${t}-tab`,
        E = _e(f, u, h, c);

    function D(e) {
        c || g(e)
    }

    function O(e) {
        e.preventDefault(), e.stopPropagation(), h.onEdit(`remove`, {
            key: o,
            event: e
        })
    }
    var k = U.useMemo(function() {
            return d && typeof s == `string` ? U.createElement(`span`, null, s) : s
        }, [s, d]),
        A = U.useRef(null);
    U.useEffect(function() {
        i && A.current && A.current.focus()
    }, [i]);
    var j = U.createElement(`div`, {
        key: o,
        "data-node-key": ge(o),
        className: (0, K.default)(T, l(l(l(l({}, `${T}-with-remove`, E), `${T}-active`, r), `${T}-disabled`, c), `${T}-focus`, i)),
        style: S,
        onClick: D
    }, U.createElement(`div`, {
        ref: A,
        role: `tab`,
        "aria-selected": r,
        id: n && `${n}-tab-${o}`,
        className: `${T}-btn`,
        "aria-controls": n && `${n}-panel-${o}`,
        "aria-disabled": c,
        tabIndex: c ? null : r ? 0 : -1,
        onClick: function(e) {
            e.stopPropagation(), D(e)
        },
        onKeyDown: y,
        onMouseDown: b,
        onMouseUp: x,
        onFocus: _,
        onBlur: v
    }, i && U.createElement(`div`, {
        "aria-live": `polite`,
        style: {
            width: 0,
            height: 0,
            position: `absolute`,
            overflow: `hidden`,
            opacity: 0
        }
    }, `Tab ${w} of ${C}`), d && U.createElement(`span`, {
        className: `${T}-icon`
    }, d), s && k), E && U.createElement(`button`, {
        type: `button`,
        role: `tab`,
        "aria-label": m || `remove`,
        tabIndex: r ? 0 : -1,
        className: `${T}-remove`,
        onClick: function(e) {
            e.stopPropagation(), O(e)
        }
    }, u || h.removeIcon || `×`));
    return p ? p(j) : j
};
n(), u(), O();
var Ce = function(e, t) {
        var n = e.offsetWidth,
            r = e.offsetHeight,
            i = e.offsetTop,
            a = e.offsetLeft,
            o = e.getBoundingClientRect(),
            s = o.width,
            c = o.height,
            l = o.left,
            u = o.top;
        return Math.abs(s - n) < 1 ? [s, c, l - t.left, u - t.top] : [n, r, a, i]
    },
    J = function(e) {
        var t = e.current || {},
            n = t.offsetWidth,
            r = n === void 0 ? 0 : n,
            i = t.offsetHeight,
            a = i === void 0 ? 0 : i;
        if (e.current) {
            var o = e.current.getBoundingClientRect(),
                s = o.width,
                c = o.height;
            if (Math.abs(s - r) < 1) return [s, c]
        }
        return [r, a]
    },
    we = function(e, t) {
        return e[+!t]
    },
    Te = U.forwardRef(function(e, t) {
        var n = e.className,
            i = e.style,
            o = e.id,
            c = e.animated,
            u = e.activeKey,
            f = e.rtl,
            p = e.extra,
            m = e.editable,
            h = e.locale,
            g = e.tabPosition,
            _ = e.tabBarGutter,
            v = e.children,
            y = e.onTabClick,
            b = e.onTabScroll,
            C = e.indicator,
            w = U.useContext(te),
            T = w.prefixCls,
            E = w.tabs,
            D = (0, U.useRef)(null),
            O = (0, U.useRef)(null),
            k = (0, U.useRef)(null),
            A = (0, U.useRef)(null),
            j = (0, U.useRef)(null),
            N = (0, U.useRef)(null),
            P = (0, U.useRef)(null),
            F = g === `top` || g === `bottom`,
            ee = ae(0, function(e, t) {
                F && b && b({
                    direction: e > t ? `left` : `right`
                })
            }),
            I = S(ee, 2),
            L = I[0],
            R = I[1],
            z = ae(0, function(e, t) {
                !F && b && b({
                    direction: e > t ? `top` : `bottom`
                })
            }),
            B = S(z, 2),
            V = B[0],
            H = B[1],
            W = (0, U.useState)([0, 0]),
            G = S(W, 2),
            re = G[0],
            oe = G[1],
            se = (0, U.useState)([0, 0]),
            q = S(se, 2),
            ce = q[0],
            fe = q[1],
            he = (0, U.useState)([0, 0]),
            be = S(he, 2),
            Te = be[0],
            Ee = be[1],
            De = (0, U.useState)([0, 0]),
            Oe = S(De, 2),
            ke = Oe[0],
            Ae = Oe[1],
            je = de(new Map),
            Me = S(je, 2),
            Ne = Me[0],
            Pe = Me[1],
            Fe = ie(E, Ne, ce[0]),
            Ie = we(re, F),
            Le = we(ce, F),
            Re = we(Te, F),
            ze = we(ke, F),
            Be = Math.floor(Ie) < Math.floor(Le + Re),
            Y = Be ? Ie - ze : Ie - Re,
            Ve = `${T}-nav-operations-hidden`,
            X = 0,
            Z = 0;
        F && f ? (X = 0, Z = Math.max(0, Le - Y)) : (X = Math.min(0, Y - Le), Z = 0);

        function He(e) {
            return e < X ? X : e > Z ? Z : e
        }
        var Ue = (0, U.useRef)(null),
            We = (0, U.useState)(),
            Ge = S(We, 2),
            Ke = Ge[0],
            qe = Ge[1];

        function Je() {
            qe(Date.now())
        }

        function Ye() {
            Ue.current && clearTimeout(Ue.current)
        }
        le(A, function(e, t) {
            function n(e, t) {
                e(function(e) {
                    return He(e + t)
                })
            }
            return Be ? (F ? n(R, e) : n(H, t), Ye(), Je(), !0) : !1
        }), (0, U.useEffect)(function() {
            return Ye(), Ke && (Ue.current = setTimeout(function() {
                qe(0)
            }, 100)), Ye
        }, [Ke]);
        var Xe = pe(Fe, Y, F ? L : V, Le, Re, ze, s(s({}, e), {}, {
                tabs: E
            })),
            Ze = S(Xe, 2),
            Qe = Ze[0],
            $e = Ze[1],
            et = a(function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u,
                    t = Fe.get(e) || {
                        width: 0,
                        height: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    };
                if (F) {
                    var n = L;
                    f ? t.right < L ? n = t.right : t.right + t.width > L + Y && (n = t.right + t.width - Y) : t.left < -L ? n = -t.left : t.left + t.width > -L + Y && (n = -(t.left + t.width - Y)), H(0), R(He(n))
                } else {
                    var r = V;
                    t.top < -V ? r = -t.top : t.top + t.height > -V + Y && (r = -(t.top + t.height - Y)), R(0), H(He(r))
                }
            }),
            tt = (0, U.useState)(),
            nt = S(tt, 2),
            rt = nt[0],
            it = nt[1],
            at = (0, U.useState)(!1),
            ot = S(at, 2),
            st = ot[0],
            ct = ot[1],
            Q = E.filter(function(e) {
                return !e.disabled
            }).map(function(e) {
                return e.key
            }),
            $ = function(e) {
                var t = Q.indexOf(rt || u),
                    n = Q.length,
                    r = Q[(t + e + n) % n];
                it(r)
            },
            lt = function(e, t) {
                var n = Q.indexOf(e),
                    r = E.find(function(t) {
                        return t.key === e
                    });
                _e(r == null ? void 0 : r.closable, r == null ? void 0 : r.closeIcon, m, r == null ? void 0 : r.disabled) && (t.preventDefault(), t.stopPropagation(), m.onEdit(`remove`, {
                    key: e,
                    event: t
                }), n === Q.length - 1 ? $(-1) : $(1))
            },
            ut = function(e, t) {
                ct(!0), t.button === 1 && lt(e, t)
            },
            dt = function(e) {
                var t = e.code,
                    n = f && F,
                    r = Q[0],
                    i = Q[Q.length - 1];
                switch (t) {
                    case `ArrowLeft`:
                        F && $(n ? 1 : -1);
                        break;
                    case `ArrowRight`:
                        F && $(n ? -1 : 1);
                        break;
                    case `ArrowUp`:
                        e.preventDefault(), F || $(-1);
                        break;
                    case `ArrowDown`:
                        e.preventDefault(), F || $(1);
                        break;
                    case `Home`:
                        e.preventDefault(), it(r);
                        break;
                    case `End`:
                        e.preventDefault(), it(i);
                        break;
                    case `Enter`:
                    case `Space`:
                        e.preventDefault(), y(rt ?? u, e);
                        break;
                    case `Backspace`:
                    case `Delete`:
                        lt(rt, e)
                }
            },
            ft = {};
        F ? ft[f ? `marginRight` : `marginLeft`] = _ : ft.marginTop = _;
        var pt = E.map(function(e, t) {
                var n = e.key;
                return U.createElement(Se, {
                    id: o,
                    prefixCls: T,
                    key: n,
                    tab: e,
                    style: t === 0 ? void 0 : ft,
                    closable: e.closable,
                    editable: m,
                    active: n === u,
                    focus: n === rt,
                    renderWrapper: v,
                    removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
                    tabCount: Q.length,
                    currentPosition: t + 1,
                    onClick: function(e) {
                        y(n, e)
                    },
                    onKeyDown: dt,
                    onFocus: function() {
                        st || it(n), et(n), Je(), A.current && (f || (A.current.scrollLeft = 0), A.current.scrollTop = 0)
                    },
                    onBlur: function() {
                        it(void 0)
                    },
                    onMouseDown: function(e) {
                        return ut(n, e)
                    },
                    onMouseUp: function() {
                        ct(!1)
                    }
                })
            }),
            mt = function() {
                return Pe(function() {
                    var e, t = new Map,
                        n = (e = j.current) == null ? void 0 : e.getBoundingClientRect();
                    return E.forEach(function(e) {
                        var r, i = e.key,
                            a = (r = j.current) == null ? void 0 : r.querySelector(`[data-node-key="${ge(i)}"]`);
                        if (a) {
                            var o = Ce(a, n),
                                s = S(o, 4),
                                c = s[0],
                                l = s[1],
                                u = s[2],
                                d = s[3];
                            t.set(i, {
                                width: c,
                                height: l,
                                left: u,
                                top: d
                            })
                        }
                    }), t
                })
            };
        (0, U.useEffect)(function() {
            mt()
        }, [E.map(function(e) {
            return e.key
        }).join(`_`)]);
        var ht = ue(function() {
                var e = J(D),
                    t = J(O),
                    n = J(k);
                oe([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
                var r = J(P);
                Ee(r), Ae(J(N));
                var i = J(j);
                fe([i[0] - r[0], i[1] - r[1]]), mt()
            }),
            gt = E.slice(0, Qe),
            _t = E.slice($e + 1),
            vt = [].concat(x(gt), x(_t)),
            yt = Fe.get(u),
            bt = ne({
                activeTabOffset: yt,
                horizontal: F,
                indicator: C,
                rtl: f
            }).style;
        (0, U.useEffect)(function() {
            et()
        }, [u, X, Z, me(yt), me(Fe), F]), (0, U.useEffect)(function() {
            ht()
        }, [f]);
        var xt = !!vt.length,
            St = `${T}-nav-wrap`,
            Ct, wt, Tt, Et;
        return F ? f ? (wt = L > 0, Ct = L !== Z) : (Ct = L < 0, wt = L !== X) : (Tt = V < 0, Et = V !== X), U.createElement(M, {
            onResize: ht
        }, U.createElement(`div`, {
            ref: d(t, D),
            role: `tablist`,
            "aria-orientation": F ? `horizontal` : `vertical`,
            className: (0, K.default)(`${T}-nav`, n),
            style: i,
            onKeyDown: function() {
                Je()
            }
        }, U.createElement(ye, {
            ref: O,
            position: `left`,
            extra: p,
            prefixCls: T
        }), U.createElement(M, {
            onResize: ht
        }, U.createElement(`div`, {
            className: (0, K.default)(St, l(l(l(l({}, `${St}-ping-left`, Ct), `${St}-ping-right`, wt), `${St}-ping-top`, Tt), `${St}-ping-bottom`, Et)),
            ref: A
        }, U.createElement(M, {
            onResize: ht
        }, U.createElement(`div`, {
            ref: j,
            className: `${T}-nav-list`,
            style: {
                transform: `translate(${L}px, ${V}px)`,
                transition: Ke ? `none` : void 0
            }
        }, pt, U.createElement(ve, {
            ref: P,
            prefixCls: T,
            locale: h,
            editable: m,
            style: s(s({}, pt.length === 0 ? void 0 : ft), {}, {
                visibility: xt ? `hidden` : null
            })
        }), U.createElement(`div`, {
            className: (0, K.default)(`${T}-ink-bar`, l({}, `${T}-ink-bar-animated`, c.inkBar)),
            style: bt
        }))))), U.createElement(xe, r({}, e, {
            removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
            ref: N,
            prefixCls: T,
            tabs: vt,
            className: !xt && Ve,
            tabMoving: !!Ke
        })), U.createElement(ye, {
            ref: k,
            position: `right`,
            extra: p,
            prefixCls: T
        })))
    }),
    Ee = U.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.className,
            i = e.style,
            a = e.id,
            o = e.active,
            s = e.tabKey,
            c = e.children;
        return U.createElement(`div`, {
            id: a && `${a}-panel-${s}`,
            role: `tabpanel`,
            tabIndex: o ? 0 : -1,
            "aria-labelledby": a && `${a}-tab-${s}`,
            "aria-hidden": !o,
            style: i,
            className: (0, K.default)(n, o && `${n}-active`, r),
            ref: t
        }, c)
    });
n();
var De = [`renderTabBar`],
    Oe = [`label`, `key`],
    ke = function(e) {
        var t = e.renderTabBar,
            n = E(e, De),
            i = U.useContext(te).tabs;
        return t ? t(s(s({}, n), {}, {
            panes: i.map(function(e) {
                var t = e.label,
                    n = e.key,
                    i = E(e, Oe);
                return U.createElement(Ee, r({
                    tab: t,
                    key: n,
                    tabKey: n
                }, i))
            })
        }), Te) : U.createElement(Te, n)
    };
n(), w(), u();
var Ae = [`key`, `forceRender`, `style`, `className`, `destroyInactiveTabPane`],
    je = function(e) {
        var t = e.id,
            n = e.activeKey,
            i = e.animated,
            a = e.tabPosition,
            o = e.destroyInactiveTabPane,
            c = U.useContext(te),
            u = c.prefixCls,
            d = c.tabs,
            f = i.tabPane,
            p = `${u}-tabpane`;
        return U.createElement(`div`, {
            className: (0, K.default)(`${u}-content-holder`)
        }, U.createElement(`div`, {
            className: (0, K.default)(`${u}-content`, `${u}-content-${a}`, l({}, `${u}-content-animated`, f))
        }, d.map(function(e) {
            var a = e.key,
                c = e.forceRender,
                l = e.style,
                u = e.className,
                d = e.destroyInactiveTabPane,
                m = E(e, Ae),
                h = a === n;
            return U.createElement(A, r({
                key: a,
                visible: h,
                forceRender: c,
                removeOnLeave: !!(o || d),
                leavedClassName: `${p}-hidden`
            }, i.tabPaneMotion), function(e, n) {
                var i = e.style,
                    o = e.className;
                return U.createElement(Ee, r({}, m, {
                    prefixCls: p,
                    id: t,
                    tabKey: a,
                    animated: f,
                    active: h,
                    style: s(s({}, l), i),
                    className: (0, K.default)(u, o),
                    ref: n
                }))
            })
        })))
    };
c();

function Me() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            inkBar: !0,
            tabPane: !1
        },
        t = e === !1 ? {
            inkBar: !1,
            tabPane: !1
        } : e === !0 ? {
            inkBar: !0,
            tabPane: !1
        } : s({
            inkBar: !0
        }, p(e) === `object` ? e : {});
    return t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (t.tabPane = !1), t
}
n(), u(), O(), c(), w();
var Ne = [`id`, `prefixCls`, `className`, `items`, `direction`, `activeKey`, `defaultActiveKey`, `editable`, `animated`, `tabPosition`, `tabBarGutter`, `tabBarStyle`, `tabBarExtraContent`, `locale`, `more`, `destroyInactiveTabPane`, `renderTabBar`, `onChange`, `onTabClick`, `onTabScroll`, `getPopupContainer`, `popupClassName`, `indicator`],
    Pe = 0,
    Fe = U.forwardRef(function(e, t) {
        var n = e.id,
            i = e.prefixCls,
            a = i === void 0 ? `rc-tabs` : i,
            o = e.className,
            c = e.items,
            u = e.direction,
            d = e.activeKey,
            f = e.defaultActiveKey,
            m = e.editable,
            h = e.animated,
            g = e.tabPosition,
            _ = g === void 0 ? `top` : g,
            v = e.tabBarGutter,
            y = e.tabBarStyle,
            b = e.tabBarExtraContent,
            x = e.locale,
            C = e.more,
            w = e.destroyInactiveTabPane,
            T = e.renderTabBar,
            D = e.onChange,
            O = e.onTabClick,
            A = e.onTabScroll,
            j = e.getPopupContainer,
            M = e.popupClassName,
            N = e.indicator,
            P = E(e, Ne),
            F = U.useMemo(function() {
                return (c || []).filter(function(e) {
                    return e && p(e) === `object` && `key` in e
                })
            }, [c]),
            ee = u === `rtl`,
            I = Me(h),
            L = (0, U.useState)(!1),
            z = S(L, 2),
            B = z[0],
            V = z[1];
        (0, U.useEffect)(function() {
            V(R())
        }, []);
        var H = k(function() {
                var e;
                return (e = F[0]) == null ? void 0 : e.key
            }, {
                value: d,
                defaultValue: f
            }),
            W = S(H, 2),
            G = W[0],
            ne = W[1],
            re = (0, U.useState)(function() {
                return F.findIndex(function(e) {
                    return e.key === G
                })
            }),
            ie = S(re, 2),
            ae = ie[0],
            oe = ie[1];
        (0, U.useEffect)(function() {
            var e = F.findIndex(function(e) {
                return e.key === G
            });
            if (e === -1) {
                var t;
                e = Math.max(0, Math.min(ae, F.length - 1)), ne((t = F[e]) == null ? void 0 : t.key)
            }
            oe(e)
        }, [F.map(function(e) {
            return e.key
        }).join(`_`), G, ae]);
        var se = k(null, {
                value: n
            }),
            q = S(se, 2),
            ce = q[0],
            le = q[1];
        (0, U.useEffect)(function() {
            n || (le(`rc-tabs-${Pe}`), Pe += 1)
        }, []);

        function ue(e, t) {
            O == null || O(e, t);
            var n = e !== G;
            ne(e), n && (D == null || D(e))
        }
        var de = {
                id: ce,
                activeKey: G,
                animated: I,
                tabPosition: _,
                rtl: ee,
                mobile: B
            },
            fe = s(s({}, de), {}, {
                editable: m,
                locale: x,
                more: C,
                tabBarGutter: v,
                onTabClick: ue,
                onTabScroll: A,
                extra: b,
                style: y,
                panes: null,
                getPopupContainer: j,
                popupClassName: M,
                indicator: N
            });
        return U.createElement(te.Provider, {
            value: {
                tabs: F,
                prefixCls: a
            }
        }, U.createElement(`div`, r({
            ref: t,
            id: n,
            className: (0, K.default)(a, `${a}-${_}`, l(l(l({}, `${a}-mobile`, B), `${a}-editable`, m), `${a}-rtl`, ee), o)
        }, P), U.createElement(ke, r({}, fe, {
            renderTabBar: T
        })), U.createElement(je, r({
            destroyInactiveTabPane: w
        }, de, {
            animated: I
        }))))
    }),
    Ie = {
        motionAppear: !1,
        motionEnter: !0,
        motionLeave: !0
    };

function Le(e, t = {
    inkBar: !0,
    tabPane: !1
}) {
    let n;
    return n = t === !1 ? {
        inkBar: !1,
        tabPane: !1
    } : t === !0 ? {
        inkBar: !0,
        tabPane: !0
    } : Object.assign({
        inkBar: !0
    }, typeof t == `object` ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, Ie), {
        motionName: P(e, `switch`)
    })), n
}
var Re = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

function ze(e) {
    return e.filter(e => e)
}

function Be(e, t) {
    return e ? e.map(e => {
        let t = e.destroyOnHidden ?? e.destroyInactiveTabPane;
        return Object.assign(Object.assign({}, e), {
            destroyInactiveTabPane: t
        })
    }) : ze(i(t).map(e => {
        if (U.isValidElement(e)) {
            let {
                key: t,
                props: n
            } = e, r = n || {}, {
                tab: i
            } = r, a = Re(r, [`tab`]);
            return Object.assign(Object.assign({
                key: String(t)
            }, a), {
                label: i
            })
        }
        return null
    }))
}
var Y = e => {
        let {
            componentCls: t,
            motionDurationSlow: n
        } = e;
        return [{
                [t]: {
                    [`${t}-switch`]: {
                        "&-appear, &-enter": {
                            transition: `none`,
                            "&-start": {
                                opacity: 0
                            },
                            "&-active": {
                                opacity: 1,
                                transition: `opacity ${n}`
                            }
                        },
                        "&-leave": {
                            position: `absolute`,
                            transition: `none`,
                            inset: 0,
                            "&-start": {
                                opacity: 1
                            },
                            "&-active": {
                                opacity: 0,
                                transition: `opacity ${n}`
                            }
                        }
                    }
                }
            },
            [L(e, `slide-up`), L(e, `slide-down`)]
        ]
    },
    Ve = e => {
        let {
            componentCls: t,
            tabsCardPadding: n,
            cardBg: r,
            cardGutter: i,
            colorBorderSecondary: a,
            itemSelectedColor: o
        } = e;
        return {
            [`${t}-card`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab`]: {
                        margin: 0,
                        padding: n,
                        background: r,
                        border: `${m(e.lineWidth)} ${e.lineType} ${a}`,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
                    },
                    [`${t}-tab-active`]: {
                        color: o,
                        background: e.colorBgContainer
                    },
                    [`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: D(e, -3),
                    [`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
                        outline: `none`
                    },
                    [`${t}-ink-bar`]: {
                        visibility: `hidden`
                    }
                },
                [`&${t}-top, &${t}-bottom`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab + ${t}-tab`]: {
                            marginLeft: {
                                _skip_check_: !0,
                                value: m(i)
                            }
                        }
                    }
                },
                [`&${t}-top`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab`]: {
                            borderRadius: `${m(e.borderRadiusLG)} ${m(e.borderRadiusLG)} 0 0`
                        },
                        [`${t}-tab-active`]: {
                            borderBottomColor: e.colorBgContainer
                        }
                    }
                },
                [`&${t}-bottom`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab`]: {
                            borderRadius: `0 0 ${m(e.borderRadiusLG)} ${m(e.borderRadiusLG)}`
                        },
                        [`${t}-tab-active`]: {
                            borderTopColor: e.colorBgContainer
                        }
                    }
                },
                [`&${t}-left, &${t}-right`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab + ${t}-tab`]: {
                            marginTop: m(i)
                        }
                    }
                },
                [`&${t}-left`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab`]: {
                            borderRadius: {
                                _skip_check_: !0,
                                value: `${m(e.borderRadiusLG)} 0 0 ${m(e.borderRadiusLG)}`
                            }
                        },
                        [`${t}-tab-active`]: {
                            borderRightColor: {
                                _skip_check_: !0,
                                value: e.colorBgContainer
                            }
                        }
                    }
                },
                [`&${t}-right`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab`]: {
                            borderRadius: {
                                _skip_check_: !0,
                                value: `0 ${m(e.borderRadiusLG)} ${m(e.borderRadiusLG)} 0`
                            }
                        },
                        [`${t}-tab-active`]: {
                            borderLeftColor: {
                                _skip_check_: !0,
                                value: e.colorBgContainer
                            }
                        }
                    }
                }
            }
        }
    },
    X = e => {
        let {
            componentCls: t,
            itemHoverColor: n,
            dropdownEdgeChildVerticalPadding: r
        } = e;
        return {
            [`${t}-dropdown`]: Object.assign(Object.assign({}, C(e)), {
                position: `absolute`,
                top: -9999,
                left: {
                    _skip_check_: !0,
                    value: -9999
                },
                zIndex: e.zIndexPopup,
                display: `block`,
                "&-hidden": {
                    display: `none`
                },
                [`${t}-dropdown-menu`]: {
                    maxHeight: e.tabsDropdownHeight,
                    margin: 0,
                    padding: `${m(r)} 0`,
                    overflowX: `hidden`,
                    overflowY: `auto`,
                    textAlign: {
                        _skip_check_: !0,
                        value: `left`
                    },
                    listStyleType: `none`,
                    backgroundColor: e.colorBgContainer,
                    backgroundClip: `padding-box`,
                    borderRadius: e.borderRadiusLG,
                    outline: `none`,
                    boxShadow: e.boxShadowSecondary,
                    "&-item": Object.assign(Object.assign({}, y), {
                        display: `flex`,
                        alignItems: `center`,
                        minWidth: e.tabsDropdownWidth,
                        margin: 0,
                        padding: `${m(e.paddingXXS)} ${m(e.paddingSM)}`,
                        color: e.colorText,
                        fontWeight: `normal`,
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight,
                        cursor: `pointer`,
                        transition: `all ${e.motionDurationSlow}`,
                        "> span": {
                            flex: 1,
                            whiteSpace: `nowrap`
                        },
                        "&-remove": {
                            flex: `none`,
                            marginLeft: {
                                _skip_check_: !0,
                                value: e.marginSM
                            },
                            color: e.colorIcon,
                            fontSize: e.fontSizeSM,
                            background: `transparent`,
                            border: 0,
                            cursor: `pointer`,
                            "&:hover": {
                                color: n
                            }
                        },
                        "&:hover": {
                            background: e.controlItemBgHover
                        },
                        "&-disabled": {
                            "&, &:hover": {
                                color: e.colorTextDisabled,
                                background: `transparent`,
                                cursor: `not-allowed`
                            }
                        }
                    })
                }
            })
        }
    },
    Z = e => {
        let {
            componentCls: t,
            margin: n,
            colorBorderSecondary: r,
            horizontalMargin: i,
            verticalItemPadding: a,
            verticalItemMargin: o,
            calc: s
        } = e;
        return {
            [`${t}-top, ${t}-bottom`]: {
                flexDirection: `column`,
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    margin: i,
                    "&::before": {
                        position: `absolute`,
                        right: {
                            _skip_check_: !0,
                            value: 0
                        },
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        borderBottom: `${m(e.lineWidth)} ${e.lineType} ${r}`,
                        content: `''`
                    },
                    [`${t}-ink-bar`]: {
                        height: e.lineWidthBold,
                        "&-animated": {
                            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
                        }
                    },
                    [`${t}-nav-wrap`]: {
                        "&::before, &::after": {
                            top: 0,
                            bottom: 0,
                            width: e.controlHeight
                        },
                        "&::before": {
                            left: {
                                _skip_check_: !0,
                                value: 0
                            },
                            boxShadow: e.boxShadowTabsOverflowLeft
                        },
                        "&::after": {
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            boxShadow: e.boxShadowTabsOverflowRight
                        },
                        [`&${t}-nav-wrap-ping-left::before`]: {
                            opacity: 1
                        },
                        [`&${t}-nav-wrap-ping-right::after`]: {
                            opacity: 1
                        }
                    }
                }
            },
            [`${t}-top`]: {
                [`> ${t}-nav,
        > div > ${t}-nav`]: {
                    "&::before": {
                        bottom: 0
                    },
                    [`${t}-ink-bar`]: {
                        bottom: 0
                    }
                }
            },
            [`${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    order: 1,
                    marginTop: n,
                    marginBottom: 0,
                    "&::before": {
                        top: 0
                    },
                    [`${t}-ink-bar`]: {
                        top: 0
                    }
                },
                [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                    order: 0
                }
            },
            [`${t}-left, ${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    flexDirection: `column`,
                    minWidth: s(e.controlHeight).mul(1.25).equal(),
                    [`${t}-tab`]: {
                        padding: a,
                        textAlign: `center`
                    },
                    [`${t}-tab + ${t}-tab`]: {
                        margin: o
                    },
                    [`${t}-nav-wrap`]: {
                        flexDirection: `column`,
                        "&::before, &::after": {
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            left: {
                                _skip_check_: !0,
                                value: 0
                            },
                            height: e.controlHeight
                        },
                        "&::before": {
                            top: 0,
                            boxShadow: e.boxShadowTabsOverflowTop
                        },
                        "&::after": {
                            bottom: 0,
                            boxShadow: e.boxShadowTabsOverflowBottom
                        },
                        [`&${t}-nav-wrap-ping-top::before`]: {
                            opacity: 1
                        },
                        [`&${t}-nav-wrap-ping-bottom::after`]: {
                            opacity: 1
                        }
                    },
                    [`${t}-ink-bar`]: {
                        width: e.lineWidthBold,
                        "&-animated": {
                            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
                        }
                    },
                    [`${t}-nav-list, ${t}-nav-operations`]: {
                        flex: `1 0 auto`,
                        flexDirection: `column`
                    }
                }
            },
            [`${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-ink-bar`]: {
                        right: {
                            _skip_check_: !0,
                            value: 0
                        }
                    }
                },
                [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                    marginLeft: {
                        _skip_check_: !0,
                        value: m(s(e.lineWidth).mul(-1).equal())
                    },
                    borderLeft: {
                        _skip_check_: !0,
                        value: `${m(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
                    },
                    [`> ${t}-content > ${t}-tabpane`]: {
                        paddingLeft: {
                            _skip_check_: !0,
                            value: e.paddingLG
                        }
                    }
                }
            },
            [`${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    order: 1,
                    [`${t}-ink-bar`]: {
                        left: {
                            _skip_check_: !0,
                            value: 0
                        }
                    }
                },
                [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                    order: 0,
                    marginRight: {
                        _skip_check_: !0,
                        value: s(e.lineWidth).mul(-1).equal()
                    },
                    borderRight: {
                        _skip_check_: !0,
                        value: `${m(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
                    },
                    [`> ${t}-content > ${t}-tabpane`]: {
                        paddingRight: {
                            _skip_check_: !0,
                            value: e.paddingLG
                        }
                    }
                }
            }
        }
    },
    He = e => {
        let {
            componentCls: t,
            cardPaddingSM: n,
            cardPaddingLG: r,
            cardHeightSM: i,
            cardHeightLG: a,
            horizontalItemPaddingSM: o,
            horizontalItemPaddingLG: s
        } = e;
        return {
            [t]: {
                "&-small": {
                    [`> ${t}-nav`]: {
                        [`${t}-tab`]: {
                            padding: o,
                            fontSize: e.titleFontSizeSM
                        }
                    }
                },
                "&-large": {
                    [`> ${t}-nav`]: {
                        [`${t}-tab`]: {
                            padding: s,
                            fontSize: e.titleFontSizeLG,
                            lineHeight: e.lineHeightLG
                        }
                    }
                }
            },
            [`${t}-card`]: {
                [`&${t}-small`]: {
                    [`> ${t}-nav`]: {
                        [`${t}-tab`]: {
                            padding: n
                        },
                        [`${t}-nav-add`]: {
                            minWidth: i,
                            minHeight: i
                        }
                    },
                    [`&${t}-bottom`]: {
                        [`> ${t}-nav ${t}-tab`]: {
                            borderRadius: `0 0 ${m(e.borderRadius)} ${m(e.borderRadius)}`
                        }
                    },
                    [`&${t}-top`]: {
                        [`> ${t}-nav ${t}-tab`]: {
                            borderRadius: `${m(e.borderRadius)} ${m(e.borderRadius)} 0 0`
                        }
                    },
                    [`&${t}-right`]: {
                        [`> ${t}-nav ${t}-tab`]: {
                            borderRadius: {
                                _skip_check_: !0,
                                value: `0 ${m(e.borderRadius)} ${m(e.borderRadius)} 0`
                            }
                        }
                    },
                    [`&${t}-left`]: {
                        [`> ${t}-nav ${t}-tab`]: {
                            borderRadius: {
                                _skip_check_: !0,
                                value: `${m(e.borderRadius)} 0 0 ${m(e.borderRadius)}`
                            }
                        }
                    }
                },
                [`&${t}-large`]: {
                    [`> ${t}-nav`]: {
                        [`${t}-tab`]: {
                            padding: r
                        },
                        [`${t}-nav-add`]: {
                            minWidth: a,
                            minHeight: a
                        }
                    }
                }
            }
        }
    },
    Ue = e => {
        let {
            componentCls: t,
            itemActiveColor: n,
            itemHoverColor: r,
            iconCls: i,
            tabsHorizontalItemMargin: a,
            horizontalItemPadding: o,
            itemSelectedColor: s,
            itemColor: c
        } = e, l = `${t}-tab`;
        return {
            [l]: {
                position: `relative`,
                WebkitTouchCallout: `none`,
                WebkitTapHighlightColor: `transparent`,
                display: `inline-flex`,
                alignItems: `center`,
                padding: o,
                fontSize: e.titleFontSize,
                background: `transparent`,
                border: 0,
                outline: `none`,
                cursor: `pointer`,
                color: c,
                "&-btn, &-remove": {
                    "&:focus:not(:focus-visible), &:active": {
                        color: n
                    }
                },
                "&-btn": {
                    outline: `none`,
                    transition: `all ${e.motionDurationSlow}`,
                    [`${l}-icon:not(:last-child)`]: {
                        marginInlineEnd: e.marginSM
                    }
                },
                "&-remove": Object.assign({
                    flex: `none`,
                    marginRight: {
                        _skip_check_: !0,
                        value: e.calc(e.marginXXS).mul(-1).equal()
                    },
                    marginLeft: {
                        _skip_check_: !0,
                        value: e.marginXS
                    },
                    color: e.colorIcon,
                    fontSize: e.fontSizeSM,
                    background: `transparent`,
                    border: `none`,
                    outline: `none`,
                    cursor: `pointer`,
                    transition: `all ${e.motionDurationSlow}`,
                    "&:hover": {
                        color: e.colorTextHeading
                    }
                }, v(e)),
                "&:hover": {
                    color: r
                },
                [`&${l}-active ${l}-btn`]: {
                    color: s,
                    textShadow: e.tabsActiveTextShadow
                },
                [`&${l}-focus ${l}-btn:focus-visible`]: D(e),
                [`&${l}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: `not-allowed`
                },
                [`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: {
                    "&:focus, &:active": {
                        color: e.colorTextDisabled
                    }
                },
                [`& ${l}-remove ${i}`]: {
                    margin: 0
                },
                [`${i}:not(:last-child)`]: {
                    marginRight: {
                        _skip_check_: !0,
                        value: e.marginSM
                    }
                }
            },
            [`${l} + ${l}`]: {
                margin: {
                    _skip_check_: !0,
                    value: a
                }
            }
        }
    },
    We = e => {
        let {
            componentCls: t,
            tabsHorizontalItemMarginRTL: n,
            iconCls: r,
            cardGutter: i,
            calc: a
        } = e;
        return {
            [`${t}-rtl`]: {
                direction: `rtl`,
                [`${t}-nav`]: {
                    [`${t}-tab`]: {
                        margin: {
                            _skip_check_: !0,
                            value: n
                        },
                        [`${t}-tab:last-of-type`]: {
                            marginLeft: {
                                _skip_check_: !0,
                                value: 0
                            }
                        },
                        [r]: {
                            marginRight: {
                                _skip_check_: !0,
                                value: 0
                            },
                            marginLeft: {
                                _skip_check_: !0,
                                value: m(e.marginSM)
                            }
                        },
                        [`${t}-tab-remove`]: {
                            marginRight: {
                                _skip_check_: !0,
                                value: m(e.marginXS)
                            },
                            marginLeft: {
                                _skip_check_: !0,
                                value: m(a(e.marginXXS).mul(-1).equal())
                            },
                            [r]: {
                                margin: 0
                            }
                        }
                    }
                },
                [`&${t}-left`]: {
                    [`> ${t}-nav`]: {
                        order: 1
                    },
                    [`> ${t}-content-holder`]: {
                        order: 0
                    }
                },
                [`&${t}-right`]: {
                    [`> ${t}-nav`]: {
                        order: 0
                    },
                    [`> ${t}-content-holder`]: {
                        order: 1
                    }
                },
                [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
                    [`> ${t}-nav, > div > ${t}-nav`]: {
                        [`${t}-tab + ${t}-tab`]: {
                            marginRight: {
                                _skip_check_: !0,
                                value: i
                            },
                            marginLeft: {
                                _skip_check_: !0,
                                value: 0
                            }
                        }
                    }
                }
            },
            [`${t}-dropdown-rtl`]: {
                direction: `rtl`
            },
            [`${t}-menu-item`]: {
                [`${t}-dropdown-rtl`]: {
                    textAlign: {
                        _skip_check_: !0,
                        value: `right`
                    }
                }
            }
        }
    },
    Ge = e => {
        let {
            componentCls: t,
            tabsCardPadding: n,
            cardHeight: r,
            cardGutter: i,
            itemHoverColor: a,
            itemActiveColor: o,
            colorBorderSecondary: s
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, C(e)), {
                display: `flex`,
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    position: `relative`,
                    display: `flex`,
                    flex: `none`,
                    alignItems: `center`,
                    [`${t}-nav-wrap`]: {
                        position: `relative`,
                        display: `flex`,
                        flex: `auto`,
                        alignSelf: `stretch`,
                        overflow: `hidden`,
                        whiteSpace: `nowrap`,
                        transform: `translate(0)`,
                        "&::before, &::after": {
                            position: `absolute`,
                            zIndex: 1,
                            opacity: 0,
                            transition: `opacity ${e.motionDurationSlow}`,
                            content: `''`,
                            pointerEvents: `none`
                        }
                    },
                    [`${t}-nav-list`]: {
                        position: `relative`,
                        display: `flex`,
                        transition: `opacity ${e.motionDurationSlow}`
                    },
                    [`${t}-nav-operations`]: {
                        display: `flex`,
                        alignSelf: `stretch`
                    },
                    [`${t}-nav-operations-hidden`]: {
                        position: `absolute`,
                        visibility: `hidden`,
                        pointerEvents: `none`
                    },
                    [`${t}-nav-more`]: {
                        position: `relative`,
                        padding: n,
                        background: `transparent`,
                        border: 0,
                        color: e.colorText,
                        "&::after": {
                            position: `absolute`,
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            bottom: 0,
                            left: {
                                _skip_check_: !0,
                                value: 0
                            },
                            height: e.calc(e.controlHeightLG).div(8).equal(),
                            transform: `translateY(100%)`,
                            content: `''`
                        }
                    },
                    [`${t}-nav-add`]: Object.assign({
                        minWidth: r,
                        minHeight: r,
                        marginLeft: {
                            _skip_check_: !0,
                            value: i
                        },
                        background: `transparent`,
                        border: `${m(e.lineWidth)} ${e.lineType} ${s}`,
                        borderRadius: `${m(e.borderRadiusLG)} ${m(e.borderRadiusLG)} 0 0`,
                        outline: `none`,
                        cursor: `pointer`,
                        color: e.colorText,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                        "&:hover": {
                            color: a
                        },
                        "&:active, &:focus:not(:focus-visible)": {
                            color: o
                        }
                    }, v(e, -3))
                },
                [`${t}-extra-content`]: {
                    flex: `none`
                },
                [`${t}-ink-bar`]: {
                    position: `absolute`,
                    background: e.inkBarColor,
                    pointerEvents: `none`
                }
            }), Ue(e)), {
                [`${t}-content`]: {
                    position: `relative`,
                    width: `100%`
                },
                [`${t}-content-holder`]: {
                    flex: `auto`,
                    minWidth: 0,
                    minHeight: 0
                },
                [`${t}-tabpane`]: Object.assign(Object.assign({}, v(e)), {
                    "&-hidden": {
                        display: `none`
                    }
                })
            }),
            [`${t}-centered`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-nav-wrap`]: {
                        [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
                            margin: `auto`
                        }
                    }
                }
            }
        }
    },
    Ke = T(`Tabs`, e => {
        let t = _(e, {
            tabsCardPadding: e.cardPadding,
            dropdownEdgeChildVerticalPadding: e.paddingXXS,
            tabsActiveTextShadow: `0 0 0.25px currentcolor`,
            tabsDropdownHeight: 200,
            tabsDropdownWidth: 120,
            tabsHorizontalItemMargin: `0 0 0 ${m(e.horizontalItemGutter)}`,
            tabsHorizontalItemMarginRTL: `0 0 0 ${m(e.horizontalItemGutter)}`
        });
        return [He(t), We(t), Z(t), X(t), Ve(t), Ge(t), Y(t)]
    }, e => {
        let {
            cardHeight: t,
            cardHeightSM: n,
            cardHeightLG: r,
            controlHeight: i,
            controlHeightLG: a
        } = e, o = t || a, s = n || i, c = r || a + 8;
        return {
            zIndexPopup: e.zIndexPopupBase + 50,
            cardBg: e.colorFillAlter,
            cardHeight: o,
            cardHeightSM: s,
            cardHeightLG: c,
            cardPadding: `${(o-e.fontHeight)/2-e.lineWidth}px ${e.padding}px`,
            cardPaddingSM: `${(s-e.fontHeight)/2-e.lineWidth}px ${e.paddingXS}px`,
            cardPaddingLG: `${(c-e.fontHeightLG)/2-e.lineWidth}px ${e.padding}px`,
            titleFontSize: e.fontSize,
            titleFontSizeLG: e.fontSizeLG,
            titleFontSizeSM: e.fontSize,
            inkBarColor: e.colorPrimary,
            horizontalMargin: `0 0 ${e.margin}px 0`,
            horizontalItemGutter: 32,
            horizontalItemMargin: ``,
            horizontalItemMarginRTL: ``,
            horizontalItemPadding: `${e.paddingSM}px 0`,
            horizontalItemPaddingSM: `${e.paddingXS}px 0`,
            horizontalItemPaddingLG: `${e.padding}px 0`,
            verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
            verticalItemMargin: `${e.margin}px 0 0 0`,
            itemColor: e.colorText,
            itemSelectedColor: e.colorPrimary,
            itemHoverColor: e.colorPrimaryHover,
            itemActiveColor: e.colorPrimaryActive,
            cardGutter: e.marginXXS / 2
        }
    }),
    qe = () => null,
    Je = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    Ye = U.forwardRef((e, t) => {
        var n, r, i;
        let {
            type: a,
            className: s,
            rootClassName: c,
            size: l,
            onEdit: u,
            hideAdd: d,
            centered: f,
            addIcon: p,
            removeIcon: m,
            moreIcon: h,
            more: _,
            popupClassName: v,
            children: y,
            items: b,
            animated: x,
            style: S,
            indicatorSize: C,
            indicator: w,
            destroyInactiveTabPane: T,
            destroyOnHidden: E
        } = e, D = Je(e, [`type`, `className`, `rootClassName`, `size`, `onEdit`, `hideAdd`, `centered`, `addIcon`, `removeIcon`, `moreIcon`, `more`, `popupClassName`, `children`, `items`, `animated`, `style`, `indicatorSize`, `indicator`, `destroyInactiveTabPane`, `destroyOnHidden`]), {
            prefixCls: O
        } = D, {
            direction: k,
            tabs: A,
            getPrefixCls: j,
            getPopupContainer: M
        } = U.useContext(o), N = j(`tabs`, O), P = I(N), [F, L, R] = Ke(N, P), z = U.useRef(null);
        U.useImperativeHandle(t, () => ({
            nativeElement: z.current
        }));
        let B;
        a === `editable-card` && (B = {
            onEdit: (e, {
                key: t,
                event: n
            }) => {
                u == null || u(e === `add` ? n : t, e)
            },
            removeIcon: m ?? (A == null ? void 0 : A.removeIcon) ?? U.createElement(ee, null),
            addIcon: (p ?? (A == null ? void 0 : A.addIcon)) || U.createElement(G, null),
            showAdd: d !== !0
        });
        let V = j(),
            W = g(l),
            te = Be(b, y),
            ne = Le(N, x),
            re = Object.assign(Object.assign({}, A == null ? void 0 : A.style), S),
            ie = {
                align: (w == null ? void 0 : w.align) ?? ((n = A == null ? void 0 : A.indicator) == null ? void 0 : n.align),
                size: (w == null ? void 0 : w.size) ?? C ?? ((r = A == null ? void 0 : A.indicator) == null ? void 0 : r.size) ?? (A == null ? void 0 : A.indicatorSize)
            };
        return F(U.createElement(Fe, Object.assign({
            ref: z,
            direction: k,
            getPopupContainer: M
        }, D, {
            items: te,
            className: (0, K.default)({
                [`${N}-${W}`]: W,
                [`${N}-card`]: [`card`, `editable-card`].includes(a),
                [`${N}-editable-card`]: a === `editable-card`,
                [`${N}-centered`]: f
            }, A == null ? void 0 : A.className, s, c, L, R, P),
            popupClassName: (0, K.default)(v, L, R, P),
            style: re,
            editable: B,
            more: Object.assign({
                icon: ((i = A == null ? void 0 : A.more) == null ? void 0 : i.icon) ?? (A == null ? void 0 : A.moreIcon) ?? h ?? U.createElement(H, null),
                transitionName: `${V}-slide-up`
            }, _),
            prefixCls: N,
            animated: ne,
            indicator: ie,
            destroyInactiveTabPane: E ?? T
        })))
    });
Ye.TabPane = qe;
export {
    G as n, Ye as t
};