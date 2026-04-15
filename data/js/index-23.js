import {
    dT as Ce,
    by as j,
    bw as Z,
    aA as f,
    x as g,
    aK as Ee,
    aB as ne,
    az as Re,
    aD as we,
    _ as X,
    r as q,
    I as Me,
    B as pe,
    S as ye,
    ai as Se,
    aj as be,
    aL as Ae,
    ak as Ne,
    bG as Pe,
    bc as ke,
    al as Ie,
    aI as Le,
    aS as Oe,
    bd as ze,
    am as Be
} from "./_index.js";

function V(n, o) {
    var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!e) {
        if (Array.isArray(n) || (e = Ce(n)) || o) {
            e && (n = e);
            var t = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return t >= n.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: n[t++]
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
    var a, i = !0,
        l = !1;
    return {
        s: function() {
            e = e.call(n)
        },
        n: function() {
            var u = e.next();
            return i = u.done, u
        },
        e: function(u) {
            l = !0, a = u
        },
        f: function() {
            try {
                i || e.return == null || e.return()
            } finally {
                if (l) throw a
            }
        }
    }
}
var H, K;

function P(n, o, e) {
    if (o < 0 || o > 31 || n >>> o) throw new RangeError("Value out of range");
    for (var t = o - 1; t >= 0; t--) e.push(n >>> t & 1)
}

function T(n, o) {
    return (n >>> o & 1) != 0
}

function L(n) {
    if (!n) throw new Error("Assertion error")
}
var F = (function() {
    function n(o, e) {
        Z(this, n), f(this, "modeBits", void 0), f(this, "numBitsCharCount", void 0), this.modeBits = o, this.numBitsCharCount = e
    }
    return j(n, [{
        key: "numCharCountBits",
        value: function(e) {
            return this.numBitsCharCount[Math.floor((e + 7) / 17)]
        }
    }]), n
})();
H = F;
f(F, "NUMERIC", new H(1, [10, 12, 14]));
f(F, "ALPHANUMERIC", new H(2, [9, 11, 13]));
f(F, "BYTE", new H(4, [8, 16, 16]));
f(F, "KANJI", new H(8, [8, 10, 12]));
f(F, "ECI", new H(7, [0, 0, 0]));
var O = j(function n(o, e) {
    Z(this, n), f(this, "ordinal", void 0), f(this, "formatBits", void 0), this.ordinal = o, this.formatBits = e
});
K = O;
f(O, "LOW", new K(0, 1));
f(O, "MEDIUM", new K(1, 0));
f(O, "QUARTILE", new K(2, 3));
f(O, "HIGH", new K(3, 2));
var $ = (function() {
    function n(o, e, t) {
        if (Z(this, n), f(this, "mode", void 0), f(this, "numChars", void 0), f(this, "bitData", void 0), this.mode = o, this.numChars = e, this.bitData = t, e < 0) throw new RangeError("Invalid argument");
        this.bitData = t.slice()
    }
    return j(n, [{
        key: "getData",
        value: function() {
            return this.bitData.slice()
        }
    }], [{
        key: "makeBytes",
        value: function(e) {
            var t = [],
                r = V(e),
                a;
            try {
                for (r.s(); !(a = r.n()).done;) {
                    var i = a.value;
                    P(i, 8, t)
                }
            } catch (l) {
                r.e(l)
            } finally {
                r.f()
            }
            return new n(F.BYTE, e.length, t)
        }
    }, {
        key: "makeNumeric",
        value: function(e) {
            if (!n.isNumeric(e)) throw new RangeError("String contains non-numeric characters");
            for (var t = [], r = 0; r < e.length;) {
                var a = Math.min(e.length - r, 3);
                P(parseInt(e.substring(r, r + a), 10), a * 3 + 1, t), r += a
            }
            return new n(F.NUMERIC, e.length, t)
        }
    }, {
        key: "makeAlphanumeric",
        value: function(e) {
            if (!n.isAlphanumeric(e)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            var t = [],
                r;
            for (r = 0; r + 2 <= e.length; r += 2) {
                var a = n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)) * 45;
                a += n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1)), P(a, 11, t)
            }
            return r < e.length && P(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, t), new n(F.ALPHANUMERIC, e.length, t)
        }
    }, {
        key: "makeSegments",
        value: function(e) {
            return e == "" ? [] : n.isNumeric(e) ? [n.makeNumeric(e)] : n.isAlphanumeric(e) ? [n.makeAlphanumeric(e)] : [n.makeBytes(n.toUtf8ByteArray(e))]
        }
    }, {
        key: "makeEci",
        value: function(e) {
            var t = [];
            if (e < 0) throw new RangeError("ECI assignment value out of range");
            if (e < 128) P(e, 8, t);
            else if (e < 16384) P(2, 2, t), P(e, 14, t);
            else if (e < 1e6) P(6, 3, t), P(e, 21, t);
            else throw new RangeError("ECI assignment value out of range");
            return new n(F.ECI, 0, t)
        }
    }, {
        key: "isNumeric",
        value: function(e) {
            return n.NUMERIC_REGEX.test(e)
        }
    }, {
        key: "isAlphanumeric",
        value: function(e) {
            return n.ALPHANUMERIC_REGEX.test(e)
        }
    }, {
        key: "getTotalBits",
        value: function(e, t) {
            var r = 0,
                a = V(e),
                i;
            try {
                for (a.s(); !(i = a.n()).done;) {
                    var l = i.value,
                        s = l.mode.numCharCountBits(t);
                    if (l.numChars >= 1 << s) return 1 / 0;
                    r += 4 + s + l.bitData.length
                }
            } catch (u) {
                a.e(u)
            } finally {
                a.f()
            }
            return r
        }
    }, {
        key: "toUtf8ByteArray",
        value: function(e) {
            for (var t = encodeURI(e), r = [], a = 0; a < t.length; a++) t.charAt(a) != "%" ? r.push(t.charCodeAt(a)) : (r.push(parseInt(t.substring(a + 1, a + 3), 16)), a += 2);
            return r
        }
    }]), n
})();
f($, "NUMERIC_REGEX", /^[0-9]*$/);
f($, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/);
f($, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
var D = (function() {
    function n(o, e, t, r) {
        Z(this, n), f(this, "size", void 0), f(this, "mask", void 0), f(this, "modules", []), f(this, "isFunction", []), f(this, "version", void 0), f(this, "errorCorrectionLevel", void 0);
        var a = r;
        if (this.version = o, this.errorCorrectionLevel = e, o < n.MIN_VERSION || o > n.MAX_VERSION) throw new RangeError("Version value out of range");
        if (a < -1 || a > 7) throw new RangeError("Mask value out of range");
        this.size = o * 4 + 17;
        for (var i = [], l = 0; l < this.size; l++) i.push(!1);
        for (var s = 0; s < this.size; s++) this.modules.push(i.slice()), this.isFunction.push(i.slice());
        this.drawFunctionPatterns();
        var u = this.addEccAndInterleave(t);
        if (this.drawCodewords(u), a == -1)
            for (var c = 1e9, v = 0; v < 8; v++) {
                this.applyMask(v), this.drawFormatBits(v);
                var h = this.getPenaltyScore();
                h < c && (a = v, c = h), this.applyMask(v)
            }
        L(0 <= a && a <= 7), this.mask = a, this.applyMask(a), this.drawFormatBits(a), this.isFunction = []
    }
    return j(n, [{
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
            for (var t = this.getAlignmentPatternPositions(), r = t.length, a = 0; a < r; a++)
                for (var i = 0; i < r; i++) a == 0 && i == 0 || a == 0 && i == r - 1 || a == r - 1 && i == 0 || this.drawAlignmentPattern(t[a], t[i]);
            this.drawFormatBits(0), this.drawVersion()
        }
    }, {
        key: "drawFormatBits",
        value: function(e) {
            for (var t = this.errorCorrectionLevel.formatBits << 3 | e, r = t, a = 0; a < 10; a++) r = r << 1 ^ (r >>> 9) * 1335;
            var i = (t << 10 | r) ^ 21522;
            L(i >>> 15 == 0);
            for (var l = 0; l <= 5; l++) this.setFunctionModule(8, l, T(i, l));
            this.setFunctionModule(8, 7, T(i, 6)), this.setFunctionModule(8, 8, T(i, 7)), this.setFunctionModule(7, 8, T(i, 8));
            for (var s = 9; s < 15; s++) this.setFunctionModule(14 - s, 8, T(i, s));
            for (var u = 0; u < 8; u++) this.setFunctionModule(this.size - 1 - u, 8, T(i, u));
            for (var c = 8; c < 15; c++) this.setFunctionModule(8, this.size - 15 + c, T(i, c));
            this.setFunctionModule(8, this.size - 8, !0)
        }
    }, {
        key: "drawVersion",
        value: function() {
            if (!(this.version < 7)) {
                for (var e = this.version, t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                var r = this.version << 12 | e;
                L(r >>> 18 == 0);
                for (var a = 0; a < 18; a++) {
                    var i = T(r, a),
                        l = this.size - 11 + a % 3,
                        s = Math.floor(a / 3);
                    this.setFunctionModule(l, s, i), this.setFunctionModule(s, l, i)
                }
            }
        }
    }, {
        key: "drawFinderPattern",
        value: function(e, t) {
            for (var r = -4; r <= 4; r++)
                for (var a = -4; a <= 4; a++) {
                    var i = Math.max(Math.abs(a), Math.abs(r)),
                        l = e + a,
                        s = t + r;
                    0 <= l && l < this.size && 0 <= s && s < this.size && this.setFunctionModule(l, s, i != 2 && i != 4)
                }
        }
    }, {
        key: "drawAlignmentPattern",
        value: function(e, t) {
            for (var r = -2; r <= 2; r++)
                for (var a = -2; a <= 2; a++) this.setFunctionModule(e + a, t + r, Math.max(Math.abs(a), Math.abs(r)) != 1)
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
            if (e.length != n.getNumDataCodewords(t, r)) throw new RangeError("Invalid argument");
            for (var a = n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t], i = n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t], l = Math.floor(n.getNumRawDataModules(t) / 8), s = a - l % a, u = Math.floor(l / a), c = [], v = n.reedSolomonComputeDivisor(i), h = 0, m = 0; h < a; h++) {
                var C = e.slice(m, m + u - i + (h < s ? 0 : 1));
                m += C.length;
                var w = n.reedSolomonComputeRemainder(C, v);
                h < s && C.push(0), c.push(C.concat(w))
            }
            for (var d = [], E = function(R) {
                    c.forEach(function(M, S) {
                        (R != u - i || S >= s) && d.push(M[R])
                    })
                }, p = 0; p < c[0].length; p++) E(p);
            return L(d.length == l), d
        }
    }, {
        key: "drawCodewords",
        value: function(e) {
            if (e.length != Math.floor(n.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            for (var t = 0, r = this.size - 1; r >= 1; r -= 2) {
                r == 6 && (r = 5);
                for (var a = 0; a < this.size; a++)
                    for (var i = 0; i < 2; i++) {
                        var l = r - i,
                            s = (r + 1 & 2) == 0,
                            u = s ? this.size - 1 - a : a;
                        !this.isFunction[u][l] && t < e.length * 8 && (this.modules[u][l] = T(e[t >>> 3], 7 - (t & 7)), t++)
                    }
            }
            L(t == e.length * 8)
        }
    }, {
        key: "applyMask",
        value: function(e) {
            if (e < 0 || e > 7) throw new RangeError("Mask value out of range");
            for (var t = 0; t < this.size; t++)
                for (var r = 0; r < this.size; r++) {
                    var a = void 0;
                    switch (e) {
                        case 0:
                            a = (r + t) % 2 == 0;
                            break;
                        case 1:
                            a = t % 2 == 0;
                            break;
                        case 2:
                            a = r % 3 == 0;
                            break;
                        case 3:
                            a = (r + t) % 3 == 0;
                            break;
                        case 4:
                            a = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                            break;
                        case 5:
                            a = r * t % 2 + r * t % 3 == 0;
                            break;
                        case 6:
                            a = (r * t % 2 + r * t % 3) % 2 == 0;
                            break;
                        case 7:
                            a = ((r + t) % 2 + r * t % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable")
                    }!this.isFunction[t][r] && a && (this.modules[t][r] = !this.modules[t][r])
                }
        }
    }, {
        key: "getPenaltyScore",
        value: function() {
            for (var e = 0, t = 0; t < this.size; t++) {
                for (var r = !1, a = 0, i = [0, 0, 0, 0, 0, 0, 0], l = 0; l < this.size; l++) this.modules[t][l] == r ? (a++, a == 5 ? e += n.PENALTY_N1 : a > 5 && e++) : (this.finderPenaltyAddHistory(a, i), r || (e += this.finderPenaltyCountPatterns(i) * n.PENALTY_N3), r = this.modules[t][l], a = 1);
                e += this.finderPenaltyTerminateAndCount(r, a, i) * n.PENALTY_N3
            }
            for (var s = 0; s < this.size; s++) {
                for (var u = !1, c = 0, v = [0, 0, 0, 0, 0, 0, 0], h = 0; h < this.size; h++) this.modules[h][s] == u ? (c++, c == 5 ? e += n.PENALTY_N1 : c > 5 && e++) : (this.finderPenaltyAddHistory(c, v), u || (e += this.finderPenaltyCountPatterns(v) * n.PENALTY_N3), u = this.modules[h][s], c = 1);
                e += this.finderPenaltyTerminateAndCount(u, c, v) * n.PENALTY_N3
            }
            for (var m = 0; m < this.size - 1; m++)
                for (var C = 0; C < this.size - 1; C++) {
                    var w = this.modules[m][C];
                    w == this.modules[m][C + 1] && w == this.modules[m + 1][C] && w == this.modules[m + 1][C + 1] && (e += n.PENALTY_N2)
                }
            var d = 0,
                E = V(this.modules),
                p;
            try {
                for (E.s(); !(p = E.n()).done;) {
                    var k = p.value;
                    d = k.reduce(function(S, b) {
                        return S + (b ? 1 : 0)
                    }, d)
                }
            } catch (S) {
                E.e(S)
            } finally {
                E.f()
            }
            var R = this.size * this.size,
                M = Math.ceil(Math.abs(d * 20 - R * 10) / R) - 1;
            return L(0 <= M && M <= 9), e += M * n.PENALTY_N4, L(0 <= e && e <= 2568888), e
        }
    }, {
        key: "getAlignmentPatternPositions",
        value: function() {
            if (this.version == 1) return [];
            for (var e = Math.floor(this.version / 7) + 2, t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, r = [6], a = this.size - 7; r.length < e; a -= t) r.splice(1, 0, a);
            return r
        }
    }, {
        key: "finderPenaltyCountPatterns",
        value: function(e) {
            var t = e[1];
            L(t <= this.size * 3);
            var r = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
            return (r && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (r && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
        }
    }, {
        key: "finderPenaltyTerminateAndCount",
        value: function(e, t, r) {
            var a = t;
            return e && (this.finderPenaltyAddHistory(a, r), a = 0), a += this.size, this.finderPenaltyAddHistory(a, r), this.finderPenaltyCountPatterns(r)
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
            return n.encodeSegments(r, t)
        }
    }, {
        key: "encodeBinary",
        value: function(e, t) {
            var r = $.makeBytes(e);
            return n.encodeSegments([r], t)
        }
    }, {
        key: "encodeSegments",
        value: function(e, t) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 40,
                i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1,
                l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
            if (!(n.MIN_VERSION <= r && r <= a && a <= n.MAX_VERSION) || i < -1 || i > 7) throw new RangeError("Invalid value");
            var s, u;
            for (s = r;; s++) {
                var c = n.getNumDataCodewords(s, t) * 8,
                    v = $.getTotalBits(e, s);
                if (v <= c) {
                    u = v;
                    break
                }
                if (s >= a) throw new RangeError("Data too long")
            }
            for (var h = t, m = 0, C = [O.MEDIUM, O.QUARTILE, O.HIGH]; m < C.length; m++) {
                var w = C[m];
                l && u <= n.getNumDataCodewords(s, w) * 8 && (h = w)
            }
            var d = [],
                E = V(e),
                p;
            try {
                for (E.s(); !(p = E.n()).done;) {
                    var k = p.value;
                    P(k.mode.modeBits, 4, d), P(k.numChars, k.mode.numCharCountBits(s), d);
                    var R = V(k.getData()),
                        M;
                    try {
                        for (R.s(); !(M = R.n()).done;) {
                            var S = M.value;
                            d.push(S)
                        }
                    } catch (I) {
                        R.e(I)
                    } finally {
                        R.f()
                    }
                }
            } catch (I) {
                E.e(I)
            } finally {
                E.f()
            }
            L(d.length == u);
            var b = n.getNumDataCodewords(s, h) * 8;
            L(d.length <= b), P(0, Math.min(4, b - d.length), d), P(0, (8 - d.length % 8) % 8, d), L(d.length % 8 == 0);
            for (var y = 236; d.length < b; y ^= 253) P(y, 8, d);
            for (var A = []; A.length * 8 < d.length;) A.push(0);
            return d.forEach(function(I, z) {
                A[z >>> 3] |= I << 7 - (z & 7)
            }), new n(s, h, A, i)
        }
    }, {
        key: "getNumRawDataModules",
        value: function(e) {
            if (e < n.MIN_VERSION || e > n.MAX_VERSION) throw new RangeError("Version number out of range");
            var t = (16 * e + 128) * e + 64;
            if (e >= 2) {
                var r = Math.floor(e / 7) + 2;
                t -= (25 * r - 10) * r - 55, e >= 7 && (t -= 36)
            }
            return L(208 <= t && t <= 29648), t
        }
    }, {
        key: "getNumDataCodewords",
        value: function(e, t) {
            return Math.floor(n.getNumRawDataModules(e) / 8) - n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e] * n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]
        }
    }, {
        key: "reedSolomonComputeDivisor",
        value: function(e) {
            if (e < 1 || e > 255) throw new RangeError("Degree out of range");
            for (var t = [], r = 0; r < e - 1; r++) t.push(0);
            t.push(1);
            for (var a = 1, i = 0; i < e; i++) {
                for (var l = 0; l < t.length; l++) t[l] = n.reedSolomonMultiply(t[l], a), l + 1 < t.length && (t[l] ^= t[l + 1]);
                a = n.reedSolomonMultiply(a, 2)
            }
            return t
        }
    }, {
        key: "reedSolomonComputeRemainder",
        value: function(e, t) {
            var r = t.map(function() {
                    return 0
                }),
                a = V(e),
                i;
            try {
                var l = function() {
                    var u = i.value,
                        c = u ^ r.shift();
                    r.push(0), t.forEach(function(v, h) {
                        r[h] ^= n.reedSolomonMultiply(v, c)
                    })
                };
                for (a.s(); !(i = a.n()).done;) l()
            } catch (s) {
                a.e(s)
            } finally {
                a.f()
            }
            return r
        }
    }, {
        key: "reedSolomonMultiply",
        value: function(e, t) {
            if (e >>> 8 || t >>> 8) throw new RangeError("Byte out of range");
            for (var r = 0, a = 7; a >= 0; a--) r = r << 1 ^ (r >>> 7) * 285, r ^= (t >>> a & 1) * e;
            return L(r >>> 8 == 0), r
        }
    }]), n
})();
f(D, "MIN_VERSION", 1);
f(D, "MAX_VERSION", 40);
f(D, "PENALTY_N1", 3);
f(D, "PENALTY_N2", 3);
f(D, "PENALTY_N3", 40);
f(D, "PENALTY_N4", 10);
f(D, "ECC_CODEWORDS_PER_BLOCK", [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
]);
f(D, "NUM_ERROR_CORRECTION_BLOCKS", [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
]);
var _e = {
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
    Fe = 4,
    Te = 0,
    De = .1,
    ce = function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            t = [];
        return o.forEach(function(r, a) {
            var i = null;
            r.forEach(function(l, s) {
                if (!l && i !== null) {
                    t.push("M".concat(i + e, " ").concat(a + e, "h").concat(s - i, "v1H").concat(i + e, "z")), i = null;
                    return
                }
                if (s === r.length - 1) {
                    if (!l) return;
                    i === null ? t.push("M".concat(s + e, ",").concat(a + e, " h1v1H").concat(s + e, "z")) : t.push("M".concat(i + e, ",").concat(a + e, " h").concat(s + 1 - i, "v1H").concat(i + e, "z"));
                    return
                }
                l && i === null && (i = s)
            })
        }), t.join("")
    },
    de = function(o, e) {
        return o.slice().map(function(t, r) {
            return r < e.y || r >= e.y + e.h ? t : t.map(function(a, i) {
                return i < e.x || i >= e.x + e.w ? a : !1
            })
        })
    },
    Ue = function(o, e, t, r) {
        if (r == null) return null;
        var a = o.length + t * 2,
            i = Math.floor(e * De),
            l = a / e,
            s = (r.width || i) * l,
            u = (r.height || i) * l,
            c = r.x == null ? o.length / 2 - s / 2 : r.x * l,
            v = r.y == null ? o.length / 2 - u / 2 : r.y * l,
            h = r.opacity == null ? 1 : r.opacity,
            m = null;
        if (r.excavate) {
            var C = Math.floor(c),
                w = Math.floor(v),
                d = Math.ceil(s + c - C),
                E = Math.ceil(u + v - w);
            m = {
                x: C,
                y: w,
                w: d,
                h: E
            }
        }
        var p = r.crossOrigin;
        return {
            x: c,
            y: v,
            h: u,
            w: s,
            excavation: m,
            opacity: h,
            crossOrigin: p
        }
    },
    $e = function(o, e) {
        return e != null ? Math.max(Math.floor(e), 0) : o ? Fe : Te
    },
    Qe = (function() {
        try {
            new Path2D().addPath(new Path2D)
        } catch {
            return !1
        }
        return !0
    })(),
    ve = function(o) {
        var e = o.value,
            t = o.level,
            r = o.minVersion,
            a = o.includeMargin,
            i = o.marginSize,
            l = o.imageSettings,
            s = o.size,
            u = o.boostLevel,
            c = g.useMemo(function() {
                var v = Array.isArray(e) ? e : [e],
                    h = v.reduce(function(m, C) {
                        return m.push.apply(m, Ee($.makeSegments(C))), m
                    }, []);
                return D.encodeSegments(h, _e[t], r, void 0, void 0, u)
            }, [e, t, r, u]);
        return g.useMemo(function() {
            var v = c.getModules(),
                h = $e(a, i),
                m = v.length + h * 2,
                C = Ue(v, s, h, l);
            return {
                cells: v,
                margin: h,
                numCells: m,
                calculatedImageSettings: C,
                qrcode: c
            }
        }, [c, s, l, a, i])
    },
    Ve = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "marginSize", "style", "imageSettings", "boostLevel"],
    He = g.forwardRef(function(n, o) {
        var e = n.value,
            t = n.size,
            r = t === void 0 ? ae : t,
            a = n.level,
            i = a === void 0 ? oe : a,
            l = n.bgColor,
            s = l === void 0 ? ie : l,
            u = n.fgColor,
            c = u === void 0 ? se : u,
            v = n.includeMargin,
            h = v === void 0 ? le : v,
            m = n.minVersion,
            C = m === void 0 ? ue : m,
            w = n.marginSize,
            d = n.style,
            E = n.imageSettings,
            p = n.boostLevel,
            k = ne(n, Ve),
            R = E == null ? void 0 : E.src,
            M = g.useRef(null),
            S = g.useRef(null),
            b = g.useCallback(function(_) {
                M.current = _, typeof o == "function" ? o(_) : o && (o.current = _)
            }, [o]),
            y = g.useState(!1),
            A = Re(y, 2),
            I = A[1],
            z = ve({
                value: e,
                level: i,
                minVersion: C,
                includeMargin: h,
                marginSize: w,
                imageSettings: E,
                size: r,
                boostLevel: p
            }),
            U = z.margin,
            G = z.cells,
            Q = z.numCells,
            N = z.calculatedImageSettings;
        g.useEffect(function() {
            if (M.current) {
                var _ = M.current,
                    B = _.getContext("2d");
                if (!B) return;
                var J = G,
                    W = S.current,
                    ee = N != null && W !== null && W.complete && W.naturalHeight !== 0 && W.naturalWidth !== 0;
                ee && N.excavation != null && (J = de(G, N.excavation));
                var te = window.devicePixelRatio || 1;
                _.height = _.width = r * te;
                var re = r / Q * te;
                B.scale(re, re), B.fillStyle = s, B.fillRect(0, 0, Q, Q), B.fillStyle = c, Qe ? B.fill(new Path2D(ce(J, U))) : G.forEach(function(fe, he) {
                    fe.forEach(function(me, ge) {
                        me && B.fillRect(ge + U, he + U, 1, 1)
                    })
                }), N && (B.globalAlpha = N.opacity), ee && B.drawImage(W, N.x + U, N.y + U, N.w, N.h)
            }
        }), g.useEffect(function() {
            I(!1)
        }, [R]);
        var Y = we({
                height: r,
                width: r
            }, d),
            x = null;
        return R != null && (x = g.createElement("img", {
            alt: "QR-Code",
            src: R,
            key: R,
            style: {
                display: "none"
            },
            onLoad: function() {
                I(!0)
            },
            ref: S,
            crossOrigin: N == null ? void 0 : N.crossOrigin
        })), g.createElement(g.Fragment, null, g.createElement("canvas", X({
            style: Y,
            height: r,
            width: r,
            ref: b,
            role: "img"
        }, k)), x)
    }),
    Ge = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "title", "marginSize", "imageSettings", "boostLevel"],
    We = g.forwardRef(function(n, o) {
        var e = n.value,
            t = n.size,
            r = t === void 0 ? ae : t,
            a = n.level,
            i = a === void 0 ? oe : a,
            l = n.bgColor,
            s = l === void 0 ? ie : l,
            u = n.fgColor,
            c = u === void 0 ? se : u,
            v = n.includeMargin,
            h = v === void 0 ? le : v,
            m = n.minVersion,
            C = m === void 0 ? ue : m,
            w = n.title,
            d = n.marginSize,
            E = n.imageSettings,
            p = n.boostLevel,
            k = ne(n, Ge),
            R = ve({
                value: e,
                level: i,
                minVersion: C,
                includeMargin: h,
                marginSize: d,
                imageSettings: E,
                size: r,
                boostLevel: p
            }),
            M = R.margin,
            S = R.cells,
            b = R.numCells,
            y = R.calculatedImageSettings,
            A = S,
            I = null;
        E != null && y != null && (y.excavation != null && (A = de(S, y.excavation)), I = g.createElement("image", {
            href: E.src,
            height: y.h,
            width: y.w,
            x: y.x + M,
            y: y.y + M,
            preserveAspectRatio: "none",
            opacity: y.opacity,
            crossOrigin: y.crossOrigin
        }));
        var z = ce(A, M);
        return g.createElement("svg", X({
            height: r,
            width: r,
            viewBox: "0 0 ".concat(b, " ").concat(b),
            ref: o,
            role: "img"
        }, k), !!w && g.createElement("title", null, w), g.createElement("path", {
            fill: s,
            d: "M0,0 h".concat(b, "v").concat(b, "H0z"),
            shapeRendering: "crispEdges"
        }), g.createElement("path", {
            fill: c,
            d: z,
            shapeRendering: "crispEdges"
        }), I)
    }),
    Ke = {
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
    Ye = function(o, e) {
        return q.createElement(Me, X({}, o, {
            ref: e,
            icon: Ke
        }))
    },
    xe = q.forwardRef(Ye);
const je = g.createElement(ye, null);

function Ze({
    prefixCls: n,
    locale: o,
    onRefresh: e,
    statusRender: t,
    status: r
}) {
    const a = g.createElement(g.Fragment, null, g.createElement("p", {
            className: `${n}-expired`
        }, o == null ? void 0 : o.expired), e && g.createElement(pe, {
            type: "link",
            icon: g.createElement(xe, null),
            onClick: e
        }, o == null ? void 0 : o.refresh)),
        i = g.createElement("p", {
            className: `${n}-scanned`
        }, o == null ? void 0 : o.scanned),
        l = {
            expired: a,
            loading: je,
            scanned: i
        };
    return (t ?? (c => l[c.status]))({
        status: r,
        locale: o,
        onRefresh: e
    })
}
const Xe = n => {
        const {
            componentCls: o,
            lineWidth: e,
            lineType: t,
            colorSplit: r
        } = n;
        return {
            [o]: Object.assign(Object.assign({}, Ae(n)), {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: n.paddingSM,
                backgroundColor: n.colorWhite,
                borderRadius: n.borderRadiusLG,
                border: `${Ne(e)} ${t} ${r}`,
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
                    color: n.colorText,
                    lineHeight: n.lineHeight,
                    background: n.QRCodeMaskBackgroundColor,
                    textAlign: "center",
                    [`& > ${o}-expired, & > ${o}-scanned`]: {
                        color: n.QRCodeTextColor
                    }
                },
                "> canvas": {
                    alignSelf: "stretch",
                    flex: "auto",
                    minWidth: 0
                },
                "&-icon": {
                    marginBlockEnd: n.marginXS,
                    fontSize: n.controlHeight
                }
            }),
            [`${o}-borderless`]: {
                borderColor: "transparent",
                padding: 0,
                borderRadius: 0
            }
        }
    },
    qe = n => ({
        QRCodeMaskBackgroundColor: new Pe(n.colorBgContainer).setA(.96).toRgbString()
    }),
    Je = Se("QRCode", n => {
        const o = be(n, {
            QRCodeTextColor: n.colorText
        });
        return Xe(o)
    }, qe);
var et = function(n, o) {
    var e = {};
    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && o.indexOf(t) < 0 && (e[t] = n[t]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, t = Object.getOwnPropertySymbols(n); r < t.length; r++) o.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[r]) && (e[t[r]] = n[t[r]]);
    return e
};
const rt = n => {
    var o, e, t, r;
    const [, a] = ke(), {
        value: i,
        type: l = "canvas",
        icon: s = "",
        size: u = 160,
        iconSize: c,
        color: v = a.colorText,
        errorLevel: h = "M",
        status: m = "active",
        bordered: C = !0,
        onRefresh: w,
        style: d,
        className: E,
        rootClassName: p,
        prefixCls: k,
        bgColor: R = "transparent",
        statusRender: M,
        boostLevel: S
    } = n, b = et(n, ["value", "type", "icon", "size", "iconSize", "color", "errorLevel", "status", "bordered", "onRefresh", "style", "className", "rootClassName", "prefixCls", "bgColor", "statusRender", "boostLevel"]), {
        getPrefixCls: y
    } = q.useContext(Ie), A = y("qrcode", k), [I, z, U] = Je(A), G = {
        src: s,
        x: void 0,
        y: void 0,
        height: typeof c == "number" ? c : (o = c == null ? void 0 : c.height) !== null && o !== void 0 ? o : 40,
        width: typeof c == "number" ? c : (e = c == null ? void 0 : c.width) !== null && e !== void 0 ? e : 40,
        excavate: !0,
        crossOrigin: "anonymous"
    }, Q = Le(b, !0), N = Oe(b, Object.keys(Q)), Y = Object.assign({
        value: i,
        size: u,
        level: h,
        bgColor: R,
        fgColor: v,
        style: {
            width: d == null ? void 0 : d.width,
            height: d == null ? void 0 : d.height
        },
        imageSettings: s ? G : void 0,
        boostLevel: S
    }, Q), [x] = ze("QRCode");
    if (!i) return null;
    const _ = Be(A, E, p, z, U, {
            [`${A}-borderless`]: !C
        }),
        B = Object.assign(Object.assign({
            backgroundColor: R
        }, d), {
            width: (t = d == null ? void 0 : d.width) !== null && t !== void 0 ? t : u,
            height: (r = d == null ? void 0 : d.height) !== null && r !== void 0 ? r : u
        });
    return I(g.createElement("div", Object.assign({}, N, {
        className: _,
        style: B
    }), m !== "active" && g.createElement("div", {
        className: `${A}-mask`
    }, g.createElement(Ze, {
        prefixCls: A,
        locale: x,
        status: m,
        onRefresh: w,
        statusRender: M
    })), l === "canvas" ? g.createElement(He, Object.assign({}, Y)) : g.createElement(We, Object.assign({}, Y))))
};
export {
    rt as Q
};