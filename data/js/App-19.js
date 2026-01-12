import {
    j as G,
    d as ie,
    e as ut,
    F as en,
    bI as T,
    bJ as ee,
    ax as jn,
    r as St,
    T as Vn,
    B as Xn,
    a as Kn,
    t as Yn,
    aV as Zn
} from "./_index.js";
import {
    r as Jn,
    a as Qn,
    b as ei,
    c as ti,
    d as oe,
    e as tn,
    f as rn,
    g as ri,
    h as ai,
    i as ni
} from "./throttle.js";
import {
    r as ii,
    a as an,
    b as ir,
    c as nn,
    d as oi,
    e as li,
    f as ui,
    g as on,
    h as si,
    i as ci,
    j as fi,
    k as di,
    l as hi,
    m as or,
    n as ln,
    o as un,
    p as sn,
    q as pi,
    s as vi,
    t as cn,
    u as gi
} from "./toNumber.js";
import {
    g as bi
} from "./App-1.js";
import {
    N as mi
} from "./NavigateTo.js";
import {
    S as xi
} from "./App-4.js";
import {
    I as yi
} from "./index-3.js";
import "./Sizes.js";
import "./App-2.js";
import "./AccessibleAnchor.js";
import "./motion.js";
import "./index-1.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-2.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./Shortcut.js";
import "./Names.js";
import "./NotionContentWrapper.js";
import "./index-5.js";
import "./index-6.js";
import "./mobxreact.esm.js";
import "./fonts.js";
import "./UsergroupAddOutlined.js";
import "./App-3.js";
import "./Hook.js";
import "./index-7.js";
import "./DownOutlined.js";
import "./index-8.js";
import "./move.js";
import "./CheckOutlined.js";
import "./AppTypes.js";
import "./Codes.js";
import "./index-9.js";
import "./index-10.js";
import "./DeleteOutlined.js";
import "./EditOutlined.js";
import "./Question.js";
import "./ImagePreview.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./FontAwesomeIcon.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-12.js";
import "./CopyOutlined.js";
import "./advancedFormat.js";
import "./useQuery.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TrackEvent.js";
import "./InfiniteScroller.js";
import "./index.es.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./Paper.js";
import "./RedirectToHomepage.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
const _i = ["Only students in your class can join your games", "Makes inappropriate names impossible", "Easily view report data for individual classes and students", "Students can leave assignments and pick back up where they left off"],
    wi = g => G.jsxs("div", {
        style: {
            marginTop: 8
        },
        className: "flex vc",
        children: [G.jsx("i", {
            className: "fas fa-check-circle",
            style: {
                color: "#43a047",
                marginRight: 8,
                fontSize: 25
            }
        }), " ", g.text]
    }),
    Ci = () => G.jsxs(Si, {
        children: [G.jsx(Ei, {}), G.jsxs("div", {
            style: {
                marginLeft: 45
            },
            children: [G.jsx(Pi, {
                children: "New Class"
            }), G.jsx(Ri, {
                children: _i.map(g => G.jsx(wi, {
                    text: g
                }, g))
            })]
        })]
    }),
    Si = ie.div.attrs({
        className: "flex vc"
    })`
  margin-top: 40px;
  margin-bottom: 40px;
`,
    Ei = ie.img.attrs({
        src: "/client/img/dashboard/groups.svg",
        alt: "Group of hands"
    })`
  height: 135px;
`,
    Pi = ie.h1`
  margin-bottom: 0px;
  color: ${ut.Black};
  font-weight: ${en.UltraBold};
  font-size: 42px;
  margin-bottom: 16px;
  line-height: 42px;
`,
    Ri = ie.p`
  font-size: 17px;
  line-height: 20px;
  margin-top: -4px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, 0.75);
`;
var Et = {},
    ce = {},
    K = {},
    fe = {},
    Pt, pr;

function fn() {
    if (pr) return Pt;
    pr = 1;
    var g = Jn();

    function t(n) {
        return typeof n == "function" ? n : g
    }
    return Pt = t, Pt
}
var Rt, vr;

function lr() {
    if (vr) return Rt;
    vr = 1;
    var g = Qn(),
        t = fn();

    function n(u, m) {
        return u && g(u, t(m))
    }
    return Rt = n, Rt
}
var gr;

function ki() {
    if (gr) return fe;
    gr = 1, Object.defineProperty(fe, "__esModule", {
        value: !0
    }), fe.flattenNames = void 0;
    var g = ei(),
        t = c(g),
        n = lr(),
        u = c(n),
        m = ti(),
        h = c(m),
        f = oe(),
        o = c(f);

    function c(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var a = fe.flattenNames = function s() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            p = [];
        return (0, o.default)(e, function(v) {
            Array.isArray(v) ? s(v).map(function(r) {
                return p.push(r)
            }) : (0, h.default)(v) ? (0, u.default)(v, function(r, d) {
                r === !0 && p.push(d), p.push(d + "-" + r)
            }) : (0, t.default)(v) && p.push(v)
        }), p
    };
    return fe.default = a, fe
}
var de = {},
    kt, br;

function dn() {
    if (br) return kt;
    br = 1;

    function g(t, n) {
        for (var u = -1, m = t == null ? 0 : t.length; ++u < m && n(t[u], u, t) !== !1;);
        return t
    }
    return kt = g, kt
}
var Mt, mr;

function hn() {
    if (mr) return Mt;
    mr = 1;
    var g = tn(),
        t = ii(),
        n = Object.prototype,
        u = n.hasOwnProperty;

    function m(h, f, o) {
        var c = h[f];
        (!(u.call(h, f) && t(c, o)) || o === void 0 && !(f in h)) && g(h, f, o)
    }
    return Mt = m, Mt
}
var Ot, xr;

function yt() {
    if (xr) return Ot;
    xr = 1;
    var g = hn(),
        t = tn();

    function n(u, m, h, f) {
        var o = !h;
        h || (h = {});
        for (var c = -1, a = m.length; ++c < a;) {
            var s = m[c],
                e = f ? f(h[s], u[s], s, h, u) : void 0;
            e === void 0 && (e = u[s]), o ? t(h, s, e) : g(h, s, e)
        }
        return h
    }
    return Ot = n, Ot
}
var qt, yr;

function Mi() {
    if (yr) return qt;
    yr = 1;
    var g = yt(),
        t = an();

    function n(u, m) {
        return u && g(m, t(m), u)
    }
    return qt = n, qt
}
var At, _r;

function Oi() {
    if (_r) return At;
    _r = 1;

    function g(t) {
        var n = [];
        if (t != null)
            for (var u in Object(t)) n.push(u);
        return n
    }
    return At = g, At
}
var Bt, wr;

function qi() {
    if (wr) return Bt;
    wr = 1;
    var g = ir(),
        t = nn(),
        n = Oi(),
        u = Object.prototype,
        m = u.hasOwnProperty;

    function h(f) {
        if (!g(f)) return n(f);
        var o = t(f),
            c = [];
        for (var a in f) a == "constructor" && (o || !m.call(f, a)) || c.push(a);
        return c
    }
    return Bt = h, Bt
}
var Ft, Cr;

function ur() {
    if (Cr) return Ft;
    Cr = 1;
    var g = oi(),
        t = qi(),
        n = li();

    function u(m) {
        return n(m) ? g(m, !0) : t(m)
    }
    return Ft = u, Ft
}
var Tt, Sr;

function Ai() {
    if (Sr) return Tt;
    Sr = 1;
    var g = yt(),
        t = ur();

    function n(u, m) {
        return u && g(m, t(m), u)
    }
    return Tt = n, Tt
}
var lt = {
    exports: {}
};
lt.exports;
var Er;

function Bi() {
    return Er || (Er = 1, function(g, t) {
        var n = ui(),
            u = t && !t.nodeType && t,
            m = u && !0 && g && !g.nodeType && g,
            h = m && m.exports === u,
            f = h ? n.Buffer : void 0,
            o = f ? f.allocUnsafe : void 0;

        function c(a, s) {
            if (s) return a.slice();
            var e = a.length,
                p = o ? o(e) : new a.constructor(e);
            return a.copy(p), p
        }
        g.exports = c
    }(lt, lt.exports)), lt.exports
}
var Ht, Pr;

function Fi() {
    if (Pr) return Ht;
    Pr = 1;

    function g(t, n) {
        var u = -1,
            m = t.length;
        for (n || (n = Array(m)); ++u < m;) n[u] = t[u];
        return n
    }
    return Ht = g, Ht
}
var Dt, Rr;

function Ti() {
    if (Rr) return Dt;
    Rr = 1;
    var g = yt(),
        t = on();

    function n(u, m) {
        return g(u, t(u), m)
    }
    return Dt = n, Dt
}
var It, kr;

function pn() {
    if (kr) return It;
    kr = 1;
    var g = ci(),
        t = rn(),
        n = on(),
        u = si(),
        m = Object.getOwnPropertySymbols,
        h = m ? function(f) {
            for (var o = []; f;) g(o, n(f)), f = t(f);
            return o
        } : u;
    return It = h, It
}
var Nt, Mr;

function Hi() {
    if (Mr) return Nt;
    Mr = 1;
    var g = yt(),
        t = pn();

    function n(u, m) {
        return g(u, t(u), m)
    }
    return Nt = n, Nt
}
var Lt, Or;

function Di() {
    if (Or) return Lt;
    Or = 1;
    var g = fi(),
        t = pn(),
        n = ur();

    function u(m) {
        return g(m, n, t)
    }
    return Lt = u, Lt
}
var Gt, qr;

function Ii() {
    if (qr) return Gt;
    qr = 1;
    var g = Object.prototype,
        t = g.hasOwnProperty;

    function n(u) {
        var m = u.length,
            h = new u.constructor(m);
        return m && typeof u[0] == "string" && t.call(u, "index") && (h.index = u.index, h.input = u.input), h
    }
    return Gt = n, Gt
}
var $t, Ar;

function sr() {
    if (Ar) return $t;
    Ar = 1;
    var g = di();

    function t(n) {
        var u = new n.constructor(n.byteLength);
        return new g(u).set(new g(n)), u
    }
    return $t = t, $t
}
var Wt, Br;

function Ni() {
    if (Br) return Wt;
    Br = 1;
    var g = sr();

    function t(n, u) {
        var m = u ? g(n.buffer) : n.buffer;
        return new n.constructor(m, n.byteOffset, n.byteLength)
    }
    return Wt = t, Wt
}
var zt, Fr;

function Li() {
    if (Fr) return zt;
    Fr = 1;
    var g = /\w*$/;

    function t(n) {
        var u = new n.constructor(n.source, g.exec(n));
        return u.lastIndex = n.lastIndex, u
    }
    return zt = t, zt
}
var Ut, Tr;

function Gi() {
    if (Tr) return Ut;
    Tr = 1;
    var g = hi(),
        t = g ? g.prototype : void 0,
        n = t ? t.valueOf : void 0;

    function u(m) {
        return n ? Object(n.call(m)) : {}
    }
    return Ut = u, Ut
}
var jt, Hr;

function $i() {
    if (Hr) return jt;
    Hr = 1;
    var g = sr();

    function t(n, u) {
        var m = u ? g(n.buffer) : n.buffer;
        return new n.constructor(m, n.byteOffset, n.length)
    }
    return jt = t, jt
}
var Vt, Dr;

function Wi() {
    if (Dr) return Vt;
    Dr = 1;
    var g = sr(),
        t = Ni(),
        n = Li(),
        u = Gi(),
        m = $i(),
        h = "[object Boolean]",
        f = "[object Date]",
        o = "[object Map]",
        c = "[object Number]",
        a = "[object RegExp]",
        s = "[object Set]",
        e = "[object String]",
        p = "[object Symbol]",
        v = "[object ArrayBuffer]",
        r = "[object DataView]",
        d = "[object Float32Array]",
        l = "[object Float64Array]",
        i = "[object Int8Array]",
        w = "[object Int16Array]",
        _ = "[object Int32Array]",
        C = "[object Uint8Array]",
        O = "[object Uint8ClampedArray]",
        P = "[object Uint16Array]",
        R = "[object Uint32Array]";

    function M(q, A, F) {
        var I = q.constructor;
        switch (A) {
            case v:
                return g(q);
            case h:
            case f:
                return new I(+q);
            case r:
                return t(q, F);
            case d:
            case l:
            case i:
            case w:
            case _:
            case C:
            case O:
            case P:
            case R:
                return m(q, F);
            case o:
                return new I;
            case c:
            case e:
                return new I(q);
            case a:
                return n(q);
            case s:
                return new I;
            case p:
                return u(q)
        }
    }
    return Vt = M, Vt
}
var Xt, Ir;

function zi() {
    if (Ir) return Xt;
    Ir = 1;
    var g = ir(),
        t = Object.create,
        n = function() {
            function u() {}
            return function(m) {
                if (!g(m)) return {};
                if (t) return t(m);
                u.prototype = m;
                var h = new u;
                return u.prototype = void 0, h
            }
        }();
    return Xt = n, Xt
}
var Kt, Nr;

function Ui() {
    if (Nr) return Kt;
    Nr = 1;
    var g = zi(),
        t = rn(),
        n = nn();

    function u(m) {
        return typeof m.constructor == "function" && !n(m) ? g(t(m)) : {}
    }
    return Kt = u, Kt
}
var Yt, Lr;

function ji() {
    if (Lr) return Yt;
    Lr = 1;
    var g = or(),
        t = ln(),
        n = "[object Map]";

    function u(m) {
        return t(m) && g(m) == n
    }
    return Yt = u, Yt
}
var Zt, Gr;

function Vi() {
    if (Gr) return Zt;
    Gr = 1;
    var g = ji(),
        t = sn(),
        n = un(),
        u = n && n.isMap,
        m = u ? t(u) : g;
    return Zt = m, Zt
}
var Jt, $r;

function Xi() {
    if ($r) return Jt;
    $r = 1;
    var g = or(),
        t = ln(),
        n = "[object Set]";

    function u(m) {
        return t(m) && g(m) == n
    }
    return Jt = u, Jt
}
var Qt, Wr;

function Ki() {
    if (Wr) return Qt;
    Wr = 1;
    var g = Xi(),
        t = sn(),
        n = un(),
        u = n && n.isSet,
        m = u ? t(u) : g;
    return Qt = m, Qt
}
var er, zr;

function Yi() {
    if (zr) return er;
    zr = 1;
    var g = pi(),
        t = dn(),
        n = hn(),
        u = Mi(),
        m = Ai(),
        h = Bi(),
        f = Fi(),
        o = Ti(),
        c = Hi(),
        a = vi(),
        s = Di(),
        e = or(),
        p = Ii(),
        v = Wi(),
        r = Ui(),
        d = cn(),
        l = gi(),
        i = Vi(),
        w = ir(),
        _ = Ki(),
        C = an(),
        O = ur(),
        P = 1,
        R = 2,
        M = 4,
        q = "[object Arguments]",
        A = "[object Array]",
        F = "[object Boolean]",
        I = "[object Date]",
        U = "[object Error]",
        z = "[object Function]",
        L = "[object GeneratorFunction]",
        re = "[object Map]",
        V = "[object Number]",
        st = "[object Object]",
        _t = "[object RegExp]",
        Y = "[object Set]",
        le = "[object String]",
        ct = "[object Symbol]",
        ft = "[object WeakMap]",
        Z = "[object ArrayBuffer]",
        Q = "[object DataView]",
        wt = "[object Float32Array]",
        Ct = "[object Float64Array]",
        b = "[object Int8Array]",
        y = "[object Int16Array]",
        x = "[object Int32Array]",
        S = "[object Uint8Array]",
        k = "[object Uint8ClampedArray]",
        E = "[object Uint16Array]",
        N = "[object Uint32Array]",
        B = {};
    B[q] = B[A] = B[Z] = B[Q] = B[F] = B[I] = B[wt] = B[Ct] = B[b] = B[y] = B[x] = B[re] = B[V] = B[st] = B[_t] = B[Y] = B[le] = B[ct] = B[S] = B[k] = B[E] = B[N] = !0, B[U] = B[z] = B[ft] = !1;

    function $(H, J, j, Wn, dt, ae) {
        var X, ht = J & P,
            pt = J & R,
            zn = J & M;
        if (j && (X = dt ? j(H, Wn, dt, ae) : j(H)), X !== void 0) return X;
        if (!w(H)) return H;
        var cr = d(H);
        if (cr) {
            if (X = p(H), !ht) return f(H, X)
        } else {
            var se = e(H),
                fr = se == z || se == L;
            if (l(H)) return h(H, ht);
            if (se == st || se == q || fr && !dt) {
                if (X = pt || fr ? {} : r(H), !ht) return pt ? c(H, m(X, H)) : o(H, u(X, H))
            } else {
                if (!B[se]) return dt ? H : {};
                X = v(H, se, ht)
            }
        }
        ae || (ae = new g);
        var dr = ae.get(H);
        if (dr) return dr;
        ae.set(H, X), _(H) ? H.forEach(function(ne) {
            X.add($(ne, J, j, ne, H, ae))
        }) : i(H) && H.forEach(function(ne, ue) {
            X.set(ue, $(ne, J, j, ue, H, ae))
        });
        var Un = zn ? pt ? s : a : pt ? O : C,
            hr = cr ? void 0 : Un(H);
        return t(hr || H, function(ne, ue) {
            hr && (ue = ne, ne = H[ue]), n(X, ue, $(ne, J, j, ue, H, ae))
        }), X
    }
    return er = $, er
}
var tr, Ur;

function Zi() {
    if (Ur) return tr;
    Ur = 1;
    var g = Yi(),
        t = 1,
        n = 4;

    function u(m) {
        return g(m, t | n)
    }
    return tr = u, tr
}
var jr;

function Ji() {
    if (jr) return de;
    jr = 1, Object.defineProperty(de, "__esModule", {
        value: !0
    }), de.mergeClasses = void 0;
    var g = lr(),
        t = h(g),
        n = Zi(),
        u = h(n),
        m = Object.assign || function(o) {
            for (var c = 1; c < arguments.length; c++) {
                var a = arguments[c];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s])
            }
            return o
        };

    function h(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var f = de.mergeClasses = function(c) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            s = c.default && (0, u.default)(c.default) || {};
        return a.map(function(e) {
            var p = c[e];
            return p && (0, t.default)(p, function(v, r) {
                s[r] || (s[r] = {}), s[r] = m({}, s[r], p[r])
            }), e
        }), s
    };
    return de.default = f, de
}
var he = {},
    Vr;

function Qi() {
    if (Vr) return he;
    Vr = 1, Object.defineProperty(he, "__esModule", {
        value: !0
    }), he.autoprefix = void 0;
    var g = lr(),
        t = u(g),
        n = Object.assign || function(f) {
            for (var o = 1; o < arguments.length; o++) {
                var c = arguments[o];
                for (var a in c) Object.prototype.hasOwnProperty.call(c, a) && (f[a] = c[a])
            }
            return f
        };

    function u(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var m = {
            borderRadius: function(o) {
                return {
                    msBorderRadius: o,
                    MozBorderRadius: o,
                    OBorderRadius: o,
                    WebkitBorderRadius: o,
                    borderRadius: o
                }
            },
            boxShadow: function(o) {
                return {
                    msBoxShadow: o,
                    MozBoxShadow: o,
                    OBoxShadow: o,
                    WebkitBoxShadow: o,
                    boxShadow: o
                }
            },
            userSelect: function(o) {
                return {
                    WebkitTouchCallout: o,
                    KhtmlUserSelect: o,
                    MozUserSelect: o,
                    msUserSelect: o,
                    WebkitUserSelect: o,
                    userSelect: o
                }
            },
            flex: function(o) {
                return {
                    WebkitBoxFlex: o,
                    MozBoxFlex: o,
                    WebkitFlex: o,
                    msFlex: o,
                    flex: o
                }
            },
            flexBasis: function(o) {
                return {
                    WebkitFlexBasis: o,
                    flexBasis: o
                }
            },
            justifyContent: function(o) {
                return {
                    WebkitJustifyContent: o,
                    justifyContent: o
                }
            },
            transition: function(o) {
                return {
                    msTransition: o,
                    MozTransition: o,
                    OTransition: o,
                    WebkitTransition: o,
                    transition: o
                }
            },
            transform: function(o) {
                return {
                    msTransform: o,
                    MozTransform: o,
                    OTransform: o,
                    WebkitTransform: o,
                    transform: o
                }
            },
            absolute: function(o) {
                var c = o && o.split(" ");
                return {
                    position: "absolute",
                    top: c && c[0],
                    right: c && c[1],
                    bottom: c && c[2],
                    left: c && c[3]
                }
            },
            extend: function(o, c) {
                var a = c[o];
                return a || {
                    extend: o
                }
            }
        },
        h = he.autoprefix = function(o) {
            var c = {};
            return (0, t.default)(o, function(a, s) {
                var e = {};
                (0, t.default)(a, function(p, v) {
                    var r = m[v];
                    r ? e = n({}, e, r(p)) : e[v] = p
                }), c[s] = e
            }), c
        };
    return he.default = h, he
}
var pe = {},
    Xr;

function eo() {
    if (Xr) return pe;
    Xr = 1, Object.defineProperty(pe, "__esModule", {
        value: !0
    }), pe.hover = void 0;
    var g = Object.assign || function(c) {
            for (var a = 1; a < arguments.length; a++) {
                var s = arguments[a];
                for (var e in s) Object.prototype.hasOwnProperty.call(s, e) && (c[e] = s[e])
            }
            return c
        },
        t = T(),
        n = u(t);

    function u(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function m(c, a) {
        if (!(c instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function h(c, a) {
        if (!c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a && (typeof a == "object" || typeof a == "function") ? a : c
    }

    function f(c, a) {
        if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
        c.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(c, a) : c.__proto__ = a)
    }
    var o = pe.hover = function(a) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(e) {
            f(p, e);

            function p() {
                var v, r, d, l;
                m(this, p);
                for (var i = arguments.length, w = Array(i), _ = 0; _ < i; _++) w[_] = arguments[_];
                return l = (r = (d = h(this, (v = p.__proto__ || Object.getPrototypeOf(p)).call.apply(v, [this].concat(w))), d), d.state = {
                    hover: !1
                }, d.handleMouseOver = function() {
                    return d.setState({
                        hover: !0
                    })
                }, d.handleMouseOut = function() {
                    return d.setState({
                        hover: !1
                    })
                }, d.render = function() {
                    return n.default.createElement(s, {
                        onMouseOver: d.handleMouseOver,
                        onMouseOut: d.handleMouseOut
                    }, n.default.createElement(a, g({}, d.props, d.state)))
                }, r), h(d, l)
            }
            return p
        }(n.default.Component)
    };
    return pe.default = o, pe
}
var ve = {},
    Kr;

function to() {
    if (Kr) return ve;
    Kr = 1, Object.defineProperty(ve, "__esModule", {
        value: !0
    }), ve.active = void 0;
    var g = Object.assign || function(c) {
            for (var a = 1; a < arguments.length; a++) {
                var s = arguments[a];
                for (var e in s) Object.prototype.hasOwnProperty.call(s, e) && (c[e] = s[e])
            }
            return c
        },
        t = T(),
        n = u(t);

    function u(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function m(c, a) {
        if (!(c instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function h(c, a) {
        if (!c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a && (typeof a == "object" || typeof a == "function") ? a : c
    }

    function f(c, a) {
        if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
        c.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(c, a) : c.__proto__ = a)
    }
    var o = ve.active = function(a) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(e) {
            f(p, e);

            function p() {
                var v, r, d, l;
                m(this, p);
                for (var i = arguments.length, w = Array(i), _ = 0; _ < i; _++) w[_] = arguments[_];
                return l = (r = (d = h(this, (v = p.__proto__ || Object.getPrototypeOf(p)).call.apply(v, [this].concat(w))), d), d.state = {
                    active: !1
                }, d.handleMouseDown = function() {
                    return d.setState({
                        active: !0
                    })
                }, d.handleMouseUp = function() {
                    return d.setState({
                        active: !1
                    })
                }, d.render = function() {
                    return n.default.createElement(s, {
                        onMouseDown: d.handleMouseDown,
                        onMouseUp: d.handleMouseUp
                    }, n.default.createElement(a, g({}, d.props, d.state)))
                }, r), h(d, l)
            }
            return p
        }(n.default.Component)
    };
    return ve.default = o, ve
}
var vt = {},
    Yr;

function ro() {
    if (Yr) return vt;
    Yr = 1, Object.defineProperty(vt, "__esModule", {
        value: !0
    });
    var g = function(n, u) {
        var m = {},
            h = function(o) {
                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                m[o] = c
            };
        return n === 0 && h("first-child"), n === u - 1 && h("last-child"), (n === 0 || n % 2 === 0) && h("even"), Math.abs(n % 2) === 1 && h("odd"), h("nth-child", n), m
    };
    return vt.default = g, vt
}
var Zr;

function D() {
    if (Zr) return K;
    Zr = 1, Object.defineProperty(K, "__esModule", {
        value: !0
    }), K.ReactCSS = K.loop = K.handleActive = K.handleHover = K.hover = void 0;
    var g = ki(),
        t = p(g),
        n = Ji(),
        u = p(n),
        m = Qi(),
        h = p(m),
        f = eo(),
        o = p(f),
        c = to(),
        a = p(c),
        s = ro(),
        e = p(s);

    function p(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    K.hover = o.default, K.handleHover = o.default, K.handleActive = a.default, K.loop = e.default;
    var v = K.ReactCSS = function(d) {
        for (var l = arguments.length, i = Array(l > 1 ? l - 1 : 0), w = 1; w < l; w++) i[w - 1] = arguments[w];
        var _ = (0, t.default)(i),
            C = (0, u.default)(d, _);
        return (0, h.default)(C)
    };
    return K.default = v, K
}
var rr = {},
    ge = {},
    gt = {},
    Jr;

function ao() {
    return Jr || (Jr = 1, Object.defineProperty(gt, "__esModule", {
        value: !0
    }), gt.calculateChange = function(t, n, u, m) {
        t.preventDefault();
        var h = m.clientWidth,
            f = m.clientHeight,
            o = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
            c = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
            a = o - (m.getBoundingClientRect().left + window.pageXOffset),
            s = c - (m.getBoundingClientRect().top + window.pageYOffset);
        if (u.direction === "vertical") {
            var e = void 0;
            if (s < 0 ? e = 0 : s > f ? e = 1 : e = Math.round(s * 100 / f) / 100, u.hsl.a !== e) return {
                h: u.hsl.h,
                s: u.hsl.s,
                l: u.hsl.l,
                a: e,
                source: "rgb"
            }
        } else {
            var p = void 0;
            if (a < 0 ? p = 0 : a > h ? p = 1 : p = Math.round(a * 100 / h) / 100, u.a !== p) return {
                h: u.hsl.h,
                s: u.hsl.s,
                l: u.hsl.l,
                a: p,
                source: "rgb"
            }
        }
        return null
    }), gt
}
var be = {},
    it = {},
    Qr;

function no() {
    if (Qr) return it;
    Qr = 1, Object.defineProperty(it, "__esModule", {
        value: !0
    });
    var g = {},
        t = it.render = function(u, m, h, f) {
            if (typeof document > "u" && !f) return null;
            var o = f ? new f : document.createElement("canvas");
            o.width = h * 2, o.height = h * 2;
            var c = o.getContext("2d");
            return c ? (c.fillStyle = u, c.fillRect(0, 0, o.width, o.height), c.fillStyle = m, c.fillRect(0, 0, h, h), c.translate(h, h), c.fillRect(0, 0, h, h), o.toDataURL()) : null
        };
    return it.get = function(u, m, h, f) {
        var o = u + "-" + m + "-" + h + (f ? "-server" : ""),
            c = t(u, m, h, f);
        return g[o] ? g[o] : (g[o] = c, c)
    }, it
}
var ea;

function vn() {
    if (ea) return be;
    ea = 1, Object.defineProperty(be, "__esModule", {
        value: !0
    }), be.Checkboard = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = no(),
        h = f(m);

    function f(a) {
        if (a && a.__esModule) return a;
        var s = {};
        if (a != null)
            for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (s[e] = a[e]);
        return s.default = a, s
    }

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = be.Checkboard = function(s) {
        var e = s.white,
            p = s.grey,
            v = s.size,
            r = s.renderers,
            d = s.borderRadius,
            l = s.boxShadow,
            i = (0, u.default)({
                default: {
                    grid: {
                        borderRadius: d,
                        boxShadow: l,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + h.get(e, p, v, r.canvas) + ") center left"
                    }
                }
            });
        return t.default.createElement("div", {
            style: i.grid
        })
    };
    return c.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {}
    }, be.default = c, be
}
var ta;

function io() {
    if (ta) return ge;
    ta = 1, Object.defineProperty(ge, "__esModule", {
        value: !0
    }), ge.Alpha = void 0;
    var g = Object.assign || function(l) {
            for (var i = 1; i < arguments.length; i++) {
                var w = arguments[i];
                for (var _ in w) Object.prototype.hasOwnProperty.call(w, _) && (l[_] = w[_])
            }
            return l
        },
        t = function() {
            function l(i, w) {
                for (var _ = 0; _ < w.length; _++) {
                    var C = w[_];
                    C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(i, C.key, C)
                }
            }
            return function(i, w, _) {
                return w && l(i.prototype, w), _ && l(i, _), i
            }
        }(),
        n = T(),
        u = e(n),
        m = D(),
        h = e(m),
        f = ao(),
        o = s(f),
        c = vn(),
        a = e(c);

    function s(l) {
        if (l && l.__esModule) return l;
        var i = {};
        if (l != null)
            for (var w in l) Object.prototype.hasOwnProperty.call(l, w) && (i[w] = l[w]);
        return i.default = l, i
    }

    function e(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }

    function p(l, i) {
        if (!(l instanceof i)) throw new TypeError("Cannot call a class as a function")
    }

    function v(l, i) {
        if (!l) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i && (typeof i == "object" || typeof i == "function") ? i : l
    }

    function r(l, i) {
        if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
        l.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: l,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(l, i) : l.__proto__ = i)
    }
    var d = ge.Alpha = function(l) {
        r(i, l);

        function i() {
            var w, _, C, O;
            p(this, i);
            for (var P = arguments.length, R = Array(P), M = 0; M < P; M++) R[M] = arguments[M];
            return O = (_ = (C = v(this, (w = i.__proto__ || Object.getPrototypeOf(i)).call.apply(w, [this].concat(R))), C), C.handleChange = function(q, A) {
                var F = o.calculateChange(q, A, C.props, C.container);
                F && C.props.onChange && C.props.onChange(F, q)
            }, C.handleMouseDown = function(q) {
                C.handleChange(q, !0), window.addEventListener("mousemove", C.handleChange), window.addEventListener("mouseup", C.handleMouseUp)
            }, C.handleMouseUp = function() {
                C.unbindEventListeners()
            }, C.unbindEventListeners = function() {
                window.removeEventListener("mousemove", C.handleChange), window.removeEventListener("mouseup", C.handleMouseUp)
            }, _), v(C, O)
        }
        return t(i, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "render",
            value: function() {
                var _ = this,
                    C = this.props.rgb,
                    O = (0, h.default)({
                        default: {
                            alpha: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            checkboard: {
                                absolute: "0px 0px 0px 0px",
                                overflow: "hidden",
                                borderRadius: this.props.radius
                            },
                            gradient: {
                                absolute: "0px 0px 0px 0px",
                                background: "linear-gradient(to right, rgba(" + C.r + "," + C.g + "," + C.b + `, 0) 0%,
           rgba(` + C.r + "," + C.g + "," + C.b + ", 1) 100%)",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            container: {
                                position: "relative",
                                height: "100%",
                                margin: "0 3px"
                            },
                            pointer: {
                                position: "absolute",
                                left: C.a * 100 + "%"
                            },
                            slider: {
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                marginTop: "1px",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            gradient: {
                                background: "linear-gradient(to bottom, rgba(" + C.r + "," + C.g + "," + C.b + `, 0) 0%,
           rgba(` + C.r + "," + C.g + "," + C.b + ", 1) 100%)"
                            },
                            pointer: {
                                left: 0,
                                top: C.a * 100 + "%"
                            }
                        },
                        overwrite: g({}, this.props.style)
                    }, {
                        vertical: this.props.direction === "vertical",
                        overwrite: !0
                    });
                return u.default.createElement("div", {
                    style: O.alpha
                }, u.default.createElement("div", {
                    style: O.checkboard
                }, u.default.createElement(a.default, {
                    renderers: this.props.renderers
                })), u.default.createElement("div", {
                    style: O.gradient
                }), u.default.createElement("div", {
                    style: O.container,
                    ref: function(R) {
                        return _.container = R
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, u.default.createElement("div", {
                    style: O.pointer
                }, this.props.pointer ? u.default.createElement(this.props.pointer, this.props) : u.default.createElement("div", {
                    style: O.slider
                }))))
            }
        }]), i
    }(n.PureComponent || n.Component);
    return ge.default = d, ge
}
var me = {},
    ra;

function oo() {
    if (ra) return me;
    ra = 1, Object.defineProperty(me, "__esModule", {
        value: !0
    }), me.EditableInput = void 0;
    var g = function() {
            function e(p, v) {
                for (var r = 0; r < v.length; r++) {
                    var d = v[r];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(p, d.key, d)
                }
            }
            return function(p, v, r) {
                return v && e(p.prototype, v), r && e(p, r), p
            }
        }(),
        t = T(),
        n = h(t),
        u = D(),
        m = h(u);

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e, p, v) {
        return p in e ? Object.defineProperty(e, p, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[p] = v, e
    }

    function o(e, p) {
        if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, p) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return p && (typeof p == "object" || typeof p == "function") ? p : e
    }

    function a(e, p) {
        if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
        e.prototype = Object.create(p && p.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : e.__proto__ = p)
    }
    var s = me.EditableInput = function(e) {
        a(p, e);

        function p(v) {
            o(this, p);
            var r = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this));
            return r.handleBlur = function() {
                r.state.blurValue && r.setState({
                    value: r.state.blurValue,
                    blurValue: null
                })
            }, r.handleChange = function(d) {
                r.props.label ? r.props.onChange && r.props.onChange(f({}, r.props.label, d.target.value), d) : r.props.onChange && r.props.onChange(d.target.value, d), r.setState({
                    value: d.target.value
                })
            }, r.handleKeyDown = function(d) {
                var l = String(d.target.value),
                    i = l.indexOf("%") > -1,
                    w = Number(l.replace(/%/g, ""));
                if (!isNaN(w)) {
                    var _ = r.props.arrowOffset || 1;
                    d.keyCode === 38 && (r.props.label !== null ? r.props.onChange && r.props.onChange(f({}, r.props.label, w + _), d) : r.props.onChange && r.props.onChange(w + _, d), i ? r.setState({
                        value: w + _ + "%"
                    }) : r.setState({
                        value: w + _
                    })), d.keyCode === 40 && (r.props.label !== null ? r.props.onChange && r.props.onChange(f({}, r.props.label, w - _), d) : r.props.onChange && r.props.onChange(w - _, d), i ? r.setState({
                        value: w - _ + "%"
                    }) : r.setState({
                        value: w - _
                    }))
                }
            }, r.handleDrag = function(d) {
                if (r.props.dragLabel) {
                    var l = Math.round(r.props.value + d.movementX);
                    l >= 0 && l <= r.props.dragMax && r.props.onChange && r.props.onChange(f({}, r.props.label, l), d)
                }
            }, r.handleMouseDown = function(d) {
                r.props.dragLabel && (d.preventDefault(), r.handleDrag(d), window.addEventListener("mousemove", r.handleDrag), window.addEventListener("mouseup", r.handleMouseUp))
            }, r.handleMouseUp = function() {
                r.unbindEventListeners()
            }, r.unbindEventListeners = function() {
                window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp)
            }, r.state = {
                value: String(v.value).toUpperCase(),
                blurValue: String(v.value).toUpperCase()
            }, r
        }
        return g(p, [{
            key: "componentWillReceiveProps",
            value: function(r) {
                var d = this.input;
                r.value !== this.state.value && (d === document.activeElement ? this.setState({
                    blurValue: String(r.value).toUpperCase()
                }) : this.setState({
                    value: String(r.value).toUpperCase(),
                    blurValue: !this.state.blurValue && String(r.value).toUpperCase()
                }))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "render",
            value: function() {
                var r = this,
                    d = (0, m.default)({
                        default: {
                            wrap: {
                                position: "relative"
                            }
                        },
                        "user-override": {
                            wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                            input: this.props.style && this.props.style.input ? this.props.style.input : {},
                            label: this.props.style && this.props.style.label ? this.props.style.label : {}
                        },
                        "dragLabel-true": {
                            label: {
                                cursor: "ew-resize"
                            }
                        }
                    }, {
                        "user-override": !0
                    }, this.props);
                return n.default.createElement("div", {
                    style: d.wrap
                }, n.default.createElement("input", {
                    style: d.input,
                    ref: function(i) {
                        return r.input = i
                    },
                    value: this.state.value,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    placeholder: this.props.placeholder,
                    spellCheck: "false"
                }), this.props.label && !this.props.hideLabel ? n.default.createElement("span", {
                    style: d.label,
                    onMouseDown: this.handleMouseDown
                }, this.props.label) : null)
            }
        }]), p
    }(t.PureComponent || t.Component);
    return me.default = s, me
}
var xe = {},
    bt = {},
    aa;

function lo() {
    return aa || (aa = 1, Object.defineProperty(bt, "__esModule", {
        value: !0
    }), bt.calculateChange = function(t, n, u, m) {
        t.preventDefault();
        var h = m.clientWidth,
            f = m.clientHeight,
            o = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
            c = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
            a = o - (m.getBoundingClientRect().left + window.pageXOffset),
            s = c - (m.getBoundingClientRect().top + window.pageYOffset);
        if (u.direction === "vertical") {
            var e = void 0;
            if (s < 0) e = 359;
            else if (s > f) e = 0;
            else {
                var p = -(s * 100 / f) + 100;
                e = 360 * p / 100
            }
            if (u.hsl.h !== e) return {
                h: e,
                s: u.hsl.s,
                l: u.hsl.l,
                a: u.hsl.a,
                source: "rgb"
            }
        } else {
            var v = void 0;
            if (a < 0) v = 0;
            else if (a > h) v = 359;
            else {
                var r = a * 100 / h;
                v = 360 * r / 100
            }
            if (u.hsl.h !== v) return {
                h: v,
                s: u.hsl.s,
                l: u.hsl.l,
                a: u.hsl.a,
                source: "rgb"
            }
        }
        return null
    }), bt
}
var na;

function uo() {
    if (na) return xe;
    na = 1, Object.defineProperty(xe, "__esModule", {
        value: !0
    }), xe.Hue = void 0;
    var g = function() {
            function v(r, d) {
                for (var l = 0; l < d.length; l++) {
                    var i = d[l];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
                }
            }
            return function(r, d, l) {
                return d && v(r.prototype, d), l && v(r, l), r
            }
        }(),
        t = T(),
        n = c(t),
        u = D(),
        m = c(u),
        h = lo(),
        f = o(h);

    function o(v) {
        if (v && v.__esModule) return v;
        var r = {};
        if (v != null)
            for (var d in v) Object.prototype.hasOwnProperty.call(v, d) && (r[d] = v[d]);
        return r.default = v, r
    }

    function c(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }

    function a(v, r) {
        if (!(v instanceof r)) throw new TypeError("Cannot call a class as a function")
    }

    function s(v, r) {
        if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r && (typeof r == "object" || typeof r == "function") ? r : v
    }

    function e(v, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        v.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(v, r) : v.__proto__ = r)
    }
    var p = xe.Hue = function(v) {
        e(r, v);

        function r() {
            var d, l, i, w;
            a(this, r);
            for (var _ = arguments.length, C = Array(_), O = 0; O < _; O++) C[O] = arguments[O];
            return w = (l = (i = s(this, (d = r.__proto__ || Object.getPrototypeOf(r)).call.apply(d, [this].concat(C))), i), i.handleChange = function(P, R) {
                var M = f.calculateChange(P, R, i.props, i.container);
                M && i.props.onChange && i.props.onChange(M, P)
            }, i.handleMouseDown = function(P) {
                i.handleChange(P, !0), window.addEventListener("mousemove", i.handleChange), window.addEventListener("mouseup", i.handleMouseUp)
            }, i.handleMouseUp = function() {
                i.unbindEventListeners()
            }, l), s(i, w)
        }
        return g(r, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var l = this,
                    i = this.props.direction,
                    w = i === void 0 ? "horizontal" : i,
                    _ = (0, m.default)({
                        default: {
                            hue: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius,
                                boxShadow: this.props.shadow
                            },
                            container: {
                                padding: "0 2px",
                                position: "relative",
                                height: "100%",
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                left: this.props.hsl.h * 100 / 360 + "%"
                            },
                            slider: {
                                marginTop: "1px",
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            pointer: {
                                left: "0px",
                                top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
                            }
                        }
                    }, {
                        vertical: w === "vertical"
                    });
                return n.default.createElement("div", {
                    style: _.hue
                }, n.default.createElement("div", {
                    className: "hue-" + w,
                    style: _.container,
                    ref: function(O) {
                        return l.container = O
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, n.default.createElement("style", null, `
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `), n.default.createElement("div", {
                    style: _.pointer
                }, this.props.pointer ? n.default.createElement(this.props.pointer, this.props) : n.default.createElement("div", {
                    style: _.slider
                }))))
            }
        }]), r
    }(t.PureComponent || t.Component);
    return xe.default = p, xe
}
var ye = {},
    ia;

function so() {
    if (ia) return ye;
    ia = 1, Object.defineProperty(ye, "__esModule", {
        value: !0
    }), ye.Raised = void 0;
    var g = T(),
        t = f(g),
        n = ee(),
        u = f(n),
        m = D(),
        h = f(m);

    function f(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var o = ye.Raised = function(a) {
        var s = a.zDepth,
            e = a.radius,
            p = a.background,
            v = a.children,
            r = (0, h.default)({
                default: {
                    wrap: {
                        position: "relative",
                        display: "inline-block"
                    },
                    content: {
                        position: "relative"
                    },
                    bg: {
                        absolute: "0px 0px 0px 0px",
                        boxShadow: "0 " + s + "px " + s * 4 + "px rgba(0,0,0,.24)",
                        borderRadius: e,
                        background: p
                    }
                },
                "zDepth-0": {
                    bg: {
                        boxShadow: "none"
                    }
                },
                "zDepth-1": {
                    bg: {
                        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
                    }
                },
                "zDepth-2": {
                    bg: {
                        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
                    }
                },
                "zDepth-3": {
                    bg: {
                        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
                    }
                },
                "zDepth-4": {
                    bg: {
                        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
                    }
                },
                "zDepth-5": {
                    bg: {
                        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
                    }
                },
                square: {
                    bg: {
                        borderRadius: "0"
                    }
                },
                circle: {
                    bg: {
                        borderRadius: "50%"
                    }
                }
            }, {
                "zDepth-1": s === 1
            });
        return t.default.createElement("div", {
            style: r.wrap
        }, t.default.createElement("div", {
            style: r.bg
        }), t.default.createElement("div", {
            style: r.content
        }, v))
    };
    return o.propTypes = {
        background: u.default.string,
        zDepth: u.default.oneOf([0, 1, 2, 3, 4, 5]),
        radius: u.default.number
    }, o.defaultProps = {
        background: "#fff",
        zDepth: 1,
        radius: 2
    }, ye.default = o, ye
}
var _e = {},
    mt = {},
    oa;

function co() {
    return oa || (oa = 1, Object.defineProperty(mt, "__esModule", {
        value: !0
    }), mt.calculateChange = function(t, n, u, m) {
        t.preventDefault();
        var h = m.getBoundingClientRect(),
            f = h.width,
            o = h.height,
            c = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
            a = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
            s = c - (m.getBoundingClientRect().left + window.pageXOffset),
            e = a - (m.getBoundingClientRect().top + window.pageYOffset);
        s < 0 ? s = 0 : s > f ? s = f : e < 0 ? e = 0 : e > o && (e = o);
        var p = s * 100 / f,
            v = -(e * 100 / o) + 100;
        return {
            h: u.hsl.h,
            s: p,
            v,
            a: u.hsl.a,
            source: "rgb"
        }
    }), mt
}
var la;

function fo() {
    if (la) return _e;
    la = 1, Object.defineProperty(_e, "__esModule", {
        value: !0
    }), _e.Saturation = void 0;
    var g = function() {
            function d(l, i) {
                for (var w = 0; w < i.length; w++) {
                    var _ = i[w];
                    _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(l, _.key, _)
                }
            }
            return function(l, i, w) {
                return i && d(l.prototype, i), w && d(l, w), l
            }
        }(),
        t = T(),
        n = s(t),
        u = D(),
        m = s(u),
        h = ri(),
        f = s(h),
        o = co(),
        c = a(o);

    function a(d) {
        if (d && d.__esModule) return d;
        var l = {};
        if (d != null)
            for (var i in d) Object.prototype.hasOwnProperty.call(d, i) && (l[i] = d[i]);
        return l.default = d, l
    }

    function s(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }

    function e(d, l) {
        if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function")
    }

    function p(d, l) {
        if (!d) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l && (typeof l == "object" || typeof l == "function") ? l : d
    }

    function v(d, l) {
        if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
        d.prototype = Object.create(l && l.prototype, {
            constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(d, l) : d.__proto__ = l)
    }
    var r = _e.Saturation = function(d) {
        v(l, d);

        function l(i) {
            e(this, l);
            var w = p(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, i));
            return w.handleChange = function(_, C) {
                w.props.onChange && w.throttle(w.props.onChange, c.calculateChange(_, C, w.props, w.container), _)
            }, w.handleMouseDown = function(_) {
                w.handleChange(_, !0), window.addEventListener("mousemove", w.handleChange), window.addEventListener("mouseup", w.handleMouseUp)
            }, w.handleMouseUp = function() {
                w.unbindEventListeners()
            }, w.throttle = (0, f.default)(function(_, C, O) {
                _(C, O)
            }, 50), w
        }
        return g(l, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var w = this,
                    _ = this.props.style || {},
                    C = _.color,
                    O = _.white,
                    P = _.black,
                    R = _.pointer,
                    M = _.circle,
                    q = (0, m.default)({
                        default: {
                            color: {
                                absolute: "0px 0px 0px 0px",
                                background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                                borderRadius: this.props.radius
                            },
                            white: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            black: {
                                absolute: "0px 0px 0px 0px",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                top: -(this.props.hsv.v * 100) + 100 + "%",
                                left: this.props.hsv.s * 100 + "%",
                                cursor: "default"
                            },
                            circle: {
                                width: "4px",
                                height: "4px",
                                boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
                                borderRadius: "50%",
                                cursor: "hand",
                                transform: "translate(-2px, -2px)"
                            }
                        },
                        custom: {
                            color: C,
                            white: O,
                            black: P,
                            pointer: R,
                            circle: M
                        }
                    }, {
                        custom: !!this.props.style
                    });
                return n.default.createElement("div", {
                    style: q.color,
                    ref: function(F) {
                        return w.container = F
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, n.default.createElement("style", null, `
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `), n.default.createElement("div", {
                    style: q.white,
                    className: "saturation-white"
                }, n.default.createElement("div", {
                    style: q.black,
                    className: "saturation-black"
                }), n.default.createElement("div", {
                    style: q.pointer
                }, this.props.pointer ? n.default.createElement(this.props.pointer, this.props) : n.default.createElement("div", {
                    style: q.circle
                }))))
            }
        }]), l
    }(t.PureComponent || t.Component);
    return _e.default = r, _e
}
var we = {},
    Ce = {},
    ar, ua;

function ho() {
    if (ua) return ar;
    ua = 1;
    var g = dn(),
        t = ai(),
        n = fn(),
        u = cn();

    function m(h, f) {
        var o = u(h) ? g : t;
        return o(h, n(f))
    }
    return ar = m, ar
}
var nr, sa;

function po() {
    return sa || (sa = 1, nr = ho()), nr
}
var xt = {
        exports: {}
    },
    vo = xt.exports,
    ca;

function go() {
    return ca || (ca = 1, function(g, t) {
        (function(n, u) {
            g.exports = u()
        })(vo, function() {
            function n(b) {
                "@babel/helpers - typeof";
                return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
                    return typeof y
                } : function(y) {
                    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y
                }, n(b)
            }
            var u = /^\s+/,
                m = /\s+$/;

            function h(b, y) {
                if (b = b || "", y = y || {}, b instanceof h) return b;
                if (!(this instanceof h)) return new h(b, y);
                var x = f(b);
                this._originalInput = b, this._r = x.r, this._g = x.g, this._b = x.b, this._a = x.a, this._roundA = Math.round(100 * this._a) / 100, this._format = y.format || x.format, this._gradientType = y.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = x.ok
            }
            h.prototype = {
                isDark: function() {
                    return this.getBrightness() < 128
                },
                isLight: function() {
                    return !this.isDark()
                },
                isValid: function() {
                    return this._ok
                },
                getOriginalInput: function() {
                    return this._originalInput
                },
                getFormat: function() {
                    return this._format
                },
                getAlpha: function() {
                    return this._a
                },
                getBrightness: function() {
                    var y = this.toRgb();
                    return (y.r * 299 + y.g * 587 + y.b * 114) / 1e3
                },
                getLuminance: function() {
                    var y = this.toRgb(),
                        x, S, k, E, N, B;
                    return x = y.r / 255, S = y.g / 255, k = y.b / 255, x <= .03928 ? E = x / 12.92 : E = Math.pow((x + .055) / 1.055, 2.4), S <= .03928 ? N = S / 12.92 : N = Math.pow((S + .055) / 1.055, 2.4), k <= .03928 ? B = k / 12.92 : B = Math.pow((k + .055) / 1.055, 2.4), .2126 * E + .7152 * N + .0722 * B
                },
                setAlpha: function(y) {
                    return this._a = z(y), this._roundA = Math.round(100 * this._a) / 100, this
                },
                toHsv: function() {
                    var y = s(this._r, this._g, this._b);
                    return {
                        h: y.h * 360,
                        s: y.s,
                        v: y.v,
                        a: this._a
                    }
                },
                toHsvString: function() {
                    var y = s(this._r, this._g, this._b),
                        x = Math.round(y.h * 360),
                        S = Math.round(y.s * 100),
                        k = Math.round(y.v * 100);
                    return this._a == 1 ? "hsv(" + x + ", " + S + "%, " + k + "%)" : "hsva(" + x + ", " + S + "%, " + k + "%, " + this._roundA + ")"
                },
                toHsl: function() {
                    var y = c(this._r, this._g, this._b);
                    return {
                        h: y.h * 360,
                        s: y.s,
                        l: y.l,
                        a: this._a
                    }
                },
                toHslString: function() {
                    var y = c(this._r, this._g, this._b),
                        x = Math.round(y.h * 360),
                        S = Math.round(y.s * 100),
                        k = Math.round(y.l * 100);
                    return this._a == 1 ? "hsl(" + x + ", " + S + "%, " + k + "%)" : "hsla(" + x + ", " + S + "%, " + k + "%, " + this._roundA + ")"
                },
                toHex: function(y) {
                    return p(this._r, this._g, this._b, y)
                },
                toHexString: function(y) {
                    return "#" + this.toHex(y)
                },
                toHex8: function(y) {
                    return v(this._r, this._g, this._b, this._a, y)
                },
                toHex8String: function(y) {
                    return "#" + this.toHex8(y)
                },
                toRgb: function() {
                    return {
                        r: Math.round(this._r),
                        g: Math.round(this._g),
                        b: Math.round(this._b),
                        a: this._a
                    }
                },
                toRgbString: function() {
                    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")"
                },
                toPercentageRgb: function() {
                    return {
                        r: Math.round(L(this._r, 255) * 100) + "%",
                        g: Math.round(L(this._g, 255) * 100) + "%",
                        b: Math.round(L(this._b, 255) * 100) + "%",
                        a: this._a
                    }
                },
                toPercentageRgbString: function() {
                    return this._a == 1 ? "rgb(" + Math.round(L(this._r, 255) * 100) + "%, " + Math.round(L(this._g, 255) * 100) + "%, " + Math.round(L(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(L(this._r, 255) * 100) + "%, " + Math.round(L(this._g, 255) * 100) + "%, " + Math.round(L(this._b, 255) * 100) + "%, " + this._roundA + ")"
                },
                toName: function() {
                    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : I[p(this._r, this._g, this._b, !0)] || !1
                },
                toFilter: function(y) {
                    var x = "#" + r(this._r, this._g, this._b, this._a),
                        S = x,
                        k = this._gradientType ? "GradientType = 1, " : "";
                    if (y) {
                        var E = h(y);
                        S = "#" + r(E._r, E._g, E._b, E._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + k + "startColorstr=" + x + ",endColorstr=" + S + ")"
                },
                toString: function(y) {
                    var x = !!y;
                    y = y || this._format;
                    var S = !1,
                        k = this._a < 1 && this._a >= 0,
                        E = !x && k && (y === "hex" || y === "hex6" || y === "hex3" || y === "hex4" || y === "hex8" || y === "name");
                    return E ? y === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (y === "rgb" && (S = this.toRgbString()), y === "prgb" && (S = this.toPercentageRgbString()), (y === "hex" || y === "hex6") && (S = this.toHexString()), y === "hex3" && (S = this.toHexString(!0)), y === "hex4" && (S = this.toHex8String(!0)), y === "hex8" && (S = this.toHex8String()), y === "name" && (S = this.toName()), y === "hsl" && (S = this.toHslString()), y === "hsv" && (S = this.toHsvString()), S || this.toHexString())
                },
                clone: function() {
                    return h(this.toString())
                },
                _applyModification: function(y, x) {
                    var S = y.apply(null, [this].concat([].slice.call(x)));
                    return this._r = S._r, this._g = S._g, this._b = S._b, this.setAlpha(S._a), this
                },
                lighten: function() {
                    return this._applyModification(w, arguments)
                },
                brighten: function() {
                    return this._applyModification(_, arguments)
                },
                darken: function() {
                    return this._applyModification(C, arguments)
                },
                desaturate: function() {
                    return this._applyModification(d, arguments)
                },
                saturate: function() {
                    return this._applyModification(l, arguments)
                },
                greyscale: function() {
                    return this._applyModification(i, arguments)
                },
                spin: function() {
                    return this._applyModification(O, arguments)
                },
                _applyCombination: function(y, x) {
                    return y.apply(null, [this].concat([].slice.call(x)))
                },
                analogous: function() {
                    return this._applyCombination(q, arguments)
                },
                complement: function() {
                    return this._applyCombination(P, arguments)
                },
                monochromatic: function() {
                    return this._applyCombination(A, arguments)
                },
                splitcomplement: function() {
                    return this._applyCombination(M, arguments)
                },
                triad: function() {
                    return this._applyCombination(R, [3])
                },
                tetrad: function() {
                    return this._applyCombination(R, [4])
                }
            }, h.fromRatio = function(b, y) {
                if (n(b) == "object") {
                    var x = {};
                    for (var S in b) b.hasOwnProperty(S) && (S === "a" ? x[S] = b[S] : x[S] = le(b[S]));
                    b = x
                }
                return h(b, y)
            };

            function f(b) {
                var y = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    x = 1,
                    S = null,
                    k = null,
                    E = null,
                    N = !1,
                    B = !1;
                return typeof b == "string" && (b = wt(b)), n(b) == "object" && (Q(b.r) && Q(b.g) && Q(b.b) ? (y = o(b.r, b.g, b.b), N = !0, B = String(b.r).substr(-1) === "%" ? "prgb" : "rgb") : Q(b.h) && Q(b.s) && Q(b.v) ? (S = le(b.s), k = le(b.v), y = e(b.h, S, k), N = !0, B = "hsv") : Q(b.h) && Q(b.s) && Q(b.l) && (S = le(b.s), E = le(b.l), y = a(b.h, S, E), N = !0, B = "hsl"), b.hasOwnProperty("a") && (x = b.a)), x = z(x), {
                    ok: N,
                    format: b.format || B,
                    r: Math.min(255, Math.max(y.r, 0)),
                    g: Math.min(255, Math.max(y.g, 0)),
                    b: Math.min(255, Math.max(y.b, 0)),
                    a: x
                }
            }

            function o(b, y, x) {
                return {
                    r: L(b, 255) * 255,
                    g: L(y, 255) * 255,
                    b: L(x, 255) * 255
                }
            }

            function c(b, y, x) {
                b = L(b, 255), y = L(y, 255), x = L(x, 255);
                var S = Math.max(b, y, x),
                    k = Math.min(b, y, x),
                    E, N, B = (S + k) / 2;
                if (S == k) E = N = 0;
                else {
                    var $ = S - k;
                    switch (N = B > .5 ? $ / (2 - S - k) : $ / (S + k), S) {
                        case b:
                            E = (y - x) / $ + (y < x ? 6 : 0);
                            break;
                        case y:
                            E = (x - b) / $ + 2;
                            break;
                        case x:
                            E = (b - y) / $ + 4;
                            break
                    }
                    E /= 6
                }
                return {
                    h: E,
                    s: N,
                    l: B
                }
            }

            function a(b, y, x) {
                var S, k, E;
                b = L(b, 360), y = L(y, 100), x = L(x, 100);

                function N(H, J, j) {
                    return j < 0 && (j += 1), j > 1 && (j -= 1), j < 1 / 6 ? H + (J - H) * 6 * j : j < 1 / 2 ? J : j < 2 / 3 ? H + (J - H) * (2 / 3 - j) * 6 : H
                }
                if (y === 0) S = k = E = x;
                else {
                    var B = x < .5 ? x * (1 + y) : x + y - x * y,
                        $ = 2 * x - B;
                    S = N($, B, b + 1 / 3), k = N($, B, b), E = N($, B, b - 1 / 3)
                }
                return {
                    r: S * 255,
                    g: k * 255,
                    b: E * 255
                }
            }

            function s(b, y, x) {
                b = L(b, 255), y = L(y, 255), x = L(x, 255);
                var S = Math.max(b, y, x),
                    k = Math.min(b, y, x),
                    E, N, B = S,
                    $ = S - k;
                if (N = S === 0 ? 0 : $ / S, S == k) E = 0;
                else {
                    switch (S) {
                        case b:
                            E = (y - x) / $ + (y < x ? 6 : 0);
                            break;
                        case y:
                            E = (x - b) / $ + 2;
                            break;
                        case x:
                            E = (b - y) / $ + 4;
                            break
                    }
                    E /= 6
                }
                return {
                    h: E,
                    s: N,
                    v: B
                }
            }

            function e(b, y, x) {
                b = L(b, 360) * 6, y = L(y, 100), x = L(x, 100);
                var S = Math.floor(b),
                    k = b - S,
                    E = x * (1 - y),
                    N = x * (1 - k * y),
                    B = x * (1 - (1 - k) * y),
                    $ = S % 6,
                    H = [x, N, E, E, B, x][$],
                    J = [B, x, x, N, E, E][$],
                    j = [E, E, B, x, x, N][$];
                return {
                    r: H * 255,
                    g: J * 255,
                    b: j * 255
                }
            }

            function p(b, y, x, S) {
                var k = [Y(Math.round(b).toString(16)), Y(Math.round(y).toString(16)), Y(Math.round(x).toString(16))];
                return S && k[0].charAt(0) == k[0].charAt(1) && k[1].charAt(0) == k[1].charAt(1) && k[2].charAt(0) == k[2].charAt(1) ? k[0].charAt(0) + k[1].charAt(0) + k[2].charAt(0) : k.join("")
            }

            function v(b, y, x, S, k) {
                var E = [Y(Math.round(b).toString(16)), Y(Math.round(y).toString(16)), Y(Math.round(x).toString(16)), Y(ct(S))];
                return k && E[0].charAt(0) == E[0].charAt(1) && E[1].charAt(0) == E[1].charAt(1) && E[2].charAt(0) == E[2].charAt(1) && E[3].charAt(0) == E[3].charAt(1) ? E[0].charAt(0) + E[1].charAt(0) + E[2].charAt(0) + E[3].charAt(0) : E.join("")
            }

            function r(b, y, x, S) {
                var k = [Y(ct(S)), Y(Math.round(b).toString(16)), Y(Math.round(y).toString(16)), Y(Math.round(x).toString(16))];
                return k.join("")
            }
            h.equals = function(b, y) {
                return !b || !y ? !1 : h(b).toRgbString() == h(y).toRgbString()
            }, h.random = function() {
                return h.fromRatio({
                    r: Math.random(),
                    g: Math.random(),
                    b: Math.random()
                })
            };

            function d(b, y) {
                y = y === 0 ? 0 : y || 10;
                var x = h(b).toHsl();
                return x.s -= y / 100, x.s = re(x.s), h(x)
            }

            function l(b, y) {
                y = y === 0 ? 0 : y || 10;
                var x = h(b).toHsl();
                return x.s += y / 100, x.s = re(x.s), h(x)
            }

            function i(b) {
                return h(b).desaturate(100)
            }

            function w(b, y) {
                y = y === 0 ? 0 : y || 10;
                var x = h(b).toHsl();
                return x.l += y / 100, x.l = re(x.l), h(x)
            }

            function _(b, y) {
                y = y === 0 ? 0 : y || 10;
                var x = h(b).toRgb();
                return x.r = Math.max(0, Math.min(255, x.r - Math.round(255 * -(y / 100)))), x.g = Math.max(0, Math.min(255, x.g - Math.round(255 * -(y / 100)))), x.b = Math.max(0, Math.min(255, x.b - Math.round(255 * -(y / 100)))), h(x)
            }

            function C(b, y) {
                y = y === 0 ? 0 : y || 10;
                var x = h(b).toHsl();
                return x.l -= y / 100, x.l = re(x.l), h(x)
            }

            function O(b, y) {
                var x = h(b).toHsl(),
                    S = (x.h + y) % 360;
                return x.h = S < 0 ? 360 + S : S, h(x)
            }

            function P(b) {
                var y = h(b).toHsl();
                return y.h = (y.h + 180) % 360, h(y)
            }

            function R(b, y) {
                if (isNaN(y) || y <= 0) throw new Error("Argument to polyad must be a positive number");
                for (var x = h(b).toHsl(), S = [h(b)], k = 360 / y, E = 1; E < y; E++) S.push(h({
                    h: (x.h + E * k) % 360,
                    s: x.s,
                    l: x.l
                }));
                return S
            }

            function M(b) {
                var y = h(b).toHsl(),
                    x = y.h;
                return [h(b), h({
                    h: (x + 72) % 360,
                    s: y.s,
                    l: y.l
                }), h({
                    h: (x + 216) % 360,
                    s: y.s,
                    l: y.l
                })]
            }

            function q(b, y, x) {
                y = y || 6, x = x || 30;
                var S = h(b).toHsl(),
                    k = 360 / x,
                    E = [h(b)];
                for (S.h = (S.h - (k * y >> 1) + 720) % 360; --y;) S.h = (S.h + k) % 360, E.push(h(S));
                return E
            }

            function A(b, y) {
                y = y || 6;
                for (var x = h(b).toHsv(), S = x.h, k = x.s, E = x.v, N = [], B = 1 / y; y--;) N.push(h({
                    h: S,
                    s: k,
                    v: E
                })), E = (E + B) % 1;
                return N
            }
            h.mix = function(b, y, x) {
                x = x === 0 ? 0 : x || 50;
                var S = h(b).toRgb(),
                    k = h(y).toRgb(),
                    E = x / 100,
                    N = {
                        r: (k.r - S.r) * E + S.r,
                        g: (k.g - S.g) * E + S.g,
                        b: (k.b - S.b) * E + S.b,
                        a: (k.a - S.a) * E + S.a
                    };
                return h(N)
            }, h.readability = function(b, y) {
                var x = h(b),
                    S = h(y);
                return (Math.max(x.getLuminance(), S.getLuminance()) + .05) / (Math.min(x.getLuminance(), S.getLuminance()) + .05)
            }, h.isReadable = function(b, y, x) {
                var S = h.readability(b, y),
                    k, E;
                switch (E = !1, k = Ct(x), k.level + k.size) {
                    case "AAsmall":
                    case "AAAlarge":
                        E = S >= 4.5;
                        break;
                    case "AAlarge":
                        E = S >= 3;
                        break;
                    case "AAAsmall":
                        E = S >= 7;
                        break
                }
                return E
            }, h.mostReadable = function(b, y, x) {
                var S = null,
                    k = 0,
                    E, N, B, $;
                x = x || {}, N = x.includeFallbackColors, B = x.level, $ = x.size;
                for (var H = 0; H < y.length; H++) E = h.readability(b, y[H]), E > k && (k = E, S = h(y[H]));
                return h.isReadable(b, S, {
                    level: B,
                    size: $
                }) || !N ? S : (x.includeFallbackColors = !1, h.mostReadable(b, ["#fff", "#000"], x))
            };
            var F = h.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                },
                I = h.hexNames = U(F);

            function U(b) {
                var y = {};
                for (var x in b) b.hasOwnProperty(x) && (y[b[x]] = x);
                return y
            }

            function z(b) {
                return b = parseFloat(b), (isNaN(b) || b < 0 || b > 1) && (b = 1), b
            }

            function L(b, y) {
                st(b) && (b = "100%");
                var x = _t(b);
                return b = Math.min(y, Math.max(0, parseFloat(b))), x && (b = parseInt(b * y, 10) / 100), Math.abs(b - y) < 1e-6 ? 1 : b % y / parseFloat(y)
            }

            function re(b) {
                return Math.min(1, Math.max(0, b))
            }

            function V(b) {
                return parseInt(b, 16)
            }

            function st(b) {
                return typeof b == "string" && b.indexOf(".") != -1 && parseFloat(b) === 1
            }

            function _t(b) {
                return typeof b == "string" && b.indexOf("%") != -1
            }

            function Y(b) {
                return b.length == 1 ? "0" + b : "" + b
            }

            function le(b) {
                return b <= 1 && (b = b * 100 + "%"), b
            }

            function ct(b) {
                return Math.round(parseFloat(b) * 255).toString(16)
            }

            function ft(b) {
                return V(b) / 255
            }
            var Z = function() {
                var b = "[-\\+]?\\d+%?",
                    y = "[-\\+]?\\d*\\.\\d+%?",
                    x = "(?:" + y + ")|(?:" + b + ")",
                    S = "[\\s|\\(]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?",
                    k = "[\\s|\\(]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?";
                return {
                    CSS_UNIT: new RegExp(x),
                    rgb: new RegExp("rgb" + S),
                    rgba: new RegExp("rgba" + k),
                    hsl: new RegExp("hsl" + S),
                    hsla: new RegExp("hsla" + k),
                    hsv: new RegExp("hsv" + S),
                    hsva: new RegExp("hsva" + k),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();

            function Q(b) {
                return !!Z.CSS_UNIT.exec(b)
            }

            function wt(b) {
                b = b.replace(u, "").replace(m, "").toLowerCase();
                var y = !1;
                if (F[b]) b = F[b], y = !0;
                else if (b == "transparent") return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                var x;
                return (x = Z.rgb.exec(b)) ? {
                    r: x[1],
                    g: x[2],
                    b: x[3]
                } : (x = Z.rgba.exec(b)) ? {
                    r: x[1],
                    g: x[2],
                    b: x[3],
                    a: x[4]
                } : (x = Z.hsl.exec(b)) ? {
                    h: x[1],
                    s: x[2],
                    l: x[3]
                } : (x = Z.hsla.exec(b)) ? {
                    h: x[1],
                    s: x[2],
                    l: x[3],
                    a: x[4]
                } : (x = Z.hsv.exec(b)) ? {
                    h: x[1],
                    s: x[2],
                    v: x[3]
                } : (x = Z.hsva.exec(b)) ? {
                    h: x[1],
                    s: x[2],
                    v: x[3],
                    a: x[4]
                } : (x = Z.hex8.exec(b)) ? {
                    r: V(x[1]),
                    g: V(x[2]),
                    b: V(x[3]),
                    a: ft(x[4]),
                    format: y ? "name" : "hex8"
                } : (x = Z.hex6.exec(b)) ? {
                    r: V(x[1]),
                    g: V(x[2]),
                    b: V(x[3]),
                    format: y ? "name" : "hex"
                } : (x = Z.hex4.exec(b)) ? {
                    r: V(x[1] + "" + x[1]),
                    g: V(x[2] + "" + x[2]),
                    b: V(x[3] + "" + x[3]),
                    a: ft(x[4] + "" + x[4]),
                    format: y ? "name" : "hex8"
                } : (x = Z.hex3.exec(b)) ? {
                    r: V(x[1] + "" + x[1]),
                    g: V(x[2] + "" + x[2]),
                    b: V(x[3] + "" + x[3]),
                    format: y ? "name" : "hex"
                } : !1
            }

            function Ct(b) {
                var y, x;
                return b = b || {
                    level: "AA",
                    size: "small"
                }, y = (b.level || "AA").toUpperCase(), x = (b.size || "small").toLowerCase(), y !== "AA" && y !== "AAA" && (y = "AA"), x !== "small" && x !== "large" && (x = "small"), {
                    level: y,
                    size: x
                }
            }
            return h
        })
    }(xt)), xt.exports
}
var fa;

function te() {
    if (fa) return Ce;
    fa = 1, Object.defineProperty(Ce, "__esModule", {
        value: !0
    }), Ce.red = void 0;
    var g = po(),
        t = m(g),
        n = go(),
        u = m(n);

    function m(h) {
        return h && h.__esModule ? h : {
            default: h
        }
    }
    return Ce.default = {
        simpleCheckForValidColor: function(f) {
            var o = ["r", "g", "b", "a", "h", "s", "l", "v"],
                c = 0,
                a = 0;
            return (0, t.default)(o, function(s) {
                if (f[s] && (c += 1, isNaN(f[s]) || (a += 1), s === "s" || s === "l")) {
                    var e = /^\d+%$/;
                    e.test(f[s]) && (a += 1)
                }
            }), c === a ? f : !1
        },
        toState: function(f, o) {
            var c = f.hex ? (0, u.default)(f.hex) : (0, u.default)(f),
                a = c.toHsl(),
                s = c.toHsv(),
                e = c.toRgb(),
                p = c.toHex();
            a.s === 0 && (a.h = o || 0, s.h = o || 0);
            var v = p === "000000" && e.a === 0;
            return {
                hsl: a,
                hex: v ? "transparent" : "#" + p,
                rgb: e,
                hsv: s,
                oldHue: f.h || o || a.h,
                source: f.source
            }
        },
        isValidHex: function(f) {
            var o = String(f).charAt(0) === "#" ? 1 : 0;
            return f.length !== 4 + o && f.length < 7 + o && (0, u.default)(f).isValid()
        },
        getContrastingColor: function(f) {
            if (!f) return "#fff";
            var o = this.toState(f);
            if (o.hex === "transparent") return "rgba(0,0,0,0.4)";
            var c = (o.rgb.r * 299 + o.rgb.g * 587 + o.rgb.b * 114) / 1e3;
            return c >= 128 ? "#000" : "#fff"
        }
    }, Ce.red = {
        hsl: {
            a: 1,
            h: 0,
            l: .5,
            s: 1
        },
        hex: "#ff0000",
        rgb: {
            r: 255,
            g: 0,
            b: 0,
            a: 1
        },
        hsv: {
            h: 0,
            s: 1,
            v: 1,
            a: 1
        }
    }, Ce
}
var da;

function gn() {
    if (da) return we;
    da = 1, Object.defineProperty(we, "__esModule", {
        value: !0
    }), we.ColorWrap = void 0;
    var g = Object.assign || function(v) {
            for (var r = 1; r < arguments.length; r++) {
                var d = arguments[r];
                for (var l in d) Object.prototype.hasOwnProperty.call(d, l) && (v[l] = d[l])
            }
            return v
        },
        t = function() {
            function v(r, d) {
                for (var l = 0; l < d.length; l++) {
                    var i = d[l];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
                }
            }
            return function(r, d, l) {
                return d && v(r.prototype, d), l && v(r, l), r
            }
        }(),
        n = T(),
        u = c(n),
        m = ni(),
        h = c(m),
        f = te(),
        o = c(f);

    function c(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }

    function a(v, r) {
        if (!(v instanceof r)) throw new TypeError("Cannot call a class as a function")
    }

    function s(v, r) {
        if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r && (typeof r == "object" || typeof r == "function") ? r : v
    }

    function e(v, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        v.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(v, r) : v.__proto__ = r)
    }
    var p = we.ColorWrap = function(r) {
        var d = function(l) {
            e(i, l);

            function i(w) {
                a(this, i);
                var _ = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return _.handleChange = function(C, O) {
                    var P = o.default.simpleCheckForValidColor(C);
                    if (P) {
                        var R = o.default.toState(C, C.h || _.state.oldHue);
                        _.setState(R), _.props.onChangeComplete && _.debounce(_.props.onChangeComplete, R, O), _.props.onChange && _.props.onChange(R, O)
                    }
                }, _.handleSwatchHover = function(C, O) {
                    var P = o.default.simpleCheckForValidColor(C);
                    if (P) {
                        var R = o.default.toState(C, C.h || _.state.oldHue);
                        _.setState(R), _.props.onSwatchHover && _.props.onSwatchHover(R, O)
                    }
                }, _.state = g({}, o.default.toState(w.color, 0)), _.debounce = (0, h.default)(function(C, O, P) {
                    C(O, P)
                }, 100), _
            }
            return t(i, [{
                key: "componentWillReceiveProps",
                value: function(_) {
                    this.setState(g({}, o.default.toState(_.color, this.state.oldHue)))
                }
            }, {
                key: "render",
                value: function() {
                    var _ = {};
                    return this.props.onSwatchHover && (_.onSwatchHover = this.handleSwatchHover), u.default.createElement(r, g({}, this.props, this.state, {
                        onChange: this.handleChange
                    }, _))
                }
            }]), i
        }(n.PureComponent || n.Component);
        return d.propTypes = g({}, r.propTypes), d.defaultProps = g({}, r.defaultProps, {
            color: {
                h: 250,
                s: .5,
                l: .2,
                a: 1
            }
        }), d
    };
    return we.default = p, we
}
var Se = {},
    ot = {},
    ha;

function bo() {
    if (ha) return ot;
    ha = 1, Object.defineProperty(ot, "__esModule", {
        value: !0
    }), ot.handleFocus = void 0;
    var g = Object.assign || function(c) {
            for (var a = 1; a < arguments.length; a++) {
                var s = arguments[a];
                for (var e in s) Object.prototype.hasOwnProperty.call(s, e) && (c[e] = s[e])
            }
            return c
        },
        t = function() {
            function c(a, s) {
                for (var e = 0; e < s.length; e++) {
                    var p = s[e];
                    p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(a, p.key, p)
                }
            }
            return function(a, s, e) {
                return s && c(a.prototype, s), e && c(a, e), a
            }
        }(),
        n = T(),
        u = m(n);

    function m(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }

    function h(c, a) {
        if (!(c instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function f(c, a) {
        if (!c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a && (typeof a == "object" || typeof a == "function") ? a : c
    }

    function o(c, a) {
        if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
        c.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(c, a) : c.__proto__ = a)
    }
    return ot.handleFocus = function(a) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(e) {
            o(p, e);

            function p() {
                var v, r, d, l;
                h(this, p);
                for (var i = arguments.length, w = Array(i), _ = 0; _ < i; _++) w[_] = arguments[_];
                return l = (r = (d = f(this, (v = p.__proto__ || Object.getPrototypeOf(p)).call.apply(v, [this].concat(w))), d), d.state = {
                    focus: !1
                }, d.handleFocus = function() {
                    return d.setState({
                        focus: !0
                    })
                }, d.handleBlur = function() {
                    return d.setState({
                        focus: !1
                    })
                }, r), f(d, l)
            }
            return t(p, [{
                key: "render",
                value: function() {
                    return u.default.createElement(s, {
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, u.default.createElement(a, g({}, this.props, this.state)))
                }
            }]), p
        }(u.default.Component)
    }, ot
}
var pa;

function mo() {
    if (pa) return Se;
    pa = 1, Object.defineProperty(Se, "__esModule", {
        value: !0
    }), Se.Swatch = void 0;
    var g = Object.assign || function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var p = arguments[e];
                for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (s[v] = p[v])
            }
            return s
        },
        t = T(),
        n = o(t),
        u = D(),
        m = o(u),
        h = bo(),
        f = W();

    function o(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var c = 13,
        a = Se.Swatch = function(e) {
            var p = e.color,
                v = e.style,
                r = e.onClick,
                d = r === void 0 ? function() {} : r,
                l = e.onHover,
                i = e.title,
                w = i === void 0 ? p : i,
                _ = e.children,
                C = e.focus,
                O = e.focusStyle,
                P = O === void 0 ? {} : O,
                R = p === "transparent",
                M = (0, m.default)({
                    default: {
                        swatch: g({
                            background: p,
                            height: "100%",
                            width: "100%",
                            cursor: "pointer",
                            position: "relative",
                            outline: "none"
                        }, v, C ? P : {})
                    }
                }),
                q = function(z) {
                    return d(p, z)
                },
                A = function(z) {
                    return z.keyCode === c && d(p, z)
                },
                F = function(z) {
                    return l(p, z)
                },
                I = {};
            return l && (I.onMouseOver = F), n.default.createElement("div", g({
                style: M.swatch,
                onClick: q,
                title: w,
                tabIndex: 0,
                onKeyDown: A
            }, I), _, R && n.default.createElement(f.Checkboard, {
                borderRadius: M.swatch.borderRadius,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
            }))
        };
    return Se.default = (0, h.handleFocus)(a), Se
}
var va;

function W() {
    return va || (va = 1, function(g) {
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var t = io();
        Object.defineProperty(g, "Alpha", {
            enumerable: !0,
            get: function() {
                return a(t).default
            }
        });
        var n = vn();
        Object.defineProperty(g, "Checkboard", {
            enumerable: !0,
            get: function() {
                return a(n).default
            }
        });
        var u = oo();
        Object.defineProperty(g, "EditableInput", {
            enumerable: !0,
            get: function() {
                return a(u).default
            }
        });
        var m = uo();
        Object.defineProperty(g, "Hue", {
            enumerable: !0,
            get: function() {
                return a(m).default
            }
        });
        var h = so();
        Object.defineProperty(g, "Raised", {
            enumerable: !0,
            get: function() {
                return a(h).default
            }
        });
        var f = fo();
        Object.defineProperty(g, "Saturation", {
            enumerable: !0,
            get: function() {
                return a(f).default
            }
        });
        var o = gn();
        Object.defineProperty(g, "ColorWrap", {
            enumerable: !0,
            get: function() {
                return a(o).default
            }
        });
        var c = mo();
        Object.defineProperty(g, "Swatch", {
            enumerable: !0,
            get: function() {
                return a(c).default
            }
        });

        function a(s) {
            return s && s.__esModule ? s : {
                default: s
            }
        }
    }(rr)), rr
}
var Ee = {},
    ga;

function xo() {
    if (ga) return Ee;
    ga = 1, Object.defineProperty(Ee, "__esModule", {
        value: !0
    }), Ee.AlphaPointer = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Ee.AlphaPointer = function(o) {
        var c = o.direction,
            a = (0, u.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: c === "vertical"
            });
        return t.default.createElement("div", {
            style: a.picker
        })
    };
    return Ee.default = h, Ee
}
var ba;

function yo() {
    if (ba) return ce;
    ba = 1, Object.defineProperty(ce, "__esModule", {
        value: !0
    }), ce.AlphaPicker = void 0;
    var g = Object.assign || function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var p = arguments[e];
                for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (s[v] = p[v])
            }
            return s
        },
        t = T(),
        n = c(t),
        u = D(),
        m = c(u),
        h = W(),
        f = xo(),
        o = c(f);

    function c(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var a = ce.AlphaPicker = function(e) {
        var p = e.rgb,
            v = e.hsl,
            r = e.width,
            d = e.height,
            l = e.onChange,
            i = e.direction,
            w = e.style,
            _ = e.renderers,
            C = e.pointer,
            O = e.className,
            P = O === void 0 ? "" : O,
            R = (0, m.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: r,
                        height: d
                    },
                    alpha: {
                        radius: "2px",
                        style: w
                    }
                }
            });
        return n.default.createElement("div", {
            style: R.picker,
            className: "alpha-picker " + P
        }, n.default.createElement(h.Alpha, g({}, R.alpha, {
            rgb: p,
            hsl: v,
            pointer: C,
            renderers: _,
            onChange: l,
            direction: i
        })))
    };
    return a.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: o.default
    }, ce.default = (0, h.ColorWrap)(a), ce
}
var Pe = {},
    Re = {},
    ma;

function _o() {
    if (ma) return Re;
    ma = 1, Object.defineProperty(Re, "__esModule", {
        value: !0
    }), Re.BlockSwatches = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = oe(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = Re.BlockSwatches = function(s) {
        var e = s.colors,
            p = s.onClick,
            v = s.onSwatchHover,
            r = (0, u.default)({
                default: {
                    swatches: {
                        marginRight: "-10px"
                    },
                    swatch: {
                        width: "22px",
                        height: "22px",
                        float: "left",
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "4px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return t.default.createElement("div", {
            style: r.swatches
        }, (0, h.default)(e, function(d) {
            return t.default.createElement(f.Swatch, {
                key: d,
                color: d,
                style: r.swatch,
                onClick: p,
                onHover: v,
                focusStyle: {
                    boxShadow: "0 0 4px " + d
                }
            })
        }), t.default.createElement("div", {
            style: r.clear
        }))
    };
    return Re.default = c, Re
}
var xa;

function wo() {
    if (xa) return Pe;
    xa = 1, Object.defineProperty(Pe, "__esModule", {
        value: !0
    }), Pe.Block = void 0;
    var g = T(),
        t = e(g),
        n = ee(),
        u = e(n),
        m = D(),
        h = e(m),
        f = te(),
        o = e(f),
        c = W(),
        a = _o(),
        s = e(a);

    function e(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }
    var p = Pe.Block = function(r) {
        var d = r.onChange,
            l = r.onSwatchHover,
            i = r.hex,
            w = r.colors,
            _ = r.width,
            C = r.triangle,
            O = r.className,
            P = O === void 0 ? "" : O,
            R = i === "transparent",
            M = function(F, I) {
                o.default.isValidHex(F) && d({
                    hex: F,
                    source: "hex"
                }, I)
            },
            q = (0, h.default)({
                default: {
                    card: {
                        width: _,
                        background: "#fff",
                        boxShadow: "0 1px rgba(0,0,0,.1)",
                        borderRadius: "6px",
                        position: "relative"
                    },
                    head: {
                        height: "110px",
                        background: i,
                        borderRadius: "6px 6px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    },
                    body: {
                        padding: "10px"
                    },
                    label: {
                        fontSize: "18px",
                        color: o.default.getContrastingColor(i),
                        position: "relative"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 10px 10px 10px",
                        borderColor: "transparent transparent " + i + " transparent",
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        marginLeft: "-10px"
                    },
                    input: {
                        width: "100%",
                        fontSize: "12px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "22px",
                        boxShadow: "inset 0 0 0 1px #ddd",
                        borderRadius: "4px",
                        padding: "0 7px",
                        boxSizing: "border-box"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    }
                }
            }, {
                "hide-triangle": C === "hide"
            });
        return t.default.createElement("div", {
            style: q.card,
            className: "block-picker " + P
        }, t.default.createElement("div", {
            style: q.triangle
        }), t.default.createElement("div", {
            style: q.head
        }, R && t.default.createElement(c.Checkboard, {
            borderRadius: "6px 6px 0 0"
        }), t.default.createElement("div", {
            style: q.label
        }, i)), t.default.createElement("div", {
            style: q.body
        }, t.default.createElement(s.default, {
            colors: w,
            onClick: M,
            onSwatchHover: l
        }), t.default.createElement(c.EditableInput, {
            style: {
                input: q.input
            },
            value: i,
            onChange: M
        })))
    };
    return p.propTypes = {
        width: u.default.oneOfType([u.default.string, u.default.number]),
        colors: u.default.arrayOf(u.default.string),
        triangle: u.default.oneOf(["top", "hide"])
    }, p.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top"
    }, Pe.default = (0, c.ColorWrap)(p), Pe
}
var ke = {},
    bn = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        a100: "#ff8a80",
        a200: "#ff5252",
        a400: "#ff1744",
        a700: "#d50000"
    },
    mn = {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        a100: "#ff80ab",
        a200: "#ff4081",
        a400: "#f50057",
        a700: "#c51162"
    },
    xn = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        a100: "#ea80fc",
        a200: "#e040fb",
        a400: "#d500f9",
        a700: "#aa00ff"
    },
    yn = {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
        a100: "#b388ff",
        a200: "#7c4dff",
        a400: "#651fff",
        a700: "#6200ea"
    },
    _n = {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        a100: "#8c9eff",
        a200: "#536dfe",
        a400: "#3d5afe",
        a700: "#304ffe"
    },
    wn = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        a100: "#82b1ff",
        a200: "#448aff",
        a400: "#2979ff",
        a700: "#2962ff"
    },
    Cn = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        a100: "#80d8ff",
        a200: "#40c4ff",
        a400: "#00b0ff",
        a700: "#0091ea"
    },
    Sn = {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        a100: "#84ffff",
        a200: "#18ffff",
        a400: "#00e5ff",
        a700: "#00b8d4"
    },
    En = {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        a100: "#a7ffeb",
        a200: "#64ffda",
        a400: "#1de9b6",
        a700: "#00bfa5"
    },
    Pn = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        a100: "#b9f6ca",
        a200: "#69f0ae",
        a400: "#00e676",
        a700: "#00c853"
    },
    Rn = {
        50: "#f1f8e9",
        100: "#dcedc8",
        200: "#c5e1a5",
        300: "#aed581",
        400: "#9ccc65",
        500: "#8bc34a",
        600: "#7cb342",
        700: "#689f38",
        800: "#558b2f",
        900: "#33691e",
        a100: "#ccff90",
        a200: "#b2ff59",
        a400: "#76ff03",
        a700: "#64dd17"
    },
    kn = {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
        a100: "#f4ff81",
        a200: "#eeff41",
        a400: "#c6ff00",
        a700: "#aeea00"
    },
    Mn = {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
        a100: "#ffff8d",
        a200: "#ffff00",
        a400: "#ffea00",
        a700: "#ffd600"
    },
    On = {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
        a100: "#ffe57f",
        a200: "#ffd740",
        a400: "#ffc400",
        a700: "#ffab00"
    },
    qn = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        a100: "#ffd180",
        a200: "#ffab40",
        a400: "#ff9100",
        a700: "#ff6d00"
    },
    An = {
        50: "#fbe9e7",
        100: "#ffccbc",
        200: "#ffab91",
        300: "#ff8a65",
        400: "#ff7043",
        500: "#ff5722",
        600: "#f4511e",
        700: "#e64a19",
        800: "#d84315",
        900: "#bf360c",
        a100: "#ff9e80",
        a200: "#ff6e40",
        a400: "#ff3d00",
        a700: "#dd2c00"
    },
    Bn = {
        50: "#efebe9",
        100: "#d7ccc8",
        200: "#bcaaa4",
        300: "#a1887f",
        400: "#8d6e63",
        500: "#795548",
        600: "#6d4c41",
        700: "#5d4037",
        800: "#4e342e",
        900: "#3e2723"
    },
    Fn = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121"
    },
    Tn = {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238"
    },
    Hn = {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        dividers: "rgba(0, 0, 0, 0.12)"
    },
    Dn = {
        primary: "rgba(255, 255, 255, 1)",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        dividers: "rgba(255, 255, 255, 0.12)"
    },
    In = {
        active: "rgba(0, 0, 0, 0.54)",
        inactive: "rgba(0, 0, 0, 0.38)"
    },
    Nn = {
        active: "rgba(255, 255, 255, 1)",
        inactive: "rgba(255, 255, 255, 0.5)"
    },
    Ln = "#ffffff",
    Gn = "#000000";
const Co = {
        red: bn,
        pink: mn,
        purple: xn,
        deepPurple: yn,
        indigo: _n,
        blue: wn,
        lightBlue: Cn,
        cyan: Sn,
        teal: En,
        green: Pn,
        lightGreen: Rn,
        lime: kn,
        yellow: Mn,
        amber: On,
        orange: qn,
        deepOrange: An,
        brown: Bn,
        grey: Fn,
        blueGrey: Tn,
        darkText: Hn,
        lightText: Dn,
        darkIcons: In,
        lightIcons: Nn,
        white: Ln,
        black: Gn
    },
    So = Object.freeze(Object.defineProperty({
        __proto__: null,
        amber: On,
        black: Gn,
        blue: wn,
        blueGrey: Tn,
        brown: Bn,
        cyan: Sn,
        darkIcons: In,
        darkText: Hn,
        deepOrange: An,
        deepPurple: yn,
        default: Co,
        green: Pn,
        grey: Fn,
        indigo: _n,
        lightBlue: Cn,
        lightGreen: Rn,
        lightIcons: Nn,
        lightText: Dn,
        lime: kn,
        orange: qn,
        pink: mn,
        purple: xn,
        red: bn,
        teal: En,
        white: Ln,
        yellow: Mn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $n = jn(So);
var Me = {},
    ya;

function Eo() {
    if (ya) return Me;
    ya = 1, Object.defineProperty(Me, "__esModule", {
        value: !0
    }), Me.CircleSwatch = void 0;
    var g = T(),
        t = h(g),
        n = D(),
        u = h(n),
        m = W();

    function h(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var f = Me.CircleSwatch = function(c) {
        var a = c.color,
            s = c.onClick,
            e = c.onSwatchHover,
            p = c.hover,
            v = c.active,
            r = c.circleSize,
            d = c.circleSpacing,
            l = (0, u.default)({
                default: {
                    swatch: {
                        width: r,
                        height: r,
                        marginRight: d,
                        marginBottom: d,
                        transform: "scale(1)",
                        transition: "100ms transform ease"
                    },
                    Swatch: {
                        borderRadius: "50%",
                        background: "transparent",
                        boxShadow: "inset 0 0 0 " + r / 2 + "px " + a,
                        transition: "100ms box-shadow ease"
                    }
                },
                hover: {
                    swatch: {
                        transform: "scale(1.2)"
                    }
                },
                active: {
                    Swatch: {
                        boxShadow: "inset 0 0 0 3px " + a
                    }
                }
            }, {
                hover: p,
                active: v
            });
        return t.default.createElement("div", {
            style: l.swatch
        }, t.default.createElement(m.Swatch, {
            style: l.Swatch,
            color: a,
            onClick: s,
            onHover: e,
            focusStyle: {
                boxShadow: l.Swatch.boxShadow + ", 0 0 5px " + a
            }
        }))
    };
    return f.defaultProps = {
        circleSize: 28,
        circleSpacing: 14
    }, Me.default = (0, n.handleHover)(f), Me
}
var _a;

function Po() {
    if (_a) return ke;
    _a = 1, Object.defineProperty(ke, "__esModule", {
        value: !0
    }), ke.Circle = void 0;
    var g = T(),
        t = r(g),
        n = ee(),
        u = r(n),
        m = D(),
        h = r(m),
        f = oe(),
        o = r(f),
        c = $n,
        a = v(c),
        s = W(),
        e = Eo(),
        p = r(e);

    function v(l) {
        if (l && l.__esModule) return l;
        var i = {};
        if (l != null)
            for (var w in l) Object.prototype.hasOwnProperty.call(l, w) && (i[w] = l[w]);
        return i.default = l, i
    }

    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    var d = ke.Circle = function(i) {
        var w = i.width,
            _ = i.onChange,
            C = i.onSwatchHover,
            O = i.colors,
            P = i.hex,
            R = i.circleSize,
            M = i.circleSpacing,
            q = i.className,
            A = q === void 0 ? "" : q,
            F = (0, h.default)({
                default: {
                    card: {
                        width: w,
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: -M,
                        marginBottom: -M
                    }
                }
            }),
            I = function(z, L) {
                return _({
                    hex: z,
                    source: "hex"
                }, L)
            };
        return t.default.createElement("div", {
            style: F.card,
            className: "circle-picker " + A
        }, (0, o.default)(O, function(U) {
            return t.default.createElement(p.default, {
                key: U,
                color: U,
                onClick: I,
                onSwatchHover: C,
                active: P === U.toLowerCase(),
                circleSize: R,
                circleSpacing: M
            })
        }))
    };
    return d.propTypes = {
        width: u.default.oneOfType([u.default.string, u.default.number]),
        circleSize: u.default.number,
        circleSpacing: u.default.number
    }, d.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [a.red[500], a.pink[500], a.purple[500], a.deepPurple[500], a.indigo[500], a.blue[500], a.lightBlue[500], a.cyan[500], a.teal[500], a.green[500], a.lightGreen[500], a.lime[500], a.yellow[500], a.amber[500], a.orange[500], a.deepOrange[500], a.brown[500], a.blueGrey[500]]
    }, ke.default = (0, s.ColorWrap)(d), ke
}
var Oe = {},
    qe = {},
    wa;

function Ro() {
    if (wa) return qe;
    wa = 1, Object.defineProperty(qe, "__esModule", {
        value: !0
    }), qe.ChromeFields = void 0;
    var g = function() {
            function v(r, d) {
                for (var l = 0; l < d.length; l++) {
                    var i = d[l];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
                }
            }
            return function(r, d, l) {
                return d && v(r.prototype, d), l && v(r, l), r
            }
        }(),
        t = T(),
        n = c(t),
        u = D(),
        m = c(u),
        h = te(),
        f = c(h),
        o = W();

    function c(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }

    function a(v, r) {
        if (!(v instanceof r)) throw new TypeError("Cannot call a class as a function")
    }

    function s(v, r) {
        if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r && (typeof r == "object" || typeof r == "function") ? r : v
    }

    function e(v, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        v.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(v, r) : v.__proto__ = r)
    }
    var p = qe.ChromeFields = function(v) {
        e(r, v);

        function r() {
            var d, l, i, w;
            a(this, r);
            for (var _ = arguments.length, C = Array(_), O = 0; O < _; O++) C[O] = arguments[O];
            return w = (l = (i = s(this, (d = r.__proto__ || Object.getPrototypeOf(r)).call.apply(d, [this].concat(C))), i), i.state = {
                view: ""
            }, i.toggleViews = function() {
                i.state.view === "hex" ? i.setState({
                    view: "rgb"
                }) : i.state.view === "rgb" ? i.setState({
                    view: "hsl"
                }) : i.state.view === "hsl" && (i.props.hsl.a === 1 ? i.setState({
                    view: "hex"
                }) : i.setState({
                    view: "rgb"
                }))
            }, i.handleChange = function(P, R) {
                P.hex ? f.default.isValidHex(P.hex) && i.props.onChange({
                    hex: P.hex,
                    source: "hex"
                }, R) : P.r || P.g || P.b ? i.props.onChange({
                    r: P.r || i.props.rgb.r,
                    g: P.g || i.props.rgb.g,
                    b: P.b || i.props.rgb.b,
                    source: "rgb"
                }, R) : P.a ? (P.a < 0 ? P.a = 0 : P.a > 1 && (P.a = 1), i.props.onChange({
                    h: i.props.hsl.h,
                    s: i.props.hsl.s,
                    l: i.props.hsl.l,
                    a: Math.round(P.a * 100) / 100,
                    source: "rgb"
                }, R)) : (P.h || P.s || P.l) && i.props.onChange({
                    h: P.h || i.props.hsl.h,
                    s: Number(P.s && P.s || i.props.hsl.s),
                    l: Number(P.l && P.l || i.props.hsl.l),
                    source: "hsl"
                }, R)
            }, i.showHighlight = function(P) {
                P.target.style.background = "#eee"
            }, i.hideHighlight = function(P) {
                P.target.style.background = "transparent"
            }, l), s(i, w)
        }
        return g(r, [{
            key: "componentDidMount",
            value: function() {
                this.props.hsl.a === 1 && this.state.view !== "hex" ? this.setState({
                    view: "hex"
                }) : this.state.view !== "rgb" && this.state.view !== "hsl" && this.setState({
                    view: "rgb"
                })
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(l) {
                l.hsl.a !== 1 && this.state.view === "hex" && this.setState({
                    view: "rgb"
                })
            }
        }, {
            key: "render",
            value: function() {
                var l = this,
                    i = (0, m.default)({
                        default: {
                            wrap: {
                                paddingTop: "16px",
                                display: "flex"
                            },
                            fields: {
                                flex: "1",
                                display: "flex",
                                marginLeft: "-6px"
                            },
                            field: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            alpha: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            toggle: {
                                width: "32px",
                                textAlign: "right",
                                position: "relative"
                            },
                            icon: {
                                marginRight: "-4px",
                                marginTop: "12px",
                                cursor: "pointer",
                                position: "relative"
                            },
                            iconHighlight: {
                                position: "absolute",
                                width: "24px",
                                height: "28px",
                                background: "#eee",
                                borderRadius: "4px",
                                top: "10px",
                                left: "12px",
                                display: "none"
                            },
                            input: {
                                fontSize: "11px",
                                color: "#333",
                                width: "100%",
                                borderRadius: "2px",
                                border: "none",
                                boxShadow: "inset 0 0 0 1px #dadada",
                                height: "21px",
                                textAlign: "center"
                            },
                            label: {
                                textTransform: "uppercase",
                                fontSize: "11px",
                                lineHeight: "11px",
                                color: "#969696",
                                textAlign: "center",
                                display: "block",
                                marginTop: "12px"
                            },
                            svg: {
                                width: "24px",
                                height: "24px",
                                border: "1px transparent solid",
                                borderRadius: "5px"
                            }
                        },
                        disableAlpha: {
                            alpha: {
                                display: "none"
                            }
                        }
                    }, this.props, this.state),
                    w = void 0;
                return this.state.view === "hex" ? w = n.default.createElement("div", {
                    style: i.fields,
                    className: "flexbox-fix"
                }, n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "hex",
                    value: this.props.hex,
                    onChange: this.handleChange
                }))) : this.state.view === "rgb" ? w = n.default.createElement("div", {
                    style: i.fields,
                    className: "flexbox-fix"
                }, n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "r",
                    value: this.props.rgb.r,
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "g",
                    value: this.props.rgb.g,
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "b",
                    value: this.props.rgb.b,
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.alpha
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "a",
                    value: this.props.rgb.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                }))) : this.state.view === "hsl" && (w = n.default.createElement("div", {
                    style: i.fields,
                    className: "flexbox-fix"
                }, n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "h",
                    value: Math.round(this.props.hsl.h),
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "s",
                    value: Math.round(this.props.hsl.s * 100) + "%",
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.field
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "l",
                    value: Math.round(this.props.hsl.l * 100) + "%",
                    onChange: this.handleChange
                })), n.default.createElement("div", {
                    style: i.alpha
                }, n.default.createElement(o.EditableInput, {
                    style: {
                        input: i.input,
                        label: i.label
                    },
                    label: "a",
                    value: this.props.hsl.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                })))), n.default.createElement("div", {
                    style: i.wrap,
                    className: "flexbox-fix"
                }, w, n.default.createElement("div", {
                    style: i.toggle
                }, n.default.createElement("div", {
                    style: i.icon,
                    onClick: this.toggleViews,
                    ref: function(C) {
                        return l.icon = C
                    }
                }, n.default.createElement("svg", {
                    style: i.svg,
                    viewBox: "0 0 24 24",
                    onMouseOver: this.showHighlight,
                    onMouseEnter: this.showHighlight,
                    onMouseOut: this.hideHighlight
                }, n.default.createElement("path", {
                    ref: function(C) {
                        return l.iconUp = C
                    },
                    fill: "#333",
                    d: "M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
                }), n.default.createElement("path", {
                    ref: function(C) {
                        return l.iconDown = C
                    },
                    fill: "#333",
                    d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
                })))))
            }
        }]), r
    }(n.default.Component);
    return qe.default = p, qe
}
var Ae = {},
    Ca;

function ko() {
    if (Ca) return Ae;
    Ca = 1, Object.defineProperty(Ae, "__esModule", {
        value: !0
    }), Ae.ChromePointer = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Ae.ChromePointer = function() {
        var o = (0, u.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    transform: "translate(-6px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return t.default.createElement("div", {
            style: o.picker
        })
    };
    return Ae.default = h, Ae
}
var Be = {},
    Sa;

function Mo() {
    if (Sa) return Be;
    Sa = 1, Object.defineProperty(Be, "__esModule", {
        value: !0
    }), Be.ChromePointerCircle = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Be.ChromePointerCircle = function() {
        var o = (0, u.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    boxShadow: "inset 0 0 0 1px #fff",
                    transform: "translate(-6px, -6px)"
                }
            }
        });
        return t.default.createElement("div", {
            style: o.picker
        })
    };
    return Be.default = h, Be
}
var Ea;

function Oo() {
    if (Ea) return Oe;
    Ea = 1, Object.defineProperty(Oe, "__esModule", {
        value: !0
    }), Oe.Chrome = void 0;
    var g = T(),
        t = v(g),
        n = ee(),
        u = v(n),
        m = D(),
        h = v(m),
        f = W(),
        o = Ro(),
        c = v(o),
        a = ko(),
        s = v(a),
        e = Mo(),
        p = v(e);

    function v(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }
    var r = Oe.Chrome = function(l) {
        var i = l.onChange,
            w = l.disableAlpha,
            _ = l.rgb,
            C = l.hsl,
            O = l.hsv,
            P = l.hex,
            R = l.renderers,
            M = l.className,
            q = M === void 0 ? "" : M,
            A = (0, h.default)({
                default: {
                    picker: {
                        background: "#fff",
                        borderRadius: "2px",
                        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                        boxSizing: "initial",
                        width: "225px",
                        fontFamily: "Menlo"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "55%",
                        position: "relative",
                        borderRadius: "2px 2px 0 0",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "2px 2px 0 0"
                    },
                    body: {
                        padding: "16px 16px 12px"
                    },
                    controls: {
                        display: "flex"
                    },
                    color: {
                        width: "32px"
                    },
                    swatch: {
                        marginTop: "6px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    active: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "8px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                        background: "rgba(" + _.r + ", " + _.g + ", " + _.b + ", " + _.a + ")",
                        zIndex: "2"
                    },
                    toggles: {
                        flex: "1"
                    },
                    hue: {
                        height: "10px",
                        position: "relative",
                        marginBottom: "8px"
                    },
                    Hue: {
                        radius: "2px"
                    },
                    alpha: {
                        height: "10px",
                        position: "relative"
                    },
                    Alpha: {
                        radius: "2px"
                    }
                },
                disableAlpha: {
                    color: {
                        width: "22px"
                    },
                    alpha: {
                        display: "none"
                    },
                    hue: {
                        marginBottom: "0px"
                    },
                    swatch: {
                        width: "10px",
                        height: "10px",
                        marginTop: "0px"
                    }
                }
            }, {
                disableAlpha: w
            });
        return t.default.createElement("div", {
            style: A.picker,
            className: "chrome-picker " + q
        }, t.default.createElement("div", {
            style: A.saturation
        }, t.default.createElement(f.Saturation, {
            style: A.Saturation,
            hsl: C,
            hsv: O,
            pointer: p.default,
            onChange: i
        })), t.default.createElement("div", {
            style: A.body
        }, t.default.createElement("div", {
            style: A.controls,
            className: "flexbox-fix"
        }, t.default.createElement("div", {
            style: A.color
        }, t.default.createElement("div", {
            style: A.swatch
        }, t.default.createElement("div", {
            style: A.active
        }), t.default.createElement(f.Checkboard, {
            renderers: R
        }))), t.default.createElement("div", {
            style: A.toggles
        }, t.default.createElement("div", {
            style: A.hue
        }, t.default.createElement(f.Hue, {
            style: A.Hue,
            hsl: C,
            pointer: s.default,
            onChange: i
        })), t.default.createElement("div", {
            style: A.alpha
        }, t.default.createElement(f.Alpha, {
            style: A.Alpha,
            rgb: _,
            hsl: C,
            pointer: s.default,
            renderers: R,
            onChange: i
        })))), t.default.createElement(c.default, {
            rgb: _,
            hsl: C,
            hex: P,
            onChange: i,
            disableAlpha: w
        })))
    };
    return r.propTypes = {
        disableAlpha: u.default.bool
    }, r.defaultProps = {
        disableAlpha: !1
    }, Oe.default = (0, f.ColorWrap)(r), Oe
}
var Fe = {},
    Te = {},
    Pa;

function qo() {
    if (Pa) return Te;
    Pa = 1, Object.defineProperty(Te, "__esModule", {
        value: !0
    }), Te.CompactColor = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = te(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = Te.CompactColor = function(s) {
        var e = s.color,
            p = s.onClick,
            v = p === void 0 ? function() {} : p,
            r = s.onSwatchHover,
            d = s.active,
            l = (0, u.default)({
                default: {
                    color: {
                        background: e,
                        width: "15px",
                        height: "15px",
                        float: "left",
                        marginRight: "5px",
                        marginBottom: "5px",
                        position: "relative",
                        cursor: "pointer"
                    },
                    dot: {
                        absolute: "5px 5px 5px 5px",
                        background: h.default.getContrastingColor(e),
                        borderRadius: "50%",
                        opacity: "0"
                    }
                },
                active: {
                    dot: {
                        opacity: "1"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    dot: {
                        background: "#000"
                    }
                },
                transparent: {
                    dot: {
                        background: "#000"
                    }
                }
            }, {
                active: d,
                "color-#FFFFFF": e === "#FFFFFF",
                transparent: e === "transparent"
            });
        return t.default.createElement(f.Swatch, {
            style: l.color,
            color: e,
            onClick: v,
            onHover: r,
            focusStyle: {
                boxShadow: "0 0 4px " + e
            }
        }, t.default.createElement("div", {
            style: l.dot
        }))
    };
    return Te.default = c, Te
}
var He = {},
    Ra;

function Ao() {
    if (Ra) return He;
    Ra = 1, Object.defineProperty(He, "__esModule", {
        value: !0
    }), He.CompactFields = void 0;
    var g = T(),
        t = h(g),
        n = D(),
        u = h(n),
        m = W();

    function h(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var f = He.CompactFields = function(c) {
        var a = c.hex,
            s = c.rgb,
            e = c.onChange,
            p = (0, u.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingBottom: "6px",
                        paddingRight: "5px",
                        position: "relative"
                    },
                    active: {
                        position: "absolute",
                        top: "6px",
                        left: "5px",
                        height: "9px",
                        width: "9px",
                        background: a
                    },
                    HEXwrap: {
                        flex: "6",
                        position: "relative"
                    },
                    HEXinput: {
                        width: "80%",
                        padding: "0px",
                        paddingLeft: "20%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    HEXlabel: {
                        display: "none"
                    },
                    RGBwrap: {
                        flex: "3",
                        position: "relative"
                    },
                    RGBinput: {
                        width: "70%",
                        padding: "0px",
                        paddingLeft: "30%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#999"
                    }
                }
            }),
            v = function(d, l) {
                d.r || d.g || d.b ? e({
                    r: d.r || s.r,
                    g: d.g || s.g,
                    b: d.b || s.b,
                    source: "rgb"
                }, l) : e({
                    hex: d.hex,
                    source: "hex"
                }, l)
            };
        return t.default.createElement("div", {
            style: p.fields,
            className: "flexbox-fix"
        }, t.default.createElement("div", {
            style: p.active
        }), t.default.createElement(m.EditableInput, {
            style: {
                wrap: p.HEXwrap,
                input: p.HEXinput,
                label: p.HEXlabel
            },
            label: "hex",
            value: a,
            onChange: v
        }), t.default.createElement(m.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "r",
            value: s.r,
            onChange: v
        }), t.default.createElement(m.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "g",
            value: s.g,
            onChange: v
        }), t.default.createElement(m.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "b",
            value: s.b,
            onChange: v
        }))
    };
    return He.default = f, He
}
var ka;

function Bo() {
    if (ka) return Fe;
    ka = 1, Object.defineProperty(Fe, "__esModule", {
        value: !0
    }), Fe.Compact = void 0;
    var g = T(),
        t = d(g),
        n = ee(),
        u = d(n),
        m = D(),
        h = d(m),
        f = oe(),
        o = d(f),
        c = te(),
        a = d(c),
        s = W(),
        e = qo(),
        p = d(e),
        v = Ao(),
        r = d(v);

    function d(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    var l = Fe.Compact = function(w) {
        var _ = w.onChange,
            C = w.onSwatchHover,
            O = w.colors,
            P = w.hex,
            R = w.rgb,
            M = w.className,
            q = M === void 0 ? "" : M,
            A = (0, h.default)({
                default: {
                    Compact: {
                        background: "#f6f6f6",
                        radius: "4px"
                    },
                    compact: {
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        boxSizing: "initial",
                        width: "240px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }),
            F = function(U, z) {
                U.hex ? a.default.isValidHex(U.hex) && _({
                    hex: U.hex,
                    source: "hex"
                }, z) : _(U, z)
            };
        return t.default.createElement(s.Raised, {
            style: A.Compact
        }, t.default.createElement("div", {
            style: A.compact,
            className: "compact-picker " + q
        }, t.default.createElement("div", null, (0, o.default)(O, function(I) {
            return t.default.createElement(p.default, {
                key: I,
                color: I,
                active: I.toLowerCase() === P,
                onClick: F,
                onSwatchHover: C
            })
        }), t.default.createElement("div", {
            style: A.clear
        })), t.default.createElement(r.default, {
            hex: P,
            rgb: R,
            onChange: F
        })))
    };
    return l.propTypes = {
        colors: u.default.arrayOf(u.default.string)
    }, l.defaultProps = {
        colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"]
    }, Fe.default = (0, s.ColorWrap)(l), Fe
}
var De = {},
    Ie = {},
    Ma;

function Fo() {
    if (Ma) return Ie;
    Ma = 1, Object.defineProperty(Ie, "__esModule", {
        value: !0
    }), Ie.GithubSwatch = void 0;
    var g = T(),
        t = h(g),
        n = D(),
        u = h(n),
        m = W();

    function h(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var f = Ie.GithubSwatch = function(c) {
        var a = c.hover,
            s = c.color,
            e = c.onClick,
            p = c.onSwatchHover,
            v = {
                position: "relative",
                zIndex: "2",
                outline: "2px solid #fff",
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
            },
            r = (0, u.default)({
                default: {
                    swatch: {
                        width: "25px",
                        height: "25px",
                        fontSize: "0"
                    }
                },
                hover: {
                    swatch: v
                }
            }, {
                hover: a
            });
        return t.default.createElement("div", {
            style: r.swatch
        }, t.default.createElement(m.Swatch, {
            color: s,
            onClick: e,
            onHover: p,
            focusStyle: v
        }))
    };
    return Ie.default = (0, n.handleHover)(f), Ie
}
var Oa;

function To() {
    if (Oa) return De;
    Oa = 1, Object.defineProperty(De, "__esModule", {
        value: !0
    }), De.Github = void 0;
    var g = T(),
        t = e(g),
        n = ee(),
        u = e(n),
        m = D(),
        h = e(m),
        f = oe(),
        o = e(f),
        c = W(),
        a = Fo(),
        s = e(a);

    function e(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }
    var p = De.Github = function(r) {
        var d = r.width,
            l = r.colors,
            i = r.onChange,
            w = r.onSwatchHover,
            _ = r.triangle,
            C = r.className,
            O = C === void 0 ? "" : C,
            P = (0, h.default)({
                default: {
                    card: {
                        width: d,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.2)",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                        borderRadius: "4px",
                        position: "relative",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    triangle: {
                        position: "absolute",
                        border: "7px solid transparent",
                        borderBottomColor: "#fff"
                    },
                    triangleShadow: {
                        position: "absolute",
                        border: "8px solid transparent",
                        borderBottomColor: "rgba(0,0,0,0.15)"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-14px",
                        left: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        left: "9px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-14px",
                        right: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        right: "9px"
                    }
                },
                "bottom-left-triangle": {
                    triangle: {
                        top: "35px",
                        left: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        left: "9px",
                        transform: "rotate(180deg)"
                    }
                },
                "bottom-right-triangle": {
                    triangle: {
                        top: "35px",
                        right: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        right: "9px",
                        transform: "rotate(180deg)"
                    }
                }
            }, {
                "hide-triangle": _ === "hide",
                "top-left-triangle": _ === "top-left",
                "top-right-triangle": _ === "top-right",
                "bottom-left-triangle": _ == "bottom-left",
                "bottom-right-triangle": _ === "bottom-right"
            }),
            R = function(q, A) {
                return i({
                    hex: q,
                    source: "hex"
                }, A)
            };
        return t.default.createElement("div", {
            style: P.card,
            className: "github-picker " + O
        }, t.default.createElement("div", {
            style: P.triangleShadow
        }), t.default.createElement("div", {
            style: P.triangle
        }), (0, o.default)(l, function(M) {
            return t.default.createElement(s.default, {
                color: M,
                key: M,
                onClick: R,
                onSwatchHover: w
            })
        }))
    };
    return p.propTypes = {
        width: u.default.oneOfType([u.default.string, u.default.number]),
        colors: u.default.arrayOf(u.default.string),
        triangle: u.default.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"])
    }, p.defaultProps = {
        width: 200,
        colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
        triangle: "top-left"
    }, De.default = (0, c.ColorWrap)(p), De
}
var Ne = {},
    Le = {},
    qa;

function Ho() {
    if (qa) return Le;
    qa = 1, Object.defineProperty(Le, "__esModule", {
        value: !0
    }), Le.SliderPointer = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Le.SliderPointer = function(o) {
        var c = o.direction,
            a = (0, u.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: c === "vertical"
            });
        return t.default.createElement("div", {
            style: a.picker
        })
    };
    return Le.default = h, Le
}
var Aa;

function Do() {
    if (Aa) return Ne;
    Aa = 1, Object.defineProperty(Ne, "__esModule", {
        value: !0
    }), Ne.HuePicker = void 0;
    var g = Object.assign || function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var p = arguments[e];
                for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (s[v] = p[v])
            }
            return s
        },
        t = T(),
        n = c(t),
        u = D(),
        m = c(u),
        h = W(),
        f = Ho(),
        o = c(f);

    function c(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var a = Ne.HuePicker = function(e) {
        var p = e.width,
            v = e.height,
            r = e.onChange,
            d = e.hsl,
            l = e.direction,
            i = e.pointer,
            w = e.className,
            _ = w === void 0 ? "" : w,
            C = (0, m.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: p,
                        height: v
                    },
                    hue: {
                        radius: "2px"
                    }
                }
            }),
            O = function(R) {
                return r({
                    a: 1,
                    h: R.h,
                    l: .5,
                    s: 1
                })
            };
        return n.default.createElement("div", {
            style: C.picker,
            className: "hue-picker " + _
        }, n.default.createElement(h.Hue, g({}, C.hue, {
            hsl: d,
            pointer: i,
            onChange: O,
            direction: l
        })))
    };
    return a.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: o.default
    }, Ne.default = (0, h.ColorWrap)(a), Ne
}
var Ge = {},
    Ba;

function Io() {
    if (Ba) return Ge;
    Ba = 1, Object.defineProperty(Ge, "__esModule", {
        value: !0
    }), Ge.Material = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = te(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = Ge.Material = function(s) {
        var e = s.onChange,
            p = s.hex,
            v = s.rgb,
            r = s.className,
            d = r === void 0 ? "" : r,
            l = (0, u.default)({
                default: {
                    material: {
                        width: "98px",
                        height: "98px",
                        padding: "16px",
                        fontFamily: "Roboto"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "2px solid " + p,
                        outline: "none",
                        height: "30px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    Hex: {
                        style: {}
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "1px solid #eee",
                        outline: "none",
                        height: "30px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    split: {
                        display: "flex",
                        marginRight: "-10px",
                        paddingTop: "11px"
                    },
                    third: {
                        flex: "1",
                        paddingRight: "10px"
                    }
                }
            }),
            i = function(_, C) {
                _.hex ? h.default.isValidHex(_.hex) && e({
                    hex: _.hex,
                    source: "hex"
                }, C) : (_.r || _.g || _.b) && e({
                    r: _.r || v.r,
                    g: _.g || v.g,
                    b: _.b || v.b,
                    source: "rgb"
                }, C)
            };
        return t.default.createElement(f.Raised, null, t.default.createElement("div", {
            style: l.material,
            className: "material-picker " + d
        }, t.default.createElement(f.EditableInput, {
            style: {
                wrap: l.HEXwrap,
                input: l.HEXinput,
                label: l.HEXlabel
            },
            label: "hex",
            value: p,
            onChange: i
        }), t.default.createElement("div", {
            style: l.split,
            className: "flexbox-fix"
        }, t.default.createElement("div", {
            style: l.third
        }, t.default.createElement(f.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "r",
            value: v.r,
            onChange: i
        })), t.default.createElement("div", {
            style: l.third
        }, t.default.createElement(f.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "g",
            value: v.g,
            onChange: i
        })), t.default.createElement("div", {
            style: l.third
        }, t.default.createElement(f.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "b",
            value: v.b,
            onChange: i
        })))))
    };
    return Ge.default = (0, f.ColorWrap)(c), Ge
}
var $e = {},
    We = {},
    Fa;

function No() {
    if (Fa) return We;
    Fa = 1, Object.defineProperty(We, "__esModule", {
        value: !0
    }), We.PhotoshopPicker = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = te(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = We.PhotoshopPicker = function(s) {
        var e = s.onChange,
            p = s.rgb,
            v = s.hsv,
            r = s.hex,
            d = (0, u.default)({
                default: {
                    fields: {
                        paddingTop: "5px",
                        paddingBottom: "9px",
                        width: "80px",
                        position: "relative"
                    },
                    divider: {
                        height: "5px"
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        marginLeft: "40%",
                        width: "40%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "5px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        marginRight: "10px"
                    },
                    RGBlabel: {
                        left: "0px",
                        width: "34px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                        position: "absolute"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        marginLeft: "20%",
                        width: "80%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "6px",
                        fontSize: "13px",
                        paddingLeft: "3px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "14px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px"
                    },
                    fieldSymbols: {
                        position: "absolute",
                        top: "5px",
                        right: "-7px",
                        fontSize: "13px"
                    },
                    symbol: {
                        height: "20px",
                        lineHeight: "22px",
                        paddingBottom: "7px"
                    }
                }
            }),
            l = function(w, _) {
                w["#"] ? h.default.isValidHex(w["#"]) && e({
                    hex: w["#"],
                    source: "hex"
                }, _) : w.r || w.g || w.b ? e({
                    r: w.r || p.r,
                    g: w.g || p.g,
                    b: w.b || p.b,
                    source: "rgb"
                }, _) : (w.h || w.s || w.v) && e({
                    h: w.h || v.h,
                    s: w.s || v.s,
                    v: w.v || v.v,
                    source: "hsv"
                }, _)
            };
        return t.default.createElement("div", {
            style: d.fields
        }, t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "h",
            value: Math.round(v.h),
            onChange: l
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "s",
            value: Math.round(v.s * 100),
            onChange: l
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "v",
            value: Math.round(v.v * 100),
            onChange: l
        }), t.default.createElement("div", {
            style: d.divider
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "r",
            value: p.r,
            onChange: l
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "g",
            value: p.g,
            onChange: l
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.RGBwrap,
                input: d.RGBinput,
                label: d.RGBlabel
            },
            label: "b",
            value: p.b,
            onChange: l
        }), t.default.createElement("div", {
            style: d.divider
        }), t.default.createElement(f.EditableInput, {
            style: {
                wrap: d.HEXwrap,
                input: d.HEXinput,
                label: d.HEXlabel
            },
            label: "#",
            value: r.replace("#", ""),
            onChange: l
        }), t.default.createElement("div", {
            style: d.fieldSymbols
        }, t.default.createElement("div", {
            style: d.symbol
        }, "°"), t.default.createElement("div", {
            style: d.symbol
        }, "%"), t.default.createElement("div", {
            style: d.symbol
        }, "%")))
    };
    return We.default = c, We
}
var ze = {},
    Ta;

function Lo() {
    if (Ta) return ze;
    Ta = 1, Object.defineProperty(ze, "__esModule", {
        value: !0
    }), ze.PhotoshopPointerCircle = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = ze.PhotoshopPointerCircle = function(o) {
        var c = o.hsl,
            a = (0, u.default)({
                default: {
                    picker: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "6px",
                        boxShadow: "inset 0 0 0 1px #fff",
                        transform: "translate(-6px, -6px)"
                    }
                },
                "black-outline": {
                    picker: {
                        boxShadow: "inset 0 0 0 1px #000"
                    }
                }
            }, {
                "black-outline": c.l > .5
            });
        return t.default.createElement("div", {
            style: a.picker
        })
    };
    return ze.default = h, ze
}
var Ue = {},
    Ha;

function Go() {
    if (Ha) return Ue;
    Ha = 1, Object.defineProperty(Ue, "__esModule", {
        value: !0
    }), Ue.PhotoshopPointerCircle = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Ue.PhotoshopPointerCircle = function() {
        var o = (0, u.default)({
            default: {
                triangle: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "4px 0 4px 6px",
                    borderColor: "transparent transparent transparent #fff",
                    position: "absolute",
                    top: "1px",
                    left: "1px"
                },
                triangleBorder: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "5px 0 5px 8px",
                    borderColor: "transparent transparent transparent #555"
                },
                left: {
                    Extend: "triangleBorder",
                    transform: "translate(-13px, -4px)"
                },
                leftInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                },
                right: {
                    Extend: "triangleBorder",
                    transform: "translate(20px, -14px) rotate(180deg)"
                },
                rightInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                }
            }
        });
        return t.default.createElement("div", {
            style: o.pointer
        }, t.default.createElement("div", {
            style: o.left
        }, t.default.createElement("div", {
            style: o.leftInside
        })), t.default.createElement("div", {
            style: o.right
        }, t.default.createElement("div", {
            style: o.rightInside
        })))
    };
    return Ue.default = h, Ue
}
var je = {},
    Da;

function $o() {
    if (Da) return je;
    Da = 1, Object.defineProperty(je, "__esModule", {
        value: !0
    }), je.PhotoshopBotton = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = je.PhotoshopBotton = function(o) {
        var c = o.onClick,
            a = o.label,
            s = o.children,
            e = o.active,
            p = (0, u.default)({
                default: {
                    button: {
                        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                        border: "1px solid #878787",
                        borderRadius: "2px",
                        height: "20px",
                        boxShadow: "0 1px 0 0 #EAEAEA",
                        fontSize: "14px",
                        color: "#000",
                        lineHeight: "20px",
                        textAlign: "center",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }
                },
                active: {
                    button: {
                        boxShadow: "0 0 0 1px #878787"
                    }
                }
            }, {
                active: e
            });
        return t.default.createElement("div", {
            style: p.button,
            onClick: c
        }, a || s)
    };
    return je.default = h, je
}
var Ve = {},
    Ia;

function Wo() {
    if (Ia) return Ve;
    Ia = 1, Object.defineProperty(Ve, "__esModule", {
        value: !0
    }), Ve.PhotoshopPreviews = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Ve.PhotoshopPreviews = function(o) {
        var c = o.rgb,
            a = o.currentColor,
            s = (0, u.default)({
                default: {
                    swatches: {
                        border: "1px solid #B3B3B3",
                        borderBottom: "1px solid #F0F0F0",
                        marginBottom: "2px",
                        marginTop: "1px"
                    },
                    new: {
                        height: "34px",
                        background: "rgb(" + c.r + "," + c.g + ", " + c.b + ")",
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
                    },
                    current: {
                        height: "34px",
                        background: a,
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
                    },
                    label: {
                        fontSize: "14px",
                        color: "#000",
                        textAlign: "center"
                    }
                }
            });
        return t.default.createElement("div", null, t.default.createElement("div", {
            style: s.label
        }, "new"), t.default.createElement("div", {
            style: s.swatches
        }, t.default.createElement("div", {
            style: s.new
        }), t.default.createElement("div", {
            style: s.current
        })), t.default.createElement("div", {
            style: s.label
        }, "current"))
    };
    return Ve.default = h, Ve
}
var Na;

function zo() {
    if (Na) return $e;
    Na = 1, Object.defineProperty($e, "__esModule", {
        value: !0
    }), $e.Photoshop = void 0;
    var g = function() {
            function R(M, q) {
                for (var A = 0; A < q.length; A++) {
                    var F = q[A];
                    F.enumerable = F.enumerable || !1, F.configurable = !0, "value" in F && (F.writable = !0), Object.defineProperty(M, F.key, F)
                }
            }
            return function(M, q, A) {
                return q && R(M.prototype, q), A && R(M, A), M
            }
        }(),
        t = T(),
        n = w(t),
        u = ee(),
        m = w(u),
        h = D(),
        f = w(h),
        o = W(),
        c = No(),
        a = w(c),
        s = Lo(),
        e = w(s),
        p = Go(),
        v = w(p),
        r = $o(),
        d = w(r),
        l = Wo(),
        i = w(l);

    function w(R) {
        return R && R.__esModule ? R : {
            default: R
        }
    }

    function _(R, M) {
        if (!(R instanceof M)) throw new TypeError("Cannot call a class as a function")
    }

    function C(R, M) {
        if (!R) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return M && (typeof M == "object" || typeof M == "function") ? M : R
    }

    function O(R, M) {
        if (typeof M != "function" && M !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof M);
        R.prototype = Object.create(M && M.prototype, {
            constructor: {
                value: R,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), M && (Object.setPrototypeOf ? Object.setPrototypeOf(R, M) : R.__proto__ = M)
    }
    var P = $e.Photoshop = function(R) {
        O(M, R);

        function M(q) {
            _(this, M);
            var A = C(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this));
            return A.state = {
                currentColor: q.hex
            }, A
        }
        return g(M, [{
            key: "render",
            value: function() {
                var A = this.props.className,
                    F = A === void 0 ? "" : A,
                    I = (0, f.default)({
                        default: {
                            picker: {
                                background: "#DCDCDC",
                                borderRadius: "4px",
                                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                                boxSizing: "initial",
                                width: "513px"
                            },
                            head: {
                                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                                borderBottom: "1px solid #B1B1B1",
                                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                                height: "23px",
                                lineHeight: "24px",
                                borderRadius: "4px 4px 0 0",
                                fontSize: "13px",
                                color: "#4D4D4D",
                                textAlign: "center"
                            },
                            body: {
                                padding: "15px 15px 0",
                                display: "flex"
                            },
                            saturation: {
                                width: "256px",
                                height: "256px",
                                position: "relative",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0",
                                overflow: "hidden"
                            },
                            hue: {
                                position: "relative",
                                height: "256px",
                                width: "19px",
                                marginLeft: "10px",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0"
                            },
                            controls: {
                                width: "180px",
                                marginLeft: "10px"
                            },
                            top: {
                                display: "flex"
                            },
                            previews: {
                                width: "60px"
                            },
                            actions: {
                                flex: "1",
                                marginLeft: "20px"
                            }
                        }
                    });
                return n.default.createElement("div", {
                    style: I.picker,
                    className: "photoshop-picker " + F
                }, n.default.createElement("div", {
                    style: I.head
                }, this.props.header), n.default.createElement("div", {
                    style: I.body,
                    className: "flexbox-fix"
                }, n.default.createElement("div", {
                    style: I.saturation
                }, n.default.createElement(o.Saturation, {
                    hsl: this.props.hsl,
                    hsv: this.props.hsv,
                    pointer: e.default,
                    onChange: this.props.onChange
                })), n.default.createElement("div", {
                    style: I.hue
                }, n.default.createElement(o.Hue, {
                    direction: "vertical",
                    hsl: this.props.hsl,
                    pointer: v.default,
                    onChange: this.props.onChange
                })), n.default.createElement("div", {
                    style: I.controls
                }, n.default.createElement("div", {
                    style: I.top,
                    className: "flexbox-fix"
                }, n.default.createElement("div", {
                    style: I.previews
                }, n.default.createElement(i.default, {
                    rgb: this.props.rgb,
                    currentColor: this.state.currentColor
                })), n.default.createElement("div", {
                    style: I.actions
                }, n.default.createElement(d.default, {
                    label: "OK",
                    onClick: this.props.onAccept,
                    active: !0
                }), n.default.createElement(d.default, {
                    label: "Cancel",
                    onClick: this.props.onCancel
                }), n.default.createElement(a.default, {
                    onChange: this.props.onChange,
                    rgb: this.props.rgb,
                    hsv: this.props.hsv,
                    hex: this.props.hex
                }))))))
            }
        }]), M
    }(n.default.Component);
    return P.propTypes = {
        header: m.default.string
    }, P.defaultProps = {
        header: "Color Picker"
    }, $e.default = (0, o.ColorWrap)(P), $e
}
var Xe = {},
    Ke = {},
    La;

function Uo() {
    if (La) return Ke;
    La = 1, Object.defineProperty(Ke, "__esModule", {
        value: !0
    }), Ke.SketchFields = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = te(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = Ke.SketchFields = function(s) {
        var e = s.onChange,
            p = s.rgb,
            v = s.hsl,
            r = s.hex,
            d = s.disableAlpha,
            l = (0, u.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingTop: "4px"
                    },
                    single: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    alpha: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    double: {
                        flex: "2"
                    },
                    input: {
                        width: "80%",
                        padding: "4px 10% 3px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #ccc",
                        fontSize: "11px"
                    },
                    label: {
                        display: "block",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#222",
                        paddingTop: "3px",
                        paddingBottom: "4px",
                        textTransform: "capitalize"
                    }
                },
                disableAlpha: {
                    alpha: {
                        display: "none"
                    }
                }
            }, {
                disableAlpha: d
            }),
            i = function(_, C) {
                _.hex ? h.default.isValidHex(_.hex) && e({
                    hex: _.hex,
                    source: "hex"
                }, C) : _.r || _.g || _.b ? e({
                    r: _.r || p.r,
                    g: _.g || p.g,
                    b: _.b || p.b,
                    a: p.a,
                    source: "rgb"
                }, C) : _.a && (_.a < 0 ? _.a = 0 : _.a > 100 && (_.a = 100), _.a /= 100, e({
                    h: v.h,
                    s: v.s,
                    l: v.l,
                    a: _.a,
                    source: "rgb"
                }, C))
            };
        return t.default.createElement("div", {
            style: l.fields,
            className: "flexbox-fix"
        }, t.default.createElement("div", {
            style: l.double
        }, t.default.createElement(f.EditableInput, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "hex",
            value: r.replace("#", ""),
            onChange: i
        })), t.default.createElement("div", {
            style: l.single
        }, t.default.createElement(f.EditableInput, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "r",
            value: p.r,
            onChange: i,
            dragLabel: "true",
            dragMax: "255"
        })), t.default.createElement("div", {
            style: l.single
        }, t.default.createElement(f.EditableInput, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "g",
            value: p.g,
            onChange: i,
            dragLabel: "true",
            dragMax: "255"
        })), t.default.createElement("div", {
            style: l.single
        }, t.default.createElement(f.EditableInput, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "b",
            value: p.b,
            onChange: i,
            dragLabel: "true",
            dragMax: "255"
        })), t.default.createElement("div", {
            style: l.alpha
        }, t.default.createElement(f.EditableInput, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "a",
            value: Math.round(p.a * 100),
            onChange: i,
            dragLabel: "true",
            dragMax: "100"
        })))
    };
    return Ke.default = c, Ke
}
var Ye = {},
    Ga;

function jo() {
    if (Ga) return Ye;
    Ga = 1, Object.defineProperty(Ye, "__esModule", {
        value: !0
    }), Ye.SketchPresetColors = void 0;
    var g = Object.assign || function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var p = arguments[e];
                for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (s[v] = p[v])
            }
            return s
        },
        t = T(),
        n = c(t),
        u = ee(),
        m = c(u),
        h = D(),
        f = c(h),
        o = W();

    function c(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var a = Ye.SketchPresetColors = function(e) {
        var p = e.colors,
            v = e.onClick,
            r = v === void 0 ? function() {} : v,
            d = e.onSwatchHover,
            l = (0, f.default)({
                default: {
                    colors: {
                        margin: "0 -10px",
                        padding: "10px 0 0 10px",
                        borderTop: "1px solid #eee",
                        display: "flex",
                        flexWrap: "wrap",
                        position: "relative"
                    },
                    swatchWrap: {
                        width: "16px",
                        height: "16px",
                        margin: "0 10px 10px 0"
                    },
                    swatch: {
                        borderRadius: "3px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
                    }
                },
                "no-presets": {
                    colors: {
                        display: "none"
                    }
                }
            }, {
                "no-presets": !p || !p.length
            }),
            i = function(_, C) {
                r({
                    hex: _,
                    source: "hex"
                }, C)
            };
        return n.default.createElement("div", {
            style: l.colors,
            className: "flexbox-fix"
        }, p.map(function(w) {
            var _ = typeof w == "string" ? {
                    color: w
                } : w,
                C = "" + _.color + (_.title || "");
            return n.default.createElement("div", {
                key: C,
                style: l.swatchWrap
            }, n.default.createElement(o.Swatch, g({}, _, {
                style: l.swatch,
                onClick: i,
                onHover: d,
                focusStyle: {
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + _.color
                }
            })))
        }))
    };
    return a.propTypes = {
        colors: m.default.arrayOf(m.default.oneOfType([m.default.string, m.default.shape({
            color: m.default.string,
            title: m.default.string
        })])).isRequired
    }, Ye.default = a, Ye
}
var $a;

function Vo() {
    if ($a) return Xe;
    $a = 1, Object.defineProperty(Xe, "__esModule", {
        value: !0
    }), Xe.Sketch = void 0;
    var g = T(),
        t = e(g),
        n = ee(),
        u = e(n),
        m = D(),
        h = e(m),
        f = W(),
        o = Uo(),
        c = e(o),
        a = jo(),
        s = e(a);

    function e(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }
    var p = Xe.Sketch = function(r) {
        var d = r.width,
            l = r.rgb,
            i = r.hex,
            w = r.hsv,
            _ = r.hsl,
            C = r.onChange,
            O = r.onSwatchHover,
            P = r.disableAlpha,
            R = r.presetColors,
            M = r.renderers,
            q = r.className,
            A = q === void 0 ? "" : q,
            F = (0, h.default)({
                default: {
                    picker: {
                        width: d,
                        padding: "10px 10px 0",
                        boxSizing: "initial",
                        background: "#fff",
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "3px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    controls: {
                        display: "flex"
                    },
                    sliders: {
                        padding: "4px 0",
                        flex: "1"
                    },
                    color: {
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "4px",
                        marginLeft: "4px",
                        borderRadius: "3px"
                    },
                    activeColor: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "2px",
                        background: "rgba(" + l.r + "," + l.g + "," + l.b + "," + l.a + ")",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    hue: {
                        position: "relative",
                        height: "10px",
                        overflow: "hidden"
                    },
                    Hue: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    alpha: {
                        position: "relative",
                        height: "10px",
                        marginTop: "4px",
                        overflow: "hidden"
                    },
                    Alpha: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    }
                },
                disableAlpha: {
                    color: {
                        height: "10px"
                    },
                    hue: {
                        height: "10px"
                    },
                    alpha: {
                        display: "none"
                    }
                }
            }, {
                disableAlpha: P
            });
        return t.default.createElement("div", {
            style: F.picker,
            className: "sketch-picker " + A
        }, t.default.createElement("div", {
            style: F.saturation
        }, t.default.createElement(f.Saturation, {
            style: F.Saturation,
            hsl: _,
            hsv: w,
            onChange: C
        })), t.default.createElement("div", {
            style: F.controls,
            className: "flexbox-fix"
        }, t.default.createElement("div", {
            style: F.sliders
        }, t.default.createElement("div", {
            style: F.hue
        }, t.default.createElement(f.Hue, {
            style: F.Hue,
            hsl: _,
            onChange: C
        })), t.default.createElement("div", {
            style: F.alpha
        }, t.default.createElement(f.Alpha, {
            style: F.Alpha,
            rgb: l,
            hsl: _,
            renderers: M,
            onChange: C
        }))), t.default.createElement("div", {
            style: F.color
        }, t.default.createElement(f.Checkboard, null), t.default.createElement("div", {
            style: F.activeColor
        }))), t.default.createElement(c.default, {
            rgb: l,
            hsl: _,
            hex: i,
            onChange: C,
            disableAlpha: P
        }), t.default.createElement(s.default, {
            colors: R,
            onClick: C,
            onSwatchHover: O
        }))
    };
    return p.propTypes = {
        disableAlpha: u.default.bool,
        width: u.default.oneOfType([u.default.string, u.default.number])
    }, p.defaultProps = {
        disableAlpha: !1,
        width: 200,
        presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
    }, Xe.default = (0, f.ColorWrap)(p), Xe
}
var Ze = {},
    Je = {},
    Qe = {},
    Wa;

function Xo() {
    if (Wa) return Qe;
    Wa = 1, Object.defineProperty(Qe, "__esModule", {
        value: !0
    }), Qe.SliderSwatch = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = Qe.SliderSwatch = function(o) {
        var c = o.hsl,
            a = o.offset,
            s = o.onClick,
            e = s === void 0 ? function() {} : s,
            p = o.active,
            v = o.first,
            r = o.last,
            d = (0, u.default)({
                default: {
                    swatch: {
                        height: "12px",
                        background: "hsl(" + c.h + ", 50%, " + a * 100 + "%)",
                        cursor: "pointer"
                    }
                },
                first: {
                    swatch: {
                        borderRadius: "2px 0 0 2px"
                    }
                },
                last: {
                    swatch: {
                        borderRadius: "0 2px 2px 0"
                    }
                },
                active: {
                    swatch: {
                        transform: "scaleY(1.8)",
                        borderRadius: "3.6px/2px"
                    }
                }
            }, {
                active: p,
                first: v,
                last: r
            }),
            l = function(w) {
                return e({
                    h: c.h,
                    s: .5,
                    l: a,
                    source: "hsl"
                }, w)
            };
        return t.default.createElement("div", {
            style: d.swatch,
            onClick: l
        })
    };
    return Qe.default = h, Qe
}
var za;

function Ko() {
    if (za) return Je;
    za = 1, Object.defineProperty(Je, "__esModule", {
        value: !0
    }), Je.SliderSwatches = void 0;
    var g = T(),
        t = f(g),
        n = D(),
        u = f(n),
        m = Xo(),
        h = f(m);

    function f(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var o = Je.SliderSwatches = function(a) {
        var s = a.onClick,
            e = a.hsl,
            p = (0, u.default)({
                default: {
                    swatches: {
                        marginTop: "20px"
                    },
                    swatch: {
                        boxSizing: "border-box",
                        width: "20%",
                        paddingRight: "1px",
                        float: "left"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return t.default.createElement("div", {
            style: p.swatches
        }, t.default.createElement("div", {
            style: p.swatch
        }, t.default.createElement(h.default, {
            hsl: e,
            offset: ".80",
            active: Math.round(e.l * 100) / 100 === .8 && Math.round(e.s * 100) / 100 === .5,
            onClick: s,
            first: !0
        })), t.default.createElement("div", {
            style: p.swatch
        }, t.default.createElement(h.default, {
            hsl: e,
            offset: ".65",
            active: Math.round(e.l * 100) / 100 === .65 && Math.round(e.s * 100) / 100 === .5,
            onClick: s
        })), t.default.createElement("div", {
            style: p.swatch
        }, t.default.createElement(h.default, {
            hsl: e,
            offset: ".50",
            active: Math.round(e.l * 100) / 100 === .5 && Math.round(e.s * 100) / 100 === .5,
            onClick: s
        })), t.default.createElement("div", {
            style: p.swatch
        }, t.default.createElement(h.default, {
            hsl: e,
            offset: ".35",
            active: Math.round(e.l * 100) / 100 === .35 && Math.round(e.s * 100) / 100 === .5,
            onClick: s
        })), t.default.createElement("div", {
            style: p.swatch
        }, t.default.createElement(h.default, {
            hsl: e,
            offset: ".20",
            active: Math.round(e.l * 100) / 100 === .2 && Math.round(e.s * 100) / 100 === .5,
            onClick: s,
            last: !0
        })), t.default.createElement("div", {
            style: p.clear
        }))
    };
    return Je.default = o, Je
}
var et = {},
    Ua;

function Yo() {
    if (Ua) return et;
    Ua = 1, Object.defineProperty(et, "__esModule", {
        value: !0
    }), et.SliderPointer = void 0;
    var g = T(),
        t = m(g),
        n = D(),
        u = m(n);

    function m(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var h = et.SliderPointer = function() {
        var o = (0, u.default)({
            default: {
                picker: {
                    width: "14px",
                    height: "14px",
                    borderRadius: "6px",
                    transform: "translate(-7px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return t.default.createElement("div", {
            style: o.picker
        })
    };
    return et.default = h, et
}
var ja;

function Zo() {
    if (ja) return Ze;
    ja = 1, Object.defineProperty(Ze, "__esModule", {
        value: !0
    }), Ze.Slider = void 0;
    var g = T(),
        t = a(g),
        n = D(),
        u = a(n),
        m = W(),
        h = Ko(),
        f = a(h),
        o = Yo(),
        c = a(o);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = Ze.Slider = function(p) {
        var v = p.hsl,
            r = p.onChange,
            d = p.pointer,
            l = p.className,
            i = l === void 0 ? "" : l,
            w = (0, u.default)({
                default: {
                    hue: {
                        height: "12px",
                        position: "relative"
                    },
                    Hue: {
                        radius: "2px"
                    }
                }
            });
        return t.default.createElement("div", {
            className: "slider-picker " + i
        }, t.default.createElement("div", {
            style: w.hue
        }, t.default.createElement(m.Hue, {
            style: w.Hue,
            hsl: v,
            pointer: d,
            onChange: r
        })), t.default.createElement("div", {
            style: w.swatches
        }, t.default.createElement(f.default, {
            hsl: v,
            onClick: r
        })))
    };
    return s.defaultProps = {
        pointer: c.default
    }, Ze.default = (0, m.ColorWrap)(s), Ze
}
var tt = {},
    rt = {},
    at = {},
    Va;

function Jo() {
    if (Va) return at;
    Va = 1, Object.defineProperty(at, "__esModule", {
        value: !0
    }), at.SwatchesColor = void 0;
    var g = T(),
        t = o(g),
        n = D(),
        u = o(n),
        m = te(),
        h = o(m),
        f = W();

    function o(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    var c = at.SwatchesColor = function(s) {
        var e = s.color,
            p = s.onClick,
            v = p === void 0 ? function() {} : p,
            r = s.onSwatchHover,
            d = s.first,
            l = s.last,
            i = s.active,
            w = (0, u.default)({
                default: {
                    color: {
                        width: "40px",
                        height: "24px",
                        cursor: "pointer",
                        background: e,
                        marginBottom: "1px"
                    },
                    check: {
                        fill: h.default.getContrastingColor(e),
                        marginLeft: "8px",
                        display: "none"
                    }
                },
                first: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "2px 2px 0 0"
                    }
                },
                last: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "0 0 2px 2px"
                    }
                },
                active: {
                    check: {
                        display: "block"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    check: {
                        fill: "#333"
                    }
                },
                transparent: {
                    check: {
                        fill: "#333"
                    }
                }
            }, {
                first: d,
                last: l,
                active: i,
                "color-#FFFFFF": e === "#FFFFFF",
                transparent: e === "transparent"
            });
        return t.default.createElement(f.Swatch, {
            color: e,
            style: w.color,
            onClick: v,
            onHover: r,
            focusStyle: {
                boxShadow: "0 0 4px " + e
            }
        }, t.default.createElement("div", {
            style: w.check
        }, t.default.createElement("svg", {
            style: {
                width: "24px",
                height: "24px"
            },
            viewBox: "0 0 24 24"
        }, t.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        }))))
    };
    return at.default = c, at
}
var Xa;

function Qo() {
    if (Xa) return rt;
    Xa = 1, Object.defineProperty(rt, "__esModule", {
        value: !0
    }), rt.SwatchesGroup = void 0;
    var g = T(),
        t = c(g),
        n = D(),
        u = c(n),
        m = oe(),
        h = c(m),
        f = Jo(),
        o = c(f);

    function c(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }
    var a = rt.SwatchesGroup = function(e) {
        var p = e.onClick,
            v = e.onSwatchHover,
            r = e.group,
            d = e.active,
            l = (0, u.default)({
                default: {
                    group: {
                        paddingBottom: "10px",
                        width: "40px",
                        float: "left",
                        marginRight: "10px"
                    }
                }
            });
        return t.default.createElement("div", {
            style: l.group
        }, (0, h.default)(r, function(i, w) {
            return t.default.createElement(o.default, {
                key: i,
                color: i,
                active: i.toLowerCase() === d,
                first: w === 0,
                last: w === r.length - 1,
                onClick: p,
                onSwatchHover: v
            })
        }))
    };
    return rt.default = a, rt
}
var Ka;

function el() {
    if (Ka) return tt;
    Ka = 1, Object.defineProperty(tt, "__esModule", {
        value: !0
    }), tt.Swatches = void 0;
    var g = T(),
        t = l(g),
        n = ee(),
        u = l(n),
        m = D(),
        h = l(m),
        f = oe(),
        o = l(f),
        c = te(),
        a = l(c),
        s = $n,
        e = d(s),
        p = W(),
        v = Qo(),
        r = l(v);

    function d(w) {
        if (w && w.__esModule) return w;
        var _ = {};
        if (w != null)
            for (var C in w) Object.prototype.hasOwnProperty.call(w, C) && (_[C] = w[C]);
        return _.default = w, _
    }

    function l(w) {
        return w && w.__esModule ? w : {
            default: w
        }
    }
    var i = tt.Swatches = function(_) {
        var C = _.width,
            O = _.height,
            P = _.onChange,
            R = _.onSwatchHover,
            M = _.colors,
            q = _.hex,
            A = _.className,
            F = A === void 0 ? "" : A,
            I = (0, h.default)({
                default: {
                    picker: {
                        width: C,
                        height: O
                    },
                    overflow: {
                        height: O,
                        overflowY: "scroll"
                    },
                    body: {
                        padding: "16px 0 6px 16px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }),
            U = function(L, re) {
                a.default.isValidHex(L) && P({
                    hex: L,
                    source: "hex"
                }, re)
            };
        return t.default.createElement("div", {
            style: I.picker,
            className: "swatches-picker " + F
        }, t.default.createElement(p.Raised, null, t.default.createElement("div", {
            style: I.overflow
        }, t.default.createElement("div", {
            style: I.body
        }, (0, o.default)(M, function(z) {
            return t.default.createElement(r.default, {
                key: z.toString(),
                group: z,
                active: q,
                onClick: U,
                onSwatchHover: R
            })
        }), t.default.createElement("div", {
            style: I.clear
        })))))
    };
    return i.propTypes = {
        width: u.default.oneOfType([u.default.string, u.default.number]),
        height: u.default.oneOfType([u.default.string, u.default.number]),
        colors: u.default.arrayOf(u.default.arrayOf(u.default.string))
    }, i.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [e.red[900], e.red[700], e.red[500], e.red[300], e.red[100]],
            [e.pink[900], e.pink[700], e.pink[500], e.pink[300], e.pink[100]],
            [e.purple[900], e.purple[700], e.purple[500], e.purple[300], e.purple[100]],
            [e.deepPurple[900], e.deepPurple[700], e.deepPurple[500], e.deepPurple[300], e.deepPurple[100]],
            [e.indigo[900], e.indigo[700], e.indigo[500], e.indigo[300], e.indigo[100]],
            [e.blue[900], e.blue[700], e.blue[500], e.blue[300], e.blue[100]],
            [e.lightBlue[900], e.lightBlue[700], e.lightBlue[500], e.lightBlue[300], e.lightBlue[100]],
            [e.cyan[900], e.cyan[700], e.cyan[500], e.cyan[300], e.cyan[100]],
            [e.teal[900], e.teal[700], e.teal[500], e.teal[300], e.teal[100]],
            ["#194D33", e.green[700], e.green[500], e.green[300], e.green[100]],
            [e.lightGreen[900], e.lightGreen[700], e.lightGreen[500], e.lightGreen[300], e.lightGreen[100]],
            [e.lime[900], e.lime[700], e.lime[500], e.lime[300], e.lime[100]],
            [e.yellow[900], e.yellow[700], e.yellow[500], e.yellow[300], e.yellow[100]],
            [e.amber[900], e.amber[700], e.amber[500], e.amber[300], e.amber[100]],
            [e.orange[900], e.orange[700], e.orange[500], e.orange[300], e.orange[100]],
            [e.deepOrange[900], e.deepOrange[700], e.deepOrange[500], e.deepOrange[300], e.deepOrange[100]],
            [e.brown[900], e.brown[700], e.brown[500], e.brown[300], e.brown[100]],
            [e.blueGrey[900], e.blueGrey[700], e.blueGrey[500], e.blueGrey[300], e.blueGrey[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
        ]
    }, tt.default = (0, p.ColorWrap)(i), tt
}
var nt = {},
    Ya;

function tl() {
    if (Ya) return nt;
    Ya = 1, Object.defineProperty(nt, "__esModule", {
        value: !0
    }), nt.Twitter = void 0;
    var g = T(),
        t = e(g),
        n = ee(),
        u = e(n),
        m = D(),
        h = e(m),
        f = oe(),
        o = e(f),
        c = te(),
        a = e(c),
        s = W();

    function e(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }
    var p = nt.Twitter = function(r) {
        var d = r.onChange,
            l = r.onSwatchHover,
            i = r.hex,
            w = r.colors,
            _ = r.width,
            C = r.triangle,
            O = r.className,
            P = O === void 0 ? "" : O,
            R = (0, h.default)({
                default: {
                    card: {
                        width: _,
                        background: "#fff",
                        border: "0 solid rgba(0,0,0,0.25)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        borderRadius: "4px",
                        position: "relative"
                    },
                    body: {
                        padding: "15px 9px 9px 15px"
                    },
                    label: {
                        fontSize: "18px",
                        color: "#fff"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent #fff transparent",
                        position: "absolute"
                    },
                    triangleShadow: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                        position: "absolute"
                    },
                    hash: {
                        background: "#F0F0F0",
                        height: "30px",
                        width: "30px",
                        borderRadius: "4px 0 0 4px",
                        float: "left",
                        color: "#98A1A4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    input: {
                        width: "100px",
                        fontSize: "14px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "28px",
                        boxShadow: "inset 0 0 0 1px #F0F0F0",
                        boxSizing: "content-box",
                        borderRadius: "0 4px 4px 0",
                        float: "left",
                        paddingLeft: "8px"
                    },
                    swatch: {
                        width: "30px",
                        height: "30px",
                        float: "left",
                        borderRadius: "4px",
                        margin: "0 6px 6px 0"
                    },
                    clear: {
                        clear: "both"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-10px",
                        left: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        left: "12px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-10px",
                        right: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        right: "12px"
                    }
                }
            }, {
                "hide-triangle": C === "hide",
                "top-left-triangle": C === "top-left",
                "top-right-triangle": C === "top-right"
            }),
            M = function(A, F) {
                a.default.isValidHex(A) && d({
                    hex: A,
                    source: "hex"
                }, F)
            };
        return t.default.createElement("div", {
            style: R.card,
            className: "twitter-picker " + P
        }, t.default.createElement("div", {
            style: R.triangleShadow
        }), t.default.createElement("div", {
            style: R.triangle
        }), t.default.createElement("div", {
            style: R.body
        }, (0, o.default)(w, function(q, A) {
            return t.default.createElement(s.Swatch, {
                key: A,
                color: q,
                hex: q,
                style: R.swatch,
                onClick: M,
                onHover: l,
                focusStyle: {
                    boxShadow: "0 0 4px " + q
                }
            })
        }), t.default.createElement("div", {
            style: R.hash
        }, "#"), t.default.createElement(s.EditableInput, {
            style: {
                input: R.input
            },
            value: i.replace("#", ""),
            onChange: M
        }), t.default.createElement("div", {
            style: R.clear
        })))
    };
    return p.propTypes = {
        width: u.default.oneOfType([u.default.string, u.default.number]),
        triangle: u.default.oneOf(["hide", "top-left", "top-right"]),
        colors: u.default.arrayOf(u.default.string)
    }, p.defaultProps = {
        width: 276,
        colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
        triangle: "top-left"
    }, nt.default = (0, s.ColorWrap)(p), nt
}
var Za;

function rl() {
    return Za || (Za = 1, function(g) {
        Object.defineProperty(g, "__esModule", {
            value: !0
        }), g.CustomPicker = g.TwitterPicker = g.SwatchesPicker = g.SliderPicker = g.SketchPicker = g.PhotoshopPicker = g.MaterialPicker = g.HuePicker = g.GithubPicker = g.CompactPicker = g.ChromePicker = g.default = g.CirclePicker = g.BlockPicker = g.AlphaPicker = void 0;
        var t = yo();
        Object.defineProperty(g, "AlphaPicker", {
            enumerable: !0,
            get: function() {
                return l(t).default
            }
        });
        var n = wo();
        Object.defineProperty(g, "BlockPicker", {
            enumerable: !0,
            get: function() {
                return l(n).default
            }
        });
        var u = Po();
        Object.defineProperty(g, "CirclePicker", {
            enumerable: !0,
            get: function() {
                return l(u).default
            }
        });
        var m = Oo();
        Object.defineProperty(g, "ChromePicker", {
            enumerable: !0,
            get: function() {
                return l(m).default
            }
        });
        var h = Bo();
        Object.defineProperty(g, "CompactPicker", {
            enumerable: !0,
            get: function() {
                return l(h).default
            }
        });
        var f = To();
        Object.defineProperty(g, "GithubPicker", {
            enumerable: !0,
            get: function() {
                return l(f).default
            }
        });
        var o = Do();
        Object.defineProperty(g, "HuePicker", {
            enumerable: !0,
            get: function() {
                return l(o).default
            }
        });
        var c = Io();
        Object.defineProperty(g, "MaterialPicker", {
            enumerable: !0,
            get: function() {
                return l(c).default
            }
        });
        var a = zo();
        Object.defineProperty(g, "PhotoshopPicker", {
            enumerable: !0,
            get: function() {
                return l(a).default
            }
        });
        var s = Vo();
        Object.defineProperty(g, "SketchPicker", {
            enumerable: !0,
            get: function() {
                return l(s).default
            }
        });
        var e = Zo();
        Object.defineProperty(g, "SliderPicker", {
            enumerable: !0,
            get: function() {
                return l(e).default
            }
        });
        var p = el();
        Object.defineProperty(g, "SwatchesPicker", {
            enumerable: !0,
            get: function() {
                return l(p).default
            }
        });
        var v = tl();
        Object.defineProperty(g, "TwitterPicker", {
            enumerable: !0,
            get: function() {
                return l(v).default
            }
        });
        var r = gn();
        Object.defineProperty(g, "CustomPicker", {
            enumerable: !0,
            get: function() {
                return l(r).default
            }
        });
        var d = l(m);

        function l(i) {
            return i && i.__esModule ? i : {
                default: i
            }
        }
        g.default = d.default
    }(Et)), Et
}
var al = rl();
const vu = () => {
        const [g, t] = St.useState(""), [n, u] = St.useState(""), [m, h] = St.useState(!1), f = s => t(s.target.value), o = s => u(s.hex), c = !!(g && n), a = () => {
            !c || m || (h(!0), Kn({
                url: "/api/v1/groups/create",
                method: "post",
                data: {
                    name: g,
                    color: n
                },
                success: s => {
                    mi(`/class/${s._id}`), Zn(bi)
                },
                error: s => Yn({
                    e: s,
                    default: {
                        title: "Error creating class"
                    }
                }),
                both: () => h(!1)
            }))
        };
        return G.jsxs(G.Fragment, {
            children: [G.jsx(Vn, {
                title: "New Class"
            }), G.jsxs(nl, {
                children: [G.jsx(xi, {
                    includeSpacer: !0
                }), G.jsxs(il, {
                    children: [G.jsx(Ci, {}), G.jsxs(Ja, {
                        children: [G.jsx(Qa, {
                            children: "Class Name"
                        }), G.jsx(yi, {
                            size: "large",
                            placeholder: "First Period",
                            style: {
                                width: "100%"
                            },
                            maxLength: 28,
                            value: g,
                            onChange: f
                        }), G.jsx("div", {
                            style: {
                                height: 25
                            }
                        }), G.jsx(Qa, {
                            children: "Class Color"
                        }), G.jsx("div", {
                            style: {
                                height: 5
                            }
                        }), G.jsx(al.CirclePicker, {
                            width: "100%",
                            onChange: o,
                            color: n
                        })]
                    }), G.jsx("div", {
                        style: {
                            height: 25,
                            flexShrink: 0
                        }
                    }), G.jsx(Ja, {
                        style: {
                            flex: 1,
                            paddingTop: 30,
                            paddingBottom: 30,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        },
                        children: G.jsxs("div", {
                            className: "flex maxWidth",
                            style: {
                                justifyContent: "space-between"
                            },
                            children: [G.jsx("div", {}), G.jsx("div", {
                                children: G.jsx(Xn, {
                                    size: "large",
                                    style: {
                                        height: 58,
                                        width: 239
                                    },
                                    type: "primary",
                                    disabled: !c,
                                    loading: m,
                                    onClick: a,
                                    children: "Create Class"
                                })
                            })]
                        })
                    })]
                })]
            })]
        })
    },
    nl = ie.div.attrs({
        className: "scroll-y flex-column vc"
    })`
  flex: 1;
  width: 100%;
  background: ${ut.Snow};
`,
    il = ie.div.attrs({
        className: "flex vc flex-column"
    })`
  width: 80%;
  max-width: 1100px;
  flex: 1;
`,
    Ja = ie.div`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ut.White};
  padding: 60px;
  border-radius: 8px;
  color: ${ut.Black};
  width: 100%;
`,
    Qa = ie.h2`
  font-size: 28px;
  color: ${ut.Black};
  margin-bottom: 0px;
  font-weight: ${en.UltraBold};
`;
export {
    vu as
    default
};