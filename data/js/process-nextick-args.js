import {
    t as e
} from "./rolldown-runtime.js";
import {
    n as t,
    t as n
} from "./dist-1.js";
import {
    n as r,
    t as i
} from "./dist-2.js";
import {
    n as a,
    t as o
} from "./util.js";
var s = e((e => {
        Object.defineProperties(e, {
            __esModule: {
                value: !0
            },
            [Symbol.toStringTag]: {
                value: `Module`
            }
        });
        var t = {},
            n = {};
        n.byteLength = u, n.toByteArray = f, n.fromByteArray = h;
        for (var r = [], i = [], a = typeof Uint8Array < `u` ? Uint8Array : Array, o = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, s = 0, c = o.length; s < c; ++s) r[s] = o[s], i[o.charCodeAt(s)] = s;
        i[45] = 62, i[95] = 63;

        function l(e) {
            var t = e.length;
            if (t % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
            var n = e.indexOf(`=`);
            n === -1 && (n = t);
            var r = n === t ? 0 : 4 - n % 4;
            return [n, r]
        }

        function u(e) {
            var t = l(e),
                n = t[0],
                r = t[1];
            return (n + r) * 3 / 4 - r
        }

        function d(e, t, n) {
            return (t + n) * 3 / 4 - n
        }

        function f(e) {
            for (var t, n = l(e), r = n[0], o = n[1], s = new a(d(e, r, o)), c = 0, u = o > 0 ? r - 4 : r, f = 0; f < u; f += 4) t = i[e.charCodeAt(f)] << 18 | i[e.charCodeAt(f + 1)] << 12 | i[e.charCodeAt(f + 2)] << 6 | i[e.charCodeAt(f + 3)], s[c++] = t >> 16 & 255, s[c++] = t >> 8 & 255, s[c++] = t & 255;
            return o === 2 && (t = i[e.charCodeAt(f)] << 2 | i[e.charCodeAt(f + 1)] >> 4, s[c++] = t & 255), o === 1 && (t = i[e.charCodeAt(f)] << 10 | i[e.charCodeAt(f + 1)] << 4 | i[e.charCodeAt(f + 2)] >> 2, s[c++] = t >> 8 & 255, s[c++] = t & 255), s
        }

        function p(e) {
            return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[e & 63]
        }

        function m(e, t, n) {
            for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(p(r));
            return i.join(``)
        }

        function h(e) {
            for (var t, n = e.length, i = n % 3, a = [], o = 16383, s = 0, c = n - i; s < c; s += o) a.push(m(e, s, s + o > c ? c : s + o));
            return i === 1 ? (t = e[n - 1], a.push(r[t >> 2] + r[t << 4 & 63] + `==`)) : i === 2 && (t = (e[n - 2] << 8) + e[n - 1], a.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + `=`)), a.join(``)
        }
        var g = {};
        g.read = function(e, t, n, r, i) {
            var a, o, s = i * 8 - r - 1,
                c = (1 << s) - 1,
                l = c >> 1,
                u = -7,
                d = n ? i - 1 : 0,
                f = n ? -1 : 1,
                p = e[t + d];
            for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
            for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
            if (a === 0) a = 1 - l;
            else if (a === c) return o ? NaN : (p ? -1 : 1) * (1 / 0);
            else o += 2 ** r, a -= l;
            return (p ? -1 : 1) * o * 2 ** (a - r)
        }, g.write = function(e, t, n, r, i, a) {
            var o, s, c, l = a * 8 - i - 1,
                u = (1 << l) - 1,
                d = u >> 1,
                f = i === 23 ? 2 ** -24 - 2 ** -77 : 0,
                p = r ? 0 : a - 1,
                m = r ? 1 : -1,
                h = +(t < 0 || t === 0 && 1 / t < 0);
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
            for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
            e[n + p - m] |= h * 128
        }, (function(e) {
            let t = n,
                r = g,
                i = typeof Symbol == `function` && typeof Symbol.for == `function` ? Symbol.for(`nodejs.util.inspect.custom`) : null;
            e.Buffer = d, e.SlowBuffer = C, e.INSPECT_MAX_BYTES = 50;
            let a = 2147483647;
            e.kMaxLength = a;
            let {
                Uint8Array: o,
                ArrayBuffer: s,
                SharedArrayBuffer: c
            } = globalThis;
            d.TYPED_ARRAY_SUPPORT = l(), !d.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

            function l() {
                try {
                    let e = new o(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, o.prototype), Object.setPrototypeOf(e, t), e.foo() === 42
                } catch {
                    return !1
                }
            }
            Object.defineProperty(d.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (d.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(d.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (d.isBuffer(this)) return this.byteOffset
                }
            });

            function u(e) {
                if (e > a) throw RangeError(`The value "` + e + `" is invalid for option "size"`);
                let t = new o(e);
                return Object.setPrototypeOf(t, d.prototype), t
            }

            function d(e, t, n) {
                if (typeof e == `number`) {
                    if (typeof t == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
                    return h(e)
                }
                return f(e, t, n)
            }
            d.poolSize = 8192;

            function f(e, t, n) {
                if (typeof e == `string`) return _(e, t);
                if (s.isView(e)) return y(e);
                if (e == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e);
                if (Q(e, s) || e && Q(e.buffer, s) || c !== void 0 && (Q(e, c) || e && Q(e.buffer, c))) return b(e, t, n);
                if (typeof e == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
                let r = e.valueOf && e.valueOf();
                if (r != null && r !== e) return d.from(r, t, n);
                let i = x(e);
                if (i) return i;
                if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == `function`) return d.from(e[Symbol.toPrimitive](`string`), t, n);
                throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e)
            }
            d.from = function(e, t, n) {
                return f(e, t, n)
            }, Object.setPrototypeOf(d.prototype, o.prototype), Object.setPrototypeOf(d, o);

            function p(e) {
                if (typeof e != `number`) throw TypeError(`"size" argument must be of type number`);
                if (e < 0) throw RangeError(`The value "` + e + `" is invalid for option "size"`)
            }

            function m(e, t, n) {
                return p(e), e <= 0 || t === void 0 ? u(e) : typeof n == `string` ? u(e).fill(t, n) : u(e).fill(t)
            }
            d.alloc = function(e, t, n) {
                return m(e, t, n)
            };

            function h(e) {
                return p(e), u(e < 0 ? 0 : S(e) | 0)
            }
            d.allocUnsafe = function(e) {
                return h(e)
            }, d.allocUnsafeSlow = function(e) {
                return h(e)
            };

            function _(e, t) {
                if ((typeof t != `string` || t === ``) && (t = `utf8`), !d.isEncoding(t)) throw TypeError(`Unknown encoding: ` + t);
                let n = w(e, t) | 0,
                    r = u(n),
                    i = r.write(e, t);
                return i !== n && (r = r.slice(0, i)), r
            }

            function v(e) {
                let t = e.length < 0 ? 0 : S(e.length) | 0,
                    n = u(t);
                for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
                return n
            }

            function y(e) {
                if (Q(e, o)) {
                    let t = new o(e);
                    return b(t.buffer, t.byteOffset, t.byteLength)
                }
                return v(e)
            }

            function b(e, t, n) {
                if (t < 0 || e.byteLength < t) throw RangeError(`"offset" is outside of buffer bounds`);
                if (e.byteLength < t + (n || 0)) throw RangeError(`"length" is outside of buffer bounds`);
                let r;
                return r = t === void 0 && n === void 0 ? new o(e) : n === void 0 ? new o(e, t) : new o(e, t, n), Object.setPrototypeOf(r, d.prototype), r
            }

            function x(e) {
                if (d.isBuffer(e)) {
                    let t = S(e.length) | 0,
                        n = u(t);
                    return n.length === 0 || e.copy(n, 0, 0, t), n
                }
                if (e.length !== void 0) return typeof e.length != `number` || de(e.length) ? u(0) : v(e);
                if (e.type === `Buffer` && Array.isArray(e.data)) return v(e.data)
            }

            function S(e) {
                if (e >= a) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + a.toString(16) + ` bytes`);
                return e | 0
            }

            function C(e) {
                return +e != e && (e = 0), d.alloc(+e)
            }
            d.isBuffer = function(e) {
                return e != null && e._isBuffer === !0 && e !== d.prototype
            }, d.compare = function(e, t) {
                if (Q(e, o) && (e = d.from(e, e.offset, e.byteLength)), Q(t, o) && (t = d.from(t, t.offset, t.byteLength)), !d.isBuffer(e) || !d.isBuffer(t)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
                if (e === t) return 0;
                let n = e.length,
                    r = t.length;
                for (let i = 0, a = Math.min(n, r); i < a; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    } return n < r ? -1 : +(r < n)
            }, d.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case `hex`:
                    case `utf8`:
                    case `utf-8`:
                    case `ascii`:
                    case `latin1`:
                    case `binary`:
                    case `base64`:
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                        return !0;
                    default:
                        return !1
                }
            }, d.concat = function(e, t) {
                if (!Array.isArray(e)) throw TypeError(`"list" argument must be an Array of Buffers`);
                if (e.length === 0) return d.alloc(0);
                let n;
                if (t === void 0)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                let r = d.allocUnsafe(t),
                    i = 0;
                for (n = 0; n < e.length; ++n) {
                    let t = e[n];
                    if (Q(t, o)) i + t.length > r.length ? (d.isBuffer(t) || (t = d.from(t)), t.copy(r, i)) : o.prototype.set.call(r, t, i);
                    else if (d.isBuffer(t)) t.copy(r, i);
                    else throw TypeError(`"list" argument must be an Array of Buffers`);
                    i += t.length
                }
                return r
            };

            function w(e, t) {
                if (d.isBuffer(e)) return e.length;
                if (s.isView(e) || Q(e, s)) return e.byteLength;
                if (typeof e != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e);
                let n = e.length,
                    r = arguments.length > 2 && arguments[2] === !0;
                if (!r && n === 0) return 0;
                let i = !1;
                for (;;) switch (t) {
                    case `ascii`:
                    case `latin1`:
                    case `binary`:
                        return n;
                    case `utf8`:
                    case `utf-8`:
                        return se(e).length;
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                        return n * 2;
                    case `hex`:
                        return n >>> 1;
                    case `base64`:
                        return ue(e).length;
                    default:
                        if (i) return r ? -1 : se(e).length;
                        t = (`` + t).toLowerCase(), i = !0
                }
            }
            d.byteLength = w;

            function ee(e, t, n) {
                let r = !1;
                if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return ``;
                for (e || (e = `utf8`);;) switch (e) {
                    case `hex`:
                        return I(this, t, n);
                    case `utf8`:
                    case `utf-8`:
                        return j(this, t, n);
                    case `ascii`:
                        return P(this, t, n);
                    case `latin1`:
                    case `binary`:
                        return F(this, t, n);
                    case `base64`:
                        return re(this, t, n);
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                        return ie(this, t, n);
                    default:
                        if (r) throw TypeError(`Unknown encoding: ` + e);
                        e = (e + ``).toLowerCase(), r = !0
                }
            }
            d.prototype._isBuffer = !0;

            function T(e, t, n) {
                let r = e[t];
                e[t] = e[n], e[n] = r
            }
            d.prototype.swap16 = function() {
                let e = this.length;
                if (e % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
                for (let t = 0; t < e; t += 2) T(this, t, t + 1);
                return this
            }, d.prototype.swap32 = function() {
                let e = this.length;
                if (e % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
                for (let t = 0; t < e; t += 4) T(this, t, t + 3), T(this, t + 1, t + 2);
                return this
            }, d.prototype.swap64 = function() {
                let e = this.length;
                if (e % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
                for (let t = 0; t < e; t += 8) T(this, t, t + 7), T(this, t + 1, t + 6), T(this, t + 2, t + 5), T(this, t + 3, t + 4);
                return this
            }, d.prototype.toString = function() {
                let e = this.length;
                return e === 0 ? `` : arguments.length === 0 ? j(this, 0, e) : ee.apply(this, arguments)
            }, d.prototype.toLocaleString = d.prototype.toString, d.prototype.equals = function(e) {
                if (!d.isBuffer(e)) throw TypeError(`Argument must be a Buffer`);
                return this === e || d.compare(this, e) === 0
            }, d.prototype.inspect = function() {
                let t = ``,
                    n = e.INSPECT_MAX_BYTES;
                return t = this.toString(`hex`, 0, n).replace(/(.{2})/g, `$1 `).trim(), this.length > n && (t += ` ... `), `<Buffer ` + t + `>`
            }, i && (d.prototype[i] = d.prototype.inspect), d.prototype.compare = function(e, t, n, r, i) {
                if (Q(e, o) && (e = d.from(e, e.offset, e.byteLength)), !d.isBuffer(e)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e);
                if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError(`out of range index`);
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                let a = i - r,
                    s = n - t,
                    c = Math.min(a, s),
                    l = this.slice(r, i),
                    u = e.slice(t, n);
                for (let e = 0; e < c; ++e)
                    if (l[e] !== u[e]) {
                        a = l[e], s = u[e];
                        break
                    } return a < s ? -1 : +(s < a)
            };

            function E(e, t, n, r, i) {
                if (e.length === 0) return -1;
                if (typeof n == `string` ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, de(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (i) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (i) n = 0;
                    else return -1
                }
                if (typeof t == `string` && (t = d.from(t, r)), d.isBuffer(t)) return t.length === 0 ? -1 : D(e, t, n, r, i);
                if (typeof t == `number`) return t &= 255, typeof o.prototype.indexOf == `function` ? i ? o.prototype.indexOf.call(e, t, n) : o.prototype.lastIndexOf.call(e, t, n) : D(e, [t], n, r, i);
                throw TypeError(`val must be string, number or Buffer`)
            }

            function D(e, t, n, r, i) {
                let a = 1,
                    o = e.length,
                    s = t.length;
                if (r !== void 0 && (r = String(r).toLowerCase(), r === `ucs2` || r === `ucs-2` || r === `utf16le` || r === `utf-16le`)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, o /= 2, s /= 2, n /= 2
                }

                function c(e, t) {
                    return a === 1 ? e[t] : e.readUInt16BE(t * a)
                }
                let l;
                if (i) {
                    let r = -1;
                    for (l = n; l < o; l++)
                        if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
                            if (r === -1 && (r = l), l - r + 1 === s) return r * a
                        } else r !== -1 && (l -= l - r), r = -1
                } else
                    for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
                        let n = !0;
                        for (let r = 0; r < s; r++)
                            if (c(e, l + r) !== c(t, r)) {
                                n = !1;
                                break
                            } if (n) return l
                    }
                return -1
            }
            d.prototype.includes = function(e, t, n) {
                return this.indexOf(e, t, n) !== -1
            }, d.prototype.indexOf = function(e, t, n) {
                return E(this, e, t, n, !0)
            }, d.prototype.lastIndexOf = function(e, t, n) {
                return E(this, e, t, n, !1)
            };

            function O(e, t, n, r) {
                n = Number(n) || 0;
                let i = e.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i;
                let a = t.length;
                r > a / 2 && (r = a / 2);
                let o = 0;
                for (; o < r; ++o) {
                    let r = parseInt(t.substr(o * 2, 2), 16);
                    if (de(r)) return o;
                    e[n + o] = r
                }
                return o
            }

            function te(e, t, n, r) {
                return Z(se(t, e.length - n), e, n, r)
            }

            function k(e, t, n, r) {
                return Z(ce(t), e, n, r)
            }

            function ne(e, t, n, r) {
                return Z(ue(t), e, n, r)
            }

            function A(e, t, n, r) {
                return Z(le(t, e.length - n), e, n, r)
            }
            d.prototype.write = function(e, t, n, r) {
                if (t === void 0) r = `utf8`, n = this.length, t = 0;
                else if (n === void 0 && typeof t == `string`) r = t, n = this.length, t = 0;
                else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = `utf8`)) : (r = n, n = void 0);
                else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
                let i = this.length - t;
                if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
                r || (r = `utf8`);
                let a = !1;
                for (;;) switch (r) {
                    case `hex`:
                        return O(this, e, t, n);
                    case `utf8`:
                    case `utf-8`:
                        return te(this, e, t, n);
                    case `ascii`:
                    case `latin1`:
                    case `binary`:
                        return k(this, e, t, n);
                    case `base64`:
                        return ne(this, e, t, n);
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                        return A(this, e, t, n);
                    default:
                        if (a) throw TypeError(`Unknown encoding: ` + r);
                        r = (`` + r).toLowerCase(), a = !0
                }
            }, d.prototype.toJSON = function() {
                return {
                    type: `Buffer`,
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function re(e, n, r) {
                return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r))
            }

            function j(e, t, n) {
                n = Math.min(e.length, n);
                let r = [],
                    i = t;
                for (; i < n;) {
                    let t = e[i],
                        a = null,
                        o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (i + o <= n) {
                        let n, r, s, c;
                        switch (o) {
                            case 1:
                                t < 128 && (a = t);
                                break;
                            case 2:
                                n = e[i + 1], (n & 192) == 128 && (c = (t & 31) << 6 | n & 63, c > 127 && (a = c));
                                break;
                            case 3:
                                n = e[i + 1], r = e[i + 2], (n & 192) == 128 && (r & 192) == 128 && (c = (t & 15) << 12 | (n & 63) << 6 | r & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
                                break;
                            case 4:
                                n = e[i + 1], r = e[i + 2], s = e[i + 3], (n & 192) == 128 && (r & 192) == 128 && (s & 192) == 128 && (c = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (a = c))
                        }
                    }
                    a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o
                }
                return N(r)
            }
            let M = 4096;

            function N(e) {
                let t = e.length;
                if (t <= M) return String.fromCharCode.apply(String, e);
                let n = ``,
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += M));
                return n
            }

            function P(e, t, n) {
                let r = ``;
                n = Math.min(e.length, n);
                for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
                return r
            }

            function F(e, t, n) {
                let r = ``;
                n = Math.min(e.length, n);
                for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function I(e, t, n) {
                let r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                let i = ``;
                for (let r = t; r < n; ++r) i += fe[e[r]];
                return i
            }

            function ie(e, t, n) {
                let r = e.slice(t, n),
                    i = ``;
                for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + r[e + 1] * 256);
                return i
            }
            d.prototype.slice = function(e, t) {
                let n = this.length;
                e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
                let r = this.subarray(e, t);
                return Object.setPrototypeOf(r, d.prototype), r
            };

            function L(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError(`offset is not uint`);
                if (e + t > n) throw RangeError(`Trying to access beyond buffer length`)
            }
            d.prototype.readUintLE = d.prototype.readUIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || L(e, t, this.length);
                let r = this[e],
                    i = 1,
                    a = 0;
                for (; ++a < t && (i *= 256);) r += this[e + a] * i;
                return r
            }, d.prototype.readUintBE = d.prototype.readUIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || L(e, t, this.length);
                let r = this[e + --t],
                    i = 1;
                for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, d.prototype.readUint8 = d.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || L(e, 1, this.length), this[e]
            }, d.prototype.readUint16LE = d.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || L(e, 2, this.length), this[e] | this[e + 1] << 8
            }, d.prototype.readUint16BE = d.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || L(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, d.prototype.readUint32LE = d.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
            }, d.prototype.readUint32BE = d.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, d.prototype.readBigUInt64LE = $(function(e) {
                e >>>= 0, Y(e, `offset`);
                let t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && X(e, this.length - 8);
                let r = t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
                    i = this[++e] + this[++e] * 256 + this[++e] * 2 ** 16 + n * 2 ** 24;
                return BigInt(r) + (BigInt(i) << BigInt(32))
            }), d.prototype.readBigUInt64BE = $(function(e) {
                e >>>= 0, Y(e, `offset`);
                let t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && X(e, this.length - 8);
                let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e],
                    i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n;
                return (BigInt(r) << BigInt(32)) + BigInt(i)
            }), d.prototype.readIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || L(e, t, this.length);
                let r = this[e],
                    i = 1,
                    a = 0;
                for (; ++a < t && (i *= 256);) r += this[e + a] * i;
                return i *= 128, r >= i && (r -= 2 ** (8 * t)), r
            }, d.prototype.readIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || L(e, t, this.length);
                let r = t,
                    i = 1,
                    a = this[e + --r];
                for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
                return i *= 128, a >= i && (a -= 2 ** (8 * t)), a
            }, d.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || L(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
            }, d.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || L(e, 2, this.length);
                let n = this[e] | this[e + 1] << 8;
                return n & 32768 ? n | 4294901760 : n
            }, d.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || L(e, 2, this.length);
                let n = this[e + 1] | this[e] << 8;
                return n & 32768 ? n | 4294901760 : n
            }, d.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, d.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, d.prototype.readBigInt64LE = $(function(e) {
                e >>>= 0, Y(e, `offset`);
                let t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && X(e, this.length - 8);
                let r = this[e + 4] + this[e + 5] * 256 + this[e + 6] * 2 ** 16 + (n << 24);
                return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
            }), d.prototype.readBigInt64BE = $(function(e) {
                e >>>= 0, Y(e, `offset`);
                let t = this[e],
                    n = this[e + 7];
                (t === void 0 || n === void 0) && X(e, this.length - 8);
                let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e];
                return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n)
            }), d.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), r.read(this, e, !0, 23, 4)
            }, d.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || L(e, 4, this.length), r.read(this, e, !1, 23, 4)
            }, d.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || L(e, 8, this.length), r.read(this, e, !0, 52, 8)
            }, d.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || L(e, 8, this.length), r.read(this, e, !1, 52, 8)
            };

            function R(e, t, n, r, i, a) {
                if (!d.isBuffer(e)) throw TypeError(`"buffer" argument must be a Buffer instance`);
                if (t > i || t < a) throw RangeError(`"value" argument is out of bounds`);
                if (n + r > e.length) throw RangeError(`Index out of range`)
            }
            d.prototype.writeUintLE = d.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    let r = 2 ** (8 * n) - 1;
                    R(this, e, t, n, r, 0)
                }
                let i = 1,
                    a = 0;
                for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
                return t + n
            }, d.prototype.writeUintBE = d.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    let r = 2 ** (8 * n) - 1;
                    R(this, e, t, n, r, 0)
                }
                let i = n - 1,
                    a = 1;
                for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                return t + n
            }, d.prototype.writeUint8 = d.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1
            }, d.prototype.writeUint16LE = d.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
            }, d.prototype.writeUint16BE = d.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
            }, d.prototype.writeUint32LE = d.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4
            }, d.prototype.writeUint32BE = d.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
            };

            function z(e, t, n, r, i) {
                J(t, r, i, e, n, 7);
                let a = Number(t & BigInt(4294967295));
                e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
                let o = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n
            }

            function B(e, t, n, r, i) {
                J(t, r, i, e, n, 7);
                let a = Number(t & BigInt(4294967295));
                e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
                let o = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8
            }
            d.prototype.writeBigUInt64LE = $(function(e, t = 0) {
                return z(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`))
            }), d.prototype.writeBigUInt64BE = $(function(e, t = 0) {
                return B(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`))
            }), d.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    let r = 2 ** (8 * n - 1);
                    R(this, e, t, n, r - 1, -r)
                }
                let i = 0,
                    a = 1,
                    o = 0;
                for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a | 0) - o & 255;
                return t + n
            }, d.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    let r = 2 ** (8 * n - 1);
                    R(this, e, t, n, r - 1, -r)
                }
                let i = n - 1,
                    a = 1,
                    o = 0;
                for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a | 0) - o & 255;
                return t + n
            }, d.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
            }, d.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
            }, d.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
            }, d.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, d.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || R(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
            }, d.prototype.writeBigInt64LE = $(function(e, t = 0) {
                return z(this, e, t, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`))
            }), d.prototype.writeBigInt64BE = $(function(e, t = 0) {
                return B(this, e, t, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`))
            });

            function V(e, t, n, r, i, a) {
                if (n + r > e.length || n < 0) throw RangeError(`Index out of range`)
            }

            function H(e, t, n, i, a) {
                return t = +t, n >>>= 0, a || V(e, t, n, 4), r.write(e, t, n, i, 23, 4), n + 4
            }
            d.prototype.writeFloatLE = function(e, t, n) {
                return H(this, e, t, !0, n)
            }, d.prototype.writeFloatBE = function(e, t, n) {
                return H(this, e, t, !1, n)
            };

            function U(e, t, n, i, a) {
                return t = +t, n >>>= 0, a || V(e, t, n, 8), r.write(e, t, n, i, 52, 8), n + 8
            }
            d.prototype.writeDoubleLE = function(e, t, n) {
                return U(this, e, t, !0, n)
            }, d.prototype.writeDoubleBE = function(e, t, n) {
                return U(this, e, t, !1, n)
            }, d.prototype.copy = function(e, t, n, r) {
                if (!d.isBuffer(e)) throw TypeError(`argument should be a Buffer`);
                if (n || (n = 0), !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
                if (t < 0) throw RangeError(`targetStart out of bounds`);
                if (n < 0 || n >= this.length) throw RangeError(`Index out of range`);
                if (r < 0) throw RangeError(`sourceEnd out of bounds`);
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                let i = r - n;
                return this === e && typeof o.prototype.copyWithin == `function` ? this.copyWithin(t, n, r) : o.prototype.set.call(e, this.subarray(n, r), t), i
            }, d.prototype.fill = function(e, t, n, r) {
                if (typeof e == `string`) {
                    if (typeof t == `string` ? (r = t, t = 0, n = this.length) : typeof n == `string` && (r = n, n = this.length), r !== void 0 && typeof r != `string`) throw TypeError(`encoding must be a string`);
                    if (typeof r == `string` && !d.isEncoding(r)) throw TypeError(`Unknown encoding: ` + r);
                    if (e.length === 1) {
                        let t = e.charCodeAt(0);
                        (r === `utf8` && t < 128 || r === `latin1`) && (e = t)
                    }
                } else typeof e == `number` ? e &= 255 : typeof e == `boolean` && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw RangeError(`Out of range index`);
                if (n <= t) return this;
                t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
                let i;
                if (typeof e == `number`)
                    for (i = t; i < n; ++i) this[i] = e;
                else {
                    let a = d.isBuffer(e) ? e : d.from(e, r),
                        o = a.length;
                    if (o === 0) throw TypeError(`The value "` + e + `" is invalid for argument "value"`);
                    for (i = 0; i < n - t; ++i) this[i + t] = a[i % o]
                }
                return this
            };
            let W = {};

            function G(e, t, n) {
                W[e] = class extends n {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }
            G(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e) {
                return e ? `${e} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`
            }, RangeError), G(`ERR_INVALID_ARG_TYPE`, function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }, TypeError), G(`ERR_OUT_OF_RANGE`, function(e, t, n) {
                let r = `The value of "${e}" is out of range.`,
                    i = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = K(String(n)) : typeof n == `bigint` && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = K(i)), i += `n`), r += ` It must be ${t}. Received ${i}`, r
            }, RangeError);

            function K(e) {
                let t = ``,
                    n = e.length,
                    r = +(e[0] === `-`);
                for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                return `${e.slice(0,n)}${t}`
            }

            function q(e, t, n) {
                Y(t, `offset`), (e[t] === void 0 || e[t + n] === void 0) && X(t, e.length - (n + 1))
            }

            function J(e, t, n, r, i, a) {
                if (e > n || e < t) {
                    let r = typeof t == `bigint` ? `n` : ``,
                        i;
                    throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a+1)*8}${r}` : `>= -(2${r} ** ${(a+1)*8-1}${r}) and < 2 ** ${(a+1)*8-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new W.ERR_OUT_OF_RANGE(`value`, i, e)
                }
                q(r, i, a)
            }

            function Y(e, t) {
                if (typeof e != `number`) throw new W.ERR_INVALID_ARG_TYPE(t, `number`, e)
            }

            function X(e, t, n) {
                throw Math.floor(e) === e ? t < 0 ? new W.ERR_BUFFER_OUT_OF_BOUNDS : new W.ERR_OUT_OF_RANGE(n || `offset`, `>= ${+!!n} and <= ${t}`, e) : (Y(e, n), new W.ERR_OUT_OF_RANGE(n || `offset`, `an integer`, e))
            }
            let ae = /[^+/0-9A-Za-z-_]/g;

            function oe(e) {
                if (e = e.split(`=`)[0], e = e.trim().replace(ae, ``), e.length < 2) return ``;
                for (; e.length % 4 != 0;) e += `=`;
                return e
            }

            function se(e, t) {
                t = t || 1 / 0;
                let n, r = e.length,
                    i = null,
                    a = [];
                for (let o = 0; o < r; ++o) {
                    if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319 || o + 1 === r) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), i = n;
                            continue
                        }
                        n = (i - 55296 << 10 | n - 56320) + 65536
                    } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if (--t < 0) break;
                        a.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(n >> 6 | 192, n & 63 | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128)
                    } else if (n < 1114112) {
                        if ((t -= 4) < 0) break;
                        a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128)
                    } else throw Error(`Invalid code point`)
                }
                return a
            }

            function ce(e) {
                let t = [];
                for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
                return t
            }

            function le(e, t) {
                let n, r, i, a = [];
                for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
                return a
            }

            function ue(e) {
                return t.toByteArray(oe(e))
            }

            function Z(e, t, n, r) {
                let i = 0;
                for (; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }

            function Q(e, t) {
                return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name
            }

            function de(e) {
                return e !== e
            }
            let fe = (function() {
                let e = `0123456789abcdef`,
                    t = Array(256);
                for (let n = 0; n < 16; ++n) {
                    let r = n * 16;
                    for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
                }
                return t
            })();

            function $(e) {
                return typeof BigInt > `u` ? pe : e
            }

            function pe() {
                throw Error(`BigInt not supported`)
            }
        })(t);
        var _ = t.Buffer;
        e.Blob = t.Blob, e.BlobOptions = t.BlobOptions, e.Buffer = t.Buffer, e.File = t.File, e.FileOptions = t.FileOptions, e.INSPECT_MAX_BYTES = t.INSPECT_MAX_BYTES, e.SlowBuffer = t.SlowBuffer, e.TranscodeEncoding = t.TranscodeEncoding, e.atob = t.atob, e.btoa = t.btoa, e.constants = t.constants, e.default = _, e.isAscii = t.isAscii, e.isUtf8 = t.isUtf8, e.kMaxLength = t.kMaxLength, e.kStringMaxLength = t.kStringMaxLength, e.resolveObjectURL = t.resolveObjectURL, e.transcode = t.transcode
    })),
    c = e(((e, t) => {
        var n = typeof Reflect == `object` ? Reflect : null,
            r = n && typeof n.apply == `function` ? n.apply : function(e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            },
            i = n && typeof n.ownKeys == `function` ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };

        function a(e) {
            console && console.warn && console.warn(e)
        }
        var o = Number.isNaN || function(e) {
            return e !== e
        };

        function s() {
            s.init.call(this)
        }
        t.exports = s, t.exports.once = y, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var c = 10;

        function l(e) {
            if (typeof e != `function`) throw TypeError(`The "listener" argument must be of type Function. Received type ` + typeof e)
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return c
            },
            set: function(e) {
                if (typeof e != `number` || e < 0 || o(e)) throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ` + e + `.`);
                c = e
            }
        }), s.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, s.prototype.setMaxListeners = function(e) {
            if (typeof e != `number` || e < 0 || o(e)) throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ` + e + `.`);
            return this._maxListeners = e, this
        };

        function u(e) {
            return e._maxListeners === void 0 ? s.defaultMaxListeners : e._maxListeners
        }
        s.prototype.getMaxListeners = function() {
            return u(this)
        }, s.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var i = e === `error`,
                a = this._events;
            if (a !== void 0) i = i && a.error === void 0;
            else if (!i) return !1;
            if (i) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var s = Error(`Unhandled error.` + (o ? ` (` + o.message + `)` : ``));
                throw s.context = o, s
            }
            var c = a[e];
            if (c === void 0) return !1;
            if (typeof c == `function`) r(c, this, t);
            else
                for (var l = c.length, u = g(c, l), n = 0; n < l; ++n) r(u[n], this, t);
            return !0
        };

        function d(e, t, n, r) {
            var i, o, s;
            if (l(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit(`newListener`, t, n.listener ? n.listener : n), o = e._events), s = o[t]), s === void 0) s = o[t] = n, ++e._eventsCount;
            else if (typeof s == `function` ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = u(e), i > 0 && s.length > i && !s.warned) {
                s.warned = !0;
                var c = Error(`Possible EventEmitter memory leak detected. ` + s.length + ` ` + String(t) + ` listeners added. Use emitter.setMaxListeners() to increase limit`);
                c.name = `MaxListenersExceededWarning`, c.emitter = e, c.type = t, c.count = s.length, a(c)
            }
            return e
        }
        s.prototype.addListener = function(e, t) {
            return d(this, e, t, !1)
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
            return d(this, e, t, !0)
        };

        function f() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function p(e, t, n) {
            var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                i = f.bind(r);
            return i.listener = n, r.wrapFn = i, i
        }
        s.prototype.once = function(e, t) {
            return l(t), this.on(e, p(this, e, t)), this
        }, s.prototype.prependOnceListener = function(e, t) {
            return l(t), this.prependListener(e, p(this, e, t)), this
        }, s.prototype.removeListener = function(e, t) {
            var n, r, i, a, o;
            if (l(t), r = this._events, r === void 0 || (n = r[e], n === void 0)) return this;
            if (n === t || n.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit(`removeListener`, e, n.listener || t));
            else if (typeof n != `function`) {
                for (i = -1, a = n.length - 1; a >= 0; a--)
                    if (n[a] === t || n[a].listener === t) {
                        o = n[a].listener, i = a;
                        break
                    } if (i < 0) return this;
                i === 0 ? n.shift() : _(n, i), n.length === 1 && (r[e] = n[0]), r.removeListener !== void 0 && this.emit(`removeListener`, e, o || t)
            }
            return this
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
            var t, n = this._events,
                r;
            if (n === void 0) return this;
            if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
            if (arguments.length === 0) {
                var i = Object.keys(n),
                    a;
                for (r = 0; r < i.length; ++r) a = i[r], a !== `removeListener` && this.removeAllListeners(a);
                return this.removeAllListeners(`removeListener`), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if (t = n[e], typeof t == `function`) this.removeListener(e, t);
            else if (t !== void 0)
                for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this
        };

        function m(e, t, n) {
            var r = e._events;
            if (r === void 0) return [];
            var i = r[t];
            return i === void 0 ? [] : typeof i == `function` ? n ? [i.listener || i] : [i] : n ? v(i) : g(i, i.length)
        }
        s.prototype.listeners = function(e) {
            return m(this, e, !0)
        }, s.prototype.rawListeners = function(e) {
            return m(this, e, !1)
        }, s.listenerCount = function(e, t) {
            return typeof e.listenerCount == `function` ? e.listenerCount(t) : h.call(e, t)
        }, s.prototype.listenerCount = h;

        function h(e) {
            var t = this._events;
            if (t !== void 0) {
                var n = t[e];
                if (typeof n == `function`) return 1;
                if (n !== void 0) return n.length
            }
            return 0
        }
        s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? i(this._events) : []
        };

        function g(e, t) {
            for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n
        }

        function _(e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop()
        }

        function v(e) {
            for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }

        function y(e, t) {
            return new Promise(function(n, r) {
                function i(n) {
                    e.removeListener(t, a), r(n)
                }

                function a() {
                    typeof e.removeListener == `function` && e.removeListener(`error`, i), n([].slice.call(arguments))
                }
                x(e, t, a, {
                    once: !0
                }), t !== `error` && b(e, i, {
                    once: !0
                })
            })
        }

        function b(e, t, n) {
            typeof e.on == `function` && x(e, `error`, t, n)
        }

        function x(e, t, n, r) {
            if (typeof e.on == `function`) r.once ? e.once(t, n) : e.on(t, n);
            else if (typeof e.addEventListener == `function`) e.addEventListener(t, function i(a) {
                r.once && e.removeEventListener(t, i), n(a)
            });
            else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type ` + typeof e)
        }
    })),
    l = e(((e, t) => {
        t.exports = c().EventEmitter
    })),
    u = e(((e, t) => {
        function n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] == null ? {} : arguments[t];
                t % 2 ? n(Object(r), !0).forEach(function(t) {
                    i(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function i(e, t, n) {
            return t = u(t), t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, u(r.key), r)
            }
        }

        function l(e, t, n) {
            return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function u(e) {
            var t = d(e, `string`);
            return typeof t == `symbol` ? t : String(t)
        }

        function d(e, t) {
            if (typeof e != `object` || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var r = n.call(e, t || `default`);
                if (typeof r != `object`) return r;
                throw TypeError(`@@toPrimitive must return a primitive value.`)
            }
            return (t === `string` ? String : Number)(e)
        }
        var f = s().Buffer,
            p = o().inspect,
            m = p && p.custom || `inspect`;

        function h(e, t, n) {
            f.prototype.copy.call(e, t, n)
        }
        t.exports = function() {
            function e() {
                a(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return l(e, [{
                key: `push`,
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                }
            }, {
                key: `unshift`,
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    this.length === 0 && (this.tail = t), this.head = t, ++this.length
                }
            }, {
                key: `shift`,
                value: function() {
                    if (this.length !== 0) {
                        var e = this.head.data;
                        return this.head = this.length === 1 ? this.tail = null : this.head.next, --this.length, e
                    }
                }
            }, {
                key: `clear`,
                value: function() {
                    this.head = this.tail = null, this.length = 0
                }
            }, {
                key: `join`,
                value: function(e) {
                    if (this.length === 0) return ``;
                    for (var t = this.head, n = `` + t.data; t = t.next;) n += e + t.data;
                    return n
                }
            }, {
                key: `concat`,
                value: function(e) {
                    if (this.length === 0) return f.alloc(0);
                    for (var t = f.allocUnsafe(e >>> 0), n = this.head, r = 0; n;) h(n.data, t, r), r += n.data.length, n = n.next;
                    return t
                }
            }, {
                key: `consume`,
                value: function(e, t) {
                    var n;
                    return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
                }
            }, {
                key: `first`,
                value: function() {
                    return this.head.data
                }
            }, {
                key: `_getString`,
                value: function(e) {
                    var t = this.head,
                        n = 1,
                        r = t.data;
                    for (e -= r.length; t = t.next;) {
                        var i = t.data,
                            a = e > i.length ? i.length : e;
                        if (a === i.length ? r += i : r += i.slice(0, e), e -= a, e === 0) {
                            a === i.length ? (++n, this.head = t.next ? t.next : this.tail = null) : (this.head = t, t.data = i.slice(a));
                            break
                        }++n
                    }
                    return this.length -= n, r
                }
            }, {
                key: `_getBuffer`,
                value: function(e) {
                    var t = f.allocUnsafe(e),
                        n = this.head,
                        r = 1;
                    for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                        var i = n.data,
                            a = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, a), e -= a, e === 0) {
                            a === i.length ? (++r, this.head = n.next ? n.next : this.tail = null) : (this.head = n, n.data = i.slice(a));
                            break
                        }++r
                    }
                    return this.length -= r, t
                }
            }, {
                key: m,
                value: function(e, t) {
                    return p(this, r(r({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]), e
        }()
    })),
    d = e(((e, t) => {
        i();

        function n(e, t) {
            var n = this,
                i = this._readableState && this._readableState.destroyed,
                s = this._writableState && this._writableState.destroyed;
            return i || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, r.nextTick(c, this, e)) : r.nextTick(c, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                !t && e ? n._writableState ? n._writableState.errorEmitted ? r.nextTick(o, n) : (n._writableState.errorEmitted = !0, r.nextTick(a, n, e)) : r.nextTick(a, n, e) : t ? (r.nextTick(o, n), t(e)) : r.nextTick(o, n)
            }), this)
        }

        function a(e, t) {
            c(e, t), o(e)
        }

        function o(e) {
            (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit(`close`)
        }

        function s() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        }

        function c(e, t) {
            e.emit(`error`, t)
        }

        function l(e, t) {
            var n = e._readableState,
                r = e._writableState;
            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit(`error`, t)
        }
        t.exports = {
            destroy: n,
            undestroy: s,
            errorOrDestroy: l
        }
    })),
    f = e(((e, t) => {
        function n(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }
        var r = {};

        function i(e, t, i) {
            i || (i = Error);

            function a(e, n, r) {
                return typeof t == `string` ? t : t(e, n, r)
            }
            var o = function(e) {
                n(t, e);

                function t(t, n, r) {
                    return e.call(this, a(t, n, r)) || this
                }
                return t
            }(i);
            o.prototype.name = i.name, o.prototype.code = e, r[e] = o
        }

        function a(e, t) {
            if (Array.isArray(e)) {
                var n = e.length;
                return e = e.map(function(e) {
                    return String(e)
                }), n > 2 ? `one of ${t} ${e.slice(0,n-1).join(`, `)}, or ` + e[n - 1] : n === 2 ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
            }
            return `of ${t} ${String(e)}`
        }

        function o(e, t, n) {
            return e.substr(!n || n < 0 ? 0 : +n, t.length) === t
        }

        function s(e, t, n) {
            return (n === void 0 || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
        }

        function c(e, t, n) {
            return typeof n != `number` && (n = 0), n + t.length > e.length ? !1 : e.indexOf(t, n) !== -1
        }
        i(`ERR_INVALID_OPT_VALUE`, function(e, t) {
            return `The value "` + t + `" is invalid for option "` + e + `"`
        }, TypeError), i(`ERR_INVALID_ARG_TYPE`, function(e, t, n) {
            var r;
            typeof t == `string` && o(t, `not `) ? (r = `must not be`, t = t.replace(/^not /, ``)) : r = `must be`;
            var i = s(e, ` argument`) ? `The ${e} ${r} ${a(t,`type`)}` : `The "${e}" ${c(e,`.`)?`property`:`argument`} ${r} ${a(t,`type`)}`;
            return i += `. Received type ${typeof n}`, i
        }, TypeError), i(`ERR_STREAM_PUSH_AFTER_EOF`, `stream.push() after EOF`), i(`ERR_METHOD_NOT_IMPLEMENTED`, function(e) {
            return `The ` + e + ` method is not implemented`
        }), i(`ERR_STREAM_PREMATURE_CLOSE`, `Premature close`), i(`ERR_STREAM_DESTROYED`, function(e) {
            return `Cannot call ` + e + ` after a stream was destroyed`
        }), i(`ERR_MULTIPLE_CALLBACK`, `Callback called multiple times`), i(`ERR_STREAM_CANNOT_PIPE`, `Cannot pipe, not readable`), i(`ERR_STREAM_WRITE_AFTER_END`, `write after end`), i(`ERR_STREAM_NULL_VALUES`, `May not write null values to stream`, TypeError), i(`ERR_UNKNOWN_ENCODING`, function(e) {
            return `Unknown encoding: ` + e
        }, TypeError), i(`ERR_STREAM_UNSHIFT_AFTER_END_EVENT`, `stream.unshift() after end event`), t.exports.codes = r
    })),
    p = e(((e, t) => {
        var n = f().codes.ERR_INVALID_OPT_VALUE;

        function r(e, t, n) {
            return e.highWaterMark == null ? t ? e[n] : null : e.highWaterMark
        }

        function i(e, t, i, a) {
            var o = r(t, a, i);
            if (o != null) {
                if (!(isFinite(o) && Math.floor(o) === o) || o < 0) throw new n(a ? i : `highWaterMark`, o);
                return Math.floor(o)
            }
            return e.objectMode ? 16 : 16384
        }
        t.exports = {
            getHighWaterMark: i
        }
    })),
    m = e(((e, r) => {
        t(), r.exports = i;

        function i(e, t) {
            if (a(`noDeprecation`)) return e;
            var n = !1;

            function r() {
                if (!n) {
                    if (a(`throwDeprecation`)) throw Error(t);
                    a(`traceDeprecation`) ? console.trace(t) : console.warn(t), n = !0
                }
                return e.apply(this, arguments)
            }
            return r
        }

        function a(e) {
            try {
                if (!n.localStorage) return !1
            } catch {
                return !1
            }
            var t = n.localStorage[e];
            return t != null && String(t).toLowerCase() === `true`
        }
    })),
    h = e(((e, o) => {
        t(), i(), o.exports = N;

        function c(e) {
            var t = this;
            this.next = null, this.entry = null, this.finish = function() {
                Y(t, e)
            }
        }
        var u;
        N.WritableState = j;
        var h = {
                deprecate: m()
            },
            _ = l(),
            v = s().Buffer,
            y = (n === void 0 ? typeof window < `u` ? window : typeof self < `u` ? self : {} : n).Uint8Array || function() {};

        function b(e) {
            return v.from(e)
        }

        function x(e) {
            return v.isBuffer(e) || e instanceof y
        }
        var S = d(),
            C = p().getHighWaterMark,
            w = f().codes,
            ee = w.ERR_INVALID_ARG_TYPE,
            T = w.ERR_METHOD_NOT_IMPLEMENTED,
            E = w.ERR_MULTIPLE_CALLBACK,
            D = w.ERR_STREAM_CANNOT_PIPE,
            O = w.ERR_STREAM_DESTROYED,
            te = w.ERR_STREAM_NULL_VALUES,
            k = w.ERR_STREAM_WRITE_AFTER_END,
            ne = w.ERR_UNKNOWN_ENCODING,
            A = S.errorOrDestroy;
        a()(N, _);

        function re() {}

        function j(e, t, n) {
            u = u || g(), e = e || {}, typeof n != `boolean` && (n = t instanceof u), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = C(this, e, `writableHighWaterMark`, n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var r = e.decodeStrings === !1;
            this.decodeStrings = !r, this.defaultEncoding = e.defaultEncoding || `utf8`, this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                B(t, e)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new c(this)
        }
        j.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
            return t
        }, (function() {
            try {
                Object.defineProperty(j.prototype, "buffer", {
                    get: h.deprecate(function() {
                        return this.getBuffer()
                    }, `_writableState.buffer is deprecated. Use _writableState.getBuffer instead.`, `DEP0003`)
                })
            } catch {}
        })();
        var M;
        typeof Symbol == `function` && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == `function` ? (M = Function.prototype[Symbol.hasInstance], Object.defineProperty(N, Symbol.hasInstance, {
            value: function(e) {
                return M.call(this, e) ? !0 : this === N && e && e._writableState instanceof j
            }
        })) : M = function(e) {
            return e instanceof this
        };

        function N(e) {
            u = u || g();
            var t = this instanceof u;
            if (!t && !M.call(N, this)) return new N(e);
            this._writableState = new j(e, this, t), this.writable = !0, e && (typeof e.write == `function` && (this._write = e.write), typeof e.writev == `function` && (this._writev = e.writev), typeof e.destroy == `function` && (this._destroy = e.destroy), typeof e.final == `function` && (this._final = e.final)), _.call(this)
        }
        N.prototype.pipe = function() {
            A(this, new D)
        };

        function P(e, t) {
            var n = new k;
            A(e, n), r.nextTick(t, n)
        }

        function F(e, t, n, i) {
            var a;
            return n === null ? a = new te : typeof n != `string` && !t.objectMode && (a = new ee(`chunk`, [`string`, `Buffer`], n)), !a || (A(e, a), r.nextTick(i, a), !1)
        }
        N.prototype.write = function(e, t, n) {
            var r = this._writableState,
                i = !1,
                a = !r.objectMode && x(e);
            return a && !v.isBuffer(e) && (e = b(e)), typeof t == `function` && (n = t, t = null), a ? t = `buffer` : t || (t = r.defaultEncoding), typeof n != `function` && (n = re), r.ending ? P(this, n) : (a || F(this, r, e, n)) && (r.pendingcb++, i = ie(this, r, a, e, t, n)), i
        }, N.prototype.cork = function() {
            this._writableState.corked++
        }, N.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && U(this, e))
        }, N.prototype.setDefaultEncoding = function(e) {
            if (typeof e == `string` && (e = e.toLowerCase()), !([`hex`, `utf8`, `utf-8`, `ascii`, `binary`, `base64`, `ucs2`, `ucs-2`, `utf16le`, `utf-16le`, `raw`].indexOf((e + ``).toLowerCase()) > -1)) throw new ne(e);
            return this._writableState.defaultEncoding = e, this
        }, Object.defineProperty(N.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        });

        function I(e, t, n) {
            return !e.objectMode && e.decodeStrings !== !1 && typeof t == `string` && (t = v.from(t, n)), t
        }
        Object.defineProperty(N.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        });

        function ie(e, t, n, r, i, a) {
            if (!n) {
                var o = I(t, r, i);
                r !== o && (n = !0, i = `buffer`, r = o)
            }
            var s = t.objectMode ? 1 : r.length;
            t.length += s;
            var c = t.length < t.highWaterMark;
            if (c || (t.needDrain = !0), t.writing || t.corked) {
                var l = t.lastBufferedRequest;
                t.lastBufferedRequest = {
                    chunk: r,
                    encoding: i,
                    isBuf: n,
                    callback: a,
                    next: null
                }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
            } else L(e, t, !1, s, r, i, a);
            return c
        }

        function L(e, t, n, r, i, a, o) {
            t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new O(`write`)) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1
        }

        function R(e, t, n, i, a) {
            --t.pendingcb, n ? (r.nextTick(a, i), r.nextTick(q, e, t), e._writableState.errorEmitted = !0, A(e, i)) : (a(i), e._writableState.errorEmitted = !0, A(e, i), q(e, t))
        }

        function z(e) {
            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
        }

        function B(e, t) {
            var n = e._writableState,
                i = n.sync,
                a = n.writecb;
            if (typeof a != `function`) throw new E;
            if (z(n), t) R(e, n, i, t, a);
            else {
                var o = W(n) || e.destroyed;
                !o && !n.corked && !n.bufferProcessing && n.bufferedRequest && U(e, n), i ? r.nextTick(V, e, n, o, a) : V(e, n, o, a)
            }
        }

        function V(e, t, n, r) {
            n || H(e, t), t.pendingcb--, r(), q(e, t)
        }

        function H(e, t) {
            t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit(`drain`))
        }

        function U(e, t) {
            t.bufferProcessing = !0;
            var n = t.bufferedRequest;
            if (e._writev && n && n.next) {
                var r = t.bufferedRequestCount,
                    i = Array(r),
                    a = t.corkedRequestsFree;
                a.entry = n;
                for (var o = 0, s = !0; n;) i[o] = n, n.isBuf || (s = !1), n = n.next, o += 1;
                i.allBuffers = s, L(e, t, !0, t.length, i, ``, a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new c(t), t.bufferedRequestCount = 0
            } else {
                for (; n;) {
                    var l = n.chunk,
                        u = n.encoding,
                        d = n.callback;
                    if (L(e, t, !1, t.objectMode ? 1 : l.length, l, u, d), n = n.next, t.bufferedRequestCount--, t.writing) break
                }
                n === null && (t.lastBufferedRequest = null)
            }
            t.bufferedRequest = n, t.bufferProcessing = !1
        }
        N.prototype._write = function(e, t, n) {
            n(new T(`_write()`))
        }, N.prototype._writev = null, N.prototype.end = function(e, t, n) {
            var r = this._writableState;
            return typeof e == `function` ? (n = e, e = null, t = null) : typeof t == `function` && (n = t, t = null), e != null && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || J(this, r, n), this
        }, Object.defineProperty(N.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        });

        function W(e) {
            return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing
        }

        function G(e, t) {
            e._final(function(n) {
                t.pendingcb--, n && A(e, n), t.prefinished = !0, e.emit(`prefinish`), q(e, t)
            })
        }

        function K(e, t) {
            !t.prefinished && !t.finalCalled && (typeof e._final == `function` && !t.destroyed ? (t.pendingcb++, t.finalCalled = !0, r.nextTick(G, e, t)) : (t.prefinished = !0, e.emit(`prefinish`)))
        }

        function q(e, t) {
            var n = W(t);
            if (n && (K(e, t), t.pendingcb === 0 && (t.finished = !0, e.emit(`finish`), t.autoDestroy))) {
                var r = e._readableState;
                (!r || r.autoDestroy && r.endEmitted) && e.destroy()
            }
            return n
        }

        function J(e, t, n) {
            t.ending = !0, q(e, t), n && (t.finished ? r.nextTick(n) : e.once(`finish`, n)), t.ended = !0, e.writable = !1
        }

        function Y(e, t, n) {
            var r = e.entry;
            for (e.entry = null; r;) {
                var i = r.callback;
                t.pendingcb--, i(n), r = r.next
            }
            t.corkedRequestsFree.next = e
        }
        Object.defineProperty(N.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return this._writableState !== void 0 && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }), N.prototype.destroy = S.destroy, N.prototype._undestroy = S.undestroy, N.prototype._destroy = function(e, t) {
            t(e)
        }
    })),
    g = e(((e, t) => {
        i();
        var n = Object.keys || function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t
        };
        t.exports = d;
        var o = S(),
            s = h();
        a()(d, o);
        for (var c = n(s.prototype), l = 0; l < c.length; l++) {
            var u = c[l];
            d.prototype[u] || (d.prototype[u] = s.prototype[u])
        }

        function d(e) {
            if (!(this instanceof d)) return new d(e);
            o.call(this, e), s.call(this, e), this.allowHalfOpen = !0, e && (e.readable === !1 && (this.readable = !1), e.writable === !1 && (this.writable = !1), e.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once(`end`, f)))
        }
        Object.defineProperty(d.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), Object.defineProperty(d.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }), Object.defineProperty(d.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        });

        function f() {
            this._writableState.ended || r.nextTick(p, this)
        }

        function p(e) {
            e.end()
        }
        Object.defineProperty(d.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
            },
            set: function(e) {
                this._readableState !== void 0 && this._writableState !== void 0 && (this._readableState.destroyed = e, this._writableState.destroyed = e)
            }
        })
    })),
    _ = e(((e, t) => {
        var n = s(),
            r = n.Buffer;

        function i(e, t) {
            for (var n in e) t[n] = e[n]
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = n : (i(n, e), e.Buffer = a);

        function a(e, t, n) {
            return r(e, t, n)
        }
        a.prototype = Object.create(r.prototype), i(r, a), a.from = function(e, t, n) {
            if (typeof e == `number`) throw TypeError(`Argument must not be a number`);
            return r(e, t, n)
        }, a.alloc = function(e, t, n) {
            if (typeof e != `number`) throw TypeError(`Argument must be a number`);
            var i = r(e);
            return t === void 0 ? i.fill(0) : typeof n == `string` ? i.fill(t, n) : i.fill(t), i
        }, a.allocUnsafe = function(e) {
            if (typeof e != `number`) throw TypeError(`Argument must be a number`);
            return r(e)
        }, a.allocUnsafeSlow = function(e) {
            if (typeof e != `number`) throw TypeError(`Argument must be a number`);
            return n.SlowBuffer(e)
        }
    })),
    v = e((e => {
        var t = _().Buffer,
            n = t.isEncoding || function(e) {
                switch (e = `` + e, e && e.toLowerCase()) {
                    case `hex`:
                    case `utf8`:
                    case `utf-8`:
                    case `ascii`:
                    case `binary`:
                    case `base64`:
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                    case `raw`:
                        return !0;
                    default:
                        return !1
                }
            };

        function r(e) {
            if (!e) return `utf8`;
            for (var t;;) switch (e) {
                case `utf8`:
                case `utf-8`:
                    return `utf8`;
                case `ucs2`:
                case `ucs-2`:
                case `utf16le`:
                case `utf-16le`:
                    return `utf16le`;
                case `latin1`:
                case `binary`:
                    return `latin1`;
                case `base64`:
                case `ascii`:
                case `hex`:
                    return e;
                default:
                    if (t) return;
                    e = (`` + e).toLowerCase(), t = !0
            }
        }

        function i(e) {
            var i = r(e);
            if (typeof i != `string` && (t.isEncoding === n || !n(e))) throw Error(`Unknown encoding: ` + e);
            return i || e
        }
        e.StringDecoder = a;

        function a(e) {
            this.encoding = i(e);
            var n;
            switch (this.encoding) {
                case `utf16le`:
                    this.text = f, this.end = p, n = 4;
                    break;
                case `utf8`:
                    this.fillLast = l, n = 4;
                    break;
                case `base64`:
                    this.text = m, this.end = h, n = 3;
                    break;
                default:
                    this.write = g, this.end = v;
                    return
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(n)
        }
        a.prototype.write = function(e) {
            if (e.length === 0) return ``;
            var t, n;
            if (this.lastNeed) {
                if (t = this.fillLast(e), t === void 0) return ``;
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ``
        }, a.prototype.end = d, a.prototype.text = u, a.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        };

        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function s(e, t, n) {
            var r = t.length - 1;
            if (r < n) return 0;
            var i = o(t[r]);
            return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || i === -2 ? 0 : (i = o(t[r]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || i === -2 ? 0 : (i = o(t[r]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0))
        }

        function c(e, t, n) {
            if ((t[0] & 192) != 128) return e.lastNeed = 0, `�`;
            if (e.lastNeed > 1 && t.length > 1) {
                if ((t[1] & 192) != 128) return e.lastNeed = 1, `�`;
                if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) return e.lastNeed = 2, `�`
            }
        }

        function l(e) {
            var t = this.lastTotal - this.lastNeed,
                n = c(this, e, t);
            if (n !== void 0) return n;
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length
        }

        function u(e, t) {
            var n = s(this, e, t);
            if (!this.lastNeed) return e.toString(`utf8`, t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString(`utf8`, t, r)
        }

        function d(e) {
            var t = e && e.length ? this.write(e) : ``;
            return this.lastNeed ? t + `�` : t
        }

        function f(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString(`utf16le`, t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString(`utf16le`, t, e.length - 1)
        }

        function p(e) {
            var t = e && e.length ? this.write(e) : ``;
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString(`utf16le`, 0, n)
            }
            return t
        }

        function m(e, t) {
            var n = (e.length - t) % 3;
            return n === 0 ? e.toString(`base64`, t) : (this.lastNeed = 3 - n, this.lastTotal = 3, n === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString(`base64`, t, e.length - n))
        }

        function h(e) {
            var t = e && e.length ? this.write(e) : ``;
            return this.lastNeed ? t + this.lastChar.toString(`base64`, 0, 3 - this.lastNeed) : t
        }

        function g(e) {
            return e.toString(this.encoding)
        }

        function v(e) {
            return e && e.length ? this.write(e) : ``
        }
    })),
    y = e(((e, t) => {
        var n = f().codes.ERR_STREAM_PREMATURE_CLOSE;

        function r(e) {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    var n = [...arguments];
                    e.apply(this, n)
                }
            }
        }

        function i() {}

        function a(e) {
            return e.setHeader && typeof e.abort == `function`
        }

        function o(e, t, s) {
            if (typeof t == `function`) return o(e, null, t);
            t || (t = {}), s = r(s || i);
            var c = t.readable || t.readable !== !1 && e.readable,
                l = t.writable || t.writable !== !1 && e.writable,
                u = function() {
                    e.writable || f()
                },
                d = e._writableState && e._writableState.finished,
                f = function() {
                    l = !1, d = !0, c || s.call(e)
                },
                p = e._readableState && e._readableState.endEmitted,
                m = function() {
                    c = !1, p = !0, l || s.call(e)
                },
                h = function(t) {
                    s.call(e, t)
                },
                g = function() {
                    var t;
                    if (c && !p) return (!e._readableState || !e._readableState.ended) && (t = new n), s.call(e, t);
                    if (l && !d) return (!e._writableState || !e._writableState.ended) && (t = new n), s.call(e, t)
                },
                _ = function() {
                    e.req.on(`finish`, f)
                };
            return a(e) ? (e.on(`complete`, f), e.on(`abort`, g), e.req ? _() : e.on(`request`, _)) : l && !e._writableState && (e.on(`end`, u), e.on(`close`, u)), e.on(`end`, m), e.on(`finish`, f), t.error !== !1 && e.on(`error`, h), e.on(`close`, g),
                function() {
                    e.removeListener(`complete`, f), e.removeListener(`abort`, g), e.removeListener(`request`, _), e.req && e.req.removeListener(`finish`, f), e.removeListener(`end`, u), e.removeListener(`close`, u), e.removeListener(`finish`, f), e.removeListener(`end`, m), e.removeListener(`error`, h), e.removeListener(`close`, g)
                }
        }
        t.exports = o
    })),
    b = e(((e, t) => {
        i();
        var n;

        function a(e, t, n) {
            return t = o(t), t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e) {
            var t = s(e, `string`);
            return typeof t == `symbol` ? t : String(t)
        }

        function s(e, t) {
            if (typeof e != `object` || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var r = n.call(e, t || `default`);
                if (typeof r != `object`) return r;
                throw TypeError(`@@toPrimitive must return a primitive value.`)
            }
            return (t === `string` ? String : Number)(e)
        }
        var c = y(),
            l = Symbol(`lastResolve`),
            u = Symbol(`lastReject`),
            d = Symbol(`error`),
            f = Symbol(`ended`),
            p = Symbol(`lastPromise`),
            m = Symbol(`handlePromise`),
            h = Symbol(`stream`);

        function g(e, t) {
            return {
                value: e,
                done: t
            }
        }

        function _(e) {
            var t = e[l];
            if (t !== null) {
                var n = e[h].read();
                n !== null && (e[p] = null, e[l] = null, e[u] = null, t(g(n, !1)))
            }
        }

        function v(e) {
            r.nextTick(_, e)
        }

        function b(e, t) {
            return function(n, r) {
                e.then(function() {
                    t[f] ? n(g(void 0, !0)) : t[m](n, r)
                }, r)
            }
        }
        var x = Object.getPrototypeOf(function() {}),
            S = Object.setPrototypeOf((n = {
                get stream() {
                    return this[h]
                },
                next: function() {
                    var e = this,
                        t = this[d];
                    if (t !== null) return Promise.reject(t);
                    if (this[f]) return Promise.resolve(g(void 0, !0));
                    if (this[h].destroyed) return new Promise(function(t, n) {
                        r.nextTick(function() {
                            e[d] ? n(e[d]) : t(g(void 0, !0))
                        })
                    });
                    var n = this[p],
                        i;
                    if (n) i = new Promise(b(n, this));
                    else {
                        var a = this[h].read();
                        if (a !== null) return Promise.resolve(g(a, !1));
                        i = new Promise(this[m])
                    }
                    return this[p] = i, i
                }
            }, a(n, Symbol.asyncIterator, function() {
                return this
            }), a(n, `return`, function() {
                var e = this;
                return new Promise(function(t, n) {
                    e[h].destroy(null, function(e) {
                        e ? n(e) : t(g(void 0, !0))
                    })
                })
            }), n), x);
        t.exports = function(e) {
            var t, n = Object.create(S, (t = {}, a(t, h, {
                value: e,
                writable: !0
            }), a(t, l, {
                value: null,
                writable: !0
            }), a(t, u, {
                value: null,
                writable: !0
            }), a(t, d, {
                value: null,
                writable: !0
            }), a(t, f, {
                value: e._readableState.endEmitted,
                writable: !0
            }), a(t, m, {
                value: function(e, t) {
                    var r = n[h].read();
                    r ? (n[p] = null, n[l] = null, n[u] = null, e(g(r, !1))) : (n[l] = e, n[u] = t)
                },
                writable: !0
            }), t));
            return n[p] = null, c(e, function(e) {
                if (e && e.code !== `ERR_STREAM_PREMATURE_CLOSE`) {
                    var t = n[u];
                    t !== null && (n[p] = null, n[l] = null, n[u] = null, t(e)), n[d] = e
                } else {
                    var r = n[l];
                    r !== null && (n[p] = null, n[l] = null, n[u] = null, r(g(void 0, !0))), n[f] = !0
                }
            }), e.on(`readable`, v.bind(null, n)), n
        }
    })),
    x = e(((e, t) => {
        t.exports = function() {
            throw Error(`Readable.from is not available in the browser`)
        }
    })),
    S = e(((e, m) => {
        t(), i(), m.exports = R;
        var h;
        R.ReadableState = L, c().EventEmitter;
        var _ = function(e, t) {
                return e.listeners(t).length
            },
            y = l(),
            S = s().Buffer,
            C = (n === void 0 ? typeof window < `u` ? window : typeof self < `u` ? self : {} : n).Uint8Array || function() {};

        function w(e) {
            return S.from(e)
        }

        function ee(e) {
            return S.isBuffer(e) || e instanceof C
        }
        var T = o(),
            E = T && T.debuglog ? T.debuglog(`stream`) : function() {},
            D = u(),
            O = d(),
            te = p().getHighWaterMark,
            k = f().codes,
            ne = k.ERR_INVALID_ARG_TYPE,
            A = k.ERR_STREAM_PUSH_AFTER_EOF,
            re = k.ERR_METHOD_NOT_IMPLEMENTED,
            j = k.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
            M, N, P;
        a()(R, y);
        var F = O.errorOrDestroy,
            I = [`error`, `close`, `destroy`, `pause`, `resume`];

        function ie(e, t, n) {
            if (typeof e.prependListener == `function`) return e.prependListener(t, n);
            !e._events || !e._events[t] ? e.on(t, n) : Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]]
        }

        function L(e, t, n) {
            h = h || g(), e = e || {}, typeof n != `boolean` && (n = t instanceof h), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = te(this, e, `readableHighWaterMark`, n), this.buffer = new D, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || `utf8`, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (M || (M = v().StringDecoder), this.decoder = new M(e.encoding), this.encoding = e.encoding)
        }

        function R(e) {
            if (h = h || g(), !(this instanceof R)) return new R(e);
            var t = this instanceof h;
            this._readableState = new L(e, this, t), this.readable = !0, e && (typeof e.read == `function` && (this._read = e.read), typeof e.destroy == `function` && (this._destroy = e.destroy)), y.call(this)
        }
        Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return this._readableState !== void 0 && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }), R.prototype.destroy = O.destroy, R.prototype._undestroy = O.undestroy, R.prototype._destroy = function(e, t) {
            t(e)
        }, R.prototype.push = function(e, t) {
            var n = this._readableState,
                r;
            return n.objectMode ? r = !0 : typeof e == `string` && (t = t || n.defaultEncoding, t !== n.encoding && (e = S.from(e, t), t = ``), r = !0), z(this, e, t, !1, r)
        }, R.prototype.unshift = function(e) {
            return z(this, e, null, !0, !1)
        };

        function z(e, t, n, r, i) {
            E(`readableAddChunk`, t);
            var a = e._readableState;
            if (t === null) a.reading = !1, G(e, a);
            else {
                var o;
                if (i || (o = V(a, t)), o) F(e, o);
                else if (a.objectMode || t && t.length > 0) {
                    if (typeof t != `string` && !a.objectMode && Object.getPrototypeOf(t) !== S.prototype && (t = w(t)), r) a.endEmitted ? F(e, new j) : B(e, a, t, !0);
                    else if (a.ended) F(e, new A);
                    else if (a.destroyed) return !1;
                    else a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || t.length !== 0 ? B(e, a, t, !1) : J(e, a)) : B(e, a, t, !1)
                } else r || (a.reading = !1, J(e, a))
            }
            return !a.ended && (a.length < a.highWaterMark || a.length === 0)
        }

        function B(e, t, n, r) {
            t.flowing && t.length === 0 && !t.sync ? (t.awaitDrain = 0, e.emit(`data`, n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && K(e)), J(e, t)
        }

        function V(e, t) {
            var n;
            return !ee(t) && typeof t != `string` && t !== void 0 && !e.objectMode && (n = new ne(`chunk`, [`string`, `Buffer`, `Uint8Array`], t)), n
        }
        R.prototype.isPaused = function() {
            return this._readableState.flowing === !1
        }, R.prototype.setEncoding = function(e) {
            M || (M = v().StringDecoder);
            var t = new M(e);
            this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
            for (var n = this._readableState.buffer.head, r = ``; n !== null;) r += t.write(n.data), n = n.next;
            return this._readableState.buffer.clear(), r !== `` && this._readableState.buffer.push(r), this._readableState.length = r.length, this
        };
        var H = 1073741824;

        function U(e) {
            return e >= H ? e = H : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
        }

        function W(e, t) {
            return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : e === e ? (e > t.highWaterMark && (t.highWaterMark = U(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) : t.flowing && t.length ? t.buffer.head.data.length : t.length
        }
        R.prototype.read = function(e) {
            E(`read`, e), e = parseInt(e, 10);
            var t = this._readableState,
                n = e;
            if (e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && ((t.highWaterMark === 0 ? t.length > 0 : t.length >= t.highWaterMark) || t.ended)) return E(`read: emitReadable`, t.length, t.ended), t.length === 0 && t.ended ? Z(this) : K(this), null;
            if (e = W(e, t), e === 0 && t.ended) return t.length === 0 && Z(this), null;
            var r = t.needReadable;
            E(`need readable`, r), (t.length === 0 || t.length - e < t.highWaterMark) && (r = !0, E(`length less than watermark`, r)), t.ended || t.reading ? (r = !1, E(`reading or ended`, r)) : r && (E(`do read`), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = W(n, t)));
            var i = e > 0 ? ue(e, t) : null;
            return i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), t.length === 0 && (t.ended || (t.needReadable = !0), n !== e && t.ended && Z(this)), i !== null && this.emit(`data`, i), i
        };

        function G(e, t) {
            if (E(`onEofChunk`), !t.ended) {
                if (t.decoder) {
                    var n = t.decoder.end();
                    n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                }
                t.ended = !0, t.sync ? K(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, q(e)))
            }
        }

        function K(e) {
            var t = e._readableState;
            E(`emitReadable`, t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (E(`emitReadable`, t.flowing), t.emittedReadable = !0, r.nextTick(q, e))
        }

        function q(e) {
            var t = e._readableState;
            E(`emitReadable_`, t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit(`readable`), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, le(e)
        }

        function J(e, t) {
            t.readingMore || (t.readingMore = !0, r.nextTick(Y, e, t))
        }

        function Y(e, t) {
            for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0);) {
                var n = t.length;
                if (E(`maybeReadMore read 0`), e.read(0), n === t.length) break
            }
            t.readingMore = !1
        }
        R.prototype._read = function(e) {
            F(this, new re(`_read()`))
        }, R.prototype.pipe = function(e, t) {
            var n = this,
                i = this._readableState;
            switch (i.pipesCount) {
                case 0:
                    i.pipes = e;
                    break;
                case 1:
                    i.pipes = [i.pipes, e];
                    break;
                default:
                    i.pipes.push(e)
            }
            i.pipesCount += 1, E(`pipe count=%d opts=%j`, i.pipesCount, t);
            var a = (!t || t.end !== !1) && e !== r.stdout && e !== r.stderr ? s : h;
            i.endEmitted ? r.nextTick(a) : n.once(`end`, a), e.on(`unpipe`, o);

            function o(e, t) {
                E(`onunpipe`), e === n && t && t.hasUnpiped === !1 && (t.hasUnpiped = !0, u())
            }

            function s() {
                E(`onend`), e.end()
            }
            var c = X(n);
            e.on(`drain`, c);
            var l = !1;

            function u() {
                E(`cleanup`), e.removeListener(`close`, p), e.removeListener(`finish`, m), e.removeListener(`drain`, c), e.removeListener(`error`, f), e.removeListener(`unpipe`, o), n.removeListener(`end`, s), n.removeListener(`end`, h), n.removeListener(`data`, d), l = !0, i.awaitDrain && (!e._writableState || e._writableState.needDrain) && c()
            }
            n.on(`data`, d);

            function d(t) {
                E(`ondata`);
                var r = e.write(t);
                E(`dest.write`, r), r === !1 && ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && de(i.pipes, e) !== -1) && !l && (E(`false write response, pause`, i.awaitDrain), i.awaitDrain++), n.pause())
            }

            function f(t) {
                E(`onerror`, t), h(), e.removeListener(`error`, f), _(e, `error`) === 0 && F(e, t)
            }
            ie(e, `error`, f);

            function p() {
                e.removeListener(`finish`, m), h()
            }
            e.once(`close`, p);

            function m() {
                E(`onfinish`), e.removeListener(`close`, p), h()
            }
            e.once(`finish`, m);

            function h() {
                E(`unpipe`), n.unpipe(e)
            }
            return e.emit(`pipe`, n), i.flowing || (E(`pipe resume`), n.resume()), e
        };

        function X(e) {
            return function() {
                var t = e._readableState;
                E(`pipeOnDrain`, t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && _(e, `data`) && (t.flowing = !0, le(e))
            }
        }
        R.prototype.unpipe = function(e) {
            var t = this._readableState,
                n = {
                    hasUnpiped: !1
                };
            if (t.pipesCount === 0) return this;
            if (t.pipesCount === 1) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit(`unpipe`, this, n)), this;
            if (!e) {
                var r = t.pipes,
                    i = t.pipesCount;
                t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                for (var a = 0; a < i; a++) r[a].emit(`unpipe`, this, {
                    hasUnpiped: !1
                });
                return this
            }
            var o = de(t.pipes, e);
            return o === -1 || (t.pipes.splice(o, 1), --t.pipesCount, t.pipesCount === 1 && (t.pipes = t.pipes[0]), e.emit(`unpipe`, this, n)), this
        }, R.prototype.on = function(e, t) {
            var n = y.prototype.on.call(this, e, t),
                i = this._readableState;
            return e === `data` ? (i.readableListening = this.listenerCount(`readable`) > 0, i.flowing !== !1 && this.resume()) : e === `readable` && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, E(`on readable`, i.length, i.reading), i.length ? K(this) : i.reading || r.nextTick(oe, this)), n
        }, R.prototype.addListener = R.prototype.on, R.prototype.removeListener = function(e, t) {
            var n = y.prototype.removeListener.call(this, e, t);
            return e === `readable` && r.nextTick(ae, this), n
        }, R.prototype.removeAllListeners = function(e) {
            var t = y.prototype.removeAllListeners.apply(this, arguments);
            return (e === `readable` || e === void 0) && r.nextTick(ae, this), t
        };

        function ae(e) {
            var t = e._readableState;
            t.readableListening = e.listenerCount(`readable`) > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount(`data`) > 0 && e.resume()
        }

        function oe(e) {
            E(`readable nexttick read 0`), e.read(0)
        }
        R.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (E(`resume`), e.flowing = !e.readableListening, se(this, e)), e.paused = !1, this
        };

        function se(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(ce, e, t))
        }

        function ce(e, t) {
            E(`resume`, t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit(`resume`), le(e), t.flowing && !t.reading && e.read(0)
        }
        R.prototype.pause = function() {
            return E(`call pause flowing=%j`, this._readableState.flowing), this._readableState.flowing !== !1 && (E(`pause`), this._readableState.flowing = !1, this.emit(`pause`)), this._readableState.paused = !0, this
        };

        function le(e) {
            var t = e._readableState;
            for (E(`flow`, t.flowing); t.flowing && e.read() !== null;);
        }
        R.prototype.wrap = function(e) {
            var t = this,
                n = this._readableState,
                r = !1;
            for (var i in e.on(`end`, function() {
                    if (E(`wrapped end`), n.decoder && !n.ended) {
                        var e = n.decoder.end();
                        e && e.length && t.push(e)
                    }
                    t.push(null)
                }), e.on(`data`, function(i) {
                    E(`wrapped data`), n.decoder && (i = n.decoder.write(i)), !(n.objectMode && i == null) && (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()))
                }), e) this[i] === void 0 && typeof e[i] == `function` && (this[i] = function(t) {
                return function() {
                    return e[t].apply(e, arguments)
                }
            }(i));
            for (var a = 0; a < I.length; a++) e.on(I[a], this.emit.bind(this, I[a]));
            return this._read = function(t) {
                E(`wrapped _read`, t), r && (r = !1, e.resume())
            }, this
        }, typeof Symbol == `function` && (R.prototype[Symbol.asyncIterator] = function() {
            return N === void 0 && (N = b()), N(this)
        }), Object.defineProperty(R.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }), Object.defineProperty(R.prototype, "readableBuffer", {
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        }), Object.defineProperty(R.prototype, "readableFlowing", {
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(e) {
                this._readableState && (this._readableState.flowing = e)
            }
        }), R._fromList = ue, Object.defineProperty(R.prototype, "readableLength", {
            enumerable: !1,
            get: function() {
                return this._readableState.length
            }
        });

        function ue(e, t) {
            if (t.length === 0) return null;
            var n;
            return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join(``) : t.buffer.length === 1 ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n
        }

        function Z(e) {
            var t = e._readableState;
            E(`endReadable`, t.endEmitted), t.endEmitted || (t.ended = !0, r.nextTick(Q, t, e))
        }

        function Q(e, t) {
            if (E(`endReadableNT`, e.endEmitted, e.length), !e.endEmitted && e.length === 0 && (e.endEmitted = !0, t.readable = !1, t.emit(`end`), e.autoDestroy)) {
                var n = t._writableState;
                (!n || n.autoDestroy && n.finished) && t.destroy()
            }
        }
        typeof Symbol == `function` && (R.from = function(e, t) {
            return P === void 0 && (P = x()), P(R, e, t)
        });

        function de(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
            return -1
        }
    })),
    C = e(((e, t) => {
        t.exports = u;
        var n = f().codes,
            r = n.ERR_METHOD_NOT_IMPLEMENTED,
            i = n.ERR_MULTIPLE_CALLBACK,
            o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            s = n.ERR_TRANSFORM_WITH_LENGTH_0,
            c = g();
        a()(u, c);

        function l(e, t) {
            var n = this._transformState;
            n.transforming = !1;
            var r = n.writecb;
            if (r === null) return this.emit(`error`, new i);
            n.writechunk = null, n.writecb = null, t != null && this.push(t), r(e);
            var a = this._readableState;
            a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
        }

        function u(e) {
            if (!(this instanceof u)) return new u(e);
            c.call(this, e), this._transformState = {
                afterTransform: l.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == `function` && (this._transform = e.transform), typeof e.flush == `function` && (this._flush = e.flush)), this.on(`prefinish`, d)
        }

        function d() {
            var e = this;
            typeof this._flush == `function` && !this._readableState.destroyed ? this._flush(function(t, n) {
                p(e, t, n)
            }) : p(this, null, null)
        }
        u.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, c.prototype.push.call(this, e, t)
        }, u.prototype._transform = function(e, t, n) {
            n(new r(`_transform()`))
        }, u.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, u.prototype._read = function(e) {
            var t = this._transformState;
            t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }, u.prototype._destroy = function(e, t) {
            c.prototype._destroy.call(this, e, function(e) {
                t(e)
            })
        };

        function p(e, t, n) {
            if (t) return e.emit(`error`, t);
            if (n != null && e.push(n), e._writableState.length) throw new s;
            if (e._transformState.transforming) throw new o;
            return e.push(null)
        }
    })),
    w = e(((e, t) => {
        t.exports = r;
        var n = C();
        a()(r, n);

        function r(e) {
            if (!(this instanceof r)) return new r(e);
            n.call(this, e)
        }
        r.prototype._transform = function(e, t, n) {
            n(null, e)
        }
    })),
    ee = e(((e, t) => {
        var n;

        function r(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(void 0, arguments))
            }
        }
        var i = f().codes,
            a = i.ERR_MISSING_ARGS,
            o = i.ERR_STREAM_DESTROYED;

        function s(e) {
            if (e) throw e
        }

        function c(e) {
            return e.setHeader && typeof e.abort == `function`
        }

        function l(e, t, i, a) {
            a = r(a);
            var s = !1;
            e.on(`close`, function() {
                s = !0
            }), n === void 0 && (n = y()), n(e, {
                readable: t,
                writable: i
            }, function(e) {
                if (e) return a(e);
                s = !0, a()
            });
            var l = !1;
            return function(t) {
                if (!s && !l) {
                    if (l = !0, c(e)) return e.abort();
                    if (typeof e.destroy == `function`) return e.destroy();
                    a(t || new o(`pipe`))
                }
            }
        }

        function u(e) {
            e()
        }

        function d(e, t) {
            return e.pipe(t)
        }

        function p(e) {
            return !e.length || typeof e[e.length - 1] != `function` ? s : e.pop()
        }

        function m() {
            var e = [...arguments],
                t = p(e);
            if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new a(`streams`);
            var n, r = e.map(function(i, a) {
                var o = a < e.length - 1;
                return l(i, o, a > 0, function(e) {
                    n || (n = e), e && r.forEach(u), !o && (r.forEach(u), t(n))
                })
            });
            return e.reduce(d)
        }
        t.exports = m
    })),
    T = e(((e, t) => {
        t.exports = r;
        var n = c().EventEmitter;
        a()(r, n), r.Readable = S(), r.Writable = h(), r.Duplex = g(), r.Transform = C(), r.PassThrough = w(), r.finished = y(), r.pipeline = ee(), r.Stream = r;

        function r() {
            n.call(this)
        }
        r.prototype.pipe = function(e, t) {
            var r = this;

            function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause()
            }
            r.on(`data`, i);

            function a() {
                r.readable && r.resume && r.resume()
            }
            e.on(`drain`, a), !e._isStdio && (!t || t.end !== !1) && (r.on(`end`, s), r.on(`close`, c));
            var o = !1;

            function s() {
                o || (o = !0, e.end())
            }

            function c() {
                o || (o = !0, typeof e.destroy == `function` && e.destroy())
            }

            function l(e) {
                if (u(), n.listenerCount(this, `error`) === 0) throw e
            }
            r.on(`error`, l), e.on(`error`, l);

            function u() {
                r.removeListener(`data`, i), e.removeListener(`drain`, a), r.removeListener(`end`, s), r.removeListener(`close`, c), r.removeListener(`error`, l), e.removeListener(`error`, l), r.removeListener(`end`, u), r.removeListener(`close`, u), e.removeListener(`close`, u)
            }
            return r.on(`end`, u), r.on(`close`, u), e.on(`close`, u), e.emit(`pipe`, r), e
        }
    })),
    E = e((e => {
        function t(e) {
            return Array.isArray ? Array.isArray(e) : g(e) === `[object Array]`
        }
        e.isArray = t;

        function n(e) {
            return typeof e == `boolean`
        }
        e.isBoolean = n;

        function r(e) {
            return e === null
        }
        e.isNull = r;

        function i(e) {
            return e == null
        }
        e.isNullOrUndefined = i;

        function a(e) {
            return typeof e == `number`
        }
        e.isNumber = a;

        function o(e) {
            return typeof e == `string`
        }
        e.isString = o;

        function c(e) {
            return typeof e == `symbol`
        }
        e.isSymbol = c;

        function l(e) {
            return e === void 0
        }
        e.isUndefined = l;

        function u(e) {
            return g(e) === `[object RegExp]`
        }
        e.isRegExp = u;

        function d(e) {
            return typeof e == `object` && !!e
        }
        e.isObject = d;

        function f(e) {
            return g(e) === `[object Date]`
        }
        e.isDate = f;

        function p(e) {
            return g(e) === `[object Error]` || e instanceof Error
        }
        e.isError = p;

        function m(e) {
            return typeof e == `function`
        }
        e.isFunction = m;

        function h(e) {
            return e === null || typeof e == `boolean` || typeof e == `number` || typeof e == `string` || typeof e == `symbol` || e === void 0
        }
        e.isPrimitive = h, e.isBuffer = s().Buffer.isBuffer;

        function g(e) {
            return Object.prototype.toString.call(e)
        }
    })),
    D = e(((e, t) => {
        i(), t.exports = r === void 0 || !r.version || r.version.indexOf(`v0.`) === 0 || r.version.indexOf(`v1.`) === 0 && r.version.indexOf(`v1.8.`) !== 0 ? {
            nextTick: n
        } : r;

        function n(e, t, n, i) {
            if (typeof e != `function`) throw TypeError(`"callback" argument must be a function`);
            var a = arguments.length,
                o, s;
            switch (a) {
                case 0:
                case 1:
                    return r.nextTick(e);
                case 2:
                    return r.nextTick(function() {
                        e.call(null, t)
                    });
                case 3:
                    return r.nextTick(function() {
                        e.call(null, t, n)
                    });
                case 4:
                    return r.nextTick(function() {
                        e.call(null, t, n, i)
                    });
                default:
                    for (o = Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                    return r.nextTick(function() {
                        e.apply(null, o)
                    })
            }
        }
    }));
export {
    w as a, y as c, g as d, h as f, s as h, ee as i, v as l, c as m, E as n, C as o, m as p, T as r, S as s, D as t, _ as u
};