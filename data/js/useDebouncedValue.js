import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    n,
    t as r
} from "./dist-1.js";
import {
    t as i
} from "./react-1.js";
import {
    a
} from "./_index.js";
var o = e(t(((e, t) => {
        n();
        var i = `Expected a function`,
            a = NaN,
            o = `[object Symbol]`,
            s = /^\s+|\s+$/g,
            c = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            d = parseInt,
            f = typeof r == `object` && r && r.Object === Object && r,
            p = typeof self == `object` && self && self.Object === Object && self,
            m = f || p || Function(`return this`)(),
            h = Object.prototype.toString,
            g = Math.max,
            _ = Math.min,
            v = function() {
                return m.Date.now()
            };

        function y(e, t, n) {
            var r, a, o, s, c, l, u = 0,
                d = !1,
                f = !1,
                p = !0;
            if (typeof e != `function`) throw TypeError(i);
            t = C(t) || 0, b(n) && (d = !!n.leading, f = `maxWait` in n, o = f ? g(C(n.maxWait) || 0, t) : o, p = `trailing` in n ? !!n.trailing : p);

            function m(t) {
                var n = r,
                    i = a;
                return r = a = void 0, u = t, s = e.apply(i, n), s
            }

            function h(e) {
                return u = e, c = setTimeout(S, t), d ? m(e) : s
            }

            function y(e) {
                var n = e - l,
                    r = e - u,
                    i = t - n;
                return f ? _(i, o - r) : i
            }

            function x(e) {
                var n = e - l,
                    r = e - u;
                return l === void 0 || n >= t || n < 0 || f && r >= o
            }

            function S() {
                var e = v();
                if (x(e)) return w(e);
                c = setTimeout(S, y(e))
            }

            function w(e) {
                return c = void 0, p && r ? m(e) : (r = a = void 0, s)
            }

            function T() {
                c !== void 0 && clearTimeout(c), u = 0, r = l = a = c = void 0
            }

            function E() {
                return c === void 0 ? s : w(v())
            }

            function D() {
                var e = v(),
                    n = x(e);
                if (r = arguments, a = this, l = e, n) {
                    if (c === void 0) return h(l);
                    if (f) return c = setTimeout(S, t), m(l)
                }
                return c === void 0 && (c = setTimeout(S, t)), s
            }
            return D.cancel = T, D.flush = E, D
        }

        function b(e) {
            var t = typeof e;
            return !!e && (t == `object` || t == `function`)
        }

        function x(e) {
            return !!e && typeof e == `object`
        }

        function S(e) {
            return typeof e == `symbol` || x(e) && h.call(e) == o
        }

        function C(e) {
            if (typeof e == `number`) return e;
            if (S(e)) return a;
            if (b(e)) {
                var t = typeof e.valueOf == `function` ? e.valueOf() : e;
                e = b(t) ? t + `` : t
            }
            if (typeof e != `string`) return e === 0 ? e : +e;
            e = e.replace(s, ``);
            var n = l.test(e);
            return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : c.test(e) ? a : +e
        }
        t.exports = y
    }))()),
    s = e(i());

function c(e, t, n) {
    var r = (0, s.useCallback)(function(e) {
            return (0, o.default)(e, t, n)
        }, [t, n]),
        i = (0, s.useRef)(r(e));
    return (0, s.useEffect)(function() {
        i.current = r(e)
    }, [e, r]), i.current
}

function l(e, t) {
    var n = (0, s.useRef)(!1);
    t !== void 0 && !Array.isArray(t) ? t = [t] : Array.isArray(t) && t.length === 0 && console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0."), (0, s.useEffect)(function() {
        n.current ? e() : n.current = !0
    }, t), (0, s.useEffect)(function() {
        return function() {
            n.current = !1
        }
    }, [])
}
var u = {
        initializeWithNull: !1
    },
    d = function(e, t, n) {
        n === void 0 && (n = {});
        var r = Object.assign({}, u, n).initializeWithNull,
            i = (0, s.useState)(r ? null : e),
            o = i[0],
            d = i[1],
            f = c(d, t);
        return a(function() {
            r && f(e)
        }), l(function() {
            f(e)
        }, [e]), [o, d]
    };
export {
    l as n, d as t
};