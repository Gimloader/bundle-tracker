function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('3Bibb', function(b, c) {
    _m(b.exports, 'default', function() {
        return _o;
    });
    var d = a('LEQ5w'),
        e = a('GaKrv'),
        f = a('JrtKP'),
        g = a('jem+E'),
        h = a('1P5ls'),
        i = a('B9b0M'),
        j = a('a2lZD'),
        k = a('6CIVV'),
        l = a('ulE4q'),
        m = a('cH8qQ');
    const {
        useToken: n
    } = m.default;
    var _o = _m => {
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
        } = _m, {
            getPrefixCls: C
        } = (0, d.useContext)(h.ConfigContext), D = C('qrcode', B), [E, F] = (0, j.default)(D), {
            token: G
        } = n(), H = (0, d.useMemo)(() => {
            const I = {
                src: q,
                x: void 0,
                y: void 0,
                height: s,
                width: s,
                excavate: !0
            };
            return {
                value: p,
                size: r - 2 * (G.paddingSM + G.lineWidth),
                level: u,
                bgColor: 'transparent',
                fgColor: t,
                imageSettings: q ? I : void 0
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
        const I = _n(f)(D, z, A, F, {
            [`${ D }-borderless`]: !w
        });
        return E(_n(d).createElement(i.default, {
            componentName: 'QRCode'
        }, _m => _n(d).createElement('div', {
            style: Object.assign(Object.assign({}, y), {
                width: r,
                height: r
            }),
            className: I
        }, 'active' !== v && _n(d).createElement('div', {
            className: `${ D }-mask`
        }, 'loading' === v && _n(d).createElement(k.default, null), 'expired' === v && _n(d).createElement(_n(d).Fragment, null, _n(d).createElement('p', {
            className: `${ D }-expired`
        }, _m.expired), 'function' == typeof x && _n(d).createElement(l.default, {
            type: 'link',
            icon: _n(d).createElement(g.default, null),
            onClick: x
        }, _m.refresh))), _n(d).createElement(e.QRCodeCanvas, Object.assign({}, H)))));
    };
}), a.register('GaKrv', function(b, c) {
    _m(b.exports, 'QRCodeCanvas', function() {
        return _u;
    });
    var d, e = a('LEQ5w'),
        f = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable,
        j = (_n, _m, a) => _m in _n ? f(_n, _m, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : _n[_m] = a,
        k = (_n, _m) => {
            for (var l in _m || (_m = {}))
                h.call(_m, l) && j(_n, l, _m[l]);
            if (g)
                for (var m of g(_m))
                    i.call(_m, m) && j(_n, m, _m[m]);
            return _n;
        },
        l = (_n, _m) => {
            var m = {};
            for (var n in _n)
                h.call(_n, n) && _m.indexOf(n) < 0 && (m[n] = _n[n]);
            if (null != _n && g)
                for (var o of g(_n))
                    _m.indexOf(o) < 0 && i.call(_n, o) && (m[o] = _n[o]);
            return m;
        };
    (_n => {
        const _m = class {
            static encodeText(n, o) {
                const p = _n.QrSegment.makeSegments(n);
                return _m.encodeSegments(p, o);
            }
            static encodeBinary(n, o) {
                const p = _n.QrSegment.makeBytes(n);
                return _m.encodeSegments([p], o);
            }
            static encodeSegments(_n, o, p = 1, q = 40, r = -1, s = !0) {
                if (!(_m.MIN_VERSION <= p && p <= q && q <= _m.MAX_VERSION) || r < -1 || r > 7)
                    throw new RangeError('Invalid value');
                let t, u;
                for (t = p;; t++) {
                    const v = 8 * _m.getNumDataCodewords(t, o),
                        w = f.getTotalBits(_n, t);
                    if (w <= v) {
                        u = w;
                        break;
                    }
                    if (t >= q)
                        throw new RangeError('Data too long');
                }
                for (const v of [
                        _m.Ecc.MEDIUM,
                        _m.Ecc.QUARTILE,
                        _m.Ecc.HIGH
                    ])
                    s && u <= 8 * _m.getNumDataCodewords(t, v) && (o = v);
                let w = [];
                for (const x of v) {
                    b(x.mode.modeBits, 4, w), b(x.numChars, x.mode.numCharCountBits(t), w);
                    for (const y of x.getData())
                        w.push(y);
                }
                d(w.length == u);
                const y = 8 * x.getNumDataCodewords(t, o);
                d(w.length <= y), b(0, Math.min(4, y - w.length), w), b(0, (8 - w.length % 8) % 8, w), d(w.length % 8 == 0);
                for (let z = 236; w.length < y; z ^= 253)
                    b(z, 8, w);
                let A = [];
                for (; 8 * A.length < w.length;)
                    A.push(0);
                return w.forEach((z, x) => A[x >>> 3] |= z << 7 - (7 & x)), new x(t, o, A, r);
            }
            getModule(n, o) {
                return 0 <= n && n < this.size && 0 <= o && o < this.size && this.modules[o][n];
            }
            getModules() {
                return this.modules;
            }
            drawFunctionPatterns() {
                for (let n = 0; n < this.size; n++)
                    this.setFunctionModule(6, n, n % 2 == 0), this.setFunctionModule(n, 6, n % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                const o = this.getAlignmentPatternPositions(),
                    p = o.length;
                for (let q = 0; q < p; q++)
                    for (let r = 0; r < p; r++)
                        0 == q && 0 == r || 0 == q && r == p - 1 || q == p - 1 && 0 == r || this.drawAlignmentPattern(o[q], o[r]);
                this.drawFormatBits(0), this.drawVersion();
            }
            drawFormatBits(n) {
                const o = this.errorCorrectionLevel.formatBits << 3 | n;
                let p = o;
                for (let q = 0; q < 10; q++)
                    p = p << 1 ^ 1335 * (p >>> 9);
                const r = 21522 ^ (o << 10 | p);
                d(r >>> 15 == 0);
                for (let s = 0; s <= 5; s++)
                    this.setFunctionModule(8, s, c(r, s));
                this.setFunctionModule(8, 7, c(r, 6)), this.setFunctionModule(8, 8, c(r, 7)), this.setFunctionModule(7, 8, c(r, 8));
                for (let t = 9; t < 15; t++)
                    this.setFunctionModule(14 - t, 8, c(r, t));
                for (let u = 0; u < 8; u++)
                    this.setFunctionModule(this.size - 1 - u, 8, c(r, u));
                for (let v = 8; v < 15; v++)
                    this.setFunctionModule(8, this.size - 15 + v, c(r, v));
                this.setFunctionModule(8, this.size - 8, !0);
            }
            drawVersion() {
                if (this.version < 7)
                    return;
                let n = this.version;
                for (let o = 0; o < 12; o++)
                    n = n << 1 ^ 7973 * (n >>> 11);
                const p = this.version << 12 | n;
                d(p >>> 18 == 0);
                for (let q = 0; q < 18; q++) {
                    const r = c(p, q),
                        s = this.size - 11 + q % 3,
                        t = Math.floor(q / 3);
                    this.setFunctionModule(s, t, r), this.setFunctionModule(t, s, r);
                }
            }
            drawFinderPattern(n, o) {
                for (let p = -4; p <= 4; p++)
                    for (let q = -4; q <= 4; q++) {
                        const r = Math.max(Math.abs(q), Math.abs(p)),
                            s = n + q,
                            t = o + p;
                        0 <= s && s < this.size && 0 <= t && t < this.size && this.setFunctionModule(s, t, 2 != r && 4 != r);
                    }
            }
            drawAlignmentPattern(n, o) {
                for (let p = -2; p <= 2; p++)
                    for (let q = -2; q <= 2; q++)
                        this.setFunctionModule(n + q, o + p, 1 != Math.max(Math.abs(q), Math.abs(p)));
            }
            setFunctionModule(n, o, p) {
                this.modules[o][n] = p, this.isFunction[o][n] = !0;
            }
            addEccAndInterleave(n) {
                const o = this.version,
                    p = this.errorCorrectionLevel;
                if (n.length != _m.getNumDataCodewords(o, p))
                    throw new RangeError('Invalid argument');
                const q = _m.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][o],
                    r = _m.ECC_CODEWORDS_PER_BLOCK[p.ordinal][o],
                    s = Math.floor(_m.getNumRawDataModules(o) / 8),
                    t = q - s % q,
                    u = Math.floor(s / q);
                let v = [];
                const w = _m.reedSolomonComputeDivisor(r);
                for (let x = 0, y = 0; x < q; x++) {
                    let z = n.slice(y, y + u - r + (x < t ? 0 : 1));
                    y += z.length;
                    const A = _m.reedSolomonComputeRemainder(z, w);
                    x < t && z.push(0), v.push(z.concat(A));
                }
                let z = [];
                for (let A = 0; A < v[0].length; A++)
                    v.forEach((_m, x) => {
                        (A != u - r || x >= t) && z.push(_m[A]);
                    });
                return d(z.length == s), z;
            }
            drawCodewords(n) {
                if (n.length != Math.floor(_m.getNumRawDataModules(this.version) / 8))
                    throw new RangeError('Invalid argument');
                let o = 0;
                for (let p = this.size - 1; p >= 1; p -= 2) {
                    6 == p && (p = 5);
                    for (let q = 0; q < this.size; q++)
                        for (let r = 0; r < 2; r++) {
                            const s = p - r,
                                t = 0 == (p + 1 & 2) ? this.size - 1 - q : q;
                            !this.isFunction[t][s] && o < 8 * n.length && (this.modules[t][s] = c(n[o >>> 3], 7 - (7 & o)), o++);
                        }
                }
                d(o == 8 * n.length);
            }
            applyMask(n) {
                if (n < 0 || n > 7)
                    throw new RangeError('Mask value out of range');
                for (let o = 0; o < this.size; o++)
                    for (let p = 0; p < this.size; p++) {
                        let q;
                        switch (n) {
                            case 0:
                                q = (p + o) % 2 == 0;
                                break;
                            case 1:
                                q = o % 2 == 0;
                                break;
                            case 2:
                                q = p % 3 == 0;
                                break;
                            case 3:
                                q = (p + o) % 3 == 0;
                                break;
                            case 4:
                                q = (Math.floor(p / 3) + Math.floor(o / 2)) % 2 == 0;
                                break;
                            case 5:
                                q = p * o % 2 + p * o % 3 == 0;
                                break;
                            case 6:
                                q = (p * o % 2 + p * o % 3) % 2 == 0;
                                break;
                            case 7:
                                q = ((p + o) % 2 + p * o % 3) % 2 == 0;
                                break;
                            default:
                                throw new Error('Unreachable');
                        }!this.isFunction[o][p] && q && (this.modules[o][p] = !this.modules[o][p]);
                    }
            }
            getPenaltyScore() {
                let n = 0;
                for (let o = 0; o < this.size; o++) {
                    let p = !1,
                        q = 0,
                        r = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let s = 0; s < this.size; s++)
                        this.modules[o][s] == p ? (q++, 5 == q ? n += _m.PENALTY_N1 : q > 5 && n++) : (this.finderPenaltyAddHistory(q, r), p || (n += this.finderPenaltyCountPatterns(r) * _m.PENALTY_N3), p = this.modules[o][s], q = 1);
                    n += this.finderPenaltyTerminateAndCount(p, q, r) * _m.PENALTY_N3;
                }
                for (let p = 0; p < this.size; p++) {
                    let q = !1,
                        r = 0,
                        s = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                    for (let t = 0; t < this.size; t++)
                        this.modules[t][p] == q ? (r++, 5 == r ? n += _m.PENALTY_N1 : r > 5 && n++) : (this.finderPenaltyAddHistory(r, s), q || (n += this.finderPenaltyCountPatterns(s) * _m.PENALTY_N3), q = this.modules[t][p], r = 1);
                    n += this.finderPenaltyTerminateAndCount(q, r, s) * _m.PENALTY_N3;
                }
                for (let q = 0; q < this.size - 1; q++)
                    for (let r = 0; r < this.size - 1; r++) {
                        const s = this.modules[q][r];
                        s == this.modules[q][r + 1] && s == this.modules[q + 1][r] && s == this.modules[q + 1][r + 1] && (n += _m.PENALTY_N2);
                    }
                let s = 0;
                for (const t of this.modules)
                    s = t.reduce((t, _m) => t + (_m ? 1 : 0), s);
                const u = this.size * this.size,
                    v = Math.ceil(Math.abs(20 * s - 10 * u) / u) - 1;
                return d(0 <= v && v <= 9), t += v * _m.PENALTY_N4, d(0 <= t && t <= 2568888), t;
            }
            getAlignmentPatternPositions() {
                if (1 == this.version)
                    return [];
                {
                    const n = Math.floor(this.version / 7) + 2,
                        o = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * n - 2));
                    let p = [6];
                    for (let q = this.size - 7; p.length < n; q -= o)
                        p.splice(1, 0, q);
                    return p;
                }
            }
            static getNumRawDataModules(n) {
                if (n < _m.MIN_VERSION || n > _m.MAX_VERSION)
                    throw new RangeError('Version number out of range');
                let o = (16 * n + 128) * n + 64;
                if (n >= 2) {
                    const p = Math.floor(n / 7) + 2;
                    o -= (25 * p - 10) * p - 55, n >= 7 && (o -= 36);
                }
                return d(208 <= o && o <= 29648), o;
            }
            static getNumDataCodewords(n, o) {
                return Math.floor(_m.getNumRawDataModules(n) / 8) - _m.ECC_CODEWORDS_PER_BLOCK[o.ordinal][n] * _m.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][n];
            }
            static reedSolomonComputeDivisor(n) {
                if (n < 1 || n > 255)
                    throw new RangeError('Degree out of range');
                let o = [];
                for (let p = 0; p < n - 1; p++)
                    o.push(0);
                o.push(1);
                let q = 1;
                for (let r = 0; r < n; r++) {
                    for (let s = 0; s < o.length; s++)
                        o[s] = p.reedSolomonMultiply(o[s], q), s + 1 < o.length && (o[s] ^= o[s + 1]);
                    q = p.reedSolomonMultiply(q, 2);
                }
                return o;
            }
            static reedSolomonComputeRemainder(n, o) {
                let p = o.map(n => 0);
                for (const q of n) {
                    const r = q ^ p.shift();
                    p.push(0), o.forEach((o, q) => p[q] ^= _m.reedSolomonMultiply(o, r));
                }
                return p;
            }
            static reedSolomonMultiply(n, o) {
                if (n >>> 8 != 0 || o >>> 8 != 0)
                    throw new RangeError('Byte out of range');
                let p = 0;
                for (let q = 7; q >= 0; q--)
                    p = p << 1 ^ 285 * (p >>> 7), p ^= (o >>> q & 1) * n;
                return d(p >>> 8 == 0), p;
            }
            finderPenaltyCountPatterns(n) {
                const o = n[1];
                d(o <= 3 * this.size);
                const p = o > 0 && n[2] == o && n[3] == 3 * o && n[4] == o && n[5] == o;
                return (p && n[0] >= 4 * o && n[6] >= o ? 1 : 0) + (p && n[6] >= 4 * o && n[0] >= o ? 1 : 0);
            }
            finderPenaltyTerminateAndCount(n, o, p) {
                return n && (this.finderPenaltyAddHistory(o, p), o = 0), o += this.size, this.finderPenaltyAddHistory(o, p), this.finderPenaltyCountPatterns(p);
            }
            finderPenaltyAddHistory(n, o) {
                0 == o[0] && (n += this.size), o.pop(), o.unshift(n);
            }
            constructor(n, o, p, q) {
                if (this.version = n, this.errorCorrectionLevel = o, this.modules = [], this.isFunction = [], n < _m.MIN_VERSION || n > _m.MAX_VERSION)
                    throw new RangeError('Version value out of range');
                if (q < -1 || q > 7)
                    throw new RangeError('Mask value out of range');
                this.size = 4 * n + 17;
                let r = [];
                for (let s = 0; s < this.size; s++)
                    r.push(!1);
                for (let t = 0; t < this.size; t++)
                    this.modules.push(r.slice()), this.isFunction.push(r.slice());
                this.drawFunctionPatterns();
                const u = this.addEccAndInterleave(p);
                if (this.drawCodewords(u), -1 == q) {
                    let v = 1000000000;
                    for (let w = 0; w < 8; w++) {
                        this.applyMask(w), this.drawFormatBits(w);
                        const x = this.getPenaltyScore();
                        x < v && (q = w, v = x), this.applyMask(w);
                    }
                }
                d(0 <= q && q <= 7), this.mask = q, this.applyMask(q), this.drawFormatBits(q), this.isFunction = [];
            }
        };
        let n = _m;

        function o(p, q, r) {
            if (q < 0 || q > 31 || p >>> q != 0)
                throw new RangeError('Value out of range');
            for (let s = q - 1; s >= 0; s--)
                r.push(p >>> s & 1);
        }

        function o(p, q) {
            return 0 != (p >>> q & 1);
        }

        function o(p) {
            if (!p)
                throw new Error('Assertion error');
        }
        n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
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
        ], n.NUM_ERROR_CORRECTION_BLOCKS = [
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
        ], _p.QrCode = n;
        const o = class {
            static makeBytes(_p) {
                let q = [];
                for (const r of _p)
                    b(r, 8, q);
                return new o(o.Mode.BYTE, _p.length, q);
            }
            static makeNumeric(p) {
                if (!o.isNumeric(p))
                    throw new RangeError('String contains non-numeric characters');
                let q = [];
                for (let r = 0; r < p.length;) {
                    const s = Math.min(p.length - r, 3);
                    b(parseInt(p.substr(r, s), 10), 3 * s + 1, q), r += s;
                }
                return new o(o.Mode.NUMERIC, p.length, q);
            }
            static makeAlphanumeric(p) {
                if (!o.isAlphanumeric(p))
                    throw new RangeError('String contains unencodable characters in alphanumeric mode');
                let q, r = [];
                for (q = 0; q + 2 <= p.length; q += 2) {
                    let s = 45 * o.ALPHANUMERIC_CHARSET.indexOf(p.charAt(q));
                    s += o.ALPHANUMERIC_CHARSET.indexOf(p.charAt(q + 1)), b(s, 11, r);
                }
                return q < p.length && b(o.ALPHANUMERIC_CHARSET.indexOf(p.charAt(q)), 6, r), new o(o.Mode.ALPHANUMERIC, p.length, r);
            }
            static makeSegments(p) {
                return '' == p ? [] : o.isNumeric(p) ? [o.makeNumeric(p)] : o.isAlphanumeric(p) ? [o.makeAlphanumeric(p)] : [o.makeBytes(o.toUtf8ByteArray(p))];
            }
            static makeEci(p) {
                let q = [];
                if (p < 0)
                    throw new RangeError('ECI assignment value out of range');
                if (p < 128)
                    b(p, 8, q);
                else if (p < 16384)
                    b(2, 2, q), b(p, 14, q);
                else {
                    if (!(p < 1000000))
                        throw new RangeError('ECI assignment value out of range');
                    b(6, 3, q), b(p, 21, q);
                }
                return new o(o.Mode.ECI, 0, q);
            }
            static isNumeric(p) {
                return o.NUMERIC_REGEX.test(p);
            }
            static isAlphanumeric(p) {
                return o.ALPHANUMERIC_REGEX.test(p);
            }
            getData() {
                return this.bitData.slice();
            }
            static getTotalBits(p, q) {
                let r = 0;
                for (const s of p) {
                    const t = s.mode.numCharCountBits(q);
                    if (s.numChars >= 1 << t)
                        return 1 / 0;
                    r += 4 + t + s.bitData.length;
                }
                return r;
            }
            static toUtf8ByteArray(p) {
                p = encodeURI(p);
                let q = [];
                for (let r = 0; r < p.length; r++)
                    '%' != p.charAt(r) ? q.push(p.charCodeAt(r)) : (q.push(parseInt(p.substr(r + 1, 2), 16)), r += 2);
                return q;
            }
            constructor(p, q, r) {
                if (this.mode = p, this.numChars = q, this.bitData = r, q < 0)
                    throw new RangeError('Invalid argument');
                this.bitData = r.slice();
            }
        };
        let p = o;
        p.NUMERIC_REGEX = /^[0-9]*$/, p.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, p.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:', _o.QrSegment = p;
    })(d || (d = {})), (_o => {
        let m;
        (_o => {
            const n = class {
                constructor(_o, p) {
                    this.ordinal = _o, this.formatBits = p;
                }
            };
            let o = n;
            o.LOW = new n(0, 1), o.MEDIUM = new n(1, 0), o.QUARTILE = new n(2, 3), o.HIGH = new n(3, 2), _o.Ecc = o;
        })(m = _o.QrCode || (_o.QrCode = {}));
    })(d || (d = {})), (_o => {
        let m;
        (_o => {
            const n = class {
                numCharCountBits(_o) {
                    return this.numBitsCharCount[Math.floor((_o + 7) / 17)];
                }
                constructor(o, p) {
                    this.modeBits = o, this.numBitsCharCount = p;
                }
            };
            let o = n;
            o.NUMERIC = new n(1, [
                10,
                12,
                14
            ]), o.ALPHANUMERIC = new n(2, [
                9,
                11,
                13
            ]), o.BYTE = new n(4, [
                8,
                16,
                16
            ]), o.KANJI = new n(8, [
                8,
                10,
                12
            ]), o.ECI = new n(7, [
                0,
                0,
                0
            ]), _u.Mode = o;
        })(m = _u.QrSegment || (_u.QrSegment = {}));
    })(d || (d = {}));
    var m = d,
        n = {
            L: m.QrCode.Ecc.LOW,
            M: m.QrCode.Ecc.MEDIUM,
            Q: m.QrCode.Ecc.QUARTILE,
            H: m.QrCode.Ecc.HIGH
        },
        o = 128,
        p = 'L',
        q = '#FFFFFF',
        r = '#000000',
        s = !1;

    function t(_u, v = 0) {
        const w = [];
        return _u.forEach(function(x, y) {
            let z = null;
            x.forEach(function(A, B) {
                if (!A && null !== z)
                    return w.push(`M${ z + v } ${ y + v }h${ B - z }v1H${ z + v }z`), void(z = null);
                if (B !== x.length - 1)
                    A && null === z && (z = B);
                else {
                    if (!A)
                        return;
                    null === z ? w.push(`M${ B + v },${ y + v } h1v1H${ B + v }z`) : w.push(`M${ z + v },${ y + v } h${ B + 1 - z }v1H${ z + v }z`);
                }
            });
        }), w.join('');
    }

    function t(u, v) {
        return u.slice().map((u, a) => a < v.y || a >= v.y + v.h ? u : u.map((u, a) => (a < v.x || a >= v.x + v.w) && u));
    }

    function t(u, v, w, x) {
        if (null == x)
            return null;
        const y = w ? 4 : 0,
            z = u.length + 2 * y,
            A = Math.floor(0.1 * v),
            B = z / v,
            C = (x.width || A) * B,
            D = (x.height || A) * B,
            E = null == x.x ? u.length / 2 - C / 2 : x.x * B,
            F = null == x.y ? u.length / 2 - D / 2 : x.y * B;
        let G = null;
        if (x.excavate) {
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
    var t = function() {
        try {
            new Path2D().addPath(new Path2D());
        } catch (_Q) {
            return !1;
        }
        return !0;
    }();

    function _u(v) {
        const w = v,
            {
                value: x,
                size: y = z,
                level: A = B,
                bgColor: C = D,
                fgColor: E = F,
                includeMargin: G = H,
                style: I,
                imageSettings: J
            } = w,
            K = l(w, [
                'value',
                'size',
                'level',
                'bgColor',
                'fgColor',
                'includeMargin',
                'style',
                'imageSettings'
            ]),
            L = null == J ? void 0 : J.src,
            M = (0, e.useRef)(null),
            N = (0, e.useRef)(null),
            [O, P] = (0, e.useState)(!1);
        (0, e.useEffect)(() => {
            if (null != M.current) {
                const _Q = M.current,
                    R = _Q.getContext('2d');
                if (!R)
                    return;
                let S = m.QrCode.encodeText(x, n[A]).getModules();
                const T = G ? 4 : 0,
                    U = S.length + 2 * T,
                    V = N(S, y, G, J),
                    W = N.current,
                    X = null != V && null !== W && W.complete && 0 !== W.naturalHeight && 0 !== W.naturalWidth;
                X && null != V.excavation && (S = y(S, V.excavation));
                const Y = window.devicePixelRatio || 1;
                _Q.height = _Q.width = y * Y;
                const Z = y / U * Y;
                R.scale(Z, Z), R.fillStyle = C, R.fillRect(0, 0, U, U), R.fillStyle = E, t ? R.fill(new Path2D(R(S, T))) : S.forEach(function($, ab) {
                    $.forEach(function(bb, cb) {
                        bb && R.fillRect(cb + T, ab + T, 1, 1);
                    });
                }), X && R.drawImage(W, V.x + T, V.y + T, V.w, V.h);
            }
        }), (0, e.useEffect)(() => {
            P(!1);
        }, [L]);
        const Q = k({
            height: y,
            width: y
        }, I);
        let R = null;
        return null != L && (R = _b(e).createElement('img', {
            src: L,
            key: L,
            style: {
                display: 'none'
            },
            onLoad: () => {
                P(!0);
            },
            ref: N
        })), _b(e).createElement(_b(e).Fragment, null, _b(e).createElement('canvas', k({
            style: Q,
            height: y,
            width: y,
            ref: M
        }, K)), R);
    }
}), a.register('jem+E', function(_b, c) {
    _j(_b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('HNdyU'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'ReloadOutlined';
    var _i = e.forwardRef(h);
}), a.register('HNdyU', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('a2lZD', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('7hbGU');
    var _g = (0, d.default)('QRCode', b => (b => {
        const {
            componentCls: _h
        } = b;
        return {
            [_h]: Object.assign(Object.assign({}, (0, f.resetComponent)(b)), {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: b.paddingSM,
                backgroundColor: b.colorWhite,
                borderRadius: b.borderRadiusLG,
                border: `${ b.lineWidth }px ${ b.lineType } ${ b.colorSplit }`,
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                [`& > ${ _h }-mask`]: {
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
                    color: b.colorText,
                    lineHeight: b.lineHeight,
                    background: b.QRCodeMaskBackgroundColor,
                    textAlign: 'center',
                    [`& > ${ _h }-expired`]: {
                        color: b.QRCodeExpiredTextColor
                    }
                },
                '&-icon': {
                    marginBlockEnd: b.marginXS,
                    fontSize: b.controlHeight
                }
            }),
            [`${ _h }-borderless`]: {
                borderColor: 'transparent'
            }
        };
    })((0, e.merge)(b, {
        QRCodeExpiredTextColor: 'rgba(0, 0, 0, 0.88)',
        QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
    })));
});