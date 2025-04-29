function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('dXXu0', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    var f = c('O0Kav'),
        g = c('y7WZT'),
        h = c('/U36/'),
        i = c('H0LNV'),
        j = c('R2nG3'),
        k = c('oyXif'),
        l = c('XTqzK'),
        m = c('yruHD'),
        n = c('P1KtI'),
        o = c('NmQt6');
    const {
        useToken: p
    } = o.default;
    var _q = b => {
        const {
            value: r,
            icon: s = '',
            size: t = 160,
            iconSize: u = 40,
            color: v = '#000',
            errorLevel: w = 'M',
            status: x = 'active',
            bordered: y = !0,
            onRefresh: z,
            style: A,
            className: B,
            rootClassName: C,
            prefixCls: D
        } = b, {
            getPrefixCls: E
        } = (0, f.useContext)(j.ConfigContext), F = E('qrcode', D), [G, H] = (0, l.default)(F), {
            token: I
        } = p(), J = (0, f.useMemo)(() => {
            const K = {
                src: s,
                x: void 0,
                y: void 0,
                height: u,
                width: u,
                excavate: !0
            };
            return {
                value: r,
                size: t - 2 * (I.paddingSM + I.lineWidth),
                level: w,
                bgColor: 'transparent',
                fgColor: v,
                imageSettings: s ? K : void 0
            };
        }, [
            w,
            v,
            s,
            u,
            t,
            r
        ]);
        if (!r)
            return null;
        const K = a(h)(F, B, C, H, {
            [`${ F }-borderless`]: !y
        });
        return G(a(f).createElement(k.default, {
            componentName: 'QRCode'
        }, b => a(f).createElement('div', {
            style: Object.assign(Object.assign({}, A), {
                width: t,
                height: t
            }),
            className: K
        }, 'active' !== x && a(f).createElement('div', {
            className: `${ F }-mask`
        }, 'loading' === x && a(f).createElement(m.default, null), 'expired' === x && a(f).createElement(a(f).Fragment, null, a(f).createElement('p', {
            className: `${ F }-expired`
        }, b.expired), 'function' == typeof z && a(f).createElement(n.default, {
            type: 'link',
            icon: a(f).createElement(i.default, null),
            onClick: z
        }, b.refresh))), a(f).createElement(g.QRCodeCanvas, Object.assign({}, J)))));
    };
}), c.register('y7WZT', function(d, e) {
    b(d.exports, 'QRCodeCanvas', function() {
        return _z;
    });
    var f, g = c('O0Kav'),
        h = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        l = (a, b, c) => b in a ? h(a, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : a[b] = c,
        m = (a, b) => {
            for (var n in b || (b = {}))
                j.call(b, n) && l(a, n, b[n]);
            if (i)
                for (var o of i(b))
                    k.call(b, o) && l(a, o, b[o]);
            return a;
        },
        n = (a, b) => {
            var o = {};
            for (var p in a)
                j.call(a, p) && b.indexOf(p) < 0 && (o[p] = a[p]);
            if (null != a && i)
                for (var q of i(a))
                    b.indexOf(q) < 0 && k.call(a, q) && (o[q] = a[q]);
            return o;
        };
    (a => {
        const o = class {
            static encodeText(p, q) {
                const r = a.QrSegment.makeSegments(p);
                return o.encodeSegments(r, q);
            }
            static encodeBinary(p, q) {
                const r = a.QrSegment.makeBytes(p);
                return o.encodeSegments([r], q);
            }
            static encodeSegments(p, q, r = 1, s = 40, t = -1, u = !0) {
                if (!(o.MIN_VERSION <= r && r <= s && s <= o.MAX_VERSION) || t < -1 || t > 7)
                    throw new RangeError('Invalid value');
                let v, w;
                for (v = r;; v++) {
                    const x = 8 * o.getNumDataCodewords(v, q),
                        y = h.getTotalBits(p, v);
                    if (y <= x) {
                        w = y;
                        break;
                    }
                    if (v >= s)
                        throw new RangeError('Data too long');
                }
                for (const x of [
                        o.Ecc.MEDIUM,
                        o.Ecc.QUARTILE,
                        o.Ecc.HIGH
                    ])
                    u && w <= 8 * o.getNumDataCodewords(v, x) && (q = x);
                let y = [];
                for (const z of x) {
                    d(z.mode.modeBits, 4, y), d(z.numChars, z.mode.numCharCountBits(v), y);
                    for (const A of z.getData())
                        y.push(A);
                }
                f(y.length == w);
                const A = 8 * z.getNumDataCodewords(v, q);
                f(y.length <= A), d(0, Math.min(4, A - y.length), y), d(0, (8 - y.length % 8) % 8, y), f(y.length % 8 == 0);
                for (let B = 236; y.length < A; B ^= 253)
                    d(B, 8, y);
                let C = [];
                for (; 8 * C.length < y.length;)
                    C.push(0);
                return y.forEach((B, z) => C[z >>> 3] |= B << 7 - (7 & z)), new z(v, q, C, t);
            }
            getModule(p, q) {
                return 0 <= p && p < this.size && 0 <= q && q < this.size && this.modules[q][p];
            }
            getModules() {
                return this.modules;
            }
            drawFunctionPatterns() {
                for (let p = 0; p < this.size; p++)
                    this.setFunctionModule(6, p, p % 2 == 0), this.setFunctionModule(p, 6, p % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                const q = this.getAlignmentPatternPositions(),
                    r = q.length;
                for (let s = 0; s < r; s++)
                    for (let t = 0; t < r; t++)
                        0 == s && 0 == t || 0 == s && t == r - 1 || s == r - 1 && 0 == t || this.drawAlignmentPattern(q[s], q[t]);
                this.drawFormatBits(0), this.drawVersion();
            }
            drawFormatBits(p) {
                const q = this.errorCorrectionLevel.formatBits << 3 | p;
                let r = q;
                for (let s = 0; s < 10; s++)
                    r = r << 1 ^ 1335 * (r >>> 9);
                const t = 21522 ^ (q << 10 | r);
                f(t >>> 15 == 0);
                for (let u = 0; u <= 5; u++)
                    this.setFunctionModule(8, u, e(t, u));
                this.setFunctionModule(8, 7, e(t, 6)), this.setFunctionModule(8, 8, e(t, 7)), this.setFunctionModule(7, 8, e(t, 8));
                for (let v = 9; v < 15; v++)
                    this.setFunctionModule(14 - v, 8, e(t, v));
                for (let w = 0; w < 8; w++)
                    this.setFunctionModule(this.size - 1 - w, 8, e(t, w));
                for (let x = 8; x < 15; x++)
                    this.setFunctionModule(8, this.size - 15 + x, e(t, x));
                this.setFunctionModule(8, this.size - 8, !0);
            }
            drawVersion() {
                if (this.version < 7)
                    return;
                let p = this.version;
                for (let q = 0; q < 12; q++)
                    p = p << 1 ^ 7973 * (p >>> 11);
                const r = this.version << 12 | p;
                f(r >>> 18 == 0);
                for (let s = 0; s < 18; s++) {
                    const t = e(r, s),
                        u = this.size - 11 + s % 3,
                        v = Math.floor(s / 3);
                    this.setFunctionModule(u, v, t), this.setFunctionModule(v, u, t);
                }
            }
            drawFinderPattern(p, q) {
                for (let r = -4; r <= 4; r++)
                    for (let s = -4; s <= 4; s++) {
                        const t = Math.max(Math.abs(s), Math.abs(r)),
                            u = p + s,
                            v = q + r;
                        0 <= u && u < this.size && 0 <= v && v < this.size && this.setFunctionModule(u, v, 2 != t && 4 != t);
                    }
            }
            drawAlignmentPattern(p, q) {
                for (let r = -2; r <= 2; r++)
                    for (let s = -2; s <= 2; s++)
                        this.setFunctionModule(p + s, q + r, 1 != Math.max(Math.abs(s), Math.abs(r)));
            }
            setFunctionModule(p, q, r) {
                this.modules[q][p] = r, this.isFunction[q][p] = !0;
            }
            addEccAndInterleave(p) {
                const q = this.version,
                    r = this.errorCorrectionLevel;
                if (p.length != o.getNumDataCodewords(q, r))
                    throw new RangeError('Invalid argument');
                const s = o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][q],
                    t = o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][q],
                    u = Math.floor(o.getNumRawDataModules(q) / 8),
                    v = s - u % s,
                    w = Math.floor(u / s);
                let x = [];
                const y = o.reedSolomonComputeDivisor(t);
                for (let z = 0, A = 0; z < s; z++) {
                    let B = p.slice(A, A + w - t + (z < v ? 0 : 1));
                    A += B.length;
                    const C = o.reedSolomonComputeRemainder(B, y);
                    z < v && B.push(0), x.push(B.concat(C));
                }
                let B = [];
                for (let C = 0; C < x[0].length; C++)
                    x.forEach((o, z) => {
                        (C != w - t || z >= v) && B.push(o[C]);
                    });
                return f(B.length == u), B;
            }
            drawCodewords(p) {
                if (p.length != Math.floor(o.getNumRawDataModules(this.version) / 8))
                    throw new RangeError('Invalid argument');
                let q = 0;
                for (let r = this.size - 1; r >= 1; r -= 2) {
                    6 == r && (r = 5);
                    for (let s = 0; s < this.size; s++)
                        for (let t = 0; t < 2; t++) {
                            const u = r - t,
                                v = 0 == (r + 1 & 2) ? this.size - 1 - s : s;
                            !this.isFunction[v][u] && q < 8 * p.length && (this.modules[v][u] = e(p[q >>> 3], 7 - (7 & q)), q++);
                        }
                }
                f(q == 8 * p.length);
            }
            applyMask(p) {
                if (p < 0 || p > 7)
                    throw new RangeError('Mask value out of range');
                for (let q = 0; q < this.size; q++)
                    for (let r = 0; r < this.size; r++) {
                        let s;
                        switch (p) {
                            case 0:
                                s = (r + q) % 2 == 0;
                                break;
                            case 1:
                                s = q % 2 == 0;
                                break;
                            case 2:
                                s = r % 3 == 0;
                                break;
                            case 3:
                                s = (r + q) % 3 == 0;
                                break;
                            case 4:
                                s = (Math.floor(r / 3) + Math.floor(q / 2)) % 2 == 0;
                                break;
                            case 5:
                                s = r * q % 2 + r * q % 3 == 0;
                                break;
                            case 6:
                                s = (r * q % 2 + r * q % 3) % 2 == 0;
                                break;
                            case 7:
                                s = ((r + q) % 2 + r * q % 3) % 2 == 0;
                                break;
                            default:
                                throw new Error('Unreachable');
                        }!this.isFunction[q][r] && s && (this.modules[q][r] = !this.modules[q][r]);
                    }
            }
            getPenaltyScore() {
                let p = 0;
                for (let q = 0; q < this.size; q++) {
                    let r = !1,
                        s = 0,
                        t = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let u = 0; u < this.size; u++)
                        this.modules[q][u] == r ? (s++, 5 == s ? p += o.PENALTY_N1 : s > 5 && p++) : (this.finderPenaltyAddHistory(s, t), r || (p += this.finderPenaltyCountPatterns(t) * o.PENALTY_N3), r = this.modules[q][u], s = 1);
                    p += this.finderPenaltyTerminateAndCount(r, s, t) * o.PENALTY_N3;
                }
                for (let r = 0; r < this.size; r++) {
                    let s = !1,
                        t = 0,
                        u = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let v = 0; v < this.size; v++)
                        this.modules[v][r] == s ? (t++, 5 == t ? p += o.PENALTY_N1 : t > 5 && p++) : (this.finderPenaltyAddHistory(t, u), s || (p += this.finderPenaltyCountPatterns(u) * o.PENALTY_N3), s = this.modules[v][r], t = 1);
                    p += this.finderPenaltyTerminateAndCount(s, t, u) * o.PENALTY_N3;
                }
                for (let s = 0; s < this.size - 1; s++)
                    for (let t = 0; t < this.size - 1; t++) {
                        const u = this.modules[s][t];
                        u == this.modules[s][t + 1] && u == this.modules[s + 1][t] && u == this.modules[s + 1][t + 1] && (p += o.PENALTY_N2);
                    }
                let u = 0;
                for (const v of this.modules)
                    u = v.reduce((v, o) => v + (o ? 1 : 0), u);
                const w = this.size * this.size,
                    x = Math.ceil(Math.abs(20 * u - 10 * w) / w) - 1;
                return f(0 <= x && x <= 9), v += x * o.PENALTY_N4, f(0 <= v && v <= 2568888), v;
            }
            getAlignmentPatternPositions() {
                if (1 == this.version)
                    return [];
                {
                    const p = Math.floor(this.version / 7) + 2,
                        q = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * p - 2));
                    let r = [6];
                    for (let s = this.size - 7; r.length < p; s -= q)
                        r.splice(1, 0, s);
                    return r;
                }
            }
            static getNumRawDataModules(p) {
                if (p < o.MIN_VERSION || p > o.MAX_VERSION)
                    throw new RangeError('Version number out of range');
                let q = (16 * p + 128) * p + 64;
                if (p >= 2) {
                    const r = Math.floor(p / 7) + 2;
                    q -= (25 * r - 10) * r - 55, p >= 7 && (q -= 36);
                }
                return f(208 <= q && q <= 29648), q;
            }
            static getNumDataCodewords(p, q) {
                return Math.floor(o.getNumRawDataModules(p) / 8) - o.ECC_CODEWORDS_PER_BLOCK[q.ordinal][p] * o.NUM_ERROR_CORRECTION_BLOCKS[q.ordinal][p];
            }
            static reedSolomonComputeDivisor(p) {
                if (p < 1 || p > 255)
                    throw new RangeError('Degree out of range');
                let q = [];
                for (let r = 0; r < p - 1; r++)
                    q.push(0);
                q.push(1);
                let s = 1;
                for (let t = 0; t < p; t++) {
                    for (let u = 0; u < q.length; u++)
                        q[u] = r.reedSolomonMultiply(q[u], s), u + 1 < q.length && (q[u] ^= q[u + 1]);
                    s = r.reedSolomonMultiply(s, 2);
                }
                return q;
            }
            static reedSolomonComputeRemainder(p, q) {
                let r = q.map(p => 0);
                for (const s of p) {
                    const t = s ^ r.shift();
                    r.push(0), q.forEach((q, s) => r[s] ^= o.reedSolomonMultiply(q, t));
                }
                return r;
            }
            static reedSolomonMultiply(p, q) {
                if (p >>> 8 != 0 || q >>> 8 != 0)
                    throw new RangeError('Byte out of range');
                let r = 0;
                for (let s = 7; s >= 0; s--)
                    r = r << 1 ^ 285 * (r >>> 7), r ^= (q >>> s & 1) * p;
                return f(r >>> 8 == 0), r;
            }
            finderPenaltyCountPatterns(p) {
                const q = p[1];
                f(q <= 3 * this.size);
                const r = q > 0 && p[2] == q && p[3] == 3 * q && p[4] == q && p[5] == q;
                return (r && p[0] >= 4 * q && p[6] >= q ? 1 : 0) + (r && p[6] >= 4 * q && p[0] >= q ? 1 : 0);
            }
            finderPenaltyTerminateAndCount(p, q, r) {
                return p && (this.finderPenaltyAddHistory(q, r), q = 0), q += this.size, this.finderPenaltyAddHistory(q, r), this.finderPenaltyCountPatterns(r);
            }
            finderPenaltyAddHistory(p, q) {
                0 == q[0] && (p += this.size), q.pop(), q.unshift(p);
            }
            constructor(p, q, r, s) {
                if (this.version = p, this.errorCorrectionLevel = q, this.modules = [], this.isFunction = [], p < o.MIN_VERSION || p > o.MAX_VERSION)
                    throw new RangeError('Version value out of range');
                if (s < -1 || s > 7)
                    throw new RangeError('Mask value out of range');
                this.size = 4 * p + 17;
                let t = [];
                for (let u = 0; u < this.size; u++)
                    t.push(!1);
                for (let v = 0; v < this.size; v++)
                    this.modules.push(t.slice()), this.isFunction.push(t.slice());
                this.drawFunctionPatterns();
                const w = this.addEccAndInterleave(r);
                if (this.drawCodewords(w), -1 == s) {
                    let x = 1000000000;
                    for (let y = 0; y < 8; y++) {
                        this.applyMask(y), this.drawFormatBits(y);
                        const z = this.getPenaltyScore();
                        z < x && (s = y, x = z), this.applyMask(y);
                    }
                }
                f(0 <= s && s <= 7), this.mask = s, this.applyMask(s), this.drawFormatBits(s), this.isFunction = [];
            }
        };
        let p = o;

        function q(r, s, t) {
            if (s < 0 || s > 31 || r >>> s != 0)
                throw new RangeError('Value out of range');
            for (let u = s - 1; u >= 0; u--)
                t.push(r >>> u & 1);
        }

        function r(s, t) {
            return 0 != (s >>> t & 1);
        }

        function s(t) {
            if (!t)
                throw new Error('Assertion error');
        }
        p.MIN_VERSION = 1, p.MAX_VERSION = 40, p.PENALTY_N1 = 3, p.PENALTY_N2 = 3, p.PENALTY_N3 = 40, p.PENALTY_N4 = 10, p.ECC_CODEWORDS_PER_BLOCK = [
            [
                -1,
                7,
                10,
                15,
                20,
                26,
                18,
                20,
                24,
                30,
                18,
                20,
                24,
                26,
                30,
                22,
                24,
                28,
                30,
                28,
                28,
                28,
                28,
                30,
                30,
                26,
                28,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30
            ],
            [
                -1,
                10,
                16,
                26,
                18,
                24,
                16,
                18,
                22,
                22,
                26,
                30,
                22,
                22,
                24,
                24,
                28,
                28,
                26,
                26,
                26,
                26,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28
            ],
            [
                -1,
                13,
                22,
                18,
                26,
                18,
                24,
                18,
                22,
                20,
                24,
                28,
                26,
                24,
                20,
                30,
                24,
                28,
                28,
                26,
                30,
                28,
                30,
                30,
                30,
                30,
                28,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30
            ],
            [
                -1,
                17,
                28,
                22,
                16,
                22,
                28,
                26,
                26,
                24,
                28,
                24,
                28,
                22,
                24,
                24,
                30,
                28,
                28,
                26,
                28,
                30,
                24,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30
            ]
        ], p.NUM_ERROR_CORRECTION_BLOCKS = [
            [
                -1,
                1,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                2,
                4,
                4,
                4,
                4,
                4,
                6,
                6,
                6,
                6,
                7,
                8,
                8,
                9,
                9,
                10,
                12,
                12,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                19,
                20,
                21,
                22,
                24,
                25
            ],
            [
                -1,
                1,
                1,
                1,
                2,
                2,
                4,
                4,
                4,
                5,
                5,
                5,
                8,
                9,
                9,
                10,
                10,
                11,
                13,
                14,
                16,
                17,
                17,
                18,
                20,
                21,
                23,
                25,
                26,
                28,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                43,
                45,
                47,
                49
            ],
            [
                -1,
                1,
                1,
                2,
                2,
                4,
                4,
                6,
                6,
                8,
                8,
                8,
                10,
                12,
                16,
                12,
                17,
                16,
                18,
                21,
                20,
                23,
                23,
                25,
                27,
                29,
                34,
                34,
                35,
                38,
                40,
                43,
                45,
                48,
                51,
                53,
                56,
                59,
                62,
                65,
                68
            ],
            [
                -1,
                1,
                1,
                2,
                4,
                4,
                4,
                5,
                6,
                8,
                8,
                11,
                11,
                16,
                16,
                18,
                16,
                19,
                21,
                25,
                25,
                25,
                34,
                30,
                32,
                35,
                37,
                40,
                42,
                45,
                48,
                51,
                54,
                57,
                60,
                63,
                66,
                70,
                74,
                77,
                81
            ]
        ], a.QrCode = p;
        const t = class {
            static makeBytes(u) {
                let v = [];
                for (const w of u)
                    q(w, 8, v);
                return new t(t.Mode.BYTE, u.length, v);
            }
            static makeNumeric(u) {
                if (!t.isNumeric(u))
                    throw new RangeError('String contains non-numeric characters');
                let v = [];
                for (let w = 0; w < u.length;) {
                    const x = Math.min(u.length - w, 3);
                    q(parseInt(u.substr(w, x), 10), 3 * x + 1, v), w += x;
                }
                return new t(t.Mode.NUMERIC, u.length, v);
            }
            static makeAlphanumeric(u) {
                if (!t.isAlphanumeric(u))
                    throw new RangeError('String contains unencodable characters in alphanumeric mode');
                let v, w = [];
                for (v = 0; v + 2 <= u.length; v += 2) {
                    let x = 45 * t.ALPHANUMERIC_CHARSET.indexOf(u.charAt(v));
                    x += t.ALPHANUMERIC_CHARSET.indexOf(u.charAt(v + 1)), q(x, 11, w);
                }
                return v < u.length && q(t.ALPHANUMERIC_CHARSET.indexOf(u.charAt(v)), 6, w), new t(t.Mode.ALPHANUMERIC, u.length, w);
            }
            static makeSegments(u) {
                return '' == u ? [] : t.isNumeric(u) ? [t.makeNumeric(u)] : t.isAlphanumeric(u) ? [t.makeAlphanumeric(u)] : [t.makeBytes(t.toUtf8ByteArray(u))];
            }
            static makeEci(u) {
                let v = [];
                if (u < 0)
                    throw new RangeError('ECI assignment value out of range');
                if (u < 128)
                    q(u, 8, v);
                else if (u < 16384)
                    q(2, 2, v), q(u, 14, v);
                else {
                    if (!(u < 1000000))
                        throw new RangeError('ECI assignment value out of range');
                    q(6, 3, v), q(u, 21, v);
                }
                return new t(t.Mode.ECI, 0, v);
            }
            static isNumeric(u) {
                return t.NUMERIC_REGEX.test(u);
            }
            static isAlphanumeric(u) {
                return t.ALPHANUMERIC_REGEX.test(u);
            }
            getData() {
                return this.bitData.slice();
            }
            static getTotalBits(u, v) {
                let w = 0;
                for (const x of u) {
                    const y = x.mode.numCharCountBits(v);
                    if (x.numChars >= 1 << y)
                        return 1 / 0;
                    w += 4 + y + x.bitData.length;
                }
                return w;
            }
            static toUtf8ByteArray(u) {
                u = encodeURI(u);
                let v = [];
                for (let w = 0; w < u.length; w++)
                    '%' != u.charAt(w) ? v.push(u.charCodeAt(w)) : (v.push(parseInt(u.substr(w + 1, 2), 16)), w += 2);
                return v;
            }
            constructor(u, v, w) {
                if (this.mode = u, this.numChars = v, this.bitData = w, v < 0)
                    throw new RangeError('Invalid argument');
                this.bitData = w.slice();
            }
        };
        let u = t;
        u.NUMERIC_REGEX = /^[0-9]*$/, u.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, u.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:', a.QrSegment = u;
    })(f || (f = {})), (a => {
        let o;
        (a => {
            const p = class {
                constructor(q, r) {
                    this.ordinal = q, this.formatBits = r;
                }
            };
            let q = p;
            q.LOW = new p(0, 1), q.MEDIUM = new p(1, 0), q.QUARTILE = new p(2, 3), q.HIGH = new p(3, 2), a.Ecc = q;
        })(o = a.QrCode || (a.QrCode = {}));
    })(f || (f = {})), (a => {
        let o;
        (a => {
            const p = class {
                numCharCountBits(q) {
                    return this.numBitsCharCount[Math.floor((q + 7) / 17)];
                }
                constructor(q, r) {
                    this.modeBits = q, this.numBitsCharCount = r;
                }
            };
            let q = p;
            q.NUMERIC = new p(1, [
                10,
                12,
                14
            ]), q.ALPHANUMERIC = new p(2, [
                9,
                11,
                13
            ]), q.BYTE = new p(4, [
                8,
                16,
                16
            ]), q.KANJI = new p(8, [
                8,
                10,
                12
            ]), q.ECI = new p(7, [
                0,
                0,
                0
            ]), a.Mode = q;
        })(o = a.QrSegment || (a.QrSegment = {}));
    })(f || (f = {}));
    var o = f,
        p = {
            L: o.QrCode.Ecc.LOW,
            M: o.QrCode.Ecc.MEDIUM,
            Q: o.QrCode.Ecc.QUARTILE,
            H: o.QrCode.Ecc.HIGH
        },
        q = 128,
        r = 'L',
        s = '#FFFFFF',
        t = '#000000',
        u = !1;

    function v(w, x = 0) {
        const y = [];
        return w.forEach(function(z, A) {
            let B = null;
            z.forEach(function(C, D) {
                if (!C && null !== B)
                    return y.push(`M${ B + x } ${ A + x }h${ D - B }v1H${ B + x }z`), void(B = null);
                if (D !== z.length - 1)
                    C && null === B && (B = D);
                else {
                    if (!C)
                        return;
                    null === B ? y.push(`M${ D + x },${ A + x } h1v1H${ D + x }z`) : y.push(`M${ B + x },${ A + x } h${ D + 1 - B }v1H${ B + x }z`);
                }
            });
        }), y.join('');
    }

    function w(x, y) {
        return x.slice().map((x, c) => c < y.y || c >= y.y + y.h ? x : x.map((x, c) => (c < y.x || c >= y.x + y.w) && x));
    }

    function x(y, z, A, B) {
        if (null == B)
            return null;
        const C = A ? 4 : 0,
            D = y.length + 2 * C,
            E = Math.floor(0.1 * z),
            F = D / z,
            G = (B.width || E) * F,
            H = (B.height || E) * F,
            I = null == B.x ? y.length / 2 - G / 2 : B.x * F,
            J = null == B.y ? y.length / 2 - H / 2 : B.y * F;
        let K = null;
        if (B.excavate) {
            let L = Math.floor(I),
                M = Math.floor(J);
            K = {
                x: L,
                y: M,
                w: Math.ceil(G + I - L),
                h: Math.ceil(H + J - M)
            };
        }
        return {
            x: I,
            y: J,
            h: H,
            w: G,
            excavation: K
        };
    }
    var y = function() {
        try {
            new Path2D().addPath(new Path2D());
        } catch (a) {
            return !1;
        }
        return !0;
    }();

    function _z(A) {
        const B = A,
            {
                value: C,
                size: D = E,
                level: F = G,
                bgColor: H = I,
                fgColor: J = K,
                includeMargin: L = M,
                style: N,
                imageSettings: O
            } = B,
            P = n(B, [
                'value',
                'size',
                'level',
                'bgColor',
                'fgColor',
                'includeMargin',
                'style',
                'imageSettings'
            ]),
            Q = null == O ? void 0 : O.src,
            R = (0, g.useRef)(null),
            S = (0, g.useRef)(null),
            [T, U] = (0, g.useState)(!1);
        (0, g.useEffect)(() => {
            if (null != R.current) {
                const V = R.current,
                    W = V.getContext('2d');
                if (!W)
                    return;
                let X = o.QrCode.encodeText(C, p[F]).getModules();
                const Y = L ? 4 : 0,
                    Z = X.length + 2 * Y,
                    $ = x(X, D, L, O),
                    ab = S.current,
                    bb = null != $ && null !== ab && ab.complete && 0 !== ab.naturalHeight && 0 !== ab.naturalWidth;
                bb && null != $.excavation && (X = w(X, $.excavation));
                const cb = window.devicePixelRatio || 1;
                V.height = V.width = D * cb;
                const db = D / Z * cb;
                W.scale(db, db), W.fillStyle = H, W.fillRect(0, 0, Z, Z), W.fillStyle = J, y ? W.fill(new Path2D(v(X, Y))) : X.forEach(function(eb, fb) {
                    eb.forEach(function(gb, hb) {
                        gb && W.fillRect(hb + Y, fb + Y, 1, 1);
                    });
                }), bb && W.drawImage(ab, $.x + Y, $.y + Y, $.w, $.h);
            }
        }), (0, g.useEffect)(() => {
            U(!1);
        }, [Q]);
        const V = m({
            height: D,
            width: D
        }, N);
        let W = null;
        return null != Q && (W = a(g).createElement('img', {
            src: Q,
            key: Q,
            style: {
                display: 'none'
            },
            onLoad: () => {
                U(!0);
            },
            ref: S
        })), a(g).createElement(a(g).Fragment, null, a(g).createElement('canvas', m({
            style: V,
            height: D,
            width: D,
            ref: R
        }, P)), W);
    }
}), c.register('H0LNV', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('JW6MF'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ReloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('JW6MF', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z'
                }
            }]
        },
        name: 'reload',
        theme: 'outlined'
    };
}), c.register('XTqzK', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('/zzpx');
    var _i = (0, f.default)('QRCode', d => (d => {
        const {
            componentCls: j
        } = d;
        return {
            [j]: Object.assign(Object.assign({}, (0, h.resetComponent)(d)), {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: d.paddingSM,
                backgroundColor: d.colorWhite,
                borderRadius: d.borderRadiusLG,
                border: `${ d.lineWidth }px ${ d.lineType } ${ d.colorSplit }`,
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                [`& > ${ j }-mask`]: {
                    position: 'absolute',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    color: d.colorText,
                    lineHeight: d.lineHeight,
                    background: d.QRCodeMaskBackgroundColor,
                    textAlign: 'center',
                    [`& > ${ j }-expired`]: {
                        color: d.QRCodeExpiredTextColor
                    }
                },
                '&-icon': {
                    marginBlockEnd: d.marginXS,
                    fontSize: d.controlHeight
                }
            }),
            [`${ j }-borderless`]: {
                borderColor: 'transparent'
            }
        };
    })((0, g.merge)(d, {
        QRCodeExpiredTextColor: 'rgba(0, 0, 0, 0.88)',
        QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
    })));
});