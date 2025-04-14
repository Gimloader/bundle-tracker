var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
t.parcelRequire388b.register("lJnts", (function(e, n) {
    e.exports,
        function(e) {
            function n(t, e) {
                return e.forEach((function(e) {
                    e && "string" != typeof e && !Array.isArray(e) && Object.keys(e).forEach((function(n) {
                        if ("default" !== n && !(n in t)) {
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, o.get ? o : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }))
                })), Object.freeze(t)
            }
            ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                return null !== t && "object" == typeof t && t.buffer instanceof ArrayBuffer
            }), "undefined" == typeof globalThis && "undefined" != typeof window && (window.globalThis = window);
            var o = function(t, e) {
                return o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, o(t, e)
            };

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var r, s = function() {
                return s = Object.assign || function(t) {
                    for (var e, n = 1, o = arguments.length; n < o; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, s.apply(this, arguments)
            };

            function a(t, e, n, o) {
                function i(t) {
                    return t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))
                }
                return new(n || (n = Promise))((function(n, r) {
                    function s(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? n(t.value) : i(t.value).then(s, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            }

            function c(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function a(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; r && (r = 0, a[0] && (s = 0)), s;) try {
                        if (n = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                        switch (o = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < i[1]) {
                                    s.label = i[1], i = a;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(a);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = e.call(t, s)
                    } catch (t) {
                        a = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }
            }

            function f(t, e, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(t) : o ? o.value : e.get(t)
            }

            function h(t, e, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(t, n) : i ? i.value = n : e.set(t, n), n
            }! function(t) {
                t[t.CONSENTED = 4e3] = "CONSENTED", t[t.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART"
            }(r || (r = {}));
            var u = function(t) {
                function e(e, n) {
                    var o = t.call(this, n) || this;
                    return o.name = "ServerError", o.code = e, o
                }
                return i(e, t), e
            }(Error);

            function d(t, e) {
                if (this._offset = e, t instanceof ArrayBuffer) this._buffer = t, this._view = new DataView(this._buffer);
                else {
                    if (!ArrayBuffer.isView(t)) throw new Error("Invalid argument");
                    this._buffer = t.buffer, this._view = new DataView(this._buffer, t.byteOffset, t.byteLength)
                }
            }

            function l(t, e, n) {
                for (var o = "", i = 0, r = e, s = e + n; r < s; r++) {
                    var a = t.getUint8(r);
                    if (0 != (128 & a))
                        if (192 != (224 & a))
                            if (224 != (240 & a)) {
                                if (240 != (248 & a)) throw new Error("Invalid byte " + a.toString(16));
                                (i = (7 & a) << 18 | (63 & t.getUint8(++r)) << 12 | (63 & t.getUint8(++r)) << 6 | (63 & t.getUint8(++r)) << 0) >= 65536 ? (i -= 65536, o += String.fromCharCode(55296 + (i >>> 10), 56320 + (1023 & i))) : o += String.fromCharCode(i)
                            } else o += String.fromCharCode((15 & a) << 12 | (63 & t.getUint8(++r)) << 6 | (63 & t.getUint8(++r)) << 0);
                    else o += String.fromCharCode((31 & a) << 6 | 63 & t.getUint8(++r));
                    else o += String.fromCharCode(a)
                }
                return o
            }

            function p(t, e) {
                void 0 === e && (e = 0);
                var n = new d(t, e),
                    o = n._parse();
                if (n._offset !== t.byteLength) throw new Error(t.byteLength - n._offset + " trailing bytes");
                return o
            }
            d.prototype._array = function(t) {
                for (var e = new Array(t), n = 0; n < t; n++) e[n] = this._parse();
                return e
            }, d.prototype._map = function(t) {
                for (var e = {}, n = 0; n < t; n++) e[this._parse()] = this._parse();
                return e
            }, d.prototype._str = function(t) {
                var e = l(this._view, this._offset, t);
                return this._offset += t, e
            }, d.prototype._bin = function(t) {
                var e = this._buffer.slice(this._offset, this._offset + t);
                return this._offset += t, e
            }, d.prototype._parse = function() {
                var t, e = this._view.getUint8(this._offset++),
                    n = 0,
                    o = 0,
                    i = 0,
                    r = 0;
                if (e < 192) return e < 128 ? e : e < 144 ? this._map(15 & e) : e < 160 ? this._array(15 & e) : this._str(31 & e);
                if (e > 223) return -1 * (255 - e + 1);
                switch (e) {
                    case 192:
                        return null;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 196:
                        return n = this._view.getUint8(this._offset), this._offset += 1, this._bin(n);
                    case 197:
                        return n = this._view.getUint16(this._offset), this._offset += 2, this._bin(n);
                    case 198:
                        return n = this._view.getUint32(this._offset), this._offset += 4, this._bin(n);
                    case 199:
                        if (n = this._view.getUint8(this._offset), o = this._view.getInt8(this._offset + 1), this._offset += 2, -1 === o) {
                            var s = this._view.getUint32(this._offset);
                            return i = this._view.getInt32(this._offset + 4), r = this._view.getUint32(this._offset + 8), this._offset += 12, new Date(1e3 * (4294967296 * i + r) + s / 1e6)
                        }
                        return [o, this._bin(n)];
                    case 200:
                        return n = this._view.getUint16(this._offset), o = this._view.getInt8(this._offset + 2), this._offset += 3, [o, this._bin(n)];
                    case 201:
                        return n = this._view.getUint32(this._offset), o = this._view.getInt8(this._offset + 4), this._offset += 5, [o, this._bin(n)];
                    case 202:
                        return t = this._view.getFloat32(this._offset), this._offset += 4, t;
                    case 203:
                        return t = this._view.getFloat64(this._offset), this._offset += 8, t;
                    case 204:
                        return t = this._view.getUint8(this._offset), this._offset += 1, t;
                    case 205:
                        return t = this._view.getUint16(this._offset), this._offset += 2, t;
                    case 206:
                        return t = this._view.getUint32(this._offset), this._offset += 4, t;
                    case 207:
                        return i = this._view.getUint32(this._offset) * Math.pow(2, 32), r = this._view.getUint32(this._offset + 4), this._offset += 8, i + r;
                    case 208:
                        return t = this._view.getInt8(this._offset), this._offset += 1, t;
                    case 209:
                        return t = this._view.getInt16(this._offset), this._offset += 2, t;
                    case 210:
                        return t = this._view.getInt32(this._offset), this._offset += 4, t;
                    case 211:
                        return i = this._view.getInt32(this._offset) * Math.pow(2, 32), r = this._view.getUint32(this._offset + 4), this._offset += 8, i + r;
                    case 212:
                        return o = this._view.getInt8(this._offset), this._offset += 1, 0 === o ? void(this._offset += 1) : [o, this._bin(1)];
                    case 213:
                        return o = this._view.getInt8(this._offset), this._offset += 1, [o, this._bin(2)];
                    case 214:
                        return o = this._view.getInt8(this._offset), this._offset += 1, -1 === o ? (t = this._view.getUint32(this._offset), this._offset += 4, new Date(1e3 * t)) : [o, this._bin(4)];
                    case 215:
                        return o = this._view.getInt8(this._offset), this._offset += 1, 0 === o ? (i = this._view.getInt32(this._offset) * Math.pow(2, 32), r = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(i + r)) : -1 === o ? (i = this._view.getUint32(this._offset), r = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(1e3 * (4294967296 * (3 & i) + r) + (i >>> 2) / 1e6)) : [o, this._bin(8)];
                    case 216:
                        return o = this._view.getInt8(this._offset), this._offset += 1, [o, this._bin(16)];
                    case 217:
                        return n = this._view.getUint8(this._offset), this._offset += 1, this._str(n);
                    case 218:
                        return n = this._view.getUint16(this._offset), this._offset += 2, this._str(n);
                    case 219:
                        return n = this._view.getUint32(this._offset), this._offset += 4, this._str(n);
                    case 220:
                        return n = this._view.getUint16(this._offset), this._offset += 2, this._array(n);
                    case 221:
                        return n = this._view.getUint32(this._offset), this._offset += 4, this._array(n);
                    case 222:
                        return n = this._view.getUint16(this._offset), this._offset += 2, this._map(n);
                    case 223:
                        return n = this._view.getUint32(this._offset), this._offset += 4, this._map(n)
                }
                throw new Error("Could not parse")
            };
            var v = 4294967295,
                y = 17179869183;

            function g(t, e, n) {
                for (var o = 0, i = 0, r = n.length; i < r; i++)(o = n.charCodeAt(i)) < 128 ? t.setUint8(e++, o) : o < 2048 ? (t.setUint8(e++, 192 | o >> 6), t.setUint8(e++, 128 | 63 & o)) : o < 55296 || o >= 57344 ? (t.setUint8(e++, 224 | o >> 12), t.setUint8(e++, 128 | o >> 6 & 63), t.setUint8(e++, 128 | 63 & o)) : (i++, o = 65536 + ((1023 & o) << 10 | 1023 & n.charCodeAt(i)), t.setUint8(e++, 240 | o >> 18), t.setUint8(e++, 128 | o >> 12 & 63), t.setUint8(e++, 128 | o >> 6 & 63), t.setUint8(e++, 128 | 63 & o))
            }

            function m(t) {
                for (var e = 0, n = 0, o = 0, i = t.length; o < i; o++)(e = t.charCodeAt(o)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (o++, n += 4);
                return n
            }

            function w(t, e, n) {
                var o = typeof n,
                    i = 0,
                    r = 0,
                    s = 0,
                    a = 0,
                    c = 0,
                    f = 0;
                if ("string" === o) {
                    if ((c = m(n)) < 32) t.push(160 | c), f = 1;
                    else if (c < 256) t.push(217, c), f = 2;
                    else if (c < 65536) t.push(218, c >> 8, c), f = 3;
                    else {
                        if (!(c < 4294967296)) throw new Error("String too long");
                        t.push(219, c >> 24, c >> 16, c >> 8, c), f = 5
                    }
                    return e.push({
                        _str: n,
                        _length: c,
                        _offset: t.length
                    }), f + c
                }
                if ("number" === o) return Math.floor(n) === n && isFinite(n) ? n >= 0 ? n < 128 ? (t.push(n), 1) : n < 256 ? (t.push(204, n), 2) : n < 65536 ? (t.push(205, n >> 8, n), 3) : n < 4294967296 ? (t.push(206, n >> 24, n >> 16, n >> 8, n), 5) : (s = n / Math.pow(2, 32) >> 0, a = n >>> 0, t.push(207, s >> 24, s >> 16, s >> 8, s, a >> 24, a >> 16, a >> 8, a), 9) : n >= -32 ? (t.push(n), 1) : n >= -128 ? (t.push(208, n), 2) : n >= -32768 ? (t.push(209, n >> 8, n), 3) : n >= -2147483648 ? (t.push(210, n >> 24, n >> 16, n >> 8, n), 5) : (s = Math.floor(n / Math.pow(2, 32)), a = n >>> 0, t.push(211, s >> 24, s >> 16, s >> 8, s, a >> 24, a >> 16, a >> 8, a), 9) : (t.push(203), e.push({
                    _float: n,
                    _length: 8,
                    _offset: t.length
                }), 9);
                if ("object" === o) {
                    if (null === n) return t.push(192), 1;
                    if (Array.isArray(n)) {
                        if ((c = n.length) < 16) t.push(144 | c), f = 1;
                        else if (c < 65536) t.push(220, c >> 8, c), f = 3;
                        else {
                            if (!(c < 4294967296)) throw new Error("Array too large");
                            t.push(221, c >> 24, c >> 16, c >> 8, c), f = 5
                        }
                        for (i = 0; i < c; i++) f += w(t, e, n[i]);
                        return f
                    }
                    if (n instanceof Date) {
                        var h = n.getTime(),
                            u = Math.floor(h / 1e3),
                            d = 1e6 * (h - 1e3 * u);
                        return u >= 0 && d >= 0 && u <= y ? 0 === d && u <= v ? (t.push(214, 255, u >> 24, u >> 16, u >> 8, u), 6) : (s = u / 4294967296, a = 4294967295 & u, t.push(215, 255, d >> 22, d >> 14, d >> 6, s, a >> 24, a >> 16, a >> 8, a), 10) : (s = Math.floor(u / 4294967296), a = u >>> 0, t.push(199, 12, 255, d >> 24, d >> 16, d >> 8, d, s >> 24, s >> 16, s >> 8, s, a >> 24, a >> 16, a >> 8, a), 15)
                    }
                    if (n instanceof ArrayBuffer) {
                        if ((c = n.byteLength) < 256) t.push(196, c), f = 2;
                        else if (c < 65536) t.push(197, c >> 8, c), f = 3;
                        else {
                            if (!(c < 4294967296)) throw new Error("Buffer too large");
                            t.push(198, c >> 24, c >> 16, c >> 8, c), f = 5
                        }
                        return e.push({
                            _bin: n,
                            _length: c,
                            _offset: t.length
                        }), f + c
                    }
                    if ("function" == typeof n.toJSON) return w(t, e, n.toJSON());
                    var l = [],
                        p = "",
                        g = Object.keys(n);
                    for (i = 0, r = g.length; i < r; i++) void 0 !== n[p = g[i]] && "function" != typeof n[p] && l.push(p);
                    if ((c = l.length) < 16) t.push(128 | c), f = 1;
                    else if (c < 65536) t.push(222, c >> 8, c), f = 3;
                    else {
                        if (!(c < 4294967296)) throw new Error("Object too large");
                        t.push(223, c >> 24, c >> 16, c >> 8, c), f = 5
                    }
                    for (i = 0; i < c; i++) f += w(t, e, p = l[i]), f += w(t, e, n[p]);
                    return f
                }
                if ("boolean" === o) return t.push(n ? 195 : 194), 1;
                if ("undefined" === o) return t.push(192), 1;
                if ("function" == typeof n.toJSON) return w(t, e, n.toJSON());
                throw new Error("Could not encode")
            }

            function E(t) {
                var e = [],
                    n = [],
                    o = w(e, n, t),
                    i = new ArrayBuffer(o),
                    r = new DataView(i),
                    s = 0,
                    a = 0,
                    c = -1;
                n.length > 0 && (c = n[0]._offset);
                for (var f, h = 0, u = 0, d = 0, l = e.length; d < l; d++)
                    if (r.setUint8(a + d, e[d]), d + 1 === c) {
                        if (h = (f = n[s])._length, u = a + c, f._bin)
                            for (var p = new Uint8Array(f._bin), v = 0; v < h; v++) r.setUint8(u + v, p[v]);
                        else f._str ? g(r, u, f._str) : void 0 !== f._float && r.setFloat64(u, f._float);
                        a += h, n[++s] && (c = n[s]._offset)
                    } return i
            }
            var A, _, O = function() {
                    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
                },
                $ = globalThis.WebSocket || O,
                b = function() {
                    function t(t) {
                        this.events = t
                    }
                    return t.prototype.send = function(t) {
                        t instanceof ArrayBuffer ? this.ws.send(t) : Array.isArray(t) && this.ws.send(new Uint8Array(t).buffer)
                    }, t.prototype.connect = function(t) {
                        this.ws = new $(t, this.protocols), this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
                    }, t.prototype.close = function(t, e) {
                        this.ws.close(t, e)
                    }, Object.defineProperty(t.prototype, "isOpen", {
                        get: function() {
                            return this.ws.readyState === $.OPEN
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(),
                I = function() {
                    function t() {
                        this.events = {}, this.transport = new b(this.events)
                    }
                    return t.prototype.send = function(t) {
                        this.transport.send(t)
                    }, t.prototype.connect = function(t) {
                        this.transport.connect(t)
                    }, t.prototype.close = function(t, e) {
                        this.transport.close(t, e)
                    }, Object.defineProperty(t.prototype, "isOpen", {
                        get: function() {
                            return this.transport.isOpen
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }();

            function T(t, e) {
                for (var n = t[e++], o = "", i = 0, r = e, s = e + n; r < s; r++) {
                    var a = t[r];
                    if (0 != (128 & a))
                        if (192 != (224 & a))
                            if (224 != (240 & a)) {
                                if (240 != (248 & a)) throw new Error("Invalid byte " + a.toString(16));
                                (i = (7 & a) << 18 | (63 & t[++r]) << 12 | (63 & t[++r]) << 6 | (63 & t[++r]) << 0) >= 65536 ? (i -= 65536, o += String.fromCharCode(55296 + (i >>> 10), 56320 + (1023 & i))) : o += String.fromCharCode(i)
                            } else o += String.fromCharCode((15 & a) << 12 | (63 & t[++r]) << 6 | (63 & t[++r]) << 0);
                    else o += String.fromCharCode((31 & a) << 6 | 63 & t[++r]);
                    else o += String.fromCharCode(a)
                }
                return o
            }

            function x(t) {
                void 0 === t && (t = "");
                for (var e = 0, n = 0, o = 0, i = t.length; o < i; o++)(e = t.charCodeAt(o)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (o++, n += 4);
                return n + 1
            }
            e.Protocol = void 0, (_ = e.Protocol || (e.Protocol = {}))[_.HANDSHAKE = 9] = "HANDSHAKE", _[_.JOIN_ROOM = 10] = "JOIN_ROOM", _[_.ERROR = 11] = "ERROR", _[_.LEAVE_ROOM = 12] = "LEAVE_ROOM", _[_.ROOM_DATA = 13] = "ROOM_DATA", _[_.ROOM_STATE = 14] = "ROOM_STATE", _[_.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", _[_.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", _[_.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", e.ErrorCode = void 0, (A = e.ErrorCode || (e.ErrorCode = {}))[A.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", A[A.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", A[A.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", A[A.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", A[A.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", A[A.AUTH_FAILED = 4215] = "AUTH_FAILED", A[A.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
            var R = {};

            function P(t, e) {
                R[t] = e
            }

            function C(t) {
                var e = R[t];
                if (!e) throw new Error("missing serializer: " + t);
                return e
            }
            var k = function() {
                    return {
                        emit: function(t) {
                            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            for (var o = this.events[t] || [], i = 0, r = o.length; i < r; i++) o[i].apply(o, e)
                        },
                        events: {},
                        on: function(t, e) {
                            var n, o = this;
                            return (null === (n = this.events[t]) || void 0 === n ? void 0 : n.push(e)) || (this.events[t] = [e]),
                                function() {
                                    var n;
                                    o.events[t] = null === (n = o.events[t]) || void 0 === n ? void 0 : n.filter((function(t) {
                                        return e !== t
                                    }))
                                }
                        }
                    }
                },
                D = function() {
                    function t() {
                        this.handlers = []
                    }
                    return t.prototype.register = function(t, e) {
                        return this.handlers.push(t), this
                    }, t.prototype.invoke = function() {
                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        this.handlers.forEach((function(n) {
                            return n.apply(t, e)
                        }))
                    }, t.prototype.invokeAsync = function() {
                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return Promise.all(this.handlers.map((function(n) {
                            return n.apply(t, e)
                        })))
                    }, t.prototype.remove = function(t) {
                        var e = this.handlers.indexOf(t);
                        this.handlers[e] = this.handlers[this.handlers.length - 1], this.handlers.pop()
                    }, t.prototype.clear = function() {
                        this.handlers = []
                    }, t
                }();

            function N() {
                var t = new D;

                function e(e) {
                    return t.register(e, null === this)
                }
                return e.once = function(e) {
                    var n = function() {
                        for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                        e.apply(this, o), t.remove(n)
                    };
                    t.register(n)
                }, e.remove = function(e) {
                    return t.remove(e)
                }, e.invoke = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return t.invoke.apply(t, e)
                }, e.invokeAsync = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return t.invokeAsync.apply(t, e)
                }, e.clear = function() {
                    return t.clear()
                }, e
            }

            function S(t) {
                var e = {
                    exports: {}
                };
                return t(e, e.exports), e.exports
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
            var M = S((function(t, e) {
                    ! function(t, n) {
                        n(e)
                    }(0, (function(t) {
                        var e = function(t, n) {
                            return e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }, e(t, n)
                        };

                        function n(t, n) {
                            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                            function o() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }

                        function o(t, e, n, o) {
                            var i, r = arguments.length,
                                s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                            else
                                for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                            return r > 3 && s && Object.defineProperty(e, n, s), s
                        }

                        function i(t, e, n) {
                            if (n || 2 === arguments.length)
                                for (var o, i = 0, r = e.length; i < r; i++) !o && i in e || (o || (o = Array.prototype.slice.call(e, 0, i)), o[i] = e[i]);
                            return t.concat(o || Array.prototype.slice.call(e))
                        }
                        var r, s = 255,
                            a = 213;
                        t.OPERATION = void 0, (r = t.OPERATION || (t.OPERATION = {}))[r.ADD = 128] = "ADD", r[r.REPLACE = 0] = "REPLACE", r[r.DELETE = 64] = "DELETE", r[r.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", r[r.TOUCH = 1] = "TOUCH", r[r.CLEAR = 10] = "CLEAR";
                        var c = function() {
                            function e(t, e, n) {
                                this.changed = !1, this.changes = new Map, this.allChanges = new Set, this.caches = {}, this.currentCustomOperation = 0, this.ref = t, this.setParent(e, n)
                            }
                            return e.prototype.setParent = function(t, e, n) {
                                var o = this;
                                if (this.indexes || (this.indexes = this.ref instanceof Rt ? this.ref._definition.indexes : {}), this.parent = t, this.parentIndex = n, e)
                                    if (this.root = e, this.ref instanceof Rt) {
                                        var i = this.ref._definition;
                                        for (var r in i.schema) {
                                            var s = this.ref[r];
                                            if (s && s.$changes) {
                                                var a = i.indexes[r];
                                                s.$changes.setParent(this.ref, e, a)
                                            }
                                        }
                                    } else "object" == typeof this.ref && this.ref.forEach((function(t, e) {
                                        if (t instanceof Rt) {
                                            var n = t.$changes,
                                                i = o.ref.$changes.indexes[e];
                                            n.setParent(o.ref, o.root, i)
                                        }
                                    }))
                            }, e.prototype.operation = function(t) {
                                this.changes.set(--this.currentCustomOperation, t)
                            }, e.prototype.change = function(e, n) {
                                void 0 === n && (n = t.OPERATION.ADD);
                                var o = "number" == typeof e ? e : this.indexes[e];
                                this.assertValidIndex(o, e);
                                var i = this.changes.get(o);
                                i && i.op !== t.OPERATION.DELETE && i.op !== t.OPERATION.TOUCH || this.changes.set(o, {
                                    op: i && i.op === t.OPERATION.DELETE ? t.OPERATION.DELETE_AND_ADD : n,
                                    index: o
                                }), this.allChanges.add(o), this.changed = !0, this.touchParents()
                            }, e.prototype.touch = function(e) {
                                var n = "number" == typeof e ? e : this.indexes[e];
                                this.assertValidIndex(n, e), this.changes.has(n) || this.changes.set(n, {
                                    op: t.OPERATION.TOUCH,
                                    index: n
                                }), this.allChanges.add(n), this.touchParents()
                            }, e.prototype.touchParents = function() {
                                this.parent && this.parent.$changes.touch(this.parentIndex)
                            }, e.prototype.getType = function(t) {
                                if (this.ref._definition) return (e = this.ref._definition).schema[e.fieldsByIndex[t]];
                                var e, n = (e = this.parent._definition).schema[e.fieldsByIndex[this.parentIndex]];
                                return Object.values(n)[0]
                            }, e.prototype.getChildrenFilter = function() {
                                var t = this.parent._definition.childFilters;
                                return t && t[this.parentIndex]
                            }, e.prototype.getValue = function(t) {
                                return this.ref.getByIndex(t)
                            }, e.prototype.delete = function(e) {
                                var n = "number" == typeof e ? e : this.indexes[e];
                                if (void 0 !== n) {
                                    var o = this.getValue(n);
                                    this.changes.set(n, {
                                        op: t.OPERATION.DELETE,
                                        index: n
                                    }), this.allChanges.delete(n), delete this.caches[n], o && o.$changes && (o.$changes.parent = void 0), this.changed = !0, this.touchParents()
                                } else console.warn("@colyseus/schema ".concat(this.ref.constructor.name, ": trying to delete non-existing index: ").concat(e, " (").concat(n, ")"))
                            }, e.prototype.discard = function(e, n) {
                                var o = this;
                                void 0 === e && (e = !1), void 0 === n && (n = !1), this.ref instanceof Rt || this.changes.forEach((function(e) {
                                    if (e.op === t.OPERATION.DELETE) {
                                        var n = o.ref.getIndex(e.index);
                                        delete o.indexes[n]
                                    }
                                })), this.changes.clear(), this.changed = e, n && this.allChanges.clear(), this.currentCustomOperation = 0
                            }, e.prototype.discardAll = function() {
                                var t = this;
                                this.changes.forEach((function(e) {
                                    var n = t.getValue(e.index);
                                    n && n.$changes && n.$changes.discardAll()
                                })), this.discard()
                            }, e.prototype.cache = function(t, e) {
                                this.caches[t] = e
                            }, e.prototype.clone = function() {
                                return new e(this.ref, this.parent, this.root)
                            }, e.prototype.ensureRefId = function() {
                                void 0 === this.refId && (this.refId = this.root.getNextUniqueId())
                            }, e.prototype.assertValidIndex = function(t, e) {
                                if (void 0 === t) throw new Error('ChangeTree: missing index for field "'.concat(e, '"'))
                            }, e
                        }();

                        function f(t, e, n, o) {
                            return t[e] || (t[e] = []), t[e].push(n), null == o || o.forEach((function(t, e) {
                                    return n(t, e)
                                })),
                                function() {
                                    return u(t[e], t[e].indexOf(n))
                                }
                        }

                        function h(e) {
                            var n = this,
                                o = "string" != typeof this.$changes.getType();
                            this.$items.forEach((function(i, r) {
                                e.push({
                                    refId: n.$changes.refId,
                                    op: t.OPERATION.DELETE,
                                    field: r,
                                    value: void 0,
                                    previousValue: i
                                }), o && n.$changes.root.removeRef(i.$changes.refId)
                            }))
                        }

                        function u(t, e) {
                            if (-1 === e || e >= t.length) return !1;
                            for (var n = t.length - 1, o = e; o < n; o++) t[o] = t[o + 1];
                            return t.length = n, !0
                        }
                        var d = function(t, e) {
                            var n = t.toString(),
                                o = e.toString();
                            return n < o ? -1 : n > o ? 1 : 0
                        };

                        function l(t) {
                            return t.$proxy = !0, t = new Proxy(t, {
                                get: function(t, e) {
                                    return "symbol" == typeof e || isNaN(e) ? t[e] : t.at(e)
                                },
                                set: function(t, e, n) {
                                    if ("symbol" == typeof e || isNaN(e)) t[e] = n;
                                    else {
                                        var o = Array.from(t.$items.keys()),
                                            i = parseInt(o[e] || e);
                                        null == n ? t.deleteAt(i) : t.setAt(i, n)
                                    }
                                    return !0
                                },
                                deleteProperty: function(t, e) {
                                    return "number" == typeof e ? t.deleteAt(e) : delete t[e], !0
                                }
                            })
                        }
                        var p = function() {
                            function e() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                this.$changes = new c(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, this.push.apply(this, t)
                            }
                            return e.prototype.onAdd = function(e, n) {
                                return void 0 === n && (n = !0), f(this.$callbacks || (this.$callbacks = []), t.OPERATION.ADD, e, n ? this.$items : void 0)
                            }, e.prototype.onRemove = function(e) {
                                return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.DELETE, e)
                            }, e.prototype.onChange = function(e) {
                                return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.REPLACE, e)
                            }, e.is = function(t) {
                                return Array.isArray(t) || void 0 !== t.array
                            }, Object.defineProperty(e.prototype, "length", {
                                get: function() {
                                    return this.$items.size
                                },
                                set: function(t) {
                                    0 === t ? this.clear() : this.splice(t, this.length - t)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.push = function() {
                                for (var t, e = this, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                                return n.forEach((function(n) {
                                    t = e.$refId++, e.setAt(t, n)
                                })), t
                            }, e.prototype.pop = function() {
                                var t = Array.from(this.$indexes.values()).pop();
                                if (void 0 !== t) {
                                    this.$changes.delete(t), this.$indexes.delete(t);
                                    var e = this.$items.get(t);
                                    return this.$items.delete(t), e
                                }
                            }, e.prototype.at = function(t) {
                                var e = Array.from(this.$items.keys())[t];
                                return this.$items.get(e)
                            }, e.prototype.setAt = function(e, n) {
                                var o, i;
                                void 0 !== n.$changes && n.$changes.setParent(this, this.$changes.root, e);
                                var r = null !== (i = null === (o = this.$changes.indexes[e]) || void 0 === o ? void 0 : o.op) && void 0 !== i ? i : t.OPERATION.ADD;
                                this.$changes.indexes[e] = e, this.$indexes.set(e, e), this.$items.set(e, n), this.$changes.change(e, r)
                            }, e.prototype.deleteAt = function(t) {
                                var e = Array.from(this.$items.keys())[t];
                                return void 0 !== e && this.$deleteAt(e)
                            }, e.prototype.$deleteAt = function(t) {
                                return this.$changes.delete(t), this.$indexes.delete(t), this.$items.delete(t)
                            }, e.prototype.clear = function(e) {
                                this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && h.call(this, e), this.$items.clear(), this.$changes.operation({
                                    index: 0,
                                    op: t.OPERATION.CLEAR
                                }), this.$changes.touchParents()
                            }, e.prototype.concat = function() {
                                for (var t, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                                return new(e.bind.apply(e, i([void 0], (t = Array.from(this.$items.values())).concat.apply(t, n), !1)))
                            }, e.prototype.join = function(t) {
                                return Array.from(this.$items.values()).join(t)
                            }, e.prototype.reverse = function() {
                                var t = this,
                                    e = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).reverse().forEach((function(n, o) {
                                    t.setAt(e[o], n)
                                })), this
                            }, e.prototype.shift = function() {
                                var t = Array.from(this.$items.keys()).shift();
                                if (void 0 !== t) {
                                    var e = this.$items.get(t);
                                    return this.$deleteAt(t), e
                                }
                            }, e.prototype.slice = function(t, n) {
                                var o = new e;
                                return o.push.apply(o, Array.from(this.$items.values()).slice(t, n)), o
                            }, e.prototype.sort = function(t) {
                                var e = this;
                                void 0 === t && (t = d);
                                var n = Array.from(this.$items.keys());
                                return Array.from(this.$items.values()).sort(t).forEach((function(t, o) {
                                    e.setAt(n[o], t)
                                })), this
                            }, e.prototype.splice = function(t, e) {
                                void 0 === e && (e = this.length - t);
                                for (var n = Array.from(this.$items.keys()), o = [], i = t; i < t + e; i++) o.push(this.$items.get(n[i])), this.$deleteAt(n[i]);
                                return o
                            }, e.prototype.unshift = function() {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var o = this.length,
                                    i = e.length,
                                    r = Array.from(this.$items.values());
                                return e.forEach((function(e, n) {
                                    t.setAt(n, e)
                                })), r.forEach((function(e, n) {
                                    t.setAt(i + n, e)
                                })), o + i
                            }, e.prototype.indexOf = function(t, e) {
                                return Array.from(this.$items.values()).indexOf(t, e)
                            }, e.prototype.lastIndexOf = function(t, e) {
                                return void 0 === e && (e = this.length - 1), Array.from(this.$items.values()).lastIndexOf(t, e)
                            }, e.prototype.every = function(t, e) {
                                return Array.from(this.$items.values()).every(t, e)
                            }, e.prototype.some = function(t, e) {
                                return Array.from(this.$items.values()).some(t, e)
                            }, e.prototype.forEach = function(t, e) {
                                Array.from(this.$items.values()).forEach(t, e)
                            }, e.prototype.map = function(t, e) {
                                return Array.from(this.$items.values()).map(t, e)
                            }, e.prototype.filter = function(t, e) {
                                return Array.from(this.$items.values()).filter(t, e)
                            }, e.prototype.reduce = function(t, e) {
                                return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments)
                            }, e.prototype.reduceRight = function(t, e) {
                                return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments)
                            }, e.prototype.find = function(t, e) {
                                return Array.from(this.$items.values()).find(t, e)
                            }, e.prototype.findIndex = function(t, e) {
                                return Array.from(this.$items.values()).findIndex(t, e)
                            }, e.prototype.fill = function(t, e, n) {
                                throw new Error("ArraySchema#fill() not implemented")
                            }, e.prototype.copyWithin = function(t, e, n) {
                                throw new Error("ArraySchema#copyWithin() not implemented")
                            }, e.prototype.toString = function() {
                                return this.$items.toString()
                            }, e.prototype.toLocaleString = function() {
                                return this.$items.toLocaleString()
                            }, e.prototype[Symbol.iterator] = function() {
                                return Array.from(this.$items.values())[Symbol.iterator]()
                            }, e.prototype.entries = function() {
                                return this.$items.entries()
                            }, e.prototype.keys = function() {
                                return this.$items.keys()
                            }, e.prototype.values = function() {
                                return this.$items.values()
                            }, e.prototype.includes = function(t, e) {
                                return Array.from(this.$items.values()).includes(t, e)
                            }, e.prototype.flatMap = function(t, e) {
                                throw new Error("ArraySchema#flatMap() is not supported.")
                            }, e.prototype.flat = function(t) {
                                throw new Error("ArraySchema#flat() is not supported.")
                            }, e.prototype.findLast = function() {
                                var t = Array.from(this.$items.values());
                                return t.findLast.apply(t, arguments)
                            }, e.prototype.findLastIndex = function() {
                                var t = Array.from(this.$items.values());
                                return t.findLastIndex.apply(t, arguments)
                            }, e.prototype.setIndex = function(t, e) {
                                this.$indexes.set(t, e)
                            }, e.prototype.getIndex = function(t) {
                                return this.$indexes.get(t)
                            }, e.prototype.getByIndex = function(t) {
                                return this.$items.get(this.$indexes.get(t))
                            }, e.prototype.deleteByIndex = function(t) {
                                var e = this.$indexes.get(t);
                                this.$items.delete(e), this.$indexes.delete(t)
                            }, e.prototype.toArray = function() {
                                return Array.from(this.$items.values())
                            }, e.prototype.toJSON = function() {
                                return this.toArray().map((function(t) {
                                    return "function" == typeof t.toJSON ? t.toJSON() : t
                                }))
                            }, e.prototype.clone = function(t) {
                                return t ? new(e.bind.apply(e, i([void 0], Array.from(this.$items.values()), !1))) : new(e.bind.apply(e, i([void 0], this.map((function(t) {
                                    return t.$changes ? t.clone() : t
                                })), !1)))
                            }, e
                        }();

                        function v(t) {
                            return t.$proxy = !0, t = new Proxy(t, {
                                get: function(t, e) {
                                    return "symbol" != typeof e && void 0 === t[e] ? t.get(e) : t[e]
                                },
                                set: function(t, e, n) {
                                    return "symbol" != typeof e && -1 === e.indexOf("$") && "onAdd" !== e && "onRemove" !== e && "onChange" !== e ? t.set(e, n) : t[e] = n, !0
                                },
                                deleteProperty: function(t, e) {
                                    return t.delete(e), !0
                                }
                            })
                        }
                        var y = function() {
                                function e(t) {
                                    var n = this;
                                    if (this.$changes = new c(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, t)
                                        if (t instanceof Map || t instanceof e) t.forEach((function(t, e) {
                                            return n.set(e, t)
                                        }));
                                        else
                                            for (var o in t) this.set(o, t[o])
                                }
                                return e.prototype.onAdd = function(e, n) {
                                    return void 0 === n && (n = !0), f(this.$callbacks || (this.$callbacks = []), t.OPERATION.ADD, e, n ? this.$items : void 0)
                                }, e.prototype.onRemove = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.DELETE, e)
                                }, e.prototype.onChange = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.REPLACE, e)
                                }, e.is = function(t) {
                                    return void 0 !== t.map
                                }, e.prototype[Symbol.iterator] = function() {
                                    return this.$items[Symbol.iterator]()
                                }, Object.defineProperty(e.prototype, Symbol.toStringTag, {
                                    get: function() {
                                        return this.$items[Symbol.toStringTag]
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.set = function(e, n) {
                                    if (null == n) throw new Error("MapSchema#set('".concat(e, "', ").concat(n, "): trying to set ").concat(n, " value on '").concat(e, "'."));
                                    var o = void 0 !== this.$changes.indexes[e],
                                        i = o ? this.$changes.indexes[e] : this.$refId++,
                                        r = o ? t.OPERATION.REPLACE : t.OPERATION.ADD,
                                        s = void 0 !== n.$changes;
                                    return s && n.$changes.setParent(this, this.$changes.root, i), o ? s && this.$items.get(e) !== n && (r = t.OPERATION.ADD) : (this.$changes.indexes[e] = i, this.$indexes.set(i, e)), this.$items.set(e, n), this.$changes.change(e, r), this
                                }, e.prototype.get = function(t) {
                                    return this.$items.get(t)
                                }, e.prototype.delete = function(t) {
                                    return this.$changes.delete(t), this.$items.delete(t)
                                }, e.prototype.clear = function(e) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && h.call(this, e), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: t.OPERATION.CLEAR
                                    }), this.$changes.touchParents()
                                }, e.prototype.has = function(t) {
                                    return this.$items.has(t)
                                }, e.prototype.forEach = function(t) {
                                    this.$items.forEach(t)
                                }, e.prototype.entries = function() {
                                    return this.$items.entries()
                                }, e.prototype.keys = function() {
                                    return this.$items.keys()
                                }, e.prototype.values = function() {
                                    return this.$items.values()
                                }, Object.defineProperty(e.prototype, "size", {
                                    get: function() {
                                        return this.$items.size
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.setIndex = function(t, e) {
                                    this.$indexes.set(t, e)
                                }, e.prototype.getIndex = function(t) {
                                    return this.$indexes.get(t)
                                }, e.prototype.getByIndex = function(t) {
                                    return this.$items.get(this.$indexes.get(t))
                                }, e.prototype.deleteByIndex = function(t) {
                                    var e = this.$indexes.get(t);
                                    this.$items.delete(e), this.$indexes.delete(t)
                                }, e.prototype.toJSON = function() {
                                    var t = {};
                                    return this.forEach((function(e, n) {
                                        t[n] = "function" == typeof e.toJSON ? e.toJSON() : e
                                    })), t
                                }, e.prototype.clone = function(t) {
                                    var n;
                                    return t ? n = Object.assign(new e, this) : (n = new e, this.forEach((function(t, e) {
                                        t.$changes ? n.set(e, t.clone()) : n.set(e, t)
                                    }))), n
                                }, e
                            }(),
                            g = {};

                        function m(t, e) {
                            g[t] = e
                        }

                        function w(t) {
                            return g[t]
                        }
                        var E = function() {
                            function t() {
                                this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {}
                            }
                            return t.create = function(e) {
                                var n = new t;
                                return n.schema = Object.assign({}, e && e.schema || {}), n.indexes = Object.assign({}, e && e.indexes || {}), n.fieldsByIndex = Object.assign({}, e && e.fieldsByIndex || {}), n.descriptors = Object.assign({}, e && e.descriptors || {}), n.deprecated = Object.assign({}, e && e.deprecated || {}), n
                            }, t.prototype.addField = function(t, e) {
                                var n = this.getNextFieldIndex();
                                this.fieldsByIndex[n] = t, this.indexes[t] = n, this.schema[t] = Array.isArray(e) ? {
                                    array: e[0]
                                } : e
                            }, t.prototype.hasField = function(t) {
                                return void 0 !== this.indexes[t]
                            }, t.prototype.addFilter = function(t, e) {
                                return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[t]] = e, this.indexesWithFilters.push(this.indexes[t]), !0
                            }, t.prototype.addChildrenFilter = function(t, e) {
                                var n = this.indexes[t],
                                    o = this.schema[t];
                                if (w(Object.keys(o)[0])) return this.childFilters || (this.childFilters = {}), this.childFilters[n] = e, !0;
                                console.warn("@filterChildren: field '".concat(t, "' can't have children. Ignoring filter."))
                            }, t.prototype.getChildrenFilter = function(t) {
                                return this.childFilters && this.childFilters[this.indexes[t]]
                            }, t.prototype.getNextFieldIndex = function() {
                                return Object.keys(this.schema || {}).length
                            }, t
                        }();

                        function A(t) {
                            return t._context && t._context.useFilters
                        }
                        var _ = function() {
                                function t() {
                                    this.types = {}, this.schemas = new Map, this.useFilters = !1
                                }
                                return t.prototype.has = function(t) {
                                    return this.schemas.has(t)
                                }, t.prototype.get = function(t) {
                                    return this.types[t]
                                }, t.prototype.add = function(t, e) {
                                    void 0 === e && (e = this.schemas.size), t._definition = E.create(t._definition), t._typeid = e, this.types[e] = t, this.schemas.set(t, e)
                                }, t.create = function(e) {
                                    return void 0 === e && (e = {}),
                                        function(n) {
                                            return e.context || (e.context = new t), $(n, e)
                                        }
                                }, t
                            }(),
                            O = new _;

                        function $(t, e) {
                            return void 0 === e && (e = {}),
                                function(n, o) {
                                    var r = e.context || O,
                                        s = n.constructor;
                                    if (s._context = r, !t) throw new Error("".concat(s.name, ': @type() reference provided for "').concat(o, "\" is undefined. Make sure you don't have any circular dependencies."));
                                    r.has(s) || r.add(s);
                                    var a = s._definition;
                                    if (a.addField(o, t), a.descriptors[o]) {
                                        if (a.deprecated[o]) return;
                                        try {
                                            throw new Error("@colyseus/schema: Duplicate '".concat(o, "' definition on '").concat(s.name, "'.\nCheck @type() annotation"))
                                        } catch (t) {
                                            var c = t.stack.split("\n")[4].trim();
                                            throw new Error("".concat(t.message, " ").concat(c))
                                        }
                                    }
                                    var f = p.is(t),
                                        h = !f && y.is(t);
                                    if ("string" != typeof t && !Rt.is(t)) {
                                        var u = Object.values(t)[0];
                                        "string" == typeof u || r.has(u) || r.add(u)
                                    }
                                    if (e.manual) a.descriptors[o] = {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    };
                                    else {
                                        var d = "_".concat(o);
                                        a.descriptors[d] = {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !0
                                        }, a.descriptors[o] = {
                                            get: function() {
                                                return this[d]
                                            },
                                            set: function(t) {
                                                t !== this[d] && (null != t ? (!f || t instanceof p || (t = new(p.bind.apply(p, i([void 0], t, !1)))), !h || t instanceof y || (t = new y(t)), void 0 === t.$proxy && (h ? t = v(t) : f && (t = l(t))), this.$changes.change(o), t.$changes && t.$changes.setParent(this, this.$changes.root, this._definition.indexes[o])) : this[d] && this.$changes.delete(o), this[d] = t)
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        }
                                    }
                                }
                        }

                        function b(t) {
                            return function(e, n) {
                                var o = e.constructor;
                                o._definition.addFilter(n, t) && (o._context.useFilters = !0)
                            }
                        }

                        function I(t) {
                            return function(e, n) {
                                var o = e.constructor;
                                o._definition.addChildrenFilter(n, t) && (o._context.useFilters = !0)
                            }
                        }

                        function T(t) {
                            return void 0 === t && (t = !0),
                                function(e, n) {
                                    var o = e.constructor._definition;
                                    o.deprecated[n] = !0, t && (o.descriptors[n] = {
                                        get: function() {
                                            throw new Error("".concat(n, " is deprecated."))
                                        },
                                        set: function(t) {},
                                        enumerable: !1,
                                        configurable: !0
                                    })
                                }
                        }

                        function x(t, e, n) {
                            for (var o in void 0 === n && (n = {}), n.context || (n.context = t._context || n.context || O), e) $(e[o], n)(t.prototype, o);
                            return t
                        }

                        function R(t) {
                            for (var e = 0, n = 0, o = 0, i = t.length; o < i; o++)(e = t.charCodeAt(o)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (o++, n += 4);
                            return n
                        }

                        function P(t, e, n) {
                            for (var o = 0, i = 0, r = n.length; i < r; i++)(o = n.charCodeAt(i)) < 128 ? t[e++] = o : o < 2048 ? (t[e++] = 192 | o >> 6, t[e++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (t[e++] = 224 | o >> 12, t[e++] = 128 | o >> 6 & 63, t[e++] = 128 | 63 & o) : (i++, o = 65536 + ((1023 & o) << 10 | 1023 & n.charCodeAt(i)), t[e++] = 240 | o >> 18, t[e++] = 128 | o >> 12 & 63, t[e++] = 128 | o >> 6 & 63, t[e++] = 128 | 63 & o)
                        }

                        function C(t, e) {
                            t.push(255 & e)
                        }

                        function k(t, e) {
                            t.push(255 & e)
                        }

                        function D(t, e) {
                            t.push(255 & e), t.push(e >> 8 & 255)
                        }

                        function N(t, e) {
                            t.push(255 & e), t.push(e >> 8 & 255)
                        }

                        function S(t, e) {
                            t.push(255 & e), t.push(e >> 8 & 255), t.push(e >> 16 & 255), t.push(e >> 24 & 255)
                        }

                        function M(t, e) {
                            var n = e >> 24,
                                o = e >> 16,
                                i = e >> 8,
                                r = e;
                            t.push(255 & r), t.push(255 & i), t.push(255 & o), t.push(255 & n)
                        }

                        function L(t, e) {
                            var n = Math.floor(e / Math.pow(2, 32));
                            M(t, e >>> 0), M(t, n)
                        }

                        function j(t, e) {
                            var n = e / Math.pow(2, 32) >> 0;
                            M(t, e >>> 0), M(t, n)
                        }

                        function U(t, e) {
                            J(t, e)
                        }

                        function F(t, e) {
                            z(t, e)
                        }
                        var H = new Int32Array(2),
                            B = new Float32Array(H.buffer),
                            V = new Float64Array(H.buffer);

                        function J(t, e) {
                            B[0] = e, S(t, H[0])
                        }

                        function z(t, e) {
                            V[0] = e, S(t, H[0]), S(t, H[1])
                        }

                        function W(t, e) {
                            return k(t, e ? 1 : 0)
                        }

                        function q(t, e) {
                            e || (e = "");
                            var n = R(e),
                                o = 0;
                            if (n < 32) t.push(160 | n), o = 1;
                            else if (n < 256) t.push(217), k(t, n), o = 2;
                            else if (n < 65536) t.push(218), N(t, n), o = 3;
                            else {
                                if (!(n < 4294967296)) throw new Error("String too long");
                                t.push(219), M(t, n), o = 5
                            }
                            return P(t, t.length, e), o + n
                        }

                        function K(t, e) {
                            return isNaN(e) ? K(t, 0) : isFinite(e) ? e !== (0 | e) ? (t.push(203), z(t, e), 9) : e >= 0 ? e < 128 ? (k(t, e), 1) : e < 256 ? (t.push(204), k(t, e), 2) : e < 65536 ? (t.push(205), N(t, e), 3) : e < 4294967296 ? (t.push(206), M(t, e), 5) : (t.push(207), j(t, e), 9) : e >= -32 ? (t.push(224 | e + 32), 1) : e >= -128 ? (t.push(208), C(t, e), 2) : e >= -32768 ? (t.push(209), D(t, e), 3) : e >= -2147483648 ? (t.push(210), S(t, e), 5) : (t.push(211), L(t, e), 9) : K(t, e > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER)
                        }
                        var Y = Object.freeze({
                            __proto__: null,
                            utf8Write: P,
                            int8: C,
                            uint8: k,
                            int16: D,
                            uint16: N,
                            int32: S,
                            uint32: M,
                            int64: L,
                            uint64: j,
                            float32: U,
                            float64: F,
                            writeFloat32: J,
                            writeFloat64: z,
                            boolean: W,
                            string: q,
                            number: K
                        });

                        function G(t, e, n) {
                            for (var o = "", i = 0, r = e, s = e + n; r < s; r++) {
                                var a = t[r];
                                0 != (128 & a) ? 192 != (224 & a) ? 224 != (240 & a) ? 240 != (248 & a) ? console.error("Invalid byte " + a.toString(16)) : (i = (7 & a) << 18 | (63 & t[++r]) << 12 | (63 & t[++r]) << 6 | (63 & t[++r]) << 0) >= 65536 ? (i -= 65536, o += String.fromCharCode(55296 + (i >>> 10), 56320 + (1023 & i))) : o += String.fromCharCode(i) : o += String.fromCharCode((15 & a) << 12 | (63 & t[++r]) << 6 | (63 & t[++r]) << 0) : o += String.fromCharCode((31 & a) << 6 | 63 & t[++r]) : o += String.fromCharCode(a)
                            }
                            return o
                        }

                        function X(t, e) {
                            return Q(t, e) << 24 >> 24
                        }

                        function Q(t, e) {
                            return t[e.offset++]
                        }

                        function Z(t, e) {
                            return tt(t, e) << 16 >> 16
                        }

                        function tt(t, e) {
                            return t[e.offset++] | t[e.offset++] << 8
                        }

                        function et(t, e) {
                            return t[e.offset++] | t[e.offset++] << 8 | t[e.offset++] << 16 | t[e.offset++] << 24
                        }

                        function nt(t, e) {
                            return et(t, e) >>> 0
                        }

                        function ot(t, e) {
                            return ht(t, e)
                        }

                        function it(t, e) {
                            return ut(t, e)
                        }

                        function rt(t, e) {
                            var n = nt(t, e);
                            return et(t, e) * Math.pow(2, 32) + n
                        }

                        function st(t, e) {
                            var n = nt(t, e);
                            return nt(t, e) * Math.pow(2, 32) + n
                        }
                        var at = new Int32Array(2),
                            ct = new Float32Array(at.buffer),
                            ft = new Float64Array(at.buffer);

                        function ht(t, e) {
                            return at[0] = et(t, e), ct[0]
                        }

                        function ut(t, e) {
                            return at[0] = et(t, e), at[1] = et(t, e), ft[0]
                        }

                        function dt(t, e) {
                            return Q(t, e) > 0
                        }

                        function lt(t, e) {
                            var n, o = t[e.offset++];
                            o < 192 ? n = 31 & o : 217 === o ? n = Q(t, e) : 218 === o ? n = tt(t, e) : 219 === o && (n = nt(t, e));
                            var i = G(t, e.offset, n);
                            return e.offset += n, i
                        }

                        function pt(t, e) {
                            var n = t[e.offset];
                            return n < 192 && n > 160 || 217 === n || 218 === n || 219 === n
                        }

                        function vt(t, e) {
                            var n = t[e.offset++];
                            return n < 128 ? n : 202 === n ? ht(t, e) : 203 === n ? ut(t, e) : 204 === n ? Q(t, e) : 205 === n ? tt(t, e) : 206 === n ? nt(t, e) : 207 === n ? st(t, e) : 208 === n ? X(t, e) : 209 === n ? Z(t, e) : 210 === n ? et(t, e) : 211 === n ? rt(t, e) : n > 223 ? -1 * (255 - n + 1) : void 0
                        }

                        function yt(t, e) {
                            var n = t[e.offset];
                            return n < 128 || n >= 202 && n <= 211
                        }

                        function gt(t, e) {
                            return t[e.offset] < 160
                        }

                        function mt(t, e) {
                            return t[e.offset - 1] === s && (t[e.offset] < 128 || t[e.offset] >= 202 && t[e.offset] <= 211)
                        }
                        var wt = Object.freeze({
                                __proto__: null,
                                int8: X,
                                uint8: Q,
                                int16: Z,
                                uint16: tt,
                                int32: et,
                                uint32: nt,
                                float32: ot,
                                float64: it,
                                int64: rt,
                                uint64: st,
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
                            Et = function() {
                                function e(t) {
                                    var e = this;
                                    this.$changes = new c(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, t && t.forEach((function(t) {
                                        return e.add(t)
                                    }))
                                }
                                return e.prototype.onAdd = function(e, n) {
                                    return void 0 === n && (n = !0), f(this.$callbacks || (this.$callbacks = []), t.OPERATION.ADD, e, n ? this.$items : void 0)
                                }, e.prototype.onRemove = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.DELETE, e)
                                }, e.prototype.onChange = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.REPLACE, e)
                                }, e.is = function(t) {
                                    return void 0 !== t.collection
                                }, e.prototype.add = function(t) {
                                    var e = this.$refId++;
                                    return void 0 !== t.$changes && t.$changes.setParent(this, this.$changes.root, e), this.$changes.indexes[e] = e, this.$indexes.set(e, e), this.$items.set(e, t), this.$changes.change(e), e
                                }, e.prototype.at = function(t) {
                                    var e = Array.from(this.$items.keys())[t];
                                    return this.$items.get(e)
                                }, e.prototype.entries = function() {
                                    return this.$items.entries()
                                }, e.prototype.delete = function(t) {
                                    for (var e, n, o = this.$items.entries();
                                        (n = o.next()) && !n.done;)
                                        if (t === n.value[1]) {
                                            e = n.value[0];
                                            break
                                        } return void 0 !== e && (this.$changes.delete(e), this.$indexes.delete(e), this.$items.delete(e))
                                }, e.prototype.clear = function(e) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && h.call(this, e), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: t.OPERATION.CLEAR
                                    }), this.$changes.touchParents()
                                }, e.prototype.has = function(t) {
                                    return Array.from(this.$items.values()).some((function(e) {
                                        return e === t
                                    }))
                                }, e.prototype.forEach = function(t) {
                                    var e = this;
                                    this.$items.forEach((function(n, o, i) {
                                        return t(n, o, e)
                                    }))
                                }, e.prototype.values = function() {
                                    return this.$items.values()
                                }, Object.defineProperty(e.prototype, "size", {
                                    get: function() {
                                        return this.$items.size
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.setIndex = function(t, e) {
                                    this.$indexes.set(t, e)
                                }, e.prototype.getIndex = function(t) {
                                    return this.$indexes.get(t)
                                }, e.prototype.getByIndex = function(t) {
                                    return this.$items.get(this.$indexes.get(t))
                                }, e.prototype.deleteByIndex = function(t) {
                                    var e = this.$indexes.get(t);
                                    this.$items.delete(e), this.$indexes.delete(t)
                                }, e.prototype.toArray = function() {
                                    return Array.from(this.$items.values())
                                }, e.prototype.toJSON = function() {
                                    var t = [];
                                    return this.forEach((function(e, n) {
                                        t.push("function" == typeof e.toJSON ? e.toJSON() : e)
                                    })), t
                                }, e.prototype.clone = function(t) {
                                    var n;
                                    return t ? n = Object.assign(new e, this) : (n = new e, this.forEach((function(t) {
                                        t.$changes ? n.add(t.clone()) : n.add(t)
                                    }))), n
                                }, e
                            }(),
                            At = function() {
                                function e(t) {
                                    var e = this;
                                    this.$changes = new c(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, t && t.forEach((function(t) {
                                        return e.add(t)
                                    }))
                                }
                                return e.prototype.onAdd = function(e, n) {
                                    return void 0 === n && (n = !0), f(this.$callbacks || (this.$callbacks = []), t.OPERATION.ADD, e, n ? this.$items : void 0)
                                }, e.prototype.onRemove = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.DELETE, e)
                                }, e.prototype.onChange = function(e) {
                                    return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.REPLACE, e)
                                }, e.is = function(t) {
                                    return void 0 !== t.set
                                }, e.prototype.add = function(e) {
                                    var n, o;
                                    if (this.has(e)) return !1;
                                    var i = this.$refId++;
                                    void 0 !== e.$changes && e.$changes.setParent(this, this.$changes.root, i);
                                    var r = null !== (o = null === (n = this.$changes.indexes[i]) || void 0 === n ? void 0 : n.op) && void 0 !== o ? o : t.OPERATION.ADD;
                                    return this.$changes.indexes[i] = i, this.$indexes.set(i, i), this.$items.set(i, e), this.$changes.change(i, r), i
                                }, e.prototype.entries = function() {
                                    return this.$items.entries()
                                }, e.prototype.delete = function(t) {
                                    for (var e, n, o = this.$items.entries();
                                        (n = o.next()) && !n.done;)
                                        if (t === n.value[1]) {
                                            e = n.value[0];
                                            break
                                        } return void 0 !== e && (this.$changes.delete(e), this.$indexes.delete(e), this.$items.delete(e))
                                }, e.prototype.clear = function(e) {
                                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && h.call(this, e), this.$items.clear(), this.$changes.operation({
                                        index: 0,
                                        op: t.OPERATION.CLEAR
                                    }), this.$changes.touchParents()
                                }, e.prototype.has = function(t) {
                                    for (var e, n = this.$items.values(), o = !1;
                                        (e = n.next()) && !e.done;)
                                        if (t === e.value) {
                                            o = !0;
                                            break
                                        } return o
                                }, e.prototype.forEach = function(t) {
                                    var e = this;
                                    this.$items.forEach((function(n, o, i) {
                                        return t(n, o, e)
                                    }))
                                }, e.prototype.values = function() {
                                    return this.$items.values()
                                }, Object.defineProperty(e.prototype, "size", {
                                    get: function() {
                                        return this.$items.size
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), e.prototype.setIndex = function(t, e) {
                                    this.$indexes.set(t, e)
                                }, e.prototype.getIndex = function(t) {
                                    return this.$indexes.get(t)
                                }, e.prototype.getByIndex = function(t) {
                                    return this.$items.get(this.$indexes.get(t))
                                }, e.prototype.deleteByIndex = function(t) {
                                    var e = this.$indexes.get(t);
                                    this.$items.delete(e), this.$indexes.delete(t)
                                }, e.prototype.toArray = function() {
                                    return Array.from(this.$items.values())
                                }, e.prototype.toJSON = function() {
                                    var t = [];
                                    return this.forEach((function(e, n) {
                                        t.push("function" == typeof e.toJSON ? e.toJSON() : e)
                                    })), t
                                }, e.prototype.clone = function(t) {
                                    var n;
                                    return t ? n = Object.assign(new e, this) : (n = new e, this.forEach((function(t) {
                                        t.$changes ? n.add(t.clone()) : n.add(t)
                                    }))), n
                                }, e
                            }(),
                            _t = function() {
                                function t() {
                                    this.refIds = new WeakSet, this.containerIndexes = new WeakMap
                                }
                                return t.prototype.addRefId = function(t) {
                                    this.refIds.has(t) || (this.refIds.add(t), this.containerIndexes.set(t, new Set))
                                }, t.get = function(e) {
                                    return void 0 === e.$filterState && (e.$filterState = new t), e.$filterState
                                }, t
                            }(),
                            Ot = function() {
                                function t() {
                                    this.refs = new Map, this.refCounts = {}, this.deletedRefs = new Set, this.nextUniqueId = 0
                                }
                                return t.prototype.getNextUniqueId = function() {
                                    return this.nextUniqueId++
                                }, t.prototype.addRef = function(t, e, n) {
                                    void 0 === n && (n = !0), this.refs.set(t, e), n && (this.refCounts[t] = (this.refCounts[t] || 0) + 1)
                                }, t.prototype.removeRef = function(t) {
                                    this.refCounts[t] = this.refCounts[t] - 1, this.deletedRefs.add(t)
                                }, t.prototype.clearRefs = function() {
                                    this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {}
                                }, t.prototype.garbageCollectDeletedRefs = function() {
                                    var t = this;
                                    this.deletedRefs.forEach((function(e) {
                                        if (!(t.refCounts[e] > 0)) {
                                            var n = t.refs.get(e);
                                            if (n instanceof Rt)
                                                for (var o in n._definition.schema) "string" != typeof n._definition.schema[o] && n[o] && n[o].$changes && t.removeRef(n[o].$changes.refId);
                                            else {
                                                var i = n.$changes.parent._definition,
                                                    r = i.schema[i.fieldsByIndex[n.$changes.parentIndex]];
                                                "function" == typeof Object.values(r)[0] && Array.from(n.values()).forEach((function(e) {
                                                    return t.removeRef(e.$changes.refId)
                                                }))
                                            }
                                            t.refs.delete(e), delete t.refCounts[e]
                                        }
                                    })), this.deletedRefs.clear()
                                }, t
                            }(),
                            $t = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return n(e, t), e
                            }(Error);

                        function bt(t, e, n, o) {
                            var i, r = !1;
                            switch (e) {
                                case "number":
                                case "int8":
                                case "uint8":
                                case "int16":
                                case "uint16":
                                case "int32":
                                case "uint32":
                                case "int64":
                                case "uint64":
                                case "float32":
                                case "float64":
                                    i = "number", isNaN(t) && console.log('trying to encode "NaN" in '.concat(n.constructor.name, "#").concat(o));
                                    break;
                                case "string":
                                    i = "string", r = !0;
                                    break;
                                case "boolean":
                                    return
                            }
                            if (typeof t !== i && (!r || r && null !== t)) {
                                var s = "'".concat(JSON.stringify(t), "'").concat(t && t.constructor && " (".concat(t.constructor.name, ")") || "");
                                throw new $t("a '".concat(i, "' was expected, but ").concat(s, " was provided in ").concat(n.constructor.name, "#").concat(o))
                            }
                        }

                        function It(t, e, n, o) {
                            if (!(t instanceof e)) throw new $t("a '".concat(e.name, "' was expected, but '").concat(t.constructor.name, "' was provided in ").concat(n.constructor.name, "#").concat(o))
                        }

                        function Tt(t, e, n, o, i) {
                            bt(n, t, o, i);
                            var r = Y[t];
                            if (!r) throw new $t("a '".concat(t, "' was expected, but ").concat(n, " was provided in ").concat(o.constructor.name, "#").concat(i));
                            r(e, n)
                        }

                        function xt(t, e, n) {
                            return wt[t](e, n)
                        }
                        var Rt = function() {
                            function e() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                Object.defineProperties(this, {
                                    $changes: {
                                        value: new c(this, void 0, new Ot),
                                        enumerable: !1,
                                        writable: !0
                                    },
                                    $callbacks: {
                                        value: void 0,
                                        enumerable: !1,
                                        writable: !0
                                    }
                                });
                                var n = this._definition.descriptors;
                                n && Object.defineProperties(this, n), t[0] && this.assign(t[0])
                            }
                            return e.onError = function(t) {
                                console.error(t)
                            }, e.is = function(t) {
                                return t._definition && void 0 !== t._definition.schema
                            }, e.prototype.onChange = function(e) {
                                return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.REPLACE, e)
                            }, e.prototype.onRemove = function(e) {
                                return f(this.$callbacks || (this.$callbacks = []), t.OPERATION.DELETE, e)
                            }, e.prototype.assign = function(t) {
                                return Object.assign(this, t), this
                            }, Object.defineProperty(e.prototype, "_definition", {
                                get: function() {
                                    return this.constructor._definition
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.setDirty = function(t, e) {
                                this.$changes.change(t, e)
                            }, e.prototype.listen = function(t, e, n) {
                                var o = this;
                                return void 0 === n && (n = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[t] || (this.$callbacks[t] = []), this.$callbacks[t].push(e), n && void 0 !== this[t] && e(this[t], void 0),
                                    function() {
                                        return u(o.$callbacks[t], o.$callbacks[t].indexOf(e))
                                    }
                            }, e.prototype.decode = function(n, o, i) {
                                var r;
                                void 0 === o && (o = {
                                    offset: 0
                                }), void 0 === i && (i = this);
                                var a = [],
                                    c = this.$changes.root,
                                    f = n.length,
                                    h = 0;
                                for (c.refs.set(h, this); o.offset < f;) {
                                    var u = n[o.offset++];
                                    if (u != s) {
                                        var d = i.$changes,
                                            l = void 0 !== i._definition,
                                            v = l ? u >> 6 << 6 : u;
                                        if (v !== t.OPERATION.CLEAR) {
                                            var g = l ? u % (v || 255) : vt(n, o),
                                                m = l ? i._definition.fieldsByIndex[g] : "",
                                                E = d.getType(g),
                                                A = void 0,
                                                _ = void 0,
                                                O = void 0;
                                            if (l ? _ = i["_".concat(m)] : (_ = i.getByIndex(g), (v & t.OPERATION.ADD) === t.OPERATION.ADD ? (O = i instanceof y ? lt(n, o) : g, i.setIndex(g, O)) : O = i.getIndex(g)), (v & t.OPERATION.DELETE) === t.OPERATION.DELETE && (v !== t.OPERATION.DELETE_AND_ADD && i.deleteByIndex(g), _ && _.$changes && c.removeRef(_.$changes.refId), A = null), void 0 !== m) {
                                                if (v === t.OPERATION.DELETE);
                                                else if (e.is(E)) {
                                                    var $ = vt(n, o);
                                                    if (A = c.refs.get($), v !== t.OPERATION.REPLACE) {
                                                        var b = this.getSchemaType(n, o, E);
                                                        A || ((A = this.createTypeInstance(b)).$changes.refId = $, _ && (A.$callbacks = _.$callbacks, _.$changes.refId && $ !== _.$changes.refId && c.removeRef(_.$changes.refId))), c.addRef($, A, A !== _)
                                                    }
                                                } else if ("string" == typeof E) A = xt(E, n, o);
                                                else {
                                                    var I = w(Object.keys(E)[0]),
                                                        T = vt(n, o),
                                                        x = c.refs.has(T) ? _ || c.refs.get(T) : new I.constructor;
                                                    if ((A = x.clone(!0)).$changes.refId = T, _ && (A.$callbacks = _.$callbacks, _.$changes.refId && T !== _.$changes.refId)) {
                                                        c.removeRef(_.$changes.refId);
                                                        for (var R = _.entries(), P = void 0;
                                                            (P = R.next()) && !P.done;) {
                                                            var C = (r = P.value)[0],
                                                                k = r[1];
                                                            a.push({
                                                                refId: T,
                                                                op: t.OPERATION.DELETE,
                                                                field: C,
                                                                value: void 0,
                                                                previousValue: k
                                                            })
                                                        }
                                                    }
                                                    c.addRef(T, A, x !== _)
                                                }
                                                if (null != A)
                                                    if (A.$changes && A.$changes.setParent(d.ref, d.root, g), i instanceof e) i[m] = A;
                                                    else if (i instanceof y) C = O, i.$items.set(C, A), i.$changes.allChanges.add(g);
                                                else if (i instanceof p) i.setAt(g, A);
                                                else if (i instanceof Et) {
                                                    var D = i.add(A);
                                                    i.setIndex(g, D)
                                                } else i instanceof At && !1 !== (D = i.add(A)) && i.setIndex(g, D);
                                                _ !== A && a.push({
                                                    refId: h,
                                                    op: v,
                                                    field: m,
                                                    dynamicIndex: O,
                                                    value: A,
                                                    previousValue: _
                                                })
                                            } else {
                                                console.warn("@colyseus/schema: definition mismatch");
                                                for (var N = {
                                                        offset: o.offset
                                                    }; o.offset < f && (!mt(n, o) || (N.offset = o.offset + 1, !c.refs.has(vt(n, N))));) o.offset++
                                            }
                                        } else i.clear(a)
                                    } else {
                                        h = vt(n, o);
                                        var S = c.refs.get(h);
                                        if (!S) throw new Error('"refId" not found: '.concat(h));
                                        i = S
                                    }
                                }
                                return this._triggerChanges(a), c.garbageCollectDeletedRefs(), a
                            }, e.prototype.encode = function(n, o, i) {
                                void 0 === n && (n = !1), void 0 === o && (o = []), void 0 === i && (i = !1);
                                for (var r = this.$changes, a = new WeakSet, c = [r], f = 1, h = 0; h < f; h++) {
                                    var u = c[h],
                                        d = u.ref,
                                        l = d instanceof e;
                                    u.ensureRefId(), a.add(u), u !== r && (u.changed || n) && (k(o, s), K(o, u.refId));
                                    for (var p = n ? Array.from(u.allChanges) : Array.from(u.changes.values()), v = 0, g = p.length; v < g; v++) {
                                        var m = n ? {
                                                op: t.OPERATION.ADD,
                                                index: p[v]
                                            } : p[v],
                                            E = m.index,
                                            A = l ? d._definition.fieldsByIndex && d._definition.fieldsByIndex[E] : E,
                                            _ = o.length;
                                        if (m.op !== t.OPERATION.TOUCH)
                                            if (l) k(o, E | m.op);
                                            else {
                                                if (k(o, m.op), m.op === t.OPERATION.CLEAR) continue;
                                                K(o, E)
                                            } if (l || (m.op & t.OPERATION.ADD) != t.OPERATION.ADD || d instanceof y && q(o, u.ref.$indexes.get(E)), m.op !== t.OPERATION.DELETE) {
                                            var O = u.getType(E),
                                                $ = u.getValue(E);
                                            if ($ && $.$changes && !a.has($.$changes) && (c.push($.$changes), $.$changes.ensureRefId(), f++), m.op !== t.OPERATION.TOUCH) {
                                                if (e.is(O)) It($, O, d, A), K(o, $.$changes.refId), (m.op & t.OPERATION.ADD) === t.OPERATION.ADD && this.tryEncodeTypeId(o, O, $.constructor);
                                                else if ("string" == typeof O) Tt(O, o, $, d, A);
                                                else {
                                                    var b = w(Object.keys(O)[0]);
                                                    It(d["_".concat(A)], b.constructor, d, A), K(o, $.$changes.refId)
                                                }
                                                i && u.cache(E, o.slice(_))
                                            }
                                        }
                                    }
                                    n || i || u.discard()
                                }
                                return o
                            }, e.prototype.encodeAll = function(t) {
                                return this.encode(!0, [], t)
                            }, e.prototype.applyFilters = function(n, o) {
                                var i, r;
                                void 0 === o && (o = !1);
                                for (var a = this, c = new Set, f = _t.get(n), h = [this.$changes], u = 1, d = [], l = function(l) {
                                        var p = h[l];
                                        if (c.has(p.refId)) return "continue";
                                        var v = p.ref,
                                            g = v instanceof e;
                                        k(d, s), K(d, p.refId);
                                        var m = f.refIds.has(p),
                                            w = o || !m;
                                        f.addRefId(p);
                                        var E = f.containerIndexes.get(p),
                                            A = w ? Array.from(p.allChanges) : Array.from(p.changes.values());
                                        !o && g && v._definition.indexesWithFilters && v._definition.indexesWithFilters.forEach((function(e) {
                                            !E.has(e) && p.allChanges.has(e) && (w ? A.push(e) : A.push({
                                                op: t.OPERATION.ADD,
                                                index: e
                                            }))
                                        }));
                                        for (var _ = 0, O = A.length; _ < O; _++) {
                                            var $ = w ? {
                                                op: t.OPERATION.ADD,
                                                index: A[_]
                                            } : A[_];
                                            if ($.op !== t.OPERATION.CLEAR) {
                                                var b = $.index;
                                                if ($.op !== t.OPERATION.DELETE) {
                                                    var I = p.getValue(b),
                                                        T = p.getType(b);
                                                    if (g) {
                                                        if ((x = v._definition.filters && v._definition.filters[b]) && !x.call(v, n, I, a)) {
                                                            I && I.$changes && c.add(I.$changes.refId);
                                                            continue
                                                        }
                                                    } else {
                                                        var x, R = p.parent;
                                                        if ((x = p.getChildrenFilter()) && !x.call(R, n, v.$indexes.get(b), I, a)) {
                                                            I && I.$changes && c.add(I.$changes.refId);
                                                            continue
                                                        }
                                                    }
                                                    if (I.$changes && (h.push(I.$changes), u++), $.op !== t.OPERATION.TOUCH)
                                                        if ($.op === t.OPERATION.ADD || g) d.push.apply(d, null !== (i = p.caches[b]) && void 0 !== i ? i : []), E.add(b);
                                                        else if (E.has(b)) d.push.apply(d, null !== (r = p.caches[b]) && void 0 !== r ? r : []);
                                                    else {
                                                        if (E.add(b), k(d, t.OPERATION.ADD), K(d, b), v instanceof y) {
                                                            var P = p.ref.$indexes.get(b);
                                                            q(d, P)
                                                        }
                                                        I.$changes ? K(d, I.$changes.refId) : Y[T](d, I)
                                                    } else I.$changes && !g && (k(d, t.OPERATION.ADD), K(d, b), v instanceof y && (P = p.ref.$indexes.get(b), q(d, P)), K(d, I.$changes.refId))
                                                } else g ? k(d, $.op | b) : (k(d, $.op), K(d, b))
                                            } else k(d, $.op)
                                        }
                                    }, p = 0; p < u; p++) l(p);
                                return d
                            }, e.prototype.clone = function() {
                                var t, e = new this.constructor,
                                    n = this._definition.schema;
                                for (var o in n) "object" == typeof this[o] && "function" == typeof(null === (t = this[o]) || void 0 === t ? void 0 : t.clone) ? e[o] = this[o].clone() : e[o] = this[o];
                                return e
                            }, e.prototype.toJSON = function() {
                                var t = this._definition.schema,
                                    e = this._definition.deprecated,
                                    n = {};
                                for (var o in t) e[o] || null === this[o] || void 0 === this[o] || (n[o] = "function" == typeof this[o].toJSON ? this[o].toJSON() : this["_".concat(o)]);
                                return n
                            }, e.prototype.discardAllChanges = function() {
                                this.$changes.discardAll()
                            }, e.prototype.getByIndex = function(t) {
                                return this[this._definition.fieldsByIndex[t]]
                            }, e.prototype.deleteByIndex = function(t) {
                                this[this._definition.fieldsByIndex[t]] = void 0
                            }, e.prototype.tryEncodeTypeId = function(t, e, n) {
                                e._typeid !== n._typeid && (k(t, a), K(t, n._typeid))
                            }, e.prototype.getSchemaType = function(t, e, n) {
                                var o;
                                return t[e.offset] === a && (e.offset++, o = this.constructor._context.get(vt(t, e))), o || n
                            }, e.prototype.createTypeInstance = function(t) {
                                var e = new t;
                                return e.$changes.root = this.$changes.root, e
                            }, e.prototype._triggerChanges = function(n) {
                                for (var o, i, r, s, a, c, f, h, u, d = new Set, l = this.$changes.root.refs, p = function(p) {
                                        var v = n[p],
                                            y = v.refId,
                                            g = l.get(y),
                                            m = g.$callbacks;
                                        if ((v.op & t.OPERATION.DELETE) === t.OPERATION.DELETE && v.previousValue instanceof e && (null === (i = null === (o = v.previousValue.$callbacks) || void 0 === o ? void 0 : o[t.OPERATION.DELETE]) || void 0 === i || i.forEach((function(t) {
                                                return t()
                                            }))), !m) return "continue";
                                        if (g instanceof e) {
                                            if (!d.has(y)) try {
                                                null === (r = null == m ? void 0 : m[t.OPERATION.REPLACE]) || void 0 === r || r.forEach((function(t) {
                                                    return t(n)
                                                }))
                                            } catch (t) {
                                                e.onError(t)
                                            }
                                            try {
                                                m.hasOwnProperty(v.field) && (null === (s = m[v.field]) || void 0 === s || s.forEach((function(t) {
                                                    return t(v.value, v.previousValue)
                                                })))
                                            } catch (t) {
                                                e.onError(t)
                                            }
                                        } else v.op === t.OPERATION.ADD && void 0 === v.previousValue ? null === (a = m[t.OPERATION.ADD]) || void 0 === a || a.forEach((function(t) {
                                            var e;
                                            return t(v.value, null !== (e = v.dynamicIndex) && void 0 !== e ? e : v.field)
                                        })) : v.op === t.OPERATION.DELETE ? void 0 !== v.previousValue && (null === (c = m[t.OPERATION.DELETE]) || void 0 === c || c.forEach((function(t) {
                                            var e;
                                            return t(v.previousValue, null !== (e = v.dynamicIndex) && void 0 !== e ? e : v.field)
                                        }))) : v.op === t.OPERATION.DELETE_AND_ADD && (void 0 !== v.previousValue && (null === (f = m[t.OPERATION.DELETE]) || void 0 === f || f.forEach((function(t) {
                                            var e;
                                            return t(v.previousValue, null !== (e = v.dynamicIndex) && void 0 !== e ? e : v.field)
                                        }))), null === (h = m[t.OPERATION.ADD]) || void 0 === h || h.forEach((function(t) {
                                            var e;
                                            return t(v.value, null !== (e = v.dynamicIndex) && void 0 !== e ? e : v.field)
                                        }))), v.value !== v.previousValue && (null === (u = m[t.OPERATION.REPLACE]) || void 0 === u || u.forEach((function(t) {
                                            var e;
                                            return t(v.value, null !== (e = v.dynamicIndex) && void 0 !== e ? e : v.field)
                                        })));
                                        d.add(y)
                                    }, v = 0; v < n.length; v++) p(v)
                            }, e._definition = E.create(), e
                        }();

                        function Pt(t) {
                            for (var e = [t.$changes], n = 1, o = {}, i = o, r = function(t) {
                                    var n = e[t];
                                    n.changes.forEach((function(t) {
                                        var e = n.ref,
                                            o = t.index,
                                            r = e._definition ? e._definition.fieldsByIndex[o] : e.$indexes.get(o);
                                        i[r] = n.getValue(o)
                                    }))
                                }, s = 0; s < n; s++) r(s);
                            return o
                        }
                        var Ct = {
                                context: new _
                            },
                            kt = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return n(e, t), o([$("string", Ct)], e.prototype, "name", void 0), o([$("string", Ct)], e.prototype, "type", void 0), o([$("number", Ct)], e.prototype, "referencedType", void 0), e
                            }(Rt),
                            Dt = function(t) {
                                function e() {
                                    var e = null !== t && t.apply(this, arguments) || this;
                                    return e.fields = new p, e
                                }
                                return n(e, t), o([$("number", Ct)], e.prototype, "id", void 0), o([$([kt], Ct)], e.prototype, "fields", void 0), e
                            }(Rt),
                            Nt = function(t) {
                                function e() {
                                    var e = null !== t && t.apply(this, arguments) || this;
                                    return e.types = new p, e
                                }
                                return n(e, t), e.encode = function(t) {
                                    var n = t.constructor,
                                        o = new e;
                                    o.rootType = n._typeid;
                                    var i = function(t, e) {
                                            for (var n in e) {
                                                var i = new kt;
                                                i.name = n;
                                                var r = void 0;
                                                if ("string" == typeof e[n]) r = e[n];
                                                else {
                                                    var s = e[n],
                                                        a = void 0;
                                                    Rt.is(s) ? (r = "ref", a = e[n]) : "string" == typeof s[r = Object.keys(s)[0]] ? r += ":" + s[r] : a = s[r], i.referencedType = a ? a._typeid : -1
                                                }
                                                i.type = r, t.fields.push(i)
                                            }
                                            o.types.push(t)
                                        },
                                        r = n._context.types;
                                    for (var s in r) {
                                        var a = new Dt;
                                        a.id = Number(s), i(a, r[s]._definition.schema)
                                    }
                                    return o.encodeAll()
                                }, e.decode = function(t, o) {
                                    var i = new _,
                                        r = new e;
                                    r.decode(t, o);
                                    var s = r.types.reduce((function(t, e) {
                                        var o = function(t) {
                                                function e() {
                                                    return null !== t && t.apply(this, arguments) || this
                                                }
                                                return n(e, t), e
                                            }(Rt),
                                            r = e.id;
                                        return t[r] = o, i.add(o, r), t
                                    }), {});
                                    r.types.forEach((function(t) {
                                        var e = s[t.id];
                                        t.fields.forEach((function(t) {
                                            var n;
                                            if (void 0 !== t.referencedType) {
                                                var o = t.type,
                                                    r = s[t.referencedType];
                                                if (!r) {
                                                    var a = t.type.split(":");
                                                    o = a[0], r = a[1]
                                                }
                                                "ref" === o ? $(r, {
                                                    context: i
                                                })(e.prototype, t.name) : $(((n = {})[o] = r, n), {
                                                    context: i
                                                })(e.prototype, t.name)
                                            } else $(t.type, {
                                                context: i
                                            })(e.prototype, t.name)
                                        }))
                                    }));
                                    var a = s[r.rootType],
                                        c = new a;
                                    for (var f in a._definition.schema) {
                                        var h = a._definition.schema[f];
                                        "string" != typeof h && (c[f] = "function" == typeof h ? new h : new(w(Object.keys(h)[0]).constructor))
                                    }
                                    return c
                                }, o([$([Dt], Ct)], e.prototype, "types", void 0), o([$("number", Ct)], e.prototype, "rootType", void 0), e
                            }(Rt);
                        m("map", {
                            constructor: y
                        }), m("array", {
                            constructor: p
                        }), m("set", {
                            constructor: At
                        }), m("collection", {
                            constructor: Et
                        }), t.ArraySchema = p, t.CollectionSchema = Et, t.Context = _, t.MapSchema = y, t.Reflection = Nt, t.ReflectionField = kt, t.ReflectionType = Dt, t.Schema = Rt, t.SchemaDefinition = E, t.SetSchema = At, t.decode = wt, t.defineTypes = x, t.deprecated = T, t.dumpChanges = Pt, t.encode = Y, t.filter = b, t.filterChildren = I, t.hasFilter = A, t.registerType = m, t.type = $, Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }))
                })),
                L = function() {
                    function t(t, e) {
                        var n = this;
                        this.onStateChange = N(), this.onError = N(), this.onLeave = N(), this.onJoin = N(), this.hasJoined = !1, this.onMessageHandlers = k(), this.roomId = null, this.name = t, e && (this.serializer = new(C("schema")), this.rootSchema = e, this.serializer.state = new e), this.onError((function(t, e) {
                            var n;
                            return null === (n = console.warn) || void 0 === n ? void 0 : n.call(console, "colyseus.js - onError => (".concat(t, ") ").concat(e))
                        })), this.onLeave((function() {
                            return n.removeAllListeners()
                        }))
                    }
                    return Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this.roomId
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.connect = function(e, n, o) {
                        void 0 === o && (o = this);
                        var i = new I;
                        o.connection = i, i.events.onmessage = t.prototype.onMessageCallback.bind(o), i.events.onclose = function(t) {
                            var e;
                            if (!o.hasJoined) return null === (e = console.warn) || void 0 === e || e.call(console, "Room connection was closed unexpectedly (".concat(t.code, "): ").concat(t.reason)), void o.onError.invoke(t.code, t.reason);
                            t.code === r.DEVMODE_RESTART && n ? n() : (o.onLeave.invoke(t.code), o.destroy())
                        }, i.events.onerror = function(t) {
                            var e;
                            null === (e = console.warn) || void 0 === e || e.call(console, "Room, onError (".concat(t.code, "): ").concat(t.reason)), o.onError.invoke(t.code, t.reason)
                        }, i.connect(e)
                    }, t.prototype.leave = function(t) {
                        var n = this;
                        return void 0 === t && (t = !0), new Promise((function(o) {
                            n.onLeave((function(t) {
                                return o(t)
                            })), n.connection ? t ? n.connection.send([e.Protocol.LEAVE_ROOM]) : n.connection.close() : n.onLeave.invoke(r.CONSENTED)
                        }))
                    }, t.prototype.onMessage = function(t, e) {
                        return this.onMessageHandlers.on(this.getMessageHandlerKey(t), e)
                    }, t.prototype.send = function(t, n) {
                        var o, i = [e.Protocol.ROOM_DATA];
                        if ("string" == typeof t ? M.encode.string(i, t) : M.encode.number(i, t), void 0 !== n) {
                            var r = E(n);
                            (o = new Uint8Array(i.length + r.byteLength)).set(new Uint8Array(i), 0), o.set(new Uint8Array(r), i.length)
                        } else o = new Uint8Array(i);
                        this.connection.send(o.buffer)
                    }, t.prototype.sendBytes = function(t, n) {
                        var o, i = [e.Protocol.ROOM_DATA_BYTES];
                        "string" == typeof t ? M.encode.string(i, t) : M.encode.number(i, t), (o = new Uint8Array(i.length + (n.byteLength || n.length))).set(new Uint8Array(i), 0), o.set(new Uint8Array(n), i.length), this.connection.send(o.buffer)
                    }, Object.defineProperty(t.prototype, "state", {
                        get: function() {
                            return this.serializer.getState()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.removeAllListeners = function() {
                        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {}
                    }, t.prototype.onMessageCallback = function(t) {
                        var n = Array.from(new Uint8Array(t.data)),
                            o = n[0];
                        if (o === e.Protocol.JOIN_ROOM) {
                            var i = 1,
                                r = T(n, i);
                            if (i += x(r), this.serializerId = T(n, i), i += x(this.serializerId), !this.serializer) {
                                var s = C(this.serializerId);
                                this.serializer = new s
                            }
                            n.length > i && this.serializer.handshake && this.serializer.handshake(n, {
                                offset: i
                            }), this.reconnectionToken = "".concat(this.roomId, ":").concat(r), this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([e.Protocol.JOIN_ROOM])
                        } else if (o === e.Protocol.ERROR) {
                            var a = {
                                    offset: 1
                                },
                                c = M.decode.number(n, a),
                                f = M.decode.string(n, a);
                            this.onError.invoke(c, f)
                        } else if (o === e.Protocol.LEAVE_ROOM) this.leave();
                        else if (o === e.Protocol.ROOM_DATA_SCHEMA) {
                            var h = {
                                offset: 1
                            };
                            (f = new(d = this.serializer.getState().constructor._context.get(M.decode.number(n, h)))).decode(n, h), this.dispatchMessage(d, f)
                        } else if (o === e.Protocol.ROOM_STATE) n.shift(), this.setState(n);
                        else if (o === e.Protocol.ROOM_STATE_PATCH) n.shift(), this.patch(n);
                        else if (o === e.Protocol.ROOM_DATA) {
                            var u = {
                                    offset: 1
                                },
                                d = M.decode.stringCheck(n, u) ? M.decode.string(n, u) : M.decode.number(n, u);
                            f = n.length > u.offset ? p(t.data, u.offset) : void 0, this.dispatchMessage(d, f)
                        } else if (o === e.Protocol.ROOM_DATA_BYTES) {
                            var l = {
                                offset: 1
                            };
                            d = M.decode.stringCheck(n, l) ? M.decode.string(n, l) : M.decode.number(n, l), this.dispatchMessage(d, new Uint8Array(n.slice(l.offset)))
                        }
                    }, t.prototype.setState = function(t) {
                        this.serializer.setState(t), this.onStateChange.invoke(this.serializer.getState())
                    }, t.prototype.patch = function(t) {
                        this.serializer.patch(t), this.onStateChange.invoke(this.serializer.getState())
                    }, t.prototype.dispatchMessage = function(t, e) {
                        var n, o = this.getMessageHandlerKey(t);
                        this.onMessageHandlers.events[o] ? this.onMessageHandlers.emit(o, e) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", t, e) : null === (n = console.warn) || void 0 === n || n.call(console, "colyseus.js: onMessage() not registered for type '".concat(t, "'."))
                    }, t.prototype.destroy = function() {
                        this.serializer && this.serializer.teardown()
                    }, t.prototype.getMessageHandlerKey = function(t) {
                        switch (typeof t) {
                            case "function":
                                return "$".concat(t._typeid);
                            case "string":
                                return t;
                            case "number":
                                return "i".concat(t);
                            default:
                                throw new Error("invalid message type.")
                        }
                    }, t
                }();

            function j(t, e) {
                e.statusMessage = t.statusText, e.statusCode = t.status, e.data = t.body
            }

            function U(t, e, n) {
                var o, i, r = (n = n || {}).body;
                return n.method = t, n.headers = n.headers || {}, r instanceof FormData || r && "object" == typeof r && (n.headers["content-type"] = "application/json", n.body = JSON.stringify(r)), n.withCredentials && (n.credentials = "include"), n.timeout && (i = new AbortController, n.signal = i.signal, o = setTimeout(i.abort, n.timeout)), new Promise(((t, s) => {
                    fetch(e, n).then(((e, i) => {
                        clearTimeout(o), j(e, e), i = e.status >= 400 ? s : t, (r = e.headers.get("content-type")) && ~r.indexOf("application/json") ? e.text().then((t => {
                            try {
                                e.data = JSON.parse(t, n.reviver), i(e)
                            } catch (t) {
                                t.headers = e.headers, j(e, t), s(t)
                            }
                        })) : i(e)
                    })).catch((t => {
                        t.timeout = i && i.signal.aborted, s(t)
                    }))
                }))
            }
            var F, H, B, V, J, z = U.bind(U, "GET"),
                W = U.bind(U, "POST"),
                q = U.bind(U, "PATCH"),
                K = U.bind(U, "DELETE"),
                Y = U.bind(U, "PUT"),
                G = {
                    del: K,
                    get: z,
                    patch: q,
                    post: W,
                    put: Y,
                    send: U
                },
                X = n({
                    __proto__: null,
                    default: G,
                    del: K,
                    get: z,
                    patch: q,
                    post: W,
                    put: Y,
                    send: U
                }, [G]),
                Q = function() {
                    function t(t) {
                        this.client = t
                    }
                    return t.prototype.get = function(t, e) {
                        return void 0 === e && (e = {}), this.request("get", t, e)
                    }, t.prototype.post = function(t, e) {
                        return void 0 === e && (e = {}), this.request("post", t, e)
                    }, t.prototype.del = function(t, e) {
                        return void 0 === e && (e = {}), this.request("del", t, e)
                    }, t.prototype.put = function(t, e) {
                        return void 0 === e && (e = {}), this.request("put", t, e)
                    }, t.prototype.request = function(t, e, n) {
                        return void 0 === n && (n = {}), X[t](this.client.getHttpEndpoint(e), this.getOptions(n)).catch((function(t) {
                            var e;
                            throw new u(t.statusCode || -1, (null === (e = t.data) || void 0 === e ? void 0 : e.error) || t.statusMessage || t.message || "offline")
                        }))
                    }, t.prototype.getOptions = function(t) {
                        return this.authToken && (t.headers || (t.headers = {}), t.headers.Authorization = "Bearer ".concat(this.authToken), t.withCredentials = !0), t
                    }, t
                }();

            function Z() {
                return F || (F = "undefined" != typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : "undefined" != typeof window && window.localStorage ? window.localStorage : {
                    cache: {},
                    setItem: function(t, e) {
                        this.cache[t] = e
                    },
                    getItem: function(t) {
                        this.cache[t]
                    },
                    removeItem: function(t) {
                        delete this.cache[t]
                    }
                }), F
            }

            function tt(t, e) {
                Z().setItem(t, e)
            }

            function et(t) {
                Z().removeItem(t)
            }

            function nt(t, e) {
                var n = Z().getItem(t);
                "undefined" != typeof Promise && n instanceof Promise ? n.then((function(t) {
                    return e(t)
                })) : e(n)
            }
            var ot, it = function() {
                function t(t) {
                    var e = this;
                    this.http = t, this.settings = {
                        path: "/auth",
                        key: "colyseus-auth-token"
                    }, H.set(this, !1), B.set(this, void 0), V.set(this, void 0), J.set(this, k()), nt(this.settings.key, (function(t) {
                        return e.token = t
                    }))
                }
                return Object.defineProperty(t.prototype, "token", {
                    get: function() {
                        return this.http.authToken
                    },
                    set: function(t) {
                        this.http.authToken = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onChange = function(t) {
                    var e = this,
                        n = f(this, J, "f").on("change", t);
                    return f(this, H, "f") || h(this, B, new Promise((function(t, n) {
                        e.getUserData().then((function(t) {
                            e.emitChange(s(s({}, t), {
                                token: e.token
                            }))
                        })).catch((function(t) {
                            e.emitChange({
                                user: null,
                                token: void 0
                            })
                        })).finally((function() {
                            t()
                        }))
                    })), "f"), h(this, H, !0, "f"), n
                }, t.prototype.getUserData = function() {
                    return a(this, void 0, void 0, (function() {
                        return c(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.token ? [4, this.http.get("".concat(this.settings.path, "/userdata"))] : [3, 2];
                                case 1:
                                    return [2, t.sent().data];
                                case 2:
                                    throw new Error("missing auth.token")
                            }
                        }))
                    }))
                }, t.prototype.registerWithEmailAndPassword = function(t, e, n) {
                    return a(this, void 0, void 0, (function() {
                        var o;
                        return c(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.http.post("".concat(this.settings.path, "/register"), {
                                        body: {
                                            email: t,
                                            password: e,
                                            options: n
                                        }
                                    })];
                                case 1:
                                    return o = i.sent().data, this.emitChange(o), [2, o]
                            }
                        }))
                    }))
                }, t.prototype.signInWithEmailAndPassword = function(t, e) {
                    return a(this, void 0, void 0, (function() {
                        var n;
                        return c(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.http.post("".concat(this.settings.path, "/login"), {
                                        body: {
                                            email: t,
                                            password: e
                                        }
                                    })];
                                case 1:
                                    return n = o.sent().data, this.emitChange(n), [2, n]
                            }
                        }))
                    }))
                }, t.prototype.signInAnonymously = function(t) {
                    return a(this, void 0, void 0, (function() {
                        var e;
                        return c(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.http.post("".concat(this.settings.path, "/anonymous"), {
                                        body: {
                                            options: t
                                        }
                                    })];
                                case 1:
                                    return e = n.sent().data, this.emitChange(e), [2, e]
                            }
                        }))
                    }))
                }, t.prototype.sendPasswordResetEmail = function(t) {
                    return a(this, void 0, void 0, (function() {
                        return c(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.http.post("".concat(this.settings.path, "/forgot-password"), {
                                        body: {
                                            email: t
                                        }
                                    })];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        }))
                    }))
                }, t.prototype.signInWithProvider = function(t, e) {
                    return void 0 === e && (e = {}), a(this, void 0, void 0, (function() {
                        var n = this;
                        return c(this, (function(o) {
                            return [2, new Promise((function(o, i) {
                                var r = e.width || 480,
                                    s = e.height || 768,
                                    a = n.token ? "?token=".concat(n.token) : "",
                                    c = "Login with ".concat(t[0].toUpperCase() + t.substring(1)),
                                    u = n.http.client.getHttpEndpoint("".concat(e.prefix || "".concat(n.settings.path, "/provider"), "/").concat(t).concat(a)),
                                    d = screen.width / 2 - r / 2,
                                    l = screen.height / 2 - s / 2;
                                h(n, V, window.open(u, c, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + r + ", height=" + s + ", top=" + l + ", left=" + d), "f");
                                var p = function(t) {
                                        void 0 === t.data.user && void 0 === t.data.token || (clearInterval(v), f(n, V, "f").close(), h(n, V, void 0, "f"), window.removeEventListener("message", p), void 0 !== t.data.error ? i(t.data.error) : (o(t.data), n.emitChange(t.data)))
                                    },
                                    v = setInterval((function() {
                                        f(n, V, "f") && !f(n, V, "f").closed || (h(n, V, void 0, "f"), i("cancelled"), window.removeEventListener("message", p))
                                    }), 200);
                                window.addEventListener("message", p)
                            }))]
                        }))
                    }))
                }, t.prototype.signOut = function() {
                    return a(this, void 0, void 0, (function() {
                        return c(this, (function(t) {
                            return this.emitChange({
                                user: null,
                                token: null
                            }), [2]
                        }))
                    }))
                }, t.prototype.emitChange = function(t) {
                    void 0 !== t.token && (this.token = t.token, null === t.token ? et(this.settings.key) : tt(this.settings.key, t.token)), f(this, J, "f").emit("change", t)
                }, t
            }();
            H = new WeakMap, B = new WeakMap, V = new WeakMap, J = new WeakMap;
            var rt = function(t) {
                    function e(n, o) {
                        var i = t.call(this, n) || this;
                        return i.code = o, Object.setPrototypeOf(i, e.prototype), i
                    }
                    return i(e, t), e
                }(Error),
                st = "undefined" != typeof window && void 0 !== (null === (ot = null === window || void 0 === window ? void 0 : window.location) || void 0 === ot ? void 0 : ot.hostname) ? "".concat(window.location.protocol.replace("http", "ws"), "//").concat(window.location.hostname).concat(window.location.port && ":".concat(window.location.port)) : "ws://127.0.0.1:2567",
                at = function() {
                    function t(t) {
                        if (void 0 === t && (t = st), "string" == typeof t) {
                            var e = new URL(t),
                                n = "https:" === e.protocol || "wss:" === e.protocol,
                                o = Number(e.port || (n ? 443 : 80));
                            this.settings = {
                                hostname: e.hostname,
                                pathname: e.pathname,
                                port: o,
                                secure: n
                            }
                        } else void 0 === t.port && (t.port = t.secure ? 443 : 80), void 0 === t.pathname && (t.pathname = ""), this.settings = t;
                        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Q(this), this.auth = new it(this.http)
                    }
                    return t.prototype.joinOrCreate = function(t, e, n) {
                        return void 0 === e && (e = {}), a(this, void 0, void 0, (function() {
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.createMatchMakeRequest("joinOrCreate", t, e, n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.create = function(t, e, n) {
                        return void 0 === e && (e = {}), a(this, void 0, void 0, (function() {
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.createMatchMakeRequest("create", t, e, n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.join = function(t, e, n) {
                        return void 0 === e && (e = {}), a(this, void 0, void 0, (function() {
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.createMatchMakeRequest("join", t, e, n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.joinById = function(t, e, n) {
                        return void 0 === e && (e = {}), a(this, void 0, void 0, (function() {
                            return c(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.createMatchMakeRequest("joinById", t, e, n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.reconnect = function(t, e) {
                        return a(this, void 0, void 0, (function() {
                            var n, o, i;
                            return c(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if ("string" == typeof t && "string" == typeof e) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
                                        if (n = t.split(":"), o = n[0], i = n[1], !o || !i) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
                                        return [4, this.createMatchMakeRequest("reconnect", o, {
                                            reconnectionToken: i
                                        }, e)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.getAvailableRooms = function(t) {
                        return void 0 === t && (t = ""), a(this, void 0, void 0, (function() {
                            return c(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.http.get("matchmake/".concat(t), {
                                            headers: {
                                                Accept: "application/json"
                                            }
                                        })];
                                    case 1:
                                        return [2, e.sent().data]
                                }
                            }))
                        }))
                    }, t.prototype.consumeSeatReservation = function(t, e, n) {
                        return a(this, void 0, void 0, (function() {
                            var o, i, r, s = this;
                            return c(this, (function(f) {
                                return (o = this.createRoom(t.room.name, e)).roomId = t.room.roomId, o.sessionId = t.sessionId, i = {
                                    sessionId: o.sessionId
                                }, t.reconnectionToken && (i.reconnectionToken = t.reconnectionToken), r = n || o, o.connect(this.buildEndpoint(t.room, i), t.devMode && function() {
                                    return a(s, void 0, void 0, (function() {
                                        var n, i, s, f = this;
                                        return c(this, (function(h) {
                                            return console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260), " Re-establishing connection with room id '").concat(o.roomId, "'...")), n = 0, i = 8, s = function() {
                                                return a(f, void 0, void 0, (function() {
                                                    return c(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                n++, a.label = 1;
                                                            case 1:
                                                                return a.trys.push([1, 3, , 4]), [4, this.consumeSeatReservation(t, e, r)];
                                                            case 2:
                                                                return a.sent(), console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(9989), " Successfully re-established connection with room '").concat(o.roomId, "'")), [3, 4];
                                                            case 3:
                                                                return a.sent(), n < i ? (console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260), " retrying... (").concat(n, " out of ").concat(i, ")")), setTimeout(s, 2e3)) : console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(10060), " Failed to reconnect. Is your server running? Please check server logs.")), [3, 4];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }, setTimeout(s, 2e3), [2]
                                        }))
                                    }))
                                }, r), [2, new Promise((function(t, e) {
                                    var n = function(t, n) {
                                        return e(new u(t, n))
                                    };
                                    r.onError.once(n), r.onJoin.once((function() {
                                        r.onError.remove(n), t(r)
                                    }))
                                }))]
                            }))
                        }))
                    }, t.prototype.createMatchMakeRequest = function(t, e, n, o, i) {
                        return void 0 === n && (n = {}), a(this, void 0, void 0, (function() {
                            var r;
                            return c(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, this.http.post("matchmake/".concat(t, "/").concat(e), {
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(n)
                                        })];
                                    case 1:
                                        if ((r = s.sent().data).error) throw new rt(r.error, r.code);
                                        return "reconnect" === t && (r.reconnectionToken = n.reconnectionToken), [4, this.consumeSeatReservation(r, o, i)];
                                    case 2:
                                        return [2, s.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.createRoom = function(t, e) {
                        return new L(t, e)
                    }, t.prototype.buildEndpoint = function(t, e) {
                        void 0 === e && (e = {});
                        var n = [];
                        for (var o in e) e.hasOwnProperty(o) && n.push("".concat(o, "=").concat(e[o]));
                        var i = this.settings.secure ? "wss://" : "ws://";
                        return t.publicAddress ? i += "".concat(t.publicAddress) : i += "".concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname), "".concat(i, "/").concat(t.processId, "/").concat(t.roomId, "?").concat(n.join("&"))
                    }, t.prototype.getHttpEndpoint = function(t) {
                        void 0 === t && (t = "");
                        var e = t.startsWith("/") ? t : "/".concat(t);
                        return "".concat(this.settings.secure ? "https" : "http", "://").concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname).concat(e)
                    }, t.prototype.getEndpointPort = function() {
                        return 80 !== this.settings.port && 443 !== this.settings.port ? ":".concat(this.settings.port) : ""
                    }, t
                }(),
                ct = function() {
                    function t() {}
                    return t.prototype.setState = function(t) {
                        return this.state.decode(t)
                    }, t.prototype.getState = function() {
                        return this.state
                    }, t.prototype.patch = function(t) {
                        return this.state.decode(t)
                    }, t.prototype.teardown = function() {
                        var t, e;
                        null === (e = null === (t = this.state) || void 0 === t ? void 0 : t.$changes) || void 0 === e || e.root.clearRefs()
                    }, t.prototype.handshake = function(t, e) {
                        this.state ? (new M.Reflection).decode(t, e) : this.state = M.Reflection.decode(t, e)
                    }, t
                }(),
                ft = function() {
                    function t() {}
                    return t.prototype.setState = function(t) {}, t.prototype.getState = function() {
                        return null
                    }, t.prototype.patch = function(t) {}, t.prototype.teardown = function() {}, t.prototype.handshake = function(t) {}, t
                }();
            P("schema", ct), P("none", ft), e.Auth = it, e.Client = at, e.Room = L, e.SchemaSerializer = ct, e.registerSerializer = P, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e.exports)
}));