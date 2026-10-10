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
    At as i,
    C as a,
    Ft as o,
    J as s,
    Mt as c,
    Nt as l,
    Ot as u,
    Ut as d,
    gt as f,
    ht as p,
    kt as m,
    lt as h,
    nt as g,
    tt as _,
    ut as v
} from "./Compact.js";
import {
    d as y,
    r as ee,
    u as b,
    x
} from "./color.js";
import {
    t as te
} from "./es-2.js";
import {
    _ as S,
    g as C
} from "./ContextIsolator.js";
var w = e(d());
v(), g();
var T = (function() {
    if (typeof navigator > `u` || typeof window > `u`) return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4))
});
n();
var E = e(t());

function D(e) {
    var t = e.prefixCls,
        n = e.align,
        r = e.arrow,
        i = e.arrowPos,
        a = r || {},
        o = a.className,
        s = a.content,
        c = i.x,
        l = c === void 0 ? 0 : c,
        u = i.y,
        d = u === void 0 ? 0 : u,
        f = E.useRef();
    if (!n || !n.points) return null;
    var p = {
        position: `absolute`
    };
    if (n.autoArrow !== !1) {
        var m = n.points[0],
            h = n.points[1],
            g = m[0],
            _ = m[1],
            v = h[0],
            y = h[1];
        g === v || ![`t`, `b`].includes(g) ? p.top = d : g === `t` ? p.top = 0 : p.bottom = 0, _ === y || ![`l`, `r`].includes(_) ? p.left = l : _ === `l` ? p.left = 0 : p.right = 0
    }
    return E.createElement(`div`, {
        ref: f,
        className: (0, w.default)(`${t}-arrow`, o),
        style: p
    }, s)
}

function ne(e) {
    var t = e.prefixCls,
        n = e.open,
        i = e.zIndex,
        a = e.mask,
        o = e.motion;
    return a ? E.createElement(y, r({}, o, {
        motionAppear: !0,
        visible: n,
        removeOnLeave: !0
    }), function(e) {
        var n = e.className;
        return E.createElement(`div`, {
            style: {
                zIndex: i
            },
            className: (0, w.default)(`${t}-mask`, n)
        })
    }) : null
}
var re = E.memo(function(e) {
    return e.children
}, function(e, t) {
    return t.cache
});
n();
var ie = E.forwardRef(function(e, t) {
        var n = e.popup,
            i = e.className,
            a = e.prefixCls,
            c = e.style,
            l = e.target,
            d = e.onVisibleChanged,
            f = e.open,
            p = e.keepDom,
            m = e.fresh,
            g = e.onClick,
            _ = e.mask,
            v = e.arrow,
            ee = e.arrowPos,
            b = e.align,
            x = e.motion,
            S = e.maskMotion,
            C = e.forceRender,
            T = e.getPopupContainer,
            ie = e.autoDestroy,
            ae = e.portal,
            oe = e.zIndex,
            se = e.onMouseEnter,
            ce = e.onMouseLeave,
            le = e.onPointerEnter,
            ue = e.onPointerDownCapture,
            de = e.ready,
            fe = e.offsetX,
            O = e.offsetY,
            pe = e.offsetR,
            k = e.offsetB,
            me = e.onAlign,
            A = e.onPrepare,
            j = e.stretch,
            M = e.targetWidth,
            N = e.targetHeight,
            P = typeof n == `function` ? n() : n,
            he = f || p,
            ge = (T == null ? void 0 : T.length) > 0,
            _e = E.useState(!T || !ge),
            ve = h(_e, 2),
            ye = ve[0],
            be = ve[1];
        if (s(function() {
                !ye && ge && l && be(!0)
            }, [ye, ge, l]), !ye) return null;
        var F = `auto`,
            I = {
                left: `-1000vw`,
                top: `-1000vh`,
                right: F,
                bottom: F
            };
        if (de || !f) {
            var L, R = b.points,
                xe = b.dynamicInset || ((L = b._experimental) == null ? void 0 : L.dynamicInset),
                Se = xe && R[0][1] === `r`,
                z = xe && R[0][0] === `b`;
            Se ? (I.right = pe, I.left = F) : (I.left = fe, I.right = F), z ? (I.bottom = k, I.top = F) : (I.top = O, I.bottom = F)
        }
        var B = {};
        return j && (j.includes(`height`) && N ? B.height = N : j.includes(`minHeight`) && N && (B.minHeight = N), j.includes(`width`) && M ? B.width = M : j.includes(`minWidth`) && M && (B.minWidth = M)), f || (B.pointerEvents = `none`), E.createElement(ae, {
            open: C || he,
            getContainer: T && function() {
                return T(l)
            },
            autoDestroy: ie
        }, E.createElement(ne, {
            prefixCls: a,
            open: f,
            zIndex: oe,
            mask: _,
            motion: S
        }), E.createElement(te, {
            onResize: me,
            disabled: !f
        }, function(e) {
            return E.createElement(y, r({
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: C,
                leavedClassName: `${a}-hidden`
            }, x, {
                onAppearPrepare: A,
                onEnterPrepare: A,
                visible: f,
                onVisibleChanged: function(e) {
                    var t;
                    x == null || (t = x.onVisibleChanged) == null || t.call(x, e), d(e)
                }
            }), function(n, r) {
                var s = n.className,
                    l = n.style,
                    d = (0, w.default)(a, s, i);
                return E.createElement(`div`, {
                    ref: u(e, t, r),
                    className: d,
                    style: o(o(o(o({
                        "--arrow-x": `${ee.x||0}px`,
                        "--arrow-y": `${ee.y||0}px`
                    }, I), B), l), {}, {
                        boxSizing: `border-box`,
                        zIndex: oe
                    }, c),
                    onMouseEnter: se,
                    onMouseLeave: ce,
                    onPointerEnter: le,
                    onClick: g,
                    onPointerDownCapture: ue
                }, v && E.createElement(D, {
                    prefixCls: a,
                    arrow: v,
                    arrowPos: ee,
                    align: b
                }), E.createElement(re, {
                    cache: !f && !m
                }, P))
            })
        }))
    }),
    ae = E.forwardRef(function(e, t) {
        var n = e.children,
            r = e.getTriggerDOMNode,
            a = c(n),
            o = E.useCallback(function(e) {
                m(t, r ? r(e) : e)
            }, [r]),
            s = l(o, i(n));
        return a ? E.cloneElement(n, {
            ref: s
        }) : n
    }),
    oe = E.createContext(null);

function se(e) {
    return e ? Array.isArray(e) ? e : [e] : []
}

function ce(e, t, n, r) {
    return E.useMemo(function() {
        var i = se(n ?? t),
            a = se(r ?? t),
            o = new Set(i),
            s = new Set(a);
        return e && (o.has(`hover`) && (o.delete(`hover`), o.add(`click`)), s.has(`hover`) && (s.delete(`hover`), s.add(`click`))), [o, s]
    }, [e, t, n, r])
}

function le() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return arguments.length > 2 && arguments[2] ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}

function ue(e, t, n, r) {
    for (var i = n.points, a = Object.keys(e), o = 0; o < a.length; o += 1) {
        var s, c = a[o];
        if (le((s = e[c]) == null ? void 0 : s.points, i, r)) return `${t}-placement-${c}`
    }
    return ``
}

function de(e, t, n, r) {
    return t || (n ? {
        motionName: `${e}-${n}`
    } : r ? {
        motionName: r
    } : null)
}

function fe(e) {
    return e.ownerDocument.defaultView
}

function O(e) {
    for (var t = [], n = e == null ? void 0 : e.parentElement, r = [`hidden`, `scroll`, `clip`, `auto`]; n;) {
        var i = fe(n).getComputedStyle(n);
        [i.overflowX, i.overflowY, i.overflow].some(function(e) {
            return r.includes(e)
        }) && t.push(n), n = n.parentElement
    }
    return t
}

function pe(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(e) ? t : e
}

function k(e) {
    return pe(parseFloat(e), 0)
}

function me(e, t) {
    var n = o({}, e);
    return (t || []).forEach(function(e) {
        if (!(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)) {
            var t = fe(e).getComputedStyle(e),
                r = t.overflow,
                i = t.overflowClipMargin,
                a = t.borderTopWidth,
                o = t.borderBottomWidth,
                s = t.borderLeftWidth,
                c = t.borderRightWidth,
                l = e.getBoundingClientRect(),
                u = e.offsetHeight,
                d = e.clientHeight,
                f = e.offsetWidth,
                p = e.clientWidth,
                m = k(a),
                h = k(o),
                g = k(s),
                _ = k(c),
                v = pe(Math.round(l.width / f * 1e3) / 1e3),
                y = pe(Math.round(l.height / u * 1e3) / 1e3),
                ee = (f - p - g - _) * v,
                b = (u - d - m - h) * y,
                x = m * y,
                te = h * y,
                S = g * v,
                C = _ * v,
                w = 0,
                T = 0;
            if (r === `clip`) {
                var E = k(i);
                w = E * v, T = E * y
            }
            var D = l.x + S - w,
                ne = l.y + x - T,
                re = D + l.width + 2 * w - S - C - ee,
                ie = ne + l.height + 2 * T - x - te - b;
            n.left = Math.max(n.left, D), n.top = Math.max(n.top, ne), n.right = Math.min(n.right, re), n.bottom = Math.min(n.bottom, ie)
        }
    }), n
}
v();

function A(e) {
    var t = `${arguments.length>1&&arguments[1]!==void 0?arguments[1]:0}`,
        n = t.match(/^(.*)\%$/);
    return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t)
}

function j(e, t) {
    var n = h(t || [], 2),
        r = n[0],
        i = n[1];
    return [A(e.width, r), A(e.height, i)]
}

function M() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``;
    return [e[0], e[1]]
}

function N(e, t) {
    var n = t[0],
        r = t[1],
        i, a = n === `t` ? e.y : n === `b` ? e.y + e.height : e.y + e.height / 2;
    return i = r === `l` ? e.x : r === `r` ? e.x + e.width : e.x + e.width / 2, {
        x: i,
        y: a
    }
}

function P(e, t) {
    var n = {
        t: `b`,
        b: `t`,
        l: `r`,
        r: `l`
    };
    return e.map(function(e, r) {
        return r === t ? n[e] || `c` : e
    }).join(``)
}

function he(e, t, n, r, i, c, l) {
    var u = E.useState({
            ready: !1,
            offsetX: 0,
            offsetY: 0,
            offsetR: 0,
            offsetB: 0,
            arrowX: 0,
            arrowY: 0,
            scaleX: 1,
            scaleY: 1,
            align: i[r] || {}
        }),
        d = h(u, 2),
        f = d[0],
        p = d[1],
        m = E.useRef(0),
        g = E.useMemo(function() {
            return t ? O(t) : []
        }, [t]),
        _ = E.useRef({});
    e || function() {
        _.current = {}
    }();
    var v = a(function() {
            if (t && n && e) {
                var a, s, u = t,
                    d = u.ownerDocument,
                    f = fe(u),
                    m = f.getComputedStyle(u).position,
                    v = u.style.left,
                    y = u.style.top,
                    b = u.style.right,
                    te = u.style.bottom,
                    S = u.style.overflow,
                    C = o(o({}, i[r]), c),
                    w = d.createElement(`div`);
                (a = u.parentElement) == null || a.appendChild(w), w.style.left = `${u.offsetLeft}px`, w.style.top = `${u.offsetTop}px`, w.style.position = m, w.style.height = `${u.offsetHeight}px`, w.style.width = `${u.offsetWidth}px`, u.style.left = `0`, u.style.top = `0`, u.style.right = `auto`, u.style.bottom = `auto`, u.style.overflow = `hidden`;
                var T;
                if (Array.isArray(n)) T = {
                    x: n[0],
                    y: n[1],
                    width: 0,
                    height: 0
                };
                else {
                    var E = n.getBoundingClientRect();
                    E.x = E.x ?? E.left, E.y = E.y ?? E.top, T = {
                        x: E.x,
                        y: E.y,
                        width: E.width,
                        height: E.height
                    }
                }
                var D = u.getBoundingClientRect(),
                    ne = f.getComputedStyle(u),
                    re = ne.height,
                    ie = ne.width;
                D.x = D.x ?? D.left, D.y = D.y ?? D.top;
                var ae = d.documentElement,
                    oe = ae.clientWidth,
                    se = ae.clientHeight,
                    ce = ae.scrollWidth,
                    le = ae.scrollHeight,
                    ue = ae.scrollTop,
                    de = ae.scrollLeft,
                    O = D.height,
                    k = D.width,
                    A = T.height,
                    he = T.width,
                    ge = {
                        left: 0,
                        top: 0,
                        right: oe,
                        bottom: se
                    },
                    _e = {
                        left: -de,
                        top: -ue,
                        right: ce - de,
                        bottom: le - ue
                    },
                    ve = C.htmlRegion,
                    ye = `visible`,
                    be = `visibleFirst`;
                ve !== `scroll` && ve !== be && (ve = ye);
                var F = ve === be,
                    I = me(_e, g),
                    L = me(ge, g),
                    R = ve === ye ? L : I,
                    xe = F ? L : R;
                u.style.left = `auto`, u.style.top = `auto`, u.style.right = `0`, u.style.bottom = `0`;
                var Se = u.getBoundingClientRect();
                u.style.left = v, u.style.top = y, u.style.right = b, u.style.bottom = te, u.style.overflow = S, (s = u.parentElement) == null || s.removeChild(w);
                var z = pe(Math.round(k / parseFloat(ie) * 1e3) / 1e3),
                    B = pe(Math.round(O / parseFloat(re) * 1e3) / 1e3);
                if (z === 0 || B === 0 || x(n) && !ee(n)) return;
                var Ce = C.offset,
                    we = C.targetOffset,
                    Te = j(D, Ce),
                    Ee = h(Te, 2),
                    V = Ee[0],
                    H = Ee[1],
                    De = j(T, we),
                    Oe = h(De, 2),
                    ke = Oe[0],
                    Ae = Oe[1];
                T.x -= ke, T.y -= Ae;
                var je = C.points || [],
                    Me = h(je, 2),
                    Ne = Me[0],
                    Pe = Me[1],
                    U = M(Pe),
                    W = M(Ne),
                    Fe = N(T, U),
                    Ie = N(D, W),
                    Le = o({}, C),
                    G = Fe.x - Ie.x + V,
                    K = Fe.y - Ie.y + H;

                function e(e, t) {
                    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R,
                        r = D.x + e,
                        i = D.y + t,
                        a = r + k,
                        o = i + O,
                        s = Math.max(r, n.left),
                        c = Math.max(i, n.top),
                        l = Math.min(a, n.right),
                        u = Math.min(o, n.bottom);
                    return Math.max(0, (l - s) * (u - c))
                }
                var q = e(G, K),
                    Re = e(G, K, L),
                    ze = N(T, [`t`, `l`]),
                    Be = N(D, [`t`, `l`]),
                    J = N(T, [`b`, `r`]),
                    Ve = N(D, [`b`, `r`]),
                    He = C.overflow || {},
                    Ue = He.adjustX,
                    We = He.adjustY,
                    Y = He.shiftX,
                    Ge = He.shiftY,
                    Ke = function(e) {
                        return typeof e == `boolean` ? e : e >= 0
                    },
                    qe, Je, Ye, Xe;

                function Ct() {
                    qe = D.y + K, Je = qe + O, Ye = D.x + G, Xe = Ye + k
                }
                Ct();
                var Ze = Ke(We),
                    Qe = W[0] === U[0];
                if (Ze && W[0] === `t` && (Je > xe.bottom || _.current.bt)) {
                    var X = K;
                    Qe ? X -= O - A : X = ze.y - Ve.y - H;
                    var $e = e(G, X),
                        et = e(G, X, L);
                    $e > q || $e === q && (!F || et >= Re) ? (_.current.bt = !0, K = X, H = -H, Le.points = [P(W, 0), P(U, 0)]) : _.current.bt = !1
                }
                if (Ze && W[0] === `b` && (qe < xe.top || _.current.tb)) {
                    var Z = K;
                    Qe ? Z += O - A : Z = J.y - Be.y - H;
                    var tt = e(G, Z),
                        nt = e(G, Z, L);
                    tt > q || tt === q && (!F || nt >= Re) ? (_.current.tb = !0, K = Z, H = -H, Le.points = [P(W, 0), P(U, 0)]) : _.current.tb = !1
                }
                var rt = Ke(Ue),
                    Q = W[1] === U[1];
                if (rt && W[1] === `l` && (Xe > xe.right || _.current.rl)) {
                    var it = G;
                    Q ? it -= k - he : it = ze.x - Ve.x - V;
                    var at = e(it, K),
                        ot = e(it, K, L);
                    at > q || at === q && (!F || ot >= Re) ? (_.current.rl = !0, G = it, V = -V, Le.points = [P(W, 1), P(U, 1)]) : _.current.rl = !1
                }
                if (rt && W[1] === `r` && (Ye < xe.left || _.current.lr)) {
                    var st = G;
                    Q ? st += k - he : st = J.x - Be.x - V;
                    var ct = e(st, K),
                        lt = e(st, K, L);
                    ct > q || ct === q && (!F || lt >= Re) ? (_.current.lr = !0, G = st, V = -V, Le.points = [P(W, 1), P(U, 1)]) : _.current.lr = !1
                }
                Ct();
                var ut = Y === !0 ? 0 : Y;
                typeof ut == `number` && (Ye < L.left && (G -= Ye - L.left - V, T.x + he < L.left + ut && (G += T.x - L.left + he - ut)), Xe > L.right && (G -= Xe - L.right - V, T.x > L.right - ut && (G += T.x - L.right + ut)));
                var dt = Ge === !0 ? 0 : Ge;
                typeof dt == `number` && (qe < L.top && (K -= qe - L.top - H, T.y + A < L.top + dt && (K += T.y - L.top + A - dt)), Je > L.bottom && (K -= Je - L.bottom - H, T.y > L.bottom - dt && (K += T.y - L.bottom + dt)));
                var ft = D.x + G,
                    pt = ft + k,
                    mt = D.y + K,
                    ht = mt + O,
                    gt = T.x,
                    _t = gt + he,
                    $ = T.y,
                    vt = $ + A,
                    yt = (Math.max(ft, gt) + Math.min(pt, _t)) / 2 - ft,
                    bt = (Math.max(mt, $) + Math.min(ht, vt)) / 2 - mt;
                l == null || l(t, Le);
                var xt = Se.right - D.x - (G + D.width),
                    St = Se.bottom - D.y - (K + D.height);
                z === 1 && (G = Math.round(G), xt = Math.round(xt)), B === 1 && (K = Math.round(K), St = Math.round(St)), p({
                    ready: !0,
                    offsetX: G / z,
                    offsetY: K / B,
                    offsetR: xt / z,
                    offsetB: St / B,
                    arrowX: yt / z,
                    arrowY: bt / B,
                    scaleX: z,
                    scaleY: B,
                    align: Le
                })
            }
        }),
        y = function() {
            m.current += 1;
            var e = m.current;
            Promise.resolve().then(function() {
                m.current === e && v()
            })
        },
        b = function() {
            p(function(e) {
                return o(o({}, e), {}, {
                    ready: !1
                })
            })
        };
    return s(b, [r]), s(function() {
        e || b()
    }, [e]), [f.ready, f.offsetX, f.offsetY, f.offsetR, f.offsetB, f.arrowX, f.arrowY, f.scaleX, f.scaleY, f.align, y]
}
f();

function ge(e, t, n, r, i) {
    s(function() {
        if (e && t && n) {
            var a = t,
                o = n,
                s = O(a),
                c = O(o),
                l = fe(o),
                u = new Set([l].concat(p(s), p(c)));

            function e() {
                r(), i()
            }
            return u.forEach(function(t) {
                    t.addEventListener(`scroll`, e, {
                        passive: !0
                    })
                }), l.addEventListener(`resize`, e, {
                    passive: !0
                }), r(),
                function() {
                    u.forEach(function(t) {
                        t.removeEventListener(`scroll`, e), l.removeEventListener(`resize`, e)
                    })
                }
        }
    }, [e, t, n])
}

function _e(e, t, n, r, i, a, o, s) {
    var c = E.useRef(e);
    c.current = e;
    var l = E.useRef(!1);
    E.useEffect(function() {
        if (t && r && (!i || a)) {
            var e = function() {
                    l.current = !1
                },
                u = function(e) {
                    var t;
                    c.current && !o(((t = e.composedPath) == null || (t = t.call(e)) == null ? void 0 : t[0]) || e.target) && !l.current && s(!1)
                },
                d = fe(r);
            d.addEventListener(`pointerdown`, e, !0), d.addEventListener(`mousedown`, u, !0), d.addEventListener(`contextmenu`, u, !0);
            var f = b(n);
            return f && (f.addEventListener(`mousedown`, u, !0), f.addEventListener(`contextmenu`, u, !0)),
                function() {
                    d.removeEventListener(`pointerdown`, e, !0), d.removeEventListener(`mousedown`, u, !0), d.removeEventListener(`contextmenu`, u, !0), f && (f.removeEventListener(`mousedown`, u, !0), f.removeEventListener(`contextmenu`, u, !0))
                }
        }
    }, [t, n, r, i, a]);

    function u() {
        l.current = !0
    }
    return u
}
v();
var ve = `prefixCls.children.action.showAction.hideAction.popupVisible.defaultPopupVisible.onPopupVisibleChange.afterPopupVisibleChange.mouseEnterDelay.mouseLeaveDelay.focusDelay.blurDelay.mask.maskClosable.getPopupContainer.forceRender.autoDestroy.destroyPopupOnHide.popup.popupClassName.popupStyle.popupPlacement.builtinPlacements.popupAlign.zIndex.stretch.getPopupClassNameFromAlign.fresh.alignPoint.onPopupClick.onPopupAlign.arrow.popupMotion.maskMotion.popupTransitionName.popupAnimation.maskTransitionName.maskAnimation.className.getTriggerDOMNode`.split(`.`);

function ye() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S;
    return E.forwardRef(function(t, n) {
        var r = t.prefixCls,
            i = r === void 0 ? `rc-trigger-popup` : r,
            c = t.children,
            l = t.action,
            u = l === void 0 ? `hover` : l,
            d = t.showAction,
            f = t.hideAction,
            p = t.popupVisible,
            m = t.defaultPopupVisible,
            g = t.onPopupVisibleChange,
            v = t.afterPopupVisibleChange,
            y = t.mouseEnterDelay,
            ee = t.mouseLeaveDelay,
            S = ee === void 0 ? .1 : ee,
            D = t.focusDelay,
            ne = t.blurDelay,
            re = t.mask,
            se = t.maskClosable,
            le = se === void 0 || se,
            fe = t.getPopupContainer,
            O = t.forceRender,
            pe = t.autoDestroy,
            k = t.destroyPopupOnHide,
            me = t.popup,
            A = t.popupClassName,
            j = t.popupStyle,
            M = t.popupPlacement,
            N = t.builtinPlacements,
            P = N === void 0 ? {} : N,
            ye = t.popupAlign,
            be = t.zIndex,
            F = t.stretch,
            I = t.getPopupClassNameFromAlign,
            L = t.fresh,
            R = t.alignPoint,
            xe = t.onPopupClick,
            Se = t.onPopupAlign,
            z = t.arrow,
            B = t.popupMotion,
            Ce = t.maskMotion,
            we = t.popupTransitionName,
            Te = t.popupAnimation,
            Ee = t.maskTransitionName,
            V = t.maskAnimation,
            H = t.className,
            De = t.getTriggerDOMNode,
            Oe = _(t, ve),
            ke = pe || k || !1,
            Ae = E.useState(!1),
            je = h(Ae, 2),
            Me = je[0],
            Ne = je[1];
        s(function() {
            Ne(T())
        }, []);
        var Pe = E.useRef({}),
            U = E.useContext(oe),
            W = E.useMemo(function() {
                return {
                    registerSubPopup: function(e, t) {
                        Pe.current[e] = t, U == null || U.registerSubPopup(e, t)
                    }
                }
            }, [U]),
            Fe = C(),
            Ie = E.useState(null),
            Le = h(Ie, 2),
            G = Le[0],
            K = Le[1],
            q = E.useRef(null),
            Re = a(function(e) {
                q.current = e, x(e) && G !== e && K(e), U == null || U.registerSubPopup(Fe, e)
            }),
            ze = E.useState(null),
            Be = h(ze, 2),
            J = Be[0],
            Ve = Be[1],
            He = E.useRef(null),
            Ue = a(function(e) {
                x(e) && J !== e && (Ve(e), He.current = e)
            }),
            We = E.Children.only(c),
            Y = (We == null ? void 0 : We.props) || {},
            Ge = {},
            Ke = a(function(e) {
                var t, n, r = J;
                return (r == null ? void 0 : r.contains(e)) || ((t = b(r)) == null ? void 0 : t.host) === e || e === r || (G == null ? void 0 : G.contains(e)) || ((n = b(G)) == null ? void 0 : n.host) === e || e === G || Object.values(Pe.current).some(function(t) {
                    return (t == null ? void 0 : t.contains(e)) || e === t
                })
            }),
            qe = de(i, B, Te, we),
            Je = de(i, Ce, V, Ee),
            Ye = E.useState(m || !1),
            Xe = h(Ye, 2),
            Ze = Xe[0],
            Qe = Xe[1],
            X = p ?? Ze,
            $e = a(function(e) {
                p === void 0 && Qe(e)
            });
        s(function() {
            Qe(p || !1)
        }, [p]);
        var et = E.useRef(X);
        et.current = X;
        var Z = E.useRef([]);
        Z.current = [];
        var tt = a(function(e) {
                $e(e), (Z.current[Z.current.length - 1] ?? X) !== e && (Z.current.push(e), g == null || g(e))
            }),
            nt = E.useRef(),
            rt = function() {
                clearTimeout(nt.current)
            },
            Q = function(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                rt(), t === 0 ? tt(e) : nt.current = setTimeout(function() {
                    tt(e)
                }, t * 1e3)
            };
        E.useEffect(function() {
            return rt
        }, []);
        var it = E.useState(!1),
            at = h(it, 2),
            ot = at[0],
            st = at[1];
        s(function(e) {
            (!e || X) && st(!0)
        }, [X]);
        var ct = E.useState(null),
            lt = h(ct, 2),
            ut = lt[0],
            dt = lt[1],
            ft = E.useState(null),
            pt = h(ft, 2),
            mt = pt[0],
            ht = pt[1],
            gt = function(e) {
                ht([e.clientX, e.clientY])
            },
            _t = he(X, G, R && mt !== null ? mt : J, M, P, ye, Se),
            $ = h(_t, 11),
            vt = $[0],
            yt = $[1],
            bt = $[2],
            xt = $[3],
            St = $[4],
            Ct = $[5],
            wt = $[6],
            Tt = $[7],
            Et = $[8],
            Dt = $[9],
            Ot = $[10],
            kt = ce(Me, u, d, f),
            At = h(kt, 2),
            jt = At[0],
            Mt = At[1],
            Nt = jt.has(`click`),
            Pt = Mt.has(`click`) || Mt.has(`contextMenu`),
            Ft = a(function() {
                ot || Ot()
            });
        ge(X, J, G, Ft, function() {
            et.current && R && Pt && Q(!1)
        }), s(function() {
            Ft()
        }, [mt, M]), s(function() {
            X && !(P != null && P[M]) && Ft()
        }, [JSON.stringify(ye)]);
        var It = E.useMemo(function() {
            var e = ue(P, i, Dt, R);
            return (0, w.default)(e, I == null ? void 0 : I(Dt))
        }, [Dt, I, P, i, R]);
        E.useImperativeHandle(n, function() {
            return {
                nativeElement: He.current,
                popupElement: q.current,
                forceAlign: Ft
            }
        });
        var Lt = E.useState(0),
            Rt = h(Lt, 2),
            zt = Rt[0],
            Bt = Rt[1],
            Vt = E.useState(0),
            Ht = h(Vt, 2),
            Ut = Ht[0],
            Wt = Ht[1],
            Gt = function() {
                if (F && J) {
                    var e = J.getBoundingClientRect();
                    Bt(e.width), Wt(e.height)
                }
            },
            Kt = function() {
                Gt(), Ft()
            },
            qt = function(e) {
                st(!1), Ot(), v == null || v(e)
            },
            Jt = function() {
                return new Promise(function(e) {
                    Gt(), dt(function() {
                        return e
                    })
                })
            };
        s(function() {
            ut && (Ot(), ut(), dt(null))
        }, [ut]);

        function Yt(e, t, n, r) {
            Ge[e] = function(i) {
                var a;
                r == null || r(i), Q(t, n);
                var o = [...arguments].slice(1);
                (a = Y[e]) == null || a.call.apply(a, [Y, i].concat(o))
            }
        }(Nt || Pt) && (Ge.onClick = function(e) {
            var t;
            et.current && Pt ? Q(!1) : !et.current && Nt && (gt(e), Q(!0));
            var n = [...arguments].slice(1);
            (t = Y.onClick) == null || t.call.apply(t, [Y, e].concat(n))
        });
        var Xt = _e(X, Pt, J, G, re, le, Ke, Q),
            Zt = jt.has(`hover`),
            Qt = Mt.has(`hover`),
            $t, en;
        Zt && (Yt(`onMouseEnter`, !0, y, function(e) {
            gt(e)
        }), Yt(`onPointerEnter`, !0, y, function(e) {
            gt(e)
        }), $t = function(e) {
            (X || ot) && G != null && G.contains(e.target) && Q(!0, y)
        }, R && (Ge.onMouseMove = function(e) {
            var t;
            (t = Y.onMouseMove) == null || t.call(Y, e)
        })), Qt && (Yt(`onMouseLeave`, !1, S), Yt(`onPointerLeave`, !1, S), en = function() {
            Q(!1, S)
        }), jt.has(`focus`) && Yt(`onFocus`, !0, D), Mt.has(`focus`) && Yt(`onBlur`, !1, ne), jt.has(`contextMenu`) && (Ge.onContextMenu = function(e) {
            var t;
            et.current && Mt.has(`contextMenu`) ? Q(!1) : (gt(e), Q(!0)), e.preventDefault();
            var n = [...arguments].slice(1);
            (t = Y.onContextMenu) == null || t.call.apply(t, [Y, e].concat(n))
        }), H && (Ge.className = (0, w.default)(Y.className, H));
        var tn = E.useRef(!1);
        tn.current || (tn.current = O || X || ot);
        var nn = o(o({}, Y), Ge),
            rn = {};
        [`onContextMenu`, `onClick`, `onMouseDown`, `onTouchStart`, `onMouseEnter`, `onMouseLeave`, `onFocus`, `onBlur`].forEach(function(e) {
            Oe[e] && (rn[e] = function() {
                var t, n = [...arguments];
                (t = nn[e]) == null || t.call.apply(t, [nn].concat(n)), Oe[e].apply(Oe, n)
            })
        });
        var an = E.cloneElement(We, o(o({}, nn), rn)),
            on = {
                x: Ct,
                y: wt
            },
            sn = z ? o({}, z === !0 ? {} : z) : null;
        return E.createElement(E.Fragment, null, E.createElement(te, {
            disabled: !X,
            ref: Ue,
            onResize: Kt
        }, E.createElement(ae, {
            getTriggerDOMNode: De
        }, an)), tn.current && E.createElement(oe.Provider, {
            value: W
        }, E.createElement(ie, {
            portal: e,
            ref: Re,
            prefixCls: i,
            popup: me,
            className: (0, w.default)(A, It),
            style: j,
            target: J,
            onMouseEnter: $t,
            onMouseLeave: en,
            onPointerEnter: $t,
            zIndex: be,
            open: X,
            keepDom: ot,
            fresh: L,
            onClick: xe,
            onPointerDownCapture: Xt,
            mask: re,
            motion: qe,
            maskMotion: Je,
            onVisibleChanged: qt,
            onPrepare: Jt,
            forceRender: O,
            autoDestroy: ke,
            getPopupContainer: fe,
            align: Dt,
            arrow: sn,
            arrowPos: on,
            ready: vt,
            offsetX: yt,
            offsetY: bt,
            offsetR: xt,
            offsetB: St,
            onAlign: Ft,
            stretch: F,
            targetWidth: zt / Tt,
            targetHeight: Ut / Et
        })))
    })
}
var be = ye(S);
export {
    T as n, be as t
};