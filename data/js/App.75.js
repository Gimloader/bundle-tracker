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
c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    const {
        useToken: p
    } = o.default;
    var _q = r => {
        const {
            value: s,
            icon: t = '',
            size: u = 160,
            iconSize: v = 40,
            color: w = '#000',
            errorLevel: x = 'M',
            status: y = 'active',
            bordered: z = !0,
            onRefresh: A,
            style: B,
            className: C,
            rootClassName: D,
            prefixCls: E
        } = r, {
            getPrefixCls: F
        } = (0, f.useContext)(j.ConfigContext), G = F('qrcode', E), [H, I] = (0, l.default)(G), {
            token: J
        } = p(), K = (0, f.useMemo)(() => {
            const L = {
                src: t,
                x: void 0,
                y: void 0,
                height: v,
                width: v,
                excavate: !0
            };
            return {
                value: s,
                size: u - 2 * (J.paddingSM + J.lineWidth),
                level: x,
                bgColor: 'transparent',
                fgColor: w,
                imageSettings: t ? L : void 0
            };
        }, [
            x,
            w,
            t,
            v,
            u,
            s
        ]);
        if (!s)
            return null;
        const L = a(h)(G, C, D, I, {
            [`${ G }-borderless`]: !z
        });
        return H(a(f).createElement(k.default, {
            componentName: 'QRCode'
        }, M => a(f).createElement('div', {
            style: Object.assign(Object.assign({}, B), {
                width: u,
                height: u
            }),
            className: L
        }, 'active' !== y && a(f).createElement('div', {
            className: `${ G }-mask`
        }, 'loading' === y && a(f).createElement(m.default, null), 'expired' === y && a(f).createElement(a(f).Fragment, null, a(f).createElement('p', {
            className: `${ G }-expired`
        }, M.expired), 'function' == typeof A && a(f).createElement(n.default, {
            type: 'link',
            icon: a(f).createElement(i.default, null),
            onClick: A
        }, M.refresh))), a(f).createElement(g.QRCodeCanvas, Object.assign({}, K)))));
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'QRCodeCanvas', function() {
        return _I;
    });
    var f, g = c('.....'),
        h = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        l = (m, n, o) => n in m ? h(m, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : m[n] = o,
        m = (n, o) => {
            for (var p in o || (o = {}))
                j.call(o, p) && l(n, p, o[p]);
            if (i)
                for (var q of i(o))
                    k.call(o, q) && l(n, q, o[q]);
            return n;
        },
        n = (o, p) => {
            var q = {};
            for (var r in o)
                j.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && i)
                for (var s of i(o))
                    p.indexOf(s) < 0 && k.call(o, s) && (q[s] = o[s]);
            return q;
        };
    (o => {
        const p = class {
            static encodeText(q, r) {
                const s = o.QrSegment.makeSegments(q);
                return p.encodeSegments(s, r);
            }
            static encodeBinary(q, r) {
                const s = o.QrSegment.makeBytes(q);
                return p.encodeSegments([s], r);
            }
            static encodeSegments(q, r, s = 1, t = 40, u = -1, v = !0) {
                if (!(p.MIN_VERSION <= s && s <= t && t <= p.MAX_VERSION) || u < -1 || u > 7)
                    throw new RangeError('Invalid value');
                let w, x;
                for (w = s;; w++) {
                    const y = 8 * p.getNumDataCodewords(w, r),
                        z = h.getTotalBits(q, w);
                    if (z <= y) {
                        x = z;
                        break;
                    }
                    if (w >= t)
                        throw new RangeError('Data too long');
                }
                for (const A of [
                        p.Ecc.MEDIUM,
                        p.Ecc.QUARTILE,
                        p.Ecc.HIGH
                    ])
                    v && x <= 8 * p.getNumDataCodewords(w, A) && (r = A);
                let B = [];
                for (const C of A) {
                    y(C.mode.modeBits, 4, B), y(C.numChars, C.mode.numCharCountBits(w), B);
                    for (const D of C.getData())
                        B.push(D);
                }
                f(B.length == x);
                const E = 8 * C.getNumDataCodewords(w, r);
                f(B.length <= E), y(0, Math.min(4, E - B.length), B), y(0, (8 - B.length % 8) % 8, B), f(B.length % 8 == 0);
                for (let F = 236; B.length < E; F ^= 253)
                    y(F, 8, B);
                let G = [];
                for (; 8 * G.length < B.length;)
                    G.push(0);
                return B.forEach((H, I) => G[I >>> 3] |= H << 7 - (7 & I)), new C(w, r, G, u);
            }
            getModule(q, r) {
                return 0 <= q && q < this.size && 0 <= r && r < this.size && this.modules[r][q];
            }
            getModules() {
                return this.modules;
            }
            drawFunctionPatterns() {
                for (let q = 0; q < this.size; q++)
                    this.setFunctionModule(6, q, q % 2 == 0), this.setFunctionModule(q, 6, q % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                const r = this.getAlignmentPatternPositions(),
                    s = q.length;
                for (let t = 0; t < s; t++)
                    for (let u = 0; u < s; u++)
                        0 == t && 0 == u || 0 == t && u == s - 1 || t == s - 1 && 0 == u || this.drawAlignmentPattern(q[t], q[u]);
                this.drawFormatBits(0), this.drawVersion();
            }
            drawFormatBits(q) {
                const r = this.errorCorrectionLevel.formatBits << 3 | q;
                let s = r;
                for (let t = 0; t < 10; t++)
                    s = s << 1 ^ 1335 * (s >>> 9);
                const u = 21522 ^ (r << 10 | s);
                f(u >>> 15 == 0);
                for (let v = 0; v <= 5; v++)
                    this.setFunctionModule(8, v, e(u, v));
                this.setFunctionModule(8, 7, e(u, 6)), this.setFunctionModule(8, 8, e(u, 7)), this.setFunctionModule(7, 8, e(u, 8));
                for (let w = 9; w < 15; w++)
                    this.setFunctionModule(14 - w, 8, e(u, w));
                for (let x = 0; x < 8; x++)
                    this.setFunctionModule(this.size - 1 - x, 8, e(u, x));
                for (let y = 8; y < 15; y++)
                    this.setFunctionModule(8, this.size - 15 + y, e(u, y));
                this.setFunctionModule(8, this.size - 8, !0);
            }
            drawVersion() {
                if (this.version < 7)
                    return;
                let q = this.version;
                for (let r = 0; r < 12; r++)
                    q = q << 1 ^ 7973 * (q >>> 11);
                const s = this.version << 12 | q;
                f(r >>> 18 == 0);
                for (let t = 0; t < 18; t++) {
                    const u = e(r, t),
                        v = this.size - 11 + t % 3,
                        w = Math.floor(t / 3);
                    this.setFunctionModule(v, w, u), this.setFunctionModule(w, v, u);
                }
            }
            drawFinderPattern(q, r) {
                for (let s = -4; s <= 4; s++)
                    for (let t = -4; t <= 4; t++) {
                        const u = Math.max(Math.abs(t), Math.abs(s)),
                            v = q + t,
                            w = r + s;
                        0 <= v && v < this.size && 0 <= w && w < this.size && this.setFunctionModule(v, w, 2 != u && 4 != u);
                    }
            }
            drawAlignmentPattern(q, r) {
                for (let s = -2; s <= 2; s++)
                    for (let t = -2; t <= 2; t++)
                        this.setFunctionModule(q + t, r + s, 1 != Math.max(Math.abs(t), Math.abs(s)));
            }
            setFunctionModule(q, r, s) {
                this.modules[r][q] = s, this.isFunction[r][q] = !0;
            }
            addEccAndInterleave(q) {
                const r = this.version,
                    s = this.errorCorrectionLevel;
                if (q.length != p.getNumDataCodewords(r, s))
                    throw new RangeError('Invalid argument');
                const t = p.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][r],
                    u = p.ECC_CODEWORDS_PER_BLOCK[s.ordinal][r],
                    v = Math.floor(p.getNumRawDataModules(r) / 8),
                    w = t - v % t,
                    x = Math.floor(v / t);
                let y = [];
                const z = p.reedSolomonComputeDivisor(u);
                for (let A = 0, B = 0; A < t; A++) {
                    let C = q.slice(B, B + x - u + (A < w ? 0 : 1));
                    B += C.length;
                    const D = p.reedSolomonComputeRemainder(C, z);
                    A < w && C.push(0), y.push(C.concat(D));
                }
                let D = [];
                for (let E = 0; E < y[0].length; E++)
                    y.forEach((F, G) => {
                        (E != x - u || G >= w) && D.push(F[E]);
                    });
                return D(D.length == v), D;
            }
            drawCodewords(q) {
                if (q.length != Math.floor(p.getNumRawDataModules(this.version) / 8))
                    throw new RangeError('Invalid argument');
                let r = 0;
                for (let s = this.size - 1; s >= 1; s -= 2) {
                    6 == s && (s = 5);
                    for (let t = 0; t < this.size; t++)
                        for (let u = 0; u < 2; u++) {
                            const v = s - u,
                                w = 0 == (s + 1 & 2) ? this.size - 1 - t : t;
                            !this.isFunction[w][v] && r < 8 * q.length && (this.modules[w][v] = e(q[r >>> 3], 7 - (7 & r)), r++);
                        }
                }
                f(r == 8 * q.length);
            }
            applyMask(q) {
                if (q < 0 || q > 7)
                    throw new RangeError('Mask value out of range');
                for (let r = 0; r < this.size; r++)
                    for (let s = 0; s < this.size; s++) {
                        let t;
                        switch (q) {
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
                let q = 0;
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
                        this.modules[r][v] == s ? (t++, 5 == t ? q += p.PENALTY_N1 : t > 5 && q++) : (this.finderPenaltyAddHistory(t, u), s || (q += this.finderPenaltyCountPatterns(u) * p.PENALTY_N3), s = this.modules[r][v], t = 1);
                    q += this.finderPenaltyTerminateAndCount(s, t, u) * p.PENALTY_N3;
                }
                for (let s = 0; s < this.size; s++) {
                    let t = !1,
                        u = 0,
                        v = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let w = 0; w < this.size; w++)
                        this.modules[w][s] == t ? (u++, 5 == u ? q += p.PENALTY_N1 : u > 5 && q++) : (this.finderPenaltyAddHistory(u, v), t || (q += this.finderPenaltyCountPatterns(v) * p.PENALTY_N3), t = this.modules[w][s], u = 1);
                    q += this.finderPenaltyTerminateAndCount(t, u, v) * p.PENALTY_N3;
                }
                for (let t = 0; t < this.size - 1; t++)
                    for (let u = 0; u < this.size - 1; u++) {
                        const v = this.modules[t][u];
                        v == this.modules[t][u + 1] && v == this.modules[t + 1][u] && v == this.modules[t + 1][u + 1] && (q += p.PENALTY_N2);
                    }
                let w = 0;
                for (const x of this.modules)
                    w = q.reduce((y, z) => y + (z ? 1 : 0), w);
                const y = this.size * this.size,
                    z = Math.ceil(Math.abs(20 * w - 10 * u) / u) - 1;
                return f(0 <= z && z <= 9), q += z * p.PENALTY_N4, f(0 <= q && q <= 2568888), q;
            }
            getAlignmentPatternPositions() {
                if (1 == this.version)
                    return [];
                {
                    const q = Math.floor(this.version / 7) + 2,
                        r = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * q - 2));
                    let s = [6];
                    for (let t = this.size - 7; s.length < q; t -= r)
                        s.splice(1, 0, t);
                    return s;
                }
            }
            static getNumRawDataModules(q) {
                if (q < p.MIN_VERSION || q > p.MAX_VERSION)
                    throw new RangeError('Version number out of range');
                let r = (16 * q + 128) * q + 64;
                if (q >= 2) {
                    const s = Math.floor(q / 7) + 2;
                    r -= (25 * s - 10) * s - 55, q >= 7 && (r -= 36);
                }
                return f(208 <= r && r <= 29648), r;
            }
            static getNumDataCodewords(q, r) {
                return Math.floor(p.getNumRawDataModules(q) / 8) - p.ECC_CODEWORDS_PER_BLOCK[r.ordinal][q] * p.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][q];
            }
            static reedSolomonComputeDivisor(q) {
                if (q < 1 || q > 255)
                    throw new RangeError('Degree out of range');
                let r = [];
                for (let s = 0; s < q - 1; s++)
                    r.push(0);
                r.push(1);
                let t = 1;
                for (let u = 0; u < q; u++) {
                    for (let v = 0; v < r.length; v++)
                        r[v] = s.reedSolomonMultiply(r[v], t), v + 1 < r.length && (r[v] ^= r[v + 1]);
                    t = s.reedSolomonMultiply(t, 2);
                }
                return r;
            }
            static reedSolomonComputeRemainder(q, r) {
                let s = r.map(t => 0);
                for (const t of q) {
                    const u = t ^ s.shift();
                    s.push(0), r.forEach((v, w) => s[w] ^= p.reedSolomonMultiply(v, u));
                }
                return s;
            }
            static reedSolomonMultiply(q, r) {
                if (q >>> 8 != 0 || r >>> 8 != 0)
                    throw new RangeError('Byte out of range');
                let s = 0;
                for (let t = 7; t >= 0; t--)
                    s = s << 1 ^ 285 * (s >>> 7), s ^= (r >>> t & 1) * q;
                return f(s >>> 8 == 0), s;
            }
            finderPenaltyCountPatterns(q) {
                const r = q[1];
                f(r <= 3 * this.size);
                const s = r > 0 && q[2] == r && q[3] == 3 * r && q[4] == r && q[5] == r;
                return (s && q[0] >= 4 * r && q[6] >= r ? 1 : 0) + (s && q[6] >= 4 * r && q[0] >= r ? 1 : 0);
            }
            finderPenaltyTerminateAndCount(q, r, s) {
                return q && (this.finderPenaltyAddHistory(r, s), r = 0), r += this.size, this.finderPenaltyAddHistory(r, s), this.finderPenaltyCountPatterns(s);
            }
            finderPenaltyAddHistory(q, r) {
                0 == r[0] && (q += this.size), r.pop(), r.unshift(q);
            }
            constructor(q, r, s, t) {
                if (this.version = q, this.errorCorrectionLevel = r, this.modules = [], this.isFunction = [], q < p.MIN_VERSION || q > p.MAX_VERSION)
                    throw new RangeError('Version value out of range');
                if (t < -1 || t > 7)
                    throw new RangeError('Mask value out of range');
                this.size = 4 * q + 17;
                let u = [];
                for (let v = 0; v < this.size; v++)
                    u.push(!1);
                for (let w = 0; w < this.size; w++)
                    this.modules.push(u.slice()), this.isFunction.push(u.slice());
                this.drawFunctionPatterns();
                const x = this.addEccAndInterleave(s);
                if (this.drawCodewords(x), -1 == t) {
                    let y = 1000000000;
                    for (let z = 0; z < 8; z++) {
                        this.applyMask(z), this.drawFormatBits(z);
                        const A = this.getPenaltyScore();
                        A < y && (t = z, y = A), this.applyMask(z);
                    }
                }
                f(0 <= t && t <= 7), this.mask = t, this.applyMask(t), this.drawFormatBits(t), this.isFunction = [];
            }
        };
        let q = p;

        function r(s, t, u) {
            if (t < 0 || t > 31 || s >>> t != 0)
                throw new RangeError('Value out of range');
            for (let v = t - 1; v >= 0; v--)
                u.push(s >>> v & 1);
        }

        function s(t, u) {
            return 0 != (t >>> u & 1);
        }

        function t(u) {
            if (!u)
                throw new Error('Assertion error');
        }
        q.MIN_VERSION = 1, q.MAX_VERSION = 40, q.PENALTY_N1 = 3, q.PENALTY_N2 = 3, q.PENALTY_N3 = 40, q.PENALTY_N4 = 10, q.ECC_CODEWORDS_PER_BLOCK = [
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
        ], q.NUM_ERROR_CORRECTION_BLOCKS = [
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
        ], o.QrCode = q;
        const u = class {
            static makeBytes(v) {
                let w = [];
                for (const x of v)
                    r(x, 8, w);
                return new u(u.Mode.BYTE, v.length, w);
            }
            static makeNumeric(v) {
                if (!u.isNumeric(v))
                    throw new RangeError('String contains non-numeric characters');
                let w = [];
                for (let x = 0; x < v.length;) {
                    const y = Math.min(v.length - x, 3);
                    r(parseInt(v.substr(x, y), 10), 3 * y + 1, w), x += y;
                }
                return new u(u.Mode.NUMERIC, v.length, w);
            }
            static makeAlphanumeric(v) {
                if (!u.isAlphanumeric(v))
                    throw new RangeError('String contains unencodable characters in alphanumeric mode');
                let w, x = [];
                for (w = 0; w + 2 <= v.length; w += 2) {
                    let y = 45 * u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(w));
                    y += u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(w + 1)), r(y, 11, x);
                }
                return w < v.length && r(u.ALPHANUMERIC_CHARSET.indexOf(v.charAt(w)), 6, x), new u(u.Mode.ALPHANUMERIC, v.length, x);
            }
            static makeSegments(v) {
                return '' == v ? [] : u.isNumeric(v) ? [u.makeNumeric(v)] : u.isAlphanumeric(v) ? [u.makeAlphanumeric(v)] : [u.makeBytes(u.toUtf8ByteArray(v))];
            }
            static makeEci(v) {
                let w = [];
                if (v < 0)
                    throw new RangeError('ECI assignment value out of range');
                if (v < 128)
                    r(v, 8, w);
                else if (v < 16384)
                    r(2, 2, w), r(v, 14, w);
                else {
                    if (!(v < 1000000))
                        throw new RangeError('ECI assignment value out of range');
                    r(6, 3, w), r(v, 21, w);
                }
                return new u(u.Mode.ECI, 0, w);
            }
            static isNumeric(v) {
                return u.NUMERIC_REGEX.test(v);
            }
            static isAlphanumeric(v) {
                return u.ALPHANUMERIC_REGEX.test(v);
            }
            getData() {
                return this.bitData.slice();
            }
            static getTotalBits(v, w) {
                let x = 0;
                for (const y of v) {
                    const z = y.mode.numCharCountBits(w);
                    if (y.numChars >= 1 << z)
                        return 1 / 0;
                    x += 4 + z + y.bitData.length;
                }
                return x;
            }
            static toUtf8ByteArray(v) {
                v = encodeURI(v);
                let w = [];
                for (let x = 0; x < v.length; x++)
                    '%' != v.charAt(x) ? w.push(v.charCodeAt(x)) : (w.push(parseInt(v.substr(x + 1, 2), 16)), x += 2);
                return w;
            }
            constructor(v, w, x) {
                if (this.mode = v, this.numChars = w, this.bitData = x, w < 0)
                    throw new RangeError('Invalid argument');
                this.bitData = x.slice();
            }
        };
        let v = u;
        v.NUMERIC_REGEX = /^[0-9]*$/, v.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, v.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:', o.QrSegment = v;
    })(f || (f = {})), (o => {
        let p;
        (q => {
            const r = class {
                constructor(s, t) {
                    this.ordinal = s, this.formatBits = t;
                }
            };
            let s = r;
            s.LOW = new r(0, 1), s.MEDIUM = new r(1, 0), s.QUARTILE = new r(2, 3), s.HIGH = new r(3, 2), q.Ecc = s;
        })(p = o.QrCode || (o.QrCode = {}));
    })(f || (f = {})), (o => {
        let p;
        (q => {
            const r = class {
                numCharCountBits(s) {
                    return this.numBitsCharCount[Math.floor((s + 7) / 17)];
                }
                constructor(s, t) {
                    this.modeBits = s, this.numBitsCharCount = t;
                }
            };
            let s = r;
            s.NUMERIC = new r(1, [
                10,
                12,
                14
            ]), s.ALPHANUMERIC = new r(2, [
                9,
                11,
                13
            ]), s.BYTE = new r(4, [
                8,
                16,
                16
            ]), s.KANJI = new r(8, [
                8,
                10,
                12
            ]), s.ECI = new r(7, [
                0,
                0,
                0
            ]), q.Mode = s;
        })(p = o.QrSegment || (o.QrSegment = {}));
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

    function x(y, z) {
        return y.slice().map((A, B) => B < z.y || B >= z.y + z.h ? A : A.map((C, D) => (D < z.x || D >= z.x + z.w) && C));
    }

    function y(z, A, B, C) {
        if (null == C)
            return null;
        const D = B ? 4 : 0,
            E = z.length + 2 * D,
            F = Math.floor(0.1 * A),
            G = E / A,
            H = (C.width || F) * G,
            I = (C.height || F) * G,
            J = null == C.x ? z.length / 2 - H / 2 : C.x * G,
            K = null == C.y ? z.length / 2 - I / 2 : C.y * G;
        let L = null;
        if (C.excavate) {
            let M = Math.floor(J),
                N = Math.floor(K);
            L = {
                x: M,
                y: N,
                w: Math.ceil(H + J - M),
                h: Math.ceil(I + K - N)
            };
        }
        return {
            x: J,
            y: K,
            h: I,
            w: H,
            excavation: L
        };
    }
    var H = function() {
        try {
            new Path2D().addPath(new Path2D());
        } catch (a) {
            return !1;
        }
        return !0;
    }();

    function _I(J) {
        const K = J,
            {
                value: L,
                size: M = N,
                level: O = P,
                bgColor: Q = R,
                fgColor: S = T,
                includeMargin: U = V,
                style: W,
                imageSettings: X
            } = K,
            Y = n(K, [
                'value',
                'size',
                'level',
                'bgColor',
                'fgColor',
                'includeMargin',
                'style',
                'imageSettings'
            ]),
            Z = null == X ? void 0 : X.src,
            $ = (0, F.useRef)(null),
            ab = (0, F.useRef)(null),
            [bb, cb] = (0, F.useState)(!1);
        (0, F.useEffect)(() => {
            if (null != $.current) {
                const db = $.current,
                    eb = db.getContext('2d');
                if (!eb)
                    return;
                let fb = o.QrCode.encodeText(L, p[O]).getModules();
                const gb = U ? 4 : 0,
                    hb = fb.length + 2 * gb,
                    ib = y(fb, M, U, X),
                    jb = ab.current,
                    kb = null != ib && null !== jb && jb.complete && 0 !== jb.naturalHeight && 0 !== jb.naturalWidth;
                kb && null != ib.excavation && (fb = x(fb, ib.excavation));
                const lb = window.devicePixelRatio || 1;
                db.height = db.width = M * lb;
                const mb = M / hb * lb;
                eb.scale(mb, mb), eb.fillStyle = Q, eb.fillRect(0, 0, hb, hb), eb.fillStyle = S, H ? eb.fill(new Path2D(v(fb, gb))) : fb.forEach(function(nb, ob) {
                    nb.forEach(function(pb, qb) {
                        pb && eb.fillRect(qb + gb, ob + gb, 1, 1);
                    });
                }), kb && eb.drawImage(jb, ib.x + gb, ib.y + gb, ib.w, ib.h);
            }
        }), (0, F.useEffect)(() => {
            cb(!1);
        }, [Z]);
        const db = m({
            height: M,
            width: M
        }, W);
        let eb = null;
        return null != Z && (eb = a(F).createElement('img', {
            src: Z,
            key: Z,
            style: {
                display: 'none'
            },
            onLoad: () => {
                cb(!0);
            },
            ref: ab
        })), a(F).createElement(a(F).Fragment, null, a(F).createElement('canvas', m({
            style: db,
            height: M,
            width: M,
            ref: $
        }, _I)), eb);
    }
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ReloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
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
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = (0, f.default)('QRCode', j => (k => {
        const {
            componentCls: l
        } = k;
        return {
            [l]: Object.assign(Object.assign({}, (0, h.resetComponent)(k)), {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: k.paddingSM,
                backgroundColor: k.colorWhite,
                borderRadius: k.borderRadiusLG,
                border: `${ k.lineWidth }px ${ k.lineType } ${ k.colorSplit }`,
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                [`& > ${ l }-mask`]: {
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
                    color: k.colorText,
                    lineHeight: k.lineHeight,
                    background: k.QRCodeMaskBackgroundColor,
                    textAlign: 'center',
                    [`& > ${ l }-expired`]: {
                        color: k.QRCodeExpiredTextColor
                    }
                },
                '&-icon': {
                    marginBlockEnd: k.marginXS,
                    fontSize: k.controlHeight
                }
            }),
            [`${ l }-borderless`]: {
                borderColor: 'transparent'
            }
        };
    })((0, g.merge)(j, {
        QRCodeExpiredTextColor: 'rgba(0, 0, 0, 0.88)',
        QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
    })));
});