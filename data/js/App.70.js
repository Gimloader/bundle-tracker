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
                        if (1 & p[0])
                            throw p[1];
                        return p[1];
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
                    if (n)
                        throw new TypeError('Generator is already executing.');
                    for (; q && (q = 0, u[0] && (r = 0)), r;)
                        try {
                            if (n = 1, o && (p = 2 & u[0] ? o.return : u[0] ? o.throw || ((p = o.return) && p.call(o), 0) : o.next) && !(p = p.call(o, u[1])).done)
                                return p;
                            switch (o = 0, p && (u = [
                                    2 & u[0],
                                    p.value
                                ]), u[0]) {
                                case 0:
                                case 1:
                                    p = u;
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
                                    if (!((p = (p = r.trys).length > 0 && p[p.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                        r = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!p || u[1] > p[0] && u[1] < p[3])) {
                                        r.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && r.label < p[1]) {
                                        r.label = p[1], p = u;
                                        break;
                                    }
                                    if (p && r.label < p[2]) {
                                        r.label = p[2], r.ops.push(u);
                                        break;
                                    }
                                    p[2] && r.ops.pop(), r.trys.pop();
                                    continue;
                            }
                            u = m.call(l, r);
                        } catch (l) {
                            u = [
                                6,
                                l
                            ], o = 0;
                        } finally {
                            n = p = 0;
                        }
                    if (5 & u[0])
                        throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    };
                }
            }

            function l(m, n, o, p) {
                if ('a' === o && !p)
                    throw new TypeError('Private accessor was defined without a getter');
                if ('function' == typeof n ? m !== n || !p : !n.has(m))
                    throw new TypeError('Cannot read private member from an object whose class did not declare it');
                return 'm' === o ? p : 'a' === o ? p.call(m) : p ? p.value : n.get(m);
            }

            function m(n, o, p, q, r) {
                if ('m' === q)
                    throw new TypeError('Private method is not writable');
                if ('a' === q && !r)
                    throw new TypeError('Private accessor was defined without a setter');
                if ('function' == typeof o ? n !== o || !r : !o.has(n))
                    throw new TypeError('Cannot write private member to an object whose class did not declare it');
                return 'a' === q ? r.call(n, p) : r ? r.value = p : o.set(n, p), p;
            }! function(n) {
                n[n.CONSENTED = 4000] = 'CONSENTED', n[n.DEVMODE_RESTART = 4010] = 'DEVMODE_RESTART';
            }(h || (h = {}));
            var n = function(o) {
                function p(q, r) {
                    var s = o.call(this, r) || this;
                    return s.name = 'ServerError', s.code = q, s;
                }
                return g(p, o), p;
            }(Error);

            function o(p, q) {
                if (this._offset = q, p instanceof ArrayBuffer)
                    this._buffer = p, this._view = new DataView(this._buffer);
                else {
                    if (!ArrayBuffer.isView(p))
                        throw new Error('Invalid argument');
                    this._buffer = p.buffer, this._view = new DataView(this._buffer, p.byteOffset, p.byteLength);
                }
            }

            function p(q, r, s) {
                for (var t = '', u = 0, v = r, w = r + s; v < w; v++) {
                    var x = q.getUint8(v);
                    if (0 != (128 & x))
                        if (192 != (224 & x))
                            if (224 != (240 & x)) {
                                if (240 != (248 & x))
                                    throw new Error('Invalid byte ' + x.toString(16));
                                (u = (7 & x) << 18 | (63 & q.getUint8(++v)) << 12 | (63 & q.getUint8(++v)) << 6 | (63 & q.getUint8(++v)) << 0) >= 65536 ? (u -= 65536, t += String.fromCharCode(55296 + (u >>> 10), 56320 + (1023 & u))) : t += String.fromCharCode(u);
                            } else
                                t += String.fromCharCode((15 & x) << 12 | (63 & q.getUint8(++v)) << 6 | (63 & q.getUint8(++v)) << 0);
                    else
                        t += String.fromCharCode((31 & x) << 6 | 63 & q.getUint8(++v));
                    else
                        t += String.fromCharCode(x);
                }
                return t;
            }

            function q(r, s) {
                void 0 === s && (s = 0);
                var t = new o(r, s),
                    u = t._parse();
                if (t._offset !== r.byteLength)
                    throw new Error(r.byteLength - t._offset + ' trailing bytes');
                return u;
            }
            o.prototype._array = function(r) {
                for (var s = new Array(r), t = 0; t < r; t++)
                    s[t] = this._parse();
                return s;
            }, o.prototype._map = function(r) {
                for (var s = {}, t = 0; t < r; t++)
                    s[this._parse()] = this._parse();
                return s;
            }, o.prototype._str = function(r) {
                var s = p(this._view, this._offset, r);
                return this._offset += r, s;
            }, o.prototype._bin = function(r) {
                var s = this._buffer.slice(this._offset, this._offset + r);
                return this._offset += r, s;
            }, o.prototype._parse = function() {
                var r, s = this._view.getUint8(this._offset++),
                    t = 0,
                    u = 0,
                    v = 0,
                    w = 0;
                if (s < 192)
                    return s < 128 ? s : s < 144 ? this._map(15 & s) : s < 160 ? this._array(15 & s) : this._str(31 & s);
                if (s > 223)
                    return -1 * (255 - s + 1);
                switch (s) {
                    case 192:
                        return null;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 196:
                        return t = this._view.getUint8(this._offset), this._offset += 1, this._bin(t);
                    case 197:
                        return t = this._view.getUint16(this._offset), this._offset += 2, this._bin(t);
                    case 198:
                        return t = this._view.getUint32(this._offset), this._offset += 4, this._bin(t);
                    case 199:
                        if (t = this._view.getUint8(this._offset), u = this._view.getInt8(this._offset + 1), this._offset += 2, -1 === u) {
                            var x = this._view.getUint32(this._offset);
                            return v = this._view.getInt32(this._offset + 4), w = this._view.getUint32(this._offset + 8), this._offset += 12, new Date(1000 * (4294967296 * v + w) + x / 1000000);
                        }
                        return [
                            u,
                            this._bin(t)
                        ];
                    case 200:
                        return t = this._view.getUint16(this._offset), u = this._view.getInt8(this._offset + 2), this._offset += 3, [
                            u,
                            this._bin(t)
                        ];
                    case 201:
                        return t = this._view.getUint32(this._offset), u = this._view.getInt8(this._offset + 4), this._offset += 5, [
                            u,
                            this._bin(t)
                        ];
                    case 202:
                        return r = this._view.getFloat32(this._offset), this._offset += 4, r;
                    case 203:
                        return r = this._view.getFloat64(this._offset), this._offset += 8, r;
                    case 204:
                        return r = this._view.getUint8(this._offset), this._offset += 1, r;
                    case 205:
                        return r = this._view.getUint16(this._offset), this._offset += 2, r;
                    case 206:
                        return r = this._view.getUint32(this._offset), this._offset += 4, r;
                    case 207:
                        return v = this._view.getUint32(this._offset) * Math.pow(2, 32), w = this._view.getUint32(this._offset + 4), this._offset += 8, v + w;
                    case 208:
                        return r = this._view.getInt8(this._offset), this._offset += 1, r;
                    case 209:
                        return r = this._view.getInt16(this._offset), this._offset += 2, r;
                    case 210:
                        return r = this._view.getInt32(this._offset), this._offset += 4, r;
                    case 211:
                        return v = this._view.getInt32(this._offset) * Math.pow(2, 32), w = this._view.getUint32(this._offset + 4), this._offset += 8, v + w;
                    case 212:
                        return u = this._view.getInt8(this._offset), this._offset += 1, 0 === u ? void(this._offset += 1) : [
                            u,
                            this._bin(1)
                        ];
                    case 213:
                        return u = this._view.getInt8(this._offset), this._offset += 1, [
                            u,
                            this._bin(2)
                        ];
                    case 214:
                        return u = this._view.getInt8(this._offset), this._offset += 1, -1 === u ? (r = this._view.getUint32(this._offset), this._offset += 4, new Date(1000 * r)) : [
                            u,
                            this._bin(4)
                        ];
                    case 215:
                        return u = this._view.getInt8(this._offset), this._offset += 1, 0 === u ? (v = this._view.getInt32(this._offset) * Math.pow(2, 32), w = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(v + w)) : -1 === u ? (v = this._view.getUint32(this._offset), w = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1000 * (4294967296 * (3 & v) + w) + (v >>> 2) / 1000000)) : [
                            u,
                            this._bin(8)
                        ];
                    case 216:
                        return u = this._view.getInt8(this._offset), this._offset += 1, [
                            u,
                            this._bin(16)
                        ];
                    case 217:
                        return t = this._view.getUint8(this._offset), this._offset += 1, this._str(t);
                    case 218:
                        return t = this._view.getUint16(this._offset), this._offset += 2, this._str(t);
                    case 219:
                        return t = this._view.getUint32(this._offset), this._offset += 4, this._str(t);
                    case 220:
                        return t = this._view.getUint16(this._offset), this._offset += 2, this._array(t);
                    case 221:
                        return t = this._view.getUint32(this._offset), this._offset += 4, this._array(t);
                    case 222:
                        return t = this._view.getUint16(this._offset), this._offset += 2, this._map(t);
                    case 223:
                        return t = this._view.getUint32(this._offset), this._offset += 4, this._map(t);
                }
                throw new Error('Could not parse');
            };
            var r = 4294967295,
                s = 17179869183;

            function t(u, v, w) {
                for (var x = 0, y = 0, z = w.length; y < z; y++)
                    (x = w.charCodeAt(y)) < 128 ? u.setUint8(v++, x) : x < 2048 ? (u.setUint8(v++, 192 | x >> 6), u.setUint8(v++, 128 | 63 & x)) : x < 55296 || x >= 57344 ? (u.setUint8(v++, 224 | x >> 12), u.setUint8(v++, 128 | x >> 6 & 63), u.setUint8(v++, 128 | 63 & x)) : (y++, x = 65536 + ((1023 & x) << 10 | 1023 & w.charCodeAt(y)), u.setUint8(v++, 240 | x >> 18), u.setUint8(v++, 128 | x >> 12 & 63), u.setUint8(v++, 128 | x >> 6 & 63), u.setUint8(v++, 128 | 63 & x));
            }

            function u(v) {
                for (var w = 0, x = 0, y = 0, z = v.length; y < z; y++)
                    (w = v.charCodeAt(y)) < 128 ? x += 1 : w < 2048 ? x += 2 : w < 55296 || w >= 57344 ? x += 3 : (y++, x += 4);
                return x;
            }

            function v(w, x, y) {
                var z = typeof y,
                    A = 0,
                    B = 0,
                    C = 0,
                    D = 0,
                    E = 0,
                    F = 0;
                if ('string' === z) {
                    if ((E = u(y)) < 32)
                        w.push(160 | E), F = 1;
                    else if (E < 256)
                        w.push(217, E), F = 2;
                    else if (E < 65536)
                        w.push(218, E >> 8, E), F = 3;
                    else {
                        if (!(E < 4294967296))
                            throw new Error('String too long');
                        w.push(219, E >> 24, E >> 16, E >> 8, E), F = 5;
                    }
                    return x.push({
                        _str: y,
                        _length: E,
                        _offset: w.length
                    }), F + E;
                }
                if ('number' === z)
                    return Math.floor(y) === y && isFinite(y) ? y >= 0 ? y < 128 ? (w.push(y), 1) : y < 256 ? (w.push(204, y), 2) : y < 65536 ? (w.push(205, y >> 8, y), 3) : y < 4294967296 ? (w.push(206, y >> 24, y >> 16, y >> 8, y), 5) : (C = y / Math.pow(2, 32) >> 0, D = y >>> 0, w.push(207, C >> 24, C >> 16, C >> 8, C, D >> 24, D >> 16, D >> 8, D), 9) : y >= -32 ? (w.push(y), 1) : y >= -128 ? (w.push(208, y), 2) : y >= -32768 ? (w.push(209, y >> 8, y), 3) : y >= -2147483648 ? (w.push(210, y >> 24, y >> 16, y >> 8, y), 5) : (C = Math.floor(y / Math.pow(2, 32)), D = y >>> 0, w.push(211, C >> 24, C >> 16, C >> 8, C, D >> 24, D >> 16, D >> 8, D), 9) : (w.push(203), x.push({
                        _float: y,
                        _length: 8,
                        _offset: w.length
                    }), 9);
                if ('object' === z) {
                    if (null === y)
                        return w.push(192), 1;
                    if (Array.isArray(y)) {
                        if ((E = y.length) < 16)
                            w.push(144 | E), F = 1;
                        else if (E < 65536)
                            w.push(220, E >> 8, E), F = 3;
                        else {
                            if (!(E < 4294967296))
                                throw new Error('Array too large');
                            w.push(221, E >> 24, E >> 16, E >> 8, E), F = 5;
                        }
                        for (A = 0; A < E; A++)
                            F += v(w, x, y[A]);
                        return F;
                    }
                    if (y instanceof Date) {
                        var G = y.getTime(),
                            H = Math.floor(G / 1000),
                            I = 1000000 * (G - 1000 * H);
                        return H >= 0 && I >= 0 && H <= s ? 0 === I && H <= r ? (w.push(214, 255, H >> 24, H >> 16, H >> 8, H), 6) : (C = H / 4294967296, D = 4294967295 & H, w.push(215, 255, I >> 22, I >> 14, I >> 6, C, D >> 24, D >> 16, D >> 8, D), 10) : (C = Math.floor(H / 4294967296), D = H >>> 0, w.push(199, 12, 255, I >> 24, I >> 16, I >> 8, I, C >> 24, C >> 16, C >> 8, C, D >> 24, D >> 16, D >> 8, D), 15);
                    }
                    if (y instanceof ArrayBuffer) {
                        if ((E = y.byteLength) < 256)
                            w.push(196, E), F = 2;
                        else if (E < 65536)
                            w.push(197, E >> 8, E), F = 3;
                        else {
                            if (!(E < 4294967296))
                                throw new Error('Buffer too large');
                            w.push(198, E >> 24, E >> 16, E >> 8, E), F = 5;
                        }
                        return x.push({
                            _bin: y,
                            _length: E,
                            _offset: w.length
                        }), F + E;
                    }
                    if ('function' == typeof y.toJSON)
                        return v(w, x, y.toJSON());
                    var G = [],
                        H = '',
                        I = Object.keys(y);
                    for (A = 0, B = I.length; A < B; A++)
                        void 0 !== y[H = I[A]] && 'function' != typeof y[H] && G.push(H);
                    if ((E = G.length) < 16)
                        w.push(128 | E), F = 1;
                    else if (E < 65536)
                        w.push(222, E >> 8, E), F = 3;
                    else {
                        if (!(E < 4294967296))
                            throw new Error('Object too large');
                        w.push(223, E >> 24, E >> 16, E >> 8, E), F = 5;
                    }
                    for (A = 0; A < E; A++)
                        F += v(w, x, H = G[A]), F += v(w, x, y[H]);
                    return F;
                }
                if ('boolean' === z)
                    return w.push(y ? 195 : 194), 1;
                if ('undefined' === z)
                    return w.push(192), 1;
                if ('function' == typeof y.toJSON)
                    return v(w, x, y.toJSON());
                throw new Error('Could not encode');
            }

            function w(x) {
                var y = [],
                    z = [],
                    A = v(y, z, x),
                    B = new ArrayBuffer(A),
                    C = new DataView(B),
                    D = 0,
                    E = 0,
                    F = -1;
                z.length > 0 && (F = z[0]._offset);
                for (var G, H = 0, I = 0, J = 0, K = y.length; J < K; J++)
                    if (C.setUint8(E + J, y[J]), J + 1 === F) {
                        if (H = (G = z[D])._length, I = E + F, G._bin)
                            for (var L = new Uint8Array(G._bin), M = 0; M < H; M++)
                                C.setUint8(I + M, L[M]);
                        else
                            G._str ? t(C, I, G._str) : void 0 !== G._float && C.setFloat64(I, G._float);
                        E += H, z[++D] && (F = z[D]._offset);
                    }
                return B;
            }
            var x, y, z = function() {
                    throw new Error('ws does not work in the browser. Browser clients must use the native WebSocket object');
                },
                A = globalThis.WebSocket || z,
                B = function() {
                    function C(D) {
                        this.events = D;
                    }
                    return C.prototype.send = function(D) {
                        D instanceof ArrayBuffer ? this.ws.send(D) : Array.isArray(D) && this.ws.send(new Uint8Array(D).buffer);
                    }, C.prototype.connect = function(D) {
                        this.ws = new A(D, this.protocols), this.ws.binaryType = 'arraybuffer', this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror;
                    }, C.prototype.close = function(D, E) {
                        this.ws.close(D, E);
                    }, Object.defineProperty(C.prototype, 'isOpen', {
                        get: function() {
                            return this.ws.readyState === A.OPEN;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), C;
                }(),
                C = function() {
                    function D() {
                        this.events = {}, this.transport = new B(this.events);
                    }
                    return D.prototype.send = function(E) {
                        this.transport.send(E);
                    }, D.prototype.connect = function(E) {
                        this.transport.connect(E);
                    }, D.prototype.close = function(E, F) {
                        this.transport.close(E, F);
                    }, Object.defineProperty(D.prototype, 'isOpen', {
                        get: function() {
                            return this.transport.isOpen;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), D;
                }();

            function D(E, F) {
                for (var G = E[F++], H = '', I = 0, J = F, K = F + G; J < K; J++) {
                    var L = E[J];
                    if (0 != (128 & L))
                        if (192 != (224 & L))
                            if (224 != (240 & L)) {
                                if (240 != (248 & L))
                                    throw new Error('Invalid byte ' + L.toString(16));
                                (I = (7 & L) << 18 | (63 & E[++J]) << 12 | (63 & E[++J]) << 6 | (63 & E[++J]) << 0) >= 65536 ? (I -= 65536, H += String.fromCharCode(55296 + (I >>> 10), 56320 + (1023 & I))) : H += String.fromCharCode(I);
                            } else
                                H += String.fromCharCode((15 & L) << 12 | (63 & E[++J]) << 6 | (63 & E[++J]) << 0);
                    else
                        H += String.fromCharCode((31 & L) << 6 | 63 & E[++J]);
                    else
                        H += String.fromCharCode(L);
                }
                return H;
            }

            function E(F) {
                void 0 === F && (F = '');
                for (var G = 0, H = 0, I = 0, J = F.length; I < J; I++)
                    (G = F.charCodeAt(I)) < 128 ? H += 1 : G < 2048 ? H += 2 : G < 55296 || G >= 57344 ? H += 3 : (I++, H += 4);
                return H + 1;
            }
            d.Protocol = void 0, (y = d.Protocol || (d.Protocol = {}))[y.HANDSHAKE = 9] = 'HANDSHAKE', y[y.JOIN_ROOM = 10] = 'JOIN_ROOM', y[y.ERROR = 11] = 'ERROR', y[y.LEAVE_ROOM = 12] = 'LEAVE_ROOM', y[y.ROOM_DATA = 13] = 'ROOM_DATA', y[y.ROOM_STATE = 14] = 'ROOM_STATE', y[y.ROOM_STATE_PATCH = 15] = 'ROOM_STATE_PATCH', y[y.ROOM_DATA_SCHEMA = 16] = 'ROOM_DATA_SCHEMA', y[y.ROOM_DATA_BYTES = 17] = 'ROOM_DATA_BYTES', d.ErrorCode = void 0, (x = d.ErrorCode || (d.ErrorCode = {}))[x.MATCHMAKE_NO_HANDLER = 4210] = 'MATCHMAKE_NO_HANDLER', x[x.MATCHMAKE_INVALID_CRITERIA = 4211] = 'MATCHMAKE_INVALID_CRITERIA', x[x.MATCHMAKE_INVALID_ROOM_ID = 4212] = 'MATCHMAKE_INVALID_ROOM_ID', x[x.MATCHMAKE_UNHANDLED = 4213] = 'MATCHMAKE_UNHANDLED', x[x.MATCHMAKE_EXPIRED = 4214] = 'MATCHMAKE_EXPIRED', x[x.AUTH_FAILED = 4215] = 'AUTH_FAILED', x[x.APPLICATION_ERROR = 4216] = 'APPLICATION_ERROR';
            var F = {};

            function G(H, I) {
                F[H] = I;
            }

            function H(I) {
                var J = F[I];
                if (!J)
                    throw new Error('missing serializer: ' + I);
                return J;
            }
            var I = function() {
                    return {
                        emit: function(J) {
                            for (var K = [], L = 1; L < arguments.length; L++)
                                K[L - 1] = arguments[L];
                            for (var M = this.events[J] || [], N = 0, O = M.length; N < O; N++)
                                M[N].apply(M, K);
                        },
                        events: {},
                        on: function(J, K) {
                            var L, M = this;
                            return (null === (L = this.events[J]) || void 0 === L ? void 0 : L.push(K)) || (this.events[J] = [K]),
                                function() {
                                    var N;
                                    M.events[J] = null === (N = M.events[J]) || void 0 === N ? void 0 : N.filter(function(O) {
                                        return K !== O;
                                    });
                                };
                        }
                    };
                },
                J = function() {
                    function K() {
                        this.handlers = [];
                    }
                    return K.prototype.register = function(L, M) {
                        return this.handlers.push(L), this;
                    }, K.prototype.invoke = function() {
                        for (var L = this, M = [], N = 0; N < arguments.length; N++)
                            M[N] = arguments[N];
                        this.handlers.forEach(function(O) {
                            return O.apply(L, M);
                        });
                    }, K.prototype.invokeAsync = function() {
                        for (var L = this, M = [], N = 0; N < arguments.length; N++)
                            M[N] = arguments[N];
                        return Promise.all(this.handlers.map(function(O) {
                            return O.apply(L, M);
                        }));
                    }, K.prototype.remove = function(L) {
                        var M = this.handlers.indexOf(L);
                        this.handlers[M] = this.handlers[this.handlers.length - 1], this.handlers.pop();
                    }, K.prototype.clear = function() {
                        this.handlers = [];
                    }, K;
                }();

            function K() {
                var L = new J();

                function M(N) {
                    return L.register(N, null === this);
                }
                return M.once = function(N) {
                    var O = function() {
                        for (var P = [], Q = 0; Q < arguments.length; Q++)
                            P[Q] = arguments[Q];
                        N.apply(this, P), L.remove(O);
                    };
                    L.register(O);
                }, M.remove = function(N) {
                    return L.remove(N);
                }, M.invoke = function() {
                    for (var N = [], O = 0; O < arguments.length; O++)
                        N[O] = arguments[O];
                    return L.invoke.apply(L, N);
                }, M.invokeAsync = function() {
                    for (var N = [], O = 0; O < arguments.length; O++)
                        N[O] = arguments[O];
                    return L.invokeAsync.apply(L, N);
                }, M.clear = function() {
                    return L.clear();
                }, M;
            }

            function L(M) {
                var N = {
                    exports: {}
                };
                return M(N, N.exports), N.exports;
            }
            'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== a || 'undefined' != typeof self && self;
            var M = L(function(N, O) {
                    ! function(P, Q) {
                        Q(O);
                    }(0, function(P) {
                        var Q = function(R, S) {
                            return Q = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(T, U) {
                                T.__proto__ = U;
                            } || function(T, U) {
                                for (var V in U)
                                    Object.prototype.hasOwnProperty.call(U, V) && (T[V] = U[V]);
                            }, Q(R, S);
                        };

                        function R(S, T) {
                            if ('function' != typeof T && null !== T)
                                throw new TypeError('Class extends value ' + String(T) + ' is not a constructor or null');

                            function U() {
                                this.constructor = S;
                            }
                            Q(S, T), S.prototype = null === T ? Object.create(T) : (U.prototype = T.prototype, new U());
                        }

                        function S(T, U, V, W) {
                            var X, Y = arguments.length,
                                Z = Y < 3 ? U : null === W ? W = Object.getOwnPropertyDescriptor(U, V) : W;
                            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                                Z = Reflect.decorate(T, U, V, W);
                            else
                                for (var $ = T.length - 1; $ >= 0; $--)
                                    (X = T[$]) && (Z = (Y < 3 ? X(Z) : Y > 3 ? X(U, V, Z) : X(U, V)) || Z);
                            return Y > 3 && Z && Object.defineProperty(U, V, Z), Z;
                        }

                        function T(U, V, W) {
                            if (W || 2 === arguments.length)
                                for (var X, Y = 0, Z = V.length; Y < Z; Y++)
                                    !X && Y in V || (X || (X = Array.prototype.slice.call(V, 0, Y)), X[Y] = V[Y]);
                            return U.concat(S || Array.prototype.slice.call(V));
                        }
                        var U, V = 255,
                            W = 213;
                        P.OPERATION = void 0, (U = P.OPERATION || (P.OPERATION = {}))[U.ADD = 128] = 'ADD', U[U.REPLACE = 0] = 'REPLACE', U[U.DELETE = 64] = 'DELETE', U[U.DELETE_AND_ADD = 192] = 'DELETE_AND_ADD', U[U.TOUCH = 1] = 'TOUCH', U[U.CLEAR = 10] = 'CLEAR';
                        var X = function() {
                            function Y(Z, $, ab) {
                                this.changed = !1, this.changes = new Map(), this.allChanges = new Set(), this.caches = {}, this.currentCustomOperation = 0, this.ref = Z, this.setParent($, ab);
                            }
                            return Y.prototype.setParent = function(Z, $, ab) {
                                var bb = this;
                                if (this.indexes || (this.indexes = this.ref instanceof _sc ? this.ref._definition.indexes : {}), this.parent = Z, this.parentIndex = ab, $)
                                    if (this.root = $, this.ref instanceof _sc) {
                                        var cb = this.ref._definition;
                                        for (var db in cb.schema) {
                                            var eb = this.ref[db];
                                            if (eb && eb.$changes) {
                                                var fb = cb.indexes[db];
                                                eb.$changes.setParent(this.ref, $, fb);
                                            }
                                        }
                                    } else
                                        'object' == typeof this.ref && this.ref.forEach(function(cb, db) {
                                            if (cb instanceof _sc) {
                                                var eb = cb.$changes,
                                                    fb = bb.ref.$changes.indexes[db];
                                                eb.setParent(bb.ref, bb.root, fb);
                                            }
                                        });
                            }, Y.prototype.operation = function(Z) {
                                this.changes.set(--this.currentCustomOperation, Z);
                            }, Y.prototype.change = function(Z, $) {
                                void 0 === $ && ($ = P.OPERATION.ADD);
                                var ab = 'number' == typeof Z ? Z : this.indexes[Z];
                                this.assertValidIndex(ab, Z);
                                var bb = this.changes.get(ab);
                                bb && bb.op !== P.OPERATION.DELETE && bb.op !== P.OPERATION.TOUCH || this.changes.set(ab, {
                                    op: bb && bb.op === P.OPERATION.DELETE ? P.OPERATION.DELETE_AND_ADD : $,
                                    index: ab
                                }), this.allChanges.add(ab), this.changed = !0, this.touchParents();
                            }, Y.prototype.touch = function(Z) {
                                var $ = 'number' == typeof Z ? Z : this.indexes[Z];
                                this.assertValidIndex($, Z), this.changes.has($) || this.changes.set($, {
                                    op: P.OPERATION.TOUCH,
                                    index: $
                                }), this.allChanges.add($), this.touchParents();
                            }, Y.prototype.touchParents = function() {
                                this.parent && this.parent.$changes.touch(this.parentIndex);
                            }, Y.prototype.getType = function(Z) {
                                if (this.ref._definition)
                                    return (Y = this.ref._definition).schema[Y.fieldsByIndex[Z]];
                                var $, ab = ($ = this.parent._definition).schema[$.fieldsByIndex[this.parentIndex]];
                                return Object.values(ab)[0];
                            }, Y.prototype.getChildrenFilter = function() {
                                var Z = this.parent._definition.childFilters;
                                return Z && Z[this.parentIndex];
                            }, Y.prototype.getValue = function(Z) {
                                return this.ref.getByIndex(Z);
                            }, Y.prototype.delete = function(Z) {
                                var $ = 'number' == typeof Z ? Z : this.indexes[Z];
                                if (void 0 !== $) {
                                    var ab = this.getValue($);
                                    this.changes.set($, {
                                        op: P.OPERATION.DELETE,
                                        index: $
                                    }), this.allChanges.delete($), delete this.caches[$], ab && ab.$changes && (ab.$changes.parent = void 0), this.changed = !0, this.touchParents();
                                } else
                                    console.warn('@colyseus/schema '.concat(this.ref.constructor.name, ': trying to delete non-existing index: ').concat(Z, ' (').concat($, ')'));
                            }, Y.prototype.discard = function(Z, $) {
                                var ab = this;
                                void 0 === Z && (Z = !1), void 0 === $ && ($ = !1), this.ref instanceof _sc || this.changes.forEach(function(bb) {
                                    if (bb.op === P.OPERATION.DELETE) {
                                        var cb = ab.ref.getIndex(bb.index);
                                        delete ab.indexes[cb];
                                    }
                                }), this.changes.clear(), this.changed = Z, $ && this.allChanges.clear(), this.currentCustomOperation = 0;
                            }, Y.prototype.discardAll = function() {
                                var Z = this;
                                this.changes.forEach(function($) {
                                    var ab = Z.getValue($.index);
                                    ab && ab.$changes && ab.$changes.discardAll();
                                }), this.discard();
                            }, Y.prototype.cache = function(Z, $) {
                                this.caches[Z] = $;
                            }, Y.prototype.clone = function() {
                                return new Y(this.ref, this.parent, this.root);
                            }, Y.prototype.ensureRefId = function() {
                                void 0 === this.refId && (this.refId = this.root.getNextUniqueId());
                            }, Y.prototype.assertValidIndex = function(Z, $) {
                                if (void 0 === Z)
                                    throw new Error('ChangeTree: missing index for field "'.concat($, '"'));
                            }, Y;
                        }();

                        function Y(Z, $, ab, bb) {
                            return Z[$] || (Z[$] = []), Z[$].push(ab), null == bb || bb.forEach(function(cb, db) {
                                    return ab(cb, db);
                                }),
                                function() {
                                    return n(Z[$], Z[$].indexOf(ab));
                                };
                        }

                        function Z($) {
                            var ab = this,
                                bb = 'string' != typeof this.$changes.getType();
                            this.$items.forEach(function(cb, db) {
                                $.push({
                                    refId: ab.$changes.refId,
                                    op: P.OPERATION.DELETE,
                                    field: db,
                                    value: void 0,
                                    previousValue: cb
                                }), bb && ab.$changes.root.removeRef(cb.$changes.refId);
                            });
                        }

                        function $(ab, bb) {
                            if (-1 === bb || bb >= ab.length)
                                return !1;
                            for (var cb = ab.length - 1, db = bb; db < cb; db++)
                                ab[db] = ab[db + 1];
                            return ab.length = cb, !0;
                        }
                        var ab = function(bb, cb) {
                            var db = bb.toString(),
                                eb = cb.toString();
                            return db < eb ? -1 : db > eb ? 1 : 0;
                        };

                        function bb(cb) {
                            return cb.$proxy = !0, cb = new Proxy(cb, {
                                get: function(db, eb) {
                                    return 'symbol' == typeof eb || isNaN(eb) ? db[eb] : db.at(eb);
                                },
                                set: function(db, eb, fb) {
                                    if ('symbol' == typeof eb || isNaN(eb))
                                        db[eb] = fb;
                                    else {
                                        var gb = Array.from(db.$items.keys()),
                                            hb = parseInt(gb[eb] || eb);
                                        null == fb ? db.deleteAt(hb) : db.setAt(hb, fb);
                                    }
                                    return !0;
                                },
                                deleteProperty: function(db, eb) {
                                    return 'number' == typeof eb ? db.deleteAt(eb) : delete db[eb], !0;
                                }
                            });
                        }
                        var cb = function() {
                            function db() {
                                for (var eb = [], fb = 0; fb < arguments.length; fb++)
                                    eb[fb] = arguments[fb];
                                this.$changes = new X(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, this.push.apply(this, eb);
                            }
                            return db.prototype.onAdd = function(eb, fb) {
                                return void 0 === fb && (fb = !0), Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.ADD, eb, fb ? this.$items : void 0);
                            }, db.prototype.onRemove = function(eb) {
                                return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.DELETE, eb);
                            }, db.prototype.onChange = function(eb) {
                                return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.REPLACE, eb);
                            }, db.is = function(eb) {
                                return Array.isArray(eb) || void 0 !== eb.array;
                            }, Object.defineProperty(db.prototype, 'length', {
                                get: function() {
                                    return this.$items.size;
                                },
                                set: function(eb) {
                                    0 === eb ? this.clear() : this.splice(eb, this.length - eb);
                                },
                                enumerable: !1,
                                configurable: !0
                            }), db.prototype.push = function() {
                                for (var eb, fb = this, gb = [], hb = 0; hb < arguments.length; hb++)
                                    gb[hb] = arguments[hb];
                                return gb.forEach(function(ib) {
                                    eb = fb.$refId++, fb.setAt(eb, ib);
                                }), eb;
                            }, db.prototype.pop = function() {
                                var eb = Array.from(this.$indexes.values()).pop();
                                if (void 0 !== eb) {
                                    this.$changes.delete(eb), this.$indexes.delete(eb);
                                    var fb = this.$items.get(eb);
                                    return this.$items.delete(eb), fb;
                                }
                            }, db.prototype.at = function(eb) {
                                var fb = Array.from(this.$items.keys())[eb];
                                return this.$items.get(fb);
                            }, db.prototype.setAt = function(eb, fb) {
                                var gb, hb;
                                void 0 !== fb.$changes && fb.$changes.setParent(this, this.$changes.root, eb);
                                var ib = null !== (hb = null === (gb = this.$changes.indexes[eb]) || void 0 === gb ? void 0 : gb.op) && void 0 !== hb ? hb : P.OPERATION.ADD;
                                this.$changes.indexes[eb] = eb, this.$indexes.set(eb, eb), this.$items.set(eb, fb), this.$changes.change(eb, ib);
                            }, db.prototype.deleteAt = function(eb) {
                                var fb = Array.from(this.$items.keys())[eb];
                                return void 0 !== fb && this.$deleteAt(fb);
                            }, db.prototype.$deleteAt = function(eb) {
                                return this.$changes.delete(eb), this.$indexes.delete(eb), this.$items.delete(eb);
                            }, db.prototype.clear = function(eb) {
                                this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), eb && Z.call(this, eb), this.$items.clear(), this.$changes.operation({
                                    index: 0,
                                    op: P.OPERATION.CLEAR
                                }), this.$changes.touchParents();
                            }, db.prototype.concat = function() {
                                for (var eb, fb = [], gb = 0; gb < arguments.length; gb++)
                                    fb[gb] = arguments[gb];
                                return new(db.bind.apply(db, T([void 0], (eb = Array.from(this.$items.values())).concat.apply(eb, fb), !1)))();
                            }, db.prototype.join = function(eb) {
                                return Array.from(this.$items.values()).join(eb);
                            }, db.prototype.reverse = function() {
                                var eb = this,
                                    fb = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).reverse().forEach(function(gb, hb) {
                                    eb.setAt(fb[hb], gb);
                                }), this;
                            }, db.prototype.shift = function() {
                                var eb = Array.from(this.$items.keys()).shift();
                                if (void 0 !== eb) {
                                    var fb = this.$items.get(eb);
                                    return this.$deleteAt(eb), fb;
                                }
                            }, db.prototype.slice = function(eb, fb) {
                                var gb = new db();
                                return gb.push.apply(gb, Array.from(this.$items.values()).slice(eb, fb)), gb;
                            }, db.prototype.sort = function(eb) {
                                var fb = this;
                                void 0 === eb && (eb = ab);
                                var gb = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).sort(eb).forEach(function(hb, ib) {
                                    fb.setAt(gb[ib], hb);
                                }), this;
                            }, db.prototype.splice = function(eb, fb) {
                                void 0 === fb && (fb = this.length - eb);
                                for (var gb = Array.from(this.$items.keys()), hb = [], ib = eb; ib < eb + fb; ib++)
                                    hb.push(this.$items.get(gb[ib])), this.$deleteAt(gb[ib]);
                                return hb;
                            }, db.prototype.unshift = function() {
                                for (var eb = this, fb = [], gb = 0; gb < arguments.length; gb++)
                                    fb[gb] = arguments[gb];
                                var hb = this.length,
                                    ib = fb.length,
                                    jb = Array.from(this.$items.values());
                                return fb.forEach(function(kb, lb) {
                                    eb.setAt(lb, kb);
                                }), jb.forEach(function(kb, lb) {
                                    eb.setAt(ib + lb, kb);
                                }), hb + ib;
                            }, db.prototype.indexOf = function(eb, fb) {
                                return Array.from(this.$items.values()).indexOf(eb, fb);
                            }, db.prototype.lastIndexOf = function(eb, fb) {
                                return void 0 === fb && (fb = this.length - 1), Array.from(this.$items.values()).lastIndexOf(eb, fb);
                            }, db.prototype.every = function(eb, fb) {
                                return Array.from(this.$items.values()).every(eb, fb);
                            }, db.prototype.some = function(eb, fb) {
                                return Array.from(this.$items.values()).some(eb, fb);
                            }, db.prototype.forEach = function(eb, fb) {
                                Array.from(this.$items.values()).forEach(eb, fb);
                            }, db.prototype.map = function(eb, fb) {
                                return Array.from(this.$items.values()).map(eb, fb);
                            }, db.prototype.filter = function(eb, fb) {
                                return Array.from(this.$items.values()).filter(eb, fb);
                            }, db.prototype.reduce = function(eb, fb) {
                                return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
                            }, db.prototype.reduceRight = function(eb, fb) {
                                return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
                            }, db.prototype.find = function(eb, fb) {
                                return Array.from(this.$items.values()).find(eb, fb);
                            }, db.prototype.findIndex = function(eb, fb) {
                                return Array.from(this.$items.values()).findIndex(eb, fb);
                            }, db.prototype.fill = function(eb, fb, gb) {
                                throw new Error('ArraySchema#fill() not implemented');
                            }, db.prototype.copyWithin = function(eb, fb, gb) {
                                throw new Error('ArraySchema#copyWithin() not implemented');
                            }, db.prototype.toString = function() {
                                return this.$items.toString();
                            }, db.prototype.toLocaleString = function() {
                                return this.$items.toLocaleString();
                            }, db.prototype[Symbol.iterator] = function() {
                                return Array.from(this.$items.values())[Symbol.iterator]();
                            }, db.prototype.entries = function() {
                                return this.$items.entries();
                            }, db.prototype.keys = function() {
                                return this.$items.keys();
                            }, db.prototype.values = function() {
                                return this.$items.values();
                            }, db.prototype.includes = function(eb, fb) {
                                return Array.from(this.$items.values()).includes(eb, fb);
                            }, db.prototype.flatMap = function(eb, fb) {
                                throw new Error('ArraySchema#flatMap() is not supported.');
                            }, db.prototype.flat = function(eb) {
                                throw new Error('ArraySchema#flat() is not supported.');
                            }, db.prototype.findLast = function() {
                                var eb = Array.from(this.$items.values());
                                return eb.findLast.apply(eb, arguments);
                            }, db.prototype.findLastIndex = function() {
                                var eb = Array.from(this.$items.values());
                                return eb.findLastIndex.apply(eb, arguments);
                            }, db.prototype.setIndex = function(eb, fb) {
                                this.$indexes.set(eb, fb);
                            }, db.prototype.getIndex = function(eb) {
                                return this.$indexes.get(eb);
                            }, db.prototype.getByIndex = function(eb) {
                                return this.$items.get(this.$indexes.get(eb));
                            }, db.prototype.deleteByIndex = function(eb) {
                                var fb = this.$indexes.get(eb);
                                this.$items.delete(fb), this.$indexes.delete(eb);
                            }, db.prototype.toArray = function() {
                                return Array.from(this.$items.values());
                            }, db.prototype.toJSON = function() {
                                return this.toArray().map(function(eb) {
                                    return 'function' == typeof eb.toJSON ? eb.toJSON() : eb;
                                });
                            }, db.prototype.clone = function(eb) {
                                return eb ? new(db.bind.apply(db, T([void 0], Array.from(this.$items.values()), !1)))() : new(db.bind.apply(db, T([void 0], this.map(function(fb) {
                                    return fb.$changes ? fb.clone() : fb;
                                }), !1)))();
                            }, db;
                        }();

                        function db(eb) {
                            return eb.$proxy = !0, eb = new Proxy(eb, {
                                get: function(fb, gb) {
                                    return 'symbol' != typeof gb && void 0 === fb[gb] ? fb.get(gb) : fb[gb];
                                },
                                set: function(fb, gb, hb) {
                                    return 'symbol' != typeof gb && -1 === gb.indexOf('$') && 'onAdd' !== gb && 'onRemove' !== gb && 'onChange' !== gb ? fb.set(gb, hb) : fb[gb] = hb, !0;
                                },
                                deleteProperty: function(fb, gb) {
                                    return fb.delete(gb), !0;
                                }
                            });
                        }
                        var eb = function() {
                                function fb(gb) {
                                    var hb = this;
                                    if (this.$changes = new X(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, gb)
                                        if (gb instanceof Map || gb instanceof fb)
                                            gb.forEach(function(ib, jb) {
                                                return hb.set(jb, ib);
                                            });
                                        else
                                            for (var ib in gb)
                                                this.set(ib, gb[ib]);
                                }
                                return fb.prototype.onAdd = function(gb, hb) {
                                    return void 0 === hb && (hb = !0), Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.ADD, gb, hb ? this.$items : void 0);
                                }, fb.prototype.onRemove = function(gb) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.DELETE, gb);
                                }, fb.prototype.onChange = function(gb) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.REPLACE, gb);
                                }, fb.is = function(gb) {
                                    return void 0 !== gb.map;
                                }, fb.prototype[Symbol.iterator] = function() {
                                    return this.$items[Symbol.iterator]();
                                }, Object.defineProperty(fb.prototype, Symbol.toStringTag, {
                                    get: function() {
                                        return this.$items[Symbol.toStringTag];
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), fb.prototype.set = function(gb, hb) {
                                    if (null == hb)
                                        throw new Error('MapSchema#set(\''.concat(gb, '\', ').concat(hb, '): trying to set ').concat(hb, ' value on \'').concat(gb, '\'.'));
                                    var ib = void 0 !== this.$changes.indexes[gb],
                                        jb = ib ? this.$changes.indexes[gb] : this.$refId++,
                                        kb = ib ? P.OPERATION.REPLACE : P.OPERATION.ADD,
                                        lb = void 0 !== hb.$changes;
                                    return lb && hb.$changes.setParent(this, this.$changes.root, jb), ib ? lb && this.$items.get(gb) !== hb && (kb = P.OPERATION.ADD) : (this.$changes.indexes[gb] = jb, this.$indexes.set(jb, gb)), this.$items.set(gb, hb), this.$changes.change(gb, kb), this;
                                }, fb.prototype.get = function(gb) {
                                    return this.$items.get(gb);
                                }, fb.prototype.delete = function(gb) {
                                    return this.$changes.delete(gb), this.$items.delete(gb);
                                }, fb.prototype.clear = function(gb) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), gb && Z.call(this, gb), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: P.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, fb.prototype.has = function(gb) {
                                    return this.$items.has(gb);
                                }, fb.prototype.forEach = function(gb) {
                                    this.$items.forEach(gb);
                                }, fb.prototype.entries = function() {
                                    return this.$items.entries();
                                }, fb.prototype.keys = function() {
                                    return this.$items.keys();
                                }, fb.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(fb.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), fb.prototype.setIndex = function(gb, hb) {
                                    this.$indexes.set(gb, hb);
                                }, fb.prototype.getIndex = function(gb) {
                                    return this.$indexes.get(gb);
                                }, fb.prototype.getByIndex = function(gb) {
                                    return this.$items.get(this.$indexes.get(gb));
                                }, fb.prototype.deleteByIndex = function(gb) {
                                    var hb = this.$indexes.get(gb);
                                    this.$items.delete(hb), this.$indexes.delete(gb);
                                }, fb.prototype.toJSON = function() {
                                    var gb = {};
                                    return this.forEach(function(hb, ib) {
                                        gb[ib] = 'function' == typeof hb.toJSON ? hb.toJSON() : hb;
                                    }), gb;
                                }, fb.prototype.clone = function(gb) {
                                    var hb;
                                    return gb ? hb = Object.assign(new fb(), this) : (hb = new fb(), this.forEach(function(ib, jb) {
                                        ib.$changes ? hb.set(jb, ib.clone()) : hb.set(jb, ib);
                                    })), hb;
                                }, fb;
                            }(),
                            fb = {};

                        function gb(hb, ib) {
                            fb[hb] = ib;
                        }

                        function hb(ib) {
                            return fb[ib];
                        }
                        var ib = function() {
                            function jb() {
                                this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {};
                            }
                            return jb.create = function(kb) {
                                var lb = new jb();
                                return lb.schema = Object.assign({}, kb && kb.schema || {}), lb.indexes = Object.assign({}, kb && kb.indexes || {}), lb.fieldsByIndex = Object.assign({}, kb && kb.fieldsByIndex || {}), lb.descriptors = Object.assign({}, kb && kb.descriptors || {}), lb.deprecated = Object.assign({}, kb && kb.deprecated || {}), lb;
                            }, jb.prototype.addField = function(kb, lb) {
                                var mb = this.getNextFieldIndex();
                                this.fieldsByIndex[mb] = kb, this.indexes[kb] = mb, this.schema[kb] = Array.isArray(lb) ? {
                                    array: lb[0]
                                } : lb;
                            }, jb.prototype.hasField = function(kb) {
                                return void 0 !== this.indexes[kb];
                            }, jb.prototype.addFilter = function(kb, lb) {
                                return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[kb]] = lb, this.indexesWithFilters.push(this.indexes[kb]), !0;
                            }, jb.prototype.addChildrenFilter = function(kb, lb) {
                                var mb = this.indexes[kb],
                                    nb = this.schema[kb];
                                if (hb(Object.keys(nb)[0]))
                                    return this.childFilters || (this.childFilters = {}), this.childFilters[mb] = lb, !0;
                                console.warn('@filterChildren: field \''.concat(kb, '\' can\'t have children. Ignoring filter.'));
                            }, jb.prototype.getChildrenFilter = function(kb) {
                                return this.childFilters && this.childFilters[this.indexes[kb]];
                            }, jb.prototype.getNextFieldIndex = function() {
                                return Object.keys(this.schema || {}).length;
                            }, jb;
                        }();

                        function jb(kb) {
                            return kb._context && kb._context.useFilters;
                        }
                        var kb = function() {
                                function lb() {
                                    this.types = {}, this.schemas = new Map(), this.useFilters = !1;
                                }
                                return lb.prototype.has = function(mb) {
                                    return this.schemas.has(mb);
                                }, lb.prototype.get = function(mb) {
                                    return this.types[mb];
                                }, lb.prototype.add = function(mb, nb) {
                                    void 0 === nb && (nb = this.schemas.size), mb._definition = ib.create(mb._definition), mb._typeid = nb, this.types[nb] = mb, this.schemas.set(mb, nb);
                                }, lb.create = function(mb) {
                                    return void 0 === mb && (mb = {}),
                                        function(nb) {
                                            return mb.context || (mb.context = new lb()), A(nb, mb);
                                        };
                                }, lb;
                            }(),
                            lb = new kb();

                        function mb(nb, ob) {
                            return void 0 === ob && (ob = {}),
                                function(pb, qb) {
                                    var rb = ob.context || lb,
                                        sb = pb.constructor;
                                    if (sb._context = rb, !nb)
                                        throw new Error(''.concat(sb.name, ': @type() reference provided for "').concat(qb, '" is undefined. Make sure you don\'t have any circular dependencies.'));
                                    rb.has(sb) || rb.add(sb);
                                    var tb = sb._definition;
                                    if (tb.addField(qb, nb), tb.descriptors[qb]) {
                                        if (tb.deprecated[qb])
                                            return;
                                        try {
                                            throw new Error('@colyseus/schema: Duplicate \''.concat(qb, '\' definition on \'').concat(sb.name, '\'.\nCheck @type() annotation'));
                                        } catch (nb) {
                                            var ub = nb.stack.split('\n')[4].trim();
                                            throw new Error(''.concat(nb.message, ' ').concat(ub));
                                        }
                                    }
                                    var ub = cb.is(nb),
                                        vb = !ub && eb.is(nb);
                                    if ('string' != typeof nb && !_sc.is(nb)) {
                                        var wb = Object.values(nb)[0];
                                        'string' == typeof wb || rb.has(wb) || rb.add(wb);
                                    }
                                    if (ob.manual)
                                        tb.descriptors[qb] = {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        };
                                    else {
                                        var wb = '_'.concat(qb);
                                        tb.descriptors[wb] = {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !0
                                        }, tb.descriptors[qb] = {
                                            get: function() {
                                                return this[wb];
                                            },
                                            set: function(xb) {
                                                xb !== this[wb] && (null != xb ? (!ub || xb instanceof cb || (xb = new(cb.bind.apply(cb, T([void 0], xb, !1)))()), !vb || xb instanceof eb || (xb = new eb(xb)), void 0 === xb.$proxy && (vb ? xb = db(xb) : ub && (xb = bb(xb))), this.$changes.change(qb), xb.$changes && xb.$changes.setParent(this, this.$changes.root, this._definition.indexes[qb])) : this[wb] && this.$changes.delete(qb), this[wb] = xb);
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        };
                                    }
                                };
                        }

                        function nb(ob) {
                            return function(pb, qb) {
                                var rb = pb.constructor;
                                rb._definition.addFilter(qb, ob) && (rb._context.useFilters = !0);
                            };
                        }

                        function ob(pb) {
                            return function(qb, rb) {
                                var sb = qb.constructor;
                                sb._definition.addChildrenFilter(rb, pb) && (sb._context.useFilters = !0);
                            };
                        }

                        function pb(qb) {
                            return void 0 === qb && (qb = !0),
                                function(rb, sb) {
                                    var tb = rb.constructor._definition;
                                    tb.deprecated[sb] = !0, qb && (tb.descriptors[sb] = {
                                        get: function() {
                                            throw new Error(''.concat(sb, ' is deprecated.'));
                                        },
                                        set: function(ub) {},
                                        enumerable: !1,
                                        configurable: !0
                                    });
                                };
                        }

                        function qb(rb, sb, tb) {
                            for (var ub in (void 0 === tb && (tb = {}), tb.context || (tb.context = rb._context || tb.context || lb), sb))
                                mb(sb[ub], tb)(rb.prototype, ub);
                            return rb;
                        }

                        function rb(sb) {
                            for (var tb = 0, ub = 0, vb = 0, wb = sb.length; vb < wb; vb++)
                                (tb = sb.charCodeAt(vb)) < 128 ? ub += 1 : tb < 2048 ? ub += 2 : tb < 55296 || tb >= 57344 ? ub += 3 : (vb++, ub += 4);
                            return ub;
                        }

                        function sb(tb, ub, vb) {
                            for (var wb = 0, xb = 0, yb = vb.length; xb < yb; xb++)
                                (wb = vb.charCodeAt(xb)) < 128 ? tb[ub++] = wb : wb < 2048 ? (tb[ub++] = 192 | wb >> 6, tb[ub++] = 128 | 63 & wb) : wb < 55296 || wb >= 57344 ? (tb[ub++] = 224 | wb >> 12, tb[ub++] = 128 | wb >> 6 & 63, tb[ub++] = 128 | 63 & wb) : (xb++, wb = 65536 + ((1023 & wb) << 10 | 1023 & vb.charCodeAt(xb)), tb[ub++] = 240 | wb >> 18, tb[ub++] = 128 | wb >> 12 & 63, tb[ub++] = 128 | wb >> 6 & 63, tb[ub++] = 128 | 63 & wb);
                        }

                        function tb(ub, vb) {
                            ub.push(255 & vb);
                        }

                        function ub(vb, wb) {
                            vb.push(255 & wb);
                        }

                        function vb(wb, xb) {
                            wb.push(255 & xb), wb.push(xb >> 8 & 255);
                        }

                        function wb(xb, yb) {
                            xb.push(255 & yb), xb.push(yb >> 8 & 255);
                        }

                        function xb(yb, zb) {
                            yb.push(255 & zb), yb.push(zb >> 8 & 255), yb.push(zb >> 16 & 255), yb.push(zb >> 24 & 255);
                        }

                        function yb(zb, Ab) {
                            var Bb = Ab >> 24,
                                Cb = Ab >> 16,
                                Db = Ab >> 8,
                                Eb = Ab;
                            zb.push(255 & Eb), zb.push(255 & Db), zb.push(255 & Cb), zb.push(255 & Bb);
                        }

                        function zb(Ab, Bb) {
                            var Cb = Math.floor(Bb / Math.pow(2, 32));
                            yb(Ab, Bb >>> 0), yb(Ab, Cb);
                        }

                        function Ab(Bb, Cb) {
                            var Db = Cb / Math.pow(2, 32) >> 0;
                            yb(Bb, Cb >>> 0), yb(Bb, Db);
                        }

                        function Bb(Cb, Db) {
                            _Gb(Cb, Db);
                        }

                        function Cb(Db, Eb) {
                            _Hb(Db, Eb);
                        }
                        var Db = new Int32Array(2),
                            Eb = new Float32Array(Db.buffer),
                            Fb = new Float64Array(Db.buffer);

                        function _Gb(Hb, Ib) {
                            Eb[0] = Ib, xb(Hb, Db[0]);
                        }

                        function _Hb(Ib, Jb) {
                            Fb[0] = Jb, xb(Ib, Db[0]), xb(Ib, Db[1]);
                        }

                        function Ib(Jb, Kb) {
                            return ub(Jb, Kb ? 1 : 0);
                        }

                        function Jb(Kb, Lb) {
                            Lb || (Lb = '');
                            var Mb = rb(Lb),
                                Nb = 0;
                            if (Mb < 32)
                                Kb.push(160 | Mb), Nb = 1;
                            else if (Mb < 256)
                                Kb.push(217), ub(Kb, Mb), Nb = 2;
                            else if (Mb < 65536)
                                Kb.push(218), wb(Kb, Mb), Nb = 3;
                            else {
                                if (!(Mb < 4294967296))
                                    throw new Error('String too long');
                                Kb.push(219), yb(Kb, Mb), Nb = 5;
                            }
                            return sb(Kb, Kb.length, Lb), Nb + Mb;
                        }

                        function Kb(Lb, Mb) {
                            return isNaN(Mb) ? Kb(Lb, 0) : isFinite(Mb) ? Mb !== (0 | Mb) ? (Lb.push(203), _Hb(Lb, Mb), 9) : Mb >= 0 ? Mb < 128 ? (ub(Lb, Mb), 1) : Mb < 256 ? (Lb.push(204), ub(Lb, Mb), 2) : Mb < 65536 ? (Lb.push(205), wb(Lb, Mb), 3) : Mb < 4294967296 ? (Lb.push(206), yb(Lb, Mb), 5) : (Lb.push(207), Ab(Lb, Mb), 9) : Mb >= -32 ? (Lb.push(224 | Mb + 32), 1) : Mb >= -128 ? (Lb.push(208), tb(Lb, Mb), 2) : Mb >= -32768 ? (Lb.push(209), vb(Lb, Mb), 3) : Mb >= -2147483648 ? (Lb.push(210), xb(Lb, Mb), 5) : (Lb.push(211), zb(Lb, Mb), 9) : Kb(Lb, Mb > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                        }
                        var Lb = Object.freeze({
                            __proto__: null,
                            utf8Write: sb,
                            int8: tb,
                            uint8: ub,
                            int16: vb,
                            uint16: wb,
                            int32: xb,
                            uint32: yb,
                            int64: zb,
                            uint64: Ab,
                            float32: Bb,
                            float64: Cb,
                            writeFloat32: _Gb,
                            writeFloat64: _Hb,
                            boolean: Ib,
                            string: Jb,
                            number: Kb
                        });

                        function Mb(Nb, Ob, Pb) {
                            for (var Qb = '', Rb = 0, Sb = Ob, Tb = Ob + Pb; Sb < Tb; Sb++) {
                                var Ub = Nb[Sb];
                                0 != (128 & Ub) ? 192 != (224 & Ub) ? 224 != (240 & Ub) ? 240 != (248 & Ub) ? console.error('Invalid byte ' + Ub.toString(16)) : (Rb = (7 & Ub) << 18 | (63 & Nb[++Sb]) << 12 | (63 & Nb[++Sb]) << 6 | (63 & Nb[++Sb]) << 0) >= 65536 ? (Rb -= 65536, Qb += String.fromCharCode(55296 + (Rb >>> 10), 56320 + (1023 & Rb))) : Qb += String.fromCharCode(Rb) : Qb += String.fromCharCode((15 & Ub) << 12 | (63 & Nb[++Sb]) << 6 | (63 & Nb[++Sb]) << 0) : Qb += String.fromCharCode((31 & Ub) << 6 | 63 & Nb[++Sb]) : Qb += String.fromCharCode(Ub);
                            }
                            return Qb;
                        }

                        function Nb(Ob, Pb) {
                            return _Ob(Ob, Pb) << 24 >> 24;
                        }

                        function _Ob(Pb, Qb) {
                            return Pb[Qb.offset++];
                        }

                        function Pb(Qb, Rb) {
                            return _Qb(Qb, Rb) << 16 >> 16;
                        }

                        function _Qb(Rb, Sb) {
                            return Rb[Sb.offset++] | Rb[Sb.offset++] << 8;
                        }

                        function Rb(Sb, Tb) {
                            return Sb[Tb.offset++] | Sb[Tb.offset++] << 8 | Sb[Tb.offset++] << 16 | Sb[Tb.offset++] << 24;
                        }

                        function Sb(Tb, Ub) {
                            return Rb(Tb, Ub) >>> 0;
                        }

                        function Tb(Ub, Vb) {
                            return _$b(Ub, Vb);
                        }

                        function Ub(Vb, Wb) {
                            return _ac(Vb, Wb);
                        }

                        function Vb(Wb, Xb) {
                            var Yb = Sb(Wb, Xb);
                            return Rb(Wb, Xb) * Math.pow(2, 32) + Yb;
                        }

                        function Wb(Xb, Yb) {
                            var Zb = Sb(Xb, Yb);
                            return Sb(Xb, Yb) * Math.pow(2, 32) + Zb;
                        }
                        var Xb = new Int32Array(2),
                            Yb = new Float32Array(Xb.buffer),
                            Zb = new Float64Array(Xb.buffer);

                        function _$b(ac, bc) {
                            return Xb[0] = Rb(ac, bc), Yb[0];
                        }

                        function _ac(bc, cc) {
                            return Xb[0] = Rb(bc, cc), Xb[1] = Rb(bc, cc), Zb[0];
                        }

                        function bc(cc, dc) {
                            return _Ob(cc, dc) > 0;
                        }

                        function cc(dc, ec) {
                            var fc, gc = dc[ec.offset++];
                            gc < 192 ? fc = 31 & gc : 217 === gc ? fc = _Ob(dc, ec) : 218 === gc ? fc = _Qb(dc, ec) : 219 === gc && (fc = Sb(dc, ec));
                            var hc = Mb(dc, ec.offset, fc);
                            return ec.offset += fc, hc;
                        }

                        function dc(ec, fc) {
                            var gc = ec[fc.offset];
                            return gc < 192 && gc > 160 || 217 === gc || 218 === gc || 219 === gc;
                        }

                        function ec(fc, gc) {
                            var hc = fc[gc.offset++];
                            return hc < 128 ? hc : 202 === hc ? _$b(fc, gc) : 203 === hc ? _ac(fc, gc) : 204 === hc ? _Ob(fc, gc) : 205 === hc ? _Qb(fc, gc) : 206 === hc ? Sb(fc, gc) : 207 === hc ? Wb(fc, gc) : 208 === hc ? Nb(fc, gc) : 209 === hc ? Pb(fc, gc) : 210 === hc ? Rb(fc, gc) : 211 === hc ? Vb(fc, gc) : hc > 223 ? -1 * (255 - hc + 1) : void 0;
                        }

                        function fc(gc, hc) {
                            var ic = gc[hc.offset];
                            return ic < 128 || ic >= 202 && ic <= 211;
                        }

                        function gc(hc, ic) {
                            return hc[ic.offset] < 160;
                        }

                        function hc(ic, jc) {
                            return ic[jc.offset - 1] === V && (ic[jc.offset] < 128 || ic[jc.offset] >= 202 && ic[jc.offset] <= 211);
                        }
                        var ic = Object.freeze({
                                __proto__: null,
                                int8: Nb,
                                uint8: _Ob,
                                int16: Pb,
                                uint16: _Qb,
                                int32: Rb,
                                uint32: Sb,
                                float32: Tb,
                                float64: Ub,
                                int64: Vb,
                                uint64: Wb,
                                readFloat32: _$b,
                                readFloat64: _ac,
                                boolean: bc,
                                string: cc,
                                stringCheck: dc,
                                number: ec,
                                numberCheck: fc,
                                arrayCheck: gc,
                                switchStructureCheck: hc
                            }),
                            jc = function() {
                                function kc(lc) {
                                    var mc = this;
                                    this.$changes = new X(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, lc && lc.forEach(function(nc) {
                                        return mc.add(nc);
                                    });
                                }
                                return kc.prototype.onAdd = function(lc, mc) {
                                    return void 0 === mc && (mc = !0), Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.ADD, lc, mc ? this.$items : void 0);
                                }, kc.prototype.onRemove = function(lc) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.DELETE, lc);
                                }, kc.prototype.onChange = function(lc) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.REPLACE, lc);
                                }, kc.is = function(lc) {
                                    return void 0 !== lc.collection;
                                }, kc.prototype.add = function(lc) {
                                    var mc = this.$refId++;
                                    return void 0 !== lc.$changes && lc.$changes.setParent(this, this.$changes.root, mc), this.$changes.indexes[mc] = mc, this.$indexes.set(mc, mc), this.$items.set(mc, lc), this.$changes.change(mc), mc;
                                }, kc.prototype.at = function(lc) {
                                    var mc = Array.from(this.$items.keys())[lc];
                                    return this.$items.get(mc);
                                }, kc.prototype.entries = function() {
                                    return this.$items.entries();
                                }, kc.prototype.delete = function(lc) {
                                    for (var mc, nc, oc = this.$items.entries();
                                        (nc = oc.next()) && !nc.done;)
                                        if (lc === nc.value[1]) {
                                            mc = nc.value[0];
                                            break;
                                        }
                                    return void 0 !== mc && (this.$changes.delete(mc), this.$indexes.delete(mc), this.$items.delete(mc));
                                }, kc.prototype.clear = function(lc) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), lc && Z.call(this, lc), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: P.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, kc.prototype.has = function(lc) {
                                    return Array.from(this.$items.values()).some(function(mc) {
                                        return mc === lc;
                                    });
                                }, kc.prototype.forEach = function(lc) {
                                    var mc = this;
                                    this.$items.forEach(function(nc, oc, pc) {
                                        return lc(nc, oc, mc);
                                    });
                                }, kc.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(kc.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), kc.prototype.setIndex = function(lc, mc) {
                                    this.$indexes.set(lc, mc);
                                }, kc.prototype.getIndex = function(lc) {
                                    return this.$indexes.get(lc);
                                }, kc.prototype.getByIndex = function(lc) {
                                    return this.$items.get(this.$indexes.get(lc));
                                }, kc.prototype.deleteByIndex = function(lc) {
                                    var mc = this.$indexes.get(lc);
                                    this.$items.delete(mc), this.$indexes.delete(lc);
                                }, kc.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, kc.prototype.toJSON = function() {
                                    var lc = [];
                                    return this.forEach(function(mc, nc) {
                                        lc.push('function' == typeof mc.toJSON ? mc.toJSON() : mc);
                                    }), lc;
                                }, kc.prototype.clone = function(lc) {
                                    var mc;
                                    return lc ? mc = Object.assign(new kc(), this) : (mc = new kc(), this.forEach(function(nc) {
                                        nc.$changes ? mc.add(nc.clone()) : mc.add(nc);
                                    })), mc;
                                }, kc;
                            }(),
                            kc = function() {
                                function lc(mc) {
                                    var nc = this;
                                    this.$changes = new X(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, mc && mc.forEach(function(oc) {
                                        return nc.add(oc);
                                    });
                                }
                                return lc.prototype.onAdd = function(mc, nc) {
                                    return void 0 === nc && (nc = !0), Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.ADD, mc, nc ? this.$items : void 0);
                                }, lc.prototype.onRemove = function(mc) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.DELETE, mc);
                                }, lc.prototype.onChange = function(mc) {
                                    return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.REPLACE, mc);
                                }, lc.is = function(mc) {
                                    return void 0 !== mc.set;
                                }, lc.prototype.add = function(mc) {
                                    var nc, oc;
                                    if (this.has(mc))
                                        return !1;
                                    var pc = this.$refId++;
                                    void 0 !== mc.$changes && mc.$changes.setParent(this, this.$changes.root, pc);
                                    var qc = null !== (oc = null === (nc = this.$changes.indexes[pc]) || void 0 === nc ? void 0 : nc.op) && void 0 !== oc ? oc : P.OPERATION.ADD;
                                    return this.$changes.indexes[pc] = pc, this.$indexes.set(pc, pc), this.$items.set(pc, mc), this.$changes.change(pc, qc), pc;
                                }, lc.prototype.entries = function() {
                                    return this.$items.entries();
                                }, lc.prototype.delete = function(mc) {
                                    for (var nc, oc, pc = this.$items.entries();
                                        (oc = pc.next()) && !oc.done;)
                                        if (mc === oc.value[1]) {
                                            nc = oc.value[0];
                                            break;
                                        }
                                    return void 0 !== nc && (this.$changes.delete(nc), this.$indexes.delete(nc), this.$items.delete(nc));
                                }, lc.prototype.clear = function(mc) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), mc && Z.call(this, mc), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: P.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, lc.prototype.has = function(mc) {
                                    for (var nc, oc = this.$items.values(), pc = !1;
                                        (nc = oc.next()) && !nc.done;)
                                        if (mc === nc.value) {
                                            pc = !0;
                                            break;
                                        }
                                    return pc;
                                }, lc.prototype.forEach = function(mc) {
                                    var nc = this;
                                    this.$items.forEach(function(oc, pc, qc) {
                                        return mc(oc, pc, nc);
                                    });
                                }, lc.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(lc.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), lc.prototype.setIndex = function(mc, nc) {
                                    this.$indexes.set(mc, nc);
                                }, lc.prototype.getIndex = function(mc) {
                                    return this.$indexes.get(mc);
                                }, lc.prototype.getByIndex = function(mc) {
                                    return this.$items.get(this.$indexes.get(mc));
                                }, lc.prototype.deleteByIndex = function(mc) {
                                    var nc = this.$indexes.get(mc);
                                    this.$items.delete(nc), this.$indexes.delete(mc);
                                }, lc.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, lc.prototype.toJSON = function() {
                                    var mc = [];
                                    return this.forEach(function(nc, oc) {
                                        mc.push('function' == typeof nc.toJSON ? nc.toJSON() : nc);
                                    }), mc;
                                }, lc.prototype.clone = function(mc) {
                                    var nc;
                                    return mc ? nc = Object.assign(new lc(), this) : (nc = new lc(), this.forEach(function(oc) {
                                        oc.$changes ? nc.add(oc.clone()) : nc.add(oc);
                                    })), nc;
                                }, lc;
                            }(),
                            lc = function() {
                                function mc() {
                                    this.refIds = new WeakSet(), this.containerIndexes = new WeakMap();
                                }
                                return mc.prototype.addRefId = function(nc) {
                                    this.refIds.has(nc) || (this.refIds.add(nc), this.containerIndexes.set(nc, new Set()));
                                }, mc.get = function(nc) {
                                    return void 0 === nc.$filterState && (nc.$filterState = new mc()), nc.$filterState;
                                }, mc;
                            }(),
                            mc = function() {
                                function nc() {
                                    this.refs = new Map(), this.refCounts = {}, this.deletedRefs = new Set(), this.nextUniqueId = 0;
                                }
                                return nc.prototype.getNextUniqueId = function() {
                                    return this.nextUniqueId++;
                                }, nc.prototype.addRef = function(oc, pc, qc) {
                                    void 0 === qc && (qc = !0), this.refs.set(oc, pc), qc && (this.refCounts[oc] = (this.refCounts[oc] || 0) + 1);
                                }, nc.prototype.removeRef = function(oc) {
                                    this.refCounts[oc] = this.refCounts[oc] - 1, this.deletedRefs.add(oc);
                                }, nc.prototype.clearRefs = function() {
                                    this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {};
                                }, nc.prototype.garbageCollectDeletedRefs = function() {
                                    var oc = this;
                                    this.deletedRefs.forEach(function(pc) {
                                        if (!(oc.refCounts[pc] > 0)) {
                                            var qc = oc.refs.get(pc);
                                            if (qc instanceof _sc)
                                                for (var rc in qc._definition.schema)
                                                    'string' != typeof qc._definition.schema[rc] && qc[rc] && qc[rc].$changes && oc.removeRef(qc[rc].$changes.refId);
                                            else {
                                                var sc = qc.$changes.parent._definition,
                                                    tc = sc.schema[sc.fieldsByIndex[qc.$changes.parentIndex]];
                                                'function' == typeof Object.values(tc)[0] && Array.from(qc.values()).forEach(function(uc) {
                                                    return oc.removeRef(uc.$changes.refId);
                                                });
                                            }
                                            oc.refs.delete(pc), delete oc.refCounts[pc];
                                        }
                                    }), this.deletedRefs.clear();
                                }, nc;
                            }(),
                            nc = function(oc) {
                                function pc() {
                                    return null !== oc && oc.apply(this, arguments) || this;
                                }
                                return R(pc, oc), pc;
                            }(Error);

                        function oc(pc, qc, rc, sc) {
                            var tc, uc = !1;
                            switch (qc) {
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
                                    tc = 'number', isNaN(pc) && console.log('trying to encode "NaN" in '.concat(rc.constructor.name, '#').concat(sc));
                                    break;
                                case 'string':
                                    tc = 'string', uc = !0;
                                    break;
                                case 'boolean':
                                    return;
                            }
                            if (typeof pc !== tc && (!uc || uc && null !== pc)) {
                                var vc = '\''.concat(JSON.stringify(pc), '\'').concat(pc && pc.constructor && ' ('.concat(pc.constructor.name, ')') || '');
                                throw new nc('a \''.concat(tc, '\' was expected, but ').concat(vc, ' was provided in ').concat(rc.constructor.name, '#').concat(sc));
                            }
                        }

                        function pc(qc, rc, sc, tc) {
                            if (!(qc instanceof rc))
                                throw new nc('a \''.concat(rc.name, '\' was expected, but \'').concat(qc.constructor.name, '\' was provided in ').concat(sc.constructor.name, '#').concat(tc));
                        }

                        function qc(rc, sc, tc, uc, vc) {
                            oc(tc, rc, uc, vc);
                            var wc = Lb[rc];
                            if (!wc)
                                throw new nc('a \''.concat(rc, '\' was expected, but ').concat(tc, ' was provided in ').concat(uc.constructor.name, '#').concat(vc));
                            wc(sc, tc);
                        }

                        function rc(sc, tc, uc) {
                            return ic[sc](tc, uc);
                        }
                        var _sc = function() {
                            function tc() {
                                for (var uc = [], vc = 0; vc < arguments.length; vc++)
                                    uc[vc] = arguments[vc];
                                Object.defineProperties(this, {
                                    $changes: {
                                        value: new X(this, void 0, new mc()),
                                        enumerable: !1,
                                        writable: !0
                                    },
                                    $callbacks: {
                                        value: void 0,
                                        enumerable: !1,
                                        writable: !0
                                    }
                                });
                                var wc = this._definition.descriptors;
                                wc && Object.defineProperties(this, wc), uc[0] && this.assign(uc[0]);
                            }
                            return tc.onError = function(uc) {
                                console.error(uc);
                            }, tc.is = function(uc) {
                                return uc._definition && void 0 !== uc._definition.schema;
                            }, tc.prototype.onChange = function(uc) {
                                return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.REPLACE, uc);
                            }, tc.prototype.onRemove = function(uc) {
                                return Y(this.$callbacks || (this.$callbacks = []), P.OPERATION.DELETE, uc);
                            }, tc.prototype.assign = function(uc) {
                                return Object.assign(this, uc), this;
                            }, Object.defineProperty(tc.prototype, '_definition', {
                                get: function() {
                                    return this.constructor._definition;
                                },
                                enumerable: !1,
                                configurable: !0
                            }), tc.prototype.setDirty = function(uc, vc) {
                                this.$changes.change(uc, vc);
                            }, tc.prototype.listen = function(uc, vc, wc) {
                                var xc = this;
                                return void 0 === wc && (wc = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[uc] || (this.$callbacks[uc] = []), this.$callbacks[uc].push(vc), wc && void 0 !== this[uc] && vc(this[uc], void 0),
                                    function() {
                                        return $(xc.$callbacks[uc], xc.$callbacks[uc].indexOf(vc));
                                    };
                            }, tc.prototype.decode = function(uc, vc, wc) {
                                var xc;
                                void 0 === vc && (vc = {
                                    offset: 0
                                }), void 0 === wc && (wc = this);
                                var yc = [],
                                    zc = this.$changes.root,
                                    Ac = uc.length,
                                    Bc = 0;
                                for (zc.refs.set(Bc, this); vc.offset < Ac;) {
                                    var Cc = uc[vc.offset++];
                                    if (Cc != V) {
                                        var Dc = wc.$changes,
                                            Ec = void 0 !== wc._definition,
                                            Fc = Ec ? Cc >> 6 << 6 : Cc;
                                        if (Fc !== P.OPERATION.CLEAR) {
                                            var Gc = Ec ? Cc % (Fc || 255) : ec(uc, vc),
                                                Hc = Ec ? wc._definition.fieldsByIndex[Gc] : '',
                                                Ic = Dc.getType(Gc),
                                                Jc = void 0,
                                                Kc = void 0,
                                                Lc = void 0;
                                            if (Ec ? Kc = wc['_'.concat(Hc)] : (Kc = wc.getByIndex(Gc), (Fc & P.OPERATION.ADD) === P.OPERATION.ADD ? (Lc = wc instanceof eb ? cc(uc, vc) : Gc, wc.setIndex(Gc, Lc)) : Lc = wc.getIndex(Gc)), (Fc & P.OPERATION.DELETE) === P.OPERATION.DELETE && (Fc !== P.OPERATION.DELETE_AND_ADD && wc.deleteByIndex(Gc), Kc && Kc.$changes && zc.removeRef(Kc.$changes.refId), Jc = null), void 0 !== Hc) {
                                                if (Fc === P.OPERATION.DELETE);
                                                else if (tc.is(Ic)) {
                                                    var Mc = ec(uc, vc);
                                                    if (Jc = zc.refs.get(Mc), Fc !== P.OPERATION.REPLACE) {
                                                        var Nc = this.getSchemaType(uc, vc, Ic);
                                                        Jc || ((Jc = this.createTypeInstance(Nc)).$changes.refId = Mc, Kc && (Jc.$callbacks = Kc.$callbacks, Kc.$changes.refId && Mc !== Kc.$changes.refId && zc.removeRef(Kc.$changes.refId))), zc.addRef(Mc, Jc, Jc !== Kc);
                                                    }
                                                } else if ('string' == typeof Ic)
                                                    Jc = rc(Ic, uc, vc);
                                                else {
                                                    var Mc = hb(Object.keys(Ic)[0]),
                                                        Nc = ec(uc, vc),
                                                        Oc = zc.refs.has(Nc) ? Kc || zc.refs.get(Nc) : new Mc.constructor();
                                                    if ((Jc = Oc.clone(!0)).$changes.refId = Nc, Kc && (Jc.$callbacks = Kc.$callbacks, Kc.$changes.refId && Nc !== Kc.$changes.refId)) {
                                                        zc.removeRef(Kc.$changes.refId);
                                                        for (var Pc = Kc.entries(), Qc = void 0;
                                                            (Qc = Pc.next()) && !Qc.done;) {
                                                            var Rc = (xc = Qc.value)[0],
                                                                Sc = xc[1];
                                                            yc.push({
                                                                refId: Nc,
                                                                op: P.OPERATION.DELETE,
                                                                field: Rc,
                                                                value: void 0,
                                                                previousValue: Sc
                                                            });
                                                        }
                                                    }
                                                    zc.addRef(Nc, Jc, Oc !== Kc);
                                                }
                                                if (null != Jc)
                                                    if (Jc.$changes && Jc.$changes.setParent(Dc.ref, Dc.root, Gc), wc instanceof tc)
                                                        wc[Hc] = Jc;
                                                    else if (wc instanceof eb)
                                                    tb = Lc, wc.$items.set(tb, Jc), wc.$changes.allChanges.add(Gc);
                                                else if (wc instanceof cb)
                                                    wc.setAt(Gc, Jc);
                                                else if (wc instanceof jc) {
                                                    var Mc = wc.add(Jc);
                                                    wc.setIndex(Gc, Mc);
                                                } else
                                                    wc instanceof kc && !1 !== (vb = wc.add(Jc)) && wc.setIndex(Gc, vb);
                                                Kc !== Jc && yc.push({
                                                    refId: Bc,
                                                    op: Fc,
                                                    field: Hc,
                                                    dynamicIndex: Lc,
                                                    value: Jc,
                                                    previousValue: Kc
                                                });
                                            } else {
                                                console.warn('@colyseus/schema: definition mismatch');
                                                for (var Mc = {
                                                        offset: vc.offset
                                                    }; vc.offset < Ac && (!hc(uc, vc) || (Mc.offset = vc.offset + 1, !zc.refs.has(ec(uc, Mc))));)
                                                    vc.offset++;
                                            }
                                        } else
                                            wc.clear(yc);
                                    } else {
                                        Bc = ec(uc, vc);
                                        var Dc = zc.refs.get(Bc);
                                        if (!Dc)
                                            throw new Error('"refId" not found: '.concat(Bc));
                                        wc = Dc;
                                    }
                                }
                                return this._triggerChanges(yc), zc.garbageCollectDeletedRefs(), yc;
                            }, tc.prototype.encode = function(uc, vc, wc) {
                                void 0 === uc && (uc = !1), void 0 === vc && (vc = []), void 0 === wc && (wc = !1);
                                for (var xc = this.$changes, yc = new WeakSet(), zc = [xc], Ac = 1, Bc = 0; Bc < Ac; Bc++) {
                                    var Cc = zc[Bc],
                                        Dc = Cc.ref,
                                        Ec = Dc instanceof tc;
                                    Cc.ensureRefId(), yc.add(Cc), Cc !== xc && (Cc.changed || uc) && (ub(vc, V), Kb(vc, Cc.refId));
                                    for (var Fc = uc ? Array.from(Cc.allChanges) : Array.from(Cc.changes.values()), Gc = 0, Hc = Fc.length; Gc < Hc; Gc++) {
                                        var Ic = uc ? {
                                                op: P.OPERATION.ADD,
                                                index: Fc[Gc]
                                            } : Fc[Gc],
                                            Jc = Ic.index,
                                            Kc = Ec ? Dc._definition.fieldsByIndex && Dc._definition.fieldsByIndex[Jc] : Jc,
                                            Lc = vc.length;
                                        if (Ic.op !== P.OPERATION.TOUCH)
                                            if (Ec)
                                                ub(vc, Jc | Ic.op);
                                            else {
                                                if (ub(vc, Ic.op), Ic.op === P.OPERATION.CLEAR)
                                                    continue;
                                                Kb(vc, Jc);
                                            }
                                        if (Ec || (Ic.op & P.OPERATION.ADD) != P.OPERATION.ADD || Dc instanceof eb && Jb(vc, Cc.ref.$indexes.get(Jc)), Ic.op !== P.OPERATION.DELETE) {
                                            var Mc = Cc.getType(Jc),
                                                Nc = Cc.getValue(Jc);
                                            if (Nc && Nc.$changes && !yc.has(Nc.$changes) && (zc.push(Nc.$changes), Nc.$changes.ensureRefId(), Ac++), Ic.op !== P.OPERATION.TOUCH) {
                                                if (tc.is(Mc))
                                                    pc(Nc, Mc, Dc, Kc), Kb(vc, Nc.$changes.refId), (Ic.op & P.OPERATION.ADD) === P.OPERATION.ADD && this.tryEncodeTypeId(vc, Mc, Nc.constructor);
                                                else if ('string' == typeof Mc)
                                                    qc(Mc, vc, Nc, Dc, Kc);
                                                else {
                                                    var Oc = hb(Object.keys(Mc)[0]);
                                                    pc(Dc['_'.concat(Kc)], Oc.constructor, Dc, Kc), Kb(vc, Nc.$changes.refId);
                                                }
                                                wc && Cc.cache(Jc, vc.slice(Lc));
                                            }
                                        }
                                    }
                                    uc || wc || Cc.discard();
                                }
                                return vc;
                            }, tc.prototype.encodeAll = function(uc) {
                                return this.encode(!0, [], uc);
                            }, tc.prototype.applyFilters = function(uc, vc) {
                                var wc, xc;
                                void 0 === vc && (vc = !1);
                                for (var yc = this, zc = new Set(), Ac = lc.get(uc), Bc = [this.$changes], Cc = 1, Dc = [], Ec = function(Fc) {
                                        var Gc = Bc[Fc];
                                        if (zc.has(Gc.refId))
                                            return 'continue';
                                        var Hc = Gc.ref,
                                            Ic = Hc instanceof tc;
                                        ub(Dc, V), Kb(Dc, Gc.refId);
                                        var Jc = Ac.refIds.has(Gc),
                                            Kc = vc || !Jc;
                                        Ac.addRefId(Gc);
                                        var Lc = Ac.containerIndexes.get(Gc),
                                            Mc = Kc ? Array.from(Gc.allChanges) : Array.from(Gc.changes.values());
                                        !vc && Ic && Hc._definition.indexesWithFilters && Hc._definition.indexesWithFilters.forEach(function(Nc) {
                                            !Lc.has(Nc) && Gc.allChanges.has(Nc) && (Kc ? Mc.push(Nc) : Mc.push({
                                                op: P.OPERATION.ADD,
                                                index: Nc
                                            }));
                                        });
                                        for (var Nc = 0, Oc = Mc.length; Nc < Oc; Nc++) {
                                            var Pc = Kc ? {
                                                op: P.OPERATION.ADD,
                                                index: Mc[Nc]
                                            } : Mc[Nc];
                                            if (Pc.op !== P.OPERATION.CLEAR) {
                                                var Qc = Pc.index;
                                                if (Pc.op !== P.OPERATION.DELETE) {
                                                    var Rc = Gc.getValue(Qc),
                                                        Sc = Gc.getType(Qc);
                                                    if (Ic) {
                                                        if ((qb = Hc._definition.filters && Hc._definition.filters[Qc]) && !qb.call(Hc, uc, Rc, yc)) {
                                                            Rc && Rc.$changes && zc.add(Rc.$changes.refId);
                                                            continue;
                                                        }
                                                    } else {
                                                        var Tc, Uc = Gc.parent;
                                                        if ((Tc = Gc.getChildrenFilter()) && !Tc.call(Uc, uc, Hc.$indexes.get(Qc), Rc, yc)) {
                                                            Rc && Rc.$changes && zc.add(Rc.$changes.refId);
                                                            continue;
                                                        }
                                                    }
                                                    if (Rc.$changes && (Bc.push(Rc.$changes), Cc++), Pc.op !== P.OPERATION.TOUCH)
                                                        if (Pc.op === P.OPERATION.ADD || Ic)
                                                            Dc.push.apply(Dc, null !== (wc = Gc.caches[Qc]) && void 0 !== wc ? wc : []), Lc.add(Qc);
                                                        else if (Lc.has(Qc))
                                                        Dc.push.apply(Dc, null !== (xc = Gc.caches[Qc]) && void 0 !== xc ? xc : []);
                                                    else {
                                                        if (Lc.add(Qc), ub(Dc, P.OPERATION.ADD), Kb(Dc, Qc), Hc instanceof eb) {
                                                            var Tc = Gc.ref.$indexes.get(Qc);
                                                            Jb(Dc, Tc);
                                                        }
                                                        Rc.$changes ? Kb(Dc, Rc.$changes.refId) : Lb[Sc](Dc, Rc);
                                                    } else
                                                        Rc.$changes && !Ic && (ub(Dc, P.OPERATION.ADD), Kb(Dc, Qc), Hc instanceof eb && (sb = Gc.ref.$indexes.get(Qc), Jb(Dc, sb)), Kb(Dc, Rc.$changes.refId));
                                                } else
                                                    Ic ? ub(Dc, Pc.op | Qc) : (ub(Dc, Pc.op), Kb(Dc, Qc));
                                            } else
                                                ub(Dc, Pc.op);
                                        }
                                    }, Fc = 0; Fc < Cc; Fc++)
                                    Ec(Fc);
                                return Dc;
                            }, tc.prototype.clone = function() {
                                var uc, vc = new this.constructor(),
                                    wc = this._definition.schema;
                                for (var xc in wc)
                                    'object' == typeof this[xc] && 'function' == typeof(null === (uc = this[xc]) || void 0 === uc ? void 0 : uc.clone) ? vc[xc] = this[xc].clone() : vc[xc] = this[xc];
                                return vc;
                            }, tc.prototype.toJSON = function() {
                                var uc = this._definition.schema,
                                    vc = this._definition.deprecated,
                                    wc = {};
                                for (var xc in uc)
                                    vc[xc] || null === this[xc] || void 0 === this[xc] || (wc[xc] = 'function' == typeof this[xc].toJSON ? this[xc].toJSON() : this['_'.concat(xc)]);
                                return wc;
                            }, tc.prototype.discardAllChanges = function() {
                                this.$changes.discardAll();
                            }, tc.prototype.getByIndex = function(uc) {
                                return this[this._definition.fieldsByIndex[uc]];
                            }, tc.prototype.deleteByIndex = function(uc) {
                                this[this._definition.fieldsByIndex[uc]] = void 0;
                            }, tc.prototype.tryEncodeTypeId = function(uc, vc, wc) {
                                vc._typeid !== wc._typeid && (ub(uc, W), Kb(uc, wc._typeid));
                            }, tc.prototype.getSchemaType = function(uc, vc, wc) {
                                var xc;
                                return uc[vc.offset] === W && (vc.offset++, xc = this.constructor._context.get(ec(uc, vc))), xc || wc;
                            }, tc.prototype.createTypeInstance = function(uc) {
                                var vc = new uc();
                                return vc.$changes.root = this.$changes.root, vc;
                            }, tc.prototype._triggerChanges = function(uc) {
                                for (var vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec = new Set(), Fc = this.$changes.root.refs, Gc = function(Hc) {
                                        var Ic = uc[Hc],
                                            Jc = Ic.refId,
                                            Kc = Fc.get(Jc),
                                            Lc = Kc.$callbacks;
                                        if ((Ic.op & P.OPERATION.DELETE) === P.OPERATION.DELETE && Ic.previousValue instanceof tc && (null === (wc = null === (vc = Ic.previousValue.$callbacks) || void 0 === vc ? void 0 : vc[P.OPERATION.DELETE]) || void 0 === wc || wc.forEach(function(Mc) {
                                                return Mc();
                                            })), !Lc)
                                            return 'continue';
                                        if (Kc instanceof tc) {
                                            if (!Ec.has(Jc))
                                                try {
                                                    null === (xc = null == Lc ? void 0 : Lc[P.OPERATION.REPLACE]) || void 0 === xc || xc.forEach(function(Mc) {
                                                        return Mc(uc);
                                                    });
                                                } catch (P) {
                                                    tc.onError(P);
                                                }
                                            try {
                                                Lc.hasOwnProperty(Ic.field) && (null === (yc = Lc[Ic.field]) || void 0 === yc || yc.forEach(function(Mc) {
                                                    return Mc(Ic.value, Ic.previousValue);
                                                }));
                                            } catch (P) {
                                                tc.onError(P);
                                            }
                                        } else
                                            Ic.op === P.OPERATION.ADD && void 0 === Ic.previousValue ? null === (zc = Lc[P.OPERATION.ADD]) || void 0 === zc || zc.forEach(function(Mc) {
                                                var Nc;
                                                return Mc(Ic.value, null !== (Nc = Ic.dynamicIndex) && void 0 !== Nc ? Nc : Ic.field);
                                            }) : Ic.op === P.OPERATION.DELETE ? void 0 !== Ic.previousValue && (null === (Ac = Lc[P.OPERATION.DELETE]) || void 0 === Ac || Ac.forEach(function(Mc) {
                                                var Nc;
                                                return Mc(Ic.previousValue, null !== (Nc = Ic.dynamicIndex) && void 0 !== Nc ? Nc : Ic.field);
                                            })) : Ic.op === P.OPERATION.DELETE_AND_ADD && (void 0 !== Ic.previousValue && (null === (Bc = Lc[P.OPERATION.DELETE]) || void 0 === Bc || Bc.forEach(function(Mc) {
                                                var Nc;
                                                return Mc(Ic.previousValue, null !== (Nc = Ic.dynamicIndex) && void 0 !== Nc ? Nc : Ic.field);
                                            })), null === (Cc = Lc[P.OPERATION.ADD]) || void 0 === Cc || Cc.forEach(function(Mc) {
                                                var Nc;
                                                return Mc(Ic.value, null !== (Nc = Ic.dynamicIndex) && void 0 !== Nc ? Nc : Ic.field);
                                            })), Ic.value !== Ic.previousValue && (null === (Dc = Lc[P.OPERATION.REPLACE]) || void 0 === Dc || Dc.forEach(function(Mc) {
                                                var Nc;
                                                return Mc(Ic.value, null !== (Nc = Ic.dynamicIndex) && void 0 !== Nc ? Nc : Ic.field);
                                            }));
                                        Ec.add(Jc);
                                    }, Hc = 0; Hc < uc.length; Hc++)
                                    Gc(Hc);
                            }, tc._definition = ib.create(), tc;
                        }();

                        function tc(uc) {
                            for (var vc = [uc.$changes], wc = 1, xc = {}, yc = xc, zc = function(Ac) {
                                    var Bc = vc[Ac];
                                    Bc.changes.forEach(function(Cc) {
                                        var Dc = Bc.ref,
                                            Ec = Cc.index,
                                            Fc = Dc._definition ? Dc._definition.fieldsByIndex[Ec] : Dc.$indexes.get(Ec);
                                        yc[Fc] = Bc.getValue(Ec);
                                    });
                                }, Ac = 0; Ac < wc; Ac++)
                                zc(Ac);
                            return xc;
                        }
                        var uc = {
                                context: new kb()
                            },
                            vc = function(wc) {
                                function xc() {
                                    return null !== wc && wc.apply(this, arguments) || this;
                                }
                                return R(xc, wc), S([mb('string', uc)], xc.prototype, 'name', void 0), S([mb('string', uc)], xc.prototype, 'type', void 0), S([mb('number', uc)], xc.prototype, 'referencedType', void 0), xc;
                            }(_sc),
                            wc = function(xc) {
                                function yc() {
                                    var zc = null !== xc && xc.apply(this, arguments) || this;
                                    return zc.fields = new cb(), zc;
                                }
                                return R(yc, xc), S([mb('number', uc)], yc.prototype, 'id', void 0), S([mb([vc], uc)], yc.prototype, 'fields', void 0), yc;
                            }(_sc),
                            xc = function(yc) {
                                function zc() {
                                    var Ac = null !== yc && yc.apply(this, arguments) || this;
                                    return Ac.types = new cb(), Ac;
                                }
                                return R(zc, yc), zc.encode = function(Ac) {
                                    var Bc = Ac.constructor,
                                        Cc = new zc();
                                    Cc.rootType = Bc._typeid;
                                    var Dc = function(Ec, Fc) {
                                            for (var Gc in Fc) {
                                                var Hc = new vc();
                                                Hc.name = Gc;
                                                var Ic = void 0;
                                                if ('string' == typeof Fc[Gc])
                                                    Ic = Fc[Gc];
                                                else {
                                                    var Jc = Fc[Gc],
                                                        Kc = void 0;
                                                    _sc.is(Jc) ? (Ic = 'ref', Kc = Fc[Gc]) : 'string' == typeof Jc[Ic = Object.keys(Jc)[0]] ? Ic += ':' + Jc[Ic] : Kc = Jc[Ic], Hc.referencedType = Kc ? Kc._typeid : -1;
                                                }
                                                Hc.type = Ic, Ec.fields.push(Hc);
                                            }
                                            Cc.types.push(Ec);
                                        },
                                        Ec = Bc._context.types;
                                    for (var Fc in Ec) {
                                        var Gc = new wc();
                                        Gc.id = Number(Fc), Dc(Gc, Ec[Fc]._definition.schema);
                                    }
                                    return Cc.encodeAll();
                                }, zc.decode = function(Ac, Bc) {
                                    var Cc = new kb(),
                                        Dc = new zc();
                                    Dc.decode(Ac, Bc);
                                    var Ec = Dc.types.reduce(function(Fc, Gc) {
                                        var Hc = function(Ic) {
                                                function Jc() {
                                                    return null !== Ic && Ic.apply(this, arguments) || this;
                                                }
                                                return R(Jc, Ic), Jc;
                                            }(_sc),
                                            Ic = Gc.id;
                                        return Fc[Ic] = Hc, Cc.add(Hc, Ic), Fc;
                                    }, {});
                                    Dc.types.forEach(function(Fc) {
                                        var Gc = Ec[Fc.id];
                                        Fc.fields.forEach(function(Hc) {
                                            var Ic;
                                            if (void 0 !== Hc.referencedType) {
                                                var Jc = Hc.type,
                                                    Kc = Ec[Hc.referencedType];
                                                if (!Kc) {
                                                    var Lc = Hc.type.split(':');
                                                    Jc = Lc[0], Kc = Lc[1];
                                                }
                                                'ref' === Jc ? mb(Kc, {
                                                    context: Cc
                                                })(Gc.prototype, Hc.name) : mb(((Ic = {})[Jc] = Kc, Ic), {
                                                    context: Cc
                                                })(Gc.prototype, Hc.name);
                                            } else
                                                mb(Hc.type, {
                                                    context: Cc
                                                })(Gc.prototype, Hc.name);
                                        });
                                    });
                                    var Fc = Ec[Dc.rootType],
                                        Gc = new Fc();
                                    for (var Hc in Fc._definition.schema) {
                                        var Ic = Fc._definition.schema[Hc];
                                        'string' != typeof Ic && (Gc[Hc] = 'function' == typeof Ic ? new Ic() : new(hb(Object.keys(Ic)[0])).constructor());
                                    }
                                    return Gc;
                                }, S([mb([wc], uc)], zc.prototype, 'types', void 0), S([mb('number', uc)], zc.prototype, 'rootType', void 0), zc;
                            }(_sc);
                        gb('map', {
                            constructor: eb
                        }), gb('array', {
                            constructor: cb
                        }), gb('set', {
                            constructor: kc
                        }), gb('collection', {
                            constructor: jc
                        }), P.ArraySchema = cb, P.CollectionSchema = jc, P.Context = kb, P.MapSchema = eb, P.Reflection = xc, P.ReflectionField = vc, P.ReflectionType = wc, P.Schema = _sc, P.SchemaDefinition = ib, P.SetSchema = kc, P.decode = ic, P.defineTypes = qb, P.deprecated = pb, P.dumpChanges = tc, P.encode = Lb, P.filter = nb, P.filterChildren = ob, P.hasFilter = jb, P.registerType = gb, P.type = mb, Object.defineProperty(P, '__esModule', {
                            value: !0
                        });
                    });
                }),
                N = function() {
                    function O(P, Q) {
                        var R = this;
                        this.onStateChange = K(), this.onError = K(), this.onLeave = K(), this.onJoin = K(), this.hasJoined = !1, this.onMessageHandlers = I(), this.roomId = null, this.name = P, Q && (this.serializer = new(H('schema'))(), this.rootSchema = Q, this.serializer.state = new Q()), this.onError(function(S, T) {
                            var U;
                            return null === (U = console.warn) || void 0 === U ? void 0 : U.call(console, 'colyseus.js - onError => ('.concat(S, ') ').concat(T));
                        }), this.onLeave(function() {
                            return R.removeAllListeners();
                        });
                    }
                    return Object.defineProperty(O.prototype, 'id', {
                        get: function() {
                            return this.roomId;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), O.prototype.connect = function(P, Q, R) {
                        void 0 === R && (R = this);
                        var S = new C();
                        R.connection = S, S.events.onmessage = O.prototype.onMessageCallback.bind(R), S.events.onclose = function(T) {
                            var U;
                            if (!R.hasJoined)
                                return null === (U = console.warn) || void 0 === U || U.call(console, 'Room connection was closed unexpectedly ('.concat(T.code, '): ').concat(T.reason)), void R.onError.invoke(T.code, T.reason);
                            T.code === h.DEVMODE_RESTART && Q ? Q() : (R.onLeave.invoke(T.code), R.destroy());
                        }, S.events.onerror = function(T) {
                            var U;
                            null === (U = console.warn) || void 0 === U || U.call(console, 'Room, onError ('.concat(T.code, '): ').concat(T.reason)), R.onError.invoke(T.code, T.reason);
                        }, S.connect(P);
                    }, O.prototype.leave = function(P) {
                        var Q = this;
                        return void 0 === P && (P = !0), new Promise(function(R) {
                            Q.onLeave(function(S) {
                                return R(S);
                            }), Q.connection ? P ? Q.connection.send([d.Protocol.LEAVE_ROOM]) : Q.connection.close() : Q.onLeave.invoke(h.CONSENTED);
                        });
                    }, O.prototype.onMessage = function(P, Q) {
                        return this.onMessageHandlers.on(this.getMessageHandlerKey(P), Q);
                    }, O.prototype.send = function(P, Q) {
                        var R, S = [d.Protocol.ROOM_DATA];
                        if ('string' == typeof P ? M.encode.string(S, P) : M.encode.number(S, P), void 0 !== Q) {
                            var T = w(Q);
                            (R = new Uint8Array(S.length + T.byteLength)).set(new Uint8Array(S), 0), R.set(new Uint8Array(T), S.length);
                        } else
                            R = new Uint8Array(S);
                        this.connection.send(R.buffer);
                    }, O.prototype.sendBytes = function(P, Q) {
                        var R, S = [d.Protocol.ROOM_DATA_BYTES];
                        'string' == typeof P ? M.encode.string(S, P) : M.encode.number(S, P), (R = new Uint8Array(S.length + (Q.byteLength || Q.length))).set(new Uint8Array(S), 0), R.set(new Uint8Array(Q), S.length), this.connection.send(R.buffer);
                    }, Object.defineProperty(O.prototype, 'state', {
                        get: function() {
                            return this.serializer.getState();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), O.prototype.removeAllListeners = function() {
                        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {};
                    }, O.prototype.onMessageCallback = function(P) {
                        var Q = Array.from(new Uint8Array(P.data)),
                            R = Q[0];
                        if (R === d.Protocol.JOIN_ROOM) {
                            var S = 1,
                                T = D(Q, S);
                            if (S += E(T), this.serializerId = D(Q, S), S += E(this.serializerId), !this.serializer) {
                                var U = H(this.serializerId);
                                this.serializer = new U();
                            }
                            Q.length > S && this.serializer.handshake && this.serializer.handshake(Q, {
                                offset: S
                            }), this.reconnectionToken = ''.concat(this.roomId, ':').concat(T), this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([d.Protocol.JOIN_ROOM]);
                        } else if (R === d.Protocol.ERROR) {
                            var S = {
                                    offset: 1
                                },
                                T = M.decode.number(Q, S),
                                U = M.decode.string(Q, S);
                            this.onError.invoke(T, U);
                        } else if (R === d.Protocol.LEAVE_ROOM)
                            this.leave();
                        else if (R === d.Protocol.ROOM_DATA_SCHEMA) {
                            var S = {
                                offset: 1
                            };
                            (l = new(o = (this.serializer.getState().constructor._context.get(M.decode.number(Q, S))))()).decode(Q, S), this.dispatchMessage(o, l);
                        } else if (R === d.Protocol.ROOM_STATE)
                            Q.shift(), this.setState(Q);
                        else if (R === d.Protocol.ROOM_STATE_PATCH)
                            Q.shift(), this.patch(Q);
                        else if (R === d.Protocol.ROOM_DATA) {
                            var S = {
                                    offset: 1
                                },
                                T = M.decode.stringCheck(Q, S) ? M.decode.string(Q, S) : M.decode.number(Q, S);
                            l = Q.length > S.offset ? q(P.data, S.offset) : void 0, this.dispatchMessage(T, l);
                        } else if (R === d.Protocol.ROOM_DATA_BYTES) {
                            var S = {
                                offset: 1
                            };
                            o = M.decode.stringCheck(Q, S) ? M.decode.string(Q, S) : M.decode.number(Q, S), this.dispatchMessage(o, new Uint8Array(Q.slice(S.offset)));
                        }
                    }, O.prototype.setState = function(P) {
                        this.serializer.setState(P), this.onStateChange.invoke(this.serializer.getState());
                    }, O.prototype.patch = function(P) {
                        this.serializer.patch(P), this.onStateChange.invoke(this.serializer.getState());
                    }, O.prototype.dispatchMessage = function(P, Q) {
                        var R, S = this.getMessageHandlerKey(P);
                        this.onMessageHandlers.events[S] ? this.onMessageHandlers.emit(S, Q) : this.onMessageHandlers.events['*'] ? this.onMessageHandlers.emit('*', P, Q) : null === (R = console.warn) || void 0 === R || R.call(console, 'colyseus.js: onMessage() not registered for type \''.concat(P, '\'.'));
                    }, O.prototype.destroy = function() {
                        this.serializer && this.serializer.teardown();
                    }, O.prototype.getMessageHandlerKey = function(P) {
                        switch (typeof P) {
                            case 'function':
                                return '$'.concat(P._typeid);
                            case 'string':
                                return P;
                            case 'number':
                                return 'i'.concat(P);
                            default:
                                throw new Error('invalid message type.');
                        }
                    }, O;
                }();

            function O(P, Q) {
                Q.statusMessage = P.statusText, Q.statusCode = P.status, Q.data = P.body;
            }

            function P(Q, R, S) {
                var T, U, V = (S = S || {}).body;
                return S.method = Q, S.headers = S.headers || {}, V instanceof FormData || V && 'object' == typeof V && (S.headers['content-type'] = 'application/json', S.body = JSON.stringify(V)), S.withCredentials && (S.credentials = 'include'), S.timeout && (U = new AbortController(), S.signal = U.signal, T = setTimeout(U.abort, S.timeout)), new Promise((Q, i) => {
                    fetch(R, S).then((R, U) => {
                        clearTimeout(T), O(R, R), U = R.status >= 400 ? i : Q, (V = R.headers.get('content-type')) && ~V.indexOf('application/json') ? R.text().then(Q => {
                            try {
                                R.data = JSON.parse(Q, S.reviver), U(R);
                            } catch (Q) {
                                Q.headers = R.headers, O(R, Q), i(Q);
                            }
                        }) : U(R);
                    }).catch(Q => {
                        Q.timeout = U && U.signal.aborted, i(Q);
                    });
                });
            }
            var Q, R, S, T, U, V = P.bind(P, 'GET'),
                W = P.bind(P, 'POST'),
                X = P.bind(P, 'PATCH'),
                Y = P.bind(P, 'DELETE'),
                Z = P.bind(P, 'PUT'),
                $ = {
                    del: Y,
                    get: V,
                    patch: X,
                    post: W,
                    put: Z,
                    send: P
                },
                ab = e({
                    __proto__: null,
                    default: $,
                    del: Y,
                    get: V,
                    patch: X,
                    post: W,
                    put: Z,
                    send: P
                }, [$]),
                bb = function() {
                    function cb(db) {
                        this.client = db;
                    }
                    return cb.prototype.get = function(db, eb) {
                        return void 0 === eb && (eb = {}), this.request('get', db, eb);
                    }, cb.prototype.post = function(db, eb) {
                        return void 0 === eb && (eb = {}), this.request('post', db, eb);
                    }, cb.prototype.del = function(db, eb) {
                        return void 0 === eb && (eb = {}), this.request('del', db, eb);
                    }, cb.prototype.put = function(db, eb) {
                        return void 0 === eb && (eb = {}), this.request('put', db, eb);
                    }, cb.prototype.request = function(db, eb, fb) {
                        return void 0 === fb && (fb = {}), ab[db](this.client.getHttpEndpoint(eb), this.getOptions(fb)).catch(function(gb) {
                            var hb;
                            throw new n(gb.statusCode || -1, (null === (hb = gb.data) || void 0 === hb ? void 0 : hb.error) || gb.statusMessage || gb.message || 'offline');
                        });
                    }, cb.prototype.getOptions = function(db) {
                        return this.authToken && (db.headers || (db.headers = {}), db.headers.Authorization = 'Bearer '.concat(this.authToken), db.withCredentials = !0), db;
                    }, cb;
                }();

            function cb() {
                return Q || (Q = 'undefined' != typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : 'undefined' != typeof window && window.localStorage ? window.localStorage : {
                    cache: {},
                    setItem: function(db, eb) {
                        this.cache[db] = eb;
                    },
                    getItem: function(db) {
                        this.cache[db];
                    },
                    removeItem: function(db) {
                        delete this.cache[db];
                    }
                }), Q;
            }

            function db(eb, fb) {
                cb().setItem(eb, fb);
            }

            function eb(fb) {
                cb().removeItem(fb);
            }

            function fb(gb, hb) {
                var ib = cb().getItem(gb);
                'undefined' != typeof Promise && ib instanceof Promise ? ib.then(function(jb) {
                    return hb(jb);
                }) : hb(ib);
            }
            var gb, hb = function() {
                function ib(jb) {
                    var kb = this;
                    this.http = jb, this.settings = {
                        path: '/auth',
                        key: 'colyseus-auth-token'
                    }, R.set(this, !1), S.set(this, void 0), T.set(this, void 0), U.set(this, I()), fb(this.settings.key, function(lb) {
                        return kb.token = lb;
                    });
                }
                return Object.defineProperty(ib.prototype, 'token', {
                    get: function() {
                        return this.http.authToken;
                    },
                    set: function(jb) {
                        this.http.authToken = jb;
                    },
                    enumerable: !1,
                    configurable: !0
                }), ib.prototype.onChange = function(jb) {
                    var kb = this,
                        lb = l(this, U, 'f').on('change', jb);
                    return l(this, R, 'f') || m(this, S, new Promise(function(mb, nb) {
                        kb.getUserData().then(function(ob) {
                            kb.emitChange(i(i({}, ob), {
                                token: kb.token
                            }));
                        }).catch(function(ob) {
                            kb.emitChange({
                                user: null,
                                token: void 0
                            });
                        }).finally(function() {
                            mb();
                        });
                    }), 'f'), m(this, R, !0, 'f'), lb;
                }, ib.prototype.getUserData = function() {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(jb) {
                            switch (jb.label) {
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
                                        jb.sent().data
                                    ];
                                case 2:
                                    throw new Error('missing auth.token');
                            }
                        });
                    });
                }, ib.prototype.registerWithEmailAndPassword = function(jb, kb, lb) {
                    return j(this, void 0, void 0, function() {
                        var mb;
                        return k(this, function(nb) {
                            switch (nb.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/register'), {
                                            body: {
                                                email: jb,
                                                password: kb,
                                                options: lb
                                            }
                                        })
                                    ];
                                case 1:
                                    return mb = nb.sent().data, this.emitChange(mb), [
                                        2,
                                        mb
                                    ];
                            }
                        });
                    });
                }, ib.prototype.signInWithEmailAndPassword = function(jb, kb) {
                    return j(this, void 0, void 0, function() {
                        var lb;
                        return k(this, function(mb) {
                            switch (mb.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/login'), {
                                            body: {
                                                email: jb,
                                                password: kb
                                            }
                                        })
                                    ];
                                case 1:
                                    return lb = mb.sent().data, this.emitChange(lb), [
                                        2,
                                        lb
                                    ];
                            }
                        });
                    });
                }, ib.prototype.signInAnonymously = function(jb) {
                    return j(this, void 0, void 0, function() {
                        var kb;
                        return k(this, function(lb) {
                            switch (lb.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/anonymous'), {
                                            body: {
                                                options: jb
                                            }
                                        })
                                    ];
                                case 1:
                                    return kb = lb.sent().data, this.emitChange(kb), [
                                        2,
                                        kb
                                    ];
                            }
                        });
                    });
                }, ib.prototype.sendPasswordResetEmail = function(jb) {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(kb) {
                            switch (kb.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/forgot-password'), {
                                            body: {
                                                email: jb
                                            }
                                        })
                                    ];
                                case 1:
                                    return [
                                        2,
                                        kb.sent().data
                                    ];
                            }
                        });
                    });
                }, ib.prototype.signInWithProvider = function(jb, kb) {
                    return void 0 === kb && (kb = {}), j(this, void 0, void 0, function() {
                        var lb = this;
                        return k(this, function(mb) {
                            return [
                                2,
                                new Promise(function(nb, ob) {
                                    var pb = kb.width || 480,
                                        qb = kb.height || 768,
                                        rb = lb.token ? '?token='.concat(lb.token) : '',
                                        sb = 'Login with '.concat(jb[0].toUpperCase() + jb.substring(1)),
                                        tb = lb.http.client.getHttpEndpoint(''.concat(kb.prefix || ''.concat(lb.settings.path, '/provider'), '/').concat(jb).concat(rb)),
                                        ub = screen.width / 2 - pb / 2,
                                        vb = screen.height / 2 - qb / 2;
                                    m(lb, T, window.open(tb, sb, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + pb + ', height=' + qb + ', top=' + vb + ', left=' + ub), 'f');
                                    var wb = function(xb) {
                                            void 0 === xb.data.user && void 0 === xb.data.token || (clearInterval(r), l(lb, T, 'f').close(), m(lb, T, void 0, 'f'), window.removeEventListener('message', wb), void 0 !== xb.data.error ? ob(xb.data.error) : (nb(xb.data), lb.emitChange(xb.data)));
                                        },
                                        xb = setInterval(function() {
                                            l(lb, T, 'f') && !l(lb, T, 'f').closed || (m(lb, T, void 0, 'f'), ob('cancelled'), window.removeEventListener('message', wb));
                                        }, 200);
                                    window.addEventListener('message', wb);
                                })
                            ];
                        });
                    });
                }, ib.prototype.signOut = function() {
                    return j(this, void 0, void 0, function() {
                        return k(this, function(jb) {
                            return this.emitChange({
                                user: null,
                                token: null
                            }), [2];
                        });
                    });
                }, ib.prototype.emitChange = function(jb) {
                    void 0 !== jb.token && (this.token = jb.token, null === jb.token ? eb(this.settings.key) : db(this.settings.key, jb.token)), l(this, U, 'f').emit('change', jb);
                }, ib;
            }();
            R = new WeakMap(), S = new WeakMap(), T = new WeakMap(), U = new WeakMap();
            var ib = function(jb) {
                    function kb(lb, mb) {
                        var nb = jb.call(this, lb) || this;
                        return nb.code = mb, Object.setPrototypeOf(nb, kb.prototype), nb;
                    }
                    return g(kb, jb), kb;
                }(Error),
                jb = 'undefined' != typeof window && void 0 !== (null === (gb = null === window || void 0 === window ? void 0 : window.location) || void 0 === gb ? void 0 : gb.hostname) ? ''.concat(window.location.protocol.replace('http', 'ws'), '//').concat(window.location.hostname).concat(window.location.port && ':'.concat(window.location.port)) : 'ws://127.0.0.1:2567',
                kb = function() {
                    function lb(mb) {
                        if (void 0 === mb && (mb = jb), 'string' == typeof mb) {
                            var nb = new URL(mb),
                                ob = 'https:' === nb.protocol || 'wss:' === nb.protocol,
                                pb = Number(nb.port || (ob ? 443 : 80));
                            this.settings = {
                                hostname: nb.hostname,
                                pathname: nb.pathname,
                                port: pb,
                                secure: ob
                            };
                        } else
                            void 0 === mb.port && (mb.port = mb.secure ? 443 : 80), void 0 === mb.pathname && (mb.pathname = ''), this.settings = mb;
                        this.settings.pathname.endsWith('/') && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new bb(this), this.auth = new hb(this.http);
                    }
                    return lb.prototype.joinOrCreate = function(mb, nb, ob) {
                        return void 0 === nb && (nb = {}), j(this, void 0, void 0, function() {
                            return k(this, function(pb) {
                                switch (pb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinOrCreate', mb, nb, ob)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            pb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.create = function(mb, nb, ob) {
                        return void 0 === nb && (nb = {}), j(this, void 0, void 0, function() {
                            return k(this, function(pb) {
                                switch (pb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('create', mb, nb, ob)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            pb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.join = function(mb, nb, ob) {
                        return void 0 === nb && (nb = {}), j(this, void 0, void 0, function() {
                            return k(this, function(pb) {
                                switch (pb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('join', mb, nb, ob)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            pb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.joinById = function(mb, nb, ob) {
                        return void 0 === nb && (nb = {}), j(this, void 0, void 0, function() {
                            return k(this, function(pb) {
                                switch (pb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinById', mb, nb, ob)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            pb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.reconnect = function(mb, nb) {
                        return j(this, void 0, void 0, function() {
                            var ob, pb, qb;
                            return k(this, function(rb) {
                                switch (rb.label) {
                                    case 0:
                                        if ('string' == typeof mb && 'string' == typeof nb)
                                            throw new Error('DEPRECATED: .reconnect() now only accepts \'reconnectionToken\' as argument.\nYou can get this token from previously connected `room.reconnectionToken`');
                                        if (ob = mb.split(':'), pb = ob[0], qb = ob[1], !pb || !qb)
                                            throw new Error('Invalid reconnection token format.\nThe format should be roomId:reconnectionToken');
                                        return [
                                            4,
                                            this.createMatchMakeRequest('reconnect', pb, {
                                                reconnectionToken: qb
                                            }, nb)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            rb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.getAvailableRooms = function(mb) {
                        return void 0 === mb && (mb = ''), j(this, void 0, void 0, function() {
                            return k(this, function(nb) {
                                switch (nb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.get('matchmake/'.concat(mb), {
                                                headers: {
                                                    Accept: 'application/json'
                                                }
                                            })
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            nb.sent().data
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.consumeSeatReservation = function(mb, nb, ob) {
                        return j(this, void 0, void 0, function() {
                            var pb, qb, rb, sb = this;
                            return k(this, function(tb) {
                                return (pb = this.createRoom(mb.room.name, nb)).roomId = mb.room.roomId, pb.sessionId = mb.sessionId, qb = {
                                    sessionId: pb.sessionId
                                }, mb.reconnectionToken && (qb.reconnectionToken = mb.reconnectionToken), rb = ob || pb, pb.connect(this.buildEndpoint(mb.room, qb), mb.devMode && function() {
                                    return j(sb, void 0, void 0, function() {
                                        var ub, vb, wb, xb = this;
                                        return k(this, function(yb) {
                                            return console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' Re-establishing connection with room id \'').concat(pb.roomId, '\'...')), ub = 0, vb = 8, wb = function() {
                                                return j(xb, void 0, void 0, function() {
                                                    return k(this, function(zb) {
                                                        switch (zb.label) {
                                                            case 0:
                                                                ub++, zb.label = 1;
                                                            case 1:
                                                                return zb.trys.push([
                                                                    1,
                                                                    3, ,
                                                                    4
                                                                ]), [
                                                                    4,
                                                                    this.consumeSeatReservation(mb, nb, rb)
                                                                ];
                                                            case 2:
                                                                return zb.sent(), console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(9989), ' Successfully re-established connection with room \'').concat(pb.roomId, '\'')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 3:
                                                                return zb.sent(), ub < vb ? (console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' retrying... (').concat(ub, ' out of ').concat(vb, ')')), setTimeout(wb, 2000)) : console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(10060), ' Failed to reconnect. Is your server running? Please check server logs.')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 4:
                                                                return [2];
                                                        }
                                                    });
                                                });
                                            }, setTimeout(wb, 2000), [2];
                                        });
                                    });
                                }, rb), [
                                    2,
                                    new Promise(function(ub, vb) {
                                        var wb = function(xb, yb) {
                                            return vb(new n(xb, yb));
                                        };
                                        rb.onError.once(wb), rb.onJoin.once(function() {
                                            rb.onError.remove(wb), ub(rb);
                                        });
                                    })
                                ];
                            });
                        });
                    }, lb.prototype.createMatchMakeRequest = function(mb, nb, ob, pb, qb) {
                        return void 0 === ob && (ob = {}), j(this, void 0, void 0, function() {
                            var rb;
                            return k(this, function(sb) {
                                switch (sb.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.post('matchmake/'.concat(mb, '/').concat(nb), {
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(ob)
                                            })
                                        ];
                                    case 1:
                                        if ((rb = sb.sent().data).error)
                                            throw new ib(rb.error, rb.code);
                                        return 'reconnect' === mb && (rb.reconnectionToken = ob.reconnectionToken), [
                                            4,
                                            this.consumeSeatReservation(rb, pb, qb)
                                        ];
                                    case 2:
                                        return [
                                            2,
                                            sb.sent()
                                        ];
                                }
                            });
                        });
                    }, lb.prototype.createRoom = function(mb, nb) {
                        return new N(mb, nb);
                    }, lb.prototype.buildEndpoint = function(mb, nb) {
                        void 0 === nb && (nb = {});
                        var ob = [];
                        for (var pb in nb)
                            nb.hasOwnProperty(pb) && ob.push(''.concat(pb, '=').concat(nb[pb]));
                        var qb = this.settings.secure ? 'wss://' : 'ws://';
                        return mb.publicAddress ? qb += ''.concat(mb.publicAddress) : qb += ''.concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname), ''.concat(qb, '/').concat(mb.processId, '/').concat(mb.roomId, '?').concat(ob.join('&'));
                    }, lb.prototype.getHttpEndpoint = function(mb) {
                        void 0 === mb && (mb = '');
                        var nb = mb.startsWith('/') ? mb : '/'.concat(mb);
                        return ''.concat(this.settings.secure ? 'https' : 'http', '://').concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(nb);
                    }, lb.prototype.getEndpointPort = function() {
                        return 80 !== this.settings.port && 443 !== this.settings.port ? ':'.concat(this.settings.port) : '';
                    }, lb;
                }(),
                lb = function() {
                    function mb() {}
                    return mb.prototype.setState = function(nb) {
                        return this.state.decode(nb);
                    }, mb.prototype.getState = function() {
                        return this.state;
                    }, mb.prototype.patch = function(nb) {
                        return this.state.decode(nb);
                    }, mb.prototype.teardown = function() {
                        var nb, ob;
                        null === (ob = null === (nb = this.state) || void 0 === nb ? void 0 : nb.$changes) || void 0 === ob || ob.root.clearRefs();
                    }, mb.prototype.handshake = function(nb, ob) {
                        this.state ? new M.Reflection().decode(nb, ob) : this.state = M.Reflection.decode(nb, ob);
                    }, mb;
                }(),
                mb = function() {
                    function nb() {}
                    return nb.prototype.setState = function(ob) {}, nb.prototype.getState = function() {
                        return null;
                    }, nb.prototype.patch = function(ob) {}, nb.prototype.teardown = function() {}, nb.prototype.handshake = function(ob) {}, nb;
                }();
            G('schema', lb), G('none', mb), d.Auth = hb, d.Client = kb, d.Room = N, d.SchemaSerializer = lb, d.registerSerializer = G, Object.defineProperty(d, '__esModule', {
                value: !0
            });
        }(b.exports);
});