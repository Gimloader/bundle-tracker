import {
    bI as At,
    au as J,
    aw as Ct,
    j as M,
    d as W,
    F as st,
    u as Nt,
    r as Pt
} from "./_index.js";
import {
    ag as kt,
    ah as mt,
    ae as Dt,
    o as Lt,
    q as Mt,
    af as Rt
} from "./App-41.js";
import {
    S as yt
} from "./SixteenByNineScaler.js";
import {
    S as gt
} from "./StopPropagation.js";
import {
    G as Ft
} from "./GetAssetPath.js";
import {
    m as rt
} from "./motion.js";
import {
    C as zt
} from "./Button.js";
import {
    L as It
} from "./LoadGoogleFontAfterSceneStart.js";
import "./FixSpinePlugin.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./polished.esm.js";
import "./index-1.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./index-20.js";
import "./index-22.js";
var et = {
        exports: {}
    },
    Qt = et.exports,
    vt;

function $t() {
    return vt || (vt = 1, function(E, Q) {
        (function($, U) {
            E.exports = U(At())
        })(typeof self < "u" ? self : Qt, $ => (() => {
            var U = {
                    2: (e, o, t) => {
                        var r = t(2199),
                            i = t(4664),
                            a = t(5950);
                        e.exports = function(n) {
                            return r(n, a, i)
                        }
                    },
                    79: (e, o, t) => {
                        var r = t(3702),
                            i = t(80),
                            a = t(4739),
                            n = t(8655),
                            u = t(1175);

                        function c(p) {
                            var f = -1,
                                d = p == null ? 0 : p.length;
                            for (this.clear(); ++f < d;) {
                                var v = p[f];
                                this.set(v[0], v[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c
                    },
                    80: (e, o, t) => {
                        var r = t(6025),
                            i = Array.prototype.splice;
                        e.exports = function(a) {
                            var n = this.__data__,
                                u = r(n, a);
                            return !(u < 0 || (u == n.length - 1 ? n.pop() : i.call(n, u, 1), --this.size, 0))
                        }
                    },
                    270: (e, o, t) => {
                        var r = t(7068),
                            i = t(346);
                        e.exports = function a(n, u, c, p, f) {
                            return n === u || (n == null || u == null || !i(n) && !i(u) ? n != n && u != u : r(n, u, c, p, a, f))
                        }
                    },
                    289: (e, o, t) => {
                        var r = t(2651);
                        e.exports = function(i) {
                            return r(this, i).get(i)
                        }
                    },
                    294: e => {
                        e.exports = function(o) {
                            return typeof o == "number" && o > -1 && o % 1 == 0 && o <= 9007199254740991
                        }
                    },
                    317: e => {
                        e.exports = function(o) {
                            var t = -1,
                                r = Array(o.size);
                            return o.forEach(function(i, a) {
                                r[++t] = [a, i]
                            }), r
                        }
                    },
                    346: e => {
                        e.exports = function(o) {
                            return o != null && typeof o == "object"
                        }
                    },
                    361: e => {
                        var o = /^(?:0|[1-9]\d*)$/;
                        e.exports = function(t, r) {
                            var i = typeof t;
                            return !!(r = r ?? 9007199254740991) && (i == "number" || i != "symbol" && o.test(t)) && t > -1 && t % 1 == 0 && t < r
                        }
                    },
                    392: e => {
                        e.exports = function(o, t) {
                            return o == null ? void 0 : o[t]
                        }
                    },
                    659: (e, o, t) => {
                        var r = t(1873),
                            i = Object.prototype,
                            a = i.hasOwnProperty,
                            n = i.toString,
                            u = r ? r.toStringTag : void 0;
                        e.exports = function(c) {
                            var p = a.call(c, u),
                                f = c[u];
                            try {
                                c[u] = void 0;
                                var d = !0
                            } catch {}
                            var v = n.call(c);
                            return d && (p ? c[u] = f : delete c[u]), v
                        }
                    },
                    689: (e, o, t) => {
                        var r = t(2),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(a, n, u, c, p, f) {
                            var d = 1 & u,
                                v = r(a),
                                C = v.length;
                            if (C != r(n).length && !d) return !1;
                            for (var y = C; y--;) {
                                var l = v[y];
                                if (!(d ? l in n : i.call(n, l))) return !1
                            }
                            var _ = f.get(a),
                                x = f.get(n);
                            if (_ && x) return _ == n && x == a;
                            var j = !0;
                            f.set(a, n), f.set(n, a);
                            for (var b = d; ++y < C;) {
                                var m = a[l = v[y]],
                                    S = n[l];
                                if (c) var P = d ? c(S, m, l, n, a, f) : c(m, S, l, a, n, f);
                                if (!(P === void 0 ? m === S || p(m, S, u, c, f) : P)) {
                                    j = !1;
                                    break
                                }
                                b || (b = l == "constructor")
                            }
                            if (j && !b) {
                                var k = a.constructor,
                                    L = n.constructor;
                                k == L || !("constructor" in a) || !("constructor" in n) || typeof k == "function" && k instanceof k && typeof L == "function" && L instanceof L || (j = !1)
                            }
                            return f.delete(a), f.delete(n), j
                        }
                    },
                    695: (e, o, t) => {
                        var r = t(8096),
                            i = t(2428),
                            a = t(6449),
                            n = t(3656),
                            u = t(361),
                            c = t(7167),
                            p = Object.prototype.hasOwnProperty;
                        e.exports = function(f, d) {
                            var v = a(f),
                                C = !v && i(f),
                                y = !v && !C && n(f),
                                l = !v && !C && !y && c(f),
                                _ = v || C || y || l,
                                x = _ ? r(f.length, String) : [],
                                j = x.length;
                            for (var b in f) !d && !p.call(f, b) || _ && (b == "length" || y && (b == "offset" || b == "parent") || l && (b == "buffer" || b == "byteLength" || b == "byteOffset") || u(b, j)) || x.push(b);
                            return x
                        }
                    },
                    938: e => {
                        e.exports = function(o) {
                            var t = this.__data__,
                                r = t.delete(o);
                            return this.size = t.size, r
                        }
                    },
                    945: (e, o, t) => {
                        var r = t(79),
                            i = t(8223),
                            a = t(3661);
                        e.exports = function(n, u) {
                            var c = this.__data__;
                            if (c instanceof r) {
                                var p = c.__data__;
                                if (!i || p.length < 199) return p.push([n, u]), this.size = ++c.size, this;
                                c = this.__data__ = new a(p)
                            }
                            return c.set(n, u), this.size = c.size, this
                        }
                    },
                    1042: (e, o, t) => {
                        var r = t(6110)(Object, "create");
                        e.exports = r
                    },
                    1175: (e, o, t) => {
                        var r = t(6025);
                        e.exports = function(i, a) {
                            var n = this.__data__,
                                u = r(n, i);
                            return u < 0 ? (++this.size, n.push([i, a])) : n[u][1] = a, this
                        }
                    },
                    1380: e => {
                        e.exports = function(o) {
                            return this.__data__.set(o, "__lodash_hash_undefined__"), this
                        }
                    },
                    1420: (e, o, t) => {
                        var r = t(79);
                        e.exports = function() {
                            this.__data__ = new r, this.size = 0
                        }
                    },
                    1459: e => {
                        e.exports = function(o) {
                            return this.__data__.has(o)
                        }
                    },
                    1549: (e, o, t) => {
                        var r = t(2032),
                            i = t(3862),
                            a = t(6721),
                            n = t(2749),
                            u = t(5749);

                        function c(p) {
                            var f = -1,
                                d = p == null ? 0 : p.length;
                            for (this.clear(); ++f < d;) {
                                var v = p[f];
                                this.set(v[0], v[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c
                    },
                    1873: (e, o, t) => {
                        var r = t(9325).Symbol;
                        e.exports = r
                    },
                    1882: (e, o, t) => {
                        var r = t(2552),
                            i = t(3805);
                        e.exports = function(a) {
                            if (!i(a)) return !1;
                            var n = r(a);
                            return n == "[object Function]" || n == "[object GeneratorFunction]" || n == "[object AsyncFunction]" || n == "[object Proxy]"
                        }
                    },
                    1986: (e, o, t) => {
                        var r = t(1873),
                            i = t(7828),
                            a = t(5288),
                            n = t(5911),
                            u = t(317),
                            c = t(4247),
                            p = r ? r.prototype : void 0,
                            f = p ? p.valueOf : void 0;
                        e.exports = function(d, v, C, y, l, _, x) {
                            switch (C) {
                                case "[object DataView]":
                                    if (d.byteLength != v.byteLength || d.byteOffset != v.byteOffset) return !1;
                                    d = d.buffer, v = v.buffer;
                                case "[object ArrayBuffer]":
                                    return !(d.byteLength != v.byteLength || !_(new i(d), new i(v)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                    return a(+d, +v);
                                case "[object Error]":
                                    return d.name == v.name && d.message == v.message;
                                case "[object RegExp]":
                                case "[object String]":
                                    return d == v + "";
                                case "[object Map]":
                                    var j = u;
                                case "[object Set]":
                                    var b = 1 & y;
                                    if (j || (j = c), d.size != v.size && !b) return !1;
                                    var m = x.get(d);
                                    if (m) return m == v;
                                    y |= 2, x.set(d, v);
                                    var S = n(j(d), j(v), y, l, _, x);
                                    return x.delete(d), S;
                                case "[object Symbol]":
                                    if (f) return f.call(d) == f.call(v)
                            }
                            return !1
                        }
                    },
                    2032: (e, o, t) => {
                        var r = t(1042);
                        e.exports = function() {
                            this.__data__ = r ? r(null) : {}, this.size = 0
                        }
                    },
                    2199: (e, o, t) => {
                        var r = t(4528),
                            i = t(6449);
                        e.exports = function(a, n, u) {
                            var c = n(a);
                            return i(a) ? c : r(c, u(a))
                        }
                    },
                    2404: (e, o, t) => {
                        var r = t(270);
                        e.exports = function(i, a) {
                            return r(i, a)
                        }
                    },
                    2428: (e, o, t) => {
                        var r = t(7534),
                            i = t(346),
                            a = Object.prototype,
                            n = a.hasOwnProperty,
                            u = a.propertyIsEnumerable,
                            c = r(function() {
                                return arguments
                            }()) ? r : function(p) {
                                return i(p) && n.call(p, "callee") && !u.call(p, "callee")
                            };
                        e.exports = c
                    },
                    2552: (e, o, t) => {
                        var r = t(1873),
                            i = t(659),
                            a = t(9350),
                            n = r ? r.toStringTag : void 0;
                        e.exports = function(u) {
                            return u == null ? u === void 0 ? "[object Undefined]" : "[object Null]" : n && n in Object(u) ? i(u) : a(u)
                        }
                    },
                    2651: (e, o, t) => {
                        var r = t(4218);
                        e.exports = function(i, a) {
                            var n = i.__data__;
                            return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map
                        }
                    },
                    2749: (e, o, t) => {
                        var r = t(1042),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(a) {
                            var n = this.__data__;
                            return r ? n[a] !== void 0 : i.call(n, a)
                        }
                    },
                    2804: (e, o, t) => {
                        var r = t(6110)(t(9325), "Promise");
                        e.exports = r
                    },
                    2949: (e, o, t) => {
                        var r = t(2651);
                        e.exports = function(i, a) {
                            var n = r(this, i),
                                u = n.size;
                            return n.set(i, a), this.size += n.size == u ? 0 : 1, this
                        }
                    },
                    3040: (e, o, t) => {
                        var r = t(1549),
                            i = t(79),
                            a = t(8223);
                        e.exports = function() {
                            this.size = 0, this.__data__ = {
                                hash: new r,
                                map: new(a || i),
                                string: new r
                            }
                        }
                    },
                    3146: (e, o, t) => {
                        for (var r = t(3491), i = typeof window > "u" ? t.g : window, a = ["moz", "webkit"], n = "AnimationFrame", u = i["request" + n], c = i["cancel" + n] || i["cancelRequest" + n], p = 0; !u && p < a.length; p++) u = i[a[p] + "Request" + n], c = i[a[p] + "Cancel" + n] || i[a[p] + "CancelRequest" + n];
                        if (!u || !c) {
                            var f = 0,
                                d = 0,
                                v = [],
                                C = 1e3 / 60;
                            u = function(y) {
                                if (v.length === 0) {
                                    var l = r(),
                                        _ = Math.max(0, C - (l - f));
                                    f = _ + l, setTimeout(function() {
                                        var x = v.slice(0);
                                        v.length = 0;
                                        for (var j = 0; j < x.length; j++)
                                            if (!x[j].cancelled) try {
                                                x[j].callback(f)
                                            } catch (b) {
                                                setTimeout(function() {
                                                    throw b
                                                }, 0)
                                            }
                                    }, Math.round(_))
                                }
                                return v.push({
                                    handle: ++d,
                                    callback: y,
                                    cancelled: !1
                                }), d
                            }, c = function(y) {
                                for (var l = 0; l < v.length; l++) v[l].handle === y && (v[l].cancelled = !0)
                            }
                        }
                        e.exports = function(y) {
                            return u.call(i, y)
                        }, e.exports.cancel = function() {
                            c.apply(i, arguments)
                        }, e.exports.polyfill = function(y) {
                            y || (y = i), y.requestAnimationFrame = u, y.cancelAnimationFrame = c
                        }
                    },
                    3345: e => {
                        e.exports = function() {
                            return []
                        }
                    },
                    3491: function(e) {
                        (function() {
                            var o, t, r, i, a, n;
                            typeof performance < "u" && performance !== null && performance.now ? e.exports = function() {
                                return performance.now()
                            } : typeof J < "u" && J !== null && J.hrtime ? (e.exports = function() {
                                return (o() - a) / 1e6
                            }, t = J.hrtime, i = (o = function() {
                                var u;
                                return 1e9 * (u = t())[0] + u[1]
                            })(), n = 1e9 * J.uptime(), a = i - n) : Date.now ? (e.exports = function() {
                                return Date.now() - r
                            }, r = Date.now()) : (e.exports = function() {
                                return new Date().getTime() - r
                            }, r = new Date().getTime())
                        }).call(this)
                    },
                    3605: e => {
                        e.exports = function(o) {
                            return this.__data__.get(o)
                        }
                    },
                    3650: (e, o, t) => {
                        var r = t(4335)(Object.keys, Object);
                        e.exports = r
                    },
                    3656: (e, o, t) => {
                        e = t.nmd(e);
                        var r = t(9325),
                            i = t(9935),
                            a = o && !o.nodeType && o,
                            n = a && e && !e.nodeType && e,
                            u = n && n.exports === a ? r.Buffer : void 0,
                            c = (u ? u.isBuffer : void 0) || i;
                        e.exports = c
                    },
                    3661: (e, o, t) => {
                        var r = t(3040),
                            i = t(7670),
                            a = t(289),
                            n = t(4509),
                            u = t(2949);

                        function c(p) {
                            var f = -1,
                                d = p == null ? 0 : p.length;
                            for (this.clear(); ++f < d;) {
                                var v = p[f];
                                this.set(v[0], v[1])
                            }
                        }
                        c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = n, c.prototype.set = u, e.exports = c
                    },
                    3702: e => {
                        e.exports = function() {
                            this.__data__ = [], this.size = 0
                        }
                    },
                    3805: e => {
                        e.exports = function(o) {
                            var t = typeof o;
                            return o != null && (t == "object" || t == "function")
                        }
                    },
                    3862: e => {
                        e.exports = function(o) {
                            var t = this.has(o) && delete this.__data__[o];
                            return this.size -= t ? 1 : 0, t
                        }
                    },
                    4218: e => {
                        e.exports = function(o) {
                            var t = typeof o;
                            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? o !== "__proto__" : o === null
                        }
                    },
                    4247: e => {
                        e.exports = function(o) {
                            var t = -1,
                                r = Array(o.size);
                            return o.forEach(function(i) {
                                r[++t] = i
                            }), r
                        }
                    },
                    4248: e => {
                        e.exports = function(o, t) {
                            for (var r = -1, i = o == null ? 0 : o.length; ++r < i;)
                                if (t(o[r], r, o)) return !0;
                            return !1
                        }
                    },
                    4335: e => {
                        e.exports = function(o, t) {
                            return function(r) {
                                return o(t(r))
                            }
                        }
                    },
                    4509: (e, o, t) => {
                        var r = t(2651);
                        e.exports = function(i) {
                            return r(this, i).has(i)
                        }
                    },
                    4528: e => {
                        e.exports = function(o, t) {
                            for (var r = -1, i = t.length, a = o.length; ++r < i;) o[a + r] = t[r];
                            return o
                        }
                    },
                    4664: (e, o, t) => {
                        var r = t(9770),
                            i = t(3345),
                            a = Object.prototype.propertyIsEnumerable,
                            n = Object.getOwnPropertySymbols,
                            u = n ? function(c) {
                                return c == null ? [] : (c = Object(c), r(n(c), function(p) {
                                    return a.call(c, p)
                                }))
                            } : i;
                        e.exports = u
                    },
                    4739: (e, o, t) => {
                        var r = t(6025);
                        e.exports = function(i) {
                            var a = this.__data__,
                                n = r(a, i);
                            return n < 0 ? void 0 : a[n][1]
                        }
                    },
                    4840: (e, o, t) => {
                        var r = typeof t.g == "object" && t.g && t.g.Object === Object && t.g;
                        e.exports = r
                    },
                    4894: (e, o, t) => {
                        var r = t(1882),
                            i = t(294);
                        e.exports = function(a) {
                            return a != null && i(a.length) && !r(a)
                        }
                    },
                    4901: (e, o, t) => {
                        var r = t(2552),
                            i = t(294),
                            a = t(346),
                            n = {};
                        n["[object Float32Array]"] = n["[object Float64Array]"] = n["[object Int8Array]"] = n["[object Int16Array]"] = n["[object Int32Array]"] = n["[object Uint8Array]"] = n["[object Uint8ClampedArray]"] = n["[object Uint16Array]"] = n["[object Uint32Array]"] = !0, n["[object Arguments]"] = n["[object Array]"] = n["[object ArrayBuffer]"] = n["[object Boolean]"] = n["[object DataView]"] = n["[object Date]"] = n["[object Error]"] = n["[object Function]"] = n["[object Map]"] = n["[object Number]"] = n["[object Object]"] = n["[object RegExp]"] = n["[object Set]"] = n["[object String]"] = n["[object WeakMap]"] = !1, e.exports = function(u) {
                            return a(u) && i(u.length) && !!n[r(u)]
                        }
                    },
                    5083: (e, o, t) => {
                        var r = t(1882),
                            i = t(7296),
                            a = t(3805),
                            n = t(7473),
                            u = /^\[object .+?Constructor\]$/,
                            c = Function.prototype,
                            p = Object.prototype,
                            f = c.toString,
                            d = p.hasOwnProperty,
                            v = RegExp("^" + f.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                        e.exports = function(C) {
                            return !(!a(C) || i(C)) && (r(C) ? v : u).test(n(C))
                        }
                    },
                    5288: e => {
                        e.exports = function(o, t) {
                            return o === t || o != o && t != t
                        }
                    },
                    5481: (e, o, t) => {
                        var r = t(9325)["__core-js_shared__"];
                        e.exports = r
                    },
                    5527: e => {
                        var o = Object.prototype;
                        e.exports = function(t) {
                            var r = t && t.constructor;
                            return t === (typeof r == "function" && r.prototype || o)
                        }
                    },
                    5580: (e, o, t) => {
                        var r = t(6110)(t(9325), "DataView");
                        e.exports = r
                    },
                    5749: (e, o, t) => {
                        var r = t(1042);
                        e.exports = function(i, a) {
                            var n = this.__data__;
                            return this.size += this.has(i) ? 0 : 1, n[i] = r && a === void 0 ? "__lodash_hash_undefined__" : a, this
                        }
                    },
                    5861: (e, o, t) => {
                        var r = t(5580),
                            i = t(8223),
                            a = t(2804),
                            n = t(6545),
                            u = t(8303),
                            c = t(2552),
                            p = t(7473),
                            f = "[object Map]",
                            d = "[object Promise]",
                            v = "[object Set]",
                            C = "[object WeakMap]",
                            y = "[object DataView]",
                            l = p(r),
                            _ = p(i),
                            x = p(a),
                            j = p(n),
                            b = p(u),
                            m = c;
                        (r && m(new r(new ArrayBuffer(1))) != y || i && m(new i) != f || a && m(a.resolve()) != d || n && m(new n) != v || u && m(new u) != C) && (m = function(S) {
                            var P = c(S),
                                k = P == "[object Object]" ? S.constructor : void 0,
                                L = k ? p(k) : "";
                            if (L) switch (L) {
                                case l:
                                    return y;
                                case _:
                                    return f;
                                case x:
                                    return d;
                                case j:
                                    return v;
                                case b:
                                    return C
                            }
                            return P
                        }), e.exports = m
                    },
                    5911: (e, o, t) => {
                        var r = t(8859),
                            i = t(4248),
                            a = t(9219);
                        e.exports = function(n, u, c, p, f, d) {
                            var v = 1 & c,
                                C = n.length,
                                y = u.length;
                            if (C != y && !(v && y > C)) return !1;
                            var l = d.get(n),
                                _ = d.get(u);
                            if (l && _) return l == u && _ == n;
                            var x = -1,
                                j = !0,
                                b = 2 & c ? new r : void 0;
                            for (d.set(n, u), d.set(u, n); ++x < C;) {
                                var m = n[x],
                                    S = u[x];
                                if (p) var P = v ? p(S, m, x, u, n, d) : p(m, S, x, n, u, d);
                                if (P !== void 0) {
                                    if (P) continue;
                                    j = !1;
                                    break
                                }
                                if (b) {
                                    if (!i(u, function(k, L) {
                                            if (!a(b, L) && (m === k || f(m, k, c, p, d))) return b.push(L)
                                        })) {
                                        j = !1;
                                        break
                                    }
                                } else if (m !== S && !f(m, S, c, p, d)) {
                                    j = !1;
                                    break
                                }
                            }
                            return d.delete(n), d.delete(u), j
                        }
                    },
                    5950: (e, o, t) => {
                        var r = t(695),
                            i = t(8984),
                            a = t(4894);
                        e.exports = function(n) {
                            return a(n) ? r(n) : i(n)
                        }
                    },
                    6009: (e, o, t) => {
                        e = t.nmd(e);
                        var r = t(4840),
                            i = o && !o.nodeType && o,
                            a = i && e && !e.nodeType && e,
                            n = a && a.exports === i && r.process,
                            u = function() {
                                try {
                                    return a && a.require && a.require("util").types || n && n.binding && n.binding("util")
                                } catch {}
                            }();
                        e.exports = u
                    },
                    6025: (e, o, t) => {
                        var r = t(5288);
                        e.exports = function(i, a) {
                            for (var n = i.length; n--;)
                                if (r(i[n][0], a)) return n;
                            return -1
                        }
                    },
                    6110: (e, o, t) => {
                        var r = t(5083),
                            i = t(392);
                        e.exports = function(a, n) {
                            var u = i(a, n);
                            return r(u) ? u : void 0
                        }
                    },
                    6449: e => {
                        var o = Array.isArray;
                        e.exports = o
                    },
                    6545: (e, o, t) => {
                        var r = t(6110)(t(9325), "Set");
                        e.exports = r
                    },
                    6721: (e, o, t) => {
                        var r = t(1042),
                            i = Object.prototype.hasOwnProperty;
                        e.exports = function(a) {
                            var n = this.__data__;
                            if (r) {
                                var u = n[a];
                                return u === "__lodash_hash_undefined__" ? void 0 : u
                            }
                            return i.call(n, a) ? n[a] : void 0
                        }
                    },
                    7068: (e, o, t) => {
                        var r = t(7217),
                            i = t(5911),
                            a = t(1986),
                            n = t(689),
                            u = t(5861),
                            c = t(6449),
                            p = t(3656),
                            f = t(7167),
                            d = "[object Arguments]",
                            v = "[object Array]",
                            C = "[object Object]",
                            y = Object.prototype.hasOwnProperty;
                        e.exports = function(l, _, x, j, b, m) {
                            var S = c(l),
                                P = c(_),
                                k = S ? v : u(l),
                                L = P ? v : u(_),
                                O = (k = k == d ? C : k) == C,
                                G = (L = L == d ? C : L) == C,
                                H = k == L;
                            if (H && p(l)) {
                                if (!p(_)) return !1;
                                S = !0, O = !1
                            }
                            if (H && !O) return m || (m = new r), S || f(l) ? i(l, _, x, j, b, m) : a(l, _, k, x, j, b, m);
                            if (!(1 & x)) {
                                var T = O && y.call(l, "__wrapped__"),
                                    h = G && y.call(_, "__wrapped__");
                                if (T || h) {
                                    var A = T ? l.value() : l,
                                        w = h ? _.value() : _;
                                    return m || (m = new r), b(A, w, x, j, m)
                                }
                            }
                            return !!H && (m || (m = new r), n(l, _, x, j, b, m))
                        }
                    },
                    7167: (e, o, t) => {
                        var r = t(4901),
                            i = t(7301),
                            a = t(6009),
                            n = a && a.isTypedArray,
                            u = n ? i(n) : r;
                        e.exports = u
                    },
                    7217: (e, o, t) => {
                        var r = t(79),
                            i = t(1420),
                            a = t(938),
                            n = t(3605),
                            u = t(9817),
                            c = t(945);

                        function p(f) {
                            var d = this.__data__ = new r(f);
                            this.size = d.size
                        }
                        p.prototype.clear = i, p.prototype.delete = a, p.prototype.get = n, p.prototype.has = u, p.prototype.set = c, e.exports = p
                    },
                    7296: (e, o, t) => {
                        var r, i = t(5481),
                            a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
                        e.exports = function(n) {
                            return !!a && a in n
                        }
                    },
                    7301: e => {
                        e.exports = function(o) {
                            return function(t) {
                                return o(t)
                            }
                        }
                    },
                    7473: e => {
                        var o = Function.prototype.toString;
                        e.exports = function(t) {
                            if (t != null) {
                                try {
                                    return o.call(t)
                                } catch {}
                                try {
                                    return t + ""
                                } catch {}
                            }
                            return ""
                        }
                    },
                    7534: (e, o, t) => {
                        var r = t(2552),
                            i = t(346);
                        e.exports = function(a) {
                            return i(a) && r(a) == "[object Arguments]"
                        }
                    },
                    7670: (e, o, t) => {
                        var r = t(2651);
                        e.exports = function(i) {
                            var a = r(this, i).delete(i);
                            return this.size -= a ? 1 : 0, a
                        }
                    },
                    7828: (e, o, t) => {
                        var r = t(9325).Uint8Array;
                        e.exports = r
                    },
                    8096: e => {
                        e.exports = function(o, t) {
                            for (var r = -1, i = Array(o); ++r < o;) i[r] = t(r);
                            return i
                        }
                    },
                    8223: (e, o, t) => {
                        var r = t(6110)(t(9325), "Map");
                        e.exports = r
                    },
                    8303: (e, o, t) => {
                        var r = t(6110)(t(9325), "WeakMap");
                        e.exports = r
                    },
                    8655: (e, o, t) => {
                        var r = t(6025);
                        e.exports = function(i) {
                            return r(this.__data__, i) > -1
                        }
                    },
                    8859: (e, o, t) => {
                        var r = t(3661),
                            i = t(1380),
                            a = t(1459);

                        function n(u) {
                            var c = -1,
                                p = u == null ? 0 : u.length;
                            for (this.__data__ = new r; ++c < p;) this.add(u[c])
                        }
                        n.prototype.add = n.prototype.push = i, n.prototype.has = a, e.exports = n
                    },
                    8984: (e, o, t) => {
                        var r = t(5527),
                            i = t(3650),
                            a = Object.prototype.hasOwnProperty;
                        e.exports = function(n) {
                            if (!r(n)) return i(n);
                            var u = [];
                            for (var c in Object(n)) a.call(n, c) && c != "constructor" && u.push(c);
                            return u
                        }
                    },
                    9155: e => {
                        e.exports = $
                    },
                    9219: e => {
                        e.exports = function(o, t) {
                            return o.has(t)
                        }
                    },
                    9325: (e, o, t) => {
                        var r = t(4840),
                            i = typeof self == "object" && self && self.Object === Object && self,
                            a = r || i || Function("return this")();
                        e.exports = a
                    },
                    9350: e => {
                        var o = Object.prototype.toString;
                        e.exports = function(t) {
                            return o.call(t)
                        }
                    },
                    9770: e => {
                        e.exports = function(o, t) {
                            for (var r = -1, i = o == null ? 0 : o.length, a = 0, n = []; ++r < i;) {
                                var u = o[r];
                                t(u, r, o) && (n[a++] = u)
                            }
                            return n
                        }
                    },
                    9817: e => {
                        e.exports = function(o) {
                            return this.__data__.has(o)
                        }
                    },
                    9905: (e, o, t) => {
                        t.d(o, {
                            default: () => H
                        });
                        var r = t(3146),
                            i = t.n(r);
                        const a = function(T) {
                                return new RegExp(/<[a-z][\s\S]*>/i).test(T)
                            },
                            n = function(T, h) {
                                return Math.floor(Math.random() * (h - T + 1)) + T
                            };
                        var u = "TYPE_CHARACTER",
                            c = "REMOVE_CHARACTER",
                            p = "REMOVE_ALL",
                            f = "REMOVE_LAST_VISIBLE_NODE",
                            d = "PAUSE_FOR",
                            v = "CALL_FUNCTION",
                            C = "ADD_HTML_TAG_ELEMENT",
                            y = "CHANGE_DELETE_SPEED",
                            l = "CHANGE_DELAY",
                            _ = "CHANGE_CURSOR",
                            x = "PASTE_STRING",
                            j = "HTML_TAG";

                        function b(T) {
                            return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                                return typeof h
                            } : function(h) {
                                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
                            }, b(T)
                        }

                        function m(T, h) {
                            var A = Object.keys(T);
                            if (Object.getOwnPropertySymbols) {
                                var w = Object.getOwnPropertySymbols(T);
                                h && (w = w.filter(function(B) {
                                    return Object.getOwnPropertyDescriptor(T, B).enumerable
                                })), A.push.apply(A, w)
                            }
                            return A
                        }

                        function S(T) {
                            for (var h = 1; h < arguments.length; h++) {
                                var A = arguments[h] != null ? arguments[h] : {};
                                h % 2 ? m(Object(A), !0).forEach(function(w) {
                                    O(T, w, A[w])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(A)) : m(Object(A)).forEach(function(w) {
                                    Object.defineProperty(T, w, Object.getOwnPropertyDescriptor(A, w))
                                })
                            }
                            return T
                        }

                        function P(T) {
                            return function(h) {
                                if (Array.isArray(h)) return k(h)
                            }(T) || function(h) {
                                if (typeof Symbol < "u" && h[Symbol.iterator] != null || h["@@iterator"] != null) return Array.from(h)
                            }(T) || function(h, A) {
                                if (h) {
                                    if (typeof h == "string") return k(h, A);
                                    var w = {}.toString.call(h).slice(8, -1);
                                    return w === "Object" && h.constructor && (w = h.constructor.name), w === "Map" || w === "Set" ? Array.from(h) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? k(h, A) : void 0
                                }
                            }(T) || function() {
                                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                            }()
                        }

                        function k(T, h) {
                            (h == null || h > T.length) && (h = T.length);
                            for (var A = 0, w = Array(h); A < h; A++) w[A] = T[A];
                            return w
                        }

                        function L(T, h) {
                            for (var A = 0; A < h.length; A++) {
                                var w = h[A];
                                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(T, G(w.key), w)
                            }
                        }

                        function O(T, h, A) {
                            return (h = G(h)) in T ? Object.defineProperty(T, h, {
                                value: A,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : T[h] = A, T
                        }

                        function G(T) {
                            var h = function(A) {
                                if (b(A) != "object" || !A) return A;
                                var w = A[Symbol.toPrimitive];
                                if (w !== void 0) {
                                    var B = w.call(A, "string");
                                    if (b(B) != "object") return B;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(A)
                            }(T);
                            return b(h) == "symbol" ? h : h + ""
                        }
                        const H = function() {
                            function T(w, B) {
                                var s = this;
                                if (function(g, N) {
                                        if (!(g instanceof N)) throw new TypeError("Cannot call a class as a function")
                                    }(this, T), O(this, "state", {
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
                                            wrapper: document.createElement("span"),
                                            cursor: document.createElement("span")
                                        }
                                    }), O(this, "options", {
                                        strings: null,
                                        cursor: "|",
                                        delay: "natural",
                                        pauseFor: 1500,
                                        deleteSpeed: "natural",
                                        loop: !1,
                                        autoStart: !1,
                                        devMode: !1,
                                        skipAddStyles: !1,
                                        wrapperClassName: "Typewriter__wrapper",
                                        cursorClassName: "Typewriter__cursor",
                                        stringSplitter: null,
                                        onCreateTextNode: null,
                                        onRemoveNode: null
                                    }), O(this, "setupWrapperElement", function() {
                                        s.state.elements.container && (s.state.elements.wrapper.className = s.options.wrapperClassName, s.state.elements.cursor.className = s.options.cursorClassName, s.state.elements.cursor.innerHTML = s.options.cursor, s.state.elements.container.innerHTML = "", s.state.elements.container.appendChild(s.state.elements.wrapper), s.state.elements.container.appendChild(s.state.elements.cursor))
                                    }), O(this, "start", function() {
                                        return s.state.eventLoopPaused = !1, s.runEventLoop(), s
                                    }), O(this, "pause", function() {
                                        return s.state.eventLoopPaused = !0, s
                                    }), O(this, "stop", function() {
                                        return s.state.eventLoop && ((0, r.cancel)(s.state.eventLoop), s.state.eventLoop = null), s
                                    }), O(this, "pauseFor", function(g) {
                                        return s.addEventToQueue(d, {
                                            ms: g
                                        }), s
                                    }), O(this, "typeOutAllStrings", function() {
                                        return typeof s.options.strings == "string" ? (s.typeString(s.options.strings).pauseFor(s.options.pauseFor), s) : (s.options.strings.forEach(function(g) {
                                            s.typeString(g).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)
                                        }), s)
                                    }), O(this, "typeString", function(g) {
                                        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        if (a(g)) return s.typeOutHTMLString(g, N);
                                        if (g) {
                                            var R = (s.options || {}).stringSplitter,
                                                F = typeof R == "function" ? R(g) : g.split("");
                                            s.typeCharacters(F, N)
                                        }
                                        return s
                                    }), O(this, "pasteString", function(g) {
                                        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        return a(g) ? s.typeOutHTMLString(g, N, !0) : (g && s.addEventToQueue(x, {
                                            character: g,
                                            node: N
                                        }), s)
                                    }), O(this, "typeOutHTMLString", function(g) {
                                        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                                            R = arguments.length > 2 ? arguments[2] : void 0,
                                            F = function(V) {
                                                var Y = document.createElement("div");
                                                return Y.innerHTML = V, Y.childNodes
                                            }(g);
                                        if (F.length > 0)
                                            for (var D = 0; D < F.length; D++) {
                                                var I = F[D],
                                                    q = I.innerHTML;
                                                I && I.nodeType !== 3 ? (I.innerHTML = "", s.addEventToQueue(C, {
                                                    node: I,
                                                    parentNode: N
                                                }), R ? s.pasteString(q, I) : s.typeString(q, I)) : I.textContent && (R ? s.pasteString(I.textContent, N) : s.typeString(I.textContent, N))
                                            }
                                        return s
                                    }), O(this, "deleteAll", function() {
                                        var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "natural";
                                        return s.addEventToQueue(p, {
                                            speed: g
                                        }), s
                                    }), O(this, "changeDeleteSpeed", function(g) {
                                        if (!g) throw new Error("Must provide new delete speed");
                                        return s.addEventToQueue(y, {
                                            speed: g
                                        }), s
                                    }), O(this, "changeDelay", function(g) {
                                        if (!g) throw new Error("Must provide new delay");
                                        return s.addEventToQueue(l, {
                                            delay: g
                                        }), s
                                    }), O(this, "changeCursor", function(g) {
                                        if (!g) throw new Error("Must provide new cursor");
                                        return s.addEventToQueue(_, {
                                            cursor: g
                                        }), s
                                    }), O(this, "deleteChars", function(g) {
                                        if (!g) throw new Error("Must provide amount of characters to delete");
                                        for (var N = 0; N < g; N++) s.addEventToQueue(c);
                                        return s
                                    }), O(this, "callFunction", function(g, N) {
                                        if (!g || typeof g != "function") throw new Error("Callback must be a function");
                                        return s.addEventToQueue(v, {
                                            cb: g,
                                            thisArg: N
                                        }), s
                                    }), O(this, "typeCharacters", function(g) {
                                        var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                        if (!g || !Array.isArray(g)) throw new Error("Characters must be an array");
                                        return g.forEach(function(R) {
                                            s.addEventToQueue(u, {
                                                character: R,
                                                node: N
                                            })
                                        }), s
                                    }), O(this, "removeCharacters", function(g) {
                                        if (!g || !Array.isArray(g)) throw new Error("Characters must be an array");
                                        return g.forEach(function() {
                                            s.addEventToQueue(c)
                                        }), s
                                    }), O(this, "addEventToQueue", function(g, N) {
                                        var R = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                                        return s.addEventToStateProperty(g, N, R, "eventQueue")
                                    }), O(this, "addReverseCalledEvent", function(g, N) {
                                        var R = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                                        return s.options.loop ? s.addEventToStateProperty(g, N, R, "reverseCalledEvents") : s
                                    }), O(this, "addEventToStateProperty", function(g, N) {
                                        var R = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                                            F = arguments.length > 3 ? arguments[3] : void 0,
                                            D = {
                                                eventName: g,
                                                eventArgs: N || {}
                                            };
                                        return s.state[F] = R ? [D].concat(P(s.state[F])) : [].concat(P(s.state[F]), [D]), s
                                    }), O(this, "runEventLoop", function() {
                                        s.state.lastFrameTime || (s.state.lastFrameTime = Date.now());
                                        var g = Date.now(),
                                            N = g - s.state.lastFrameTime;
                                        if (!s.state.eventQueue.length) {
                                            if (!s.options.loop) return;
                                            s.state.eventQueue = P(s.state.calledEvents), s.state.calledEvents = [], s.options = S({}, s.state.initialOptions)
                                        }
                                        if (s.state.eventLoop = i()(s.runEventLoop), !s.state.eventLoopPaused) {
                                            if (s.state.pauseUntil) {
                                                if (g < s.state.pauseUntil) return;
                                                s.state.pauseUntil = null
                                            }
                                            var R, F = P(s.state.eventQueue),
                                                D = F.shift();
                                            if (!(N <= (R = D.eventName === f || D.eventName === c ? s.options.deleteSpeed === "natural" ? n(40, 80) : s.options.deleteSpeed : s.options.delay === "natural" ? n(120, 160) : s.options.delay))) {
                                                var I = D.eventName,
                                                    q = D.eventArgs;
                                                switch (s.logInDevMode({
                                                        currentEvent: D,
                                                        state: s.state,
                                                        delay: R
                                                    }), I) {
                                                    case x:
                                                    case u:
                                                        var V = q.character,
                                                            Y = q.node,
                                                            pt = document.createTextNode(V),
                                                            K = pt;
                                                        s.options.onCreateTextNode && typeof s.options.onCreateTextNode == "function" && (K = s.options.onCreateTextNode(V, pt)), K && (Y ? Y.appendChild(K) : s.state.elements.wrapper.appendChild(K)), s.state.visibleNodes = [].concat(P(s.state.visibleNodes), [{
                                                            type: "TEXT_NODE",
                                                            character: V,
                                                            node: K
                                                        }]);
                                                        break;
                                                    case c:
                                                        F.unshift({
                                                            eventName: f,
                                                            eventArgs: {
                                                                removingCharacterNode: !0
                                                            }
                                                        });
                                                        break;
                                                    case d:
                                                        var xt = D.eventArgs.ms;
                                                        s.state.pauseUntil = Date.now() + parseInt(xt);
                                                        break;
                                                    case v:
                                                        var lt = D.eventArgs,
                                                            _t = lt.cb,
                                                            wt = lt.thisArg;
                                                        _t.call(wt, {
                                                            elements: s.state.elements
                                                        });
                                                        break;
                                                    case C:
                                                        var ft = D.eventArgs,
                                                            nt = ft.node,
                                                            ot = ft.parentNode;
                                                        ot ? ot.appendChild(nt) : s.state.elements.wrapper.appendChild(nt), s.state.visibleNodes = [].concat(P(s.state.visibleNodes), [{
                                                            type: j,
                                                            node: nt,
                                                            parentNode: ot || s.state.elements.wrapper
                                                        }]);
                                                        break;
                                                    case p:
                                                        var jt = s.state.visibleNodes,
                                                            at = q.speed,
                                                            Z = [];
                                                        at && Z.push({
                                                            eventName: y,
                                                            eventArgs: {
                                                                speed: at,
                                                                temp: !0
                                                            }
                                                        });
                                                        for (var dt = 0, Et = jt.length; dt < Et; dt++) Z.push({
                                                            eventName: f,
                                                            eventArgs: {
                                                                removingCharacterNode: !1
                                                            }
                                                        });
                                                        at && Z.push({
                                                            eventName: y,
                                                            eventArgs: {
                                                                speed: s.options.deleteSpeed,
                                                                temp: !0
                                                            }
                                                        }), F.unshift.apply(F, Z);
                                                        break;
                                                    case f:
                                                        var Ot = D.eventArgs.removingCharacterNode;
                                                        if (s.state.visibleNodes.length) {
                                                            var it = s.state.visibleNodes.pop(),
                                                                Tt = it.type,
                                                                tt = it.node,
                                                                St = it.character;
                                                            s.options.onRemoveNode && typeof s.options.onRemoveNode == "function" && s.options.onRemoveNode({
                                                                node: tt,
                                                                character: St
                                                            }), tt && tt.parentNode.removeChild(tt), Tt === j && Ot && F.unshift({
                                                                eventName: f,
                                                                eventArgs: {}
                                                            })
                                                        }
                                                        break;
                                                    case y:
                                                        s.options.deleteSpeed = D.eventArgs.speed;
                                                        break;
                                                    case l:
                                                        s.options.delay = D.eventArgs.delay;
                                                        break;
                                                    case _:
                                                        s.options.cursor = D.eventArgs.cursor, s.state.elements.cursor.innerHTML = D.eventArgs.cursor
                                                }
                                                s.options.loop && (D.eventName === f || D.eventArgs && D.eventArgs.temp || (s.state.calledEvents = [].concat(P(s.state.calledEvents), [D]))), s.state.eventQueue = F, s.state.lastFrameTime = g
                                            }
                                        }
                                    }), w)
                                    if (typeof w == "string") {
                                        var ct = document.querySelector(w);
                                        if (!ct) throw new Error("Could not find container element");
                                        this.state.elements.container = ct
                                    } else this.state.elements.container = w;
                                B && (this.options = S(S({}, this.options), B)), this.state.initialOptions = S({}, this.options), this.init()
                            }
                            var h, A;
                            return h = T, (A = [{
                                key: "init",
                                value: function() {
                                    var w, B;
                                    this.setupWrapperElement(), this.addEventToQueue(_, {
                                        cursor: this.options.cursor
                                    }, !0), this.addEventToQueue(p, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (w = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (B = document.createElement("style")).appendChild(document.createTextNode(w)), document.head.appendChild(B), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), this.options.autoStart === !0 && this.options.strings && this.typeOutAllStrings().start()
                                }
                            }, {
                                key: "logInDevMode",
                                value: function(w) {
                                    this.options.devMode && console.log(w)
                                }
                            }]) && L(h.prototype, A), Object.defineProperty(h, "prototype", {
                                writable: !1
                            }), T
                        }()
                    },
                    9935: e => {
                        e.exports = function() {
                            return !1
                        }
                    }
                },
                X = {};

            function z(e) {
                var o = X[e];
                if (o !== void 0) return o.exports;
                var t = X[e] = {
                    id: e,
                    loaded: !1,
                    exports: {}
                };
                return U[e].call(t.exports, t, t.exports, z), t.loaded = !0, t.exports
            }
            z.n = e => {
                var o = e && e.__esModule ? () => e.default : () => e;
                return z.d(o, {
                    a: o
                }), o
            }, z.d = (e, o) => {
                for (var t in o) z.o(o, t) && !z.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o[t]
                })
            }, z.g = function() {
                if (typeof globalThis == "object") return globalThis;
                try {
                    return this || new Function("return this")()
                } catch {
                    if (typeof window == "object") return window
                }
            }(), z.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o), z.nmd = e => (e.paths = [], e.children || (e.children = []), e);
            var ut = {};
            return (() => {
                z.d(ut, {
                    default: () => C
                });
                var e = z(9155),
                    o = z.n(e),
                    t = z(9905),
                    r = z(2404),
                    i = z.n(r);

                function a(y) {
                    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
                        return typeof l
                    } : function(l) {
                        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
                    }, a(y)
                }

                function n(y, l) {
                    for (var _ = 0; _ < l.length; _++) {
                        var x = l[_];
                        x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(y, d(x.key), x)
                    }
                }

                function u(y, l) {
                    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, x) {
                        return _.__proto__ = x, _
                    }, u(y, l)
                }

                function c(y) {
                    if (y === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return y
                }

                function p() {
                    try {
                        var y = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch {}
                    return (p = function() {
                        return !!y
                    })()
                }

                function f(y) {
                    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
                        return l.__proto__ || Object.getPrototypeOf(l)
                    }, f(y)
                }

                function d(y) {
                    var l = function(_) {
                        if (a(_) != "object" || !_) return _;
                        var x = _[Symbol.toPrimitive];
                        if (x !== void 0) {
                            var j = x.call(_, "string");
                            if (a(j) != "object") return j;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(_)
                    }(y);
                    return a(l) == "symbol" ? l : l + ""
                }
                var v = function(y) {
                    (function(b, m) {
                        if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
                        b.prototype = Object.create(m && m.prototype, {
                            constructor: {
                                value: b,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(b, "prototype", {
                            writable: !1
                        }), m && u(b, m)
                    })(j, y);
                    var l, _, x = function(b) {
                        var m = p();
                        return function() {
                            var S, P = f(b);
                            if (m) {
                                var k = f(this).constructor;
                                S = Reflect.construct(P, arguments, k)
                            } else S = P.apply(this, arguments);
                            return function(L, O) {
                                if (O && (a(O) == "object" || typeof O == "function")) return O;
                                if (O !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                                return c(L)
                            }(this, S)
                        }
                    }(j);

                    function j() {
                        var b, m, S, P;
                        (function(G, H) {
                            if (!(G instanceof H)) throw new TypeError("Cannot call a class as a function")
                        })(this, j);
                        for (var k = arguments.length, L = new Array(k), O = 0; O < k; O++) L[O] = arguments[O];
                        return m = c(b = x.call.apply(x, [this].concat(L))), P = {
                            instance: null
                        }, (S = d(S = "state")) in m ? Object.defineProperty(m, S, {
                            value: P,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : m[S] = P, b
                    }
                    return l = j, (_ = [{
                        key: "componentDidMount",
                        value: function() {
                            var b = this,
                                m = new t.default(this.typewriter, this.props.options);
                            this.setState({
                                instance: m
                            }, function() {
                                var S = b.props.onInit;
                                S && S(m)
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(b) {
                            i()(this.props.options, b.options) || this.setState({
                                instance: new t.default(this.typewriter, this.props.options)
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.instance && this.state.instance.stop()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var b = this,
                                m = this.props.component;
                            return o().createElement(m, {
                                ref: function(S) {
                                    return b.typewriter = S
                                },
                                className: "Typewriter",
                                "data-testid": "typewriter-wrapper"
                            })
                        }
                    }]) && n(l.prototype, _), Object.defineProperty(l, "prototype", {
                        writable: !1
                    }), j
                }(e.Component);
                v.defaultProps = {
                    component: "div"
                };
                const C = v
            })(), ut.default
        })())
    }(et)), et.exports
}
var Bt = $t();
const Ut = Ct(Bt),
    Ht = E => {
        const Q = () => {
            if (E.typewriter) {
                const $ = kt({
                    inputText: E.message
                });
                return M.jsx("div", {
                    style: {
                        fontWeight: $.includes("<b>") ? st.Normal : st.Bold
                    },
                    children: M.jsx(Ut, {
                        options: {
                            delay: 16,
                            cursor: ""
                        },
                        onInit: U => {
                            U.typeString($).callFunction(() => {
                                E.onTypewriterComplete()
                            }).start()
                        }
                    })
                })
            }
            return M.jsx(mt, {
                inputText: E.message,
                boldByDefault: !0,
                display: "inline"
            })
        };
        return M.jsxs(Wt, {
            onClick: gt,
            children: [E.character ? M.jsx(Gt, {
                src: Ft(`characters/spine/normalized_preview/${E.character.replace("character_","")}.png`)
            }) : null, M.jsx("div", {
                style: {
                    paddingLeft: E.character ? 85 : 0
                },
                children: Q()
            })]
        })
    },
    Wt = W.div.attrs({
        className: "maxWidth medium-shadow"
    })`
  background: rgba(48, 28, 86, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  overflow: hidden;
  padding: 25px;
  font-size: 18px;
`,
    Gt = W.img`
  height: 160px;
  position: absolute;
  bottom: -19px;
  left: -33px;
`;
var bt = (E => (E.action = "action", E))(bt || {});
const qt = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        show: {
            opacity: 1,
            scale: 1
        }
    },
    Vt = E => {
        const {
            action: Q,
            send: $
        } = E, U = X => {
            gt(X), $(bt.action, {
                index: Q.index,
                action: Q.action
            }), E.close()
        };
        return M.jsx(rt.div, {
            variants: qt,
            transition: {
                duration: .2,
                ease: "anticipate"
            },
            children: M.jsx(Yt, {
                onClick: U,
                children: M.jsx("div", {
                    children: M.jsx(mt, {
                        inputText: Q.text,
                        boldByDefault: !0
                    })
                })
            })
        })
    },
    Yt = W.div.attrs({
        className: "medium-shadow"
    })`
  background: rgba(69, 41, 124, 0.85);
  font-size: 16px;
  font-weight: ${st.Bold};
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
    Kt = {
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
    Jt = E => E.actions.length ? M.jsx(Xt, {
        variants: Kt,
        initial: "hidden",
        animate: E.canShow ? "show" : "hidden",
        children: E.actions.map((Q, $) => M.jsx(Vt, {
            action: Q,
            send: E.send,
            close: E.close
        }, Q.text + $))
    }) : null,
    Xt = W(rt.div).attrs({
        className: "maxWidth"
    })`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 12px;
  gap: 10px;
  align-items: center;
`,
    Zt = E => {
        const [Q, $] = Nt(!1);
        return M.jsxs("div", {
            className: "maxWidth",
            style: {
                marginTop: "auto"
            },
            children: [M.jsx(Ht, {
                message: E.message,
                typewriter: E.typewriter,
                character: E.character,
                onTypewriterComplete: $
            }), M.jsx(Jt, {
                actions: E.actions,
                send: E.send,
                close: E.close,
                canShow: E.typewriter ? Q : !0
            })]
        })
    },
    ht = .2,
    te = E => (Lt(Phaser.Input.Keyboard.KeyCodes.ESC, E.close, [E.close]), Pt.useEffect(() => {
        It({
            familyName: E.font
        })
    }, [E.font]), M.jsx(ee, {
        children: M.jsx(yt, {
            className: "maxAll",
            children: M.jsxs(re, {
                initial: {
                    background: "rgba(0,0,0,0)"
                },
                animate: E.darkenBackground ? {
                    background: "rgba(0,0,0,0.4)"
                } : void 0,
                exit: {
                    background: "rgba(0,0,0,0)"
                },
                transition: {
                    duration: ht
                },
                onClick: E.close,
                children: [M.jsx(Mt, {
                    onClick: E.close
                }), M.jsx(ne, {
                    initial: {
                        y: "200%",
                        opacity: 0
                    },
                    animate: {
                        y: "0%",
                        opacity: 1
                    },
                    exit: {
                        y: "200%",
                        opacity: 0
                    },
                    transition: {
                        duration: ht,
                        ease: "easeOut"
                    },
                    style: {
                        fontFamily: E.font
                    },
                    children: M.jsx(Zt, {
                        ...E
                    })
                })]
            })
        })
    })),
    wr = Dt(te),
    ee = W(yt).attrs({
        className: "maxAll"
    })`
  overflow: hidden;
  z-index: ${Rt.primaryContent};
`,
    re = W(rt.div).attrs({
        className: "maxAll flex hc"
    })`
  align-items: flex-end;
`,
    ne = W(rt.div).attrs({
        className: "maxWidth scroll-y"
    })`
  padding: 35px;
  max-height: 70%;
  color: ${zt.White};
`;
export {
    ht as ANIMATION_DURATION, wr as
    default
};