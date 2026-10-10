import {
    t as e
} from "./rolldown-runtime.js";
import {
    A as t,
    F as n,
    L as r,
    M as i,
    N as a,
    P as o,
    j as s
} from "./utils.js";
import {
    D as c,
    E as l,
    c as u,
    g as d,
    j as f,
    k as p,
    m,
    n as h,
    o as g,
    p as _,
    s as v,
    t as y
} from "./toNumber.js";
var b = e(((e, t) => {
        var n = o(),
            r = s(),
            i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;

        function c(e, t) {
            if (n(e)) return !1;
            var o = typeof e;
            return o == `number` || o == `symbol` || o == `boolean` || e == null || r(e) ? !0 : a.test(e) || !i.test(e) || t != null && e in Object(t)
        }
        t.exports = c
    })),
    x = e(((e, t) => {
        var n = c(),
            r = `Expected a function`;

        function i(e, t) {
            if (typeof e != `function` || t != null && typeof t != `function`) throw TypeError(r);
            var a = function() {
                var n = arguments,
                    r = t ? t.apply(this, n) : n[0],
                    i = a.cache;
                if (i.has(r)) return i.get(r);
                var o = e.apply(this, n);
                return a.cache = i.set(r, o) || i, o
            };
            return a.cache = new(i.Cache || n), a
        }
        i.Cache = n, t.exports = i
    })),
    S = e(((e, t) => {
        var n = x(),
            r = 500;

        function i(e) {
            var t = n(e, function(e) {
                    return i.size === r && i.clear(), e
                }),
                i = t.cache;
            return t
        }
        t.exports = i
    })),
    C = e(((e, t) => {
        var n = S(),
            r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g;
        t.exports = n(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(``), e.replace(r, function(e, n, r, a) {
                t.push(r ? a.replace(i, `$1`) : n || e)
            }), t
        })
    })),
    w = e(((e, n) => {
        var r = o(),
            i = b(),
            a = C(),
            s = t();

        function c(e, t) {
            return r(e) ? e : i(e, t) ? [e] : a(s(e))
        }
        n.exports = c
    })),
    T = e(((e, t) => {
        var n = s(),
            r = 1 / 0;

        function i(e) {
            if (typeof e == `string` || n(e)) return e;
            var t = e + ``;
            return t == `0` && 1 / e == -r ? `-0` : t
        }
        t.exports = i
    })),
    E = e(((e, t) => {
        var n = w(),
            r = T();

        function i(e, t) {
            t = n(t, e);
            for (var i = 0, a = t.length; e != null && i < a;) e = e[r(t[i++])];
            return i && i == a ? e : void 0
        }
        t.exports = i
    })),
    D = e(((e, t) => {
        var n = E();

        function r(e, t, r) {
            var i = e == null ? void 0 : n(e, t);
            return i === void 0 ? r : i
        }
        t.exports = r
    })),
    O = e(((e, t) => {
        var n = a(),
            r = o(),
            s = i(),
            c = `[object String]`;

        function l(e) {
            return typeof e == `string` || !r(e) && s(e) && n(e) == c
        }
        t.exports = l
    })),
    k = e(((e, t) => {
        var n = l(),
            r = h(),
            i = 1,
            a = 2;

        function o(e, t, o, s) {
            var c = o.length,
                l = c,
                u = !s;
            if (e == null) return !l;
            for (e = Object(e); c--;) {
                var d = o[c];
                if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++c < l;) {
                d = o[c];
                var f = d[0],
                    p = e[f],
                    m = d[1];
                if (u && d[2]) {
                    if (p === void 0 && !(f in e)) return !1
                } else {
                    var h = new n;
                    if (s) var g = s(p, m, f, e, t, h);
                    if (!(g === void 0 ? r(m, p, i | a, s, h) : g)) return !1
                }
            }
            return !0
        }
        t.exports = o
    })),
    A = e(((e, t) => {
        var n = f();

        function r(e) {
            return e === e && !n(e)
        }
        t.exports = r
    })),
    j = e(((e, t) => {
        var n = A(),
            r = g();

        function i(e) {
            for (var t = r(e), i = t.length; i--;) {
                var a = t[i],
                    o = e[a];
                t[i] = [a, o, n(o)]
            }
            return t
        }
        t.exports = i
    })),
    M = e(((e, t) => {
        function n(e, t) {
            return function(n) {
                return n != null && n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        t.exports = n
    })),
    N = e(((e, t) => {
        var n = k(),
            r = j(),
            i = M();

        function a(e) {
            var t = r(e);
            return t.length == 1 && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
                return r === e || n(r, e, t)
            }
        }
        t.exports = a
    })),
    P = e(((e, t) => {
        function n(e, t) {
            return e != null && t in Object(e)
        }
        t.exports = n
    })),
    F = e(((e, t) => {
        var n = w(),
            r = d(),
            i = o(),
            a = m(),
            s = _(),
            c = T();

        function l(e, t, o) {
            t = n(t, e);
            for (var l = -1, u = t.length, d = !1; ++l < u;) {
                var f = c(t[l]);
                if (!(d = e != null && o(e, f))) break;
                e = e[f]
            }
            return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && s(u) && a(f, u) && (i(e) || r(e)))
        }
        t.exports = l
    })),
    I = e(((e, t) => {
        var n = P(),
            r = F();

        function i(e, t) {
            return e != null && r(e, t, n)
        }
        t.exports = i
    })),
    L = e(((e, t) => {
        var n = h(),
            r = D(),
            i = I(),
            a = b(),
            o = A(),
            s = M(),
            c = T(),
            l = 1,
            u = 2;

        function d(e, t) {
            return a(e) && o(t) ? s(c(e), t) : function(a) {
                var o = r(a, e);
                return o === void 0 && o === t ? i(a, e) : n(t, o, l | u)
            }
        }
        t.exports = d
    })),
    R = e(((e, t) => {
        function n(e) {
            return e
        }
        t.exports = n
    })),
    z = e(((e, t) => {
        function n(e) {
            return function(t) {
                return t == null ? void 0 : t[e]
            }
        }
        t.exports = n
    })),
    B = e(((e, t) => {
        var n = E();

        function r(e) {
            return function(t) {
                return n(t, e)
            }
        }
        t.exports = r
    })),
    V = e(((e, t) => {
        var n = z(),
            r = B(),
            i = b(),
            a = T();

        function o(e) {
            return i(e) ? n(a(e)) : r(e)
        }
        t.exports = o
    })),
    H = e(((e, t) => {
        var n = N(),
            r = L(),
            i = R(),
            a = o(),
            s = V();

        function c(e) {
            return typeof e == `function` ? e : e == null ? i : typeof e == `object` ? a(e) ? r(e[0], e[1]) : n(e) : s(e)
        }
        t.exports = c
    })),
    U = e(((e, t) => {
        function n(e) {
            return function(t, n, r) {
                for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                    var c = o[e ? s : ++i];
                    if (n(a[c], c, a) === !1) break
                }
                return t
            }
        }
        t.exports = n
    })),
    W = e(((e, t) => {
        t.exports = U()()
    })),
    G = e(((e, t) => {
        var n = W(),
            r = g();

        function i(e, t) {
            return e && n(e, t, r)
        }
        t.exports = i
    })),
    K = e(((e, t) => {
        var n = v();

        function r(e, t) {
            return function(r, i) {
                if (r == null) return r;
                if (!n(r)) return e(r, i);
                for (var a = r.length, o = t ? a : -1, s = Object(r);
                    (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;);
                return r
            }
        }
        t.exports = r
    })),
    q = e(((e, t) => {
        var n = G();
        t.exports = K()(n)
    })),
    J = e(((e, t) => {
        var n = q(),
            r = v();

        function i(e, t) {
            var i = -1,
                a = r(e) ? Array(e.length) : [];
            return n(e, function(e, n, r) {
                a[++i] = t(e, n, r)
            }), a
        }
        t.exports = i
    })),
    Y = e(((e, t) => {
        var n = p();
        t.exports = function() {
            try {
                var e = n(Object, `defineProperty`);
                return e({}, ``, {}), e
            } catch {}
        }()
    })),
    X = e(((e, t) => {
        var n = r();
        t.exports = function() {
            return n.Date.now()
        }
    })),
    Z = e(((e, t) => {
        var n = f(),
            r = X(),
            i = y(),
            a = `Expected a function`,
            o = Math.max,
            s = Math.min;

        function c(e, t, c) {
            var l, u, d, f, p, m, h = 0,
                g = !1,
                _ = !1,
                v = !0;
            if (typeof e != `function`) throw TypeError(a);
            t = i(t) || 0, n(c) && (g = !!c.leading, _ = `maxWait` in c, d = _ ? o(i(c.maxWait) || 0, t) : d, v = `trailing` in c ? !!c.trailing : v);

            function y(t) {
                var n = l,
                    r = u;
                return l = u = void 0, h = t, f = e.apply(r, n), f
            }

            function b(e) {
                return h = e, p = setTimeout(C, t), g ? y(e) : f
            }

            function x(e) {
                var n = e - m,
                    r = e - h,
                    i = t - n;
                return _ ? s(i, d - r) : i
            }

            function S(e) {
                var n = e - m,
                    r = e - h;
                return m === void 0 || n >= t || n < 0 || _ && r >= d
            }

            function C() {
                var e = r();
                if (S(e)) return w(e);
                p = setTimeout(C, x(e))
            }

            function w(e) {
                return p = void 0, v && l ? y(e) : (l = u = void 0, f)
            }

            function T() {
                p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0
            }

            function E() {
                return p === void 0 ? f : w(r())
            }

            function D() {
                var e = r(),
                    n = S(e);
                if (l = arguments, u = this, m = e, n) {
                    if (p === void 0) return b(m);
                    if (_) return clearTimeout(p), p = setTimeout(C, t), y(m)
                }
                return p === void 0 && (p = setTimeout(C, t)), f
            }
            return D.cancel = T, D.flush = E, D
        }
        t.exports = c
    })),
    Q = e(((e, t) => {
        var n = Z(),
            r = f(),
            i = `Expected a function`;

        function a(e, t, a) {
            var o = !0,
                s = !0;
            if (typeof e != `function`) throw TypeError(i);
            return r(a) && (o = `leading` in a ? !!a.leading : o, s = `trailing` in a ? !!a.trailing : s), n(e, t, {
                leading: o,
                maxWait: t,
                trailing: s
            })
        }
        t.exports = a
    })),
    ee = e(((e, t) => {
        var r = n(),
            i = H(),
            a = J(),
            s = o();

        function c(e, t) {
            return (s(e) ? r : a)(e, i(t, 3))
        }
        t.exports = c
    })),
    $ = e(((e, t) => {
        t.exports = u()(Object.getPrototypeOf, Object)
    })),
    te = e(((e, t) => {
        var n = a(),
            r = $(),
            o = i(),
            s = `[object Object]`,
            c = Function.prototype,
            l = Object.prototype,
            u = c.toString,
            d = l.hasOwnProperty,
            f = u.call(Object);

        function p(e) {
            if (!o(e) || n(e) != s) return !1;
            var t = r(e);
            if (t === null) return !0;
            var i = d.call(t, `constructor`) && t.constructor;
            return typeof i == `function` && i instanceof i && u.call(i) == f
        }
        t.exports = p
    })),
    ne = e(((e, t) => {
        var n = Y();

        function r(e, t, r) {
            t == `__proto__` && n ? n(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        t.exports = r
    }));
export {
    Q as a, J as c, H as d, R as f, x as g, E as h, ee as i, q as l, D as m, te as n, Z as o, O as p, $ as r, Y as s, ne as t, G as u
};