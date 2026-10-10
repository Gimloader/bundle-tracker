import {
    a as e,
    n as t,
    r as n,
    t as r
} from "./rolldown-runtime.js";
var i = r((() => {
        ArrayBuffer.isView || (ArrayBuffer.isView = e => typeof e == `object` && !!e && e.buffer instanceof ArrayBuffer), typeof globalThis > `u` && typeof window < `u` && (window.globalThis = window)
    })),
    a = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ServerError = e.CloseCode = void 0, (function(e) {
            e[e.CONSENTED = 4e3] = `CONSENTED`, e[e.DEVMODE_RESTART = 4010] = `DEVMODE_RESTART`
        })(e.CloseCode || (e.CloseCode = {})), e.ServerError = class extends Error {
            constructor(e, t) {
                super(t), this.name = `ServerError`, this.code = e
            }
        }
    })),
    o = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.decode = e.encode = void 0;

        function t(e, t) {
            if (this._offset = t, e instanceof ArrayBuffer) this._buffer = e, this._view = new DataView(this._buffer);
            else if (ArrayBuffer.isView(e)) this._buffer = e.buffer, this._view = new DataView(this._buffer, e.byteOffset, e.byteLength);
            else throw Error(`Invalid argument`)
        }

        function n(e, t, n) {
            for (var r = ``, i = 0, a = t, o = t + n; a < o; a++) {
                var s = e.getUint8(a);
                if (!(s & 128)) r += String.fromCharCode(s);
                else if ((s & 224) == 192) r += String.fromCharCode((s & 31) << 6 | e.getUint8(++a) & 63);
                else if ((s & 240) == 224) r += String.fromCharCode((s & 15) << 12 | (e.getUint8(++a) & 63) << 6 | e.getUint8(++a) & 63);
                else if ((s & 248) == 240) i = (s & 7) << 18 | (e.getUint8(++a) & 63) << 12 | (e.getUint8(++a) & 63) << 6 | e.getUint8(++a) & 63, i >= 65536 ? (i -= 65536, r += String.fromCharCode((i >>> 10) + 55296, (i & 1023) + 56320)) : r += String.fromCharCode(i);
                else throw Error(`Invalid byte ` + s.toString(16))
            }
            return r
        }
        t.prototype._array = function(e) {
            for (var t = Array(e), n = 0; n < e; n++) t[n] = this._parse();
            return t
        }, t.prototype._map = function(e) {
            for (var t = ``, n = {}, r = 0; r < e; r++) t = this._parse(), n[t] = this._parse();
            return n
        }, t.prototype._str = function(e) {
            var t = n(this._view, this._offset, e);
            return this._offset += e, t
        }, t.prototype._bin = function(e) {
            var t = this._buffer.slice(this._offset, this._offset + e);
            return this._offset += e, t
        }, t.prototype._parse = function() {
            var e = this._view.getUint8(this._offset++),
                t, n = 0,
                r = 0,
                i = 0,
                a = 0;
            if (e < 192) return e < 128 ? e : e < 144 ? this._map(e & 15) : e < 160 ? this._array(e & 15) : this._str(e & 31);
            if (e > 223) return (255 - e + 1) * -1;
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
                    if (n = this._view.getUint8(this._offset), r = this._view.getInt8(this._offset + 1), this._offset += 2, r === -1) {
                        var o = this._view.getUint32(this._offset);
                        return i = this._view.getInt32(this._offset + 4), a = this._view.getUint32(this._offset + 8), this._offset += 12, new Date((i * 4294967296 + a) * 1e3 + o / 1e6)
                    }
                    return [r, this._bin(n)];
                case 200:
                    return n = this._view.getUint16(this._offset), r = this._view.getInt8(this._offset + 2), this._offset += 3, [r, this._bin(n)];
                case 201:
                    return n = this._view.getUint32(this._offset), r = this._view.getInt8(this._offset + 4), this._offset += 5, [r, this._bin(n)];
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
                    return i = this._view.getUint32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, i + a;
                case 208:
                    return t = this._view.getInt8(this._offset), this._offset += 1, t;
                case 209:
                    return t = this._view.getInt16(this._offset), this._offset += 2, t;
                case 210:
                    return t = this._view.getInt32(this._offset), this._offset += 4, t;
                case 211:
                    return i = this._view.getInt32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, i + a;
                case 212:
                    if (r = this._view.getInt8(this._offset), this._offset += 1, r === 0) {
                        this._offset += 1;
                        return
                    }
                    return [r, this._bin(1)];
                case 213:
                    return r = this._view.getInt8(this._offset), this._offset += 1, [r, this._bin(2)];
                case 214:
                    return r = this._view.getInt8(this._offset), this._offset += 1, r === -1 ? (t = this._view.getUint32(this._offset), this._offset += 4, new Date(t * 1e3)) : [r, this._bin(4)];
                case 215:
                    if (r = this._view.getInt8(this._offset), this._offset += 1, r === 0) return i = this._view.getInt32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(i + a);
                    if (r === -1) {
                        i = this._view.getUint32(this._offset), a = this._view.getUint32(this._offset + 4), this._offset += 8;
                        var s = (i & 3) * 4294967296 + a;
                        return new Date(s * 1e3 + (i >>> 2) / 1e6)
                    }
                    return [r, this._bin(8)];
                case 216:
                    return r = this._view.getInt8(this._offset), this._offset += 1, [r, this._bin(16)];
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
            throw Error(`Could not parse`)
        };

        function r(e, n = 0) {
            var r = new t(e, n),
                i = r._parse();
            if (r._offset !== e.byteLength) throw Error(e.byteLength - r._offset + ` trailing bytes`);
            return i
        }
        e.decode = r;
        var i = 4294967295,
            a = 17179869183;

        function o(e, t, n) {
            for (var r = 0, i = 0, a = n.length; i < a; i++) r = n.charCodeAt(i), r < 128 ? e.setUint8(t++, r) : r < 2048 ? (e.setUint8(t++, 192 | r >> 6), e.setUint8(t++, 128 | r & 63)) : r < 55296 || r >= 57344 ? (e.setUint8(t++, 224 | r >> 12), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | r & 63)) : (i++, r = 65536 + ((r & 1023) << 10 | n.charCodeAt(i) & 1023), e.setUint8(t++, 240 | r >> 18), e.setUint8(t++, 128 | r >> 12 & 63), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | r & 63))
        }

        function s(e) {
            for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
            return n
        }

        function c(e, t, n) {
            var r = typeof n,
                o = 0,
                l = 0,
                u = 0,
                d = 0,
                f = 0,
                p = 0;
            if (r === `string`) {
                if (f = s(n), f < 32) e.push(f | 160), p = 1;
                else if (f < 256) e.push(217, f), p = 2;
                else if (f < 65536) e.push(218, f >> 8, f), p = 3;
                else if (f < 4294967296) e.push(219, f >> 24, f >> 16, f >> 8, f), p = 5;
                else throw Error(`String too long`);
                return t.push({
                    _str: n,
                    _length: f,
                    _offset: e.length
                }), p + f
            }
            if (r === `number`) return Math.floor(n) !== n || !isFinite(n) ? (e.push(203), t.push({
                _float: n,
                _length: 8,
                _offset: e.length
            }), 9) : n >= 0 ? n < 128 ? (e.push(n), 1) : n < 256 ? (e.push(204, n), 2) : n < 65536 ? (e.push(205, n >> 8, n), 3) : n < 4294967296 ? (e.push(206, n >> 24, n >> 16, n >> 8, n), 5) : (u = n / 2 ** 32 | 0, d = n >>> 0, e.push(207, u >> 24, u >> 16, u >> 8, u, d >> 24, d >> 16, d >> 8, d), 9) : n >= -32 ? (e.push(n), 1) : n >= -128 ? (e.push(208, n), 2) : n >= -32768 ? (e.push(209, n >> 8, n), 3) : n >= -2147483648 ? (e.push(210, n >> 24, n >> 16, n >> 8, n), 5) : (u = Math.floor(n / 2 ** 32), d = n >>> 0, e.push(211, u >> 24, u >> 16, u >> 8, u, d >> 24, d >> 16, d >> 8, d), 9);
            if (r === `object`) {
                if (n === null) return e.push(192), 1;
                if (Array.isArray(n)) {
                    if (f = n.length, f < 16) e.push(f | 144), p = 1;
                    else if (f < 65536) e.push(220, f >> 8, f), p = 3;
                    else if (f < 4294967296) e.push(221, f >> 24, f >> 16, f >> 8, f), p = 5;
                    else throw Error(`Array too large`);
                    for (o = 0; o < f; o++) p += c(e, t, n[o]);
                    return p
                }
                if (n instanceof Date) {
                    var m = n.getTime(),
                        h = Math.floor(m / 1e3),
                        g = (m - h * 1e3) * 1e6;
                    return h >= 0 && g >= 0 && h <= a ? g === 0 && h <= i ? (e.push(214, 255, h >> 24, h >> 16, h >> 8, h), 6) : (u = h / 4294967296, d = h | 0, e.push(215, 255, g >> 22, g >> 14, g >> 6, u, d >> 24, d >> 16, d >> 8, d), 10) : (u = Math.floor(h / 4294967296), d = h >>> 0, e.push(199, 12, 255, g >> 24, g >> 16, g >> 8, g, u >> 24, u >> 16, u >> 8, u, d >> 24, d >> 16, d >> 8, d), 15)
                }
                if (n instanceof ArrayBuffer) {
                    if (f = n.byteLength, f < 256) e.push(196, f), p = 2;
                    else if (f < 65536) e.push(197, f >> 8, f), p = 3;
                    else if (f < 4294967296) e.push(198, f >> 24, f >> 16, f >> 8, f), p = 5;
                    else throw Error(`Buffer too large`);
                    return t.push({
                        _bin: n,
                        _length: f,
                        _offset: e.length
                    }), p + f
                }
                if (typeof n.toJSON == `function`) return c(e, t, n.toJSON());
                var _ = [],
                    v = ``,
                    y = Object.keys(n);
                for (o = 0, l = y.length; o < l; o++) v = y[o], n[v] !== void 0 && typeof n[v] != `function` && _.push(v);
                if (f = _.length, f < 16) e.push(f | 128), p = 1;
                else if (f < 65536) e.push(222, f >> 8, f), p = 3;
                else if (f < 4294967296) e.push(223, f >> 24, f >> 16, f >> 8, f), p = 5;
                else throw Error(`Object too large`);
                for (o = 0; o < f; o++) v = _[o], p += c(e, t, v), p += c(e, t, n[v]);
                return p
            }
            if (r === `boolean`) return e.push(n ? 195 : 194), 1;
            if (r === `undefined`) return e.push(192), 1;
            if (typeof n.toJSON == `function`) return c(e, t, n.toJSON());
            throw Error(`Could not encode`)
        }

        function l(e) {
            var t = [],
                n = [],
                r = c(t, n, e),
                i = new ArrayBuffer(r),
                a = new DataView(i),
                s = 0,
                l = 0,
                u = -1;
            n.length > 0 && (u = n[0]._offset);
            for (var d, f = 0, p = 0, m = 0, h = t.length; m < h; m++)
                if (a.setUint8(l + m, t[m]), m + 1 === u) {
                    if (d = n[s], f = d._length, p = l + u, d._bin)
                        for (var g = new Uint8Array(d._bin), _ = 0; _ < f; _++) a.setUint8(p + _, g[_]);
                    else d._str ? o(a, p, d._str) : d._float !== void 0 && a.setFloat64(p, d._float);
                    s++, l += f, n[s] && (u = n[s]._offset)
                } return i
        }
        e.encode = l
    })),
    s = r(((e, t) => {
        t.exports = function() {
            throw Error(`ws does not work in the browser. Browser clients must use the native WebSocket object`)
        }
    })),
    c = r((e => {
        var t = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.WebSocketTransport = void 0;
        var n = t(s()),
            r = globalThis.WebSocket || n.default;
        e.WebSocketTransport = class {
            constructor(e) {
                this.events = e
            }
            send(e) {
                e instanceof ArrayBuffer ? this.ws.send(e) : Array.isArray(e) && this.ws.send(new Uint8Array(e).buffer)
            }
            connect(e, t) {
                try {
                    this.ws = new r(e, {
                        headers: t,
                        protocols: this.protocols
                    })
                } catch {
                    this.ws = new r(e, this.protocols)
                }
                this.ws.binaryType = `arraybuffer`, this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
            }
            close(e, t) {
                this.ws.close(e, t)
            }
            get isOpen() {
                return this.ws.readyState === r.OPEN
            }
        }
    })),
    l = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Connection = void 0;
        var t = c();
        e.Connection = class {
            constructor() {
                this.events = {}, this.transport = new t.WebSocketTransport(this.events)
            }
            send(e) {
                this.transport.send(e)
            }
            connect(e, t) {
                this.transport.connect(e, t)
            }
            close(e, t) {
                this.transport.close(e, t)
            }
            get isOpen() {
                return this.transport.isOpen
            }
        }
    })),
    u = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.utf8Length = e.utf8Read = e.ErrorCode = e.Protocol = void 0, (function(e) {
            e[e.HANDSHAKE = 9] = `HANDSHAKE`, e[e.JOIN_ROOM = 10] = `JOIN_ROOM`, e[e.ERROR = 11] = `ERROR`, e[e.LEAVE_ROOM = 12] = `LEAVE_ROOM`, e[e.ROOM_DATA = 13] = `ROOM_DATA`, e[e.ROOM_STATE = 14] = `ROOM_STATE`, e[e.ROOM_STATE_PATCH = 15] = `ROOM_STATE_PATCH`, e[e.ROOM_DATA_SCHEMA = 16] = `ROOM_DATA_SCHEMA`, e[e.ROOM_DATA_BYTES = 17] = `ROOM_DATA_BYTES`
        })(e.Protocol || (e.Protocol = {})), (function(e) {
            e[e.MATCHMAKE_NO_HANDLER = 4210] = `MATCHMAKE_NO_HANDLER`, e[e.MATCHMAKE_INVALID_CRITERIA = 4211] = `MATCHMAKE_INVALID_CRITERIA`, e[e.MATCHMAKE_INVALID_ROOM_ID = 4212] = `MATCHMAKE_INVALID_ROOM_ID`, e[e.MATCHMAKE_UNHANDLED = 4213] = `MATCHMAKE_UNHANDLED`, e[e.MATCHMAKE_EXPIRED = 4214] = `MATCHMAKE_EXPIRED`, e[e.AUTH_FAILED = 4215] = `AUTH_FAILED`, e[e.APPLICATION_ERROR = 4216] = `APPLICATION_ERROR`
        })(e.ErrorCode || (e.ErrorCode = {}));

        function t(e, t) {
            let n = e[t++];
            for (var r = ``, i = 0, a = t, o = t + n; a < o; a++) {
                var s = e[a];
                if (!(s & 128)) r += String.fromCharCode(s);
                else if ((s & 224) == 192) r += String.fromCharCode((s & 31) << 6 | e[++a] & 63);
                else if ((s & 240) == 224) r += String.fromCharCode((s & 15) << 12 | (e[++a] & 63) << 6 | e[++a] & 63);
                else if ((s & 248) == 240) i = (s & 7) << 18 | (e[++a] & 63) << 12 | (e[++a] & 63) << 6 | e[++a] & 63, i >= 65536 ? (i -= 65536, r += String.fromCharCode((i >>> 10) + 55296, (i & 1023) + 56320)) : r += String.fromCharCode(i);
                else throw Error(`Invalid byte ` + s.toString(16))
            }
            return r
        }
        e.utf8Read = t;

        function n(e = ``) {
            let t = 0,
                n = 0;
            for (let r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
            return n + 1
        }
        e.utf8Length = n
    })),
    d = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getSerializer = e.registerSerializer = void 0;
        var t = {};

        function n(e, n) {
            t[e] = n
        }
        e.registerSerializer = n;

        function r(e) {
            let n = t[e];
            if (!n) throw Error(`missing serializer: ` + e);
            return n
        }
        e.getSerializer = r
    })),
    f = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createNanoEvents = void 0, e.createNanoEvents = () => ({
            emit(e, ...t) {
                let n = this.events[e] || [];
                for (let e = 0, r = n.length; e < r; e++) n[e](...t)
            },
            events: {},
            on(e, t) {
                var n;
                return (n = this.events[e]) != null && n.push(t) || (this.events[e] = [t]), () => {
                    var n;
                    this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(e => t !== e)
                }
            }
        })
    })),
    p = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createSignal = e.EventEmitter = void 0;
        var t = class {
            constructor() {
                this.handlers = []
            }
            register(e, t = !1) {
                return this.handlers.push(e), this
            }
            invoke(...e) {
                this.handlers.forEach(t => t.apply(this, e))
            }
            invokeAsync(...e) {
                return Promise.all(this.handlers.map(t => t.apply(this, e)))
            }
            remove(e) {
                let t = this.handlers.indexOf(e);
                this.handlers[t] = this.handlers[this.handlers.length - 1], this.handlers.pop()
            }
            clear() {
                this.handlers = []
            }
        };
        e.EventEmitter = t;

        function n() {
            let e = new t;

            function n(t) {
                return e.register(t, this === null)
            }
            return n.once = t => {
                let n = function(...r) {
                    t.apply(this, r), e.remove(n)
                };
                e.register(n)
            }, n.remove = t => e.remove(t), n.invoke = (...t) => e.invoke(...t), n.invokeAsync = (...t) => e.invokeAsync(...t), n.clear = () => e.clear(), n
        }
        e.createSignal = n
    })),
    m = r(((e, t) => {
        (function(n, r) {
            typeof e == `object` && t !== void 0 ? r(e) : typeof define == `function` && define.amd ? define([`exports`], r) : (n = typeof globalThis < `u` ? globalThis : n || self, r(n.schema = {}))
        })(e, (function(e) {
            var t = function(e, n) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, t(e, n)
            };

            function n(e, n) {
                if (typeof n != `function` && n !== null) throw TypeError(`Class extends value ` + String(n) + ` is not a constructor or null`);
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
            }

            function r(e, t, n, r) {
                var i = arguments.length,
                    a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
                    o;
                if (typeof Reflect == `object` && typeof Reflect.decorate == `function`) a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                return i > 3 && a && Object.defineProperty(t, n, a), a
            }

            function i(e, t, n) {
                if (n || arguments.length === 2)
                    for (var r = 0, i = t.length, a; r < i; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
                return e.concat(a || Array.prototype.slice.call(t))
            }
            var a = 255,
                o = 213;
            e.OPERATION = void 0, (function(e) {
                e[e.ADD = 128] = `ADD`, e[e.REPLACE = 0] = `REPLACE`, e[e.DELETE = 64] = `DELETE`, e[e.DELETE_AND_ADD = 192] = `DELETE_AND_ADD`, e[e.TOUCH = 1] = `TOUCH`, e[e.CLEAR = 10] = `CLEAR`
            })(e.OPERATION || (e.OPERATION = {}));
            var s = function() {
                function t(e, t, n) {
                    this.changed = !1, this.changes = new Map, this.allChanges = new Set, this.caches = {}, this.currentCustomOperation = 0, this.ref = e, this.setParent(t, n)
                }
                return t.prototype.setParent = function(e, t, n) {
                    var r = this;
                    if (this.indexes || (this.indexes = this.ref instanceof Z ? this.ref._definition.indexes : {}), this.parent = e, this.parentIndex = n, t) {
                        if (this.root = t, this.ref instanceof Z) {
                            var i = this.ref._definition;
                            for (var a in i.schema) {
                                var o = this.ref[a];
                                if (o && o.$changes) {
                                    var s = i.indexes[a];
                                    o.$changes.setParent(this.ref, t, s)
                                }
                            }
                        } else typeof this.ref == `object` && this.ref.forEach(function(e, t) {
                            if (e instanceof Z) {
                                var n = e.$changes,
                                    i = r.ref.$changes.indexes[t];
                                n.setParent(r.ref, r.root, i)
                            }
                        })
                    }
                }, t.prototype.operation = function(e) {
                    this.changes.set(--this.currentCustomOperation, e)
                }, t.prototype.change = function(t, n) {
                    n === void 0 && (n = e.OPERATION.ADD);
                    var r = typeof t == `number` ? t : this.indexes[t];
                    this.assertValidIndex(r, t);
                    var i = this.changes.get(r);
                    (!i || i.op === e.OPERATION.DELETE || i.op === e.OPERATION.TOUCH) && this.changes.set(r, {
                        op: i && i.op === e.OPERATION.DELETE ? e.OPERATION.DELETE_AND_ADD : n,
                        index: r
                    }), this.allChanges.add(r), this.changed = !0, this.touchParents()
                }, t.prototype.touch = function(t) {
                    var n = typeof t == `number` ? t : this.indexes[t];
                    this.assertValidIndex(n, t), this.changes.has(n) || this.changes.set(n, {
                        op: e.OPERATION.TOUCH,
                        index: n
                    }), this.allChanges.add(n), this.touchParents()
                }, t.prototype.touchParents = function() {
                    this.parent && this.parent.$changes.touch(this.parentIndex)
                }, t.prototype.getType = function(e) {
                    if (this.ref._definition) {
                        var t = this.ref._definition;
                        return t.schema[t.fieldsByIndex[e]]
                    }
                    var t = this.parent._definition,
                        n = t.schema[t.fieldsByIndex[this.parentIndex]];
                    return Object.values(n)[0]
                }, t.prototype.getChildrenFilter = function() {
                    var e = this.parent._definition.childFilters;
                    return e && e[this.parentIndex]
                }, t.prototype.getValue = function(e) {
                    return this.ref.getByIndex(e)
                }, t.prototype.delete = function(t) {
                    var n = typeof t == `number` ? t : this.indexes[t];
                    if (n === void 0) console.warn(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index: ${t} (${n})`);
                    else {
                        var r = this.getValue(n);
                        this.changes.set(n, {
                            op: e.OPERATION.DELETE,
                            index: n
                        }), this.allChanges.delete(n), delete this.caches[n], r && r.$changes && (r.$changes.parent = void 0), this.changed = !0, this.touchParents()
                    }
                }, t.prototype.discard = function(t, n) {
                    var r = this;
                    t === void 0 && (t = !1), n === void 0 && (n = !1), this.ref instanceof Z || this.changes.forEach(function(t) {
                        if (t.op === e.OPERATION.DELETE) {
                            var n = r.ref.getIndex(t.index);
                            delete r.indexes[n]
                        }
                    }), this.changes.clear(), this.changed = t, n && this.allChanges.clear(), this.currentCustomOperation = 0
                }, t.prototype.discardAll = function() {
                    var e = this;
                    this.changes.forEach(function(t) {
                        var n = e.getValue(t.index);
                        n && n.$changes && n.$changes.discardAll()
                    }), this.discard()
                }, t.prototype.cache = function(e, t) {
                    this.caches[e] = t
                }, t.prototype.clone = function() {
                    return new t(this.ref, this.parent, this.root)
                }, t.prototype.ensureRefId = function() {
                    this.refId === void 0 && (this.refId = this.root.getNextUniqueId())
                }, t.prototype.assertValidIndex = function(e, t) {
                    if (e === void 0) throw Error(`ChangeTree: missing index for field "${t}"`)
                }, t
            }();

            function c(e, t, n, r) {
                return e[t] || (e[t] = []), e[t].push(n), r == null || r.forEach(function(e, t) {
                        return n(e, t)
                    }),
                    function() {
                        return u(e[t], e[t].indexOf(n))
                    }
            }

            function l(t) {
                var n = this,
                    r = typeof this.$changes.getType() != `string`;
                this.$items.forEach(function(i, a) {
                    t.push({
                        refId: n.$changes.refId,
                        op: e.OPERATION.DELETE,
                        field: a,
                        value: void 0,
                        previousValue: i
                    }), r && n.$changes.root.removeRef(i.$changes.refId)
                })
            }

            function u(e, t) {
                if (t === -1 || t >= e.length) return !1;
                for (var n = e.length - 1, r = t; r < n; r++) e[r] = e[r + 1];
                return e.length = n, !0
            }
            var d = function(e, t) {
                var n = e.toString(),
                    r = t.toString();
                return n < r ? -1 : +(n > r)
            };

            function f(e) {
                return e.$proxy = !0, e = new Proxy(e, {
                    get: function(e, t) {
                        return typeof t != `symbol` && !isNaN(t) ? e.at(t) : e[t]
                    },
                    set: function(e, t, n) {
                        if (typeof t != `symbol` && !isNaN(t)) {
                            var r = Array.from(e.$items.keys()),
                                i = parseInt(r[t] || t);
                            n == null ? e.deleteAt(i) : e.setAt(i, n)
                        } else e[t] = n;
                        return !0
                    },
                    deleteProperty: function(e, t) {
                        return typeof t == `number` ? e.deleteAt(t) : delete e[t], !0
                    },
                    has: function(e, t) {
                        return typeof t != `symbol` && !isNaN(Number(t)) ? e.$items.has(Number(t)) : Reflect.has(e, t)
                    }
                }), e
            }
            var p = function() {
                function t() {
                    var e = [...arguments];
                    this.$changes = new s(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, this.push.apply(this, e)
                }
                return t.prototype.onAdd = function(t, n) {
                    return n === void 0 && (n = !0), c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.ADD, t, n ? this.$items : void 0)
                }, t.prototype.onRemove = function(t) {
                    return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.DELETE, t)
                }, t.prototype.onChange = function(t) {
                    return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.REPLACE, t)
                }, t.is = function(e) {
                    return Array.isArray(e) || e.array !== void 0
                }, Object.defineProperty(t.prototype, "length", {
                    get: function() {
                        return this.$items.size
                    },
                    set: function(e) {
                        e === 0 ? this.clear() : this.splice(e, this.length - e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.push = function() {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r;
                    return t.forEach(function(t) {
                        r = e.$refId++, e.setAt(r, t)
                    }), r
                }, t.prototype.pop = function() {
                    var e = Array.from(this.$indexes.values()).pop();
                    if (e !== void 0) {
                        this.$changes.delete(e), this.$indexes.delete(e);
                        var t = this.$items.get(e);
                        return this.$items.delete(e), t
                    }
                }, t.prototype.at = function(e) {
                    if (e = Math.trunc(e) || 0, e < 0 && (e += this.length), !(e < 0 || e >= this.length)) {
                        var t = Array.from(this.$items.keys())[e];
                        return this.$items.get(t)
                    }
                }, t.prototype.setAt = function(t, n) {
                    var r;
                    if (n == null) console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
                    else if (this.$items.get(t) !== n) {
                        n.$changes !== void 0 && n.$changes.setParent(this, this.$changes.root, t);
                        var i = ((r = this.$changes.indexes[t]) == null ? void 0 : r.op) ?? e.OPERATION.ADD;
                        this.$changes.indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, n), this.$changes.change(t, i)
                    }
                }, t.prototype.deleteAt = function(e) {
                    var t = Array.from(this.$items.keys())[e];
                    return t !== void 0 && this.$deleteAt(t)
                }, t.prototype.$deleteAt = function(e) {
                    return this.$changes.delete(e), this.$indexes.delete(e), this.$items.delete(e)
                }, t.prototype.clear = function(t) {
                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), t && l.call(this, t), this.$items.clear(), this.$changes.operation({
                        index: 0,
                        op: e.OPERATION.CLEAR
                    }), this.$changes.touchParents()
                }, t.prototype.concat = function() {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return new(t.bind.apply(t, i([void 0], (e = Array.from(this.$items.values())).concat.apply(e, n), !1)))
                }, t.prototype.join = function(e) {
                    return Array.from(this.$items.values()).join(e)
                }, t.prototype.reverse = function() {
                    var e = this,
                        t = Array.from(this.$items.keys());
                    return Array.from(this.$items.values()).reverse().forEach(function(n, r) {
                        e.setAt(t[r], n)
                    }), this
                }, t.prototype.shift = function() {
                    var e = Array.from(this.$items.keys()).shift();
                    if (e !== void 0) {
                        var t = this.$items.get(e);
                        return this.$deleteAt(e), t
                    }
                }, t.prototype.slice = function(e, n) {
                    var r = new t;
                    return r.push.apply(r, Array.from(this.$items.values()).slice(e, n)), r
                }, t.prototype.sort = function(e) {
                    var t = this;
                    e === void 0 && (e = d);
                    var n = Array.from(this.$items.keys());
                    return Array.from(this.$items.values()).sort(e).forEach(function(e, r) {
                        t.setAt(n[r], e)
                    }), this
                }, t.prototype.splice = function(e, t) {
                    t === void 0 && (t = this.length - e);
                    for (var n = [...arguments].slice(2), r = Array.from(this.$items.keys()), i = [], a = e; a < e + t; a++) i.push(this.$items.get(r[a])), this.$deleteAt(r[a]);
                    for (var a = 0; a < n.length; a++) this.setAt(e + a, n[a]);
                    return i
                }, t.prototype.unshift = function() {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this.length,
                        i = t.length,
                        a = Array.from(this.$items.values());
                    return t.forEach(function(t, n) {
                        e.setAt(n, t)
                    }), a.forEach(function(t, n) {
                        e.setAt(i + n, t)
                    }), r + i
                }, t.prototype.indexOf = function(e, t) {
                    return Array.from(this.$items.values()).indexOf(e, t)
                }, t.prototype.lastIndexOf = function(e, t) {
                    return t === void 0 && (t = this.length - 1), Array.from(this.$items.values()).lastIndexOf(e, t)
                }, t.prototype.every = function(e, t) {
                    return Array.from(this.$items.values()).every(e, t)
                }, t.prototype.some = function(e, t) {
                    return Array.from(this.$items.values()).some(e, t)
                }, t.prototype.forEach = function(e, t) {
                    Array.from(this.$items.values()).forEach(e, t)
                }, t.prototype.map = function(e, t) {
                    return Array.from(this.$items.values()).map(e, t)
                }, t.prototype.filter = function(e, t) {
                    return Array.from(this.$items.values()).filter(e, t)
                }, t.prototype.reduce = function(e, t) {
                    return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments)
                }, t.prototype.reduceRight = function(e, t) {
                    return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments)
                }, t.prototype.find = function(e, t) {
                    return Array.from(this.$items.values()).find(e, t)
                }, t.prototype.findIndex = function(e, t) {
                    return Array.from(this.$items.values()).findIndex(e, t)
                }, t.prototype.fill = function(e, t, n) {
                    throw Error(`ArraySchema#fill() not implemented`)
                }, t.prototype.copyWithin = function(e, t, n) {
                    throw Error(`ArraySchema#copyWithin() not implemented`)
                }, t.prototype.toString = function() {
                    return this.$items.toString()
                }, t.prototype.toLocaleString = function() {
                    return this.$items.toLocaleString()
                }, t.prototype[Symbol.iterator] = function() {
                    return Array.from(this.$items.values())[Symbol.iterator]()
                }, Object.defineProperty(t, Symbol.species, {
                    get: function() {
                        return t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.entries = function() {
                    return this.$items.entries()
                }, t.prototype.keys = function() {
                    return this.$items.keys()
                }, t.prototype.values = function() {
                    return this.$items.values()
                }, t.prototype.includes = function(e, t) {
                    return Array.from(this.$items.values()).includes(e, t)
                }, t.prototype.flatMap = function(e, t) {
                    throw Error(`ArraySchema#flatMap() is not supported.`)
                }, t.prototype.flat = function(e) {
                    throw Error(`ArraySchema#flat() is not supported.`)
                }, t.prototype.findLast = function() {
                    var e = Array.from(this.$items.values());
                    return e.findLast.apply(e, arguments)
                }, t.prototype.findLastIndex = function() {
                    var e = Array.from(this.$items.values());
                    return e.findLastIndex.apply(e, arguments)
                }, t.prototype.with = function(e, n) {
                    var r = Array.from(this.$items.values());
                    return r[e] = n, new(t.bind.apply(t, i([void 0], r, !1)))
                }, t.prototype.toReversed = function() {
                    return Array.from(this.$items.values()).reverse()
                }, t.prototype.toSorted = function(e) {
                    return Array.from(this.$items.values()).sort(e)
                }, t.prototype.toSpliced = function(e, t) {
                    var n = Array.from(this.$items.values());
                    return n.toSpliced.apply(n, arguments)
                }, t.prototype.setIndex = function(e, t) {
                    this.$indexes.set(e, t)
                }, t.prototype.getIndex = function(e) {
                    return this.$indexes.get(e)
                }, t.prototype.getByIndex = function(e) {
                    return this.$items.get(this.$indexes.get(e))
                }, t.prototype.deleteByIndex = function(e) {
                    var t = this.$indexes.get(e);
                    this.$items.delete(t), this.$indexes.delete(e)
                }, t.prototype.toArray = function() {
                    return Array.from(this.$items.values())
                }, t.prototype.toJSON = function() {
                    return this.toArray().map(function(e) {
                        return typeof e.toJSON == `function` ? e.toJSON() : e
                    })
                }, t.prototype.clone = function(e) {
                    return e ? new(t.bind.apply(t, i([void 0], Array.from(this.$items.values()), !1))) : new(t.bind.apply(t, i([void 0], this.map(function(e) {
                        return e.$changes ? e.clone() : e
                    }), !1)))
                }, t
            }();

            function m(e) {
                return e.$proxy = !0, e = new Proxy(e, {
                    get: function(e, t) {
                        return typeof t != `symbol` && e[t] === void 0 ? e.get(t) : e[t]
                    },
                    set: function(e, t, n) {
                        return typeof t != `symbol` && t.indexOf(`$`) === -1 && t !== `onAdd` && t !== `onRemove` && t !== `onChange` ? e.set(t, n) : e[t] = n, !0
                    },
                    deleteProperty: function(e, t) {
                        return e.delete(t), !0
                    }
                }), e
            }
            var h = function() {
                    function t(e) {
                        var n = this;
                        if (this.$changes = new s(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e) {
                            if (e instanceof Map || e instanceof t) e.forEach(function(e, t) {
                                return n.set(t, e)
                            });
                            else
                                for (var r in e) this.set(r, e[r])
                        }
                    }
                    return t.prototype.onAdd = function(t, n) {
                        return n === void 0 && (n = !0), c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.ADD, t, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(t) {
                        return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.DELETE, t)
                    }, t.prototype.onChange = function(t) {
                        return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.REPLACE, t)
                    }, t.is = function(e) {
                        return e.map !== void 0
                    }, t.prototype[Symbol.iterator] = function() {
                        return this.$items[Symbol.iterator]()
                    }, Object.defineProperty(t.prototype, Symbol.toStringTag, {
                        get: function() {
                            return this.$items[Symbol.toStringTag]
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, Symbol.species, {
                        get: function() {
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.set = function(t, n) {
                        if (n == null) throw Error(`MapSchema#set('${t}', ${n}): trying to set ${n} value on '${t}'.`);
                        t = t.toString();
                        var r = this.$changes.indexes[t] !== void 0,
                            i = r ? this.$changes.indexes[t] : this.$refId++,
                            a = r ? e.OPERATION.REPLACE : e.OPERATION.ADD,
                            o = n.$changes !== void 0;
                        if (o && n.$changes.setParent(this, this.$changes.root, i), !r) this.$changes.indexes[t] = i, this.$indexes.set(i, t);
                        else if (!o && this.$items.get(t) === n) return;
                        else o && this.$items.get(t) !== n && (a = e.OPERATION.ADD);
                        return this.$items.set(t, n), this.$changes.change(t, a), this
                    }, t.prototype.get = function(e) {
                        return this.$items.get(e)
                    }, t.prototype.delete = function(e) {
                        return this.$changes.delete(e.toString()), this.$items.delete(e)
                    }, t.prototype.clear = function(t) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), t && l.call(this, t), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: e.OPERATION.CLEAR
                        }), this.$changes.touchParents()
                    }, t.prototype.has = function(e) {
                        return this.$items.has(e)
                    }, t.prototype.forEach = function(e) {
                        this.$items.forEach(e)
                    }, t.prototype.entries = function() {
                        return this.$items.entries()
                    }, t.prototype.keys = function() {
                        return this.$items.keys()
                    }, t.prototype.values = function() {
                        return this.$items.values()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.$items.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setIndex = function(e, t) {
                        this.$indexes.set(e, t)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var t = this.$indexes.get(e);
                        this.$items.delete(t), this.$indexes.delete(e)
                    }, t.prototype.toJSON = function() {
                        var e = {};
                        return this.forEach(function(t, n) {
                            e[n] = typeof t.toJSON == `function` ? t.toJSON() : t
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(e, t) {
                            e.$changes ? n.set(t, e.clone()) : n.set(t, e)
                        })), n
                    }, t
                }(),
                g = {};

            function _(e, t) {
                g[e] = t
            }

            function v(e) {
                return g[e]
            }
            var y = function() {
                function e() {
                    this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {}
                }
                return e.create = function(t) {
                    var n = new e;
                    return n.schema = Object.assign({}, t && t.schema || {}), n.indexes = Object.assign({}, t && t.indexes || {}), n.fieldsByIndex = Object.assign({}, t && t.fieldsByIndex || {}), n.descriptors = Object.assign({}, t && t.descriptors || {}), n.deprecated = Object.assign({}, t && t.deprecated || {}), n
                }, e.prototype.addField = function(e, t) {
                    var n = this.getNextFieldIndex();
                    this.fieldsByIndex[n] = e, this.indexes[e] = n, this.schema[e] = Array.isArray(t) ? {
                        array: t[0]
                    } : t
                }, e.prototype.hasField = function(e) {
                    return this.indexes[e] !== void 0
                }, e.prototype.addFilter = function(e, t) {
                    return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[e]] = t, this.indexesWithFilters.push(this.indexes[e]), !0
                }, e.prototype.addChildrenFilter = function(e, t) {
                    var n = this.indexes[e],
                        r = this.schema[e];
                    if (v(Object.keys(r)[0])) return this.childFilters || (this.childFilters = {}), this.childFilters[n] = t, !0;
                    console.warn(`@filterChildren: field '${e}' can't have children. Ignoring filter.`)
                }, e.prototype.getChildrenFilter = function(e) {
                    return this.childFilters && this.childFilters[this.indexes[e]]
                }, e.prototype.getNextFieldIndex = function() {
                    return Object.keys(this.schema || {}).length
                }, e
            }();

            function b(e) {
                return e._context && e._context.useFilters
            }
            var x = function() {
                    function e() {
                        this.types = {}, this.schemas = new Map, this.useFilters = !1
                    }
                    return e.prototype.has = function(e) {
                        return this.schemas.has(e)
                    }, e.prototype.get = function(e) {
                        return this.types[e]
                    }, e.prototype.add = function(e, t) {
                        t === void 0 && (t = this.schemas.size), e._definition = y.create(e._definition), e._typeid = t, this.types[t] = e, this.schemas.set(e, t)
                    }, e.create = function(t) {
                        return t === void 0 && (t = {}),
                            function(n) {
                                return t.context || (t.context = new e), C(n, t)
                            }
                    }, e
                }(),
                S = new x;

            function C(e, t) {
                return t === void 0 && (t = {}),
                    function(n, r) {
                        var a = t.context || S,
                            o = n.constructor;
                        if (o._context = a, !e) throw Error(`${o.name}: @type() reference provided for "${r}" is undefined. Make sure you don't have any circular dependencies.`);
                        a.has(o) || a.add(o);
                        var s = o._definition;
                        if (s.addField(r, e), s.descriptors[r]) {
                            if (s.deprecated[r]) return;
                            try {
                                throw Error(`@colyseus/schema: Duplicate '${r}' definition on '${o.name}'.
Check @type() annotation`)
                            } catch (e) {
                                var c = e.stack.split(`
`)[4].trim();
                                throw Error(`${e.message} ${c}`)
                            }
                        }
                        var l = p.is(e),
                            u = !l && h.is(e);
                        if (typeof e != `string` && !Z.is(e)) {
                            var d = Object.values(e)[0];
                            typeof d != `string` && !a.has(d) && a.add(d)
                        }
                        if (t.manual) s.descriptors[r] = {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        };
                        else {
                            var g = `_${r}`;
                            s.descriptors[g] = {
                                enumerable: !1,
                                configurable: !1,
                                writable: !0
                            }, s.descriptors[r] = {
                                get: function() {
                                    return this[g]
                                },
                                set: function(e) {
                                    e !== this[g] && (e == null ? this[g] !== void 0 && this.$changes.delete(r) : (l && !(e instanceof p) && (e = new(p.bind.apply(p, i([void 0], e, !1)))), u && !(e instanceof h) && (e = new h(e)), e.$proxy === void 0 && (u ? e = m(e) : l && (e = f(e))), this.$changes.change(r), e.$changes && e.$changes.setParent(this, this.$changes.root, this._definition.indexes[r])), this[g] = e)
                                },
                                enumerable: !0,
                                configurable: !0
                            }
                        }
                    }
            }

            function w(e) {
                return function(t, n) {
                    var r = t.constructor;
                    r._definition.addFilter(n, e) && (r._context.useFilters = !0)
                }
            }

            function T(e) {
                return function(t, n) {
                    var r = t.constructor;
                    r._definition.addChildrenFilter(n, e) && (r._context.useFilters = !0)
                }
            }

            function E(e) {
                return e === void 0 && (e = !0),
                    function(t, n) {
                        var r = t.constructor._definition;
                        r.deprecated[n] = !0, e && (r.descriptors[n] = {
                            get: function() {
                                throw Error(`${n} is deprecated.`)
                            },
                            set: function(e) {},
                            enumerable: !1,
                            configurable: !0
                        })
                    }
            }

            function D(e, t, n) {
                for (var r in n === void 0 && (n = {}), n.context || (n.context = e._context || n.context || S), t) C(t[r], n)(e.prototype, r);
                return e
            }

            function O(e) {
                for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                return n
            }

            function k(e, t, n) {
                for (var r = 0, i = 0, a = n.length; i < a; i++) r = n.charCodeAt(i), r < 128 ? e[t++] = r : r < 2048 ? (e[t++] = 192 | r >> 6, e[t++] = 128 | r & 63) : r < 55296 || r >= 57344 ? (e[t++] = 224 | r >> 12, e[t++] = 128 | r >> 6 & 63, e[t++] = 128 | r & 63) : (i++, r = 65536 + ((r & 1023) << 10 | n.charCodeAt(i) & 1023), e[t++] = 240 | r >> 18, e[t++] = 128 | r >> 12 & 63, e[t++] = 128 | r >> 6 & 63, e[t++] = 128 | r & 63)
            }

            function A(e, t) {
                e.push(t & 255)
            }

            function j(e, t) {
                e.push(t & 255)
            }

            function M(e, t) {
                e.push(t & 255), e.push(t >> 8 & 255)
            }

            function N(e, t) {
                e.push(t & 255), e.push(t >> 8 & 255)
            }

            function P(e, t) {
                e.push(t & 255), e.push(t >> 8 & 255), e.push(t >> 16 & 255), e.push(t >> 24 & 255)
            }

            function F(e, t) {
                var n = t >> 24,
                    r = t >> 16,
                    i = t >> 8,
                    a = t;
                e.push(a & 255), e.push(i & 255), e.push(r & 255), e.push(n & 255)
            }

            function ee(e, t) {
                var n = Math.floor(t / 2 ** 32);
                F(e, t >>> 0), F(e, n)
            }

            function te(e, t) {
                var n = t / 2 ** 32 | 0;
                F(e, t >>> 0), F(e, n)
            }

            function ne(e, t) {
                oe(e, t)
            }

            function re(e, t) {
                L(e, t)
            }
            var I = new Int32Array(2),
                ie = new Float32Array(I.buffer),
                ae = new Float64Array(I.buffer);

            function oe(e, t) {
                ie[0] = t, P(e, I[0])
            }

            function L(e, t) {
                ae[0] = t, P(e, I[0]), P(e, I[1])
            }

            function se(e, t) {
                return j(e, +!!t)
            }

            function R(e, t) {
                t || (t = ``);
                var n = O(t),
                    r = 0;
                if (n < 32) e.push(n | 160), r = 1;
                else if (n < 256) e.push(217), j(e, n), r = 2;
                else if (n < 65536) e.push(218), N(e, n), r = 3;
                else if (n < 4294967296) e.push(219), F(e, n), r = 5;
                else throw Error(`String too long`);
                return k(e, e.length, t), r + n
            }

            function z(e, t) {
                return isNaN(t) ? z(e, 0) : isFinite(t) ? t === (t | 0) ? t >= 0 ? t < 128 ? (j(e, t), 1) : t < 256 ? (e.push(204), j(e, t), 2) : t < 65536 ? (e.push(205), N(e, t), 3) : t < 4294967296 ? (e.push(206), F(e, t), 5) : (e.push(207), te(e, t), 9) : t >= -32 ? (e.push(224 | t + 32), 1) : t >= -128 ? (e.push(208), A(e, t), 2) : t >= -32768 ? (e.push(209), M(e, t), 3) : t >= -2147483648 ? (e.push(210), P(e, t), 5) : (e.push(211), ee(e, t), 9) : (e.push(203), L(e, t), 9) : z(e, t > 0 ? 2 ** 53 - 1 : -(2 ** 53 - 1))
            }
            var ce = Object.freeze({
                __proto__: null,
                boolean: se,
                float32: ne,
                float64: re,
                int16: M,
                int32: P,
                int64: ee,
                int8: A,
                number: z,
                string: R,
                uint16: N,
                uint32: F,
                uint64: te,
                uint8: j,
                utf8Write: k,
                writeFloat32: oe,
                writeFloat64: L
            });

            function le(e, t, n) {
                for (var r = ``, i = 0, a = t, o = t + n; a < o; a++) {
                    var s = e[a];
                    s & 128 ? (s & 224) == 192 ? r += String.fromCharCode((s & 31) << 6 | e[++a] & 63) : (s & 240) == 224 ? r += String.fromCharCode((s & 15) << 12 | (e[++a] & 63) << 6 | e[++a] & 63) : (s & 248) == 240 ? (i = (s & 7) << 18 | (e[++a] & 63) << 12 | (e[++a] & 63) << 6 | e[++a] & 63, i >= 65536 ? (i -= 65536, r += String.fromCharCode((i >>> 10) + 55296, (i & 1023) + 56320)) : r += String.fromCharCode(i)) : console.error(`Invalid byte ` + s.toString(16)) : r += String.fromCharCode(s)
                }
                return r
            }

            function ue(e, t) {
                return B(e, t) << 24 >> 24
            }

            function B(e, t) {
                return e[t.offset++]
            }

            function de(e, t) {
                return V(e, t) << 16 >> 16
            }

            function V(e, t) {
                return e[t.offset++] | e[t.offset++] << 8
            }

            function H(e, t) {
                return e[t.offset++] | e[t.offset++] << 8 | e[t.offset++] << 16 | e[t.offset++] << 24
            }

            function U(e, t) {
                return H(e, t) >>> 0
            }

            function fe(e, t) {
                return G(e, t)
            }

            function pe(e, t) {
                return K(e, t)
            }

            function me(e, t) {
                var n = U(e, t);
                return H(e, t) * 2 ** 32 + n
            }

            function he(e, t) {
                var n = U(e, t);
                return U(e, t) * 2 ** 32 + n
            }
            var W = new Int32Array(2),
                ge = new Float32Array(W.buffer),
                _e = new Float64Array(W.buffer);

            function G(e, t) {
                return W[0] = H(e, t), ge[0]
            }

            function K(e, t) {
                return W[0] = H(e, t), W[1] = H(e, t), _e[0]
            }

            function ve(e, t) {
                return B(e, t) > 0
            }

            function ye(e, t) {
                var n = e[t.offset++],
                    r;
                n < 192 ? r = n & 31 : n === 217 ? r = B(e, t) : n === 218 ? r = V(e, t) : n === 219 && (r = U(e, t));
                var i = le(e, t.offset, r);
                return t.offset += r, i
            }

            function be(e, t) {
                var n = e[t.offset];
                return n < 192 && n > 160 || n === 217 || n === 218 || n === 219
            }

            function q(e, t) {
                var n = e[t.offset++];
                if (n < 128) return n;
                if (n === 202) return G(e, t);
                if (n === 203) return K(e, t);
                if (n === 204) return B(e, t);
                if (n === 205) return V(e, t);
                if (n === 206) return U(e, t);
                if (n === 207) return he(e, t);
                if (n === 208) return ue(e, t);
                if (n === 209) return de(e, t);
                if (n === 210) return H(e, t);
                if (n === 211) return me(e, t);
                if (n > 223) return (255 - n + 1) * -1
            }

            function xe(e, t) {
                var n = e[t.offset];
                return n < 128 || n >= 202 && n <= 211
            }

            function Se(e, t) {
                return e[t.offset] < 160
            }

            function Ce(e, t) {
                return e[t.offset - 1] === a && (e[t.offset] < 128 || e[t.offset] >= 202 && e[t.offset] <= 211)
            }
            var we = Object.freeze({
                    __proto__: null,
                    arrayCheck: Se,
                    boolean: ve,
                    float32: fe,
                    float64: pe,
                    int16: de,
                    int32: H,
                    int64: me,
                    int8: ue,
                    number: q,
                    numberCheck: xe,
                    readFloat32: G,
                    readFloat64: K,
                    string: ye,
                    stringCheck: be,
                    switchStructureCheck: Ce,
                    uint16: V,
                    uint32: U,
                    uint64: he,
                    uint8: B
                }),
                J = function() {
                    function t(e) {
                        var t = this;
                        this.$changes = new s(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e && e.forEach(function(e) {
                            return t.add(e)
                        })
                    }
                    return t.prototype.onAdd = function(t, n) {
                        return n === void 0 && (n = !0), c(this.$callbacks || (this.$callbacks = []), e.OPERATION.ADD, t, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(t) {
                        return c(this.$callbacks || (this.$callbacks = []), e.OPERATION.DELETE, t)
                    }, t.prototype.onChange = function(t) {
                        return c(this.$callbacks || (this.$callbacks = []), e.OPERATION.REPLACE, t)
                    }, t.is = function(e) {
                        return e.collection !== void 0
                    }, t.prototype.add = function(e) {
                        var t = this.$refId++;
                        return e.$changes !== void 0 && e.$changes.setParent(this, this.$changes.root, t), this.$changes.indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, e), this.$changes.change(t), t
                    }, t.prototype.at = function(e) {
                        var t = Array.from(this.$items.keys())[e];
                        return this.$items.get(t)
                    }, t.prototype.entries = function() {
                        return this.$items.entries()
                    }, t.prototype.delete = function(e) {
                        for (var t = this.$items.entries(), n, r;
                            (r = t.next()) && !r.done;)
                            if (e === r.value[1]) {
                                n = r.value[0];
                                break
                            } return n !== void 0 && (this.$changes.delete(n), this.$indexes.delete(n), this.$items.delete(n))
                    }, t.prototype.clear = function(t) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), t && l.call(this, t), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: e.OPERATION.CLEAR
                        }), this.$changes.touchParents()
                    }, t.prototype.has = function(e) {
                        return Array.from(this.$items.values()).some(function(t) {
                            return t === e
                        })
                    }, t.prototype.forEach = function(e) {
                        var t = this;
                        this.$items.forEach(function(n, r, i) {
                            return e(n, r, t)
                        })
                    }, t.prototype.values = function() {
                        return this.$items.values()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.$items.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setIndex = function(e, t) {
                        this.$indexes.set(e, t)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var t = this.$indexes.get(e);
                        this.$items.delete(t), this.$indexes.delete(e)
                    }, t.prototype.toArray = function() {
                        return Array.from(this.$items.values())
                    }, t.prototype.toJSON = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push(typeof t.toJSON == `function` ? t.toJSON() : t)
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(e) {
                            e.$changes ? n.add(e.clone()) : n.add(e)
                        })), n
                    }, t
                }(),
                Y = function() {
                    function t(e) {
                        var t = this;
                        this.$changes = new s(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e && e.forEach(function(e) {
                            return t.add(e)
                        })
                    }
                    return t.prototype.onAdd = function(t, n) {
                        return n === void 0 && (n = !0), c(this.$callbacks || (this.$callbacks = []), e.OPERATION.ADD, t, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(t) {
                        return c(this.$callbacks || (this.$callbacks = []), e.OPERATION.DELETE, t)
                    }, t.prototype.onChange = function(t) {
                        return c(this.$callbacks || (this.$callbacks = []), e.OPERATION.REPLACE, t)
                    }, t.is = function(e) {
                        return e.set !== void 0
                    }, t.prototype.add = function(t) {
                        var n;
                        if (this.has(t)) return !1;
                        var r = this.$refId++;
                        t.$changes !== void 0 && t.$changes.setParent(this, this.$changes.root, r);
                        var i = ((n = this.$changes.indexes[r]) == null ? void 0 : n.op) ?? e.OPERATION.ADD;
                        return this.$changes.indexes[r] = r, this.$indexes.set(r, r), this.$items.set(r, t), this.$changes.change(r, i), r
                    }, t.prototype.entries = function() {
                        return this.$items.entries()
                    }, t.prototype.delete = function(e) {
                        for (var t = this.$items.entries(), n, r;
                            (r = t.next()) && !r.done;)
                            if (e === r.value[1]) {
                                n = r.value[0];
                                break
                            } return n !== void 0 && (this.$changes.delete(n), this.$indexes.delete(n), this.$items.delete(n))
                    }, t.prototype.clear = function(t) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), t && l.call(this, t), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: e.OPERATION.CLEAR
                        }), this.$changes.touchParents()
                    }, t.prototype.has = function(e) {
                        for (var t = this.$items.values(), n = !1, r;
                            (r = t.next()) && !r.done;)
                            if (e === r.value) {
                                n = !0;
                                break
                            } return n
                    }, t.prototype.forEach = function(e) {
                        var t = this;
                        this.$items.forEach(function(n, r, i) {
                            return e(n, r, t)
                        })
                    }, t.prototype.values = function() {
                        return this.$items.values()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.$items.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setIndex = function(e, t) {
                        this.$indexes.set(e, t)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var t = this.$indexes.get(e);
                        this.$items.delete(t), this.$indexes.delete(e)
                    }, t.prototype.toArray = function() {
                        return Array.from(this.$items.values())
                    }, t.prototype.toJSON = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push(typeof t.toJSON == `function` ? t.toJSON() : t)
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(e) {
                            e.$changes ? n.add(e.clone()) : n.add(e)
                        })), n
                    }, t
                }(),
                Te = function() {
                    function e() {
                        this.refIds = new WeakSet, this.containerIndexes = new WeakMap
                    }
                    return e.prototype.addRefId = function(e) {
                        this.refIds.has(e) || (this.refIds.add(e), this.containerIndexes.set(e, new Set))
                    }, e.get = function(t) {
                        return t.$filterState === void 0 && (t.$filterState = new e), t.$filterState
                    }, e
                }(),
                Ee = function() {
                    function e() {
                        this.refs = new Map, this.refCounts = {}, this.deletedRefs = new Set, this.nextUniqueId = 0
                    }
                    return e.prototype.getNextUniqueId = function() {
                        return this.nextUniqueId++
                    }, e.prototype.addRef = function(e, t, n) {
                        n === void 0 && (n = !0), this.refs.set(e, t), n && (this.refCounts[e] = (this.refCounts[e] || 0) + 1)
                    }, e.prototype.removeRef = function(e) {
                        var t = this.refCounts[e];
                        t === void 0 ? console.warn(`trying to remove reference ${e} that doesn't exist`) : t === 0 ? console.warn(`trying to remove reference ${e} with 0 refCount`) : (this.refCounts[e] = t - 1, this.deletedRefs.add(e))
                    }, e.prototype.clearRefs = function() {
                        this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {}
                    }, e.prototype.garbageCollectDeletedRefs = function() {
                        var e = this;
                        this.deletedRefs.forEach(function(t) {
                            if (!(e.refCounts[t] > 0)) {
                                var n = e.refs.get(t);
                                if (n instanceof Z)
                                    for (var r in n._definition.schema) typeof n._definition.schema[r] != `string` && n[r] && n[r].$changes && e.removeRef(n[r].$changes.refId);
                                else {
                                    var i = n.$changes.parent._definition,
                                        a = i.schema[i.fieldsByIndex[n.$changes.parentIndex]];
                                    typeof Object.values(a)[0] == `function` && Array.from(n.values()).forEach(function(t) {
                                        return e.removeRef(t.$changes.refId)
                                    })
                                }
                                e.refs.delete(t), delete e.refCounts[t]
                            }
                        }), this.deletedRefs.clear()
                    }, e
                }(),
                X = function(e) {
                    n(t, e);

                    function t() {
                        return e !== null && e.apply(this, arguments) || this
                    }
                    return t
                }(Error);

            function De(e, t, n, r) {
                var i, a = !1;
                switch (t) {
                    case `number`:
                    case `int8`:
                    case `uint8`:
                    case `int16`:
                    case `uint16`:
                    case `int32`:
                    case `uint32`:
                    case `int64`:
                    case `uint64`:
                    case `float32`:
                    case `float64`:
                        i = `number`, isNaN(e) && console.log(`trying to encode "NaN" in ${n.constructor.name}#${r}`);
                        break;
                    case `string`:
                        i = `string`, a = !0;
                        break;
                    case `boolean`:
                        return
                }
                if (typeof e !== i && (!a || a && e !== null)) {
                    var o = `'${JSON.stringify(e)}'${e&&e.constructor&&` (${e.constructor.name})`||``}`;
                    throw new X(`a '${i}' was expected, but ${o} was provided in ${n.constructor.name}#${r}`)
                }
            }

            function Oe(e, t, n, r) {
                if (!(e instanceof t)) throw new X(`a '${t.name}' was expected, but '${e.constructor.name}' was provided in ${n.constructor.name}#${r}`)
            }

            function ke(e, t, n, r, i) {
                De(n, e, r, i);
                var a = ce[e];
                if (a) a(t, n);
                else throw new X(`a '${e}' was expected, but ${n} was provided in ${r.constructor.name}#${i}`)
            }

            function Ae(e, t, n) {
                return we[e](t, n)
            }
            var Z = function() {
                function t() {
                    var e = [...arguments];
                    Object.defineProperties(this, {
                        $changes: {
                            value: new s(this, void 0, new Ee),
                            enumerable: !1,
                            writable: !0
                        },
                        $callbacks: {
                            value: void 0,
                            enumerable: !1,
                            writable: !0
                        }
                    });
                    var t = this._definition.descriptors;
                    t && Object.defineProperties(this, t), e[0] && this.assign(e[0])
                }
                return t.onError = function(e) {
                    console.error(e)
                }, t.is = function(e) {
                    return e._definition && e._definition.schema !== void 0
                }, t.prototype.onChange = function(t) {
                    return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.REPLACE, t)
                }, t.prototype.onRemove = function(t) {
                    return c(this.$callbacks || (this.$callbacks = {}), e.OPERATION.DELETE, t)
                }, t.prototype.assign = function(e) {
                    return Object.assign(this, e), this
                }, Object.defineProperty(t.prototype, "_definition", {
                    get: function() {
                        return this.constructor._definition
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setDirty = function(e, t) {
                    this.$changes.change(e, t)
                }, t.prototype.listen = function(e, t, n) {
                    var r = this;
                    return n === void 0 && (n = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[e] || (this.$callbacks[e] = []), this.$callbacks[e].push(t), n && this[e] !== void 0 && t(this[e], void 0),
                        function() {
                            return u(r.$callbacks[e], r.$callbacks[e].indexOf(t))
                        }
                }, t.prototype.decode = function(n, r, i) {
                    r === void 0 && (r = {
                        offset: 0
                    }), i === void 0 && (i = this);
                    var o = [],
                        s = this.$changes.root,
                        c = n.length,
                        l = 0;
                    for (s.refs.set(l, this); r.offset < c;) {
                        var u = n[r.offset++];
                        if (u == a) {
                            l = q(n, r);
                            var d = s.refs.get(l);
                            if (!d) throw Error(`"refId" not found: ${l}`);
                            i = d
                        } else {
                            var f = i.$changes,
                                m = i._definition !== void 0,
                                g = m ? u >> 6 << 6 : u;
                            if (g === e.OPERATION.CLEAR) i.clear(o);
                            else {
                                var _ = m ? u % (g || 255) : q(n, r),
                                    y = m ? i._definition.fieldsByIndex[_] : ``,
                                    b = f.getType(_),
                                    x = void 0,
                                    S = void 0,
                                    C = void 0;
                                if (m ? S = i[`_${y}`] : (S = i.getByIndex(_), (g & e.OPERATION.ADD) === e.OPERATION.ADD ? (C = i instanceof h ? ye(n, r) : _, i.setIndex(_, C)) : C = i.getIndex(_)), (g & e.OPERATION.DELETE) === e.OPERATION.DELETE && (g !== e.OPERATION.DELETE_AND_ADD && i.deleteByIndex(_), S && S.$changes && s.removeRef(S.$changes.refId), x = null), y === void 0) {
                                    console.warn(`@colyseus/schema: definition mismatch`);
                                    for (var w = {
                                            offset: r.offset
                                        }; r.offset < c && !(Ce(n, r) && (w.offset = r.offset + 1, s.refs.has(q(n, w))));) r.offset++
                                } else {
                                    if (g !== e.OPERATION.DELETE) {
                                        if (t.is(b)) {
                                            var T = q(n, r);
                                            if (x = s.refs.get(T), g !== e.OPERATION.REPLACE) {
                                                var E = this.getSchemaType(n, r, b);
                                                x || (x = this.createTypeInstance(E), x.$changes.refId = T, S && (x.$callbacks = S.$callbacks, S.$changes.refId && T !== S.$changes.refId && s.removeRef(S.$changes.refId))), s.addRef(T, x, x !== S)
                                            }
                                        } else if (typeof b == `string`) x = Ae(b, n, r);
                                        else {
                                            var D = v(Object.keys(b)[0]),
                                                O = q(n, r),
                                                k = s.refs.has(O) ? S || s.refs.get(O) : new D.constructor;
                                            if (x = k.clone(!0), x.$changes.refId = O, S && (x.$callbacks = S.$callbacks, S.$changes.refId && O !== S.$changes.refId)) {
                                                s.removeRef(S.$changes.refId);
                                                for (var A = S.entries(), j = void 0;
                                                    (j = A.next()) && !j.done;) {
                                                    var M = j.value,
                                                        N = M[0],
                                                        P = M[1];
                                                    o.push({
                                                        refId: O,
                                                        op: e.OPERATION.DELETE,
                                                        field: N,
                                                        value: void 0,
                                                        previousValue: P
                                                    })
                                                }
                                            }
                                            s.addRef(O, x, k !== S)
                                        }
                                    }
                                    if (x != null) {
                                        if (x.$changes && x.$changes.setParent(f.ref, f.root, _), i instanceof t) i[y] = x;
                                        else if (i instanceof h) {
                                            var N = C;
                                            i.$items.set(N, x), i.$changes.allChanges.add(_)
                                        } else if (i instanceof p) i.setAt(_, x);
                                        else if (i instanceof J) {
                                            var F = i.add(x);
                                            i.setIndex(_, F)
                                        } else if (i instanceof Y) {
                                            var F = i.add(x);
                                            F !== !1 && i.setIndex(_, F)
                                        }
                                    }
                                    S !== x && o.push({
                                        refId: l,
                                        op: g,
                                        field: y,
                                        dynamicIndex: C,
                                        value: x,
                                        previousValue: S
                                    })
                                }
                            }
                        }
                    }
                    return this._triggerChanges(o), s.garbageCollectDeletedRefs(), o
                }, t.prototype.encode = function(n, r, i) {
                    n === void 0 && (n = !1), r === void 0 && (r = []), i === void 0 && (i = !1);
                    for (var o = this.$changes, s = new WeakSet, c = [o], l = 1, u = 0; u < l; u++) {
                        var d = c[u],
                            f = d.ref,
                            p = f instanceof t;
                        d.ensureRefId(), s.add(d), d !== o && (d.changed || n) && (j(r, a), z(r, d.refId));
                        for (var m = n ? Array.from(d.allChanges) : Array.from(d.changes.values()), g = 0, _ = m.length; g < _; g++) {
                            var y = n ? {
                                    op: e.OPERATION.ADD,
                                    index: m[g]
                                } : m[g],
                                b = y.index,
                                x = p ? f._definition.fieldsByIndex && f._definition.fieldsByIndex[b] : b,
                                S = r.length;
                            if (y.op !== e.OPERATION.TOUCH) {
                                if (p) j(r, b | y.op);
                                else {
                                    if (j(r, y.op), y.op === e.OPERATION.CLEAR) continue;
                                    z(r, b)
                                }
                            }
                            if (!p && (y.op & e.OPERATION.ADD) == e.OPERATION.ADD && f instanceof h) {
                                var C = d.ref.$indexes.get(b);
                                R(r, C)
                            }
                            if (y.op !== e.OPERATION.DELETE) {
                                var w = d.getType(b),
                                    T = d.getValue(b);
                                if (T && T.$changes && !s.has(T.$changes) && (c.push(T.$changes), T.$changes.ensureRefId(), l++), y.op !== e.OPERATION.TOUCH) {
                                    if (t.is(w)) Oe(T, w, f, x), z(r, T.$changes.refId), (y.op & e.OPERATION.ADD) === e.OPERATION.ADD && this.tryEncodeTypeId(r, w, T.constructor);
                                    else if (typeof w == `string`) ke(w, r, T, f, x);
                                    else {
                                        var E = v(Object.keys(w)[0]);
                                        Oe(f[`_${x}`], E.constructor, f, x), z(r, T.$changes.refId)
                                    }
                                    i && d.cache(b, r.slice(S))
                                }
                            }
                        }!n && !i && d.discard()
                    }
                    return r
                }, t.prototype.encodeAll = function(e) {
                    return this.encode(!0, [], e)
                }, t.prototype.applyFilters = function(n, r) {
                    r === void 0 && (r = !1);
                    for (var i = this, o = new Set, s = Te.get(n), c = [this.$changes], l = 1, u = [], d = function(d) {
                            var f = c[d];
                            if (o.has(f.refId)) return `continue`;
                            var p = f.ref,
                                m = p instanceof t;
                            j(u, a), z(u, f.refId);
                            var g = s.refIds.has(f),
                                _ = r || !g;
                            s.addRefId(f);
                            var v = s.containerIndexes.get(f),
                                y = _ ? Array.from(f.allChanges) : Array.from(f.changes.values());
                            !r && m && p._definition.indexesWithFilters && p._definition.indexesWithFilters.forEach(function(t) {
                                !v.has(t) && f.allChanges.has(t) && (_ ? y.push(t) : y.push({
                                    op: e.OPERATION.ADD,
                                    index: t
                                }))
                            });
                            for (var b = 0, x = y.length; b < x; b++) {
                                var S = _ ? {
                                    op: e.OPERATION.ADD,
                                    index: y[b]
                                } : y[b];
                                if (S.op === e.OPERATION.CLEAR) j(u, S.op);
                                else {
                                    var C = S.index;
                                    if (S.op === e.OPERATION.DELETE) m ? j(u, S.op | C) : (j(u, S.op), z(u, C));
                                    else {
                                        var w = f.getValue(C),
                                            T = f.getType(C);
                                        if (m) {
                                            var E = p._definition.filters && p._definition.filters[C];
                                            if (E && !E.call(p, n, w, i)) {
                                                w && w.$changes && o.add(w.$changes.refId);
                                                continue
                                            }
                                        } else {
                                            var D = f.parent,
                                                E = f.getChildrenFilter();
                                            if (E && !E.call(D, n, p.$indexes.get(C), w, i)) {
                                                w && w.$changes && o.add(w.$changes.refId);
                                                continue
                                            }
                                        }
                                        if (w.$changes && (c.push(w.$changes), l++), S.op !== e.OPERATION.TOUCH) {
                                            if (S.op === e.OPERATION.ADD || m) u.push.apply(u, f.caches[C] ?? []), v.add(C);
                                            else if (v.has(C)) u.push.apply(u, f.caches[C] ?? []);
                                            else {
                                                if (v.add(C), j(u, e.OPERATION.ADD), z(u, C), p instanceof h) {
                                                    var O = f.ref.$indexes.get(C);
                                                    R(u, O)
                                                }
                                                w.$changes ? z(u, w.$changes.refId) : ce[T](u, w)
                                            }
                                        } else if (w.$changes && !m) {
                                            if (j(u, e.OPERATION.ADD), z(u, C), p instanceof h) {
                                                var O = f.ref.$indexes.get(C);
                                                R(u, O)
                                            }
                                            z(u, w.$changes.refId)
                                        }
                                    }
                                }
                            }
                        }, f = 0; f < l; f++) d(f);
                    return u
                }, t.prototype.clone = function() {
                    var e, t = new this.constructor;
                    for (var n in this._definition.schema) t[n] = typeof this[n] == `object` && typeof((e = this[n]) == null ? void 0 : e.clone) == `function` ? this[n].clone() : this[n];
                    return t
                }, t.prototype.toJSON = function() {
                    var e = this._definition.schema,
                        t = this._definition.deprecated,
                        n = {};
                    for (var r in e) !t[r] && this[r] !== null && this[r] !== void 0 && (n[r] = typeof this[r].toJSON == `function` ? this[r].toJSON() : this[`_${r}`]);
                    return n
                }, t.prototype.discardAllChanges = function() {
                    this.$changes.discardAll()
                }, t.prototype.getByIndex = function(e) {
                    return this[this._definition.fieldsByIndex[e]]
                }, t.prototype.deleteByIndex = function(e) {
                    this[this._definition.fieldsByIndex[e]] = void 0
                }, t.prototype.tryEncodeTypeId = function(e, t, n) {
                    t._typeid !== n._typeid && (j(e, o), z(e, n._typeid))
                }, t.prototype.getSchemaType = function(e, t, n) {
                    var r;
                    return e[t.offset] === o && (t.offset++, r = this.constructor._context.get(q(e, t))), r || n
                }, t.prototype.createTypeInstance = function(e) {
                    var t = new e;
                    return t.$changes.root = this.$changes.root, t
                }, t.prototype._triggerChanges = function(n) {
                    for (var r, i, a, o, s, c, l, u, d, f = new Set, p = this.$changes.root.refs, m = function(m) {
                            var h = n[m],
                                g = h.refId,
                                _ = p.get(g),
                                v = _.$callbacks;
                            if ((h.op & e.OPERATION.DELETE) === e.OPERATION.DELETE && h.previousValue instanceof t && ((i = (r = h.previousValue.$callbacks) == null ? void 0 : r[e.OPERATION.DELETE]) == null || i.forEach(function(e) {
                                    return e()
                                })), !v) return `continue`;
                            if (_ instanceof t) {
                                if (!f.has(g)) try {
                                    (a = v == null ? void 0 : v[e.OPERATION.REPLACE]) == null || a.forEach(function(e) {
                                        return e()
                                    })
                                } catch (e) {
                                    t.onError(e)
                                }
                                try {
                                    v.hasOwnProperty(h.field) && ((o = v[h.field]) == null || o.forEach(function(e) {
                                        return e(h.value, h.previousValue)
                                    }))
                                } catch (e) {
                                    t.onError(e)
                                }
                            } else h.op === e.OPERATION.ADD && h.previousValue === void 0 ? (s = v[e.OPERATION.ADD]) == null || s.forEach(function(e) {
                                return e(h.value, h.dynamicIndex ?? h.field)
                            }) : h.op === e.OPERATION.DELETE ? h.previousValue !== void 0 && ((c = v[e.OPERATION.DELETE]) == null || c.forEach(function(e) {
                                return e(h.previousValue, h.dynamicIndex ?? h.field)
                            })) : h.op === e.OPERATION.DELETE_AND_ADD && (h.previousValue !== void 0 && ((l = v[e.OPERATION.DELETE]) == null || l.forEach(function(e) {
                                return e(h.previousValue, h.dynamicIndex ?? h.field)
                            })), (u = v[e.OPERATION.ADD]) == null || u.forEach(function(e) {
                                return e(h.value, h.dynamicIndex ?? h.field)
                            })), h.value !== h.previousValue && ((d = v[e.OPERATION.REPLACE]) == null || d.forEach(function(e) {
                                return e(h.value, h.dynamicIndex ?? h.field)
                            }));
                            f.add(g)
                        }, h = 0; h < n.length; h++) m(h)
                }, t._definition = y.create(), t
            }();

            function je(e) {
                for (var t = [e.$changes], n = 1, r = {}, i = r, a = function(e) {
                        var n = t[e];
                        n.changes.forEach(function(e) {
                            var t = n.ref,
                                r = e.index,
                                a = t._definition ? t._definition.fieldsByIndex[r] : t.$indexes.get(r);
                            i[a] = n.getValue(r)
                        })
                    }, o = 0; o < n; o++) a(o);
                return r
            }
            var Q = {
                    context: new x
                },
                Me = function(e) {
                    n(t, e);

                    function t() {
                        return e !== null && e.apply(this, arguments) || this
                    }
                    return r([C(`string`, Q)], t.prototype, `name`, void 0), r([C(`string`, Q)], t.prototype, `type`, void 0), r([C(`number`, Q)], t.prototype, `referencedType`, void 0), t
                }(Z),
                $ = function(e) {
                    n(t, e);

                    function t() {
                        var t = e !== null && e.apply(this, arguments) || this;
                        return t.fields = new p, t
                    }
                    return r([C(`number`, Q)], t.prototype, `id`, void 0), r([C([Me], Q)], t.prototype, `fields`, void 0), t
                }(Z),
                Ne = function(e) {
                    n(t, e);

                    function t() {
                        var t = e !== null && e.apply(this, arguments) || this;
                        return t.types = new p, t
                    }
                    return t.encode = function(e) {
                        var n, r = e.constructor,
                            i = new t;
                        i.rootType = r._typeid;
                        var a = function(e, t) {
                                for (var n in t) {
                                    var r = new Me;
                                    r.name = n;
                                    var a = void 0;
                                    if (typeof t[n] == `string`) a = t[n];
                                    else {
                                        var o = t[n],
                                            s = void 0;
                                        Z.is(o) ? (a = `ref`, s = t[n]) : (a = Object.keys(o)[0], typeof o[a] == `string` ? a += `:` + o[a] : s = o[a]), r.referencedType = s ? s._typeid : -1
                                    }
                                    r.type = a, e.fields.push(r)
                                }
                                i.types.push(e)
                            },
                            o = (n = r._context) == null ? void 0 : n.types;
                        for (var s in o) {
                            var c = new $;
                            c.id = Number(s), a(c, o[s]._definition.schema)
                        }
                        return i.encodeAll()
                    }, t.decode = function(e, r) {
                        var i = new x,
                            a = new t;
                        a.decode(e, r);
                        var o = a.types.reduce(function(e, t) {
                            var r = function(e) {
                                    n(t, e);

                                    function t() {
                                        return e !== null && e.apply(this, arguments) || this
                                    }
                                    return t
                                }(Z),
                                a = t.id;
                            return e[a] = r, i.add(r, a), e
                        }, {});
                        a.types.forEach(function(e) {
                            var t = o[e.id];
                            e.fields.forEach(function(e) {
                                var n;
                                if (e.referencedType !== void 0) {
                                    var r = e.type,
                                        a = o[e.referencedType];
                                    if (!a) {
                                        var s = e.type.split(`:`);
                                        r = s[0], a = s[1]
                                    }
                                    r === `ref` ? C(a, {
                                        context: i
                                    })(t.prototype, e.name) : C((n = {}, n[r] = a, n), {
                                        context: i
                                    })(t.prototype, e.name)
                                } else C(e.type, {
                                    context: i
                                })(t.prototype, e.name)
                            })
                        });
                        var s = o[a.rootType],
                            c = new s;
                        for (var l in s._definition.schema) {
                            var u = s._definition.schema[l];
                            typeof u != `string` && (c[l] = typeof u == `function` ? new u : new(v(Object.keys(u)[0])).constructor)
                        }
                        return c
                    }, r([C([$], Q)], t.prototype, `types`, void 0), r([C(`number`, Q)], t.prototype, `rootType`, void 0), t
                }(Z);
            _(`map`, {
                constructor: h
            }), _(`array`, {
                constructor: p
            }), _(`set`, {
                constructor: Y
            }), _(`collection`, {
                constructor: J
            }), e.ArraySchema = p, e.CollectionSchema = J, e.Context = x, e.MapSchema = h, e.Reflection = Ne, e.ReflectionField = Me, e.ReflectionType = $, e.Schema = Z, e.SchemaDefinition = y, e.SetSchema = Y, e.decode = we, e.defineTypes = D, e.deprecated = E, e.dumpChanges = je, e.encode = ce, e.filter = w, e.filterChildren = T, e.hasFilter = b, e.registerType = _, e.type = C
        }))
    })),
    h = r((e => {
        var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
                r === void 0 && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            }) : (function(e, t, n, r) {
                r === void 0 && (r = n), e[r] = t[n]
            })),
            n = e && e.__setModuleDefault || (Object.create ? (function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }) : function(e, t) {
                e.default = t
            }),
            r = e && e.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (e != null)
                    for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
                return n(r, e), r
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Room = void 0;
        var i = r(o()),
            s = l(),
            c = u(),
            h = d(),
            g = f(),
            _ = p(),
            v = m(),
            y = a();
        e.Room = class e {
            constructor(e, t) {
                this.onStateChange = (0, _.createSignal)(), this.onError = (0, _.createSignal)(), this.onLeave = (0, _.createSignal)(), this.onJoin = (0, _.createSignal)(), this.hasJoined = !1, this.onMessageHandlers = (0, g.createNanoEvents)(), this.roomId = null, this.name = e, t && (this.serializer = new((0, h.getSerializer)(`schema`)), this.rootSchema = t, this.serializer.state = new t), this.onError((e, t) => {
                    var n;
                    return (n = console.warn) == null ? void 0 : n.call(console, `colyseus.js - onError => (${e}) ${t}`)
                }), this.onLeave(() => this.removeAllListeners())
            }
            get id() {
                return this.roomId
            }
            connect(t, n, r = this, i) {
                let a = new s.Connection;
                r.connection = a, a.events.onmessage = e.prototype.onMessageCallback.bind(r), a.events.onclose = function(e) {
                    var t;
                    r.hasJoined ? e.code === y.CloseCode.DEVMODE_RESTART && n ? n() : (r.onLeave.invoke(e.code, e.reason), r.destroy()) : ((t = console.warn) == null || t.call(console, `Room connection was closed unexpectedly (${e.code}): ${e.reason}`), r.onError.invoke(e.code, e.reason))
                }, a.events.onerror = function(e) {
                    var t;
                    (t = console.warn) == null || t.call(console, `Room, onError (${e.code}): ${e.reason}`), r.onError.invoke(e.code, e.reason)
                }, a.connect(t, i)
            }
            leave(e = !0) {
                return new Promise(t => {
                    this.onLeave(e => t(e)), this.connection ? e ? this.connection.send([c.Protocol.LEAVE_ROOM]) : this.connection.close() : this.onLeave.invoke(y.CloseCode.CONSENTED)
                })
            }
            onMessage(e, t) {
                return this.onMessageHandlers.on(this.getMessageHandlerKey(e), t)
            }
            send(e, t) {
                let n = [c.Protocol.ROOM_DATA];
                typeof e == `string` ? v.encode.string(n, e) : v.encode.number(n, e);
                let r;
                if (t !== void 0) {
                    let e = i.encode(t);
                    r = new Uint8Array(n.length + e.byteLength), r.set(new Uint8Array(n), 0), r.set(new Uint8Array(e), n.length)
                } else r = new Uint8Array(n);
                this.connection.send(r.buffer)
            }
            sendBytes(e, t) {
                let n = [c.Protocol.ROOM_DATA_BYTES];
                typeof e == `string` ? v.encode.string(n, e) : v.encode.number(n, e);
                let r;
                r = new Uint8Array(n.length + (t.byteLength || t.length)), r.set(new Uint8Array(n), 0), r.set(new Uint8Array(t), n.length), this.connection.send(r.buffer)
            }
            get state() {
                return this.serializer.getState()
            }
            removeAllListeners() {
                this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {}
            }
            onMessageCallback(e) {
                let t = Array.from(new Uint8Array(e.data)),
                    n = t[0];
                if (n === c.Protocol.JOIN_ROOM) {
                    let e = 1,
                        n = (0, c.utf8Read)(t, e);
                    if (e += (0, c.utf8Length)(n), this.serializerId = (0, c.utf8Read)(t, e), e += (0, c.utf8Length)(this.serializerId), !this.serializer) {
                        let e = (0, h.getSerializer)(this.serializerId);
                        this.serializer = new e
                    }
                    t.length > e && this.serializer.handshake && this.serializer.handshake(t, {
                        offset: e
                    }), this.reconnectionToken = `${this.roomId}:${n}`, this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([c.Protocol.JOIN_ROOM])
                } else if (n === c.Protocol.ERROR) {
                    let e = {
                            offset: 1
                        },
                        n = v.decode.number(t, e),
                        r = v.decode.string(t, e);
                    this.onError.invoke(n, r)
                } else if (n === c.Protocol.LEAVE_ROOM) this.leave();
                else if (n === c.Protocol.ROOM_DATA_SCHEMA) {
                    let e = {
                            offset: 1
                        },
                        n = this.serializer.getState().constructor._context.get(v.decode.number(t, e)),
                        r = new n;
                    r.decode(t, e), this.dispatchMessage(n, r)
                } else if (n === c.Protocol.ROOM_STATE) t.shift(), this.setState(t);
                else if (n === c.Protocol.ROOM_STATE_PATCH) t.shift(), this.patch(t);
                else if (n === c.Protocol.ROOM_DATA) {
                    let n = {
                            offset: 1
                        },
                        r = v.decode.stringCheck(t, n) ? v.decode.string(t, n) : v.decode.number(t, n),
                        a = t.length > n.offset ? i.decode(e.data, n.offset) : void 0;
                    this.dispatchMessage(r, a)
                } else if (n === c.Protocol.ROOM_DATA_BYTES) {
                    let e = {
                            offset: 1
                        },
                        n = v.decode.stringCheck(t, e) ? v.decode.string(t, e) : v.decode.number(t, e);
                    this.dispatchMessage(n, new Uint8Array(t.slice(e.offset)))
                }
            }
            setState(e) {
                this.serializer.setState(e), this.onStateChange.invoke(this.serializer.getState())
            }
            patch(e) {
                this.serializer.patch(e), this.onStateChange.invoke(this.serializer.getState())
            }
            dispatchMessage(e, t) {
                var n;
                let r = this.getMessageHandlerKey(e);
                this.onMessageHandlers.events[r] ? this.onMessageHandlers.emit(r, t) : this.onMessageHandlers.events[`*`] ? this.onMessageHandlers.emit(`*`, e, t) : (n = console.warn) == null || n.call(console, `colyseus.js: onMessage() not registered for type '${e}'.`)
            }
            destroy() {
                this.serializer && this.serializer.teardown()
            }
            getMessageHandlerKey(e) {
                switch (typeof e) {
                    case `function`:
                        return `$${e._typeid}`;
                    case `string`:
                        return e;
                    case `number`:
                        return `i${e}`;
                    default:
                        throw Error(`invalid message type.`)
                }
            }
        }
    })),
    g = n({
        del: () => S,
        get: () => y,
        patch: () => x,
        post: () => b,
        put: () => C,
        send: () => v
    });

function _(e, t) {
    t.headers = e.headers || {}, t.statusMessage = e.statusText, t.statusCode = e.status, t.data = e.response
}

function v(e, t, n) {
    return new Promise(function(r, i) {
        n = n || {};
        var a = new XMLHttpRequest,
            o, s, c, l = n.body,
            u = n.headers || {};
        for (o in n.timeout && (a.timeout = n.timeout), a.ontimeout = a.onerror = function(e) {
                e.timeout = e.type == `timeout`, i(e)
            }, a.open(e, t.href || t), a.onload = function() {
                for (c = a.getAllResponseHeaders().trim().split(/[\r\n]+/), _(a, a); s = c.shift();) s = s.split(`: `), a.headers[s.shift().toLowerCase()] = s.join(`: `);
                if (s = a.headers[`content-type`], s && ~s.indexOf(`application/json`)) try {
                    a.data = JSON.parse(a.data, n.reviver)
                } catch (e) {
                    return _(a, e), i(e)
                }(a.status >= 400 ? i : r)(a)
            }, typeof FormData < `u` && l instanceof FormData || l && typeof l == `object` && (u[`content-type`] = `application/json`, l = JSON.stringify(l)), a.withCredentials = !!n.withCredentials, u) a.setRequestHeader(o, u[o]);
        a.send(l)
    })
}
var y, b, x, S, C, w = t((() => {
        y = v.bind(v, `GET`), b = v.bind(v, `POST`), x = v.bind(v, `PATCH`), S = v.bind(v, `DELETE`), C = v.bind(v, `PUT`)
    })),
    T = r((t => {
        var n = t && t.__createBinding || (Object.create ? (function(e, t, n, r) {
                r === void 0 && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            }) : (function(e, t, n, r) {
                r === void 0 && (r = n), e[r] = t[n]
            })),
            r = t && t.__setModuleDefault || (Object.create ? (function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }) : function(e, t) {
                e.default = t
            }),
            i = t && t.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HTTP = void 0;
        var o = a(),
            s = i((w(), e(g)));
        t.HTTP = class {
            constructor(e, t = {}) {
                this.client = e, this.headers = t
            }
            get(e, t = {}) {
                return this.request(`get`, e, t)
            }
            post(e, t = {}) {
                return this.request(`post`, e, t)
            }
            del(e, t = {}) {
                return this.request(`del`, e, t)
            }
            put(e, t = {}) {
                return this.request(`put`, e, t)
            }
            request(e, t, n = {}) {
                return s[e](this.client.getHttpEndpoint(t), this.getOptions(n)).catch(e => {
                    var t;
                    let n = e.statusCode,
                        r = ((t = e.data) == null ? void 0 : t.error) || e.statusMessage || e.message;
                    throw !n && !r ? e : new o.ServerError(n, r)
                })
            }
            getOptions(e) {
                return e.headers = Object.assign({}, this.headers, e.headers), this.authToken && (e.headers.Authorization = `Bearer ${this.authToken}`), typeof cc < `u` && cc.sys && cc.sys.isNative || (e.withCredentials = !0), e
            }
        }
    })),
    E = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getItem = e.removeItem = e.setItem = void 0;
        var t;

        function n() {
            if (!t) try {
                t = typeof cc < `u` && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
            } catch {}
            return t || (t = {
                cache: {},
                setItem: function(e, t) {
                    this.cache[e] = t
                },
                getItem: function(e) {
                    this.cache[e]
                },
                removeItem: function(e) {
                    delete this.cache[e]
                }
            }), t
        }

        function r(e, t) {
            n().setItem(e, t)
        }
        e.setItem = r;

        function i(e) {
            n().removeItem(e)
        }
        e.removeItem = i;

        function a(e, t) {
            let r = n().getItem(e);
            typeof Promise > `u` || !(r instanceof Promise) ? t(r) : r.then(e => t(e))
        }
        e.getItem = a
    })),
    D = r((e => {
        var t = e && e.__awaiter || function(e, t, n, r) {
                function i(e) {
                    return e instanceof n ? e : new n(function(t) {
                        t(e)
                    })
                }
                return new(n || (n = Promise))(function(n, a) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : i(e.value).then(o, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            n = e && e.__classPrivateFieldGet || function(e, t, n, r) {
                if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
                if (typeof t == `function` ? e !== t || !r : !t.has(e)) throw TypeError(`Cannot read private member from an object whose class did not declare it`);
                return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e)
            },
            r = e && e.__classPrivateFieldSet || function(e, t, n, r, i) {
                if (r === `m`) throw TypeError(`Private method is not writable`);
                if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
                if (typeof t == `function` ? e !== t || !i : !t.has(e)) throw TypeError(`Cannot write private member to an object whose class did not declare it`);
                return r === `a` ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            },
            i, a, o, s;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Auth = void 0;
        var c = E(),
            l = f();
        e.Auth = class {
            constructor(e) {
                this.http = e, this.settings = {
                    path: `/auth`,
                    key: `colyseus-auth-token`
                }, i.set(this, !1), a.set(this, void 0), o.set(this, void 0), s.set(this, (0, l.createNanoEvents)()), (0, c.getItem)(this.settings.key, e => this.token = e)
            }
            set token(e) {
                this.http.authToken = e
            }
            get token() {
                return this.http.authToken
            }
            onChange(e) {
                let t = n(this, s, `f`).on(`change`, e);
                return n(this, i, `f`) || r(this, a, new Promise((e, t) => {
                    this.getUserData().then(e => {
                        this.emitChange(Object.assign(Object.assign({}, e), {
                            token: this.token
                        }))
                    }).catch(e => {
                        this.emitChange({
                            user: null,
                            token: void 0
                        })
                    }).finally(() => {
                        e()
                    })
                }), `f`), r(this, i, !0, `f`), t
            }
            getUserData() {
                return t(this, void 0, void 0, function*() {
                    if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
                    throw Error(`missing auth.token`)
                })
            }
            registerWithEmailAndPassword(e, n, r) {
                return t(this, void 0, void 0, function*() {
                    let t = (yield this.http.post(`${this.settings.path}/register`, {
                        body: {
                            email: e,
                            password: n,
                            options: r
                        }
                    })).data;
                    return this.emitChange(t), t
                })
            }
            signInWithEmailAndPassword(e, n) {
                return t(this, void 0, void 0, function*() {
                    let t = (yield this.http.post(`${this.settings.path}/login`, {
                        body: {
                            email: e,
                            password: n
                        }
                    })).data;
                    return this.emitChange(t), t
                })
            }
            signInAnonymously(e) {
                return t(this, void 0, void 0, function*() {
                    let t = (yield this.http.post(`${this.settings.path}/anonymous`, {
                        body: {
                            options: e
                        }
                    })).data;
                    return this.emitChange(t), t
                })
            }
            sendPasswordResetEmail(e) {
                return t(this, void 0, void 0, function*() {
                    return (yield this.http.post(`${this.settings.path}/forgot-password`, {
                        body: {
                            email: e
                        }
                    })).data
                })
            }
            signInWithProvider(e, i = {}) {
                return t(this, void 0, void 0, function*() {
                    return new Promise((t, a) => {
                        let s = i.width || 480,
                            c = i.height || 768,
                            l = this.token ? `?token=${this.token}` : ``,
                            u = `Login with ${e[0].toUpperCase()+e.substring(1)}`,
                            d = this.http.client.getHttpEndpoint(`${i.prefix||`${this.settings.path}/provider`}/${e}${l}`),
                            f = screen.width / 2 - s / 2,
                            p = screen.height / 2 - c / 2;
                        r(this, o, window.open(d, u, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=` + s + `, height=` + c + `, top=` + p + `, left=` + f), `f`);
                        let m = e => {
                                (e.data.user !== void 0 || e.data.token !== void 0) && (clearInterval(h), n(this, o, `f`).close(), r(this, o, void 0, `f`), window.removeEventListener(`message`, m), e.data.error === void 0 ? (t(e.data), this.emitChange(e.data)) : a(e.data.error))
                            },
                            h = setInterval(() => {
                                (!n(this, o, `f`) || n(this, o, `f`).closed) && (r(this, o, void 0, `f`), a(`cancelled`), window.removeEventListener(`message`, m))
                            }, 200);
                        window.addEventListener(`message`, m)
                    })
                })
            }
            signOut() {
                return t(this, void 0, void 0, function*() {
                    this.emitChange({
                        user: null,
                        token: null
                    })
                })
            }
            emitChange(e) {
                e.token !== void 0 && (this.token = e.token, e.token === null ? (0, c.removeItem)(this.settings.key) : (0, c.setItem)(this.settings.key, e.token)), n(this, s, `f`).emit(`change`, e)
            }
        }, i = new WeakMap, a = new WeakMap, o = new WeakMap, s = new WeakMap
    })),
    O = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.discordURLBuilder = void 0;

        function t(e) {
            var t;
            let n = ((t = window == null ? void 0 : window.location) == null ? void 0 : t.hostname) || `localhost`,
                r = e.hostname.split(`.`),
                i = !e.hostname.includes(`trycloudflare.com`) && !e.hostname.includes(`discordsays.com`) && r.length > 2 ? `/${r[0]}` : ``;
            return e.pathname.startsWith(`/.proxy`) ? `${e.protocol}//${n}${i}${e.pathname}${e.search}` : `${e.protocol}//${n}/.proxy/colyseus${i}${e.pathname}${e.search}`
        }
        e.discordURLBuilder = t
    })),
    k = r((e => {
        var t = e && e.__awaiter || function(e, t, n, r) {
                function i(e) {
                    return e instanceof n ? e : new n(function(t) {
                        t(e)
                    })
                }
                return new(n || (n = Promise))(function(n, a) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : i(e.value).then(o, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Client = e.MatchMakeError = void 0;
        var r = a(),
            i = h(),
            o = T(),
            s = D(),
            c = O(),
            l = class e extends Error {
                constructor(t, n) {
                    super(t), this.code = n, Object.setPrototypeOf(this, e.prototype)
                }
            };
        e.MatchMakeError = l;
        var u = typeof window < `u` && ((n = window == null ? void 0 : window.location) == null ? void 0 : n.hostname) !== void 0 ? `${window.location.protocol.replace(`http`,`ws`)}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : `ws://127.0.0.1:2567`;
        e.Client = class {
            constructor(e = u, t) {
                var n, r;
                if (typeof e == `string`) {
                    let t = e.startsWith(`/`) ? new URL(e, u) : new URL(e),
                        n = t.protocol === `https:` || t.protocol === `wss:`,
                        r = Number(t.port || (n ? 443 : 80));
                    this.settings = {
                        hostname: t.hostname,
                        pathname: t.pathname,
                        port: r,
                        secure: n
                    }
                } else e.port === void 0 && (e.port = e.secure ? 443 : 80), e.pathname === void 0 && (e.pathname = ``), this.settings = e;
                this.settings.pathname.endsWith(`/`) && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new o.HTTP(this, (t == null ? void 0 : t.headers) || {}), this.auth = new s.Auth(this.http), this.urlBuilder = t == null ? void 0 : t.urlBuilder, !this.urlBuilder && typeof window < `u` && (r = (n = window == null ? void 0 : window.location) == null ? void 0 : n.hostname) != null && r.includes(`discordsays.com`) && (this.urlBuilder = c.discordURLBuilder, console.log(`Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.`))
            }
            joinOrCreate(e, n = {}, r) {
                return t(this, void 0, void 0, function*() {
                    return yield this.createMatchMakeRequest(`joinOrCreate`, e, n, r)
                })
            }
            create(e, n = {}, r) {
                return t(this, void 0, void 0, function*() {
                    return yield this.createMatchMakeRequest(`create`, e, n, r)
                })
            }
            join(e, n = {}, r) {
                return t(this, void 0, void 0, function*() {
                    return yield this.createMatchMakeRequest(`join`, e, n, r)
                })
            }
            joinById(e, n = {}, r) {
                return t(this, void 0, void 0, function*() {
                    return yield this.createMatchMakeRequest(`joinById`, e, n, r)
                })
            }
            reconnect(e, n) {
                return t(this, void 0, void 0, function*() {
                    if (typeof e == `string` && typeof n == `string`) throw Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
                    let [t, r] = e.split(`:`);
                    if (!t || !r) throw Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);
                    return yield this.createMatchMakeRequest(`reconnect`, t, {
                        reconnectionToken: r
                    }, n)
                })
            }
            getAvailableRooms(e = ``) {
                return t(this, void 0, void 0, function*() {
                    return (yield this.http.get(`matchmake/${e}`, {
                        headers: {
                            Accept: `application/json`
                        }
                    })).data
                })
            }
            consumeSeatReservation(e, n, i) {
                return t(this, void 0, void 0, function*() {
                    let a = this.createRoom(e.room.name, n);
                    a.roomId = e.room.roomId, a.sessionId = e.sessionId;
                    let o = {
                        sessionId: a.sessionId
                    };
                    e.reconnectionToken && (o.reconnectionToken = e.reconnectionToken);
                    let s = i || a;
                    return a.connect(this.buildEndpoint(e.room, o), e.devMode && (() => t(this, void 0, void 0, function*() {
                        console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${a.roomId}'...`);
                        let r = 0,
                            i = () => t(this, void 0, void 0, function*() {
                                r++;
                                try {
                                    yield this.consumeSeatReservation(e, n, s), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${a.roomId}'`)
                                } catch {
                                    r < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${r} out of 8)`), setTimeout(i, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
                                }
                            });
                        setTimeout(i, 2e3)
                    })), s, this.http.headers), new Promise((e, t) => {
                        let n = (e, n) => t(new r.ServerError(e, n));
                        s.onError.once(n), s.onJoin.once(() => {
                            s.onError.remove(n), e(s)
                        })
                    })
                })
            }
            createMatchMakeRequest(e, n, r = {}, i, a) {
                return t(this, void 0, void 0, function*() {
                    let t = (yield this.http.post(`matchmake/${e}/${n}`, {
                        headers: {
                            Accept: `application/json`,
                            "Content-Type": `application/json`
                        },
                        body: JSON.stringify(r)
                    })).data;
                    if (t.error) throw new l(t.error, t.code);
                    return e === `reconnect` && (t.reconnectionToken = r.reconnectionToken), yield this.consumeSeatReservation(t, i, a)
                })
            }
            createRoom(e, t) {
                return new i.Room(e, t)
            }
            buildEndpoint(e, t = {}) {
                let n = [];
                for (let e in t) t.hasOwnProperty(e) && n.push(`${e}=${t[e]}`);
                let r = this.settings.secure ? `wss://` : `ws://`;
                e.publicAddress ? r += `${e.publicAddress}` : r += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
                let i = `${r}/${e.processId}/${e.roomId}?${n.join(`&`)}`;
                return this.urlBuilder ? this.urlBuilder(new URL(i)) : i
            }
            getHttpEndpoint(e = ``) {
                let t = e.startsWith(`/`) ? e : `/${e}`,
                    n = `${this.settings.secure?`https`:`http`}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;
                return this.urlBuilder ? this.urlBuilder(new URL(n)) : n
            }
            getEndpointPort() {
                return this.settings.port !== 80 && this.settings.port !== 443 ? `:${this.settings.port}` : ``
            }
        }
    })),
    A = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SchemaSerializer = void 0;
        var t = m();
        e.SchemaSerializer = class {
            setState(e) {
                return this.state.decode(e)
            }
            getState() {
                return this.state
            }
            patch(e) {
                return this.state.decode(e)
            }
            teardown() {
                var e, t;
                (t = (e = this.state) == null ? void 0 : e.$changes) == null || t.root.clearRefs()
            }
            handshake(e, n) {
                this.state ? new t.Reflection().decode(e, n) : this.state = t.Reflection.decode(e, n)
            }
        }
    })),
    j = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NoneSerializer = void 0, e.NoneSerializer = class {
            setState(e) {}
            getState() {
                return null
            }
            patch(e) {}
            teardown() {}
            handshake(e) {}
        }
    })),
    M = r((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SchemaSerializer = e.registerSerializer = e.Auth = e.Room = e.ErrorCode = e.Protocol = e.MatchMakeError = e.Client = void 0, i();
        var t = k();
        Object.defineProperty(e, "Client", {
            enumerable: !0,
            get: function() {
                return t.Client
            }
        }), Object.defineProperty(e, "MatchMakeError", {
            enumerable: !0,
            get: function() {
                return t.MatchMakeError
            }
        });
        var n = u();
        Object.defineProperty(e, "Protocol", {
            enumerable: !0,
            get: function() {
                return n.Protocol
            }
        }), Object.defineProperty(e, "ErrorCode", {
            enumerable: !0,
            get: function() {
                return n.ErrorCode
            }
        });
        var r = h();
        Object.defineProperty(e, "Room", {
            enumerable: !0,
            get: function() {
                return r.Room
            }
        });
        var a = D();
        Object.defineProperty(e, "Auth", {
            enumerable: !0,
            get: function() {
                return a.Auth
            }
        });
        var o = A();
        Object.defineProperty(e, "SchemaSerializer", {
            enumerable: !0,
            get: function() {
                return o.SchemaSerializer
            }
        });
        var s = j(),
            c = d();
        Object.defineProperty(e, "registerSerializer", {
            enumerable: !0,
            get: function() {
                return c.registerSerializer
            }
        }), (0, c.registerSerializer)(`schema`, o.SchemaSerializer), (0, c.registerSerializer)(`none`, s.NoneSerializer)
    }));
export {
    M as t
};