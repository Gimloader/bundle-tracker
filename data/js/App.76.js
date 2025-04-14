function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("cQy2p", (function(r, o) {
    t(r.exports, "default", (function() {
        return E
    }));
    var i = n("fywoC"),
        s = n("a6Cyi"),
        l = n("fe1on"),
        a = n("aJEag"),
        u = n("4gMdJ"),
        c = n("4AA25"),
        h = n("cGvNT"),
        d = n("gHmyG"),
        f = n("93yIm"),
        g = n("l4uFh");
    const {
        useToken: m
    } = g.default;
    var E = t => {
        const {
            value: n,
            icon: r = "",
            size: o = 160,
            iconSize: g = 40,
            color: E = "#000",
            errorLevel: C = "M",
            status: w = "active",
            bordered: M = !0,
            onRefresh: p,
            style: R,
            className: y,
            rootClassName: N,
            prefixCls: v
        } = t, {
            getPrefixCls: A
        } = (0, i.useContext)(u.ConfigContext), P = A("qrcode", v), [b, I] = (0, h.default)(P), {
            token: S
        } = m(), O = (0, i.useMemo)((() => {
            const e = {
                src: r,
                x: void 0,
                y: void 0,
                height: g,
                width: g,
                excavate: !0
            };
            return {
                value: n,
                size: o - 2 * (S.paddingSM + S.lineWidth),
                level: C,
                bgColor: "transparent",
                fgColor: E,
                imageSettings: r ? e : void 0
            }
        }), [C, E, r, g, o, n]);
        if (!n) return null;
        const x = e(l)(P, y, N, I, {
            [`${P}-borderless`]: !M
        });
        return b(e(i).createElement(c.default, {
            componentName: "QRCode"
        }, (t => e(i).createElement("div", {
            style: Object.assign(Object.assign({}, R), {
                width: o,
                height: o
            }),
            className: x
        }, "active" !== w && e(i).createElement("div", {
            className: `${P}-mask`
        }, "loading" === w && e(i).createElement(d.default, null), "expired" === w && e(i).createElement(e(i).Fragment, null, e(i).createElement("p", {
            className: `${P}-expired`
        }, t.expired), "function" == typeof p && e(i).createElement(f.default, {
            type: "link",
            icon: e(i).createElement(a.default, null),
            onClick: p
        }, t.refresh))), e(i).createElement(s.QRCodeCanvas, Object.assign({}, O))))))
    }
})), n.register("a6Cyi", (function(r, o) {
    t(r.exports, "QRCodeCanvas", (function() {
        return A
    }));
    var i, s = n("fywoC"),
        l = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        h = (e, t, n) => t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        d = (e, t) => {
            for (var n in t || (t = {})) u.call(t, n) && h(e, n, t[n]);
            if (a)
                for (var n of a(t)) c.call(t, n) && h(e, n, t[n]);
            return e
        },
        f = (e, t) => {
            var n = {};
            for (var r in e) u.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && a)
                for (var r of a(e)) t.indexOf(r) < 0 && c.call(e, r) && (n[r] = e[r]);
            return n
        };
    (e => {
        const t = class {
            static encodeText(n, r) {
                const o = e.QrSegment.makeSegments(n);
                return t.encodeSegments(o, r)
            }
            static encodeBinary(n, r) {
                const o = e.QrSegment.makeBytes(n);
                return t.encodeSegments([o], r)
            }
            static encodeSegments(e, n, o = 1, s = 40, a = -1, u = !0) {
                if (!(t.MIN_VERSION <= o && o <= s && s <= t.MAX_VERSION) || a < -1 || a > 7) throw new RangeError("Invalid value");
                let c, h;
                for (c = o;; c++) {
                    const r = 8 * t.getNumDataCodewords(c, n),
                        o = l.getTotalBits(e, c);
                    if (o <= r) {
                        h = o;
                        break
                    }
                    if (c >= s) throw new RangeError("Data too long")
                }
                for (const e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH]) u && h <= 8 * t.getNumDataCodewords(c, e) && (n = e);
                let d = [];
                for (const t of e) {
                    r(t.mode.modeBits, 4, d), r(t.numChars, t.mode.numCharCountBits(c), d);
                    for (const e of t.getData()) d.push(e)
                }
                i(d.length == h);
                const f = 8 * t.getNumDataCodewords(c, n);
                i(d.length <= f), r(0, Math.min(4, f - d.length), d), r(0, (8 - d.length % 8) % 8, d), i(d.length % 8 == 0);
                for (let e = 236; d.length < f; e ^= 253) r(e, 8, d);
                let g = [];
                for (; 8 * g.length < d.length;) g.push(0);
                return d.forEach(((e, t) => g[t >>> 3] |= e << 7 - (7 & t))), new t(c, n, g, a)
            }
            getModule(e, t) {
                return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
            }
            getModules() {
                return this.modules
            }
            drawFunctionPatterns() {
                for (let e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                const e = this.getAlignmentPatternPositions(),
                    t = e.length;
                for (let n = 0; n < t; n++)
                    for (let r = 0; r < t; r++) 0 == n && 0 == r || 0 == n && r == t - 1 || n == t - 1 && 0 == r || this.drawAlignmentPattern(e[n], e[r]);
                this.drawFormatBits(0), this.drawVersion()
            }
            drawFormatBits(e) {
                const t = this.errorCorrectionLevel.formatBits << 3 | e;
                let n = t;
                for (let e = 0; e < 10; e++) n = n << 1 ^ 1335 * (n >>> 9);
                const r = 21522 ^ (t << 10 | n);
                i(r >>> 15 == 0);
                for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, o(r, e));
                this.setFunctionModule(8, 7, o(r, 6)), this.setFunctionModule(8, 8, o(r, 7)), this.setFunctionModule(7, 8, o(r, 8));
                for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, o(r, e));
                for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, o(r, e));
                for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, o(r, e));
                this.setFunctionModule(8, this.size - 8, !0)
            }
            drawVersion() {
                if (this.version < 7) return;
                let e = this.version;
                for (let t = 0; t < 12; t++) e = e << 1 ^ 7973 * (e >>> 11);
                const t = this.version << 12 | e;
                i(t >>> 18 == 0);
                for (let e = 0; e < 18; e++) {
                    const n = o(t, e),
                        r = this.size - 11 + e % 3,
                        i = Math.floor(e / 3);
                    this.setFunctionModule(r, i, n), this.setFunctionModule(i, r, n)
                }
            }
            drawFinderPattern(e, t) {
                for (let n = -4; n <= 4; n++)
                    for (let r = -4; r <= 4; r++) {
                        const o = Math.max(Math.abs(r), Math.abs(n)),
                            i = e + r,
                            s = t + n;
                        0 <= i && i < this.size && 0 <= s && s < this.size && this.setFunctionModule(i, s, 2 != o && 4 != o)
                    }
            }
            drawAlignmentPattern(e, t) {
                for (let n = -2; n <= 2; n++)
                    for (let r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + n, 1 != Math.max(Math.abs(r), Math.abs(n)))
            }
            setFunctionModule(e, t, n) {
                this.modules[t][e] = n, this.isFunction[t][e] = !0
            }
            addEccAndInterleave(e) {
                const n = this.version,
                    r = this.errorCorrectionLevel;
                if (e.length != t.getNumDataCodewords(n, r)) throw new RangeError("Invalid argument");
                const o = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                    s = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                    l = Math.floor(t.getNumRawDataModules(n) / 8),
                    a = o - l % o,
                    u = Math.floor(l / o);
                let c = [];
                const h = t.reedSolomonComputeDivisor(s);
                for (let n = 0, r = 0; n < o; n++) {
                    let o = e.slice(r, r + u - s + (n < a ? 0 : 1));
                    r += o.length;
                    const i = t.reedSolomonComputeRemainder(o, h);
                    n < a && o.push(0), c.push(o.concat(i))
                }
                let d = [];
                for (let e = 0; e < c[0].length; e++) c.forEach(((t, n) => {
                    (e != u - s || n >= a) && d.push(t[e])
                }));
                return i(d.length == l), d
            }
            drawCodewords(e) {
                if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
                let n = 0;
                for (let t = this.size - 1; t >= 1; t -= 2) {
                    6 == t && (t = 5);
                    for (let r = 0; r < this.size; r++)
                        for (let i = 0; i < 2; i++) {
                            const s = t - i,
                                l = 0 == (t + 1 & 2) ? this.size - 1 - r : r;
                            !this.isFunction[l][s] && n < 8 * e.length && (this.modules[l][s] = o(e[n >>> 3], 7 - (7 & n)), n++)
                        }
                }
                i(n == 8 * e.length)
            }
            applyMask(e) {
                if (e < 0 || e > 7) throw new RangeError("Mask value out of range");
                for (let t = 0; t < this.size; t++)
                    for (let n = 0; n < this.size; n++) {
                        let r;
                        switch (e) {
                            case 0:
                                r = (n + t) % 2 == 0;
                                break;
                            case 1:
                                r = t % 2 == 0;
                                break;
                            case 2:
                                r = n % 3 == 0;
                                break;
                            case 3:
                                r = (n + t) % 3 == 0;
                                break;
                            case 4:
                                r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                                break;
                            case 5:
                                r = n * t % 2 + n * t % 3 == 0;
                                break;
                            case 6:
                                r = (n * t % 2 + n * t % 3) % 2 == 0;
                                break;
                            case 7:
                                r = ((n + t) % 2 + n * t % 3) % 2 == 0;
                                break;
                            default:
                                throw new Error("Unreachable")
                        }!this.isFunction[t][n] && r && (this.modules[t][n] = !this.modules[t][n])
                    }
            }
            getPenaltyScore() {
                let e = 0;
                for (let n = 0; n < this.size; n++) {
                    let r = !1,
                        o = 0,
                        i = [0, 0, 0, 0, 0, 0, 0];
                    for (let s = 0; s < this.size; s++) this.modules[n][s] == r ? (o++, 5 == o ? e += t.PENALTY_N1 : o > 5 && e++) : (this.finderPenaltyAddHistory(o, i), r || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3), r = this.modules[n][s], o = 1);
                    e += this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3
                }
                for (let n = 0; n < this.size; n++) {
                    let r = !1,
                        o = 0,
                        i = [0, 0, 0, 0, 0, 0, 0];
                    for (let s = 0; s < this.size; s++) this.modules[s][n] == r ? (o++, 5 == o ? e += t.PENALTY_N1 : o > 5 && e++) : (this.finderPenaltyAddHistory(o, i), r || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3), r = this.modules[s][n], o = 1);
                    e += this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3
                }
                for (let n = 0; n < this.size - 1; n++)
                    for (let r = 0; r < this.size - 1; r++) {
                        const o = this.modules[n][r];
                        o == this.modules[n][r + 1] && o == this.modules[n + 1][r] && o == this.modules[n + 1][r + 1] && (e += t.PENALTY_N2)
                    }
                let n = 0;
                for (const e of this.modules) n = e.reduce(((e, t) => e + (t ? 1 : 0)), n);
                const r = this.size * this.size,
                    o = Math.ceil(Math.abs(20 * n - 10 * r) / r) - 1;
                return i(0 <= o && o <= 9), e += o * t.PENALTY_N4, i(0 <= e && e <= 2568888), e
            }
            getAlignmentPatternPositions() {
                if (1 == this.version) return [];
                {
                    const e = Math.floor(this.version / 7) + 2,
                        t = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2));
                    let n = [6];
                    for (let r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
                    return n
                }
            }
            static getNumRawDataModules(e) {
                if (e < t.MIN_VERSION || e > t.MAX_VERSION) throw new RangeError("Version number out of range");
                let n = (16 * e + 128) * e + 64;
                if (e >= 2) {
                    const t = Math.floor(e / 7) + 2;
                    n -= (25 * t - 10) * t - 55, e >= 7 && (n -= 36)
                }
                return i(208 <= n && n <= 29648), n
            }
            static getNumDataCodewords(e, n) {
                return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]
            }
            static reedSolomonComputeDivisor(e) {
                if (e < 1 || e > 255) throw new RangeError("Degree out of range");
                let n = [];
                for (let t = 0; t < e - 1; t++) n.push(0);
                n.push(1);
                let r = 1;
                for (let o = 0; o < e; o++) {
                    for (let e = 0; e < n.length; e++) n[e] = t.reedSolomonMultiply(n[e], r), e + 1 < n.length && (n[e] ^= n[e + 1]);
                    r = t.reedSolomonMultiply(r, 2)
                }
                return n
            }
            static reedSolomonComputeRemainder(e, n) {
                let r = n.map((e => 0));
                for (const o of e) {
                    const e = o ^ r.shift();
                    r.push(0), n.forEach(((n, o) => r[o] ^= t.reedSolomonMultiply(n, e)))
                }
                return r
            }
            static reedSolomonMultiply(e, t) {
                if (e >>> 8 != 0 || t >>> 8 != 0) throw new RangeError("Byte out of range");
                let n = 0;
                for (let r = 7; r >= 0; r--) n = n << 1 ^ 285 * (n >>> 7), n ^= (t >>> r & 1) * e;
                return i(n >>> 8 == 0), n
            }
            finderPenaltyCountPatterns(e) {
                const t = e[1];
                i(t <= 3 * this.size);
                const n = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
                return (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
            }
            finderPenaltyTerminateAndCount(e, t, n) {
                return e && (this.finderPenaltyAddHistory(t, n), t = 0), t += this.size, this.finderPenaltyAddHistory(t, n), this.finderPenaltyCountPatterns(n)
            }
            finderPenaltyAddHistory(e, t) {
                0 == t[0] && (e += this.size), t.pop(), t.unshift(e)
            }
            constructor(e, n, r, o) {
                if (this.version = e, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], e < t.MIN_VERSION || e > t.MAX_VERSION) throw new RangeError("Version value out of range");
                if (o < -1 || o > 7) throw new RangeError("Mask value out of range");
                this.size = 4 * e + 17;
                let s = [];
                for (let e = 0; e < this.size; e++) s.push(!1);
                for (let e = 0; e < this.size; e++) this.modules.push(s.slice()), this.isFunction.push(s.slice());
                this.drawFunctionPatterns();
                const l = this.addEccAndInterleave(r);
                if (this.drawCodewords(l), -1 == o) {
                    let e = 1e9;
                    for (let t = 0; t < 8; t++) {
                        this.applyMask(t), this.drawFormatBits(t);
                        const n = this.getPenaltyScore();
                        n < e && (o = t, e = n), this.applyMask(t)
                    }
                }
                i(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
            }
        };
        let n = t;

        function r(e, t, n) {
            if (t < 0 || t > 31 || e >>> t != 0) throw new RangeError("Value out of range");
            for (let r = t - 1; r >= 0; r--) n.push(e >>> r & 1)
        }

        function o(e, t) {
            return 0 != (e >>> t & 1)
        }

        function i(e) {
            if (!e) throw new Error("Assertion error")
        }
        n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
            [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
            [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        ], n.NUM_ERROR_CORRECTION_BLOCKS = [
            [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
            [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
            [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
            [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        ], e.QrCode = n;
        const s = class {
            static makeBytes(e) {
                let t = [];
                for (const n of e) r(n, 8, t);
                return new s(s.Mode.BYTE, e.length, t)
            }
            static makeNumeric(e) {
                if (!s.isNumeric(e)) throw new RangeError("String contains non-numeric characters");
                let t = [];
                for (let n = 0; n < e.length;) {
                    const o = Math.min(e.length - n, 3);
                    r(parseInt(e.substr(n, o), 10), 3 * o + 1, t), n += o
                }
                return new s(s.Mode.NUMERIC, e.length, t)
            }
            static makeAlphanumeric(e) {
                if (!s.isAlphanumeric(e)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
                let t, n = [];
                for (t = 0; t + 2 <= e.length; t += 2) {
                    let o = 45 * s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));
                    o += s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1)), r(o, 11, n)
                }
                return t < e.length && r(s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, n), new s(s.Mode.ALPHANUMERIC, e.length, n)
            }
            static makeSegments(e) {
                return "" == e ? [] : s.isNumeric(e) ? [s.makeNumeric(e)] : s.isAlphanumeric(e) ? [s.makeAlphanumeric(e)] : [s.makeBytes(s.toUtf8ByteArray(e))]
            }
            static makeEci(e) {
                let t = [];
                if (e < 0) throw new RangeError("ECI assignment value out of range");
                if (e < 128) r(e, 8, t);
                else if (e < 16384) r(2, 2, t), r(e, 14, t);
                else {
                    if (!(e < 1e6)) throw new RangeError("ECI assignment value out of range");
                    r(6, 3, t), r(e, 21, t)
                }
                return new s(s.Mode.ECI, 0, t)
            }
            static isNumeric(e) {
                return s.NUMERIC_REGEX.test(e)
            }
            static isAlphanumeric(e) {
                return s.ALPHANUMERIC_REGEX.test(e)
            }
            getData() {
                return this.bitData.slice()
            }
            static getTotalBits(e, t) {
                let n = 0;
                for (const r of e) {
                    const e = r.mode.numCharCountBits(t);
                    if (r.numChars >= 1 << e) return 1 / 0;
                    n += 4 + e + r.bitData.length
                }
                return n
            }
            static toUtf8ByteArray(e) {
                e = encodeURI(e);
                let t = [];
                for (let n = 0; n < e.length; n++) "%" != e.charAt(n) ? t.push(e.charCodeAt(n)) : (t.push(parseInt(e.substr(n + 1, 2), 16)), n += 2);
                return t
            }
            constructor(e, t, n) {
                if (this.mode = e, this.numChars = t, this.bitData = n, t < 0) throw new RangeError("Invalid argument");
                this.bitData = n.slice()
            }
        };
        let l = s;
        l.NUMERIC_REGEX = /^[0-9]*$/, l.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, l.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = l
    })(i || (i = {})), (e => {
        let t;
        (e => {
            const t = class {
                constructor(e, t) {
                    this.ordinal = e, this.formatBits = t
                }
            };
            let n = t;
            n.LOW = new t(0, 1), n.MEDIUM = new t(1, 0), n.QUARTILE = new t(2, 3), n.HIGH = new t(3, 2), e.Ecc = n
        })(t = e.QrCode || (e.QrCode = {}))
    })(i || (i = {})), (e => {
        let t;
        (e => {
            const t = class {
                numCharCountBits(e) {
                    return this.numBitsCharCount[Math.floor((e + 7) / 17)]
                }
                constructor(e, t) {
                    this.modeBits = e, this.numBitsCharCount = t
                }
            };
            let n = t;
            n.NUMERIC = new t(1, [10, 12, 14]), n.ALPHANUMERIC = new t(2, [9, 11, 13]), n.BYTE = new t(4, [8, 16, 16]), n.KANJI = new t(8, [8, 10, 12]), n.ECI = new t(7, [0, 0, 0]), e.Mode = n
        })(t = e.QrSegment || (e.QrSegment = {}))
    })(i || (i = {}));
    var g = i,
        m = {
            L: g.QrCode.Ecc.LOW,
            M: g.QrCode.Ecc.MEDIUM,
            Q: g.QrCode.Ecc.QUARTILE,
            H: g.QrCode.Ecc.HIGH
        },
        E = 128,
        C = "L",
        w = "#FFFFFF",
        M = "#000000",
        p = !1;
    /**
     * @license qrcode.react
     * Copyright (c) Paul O'Shannessy
     * SPDX-License-Identifier: ISC
     */
    function R(e, t = 0) {
        const n = [];
        return e.forEach((function(e, r) {
            let o = null;
            e.forEach((function(i, s) {
                if (!i && null !== o) return n.push(`M${o+t} ${r+t}h${s-o}v1H${o+t}z`), void(o = null);
                if (s !== e.length - 1) i && null === o && (o = s);
                else {
                    if (!i) return;
                    null === o ? n.push(`M${s+t},${r+t} h1v1H${s+t}z`) : n.push(`M${o+t},${r+t} h${s+1-o}v1H${o+t}z`)
                }
            }))
        })), n.join("")
    }

    function y(e, t) {
        return e.slice().map(((e, n) => n < t.y || n >= t.y + t.h ? e : e.map(((e, n) => (n < t.x || n >= t.x + t.w) && e))))
    }

    function N(e, t, n, r) {
        if (null == r) return null;
        const o = n ? 4 : 0,
            i = e.length + 2 * o,
            s = Math.floor(.1 * t),
            l = i / t,
            a = (r.width || s) * l,
            u = (r.height || s) * l,
            c = null == r.x ? e.length / 2 - a / 2 : r.x * l,
            h = null == r.y ? e.length / 2 - u / 2 : r.y * l;
        let d = null;
        if (r.excavate) {
            let e = Math.floor(c),
                t = Math.floor(h);
            d = {
                x: e,
                y: t,
                w: Math.ceil(a + c - e),
                h: Math.ceil(u + h - t)
            }
        }
        return {
            x: c,
            y: h,
            h: u,
            w: a,
            excavation: d
        }
    }
    var v = function() {
        try {
            (new Path2D).addPath(new Path2D)
        } catch (e) {
            return !1
        }
        return !0
    }();

    function A(t) {
        const n = t,
            {
                value: r,
                size: o = E,
                level: i = C,
                bgColor: l = w,
                fgColor: a = M,
                includeMargin: u = p,
                style: c,
                imageSettings: h
            } = n,
            A = f(n, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "style", "imageSettings"]),
            P = null == h ? void 0 : h.src,
            b = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            [S, O] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
            if (null != b.current) {
                const e = b.current,
                    t = e.getContext("2d");
                if (!t) return;
                let n = g.QrCode.encodeText(r, m[i]).getModules();
                const s = u ? 4 : 0,
                    c = n.length + 2 * s,
                    d = N(n, o, u, h),
                    f = I.current,
                    E = null != d && null !== f && f.complete && 0 !== f.naturalHeight && 0 !== f.naturalWidth;
                E && null != d.excavation && (n = y(n, d.excavation));
                const C = window.devicePixelRatio || 1;
                e.height = e.width = o * C;
                const w = o / c * C;
                t.scale(w, w), t.fillStyle = l, t.fillRect(0, 0, c, c), t.fillStyle = a, v ? t.fill(new Path2D(R(n, s))) : n.forEach((function(e, n) {
                    e.forEach((function(e, r) {
                        e && t.fillRect(r + s, n + s, 1, 1)
                    }))
                })), E && t.drawImage(f, d.x + s, d.y + s, d.w, d.h)
            }
        })), (0, s.useEffect)((() => {
            O(!1)
        }), [P]);
        const x = d({
            height: o,
            width: o
        }, c);
        let _ = null;
        return null != P && (_ = e(s).createElement("img", {
            src: P,
            key: P,
            style: {
                display: "none"
            },
            onLoad: () => {
                O(!0)
            },
            ref: I
        })), e(s).createElement(e(s).Fragment, null, e(s).createElement("canvas", d({
            style: x,
            height: o,
            width: o,
            ref: b
        }, A)), _)
    }
})), n.register("aJEag", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var o = n("dnh3u"),
        i = n("fywoC"),
        s = n("cZtob"),
        l = n("dwKuN"),
        a = function(e, t) {
            return i.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: s.default
            }))
        };
    a.displayName = "ReloadOutlined";
    var u = i.forwardRef(a)
})), n.register("cZtob", (function(e, n) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = {
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
    }
})), n.register("cGvNT", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var o = n("huF4L"),
        i = n("1QMe3"),
        s = n("kCC5O");
    var l = (0, o.default)("QRCode", (e => (e => {
        const {
            componentCls: t
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: e.paddingSM,
                backgroundColor: e.colorWhite,
                borderRadius: e.borderRadiusLG,
                border: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                [`& > ${t}-mask`]: {
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
                    color: e.colorText,
                    lineHeight: e.lineHeight,
                    background: e.QRCodeMaskBackgroundColor,
                    textAlign: "center",
                    [`& > ${t}-expired`]: {
                        color: e.QRCodeExpiredTextColor
                    }
                },
                "&-icon": {
                    marginBlockEnd: e.marginXS,
                    fontSize: e.controlHeight
                }
            }),
            [`${t}-borderless`]: {
                borderColor: "transparent"
            }
        }
    })((0, i.merge)(e, {
        QRCodeExpiredTextColor: "rgba(0, 0, 0, 0.88)",
        QRCodeMaskBackgroundColor: "rgba(255, 255, 255, 0.96)"
    }))))
}));