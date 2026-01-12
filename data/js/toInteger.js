import {
    aw as x
} from "./_index.js";
import {
    e as T,
    b as y,
    D as N,
    r as A,
    x as M,
    G as k
} from "./toNumber.js";
var o, _;

function w() {
    if (_) return o;
    _ = 1;
    var u = A(),
        i = T(),
        s = N(),
        e = y();

    function r(t, n, a) {
        if (!e(a)) return !1;
        var f = typeof n;
        return (f == "number" ? i(a) && s(n, a.length) : f == "string" && n in a) ? u(a[n], t) : !1
    }
    return o = r, o
}
var q, E;

function D() {
    if (E) return q;
    E = 1;
    var u = M();

    function i(s, e) {
        return u(s, e)
    }
    return q = i, q
}
var G = D();
const B = x(G);
var g, h;

function L() {
    if (h) return g;
    h = 1;
    var u = Math.ceil,
        i = Math.max;

    function s(e, r, t, n) {
        for (var a = -1, f = i(u((r - e) / (t || 1)), 0), l = Array(f); f--;) l[n ? f : ++a] = e, e += t;
        return l
    }
    return g = s, g
}
var v, b;

function C() {
    if (b) return v;
    b = 1;
    var u = k(),
        i = 1 / 0,
        s = 17976931348623157e292;

    function e(r) {
        if (!r) return r === 0 ? r : 0;
        if (r = u(r), r === i || r === -i) {
            var t = r < 0 ? -1 : 1;
            return t * s
        }
        return r === r ? r : 0
    }
    return v = e, v
}
var I, m;

function O() {
    if (m) return I;
    m = 1;
    var u = L(),
        i = w(),
        s = C();

    function e(r) {
        return function(t, n, a) {
            return a && typeof a != "number" && i(t, n, a) && (n = a = void 0), t = s(t), n === void 0 ? (n = t, t = 0) : n = s(n), a = a === void 0 ? t < n ? 1 : -1 : s(a), u(t, n, a, r)
        }
    }
    return I = e, I
}
var c, F;

function p() {
    if (F) return c;
    F = 1;
    var u = O(),
        i = u();
    return c = i, c
}
var X = p();
const H = x(X);
var R, d;

function J() {
    if (d) return R;
    d = 1;
    var u = C();

    function i(s) {
        var e = u(s),
            r = e % 1;
        return e === e ? r ? e - r : e : 0
    }
    return R = i, R
}
export {
    H as a, J as b, B as i, w as r
};