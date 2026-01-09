import {
    ay as x
} from "./index-25.js";
import {
    e as C,
    b as T,
    D as N,
    r as A,
    x as M,
    G as k
} from "./toNumber.js";
var o, _;

function D() {
    if (_) return o;
    _ = 1;
    var u = A(),
        i = C(),
        s = N(),
        e = T();

    function r(t, n, a) {
        if (!e(a)) return !1;
        var f = typeof n;
        return (f == "number" ? i(a) && s(n, a.length) : f == "string" && n in a) ? u(a[n], t) : !1
    }
    return o = r, o
}
var q, E;

function G() {
    if (E) return q;
    E = 1;
    var u = M();

    function i(s, e) {
        return u(s, e)
    }
    return q = i, q
}
var L = G();
const B = x(L);
var g, h;

function O() {
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

function y() {
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

function p() {
    if (m) return I;
    m = 1;
    var u = O(),
        i = D(),
        s = y();

    function e(r) {
        return function(t, n, a) {
            return a && typeof a != "number" && i(t, n, a) && (n = a = void 0), t = s(t), n === void 0 ? (n = t, t = 0) : n = s(n), a = a === void 0 ? t < n ? 1 : -1 : s(a), u(t, n, a, r)
        }
    }
    return I = e, I
}
var c, F;

function w() {
    if (F) return c;
    F = 1;
    var u = p(),
        i = u();
    return c = i, c
}
var X = w();
const H = x(X);
var R, d;

function J() {
    if (d) return R;
    d = 1;
    var u = y();

    function i(s) {
        var e = u(s),
            r = e % 1;
        return e === e ? r ? e - r : e : 0
    }
    return R = i, R
}
export {
    H as a, J as b, B as i, D as r
};