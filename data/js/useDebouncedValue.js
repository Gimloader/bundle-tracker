import {
    at as O,
    aw as Y,
    r as l,
    s as Z
} from "./_index.js";
var R, _;

function w() {
    if (_) return R;
    _ = 1;
    var i = "Expected a function",
        r = NaN,
        a = "[object Symbol]",
        o = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        T = parseInt,
        M = typeof O == "object" && O && O.Object === Object && O,
        V = typeof self == "object" && self && self.Object === Object && self,
        F = M || V || Function("return this")(),
        $ = Object.prototype,
        z = $.toString,
        B = Math.max,
        q = Math.min,
        I = function() {
            return F.Date.now()
        };

    function G(e, t, f) {
        var b, y, x, m, u, d, h = 0,
            L = !1,
            p = !1,
            k = !0;
        if (typeof e != "function") throw new TypeError(i);
        t = A(t) || 0, S(f) && (L = !!f.leading, p = "maxWait" in f, x = p ? B(A(f.maxWait) || 0, t) : x, k = "trailing" in f ? !!f.trailing : k);

        function D(n) {
            var s = b,
                v = y;
            return b = y = void 0, h = n, m = e.apply(v, s), m
        }

        function X(n) {
            return h = n, u = setTimeout(E, t), L ? D(n) : m
        }

        function J(n) {
            var s = n - d,
                v = n - h,
                W = t - s;
            return p ? q(W, x - v) : W
        }

        function N(n) {
            var s = n - d,
                v = n - h;
            return d === void 0 || s >= t || s < 0 || p && v >= x
        }

        function E() {
            var n = I();
            if (N(n)) return U(n);
            u = setTimeout(E, J(n))
        }

        function U(n) {
            return u = void 0, k && b ? D(n) : (b = y = void 0, m)
        }

        function K() {
            u !== void 0 && clearTimeout(u), h = 0, b = d = y = u = void 0
        }

        function Q() {
            return u === void 0 ? m : U(I())
        }

        function C() {
            var n = I(),
                s = N(n);
            if (b = arguments, y = this, d = n, s) {
                if (u === void 0) return X(d);
                if (p) return u = setTimeout(E, t), D(d)
            }
            return u === void 0 && (u = setTimeout(E, t)), m
        }
        return C.cancel = K, C.flush = Q, C
    }

    function S(e) {
        var t = typeof e;
        return !!e && (t == "object" || t == "function")
    }

    function P(e) {
        return !!e && typeof e == "object"
    }

    function H(e) {
        return typeof e == "symbol" || P(e) && z.call(e) == a
    }

    function A(e) {
        if (typeof e == "number") return e;
        if (H(e)) return r;
        if (S(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = S(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = e.replace(o, "");
        var f = g.test(e);
        return f || j.test(e) ? T(e.slice(2), f ? 2 : 8) : c.test(e) ? r : +e
    }
    return R = G, R
}
var ee = w();
const ne = Y(ee);

function re(i, r, a) {
    var o = l.useCallback(function(g) {
            return ne(g, r, a)
        }, [r, a]),
        c = l.useRef(o(i));
    return l.useEffect(function() {
        c.current = o(i)
    }, [i, o]), c.current
}

function te(i, r) {
    var a = l.useRef(!1);
    typeof r < "u" && !Array.isArray(r) ? r = [r] : Array.isArray(r) && r.length === 0 && console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0."), l.useEffect(function() {
        a.current ? i() : a.current = !0
    }, r), l.useEffect(function() {
        return function() {
            a.current = !1
        }
    }, [])
}
var ie = {
        initializeWithNull: !1
    },
    ue = function(i, r, a) {
        a === void 0 && (a = {});
        var o = Object.assign({}, ie, a).initializeWithNull,
            c = l.useState(o ? null : i),
            g = c[0],
            j = c[1],
            T = re(j, r);
        return Z(function() {
            o && T(i)
        }), te(function() {
            T(i)
        }, [i]), [g, j]
    };
export {
    te as a, ue as u
};