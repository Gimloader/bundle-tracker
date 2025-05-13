var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {};
a.parcelRequire388b.register('lJnts', function(b, c) {
    b.exports,
        function(d) {
            function e(f, g) {
                return g.forEach(function(h) {
                    h && 'string' != typeof h && !Array.isArray(h) && Object.keys(h).forEach(function(i) {
                        if ('default' !== i && !(i in f)) {
                            var j = Object.getOwnPropertyDescriptor(h, i);
                            Object.defineProperty(f, i, j.get ? j : {
                                enumerable: !0,
                                get: function() {
                                    return h[i];
                                }
                            });
                        }
                    });
                }), Object.freeze(f);
            }
            ArrayBuffer.isView || (ArrayBuffer.isView = function(f) {
                return null !== f && 'object' == typeof f && f.buffer instanceof ArrayBuffer;
            }), 'undefined' == typeof globalThis && 'undefined' != typeof window && (window.globalThis = window);
            var f = function(g, h) {
                return f = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(i, j) {
                    i.__proto__ = j;
                } || function(i, j) {
                    for (var k in j)
                        Object.prototype.hasOwnProperty.call(j, k) && (i[k] = j[k]);
                }, f(g, h);
            };

            function g(h, i) {
                if ('function' != typeof i && null !== i)
                    throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null');

                function j() {
                    this.constructor = h;
                }
                f(h, i), h.prototype = null === i ? Object.create(i) : (j.prototype = i.prototype, new j());
            }
            var h, i = function() {
                return i = Object.assign || function(j) {
                    for (var k, l = 1, m = arguments.length; l < m; l++)
                        for (var n in k = arguments[l])
                            Object.prototype.hasOwnProperty.call(k, n) && (j[n] = k[n]);
                    return j;
                }, i.apply(this, arguments);
            };

            function j(k, l, m, n) {
                function o(p) {
                    return p instanceof m ? p : new m(function(q) {
                        q(p);
                    });
                }
                return new(m || (m = Promise))(function(p, q) {
                    function r(s) {
                        try {
                            _t(n.next(s));
                        } catch (s) {
                            q(s);
                        }
                    }

                    function s(t) {
                        try {
                            _t(n.throw(t));
                        } catch (t) {
                            q(t);
                        }
                    }

                    function _t(u) {
                        u.done ? p(u.value) : o(u.value).then(r, s);
                    }
                    _t((n = n.apply(k, l || [])).next());
                });
            }

            function k(l, m) {
                var n, o, p, q, r = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0])
                            throw g[1];
                        return g[1];
                    },
                    trys: [],
                    ops: []
                };
                return q = {
                    next: j(0),
                    throw: j(1),
                    return: j(2)
                }, 'function' == typeof Symbol && (q[Symbol.iterator] = function() {
                    return this;
                }), q;

                function s(t) {
                    return function(u) {
                        return k([
                            t,
                            u
                        ]);
                    };
                }

                function t(u) {
                    if (e)
                        throw new TypeError('Generator is already executing.');
                    for (; q && (q = 0, u[0] && (r = 0)), r;)
                        try {
                            if (e = 1, o && (g = 2 & u[0] ? o.return : u[0] ? o.throw || ((g = o.return) && g.call(o), 0) : o.next) && !(g = g.call(o, u[1])).done)
                                return g;
                            switch (o = 0, g && (u = [
                                    2 & u[0],
                                    g.value
                                ]), u[0]) {
                                case 0:
                                case 1:
                                    g = u;
                                    break;
                                case 4:
                                    return r.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++, o = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = r.ops.pop(), r.trys.pop();
                                    continue;
                                default:
                                    if (!((g = (g = r.trys).length > 0 && g[g.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                        r = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!g || u[1] > g[0] && u[1] < g[3])) {
                                        r.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && r.label < g[1]) {
                                        r.label = g[1], g = u;
                                        break;
                                    }
                                    if (g && r.label < g[2]) {
                                        r.label = g[2], r.ops.push(u);
                                        break;
                                    }
                                    g[2] && r.ops.pop(), r.trys.pop();
                                    continue;
                            }
                            u = m.call(l, r);
                        } catch (l) {
                            u = [
                                6,
                                l
                            ], o = 0;
                        } finally {
                            e = g = 0;
                        }
                    if (5 & u[0])
                        throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    };
                }
            }

            function q(r, s, t, u) {
                if ('a' === t && !u)
                    throw new TypeError('Private accessor was defined without a getter');
                if ('function' == typeof s ? r !== s || !u : !s.has(r))
                    throw new TypeError('Cannot read private member from an object whose class did not declare it');
                return 'm' === t ? u : 'a' === t ? u.call(r) : u ? u.value : s.get(r);
            }

            function r(s, t, u, v, w) {
                if ('m' === v)
                    throw new TypeError('Private method is not writable');
                if ('a' === v && !w)
                    throw new TypeError('Private accessor was defined without a setter');
                if ('function' == typeof t ? s !== t || !w : !t.has(s))
                    throw new TypeError('Cannot write private member to an object whose class did not declare it');
                return 'a' === v ? w.call(s, u) : w ? w.value = u : t.set(s, u), u;
            }! function(s) {
                s[s.CONSENTED = 4000] = 'CONSENTED', s[s.DEVMODE_RESTART = 4010] = 'DEVMODE_RESTART';
            }(q || (q = {}));
            var s = function(t) {
                function u(v, w) {
                    var x = t.call(this, w) || this;
                    return x.name = 'ServerError', x.code = v, x;
                }
                return g(u, t), u;
            }(Error);

            function t(u, v) {
                if (this._offset = v, u instanceof ArrayBuffer)
                    this._buffer = u, this._view = new DataView(this._buffer);
                else {
                    if (!ArrayBuffer.isView(u))
                        throw new Error('Invalid argument');
                    this._buffer = u.buffer, this._view = new DataView(this._buffer, u.byteOffset, u.byteLength);
                }
            }

            function u(v, w, x) {
                for (var y = '', z = 0, A = w, B = w + x; A < B; A++) {
                    var C = v.getUint8(A);
                    if (0 != (128 & j))
                        if (192 != (224 & j))
                            if (224 != (240 & j)) {
                                if (240 != (248 & j))
                                    throw new Error('Invalid byte ' + j.toString(16));
                                (g = (7 & j) << 18 | (63 & v.getUint8(++A)) << 12 | (63 & v.getUint8(++A)) << 6 | (63 & v.getUint8(++A)) << 0) >= 65536 ? (g -= 65536, y += String.fromCharCode(55296 + (g >>> 10), 56320 + (1023 & g))) : y += String.fromCharCode(g);
                            } else
                                y += String.fromCharCode((15 & j) << 12 | (63 & v.getUint8(++A)) << 6 | (63 & v.getUint8(++A)) << 0);
                    else
                        y += String.fromCharCode((31 & j) << 6 | 63 & v.getUint8(++A));
                    else
                        y += String.fromCharCode(j);
                }
                return y;
            }

            function A(B, C) {
                void 0 === C && (C = 0);
                var D = new t(B, C),
                    E = e._parse();
                if (e._offset !== B.byteLength)
                    throw new Error(B.byteLength - e._offset + ' trailing bytes');
                return E;
            }
            t.prototype._array = function(D) {
                for (var E = new Array(D), F = 0; F < D; F++)
                    E[F] = this._parse();
                return E;
            }, t.prototype._map = function(D) {
                for (var E = {}, F = 0; F < D; F++)
                    E[this._parse()] = this._parse();
                return E;
            }, t.prototype._str = function(D) {
                var E = u(this._view, this._offset, D);
                return this._offset += D, E;
            }, t.prototype._bin = function(D) {
                var E = this._buffer.slice(this._offset, this._offset + D);
                return this._offset += D, E;
            }, t.prototype._parse = function() {
                var D, E = this._view.getUint8(this._offset++),
                    F = 0,
                    G = 0,
                    H = 0,
                    I = 0;
                if (E < 192)
                    return E < 128 ? E : E < 144 ? this._map(15 & E) : E < 160 ? this._array(15 & E) : this._str(31 & E);
                if (E > 223)
                    return -1 * (255 - E + 1);
                switch (E) {
                    case 192:
                        return null;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 196:
                        return F = this._view.getUint8(this._offset), this._offset += 1, this._bin(F);
                    case 197:
                        return F = this._view.getUint16(this._offset), this._offset += 2, this._bin(F);
                    case 198:
                        return F = this._view.getUint32(this._offset), this._offset += 4, this._bin(F);
                    case 199:
                        if (F = this._view.getUint8(this._offset), G = this._view.getInt8(this._offset + 1), this._offset += 2, -1 === G) {
                            var J = this._view.getUint32(this._offset);
                            return H = this._view.getInt32(this._offset + 4), I = this._view.getUint32(this._offset + 8), this._offset += 12, new Date(1000 * (4294967296 * H + I) + J / 1000000);
                        }
                        return [
                            G,
                            this._bin(F)
                        ];
                    case 200:
                        return F = this._view.getUint16(this._offset), G = this._view.getInt8(this._offset + 2), this._offset += 3, [
                            G,
                            this._bin(F)
                        ];
                    case 201:
                        return F = this._view.getUint32(this._offset), G = this._view.getInt8(this._offset + 4), this._offset += 5, [
                            G,
                            this._bin(F)
                        ];
                    case 202:
                        return D = this._view.getFloat32(this._offset), this._offset += 4, D;
                    case 203:
                        return D = this._view.getFloat64(this._offset), this._offset += 8, D;
                    case 204:
                        return D = this._view.getUint8(this._offset), this._offset += 1, D;
                    case 205:
                        return D = this._view.getUint16(this._offset), this._offset += 2, D;
                    case 206:
                        return D = this._view.getUint32(this._offset), this._offset += 4, D;
                    case 207:
                        return H = this._view.getUint32(this._offset) * Math.pow(2, 32), I = this._view.getUint32(this._offset + 4), this._offset += 8, H + I;
                    case 208:
                        return D = this._view.getInt8(this._offset), this._offset += 1, D;
                    case 209:
                        return D = this._view.getInt16(this._offset), this._offset += 2, D;
                    case 210:
                        return D = this._view.getInt32(this._offset), this._offset += 4, D;
                    case 211:
                        return H = this._view.getInt32(this._offset) * Math.pow(2, 32), I = this._view.getUint32(this._offset + 4), this._offset += 8, H + I;
                    case 212:
                        return G = this._view.getInt8(this._offset), this._offset += 1, 0 === G ? void(this._offset += 1) : [
                            G,
                            this._bin(1)
                        ];
                    case 213:
                        return G = this._view.getInt8(this._offset), this._offset += 1, [
                            G,
                            this._bin(2)
                        ];
                    case 214:
                        return G = this._view.getInt8(this._offset), this._offset += 1, -1 === G ? (D = this._view.getUint32(this._offset), this._offset += 4, new Date(1000 * D)) : [
                            G,
                            this._bin(4)
                        ];
                    case 215:
                        return G = this._view.getInt8(this._offset), this._offset += 1, 0 === G ? (H = this._view.getInt32(this._offset) * Math.pow(2, 32), I = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(H + I)) : -1 === G ? (H = this._view.getUint32(this._offset), I = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1000 * (4294967296 * (3 & H) + I) + (H >>> 2) / 1000000)) : [
                            G,
                            this._bin(8)
                        ];
                    case 216:
                        return G = this._view.getInt8(this._offset), this._offset += 1, [
                            G,
                            this._bin(16)
                        ];
                    case 217:
                        return F = this._view.getUint8(this._offset), this._offset += 1, this._str(F);
                    case 218:
                        return F = this._view.getUint16(this._offset), this._offset += 2, this._str(F);
                    case 219:
                        return F = this._view.getUint32(this._offset), this._offset += 4, this._str(F);
                    case 220:
                        return F = this._view.getUint16(this._offset), this._offset += 2, this._array(F);
                    case 221:
                        return F = this._view.getUint32(this._offset), this._offset += 4, this._array(F);
                    case 222:
                        return F = this._view.getUint16(this._offset), this._offset += 2, this._map(F);
                    case 223:
                        return F = this._view.getUint32(this._offset), this._offset += 4, this._map(F);
                }
                throw new Error('Could not parse');
            };
            var D = 4294967295,
                E = 17179869183;

            function F(G, H, I) {
                for (var J = 0, K = 0, L = I.length; g < L; g++)
                    (J = I.charCodeAt(g)) < 128 ? G.setUint8(H++, J) : J < 2048 ? (G.setUint8(H++, 192 | J >> 6), G.setUint8(H++, 128 | 63 & J)) : J < 55296 || J >= 57344 ? (G.setUint8(H++, 224 | J >> 12), G.setUint8(H++, 128 | J >> 6 & 63), G.setUint8(H++, 128 | 63 & J)) : (g++, J = 65536 + ((1023 & J) << 10 | 1023 & I.charCodeAt(g)), G.setUint8(H++, 240 | J >> 18), G.setUint8(H++, 128 | J >> 12 & 63), G.setUint8(H++, 128 | J >> 6 & 63), G.setUint8(H++, 128 | 63 & J));
            }

            function J(K) {
                for (var L = 0, M = 0, N = 0, O = K.length; N < g; N++)
                    (L = K.charCodeAt(N)) < 128 ? e += 1 : L < 2048 ? e += 2 : L < 55296 || L >= 57344 ? e += 3 : (N++, e += 4);
                return e;
            }

            function O(P, Q, R) {
                var S = typeof R,
                    T = 0,
                    U = 0,
                    V = 0,
                    W = 0,
                    X = 0,
                    Y = 0;
                if ('string' === S) {
                    if ((k = J(R)) < 32)
                        P.push(160 | k), q = 1;
                    else if (k < 256)
                        P.push(217, k), q = 2;
                    else if (k < 65536)
                        P.push(218, k >> 8, k), q = 3;
                    else {
                        if (!(k < 4294967296))
                            throw new Error('String too long');
                        P.push(219, k >> 24, k >> 16, k >> 8, k), q = 5;
                    }
                    return Q.push({
                        _str: R,
                        _length: k,
                        _offset: P.length
                    }), q + k;
                }
                if ('number' === S)
                    return Math.floor(R) === R && isFinite(R) ? R >= 0 ? R < 128 ? (P.push(R), 1) : R < 256 ? (P.push(204, R), 2) : R < 65536 ? (P.push(205, R >> 8, R), 3) : R < 4294967296 ? (P.push(206, R >> 24, R >> 16, R >> 8, R), 5) : (V = R / Math.pow(2, 32) >> 0, j = R >>> 0, P.push(207, V >> 24, V >> 16, V >> 8, V, j >> 24, j >> 16, j >> 8, j), 9) : R >= -32 ? (P.push(R), 1) : R >= -128 ? (P.push(208, R), 2) : R >= -32768 ? (P.push(209, R >> 8, R), 3) : R >= -2147483648 ? (P.push(210, R >> 24, R >> 16, R >> 8, R), 5) : (V = Math.floor(R / Math.pow(2, 32)), j = R >>> 0, P.push(211, V >> 24, V >> 16, V >> 8, V, j >> 24, j >> 16, j >> 8, j), 9) : (P.push(203), Q.push({
                        _float: R,
                        _length: 8,
                        _offset: P.length
                    }), 9);
                if ('object' === S) {
                    if (null === R)
                        return P.push(192), 1;
                    if (Array.isArray(R)) {
                        if ((k = R.length) < 16)
                            P.push(144 | k), q = 1;
                        else if (k < 65536)
                            P.push(220, k >> 8, k), q = 3;
                        else {
                            if (!(k < 4294967296))
                                throw new Error('Array too large');
                            P.push(221, k >> 24, k >> 16, k >> 8, k), q = 5;
                        }
                        for (g = 0; g < k; g++)
                            q += O(P, Q, R[g]);
                        return q;
                    }
                    if (R instanceof Date) {
                        var Z = R.getTime(),
                            $ = Math.floor(r / 1000),
                            ab = 1000000 * (r - 1000 * $);
                        return $ >= 0 && t >= 0 && $ <= E ? 0 === t && $ <= D ? (P.push(214, 255, $ >> 24, $ >> 16, $ >> 8, $), 6) : (V = $ / 4294967296, j = 4294967295 & $, P.push(215, 255, t >> 22, t >> 14, t >> 6, V, j >> 24, j >> 16, j >> 8, j), 10) : (V = Math.floor($ / 4294967296), j = $ >>> 0, P.push(199, 12, 255, t >> 24, t >> 16, t >> 8, t, V >> 24, V >> 16, V >> 8, V, j >> 24, j >> 16, j >> 8, j), 15);
                    }
                    if (R instanceof ArrayBuffer) {
                        if ((k = R.byteLength) < 256)
                            P.push(196, k), q = 2;
                        else if (k < 65536)
                            P.push(197, k >> 8, k), q = 3;
                        else {
                            if (!(k < 4294967296))
                                throw new Error('Buffer too large');
                            P.push(198, k >> 24, k >> 16, k >> 8, k), q = 5;
                        }
                        return Q.push({
                            _bin: R,
                            _length: k,
                            _offset: P.length
                        }), q + k;
                    }
                    if ('function' == typeof R.toJSON)
                        return O(P, Q, R.toJSON());
                    var bb = [],
                        cb = '',
                        db = Object.keys(R);
                    for (g = 0, U = F.length; g < U; g++)
                        void 0 !== R[A = F[g]] && 'function' != typeof R[A] && u.push(A);
                    if ((k = u.length) < 16)
                        P.push(128 | k), q = 1;
                    else if (k < 65536)
                        P.push(222, k >> 8, k), q = 3;
                    else {
                        if (!(k < 4294967296))
                            throw new Error('Object too large');
                        P.push(223, k >> 24, k >> 16, k >> 8, k), q = 5;
                    }
                    for (g = 0; g < k; g++)
                        q += O(P, Q, A = u[g]), q += O(P, Q, R[A]);
                    return q;
                }
                if ('boolean' === S)
                    return P.push(R ? 195 : 194), 1;
                if ('undefined' === S)
                    return P.push(192), 1;
                if ('function' == typeof R.toJSON)
                    return O(P, Q, R.toJSON());
                throw new Error('Could not encode');
            }

            function bb(cb) {
                var db = [],
                    eb = [],
                    fb = O(db, e, cb),
                    gb = new ArrayBuffer(fb),
                    hb = new DataView(g),
                    ib = 0,
                    jb = 0,
                    kb = -1;
                e.length > 0 && (k = e[0]._offset);
                for (var lb, mb = 0, nb = 0, ob = 0, pb = db.length; t < u; t++)
                    if (hb.setUint8(j + t, db[t]), t + 1 === k) {
                        if (r = (q = e[ib])._length, nb = j + k, q._bin)
                            for (var qb = new Uint8Array(q._bin), rb = 0; rb < r; rb++)
                                hb.setUint8(nb + rb, A[rb]);
                        else
                            q._str ? F(hb, nb, q._str) : void 0 !== q._float && hb.setFloat64(nb, q._float);
                        j += r, e[++ib] && (k = e[ib]._offset);
                    }
                return g;
            }
            var rb, sb, tb = function() {
                    throw new Error('ws does not work in the browser. Browser clients must use the native WebSocket object');
                },
                ub = globalThis.WebSocket || tb,
                vb = function() {
                    function wb(xb) {
                        this.events = xb;
                    }
                    return wb.prototype.send = function(xb) {
                        xb instanceof ArrayBuffer ? this.ws.send(xb) : Array.isArray(xb) && this.ws.send(new Uint8Array(xb).buffer);
                    }, wb.prototype.connect = function(xb) {
                        this.ws = new ub(xb, this.protocols), this.ws.binaryType = 'arraybuffer', this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror;
                    }, wb.prototype.close = function(xb, yb) {
                        this.ws.close(xb, yb);
                    }, Object.defineProperty(wb.prototype, 'isOpen', {
                        get: function() {
                            return this.ws.readyState === ub.OPEN;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), wb;
                }(),
                wb = function() {
                    function xb() {
                        this.events = {}, this.transport = new vb(this.events);
                    }
                    return xb.prototype.send = function(yb) {
                        this.transport.send(yb);
                    }, xb.prototype.connect = function(yb) {
                        this.transport.connect(yb);
                    }, xb.prototype.close = function(yb, zb) {
                        this.transport.close(yb, zb);
                    }, Object.defineProperty(xb.prototype, 'isOpen', {
                        get: function() {
                            return this.transport.isOpen;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), xb;
                }();

            function xb(yb, zb) {
                for (var Ab = yb[zb++], Bb = '', Cb = 0, Db = zb, Eb = zb + e; Db < Eb; Db++) {
                    var Fb = yb[Db];
                    if (0 != (128 & j))
                        if (192 != (224 & j))
                            if (224 != (240 & j)) {
                                if (240 != (248 & j))
                                    throw new Error('Invalid byte ' + j.toString(16));
                                (g = (7 & j) << 18 | (63 & yb[++Db]) << 12 | (63 & yb[++Db]) << 6 | (63 & yb[++Db]) << 0) >= 65536 ? (g -= 65536, Bb += String.fromCharCode(55296 + (g >>> 10), 56320 + (1023 & g))) : Bb += String.fromCharCode(g);
                            } else
                                Bb += String.fromCharCode((15 & j) << 12 | (63 & yb[++Db]) << 6 | (63 & yb[++Db]) << 0);
                    else
                        Bb += String.fromCharCode((31 & j) << 6 | 63 & yb[++Db]);
                    else
                        Bb += String.fromCharCode(j);
                }
                return Bb;
            }

            function Eb(Fb) {
                void 0 === Fb && (Fb = '');
                for (var Gb = 0, Hb = 0, Ib = 0, Jb = Fb.length; Ib < g; Ib++)
                    (Gb = Fb.charCodeAt(Ib)) < 128 ? e += 1 : Gb < 2048 ? e += 2 : Gb < 55296 || Gb >= 57344 ? e += 3 : (Ib++, e += 4);
                return e + 1;
            }
            Gb.Protocol = void 0, (sb = Gb.Protocol || (Gb.Protocol = {}))[sb.HANDSHAKE = 9] = 'HANDSHAKE', sb[sb.JOIN_ROOM = 10] = 'JOIN_ROOM', sb[sb.ERROR = 11] = 'ERROR', sb[sb.LEAVE_ROOM = 12] = 'LEAVE_ROOM', sb[sb.ROOM_DATA = 13] = 'ROOM_DATA', sb[sb.ROOM_STATE = 14] = 'ROOM_STATE', sb[sb.ROOM_STATE_PATCH = 15] = 'ROOM_STATE_PATCH', sb[sb.ROOM_DATA_SCHEMA = 16] = 'ROOM_DATA_SCHEMA', sb[sb.ROOM_DATA_BYTES = 17] = 'ROOM_DATA_BYTES', Gb.ErrorCode = void 0, (rb = Gb.ErrorCode || (Gb.ErrorCode = {}))[rb.MATCHMAKE_NO_HANDLER = 4210] = 'MATCHMAKE_NO_HANDLER', rb[rb.MATCHMAKE_INVALID_CRITERIA = 4211] = 'MATCHMAKE_INVALID_CRITERIA', rb[rb.MATCHMAKE_INVALID_ROOM_ID = 4212] = 'MATCHMAKE_INVALID_ROOM_ID', rb[rb.MATCHMAKE_UNHANDLED = 4213] = 'MATCHMAKE_UNHANDLED', rb[rb.MATCHMAKE_EXPIRED = 4214] = 'MATCHMAKE_EXPIRED', rb[rb.AUTH_FAILED = 4215] = 'AUTH_FAILED', rb[rb.APPLICATION_ERROR = 4216] = 'APPLICATION_ERROR';
            var Jb = {};

            function Kb(Lb, Mb) {
                Jb[Lb] = Mb;
            }

            function Lb(Mb) {
                var Nb = Jb[Mb];
                if (!Nb)
                    throw new Error('missing serializer: ' + Mb);
                return Nb;
            }
            var Nb = function() {
                    return {
                        emit: function(Ob) {
                            for (var Pb = [], Qb = 1; Qb < arguments.length; Qb++)
                                Pb[Qb - 1] = arguments[Qb];
                            for (var Rb = this.events[Ob] || [], Sb = 0, Tb = Rb.length; Sb < Tb; Sb++)
                                Rb[Sb].apply(Rb, Pb);
                        },
                        events: {},
                        on: function(Ob, Pb) {
                            var Qb, Rb = this;
                            return (null === (Qb = this.events[Ob]) || void 0 === Qb ? void 0 : Qb.push(Pb)) || (this.events[Ob] = [Pb]),
                                function() {
                                    var Sb;
                                    Rb.events[Ob] = null === (Sb = Rb.events[Ob]) || void 0 === Sb ? void 0 : Sb.filter(function(Tb) {
                                        return Pb !== Tb;
                                    });
                                };
                        }
                    };
                },
                Ob = function() {
                    function Pb() {
                        this.handlers = [];
                    }
                    return Pb.prototype.register = function(Qb, Rb) {
                        return this.handlers.push(Qb), this;
                    }, Pb.prototype.invoke = function() {
                        for (var Qb = this, Rb = [], Sb = 0; Sb < arguments.length; Sb++)
                            Rb[Sb] = arguments[Sb];
                        this.handlers.forEach(function(Tb) {
                            return Tb.apply(Qb, Rb);
                        });
                    }, Pb.prototype.invokeAsync = function() {
                        for (var Qb = this, Rb = [], Sb = 0; Sb < arguments.length; Sb++)
                            Rb[Sb] = arguments[Sb];
                        return Promise.all(this.handlers.map(function(Tb) {
                            return Tb.apply(Qb, Rb);
                        }));
                    }, Pb.prototype.remove = function(Qb) {
                        var Rb = this.handlers.indexOf(Qb);
                        this.handlers[Rb] = this.handlers[this.handlers.length - 1], this.handlers.pop();
                    }, Pb.prototype.clear = function() {
                        this.handlers = [];
                    }, Pb;
                }();

            function Pb() {
                var Qb = new Ob();

                function Rb(Sb) {
                    return Qb.register(Sb, null === this);
                }
                return Rb.once = function(Sb) {
                    var Tb = function() {
                        for (var Ub = [], Vb = 0; Vb < arguments.length; Vb++)
                            Ub[Vb] = arguments[Vb];
                        Sb.apply(this, Ub), Qb.remove(Tb);
                    };
                    Qb.register(Tb);
                }, Rb.remove = function(Sb) {
                    return Qb.remove(Sb);
                }, Rb.invoke = function() {
                    for (var Sb = [], Tb = 0; Tb < arguments.length; Tb++)
                        Sb[Tb] = arguments[Tb];
                    return Qb.invoke.apply(Qb, Sb);
                }, Rb.invokeAsync = function() {
                    for (var Sb = [], Tb = 0; Tb < arguments.length; Tb++)
                        Sb[Tb] = arguments[Tb];
                    return Qb.invokeAsync.apply(Qb, Sb);
                }, Rb.clear = function() {
                    return Qb.clear();
                }, Rb;
            }

            function Rb(Sb) {
                var Tb = {
                    exports: {}
                };
                return Sb(Tb, Tb.exports), Tb.exports;
            }
            'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== Qb || 'undefined' != typeof self && self;
            var Tb = Rb(function(Ub, Vb) {
                    ! function(Wb, Xb) {
                        Xb(Vb);
                    }(0, function(Wb) {
                        var Xb = function(Yb, Zb) {
                            return Xb = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function($b, ac) {
                                $b.__proto__ = ac;
                            } || function($b, ac) {
                                for (var bc in ac)
                                    Object.prototype.hasOwnProperty.call(ac, bc) && ($b[bc] = ac[bc]);
                            }, Xb(Yb, Zb);
                        };

                        function Yb(Zb, $b) {
                            if ('function' != typeof $b && null !== $b)
                                throw new TypeError('Class extends value ' + String($b) + ' is not a constructor or null');

                            function ac() {
                                this.constructor = Zb;
                            }
                            Xb(Zb, $b), Zb.prototype = null === $b ? Object.create($b) : (ac.prototype = $b.prototype, new ac());
                        }

                        function Zb($b, ac, bc, cc) {
                            var dc, ec = arguments.length,
                                fc = ec < 3 ? ac : null === cc ? cc = Object.getOwnPropertyDescriptor(ac, bc) : cc;
                            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                                fc = Reflect.decorate($b, ac, bc, cc);
                            else
                                for (var gc = $b.length - 1; gc >= 0; gc--)
                                    (dc = $b[gc]) && (fc = (ec < 3 ? dc(fc) : ec > 3 ? dc(ac, bc, fc) : dc(ac, bc)) || fc);
                            return ec > 3 && fc && Object.defineProperty(ac, bc, fc), fc;
                        }

                        function dc(ec, fc, gc) {
                            if (gc || 2 === arguments.length)
                                for (var hc, ic = 0, jc = fc.length; dc < jc; dc++)
                                    !Zb && dc in fc || (Zb || (Zb = Array.prototype.slice.call(fc, 0, dc)), Zb[dc] = fc[dc]);
                            return ec.concat(Zb || Array.prototype.slice.call(fc));
                        }
                        var hc, ic = 255,
                            jc = 213;
                        Wb.OPERATION = void 0, (hc = Wb.OPERATION || (Wb.OPERATION = {}))[hc.ADD = 128] = 'ADD', hc[hc.REPLACE = 0] = 'REPLACE', hc[hc.DELETE = 64] = 'DELETE', hc[hc.DELETE_AND_ADD = 192] = 'DELETE_AND_ADD', hc[hc.TOUCH = 1] = 'TOUCH', hc[hc.CLEAR = 10] = 'CLEAR';
                        var kc = function() {
                            function lc(mc, nc, oc) {
                                this.changed = !1, this.changes = new Map(), this.allChanges = new Set(), this.caches = {}, this.currentCustomOperation = 0, this.ref = mc, this.setParent(nc, oc);
                            }
                            return lc.prototype.setParent = function(mc, nc, oc) {
                                var pc = this;
                                if (this.indexes || (this.indexes = this.ref instanceof _qe ? this.ref._definition.indexes : {}), this.parent = mc, this.parentIndex = oc, nc)
                                    if (this.root = nc, this.ref instanceof _qe) {
                                        var qc = this.ref._definition;
                                        for (var rc in qc.schema) {
                                            var sc = this.ref[rc];
                                            if (sc && sc.$changes) {
                                                var tc = qc.indexes[rc];
                                                sc.$changes.setParent(this.ref, nc, tc);
                                            }
                                        }
                                    } else
                                        'object' == typeof this.ref && this.ref.forEach(function(uc, vc) {
                                            if (uc instanceof _qe) {
                                                var wc = uc.$changes,
                                                    xc = pc.ref.$changes.indexes[vc];
                                                wc.setParent(pc.ref, pc.root, xc);
                                            }
                                        });
                            }, lc.prototype.operation = function(mc) {
                                this.changes.set(--this.currentCustomOperation, mc);
                            }, lc.prototype.change = function(mc, nc) {
                                void 0 === nc && (nc = Wb.OPERATION.ADD);
                                var oc = 'number' == typeof mc ? mc : this.indexes[mc];
                                this.assertValidIndex(oc, mc);
                                var pc = this.changes.get(oc);
                                pc && pc.op !== Wb.OPERATION.DELETE && pc.op !== Wb.OPERATION.TOUCH || this.changes.set(oc, {
                                    op: pc && pc.op === Wb.OPERATION.DELETE ? Wb.OPERATION.DELETE_AND_ADD : nc,
                                    index: oc
                                }), this.allChanges.add(oc), this.changed = !0, this.touchParents();
                            }, lc.prototype.touch = function(mc) {
                                var nc = 'number' == typeof mc ? mc : this.indexes[mc];
                                this.assertValidIndex(nc, mc), this.changes.has(nc) || this.changes.set(nc, {
                                    op: Wb.OPERATION.TOUCH,
                                    index: nc
                                }), this.allChanges.add(nc), this.touchParents();
                            }, lc.prototype.touchParents = function() {
                                this.parent && this.parent.$changes.touch(this.parentIndex);
                            }, lc.prototype.getType = function(mc) {
                                if (this.ref._definition)
                                    return (lc = this.ref._definition).schema[lc.fieldsByIndex[mc]];
                                var nc, oc = (nc = this.parent._definition).schema[nc.fieldsByIndex[this.parentIndex]];
                                return Object.values(oc)[0];
                            }, lc.prototype.getChildrenFilter = function() {
                                var mc = this.parent._definition.childFilters;
                                return mc && mc[this.parentIndex];
                            }, lc.prototype.getValue = function(mc) {
                                return this.ref.getByIndex(mc);
                            }, lc.prototype.delete = function(mc) {
                                var nc = 'number' == typeof mc ? mc : this.indexes[mc];
                                if (void 0 !== nc) {
                                    var oc = this.getValue(nc);
                                    this.changes.set(nc, {
                                        op: Wb.OPERATION.DELETE,
                                        index: nc
                                    }), this.allChanges.delete(nc), delete this.caches[nc], oc && oc.$changes && (oc.$changes.parent = void 0), this.changed = !0, this.touchParents();
                                } else
                                    console.warn('@colyseus/schema '.concat(this.ref.constructor.name, ': trying to delete non-existing index: ').concat(mc, ' (').concat(nc, ')'));
                            }, lc.prototype.discard = function(mc, nc) {
                                var oc = this;
                                void 0 === mc && (mc = !1), void 0 === nc && (nc = !1), this.ref instanceof _qe || this.changes.forEach(function(pc) {
                                    if (pc.op === Wb.OPERATION.DELETE) {
                                        var qc = oc.ref.getIndex(pc.index);
                                        delete oc.indexes[qc];
                                    }
                                }), this.changes.clear(), this.changed = mc, nc && this.allChanges.clear(), this.currentCustomOperation = 0;
                            }, lc.prototype.discardAll = function() {
                                var mc = this;
                                this.changes.forEach(function(nc) {
                                    var oc = mc.getValue(nc.index);
                                    oc && oc.$changes && oc.$changes.discardAll();
                                }), this.discard();
                            }, lc.prototype.cache = function(mc, nc) {
                                this.caches[mc] = nc;
                            }, lc.prototype.clone = function() {
                                return new lc(this.ref, this.parent, this.root);
                            }, lc.prototype.ensureRefId = function() {
                                void 0 === this.refId && (this.refId = this.root.getNextUniqueId());
                            }, lc.prototype.assertValidIndex = function(mc, nc) {
                                if (void 0 === mc)
                                    throw new Error('ChangeTree: missing index for field "'.concat(nc, '"'));
                            }, lc;
                        }();

                        function lc(mc, nc, oc, pc) {
                            return mc[nc] || (mc[nc] = []), mc[nc].push(oc), null == pc || pc.forEach(function(qc, rc) {
                                    return oc(qc, rc);
                                }),
                                function() {
                                    return nb(mc[nc], mc[nc].indexOf(oc));
                                };
                        }

                        function mc(nc) {
                            var oc = this,
                                pc = 'string' != typeof this.$changes.getType();
                            this.$items.forEach(function(qc, rc) {
                                nc.push({
                                    refId: Yb.$changes.refId,
                                    op: Wb.OPERATION.DELETE,
                                    field: rc,
                                    value: void 0,
                                    previousValue: qc
                                }), Zb && Yb.$changes.root.removeRef(qc.$changes.refId);
                            });
                        }

                        function pc(qc, rc) {
                            if (-1 === rc || rc >= qc.length)
                                return !1;
                            for (var sc = qc.length - 1, tc = rc; Zb < Yb; Zb++)
                                qc[Zb] = qc[Zb + 1];
                            return qc.length = Yb, !0;
                        }
                        var sc = function(tc, uc) {
                            var vc = tc.toString(),
                                wc = uc.toString();
                            return vc < wc ? -1 : vc > wc ? 1 : 0;
                        };

                        function tc(uc) {
                            return uc.$proxy = !0, uc = new Proxy(uc, {
                                get: function(vc, wc) {
                                    return 'symbol' == typeof wc || isNaN(wc) ? vc[wc] : vc.at(wc);
                                },
                                set: function(vc, wc, xc) {
                                    if ('symbol' == typeof wc || isNaN(wc))
                                        vc[wc] = xc;
                                    else {
                                        var yc = Array.from(vc.$items.keys()),
                                            zc = parseInt(yc[wc] || wc);
                                        null == xc ? vc.deleteAt(zc) : vc.setAt(zc, xc);
                                    }
                                    return !0;
                                },
                                deleteProperty: function(vc, wc) {
                                    return 'number' == typeof wc ? vc.deleteAt(wc) : delete vc[wc], !0;
                                }
                            });
                        }
                        var uc = function() {
                            function vc() {
                                for (var wc = [], xc = 0; vc < arguments.length; vc++)
                                    wc[vc] = arguments[vc];
                                this.$changes = new kc(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, this.push.apply(this, wc);
                            }
                            return vc.prototype.onAdd = function(yc, zc) {
                                return void 0 === zc && (zc = !0), lc(this.$callbacks || (this.$callbacks = []), wc.OPERATION.ADD, yc, zc ? this.$items : void 0);
                            }, vc.prototype.onRemove = function(yc) {
                                return lc(this.$callbacks || (this.$callbacks = []), wc.OPERATION.DELETE, yc);
                            }, vc.prototype.onChange = function(yc) {
                                return lc(this.$callbacks || (this.$callbacks = []), wc.OPERATION.REPLACE, yc);
                            }, vc.is = function(yc) {
                                return Array.isArray(yc) || void 0 !== yc.array;
                            }, Object.defineProperty(vc.prototype, 'length', {
                                get: function() {
                                    return this.$items.size;
                                },
                                set: function(yc) {
                                    0 === yc ? this.clear() : this.splice(yc, this.length - yc);
                                },
                                enumerable: !1,
                                configurable: !0
                            }), vc.prototype.push = function() {
                                for (var yc, zc = this, Ac = [], Bc = 0; Bc < arguments.length; Bc++)
                                    Ac[Bc] = arguments[Bc];
                                return Ac.forEach(function(Cc) {
                                    yc = zc.$refId++, zc.setAt(yc, Cc);
                                }), yc;
                            }, vc.prototype.pop = function() {
                                var yc = Array.from(this.$indexes.values()).pop();
                                if (void 0 !== yc) {
                                    this.$changes.delete(yc), this.$indexes.delete(yc);
                                    var zc = this.$items.get(yc);
                                    return this.$items.delete(yc), zc;
                                }
                            }, vc.prototype.at = function(yc) {
                                var zc = Array.from(this.$items.keys())[yc];
                                return this.$items.get(zc);
                            }, vc.prototype.setAt = function(yc, zc) {
                                var Ac, Bc;
                                void 0 !== zc.$changes && zc.$changes.setParent(this, this.$changes.root, yc);
                                var Cc = null !== (Bc = null === (Ac = this.$changes.indexes[yc]) || void 0 === Ac ? void 0 : Ac.op) && void 0 !== Bc ? Bc : wc.OPERATION.ADD;
                                this.$changes.indexes[yc] = yc, this.$indexes.set(yc, yc), this.$items.set(yc, zc), this.$changes.change(yc, Cc);
                            }, vc.prototype.deleteAt = function(yc) {
                                var zc = Array.from(this.$items.keys())[yc];
                                return void 0 !== zc && this.$deleteAt(zc);
                            }, vc.prototype.$deleteAt = function(yc) {
                                return this.$changes.delete(yc), this.$indexes.delete(yc), this.$items.delete(yc);
                            }, vc.prototype.clear = function(yc) {
                                this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), yc && mc.call(this, yc), this.$items.clear(), this.$changes.operation({
                                    index: 0,
                                    op: wc.OPERATION.CLEAR
                                }), this.$changes.touchParents();
                            }, vc.prototype.concat = function() {
                                for (var yc, zc = [], Ac = 0; Ac < arguments.length; Ac++)
                                    zc[Ac] = arguments[Ac];
                                return new(vc.bind.apply(vc, dc([void 0], (yc = Array.from(this.$items.values())).concat.apply(yc, zc), !1)))();
                            }, vc.prototype.join = function(yc) {
                                return Array.from(this.$items.values()).join(yc);
                            }, vc.prototype.reverse = function() {
                                var yc = this,
                                    zc = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).reverse().forEach(function(Ac, Bc) {
                                    yc.setAt(zc[Bc], Ac);
                                }), this;
                            }, vc.prototype.shift = function() {
                                var yc = Array.from(this.$items.keys()).shift();
                                if (void 0 !== yc) {
                                    var zc = this.$items.get(yc);
                                    return this.$deleteAt(yc), zc;
                                }
                            }, vc.prototype.slice = function(yc, zc) {
                                var Ac = new vc();
                                return Ac.push.apply(Ac, Array.from(this.$items.values()).slice(yc, zc)), Ac;
                            }, vc.prototype.sort = function(yc) {
                                var zc = this;
                                void 0 === yc && (yc = sc);
                                var Ac = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).sort(yc).forEach(function(Bc, Cc) {
                                    zc.setAt(Ac[Cc], Bc);
                                }), this;
                            }, vc.prototype.splice = function(yc, zc) {
                                void 0 === zc && (zc = this.length - yc);
                                for (var Ac = Array.from(this.$items.keys()), Bc = [], Cc = yc; Cc < yc + zc; Cc++)
                                    Bc.push(this.$items.get(Ac[Cc])), this.$deleteAt(Ac[Cc]);
                                return Bc;
                            }, vc.prototype.unshift = function() {
                                for (var yc = this, zc = [], Ac = 0; Ac < arguments.length; Ac++)
                                    zc[Ac] = arguments[Ac];
                                var Bc = this.length,
                                    Cc = zc.length,
                                    Dc = Array.from(this.$items.values());
                                return zc.forEach(function(Ec, Fc) {
                                    yc.setAt(Fc, Ec);
                                }), Dc.forEach(function(Ec, Fc) {
                                    yc.setAt(Cc + Fc, Ec);
                                }), Bc + Cc;
                            }, vc.prototype.indexOf = function(yc, zc) {
                                return Array.from(this.$items.values()).indexOf(yc, zc);
                            }, vc.prototype.lastIndexOf = function(yc, zc) {
                                return void 0 === zc && (zc = this.length - 1), Array.from(this.$items.values()).lastIndexOf(yc, zc);
                            }, vc.prototype.every = function(yc, zc) {
                                return Array.from(this.$items.values()).every(yc, zc);
                            }, vc.prototype.some = function(yc, zc) {
                                return Array.from(this.$items.values()).some(yc, zc);
                            }, vc.prototype.forEach = function(yc, zc) {
                                Array.from(this.$items.values()).forEach(yc, zc);
                            }, vc.prototype.map = function(yc, zc) {
                                return Array.from(this.$items.values()).map(yc, zc);
                            }, vc.prototype.filter = function(yc, zc) {
                                return Array.from(this.$items.values()).filter(yc, zc);
                            }, vc.prototype.reduce = function(yc, zc) {
                                return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
                            }, vc.prototype.reduceRight = function(yc, zc) {
                                return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
                            }, vc.prototype.find = function(yc, zc) {
                                return Array.from(this.$items.values()).find(yc, zc);
                            }, vc.prototype.findIndex = function(yc, zc) {
                                return Array.from(this.$items.values()).findIndex(yc, zc);
                            }, vc.prototype.fill = function(yc, zc, Ac) {
                                throw new Error('ArraySchema#fill() not implemented');
                            }, vc.prototype.copyWithin = function(yc, zc, Ac) {
                                throw new Error('ArraySchema#copyWithin() not implemented');
                            }, vc.prototype.toString = function() {
                                return this.$items.toString();
                            }, vc.prototype.toLocaleString = function() {
                                return this.$items.toLocaleString();
                            }, vc.prototype[Symbol.iterator] = function() {
                                return Array.from(this.$items.values())[Symbol.iterator]();
                            }, vc.prototype.entries = function() {
                                return this.$items.entries();
                            }, vc.prototype.keys = function() {
                                return this.$items.keys();
                            }, vc.prototype.values = function() {
                                return this.$items.values();
                            }, vc.prototype.includes = function(yc, zc) {
                                return Array.from(this.$items.values()).includes(yc, zc);
                            }, vc.prototype.flatMap = function(yc, zc) {
                                throw new Error('ArraySchema#flatMap() is not supported.');
                            }, vc.prototype.flat = function(yc) {
                                throw new Error('ArraySchema#flat() is not supported.');
                            }, vc.prototype.findLast = function() {
                                var yc = Array.from(this.$items.values());
                                return yc.findLast.apply(yc, arguments);
                            }, vc.prototype.findLastIndex = function() {
                                var yc = Array.from(this.$items.values());
                                return yc.findLastIndex.apply(yc, arguments);
                            }, vc.prototype.setIndex = function(yc, zc) {
                                this.$indexes.set(yc, zc);
                            }, vc.prototype.getIndex = function(yc) {
                                return this.$indexes.get(yc);
                            }, vc.prototype.getByIndex = function(yc) {
                                return this.$items.get(this.$indexes.get(yc));
                            }, vc.prototype.deleteByIndex = function(yc) {
                                var zc = this.$indexes.get(yc);
                                this.$items.delete(zc), this.$indexes.delete(yc);
                            }, vc.prototype.toArray = function() {
                                return Array.from(this.$items.values());
                            }, vc.prototype.toJSON = function() {
                                return this.toArray().map(function(yc) {
                                    return 'function' == typeof yc.toJSON ? yc.toJSON() : yc;
                                });
                            }, vc.prototype.clone = function(yc) {
                                return yc ? new(vc.bind.apply(vc, dc([void 0], Array.from(this.$items.values()), !1)))() : new(vc.bind.apply(vc, dc([void 0], this.map(function(zc) {
                                    return zc.$changes ? zc.clone() : zc;
                                }), !1)))();
                            }, vc;
                        }();

                        function vc(wc) {
                            return wc.$proxy = !0, wc = new Proxy(wc, {
                                get: function(xc, yc) {
                                    return 'symbol' != typeof yc && void 0 === xc[yc] ? xc.get(yc) : xc[yc];
                                },
                                set: function(xc, yc, zc) {
                                    return 'symbol' != typeof yc && -1 === yc.indexOf('$') && 'onAdd' !== yc && 'onRemove' !== yc && 'onChange' !== yc ? xc.set(yc, zc) : xc[yc] = zc, !0;
                                },
                                deleteProperty: function(xc, yc) {
                                    return xc.delete(yc), !0;
                                }
                            });
                        }
                        var wc = function() {
                                function xc(yc) {
                                    var zc = this;
                                    if (this.$changes = new kc(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, yc)
                                        if (yc instanceof Map || yc instanceof xc)
                                            yc.forEach(function(Ac, Bc) {
                                                return zc.set(Bc, Ac);
                                            });
                                        else
                                            for (var Ac in yc)
                                                this.set(Ac, yc[Ac]);
                                }
                                return xc.prototype.onAdd = function(Ac, Bc) {
                                    return void 0 === Bc && (Bc = !0), lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.ADD, Ac, Bc ? this.$items : void 0);
                                }, xc.prototype.onRemove = function(Ac) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.DELETE, Ac);
                                }, xc.prototype.onChange = function(Ac) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.REPLACE, Ac);
                                }, xc.is = function(Ac) {
                                    return void 0 !== Ac.map;
                                }, xc.prototype[Symbol.iterator] = function() {
                                    return this.$items[Symbol.iterator]();
                                }, Object.defineProperty(xc.prototype, Symbol.toStringTag, {
                                    get: function() {
                                        return this.$items[Symbol.toStringTag];
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), xc.prototype.set = function(Ac, Bc) {
                                    if (null == Bc)
                                        throw new Error('MapSchema#set(\''.concat(Ac, '\', ').concat(Bc, '): trying to set ').concat(Bc, ' value on \'').concat(Ac, '\'.'));
                                    var Cc = void 0 !== this.$changes.indexes[Ac],
                                        Dc = Cc ? this.$changes.indexes[Ac] : this.$refId++,
                                        Ec = Cc ? Wb.OPERATION.REPLACE : Wb.OPERATION.ADD,
                                        Fc = void 0 !== Bc.$changes;
                                    return Fc && Bc.$changes.setParent(this, this.$changes.root, Dc), Cc ? Fc && this.$items.get(Ac) !== Bc && (Ec = Wb.OPERATION.ADD) : (this.$changes.indexes[Ac] = Dc, this.$indexes.set(Dc, Ac)), this.$items.set(Ac, Bc), this.$changes.change(Ac, Ec), this;
                                }, xc.prototype.get = function(Ac) {
                                    return this.$items.get(Ac);
                                }, xc.prototype.delete = function(Ac) {
                                    return this.$changes.delete(Ac), this.$items.delete(Ac);
                                }, xc.prototype.clear = function(Ac) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), Ac && mc.call(this, Ac), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: Wb.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, xc.prototype.has = function(Ac) {
                                    return this.$items.has(Ac);
                                }, xc.prototype.forEach = function(Ac) {
                                    this.$items.forEach(Ac);
                                }, xc.prototype.entries = function() {
                                    return this.$items.entries();
                                }, xc.prototype.keys = function() {
                                    return this.$items.keys();
                                }, xc.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(xc.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), xc.prototype.setIndex = function(Ac, Bc) {
                                    this.$indexes.set(Ac, Bc);
                                }, xc.prototype.getIndex = function(Ac) {
                                    return this.$indexes.get(Ac);
                                }, xc.prototype.getByIndex = function(Ac) {
                                    return this.$items.get(this.$indexes.get(Ac));
                                }, xc.prototype.deleteByIndex = function(Ac) {
                                    var Bc = this.$indexes.get(Ac);
                                    this.$items.delete(Bc), this.$indexes.delete(Ac);
                                }, xc.prototype.toJSON = function() {
                                    var Ac = {};
                                    return this.forEach(function(Bc, Cc) {
                                        Ac[Cc] = 'function' == typeof Bc.toJSON ? Bc.toJSON() : Bc;
                                    }), Ac;
                                }, xc.prototype.clone = function(Ac) {
                                    var Bc;
                                    return Ac ? Bc = Object.assign(new xc(), this) : (Bc = new xc(), this.forEach(function(Cc, Dc) {
                                        Cc.$changes ? Bc.set(Dc, Cc.clone()) : Bc.set(Dc, Cc);
                                    })), Bc;
                                }, xc;
                            }(),
                            xc = {};

                        function yc(zc, Ac) {
                            xc[zc] = Ac;
                        }

                        function zc(Ac) {
                            return xc[Ac];
                        }
                        var Ac = function() {
                            function Bc() {
                                this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {};
                            }
                            return Bc.create = function(Cc) {
                                var Dc = new Bc();
                                return Dc.schema = Object.assign({}, Cc && Cc.schema || {}), Dc.indexes = Object.assign({}, Cc && Cc.indexes || {}), Dc.fieldsByIndex = Object.assign({}, Cc && Cc.fieldsByIndex || {}), Dc.descriptors = Object.assign({}, Cc && Cc.descriptors || {}), Dc.deprecated = Object.assign({}, Cc && Cc.deprecated || {}), Dc;
                            }, Bc.prototype.addField = function(Cc, Dc) {
                                var Ec = this.getNextFieldIndex();
                                this.fieldsByIndex[Ec] = Cc, this.indexes[Cc] = Ec, this.schema[Cc] = Array.isArray(Dc) ? {
                                    array: Dc[0]
                                } : Dc;
                            }, Bc.prototype.hasField = function(Cc) {
                                return void 0 !== this.indexes[Cc];
                            }, Bc.prototype.addFilter = function(Cc, Dc) {
                                return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[Cc]] = Dc, this.indexesWithFilters.push(this.indexes[Cc]), !0;
                            }, Bc.prototype.addChildrenFilter = function(Cc, Dc) {
                                var Ec = this.indexes[Cc],
                                    Fc = this.schema[Cc];
                                if (zc(Object.keys(Fc)[0]))
                                    return this.childFilters || (this.childFilters = {}), this.childFilters[Ec] = Dc, !0;
                                console.warn('@filterChildren: field \''.concat(Cc, '\' can\'t have children. Ignoring filter.'));
                            }, Bc.prototype.getChildrenFilter = function(Cc) {
                                return this.childFilters && this.childFilters[this.indexes[Cc]];
                            }, Bc.prototype.getNextFieldIndex = function() {
                                return Object.keys(this.schema || {}).length;
                            }, Bc;
                        }();

                        function Bc(Cc) {
                            return Cc._context && Cc._context.useFilters;
                        }
                        var Cc = function() {
                                function Dc() {
                                    this.types = {}, this.schemas = new Map(), this.useFilters = !1;
                                }
                                return Dc.prototype.has = function(Ec) {
                                    return this.schemas.has(Ec);
                                }, Dc.prototype.get = function(Ec) {
                                    return this.types[Ec];
                                }, Dc.prototype.add = function(Ec, Fc) {
                                    void 0 === Fc && (Fc = this.schemas.size), Ec._definition = Ac.create(Ec._definition), Ec._typeid = Fc, this.types[Fc] = Ec, this.schemas.set(Ec, Fc);
                                }, Dc.create = function(Ec) {
                                    return void 0 === Ec && (Ec = {}),
                                        function(Fc) {
                                            return Ec.context || (Ec.context = new Dc()), ub(Fc, Ec);
                                        };
                                }, Dc;
                            }(),
                            Dc = new Cc();

                        function Ec(Fc, Gc) {
                            return void 0 === Gc && (Gc = {}),
                                function(Hc, Ic) {
                                    var Jc = Gc.context || Dc,
                                        Kc = Hc.constructor;
                                    if (Kc._context = Jc, !Fc)
                                        throw new Error(''.concat(Kc.name, ': @type() reference provided for "').concat(Ic, '" is undefined. Make sure you don\'t have any circular dependencies.'));
                                    Jc.has(Kc) || Jc.add(Kc);
                                    var Lc = Kc._definition;
                                    if (Lc.addField(Ic, Fc), Lc.descriptors[Ic]) {
                                        if (Lc.deprecated[Ic])
                                            return;
                                        try {
                                            throw new Error('@colyseus/schema: Duplicate \''.concat(Ic, '\' definition on \'').concat(Kc.name, '\'.\nCheck @type() annotation'));
                                        } catch (Fc) {
                                            var Mc = Fc.stack.split('\n')[4].trim();
                                            throw new Error(''.concat(Fc.message, ' ').concat(Mc));
                                        }
                                    }
                                    var Nc = uc.is(Fc),
                                        Oc = !Nc && wc.is(Fc);
                                    if ('string' != typeof Fc && !_qe.is(Fc)) {
                                        var Pc = Object.values(Fc)[0];
                                        'string' == typeof Pc || Jc.has(Pc) || Jc.add(Pc);
                                    }
                                    if (Gc.manual)
                                        Lc.descriptors[Ic] = {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        };
                                    else {
                                        var Qc = '_'.concat(Ic);
                                        Lc.descriptors[Qc] = {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !0
                                        }, Lc.descriptors[Ic] = {
                                            get: function() {
                                                return this[Qc];
                                            },
                                            set: function(Rc) {
                                                Rc !== this[Qc] && (null != Rc ? (!Nc || Rc instanceof uc || (Rc = new(uc.bind.apply(uc, dc([void 0], Rc, !1)))()), !Oc || Rc instanceof wc || (Rc = new wc(Rc)), void 0 === Rc.$proxy && (Oc ? Rc = vc(Rc) : Nc && (Rc = tc(Rc))), this.$changes.change(Ic), Rc.$changes && Rc.$changes.setParent(this, this.$changes.root, this._definition.indexes[Ic])) : this[Qc] && this.$changes.delete(Ic), this[Qc] = Rc);
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        };
                                    }
                                };
                        }

                        function Fc(Gc) {
                            return function(Hc, Ic) {
                                var Jc = Hc.constructor;
                                Jc._definition.addFilter(Ic, Gc) && (Jc._context.useFilters = !0);
                            };
                        }

                        function Gc(Hc) {
                            return function(Ic, Jc) {
                                var Kc = Ic.constructor;
                                Kc._definition.addChildrenFilter(Jc, Hc) && (Kc._context.useFilters = !0);
                            };
                        }

                        function Hc(Ic) {
                            return void 0 === Ic && (Ic = !0),
                                function(Jc, Kc) {
                                    var Lc = Jc.constructor._definition;
                                    Lc.deprecated[Kc] = !0, Ic && (Lc.descriptors[Kc] = {
                                        get: function() {
                                            throw new Error(''.concat(Kc, ' is deprecated.'));
                                        },
                                        set: function(Mc) {},
                                        enumerable: !1,
                                        configurable: !0
                                    });
                                };
                        }

                        function Ic(Jc, Kc, Lc) {
                            for (var Mc in (void 0 === Lc && (Lc = {}), Lc.context || (Lc.context = Jc._context || Lc.context || Dc), Kc))
                                Ec(Kc[Zb], Lc)(Jc.prototype, Zb);
                            return Jc;
                        }

                        function Kc(Lc) {
                            for (var Mc = 0, Nc = 0, Oc = 0, Pc = Lc.length; Zb < dc; Zb++)
                                (Mc = Lc.charCodeAt(Zb)) < 128 ? Yb += 1 : Mc < 2048 ? Yb += 2 : Mc < 55296 || Mc >= 57344 ? Yb += 3 : (Zb++, Yb += 4);
                            return Yb;
                        }

                        function Pc(Qc, Rc, Sc) {
                            for (var Tc = 0, Uc = 0, Vc = Sc.length; dc < Vc; dc++)
                                (Zb = Sc.charCodeAt(dc)) < 128 ? Qc[Rc++] = Zb : Zb < 2048 ? (Qc[Rc++] = 192 | Zb >> 6, Qc[Rc++] = 128 | 63 & Zb) : Zb < 55296 || Zb >= 57344 ? (Qc[Rc++] = 224 | Zb >> 12, Qc[Rc++] = 128 | Zb >> 6 & 63, Qc[Rc++] = 128 | 63 & Zb) : (dc++, Zb = 65536 + ((1023 & Zb) << 10 | 1023 & Sc.charCodeAt(dc)), Qc[Rc++] = 240 | Zb >> 18, Qc[Rc++] = 128 | Zb >> 12 & 63, Qc[Rc++] = 128 | Zb >> 6 & 63, Qc[Rc++] = 128 | 63 & Zb);
                        }

                        function Tc(Uc, Vc) {
                            Uc.push(255 & Vc);
                        }

                        function Uc(Vc, Wc) {
                            Vc.push(255 & Wc);
                        }

                        function Vc(Wc, Xc) {
                            Wc.push(255 & Xc), Wc.push(Xc >> 8 & 255);
                        }

                        function Wc(Xc, Yc) {
                            Xc.push(255 & Yc), Xc.push(Yc >> 8 & 255);
                        }

                        function Xc(Yc, Zc) {
                            Yc.push(255 & Zc), Yc.push(Zc >> 8 & 255), Yc.push(Zc >> 16 & 255), Yc.push(Zc >> 24 & 255);
                        }

                        function Yc(Zc, $c) {
                            var ad = $c >> 24,
                                bd = $c >> 16,
                                cd = $c >> 8,
                                dd = $c;
                            Zc.push(255 & dd), Zc.push(255 & dc), Zc.push(255 & Zb), Zc.push(255 & Yb);
                        }

                        function cd(dd, ed) {
                            var fd = Math.floor(ed / Math.pow(2, 32));
                            Yc(dd, ed >>> 0), Yc(dd, Yb);
                        }

                        function ed(fd, gd) {
                            var hd = gd / Math.pow(2, 32) >> 0;
                            Yc(fd, gd >>> 0), Yc(fd, Yb);
                        }

                        function gd(hd, id) {
                            _ld(hd, id);
                        }

                        function hd(id, jd) {
                            _md(id, jd);
                        }
                        var id = new Int32Array(2),
                            jd = new Float32Array(id.buffer),
                            kd = new Float64Array(id.buffer);

                        function _ld(md, nd) {
                            jd[0] = nd, Xc(md, id[0]);
                        }

                        function _md(nd, od) {
                            kd[0] = od, Xc(nd, id[0]), Xc(nd, id[1]);
                        }

                        function nd(od, pd) {
                            return Uc(od, pd ? 1 : 0);
                        }

                        function od(pd, qd) {
                            qd || (qd = '');
                            var rd = Kc(qd),
                                sd = 0;
                            if (Yb < 32)
                                pd.push(160 | Yb), Zb = 1;
                            else if (Yb < 256)
                                pd.push(217), Uc(pd, Yb), Zb = 2;
                            else if (Yb < 65536)
                                pd.push(218), Wc(pd, Yb), Zb = 3;
                            else {
                                if (!(Yb < 4294967296))
                                    throw new Error('String too long');
                                pd.push(219), Yc(pd, Yb), Zb = 5;
                            }
                            return Pc(pd, pd.length, qd), Zb + Yb;
                        }

                        function rd(sd, td) {
                            return isNaN(td) ? rd(sd, 0) : isFinite(td) ? td !== (0 | td) ? (sd.push(203), _md(sd, td), 9) : td >= 0 ? td < 128 ? (Uc(sd, td), 1) : td < 256 ? (sd.push(204), Uc(sd, td), 2) : td < 65536 ? (sd.push(205), Wc(sd, td), 3) : td < 4294967296 ? (sd.push(206), Yc(sd, td), 5) : (sd.push(207), ed(sd, td), 9) : td >= -32 ? (sd.push(224 | td + 32), 1) : td >= -128 ? (sd.push(208), Tc(sd, td), 2) : td >= -32768 ? (sd.push(209), Vc(sd, td), 3) : td >= -2147483648 ? (sd.push(210), Xc(sd, td), 5) : (sd.push(211), cd(sd, td), 9) : rd(sd, td > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                        }
                        var sd = Object.freeze({
                            __proto__: null,
                            utf8Write: Pc,
                            int8: Tc,
                            uint8: Uc,
                            int16: Vc,
                            uint16: Wc,
                            int32: Xc,
                            uint32: Yc,
                            int64: cd,
                            uint64: ed,
                            float32: gd,
                            float64: hd,
                            writeFloat32: _ld,
                            writeFloat64: _md,
                            boolean: nd,
                            string: od,
                            number: rd
                        });

                        function td(ud, vd, wd) {
                            for (var xd = '', yd = 0, zd = vd, Ad = vd + wd; zd < Ad; zd++) {
                                var Bd = ud[zd];
                                0 != (128 & Bd) ? 192 != (224 & Bd) ? 224 != (240 & Bd) ? 240 != (248 & Bd) ? console.error('Invalid byte ' + Bd.toString(16)) : (dc = (7 & Bd) << 18 | (63 & ud[++zd]) << 12 | (63 & ud[++zd]) << 6 | (63 & ud[++zd]) << 0) >= 65536 ? (dc -= 65536, Zb += String.fromCharCode(55296 + (dc >>> 10), 56320 + (1023 & dc))) : Zb += String.fromCharCode(dc) : Zb += String.fromCharCode((15 & Bd) << 12 | (63 & ud[++zd]) << 6 | (63 & ud[++zd]) << 0) : Zb += String.fromCharCode((31 & Bd) << 6 | 63 & ud[++zd]) : Zb += String.fromCharCode(Bd);
                            }
                            return Zb;
                        }

                        function zd(Ad, Bd) {
                            return _Ad(Ad, Bd) << 24 >> 24;
                        }

                        function _Ad(Bd, Cd) {
                            return Bd[Cd.offset++];
                        }

                        function Bd(Cd, Dd) {
                            return _Cd(Cd, Dd) << 16 >> 16;
                        }

                        function _Cd(Dd, Ed) {
                            return Dd[Ed.offset++] | Dd[Ed.offset++] << 8;
                        }

                        function Dd(Ed, Fd) {
                            return Ed[Fd.offset++] | Ed[Fd.offset++] << 8 | Ed[Fd.offset++] << 16 | Ed[Fd.offset++] << 24;
                        }

                        function Ed(Fd, Gd) {
                            return Dd(Fd, Gd) >>> 0;
                        }

                        function Fd(Gd, Hd) {
                            return _Od(Gd, Hd);
                        }

                        function Gd(Hd, Id) {
                            return _Pd(Hd, Id);
                        }

                        function Hd(Id, Jd) {
                            var Kd = Ed(Id, Jd);
                            return Dd(Id, Jd) * Math.pow(2, 32) + Yb;
                        }

                        function Jd(Kd, Ld) {
                            var Md = Ed(Kd, Ld);
                            return Ed(Kd, Ld) * Math.pow(2, 32) + Yb;
                        }
                        var Ld = new Int32Array(2),
                            Md = new Float32Array(Ld.buffer),
                            Nd = new Float64Array(Ld.buffer);

                        function _Od(Pd, Qd) {
                            return Ld[0] = Dd(Pd, Qd), Md[0];
                        }

                        function _Pd(Qd, Rd) {
                            return Ld[0] = Dd(Qd, Rd), Ld[1] = Dd(Qd, Rd), Nd[0];
                        }

                        function Qd(Rd, Sd) {
                            return _Ad(Rd, Sd) > 0;
                        }

                        function Rd(Sd, Td) {
                            var Ud, Vd = Sd[Td.offset++];
                            Zb < 192 ? Yb = 31 & Zb : 217 === Zb ? Yb = _Ad(Sd, Td) : 218 === Zb ? Yb = _Cd(Sd, Td) : 219 === Zb && (Yb = Ed(Sd, Td));
                            var Wd = td(Sd, Td.offset, Yb);
                            return Td.offset += Yb, dc;
                        }

                        function Vd(Wd, Xd) {
                            var Yd = Wd[Xd.offset];
                            return Yb < 192 && Yb > 160 || 217 === Yb || 218 === Yb || 219 === Yb;
                        }

                        function Xd(Yd, Zd) {
                            var $d = Yd[Zd.offset++];
                            return Yb < 128 ? Yb : 202 === Yb ? _Od(Yd, Zd) : 203 === Yb ? _Pd(Yd, Zd) : 204 === Yb ? _Ad(Yd, Zd) : 205 === Yb ? _Cd(Yd, Zd) : 206 === Yb ? Ed(Yd, Zd) : 207 === Yb ? Jd(Yd, Zd) : 208 === Yb ? zd(Yd, Zd) : 209 === Yb ? Bd(Yd, Zd) : 210 === Yb ? Dd(Yd, Zd) : 211 === Yb ? Hd(Yd, Zd) : Yb > 223 ? -1 * (255 - Yb + 1) : void 0;
                        }

                        function Zd($d, ae) {
                            var be = $d[ae.offset];
                            return Yb < 128 || Yb >= 202 && Yb <= 211;
                        }

                        function ae(be, ce) {
                            return be[ce.offset] < 160;
                        }

                        function be(ce, de) {
                            return ce[de.offset - 1] === Ad && (ce[de.offset] < 128 || ce[de.offset] >= 202 && ce[de.offset] <= 211);
                        }
                        var ce = Object.freeze({
                                __proto__: null,
                                int8: zd,
                                uint8: _Ad,
                                int16: Bd,
                                uint16: _Cd,
                                int32: Dd,
                                uint32: Ed,
                                float32: Fd,
                                float64: Gd,
                                int64: Hd,
                                uint64: Jd,
                                readFloat32: _Od,
                                readFloat64: _Pd,
                                boolean: Qd,
                                string: Rd,
                                stringCheck: Vd,
                                number: Xd,
                                numberCheck: Zd,
                                arrayCheck: ae,
                                switchStructureCheck: be
                            }),
                            de = function() {
                                function ee(fe) {
                                    var ge = this;
                                    this.$changes = new kc(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, fe && fe.forEach(function(he) {
                                        return ee.add(he);
                                    });
                                }
                                return ee.prototype.onAdd = function(ge, he) {
                                    return void 0 === he && (he = !0), lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.ADD, ge, he ? this.$items : void 0);
                                }, ee.prototype.onRemove = function(ge) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.DELETE, ge);
                                }, ee.prototype.onChange = function(ge) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.REPLACE, ge);
                                }, ee.is = function(ge) {
                                    return void 0 !== ge.collection;
                                }, ee.prototype.add = function(ge) {
                                    var he = this.$refId++;
                                    return void 0 !== ge.$changes && ge.$changes.setParent(this, this.$changes.root, he), this.$changes.indexes[he] = he, this.$indexes.set(he, he), this.$items.set(he, ge), this.$changes.change(he), he;
                                }, ee.prototype.at = function(ge) {
                                    var he = Array.from(this.$items.keys())[ge];
                                    return this.$items.get(he);
                                }, ee.prototype.entries = function() {
                                    return this.$items.entries();
                                }, ee.prototype.delete = function(ge) {
                                    for (var he, ie, je = this.$items.entries();
                                        (ie = je.next()) && !ie.done;)
                                        if (ge === ie.value[1]) {
                                            he = ie.value[0];
                                            break;
                                        }
                                    return void 0 !== he && (this.$changes.delete(he), this.$indexes.delete(he), this.$items.delete(he));
                                }, ee.prototype.clear = function(ge) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), ge && mc.call(this, ge), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: Wb.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, ee.prototype.has = function(ge) {
                                    return Array.from(this.$items.values()).some(function(he) {
                                        return he === ge;
                                    });
                                }, ee.prototype.forEach = function(ge) {
                                    var he = this;
                                    this.$items.forEach(function(ie, je, ke) {
                                        return ge(ie, je, he);
                                    });
                                }, ee.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(ee.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), ee.prototype.setIndex = function(ge, he) {
                                    this.$indexes.set(ge, he);
                                }, ee.prototype.getIndex = function(ge) {
                                    return this.$indexes.get(ge);
                                }, ee.prototype.getByIndex = function(ge) {
                                    return this.$items.get(this.$indexes.get(ge));
                                }, ee.prototype.deleteByIndex = function(ge) {
                                    var he = this.$indexes.get(ge);
                                    this.$items.delete(he), this.$indexes.delete(ge);
                                }, ee.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, ee.prototype.toJSON = function() {
                                    var ge = [];
                                    return this.forEach(function(he, ie) {
                                        ge.push('function' == typeof he.toJSON ? he.toJSON() : he);
                                    }), ge;
                                }, ee.prototype.clone = function(ge) {
                                    var he;
                                    return ge ? he = Object.assign(new ee(), this) : (he = new ee(), this.forEach(function(ie) {
                                        ie.$changes ? he.add(ie.clone()) : he.add(ie);
                                    })), he;
                                }, ee;
                            }(),
                            ee = function() {
                                function fe(ge) {
                                    var he = this;
                                    this.$changes = new kc(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, ge && ge.forEach(function(ie) {
                                        return fe.add(ie);
                                    });
                                }
                                return fe.prototype.onAdd = function(he, ie) {
                                    return void 0 === ie && (ie = !0), lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.ADD, he, ie ? this.$items : void 0);
                                }, fe.prototype.onRemove = function(he) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.DELETE, he);
                                }, fe.prototype.onChange = function(he) {
                                    return lc(this.$callbacks || (this.$callbacks = []), Wb.OPERATION.REPLACE, he);
                                }, fe.is = function(he) {
                                    return void 0 !== he.set;
                                }, fe.prototype.add = function(he) {
                                    var ie, je;
                                    if (this.has(he))
                                        return !1;
                                    var ke = this.$refId++;
                                    void 0 !== he.$changes && he.$changes.setParent(this, this.$changes.root, ke);
                                    var le = null !== (je = null === (ie = this.$changes.indexes[ke]) || void 0 === ie ? void 0 : ie.op) && void 0 !== je ? je : Wb.OPERATION.ADD;
                                    return this.$changes.indexes[ke] = ke, this.$indexes.set(ke, ke), this.$items.set(ke, he), this.$changes.change(ke, le), ke;
                                }, fe.prototype.entries = function() {
                                    return this.$items.entries();
                                }, fe.prototype.delete = function(he) {
                                    for (var ie, je, ke = this.$items.entries();
                                        (je = ke.next()) && !je.done;)
                                        if (he === je.value[1]) {
                                            ie = je.value[0];
                                            break;
                                        }
                                    return void 0 !== ie && (this.$changes.delete(ie), this.$indexes.delete(ie), this.$items.delete(ie));
                                }, fe.prototype.clear = function(he) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), he && mc.call(this, he), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: Wb.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, fe.prototype.has = function(he) {
                                    for (var ie, je = this.$items.values(), ke = !1;
                                        (ie = je.next()) && !ie.done;)
                                        if (he === ie.value) {
                                            ke = !0;
                                            break;
                                        }
                                    return ke;
                                }, fe.prototype.forEach = function(he) {
                                    var ie = this;
                                    this.$items.forEach(function(je, ke, le) {
                                        return he(je, ke, ie);
                                    });
                                }, fe.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(fe.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), fe.prototype.setIndex = function(he, ie) {
                                    this.$indexes.set(he, ie);
                                }, fe.prototype.getIndex = function(he) {
                                    return this.$indexes.get(he);
                                }, fe.prototype.getByIndex = function(he) {
                                    return this.$items.get(this.$indexes.get(he));
                                }, fe.prototype.deleteByIndex = function(he) {
                                    var ie = this.$indexes.get(he);
                                    this.$items.delete(ie), this.$indexes.delete(he);
                                }, fe.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, fe.prototype.toJSON = function() {
                                    var he = [];
                                    return this.forEach(function(ie, je) {
                                        he.push('function' == typeof ie.toJSON ? ie.toJSON() : ie);
                                    }), he;
                                }, fe.prototype.clone = function(he) {
                                    var ie;
                                    return he ? ie = Object.assign(new fe(), this) : (ie = new fe(), this.forEach(function(je) {
                                        je.$changes ? ie.add(je.clone()) : ie.add(je);
                                    })), ie;
                                }, fe;
                            }(),
                            fe = function() {
                                function ge() {
                                    this.refIds = new WeakSet(), this.containerIndexes = new WeakMap();
                                }
                                return ge.prototype.addRefId = function(he) {
                                    this.refIds.has(he) || (this.refIds.add(he), this.containerIndexes.set(he, new Set()));
                                }, ge.get = function(he) {
                                    return void 0 === he.$filterState && (he.$filterState = new ge()), he.$filterState;
                                }, ge;
                            }(),
                            ge = function() {
                                function he() {
                                    this.refs = new Map(), this.refCounts = {}, this.deletedRefs = new Set(), this.nextUniqueId = 0;
                                }
                                return he.prototype.getNextUniqueId = function() {
                                    return this.nextUniqueId++;
                                }, he.prototype.addRef = function(ie, je, ke) {
                                    void 0 === ke && (ke = !0), this.refs.set(ie, je), ke && (this.refCounts[ie] = (this.refCounts[ie] || 0) + 1);
                                }, he.prototype.removeRef = function(ie) {
                                    this.refCounts[ie] = this.refCounts[ie] - 1, this.deletedRefs.add(ie);
                                }, he.prototype.clearRefs = function() {
                                    this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {};
                                }, he.prototype.garbageCollectDeletedRefs = function() {
                                    var ie = this;
                                    this.deletedRefs.forEach(function(je) {
                                        if (!(ie.refCounts[je] > 0)) {
                                            var ke = ie.refs.get(je);
                                            if (ke instanceof _qe)
                                                for (var le in ke._definition.schema)
                                                    'string' != typeof ke._definition.schema[le] && ke[le] && ke[le].$changes && ie.removeRef(ke[le].$changes.refId);
                                            else {
                                                var me = ke.$changes.parent._definition,
                                                    ne = me.schema[me.fieldsByIndex[ke.$changes.parentIndex]];
                                                'function' == typeof Object.values(ne)[0] && Array.from(ke.values()).forEach(function(oe) {
                                                    return ie.removeRef(oe.$changes.refId);
                                                });
                                            }
                                            ie.refs.delete(je), delete ie.refCounts[je];
                                        }
                                    }), this.deletedRefs.clear();
                                }, he;
                            }(),
                            he = function(ie) {
                                function je() {
                                    return null !== ie && ie.apply(this, arguments) || this;
                                }
                                return Yb(je, ie), je;
                            }(Error);

                        function ie(je, ke, le, me) {
                            var ne, oe = !1;
                            switch (ke) {
                                case 'number':
                                case 'int8':
                                case 'uint8':
                                case 'int16':
                                case 'uint16':
                                case 'int32':
                                case 'uint32':
                                case 'int64':
                                case 'uint64':
                                case 'float32':
                                case 'float64':
                                    dc = 'number', isNaN(je) && console.log('trying to encode "NaN" in '.concat(le.constructor.name, '#').concat(me));
                                    break;
                                case 'string':
                                    dc = 'string', oe = !0;
                                    break;
                                case 'boolean':
                                    return;
                            }
                            if (typeof je !== dc && (!oe || oe && null !== je)) {
                                var pe = '\''.concat(JSON.stringify(je), '\'').concat(je && je.constructor && ' ('.concat(je.constructor.name, ')') || '');
                                throw new he('a \''.concat(dc, '\' was expected, but ').concat(pe, ' was provided in ').concat(le.constructor.name, '#').concat(me));
                            }
                        }

                        function me(ne, oe, pe, qe) {
                            if (!(ne instanceof oe))
                                throw new he('a \''.concat(oe.name, '\' was expected, but \'').concat(ne.constructor.name, '\' was provided in ').concat(pe.constructor.name, '#').concat(qe));
                        }

                        function ne(oe, pe, qe, re, se) {
                            ie(qe, oe, re, se);
                            var te = sd[oe];
                            if (!te)
                                throw new he('a \''.concat(oe, '\' was expected, but ').concat(qe, ' was provided in ').concat(re.constructor.name, '#').concat(se));
                            te(pe, qe);
                        }

                        function pe(qe, re, se) {
                            return ce[qe](re, se);
                        }
                        var _qe = function() {
                            function re() {
                                for (var se = [], te = 0; re < arguments.length; re++)
                                    se[re] = arguments[re];
                                Object.defineProperties(this, {
                                    $changes: {
                                        value: new kc(this, void 0, new ge()),
                                        enumerable: !1,
                                        writable: !0
                                    },
                                    $callbacks: {
                                        value: void 0,
                                        enumerable: !1,
                                        writable: !0
                                    }
                                });
                                var ue = this._definition.descriptors;
                                ue && Object.defineProperties(this, ue), se[0] && this.assign(se[0]);
                            }
                            return re.onError = function(ve) {
                                console.error(ve);
                            }, re.is = function(ve) {
                                return ve._definition && void 0 !== ve._definition.schema;
                            }, re.prototype.onChange = function(ve) {
                                return lc(this.$callbacks || (this.$callbacks = []), se.OPERATION.REPLACE, ve);
                            }, re.prototype.onRemove = function(ve) {
                                return lc(this.$callbacks || (this.$callbacks = []), se.OPERATION.DELETE, ve);
                            }, re.prototype.assign = function(ve) {
                                return Object.assign(this, ve), this;
                            }, Object.defineProperty(re.prototype, '_definition', {
                                get: function() {
                                    return this.constructor._definition;
                                },
                                enumerable: !1,
                                configurable: !0
                            }), re.prototype.setDirty = function(ve, we) {
                                this.$changes.change(ve, we);
                            }, re.prototype.listen = function(ve, we, xe) {
                                var ye = this;
                                return void 0 === xe && (xe = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[ve] || (this.$callbacks[ve] = []), this.$callbacks[ve].push(we), xe && void 0 !== this[ve] && we(this[ve], void 0),
                                    function() {
                                        return pc(ye.$callbacks[ve], ye.$callbacks[ve].indexOf(we));
                                    };
                            }, re.prototype.decode = function(ve, we, xe) {
                                var ye;
                                void 0 === we && (we = {
                                    offset: 0
                                }), void 0 === xe && (xe = this);
                                var ze = [],
                                    Ae = this.$changes.root,
                                    Be = ve.length,
                                    Ce = 0;
                                for (Ae.refs.set(Ce, this); we.offset < Be;) {
                                    var De = ve[we.offset++];
                                    if (De != pe) {
                                        var Ee = xe.$changes,
                                            Fe = void 0 !== xe._definition,
                                            Ge = Fe ? De >> 6 << 6 : De;
                                        if (Ge !== se.OPERATION.CLEAR) {
                                            var He = Fe ? De % (Ge || 255) : Xd(ve, we),
                                                Ie = Fe ? xe._definition.fieldsByIndex[He] : '',
                                                Je = Ee.getType(He),
                                                Ke = void 0,
                                                Le = void 0,
                                                Me = void 0;
                                            if (Fe ? Le = xe['_'.concat(Ie)] : (Le = xe.getByIndex(He), (Ge & se.OPERATION.ADD) === se.OPERATION.ADD ? (Me = xe instanceof wc ? Rd(ve, we) : He, xe.setIndex(He, Me)) : Me = xe.getIndex(He)), (Ge & se.OPERATION.DELETE) === se.OPERATION.DELETE && (Ge !== se.OPERATION.DELETE_AND_ADD && xe.deleteByIndex(He), Le && Le.$changes && Ae.removeRef(Le.$changes.refId), Ke = null), void 0 !== Ie) {
                                                if (Ge === se.OPERATION.DELETE);
                                                else if (re.is(Je)) {
                                                    var Ne = Xd(ve, we);
                                                    if (Ke = Ae.refs.get(Ne), Ge !== se.OPERATION.REPLACE) {
                                                        var Oe = this.getSchemaType(ve, we, Je);
                                                        Ke || ((Ke = this.createTypeInstance(Oe)).$changes.refId = Ne, Le && (Ke.$callbacks = Le.$callbacks, Le.$changes.refId && Ne !== Le.$changes.refId && Ae.removeRef(Le.$changes.refId))), Ae.addRef(Ne, Ke, Ke !== Le);
                                                    }
                                                } else if ('string' == typeof Je)
                                                    Ke = pe(Je, ve, we);
                                                else {
                                                    var Pe = zc(Object.keys(Je)[0]),
                                                        Qe = Xd(ve, we),
                                                        Re = Ae.refs.has(Qe) ? Le || Ae.refs.get(Qe) : new Pe.constructor();
                                                    if ((Ke = Re.clone(!0)).$changes.refId = Qe, Le && (Ke.$callbacks = Le.$callbacks, Le.$changes.refId && Qe !== Le.$changes.refId)) {
                                                        Ae.removeRef(Le.$changes.refId);
                                                        for (var Se = Le.entries(), Te = void 0;
                                                            (Te = Se.next()) && !Te.done;) {
                                                            var Ue = (ye = Te.value)[0],
                                                                Ve = ye[1];
                                                            ze.push({
                                                                refId: Qe,
                                                                op: se.OPERATION.DELETE,
                                                                field: Ue,
                                                                value: void 0,
                                                                previousValue: Ve
                                                            });
                                                        }
                                                    }
                                                    Ae.addRef(Qe, Ke, Re !== Le);
                                                }
                                                if (null != Ke)
                                                    if (Ke.$changes && Ke.$changes.setParent(Ee.ref, Ee.root, He), xe instanceof re)
                                                        xe[Ie] = Ke;
                                                    else if (xe instanceof wc)
                                                    Ue = Me, xe.$items.set(Ue, Ke), xe.$changes.allChanges.add(He);
                                                else if (xe instanceof uc)
                                                    xe.setAt(He, Ke);
                                                else if (xe instanceof de) {
                                                    var We = xe.add(Ke);
                                                    xe.setIndex(He, We);
                                                } else
                                                    xe instanceof ee && !1 !== (We = xe.add(Ke)) && xe.setIndex(He, We);
                                                Le !== Ke && ze.push({
                                                    refId: Ce,
                                                    op: Ge,
                                                    field: Ie,
                                                    dynamicIndex: Me,
                                                    value: Ke,
                                                    previousValue: Le
                                                });
                                            } else {
                                                console.warn('@colyseus/schema: definition mismatch');
                                                for (var Xe = {
                                                        offset: we.offset
                                                    }; we.offset < Be && (!be(ve, we) || (Xe.offset = we.offset + 1, !Ae.refs.has(Xd(ve, Xe))));)
                                                    we.offset++;
                                            }
                                        } else
                                            xe.clear(ze);
                                    } else {
                                        Ce = Xd(ve, we);
                                        var Ye = Ae.refs.get(Ce);
                                        if (!Ye)
                                            throw new Error('"refId" not found: '.concat(Ce));
                                        xe = Ye;
                                    }
                                }
                                return this._triggerChanges(ze), Ae.garbageCollectDeletedRefs(), ze;
                            }, re.prototype.encode = function(ve, we, xe) {
                                void 0 === ve && (ve = !1), void 0 === we && (we = []), void 0 === xe && (xe = !1);
                                for (var ye = this.$changes, ze = new WeakSet(), Ae = [ye], Be = 1, Ce = 0; Ce < Be; Ce++) {
                                    var De = Ae[Ce],
                                        Ee = De.ref,
                                        Fe = Ee instanceof re;
                                    De.ensureRefId(), ze.add(De), De !== ye && (De.changed || ve) && (Uc(we, pe), rd(we, De.refId));
                                    for (var Ge = ve ? Array.from(De.allChanges) : Array.from(De.changes.values()), He = 0, Ie = Ge.length; He < Ie; He++) {
                                        var Je = ve ? {
                                                op: se.OPERATION.ADD,
                                                index: Ge[He]
                                            } : Ge[He],
                                            Ke = Je.index,
                                            Le = Fe ? Ee._definition.fieldsByIndex && Ee._definition.fieldsByIndex[Ke] : Ke,
                                            Me = we.length;
                                        if (Je.op !== se.OPERATION.TOUCH)
                                            if (Fe)
                                                Uc(we, Ke | Je.op);
                                            else {
                                                if (Uc(we, Je.op), Je.op === se.OPERATION.CLEAR)
                                                    continue;
                                                rd(we, Ke);
                                            }
                                        if (Fe || (Je.op & se.OPERATION.ADD) != se.OPERATION.ADD || Ee instanceof wc && od(we, De.ref.$indexes.get(Ke)), Je.op !== se.OPERATION.DELETE) {
                                            var Ne = De.getType(Ke),
                                                Oe = De.getValue(Ke);
                                            if (Oe && Oe.$changes && !ze.has(Oe.$changes) && (Ae.push(Oe.$changes), Oe.$changes.ensureRefId(), Be++), Je.op !== se.OPERATION.TOUCH) {
                                                if (re.is(Ne))
                                                    me(Oe, Ne, Ee, Le), rd(we, Oe.$changes.refId), (Je.op & se.OPERATION.ADD) === se.OPERATION.ADD && this.tryEncodeTypeId(we, Ne, Oe.constructor);
                                                else if ('string' == typeof Ne)
                                                    ne(Ne, we, Oe, Ee, Le);
                                                else {
                                                    var Pe = zc(Object.keys(Ne)[0]);
                                                    me(Ee['_'.concat(Le)], Pe.constructor, Ee, Le), rd(we, Oe.$changes.refId);
                                                }
                                                xe && De.cache(Ke, we.slice(Me));
                                            }
                                        }
                                    }
                                    ve || xe || De.discard();
                                }
                                return we;
                            }, re.prototype.encodeAll = function(ve) {
                                return this.encode(!0, [], ve);
                            }, re.prototype.applyFilters = function(ve, we) {
                                var xe, ye;
                                void 0 === we && (we = !1);
                                for (var ze = this, Ae = new Set(), Be = fe.get(ve), Ce = [this.$changes], De = 1, Ee = [], Fe = function(Ge) {
                                        var He = Ce[Ge];
                                        if (Ae.has(He.refId))
                                            return 'continue';
                                        var Ie = He.ref,
                                            Je = Ie instanceof re;
                                        Uc(Ee, pe), rd(Ee, He.refId);
                                        var Ke = Be.refIds.has(He),
                                            Le = we || !Ke;
                                        Be.addRefId(He);
                                        var Me = Be.containerIndexes.get(He),
                                            Ne = Le ? Array.from(He.allChanges) : Array.from(He.changes.values());
                                        !we && Je && Ie._definition.indexesWithFilters && Ie._definition.indexesWithFilters.forEach(function(Oe) {
                                            !Me.has(Oe) && He.allChanges.has(Oe) && (Le ? Ne.push(Oe) : Ne.push({
                                                op: se.OPERATION.ADD,
                                                index: Oe
                                            }));
                                        });
                                        for (var Oe = 0, Pe = Ne.length; Oe < Pe; Oe++) {
                                            var Qe = Le ? {
                                                op: se.OPERATION.ADD,
                                                index: Ne[Oe]
                                            } : Ne[Oe];
                                            if (Qe.op !== se.OPERATION.CLEAR) {
                                                var Re = Qe.index;
                                                if (Qe.op !== se.OPERATION.DELETE) {
                                                    var Se = He.getValue(Re),
                                                        Te = He.getType(Re);
                                                    if (Je) {
                                                        if ((Ic = Ie._definition.filters && Ie._definition.filters[Re]) && !Ic.call(Ie, ve, Se, ze)) {
                                                            Se && Se.$changes && Ae.add(Se.$changes.refId);
                                                            continue;
                                                        }
                                                    } else {
                                                        var Ue, Ve = He.parent;
                                                        if ((Ue = He.getChildrenFilter()) && !Ue.call(Ve, ve, Ie.$indexes.get(Re), Se, ze)) {
                                                            Se && Se.$changes && Ae.add(Se.$changes.refId);
                                                            continue;
                                                        }
                                                    }
                                                    if (Se.$changes && (Ce.push(Se.$changes), De++), Qe.op !== se.OPERATION.TOUCH)
                                                        if (Qe.op === se.OPERATION.ADD || Je)
                                                            Ee.push.apply(Ee, null !== (xe = He.caches[Re]) && void 0 !== xe ? xe : []), Me.add(Re);
                                                        else if (Me.has(Re))
                                                        Ee.push.apply(Ee, null !== (ye = He.caches[Re]) && void 0 !== ye ? ye : []);
                                                    else {
                                                        if (Me.add(Re), Uc(Ee, se.OPERATION.ADD), rd(Ee, Re), Ie instanceof wc) {
                                                            var We = He.ref.$indexes.get(Re);
                                                            od(Ee, We);
                                                        }
                                                        Se.$changes ? rd(Ee, Se.$changes.refId) : sd[Te](Ee, Se);
                                                    } else
                                                        Se.$changes && !Je && (Uc(Ee, se.OPERATION.ADD), rd(Ee, Re), Ie instanceof wc && (We = He.ref.$indexes.get(Re), od(Ee, We)), rd(Ee, Se.$changes.refId));
                                                } else
                                                    Je ? Uc(Ee, Qe.op | Re) : (Uc(Ee, Qe.op), rd(Ee, Re));
                                            } else
                                                Uc(Ee, Qe.op);
                                        }
                                    }, Ge = 0; Ge < De; Ge++)
                                    Fe(Ge);
                                return Ee;
                            }, re.prototype.clone = function() {
                                var ve, we = new this.constructor(),
                                    xe = this._definition.schema;
                                for (var ye in xe)
                                    'object' == typeof this[ye] && 'function' == typeof(null === (ve = this[ye]) || void 0 === ve ? void 0 : ve.clone) ? we[ye] = this[ye].clone() : we[ye] = this[ye];
                                return we;
                            }, re.prototype.toJSON = function() {
                                var ve = this._definition.schema,
                                    we = this._definition.deprecated,
                                    xe = {};
                                for (var ye in ve)
                                    we[ye] || null === this[ye] || void 0 === this[ye] || (xe[ye] = 'function' == typeof this[ye].toJSON ? this[ye].toJSON() : this['_'.concat(ye)]);
                                return xe;
                            }, re.prototype.discardAllChanges = function() {
                                this.$changes.discardAll();
                            }, re.prototype.getByIndex = function(ve) {
                                return this[this._definition.fieldsByIndex[ve]];
                            }, re.prototype.deleteByIndex = function(ve) {
                                this[this._definition.fieldsByIndex[ve]] = void 0;
                            }, re.prototype.tryEncodeTypeId = function(ve, we, xe) {
                                we._typeid !== xe._typeid && (Uc(ve, Bd), rd(ve, xe._typeid));
                            }, re.prototype.getSchemaType = function(ve, we, xe) {
                                var ye;
                                return ve[we.offset] === Bd && (we.offset++, ye = this.constructor._context.get(Xd(ve, we))), ye || xe;
                            }, re.prototype.createTypeInstance = function(ve) {
                                var we = new ve();
                                return we.$changes.root = this.$changes.root, we;
                            }, re.prototype._triggerChanges = function(ve) {
                                for (var we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe = new Set(), Ge = this.$changes.root.refs, He = function(Ie) {
                                        var Je = ve[Ie],
                                            Ke = Je.refId,
                                            Le = Ge.get(Ke),
                                            Me = Le.$callbacks;
                                        if ((Je.op & se.OPERATION.DELETE) === se.OPERATION.DELETE && Je.previousValue instanceof re && (null === (xe = null === (we = Je.previousValue.$callbacks) || void 0 === we ? void 0 : we[se.OPERATION.DELETE]) || void 0 === xe || xe.forEach(function(Ne) {
                                                return Ne();
                                            })), !Me)
                                            return 'continue';
                                        if (Le instanceof re) {
                                            if (!Fe.has(Ke))
                                                try {
                                                    null === (ye = null == Me ? void 0 : Me[se.OPERATION.REPLACE]) || void 0 === ye || ye.forEach(function(Ne) {
                                                        return Ne(ve);
                                                    });
                                                } catch (se) {
                                                    re.onError(se);
                                                }
                                            try {
                                                Me.hasOwnProperty(Je.field) && (null === (ze = Me[Je.field]) || void 0 === ze || ze.forEach(function(Ne) {
                                                    return Ne(Je.value, Je.previousValue);
                                                }));
                                            } catch (se) {
                                                re.onError(se);
                                            }
                                        } else
                                            Je.op === se.OPERATION.ADD && void 0 === Je.previousValue ? null === (Ae = Me[se.OPERATION.ADD]) || void 0 === Ae || Ae.forEach(function(Ne) {
                                                var Oe;
                                                return Ne(Je.value, null !== (Oe = Je.dynamicIndex) && void 0 !== Oe ? Oe : Je.field);
                                            }) : Je.op === se.OPERATION.DELETE ? void 0 !== Je.previousValue && (null === (Be = Me[se.OPERATION.DELETE]) || void 0 === Be || Be.forEach(function(Ne) {
                                                var Oe;
                                                return Ne(Je.previousValue, null !== (Oe = Je.dynamicIndex) && void 0 !== Oe ? Oe : Je.field);
                                            })) : Je.op === se.OPERATION.DELETE_AND_ADD && (void 0 !== Je.previousValue && (null === (Ce = Me[se.OPERATION.DELETE]) || void 0 === Ce || Ce.forEach(function(Ne) {
                                                var Oe;
                                                return Ne(Je.previousValue, null !== (Oe = Je.dynamicIndex) && void 0 !== Oe ? Oe : Je.field);
                                            })), null === (De = Me[se.OPERATION.ADD]) || void 0 === De || De.forEach(function(Ne) {
                                                var Oe;
                                                return Ne(Je.value, null !== (Oe = Je.dynamicIndex) && void 0 !== Oe ? Oe : Je.field);
                                            })), Je.value !== Je.previousValue && (null === (Ee = Me[se.OPERATION.REPLACE]) || void 0 === Ee || Ee.forEach(function(Ne) {
                                                var Oe;
                                                return Ne(Je.value, null !== (Oe = Je.dynamicIndex) && void 0 !== Oe ? Oe : Je.field);
                                            }));
                                        Fe.add(Ke);
                                    }, Ie = 0; Ie < ve.length; Ie++)
                                    He(Ie);
                            }, re._definition = Ac.create(), re;
                        }();

                        function re(se) {
                            for (var te = [se.$changes], ue = 1, ve = {}, we = Zb, xe = function(ye) {
                                    var ze = te[ye];
                                    ze.changes.forEach(function(Ae) {
                                        var Be = ze.ref,
                                            Ce = Ae.index,
                                            De = Be._definition ? Be._definition.fieldsByIndex[Ce] : Be.$indexes.get(Ce);
                                        dc[De] = ze.getValue(Ce);
                                    });
                                }, ye = 0; ye < Yb; ye++)
                                xe(ye);
                            return Zb;
                        }
                        var ye = {
                                context: new Cc()
                            },
                            ze = function(Ae) {
                                function Be() {
                                    return null !== Ae && Ae.apply(this, arguments) || this;
                                }
                                return Yb(Be, Ae), Zb([Ec('string', ye)], Be.prototype, 'name', void 0), Zb([Ec('string', ye)], Be.prototype, 'type', void 0), Zb([Ec('number', ye)], Be.prototype, 'referencedType', void 0), Be;
                            }(_qe),
                            Ae = function(Be) {
                                function Ce() {
                                    var De = null !== Be && Be.apply(this, arguments) || this;
                                    return Ce.fields = new uc(), Ce;
                                }
                                return Yb(Ce, Be), Zb([Ec('number', ye)], Ce.prototype, 'id', void 0), Zb([Ec([ze], ye)], Ce.prototype, 'fields', void 0), Ce;
                            }(_qe),
                            Be = function(Ce) {
                                function De() {
                                    var Ee = null !== Ce && Ce.apply(this, arguments) || this;
                                    return De.types = new uc(), De;
                                }
                                return Yb(De, Ce), De.encode = function(Fe) {
                                    var Ge = Fe.constructor,
                                        He = new De();
                                    He.rootType = Ge._typeid;
                                    var Ie = function(Je, Ke) {
                                            for (var Le in Ke) {
                                                var Me = new ze();
                                                Me.name = Le;
                                                var Ne = void 0;
                                                if ('string' == typeof Ke[Le])
                                                    Ne = Ke[Le];
                                                else {
                                                    var Oe = Ke[Le],
                                                        Pe = void 0;
                                                    _qe.is(Oe) ? (Ne = 'ref', Pe = Ke[Le]) : 'string' == typeof Oe[Ne = Object.keys(Oe)[0]] ? Ne += ':' + Oe[Ne] : Pe = Oe[Ne], Me.referencedType = Pe ? Pe._typeid : -1;
                                                }
                                                Me.type = Ne, Je.fields.push(Me);
                                            }
                                            He.types.push(Je);
                                        },
                                        Je = Ge._context.types;
                                    for (var Ke in Je) {
                                        var Le = new Ae();
                                        Le.id = Number(Ke), Ie(Le, Je[Ke]._definition.schema);
                                    }
                                    return He.encodeAll();
                                }, De.decode = function(Fe, Ge) {
                                    var He = new Cc(),
                                        Ie = new De();
                                    Ie.decode(Fe, Ge);
                                    var Je = Ie.types.reduce(function(Ke, Le) {
                                        var Me = function(Ne) {
                                                function Oe() {
                                                    return null !== Ne && Ne.apply(this, arguments) || this;
                                                }
                                                return Yb(Oe, Ne), Oe;
                                            }(_qe),
                                            Ne = Le.id;
                                        return Ke[Ne] = Me, He.add(Me, Ne), Ke;
                                    }, {});
                                    Ie.types.forEach(function(Ke) {
                                        var Le = Je[Ke.id];
                                        Ke.fields.forEach(function(Me) {
                                            var Ne;
                                            if (void 0 !== Me.referencedType) {
                                                var Oe = Me.type,
                                                    Pe = Je[Me.referencedType];
                                                if (!Pe) {
                                                    var Qe = Me.type.split(':');
                                                    Oe = Qe[0], Pe = Qe[1];
                                                }
                                                'ref' === Oe ? Ec(Pe, {
                                                    context: He
                                                })(Le.prototype, Me.name) : Ec(((Ne = {})[Oe] = Pe, Ne), {
                                                    context: He
                                                })(Le.prototype, Me.name);
                                            } else
                                                Ec(Me.type, {
                                                    context: He
                                                })(Le.prototype, Me.name);
                                        });
                                    });
                                    var Ke = Je[Ie.rootType],
                                        Le = new Ke();
                                    for (var Me in Ke._definition.schema) {
                                        var Ne = Ke._definition.schema[Me];
                                        'string' != typeof Ne && (Le[Me] = 'function' == typeof Ne ? new Ne() : new(zc(Object.keys(Ne)[0])).constructor());
                                    }
                                    return Le;
                                }, Zb([Ec([Ae], ye)], De.prototype, 'types', void 0), Zb([Ec('number', ye)], De.prototype, 'rootType', void 0), De;
                            }(_qe);
                        yc('map', {
                            constructor: wc
                        }), yc('array', {
                            constructor: uc
                        }), yc('set', {
                            constructor: ee
                        }), yc('collection', {
                            constructor: de
                        }), Wb.ArraySchema = uc, Wb.CollectionSchema = de, Wb.Context = Cc, Wb.MapSchema = wc, Wb.Reflection = Be, Wb.ReflectionField = ze, Wb.ReflectionType = Ae, Wb.Schema = _qe, Wb.SchemaDefinition = Ac, Wb.SetSchema = ee, Wb.decode = ce, Wb.defineTypes = Ic, Wb.deprecated = Hc, Wb.dumpChanges = re, Wb.encode = sd, Wb.filter = Fc, Wb.filterChildren = Gc, Wb.hasFilter = Bc, Wb.registerType = yc, Wb.type = Ec, Object.defineProperty(Wb, '__esModule', {
                            value: !0
                        });
                    });
                }),
                Ub = function() {
                    function Vb(Wb, Xb) {
                        var Yb = this;
                        this.onStateChange = Pb(), this.onError = Pb(), this.onLeave = Pb(), this.onJoin = Pb(), this.hasJoined = !1, this.onMessageHandlers = Nb(), this.roomId = null, this.name = Wb, Xb && (this.serializer = new(Lb('schema'))(), this.rootSchema = Xb, this.serializer.state = new Xb()), this.onError(function(Zb, $b) {
                            var ac;
                            return null === (ac = console.warn) || void 0 === ac ? void 0 : ac.call(console, 'colyseus.js - onError => ('.concat(Zb, ') ').concat($b));
                        }), this.onLeave(function() {
                            return Yb.removeAllListeners();
                        });
                    }
                    return Object.defineProperty(Vb.prototype, 'id', {
                        get: function() {
                            return this.roomId;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Vb.prototype.connect = function(Xb, Yb, Zb) {
                        void 0 === Zb && (Zb = this);
                        var $b = new wb();
                        Zb.connection = $b, $b.events.onmessage = Vb.prototype.onMessageCallback.bind(Zb), $b.events.onclose = function(ac) {
                            var bc;
                            if (!Zb.hasJoined)
                                return null === (bc = console.warn) || void 0 === bc || bc.call(console, 'Room connection was closed unexpectedly ('.concat(ac.code, '): ').concat(ac.reason)), void Zb.onError.invoke(ac.code, ac.reason);
                            ac.code === Db.DEVMODE_RESTART && Yb ? Yb() : (Zb.onLeave.invoke(ac.code), Zb.destroy());
                        }, $b.events.onerror = function(ac) {
                            var bc;
                            null === (bc = console.warn) || void 0 === bc || bc.call(console, 'Room, onError ('.concat(ac.code, '): ').concat(ac.reason)), Zb.onError.invoke(ac.code, ac.reason);
                        }, $b.connect(Xb);
                    }, Vb.prototype.leave = function(Xb) {
                        var Yb = this;
                        return void 0 === Xb && (Xb = !0), new Promise(function(Zb) {
                            Yb.onLeave(function($b) {
                                return Zb($b);
                            }), Yb.connection ? Xb ? Yb.connection.send([Tb.Protocol.LEAVE_ROOM]) : Yb.connection.close() : Yb.onLeave.invoke(Db.CONSENTED);
                        });
                    }, Vb.prototype.onMessage = function(Xb, Yb) {
                        return this.onMessageHandlers.on(this.getMessageHandlerKey(Xb), Yb);
                    }, Vb.prototype.send = function(Xb, Yb) {
                        var Zb, $b = [Tb.Protocol.ROOM_DATA];
                        if ('string' == typeof Xb ? Tb.encode.string($b, Xb) : Tb.encode.number($b, Xb), void 0 !== Yb) {
                            var ac = bb(Yb);
                            (Zb = new Uint8Array($b.length + ac.byteLength)).set(new Uint8Array($b), 0), Zb.set(new Uint8Array(ac), $b.length);
                        } else
                            Zb = new Uint8Array($b);
                        this.connection.send(Zb.buffer);
                    }, Vb.prototype.sendBytes = function(Xb, Yb) {
                        var Zb, $b = [Tb.Protocol.ROOM_DATA_BYTES];
                        'string' == typeof Xb ? Tb.encode.string($b, Xb) : Tb.encode.number($b, Xb), (Zb = new Uint8Array($b.length + (Yb.byteLength || Yb.length))).set(new Uint8Array($b), 0), Zb.set(new Uint8Array(Yb), $b.length), this.connection.send(Zb.buffer);
                    }, Object.defineProperty(Vb.prototype, 'state', {
                        get: function() {
                            return this.serializer.getState();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Vb.prototype.removeAllListeners = function() {
                        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {};
                    }, Vb.prototype.onMessageCallback = function(Xb) {
                        var Yb = Array.from(new Uint8Array(Xb.data)),
                            Zb = Yb[0];
                        if (Zb === Tb.Protocol.JOIN_ROOM) {
                            var $b = 1,
                                ac = xb(Yb, $b);
                            if ($b += Eb(ac), this.serializerId = xb(Yb, $b), $b += Eb(this.serializerId), !this.serializer) {
                                var bc = Lb(this.serializerId);
                                this.serializer = new bc();
                            }
                            Yb.length > $b && this.serializer.handshake && this.serializer.handshake(Yb, {
                                offset: $b
                            }), this.reconnectionToken = ''.concat(this.roomId, ':').concat(ac), this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([Tb.Protocol.JOIN_ROOM]);
                        } else if (Zb === Tb.Protocol.ERROR) {
                            var cc = {
                                    offset: 1
                                },
                                dc = Tb.decode.number(Yb, cc),
                                ec = Tb.decode.string(Yb, cc);
                            this.onError.invoke(dc, ec);
                        } else if (Zb === Tb.Protocol.LEAVE_ROOM)
                            this.leave();
                        else if (Zb === Tb.Protocol.ROOM_DATA_SCHEMA) {
                            var fc = {
                                offset: 1
                            };
                            (ec = new(t = (this.serializer.getState().constructor._context.get(Tb.decode.number(Yb, fc))))()).decode(Yb, fc), this.dispatchMessage(t, ec);
                        } else if (Zb === Tb.Protocol.ROOM_STATE)
                            Yb.shift(), this.setState(Yb);
                        else if (Zb === Tb.Protocol.ROOM_STATE_PATCH)
                            Yb.shift(), this.patch(Yb);
                        else if (Zb === Tb.Protocol.ROOM_DATA) {
                            var gc = {
                                    offset: 1
                                },
                                hc = Tb.decode.stringCheck(Yb, gc) ? Tb.decode.string(Yb, gc) : Tb.decode.number(Yb, gc);
                            ec = Yb.length > gc.offset ? A(Xb.data, gc.offset) : void 0, this.dispatchMessage(hc, ec);
                        } else if (Zb === Tb.Protocol.ROOM_DATA_BYTES) {
                            var ic = {
                                offset: 1
                            };
                            hc = Tb.decode.stringCheck(Yb, ic) ? Tb.decode.string(Yb, ic) : Tb.decode.number(Yb, ic), this.dispatchMessage(hc, new Uint8Array(Yb.slice(ic.offset)));
                        }
                    }, Vb.prototype.setState = function(Xb) {
                        this.serializer.setState(Xb), this.onStateChange.invoke(this.serializer.getState());
                    }, Vb.prototype.patch = function(Xb) {
                        this.serializer.patch(Xb), this.onStateChange.invoke(this.serializer.getState());
                    }, Vb.prototype.dispatchMessage = function(Xb, Yb) {
                        var Zb, $b = this.getMessageHandlerKey(Xb);
                        this.onMessageHandlers.events[$b] ? this.onMessageHandlers.emit($b, Yb) : this.onMessageHandlers.events['*'] ? this.onMessageHandlers.emit('*', Xb, Yb) : null === (Zb = console.warn) || void 0 === Zb || Zb.call(console, 'colyseus.js: onMessage() not registered for type \''.concat(Xb, '\'.'));
                    }, Vb.prototype.destroy = function() {
                        this.serializer && this.serializer.teardown();
                    }, Vb.prototype.getMessageHandlerKey = function(Xb) {
                        switch (typeof Xb) {
                            case 'function':
                                return '$'.concat(Xb._typeid);
                            case 'string':
                                return Xb;
                            case 'number':
                                return 'i'.concat(Xb);
                            default:
                                throw new Error('invalid message type.');
                        }
                    }, Vb;
                }();

            function Vb(Wb, Xb) {
                Xb.statusMessage = Wb.statusText, Xb.statusCode = Wb.status, Xb.data = Wb.body;
            }

            function Wb(Xb, Yb, Zb) {
                var $b, ac, bc = (Zb = Zb || {}).body;
                return Zb.method = Xb, Zb.headers = Zb.headers || {}, bc instanceof FormData || bc && 'object' == typeof bc && (Zb.headers['content-type'] = 'application/json', Zb.body = JSON.stringify(bc)), Zb.withCredentials && (Zb.credentials = 'include'), Zb.timeout && (g = new AbortController(), Zb.signal = g.signal, $b = setTimeout(g.abort, Zb.timeout)), new Promise((cc, dc) => {
                    fetch(Yb, Zb).then((ec, fc) => {
                        clearTimeout($b), Vb(ec, ec), fc = ec.status >= 400 ? dc : cc, (bc = ec.headers.get('content-type')) && ~bc.indexOf('application/json') ? ec.text().then(gc => {
                            try {
                                ec.data = JSON.parse(gc, Zb.reviver), fc(ec);
                            } catch (gc) {
                                gc.headers = ec.headers, Vb(ec, gc), dc(gc);
                            }
                        }) : fc(ec);
                    }).catch(ec => {
                        ec.timeout = g && g.signal.aborted, dc(ec);
                    });
                });
            }
            var $b, ac, bc, cc, dc, ec = Wb.bind(Wb, 'GET'),
                fc = Wb.bind(Wb, 'POST'),
                gc = Wb.bind(Wb, 'PATCH'),
                hc = Wb.bind(Wb, 'DELETE'),
                ic = Wb.bind(Wb, 'PUT'),
                jc = {
                    del: hc,
                    get: ec,
                    patch: gc,
                    post: fc,
                    put: ic,
                    send: Wb
                },
                kc = e({
                    __proto__: null,
                    default: jc,
                    del: hc,
                    get: ec,
                    patch: gc,
                    post: fc,
                    put: ic,
                    send: Wb
                }, [jc]),
                lc = function() {
                    function mc(nc) {
                        this.client = nc;
                    }
                    return mc.prototype.get = function(nc, oc) {
                        return void 0 === oc && (oc = {}), this.request('get', nc, oc);
                    }, mc.prototype.post = function(nc, oc) {
                        return void 0 === oc && (oc = {}), this.request('post', nc, oc);
                    }, mc.prototype.del = function(nc, oc) {
                        return void 0 === oc && (oc = {}), this.request('del', nc, oc);
                    }, mc.prototype.put = function(nc, oc) {
                        return void 0 === oc && (oc = {}), this.request('put', nc, oc);
                    }, mc.prototype.request = function(nc, oc, pc) {
                        return void 0 === pc && (pc = {}), kc[nc](this.client.getHttpEndpoint(oc), this.getOptions(pc)).catch(function(qc) {
                            var rc;
                            throw new nb(qc.statusCode || -1, (null === (rc = qc.data) || void 0 === rc ? void 0 : rc.error) || qc.statusMessage || qc.message || 'offline');
                        });
                    }, mc.prototype.getOptions = function(nc) {
                        return this.authToken && (nc.headers || (nc.headers = {}), nc.headers.Authorization = 'Bearer '.concat(this.authToken), nc.withCredentials = !0), nc;
                    }, mc;
                }();

            function mc() {
                return $b || ($b = 'undefined' != typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : 'undefined' != typeof window && window.localStorage ? window.localStorage : {
                    cache: {},
                    setItem: function(nc, oc) {
                        this.cache[nc] = oc;
                    },
                    getItem: function(nc) {
                        this.cache[nc];
                    },
                    removeItem: function(nc) {
                        delete this.cache[nc];
                    }
                }), $b;
            }

            function nc(oc, pc) {
                mc().setItem(oc, pc);
            }

            function oc(pc) {
                mc().removeItem(pc);
            }

            function pc(qc, rc) {
                var sc = mc().getItem(qc);
                'undefined' != typeof Promise && e instanceof Promise ? e.then(function(tc) {
                    return rc(tc);
                }) : rc(e);
            }
            var rc, sc = function() {
                function tc(uc) {
                    var vc = this;
                    this.http = uc, this.settings = {
                        path: '/auth',
                        key: 'colyseus-auth-token'
                    }, ac.set(this, !1), bc.set(this, void 0), cc.set(this, void 0), dc.set(this, Nb()), pc(this.settings.key, function(wc) {
                        return vc.token = wc;
                    });
                }
                return Object.defineProperty(tc.prototype, 'token', {
                    get: function() {
                        return this.http.authToken;
                    },
                    set: function(vc) {
                        this.http.authToken = vc;
                    },
                    enumerable: !1,
                    configurable: !0
                }), tc.prototype.onChange = function(vc) {
                    var wc = this,
                        xc = q(this, dc, 'f').on('change', vc);
                    return q(this, ac, 'f') || r(this, bc, new Promise(function(yc, zc) {
                        wc.getUserData().then(function(Ac) {
                            wc.emitChange(Eb(Eb({}, Ac), {
                                token: wc.token
                            }));
                        }).catch(function(Ac) {
                            wc.emitChange({
                                user: null,
                                token: void 0
                            });
                        }).finally(function() {
                            yc();
                        });
                    }), 'f'), r(this, ac, !0, 'f'), xc;
                }, tc.prototype.getUserData = function() {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(vc) {
                            switch (vc.label) {
                                case 0:
                                    return this.token ? [
                                        4,
                                        this.http.get(''.concat(this.settings.path, '/userdata'))
                                    ] : [
                                        3,
                                        2
                                    ];
                                case 1:
                                    return [
                                        2,
                                        vc.sent().data
                                    ];
                                case 2:
                                    throw new Error('missing auth.token');
                            }
                        });
                    });
                }, tc.prototype.registerWithEmailAndPassword = function(vc, wc, xc) {
                    return j(this, void 0, void 0, function() {
                        var yc;
                        return k(this, function(zc) {
                            switch (zc.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/register'), {
                                            body: {
                                                email: vc,
                                                password: wc,
                                                options: xc
                                            }
                                        })
                                    ];
                                case 1:
                                    return yc = zc.sent().data, this.emitChange(yc), [
                                        2,
                                        yc
                                    ];
                            }
                        });
                    });
                }, tc.prototype.signInWithEmailAndPassword = function(vc, wc) {
                    return j(this, void 0, void 0, function() {
                        var xc;
                        return k(this, function(yc) {
                            switch (yc.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/login'), {
                                            body: {
                                                email: vc,
                                                password: wc
                                            }
                                        })
                                    ];
                                case 1:
                                    return xc = yc.sent().data, this.emitChange(xc), [
                                        2,
                                        xc
                                    ];
                            }
                        });
                    });
                }, tc.prototype.signInAnonymously = function(vc) {
                    return j(this, void 0, void 0, function() {
                        var wc;
                        return k(this, function(xc) {
                            switch (xc.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/anonymous'), {
                                            body: {
                                                options: vc
                                            }
                                        })
                                    ];
                                case 1:
                                    return wc = xc.sent().data, this.emitChange(wc), [
                                        2,
                                        wc
                                    ];
                            }
                        });
                    });
                }, tc.prototype.sendPasswordResetEmail = function(vc) {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(wc) {
                            switch (wc.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/forgot-password'), {
                                            body: {
                                                email: vc
                                            }
                                        })
                                    ];
                                case 1:
                                    return [
                                        2,
                                        wc.sent().data
                                    ];
                            }
                        });
                    });
                }, tc.prototype.signInWithProvider = function(vc, wc) {
                    return void 0 === wc && (wc = {}), j(this, void 0, void 0, function() {
                        var xc = this;
                        return k(this, function(yc) {
                            return [
                                2,
                                new Promise(function(zc, Ac) {
                                    var Bc = wc.width || 480,
                                        Cc = wc.height || 768,
                                        Dc = xc.token ? '?token='.concat(xc.token) : '',
                                        Ec = 'Login with '.concat(vc[0].toUpperCase() + vc.substring(1)),
                                        Fc = xc.http.client.getHttpEndpoint(''.concat(wc.prefix || ''.concat(xc.settings.path, '/provider'), '/').concat(vc).concat(Dc)),
                                        Gc = screen.width / 2 - Bc / 2,
                                        Hc = screen.height / 2 - Cc / 2;
                                    r(xc, cc, window.open(Fc, Ec, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + Bc + ', height=' + Cc + ', top=' + Hc + ', left=' + Gc), 'f');
                                    var Ic = function(Jc) {
                                            void 0 === Jc.data.user && void 0 === Jc.data.token || (clearInterval(rb), q(xc, cc, 'f').close(), r(xc, cc, void 0, 'f'), window.removeEventListener('message', Ic), void 0 !== Jc.data.error ? Ac(Jc.data.error) : (zc(Jc.data), xc.emitChange(Jc.data)));
                                        },
                                        Jc = setInterval(function() {
                                            q(xc, cc, 'f') && !q(xc, cc, 'f').closed || (r(xc, cc, void 0, 'f'), Ac('cancelled'), window.removeEventListener('message', Ic));
                                        }, 200);
                                    window.addEventListener('message', Ic);
                                })
                            ];
                        });
                    });
                }, tc.prototype.signOut = function() {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(vc) {
                            return this.emitChange({
                                user: null,
                                token: null
                            }), [2];
                        });
                    });
                }, tc.prototype.emitChange = function(vc) {
                    void 0 !== vc.token && (this.token = vc.token, null === vc.token ? oc(this.settings.key) : nc(this.settings.key, vc.token)), q(this, dc, 'f').emit('change', vc);
                }, tc;
            }();
            ac = new WeakMap(), bc = new WeakMap(), cc = new WeakMap(), dc = new WeakMap();
            var tc = function(uc) {
                    function vc(wc, xc) {
                        var yc = uc.call(this, wc) || this;
                        return yc.code = xc, Object.setPrototypeOf(yc, vc.prototype), yc;
                    }
                    return yc(vc, uc), vc;
                }(Error),
                uc = 'undefined' != typeof window && void 0 !== (null === (rc = null === window || void 0 === window ? void 0 : window.location) || void 0 === rc ? void 0 : rc.hostname) ? ''.concat(window.location.protocol.replace('http', 'ws'), '//').concat(window.location.hostname).concat(window.location.port && ':'.concat(window.location.port)) : 'ws://127.0.0.1:2567',
                vc = function() {
                    function wc(xc) {
                        if (void 0 === xc && (xc = uc), 'string' == typeof xc) {
                            var yc = new URL(xc),
                                zc = 'https:' === yc.protocol || 'wss:' === yc.protocol,
                                Ac = Number(yc.port || (zc ? 443 : 80));
                            this.settings = {
                                hostname: yc.hostname,
                                pathname: yc.pathname,
                                port: Ac,
                                secure: zc
                            };
                        } else
                            void 0 === xc.port && (xc.port = xc.secure ? 443 : 80), void 0 === xc.pathname && (xc.pathname = ''), this.settings = xc;
                        this.settings.pathname.endsWith('/') && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new lc(this), this.auth = new sc(this.http);
                    }
                    return wc.prototype.joinOrCreate = function(Ac, Bc, Cc) {
                        return void 0 === Bc && (Bc = {}), j(this, void 0, void 0, function() {
                            return k(this, function(Dc) {
                                switch (Dc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinOrCreate', Ac, Bc, Cc)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Dc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.create = function(Ac, Bc, Cc) {
                        return void 0 === Bc && (Bc = {}), j(this, void 0, void 0, function() {
                            return k(this, function(Dc) {
                                switch (Dc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('create', Ac, Bc, Cc)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Dc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.join = function(Ac, Bc, Cc) {
                        return void 0 === Bc && (Bc = {}), j(this, void 0, void 0, function() {
                            return k(this, function(Dc) {
                                switch (Dc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('join', Ac, Bc, Cc)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Dc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.joinById = function(Ac, Bc, Cc) {
                        return void 0 === Bc && (Bc = {}), j(this, void 0, void 0, function() {
                            return k(this, function(Dc) {
                                switch (Dc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinById', Ac, Bc, Cc)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Dc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.reconnect = function(Ac, Bc) {
                        return j(this, void 0, void 0, function() {
                            var Cc, Dc, Ec;
                            return k(this, function(Fc) {
                                switch (Fc.label) {
                                    case 0:
                                        if ('string' == typeof Ac && 'string' == typeof Bc)
                                            throw new Error('DEPRECATED: .reconnect() now only accepts \'reconnectionToken\' as argument.\nYou can get this token from previously connected `room.reconnectionToken`');
                                        if (Cc = Ac.split(':'), Dc = Cc[0], Ec = Cc[1], !Dc || !Ec)
                                            throw new Error('Invalid reconnection token format.\nThe format should be roomId:reconnectionToken');
                                        return [
                                            4,
                                            this.createMatchMakeRequest('reconnect', Dc, {
                                                reconnectionToken: Ec
                                            }, Bc)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Fc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.getAvailableRooms = function(Ac) {
                        return void 0 === Ac && (Ac = ''), j(this, void 0, void 0, function() {
                            return k(this, function(Bc) {
                                switch (Bc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.get('matchmake/'.concat(Ac), {
                                                headers: {
                                                    Accept: 'application/json'
                                                }
                                            })
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Bc.sent().data
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.consumeSeatReservation = function(Ac, Bc, Cc) {
                        return j(this, void 0, void 0, function() {
                            var Dc, Ec, Fc, Gc = this;
                            return k(this, function(Hc) {
                                return (Dc = this.createRoom(Ac.room.name, Bc)).roomId = Ac.room.roomId, Dc.sessionId = Ac.sessionId, Ec = {
                                    sessionId: Dc.sessionId
                                }, Ac.reconnectionToken && (Ec.reconnectionToken = Ac.reconnectionToken), Fc = Cc || Dc, Dc.connect(this.buildEndpoint(Ac.room, Ec), Ac.devMode && function() {
                                    return j(Gc, void 0, void 0, function() {
                                        var Ic, Jc, Kc, Lc = this;
                                        return k(this, function(Mc) {
                                            return console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' Re-establishing connection with room id \'').concat(Dc.roomId, '\'...')), Ic = 0, Jc = 8, Kc = function() {
                                                return j(Lc, void 0, void 0, function() {
                                                    return k(this, function(Nc) {
                                                        switch (Nc.label) {
                                                            case 0:
                                                                Ic++, Nc.label = 1;
                                                            case 1:
                                                                return Nc.trys.push([
                                                                    1,
                                                                    3, ,
                                                                    4
                                                                ]), [
                                                                    4,
                                                                    this.consumeSeatReservation(Ac, Bc, Fc)
                                                                ];
                                                            case 2:
                                                                return Nc.sent(), console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(9989), ' Successfully re-established connection with room \'').concat(Dc.roomId, '\'')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 3:
                                                                return Nc.sent(), Ic < Jc ? (console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' retrying... (').concat(Ic, ' out of ').concat(Jc, ')')), setTimeout(Kc, 2000)) : console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(10060), ' Failed to reconnect. Is your server running? Please check server logs.')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 4:
                                                                return [2];
                                                        }
                                                    });
                                                });
                                            }, setTimeout(Kc, 2000), [2];
                                        });
                                    });
                                }, Fc), [
                                    2,
                                    new Promise(function(Ic, Jc) {
                                        var Kc = function(Lc, Mc) {
                                            return Jc(new nb(Lc, Mc));
                                        };
                                        Fc.onError.once(Kc), Fc.onJoin.once(function() {
                                            Fc.onError.remove(Kc), Ic(Fc);
                                        });
                                    })
                                ];
                            });
                        });
                    }, wc.prototype.createMatchMakeRequest = function(Ac, Bc, Cc, Dc, Ec) {
                        return void 0 === Cc && (Cc = {}), j(this, void 0, void 0, function() {
                            var Fc;
                            return k(this, function(Gc) {
                                switch (Gc.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.post('matchmake/'.concat(Ac, '/').concat(Bc), {
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(Cc)
                                            })
                                        ];
                                    case 1:
                                        if ((Fc = Gc.sent().data).error)
                                            throw new tc(Fc.error, Fc.code);
                                        return 'reconnect' === Ac && (Fc.reconnectionToken = Cc.reconnectionToken), [
                                            4,
                                            this.consumeSeatReservation(Fc, Dc, Ec)
                                        ];
                                    case 2:
                                        return [
                                            2,
                                            Gc.sent()
                                        ];
                                }
                            });
                        });
                    }, wc.prototype.createRoom = function(Ac, Bc) {
                        return new Ub(Ac, Bc);
                    }, wc.prototype.buildEndpoint = function(Ac, Bc) {
                        void 0 === Bc && (Bc = {});
                        var Cc = [];
                        for (var Dc in Bc)
                            Bc.hasOwnProperty(Dc) && Cc.push(''.concat(Dc, '=').concat(Bc[Dc]));
                        var Ec = this.settings.secure ? 'wss://' : 'ws://';
                        return Ac.publicAddress ? Ec += ''.concat(Ac.publicAddress) : Ec += ''.concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname), ''.concat(Ec, '/').concat(Ac.processId, '/').concat(Ac.roomId, '?').concat(Cc.join('&'));
                    }, wc.prototype.getHttpEndpoint = function(Ac) {
                        void 0 === Ac && (Ac = '');
                        var Bc = Ac.startsWith('/') ? Ac : '/'.concat(Ac);
                        return ''.concat(this.settings.secure ? 'https' : 'http', '://').concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(Bc);
                    }, wc.prototype.getEndpointPort = function() {
                        return 80 !== this.settings.port && 443 !== this.settings.port ? ':'.concat(this.settings.port) : '';
                    }, wc;
                }(),
                wc = function() {
                    function xc() {}
                    return xc.prototype.setState = function(yc) {
                        return this.state.decode(yc);
                    }, xc.prototype.getState = function() {
                        return this.state;
                    }, xc.prototype.patch = function(yc) {
                        return this.state.decode(yc);
                    }, xc.prototype.teardown = function() {
                        var yc, zc;
                        null === (zc = null === (yc = this.state) || void 0 === yc ? void 0 : yc.$changes) || void 0 === zc || zc.root.clearRefs();
                    }, xc.prototype.handshake = function(yc, zc) {
                        this.state ? new Tb.Reflection().decode(yc, zc) : this.state = Tb.Reflection.decode(yc, zc);
                    }, xc;
                }(),
                xc = function() {
                    function yc() {}
                    return yc.prototype.setState = function(zc) {}, yc.prototype.getState = function() {
                        return null;
                    }, yc.prototype.patch = function(zc) {}, yc.prototype.teardown = function() {}, yc.prototype.handshake = function(zc) {}, yc;
                }();
            Kb('schema', wc), Kb('none', xc), Tb.Auth = sc, Tb.Client = vc, Tb.Room = Ub, Tb.SchemaSerializer = wc, Tb.registerSerializer = Kb, Object.defineProperty(Tb, '__esModule', {
                value: !0
            });
        }(b.exports);
});