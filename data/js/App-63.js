import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    O as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    n as i,
    t as a
} from "./dist-2.js";
import {
    r as o
} from "./SixteenByNineScaler.js";
import {
    t as s
} from "./jsx-runtime.js";
import {
    l as c,
    s as l
} from "./_index.js";
import {
    t as u
} from "./GetAssetPath.js";
import {
    n as d
} from "./Button-2.js";
import {
    t as f
} from "./motion.js";
import {
    t as p
} from "./zIndex.js";
import {
    L as m,
    dt as h,
    ot as g,
    ut as _,
    z as v
} from "./App-42.js";
import {
    t as y
} from "./StopPropagation.js";
import {
    t as b
} from "./LoadGoogleFontAfterSceneStart.js";
var x = t(((e, t) => {
        a(), (function(n, i) {
            typeof e == `object` && typeof t == `object` ? t.exports = i(r()) : typeof define == `function` && define.amd ? define(`Typewriter`, [`react`], i) : typeof e == `object` ? e.Typewriter = i(r()) : n.Typewriter = i(n.react)
        })(typeof self < `u` ? self : e, (e => (() => {
            var t = {
                    2: (e, t, n) => {
                        var r = n(2199),
                            i = n(4664),
                            a = n(5950);
                        e.exports = function(e) {
                            return r(e, a, i)
                        }
                    },
                    79: (e, t, n) => {
                        var r = n(3702),
                            i = n(80),
                            a = n(4739),
                            o = n(8655),
                            s = n(1175);

                        function c(e) {
                            var t = -1,
                                n = e == null ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
                    },
                    80: (e, t, n) => {
                        var r = n(6025),
                            i = Array.prototype.splice;
                        e.exports = function(e) {
                            var t = this.__data__,
                                n = r(t, e);
                            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
                        }
                    },
                    270: (e, t, n) => {
                        var r = n(7068),
                            i = n(346);
                        e.exports = function e(t, n, a, o, s) {
                            return t === n || (t == null || n == null || !i(t) && !i(n) ? t != t && n != n : r(t, n, a, o, e, s))
                        }
                    },
                    289: (e, t, n) => {
                        var r = n(2651);
                        e.exports = function(e) {
                            return r(this, e).get(e)
                        }
                    },
                    294: e => {
                        e.exports = function(e) {
                            return typeof e == `number` && e > -1 && e % 1 == 0 && e <= 9007199254740991
                        }
                    },
                    317: e => {
                        e.exports = function(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach((function(e, r) {
                                n[++t] = [r, e]
                            })), n
                        }
                    },
                    346: e => {
                        e.exports = function(e) {
                            return typeof e == `object` && !!e
                        }
                    },
                    361: e => {
                        var t = /^(?:0|[1-9]\d*)$/;
                        e.exports = function(e, n) {
                            var r = typeof e;
                            return !!(n = n ?? 9007199254740991) && (r == `number` || r != `symbol` && t.test(e)) && e > -1 && e % 1 == 0 && e < n
                        }
                    },
                    392: e => {
                        e.exports = function(e, t) {
                            return e == null ? void 0 : e[t]
                        }
                    },
                    659: (e, t, n) => {
                        var r = n(1873),
                            i = Object.prototype,
                            a = i.hasOwnProperty,
                            o = i.toString,
                            s = r ? r.toStringTag : void 0;
                        e.exports = function(e) {
                            var t = a.call(e, s),
                                n = e[s];
                            try {
                                e[s] = void 0;
                                var r = !0
                            } catch {}
                            var i = o.call(e);
                            return r && (t ? e[s] = n : delete e[s]), i
                        }
                    },
                    689: (e, t, n) => {
                        var r = n(2),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(e, t, n, a, o, s) {
                            var c = 1 & n,
                                l = r(e),
                                u = l.length;
                            if (u != r(t).length && !c) return !1;
                            for (var d = u; d--;) {
                                var f = l[d];
                                if (!(c ? f in t : i.call(t, f))) return !1
                            }
                            var p = s.get(e),
                                m = s.get(t);
                            if (p && m) return p == t && m == e;
                            var h = !0;
                            s.set(e, t), s.set(t, e);
                            for (var g = c; ++d < u;) {
                                var _ = e[f = l[d]],
                                    v = t[f];
                                if (a) var y = c ? a(v, _, f, t, e, s) : a(_, v, f, e, t, s);
                                if (!(y === void 0 ? _ === v || o(_, v, n, a, s) : y)) {
                                    h = !1;
                                    break
                                }
                                g || (g = f == `constructor`)
                            }
                            if (h && !g) {
                                var b = e.constructor,
                                    x = t.constructor;
                                b == x || !(`constructor` in e) || !(`constructor` in t) || typeof b == `function` && b instanceof b && typeof x == `function` && x instanceof x || (h = !1)
                            }
                            return s.delete(e), s.delete(t), h
                        }
                    },
                    695: (e, t, n) => {
                        var r = n(8096),
                            i = n(2428),
                            a = n(6449),
                            o = n(3656),
                            s = n(361),
                            c = n(7167),
                            l = Object.prototype.hasOwnProperty;
                        e.exports = function(e, t) {
                            var n = a(e),
                                u = !n && i(e),
                                d = !n && !u && o(e),
                                f = !n && !u && !d && c(e),
                                p = n || u || d || f,
                                m = p ? r(e.length, String) : [],
                                h = m.length;
                            for (var g in e) !t && !l.call(e, g) || p && (g == `length` || d && (g == `offset` || g == `parent`) || f && (g == `buffer` || g == `byteLength` || g == `byteOffset`) || s(g, h)) || m.push(g);
                            return m
                        }
                    },
                    938: e => {
                        e.exports = function(e) {
                            var t = this.__data__,
                                n = t.delete(e);
                            return this.size = t.size, n
                        }
                    },
                    945: (e, t, n) => {
                        var r = n(79),
                            i = n(8223),
                            a = n(3661);
                        e.exports = function(e, t) {
                            var n = this.__data__;
                            if (n instanceof r) {
                                var o = n.__data__;
                                if (!i || o.length < 199) return o.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new a(o)
                            }
                            return n.set(e, t), this.size = n.size, this
                        }
                    },
                    1042: (e, t, n) => {
                        e.exports = n(6110)(Object, `create`)
                    },
                    1175: (e, t, n) => {
                        var r = n(6025);
                        e.exports = function(e, t) {
                            var n = this.__data__,
                                i = r(n, e);
                            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
                        }
                    },
                    1380: e => {
                        e.exports = function(e) {
                            return this.__data__.set(e, `__lodash_hash_undefined__`), this
                        }
                    },
                    1420: (e, t, n) => {
                        var r = n(79);
                        e.exports = function() {
                            this.__data__ = new r, this.size = 0
                        }
                    },
                    1459: e => {
                        e.exports = function(e) {
                            return this.__data__.has(e)
                        }
                    },
                    1549: (e, t, n) => {
                        var r = n(2032),
                            i = n(3862),
                            a = n(6721),
                            o = n(2749),
                            s = n(5749);

                        function c(e) {
                            var t = -1,
                                n = e == null ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
                    },
                    1873: (e, t, n) => {
                        e.exports = n(9325).Symbol
                    },
                    1882: (e, t, n) => {
                        var r = n(2552),
                            i = n(3805);
                        e.exports = function(e) {
                            if (!i(e)) return !1;
                            var t = r(e);
                            return t == `[object Function]` || t == `[object GeneratorFunction]` || t == `[object AsyncFunction]` || t == `[object Proxy]`
                        }
                    },
                    1986: (e, t, n) => {
                        var r = n(1873),
                            i = n(7828),
                            a = n(5288),
                            o = n(5911),
                            s = n(317),
                            c = n(4247),
                            l = r ? r.prototype : void 0,
                            u = l ? l.valueOf : void 0;
                        e.exports = function(e, t, n, r, l, d, f) {
                            switch (n) {
                                case `[object DataView]`:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case `[object ArrayBuffer]`:
                                    return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
                                case `[object Boolean]`:
                                case `[object Date]`:
                                case `[object Number]`:
                                    return a(+e, +t);
                                case `[object Error]`:
                                    return e.name == t.name && e.message == t.message;
                                case `[object RegExp]`:
                                case `[object String]`:
                                    return e == t + ``;
                                case `[object Map]`:
                                    var p = s;
                                case `[object Set]`:
                                    var m = 1 & r;
                                    if (p || (p = c), e.size != t.size && !m) return !1;
                                    var h = f.get(e);
                                    if (h) return h == t;
                                    r |= 2, f.set(e, t);
                                    var g = o(p(e), p(t), r, l, d, f);
                                    return f.delete(e), g;
                                case `[object Symbol]`:
                                    if (u) return u.call(e) == u.call(t)
                            }
                            return !1
                        }
                    },
                    2032: (e, t, n) => {
                        var r = n(1042);
                        e.exports = function() {
                            this.__data__ = r ? r(null) : {}, this.size = 0
                        }
                    },
                    2199: (e, t, n) => {
                        var r = n(4528),
                            i = n(6449);
                        e.exports = function(e, t, n) {
                            var a = t(e);
                            return i(e) ? a : r(a, n(e))
                        }
                    },
                    2404: (e, t, n) => {
                        var r = n(270);
                        e.exports = function(e, t) {
                            return r(e, t)
                        }
                    },
                    2428: (e, t, n) => {
                        var r = n(7534),
                            i = n(346),
                            a = Object.prototype,
                            o = a.hasOwnProperty,
                            s = a.propertyIsEnumerable;
                        e.exports = r(function() {
                            return arguments
                        }()) ? r : function(e) {
                            return i(e) && o.call(e, `callee`) && !s.call(e, `callee`)
                        }
                    },
                    2552: (e, t, n) => {
                        var r = n(1873),
                            i = n(659),
                            a = n(9350),
                            o = r ? r.toStringTag : void 0;
                        e.exports = function(e) {
                            return e == null ? e === void 0 ? `[object Undefined]` : `[object Null]` : o && o in Object(e) ? i(e) : a(e)
                        }
                    },
                    2651: (e, t, n) => {
                        var r = n(4218);
                        e.exports = function(e, t) {
                            var n = e.__data__;
                            return r(t) ? n[typeof t == `string` ? `string` : `hash`] : n.map
                        }
                    },
                    2749: (e, t, n) => {
                        var r = n(1042),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(e) {
                            var t = this.__data__;
                            return r ? t[e] !== void 0 : i.call(t, e)
                        }
                    },
                    2804: (e, t, n) => {
                        e.exports = n(6110)(n(9325), `Promise`)
                    },
                    2949: (e, t, n) => {
                        var r = n(2651);
                        e.exports = function(e, t) {
                            var n = r(this, e),
                                i = n.size;
                            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
                        }
                    },
                    3040: (e, t, n) => {
                        var r = n(1549),
                            i = n(79),
                            a = n(8223);
                        e.exports = function() {
                            this.size = 0, this.__data__ = {
                                hash: new r,
                                map: new(a || i),
                                string: new r
                            }
                        }
                    },
                    3146: (e, t, n) => {
                        for (var r = n(3491), i = typeof window > `u` ? n.g : window, a = [`moz`, `webkit`], o = `AnimationFrame`, s = i[`request` + o], c = i[`cancel` + o] || i[`cancelRequest` + o], l = 0; !s && l < a.length; l++) s = i[a[l] + `Request` + o], c = i[a[l] + `Cancel` + o] || i[a[l] + `CancelRequest` + o];
                        if (!s || !c) {
                            var u = 0,
                                d = 0,
                                f = [],
                                p = 1e3 / 60;
                            s = function(e) {
                                if (f.length === 0) {
                                    var t = r(),
                                        n = Math.max(0, p - (t - u));
                                    u = n + t, setTimeout((function() {
                                        var e = f.slice(0);
                                        f.length = 0;
                                        for (var t = 0; t < e.length; t++)
                                            if (!e[t].cancelled) try {
                                                e[t].callback(u)
                                            } catch (e) {
                                                setTimeout((function() {
                                                    throw e
                                                }), 0)
                                            }
                                    }), Math.round(n))
                                }
                                return f.push({
                                    handle: ++d,
                                    callback: e,
                                    cancelled: !1
                                }), d
                            }, c = function(e) {
                                for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
                            }
                        }
                        e.exports = function(e) {
                            return s.call(i, e)
                        }, e.exports.cancel = function() {
                            c.apply(i, arguments)
                        }, e.exports.polyfill = function(e) {
                            e || (e = i), e.requestAnimationFrame = s, e.cancelAnimationFrame = c
                        }
                    },
                    3345: e => {
                        e.exports = function() {
                            return []
                        }
                    },
                    3491: function(e) {
                        (function() {
                            var t, n, r, a, o, s;
                            typeof performance < `u` && performance !== null && performance.now ? e.exports = function() {
                                return performance.now()
                            } : i != null && i.hrtime ? (e.exports = function() {
                                return (t() - o) / 1e6
                            }, n = i.hrtime, a = (t = function() {
                                var e;
                                return 1e9 * (e = n())[0] + e[1]
                            })(), s = 1e9 * i.uptime(), o = a - s) : Date.now ? (e.exports = function() {
                                return Date.now() - r
                            }, r = Date.now()) : (e.exports = function() {
                                return new Date().getTime() - r
                            }, r = new Date().getTime())
                        }).call(this)
                    },
                    3605: e => {
                        e.exports = function(e) {
                            return this.__data__.get(e)
                        }
                    },
                    3650: (e, t, n) => {
                        e.exports = n(4335)(Object.keys, Object)
                    },
                    3656: (e, t, n) => {
                        e = n.nmd(e);
                        var r = n(9325),
                            i = n(9935),
                            a = t && !t.nodeType && t,
                            o = a && e && !e.nodeType && e,
                            s = o && o.exports === a ? r.Buffer : void 0,
                            c = (s ? s.isBuffer : void 0) || i;
                        e.exports = c
                    },
                    3661: (e, t, n) => {
                        var r = n(3040),
                            i = n(7670),
                            a = n(289),
                            o = n(4509),
                            s = n(2949);

                        function c(e) {
                            var t = -1,
                                n = e == null ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
                    },
                    3702: e => {
                        e.exports = function() {
                            this.__data__ = [], this.size = 0
                        }
                    },
                    3805: e => {
                        e.exports = function(e) {
                            var t = typeof e;
                            return e != null && (t == `object` || t == `function`)
                        }
                    },
                    3862: e => {
                        e.exports = function(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= +!!t, t
                        }
                    },
                    4218: e => {
                        e.exports = function(e) {
                            var t = typeof e;
                            return t == `string` || t == `number` || t == `symbol` || t == `boolean` ? e !== `__proto__` : e === null
                        }
                    },
                    4247: e => {
                        e.exports = function(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach((function(e) {
                                n[++t] = e
                            })), n
                        }
                    },
                    4248: e => {
                        e.exports = function(e, t) {
                            for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
                                if (t(e[n], n, e)) return !0;
                            return !1
                        }
                    },
                    4335: e => {
                        e.exports = function(e, t) {
                            return function(n) {
                                return e(t(n))
                            }
                        }
                    },
                    4509: (e, t, n) => {
                        var r = n(2651);
                        e.exports = function(e) {
                            return r(this, e).has(e)
                        }
                    },
                    4528: e => {
                        e.exports = function(e, t) {
                            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                            return e
                        }
                    },
                    4664: (e, t, n) => {
                        var r = n(9770),
                            i = n(3345),
                            a = Object.prototype.propertyIsEnumerable,
                            o = Object.getOwnPropertySymbols;
                        e.exports = o ? function(e) {
                            return e == null ? [] : (e = Object(e), r(o(e), (function(t) {
                                return a.call(e, t)
                            })))
                        } : i
                    },
                    4739: (e, t, n) => {
                        var r = n(6025);
                        e.exports = function(e) {
                            var t = this.__data__,
                                n = r(t, e);
                            return n < 0 ? void 0 : t[n][1]
                        }
                    },
                    4840: (e, t, n) => {
                        e.exports = typeof n.g == `object` && n.g && n.g.Object === Object && n.g
                    },
                    4894: (e, t, n) => {
                        var r = n(1882),
                            i = n(294);
                        e.exports = function(e) {
                            return e != null && i(e.length) && !r(e)
                        }
                    },
                    4901: (e, t, n) => {
                        var r = n(2552),
                            i = n(294),
                            a = n(346),
                            o = {};
                        o[`[object Float32Array]`] = o[`[object Float64Array]`] = o[`[object Int8Array]`] = o[`[object Int16Array]`] = o[`[object Int32Array]`] = o[`[object Uint8Array]`] = o[`[object Uint8ClampedArray]`] = o[`[object Uint16Array]`] = o[`[object Uint32Array]`] = !0, o[`[object Arguments]`] = o[`[object Array]`] = o[`[object ArrayBuffer]`] = o[`[object Boolean]`] = o[`[object DataView]`] = o[`[object Date]`] = o[`[object Error]`] = o[`[object Function]`] = o[`[object Map]`] = o[`[object Number]`] = o[`[object Object]`] = o[`[object RegExp]`] = o[`[object Set]`] = o[`[object String]`] = o[`[object WeakMap]`] = !1, e.exports = function(e) {
                            return a(e) && i(e.length) && !!o[r(e)]
                        }
                    },
                    5083: (e, t, n) => {
                        var r = n(1882),
                            i = n(7296),
                            a = n(3805),
                            o = n(7473),
                            s = /^\[object .+?Constructor\]$/,
                            c = Function.prototype,
                            l = Object.prototype,
                            u = c.toString,
                            d = l.hasOwnProperty,
                            f = RegExp(`^` + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
                        e.exports = function(e) {
                            return !(!a(e) || i(e)) && (r(e) ? f : s).test(o(e))
                        }
                    },
                    5288: e => {
                        e.exports = function(e, t) {
                            return e === t || e != e && t != t
                        }
                    },
                    5481: (e, t, n) => {
                        e.exports = n(9325)[`__core-js_shared__`]
                    },
                    5527: e => {
                        var t = Object.prototype;
                        e.exports = function(e) {
                            var n = e && e.constructor;
                            return e === (typeof n == `function` && n.prototype || t)
                        }
                    },
                    5580: (e, t, n) => {
                        e.exports = n(6110)(n(9325), `DataView`)
                    },
                    5749: (e, t, n) => {
                        var r = n(1042);
                        e.exports = function(e, t) {
                            var n = this.__data__;
                            return this.size += +!this.has(e), n[e] = r && t === void 0 ? `__lodash_hash_undefined__` : t, this
                        }
                    },
                    5861: (e, t, n) => {
                        var r = n(5580),
                            i = n(8223),
                            a = n(2804),
                            o = n(6545),
                            s = n(8303),
                            c = n(2552),
                            l = n(7473),
                            u = `[object Map]`,
                            d = `[object Promise]`,
                            f = `[object Set]`,
                            p = `[object WeakMap]`,
                            m = `[object DataView]`,
                            h = l(r),
                            g = l(i),
                            _ = l(a),
                            v = l(o),
                            y = l(s),
                            b = c;
                        (r && b(new r(new ArrayBuffer(1))) != m || i && b(new i) != u || a && b(a.resolve()) != d || o && b(new o) != f || s && b(new s) != p) && (b = function(e) {
                            var t = c(e),
                                n = t == `[object Object]` ? e.constructor : void 0,
                                r = n ? l(n) : ``;
                            if (r) switch (r) {
                                case h:
                                    return m;
                                case g:
                                    return u;
                                case _:
                                    return d;
                                case v:
                                    return f;
                                case y:
                                    return p
                            }
                            return t
                        }), e.exports = b
                    },
                    5911: (e, t, n) => {
                        var r = n(8859),
                            i = n(4248),
                            a = n(9219);
                        e.exports = function(e, t, n, o, s, c) {
                            var l = 1 & n,
                                u = e.length,
                                d = t.length;
                            if (u != d && !(l && d > u)) return !1;
                            var f = c.get(e),
                                p = c.get(t);
                            if (f && p) return f == t && p == e;
                            var m = -1,
                                h = !0,
                                g = 2 & n ? new r : void 0;
                            for (c.set(e, t), c.set(t, e); ++m < u;) {
                                var _ = e[m],
                                    v = t[m];
                                if (o) var y = l ? o(v, _, m, t, e, c) : o(_, v, m, e, t, c);
                                if (y !== void 0) {
                                    if (y) continue;
                                    h = !1;
                                    break
                                }
                                if (g) {
                                    if (!i(t, (function(e, t) {
                                            if (!a(g, t) && (_ === e || s(_, e, n, o, c))) return g.push(t)
                                        }))) {
                                        h = !1;
                                        break
                                    }
                                } else if (_ !== v && !s(_, v, n, o, c)) {
                                    h = !1;
                                    break
                                }
                            }
                            return c.delete(e), c.delete(t), h
                        }
                    },
                    5950: (e, t, n) => {
                        var r = n(695),
                            i = n(8984),
                            a = n(4894);
                        e.exports = function(e) {
                            return a(e) ? r(e) : i(e)
                        }
                    },
                    6009: (e, t, n) => {
                        e = n.nmd(e);
                        var r = n(4840),
                            i = t && !t.nodeType && t,
                            a = i && e && !e.nodeType && e,
                            o = a && a.exports === i && r.process,
                            s = function() {
                                try {
                                    return a && a.require && a.require(`util`).types || o && o.binding && o.binding(`util`)
                                } catch {}
                            }();
                        e.exports = s
                    },
                    6025: (e, t, n) => {
                        var r = n(5288);
                        e.exports = function(e, t) {
                            for (var n = e.length; n--;)
                                if (r(e[n][0], t)) return n;
                            return -1
                        }
                    },
                    6110: (e, t, n) => {
                        var r = n(5083),
                            i = n(392);
                        e.exports = function(e, t) {
                            var n = i(e, t);
                            return r(n) ? n : void 0
                        }
                    },
                    6449: e => {
                        e.exports = Array.isArray
                    },
                    6545: (e, t, n) => {
                        e.exports = n(6110)(n(9325), `Set`)
                    },
                    6721: (e, t, n) => {
                        var r = n(1042),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(e) {
                            var t = this.__data__;
                            if (r) {
                                var n = t[e];
                                return n === `__lodash_hash_undefined__` ? void 0 : n
                            }
                            return i.call(t, e) ? t[e] : void 0
                        }
                    },
                    7068: (e, t, n) => {
                        var r = n(7217),
                            i = n(5911),
                            a = n(1986),
                            o = n(689),
                            s = n(5861),
                            c = n(6449),
                            l = n(3656),
                            u = n(7167),
                            d = `[object Arguments]`,
                            f = `[object Array]`,
                            p = `[object Object]`,
                            m = Object.prototype.hasOwnProperty;
                        e.exports = function(e, t, n, h, g, _) {
                            var v = c(e),
                                y = c(t),
                                b = v ? f : s(e),
                                x = y ? f : s(t),
                                S = (b = b == d ? p : b) == p,
                                C = (x = x == d ? p : x) == p,
                                w = b == x;
                            if (w && l(e)) {
                                if (!l(t)) return !1;
                                v = !0, S = !1
                            }
                            if (w && !S) return _ || (_ = new r), v || u(e) ? i(e, t, n, h, g, _) : a(e, t, b, n, h, g, _);
                            if (!(1 & n)) {
                                var T = S && m.call(e, `__wrapped__`),
                                    E = C && m.call(t, `__wrapped__`);
                                if (T || E) {
                                    var D = T ? e.value() : e,
                                        O = E ? t.value() : t;
                                    return _ || (_ = new r), g(D, O, n, h, _)
                                }
                            }
                            return !!w && (_ || (_ = new r), o(e, t, n, h, g, _))
                        }
                    },
                    7167: (e, t, n) => {
                        var r = n(4901),
                            i = n(7301),
                            a = n(6009),
                            o = a && a.isTypedArray;
                        e.exports = o ? i(o) : r
                    },
                    7217: (e, t, n) => {
                        var r = n(79),
                            i = n(1420),
                            a = n(938),
                            o = n(3605),
                            s = n(9817),
                            c = n(945);

                        function l(e) {
                            var t = this.__data__ = new r(e);
                            this.size = t.size
                        }
                        l.prototype.clear = i, l.prototype.delete = a, l.prototype.get = o, l.prototype.has = s, l.prototype.set = c, e.exports = l
                    },
                    7296: (e, t, n) => {
                        var r, i = n(5481),
                            a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || ``)) ? `Symbol(src)_1.` + r : ``;
                        e.exports = function(e) {
                            return !!a && a in e
                        }
                    },
                    7301: e => {
                        e.exports = function(e) {
                            return function(t) {
                                return e(t)
                            }
                        }
                    },
                    7473: e => {
                        var t = Function.prototype.toString;
                        e.exports = function(e) {
                            if (e != null) {
                                try {
                                    return t.call(e)
                                } catch {}
                                try {
                                    return e + ``
                                } catch {}
                            }
                            return ``
                        }
                    },
                    7534: (e, t, n) => {
                        var r = n(2552),
                            i = n(346);
                        e.exports = function(e) {
                            return i(e) && r(e) == `[object Arguments]`
                        }
                    },
                    7670: (e, t, n) => {
                        var r = n(2651);
                        e.exports = function(e) {
                            var t = r(this, e).delete(e);
                            return this.size -= +!!t, t
                        }
                    },
                    7828: (e, t, n) => {
                        e.exports = n(9325).Uint8Array
                    },
                    8096: e => {
                        e.exports = function(e, t) {
                            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                            return r
                        }
                    },
                    8223: (e, t, n) => {
                        e.exports = n(6110)(n(9325), `Map`)
                    },
                    8303: (e, t, n) => {
                        e.exports = n(6110)(n(9325), `WeakMap`)
                    },
                    8655: (e, t, n) => {
                        var r = n(6025);
                        e.exports = function(e) {
                            return r(this.__data__, e) > -1
                        }
                    },
                    8859: (e, t, n) => {
                        var r = n(3661),
                            i = n(1380),
                            a = n(1459);

                        function o(e) {
                            var t = -1,
                                n = e == null ? 0 : e.length;
                            for (this.__data__ = new r; ++t < n;) this.add(e[t])
                        }
                        o.prototype.add = o.prototype.push = i, o.prototype.has = a, e.exports = o
                    },
                    8984: (e, t, n) => {
                        var r = n(5527),
                            i = n(3650),
                            a = Object.prototype.hasOwnProperty;
                        e.exports = function(e) {
                            if (!r(e)) return i(e);
                            var t = [];
                            for (var n in Object(e)) a.call(e, n) && n != `constructor` && t.push(n);
                            return t
                        }
                    },
                    9155: t => {
                        t.exports = e
                    },
                    9219: e => {
                        e.exports = function(e, t) {
                            return e.has(t)
                        }
                    },
                    9325: (e, t, n) => {
                        var r = n(4840),
                            i = typeof self == `object` && self && self.Object === Object && self;
                        e.exports = r || i || Function(`return this`)()
                    },
                    9350: e => {
                        var t = Object.prototype.toString;
                        e.exports = function(e) {
                            return t.call(e)
                        }
                    },
                    9770: e => {
                        e.exports = function(e, t) {
                            for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
                                var o = e[n];
                                t(o, n, e) && (a[i++] = o)
                            }
                            return a
                        }
                    },
                    9817: e => {
                        e.exports = function(e) {
                            return this.__data__.has(e)
                        }
                    },
                    9905: (e, t, n) => {
                        n.d(t, {
                            default: () => D
                        });
                        var r = n(3146),
                            i = n.n(r);
                        let a = function(e) {
                                return new RegExp(/<[a-z][\s\S]*>/i).test(e)
                            },
                            o = function(e, t) {
                                return Math.floor(Math.random() * (t - e + 1)) + e
                            };
                        var s = `TYPE_CHARACTER`,
                            c = `REMOVE_CHARACTER`,
                            l = `REMOVE_ALL`,
                            u = `REMOVE_LAST_VISIBLE_NODE`,
                            d = `PAUSE_FOR`,
                            f = `CALL_FUNCTION`,
                            p = `ADD_HTML_TAG_ELEMENT`,
                            m = `CHANGE_DELETE_SPEED`,
                            h = `CHANGE_DELAY`,
                            g = `CHANGE_CURSOR`,
                            _ = `PASTE_STRING`,
                            v = `HTML_TAG`;

                        function y(e) {
                            return y = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
                            }, y(e)
                        }

                        function b(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                t && (r = r.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), n.push.apply(n, r)
                            }
                            return n
                        }

                        function x(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t] == null ? {} : arguments[t];
                                t % 2 ? b(Object(n), !0).forEach((function(t) {
                                    T(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }

                        function S(e) {
                            return function(e) {
                                if (Array.isArray(e)) return C(e)
                            }(e) || function(e) {
                                if (typeof Symbol < `u` && e[Symbol.iterator] != null || e[`@@iterator`] != null) return Array.from(e)
                            }(e) || function(e, t) {
                                if (e) {
                                    if (typeof e == `string`) return C(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
                                }
                            }(e) || function() {
                                throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                            }()
                        }

                        function C(e, t) {
                            (t == null || t > e.length) && (t = e.length);
                            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                            return r
                        }

                        function w(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, E(r.key), r)
                            }
                        }

                        function T(e, t, n) {
                            return (t = E(t)) in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e
                        }

                        function E(e) {
                            var t = function(e) {
                                if (y(e) != `object` || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (t !== void 0) {
                                    var n = t.call(e, `string`);
                                    if (y(n) != `object`) return n;
                                    throw TypeError(`@@toPrimitive must return a primitive value.`)
                                }
                                return String(e)
                            }(e);
                            return y(t) == `symbol` ? t : t + ``
                        }
                        let D = function() {
                            function e(t, n) {
                                var y = this;
                                if (function(e, t) {
                                        if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
                                    }(this, e), T(this, `state`, {
                                        cursorAnimation: null,
                                        lastFrameTime: null,
                                        pauseUntil: null,
                                        eventQueue: [],
                                        eventLoop: null,
                                        eventLoopPaused: !1,
                                        reverseCalledEvents: [],
                                        calledEvents: [],
                                        visibleNodes: [],
                                        initialOptions: null,
                                        elements: {
                                            container: null,
                                            wrapper: document.createElement(`span`),
                                            cursor: document.createElement(`span`)
                                        }
                                    }), T(this, `options`, {
                                        strings: null,
                                        cursor: `|`,
                                        delay: `natural`,
                                        pauseFor: 1500,
                                        deleteSpeed: `natural`,
                                        loop: !1,
                                        autoStart: !1,
                                        devMode: !1,
                                        skipAddStyles: !1,
                                        wrapperClassName: `Typewriter__wrapper`,
                                        cursorClassName: `Typewriter__cursor`,
                                        stringSplitter: null,
                                        onCreateTextNode: null,
                                        onRemoveNode: null
                                    }), T(this, `setupWrapperElement`, (function() {
                                        y.state.elements.container && (y.state.elements.wrapper.className = y.options.wrapperClassName, y.state.elements.cursor.className = y.options.cursorClassName, y.state.elements.cursor.innerHTML = y.options.cursor, y.state.elements.container.innerHTML = ``, y.state.elements.container.appendChild(y.state.elements.wrapper), y.state.elements.container.appendChild(y.state.elements.cursor))
                                    })), T(this, `start`, (function() {
                                        return y.state.eventLoopPaused = !1, y.runEventLoop(), y
                                    })), T(this, `pause`, (function() {
                                        return y.state.eventLoopPaused = !0, y
                                    })), T(this, `stop`, (function() {
                                        return y.state.eventLoop && ((0, r.cancel)(y.state.eventLoop), y.state.eventLoop = null), y
                                    })), T(this, `pauseFor`, (function(e) {
                                        return y.addEventToQueue(d, {
                                            ms: e
                                        }), y
                                    })), T(this, `typeOutAllStrings`, (function() {
                                        return typeof y.options.strings == `string` ? (y.typeString(y.options.strings).pauseFor(y.options.pauseFor), y) : (y.options.strings.forEach((function(e) {
                                            y.typeString(e).pauseFor(y.options.pauseFor).deleteAll(y.options.deleteSpeed)
                                        })), y)
                                    })), T(this, `typeString`, (function(e) {
                                        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        if (a(e)) return y.typeOutHTMLString(e, t);
                                        if (e) {
                                            var n = (y.options || {}).stringSplitter,
                                                r = typeof n == `function` ? n(e) : e.split(``);
                                            y.typeCharacters(r, t)
                                        }
                                        return y
                                    })), T(this, `pasteString`, (function(e) {
                                        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        return a(e) ? y.typeOutHTMLString(e, t, !0) : (e && y.addEventToQueue(_, {
                                            character: e,
                                            node: t
                                        }), y)
                                    })), T(this, `typeOutHTMLString`, (function(e) {
                                        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                                            n = arguments.length > 2 ? arguments[2] : void 0,
                                            r = function(e) {
                                                var t = document.createElement(`div`);
                                                return t.innerHTML = e, t.childNodes
                                            }(e);
                                        if (r.length > 0)
                                            for (var i = 0; i < r.length; i++) {
                                                var a = r[i],
                                                    o = a.innerHTML;
                                                a && a.nodeType !== 3 ? (a.innerHTML = ``, y.addEventToQueue(p, {
                                                    node: a,
                                                    parentNode: t
                                                }), n ? y.pasteString(o, a) : y.typeString(o, a)) : a.textContent && (n ? y.pasteString(a.textContent, t) : y.typeString(a.textContent, t))
                                            }
                                        return y
                                    })), T(this, `deleteAll`, (function() {
                                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : `natural`;
                                        return y.addEventToQueue(l, {
                                            speed: e
                                        }), y
                                    })), T(this, `changeDeleteSpeed`, (function(e) {
                                        if (!e) throw Error(`Must provide new delete speed`);
                                        return y.addEventToQueue(m, {
                                            speed: e
                                        }), y
                                    })), T(this, `changeDelay`, (function(e) {
                                        if (!e) throw Error(`Must provide new delay`);
                                        return y.addEventToQueue(h, {
                                            delay: e
                                        }), y
                                    })), T(this, `changeCursor`, (function(e) {
                                        if (!e) throw Error(`Must provide new cursor`);
                                        return y.addEventToQueue(g, {
                                            cursor: e
                                        }), y
                                    })), T(this, `deleteChars`, (function(e) {
                                        if (!e) throw Error(`Must provide amount of characters to delete`);
                                        for (var t = 0; t < e; t++) y.addEventToQueue(c);
                                        return y
                                    })), T(this, `callFunction`, (function(e, t) {
                                        if (!e || typeof e != `function`) throw Error(`Callback must be a function`);
                                        return y.addEventToQueue(f, {
                                            cb: e,
                                            thisArg: t
                                        }), y
                                    })), T(this, `typeCharacters`, (function(e) {
                                        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        if (!e || !Array.isArray(e)) throw Error(`Characters must be an array`);
                                        return e.forEach((function(e) {
                                            y.addEventToQueue(s, {
                                                character: e,
                                                node: t
                                            })
                                        })), y
                                    })), T(this, `removeCharacters`, (function(e) {
                                        if (!e || !Array.isArray(e)) throw Error(`Characters must be an array`);
                                        return e.forEach((function() {
                                            y.addEventToQueue(c)
                                        })), y
                                    })), T(this, `addEventToQueue`, (function(e, t) {
                                        var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                                        return y.addEventToStateProperty(e, t, n, `eventQueue`)
                                    })), T(this, `addReverseCalledEvent`, (function(e, t) {
                                        var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                                        return y.options.loop ? y.addEventToStateProperty(e, t, n, `reverseCalledEvents`) : y
                                    })), T(this, `addEventToStateProperty`, (function(e, t) {
                                        var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                                            r = arguments.length > 3 ? arguments[3] : void 0,
                                            i = {
                                                eventName: e,
                                                eventArgs: t || {}
                                            };
                                        return y.state[r] = n ? [i].concat(S(y.state[r])) : [].concat(S(y.state[r]), [i]), y
                                    })), T(this, `runEventLoop`, (function() {
                                        y.state.lastFrameTime || (y.state.lastFrameTime = Date.now());
                                        var e = Date.now(),
                                            t = e - y.state.lastFrameTime;
                                        if (!y.state.eventQueue.length) {
                                            if (!y.options.loop) return;
                                            y.state.eventQueue = S(y.state.calledEvents), y.state.calledEvents = [], y.options = x({}, y.state.initialOptions)
                                        }
                                        if (y.state.eventLoop = i()(y.runEventLoop), !y.state.eventLoopPaused) {
                                            if (y.state.pauseUntil) {
                                                if (e < y.state.pauseUntil) return;
                                                y.state.pauseUntil = null
                                            }
                                            var n, r = S(y.state.eventQueue),
                                                a = r.shift();
                                            if (!(t <= (n = a.eventName === u || a.eventName === c ? y.options.deleteSpeed === `natural` ? o(40, 80) : y.options.deleteSpeed : y.options.delay === `natural` ? o(120, 160) : y.options.delay))) {
                                                var b = a.eventName,
                                                    C = a.eventArgs;
                                                switch (y.logInDevMode({
                                                        currentEvent: a,
                                                        state: y.state,
                                                        delay: n
                                                    }), b) {
                                                    case _:
                                                    case s:
                                                        var w = C.character,
                                                            T = C.node,
                                                            E = document.createTextNode(w),
                                                            D = E;
                                                        y.options.onCreateTextNode && typeof y.options.onCreateTextNode == `function` && (D = y.options.onCreateTextNode(w, E)), D && (T ? T.appendChild(D) : y.state.elements.wrapper.appendChild(D)), y.state.visibleNodes = [].concat(S(y.state.visibleNodes), [{
                                                            type: `TEXT_NODE`,
                                                            character: w,
                                                            node: D
                                                        }]);
                                                        break;
                                                    case c:
                                                        r.unshift({
                                                            eventName: u,
                                                            eventArgs: {
                                                                removingCharacterNode: !0
                                                            }
                                                        });
                                                        break;
                                                    case d:
                                                        var O = a.eventArgs.ms;
                                                        y.state.pauseUntil = Date.now() + parseInt(O);
                                                        break;
                                                    case f:
                                                        var k = a.eventArgs,
                                                            A = k.cb,
                                                            j = k.thisArg;
                                                        A.call(j, {
                                                            elements: y.state.elements
                                                        });
                                                        break;
                                                    case p:
                                                        var M = a.eventArgs,
                                                            N = M.node,
                                                            P = M.parentNode;
                                                        P ? P.appendChild(N) : y.state.elements.wrapper.appendChild(N), y.state.visibleNodes = [].concat(S(y.state.visibleNodes), [{
                                                            type: v,
                                                            node: N,
                                                            parentNode: P || y.state.elements.wrapper
                                                        }]);
                                                        break;
                                                    case l:
                                                        var F = y.state.visibleNodes,
                                                            I = C.speed,
                                                            L = [];
                                                        I && L.push({
                                                            eventName: m,
                                                            eventArgs: {
                                                                speed: I,
                                                                temp: !0
                                                            }
                                                        });
                                                        for (var R = 0, z = F.length; R < z; R++) L.push({
                                                            eventName: u,
                                                            eventArgs: {
                                                                removingCharacterNode: !1
                                                            }
                                                        });
                                                        I && L.push({
                                                            eventName: m,
                                                            eventArgs: {
                                                                speed: y.options.deleteSpeed,
                                                                temp: !0
                                                            }
                                                        }), r.unshift.apply(r, L);
                                                        break;
                                                    case u:
                                                        var B = a.eventArgs.removingCharacterNode;
                                                        if (y.state.visibleNodes.length) {
                                                            var V = y.state.visibleNodes.pop(),
                                                                H = V.type,
                                                                U = V.node,
                                                                W = V.character;
                                                            y.options.onRemoveNode && typeof y.options.onRemoveNode == `function` && y.options.onRemoveNode({
                                                                node: U,
                                                                character: W
                                                            }), U && U.parentNode.removeChild(U), H === v && B && r.unshift({
                                                                eventName: u,
                                                                eventArgs: {}
                                                            })
                                                        }
                                                        break;
                                                    case m:
                                                        y.options.deleteSpeed = a.eventArgs.speed;
                                                        break;
                                                    case h:
                                                        y.options.delay = a.eventArgs.delay;
                                                        break;
                                                    case g:
                                                        y.options.cursor = a.eventArgs.cursor, y.state.elements.cursor.innerHTML = a.eventArgs.cursor
                                                }
                                                y.options.loop && (a.eventName === u || a.eventArgs && a.eventArgs.temp || (y.state.calledEvents = [].concat(S(y.state.calledEvents), [a]))), y.state.eventQueue = r, y.state.lastFrameTime = e
                                            }
                                        }
                                    })), t) {
                                    if (typeof t == `string`) {
                                        var b = document.querySelector(t);
                                        if (!b) throw Error(`Could not find container element`);
                                        this.state.elements.container = b
                                    } else this.state.elements.container = t
                                }
                                n && (this.options = x(x({}, this.options), n)), this.state.initialOptions = x({}, this.options), this.init()
                            }
                            var t = e,
                                n;
                            return (n = [{
                                key: `init`,
                                value: function() {
                                    var e, t;
                                    this.setupWrapperElement(), this.addEventToQueue(g, {
                                        cursor: this.options.cursor
                                    }, !0), this.addEventToQueue(l, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = `.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}`, (t = document.createElement(`style`)).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                                }
                            }, {
                                key: `logInDevMode`,
                                value: function(e) {
                                    this.options.devMode && console.log(e)
                                }
                            }]) && w(t.prototype, n), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }()
                    },
                    9935: e => {
                        e.exports = function() {
                            return !1
                        }
                    }
                },
                n = {};

            function r(e) {
                var i = n[e];
                if (i !== void 0) return i.exports;
                var a = n[e] = {
                    id: e,
                    loaded: !1,
                    exports: {}
                };
                return t[e].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports
            }
            r.n = e => {
                var t = e && e.__esModule ? () => e.default : () => e;
                return r.d(t, {
                    a: t
                }), t
            }, r.d = (e, t) => {
                for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }, r.g = function() {
                if (typeof globalThis == `object`) return globalThis;
                try {
                    return this || Function(`return this`)()
                } catch {
                    if (typeof window == `object`) return window
                }
            }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.nmd = e => (e.paths = [], e.children || (e.children = []), e);
            var a = {};
            return (() => {
                r.d(a, {
                    default: () => h
                });
                var e = r(9155),
                    t = r.n(e),
                    n = r(9905),
                    i = r(2404),
                    o = r.n(i);

                function s(e) {
                    return s = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
                    }, s(e)
                }

                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, p(r.key), r)
                    }
                }

                function l(e, t) {
                    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, l(e, t)
                }

                function u(e) {
                    if (e === void 0) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
                    return e
                }

                function d() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                    } catch {}
                    return (d = function() {
                        return !!e
                    })()
                }

                function f(e) {
                    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, f(e)
                }

                function p(e) {
                    var t = function(e) {
                        if (s(e) != `object` || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (t !== void 0) {
                            var n = t.call(e, `string`);
                            if (s(n) != `object`) return n;
                            throw TypeError(`@@toPrimitive must return a primitive value.`)
                        }
                        return String(e)
                    }(e);
                    return s(t) == `symbol` ? t : t + ``
                }
                var m = function(e) {
                    (function(e, t) {
                        if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function`);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && l(e, t)
                    })(m, e);
                    var r, i, a = function(e) {
                        var t = d();
                        return function() {
                            var n, r = f(e);
                            if (t) {
                                var i = f(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return function(e, t) {
                                if (t && (s(t) == `object` || typeof t == `function`)) return t;
                                if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
                                return u(e)
                            }(this, n)
                        }
                    }(m);

                    function m() {
                        var e, t, n, r;
                        (function(e, t) {
                            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
                        })(this, m);
                        var i = [...arguments];
                        return t = u(e = a.call.apply(a, [this].concat(i))), r = {
                            instance: null
                        }, (n = p(n = `state`)) in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, e
                    }
                    return r = m, (i = [{
                        key: `componentDidMount`,
                        value: function() {
                            var e = this,
                                t = new n.default(this.typewriter, this.props.options);
                            this.setState({
                                instance: t
                            }, (function() {
                                var n = e.props.onInit;
                                n && n(t)
                            }))
                        }
                    }, {
                        key: `componentDidUpdate`,
                        value: function(e) {
                            o()(this.props.options, e.options) || this.setState({
                                instance: new n.default(this.typewriter, this.props.options)
                            })
                        }
                    }, {
                        key: `componentWillUnmount`,
                        value: function() {
                            this.state.instance && this.state.instance.stop()
                        }
                    }, {
                        key: `render`,
                        value: function() {
                            var e = this,
                                n = this.props.component;
                            return t().createElement(n, {
                                ref: function(t) {
                                    return e.typewriter = t
                                },
                                className: `Typewriter`,
                                "data-testid": `typewriter-wrapper`
                            })
                        }
                    }]) && c(r.prototype, i), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), m
                }(e.Component);
                m.defaultProps = {
                    component: `div`
                };
                let h = m
            })(), a.default
        })()))
    })),
    S = e(r()),
    C = e(x()),
    w = s(),
    T = e => (0, w.jsxs)(E, {
        onClick: y,
        children: [e.character ? (0, w.jsx)(D, {
            src: u(`characters/spine/normalized_preview/${e.character.replace(`character_`,``)}.png`)
        }) : null, (0, w.jsx)(`div`, {
            style: {
                paddingLeft: e.character ? 85 : 0
            },
            children: (() => {
                if (e.typewriter) {
                    let t = h({
                        inputText: e.message
                    });
                    return (0, w.jsx)(`div`, {
                        style: {
                            fontWeight: t.includes(`<b>`) ? l.Normal : l.Bold
                        },
                        children: (0, w.jsx)(C.default, {
                            options: {
                                delay: 16,
                                cursor: ``
                            },
                            onInit: n => {
                                n.typeString(t).callFunction(() => {
                                    e.onTypewriterComplete()
                                }).start()
                            }
                        })
                    })
                }
                return (0, w.jsx)(_, {
                    inputText: e.message,
                    boldByDefault: !0,
                    display: `inline`
                })
            })()
        })]
    }),
    E = c.div.attrs({
        className: `maxWidth medium-shadow`
    })`
  background: rgba(48, 28, 86, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  overflow: hidden;
  padding: 25px;
  font-size: 18px;
`,
    D = c.img`
  height: 160px;
  position: absolute;
  bottom: -19px;
  left: -33px;
`,
    O = function(e) {
        return e.action = `action`, e
    }({}),
    k = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        show: {
            opacity: 1,
            scale: 1
        }
    },
    A = e => {
        let {
            action: t,
            send: n
        } = e;
        return (0, w.jsx)(f.div, {
            variants: k,
            transition: {
                duration: .2,
                ease: `anticipate`
            },
            children: (0, w.jsx)(j, {
                onClick: r => {
                    y(r), n(O.action, {
                        index: t.index,
                        action: t.action
                    }), e.close()
                },
                children: (0, w.jsx)(`div`, {
                    children: (0, w.jsx)(_, {
                        inputText: t.text,
                        boldByDefault: !0
                    })
                })
            })
        })
    },
    j = c.div.attrs({
        className: `medium-shadow`
    })`
  background: rgba(69, 41, 124, 0.85);
  font-size: 16px;
  font-weight: ${l.Bold};
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
  will-change: background, transform;
  &:hover {
    background: rgba(90, 54, 162, 0.85);
    transform: scale(1.05);
  }
`,
    M = {
        hidden: {
            opacity: 1
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .15,
                delayChildren: .1
            }
        }
    },
    N = e => e.actions.length ? (0, w.jsx)(P, {
        variants: M,
        initial: `hidden`,
        animate: e.canShow ? `show` : `hidden`,
        children: e.actions.map((t, n) => (0, w.jsx)(A, {
            action: t,
            send: e.send,
            close: e.close
        }, t.text + n))
    }) : null,
    P = c(f.div).attrs({
        className: `maxWidth`
    })`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 10px;
  align-items: center;
`,
    F = e => {
        let [t, r] = n(!1);
        return (0, w.jsxs)(`div`, {
            className: `maxWidth`,
            style: {
                marginTop: `auto`
            },
            children: [(0, w.jsx)(T, {
                message: e.message,
                typewriter: e.typewriter,
                character: e.character,
                onTypewriterComplete: r
            }), (0, w.jsx)(N, {
                actions: e.actions,
                send: e.send,
                close: e.close,
                canShow: !e.typewriter || t
            })]
        })
    },
    I = .2,
    L = v(e => (g(Phaser.Input.Keyboard.KeyCodes.ESC, e.close, [e.close]), S.useEffect(() => {
        b({
            familyName: e.font
        })
    }, [e.font]), (0, w.jsx)(R, {
        children: (0, w.jsx)(o, {
            className: `maxAll`,
            children: (0, w.jsxs)(z, {
                initial: {
                    background: `rgba(0,0,0,0)`
                },
                animate: e.darkenBackground ? {
                    background: `rgba(0,0,0,0.4)`
                } : void 0,
                exit: {
                    background: `rgba(0,0,0,0)`
                },
                transition: {
                    duration: I
                },
                onClick: e.close,
                children: [(0, w.jsx)(m, {
                    onClick: e.close
                }), (0, w.jsx)(B, {
                    initial: {
                        y: `200%`,
                        opacity: 0
                    },
                    animate: {
                        y: `0%`,
                        opacity: 1
                    },
                    exit: {
                        y: `200%`,
                        opacity: 0
                    },
                    transition: {
                        duration: I,
                        ease: `easeOut`
                    },
                    style: {
                        fontFamily: e.font
                    },
                    children: (0, w.jsx)(F, {
                        ...e
                    })
                })]
            })
        })
    }))),
    R = c(o).attrs({
        className: `maxAll`
    })`
  overflow: hidden;
  z-index: ${p.primaryContent};
`,
    z = c(f.div).attrs({
        className: `maxAll flex hc`
    })`
  align-items: flex-end;
`,
    B = c(f.div).attrs({
        className: `maxWidth scroll-y`
    })`
  padding: 35px;
  max-height: 70%;
  color: ${d.White};
`;
export {
    I as ANIMATION_DURATION, L as
    default
};