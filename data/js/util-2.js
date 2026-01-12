import {
    d as Nt,
    r as Te
} from "./util-1.js";
import {
    au as $,
    at as xe
} from "./_index.js";
var Ce = {
        exports: {}
    },
    We = {},
    ht;

function Fe() {
    return ht || (ht = 1, function(N) {
        Object.defineProperties(N, {
            __esModule: {
                value: !0
            },
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        var L = {},
            I = {};
        I.byteLength = P, I.toByteArray = A, I.fromByteArray = S;
        for (var F = [], k = [], c = typeof Uint8Array < "u" ? Uint8Array : Array, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", E = 0, _ = R.length; E < _; ++E) F[E] = R[E], k[R.charCodeAt(E)] = E;
        k[45] = 62, k[95] = 63;

        function B(s) {
            var g = s.length;
            if (g % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var a = s.indexOf("=");
            a === -1 && (a = g);
            var u = a === g ? 0 : 4 - a % 4;
            return [a, u]
        }

        function P(s) {
            var g = B(s),
                a = g[0],
                u = g[1];
            return (a + u) * 3 / 4 - u
        }

        function C(s, g, a) {
            return (g + a) * 3 / 4 - a
        }

        function A(s) {
            var g, a = B(s),
                u = a[0],
                y = a[1],
                b = new c(C(s, u, y)),
                v = 0,
                T = y > 0 ? u - 4 : u,
                D;
            for (D = 0; D < T; D += 4) g = k[s.charCodeAt(D)] << 18 | k[s.charCodeAt(D + 1)] << 12 | k[s.charCodeAt(D + 2)] << 6 | k[s.charCodeAt(D + 3)], b[v++] = g >> 16 & 255, b[v++] = g >> 8 & 255, b[v++] = g & 255;
            return y === 2 && (g = k[s.charCodeAt(D)] << 2 | k[s.charCodeAt(D + 1)] >> 4, b[v++] = g & 255), y === 1 && (g = k[s.charCodeAt(D)] << 10 | k[s.charCodeAt(D + 1)] << 4 | k[s.charCodeAt(D + 2)] >> 2, b[v++] = g >> 8 & 255, b[v++] = g & 255), b
        }

        function q(s) {
            return F[s >> 18 & 63] + F[s >> 12 & 63] + F[s >> 6 & 63] + F[s & 63]
        }

        function U(s, g, a) {
            for (var u, y = [], b = g; b < a; b += 3) u = (s[b] << 16 & 16711680) + (s[b + 1] << 8 & 65280) + (s[b + 2] & 255), y.push(q(u));
            return y.join("")
        }

        function S(s) {
            for (var g, a = s.length, u = a % 3, y = [], b = 16383, v = 0, T = a - u; v < T; v += b) y.push(U(s, v, v + b > T ? T : v + b));
            return u === 1 ? (g = s[a - 1], y.push(F[g >> 2] + F[g << 4 & 63] + "==")) : u === 2 && (g = (s[a - 2] << 8) + s[a - 1], y.push(F[g >> 10] + F[g >> 4 & 63] + F[g << 2 & 63] + "=")), y.join("")
        }
        var O = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        O.read = function(s, g, a, u, y) {
            var b, v, T = y * 8 - u - 1,
                D = (1 << T) - 1,
                V = D >> 1,
                h = -7,
                J = a ? y - 1 : 0,
                oe = a ? -1 : 1,
                ne = s[g + J];
            for (J += oe, b = ne & (1 << -h) - 1, ne >>= -h, h += T; h > 0; b = b * 256 + s[g + J], J += oe, h -= 8);
            for (v = b & (1 << -h) - 1, b >>= -h, h += u; h > 0; v = v * 256 + s[g + J], J += oe, h -= 8);
            if (b === 0) b = 1 - V;
            else {
                if (b === D) return v ? NaN : (ne ? -1 : 1) * (1 / 0);
                v = v + Math.pow(2, u), b = b - V
            }
            return (ne ? -1 : 1) * v * Math.pow(2, b - u)
        }, O.write = function(s, g, a, u, y, b) {
            var v, T, D, V = b * 8 - y - 1,
                h = (1 << V) - 1,
                J = h >> 1,
                oe = y === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                ne = u ? 0 : b - 1,
                ae = u ? 1 : -1,
                fe = g < 0 || g === 0 && 1 / g < 0 ? 1 : 0;
            for (g = Math.abs(g), isNaN(g) || g === 1 / 0 ? (T = isNaN(g) ? 1 : 0, v = h) : (v = Math.floor(Math.log(g) / Math.LN2), g * (D = Math.pow(2, -v)) < 1 && (v--, D *= 2), v + J >= 1 ? g += oe / D : g += oe * Math.pow(2, 1 - J), g * D >= 2 && (v++, D /= 2), v + J >= h ? (T = 0, v = h) : v + J >= 1 ? (T = (g * D - 1) * Math.pow(2, y), v = v + J) : (T = g * Math.pow(2, J - 1) * Math.pow(2, y), v = 0)); y >= 8; s[a + ne] = T & 255, ne += ae, T /= 256, y -= 8);
            for (v = v << y | T, V += y; V > 0; s[a + ne] = v & 255, ne += ae, v /= 256, V -= 8);
            s[a + ne - ae] |= fe * 128
        };
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        (function(s) {
            const g = I,
                a = O,
                u = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            s.Buffer = h, s.SlowBuffer = le, s.INSPECT_MAX_BYTES = 50;
            const y = 2147483647;
            s.kMaxLength = y;
            const {
                Uint8Array: b,
                ArrayBuffer: v,
                SharedArrayBuffer: T
            } = globalThis;
            h.TYPED_ARRAY_SUPPORT = D(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

            function D() {
                try {
                    const r = new b(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, b.prototype), Object.setPrototypeOf(r, e), r.foo() === 42
                } catch {
                    return !1
                }
            }
            Object.defineProperty(h.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (h.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(h.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (h.isBuffer(this)) return this.byteOffset
                }
            });

            function V(r) {
                if (r > y) throw new RangeError('The value "' + r + '" is invalid for option "size"');
                const e = new b(r);
                return Object.setPrototypeOf(e, h.prototype), e
            }

            function h(r, e, t) {
                if (typeof r == "number") {
                    if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return ae(r)
                }
                return J(r, e, t)
            }
            h.poolSize = 8192;

            function J(r, e, t) {
                if (typeof r == "string") return fe(r, e);
                if (v.isView(r)) return de(r);
                if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
                if (ue(r, v) || r && ue(r.buffer, v) || typeof T < "u" && (ue(r, T) || r && ue(r.buffer, T))) return pe(r, e, t);
                if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = r.valueOf && r.valueOf();
                if (n != null && n !== r) return h.from(n, e, t);
                const f = Le(r);
                if (f) return f;
                if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return h.from(r[Symbol.toPrimitive]("string"), e, t);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
            }
            h.from = function(r, e, t) {
                return J(r, e, t)
            }, Object.setPrototypeOf(h.prototype, b.prototype), Object.setPrototypeOf(h, b);

            function oe(r) {
                if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
                if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
            }

            function ne(r, e, t) {
                return oe(r), r <= 0 ? V(r) : e !== void 0 ? typeof t == "string" ? V(r).fill(e, t) : V(r).fill(e) : V(r)
            }
            h.alloc = function(r, e, t) {
                return ne(r, e, t)
            };

            function ae(r) {
                return oe(r), V(r < 0 ? 0 : ye(r) | 0)
            }
            h.allocUnsafe = function(r) {
                return ae(r)
            }, h.allocUnsafeSlow = function(r) {
                return ae(r)
            };

            function fe(r, e) {
                if ((typeof e != "string" || e === "") && (e = "utf8"), !h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                const t = Ee(r, e) | 0;
                let n = V(t);
                const f = n.write(r, e);
                return f !== t && (n = n.slice(0, f)), n
            }

            function ce(r) {
                const e = r.length < 0 ? 0 : ye(r.length) | 0,
                    t = V(e);
                for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
                return t
            }

            function de(r) {
                if (ue(r, b)) {
                    const e = new b(r);
                    return pe(e.buffer, e.byteOffset, e.byteLength)
                }
                return ce(r)
            }

            function pe(r, e, t) {
                if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return e === void 0 && t === void 0 ? n = new b(r) : t === void 0 ? n = new b(r, e) : n = new b(r, e, t), Object.setPrototypeOf(n, h.prototype), n
            }

            function Le(r) {
                if (h.isBuffer(r)) {
                    const e = ye(r.length) | 0,
                        t = V(e);
                    return t.length === 0 || r.copy(t, 0, 0, e), t
                }
                if (r.length !== void 0) return typeof r.length != "number" || qe(r.length) ? V(0) : ce(r);
                if (r.type === "Buffer" && Array.isArray(r.data)) return ce(r.data)
            }

            function ye(r) {
                if (r >= y) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y.toString(16) + " bytes");
                return r | 0
            }

            function le(r) {
                return +r != r && (r = 0), h.alloc(+r)
            }
            h.isBuffer = function(e) {
                return e != null && e._isBuffer === !0 && e !== h.prototype
            }, h.compare = function(e, t) {
                if (ue(e, b) && (e = h.from(e, e.offset, e.byteLength)), ue(t, b) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let n = e.length,
                    f = t.length;
                for (let w = 0, m = Math.min(n, f); w < m; ++w)
                    if (e[w] !== t[w]) {
                        n = e[w], f = t[w];
                        break
                    } return n < f ? -1 : f < n ? 1 : 0
            }, h.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, h.concat = function(e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (e.length === 0) return h.alloc(0);
                let n;
                if (t === void 0)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                const f = h.allocUnsafe(t);
                let w = 0;
                for (n = 0; n < e.length; ++n) {
                    let m = e[n];
                    if (ue(m, b)) w + m.length > f.length ? (h.isBuffer(m) || (m = h.from(m)), m.copy(f, w)) : b.prototype.set.call(f, m, w);
                    else if (h.isBuffer(m)) m.copy(f, w);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    w += m.length
                }
                return f
            };

            function Ee(r, e) {
                if (h.isBuffer(r)) return r.length;
                if (v.isView(r) || ue(r, v)) return r.byteLength;
                if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
                const t = r.length,
                    n = arguments.length > 2 && arguments[2] === !0;
                if (!n && t === 0) return 0;
                let f = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return t;
                    case "utf8":
                    case "utf-8":
                        return je(r).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return t * 2;
                    case "hex":
                        return t >>> 1;
                    case "base64":
                        return st(r).length;
                    default:
                        if (f) return n ? -1 : je(r).length;
                        e = ("" + e).toLowerCase(), f = !0
                }
            }
            h.byteLength = Ee;

            function Ie(r, e, t) {
                let n = !1;
                if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
                for (r || (r = "utf8");;) switch (r) {
                    case "hex":
                        return Oe(this, e, t);
                    case "utf8":
                    case "utf-8":
                        return z(this, e, t);
                    case "ascii":
                        return ge(this, e, t);
                    case "latin1":
                    case "binary":
                        return be(this, e, t);
                    case "base64":
                        return j(this, e, t);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return De(this, e, t);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + r);
                        r = (r + "").toLowerCase(), n = !0
                }
            }
            h.prototype._isBuffer = !0;

            function p(r, e, t) {
                const n = r[e];
                r[e] = r[t], r[t] = n
            }
            h.prototype.swap16 = function() {
                const e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, h.prototype.swap32 = function() {
                const e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, h.prototype.swap64 = function() {
                const e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, h.prototype.toString = function() {
                const e = this.length;
                return e === 0 ? "" : arguments.length === 0 ? z(this, 0, e) : Ie.apply(this, arguments)
            }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(e) {
                if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e ? !0 : h.compare(this, e) === 0
            }, h.prototype.inspect = function() {
                let e = "";
                const t = s.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
            }, u && (h.prototype[u] = h.prototype.inspect), h.prototype.compare = function(e, t, n, f, w) {
                if (ue(e, b) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), f === void 0 && (f = 0), w === void 0 && (w = this.length), t < 0 || n > e.length || f < 0 || w > this.length) throw new RangeError("out of range index");
                if (f >= w && t >= n) return 0;
                if (f >= w) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, f >>>= 0, w >>>= 0, this === e) return 0;
                let m = w - f,
                    Y = n - t;
                const Q = Math.min(m, Y),
                    Z = this.slice(f, w),
                    ee = e.slice(t, n);
                for (let X = 0; X < Q; ++X)
                    if (Z[X] !== ee[X]) {
                        m = Z[X], Y = ee[X];
                        break
                    } return m < Y ? -1 : Y < m ? 1 : 0
            };

            function d(r, e, t, n, f) {
                if (r.length === 0) return -1;
                if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, qe(t) && (t = f ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
                    if (f) return -1;
                    t = r.length - 1
                } else if (t < 0)
                    if (f) t = 0;
                    else return -1;
                if (typeof e == "string" && (e = h.from(e, n)), h.isBuffer(e)) return e.length === 0 ? -1 : M(r, e, t, n, f);
                if (typeof e == "number") return e = e & 255, typeof b.prototype.indexOf == "function" ? f ? b.prototype.indexOf.call(r, e, t) : b.prototype.lastIndexOf.call(r, e, t) : M(r, [e], t, n, f);
                throw new TypeError("val must be string, number or Buffer")
            }

            function M(r, e, t, n, f) {
                let w = 1,
                    m = r.length,
                    Y = e.length;
                if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
                    if (r.length < 2 || e.length < 2) return -1;
                    w = 2, m /= 2, Y /= 2, t /= 2
                }

                function Q(ee, X) {
                    return w === 1 ? ee[X] : ee.readUInt16BE(X * w)
                }
                let Z;
                if (f) {
                    let ee = -1;
                    for (Z = t; Z < m; Z++)
                        if (Q(r, Z) === Q(e, ee === -1 ? 0 : Z - ee)) {
                            if (ee === -1 && (ee = Z), Z - ee + 1 === Y) return ee * w
                        } else ee !== -1 && (Z -= Z - ee), ee = -1
                } else
                    for (t + Y > m && (t = m - Y), Z = t; Z >= 0; Z--) {
                        let ee = !0;
                        for (let X = 0; X < Y; X++)
                            if (Q(r, Z + X) !== Q(e, X)) {
                                ee = !1;
                                break
                            } if (ee) return Z
                    }
                return -1
            }
            h.prototype.includes = function(e, t, n) {
                return this.indexOf(e, t, n) !== -1
            }, h.prototype.indexOf = function(e, t, n) {
                return d(this, e, t, n, !0)
            }, h.prototype.lastIndexOf = function(e, t, n) {
                return d(this, e, t, n, !1)
            };

            function W(r, e, t, n) {
                t = Number(t) || 0;
                const f = r.length - t;
                n ? (n = Number(n), n > f && (n = f)) : n = f;
                const w = e.length;
                n > w / 2 && (n = w / 2);
                let m;
                for (m = 0; m < n; ++m) {
                    const Y = parseInt(e.substr(m * 2, 2), 16);
                    if (qe(Y)) return m;
                    r[t + m] = Y
                }
                return m
            }

            function G(r, e, t, n) {
                return Ne(je(e, r.length - t), r, t, n)
            }

            function i(r, e, t, n) {
                return Ne($t(e), r, t, n)
            }

            function o(r, e, t, n) {
                return Ne(st(e), r, t, n)
            }

            function x(r, e, t, n) {
                return Ne(Gt(e, r.length - t), r, t, n)
            }
            h.prototype.write = function(e, t, n, f) {
                if (t === void 0) f = "utf8", n = this.length, t = 0;
                else if (n === void 0 && typeof t == "string") f = t, n = this.length, t = 0;
                else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, f === void 0 && (f = "utf8")) : (f = n, n = void 0);
                else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const w = this.length - t;
                if ((n === void 0 || n > w) && (n = w), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                f || (f = "utf8");
                let m = !1;
                for (;;) switch (f) {
                    case "hex":
                        return W(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return G(this, e, t, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return i(this, e, t, n);
                    case "base64":
                        return o(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, t, n);
                    default:
                        if (m) throw new TypeError("Unknown encoding: " + f);
                        f = ("" + f).toLowerCase(), m = !0
                }
            }, h.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function j(r, e, t) {
                return e === 0 && t === r.length ? g.fromByteArray(r) : g.fromByteArray(r.slice(e, t))
            }

            function z(r, e, t) {
                t = Math.min(r.length, t);
                const n = [];
                let f = e;
                for (; f < t;) {
                    const w = r[f];
                    let m = null,
                        Y = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
                    if (f + Y <= t) {
                        let Q, Z, ee, X;
                        switch (Y) {
                            case 1:
                                w < 128 && (m = w);
                                break;
                            case 2:
                                Q = r[f + 1], (Q & 192) === 128 && (X = (w & 31) << 6 | Q & 63, X > 127 && (m = X));
                                break;
                            case 3:
                                Q = r[f + 1], Z = r[f + 2], (Q & 192) === 128 && (Z & 192) === 128 && (X = (w & 15) << 12 | (Q & 63) << 6 | Z & 63, X > 2047 && (X < 55296 || X > 57343) && (m = X));
                                break;
                            case 4:
                                Q = r[f + 1], Z = r[f + 2], ee = r[f + 3], (Q & 192) === 128 && (Z & 192) === 128 && (ee & 192) === 128 && (X = (w & 15) << 18 | (Q & 63) << 12 | (Z & 63) << 6 | ee & 63, X > 65535 && X < 1114112 && (m = X))
                        }
                    }
                    m === null ? (m = 65533, Y = 1) : m > 65535 && (m -= 65536, n.push(m >>> 10 & 1023 | 55296), m = 56320 | m & 1023), n.push(m), f += Y
                }
                return K(n)
            }
            const H = 4096;

            function K(r) {
                const e = r.length;
                if (e <= H) return String.fromCharCode.apply(String, r);
                let t = "",
                    n = 0;
                for (; n < e;) t += String.fromCharCode.apply(String, r.slice(n, n += H));
                return t
            }

            function ge(r, e, t) {
                let n = "";
                t = Math.min(r.length, t);
                for (let f = e; f < t; ++f) n += String.fromCharCode(r[f] & 127);
                return n
            }

            function be(r, e, t) {
                let n = "";
                t = Math.min(r.length, t);
                for (let f = e; f < t; ++f) n += String.fromCharCode(r[f]);
                return n
            }

            function Oe(r, e, t) {
                const n = r.length;
                (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
                let f = "";
                for (let w = e; w < t; ++w) f += Yt[r[w]];
                return f
            }

            function De(r, e, t) {
                const n = r.slice(e, t);
                let f = "";
                for (let w = 0; w < n.length - 1; w += 2) f += String.fromCharCode(n[w] + n[w + 1] * 256);
                return f
            }
            h.prototype.slice = function(e, t) {
                const n = this.length;
                e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
                const f = this.subarray(e, t);
                return Object.setPrototypeOf(f, h.prototype), f
            };

            function te(r, e, t) {
                if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
                if (r + e > t) throw new RangeError("Trying to access beyond buffer length")
            }
            h.prototype.readUintLE = h.prototype.readUIntLE = function(e, t, n) {
                e = e >>> 0, t = t >>> 0, n || te(e, t, this.length);
                let f = this[e],
                    w = 1,
                    m = 0;
                for (; ++m < t && (w *= 256);) f += this[e + m] * w;
                return f
            }, h.prototype.readUintBE = h.prototype.readUIntBE = function(e, t, n) {
                e = e >>> 0, t = t >>> 0, n || te(e, t, this.length);
                let f = this[e + --t],
                    w = 1;
                for (; t > 0 && (w *= 256);) f += this[e + --t] * w;
                return f
            }, h.prototype.readUint8 = h.prototype.readUInt8 = function(e, t) {
                return e = e >>> 0, t || te(e, 1, this.length), this[e]
            }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(e, t) {
                return e = e >>> 0, t || te(e, 2, this.length), this[e] | this[e + 1] << 8
            }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(e, t) {
                return e = e >>> 0, t || te(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
            }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, h.prototype.readBigUInt64LE = _e(function(e) {
                e = e >>> 0, Se(e, "offset");
                const t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && Me(e, this.length - 8);
                const f = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
                    w = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
                return BigInt(f) + (BigInt(w) << BigInt(32))
            }), h.prototype.readBigUInt64BE = _e(function(e) {
                e = e >>> 0, Se(e, "offset");
                const t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && Me(e, this.length - 8);
                const f = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
                    w = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
                return (BigInt(f) << BigInt(32)) + BigInt(w)
            }), h.prototype.readIntLE = function(e, t, n) {
                e = e >>> 0, t = t >>> 0, n || te(e, t, this.length);
                let f = this[e],
                    w = 1,
                    m = 0;
                for (; ++m < t && (w *= 256);) f += this[e + m] * w;
                return w *= 128, f >= w && (f -= Math.pow(2, 8 * t)), f
            }, h.prototype.readIntBE = function(e, t, n) {
                e = e >>> 0, t = t >>> 0, n || te(e, t, this.length);
                let f = t,
                    w = 1,
                    m = this[e + --f];
                for (; f > 0 && (w *= 256);) m += this[e + --f] * w;
                return w *= 128, m >= w && (m -= Math.pow(2, 8 * t)), m
            }, h.prototype.readInt8 = function(e, t) {
                return e = e >>> 0, t || te(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
            }, h.prototype.readInt16LE = function(e, t) {
                e = e >>> 0, t || te(e, 2, this.length);
                const n = this[e] | this[e + 1] << 8;
                return n & 32768 ? n | 4294901760 : n
            }, h.prototype.readInt16BE = function(e, t) {
                e = e >>> 0, t || te(e, 2, this.length);
                const n = this[e + 1] | this[e] << 8;
                return n & 32768 ? n | 4294901760 : n
            }, h.prototype.readInt32LE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, h.prototype.readInt32BE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, h.prototype.readBigInt64LE = _e(function(e) {
                e = e >>> 0, Se(e, "offset");
                const t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && Me(e, this.length - 8);
                const f = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
                return (BigInt(f) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
            }), h.prototype.readBigInt64BE = _e(function(e) {
                e = e >>> 0, Se(e, "offset");
                const t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && Me(e, this.length - 8);
                const f = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
                return (BigInt(f) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n)
            }), h.prototype.readFloatLE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), a.read(this, e, !0, 23, 4)
            }, h.prototype.readFloatBE = function(e, t) {
                return e = e >>> 0, t || te(e, 4, this.length), a.read(this, e, !1, 23, 4)
            }, h.prototype.readDoubleLE = function(e, t) {
                return e = e >>> 0, t || te(e, 8, this.length), a.read(this, e, !0, 52, 8)
            }, h.prototype.readDoubleBE = function(e, t) {
                return e = e >>> 0, t || te(e, 8, this.length), a.read(this, e, !1, 52, 8)
            };

            function re(r, e, t, n, f, w) {
                if (!h.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > f || e < w) throw new RangeError('"value" argument is out of bounds');
                if (t + n > r.length) throw new RangeError("Index out of range")
            }
            h.prototype.writeUintLE = h.prototype.writeUIntLE = function(e, t, n, f) {
                if (e = +e, t = t >>> 0, n = n >>> 0, !f) {
                    const Y = Math.pow(2, 8 * n) - 1;
                    re(this, e, t, n, Y, 0)
                }
                let w = 1,
                    m = 0;
                for (this[t] = e & 255; ++m < n && (w *= 256);) this[t + m] = e / w & 255;
                return t + n
            }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(e, t, n, f) {
                if (e = +e, t = t >>> 0, n = n >>> 0, !f) {
                    const Y = Math.pow(2, 8 * n) - 1;
                    re(this, e, t, n, Y, 0)
                }
                let w = n - 1,
                    m = 1;
                for (this[t + w] = e & 255; --w >= 0 && (m *= 256);) this[t + w] = e / m & 255;
                return t + n
            }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1
            }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
            }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
            }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4
            }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
            };

            function ve(r, e, t, n, f) {
                lt(e, n, f, r, t, 7);
                let w = Number(e & BigInt(4294967295));
                r[t++] = w, w = w >> 8, r[t++] = w, w = w >> 8, r[t++] = w, w = w >> 8, r[t++] = w;
                let m = Number(e >> BigInt(32) & BigInt(4294967295));
                return r[t++] = m, m = m >> 8, r[t++] = m, m = m >> 8, r[t++] = m, m = m >> 8, r[t++] = m, t
            }

            function me(r, e, t, n, f) {
                lt(e, n, f, r, t, 7);
                let w = Number(e & BigInt(4294967295));
                r[t + 7] = w, w = w >> 8, r[t + 6] = w, w = w >> 8, r[t + 5] = w, w = w >> 8, r[t + 4] = w;
                let m = Number(e >> BigInt(32) & BigInt(4294967295));
                return r[t + 3] = m, m = m >> 8, r[t + 2] = m, m = m >> 8, r[t + 1] = m, m = m >> 8, r[t] = m, t + 8
            }
            h.prototype.writeBigUInt64LE = _e(function(e, t = 0) {
                return ve(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), h.prototype.writeBigUInt64BE = _e(function(e, t = 0) {
                return me(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), h.prototype.writeIntLE = function(e, t, n, f) {
                if (e = +e, t = t >>> 0, !f) {
                    const Q = Math.pow(2, 8 * n - 1);
                    re(this, e, t, n, Q - 1, -Q)
                }
                let w = 0,
                    m = 1,
                    Y = 0;
                for (this[t] = e & 255; ++w < n && (m *= 256);) e < 0 && Y === 0 && this[t + w - 1] !== 0 && (Y = 1), this[t + w] = (e / m >> 0) - Y & 255;
                return t + n
            }, h.prototype.writeIntBE = function(e, t, n, f) {
                if (e = +e, t = t >>> 0, !f) {
                    const Q = Math.pow(2, 8 * n - 1);
                    re(this, e, t, n, Q - 1, -Q)
                }
                let w = n - 1,
                    m = 1,
                    Y = 0;
                for (this[t + w] = e & 255; --w >= 0 && (m *= 256);) e < 0 && Y === 0 && this[t + w + 1] !== 0 && (Y = 1), this[t + w] = (e / m >> 0) - Y & 255;
                return t + n
            }, h.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
            }, h.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
            }, h.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
            }, h.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, h.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t = t >>> 0, n || re(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
            }, h.prototype.writeBigInt64LE = _e(function(e, t = 0) {
                return ve(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), h.prototype.writeBigInt64BE = _e(function(e, t = 0) {
                return me(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            });

            function we(r, e, t, n, f, w) {
                if (t + n > r.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range")
            }

            function se(r, e, t, n, f) {
                return e = +e, t = t >>> 0, f || we(r, e, t, 4), a.write(r, e, t, n, 23, 4), t + 4
            }
            h.prototype.writeFloatLE = function(e, t, n) {
                return se(this, e, t, !0, n)
            }, h.prototype.writeFloatBE = function(e, t, n) {
                return se(this, e, t, !1, n)
            };

            function he(r, e, t, n, f) {
                return e = +e, t = t >>> 0, f || we(r, e, t, 8), a.write(r, e, t, n, 52, 8), t + 8
            }
            h.prototype.writeDoubleLE = function(e, t, n) {
                return he(this, e, t, !0, n)
            }, h.prototype.writeDoubleBE = function(e, t, n) {
                return he(this, e, t, !1, n)
            }, h.prototype.copy = function(e, t, n, f) {
                if (!h.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (n || (n = 0), !f && f !== 0 && (f = this.length), t >= e.length && (t = e.length), t || (t = 0), f > 0 && f < n && (f = n), f === n || e.length === 0 || this.length === 0) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                f > this.length && (f = this.length), e.length - t < f - n && (f = e.length - t + n);
                const w = f - n;
                return this === e && typeof b.prototype.copyWithin == "function" ? this.copyWithin(t, n, f) : b.prototype.set.call(e, this.subarray(n, f), t), w
            }, h.prototype.fill = function(e, t, n, f) {
                if (typeof e == "string") {
                    if (typeof t == "string" ? (f = t, t = 0, n = this.length) : typeof n == "string" && (f = n, n = this.length), f !== void 0 && typeof f != "string") throw new TypeError("encoding must be a string");
                    if (typeof f == "string" && !h.isEncoding(f)) throw new TypeError("Unknown encoding: " + f);
                    if (e.length === 1) {
                        const m = e.charCodeAt(0);
                        (f === "utf8" && m < 128 || f === "latin1") && (e = m)
                    }
                } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
                let w;
                if (typeof e == "number")
                    for (w = t; w < n; ++w) this[w] = e;
                else {
                    const m = h.isBuffer(e) ? e : h.from(e, f),
                        Y = m.length;
                    if (Y === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (w = 0; w < n - t; ++w) this[w + t] = m[w % Y]
                }
                return this
            };
            const Re = {};

            function ke(r, e, t) {
                Re[r] = class extends t {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${r}]`, this.stack, delete this.name
                    }
                    get code() {
                        return r
                    }
                    set code(f) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: f,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${r}]: ${this.message}`
                    }
                }
            }
            ke("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
                return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), ke("ERR_INVALID_ARG_TYPE", function(r, e) {
                return `The "${r}" argument must be of type number. Received type ${typeof e}`
            }, TypeError), ke("ERR_OUT_OF_RANGE", function(r, e, t) {
                let n = `The value of "${r}" is out of range.`,
                    f = t;
                return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? f = ut(String(t)) : typeof t == "bigint" && (f = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (f = ut(f)), f += "n"), n += ` It must be ${e}. Received ${f}`, n
            }, RangeError);

            function ut(r) {
                let e = "",
                    t = r.length;
                const n = r[0] === "-" ? 1 : 0;
                for (; t >= n + 4; t -= 3) e = `_${r.slice(t-3,t)}${e}`;
                return `${r.slice(0,t)}${e}`
            }

            function qt(r, e, t) {
                Se(e, "offset"), (r[e] === void 0 || r[e + t] === void 0) && Me(e, r.length - (t + 1))
            }

            function lt(r, e, t, n, f, w) {
                if (r > t || r < e) {
                    const m = typeof e == "bigint" ? "n" : "";
                    let Y;
                    throw e === 0 || e === BigInt(0) ? Y = `>= 0${m} and < 2${m} ** ${(w+1)*8}${m}` : Y = `>= -(2${m} ** ${(w+1)*8-1}${m}) and < 2 ** ${(w+1)*8-1}${m}`, new Re.ERR_OUT_OF_RANGE("value", Y, r)
                }
                qt(n, f, w)
            }

            function Se(r, e) {
                if (typeof r != "number") throw new Re.ERR_INVALID_ARG_TYPE(e, "number", r)
            }

            function Me(r, e, t) {
                throw Math.floor(r) !== r ? (Se(r, t), new Re.ERR_OUT_OF_RANGE("offset", "an integer", r)) : e < 0 ? new Re.ERR_BUFFER_OUT_OF_BOUNDS : new Re.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${e}`, r)
            }
            const Wt = /[^+/0-9A-Za-z-_]/g;

            function Ht(r) {
                if (r = r.split("=")[0], r = r.trim().replace(Wt, ""), r.length < 2) return "";
                for (; r.length % 4 !== 0;) r = r + "=";
                return r
            }

            function je(r, e) {
                e = e || 1 / 0;
                let t;
                const n = r.length;
                let f = null;
                const w = [];
                for (let m = 0; m < n; ++m) {
                    if (t = r.charCodeAt(m), t > 55295 && t < 57344) {
                        if (!f) {
                            if (t > 56319) {
                                (e -= 3) > -1 && w.push(239, 191, 189);
                                continue
                            } else if (m + 1 === n) {
                                (e -= 3) > -1 && w.push(239, 191, 189);
                                continue
                            }
                            f = t;
                            continue
                        }
                        if (t < 56320) {
                            (e -= 3) > -1 && w.push(239, 191, 189), f = t;
                            continue
                        }
                        t = (f - 55296 << 10 | t - 56320) + 65536
                    } else f && (e -= 3) > -1 && w.push(239, 191, 189);
                    if (f = null, t < 128) {
                        if ((e -= 1) < 0) break;
                        w.push(t)
                    } else if (t < 2048) {
                        if ((e -= 2) < 0) break;
                        w.push(t >> 6 | 192, t & 63 | 128)
                    } else if (t < 65536) {
                        if ((e -= 3) < 0) break;
                        w.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
                    } else if (t < 1114112) {
                        if ((e -= 4) < 0) break;
                        w.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
                    } else throw new Error("Invalid code point")
                }
                return w
            }

            function $t(r) {
                const e = [];
                for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
                return e
            }

            function Gt(r, e) {
                let t, n, f;
                const w = [];
                for (let m = 0; m < r.length && !((e -= 2) < 0); ++m) t = r.charCodeAt(m), n = t >> 8, f = t % 256, w.push(f), w.push(n);
                return w
            }

            function st(r) {
                return g.toByteArray(Ht(r))
            }

            function Ne(r, e, t, n) {
                let f;
                for (f = 0; f < n && !(f + t >= e.length || f >= r.length); ++f) e[f + t] = r[f];
                return f
            }

            function ue(r, e) {
                return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name
            }

            function qe(r) {
                return r !== r
            }
            const Yt = function() {
                const r = "0123456789abcdef",
                    e = new Array(256);
                for (let t = 0; t < 16; ++t) {
                    const n = t * 16;
                    for (let f = 0; f < 16; ++f) e[n + f] = r[t] + r[f]
                }
                return e
            }();

            function _e(r) {
                return typeof BigInt > "u" ? Vt : r
            }

            function Vt() {
                throw new Error("BigInt not supported")
            }
        })(L);
        const l = L.Buffer;
        N.Blob = L.Blob, N.BlobOptions = L.BlobOptions, N.Buffer = L.Buffer, N.File = L.File, N.FileOptions = L.FileOptions, N.INSPECT_MAX_BYTES = L.INSPECT_MAX_BYTES, N.SlowBuffer = L.SlowBuffer, N.TranscodeEncoding = L.TranscodeEncoding, N.atob = L.atob, N.btoa = L.btoa, N.constants = L.constants, N.default = l, N.isAscii = L.isAscii, N.isUtf8 = L.isUtf8, N.kMaxLength = L.kMaxLength, N.kStringMaxLength = L.kStringMaxLength, N.resolveObjectURL = L.resolveObjectURL, N.transcode = L.transcode
    }(We)), We
} /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ct;

function Kt() {
    return ct || (ct = 1, function(N, L) {
        var I = Fe(),
            F = I.Buffer;

        function k(R, E) {
            for (var _ in R) E[_] = R[_]
        }
        F.from && F.alloc && F.allocUnsafe && F.allocUnsafeSlow ? N.exports = I : (k(I, L), L.Buffer = c);

        function c(R, E, _) {
            return F(R, E, _)
        }
        c.prototype = Object.create(F.prototype), k(F, c), c.from = function(R, E, _) {
            if (typeof R == "number") throw new TypeError("Argument must not be a number");
            return F(R, E, _)
        }, c.alloc = function(R, E, _) {
            if (typeof R != "number") throw new TypeError("Argument must be a number");
            var B = F(R);
            return E !== void 0 ? typeof _ == "string" ? B.fill(E, _) : B.fill(E) : B.fill(0), B
        }, c.allocUnsafe = function(R) {
            if (typeof R != "number") throw new TypeError("Argument must be a number");
            return F(R)
        }, c.allocUnsafeSlow = function(R) {
            if (typeof R != "number") throw new TypeError("Argument must be a number");
            return I.SlowBuffer(R)
        }
    }(Ce, Ce.exports)), Ce.exports
}
var Ue = {
        exports: {}
    },
    dt;

function at() {
    if (dt) return Ue.exports;
    dt = 1;
    var N = typeof Reflect == "object" ? Reflect : null,
        L = N && typeof N.apply == "function" ? N.apply : function(u, y, b) {
            return Function.prototype.apply.call(u, y, b)
        },
        I;
    N && typeof N.ownKeys == "function" ? I = N.ownKeys : Object.getOwnPropertySymbols ? I = function(u) {
        return Object.getOwnPropertyNames(u).concat(Object.getOwnPropertySymbols(u))
    } : I = function(u) {
        return Object.getOwnPropertyNames(u)
    };

    function F(a) {
        console && console.warn && console.warn(a)
    }
    var k = Number.isNaN || function(u) {
        return u !== u
    };

    function c() {
        c.init.call(this)
    }
    Ue.exports = c, Ue.exports.once = l, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
    var R = 10;

    function E(a) {
        if (typeof a != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof a)
    }
    Object.defineProperty(c, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return R
        },
        set: function(a) {
            if (typeof a != "number" || a < 0 || k(a)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + a + ".");
            R = a
        }
    }), c.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, c.prototype.setMaxListeners = function(u) {
        if (typeof u != "number" || u < 0 || k(u)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + u + ".");
        return this._maxListeners = u, this
    };

    function _(a) {
        return a._maxListeners === void 0 ? c.defaultMaxListeners : a._maxListeners
    }
    c.prototype.getMaxListeners = function() {
        return _(this)
    }, c.prototype.emit = function(u) {
        for (var y = [], b = 1; b < arguments.length; b++) y.push(arguments[b]);
        var v = u === "error",
            T = this._events;
        if (T !== void 0) v = v && T.error === void 0;
        else if (!v) return !1;
        if (v) {
            var D;
            if (y.length > 0 && (D = y[0]), D instanceof Error) throw D;
            var V = new Error("Unhandled error." + (D ? " (" + D.message + ")" : ""));
            throw V.context = D, V
        }
        var h = T[u];
        if (h === void 0) return !1;
        if (typeof h == "function") L(h, this, y);
        else
            for (var J = h.length, oe = U(h, J), b = 0; b < J; ++b) L(oe[b], this, y);
        return !0
    };

    function B(a, u, y, b) {
        var v, T, D;
        if (E(y), T = a._events, T === void 0 ? (T = a._events = Object.create(null), a._eventsCount = 0) : (T.newListener !== void 0 && (a.emit("newListener", u, y.listener ? y.listener : y), T = a._events), D = T[u]), D === void 0) D = T[u] = y, ++a._eventsCount;
        else if (typeof D == "function" ? D = T[u] = b ? [y, D] : [D, y] : b ? D.unshift(y) : D.push(y), v = _(a), v > 0 && D.length > v && !D.warned) {
            D.warned = !0;
            var V = new Error("Possible EventEmitter memory leak detected. " + D.length + " " + String(u) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            V.name = "MaxListenersExceededWarning", V.emitter = a, V.type = u, V.count = D.length, F(V)
        }
        return a
    }
    c.prototype.addListener = function(u, y) {
        return B(this, u, y, !1)
    }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(u, y) {
        return B(this, u, y, !0)
    };

    function P() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function C(a, u, y) {
        var b = {
                fired: !1,
                wrapFn: void 0,
                target: a,
                type: u,
                listener: y
            },
            v = P.bind(b);
        return v.listener = y, b.wrapFn = v, v
    }
    c.prototype.once = function(u, y) {
        return E(y), this.on(u, C(this, u, y)), this
    }, c.prototype.prependOnceListener = function(u, y) {
        return E(y), this.prependListener(u, C(this, u, y)), this
    }, c.prototype.removeListener = function(u, y) {
        var b, v, T, D, V;
        if (E(y), v = this._events, v === void 0) return this;
        if (b = v[u], b === void 0) return this;
        if (b === y || b.listener === y) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete v[u], v.removeListener && this.emit("removeListener", u, b.listener || y));
        else if (typeof b != "function") {
            for (T = -1, D = b.length - 1; D >= 0; D--)
                if (b[D] === y || b[D].listener === y) {
                    V = b[D].listener, T = D;
                    break
                } if (T < 0) return this;
            T === 0 ? b.shift() : S(b, T), b.length === 1 && (v[u] = b[0]), v.removeListener !== void 0 && this.emit("removeListener", u, V || y)
        }
        return this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(u) {
        var y, b, v;
        if (b = this._events, b === void 0) return this;
        if (b.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : b[u] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete b[u]), this;
        if (arguments.length === 0) {
            var T = Object.keys(b),
                D;
            for (v = 0; v < T.length; ++v) D = T[v], D !== "removeListener" && this.removeAllListeners(D);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (y = b[u], typeof y == "function") this.removeListener(u, y);
        else if (y !== void 0)
            for (v = y.length - 1; v >= 0; v--) this.removeListener(u, y[v]);
        return this
    };

    function A(a, u, y) {
        var b = a._events;
        if (b === void 0) return [];
        var v = b[u];
        return v === void 0 ? [] : typeof v == "function" ? y ? [v.listener || v] : [v] : y ? O(v) : U(v, v.length)
    }
    c.prototype.listeners = function(u) {
        return A(this, u, !0)
    }, c.prototype.rawListeners = function(u) {
        return A(this, u, !1)
    }, c.listenerCount = function(a, u) {
        return typeof a.listenerCount == "function" ? a.listenerCount(u) : q.call(a, u)
    }, c.prototype.listenerCount = q;

    function q(a) {
        var u = this._events;
        if (u !== void 0) {
            var y = u[a];
            if (typeof y == "function") return 1;
            if (y !== void 0) return y.length
        }
        return 0
    }
    c.prototype.eventNames = function() {
        return this._eventsCount > 0 ? I(this._events) : []
    };

    function U(a, u) {
        for (var y = new Array(u), b = 0; b < u; ++b) y[b] = a[b];
        return y
    }

    function S(a, u) {
        for (; u + 1 < a.length; u++) a[u] = a[u + 1];
        a.pop()
    }

    function O(a) {
        for (var u = new Array(a.length), y = 0; y < u.length; ++y) u[y] = a[y].listener || a[y];
        return u
    }

    function l(a, u) {
        return new Promise(function(y, b) {
            function v(D) {
                a.removeListener(u, T), b(D)
            }

            function T() {
                typeof a.removeListener == "function" && a.removeListener("error", v), y([].slice.call(arguments))
            }
            g(a, u, T, {
                once: !0
            }), u !== "error" && s(a, v, {
                once: !0
            })
        })
    }

    function s(a, u, y) {
        typeof a.on == "function" && g(a, "error", u, y)
    }

    function g(a, u, y, b) {
        if (typeof a.on == "function") b.once ? a.once(u, y) : a.on(u, y);
        else if (typeof a.addEventListener == "function") a.addEventListener(u, function v(T) {
            b.once && a.removeEventListener(u, v), y(T)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof a)
    }
    return Ue.exports
}
var He, pt;

function Ct() {
    return pt || (pt = 1, He = at().EventEmitter), He
}
var $e, yt;

function Xt() {
    if (yt) return $e;
    yt = 1;

    function N(U, S) {
        var O = Object.keys(U);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(U);
            S && (l = l.filter(function(s) {
                return Object.getOwnPropertyDescriptor(U, s).enumerable
            })), O.push.apply(O, l)
        }
        return O
    }

    function L(U) {
        for (var S = 1; S < arguments.length; S++) {
            var O = arguments[S] != null ? arguments[S] : {};
            S % 2 ? N(Object(O), !0).forEach(function(l) {
                I(U, l, O[l])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(O)) : N(Object(O)).forEach(function(l) {
                Object.defineProperty(U, l, Object.getOwnPropertyDescriptor(O, l))
            })
        }
        return U
    }

    function I(U, S, O) {
        return S = R(S), S in U ? Object.defineProperty(U, S, {
            value: O,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : U[S] = O, U
    }

    function F(U, S) {
        if (!(U instanceof S)) throw new TypeError("Cannot call a class as a function")
    }

    function k(U, S) {
        for (var O = 0; O < S.length; O++) {
            var l = S[O];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(U, R(l.key), l)
        }
    }

    function c(U, S, O) {
        return S && k(U.prototype, S), Object.defineProperty(U, "prototype", {
            writable: !1
        }), U
    }

    function R(U) {
        var S = E(U, "string");
        return typeof S == "symbol" ? S : String(S)
    }

    function E(U, S) {
        if (typeof U != "object" || U === null) return U;
        var O = U[Symbol.toPrimitive];
        if (O !== void 0) {
            var l = O.call(U, S);
            if (typeof l != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(U)
    }
    var _ = Fe(),
        B = _.Buffer,
        P = Nt(),
        C = P.inspect,
        A = C && C.custom || "inspect";

    function q(U, S, O) {
        B.prototype.copy.call(U, S, O)
    }
    return $e = function() {
        function U() {
            F(this, U), this.head = null, this.tail = null, this.length = 0
        }
        return c(U, [{
            key: "push",
            value: function(O) {
                var l = {
                    data: O,
                    next: null
                };
                this.length > 0 ? this.tail.next = l : this.head = l, this.tail = l, ++this.length
            }
        }, {
            key: "unshift",
            value: function(O) {
                var l = {
                    data: O,
                    next: this.head
                };
                this.length === 0 && (this.tail = l), this.head = l, ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (this.length !== 0) {
                    var O = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, O
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function(O) {
                if (this.length === 0) return "";
                for (var l = this.head, s = "" + l.data; l = l.next;) s += O + l.data;
                return s
            }
        }, {
            key: "concat",
            value: function(O) {
                if (this.length === 0) return B.alloc(0);
                for (var l = B.allocUnsafe(O >>> 0), s = this.head, g = 0; s;) q(s.data, l, g), g += s.data.length, s = s.next;
                return l
            }
        }, {
            key: "consume",
            value: function(O, l) {
                var s;
                return O < this.head.data.length ? (s = this.head.data.slice(0, O), this.head.data = this.head.data.slice(O)) : O === this.head.data.length ? s = this.shift() : s = l ? this._getString(O) : this._getBuffer(O), s
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(O) {
                var l = this.head,
                    s = 1,
                    g = l.data;
                for (O -= g.length; l = l.next;) {
                    var a = l.data,
                        u = O > a.length ? a.length : O;
                    if (u === a.length ? g += a : g += a.slice(0, O), O -= u, O === 0) {
                        u === a.length ? (++s, l.next ? this.head = l.next : this.head = this.tail = null) : (this.head = l, l.data = a.slice(u));
                        break
                    }++s
                }
                return this.length -= s, g
            }
        }, {
            key: "_getBuffer",
            value: function(O) {
                var l = B.allocUnsafe(O),
                    s = this.head,
                    g = 1;
                for (s.data.copy(l), O -= s.data.length; s = s.next;) {
                    var a = s.data,
                        u = O > a.length ? a.length : O;
                    if (a.copy(l, l.length - O, 0, u), O -= u, O === 0) {
                        u === a.length ? (++g, s.next ? this.head = s.next : this.head = this.tail = null) : (this.head = s, s.data = a.slice(u));
                        break
                    }++g
                }
                return this.length -= g, l
            }
        }, {
            key: A,
            value: function(O, l) {
                return C(this, L(L({}, l), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]), U
    }(), $e
}
var Ge, gt;

function Ut() {
    if (gt) return Ge;
    gt = 1;

    function N(R, E) {
        var _ = this,
            B = this._readableState && this._readableState.destroyed,
            P = this._writableState && this._writableState.destroyed;
        return B || P ? (E ? E(R) : R && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, $.nextTick(k, this, R)) : $.nextTick(k, this, R)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(R || null, function(C) {
            !E && C ? _._writableState ? _._writableState.errorEmitted ? $.nextTick(I, _) : (_._writableState.errorEmitted = !0, $.nextTick(L, _, C)) : $.nextTick(L, _, C) : E ? ($.nextTick(I, _), E(C)) : $.nextTick(I, _)
        }), this)
    }

    function L(R, E) {
        k(R, E), I(R)
    }

    function I(R) {
        R._writableState && !R._writableState.emitClose || R._readableState && !R._readableState.emitClose || R.emit("close")
    }

    function F() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function k(R, E) {
        R.emit("error", E)
    }

    function c(R, E) {
        var _ = R._readableState,
            B = R._writableState;
        _ && _.autoDestroy || B && B.autoDestroy ? R.destroy(E) : R.emit("error", E)
    }
    return Ge = {
        destroy: N,
        undestroy: F,
        errorOrDestroy: c
    }, Ge
}
var Ye = {},
    wt;

function Ae() {
    if (wt) return Ye;
    wt = 1;

    function N(E, _) {
        E.prototype = Object.create(_.prototype), E.prototype.constructor = E, E.__proto__ = _
    }
    var L = {};

    function I(E, _, B) {
        B || (B = Error);

        function P(A, q, U) {
            return typeof _ == "string" ? _ : _(A, q, U)
        }
        var C = function(A) {
            N(q, A);

            function q(U, S, O) {
                return A.call(this, P(U, S, O)) || this
            }
            return q
        }(B);
        C.prototype.name = B.name, C.prototype.code = E, L[E] = C
    }

    function F(E, _) {
        if (Array.isArray(E)) {
            var B = E.length;
            return E = E.map(function(P) {
                return String(P)
            }), B > 2 ? "one of ".concat(_, " ").concat(E.slice(0, B - 1).join(", "), ", or ") + E[B - 1] : B === 2 ? "one of ".concat(_, " ").concat(E[0], " or ").concat(E[1]) : "of ".concat(_, " ").concat(E[0])
        } else return "of ".concat(_, " ").concat(String(E))
    }

    function k(E, _, B) {
        return E.substr(0, _.length) === _
    }

    function c(E, _, B) {
        return (B === void 0 || B > E.length) && (B = E.length), E.substring(B - _.length, B) === _
    }

    function R(E, _, B) {
        return typeof B != "number" && (B = 0), B + _.length > E.length ? !1 : E.indexOf(_, B) !== -1
    }
    return I("ERR_INVALID_OPT_VALUE", function(E, _) {
        return 'The value "' + _ + '" is invalid for option "' + E + '"'
    }, TypeError), I("ERR_INVALID_ARG_TYPE", function(E, _, B) {
        var P;
        typeof _ == "string" && k(_, "not ") ? (P = "must not be", _ = _.replace(/^not /, "")) : P = "must be";
        var C;
        if (c(E, " argument")) C = "The ".concat(E, " ").concat(P, " ").concat(F(_, "type"));
        else {
            var A = R(E, ".") ? "property" : "argument";
            C = 'The "'.concat(E, '" ').concat(A, " ").concat(P, " ").concat(F(_, "type"))
        }
        return C += ". Received type ".concat(typeof B), C
    }, TypeError), I("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), I("ERR_METHOD_NOT_IMPLEMENTED", function(E) {
        return "The " + E + " method is not implemented"
    }), I("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), I("ERR_STREAM_DESTROYED", function(E) {
        return "Cannot call " + E + " after a stream was destroyed"
    }), I("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), I("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), I("ERR_STREAM_WRITE_AFTER_END", "write after end"), I("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), I("ERR_UNKNOWN_ENCODING", function(E) {
        return "Unknown encoding: " + E
    }, TypeError), I("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Ye.codes = L, Ye
}
var Ve, _t;

function Pt() {
    if (_t) return Ve;
    _t = 1;
    var N = Ae().codes.ERR_INVALID_OPT_VALUE;

    function L(F, k, c) {
        return F.highWaterMark != null ? F.highWaterMark : k ? F[c] : null
    }

    function I(F, k, c, R) {
        var E = L(k, R, c);
        if (E != null) {
            if (!(isFinite(E) && Math.floor(E) === E) || E < 0) {
                var _ = R ? c : "highWaterMark";
                throw new N(_, E)
            }
            return Math.floor(E)
        }
        return F.objectMode ? 16 : 16 * 1024
    }
    return Ve = {
        getHighWaterMark: I
    }, Ve
}
var Ke, Et;

function Jt() {
    if (Et) return Ke;
    Et = 1, Ke = N;

    function N(I, F) {
        if (L("noDeprecation")) return I;
        var k = !1;

        function c() {
            if (!k) {
                if (L("throwDeprecation")) throw new Error(F);
                L("traceDeprecation") ? console.trace(F) : console.warn(F), k = !0
            }
            return I.apply(this, arguments)
        }
        return c
    }

    function L(I) {
        try {
            if (!xe.localStorage) return !1
        } catch {
            return !1
        }
        var F = xe.localStorage[I];
        return F == null ? !1 : String(F).toLowerCase() === "true"
    }
    return Ke
}
var Xe, bt;

function Dt() {
    if (bt) return Xe;
    bt = 1, Xe = v;

    function N(p) {
        var d = this;
        this.next = null, this.entry = null, this.finish = function() {
            Ie(d, p)
        }
    }
    var L;
    v.WritableState = y;
    var I = {
            deprecate: Jt()
        },
        F = Ct(),
        k = Fe().Buffer,
        c = (typeof xe < "u" ? xe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function R(p) {
        return k.from(p)
    }

    function E(p) {
        return k.isBuffer(p) || p instanceof c
    }
    var _ = Ut(),
        B = Pt(),
        P = B.getHighWaterMark,
        C = Ae().codes,
        A = C.ERR_INVALID_ARG_TYPE,
        q = C.ERR_METHOD_NOT_IMPLEMENTED,
        U = C.ERR_MULTIPLE_CALLBACK,
        S = C.ERR_STREAM_CANNOT_PIPE,
        O = C.ERR_STREAM_DESTROYED,
        l = C.ERR_STREAM_NULL_VALUES,
        s = C.ERR_STREAM_WRITE_AFTER_END,
        g = C.ERR_UNKNOWN_ENCODING,
        a = _.errorOrDestroy;
    Te()(v, F);

    function u() {}

    function y(p, d, M) {
        L = L || Be(), p = p || {}, typeof M != "boolean" && (M = d instanceof L), this.objectMode = !!p.objectMode, M && (this.objectMode = this.objectMode || !!p.writableObjectMode), this.highWaterMark = P(this, p, "writableHighWaterMark", M), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var W = p.decodeStrings === !1;
        this.decodeStrings = !W, this.defaultEncoding = p.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(G) {
            ae(d, G)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = p.emitClose !== !1, this.autoDestroy = !!p.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new N(this)
    }
    y.prototype.getBuffer = function() {
            for (var d = this.bufferedRequest, M = []; d;) M.push(d), d = d.next;
            return M
        },
        function() {
            try {
                Object.defineProperty(y.prototype, "buffer", {
                    get: I.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch {}
        }();
    var b;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (b = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
        value: function(d) {
            return b.call(this, d) ? !0 : this !== v ? !1 : d && d._writableState instanceof y
        }
    })) : b = function(d) {
        return d instanceof this
    };

    function v(p) {
        L = L || Be();
        var d = this instanceof L;
        if (!d && !b.call(v, this)) return new v(p);
        this._writableState = new y(p, this, d), this.writable = !0, p && (typeof p.write == "function" && (this._write = p.write), typeof p.writev == "function" && (this._writev = p.writev), typeof p.destroy == "function" && (this._destroy = p.destroy), typeof p.final == "function" && (this._final = p.final)), F.call(this)
    }
    v.prototype.pipe = function() {
        a(this, new S)
    };

    function T(p, d) {
        var M = new s;
        a(p, M), $.nextTick(d, M)
    }

    function D(p, d, M, W) {
        var G;
        return M === null ? G = new l : typeof M != "string" && !d.objectMode && (G = new A("chunk", ["string", "Buffer"], M)), G ? (a(p, G), $.nextTick(W, G), !1) : !0
    }
    v.prototype.write = function(p, d, M) {
        var W = this._writableState,
            G = !1,
            i = !W.objectMode && E(p);
        return i && !k.isBuffer(p) && (p = R(p)), typeof d == "function" && (M = d, d = null), i ? d = "buffer" : d || (d = W.defaultEncoding), typeof M != "function" && (M = u), W.ending ? T(this, M) : (i || D(this, W, p, M)) && (W.pendingcb++, G = h(this, W, i, p, d, M)), G
    }, v.prototype.cork = function() {
        this._writableState.corked++
    }, v.prototype.uncork = function() {
        var p = this._writableState;
        p.corked && (p.corked--, !p.writing && !p.corked && !p.bufferProcessing && p.bufferedRequest && de(this, p))
    }, v.prototype.setDefaultEncoding = function(d) {
        if (typeof d == "string" && (d = d.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((d + "").toLowerCase()) > -1)) throw new g(d);
        return this._writableState.defaultEncoding = d, this
    }, Object.defineProperty(v.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    });

    function V(p, d, M) {
        return !p.objectMode && p.decodeStrings !== !1 && typeof d == "string" && (d = k.from(d, M)), d
    }
    Object.defineProperty(v.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function h(p, d, M, W, G, i) {
        if (!M) {
            var o = V(d, W, G);
            W !== o && (M = !0, G = "buffer", W = o)
        }
        var x = d.objectMode ? 1 : W.length;
        d.length += x;
        var j = d.length < d.highWaterMark;
        if (j || (d.needDrain = !0), d.writing || d.corked) {
            var z = d.lastBufferedRequest;
            d.lastBufferedRequest = {
                chunk: W,
                encoding: G,
                isBuf: M,
                callback: i,
                next: null
            }, z ? z.next = d.lastBufferedRequest : d.bufferedRequest = d.lastBufferedRequest, d.bufferedRequestCount += 1
        } else J(p, d, !1, x, W, G, i);
        return j
    }

    function J(p, d, M, W, G, i, o) {
        d.writelen = W, d.writecb = o, d.writing = !0, d.sync = !0, d.destroyed ? d.onwrite(new O("write")) : M ? p._writev(G, d.onwrite) : p._write(G, i, d.onwrite), d.sync = !1
    }

    function oe(p, d, M, W, G) {
        --d.pendingcb, M ? ($.nextTick(G, W), $.nextTick(le, p, d), p._writableState.errorEmitted = !0, a(p, W)) : (G(W), p._writableState.errorEmitted = !0, a(p, W), le(p, d))
    }

    function ne(p) {
        p.writing = !1, p.writecb = null, p.length -= p.writelen, p.writelen = 0
    }

    function ae(p, d) {
        var M = p._writableState,
            W = M.sync,
            G = M.writecb;
        if (typeof G != "function") throw new U;
        if (ne(M), d) oe(p, M, W, d, G);
        else {
            var i = pe(M) || p.destroyed;
            !i && !M.corked && !M.bufferProcessing && M.bufferedRequest && de(p, M), W ? $.nextTick(fe, p, M, i, G) : fe(p, M, i, G)
        }
    }

    function fe(p, d, M, W) {
        M || ce(p, d), d.pendingcb--, W(), le(p, d)
    }

    function ce(p, d) {
        d.length === 0 && d.needDrain && (d.needDrain = !1, p.emit("drain"))
    }

    function de(p, d) {
        d.bufferProcessing = !0;
        var M = d.bufferedRequest;
        if (p._writev && M && M.next) {
            var W = d.bufferedRequestCount,
                G = new Array(W),
                i = d.corkedRequestsFree;
            i.entry = M;
            for (var o = 0, x = !0; M;) G[o] = M, M.isBuf || (x = !1), M = M.next, o += 1;
            G.allBuffers = x, J(p, d, !0, d.length, G, "", i.finish), d.pendingcb++, d.lastBufferedRequest = null, i.next ? (d.corkedRequestsFree = i.next, i.next = null) : d.corkedRequestsFree = new N(d), d.bufferedRequestCount = 0
        } else {
            for (; M;) {
                var j = M.chunk,
                    z = M.encoding,
                    H = M.callback,
                    K = d.objectMode ? 1 : j.length;
                if (J(p, d, !1, K, j, z, H), M = M.next, d.bufferedRequestCount--, d.writing) break
            }
            M === null && (d.lastBufferedRequest = null)
        }
        d.bufferedRequest = M, d.bufferProcessing = !1
    }
    v.prototype._write = function(p, d, M) {
        M(new q("_write()"))
    }, v.prototype._writev = null, v.prototype.end = function(p, d, M) {
        var W = this._writableState;
        return typeof p == "function" ? (M = p, p = null, d = null) : typeof d == "function" && (M = d, d = null), p != null && this.write(p, d), W.corked && (W.corked = 1, this.uncork()), W.ending || Ee(this, W, M), this
    }, Object.defineProperty(v.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function pe(p) {
        return p.ending && p.length === 0 && p.bufferedRequest === null && !p.finished && !p.writing
    }

    function Le(p, d) {
        p._final(function(M) {
            d.pendingcb--, M && a(p, M), d.prefinished = !0, p.emit("prefinish"), le(p, d)
        })
    }

    function ye(p, d) {
        !d.prefinished && !d.finalCalled && (typeof p._final == "function" && !d.destroyed ? (d.pendingcb++, d.finalCalled = !0, $.nextTick(Le, p, d)) : (d.prefinished = !0, p.emit("prefinish")))
    }

    function le(p, d) {
        var M = pe(d);
        if (M && (ye(p, d), d.pendingcb === 0 && (d.finished = !0, p.emit("finish"), d.autoDestroy))) {
            var W = p._readableState;
            (!W || W.autoDestroy && W.endEmitted) && p.destroy()
        }
        return M
    }

    function Ee(p, d, M) {
        d.ending = !0, le(p, d), M && (d.finished ? $.nextTick(M) : p.once("finish", M)), d.ended = !0, p.writable = !1
    }

    function Ie(p, d, M) {
        var W = p.entry;
        for (p.entry = null; W;) {
            var G = W.callback;
            d.pendingcb--, G(M), W = W.next
        }
        d.corkedRequestsFree.next = p
    }
    return Object.defineProperty(v.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(d) {
            this._writableState && (this._writableState.destroyed = d)
        }
    }), v.prototype.destroy = _.destroy, v.prototype._undestroy = _.undestroy, v.prototype._destroy = function(p, d) {
        d(p)
    }, Xe
}
var Je, vt;

function Be() {
    if (vt) return Je;
    vt = 1;
    var N = Object.keys || function(B) {
        var P = [];
        for (var C in B) P.push(C);
        return P
    };
    Je = R;
    var L = kt(),
        I = Dt();
    Te()(R, L);
    for (var F = N(I.prototype), k = 0; k < F.length; k++) {
        var c = F[k];
        R.prototype[c] || (R.prototype[c] = I.prototype[c])
    }

    function R(B) {
        if (!(this instanceof R)) return new R(B);
        L.call(this, B), I.call(this, B), this.allowHalfOpen = !0, B && (B.readable === !1 && (this.readable = !1), B.writable === !1 && (this.writable = !1), B.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", E)))
    }
    Object.defineProperty(R.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(R.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }), Object.defineProperty(R.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function E() {
        this._writableState.ended || $.nextTick(_, this)
    }

    function _(B) {
        B.end()
    }
    return Object.defineProperty(R.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(P) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = P, this._writableState.destroyed = P)
        }
    }), Je
}
var ze = {},
    mt;

function Rt() {
    if (mt) return ze;
    mt = 1;
    var N = Kt().Buffer,
        L = N.isEncoding || function(l) {
            switch (l = "" + l, l && l.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function I(l) {
        if (!l) return "utf8";
        for (var s;;) switch (l) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return l;
            default:
                if (s) return;
                l = ("" + l).toLowerCase(), s = !0
        }
    }

    function F(l) {
        var s = I(l);
        if (typeof s != "string" && (N.isEncoding === L || !L(l))) throw new Error("Unknown encoding: " + l);
        return s || l
    }
    ze.StringDecoder = k;

    function k(l) {
        this.encoding = F(l);
        var s;
        switch (this.encoding) {
            case "utf16le":
                this.text = C, this.end = A, s = 4;
                break;
            case "utf8":
                this.fillLast = _, s = 4;
                break;
            case "base64":
                this.text = q, this.end = U, s = 3;
                break;
            default:
                this.write = S, this.end = O;
                return
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = N.allocUnsafe(s)
    }
    k.prototype.write = function(l) {
        if (l.length === 0) return "";
        var s, g;
        if (this.lastNeed) {
            if (s = this.fillLast(l), s === void 0) return "";
            g = this.lastNeed, this.lastNeed = 0
        } else g = 0;
        return g < l.length ? s ? s + this.text(l, g) : this.text(l, g) : s || ""
    }, k.prototype.end = P, k.prototype.text = B, k.prototype.fillLast = function(l) {
        if (this.lastNeed <= l.length) return l.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        l.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, l.length), this.lastNeed -= l.length
    };

    function c(l) {
        return l <= 127 ? 0 : l >> 5 === 6 ? 2 : l >> 4 === 14 ? 3 : l >> 3 === 30 ? 4 : l >> 6 === 2 ? -1 : -2
    }

    function R(l, s, g) {
        var a = s.length - 1;
        if (a < g) return 0;
        var u = c(s[a]);
        return u >= 0 ? (u > 0 && (l.lastNeed = u - 1), u) : --a < g || u === -2 ? 0 : (u = c(s[a]), u >= 0 ? (u > 0 && (l.lastNeed = u - 2), u) : --a < g || u === -2 ? 0 : (u = c(s[a]), u >= 0 ? (u > 0 && (u === 2 ? u = 0 : l.lastNeed = u - 3), u) : 0))
    }

    function E(l, s, g) {
        if ((s[0] & 192) !== 128) return l.lastNeed = 0, "�";
        if (l.lastNeed > 1 && s.length > 1) {
            if ((s[1] & 192) !== 128) return l.lastNeed = 1, "�";
            if (l.lastNeed > 2 && s.length > 2 && (s[2] & 192) !== 128) return l.lastNeed = 2, "�"
        }
    }

    function _(l) {
        var s = this.lastTotal - this.lastNeed,
            g = E(this, l);
        if (g !== void 0) return g;
        if (this.lastNeed <= l.length) return l.copy(this.lastChar, s, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        l.copy(this.lastChar, s, 0, l.length), this.lastNeed -= l.length
    }

    function B(l, s) {
        var g = R(this, l, s);
        if (!this.lastNeed) return l.toString("utf8", s);
        this.lastTotal = g;
        var a = l.length - (g - this.lastNeed);
        return l.copy(this.lastChar, 0, a), l.toString("utf8", s, a)
    }

    function P(l) {
        var s = l && l.length ? this.write(l) : "";
        return this.lastNeed ? s + "�" : s
    }

    function C(l, s) {
        if ((l.length - s) % 2 === 0) {
            var g = l.toString("utf16le", s);
            if (g) {
                var a = g.charCodeAt(g.length - 1);
                if (a >= 55296 && a <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = l[l.length - 2], this.lastChar[1] = l[l.length - 1], g.slice(0, -1)
            }
            return g
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = l[l.length - 1], l.toString("utf16le", s, l.length - 1)
    }

    function A(l) {
        var s = l && l.length ? this.write(l) : "";
        if (this.lastNeed) {
            var g = this.lastTotal - this.lastNeed;
            return s + this.lastChar.toString("utf16le", 0, g)
        }
        return s
    }

    function q(l, s) {
        var g = (l.length - s) % 3;
        return g === 0 ? l.toString("base64", s) : (this.lastNeed = 3 - g, this.lastTotal = 3, g === 1 ? this.lastChar[0] = l[l.length - 1] : (this.lastChar[0] = l[l.length - 2], this.lastChar[1] = l[l.length - 1]), l.toString("base64", s, l.length - g))
    }

    function U(l) {
        var s = l && l.length ? this.write(l) : "";
        return this.lastNeed ? s + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : s
    }

    function S(l) {
        return l.toString(this.encoding)
    }

    function O(l) {
        return l && l.length ? this.write(l) : ""
    }
    return ze
}
var Ze, St;

function ft() {
    if (St) return Ze;
    St = 1;
    var N = Ae().codes.ERR_STREAM_PREMATURE_CLOSE;

    function L(c) {
        var R = !1;
        return function() {
            if (!R) {
                R = !0;
                for (var E = arguments.length, _ = new Array(E), B = 0; B < E; B++) _[B] = arguments[B];
                c.apply(this, _)
            }
        }
    }

    function I() {}

    function F(c) {
        return c.setHeader && typeof c.abort == "function"
    }

    function k(c, R, E) {
        if (typeof R == "function") return k(c, null, R);
        R || (R = {}), E = L(E || I);
        var _ = R.readable || R.readable !== !1 && c.readable,
            B = R.writable || R.writable !== !1 && c.writable,
            P = function() {
                c.writable || A()
            },
            C = c._writableState && c._writableState.finished,
            A = function() {
                B = !1, C = !0, _ || E.call(c)
            },
            q = c._readableState && c._readableState.endEmitted,
            U = function() {
                _ = !1, q = !0, B || E.call(c)
            },
            S = function(g) {
                E.call(c, g)
            },
            O = function() {
                var g;
                if (_ && !q) return (!c._readableState || !c._readableState.ended) && (g = new N), E.call(c, g);
                if (B && !C) return (!c._writableState || !c._writableState.ended) && (g = new N), E.call(c, g)
            },
            l = function() {
                c.req.on("finish", A)
            };
        return F(c) ? (c.on("complete", A), c.on("abort", O), c.req ? l() : c.on("request", l)) : B && !c._writableState && (c.on("end", P), c.on("close", P)), c.on("end", U), c.on("finish", A), R.error !== !1 && c.on("error", S), c.on("close", O),
            function() {
                c.removeListener("complete", A), c.removeListener("abort", O), c.removeListener("request", l), c.req && c.req.removeListener("finish", A), c.removeListener("end", P), c.removeListener("close", P), c.removeListener("finish", A), c.removeListener("end", U), c.removeListener("error", S), c.removeListener("close", O)
            }
    }
    return Ze = k, Ze
}
var Qe, xt;

function zt() {
    if (xt) return Qe;
    xt = 1;
    var N;

    function L(g, a, u) {
        return a = I(a), a in g ? Object.defineProperty(g, a, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[a] = u, g
    }

    function I(g) {
        var a = F(g, "string");
        return typeof a == "symbol" ? a : String(a)
    }

    function F(g, a) {
        if (typeof g != "object" || g === null) return g;
        var u = g[Symbol.toPrimitive];
        if (u !== void 0) {
            var y = u.call(g, a);
            if (typeof y != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (a === "string" ? String : Number)(g)
    }
    var k = ft(),
        c = Symbol("lastResolve"),
        R = Symbol("lastReject"),
        E = Symbol("error"),
        _ = Symbol("ended"),
        B = Symbol("lastPromise"),
        P = Symbol("handlePromise"),
        C = Symbol("stream");

    function A(g, a) {
        return {
            value: g,
            done: a
        }
    }

    function q(g) {
        var a = g[c];
        if (a !== null) {
            var u = g[C].read();
            u !== null && (g[B] = null, g[c] = null, g[R] = null, a(A(u, !1)))
        }
    }

    function U(g) {
        $.nextTick(q, g)
    }

    function S(g, a) {
        return function(u, y) {
            g.then(function() {
                if (a[_]) {
                    u(A(void 0, !0));
                    return
                }
                a[P](u, y)
            }, y)
        }
    }
    var O = Object.getPrototypeOf(function() {}),
        l = Object.setPrototypeOf((N = {
            get stream() {
                return this[C]
            },
            next: function() {
                var a = this,
                    u = this[E];
                if (u !== null) return Promise.reject(u);
                if (this[_]) return Promise.resolve(A(void 0, !0));
                if (this[C].destroyed) return new Promise(function(T, D) {
                    $.nextTick(function() {
                        a[E] ? D(a[E]) : T(A(void 0, !0))
                    })
                });
                var y = this[B],
                    b;
                if (y) b = new Promise(S(y, this));
                else {
                    var v = this[C].read();
                    if (v !== null) return Promise.resolve(A(v, !1));
                    b = new Promise(this[P])
                }
                return this[B] = b, b
            }
        }, L(N, Symbol.asyncIterator, function() {
            return this
        }), L(N, "return", function() {
            var a = this;
            return new Promise(function(u, y) {
                a[C].destroy(null, function(b) {
                    if (b) {
                        y(b);
                        return
                    }
                    u(A(void 0, !0))
                })
            })
        }), N), O),
        s = function(a) {
            var u, y = Object.create(l, (u = {}, L(u, C, {
                value: a,
                writable: !0
            }), L(u, c, {
                value: null,
                writable: !0
            }), L(u, R, {
                value: null,
                writable: !0
            }), L(u, E, {
                value: null,
                writable: !0
            }), L(u, _, {
                value: a._readableState.endEmitted,
                writable: !0
            }), L(u, P, {
                value: function(v, T) {
                    var D = y[C].read();
                    D ? (y[B] = null, y[c] = null, y[R] = null, v(A(D, !1))) : (y[c] = v, y[R] = T)
                },
                writable: !0
            }), u));
            return y[B] = null, k(a, function(b) {
                if (b && b.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                    var v = y[R];
                    v !== null && (y[B] = null, y[c] = null, y[R] = null, v(b)), y[E] = b;
                    return
                }
                var T = y[c];
                T !== null && (y[B] = null, y[c] = null, y[R] = null, T(A(void 0, !0))), y[_] = !0
            }), a.on("readable", U.bind(null, y)), y
        };
    return Qe = s, Qe
}
var et, Bt;

function Zt() {
    return Bt || (Bt = 1, et = function() {
        throw new Error("Readable.from is not available in the browser")
    }), et
}
var tt, Tt;

function kt() {
    if (Tt) return tt;
    Tt = 1, tt = T;
    var N;
    T.ReadableState = v, at().EventEmitter;
    var L = function(o, x) {
            return o.listeners(x).length
        },
        I = Ct(),
        F = Fe().Buffer,
        k = (typeof xe < "u" ? xe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function c(i) {
        return F.from(i)
    }

    function R(i) {
        return F.isBuffer(i) || i instanceof k
    }
    var E = Nt(),
        _;
    E && E.debuglog ? _ = E.debuglog("stream") : _ = function() {};
    var B = Xt(),
        P = Ut(),
        C = Pt(),
        A = C.getHighWaterMark,
        q = Ae().codes,
        U = q.ERR_INVALID_ARG_TYPE,
        S = q.ERR_STREAM_PUSH_AFTER_EOF,
        O = q.ERR_METHOD_NOT_IMPLEMENTED,
        l = q.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        s, g, a;
    Te()(T, I);
    var u = P.errorOrDestroy,
        y = ["error", "close", "destroy", "pause", "resume"];

    function b(i, o, x) {
        if (typeof i.prependListener == "function") return i.prependListener(o, x);
        !i._events || !i._events[o] ? i.on(o, x) : Array.isArray(i._events[o]) ? i._events[o].unshift(x) : i._events[o] = [x, i._events[o]]
    }

    function v(i, o, x) {
        N = N || Be(), i = i || {}, typeof x != "boolean" && (x = o instanceof N), this.objectMode = !!i.objectMode, x && (this.objectMode = this.objectMode || !!i.readableObjectMode), this.highWaterMark = A(this, i, "readableHighWaterMark", x), this.buffer = new B, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = i.emitClose !== !1, this.autoDestroy = !!i.autoDestroy, this.destroyed = !1, this.defaultEncoding = i.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, i.encoding && (s || (s = Rt().StringDecoder), this.decoder = new s(i.encoding), this.encoding = i.encoding)
    }

    function T(i) {
        if (N = N || Be(), !(this instanceof T)) return new T(i);
        var o = this instanceof N;
        this._readableState = new v(i, this, o), this.readable = !0, i && (typeof i.read == "function" && (this._read = i.read), typeof i.destroy == "function" && (this._destroy = i.destroy)), I.call(this)
    }
    Object.defineProperty(T.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(o) {
            this._readableState && (this._readableState.destroyed = o)
        }
    }), T.prototype.destroy = P.destroy, T.prototype._undestroy = P.undestroy, T.prototype._destroy = function(i, o) {
        o(i)
    }, T.prototype.push = function(i, o) {
        var x = this._readableState,
            j;
        return x.objectMode ? j = !0 : typeof i == "string" && (o = o || x.defaultEncoding, o !== x.encoding && (i = F.from(i, o), o = ""), j = !0), D(this, i, o, !1, j)
    }, T.prototype.unshift = function(i) {
        return D(this, i, null, !0, !1)
    };

    function D(i, o, x, j, z) {
        _("readableAddChunk", o);
        var H = i._readableState;
        if (o === null) H.reading = !1, ae(i, H);
        else {
            var K;
            if (z || (K = h(H, o)), K) u(i, K);
            else if (H.objectMode || o && o.length > 0)
                if (typeof o != "string" && !H.objectMode && Object.getPrototypeOf(o) !== F.prototype && (o = c(o)), j) H.endEmitted ? u(i, new l) : V(i, H, o, !0);
                else if (H.ended) u(i, new S);
            else {
                if (H.destroyed) return !1;
                H.reading = !1, H.decoder && !x ? (o = H.decoder.write(o), H.objectMode || o.length !== 0 ? V(i, H, o, !1) : de(i, H)) : V(i, H, o, !1)
            } else j || (H.reading = !1, de(i, H))
        }
        return !H.ended && (H.length < H.highWaterMark || H.length === 0)
    }

    function V(i, o, x, j) {
        o.flowing && o.length === 0 && !o.sync ? (o.awaitDrain = 0, i.emit("data", x)) : (o.length += o.objectMode ? 1 : x.length, j ? o.buffer.unshift(x) : o.buffer.push(x), o.needReadable && fe(i)), de(i, o)
    }

    function h(i, o) {
        var x;
        return !R(o) && typeof o != "string" && o !== void 0 && !i.objectMode && (x = new U("chunk", ["string", "Buffer", "Uint8Array"], o)), x
    }
    T.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }, T.prototype.setEncoding = function(i) {
        s || (s = Rt().StringDecoder);
        var o = new s(i);
        this._readableState.decoder = o, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var x = this._readableState.buffer.head, j = ""; x !== null;) j += o.write(x.data), x = x.next;
        return this._readableState.buffer.clear(), j !== "" && this._readableState.buffer.push(j), this._readableState.length = j.length, this
    };
    var J = 1073741824;

    function oe(i) {
        return i >= J ? i = J : (i--, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i++), i
    }

    function ne(i, o) {
        return i <= 0 || o.length === 0 && o.ended ? 0 : o.objectMode ? 1 : i !== i ? o.flowing && o.length ? o.buffer.head.data.length : o.length : (i > o.highWaterMark && (o.highWaterMark = oe(i)), i <= o.length ? i : o.ended ? o.length : (o.needReadable = !0, 0))
    }
    T.prototype.read = function(i) {
        _("read", i), i = parseInt(i, 10);
        var o = this._readableState,
            x = i;
        if (i !== 0 && (o.emittedReadable = !1), i === 0 && o.needReadable && ((o.highWaterMark !== 0 ? o.length >= o.highWaterMark : o.length > 0) || o.ended)) return _("read: emitReadable", o.length, o.ended), o.length === 0 && o.ended ? M(this) : fe(this), null;
        if (i = ne(i, o), i === 0 && o.ended) return o.length === 0 && M(this), null;
        var j = o.needReadable;
        _("need readable", j), (o.length === 0 || o.length - i < o.highWaterMark) && (j = !0, _("length less than watermark", j)), o.ended || o.reading ? (j = !1, _("reading or ended", j)) : j && (_("do read"), o.reading = !0, o.sync = !0, o.length === 0 && (o.needReadable = !0), this._read(o.highWaterMark), o.sync = !1, o.reading || (i = ne(x, o)));
        var z;
        return i > 0 ? z = d(i, o) : z = null, z === null ? (o.needReadable = o.length <= o.highWaterMark, i = 0) : (o.length -= i, o.awaitDrain = 0), o.length === 0 && (o.ended || (o.needReadable = !0), x !== i && o.ended && M(this)), z !== null && this.emit("data", z), z
    };

    function ae(i, o) {
        if (_("onEofChunk"), !o.ended) {
            if (o.decoder) {
                var x = o.decoder.end();
                x && x.length && (o.buffer.push(x), o.length += o.objectMode ? 1 : x.length)
            }
            o.ended = !0, o.sync ? fe(i) : (o.needReadable = !1, o.emittedReadable || (o.emittedReadable = !0, ce(i)))
        }
    }

    function fe(i) {
        var o = i._readableState;
        _("emitReadable", o.needReadable, o.emittedReadable), o.needReadable = !1, o.emittedReadable || (_("emitReadable", o.flowing), o.emittedReadable = !0, $.nextTick(ce, i))
    }

    function ce(i) {
        var o = i._readableState;
        _("emitReadable_", o.destroyed, o.length, o.ended), !o.destroyed && (o.length || o.ended) && (i.emit("readable"), o.emittedReadable = !1), o.needReadable = !o.flowing && !o.ended && o.length <= o.highWaterMark, p(i)
    }

    function de(i, o) {
        o.readingMore || (o.readingMore = !0, $.nextTick(pe, i, o))
    }

    function pe(i, o) {
        for (; !o.reading && !o.ended && (o.length < o.highWaterMark || o.flowing && o.length === 0);) {
            var x = o.length;
            if (_("maybeReadMore read 0"), i.read(0), x === o.length) break
        }
        o.readingMore = !1
    }
    T.prototype._read = function(i) {
        u(this, new O("_read()"))
    }, T.prototype.pipe = function(i, o) {
        var x = this,
            j = this._readableState;
        switch (j.pipesCount) {
            case 0:
                j.pipes = i;
                break;
            case 1:
                j.pipes = [j.pipes, i];
                break;
            default:
                j.pipes.push(i);
                break
        }
        j.pipesCount += 1, _("pipe count=%d opts=%j", j.pipesCount, o);
        var z = (!o || o.end !== !1) && i !== $.stdout && i !== $.stderr,
            H = z ? ge : we;
        j.endEmitted ? $.nextTick(H) : x.once("end", H), i.on("unpipe", K);

        function K(se, he) {
            _("onunpipe"), se === x && he && he.hasUnpiped === !1 && (he.hasUnpiped = !0, De())
        }

        function ge() {
            _("onend"), i.end()
        }
        var be = Le(x);
        i.on("drain", be);
        var Oe = !1;

        function De() {
            _("cleanup"), i.removeListener("close", ve), i.removeListener("finish", me), i.removeListener("drain", be), i.removeListener("error", re), i.removeListener("unpipe", K), x.removeListener("end", ge), x.removeListener("end", we), x.removeListener("data", te), Oe = !0, j.awaitDrain && (!i._writableState || i._writableState.needDrain) && be()
        }
        x.on("data", te);

        function te(se) {
            _("ondata");
            var he = i.write(se);
            _("dest.write", he), he === !1 && ((j.pipesCount === 1 && j.pipes === i || j.pipesCount > 1 && G(j.pipes, i) !== -1) && !Oe && (_("false write response, pause", j.awaitDrain), j.awaitDrain++), x.pause())
        }

        function re(se) {
            _("onerror", se), we(), i.removeListener("error", re), L(i, "error") === 0 && u(i, se)
        }
        b(i, "error", re);

        function ve() {
            i.removeListener("finish", me), we()
        }
        i.once("close", ve);

        function me() {
            _("onfinish"), i.removeListener("close", ve), we()
        }
        i.once("finish", me);

        function we() {
            _("unpipe"), x.unpipe(i)
        }
        return i.emit("pipe", x), j.flowing || (_("pipe resume"), x.resume()), i
    };

    function Le(i) {
        return function() {
            var x = i._readableState;
            _("pipeOnDrain", x.awaitDrain), x.awaitDrain && x.awaitDrain--, x.awaitDrain === 0 && L(i, "data") && (x.flowing = !0, p(i))
        }
    }
    T.prototype.unpipe = function(i) {
        var o = this._readableState,
            x = {
                hasUnpiped: !1
            };
        if (o.pipesCount === 0) return this;
        if (o.pipesCount === 1) return i && i !== o.pipes ? this : (i || (i = o.pipes), o.pipes = null, o.pipesCount = 0, o.flowing = !1, i && i.emit("unpipe", this, x), this);
        if (!i) {
            var j = o.pipes,
                z = o.pipesCount;
            o.pipes = null, o.pipesCount = 0, o.flowing = !1;
            for (var H = 0; H < z; H++) j[H].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var K = G(o.pipes, i);
        return K === -1 ? this : (o.pipes.splice(K, 1), o.pipesCount -= 1, o.pipesCount === 1 && (o.pipes = o.pipes[0]), i.emit("unpipe", this, x), this)
    }, T.prototype.on = function(i, o) {
        var x = I.prototype.on.call(this, i, o),
            j = this._readableState;
        return i === "data" ? (j.readableListening = this.listenerCount("readable") > 0, j.flowing !== !1 && this.resume()) : i === "readable" && !j.endEmitted && !j.readableListening && (j.readableListening = j.needReadable = !0, j.flowing = !1, j.emittedReadable = !1, _("on readable", j.length, j.reading), j.length ? fe(this) : j.reading || $.nextTick(le, this)), x
    }, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(i, o) {
        var x = I.prototype.removeListener.call(this, i, o);
        return i === "readable" && $.nextTick(ye, this), x
    }, T.prototype.removeAllListeners = function(i) {
        var o = I.prototype.removeAllListeners.apply(this, arguments);
        return (i === "readable" || i === void 0) && $.nextTick(ye, this), o
    };

    function ye(i) {
        var o = i._readableState;
        o.readableListening = i.listenerCount("readable") > 0, o.resumeScheduled && !o.paused ? o.flowing = !0 : i.listenerCount("data") > 0 && i.resume()
    }

    function le(i) {
        _("readable nexttick read 0"), i.read(0)
    }
    T.prototype.resume = function() {
        var i = this._readableState;
        return i.flowing || (_("resume"), i.flowing = !i.readableListening, Ee(this, i)), i.paused = !1, this
    };

    function Ee(i, o) {
        o.resumeScheduled || (o.resumeScheduled = !0, $.nextTick(Ie, i, o))
    }

    function Ie(i, o) {
        _("resume", o.reading), o.reading || i.read(0), o.resumeScheduled = !1, i.emit("resume"), p(i), o.flowing && !o.reading && i.read(0)
    }
    T.prototype.pause = function() {
        return _("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (_("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    };

    function p(i) {
        var o = i._readableState;
        for (_("flow", o.flowing); o.flowing && i.read() !== null;);
    }
    T.prototype.wrap = function(i) {
        var o = this,
            x = this._readableState,
            j = !1;
        i.on("end", function() {
            if (_("wrapped end"), x.decoder && !x.ended) {
                var K = x.decoder.end();
                K && K.length && o.push(K)
            }
            o.push(null)
        }), i.on("data", function(K) {
            if (_("wrapped data"), x.decoder && (K = x.decoder.write(K)), !(x.objectMode && K == null) && !(!x.objectMode && (!K || !K.length))) {
                var ge = o.push(K);
                ge || (j = !0, i.pause())
            }
        });
        for (var z in i) this[z] === void 0 && typeof i[z] == "function" && (this[z] = function(ge) {
            return function() {
                return i[ge].apply(i, arguments)
            }
        }(z));
        for (var H = 0; H < y.length; H++) i.on(y[H], this.emit.bind(this, y[H]));
        return this._read = function(K) {
            _("wrapped _read", K), j && (j = !1, i.resume())
        }, this
    }, typeof Symbol == "function" && (T.prototype[Symbol.asyncIterator] = function() {
        return g === void 0 && (g = zt()), g(this)
    }), Object.defineProperty(T.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(T.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(T.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(o) {
            this._readableState && (this._readableState.flowing = o)
        }
    }), T._fromList = d, Object.defineProperty(T.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    });

    function d(i, o) {
        if (o.length === 0) return null;
        var x;
        return o.objectMode ? x = o.buffer.shift() : !i || i >= o.length ? (o.decoder ? x = o.buffer.join("") : o.buffer.length === 1 ? x = o.buffer.first() : x = o.buffer.concat(o.length), o.buffer.clear()) : x = o.buffer.consume(i, o.decoder), x
    }

    function M(i) {
        var o = i._readableState;
        _("endReadable", o.endEmitted), o.endEmitted || (o.ended = !0, $.nextTick(W, o, i))
    }

    function W(i, o) {
        if (_("endReadableNT", i.endEmitted, i.length), !i.endEmitted && i.length === 0 && (i.endEmitted = !0, o.readable = !1, o.emit("end"), i.autoDestroy)) {
            var x = o._writableState;
            (!x || x.autoDestroy && x.finished) && o.destroy()
        }
    }
    typeof Symbol == "function" && (T.from = function(i, o) {
        return a === void 0 && (a = Zt()), a(T, i, o)
    });

    function G(i, o) {
        for (var x = 0, j = i.length; x < j; x++)
            if (i[x] === o) return x;
        return -1
    }
    return tt
}
var rt, At;

function jt() {
    if (At) return rt;
    At = 1, rt = E;
    var N = Ae().codes,
        L = N.ERR_METHOD_NOT_IMPLEMENTED,
        I = N.ERR_MULTIPLE_CALLBACK,
        F = N.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        k = N.ERR_TRANSFORM_WITH_LENGTH_0,
        c = Be();
    Te()(E, c);

    function R(P, C) {
        var A = this._transformState;
        A.transforming = !1;
        var q = A.writecb;
        if (q === null) return this.emit("error", new I);
        A.writechunk = null, A.writecb = null, C != null && this.push(C), q(P);
        var U = this._readableState;
        U.reading = !1, (U.needReadable || U.length < U.highWaterMark) && this._read(U.highWaterMark)
    }

    function E(P) {
        if (!(this instanceof E)) return new E(P);
        c.call(this, P), this._transformState = {
            afterTransform: R.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, P && (typeof P.transform == "function" && (this._transform = P.transform), typeof P.flush == "function" && (this._flush = P.flush)), this.on("prefinish", _)
    }

    function _() {
        var P = this;
        typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(C, A) {
            B(P, C, A)
        }) : B(this, null, null)
    }
    E.prototype.push = function(P, C) {
        return this._transformState.needTransform = !1, c.prototype.push.call(this, P, C)
    }, E.prototype._transform = function(P, C, A) {
        A(new L("_transform()"))
    }, E.prototype._write = function(P, C, A) {
        var q = this._transformState;
        if (q.writecb = A, q.writechunk = P, q.writeencoding = C, !q.transforming) {
            var U = this._readableState;
            (q.needTransform || U.needReadable || U.length < U.highWaterMark) && this._read(U.highWaterMark)
        }
    }, E.prototype._read = function(P) {
        var C = this._transformState;
        C.writechunk !== null && !C.transforming ? (C.transforming = !0, this._transform(C.writechunk, C.writeencoding, C.afterTransform)) : C.needTransform = !0
    }, E.prototype._destroy = function(P, C) {
        c.prototype._destroy.call(this, P, function(A) {
            C(A)
        })
    };

    function B(P, C, A) {
        if (C) return P.emit("error", C);
        if (A != null && P.push(A), P._writableState.length) throw new k;
        if (P._transformState.transforming) throw new F;
        return P.push(null)
    }
    return rt
}
var nt, Lt;

function Qt() {
    if (Lt) return nt;
    Lt = 1, nt = L;
    var N = jt();
    Te()(L, N);

    function L(I) {
        if (!(this instanceof L)) return new L(I);
        N.call(this, I)
    }
    return L.prototype._transform = function(I, F, k) {
        k(null, I)
    }, nt
}
var it, It;

function er() {
    if (It) return it;
    It = 1;
    var N;

    function L(A) {
        var q = !1;
        return function() {
            q || (q = !0, A.apply(void 0, arguments))
        }
    }
    var I = Ae().codes,
        F = I.ERR_MISSING_ARGS,
        k = I.ERR_STREAM_DESTROYED;

    function c(A) {
        if (A) throw A
    }

    function R(A) {
        return A.setHeader && typeof A.abort == "function"
    }

    function E(A, q, U, S) {
        S = L(S);
        var O = !1;
        A.on("close", function() {
            O = !0
        }), N === void 0 && (N = ft()), N(A, {
            readable: q,
            writable: U
        }, function(s) {
            if (s) return S(s);
            O = !0, S()
        });
        var l = !1;
        return function(s) {
            if (!O && !l) {
                if (l = !0, R(A)) return A.abort();
                if (typeof A.destroy == "function") return A.destroy();
                S(s || new k("pipe"))
            }
        }
    }

    function _(A) {
        A()
    }

    function B(A, q) {
        return A.pipe(q)
    }

    function P(A) {
        return !A.length || typeof A[A.length - 1] != "function" ? c : A.pop()
    }

    function C() {
        for (var A = arguments.length, q = new Array(A), U = 0; U < A; U++) q[U] = arguments[U];
        var S = P(q);
        if (Array.isArray(q[0]) && (q = q[0]), q.length < 2) throw new F("streams");
        var O, l = q.map(function(s, g) {
            var a = g < q.length - 1,
                u = g > 0;
            return E(s, a, u, function(y) {
                O || (O = y), y && l.forEach(_), !a && (l.forEach(_), S(O))
            })
        });
        return q.reduce(B)
    }
    return it = C, it
}
var ot, Mt;

function ir() {
    if (Mt) return ot;
    Mt = 1, ot = I;
    var N = at().EventEmitter,
        L = Te();
    L(I, N), I.Readable = kt(), I.Writable = Dt(), I.Duplex = Be(), I.Transform = jt(), I.PassThrough = Qt(), I.finished = ft(), I.pipeline = er(), I.Stream = I;

    function I() {
        N.call(this)
    }
    return I.prototype.pipe = function(F, k) {
        var c = this;

        function R(q) {
            F.writable && F.write(q) === !1 && c.pause && c.pause()
        }
        c.on("data", R);

        function E() {
            c.readable && c.resume && c.resume()
        }
        F.on("drain", E), !F._isStdio && (!k || k.end !== !1) && (c.on("end", B), c.on("close", P));
        var _ = !1;

        function B() {
            _ || (_ = !0, F.end())
        }

        function P() {
            _ || (_ = !0, typeof F.destroy == "function" && F.destroy())
        }

        function C(q) {
            if (A(), N.listenerCount(this, "error") === 0) throw q
        }
        c.on("error", C), F.on("error", C);

        function A() {
            c.removeListener("data", R), F.removeListener("drain", E), c.removeListener("end", B), c.removeListener("close", P), c.removeListener("error", C), F.removeListener("error", C), c.removeListener("end", A), c.removeListener("close", A), F.removeListener("close", A)
        }
        return c.on("end", A), c.on("close", A), F.on("close", A), F.emit("pipe", c), F
    }, ot
}
var Pe = {
        exports: {}
    },
    Ft;

function or() {
    if (Ft) return Pe.exports;
    Ft = 1, typeof $ > "u" || !$.version || $.version.indexOf("v0.") === 0 || $.version.indexOf("v1.") === 0 && $.version.indexOf("v1.8.") !== 0 ? Pe.exports = {
        nextTick: N
    } : Pe.exports = $;

    function N(L, I, F, k) {
        if (typeof L != "function") throw new TypeError('"callback" argument must be a function');
        var c = arguments.length,
            R, E;
        switch (c) {
            case 0:
            case 1:
                return $.nextTick(L);
            case 2:
                return $.nextTick(function() {
                    L.call(null, I)
                });
            case 3:
                return $.nextTick(function() {
                    L.call(null, I, F)
                });
            case 4:
                return $.nextTick(function() {
                    L.call(null, I, F, k)
                });
            default:
                for (R = new Array(c - 1), E = 0; E < R.length;) R[E++] = arguments[E];
                return $.nextTick(function() {
                    L.apply(null, R)
                })
        }
    }
    return Pe.exports
}
var ie = {},
    Ot;

function ar() {
    if (Ot) return ie;
    Ot = 1;

    function N(S) {
        return Array.isArray ? Array.isArray(S) : U(S) === "[object Array]"
    }
    ie.isArray = N;

    function L(S) {
        return typeof S == "boolean"
    }
    ie.isBoolean = L;

    function I(S) {
        return S === null
    }
    ie.isNull = I;

    function F(S) {
        return S == null
    }
    ie.isNullOrUndefined = F;

    function k(S) {
        return typeof S == "number"
    }
    ie.isNumber = k;

    function c(S) {
        return typeof S == "string"
    }
    ie.isString = c;

    function R(S) {
        return typeof S == "symbol"
    }
    ie.isSymbol = R;

    function E(S) {
        return S === void 0
    }
    ie.isUndefined = E;

    function _(S) {
        return U(S) === "[object RegExp]"
    }
    ie.isRegExp = _;

    function B(S) {
        return typeof S == "object" && S !== null
    }
    ie.isObject = B;

    function P(S) {
        return U(S) === "[object Date]"
    }
    ie.isDate = P;

    function C(S) {
        return U(S) === "[object Error]" || S instanceof Error
    }
    ie.isError = C;

    function A(S) {
        return typeof S == "function"
    }
    ie.isFunction = A;

    function q(S) {
        return S === null || typeof S == "boolean" || typeof S == "number" || typeof S == "string" || typeof S == "symbol" || typeof S > "u"
    }
    ie.isPrimitive = q, ie.isBuffer = Fe().Buffer.isBuffer;

    function U(S) {
        return Object.prototype.toString.call(S)
    }
    return ie
}
export {
    kt as a, Dt as b, Be as c, jt as d, Qt as e, ft as f, er as g, Fe as h, ir as i, Rt as j, at as k, or as l, ar as m, Jt as n, Kt as r
};