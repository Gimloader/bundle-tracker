var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {};
a.parcelRequire388b.register('lJnts', function(g, b) {
    g.exports,
        function(g) {
            function b(a, g) {
                return g.forEach(function(g) {
                    g && 'string' != typeof g && !Array.isArray(g) && Object.keys(g).forEach(function(b) {
                        if ('default' !== b && !(b in a)) {
                            var c = Object.getOwnPropertyDescriptor(g, b);
                            Object.defineProperty(a, b, c.get ? c : {
                                enumerable: !0,
                                get: function() {
                                    return g[b];
                                }
                            });
                        }
                    });
                }), Object.freeze(a);
            }
            ArrayBuffer.isView || (ArrayBuffer.isView = function(a) {
                return null !== a && 'object' == typeof a && a.buffer instanceof ArrayBuffer;
            }), 'undefined' == typeof globalThis && 'undefined' != typeof window && (window.globalThis = window);
            var c = function(a, g) {
                return c = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, g) {
                    a.__proto__ = g;
                } || function(a, g) {
                    for (var d in g)
                        Object.prototype.hasOwnProperty.call(g, d) && (a[d] = g[d]);
                }, c(a, g);
            };

            function d(a, g) {
                if ('function' != typeof g && null !== g)
                    throw new TypeError('Class extends value ' + String(g) + ' is not a constructor or null');

                function e() {
                    this.constructor = a;
                }
                c(a, g), a.prototype = null === g ? Object.create(g) : (e.prototype = g.prototype, new e());
            }
            var e, f = function() {
                return f = Object.assign || function(a) {
                    for (var g, h = 1, i = arguments.length; h < i; h++)
                        for (var j in g = arguments[h])
                            Object.prototype.hasOwnProperty.call(g, j) && (a[j] = g[j]);
                    return a;
                }, f.apply(this, arguments);
            };

            function g(a, l, b, c) {
                function h(a) {
                    return a instanceof b ? a : new b(function(l) {
                        l(a);
                    });
                }
                return new(b || (b = Promise))(function(b, e) {
                    function i(a) {
                        try {
                            k(c.next(a));
                        } catch (a) {
                            e(a);
                        }
                    }

                    function j(a) {
                        try {
                            k(c.throw(a));
                        } catch (a) {
                            e(a);
                        }
                    }

                    function k(a) {
                        a.done ? b(a.value) : h(a.value).then(i, j);
                    }
                    k((c = c.apply(a, l || [])).next());
                });
            }

            function h(a, l) {
                var i, j, k, l, m = {
                    label: 0,
                    sent: function() {
                        if (1 & k[0])
                            throw k[1];
                        return k[1];
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: g(0),
                    throw: g(1),
                    return: g(2)
                }, 'function' == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this;
                }), l;

                function n(a) {
                    return function(l) {
                        return h([
                            a,
                            l
                        ]);
                    };
                }

                function o(n) {
                    if (i)
                        throw new TypeError('Generator is already executing.');
                    for (; l && (l = 0, n[0] && (m = 0)), m;)
                        try {
                            if (i = 1, j && (k = 2 & n[0] ? j.return : n[0] ? j.throw || ((k = j.return) && k.call(j), 0) : j.next) && !(k = k.call(j, n[1])).done)
                                return k;
                            switch (j = 0, k && (n = [
                                    2 & n[0],
                                    k.value
                                ]), n[0]) {
                                case 0:
                                case 1:
                                    k = n;
                                    break;
                                case 4:
                                    return m.label++, {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    m.label++, j = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = m.ops.pop(), m.trys.pop();
                                    continue;
                                default:
                                    if (!((k = (k = m.trys).length > 0 && k[k.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                        m = 0;
                                        continue;
                                    }
                                    if (3 === n[0] && (!k || n[1] > k[0] && n[1] < k[3])) {
                                        m.label = n[1];
                                        break;
                                    }
                                    if (6 === n[0] && m.label < k[1]) {
                                        m.label = k[1], k = n;
                                        break;
                                    }
                                    if (k && m.label < k[2]) {
                                        m.label = k[2], m.ops.push(n);
                                        break;
                                    }
                                    k[2] && m.ops.pop(), m.trys.pop();
                                    continue;
                            }
                            n = l.call(a, m);
                        } catch (a) {
                            n = [
                                6,
                                a
                            ], j = 0;
                        } finally {
                            i = k = 0;
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    };
                }
            }

            function i(a, l, b, c) {
                if ('a' === b && !c)
                    throw new TypeError('Private accessor was defined without a getter');
                if ('function' == typeof l ? a !== l || !c : !l.has(a))
                    throw new TypeError('Cannot read private member from an object whose class did not declare it');
                return 'm' === b ? c : 'a' === b ? c.call(a) : c ? c.value : l.get(a);
            }

            function j(a, l, b, c, d) {
                if ('m' === c)
                    throw new TypeError('Private method is not writable');
                if ('a' === c && !d)
                    throw new TypeError('Private accessor was defined without a setter');
                if ('function' == typeof l ? a !== l || !d : !l.has(a))
                    throw new TypeError('Cannot write private member to an object whose class did not declare it');
                return 'a' === c ? d.call(a, b) : d ? d.value = b : l.set(a, b), b;
            }! function(a) {
                a[a.CONSENTED = 4000] = 'CONSENTED', a[a.DEVMODE_RESTART = 4010] = 'DEVMODE_RESTART';
            }(e || (e = {}));
            var k = function(a) {
                function l(l, b) {
                    var m = a.call(this, b) || this;
                    return m.name = 'ServerError', m.code = l, m;
                }
                return d(l, a), l;
            }(Error);

            function l(a, q) {
                if (this._offset = q, a instanceof ArrayBuffer)
                    this._buffer = a, this._view = new DataView(this._buffer);
                else {
                    if (!ArrayBuffer.isView(a))
                        throw new Error('Invalid argument');
                    this._buffer = a.buffer, this._view = new DataView(this._buffer, a.byteOffset, a.byteLength);
                }
            }

            function m(a, q, b) {
                for (var n = '', o = 0, p = q, r = q + b; p < r; p++) {
                    var s = a.getUint8(p);
                    if (0 != (128 & s))
                        if (192 != (224 & s))
                            if (224 != (240 & s)) {
                                if (240 != (248 & s))
                                    throw new Error('Invalid byte ' + s.toString(16));
                                (o = (7 & s) << 18 | (63 & a.getUint8(++p)) << 12 | (63 & a.getUint8(++p)) << 6 | (63 & a.getUint8(++p)) << 0) >= 65536 ? (o -= 65536, n += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : n += String.fromCharCode(o);
                            } else
                                n += String.fromCharCode((15 & s) << 12 | (63 & a.getUint8(++p)) << 6 | (63 & a.getUint8(++p)) << 0);
                    else
                        n += String.fromCharCode((31 & s) << 6 | 63 & a.getUint8(++p));
                    else
                        n += String.fromCharCode(s);
                }
                return n;
            }

            function n(a, o) {
                void 0 === o && (o = 0);
                var o = new l(a, o),
                    p = o._parse();
                if (o._offset !== a.byteLength)
                    throw new Error(a.byteLength - o._offset + ' trailing bytes');
                return p;
            }
            l.prototype._array = function(a) {
                for (var o = new Array(a), p = 0; p < a; p++)
                    o[p] = this._parse();
                return o;
            }, l.prototype._map = function(a) {
                for (var o = {}, p = 0; p < a; p++)
                    o[this._parse()] = this._parse();
                return o;
            }, l.prototype._str = function(a) {
                var o = m(this._view, this._offset, a);
                return this._offset += a, o;
            }, l.prototype._bin = function(a) {
                var o = this._buffer.slice(this._offset, this._offset + a);
                return this._offset += a, o;
            }, l.prototype._parse = function() {
                var o, p = this._view.getUint8(this._offset++),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (p < 192)
                    return p < 128 ? p : p < 144 ? this._map(15 & p) : p < 160 ? this._array(15 & p) : this._str(31 & p);
                if (p > 223)
                    return -1 * (255 - p + 1);
                switch (p) {
                    case 192:
                        return null;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 196:
                        return q = this._view.getUint8(this._offset), this._offset += 1, this._bin(q);
                    case 197:
                        return q = this._view.getUint16(this._offset), this._offset += 2, this._bin(q);
                    case 198:
                        return q = this._view.getUint32(this._offset), this._offset += 4, this._bin(q);
                    case 199:
                        if (q = this._view.getUint8(this._offset), r = this._view.getInt8(this._offset + 1), this._offset += 2, -1 === r) {
                            var u = this._view.getUint32(this._offset);
                            return s = this._view.getInt32(this._offset + 4), t = this._view.getUint32(this._offset + 8), this._offset += 12, new Date(1000 * (4294967296 * s + t) + u / 1000000);
                        }
                        return [
                            r,
                            this._bin(q)
                        ];
                    case 200:
                        return q = this._view.getUint16(this._offset), r = this._view.getInt8(this._offset + 2), this._offset += 3, [
                            r,
                            this._bin(q)
                        ];
                    case 201:
                        return q = this._view.getUint32(this._offset), r = this._view.getInt8(this._offset + 4), this._offset += 5, [
                            r,
                            this._bin(q)
                        ];
                    case 202:
                        return o = this._view.getFloat32(this._offset), this._offset += 4, o;
                    case 203:
                        return o = this._view.getFloat64(this._offset), this._offset += 8, o;
                    case 204:
                        return o = this._view.getUint8(this._offset), this._offset += 1, o;
                    case 205:
                        return o = this._view.getUint16(this._offset), this._offset += 2, o;
                    case 206:
                        return o = this._view.getUint32(this._offset), this._offset += 4, o;
                    case 207:
                        return s = this._view.getUint32(this._offset) * Math.pow(2, 32), t = this._view.getUint32(this._offset + 4), this._offset += 8, s + t;
                    case 208:
                        return o = this._view.getInt8(this._offset), this._offset += 1, o;
                    case 209:
                        return o = this._view.getInt16(this._offset), this._offset += 2, o;
                    case 210:
                        return o = this._view.getInt32(this._offset), this._offset += 4, o;
                    case 211:
                        return s = this._view.getInt32(this._offset) * Math.pow(2, 32), t = this._view.getUint32(this._offset + 4), this._offset += 8, s + t;
                    case 212:
                        return r = this._view.getInt8(this._offset), this._offset += 1, 0 === r ? void(this._offset += 1) : [
                            r,
                            this._bin(1)
                        ];
                    case 213:
                        return r = this._view.getInt8(this._offset), this._offset += 1, [
                            r,
                            this._bin(2)
                        ];
                    case 214:
                        return r = this._view.getInt8(this._offset), this._offset += 1, -1 === r ? (o = this._view.getUint32(this._offset), this._offset += 4, new Date(1000 * o)) : [
                            r,
                            this._bin(4)
                        ];
                    case 215:
                        return r = this._view.getInt8(this._offset), this._offset += 1, 0 === r ? (s = this._view.getInt32(this._offset) * Math.pow(2, 32), t = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(s + t)) : -1 === r ? (s = this._view.getUint32(this._offset), t = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1000 * (4294967296 * (3 & s) + t) + (s >>> 2) / 1000000)) : [
                            r,
                            this._bin(8)
                        ];
                    case 216:
                        return r = this._view.getInt8(this._offset), this._offset += 1, [
                            r,
                            this._bin(16)
                        ];
                    case 217:
                        return q = this._view.getUint8(this._offset), this._offset += 1, this._str(q);
                    case 218:
                        return q = this._view.getUint16(this._offset), this._offset += 2, this._str(q);
                    case 219:
                        return q = this._view.getUint32(this._offset), this._offset += 4, this._str(q);
                    case 220:
                        return q = this._view.getUint16(this._offset), this._offset += 2, this._array(q);
                    case 221:
                        return q = this._view.getUint32(this._offset), this._offset += 4, this._array(q);
                    case 222:
                        return q = this._view.getUint16(this._offset), this._offset += 2, this._map(q);
                    case 223:
                        return q = this._view.getUint32(this._offset), this._offset += 4, this._map(q);
                }
                throw new Error('Could not parse');
            };
            var o = 4294967295,
                p = 17179869183;

            function q(a, s, b) {
                for (var r = 0, s = 0, t = b.length; s < t; s++)
                    (r = b.charCodeAt(s)) < 128 ? a.setUint8(s++, r) : r < 2048 ? (a.setUint8(s++, 192 | r >> 6), a.setUint8(s++, 128 | 63 & r)) : r < 55296 || r >= 57344 ? (a.setUint8(s++, 224 | r >> 12), a.setUint8(s++, 128 | r >> 6 & 63), a.setUint8(s++, 128 | 63 & r)) : (s++, r = 65536 + ((1023 & r) << 10 | 1023 & b.charCodeAt(s)), a.setUint8(s++, 240 | r >> 18), a.setUint8(s++, 128 | r >> 12 & 63), a.setUint8(s++, 128 | r >> 6 & 63), a.setUint8(s++, 128 | 63 & r));
            }

            function r(a) {
                for (var s = 0, t = 0, u = 0, v = a.length; u < v; u++)
                    (s = a.charCodeAt(u)) < 128 ? t += 1 : s < 2048 ? t += 2 : s < 55296 || s >= 57344 ? t += 3 : (u++, t += 4);
                return t;
            }

            function s(a, u, b) {
                var t = typeof b,
                    u = 0,
                    v = 0,
                    w = 0,
                    x = 0,
                    y = 0,
                    z = 0;
                if ('string' === t) {
                    if ((y = r(b)) < 32)
                        a.push(160 | y), z = 1;
                    else if (y < 256)
                        a.push(217, y), z = 2;
                    else if (y < 65536)
                        a.push(218, y >> 8, y), z = 3;
                    else {
                        if (!(y < 4294967296))
                            throw new Error('String too long');
                        a.push(219, y >> 24, y >> 16, y >> 8, y), z = 5;
                    }
                    return u.push({
                        _str: b,
                        _length: y,
                        _offset: a.length
                    }), z + y;
                }
                if ('number' === t)
                    return Math.floor(b) === b && isFinite(b) ? b >= 0 ? b < 128 ? (a.push(b), 1) : b < 256 ? (a.push(204, b), 2) : b < 65536 ? (a.push(205, b >> 8, b), 3) : b < 4294967296 ? (a.push(206, b >> 24, b >> 16, b >> 8, b), 5) : (w = b / Math.pow(2, 32) >> 0, x = b >>> 0, a.push(207, w >> 24, w >> 16, w >> 8, w, x >> 24, x >> 16, x >> 8, x), 9) : b >= -32 ? (a.push(b), 1) : b >= -128 ? (a.push(208, b), 2) : b >= -32768 ? (a.push(209, b >> 8, b), 3) : b >= -2147483648 ? (a.push(210, b >> 24, b >> 16, b >> 8, b), 5) : (w = Math.floor(b / Math.pow(2, 32)), x = b >>> 0, a.push(211, w >> 24, w >> 16, w >> 8, w, x >> 24, x >> 16, x >> 8, x), 9) : (a.push(203), u.push({
                        _float: b,
                        _length: 8,
                        _offset: a.length
                    }), 9);
                if ('object' === t) {
                    if (null === b)
                        return a.push(192), 1;
                    if (Array.isArray(b)) {
                        if ((y = b.length) < 16)
                            a.push(144 | y), z = 1;
                        else if (y < 65536)
                            a.push(220, y >> 8, y), z = 3;
                        else {
                            if (!(y < 4294967296))
                                throw new Error('Array too large');
                            a.push(221, y >> 24, y >> 16, y >> 8, y), z = 5;
                        }
                        for (u = 0; u < y; u++)
                            z += s(a, u, b[u]);
                        return z;
                    }
                    if (b instanceof Date) {
                        var A = b.getTime(),
                            B = Math.floor(A / 1000),
                            C = 1000000 * (A - 1000 * B);
                        return B >= 0 && C >= 0 && B <= p ? 0 === C && B <= o ? (a.push(214, 255, B >> 24, B >> 16, B >> 8, B), 6) : (w = B / 4294967296, x = 4294967295 & B, a.push(215, 255, C >> 22, C >> 14, C >> 6, w, x >> 24, x >> 16, x >> 8, x), 10) : (w = Math.floor(B / 4294967296), x = B >>> 0, a.push(199, 12, 255, C >> 24, C >> 16, C >> 8, C, w >> 24, w >> 16, w >> 8, w, x >> 24, x >> 16, x >> 8, x), 15);
                    }
                    if (b instanceof ArrayBuffer) {
                        if ((y = b.byteLength) < 256)
                            a.push(196, y), z = 2;
                        else if (y < 65536)
                            a.push(197, y >> 8, y), z = 3;
                        else {
                            if (!(y < 4294967296))
                                throw new Error('Buffer too large');
                            a.push(198, y >> 24, y >> 16, y >> 8, y), z = 5;
                        }
                        return u.push({
                            _bin: b,
                            _length: y,
                            _offset: a.length
                        }), z + y;
                    }
                    if ('function' == typeof b.toJSON)
                        return s(a, u, b.toJSON());
                    var A = [],
                        B = '',
                        C = Object.keys(b);
                    for (u = 0, v = C.length; u < v; u++)
                        void 0 !== b[B = C[u]] && 'function' != typeof b[B] && A.push(B);
                    if ((y = A.length) < 16)
                        a.push(128 | y), z = 1;
                    else if (y < 65536)
                        a.push(222, y >> 8, y), z = 3;
                    else {
                        if (!(y < 4294967296))
                            throw new Error('Object too large');
                        a.push(223, y >> 24, y >> 16, y >> 8, y), z = 5;
                    }
                    for (u = 0; u < y; u++)
                        z += s(a, u, B = A[u]), z += s(a, u, b[B]);
                    return z;
                }
                if ('boolean' === t)
                    return a.push(b ? 195 : 194), 1;
                if ('undefined' === t)
                    return a.push(192), 1;
                if ('function' == typeof b.toJSON)
                    return s(a, u, b.toJSON());
                throw new Error('Could not encode');
            }

            function t(a) {
                var u = [],
                    v = [],
                    w = s(u, v, a),
                    x = new ArrayBuffer(w),
                    y = new DataView(x),
                    z = 0,
                    A = 0,
                    B = -1;
                v.length > 0 && (B = v[0]._offset);
                for (var C, D = 0, E = 0, F = 0, G = u.length; F < G; F++)
                    if (y.setUint8(A + F, u[F]), F + 1 === B) {
                        if (D = (C = v[z])._length, E = A + B, C._bin)
                            for (var H = new Uint8Array(C._bin), I = 0; I < D; I++)
                                y.setUint8(E + I, H[I]);
                        else
                            C._str ? q(y, E, C._str) : void 0 !== C._float && y.setFloat64(E, C._float);
                        A += D, v[++z] && (B = v[z]._offset);
                    }
                return x;
            }
            var u, v, w = function() {
                    throw new Error('ws does not work in the browser. Browser clients must use the native WebSocket object');
                },
                x = globalThis.WebSocket || w,
                y = function() {
                    function z(z) {
                        this.events = z;
                    }
                    return z.prototype.send = function(z) {
                        z instanceof ArrayBuffer ? this.ws.send(z) : Array.isArray(z) && this.ws.send(new Uint8Array(z).buffer);
                    }, z.prototype.connect = function(z) {
                        this.ws = new x(z, this.protocols), this.ws.binaryType = 'arraybuffer', this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror;
                    }, z.prototype.close = function(z, F) {
                        this.ws.close(z, F);
                    }, Object.defineProperty(z.prototype, 'isOpen', {
                        get: function() {
                            return this.ws.readyState === x.OPEN;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), z;
                }(),
                z = function() {
                    function A() {
                        this.events = {}, this.transport = new y(this.events);
                    }
                    return A.prototype.send = function(A) {
                        this.transport.send(A);
                    }, A.prototype.connect = function(A) {
                        this.transport.connect(A);
                    }, A.prototype.close = function(A, F) {
                        this.transport.close(A, F);
                    }, Object.defineProperty(A.prototype, 'isOpen', {
                        get: function() {
                            return this.transport.isOpen;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), A;
                }();

            function A(a, F) {
                for (var B = a[F++], C = '', D = 0, E = F, G = F + B; E < G; E++) {
                    var H = a[E];
                    if (0 != (128 & H))
                        if (192 != (224 & H))
                            if (224 != (240 & H)) {
                                if (240 != (248 & H))
                                    throw new Error('Invalid byte ' + H.toString(16));
                                (D = (7 & H) << 18 | (63 & a[++E]) << 12 | (63 & a[++E]) << 6 | (63 & a[++E]) << 0) >= 65536 ? (D -= 65536, C += String.fromCharCode(55296 + (D >>> 10), 56320 + (1023 & D))) : C += String.fromCharCode(D);
                            } else
                                C += String.fromCharCode((15 & H) << 12 | (63 & a[++E]) << 6 | (63 & a[++E]) << 0);
                    else
                        C += String.fromCharCode((31 & H) << 6 | 63 & a[++E]);
                    else
                        C += String.fromCharCode(H);
                }
                return C;
            }

            function B(a) {
                void 0 === a && (a = '');
                for (var C = 0, D = 0, E = 0, F = a.length; E < F; E++)
                    (C = a.charCodeAt(E)) < 128 ? D += 1 : C < 2048 ? D += 2 : C < 55296 || C >= 57344 ? D += 3 : (E++, D += 4);
                return D + 1;
            }
            F.Protocol = void 0, (v = F.Protocol || (F.Protocol = {}))[v.HANDSHAKE = 9] = 'HANDSHAKE', v[v.JOIN_ROOM = 10] = 'JOIN_ROOM', v[v.ERROR = 11] = 'ERROR', v[v.LEAVE_ROOM = 12] = 'LEAVE_ROOM', v[v.ROOM_DATA = 13] = 'ROOM_DATA', v[v.ROOM_STATE = 14] = 'ROOM_STATE', v[v.ROOM_STATE_PATCH = 15] = 'ROOM_STATE_PATCH', v[v.ROOM_DATA_SCHEMA = 16] = 'ROOM_DATA_SCHEMA', v[v.ROOM_DATA_BYTES = 17] = 'ROOM_DATA_BYTES', F.ErrorCode = void 0, (u = F.ErrorCode || (F.ErrorCode = {}))[u.MATCHMAKE_NO_HANDLER = 4210] = 'MATCHMAKE_NO_HANDLER', u[u.MATCHMAKE_INVALID_CRITERIA = 4211] = 'MATCHMAKE_INVALID_CRITERIA', u[u.MATCHMAKE_INVALID_ROOM_ID = 4212] = 'MATCHMAKE_INVALID_ROOM_ID', u[u.MATCHMAKE_UNHANDLED = 4213] = 'MATCHMAKE_UNHANDLED', u[u.MATCHMAKE_EXPIRED = 4214] = 'MATCHMAKE_EXPIRED', u[u.AUTH_FAILED = 4215] = 'AUTH_FAILED', u[u.APPLICATION_ERROR = 4216] = 'APPLICATION_ERROR';
            var C = {};

            function D(a, F) {
                C[a] = F;
            }

            function E(a) {
                var F = C[a];
                if (!F)
                    throw new Error('missing serializer: ' + a);
                return F;
            }
            var F = function() {
                    return {
                        emit: function(a) {
                            for (var G = [], H = 1; H < arguments.length; H++)
                                G[H - 1] = arguments[H];
                            for (var I = this.events[a] || [], J = 0, K = I.length; J < K; J++)
                                I[J].apply(I, G);
                        },
                        events: {},
                        on: function(a, J) {
                            var G, H = this;
                            return (null === (G = this.events[a]) || void 0 === G ? void 0 : G.push(J)) || (this.events[a] = [J]),
                                function() {
                                    var I;
                                    H.events[a] = null === (I = H.events[a]) || void 0 === I ? void 0 : I.filter(function(a) {
                                        return J !== a;
                                    });
                                };
                        }
                    };
                },
                G = function() {
                    function H() {
                        this.handlers = [];
                    }
                    return H.prototype.register = function(H, J) {
                        return this.handlers.push(H), this;
                    }, H.prototype.invoke = function() {
                        for (var I = this, J = [], K = 0; K < arguments.length; K++)
                            J[K] = arguments[K];
                        this.handlers.forEach(function(K) {
                            return K.apply(I, J);
                        });
                    }, H.prototype.invokeAsync = function() {
                        for (var I = this, J = [], K = 0; K < arguments.length; K++)
                            J[K] = arguments[K];
                        return Promise.all(this.handlers.map(function(K) {
                            return K.apply(I, J);
                        }));
                    }, H.prototype.remove = function(H) {
                        var I = this.handlers.indexOf(H);
                        this.handlers[I] = this.handlers[this.handlers.length - 1], this.handlers.pop();
                    }, H.prototype.clear = function() {
                        this.handlers = [];
                    }, H;
                }();

            function H() {
                var I = new G();

                function J(J) {
                    return I.register(J, null === this);
                }
                return J.once = function(J) {
                    var K = function() {
                        for (var L = [], M = 0; M < arguments.length; M++)
                            L[M] = arguments[M];
                        J.apply(this, L), I.remove(K);
                    };
                    I.register(K);
                }, J.remove = function(J) {
                    return I.remove(J);
                }, J.invoke = function() {
                    for (var K = [], L = 0; L < arguments.length; L++)
                        K[L] = arguments[L];
                    return I.invoke.apply(I, K);
                }, J.invokeAsync = function() {
                    for (var K = [], L = 0; L < arguments.length; L++)
                        K[L] = arguments[L];
                    return I.invokeAsync.apply(I, K);
                }, J.clear = function() {
                    return I.clear();
                }, J;
            }

            function I(a) {
                var J = {
                    exports: {}
                };
                return a(J, J.exports), J.exports;
            }
            'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== a || 'undefined' != typeof self && self;
            var J = I(function(a, K) {
                    ! function(a, b) {
                        b(K);
                    }(0, function(a) {
                        var K = function(a, b) {
                            return K = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(a, K) {
                                a.__proto__ = K;
                            } || function(a, K) {
                                for (var L in K)
                                    Object.prototype.hasOwnProperty.call(K, L) && (a[L] = K[L]);
                            }, K(a, b);
                        };

                        function L(a, L) {
                            if ('function' != typeof L && null !== L)
                                throw new TypeError('Class extends value ' + String(L) + ' is not a constructor or null');

                            function M() {
                                this.constructor = a;
                            }
                            K(a, L), a.prototype = null === L ? Object.create(L) : (M.prototype = L.prototype, new M());
                        }

                        function M(a, K, L, M) {
                            var N, O = arguments.length,
                                P = O < 3 ? K : null === M ? M = Object.getOwnPropertyDescriptor(K, L) : M;
                            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                                P = Reflect.decorate(a, K, L, M);
                            else
                                for (var Q = a.length - 1; Q >= 0; Q--)
                                    (N = a[Q]) && (P = (O < 3 ? N(P) : O > 3 ? N(K, L, P) : N(K, L)) || P);
                            return O > 3 && P && Object.defineProperty(K, L, P), P;
                        }

                        function N(a, K, L) {
                            if (L || 2 === arguments.length)
                                for (var O, P = 0, Q = K.length; P < Q; P++)
                                    !O && P in K || (O || (O = Array.prototype.slice.call(K, 0, P)), O[P] = K[P]);
                            return a.concat(M || Array.prototype.slice.call(K));
                        }
                        var O, P = 255,
                            Q = 213;
                        a.OPERATION = void 0, (O = a.OPERATION || (a.OPERATION = {}))[O.ADD = 128] = 'ADD', O[O.REPLACE = 0] = 'REPLACE', O[O.DELETE = 64] = 'DELETE', O[O.DELETE_AND_ADD = 192] = 'DELETE_AND_ADD', O[O.TOUCH = 1] = 'TOUCH', O[O.CLEAR = 10] = 'CLEAR';
                        var R = function() {
                            function S(a, S, L) {
                                this.changed = !1, this.changes = new Map(), this.allChanges = new Set(), this.caches = {}, this.currentCustomOperation = 0, this.ref = a, this.setParent(S, L);
                            }
                            return S.prototype.setParent = function(a, S, L) {
                                var T = this;
                                if (this.indexes || (this.indexes = this.ref instanceof kc ? this.ref._definition.indexes : {}), this.parent = a, this.parentIndex = L, S)
                                    if (this.root = S, this.ref instanceof kc) {
                                        var U = this.ref._definition;
                                        for (var V in U.schema) {
                                            var W = this.ref[V];
                                            if (W && W.$changes) {
                                                var X = U.indexes[V];
                                                W.$changes.setParent(this.ref, S, X);
                                            }
                                        }
                                    } else
                                        'object' == typeof this.ref && this.ref.forEach(function(a, S) {
                                            if (a instanceof kc) {
                                                var U = a.$changes,
                                                    V = T.ref.$changes.indexes[S];
                                                U.setParent(T.ref, T.root, V);
                                            }
                                        });
                            }, S.prototype.operation = function(a) {
                                this.changes.set(--this.currentCustomOperation, a);
                            }, S.prototype.change = function(S, L) {
                                void 0 === L && (L = a.OPERATION.ADD);
                                var T = 'number' == typeof S ? S : this.indexes[S];
                                this.assertValidIndex(T, S);
                                var U = this.changes.get(T);
                                U && U.op !== a.OPERATION.DELETE && U.op !== a.OPERATION.TOUCH || this.changes.set(T, {
                                    op: U && U.op === a.OPERATION.DELETE ? a.OPERATION.DELETE_AND_ADD : L,
                                    index: T
                                }), this.allChanges.add(T), this.changed = !0, this.touchParents();
                            }, S.prototype.touch = function(S) {
                                var T = 'number' == typeof S ? S : this.indexes[S];
                                this.assertValidIndex(T, S), this.changes.has(T) || this.changes.set(T, {
                                    op: a.OPERATION.TOUCH,
                                    index: T
                                }), this.allChanges.add(T), this.touchParents();
                            }, S.prototype.touchParents = function() {
                                this.parent && this.parent.$changes.touch(this.parentIndex);
                            }, S.prototype.getType = function(a) {
                                if (this.ref._definition)
                                    return (S = this.ref._definition).schema[S.fieldsByIndex[a]];
                                var T, U = (T = this.parent._definition).schema[T.fieldsByIndex[this.parentIndex]];
                                return Object.values(U)[0];
                            }, S.prototype.getChildrenFilter = function() {
                                var T = this.parent._definition.childFilters;
                                return T && T[this.parentIndex];
                            }, S.prototype.getValue = function(a) {
                                return this.ref.getByIndex(a);
                            }, S.prototype.delete = function(S) {
                                var T = 'number' == typeof S ? S : this.indexes[S];
                                if (void 0 !== T) {
                                    var U = this.getValue(T);
                                    this.changes.set(T, {
                                        op: a.OPERATION.DELETE,
                                        index: T
                                    }), this.allChanges.delete(T), delete this.caches[T], U && U.$changes && (U.$changes.parent = void 0), this.changed = !0, this.touchParents();
                                } else
                                    console.warn('@colyseus/schema '.concat(this.ref.constructor.name, ': trying to delete non-existing index: ').concat(S, ' (').concat(T, ')'));
                            }, S.prototype.discard = function(S, L) {
                                var T = this;
                                void 0 === S && (S = !1), void 0 === L && (L = !1), this.ref instanceof kc || this.changes.forEach(function(S) {
                                    if (S.op === a.OPERATION.DELETE) {
                                        var U = T.ref.getIndex(S.index);
                                        delete T.indexes[U];
                                    }
                                }), this.changes.clear(), this.changed = S, L && this.allChanges.clear(), this.currentCustomOperation = 0;
                            }, S.prototype.discardAll = function() {
                                var T = this;
                                this.changes.forEach(function(S) {
                                    var U = T.getValue(S.index);
                                    U && U.$changes && U.$changes.discardAll();
                                }), this.discard();
                            }, S.prototype.cache = function(a, S) {
                                this.caches[a] = S;
                            }, S.prototype.clone = function() {
                                return new S(this.ref, this.parent, this.root);
                            }, S.prototype.ensureRefId = function() {
                                void 0 === this.refId && (this.refId = this.root.getNextUniqueId());
                            }, S.prototype.assertValidIndex = function(a, S) {
                                if (void 0 === a)
                                    throw new Error('ChangeTree: missing index for field "'.concat(S, '"'));
                            }, S;
                        }();

                        function S(a, K, L, M) {
                            return a[K] || (a[K] = []), a[K].push(L), null == M || M.forEach(function(a, K) {
                                    return L(a, K);
                                }),
                                function() {
                                    return k(a[K], a[K].indexOf(L));
                                };
                        }

                        function T(K) {
                            var U = this,
                                V = 'string' != typeof this.$changes.getType();
                            this.$items.forEach(function(N, O) {
                                K.push({
                                    refId: U.$changes.refId,
                                    op: a.OPERATION.DELETE,
                                    field: O,
                                    value: void 0,
                                    previousValue: N
                                }), V && U.$changes.root.removeRef(N.$changes.refId);
                            });
                        }

                        function U(a, K) {
                            if (-1 === K || K >= a.length)
                                return !1;
                            for (var V = a.length - 1, W = X; W < V; W++)
                                a[W] = a[W + 1];
                            return a.length = V, !0;
                        }
                        var V = function(a, K) {
                            var W = a.toString(),
                                X = K.toString();
                            return W < X ? -1 : W > X ? 1 : 0;
                        };

                        function W(a) {
                            return a.$proxy = !0, a = new Proxy(a, {
                                get: function(a, K) {
                                    return 'symbol' == typeof K || isNaN(K) ? a[K] : a.at(K);
                                },
                                set: function(a, K, L) {
                                    if ('symbol' == typeof K || isNaN(K))
                                        a[K] = L;
                                    else {
                                        var X = Array.from(a.$items.keys()),
                                            Y = parseInt(X[K] || K);
                                        null == L ? a.deleteAt(Y) : a.setAt(Y, L);
                                    }
                                    return !0;
                                },
                                deleteProperty: function(a, K) {
                                    return 'number' == typeof K ? a.deleteAt(K) : delete a[K], !0;
                                }
                            });
                        }
                        var X = function() {
                            function Y() {
                                for (var Z = [], $ = 0; $ < arguments.length; $++)
                                    Z[$] = arguments[$];
                                this.$changes = new R(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, this.push.apply(this, Z);
                            }
                            return Y.prototype.onAdd = function(Y, L) {
                                return void 0 === L && (L = !0), S(this.$callbacks || (this.$callbacks = []), a.OPERATION.ADD, Y, L ? this.$items : void 0);
                            }, Y.prototype.onRemove = function(Y) {
                                return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.DELETE, Y);
                            }, Y.prototype.onChange = function(Y) {
                                return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.REPLACE, Y);
                            }, Y.is = function(a) {
                                return Array.isArray(a) || void 0 !== a.array;
                            }, Object.defineProperty(Y.prototype, 'length', {
                                get: function() {
                                    return this.$items.size;
                                },
                                set: function(a) {
                                    0 === a ? this.clear() : this.splice(a, this.length - a);
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Y.prototype.push = function() {
                                for (var Z, $ = this, _ = [], ab = 0; ab < arguments.length; ab++)
                                    _[ab] = arguments[ab];
                                return _.forEach(function(_) {
                                    Z = $.$refId++, $.setAt(Z, _);
                                }), Z;
                            }, Y.prototype.pop = function() {
                                var Z = Array.from(this.$indexes.values()).pop();
                                if (void 0 !== Z) {
                                    this.$changes.delete(Z), this.$indexes.delete(Z);
                                    var $ = this.$items.get(Z);
                                    return this.$items.delete(Z), $;
                                }
                            }, Y.prototype.at = function(a) {
                                var Z = Array.from(this.$items.keys())[a];
                                return this.$items.get(Z);
                            }, Y.prototype.setAt = function(Y, L) {
                                var Z, $;
                                void 0 !== L.$changes && L.$changes.setParent(this, this.$changes.root, Y);
                                var _ = null !== ($ = null === (Z = this.$changes.indexes[Y]) || void 0 === Z ? void 0 : Z.op) && void 0 !== $ ? $ : a.OPERATION.ADD;
                                this.$changes.indexes[Y] = Y, this.$indexes.set(Y, Y), this.$items.set(Y, L), this.$changes.change(Y, _);
                            }, Y.prototype.deleteAt = function(a) {
                                var Z = Array.from(this.$items.keys())[a];
                                return void 0 !== Z && this.$deleteAt(Z);
                            }, Y.prototype.$deleteAt = function(a) {
                                return this.$changes.delete(a), this.$indexes.delete(a), this.$items.delete(a);
                            }, Y.prototype.clear = function(Y) {
                                this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), Y && T.call(this, Y), this.$items.clear(), this.$changes.operation({
                                    index: 0,
                                    op: a.OPERATION.CLEAR
                                }), this.$changes.touchParents();
                            }, Y.prototype.concat = function() {
                                for (var Z, $ = [], _ = 0; _ < arguments.length; _++)
                                    $[_] = arguments[_];
                                return new(Y.bind.apply(Y, N([void 0], (Z = Array.from(this.$items.values())).concat.apply(Z, $), !1)))();
                            }, Y.prototype.join = function(a) {
                                return Array.from(this.$items.values()).join(a);
                            }, Y.prototype.reverse = function() {
                                var Z = this,
                                    $ = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).reverse().forEach(function(L, M) {
                                    Z.setAt($[M], L);
                                }), this;
                            }, Y.prototype.shift = function() {
                                var Z = Array.from(this.$items.keys()).shift();
                                if (void 0 !== Z) {
                                    var $ = this.$items.get(Z);
                                    return this.$deleteAt(Z), $;
                                }
                            }, Y.prototype.slice = function(a, L) {
                                var Z = new Y();
                                return Z.push.apply(Z, Array.from(this.$items.values()).slice(a, L)), Z;
                            }, Y.prototype.sort = function(a) {
                                var Z = this;
                                void 0 === a && (a = V);
                                var $ = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).sort(a).forEach(function(a, M) {
                                    Z.setAt($[M], a);
                                }), this;
                            }, Y.prototype.splice = function(a, Y) {
                                void 0 === Y && (Y = this.length - a);
                                for (var Z = Array.from(this.$items.keys()), $ = [], _ = ab; _ < ab + Y; _++)
                                    $.push(this.$items.get(Z[_])), this.$deleteAt(Z[_]);
                                return $;
                            }, Y.prototype.unshift = function() {
                                for (var Z = this, $ = [], _ = 0; _ < arguments.length; _++)
                                    $[_] = arguments[_];
                                var ab = this.length,
                                    bb = $.length,
                                    cb = Array.from(this.$items.values());
                                return $.forEach(function($, _) {
                                    Z.setAt(_, $);
                                }), cb.forEach(function($, _) {
                                    Z.setAt(bb + _, $);
                                }), ab + bb;
                            }, Y.prototype.indexOf = function(a, Y) {
                                return Array.from(this.$items.values()).indexOf(a, Y);
                            }, Y.prototype.lastIndexOf = function(a, Y) {
                                return void 0 === Y && (Y = this.length - 1), Array.from(this.$items.values()).lastIndexOf(a, Y);
                            }, Y.prototype.every = function(a, Y) {
                                return Array.from(this.$items.values()).every(a, Y);
                            }, Y.prototype.some = function(a, Y) {
                                return Array.from(this.$items.values()).some(a, Y);
                            }, Y.prototype.forEach = function(a, Y) {
                                Array.from(this.$items.values()).forEach(a, Y);
                            }, Y.prototype.map = function(a, Y) {
                                return Array.from(this.$items.values()).map(a, Y);
                            }, Y.prototype.filter = function(a, Y) {
                                return Array.from(this.$items.values()).filter(a, Y);
                            }, Y.prototype.reduce = function(a, Y) {
                                return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
                            }, Y.prototype.reduceRight = function(a, Y) {
                                return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
                            }, Y.prototype.find = function(a, Y) {
                                return Array.from(this.$items.values()).find(a, Y);
                            }, Y.prototype.findIndex = function(a, Y) {
                                return Array.from(this.$items.values()).findIndex(a, Y);
                            }, Y.prototype.fill = function(a, Y, L) {
                                throw new Error('ArraySchema#fill() not implemented');
                            }, Y.prototype.copyWithin = function(a, Y, L) {
                                throw new Error('ArraySchema#copyWithin() not implemented');
                            }, Y.prototype.toString = function() {
                                return this.$items.toString();
                            }, Y.prototype.toLocaleString = function() {
                                return this.$items.toLocaleString();
                            }, Y.prototype[Symbol.iterator] = function() {
                                return Array.from(this.$items.values())[Symbol.iterator]();
                            }, Y.prototype.entries = function() {
                                return this.$items.entries();
                            }, Y.prototype.keys = function() {
                                return this.$items.keys();
                            }, Y.prototype.values = function() {
                                return this.$items.values();
                            }, Y.prototype.includes = function(a, Y) {
                                return Array.from(this.$items.values()).includes(a, Y);
                            }, Y.prototype.flatMap = function(a, Y) {
                                throw new Error('ArraySchema#flatMap() is not supported.');
                            }, Y.prototype.flat = function(a) {
                                throw new Error('ArraySchema#flat() is not supported.');
                            }, Y.prototype.findLast = function() {
                                var Z = Array.from(this.$items.values());
                                return Z.findLast.apply(Z, arguments);
                            }, Y.prototype.findLastIndex = function() {
                                var Z = Array.from(this.$items.values());
                                return Z.findLastIndex.apply(Z, arguments);
                            }, Y.prototype.setIndex = function(a, Y) {
                                this.$indexes.set(a, Y);
                            }, Y.prototype.getIndex = function(a) {
                                return this.$indexes.get(a);
                            }, Y.prototype.getByIndex = function(a) {
                                return this.$items.get(this.$indexes.get(a));
                            }, Y.prototype.deleteByIndex = function(a) {
                                var Z = this.$indexes.get(a);
                                this.$items.delete(Z), this.$indexes.delete(a);
                            }, Y.prototype.toArray = function() {
                                return Array.from(this.$items.values());
                            }, Y.prototype.toJSON = function() {
                                return this.toArray().map(function(a) {
                                    return 'function' == typeof a.toJSON ? a.toJSON() : a;
                                });
                            }, Y.prototype.clone = function(a) {
                                return a ? new(Y.bind.apply(Y, N([void 0], Array.from(this.$items.values()), !1)))() : new(Y.bind.apply(Y, N([void 0], this.map(function(a) {
                                    return a.$changes ? a.clone() : a;
                                }), !1)))();
                            }, Y;
                        }();

                        function Y(a) {
                            return a.$proxy = !0, a = new Proxy(a, {
                                get: function(a, K) {
                                    return 'symbol' != typeof K && void 0 === a[K] ? a.get(K) : a[K];
                                },
                                set: function(a, K, L) {
                                    return 'symbol' != typeof K && -1 === K.indexOf('$') && 'onAdd' !== K && 'onRemove' !== K && 'onChange' !== K ? a.set(K, L) : a[K] = L, !0;
                                },
                                deleteProperty: function(a, K) {
                                    return a.delete(K), !0;
                                }
                            });
                        }
                        var Z = function() {
                                function $(a) {
                                    var _ = this;
                                    if (this.$changes = new R(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, a)
                                        if (a instanceof Map || a instanceof $)
                                            a.forEach(function(a, $) {
                                                return _.set($, a);
                                            });
                                        else
                                            for (var ab in a)
                                                this.set(ab, a[ab]);
                                }
                                return $.prototype.onAdd = function($, L) {
                                    return void 0 === L && (L = !0), S(this.$callbacks || (this.$callbacks = []), a.OPERATION.ADD, $, L ? this.$items : void 0);
                                }, $.prototype.onRemove = function($) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.DELETE, $);
                                }, $.prototype.onChange = function($) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.REPLACE, $);
                                }, $.is = function(a) {
                                    return void 0 !== a.map;
                                }, $.prototype[Symbol.iterator] = function() {
                                    return this.$items[Symbol.iterator]();
                                }, Object.defineProperty($.prototype, Symbol.toStringTag, {
                                    get: function() {
                                        return this.$items[Symbol.toStringTag];
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), $.prototype.set = function($, L) {
                                    if (null == L)
                                        throw new Error('MapSchema#set(\''.concat($, '\', ').concat(L, '): trying to set ').concat(L, ' value on \'').concat($, '\'.'));
                                    var _ = void 0 !== this.$changes.indexes[$],
                                        ab = _ ? this.$changes.indexes[$] : this.$refId++,
                                        bb = _ ? a.OPERATION.REPLACE : a.OPERATION.ADD,
                                        cb = void 0 !== L.$changes;
                                    return cb && L.$changes.setParent(this, this.$changes.root, ab), _ ? cb && this.$items.get($) !== L && (bb = a.OPERATION.ADD) : (this.$changes.indexes[$] = ab, this.$indexes.set(ab, $)), this.$items.set($, L), this.$changes.change($, bb), this;
                                }, $.prototype.get = function(a) {
                                    return this.$items.get(a);
                                }, $.prototype.delete = function(a) {
                                    return this.$changes.delete(a), this.$items.delete(a);
                                }, $.prototype.clear = function($) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), $ && T.call(this, $), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: a.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, $.prototype.has = function(a) {
                                    return this.$items.has(a);
                                }, $.prototype.forEach = function(a) {
                                    this.$items.forEach(a);
                                }, $.prototype.entries = function() {
                                    return this.$items.entries();
                                }, $.prototype.keys = function() {
                                    return this.$items.keys();
                                }, $.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty($.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), $.prototype.setIndex = function(a, $) {
                                    this.$indexes.set(a, $);
                                }, $.prototype.getIndex = function(a) {
                                    return this.$indexes.get(a);
                                }, $.prototype.getByIndex = function(a) {
                                    return this.$items.get(this.$indexes.get(a));
                                }, $.prototype.deleteByIndex = function(a) {
                                    var _ = this.$indexes.get(a);
                                    this.$items.delete(_), this.$indexes.delete(a);
                                }, $.prototype.toJSON = function() {
                                    var _ = {};
                                    return this.forEach(function($, L) {
                                        _[L] = 'function' == typeof $.toJSON ? $.toJSON() : $;
                                    }), _;
                                }, $.prototype.clone = function(a) {
                                    var _;
                                    return a ? _ = Object.assign(new $(), this) : (_ = new $(), this.forEach(function(a, $) {
                                        a.$changes ? _.set($, a.clone()) : _.set($, a);
                                    })), _;
                                }, $;
                            }(),
                            $ = {};

                        function _(a, K) {
                            $[a] = K;
                        }

                        function ab(a) {
                            return $[a];
                        }
                        var bb = function() {
                            function cb() {
                                this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {};
                            }
                            return cb.create = function(K) {
                                var db = new cb();
                                return db.schema = Object.assign({}, K && K.schema || {}), db.indexes = Object.assign({}, K && K.indexes || {}), db.fieldsByIndex = Object.assign({}, K && K.fieldsByIndex || {}), db.descriptors = Object.assign({}, K && K.descriptors || {}), db.deprecated = Object.assign({}, K && K.deprecated || {}), db;
                            }, cb.prototype.addField = function(cb, K) {
                                var db = this.getNextFieldIndex();
                                this.fieldsByIndex[db] = cb, this.indexes[cb] = db, this.schema[cb] = Array.isArray(K) ? {
                                    array: K[0]
                                } : K;
                            }, cb.prototype.hasField = function(cb) {
                                return void 0 !== this.indexes[cb];
                            }, cb.prototype.addFilter = function(cb, K) {
                                return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[cb]] = K, this.indexesWithFilters.push(this.indexes[cb]), !0;
                            }, cb.prototype.addChildrenFilter = function(cb, K) {
                                var db = this.indexes[cb],
                                    eb = this.schema[cb];
                                if (ab(Object.keys(eb)[0]))
                                    return this.childFilters || (this.childFilters = {}), this.childFilters[db] = K, !0;
                                console.warn('@filterChildren: field \''.concat(cb, '\' can\'t have children. Ignoring filter.'));
                            }, cb.prototype.getChildrenFilter = function(cb) {
                                return this.childFilters && this.childFilters[this.indexes[cb]];
                            }, cb.prototype.getNextFieldIndex = function() {
                                return Object.keys(this.schema || {}).length;
                            }, cb;
                        }();

                        function cb(a) {
                            return a._context && a._context.useFilters;
                        }
                        var db = function() {
                                function eb() {
                                    this.types = {}, this.schemas = new Map(), this.useFilters = !1;
                                }
                                return eb.prototype.has = function(eb) {
                                    return this.schemas.has(eb);
                                }, eb.prototype.get = function(eb) {
                                    return this.types[eb];
                                }, eb.prototype.add = function(eb, K) {
                                    void 0 === K && (K = this.schemas.size), eb._definition = bb.create(eb._definition), eb._typeid = K, this.types[K] = eb, this.schemas.set(eb, K);
                                }, eb.create = function(K) {
                                    return void 0 === K && (K = {}),
                                        function(L) {
                                            return K.context || (K.context = new eb()), x(L, K);
                                        };
                                }, eb;
                            }(),
                            eb = new db();

                        function fb(a, K) {
                            return void 0 === K && (K = {}),
                                function(L, M) {
                                    var gb = K.context || eb,
                                        hb = L.constructor;
                                    if (hb._context = gb, !a)
                                        throw new Error(''.concat(hb.name, ': @type() reference provided for "').concat(M, '" is undefined. Make sure you don\'t have any circular dependencies.'));
                                    gb.has(hb) || gb.add(hb);
                                    var ib = hb._definition;
                                    if (ib.addField(M, a), ib.descriptors[M]) {
                                        if (ib.deprecated[M])
                                            return;
                                        try {
                                            throw new Error('@colyseus/schema: Duplicate \''.concat(M, '\' definition on \'').concat(hb.name, '\'.\nCheck @type() annotation'));
                                        } catch (a) {
                                            var jb = a.stack.split('\n')[4].trim();
                                            throw new Error(''.concat(a.message, ' ').concat(jb));
                                        }
                                    }
                                    var jb = X.is(a),
                                        kb = !jb && Z.is(a);
                                    if ('string' != typeof a && !kc.is(a)) {
                                        var lb = Object.values(a)[0];
                                        'string' == typeof lb || gb.has(lb) || gb.add(lb);
                                    }
                                    if (K.manual)
                                        ib.descriptors[M] = {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        };
                                    else {
                                        var lb = '_'.concat(M);
                                        ib.descriptors[lb] = {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !0
                                        }, ib.descriptors[M] = {
                                            get: function() {
                                                return this[lb];
                                            },
                                            set: function(a) {
                                                a !== this[lb] && (null != a ? (!jb || a instanceof X || (a = new(X.bind.apply(X, N([void 0], a, !1)))()), !kb || a instanceof Z || (a = new Z(a)), void 0 === a.$proxy && (kb ? a = Y(a) : jb && (a = W(a))), this.$changes.change(M), a.$changes && a.$changes.setParent(this, this.$changes.root, this._definition.indexes[M])) : this[lb] && this.$changes.delete(M), this[lb] = a);
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        };
                                    }
                                };
                        }

                        function gb(a) {
                            return function(K, L) {
                                var hb = K.constructor;
                                hb._definition.addFilter(L, a) && (hb._context.useFilters = !0);
                            };
                        }

                        function hb(a) {
                            return function(K, L) {
                                var ib = K.constructor;
                                ib._definition.addChildrenFilter(L, a) && (ib._context.useFilters = !0);
                            };
                        }

                        function ib(a) {
                            return void 0 === a && (a = !0),
                                function(K, L) {
                                    var jb = K.constructor._definition;
                                    jb.deprecated[L] = !0, a && (jb.descriptors[L] = {
                                        get: function() {
                                            throw new Error(''.concat(L, ' is deprecated.'));
                                        },
                                        set: function(a) {},
                                        enumerable: !1,
                                        configurable: !0
                                    });
                                };
                        }

                        function jb(a, K, L) {
                            for (var kb in (void 0 === L && (L = {}), L.context || (L.context = a._context || L.context || eb), K))
                                fb(K[kb], L)(a.prototype, kb);
                            return a;
                        }

                        function kb(a) {
                            for (var lb = 0, mb = 0, nb = 0, ob = a.length; nb < ob; nb++)
                                (lb = a.charCodeAt(nb)) < 128 ? mb += 1 : lb < 2048 ? mb += 2 : lb < 55296 || lb >= 57344 ? mb += 3 : (nb++, mb += 4);
                            return mb;
                        }

                        function lb(a, K, L) {
                            for (var mb = 0, nb = 0, ob = L.length; nb < ob; nb++)
                                (mb = L.charCodeAt(nb)) < 128 ? a[K++] = mb : mb < 2048 ? (a[K++] = 192 | mb >> 6, a[K++] = 128 | 63 & mb) : mb < 55296 || mb >= 57344 ? (a[K++] = 224 | mb >> 12, a[K++] = 128 | mb >> 6 & 63, a[K++] = 128 | 63 & mb) : (nb++, mb = 65536 + ((1023 & mb) << 10 | 1023 & L.charCodeAt(nb)), a[K++] = 240 | mb >> 18, a[K++] = 128 | mb >> 12 & 63, a[K++] = 128 | mb >> 6 & 63, a[K++] = 128 | 63 & mb);
                        }

                        function mb(a, K) {
                            a.push(255 & K);
                        }

                        function nb(a, K) {
                            a.push(255 & K);
                        }

                        function ob(a, K) {
                            a.push(255 & K), a.push(K >> 8 & 255);
                        }

                        function pb(a, K) {
                            a.push(255 & K), a.push(K >> 8 & 255);
                        }

                        function qb(a, K) {
                            a.push(255 & K), a.push(K >> 8 & 255), a.push(K >> 16 & 255), a.push(K >> 24 & 255);
                        }

                        function rb(a, K) {
                            var sb = K >> 24,
                                tb = K >> 16,
                                ub = K >> 8,
                                vb = wb;
                            a.push(255 & vb), a.push(255 & ub), a.push(255 & tb), a.push(255 & sb);
                        }

                        function sb(a, K) {
                            var tb = Math.floor(K / Math.pow(2, 32));
                            rb(a, K >>> 0), rb(a, tb);
                        }

                        function tb(a, K) {
                            var ub = K / Math.pow(2, 32) >> 0;
                            rb(a, K >>> 0), rb(a, ub);
                        }

                        function ub(a, K) {
                            zb(a, K);
                        }

                        function vb(a, K) {
                            Ab(a, K);
                        }
                        var wb = new Int32Array(2),
                            xb = new Float32Array(wb.buffer),
                            yb = new Float64Array(wb.buffer);

                        function zb(a, K) {
                            xb[0] = K, qb(a, wb[0]);
                        }

                        function Ab(a, K) {
                            yb[0] = K, qb(a, wb[0]), qb(a, wb[1]);
                        }

                        function Bb(a, K) {
                            return nb(a, K ? 1 : 0);
                        }

                        function Cb(a, K) {
                            K || (K = '');
                            var Db = kb(K),
                                Eb = 0;
                            if (Db < 32)
                                a.push(160 | Db), Eb = 1;
                            else if (Db < 256)
                                a.push(217), nb(a, Db), Eb = 2;
                            else if (Db < 65536)
                                a.push(218), pb(a, Db), Eb = 3;
                            else {
                                if (!(Db < 4294967296))
                                    throw new Error('String too long');
                                a.push(219), rb(a, Db), Eb = 5;
                            }
                            return lb(a, a.length, K), Eb + Db;
                        }

                        function Db(a, K) {
                            return isNaN(K) ? Db(a, 0) : isFinite(K) ? K !== (0 | K) ? (a.push(203), Ab(a, K), 9) : K >= 0 ? K < 128 ? (nb(a, K), 1) : K < 256 ? (a.push(204), nb(a, K), 2) : K < 65536 ? (a.push(205), pb(a, K), 3) : K < 4294967296 ? (a.push(206), rb(a, K), 5) : (a.push(207), tb(a, K), 9) : K >= -32 ? (a.push(224 | K + 32), 1) : K >= -128 ? (a.push(208), mb(a, K), 2) : K >= -32768 ? (a.push(209), ob(a, K), 3) : K >= -2147483648 ? (a.push(210), qb(a, K), 5) : (a.push(211), sb(a, K), 9) : Db(a, K > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                        }
                        var Eb = Object.freeze({
                            __proto__: null,
                            utf8Write: lb,
                            int8: mb,
                            uint8: nb,
                            int16: ob,
                            uint16: pb,
                            int32: qb,
                            uint32: rb,
                            int64: sb,
                            uint64: tb,
                            float32: ub,
                            float64: vb,
                            writeFloat32: zb,
                            writeFloat64: Ab,
                            boolean: Bb,
                            string: Cb,
                            number: Db
                        });

                        function Fb(a, K, L) {
                            for (var Gb = '', Hb = 0, Ib = Jb, Kb = Jb + L; Ib < Kb; Ib++) {
                                var Lb = a[Ib];
                                0 != (128 & Lb) ? 192 != (224 & Lb) ? 224 != (240 & Lb) ? 240 != (248 & Lb) ? console.error('Invalid byte ' + Lb.toString(16)) : (Hb = (7 & Lb) << 18 | (63 & a[++Ib]) << 12 | (63 & a[++Ib]) << 6 | (63 & a[++Ib]) << 0) >= 65536 ? (Hb -= 65536, Gb += String.fromCharCode(55296 + (Hb >>> 10), 56320 + (1023 & Hb))) : Gb += String.fromCharCode(Hb) : Gb += String.fromCharCode((15 & Lb) << 12 | (63 & a[++Ib]) << 6 | (63 & a[++Ib]) << 0) : Gb += String.fromCharCode((31 & Lb) << 6 | 63 & a[++Ib]) : Gb += String.fromCharCode(Lb);
                            }
                            return Gb;
                        }

                        function Gb(a, K) {
                            return Hb(a, K) << 24 >> 24;
                        }

                        function Hb(a, K) {
                            return a[K.offset++];
                        }

                        function Ib(a, K) {
                            return Jb(a, K) << 16 >> 16;
                        }

                        function Jb(a, K) {
                            return a[K.offset++] | a[K.offset++] << 8;
                        }

                        function Kb(a, K) {
                            return a[K.offset++] | a[K.offset++] << 8 | a[K.offset++] << 16 | a[K.offset++] << 24;
                        }

                        function Lb(a, K) {
                            return Kb(a, K) >>> 0;
                        }

                        function Mb(a, K) {
                            return Tb(a, K);
                        }

                        function Nb(a, K) {
                            return Ub(a, K);
                        }

                        function Ob(a, K) {
                            var Pb = Lb(a, K);
                            return Kb(a, K) * Math.pow(2, 32) + Pb;
                        }

                        function Pb(a, K) {
                            var Qb = Lb(a, K);
                            return Lb(a, K) * Math.pow(2, 32) + Qb;
                        }
                        var Qb = new Int32Array(2),
                            Rb = new Float32Array(Qb.buffer),
                            Sb = new Float64Array(Qb.buffer);

                        function Tb(a, K) {
                            return Qb[0] = Kb(a, K), Rb[0];
                        }

                        function Ub(a, K) {
                            return Qb[0] = Kb(a, K), Qb[1] = Kb(a, K), Sb[0];
                        }

                        function Vb(a, K) {
                            return Hb(a, K) > 0;
                        }

                        function Wb(a, K) {
                            var Xb, Yb = a[K.offset++];
                            Yb < 192 ? Xb = 31 & Yb : 217 === Yb ? Xb = Hb(a, K) : 218 === Yb ? Xb = Jb(a, K) : 219 === Yb && (Xb = Lb(a, K));
                            var Zb = Fb(a, K.offset, Xb);
                            return K.offset += Xb, Zb;
                        }

                        function Xb(a, K) {
                            var Yb = a[K.offset];
                            return Yb < 192 && Yb > 160 || 217 === Yb || 218 === Yb || 219 === Yb;
                        }

                        function Yb(a, K) {
                            var Zb = a[K.offset++];
                            return Zb < 128 ? Zb : 202 === Zb ? Tb(a, K) : 203 === Zb ? Ub(a, K) : 204 === Zb ? Hb(a, K) : 205 === Zb ? Jb(a, K) : 206 === Zb ? Lb(a, K) : 207 === Zb ? Pb(a, K) : 208 === Zb ? Gb(a, K) : 209 === Zb ? Ib(a, K) : 210 === Zb ? Kb(a, K) : 211 === Zb ? Ob(a, K) : Zb > 223 ? -1 * (255 - Zb + 1) : void 0;
                        }

                        function Zb(a, K) {
                            var $b = a[K.offset];
                            return $b < 128 || $b >= 202 && $b <= 211;
                        }

                        function $b(a, K) {
                            return a[K.offset] < 160;
                        }

                        function _b(a, K) {
                            return a[K.offset - 1] === P && (a[K.offset] < 128 || a[K.offset] >= 202 && a[K.offset] <= 211);
                        }
                        var ac = Object.freeze({
                                __proto__: null,
                                int8: Gb,
                                uint8: Hb,
                                int16: Ib,
                                uint16: Jb,
                                int32: Kb,
                                uint32: Lb,
                                float32: Mb,
                                float64: Nb,
                                int64: Ob,
                                uint64: Pb,
                                readFloat32: Tb,
                                readFloat64: Ub,
                                boolean: Vb,
                                string: Wb,
                                stringCheck: Xb,
                                number: Yb,
                                numberCheck: Zb,
                                arrayCheck: $b,
                                switchStructureCheck: _b
                            }),
                            bc = function() {
                                function cc(a) {
                                    var dc = this;
                                    this.$changes = new R(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, a && a.forEach(function(a) {
                                        return dc.add(a);
                                    });
                                }
                                return cc.prototype.onAdd = function(cc, L) {
                                    return void 0 === L && (L = !0), S(this.$callbacks || (this.$callbacks = []), a.OPERATION.ADD, cc, L ? this.$items : void 0);
                                }, cc.prototype.onRemove = function(cc) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.DELETE, cc);
                                }, cc.prototype.onChange = function(cc) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.REPLACE, cc);
                                }, cc.is = function(a) {
                                    return void 0 !== a.collection;
                                }, cc.prototype.add = function(a) {
                                    var dc = this.$refId++;
                                    return void 0 !== a.$changes && a.$changes.setParent(this, this.$changes.root, dc), this.$changes.indexes[dc] = dc, this.$indexes.set(dc, dc), this.$items.set(dc, a), this.$changes.change(dc), dc;
                                }, cc.prototype.at = function(a) {
                                    var dc = Array.from(this.$items.keys())[a];
                                    return this.$items.get(dc);
                                }, cc.prototype.entries = function() {
                                    return this.$items.entries();
                                }, cc.prototype.delete = function(a) {
                                    for (var dc, ec, fc = this.$items.entries();
                                        (ec = fc.next()) && !ec.done;)
                                        if (a === ec.value[1]) {
                                            dc = ec.value[0];
                                            break;
                                        }
                                    return void 0 !== dc && (this.$changes.delete(dc), this.$indexes.delete(dc), this.$items.delete(dc));
                                }, cc.prototype.clear = function(cc) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), cc && T.call(this, cc), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: a.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, cc.prototype.has = function(a) {
                                    return Array.from(this.$items.values()).some(function(cc) {
                                        return cc === a;
                                    });
                                }, cc.prototype.forEach = function(a) {
                                    var dc = this;
                                    this.$items.forEach(function(L, M, N) {
                                        return a(L, M, dc);
                                    });
                                }, cc.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(cc.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), cc.prototype.setIndex = function(a, cc) {
                                    this.$indexes.set(a, cc);
                                }, cc.prototype.getIndex = function(a) {
                                    return this.$indexes.get(a);
                                }, cc.prototype.getByIndex = function(a) {
                                    return this.$items.get(this.$indexes.get(a));
                                }, cc.prototype.deleteByIndex = function(a) {
                                    var dc = this.$indexes.get(a);
                                    this.$items.delete(dc), this.$indexes.delete(a);
                                }, cc.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, cc.prototype.toJSON = function() {
                                    var dc = [];
                                    return this.forEach(function(cc, L) {
                                        dc.push('function' == typeof cc.toJSON ? cc.toJSON() : cc);
                                    }), dc;
                                }, cc.prototype.clone = function(a) {
                                    var dc;
                                    return a ? dc = Object.assign(new cc(), this) : (dc = new cc(), this.forEach(function(a) {
                                        a.$changes ? dc.add(a.clone()) : dc.add(a);
                                    })), dc;
                                }, cc;
                            }(),
                            cc = function() {
                                function dc(a) {
                                    var ec = this;
                                    this.$changes = new R(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, a && a.forEach(function(a) {
                                        return ec.add(a);
                                    });
                                }
                                return dc.prototype.onAdd = function(dc, L) {
                                    return void 0 === L && (L = !0), S(this.$callbacks || (this.$callbacks = []), a.OPERATION.ADD, dc, L ? this.$items : void 0);
                                }, dc.prototype.onRemove = function(dc) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.DELETE, dc);
                                }, dc.prototype.onChange = function(dc) {
                                    return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.REPLACE, dc);
                                }, dc.is = function(a) {
                                    return void 0 !== a.set;
                                }, dc.prototype.add = function(dc) {
                                    var ec, fc;
                                    if (this.has(dc))
                                        return !1;
                                    var gc = this.$refId++;
                                    void 0 !== dc.$changes && dc.$changes.setParent(this, this.$changes.root, gc);
                                    var hc = null !== (fc = null === (ec = this.$changes.indexes[gc]) || void 0 === ec ? void 0 : ec.op) && void 0 !== fc ? fc : a.OPERATION.ADD;
                                    return this.$changes.indexes[gc] = gc, this.$indexes.set(gc, gc), this.$items.set(gc, dc), this.$changes.change(gc, hc), gc;
                                }, dc.prototype.entries = function() {
                                    return this.$items.entries();
                                }, dc.prototype.delete = function(a) {
                                    for (var ec, fc, gc = this.$items.entries();
                                        (fc = gc.next()) && !fc.done;)
                                        if (a === fc.value[1]) {
                                            ec = fc.value[0];
                                            break;
                                        }
                                    return void 0 !== ec && (this.$changes.delete(ec), this.$indexes.delete(ec), this.$items.delete(ec));
                                }, dc.prototype.clear = function(dc) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), dc && T.call(this, dc), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: a.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, dc.prototype.has = function(a) {
                                    for (var ec, fc = this.$items.values(), gc = !1;
                                        (ec = fc.next()) && !ec.done;)
                                        if (a === ec.value) {
                                            gc = !0;
                                            break;
                                        }
                                    return gc;
                                }, dc.prototype.forEach = function(a) {
                                    var ec = this;
                                    this.$items.forEach(function(L, M, N) {
                                        return a(L, M, ec);
                                    });
                                }, dc.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(dc.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), dc.prototype.setIndex = function(a, dc) {
                                    this.$indexes.set(a, dc);
                                }, dc.prototype.getIndex = function(a) {
                                    return this.$indexes.get(a);
                                }, dc.prototype.getByIndex = function(a) {
                                    return this.$items.get(this.$indexes.get(a));
                                }, dc.prototype.deleteByIndex = function(a) {
                                    var ec = this.$indexes.get(a);
                                    this.$items.delete(ec), this.$indexes.delete(a);
                                }, dc.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, dc.prototype.toJSON = function() {
                                    var ec = [];
                                    return this.forEach(function(dc, L) {
                                        ec.push('function' == typeof dc.toJSON ? dc.toJSON() : dc);
                                    }), ec;
                                }, dc.prototype.clone = function(a) {
                                    var ec;
                                    return a ? ec = Object.assign(new dc(), this) : (ec = new dc(), this.forEach(function(a) {
                                        a.$changes ? ec.add(a.clone()) : ec.add(a);
                                    })), ec;
                                }, dc;
                            }(),
                            dc = function() {
                                function ec() {
                                    this.refIds = new WeakSet(), this.containerIndexes = new WeakMap();
                                }
                                return ec.prototype.addRefId = function(ec) {
                                    this.refIds.has(ec) || (this.refIds.add(ec), this.containerIndexes.set(ec, new Set()));
                                }, ec.get = function(K) {
                                    return void 0 === K.$filterState && (K.$filterState = new ec()), K.$filterState;
                                }, ec;
                            }(),
                            ec = function() {
                                function fc() {
                                    this.refs = new Map(), this.refCounts = {}, this.deletedRefs = new Set(), this.nextUniqueId = 0;
                                }
                                return fc.prototype.getNextUniqueId = function() {
                                    return this.nextUniqueId++;
                                }, fc.prototype.addRef = function(fc, K, L) {
                                    void 0 === L && (L = !0), this.refs.set(fc, K), L && (this.refCounts[fc] = (this.refCounts[fc] || 0) + 1);
                                }, fc.prototype.removeRef = function(fc) {
                                    this.refCounts[fc] = this.refCounts[fc] - 1, this.deletedRefs.add(fc);
                                }, fc.prototype.clearRefs = function() {
                                    this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {};
                                }, fc.prototype.garbageCollectDeletedRefs = function() {
                                    var gc = this;
                                    this.deletedRefs.forEach(function(K) {
                                        if (!(gc.refCounts[K] > 0)) {
                                            var hc = gc.refs.get(K);
                                            if (hc instanceof kc)
                                                for (var ic in hc._definition.schema)
                                                    'string' != typeof hc._definition.schema[ic] && hc[ic] && hc[ic].$changes && gc.removeRef(hc[ic].$changes.refId);
                                            else {
                                                var jc = hc.$changes.parent._definition,
                                                    kc = jc.schema[jc.fieldsByIndex[hc.$changes.parentIndex]];
                                                'function' == typeof Object.values(kc)[0] && Array.from(hc.values()).forEach(function(K) {
                                                    return gc.removeRef(K.$changes.refId);
                                                });
                                            }
                                            gc.refs.delete(K), delete gc.refCounts[K];
                                        }
                                    }), this.deletedRefs.clear();
                                }, fc;
                            }(),
                            fc = function(a) {
                                function gc() {
                                    return null !== a && a.apply(this, arguments) || this;
                                }
                                return L(gc, a), gc;
                            }(Error);

                        function gc(a, K, L, M) {
                            var hc, ic = !1;
                            switch (K) {
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
                                    hc = 'number', isNaN(a) && console.log('trying to encode "NaN" in '.concat(L.constructor.name, '#').concat(M));
                                    break;
                                case 'string':
                                    hc = 'string', ic = !0;
                                    break;
                                case 'boolean':
                                    return;
                            }
                            if (typeof a !== hc && (!ic || ic && null !== a)) {
                                var jc = '\''.concat(JSON.stringify(a), '\'').concat(a && a.constructor && ' ('.concat(a.constructor.name, ')') || '');
                                throw new fc('a \''.concat(hc, '\' was expected, but ').concat(jc, ' was provided in ').concat(L.constructor.name, '#').concat(M));
                            }
                        }

                        function hc(a, K, L, M) {
                            if (!(a instanceof K))
                                throw new fc('a \''.concat(K.name, '\' was expected, but \'').concat(a.constructor.name, '\' was provided in ').concat(L.constructor.name, '#').concat(M));
                        }

                        function ic(a, K, L, M, N) {
                            gc(L, a, M, N);
                            var jc = Eb[a];
                            if (!jc)
                                throw new fc('a \''.concat(a, '\' was expected, but ').concat(L, ' was provided in ').concat(M.constructor.name, '#').concat(N));
                            jc(K, L);
                        }

                        function jc(a, K, L) {
                            return ac[a](K, L);
                        }
                        var kc = function() {
                            function lc() {
                                for (var mc = [], nc = 0; nc < arguments.length; nc++)
                                    mc[nc] = arguments[nc];
                                Object.defineProperties(this, {
                                    $changes: {
                                        value: new R(this, void 0, new ec()),
                                        enumerable: !1,
                                        writable: !0
                                    },
                                    $callbacks: {
                                        value: void 0,
                                        enumerable: !1,
                                        writable: !0
                                    }
                                });
                                var oc = this._definition.descriptors;
                                oc && Object.defineProperties(this, oc), mc[0] && this.assign(mc[0]);
                            }
                            return lc.onError = function(a) {
                                console.error(a);
                            }, lc.is = function(a) {
                                return a._definition && void 0 !== a._definition.schema;
                            }, lc.prototype.onChange = function(lc) {
                                return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.REPLACE, lc);
                            }, lc.prototype.onRemove = function(lc) {
                                return S(this.$callbacks || (this.$callbacks = []), a.OPERATION.DELETE, lc);
                            }, lc.prototype.assign = function(a) {
                                return Object.assign(this, a), this;
                            }, Object.defineProperty(lc.prototype, '_definition', {
                                get: function() {
                                    return this.constructor._definition;
                                },
                                enumerable: !1,
                                configurable: !0
                            }), lc.prototype.setDirty = function(a, lc) {
                                this.$changes.change(a, lc);
                            }, lc.prototype.listen = function(a, lc, L) {
                                var mc = this;
                                return void 0 === L && (L = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[a] || (this.$callbacks[a] = []), this.$callbacks[a].push(lc), L && void 0 !== this[a] && lc(this[a], void 0),
                                    function() {
                                        return U(mc.$callbacks[a], mc.$callbacks[a].indexOf(lc));
                                    };
                            }, lc.prototype.decode = function(L, M, N) {
                                var mc;
                                void 0 === M && (M = {
                                    offset: 0
                                }), void 0 === N && (N = this);
                                var nc = [],
                                    oc = this.$changes.root,
                                    pc = L.length,
                                    qc = 0;
                                for (oc.refs.set(qc, this); M.offset < pc;) {
                                    var rc = L[M.offset++];
                                    if (rc != P) {
                                        var sc = N.$changes,
                                            tc = void 0 !== N._definition,
                                            uc = tc ? rc >> 6 << 6 : rc;
                                        if (uc !== a.OPERATION.CLEAR) {
                                            var vc = tc ? rc % (uc || 255) : Yb(L, M),
                                                wc = tc ? N._definition.fieldsByIndex[vc] : '',
                                                xc = sc.getType(vc),
                                                yc = void 0,
                                                zc = void 0,
                                                Ac = void 0;
                                            if (tc ? zc = N['_'.concat(wc)] : (zc = N.getByIndex(vc), (uc & a.OPERATION.ADD) === a.OPERATION.ADD ? (Ac = N instanceof Z ? Wb(L, M) : vc, N.setIndex(vc, Ac)) : Ac = N.getIndex(vc)), (uc & a.OPERATION.DELETE) === a.OPERATION.DELETE && (uc !== a.OPERATION.DELETE_AND_ADD && N.deleteByIndex(vc), zc && zc.$changes && oc.removeRef(zc.$changes.refId), yc = null), void 0 !== wc) {
                                                if (uc === a.OPERATION.DELETE);
                                                else if (lc.is(xc)) {
                                                    var Bc = Yb(L, M);
                                                    if (yc = oc.refs.get(Bc), uc !== a.OPERATION.REPLACE) {
                                                        var Cc = this.getSchemaType(L, M, xc);
                                                        yc || ((yc = this.createTypeInstance(Cc)).$changes.refId = Bc, zc && (yc.$callbacks = zc.$callbacks, zc.$changes.refId && Bc !== zc.$changes.refId && oc.removeRef(zc.$changes.refId))), oc.addRef(Bc, yc, yc !== zc);
                                                    }
                                                } else if ('string' == typeof xc)
                                                    yc = jc(xc, L, M);
                                                else {
                                                    var Cc = ab(Object.keys(xc)[0]),
                                                        Dc = Yb(L, M),
                                                        Ec = oc.refs.has(Dc) ? zc || oc.refs.get(Dc) : new Cc.constructor();
                                                    if ((yc = Ec.clone(!0)).$changes.refId = Dc, zc && (yc.$callbacks = zc.$callbacks, zc.$changes.refId && Dc !== zc.$changes.refId)) {
                                                        oc.removeRef(zc.$changes.refId);
                                                        for (var Fc = zc.entries(), Gc = void 0;
                                                            (Gc = Fc.next()) && !Gc.done;) {
                                                            var Hc = (mc = Gc.value)[0],
                                                                Ic = mc[1];
                                                            nc.push({
                                                                refId: Dc,
                                                                op: a.OPERATION.DELETE,
                                                                field: Hc,
                                                                value: void 0,
                                                                previousValue: Ic
                                                            });
                                                        }
                                                    }
                                                    oc.addRef(Dc, yc, Ec !== zc);
                                                }
                                                if (null != yc)
                                                    if (yc.$changes && yc.$changes.setParent(sc.ref, sc.root, vc), N instanceof lc)
                                                        N[wc] = yc;
                                                    else if (N instanceof Z)
                                                    mb = Ac, N.$items.set(mb, yc), N.$changes.allChanges.add(vc);
                                                else if (N instanceof X)
                                                    N.setAt(vc, yc);
                                                else if (N instanceof bc) {
                                                    var Bc = N.add(yc);
                                                    N.setIndex(vc, Bc);
                                                } else
                                                    N instanceof cc && !1 !== (ob = N.add(yc)) && N.setIndex(vc, ob);
                                                zc !== yc && nc.push({
                                                    refId: qc,
                                                    op: uc,
                                                    field: wc,
                                                    dynamicIndex: Ac,
                                                    value: yc,
                                                    previousValue: zc
                                                });
                                            } else {
                                                console.warn('@colyseus/schema: definition mismatch');
                                                for (var Bc = {
                                                        offset: M.offset
                                                    }; M.offset < pc && (!_b(L, M) || (Bc.offset = M.offset + 1, !oc.refs.has(Yb(L, Bc))));)
                                                    M.offset++;
                                            }
                                        } else
                                            N.clear(nc);
                                    } else {
                                        qc = Yb(L, M);
                                        var vc = oc.refs.get(qc);
                                        if (!vc)
                                            throw new Error('"refId" not found: '.concat(qc));
                                        N = vc;
                                    }
                                }
                                return this._triggerChanges(nc), oc.garbageCollectDeletedRefs(), nc;
                            }, lc.prototype.encode = function(L, M, N) {
                                void 0 === L && (L = !1), void 0 === M && (M = []), void 0 === N && (N = !1);
                                for (var mc = this.$changes, nc = new WeakSet(), oc = [mc], pc = 1, qc = 0; qc < pc; qc++) {
                                    var rc = oc[qc],
                                        sc = rc.ref,
                                        tc = sc instanceof lc;
                                    rc.ensureRefId(), nc.add(rc), rc !== mc && (rc.changed || L) && (nb(M, P), Db(M, rc.refId));
                                    for (var uc = L ? Array.from(rc.allChanges) : Array.from(rc.changes.values()), vc = 0, wc = uc.length; vc < wc; vc++) {
                                        var xc = L ? {
                                                op: a.OPERATION.ADD,
                                                index: uc[vc]
                                            } : uc[vc],
                                            yc = xc.index,
                                            zc = tc ? sc._definition.fieldsByIndex && sc._definition.fieldsByIndex[yc] : yc,
                                            Ac = M.length;
                                        if (xc.op !== a.OPERATION.TOUCH)
                                            if (tc)
                                                nb(M, yc | xc.op);
                                            else {
                                                if (nb(M, xc.op), xc.op === a.OPERATION.CLEAR)
                                                    continue;
                                                Db(M, yc);
                                            }
                                        if (tc || (xc.op & a.OPERATION.ADD) != a.OPERATION.ADD || sc instanceof Z && Cb(M, rc.ref.$indexes.get(yc)), xc.op !== a.OPERATION.DELETE) {
                                            var Bc = rc.getType(yc),
                                                Cc = rc.getValue(yc);
                                            if (Cc && Cc.$changes && !nc.has(Cc.$changes) && (oc.push(Cc.$changes), Cc.$changes.ensureRefId(), pc++), xc.op !== a.OPERATION.TOUCH) {
                                                if (lc.is(Bc))
                                                    hc(Cc, Bc, sc, zc), Db(M, Cc.$changes.refId), (xc.op & a.OPERATION.ADD) === a.OPERATION.ADD && this.tryEncodeTypeId(M, Bc, Cc.constructor);
                                                else if ('string' == typeof Bc)
                                                    ic(Bc, M, Cc, sc, zc);
                                                else {
                                                    var Dc = ab(Object.keys(Bc)[0]);
                                                    hc(sc['_'.concat(zc)], Dc.constructor, sc, zc), Db(M, Cc.$changes.refId);
                                                }
                                                N && rc.cache(yc, M.slice(Ac));
                                            }
                                        }
                                    }
                                    L || N || rc.discard();
                                }
                                return M;
                            }, lc.prototype.encodeAll = function(a) {
                                return this.encode(!0, [], a);
                            }, lc.prototype.applyFilters = function(L, M) {
                                var mc, nc;
                                void 0 === M && (M = !1);
                                for (var oc = this, pc = new Set(), qc = dc.get(L), rc = [this.$changes], sc = 1, tc = [], uc = function(uc) {
                                        var vc = rc[uc];
                                        if (pc.has(vc.refId))
                                            return 'continue';
                                        var wc = vc.ref,
                                            xc = wc instanceof lc;
                                        nb(tc, P), Db(tc, vc.refId);
                                        var yc = qc.refIds.has(vc),
                                            zc = M || !yc;
                                        qc.addRefId(vc);
                                        var Ac = qc.containerIndexes.get(vc),
                                            Bc = zc ? Array.from(vc.allChanges) : Array.from(vc.changes.values());
                                        !M && xc && wc._definition.indexesWithFilters && wc._definition.indexesWithFilters.forEach(function(lc) {
                                            !Ac.has(lc) && vc.allChanges.has(lc) && (zc ? Bc.push(lc) : Bc.push({
                                                op: a.OPERATION.ADD,
                                                index: lc
                                            }));
                                        });
                                        for (var Cc = 0, Dc = Bc.length; Cc < Dc; Cc++) {
                                            var Ec = zc ? {
                                                op: a.OPERATION.ADD,
                                                index: Bc[Cc]
                                            } : Bc[Cc];
                                            if (Ec.op !== a.OPERATION.CLEAR) {
                                                var Fc = Ec.index;
                                                if (Ec.op !== a.OPERATION.DELETE) {
                                                    var Gc = vc.getValue(Fc),
                                                        Hc = vc.getType(Fc);
                                                    if (xc) {
                                                        if ((jb = wc._definition.filters && wc._definition.filters[Fc]) && !jb.call(wc, L, Gc, oc)) {
                                                            Gc && Gc.$changes && pc.add(Gc.$changes.refId);
                                                            continue;
                                                        }
                                                    } else {
                                                        var Ic, Jc = vc.parent;
                                                        if ((Ic = vc.getChildrenFilter()) && !Ic.call(Jc, L, wc.$indexes.get(Fc), Gc, oc)) {
                                                            Gc && Gc.$changes && pc.add(Gc.$changes.refId);
                                                            continue;
                                                        }
                                                    }
                                                    if (Gc.$changes && (rc.push(Gc.$changes), sc++), Ec.op !== a.OPERATION.TOUCH)
                                                        if (Ec.op === a.OPERATION.ADD || xc)
                                                            tc.push.apply(tc, null !== (mc = vc.caches[Fc]) && void 0 !== mc ? mc : []), Ac.add(Fc);
                                                        else if (Ac.has(Fc))
                                                        tc.push.apply(tc, null !== (nc = vc.caches[Fc]) && void 0 !== nc ? nc : []);
                                                    else {
                                                        if (Ac.add(Fc), nb(tc, a.OPERATION.ADD), Db(tc, Fc), wc instanceof Z) {
                                                            var Ic = vc.ref.$indexes.get(Fc);
                                                            Cb(tc, Ic);
                                                        }
                                                        Gc.$changes ? Db(tc, Gc.$changes.refId) : Eb[Hc](tc, Gc);
                                                    } else
                                                        Gc.$changes && !xc && (nb(tc, a.OPERATION.ADD), Db(tc, Fc), wc instanceof Z && (lb = vc.ref.$indexes.get(Fc), Cb(tc, lb)), Db(tc, Gc.$changes.refId));
                                                } else
                                                    xc ? nb(tc, Ec.op | Fc) : (nb(tc, Ec.op), Db(tc, Fc));
                                            } else
                                                nb(tc, Ec.op);
                                        }
                                    }, vc = 0; vc < sc; vc++)
                                    uc(vc);
                                return tc;
                            }, lc.prototype.clone = function() {
                                var mc, nc = new this.constructor(),
                                    oc = this._definition.schema;
                                for (var pc in oc)
                                    'object' == typeof this[pc] && 'function' == typeof(null === (mc = this[pc]) || void 0 === mc ? void 0 : mc.clone) ? nc[pc] = this[pc].clone() : nc[pc] = this[pc];
                                return nc;
                            }, lc.prototype.toJSON = function() {
                                var mc = this._definition.schema,
                                    nc = this._definition.deprecated,
                                    oc = {};
                                for (var pc in mc)
                                    nc[pc] || null === this[pc] || void 0 === this[pc] || (oc[pc] = 'function' == typeof this[pc].toJSON ? this[pc].toJSON() : this['_'.concat(pc)]);
                                return oc;
                            }, lc.prototype.discardAllChanges = function() {
                                this.$changes.discardAll();
                            }, lc.prototype.getByIndex = function(a) {
                                return this[this._definition.fieldsByIndex[a]];
                            }, lc.prototype.deleteByIndex = function(a) {
                                this[this._definition.fieldsByIndex[a]] = void 0;
                            }, lc.prototype.tryEncodeTypeId = function(a, lc, L) {
                                lc._typeid !== L._typeid && (nb(a, Q), Db(a, L._typeid));
                            }, lc.prototype.getSchemaType = function(a, lc, L) {
                                var mc;
                                return a[lc.offset] === Q && (lc.offset++, mc = this.constructor._context.get(Yb(a, lc))), mc || L;
                            }, lc.prototype.createTypeInstance = function(a) {
                                var mc = new a();
                                return mc.$changes.root = this.$changes.root, mc;
                            }, lc.prototype._triggerChanges = function(L) {
                                for (var mc, nc, oc, pc, qc, rc, sc, tc, uc, vc = new Set(), wc = this.$changes.root.refs, xc = function(xc) {
                                        var yc = L[xc],
                                            zc = yc.refId,
                                            Ac = wc.get(zc),
                                            Bc = Ac.$callbacks;
                                        if ((yc.op & a.OPERATION.DELETE) === a.OPERATION.DELETE && yc.previousValue instanceof lc && (null === (nc = null === (mc = yc.previousValue.$callbacks) || void 0 === mc ? void 0 : mc[a.OPERATION.DELETE]) || void 0 === nc || nc.forEach(function(a) {
                                                return a();
                                            })), !Bc)
                                            return 'continue';
                                        if (Ac instanceof lc) {
                                            if (!vc.has(zc))
                                                try {
                                                    null === (oc = null == Bc ? void 0 : Bc[a.OPERATION.REPLACE]) || void 0 === oc || oc.forEach(function(a) {
                                                        return a(L);
                                                    });
                                                } catch (a) {
                                                    lc.onError(a);
                                                }
                                            try {
                                                Bc.hasOwnProperty(yc.field) && (null === (pc = Bc[yc.field]) || void 0 === pc || pc.forEach(function(a) {
                                                    return a(yc.value, yc.previousValue);
                                                }));
                                            } catch (a) {
                                                lc.onError(a);
                                            }
                                        } else
                                            yc.op === a.OPERATION.ADD && void 0 === yc.previousValue ? null === (qc = Bc[a.OPERATION.ADD]) || void 0 === qc || qc.forEach(function(a) {
                                                var Cc;
                                                return a(yc.value, null !== (Cc = yc.dynamicIndex) && void 0 !== Cc ? Cc : yc.field);
                                            }) : yc.op === a.OPERATION.DELETE ? void 0 !== yc.previousValue && (null === (rc = Bc[a.OPERATION.DELETE]) || void 0 === rc || rc.forEach(function(a) {
                                                var Cc;
                                                return a(yc.previousValue, null !== (Cc = yc.dynamicIndex) && void 0 !== Cc ? Cc : yc.field);
                                            })) : yc.op === a.OPERATION.DELETE_AND_ADD && (void 0 !== yc.previousValue && (null === (sc = Bc[a.OPERATION.DELETE]) || void 0 === sc || sc.forEach(function(a) {
                                                var Cc;
                                                return a(yc.previousValue, null !== (Cc = yc.dynamicIndex) && void 0 !== Cc ? Cc : yc.field);
                                            })), null === (tc = Bc[a.OPERATION.ADD]) || void 0 === tc || tc.forEach(function(a) {
                                                var Cc;
                                                return a(yc.value, null !== (Cc = yc.dynamicIndex) && void 0 !== Cc ? Cc : yc.field);
                                            })), yc.value !== yc.previousValue && (null === (uc = Bc[a.OPERATION.REPLACE]) || void 0 === uc || uc.forEach(function(a) {
                                                var Cc;
                                                return a(yc.value, null !== (Cc = yc.dynamicIndex) && void 0 !== Cc ? Cc : yc.field);
                                            }));
                                        vc.add(zc);
                                    }, yc = 0; yc < L.length; yc++)
                                    xc(yc);
                            }, lc._definition = bb.create(), lc;
                        }();

                        function lc(a) {
                            for (var mc = [a.$changes], nc = 1, oc = {}, pc = qc, rc = function(a) {
                                    var sc = mc[a];
                                    sc.changes.forEach(function(a) {
                                        var tc = sc.ref,
                                            uc = a.index,
                                            vc = tc._definition ? tc._definition.fieldsByIndex[uc] : tc.$indexes.get(uc);
                                        pc[vc] = sc.getValue(uc);
                                    });
                                }, sc = 0; sc < nc; sc++)
                                rc(sc);
                            return qc;
                        }
                        var mc = {
                                context: new db()
                            },
                            nc = function(a) {
                                function oc() {
                                    return null !== a && a.apply(this, arguments) || this;
                                }
                                return L(oc, a), M([fb('string', mc)], oc.prototype, 'name', void 0), M([fb('string', mc)], oc.prototype, 'type', void 0), M([fb('number', mc)], oc.prototype, 'referencedType', void 0), oc;
                            }(kc),
                            oc = function(a) {
                                function pc() {
                                    var qc = null !== a && a.apply(this, arguments) || this;
                                    return qc.fields = new X(), qc;
                                }
                                return L(pc, a), M([fb('number', mc)], pc.prototype, 'id', void 0), M([fb([nc], mc)], pc.prototype, 'fields', void 0), pc;
                            }(kc),
                            pc = function(a) {
                                function qc() {
                                    var rc = null !== a && a.apply(this, arguments) || this;
                                    return rc.types = new X(), rc;
                                }
                                return L(qc, a), qc.encode = function(a) {
                                    var rc = a.constructor,
                                        sc = new qc();
                                    sc.rootType = rc._typeid;
                                    var tc = function(a, qc) {
                                            for (var uc in qc) {
                                                var vc = new nc();
                                                vc.name = uc;
                                                var wc = void 0;
                                                if ('string' == typeof qc[uc])
                                                    wc = qc[uc];
                                                else {
                                                    var xc = qc[uc],
                                                        yc = void 0;
                                                    kc.is(xc) ? (wc = 'ref', yc = qc[uc]) : 'string' == typeof xc[wc = Object.keys(xc)[0]] ? wc += ':' + xc[wc] : yc = xc[wc], vc.referencedType = yc ? yc._typeid : -1;
                                                }
                                                vc.type = wc, a.fields.push(vc);
                                            }
                                            sc.types.push(a);
                                        },
                                        uc = rc._context.types;
                                    for (var vc in uc) {
                                        var wc = new oc();
                                        wc.id = Number(vc), tc(wc, uc[vc]._definition.schema);
                                    }
                                    return sc.encodeAll();
                                }, qc.decode = function(a, M) {
                                    var rc = new db(),
                                        sc = new qc();
                                    sc.decode(a, M);
                                    var tc = sc.types.reduce(function(a, qc) {
                                        var uc = function(a) {
                                                function vc() {
                                                    return null !== a && a.apply(this, arguments) || this;
                                                }
                                                return L(vc, a), vc;
                                            }(kc),
                                            vc = qc.id;
                                        return a[vc] = uc, rc.add(uc, vc), a;
                                    }, {});
                                    sc.types.forEach(function(a) {
                                        var uc = tc[a.id];
                                        a.fields.forEach(function(a) {
                                            var vc;
                                            if (void 0 !== a.referencedType) {
                                                var wc = a.type,
                                                    xc = tc[a.referencedType];
                                                if (!xc) {
                                                    var yc = a.type.split(':');
                                                    wc = yc[0], xc = yc[1];
                                                }
                                                'ref' === wc ? fb(xc, {
                                                    context: rc
                                                })(uc.prototype, a.name) : fb(((vc = {})[wc] = xc, vc), {
                                                    context: rc
                                                })(uc.prototype, a.name);
                                            } else
                                                fb(a.type, {
                                                    context: rc
                                                })(uc.prototype, a.name);
                                        });
                                    });
                                    var uc = tc[sc.rootType],
                                        vc = new uc();
                                    for (var wc in uc._definition.schema) {
                                        var xc = uc._definition.schema[wc];
                                        'string' != typeof xc && (vc[wc] = 'function' == typeof xc ? new xc() : new(ab(Object.keys(xc)[0])).constructor());
                                    }
                                    return vc;
                                }, M([fb([oc], mc)], qc.prototype, 'types', void 0), M([fb('number', mc)], qc.prototype, 'rootType', void 0), qc;
                            }(kc);
                        _('map', {
                            constructor: Z
                        }), _('array', {
                            constructor: X
                        }), _('set', {
                            constructor: cc
                        }), _('collection', {
                            constructor: bc
                        }), a.ArraySchema = X, a.CollectionSchema = bc, a.Context = db, a.MapSchema = Z, a.Reflection = pc, a.ReflectionField = nc, a.ReflectionType = oc, a.Schema = kc, a.SchemaDefinition = bb, a.SetSchema = cc, a.decode = ac, a.defineTypes = jb, a.deprecated = ib, a.dumpChanges = lc, a.encode = Eb, a.filter = gb, a.filterChildren = hb, a.hasFilter = cb, a.registerType = _, a.type = fb, Object.defineProperty(a, '__esModule', {
                            value: !0
                        });
                    });
                }),
                K = function() {
                    function L(L, N) {
                        var M = this;
                        this.onStateChange = H(), this.onError = H(), this.onLeave = H(), this.onJoin = H(), this.hasJoined = !1, this.onMessageHandlers = F(), this.roomId = null, this.name = L, N && (this.serializer = new(E('schema'))(), this.rootSchema = N, this.serializer.state = new N()), this.onError(function(L, N) {
                            var N;
                            return null === (N = console.warn) || void 0 === N ? void 0 : N.call(console, 'colyseus.js - onError => ('.concat(L, ') ').concat(N));
                        }), this.onLeave(function() {
                            return N.removeAllListeners();
                        });
                    }
                    return Object.defineProperty(L.prototype, 'id', {
                        get: function() {
                            return this.roomId;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), L.prototype.connect = function(N, b, c) {
                        void 0 === c && (c = this);
                        var M = new z();
                        c.connection = M, M.events.onmessage = L.prototype.onMessageCallback.bind(c), M.events.onclose = function(L) {
                            var N;
                            if (!c.hasJoined)
                                return null === (N = console.warn) || void 0 === N || N.call(console, 'Room connection was closed unexpectedly ('.concat(L.code, '): ').concat(L.reason)), void c.onError.invoke(L.code, L.reason);
                            L.code === e.DEVMODE_RESTART && b ? b() : (c.onLeave.invoke(L.code), c.destroy());
                        }, M.events.onerror = function(L) {
                            var N;
                            null === (N = console.warn) || void 0 === N || N.call(console, 'Room, onError ('.concat(L.code, '): ').concat(L.reason)), c.onError.invoke(L.code, L.reason);
                        }, M.connect(_);
                    }, L.prototype.leave = function(L) {
                        var M = this;
                        return void 0 === L && (L = !0), new Promise(function(c) {
                            M.onLeave(function(L) {
                                return c(L);
                            }), M.connection ? L ? M.connection.send([_.Protocol.LEAVE_ROOM]) : M.connection.close() : M.onLeave.invoke(e.CONSENTED);
                        });
                    }, L.prototype.onMessage = function(L, _) {
                        return this.onMessageHandlers.on(this.getMessageHandlerKey(L), _);
                    }, L.prototype.send = function(L, b) {
                        var M, N = [_.Protocol.ROOM_DATA];
                        if ('string' == typeof L ? J.encode.string(N, L) : J.encode.number(N, L), void 0 !== b) {
                            var O = t(b);
                            (M = new Uint8Array(N.length + O.byteLength)).set(new Uint8Array(N), 0), M.set(new Uint8Array(O), N.length);
                        } else
                            M = new Uint8Array(N);
                        this.connection.send(M.buffer);
                    }, L.prototype.sendBytes = function(L, b) {
                        var M, N = [_.Protocol.ROOM_DATA_BYTES];
                        'string' == typeof L ? J.encode.string(N, L) : J.encode.number(N, L), (M = new Uint8Array(N.length + (b.byteLength || b.length))).set(new Uint8Array(N), 0), M.set(new Uint8Array(b), N.length), this.connection.send(M.buffer);
                    }, Object.defineProperty(L.prototype, 'state', {
                        get: function() {
                            return this.serializer.getState();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), L.prototype.removeAllListeners = function() {
                        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {};
                    }, L.prototype.onMessageCallback = function(L) {
                        var M = Array.from(new Uint8Array(L.data)),
                            N = M[0];
                        if (N === _.Protocol.JOIN_ROOM) {
                            var O = 1,
                                P = A(M, O);
                            if (O += B(P), this.serializerId = A(M, O), O += B(this.serializerId), !this.serializer) {
                                var Q = E(this.serializerId);
                                this.serializer = new Q();
                            }
                            M.length > O && this.serializer.handshake && this.serializer.handshake(M, {
                                offset: O
                            }), this.reconnectionToken = ''.concat(this.roomId, ':').concat(P), this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([_.Protocol.JOIN_ROOM]);
                        } else if (N === _.Protocol.ERROR) {
                            var Q = {
                                    offset: 1
                                },
                                R = J.decode.number(M, Q),
                                S = J.decode.string(M, Q);
                            this.onError.invoke(R, S);
                        } else if (N === _.Protocol.LEAVE_ROOM)
                            this.leave();
                        else if (N === _.Protocol.ROOM_DATA_SCHEMA) {
                            var T = {
                                offset: 1
                            };
                            (S = new(l = (this.serializer.getState().constructor._context.get(J.decode.number(M, T))))()).decode(M, T), this.dispatchMessage(l, S);
                        } else if (N === _.Protocol.ROOM_STATE)
                            M.shift(), this.setState(M);
                        else if (N === _.Protocol.ROOM_STATE_PATCH)
                            M.shift(), this.patch(M);
                        else if (N === _.Protocol.ROOM_DATA) {
                            var U = {
                                    offset: 1
                                },
                                V = J.decode.stringCheck(M, U) ? J.decode.string(M, U) : J.decode.number(M, U);
                            S = M.length > U.offset ? n(L.data, U.offset) : void 0, this.dispatchMessage(V, S);
                        } else if (N === _.Protocol.ROOM_DATA_BYTES) {
                            var W = {
                                offset: 1
                            };
                            V = J.decode.stringCheck(M, W) ? J.decode.string(M, W) : J.decode.number(M, W), this.dispatchMessage(V, new Uint8Array(M.slice(W.offset)));
                        }
                    }, L.prototype.setState = function(L) {
                        this.serializer.setState(L), this.onStateChange.invoke(this.serializer.getState());
                    }, L.prototype.patch = function(L) {
                        this.serializer.patch(L), this.onStateChange.invoke(this.serializer.getState());
                    }, L.prototype.dispatchMessage = function(L, _) {
                        var M, N = this.getMessageHandlerKey(L);
                        this.onMessageHandlers.events[N] ? this.onMessageHandlers.emit(N, _) : this.onMessageHandlers.events['*'] ? this.onMessageHandlers.emit('*', L, _) : null === (M = console.warn) || void 0 === M || M.call(console, 'colyseus.js: onMessage() not registered for type \''.concat(L, '\'.'));
                    }, L.prototype.destroy = function() {
                        this.serializer && this.serializer.teardown();
                    }, L.prototype.getMessageHandlerKey = function(L) {
                        switch (typeof L) {
                            case 'function':
                                return '$'.concat(L._typeid);
                            case 'string':
                                return L;
                            case 'number':
                                return 'i'.concat(L);
                            default:
                                throw new Error('invalid message type.');
                        }
                    }, L;
                }();

            function L(a, _) {
                _.statusMessage = a.statusText, _.statusCode = a.status, _.data = a.body;
            }

            function M(a, _, b) {
                var N, O, P = (b = b || {}).body;
                return b.method = a, b.headers = b.headers || {}, P instanceof FormData || P && 'object' == typeof P && (b.headers['content-type'] = 'application/json', b.body = JSON.stringify(P)), b.withCredentials && (b.credentials = 'include'), b.timeout && (O = new AbortController(), b.signal = O.signal, N = setTimeout(O.abort, b.timeout)), new Promise((a, f) => {
                    fetch(_, b).then((_, O) => {
                        clearTimeout(N), L(_, _), O = _.status >= 400 ? f : a, (P = _.headers.get('content-type')) && ~P.indexOf('application/json') ? _.text().then(a => {
                            try {
                                _.data = JSON.parse(a, b.reviver), O(_);
                            } catch (a) {
                                a.headers = _.headers, L(_, a), f(a);
                            }
                        }) : O(_);
                    }).catch(a => {
                        a.timeout = O && O.signal.aborted, f(a);
                    });
                });
            }
            var N, O, P, Q, R, S = M.bind(M, 'GET'),
                T = M.bind(M, 'POST'),
                U = M.bind(M, 'PATCH'),
                V = M.bind(M, 'DELETE'),
                W = M.bind(M, 'PUT'),
                X = {
                    del: V,
                    get: S,
                    patch: U,
                    post: T,
                    put: W,
                    send: M
                },
                Y = b({
                    __proto__: null,
                    default: X,
                    del: V,
                    get: S,
                    patch: U,
                    post: T,
                    put: W,
                    send: M
                }, [X]),
                Z = function() {
                    function $($) {
                        this.client = $;
                    }
                    return $.prototype.get = function($, _) {
                        return void 0 === _ && (_ = {}), this.request('get', $, _);
                    }, $.prototype.post = function($, _) {
                        return void 0 === _ && (_ = {}), this.request('post', $, _);
                    }, $.prototype.del = function($, _) {
                        return void 0 === _ && (_ = {}), this.request('del', $, _);
                    }, $.prototype.put = function($, _) {
                        return void 0 === _ && (_ = {}), this.request('put', $, _);
                    }, $.prototype.request = function($, _, b) {
                        return void 0 === b && (b = {}), Y[$](this.client.getHttpEndpoint(_), this.getOptions(b)).catch(function($) {
                            var _;
                            throw new k($.statusCode || -1, (null === (_ = $.data) || void 0 === _ ? void 0 : _.error) || $.statusMessage || $.message || 'offline');
                        });
                    }, $.prototype.getOptions = function($) {
                        return this.authToken && ($.headers || ($.headers = {}), $.headers.Authorization = 'Bearer '.concat(this.authToken), $.withCredentials = !0), $;
                    }, $;
                }();

            function $() {
                return N || (N = 'undefined' != typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : 'undefined' != typeof window && window.localStorage ? window.localStorage : {
                    cache: {},
                    setItem: function(a, fb) {
                        this.cache[a] = fb;
                    },
                    getItem: function(a) {
                        this.cache[a];
                    },
                    removeItem: function(a) {
                        delete this.cache[a];
                    }
                }), N;
            }

            function _(a, fb) {
                $().setItem(a, fb);
            }

            function ab(a) {
                $().removeItem(a);
            }

            function bb(a, fb) {
                var cb = $().getItem(a);
                'undefined' != typeof Promise && cb instanceof Promise ? cb.then(function(a) {
                    return fb(a);
                }) : fb(cb);
            }
            var cb, db = function() {
                function eb(eb) {
                    var fb = this;
                    this.http = eb, this.settings = {
                        path: '/auth',
                        key: 'colyseus-auth-token'
                    }, O.set(this, !1), P.set(this, void 0), Q.set(this, void 0), R.set(this, F()), bb(this.settings.key, function(eb) {
                        return fb.token = eb;
                    });
                }
                return Object.defineProperty(eb.prototype, 'token', {
                    get: function() {
                        return this.http.authToken;
                    },
                    set: function(eb) {
                        this.http.authToken = eb;
                    },
                    enumerable: !1,
                    configurable: !0
                }), eb.prototype.onChange = function(eb) {
                    var fb = this,
                        gb = i(this, R, 'f').on('change', eb);
                    return i(this, O, 'f') || j(this, P, new Promise(function(eb, gb) {
                        fb.getUserData().then(function(eb) {
                            fb.emitChange(f(f({}, eb), {
                                token: fb.token
                            }));
                        }).catch(function(eb) {
                            fb.emitChange({
                                user: null,
                                token: void 0
                            });
                        }).finally(function() {
                            eb();
                        });
                    }), 'f'), j(this, O, !0, 'f'), gb;
                }, eb.prototype.getUserData = function() {
                    return g(this, void 0, void 0, function() {
                        return h(this, function(eb) {
                            switch (eb.label) {
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
                                        eb.sent().data
                                    ];
                                case 2:
                                    throw new Error('missing auth.token');
                            }
                        });
                    });
                }, eb.prototype.registerWithEmailAndPassword = function(eb, fb, b) {
                    return g(this, void 0, void 0, function() {
                        var fb;
                        return h(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/register'), {
                                            body: {
                                                email: eb,
                                                password: fb,
                                                options: b
                                            }
                                        })
                                    ];
                                case 1:
                                    return fb = d.sent().data, this.emitChange(fb), [
                                        2,
                                        fb
                                    ];
                            }
                        });
                    });
                }, eb.prototype.signInWithEmailAndPassword = function(eb, fb) {
                    return g(this, void 0, void 0, function() {
                        var fb;
                        return h(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/login'), {
                                            body: {
                                                email: eb,
                                                password: fb
                                            }
                                        })
                                    ];
                                case 1:
                                    return fb = c.sent().data, this.emitChange(fb), [
                                        2,
                                        fb
                                    ];
                            }
                        });
                    });
                }, eb.prototype.signInAnonymously = function(eb) {
                    return g(this, void 0, void 0, function() {
                        var fb;
                        return h(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/anonymous'), {
                                            body: {
                                                options: eb
                                            }
                                        })
                                    ];
                                case 1:
                                    return fb = b.sent().data, this.emitChange(fb), [
                                        2,
                                        fb
                                    ];
                            }
                        });
                    });
                }, eb.prototype.sendPasswordResetEmail = function(eb) {
                    return g(this, void 0, void 0, function() {
                        return h(this, function(fb) {
                            switch (fb.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/forgot-password'), {
                                            body: {
                                                email: eb
                                            }
                                        })
                                    ];
                                case 1:
                                    return [
                                        2,
                                        fb.sent().data
                                    ];
                            }
                        });
                    });
                }, eb.prototype.signInWithProvider = function(eb, fb) {
                    return void 0 === fb && (fb = {}), g(this, void 0, void 0, function() {
                        var fb = this;
                        return h(this, function(c) {
                            return [
                                2,
                                new Promise(function(c, d) {
                                    var gb = fb.width || 480,
                                        hb = fb.height || 768,
                                        ib = fb.token ? '?token='.concat(fb.token) : '',
                                        jb = 'Login with '.concat(eb[0].toUpperCase() + eb.substring(1)),
                                        kb = fb.http.client.getHttpEndpoint(''.concat(fb.prefix || ''.concat(fb.settings.path, '/provider'), '/').concat(eb).concat(ib)),
                                        lb = screen.width / 2 - gb / 2,
                                        mb = screen.height / 2 - hb / 2;
                                    j(fb, Q, window.open(kb, jb, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + gb + ', height=' + hb + ', top=' + mb + ', left=' + lb), 'f');
                                    var nb = function(eb) {
                                            void 0 === eb.data.user && void 0 === eb.data.token || (clearInterval(o), i(fb, Q, 'f').close(), j(fb, Q, void 0, 'f'), window.removeEventListener('message', nb), void 0 !== eb.data.error ? d(eb.data.error) : (c(eb.data), fb.emitChange(eb.data)));
                                        },
                                        ob = setInterval(function() {
                                            i(fb, Q, 'f') && !i(fb, Q, 'f').closed || (j(fb, Q, void 0, 'f'), d('cancelled'), window.removeEventListener('message', nb));
                                        }, 200);
                                    window.addEventListener('message', nb);
                                })
                            ];
                        });
                    });
                }, eb.prototype.signOut = function() {
                    return g(this, void 0, void 0, function() {
                        return h(this, function(eb) {
                            return this.emitChange({
                                user: null,
                                token: null
                            }), [2];
                        });
                    });
                }, eb.prototype.emitChange = function(eb) {
                    void 0 !== eb.token && (this.token = eb.token, null === eb.token ? ab(this.settings.key) : _(this.settings.key, eb.token)), i(this, R, 'f').emit('change', eb);
                }, eb;
            }();
            O = new WeakMap(), P = new WeakMap(), Q = new WeakMap(), R = new WeakMap();
            var eb = function(a) {
                    function fb(b, c) {
                        var gb = a.call(this, b) || this;
                        return gb.code = c, Object.setPrototypeOf(gb, fb.prototype), gb;
                    }
                    return d(fb, a), fb;
                }(Error),
                fb = 'undefined' != typeof window && void 0 !== (null === (cb = null === window || void 0 === window ? void 0 : window.location) || void 0 === cb ? void 0 : cb.hostname) ? ''.concat(window.location.protocol.replace('http', 'ws'), '//').concat(window.location.hostname).concat(window.location.port && ':'.concat(window.location.port)) : 'ws://127.0.0.1:2567',
                gb = function() {
                    function hb(hb) {
                        if (void 0 === hb && (hb = fb), 'string' == typeof hb) {
                            var ib = new URL(hb),
                                jb = 'https:' === ib.protocol || 'wss:' === ib.protocol,
                                kb = Number(ib.port || (jb ? 443 : 80));
                            this.settings = {
                                hostname: ib.hostname,
                                pathname: ib.pathname,
                                port: kb,
                                secure: jb
                            };
                        } else
                            void 0 === hb.port && (hb.port = hb.secure ? 443 : 80), void 0 === hb.pathname && (hb.pathname = ''), this.settings = hb;
                        this.settings.pathname.endsWith('/') && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Z(this), this.auth = new db(this.http);
                    }
                    return hb.prototype.joinOrCreate = function(hb, ib, b) {
                        return void 0 === ib && (ib = {}), g(this, void 0, void 0, function() {
                            return h(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinOrCreate', hb, ib, b)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            c.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.create = function(hb, ib, b) {
                        return void 0 === ib && (ib = {}), g(this, void 0, void 0, function() {
                            return h(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('create', hb, ib, b)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            c.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.join = function(hb, ib, b) {
                        return void 0 === ib && (ib = {}), g(this, void 0, void 0, function() {
                            return h(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('join', hb, ib, b)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            c.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.joinById = function(hb, ib, b) {
                        return void 0 === ib && (ib = {}), g(this, void 0, void 0, function() {
                            return h(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinById', hb, ib, b)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            c.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.reconnect = function(hb, ib) {
                        return g(this, void 0, void 0, function() {
                            var ib, jb, kb;
                            return h(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if ('string' == typeof hb && 'string' == typeof ib)
                                            throw new Error('DEPRECATED: .reconnect() now only accepts \'reconnectionToken\' as argument.\nYou can get this token from previously connected `room.reconnectionToken`');
                                        if (ib = hb.split(':'), jb = ib[0], kb = ib[1], !jb || !kb)
                                            throw new Error('Invalid reconnection token format.\nThe format should be roomId:reconnectionToken');
                                        return [
                                            4,
                                            this.createMatchMakeRequest('reconnect', jb, {
                                                reconnectionToken: kb
                                            }, ib)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            e.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.getAvailableRooms = function(hb) {
                        return void 0 === hb && (hb = ''), g(this, void 0, void 0, function() {
                            return h(this, function(ib) {
                                switch (ib.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.get('matchmake/'.concat(hb), {
                                                headers: {
                                                    Accept: 'application/json'
                                                }
                                            })
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            ib.sent().data
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.consumeSeatReservation = function(hb, ib, b) {
                        return g(this, void 0, void 0, function() {
                            var ib, jb, kb, lb = this;
                            return h(this, function(i) {
                                return (ib = this.createRoom(hb.room.name, ib)).roomId = hb.room.roomId, ib.sessionId = hb.sessionId, jb = {
                                    sessionId: ib.sessionId
                                }, hb.reconnectionToken && (jb.reconnectionToken = hb.reconnectionToken), kb = b || ib, ib.connect(this.buildEndpoint(hb.room, jb), hb.devMode && function() {
                                    return g(lb, void 0, void 0, function() {
                                        var mb, nb, ob, pb = this;
                                        return h(this, function(j) {
                                            return console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' Re-establishing connection with room id \'').concat(ib.roomId, '\'...')), mb = 0, nb = 8, ob = function() {
                                                return g(pb, void 0, void 0, function() {
                                                    return h(this, function(g) {
                                                        switch (g.label) {
                                                            case 0:
                                                                mb++, g.label = 1;
                                                            case 1:
                                                                return g.trys.push([
                                                                    1,
                                                                    3, ,
                                                                    4
                                                                ]), [
                                                                    4,
                                                                    this.consumeSeatReservation(hb, ib, kb)
                                                                ];
                                                            case 2:
                                                                return g.sent(), console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(9989), ' Successfully re-established connection with room \'').concat(ib.roomId, '\'')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 3:
                                                                return g.sent(), mb < nb ? (console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' retrying... (').concat(mb, ' out of ').concat(nb, ')')), setTimeout(ob, 2000)) : console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(10060), ' Failed to reconnect. Is your server running? Please check server logs.')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 4:
                                                                return [2];
                                                        }
                                                    });
                                                });
                                            }, setTimeout(ob, 2000), [2];
                                        });
                                    });
                                }, kb), [
                                    2,
                                    new Promise(function(hb, ib) {
                                        var mb = function(hb, mb) {
                                            return ib(new k(hb, mb));
                                        };
                                        kb.onError.once(mb), kb.onJoin.once(function() {
                                            kb.onError.remove(mb), hb(kb);
                                        });
                                    })
                                ];
                            });
                        });
                    }, hb.prototype.createMatchMakeRequest = function(hb, ib, b, c, d) {
                        return void 0 === b && (b = {}), g(this, void 0, void 0, function() {
                            var ib;
                            return h(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.post('matchmake/'.concat(hb, '/').concat(ib), {
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(b)
                                            })
                                        ];
                                    case 1:
                                        if ((ib = f.sent().data).error)
                                            throw new eb(ib.error, ib.code);
                                        return 'reconnect' === hb && (ib.reconnectionToken = b.reconnectionToken), [
                                            4,
                                            this.consumeSeatReservation(ib, c, d)
                                        ];
                                    case 2:
                                        return [
                                            2,
                                            f.sent()
                                        ];
                                }
                            });
                        });
                    }, hb.prototype.createRoom = function(hb, ib) {
                        return new K(hb, ib);
                    }, hb.prototype.buildEndpoint = function(hb, ib) {
                        void 0 === ib && (ib = {});
                        var ib = [];
                        for (var jb in ib)
                            ib.hasOwnProperty(jb) && ib.push(''.concat(jb, '=').concat(ib[jb]));
                        var kb = this.settings.secure ? 'wss://' : 'ws://';
                        return hb.publicAddress ? kb += ''.concat(hb.publicAddress) : kb += ''.concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname), ''.concat(kb, '/').concat(hb.processId, '/').concat(hb.roomId, '?').concat(ib.join('&'));
                    }, hb.prototype.getHttpEndpoint = function(hb) {
                        void 0 === hb && (hb = '');
                        var ib = hb.startsWith('/') ? hb : '/'.concat(hb);
                        return ''.concat(this.settings.secure ? 'https' : 'http', '://').concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(ib);
                    }, hb.prototype.getEndpointPort = function() {
                        return 80 !== this.settings.port && 443 !== this.settings.port ? ':'.concat(this.settings.port) : '';
                    }, hb;
                }(),
                hb = function() {
                    function ib() {}
                    return ib.prototype.setState = function(ib) {
                        return this.state.decode(ib);
                    }, ib.prototype.getState = function() {
                        return this.state;
                    }, ib.prototype.patch = function(ib) {
                        return this.state.decode(ib);
                    }, ib.prototype.teardown = function() {
                        var jb, kb;
                        null === (kb = null === (jb = this.state) || void 0 === jb ? void 0 : jb.$changes) || void 0 === kb || kb.root.clearRefs();
                    }, ib.prototype.handshake = function(ib, e) {
                        this.state ? new J.Reflection().decode(ib, e) : this.state = J.Reflection.decode(ib, e);
                    }, ib;
                }(),
                ib = function() {
                    function jb() {}
                    return jb.prototype.setState = function(jb) {}, jb.prototype.getState = function() {
                        return null;
                    }, jb.prototype.patch = function(jb) {}, jb.prototype.teardown = function() {}, jb.prototype.handshake = function(jb) {}, jb;
                }();
            D('schema', hb), D('none', ib), e.Auth = db, e.Client = gb, e.Room = K, e.SchemaSerializer = hb, e.registerSerializer = D, Object.defineProperty(e, '__esModule', {
                value: !0
            });
        }(e.exports);
});