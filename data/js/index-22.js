import {
    dS as Me,
    by as x,
    bw as Z,
    aA as v,
    r as B,
    x as E,
    aB as ne,
    az as Re,
    aD as we,
    _ as X,
    I as pe,
    B as Se,
    S as ye,
    ai as Ae,
    aj as be,
    bF as Ne,
    aL as ke,
    ak as Ie,
    bc as Pe,
    al as Oe,
    aI as ze,
    aS as Le,
    bd as Be,
    am as Fe
} from "./_index.js";

function H(a, o) {
    var e = typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
    if (!e) {
        if (Array.isArray(a) || (e = Me(a)) || o) {
            e && (a = e);
            var t = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return t >= a.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: a[t++]
                    }
                },
                e: function(u) {
                    throw u
                },
                f: r
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var n, i = !0,
        s = !1;
    return {
        s: function() {
            e = e.call(a)
        },
        n: function() {
            var u = e.next();
            return i = u.done, u
        },
        e: function(u) {
            s = !0, n = u
        },
        f: function() {
            try {
                i || e.return == null || e.return()
            } finally {
                if (s) throw n
            }
        }
    }
}
var G, Y;

function N(a, o, e) {
    if (o < 0 || o > 31 || a >>> o) throw new RangeError("Value out of range");
    for (var t = o - 1; t >= 0; t--) e.push(a >>> t & 1)
}

function _(a, o) {
    return (a >>> o & 1) != 0
}

function P(a) {
    if (!a) throw new Error("Assertion error")
}
var T = function() {
    function a(o, e) {
        Z(this, a), v(this, "modeBits", void 0), v(this, "numBitsCharCount", void 0), this.modeBits = o, this.numBitsCharCount = e
    }
    return x(a, [{
        key: "numCharCountBits",
        value: function(e) {
            return this.numBitsCharCount[Math.floor((e + 7) / 17)]
        }
    }]), a
}();
G = T;
v(T, "NUMERIC", new G(1, [10, 12, 14]));
v(T, "ALPHANUMERIC", new G(2, [9, 11, 13]));
v(T, "BYTE", new G(4, [8, 16, 16]));
v(T, "KANJI", new G(8, [8, 10, 12]));
v(T, "ECI", new G(7, [0, 0, 0]));
var O = x(function a(o, e) {
    Z(this, a), v(this, "ordinal", void 0), v(this, "formatBits", void 0), this.ordinal = o, this.formatBits = e
});
Y = O;
v(O, "LOW", new Y(0, 1));
v(O, "MEDIUM", new Y(1, 0));
v(O, "QUARTILE", new Y(2, 3));
v(O, "HIGH", new Y(3, 2));
var $ = function() {
    function a(o, e, t) {
        if (Z(this, a), v(this, "mode", void 0), v(this, "numChars", void 0), v(this, "bitData", void 0), this.mode = o, this.numChars = e, this.bitData = t, e < 0) throw new RangeError("Invalid argument");
        this.bitData = t.slice()
    }
    return x(a, [{
        key: "getData",
        value: function() {
            return this.bitData.slice()
        }
    }], [{
        key: "makeBytes",
        value: function(e) {
            var t = [],
                r = H(e),
                n;
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    N(i, 8, t)
                }
            } catch (s) {
                r.e(s)
            } finally {
                r.f()
            }
            return new a(T.BYTE, e.length, t)
        }
    }, {
        key: "makeNumeric",
        value: function(e) {
            if (!a.isNumeric(e)) throw new RangeError("String contains non-numeric characters");
            for (var t = [], r = 0; r < e.length;) {
                var n = Math.min(e.length - r, 3);
                N(parseInt(e.substring(r, r + n), 10), n * 3 + 1, t), r += n
            }
            return new a(T.NUMERIC, e.length, t)
        }
    }, {
        key: "makeAlphanumeric",
        value: function(e) {
            if (!a.isAlphanumeric(e)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            var t = [],
                r;
            for (r = 0; r + 2 <= e.length; r += 2) {
                var n = a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)) * 45;
                n += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1)), N(n, 11, t)
            }
            return r < e.length && N(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, t), new a(T.ALPHANUMERIC, e.length, t)
        }
    }, {
        key: "makeSegments",
        value: function(e) {
            return e == "" ? [] : a.isNumeric(e) ? [a.makeNumeric(e)] : a.isAlphanumeric(e) ? [a.makeAlphanumeric(e)] : [a.makeBytes(a.toUtf8ByteArray(e))]
        }
    }, {
        key: "makeEci",
        value: function(e) {
            var t = [];
            if (e < 0) throw new RangeError("ECI assignment value out of range");
            if (e < 128) N(e, 8, t);
            else if (e < 16384) N(2, 2, t), N(e, 14, t);
            else if (e < 1e6) N(6, 3, t), N(e, 21, t);
            else throw new RangeError("ECI assignment value out of range");
            return new a(T.ECI, 0, t)
        }
    }, {
        key: "isNumeric",
        value: function(e) {
            return a.NUMERIC_REGEX.test(e)
        }
    }, {
        key: "isAlphanumeric",
        value: function(e) {
            return a.ALPHANUMERIC_REGEX.test(e)
        }
    }, {
        key: "getTotalBits",
        value: function(e, t) {
            var r = 0,
                n = H(e),
                i;
            try {
                for (n.s(); !(i = n.n()).done;) {
                    var s = i.value,
                        l = s.mode.numCharCountBits(t);
                    if (s.numChars >= 1 << l) return 1 / 0;
                    r += 4 + l + s.bitData.length
                }
            } catch (u) {
                n.e(u)
            } finally {
                n.f()
            }
            return r
        }
    }, {
        key: "toUtf8ByteArray",
        value: function(e) {
            for (var t = encodeURI(e), r = [], n = 0; n < t.length; n++) t.charAt(n) != "%" ? r.push(t.charCodeAt(n)) : (r.push(parseInt(t.substring(n + 1, n + 3), 16)), n += 2);
            return r
        }
    }]), a
}();
v($, "NUMERIC_REGEX", /^[0-9]*$/);
v($, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/);
v($, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
var U = function() {
    function a(o, e, t, r) {
        Z(this, a), v(this, "size", void 0), v(this, "mask", void 0), v(this, "modules", []), v(this, "isFunction", []), v(this, "version", void 0), v(this, "errorCorrectionLevel", void 0);
        var n = r;
        if (this.version = o, this.errorCorrectionLevel = e, o < a.MIN_VERSION || o > a.MAX_VERSION) throw new RangeError("Version value out of range");
        if (n < -1 || n > 7) throw new RangeError("Mask value out of range");
        this.size = o * 4 + 17;
        for (var i = [], s = 0; s < this.size; s++) i.push(!1);
        for (var l = 0; l < this.size; l++) this.modules.push(i.slice()), this.isFunction.push(i.slice());
        this.drawFunctionPatterns();
        var u = this.addEccAndInterleave(t);
        if (this.drawCodewords(u), n == -1)
            for (var c = 1e9, m = 0; m < 8; m++) {
                this.applyMask(m), this.drawFormatBits(m);
                var h = this.getPenaltyScore();
                h < c && (n = m, c = h), this.applyMask(m)
            }
        P(0 <= n && n <= 7), this.mask = n, this.applyMask(n), this.drawFormatBits(n), this.isFunction = []
    }
    return x(a, [{
        key: "getModule",
        value: function(e, t) {
            return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
        }
    }, {
        key: "getModules",
        value: function() {
            return this.modules
        }
    }, {
        key: "drawFunctionPatterns",
        value: function() {
            for (var e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
            this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
            for (var t = this.getAlignmentPatternPositions(), r = t.length, n = 0; n < r; n++)
                for (var i = 0; i < r; i++) n == 0 && i == 0 || n == 0 && i == r - 1 || n == r - 1 && i == 0 || this.drawAlignmentPattern(t[n], t[i]);
            this.drawFormatBits(0), this.drawVersion()
        }
    }, {
        key: "drawFormatBits",
        value: function(e) {
            for (var t = this.errorCorrectionLevel.formatBits << 3 | e, r = t, n = 0; n < 10; n++) r = r << 1 ^ (r >>> 9) * 1335;
            var i = (t << 10 | r) ^ 21522;
            P(i >>> 15 == 0);
            for (var s = 0; s <= 5; s++) this.setFunctionModule(8, s, _(i, s));
            this.setFunctionModule(8, 7, _(i, 6)), this.setFunctionModule(8, 8, _(i, 7)), this.setFunctionModule(7, 8, _(i, 8));
            for (var l = 9; l < 15; l++) this.setFunctionModule(14 - l, 8, _(i, l));
            for (var u = 0; u < 8; u++) this.setFunctionModule(this.size - 1 - u, 8, _(i, u));
            for (var c = 8; c < 15; c++) this.setFunctionModule(8, this.size - 15 + c, _(i, c));
            this.setFunctionModule(8, this.size - 8, !0)
        }
    }, {
        key: "drawVersion",
        value: function() {
            if (!(this.version < 7)) {
                for (var e = this.version, t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                var r = this.version << 12 | e;
                P(r >>> 18 == 0);
                for (var n = 0; n < 18; n++) {
                    var i = _(r, n),
                        s = this.size - 11 + n % 3,
                        l = Math.floor(n / 3);
                    this.setFunctionModule(s, l, i), this.setFunctionModule(l, s, i)
                }
            }
        }
    }, {
        key: "drawFinderPattern",
        value: function(e, t) {
            for (var r = -4; r <= 4; r++)
                for (var n = -4; n <= 4; n++) {
                    var i = Math.max(Math.abs(n), Math.abs(r)),
                        s = e + n,
                        l = t + r;
                    0 <= s && s < this.size && 0 <= l && l < this.size && this.setFunctionModule(s, l, i != 2 && i != 4)
                }
        }
    }, {
        key: "drawAlignmentPattern",
        value: function(e, t) {
            for (var r = -2; r <= 2; r++)
                for (var n = -2; n <= 2; n++) this.setFunctionModule(e + n, t + r, Math.max(Math.abs(n), Math.abs(r)) != 1)
        }
    }, {
        key: "setFunctionModule",
        value: function(e, t, r) {
            this.modules[t][e] = r, this.isFunction[t][e] = !0
        }
    }, {
        key: "addEccAndInterleave",
        value: function(e) {
            var t = this.version,
                r = this.errorCorrectionLevel;
            if (e.length != a.getNumDataCodewords(t, r)) throw new RangeError("Invalid argument");
            for (var n = a.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t], i = a.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t], s = Math.floor(a.getNumRawDataModules(t) / 8), l = n - s % n, u = Math.floor(s / n), c = [], m = a.reedSolomonComputeDivisor(i), h = 0, g = 0; h < n; h++) {
                var f = e.slice(g, g + u - i + (h < l ? 0 : 1));
                g += f.length;
                var R = a.reedSolomonComputeRemainder(f, m);
                h < l && f.push(0), c.push(f.concat(R))
            }
            for (var d = [], M = function(C) {
                    c.forEach(function(S, y) {
                        (C != u - i || y >= l) && d.push(S[C])
                    })
                }, w = 0; w < c[0].length; w++) M(w);
            return P(d.length == s), d
        }
    }, {
        key: "drawCodewords",
        value: function(e) {
            if (e.length != Math.floor(a.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            for (var t = 0, r = this.size - 1; r >= 1; r -= 2) {
                r == 6 && (r = 5);
                for (var n = 0; n < this.size; n++)
                    for (var i = 0; i < 2; i++) {
                        var s = r - i,
                            l = (r + 1 & 2) == 0,
                            u = l ? this.size - 1 - n : n;
                        !this.isFunction[u][s] && t < e.length * 8 && (this.modules[u][s] = _(e[t >>> 3], 7 - (t & 7)), t++)
                    }
            }
            P(t == e.length * 8)
        }
    }, {
        key: "applyMask",
        value: function(e) {
            if (e < 0 || e > 7) throw new RangeError("Mask value out of range");
            for (var t = 0; t < this.size; t++)
                for (var r = 0; r < this.size; r++) {
                    var n = void 0;
                    switch (e) {
                        case 0:
                            n = (r + t) % 2 == 0;
                            break;
                        case 1:
                            n = t % 2 == 0;
                            break;
                        case 2:
                            n = r % 3 == 0;
                            break;
                        case 3:
                            n = (r + t) % 3 == 0;
                            break;
                        case 4:
                            n = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                            break;
                        case 5:
                            n = r * t % 2 + r * t % 3 == 0;
                            break;
                        case 6:
                            n = (r * t % 2 + r * t % 3) % 2 == 0;
                            break;
                        case 7:
                            n = ((r + t) % 2 + r * t % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable")
                    }!this.isFunction[t][r] && n && (this.modules[t][r] = !this.modules[t][r])
                }
        }
    }, {
        key: "getPenaltyScore",
        value: function() {
            for (var e = 0, t = 0; t < this.size; t++) {
                for (var r = !1, n = 0, i = [0, 0, 0, 0, 0, 0, 0], s = 0; s < this.size; s++) this.modules[t][s] == r ? (n++, n == 5 ? e += a.PENALTY_N1 : n > 5 && e++) : (this.finderPenaltyAddHistory(n, i), r || (e += this.finderPenaltyCountPatterns(i) * a.PENALTY_N3), r = this.modules[t][s], n = 1);
                e += this.finderPenaltyTerminateAndCount(r, n, i) * a.PENALTY_N3
            }
            for (var l = 0; l < this.size; l++) {
                for (var u = !1, c = 0, m = [0, 0, 0, 0, 0, 0, 0], h = 0; h < this.size; h++) this.modules[h][l] == u ? (c++, c == 5 ? e += a.PENALTY_N1 : c > 5 && e++) : (this.finderPenaltyAddHistory(c, m), u || (e += this.finderPenaltyCountPatterns(m) * a.PENALTY_N3), u = this.modules[h][l], c = 1);
                e += this.finderPenaltyTerminateAndCount(u, c, m) * a.PENALTY_N3
            }
            for (var g = 0; g < this.size - 1; g++)
                for (var f = 0; f < this.size - 1; f++) {
                    var R = this.modules[g][f];
                    R == this.modules[g][f + 1] && R == this.modules[g + 1][f] && R == this.modules[g + 1][f + 1] && (e += a.PENALTY_N2)
                }
            var d = 0,
                M = H(this.modules),
                w;
            try {
                for (M.s(); !(w = M.n()).done;) {
                    var k = w.value;
                    d = k.reduce(function(y, b) {
                        return y + (b ? 1 : 0)
                    }, d)
                }
            } catch (y) {
                M.e(y)
            } finally {
                M.f()
            }
            var C = this.size * this.size,
                S = Math.ceil(Math.abs(d * 20 - C * 10) / C) - 1;
            return P(0 <= S && S <= 9), e += S * a.PENALTY_N4, P(0 <= e && e <= 2568888), e
        }
    }, {
        key: "getAlignmentPatternPositions",
        value: function() {
            if (this.version == 1) return [];
            for (var e = Math.floor(this.version / 7) + 2, t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, r = [6], n = this.size - 7; r.length < e; n -= t) r.splice(1, 0, n);
            return r
        }
    }, {
        key: "finderPenaltyCountPatterns",
        value: function(e) {
            var t = e[1];
            P(t <= this.size * 3);
            var r = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
            return (r && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (r && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
        }
    }, {
        key: "finderPenaltyTerminateAndCount",
        value: function(e, t, r) {
            var n = t;
            return e && (this.finderPenaltyAddHistory(n, r), n = 0), n += this.size, this.finderPenaltyAddHistory(n, r), this.finderPenaltyCountPatterns(r)
        }
    }, {
        key: "finderPenaltyAddHistory",
        value: function(e, t) {
            var r = e;
            t[0] == 0 && (r += this.size), t.pop(), t.unshift(r)
        }
    }], [{
        key: "encodeText",
        value: function(e, t) {
            var r = $.makeSegments(e);
            return a.encodeSegments(r, t)
        }
    }, {
        key: "encodeBinary",
        value: function(e, t) {
            var r = $.makeBytes(e);
            return a.encodeSegments([r], t)
        }
    }, {
        key: "encodeSegments",
        value: function(e, t) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 40,
                i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1,
                s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
            if (!(a.MIN_VERSION <= r && r <= n && n <= a.MAX_VERSION) || i < -1 || i > 7) throw new RangeError("Invalid value");
            var l, u;
            for (l = r;; l++) {
                var c = a.getNumDataCodewords(l, t) * 8,
                    m = $.getTotalBits(e, l);
                if (m <= c) {
                    u = m;
                    break
                }
                if (l >= n) throw new RangeError("Data too long")
            }
            for (var h = t, g = 0, f = [O.MEDIUM, O.QUARTILE, O.HIGH]; g < f.length; g++) {
                var R = f[g];
                s && u <= a.getNumDataCodewords(l, R) * 8 && (h = R)
            }
            var d = [],
                M = H(e),
                w;
            try {
                for (M.s(); !(w = M.n()).done;) {
                    var k = w.value;
                    N(k.mode.modeBits, 4, d), N(k.numChars, k.mode.numCharCountBits(l), d);
                    var C = H(k.getData()),
                        S;
                    try {
                        for (C.s(); !(S = C.n()).done;) {
                            var y = S.value;
                            d.push(y)
                        }
                    } catch (I) {
                        C.e(I)
                    } finally {
                        C.f()
                    }
                }
            } catch (I) {
                M.e(I)
            } finally {
                M.f()
            }
            P(d.length == u);
            var b = a.getNumDataCodewords(l, h) * 8;
            P(d.length <= b), N(0, Math.min(4, b - d.length), d), N(0, (8 - d.length % 8) % 8, d), P(d.length % 8 == 0);
            for (var p = 236; d.length < b; p ^= 253) N(p, 8, d);
            for (var z = []; z.length * 8 < d.length;) z.push(0);
            return d.forEach(function(I, L) {
                return z[L >>> 3] |= I << 7 - (L & 7)
            }), new a(l, h, z, i)
        }
    }, {
        key: "getNumRawDataModules",
        value: function(e) {
            if (e < a.MIN_VERSION || e > a.MAX_VERSION) throw new RangeError("Version number out of range");
            var t = (16 * e + 128) * e + 64;
            if (e >= 2) {
                var r = Math.floor(e / 7) + 2;
                t -= (25 * r - 10) * r - 55, e >= 7 && (t -= 36)
            }
            return P(208 <= t && t <= 29648), t
        }
    }, {
        key: "getNumDataCodewords",
        value: function(e, t) {
            return Math.floor(a.getNumRawDataModules(e) / 8) - a.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e] * a.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]
        }
    }, {
        key: "reedSolomonComputeDivisor",
        value: function(e) {
            if (e < 1 || e > 255) throw new RangeError("Degree out of range");
            for (var t = [], r = 0; r < e - 1; r++) t.push(0);
            t.push(1);
            for (var n = 1, i = 0; i < e; i++) {
                for (var s = 0; s < t.length; s++) t[s] = a.reedSolomonMultiply(t[s], n), s + 1 < t.length && (t[s] ^= t[s + 1]);
                n = a.reedSolomonMultiply(n, 2)
            }
            return t
        }
    }, {
        key: "reedSolomonComputeRemainder",
        value: function(e, t) {
            var r = t.map(function() {
                    return 0
                }),
                n = H(e),
                i;
            try {
                var s = function() {
                    var u = i.value,
                        c = u ^ r.shift();
                    r.push(0), t.forEach(function(m, h) {
                        return r[h] ^= a.reedSolomonMultiply(m, c)
                    })
                };
                for (n.s(); !(i = n.n()).done;) s()
            } catch (l) {
                n.e(l)
            } finally {
                n.f()
            }
            return r
        }
    }, {
        key: "reedSolomonMultiply",
        value: function(e, t) {
            if (e >>> 8 || t >>> 8) throw new RangeError("Byte out of range");
            for (var r = 0, n = 7; n >= 0; n--) r = r << 1 ^ (r >>> 7) * 285, r ^= (t >>> n & 1) * e;
            return P(r >>> 8 == 0), r
        }
    }]), a
}();
v(U, "MIN_VERSION", 1);
v(U, "MAX_VERSION", 40);
v(U, "PENALTY_N1", 3);
v(U, "PENALTY_N2", 3);
v(U, "PENALTY_N3", 40);
v(U, "PENALTY_N4", 10);
v(U, "ECC_CODEWORDS_PER_BLOCK", [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
]);
v(U, "NUM_ERROR_CORRECTION_BLOCKS", [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
]);
var Te = {
        L: O.LOW,
        M: O.MEDIUM,
        Q: O.QUARTILE,
        H: O.HIGH
    },
    ae = 128,
    oe = "L",
    ie = "#FFFFFF",
    se = "#000000",
    le = !1,
    ue = 1,
    De = 4,
    _e = 0,
    Ue = .1;

function ce(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        e = [];
    return a.forEach(function(t, r) {
        var n = null;
        t.forEach(function(i, s) {
            if (!i && n !== null) {
                e.push("M".concat(n + o, " ").concat(r + o, "h").concat(s - n, "v1H").concat(n + o, "z")), n = null;
                return
            }
            if (s === t.length - 1) {
                if (!i) return;
                n === null ? e.push("M".concat(s + o, ",").concat(r + o, " h1v1H").concat(s + o, "z")) : e.push("M".concat(n + o, ",").concat(r + o, " h").concat(s + 1 - n, "v1H").concat(n + o, "z"));
                return
            }
            i && n === null && (n = s)
        })
    }), e.join("")
}

function de(a, o) {
    return a.slice().map(function(e, t) {
        return t < o.y || t >= o.y + o.h ? e : e.map(function(r, n) {
            return n < o.x || n >= o.x + o.w ? r : !1
        })
    })
}

function Ve(a, o, e, t) {
    if (t == null) return null;
    var r = a.length + e * 2,
        n = Math.floor(o * Ue),
        i = r / o,
        s = (t.width || n) * i,
        l = (t.height || n) * i,
        u = t.x == null ? a.length / 2 - s / 2 : t.x * i,
        c = t.y == null ? a.length / 2 - l / 2 : t.y * i,
        m = t.opacity == null ? 1 : t.opacity,
        h = null;
    if (t.excavate) {
        var g = Math.floor(u),
            f = Math.floor(c),
            R = Math.ceil(s + u - g),
            d = Math.ceil(l + c - f);
        h = {
            x: g,
            y: f,
            w: R,
            h: d
        }
    }
    var M = t.crossOrigin;
    return {
        x: u,
        y: c,
        h: l,
        w: s,
        excavation: h,
        opacity: m,
        crossOrigin: M
    }
}

function $e(a, o) {
    return o != null ? Math.floor(o) : a ? De : _e
}
var Qe = function() {
    try {
        new Path2D().addPath(new Path2D)
    } catch {
        return !1
    }
    return !0
}();

function ve(a) {
    var o = a.value,
        e = a.level,
        t = a.minVersion,
        r = a.includeMargin,
        n = a.marginSize,
        i = a.imageSettings,
        s = a.size,
        l = B.useMemo(function() {
            var f = $.makeSegments(o);
            return U.encodeSegments(f, Te[e], t)
        }, [o, e, t]),
        u = B.useMemo(function() {
            var f = l.getModules(),
                R = $e(r, n),
                d = f.length + R * 2,
                M = Ve(f, s, R, i);
            return {
                cells: f,
                margin: R,
                numCells: d,
                calculatedImageSettings: M
            }
        }, [l, s, i, r, n]),
        c = u.cells,
        m = u.margin,
        h = u.numCells,
        g = u.calculatedImageSettings;
    return {
        qrcode: l,
        margin: m,
        cells: c,
        numCells: h,
        calculatedImageSettings: g
    }
}
var He = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "marginSize", "style", "imageSettings"],
    he = E.forwardRef(function(o, e) {
        var t = o.value,
            r = o.size,
            n = r === void 0 ? ae : r,
            i = o.level,
            s = i === void 0 ? oe : i,
            l = o.bgColor,
            u = l === void 0 ? ie : l,
            c = o.fgColor,
            m = c === void 0 ? se : c,
            h = o.includeMargin,
            g = h === void 0 ? le : h,
            f = o.minVersion,
            R = f === void 0 ? ue : f,
            d = o.marginSize,
            M = o.style,
            w = o.imageSettings,
            k = ne(o, He),
            C = w == null ? void 0 : w.src,
            S = B.useRef(null),
            y = B.useRef(null),
            b = B.useCallback(function(F) {
                S.current = F, typeof e == "function" ? e(F) : e && (e.current = F)
            }, [e]),
            p = B.useState(!1),
            z = Re(p, 2),
            I = z[1],
            L = ve({
                value: t,
                level: s,
                minVersion: R,
                includeMargin: g,
                marginSize: d,
                imageSettings: w,
                size: n
            }),
            V = L.margin,
            Q = L.cells,
            W = L.numCells,
            A = L.calculatedImageSettings;
        B.useEffect(function() {
            if (S.current != null) {
                var F = S.current,
                    D = F.getContext("2d");
                if (!D) return;
                var J = Q,
                    K = y.current,
                    ee = A != null && K !== null && K.complete && K.naturalHeight !== 0 && K.naturalWidth !== 0;
                ee && A.excavation != null && (J = de(Q, A.excavation));
                var te = window.devicePixelRatio || 1;
                F.height = F.width = n * te;
                var re = n / W * te;
                D.scale(re, re), D.fillStyle = u, D.fillRect(0, 0, W, W), D.fillStyle = m, Qe ? D.fill(new Path2D(ce(J, V))) : Q.forEach(function(me, ge) {
                    me.forEach(function(Ce, Ee) {
                        Ce && D.fillRect(Ee + V, ge + V, 1, 1)
                    })
                }), A && (D.globalAlpha = A.opacity), ee && D.drawImage(K, A.x + V, A.y + V, A.w, A.h)
            }
        }), B.useEffect(function() {
            I(!1)
        }, [C]);
        var q = we({
                height: n,
                width: n
            }, M),
            j = null;
        return C != null && (j = E.createElement("img", {
            src: C,
            key: C,
            style: {
                display: "none"
            },
            onLoad: function() {
                I(!0)
            },
            ref: y,
            crossOrigin: A == null ? void 0 : A.crossOrigin
        })), E.createElement(E.Fragment, null, E.createElement("canvas", X({
            style: q,
            height: n,
            width: n,
            ref: b,
            role: "img"
        }, k)), j)
    });
he.displayName = "QRCodeCanvas";
var Ge = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "title", "marginSize", "imageSettings"],
    fe = E.forwardRef(function(o, e) {
        var t = o.value,
            r = o.size,
            n = r === void 0 ? ae : r,
            i = o.level,
            s = i === void 0 ? oe : i,
            l = o.bgColor,
            u = l === void 0 ? ie : l,
            c = o.fgColor,
            m = c === void 0 ? se : c,
            h = o.includeMargin,
            g = h === void 0 ? le : h,
            f = o.minVersion,
            R = f === void 0 ? ue : f,
            d = o.title,
            M = o.marginSize,
            w = o.imageSettings,
            k = ne(o, Ge),
            C = ve({
                value: t,
                level: s,
                minVersion: R,
                includeMargin: g,
                marginSize: M,
                imageSettings: w,
                size: n
            }),
            S = C.margin,
            y = C.cells,
            b = C.numCells,
            p = C.calculatedImageSettings,
            z = y,
            I = null;
        w != null && p != null && (p.excavation != null && (z = de(y, p.excavation)), I = E.createElement("image", {
            href: w.src,
            height: p.h,
            width: p.w,
            x: p.x + S,
            y: p.y + S,
            preserveAspectRatio: "none",
            opacity: p.opacity,
            crossOrigin: p.crossOrigin
        }));
        var L = ce(z, S);
        return E.createElement("svg", X({
            height: n,
            width: n,
            viewBox: "0 0 ".concat(b, " ").concat(b),
            ref: e,
            role: "img"
        }, k), !!d && E.createElement("title", null, d), E.createElement("path", {
            fill: u,
            d: "M0,0 h".concat(b, "v").concat(b, "H0z"),
            shapeRendering: "crispEdges"
        }), E.createElement("path", {
            fill: m,
            d: L,
            shapeRendering: "crispEdges"
        }), I)
    });
fe.displayName = "QRCodeSVG";
var We = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"
                }
            }]
        },
        name: "reload",
        theme: "outlined"
    },
    Ke = function(o, e) {
        return B.createElement(pe, X({}, o, {
            ref: e,
            icon: We
        }))
    },
    Ye = B.forwardRef(Ke);
const je = E.createElement(ye, null);

function xe({
    prefixCls: a,
    locale: o,
    onRefresh: e,
    statusRender: t,
    status: r
}) {
    const n = E.createElement(E.Fragment, null, E.createElement("p", {
            className: `${a}-expired`
        }, o == null ? void 0 : o.expired), e && E.createElement(Se, {
            type: "link",
            icon: E.createElement(Ye, null),
            onClick: e
        }, o == null ? void 0 : o.refresh)),
        i = E.createElement("p", {
            className: `${a}-scanned`
        }, o == null ? void 0 : o.scanned),
        s = {
            expired: n,
            loading: je,
            scanned: i
        };
    return (t ?? (c => s[c.status]))({
        status: r,
        locale: o,
        onRefresh: e
    })
}
const Ze = a => {
        const {
            componentCls: o,
            lineWidth: e,
            lineType: t,
            colorSplit: r
        } = a;
        return {
            [o]: Object.assign(Object.assign({}, ke(a)), {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: a.paddingSM,
                backgroundColor: a.colorWhite,
                borderRadius: a.borderRadiusLG,
                border: `${Ie(e)} ${t} ${r}`,
                position: "relative",
                overflow: "hidden",
                [`& > ${o}-mask`]: {
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    color: a.colorText,
                    lineHeight: a.lineHeight,
                    background: a.QRCodeMaskBackgroundColor,
                    textAlign: "center",
                    [`& > ${o}-expired, & > ${o}-scanned`]: {
                        color: a.QRCodeTextColor
                    }
                },
                "> canvas": {
                    alignSelf: "stretch",
                    flex: "auto",
                    minWidth: 0
                },
                "&-icon": {
                    marginBlockEnd: a.marginXS,
                    fontSize: a.controlHeight
                }
            }),
            [`${o}-borderless`]: {
                borderColor: "transparent",
                padding: 0,
                borderRadius: 0
            }
        }
    },
    qe = a => ({
        QRCodeMaskBackgroundColor: new Ne(a.colorBgContainer).setA(.96).toRgbString()
    }),
    Xe = Ae("QRCode", a => {
        const o = be(a, {
            QRCodeTextColor: a.colorText
        });
        return Ze(o)
    }, qe);
var Je = function(a, o) {
    var e = {};
    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && o.indexOf(t) < 0 && (e[t] = a[t]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(a); r < t.length; r++) o.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(a, t[r]) && (e[t[r]] = a[t[r]]);
    return e
};
const tt = a => {
    var o, e, t, r;
    const [, n] = Pe(), {
        value: i,
        type: s = "canvas",
        icon: l = "",
        size: u = 160,
        iconSize: c,
        color: m = n.colorText,
        errorLevel: h = "M",
        status: g = "active",
        bordered: f = !0,
        onRefresh: R,
        style: d,
        className: M,
        rootClassName: w,
        prefixCls: k,
        bgColor: C = "transparent",
        statusRender: S
    } = a, y = Je(a, ["value", "type", "icon", "size", "iconSize", "color", "errorLevel", "status", "bordered", "onRefresh", "style", "className", "rootClassName", "prefixCls", "bgColor", "statusRender"]), {
        getPrefixCls: b
    } = B.useContext(Oe), p = b("qrcode", k), [z, I, L] = Xe(p), V = {
        src: l,
        x: void 0,
        y: void 0,
        height: typeof c == "number" ? c : (o = c == null ? void 0 : c.height) !== null && o !== void 0 ? o : 40,
        width: typeof c == "number" ? c : (e = c == null ? void 0 : c.width) !== null && e !== void 0 ? e : 40,
        excavate: !0,
        crossOrigin: "anonymous"
    }, Q = ze(y, !0), W = Le(y, Object.keys(Q)), A = Object.assign({
        value: i,
        size: u,
        level: h,
        bgColor: C,
        fgColor: m,
        style: {
            width: d == null ? void 0 : d.width,
            height: d == null ? void 0 : d.height
        },
        imageSettings: l ? V : void 0
    }, Q), [q] = Be("QRCode");
    if (!i) return null;
    const j = Fe(p, M, w, I, L, {
            [`${p}-borderless`]: !f
        }),
        F = Object.assign(Object.assign({
            backgroundColor: C
        }, d), {
            width: (t = d == null ? void 0 : d.width) !== null && t !== void 0 ? t : u,
            height: (r = d == null ? void 0 : d.height) !== null && r !== void 0 ? r : u
        });
    return z(E.createElement("div", Object.assign({}, W, {
        className: j,
        style: F
    }), g !== "active" && E.createElement("div", {
        className: `${p}-mask`
    }, E.createElement(xe, {
        prefixCls: p,
        locale: q,
        status: g,
        onRefresh: R,
        statusRender: S
    })), s === "canvas" ? E.createElement(he, Object.assign({}, A)) : E.createElement(fe, Object.assign({}, A))))
};
export {
    tt as Q
};