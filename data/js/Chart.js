var Yi = Object.defineProperty;
var Ki = (s, t, e) => t in s ? Yi(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : s[t] = e;
var k = (s, t, e) => Ki(s, typeof t != "symbol" ? t + "" : t, e);
import {
    r as N,
    x as hi,
    ar as Xi,
    j as Se,
    d as di
} from "./_index.js";
import {
    b as qi
} from "./index-1.js";
import {
    C as es
} from "./index-27.js";
import {
    u as Gi
} from "./useIntervalWhen.js";
import "./mobxreact.esm.js";
import "./QuizTypes.js";
import "./howler.js";
import "./Codes.js";
import "./fonts.js";
import "./index-5.js";
import "./SixteenByNineScaler.js";
import "./index-2.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./index-20.js";
import "./index-22.js";
import "./index-4.js";
import "./context.js";
import "./react-flip-move.es.js";
import "./index-6.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./motion.js";
import "./index-18.js";
import "./index-26.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./confetti.js";
import "./colors.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./capitalize.js";
import "./Tooltip.js";
import "./index-10.js";
import "./move.js";
import "./use-force-update.js";
import "./use-motion-value.js";
import "./RocketOutlined.js";
import "./UsergroupAddOutlined.js";
import "./CircularProgress.js";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Yt(s) {
    return s + .5 | 0
}
const et = (s, t, e) => Math.max(Math.min(s, e), t);

function Et(s) {
    return et(Yt(s * 2.55), 0, 255)
}

function it(s) {
    return et(Yt(s * 255), 0, 255)
}

function G(s) {
    return et(Yt(s / 2.55) / 100, 0, 1)
}

function ss(s) {
    return et(Yt(s * 100), 0, 100)
}
const W = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    },
    ze = [..."0123456789ABCDEF"],
    Zi = s => ze[s & 15],
    Qi = s => ze[(s & 240) >> 4] + ze[s & 15],
    Gt = s => (s & 240) >> 4 === (s & 15),
    Ji = s => Gt(s.r) && Gt(s.g) && Gt(s.b) && Gt(s.a);

function tn(s) {
    var t = s.length,
        e;
    return s[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & W[s[1]] * 17,
        g: 255 & W[s[2]] * 17,
        b: 255 & W[s[3]] * 17,
        a: t === 5 ? W[s[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: W[s[1]] << 4 | W[s[2]],
        g: W[s[3]] << 4 | W[s[4]],
        b: W[s[5]] << 4 | W[s[6]],
        a: t === 9 ? W[s[7]] << 4 | W[s[8]] : 255
    })), e
}
const en = (s, t) => s < 255 ? t(s) : "";

function sn(s) {
    var t = Ji(s) ? Zi : Qi;
    return s ? "#" + t(s.r) + t(s.g) + t(s.b) + en(s.a, t) : void 0
}
const nn = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

function fi(s, t, e) {
    const i = t * Math.min(e, 1 - e),
        n = (o, r = (o + s / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
    return [n(0), n(8), n(4)]
}

function on(s, t, e) {
    const i = (n, o = (n + s / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [i(5), i(3), i(1)]
}

function rn(s, t, e) {
    const i = fi(s, 1, .5);
    let n;
    for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++) i[n] *= 1 - t - e, i[n] += t;
    return i
}

function an(s, t, e, i, n) {
    return s === n ? (t - e) / i + (t < e ? 6 : 0) : t === n ? (e - s) / i + 2 : (s - t) / i + 4
}

function We(s) {
    const e = s.r / 255,
        i = s.g / 255,
        n = s.b / 255,
        o = Math.max(e, i, n),
        r = Math.min(e, i, n),
        a = (o + r) / 2;
    let c, l, h;
    return o !== r && (h = o - r, l = a > .5 ? h / (2 - o - r) : h / (o + r), c = an(e, i, n, h, o), c = c * 60 + .5), [c | 0, l || 0, a]
}

function $e(s, t, e, i) {
    return (Array.isArray(t) ? s(t[0], t[1], t[2]) : s(t, e, i)).map(it)
}

function Ue(s, t, e) {
    return $e(fi, s, t, e)
}

function cn(s, t, e) {
    return $e(rn, s, t, e)
}

function ln(s, t, e) {
    return $e(on, s, t, e)
}

function ui(s) {
    return (s % 360 + 360) % 360
}

function hn(s) {
    const t = nn.exec(s);
    let e = 255,
        i;
    if (!t) return;
    t[5] !== i && (e = t[6] ? Et(+t[5]) : it(+t[5]));
    const n = ui(+t[2]),
        o = +t[3] / 100,
        r = +t[4] / 100;
    return t[1] === "hwb" ? i = cn(n, o, r) : t[1] === "hsv" ? i = ln(n, o, r) : i = Ue(n, o, r), {
        r: i[0],
        g: i[1],
        b: i[2],
        a: e
    }
}

function dn(s, t) {
    var e = We(s);
    e[0] = ui(e[0] + t), e = Ue(e), s.r = e[0], s.g = e[1], s.b = e[2]
}

function fn(s) {
    if (!s) return;
    const t = We(s),
        e = t[0],
        i = ss(t[1]),
        n = ss(t[2]);
    return s.a < 255 ? `hsla(${e}, ${i}%, ${n}%, ${G(s.a)})` : `hsl(${e}, ${i}%, ${n}%)`
}
const is = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    },
    ns = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };

function un() {
    const s = {},
        t = Object.keys(ns),
        e = Object.keys(is);
    let i, n, o, r, a;
    for (i = 0; i < t.length; i++) {
        for (r = a = t[i], n = 0; n < e.length; n++) o = e[n], a = a.replace(o, is[o]);
        o = parseInt(ns[r], 16), s[a] = [o >> 16 & 255, o >> 8 & 255, o & 255]
    }
    return s
}
let Zt;

function gn(s) {
    Zt || (Zt = un(), Zt.transparent = [0, 0, 0, 0]);
    const t = Zt[s.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    }
}
const pn = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

function mn(s) {
    const t = pn.exec(s);
    let e = 255,
        i, n, o;
    if (t) {
        if (t[7] !== i) {
            const r = +t[7];
            e = t[8] ? Et(r) : et(r * 255, 0, 255)
        }
        return i = +t[1], n = +t[3], o = +t[5], i = 255 & (t[2] ? Et(i) : et(i, 0, 255)), n = 255 & (t[4] ? Et(n) : et(n, 0, 255)), o = 255 & (t[6] ? Et(o) : et(o, 0, 255)), {
            r: i,
            g: n,
            b: o,
            a: e
        }
    }
}

function _n(s) {
    return s && (s.a < 255 ? `rgba(${s.r}, ${s.g}, ${s.b}, ${G(s.a)})` : `rgb(${s.r}, ${s.g}, ${s.b})`)
}
const Oe = s => s <= .0031308 ? s * 12.92 : Math.pow(s, 1 / 2.4) * 1.055 - .055,
    bt = s => s <= .04045 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);

function bn(s, t, e) {
    const i = bt(G(s.r)),
        n = bt(G(s.g)),
        o = bt(G(s.b));
    return {
        r: it(Oe(i + e * (bt(G(t.r)) - i))),
        g: it(Oe(n + e * (bt(G(t.g)) - n))),
        b: it(Oe(o + e * (bt(G(t.b)) - o))),
        a: s.a + e * (t.a - s.a)
    }
}

function Qt(s, t, e) {
    if (s) {
        let i = We(s);
        i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Ue(i), s.r = i[0], s.g = i[1], s.b = i[2]
    }
}

function gi(s, t) {
    return s && Object.assign(t || {}, s)
}

function os(s) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(s) ? s.length >= 3 && (t = {
        r: s[0],
        g: s[1],
        b: s[2],
        a: 255
    }, s.length > 3 && (t.a = it(s[3]))) : (t = gi(s, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }), t.a = it(t.a)), t
}

function xn(s) {
    return s.charAt(0) === "r" ? mn(s) : hn(s)
}
class jt {
    constructor(t) {
        if (t instanceof jt) return t;
        const e = typeof t;
        let i;
        e === "object" ? i = os(t) : e === "string" && (i = tn(t) || gn(t) || xn(t)), this._rgb = i, this._valid = !!i
    }
    get valid() {
        return this._valid
    }
    get rgb() {
        var t = gi(this._rgb);
        return t && (t.a = G(t.a)), t
    }
    set rgb(t) {
        this._rgb = os(t)
    }
    rgbString() {
        return this._valid ? _n(this._rgb) : void 0
    }
    hexString() {
        return this._valid ? sn(this._rgb) : void 0
    }
    hslString() {
        return this._valid ? fn(this._rgb) : void 0
    }
    mix(t, e) {
        if (t) {
            const i = this.rgb,
                n = t.rgb;
            let o;
            const r = e === o ? .5 : e,
                a = 2 * r - 1,
                c = i.a - n.a,
                l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2;
            o = 1 - l, i.r = 255 & l * i.r + o * n.r + .5, i.g = 255 & l * i.g + o * n.g + .5, i.b = 255 & l * i.b + o * n.b + .5, i.a = r * i.a + (1 - r) * n.a, this.rgb = i
        }
        return this
    }
    interpolate(t, e) {
        return t && (this._rgb = bn(this._rgb, t._rgb, e)), this
    }
    clone() {
        return new jt(this.rgb)
    }
    alpha(t) {
        return this._rgb.a = it(t), this
    }
    clearer(t) {
        const e = this._rgb;
        return e.a *= 1 - t, this
    }
    greyscale() {
        const t = this._rgb,
            e = Yt(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = e, this
    }
    opaquer(t) {
        const e = this._rgb;
        return e.a *= 1 + t, this
    }
    negate() {
        const t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
    }
    lighten(t) {
        return Qt(this._rgb, 2, t), this
    }
    darken(t) {
        return Qt(this._rgb, 2, -t), this
    }
    saturate(t) {
        return Qt(this._rgb, 1, t), this
    }
    desaturate(t) {
        return Qt(this._rgb, 1, -t), this
    }
    rotate(t) {
        return dn(this._rgb, t), this
    }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
const yn = (() => {
    let s = 0;
    return () => s++
})();

function C(s) {
    return s == null
}

function B(s) {
    if (Array.isArray && Array.isArray(s)) return !0;
    const t = Object.prototype.toString.call(s);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}

function S(s) {
    return s !== null && Object.prototype.toString.call(s) === "[object Object]"
}

function $(s) {
    return (typeof s == "number" || s instanceof Number) && isFinite(+s)
}

function Y(s, t) {
    return $(s) ? s : t
}

function P(s, t) {
    return typeof s > "u" ? t : s
}
const vn = (s, t) => typeof s == "string" && s.endsWith("%") ? parseFloat(s) / 100 * t : +s;

function L(s, t, e) {
    if (s && typeof s.call == "function") return s.apply(e, t)
}

function F(s, t, e, i) {
    let n, o, r;
    if (B(s))
        for (o = s.length, n = 0; n < o; n++) t.call(e, s[n], n);
    else if (S(s))
        for (r = Object.keys(s), o = r.length, n = 0; n < o; n++) t.call(e, s[r[n]], r[n])
}

function rs(s, t) {
    let e, i, n, o;
    if (!s || !t || s.length !== t.length) return !1;
    for (e = 0, i = s.length; e < i; ++e)
        if (n = s[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0
}

function ge(s) {
    if (B(s)) return s.map(ge);
    if (S(s)) {
        const t = Object.create(null),
            e = Object.keys(s),
            i = e.length;
        let n = 0;
        for (; n < i; ++n) t[e[n]] = ge(s[e[n]]);
        return t
    }
    return s
}

function pi(s) {
    return ["__proto__", "prototype", "constructor"].indexOf(s) === -1
}

function kn(s, t, e, i) {
    if (!pi(s)) return;
    const n = t[s],
        o = e[s];
    S(n) && S(o) ? Vt(n, o, i) : t[s] = ge(o)
}

function Vt(s, t, e) {
    const i = B(t) ? t : [t],
        n = i.length;
    if (!S(s)) return s;
    e = e || {};
    const o = e.merger || kn;
    let r;
    for (let a = 0; a < n; ++a) {
        if (r = i[a], !S(r)) continue;
        const c = Object.keys(r);
        for (let l = 0, h = c.length; l < h; ++l) o(c[l], s, r, e)
    }
    return s
}

function zt(s, t) {
    return Vt(s, t, {
        merger: Mn
    })
}

function Mn(s, t, e) {
    if (!pi(s)) return;
    const i = t[s],
        n = e[s];
    S(i) && S(n) ? zt(i, n) : Object.prototype.hasOwnProperty.call(t, s) || (t[s] = ge(n))
}
const as = {
    "": s => s,
    x: s => s.x,
    y: s => s.y
};

function wn(s) {
    const t = s.split("."),
        e = [];
    let i = "";
    for (const n of t) i += n, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
    return e
}

function Sn(s) {
    const t = wn(s);
    return e => {
        for (const i of t) {
            if (i === "") break;
            e = e && e[i]
        }
        return e
    }
}

function pe(s, t) {
    return (as[t] || (as[t] = Sn(t)))(s)
}

function Ye(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
const me = s => typeof s < "u",
    nt = s => typeof s == "function",
    cs = (s, t) => {
        if (s.size !== t.size) return !1;
        for (const e of s)
            if (!t.has(e)) return !1;
        return !0
    };

function On(s) {
    return s.type === "mouseup" || s.type === "click" || s.type === "contextmenu"
}
const V = Math.PI,
    Z = 2 * V,
    Dn = Z + V,
    _e = Number.POSITIVE_INFINITY,
    Pn = V / 180,
    st = V / 2,
    at = V / 4,
    ls = V * 2 / 3,
    mi = Math.log10,
    xt = Math.sign;

function At(s, t, e) {
    return Math.abs(s - t) < e
}

function hs(s) {
    const t = Math.round(s);
    s = At(s, t, s / 1e3) ? t : s;
    const e = Math.pow(10, Math.floor(mi(s))),
        i = s / e;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e
}

function Cn(s) {
    const t = [],
        e = Math.sqrt(s);
    let i;
    for (i = 1; i < e; i++) s % i === 0 && (t.push(i), t.push(s / i));
    return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
}

function Tn(s) {
    return typeof s == "symbol" || typeof s == "object" && s !== null && !(Symbol.toPrimitive in s || "toString" in s || "valueOf" in s)
}

function Ht(s) {
    return !Tn(s) && !isNaN(parseFloat(s)) && isFinite(s)
}

function In(s, t) {
    const e = Math.round(s);
    return e - t <= s && e + t >= s
}

function En(s, t, e) {
    let i, n, o;
    for (i = 0, n = s.length; i < n; i++) o = s[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
}

function ft(s) {
    return s * (V / 180)
}

function Ln(s) {
    return s * (180 / V)
}

function ds(s) {
    if (!$(s)) return;
    let t = 1,
        e = 0;
    for (; Math.round(s * t) / t !== s;) t *= 10, e++;
    return e
}

function Rn(s, t) {
    const e = t.x - s.x,
        i = t.y - s.y,
        n = Math.sqrt(e * e + i * i);
    let o = Math.atan2(i, e);
    return o < -.5 * V && (o += Z), {
        angle: o,
        distance: n
    }
}

function fs(s, t) {
    return Math.sqrt(Math.pow(t.x - s.x, 2) + Math.pow(t.y - s.y, 2))
}

function zn(s, t) {
    return (s - t + Dn) % Z - V
}

function tt(s) {
    return (s % Z + Z) % Z
}

function _i(s, t, e, i) {
    const n = tt(s),
        o = tt(t),
        r = tt(e),
        a = tt(o - n),
        c = tt(r - n),
        l = tt(n - o),
        h = tt(n - r);
    return n === o || n === r || i && o === r || a > c && l < h
}

function X(s, t, e) {
    return Math.max(t, Math.min(e, s))
}

function An(s) {
    return X(s, -32768, 32767)
}

function Fn(s, t, e, i = 1e-6) {
    return s >= Math.min(t, e) - i && s <= Math.max(t, e) + i
}

function Ke(s, t, e) {
    e = e || (r => s[r] < t);
    let i = s.length - 1,
        n = 0,
        o;
    for (; i - n > 1;) o = n + i >> 1, e(o) ? n = o : i = o;
    return {
        lo: n,
        hi: i
    }
}
const ut = (s, t, e, i) => Ke(s, e, i ? n => {
        const o = s[n][t];
        return o < e || o === e && s[n + 1][t] === e
    } : n => s[n][t] < e),
    Nn = (s, t, e) => Ke(s, e, i => s[i][t] >= e);

function Bn(s, t, e) {
    let i = 0,
        n = s.length;
    for (; i < n && s[i] < t;) i++;
    for (; n > i && s[n - 1] > e;) n--;
    return i > 0 || n < s.length ? s.slice(i, n) : s
}
const bi = ["push", "pop", "shift", "splice", "unshift"];

function jn(s, t) {
    if (s._chartjs) {
        s._chartjs.listeners.push(t);
        return
    }
    Object.defineProperty(s, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [t]
        }
    }), bi.forEach(e => {
        const i = "_onData" + Ye(e),
            n = s[e];
        Object.defineProperty(s, e, {
            configurable: !0,
            enumerable: !1,
            value(...o) {
                const r = n.apply(this, o);
                return s._chartjs.listeners.forEach(a => {
                    typeof a[i] == "function" && a[i](...o)
                }), r
            }
        })
    })
}

function us(s, t) {
    const e = s._chartjs;
    if (!e) return;
    const i = e.listeners,
        n = i.indexOf(t);
    n !== -1 && i.splice(n, 1), !(i.length > 0) && (bi.forEach(o => {
        delete s[o]
    }), delete s._chartjs)
}

function Vn(s) {
    const t = new Set(s);
    return t.size === s.length ? s : Array.from(t)
}
const xi = function() {
    return typeof window > "u" ? function(s) {
        return s()
    } : window.requestAnimationFrame
}();

function yi(s, t) {
    let e = [],
        i = !1;
    return function(...n) {
        e = n, i || (i = !0, xi.call(window, () => {
            i = !1, s.apply(t, e)
        }))
    }
}

function Hn(s, t) {
    let e;
    return function(...i) {
        return t ? (clearTimeout(e), e = setTimeout(s, t, i)) : s.apply(this, i), t
    }
}
const Wn = s => s === "start" ? "left" : s === "end" ? "right" : "center",
    gs = (s, t, e) => s === "start" ? t : s === "end" ? e : (t + e) / 2;

function $n(s, t, e) {
    const i = t.length;
    let n = 0,
        o = i;
    if (s._sorted) {
        const {
            iScale: r,
            vScale: a,
            _parsed: c
        } = s, l = s.dataset && s.dataset.options ? s.dataset.options.spanGaps : null, h = r.axis, {
            min: d,
            max: f,
            minDefined: u,
            maxDefined: p
        } = r.getUserBounds();
        if (u) {
            if (n = Math.min(ut(c, h, d).lo, e ? i : ut(t, h, r.getPixelForValue(d)).lo), l) {
                const m = c.slice(0, n + 1).reverse().findIndex(g => !C(g[a.axis]));
                n -= Math.max(0, m)
            }
            n = X(n, 0, i - 1)
        }
        if (p) {
            let m = Math.max(ut(c, r.axis, f, !0).hi + 1, e ? 0 : ut(t, h, r.getPixelForValue(f), !0).hi + 1);
            if (l) {
                const g = c.slice(m - 1).findIndex(_ => !C(_[a.axis]));
                m += Math.max(0, g)
            }
            o = X(m, n, i) - n
        } else o = i - n
    }
    return {
        start: n,
        count: o
    }
}

function Un(s) {
    const {
        xScale: t,
        yScale: e,
        _scaleRanges: i
    } = s, n = {
        xmin: t.min,
        xmax: t.max,
        ymin: e.min,
        ymax: e.max
    };
    if (!i) return s._scaleRanges = n, !0;
    const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
    return Object.assign(i, n), o
}
const Jt = s => s === 0 || s === 1,
    ps = (s, t, e) => -(Math.pow(2, 10 * (s -= 1)) * Math.sin((s - t) * Z / e)),
    ms = (s, t, e) => Math.pow(2, -10 * s) * Math.sin((s - t) * Z / e) + 1,
    Ft = {
        linear: s => s,
        easeInQuad: s => s * s,
        easeOutQuad: s => -s * (s - 2),
        easeInOutQuad: s => (s /= .5) < 1 ? .5 * s * s : -.5 * (--s * (s - 2) - 1),
        easeInCubic: s => s * s * s,
        easeOutCubic: s => (s -= 1) * s * s + 1,
        easeInOutCubic: s => (s /= .5) < 1 ? .5 * s * s * s : .5 * ((s -= 2) * s * s + 2),
        easeInQuart: s => s * s * s * s,
        easeOutQuart: s => -((s -= 1) * s * s * s - 1),
        easeInOutQuart: s => (s /= .5) < 1 ? .5 * s * s * s * s : -.5 * ((s -= 2) * s * s * s - 2),
        easeInQuint: s => s * s * s * s * s,
        easeOutQuint: s => (s -= 1) * s * s * s * s + 1,
        easeInOutQuint: s => (s /= .5) < 1 ? .5 * s * s * s * s * s : .5 * ((s -= 2) * s * s * s * s + 2),
        easeInSine: s => -Math.cos(s * st) + 1,
        easeOutSine: s => Math.sin(s * st),
        easeInOutSine: s => -.5 * (Math.cos(V * s) - 1),
        easeInExpo: s => s === 0 ? 0 : Math.pow(2, 10 * (s - 1)),
        easeOutExpo: s => s === 1 ? 1 : -Math.pow(2, -10 * s) + 1,
        easeInOutExpo: s => Jt(s) ? s : s < .5 ? .5 * Math.pow(2, 10 * (s * 2 - 1)) : .5 * (-Math.pow(2, -10 * (s * 2 - 1)) + 2),
        easeInCirc: s => s >= 1 ? s : -(Math.sqrt(1 - s * s) - 1),
        easeOutCirc: s => Math.sqrt(1 - (s -= 1) * s),
        easeInOutCirc: s => (s /= .5) < 1 ? -.5 * (Math.sqrt(1 - s * s) - 1) : .5 * (Math.sqrt(1 - (s -= 2) * s) + 1),
        easeInElastic: s => Jt(s) ? s : ps(s, .075, .3),
        easeOutElastic: s => Jt(s) ? s : ms(s, .075, .3),
        easeInOutElastic(s) {
            return Jt(s) ? s : s < .5 ? .5 * ps(s * 2, .1125, .45) : .5 + .5 * ms(s * 2 - 1, .1125, .45)
        },
        easeInBack(s) {
            return s * s * ((1.70158 + 1) * s - 1.70158)
        },
        easeOutBack(s) {
            return (s -= 1) * s * ((1.70158 + 1) * s + 1.70158) + 1
        },
        easeInOutBack(s) {
            let t = 1.70158;
            return (s /= .5) < 1 ? .5 * (s * s * (((t *= 1.525) + 1) * s - t)) : .5 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2)
        },
        easeInBounce: s => 1 - Ft.easeOutBounce(1 - s),
        easeOutBounce(s) {
            return s < 1 / 2.75 ? 7.5625 * s * s : s < 2 / 2.75 ? 7.5625 * (s -= 1.5 / 2.75) * s + .75 : s < 2.5 / 2.75 ? 7.5625 * (s -= 2.25 / 2.75) * s + .9375 : 7.5625 * (s -= 2.625 / 2.75) * s + .984375
        },
        easeInOutBounce: s => s < .5 ? Ft.easeInBounce(s * 2) * .5 : Ft.easeOutBounce(s * 2 - 1) * .5 + .5
    };

function Xe(s) {
    if (s && typeof s == "object") {
        const t = s.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
    }
    return !1
}

function _s(s) {
    return Xe(s) ? s : new jt(s)
}

function De(s) {
    return Xe(s) ? s : new jt(s).saturate(.5).darken(.1).hexString()
}
const Yn = ["x", "y", "borderWidth", "radius", "tension"],
    Kn = ["color", "borderColor", "backgroundColor"];

function Xn(s) {
    s.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }), s.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => t !== "onProgress" && t !== "onComplete" && t !== "fn"
    }), s.set("animations", {
        colors: {
            type: "color",
            properties: Kn
        },
        numbers: {
            type: "number",
            properties: Yn
        }
    }), s.describe("animations", {
        _fallback: "animation"
    }), s.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: t => t | 0
                }
            }
        }
    })
}

function qn(s) {
    s.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })
}
const bs = new Map;

function Gn(s, t) {
    t = t || {};
    const e = s + JSON.stringify(t);
    let i = bs.get(e);
    return i || (i = new Intl.NumberFormat(s, t), bs.set(e, i)), i
}

function vi(s, t, e) {
    return Gn(t, e).format(s)
}
const Zn = {
    values(s) {
        return B(s) ? s : "" + s
    },
    numeric(s, t, e) {
        if (s === 0) return "0";
        const i = this.chart.options.locale;
        let n, o = s;
        if (e.length > 1) {
            const l = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (l < 1e-4 || l > 1e15) && (n = "scientific"), o = Qn(s, e)
        }
        const r = mi(Math.abs(o)),
            a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            c = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a
            };
        return Object.assign(c, this.options.ticks.format), vi(s, i, c)
    }
};

function Qn(s, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && s !== Math.floor(s) && (e = s - Math.floor(s)), e
}
var ki = {
    formatters: Zn
};

function Jn(s) {
    s.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1
        },
        border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: ki.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), s.route("scale.ticks", "color", "", "color"), s.route("scale.grid", "color", "", "borderColor"), s.route("scale.border", "color", "", "borderColor"), s.route("scale.title", "color", "", "color"), s.describe("scale", {
        _fallback: !1,
        _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
        _indexable: t => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
    }), s.describe("scales", {
        _fallback: "scale"
    }), s.describe("scale.ticks", {
        _scriptable: t => t !== "backdropPadding" && t !== "callback",
        _indexable: t => t !== "backdropPadding"
    })
}
const pt = Object.create(null),
    Ae = Object.create(null);

function Nt(s, t) {
    if (!t) return s;
    const e = t.split(".");
    for (let i = 0, n = e.length; i < n; ++i) {
        const o = e[i];
        s = s[o] || (s[o] = Object.create(null))
    }
    return s
}

function Pe(s, t, e) {
    return typeof t == "string" ? Vt(Nt(s, t), e) : Vt(Nt(s, ""), t)
}
class to {
    constructor(t, e) {
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = i => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        }, this.hover = {}, this.hoverBackgroundColor = (i, n) => De(n.backgroundColor), this.hoverBorderColor = (i, n) => De(n.borderColor), this.hoverColor = (i, n) => De(n.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
    }
    set(t, e) {
        return Pe(this, t, e)
    }
    get(t) {
        return Nt(this, t)
    }
    describe(t, e) {
        return Pe(Ae, t, e)
    }
    override(t, e) {
        return Pe(pt, t, e)
    }
    route(t, e, i, n) {
        const o = Nt(this, t),
            r = Nt(this, i),
            a = "_" + e;
        Object.defineProperties(o, {
            [a]: {
                value: o[e],
                writable: !0
            },
            [e]: {
                enumerable: !0,
                get() {
                    const c = this[a],
                        l = r[n];
                    return S(c) ? Object.assign({}, l, c) : P(c, l)
                },
                set(c) {
                    this[a] = c
                }
            }
        })
    }
    apply(t) {
        t.forEach(e => e(this))
    }
}
var R = new to({
    _scriptable: s => !s.startsWith("on"),
    _indexable: s => s !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
}, [Xn, qn, Jn]);

function eo(s) {
    return !s || C(s.size) || C(s.family) ? null : (s.style ? s.style + " " : "") + (s.weight ? s.weight + " " : "") + s.size + "px " + s.family
}

function xs(s, t, e, i, n) {
    let o = t[n];
    return o || (o = t[n] = s.measureText(n).width, e.push(n)), o > i && (i = o), i
}

function ct(s, t, e) {
    const i = s.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, .5) : 0;
    return Math.round((t - n) * i) / i + n
}

function ys(s, t) {
    !t && !s || (t = t || s.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, s.width, s.height), t.restore())
}

function so(s, t, e, i) {
    io(s, t, e, i)
}

function io(s, t, e, i, n) {
    let o, r, a, c, l, h, d, f;
    const u = t.pointStyle,
        p = t.rotation,
        m = t.radius;
    let g = (p || 0) * Pn;
    if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
        s.save(), s.translate(e, i), s.rotate(g), s.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), s.restore();
        return
    }
    if (!(isNaN(m) || m <= 0)) {
        switch (s.beginPath(), u) {
            default:
                s.arc(e, i, m, 0, Z), s.closePath();
                break;
            case "triangle":
                h = m, s.moveTo(e + Math.sin(g) * h, i - Math.cos(g) * m), g += ls, s.lineTo(e + Math.sin(g) * h, i - Math.cos(g) * m), g += ls, s.lineTo(e + Math.sin(g) * h, i - Math.cos(g) * m), s.closePath();
                break;
            case "rectRounded":
                l = m * .516, c = m - l, r = Math.cos(g + at) * c, d = Math.cos(g + at) * c, a = Math.sin(g + at) * c, f = Math.sin(g + at) * c, s.arc(e - d, i - a, l, g - V, g - st), s.arc(e + f, i - r, l, g - st, g), s.arc(e + d, i + a, l, g, g + st), s.arc(e - f, i + r, l, g + st, g + V), s.closePath();
                break;
            case "rect":
                if (!p) {
                    c = Math.SQRT1_2 * m, h = c, s.rect(e - h, i - c, 2 * h, 2 * c);
                    break
                }
                g += at;
            case "rectRot":
                d = Math.cos(g) * m, r = Math.cos(g) * m, a = Math.sin(g) * m, f = Math.sin(g) * m, s.moveTo(e - d, i - a), s.lineTo(e + f, i - r), s.lineTo(e + d, i + a), s.lineTo(e - f, i + r), s.closePath();
                break;
            case "crossRot":
                g += at;
            case "cross":
                d = Math.cos(g) * m, r = Math.cos(g) * m, a = Math.sin(g) * m, f = Math.sin(g) * m, s.moveTo(e - d, i - a), s.lineTo(e + d, i + a), s.moveTo(e + f, i - r), s.lineTo(e - f, i + r);
                break;
            case "star":
                d = Math.cos(g) * m, r = Math.cos(g) * m, a = Math.sin(g) * m, f = Math.sin(g) * m, s.moveTo(e - d, i - a), s.lineTo(e + d, i + a), s.moveTo(e + f, i - r), s.lineTo(e - f, i + r), g += at, d = Math.cos(g) * m, r = Math.cos(g) * m, a = Math.sin(g) * m, f = Math.sin(g) * m, s.moveTo(e - d, i - a), s.lineTo(e + d, i + a), s.moveTo(e + f, i - r), s.lineTo(e - f, i + r);
                break;
            case "line":
                r = Math.cos(g) * m, a = Math.sin(g) * m, s.moveTo(e - r, i - a), s.lineTo(e + r, i + a);
                break;
            case "dash":
                s.moveTo(e, i), s.lineTo(e + Math.cos(g) * m, i + Math.sin(g) * m);
                break;
            case !1:
                s.closePath();
                break
        }
        s.fill(), t.borderWidth > 0 && s.stroke()
    }
}

function Wt(s, t, e) {
    return e = e || .5, !t || s && s.x > t.left - e && s.x < t.right + e && s.y > t.top - e && s.y < t.bottom + e
}

function Mi(s, t) {
    s.save(), s.beginPath(), s.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), s.clip()
}

function wi(s) {
    s.restore()
}

function no(s, t, e, i, n) {
    if (!t) return s.lineTo(e.x, e.y);
    if (n === "middle") {
        const o = (t.x + e.x) / 2;
        s.lineTo(o, t.y), s.lineTo(o, e.y)
    } else n === "after" != !!i ? s.lineTo(t.x, e.y) : s.lineTo(e.x, t.y);
    s.lineTo(e.x, e.y)
}

function oo(s, t, e, i) {
    if (!t) return s.lineTo(e.x, e.y);
    s.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y)
}

function ro(s, t) {
    t.translation && s.translate(t.translation[0], t.translation[1]), C(t.rotation) || s.rotate(t.rotation), t.color && (s.fillStyle = t.color), t.textAlign && (s.textAlign = t.textAlign), t.textBaseline && (s.textBaseline = t.textBaseline)
}

function ao(s, t, e, i, n) {
    if (n.strikethrough || n.underline) {
        const o = s.measureText(i),
            r = t - o.actualBoundingBoxLeft,
            a = t + o.actualBoundingBoxRight,
            c = e - o.actualBoundingBoxAscent,
            l = e + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (c + l) / 2 : l;
        s.strokeStyle = s.fillStyle, s.beginPath(), s.lineWidth = n.decorationWidth || 2, s.moveTo(r, h), s.lineTo(a, h), s.stroke()
    }
}

function co(s, t) {
    const e = s.fillStyle;
    s.fillStyle = t.color, s.fillRect(t.left, t.top, t.width, t.height), s.fillStyle = e
}

function vs(s, t, e, i, n, o = {}) {
    const r = B(t) ? t : [t],
        a = o.strokeWidth > 0 && o.strokeColor !== "";
    let c, l;
    for (s.save(), s.font = n.string, ro(s, o), c = 0; c < r.length; ++c) l = r[c], o.backdrop && co(s, o.backdrop), a && (o.strokeColor && (s.strokeStyle = o.strokeColor), C(o.strokeWidth) || (s.lineWidth = o.strokeWidth), s.strokeText(l, e, i, o.maxWidth)), s.fillText(l, e, i, o.maxWidth), ao(s, e, i, l, o), i += Number(n.lineHeight);
    s.restore()
}
const lo = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    ho = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

function fo(s, t) {
    const e = ("" + s).match(lo);
    if (!e || e[1] === "normal") return t * 1.2;
    switch (s = +e[2], e[3]) {
        case "px":
            return s;
        case "%":
            s /= 100;
            break
    }
    return t * s
}
const uo = s => +s || 0;

function go(s, t) {
    const e = {},
        i = S(t),
        n = i ? Object.keys(t) : t,
        o = S(s) ? i ? r => P(s[r], s[t[r]]) : r => s[r] : () => s;
    for (const r of n) e[r] = uo(o(r));
    return e
}

function po(s) {
    return go(s, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    })
}

function $t(s) {
    const t = po(s);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t
}

function Fe(s, t) {
    s = s || {}, t = t || R.font;
    let e = P(s.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let i = P(s.style, t.style);
    i && !("" + i).match(ho) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
    const n = {
        family: P(s.family, t.family),
        lineHeight: fo(P(s.lineHeight, t.lineHeight), e),
        size: e,
        style: i,
        weight: P(s.weight, t.weight),
        string: ""
    };
    return n.string = eo(n), n
}

function te(s, t, e, i) {
    let n, o, r;
    for (n = 0, o = s.length; n < o; ++n)
        if (r = s[n], r !== void 0 && r !== void 0) return r
}

function mo(s, t, e) {
    const {
        min: i,
        max: n
    } = s, o = vn(t, (n - i) / 2), r = (a, c) => e && a === 0 ? 0 : a + c;
    return {
        min: r(i, -Math.abs(o)),
        max: r(n, o)
    }
}

function Mt(s, t) {
    return Object.assign(Object.create(s), t)
}

function qe(s, t = [""], e, i, n = () => s[0]) {
    const o = e || s;
    typeof i > "u" && (i = Pi("_fallback", s));
    const r = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: s,
        _rootScopes: o,
        _fallback: i,
        _getTarget: n,
        override: a => qe([a, ...s], t, o, i)
    };
    return new Proxy(r, {
        deleteProperty(a, c) {
            return delete a[c], delete a._keys, delete s[0][c], !0
        },
        get(a, c) {
            return Oi(a, c, () => wo(c, t, s, a))
        },
        getOwnPropertyDescriptor(a, c) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], c)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s[0])
        },
        has(a, c) {
            return Ms(a).includes(c)
        },
        ownKeys(a) {
            return Ms(a)
        },
        set(a, c, l) {
            const h = a._storage || (a._storage = n());
            return a[c] = h[c] = l, delete a._keys, !0
        }
    })
}

function yt(s, t, e, i) {
    const n = {
        _cacheable: !1,
        _proxy: s,
        _context: t,
        _subProxy: e,
        _stack: new Set,
        _descriptors: Si(s, i),
        setContext: o => yt(s, o, e, i),
        override: o => yt(s.override(o), t, e, i)
    };
    return new Proxy(n, {
        deleteProperty(o, r) {
            return delete o[r], delete s[r], !0
        },
        get(o, r, a) {
            return Oi(o, r, () => bo(o, r, a))
        },
        getOwnPropertyDescriptor(o, r) {
            return o._descriptors.allKeys ? Reflect.has(s, r) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(s, r)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s)
        },
        has(o, r) {
            return Reflect.has(s, r)
        },
        ownKeys() {
            return Reflect.ownKeys(s)
        },
        set(o, r, a) {
            return s[r] = a, delete o[r], !0
        }
    })
}

function Si(s, t = {
    scriptable: !0,
    indexable: !0
}) {
    const {
        _scriptable: e = t.scriptable,
        _indexable: i = t.indexable,
        _allKeys: n = t.allKeys
    } = s;
    return {
        allKeys: n,
        scriptable: e,
        indexable: i,
        isScriptable: nt(e) ? e : () => e,
        isIndexable: nt(i) ? i : () => i
    }
}
const _o = (s, t) => s ? s + Ye(t) : t,
    Ge = (s, t) => S(t) && s !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);

function Oi(s, t, e) {
    if (Object.prototype.hasOwnProperty.call(s, t) || t === "constructor") return s[t];
    const i = e();
    return s[t] = i, i
}

function bo(s, t, e) {
    const {
        _proxy: i,
        _context: n,
        _subProxy: o,
        _descriptors: r
    } = s;
    let a = i[t];
    return nt(a) && r.isScriptable(t) && (a = xo(t, a, s, e)), B(a) && a.length && (a = yo(t, a, s, r.isIndexable)), Ge(t, a) && (a = yt(a, n, o && o[t], r)), a
}

function xo(s, t, e, i) {
    const {
        _proxy: n,
        _context: o,
        _subProxy: r,
        _stack: a
    } = e;
    if (a.has(s)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + s);
    a.add(s);
    let c = t(o, r || i);
    return a.delete(s), Ge(s, c) && (c = Ze(n._scopes, n, s, c)), c
}

function yo(s, t, e, i) {
    const {
        _proxy: n,
        _context: o,
        _subProxy: r,
        _descriptors: a
    } = e;
    if (typeof o.index < "u" && i(s)) return t[o.index % t.length];
    if (S(t[0])) {
        const c = t,
            l = n._scopes.filter(h => h !== c);
        t = [];
        for (const h of c) {
            const d = Ze(l, n, s, h);
            t.push(yt(d, o, r && r[s], a))
        }
    }
    return t
}

function Di(s, t, e) {
    return nt(s) ? s(t, e) : s
}
const vo = (s, t) => s === !0 ? t : typeof s == "string" ? pe(t, s) : void 0;

function ko(s, t, e, i, n) {
    for (const o of t) {
        const r = vo(e, o);
        if (r) {
            s.add(r);
            const a = Di(r._fallback, e, n);
            if (typeof a < "u" && a !== e && a !== i) return a
        } else if (r === !1 && typeof i < "u" && e !== i) return null
    }
    return !1
}

function Ze(s, t, e, i) {
    const n = t._rootScopes,
        o = Di(t._fallback, e, i),
        r = [...s, ...n],
        a = new Set;
    a.add(i);
    let c = ks(a, r, e, o || e, i);
    return c === null || typeof o < "u" && o !== e && (c = ks(a, r, o, c, i), c === null) ? !1 : qe(Array.from(a), [""], n, o, () => Mo(t, e, i))
}

function ks(s, t, e, i, n) {
    for (; e;) e = ko(s, t, e, i, n);
    return e
}

function Mo(s, t, e) {
    const i = s._getTarget();
    t in i || (i[t] = {});
    const n = i[t];
    return B(n) && S(e) ? e : n || {}
}

function wo(s, t, e, i) {
    let n;
    for (const o of t)
        if (n = Pi(_o(o, s), e), typeof n < "u") return Ge(s, n) ? Ze(e, i, s, n) : n
}

function Pi(s, t) {
    for (const e of t) {
        if (!e) continue;
        const i = e[s];
        if (typeof i < "u") return i
    }
}

function Ms(s) {
    let t = s._keys;
    return t || (t = s._keys = So(s._scopes)), t
}

function So(s) {
    const t = new Set;
    for (const e of s)
        for (const i of Object.keys(e).filter(n => !n.startsWith("_"))) t.add(i);
    return Array.from(t)
}
const Oo = Number.EPSILON || 1e-14,
    vt = (s, t) => t < s.length && !s[t].skip && s[t],
    Ci = s => s === "x" ? "y" : "x";

function Do(s, t, e, i) {
    const n = s.skip ? t : s,
        o = t,
        r = e.skip ? t : e,
        a = fs(o, n),
        c = fs(r, o);
    let l = a / (a + c),
        h = c / (a + c);
    l = isNaN(l) ? 0 : l, h = isNaN(h) ? 0 : h;
    const d = i * l,
        f = i * h;
    return {
        previous: {
            x: o.x - d * (r.x - n.x),
            y: o.y - d * (r.y - n.y)
        },
        next: {
            x: o.x + f * (r.x - n.x),
            y: o.y + f * (r.y - n.y)
        }
    }
}

function Po(s, t, e) {
    const i = s.length;
    let n, o, r, a, c, l = vt(s, 0);
    for (let h = 0; h < i - 1; ++h)
        if (c = l, l = vt(s, h + 1), !(!c || !l)) {
            if (At(t[h], 0, Oo)) {
                e[h] = e[h + 1] = 0;
                continue
            }
            n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h])
        }
}

function Co(s, t, e = "x") {
    const i = Ci(e),
        n = s.length;
    let o, r, a, c = vt(s, 0);
    for (let l = 0; l < n; ++l) {
        if (r = a, a = c, c = vt(s, l + 1), !a) continue;
        const h = a[e],
            d = a[i];
        r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${i}`] = d - o * t[l]), c && (o = (c[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${i}`] = d + o * t[l])
    }
}

function To(s, t = "x") {
    const e = Ci(t),
        i = s.length,
        n = Array(i).fill(0),
        o = Array(i);
    let r, a, c, l = vt(s, 0);
    for (r = 0; r < i; ++r)
        if (a = c, c = l, l = vt(s, r + 1), !!c) {
            if (l) {
                const h = l[t] - c[t];
                n[r] = h !== 0 ? (l[e] - c[e]) / h : 0
            }
            o[r] = a ? l ? xt(n[r - 1]) !== xt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
        } Po(s, n, o), Co(s, o, t)
}

function ee(s, t, e) {
    return Math.max(Math.min(s, e), t)
}

function Io(s, t) {
    let e, i, n, o, r, a = Wt(s[0], t);
    for (e = 0, i = s.length; e < i; ++e) r = o, o = a, a = e < i - 1 && Wt(s[e + 1], t), o && (n = s[e], r && (n.cp1x = ee(n.cp1x, t.left, t.right), n.cp1y = ee(n.cp1y, t.top, t.bottom)), a && (n.cp2x = ee(n.cp2x, t.left, t.right), n.cp2y = ee(n.cp2y, t.top, t.bottom)))
}

function Eo(s, t, e, i, n) {
    let o, r, a, c;
    if (t.spanGaps && (s = s.filter(l => !l.skip)), t.cubicInterpolationMode === "monotone") To(s, n);
    else {
        let l = i ? s[s.length - 1] : s[0];
        for (o = 0, r = s.length; o < r; ++o) a = s[o], c = Do(l, a, s[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = c.previous.x, a.cp1y = c.previous.y, a.cp2x = c.next.x, a.cp2y = c.next.y, l = a
    }
    t.capBezierPoints && Io(s, e)
}

function Qe() {
    return typeof window < "u" && typeof document < "u"
}

function Je(s) {
    let t = s.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
}

function be(s, t, e) {
    let i;
    return typeof s == "string" ? (i = parseInt(s, 10), s.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = s, i
}
const ve = s => s.ownerDocument.defaultView.getComputedStyle(s, null);

function Lo(s, t) {
    return ve(s).getPropertyValue(t)
}
const Ro = ["top", "right", "bottom", "left"];

function gt(s, t, e) {
    const i = {};
    e = e ? "-" + e : "";
    for (let n = 0; n < 4; n++) {
        const o = Ro[n];
        i[o] = parseFloat(s[t + "-" + o + e]) || 0
    }
    return i.width = i.left + i.right, i.height = i.top + i.bottom, i
}
const zo = (s, t, e) => (s > 0 || t > 0) && (!e || !e.shadowRoot);

function Ao(s, t) {
    const e = s.touches,
        i = e && e.length ? e[0] : s,
        {
            offsetX: n,
            offsetY: o
        } = i;
    let r = !1,
        a, c;
    if (zo(n, o, s.target)) a = n, c = o;
    else {
        const l = t.getBoundingClientRect();
        a = i.clientX - l.left, c = i.clientY - l.top, r = !0
    }
    return {
        x: a,
        y: c,
        box: r
    }
}

function ht(s, t) {
    if ("native" in s) return s;
    const {
        canvas: e,
        currentDevicePixelRatio: i
    } = t, n = ve(e), o = n.boxSizing === "border-box", r = gt(n, "padding"), a = gt(n, "border", "width"), {
        x: c,
        y: l,
        box: h
    } = Ao(s, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
    let {
        width: u,
        height: p
    } = t;
    return o && (u -= r.width + a.width, p -= r.height + a.height), {
        x: Math.round((c - d) / u * e.width / i),
        y: Math.round((l - f) / p * e.height / i)
    }
}

function Fo(s, t, e) {
    let i, n;
    if (t === void 0 || e === void 0) {
        const o = s && Je(s);
        if (!o) t = s.clientWidth, e = s.clientHeight;
        else {
            const r = o.getBoundingClientRect(),
                a = ve(o),
                c = gt(a, "border", "width"),
                l = gt(a, "padding");
            t = r.width - l.width - c.width, e = r.height - l.height - c.height, i = be(a.maxWidth, o, "clientWidth"), n = be(a.maxHeight, o, "clientHeight")
        }
    }
    return {
        width: t,
        height: e,
        maxWidth: i || _e,
        maxHeight: n || _e
    }
}
const se = s => Math.round(s * 10) / 10;

function No(s, t, e, i) {
    const n = ve(s),
        o = gt(n, "margin"),
        r = be(n.maxWidth, s, "clientWidth") || _e,
        a = be(n.maxHeight, s, "clientHeight") || _e,
        c = Fo(s, t, e);
    let {
        width: l,
        height: h
    } = c;
    if (n.boxSizing === "content-box") {
        const f = gt(n, "border", "width"),
            u = gt(n, "padding");
        l -= u.width + f.width, h -= u.height + f.height
    }
    return l = Math.max(0, l - o.width), h = Math.max(0, i ? l / i : h - o.height), l = se(Math.min(l, r, c.maxWidth)), h = se(Math.min(h, a, c.maxHeight)), l && !h && (h = se(l / 2)), (t !== void 0 || e !== void 0) && i && c.height && h > c.height && (h = c.height, l = se(Math.floor(h * i))), {
        width: l,
        height: h
    }
}

function ws(s, t, e) {
    const i = t || 1,
        n = Math.floor(s.height * i),
        o = Math.floor(s.width * i);
    s.height = Math.floor(s.height), s.width = Math.floor(s.width);
    const r = s.canvas;
    return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${s.height}px`, r.style.width = `${s.width}px`), s.currentDevicePixelRatio !== i || r.height !== n || r.width !== o ? (s.currentDevicePixelRatio = i, r.height = n, r.width = o, s.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1
}
const Bo = function() {
    let s = !1;
    try {
        const t = {
            get passive() {
                return s = !0, !1
            }
        };
        Qe() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t))
    } catch {}
    return s
}();

function Ss(s, t) {
    const e = Lo(s, t),
        i = e && e.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0
}

function dt(s, t, e, i) {
    return {
        x: s.x + e * (t.x - s.x),
        y: s.y + e * (t.y - s.y)
    }
}

function jo(s, t, e, i) {
    return {
        x: s.x + e * (t.x - s.x),
        y: i === "middle" ? e < .5 ? s.y : t.y : i === "after" ? e < 1 ? s.y : t.y : e > 0 ? t.y : s.y
    }
}

function Vo(s, t, e, i) {
    const n = {
            x: s.cp2x,
            y: s.cp2y
        },
        o = {
            x: t.cp1x,
            y: t.cp1y
        },
        r = dt(s, n, e),
        a = dt(n, o, e),
        c = dt(o, t, e),
        l = dt(r, a, e),
        h = dt(a, c, e);
    return dt(l, h, e)
}

function Ti(s) {
    return s === "angle" ? {
        between: _i,
        compare: zn,
        normalize: tt
    } : {
        between: Fn,
        compare: (t, e) => t - e,
        normalize: t => t
    }
}

function Os({
    start: s,
    end: t,
    count: e,
    loop: i,
    style: n
}) {
    return {
        start: s % e,
        end: t % e,
        loop: i && (t - s + 1) % e === 0,
        style: n
    }
}

function Ho(s, t, e) {
    const {
        property: i,
        start: n,
        end: o
    } = e, {
        between: r,
        normalize: a
    } = Ti(i), c = t.length;
    let {
        start: l,
        end: h,
        loop: d
    } = s, f, u;
    if (d) {
        for (l += c, h += c, f = 0, u = c; f < u && r(a(t[l % c][i]), n, o); ++f) l--, h--;
        l %= c, h %= c
    }
    return h < l && (h += c), {
        start: l,
        end: h,
        loop: d,
        style: s.style
    }
}

function Wo(s, t, e) {
    if (!e) return [s];
    const {
        property: i,
        start: n,
        end: o
    } = e, r = t.length, {
        compare: a,
        between: c,
        normalize: l
    } = Ti(i), {
        start: h,
        end: d,
        loop: f,
        style: u
    } = Ho(s, t, e), p = [];
    let m = !1,
        g = null,
        _, x, O;
    const D = () => c(n, O, _) && a(n, O) !== 0,
        b = () => a(o, _) === 0 || c(o, O, _),
        M = () => m || D(),
        y = () => !m || b();
    for (let v = h, w = h; v <= d; ++v) x = t[v % r], !x.skip && (_ = l(x[i]), _ !== O && (m = c(_, n, o), g === null && M() && (g = a(_, n) === 0 ? v : w), g !== null && y() && (p.push(Os({
        start: g,
        end: v,
        loop: f,
        count: r,
        style: u
    })), g = null), w = v, O = _));
    return g !== null && p.push(Os({
        start: g,
        end: d,
        loop: f,
        count: r,
        style: u
    })), p
}

function $o(s, t) {
    const e = [],
        i = s.segments;
    for (let n = 0; n < i.length; n++) {
        const o = Wo(i[n], s.points, t);
        o.length && e.push(...o)
    }
    return e
}

function Uo(s, t, e, i) {
    let n = 0,
        o = t - 1;
    if (e && !i)
        for (; n < t && !s[n].skip;) n++;
    for (; n < t && s[n].skip;) n++;
    for (n %= t, e && (o += n); o > n && s[o % t].skip;) o--;
    return o %= t, {
        start: n,
        end: o
    }
}

function Yo(s, t, e, i) {
    const n = s.length,
        o = [];
    let r = t,
        a = s[t],
        c;
    for (c = t + 1; c <= e; ++c) {
        const l = s[c % n];
        l.skip || l.stop ? a.skip || (i = !1, o.push({
            start: t % n,
            end: (c - 1) % n,
            loop: i
        }), t = r = l.stop ? c : null) : (r = c, a.skip && (t = c)), a = l
    }
    return r !== null && o.push({
        start: t % n,
        end: r % n,
        loop: i
    }), o
}

function Ko(s, t) {
    const e = s.points,
        i = s.options.spanGaps,
        n = e.length;
    if (!n) return [];
    const o = !!s._loop,
        {
            start: r,
            end: a
        } = Uo(e, n, o, i);
    if (i === !0) return Ds(s, [{
        start: r,
        end: a,
        loop: o
    }], e, t);
    const c = a < r ? a + n : a,
        l = !!s._fullLoop && r === 0 && a === n - 1;
    return Ds(s, Yo(e, r, c, l), e, t)
}

function Ds(s, t, e, i) {
    return !i || !i.setContext || !e ? t : Xo(s, t, e, i)
}

function Xo(s, t, e, i) {
    const n = s._chart.getContext(),
        o = Ps(s.options),
        {
            _datasetIndex: r,
            options: {
                spanGaps: a
            }
        } = s,
        c = e.length,
        l = [];
    let h = o,
        d = t[0].start,
        f = d;

    function u(p, m, g, _) {
        const x = a ? -1 : 1;
        if (p !== m) {
            for (p += c; e[p % c].skip;) p -= x;
            for (; e[m % c].skip;) m += x;
            p % c !== m % c && (l.push({
                start: p % c,
                end: m % c,
                loop: g,
                style: _
            }), h = _, d = m % c)
        }
    }
    for (const p of t) {
        d = a ? d : p.start;
        let m = e[d % c],
            g;
        for (f = d + 1; f <= p.end; f++) {
            const _ = e[f % c];
            g = Ps(i.setContext(Mt(n, {
                type: "segment",
                p0: m,
                p1: _,
                p0DataIndex: (f - 1) % c,
                p1DataIndex: f % c,
                datasetIndex: r
            }))), qo(g, h) && u(d, f - 1, p.loop, h), m = _, h = g
        }
        d < f - 1 && u(d, f - 1, p.loop, h)
    }
    return l
}

function Ps(s) {
    return {
        backgroundColor: s.backgroundColor,
        borderCapStyle: s.borderCapStyle,
        borderDash: s.borderDash,
        borderDashOffset: s.borderDashOffset,
        borderJoinStyle: s.borderJoinStyle,
        borderWidth: s.borderWidth,
        borderColor: s.borderColor
    }
}

function qo(s, t) {
    if (!t) return !1;
    const e = [],
        i = function(n, o) {
            return Xe(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
        };
    return JSON.stringify(s, i) !== JSON.stringify(t, i)
}

function ie(s, t, e) {
    return s.options.clip ? s[e] : t[e]
}

function Go(s, t) {
    const {
        xScale: e,
        yScale: i
    } = s;
    return e && i ? {
        left: ie(e, t, "left"),
        right: ie(e, t, "right"),
        top: ie(i, t, "top"),
        bottom: ie(i, t, "bottom")
    } : t
}

function Zo(s, t) {
    const e = t._clip;
    if (e.disabled) return !1;
    const i = Go(t, s.chartArea);
    return {
        left: e.left === !1 ? 0 : i.left - (e.left === !0 ? 0 : e.left),
        right: e.right === !1 ? s.width : i.right + (e.right === !0 ? 0 : e.right),
        top: e.top === !1 ? 0 : i.top - (e.top === !0 ? 0 : e.top),
        bottom: e.bottom === !1 ? s.height : i.bottom + (e.bottom === !0 ? 0 : e.bottom)
    }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Qo {
    constructor() {
        this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
    }
    _notify(t, e, i, n) {
        const o = e.listeners[n],
            r = e.duration;
        o.forEach(a => a({
            chart: t,
            initial: e.initial,
            numSteps: r,
            currentStep: Math.min(i - e.start, r)
        }))
    }
    _refresh() {
        this._request || (this._running = !0, this._request = xi.call(window, () => {
            this._update(), this._request = null, this._running && this._refresh()
        }))
    }
    _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((i, n) => {
            if (!i.running || !i.items.length) return;
            const o = i.items;
            let r = o.length - 1,
                a = !1,
                c;
            for (; r >= 0; --r) c = o[r], c._active ? (c._total > i.duration && (i.duration = c._total), c.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
            a && (n.draw(), this._notify(n, i, t, "progress")), o.length || (i.running = !1, this._notify(n, i, t, "complete"), i.initial = !1), e += o.length
        }), this._lastDate = t, e === 0 && (this._running = !1)
    }
    _getAnims(t) {
        const e = this._charts;
        let i = e.get(t);
        return i || (i = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
                complete: [],
                progress: []
            }
        }, e.set(t, i)), i
    }
    listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i)
    }
    add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e)
    }
    has(t) {
        return this._getAnims(t).items.length > 0
    }
    start(t) {
        const e = this._charts.get(t);
        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, n) => Math.max(i, n._duration), 0), this._refresh())
    }
    running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length)
    }
    stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const i = e.items;
        let n = i.length - 1;
        for (; n >= 0; --n) i[n].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete")
    }
    remove(t) {
        return this._charts.delete(t)
    }
}
var q = new Qo;
const Cs = "transparent",
    Jo = {
        boolean(s, t, e) {
            return e > .5 ? t : s
        },
        color(s, t, e) {
            const i = _s(s || Cs),
                n = i.valid && _s(t || Cs);
            return n && n.valid ? n.mix(i, e).hexString() : t
        },
        number(s, t, e) {
            return s + (t - s) * e
        }
    };
class tr {
    constructor(t, e, i, n) {
        const o = e[i];
        n = te([t.to, n, o, t.from]);
        const r = te([t.from, o, n]);
        this._active = !0, this._fn = t.fn || Jo[t.type || typeof r], this._easing = Ft[t.easing] || Ft.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = n, this._promises = void 0
    }
    active() {
        return this._active
    }
    update(t, e, i) {
        if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop],
                o = i - this._start,
                r = this._duration - o;
            this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = te([t.to, e, n, t.from]), this._from = te([t.from, n, e])
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
    }
    tick(t) {
        const e = t - this._start,
            i = this._duration,
            n = this._prop,
            o = this._from,
            r = this._loop,
            a = this._to;
        let c;
        if (this._active = o !== a && (r || e < i), !this._active) {
            this._target[n] = a, this._notify(!0);
            return
        }
        if (e < 0) {
            this._target[n] = o;
            return
        }
        c = e / i % 2, c = r && c > 1 ? 2 - c : c, c = this._easing(Math.min(1, Math.max(0, c))), this._target[n] = this._fn(o, a, c)
    }
    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, i) => {
            t.push({
                res: e,
                rej: i
            })
        })
    }
    _notify(t) {
        const e = t ? "res" : "rej",
            i = this._promises || [];
        for (let n = 0; n < i.length; n++) i[n][e]()
    }
}
class er {
    constructor(t, e) {
        this._chart = t, this._properties = new Map, this.configure(e)
    }
    configure(t) {
        if (!S(t)) return;
        const e = Object.keys(R.animation),
            i = this._properties;
        Object.getOwnPropertyNames(t).forEach(n => {
            const o = t[n];
            if (!S(o)) return;
            const r = {};
            for (const a of e) r[a] = o[a];
            (B(o.properties) && o.properties || [n]).forEach(a => {
                (a === n || !i.has(a)) && i.set(a, r)
            })
        })
    }
    _animateOptions(t, e) {
        const i = e.options,
            n = ir(t, i);
        if (!n) return [];
        const o = this._createAnimations(n, i);
        return i.$shared && sr(t.options.$animations, i).then(() => {
            t.options = i
        }, () => {}), o
    }
    _createAnimations(t, e) {
        const i = this._properties,
            n = [],
            o = t.$animations || (t.$animations = {}),
            r = Object.keys(e),
            a = Date.now();
        let c;
        for (c = r.length - 1; c >= 0; --c) {
            const l = r[c];
            if (l.charAt(0) === "$") continue;
            if (l === "options") {
                n.push(...this._animateOptions(t, e));
                continue
            }
            const h = e[l];
            let d = o[l];
            const f = i.get(l);
            if (d)
                if (f && d.active()) {
                    d.update(f, h, a);
                    continue
                } else d.cancel();
            if (!f || !f.duration) {
                t[l] = h;
                continue
            }
            o[l] = d = new tr(f, t, l, h), n.push(d)
        }
        return n
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return
        }
        const i = this._createAnimations(t, e);
        if (i.length) return q.add(this._chart, i), !0
    }
}

function sr(s, t) {
    const e = [],
        i = Object.keys(t);
    for (let n = 0; n < i.length; n++) {
        const o = s[i[n]];
        o && o.active() && e.push(o.wait())
    }
    return Promise.all(e)
}

function ir(s, t) {
    if (!t) return;
    let e = s.options;
    if (!e) {
        s.options = t;
        return
    }
    return e.$shared && (s.options = e = Object.assign({}, e, {
        $shared: !1,
        $animations: {}
    })), e
}

function Ts(s, t) {
    const e = s && s.options || {},
        i = e.reverse,
        n = e.min === void 0 ? t : 0,
        o = e.max === void 0 ? t : 0;
    return {
        start: i ? o : n,
        end: i ? n : o
    }
}

function nr(s, t, e) {
    if (e === !1) return !1;
    const i = Ts(s, e),
        n = Ts(t, e);
    return {
        top: n.end,
        right: i.end,
        bottom: n.start,
        left: i.start
    }
}

function or(s) {
    let t, e, i, n;
    return S(s) ? (t = s.top, e = s.right, i = s.bottom, n = s.left) : t = e = i = n = s, {
        top: t,
        right: e,
        bottom: i,
        left: n,
        disabled: s === !1
    }
}

function Ii(s, t) {
    const e = [],
        i = s._getSortedDatasetMetas(t);
    let n, o;
    for (n = 0, o = i.length; n < o; ++n) e.push(i[n].index);
    return e
}

function Is(s, t, e, i = {}) {
    const n = s.keys,
        o = i.mode === "single";
    let r, a, c, l;
    if (t === null) return;
    let h = !1;
    for (r = 0, a = n.length; r < a; ++r) {
        if (c = +n[r], c === e) {
            if (h = !0, i.all) continue;
            break
        }
        l = s.values[c], $(l) && (o || t === 0 || xt(t) === xt(l)) && (t += l)
    }
    return !h && !i.all ? 0 : t
}

function rr(s, t) {
    const {
        iScale: e,
        vScale: i
    } = t, n = e.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", r = Object.keys(s), a = new Array(r.length);
    let c, l, h;
    for (c = 0, l = r.length; c < l; ++c) h = r[c], a[c] = {
        [n]: h,
        [o]: s[h]
    };
    return a
}

function Ce(s, t) {
    const e = s && s.options.stacked;
    return e || e === void 0 && t.stack !== void 0
}

function ar(s, t, e) {
    return `${s.id}.${t.id}.${e.stack||e.type}`
}

function cr(s) {
    const {
        min: t,
        max: e,
        minDefined: i,
        maxDefined: n
    } = s.getUserBounds();
    return {
        min: i ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY
    }
}

function lr(s, t, e) {
    const i = s[t] || (s[t] = {});
    return i[e] || (i[e] = {})
}

function Es(s, t, e, i) {
    for (const n of t.getMatchingVisibleMetas(i).reverse()) {
        const o = s[n.index];
        if (e && o > 0 || !e && o < 0) return n.index
    }
    return null
}

function Ls(s, t) {
    const {
        chart: e,
        _cachedMeta: i
    } = s, n = e._stacks || (e._stacks = {}), {
        iScale: o,
        vScale: r,
        index: a
    } = i, c = o.axis, l = r.axis, h = ar(o, r, i), d = t.length;
    let f;
    for (let u = 0; u < d; ++u) {
        const p = t[u],
            {
                [c]: m,
                [l]: g
            } = p,
            _ = p._stacks || (p._stacks = {});
        f = _[l] = lr(n, h, m), f[a] = g, f._top = Es(f, r, !0, i.type), f._bottom = Es(f, r, !1, i.type);
        const x = f._visualValues || (f._visualValues = {});
        x[a] = g
    }
}

function Te(s, t) {
    const e = s.scales;
    return Object.keys(e).filter(i => e[i].axis === t).shift()
}

function hr(s, t) {
    return Mt(s, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    })
}

function dr(s, t, e) {
    return Mt(s, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    })
}

function Dt(s, t) {
    const e = s.controller.index,
        i = s.vScale && s.vScale.axis;
    if (i) {
        t = t || s._parsed;
        for (const n of t) {
            const o = n._stacks;
            if (!o || o[i] === void 0 || o[i][e] === void 0) return;
            delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e]
        }
    }
}
const Ie = s => s === "reset" || s === "none",
    Rs = (s, t) => t ? s : Object.assign({}, s),
    fr = (s, t, e) => s && !t.hidden && t._stacked && {
        keys: Ii(e, !0),
        values: null
    };
class Bt {
    constructor(t, e) {
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
    }
    initialize() {
        const t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = Ce(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
    }
    updateIndex(t) {
        this.index !== t && Dt(this._cachedMeta), this.index = t
    }
    linkScales() {
        const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            n = (d, f, u, p) => d === "x" ? f : d === "r" ? p : u,
            o = e.xAxisID = P(i.xAxisID, Te(t, "x")),
            r = e.yAxisID = P(i.yAxisID, Te(t, "y")),
            a = e.rAxisID = P(i.rAxisID, Te(t, "r")),
            c = e.indexAxis,
            l = e.iAxisID = n(c, o, r, a),
            h = e.vAxisID = n(c, r, o, a);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(h)
    }
    getDataset() {
        return this.chart.data.datasets[this.index]
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index)
    }
    getScaleForId(t) {
        return this.chart.scales[t]
    }
    _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale
    }
    reset() {
        this._update("reset")
    }
    _destroy() {
        const t = this._cachedMeta;
        this._data && us(this._data, this), t._stacked && Dt(t)
    }
    _dataCheck() {
        const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
        if (S(e)) {
            const n = this._cachedMeta;
            this._data = rr(e, n)
        } else if (i !== e) {
            if (i) {
                us(i, this);
                const n = this._cachedMeta;
                Dt(n), n._parsed = []
            }
            e && Object.isExtensible(e) && jn(e, this), this._syncList = [], this._data = e
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
    }
    buildOrUpdateElements(t) {
        const e = this._cachedMeta,
            i = this.getDataset();
        let n = !1;
        this._dataCheck();
        const o = e._stacked;
        e._stacked = Ce(e.vScale, e), e.stack !== i.stack && (n = !0, Dt(e), e.stack = i.stack), this._resyncElements(t), (n || o !== e._stacked) && (Ls(this, e._parsed), e._stacked = Ce(e.vScale, e))
    }
    configure() {
        const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
    }
    parse(t, e) {
        const {
            _cachedMeta: i,
            _data: n
        } = this, {
            iScale: o,
            _stacked: r
        } = i, a = o.axis;
        let c = t === 0 && e === n.length ? !0 : i._sorted,
            l = t > 0 && i._parsed[t - 1],
            h, d, f;
        if (this._parsing === !1) i._parsed = n, i._sorted = !0, f = n;
        else {
            B(n[t]) ? f = this.parseArrayData(i, n, t, e) : S(n[t]) ? f = this.parseObjectData(i, n, t, e) : f = this.parsePrimitiveData(i, n, t, e);
            const u = () => d[a] === null || l && d[a] < l[a];
            for (h = 0; h < e; ++h) i._parsed[h + t] = d = f[h], c && (u() && (c = !1), l = d);
            i._sorted = c
        }
        r && Ls(this, f)
    }
    parsePrimitiveData(t, e, i, n) {
        const {
            iScale: o,
            vScale: r
        } = t, a = o.axis, c = r.axis, l = o.getLabels(), h = o === r, d = new Array(n);
        let f, u, p;
        for (f = 0, u = n; f < u; ++f) p = f + i, d[f] = {
            [a]: h || o.parse(l[p], p),
            [c]: r.parse(e[p], p)
        };
        return d
    }
    parseArrayData(t, e, i, n) {
        const {
            xScale: o,
            yScale: r
        } = t, a = new Array(n);
        let c, l, h, d;
        for (c = 0, l = n; c < l; ++c) h = c + i, d = e[h], a[c] = {
            x: o.parse(d[0], h),
            y: r.parse(d[1], h)
        };
        return a
    }
    parseObjectData(t, e, i, n) {
        const {
            xScale: o,
            yScale: r
        } = t, {
            xAxisKey: a = "x",
            yAxisKey: c = "y"
        } = this._parsing, l = new Array(n);
        let h, d, f, u;
        for (h = 0, d = n; h < d; ++h) f = h + i, u = e[f], l[h] = {
            x: o.parse(pe(u, a), f),
            y: r.parse(pe(u, c), f)
        };
        return l
    }
    getParsed(t) {
        return this._cachedMeta._parsed[t]
    }
    getDataElement(t) {
        return this._cachedMeta.data[t]
    }
    applyStack(t, e, i) {
        const n = this.chart,
            o = this._cachedMeta,
            r = e[t.axis],
            a = {
                keys: Ii(n, !0),
                values: e._stacks[t.axis]._visualValues
            };
        return Is(a, r, o.index, {
            mode: i
        })
    }
    updateRangeFromParsed(t, e, i, n) {
        const o = i[e.axis];
        let r = o === null ? NaN : o;
        const a = n && i._stacks[e.axis];
        n && a && (n.values = a, r = Is(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r)
    }
    getMinMax(t, e) {
        const i = this._cachedMeta,
            n = i._parsed,
            o = i._sorted && t === i.iScale,
            r = n.length,
            a = this._getOtherScale(t),
            c = fr(e, i, this.chart),
            l = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            },
            {
                min: h,
                max: d
            } = cr(a);
        let f, u;

        function p() {
            u = n[f];
            const m = u[a.axis];
            return !$(u[t.axis]) || h > m || d < m
        }
        for (f = 0; f < r && !(!p() && (this.updateRangeFromParsed(l, t, u, c), o)); ++f);
        if (o) {
            for (f = r - 1; f >= 0; --f)
                if (!p()) {
                    this.updateRangeFromParsed(l, t, u, c);
                    break
                }
        }
        return l
    }
    getAllParsedValues(t) {
        const e = this._cachedMeta._parsed,
            i = [];
        let n, o, r;
        for (n = 0, o = e.length; n < o; ++n) r = e[n][t.axis], $(r) && i.push(r);
        return i
    }
    getMaxOverflow() {
        return !1
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            o = this.getParsed(t);
        return {
            label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
            value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
        }
    }
    _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"), e._clip = or(P(this.options.clip, nr(e.xScale, e.yScale, this.getMaxOverflow())))
    }
    update(t) {}
    draw() {
        const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            n = i.data || [],
            o = e.chartArea,
            r = [],
            a = this._drawStart || 0,
            c = this._drawCount || n.length - a,
            l = this.options.drawActiveElementsOnTop;
        let h;
        for (i.dataset && i.dataset.draw(t, o, a, c), h = a; h < a + c; ++h) {
            const d = n[h];
            d.hidden || (d.active && l ? r.push(d) : d.draw(t, o))
        }
        for (h = 0; h < r.length; ++h) r[h].draw(t, o)
    }
    getStyle(t, e) {
        const i = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
    }
    getContext(t, e, i) {
        const n = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const r = this._cachedMeta.data[t];
            o = r.$context || (r.$context = dr(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
        } else o = this.$context || (this.$context = hr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
        return o.active = !!e, o.mode = i, o
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t)
    }
    resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t)
    }
    _resolveElementOptions(t, e = "default", i) {
        const n = e === "active",
            o = this._cachedDataOpts,
            r = t + "-" + e,
            a = o[r],
            c = this.enableOptionSharing && me(i);
        if (a) return Rs(a, c);
        const l = this.chart.config,
            h = l.datasetElementScopeKeys(this._type, t),
            d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
            f = l.getOptionScopes(this.getDataset(), h),
            u = Object.keys(R.elements[t]),
            p = () => this.getContext(i, n, e),
            m = l.resolveNamedOptions(f, u, p, d);
        return m.$shared && (m.$shared = c, o[r] = Object.freeze(Rs(m, c))), m
    }
    _resolveAnimations(t, e, i) {
        const n = this.chart,
            o = this._cachedDataOpts,
            r = `animation-${e}`,
            a = o[r];
        if (a) return a;
        let c;
        if (n.options.animation !== !1) {
            const h = this.chart.config,
                d = h.datasetAnimationScopeKeys(this._type, e),
                f = h.getOptionScopes(this.getDataset(), d);
            c = h.createResolver(f, this.getContext(t, i, e))
        }
        const l = new er(n, c && c.animations);
        return c && c._cacheable && (o[r] = Object.freeze(l)), l
    }
    getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
    }
    includeOptions(t, e) {
        return !e || Ie(t) || this.chart._animationsDisabled
    }
    _getSharedOptions(t, e) {
        const i = this.resolveDataElementOptions(t, e),
            n = this._sharedOptions,
            o = this.getSharedOptions(i),
            r = this.includeOptions(e, o) || o !== n;
        return this.updateSharedOptions(o, e, i), {
            sharedOptions: o,
            includeOptions: r
        }
    }
    updateElement(t, e, i, n) {
        Ie(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
    }
    updateSharedOptions(t, e, i) {
        t && !Ie(e) && this._resolveAnimations(void 0, e).update(t, i)
    }
    _setStyle(t, e, i, n) {
        t.active = n;
        const o = this.getStyle(e, n);
        this._resolveAnimations(e, i, n).update(t, {
            options: !n && this.getSharedOptions(o) || o
        })
    }
    removeHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !1)
    }
    setHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !0)
    }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1)
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0)
    }
    _resyncElements(t) {
        const e = this._data,
            i = this._cachedMeta.data;
        for (const [a, c, l] of this._syncList) this[a](c, l);
        this._syncList = [];
        const n = i.length,
            o = e.length,
            r = Math.min(o, n);
        r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o)
    }
    _insertElements(t, e, i = !0) {
        const n = this._cachedMeta,
            o = n.data,
            r = t + e;
        let a;
        const c = l => {
            for (l.length += e, a = l.length - 1; a >= r; a--) l[a] = l[a - e]
        };
        for (c(o), a = t; a < r; ++a) o[a] = new this.dataElementType;
        this._parsing && c(n._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset")
    }
    updateElements(t, e, i, n) {}
    _removeElements(t, e) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const n = i._parsed.splice(t, e);
            i._stacked && Dt(i, n)
        }
        i.data.splice(t, e)
    }
    _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
            const [e, i, n] = t;
            this[e](i, n)
        }
        this.chart._dataChanges.push([this.index, ...t])
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t])
    }
    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
    }
    _onDataShift() {
        this._sync(["_removeElements", 0, 1])
    }
    _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        const i = arguments.length - 2;
        i && this._sync(["_insertElements", t, i])
    }
    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length])
    }
}
k(Bt, "defaults", {}), k(Bt, "datasetElementType", null), k(Bt, "dataElementType", null);
class he extends Bt {
    initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
    }
    update(t) {
        const e = this._cachedMeta,
            {
                dataset: i,
                data: n = [],
                _dataset: o
            } = e,
            r = this.chart._animationsDisabled;
        let {
            start: a,
            count: c
        } = $n(e, n, r);
        this._drawStart = a, this._drawCount = c, Un(e) && (a = 0, c = n.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = n;
        const l = this.resolveDatasetElementOptions(t);
        this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
            animated: !r,
            options: l
        }, t), this.updateElements(n, a, c, t)
    }
    updateElements(t, e, i, n) {
        const o = n === "reset",
            {
                iScale: r,
                vScale: a,
                _stacked: c,
                _dataset: l
            } = this._cachedMeta,
            {
                sharedOptions: h,
                includeOptions: d
            } = this._getSharedOptions(e, n),
            f = r.axis,
            u = a.axis,
            {
                spanGaps: p,
                segment: m
            } = this.options,
            g = Ht(p) ? p : Number.POSITIVE_INFINITY,
            _ = this.chart._animationsDisabled || o || n === "none",
            x = e + i,
            O = t.length;
        let D = e > 0 && this.getParsed(e - 1);
        for (let b = 0; b < O; ++b) {
            const M = t[b],
                y = _ ? M : {};
            if (b < e || b >= x) {
                y.skip = !0;
                continue
            }
            const v = this.getParsed(b),
                w = C(v[u]),
                T = y[f] = r.getPixelForValue(v[f], b),
                I = y[u] = o || w ? a.getBasePixel() : a.getPixelForValue(c ? this.applyStack(a, v, c) : v[u], b);
            y.skip = isNaN(T) || isNaN(I) || w, y.stop = b > 0 && Math.abs(v[f] - D[f]) > g, m && (y.parsed = v, y.raw = l.data[b]), d && (y.options = h || this.resolveDataElementOptions(b, M.active ? "active" : n)), _ || this.updateElement(M, b, y, n), D = v
        }
    }
    getMaxOverflow() {
        const t = this._cachedMeta,
            e = t.dataset,
            i = e.options && e.options.borderWidth || 0,
            n = t.data || [];
        if (!n.length) return i;
        const o = n[0].size(this.resolveDataElementOptions(0)),
            r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(i, o, r) / 2
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
    }
}
k(he, "id", "line"), k(he, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
}), k(he, "overrides", {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
});

function lt() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}
class ts {
    constructor(t) {
        k(this, "options");
        this.options = t || {}
    }
    static override(t) {
        Object.assign(ts.prototype, t)
    }
    init() {}
    formats() {
        return lt()
    }
    parse() {
        return lt()
    }
    format() {
        return lt()
    }
    add() {
        return lt()
    }
    diff() {
        return lt()
    }
    startOf() {
        return lt()
    }
    endOf() {
        return lt()
    }
}
var ur = {
    _date: ts
};

function gr(s, t, e, i) {
    const {
        controller: n,
        data: o,
        _sorted: r
    } = s, a = n._cachedMeta.iScale, c = s.dataset && s.dataset.options ? s.dataset.options.spanGaps : null;
    if (a && t === a.axis && t !== "r" && r && o.length) {
        const l = a._reversePixels ? Nn : ut;
        if (i) {
            if (n._sharedOptions) {
                const h = o[0],
                    d = typeof h.getRange == "function" && h.getRange(t);
                if (d) {
                    const f = l(o, t, e - d),
                        u = l(o, t, e + d);
                    return {
                        lo: f.lo,
                        hi: u.hi
                    }
                }
            }
        } else {
            const h = l(o, t, e);
            if (c) {
                const {
                    vScale: d
                } = n._cachedMeta, {
                    _parsed: f
                } = s, u = f.slice(0, h.lo + 1).reverse().findIndex(m => !C(m[d.axis]));
                h.lo -= Math.max(0, u);
                const p = f.slice(h.hi).findIndex(m => !C(m[d.axis]));
                h.hi += Math.max(0, p)
            }
            return h
        }
    }
    return {
        lo: 0,
        hi: o.length - 1
    }
}

function ke(s, t, e, i, n) {
    const o = s.getSortedVisibleDatasetMetas(),
        r = e[t];
    for (let a = 0, c = o.length; a < c; ++a) {
        const {
            index: l,
            data: h
        } = o[a], {
            lo: d,
            hi: f
        } = gr(o[a], t, r, n);
        for (let u = d; u <= f; ++u) {
            const p = h[u];
            p.skip || i(p, l, u)
        }
    }
}

function pr(s) {
    const t = s.indexOf("x") !== -1,
        e = s.indexOf("y") !== -1;
    return function(i, n) {
        const o = t ? Math.abs(i.x - n.x) : 0,
            r = e ? Math.abs(i.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
    }
}

function Ee(s, t, e, i, n) {
    const o = [];
    return !n && !s.isPointInArea(t) || ke(s, e, t, function(a, c, l) {
        !n && !Wt(a, s.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
            element: a,
            datasetIndex: c,
            index: l
        })
    }, !0), o
}

function mr(s, t, e, i) {
    let n = [];

    function o(r, a, c) {
        const {
            startAngle: l,
            endAngle: h
        } = r.getProps(["startAngle", "endAngle"], i), {
            angle: d
        } = Rn(r, {
            x: t.x,
            y: t.y
        });
        _i(d, l, h) && n.push({
            element: r,
            datasetIndex: a,
            index: c
        })
    }
    return ke(s, e, t, o), n
}

function _r(s, t, e, i, n, o) {
    let r = [];
    const a = pr(e);
    let c = Number.POSITIVE_INFINITY;

    function l(h, d, f) {
        const u = h.inRange(t.x, t.y, n);
        if (i && !u) return;
        const p = h.getCenterPoint(n);
        if (!(!!o || s.isPointInArea(p)) && !u) return;
        const g = a(t, p);
        g < c ? (r = [{
            element: h,
            datasetIndex: d,
            index: f
        }], c = g) : g === c && r.push({
            element: h,
            datasetIndex: d,
            index: f
        })
    }
    return ke(s, e, t, l), r
}

function Le(s, t, e, i, n, o) {
    return !o && !s.isPointInArea(t) ? [] : e === "r" && !i ? mr(s, t, e, n) : _r(s, t, e, i, n, o)
}

function zs(s, t, e, i, n) {
    const o = [],
        r = e === "x" ? "inXRange" : "inYRange";
    let a = !1;
    return ke(s, e, t, (c, l, h) => {
        c[r] && c[r](t[e], n) && (o.push({
            element: c,
            datasetIndex: l,
            index: h
        }), a = a || c.inRange(t.x, t.y, n))
    }), i && !a ? [] : o
}
var br = {
    modes: {
        index(s, t, e, i) {
            const n = ht(t, s),
                o = e.axis || "x",
                r = e.includeInvisible || !1,
                a = e.intersect ? Ee(s, n, o, i, r) : Le(s, n, o, !1, i, r),
                c = [];
            return a.length ? (s.getSortedVisibleDatasetMetas().forEach(l => {
                const h = a[0].index,
                    d = l.data[h];
                d && !d.skip && c.push({
                    element: d,
                    datasetIndex: l.index,
                    index: h
                })
            }), c) : []
        },
        dataset(s, t, e, i) {
            const n = ht(t, s),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            let a = e.intersect ? Ee(s, n, o, i, r) : Le(s, n, o, !1, i, r);
            if (a.length > 0) {
                const c = a[0].datasetIndex,
                    l = s.getDatasetMeta(c).data;
                a = [];
                for (let h = 0; h < l.length; ++h) a.push({
                    element: l[h],
                    datasetIndex: c,
                    index: h
                })
            }
            return a
        },
        point(s, t, e, i) {
            const n = ht(t, s),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            return Ee(s, n, o, i, r)
        },
        nearest(s, t, e, i) {
            const n = ht(t, s),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            return Le(s, n, o, e.intersect, i, r)
        },
        x(s, t, e, i) {
            const n = ht(t, s);
            return zs(s, n, "x", e.intersect, i)
        },
        y(s, t, e, i) {
            const n = ht(t, s);
            return zs(s, n, "y", e.intersect, i)
        }
    }
};
const Ei = ["left", "top", "right", "bottom"];

function Pt(s, t) {
    return s.filter(e => e.pos === t)
}

function As(s, t) {
    return s.filter(e => Ei.indexOf(e.pos) === -1 && e.box.axis === t)
}

function Ct(s, t) {
    return s.sort((e, i) => {
        const n = t ? i : e,
            o = t ? e : i;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
    })
}

function xr(s) {
    const t = [];
    let e, i, n, o, r, a;
    for (e = 0, i = (s || []).length; e < i; ++e) n = s[e], {
        position: o,
        options: {
            stack: r,
            stackWeight: a = 1
        }
    } = n, t.push({
        index: e,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: r && o + r,
        stackWeight: a
    });
    return t
}

function yr(s) {
    const t = {};
    for (const e of s) {
        const {
            stack: i,
            pos: n,
            stackWeight: o
        } = e;
        if (!i || !Ei.includes(n)) continue;
        const r = t[i] || (t[i] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        r.count++, r.weight += o
    }
    return t
}

function vr(s, t) {
    const e = yr(s),
        {
            vBoxMaxWidth: i,
            hBoxMaxHeight: n
        } = t;
    let o, r, a;
    for (o = 0, r = s.length; o < r; ++o) {
        a = s[o];
        const {
            fullSize: c
        } = a.box, l = e[a.stack], h = l && a.stackWeight / l.weight;
        a.horizontal ? (a.width = h ? h * i : c && t.availableWidth, a.height = n) : (a.width = i, a.height = h ? h * n : c && t.availableHeight)
    }
    return e
}

function kr(s) {
    const t = xr(s),
        e = Ct(t.filter(l => l.box.fullSize), !0),
        i = Ct(Pt(t, "left"), !0),
        n = Ct(Pt(t, "right")),
        o = Ct(Pt(t, "top"), !0),
        r = Ct(Pt(t, "bottom")),
        a = As(t, "x"),
        c = As(t, "y");
    return {
        fullSize: e,
        leftAndTop: i.concat(o),
        rightAndBottom: n.concat(c).concat(r).concat(a),
        chartArea: Pt(t, "chartArea"),
        vertical: i.concat(n).concat(c),
        horizontal: o.concat(r).concat(a)
    }
}

function Fs(s, t, e, i) {
    return Math.max(s[e], t[e]) + Math.max(s[i], t[i])
}

function Li(s, t) {
    s.top = Math.max(s.top, t.top), s.left = Math.max(s.left, t.left), s.bottom = Math.max(s.bottom, t.bottom), s.right = Math.max(s.right, t.right)
}

function Mr(s, t, e, i) {
    const {
        pos: n,
        box: o
    } = e, r = s.maxPadding;
    if (!S(n)) {
        e.size && (s[n] -= e.size);
        const d = i[e.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, s[n] += e.size
    }
    o.getPadding && Li(r, o.getPadding());
    const a = Math.max(0, t.outerWidth - Fs(r, s, "left", "right")),
        c = Math.max(0, t.outerHeight - Fs(r, s, "top", "bottom")),
        l = a !== s.w,
        h = c !== s.h;
    return s.w = a, s.h = c, e.horizontal ? {
        same: l,
        other: h
    } : {
        same: h,
        other: l
    }
}

function wr(s) {
    const t = s.maxPadding;

    function e(i) {
        const n = Math.max(t[i] - s[i], 0);
        return s[i] += n, n
    }
    s.y += e("top"), s.x += e("left"), e("right"), e("bottom")
}

function Sr(s, t) {
    const e = t.maxPadding;

    function i(n) {
        const o = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.forEach(r => {
            o[r] = Math.max(t[r], e[r])
        }), o
    }
    return i(s ? ["left", "right"] : ["top", "bottom"])
}

function Lt(s, t, e, i) {
    const n = [];
    let o, r, a, c, l, h;
    for (o = 0, r = s.length, l = 0; o < r; ++o) {
        a = s[o], c = a.box, c.update(a.width || t.w, a.height || t.h, Sr(a.horizontal, t));
        const {
            same: d,
            other: f
        } = Mr(t, e, a, i);
        l |= d && n.length, h = h || f, c.fullSize || n.push(a)
    }
    return l && Lt(n, t, e, i) || h
}

function ne(s, t, e, i, n) {
    s.top = e, s.left = t, s.right = t + i, s.bottom = e + n, s.width = i, s.height = n
}

function Ns(s, t, e, i) {
    const n = e.padding;
    let {
        x: o,
        y: r
    } = t;
    for (const a of s) {
        const c = a.box,
            l = i[a.stack] || {
                placed: 0,
                weight: 1
            },
            h = a.stackWeight / l.weight || 1;
        if (a.horizontal) {
            const d = t.w * h,
                f = l.size || c.height;
            me(l.start) && (r = l.start), c.fullSize ? ne(c, n.left, r, e.outerWidth - n.right - n.left, f) : ne(c, t.left + l.placed, r, d, f), l.start = r, l.placed += d, r = c.bottom
        } else {
            const d = t.h * h,
                f = l.size || c.width;
            me(l.start) && (o = l.start), c.fullSize ? ne(c, o, n.top, f, e.outerHeight - n.bottom - n.top) : ne(c, o, t.top + l.placed, f, d), l.start = o, l.placed += d, o = c.right
        }
    }
    t.x = o, t.y = r
}
var oe = {
    addBox(s, t) {
        s.boxes || (s.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
            return [{
                z: 0,
                draw(e) {
                    t.draw(e)
                }
            }]
        }, s.boxes.push(t)
    },
    removeBox(s, t) {
        const e = s.boxes ? s.boxes.indexOf(t) : -1;
        e !== -1 && s.boxes.splice(e, 1)
    },
    configure(s, t, e) {
        t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight
    },
    update(s, t, e, i) {
        if (!s) return;
        const n = $t(s.options.layout.padding),
            o = Math.max(t - n.width, 0),
            r = Math.max(e - n.height, 0),
            a = kr(s.boxes),
            c = a.vertical,
            l = a.horizontal;
        F(s.boxes, m => {
            typeof m.beforeLayout == "function" && m.beforeLayout()
        });
        const h = c.reduce((m, g) => g.box.options && g.box.options.display === !1 ? m : m + 1, 0) || 1,
            d = Object.freeze({
                outerWidth: t,
                outerHeight: e,
                padding: n,
                availableWidth: o,
                availableHeight: r,
                vBoxMaxWidth: o / 2 / h,
                hBoxMaxHeight: r / 2
            }),
            f = Object.assign({}, n);
        Li(f, $t(i));
        const u = Object.assign({
                maxPadding: f,
                w: o,
                h: r,
                x: n.left,
                y: n.top
            }, n),
            p = vr(c.concat(l), d);
        Lt(a.fullSize, u, d, p), Lt(c, u, d, p), Lt(l, u, d, p) && Lt(c, u, d, p), wr(u), Ns(a.leftAndTop, u, d, p), u.x += u.w, u.y += u.h, Ns(a.rightAndBottom, u, d, p), s.chartArea = {
            left: u.left,
            top: u.top,
            right: u.left + u.w,
            bottom: u.top + u.h,
            height: u.h,
            width: u.w
        }, F(a.chartArea, m => {
            const g = m.box;
            Object.assign(g, s.chartArea), g.update(u.w, u.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            })
        })
    }
};
class Ri {
    acquireContext(t, e) {}
    releaseContext(t) {
        return !1
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
        return 1
    }
    getMaximumSize(t, e, i, n) {
        return e = Math.max(0, e || t.width), i = i || t.height, {
            width: e,
            height: Math.max(0, n ? Math.floor(e / n) : i)
        }
    }
    isAttached(t) {
        return !0
    }
    updateConfig(t) {}
}
class Or extends Ri {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null
    }
    updateConfig(t) {
        t.options.animation = !1
    }
}
const de = "$chartjs",
    Dr = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    },
    Bs = s => s === null || s === "";

function Pr(s, t) {
    const e = s.style,
        i = s.getAttribute("height"),
        n = s.getAttribute("width");
    if (s[de] = {
            initial: {
                height: i,
                width: n,
                style: {
                    display: e.display,
                    height: e.height,
                    width: e.width
                }
            }
        }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Bs(n)) {
        const o = Ss(s, "width");
        o !== void 0 && (s.width = o)
    }
    if (Bs(i))
        if (s.style.height === "") s.height = s.width / (t || 2);
        else {
            const o = Ss(s, "height");
            o !== void 0 && (s.height = o)
        } return s
}
const zi = Bo ? {
    passive: !0
} : !1;

function Cr(s, t, e) {
    s && s.addEventListener(t, e, zi)
}

function Tr(s, t, e) {
    s && s.canvas && s.canvas.removeEventListener(t, e, zi)
}

function Ir(s, t) {
    const e = Dr[s.type] || s.type,
        {
            x: i,
            y: n
        } = ht(s, t);
    return {
        type: e,
        chart: t,
        native: s,
        x: i !== void 0 ? i : null,
        y: n !== void 0 ? n : null
    }
}

function xe(s, t) {
    for (const e of s)
        if (e === t || e.contains(t)) return !0
}

function Er(s, t, e) {
    const i = s.canvas,
        n = new MutationObserver(o => {
            let r = !1;
            for (const a of o) r = r || xe(a.addedNodes, i), r = r && !xe(a.removedNodes, i);
            r && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}

function Lr(s, t, e) {
    const i = s.canvas,
        n = new MutationObserver(o => {
            let r = !1;
            for (const a of o) r = r || xe(a.removedNodes, i), r = r && !xe(a.addedNodes, i);
            r && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}
const Ut = new Map;
let js = 0;

function Ai() {
    const s = window.devicePixelRatio;
    s !== js && (js = s, Ut.forEach((t, e) => {
        e.currentDevicePixelRatio !== s && t()
    }))
}

function Rr(s, t) {
    Ut.size || window.addEventListener("resize", Ai), Ut.set(s, t)
}

function zr(s) {
    Ut.delete(s), Ut.size || window.removeEventListener("resize", Ai)
}

function Ar(s, t, e) {
    const i = s.canvas,
        n = i && Je(i);
    if (!n) return;
    const o = yi((a, c) => {
            const l = n.clientWidth;
            e(a, c), l < n.clientWidth && e()
        }, window),
        r = new ResizeObserver(a => {
            const c = a[0],
                l = c.contentRect.width,
                h = c.contentRect.height;
            l === 0 && h === 0 || o(l, h)
        });
    return r.observe(n), Rr(s, o), r
}

function Re(s, t, e) {
    e && e.disconnect(), t === "resize" && zr(s)
}

function Fr(s, t, e) {
    const i = s.canvas,
        n = yi(o => {
            s.ctx !== null && e(Ir(o, s))
        }, s);
    return Cr(i, t, n), n
}
class Nr extends Ri {
    acquireContext(t, e) {
        const i = t && t.getContext && t.getContext("2d");
        return i && i.canvas === t ? (Pr(t, e), i) : null
    }
    releaseContext(t) {
        const e = t.canvas;
        if (!e[de]) return !1;
        const i = e[de].initial;
        ["height", "width"].forEach(o => {
            const r = i[o];
            C(r) ? e.removeAttribute(o) : e.setAttribute(o, r)
        });
        const n = i.style || {};
        return Object.keys(n).forEach(o => {
            e.style[o] = n[o]
        }), e.width = e.width, delete e[de], !0
    }
    addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        const n = t.$proxies || (t.$proxies = {}),
            r = {
                attach: Er,
                detach: Lr,
                resize: Ar
            } [e] || Fr;
        n[e] = r(t, e, i)
    }
    removeEventListener(t, e) {
        const i = t.$proxies || (t.$proxies = {}),
            n = i[e];
        if (!n) return;
        ({
            attach: Re,
            detach: Re,
            resize: Re
        } [e] || Tr)(t, e, n), i[e] = void 0
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio
    }
    getMaximumSize(t, e, i, n) {
        return No(t, e, i, n)
    }
    isAttached(t) {
        const e = t && Je(t);
        return !!(e && e.isConnected)
    }
}

function Br(s) {
    return !Qe() || typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas ? Or : Nr
}
class kt {
    constructor() {
        k(this, "x");
        k(this, "y");
        k(this, "active", !1);
        k(this, "options");
        k(this, "$animations")
    }
    tooltipPosition(t) {
        const {
            x: e,
            y: i
        } = this.getProps(["x", "y"], t);
        return {
            x: e,
            y: i
        }
    }
    hasValue() {
        return Ht(this.x) && Ht(this.y)
    }
    getProps(t, e) {
        const i = this.$animations;
        if (!e || !i) return this;
        const n = {};
        return t.forEach(o => {
            n[o] = i[o] && i[o].active() ? i[o]._to : this[o]
        }), n
    }
}
k(kt, "defaults", {}), k(kt, "defaultRoutes");

function jr(s, t) {
    const e = s.options.ticks,
        i = Vr(s),
        n = Math.min(e.maxTicksLimit || i, i),
        o = e.major.enabled ? Wr(t) : [],
        r = o.length,
        a = o[0],
        c = o[r - 1],
        l = [];
    if (r > n) return $r(t, l, o, r / n), l;
    const h = Hr(o, t, n);
    if (r > 0) {
        let d, f;
        const u = r > 1 ? Math.round((c - a) / (r - 1)) : null;
        for (re(t, l, h, C(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++) re(t, l, h, o[d], o[d + 1]);
        return re(t, l, h, c, C(u) ? t.length : c + u), l
    }
    return re(t, l, h), l
}

function Vr(s) {
    const t = s.options.offset,
        e = s._tickSize(),
        i = s._length / e + (t ? 0 : 1),
        n = s._maxLength / e;
    return Math.floor(Math.min(i, n))
}

function Hr(s, t, e) {
    const i = Ur(s),
        n = t.length / e;
    if (!i) return Math.max(n, 1);
    const o = Cn(i);
    for (let r = 0, a = o.length - 1; r < a; r++) {
        const c = o[r];
        if (c > n) return c
    }
    return Math.max(n, 1)
}

function Wr(s) {
    const t = [];
    let e, i;
    for (e = 0, i = s.length; e < i; e++) s[e].major && t.push(e);
    return t
}

function $r(s, t, e, i) {
    let n = 0,
        o = e[0],
        r;
    for (i = Math.ceil(i), r = 0; r < s.length; r++) r === o && (t.push(s[r]), n++, o = e[n * i])
}

function re(s, t, e, i, n) {
    const o = P(i, 0),
        r = Math.min(P(n, s.length), s.length);
    let a = 0,
        c, l, h;
    for (e = Math.ceil(e), n && (c = n - i, e = c / Math.floor(c / e)), h = o; h < 0;) a++, h = Math.round(o + a * e);
    for (l = Math.max(o, 0); l < r; l++) l === h && (t.push(s[l]), a++, h = Math.round(o + a * e))
}

function Ur(s) {
    const t = s.length;
    let e, i;
    if (t < 2) return !1;
    for (i = s[0], e = 1; e < t; ++e)
        if (s[e] - s[e - 1] !== i) return !1;
    return i
}
const Yr = s => s === "left" ? "right" : s === "right" ? "left" : s,
    Vs = (s, t, e) => t === "top" || t === "left" ? s[t] + e : s[t] - e,
    Hs = (s, t) => Math.min(t || s, s);

function Ws(s, t) {
    const e = [],
        i = s.length / t,
        n = s.length;
    let o = 0;
    for (; o < n; o += i) e.push(s[Math.floor(o)]);
    return e
}

function Kr(s, t, e) {
    const i = s.ticks.length,
        n = Math.min(t, i - 1),
        o = s._startPixel,
        r = s._endPixel,
        a = 1e-6;
    let c = s.getPixelForTick(n),
        l;
    if (!(e && (i === 1 ? l = Math.max(c - o, r - c) : t === 0 ? l = (s.getPixelForTick(1) - c) / 2 : l = (c - s.getPixelForTick(n - 1)) / 2, c += n < t ? l : -l, c < o - a || c > r + a))) return c
}

function Xr(s, t) {
    F(s, e => {
        const i = e.gc,
            n = i.length / 2;
        let o;
        if (n > t) {
            for (o = 0; o < n; ++o) delete e.data[i[o]];
            i.splice(0, n)
        }
    })
}

function Tt(s) {
    return s.drawTicks ? s.tickLength : 0
}

function $s(s, t) {
    if (!s.display) return 0;
    const e = Fe(s.font, t),
        i = $t(s.padding);
    return (B(s.text) ? s.text.length : 1) * e.lineHeight + i.height
}

function qr(s, t) {
    return Mt(s, {
        scale: t,
        type: "scale"
    })
}

function Gr(s, t, e) {
    return Mt(s, {
        tick: e,
        index: t,
        type: "tick"
    })
}

function Zr(s, t, e) {
    let i = Wn(s);
    return (e && t !== "right" || !e && t === "right") && (i = Yr(i)), i
}

function Qr(s, t, e, i) {
    const {
        top: n,
        left: o,
        bottom: r,
        right: a,
        chart: c
    } = s, {
        chartArea: l,
        scales: h
    } = c;
    let d = 0,
        f, u, p;
    const m = r - n,
        g = a - o;
    if (s.isHorizontal()) {
        if (u = gs(i, o, a), S(e)) {
            const _ = Object.keys(e)[0],
                x = e[_];
            p = h[_].getPixelForValue(x) + m - t
        } else e === "center" ? p = (l.bottom + l.top) / 2 + m - t : p = Vs(s, e, t);
        f = a - o
    } else {
        if (S(e)) {
            const _ = Object.keys(e)[0],
                x = e[_];
            u = h[_].getPixelForValue(x) - g + t
        } else e === "center" ? u = (l.left + l.right) / 2 - g + t : u = Vs(s, e, t);
        p = gs(i, r, n), d = e === "left" ? -st : st
    }
    return {
        titleX: u,
        titleY: p,
        maxWidth: f,
        rotation: d
    }
}
class wt extends kt {
    constructor(t) {
        super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
    }
    init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
    }
    parse(t, e) {
        return t
    }
    getUserBounds() {
        let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: i,
            _suggestedMax: n
        } = this;
        return t = Y(t, Number.POSITIVE_INFINITY), e = Y(e, Number.NEGATIVE_INFINITY), i = Y(i, Number.POSITIVE_INFINITY), n = Y(n, Number.NEGATIVE_INFINITY), {
            min: Y(t, i),
            max: Y(e, n),
            minDefined: $(t),
            maxDefined: $(e)
        }
    }
    getMinMax(t) {
        let {
            min: e,
            max: i,
            minDefined: n,
            maxDefined: o
        } = this.getUserBounds(), r;
        if (n && o) return {
            min: e,
            max: i
        };
        const a = this.getMatchingVisibleMetas();
        for (let c = 0, l = a.length; c < l; ++c) r = a[c].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (i = Math.max(i, r.max));
        return e = o && e > i ? i : e, i = n && e > i ? e : i, {
            min: Y(e, Y(i, e)),
            max: Y(i, Y(e, i))
        }
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        }
    }
    getTicks() {
        return this.ticks
    }
    getLabels() {
        const t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
    }
    getLabelItems(t = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t))
    }
    beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1
    }
    beforeUpdate() {
        L(this.options.beforeUpdate, [this])
    }
    update(t, e, i) {
        const {
            beginAtZero: n,
            grace: o,
            ticks: r
        } = this.options, a = r.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = mo(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        const c = a < this.ticks.length;
        this._convertTicksToLabels(c ? Ws(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = jr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), c && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
    }
    configure() {
        let t = this.options.reverse,
            e, i;
        this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels
    }
    afterUpdate() {
        L(this.options.afterUpdate, [this])
    }
    beforeSetDimensions() {
        L(this.options.beforeSetDimensions, [this])
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
    }
    afterSetDimensions() {
        L(this.options.afterSetDimensions, [this])
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), L(this.options[t], [this])
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits")
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits")
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks")
    }
    buildTicks() {
        return []
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks")
    }
    beforeTickToLabelConversion() {
        L(this.options.beforeTickToLabelConversion, [this])
    }
    generateTickLabels(t) {
        const e = this.options.ticks;
        let i, n, o;
        for (i = 0, n = t.length; i < n; i++) o = t[i], o.label = L(e.callback, [o.value, i, t], this)
    }
    afterTickToLabelConversion() {
        L(this.options.afterTickToLabelConversion, [this])
    }
    beforeCalculateLabelRotation() {
        L(this.options.beforeCalculateLabelRotation, [this])
    }
    calculateLabelRotation() {
        const t = this.options,
            e = t.ticks,
            i = Hs(this.ticks.length, t.ticks.maxTicksLimit),
            n = e.minRotation || 0,
            o = e.maxRotation;
        let r = n,
            a, c, l;
        if (!this._isVisible() || !e.display || n >= o || i <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return
        }
        const h = this._getLabelSizes(),
            d = h.widest.width,
            f = h.highest.height,
            u = X(this.chart.width - d, 0, this.maxWidth);
        a = t.offset ? this.maxWidth / i : u / (i - 1), d + 6 > a && (a = u / (i - (t.offset ? .5 : 1)), c = this.maxHeight - Tt(t.grid) - e.padding - $s(t.title, this.chart.options.font), l = Math.sqrt(d * d + f * f), r = Ln(Math.min(Math.asin(X((h.highest.height + 6) / a, -1, 1)), Math.asin(X(c / l, -1, 1)) - Math.asin(X(f / l, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r
    }
    afterCalculateLabelRotation() {
        L(this.options.afterCalculateLabelRotation, [this])
    }
    afterAutoSkip() {}
    beforeFit() {
        L(this.options.beforeFit, [this])
    }
    fit() {
        const t = {
                width: 0,
                height: 0
            },
            {
                chart: e,
                options: {
                    ticks: i,
                    title: n,
                    grid: o
                }
            } = this,
            r = this._isVisible(),
            a = this.isHorizontal();
        if (r) {
            const c = $s(n, e.options.font);
            if (a ? (t.width = this.maxWidth, t.height = Tt(o) + c) : (t.height = this.maxHeight, t.width = Tt(o) + c), i.display && this.ticks.length) {
                const {
                    first: l,
                    last: h,
                    widest: d,
                    highest: f
                } = this._getLabelSizes(), u = i.padding * 2, p = ft(this.labelRotation), m = Math.cos(p), g = Math.sin(p);
                if (a) {
                    const _ = i.mirror ? 0 : g * d.width + m * f.height;
                    t.height = Math.min(this.maxHeight, t.height + _ + u)
                } else {
                    const _ = i.mirror ? 0 : m * d.width + g * f.height;
                    t.width = Math.min(this.maxWidth, t.width + _ + u)
                }
                this._calculatePadding(l, h, g, m)
            }
        }
        this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
    }
    _calculatePadding(t, e, i, n) {
        const {
            ticks: {
                align: o,
                padding: r
            },
            position: a
        } = this.options, c = this.labelRotation !== 0, l = a !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const h = this.getPixelForTick(0) - this.left,
                d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let f = 0,
                u = 0;
            c ? l ? (f = n * t.width, u = i * e.height) : (f = i * t.height, u = n * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + r) * this.width / (this.width - d), 0)
        } else {
            let h = e.height / 2,
                d = t.height / 2;
            o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
    }
    afterFit() {
        L(this.options.afterFit, [this])
    }
    isHorizontal() {
        const {
            axis: t,
            position: e
        } = this.options;
        return e === "top" || e === "bottom" || t === "x"
    }
    isFullSize() {
        return this.options.fullSize
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, i;
        for (e = 0, i = t.length; e < i; e++) C(t[e].label) && (t.splice(e, 1), i--, e--);
        this.afterTickToLabelConversion()
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            e < i.length && (i = Ws(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)
        }
        return t
    }
    _computeLabelSizes(t, e, i) {
        const {
            ctx: n,
            _longestTextCache: o
        } = this, r = [], a = [], c = Math.floor(e / Hs(e, i));
        let l = 0,
            h = 0,
            d, f, u, p, m, g, _, x, O, D, b;
        for (d = 0; d < e; d += c) {
            if (p = t[d].label, m = this._resolveTickFontOptions(d), n.font = g = m.string, _ = o[g] = o[g] || {
                    data: {},
                    gc: []
                }, x = m.lineHeight, O = D = 0, !C(p) && !B(p)) O = xs(n, _.data, _.gc, O, p), D = x;
            else if (B(p))
                for (f = 0, u = p.length; f < u; ++f) b = p[f], !C(b) && !B(b) && (O = xs(n, _.data, _.gc, O, b), D += x);
            r.push(O), a.push(D), l = Math.max(O, l), h = Math.max(D, h)
        }
        Xr(o, e);
        const M = r.indexOf(l),
            y = a.indexOf(h),
            v = w => ({
                width: r[w] || 0,
                height: a[w] || 0
            });
        return {
            first: v(0),
            last: v(e - 1),
            widest: v(M),
            highest: v(y),
            widths: r,
            heights: a
        }
    }
    getLabelForValue(t) {
        return t
    }
    getPixelForValue(t, e) {
        return NaN
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return An(this._alignToPixels ? ct(this.chart, e, 0) : e)
    }
    getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue())
    }
    getBaseValue() {
        const {
            min: t,
            max: e
        } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
    }
    getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
            const i = e[t];
            return i.$context || (i.$context = Gr(this.getContext(), t, i))
        }
        return this.$context || (this.$context = qr(this.chart.getContext(), this))
    }
    _tickSize() {
        const t = this.options.ticks,
            e = ft(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            n = Math.abs(Math.sin(e)),
            o = this._getLabelSizes(),
            r = t.autoSkipPadding || 0,
            a = o ? o.widest.width + r : 0,
            c = o ? o.highest.height + r : 0;
        return this.isHorizontal() ? c * i > a * n ? a / i : c / n : c * n < a * i ? c / i : a / n
    }
    _isVisible() {
        const t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
    }
    _computeGridLineItems(t) {
        const e = this.axis,
            i = this.chart,
            n = this.options,
            {
                grid: o,
                position: r,
                border: a
            } = n,
            c = o.offset,
            l = this.isHorizontal(),
            d = this.ticks.length + (c ? 1 : 0),
            f = Tt(o),
            u = [],
            p = a.setContext(this.getContext()),
            m = p.display ? p.width : 0,
            g = m / 2,
            _ = function(A) {
                return ct(i, A, m)
            };
        let x, O, D, b, M, y, v, w, T, I, z, U;
        if (r === "top") x = _(this.bottom), y = this.bottom - f, w = x - g, I = _(t.top) + g, U = t.bottom;
        else if (r === "bottom") x = _(this.top), I = t.top, U = _(t.bottom) - g, y = x + g, w = this.top + f;
        else if (r === "left") x = _(this.right), M = this.right - f, v = x - g, T = _(t.left) + g, z = t.right;
        else if (r === "right") x = _(this.left), T = t.left, z = _(t.right) - g, M = x + g, v = this.left + f;
        else if (e === "x") {
            if (r === "center") x = _((t.top + t.bottom) / 2 + .5);
            else if (S(r)) {
                const A = Object.keys(r)[0],
                    H = r[A];
                x = _(this.chart.scales[A].getPixelForValue(H))
            }
            I = t.top, U = t.bottom, y = x + g, w = y + f
        } else if (e === "y") {
            if (r === "center") x = _((t.left + t.right) / 2);
            else if (S(r)) {
                const A = Object.keys(r)[0],
                    H = r[A];
                x = _(this.chart.scales[A].getPixelForValue(H))
            }
            M = x - g, v = M - f, T = t.left, z = t.right
        }
        const Q = P(n.ticks.maxTicksLimit, d),
            E = Math.max(1, Math.ceil(d / Q));
        for (O = 0; O < d; O += E) {
            const A = this.getContext(O),
                H = o.setContext(A),
                Kt = a.setContext(A),
                Xt = H.lineWidth,
                mt = H.color,
                qt = Kt.dash || [],
                _t = Kt.dashOffset,
                St = H.tickWidth,
                ot = H.tickColor,
                Ot = H.tickBorderDash || [],
                rt = H.tickBorderDashOffset;
            D = Kr(this, O, c), D !== void 0 && (b = ct(i, D, Xt), l ? M = v = T = z = b : y = w = I = U = b, u.push({
                tx1: M,
                ty1: y,
                tx2: v,
                ty2: w,
                x1: T,
                y1: I,
                x2: z,
                y2: U,
                width: Xt,
                color: mt,
                borderDash: qt,
                borderDashOffset: _t,
                tickWidth: St,
                tickColor: ot,
                tickBorderDash: Ot,
                tickBorderDashOffset: rt
            }))
        }
        return this._ticksLength = d, this._borderValue = x, u
    }
    _computeLabelItems(t) {
        const e = this.axis,
            i = this.options,
            {
                position: n,
                ticks: o
            } = i,
            r = this.isHorizontal(),
            a = this.ticks,
            {
                align: c,
                crossAlign: l,
                padding: h,
                mirror: d
            } = o,
            f = Tt(i.grid),
            u = f + h,
            p = d ? -h : u,
            m = -ft(this.labelRotation),
            g = [];
        let _, x, O, D, b, M, y, v, w, T, I, z, U = "middle";
        if (n === "top") M = this.bottom - p, y = this._getXAxisLabelAlignment();
        else if (n === "bottom") M = this.top + p, y = this._getXAxisLabelAlignment();
        else if (n === "left") {
            const E = this._getYAxisLabelAlignment(f);
            y = E.textAlign, b = E.x
        } else if (n === "right") {
            const E = this._getYAxisLabelAlignment(f);
            y = E.textAlign, b = E.x
        } else if (e === "x") {
            if (n === "center") M = (t.top + t.bottom) / 2 + u;
            else if (S(n)) {
                const E = Object.keys(n)[0],
                    A = n[E];
                M = this.chart.scales[E].getPixelForValue(A) + u
            }
            y = this._getXAxisLabelAlignment()
        } else if (e === "y") {
            if (n === "center") b = (t.left + t.right) / 2 - u;
            else if (S(n)) {
                const E = Object.keys(n)[0],
                    A = n[E];
                b = this.chart.scales[E].getPixelForValue(A)
            }
            y = this._getYAxisLabelAlignment(f).textAlign
        }
        e === "y" && (c === "start" ? U = "top" : c === "end" && (U = "bottom"));
        const Q = this._getLabelSizes();
        for (_ = 0, x = a.length; _ < x; ++_) {
            O = a[_], D = O.label;
            const E = o.setContext(this.getContext(_));
            v = this.getPixelForTick(_) + o.labelOffset, w = this._resolveTickFontOptions(_), T = w.lineHeight, I = B(D) ? D.length : 1;
            const A = I / 2,
                H = E.color,
                Kt = E.textStrokeColor,
                Xt = E.textStrokeWidth;
            let mt = y;
            r ? (b = v, y === "inner" && (_ === x - 1 ? mt = this.options.reverse ? "left" : "right" : _ === 0 ? mt = this.options.reverse ? "right" : "left" : mt = "center"), n === "top" ? l === "near" || m !== 0 ? z = -I * T + T / 2 : l === "center" ? z = -Q.highest.height / 2 - A * T + T : z = -Q.highest.height + T / 2 : l === "near" || m !== 0 ? z = T / 2 : l === "center" ? z = Q.highest.height / 2 - A * T : z = Q.highest.height - I * T, d && (z *= -1), m !== 0 && !E.showLabelBackdrop && (b += T / 2 * Math.sin(m))) : (M = v, z = (1 - I) * T / 2);
            let qt;
            if (E.showLabelBackdrop) {
                const _t = $t(E.backdropPadding),
                    St = Q.heights[_],
                    ot = Q.widths[_];
                let Ot = z - _t.top,
                    rt = 0 - _t.left;
                switch (U) {
                    case "middle":
                        Ot -= St / 2;
                        break;
                    case "bottom":
                        Ot -= St;
                        break
                }
                switch (y) {
                    case "center":
                        rt -= ot / 2;
                        break;
                    case "right":
                        rt -= ot;
                        break;
                    case "inner":
                        _ === x - 1 ? rt -= ot : _ > 0 && (rt -= ot / 2);
                        break
                }
                qt = {
                    left: rt,
                    top: Ot,
                    width: ot + _t.width,
                    height: St + _t.height,
                    color: E.backdropColor
                }
            }
            g.push({
                label: D,
                font: w,
                textOffset: z,
                options: {
                    rotation: m,
                    color: H,
                    strokeColor: Kt,
                    strokeWidth: Xt,
                    textAlign: mt,
                    textBaseline: U,
                    translation: [b, M],
                    backdrop: qt
                }
            })
        }
        return g
    }
    _getXAxisLabelAlignment() {
        const {
            position: t,
            ticks: e
        } = this.options;
        if (-ft(this.labelRotation)) return t === "top" ? "left" : "right";
        let n = "center";
        return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n
    }
    _getYAxisLabelAlignment(t) {
        const {
            position: e,
            ticks: {
                crossAlign: i,
                mirror: n,
                padding: o
            }
        } = this.options, r = this._getLabelSizes(), a = t + o, c = r.widest.width;
        let l, h;
        return e === "left" ? n ? (h = this.right + o, i === "near" ? l = "left" : i === "center" ? (l = "center", h += c / 2) : (l = "right", h += c)) : (h = this.right - a, i === "near" ? l = "right" : i === "center" ? (l = "center", h -= c / 2) : (l = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, i === "near" ? l = "right" : i === "center" ? (l = "center", h -= c / 2) : (l = "left", h -= c)) : (h = this.left + a, i === "near" ? l = "left" : i === "center" ? (l = "center", h += c / 2) : (l = "right", h = this.right)) : l = "right", {
            textAlign: l,
            x: h
        }
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
            e = this.options.position;
        if (e === "left" || e === "right") return {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
        };
        if (e === "top" || e === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: t.width
        }
    }
    drawBackground() {
        const {
            ctx: t,
            options: {
                backgroundColor: e
            },
            left: i,
            top: n,
            width: o,
            height: r
        } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(i, n, o, r), t.restore())
    }
    getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const n = this.ticks.findIndex(o => o.value === t);
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
    }
    drawGrid(t) {
        const e = this.options.grid,
            i = this.ctx,
            n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let o, r;
        const a = (c, l, h) => {
            !h.width || !h.color || (i.save(), i.lineWidth = h.width, i.strokeStyle = h.color, i.setLineDash(h.borderDash || []), i.lineDashOffset = h.borderDashOffset, i.beginPath(), i.moveTo(c.x, c.y), i.lineTo(l.x, l.y), i.stroke(), i.restore())
        };
        if (e.display)
            for (o = 0, r = n.length; o < r; ++o) {
                const c = n[o];
                e.drawOnChartArea && a({
                    x: c.x1,
                    y: c.y1
                }, {
                    x: c.x2,
                    y: c.y2
                }, c), e.drawTicks && a({
                    x: c.tx1,
                    y: c.ty1
                }, {
                    x: c.tx2,
                    y: c.ty2
                }, {
                    color: c.tickColor,
                    width: c.tickWidth,
                    borderDash: c.tickBorderDash,
                    borderDashOffset: c.tickBorderDashOffset
                })
            }
    }
    drawBorder() {
        const {
            chart: t,
            ctx: e,
            options: {
                border: i,
                grid: n
            }
        } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
        if (!r) return;
        const a = n.setContext(this.getContext(0)).lineWidth,
            c = this._borderValue;
        let l, h, d, f;
        this.isHorizontal() ? (l = ct(t, this.left, r) - r / 2, h = ct(t, this.right, a) + a / 2, d = f = c) : (d = ct(t, this.top, r) - r / 2, f = ct(t, this.bottom, a) + a / 2, l = h = c), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(l, d), e.lineTo(h, f), e.stroke(), e.restore()
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const i = this.ctx,
            n = this._computeLabelArea();
        n && Mi(i, n);
        const o = this.getLabelItems(t);
        for (const r of o) {
            const a = r.options,
                c = r.font,
                l = r.label,
                h = r.textOffset;
            vs(i, l, 0, h, c, a)
        }
        n && wi(i)
    }
    drawTitle() {
        const {
            ctx: t,
            options: {
                position: e,
                title: i,
                reverse: n
            }
        } = this;
        if (!i.display) return;
        const o = Fe(i.font),
            r = $t(i.padding),
            a = i.align;
        let c = o.lineHeight / 2;
        e === "bottom" || e === "center" || S(e) ? (c += r.bottom, B(i.text) && (c += o.lineHeight * (i.text.length - 1))) : c += r.top;
        const {
            titleX: l,
            titleY: h,
            maxWidth: d,
            rotation: f
        } = Qr(this, c, e, a);
        vs(t, i.text, 0, 0, o, {
            color: i.color,
            maxWidth: d,
            rotation: f,
            textAlign: Zr(a, e, n),
            textBaseline: "middle",
            translation: [l, h]
        })
    }
    draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
    }
    _layers() {
        const t = this.options,
            e = t.ticks && t.ticks.z || 0,
            i = P(t.grid && t.grid.z, -1),
            n = P(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== wt.prototype.draw ? [{
            z: e,
            draw: o => {
                this.draw(o)
            }
        }] : [{
            z: i,
            draw: o => {
                this.drawBackground(), this.drawGrid(o), this.drawTitle()
            }
        }, {
            z: n,
            draw: () => {
                this.drawBorder()
            }
        }, {
            z: e,
            draw: o => {
                this.drawLabels(o)
            }
        }]
    }
    getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            n = [];
        let o, r;
        for (o = 0, r = e.length; o < r; ++o) {
            const a = e[o];
            a[i] === this.id && (!t || a.type === t) && n.push(a)
        }
        return n
    }
    _resolveTickFontOptions(t) {
        const e = this.options.ticks.setContext(this.getContext(t));
        return Fe(e.font)
    }
    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t
    }
}
class ae {
    constructor(t, e, i) {
        this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
    }
    register(t) {
        const e = Object.getPrototypeOf(t);
        let i;
        ea(e) && (i = this.register(e));
        const n = this.items,
            o = t.id,
            r = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in n || (n[o] = t, Jr(t, r, i), this.override && R.override(t.id, t.overrides)), r
    }
    get(t) {
        return this.items[t]
    }
    unregister(t) {
        const e = this.items,
            i = t.id,
            n = this.scope;
        i in e && delete e[i], n && i in R[n] && (delete R[n][i], this.override && delete pt[i])
    }
}

function Jr(s, t, e) {
    const i = Vt(Object.create(null), [e ? R.get(e) : {}, R.get(t), s.defaults]);
    R.set(t, i), s.defaultRoutes && ta(t, s.defaultRoutes), s.descriptors && R.describe(t, s.descriptors)
}

function ta(s, t) {
    Object.keys(t).forEach(e => {
        const i = e.split("."),
            n = i.pop(),
            o = [s].concat(i).join("."),
            r = t[e].split("."),
            a = r.pop(),
            c = r.join(".");
        R.route(o, n, c, a)
    })
}

function ea(s) {
    return "id" in s && "defaults" in s
}
class sa {
    constructor() {
        this.controllers = new ae(Bt, "datasets", !0), this.elements = new ae(kt, "elements"), this.plugins = new ae(Object, "plugins"), this.scales = new ae(wt, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
    }
    add(...t) {
        this._each("register", t)
    }
    remove(...t) {
        this._each("unregister", t)
    }
    addControllers(...t) {
        this._each("register", t, this.controllers)
    }
    addElements(...t) {
        this._each("register", t, this.elements)
    }
    addPlugins(...t) {
        this._each("register", t, this.plugins)
    }
    addScales(...t) {
        this._each("register", t, this.scales)
    }
    getController(t) {
        return this._get(t, this.controllers, "controller")
    }
    getElement(t) {
        return this._get(t, this.elements, "element")
    }
    getPlugin(t) {
        return this._get(t, this.plugins, "plugin")
    }
    getScale(t) {
        return this._get(t, this.scales, "scale")
    }
    removeControllers(...t) {
        this._each("unregister", t, this.controllers)
    }
    removeElements(...t) {
        this._each("unregister", t, this.elements)
    }
    removePlugins(...t) {
        this._each("unregister", t, this.plugins)
    }
    removeScales(...t) {
        this._each("unregister", t, this.scales)
    }
    _each(t, e, i) {
        [...e].forEach(n => {
            const o = i || this._getRegistryForType(n);
            i || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : F(n, r => {
                const a = i || this._getRegistryForType(r);
                this._exec(t, a, r)
            })
        })
    }
    _exec(t, e, i) {
        const n = Ye(t);
        L(i["before" + n], [], i), e[t](i), L(i["after" + n], [], i)
    }
    _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e];
            if (i.isForType(t)) return i
        }
        return this.plugins
    }
    _get(t, e, i) {
        const n = e.get(t);
        if (n === void 0) throw new Error('"' + t + '" is not a registered ' + i + ".");
        return n
    }
}
var K = new sa;
class ia {
    constructor() {
        this._init = []
    }
    notify(t, e, i, n) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        const o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            r = this._notify(o, t, e, i);
        return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r
    }
    _notify(t, e, i, n) {
        n = n || {};
        for (const o of t) {
            const r = o.plugin,
                a = r[i],
                c = [e, n, o.options];
            if (L(a, c, r) === !1 && n.cancelable) return !1
        }
        return !0
    }
    invalidate() {
        C(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        const e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e
    }
    _createDescriptors(t, e) {
        const i = t && t.config,
            n = P(i.options && i.options.plugins, {}),
            o = na(i);
        return n === !1 && !e ? [] : ra(t, o, n, e)
    }
    _notifyStateChanges(t) {
        const e = this._oldCache || [],
            i = this._cache,
            n = (o, r) => o.filter(a => !r.some(c => a.plugin.id === c.plugin.id));
        this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start")
    }
}

function na(s) {
    const t = {},
        e = [],
        i = Object.keys(K.plugins.items);
    for (let o = 0; o < i.length; o++) e.push(K.getPlugin(i[o]));
    const n = s.plugins || [];
    for (let o = 0; o < n.length; o++) {
        const r = n[o];
        e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0)
    }
    return {
        plugins: e,
        localIds: t
    }
}

function oa(s, t) {
    return !t && s === !1 ? null : s === !0 ? {} : s
}

function ra(s, {
    plugins: t,
    localIds: e
}, i, n) {
    const o = [],
        r = s.getContext();
    for (const a of t) {
        const c = a.id,
            l = oa(i[c], n);
        l !== null && o.push({
            plugin: a,
            options: aa(s.config, {
                plugin: a,
                local: e[c]
            }, l, r)
        })
    }
    return o
}

function aa(s, {
    plugin: t,
    local: e
}, i, n) {
    const o = s.pluginScopeKeys(t),
        r = s.getOptionScopes(i, o);
    return e && t.defaults && r.push(t.defaults), s.createResolver(r, n, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}

function Ne(s, t) {
    const e = R.datasets[s] || {};
    return ((t.datasets || {})[s] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
}

function ca(s, t) {
    let e = s;
    return s === "_index_" ? e = t : s === "_value_" && (e = t === "x" ? "y" : "x"), e
}

function la(s, t) {
    return s === t ? "_index_" : "_value_"
}

function Us(s) {
    if (s === "x" || s === "y" || s === "r") return s
}

function ha(s) {
    if (s === "top" || s === "bottom") return "x";
    if (s === "left" || s === "right") return "y"
}

function Be(s, ...t) {
    if (Us(s)) return s;
    for (const e of t) {
        const i = e.axis || ha(e.position) || s.length > 1 && Us(s[0].toLowerCase());
        if (i) return i
    }
    throw new Error(`Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`)
}

function Ys(s, t, e) {
    if (e[t + "AxisID"] === s) return {
        axis: t
    }
}

function da(s, t) {
    if (t.data && t.data.datasets) {
        const e = t.data.datasets.filter(i => i.xAxisID === s || i.yAxisID === s);
        if (e.length) return Ys(s, "x", e[0]) || Ys(s, "y", e[0])
    }
    return {}
}

function fa(s, t) {
    const e = pt[s.type] || {
            scales: {}
        },
        i = t.scales || {},
        n = Ne(s.type, t),
        o = Object.create(null);
    return Object.keys(i).forEach(r => {
        const a = i[r];
        if (!S(a)) return console.error(`Invalid scale configuration for scale: ${r}`);
        if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
        const c = Be(r, a, da(r, s), R.scales[a.type]),
            l = la(c, n),
            h = e.scales || {};
        o[r] = zt(Object.create(null), [{
            axis: c
        }, a, h[c], h[l]])
    }), s.data.datasets.forEach(r => {
        const a = r.type || s.type,
            c = r.indexAxis || Ne(a, t),
            h = (pt[a] || {}).scales || {};
        Object.keys(h).forEach(d => {
            const f = ca(d, c),
                u = r[f + "AxisID"] || f;
            o[u] = o[u] || Object.create(null), zt(o[u], [{
                axis: f
            }, i[u], h[d]])
        })
    }), Object.keys(o).forEach(r => {
        const a = o[r];
        zt(a, [R.scales[a.type], R.scale])
    }), o
}

function Fi(s) {
    const t = s.options || (s.options = {});
    t.plugins = P(t.plugins, {}), t.scales = fa(s, t)
}

function Ni(s) {
    return s = s || {}, s.datasets = s.datasets || [], s.labels = s.labels || [], s
}

function ua(s) {
    return s = s || {}, s.data = Ni(s.data), Fi(s), s
}
const Ks = new Map,
    Bi = new Set;

function ce(s, t) {
    let e = Ks.get(s);
    return e || (e = t(), Ks.set(s, e), Bi.add(e)), e
}
const It = (s, t, e) => {
    const i = pe(t, e);
    i !== void 0 && s.add(i)
};
class ga {
    constructor(t) {
        this._config = ua(t), this._scopeCache = new Map, this._resolverCache = new Map
    }
    get platform() {
        return this._config.platform
    }
    get type() {
        return this._config.type
    }
    set type(t) {
        this._config.type = t
    }
    get data() {
        return this._config.data
    }
    set data(t) {
        this._config.data = Ni(t)
    }
    get options() {
        return this._config.options
    }
    set options(t) {
        this._config.options = t
    }
    get plugins() {
        return this._config.plugins
    }
    update() {
        const t = this._config;
        this.clearCache(), Fi(t)
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear()
    }
    datasetScopeKeys(t) {
        return ce(t, () => [
            [`datasets.${t}`, ""]
        ])
    }
    datasetAnimationScopeKeys(t, e) {
        return ce(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ""]
        ])
    }
    datasetElementScopeKeys(t, e) {
        return ce(`${t}-${e}`, () => [
            [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
        ])
    }
    pluginScopeKeys(t) {
        const e = t.id,
            i = this.type;
        return ce(`${i}-plugin-${e}`, () => [
            [`plugins.${e}`, ...t.additionalOptionScopes || []]
        ])
    }
    _cachedScopes(t, e) {
        const i = this._scopeCache;
        let n = i.get(t);
        return (!n || e) && (n = new Map, i.set(t, n)), n
    }
    getOptionScopes(t, e, i) {
        const {
            options: n,
            type: o
        } = this, r = this._cachedScopes(t, i), a = r.get(e);
        if (a) return a;
        const c = new Set;
        e.forEach(h => {
            t && (c.add(t), h.forEach(d => It(c, t, d))), h.forEach(d => It(c, n, d)), h.forEach(d => It(c, pt[o] || {}, d)), h.forEach(d => It(c, R, d)), h.forEach(d => It(c, Ae, d))
        });
        const l = Array.from(c);
        return l.length === 0 && l.push(Object.create(null)), Bi.has(e) && r.set(e, l), l
    }
    chartOptionScopes() {
        const {
            options: t,
            type: e
        } = this;
        return [t, pt[e] || {}, R.datasets[e] || {}, {
            type: e
        }, R, Ae]
    }
    resolveNamedOptions(t, e, i, n = [""]) {
        const o = {
                $shared: !0
            },
            {
                resolver: r,
                subPrefixes: a
            } = Xs(this._resolverCache, t, n);
        let c = r;
        if (ma(r, e)) {
            o.$shared = !1, i = nt(i) ? i() : i;
            const l = this.createResolver(t, i, a);
            c = yt(r, i, l)
        }
        for (const l of e) o[l] = c[l];
        return o
    }
    createResolver(t, e, i = [""], n) {
        const {
            resolver: o
        } = Xs(this._resolverCache, t, i);
        return S(e) ? yt(o, e, void 0, n) : o
    }
}

function Xs(s, t, e) {
    let i = s.get(t);
    i || (i = new Map, s.set(t, i));
    const n = e.join();
    let o = i.get(n);
    return o || (o = {
        resolver: qe(t, e),
        subPrefixes: e.filter(a => !a.toLowerCase().includes("hover"))
    }, i.set(n, o)), o
}
const pa = s => S(s) && Object.getOwnPropertyNames(s).some(t => nt(s[t]));

function ma(s, t) {
    const {
        isScriptable: e,
        isIndexable: i
    } = Si(s);
    for (const n of t) {
        const o = e(n),
            r = i(n),
            a = (r || o) && s[n];
        if (o && (nt(a) || pa(a)) || r && B(a)) return !0
    }
    return !1
}
var _a = "4.5.0";
const ba = ["top", "bottom", "left", "right", "chartArea"];

function qs(s, t) {
    return s === "top" || s === "bottom" || ba.indexOf(s) === -1 && t === "x"
}

function Gs(s, t) {
    return function(e, i) {
        return e[s] === i[s] ? e[t] - i[t] : e[s] - i[s]
    }
}

function Zs(s) {
    const t = s.chart,
        e = t.options.animation;
    t.notifyPlugins("afterRender"), L(e && e.onComplete, [s], t)
}

function xa(s) {
    const t = s.chart,
        e = t.options.animation;
    L(e && e.onProgress, [s], t)
}

function ji(s) {
    return Qe() && typeof s == "string" ? s = document.getElementById(s) : s && s.length && (s = s[0]), s && s.canvas && (s = s.canvas), s
}
const fe = {},
    Qs = s => {
        const t = ji(s);
        return Object.values(fe).filter(e => e.canvas === t).pop()
    };

function ya(s, t, e) {
    const i = Object.keys(s);
    for (const n of i) {
        const o = +n;
        if (o >= t) {
            const r = s[n];
            delete s[n], (e > 0 || o > t) && (s[o + e] = r)
        }
    }
}

function va(s, t, e, i) {
    return !e || s.type === "mouseout" ? null : i ? t : s
}
var J;
let Me = (J = class {
    static register(...t) {
        K.add(...t), Js()
    }
    static unregister(...t) {
        K.remove(...t), Js()
    }
    constructor(t, e) {
        const i = this.config = new ga(e),
            n = ji(t),
            o = Qs(n);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
        const r = i.createResolver(i.chartOptionScopes(), this.getContext());
        this.platform = new(i.platform || Br(n)), this.platform.updateConfig(i);
        const a = this.platform.acquireContext(n, r.aspectRatio),
            c = a && a.canvas,
            l = c && c.height,
            h = c && c.width;
        if (this.id = yn(), this.ctx = a, this.canvas = c, this.width = h, this.height = l, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ia, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Hn(d => this.update(d), r.resizeDelay || 0), this._dataChanges = [], fe[this.id] = this, !a || !c) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        q.listen(this, "complete", Zs), q.listen(this, "progress", xa), this._initialize(), this.attached && this.update()
    }
    get aspectRatio() {
        const {
            options: {
                aspectRatio: t,
                maintainAspectRatio: e
            },
            width: i,
            height: n,
            _aspectRatio: o
        } = this;
        return C(t) ? e && o ? o : n ? i / n : null : t
    }
    get data() {
        return this.config.data
    }
    set data(t) {
        this.config.data = t
    }
    get options() {
        return this._options
    }
    set options(t) {
        this.config.options = t
    }
    get registry() {
        return K
    }
    _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ws(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
    }
    clear() {
        return ys(this.canvas, this.ctx), this
    }
    stop() {
        return q.stop(this), this
    }
    resize(t, e) {
        q.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
        } : this._resize(t, e)
    }
    _resize(t, e) {
        const i = this.options,
            n = this.canvas,
            o = i.maintainAspectRatio && this.aspectRatio,
            r = this.platform.getMaximumSize(n, t, e, o),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            c = this.width ? "resize" : "attach";
        this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ws(this, a, !0) && (this.notifyPlugins("resize", {
            size: r
        }), L(i.onResize, [this, r], this), this.attached && this._doResize(c) && this.render())
    }
    ensureScalesHaveIDs() {
        const e = this.options.scales || {};
        F(e, (i, n) => {
            i.id = n
        })
    }
    buildOrUpdateScales() {
        const t = this.options,
            e = t.scales,
            i = this.scales,
            n = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
        let o = [];
        e && (o = o.concat(Object.keys(e).map(r => {
            const a = e[r],
                c = Be(r, a),
                l = c === "r",
                h = c === "x";
            return {
                options: a,
                dposition: l ? "chartArea" : h ? "bottom" : "left",
                dtype: l ? "radialLinear" : h ? "category" : "linear"
            }
        }))), F(o, r => {
            const a = r.options,
                c = a.id,
                l = Be(c, a),
                h = P(a.type, r.dtype);
            (a.position === void 0 || qs(a.position, l) !== qs(r.dposition)) && (a.position = r.dposition), n[c] = !0;
            let d = null;
            if (c in i && i[c].type === h) d = i[c];
            else {
                const f = K.getScale(h);
                d = new f({
                    id: c,
                    type: h,
                    ctx: this.ctx,
                    chart: this
                }), i[d.id] = d
            }
            d.init(a, t)
        }), F(n, (r, a) => {
            r || delete i[a]
        }), F(i, r => {
            oe.configure(this, r, r.options), oe.addBox(this, r)
        })
    }
    _updateMetasets() {
        const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;
        if (t.sort((n, o) => n.index - o.index), i > e) {
            for (let n = e; n < i; ++n) this._destroyDatasetMeta(n);
            t.splice(e, i - e)
        }
        this._sortedMetasets = t.slice(0).sort(Gs("order", "index"))
    }
    _removeUnreferencedMetasets() {
        const {
            _metasets: t,
            data: {
                datasets: e
            }
        } = this;
        t.length > e.length && delete this._stacks, t.forEach((i, n) => {
            e.filter(o => o === i._dataset).length === 0 && this._destroyDatasetMeta(n)
        })
    }
    buildOrUpdateControllers() {
        const t = [],
            e = this.data.datasets;
        let i, n;
        for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
            const o = e[i];
            let r = this.getDatasetMeta(i);
            const a = o.type || this.config.type;
            if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Ne(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller) r.controller.updateIndex(i), r.controller.linkScales();
            else {
                const c = K.getController(a),
                    {
                        datasetElementType: l,
                        dataElementType: h
                    } = R.datasets[a];
                Object.assign(c, {
                    dataElementType: K.getElement(h),
                    datasetElementType: l && K.getElement(l)
                }), r.controller = new c(this, i), t.push(r.controller)
            }
        }
        return this._updateMetasets(), t
    }
    _resetElements() {
        F(this.data.datasets, (t, e) => {
            this.getDatasetMeta(e).controller.reset()
        }, this)
    }
    reset() {
        this._resetElements(), this.notifyPlugins("reset")
    }
    update(t) {
        const e = this.config;
        e.update();
        const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
            n = this._animationsDisabled = !i.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
                mode: t,
                cancelable: !0
            }) === !1) return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let r = 0;
        for (let l = 0, h = this.data.datasets.length; l < h; l++) {
            const {
                controller: d
            } = this.getDatasetMeta(l), f = !n && o.indexOf(d) === -1;
            d.buildOrUpdateElements(f), r = Math.max(+d.getMaxOverflow(), r)
        }
        r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), n || F(o, l => {
            l.reset()
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
            mode: t
        }), this._layers.sort(Gs("z", "_idx"));
        const {
            _active: a,
            _lastEvent: c
        } = this;
        c ? this._eventHandler(c, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
    }
    _updateScales() {
        F(this.scales, t => {
            oe.removeBox(this, t)
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
    }
    _checkEventBindings() {
        const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
        (!cs(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
        const {
            _hiddenIndices: t
        } = this, e = this._getUniformDataChanges() || [];
        for (const {
                method: i,
                start: n,
                count: o
            }
            of e) {
            const r = i === "_removeElements" ? -o : o;
            ya(t, n, r)
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
            i = o => new Set(t.filter(r => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))),
            n = i(0);
        for (let o = 1; o < e; o++)
            if (!cs(n, i(o))) return;
        return Array.from(n).map(o => o.split(",")).map(o => ({
            method: o[1],
            start: +o[2],
            count: +o[3]
        }))
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {
                cancelable: !0
            }) === !1) return;
        oe.update(this, this.width, this.height, t);
        const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
        this._layers = [], F(this.boxes, n => {
            i && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()))
        }, this), this._layers.forEach((n, o) => {
            n._idx = o
        }), this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0
            }) !== !1) {
            for (let e = 0, i = this.data.datasets.length; e < i; ++e) this.getDatasetMeta(e).controller.configure();
            for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, nt(t) ? t({
                datasetIndex: e
            }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: t
            })
        }
    }
    _updateDataset(t, e) {
        const i = this.getDatasetMeta(t),
            n = {
                meta: i,
                index: t,
                mode: e,
                cancelable: !0
            };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (i.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (q.has(this) ? this.attached && !q.running(this) && q.start(this) : (this.draw(), Zs({
            chart: this
        })))
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const {
                width: i,
                height: n
            } = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null, this._resize(i, n)
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
                cancelable: !0
            }) === !1) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
            i = [];
        let n, o;
        for (n = 0, o = e.length; n < o; ++n) {
            const r = e[n];
            (!t || r.visible) && i.push(r)
        }
        return i
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
                cancelable: !0
            }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t) {
        const e = this.ctx,
            i = {
                meta: t,
                index: t.index,
                cancelable: !0
            },
            n = Zo(this, t);
        this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (n && Mi(e, n), t.controller.draw(), n && wi(e), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i))
    }
    isPointInArea(t) {
        return Wt(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, e, i, n) {
        const o = br.modes[e];
        return typeof o == "function" ? o(this, t, i, n) : []
    }
    getDatasetMeta(t) {
        const e = this.data.datasets[t],
            i = this._metasets;
        let n = i.filter(o => o && o._dataset === e).pop();
        return n || (n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
        }, i.push(n)), n
    }
    getContext() {
        return this.$context || (this.$context = Mt(null, {
            chart: this,
            type: "chart"
        }))
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const i = this.getDatasetMeta(t);
        return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden
    }
    setDatasetVisibility(t, e) {
        const i = this.getDatasetMeta(t);
        i.hidden = !e
    }
    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
        return !this._hiddenIndices[t]
    }
    _updateVisibility(t, e, i) {
        const n = i ? "show" : "hide",
            o = this.getDatasetMeta(t),
            r = o.controller._resolveAnimations(void 0, n);
        me(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
            visible: i
        }), this.update(a => a.datasetIndex === t ? n : void 0))
    }
    hide(t, e) {
        this._updateVisibility(t, e, !1)
    }
    show(t, e) {
        this._updateVisibility(t, e, !0)
    }
    _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t]
    }
    _stop() {
        let t, e;
        for (this.stop(), q.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const {
            canvas: t,
            ctx: e
        } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ys(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete fe[this.id], this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t)
    }
    bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }
    bindUserEvents() {
        const t = this._listeners,
            e = this.platform,
            i = (o, r) => {
                e.addEventListener(this, o, r), t[o] = r
            },
            n = (o, r, a) => {
                o.offsetX = r, o.offsetY = a, this._eventHandler(o)
            };
        F(this.options.events, o => i(o, n))
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
            e = this.platform,
            i = (c, l) => {
                e.addEventListener(this, c, l), t[c] = l
            },
            n = (c, l) => {
                t[c] && (e.removeEventListener(this, c, l), delete t[c])
            },
            o = (c, l) => {
                this.canvas && this.resize(c, l)
            };
        let r;
        const a = () => {
            n("attach", a), this.attached = !0, this.resize(), i("resize", o), i("detach", r)
        };
        r = () => {
            this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), i("attach", a)
        }, e.isAttached(this.canvas) ? a() : r()
    }
    unbindEvents() {
        F(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._listeners = {}, F(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._responsiveListeners = void 0
    }
    updateHoverStyle(t, e, i) {
        const n = i ? "set" : "remove";
        let o, r, a, c;
        for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, c = t.length; a < c; ++a) {
            r = t[a];
            const l = r && this.getDatasetMeta(r.datasetIndex).controller;
            l && l[n + "HoverStyle"](r.element, r.datasetIndex, r.index)
        }
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t) {
        const e = this._active || [],
            i = t.map(({
                datasetIndex: o,
                index: r
            }) => {
                const a = this.getDatasetMeta(o);
                if (!a) throw new Error("No dataset found at index " + o);
                return {
                    datasetIndex: o,
                    element: a.data[r],
                    index: r
                }
            });
        !rs(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
    }
    notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i)
    }
    isPluginEnabled(t) {
        return this._plugins._cache.filter(e => e.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, e, i) {
        const n = this.options.hover,
            o = (c, l) => c.filter(h => !l.some(d => h.datasetIndex === d.datasetIndex && h.index === d.index)),
            r = o(e, t),
            a = i ? t : o(t, e);
        r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0)
    }
    _eventHandler(t, e) {
        const i = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t)
            },
            n = r => (r.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", i, n) === !1) return;
        const o = this._handleEvent(t, e, i.inChartArea);
        return i.cancelable = !1, this.notifyPlugins("afterEvent", i, n), (o || i.changed) && this.render(), this
    }
    _handleEvent(t, e, i) {
        const {
            _active: n = [],
            options: o
        } = this, r = e, a = this._getActiveElements(t, n, i, r), c = On(t), l = va(t, this._lastEvent, i, c);
        i && (this._lastEvent = null, L(o.onHover, [t, a, this], this), c && L(o.onClick, [t, a, this], this));
        const h = !rs(a, n);
        return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = l, h
    }
    _getActiveElements(t, e, i, n) {
        if (t.type === "mouseout") return [];
        if (!i) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n)
    }
}, k(J, "defaults", R), k(J, "instances", fe), k(J, "overrides", pt), k(J, "registry", K), k(J, "version", _a), k(J, "getChart", Qs), J);

function Js() {
    return F(Me.instances, s => s._plugins.invalidate())
}

function Vi(s, t, e = t) {
    s.lineCap = P(e.borderCapStyle, t.borderCapStyle), s.setLineDash(P(e.borderDash, t.borderDash)), s.lineDashOffset = P(e.borderDashOffset, t.borderDashOffset), s.lineJoin = P(e.borderJoinStyle, t.borderJoinStyle), s.lineWidth = P(e.borderWidth, t.borderWidth), s.strokeStyle = P(e.borderColor, t.borderColor)
}

function ka(s, t, e) {
    s.lineTo(e.x, e.y)
}

function Ma(s) {
    return s.stepped ? no : s.tension || s.cubicInterpolationMode === "monotone" ? oo : ka
}

function Hi(s, t, e = {}) {
    const i = s.length,
        {
            start: n = 0,
            end: o = i - 1
        } = e,
        {
            start: r,
            end: a
        } = t,
        c = Math.max(n, r),
        l = Math.min(o, a),
        h = n < r && o < r || n > a && o > a;
    return {
        count: i,
        start: c,
        loop: t.loop,
        ilen: l < c && !h ? i + l - c : l - c
    }
}

function wa(s, t, e, i) {
    const {
        points: n,
        options: o
    } = t, {
        count: r,
        start: a,
        loop: c,
        ilen: l
    } = Hi(n, e, i), h = Ma(o);
    let {
        move: d = !0,
        reverse: f
    } = i || {}, u, p, m;
    for (u = 0; u <= l; ++u) p = n[(a + (f ? l - u : u)) % r], !p.skip && (d ? (s.moveTo(p.x, p.y), d = !1) : h(s, m, p, f, o.stepped), m = p);
    return c && (p = n[(a + (f ? l : 0)) % r], h(s, m, p, f, o.stepped)), !!c
}

function Sa(s, t, e, i) {
    const n = t.points,
        {
            count: o,
            start: r,
            ilen: a
        } = Hi(n, e, i),
        {
            move: c = !0,
            reverse: l
        } = i || {};
    let h = 0,
        d = 0,
        f, u, p, m, g, _;
    const x = D => (r + (l ? a - D : D)) % o,
        O = () => {
            m !== g && (s.lineTo(h, g), s.lineTo(h, m), s.lineTo(h, _))
        };
    for (c && (u = n[x(0)], s.moveTo(u.x, u.y)), f = 0; f <= a; ++f) {
        if (u = n[x(f)], u.skip) continue;
        const D = u.x,
            b = u.y,
            M = D | 0;
        M === p ? (b < m ? m = b : b > g && (g = b), h = (d * h + D) / ++d) : (O(), s.lineTo(D, b), p = M, d = 0, m = g = b), _ = b
    }
    O()
}

function je(s) {
    const t = s.options,
        e = t.borderDash && t.borderDash.length;
    return !s._decimated && !s._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Sa : wa
}

function Oa(s) {
    return s.stepped ? jo : s.tension || s.cubicInterpolationMode === "monotone" ? Vo : dt
}

function Da(s, t, e, i) {
    let n = t._path;
    n || (n = t._path = new Path2D, t.path(n, e, i) && n.closePath()), Vi(s, t.options), s.stroke(n)
}

function Pa(s, t, e, i) {
    const {
        segments: n,
        options: o
    } = t, r = je(t);
    for (const a of n) Vi(s, o, a.style), s.beginPath(), r(s, t, a, {
        start: e,
        end: e + i - 1
    }) && s.closePath(), s.stroke()
}
const Ca = typeof Path2D == "function";

function Ta(s, t, e, i) {
    Ca && !t.options.segment ? Da(s, t, e, i) : Pa(s, t, e, i)
}
class Rt extends kt {
    constructor(t) {
        super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
    }
    updateControlPoints(t, e) {
        const i = this.options;
        if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
            const n = i.spanGaps ? this._loop : this._fullLoop;
            Eo(this._points, i, t, n, e), this._pointsUpdated = !0
        }
    }
    set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
    }
    get points() {
        return this._points
    }
    get segments() {
        return this._segments || (this._segments = Ko(this, this.options.segment))
    }
    first() {
        const t = this.segments,
            e = this.points;
        return t.length && e[t[0].start]
    }
    last() {
        const t = this.segments,
            e = this.points,
            i = t.length;
        return i && e[t[i - 1].end]
    }
    interpolate(t, e) {
        const i = this.options,
            n = t[e],
            o = this.points,
            r = $o(this, {
                property: e,
                start: n,
                end: n
            });
        if (!r.length) return;
        const a = [],
            c = Oa(i);
        let l, h;
        for (l = 0, h = r.length; l < h; ++l) {
            const {
                start: d,
                end: f
            } = r[l], u = o[d], p = o[f];
            if (u === p) {
                a.push(u);
                continue
            }
            const m = Math.abs((n - u[e]) / (p[e] - u[e])),
                g = c(u, p, m, i.stepped);
            g[e] = t[e], a.push(g)
        }
        return a.length === 1 ? a[0] : a
    }
    pathSegment(t, e, i) {
        return je(this)(t, this, e, i)
    }
    path(t, e, i) {
        const n = this.segments,
            o = je(this);
        let r = this._loop;
        e = e || 0, i = i || this.points.length - e;
        for (const a of n) r &= o(t, this, a, {
            start: e,
            end: e + i - 1
        });
        return !!r
    }
    draw(t, e, i, n) {
        const o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), Ta(t, this, i, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
    }
}
k(Rt, "id", "line"), k(Rt, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
}), k(Rt, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
}), k(Rt, "descriptors", {
    _scriptable: !0,
    _indexable: t => t !== "borderDash" && t !== "fill"
});

function ti(s, t, e, i) {
    const n = s.options,
        {
            [e]: o
        } = s.getProps([e], i);
    return Math.abs(t - o) < n.radius + n.hitRadius
}
class ue extends kt {
    constructor(e) {
        super();
        k(this, "parsed");
        k(this, "skip");
        k(this, "stop");
        this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e)
    }
    inRange(e, i, n) {
        const o = this.options,
            {
                x: r,
                y: a
            } = this.getProps(["x", "y"], n);
        return Math.pow(e - r, 2) + Math.pow(i - a, 2) < Math.pow(o.hitRadius + o.radius, 2)
    }
    inXRange(e, i) {
        return ti(this, e, "x", i)
    }
    inYRange(e, i) {
        return ti(this, e, "y", i)
    }
    getCenterPoint(e) {
        const {
            x: i,
            y: n
        } = this.getProps(["x", "y"], e);
        return {
            x: i,
            y: n
        }
    }
    size(e) {
        e = e || this.options || {};
        let i = e.radius || 0;
        i = Math.max(i, i && e.hoverRadius || 0);
        const n = i && e.borderWidth || 0;
        return (i + n) * 2
    }
    draw(e, i) {
        const n = this.options;
        this.skip || n.radius < .1 || !Wt(this, i, this.size(n) / 2) || (e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.fillStyle = n.backgroundColor, so(e, n, this.x, this.y))
    }
    getRange() {
        const e = this.options || {};
        return e.radius + e.hitRadius
    }
}
k(ue, "id", "point"), k(ue, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
}), k(ue, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
});
const Ia = (s, t, e, i) => (typeof t == "string" ? (e = s.push(t) - 1, i.unshift({
    index: e,
    label: t
})) : isNaN(t) && (e = null), e);

function Ea(s, t, e, i) {
    const n = s.indexOf(t);
    if (n === -1) return Ia(s, t, e, i);
    const o = s.lastIndexOf(t);
    return n !== o ? e : n
}
const La = (s, t) => s === null ? null : X(Math.round(s), 0, t);

function ei(s) {
    const t = this.getLabels();
    return s >= 0 && s < t.length ? t[s] : s
}
class Ve extends wt {
    constructor(t) {
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
    }
    init(t) {
        const e = this._addedLabels;
        if (e.length) {
            const i = this.getLabels();
            for (const {
                    index: n,
                    label: o
                }
                of e) i[n] === o && i.splice(n, 1);
            this._addedLabels = []
        }
        super.init(t)
    }
    parse(t, e) {
        if (C(t)) return null;
        const i = this.getLabels();
        return e = isFinite(e) && i[e] === t ? e : Ea(i, t, P(e, t), this._addedLabels), La(e, i.length - 1)
    }
    determineDataLimits() {
        const {
            minDefined: t,
            maxDefined: e
        } = this.getUserBounds();
        let {
            min: i,
            max: n
        } = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (i = 0), e || (n = this.getLabels().length - 1)), this.min = i, this.max = n
    }
    buildTicks() {
        const t = this.min,
            e = this.max,
            i = this.options.offset,
            n = [];
        let o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
        for (let r = t; r <= e; r++) n.push({
            value: r
        });
        return n
    }
    getLabelForValue(t) {
        return ei.call(this, t)
    }
    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
    }
    getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }
    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
    }
    getBasePixel() {
        return this.bottom
    }
}
k(Ve, "id", "category"), k(Ve, "defaults", {
    ticks: {
        callback: ei
    }
});

function Ra(s, t) {
    const e = [],
        {
            bounds: n,
            step: o,
            min: r,
            max: a,
            precision: c,
            count: l,
            maxTicks: h,
            maxDigits: d,
            includeBounds: f
        } = s,
        u = o || 1,
        p = h - 1,
        {
            min: m,
            max: g
        } = t,
        _ = !C(r),
        x = !C(a),
        O = !C(l),
        D = (g - m) / (d + 1);
    let b = hs((g - m) / p / u) * u,
        M, y, v, w;
    if (b < 1e-14 && !_ && !x) return [{
        value: m
    }, {
        value: g
    }];
    w = Math.ceil(g / b) - Math.floor(m / b), w > p && (b = hs(w * b / p / u) * u), C(c) || (M = Math.pow(10, c), b = Math.ceil(b * M) / M), n === "ticks" ? (y = Math.floor(m / b) * b, v = Math.ceil(g / b) * b) : (y = m, v = g), _ && x && o && In((a - r) / o, b / 1e3) ? (w = Math.round(Math.min((a - r) / b, h)), b = (a - r) / w, y = r, v = a) : O ? (y = _ ? r : y, v = x ? a : v, w = l - 1, b = (v - y) / w) : (w = (v - y) / b, At(w, Math.round(w), b / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
    const T = Math.max(ds(b), ds(y));
    M = Math.pow(10, C(c) ? T : c), y = Math.round(y * M) / M, v = Math.round(v * M) / M;
    let I = 0;
    for (_ && (f && y !== r ? (e.push({
            value: r
        }), y < r && I++, At(Math.round((y + I * b) * M) / M, r, si(r, D, s)) && I++) : y < r && I++); I < w; ++I) {
        const z = Math.round((y + I * b) * M) / M;
        if (x && z > a) break;
        e.push({
            value: z
        })
    }
    return x && f && v !== a ? e.length && At(e[e.length - 1].value, a, si(a, D, s)) ? e[e.length - 1].value = a : e.push({
        value: a
    }) : (!x || v === a) && e.push({
        value: v
    }), e
}

function si(s, t, {
    horizontal: e,
    minRotation: i
}) {
    const n = ft(i),
        o = (e ? Math.sin(n) : Math.cos(n)) || .001,
        r = .75 * t * ("" + s).length;
    return Math.min(t / o, r)
}
class za extends wt {
    constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
    }
    parse(t, e) {
        return C(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
    }
    handleTickRangeOptions() {
        const {
            beginAtZero: t
        } = this.options, {
            minDefined: e,
            maxDefined: i
        } = this.getUserBounds();
        let {
            min: n,
            max: o
        } = this;
        const r = c => n = e ? n : c,
            a = c => o = i ? o : c;
        if (t) {
            const c = xt(n),
                l = xt(o);
            c < 0 && l < 0 ? a(0) : c > 0 && l > 0 && r(0)
        }
        if (n === o) {
            let c = o === 0 ? 1 : Math.abs(o * .05);
            a(o + c), t || r(n - c)
        }
        this.min = n, this.max = o
    }
    getTickLimit() {
        const t = this.options.ticks;
        let {
            maxTicksLimit: e,
            stepSize: i
        } = t, n;
        return i ? (n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY
    }
    buildTicks() {
        const t = this.options,
            e = t.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const n = {
                maxTicks: i,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: e.includeBounds !== !1
            },
            o = this._range || this,
            r = Ra(n, o);
        return t.bounds === "ticks" && En(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r
    }
    configure() {
        const t = this.ticks;
        let e = this.min,
            i = this.max;
        if (super.configure(), this.options.offset && t.length) {
            const n = (i - e) / Math.max(t.length - 1, 1) / 2;
            e -= n, i += n
        }
        this._startValue = e, this._endValue = i, this._valueRange = i - e
    }
    getLabelForValue(t) {
        return vi(t, this.chart.options.locale, this.options.ticks.format)
    }
}
class He extends za {
    determineDataLimits() {
        const {
            min: t,
            max: e
        } = this.getMinMax(!0);
        this.min = $(t) ? t : 0, this.max = $(e) ? e : 1, this.handleTickRangeOptions()
    }
    computeTickLimit() {
        const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = ft(this.options.ticks.minRotation),
            n = (t ? Math.sin(i) : Math.cos(i)) || .001,
            o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / n))
    }
    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
    }
}
k(He, "id", "linear"), k(He, "defaults", {
    ticks: {
        callback: ki.formatters.numeric
    }
});
const we = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
        },
        second: {
            common: !0,
            size: 1e3,
            steps: 60
        },
        minute: {
            common: !0,
            size: 6e4,
            steps: 60
        },
        hour: {
            common: !0,
            size: 36e5,
            steps: 24
        },
        day: {
            common: !0,
            size: 864e5,
            steps: 30
        },
        week: {
            common: !1,
            size: 6048e5,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628e6,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
        },
        year: {
            common: !0,
            size: 3154e7
        }
    },
    j = Object.keys(we);

function ii(s, t) {
    return s - t
}

function ni(s, t) {
    if (C(t)) return null;
    const e = s._adapter,
        {
            parser: i,
            round: n,
            isoWeekday: o
        } = s._parseOpts;
    let r = t;
    return typeof i == "function" && (r = i(r)), $(r) || (r = typeof i == "string" ? e.parse(r, i) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (Ht(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r)
}

function oi(s, t, e, i) {
    const n = j.length;
    for (let o = j.indexOf(s); o < n - 1; ++o) {
        const r = we[j[o]],
            a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
        if (r.common && Math.ceil((e - t) / (a * r.size)) <= i) return j[o]
    }
    return j[n - 1]
}

function Aa(s, t, e, i, n) {
    for (let o = j.length - 1; o >= j.indexOf(e); o--) {
        const r = j[o];
        if (we[r].common && s._adapter.diff(n, i, r) >= t - 1) return r
    }
    return j[e ? j.indexOf(e) : 0]
}

function Fa(s) {
    for (let t = j.indexOf(s) + 1, e = j.length; t < e; ++t)
        if (we[j[t]].common) return j[t]
}

function ri(s, t, e) {
    if (!e) s[t] = !0;
    else if (e.length) {
        const {
            lo: i,
            hi: n
        } = Ke(e, t), o = e[i] >= t ? e[i] : e[n];
        s[o] = !0
    }
}

function Na(s, t, e, i) {
    const n = s._adapter,
        o = +n.startOf(t[0].value, i),
        r = t[t.length - 1].value;
    let a, c;
    for (a = o; a <= r; a = +n.add(a, 1, i)) c = e[a], c >= 0 && (t[c].major = !0);
    return t
}

function ai(s, t, e) {
    const i = [],
        n = {},
        o = t.length;
    let r, a;
    for (r = 0; r < o; ++r) a = t[r], n[a] = r, i.push({
        value: a,
        major: !1
    });
    return o === 0 || !e ? i : Na(s, i, n, e)
}
class ye extends wt {
    constructor(t) {
        super(t), this._cache = {
            data: [],
            labels: [],
            all: []
        }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
    }
    init(t, e = {}) {
        const i = t.time || (t.time = {}),
            n = this._adapter = new ur._date(t.adapters.date);
        n.init(e), zt(i.displayFormats, n.formats()), this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday
        }, super.init(t), this._normalized = e.normalized
    }
    parse(t, e) {
        return t === void 0 ? null : ni(this, t)
    }
    beforeLayout() {
        super.beforeLayout(), this._cache = {
            data: [],
            labels: [],
            all: []
        }
    }
    determineDataLimits() {
        const t = this.options,
            e = this._adapter,
            i = t.time.unit || "day";
        let {
            min: n,
            max: o,
            minDefined: r,
            maxDefined: a
        } = this.getUserBounds();

        function c(l) {
            !r && !isNaN(l.min) && (n = Math.min(n, l.min)), !a && !isNaN(l.max) && (o = Math.max(o, l.max))
        }(!r || !a) && (c(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && c(this.getMinMax(!1))), n = $(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i), o = $(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], i = t[t.length - 1]), {
            min: e,
            max: i
        }
    }
    buildTicks() {
        const t = this.options,
            e = t.time,
            i = t.ticks,
            n = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
        const o = this.min,
            r = this.max,
            a = Bn(n, o, r);
        return this._unit = e.unit || (i.autoSkip ? oi(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Aa(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Fa(this._unit), this.initOffsets(n), t.reverse && a.reverse(), ai(this, a, this._majorUnit)
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
    }
    initOffsets(t = []) {
        let e = 0,
            i = 0,
            n, o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        const r = t.length < 3 ? .5 : .25;
        e = X(e, 0, r), i = X(i, 0, r), this._offsets = {
            start: e,
            end: i,
            factor: 1 / (e + 1 + i)
        }
    }
    _generate() {
        const t = this._adapter,
            e = this.min,
            i = this.max,
            n = this.options,
            o = n.time,
            r = o.unit || oi(o.minUnit, e, i, this._getLabelCapacity(e)),
            a = P(n.ticks.stepSize, 1),
            c = r === "week" ? o.isoWeekday : !1,
            l = Ht(c) || c === !0,
            h = {};
        let d = e,
            f, u;
        if (l && (d = +t.startOf(d, "isoWeek", c)), d = +t.startOf(d, l ? "day" : r), t.diff(i, e, r) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + r);
        const p = n.ticks.source === "data" && this.getDataTimestamps();
        for (f = d, u = 0; f < i; f = +t.add(f, a, r), u++) ri(h, f, p);
        return (f === i || n.bounds === "ticks" || u === 1) && ri(h, f, p), Object.keys(h).sort(ii).map(m => +m)
    }
    getLabelForValue(t) {
        const e = this._adapter,
            i = this.options.time;
        return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
    }
    format(t, e) {
        const n = this.options.time.displayFormats,
            o = this._unit,
            r = e || n[o];
        return this._adapter.format(t, r)
    }
    _tickFormatFunction(t, e, i, n) {
        const o = this.options,
            r = o.ticks.callback;
        if (r) return L(r, [t, e, i], this);
        const a = o.time.displayFormats,
            c = this._unit,
            l = this._majorUnit,
            h = c && a[c],
            d = l && a[l],
            f = i[e],
            u = l && d && f && f.major;
        return this._adapter.format(t, n || (u ? d : h))
    }
    generateTickLabels(t) {
        let e, i, n;
        for (e = 0, i = t.length; e < i; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }
    getPixelForValue(t) {
        const e = this._offsets,
            i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor)
    }
    getValueForPixel(t) {
        const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min)
    }
    _getLabelSize(t) {
        const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = ft(this.isHorizontal() ? e.maxRotation : e.minRotation),
            o = Math.cos(n),
            r = Math.sin(n),
            a = this._resolveTickFontOptions(0).size;
        return {
            w: i * o + a * r,
            h: i * r + a * o
        }
    }
    _getLabelCapacity(t) {
        const e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            o = this._tickFormatFunction(t, 0, ai(this, [t], this._majorUnit), n),
            r = this._getLabelSize(o),
            a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
        return a > 0 ? a : 1
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            e, i;
        if (t.length) return t;
        const n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
        for (e = 0, i = n.length; e < i; ++e) t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }
    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, i;
        if (t.length) return t;
        const n = this.getLabels();
        for (e = 0, i = n.length; e < i; ++e) t.push(ni(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t)
    }
    normalize(t) {
        return Vn(t.sort(ii))
    }
}
k(ye, "id", "time"), k(ye, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        callback: !1,
        major: {
            enabled: !1
        }
    }
});

function le(s, t, e) {
    let i = 0,
        n = s.length - 1,
        o, r, a, c;
    e ? (t >= s[i].pos && t <= s[n].pos && ({
        lo: i,
        hi: n
    } = ut(s, "pos", t)), {
        pos: o,
        time: a
    } = s[i], {
        pos: r,
        time: c
    } = s[n]) : (t >= s[i].time && t <= s[n].time && ({
        lo: i,
        hi: n
    } = ut(s, "time", t)), {
        time: o,
        pos: a
    } = s[i], {
        time: r,
        pos: c
    } = s[n]);
    const l = r - o;
    return l ? a + (c - a) * (t - o) / l : a
}
class ci extends ye {
    constructor(t) {
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
    }
    initOffsets() {
        const t = this._getTimestampsForTable(),
            e = this._table = this.buildLookupTable(t);
        this._minPos = le(e, this.min), this._tableRange = le(e, this.max) - this._minPos, super.initOffsets(t)
    }
    buildLookupTable(t) {
        const {
            min: e,
            max: i
        } = this, n = [], o = [];
        let r, a, c, l, h;
        for (r = 0, a = t.length; r < a; ++r) l = t[r], l >= e && l <= i && n.push(l);
        if (n.length < 2) return [{
            time: e,
            pos: 0
        }, {
            time: i,
            pos: 1
        }];
        for (r = 0, a = n.length; r < a; ++r) h = n[r + 1], c = n[r - 1], l = n[r], Math.round((h + c) / 2) !== l && o.push({
            time: l,
            pos: r / (a - 1)
        });
        return o
    }
    _generate() {
        const t = this.min,
            e = this.max;
        let i = super.getDataTimestamps();
        return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(e) || i.length === 1) && i.push(e), i.sort((n, o) => n - o)
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t
    }
    getDecimalForValue(t) {
        return (le(this._table, t) - this._minPos) / this._tableRange
    }
    getValueForPixel(t) {
        const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return le(this._table, i * this._tableRange + this._minPos, !0)
    }
}
k(ci, "id", "timeseries"), k(ci, "defaults", ye.defaults);
const Wi = "label";

function li(s, t) {
    typeof s == "function" ? s(t) : s && (s.current = t)
}

function Ba(s, t) {
    const e = s.options;
    e && t && Object.assign(e, t)
}

function $i(s, t) {
    s.labels = t
}

function Ui(s, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wi;
    const i = [];
    s.datasets = t.map(n => {
        const o = s.datasets.find(r => r[e] === n[e]);
        return !o || !n.data || i.includes(o) ? {
            ...n
        } : (i.push(o), Object.assign(o, n), o)
    })
}

function ja(s) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wi;
    const e = {
        labels: [],
        datasets: []
    };
    return $i(e, s.labels), Ui(e, s.datasets, t), e
}

function Va(s, t) {
    const {
        height: e = 150,
        width: i = 300,
        redraw: n = !1,
        datasetIdKey: o,
        type: r,
        data: a,
        options: c,
        plugins: l = [],
        fallbackContent: h,
        updateMode: d,
        ...f
    } = s, u = N.useRef(null), p = N.useRef(null), m = () => {
        u.current && (p.current = new Me(u.current, {
            type: r,
            data: ja(a, o),
            options: c && {
                ...c
            },
            plugins: l
        }), li(t, p.current))
    }, g = () => {
        li(t, null), p.current && (p.current.destroy(), p.current = null)
    };
    return N.useEffect(() => {
        !n && p.current && c && Ba(p.current, c)
    }, [n, c]), N.useEffect(() => {
        !n && p.current && $i(p.current.config.data, a.labels)
    }, [n, a.labels]), N.useEffect(() => {
        !n && p.current && a.datasets && Ui(p.current.config.data, a.datasets, o)
    }, [n, a.datasets]), N.useEffect(() => {
        p.current && (n ? (g(), setTimeout(m)) : p.current.update(d))
    }, [n, c, a.labels, a.datasets, d]), N.useEffect(() => {
        p.current && (g(), setTimeout(m))
    }, [r]), N.useEffect(() => (m(), () => g()), []), hi.createElement("canvas", {
        ref: u,
        role: "img",
        height: e,
        width: i,
        ...f
    }, h)
}
const Ha = N.forwardRef(Va);

function Wa(s, t) {
    return Me.register(t), N.forwardRef((e, i) => hi.createElement(Ha, {
        ...e,
        ref: i,
        type: s
    }))
}
const $a = Wa("line", he);
Me.register(Ve, He, ue, Rt);
const Ua = {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
            legend: {
                display: !1
            },
            title: {
                display: !1
            }
        },
        scales: {
            x: {
                display: !1
            },
            y: {
                display: !1
            }
        }
    },
    Fc = s => {
        const t = N.useRef(null),
            e = N.useRef(null),
            [i] = qi(t),
            n = N.useRef(0),
            o = N.useMemo(() => ({
                labels: [n.current],
                datasets: [{
                    data: [s.balance],
                    borderColor: es.White,
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBackgroundColor: es.Gold,
                    tension: 0
                }]
            }), []),
            r = N.useCallback(() => {
                const a = e.current;
                if (!a) return;
                const c = Math.max(1, Math.round(i / 60));
                a.options.scales.x.min = Math.max(0, n.current - c);
                const l = a.data.datasets[0].data,
                    h = Math.max(...l) || 0,
                    d = Xi.takeRight(l, c + 1),
                    f = Math.min(...d) || 0;
                let u = f;
                if (f < 0) {
                    const p = Math.abs(f).toString().split("");
                    u = p.length === 1 ? 0 : Number(p.map((m, g) => g === 0 ? "1" : 0).join(""))
                }
                a.options.scales.y.min = u - 1, a.options.scales.y.max = Math.max(h + 1, h * 1.05)
            }, [i]);
        return N.useEffect(() => {
            var a;
            r(), (a = e.current) == null || a.update()
        }, [i]), Gi(() => {
            const a = e.current;
            a && (a.data.labels.push(n.current++), a.data.datasets[0].data.push(s.balance), r(), a.update())
        }, 5e3), Se.jsx(Ya, {
            children: Se.jsx(Ka, {
                ref: t,
                children: Se.jsx($a, {
                    ref: e,
                    options: Ua,
                    data: o
                })
            })
        })
    },
    Ya = di.div.attrs({
        className: "flex vc"
    })`
  min-height: 0px;
  flex: 1;
  z-index: 0;
  overflow: hidden;
`,
    Ka = di.div.attrs({
        className: "maxWidth"
    })`
  height: 90%;
  pointer-events: none;
`;
export {
    Fc as
    default
};