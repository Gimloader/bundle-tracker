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
            ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                return null !== e && 'object' == typeof e && e.buffer instanceof ArrayBuffer;
            }), 'undefined' == typeof globalThis && 'undefined' != typeof window && (window.globalThis = window);
            var e = function(f, g) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(h, i) {
                    h.__proto__ = i;
                } || function(h, i) {
                    for (var j in i)
                        Object.prototype.hasOwnProperty.call(i, j) && (h[j] = i[j]);
                }, e(f, g);
            };

            function f(g, h) {
                if ('function' != typeof h && null !== h)
                    throw new TypeError('Class extends value ' + String(h) + ' is not a constructor or null');

                function i() {
                    this.constructor = g;
                }
                e(g, h), g.prototype = null === h ? Object.create(h) : (c.prototype = h.prototype, new c());
            }
            var f, g = function() {
                return g = Object.assign || function(h) {
                    for (var i, j = 1, k = arguments.length; j < k; j++)
                        for (var l in i = arguments[j])
                            Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                    return h;
                }, g.apply(this, arguments);
            };

            function h(i, j, k, l) {
                function m(n) {
                    return n instanceof k ? n : new k(function(o) {
                        o(n);
                    });
                }
                return new(k || (k = Promise))(function(m, n) {
                    function o(p) {
                        try {
                            _o(l.next(p));
                        } catch (p) {
                            n(p);
                        }
                    }

                    function o(p) {
                        try {
                            _o(l.throw(p));
                        } catch (p) {
                            n(p);
                        }
                    }

                    function _o(p) {
                        p.done ? m(p.value) : _m(p.value).then(g, h);
                    }
                    _h((l = l.apply(i, j || [])).next());
                });
            }

            function _h(i, j) {
                var k, l, _m, n, o = {
                    label: 0,
                    sent: function() {
                        if (1 & _m[0])
                            throw _m[1];
                        return _m[1];
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: _p(0),
                    throw: _p(1),
                    return: _p(2)
                }, 'function' == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this;
                }), n;

                function _p(q) {
                    return function(r) {
                        return _h([
                            q,
                            r
                        ]);
                    };
                }

                function p(q) {
                    if (k)
                        throw new TypeError('Generator is already executing.');
                    for (; n && (n = 0, q[0] && (o = 0)), o;)
                        try {
                            if (k = 1, l && (_m = 2 & q[0] ? l.return : q[0] ? l.throw || ((_m = l.return) && _m.call(l), 0) : l.next) && !(_m = _m.call(l, q[1])).done)
                                return _m;
                            switch (l = 0, _m && (q = [
                                    2 & q[0],
                                    _m.value
                                ]), q[0]) {
                                case 0:
                                case 1:
                                    _m = q;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: q[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, l = q[1], q = [0];
                                    continue;
                                case 7:
                                    q = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!((_m = (_m = o.trys).length > 0 && _m[_m.length - 1]) || 6 !== q[0] && 2 !== q[0])) {
                                        o = 0;
                                        continue;
                                    }
                                    if (3 === q[0] && (!_m || q[1] > _m[0] && q[1] < _m[3])) {
                                        o.label = q[1];
                                        break;
                                    }
                                    if (6 === q[0] && o.label < _m[1]) {
                                        o.label = _m[1], _m = q;
                                        break;
                                    }
                                    if (_m && o.label < _m[2]) {
                                        o.label = _m[2], o.ops.push(q);
                                        break;
                                    }
                                    _m[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                            }
                            q = j.call(i, o);
                        } catch (i) {
                            q = [
                                6,
                                i
                            ], l = 0;
                        } finally {
                            k = _m = 0;
                        }
                    if (5 & q[0])
                        throw q[1];
                    return {
                        value: q[0] ? q[1] : void 0,
                        done: !0
                    };
                }
            }

            function h(i, j, k, l) {
                if ('a' === k && !l)
                    throw new TypeError('Private accessor was defined without a getter');
                if ('function' == typeof j ? i !== j || !l : !j.has(i))
                    throw new TypeError('Cannot read private member from an object whose class did not declare it');
                return 'm' === k ? l : 'a' === k ? l.call(i) : l ? l.value : j.get(i);
            }

            function h(i, j, k, l, m) {
                if ('m' === l)
                    throw new TypeError('Private method is not writable');
                if ('a' === l && !m)
                    throw new TypeError('Private accessor was defined without a setter');
                if ('function' == typeof j ? i !== j || !m : !j.has(i))
                    throw new TypeError('Cannot write private member to an object whose class did not declare it');
                return 'a' === l ? m.call(i, k) : m ? m.value = k : j.set(i, k), k;
            }! function(h) {
                h[h.CONSENTED = 4000] = 'CONSENTED', h[h.DEVMODE_RESTART = 4010] = 'DEVMODE_RESTART';
            }(f || (f = {}));
            var h = function(i) {
                function j(k, l) {
                    var m = i.call(this, l) || this;
                    return m.name = 'ServerError', m.code = k, m;
                }
                return _n(d, i), d;
            }(Error);

            function i(j, k) {
                if (this._offset = k, j instanceof ArrayBuffer)
                    this._buffer = j, this._view = new DataView(this._buffer);
                else {
                    if (!ArrayBuffer.isView(j))
                        throw new Error('Invalid argument');
                    this._buffer = j.buffer, this._view = new DataView(this._buffer, j.byteOffset, j.byteLength);
                }
            }

            function i(j, k, l) {
                for (var m = '', _n = 0, o = k, p = k + l; o < p; o++) {
                    var q = j.getUint8(o);
                    if (0 != (128 & q))
                        if (192 != (224 & q))
                            if (224 != (240 & q)) {
                                if (240 != (248 & q))
                                    throw new Error('Invalid byte ' + q.toString(16));
                                (_n = (7 & q) << 18 | (63 & j.getUint8(++o)) << 12 | (63 & j.getUint8(++o)) << 6 | (63 & j.getUint8(++o)) << 0) >= 65536 ? (_n -= 65536, m += String.fromCharCode(55296 + (_n >>> 10), 56320 + (1023 & _n))) : m += String.fromCharCode(_n);
                            } else
                                m += String.fromCharCode((15 & q) << 12 | (63 & j.getUint8(++o)) << 6 | (63 & j.getUint8(++o)) << 0);
                    else
                        m += String.fromCharCode((31 & q) << 6 | 63 & j.getUint8(++o));
                    else
                        m += String.fromCharCode(q);
                }
                return m;
            }

            function i(j, k) {
                void 0 === k && (k = 0);
                var l = new _x(j, k),
                    m = l._parse();
                if (l._offset !== j.byteLength)
                    throw new Error(j.byteLength - l._offset + ' trailing bytes');
                return m;
            }
            _x.prototype._array = function(i) {
                for (var j = new Array(i), k = 0; k < i; k++)
                    j[k] = this._parse();
                return j;
            }, _x.prototype._map = function(i) {
                for (var j = {}, k = 0; k < i; k++)
                    j[this._parse()] = this._parse();
                return j;
            }, _x.prototype._str = function(i) {
                var j = _v(this._view, this._offset, i);
                return this._offset += i, j;
            }, _x.prototype._bin = function(i) {
                var j = this._buffer.slice(this._offset, this._offset + i);
                return this._offset += i, j;
            }, _x.prototype._parse = function() {
                var i, j = this._view.getUint8(this._offset++),
                    k = 0,
                    l = 0,
                    m = 0,
                    n = 0;
                if (j < 192)
                    return j < 128 ? j : j < 144 ? this._map(15 & j) : j < 160 ? this._array(15 & j) : this._str(31 & j);
                if (j > 223)
                    return -1 * (255 - j + 1);
                switch (j) {
                    case 192:
                        return null;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 196:
                        return k = this._view.getUint8(this._offset), this._offset += 1, this._bin(k);
                    case 197:
                        return k = this._view.getUint16(this._offset), this._offset += 2, this._bin(k);
                    case 198:
                        return k = this._view.getUint32(this._offset), this._offset += 4, this._bin(k);
                    case 199:
                        if (k = this._view.getUint8(this._offset), l = this._view.getInt8(this._offset + 1), this._offset += 2, -1 === l) {
                            var o = this._view.getUint32(this._offset);
                            return m = this._view.getInt32(this._offset + 4), n = this._view.getUint32(this._offset + 8), this._offset += 12, new Date(1000 * (4294967296 * m + n) + o / 1000000);
                        }
                        return [
                            l,
                            this._bin(k)
                        ];
                    case 200:
                        return k = this._view.getUint16(this._offset), l = this._view.getInt8(this._offset + 2), this._offset += 3, [
                            l,
                            this._bin(k)
                        ];
                    case 201:
                        return k = this._view.getUint32(this._offset), l = this._view.getInt8(this._offset + 4), this._offset += 5, [
                            l,
                            this._bin(k)
                        ];
                    case 202:
                        return i = this._view.getFloat32(this._offset), this._offset += 4, i;
                    case 203:
                        return i = this._view.getFloat64(this._offset), this._offset += 8, i;
                    case 204:
                        return i = this._view.getUint8(this._offset), this._offset += 1, i;
                    case 205:
                        return i = this._view.getUint16(this._offset), this._offset += 2, i;
                    case 206:
                        return i = this._view.getUint32(this._offset), this._offset += 4, i;
                    case 207:
                        return m = this._view.getUint32(this._offset) * Math.pow(2, 32), n = this._view.getUint32(this._offset + 4), this._offset += 8, m + n;
                    case 208:
                        return i = this._view.getInt8(this._offset), this._offset += 1, i;
                    case 209:
                        return i = this._view.getInt16(this._offset), this._offset += 2, i;
                    case 210:
                        return i = this._view.getInt32(this._offset), this._offset += 4, i;
                    case 211:
                        return m = this._view.getInt32(this._offset) * Math.pow(2, 32), n = this._view.getUint32(this._offset + 4), this._offset += 8, m + n;
                    case 212:
                        return l = this._view.getInt8(this._offset), this._offset += 1, 0 === l ? void(this._offset += 1) : [
                            l,
                            this._bin(1)
                        ];
                    case 213:
                        return l = this._view.getInt8(this._offset), this._offset += 1, [
                            l,
                            this._bin(2)
                        ];
                    case 214:
                        return l = this._view.getInt8(this._offset), this._offset += 1, -1 === l ? (i = this._view.getUint32(this._offset), this._offset += 4, new Date(1000 * i)) : [
                            l,
                            this._bin(4)
                        ];
                    case 215:
                        return l = this._view.getInt8(this._offset), this._offset += 1, 0 === l ? (m = this._view.getInt32(this._offset) * Math.pow(2, 32), n = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(m + n)) : -1 === l ? (m = this._view.getUint32(this._offset), n = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1000 * (4294967296 * (3 & m) + n) + (m >>> 2) / 1000000)) : [
                            l,
                            this._bin(8)
                        ];
                    case 216:
                        return l = this._view.getInt8(this._offset), this._offset += 1, [
                            l,
                            this._bin(16)
                        ];
                    case 217:
                        return k = this._view.getUint8(this._offset), this._offset += 1, this._str(k);
                    case 218:
                        return k = this._view.getUint16(this._offset), this._offset += 2, this._str(k);
                    case 219:
                        return k = this._view.getUint32(this._offset), this._offset += 4, this._str(k);
                    case 220:
                        return k = this._view.getUint16(this._offset), this._offset += 2, this._array(k);
                    case 221:
                        return k = this._view.getUint32(this._offset), this._offset += 4, this._array(k);
                    case 222:
                        return k = this._view.getUint16(this._offset), this._offset += 2, this._map(k);
                    case 223:
                        return k = this._view.getUint32(this._offset), this._offset += 4, this._map(k);
                }
                throw new Error('Could not parse');
            };
            var i = 4294967295,
                j = 17179869183;

            function k(l, m, n) {
                for (var o = 0, p = 0, q = n.length; p < q; p++)
                    (o = n.charCodeAt(p)) < 128 ? l.setUint8(m++, o) : o < 2048 ? (l.setUint8(m++, 192 | o >> 6), l.setUint8(m++, 128 | 63 & o)) : o < 55296 || o >= 57344 ? (l.setUint8(m++, 224 | o >> 12), l.setUint8(m++, 128 | o >> 6 & 63), l.setUint8(m++, 128 | 63 & o)) : (p++, o = 65536 + ((1023 & o) << 10 | 1023 & n.charCodeAt(p)), l.setUint8(m++, 240 | o >> 18), l.setUint8(m++, 128 | o >> 12 & 63), l.setUint8(m++, 128 | o >> 6 & 63), l.setUint8(m++, 128 | 63 & o));
            }

            function k(l) {
                for (var m = 0, n = 0, o = 0, p = l.length; o < p; o++)
                    (m = l.charCodeAt(o)) < 128 ? n += 1 : m < 2048 ? n += 2 : m < 55296 || m >= 57344 ? n += 3 : (o++, n += 4);
                return n;
            }

            function k(l, m, n) {
                var o = typeof n,
                    p = 0,
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0,
                    u = 0;
                if ('string' === o) {
                    if ((t = _G(n)) < 32)
                        l.push(160 | t), u = 1;
                    else if (t < 256)
                        l.push(217, t), u = 2;
                    else if (t < 65536)
                        l.push(218, t >> 8, t), u = 3;
                    else {
                        if (!(t < 4294967296))
                            throw new Error('String too long');
                        l.push(219, t >> 24, t >> 16, t >> 8, t), u = 5;
                    }
                    return m.push({
                        _str: n,
                        _length: t,
                        _offset: l.length
                    }), u + t;
                }
                if ('number' === o)
                    return Math.floor(n) === n && isFinite(n) ? n >= 0 ? n < 128 ? (l.push(n), 1) : n < 256 ? (l.push(204, n), 2) : n < 65536 ? (l.push(205, n >> 8, n), 3) : n < 4294967296 ? (l.push(206, n >> 24, n >> 16, n >> 8, n), 5) : (r = n / Math.pow(2, 32) >> 0, s = n >>> 0, l.push(207, r >> 24, r >> 16, r >> 8, r, s >> 24, s >> 16, s >> 8, s), 9) : n >= -32 ? (l.push(n), 1) : n >= -128 ? (l.push(208, n), 2) : n >= -32768 ? (l.push(209, n >> 8, n), 3) : n >= -2147483648 ? (l.push(210, n >> 24, n >> 16, n >> 8, n), 5) : (r = Math.floor(n / Math.pow(2, 32)), s = n >>> 0, l.push(211, r >> 24, r >> 16, r >> 8, r, s >> 24, s >> 16, s >> 8, s), 9) : (l.push(203), m.push({
                        _float: n,
                        _length: 8,
                        _offset: l.length
                    }), 9);
                if ('object' === o) {
                    if (null === n)
                        return l.push(192), 1;
                    if (Array.isArray(n)) {
                        if ((t = n.length) < 16)
                            l.push(144 | t), u = 1;
                        else if (t < 65536)
                            l.push(220, t >> 8, t), u = 3;
                        else {
                            if (!(t < 4294967296))
                                throw new Error('Array too large');
                            l.push(221, t >> 24, t >> 16, t >> 8, t), u = 5;
                        }
                        for (p = 0; p < t; p++)
                            u += k(l, m, n[p]);
                        return u;
                    }
                    if (n instanceof Date) {
                        var v = n.getTime(),
                            w = Math.floor(v / 1000),
                            _x = 1000000 * (v - 1000 * w);
                        return w >= 0 && _x >= 0 && w <= j ? 0 === _x && w <= i ? (l.push(214, 255, w >> 24, w >> 16, w >> 8, w), 6) : (r = w / 4294967296, s = 4294967295 & w, l.push(215, 255, _x >> 22, _x >> 14, _x >> 6, r, s >> 24, s >> 16, s >> 8, s), 10) : (r = Math.floor(w / 4294967296), s = w >>> 0, l.push(199, 12, 255, _x >> 24, _x >> 16, _x >> 8, _x, r >> 24, r >> 16, r >> 8, r, s >> 24, s >> 16, s >> 8, s), 15);
                    }
                    if (n instanceof ArrayBuffer) {
                        if ((t = n.byteLength) < 256)
                            l.push(196, t), u = 2;
                        else if (t < 65536)
                            l.push(197, t >> 8, t), u = 3;
                        else {
                            if (!(t < 4294967296))
                                throw new Error('Buffer too large');
                            l.push(198, t >> 24, t >> 16, t >> 8, t), u = 5;
                        }
                        return m.push({
                            _bin: n,
                            _length: t,
                            _offset: l.length
                        }), u + t;
                    }
                    if ('function' == typeof n.toJSON)
                        return k(l, m, n.toJSON());
                    var _v = [],
                        w = '',
                        x = Object.keys(n);
                    for (p = 0, q = x.length; p < q; p++)
                        void 0 !== n[w = x[p]] && 'function' != typeof n[w] && _v.push(w);
                    if ((t = _v.length) < 16)
                        l.push(128 | t), u = 1;
                    else if (t < 65536)
                        l.push(222, t >> 8, t), u = 3;
                    else {
                        if (!(t < 4294967296))
                            throw new Error('Object too large');
                        l.push(223, t >> 24, t >> 16, t >> 8, t), u = 5;
                    }
                    for (p = 0; p < t; p++)
                        u += k(l, m, w = _v[p]), u += k(l, m, n[w]);
                    return u;
                }
                if ('boolean' === o)
                    return l.push(n ? 195 : 194), 1;
                if ('undefined' === o)
                    return l.push(192), 1;
                if ('function' == typeof n.toJSON)
                    return k(l, m, n.toJSON());
                throw new Error('Could not encode');
            }

            function k(l) {
                var m = [],
                    n = [],
                    o = _G(m, n, l),
                    p = new ArrayBuffer(o),
                    q = new DataView(p),
                    r = 0,
                    s = 0,
                    t = -1;
                n.length > 0 && (t = n[0]._offset);
                for (var u, v = 0, w = 0, x = 0, y = m.length; x < y; x++)
                    if (q.setUint8(s + x, m[x]), x + 1 === t) {
                        if (v = (u = n[r])._length, w = s + t, u._bin)
                            for (var z = new Uint8Array(u._bin), A = 0; A < v; A++)
                                q.setUint8(w + A, z[A]);
                        else
                            u._str ? _F(q, w, u._str) : void 0 !== u._float && q.setFloat64(w, u._float);
                        s += v, n[++r] && (t = n[r]._offset);
                    }
                return p;
            }
            var k, l, m = function() {
                    throw new Error('ws does not work in the browser. Browser clients must use the native WebSocket object');
                },
                n = globalThis.WebSocket || m,
                o = function() {
                    function p(q) {
                        this.events = q;
                    }
                    return a.prototype.send = function(p) {
                        p instanceof ArrayBuffer ? this.ws.send(p) : Array.isArray(p) && this.ws.send(new Uint8Array(p).buffer);
                    }, a.prototype.connect = function(p) {
                        this.ws = new n(p, this.protocols), this.ws.binaryType = 'arraybuffer', this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror;
                    }, a.prototype.close = function(p, q) {
                        this.ws.close(p, q);
                    }, Object.defineProperty(a.prototype, 'isOpen', {
                        get: function() {
                            return this.ws.readyState === n.OPEN;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), a;
                }(),
                p = function() {
                    function q() {
                        this.events = {}, this.transport = new o(this.events);
                    }
                    return a.prototype.send = function(q) {
                        this.transport.send(q);
                    }, a.prototype.connect = function(q) {
                        this.transport.connect(q);
                    }, a.prototype.close = function(q, r) {
                        this.transport.close(q, r);
                    }, Object.defineProperty(a.prototype, 'isOpen', {
                        get: function() {
                            return this.transport.isOpen;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), a;
                }();

            function q(r, s) {
                for (var t = r[s++], u = '', v = 0, w = s, x = s + t; w < x; w++) {
                    var y = r[w];
                    if (0 != (128 & y))
                        if (192 != (224 & y))
                            if (224 != (240 & y)) {
                                if (240 != (248 & y))
                                    throw new Error('Invalid byte ' + y.toString(16));
                                (v = (7 & y) << 18 | (63 & r[++w]) << 12 | (63 & r[++w]) << 6 | (63 & r[++w]) << 0) >= 65536 ? (v -= 65536, u += String.fromCharCode(55296 + (v >>> 10), 56320 + (1023 & v))) : u += String.fromCharCode(v);
                            } else
                                u += String.fromCharCode((15 & y) << 12 | (63 & r[++w]) << 6 | (63 & r[++w]) << 0);
                    else
                        u += String.fromCharCode((31 & y) << 6 | 63 & r[++w]);
                    else
                        u += String.fromCharCode(y);
                }
                return u;
            }

            function q(r) {
                void 0 === r && (r = '');
                for (var s = 0, t = 0, u = 0, v = r.length; u < v; u++)
                    (s = r.charCodeAt(u)) < 128 ? t += 1 : s < 2048 ? t += 2 : s < 55296 || s >= 57344 ? t += 3 : (u++, t += 4);
                return t + 1;
            }
            d.Protocol = void 0, (l = d.Protocol || (d.Protocol = {}))[l.HANDSHAKE = 9] = 'HANDSHAKE', l[l.JOIN_ROOM = 10] = 'JOIN_ROOM', l[l.ERROR = 11] = 'ERROR', l[l.LEAVE_ROOM = 12] = 'LEAVE_ROOM', l[l.ROOM_DATA = 13] = 'ROOM_DATA', l[l.ROOM_STATE = 14] = 'ROOM_STATE', l[l.ROOM_STATE_PATCH = 15] = 'ROOM_STATE_PATCH', l[l.ROOM_DATA_SCHEMA = 16] = 'ROOM_DATA_SCHEMA', l[l.ROOM_DATA_BYTES = 17] = 'ROOM_DATA_BYTES', d.ErrorCode = void 0, (k = d.ErrorCode || (d.ErrorCode = {}))[k.MATCHMAKE_NO_HANDLER = 4210] = 'MATCHMAKE_NO_HANDLER', k[k.MATCHMAKE_INVALID_CRITERIA = 4211] = 'MATCHMAKE_INVALID_CRITERIA', k[k.MATCHMAKE_INVALID_ROOM_ID = 4212] = 'MATCHMAKE_INVALID_ROOM_ID', k[k.MATCHMAKE_UNHANDLED = 4213] = 'MATCHMAKE_UNHANDLED', k[k.MATCHMAKE_EXPIRED = 4214] = 'MATCHMAKE_EXPIRED', k[k.AUTH_FAILED = 4215] = 'AUTH_FAILED', k[k.APPLICATION_ERROR = 4216] = 'APPLICATION_ERROR';
            var q = {};

            function r(s, t) {
                q[s] = t;
            }

            function r(s) {
                var t = q[s];
                if (!t)
                    throw new Error('missing serializer: ' + s);
                return t;
            }
            var r = function() {
                    return {
                        emit: function(s) {
                            for (var t = [], u = 1; u < arguments.length; u++)
                                t[u - 1] = arguments[u];
                            for (var v = this.events[s] || [], w = 0, x = v.length; w < x; w++)
                                v[w].apply(v, t);
                        },
                        events: {},
                        on: function(s, t) {
                            var u, v = this;
                            return (null === (u = this.events[s]) || void 0 === u ? void 0 : u.push(t)) || (this.events[s] = [t]),
                                function() {
                                    var w;
                                    v.events[s] = null === (w = v.events[s]) || void 0 === w ? void 0 : w.filter(function(x) {
                                        return t !== x;
                                    });
                                };
                        }
                    };
                },
                s = function() {
                    function t() {
                        this.handlers = [];
                    }
                    return a.prototype.register = function(t, u) {
                        return this.handlers.push(t), this;
                    }, a.prototype.invoke = function() {
                        for (var t = this, u = [], v = 0; v < arguments.length; v++)
                            u[v] = arguments[v];
                        this.handlers.forEach(function(w) {
                            return w.apply(t, u);
                        });
                    }, a.prototype.invokeAsync = function() {
                        for (var t = this, u = [], v = 0; v < arguments.length; v++)
                            u[v] = arguments[v];
                        return Promise.all(this.handlers.map(function(w) {
                            return w.apply(t, u);
                        }));
                    }, a.prototype.remove = function(t) {
                        var u = this.handlers.indexOf(t);
                        this.handlers[u] = this.handlers[this.handlers.length - 1], this.handlers.pop();
                    }, a.prototype.clear = function() {
                        this.handlers = [];
                    }, a;
                }();

            function t() {
                var u = new s();

                function v(w) {
                    return u.register(w, null === this);
                }
                return d.once = function(v) {
                    var w = function() {
                        for (var x = [], y = 0; y < arguments.length; y++)
                            x[y] = arguments[y];
                        v.apply(this, x), u.remove(w);
                    };
                    u.register(w);
                }, d.remove = function(v) {
                    return u.remove(v);
                }, d.invoke = function() {
                    for (var v = [], w = 0; w < arguments.length; w++)
                        v[w] = arguments[w];
                    return u.invoke.apply(u, v);
                }, d.invokeAsync = function() {
                    for (var v = [], w = 0; w < arguments.length; w++)
                        v[w] = arguments[w];
                    return u.invokeAsync.apply(u, v);
                }, d.clear = function() {
                    return u.clear();
                }, d;
            }

            function t(u) {
                var v = {
                    exports: {}
                };
                return u(v, v.exports), v.exports;
            }
            'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== a || 'undefined' != typeof self && self;
            var t = _J(function(u, v) {
                    ! function(w, x) {
                        x(v);
                    }(0, function(w) {
                        var x = function(y, z) {
                            return x = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(A, B) {
                                A.__proto__ = B;
                            } || function(A, B) {
                                for (var C in B)
                                    Object.prototype.hasOwnProperty.call(B, C) && (A[C] = B[C]);
                            }, x(y, z);
                        };

                        function y(z, A) {
                            if ('function' != typeof A && null !== A)
                                throw new TypeError('Class extends value ' + String(A) + ' is not a constructor or null');

                            function B() {
                                this.constructor = z;
                            }
                            x(z, A), z.prototype = null === A ? Object.create(A) : (e.prototype = A.prototype, new e());
                        }

                        function y(z, A, B, C) {
                            var D, E = arguments.length,
                                F = E < 3 ? A : null === C ? C = Object.getOwnPropertyDescriptor(A, B) : C;
                            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                                F = Reflect.decorate(z, A, B, C);
                            else
                                for (var G = z.length - 1; G >= 0; G--)
                                    (D = z[G]) && (F = (E < 3 ? D(F) : E > 3 ? D(A, B, F) : D(A, B)) || F);
                            return E > 3 && F && Object.defineProperty(A, B, F), F;
                        }

                        function y(z, A, B) {
                            if (B || 2 === arguments.length)
                                for (var C, D = 0, E = A.length; D < E; D++)
                                    !C && D in A || (C || (C = Array.prototype.slice.call(A, 0, D)), C[D] = A[D]);
                            return z.concat(e || Array.prototype.slice.call(A));
                        }
                        var y, z = 255,
                            A = 213;
                        w.OPERATION = void 0, (y = w.OPERATION || (w.OPERATION = {}))[y.ADD = 128] = 'ADD', y[y.REPLACE = 0] = 'REPLACE', y[y.DELETE = 64] = 'DELETE', y[y.DELETE_AND_ADD = 192] = 'DELETE_AND_ADD', y[y.TOUCH = 1] = 'TOUCH', y[y.CLEAR = 10] = 'CLEAR';
                        var B = function() {
                            function C(D, E, F) {
                                this.changed = !1, this.changes = new Map(), this.allChanges = new Set(), this.caches = {}, this.currentCustomOperation = 0, this.ref = D, this.setParent(E, F);
                            }
                            return x.prototype.setParent = function(C, D, E) {
                                var F = this;
                                if (this.indexes || (this.indexes = this.ref instanceof _W ? this.ref._definition.indexes : {}), this.parent = C, this.parentIndex = E, D)
                                    if (this.root = D, this.ref instanceof _W) {
                                        var G = this.ref._definition;
                                        for (var H in G.schema) {
                                            var I = this.ref[H];
                                            if (I && I.$changes) {
                                                var J = G.indexes[H];
                                                I.$changes.setParent(this.ref, D, J);
                                            }
                                        }
                                    } else
                                        'object' == typeof this.ref && this.ref.forEach(function(G, H) {
                                            if (G instanceof _W) {
                                                var I = G.$changes,
                                                    J = F.ref.$changes.indexes[H];
                                                I.setParent(F.ref, F.root, J);
                                            }
                                        });
                            }, x.prototype.operation = function(C) {
                                this.changes.set(--this.currentCustomOperation, C);
                            }, x.prototype.change = function(C, D) {
                                void 0 === D && (D = w.OPERATION.ADD);
                                var E = 'number' == typeof C ? C : this.indexes[C];
                                this.assertValidIndex(E, C);
                                var F = this.changes.get(E);
                                F && F.op !== w.OPERATION.DELETE && F.op !== w.OPERATION.TOUCH || this.changes.set(E, {
                                    op: F && F.op === w.OPERATION.DELETE ? w.OPERATION.DELETE_AND_ADD : D,
                                    index: E
                                }), this.allChanges.add(E), this.changed = !0, this.touchParents();
                            }, x.prototype.touch = function(C) {
                                var D = 'number' == typeof C ? C : this.indexes[C];
                                this.assertValidIndex(D, C), this.changes.has(D) || this.changes.set(D, {
                                    op: w.OPERATION.TOUCH,
                                    index: D
                                }), this.allChanges.add(D), this.touchParents();
                            }, x.prototype.touchParents = function() {
                                this.parent && this.parent.$changes.touch(this.parentIndex);
                            }, x.prototype.getType = function(C) {
                                if (this.ref._definition)
                                    return (x = this.ref._definition).schema[x.fieldsByIndex[C]];
                                var D, E = (D = this.parent._definition).schema[D.fieldsByIndex[this.parentIndex]];
                                return Object.values(E)[0];
                            }, x.prototype.getChildrenFilter = function() {
                                var C = this.parent._definition.childFilters;
                                return C && C[this.parentIndex];
                            }, x.prototype.getValue = function(C) {
                                return this.ref.getByIndex(C);
                            }, x.prototype.delete = function(C) {
                                var D = 'number' == typeof C ? C : this.indexes[C];
                                if (void 0 !== D) {
                                    var E = this.getValue(D);
                                    this.changes.set(D, {
                                        op: w.OPERATION.DELETE,
                                        index: D
                                    }), this.allChanges.delete(D), delete this.caches[D], E && E.$changes && (E.$changes.parent = void 0), this.changed = !0, this.touchParents();
                                } else
                                    console.warn('@colyseus/schema '.concat(this.ref.constructor.name, ': trying to delete non-existing index: ').concat(C, ' (').concat(D, ')'));
                            }, x.prototype.discard = function(C, D) {
                                var E = this;
                                void 0 === C && (C = !1), void 0 === D && (D = !1), this.ref instanceof _W || this.changes.forEach(function(F) {
                                    if (F.op === w.OPERATION.DELETE) {
                                        var G = E.ref.getIndex(F.index);
                                        delete E.indexes[G];
                                    }
                                }), this.changes.clear(), this.changed = C, D && this.allChanges.clear(), this.currentCustomOperation = 0;
                            }, x.prototype.discardAll = function() {
                                var C = this;
                                this.changes.forEach(function(D) {
                                    var E = C.getValue(D.index);
                                    E && E.$changes && E.$changes.discardAll();
                                }), this.discard();
                            }, x.prototype.cache = function(C, D) {
                                this.caches[C] = D;
                            }, x.prototype.clone = function() {
                                return new x(this.ref, this.parent, this.root);
                            }, x.prototype.ensureRefId = function() {
                                void 0 === this.refId && (this.refId = this.root.getNextUniqueId());
                            }, x.prototype.assertValidIndex = function(C, D) {
                                if (void 0 === C)
                                    throw new Error('ChangeTree: missing index for field "'.concat(D, '"'));
                            }, x;
                        }();

                        function C(D, E, F, G) {
                            return D[E] || (D[E] = []), D[E].push(F), null == G || G.forEach(function(H, I) {
                                    return F(H, I);
                                }),
                                function() {
                                    return h(D[E], D[E].indexOf(F));
                                };
                        }

                        function C(D) {
                            var E = this,
                                F = 'string' != typeof this.$changes.getType();
                            this.$items.forEach(function(G, H) {
                                D.push({
                                    refId: E.$changes.refId,
                                    op: w.OPERATION.DELETE,
                                    field: H,
                                    value: void 0,
                                    previousValue: G
                                }), F && E.$changes.root.removeRef(G.$changes.refId);
                            });
                        }

                        function C(D, E) {
                            if (-1 === E || E >= D.length)
                                return !1;
                            for (var F = D.length - 1, G = E; G < F; G++)
                                D[G] = D[G + 1];
                            return D.length = F, !0;
                        }
                        var C = function(D, E) {
                            var F = D.toString(),
                                G = E.toString();
                            return F < G ? -1 : F > G ? 1 : 0;
                        };

                        function D(E) {
                            return E.$proxy = !0, E = new Proxy(E, {
                                get: function(F, G) {
                                    return 'symbol' == typeof G || isNaN(G) ? F[G] : F.at(G);
                                },
                                set: function(F, G, H) {
                                    if ('symbol' == typeof G || isNaN(G))
                                        F[G] = H;
                                    else {
                                        var I = Array.from(F.$items.keys()),
                                            J = parseInt(I[G] || G);
                                        null == H ? F.deleteAt(J) : F.setAt(J, H);
                                    }
                                    return !0;
                                },
                                deleteProperty: function(F, G) {
                                    return 'number' == typeof G ? F.deleteAt(G) : delete F[G], !0;
                                }
                            });
                        }
                        var D = function() {
                            function E() {
                                for (var F = [], G = 0; G < arguments.length; G++)
                                    F[G] = arguments[G];
                                this.$changes = new B(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, this.push.apply(this, F);
                            }
                            return x.prototype.onAdd = function(E, F) {
                                return void 0 === F && (F = !0), _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.ADD, E, F ? this.$items : void 0);
                            }, x.prototype.onRemove = function(E) {
                                return _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.DELETE, E);
                            }, x.prototype.onChange = function(E) {
                                return _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.REPLACE, E);
                            }, x.is = function(E) {
                                return Array.isArray(E) || void 0 !== E.array;
                            }, Object.defineProperty(x.prototype, 'length', {
                                get: function() {
                                    return this.$items.size;
                                },
                                set: function(E) {
                                    0 === E ? this.clear() : this.splice(E, this.length - E);
                                },
                                enumerable: !1,
                                configurable: !0
                            }), x.prototype.push = function() {
                                for (var E, F = this, G = [], H = 0; H < arguments.length; H++)
                                    G[H] = arguments[H];
                                return G.forEach(function(I) {
                                    E = F.$refId++, F.setAt(E, I);
                                }), E;
                            }, x.prototype.pop = function() {
                                var E = Array.from(this.$indexes.values()).pop();
                                if (void 0 !== E) {
                                    this.$changes.delete(E), this.$indexes.delete(E);
                                    var F = this.$items.get(E);
                                    return this.$items.delete(E), F;
                                }
                            }, x.prototype.at = function(E) {
                                var F = Array.from(this.$items.keys())[E];
                                return this.$items.get(F);
                            }, x.prototype.setAt = function(E, F) {
                                var G, H;
                                void 0 !== F.$changes && F.$changes.setParent(this, this.$changes.root, E);
                                var I = null !== (H = null === (G = this.$changes.indexes[E]) || void 0 === G ? void 0 : G.op) && void 0 !== H ? H : w.OPERATION.ADD;
                                this.$changes.indexes[E] = E, this.$indexes.set(E, E), this.$items.set(E, F), this.$changes.change(E, I);
                            }, x.prototype.deleteAt = function(E) {
                                var F = Array.from(this.$items.keys())[E];
                                return void 0 !== F && this.$deleteAt(F);
                            }, x.prototype.$deleteAt = function(E) {
                                return this.$changes.delete(E), this.$indexes.delete(E), this.$items.delete(E);
                            }, x.prototype.clear = function(E) {
                                this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), E && _S.call(this, E), this.$items.clear(), this.$changes.operation({
                                    index: 0,
                                    op: w.OPERATION.CLEAR
                                }), this.$changes.touchParents();
                            }, x.prototype.concat = function() {
                                for (var E, F = [], G = 0; G < arguments.length; G++)
                                    F[G] = arguments[G];
                                return new(x.bind.apply(x, _I([void 0], (E = Array.from(this.$items.values())).concat.apply(E, F), !1)))();
                            }, x.prototype.join = function(E) {
                                return Array.from(this.$items.values()).join(E);
                            }, x.prototype.reverse = function() {
                                var E = this,
                                    F = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).reverse().forEach(function(G, H) {
                                    E.setAt(F[H], G);
                                }), this;
                            }, x.prototype.shift = function() {
                                var E = Array.from(this.$items.keys()).shift();
                                if (void 0 !== E) {
                                    var F = this.$items.get(E);
                                    return this.$deleteAt(E), F;
                                }
                            }, x.prototype.slice = function(E, F) {
                                var G = new x();
                                return G.push.apply(G, Array.from(this.$items.values()).slice(E, F)), G;
                            }, x.prototype.sort = function(E) {
                                var F = this;
                                void 0 === E && (E = C);
                                var G = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).sort(E).forEach(function(H, I) {
                                    F.setAt(G[I], H);
                                }), this;
                            }, x.prototype.splice = function(E, F) {
                                void 0 === F && (F = this.length - E);
                                for (var G = Array.from(this.$items.keys()), H = [], _I = E; _I < E + F; _I++)
                                    H.push(this.$items.get(G[_I])), this.$deleteAt(G[_I]);
                                return H;
                            }, x.prototype.unshift = function() {
                                for (var E = this, F = [], G = 0; G < arguments.length; G++)
                                    F[G] = arguments[G];
                                var H = this.length,
                                    I = F.length,
                                    J = Array.from(this.$items.values());
                                return F.forEach(function(K, L) {
                                    E.setAt(L, K);
                                }), J.forEach(function(K, L) {
                                    E.setAt(I + L, K);
                                }), H + I;
                            }, x.prototype.indexOf = function(E, F) {
                                return Array.from(this.$items.values()).indexOf(E, F);
                            }, x.prototype.lastIndexOf = function(E, F) {
                                return void 0 === F && (F = this.length - 1), Array.from(this.$items.values()).lastIndexOf(E, F);
                            }, x.prototype.every = function(E, F) {
                                return Array.from(this.$items.values()).every(E, F);
                            }, x.prototype.some = function(E, F) {
                                return Array.from(this.$items.values()).some(E, F);
                            }, x.prototype.forEach = function(E, F) {
                                Array.from(this.$items.values()).forEach(E, F);
                            }, x.prototype.map = function(E, F) {
                                return Array.from(this.$items.values()).map(E, F);
                            }, x.prototype.filter = function(E, F) {
                                return Array.from(this.$items.values()).filter(E, F);
                            }, x.prototype.reduce = function(E, F) {
                                return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
                            }, x.prototype.reduceRight = function(E, F) {
                                return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
                            }, x.prototype.find = function(E, F) {
                                return Array.from(this.$items.values()).find(E, F);
                            }, x.prototype.findIndex = function(E, F) {
                                return Array.from(this.$items.values()).findIndex(E, F);
                            }, x.prototype.fill = function(E, F, G) {
                                throw new Error('ArraySchema#fill() not implemented');
                            }, x.prototype.copyWithin = function(E, F, G) {
                                throw new Error('ArraySchema#copyWithin() not implemented');
                            }, x.prototype.toString = function() {
                                return this.$items.toString();
                            }, x.prototype.toLocaleString = function() {
                                return this.$items.toLocaleString();
                            }, x.prototype[Symbol.iterator] = function() {
                                return Array.from(this.$items.values())[Symbol.iterator]();
                            }, x.prototype.entries = function() {
                                return this.$items.entries();
                            }, x.prototype.keys = function() {
                                return this.$items.keys();
                            }, x.prototype.values = function() {
                                return this.$items.values();
                            }, x.prototype.includes = function(E, F) {
                                return Array.from(this.$items.values()).includes(E, F);
                            }, x.prototype.flatMap = function(E, F) {
                                throw new Error('ArraySchema#flatMap() is not supported.');
                            }, x.prototype.flat = function(E) {
                                throw new Error('ArraySchema#flat() is not supported.');
                            }, x.prototype.findLast = function() {
                                var E = Array.from(this.$items.values());
                                return E.findLast.apply(E, arguments);
                            }, x.prototype.findLastIndex = function() {
                                var E = Array.from(this.$items.values());
                                return E.findLastIndex.apply(E, arguments);
                            }, x.prototype.setIndex = function(E, F) {
                                this.$indexes.set(E, F);
                            }, x.prototype.getIndex = function(E) {
                                return this.$indexes.get(E);
                            }, x.prototype.getByIndex = function(E) {
                                return this.$items.get(this.$indexes.get(E));
                            }, x.prototype.deleteByIndex = function(E) {
                                var F = this.$indexes.get(E);
                                this.$items.delete(F), this.$indexes.delete(E);
                            }, x.prototype.toArray = function() {
                                return Array.from(this.$items.values());
                            }, x.prototype.toJSON = function() {
                                return this.toArray().map(function(E) {
                                    return 'function' == typeof E.toJSON ? E.toJSON() : E;
                                });
                            }, x.prototype.clone = function(E) {
                                return E ? new(x.bind.apply(x, _I([void 0], Array.from(this.$items.values()), !1)))() : new(x.bind.apply(x, _I([void 0], this.map(function(F) {
                                    return F.$changes ? F.clone() : F;
                                }), !1)))();
                            }, x;
                        }();

                        function E(F) {
                            return F.$proxy = !0, F = new Proxy(F, {
                                get: function(G, H) {
                                    return 'symbol' != typeof H && void 0 === G[H] ? G.get(H) : G[H];
                                },
                                set: function(G, H, I) {
                                    return 'symbol' != typeof H && -1 === H.indexOf('$') && 'onAdd' !== H && 'onRemove' !== H && 'onChange' !== H ? G.set(H, I) : G[H] = I, !0;
                                },
                                deleteProperty: function(G, H) {
                                    return G.delete(H), !0;
                                }
                            });
                        }
                        var E = function() {
                                function F(G) {
                                    var H = this;
                                    if (this.$changes = new B(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, G)
                                        if (G instanceof Map || G instanceof F)
                                            G.forEach(function(I, J) {
                                                return H.set(J, I);
                                            });
                                        else
                                            for (var I in G)
                                                this.set(I, G[I]);
                                }
                                return x.prototype.onAdd = function(F, G) {
                                    return void 0 === G && (G = !0), _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.ADD, F, G ? this.$items : void 0);
                                }, x.prototype.onRemove = function(F) {
                                    return _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.DELETE, F);
                                }, x.prototype.onChange = function(F) {
                                    return _R(this.$callbacks || (this.$callbacks = []), w.OPERATION.REPLACE, F);
                                }, x.is = function(F) {
                                    return void 0 !== F.map;
                                }, x.prototype[Symbol.iterator] = function() {
                                    return this.$items[Symbol.iterator]();
                                }, Object.defineProperty(x.prototype, Symbol.toStringTag, {
                                    get: function() {
                                        return this.$items[Symbol.toStringTag];
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), x.prototype.set = function(F, G) {
                                    if (null == G)
                                        throw new Error('MapSchema#set(\''.concat(F, '\', ').concat(G, '): trying to set ').concat(G, ' value on \'').concat(F, '\'.'));
                                    var H = void 0 !== this.$changes.indexes[F],
                                        _I = H ? this.$changes.indexes[F] : this.$refId++,
                                        J = H ? w.OPERATION.REPLACE : w.OPERATION.ADD,
                                        K = void 0 !== G.$changes;
                                    return K && G.$changes.setParent(this, this.$changes.root, _I), H ? K && this.$items.get(F) !== G && (J = w.OPERATION.ADD) : (this.$changes.indexes[F] = _I, this.$indexes.set(_I, F)), this.$items.set(F, G), this.$changes.change(F, J), this;
                                }, x.prototype.get = function(F) {
                                    return this.$items.get(F);
                                }, x.prototype.delete = function(F) {
                                    return this.$changes.delete(F), this.$items.delete(F);
                                }, x.prototype.clear = function(F) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), F && _S.call(this, F), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: w.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, x.prototype.has = function(F) {
                                    return this.$items.has(F);
                                }, x.prototype.forEach = function(F) {
                                    this.$items.forEach(F);
                                }, x.prototype.entries = function() {
                                    return this.$items.entries();
                                }, x.prototype.keys = function() {
                                    return this.$items.keys();
                                }, x.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(x.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), x.prototype.setIndex = function(F, G) {
                                    this.$indexes.set(F, G);
                                }, x.prototype.getIndex = function(F) {
                                    return this.$indexes.get(F);
                                }, x.prototype.getByIndex = function(F) {
                                    return this.$items.get(this.$indexes.get(F));
                                }, x.prototype.deleteByIndex = function(F) {
                                    var G = this.$indexes.get(F);
                                    this.$items.delete(G), this.$indexes.delete(F);
                                }, x.prototype.toJSON = function() {
                                    var F = {};
                                    return this.forEach(function(G, H) {
                                        F[H] = 'function' == typeof G.toJSON ? G.toJSON() : G;
                                    }), F;
                                }, x.prototype.clone = function(F) {
                                    var G;
                                    return F ? G = Object.assign(new x(), this) : (G = new x(), this.forEach(function(H, I) {
                                        H.$changes ? G.set(I, H.clone()) : G.set(I, H);
                                    })), G;
                                }, x;
                            }(),
                            _F = {};

                        function _G(H, I) {
                            _F[H] = I;
                        }

                        function _G(H) {
                            return _F[H];
                        }
                        var G = function() {
                            function H() {
                                this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {};
                            }
                            return w.create = function(H) {
                                var I = new w();
                                return I.schema = Object.assign({}, H && H.schema || {}), I.indexes = Object.assign({}, H && H.indexes || {}), I.fieldsByIndex = Object.assign({}, H && H.fieldsByIndex || {}), I.descriptors = Object.assign({}, H && H.descriptors || {}), I.deprecated = Object.assign({}, H && H.deprecated || {}), I;
                            }, w.prototype.addField = function(H, I) {
                                var J = this.getNextFieldIndex();
                                this.fieldsByIndex[J] = H, this.indexes[H] = J, this.schema[H] = Array.isArray(I) ? {
                                    array: I[0]
                                } : I;
                            }, w.prototype.hasField = function(H) {
                                return void 0 !== this.indexes[H];
                            }, w.prototype.addFilter = function(H, I) {
                                return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[H]] = I, this.indexesWithFilters.push(this.indexes[H]), !0;
                            }, w.prototype.addChildrenFilter = function(H, I) {
                                var J = this.indexes[H],
                                    K = this.schema[H];
                                if (_mb(Object.keys(K)[0]))
                                    return this.childFilters || (this.childFilters = {}), this.childFilters[J] = I, !0;
                                console.warn('@filterChildren: field \''.concat(H, '\' can\'t have children. Ignoring filter.'));
                            }, w.prototype.getChildrenFilter = function(H) {
                                return this.childFilters && this.childFilters[this.indexes[H]];
                            }, w.prototype.getNextFieldIndex = function() {
                                return Object.keys(this.schema || {}).length;
                            }, w;
                        }();

                        function H(I) {
                            return I._context && I._context.useFilters;
                        }
                        var H = function() {
                                function I() {
                                    this.types = {}, this.schemas = new Map(), this.useFilters = !1;
                                }
                                return w.prototype.has = function(I) {
                                    return this.schemas.has(I);
                                }, w.prototype.get = function(I) {
                                    return this.types[I];
                                }, w.prototype.add = function(I, J) {
                                    void 0 === J && (J = this.schemas.size), I._definition = G.create(I._definition), I._typeid = J, this.types[J] = I, this.schemas.set(I, J);
                                }, w.create = function(I) {
                                    return void 0 === I && (I = {}),
                                        function(J) {
                                            return I.context || (I.context = new w()), n(J, I);
                                        };
                                }, w;
                            }(),
                            I = new H();

                        function J(K, L) {
                            return void 0 === L && (L = {}),
                                function(M, N) {
                                    var O = L.context || I,
                                        P = M.constructor;
                                    if (P._context = O, !K)
                                        throw new Error(''.concat(P.name, ': @type() reference provided for "').concat(N, '" is undefined. Make sure you don\'t have any circular dependencies.'));
                                    O.has(P) || O.add(P);
                                    var Q = P._definition;
                                    if (Q.addField(N, K), Q.descriptors[N]) {
                                        if (Q.deprecated[N])
                                            return;
                                        try {
                                            throw new Error('@colyseus/schema: Duplicate \''.concat(N, '\' definition on \'').concat(P.name, '\'.\nCheck @type() annotation'));
                                        } catch (K) {
                                            var R = K.stack.split('\n')[4].trim();
                                            throw new Error(''.concat(K.message, ' ').concat(R));
                                        }
                                    }
                                    var _R = D.is(K),
                                        _S = !_R && E.is(K);
                                    if ('string' != typeof K && !_W.is(K)) {
                                        var T = Object.values(K)[0];
                                        'string' == typeof T || O.has(T) || O.add(T);
                                    }
                                    if (L.manual)
                                        Q.descriptors[N] = {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        };
                                    else {
                                        var T = '_'.concat(N);
                                        Q.descriptors[T] = {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !0
                                        }, Q.descriptors[N] = {
                                            get: function() {
                                                return this[T];
                                            },
                                            set: function(U) {
                                                U !== this[T] && (null != U ? (!_R || U instanceof D || (U = new(D.bind.apply(D, _O([void 0], U, !1)))()), !_S || U instanceof E || (U = new E(U)), void 0 === U.$proxy && (_S ? U = i(U) : _R && (U = _gb(U))), this.$changes.change(N), U.$changes && U.$changes.setParent(this, this.$changes.root, this._definition.indexes[N])) : this[T] && this.$changes.delete(N), this[T] = U);
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        };
                                    }
                                };
                        }

                        function J(K) {
                            return function(L, M) {
                                var N = L.constructor;
                                N._definition.addFilter(M, K) && (N._context.useFilters = !0);
                            };
                        }

                        function J(K) {
                            return function(L, M) {
                                var N = L.constructor;
                                N._definition.addChildrenFilter(M, K) && (N._context.useFilters = !0);
                            };
                        }

                        function J(K) {
                            return void 0 === K && (K = !0),
                                function(L, M) {
                                    var N = L.constructor._definition;
                                    N.deprecated[M] = !0, K && (N.descriptors[M] = {
                                        get: function() {
                                            throw new Error(''.concat(M, ' is deprecated.'));
                                        },
                                        set: function(O) {},
                                        enumerable: !1,
                                        configurable: !0
                                    });
                                };
                        }

                        function J(K, L, M) {
                            for (var N in (void 0 === M && (M = {}), M.context || (M.context = K._context || M.context || I), L))
                                n(L[N], M)(K.prototype, N);
                            return K;
                        }

                        function J(K) {
                            for (var L = 0, M = 0, N = 0, _O = K.length; N < _O; N++)
                                (L = K.charCodeAt(N)) < 128 ? M += 1 : L < 2048 ? M += 2 : L < 55296 || L >= 57344 ? M += 3 : (N++, M += 4);
                            return M;
                        }

                        function J(K, L, M) {
                            for (var N = 0, O = 0, P = M.length; O < P; O++)
                                (N = M.charCodeAt(O)) < 128 ? K[L++] = N : N < 2048 ? (K[L++] = 192 | N >> 6, K[L++] = 128 | 63 & N) : N < 55296 || N >= 57344 ? (K[L++] = 224 | N >> 12, K[L++] = 128 | N >> 6 & 63, K[L++] = 128 | 63 & N) : (O++, N = 65536 + ((1023 & N) << 10 | 1023 & M.charCodeAt(O)), K[L++] = 240 | N >> 18, K[L++] = 128 | N >> 12 & 63, K[L++] = 128 | N >> 6 & 63, K[L++] = 128 | 63 & N);
                        }

                        function J(K, L) {
                            K.push(255 & L);
                        }

                        function J(K, L) {
                            K.push(255 & L);
                        }

                        function J(K, L) {
                            K.push(255 & L), K.push(L >> 8 & 255);
                        }

                        function J(K, L) {
                            K.push(255 & L), K.push(L >> 8 & 255);
                        }

                        function _J(K, L) {
                            K.push(255 & L), K.push(L >> 8 & 255), K.push(L >> 16 & 255), K.push(L >> 24 & 255);
                        }

                        function J(K, L) {
                            var M = L >> 24,
                                N = L >> 16,
                                O = L >> 8,
                                P = L;
                            K.push(255 & P), K.push(255 & O), K.push(255 & N), K.push(255 & M);
                        }

                        function J(K, L) {
                            var M = Math.floor(L / Math.pow(2, 32));
                            t(K, L >>> 0), t(K, M);
                        }

                        function J(K, L) {
                            var M = L / Math.pow(2, 32) >> 0;
                            t(K, L >>> 0), t(K, M);
                        }

                        function J(K, L) {
                            _M(K, L);
                        }

                        function J(K, L) {
                            _M(K, L);
                        }
                        var J = new Int32Array(2),
                            K = new Float32Array(J.buffer),
                            L = new Float64Array(J.buffer);

                        function _M(N, O) {
                            K[0] = O, _fb(N, J[0]);
                        }

                        function _M(N, O) {
                            L[0] = O, _fb(N, J[0]), _fb(N, J[1]);
                        }

                        function M(N, O) {
                            return r(N, O ? 1 : 0);
                        }

                        function M(N, O) {
                            O || (O = '');
                            var P = q(O),
                                Q = 0;
                            if (P < 32)
                                N.push(160 | P), Q = 1;
                            else if (P < 256)
                                N.push(217), r(N, P), Q = 2;
                            else if (P < 65536)
                                N.push(218), _ob(N, P), Q = 3;
                            else {
                                if (!(P < 4294967296))
                                    throw new Error('String too long');
                                N.push(219), t(N, P), Q = 5;
                            }
                            return _sb(N, N.length, O), Q + P;
                        }

                        function M(N, O) {
                            return isNaN(O) ? M(N, 0) : isFinite(O) ? O !== (0 | O) ? (N.push(203), _A(N, O), 9) : O >= 0 ? O < 128 ? (r(N, O), 1) : O < 256 ? (N.push(204), r(N, O), 2) : O < 65536 ? (N.push(205), _ob(N, O), 3) : O < 4294967296 ? (N.push(206), t(N, O), 5) : (N.push(207), _v(N, O), 9) : O >= -32 ? (N.push(224 | O + 32), 1) : O >= -128 ? (N.push(208), _tb(N, O), 2) : O >= -32768 ? (N.push(209), s(N, O), 3) : O >= -2147483648 ? (N.push(210), _fb(N, O), 5) : (N.push(211), _u(N, O), 9) : M(N, O > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                        }
                        var M = Object.freeze({
                            __proto__: null,
                            utf8Write: _sb,
                            int8: _tb,
                            uint8: r,
                            int16: s,
                            uint16: _ob,
                            int32: _fb,
                            uint32: t,
                            int64: _u,
                            uint64: _v,
                            float32: _v,
                            float64: _v,
                            writeFloat32: _z,
                            writeFloat64: _A,
                            boolean: _B,
                            string: _C,
                            number: _D
                        });

                        function N(O, P, Q) {
                            for (var R = '', S = 0, T = P, U = P + Q; T < U; T++) {
                                var V = O[T];
                                0 != (128 & V) ? 192 != (224 & V) ? 224 != (240 & V) ? 240 != (248 & V) ? console.error('Invalid byte ' + V.toString(16)) : (S = (7 & V) << 18 | (63 & O[++T]) << 12 | (63 & O[++T]) << 6 | (63 & O[++T]) << 0) >= 65536 ? (S -= 65536, R += String.fromCharCode(55296 + (S >>> 10), 56320 + (1023 & S))) : R += String.fromCharCode(S) : R += String.fromCharCode((15 & V) << 12 | (63 & O[++T]) << 6 | (63 & O[++T]) << 0) : R += String.fromCharCode((31 & V) << 6 | 63 & O[++T]) : R += String.fromCharCode(V);
                            }
                            return R;
                        }

                        function N(O, P) {
                            return _N(O, P) << 24 >> 24;
                        }

                        function _N(O, P) {
                            return O[P.offset++];
                        }

                        function N(O, P) {
                            return _N(O, P) << 16 >> 16;
                        }

                        function _N(O, P) {
                            return O[P.offset++] | O[P.offset++] << 8;
                        }

                        function N(O, P) {
                            return O[P.offset++] | O[P.offset++] << 8 | O[P.offset++] << 16 | O[P.offset++] << 24;
                        }

                        function N(O, P) {
                            return _I(O, P) >>> 0;
                        }

                        function N(O, P) {
                            return _Q(O, P);
                        }

                        function N(O, P) {
                            return _Q(O, P);
                        }

                        function N(O, P) {
                            var Q = _I(O, P);
                            return _I(O, P) * Math.pow(2, 32) + Q;
                        }

                        function N(O, P) {
                            var Q = _I(O, P);
                            return _I(O, P) * Math.pow(2, 32) + Q;
                        }
                        var N = new Int32Array(2),
                            O = new Float32Array(N.buffer),
                            P = new Float64Array(N.buffer);

                        function _Q(R, S) {
                            return N[0] = _I(R, S), O[0];
                        }

                        function _Q(R, S) {
                            return N[0] = _I(R, S), N[1] = _I(R, S), P[0];
                        }

                        function Q(R, S) {
                            return _H(R, S) > 0;
                        }

                        function Q(R, S) {
                            var T, U = R[S.offset++];
                            U < 192 ? T = 31 & U : 217 === U ? T = _H(R, S) : 218 === U ? T = _I(R, S) : 219 === U && (T = _I(R, S));
                            var V = _F(R, S.offset, T);
                            return S.offset += T, V;
                        }

                        function Q(R, S) {
                            var T = R[S.offset];
                            return T < 192 && T > 160 || 217 === T || 218 === T || 219 === T;
                        }

                        function Q(R, S) {
                            var T = R[S.offset++];
                            return T < 128 ? T : 202 === T ? ht(R, S) : 203 === T ? ut(R, S) : 204 === T ? _H(R, S) : 205 === T ? _I(R, S) : 206 === T ? _I(R, S) : 207 === T ? _L(R, S) : 208 === T ? _G(R, S) : 209 === T ? _I(R, S) : 210 === T ? _I(R, S) : 211 === T ? _K(R, S) : T > 223 ? -1 * (255 - T + 1) : void 0;
                        }

                        function Q(R, S) {
                            var T = R[S.offset];
                            return T < 128 || T >= 202 && T <= 211;
                        }

                        function Q(R, S) {
                            return R[S.offset] < 160;
                        }

                        function Q(R, S) {
                            return R[S.offset - 1] === z && (R[S.offset] < 128 || R[S.offset] >= 202 && R[S.offset] <= 211);
                        }
                        var Q = Object.freeze({
                                __proto__: null,
                                int8: _G,
                                uint8: _H,
                                int16: _I,
                                uint16: _I,
                                int32: _I,
                                uint32: _I,
                                float32: _I,
                                float64: _J,
                                int64: _K,
                                uint64: _L,
                                readFloat32: ht,
                                readFloat64: ut,
                                boolean: dt,
                                string: lt,
                                stringCheck: pt,
                                number: vt,
                                numberCheck: yt,
                                arrayCheck: gt,
                                switchStructureCheck: mt
                            }),
                            R = function() {
                                function S(T) {
                                    var U = this;
                                    this.$changes = new B(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, T && T.forEach(function(V) {
                                        return U.add(V);
                                    });
                                }
                                return x.prototype.onAdd = function(S, T) {
                                    return void 0 === T && (T = !0), _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.ADD, S, T ? this.$items : void 0);
                                }, x.prototype.onRemove = function(S) {
                                    return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.DELETE, S);
                                }, x.prototype.onChange = function(S) {
                                    return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.REPLACE, S);
                                }, x.is = function(S) {
                                    return void 0 !== S.collection;
                                }, x.prototype.add = function(S) {
                                    var T = this.$refId++;
                                    return void 0 !== S.$changes && S.$changes.setParent(this, this.$changes.root, T), this.$changes.indexes[T] = T, this.$indexes.set(T, T), this.$items.set(T, S), this.$changes.change(T), T;
                                }, x.prototype.at = function(S) {
                                    var T = Array.from(this.$items.keys())[S];
                                    return this.$items.get(T);
                                }, x.prototype.entries = function() {
                                    return this.$items.entries();
                                }, x.prototype.delete = function(S) {
                                    for (var T, U, V = this.$items.entries();
                                        (U = V.next()) && !U.done;)
                                        if (S === U.value[1]) {
                                            T = U.value[0];
                                            break;
                                        }
                                    return void 0 !== T && (this.$changes.delete(T), this.$indexes.delete(T), this.$items.delete(T));
                                }, x.prototype.clear = function(S) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), S && _db.call(this, S), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: w.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, x.prototype.has = function(S) {
                                    return Array.from(this.$items.values()).some(function(T) {
                                        return T === S;
                                    });
                                }, x.prototype.forEach = function(S) {
                                    var T = this;
                                    this.$items.forEach(function(U, V, W) {
                                        return S(U, V, T);
                                    });
                                }, x.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(x.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), x.prototype.setIndex = function(S, T) {
                                    this.$indexes.set(S, T);
                                }, x.prototype.getIndex = function(S) {
                                    return this.$indexes.get(S);
                                }, x.prototype.getByIndex = function(S) {
                                    return this.$items.get(this.$indexes.get(S));
                                }, x.prototype.deleteByIndex = function(S) {
                                    var T = this.$indexes.get(S);
                                    this.$items.delete(T), this.$indexes.delete(S);
                                }, x.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, x.prototype.toJSON = function() {
                                    var S = [];
                                    return this.forEach(function(T, U) {
                                        S.push('function' == typeof T.toJSON ? T.toJSON() : T);
                                    }), S;
                                }, x.prototype.clone = function(S) {
                                    var T;
                                    return S ? T = Object.assign(new x(), this) : (T = new x(), this.forEach(function(U) {
                                        U.$changes ? T.add(U.clone()) : T.add(U);
                                    })), T;
                                }, x;
                            }(),
                            S = function() {
                                function T(U) {
                                    var V = this;
                                    this.$changes = new B(this), this.$items = new Map(), this.$indexes = new Map(), this.$refId = 0, U && U.forEach(function(W) {
                                        return V.add(W);
                                    });
                                }
                                return x.prototype.onAdd = function(T, U) {
                                    return void 0 === U && (U = !0), _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.ADD, T, U ? this.$items : void 0);
                                }, x.prototype.onRemove = function(T) {
                                    return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.DELETE, T);
                                }, x.prototype.onChange = function(T) {
                                    return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.REPLACE, T);
                                }, x.is = function(T) {
                                    return void 0 !== T.set;
                                }, x.prototype.add = function(T) {
                                    var U, V;
                                    if (this.has(T))
                                        return !1;
                                    var W = this.$refId++;
                                    void 0 !== T.$changes && T.$changes.setParent(this, this.$changes.root, W);
                                    var X = null !== (V = null === (U = this.$changes.indexes[W]) || void 0 === U ? void 0 : U.op) && void 0 !== V ? V : w.OPERATION.ADD;
                                    return this.$changes.indexes[W] = W, this.$indexes.set(W, W), this.$items.set(W, T), this.$changes.change(W, X), W;
                                }, x.prototype.entries = function() {
                                    return this.$items.entries();
                                }, x.prototype.delete = function(T) {
                                    for (var U, V, W = this.$items.entries();
                                        (V = W.next()) && !V.done;)
                                        if (T === V.value[1]) {
                                            U = V.value[0];
                                            break;
                                        }
                                    return void 0 !== U && (this.$changes.delete(U), this.$indexes.delete(U), this.$items.delete(U));
                                }, x.prototype.clear = function(T) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), T && _db.call(this, T), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: w.OPERATION.CLEAR
                                    }), this.$changes.touchParents();
                                }, x.prototype.has = function(T) {
                                    for (var U, V = this.$items.values(), W = !1;
                                        (U = V.next()) && !U.done;)
                                        if (T === U.value) {
                                            W = !0;
                                            break;
                                        }
                                    return W;
                                }, x.prototype.forEach = function(T) {
                                    var U = this;
                                    this.$items.forEach(function(V, W, X) {
                                        return T(V, W, U);
                                    });
                                }, x.prototype.values = function() {
                                    return this.$items.values();
                                }, Object.defineProperty(x.prototype, 'size', {
                                    get: function() {
                                        return this.$items.size;
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), x.prototype.setIndex = function(T, U) {
                                    this.$indexes.set(T, U);
                                }, x.prototype.getIndex = function(T) {
                                    return this.$indexes.get(T);
                                }, x.prototype.getByIndex = function(T) {
                                    return this.$items.get(this.$indexes.get(T));
                                }, x.prototype.deleteByIndex = function(T) {
                                    var U = this.$indexes.get(T);
                                    this.$items.delete(U), this.$indexes.delete(T);
                                }, x.prototype.toArray = function() {
                                    return Array.from(this.$items.values());
                                }, x.prototype.toJSON = function() {
                                    var T = [];
                                    return this.forEach(function(U, V) {
                                        T.push('function' == typeof U.toJSON ? U.toJSON() : U);
                                    }), T;
                                }, x.prototype.clone = function(T) {
                                    var U;
                                    return T ? U = Object.assign(new x(), this) : (U = new x(), this.forEach(function(V) {
                                        V.$changes ? U.add(V.clone()) : U.add(V);
                                    })), U;
                                }, x;
                            }(),
                            T = function() {
                                function U() {
                                    this.refIds = new WeakSet(), this.containerIndexes = new WeakMap();
                                }
                                return w.prototype.addRefId = function(U) {
                                    this.refIds.has(U) || (this.refIds.add(U), this.containerIndexes.set(U, new Set()));
                                }, w.get = function(U) {
                                    return void 0 === U.$filterState && (U.$filterState = new w()), U.$filterState;
                                }, w;
                            }(),
                            U = function() {
                                function V() {
                                    this.refs = new Map(), this.refCounts = {}, this.deletedRefs = new Set(), this.nextUniqueId = 0;
                                }
                                return w.prototype.getNextUniqueId = function() {
                                    return this.nextUniqueId++;
                                }, w.prototype.addRef = function(V, W, X) {
                                    void 0 === X && (X = !0), this.refs.set(V, W), X && (this.refCounts[V] = (this.refCounts[V] || 0) + 1);
                                }, w.prototype.removeRef = function(V) {
                                    this.refCounts[V] = this.refCounts[V] - 1, this.deletedRefs.add(V);
                                }, w.prototype.clearRefs = function() {
                                    this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {};
                                }, w.prototype.garbageCollectDeletedRefs = function() {
                                    var V = this;
                                    this.deletedRefs.forEach(function(W) {
                                        if (!(V.refCounts[W] > 0)) {
                                            var X = V.refs.get(W);
                                            if (X instanceof _W)
                                                for (var Y in X._definition.schema)
                                                    'string' != typeof X._definition.schema[Y] && X[Y] && X[Y].$changes && V.removeRef(X[Y].$changes.refId);
                                            else {
                                                var Z = X.$changes.parent._definition,
                                                    $ = Z.schema[Z.fieldsByIndex[X.$changes.parentIndex]];
                                                'function' == typeof Object.values($)[0] && Array.from(X.values()).forEach(function(ab) {
                                                    return V.removeRef(ab.$changes.refId);
                                                });
                                            }
                                            V.refs.delete(W), delete V.refCounts[W];
                                        }
                                    }), this.deletedRefs.clear();
                                }, w;
                            }(),
                            V = function(W) {
                                function X() {
                                    return null !== W && W.apply(this, arguments) || this;
                                }
                                return c(x, W), x;
                            }(Error);

                        function W(X, Y, Z, $) {
                            var ab, bb = !1;
                            switch (Y) {
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
                                    ab = 'number', isNaN(X) && console.log('trying to encode "NaN" in '.concat(Z.constructor.name, '#').concat($));
                                    break;
                                case 'string':
                                    ab = 'string', bb = !0;
                                    break;
                                case 'boolean':
                                    return;
                            }
                            if (typeof X !== ab && (!bb || bb && null !== X)) {
                                var cb = '\''.concat(JSON.stringify(X), '\'').concat(X && X.constructor && ' ('.concat(X.constructor.name, ')') || '');
                                throw new V('a \''.concat(ab, '\' was expected, but ').concat(cb, ' was provided in ').concat(Z.constructor.name, '#').concat($));
                            }
                        }

                        function W(X, Y, Z, $) {
                            if (!(X instanceof Y))
                                throw new V('a \''.concat(Y.name, '\' was expected, but \'').concat(X.constructor.name, '\' was provided in ').concat(Z.constructor.name, '#').concat($));
                        }

                        function W(X, Y, Z, $, ab) {
                            bt(Z, X, $, ab);
                            var bb = M[X];
                            if (!bb)
                                throw new V('a \''.concat(X, '\' was expected, but ').concat(Z, ' was provided in ').concat($.constructor.name, '#').concat(ab));
                            bb(Y, Z);
                        }

                        function W(X, Y, Z) {
                            return Q[X](Y, Z);
                        }
                        var _W = function() {
                            function X() {
                                for (var Y = [], Z = 0; Z < arguments.length; Z++)
                                    Y[Z] = arguments[Z];
                                Object.defineProperties(this, {
                                    $changes: {
                                        value: new B(this, void 0, new U()),
                                        enumerable: !1,
                                        writable: !0
                                    },
                                    $callbacks: {
                                        value: void 0,
                                        enumerable: !1,
                                        writable: !0
                                    }
                                });
                                var $ = this._definition.descriptors;
                                $ && Object.defineProperties(this, $), Y[0] && this.assign(Y[0]);
                            }
                            return x.onError = function(X) {
                                console.error(X);
                            }, x.is = function(X) {
                                return X._definition && void 0 !== X._definition.schema;
                            }, x.prototype.onChange = function(X) {
                                return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.REPLACE, X);
                            }, x.prototype.onRemove = function(X) {
                                return _cb(this.$callbacks || (this.$callbacks = []), w.OPERATION.DELETE, X);
                            }, x.prototype.assign = function(X) {
                                return Object.assign(this, X), this;
                            }, Object.defineProperty(x.prototype, '_definition', {
                                get: function() {
                                    return this.constructor._definition;
                                },
                                enumerable: !1,
                                configurable: !0
                            }), x.prototype.setDirty = function(X, Y) {
                                this.$changes.change(X, Y);
                            }, x.prototype.listen = function(X, Y, Z) {
                                var $ = this;
                                return void 0 === Z && (Z = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[X] || (this.$callbacks[X] = []), this.$callbacks[X].push(Y), Z && void 0 !== this[X] && Y(this[X], void 0),
                                    function() {
                                        return h($.$callbacks[X], $.$callbacks[X].indexOf(Y));
                                    };
                            }, x.prototype.decode = function(X, Y, Z) {
                                var $;
                                void 0 === Y && (Y = {
                                    offset: 0
                                }), void 0 === Z && (Z = this);
                                var ab = [],
                                    bb = this.$changes.root,
                                    _cb = X.length,
                                    _db = 0;
                                for (bb.refs.set(_db, this); Y.offset < _cb;) {
                                    var eb = X[Y.offset++];
                                    if (eb != z) {
                                        var fb = Z.$changes,
                                            _gb = void 0 !== Z._definition,
                                            hb = _gb ? eb >> 6 << 6 : eb;
                                        if (hb !== w.OPERATION.CLEAR) {
                                            var ib = _gb ? eb % (hb || 255) : vt(X, Y),
                                                jb = _gb ? Z._definition.fieldsByIndex[ib] : '',
                                                kb = fb.getType(ib),
                                                lb = void 0,
                                                mb = void 0,
                                                nb = void 0;
                                            if (_gb ? mb = Z['_'.concat(jb)] : (mb = Z.getByIndex(ib), (hb & w.OPERATION.ADD) === w.OPERATION.ADD ? (nb = Z instanceof E ? lt(X, Y) : ib, Z.setIndex(ib, nb)) : nb = Z.getIndex(ib)), (hb & w.OPERATION.DELETE) === w.OPERATION.DELETE && (hb !== w.OPERATION.DELETE_AND_ADD && Z.deleteByIndex(ib), mb && mb.$changes && bb.removeRef(mb.$changes.refId), lb = null), void 0 !== jb) {
                                                if (hb === w.OPERATION.DELETE);
                                                else if (x.is(kb)) {
                                                    var ob = vt(X, Y);
                                                    if (lb = bb.refs.get(ob), hb !== w.OPERATION.REPLACE) {
                                                        var pb = this.getSchemaType(X, Y, kb);
                                                        lb || ((lb = this.createTypeInstance(pb)).$changes.refId = ob, mb && (lb.$callbacks = mb.$callbacks, mb.$changes.refId && ob !== mb.$changes.refId && bb.removeRef(mb.$changes.refId))), bb.addRef(ob, lb, lb !== mb);
                                                    }
                                                } else if ('string' == typeof kb)
                                                    lb = xt(kb, X, Y);
                                                else {
                                                    var ob = _mb(Object.keys(kb)[0]),
                                                        pb = vt(X, Y),
                                                        qb = bb.refs.has(pb) ? mb || bb.refs.get(pb) : new ob.constructor();
                                                    if ((lb = qb.clone(!0)).$changes.refId = pb, mb && (lb.$callbacks = mb.$callbacks, mb.$changes.refId && pb !== mb.$changes.refId)) {
                                                        bb.removeRef(mb.$changes.refId);
                                                        for (var rb = mb.entries(), _sb = void 0;
                                                            (_sb = rb.next()) && !_sb.done;) {
                                                            var _tb = ($ = _sb.value)[0],
                                                                ub = $[1];
                                                            ab.push({
                                                                refId: pb,
                                                                op: w.OPERATION.DELETE,
                                                                field: _tb,
                                                                value: void 0,
                                                                previousValue: ub
                                                            });
                                                        }
                                                    }
                                                    bb.addRef(pb, lb, qb !== mb);
                                                }
                                                if (null != lb)
                                                    if (lb.$changes && lb.$changes.setParent(fb.ref, fb.root, ib), Z instanceof x)
                                                        Z[jb] = lb;
                                                    else if (Z instanceof E)
                                                    C = nb, Z.$items.set(C, lb), Z.$changes.allChanges.add(ib);
                                                else if (Z instanceof D)
                                                    Z.setAt(ib, lb);
                                                else if (Z instanceof R) {
                                                    var ob = Z.add(lb);
                                                    Z.setIndex(ib, ob);
                                                } else
                                                    Z instanceof S && !1 !== (s = Z.add(lb)) && Z.setIndex(ib, s);
                                                mb !== lb && ab.push({
                                                    refId: _db,
                                                    op: hb,
                                                    field: jb,
                                                    dynamicIndex: nb,
                                                    value: lb,
                                                    previousValue: mb
                                                });
                                            } else {
                                                console.warn('@colyseus/schema: definition mismatch');
                                                for (var _ob = {
                                                        offset: Y.offset
                                                    }; Y.offset < _cb && (!mt(X, Y) || (_ob.offset = Y.offset + 1, !bb.refs.has(vt(X, _ob))));)
                                                    Y.offset++;
                                            }
                                        } else
                                            Z.clear(ab);
                                    } else {
                                        _db = vt(X, Y);
                                        var _fb = bb.refs.get(_db);
                                        if (!_fb)
                                            throw new Error('"refId" not found: '.concat(_db));
                                        Z = _fb;
                                    }
                                }
                                return this._triggerChanges(ab), bb.garbageCollectDeletedRefs(), ab;
                            }, x.prototype.encode = function(X, Y, Z) {
                                void 0 === X && (X = !1), void 0 === Y && (Y = []), void 0 === Z && (Z = !1);
                                for (var $ = this.$changes, ab = new WeakSet(), bb = [$], cb = 1, db = 0; db < cb; db++) {
                                    var eb = bb[db],
                                        fb = eb.ref,
                                        gb = fb instanceof x;
                                    eb.ensureRefId(), ab.add(eb), eb !== $ && (eb.changed || X) && (r(Y, z), _D(Y, eb.refId));
                                    for (var hb = X ? Array.from(eb.allChanges) : Array.from(eb.changes.values()), ib = 0, jb = hb.length; ib < jb; ib++) {
                                        var kb = X ? {
                                                op: w.OPERATION.ADD,
                                                index: hb[ib]
                                            } : hb[ib],
                                            lb = kb.index,
                                            mb = gb ? fb._definition.fieldsByIndex && fb._definition.fieldsByIndex[lb] : lb,
                                            nb = Y.length;
                                        if (kb.op !== w.OPERATION.TOUCH)
                                            if (gb)
                                                r(Y, lb | kb.op);
                                            else {
                                                if (r(Y, kb.op), kb.op === w.OPERATION.CLEAR)
                                                    continue;
                                                _D(Y, lb);
                                            }
                                        if (gb || (kb.op & w.OPERATION.ADD) != w.OPERATION.ADD || fb instanceof E && _C(Y, eb.ref.$indexes.get(lb)), kb.op !== w.OPERATION.DELETE) {
                                            var ob = eb.getType(lb),
                                                pb = eb.getValue(lb);
                                            if (pb && pb.$changes && !ab.has(pb.$changes) && (bb.push(pb.$changes), pb.$changes.ensureRefId(), cb++), kb.op !== w.OPERATION.TOUCH) {
                                                if (x.is(ob))
                                                    It(pb, ob, fb, mb), _D(Y, pb.$changes.refId), (kb.op & w.OPERATION.ADD) === w.OPERATION.ADD && this.tryEncodeTypeId(Y, ob, pb.constructor);
                                                else if ('string' == typeof ob)
                                                    Tt(ob, Y, pb, fb, mb);
                                                else {
                                                    var qb = _mb(Object.keys(ob)[0]);
                                                    It(fb['_'.concat(mb)], qb.constructor, fb, mb), _D(Y, pb.$changes.refId);
                                                }
                                                Z && eb.cache(lb, Y.slice(nb));
                                            }
                                        }
                                    }
                                    X || Z || eb.discard();
                                }
                                return Y;
                            }, x.prototype.encodeAll = function(X) {
                                return this.encode(!0, [], X);
                            }, x.prototype.applyFilters = function(X, Y) {
                                var Z, $;
                                void 0 === Y && (Y = !1);
                                for (var ab = this, bb = new Set(), cb = T.get(X), db = [this.$changes], eb = 1, fb = [], gb = function(hb) {
                                        var ib = db[hb];
                                        if (bb.has(ib.refId))
                                            return 'continue';
                                        var jb = ib.ref,
                                            kb = jb instanceof x;
                                        r(fb, z), _D(fb, ib.refId);
                                        var lb = cb.refIds.has(ib),
                                            _mb = Y || !lb;
                                        cb.addRefId(ib);
                                        var nb = cb.containerIndexes.get(ib),
                                            ob = _mb ? Array.from(ib.allChanges) : Array.from(ib.changes.values());
                                        !Y && kb && jb._definition.indexesWithFilters && jb._definition.indexesWithFilters.forEach(function(pb) {
                                            !nb.has(pb) && ib.allChanges.has(pb) && (_mb ? ob.push(pb) : ob.push({
                                                op: w.OPERATION.ADD,
                                                index: pb
                                            }));
                                        });
                                        for (var pb = 0, qb = ob.length; pb < qb; pb++) {
                                            var rb = _mb ? {
                                                op: w.OPERATION.ADD,
                                                index: ob[pb]
                                            } : ob[pb];
                                            if (rb.op !== w.OPERATION.CLEAR) {
                                                var sb = rb.index;
                                                if (rb.op !== w.OPERATION.DELETE) {
                                                    var tb = ib.getValue(sb),
                                                        ub = ib.getType(sb);
                                                    if (kb) {
                                                        if ((_vb = jb._definition.filters && jb._definition.filters[sb]) && !_vb.call(jb, X, tb, ab)) {
                                                            tb && tb.$changes && bb.add(tb.$changes.refId);
                                                            continue;
                                                        }
                                                    } else {
                                                        var _vb, wb = ib.parent;
                                                        if ((_vb = ib.getChildrenFilter()) && !_vb.call(wb, X, jb.$indexes.get(sb), tb, ab)) {
                                                            tb && tb.$changes && bb.add(tb.$changes.refId);
                                                            continue;
                                                        }
                                                    }
                                                    if (tb.$changes && (db.push(tb.$changes), eb++), rb.op !== w.OPERATION.TOUCH)
                                                        if (rb.op === w.OPERATION.ADD || kb)
                                                            fb.push.apply(fb, null !== (Z = ib.caches[sb]) && void 0 !== Z ? Z : []), nb.add(sb);
                                                        else if (nb.has(sb))
                                                        fb.push.apply(fb, null !== ($ = ib.caches[sb]) && void 0 !== $ ? $ : []);
                                                    else {
                                                        if (nb.add(sb), r(fb, w.OPERATION.ADD), _D(fb, sb), jb instanceof E) {
                                                            var vb = ib.ref.$indexes.get(sb);
                                                            _C(fb, vb);
                                                        }
                                                        tb.$changes ? _D(fb, tb.$changes.refId) : M[ub](fb, tb);
                                                    } else
                                                        tb.$changes && !kb && (r(fb, w.OPERATION.ADD), _D(fb, sb), jb instanceof E && (P = ib.ref.$indexes.get(sb), _C(fb, P)), _D(fb, tb.$changes.refId));
                                                } else
                                                    kb ? r(fb, rb.op | sb) : (r(fb, rb.op), _D(fb, sb));
                                            } else
                                                r(fb, rb.op);
                                        }
                                    }, hb = 0; hb < eb; hb++)
                                    gb(hb);
                                return fb;
                            }, x.prototype.clone = function() {
                                var X, Y = new this.constructor(),
                                    Z = this._definition.schema;
                                for (var $ in Z)
                                    'object' == typeof this[$] && 'function' == typeof(null === (X = this[$]) || void 0 === X ? void 0 : X.clone) ? Y[$] = this[$].clone() : Y[$] = this[$];
                                return Y;
                            }, x.prototype.toJSON = function() {
                                var X = this._definition.schema,
                                    Y = this._definition.deprecated,
                                    Z = {};
                                for (var $ in X)
                                    Y[$] || null === this[$] || void 0 === this[$] || (Z[$] = 'function' == typeof this[$].toJSON ? this[$].toJSON() : this['_'.concat($)]);
                                return Z;
                            }, x.prototype.discardAllChanges = function() {
                                this.$changes.discardAll();
                            }, x.prototype.getByIndex = function(X) {
                                return this[this._definition.fieldsByIndex[X]];
                            }, x.prototype.deleteByIndex = function(X) {
                                this[this._definition.fieldsByIndex[X]] = void 0;
                            }, x.prototype.tryEncodeTypeId = function(X, Y, Z) {
                                Y._typeid !== Z._typeid && (r(X, A), _D(X, Z._typeid));
                            }, x.prototype.getSchemaType = function(X, Y, Z) {
                                var $;
                                return X[Y.offset] === A && (Y.offset++, $ = this.constructor._context.get(vt(X, Y))), $ || Z;
                            }, x.prototype.createTypeInstance = function(X) {
                                var Y = new X();
                                return Y.$changes.root = this.$changes.root, Y;
                            }, x.prototype._triggerChanges = function(X) {
                                for (var Y, Z, $, ab, bb, cb, db, eb, fb, gb = new Set(), hb = this.$changes.root.refs, ib = function(jb) {
                                        var kb = X[jb],
                                            lb = kb.refId,
                                            mb = hb.get(lb),
                                            nb = mb.$callbacks;
                                        if ((kb.op & w.OPERATION.DELETE) === w.OPERATION.DELETE && kb.previousValue instanceof x && (null === (Z = null === (Y = kb.previousValue.$callbacks) || void 0 === Y ? void 0 : Y[w.OPERATION.DELETE]) || void 0 === Z || Z.forEach(function(ob) {
                                                return ob();
                                            })), !nb)
                                            return 'continue';
                                        if (mb instanceof x) {
                                            if (!gb.has(lb))
                                                try {
                                                    null === ($ = null == nb ? void 0 : nb[w.OPERATION.REPLACE]) || void 0 === $ || $.forEach(function(ob) {
                                                        return ob(X);
                                                    });
                                                } catch (w) {
                                                    x.onError(w);
                                                }
                                            try {
                                                nb.hasOwnProperty(kb.field) && (null === (ab = nb[kb.field]) || void 0 === ab || ab.forEach(function(ob) {
                                                    return ob(kb.value, kb.previousValue);
                                                }));
                                            } catch (w) {
                                                x.onError(w);
                                            }
                                        } else
                                            kb.op === w.OPERATION.ADD && void 0 === kb.previousValue ? null === (bb = nb[w.OPERATION.ADD]) || void 0 === bb || bb.forEach(function(ob) {
                                                var pb;
                                                return ob(kb.value, null !== (pb = kb.dynamicIndex) && void 0 !== pb ? pb : kb.field);
                                            }) : kb.op === w.OPERATION.DELETE ? void 0 !== kb.previousValue && (null === (cb = nb[w.OPERATION.DELETE]) || void 0 === cb || cb.forEach(function(ob) {
                                                var pb;
                                                return ob(kb.previousValue, null !== (pb = kb.dynamicIndex) && void 0 !== pb ? pb : kb.field);
                                            })) : kb.op === w.OPERATION.DELETE_AND_ADD && (void 0 !== kb.previousValue && (null === (db = nb[w.OPERATION.DELETE]) || void 0 === db || db.forEach(function(ob) {
                                                var pb;
                                                return ob(kb.previousValue, null !== (pb = kb.dynamicIndex) && void 0 !== pb ? pb : kb.field);
                                            })), null === (eb = nb[w.OPERATION.ADD]) || void 0 === eb || eb.forEach(function(ob) {
                                                var pb;
                                                return ob(kb.value, null !== (pb = kb.dynamicIndex) && void 0 !== pb ? pb : kb.field);
                                            })), kb.value !== kb.previousValue && (null === (fb = nb[w.OPERATION.REPLACE]) || void 0 === fb || fb.forEach(function(ob) {
                                                var pb;
                                                return ob(kb.value, null !== (pb = kb.dynamicIndex) && void 0 !== pb ? pb : kb.field);
                                            }));
                                        gb.add(lb);
                                    }, jb = 0; jb < X.length; jb++)
                                    ib(jb);
                            }, x._definition = G.create(), x;
                        }();

                        function X(Y) {
                            for (var Z = [Y.$changes], $ = 1, ab = {}, bb = ab, cb = function(db) {
                                    var eb = Z[db];
                                    eb.changes.forEach(function(fb) {
                                        var gb = eb.ref,
                                            hb = fb.index,
                                            ib = gb._definition ? gb._definition.fieldsByIndex[hb] : gb.$indexes.get(hb);
                                        bb[ib] = eb.getValue(hb);
                                    });
                                }, db = 0; db < $; db++)
                                cb(db);
                            return ab;
                        }
                        var X = {
                                context: new H()
                            },
                            Y = function(Z) {
                                function $() {
                                    return null !== Z && Z.apply(this, arguments) || this;
                                }
                                return c(x, Z), e([n('string', X)], x.prototype, 'name', void 0), e([n('string', X)], x.prototype, 'type', void 0), e([n('number', X)], x.prototype, 'referencedType', void 0), x;
                            }(_W),
                            Z = function($) {
                                function ab() {
                                    var bb = null !== $ && $.apply(this, arguments) || this;
                                    return bb.fields = new D(), bb;
                                }
                                return c(x, $), e([n('number', X)], x.prototype, 'id', void 0), e([n([Y], X)], x.prototype, 'fields', void 0), x;
                            }(_W),
                            $ = function(ab) {
                                function bb() {
                                    var cb = null !== ab && ab.apply(this, arguments) || this;
                                    return cb.types = new D(), cb;
                                }
                                return c(x, ab), x.encode = function(bb) {
                                    var cb = bb.constructor,
                                        db = new x();
                                    db.rootType = cb._typeid;
                                    var eb = function(fb, gb) {
                                            for (var hb in gb) {
                                                var ib = new Y();
                                                ib.name = hb;
                                                var jb = void 0;
                                                if ('string' == typeof gb[hb])
                                                    jb = gb[hb];
                                                else {
                                                    var kb = gb[hb],
                                                        lb = void 0;
                                                    _W.is(kb) ? (jb = 'ref', lb = gb[hb]) : 'string' == typeof kb[jb = Object.keys(kb)[0]] ? jb += ':' + kb[jb] : lb = kb[jb], ib.referencedType = lb ? lb._typeid : -1;
                                                }
                                                ib.type = jb, fb.fields.push(ib);
                                            }
                                            db.types.push(fb);
                                        },
                                        fb = cb._context.types;
                                    for (var gb in fb) {
                                        var hb = new Z();
                                        hb.id = Number(gb), eb(hb, fb[gb]._definition.schema);
                                    }
                                    return db.encodeAll();
                                }, x.decode = function(bb, cb) {
                                    var db = new H(),
                                        eb = new x();
                                    eb.decode(bb, cb);
                                    var fb = eb.types.reduce(function(gb, hb) {
                                        var ib = function(jb) {
                                                function kb() {
                                                    return null !== jb && jb.apply(this, arguments) || this;
                                                }
                                                return c(hb, jb), hb;
                                            }(_W),
                                            jb = hb.id;
                                        return gb[jb] = ib, db.add(ib, jb), gb;
                                    }, {});
                                    eb.types.forEach(function(gb) {
                                        var hb = fb[gb.id];
                                        gb.fields.forEach(function(ib) {
                                            var jb;
                                            if (void 0 !== ib.referencedType) {
                                                var kb = ib.type,
                                                    lb = fb[ib.referencedType];
                                                if (!lb) {
                                                    var mb = ib.type.split(':');
                                                    kb = mb[0], lb = mb[1];
                                                }
                                                'ref' === kb ? n(lb, {
                                                    context: db
                                                })(hb.prototype, ib.name) : n(((jb = {})[kb] = lb, jb), {
                                                    context: db
                                                })(hb.prototype, ib.name);
                                            } else
                                                n(ib.type, {
                                                    context: db
                                                })(hb.prototype, ib.name);
                                        });
                                    });
                                    var gb = fb[eb.rootType],
                                        hb = new gb();
                                    for (var ib in gb._definition.schema) {
                                        var jb = gb._definition.schema[ib];
                                        'string' != typeof jb && (hb[ib] = 'function' == typeof jb ? new jb() : new(w(Object.keys(jb)[0])).constructor());
                                    }
                                    return hb;
                                }, e([n([Z], X)], x.prototype, 'types', void 0), e([n('number', X)], x.prototype, 'rootType', void 0), x;
                            }(_W);
                        m('map', {
                            constructor: E
                        }), m('array', {
                            constructor: D
                        }), m('set', {
                            constructor: S
                        }), m('collection', {
                            constructor: R
                        }), w.ArraySchema = D, w.CollectionSchema = R, w.Context = H, w.MapSchema = E, w.Reflection = $, w.ReflectionField = Y, w.ReflectionType = Z, w.Schema = _W, w.SchemaDefinition = G, w.SetSchema = S, w.decode = Q, w.defineTypes = x, w.deprecated = T, w.dumpChanges = Pt, w.encode = M, w.filter = o, w.filterChildren = p, w.hasFilter = k, w.registerType = m, w.type = n, Object.defineProperty(w, '__esModule', {
                            value: !0
                        });
                    });
                }),
                _u = function() {
                    function v(w, x) {
                        var y = this;
                        this.onStateChange = N(), this.onError = N(), this.onLeave = N(), this.onJoin = N(), this.hasJoined = !1, this.onMessageHandlers = r(), this.roomId = null, this.name = w, x && (this.serializer = new(C('schema'))(), this.rootSchema = x, this.serializer.state = new x()), this.onError(function(z, A) {
                            var B;
                            return null === (B = console.warn) || void 0 === B ? void 0 : B.call(console, 'colyseus.js - onError => ('.concat(z, ') ').concat(A));
                        }), this.onLeave(function() {
                            return y.removeAllListeners();
                        });
                    }
                    return Object.defineProperty(a.prototype, 'id', {
                        get: function() {
                            return this.roomId;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), a.prototype.connect = function(v, w, x) {
                        void 0 === x && (x = this);
                        var y = new p();
                        x.connection = y, y.events.onmessage = a.prototype.onMessageCallback.bind(x), y.events.onclose = function(z) {
                            var A;
                            if (!x.hasJoined)
                                return null === (A = console.warn) || void 0 === A || A.call(console, 'Room connection was closed unexpectedly ('.concat(z.code, '): ').concat(z.reason)), void x.onError.invoke(z.code, z.reason);
                            z.code === f.DEVMODE_RESTART && w ? w() : (x.onLeave.invoke(z.code), x.destroy());
                        }, y.events.onerror = function(z) {
                            var A;
                            null === (A = console.warn) || void 0 === A || A.call(console, 'Room, onError ('.concat(z.code, '): ').concat(z.reason)), x.onError.invoke(z.code, z.reason);
                        }, y.connect(v);
                    }, a.prototype.leave = function(v) {
                        var w = this;
                        return void 0 === v && (v = !0), new Promise(function(x) {
                            w.onLeave(function(y) {
                                return x(y);
                            }), w.connection ? v ? w.connection.send([d.Protocol.LEAVE_ROOM]) : w.connection.close() : w.onLeave.invoke(f.CONSENTED);
                        });
                    }, a.prototype.onMessage = function(v, w) {
                        return this.onMessageHandlers.on(this.getMessageHandlerKey(v), w);
                    }, a.prototype.send = function(v, w) {
                        var x, y = [d.Protocol.ROOM_DATA];
                        if ('string' == typeof v ? t.encode.string(y, v) : t.encode.number(y, v), void 0 !== w) {
                            var z = E(w);
                            (x = new Uint8Array(y.length + z.byteLength)).set(new Uint8Array(y), 0), x.set(new Uint8Array(z), y.length);
                        } else
                            x = new Uint8Array(y);
                        this.connection.send(x.buffer);
                    }, a.prototype.sendBytes = function(v, w) {
                        var x, y = [d.Protocol.ROOM_DATA_BYTES];
                        'string' == typeof v ? t.encode.string(y, v) : t.encode.number(y, v), (x = new Uint8Array(y.length + (w.byteLength || w.length))).set(new Uint8Array(y), 0), x.set(new Uint8Array(w), y.length), this.connection.send(x.buffer);
                    }, Object.defineProperty(a.prototype, 'state', {
                        get: function() {
                            return this.serializer.getState();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), a.prototype.removeAllListeners = function() {
                        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {};
                    }, a.prototype.onMessageCallback = function(v) {
                        var w = Array.from(new Uint8Array(v.data)),
                            x = w[0];
                        if (x === d.Protocol.JOIN_ROOM) {
                            var y = 1,
                                z = T(w, y);
                            if (y += x(z), this.serializerId = T(w, y), y += x(this.serializerId), !this.serializer) {
                                var A = C(this.serializerId);
                                this.serializer = new A();
                            }
                            w.length > y && this.serializer.handshake && this.serializer.handshake(w, {
                                offset: y
                            }), this.reconnectionToken = ''.concat(this.roomId, ':').concat(z), this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([d.Protocol.JOIN_ROOM]);
                        } else if (x === d.Protocol.ERROR) {
                            var y = {
                                    offset: 1
                                },
                                z = t.decode.number(w, y),
                                A = t.decode.string(w, y);
                            this.onError.invoke(z, A);
                        } else if (x === d.Protocol.LEAVE_ROOM)
                            this.leave();
                        else if (x === d.Protocol.ROOM_DATA_SCHEMA) {
                            var y = {
                                offset: 1
                            };
                            (_U = new(_z = (this.serializer.getState().constructor._context.get(t.decode.number(w, y))))()).decode(w, y), this.dispatchMessage(_z, _U);
                        } else if (x === d.Protocol.ROOM_STATE)
                            w.shift(), this.setState(w);
                        else if (x === d.Protocol.ROOM_STATE_PATCH)
                            w.shift(), this.patch(w);
                        else if (x === d.Protocol.ROOM_DATA) {
                            var y = {
                                    offset: 1
                                },
                                _z = t.decode.stringCheck(w, y) ? t.decode.string(w, y) : t.decode.number(w, y);
                            _U = w.length > y.offset ? _X(v.data, y.offset) : void 0, this.dispatchMessage(_z, _U);
                        } else if (x === d.Protocol.ROOM_DATA_BYTES) {
                            var y = {
                                offset: 1
                            };
                            _V = t.decode.stringCheck(w, y) ? t.decode.string(w, y) : t.decode.number(w, y), this.dispatchMessage(_V, new Uint8Array(w.slice(y.offset)));
                        }
                    }, a.prototype.setState = function(v) {
                        this.serializer.setState(v), this.onStateChange.invoke(this.serializer.getState());
                    }, a.prototype.patch = function(v) {
                        this.serializer.patch(v), this.onStateChange.invoke(this.serializer.getState());
                    }, a.prototype.dispatchMessage = function(v, w) {
                        var x, y = this.getMessageHandlerKey(v);
                        this.onMessageHandlers.events[y] ? this.onMessageHandlers.emit(y, w) : this.onMessageHandlers.events['*'] ? this.onMessageHandlers.emit('*', v, w) : null === (x = console.warn) || void 0 === x || x.call(console, 'colyseus.js: onMessage() not registered for type \''.concat(v, '\'.'));
                    }, a.prototype.destroy = function() {
                        this.serializer && this.serializer.teardown();
                    }, a.prototype.getMessageHandlerKey = function(v) {
                        switch (typeof v) {
                            case 'function':
                                return '$'.concat(v._typeid);
                            case 'string':
                                return v;
                            case 'number':
                                return 'i'.concat(v);
                            default:
                                throw new Error('invalid message type.');
                        }
                    }, a;
                }();

            function _v(w, x) {
                x.statusMessage = w.statusText, x.statusCode = w.status, x.data = w.body;
            }

            function _v(w, x, y) {
                var z, A, B = (y = y || {}).body;
                return y.method = w, y.headers = y.headers || {}, B instanceof FormData || B && 'object' == typeof B && (y.headers['content-type'] = 'application/json', y.body = JSON.stringify(B)), y.withCredentials && (y.credentials = 'include'), y.timeout && (A = new AbortController(), y.signal = A.signal, z = setTimeout(A.abort, y.timeout)), new Promise((w, g) => {
                    fetch(x, y).then((x, A) => {
                        clearTimeout(z), j(x, x), A = x.status >= 400 ? g : w, (B = x.headers.get('content-type')) && ~B.indexOf('application/json') ? x.text().then(w => {
                            try {
                                x.data = JSON.parse(w, y.reviver), A(x);
                            } catch (w) {
                                w.headers = x.headers, j(x, w), g(w);
                            }
                        }) : A(x);
                    }).catch(w => {
                        w.timeout = A && A.signal.aborted, g(w);
                    });
                });
            }
            var _v, w, x, y, _z, _A = U.bind(U, 'GET'),
                _B = U.bind(U, 'POST'),
                _C = U.bind(U, 'PATCH'),
                _D = U.bind(U, 'DELETE'),
                E = U.bind(U, 'PUT'),
                _F = {
                    del: _D,
                    get: _A,
                    patch: _C,
                    post: _B,
                    put: E,
                    send: U
                },
                _G = c({
                    __proto__: null,
                    default: _F,
                    del: _D,
                    get: _A,
                    patch: _C,
                    post: _B,
                    put: E,
                    send: U
                }, [_F]),
                _H = function() {
                    function I(J) {
                        this.client = J;
                    }
                    return a.prototype.get = function(I, J) {
                        return void 0 === J && (J = {}), this.request('get', I, J);
                    }, a.prototype.post = function(I, J) {
                        return void 0 === J && (J = {}), this.request('post', I, J);
                    }, a.prototype.del = function(I, J) {
                        return void 0 === J && (J = {}), this.request('del', I, J);
                    }, a.prototype.put = function(I, J) {
                        return void 0 === J && (J = {}), this.request('put', I, J);
                    }, a.prototype.request = function(I, J, K) {
                        return void 0 === K && (K = {}), _G[I](this.client.getHttpEndpoint(J), this.getOptions(K)).catch(function(L) {
                            var M;
                            throw new h(L.statusCode || -1, (null === (M = L.data) || void 0 === M ? void 0 : M.error) || L.statusMessage || L.message || 'offline');
                        });
                    }, a.prototype.getOptions = function(I) {
                        return this.authToken && (I.headers || (I.headers = {}), I.headers.Authorization = 'Bearer '.concat(this.authToken), I.withCredentials = !0), I;
                    }, a;
                }();

            function _I() {
                return _v || (_v = 'undefined' != typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : 'undefined' != typeof window && window.localStorage ? window.localStorage : {
                    cache: {},
                    setItem: function(J, K) {
                        this.cache[J] = K;
                    },
                    getItem: function(J) {
                        this.cache[J];
                    },
                    removeItem: function(J) {
                        delete this.cache[J];
                    }
                }), _v;
            }

            function _I(J, K) {
                Z().setItem(J, K);
            }

            function _I(J) {
                Z().removeItem(J);
            }

            function _I(J, K) {
                var L = Z().getItem(J);
                'undefined' != typeof Promise && L instanceof Promise ? L.then(function(M) {
                    return K(M);
                }) : K(L);
            }
            var _I, _J = function() {
                function K(L) {
                    var M = this;
                    this.http = L, this.settings = {
                        path: '/auth',
                        key: 'colyseus-auth-token'
                    }, w.set(this, !1), x.set(this, void 0), y.set(this, void 0), _z.set(this, r()), nt(this.settings.key, function(N) {
                        return M.token = N;
                    });
                }
                return Object.defineProperty(a.prototype, 'token', {
                    get: function() {
                        return this.http.authToken;
                    },
                    set: function(K) {
                        this.http.authToken = K;
                    },
                    enumerable: !1,
                    configurable: !0
                }), a.prototype.onChange = function(K) {
                    var L = this,
                        M = _U(this, _z, 'f').on('change', K);
                    return _U(this, w, 'f') || _Z(this, x, new Promise(function(N, O) {
                        L.getUserData().then(function(P) {
                            L.emitChange(g(g({}, P), {
                                token: L.token
                            }));
                        }).catch(function(P) {
                            L.emitChange({
                                user: null,
                                token: void 0
                            });
                        }).finally(function() {
                            N();
                        });
                    }), 'f'), _Z(this, w, !0, 'f'), M;
                }, a.prototype.getUserData = function() {
                    return _S(this, void 0, void 0, function() {
                        return _T(this, function(K) {
                            switch (K.label) {
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
                                        K.sent().data
                                    ];
                                case 2:
                                    throw new Error('missing auth.token');
                            }
                        });
                    });
                }, a.prototype.registerWithEmailAndPassword = function(K, L, M) {
                    return _S(this, void 0, void 0, function() {
                        var N;
                        return _T(this, function(O) {
                            switch (O.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/register'), {
                                            body: {
                                                email: K,
                                                password: L,
                                                options: M
                                            }
                                        })
                                    ];
                                case 1:
                                    return N = O.sent().data, this.emitChange(N), [
                                        2,
                                        N
                                    ];
                            }
                        });
                    });
                }, a.prototype.signInWithEmailAndPassword = function(K, L) {
                    return _S(this, void 0, void 0, function() {
                        var M;
                        return _T(this, function(N) {
                            switch (N.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/login'), {
                                            body: {
                                                email: K,
                                                password: L
                                            }
                                        })
                                    ];
                                case 1:
                                    return M = N.sent().data, this.emitChange(M), [
                                        2,
                                        M
                                    ];
                            }
                        });
                    });
                }, a.prototype.signInAnonymously = function(K) {
                    return _S(this, void 0, void 0, function() {
                        var L;
                        return _T(this, function(M) {
                            switch (M.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/anonymous'), {
                                            body: {
                                                options: K
                                            }
                                        })
                                    ];
                                case 1:
                                    return L = M.sent().data, this.emitChange(L), [
                                        2,
                                        L
                                    ];
                            }
                        });
                    });
                }, a.prototype.sendPasswordResetEmail = function(K) {
                    return _S(this, void 0, void 0, function() {
                        return _T(this, function(L) {
                            switch (L.label) {
                                case 0:
                                    return [
                                        4,
                                        this.http.post(''.concat(this.settings.path, '/forgot-password'), {
                                            body: {
                                                email: K
                                            }
                                        })
                                    ];
                                case 1:
                                    return [
                                        2,
                                        L.sent().data
                                    ];
                            }
                        });
                    });
                }, a.prototype.signInWithProvider = function(K, L) {
                    return void 0 === L && (L = {}), _S(this, void 0, void 0, function() {
                        var M = this;
                        return _T(this, function(N) {
                            return [
                                2,
                                new Promise(function(O, P) {
                                    var Q = L.width || 480,
                                        R = L.height || 768,
                                        _S = M.token ? '?token='.concat(M.token) : '',
                                        _T = 'Login with '.concat(K[0].toUpperCase() + K.substring(1)),
                                        U = M.http.client.getHttpEndpoint(''.concat(L.prefix || ''.concat(M.settings.path, '/provider'), '/').concat(K).concat(_S)),
                                        _V = screen.width / 2 - Q / 2,
                                        W = screen.height / 2 - R / 2;
                                    _Z(M, y, window.open(U, _T, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + Q + ', height=' + R + ', top=' + W + ', left=' + _V), 'f');
                                    var _X = function(Y) {
                                            void 0 === Y.data.user && void 0 === Y.data.token || (clearInterval(i), _U(M, y, 'f').close(), _Z(M, y, void 0, 'f'), window.removeEventListener('message', _X), void 0 !== Y.data.error ? P(Y.data.error) : (O(Y.data), M.emitChange(Y.data)));
                                        },
                                        Y = setInterval(function() {
                                            _U(M, y, 'f') && !_U(M, y, 'f').closed || (_Z(M, y, void 0, 'f'), P('cancelled'), window.removeEventListener('message', _X));
                                        }, 200);
                                    window.addEventListener('message', _X);
                                })
                            ];
                        });
                    });
                }, a.prototype.signOut = function() {
                    return _$(this, void 0, void 0, function() {
                        return c(this, function(K) {
                            return this.emitChange({
                                user: null,
                                token: null
                            }), [2];
                        });
                    });
                }, a.prototype.emitChange = function(K) {
                    void 0 !== K.token && (this.token = K.token, null === K.token ? et(this.settings.key) : tt(this.settings.key, K.token)), _U(this, _z, 'f').emit('change', K);
                }, a;
            }();
            w = new WeakMap(), x = new WeakMap(), y = new WeakMap(), _z = new WeakMap();
            var _K = function(L) {
                    function M(N, O) {
                        var P = L.call(this, N) || this;
                        return P.code = O, Object.setPrototypeOf(P, M.prototype), P;
                    }
                    return _R(d, L), d;
                }(Error),
                _L = 'undefined' != typeof window && void 0 !== (null === (_I = null === window || void 0 === window ? void 0 : window.location) || void 0 === _I ? void 0 : _I.hostname) ? ''.concat(window.location.protocol.replace('http', 'ws'), '//').concat(window.location.hostname).concat(window.location.port && ':'.concat(window.location.port)) : 'ws://127.0.0.1:2567',
                M = function() {
                    function N(O) {
                        if (void 0 === O && (O = _L), 'string' == typeof O) {
                            var P = new URL(O),
                                Q = 'https:' === P.protocol || 'wss:' === P.protocol,
                                R = Number(P.port || (Q ? 443 : 80));
                            this.settings = {
                                hostname: P.hostname,
                                pathname: P.pathname,
                                port: R,
                                secure: Q
                            };
                        } else
                            void 0 === O.port && (O.port = O.secure ? 443 : 80), void 0 === O.pathname && (O.pathname = ''), this.settings = O;
                        this.settings.pathname.endsWith('/') && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new _H(this), this.auth = new _J(this.http);
                    }
                    return a.prototype.joinOrCreate = function(N, O, P) {
                        return void 0 === O && (O = {}), _$(this, void 0, void 0, function() {
                            return c(this, function(Q) {
                                switch (Q.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinOrCreate', N, O, P)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Q.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.create = function(N, O, P) {
                        return void 0 === O && (O = {}), _$(this, void 0, void 0, function() {
                            return c(this, function(Q) {
                                switch (Q.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('create', N, O, P)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Q.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.join = function(N, O, P) {
                        return void 0 === O && (O = {}), _$(this, void 0, void 0, function() {
                            return c(this, function(Q) {
                                switch (Q.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('join', N, O, P)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Q.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.joinById = function(N, O, P) {
                        return void 0 === O && (O = {}), _$(this, void 0, void 0, function() {
                            return c(this, function(Q) {
                                switch (Q.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.createMatchMakeRequest('joinById', N, O, P)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            Q.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.reconnect = function(N, O) {
                        return _$(this, void 0, void 0, function() {
                            var P, Q, _R;
                            return c(this, function(S) {
                                switch (S.label) {
                                    case 0:
                                        if ('string' == typeof N && 'string' == typeof O)
                                            throw new Error('DEPRECATED: .reconnect() now only accepts \'reconnectionToken\' as argument.\nYou can get this token from previously connected `room.reconnectionToken`');
                                        if (P = N.split(':'), Q = P[0], _R = P[1], !Q || !_R)
                                            throw new Error('Invalid reconnection token format.\nThe format should be roomId:reconnectionToken');
                                        return [
                                            4,
                                            this.createMatchMakeRequest('reconnect', Q, {
                                                reconnectionToken: _R
                                            }, O)
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            S.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.getAvailableRooms = function(N) {
                        return void 0 === N && (N = ''), _$(this, void 0, void 0, function() {
                            return c(this, function(O) {
                                switch (O.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.get('matchmake/'.concat(N), {
                                                headers: {
                                                    Accept: 'application/json'
                                                }
                                            })
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            O.sent().data
                                        ];
                                }
                            });
                        });
                    }, a.prototype.consumeSeatReservation = function(N, O, P) {
                        return _$(this, void 0, void 0, function() {
                            var Q, R, S, T = this;
                            return c(this, function(_U) {
                                return (Q = this.createRoom(N.room.name, O)).roomId = N.room.roomId, Q.sessionId = N.sessionId, R = {
                                    sessionId: Q.sessionId
                                }, N.reconnectionToken && (R.reconnectionToken = N.reconnectionToken), S = P || Q, Q.connect(this.buildEndpoint(N.room, R), N.devMode && function() {
                                    return _$(T, void 0, void 0, function() {
                                        var V, W, X, Y = this;
                                        return c(this, function(_Z) {
                                            return console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' Re-establishing connection with room id \'').concat(Q.roomId, '\'...')), V = 0, W = 8, X = function() {
                                                return _$(Y, void 0, void 0, function() {
                                                    return c(this, function(_$) {
                                                        switch (_$.label) {
                                                            case 0:
                                                                V++, _$.label = 1;
                                                            case 1:
                                                                return _$.trys.push([
                                                                    1,
                                                                    3, ,
                                                                    4
                                                                ]), [
                                                                    4,
                                                                    this.consumeSeatReservation(N, O, S)
                                                                ];
                                                            case 2:
                                                                return _$.sent(), console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(9989), ' Successfully re-established connection with room \'').concat(Q.roomId, '\'')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 3:
                                                                return _$.sent(), V < W ? (console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(128260), ' retrying... (').concat(V, ' out of ').concat(W, ')')), setTimeout(X, 2000)) : console.info('[Colyseus devMode]: '.concat(String.fromCodePoint(10060), ' Failed to reconnect. Is your server running? Please check server logs.')), [
                                                                    3,
                                                                    4
                                                                ];
                                                            case 4:
                                                                return [2];
                                                        }
                                                    });
                                                });
                                            }, setTimeout(X, 2000), [2];
                                        });
                                    });
                                }, S), [
                                    2,
                                    new Promise(function(V, W) {
                                        var X = function(Y, Z) {
                                            return W(new h(Y, Z));
                                        };
                                        S.onError.once(X), S.onJoin.once(function() {
                                            S.onError.remove(X), V(S);
                                        });
                                    })
                                ];
                            });
                        });
                    }, a.prototype.createMatchMakeRequest = function(N, O, P, Q, R) {
                        return void 0 === P && (P = {}), a(this, void 0, void 0, function() {
                            var S;
                            return c(this, function(T) {
                                switch (T.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.http.post('matchmake/'.concat(N, '/').concat(O), {
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(P)
                                            })
                                        ];
                                    case 1:
                                        if ((S = T.sent().data).error)
                                            throw new _K(S.error, S.code);
                                        return 'reconnect' === N && (S.reconnectionToken = P.reconnectionToken), [
                                            4,
                                            this.consumeSeatReservation(S, Q, R)
                                        ];
                                    case 2:
                                        return [
                                            2,
                                            T.sent()
                                        ];
                                }
                            });
                        });
                    }, a.prototype.createRoom = function(N, O) {
                        return new _u(N, O);
                    }, a.prototype.buildEndpoint = function(N, O) {
                        void 0 === O && (O = {});
                        var P = [];
                        for (var Q in O)
                            O.hasOwnProperty(Q) && P.push(''.concat(Q, '=').concat(O[Q]));
                        var R = this.settings.secure ? 'wss://' : 'ws://';
                        return N.publicAddress ? R += ''.concat(N.publicAddress) : R += ''.concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname), ''.concat(R, '/').concat(N.processId, '/').concat(N.roomId, '?').concat(P.join('&'));
                    }, a.prototype.getHttpEndpoint = function(N) {
                        void 0 === N && (N = '');
                        var O = N.startsWith('/') ? N : '/'.concat(N);
                        return ''.concat(this.settings.secure ? 'https' : 'http', '://').concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(O);
                    }, a.prototype.getEndpointPort = function() {
                        return 80 !== this.settings.port && 443 !== this.settings.port ? ':'.concat(this.settings.port) : '';
                    }, a;
                }(),
                N = function() {
                    function O() {}
                    return a.prototype.setState = function(O) {
                        return this.state.decode(O);
                    }, a.prototype.getState = function() {
                        return this.state;
                    }, a.prototype.patch = function(O) {
                        return this.state.decode(O);
                    }, a.prototype.teardown = function() {
                        var O, P;
                        null === (P = null === (O = this.state) || void 0 === O ? void 0 : O.$changes) || void 0 === P || P.root.clearRefs();
                    }, a.prototype.handshake = function(O, P) {
                        this.state ? new t.Reflection().decode(O, P) : this.state = t.Reflection.decode(O, P);
                    }, a;
                }(),
                O = function() {
                    function P() {}
                    return a.prototype.setState = function(P) {}, a.prototype.getState = function() {
                        return null;
                    }, a.prototype.patch = function(P) {}, a.prototype.teardown = function() {}, a.prototype.handshake = function(P) {}, a;
                }();
            P('schema', N), P('none', O), d.Auth = _J, d.Client = M, d.Room = _u, d.SchemaSerializer = N, d.registerSerializer = P, Object.defineProperty(d, '__esModule', {
                value: !0
            });
        }(b.exports);
});