import {
    ax as un
} from "./_index.js";
var qe = {},
    ft = {},
    ht;

function dn() {
    return ht || (ht = 1, ArrayBuffer.isView || (ArrayBuffer.isView = _ => _ !== null && typeof _ == "object" && _.buffer instanceof ArrayBuffer), typeof globalThis > "u" && typeof window < "u" && (window.globalThis = window)), ft
}
var oe = {},
    We = {},
    ut;

function Ve() {
    return ut || (ut = 1, function(_) {
        Object.defineProperty(_, "__esModule", {
                value: !0
            }), _.ServerError = _.CloseCode = void 0,
            function(s) {
                s[s.CONSENTED = 4e3] = "CONSENTED", s[s.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART"
            }(_.CloseCode || (_.CloseCode = {}));
        class w extends Error {
            constructor(d, y) {
                super(y), this.name = "ServerError", this.code = d
            }
        }
        _.ServerError = w
    }(We)), We
}
var ee = {},
    pe = {},
    dt;

function ln() {
    if (dt) return pe;
    dt = 1, Object.defineProperty(pe, "__esModule", {
        value: !0
    }), pe.decode = pe.encode = void 0;

    function _(f, h) {
        if (this._offset = h, f instanceof ArrayBuffer) this._buffer = f, this._view = new DataView(this._buffer);
        else if (ArrayBuffer.isView(f)) this._buffer = f.buffer, this._view = new DataView(this._buffer, f.byteOffset, f.byteLength);
        else throw new Error("Invalid argument")
    }

    function w(f, h, i) {
        for (var a = "", c = 0, u = h, p = h + i; u < p; u++) {
            var l = f.getUint8(u);
            if ((l & 128) === 0) {
                a += String.fromCharCode(l);
                continue
            }
            if ((l & 224) === 192) {
                a += String.fromCharCode((l & 31) << 6 | f.getUint8(++u) & 63);
                continue
            }
            if ((l & 240) === 224) {
                a += String.fromCharCode((l & 15) << 12 | (f.getUint8(++u) & 63) << 6 | (f.getUint8(++u) & 63) << 0);
                continue
            }
            if ((l & 248) === 240) {
                c = (l & 7) << 18 | (f.getUint8(++u) & 63) << 12 | (f.getUint8(++u) & 63) << 6 | (f.getUint8(++u) & 63) << 0, c >= 65536 ? (c -= 65536, a += String.fromCharCode((c >>> 10) + 55296, (c & 1023) + 56320)) : a += String.fromCharCode(c);
                continue
            }
            throw new Error("Invalid byte " + l.toString(16))
        }
        return a
    }
    _.prototype._array = function(f) {
        for (var h = new Array(f), i = 0; i < f; i++) h[i] = this._parse();
        return h
    }, _.prototype._map = function(f) {
        for (var h = "", i = {}, a = 0; a < f; a++) h = this._parse(), i[h] = this._parse();
        return i
    }, _.prototype._str = function(f) {
        var h = w(this._view, this._offset, f);
        return this._offset += f, h
    }, _.prototype._bin = function(f) {
        var h = this._buffer.slice(this._offset, this._offset + f);
        return this._offset += f, h
    }, _.prototype._parse = function() {
        var f = this._view.getUint8(this._offset++),
            h, i = 0,
            a = 0,
            c = 0,
            u = 0;
        if (f < 192) return f < 128 ? f : f < 144 ? this._map(f & 15) : f < 160 ? this._array(f & 15) : this._str(f & 31);
        if (f > 223) return (255 - f + 1) * -1;
        switch (f) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return i = this._view.getUint8(this._offset), this._offset += 1, this._bin(i);
            case 197:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._bin(i);
            case 198:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._bin(i);
            case 199:
                if (i = this._view.getUint8(this._offset), a = this._view.getInt8(this._offset + 1), this._offset += 2, a === -1) {
                    var p = this._view.getUint32(this._offset);
                    return c = this._view.getInt32(this._offset + 4), u = this._view.getUint32(this._offset + 8), this._offset += 12, new Date((c * 4294967296 + u) * 1e3 + p / 1e6)
                }
                return [a, this._bin(i)];
            case 200:
                return i = this._view.getUint16(this._offset), a = this._view.getInt8(this._offset + 2), this._offset += 3, [a, this._bin(i)];
            case 201:
                return i = this._view.getUint32(this._offset), a = this._view.getInt8(this._offset + 4), this._offset += 5, [a, this._bin(i)];
            case 202:
                return h = this._view.getFloat32(this._offset), this._offset += 4, h;
            case 203:
                return h = this._view.getFloat64(this._offset), this._offset += 8, h;
            case 204:
                return h = this._view.getUint8(this._offset), this._offset += 1, h;
            case 205:
                return h = this._view.getUint16(this._offset), this._offset += 2, h;
            case 206:
                return h = this._view.getUint32(this._offset), this._offset += 4, h;
            case 207:
                return c = this._view.getUint32(this._offset) * Math.pow(2, 32), u = this._view.getUint32(this._offset + 4), this._offset += 8, c + u;
            case 208:
                return h = this._view.getInt8(this._offset), this._offset += 1, h;
            case 209:
                return h = this._view.getInt16(this._offset), this._offset += 2, h;
            case 210:
                return h = this._view.getInt32(this._offset), this._offset += 4, h;
            case 211:
                return c = this._view.getInt32(this._offset) * Math.pow(2, 32), u = this._view.getUint32(this._offset + 4), this._offset += 8, c + u;
            case 212:
                if (a = this._view.getInt8(this._offset), this._offset += 1, a === 0) {
                    this._offset += 1;
                    return
                }
                return [a, this._bin(1)];
            case 213:
                return a = this._view.getInt8(this._offset), this._offset += 1, [a, this._bin(2)];
            case 214:
                return a = this._view.getInt8(this._offset), this._offset += 1, a === -1 ? (h = this._view.getUint32(this._offset), this._offset += 4, new Date(h * 1e3)) : [a, this._bin(4)];
            case 215:
                if (a = this._view.getInt8(this._offset), this._offset += 1, a === 0) return c = this._view.getInt32(this._offset) * Math.pow(2, 32), u = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(c + u);
                if (a === -1) {
                    c = this._view.getUint32(this._offset), u = this._view.getUint32(this._offset + 4), this._offset += 8;
                    var l = (c & 3) * 4294967296 + u;
                    return new Date(l * 1e3 + (c >>> 2) / 1e6)
                }
                return [a, this._bin(8)];
            case 216:
                return a = this._view.getInt8(this._offset), this._offset += 1, [a, this._bin(16)];
            case 217:
                return i = this._view.getUint8(this._offset), this._offset += 1, this._str(i);
            case 218:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._str(i);
            case 219:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._str(i);
            case 220:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._array(i);
            case 221:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._array(i);
            case 222:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._map(i);
            case 223:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._map(i)
        }
        throw new Error("Could not parse")
    };

    function s(f, h = 0) {
        var i = new _(f, h),
            a = i._parse();
        if (i._offset !== f.byteLength) throw new Error(f.byteLength - i._offset + " trailing bytes");
        return a
    }
    pe.decode = s;
    var d = 4294967296 - 1,
        y = 17179869184 - 1;

    function v(f, h, i) {
        for (var a = 0, c = 0, u = i.length; c < u; c++) a = i.charCodeAt(c), a < 128 ? f.setUint8(h++, a) : a < 2048 ? (f.setUint8(h++, 192 | a >> 6), f.setUint8(h++, 128 | a & 63)) : a < 55296 || a >= 57344 ? (f.setUint8(h++, 224 | a >> 12), f.setUint8(h++, 128 | a >> 6 & 63), f.setUint8(h++, 128 | a & 63)) : (c++, a = 65536 + ((a & 1023) << 10 | i.charCodeAt(c) & 1023), f.setUint8(h++, 240 | a >> 18), f.setUint8(h++, 128 | a >> 12 & 63), f.setUint8(h++, 128 | a >> 6 & 63), f.setUint8(h++, 128 | a & 63))
    }

    function A(f) {
        for (var h = 0, i = 0, a = 0, c = f.length; a < c; a++) h = f.charCodeAt(a), h < 128 ? i += 1 : h < 2048 ? i += 2 : h < 55296 || h >= 57344 ? i += 3 : (a++, i += 4);
        return i
    }

    function E(f, h, i) {
        var a = typeof i,
            c = 0,
            u = 0,
            p = 0,
            l = 0,
            m = 0,
            x = 0;
        if (a === "string") {
            if (m = A(i), m < 32) f.push(m | 160), x = 1;
            else if (m < 256) f.push(217, m), x = 2;
            else if (m < 65536) f.push(218, m >> 8, m), x = 3;
            else if (m < 4294967296) f.push(219, m >> 24, m >> 16, m >> 8, m), x = 5;
            else throw new Error("String too long");
            return h.push({
                _str: i,
                _length: m,
                _offset: f.length
            }), x + m
        }
        if (a === "number") return Math.floor(i) !== i || !isFinite(i) ? (f.push(203), h.push({
            _float: i,
            _length: 8,
            _offset: f.length
        }), 9) : i >= 0 ? i < 128 ? (f.push(i), 1) : i < 256 ? (f.push(204, i), 2) : i < 65536 ? (f.push(205, i >> 8, i), 3) : i < 4294967296 ? (f.push(206, i >> 24, i >> 16, i >> 8, i), 5) : (p = i / Math.pow(2, 32) >> 0, l = i >>> 0, f.push(207, p >> 24, p >> 16, p >> 8, p, l >> 24, l >> 16, l >> 8, l), 9) : i >= -32 ? (f.push(i), 1) : i >= -128 ? (f.push(208, i), 2) : i >= -32768 ? (f.push(209, i >> 8, i), 3) : i >= -2147483648 ? (f.push(210, i >> 24, i >> 16, i >> 8, i), 5) : (p = Math.floor(i / Math.pow(2, 32)), l = i >>> 0, f.push(211, p >> 24, p >> 16, p >> 8, p, l >> 24, l >> 16, l >> 8, l), 9);
        if (a === "object") {
            if (i === null) return f.push(192), 1;
            if (Array.isArray(i)) {
                if (m = i.length, m < 16) f.push(m | 144), x = 1;
                else if (m < 65536) f.push(220, m >> 8, m), x = 3;
                else if (m < 4294967296) f.push(221, m >> 24, m >> 16, m >> 8, m), x = 5;
                else throw new Error("Array too large");
                for (c = 0; c < m; c++) x += E(f, h, i[c]);
                return x
            }
            if (i instanceof Date) {
                var b = i.getTime(),
                    P = Math.floor(b / 1e3),
                    B = (b - P * 1e3) * 1e6;
                return P >= 0 && B >= 0 && P <= y ? B === 0 && P <= d ? (f.push(214, 255, P >> 24, P >> 16, P >> 8, P), 6) : (p = P / 4294967296, l = P & 4294967295, f.push(215, 255, B >> 22, B >> 14, B >> 6, p, l >> 24, l >> 16, l >> 8, l), 10) : (p = Math.floor(P / 4294967296), l = P >>> 0, f.push(199, 12, 255, B >> 24, B >> 16, B >> 8, B, p >> 24, p >> 16, p >> 8, p, l >> 24, l >> 16, l >> 8, l), 15)
            }
            if (i instanceof ArrayBuffer) {
                if (m = i.byteLength, m < 256) f.push(196, m), x = 2;
                else if (m < 65536) f.push(197, m >> 8, m), x = 3;
                else if (m < 4294967296) f.push(198, m >> 24, m >> 16, m >> 8, m), x = 5;
                else throw new Error("Buffer too large");
                return h.push({
                    _bin: i,
                    _length: m,
                    _offset: f.length
                }), x + m
            }
            if (typeof i.toJSON == "function") return E(f, h, i.toJSON());
            var Q = [],
                J = "",
                q = Object.keys(i);
            for (c = 0, u = q.length; c < u; c++) J = q[c], i[J] !== void 0 && typeof i[J] != "function" && Q.push(J);
            if (m = Q.length, m < 16) f.push(m | 128), x = 1;
            else if (m < 65536) f.push(222, m >> 8, m), x = 3;
            else if (m < 4294967296) f.push(223, m >> 24, m >> 16, m >> 8, m), x = 5;
            else throw new Error("Object too large");
            for (c = 0; c < m; c++) J = Q[c], x += E(f, h, J), x += E(f, h, i[J]);
            return x
        }
        if (a === "boolean") return f.push(i ? 195 : 194), 1;
        if (a === "undefined") return f.push(192), 1;
        if (typeof i.toJSON == "function") return E(f, h, i.toJSON());
        throw new Error("Could not encode")
    }

    function I(f) {
        var h = [],
            i = [],
            a = E(h, i, f),
            c = new ArrayBuffer(a),
            u = new DataView(c),
            p = 0,
            l = 0,
            m = -1;
        i.length > 0 && (m = i[0]._offset);
        for (var x, b = 0, P = 0, B = 0, Q = h.length; B < Q; B++)
            if (u.setUint8(l + B, h[B]), B + 1 === m) {
                if (x = i[p], b = x._length, P = l + m, x._bin)
                    for (var J = new Uint8Array(x._bin), q = 0; q < b; q++) u.setUint8(P + q, J[q]);
                else x._str ? v(u, P, x._str) : x._float !== void 0 && u.setFloat64(P, x._float);
                p++, l += b, i[p] && (m = i[p]._offset)
            } return c
    }
    return pe.encode = I, pe
}
var Ae = {},
    ge = {},
    Je, lt;

function pn() {
    return lt || (lt = 1, Je = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }), Je
}
var pt;

function gn() {
    if (pt) return ge;
    pt = 1;
    var _ = ge && ge.__importDefault || function(y) {
        return y && y.__esModule ? y : {
            default: y
        }
    };
    Object.defineProperty(ge, "__esModule", {
        value: !0
    }), ge.WebSocketTransport = void 0;
    const w = _(pn()),
        s = globalThis.WebSocket || w.default;
    let d = class {
        constructor(v) {
            this.events = v
        }
        send(v) {
            v instanceof ArrayBuffer ? this.ws.send(v) : Array.isArray(v) && this.ws.send(new Uint8Array(v).buffer)
        }
        connect(v, A) {
            try {
                this.ws = new s(v, {
                    headers: A,
                    protocols: this.protocols
                })
            } catch {
                this.ws = new s(v, this.protocols)
            }
            this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
        }
        close(v, A) {
            this.ws.close(v, A)
        }
        get isOpen() {
            return this.ws.readyState === s.OPEN
        }
    };
    return ge.WebSocketTransport = d, ge
}
var gt;

function vn() {
    if (gt) return Ae;
    gt = 1, Object.defineProperty(Ae, "__esModule", {
        value: !0
    }), Ae.Connection = void 0;
    const _ = gn();
    let w = class {
        constructor() {
            this.events = {}, this.transport = new _.WebSocketTransport(this.events)
        }
        send(d) {
            this.transport.send(d)
        }
        connect(d, y) {
            this.transport.connect(d, y)
        }
        close(d, y) {
            this.transport.close(d, y)
        }
        get isOpen() {
            return this.transport.isOpen
        }
    };
    return Ae.Connection = w, Ae
}
var Ke = {},
    vt;

function Pt() {
    return vt || (vt = 1, function(_) {
        Object.defineProperty(_, "__esModule", {
                value: !0
            }), _.utf8Length = _.utf8Read = _.ErrorCode = _.Protocol = void 0,
            function(d) {
                d[d.HANDSHAKE = 9] = "HANDSHAKE", d[d.JOIN_ROOM = 10] = "JOIN_ROOM", d[d.ERROR = 11] = "ERROR", d[d.LEAVE_ROOM = 12] = "LEAVE_ROOM", d[d.ROOM_DATA = 13] = "ROOM_DATA", d[d.ROOM_STATE = 14] = "ROOM_STATE", d[d.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", d[d.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", d[d.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES"
            }(_.Protocol || (_.Protocol = {})),
            function(d) {
                d[d.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", d[d.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", d[d.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", d[d.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", d[d.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", d[d.AUTH_FAILED = 4215] = "AUTH_FAILED", d[d.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
            }(_.ErrorCode || (_.ErrorCode = {}));

        function w(d, y) {
            const v = d[y++];
            for (var A = "", E = 0, I = y, f = y + v; I < f; I++) {
                var h = d[I];
                if ((h & 128) === 0) {
                    A += String.fromCharCode(h);
                    continue
                }
                if ((h & 224) === 192) {
                    A += String.fromCharCode((h & 31) << 6 | d[++I] & 63);
                    continue
                }
                if ((h & 240) === 224) {
                    A += String.fromCharCode((h & 15) << 12 | (d[++I] & 63) << 6 | (d[++I] & 63) << 0);
                    continue
                }
                if ((h & 248) === 240) {
                    E = (h & 7) << 18 | (d[++I] & 63) << 12 | (d[++I] & 63) << 6 | (d[++I] & 63) << 0, E >= 65536 ? (E -= 65536, A += String.fromCharCode((E >>> 10) + 55296, (E & 1023) + 56320)) : A += String.fromCharCode(E);
                    continue
                }
                throw new Error("Invalid byte " + h.toString(16))
            }
            return A
        }
        _.utf8Read = w;

        function s(d = "") {
            let y = 0,
                v = 0;
            for (let A = 0, E = d.length; A < E; A++) y = d.charCodeAt(A), y < 128 ? v += 1 : y < 2048 ? v += 2 : y < 55296 || y >= 57344 ? v += 3 : (A++, v += 4);
            return v + 1
        }
        _.utf8Length = s
    }(Ke)), Ke
}
var ve = {},
    mt;

function Mt() {
    if (mt) return ve;
    mt = 1, Object.defineProperty(ve, "__esModule", {
        value: !0
    }), ve.getSerializer = ve.registerSerializer = void 0;
    const _ = {};

    function w(d, y) {
        _[d] = y
    }
    ve.registerSerializer = w;

    function s(d) {
        const y = _[d];
        if (!y) throw new Error("missing serializer: " + d);
        return y
    }
    return ve.getSerializer = s, ve
}
var xe = {},
    _t;

function bt() {
    if (_t) return xe;
    _t = 1, Object.defineProperty(xe, "__esModule", {
        value: !0
    }), xe.createNanoEvents = void 0;
    const _ = () => ({
        emit(w, ...s) {
            let d = this.events[w] || [];
            for (let y = 0, v = d.length; y < v; y++) d[y](...s)
        },
        events: {},
        on(w, s) {
            var d;
            return !((d = this.events[w]) === null || d === void 0) && d.push(s) || (this.events[w] = [s]), () => {
                var y;
                this.events[w] = (y = this.events[w]) === null || y === void 0 ? void 0 : y.filter(v => s !== v)
            }
        }
    });
    return xe.createNanoEvents = _, xe
}
var me = {},
    yt;

function mn() {
    if (yt) return me;
    yt = 1, Object.defineProperty(me, "__esModule", {
        value: !0
    }), me.createSignal = me.EventEmitter = void 0;
    class _ {
        constructor() {
            this.handlers = []
        }
        register(d, y = !1) {
            return this.handlers.push(d), this
        }
        invoke(...d) {
            this.handlers.forEach(y => y.apply(this, d))
        }
        invokeAsync(...d) {
            return Promise.all(this.handlers.map(y => y.apply(this, d)))
        }
        remove(d) {
            const y = this.handlers.indexOf(d);
            this.handlers[y] = this.handlers[this.handlers.length - 1], this.handlers.pop()
        }
        clear() {
            this.handlers = []
        }
    }
    me.EventEmitter = _;

    function w() {
        const s = new _;

        function d(y) {
            return s.register(y, this === null)
        }
        return d.once = y => {
            const v = function(...A) {
                y.apply(this, A), s.remove(v)
            };
            s.register(v)
        }, d.remove = y => s.remove(y), d.invoke = (...y) => s.invoke(...y), d.invokeAsync = (...y) => s.invokeAsync(...y), d.clear = () => s.clear(), d
    }
    return me.createSignal = w, me
}
var Te = {
        exports: {}
    },
    _n = Te.exports,
    $t;

function Dt() {
    return $t || ($t = 1, function(_, w) {
        (function(s, d) {
            d(w)
        })(_n, function(s) {
            var d = function(t, e) {
                return d = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(n, r) {
                    n.__proto__ = r
                } || function(n, r) {
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
                }, d(t, e)
            };

            function y(t, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                d(t, e);

                function n() {
                    this.constructor = t
                }
                t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function v(t, e, n, r) {
                var o = arguments.length,
                    g = o < 3 ? e : r,
                    R;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function") g = Reflect.decorate(t, e, n, r);
                else
                    for (var O = t.length - 1; O >= 0; O--)(R = t[O]) && (g = (o < 3 ? R(g) : o > 3 ? R(e, n, g) : R(e, n)) || g);
                return o > 3 && g && Object.defineProperty(e, n, g), g
            }

            function A(t, e, n) {
                if (arguments.length === 2)
                    for (var r = 0, o = e.length, g; r < o; r++)(g || !(r in e)) && (g || (g = Array.prototype.slice.call(e, 0, r)), g[r] = e[r]);
                return t.concat(g || Array.prototype.slice.call(e))
            }
            typeof SuppressedError == "function" && SuppressedError;
            var E = 255,
                I = 213;
            s.OPERATION = void 0,
                function(t) {
                    t[t.ADD = 128] = "ADD", t[t.REPLACE = 0] = "REPLACE", t[t.DELETE = 64] = "DELETE", t[t.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", t[t.TOUCH = 1] = "TOUCH", t[t.CLEAR = 10] = "CLEAR"
                }(s.OPERATION || (s.OPERATION = {}));
            var f = function() {
                function t(e, n, r) {
                    this.changed = !1, this.changes = new Map, this.allChanges = new Set, this.caches = {}, this.currentCustomOperation = 0, this.ref = e, this.setParent(n, r)
                }
                return t.prototype.setParent = function(e, n, r) {
                    var o = this;
                    if (this.indexes || (this.indexes = this.ref instanceof G ? this.ref._definition.indexes : {}), this.parent = e, this.parentIndex = r, !!n)
                        if (this.root = n, this.ref instanceof G) {
                            var g = this.ref._definition;
                            for (var R in g.schema) {
                                var O = this.ref[R];
                                if (O && O.$changes) {
                                    var U = g.indexes[R];
                                    O.$changes.setParent(this.ref, n, U)
                                }
                            }
                        } else typeof this.ref == "object" && this.ref.forEach(function(k, S) {
                            if (k instanceof G) {
                                var N = k.$changes,
                                    T = o.ref.$changes.indexes[S];
                                N.setParent(o.ref, o.root, T)
                            }
                        })
                }, t.prototype.operation = function(e) {
                    this.changes.set(--this.currentCustomOperation, e)
                }, t.prototype.change = function(e, n) {
                    n === void 0 && (n = s.OPERATION.ADD);
                    var r = typeof e == "number" ? e : this.indexes[e];
                    this.assertValidIndex(r, e);
                    var o = this.changes.get(r);
                    (!o || o.op === s.OPERATION.DELETE || o.op === s.OPERATION.TOUCH) && this.changes.set(r, {
                        op: o && o.op === s.OPERATION.DELETE ? s.OPERATION.DELETE_AND_ADD : n,
                        index: r
                    }), this.allChanges.add(r), this.changed = !0, this.touchParents()
                }, t.prototype.touch = function(e) {
                    var n = typeof e == "number" ? e : this.indexes[e];
                    this.assertValidIndex(n, e), this.changes.has(n) || this.changes.set(n, {
                        op: s.OPERATION.TOUCH,
                        index: n
                    }), this.allChanges.add(n), this.touchParents()
                }, t.prototype.touchParents = function() {
                    this.parent && this.parent.$changes.touch(this.parentIndex)
                }, t.prototype.getType = function(e) {
                    if (this.ref._definition) {
                        var n = this.ref._definition;
                        return n.schema[n.fieldsByIndex[e]]
                    } else {
                        var n = this.parent._definition,
                            r = n.schema[n.fieldsByIndex[this.parentIndex]];
                        return Object.values(r)[0]
                    }
                }, t.prototype.getChildrenFilter = function() {
                    var e = this.parent._definition.childFilters;
                    return e && e[this.parentIndex]
                }, t.prototype.getValue = function(e) {
                    return this.ref.getByIndex(e)
                }, t.prototype.delete = function(e) {
                    var n = typeof e == "number" ? e : this.indexes[e];
                    if (n === void 0) {
                        console.warn("@colyseus/schema ".concat(this.ref.constructor.name, ": trying to delete non-existing index: ").concat(e, " (").concat(n, ")"));
                        return
                    }
                    var r = this.getValue(n);
                    this.changes.set(n, {
                        op: s.OPERATION.DELETE,
                        index: n
                    }), this.allChanges.delete(n), delete this.caches[n], r && r.$changes && (r.$changes.parent = void 0), this.changed = !0, this.touchParents()
                }, t.prototype.discard = function(e, n) {
                    var r = this;
                    e === void 0 && (e = !1), n === void 0 && (n = !1), this.ref instanceof G || this.changes.forEach(function(o) {
                        if (o.op === s.OPERATION.DELETE) {
                            var g = r.ref.getIndex(o.index);
                            delete r.indexes[g]
                        }
                    }), this.changes.clear(), this.changed = e, n && this.allChanges.clear(), this.currentCustomOperation = 0
                }, t.prototype.discardAll = function() {
                    var e = this;
                    this.changes.forEach(function(n) {
                        var r = e.getValue(n.index);
                        r && r.$changes && r.$changes.discardAll()
                    }), this.discard()
                }, t.prototype.cache = function(e, n) {
                    this.caches[e] = n
                }, t.prototype.clone = function() {
                    return new t(this.ref, this.parent, this.root)
                }, t.prototype.ensureRefId = function() {
                    this.refId === void 0 && (this.refId = this.root.getNextUniqueId())
                }, t.prototype.assertValidIndex = function(e, n) {
                    if (e === void 0) throw new Error('ChangeTree: missing index for field "'.concat(n, '"'))
                }, t
            }();

            function h(t, e, n, r) {
                return t[e] || (t[e] = []), t[e].push(n), r == null || r.forEach(function(o, g) {
                        return n(o, g)
                    }),
                    function() {
                        return a(t[e], t[e].indexOf(n))
                    }
            }

            function i(t) {
                var e = this,
                    n = typeof this.$changes.getType() != "string";
                this.$items.forEach(function(r, o) {
                    t.push({
                        refId: e.$changes.refId,
                        op: s.OPERATION.DELETE,
                        field: o,
                        value: void 0,
                        previousValue: r
                    }), n && e.$changes.root.removeRef(r.$changes.refId)
                })
            }

            function a(t, e) {
                if (e === -1 || e >= t.length) return !1;
                for (var n = t.length - 1, r = e; r < n; r++) t[r] = t[r + 1];
                return t.length = n, !0
            }
            var c = function(t, e) {
                var n = t.toString(),
                    r = e.toString();
                return n < r ? -1 : n > r ? 1 : 0
            };

            function u(t) {
                return t.$proxy = !0, t = new Proxy(t, {
                    get: function(e, n) {
                        return typeof n != "symbol" && !isNaN(n) ? e.at(n) : e[n]
                    },
                    set: function(e, n, r) {
                        if (typeof n != "symbol" && !isNaN(n)) {
                            var o = Array.from(e.$items.keys()),
                                g = parseInt(o[n] || n);
                            r == null ? e.deleteAt(g) : e.setAt(g, r)
                        } else e[n] = r;
                        return !0
                    },
                    deleteProperty: function(e, n) {
                        return typeof n == "number" ? e.deleteAt(n) : delete e[n], !0
                    },
                    has: function(e, n) {
                        return typeof n != "symbol" && !isNaN(Number(n)) ? e.$items.has(Number(n)) : Reflect.has(e, n)
                    }
                }), t
            }
            var p = function() {
                function t() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    this.$changes = new f(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, this.push.apply(this, e)
                }
                return t.prototype.onAdd = function(e, n) {
                    return n === void 0 && (n = !0), h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.ADD, e, n ? this.$items : void 0)
                }, t.prototype.onRemove = function(e) {
                    return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.DELETE, e)
                }, t.prototype.onChange = function(e) {
                    return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.REPLACE, e)
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
                    for (var e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var o;
                    return n.forEach(function(g) {
                        o = e.$refId++, e.setAt(o, g)
                    }), o
                }, t.prototype.pop = function() {
                    var e = Array.from(this.$indexes.values()).pop();
                    if (e !== void 0) {
                        this.$changes.delete(e), this.$indexes.delete(e);
                        var n = this.$items.get(e);
                        return this.$items.delete(e), n
                    }
                }, t.prototype.at = function(e) {
                    if (e = Math.trunc(e) || 0, e < 0 && (e += this.length), !(e < 0 || e >= this.length)) {
                        var n = Array.from(this.$items.keys())[e];
                        return this.$items.get(n)
                    }
                }, t.prototype.setAt = function(e, n) {
                    var r, o;
                    if (n == null) {
                        console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
                        return
                    }
                    if (this.$items.get(e) !== n) {
                        n.$changes !== void 0 && n.$changes.setParent(this, this.$changes.root, e);
                        var g = (o = (r = this.$changes.indexes[e]) === null || r === void 0 ? void 0 : r.op) !== null && o !== void 0 ? o : s.OPERATION.ADD;
                        this.$changes.indexes[e] = e, this.$indexes.set(e, e), this.$items.set(e, n), this.$changes.change(e, g)
                    }
                }, t.prototype.deleteAt = function(e) {
                    var n = Array.from(this.$items.keys())[e];
                    return n === void 0 ? !1 : this.$deleteAt(n)
                }, t.prototype.$deleteAt = function(e) {
                    return this.$changes.delete(e), this.$indexes.delete(e), this.$items.delete(e)
                }, t.prototype.clear = function(e) {
                    this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && i.call(this, e), this.$items.clear(), this.$changes.operation({
                        index: 0,
                        op: s.OPERATION.CLEAR
                    }), this.$changes.touchParents()
                }, t.prototype.concat = function() {
                    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return new(t.bind.apply(t, A([void 0], (e = Array.from(this.$items.values())).concat.apply(e, n), !1)))
                }, t.prototype.join = function(e) {
                    return Array.from(this.$items.values()).join(e)
                }, t.prototype.reverse = function() {
                    var e = this,
                        n = Array.from(this.$items.keys()),
                        r = Array.from(this.$items.values()).reverse();
                    return r.forEach(function(o, g) {
                        e.setAt(n[g], o)
                    }), this
                }, t.prototype.shift = function() {
                    var e = Array.from(this.$items.keys()),
                        n = e.shift();
                    if (n !== void 0) {
                        var r = this.$items.get(n);
                        return this.$deleteAt(n), r
                    }
                }, t.prototype.slice = function(e, n) {
                    var r = new t;
                    return r.push.apply(r, Array.from(this.$items.values()).slice(e, n)), r
                }, t.prototype.sort = function(e) {
                    var n = this;
                    e === void 0 && (e = c);
                    var r = Array.from(this.$items.keys()),
                        o = Array.from(this.$items.values()).sort(e);
                    return o.forEach(function(g, R) {
                        n.setAt(r[R], g)
                    }), this
                }, t.prototype.splice = function(e, n) {
                    n === void 0 && (n = this.length - e);
                    for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
                    for (var g = Array.from(this.$items.keys()), R = [], O = e; O < e + n; O++) R.push(this.$items.get(g[O])), this.$deleteAt(g[O]);
                    for (var O = 0; O < r.length; O++) this.setAt(e + O, r[O]);
                    return R
                }, t.prototype.unshift = function() {
                    for (var e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var o = this.length,
                        g = n.length,
                        R = Array.from(this.$items.values());
                    return n.forEach(function(O, U) {
                        e.setAt(U, O)
                    }), R.forEach(function(O, U) {
                        e.setAt(g + U, O)
                    }), o + g
                }, t.prototype.indexOf = function(e, n) {
                    return Array.from(this.$items.values()).indexOf(e, n)
                }, t.prototype.lastIndexOf = function(e, n) {
                    return n === void 0 && (n = this.length - 1), Array.from(this.$items.values()).lastIndexOf(e, n)
                }, t.prototype.every = function(e, n) {
                    return Array.from(this.$items.values()).every(e, n)
                }, t.prototype.some = function(e, n) {
                    return Array.from(this.$items.values()).some(e, n)
                }, t.prototype.forEach = function(e, n) {
                    Array.from(this.$items.values()).forEach(e, n)
                }, t.prototype.map = function(e, n) {
                    return Array.from(this.$items.values()).map(e, n)
                }, t.prototype.filter = function(e, n) {
                    return Array.from(this.$items.values()).filter(e, n)
                }, t.prototype.reduce = function(e, n) {
                    return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments)
                }, t.prototype.reduceRight = function(e, n) {
                    return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments)
                }, t.prototype.find = function(e, n) {
                    return Array.from(this.$items.values()).find(e, n)
                }, t.prototype.findIndex = function(e, n) {
                    return Array.from(this.$items.values()).findIndex(e, n)
                }, t.prototype.fill = function(e, n, r) {
                    throw new Error("ArraySchema#fill() not implemented")
                }, t.prototype.copyWithin = function(e, n, r) {
                    throw new Error("ArraySchema#copyWithin() not implemented")
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
                }, t.prototype.includes = function(e, n) {
                    return Array.from(this.$items.values()).includes(e, n)
                }, t.prototype.flatMap = function(e, n) {
                    throw new Error("ArraySchema#flatMap() is not supported.")
                }, t.prototype.flat = function(e) {
                    throw new Error("ArraySchema#flat() is not supported.")
                }, t.prototype.findLast = function() {
                    var e = Array.from(this.$items.values());
                    return e.findLast.apply(e, arguments)
                }, t.prototype.findLastIndex = function() {
                    var e = Array.from(this.$items.values());
                    return e.findLastIndex.apply(e, arguments)
                }, t.prototype.with = function(e, n) {
                    var r = Array.from(this.$items.values());
                    return r[e] = n, new(t.bind.apply(t, A([void 0], r, !1)))
                }, t.prototype.toReversed = function() {
                    return Array.from(this.$items.values()).reverse()
                }, t.prototype.toSorted = function(e) {
                    return Array.from(this.$items.values()).sort(e)
                }, t.prototype.toSpliced = function(e, n) {
                    var r = Array.from(this.$items.values());
                    return r.toSpliced.apply(r, arguments)
                }, t.prototype.setIndex = function(e, n) {
                    this.$indexes.set(e, n)
                }, t.prototype.getIndex = function(e) {
                    return this.$indexes.get(e)
                }, t.prototype.getByIndex = function(e) {
                    return this.$items.get(this.$indexes.get(e))
                }, t.prototype.deleteByIndex = function(e) {
                    var n = this.$indexes.get(e);
                    this.$items.delete(n), this.$indexes.delete(e)
                }, t.prototype.toArray = function() {
                    return Array.from(this.$items.values())
                }, t.prototype.toJSON = function() {
                    return this.toArray().map(function(e) {
                        return typeof e.toJSON == "function" ? e.toJSON() : e
                    })
                }, t.prototype.clone = function(e) {
                    var n;
                    return e ? n = new(t.bind.apply(t, A([void 0], Array.from(this.$items.values()), !1))) : n = new(t.bind.apply(t, A([void 0], this.map(function(r) {
                        return r.$changes ? r.clone() : r
                    }), !1))), n
                }, t
            }();

            function l(t) {
                return t.$proxy = !0, t = new Proxy(t, {
                    get: function(e, n) {
                        return typeof n != "symbol" && typeof e[n] > "u" ? e.get(n) : e[n]
                    },
                    set: function(e, n, r) {
                        return typeof n != "symbol" && n.indexOf("$") === -1 && n !== "onAdd" && n !== "onRemove" && n !== "onChange" ? e.set(n, r) : e[n] = r, !0
                    },
                    deleteProperty: function(e, n) {
                        return e.delete(n), !0
                    }
                }), t
            }
            var m = function() {
                    function t(e) {
                        var n = this;
                        if (this.$changes = new f(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e)
                            if (e instanceof Map || e instanceof t) e.forEach(function(o, g) {
                                return n.set(g, o)
                            });
                            else
                                for (var r in e) this.set(r, e[r])
                    }
                    return t.prototype.onAdd = function(e, n) {
                        return n === void 0 && (n = !0), h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.ADD, e, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(e) {
                        return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.DELETE, e)
                    }, t.prototype.onChange = function(e) {
                        return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.REPLACE, e)
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
                    }), t.prototype.set = function(e, n) {
                        if (n == null) throw new Error("MapSchema#set('".concat(e, "', ").concat(n, "): trying to set ").concat(n, " value on '").concat(e, "'."));
                        e = e.toString();
                        var r = typeof this.$changes.indexes[e] < "u",
                            o = r ? this.$changes.indexes[e] : this.$refId++,
                            g = r ? s.OPERATION.REPLACE : s.OPERATION.ADD,
                            R = n.$changes !== void 0;
                        if (R && n.$changes.setParent(this, this.$changes.root, o), !r) this.$changes.indexes[e] = o, this.$indexes.set(o, e);
                        else {
                            if (!R && this.$items.get(e) === n) return;
                            R && this.$items.get(e) !== n && (g = s.OPERATION.ADD)
                        }
                        return this.$items.set(e, n), this.$changes.change(e, g), this
                    }, t.prototype.get = function(e) {
                        return this.$items.get(e)
                    }, t.prototype.delete = function(e) {
                        return this.$changes.delete(e.toString()), this.$items.delete(e)
                    }, t.prototype.clear = function(e) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && i.call(this, e), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: s.OPERATION.CLEAR
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
                    }), t.prototype.setIndex = function(e, n) {
                        this.$indexes.set(e, n)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var n = this.$indexes.get(e);
                        this.$items.delete(n), this.$indexes.delete(e)
                    }, t.prototype.toJSON = function() {
                        var e = {};
                        return this.forEach(function(n, r) {
                            e[r] = typeof n.toJSON == "function" ? n.toJSON() : n
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(r, o) {
                            r.$changes ? n.set(o, r.clone()) : n.set(o, r)
                        })), n
                    }, t
                }(),
                x = {};

            function b(t, e) {
                x[t] = e
            }

            function P(t) {
                return x[t]
            }
            var B = function() {
                function t() {
                    this.indexes = {}, this.fieldsByIndex = {}, this.deprecated = {}, this.descriptors = {}
                }
                return t.create = function(e) {
                    var n = new t;
                    return n.schema = Object.assign({}, e && e.schema || {}), n.indexes = Object.assign({}, e && e.indexes || {}), n.fieldsByIndex = Object.assign({}, e && e.fieldsByIndex || {}), n.descriptors = Object.assign({}, e && e.descriptors || {}), n.deprecated = Object.assign({}, e && e.deprecated || {}), n
                }, t.prototype.addField = function(e, n) {
                    var r = this.getNextFieldIndex();
                    this.fieldsByIndex[r] = e, this.indexes[e] = r, this.schema[e] = Array.isArray(n) ? {
                        array: n[0]
                    } : n
                }, t.prototype.hasField = function(e) {
                    return this.indexes[e] !== void 0
                }, t.prototype.addFilter = function(e, n) {
                    return this.filters || (this.filters = {}, this.indexesWithFilters = []), this.filters[this.indexes[e]] = n, this.indexesWithFilters.push(this.indexes[e]), !0
                }, t.prototype.addChildrenFilter = function(e, n) {
                    var r = this.indexes[e],
                        o = this.schema[e];
                    if (P(Object.keys(o)[0])) return this.childFilters || (this.childFilters = {}), this.childFilters[r] = n, !0;
                    console.warn("@filterChildren: field '".concat(e, "' can't have children. Ignoring filter."))
                }, t.prototype.getChildrenFilter = function(e) {
                    return this.childFilters && this.childFilters[this.indexes[e]]
                }, t.prototype.getNextFieldIndex = function() {
                    return Object.keys(this.schema || {}).length
                }, t
            }();

            function Q(t) {
                return t._context && t._context.useFilters
            }
            var J = function() {
                    function t() {
                        this.types = {}, this.schemas = new Map, this.useFilters = !1
                    }
                    return t.prototype.has = function(e) {
                        return this.schemas.has(e)
                    }, t.prototype.get = function(e) {
                        return this.types[e]
                    }, t.prototype.add = function(e, n) {
                        n === void 0 && (n = this.schemas.size), e._definition = B.create(e._definition), e._typeid = n, this.types[n] = e, this.schemas.set(e, n)
                    }, t.create = function(e) {
                        return e === void 0 && (e = {}),
                            function(n) {
                                return e.context || (e.context = new t), Y(n, e)
                            }
                    }, t
                }(),
                q = new J;

            function Y(t, e) {
                return e === void 0 && (e = {}),
                    function(n, r) {
                        var o = e.context || q,
                            g = n.constructor;
                        if (g._context = o, !t) throw new Error("".concat(g.name, ': @type() reference provided for "').concat(r, `" is undefined. Make sure you don't have any circular dependencies.`));
                        o.has(g) || o.add(g);
                        var R = g._definition;
                        if (R.addField(r, t), R.descriptors[r]) {
                            if (R.deprecated[r]) return;
                            try {
                                throw new Error("@colyseus/schema: Duplicate '".concat(r, "' definition on '").concat(g.name, `'.
Check @type() annotation`))
                            } catch (T) {
                                var O = T.stack.split(`
`)[4].trim();
                                throw new Error("".concat(T.message, " ").concat(O))
                            }
                        }
                        var U = p.is(t),
                            k = !U && m.is(t);
                        if (typeof t != "string" && !G.is(t)) {
                            var S = Object.values(t)[0];
                            typeof S != "string" && !o.has(S) && o.add(S)
                        }
                        if (e.manual) {
                            R.descriptors[r] = {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            };
                            return
                        }
                        var N = "_".concat(r);
                        R.descriptors[N] = {
                            enumerable: !1,
                            configurable: !1,
                            writable: !0
                        }, R.descriptors[r] = {
                            get: function() {
                                return this[N]
                            },
                            set: function(T) {
                                T !== this[N] && (T != null ? (U && !(T instanceof p) && (T = new(p.bind.apply(p, A([void 0], T, !1)))), k && !(T instanceof m) && (T = new m(T)), T.$proxy === void 0 && (k ? T = l(T) : U && (T = u(T))), this.$changes.change(r), T.$changes && T.$changes.setParent(this, this.$changes.root, this._definition.indexes[r])) : this[N] !== void 0 && this.$changes.delete(r), this[N] = T)
                            },
                            enumerable: !0,
                            configurable: !0
                        }
                    }
            }

            function Ut(t) {
                return function(e, n) {
                    var r = e.constructor,
                        o = r._definition;
                    o.addFilter(n, t) && (r._context.useFilters = !0)
                }
            }

            function jt(t) {
                return function(e, n) {
                    var r = e.constructor,
                        o = r._definition;
                    o.addChildrenFilter(n, t) && (r._context.useFilters = !0)
                }
            }

            function zt(t) {
                return t === void 0 && (t = !0),
                    function(e, n) {
                        var r = e.constructor,
                            o = r._definition;
                        o.deprecated[n] = !0, t && (o.descriptors[n] = {
                            get: function() {
                                throw new Error("".concat(n, " is deprecated."))
                            },
                            set: function(g) {},
                            enumerable: !1,
                            configurable: !0
                        })
                    }
            }

            function Bt(t, e, n) {
                n === void 0 && (n = {}), n.context || (n.context = t._context || n.context || q);
                for (var r in e) Y(e[r], n)(t.prototype, r);
                return t
            }

            function Ft(t) {
                for (var e = 0, n = 0, r = 0, o = t.length; r < o; r++) e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
                return n
            }

            function Xe(t, e, n) {
                for (var r = 0, o = 0, g = n.length; o < g; o++) r = n.charCodeAt(o), r < 128 ? t[e++] = r : r < 2048 ? (t[e++] = 192 | r >> 6, t[e++] = 128 | r & 63) : r < 55296 || r >= 57344 ? (t[e++] = 224 | r >> 12, t[e++] = 128 | r >> 6 & 63, t[e++] = 128 | r & 63) : (o++, r = 65536 + ((r & 1023) << 10 | n.charCodeAt(o) & 1023), t[e++] = 240 | r >> 18, t[e++] = 128 | r >> 12 & 63, t[e++] = 128 | r >> 6 & 63, t[e++] = 128 | r & 63)
            }

            function Ye(t, e) {
                t.push(e & 255)
            }

            function K(t, e) {
                t.push(e & 255)
            }

            function Ge(t, e) {
                t.push(e & 255), t.push(e >> 8 & 255)
            }

            function be(t, e) {
                t.push(e & 255), t.push(e >> 8 & 255)
            }

            function ye(t, e) {
                t.push(e & 255), t.push(e >> 8 & 255), t.push(e >> 16 & 255), t.push(e >> 24 & 255)
            }

            function he(t, e) {
                var n = e >> 24,
                    r = e >> 16,
                    o = e >> 8,
                    g = e;
                t.push(g & 255), t.push(o & 255), t.push(r & 255), t.push(n & 255)
            }

            function Qe(t, e) {
                var n = Math.floor(e / Math.pow(2, 32)),
                    r = e >>> 0;
                he(t, r), he(t, n)
            }

            function Ze(t, e) {
                var n = e / Math.pow(2, 32) >> 0,
                    r = e >>> 0;
                he(t, r), he(t, n)
            }

            function Ht(t, e) {
                et(t, e)
            }

            function qt(t, e) {
                De(t, e)
            }
            var $e = new Int32Array(2),
                Wt = new Float32Array($e.buffer),
                Jt = new Float64Array($e.buffer);

            function et(t, e) {
                Wt[0] = e, ye(t, $e[0])
            }

            function De(t, e) {
                Jt[0] = e, ye(t, $e[0]), ye(t, $e[1])
            }

            function Kt(t, e) {
                return K(t, e ? 1 : 0)
            }

            function Ie(t, e) {
                e || (e = "");
                var n = Ft(e),
                    r = 0;
                if (n < 32) t.push(n | 160), r = 1;
                else if (n < 256) t.push(217), K(t, n), r = 2;
                else if (n < 65536) t.push(218), be(t, n), r = 3;
                else if (n < 4294967296) t.push(219), he(t, n), r = 5;
                else throw new Error("String too long");
                return Xe(t, t.length, e), r + n
            }

            function V(t, e) {
                if (isNaN(e)) return V(t, 0);
                if (isFinite(e)) {
                    if (e !== (e | 0)) return t.push(203), De(t, e), 9
                } else return V(t, e > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                return e >= 0 ? e < 128 ? (K(t, e), 1) : e < 256 ? (t.push(204), K(t, e), 2) : e < 65536 ? (t.push(205), be(t, e), 3) : e < 4294967296 ? (t.push(206), he(t, e), 5) : (t.push(207), Ze(t, e), 9) : e >= -32 ? (t.push(224 | e + 32), 1) : e >= -128 ? (t.push(208), Ye(t, e), 2) : e >= -32768 ? (t.push(209), Ge(t, e), 3) : e >= -2147483648 ? (t.push(210), ye(t, e), 5) : (t.push(211), Qe(t, e), 9)
            }
            var ke = Object.freeze({
                __proto__: null,
                boolean: Kt,
                float32: Ht,
                float64: qt,
                int16: Ge,
                int32: ye,
                int64: Qe,
                int8: Ye,
                number: V,
                string: Ie,
                uint16: be,
                uint32: he,
                uint64: Ze,
                uint8: K,
                utf8Write: Xe,
                writeFloat32: et,
                writeFloat64: De
            });

            function Vt(t, e, n) {
                for (var r = "", o = 0, g = e, R = e + n; g < R; g++) {
                    var O = t[g];
                    if ((O & 128) === 0) {
                        r += String.fromCharCode(O);
                        continue
                    }
                    if ((O & 224) === 192) {
                        r += String.fromCharCode((O & 31) << 6 | t[++g] & 63);
                        continue
                    }
                    if ((O & 240) === 224) {
                        r += String.fromCharCode((O & 15) << 12 | (t[++g] & 63) << 6 | (t[++g] & 63) << 0);
                        continue
                    }
                    if ((O & 248) === 240) {
                        o = (O & 7) << 18 | (t[++g] & 63) << 12 | (t[++g] & 63) << 6 | (t[++g] & 63) << 0, o >= 65536 ? (o -= 65536, r += String.fromCharCode((o >>> 10) + 55296, (o & 1023) + 56320)) : r += String.fromCharCode(o);
                        continue
                    }
                    console.error("Invalid byte " + O.toString(16))
                }
                return r
            }

            function tt(t, e) {
                return Ee(t, e) << 24 >> 24
            }

            function Ee(t, e) {
                return t[e.offset++]
            }

            function nt(t, e) {
                return Ce(t, e) << 16 >> 16
            }

            function Ce(t, e) {
                return t[e.offset++] | t[e.offset++] << 8
            }

            function ue(t, e) {
                return t[e.offset++] | t[e.offset++] << 8 | t[e.offset++] << 16 | t[e.offset++] << 24
            }

            function _e(t, e) {
                return ue(t, e) >>> 0
            }

            function Xt(t, e) {
                return Ne(t, e)
            }

            function Yt(t, e) {
                return Le(t, e)
            }

            function rt(t, e) {
                var n = _e(t, e),
                    r = ue(t, e) * Math.pow(2, 32);
                return r + n
            }

            function it(t, e) {
                var n = _e(t, e),
                    r = _e(t, e) * Math.pow(2, 32);
                return r + n
            }
            var we = new Int32Array(2),
                Gt = new Float32Array(we.buffer),
                Qt = new Float64Array(we.buffer);

            function Ne(t, e) {
                return we[0] = ue(t, e), Gt[0]
            }

            function Le(t, e) {
                return we[0] = ue(t, e), we[1] = ue(t, e), Qt[0]
            }

            function Zt(t, e) {
                return Ee(t, e) > 0
            }

            function ot(t, e) {
                var n = t[e.offset++],
                    r;
                n < 192 ? r = n & 31 : n === 217 ? r = Ee(t, e) : n === 218 ? r = Ce(t, e) : n === 219 && (r = _e(t, e));
                var o = Vt(t, e.offset, r);
                return e.offset += r, o
            }

            function en(t, e) {
                var n = t[e.offset];
                return n < 192 && n > 160 || n === 217 || n === 218 || n === 219
            }

            function de(t, e) {
                var n = t[e.offset++];
                if (n < 128) return n;
                if (n === 202) return Ne(t, e);
                if (n === 203) return Le(t, e);
                if (n === 204) return Ee(t, e);
                if (n === 205) return Ce(t, e);
                if (n === 206) return _e(t, e);
                if (n === 207) return it(t, e);
                if (n === 208) return tt(t, e);
                if (n === 209) return nt(t, e);
                if (n === 210) return ue(t, e);
                if (n === 211) return rt(t, e);
                if (n > 223) return (255 - n + 1) * -1
            }

            function tn(t, e) {
                var n = t[e.offset];
                return n < 128 || n >= 202 && n <= 211
            }

            function nn(t, e) {
                return t[e.offset] < 160
            }

            function st(t, e) {
                return t[e.offset - 1] === E && (t[e.offset] < 128 || t[e.offset] >= 202 && t[e.offset] <= 211)
            }
            var at = Object.freeze({
                    __proto__: null,
                    arrayCheck: nn,
                    boolean: Zt,
                    float32: Xt,
                    float64: Yt,
                    int16: nt,
                    int32: ue,
                    int64: rt,
                    int8: tt,
                    number: de,
                    numberCheck: tn,
                    readFloat32: Ne,
                    readFloat64: Le,
                    string: ot,
                    stringCheck: en,
                    switchStructureCheck: st,
                    uint16: Ce,
                    uint32: _e,
                    uint64: it,
                    uint8: Ee
                }),
                Ue = function() {
                    function t(e) {
                        var n = this;
                        this.$changes = new f(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e && e.forEach(function(r) {
                            return n.add(r)
                        })
                    }
                    return t.prototype.onAdd = function(e, n) {
                        return n === void 0 && (n = !0), h(this.$callbacks || (this.$callbacks = []), s.OPERATION.ADD, e, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(e) {
                        return h(this.$callbacks || (this.$callbacks = []), s.OPERATION.DELETE, e)
                    }, t.prototype.onChange = function(e) {
                        return h(this.$callbacks || (this.$callbacks = []), s.OPERATION.REPLACE, e)
                    }, t.is = function(e) {
                        return e.collection !== void 0
                    }, t.prototype.add = function(e) {
                        var n = this.$refId++,
                            r = e.$changes !== void 0;
                        return r && e.$changes.setParent(this, this.$changes.root, n), this.$changes.indexes[n] = n, this.$indexes.set(n, n), this.$items.set(n, e), this.$changes.change(n), n
                    }, t.prototype.at = function(e) {
                        var n = Array.from(this.$items.keys())[e];
                        return this.$items.get(n)
                    }, t.prototype.entries = function() {
                        return this.$items.entries()
                    }, t.prototype.delete = function(e) {
                        for (var n = this.$items.entries(), r, o;
                            (o = n.next()) && !o.done;)
                            if (e === o.value[1]) {
                                r = o.value[0];
                                break
                            } return r === void 0 ? !1 : (this.$changes.delete(r), this.$indexes.delete(r), this.$items.delete(r))
                    }, t.prototype.clear = function(e) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && i.call(this, e), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: s.OPERATION.CLEAR
                        }), this.$changes.touchParents()
                    }, t.prototype.has = function(e) {
                        return Array.from(this.$items.values()).some(function(n) {
                            return n === e
                        })
                    }, t.prototype.forEach = function(e) {
                        var n = this;
                        this.$items.forEach(function(r, o, g) {
                            return e(r, o, n)
                        })
                    }, t.prototype.values = function() {
                        return this.$items.values()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.$items.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setIndex = function(e, n) {
                        this.$indexes.set(e, n)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var n = this.$indexes.get(e);
                        this.$items.delete(n), this.$indexes.delete(e)
                    }, t.prototype.toArray = function() {
                        return Array.from(this.$items.values())
                    }, t.prototype.toJSON = function() {
                        var e = [];
                        return this.forEach(function(n, r) {
                            e.push(typeof n.toJSON == "function" ? n.toJSON() : n)
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(r) {
                            r.$changes ? n.add(r.clone()) : n.add(r)
                        })), n
                    }, t
                }(),
                je = function() {
                    function t(e) {
                        var n = this;
                        this.$changes = new f(this), this.$items = new Map, this.$indexes = new Map, this.$refId = 0, e && e.forEach(function(r) {
                            return n.add(r)
                        })
                    }
                    return t.prototype.onAdd = function(e, n) {
                        return n === void 0 && (n = !0), h(this.$callbacks || (this.$callbacks = []), s.OPERATION.ADD, e, n ? this.$items : void 0)
                    }, t.prototype.onRemove = function(e) {
                        return h(this.$callbacks || (this.$callbacks = []), s.OPERATION.DELETE, e)
                    }, t.prototype.onChange = function(e) {
                        return h(this.$callbacks || (this.$callbacks = []), s.OPERATION.REPLACE, e)
                    }, t.is = function(e) {
                        return e.set !== void 0
                    }, t.prototype.add = function(e) {
                        var n, r;
                        if (this.has(e)) return !1;
                        var o = this.$refId++;
                        e.$changes !== void 0 && e.$changes.setParent(this, this.$changes.root, o);
                        var g = (r = (n = this.$changes.indexes[o]) === null || n === void 0 ? void 0 : n.op) !== null && r !== void 0 ? r : s.OPERATION.ADD;
                        return this.$changes.indexes[o] = o, this.$indexes.set(o, o), this.$items.set(o, e), this.$changes.change(o, g), o
                    }, t.prototype.entries = function() {
                        return this.$items.entries()
                    }, t.prototype.delete = function(e) {
                        for (var n = this.$items.entries(), r, o;
                            (o = n.next()) && !o.done;)
                            if (e === o.value[1]) {
                                r = o.value[0];
                                break
                            } return r === void 0 ? !1 : (this.$changes.delete(r), this.$indexes.delete(r), this.$items.delete(r))
                    }, t.prototype.clear = function(e) {
                        this.$changes.discard(!0, !0), this.$changes.indexes = {}, this.$indexes.clear(), e && i.call(this, e), this.$items.clear(), this.$changes.operation({
                            index: 0,
                            op: s.OPERATION.CLEAR
                        }), this.$changes.touchParents()
                    }, t.prototype.has = function(e) {
                        for (var n = this.$items.values(), r = !1, o;
                            (o = n.next()) && !o.done;)
                            if (e === o.value) {
                                r = !0;
                                break
                            } return r
                    }, t.prototype.forEach = function(e) {
                        var n = this;
                        this.$items.forEach(function(r, o, g) {
                            return e(r, o, n)
                        })
                    }, t.prototype.values = function() {
                        return this.$items.values()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.$items.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setIndex = function(e, n) {
                        this.$indexes.set(e, n)
                    }, t.prototype.getIndex = function(e) {
                        return this.$indexes.get(e)
                    }, t.prototype.getByIndex = function(e) {
                        return this.$items.get(this.$indexes.get(e))
                    }, t.prototype.deleteByIndex = function(e) {
                        var n = this.$indexes.get(e);
                        this.$items.delete(n), this.$indexes.delete(e)
                    }, t.prototype.toArray = function() {
                        return Array.from(this.$items.values())
                    }, t.prototype.toJSON = function() {
                        var e = [];
                        return this.forEach(function(n, r) {
                            e.push(typeof n.toJSON == "function" ? n.toJSON() : n)
                        }), e
                    }, t.prototype.clone = function(e) {
                        var n;
                        return e ? n = Object.assign(new t, this) : (n = new t, this.forEach(function(r) {
                            r.$changes ? n.add(r.clone()) : n.add(r)
                        })), n
                    }, t
                }(),
                rn = function() {
                    function t() {
                        this.refIds = new WeakSet, this.containerIndexes = new WeakMap
                    }
                    return t.prototype.addRefId = function(e) {
                        this.refIds.has(e) || (this.refIds.add(e), this.containerIndexes.set(e, new Set))
                    }, t.get = function(e) {
                        return e.$filterState === void 0 && (e.$filterState = new t), e.$filterState
                    }, t
                }(),
                on = function() {
                    function t() {
                        this.refs = new Map, this.refCounts = {}, this.deletedRefs = new Set, this.nextUniqueId = 0
                    }
                    return t.prototype.getNextUniqueId = function() {
                        return this.nextUniqueId++
                    }, t.prototype.addRef = function(e, n, r) {
                        r === void 0 && (r = !0), this.refs.set(e, n), r && (this.refCounts[e] = (this.refCounts[e] || 0) + 1)
                    }, t.prototype.removeRef = function(e) {
                        var n = this.refCounts[e];
                        if (n === void 0) {
                            console.warn("trying to remove reference ".concat(e, " that doesn't exist"));
                            return
                        }
                        if (n === 0) {
                            console.warn("trying to remove reference ".concat(e, " with 0 refCount"));
                            return
                        }
                        this.refCounts[e] = n - 1, this.deletedRefs.add(e)
                    }, t.prototype.clearRefs = function() {
                        this.refs.clear(), this.deletedRefs.clear(), this.refCounts = {}
                    }, t.prototype.garbageCollectDeletedRefs = function() {
                        var e = this;
                        this.deletedRefs.forEach(function(n) {
                            if (!(e.refCounts[n] > 0)) {
                                var r = e.refs.get(n);
                                if (r instanceof G)
                                    for (var o in r._definition.schema) typeof r._definition.schema[o] != "string" && r[o] && r[o].$changes && e.removeRef(r[o].$changes.refId);
                                else {
                                    var g = r.$changes.parent._definition,
                                        R = g.schema[g.fieldsByIndex[r.$changes.parentIndex]];
                                    typeof Object.values(R)[0] == "function" && Array.from(r.values()).forEach(function(O) {
                                        return e.removeRef(O.$changes.refId)
                                    })
                                }
                                e.refs.delete(n), delete e.refCounts[n]
                            }
                        }), this.deletedRefs.clear()
                    }, t
                }(),
                ze = function(t) {
                    y(e, t);

                    function e() {
                        return t !== null && t.apply(this, arguments) || this
                    }
                    return e
                }(Error);

            function sn(t, e, n, r) {
                var o, g = !1;
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
                        o = "number", isNaN(t) && console.log('trying to encode "NaN" in '.concat(n.constructor.name, "#").concat(r));
                        break;
                    case "string":
                        o = "string", g = !0;
                        break;
                    case "boolean":
                        return
                }
                if (typeof t !== o && (!g || g && t !== null)) {
                    var R = "'".concat(JSON.stringify(t), "'").concat(t && t.constructor && " (".concat(t.constructor.name, ")") || "");
                    throw new ze("a '".concat(o, "' was expected, but ").concat(R, " was provided in ").concat(n.constructor.name, "#").concat(r))
                }
            }

            function ct(t, e, n, r) {
                if (!(t instanceof e)) throw new ze("a '".concat(e.name, "' was expected, but '").concat(t.constructor.name, "' was provided in ").concat(n.constructor.name, "#").concat(r))
            }

            function an(t, e, n, r, o) {
                sn(n, t, r, o);
                var g = ke[t];
                if (g) g(e, n);
                else throw new ze("a '".concat(t, "' was expected, but ").concat(n, " was provided in ").concat(r.constructor.name, "#").concat(o))
            }

            function cn(t, e, n) {
                return at[t](e, n)
            }
            var G = function() {
                function t() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    Object.defineProperties(this, {
                        $changes: {
                            value: new f(this, void 0, new on),
                            enumerable: !1,
                            writable: !0
                        },
                        $callbacks: {
                            value: void 0,
                            enumerable: !1,
                            writable: !0
                        }
                    });
                    var r = this._definition.descriptors;
                    r && Object.defineProperties(this, r), e[0] && this.assign(e[0])
                }
                return t.onError = function(e) {
                    console.error(e)
                }, t.is = function(e) {
                    return e._definition && e._definition.schema !== void 0
                }, t.prototype.onChange = function(e) {
                    return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.REPLACE, e)
                }, t.prototype.onRemove = function(e) {
                    return h(this.$callbacks || (this.$callbacks = {}), s.OPERATION.DELETE, e)
                }, t.prototype.assign = function(e) {
                    return Object.assign(this, e), this
                }, Object.defineProperty(t.prototype, "_definition", {
                    get: function() {
                        return this.constructor._definition
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setDirty = function(e, n) {
                    this.$changes.change(e, n)
                }, t.prototype.listen = function(e, n, r) {
                    var o = this;
                    return r === void 0 && (r = !0), this.$callbacks || (this.$callbacks = {}), this.$callbacks[e] || (this.$callbacks[e] = []), this.$callbacks[e].push(n), r && this[e] !== void 0 && n(this[e], void 0),
                        function() {
                            return a(o.$callbacks[e], o.$callbacks[e].indexOf(n))
                        }
                }, t.prototype.decode = function(e, n, r) {
                    n === void 0 && (n = {
                        offset: 0
                    }), r === void 0 && (r = this);
                    var o = [],
                        g = this.$changes.root,
                        R = e.length,
                        O = 0;
                    for (g.refs.set(O, this); n.offset < R;) {
                        var U = e[n.offset++];
                        if (U == E) {
                            O = de(e, n);
                            var k = g.refs.get(O);
                            if (!k) throw new Error('"refId" not found: '.concat(O));
                            r = k;
                            continue
                        }
                        var S = r.$changes,
                            N = r._definition !== void 0,
                            T = N ? U >> 6 << 6 : U;
                        if (T === s.OPERATION.CLEAR) {
                            r.clear(o);
                            continue
                        }
                        var D = N ? U % (T || 255) : de(e, n),
                            C = N ? r._definition.fieldsByIndex[D] : "",
                            M = S.getType(D),
                            $ = void 0,
                            j = void 0,
                            X = void 0;
                        if (N ? j = r["_".concat(C)] : (j = r.getByIndex(D), (T & s.OPERATION.ADD) === s.OPERATION.ADD ? (X = r instanceof m ? ot(e, n) : D, r.setIndex(D, X)) : X = r.getIndex(D)), (T & s.OPERATION.DELETE) === s.OPERATION.DELETE && (T !== s.OPERATION.DELETE_AND_ADD && r.deleteByIndex(D), j && j.$changes && g.removeRef(j.$changes.refId), $ = null), C === void 0) {
                            console.warn("@colyseus/schema: definition mismatch");
                            for (var F = {
                                    offset: n.offset
                                }; n.offset < R && !(st(e, n) && (F.offset = n.offset + 1, g.refs.has(de(e, F))));) n.offset++;
                            continue
                        } else if (T !== s.OPERATION.DELETE)
                            if (t.is(M)) {
                                var L = de(e, n);
                                if ($ = g.refs.get(L), T !== s.OPERATION.REPLACE) {
                                    var z = this.getSchemaType(e, n, M);
                                    $ || ($ = this.createTypeInstance(z), $.$changes.refId = L, j && ($.$callbacks = j.$callbacks, j.$changes.refId && L !== j.$changes.refId && g.removeRef(j.$changes.refId))), g.addRef(L, $, $ !== j)
                                }
                            } else if (typeof M == "string") $ = cn(M, e, n);
                        else {
                            var ae = P(Object.keys(M)[0]),
                                ce = de(e, n),
                                Z = g.refs.has(ce) ? j || g.refs.get(ce) : new ae.constructor;
                            if ($ = Z.clone(!0), $.$changes.refId = ce, j && ($.$callbacks = j.$callbacks, j.$changes.refId && ce !== j.$changes.refId)) {
                                g.removeRef(j.$changes.refId);
                                for (var W = j.entries(), H = void 0;
                                    (H = W.next()) && !H.done;) {
                                    var Pe = H.value,
                                        ie = Pe[0],
                                        He = Pe[1];
                                    o.push({
                                        refId: ce,
                                        op: s.OPERATION.DELETE,
                                        field: ie,
                                        value: void 0,
                                        previousValue: He
                                    })
                                }
                            }
                            g.addRef(ce, $, Z !== j)
                        }
                        if ($ != null) {
                            if ($.$changes && $.$changes.setParent(S.ref, S.root, D), r instanceof t) r[C] = $;
                            else if (r instanceof m) {
                                var ie = X;
                                r.$items.set(ie, $), r.$changes.allChanges.add(D)
                            } else if (r instanceof p) r.setAt(D, $);
                            else if (r instanceof Ue) {
                                var fe = r.add($);
                                r.setIndex(D, fe)
                            } else if (r instanceof je) {
                                var fe = r.add($);
                                fe !== !1 && r.setIndex(D, fe)
                            }
                        }
                        j !== $ && o.push({
                            refId: O,
                            op: T,
                            field: C,
                            dynamicIndex: X,
                            value: $,
                            previousValue: j
                        })
                    }
                    return this._triggerChanges(o), g.garbageCollectDeletedRefs(), o
                }, t.prototype.encode = function(e, n, r) {
                    e === void 0 && (e = !1), n === void 0 && (n = []), r === void 0 && (r = !1);
                    for (var o = this.$changes, g = new WeakSet, R = [o], O = 1, U = 0; U < O; U++) {
                        var k = R[U],
                            S = k.ref,
                            N = S instanceof t;
                        k.ensureRefId(), g.add(k), k !== o && (k.changed || e) && (K(n, E), V(n, k.refId));
                        for (var T = e ? Array.from(k.allChanges) : Array.from(k.changes.values()), D = 0, C = T.length; D < C; D++) {
                            var M = e ? {
                                    op: s.OPERATION.ADD,
                                    index: T[D]
                                } : T[D],
                                $ = M.index,
                                j = N ? S._definition.fieldsByIndex && S._definition.fieldsByIndex[$] : $,
                                X = n.length;
                            if (M.op !== s.OPERATION.TOUCH)
                                if (N) K(n, $ | M.op);
                                else {
                                    if (K(n, M.op), M.op === s.OPERATION.CLEAR) continue;
                                    V(n, $)
                                } if (!N && (M.op & s.OPERATION.ADD) == s.OPERATION.ADD && S instanceof m) {
                                var F = k.ref.$indexes.get($);
                                Ie(n, F)
                            }
                            if (M.op !== s.OPERATION.DELETE) {
                                var L = k.getType($),
                                    z = k.getValue($);
                                if (z && z.$changes && !g.has(z.$changes) && (R.push(z.$changes), z.$changes.ensureRefId(), O++), M.op !== s.OPERATION.TOUCH) {
                                    if (t.is(L)) ct(z, L, S, j), V(n, z.$changes.refId), (M.op & s.OPERATION.ADD) === s.OPERATION.ADD && this.tryEncodeTypeId(n, L, z.constructor);
                                    else if (typeof L == "string") an(L, n, z, S, j);
                                    else {
                                        var ae = P(Object.keys(L)[0]);
                                        ct(S["_".concat(j)], ae.constructor, S, j), V(n, z.$changes.refId)
                                    }
                                    r && k.cache($, n.slice(X))
                                }
                            }
                        }!e && !r && k.discard()
                    }
                    return n
                }, t.prototype.encodeAll = function(e) {
                    return this.encode(!0, [], e)
                }, t.prototype.applyFilters = function(e, n) {
                    var r, o;
                    n === void 0 && (n = !1);
                    for (var g = this, R = new Set, O = rn.get(e), U = [this.$changes], k = 1, S = [], N = function(D) {
                            var C = U[D];
                            if (R.has(C.refId)) return "continue";
                            var M = C.ref,
                                $ = M instanceof t;
                            K(S, E), V(S, C.refId);
                            var j = O.refIds.has(C),
                                X = n || !j;
                            O.addRefId(C);
                            var F = O.containerIndexes.get(C),
                                L = X ? Array.from(C.allChanges) : Array.from(C.changes.values());
                            if (!n && $ && M._definition.indexesWithFilters) {
                                var z = M._definition.indexesWithFilters;
                                z.forEach(function(Me) {
                                    !F.has(Me) && C.allChanges.has(Me) && (X ? L.push(Me) : L.push({
                                        op: s.OPERATION.ADD,
                                        index: Me
                                    }))
                                })
                            }
                            for (var ae = 0, ce = L.length; ae < ce; ae++) {
                                var Z = X ? {
                                    op: s.OPERATION.ADD,
                                    index: L[ae]
                                } : L[ae];
                                if (Z.op === s.OPERATION.CLEAR) {
                                    K(S, Z.op);
                                    continue
                                }
                                var W = Z.index;
                                if (Z.op === s.OPERATION.DELETE) {
                                    $ ? K(S, Z.op | W) : (K(S, Z.op), V(S, W));
                                    continue
                                }
                                var H = C.getValue(W),
                                    Pe = C.getType(W);
                                if ($) {
                                    var ie = M._definition.filters && M._definition.filters[W];
                                    if (ie && !ie.call(M, e, H, g)) {
                                        H && H.$changes && R.add(H.$changes.refId);
                                        continue
                                    }
                                } else {
                                    var He = C.parent,
                                        ie = C.getChildrenFilter();
                                    if (ie && !ie.call(He, e, M.$indexes.get(W), H, g)) {
                                        H && H.$changes && R.add(H.$changes.refId);
                                        continue
                                    }
                                }
                                if (H.$changes && (U.push(H.$changes), k++), Z.op !== s.OPERATION.TOUCH)
                                    if (Z.op === s.OPERATION.ADD || $) S.push.apply(S, (r = C.caches[W]) !== null && r !== void 0 ? r : []), F.add(W);
                                    else if (F.has(W)) S.push.apply(S, (o = C.caches[W]) !== null && o !== void 0 ? o : []);
                                else {
                                    if (F.add(W), K(S, s.OPERATION.ADD), V(S, W), M instanceof m) {
                                        var fe = C.ref.$indexes.get(W);
                                        Ie(S, fe)
                                    }
                                    H.$changes ? V(S, H.$changes.refId) : ke[Pe](S, H)
                                } else if (H.$changes && !$) {
                                    if (K(S, s.OPERATION.ADD), V(S, W), M instanceof m) {
                                        var fe = C.ref.$indexes.get(W);
                                        Ie(S, fe)
                                    }
                                    V(S, H.$changes.refId)
                                }
                            }
                        }, T = 0; T < k; T++) N(T);
                    return S
                }, t.prototype.clone = function() {
                    var e, n = new this.constructor,
                        r = this._definition.schema;
                    for (var o in r) typeof this[o] == "object" && typeof((e = this[o]) === null || e === void 0 ? void 0 : e.clone) == "function" ? n[o] = this[o].clone() : n[o] = this[o];
                    return n
                }, t.prototype.toJSON = function() {
                    var e = this._definition.schema,
                        n = this._definition.deprecated,
                        r = {};
                    for (var o in e) !n[o] && this[o] !== null && typeof this[o] < "u" && (r[o] = typeof this[o].toJSON == "function" ? this[o].toJSON() : this["_".concat(o)]);
                    return r
                }, t.prototype.discardAllChanges = function() {
                    this.$changes.discardAll()
                }, t.prototype.getByIndex = function(e) {
                    return this[this._definition.fieldsByIndex[e]]
                }, t.prototype.deleteByIndex = function(e) {
                    this[this._definition.fieldsByIndex[e]] = void 0
                }, t.prototype.tryEncodeTypeId = function(e, n, r) {
                    n._typeid !== r._typeid && (K(e, I), V(e, r._typeid))
                }, t.prototype.getSchemaType = function(e, n, r) {
                    var o;
                    return e[n.offset] === I && (n.offset++, o = this.constructor._context.get(de(e, n))), o || r
                }, t.prototype.createTypeInstance = function(e) {
                    var n = new e;
                    return n.$changes.root = this.$changes.root, n
                }, t.prototype._triggerChanges = function(e) {
                    for (var n, r, o, g, R, O, U, k, S, N = new Set, T = this.$changes.root.refs, D = function(M) {
                            var $ = e[M],
                                j = $.refId,
                                X = T.get(j),
                                F = X.$callbacks;
                            if (($.op & s.OPERATION.DELETE) === s.OPERATION.DELETE && $.previousValue instanceof t && ((r = (n = $.previousValue.$callbacks) === null || n === void 0 ? void 0 : n[s.OPERATION.DELETE]) === null || r === void 0 || r.forEach(function(L) {
                                    return L()
                                })), !F) return "continue";
                            if (X instanceof t) {
                                if (!N.has(j)) try {
                                    (o = F == null ? void 0 : F[s.OPERATION.REPLACE]) === null || o === void 0 || o.forEach(function(L) {
                                        return L()
                                    })
                                } catch (L) {
                                    t.onError(L)
                                }
                                try {
                                    F.hasOwnProperty($.field) && ((g = F[$.field]) === null || g === void 0 || g.forEach(function(L) {
                                        return L($.value, $.previousValue)
                                    }))
                                } catch (L) {
                                    t.onError(L)
                                }
                            } else $.op === s.OPERATION.ADD && $.previousValue === void 0 ? (R = F[s.OPERATION.ADD]) === null || R === void 0 || R.forEach(function(L) {
                                var z;
                                return L($.value, (z = $.dynamicIndex) !== null && z !== void 0 ? z : $.field)
                            }) : $.op === s.OPERATION.DELETE ? $.previousValue !== void 0 && ((O = F[s.OPERATION.DELETE]) === null || O === void 0 || O.forEach(function(L) {
                                var z;
                                return L($.previousValue, (z = $.dynamicIndex) !== null && z !== void 0 ? z : $.field)
                            })) : $.op === s.OPERATION.DELETE_AND_ADD && ($.previousValue !== void 0 && ((U = F[s.OPERATION.DELETE]) === null || U === void 0 || U.forEach(function(L) {
                                var z;
                                return L($.previousValue, (z = $.dynamicIndex) !== null && z !== void 0 ? z : $.field)
                            })), (k = F[s.OPERATION.ADD]) === null || k === void 0 || k.forEach(function(L) {
                                var z;
                                return L($.value, (z = $.dynamicIndex) !== null && z !== void 0 ? z : $.field)
                            })), $.value !== $.previousValue && ((S = F[s.OPERATION.REPLACE]) === null || S === void 0 || S.forEach(function(L) {
                                var z;
                                return L($.value, (z = $.dynamicIndex) !== null && z !== void 0 ? z : $.field)
                            }));
                            N.add(j)
                        }, C = 0; C < e.length; C++) D(C)
                }, t._definition = B.create(), t
            }();

            function fn(t) {
                for (var e = [t.$changes], n = 1, r = {}, o = r, g = function(O) {
                        var U = e[O];
                        U.changes.forEach(function(k) {
                            var S = U.ref,
                                N = k.index,
                                T = S._definition ? S._definition.fieldsByIndex[N] : S.$indexes.get(N);
                            o[T] = U.getValue(N)
                        })
                    }, R = 0; R < n; R++) g(R);
                return r
            }
            var le = {
                    context: new J
                },
                Be = function(t) {
                    y(e, t);

                    function e() {
                        return t !== null && t.apply(this, arguments) || this
                    }
                    return v([Y("string", le)], e.prototype, "name", void 0), v([Y("string", le)], e.prototype, "type", void 0), v([Y("number", le)], e.prototype, "referencedType", void 0), e
                }(G),
                Fe = function(t) {
                    y(e, t);

                    function e() {
                        var n = t !== null && t.apply(this, arguments) || this;
                        return n.fields = new p, n
                    }
                    return v([Y("number", le)], e.prototype, "id", void 0), v([Y([Be], le)], e.prototype, "fields", void 0), e
                }(G),
                hn = function(t) {
                    y(e, t);

                    function e() {
                        var n = t !== null && t.apply(this, arguments) || this;
                        return n.types = new p, n
                    }
                    return e.encode = function(n) {
                        var r, o = n.constructor,
                            g = new e;
                        g.rootType = o._typeid;
                        var R = function(S, N) {
                                for (var T in N) {
                                    var D = new Be;
                                    D.name = T;
                                    var C = void 0;
                                    if (typeof N[T] == "string") C = N[T];
                                    else {
                                        var M = N[T],
                                            $ = void 0;
                                        G.is(M) ? (C = "ref", $ = N[T]) : (C = Object.keys(M)[0], typeof M[C] == "string" ? C += ":" + M[C] : $ = M[C]), D.referencedType = $ ? $._typeid : -1
                                    }
                                    D.type = C, S.fields.push(D)
                                }
                                g.types.push(S)
                            },
                            O = (r = o._context) === null || r === void 0 ? void 0 : r.types;
                        for (var U in O) {
                            var k = new Fe;
                            k.id = Number(U), R(k, O[U]._definition.schema)
                        }
                        return g.encodeAll()
                    }, e.decode = function(n, r) {
                        var o = new J,
                            g = new e;
                        g.decode(n, r);
                        var R = g.types.reduce(function(N, T) {
                            var D = function(M) {
                                    y($, M);

                                    function $() {
                                        return M !== null && M.apply(this, arguments) || this
                                    }
                                    return $
                                }(G),
                                C = T.id;
                            return N[C] = D, o.add(D, C), N
                        }, {});
                        g.types.forEach(function(N) {
                            var T = R[N.id];
                            N.fields.forEach(function(D) {
                                var C;
                                if (D.referencedType !== void 0) {
                                    var M = D.type,
                                        $ = R[D.referencedType];
                                    if (!$) {
                                        var j = D.type.split(":");
                                        M = j[0], $ = j[1]
                                    }
                                    M === "ref" ? Y($, {
                                        context: o
                                    })(T.prototype, D.name) : Y((C = {}, C[M] = $, C), {
                                        context: o
                                    })(T.prototype, D.name)
                                } else Y(D.type, {
                                    context: o
                                })(T.prototype, D.name)
                            })
                        });
                        var O = R[g.rootType],
                            U = new O;
                        for (var k in O._definition.schema) {
                            var S = O._definition.schema[k];
                            typeof S != "string" && (U[k] = typeof S == "function" ? new S : new(P(Object.keys(S)[0])).constructor)
                        }
                        return U
                    }, v([Y([Fe], le)], e.prototype, "types", void 0), v([Y("number", le)], e.prototype, "rootType", void 0), e
                }(G);
            b("map", {
                constructor: m
            }), b("array", {
                constructor: p
            }), b("set", {
                constructor: je
            }), b("collection", {
                constructor: Ue
            }), s.ArraySchema = p, s.CollectionSchema = Ue, s.Context = J, s.MapSchema = m, s.Reflection = hn, s.ReflectionField = Be, s.ReflectionType = Fe, s.Schema = G, s.SchemaDefinition = B, s.SetSchema = je, s.decode = at, s.defineTypes = Bt, s.deprecated = zt, s.dumpChanges = fn, s.encode = ke, s.filter = Ut, s.filterChildren = jt, s.hasFilter = Q, s.registerType = b, s.type = Y
        })
    }(Te, Te.exports)), Te.exports
}
var Et;

function Nt() {
    if (Et) return ee;
    Et = 1;
    var _ = ee && ee.__createBinding || (Object.create ? function(a, c, u, p) {
            p === void 0 && (p = u);
            var l = Object.getOwnPropertyDescriptor(c, u);
            (!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) && (l = {
                enumerable: !0,
                get: function() {
                    return c[u]
                }
            }), Object.defineProperty(a, p, l)
        } : function(a, c, u, p) {
            p === void 0 && (p = u), a[p] = c[u]
        }),
        w = ee && ee.__setModuleDefault || (Object.create ? function(a, c) {
            Object.defineProperty(a, "default", {
                enumerable: !0,
                value: c
            })
        } : function(a, c) {
            a.default = c
        }),
        s = ee && ee.__importStar || function(a) {
            if (a && a.__esModule) return a;
            var c = {};
            if (a != null)
                for (var u in a) u !== "default" && Object.prototype.hasOwnProperty.call(a, u) && _(c, a, u);
            return w(c, a), c
        };
    Object.defineProperty(ee, "__esModule", {
        value: !0
    }), ee.Room = void 0;
    const d = s(ln()),
        y = vn(),
        v = Pt(),
        A = Mt(),
        E = bt(),
        I = mn(),
        f = Dt(),
        h = Ve();
    let i = class kt {
        constructor(c, u) {
            this.onStateChange = (0, I.createSignal)(), this.onError = (0, I.createSignal)(), this.onLeave = (0, I.createSignal)(), this.onJoin = (0, I.createSignal)(), this.hasJoined = !1, this.onMessageHandlers = (0, E.createNanoEvents)(), this.roomId = null, this.name = c, u && (this.serializer = new((0, A.getSerializer)("schema")), this.rootSchema = u, this.serializer.state = new u), this.onError((p, l) => {
                var m;
                return (m = console.warn) === null || m === void 0 ? void 0 : m.call(console, `colyseus.js - onError => (${p}) ${l}`)
            }), this.onLeave(() => this.removeAllListeners())
        }
        get id() {
            return this.roomId
        }
        connect(c, u, p = this, l) {
            const m = new y.Connection;
            p.connection = m, m.events.onmessage = kt.prototype.onMessageCallback.bind(p), m.events.onclose = function(x) {
                var b;
                if (!p.hasJoined) {
                    (b = console.warn) === null || b === void 0 || b.call(console, `Room connection was closed unexpectedly (${x.code}): ${x.reason}`), p.onError.invoke(x.code, x.reason);
                    return
                }
                x.code === h.CloseCode.DEVMODE_RESTART && u ? u() : (p.onLeave.invoke(x.code, x.reason), p.destroy())
            }, m.events.onerror = function(x) {
                var b;
                (b = console.warn) === null || b === void 0 || b.call(console, `Room, onError (${x.code}): ${x.reason}`), p.onError.invoke(x.code, x.reason)
            }, m.connect(c, l)
        }
        leave(c = !0) {
            return new Promise(u => {
                this.onLeave(p => u(p)), this.connection ? c ? this.connection.send([v.Protocol.LEAVE_ROOM]) : this.connection.close() : this.onLeave.invoke(h.CloseCode.CONSENTED)
            })
        }
        onMessage(c, u) {
            return this.onMessageHandlers.on(this.getMessageHandlerKey(c), u)
        }
        send(c, u) {
            const p = [v.Protocol.ROOM_DATA];
            typeof c == "string" ? f.encode.string(p, c) : f.encode.number(p, c);
            let l;
            if (u !== void 0) {
                const m = d.encode(u);
                l = new Uint8Array(p.length + m.byteLength), l.set(new Uint8Array(p), 0), l.set(new Uint8Array(m), p.length)
            } else l = new Uint8Array(p);
            this.connection.send(l.buffer)
        }
        sendBytes(c, u) {
            const p = [v.Protocol.ROOM_DATA_BYTES];
            typeof c == "string" ? f.encode.string(p, c) : f.encode.number(p, c);
            let l;
            l = new Uint8Array(p.length + (u.byteLength || u.length)), l.set(new Uint8Array(p), 0), l.set(new Uint8Array(u), p.length), this.connection.send(l.buffer)
        }
        get state() {
            return this.serializer.getState()
        }
        removeAllListeners() {
            this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onMessageHandlers.events = {}
        }
        onMessageCallback(c) {
            const u = Array.from(new Uint8Array(c.data)),
                p = u[0];
            if (p === v.Protocol.JOIN_ROOM) {
                let l = 1;
                const m = (0, v.utf8Read)(u, l);
                if (l += (0, v.utf8Length)(m), this.serializerId = (0, v.utf8Read)(u, l), l += (0, v.utf8Length)(this.serializerId), !this.serializer) {
                    const x = (0, A.getSerializer)(this.serializerId);
                    this.serializer = new x
                }
                u.length > l && this.serializer.handshake && this.serializer.handshake(u, {
                    offset: l
                }), this.reconnectionToken = `${this.roomId}:${m}`, this.hasJoined = !0, this.onJoin.invoke(), this.connection.send([v.Protocol.JOIN_ROOM])
            } else if (p === v.Protocol.ERROR) {
                const l = {
                        offset: 1
                    },
                    m = f.decode.number(u, l),
                    x = f.decode.string(u, l);
                this.onError.invoke(m, x)
            } else if (p === v.Protocol.LEAVE_ROOM) this.leave();
            else if (p === v.Protocol.ROOM_DATA_SCHEMA) {
                const l = {
                        offset: 1
                    },
                    x = this.serializer.getState().constructor._context.get(f.decode.number(u, l)),
                    b = new x;
                b.decode(u, l), this.dispatchMessage(x, b)
            } else if (p === v.Protocol.ROOM_STATE) u.shift(), this.setState(u);
            else if (p === v.Protocol.ROOM_STATE_PATCH) u.shift(), this.patch(u);
            else if (p === v.Protocol.ROOM_DATA) {
                const l = {
                        offset: 1
                    },
                    m = f.decode.stringCheck(u, l) ? f.decode.string(u, l) : f.decode.number(u, l),
                    x = u.length > l.offset ? d.decode(c.data, l.offset) : void 0;
                this.dispatchMessage(m, x)
            } else if (p === v.Protocol.ROOM_DATA_BYTES) {
                const l = {
                        offset: 1
                    },
                    m = f.decode.stringCheck(u, l) ? f.decode.string(u, l) : f.decode.number(u, l);
                this.dispatchMessage(m, new Uint8Array(u.slice(l.offset)))
            }
        }
        setState(c) {
            this.serializer.setState(c), this.onStateChange.invoke(this.serializer.getState())
        }
        patch(c) {
            this.serializer.patch(c), this.onStateChange.invoke(this.serializer.getState())
        }
        dispatchMessage(c, u) {
            var p;
            const l = this.getMessageHandlerKey(c);
            this.onMessageHandlers.events[l] ? this.onMessageHandlers.emit(l, u) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", c, u) : (p = console.warn) === null || p === void 0 || p.call(console, `colyseus.js: onMessage() not registered for type '${c}'.`)
        }
        destroy() {
            this.serializer && this.serializer.teardown()
        }
        getMessageHandlerKey(c) {
            switch (typeof c) {
                case "function":
                    return `$${c._typeid}`;
                case "string":
                    return c;
                case "number":
                    return `i${c}`;
                default:
                    throw new Error("invalid message type.")
            }
        }
    };
    return ee.Room = i, ee
}
var te = {};

function wt(_, w) {
    w.headers = _.headers || {}, w.statusMessage = _.statusText, w.statusCode = _.status, w.data = _.response
}

function re(_, w, s) {
    return new Promise(function(d, y) {
        s = s || {};
        var v = new XMLHttpRequest,
            A, E, I, f = s.body,
            h = s.headers || {};
        s.timeout && (v.timeout = s.timeout), v.ontimeout = v.onerror = function(i) {
            i.timeout = i.type == "timeout", y(i)
        }, v.open(_, w.href || w), v.onload = function() {
            for (I = v.getAllResponseHeaders().trim().split(/[\r\n]+/), wt(v, v); E = I.shift();) E = E.split(": "), v.headers[E.shift().toLowerCase()] = E.join(": ");
            if (E = v.headers["content-type"], E && ~E.indexOf("application/json")) try {
                v.data = JSON.parse(v.data, s.reviver)
            } catch (i) {
                return wt(v, i), y(i)
            }(v.status >= 400 ? y : d)(v)
        }, typeof FormData < "u" && f instanceof FormData || f && typeof f == "object" && (h["content-type"] = "application/json", f = JSON.stringify(f)), v.withCredentials = !!s.withCredentials;
        for (A in h) v.setRequestHeader(A, h[A]);
        v.send(f)
    })
}
var yn = re.bind(re, "GET"),
    $n = re.bind(re, "POST"),
    En = re.bind(re, "PATCH"),
    wn = re.bind(re, "DELETE"),
    An = re.bind(re, "PUT");
const xn = Object.freeze(Object.defineProperty({
        __proto__: null,
        del: wn,
        get: yn,
        patch: En,
        post: $n,
        put: An,
        send: re
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    On = un(xn);
var At;

function Rn() {
    if (At) return te;
    At = 1;
    var _ = te && te.__createBinding || (Object.create ? function(A, E, I, f) {
            f === void 0 && (f = I);
            var h = Object.getOwnPropertyDescriptor(E, I);
            (!h || ("get" in h ? !E.__esModule : h.writable || h.configurable)) && (h = {
                enumerable: !0,
                get: function() {
                    return E[I]
                }
            }), Object.defineProperty(A, f, h)
        } : function(A, E, I, f) {
            f === void 0 && (f = I), A[f] = E[I]
        }),
        w = te && te.__setModuleDefault || (Object.create ? function(A, E) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: E
            })
        } : function(A, E) {
            A.default = E
        }),
        s = te && te.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var E = {};
            if (A != null)
                for (var I in A) I !== "default" && Object.prototype.hasOwnProperty.call(A, I) && _(E, A, I);
            return w(E, A), E
        };
    Object.defineProperty(te, "__esModule", {
        value: !0
    }), te.HTTP = void 0;
    const d = Ve(),
        y = s(On);
    let v = class {
        constructor(E, I = {}) {
            this.client = E, this.headers = I
        }
        get(E, I = {}) {
            return this.request("get", E, I)
        }
        post(E, I = {}) {
            return this.request("post", E, I)
        }
        del(E, I = {}) {
            return this.request("del", E, I)
        }
        put(E, I = {}) {
            return this.request("put", E, I)
        }
        request(E, I, f = {}) {
            return y[E](this.client.getHttpEndpoint(I), this.getOptions(f)).catch(h => {
                var i;
                const a = h.statusCode,
                    c = ((i = h.data) === null || i === void 0 ? void 0 : i.error) || h.statusMessage || h.message;
                throw !a && !c ? h : new d.ServerError(a, c)
            })
        }
        getOptions(E) {
            return E.headers = Object.assign({}, this.headers, E.headers), this.authToken && (E.headers.Authorization = `Bearer ${this.authToken}`), typeof cc < "u" && cc.sys && cc.sys.isNative || (E.withCredentials = !0), E
        }
    };
    return te.HTTP = v, te
}
var ne = {},
    se = {},
    xt;

function Sn() {
    if (xt) return se;
    xt = 1, Object.defineProperty(se, "__esModule", {
        value: !0
    }), se.getItem = se.removeItem = se.setItem = void 0;
    let _;

    function w() {
        if (!_) try {
            _ = typeof cc < "u" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
        } catch {}
        return _ || (_ = {
            cache: {},
            setItem: function(v, A) {
                this.cache[v] = A
            },
            getItem: function(v) {
                this.cache[v]
            },
            removeItem: function(v) {
                delete this.cache[v]
            }
        }), _
    }

    function s(v, A) {
        w().setItem(v, A)
    }
    se.setItem = s;

    function d(v) {
        w().removeItem(v)
    }
    se.removeItem = d;

    function y(v, A) {
        const E = w().getItem(v);
        typeof Promise > "u" || !(E instanceof Promise) ? A(E) : E.then(I => A(I))
    }
    return se.getItem = y, se
}
var Ot;

function Lt() {
    if (Ot) return ne;
    Ot = 1;
    var _ = ne && ne.__awaiter || function(h, i, a, c) {
            function u(p) {
                return p instanceof a ? p : new a(function(l) {
                    l(p)
                })
            }
            return new(a || (a = Promise))(function(p, l) {
                function m(P) {
                    try {
                        b(c.next(P))
                    } catch (B) {
                        l(B)
                    }
                }

                function x(P) {
                    try {
                        b(c.throw(P))
                    } catch (B) {
                        l(B)
                    }
                }

                function b(P) {
                    P.done ? p(P.value) : u(P.value).then(m, x)
                }
                b((c = c.apply(h, i || [])).next())
            })
        },
        w = ne && ne.__classPrivateFieldGet || function(h, i, a, c) {
            if (a === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
            if (typeof i == "function" ? h !== i || !c : !i.has(h)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return a === "m" ? c : a === "a" ? c.call(h) : c ? c.value : i.get(h)
        },
        s = ne && ne.__classPrivateFieldSet || function(h, i, a, c, u) {
            if (c === "m") throw new TypeError("Private method is not writable");
            if (c === "a" && !u) throw new TypeError("Private accessor was defined without a setter");
            if (typeof i == "function" ? h !== i || !u : !i.has(h)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return c === "a" ? u.call(h, a) : u ? u.value = a : i.set(h, a), a
        },
        d, y, v, A;
    Object.defineProperty(ne, "__esModule", {
        value: !0
    }), ne.Auth = void 0;
    const E = Sn(),
        I = bt();
    let f = class {
        constructor(i) {
            this.http = i, this.settings = {
                path: "/auth",
                key: "colyseus-auth-token"
            }, d.set(this, !1), y.set(this, void 0), v.set(this, void 0), A.set(this, (0, I.createNanoEvents)()), (0, E.getItem)(this.settings.key, a => this.token = a)
        }
        set token(i) {
            this.http.authToken = i
        }
        get token() {
            return this.http.authToken
        }
        onChange(i) {
            const a = w(this, A, "f").on("change", i);
            return w(this, d, "f") || s(this, y, new Promise((c, u) => {
                this.getUserData().then(p => {
                    this.emitChange(Object.assign(Object.assign({}, p), {
                        token: this.token
                    }))
                }).catch(p => {
                    this.emitChange({
                        user: null,
                        token: void 0
                    })
                }).finally(() => {
                    c()
                })
            }), "f"), s(this, d, !0, "f"), a
        }
        getUserData() {
            return _(this, void 0, void 0, function*() {
                if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
                throw new Error("missing auth.token")
            })
        }
        registerWithEmailAndPassword(i, a, c) {
            return _(this, void 0, void 0, function*() {
                const u = (yield this.http.post(`${this.settings.path}/register`, {
                    body: {
                        email: i,
                        password: a,
                        options: c
                    }
                })).data;
                return this.emitChange(u), u
            })
        }
        signInWithEmailAndPassword(i, a) {
            return _(this, void 0, void 0, function*() {
                const c = (yield this.http.post(`${this.settings.path}/login`, {
                    body: {
                        email: i,
                        password: a
                    }
                })).data;
                return this.emitChange(c), c
            })
        }
        signInAnonymously(i) {
            return _(this, void 0, void 0, function*() {
                const a = (yield this.http.post(`${this.settings.path}/anonymous`, {
                    body: {
                        options: i
                    }
                })).data;
                return this.emitChange(a), a
            })
        }
        sendPasswordResetEmail(i) {
            return _(this, void 0, void 0, function*() {
                return (yield this.http.post(`${this.settings.path}/forgot-password`, {
                    body: {
                        email: i
                    }
                })).data
            })
        }
        signInWithProvider(i, a = {}) {
            return _(this, void 0, void 0, function*() {
                return new Promise((c, u) => {
                    const p = a.width || 480,
                        l = a.height || 768,
                        m = this.token ? `?token=${this.token}` : "",
                        x = `Login with ${i[0].toUpperCase()+i.substring(1)}`,
                        b = this.http.client.getHttpEndpoint(`${a.prefix||`${this.settings.path}/provider`}/${i}${m}`),
                        P = screen.width / 2 - p / 2,
                        B = screen.height / 2 - l / 2;
                    s(this, v, window.open(b, x, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + p + ", height=" + l + ", top=" + B + ", left=" + P), "f");
                    const Q = q => {
                            q.data.user === void 0 && q.data.token === void 0 || (clearInterval(J), w(this, v, "f").close(), s(this, v, void 0, "f"), window.removeEventListener("message", Q), q.data.error !== void 0 ? u(q.data.error) : (c(q.data), this.emitChange(q.data)))
                        },
                        J = setInterval(() => {
                            (!w(this, v, "f") || w(this, v, "f").closed) && (s(this, v, void 0, "f"), u("cancelled"), window.removeEventListener("message", Q))
                        }, 200);
                    window.addEventListener("message", Q)
                })
            })
        }
        signOut() {
            return _(this, void 0, void 0, function*() {
                this.emitChange({
                    user: null,
                    token: null
                })
            })
        }
        emitChange(i) {
            i.token !== void 0 && (this.token = i.token, i.token === null ? (0, E.removeItem)(this.settings.key) : (0, E.setItem)(this.settings.key, i.token)), w(this, A, "f").emit("change", i)
        }
    };
    return ne.Auth = f, d = new WeakMap, y = new WeakMap, v = new WeakMap, A = new WeakMap, ne
}
var Oe = {},
    Rt;

function Tn() {
    if (Rt) return Oe;
    Rt = 1, Object.defineProperty(Oe, "__esModule", {
        value: !0
    }), Oe.discordURLBuilder = void 0;

    function _(w) {
        var s;
        const d = ((s = window == null ? void 0 : window.location) === null || s === void 0 ? void 0 : s.hostname) || "localhost",
            y = w.hostname.split("."),
            v = !w.hostname.includes("trycloudflare.com") && !w.hostname.includes("discordsays.com") && y.length > 2 ? `/${y[0]}` : "";
        return w.pathname.startsWith("/.proxy") ? `${w.protocol}//${d}${v}${w.pathname}${w.search}` : `${w.protocol}//${d}/.proxy/colyseus${v}${w.pathname}${w.search}`
    }
    return Oe.discordURLBuilder = _, Oe
}
var St;

function In() {
    if (St) return oe;
    St = 1;
    var _ = oe && oe.__awaiter || function(h, i, a, c) {
            function u(p) {
                return p instanceof a ? p : new a(function(l) {
                    l(p)
                })
            }
            return new(a || (a = Promise))(function(p, l) {
                function m(P) {
                    try {
                        b(c.next(P))
                    } catch (B) {
                        l(B)
                    }
                }

                function x(P) {
                    try {
                        b(c.throw(P))
                    } catch (B) {
                        l(B)
                    }
                }

                function b(P) {
                    P.done ? p(P.value) : u(P.value).then(m, x)
                }
                b((c = c.apply(h, i || [])).next())
            })
        },
        w;
    Object.defineProperty(oe, "__esModule", {
        value: !0
    }), oe.Client = oe.MatchMakeError = void 0;
    const s = Ve(),
        d = Nt(),
        y = Rn(),
        v = Lt(),
        A = Tn();
    class E extends Error {
        constructor(i, a) {
            super(i), this.code = a, Object.setPrototypeOf(this, E.prototype)
        }
    }
    oe.MatchMakeError = E;
    const I = typeof window < "u" && typeof((w = window == null ? void 0 : window.location) === null || w === void 0 ? void 0 : w.hostname) < "u" ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    let f = class {
        constructor(i = I, a) {
            var c, u;
            if (typeof i == "string") {
                const p = i.startsWith("/") ? new URL(i, I) : new URL(i),
                    l = p.protocol === "https:" || p.protocol === "wss:",
                    m = Number(p.port || (l ? 443 : 80));
                this.settings = {
                    hostname: p.hostname,
                    pathname: p.pathname,
                    port: m,
                    secure: l
                }
            } else i.port === void 0 && (i.port = i.secure ? 443 : 80), i.pathname === void 0 && (i.pathname = ""), this.settings = i;
            this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new y.HTTP(this, (a == null ? void 0 : a.headers) || {}), this.auth = new v.Auth(this.http), this.urlBuilder = a == null ? void 0 : a.urlBuilder, !this.urlBuilder && typeof window < "u" && (!((u = (c = window == null ? void 0 : window.location) === null || c === void 0 ? void 0 : c.hostname) === null || u === void 0) && u.includes("discordsays.com")) && (this.urlBuilder = A.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
        }
        joinOrCreate(i, a = {}, c) {
            return _(this, void 0, void 0, function*() {
                return yield this.createMatchMakeRequest("joinOrCreate", i, a, c)
            })
        }
        create(i, a = {}, c) {
            return _(this, void 0, void 0, function*() {
                return yield this.createMatchMakeRequest("create", i, a, c)
            })
        }
        join(i, a = {}, c) {
            return _(this, void 0, void 0, function*() {
                return yield this.createMatchMakeRequest("join", i, a, c)
            })
        }
        joinById(i, a = {}, c) {
            return _(this, void 0, void 0, function*() {
                return yield this.createMatchMakeRequest("joinById", i, a, c)
            })
        }
        reconnect(i, a) {
            return _(this, void 0, void 0, function*() {
                if (typeof i == "string" && typeof a == "string") throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
                const [c, u] = i.split(":");
                if (!c || !u) throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);
                return yield this.createMatchMakeRequest("reconnect", c, {
                    reconnectionToken: u
                }, a)
            })
        }
        getAvailableRooms(i = "") {
            return _(this, void 0, void 0, function*() {
                return (yield this.http.get(`matchmake/${i}`, {
                    headers: {
                        Accept: "application/json"
                    }
                })).data
            })
        }
        consumeSeatReservation(i, a, c) {
            return _(this, void 0, void 0, function*() {
                const u = this.createRoom(i.room.name, a);
                u.roomId = i.room.roomId, u.sessionId = i.sessionId;
                const p = {
                    sessionId: u.sessionId
                };
                i.reconnectionToken && (p.reconnectionToken = i.reconnectionToken);
                const l = c || u;
                return u.connect(this.buildEndpoint(i.room, p), i.devMode && (() => _(this, void 0, void 0, function*() {
                    console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${u.roomId}'...`);
                    let m = 0,
                        x = 8;
                    const b = () => _(this, void 0, void 0, function*() {
                        m++;
                        try {
                            yield this.consumeSeatReservation(i, a, l), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${u.roomId}'`)
                        } catch {
                            m < x ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${m} out of ${x})`), setTimeout(b, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
                        }
                    });
                    setTimeout(b, 2e3)
                })), l, this.http.headers), new Promise((m, x) => {
                    const b = (P, B) => x(new s.ServerError(P, B));
                    l.onError.once(b), l.onJoin.once(() => {
                        l.onError.remove(b), m(l)
                    })
                })
            })
        }
        createMatchMakeRequest(i, a, c = {}, u, p) {
            return _(this, void 0, void 0, function*() {
                const l = (yield this.http.post(`matchmake/${i}/${a}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(c)
                })).data;
                if (l.error) throw new E(l.error, l.code);
                return i === "reconnect" && (l.reconnectionToken = c.reconnectionToken), yield this.consumeSeatReservation(l, u, p)
            })
        }
        createRoom(i, a) {
            return new d.Room(i, a)
        }
        buildEndpoint(i, a = {}) {
            const c = [];
            for (const l in a) a.hasOwnProperty(l) && c.push(`${l}=${a[l]}`);
            let u = this.settings.secure ? "wss://" : "ws://";
            i.publicAddress ? u += `${i.publicAddress}` : u += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
            const p = `${u}/${i.processId}/${i.roomId}?${c.join("&")}`;
            return this.urlBuilder ? this.urlBuilder(new URL(p)) : p
        }
        getHttpEndpoint(i = "") {
            const a = i.startsWith("/") ? i : `/${i}`,
                c = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${a}`;
            return this.urlBuilder ? this.urlBuilder(new URL(c)) : c
        }
        getEndpointPort() {
            return this.settings.port !== 80 && this.settings.port !== 443 ? `:${this.settings.port}` : ""
        }
    };
    return oe.Client = f, oe
}
var Re = {},
    Tt;

function Cn() {
    if (Tt) return Re;
    Tt = 1, Object.defineProperty(Re, "__esModule", {
        value: !0
    }), Re.SchemaSerializer = void 0;
    const _ = Dt();
    let w = class {
        setState(d) {
            return this.state.decode(d)
        }
        getState() {
            return this.state
        }
        patch(d) {
            return this.state.decode(d)
        }
        teardown() {
            var d, y;
            (y = (d = this.state) === null || d === void 0 ? void 0 : d.$changes) === null || y === void 0 || y.root.clearRefs()
        }
        handshake(d, y) {
            this.state ? new _.Reflection().decode(d, y) : this.state = _.Reflection.decode(d, y)
        }
    };
    return Re.SchemaSerializer = w, Re
}
var Se = {},
    It;

function Pn() {
    if (It) return Se;
    It = 1, Object.defineProperty(Se, "__esModule", {
        value: !0
    }), Se.NoneSerializer = void 0;
    let _ = class {
        setState(s) {}
        getState() {
            return null
        }
        patch(s) {}
        teardown() {}
        handshake(s) {}
    };
    return Se.NoneSerializer = _, Se
}
var Ct;

function Mn() {
    return Ct || (Ct = 1, function(_) {
        Object.defineProperty(_, "__esModule", {
            value: !0
        }), _.SchemaSerializer = _.registerSerializer = _.Auth = _.Room = _.ErrorCode = _.Protocol = _.MatchMakeError = _.Client = void 0, dn();
        var w = In();
        Object.defineProperty(_, "Client", {
            enumerable: !0,
            get: function() {
                return w.Client
            }
        }), Object.defineProperty(_, "MatchMakeError", {
            enumerable: !0,
            get: function() {
                return w.MatchMakeError
            }
        });
        var s = Pt();
        Object.defineProperty(_, "Protocol", {
            enumerable: !0,
            get: function() {
                return s.Protocol
            }
        }), Object.defineProperty(_, "ErrorCode", {
            enumerable: !0,
            get: function() {
                return s.ErrorCode
            }
        });
        var d = Nt();
        Object.defineProperty(_, "Room", {
            enumerable: !0,
            get: function() {
                return d.Room
            }
        });
        var y = Lt();
        Object.defineProperty(_, "Auth", {
            enumerable: !0,
            get: function() {
                return y.Auth
            }
        });
        const v = Cn();
        Object.defineProperty(_, "SchemaSerializer", {
            enumerable: !0,
            get: function() {
                return v.SchemaSerializer
            }
        });
        const A = Pn(),
            E = Mt();
        Object.defineProperty(_, "registerSerializer", {
            enumerable: !0,
            get: function() {
                return E.registerSerializer
            }
        }), (0, E.registerSerializer)("schema", v.SchemaSerializer), (0, E.registerSerializer)("none", A.NoneSerializer)
    }(qe)), qe
}
var Bn = Mn();
export {
    Bn as l
};