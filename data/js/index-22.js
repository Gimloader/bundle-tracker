var zs = Object.defineProperty;
var an = s => {
    throw TypeError(s)
};
var Vs = (s, e, t) => e in s ? zs(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var x = (s, e, t) => Vs(s, typeof e != "symbol" ? e + "" : e, t),
    fn = (s, e, t) => e.has(s) || an("Cannot " + t);
var re = (s, e, t) => (fn(s, e, "read from private field"), t ? t.call(s) : e.get(s)),
    Pe = (s, e, t) => e.has(s) ? an("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t),
    Te = (s, e, t, n) => (fn(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
import {
    av as Ee,
    aw as Js
} from "./_index.js";
ArrayBuffer.isView || (ArrayBuffer.isView = s => s !== null && typeof s == "object" && s.buffer instanceof ArrayBuffer);
typeof globalThis > "u" && typeof window < "u" && (window.globalThis = window);
typeof FormData > "u" && (globalThis.FormData = class {});
var K = {
        JOIN_ROOM: 10,
        ERROR: 11,
        LEAVE_ROOM: 12,
        ROOM_DATA: 13,
        ROOM_STATE: 14,
        ROOM_STATE_PATCH: 15,
        ROOM_DATA_BYTES: 17,
        PING: 18
    },
    he = {
        GOING_AWAY: 1001,
        NO_STATUS_RECEIVED: 1005,
        ABNORMAL_CLOSURE: 1006,
        CONSENTED: 4e3,
        FAILED_TO_RECONNECT: 4003,
        MAY_TRY_RECONNECT: 4010
    };
class rt extends Error {
    constructor(t, n, r) {
        super(n);
        x(this, "code");
        x(this, "headers");
        x(this, "status");
        x(this, "response");
        x(this, "data");
        this.name = "ServerError", this.code = t, r && (this.headers = r.headers, this.status = r.status, this.response = r.response, this.data = r.data)
    }
}
class qt extends Error {
    constructor(t, n) {
        super(t);
        x(this, "code");
        this.code = n, this.name = "MatchMakeError", Object.setPrototypeOf(this, qt.prototype)
    }
}
const It = 255,
    ts = 213;
var E;
(function(s) {
    s[s.ADD = 128] = "ADD", s[s.REPLACE = 0] = "REPLACE", s[s.DELETE = 64] = "DELETE", s[s.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", s[s.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", s[s.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", s[s.CLEAR = 10] = "CLEAR", s[s.REVERSE = 15] = "REVERSE", s[s.MOVE = 32] = "MOVE", s[s.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", s[s.ADD_BY_REFID = 129] = "ADD_BY_REFID"
})(E || (E = {}));
Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));
const O = "~refId",
    Ze = "~track",
    de = "~encoder",
    ge = "~decoder",
    tt = "~filter",
    se = "~getByIndex",
    ze = "~deleteByIndex",
    y = "~changes",
    j = "~childType",
    Xe = "~onEncodeEnd",
    Bt = "~onDecodeEnd",
    $e = "~descriptors",
    fe = "~__numFields",
    Be = "~__refTypeFieldIndexes",
    ye = "~__viewFieldIndexes",
    Ve = "$__fieldIndexesByViewTag";
let Ws;
try {
    Ws = new TextEncoder
} catch {}
const $t = new ArrayBuffer(8),
    Ne = new Int32Array($t),
    Mt = new Float32Array($t),
    qs = new Float64Array($t),
    ns = new BigInt64Array($t),
    Hs = typeof Ee < "u" && Ee.byteLength,
    ss = Hs ? Ee.byteLength : function(s, e) {
        for (var t = 0, n = 0, r = 0, i = s.length; r < i; r++) t = s.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
        return n
    };

function rs(s, e, t) {
    for (var n = 0, r = 0, i = e.length; r < i; r++) n = e.charCodeAt(r), n < 128 ? s[t.offset++] = n : n < 2048 ? (s[t.offset] = 192 | n >> 6, s[t.offset + 1] = 128 | n & 63, t.offset += 2) : n < 55296 || n >= 57344 ? (s[t.offset] = 224 | n >> 12, s[t.offset + 1] = 128 | n >> 6 & 63, s[t.offset + 2] = 128 | n & 63, t.offset += 3) : (r++, n = 65536 + ((n & 1023) << 10 | e.charCodeAt(r) & 1023), s[t.offset] = 240 | n >> 18, s[t.offset + 1] = 128 | n >> 12 & 63, s[t.offset + 2] = 128 | n >> 6 & 63, s[t.offset + 3] = 128 | n & 63, t.offset += 4)
}

function is(s, e, t) {
    s[t.offset++] = e & 255
}

function Ys(s, e, t) {
    s[t.offset++] = e & 255
}

function os(s, e, t) {
    s[t.offset++] = e & 255, s[t.offset++] = e >> 8 & 255
}

function Ht(s, e, t) {
    s[t.offset++] = e & 255, s[t.offset++] = e >> 8 & 255
}

function Ie(s, e, t) {
    s[t.offset++] = e & 255, s[t.offset++] = e >> 8 & 255, s[t.offset++] = e >> 16 & 255, s[t.offset++] = e >> 24 & 255
}

function Ue(s, e, t) {
    const n = e >> 24,
        r = e >> 16,
        i = e >> 8,
        o = e;
    s[t.offset++] = o & 255, s[t.offset++] = i & 255, s[t.offset++] = r & 255, s[t.offset++] = n & 255
}

function as(s, e, t) {
    const n = Math.floor(e / Math.pow(2, 32)),
        r = e >>> 0;
    Ue(s, r, t), Ue(s, n, t)
}

function fs(s, e, t) {
    const n = e / Math.pow(2, 32) >> 0,
        r = e >>> 0;
    Ue(s, r, t), Ue(s, n, t)
}

function Gs(s, e, t) {
    ns[0] = BigInt.asIntN(64, e), Ie(s, Ne[0], t), Ie(s, Ne[1], t)
}

function Zs(s, e, t) {
    ns[0] = BigInt.asIntN(64, e), Ie(s, Ne[0], t), Ie(s, Ne[1], t)
}

function cs(s, e, t) {
    Mt[0] = e, Ie(s, Ne[0], t)
}

function ls(s, e, t) {
    qs[0] = e, Ie(s, Ne[0], t), Ie(s, Ne[1], t)
}

function Ks(s, e, t) {
    s[t.offset++] = e ? 1 : 0
}

function Xs(s, e, t) {
    e || (e = "");
    let n = ss(e, "utf8"),
        r = 0;
    if (n < 32) s[t.offset++] = n | 160, r = 1;
    else if (n < 256) s[t.offset++] = 217, s[t.offset++] = n, r = 2;
    else if (n < 65536) s[t.offset++] = 218, Ht(s, n, t), r = 3;
    else if (n < 4294967296) s[t.offset++] = 219, Ue(s, n, t), r = 5;
    else throw new Error("String too long");
    return rs(s, e, t), r + n
}

function Nt(s, e, t) {
    if (isNaN(e)) return Nt(s, 0, t);
    if (isFinite(e)) {
        if (e !== (e | 0)) return Math.abs(e) <= 34028235e31 && (Mt[0] = e, Math.abs(Math.abs(Mt[0]) - Math.abs(e)) < 1e-4) ? (s[t.offset++] = 202, cs(s, e, t), 5) : (s[t.offset++] = 203, ls(s, e, t), 9)
    } else return Nt(s, e > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, t);
    return e >= 0 ? e < 128 ? (s[t.offset++] = e & 255, 1) : e < 256 ? (s[t.offset++] = 204, s[t.offset++] = e & 255, 2) : e < 65536 ? (s[t.offset++] = 205, Ht(s, e, t), 3) : e < 4294967296 ? (s[t.offset++] = 206, Ue(s, e, t), 5) : (s[t.offset++] = 207, fs(s, e, t), 9) : e >= -32 ? (s[t.offset++] = 224 | e + 32, 1) : e >= -128 ? (s[t.offset++] = 208, is(s, e, t), 2) : e >= -32768 ? (s[t.offset++] = 209, os(s, e, t), 3) : e >= -2147483648 ? (s[t.offset++] = 210, Ie(s, e, t), 5) : (s[t.offset++] = 211, as(s, e, t), 9)
}
const W = {
        int8: is,
        uint8: Ys,
        int16: os,
        uint16: Ht,
        int32: Ie,
        uint32: Ue,
        int64: as,
        uint64: fs,
        bigint64: Gs,
        biguint64: Zs,
        float32: cs,
        float64: ls,
        boolean: Ks,
        string: Xs,
        number: Nt,
        utf8Write: rs,
        utf8Length: ss
    },
    dt = new ArrayBuffer(8),
    Fe = new Int32Array(dt),
    Qs = new Float32Array(dt),
    er = new Float64Array(dt),
    tr = new BigUint64Array(dt),
    nr = new BigInt64Array(dt);

function hs(s, e, t) {
    t > s.length - e.offset && (t = s.length - e.offset);
    for (var n = "", r = 0, i = e.offset, o = e.offset + t; i < o; i++) {
        var a = s[i];
        if ((a & 128) === 0) {
            n += String.fromCharCode(a);
            continue
        }
        if ((a & 224) === 192) {
            n += String.fromCharCode((a & 31) << 6 | s[++i] & 63);
            continue
        }
        if ((a & 240) === 224) {
            n += String.fromCharCode((a & 15) << 12 | (s[++i] & 63) << 6 | (s[++i] & 63) << 0);
            continue
        }
        if ((a & 248) === 240) {
            r = (a & 7) << 18 | (s[++i] & 63) << 12 | (s[++i] & 63) << 6 | (s[++i] & 63) << 0, r >= 65536 ? (r -= 65536, n += String.fromCharCode((r >>> 10) + 55296, (r & 1023) + 56320)) : n += String.fromCharCode(r);
            continue
        }
        console.error("decode.utf8Read(): Invalid byte " + a + " at offset " + i + ". Skip to end of string: " + (e.offset + t));
        break
    }
    return e.offset += t, n
}

function us(s, e) {
    return gt(s, e) << 24 >> 24
}

function gt(s, e) {
    return s[e.offset++]
}

function ds(s, e) {
    return At(s, e) << 16 >> 16
}

function At(s, e) {
    return s[e.offset++] | s[e.offset++] << 8
}

function oe(s, e) {
    return s[e.offset++] | s[e.offset++] << 8 | s[e.offset++] << 16 | s[e.offset++] << 24
}

function Qe(s, e) {
    return oe(s, e) >>> 0
}

function gs(s, e) {
    return Fe[0] = oe(s, e), Qs[0]
}

function ps(s, e) {
    return Fe[0] = oe(s, e), Fe[1] = oe(s, e), er[0]
}

function ms(s, e) {
    const t = Qe(s, e);
    return oe(s, e) * Math.pow(2, 32) + t
}

function xs(s, e) {
    const t = Qe(s, e);
    return Qe(s, e) * Math.pow(2, 32) + t
}

function sr(s, e) {
    return Fe[0] = oe(s, e), Fe[1] = oe(s, e), nr[0]
}

function rr(s, e) {
    return Fe[0] = oe(s, e), Fe[1] = oe(s, e), tr[0]
}

function ir(s, e) {
    return gt(s, e) > 0
}

function or(s, e) {
    const t = s[e.offset++];
    let n;
    return t < 192 ? n = t & 31 : t === 217 ? n = gt(s, e) : t === 218 ? n = At(s, e) : t === 219 && (n = Qe(s, e)), hs(s, e, n)
}

function ar(s, e) {
    const t = s[e.offset++];
    if (t < 128) return t;
    if (t === 202) return gs(s, e);
    if (t === 203) return ps(s, e);
    if (t === 204) return gt(s, e);
    if (t === 205) return At(s, e);
    if (t === 206) return Qe(s, e);
    if (t === 207) return xs(s, e);
    if (t === 208) return us(s, e);
    if (t === 209) return ds(s, e);
    if (t === 210) return oe(s, e);
    if (t === 211) return ms(s, e);
    if (t > 223) return (255 - t + 1) * -1
}

function fr(s, e) {
    const t = s[e.offset];
    return t < 192 && t > 160 || t === 217 || t === 218 || t === 219
}
const J = {
        utf8Read: hs,
        int8: us,
        uint8: gt,
        int16: ds,
        uint16: At,
        int32: oe,
        uint32: Qe,
        float32: gs,
        float64: ps,
        int64: ms,
        uint64: xs,
        bigint64: sr,
        biguint64: rr,
        boolean: ir,
        string: or,
        number: ar,
        stringCheck: fr
    },
    Yt = {},
    cr = new Map;

function ve(s, e) {
    e.constructor && (cr.set(e.constructor, s), Yt[s] = e), e.encode && (W[s] = e.encode), e.decode && (J[s] = e.decode)
}

function ys(s) {
    return Yt[s]
}
const ce = class ce {
    constructor(e) {
        x(this, "types", {});
        x(this, "schemas", new Map);
        x(this, "hasFilters", !1);
        x(this, "parentFiltered", {});
        e && this.discoverTypes(e)
    }
    static register(e) {
        const t = Object.getPrototypeOf(e);
        if (t !== Z) {
            let n = ce.inheritedTypes.get(t);
            n || (n = new Set, ce.inheritedTypes.set(t, n)), n.add(e)
        }
    }
    static cache(e) {
        let t = ce.cachedContexts.get(e);
        return t || (t = new ce(e), ce.cachedContexts.set(e, t)), t
    }
    has(e) {
        return this.schemas.has(e)
    }
    get(e) {
        return this.types[e]
    }
    add(e, t = this.schemas.size) {
        return this.schemas.has(e) ? !1 : (this.types[t] = e, e[Symbol.metadata] === void 0 && ne.initialize(e), this.schemas.set(e, t), !0)
    }
    getTypeId(e) {
        return this.schemas.get(e)
    }
    discoverTypes(e, t, n, r) {
        var a, l;
        if (r && this.registerFilteredByParent(e, t, n), !this.add(e)) return;
        (a = ce.inheritedTypes.get(e)) == null || a.forEach(u => {
            this.discoverTypes(u, t, n, r)
        });
        let i = e;
        for (;
            (i = Object.getPrototypeOf(i)) && i !== Z && i !== Function.prototype;) this.discoverTypes(i);
        const o = e[l = Symbol.metadata] ?? (e[l] = {});
        o[ye] && (this.hasFilters = !0);
        for (const u in o) {
            const f = u,
                m = o[f].type,
                g = o[f].tag !== void 0;
            if (typeof m != "string")
                if (typeof m == "function") this.discoverTypes(m, e, f, r || g);
                else {
                    const I = Object.values(m)[0];
                    if (typeof I == "string") continue;
                    this.discoverTypes(I, e, f, r || g)
                }
        }
    }
    registerFilteredByParent(e, t, n) {
        let i = `${this.schemas.get(e)??this.schemas.size}`;
        t && (i += `-${this.schemas.get(t)}`), i += `-${n}`, this.parentFiltered[i] = !0
    }
    debug() {
        let e = "";
        for (const t in this.parentFiltered) {
            const n = t.split("-").map(Number),
                r = n.pop();
            e += `
		`, e += `${t}: ${n.reverse().map((i,o)=>{const a=this.types[i],l=a[Symbol.metadata];let u=a.name;return o===0&&(u+=`[${l[r].name}]`),`${u}`}).join(" -> ")}`
        }
        return `TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${e}`
    }
};
x(ce, "inheritedTypes", new Map), x(ce, "cachedContexts", new Map);
let je = ce;

function Me(s) {
    if (Array.isArray(s)) return {
        array: Me(s[0])
    };
    if (typeof s.type < "u") return s.type;
    if (lr(s)) return Object.keys(s).every(e => typeof s[e] == "string") ? "string" : "number";
    if (typeof s == "object" && s !== null) {
        const e = Object.keys(s).find(t => Yt[t] !== void 0);
        if (e) return s[e] = Me(s[e]), s
    }
    return s
}

function lr(s) {
    if (typeof s == "function" && s[Symbol.metadata]) return !1;
    const e = Object.keys(s),
        t = e.filter(n => /\d+/.test(n));
    return !!(t.length > 0 && t.length === e.length / 2 && s[s[t[0]]] == t[0] || e.length > 0 && e.every(n => typeof s[n] == "string" && s[n] === n))
}
const ne = {
    addField(s, e, t, n, r) {
        if (e > 64) throw new Error(`Can't define field '${t}'.
Schema instances may only have up to 64 fields.`);
        s[e] = Object.assign(s[e] || {}, {
            type: Me(n),
            index: e,
            name: t
        }), Object.defineProperty(s, $e, {
            value: s[$e] || {},
            enumerable: !1,
            configurable: !0
        }), r ? (s[$e][t] = r, s[$e][`_${t}`] = {
            value: void 0,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }) : s[$e][t] = {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
        }, Object.defineProperty(s, fe, {
            value: e,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s, t, {
            value: e,
            enumerable: !1,
            configurable: !0
        }), typeof s[e].type != "string" && (s[Be] === void 0 && Object.defineProperty(s, Be, {
            value: [],
            enumerable: !1,
            configurable: !0
        }), s[Be].push(e))
    },
    setTag(s, e, t) {
        const n = s[e],
            r = s[n];
        r.tag = t, s[ye] || (Object.defineProperty(s, ye, {
            value: [],
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s, Ve, {
            value: {},
            enumerable: !1,
            configurable: !0
        })), s[ye].push(n), s[Ve][t] || (s[Ve][t] = []), s[Ve][t].push(n)
    },
    setFields(s, e) {
        const t = s.prototype.constructor;
        je.register(t);
        const n = Object.getPrototypeOf(t),
            r = n && n[Symbol.metadata],
            i = ne.initialize(t);
        t[Ze] || (t[Ze] = Z[Ze]), t[de] || (t[de] = Z[de]), t[ge] || (t[ge] = Z[ge]), t.prototype.toJSON || (t.prototype.toJSON = Z.prototype.toJSON);
        let o = i[fe] ?? (r && r[fe]) ?? -1;
        o++;
        for (const a in e) {
            const l = Me(e[a]),
                u = typeof Object.keys(l)[0] == "string" && ys(Object.keys(l)[0]),
                f = u ? Object.values(l)[0] : l;
            ne.addField(i, o, a, l, yr(`_${a}`, o, f, u)), o++
        }
        return s
    },
    isDeprecated(s, e) {
        return s[e].deprecated === !0
    },
    init(s) {
        const e = {};
        s[Symbol.metadata] = e, Object.defineProperty(e, fe, {
            value: 0,
            enumerable: !1,
            configurable: !0
        })
    },
    initialize(s) {
        const e = Object.getPrototypeOf(s),
            t = e[Symbol.metadata];
        let n = s[Symbol.metadata] ?? Object.create(null);
        return e !== Z && n === t && (n = Object.create(null), t && (Object.setPrototypeOf(n, t), Object.defineProperty(n, fe, {
            value: t[fe],
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), t[ye] !== void 0 && (Object.defineProperty(n, ye, {
            value: [...t[ye]],
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(n, Ve, {
            value: {
                ...t[Ve]
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        })), t[Be] !== void 0 && Object.defineProperty(n, Be, {
            value: [...t[Be]],
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(n, $e, {
            value: {
                ...t[$e]
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }))), Object.defineProperty(s, Symbol.metadata, {
            value: n,
            writable: !1,
            configurable: !0
        }), n
    },
    isValidInstance(s) {
        return s.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(s.constructor[Symbol.metadata], fe)
    },
    getFields(s) {
        const e = s[Symbol.metadata],
            t = {};
        for (let n = 0; n <= e[fe]; n++) t[e[n].name] = e[n].type;
        return t
    },
    hasViewTagAtIndex(s, e) {
        var t;
        return (t = s == null ? void 0 : s[ye]) == null ? void 0 : t.includes(e)
    }
};

function xe(s) {
    return {
        indexes: {},
        operations: [],
        queueRootNode: s
    }
}

function qe() {
    return {
        next: void 0,
        tail: void 0
    }
}

function ee(s, e) {
    const t = s.indexes[e];
    t === void 0 ? s.indexes[e] = s.operations.push(e) - 1 : s.operations[t] = e
}

function cn(s, e) {
    var n;
    let t = s.indexes[e];
    t === void 0 && (t = Object.values(s.indexes).at(-1), e = (n = Object.entries(s.indexes).find(([r, i]) => i === t)) == null ? void 0 : n[0]), s.operations[t] = void 0, delete s.indexes[e]
}
class pt {
    constructor(e) {
        x(this, "ref");
        x(this, "metadata");
        x(this, "root");
        x(this, "parentChain");
        x(this, "isFiltered", !1);
        x(this, "isVisibilitySharedWithParent");
        x(this, "indexedOperations", {});
        x(this, "changes", {
            indexes: {},
            operations: []
        });
        x(this, "allChanges", {
            indexes: {},
            operations: []
        });
        x(this, "filteredChanges");
        x(this, "allFilteredChanges");
        x(this, "indexes");
        x(this, "isNew", !0);
        var t;
        this.ref = e, this.metadata = e.constructor[Symbol.metadata], (t = this.metadata) != null && t[ye] && (this.allFilteredChanges = {
            indexes: {},
            operations: []
        }, this.filteredChanges = {
            indexes: {},
            operations: []
        })
    }
    setRoot(e) {
        this.root = e;
        const t = this.root.add(this);
        this.checkIsFiltered(this.parent, this.parentIndex, t), t && this.forEachChild((n, r) => {
            n.root !== e ? n.setRoot(e) : e.add(n)
        })
    }
    setParent(e, t, n) {
        if (this.addParent(e, n), !t) return;
        const r = t.add(this);
        t !== this.root && (this.root = t, this.checkIsFiltered(e, n, r)), r && this.forEachChild((i, o) => {
            if (i.root === t) {
                t.add(i), t.moveNextToParent(i);
                return
            }
            i.setParent(this.ref, t, o)
        })
    }
    forEachChild(e) {
        var t, n;
        if (this.ref[j]) {
            if (typeof this.ref[j] != "string")
                for (const [r, i] of this.ref.entries()) i && e(i[y], ((t = this.indexes) == null ? void 0 : t[r]) ?? r)
        } else
            for (const r of ((n = this.metadata) == null ? void 0 : n[Be]) ?? []) {
                const i = this.metadata[r],
                    o = this.ref[i.name];
                o && e(o[y], r)
            }
    }
    operation(e) {
        var t, n;
        this.filteredChanges !== void 0 ? (this.filteredChanges.operations.push(-e), (t = this.root) == null || t.enqueueChangeTree(this, "filteredChanges")) : (this.changes.operations.push(-e), (n = this.root) == null || n.enqueueChangeTree(this, "changes"))
    }
    change(e, t = E.ADD) {
        var o, a, l;
        const n = this.isFiltered || ((a = (o = this.metadata) == null ? void 0 : o[e]) == null ? void 0 : a.tag) !== void 0,
            r = n ? this.filteredChanges : this.changes,
            i = this.indexedOperations[e];
        if (!i || i === E.DELETE) {
            const u = i && i === E.DELETE ? E.DELETE_AND_ADD : t;
            this.indexedOperations[e] = u
        }
        ee(r, e), n ? (ee(this.allFilteredChanges, e), this.root && (this.root.enqueueChangeTree(this, "filteredChanges"), this.root.enqueueChangeTree(this, "allFilteredChanges"))) : (ee(this.allChanges, e), (l = this.root) == null || l.enqueueChangeTree(this, "changes"))
    }
    shiftChangeIndexes(e) {
        const t = this.isFiltered ? this.filteredChanges : this.changes,
            n = {},
            r = {};
        for (const i in this.indexedOperations) n[Number(i) + e] = this.indexedOperations[i], r[Number(i) + e] = t.indexes[i];
        this.indexedOperations = n, t.indexes = r, t.operations = t.operations.map(i => i + e)
    }
    shiftAllChangeIndexes(e, t = 0) {
        this.filteredChanges !== void 0 ? (this._shiftAllChangeIndexes(e, t, this.allFilteredChanges), this._shiftAllChangeIndexes(e, t, this.allChanges)) : this._shiftAllChangeIndexes(e, t, this.allChanges)
    }
    _shiftAllChangeIndexes(e, t = 0, n) {
        const r = {};
        let i = 0;
        for (const o in n.indexes) r[i++] = n.indexes[o];
        n.indexes = r;
        for (let o = 0; o < n.operations.length; o++) {
            const a = n.operations[o];
            a > t && (n.operations[o] = a + e)
        }
    }
    indexedOperation(e, t, n = e) {
        var r, i;
        this.indexedOperations[e] = t, this.filteredChanges !== void 0 ? (ee(this.allFilteredChanges, n), ee(this.filteredChanges, e), (r = this.root) == null || r.enqueueChangeTree(this, "filteredChanges")) : (ee(this.allChanges, n), ee(this.changes, e), (i = this.root) == null || i.enqueueChangeTree(this, "changes"))
    }
    getType(e) {
        return this.ref[j] || this.metadata[e].type
    }
    getChange(e) {
        return this.indexedOperations[e]
    }
    getValue(e, t = !1) {
        return this.ref[se](e, t)
    }
    delete(e, t, n = e) {
        var o, a, l;
        if (e === void 0) {
            try {
                throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`)
            } catch (u) {
                console.warn(u)
            }
            return
        }
        const r = this.filteredChanges !== void 0 ? this.filteredChanges : this.changes;
        this.indexedOperations[e] = t ?? E.DELETE, ee(r, e), cn(this.allChanges, n);
        const i = this.getValue(e);
        return i && i[y] && ((o = this.root) == null || o.remove(i[y])), this.filteredChanges !== void 0 ? (cn(this.allFilteredChanges, n), (a = this.root) == null || a.enqueueChangeTree(this, "filteredChanges")) : (l = this.root) == null || l.enqueueChangeTree(this, "changes"), i
    }
    endEncode(e) {
        var t, n;
        this.indexedOperations = {}, this[e] = xe(), (n = (t = this.ref)[Xe]) == null || n.call(t), this.isNew = !1
    }
    discard(e = !1) {
        var t, n;
        (n = (t = this.ref)[Xe]) == null || n.call(t), this.indexedOperations = {}, this.changes = xe(this.changes.queueRootNode), this.filteredChanges !== void 0 && (this.filteredChanges = xe(this.filteredChanges.queueRootNode)), e && (this.allChanges = xe(this.allChanges.queueRootNode), this.allFilteredChanges !== void 0 && (this.allFilteredChanges = xe(this.allFilteredChanges.queueRootNode)))
    }
    discardAll() {
        const e = Object.keys(this.indexedOperations);
        for (let t = 0, n = e.length; t < n; t++) {
            const r = this.getValue(Number(e[t]));
            r && r[y] && r[y].discardAll()
        }
        this.discard()
    }
    get changed() {
        return Object.entries(this.indexedOperations).length > 0
    }
    checkIsFiltered(e, t, n) {
        var r, i, o, a;
        this.root.types.hasFilters && (this._checkFilteredByParent(e, t), this.filteredChanges !== void 0 && ((r = this.root) == null || r.enqueueChangeTree(this, "filteredChanges"), n && ((i = this.root) == null || i.enqueueChangeTree(this, "allFilteredChanges")))), this.isFiltered || ((o = this.root) == null || o.enqueueChangeTree(this, "changes"), n && ((a = this.root) == null || a.enqueueChangeTree(this, "allChanges")))
    }
    _checkFilteredByParent(e, t) {
        if (!e) return;
        const n = ne.isValidInstance(this.ref) ? this.ref.constructor : this.ref[j];
        let r, i = !ne.isValidInstance(e);
        i ? (r = e[y], e = r.parent, t = r.parentIndex) : r = e[y];
        const o = e.constructor;
        let a = `${this.root.types.getTypeId(n)}`;
        o && (a += `-${this.root.types.schemas.get(o)}`), a += `-${t}`;
        const l = ne.hasViewTagAtIndex(o == null ? void 0 : o[Symbol.metadata], t);
        this.isFiltered = e[y].isFiltered || this.root.types.parentFiltered[a] || l, this.isFiltered && (this.isVisibilitySharedWithParent = r.isFiltered && typeof n != "string" && !l && i, this.filteredChanges || (this.filteredChanges = xe(), this.allFilteredChanges = xe()), this.changes.operations.length > 0 && (this.changes.operations.forEach(u => ee(this.filteredChanges, u)), this.allChanges.operations.forEach(u => ee(this.allFilteredChanges, u)), this.changes = xe(), this.allChanges = xe()))
    }
    get parent() {
        var e;
        return (e = this.parentChain) == null ? void 0 : e.ref
    }
    get parentIndex() {
        var e;
        return (e = this.parentChain) == null ? void 0 : e.index
    }
    addParent(e, t) {
        if (this.hasParent((n, r) => n[y] === e[y])) {
            this.parentChain.index = t;
            return
        }
        this.parentChain = {
            ref: e,
            index: t,
            next: this.parentChain
        }
    }
    removeParent(e = this.parent) {
        let t = this.parentChain,
            n = null;
        for (; t;) {
            if (t.ref[y] === e[y]) return n ? n.next = t.next : this.parentChain = t.next, !0;
            n = t, t = t.next
        }
        return this.parentChain === void 0
    }
    findParent(e) {
        let t = this.parentChain;
        for (; t;) {
            if (e(t.ref, t.index)) return t;
            t = t.next
        }
    }
    hasParent(e) {
        return this.findParent(e) !== void 0
    }
    getAllParents() {
        const e = [];
        let t = this.parentChain;
        for (; t;) e.push({
            ref: t.ref,
            index: t.index
        }), t = t.next;
        return e
    }
}

function Gt(s, e, t, n, r, i) {
    var o;
    typeof t == "string" ? (o = W[t]) == null || o.call(W, e, n, i) : t[Symbol.metadata] !== void 0 ? (W.number(e, n[O], i), (r & E.ADD) === E.ADD && s.tryEncodeTypeId(e, t, n.constructor, i)) : W.number(e, n[O], i)
}
const hr = function(s, e, t, n, r, i, o, a, l) {
        if (e[i.offset++] = (n | r) & 255, r === E.DELETE) return;
        const u = t.ref,
            f = l[n];
        Gt(s, e, l[n].type, u[f.name], r, i)
    },
    Zt = function(s, e, t, n, r, i) {
        if (e[i.offset++] = r & 255, W.number(e, n, i), r === E.DELETE) return;
        const o = t.ref;
        if ((r & E.ADD) === E.ADD && typeof o.set == "function") {
            const u = t.ref.$indexes.get(n);
            W.string(e, u, i)
        }
        const a = o[j],
            l = o[se](n);
        Gt(s, e, a, l, r, i)
    },
    ur = function(s, e, t, n, r, i, o, a) {
        const l = t.ref,
            u = a && t.isFiltered && typeof t.getType(n) != "string";
        let f;
        if (u) {
            const I = l.tmpItems[n];
            if (!I) return;
            f = I[O], r === E.DELETE ? r = E.DELETE_BY_REFID : r === E.ADD && (r = E.ADD_BY_REFID)
        } else f = n;
        if (e[i.offset++] = r & 255, W.number(e, f, i), r === E.DELETE || r === E.DELETE_BY_REFID) return;
        const m = t.getType(n),
            g = t.getValue(n, o);
        Gt(s, e, m, g, r, i)
    },
    ws = -1;

function Kt(s, e, t, n, r, i, o, a) {
    const l = s.root,
        u = t[se](n);
    let f;
    if ((e & E.DELETE) === E.DELETE) {
        const m = u == null ? void 0 : u[O];
        m !== void 0 && l.removeRef(m), e !== E.DELETE_AND_ADD && t[ze](n), f = void 0
    }
    if (e !== E.DELETE)
        if (Z.is(r)) {
            const m = J.number(i, o);
            if (f = l.refs.get(m), (e & E.ADD) === E.ADD) {
                const g = s.getInstanceType(i, o, r);
                f || (f = s.createInstanceOfType(g)), l.addRef(m, f, f !== u || e === E.DELETE_AND_ADD && f === u)
            }
        } else if (typeof r == "string") f = J[r](i, o);
    else {
        const m = ys(Object.keys(r)[0]),
            g = J.number(i, o),
            I = l.refs.has(g) ? u || l.refs.get(g) : new m.constructor;
        if (f = I.clone(!0), f[j] = Object.values(r)[0], u) {
            let C = u[O];
            if (C !== void 0 && g !== C) {
                const b = u.entries();
                let w;
                for (;
                    (w = b.next()) && !w.done;) {
                    const [R, L] = w.value;
                    typeof L == "object" && (C = L[O], l.removeRef(C)), a.push({
                        ref: u,
                        refId: C,
                        op: E.DELETE,
                        field: R,
                        value: void 0,
                        previousValue: L
                    })
                }
            }
        }
        l.addRef(g, f, I !== u || e === E.DELETE_AND_ADD && I === u)
    }
    return {
        value: f,
        previousValue: u
    }
}
const dr = function(s, e, t, n, r) {
        const i = e[t.offset++],
            o = n.constructor[Symbol.metadata],
            a = i >> 6 << 6,
            l = i % (a || 255),
            u = o[l];
        if (u === void 0) return console.warn("@colyseus/schema: field not defined at", {
            index: l,
            ref: n.constructor.name,
            metadata: o
        }), ws;
        const {
            value: f,
            previousValue: m
        } = Kt(s, a, n, l, u.type, e, t, r);
        f != null && (n[u.name] = f), m !== f && r.push({
            ref: n,
            refId: s.currentRefId,
            op: a,
            field: u.name,
            value: f,
            previousValue: m
        })
    },
    Xt = function(s, e, t, n, r) {
        const i = e[t.offset++];
        if (i === E.CLEAR) {
            s.removeChildRefs(n, r), n.clear();
            return
        }
        const o = J.number(e, t),
            a = n[j];
        let l;
        (i & E.ADD) === E.ADD ? typeof n.set == "function" ? (l = J.string(e, t), n.setIndex(o, l)) : l = o : l = n.getIndex(o);
        const {
            value: u,
            previousValue: f
        } = Kt(s, i, n, o, a, e, t, r);
        if (u != null) {
            if (typeof n.set == "function") n.$items.set(l, u);
            else if (typeof n.$setAt == "function") n.$setAt(o, u, i);
            else if (typeof n.add == "function") {
                const m = n.add(u);
                typeof m == "number" && n.setIndex(m, m)
            }
        }
        f !== u && r.push({
            ref: n,
            refId: s.currentRefId,
            op: i,
            field: "",
            dynamicIndex: l,
            value: u,
            previousValue: f
        })
    },
    gr = function(s, e, t, n, r) {
        let i = e[t.offset++],
            o;
        if (i === E.CLEAR) {
            s.removeChildRefs(n, r), n.clear();
            return
        } else if (i === E.REVERSE) {
            n.reverse();
            return
        } else if (i === E.DELETE_BY_REFID) {
            const m = J.number(e, t),
                g = s.root.refs.get(m);
            o = n.findIndex(I => I === g), n[ze](o), r.push({
                ref: n,
                refId: s.currentRefId,
                op: E.DELETE,
                field: "",
                dynamicIndex: o,
                value: void 0,
                previousValue: g
            });
            return
        } else if (i === E.ADD_BY_REFID) {
            const m = J.number(e, t),
                g = s.root.refs.get(m);
            g && (o = n.findIndex(I => I === g)), (o === -1 || o === void 0) && (o = n.length)
        } else o = J.number(e, t);
        const a = n[j];
        let l = o;
        const {
            value: u,
            previousValue: f
        } = Kt(s, i, n, o, a, e, t, r);
        u != null && u !== f && n.$setAt(o, u, i), f !== u && r.push({
            ref: n,
            refId: s.currentRefId,
            op: i,
            field: "",
            dynamicIndex: l,
            value: u,
            previousValue: f
        })
    };
class bs extends Error {}

function pr(s, e, t, n) {
    let r, i = !1;
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
            r = "number", isNaN(s) && console.log(`trying to encode "NaN" in ${t.constructor.name}#${n}`);
            break;
        case "bigint64":
        case "biguint64":
            r = "bigint";
            break;
        case "string":
            r = "string", i = !0;
            break;
        case "boolean":
            return;
        default:
            return
    }
    if (typeof s !== r && (!i || i && s !== null)) {
        let o = `'${JSON.stringify(s)}'${s&&s.constructor&&` (${s.constructor.name})`||""}`;
        throw new bs(`a '${r}' was expected, but ${o} was provided in ${t.constructor.name}#${n}`)
    }
}

function Ct(s, e, t, n) {
    if (!(s instanceof e)) throw new bs(`a '${e.name}' was expected, but '${s&&s.constructor.name}' was provided in ${t.constructor.name}#${n}`)
}
const mr = (s, e) => {
    const t = s.toString(),
        n = e.toString();
    return t < n ? -1 : t > n ? 1 : 0
};
var Rn, Dn, On, vn, Pn, _n;
const ie = class ie {
    constructor(...e) {
        x(this, _n);
        x(this, Pn);
        x(this, vn);
        x(this, "items", []);
        x(this, "tmpItems", []);
        x(this, "deletedIndexes", {});
        x(this, "isMovingItems", !1);
        x(this, Rn);
        Object.defineProperty(this, j, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
        });
        const t = new Proxy(this, {
            get: (n, r) => typeof r != "symbol" && !isNaN(r) ? this.items[r] : Reflect.get(n, r),
            set: (n, r, i) => {
                var o;
                if (typeof r != "symbol" && !isNaN(r)) {
                    if (i == null) n.$deleteAt(r);
                    else {
                        if (i[y]) {
                            Ct(i, n[j], n, r);
                            const a = n.items[r];
                            n.isMovingItems ? (a !== void 0 ? i[y].isNew ? n[y].indexedOperation(Number(r), E.MOVE_AND_ADD) : (n[y].getChange(Number(r)) & E.DELETE) === E.DELETE ? n[y].indexedOperation(Number(r), E.DELETE_AND_MOVE) : n[y].indexedOperation(Number(r), E.MOVE) : i[y].isNew && n[y].indexedOperation(Number(r), E.ADD), i[y].setParent(this, n[y].root, r)) : n.$changeAt(Number(r), i), a !== void 0 && ((o = a[y].root) == null || o.remove(a[y]))
                        } else n.$changeAt(Number(r), i);
                        n.items[r] = i, n.tmpItems[r] = i
                    }
                    return !0
                } else return Reflect.set(n, r, i)
            },
            deleteProperty: (n, r) => (typeof r == "number" ? n.$deleteAt(r) : delete n[r], !0),
            has: (n, r) => typeof r != "symbol" && !isNaN(Number(r)) ? Reflect.has(this.items, r) : Reflect.has(n, r)
        });
        return Object.defineProperty(this, y, {
            value: new pt(t),
            enumerable: !1,
            writable: !0
        }), e.length > 0 && this.push(...e), t
    }
    static[(_n = y, Pn = O, vn = j, On = de, Dn = ge, tt)](e, t, n) {
        var r;
        return !n || typeof e[j] == "string" || n.isChangeTreeVisible((r = e.tmpItems[t]) == null ? void 0 : r[y])
    }
    static is(e) {
        return Array.isArray(e) || e.array !== void 0
    }
    static from(e) {
        return new ie(...Array.from(e))
    }
    set length(e) {
        e === 0 ? this.clear() : e < this.items.length ? this.splice(e, this.length - e) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
    }
    get length() {
        return this.items.length
    }
    push(...e) {
        var r;
        let t = this.tmpItems.length;
        const n = this[y];
        for (let i = 0, o = e.length; i < o; i++, t++) {
            const a = e[i];
            if (a == null) return;
            typeof a == "object" && this[j] && Ct(a, this[j], this, i), n.indexedOperation(t, E.ADD, this.items.length), this.items.push(a), this.tmpItems.push(a), (r = a[y]) == null || r.setParent(this, n.root, t)
        }
        return t
    }
    pop() {
        let e = -1;
        for (let t = this.tmpItems.length - 1; t >= 0; t--)
            if (this.deletedIndexes[t] !== !0) {
                e = t;
                break
            } if (!(e < 0)) return this[y].delete(e, void 0, this.items.length - 1), this.deletedIndexes[e] = !0, this.items.pop()
    }
    at(e) {
        return e < 0 && (e += this.length), this.items[e]
    }
    $changeAt(e, t) {
        var i;
        if (t == null) {
            console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
            return
        }
        if (this.items[e] === t) return;
        const n = this.items[e] !== void 0 ? typeof t == "object" ? E.DELETE_AND_ADD : E.REPLACE : E.ADD,
            r = this[y];
        r.change(e, n), (i = t[y]) == null || i.setParent(this, r.root, e)
    }
    $deleteAt(e, t) {
        this[y].delete(e, t)
    }
    $setAt(e, t, n) {
        e === 0 && n === E.ADD && this.items[e] !== void 0 ? this.items.unshift(t) : n === E.DELETE_AND_MOVE ? (this.items.splice(e, 1), this.items[e] = t) : this.items[e] = t
    }
    clear() {
        if (this.items.length === 0) return;
        const e = this[y];
        e.forEachChild((t, n) => {
            var r;
            (r = e.root) == null || r.remove(t)
        }), e.discard(!0), e.operation(E.CLEAR), this.items.length = 0, this.tmpItems.length = 0
    }
    concat(...e) {
        return new ie(...this.items.concat(...e))
    }
    join(e) {
        return this.items.join(e)
    }
    reverse() {
        return this[y].operation(E.REVERSE), this.items.reverse(), this.tmpItems.reverse(), this
    }
    shift() {
        if (this.items.length === 0) return;
        const e = this[y],
            t = this.tmpItems.findIndex(r => r === this.items[0]),
            n = this.items.findIndex(r => r === this.items[0]);
        return e.delete(t, E.DELETE, n), e.shiftAllChangeIndexes(-1, n), this.deletedIndexes[t] = !0, this.items.shift()
    }
    slice(e, t) {
        const n = new ie;
        return n.push(...this.items.slice(e, t)), n
    }
    sort(e = mr) {
        this.isMovingItems = !0;
        const t = this[y];
        return this.items.sort(e).forEach((r, i) => t.change(i, E.REPLACE)), this.tmpItems.sort(e), this.isMovingItems = !1, this
    }
    splice(e, t, ...n) {
        var u, f, m;
        const r = this[y],
            i = this.items.length,
            o = this.tmpItems.length,
            a = n.length,
            l = [];
        for (let g = 0; g < o; g++) this.deletedIndexes[g] !== !0 && l.push(g);
        if (i > e) {
            t === void 0 && (t = i - e);
            for (let g = e; g < e + t; g++) {
                const I = l[g];
                r.delete(I, E.DELETE), this.deletedIndexes[I] = !0
            }
        } else t = 0;
        if (a > 0) {
            if (a > t) throw console.error("Inserting more elements than deleting during ArraySchema#splice()"), new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");
            for (let g = 0; g < a; g++) {
                const I = (l[e] ?? i) + g;
                r.indexedOperation(I, this.deletedIndexes[I] ? E.DELETE_AND_ADD : E.ADD), (u = n[g][y]) == null || u.setParent(this, r.root, I)
            }
        }
        return t > a && r.shiftAllChangeIndexes(-(t - a), l[e + a]), r.filteredChanges !== void 0 ? (f = r.root) == null || f.enqueueChangeTree(r, "filteredChanges") : (m = r.root) == null || m.enqueueChangeTree(r, "changes"), this.items.splice(e, t, ...n)
    }
    unshift(...e) {
        const t = this[y];
        return t.shiftChangeIndexes(e.length), t.isFiltered ? ee(t.filteredChanges, this.items.length) : ee(t.allChanges, this.items.length), e.forEach((n, r) => {
            t.change(r, E.ADD)
        }), this.tmpItems.unshift(...e), this.items.unshift(...e)
    }
    indexOf(e, t) {
        return this.items.indexOf(e, t)
    }
    lastIndexOf(e, t = this.length - 1) {
        return this.items.lastIndexOf(e, t)
    }
    every(e, t) {
        return this.items.every(e, t)
    }
    some(e, t) {
        return this.items.some(e, t)
    }
    forEach(e, t) {
        return this.items.forEach(e, t)
    }
    map(e, t) {
        return this.items.map(e, t)
    }
    filter(e, t) {
        return this.items.filter(e, t)
    }
    reduce(e, t) {
        return this.items.reduce(e, t)
    }
    reduceRight(e, t) {
        return this.items.reduceRight(e, t)
    }
    find(e, t) {
        return this.items.find(e, t)
    }
    findIndex(e, t) {
        return this.items.findIndex(e, t)
    }
    fill(e, t, n) {
        throw new Error("ArraySchema#fill() not implemented")
    }
    copyWithin(e, t, n) {
        throw new Error("ArraySchema#copyWithin() not implemented")
    }
    toString() {
        return this.items.toString()
    }
    toLocaleString() {
        return this.items.toLocaleString()
    } [Symbol.iterator]() {
        return this.items[Symbol.iterator]()
    }
    static get[Symbol.species]() {
        return ie
    }
    entries() {
        return this.items.entries()
    }
    keys() {
        return this.items.keys()
    }
    values() {
        return this.items.values()
    }
    includes(e, t) {
        return this.items.includes(e, t)
    }
    flatMap(e, t) {
        throw new Error("ArraySchema#flatMap() is not supported.")
    }
    flat(e) {
        throw new Error("ArraySchema#flat() is not supported.")
    }
    findLast() {
        return this.items.findLast.apply(this.items, arguments)
    }
    findLastIndex(...e) {
        return this.items.findLastIndex.apply(this.items, arguments)
    }
    with(e, t) {
        const n = this.items.slice();
        return e < 0 && (e += this.length), n[e] = t, new ie(...n)
    }
    toReversed() {
        return this.items.slice().reverse()
    }
    toSorted(e) {
        return this.items.slice().sort(e)
    }
    toSpliced(e, t, ...n) {
        return this.items.toSpliced.apply(copy, arguments)
    }
    shuffle() {
        return this.move(e => {
            let t = this.items.length;
            for (; t != 0;) {
                let n = Math.floor(Math.random() * t);
                t--, [this[t], this[n]] = [this[n], this[t]]
            }
        })
    }
    move(e) {
        return this.isMovingItems = !0, e(this), this.isMovingItems = !1, this
    } [(Rn = Symbol.unscopables, se)](e, t = !1) {
        return t ? this.items[e] : this.deletedIndexes[e] ? this.items[e] : this.tmpItems[e] || this.items[e]
    } [ze](e) {
        this.items[e] = void 0, this.tmpItems[e] = void 0
    } [Xe]() {
        this.tmpItems = this.items.slice(), this.deletedIndexes = {}
    } [Bt]() {
        this.items = this.items.filter(e => e !== void 0), this.tmpItems = this.items.slice()
    }
    toArray() {
        return this.items.slice(0)
    }
    toJSON() {
        return this.toArray().map(e => typeof e.toJSON == "function" ? e.toJSON() : e)
    }
    clone(e) {
        let t;
        return e ? (t = new ie, t.push(...this.items)) : t = new ie(...this.map(n => n[y] ? n.clone() : n)), t
    }
};
x(ie, On, ur), x(ie, Dn, gr);
let Re = ie;
ve("array", {
    constructor: Re
});
var Ln, Bn, Mn, Nn, Un;
const Ae = class Ae {
    constructor(e) {
        x(this, Un);
        x(this, Nn);
        x(this, "childType");
        x(this, Mn);
        x(this, "$items", new Map);
        x(this, "$indexes", new Map);
        x(this, "deletedItems", {});
        const t = new pt(this);
        if (t.indexes = {}, Object.defineProperty(this, y, {
                value: t,
                enumerable: !1,
                writable: !0
            }), e)
            if (e instanceof Map || e instanceof Ae) e.forEach((n, r) => this.set(r, n));
            else
                for (const n in e) this.set(n, e[n]);
        Object.defineProperty(this, j, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
        })
    }
    static[(Un = y, Nn = O, Mn = j, Bn = de, Ln = ge, tt)](e, t, n) {
        return !n || typeof e[j] == "string" || n.isChangeTreeVisible((e[se](t) ?? e.deletedItems[t])[y])
    }
    static is(e) {
        return e.map !== void 0
    } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
    }
    get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
    }
    static get[Symbol.species]() {
        return Ae
    }
    set(e, t) {
        var a;
        if (t == null) throw new Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);
        typeof t == "object" && this[j] && Ct(t, this[j], this, e), e = e.toString();
        const n = this[y],
            r = t[y] !== void 0;
        let i, o;
        if (typeof n.indexes[e] < "u") {
            i = n.indexes[e], o = E.REPLACE;
            const l = this.$items.get(e);
            if (l === t) return;
            r && (o = E.DELETE_AND_ADD, l !== void 0 && ((a = l[y].root) == null || a.remove(l[y]))), this.deletedItems[i] && delete this.deletedItems[i]
        } else i = n.indexes[fe] ?? 0, o = E.ADD, this.$indexes.set(i, e), n.indexes[e] = i, n.indexes[fe] = i + 1;
        return this.$items.set(e, t), n.change(i, o), r && t[y].setParent(this, n.root, i), this
    }
    get(e) {
        return this.$items.get(e)
    }
    delete(e) {
        if (!this.$items.has(e)) return !1;
        const t = this[y].indexes[e];
        return this.deletedItems[t] = this[y].delete(t), this.$items.delete(e)
    }
    clear() {
        const e = this[y];
        e.discard(!0), e.indexes = {}, e.forEachChild((t, n) => {
            var r;
            (r = e.root) == null || r.remove(t)
        }), this.$indexes.clear(), this.$items.clear(), e.operation(E.CLEAR)
    }
    has(e) {
        return this.$items.has(e)
    }
    forEach(e) {
        this.$items.forEach(e)
    }
    entries() {
        return this.$items.entries()
    }
    keys() {
        return this.$items.keys()
    }
    values() {
        return this.$items.values()
    }
    get size() {
        return this.$items.size
    }
    setIndex(e, t) {
        this.$indexes.set(e, t)
    }
    getIndex(e) {
        return this.$indexes.get(e)
    } [se](e) {
        return this.$items.get(this.$indexes.get(e))
    } [ze](e) {
        const t = this.$indexes.get(e);
        this.$items.delete(t), this.$indexes.delete(e)
    } [Xe]() {
        const e = this[y];
        for (const t in this.deletedItems) {
            const n = parseInt(t),
                r = this.$indexes.get(n);
            delete e.indexes[r], this.$indexes.delete(n)
        }
        this.deletedItems = {}
    }
    toJSON() {
        const e = {};
        return this.forEach((t, n) => {
            e[n] = typeof t.toJSON == "function" ? t.toJSON() : t
        }), e
    }
    clone(e) {
        let t;
        return e ? t = Object.assign(new Ae, this) : (t = new Ae, this.forEach((n, r) => {
            n[y] ? t.set(r, n.clone()) : t.set(r, n)
        })), t
    }
};
x(Ae, Bn, Zt), x(Ae, Ln, Xt);
let De = Ae;
ve("map", {
    constructor: De
});
var Fn, jn, zn, Vn, Jn;
const He = class He {
    constructor(e) {
        x(this, Jn);
        x(this, Vn);
        x(this, zn);
        x(this, "$items", new Map);
        x(this, "$indexes", new Map);
        x(this, "deletedItems", {});
        x(this, "$refId", 0);
        this[y] = new pt(this), this[y].indexes = {}, e && e.forEach(t => this.add(t)), Object.defineProperty(this, j, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
        })
    }
    static[(Jn = y, Vn = O, zn = j, jn = de, Fn = ge, tt)](e, t, n) {
        return !n || typeof e[j] == "string" || n.isChangeTreeVisible((e[se](t) ?? e.deletedItems[t])[y])
    }
    static is(e) {
        return e.collection !== void 0
    }
    add(e) {
        const t = this.$refId++;
        return e[y] !== void 0 && e[y].setParent(this, this[y].root, t), this[y].indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, e), this[y].change(t), t
    }
    at(e) {
        const t = Array.from(this.$items.keys())[e];
        return this.$items.get(t)
    }
    entries() {
        return this.$items.entries()
    }
    delete(e) {
        const t = this.$items.entries();
        let n, r;
        for (;
            (r = t.next()) && !r.done;)
            if (e === r.value[1]) {
                n = r.value[0];
                break
            } return n === void 0 ? !1 : (this.deletedItems[n] = this[y].delete(n), this.$indexes.delete(n), this.$items.delete(n))
    }
    clear() {
        const e = this[y];
        e.discard(!0), e.indexes = {}, e.forEachChild((t, n) => {
            var r;
            (r = e.root) == null || r.remove(t)
        }), this.$indexes.clear(), this.$items.clear(), e.operation(E.CLEAR)
    }
    has(e) {
        return Array.from(this.$items.values()).some(t => t === e)
    }
    forEach(e) {
        this.$items.forEach((t, n, r) => e(t, n, this))
    }
    values() {
        return this.$items.values()
    }
    get size() {
        return this.$items.size
    } [Symbol.iterator]() {
        return this.$items.values()
    }
    setIndex(e, t) {
        this.$indexes.set(e, t)
    }
    getIndex(e) {
        return this.$indexes.get(e)
    } [se](e) {
        return this.$items.get(this.$indexes.get(e))
    } [ze](e) {
        const t = this.$indexes.get(e);
        this.$items.delete(t), this.$indexes.delete(e)
    } [Xe]() {
        this.deletedItems = {}
    }
    toArray() {
        return Array.from(this.$items.values())
    }
    toJSON() {
        const e = [];
        return this.forEach((t, n) => {
            e.push(typeof t.toJSON == "function" ? t.toJSON() : t)
        }), e
    }
    clone(e) {
        let t;
        return e ? t = Object.assign(new He, this) : (t = new He, this.forEach(n => {
            n[y] ? t.add(n.clone()) : t.add(n)
        })), t
    }
};
x(He, jn, Zt), x(He, Fn, Xt);
let ot = He;
ve("collection", {
    constructor: ot
});
var Wn, qn, Hn, Yn, Gn;
const Ye = class Ye {
    constructor(e) {
        x(this, Gn);
        x(this, Yn);
        x(this, Hn);
        x(this, "$items", new Map);
        x(this, "$indexes", new Map);
        x(this, "deletedItems", {});
        x(this, "$refId", 0);
        this[y] = new pt(this), this[y].indexes = {}, e && e.forEach(t => this.add(t)), Object.defineProperty(this, j, {
            value: void 0,
            enumerable: !1,
            writable: !0,
            configurable: !0
        })
    }
    static[(Gn = y, Yn = O, Hn = j, qn = de, Wn = ge, tt)](e, t, n) {
        return !n || typeof e[j] == "string" || n.visible.has((e[se](t) ?? e.deletedItems[t])[y])
    }
    static is(e) {
        return e.set !== void 0
    }
    add(e) {
        var r;
        if (this.has(e)) return !1;
        const t = this.$refId++;
        e[y] !== void 0 && e[y].setParent(this, this[y].root, t);
        const n = ((r = this[y].indexes[t]) == null ? void 0 : r.op) ?? E.ADD;
        return this[y].indexes[t] = t, this.$indexes.set(t, t), this.$items.set(t, e), this[y].change(t, n), t
    }
    entries() {
        return this.$items.entries()
    }
    delete(e) {
        const t = this.$items.entries();
        let n, r;
        for (;
            (r = t.next()) && !r.done;)
            if (e === r.value[1]) {
                n = r.value[0];
                break
            } return n === void 0 ? !1 : (this.deletedItems[n] = this[y].delete(n), this.$indexes.delete(n), this.$items.delete(n))
    }
    clear() {
        const e = this[y];
        e.discard(!0), e.indexes = {}, this.$indexes.clear(), this.$items.clear(), e.operation(E.CLEAR)
    }
    has(e) {
        const t = this.$items.values();
        let n = !1,
            r;
        for (;
            (r = t.next()) && !r.done;)
            if (e === r.value) {
                n = !0;
                break
            } return n
    }
    forEach(e) {
        this.$items.forEach((t, n, r) => e(t, n, this))
    }
    values() {
        return this.$items.values()
    }
    get size() {
        return this.$items.size
    } [Symbol.iterator]() {
        return this.$items.values()
    }
    setIndex(e, t) {
        this.$indexes.set(e, t)
    }
    getIndex(e) {
        return this.$indexes.get(e)
    } [se](e) {
        return this.$items.get(this.$indexes.get(e))
    } [ze](e) {
        const t = this.$indexes.get(e);
        this.$items.delete(t), this.$indexes.delete(e)
    } [Xe]() {
        this.deletedItems = {}
    }
    toArray() {
        return Array.from(this.$items.values())
    }
    toJSON() {
        const e = [];
        return this.forEach((t, n) => {
            e.push(typeof t.toJSON == "function" ? t.toJSON() : t)
        }), e
    }
    clone(e) {
        let t;
        return e ? t = Object.assign(new Ye, this) : (t = new Ye, this.forEach(n => {
            n[y] ? t.add(n.clone()) : t.add(n)
        })), t
    }
};
x(Ye, qn, Zt), x(Ye, Wn, Xt);
let at = Ye;
ve("set", {
    constructor: at
});
const Qt = -1;

function xr(s = Qt) {
    return function(e, t) {
        var a;
        const n = e.constructor,
            i = Object.getPrototypeOf(n)[Symbol.metadata],
            o = n[a = Symbol.metadata] ?? (n[a] = Object.assign({}, n[Symbol.metadata], i ?? Object.create(null)));
        ne.setTag(o, t, s)
    }
}

function yr(s, e, t, n) {
    return {
        get: function() {
            return this[s]
        },
        set: function(r) {
            var o, a;
            const i = this[s] ?? void 0;
            if (r !== i) {
                if (r != null) {
                    n ? (n.constructor === Re && !(r instanceof Re) && (r = new Re(...r)), n.constructor === De && !(r instanceof De) && (r = new De(r)), r[j] = t) : typeof t != "string" ? Ct(r, t, this, s.substring(1)) : pr(r, t, this, s.substring(1));
                    const l = this[y];
                    i !== void 0 && i[y] ? ((o = l.root) == null || o.remove(i[y]), this.constructor[Ze](l, e, E.DELETE_AND_ADD)) : this.constructor[Ze](l, e, E.ADD), (a = r[y]) == null || a.setParent(this, l.root, e)
                } else i !== void 0 && this[y].delete(e);
                this[s] = r
            }
        },
        enumerable: !0,
        configurable: !0
    }
}

function kt(s, e, t = Z) {
    const n = {},
        r = {},
        i = {},
        o = {};
    for (let f in s) {
        const m = s[f];
        typeof m == "object" ? (m.view !== void 0 && (o[f] = typeof m.view == "boolean" ? Qt : m.view), m.sync !== !1 && (n[f] = Me(m)), Object.prototype.hasOwnProperty.call(m, "default") ? i[f] = m.default : Array.isArray(m) || m.array !== void 0 ? i[f] = new Re : m.map !== void 0 ? i[f] = new De : m.collection !== void 0 ? i[f] = new ot : m.set !== void 0 ? i[f] = new at : m.type !== void 0 && Z.is(m.type) && (!m.type.prototype.initialize || m.type.prototype.initialize.length === 0) && (i[f] = new m.type)) : typeof m == "function" ? Z.is(m) ? ((!m.prototype.initialize || m.prototype.initialize.length === 0) && (i[f] = new m), n[f] = Me(m)) : r[f] = m : n[f] = Me(m)
    }
    const a = () => {
            const f = {};
            for (const m in i) {
                const g = i[m];
                g && typeof g.clone == "function" ? f[m] = g.clone() : f[m] = g
            }
            return f
        },
        l = f => {
            const m = Object.keys(n),
                g = {};
            for (const I in f) m.includes(I) || (g[I] = f[I]);
            return g
        },
        u = ne.setFields(class extends t {
            constructor(...f) {
                r.initialize && typeof r.initialize == "function" ? (super(Object.assign({}, a(), l(f[0] || {}))), new.target === u && r.initialize.apply(this, f)) : super(Object.assign({}, a(), f[0] || {}))
            }
        }, n);
    u._getDefaultValues = a, Object.assign(u.prototype, r);
    for (let f in o) xr(o[f])(u.prototype, f);
    return e && Object.defineProperty(u, "name", {
        value: e
    }), u.extends = (f, m) => kt(f, m, u), u
}

function yt(s) {
    return new Array(s).fill(0).map((e, t) => t === s - 1 ? "└─ " : "   ").join("")
}
var Zn, Kn, Xn, Qn;
const le = class le {
    constructor(e) {
        x(this, Zn);
        le.initialize(this), e && Object.assign(this, e)
    }
    static initialize(e) {
        var t;
        Object.defineProperty(e, y, {
            value: new pt(e),
            enumerable: !1,
            writable: !0
        }), Object.defineProperties(e, ((t = e.constructor[Symbol.metadata]) == null ? void 0 : t[$e]) || {})
    }
    static is(e) {
        return typeof e[Symbol.metadata] == "object"
    }
    static isSchema(e) {
        return typeof(e == null ? void 0 : e.assign) == "function"
    }
    static[(Qn = Symbol.metadata, Xn = de, Kn = ge, Zn = O, Ze)](e, t, n = E.ADD) {
        e.change(t, n)
    }
    static[tt](e, t, n) {
        var o, a;
        const i = (o = e.constructor[Symbol.metadata][t]) == null ? void 0 : o.tag;
        if (n === void 0) return i === void 0;
        if (i === void 0) return !0;
        if (i === Qt) return n.isChangeTreeVisible(e[y]);
        {
            const l = (a = n.tags) == null ? void 0 : a.get(e[y]);
            return l && l.has(i)
        }
    }
    assign(e) {
        return Object.assign(this, e), this
    }
    restore(e) {
        const t = this.constructor[Symbol.metadata];
        for (const n in t) {
            const r = t[n],
                i = r.name,
                o = r.type,
                a = e[i];
            if (a != null) {
                if (typeof o == "string") this[i] = a;
                else if (le.is(o)) {
                    const l = new o;
                    l.restore(a), this[i] = l
                } else if (typeof o == "object") {
                    const l = Object.keys(o)[0],
                        u = o[l];
                    if (l === "map") {
                        const f = this[i];
                        for (const m in a)
                            if (le.is(u)) {
                                const g = new u;
                                g.restore(a[m]), f.set(m, g)
                            } else f.set(m, a[m])
                    } else if (l === "array") {
                        const f = this[i];
                        for (let m = 0; m < a.length; m++)
                            if (le.is(u)) {
                                const g = new u;
                                g.restore(a[m]), f.push(g)
                            } else f.push(a[m])
                    }
                }
            }
        }
        return this
    }
    setDirty(e, t) {
        const n = this.constructor[Symbol.metadata];
        this[y].change(n[n[e]].index, t)
    }
    clone() {
        var n;
        const e = Object.create(this.constructor.prototype);
        le.initialize(e);
        const t = this.constructor[Symbol.metadata];
        for (const r in t) {
            const i = t[r].name;
            typeof this[i] == "object" && typeof((n = this[i]) == null ? void 0 : n.clone) == "function" ? e[i] = this[i].clone() : e[i] = this[i]
        }
        return e
    }
    toJSON() {
        const e = {},
            t = this.constructor[Symbol.metadata];
        for (const n in t) {
            const r = t[n],
                i = r.name;
            !r.deprecated && this[i] !== null && typeof this[i] < "u" && (e[i] = typeof this[i].toJSON == "function" ? this[i].toJSON() : this[i])
        }
        return e
    }
    discardAllChanges() {
        this[y].discardAll()
    } [se](e) {
        const t = this.constructor[Symbol.metadata];
        return this[t[e].name]
    } [ze](e) {
        const t = this.constructor[Symbol.metadata];
        this[t[e].name] = void 0
    }
    static debugRefIds(e, t = !1, n = 0, r, i = "") {
        var g;
        const o = t ? ` - ${JSON.stringify(e.toJSON())}` : "",
            a = e[y],
            l = e[O],
            u = r ? r.root : a.root,
            f = ((g = u == null ? void 0 : u.refCount) == null ? void 0 : g[l]) > 1 ? ` [×${u.refCount[l]}]` : "";
        let m = `${yt(n)}${i}${e.constructor.name} (refId: ${l})${f}${o}
`;
        return a.forEachChild((I, C) => {
            let b = C;
            typeof C == "number" && e.$indexes && (b = e.$indexes.get(C) ?? C);
            const w = e.forEach !== void 0 && b !== void 0 ? `["${b}"]: ` : "";
            m += this.debugRefIds(I.ref, t, n + 1, r, w)
        }), m
    }
    static debugRefIdEncodingOrder(e, t = "allChanges") {
        let n = [],
            r = e[y].root[t].next;
        for (; r;) r.changeTree && n.push(r.changeTree.ref[O]), r = r.next;
        return n
    }
    static debugRefIdsFromDecoder(e) {
        return this.debugRefIds(e.state, !1, 0, e)
    }
    static debugChanges(e, t = !1) {
        const n = e[y],
            r = t ? n.allChanges : n.changes,
            i = t ? "allChanges" : "changes";
        let o = `${e.constructor.name} (${e[O]}) -> .${i}:
`;

        function a(l) {
            l.operations.filter(u => u).forEach(u => {
                const f = n.indexedOperations[u];
                o += `- [${u}]: ${E[f]} (${JSON.stringify(n.getValue(Number(u),t))})
`
            })
        }
        return a(r), !t && n.filteredChanges && n.filteredChanges.operations.filter(l => l).length > 0 && (o += `${e.constructor.name} (${e[O]}) -> .filteredChanges:
`, a(n.filteredChanges)), t && n.allFilteredChanges && n.allFilteredChanges.operations.filter(l => l).length > 0 && (o += `${e.constructor.name} (${e[O]}) -> .allFilteredChanges:
`, a(n.allFilteredChanges)), o
    }
    static debugChangesDeep(e, t = "changes") {
        var f, m;
        let n = "";
        const r = e[y],
            i = r.root,
            o = new Map,
            a = [];
        let l = 0;
        for (const [g, I] of Object.entries(i[t])) {
            const C = i.changeTrees[g];
            if (!C) continue;
            let b = !1,
                w = [],
                R = (f = C.parent) == null ? void 0 : f[y];
            if (C === r) b = !0;
            else
                for (; R !== void 0;) {
                    if (w.push(R), R.ref === e) {
                        b = !0;
                        break
                    }
                    R = (m = R.parent) == null ? void 0 : m[y]
                }
            b && (a.push(C.ref[O]), l += Object.keys(I).length, o.set(C, w.reverse()))
        }
        n += `---
`, n += `root refId: ${r.ref[O]}
`, n += `Total instances: ${a.length} (refIds: ${a.join(", ")})
`, n += `Total changes: ${l}
`, n += `---
`;
        const u = new WeakSet;
        for (const [g, I] of o.entries()) {
            I.forEach((L, M) => {
                u.has(L) || (n += `${yt(M)}${L.ref.constructor.name} (refId: ${L.ref[O]})
`, u.add(L))
            });
            const C = g.indexedOperations,
                b = I.length,
                w = yt(b),
                R = b > 0 ? `(${g.parentIndex}) ` : "";
            n += `${w}${R}${g.ref.constructor.name} (refId: ${g.ref[O]}) - changes: ${Object.keys(C).length}
`;
            for (const L in C) {
                const M = C[L];
                n += `${yt(b+1)}${E[M]}: ${L}
`
            }
        }
        return `${n}`
    }
};
x(le, Qn), x(le, Xn, hr), x(le, Kn, dr);
let Z = le;
class wr {
    constructor(e) {
        x(this, "types");
        x(this, "nextUniqueId", 0);
        x(this, "refCount", {});
        x(this, "changeTrees", {});
        x(this, "allChanges", qe());
        x(this, "allFilteredChanges", qe());
        x(this, "changes", qe());
        x(this, "filteredChanges", qe());
        this.types = e
    }
    getNextUniqueId() {
        return this.nextUniqueId++
    }
    add(e) {
        const t = e.ref;
        t[O] === void 0 && Object.defineProperty(t, O, {
            value: this.getNextUniqueId(),
            enumerable: !1,
            writable: !0
        });
        const n = t[O],
            r = this.changeTrees[n] === void 0;
        r && (this.changeTrees[n] = e);
        const i = this.refCount[n];
        if (i === 0) {
            const o = e.allChanges.operations;
            let a = o.length;
            for (; a--;) e.indexedOperations[o[a]] = E.ADD, ee(e.changes, a)
        }
        return this.refCount[n] = (i || 0) + 1, r
    }
    remove(e) {
        const t = e.ref[O],
            n = this.refCount[t] - 1;
        return n <= 0 ? (e.root = void 0, delete this.changeTrees[t], this.removeChangeFromChangeSet("allChanges", e), this.removeChangeFromChangeSet("changes", e), e.filteredChanges && (this.removeChangeFromChangeSet("allFilteredChanges", e), this.removeChangeFromChangeSet("filteredChanges", e)), this.refCount[t] = 0, e.forEachChild((r, i) => {
            r.removeParent(e.ref) && (r.parentChain === void 0 || r.parentChain && this.refCount[r.ref[O]] > 0 ? this.remove(r) : r.parentChain && this.moveNextToParent(r))
        })) : (this.refCount[t] = n, this.recursivelyMoveNextToParent(e)), n
    }
    recursivelyMoveNextToParent(e) {
        this.moveNextToParent(e), e.forEachChild((t, n) => this.recursivelyMoveNextToParent(t))
    }
    moveNextToParent(e) {
        e.filteredChanges ? (this.moveNextToParentInChangeTreeList("filteredChanges", e), this.moveNextToParentInChangeTreeList("allFilteredChanges", e)) : (this.moveNextToParentInChangeTreeList("changes", e), this.moveNextToParentInChangeTreeList("allChanges", e))
    }
    moveNextToParentInChangeTreeList(e, t) {
        var u;
        const n = this[e],
            r = t[e].queueRootNode;
        if (!r) return;
        const i = t.parent;
        if (!i || !i[y]) return;
        const o = (u = i[y][e]) == null ? void 0 : u.queueRootNode;
        if (!o || o === r) return;
        const a = o.position;
        r.position > a || (r.prev ? r.prev.next = r.next : n.next = r.next, r.next ? r.next.prev = r.prev : n.tail = r.prev, r.prev = o, r.next = o.next, o.next ? o.next.prev = r : n.tail = r, o.next = r, this.updatePositionsAfterMove(n, r, a + 1))
    }
    enqueueChangeTree(e, t, n = e[t].queueRootNode) {
        n || (e[t].queueRootNode = this.addToChangeTreeList(this[t], e))
    }
    addToChangeTreeList(e, t) {
        const n = {
            changeTree: t,
            next: void 0,
            prev: void 0,
            position: e.tail ? e.tail.position + 1 : 0
        };
        return e.next ? (n.prev = e.tail, e.tail.next = n, e.tail = n) : (e.next = n, e.tail = n), n
    }
    updatePositionsAfterRemoval(e, t) {
        let n = e.next,
            r = 0;
        for (; n;) r >= t && (n.position = r), n = n.next, r++
    }
    updatePositionsAfterMove(e, t, n) {
        let r = e.next,
            i = 0;
        for (; r;) r.position = i, r = r.next, i++
    }
    removeChangeFromChangeSet(e, t) {
        const n = this[e],
            r = t[e].queueRootNode;
        if (r && r.changeTree === t) {
            const i = r.position;
            return r.prev ? r.prev.next = r.next : n.next = r.next, r.next ? r.next.prev = r.prev : n.tail = r.prev, this.updatePositionsAfterRemoval(n, i), t[e].queueRootNode = void 0, !0
        }
        return !1
    }
}

function ln(s, e) {
    const t = new Uint8Array(s.length + e.length);
    return t.set(s, 0), t.set(e, s.length), t
}
const Ge = class Ge {
    constructor(e) {
        x(this, "sharedBuffer", new Uint8Array(Ge.BUFFER_SIZE));
        x(this, "context");
        x(this, "state");
        x(this, "root");
        this.context = je.cache(e.constructor), this.root = new wr(this.context), this.setState(e)
    }
    setState(e) {
        this.state = e, this.state[y].setRoot(this.root)
    }
    encode(e = {
        offset: 0
    }, t, n = this.sharedBuffer, r = "changes", i = r === "allChanges", o = e.offset) {
        const a = t !== void 0,
            l = this.state[y];
        let u = this.root[r];
        for (; u = u.next;) {
            const f = u.changeTree;
            if (a) {
                if (!t.isChangeTreeVisible(f)) {
                    t.invisible.add(f);
                    continue
                }
                t.invisible.delete(f)
            }
            const m = f[r],
                g = f.ref,
                I = m.operations.length;
            if (I === 0) continue;
            const C = g.constructor,
                b = C[de],
                w = C[tt],
                R = C[Symbol.metadata];
            (a || e.offset > o || f !== l) && (n[e.offset++] = It & 255, W.number(n, g[O], e));
            for (let L = 0; L < I; L++) {
                const M = m.operations[L];
                if (M < 0) {
                    n[e.offset++] = Math.abs(M) & 255;
                    continue
                }
                const P = i ? E.ADD : f.indexedOperations[M];
                M === void 0 || P === void 0 || w && !w(g, M, t) || b(this, n, f, M, P, e, i, a, R)
            }
        }
        if (e.offset > n.byteLength) {
            const f = Math.ceil(e.offset / Ge.BUFFER_SIZE) * Ge.BUFFER_SIZE;
            console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(f/1024)} * 1024; // ${Math.round(f/1024)} KB
`);
            const m = new Uint8Array(f);
            return m.set(n), n = m, n === this.sharedBuffer && (this.sharedBuffer = n), this.encode({
                offset: o
            }, t, n, r, i)
        } else return n.subarray(0, e.offset)
    }
    encodeAll(e = {
        offset: 0
    }, t = this.sharedBuffer) {
        return this.encode(e, void 0, t, "allChanges", !0)
    }
    encodeAllView(e, t, n, r = this.sharedBuffer) {
        const i = n.offset;
        return this.encode(n, e, r, "allFilteredChanges", !0, i), ln(r.subarray(0, t), r.subarray(i, n.offset))
    }
    encodeView(e, t, n, r = this.sharedBuffer) {
        const i = n.offset;
        for (const [o, a] of e.changes) {
            const l = this.root.changeTrees[o];
            if (l === void 0) {
                e.changes.delete(o);
                continue
            }
            const u = Object.keys(a);
            if (u.length === 0) continue;
            const f = l.ref,
                m = f.constructor,
                g = m[de],
                I = m[Symbol.metadata];
            r[n.offset++] = It & 255, W.number(r, f[O], n);
            for (let C = 0, b = u.length; C < b; C++) {
                const w = Number(u[C]),
                    L = l.ref[se](w) !== void 0 && a[w] || E.DELETE;
                g(this, r, l, w, L, n, !1, !0, I)
            }
        }
        return e.changes.clear(), this.encode(n, e, r, "filteredChanges", !1, i), ln(r.subarray(0, t), r.subarray(i, n.offset))
    }
    discardChanges() {
        let e = this.root.changes.next;
        for (; e;) e.changeTree.endEncode("changes"), e = e.next;
        for (this.root.changes = qe(), e = this.root.filteredChanges.next; e;) e.changeTree.endEncode("filteredChanges"), e = e.next;
        this.root.filteredChanges = qe()
    }
    tryEncodeTypeId(e, t, n, r) {
        const i = this.context.getTypeId(t),
            o = this.context.getTypeId(n);
        if (o === void 0) {
            console.warn(`@colyseus/schema WARNING: Class "${n.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);
            return
        }
        i !== o && (e[r.offset++] = ts & 255, W.number(e, o, r))
    }
    get hasChanges() {
        return this.root.changes.next !== void 0 || this.root.filteredChanges.next !== void 0
    }
};
x(Ge, "BUFFER_SIZE", 8 * 1024);
let Ut = Ge;

function br(s, e) {
    if (e === -1 || e >= s.length) return !1;
    const t = s.length - 1;
    for (let n = e; n < t; n++) s[n] = s[n + 1];
    return s.length = t, !0
}
class hn extends Error {
    constructor(e) {
        super(e), this.name = "DecodingWarning"
    }
}
class Er {
    constructor() {
        x(this, "refs", new Map);
        x(this, "refCount", {});
        x(this, "deletedRefs", new Set);
        x(this, "callbacks", {});
        x(this, "nextUniqueId", 0)
    }
    getNextUniqueId() {
        return this.nextUniqueId++
    }
    addRef(e, t, n = !0) {
        this.refs.set(e, t), Object.defineProperty(t, O, {
            value: e,
            enumerable: !1,
            writable: !0
        }), n && (this.refCount[e] = (this.refCount[e] || 0) + 1), this.deletedRefs.has(e) && this.deletedRefs.delete(e)
    }
    removeRef(e) {
        const t = this.refCount[e];
        if (t === void 0) {
            try {
                throw new hn("trying to remove refId that doesn't exist: " + e)
            } catch (n) {
                console.warn(n)
            }
            return
        }
        if (t === 0) {
            try {
                const n = this.refs.get(e);
                throw new hn(`trying to remove refId '${e}' with 0 refCount (${n.constructor.name}: ${JSON.stringify(n)})`)
            } catch (n) {
                console.warn(n)
            }
            return
        }(this.refCount[e] = t - 1) <= 0 && this.deletedRefs.add(e)
    }
    clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
    }
    garbageCollectDeletedRefs() {
        this.deletedRefs.forEach(e => {
            if (this.refCount[e] > 0) return;
            const t = this.refs.get(e);
            if (t.constructor[Symbol.metadata] !== void 0) {
                const n = t.constructor[Symbol.metadata];
                for (const r in n) {
                    const i = n[r].name,
                        o = t[i];
                    if (typeof o == "object" && o) {
                        const a = o[O];
                        a !== void 0 && !this.deletedRefs.has(a) && this.removeRef(a)
                    }
                }
            } else typeof t[j] == "function" && Array.from(t.values()).forEach(n => {
                const r = n[O];
                r !== void 0 && !this.deletedRefs.has(r) && this.removeRef(r)
            });
            this.refs.delete(e), delete this.refCount[e], delete this.callbacks[e]
        }), this.deletedRefs.clear()
    }
    addCallback(e, t, n) {
        if (e === void 0) {
            const r = typeof t == "number" ? E[t] : t;
            throw new Error(`Can't addCallback on '${r}' (refId is undefined)`)
        }
        return this.callbacks[e] || (this.callbacks[e] = {}), this.callbacks[e][t] || (this.callbacks[e][t] = []), this.callbacks[e][t].push(n), () => this.removeCallback(e, t, n)
    }
    removeCallback(e, t, n) {
        var i, o, a;
        const r = (a = (o = (i = this.callbacks) == null ? void 0 : i[e]) == null ? void 0 : o[t]) == null ? void 0 : a.indexOf(n);
        r !== void 0 && r !== -1 && br(this.callbacks[e][t], r)
    }
}
class St {
    constructor(e, t) {
        x(this, "context");
        x(this, "state");
        x(this, "root");
        x(this, "currentRefId", 0);
        x(this, "triggerChanges");
        this.setState(e), this.context = t || new je(e.constructor)
    }
    setState(e) {
        this.state = e, this.root = new Er, this.root.addRef(0, e)
    }
    decode(e, t = {
        offset: 0
    }, n = this.state) {
        var l, u, f;
        const r = [],
            i = this.root,
            o = e.byteLength;
        let a = n.constructor[ge];
        for (this.currentRefId = 0; t.offset < o;) {
            if (e[t.offset] == It) {
                t.offset++, (l = n[Bt]) == null || l.call(n);
                const g = J.number(e, t),
                    I = i.refs.get(g);
                I ? (n = I, a = n.constructor[ge], this.currentRefId = g) : (console.error(`"refId" not found: ${g}`, {
                    previousRef: n,
                    previousRefId: this.currentRefId
                }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(e, t, o));
                continue
            }
            if (a(this, e, t, n, r) === ws) {
                console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(e, t, o);
                continue
            }
        }
        return (u = n[Bt]) == null || u.call(n), (f = this.triggerChanges) == null || f.call(this, r), i.garbageCollectDeletedRefs(), r
    }
    skipCurrentStructure(e, t, n) {
        const r = {
            offset: t.offset
        };
        for (; t.offset < n && !(e[t.offset] === It && (r.offset = t.offset + 1, this.root.refs.has(J.number(e, r))));) t.offset++
    }
    getInstanceType(e, t, n) {
        let r;
        if (e[t.offset] === ts) {
            t.offset++;
            const i = J.number(e, t);
            r = this.context.get(i)
        }
        return r || n
    }
    createInstanceOfType(e) {
        return new e
    }
    removeChildRefs(e, t) {
        const n = typeof e[j] != "string",
            r = e[O];
        e.forEach((i, o) => {
            t.push({
                ref: e,
                refId: r,
                op: E.DELETE,
                field: o,
                value: void 0,
                previousValue: i
            }), n && this.root.removeRef(i[O])
        })
    }
}
const Es = kt({
        name: "string",
        type: "string",
        referencedType: "number"
    }),
    Is = kt({
        id: "number",
        extendsId: "number",
        fields: [Es]
    }),
    et = kt({
        types: [Is],
        rootType: "number"
    });
et.encode = function(s, e = {
    offset: 0
}) {
    const t = s.context,
        n = new et,
        r = new Ut(n),
        i = t.schemas.get(s.state.constructor);
    i > 0 && (n.rootType = i);
    const o = new Set,
        a = {},
        l = f => {
            if (f.extendsId === void 0 || o.has(f.extendsId)) {
                o.add(f.id), n.types.push(f);
                const m = a[f.id];
                m !== void 0 && (delete a[f.id], m.forEach(g => l(g)))
            } else a[f.extendsId] === void 0 && (a[f.extendsId] = []), a[f.extendsId].push(f)
        };
    t.schemas.forEach((f, m) => {
        const g = new Is;
        g.id = Number(f);
        const I = Object.getPrototypeOf(m);
        I !== Z && (g.extendsId = t.schemas.get(I));
        const C = m[Symbol.metadata];
        if (C !== I[Symbol.metadata])
            for (const b in C) {
                const w = Number(b),
                    R = C[w].name;
                if (!Object.prototype.hasOwnProperty.call(C, R)) continue;
                const L = new Es;
                L.name = R;
                let M;
                const P = C[w];
                if (typeof P.type == "string") M = P.type;
                else {
                    let me;
                    Z.is(P.type) ? (M = "ref", me = P.type) : (M = Object.keys(P.type)[0], typeof P.type[M] == "string" ? M += ":" + P.type[M] : me = P.type[M]), L.referencedType = me ? t.getTypeId(me) : -1
                }
                L.type = M, g.fields.push(L)
            }
        l(g)
    });
    for (const f in a) a[f].forEach(m => n.types.push(m));
    return r.encodeAll(e).slice(0, e.offset)
};
et.decode = function(s, e) {
    const t = new et;
    new St(t).decode(s, e);
    const r = new je;
    t.types.forEach(a => {
        const l = r.get(a.extendsId) ?? Z,
            u = class extends l {};
        je.register(u), r.add(u, a.id)
    }, {});
    const i = (a, l, u) => {
        l.fields.forEach((f, m) => {
            const g = u + m;
            if (f.referencedType !== void 0) {
                let I = f.type,
                    C = r.get(f.referencedType);
                if (!C) {
                    const b = f.type.split(":");
                    I = b[0], C = b[1]
                }
                I === "ref" ? ne.addField(a, g, f.name, C) : ne.addField(a, g, f.name, {
                    [I]: C
                })
            } else ne.addField(a, g, f.name, f.type)
        })
    };
    t.types.forEach(a => {
        const l = r.get(a.id),
            u = ne.initialize(l),
            f = [];
        let m = a;
        do f.push(m), m = t.types.find(I => I.id === m.extendsId); while (m);
        let g = 0;
        f.reverse().forEach(I => {
            i(u, I, g), g += I.fields.length
        })
    });
    const o = new(r.get(t.rootType || 0));
    return new St(o, r)
};

function Ir(s) {
    const e = s.root,
        t = e.callbacks,
        n = new WeakMap;
    let r;
    s.triggerChanges = function(a) {
        var u;
        const l = new Set;
        for (let f = 0, m = a.length; f < m; f++) {
            const g = a[f],
                I = g.refId,
                C = g.ref,
                b = t[I];
            if (b) {
                if ((g.op & E.DELETE) === E.DELETE && Z.isSchema(g.previousValue)) {
                    const w = (u = t[g.previousValue[O]]) == null ? void 0 : u[E.DELETE];
                    for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R]()
                }
                if (Z.isSchema(C)) {
                    if (!l.has(I)) {
                        const w = b == null ? void 0 : b[E.REPLACE];
                        for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R]()
                    }
                    if (b.hasOwnProperty(g.field)) {
                        const w = b[g.field];
                        for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R](g.value, g.previousValue)
                    }
                } else {
                    if ((g.op & E.DELETE) === E.DELETE) {
                        if (g.previousValue !== void 0) {
                            const w = b[E.DELETE];
                            for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R](g.previousValue, g.dynamicIndex ?? g.field)
                        }
                        if ((g.op & E.ADD) === E.ADD) {
                            const w = b[E.ADD];
                            for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R](g.value, g.dynamicIndex ?? g.field)
                        }
                    } else if ((g.op & E.ADD) === E.ADD && g.previousValue !== g.value) {
                        const w = b[E.ADD];
                        for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R](g.value, g.dynamicIndex ?? g.field)
                    }
                    if (g.value !== g.previousValue && (g.value !== void 0 || g.previousValue !== void 0)) {
                        const w = b[E.REPLACE];
                        for (let R = (w == null ? void 0 : w.length) - 1; R >= 0; R--) w[R](g.value, g.dynamicIndex ?? g.field)
                    }
                }
                l.add(I)
            }
        }
    };

    function i(a, l) {
        var m;
        let u = ((m = l.instance) == null ? void 0 : m.constructor[Symbol.metadata]) || a,
            f = l.instance && typeof l.instance.forEach == "function" || a && typeof a[Symbol.metadata] > "u";
        if (u && !f) {
            const g = function(I, C, b, w) {
                return w && l.instance[C] !== void 0 && !n.has(r) && b(l.instance[C], void 0), e.addCallback(I[O], C, b)
            };
            return new Proxy({
                listen: function(C, b, w = !0) {
                    if (l.instance) return g(l.instance, C, b, w);
                    {
                        let R = () => {};
                        return l.onInstanceAvailable((L, M) => {
                            R = g(L, C, b, w && M && !n.has(r))
                        }), () => R()
                    }
                },
                onChange: function(C) {
                    return e.addCallback(l.instance[O], E.REPLACE, C)
                },
                bindTo: function(C, b) {
                    return b || (b = Object.keys(u).map(w => u[w].name)), e.addCallback(l.instance[O], E.REPLACE, () => {
                        b.forEach(w => C[w] = l.instance[w])
                    })
                }
            }, {
                get(I, C) {
                    var w;
                    const b = u[u[C]];
                    if (b) {
                        const R = (w = l.instance) == null ? void 0 : w[C],
                            L = (M => {
                                const P = o(l.instance).listen(C, (me, Ot) => {
                                    M(me, !1), P == null || P()
                                }, !1);
                                (R == null ? void 0 : R[O]) !== void 0 && M(R, !0)
                            });
                        return i(b.type, {
                            instance: (R == null ? void 0 : R[O]) !== void 0 && R,
                            parentInstance: l.instance,
                            onInstanceAvailable: L
                        })
                    } else return I[C]
                },
                has(I, C) {
                    return u[C] !== void 0
                },
                set(I, C, b) {
                    throw new Error("not allowed")
                },
                deleteProperty(I, C) {
                    throw new Error("not allowed")
                }
            })
        } else {
            const g = function(b, w, R) {
                    return R && b.forEach((L, M) => w(L, M)), e.addCallback(b[O], E.ADD, (L, M) => {
                        n.set(w, !0), r = w, w(L, M), n.delete(w), r = void 0
                    })
                },
                I = function(b, w) {
                    return e.addCallback(b[O], E.DELETE, w)
                },
                C = function(b, w) {
                    return e.addCallback(b[O], E.REPLACE, w)
                };
            return new Proxy({
                onAdd: function(b, w = !0) {
                    if (l.instance) return g(l.instance, b, w && !n.has(r));
                    if (l.onInstanceAvailable) {
                        let R = () => {};
                        return l.onInstanceAvailable((L, M) => {
                            R = g(L, b, w && M && !n.has(r))
                        }), () => R()
                    }
                },
                onRemove: function(b) {
                    if (l.instance) return I(l.instance, b);
                    if (l.onInstanceAvailable) {
                        let w = () => {};
                        return l.onInstanceAvailable(R => {
                            w = I(R, b)
                        }), () => w()
                    }
                },
                onChange: function(b) {
                    if (l.instance) return C(l.instance, b);
                    if (l.onInstanceAvailable) {
                        let w = () => {};
                        return l.onInstanceAvailable(R => {
                            w = C(R, b)
                        }), () => w()
                    }
                }
            }, {
                get(b, w) {
                    if (!b[w]) throw new Error(`Can't access '${w}' through callback proxy. access the instance directly.`);
                    return b[w]
                },
                has(b, w) {
                    return b[w] !== void 0
                },
                set(b, w, R) {
                    throw new Error("not allowed")
                },
                deleteProperty(b, w) {
                    throw new Error("not allowed")
                }
            })
        }
    }

    function o(a) {
        return i(void 0, {
            instance: a
        })
    }
    return o
}
ve("map", {
    constructor: De
});
ve("array", {
    constructor: Re
});
ve("set", {
    constructor: at
});
ve("collection", {
    constructor: ot
});
var Ft;
try {
    Ft = new TextDecoder
} catch {}
var $, pe, c = 0,
    V = {},
    B, ke, te = 0,
    ue = 0,
    G, be, Q = [],
    _, un = {
        useRecords: !1,
        mapsAsObjects: !0
    };
class Cs {}
const Ss = new Cs;
Ss.name = "MessagePack 0xC1";
var Oe = !1,
    Ts = 2,
    Cr;
try {
    new Function("")
} catch {
    Ts = 1 / 0
}
class ft {
    constructor(e) {
        e && (e.useRecords === !1 && e.mapsAsObjects === void 0 && (e.mapsAsObjects = !0), e.sequential && e.trusted !== !1 && (e.trusted = !0, !e.structures && e.useRecords != !1 && (e.structures = [], e.maxSharedStructures || (e.maxSharedStructures = 0))), e.structures ? e.structures.sharedLength = e.structures.length : e.getStructures && ((e.structures = []).uninitialized = !0, e.structures.sharedLength = 0), e.int64AsNumber && (e.int64AsType = "number")), Object.assign(this, e)
    }
    unpack(e, t) {
        if ($) return Os(() => (zt(), this ? this.unpack(e, t) : ft.prototype.unpack.call(un, e, t)));
        !e.buffer && e.constructor === ArrayBuffer && (e = typeof Ee < "u" ? Ee.from(e) : new Uint8Array(e)), typeof t == "object" ? (pe = t.end || e.length, c = t.start || 0) : (c = 0, pe = t > -1 ? t : e.length), ue = 0, ke = null, G = null, $ = e;
        try {
            _ = e.dataView || (e.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength))
        } catch (n) {
            throw $ = null, e instanceof Uint8Array ? n : new Error("Source must be a Uint8Array or Buffer but was a " + (e && typeof e == "object" ? e.constructor.name : typeof e))
        }
        if (this instanceof ft) {
            if (V = this, this.structures) return B = this.structures, wt(t);
            (!B || B.length > 0) && (B = [])
        } else V = un, (!B || B.length > 0) && (B = []);
        return wt(t)
    }
    unpackMultiple(e, t) {
        let n, r = 0;
        try {
            Oe = !0;
            let i = e.length,
                o = this ? this.unpack(e, i) : Rt.unpack(e, i);
            if (t) {
                if (t(o, r, c) === !1) return;
                for (; c < i;)
                    if (r = c, t(wt(), r, c) === !1) return
            } else {
                for (n = [o]; c < i;) r = c, n.push(wt());
                return n
            }
        } catch (i) {
            throw i.lastPosition = r, i.values = n, i
        } finally {
            Oe = !1, zt()
        }
    }
    _mergeStructures(e, t) {
        e = e || [], Object.isFrozen(e) && (e = e.map(n => n.slice(0)));
        for (let n = 0, r = e.length; n < r; n++) {
            let i = e[n];
            i && (i.isShared = !0, n >= 32 && (i.highByte = n - 32 >> 5))
        }
        e.sharedLength = e.length;
        for (let n in t || [])
            if (n >= 0) {
                let r = e[n],
                    i = t[n];
                i && (r && ((e.restoreStructures || (e.restoreStructures = []))[n] = r), e[n] = i)
            } return this.structures = e
    }
    decode(e, t) {
        return this.unpack(e, t)
    }
}

function wt(s) {
    try {
        if (!V.trusted && !Oe) {
            let t = B.sharedLength || 0;
            t < B.length && (B.length = t)
        }
        let e;
        if (V.randomAccessStructure && $[c] < 64 && $[c] >= 32 && Cr || (e = H()), G && (c = G.postBundlePosition, G = null), Oe && (B.restoreStructures = null), c == pe) B && B.restoreStructures && dn(), B = null, $ = null, be && (be = null);
        else {
            if (c > pe) throw new Error("Unexpected end of MessagePack data");
            if (!Oe) {
                let t;
                try {
                    t = JSON.stringify(e, (n, r) => typeof r == "bigint" ? `${r}n` : r).slice(0, 100)
                } catch (n) {
                    t = "(JSON view not available " + n + ")"
                }
                throw new Error("Data read, but end of buffer not reached " + t)
            }
        }
        return e
    } catch (e) {
        throw B && B.restoreStructures && dn(), zt(), (e instanceof RangeError || e.message.startsWith("Unexpected end of buffer") || c > pe) && (e.incomplete = !0), e
    }
}

function dn() {
    for (let s in B.restoreStructures) B[s] = B.restoreStructures[s];
    B.restoreStructures = null
}

function H() {
    let s = $[c++];
    if (s < 160)
        if (s < 128) {
            if (s < 64) return s;
            {
                let e = B[s & 63] || V.getStructures && $s()[s & 63];
                return e ? (e.read || (e.read = en(e, s & 63)), e.read()) : s
            }
        } else if (s < 144)
        if (s -= 128, V.mapsAsObjects) {
            let e = {};
            for (let t = 0; t < s; t++) {
                let n = ks();
                n === "__proto__" && (n = "__proto_"), e[n] = H()
            }
            return e
        } else {
            let e = new Map;
            for (let t = 0; t < s; t++) e.set(H(), H());
            return e
        }
    else {
        s -= 144;
        let e = new Array(s);
        for (let t = 0; t < s; t++) e[t] = H();
        return V.freezeData ? Object.freeze(e) : e
    } else if (s < 192) {
        let e = s - 160;
        if (ue >= c) return ke.slice(c - te, (c += e) - te);
        if (ue == 0 && pe < 140) {
            let t = e < 16 ? tn(e) : As(e);
            if (t != null) return t
        }
        return jt(e)
    } else {
        let e;
        switch (s) {
            case 192:
                return null;
            case 193:
                return G ? (e = H(), e > 0 ? G[1].slice(G.position1, G.position1 += e) : G[0].slice(G.position0, G.position0 -= e)) : Ss;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                if (e = $[c++], e === void 0) throw new Error("Unexpected end of buffer");
                return Pt(e);
            case 197:
                return e = _.getUint16(c), c += 2, Pt(e);
            case 198:
                return e = _.getUint32(c), c += 4, Pt(e);
            case 199:
                return _e($[c++]);
            case 200:
                return e = _.getUint16(c), c += 2, _e(e);
            case 201:
                return e = _.getUint32(c), c += 4, _e(e);
            case 202:
                if (e = _.getFloat32(c), V.useFloat32 > 2) {
                    let t = nn[($[c] & 127) << 1 | $[c + 1] >> 7];
                    return c += 4, (t * e + (e > 0 ? .5 : -.5) >> 0) / t
                }
                return c += 4, e;
            case 203:
                return e = _.getFloat64(c), c += 8, e;
            case 204:
                return $[c++];
            case 205:
                return e = _.getUint16(c), c += 2, e;
            case 206:
                return e = _.getUint32(c), c += 4, e;
            case 207:
                return V.int64AsType === "number" ? (e = _.getUint32(c) * 4294967296, e += _.getUint32(c + 4)) : V.int64AsType === "string" ? e = _.getBigUint64(c).toString() : V.int64AsType === "auto" ? (e = _.getBigUint64(c), e <= BigInt(2) << BigInt(52) && (e = Number(e))) : e = _.getBigUint64(c), c += 8, e;
            case 208:
                return _.getInt8(c++);
            case 209:
                return e = _.getInt16(c), c += 2, e;
            case 210:
                return e = _.getInt32(c), c += 4, e;
            case 211:
                return V.int64AsType === "number" ? (e = _.getInt32(c) * 4294967296, e += _.getUint32(c + 4)) : V.int64AsType === "string" ? e = _.getBigInt64(c).toString() : V.int64AsType === "auto" ? (e = _.getBigInt64(c), e >= BigInt(-2) << BigInt(52) && e <= BigInt(2) << BigInt(52) && (e = Number(e))) : e = _.getBigInt64(c), c += 8, e;
            case 212:
                if (e = $[c++], e == 114) return wn($[c++] & 63);
                {
                    let t = Q[e];
                    if (t) return t.read ? (c++, t.read(H())) : t.noBuffer ? (c++, t()) : t($.subarray(c, ++c));
                    throw new Error("Unknown extension " + e)
                }
            case 213:
                return e = $[c], e == 114 ? (c++, wn($[c++] & 63, $[c++])) : _e(2);
            case 214:
                return _e(4);
            case 215:
                return _e(8);
            case 216:
                return _e(16);
            case 217:
                return e = $[c++], ue >= c ? ke.slice(c - te, (c += e) - te) : Tr(e);
            case 218:
                return e = _.getUint16(c), c += 2, ue >= c ? ke.slice(c - te, (c += e) - te) : $r(e);
            case 219:
                return e = _.getUint32(c), c += 4, ue >= c ? ke.slice(c - te, (c += e) - te) : Ar(e);
            case 220:
                return e = _.getUint16(c), c += 2, pn(e);
            case 221:
                return e = _.getUint32(c), c += 4, pn(e);
            case 222:
                return e = _.getUint16(c), c += 2, mn(e);
            case 223:
                return e = _.getUint32(c), c += 4, mn(e);
            default:
                if (s >= 224) return s - 256;
                if (s === void 0) {
                    let t = new Error("Unexpected end of MessagePack data");
                    throw t.incomplete = !0, t
                }
                throw new Error("Unknown MessagePack token " + s)
        }
    }
}
const Sr = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

function en(s, e) {
    function t() {
        if (t.count++ > Ts) {
            let r = s.read = new Function("r", "return function(){return " + (V.freezeData ? "Object.freeze" : "") + "({" + s.map(i => i === "__proto__" ? "__proto_:r()" : Sr.test(i) ? i + ":r()" : "[" + JSON.stringify(i) + "]:r()").join(",") + "})}")(H);
            return s.highByte === 0 && (s.read = gn(e, s.read)), r()
        }
        let n = {};
        for (let r = 0, i = s.length; r < i; r++) {
            let o = s[r];
            o === "__proto__" && (o = "__proto_"), n[o] = H()
        }
        return V.freezeData ? Object.freeze(n) : n
    }
    return t.count = 0, s.highByte === 0 ? gn(e, t) : t
}
const gn = (s, e) => function() {
    let t = $[c++];
    if (t === 0) return e();
    let n = s < 32 ? -(s + (t << 5)) : s + (t << 5),
        r = B[n] || $s()[n];
    if (!r) throw new Error("Record id is not defined for " + n);
    return r.read || (r.read = en(r, s)), r.read()
};

function $s() {
    let s = Os(() => ($ = null, V.getStructures()));
    return B = V._mergeStructures(s, B)
}
var jt = mt,
    Tr = mt,
    $r = mt,
    Ar = mt;

function mt(s) {
    let e;
    if (s < 16 && (e = tn(s))) return e;
    if (s > 64 && Ft) return Ft.decode($.subarray(c, c += s));
    const t = c + s,
        n = [];
    for (e = ""; c < t;) {
        const r = $[c++];
        if ((r & 128) === 0) n.push(r);
        else if ((r & 224) === 192) {
            const i = $[c++] & 63;
            n.push((r & 31) << 6 | i)
        } else if ((r & 240) === 224) {
            const i = $[c++] & 63,
                o = $[c++] & 63;
            n.push((r & 31) << 12 | i << 6 | o)
        } else if ((r & 248) === 240) {
            const i = $[c++] & 63,
                o = $[c++] & 63,
                a = $[c++] & 63;
            let l = (r & 7) << 18 | i << 12 | o << 6 | a;
            l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), n.push(l)
        } else n.push(r);
        n.length >= 4096 && (e += Y.apply(String, n), n.length = 0)
    }
    return n.length > 0 && (e += Y.apply(String, n)), e
}

function pn(s) {
    let e = new Array(s);
    for (let t = 0; t < s; t++) e[t] = H();
    return V.freezeData ? Object.freeze(e) : e
}

function mn(s) {
    if (V.mapsAsObjects) {
        let e = {};
        for (let t = 0; t < s; t++) {
            let n = ks();
            n === "__proto__" && (n = "__proto_"), e[n] = H()
        }
        return e
    } else {
        let e = new Map;
        for (let t = 0; t < s; t++) e.set(H(), H());
        return e
    }
}
var Y = String.fromCharCode;

function As(s) {
    let e = c,
        t = new Array(s);
    for (let n = 0; n < s; n++) {
        const r = $[c++];
        if ((r & 128) > 0) {
            c = e;
            return
        }
        t[n] = r
    }
    return Y.apply(String, t)
}

function tn(s) {
    if (s < 4)
        if (s < 2) {
            if (s === 0) return "";
            {
                let e = $[c++];
                if ((e & 128) > 1) {
                    c -= 1;
                    return
                }
                return Y(e)
            }
        } else {
            let e = $[c++],
                t = $[c++];
            if ((e & 128) > 0 || (t & 128) > 0) {
                c -= 2;
                return
            }
            if (s < 3) return Y(e, t);
            let n = $[c++];
            if ((n & 128) > 0) {
                c -= 3;
                return
            }
            return Y(e, t, n)
        }
    else {
        let e = $[c++],
            t = $[c++],
            n = $[c++],
            r = $[c++];
        if ((e & 128) > 0 || (t & 128) > 0 || (n & 128) > 0 || (r & 128) > 0) {
            c -= 4;
            return
        }
        if (s < 6) {
            if (s === 4) return Y(e, t, n, r);
            {
                let i = $[c++];
                if ((i & 128) > 0) {
                    c -= 5;
                    return
                }
                return Y(e, t, n, r, i)
            }
        } else if (s < 8) {
            let i = $[c++],
                o = $[c++];
            if ((i & 128) > 0 || (o & 128) > 0) {
                c -= 6;
                return
            }
            if (s < 7) return Y(e, t, n, r, i, o);
            let a = $[c++];
            if ((a & 128) > 0) {
                c -= 7;
                return
            }
            return Y(e, t, n, r, i, o, a)
        } else {
            let i = $[c++],
                o = $[c++],
                a = $[c++],
                l = $[c++];
            if ((i & 128) > 0 || (o & 128) > 0 || (a & 128) > 0 || (l & 128) > 0) {
                c -= 8;
                return
            }
            if (s < 10) {
                if (s === 8) return Y(e, t, n, r, i, o, a, l);
                {
                    let u = $[c++];
                    if ((u & 128) > 0) {
                        c -= 9;
                        return
                    }
                    return Y(e, t, n, r, i, o, a, l, u)
                }
            } else if (s < 12) {
                let u = $[c++],
                    f = $[c++];
                if ((u & 128) > 0 || (f & 128) > 0) {
                    c -= 10;
                    return
                }
                if (s < 11) return Y(e, t, n, r, i, o, a, l, u, f);
                let m = $[c++];
                if ((m & 128) > 0) {
                    c -= 11;
                    return
                }
                return Y(e, t, n, r, i, o, a, l, u, f, m)
            } else {
                let u = $[c++],
                    f = $[c++],
                    m = $[c++],
                    g = $[c++];
                if ((u & 128) > 0 || (f & 128) > 0 || (m & 128) > 0 || (g & 128) > 0) {
                    c -= 12;
                    return
                }
                if (s < 14) {
                    if (s === 12) return Y(e, t, n, r, i, o, a, l, u, f, m, g);
                    {
                        let I = $[c++];
                        if ((I & 128) > 0) {
                            c -= 13;
                            return
                        }
                        return Y(e, t, n, r, i, o, a, l, u, f, m, g, I)
                    }
                } else {
                    let I = $[c++],
                        C = $[c++];
                    if ((I & 128) > 0 || (C & 128) > 0) {
                        c -= 14;
                        return
                    }
                    if (s < 15) return Y(e, t, n, r, i, o, a, l, u, f, m, g, I, C);
                    let b = $[c++];
                    if ((b & 128) > 0) {
                        c -= 15;
                        return
                    }
                    return Y(e, t, n, r, i, o, a, l, u, f, m, g, I, C, b)
                }
            }
        }
    }
}

function xn() {
    let s = $[c++],
        e;
    if (s < 192) e = s - 160;
    else switch (s) {
        case 217:
            e = $[c++];
            break;
        case 218:
            e = _.getUint16(c), c += 2;
            break;
        case 219:
            e = _.getUint32(c), c += 4;
            break;
        default:
            throw new Error("Expected string")
    }
    return mt(e)
}

function Pt(s) {
    return V.copyBuffers ? Uint8Array.prototype.slice.call($, c, c += s) : $.subarray(c, c += s)
}

function _e(s) {
    let e = $[c++];
    if (Q[e]) {
        let t;
        return Q[e]($.subarray(c, t = c += s), n => {
            c = n;
            try {
                return H()
            } finally {
                c = t
            }
        })
    } else throw new Error("Unknown extension type " + e)
}
var yn = new Array(4096);

function ks() {
    let s = $[c++];
    if (s >= 160 && s < 192) {
        if (s = s - 160, ue >= c) return ke.slice(c - te, (c += s) - te);
        if (!(ue == 0 && pe < 180)) return jt(s)
    } else return c--, Rs(H());
    let e = (s << 5 ^ (s > 1 ? _.getUint16(c) : s > 0 ? $[c] : 0)) & 4095,
        t = yn[e],
        n = c,
        r = c + s - 3,
        i, o = 0;
    if (t && t.bytes == s) {
        for (; n < r;) {
            if (i = _.getUint32(n), i != t[o++]) {
                n = 1879048192;
                break
            }
            n += 4
        }
        for (r += 3; n < r;)
            if (i = $[n++], i != t[o++]) {
                n = 1879048192;
                break
            } if (n === r) return c = n, t.string;
        r -= 3, n = c
    }
    for (t = [], yn[e] = t, t.bytes = s; n < r;) i = _.getUint32(n), t.push(i), n += 4;
    for (r += 3; n < r;) i = $[n++], t.push(i);
    let a = s < 16 ? tn(s) : As(s);
    return a != null ? t.string = a : t.string = jt(s)
}

function Rs(s) {
    if (typeof s == "string") return s;
    if (typeof s == "number" || typeof s == "boolean" || typeof s == "bigint") return s.toString();
    if (s == null) return s + "";
    if (V.allowArraysInMapKeys && Array.isArray(s) && s.flat().every(e => ["string", "number", "boolean", "bigint"].includes(typeof e))) return s.flat().toString();
    throw new Error(`Invalid property type for record: ${typeof s}`)
}
const wn = (s, e) => {
    let t = H().map(Rs),
        n = s;
    e !== void 0 && (s = s < 32 ? -((e << 5) + s) : (e << 5) + s, t.highByte = e);
    let r = B[s];
    return r && (r.isShared || Oe) && ((B.restoreStructures || (B.restoreStructures = []))[s] = r), B[s] = t, t.read = en(t, n), t.read()
};
Q[0] = () => {};
Q[0].noBuffer = !0;
Q[66] = s => {
    let e = s.length,
        t = BigInt(s[0] & 128 ? s[0] - 256 : s[0]);
    for (let n = 1; n < e; n++) t <<= BigInt(8), t += BigInt(s[n]);
    return t
};
let kr = {
    Error,
    TypeError,
    ReferenceError
};
Q[101] = () => {
    let s = H();
    return (kr[s[0]] || Error)(s[1], {
        cause: s[2]
    })
};
Q[105] = s => {
    if (V.structuredClone === !1) throw new Error("Structured clone extension is disabled");
    let e = _.getUint32(c - 4);
    be || (be = new Map);
    let t = $[c],
        n;
    t >= 144 && t < 160 || t == 220 || t == 221 ? n = [] : n = {};
    let r = {
        target: n
    };
    be.set(e, r);
    let i = H();
    return r.used ? Object.assign(n, i) : (r.target = i, i)
};
Q[112] = s => {
    if (V.structuredClone === !1) throw new Error("Structured clone extension is disabled");
    let e = _.getUint32(c - 4),
        t = be.get(e);
    return t.used = !0, t.target
};
Q[115] = () => new Set(H());
const Ds = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map(s => s + "Array");
let Rr = typeof globalThis == "object" ? globalThis : window;
Q[116] = s => {
    let e = s[0],
        t = Ds[e];
    if (!t) {
        if (e === 16) {
            let n = new ArrayBuffer(s.length - 1);
            return new Uint8Array(n).set(s.subarray(1)), n
        }
        throw new Error("Could not find typed array for code " + e)
    }
    return new Rr[t](Uint8Array.prototype.slice.call(s, 1).buffer)
};
Q[120] = () => {
    let s = H();
    return new RegExp(s[0], s[1])
};
const Dr = [];
Q[98] = s => {
    let e = (s[0] << 24) + (s[1] << 16) + (s[2] << 8) + s[3],
        t = c;
    return c += e - s.length, G = Dr, G = [xn(), xn()], G.position0 = 0, G.position1 = 0, G.postBundlePosition = c, c = t, H()
};
Q[255] = s => s.length == 4 ? new Date((s[0] * 16777216 + (s[1] << 16) + (s[2] << 8) + s[3]) * 1e3) : s.length == 8 ? new Date(((s[0] << 22) + (s[1] << 14) + (s[2] << 6) + (s[3] >> 2)) / 1e6 + ((s[3] & 3) * 4294967296 + s[4] * 16777216 + (s[5] << 16) + (s[6] << 8) + s[7]) * 1e3) : s.length == 12 ? new Date(((s[0] << 24) + (s[1] << 16) + (s[2] << 8) + s[3]) / 1e6 + ((s[4] & 128 ? -281474976710656 : 0) + s[6] * 1099511627776 + s[7] * 4294967296 + s[8] * 16777216 + (s[9] << 16) + (s[10] << 8) + s[11]) * 1e3) : new Date("invalid");

function Os(s) {
    let e = pe,
        t = c,
        n = te,
        r = ue,
        i = ke,
        o = be,
        a = G,
        l = new Uint8Array($.slice(0, pe)),
        u = B,
        f = B.slice(0, B.length),
        m = V,
        g = Oe,
        I = s();
    return pe = e, c = t, te = n, ue = r, ke = i, be = o, G = a, $ = l, Oe = g, B = u, B.splice(0, B.length, ...f), V = m, _ = new DataView($.buffer, $.byteOffset, $.byteLength), I
}

function zt() {
    $ = null, be = null, B = null
}
const nn = new Array(147);
for (let s = 0; s < 256; s++) nn[s] = +("1e" + Math.floor(45.15 - s * .30103));
var Rt = new ft({
    useRecords: !1
});
const Or = Rt.unpack;
Rt.unpackMultiple;
Rt.unpack;
let vr = new Float32Array(1);
new Uint8Array(vr.buffer, 0, 4);
let Et;
try {
    Et = new TextEncoder
} catch {}
let Vt, vs;
const Dt = typeof Ee < "u",
    bt = Dt ? function(s) {
        return Ee.allocUnsafeSlow(s)
    } : Uint8Array,
    Ps = Dt ? Ee : Uint8Array,
    bn = Dt ? 4294967296 : 2144337920;
let d, st, z, h = 0,
    X, q = null,
    Pr;
const _r = 21760,
    Lr = /[\u0080-\uFFFF]/,
    Je = Symbol("record-id");
class _s extends ft {
    constructor(e) {
        super(e), this.offset = 0;
        let t, n, r, i, o = Ps.prototype.utf8Write ? function(p, k) {
                return d.utf8Write(p, k, d.byteLength - k)
            } : Et && Et.encodeInto ? function(p, k) {
                return Et.encodeInto(p, d.subarray(k)).written
            } : !1,
            a = this;
        e || (e = {});
        let l = e && e.sequential,
            u = e.structures || e.saveStructures,
            f = e.maxSharedStructures;
        if (f == null && (f = u ? 32 : 0), f > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        e.structuredClone && e.moreTypes == null && (this.moreTypes = !0);
        let m = e.maxOwnStructures;
        m == null && (m = u ? 32 : 64), !this.structures && e.useRecords != !1 && (this.structures = []);
        let g = f > 32 || m + f > 64,
            I = f + 64,
            C = f + m + 64;
        if (C > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let b = [],
            w = 0,
            R = 0;
        this.pack = this.encode = function(p, k) {
            if (d || (d = new bt(8192), z = d.dataView || (d.dataView = new DataView(d.buffer, 0, 8192)), h = 0), X = d.length - 10, X - h < 2048 ? (d = new bt(d.length), z = d.dataView || (d.dataView = new DataView(d.buffer, 0, d.length)), X = d.length - 10, h = 0) : h = h + 7 & 2147483640, t = h, k & jr && (h += k & 255), i = a.structuredClone ? new Map : null, a.bundleStrings && typeof p != "string" ? (q = [], q.size = 1 / 0) : q = null, r = a.structures, r) {
                r.uninitialized && (r = a._mergeStructures(a.getStructures()));
                let S = r.sharedLength || 0;
                if (S > f) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + r.sharedLength);
                if (!r.transitions) {
                    r.transitions = Object.create(null);
                    for (let A = 0; A < S; A++) {
                        let D = r[A];
                        if (!D) continue;
                        let N, v = r.transitions;
                        for (let U = 0, F = D.length; U < F; U++) {
                            let ae = D[U];
                            N = v[ae], N || (N = v[ae] = Object.create(null)), v = N
                        }
                        v[Je] = A + 64
                    }
                    this.lastNamedStructuresLength = S
                }
                l || (r.nextId = S + 64)
            }
            n && (n = !1);
            let T;
            try {
                a.randomAccessStructure && p && p.constructor && p.constructor === Object ? js(p) : P(p);
                let S = q;
                if (q && Cn(t, P, 0), i && i.idsToInsert) {
                    let A = i.idsToInsert.sort((U, F) => U.offset > F.offset ? 1 : -1),
                        D = A.length,
                        N = -1;
                    for (; S && D > 0;) {
                        let U = A[--D].offset + t;
                        U < S.stringsPosition + t && N === -1 && (N = 0), U > S.position + t ? N >= 0 && (N += 6) : (N >= 0 && (z.setUint32(S.position + t, z.getUint32(S.position + t) + N), N = -1), S = S.previous, D++)
                    }
                    N >= 0 && S && z.setUint32(S.position + t, z.getUint32(S.position + t) + N), h += A.length * 6, h > X && Ce(h), a.offset = h;
                    let v = Mr(d.subarray(t, h), A);
                    return i = null, v
                }
                return a.offset = h, k & Ur ? (d.start = t, d.end = h, d) : d.subarray(t, h)
            } catch (S) {
                throw T = S, S
            } finally {
                if (r && (L(), n && a.saveStructures)) {
                    let S = r.sharedLength || 0,
                        A = d.subarray(t, h),
                        D = Nr(r, a);
                    if (!T) return a.saveStructures(D, D.isCompatible) === !1 ? a.pack(p, k) : (a.lastNamedStructuresLength = S, d.length > 1073741824 && (d = null), A)
                }
                d.length > 1073741824 && (d = null), k & Fr && (h = t)
            }
        };
        const L = () => {
                R < 10 && R++;
                let p = r.sharedLength || 0;
                if (r.length > p && !l && (r.length = p), w > 1e4) r.transitions = null, R = 0, w = 0, b.length > 0 && (b = []);
                else if (b.length > 0 && !l) {
                    for (let k = 0, T = b.length; k < T; k++) b[k][Je] = 0;
                    b = []
                }
            },
            M = p => {
                var k = p.length;
                k < 16 ? d[h++] = 144 | k : k < 65536 ? (d[h++] = 220, d[h++] = k >> 8, d[h++] = k & 255) : (d[h++] = 221, z.setUint32(h, k), h += 4);
                for (let T = 0; T < k; T++) P(p[T])
            },
            P = p => {
                h > X && (d = Ce(h));
                var k = typeof p,
                    T;
                if (k === "string") {
                    let S = p.length;
                    if (q && S >= 4 && S < 4096) {
                        if ((q.size += S) > _r) {
                            let v, U = (q[0] ? q[0].length * 3 + q[1].length : 0) + 10;
                            h + U > X && (d = Ce(h + U));
                            let F;
                            q.position ? (F = q, d[h] = 200, h += 3, d[h++] = 98, v = h - t, h += 4, Cn(t, P, 0), z.setUint16(v + t - 3, h - t - v)) : (d[h++] = 214, d[h++] = 98, v = h - t, h += 4), q = ["", ""], q.previous = F, q.size = 0, q.position = v
                        }
                        let N = Lr.test(p);
                        q[N ? 0 : 1] += p, d[h++] = 193, P(N ? -S : S);
                        return
                    }
                    let A;
                    S < 32 ? A = 1 : S < 256 ? A = 2 : S < 65536 ? A = 3 : A = 5;
                    let D = S * 3;
                    if (h + D > X && (d = Ce(h + D)), S < 64 || !o) {
                        let N, v, U, F = h + A;
                        for (N = 0; N < S; N++) v = p.charCodeAt(N), v < 128 ? d[F++] = v : v < 2048 ? (d[F++] = v >> 6 | 192, d[F++] = v & 63 | 128) : (v & 64512) === 55296 && ((U = p.charCodeAt(N + 1)) & 64512) === 56320 ? (v = 65536 + ((v & 1023) << 10) + (U & 1023), N++, d[F++] = v >> 18 | 240, d[F++] = v >> 12 & 63 | 128, d[F++] = v >> 6 & 63 | 128, d[F++] = v & 63 | 128) : (d[F++] = v >> 12 | 224, d[F++] = v >> 6 & 63 | 128, d[F++] = v & 63 | 128);
                        T = F - h - A
                    } else T = o(p, h + A);
                    T < 32 ? d[h++] = 160 | T : T < 256 ? (A < 2 && d.copyWithin(h + 2, h + 1, h + 1 + T), d[h++] = 217, d[h++] = T) : T < 65536 ? (A < 3 && d.copyWithin(h + 3, h + 2, h + 2 + T), d[h++] = 218, d[h++] = T >> 8, d[h++] = T & 255) : (A < 5 && d.copyWithin(h + 5, h + 3, h + 3 + T), d[h++] = 219, z.setUint32(h, T), h += 4), h += T
                } else if (k === "number")
                    if (p >>> 0 === p) p < 32 || p < 128 && this.useRecords === !1 || p < 64 && !this.randomAccessStructure ? d[h++] = p : p < 256 ? (d[h++] = 204, d[h++] = p) : p < 65536 ? (d[h++] = 205, d[h++] = p >> 8, d[h++] = p & 255) : (d[h++] = 206, z.setUint32(h, p), h += 4);
                    else if (p >> 0 === p) p >= -32 ? d[h++] = 256 + p : p >= -128 ? (d[h++] = 208, d[h++] = p + 256) : p >= -32768 ? (d[h++] = 209, z.setInt16(h, p), h += 2) : (d[h++] = 210, z.setInt32(h, p), h += 4);
                else {
                    let S;
                    if ((S = this.useFloat32) > 0 && p < 4294967296 && p >= -2147483648) {
                        d[h++] = 202, z.setFloat32(h, p);
                        let A;
                        if (S < 4 || (A = p * nn[(d[h] & 127) << 1 | d[h + 1] >> 7]) >> 0 === A) {
                            h += 4;
                            return
                        } else h--
                    }
                    d[h++] = 203, z.setFloat64(h, p), h += 8
                } else if (k === "object" || k === "function")
                    if (!p) d[h++] = 192;
                    else {
                        if (i) {
                            let A = i.get(p);
                            if (A) {
                                if (!A.id) {
                                    let D = i.idsToInsert || (i.idsToInsert = []);
                                    A.id = D.push(A)
                                }
                                d[h++] = 214, d[h++] = 112, z.setUint32(h, A.id), h += 4;
                                return
                            } else i.set(p, {
                                offset: h - t
                            })
                        }
                        let S = p.constructor;
                        if (S === Object) xt(p);
                        else if (S === Array) M(p);
                        else if (S === Map)
                            if (this.mapAsEmptyObject) d[h++] = 128;
                            else {
                                T = p.size, T < 16 ? d[h++] = 128 | T : T < 65536 ? (d[h++] = 222, d[h++] = T >> 8, d[h++] = T & 255) : (d[h++] = 223, z.setUint32(h, T), h += 4);
                                for (let [A, D] of p) P(A), P(D)
                            }
                        else {
                            for (let A = 0, D = Vt.length; A < D; A++) {
                                let N = vs[A];
                                if (p instanceof N) {
                                    let v = Vt[A];
                                    if (v.write) {
                                        v.type && (d[h++] = 212, d[h++] = v.type, d[h++] = 0);
                                        let nt = v.write.call(this, p);
                                        nt === p ? Array.isArray(p) ? M(p) : xt(p) : P(nt);
                                        return
                                    }
                                    let U = d,
                                        F = z,
                                        ae = h;
                                    d = null;
                                    let Se;
                                    try {
                                        Se = v.pack.call(this, p, nt => (d = U, U = null, h += nt, h > X && Ce(h), {
                                            target: d,
                                            targetView: z,
                                            position: h - nt
                                        }), P)
                                    } finally {
                                        U && (d = U, z = F, h = ae, X = d.length - 10)
                                    }
                                    Se && (Se.length + h > X && Ce(Se.length + h), h = Br(Se, d, h, v.type));
                                    return
                                }
                            }
                            if (Array.isArray(p)) M(p);
                            else {
                                if (p.toJSON) {
                                    const A = p.toJSON();
                                    if (A !== p) return P(A)
                                }
                                if (k === "function") return P(this.writeFunction && this.writeFunction(p));
                                xt(p)
                            }
                        }
                    }
                else if (k === "boolean") d[h++] = p ? 195 : 194;
                else if (k === "bigint") {
                    if (p < BigInt(1) << BigInt(63) && p >= -(BigInt(1) << BigInt(63))) d[h++] = 211, z.setBigInt64(h, p);
                    else if (p < BigInt(1) << BigInt(64) && p > 0) d[h++] = 207, z.setBigUint64(h, p);
                    else if (this.largeBigIntToFloat) d[h++] = 203, z.setFloat64(h, Number(p));
                    else {
                        if (this.largeBigIntToString) return P(p.toString());
                        if (this.useBigIntExtension && p < BigInt(2) ** BigInt(1023) && p > -(BigInt(2) ** BigInt(1023))) {
                            d[h++] = 199, h++, d[h++] = 66;
                            let S = [],
                                A;
                            do {
                                let D = p & BigInt(255);
                                A = (D & BigInt(128)) === (p < BigInt(0) ? BigInt(128) : BigInt(0)), S.push(D), p >>= BigInt(8)
                            } while (!((p === BigInt(0) || p === BigInt(-1)) && A));
                            d[h - 2] = S.length;
                            for (let D = S.length; D > 0;) d[h++] = Number(S[--D]);
                            return
                        } else throw new RangeError(p + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                    }
                    h += 8
                } else if (k === "undefined") this.encodeUndefinedAsNil ? d[h++] = 192 : (d[h++] = 212, d[h++] = 0, d[h++] = 0);
                else throw new Error("Unknown type: " + k)
            },
            me = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? p => {
                let k;
                if (this.skipValues) {
                    k = [];
                    for (let A in p)(typeof p.hasOwnProperty != "function" || p.hasOwnProperty(A)) && !this.skipValues.includes(p[A]) && k.push(A)
                } else k = Object.keys(p);
                let T = k.length;
                T < 16 ? d[h++] = 128 | T : T < 65536 ? (d[h++] = 222, d[h++] = T >> 8, d[h++] = T & 255) : (d[h++] = 223, z.setUint32(h, T), h += 4);
                let S;
                if (this.coercibleKeyAsNumber)
                    for (let A = 0; A < T; A++) {
                        S = k[A];
                        let D = Number(S);
                        P(isNaN(D) ? S : D), P(p[S])
                    } else
                        for (let A = 0; A < T; A++) P(S = k[A]), P(p[S])
            } : p => {
                d[h++] = 222;
                let k = h - t;
                h += 2;
                let T = 0;
                for (let S in p)(typeof p.hasOwnProperty != "function" || p.hasOwnProperty(S)) && (P(S), P(p[S]), T++);
                if (T > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
                d[k++ + t] = T >> 8, d[k + t] = T & 255
            },
            Ot = this.useRecords === !1 ? me : e.progressiveRecords && !g ? p => {
                let k, T = r.transitions || (r.transitions = Object.create(null)),
                    S = h++ - t,
                    A;
                for (let D in p)
                    if (typeof p.hasOwnProperty != "function" || p.hasOwnProperty(D)) {
                        if (k = T[D], k) T = k;
                        else {
                            let N = Object.keys(p),
                                v = T;
                            T = r.transitions;
                            let U = 0;
                            for (let F = 0, ae = N.length; F < ae; F++) {
                                let Se = N[F];
                                k = T[Se], k || (k = T[Se] = Object.create(null), U++), T = k
                            }
                            S + t + 1 == h ? (h--, vt(T, N, U)) : on(T, N, S, U), A = !0, T = v[D]
                        }
                        P(p[D])
                    } if (!A) {
                    let D = T[Je];
                    D ? d[S + t] = D : on(T, Object.keys(p), S, 0)
                }
            } : p => {
                let k, T = r.transitions || (r.transitions = Object.create(null)),
                    S = 0;
                for (let D in p)(typeof p.hasOwnProperty != "function" || p.hasOwnProperty(D)) && (k = T[D], k || (k = T[D] = Object.create(null), S++), T = k);
                let A = T[Je];
                A ? A >= 96 && g ? (d[h++] = ((A -= 96) & 31) + 96, d[h++] = A >> 5) : d[h++] = A : vt(T, T.__keys__ || Object.keys(p), S);
                for (let D in p)(typeof p.hasOwnProperty != "function" || p.hasOwnProperty(D)) && P(p[D])
            },
            rn = typeof this.useRecords == "function" && this.useRecords,
            xt = rn ? p => {
                rn(p) ? Ot(p) : me(p)
            } : Ot,
            Ce = p => {
                let k;
                if (p > 16777216) {
                    if (p - t > bn) throw new Error("Packed buffer would be larger than maximum buffer size");
                    k = Math.min(bn, Math.round(Math.max((p - t) * (p > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096)
                } else k = (Math.max(p - t << 2, d.length - 1) >> 12) + 1 << 12;
                let T = new bt(k);
                return z = T.dataView || (T.dataView = new DataView(T.buffer, 0, k)), p = Math.min(p, d.length), d.copy ? d.copy(T, 0, t, p) : T.set(d.slice(t, p)), h -= t, t = 0, X = T.length - 10, d = T
            },
            vt = (p, k, T) => {
                let S = r.nextId;
                S || (S = 64), S < I && this.shouldShareStructure && !this.shouldShareStructure(k) ? (S = r.nextOwnId, S < C || (S = I), r.nextOwnId = S + 1) : (S >= C && (S = I), r.nextId = S + 1);
                let A = k.highByte = S >= 96 && g ? S - 96 >> 5 : -1;
                p[Je] = S, p.__keys__ = k, r[S - 64] = k, S < I ? (k.isShared = !0, r.sharedLength = S - 63, n = !0, A >= 0 ? (d[h++] = (S & 31) + 96, d[h++] = A) : d[h++] = S) : (A >= 0 ? (d[h++] = 213, d[h++] = 114, d[h++] = (S & 31) + 96, d[h++] = A) : (d[h++] = 212, d[h++] = 114, d[h++] = S), T && (w += R * T), b.length >= m && (b.shift()[Je] = 0), b.push(p), P(k))
            },
            on = (p, k, T, S) => {
                let A = d,
                    D = h,
                    N = X,
                    v = t;
                d = st, h = 0, t = 0, d || (st = d = new bt(8192)), X = d.length - 10, vt(p, k, S), st = d;
                let U = h;
                if (d = A, h = D, X = N, t = v, U > 1) {
                    let F = h + U - 1;
                    F > X && Ce(F);
                    let ae = T + t;
                    d.copyWithin(ae + U, ae + 1, h), d.set(st.slice(0, U), ae), h = F
                } else d[T + t] = st[0]
            },
            js = p => {
                let k = Pr(p, d, t, h, r, Ce, (T, S, A) => {
                    if (A) return n = !0;
                    h = S;
                    let D = d;
                    return P(T), L(), D !== d ? {
                        position: h,
                        targetView: z,
                        target: d
                    } : h
                }, this);
                if (k === 0) return xt(p);
                h = k
            }
    }
    useBuffer(e) {
        d = e, d.dataView || (d.dataView = new DataView(d.buffer, d.byteOffset, d.byteLength)), h = 0
    }
    set position(e) {
        h = e
    }
    get position() {
        return h
    }
    set buffer(e) {
        d = e
    }
    get buffer() {
        return d
    }
    clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
    }
}
vs = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Cs];
Vt = [{
    pack(s, e, t) {
        let n = s.getTime() / 1e3;
        if ((this.useTimestamp32 || s.getMilliseconds() === 0) && n >= 0 && n < 4294967296) {
            let {
                target: r,
                targetView: i,
                position: o
            } = e(6);
            r[o++] = 214, r[o++] = 255, i.setUint32(o, n)
        } else if (n > 0 && n < 4294967296) {
            let {
                target: r,
                targetView: i,
                position: o
            } = e(10);
            r[o++] = 215, r[o++] = 255, i.setUint32(o, s.getMilliseconds() * 4e6 + (n / 1e3 / 4294967296 >> 0)), i.setUint32(o + 4, n)
        } else if (isNaN(n)) {
            if (this.onInvalidDate) return e(0), t(this.onInvalidDate());
            let {
                target: r,
                targetView: i,
                position: o
            } = e(3);
            r[o++] = 212, r[o++] = 255, r[o++] = 255
        } else {
            let {
                target: r,
                targetView: i,
                position: o
            } = e(15);
            r[o++] = 199, r[o++] = 12, r[o++] = 255, i.setUint32(o, s.getMilliseconds() * 1e6), i.setBigInt64(o + 4, BigInt(Math.floor(n)))
        }
    }
}, {
    pack(s, e, t) {
        if (this.setAsEmptyObject) return e(0), t({});
        let n = Array.from(s),
            {
                target: r,
                position: i
            } = e(this.moreTypes ? 3 : 0);
        this.moreTypes && (r[i++] = 212, r[i++] = 115, r[i++] = 0), t(n)
    }
}, {
    pack(s, e, t) {
        let {
            target: n,
            position: r
        } = e(this.moreTypes ? 3 : 0);
        this.moreTypes && (n[r++] = 212, n[r++] = 101, n[r++] = 0), t([s.name, s.message, s.cause])
    }
}, {
    pack(s, e, t) {
        let {
            target: n,
            position: r
        } = e(this.moreTypes ? 3 : 0);
        this.moreTypes && (n[r++] = 212, n[r++] = 120, n[r++] = 0), t([s.source, s.flags])
    }
}, {
    pack(s, e) {
        this.moreTypes ? En(s, 16, e) : In(Dt ? Ee.from(s) : new Uint8Array(s), e)
    }
}, {
    pack(s, e) {
        let t = s.constructor;
        t !== Ps && this.moreTypes ? En(s, Ds.indexOf(t.name), e) : In(s, e)
    }
}, {
    pack(s, e) {
        let {
            target: t,
            position: n
        } = e(1);
        t[n] = 193
    }
}];

function En(s, e, t, n) {
    let r = s.byteLength;
    if (r + 1 < 256) {
        var {
            target: i,
            position: o
        } = t(4 + r);
        i[o++] = 199, i[o++] = r + 1
    } else if (r + 1 < 65536) {
        var {
            target: i,
            position: o
        } = t(5 + r);
        i[o++] = 200, i[o++] = r + 1 >> 8, i[o++] = r + 1 & 255
    } else {
        var {
            target: i,
            position: o,
            targetView: a
        } = t(7 + r);
        i[o++] = 201, a.setUint32(o, r + 1), o += 4
    }
    i[o++] = 116, i[o++] = e, s.buffer || (s = new Uint8Array(s)), i.set(new Uint8Array(s.buffer, s.byteOffset, s.byteLength), o)
}

function In(s, e) {
    let t = s.byteLength;
    var n, r;
    if (t < 256) {
        var {
            target: n,
            position: r
        } = e(t + 2);
        n[r++] = 196, n[r++] = t
    } else if (t < 65536) {
        var {
            target: n,
            position: r
        } = e(t + 3);
        n[r++] = 197, n[r++] = t >> 8, n[r++] = t & 255
    } else {
        var {
            target: n,
            position: r,
            targetView: i
        } = e(t + 5);
        n[r++] = 198, i.setUint32(r, t), r += 4
    }
    n.set(s, r)
}

function Br(s, e, t, n) {
    let r = s.length;
    switch (r) {
        case 1:
            e[t++] = 212;
            break;
        case 2:
            e[t++] = 213;
            break;
        case 4:
            e[t++] = 214;
            break;
        case 8:
            e[t++] = 215;
            break;
        case 16:
            e[t++] = 216;
            break;
        default:
            r < 256 ? (e[t++] = 199, e[t++] = r) : r < 65536 ? (e[t++] = 200, e[t++] = r >> 8, e[t++] = r & 255) : (e[t++] = 201, e[t++] = r >> 24, e[t++] = r >> 16 & 255, e[t++] = r >> 8 & 255, e[t++] = r & 255)
    }
    return e[t++] = n, e.set(s, t), t += r, t
}

function Mr(s, e) {
    let t, n = e.length * 6,
        r = s.length - n;
    for (; t = e.pop();) {
        let i = t.offset,
            o = t.id;
        s.copyWithin(i + n, i, r), n -= 6;
        let a = i + n;
        s[a++] = 214, s[a++] = 105, s[a++] = o >> 24, s[a++] = o >> 16 & 255, s[a++] = o >> 8 & 255, s[a++] = o & 255, r = i
    }
    return s
}

function Cn(s, e, t) {
    if (q.length > 0) {
        z.setUint32(q.position + s, h + t - q.position - s), q.stringsPosition = h - s;
        let n = q;
        q = null, e(n[0]), e(n[1])
    }
}

function Nr(s, e) {
    return s.isCompatible = t => {
        let n = !t || (e.lastNamedStructuresLength || 0) === t.length;
        return n || e._mergeStructures(t), n
    }, s
}
let Ls = new _s({
    useRecords: !1
});
Ls.pack;
Ls.pack;
const Ur = 512,
    Fr = 1024,
    jr = 2048;
class zr {
    constructor(e) {
        x(this, "wt");
        x(this, "isOpen", !1);
        x(this, "events");
        x(this, "reader");
        x(this, "writer");
        x(this, "unreliableReader");
        x(this, "unreliableWriter");
        x(this, "lengthPrefixBuffer", new Uint8Array(9));
        this.events = e
    }
    connect(e, t = {}) {
        const n = t.fingerprint && {
            serverCertificateHashes: [{
                algorithm: "sha-256",
                value: new Uint8Array(t.fingerprint).buffer
            }]
        } || void 0;
        this.wt = new WebTransport(e, n), this.wt.ready.then(r => {
            console.log("WebTransport ready!", r), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter(), this.wt.incomingBidirectionalStreams.getReader().read().then(o => {
                this.reader = o.value.readable.getReader(), this.writer = o.value.writable.getWriter(), this.sendSeatReservation(t.roomId, t.sessionId, t.reconnectionToken, t.skipHandshake), this.readIncomingData(), this.readIncomingUnreliableData()
            }).catch(o => {
                console.error("failed to read incoming stream", o), console.error("TODO: close the connection")
            })
        }).catch(r => {
            console.log("WebTransport not ready!", r), this._close()
        }), this.wt.closed.then(r => {
            console.log("WebTransport closed w/ success", r), this.events.onclose({
                code: r.closeCode,
                reason: r.reason
            })
        }).catch(r => {
            console.log("WebTransport closed w/ error", r), this.events.onerror(r), this.events.onclose({
                code: r.closeCode,
                reason: r.reason
            })
        }).finally(() => {
            this._close()
        })
    }
    send(e) {
        const t = W.number(this.lengthPrefixBuffer, e.length, {
                offset: 0
            }),
            n = new Uint8Array(t + e.length);
        n.set(this.lengthPrefixBuffer.subarray(0, t), 0), n.set(e, t), this.writer.write(n)
    }
    sendUnreliable(e) {
        const t = W.number(this.lengthPrefixBuffer, e.length, {
                offset: 0
            }),
            n = new Uint8Array(t + e.length);
        n.set(this.lengthPrefixBuffer.subarray(0, t), 0), n.set(e, t), this.unreliableWriter.write(n)
    }
    close(e, t) {
        try {
            this.wt.close({
                closeCode: e,
                reason: t
            })
        } catch (n) {
            console.error(n)
        }
    }
    async readIncomingData() {
        let e;
        for (; this.isOpen;) {
            try {
                e = await this.reader.read();
                const t = e.value,
                    n = {
                        offset: 0
                    };
                do {
                    const r = J.number(t, n);
                    this.events.onmessage({
                        data: t.subarray(n.offset, n.offset + r)
                    }), n.offset += r
                } while (n.offset < t.length)
            } catch (t) {
                t.message.indexOf("session is closed") === -1 && console.error("H3Transport: failed to read incoming data", t);
                break
            }
            if (e.done) break
        }
    }
    async readIncomingUnreliableData() {
        let e;
        for (; this.isOpen;) {
            try {
                e = await this.unreliableReader.read();
                const t = e.value,
                    n = {
                        offset: 0
                    };
                do {
                    const r = J.number(t, n);
                    this.events.onmessage({
                        data: t.subarray(n.offset, n.offset + r)
                    }), n.offset += r
                } while (n.offset < t.length)
            } catch (t) {
                t.message.indexOf("session is closed") === -1 && console.error("H3Transport: failed to read incoming data", t);
                break
            }
            if (e.done) break
        }
    }
    sendSeatReservation(e, t, n, r) {
        const i = {
                offset: 0
            },
            o = [];
        W.string(o, e, i), W.string(o, t, i), n && W.string(o, n, i), r && W.boolean(o, 1, i), this.writer.write(new Uint8Array(o).buffer)
    }
    _close() {
        this.isOpen = !1
    }
}
var _t, Sn;

function Vr() {
    return Sn || (Sn = 1, _t = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }), _t
}
var Jr = Vr();
const Wr = Js(Jr),
    Lt = globalThis.WebSocket || Wr;
class qr {
    constructor(e) {
        x(this, "ws");
        x(this, "protocols");
        x(this, "events");
        this.events = e
    }
    send(e) {
        this.ws.send(e)
    }
    sendUnreliable(e) {
        console.warn("@colyseus/sdk: The WebSocket transport does not support unreliable messages")
    }
    connect(e, t) {
        try {
            this.ws = new Lt(e, {
                headers: t,
                protocols: this.protocols
            })
        } catch {
            this.ws = new Lt(e, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = n => {
            var r, i;
            return (i = (r = this.events).onopen) == null ? void 0 : i.call(r, n)
        }, this.ws.onmessage = n => {
            var r, i;
            return (i = (r = this.events).onmessage) == null ? void 0 : i.call(r, n)
        }, this.ws.onclose = n => {
            var r, i;
            return (i = (r = this.events).onclose) == null ? void 0 : i.call(r, n)
        }, this.ws.onerror = n => {
            var r, i;
            return (i = (r = this.events).onerror) == null ? void 0 : i.call(r, n)
        }
    }
    close(e, t) {
        e === he.MAY_TRY_RECONNECT && this.events.onclose && (this.ws.onclose = null, this.events.onclose({
            code: e,
            reason: t
        })), this.ws.close(e, t)
    }
    get isOpen() {
        return this.ws.readyState === Lt.OPEN
    }
}
const it = [],
    Jt = typeof addEventListener == "function" && typeof removeEventListener == "function";
Jt && addEventListener("offline", () => {
    console.warn(`@colyseus/sdk: 🛑 Network offline. Closing ${it.length} connection(s)`), it.forEach(s => s())
}, !1);
var ct;
class Bs {
    constructor(e) {
        x(this, "transport");
        x(this, "events", {});
        x(this, "url");
        x(this, "options");
        Pe(this, ct, Jt ? () => this.close(he.MAY_TRY_RECONNECT) : null);
        switch (e) {
            case "h3":
                this.transport = new zr(this.events);
                break;
            default:
                this.transport = new qr(this.events);
                break
        }
    }
    connect(e, t) {
        if (Jt) {
            const n = this.events.onopen;
            this.events.onopen = i => {
                it.push(re(this, ct)), n == null || n(i)
            };
            const r = this.events.onclose;
            this.events.onclose = i => {
                it.splice(it.indexOf(re(this, ct)), 1), r == null || r(i)
            }
        }
        this.url = e, this.options = t, this.transport.connect(e, t)
    }
    send(e) {
        this.transport.send(e)
    }
    sendUnreliable(e) {
        this.transport.sendUnreliable(e)
    }
    reconnect(e) {
        const t = new URL(this.url);
        for (const n in e) t.searchParams.set(n, e[n]);
        this.transport.connect(t.toString(), this.options)
    }
    close(e, t) {
        this.transport.close(e, t)
    }
    get isOpen() {
        return this.transport.isOpen
    }
}
ct = new WeakMap;
const Ms = {};

function Ns(s, e) {
    Ms[s] = e
}

function Tn(s) {
    const e = Ms[s];
    if (!e) throw new Error("missing serializer: " + s);
    return e
}
const Us = () => ({
    emit(s, ...e) {
        let t = this.events[s] || [];
        for (let n = 0, r = t.length; n < r; n++) t[n](...e)
    },
    events: {},
    on(s, e) {
        var t;
        return (t = this.events[s]) != null && t.push(e) || (this.events[s] = [e]), () => {
            var n;
            this.events[s] = (n = this.events[s]) == null ? void 0 : n.filter(r => e !== r)
        }
    }
});
class Hr {
    constructor() {
        x(this, "handlers", [])
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
        const t = this.handlers.indexOf(e);
        this.handlers[t] = this.handlers[this.handlers.length - 1], this.handlers.pop()
    }
    clear() {
        this.handlers = []
    }
}

function We() {
    const s = new Hr;

    function e(t) {
        return s.register(t, this === null)
    }
    return e.once = t => {
        const n = function(...r) {
            t.apply(this, r), s.remove(n)
        };
        s.register(n)
    }, e.remove = t => s.remove(t), e.invoke = (...t) => s.invoke(...t), e.invokeAsync = (...t) => s.invokeAsync(...t), e.clear = () => s.clear(), e
}

function ci(s) {
    try {
        return Ir(s.serializer.decoder)
    } catch {
        return
    }
}
class Fs {
    constructor() {
        x(this, "state");
        x(this, "decoder")
    }
    setState(e, t) {
        this.decoder.decode(e, t)
    }
    getState() {
        return this.state
    }
    patch(e, t) {
        return this.decoder.decode(e, t)
    }
    teardown() {
        this.decoder.root.clearRefs()
    }
    handshake(e, t) {
        this.state ? (et.decode(e, t), this.decoder = new St(this.state)) : (this.decoder = et.decode(e, t), this.state = this.decoder.state)
    }
}

function $n() {
    return typeof performance < "u" ? performance.now() : Date.now()
}
var lt, Ke;
class Yr {
    constructor(e, t) {
        x(this, "roomId");
        x(this, "sessionId");
        x(this, "reconnectionToken");
        x(this, "name");
        x(this, "connection");
        x(this, "onStateChange", We());
        x(this, "onError", We());
        x(this, "onLeave", We());
        x(this, "onReconnect", We());
        x(this, "onDrop", We());
        x(this, "onJoin", We());
        x(this, "serializerId");
        x(this, "serializer");
        x(this, "reconnection", {
            enabled: !0,
            retryCount: 0,
            maxRetries: 15,
            delay: 100,
            minDelay: 100,
            maxDelay: 5e3,
            minUptime: 5e3,
            backoff: Gr,
            maxEnqueuedMessages: 10,
            enqueuedMessages: [],
            isReconnecting: !1
        });
        x(this, "joinedAtTime", 0);
        x(this, "onMessageHandlers", Us());
        x(this, "packr");
        Pe(this, lt, 0);
        Pe(this, Ke);
        if (this.name = e, this.packr = new _s, this.packr.encode(void 0), t) {
            const n = new(Tn("schema"));
            this.serializer = n;
            const r = new t;
            n.state = r, n.decoder = new St(r)
        }
        this.onLeave(() => {
            this.removeAllListeners(), this.destroy()
        })
    }
    connect(e, t, n) {
        var i;
        this.connection = new Bs(t.protocol), this.connection.events.onmessage = this.onMessageCallback.bind(this), this.connection.events.onclose = o => {
            var a;
            if (this.joinedAtTime === 0) {
                (a = console.warn) == null || a.call(console, `Room connection was closed unexpectedly (${o.code}): ${o.reason}`), this.onError.invoke(o.code, o.reason);
                return
            }
            o.code === he.NO_STATUS_RECEIVED || o.code === he.ABNORMAL_CLOSURE || o.code === he.GOING_AWAY || o.code === he.MAY_TRY_RECONNECT ? (this.onDrop.invoke(o.code, o.reason), this.handleReconnection(o.code, o.reason)) : this.onLeave.invoke(o.code, o.reason)
        }, this.connection.events.onerror = o => {
            this.onError.invoke(o.code, o.reason)
        };
        const r = ((i = this.serializer) == null ? void 0 : i.getState()) !== void 0;
        if (t.protocol === "h3") {
            const o = new URL(e);
            this.connection.connect(o.origin, {
                ...t,
                skipHandshake: r
            })
        } else this.connection.connect(`${e}${r?"&skipHandshake=1":""}`, n)
    }
    leave(e = !0) {
        return new Promise(t => {
            this.onLeave(n => t(n)), this.connection ? e ? (this.packr.buffer[0] = K.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.onLeave.invoke(he.CONSENTED)
        })
    }
    onMessage(e, t) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(e), t)
    }
    ping(e) {
        var t;
        (t = this.connection) != null && t.isOpen && (Te(this, lt, $n()), Te(this, Ke, e), this.packr.buffer[0] = K.PING, this.connection.send(this.packr.buffer.subarray(0, 1)))
    }
    send(e, t) {
        const n = {
            offset: 1
        };
        this.packr.buffer[0] = K.ROOM_DATA, typeof e == "string" ? W.string(this.packr.buffer, e, n) : W.number(this.packr.buffer, e, n), this.packr.position = 0;
        const r = t !== void 0 ? this.packr.pack(t, 2048 + n.offset) : this.packr.buffer.subarray(0, n.offset);
        this.connection.isOpen ? this.connection.send(r) : An(this, new Uint8Array(r))
    }
    sendUnreliable(e, t) {
        if (!this.connection.isOpen) return;
        const n = {
            offset: 1
        };
        this.packr.buffer[0] = K.ROOM_DATA, typeof e == "string" ? W.string(this.packr.buffer, e, n) : W.number(this.packr.buffer, e, n), this.packr.position = 0;
        const r = t !== void 0 ? this.packr.pack(t, 2048 + n.offset) : this.packr.buffer.subarray(0, n.offset);
        this.connection.sendUnreliable(r)
    }
    sendBytes(e, t) {
        const n = {
            offset: 1
        };
        if (this.packr.buffer[0] = K.ROOM_DATA_BYTES, typeof e == "string" ? W.string(this.packr.buffer, e, n) : W.number(this.packr.buffer, e, n), t.byteLength + n.offset > this.packr.buffer.byteLength) {
            const r = new Uint8Array(n.offset + t.byteLength);
            r.set(this.packr.buffer), this.packr.useBuffer(r)
        }
        this.packr.buffer.set(t, n.offset), this.connection.isOpen ? this.connection.send(this.packr.buffer.subarray(0, n.offset + t.byteLength)) : An(this, this.packr.buffer.subarray(0, n.offset + t.byteLength))
    }
    get state() {
        return this.serializer.getState()
    }
    removeAllListeners() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.onLeave.clear(), this.onReconnect.clear(), this.onDrop.clear(), this.onMessageHandlers.events = {}, this.serializer instanceof Fs && (this.serializer.decoder.root.callbacks = {})
    }
    onMessageCallback(e) {
        var i;
        const t = new Uint8Array(e.data),
            n = {
                offset: 1
            },
            r = t[0];
        if (r === K.JOIN_ROOM) {
            const o = J.utf8Read(t, n, t[n.offset++]);
            if (this.serializerId = J.utf8Read(t, n, t[n.offset++]), !this.serializer) {
                const a = Tn(this.serializerId);
                this.serializer = new a
            }
            if (t.byteLength > n.offset && this.serializer.handshake && this.serializer.handshake(t, n), this.joinedAtTime === 0 ? (this.joinedAtTime = Date.now(), this.onJoin.invoke()) : (console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9989)} reconnection successful!`), this.reconnection.isReconnecting = !1, this.onReconnect.invoke()), this.reconnectionToken = `${this.roomId}:${o}`, this.packr.buffer[0] = K.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1)), this.reconnection.enqueuedMessages.length > 0) {
                for (const a of this.reconnection.enqueuedMessages) this.connection.send(a.data);
                this.reconnection.enqueuedMessages = []
            }
        } else if (r === K.ERROR) {
            const o = J.number(t, n),
                a = J.string(t, n);
            this.onError.invoke(o, a)
        } else if (r === K.LEAVE_ROOM) this.leave();
        else if (r === K.ROOM_STATE) this.serializer.setState(t, n), this.onStateChange.invoke(this.serializer.getState());
        else if (r === K.ROOM_STATE_PATCH) this.serializer.patch(t, n), this.onStateChange.invoke(this.serializer.getState());
        else if (r === K.ROOM_DATA) {
            const o = J.stringCheck(t, n) ? J.string(t, n) : J.number(t, n),
                a = t.byteLength > n.offset ? Or(t, {
                    start: n.offset
                }) : void 0;
            this.dispatchMessage(o, a)
        } else if (r === K.ROOM_DATA_BYTES) {
            const o = J.stringCheck(t, n) ? J.string(t, n) : J.number(t, n);
            this.dispatchMessage(o, t.subarray(n.offset))
        } else r === K.PING && ((i = re(this, Ke)) == null || i.call(this, Math.round($n() - re(this, lt))), Te(this, Ke, void 0))
    }
    dispatchMessage(e, t) {
        var r;
        const n = this.getMessageHandlerKey(e);
        this.onMessageHandlers.events[n] ? this.onMessageHandlers.emit(n, t) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", e, t) : n.startsWith("__") || (r = console.warn) == null || r.call(console, `@colyseus/sdk: onMessage() not registered for type '${e}'.`)
    }
    destroy() {
        this.serializer && this.serializer.teardown()
    }
    getMessageHandlerKey(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "number":
                return `i${e}`;
            default:
                throw new Error("invalid message type.")
        }
    }
    handleReconnection(e, t) {
        if (!this.reconnection.enabled) {
            this.onLeave.invoke(e, t);
            return
        }
        if (Date.now() - this.joinedAtTime < this.reconnection.minUptime) {
            console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} Room has not been up for long enough for automatic reconnection. (min uptime: ${this.reconnection.minUptime}ms)`), this.onLeave.invoke(he.ABNORMAL_CLOSURE, "Room uptime too short for reconnection.");
            return
        }
        this.reconnection.isReconnecting || (this.reconnection.retryCount = 0, this.reconnection.isReconnecting = !0), this.retryReconnection()
    }
    retryReconnection() {
        if (this.reconnection.retryCount >= this.reconnection.maxRetries) {
            console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} ❌ Reconnection failed after ${this.reconnection.maxRetries} attempts.`), this.reconnection.isReconnecting = !1, this.onLeave.invoke(he.FAILED_TO_RECONNECT, "No more retries. Reconnection failed.");
            return
        }
        this.reconnection.retryCount++;
        const e = Math.min(this.reconnection.maxDelay, Math.max(this.reconnection.minDelay, this.reconnection.backoff(this.reconnection.retryCount, this.reconnection.delay)));
        console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9203)} will retry in ${(e/1e3).toFixed(1)} seconds...`), setTimeout(() => {
            try {
                console.info(`[Colyseus reconnection]: ${String.fromCodePoint(128260)} Re-establishing sessionId '${this.sessionId}' with roomId '${this.roomId}'... (attempt ${this.reconnection.retryCount} of ${this.reconnection.maxRetries})`), this.connection.reconnect({
                    reconnectionToken: this.reconnectionToken.split(":")[1],
                    skipHandshake: !0
                })
            } catch {
                this.retryReconnection()
            }
        }, e)
    }
}
lt = new WeakMap, Ke = new WeakMap;
const Gr = (s, e) => Math.floor(Math.pow(2, s) * e);

function An(s, e) {
    s.reconnection.enqueuedMessages.push({
        data: e
    }), s.reconnection.enqueuedMessages.length > s.reconnection.maxEnqueuedMessages && s.reconnection.enqueuedMessages.shift()
}

function Zr(s) {
    if (s === void 0) return !1;
    const e = typeof s;
    return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(s) ? !0 : s.buffer ? !1 : s.constructor && s.constructor.name === "Object" || typeof s.toJSON == "function"
}

function Kr(s, e) {
    const {
        params: t,
        query: n
    } = e || {}, [r, i] = s.split("?");
    let o = r;
    if (t)
        if (Array.isArray(t)) {
            const u = o.split("/").filter(f => f.startsWith(":"));
            for (const [f, m] of u.entries()) {
                const g = t[f];
                o = o.replace(m, g)
            }
        } else
            for (const [u, f] of Object.entries(t)) o = o.replace(`:${u}`, String(f));
    const a = new URLSearchParams(i);
    if (n)
        for (const [u, f] of Object.entries(n)) f != null && a.set(u, String(f));
    let l = a.toString();
    return l = l.length > 0 ? `?${l}`.replace(/\+/g, "%20") : "", `${o}${l}`
}
class Xr {
    constructor(e, t) {
        x(this, "authToken");
        x(this, "options");
        x(this, "sdk");
        x(this, "del", this.delete);
        this.sdk = e, this.options = t
    }
    async request(e, t, n) {
        return this.executeRequest(e, t, n)
    }
    get(e, t) {
        return this.request("GET", e, t)
    }
    post(e, t) {
        return this.request("POST", e, t)
    }
    delete(e, t) {
        return this.request("DELETE", e, t)
    }
    patch(e, t) {
        return this.request("PATCH", e, t)
    }
    put(e, t) {
        return this.request("PUT", e, t)
    }
    async executeRequest(e, t, n) {
        var I;
        let r = this.options.body ? {
            ...this.options.body,
            ...(n == null ? void 0 : n.body) || {}
        } : n == null ? void 0 : n.body;
        const i = this.options.query ? {
                ...this.options.query,
                ...(n == null ? void 0 : n.query) || {}
            } : n == null ? void 0 : n.query,
            o = this.options.params ? {
                ...this.options.params,
                ...(n == null ? void 0 : n.params) || {}
            } : n == null ? void 0 : n.params,
            a = new Headers(this.options.headers ? {
                ...this.options.headers,
                ...(n == null ? void 0 : n.headers) || {}
            } : n == null ? void 0 : n.headers);
        if (this.authToken && !a.has("authorization") && a.set("authorization", `Bearer ${this.authToken}`), Zr(r) && typeof r == "object" && r !== null) {
            a.has("content-type") || a.set("content-type", "application/json");
            for (const [C, b] of Object.entries(r)) b instanceof Date && (r[C] = b.toISOString());
            r = JSON.stringify(r)
        }
        const l = {
                credentials: (n == null ? void 0 : n.credentials) || "include",
                ...this.options,
                ...n,
                query: i,
                params: o,
                headers: a,
                body: r,
                method: e
            },
            u = Kr(this.sdk.getHttpEndpoint(t.toString()), l);
        let f;
        try {
            f = await fetch(u, l)
        } catch (C) {
            if (C.name === "AbortError") throw C;
            const b = new rt(((I = C.cause) == null ? void 0 : I.code) || C.code, C.message);
            throw b.response = f, b.cause = C.cause, b
        }
        const m = f.headers.get("content-type");
        let g;
        if (m != null && m.indexOf("json") ? g = await f.json() : m != null && m.indexOf("text") ? g = await f.text() : g = await f.blob(), !f.ok) throw new rt(f.status, g.message ?? g.error ?? f.statusText, {
            headers: f.headers,
            status: f.status,
            response: f,
            data: g
        });
        return {
            raw: f,
            data: g,
            headers: f.headers,
            status: f.status,
            statusText: f.statusText
        }
    }
}
let Le;

function sn() {
    if (!Le) try {
        Le = typeof cc < "u" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
    } catch {}
    return !Le && typeof globalThis.indexedDB < "u" && (Le = new ni), Le || (Le = {
        cache: {},
        setItem: function(s, e) {
            this.cache[s] = e
        },
        getItem: function(s) {
            this.cache[s]
        },
        removeItem: function(s) {
            delete this.cache[s]
        }
    }), Le
}

function Qr(s, e) {
    sn().setItem(s, e)
}

function ei(s) {
    sn().removeItem(s)
}

function ti(s, e) {
    const t = sn().getItem(s);
    typeof Promise > "u" || !(t instanceof Promise) ? e(t) : t.then(n => e(n))
}
class ni {
    constructor() {
        x(this, "dbPromise", new Promise(e => {
            const t = indexedDB.open("_colyseus_storage", 1);
            t.onupgradeneeded = () => t.result.createObjectStore("store"), t.onsuccess = () => e(t.result)
        }))
    }
    async tx(e, t) {
        const r = (await this.dbPromise).transaction("store", e).objectStore("store");
        return t(r)
    }
    setItem(e, t) {
        return this.tx("readwrite", n => n.put(t, e)).then()
    }
    async getItem(e) {
        const t = await this.tx("readonly", n => n.get(e));
        return new Promise(n => {
            t.onsuccess = () => n(t.result)
        })
    }
    removeItem(e) {
        return this.tx("readwrite", t => t.delete(e)).then()
    }
}
var ht, we, ut;
class si {
    constructor(e) {
        x(this, "settings", {
            path: "/auth",
            key: "colyseus-auth-token"
        });
        Pe(this, ht, !1);
        Pe(this, we, null);
        Pe(this, ut, Us());
        x(this, "http");
        this.http = e, ti(this.settings.key, t => this.token = t)
    }
    set token(e) {
        this.http.authToken = e
    }
    get token() {
        return this.http.authToken
    }
    onChange(e) {
        const t = re(this, ut).on("change", e);
        return re(this, ht) || this.getUserData().then(n => {
            this.emitChange({
                ...n,
                token: this.token
            })
        }).catch(n => {
            this.emitChange({
                user: null,
                token: void 0
            })
        }), Te(this, ht, !0), t
    }
    async getUserData() {
        if (this.token) return (await this.http.get(`${this.settings.path}/userdata`)).data;
        throw new Error("missing auth.token")
    }
    async registerWithEmailAndPassword(e, t, n) {
        const r = (await this.http.post(`${this.settings.path}/register`, {
            body: {
                email: e,
                password: t,
                options: n
            }
        })).data;
        return this.emitChange(r), r
    }
    async signInWithEmailAndPassword(e, t) {
        const n = (await this.http.post(`${this.settings.path}/login`, {
            body: {
                email: e,
                password: t
            }
        })).data;
        return this.emitChange(n), n
    }
    async signInAnonymously(e) {
        const t = (await this.http.post(`${this.settings.path}/anonymous`, {
            body: {
                options: e
            }
        })).data;
        return this.emitChange(t), t
    }
    async sendPasswordResetEmail(e) {
        return (await this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
                email: e
            }
        })).data
    }
    async signInWithProvider(e, t = {}) {
        return new Promise((n, r) => {
            const i = t.width || 480,
                o = t.height || 768,
                a = this.token ? `?token=${this.token}` : "",
                l = `Login with ${e[0].toUpperCase()+e.substring(1)}`,
                u = this.http.sdk.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),
                f = screen.width / 2 - i / 2,
                m = screen.height / 2 - o / 2;
            Te(this, we, window.open(u, l, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + o + ", top=" + m + ", left=" + f));
            const g = C => {
                    var b;
                    C.data.user === void 0 && C.data.token === void 0 || (clearInterval(I), (b = re(this, we)) == null || b.close(), Te(this, we, null), window.removeEventListener("message", g), C.data.error !== void 0 ? r(C.data.error) : (n(C.data), this.emitChange(C.data)))
                },
                I = setInterval(() => {
                    (!re(this, we) || re(this, we).closed) && (Te(this, we, null), r("cancelled"), window.removeEventListener("message", g))
                }, 200);
            window.addEventListener("message", g)
        })
    }
    async signOut() {
        this.emitChange({
            user: null,
            token: null
        })
    }
    emitChange(e) {
        e.token !== void 0 && (this.token = e.token, e.token === null ? ei(this.settings.key) : Qr(this.settings.key, e.token)), re(this, ut).emit("change", e)
    }
}
ht = new WeakMap, we = new WeakMap, ut = new WeakMap;

function ri(s) {
    var r;
    const e = ((r = window == null ? void 0 : window.location) == null ? void 0 : r.hostname) || "localhost",
        t = s.hostname.split("."),
        n = !s.hostname.includes("trycloudflare.com") && !s.hostname.includes("discordsays.com") && t.length > 2 ? `/${t[0]}` : "";
    return s.pathname.startsWith("/.proxy") ? `${s.protocol}//${e}${n}${s.pathname}${s.search}` : `${s.protocol}//${e}/.proxy/colyseus${n}${s.pathname}${s.search}`
}
var es;
const kn = typeof window < "u" && typeof((es = window == null ? void 0 : window.location) == null ? void 0 : es.hostname) < "u" ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567",
    Tt = class Tt {
        constructor(e = kn, t) {
            x(this, "http");
            x(this, "auth");
            x(this, "settings");
            x(this, "urlBuilder");
            var n, r;
            if (typeof e == "string") {
                const i = e.startsWith("/") ? new URL(e, kn) : new URL(e),
                    o = i.protocol === "https:" || i.protocol === "wss:",
                    a = Number(i.port || (o ? 443 : 80));
                this.settings = {
                    hostname: i.hostname,
                    pathname: i.pathname,
                    port: a,
                    secure: o,
                    searchParams: i.searchParams.toString() || void 0
                }
            } else e.port === void 0 && (e.port = e.secure ? 443 : 80), e.pathname === void 0 && (e.pathname = ""), this.settings = e;
            this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), t != null && t.protocol && (this.settings.protocol = t.protocol), this.http = new Xr(this, {
                headers: (t == null ? void 0 : t.headers) || {}
            }), this.auth = new si(this.http), this.urlBuilder = t == null ? void 0 : t.urlBuilder, !this.urlBuilder && typeof window < "u" && ((r = (n = window == null ? void 0 : window.location) == null ? void 0 : n.hostname) != null && r.includes("discordsays.com")) && (this.urlBuilder = ri, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
        }
        static async selectByLatency(e, t, n = {}) {
            const r = e.map(o => new Tt(o, t)),
                i = (await Promise.allSettled(r.map((o, a) => o.getLatency(n).then(l => {
                    const u = r[a].settings;
                    return console.log(`🛜 Endpoint Latency: ${l}ms - ${u.hostname}:${u.port}${u.pathname}`), [a, l]
                })))).filter(o => o.status === "fulfilled").map(o => o.value);
            if (i.length === 0) throw new Error("All endpoints failed to respond");
            return r[i.sort((o, a) => o[1] - a[1])[0][0]]
        }
        async joinOrCreate(e, t = {}, n) {
            return await this.createMatchMakeRequest("joinOrCreate", e, t, n)
        }
        async create(e, t = {}, n) {
            return await this.createMatchMakeRequest("create", e, t, n)
        }
        async join(e, t = {}, n) {
            return await this.createMatchMakeRequest("join", e, t, n)
        }
        async joinById(e, t = {}, n) {
            return await this.createMatchMakeRequest("joinById", e, t, n)
        }
        async reconnect(e, t) {
            if (typeof e == "string" && typeof t == "string") throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
            const [n, r] = e.split(":");
            if (!n || !r) throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);
            return await this.createMatchMakeRequest("reconnect", n, {
                reconnectionToken: r
            }, t)
        }
        async consumeSeatReservation(e, t) {
            const n = this.createRoom(e.name, t);
            n.roomId = e.roomId, n.sessionId = e.sessionId;
            const r = {
                sessionId: n.sessionId
            };
            return e.reconnectionToken && (r.reconnectionToken = e.reconnectionToken), n.connect(this.buildEndpoint(e, r), e, this.http.options.headers), new Promise((i, o) => {
                const a = (l, u) => o(new rt(l, u));
                n.onError.once(a), n.onJoin.once(() => {
                    n.onError.remove(a), i(n)
                })
            })
        }
        getLatency(e = {}) {
            const t = e.protocol ?? "ws",
                n = e.pingCount ?? 1;
            return new Promise((r, i) => {
                const o = new Bs(t),
                    a = [];
                let l = 0;
                o.events.onopen = () => {
                    l = Date.now(), o.send(new Uint8Array([K.PING]))
                }, o.events.onmessage = u => {
                    if (a.push(Date.now() - l), a.length < n) l = Date.now(), o.send(new Uint8Array([K.PING]));
                    else {
                        o.close();
                        const f = a.reduce((m, g) => m + g, 0) / a.length;
                        r(f)
                    }
                }, o.events.onerror = u => {
                    i(new rt(he.ABNORMAL_CLOSURE, `Failed to get latency: ${u.message}`))
                }, o.connect(this.getHttpEndpoint())
            })
        }
        async createMatchMakeRequest(e, t, n = {}, r) {
            try {
                if (!t) throw new Error("Must provide a room name");
                const o = (await this.http.post(`/matchmake/${e}/${t}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: n
                })).data;
                return e === "reconnect" && (o.reconnectionToken = n.reconnectionToken), await this.consumeSeatReservation(o, r)
            } catch (i) {
                throw i instanceof rt ? new qt(i.message, i.code) : i
            }
        }
        createRoom(e, t) {
            return new Yr(e, t)
        }
        buildEndpoint(e, t = {}) {
            let n = this.settings.protocol || "ws",
                r = this.settings.searchParams || "";
            this.http.authToken && (t._authToken = this.http.authToken);
            for (const a in t) t.hasOwnProperty(a) && (r += (r ? "&" : "") + `${a}=${t[a]}`);
            n === "h3" && (n = "http");
            let i = this.settings.secure ? `${n}s://` : `${n}://`;
            e.publicAddress ? i += `${e.publicAddress}` : i += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
            const o = `${i}/${e.processId}/${e.roomId}?${r}`;
            return this.urlBuilder ? this.urlBuilder(new URL(o)) : o
        }
        getHttpEndpoint(e = "") {
            const t = e.startsWith("/") ? e : `/${e}`;
            let n = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;
            return this.settings.searchParams && (n += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(n)) : n
        }
        getEndpointPort() {
            return this.settings.port !== 80 && this.settings.port !== 443 ? `:${this.settings.port}` : ""
        }
    };
x(Tt, "VERSION", "0.17");
let Wt = Tt;
const li = Wt;
class ii {
    setState(e) {}
    getState() {
        return null
    }
    patch(e) {}
    teardown() {}
    handshake(e) {}
}
Ns("schema", Fs);
Ns("none", ii);
export {
    li as C, ci as g
};