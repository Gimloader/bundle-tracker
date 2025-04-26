function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, q) {
    Object.defineProperty(a, b, {
        get: c,
        set: q,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('PMzGD', function(q, r) {
    b(q.exports, 'default', function() {
        return o;
    });
    var d = c('uPP4W'),
        e = c('4BF8M'),
        f = c('VAIs1'),
        g = c('lB6/+'),
        h = c('qEw51'),
        i = c('wvHHV'),
        j = c('rJRxD'),
        k = c('iHElh'),
        l = c('IsmrL'),
        m = c('KlhV/');
    const {
        useToken: n
    } = m.default;
    var o = b => {
        const {
            value: p,
            icon: q = '',
            size: r = 160,
            iconSize: s = 40,
            color: t = '#000',
            errorLevel: u = 'M',
            status: v = 'active',
            bordered: w = !0,
            onRefresh: x,
            style: y,
            className: z,
            rootClassName: A,
            prefixCls: B
        } = C, {
            getPrefixCls: D
        } = (0, d.useContext)(h.ConfigContext), E = D('qrcode', B), [F, G] = (0, j.default)(E), {
            token: H
        } = n(), I = (0, d.useMemo)(() => {
            const J = {
                src: q,
                x: void 0,
                y: void 0,
                height: s,
                width: s,
                excavate: !0
            };
            return {
                value: p,
                size: r - 2 * (H.paddingSM + H.lineWidth),
                level: u,
                bgColor: 'transparent',
                fgColor: t,
                imageSettings: q ? J : void 0
            };
        }, [
            u,
            t,
            q,
            s,
            r,
            p
        ]);
        if (!p)
            return null;
        const J = a(f)(E, z, A, G, {
            [`${ E }-borderless`]: !w
        });
        return F(a(d).createElement(i.default, {
            componentName: 'QRCode'
        }, C => a(d).createElement('div', {
            style: Object.assign(Object.assign({}, y), {
                width: r,
                height: r
            }),
            className: J
        }, 'active' !== v && a(d).createElement('div', {
            className: `${ E }-mask`
        }, 'loading' === v && a(d).createElement(k.default, null), 'expired' === v && a(d).createElement(a(d).Fragment, null, a(d).createElement('p', {
            className: `${ E }-expired`
        }, C.expired), 'function' == typeof x && a(d).createElement(l.default, {
            type: 'link',
            icon: a(d).createElement(g.default, null),
            onClick: x
        }, C.refresh))), a(d).createElement(e.QRCodeCanvas, Object.assign({}, I)))));
    };
}), c.register('4BF8M', function(n, n) {
    b(n.exports, 'QRCodeCanvas', function() {
        return z;
    });
    var d, e = c('uPP4W'),
        f = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable,
        j = (a, b, c) => b in a ? f(a, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : a[b] = c,
        k = (a, b) => {
            for (var l in b || (b = {}))
                h.call(b, l) && j(a, l, b[l]);
            if (g)
                for (var m of g(b))
                    i.call(b, m) && j(a, m, b[m]);
            return a;
        },
        l = (a, b) => {
            var m = {};
            for (var n in a)
                h.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && g)
                for (var o of g(a))
                    b.indexOf(o) < 0 && i.call(a, o) && (m[o] = a[o]);
            return m;
        };
    (a => {
        const m = class {
            static encodeText(c, t) {
                const n = a.QrSegment.makeSegments(c);
                return m.encodeSegments(n, t);
            }
            static encodeBinary(c, t) {
                const n = a.QrSegment.makeBytes(c);
                return m.encodeSegments([n], t);
            }
            static encodeSegments(a, c, n = 1, o = 40, p = -1, q = !0) {
                if (!(m.MIN_VERSION <= n && n <= o && o <= m.MAX_VERSION) || p < -1 || p > 7)
                    throw new RangeError('Invalid value');
                let r, s;
                for (r = n;; r++) {
                    const t = 8 * m.getNumDataCodewords(r, c),
                        u = f.getTotalBits(a, r);
                    if (u <= t) {
                        s = u;
                        break;
                    }
                    if (r >= o)
                        throw new RangeError('Data too long');
                }
                for (const t of [
                        m.Ecc.MEDIUM,
                        m.Ecc.QUARTILE,
                        m.Ecc.HIGH
                    ])
                    q && s <= 8 * m.getNumDataCodewords(r, t) && (c = t);
                let u = [];
                for (const v of t) {
                    v(v.mode.modeBits, 4, u), v(v.numChars, v.mode.numCharCountBits(r), u);
                    for (const w of v.getData())
                        u.push(w);
                }
                d(u.length == s);
                const w = 8 * v.getNumDataCodewords(r, c);
                d(u.length <= w), v(0, Math.min(4, w - u.length), u), v(0, (8 - u.length % 8) % 8, u), d(u.length % 8 == 0);
                for (let x = 236; u.length < w; x ^= 253)
                    v(x, 8, u);
                let y = [];
                for (; 8 * y.length < u.length;)
                    y.push(0);
                return u.forEach((x, v) => y[v >>> 3] |= x << 7 - (7 & v)), new v(r, c, y, p);
            }
            getModule(a, m) {
                return 0 <= a && a < this.size && 0 <= m && m < this.size && this.modules[m][a];
            }
            getModules() {
                return this.modules;
            }
            drawFunctionPatterns() {
                for (let r = 0; r < this.size; r++)
                    this.setFunctionModule(6, r, r % 2 == 0), this.setFunctionModule(r, 6, r % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                const s = this.getAlignmentPatternPositions(),
                    t = s.length;
                for (let u = 0; u < t; u++)
                    for (let v = 0; v < t; v++)
                        0 == u && 0 == v || 0 == u && v == t - 1 || u == t - 1 && 0 == v || this.drawAlignmentPattern(s[u], s[v]);
                this.drawFormatBits(0), this.drawVersion();
            }
            drawFormatBits(a) {
                const r = this.errorCorrectionLevel.formatBits << 3 | a;
                let s = t;
                for (let u = 0; u < 10; u++)
                    s = s << 1 ^ 1335 * (s >>> 9);
                const v = 21522 ^ (t << 10 | s);
                d(v >>> 15 == 0);
                for (let w = 0; w <= 5; w++)
                    this.setFunctionModule(8, w, n(v, w));
                this.setFunctionModule(8, 7, n(v, 6)), this.setFunctionModule(8, 8, n(v, 7)), this.setFunctionModule(7, 8, n(v, 8));
                for (let x = 9; x < 15; x++)
                    this.setFunctionModule(14 - x, 8, n(v, x));
                for (let y = 0; y < 8; y++)
                    this.setFunctionModule(this.size - 1 - y, 8, n(v, y));
                for (let z = 8; z < 15; z++)
                    this.setFunctionModule(8, this.size - 15 + z, n(v, z));
                this.setFunctionModule(8, this.size - 8, !0);
            }
            drawVersion() {
                if (this.version < 7)
                    return;
                let A = this.version;
                for (let B = 0; B < 12; B++)
                    A = A << 1 ^ 7973 * (A >>> 11);
                const C = this.version << 12 | A;
                d(C >>> 18 == 0);
                for (let D = 0; D < 18; D++) {
                    const E = n(C, D),
                        F = this.size - 11 + D % 3,
                        G = Math.floor(D / 3);
                    this.setFunctionModule(F, G, E), this.setFunctionModule(G, F, E);
                }
            }
            drawFinderPattern(a, m) {
                for (let r = -4; r <= 4; r++)
                    for (let s = -4; s <= 4; s++) {
                        const t = Math.max(Math.abs(s), Math.abs(r)),
                            u = a + s,
                            v = m + r;
                        0 <= u && u < this.size && 0 <= v && v < this.size && this.setFunctionModule(u, v, 2 != t && 4 != t);
                    }
            }
            drawAlignmentPattern(a, m) {
                for (let r = -2; r <= 2; r++)
                    for (let s = -2; s <= 2; s++)
                        this.setFunctionModule(a + s, m + r, 1 != Math.max(Math.abs(s), Math.abs(r)));
            }
            setFunctionModule(a, m, c) {
                this.modules[m][a] = c, this.isFunction[m][a] = !0;
            }
            addEccAndInterleave(a) {
                const r = this.version,
                    s = this.errorCorrectionLevel;
                if (a.length != m.getNumDataCodewords(r, s))
                    throw new RangeError('Invalid argument');
                const t = m.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][r],
                    u = m.ECC_CODEWORDS_PER_BLOCK[s.ordinal][r],
                    v = Math.floor(m.getNumRawDataModules(r) / 8),
                    w = t - v % t,
                    x = Math.floor(v / t);
                let y = [];
                const z = m.reedSolomonComputeDivisor(u);
                for (let A = 0, B = 0; A < t; A++) {
                    let C = a.slice(B, B + x - u + (A < w ? 0 : 1));
                    B += C.length;
                    const D = m.reedSolomonComputeRemainder(C, z);
                    A < w && C.push(0), y.push(C.concat(D));
                }
                let C = [];
                for (let D = 0; D < y[0].length; D++)
                    y.forEach((m, A) => {
                        (D != x - u || A >= w) && C.push(m[D]);
                    });
                return d(C.length == v), C;
            }
            drawCodewords(a) {
                if (a.length != Math.floor(m.getNumRawDataModules(this.version) / 8))
                    throw new RangeError('Invalid argument');
                let r = 0;
                for (let s = this.size - 1; s >= 1; s -= 2) {
                    6 == s && (s = 5);
                    for (let t = 0; t < this.size; t++)
                        for (let u = 0; u < 2; u++) {
                            const v = s - u,
                                w = 0 == (s + 1 & 2) ? this.size - 1 - t : t;
                            !this.isFunction[w][v] && r < 8 * a.length && (this.modules[w][v] = n(a[r >>> 3], 7 - (7 & r)), r++);
                        }
                }
                d(r == 8 * a.length);
            }
            applyMask(a) {
                if (a < 0 || a > 7)
                    throw new RangeError('Mask value out of range');
                for (let r = 0; r < this.size; r++)
                    for (let s = 0; s < this.size; s++) {
                        let t;
                        switch (a) {
                            case 0:
                                t = (s + r) % 2 == 0;
                                break;
                            case 1:
                                t = r % 2 == 0;
                                break;
                            case 2:
                                t = s % 3 == 0;
                                break;
                            case 3:
                                t = (s + r) % 3 == 0;
                                break;
                            case 4:
                                t = (Math.floor(s / 3) + Math.floor(r / 2)) % 2 == 0;
                                break;
                            case 5:
                                t = s * r % 2 + s * r % 3 == 0;
                                break;
                            case 6:
                                t = (s * r % 2 + s * r % 3) % 2 == 0;
                                break;
                            case 7:
                                t = ((s + r) % 2 + s * r % 3) % 2 == 0;
                                break;
                            default:
                                throw new Error('Unreachable');
                        }!this.isFunction[r][s] && t && (this.modules[r][s] = !this.modules[r][s]);
                    }
            }
            getPenaltyScore() {
                let t = 0;
                for (let u = 0; u < this.size; u++) {
                    let v = !1,
                        w = 0,
                        x = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let y = 0; y < this.size; y++)
                        this.modules[u][y] == v ? (w++, 5 == w ? t += r.PENALTY_N1 : w > 5 && t++) : (this.finderPenaltyAddHistory(w, x), v || (t += this.finderPenaltyCountPatterns(x) * r.PENALTY_N3), v = this.modules[u][y], w = 1);
                    t += this.finderPenaltyTerminateAndCount(v, w, x) * r.PENALTY_N3;
                }
                for (let v = 0; v < this.size; v++) {
                    let w = !1,
                        x = 0,
                        y = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let z = 0; z < this.size; z++)
                        this.modules[z][v] == w ? (x++, 5 == x ? t += r.PENALTY_N1 : x > 5 && t++) : (this.finderPenaltyAddHistory(x, y), w || (t += this.finderPenaltyCountPatterns(y) * r.PENALTY_N3), w = this.modules[z][v], x = 1);
                    t += this.finderPenaltyTerminateAndCount(w, x, y) * r.PENALTY_N3;
                }
                for (let w = 0; w < this.size - 1; w++)
                    for (let x = 0; x < this.size - 1; x++) {
                        const y = this.modules[w][x];
                        y == this.modules[w][x + 1] && y == this.modules[w + 1][x] && y == this.modules[w + 1][x + 1] && (t += r.PENALTY_N2);
                    }
                let y = 0;
                for (const z of this.modules)
                    y = z.reduce((z, r) => z + (r ? 1 : 0), y);
                const A = this.size * this.size,
                    B = Math.ceil(Math.abs(20 * y - 10 * A) / A) - 1;
                return d(0 <= B && B <= 9), z += B * r.PENALTY_N4, d(0 <= z && z <= 2568888), z;
            }
            getAlignmentPatternPositions() {
                if (1 == this.version)
                    return [];
                {
                    const C = Math.floor(this.version / 7) + 2,
                        D = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * C - 2));
                    let E = [6];
                    for (let F = this.size - 7; E.length < C; F -= D)
                        E.splice(1, 0, F);
                    return E;
                }
            }
            static getNumRawDataModules(a) {
                if (a < m.MIN_VERSION || a > m.MAX_VERSION)
                    throw new RangeError('Version number out of range');
                let r = (16 * a + 128) * a + 64;
                if (a >= 2) {
                    const s = Math.floor(a / 7) + 2;
                    r -= (25 * s - 10) * s - 55, a >= 7 && (r -= 36);
                }
                return d(208 <= r && r <= 29648), r;
            }
            static getNumDataCodewords(a, c) {
                return Math.floor(m.getNumRawDataModules(a) / 8) - m.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a] * m.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a];
            }
            static reedSolomonComputeDivisor(a) {
                if (a < 1 || a > 255)
                    throw new RangeError('Degree out of range');
                let r = [];
                for (let s = 0; s < a - 1; s++)
                    r.push(0);
                r.push(1);
                let t = 1;
                for (let u = 0; u < a; u++) {
                    for (let v = 0; v < r.length; v++)
                        r[v] = s.reedSolomonMultiply(r[v], t), v + 1 < r.length && (r[v] ^= r[v + 1]);
                    t = s.reedSolomonMultiply(t, 2);
                }
                return r;
            }
            static reedSolomonComputeRemainder(a, c) {
                let r = c.map(a => 0);
                for (const s of a) {
                    const t = s ^ r.shift();
                    r.push(0), c.forEach((c, s) => r[s] ^= m.reedSolomonMultiply(c, t));
                }
                return r;
            }
            static reedSolomonMultiply(a, m) {
                if (a >>> 8 != 0 || m >>> 8 != 0)
                    throw new RangeError('Byte out of range');
                let r = 0;
                for (let s = 7; s >= 0; s--)
                    r = r << 1 ^ 285 * (r >>> 7), r ^= (m >>> s & 1) * a;
                return d(r >>> 8 == 0), r;
            }
            finderPenaltyCountPatterns(a) {
                const r = a[1];
                d(r <= 3 * this.size);
                const s = r > 0 && a[2] == r && a[3] == 3 * r && a[4] == r && a[5] == r;
                return (s && a[0] >= 4 * r && a[6] >= r ? 1 : 0) + (s && a[6] >= 4 * r && a[0] >= r ? 1 : 0);
            }
            finderPenaltyTerminateAndCount(a, m, c) {
                return a && (this.finderPenaltyAddHistory(m, c), m = 0), m += this.size, this.finderPenaltyAddHistory(m, c), this.finderPenaltyCountPatterns(c);
            }
            finderPenaltyAddHistory(a, m) {
                0 == m[0] && (a += this.size), m.pop(), m.unshift(a);
            }
            constructor(a, c, t, n) {
                if (this.version = a, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], a < m.MIN_VERSION || a > m.MAX_VERSION)
                    throw new RangeError('Version value out of range');
                if (n < -1 || n > 7)
                    throw new RangeError('Mask value out of range');
                this.size = 4 * a + 17;
                let r = [];
                for (let s = 0; s < this.size; s++)
                    r.push(!1);
                for (let t = 0; t < this.size; t++)
                    this.modules.push(r.slice()), this.isFunction.push(r.slice());
                this.drawFunctionPatterns();
                const u = this.addEccAndInterleave(t);
                if (this.drawCodewords(u), -1 == n) {
                    let v = 1000000000;
                    for (let w = 0; w < 8; w++) {
                        this.applyMask(w), this.drawFormatBits(w);
                        const x = this.getPenaltyScore();
                        x < v && (n = w, v = x), this.applyMask(w);
                    }
                }
                d(0 <= n && n <= 7), this.mask = n, this.applyMask(n), this.drawFormatBits(n), this.isFunction = [];
            }
        };
        let r = s;

        function t(a, s, r) {
            if (s < 0 || s > 31 || a >>> s != 0)
                throw new RangeError('Value out of range');
            for (let u = s - 1; u >= 0; u--)
                r.push(a >>> u & 1);
        }

        function u(a, s) {
            return 0 != (a >>> s & 1);
        }

        function v(a) {
            if (!a)
                throw new Error('Assertion error');
        }
        r.MIN_VERSION = 1, r.MAX_VERSION = 40, r.PENALTY_N1 = 3, r.PENALTY_N2 = 3, r.PENALTY_N3 = 40, r.PENALTY_N4 = 10, r.ECC_CODEWORDS_PER_BLOCK = [
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
        ], r.NUM_ERROR_CORRECTION_BLOCKS = [
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
        ], a.QrCode = r;
        const w = class {
            static makeBytes(a) {
                let x = [];
                for (const y of a)
                    t(y, 8, x);
                return new w(w.Mode.BYTE, a.length, x);
            }
            static makeNumeric(a) {
                if (!w.isNumeric(a))
                    throw new RangeError('String contains non-numeric characters');
                let x = [];
                for (let y = 0; y < a.length;) {
                    const z = Math.min(a.length - y, 3);
                    t(parseInt(a.substr(y, z), 10), 3 * z + 1, x), y += z;
                }
                return new w(w.Mode.NUMERIC, a.length, x);
            }
            static makeAlphanumeric(a) {
                if (!w.isAlphanumeric(a))
                    throw new RangeError('String contains unencodable characters in alphanumeric mode');
                let x, y = [];
                for (x = 0; x + 2 <= a.length; x += 2) {
                    let z = 45 * w.ALPHANUMERIC_CHARSET.indexOf(a.charAt(x));
                    z += w.ALPHANUMERIC_CHARSET.indexOf(a.charAt(x + 1)), t(z, 11, y);
                }
                return x < a.length && t(w.ALPHANUMERIC_CHARSET.indexOf(a.charAt(x)), 6, y), new w(w.Mode.ALPHANUMERIC, a.length, y);
            }
            static makeSegments(a) {
                return '' == a ? [] : w.isNumeric(a) ? [w.makeNumeric(a)] : w.isAlphanumeric(a) ? [w.makeAlphanumeric(a)] : [w.makeBytes(w.toUtf8ByteArray(a))];
            }
            static makeEci(a) {
                let x = [];
                if (a < 0)
                    throw new RangeError('ECI assignment value out of range');
                if (a < 128)
                    t(a, 8, x);
                else if (a < 16384)
                    t(2, 2, x), t(a, 14, x);
                else {
                    if (!(a < 1000000))
                        throw new RangeError('ECI assignment value out of range');
                    t(6, 3, x), t(a, 21, x);
                }
                return new w(w.Mode.ECI, 0, x);
            }
            static isNumeric(a) {
                return w.NUMERIC_REGEX.test(a);
            }
            static isAlphanumeric(a) {
                return w.ALPHANUMERIC_REGEX.test(a);
            }
            getData() {
                return this.bitData.slice();
            }
            static getTotalBits(a, s) {
                let x = 0;
                for (const y of a) {
                    const z = y.mode.numCharCountBits(s);
                    if (y.numChars >= 1 << z)
                        return 1 / 0;
                    x += 4 + z + y.bitData.length;
                }
                return x;
            }
            static toUtf8ByteArray(a) {
                a = encodeURI(a);
                let x = [];
                for (let y = 0; y < a.length; y++)
                    '%' != a.charAt(y) ? x.push(a.charCodeAt(y)) : (x.push(parseInt(a.substr(y + 1, 2), 16)), y += 2);
                return x;
            }
            constructor(a, s, r) {
                if (this.mode = a, this.numChars = s, this.bitData = r, s < 0)
                    throw new RangeError('Invalid argument');
                this.bitData = r.slice();
            }
        };
        let x = y;
        x.NUMERIC_REGEX = /^[0-9]*$/, x.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, x.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:', a.QrSegment = x;
    })(d || (d = {})), (a => {
        let m;
        (a => {
            const n = class {
                constructor(a, n) {
                    this.ordinal = a, this.formatBits = n;
                }
            };
            let o = p;
            o.LOW = new p(0, 1), o.MEDIUM = new p(1, 0), o.QUARTILE = new p(2, 3), o.HIGH = new p(3, 2), a.Ecc = o;
        })(m = a.QrCode || (a.QrCode = {}));
    })(d || (d = {})), (a => {
        let m;
        (a => {
            const n = class {
                numCharCountBits(a) {
                    return this.numBitsCharCount[Math.floor((a + 7) / 17)];
                }
                constructor(a, n) {
                    this.modeBits = a, this.numBitsCharCount = n;
                }
            };
            let o = p;
            o.NUMERIC = new p(1, [
                10,
                12,
                14
            ]), o.ALPHANUMERIC = new p(2, [
                9,
                11,
                13
            ]), o.BYTE = new p(4, [
                8,
                16,
                16
            ]), o.KANJI = new p(8, [
                8,
                10,
                12
            ]), o.ECI = new p(7, [
                0,
                0,
                0
            ]), a.Mode = o;
        })(m = a.QrSegment || (a.QrSegment = {}));
    })(d || (d = {}));
    var m = n,
        o = {
            L: m.QrCode.Ecc.LOW,
            M: m.QrCode.Ecc.MEDIUM,
            Q: m.QrCode.Ecc.QUARTILE,
            H: m.QrCode.Ecc.HIGH
        },
        p = 128,
        q = 'L',
        r = '#FFFFFF',
        s = '#000000',
        t = !1;

    function u(a, v = 0) {
        const w = [];
        return a.forEach(function(a, C) {
            let x = null;
            a.forEach(function(n, e) {
                if (!n && null !== x)
                    return w.push(`M${ x + v } ${ C + v }h${ e - x }v1H${ x + v }z`), void(x = null);
                if (e !== a.length - 1)
                    n && null === x && (x = e);
                else {
                    if (!n)
                        return;
                    null === x ? w.push(`M${ e + v },${ C + v } h1v1H${ e + v }z`) : w.push(`M${ x + v },${ C + v } h${ e + 1 - x }v1H${ x + v }z`);
                }
            });
        }), w.join('');
    }

    function w(a, v) {
        return a.slice().map((a, c) => c < v.y || c >= v.y + v.h ? a : a.map((a, c) => (c < v.x || c >= v.x + v.w) && a));
    }

    function x(a, v, c, C) {
        if (null == C)
            return null;
        const y = c ? 4 : 0,
            z = a.length + 2 * y,
            A = Math.floor(0.1 * v),
            B = z / v,
            C = (C.width || A) * B,
            D = (C.height || A) * B,
            E = null == C.x ? a.length / 2 - C / 2 : C.x * B,
            F = null == C.y ? a.length / 2 - D / 2 : C.y * B;
        let G = null;
        if (C.excavate) {
            let H = Math.floor(E),
                I = Math.floor(F);
            G = {
                x: H,
                y: I,
                w: Math.ceil(C + E - H),
                h: Math.ceil(D + F - I)
            };
        }
        return {
            x: E,
            y: F,
            h: D,
            w: C,
            excavation: G
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

    function z(v) {
        const A = B,
            {
                value: C,
                size: D = E,
                level: F = G,
                bgColor: H = I,
                fgColor: J = K,
                includeMargin: L = M,
                style: N,
                imageSettings: O
            } = P,
            Q = l(P, [
                'value',
                'size',
                'level',
                'bgColor',
                'fgColor',
                'includeMargin',
                'style',
                'imageSettings'
            ]),
            R = null == O ? void 0 : O.src,
            S = (0, e.useRef)(null),
            T = (0, e.useRef)(null),
            [U, V] = (0, e.useState)(!1);
        (0, e.useEffect)(() => {
            if (null != S.current) {
                const W = S.current,
                    X = W.getContext('2d');
                if (!X)
                    return;
                let Y = m.QrCode.encodeText(C, o[F]).getModules();
                const Z = L ? 4 : 0,
                    $ = Y.length + 2 * Z,
                    _ = x(Y, D, L, O),
                    ab = T.current,
                    bb = null != _ && null !== ab && ab.complete && 0 !== ab.naturalHeight && 0 !== ab.naturalWidth;
                bb && null != _.excavation && (Y = w(Y, _.excavation));
                const cb = window.devicePixelRatio || 1;
                W.height = W.width = D * cb;
                const db = D / $ * cb;
                X.scale(db, db), X.fillStyle = H, X.fillRect(0, 0, $, $), X.fillStyle = J, y ? X.fill(new Path2D(u(Y, Z))) : Y.forEach(function(W, Y) {
                    W.forEach(function(W, C) {
                        W && X.fillRect(C + Z, Y + Z, 1, 1);
                    });
                }), bb && X.drawImage(ab, _.x + Z, _.y + Z, _.w, _.h);
            }
        }), (0, e.useEffect)(() => {
            V(!1);
        }, [R]);
        const W = k({
            height: D,
            width: D
        }, N);
        let X = null;
        return null != R && (X = a(e).createElement('img', {
            src: R,
            key: R,
            style: {
                display: 'none'
            },
            onLoad: () => {
                V(!0);
            },
            ref: T
        })), a(e).createElement(a(e).Fragment, null, a(e).createElement('canvas', k({
            style: W,
            height: D,
            width: D,
            ref: S
        }, Q)), X);
    }
}), c.register('lB6/+', function(a, d) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('FUfmR'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ReloadOutlined';
    var i = e.forwardRef(h);
}), c.register('FUfmR', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('rJRxD', function(a, r) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('P38j/');
    var g = (0, d.default)('QRCode', a => (a => {
        const {
            componentCls: h
        } = i;
        return {
            [h]: Object.assign(Object.assign({}, (0, f.resetComponent)(i)), {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: i.paddingSM,
                backgroundColor: i.colorWhite,
                borderRadius: i.borderRadiusLG,
                border: `${ i.lineWidth }px ${ i.lineType } ${ i.colorSplit }`,
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                [`& > ${ h }-mask`]: {
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
                    color: i.colorText,
                    lineHeight: i.lineHeight,
                    background: i.QRCodeMaskBackgroundColor,
                    textAlign: 'center',
                    [`& > ${ h }-expired`]: {
                        color: i.QRCodeExpiredTextColor
                    }
                },
                '&-icon': {
                    marginBlockEnd: i.marginXS,
                    fontSize: i.controlHeight
                }
            }),
            [`${ h }-borderless`]: {
                borderColor: 'transparent'
            }
        };
    })((0, e.merge)(a, {
        QRCodeExpiredTextColor: 'rgba(0, 0, 0, 0.88)',
        QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
    })));
});