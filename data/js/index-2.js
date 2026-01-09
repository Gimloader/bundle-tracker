import {
    x as ee,
    r as i,
    aQ as te,
    aH as ae,
    cu as re,
    ao as k,
    cv as oe,
    ay as ne
} from "./index-25.js";

function j(e) {
    return ["small", "middle", "large"].includes(e)
}

function V(e) {
    return e ? typeof e == "number" && !Number.isNaN(e) : !1
}
const H = ee.createContext({
        latestIndex: 0
    }),
    se = H.Provider,
    le = ({
        className: e,
        index: n,
        children: o,
        split: t,
        style: s
    }) => {
        const {
            latestIndex: l
        } = i.useContext(H);
        return o == null ? null : i.createElement(i.Fragment, null, i.createElement("div", {
            className: e,
            style: s
        }, o), n < l && t && i.createElement("span", {
            className: `${e}-split`
        }, t))
    };
var ce = function(e, n) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++) n.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (o[t[s]] = e[t[s]]);
    return o
};
const ie = i.forwardRef((e, n) => {
        var o;
        const {
            getPrefixCls: t,
            direction: s,
            size: l,
            className: r,
            style: u,
            classNames: v,
            styles: C
        } = te("space"), {
            size: d = l ?? "small",
            align: p,
            className: a,
            rootClassName: y,
            children: w,
            direction: c = "horizontal",
            prefixCls: g,
            split: _,
            style: F,
            wrap: G = !1,
            classNames: N,
            styles: E
        } = e, M = ce(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [b, x] = Array.isArray(d) ? d : [d, d], O = j(x), $ = j(b), K = V(x), L = V(b), T = ae(w, {
            keepEmpty: !0
        }), A = p === void 0 && c === "horizontal" ? "center" : p, m = t("space", g), [Q, W, X] = re(m), B = k(m, r, W, `${m}-${c}`, {
            [`${m}-rtl`]: s === "rtl",
            [`${m}-align-${A}`]: A,
            [`${m}-gap-row-${x}`]: O,
            [`${m}-gap-col-${b}`]: $
        }, a, y, X), I = k(`${m}-item`, (o = N == null ? void 0 : N.item) !== null && o !== void 0 ? o : v.item);
        let D = 0;
        const J = T.map((f, h) => {
                var z;
                f != null && (D = h);
                const Z = (f == null ? void 0 : f.key) || `${I}-${h}`;
                return i.createElement(le, {
                    className: I,
                    key: Z,
                    index: h,
                    split: _,
                    style: (z = E == null ? void 0 : E.item) !== null && z !== void 0 ? z : C.item
                }, f)
            }),
            Y = i.useMemo(() => ({
                latestIndex: D
            }), [D]);
        if (T.length === 0) return null;
        const S = {};
        return G && (S.flexWrap = "wrap"), !$ && L && (S.columnGap = b), !O && K && (S.rowGap = x), Q(i.createElement("div", Object.assign({
            ref: n,
            className: B,
            style: Object.assign(Object.assign(Object.assign({}, S), u), F)
        }, M), i.createElement(se, {
            value: Y
        }, J)))
    }),
    ue = ie;
ue.Compact = oe;
var P, U;

function de() {
    return U || (U = 1, P = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var n = document.activeElement, o = [], t = 0; t < e.rangeCount; t++) o.push(e.getRangeAt(t));
        switch (n.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                n.blur();
                break;
            default:
                n = null;
                break
        }
        return e.removeAllRanges(),
            function() {
                e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(s) {
                    e.addRange(s)
                }), n && n.focus()
            }
    }), P
}
var R, q;

function pe() {
    if (q) return R;
    q = 1;
    var e = de(),
        n = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        },
        o = "Copy to clipboard: #{key}, Enter";

    function t(l) {
        var r = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return l.replace(/#{\s*key\s*}/g, r)
    }

    function s(l, r) {
        var u, v, C, d, p, a, y = !1;
        r || (r = {}), u = r.debug || !1;
        try {
            C = e(), d = document.createRange(), p = document.getSelection(), a = document.createElement("span"), a.textContent = l, a.ariaHidden = "true", a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(c) {
                if (c.stopPropagation(), r.format)
                    if (c.preventDefault(), typeof c.clipboardData > "u") {
                        u && console.warn("unable to use e.clipboardData"), u && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                        var g = n[r.format] || n.default;
                        window.clipboardData.setData(g, l)
                    } else c.clipboardData.clearData(), c.clipboardData.setData(r.format, l);
                r.onCopy && (c.preventDefault(), r.onCopy(c.clipboardData))
            }), document.body.appendChild(a), d.selectNodeContents(a), p.addRange(d);
            var w = document.execCommand("copy");
            if (!w) throw new Error("copy command was unsuccessful");
            y = !0
        } catch (c) {
            u && console.error("unable to copy using execCommand: ", c), u && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(r.format || "text", l), r.onCopy && r.onCopy(window.clipboardData), y = !0
            } catch (g) {
                u && console.error("unable to copy using clipboardData: ", g), u && console.error("falling back to prompt"), v = t("message" in r ? r.message : o), window.prompt(v, l)
            }
        } finally {
            p && (typeof p.removeRange == "function" ? p.removeRange(d) : p.removeAllRanges()), a && document.body.removeChild(a), C()
        }
        return y
    }
    return R = s, R
}
var me = pe();
const ye = ne(me);
export {
    ue as S, ye as c
};