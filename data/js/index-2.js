import {
    ai as U,
    bO as re,
    x as I,
    al as ne,
    bU as oe,
    am as D,
    r as u,
    aj as se,
    aO as le,
    aF as ce,
    ct as ie,
    aw as de
} from "./_index.js";

function T(e) {
    return ["small", "middle", "large"].includes(e)
}

function L(e) {
    return e ? typeof e == "number" && !Number.isNaN(e) : !1
}
const pe = e => {
        const {
            componentCls: a,
            borderRadius: r,
            paddingSM: t,
            colorBorder: n,
            paddingXS: l,
            fontSizeLG: o,
            fontSizeSM: i,
            borderRadiusLG: f,
            borderRadiusSM: m,
            colorBgContainerDisabled: d,
            lineWidth: p
        } = e;
        return {
            [a]: [{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
                paddingInline: t,
                margin: 0,
                background: d,
                borderWidth: p,
                borderStyle: "solid",
                borderColor: n,
                borderRadius: r,
                "&-large": {
                    fontSize: o,
                    borderRadius: f
                },
                "&-small": {
                    paddingInline: l,
                    borderRadius: m,
                    fontSize: i
                },
                "&-compact-last-item": {
                    borderEndStartRadius: 0,
                    borderStartStartRadius: 0
                },
                "&-compact-first-item": {
                    borderEndEndRadius: 0,
                    borderStartEndRadius: 0
                },
                "&-compact-item:not(:first-child):not(:last-child)": {
                    borderRadius: 0
                },
                "&-compact-item:not(:last-child)": {
                    borderInlineEndWidth: 0
                }
            }, re(e, {
                focus: !1
            })]
        }
    },
    me = U(["Space", "Addon"], e => [pe(e)]);
var ue = function(e, a) {
    var r = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
    return r
};
const fe = I.forwardRef((e, a) => {
        const {
            className: r,
            children: t,
            style: n,
            prefixCls: l
        } = e, o = ue(e, ["className", "children", "style", "prefixCls"]), {
            getPrefixCls: i,
            direction: f
        } = I.useContext(ne), m = i("space-addon", l), [d, p, s] = me(m), {
            compactItemClassnames: y,
            compactSize: S
        } = oe(m, f), c = D(m, p, y, s, {
            [`${m}-${S}`]: S
        }, r);
        return d(I.createElement("div", Object.assign({
            ref: a,
            className: c,
            style: n
        }, o), t))
    }),
    _ = I.createContext({
        latestIndex: 0
    }),
    ge = _.Provider,
    ye = ({
        className: e,
        index: a,
        children: r,
        split: t,
        style: n
    }) => {
        const {
            latestIndex: l
        } = u.useContext(_);
        return r == null ? null : u.createElement(u.Fragment, null, u.createElement("div", {
            className: e,
            style: n
        }, r), a < l && t && u.createElement("span", {
            className: `${e}-split`
        }, t))
    },
    Se = e => {
        const {
            componentCls: a,
            antCls: r
        } = e;
        return {
            [a]: {
                display: "inline-flex",
                "&-rtl": {
                    direction: "rtl"
                },
                "&-vertical": {
                    flexDirection: "column"
                },
                "&-align": {
                    flexDirection: "column",
                    "&-center": {
                        alignItems: "center"
                    },
                    "&-start": {
                        alignItems: "flex-start"
                    },
                    "&-end": {
                        alignItems: "flex-end"
                    },
                    "&-baseline": {
                        alignItems: "baseline"
                    }
                },
                [`${a}-item:empty`]: {
                    display: "none"
                },
                [`${a}-item > ${r}-badge-not-a-wrapper:only-child`]: {
                    display: "block"
                }
            }
        }
    },
    be = e => {
        const {
            componentCls: a
        } = e;
        return {
            [a]: {
                "&-gap-row-small": {
                    rowGap: e.spaceGapSmallSize
                },
                "&-gap-row-middle": {
                    rowGap: e.spaceGapMiddleSize
                },
                "&-gap-row-large": {
                    rowGap: e.spaceGapLargeSize
                },
                "&-gap-col-small": {
                    columnGap: e.spaceGapSmallSize
                },
                "&-gap-col-middle": {
                    columnGap: e.spaceGapMiddleSize
                },
                "&-gap-col-large": {
                    columnGap: e.spaceGapLargeSize
                }
            }
        }
    },
    Ce = U("Space", e => {
        const a = se(e, {
            spaceGapSmallSize: e.paddingXS,
            spaceGapMiddleSize: e.padding,
            spaceGapLargeSize: e.paddingLG
        });
        return [Se(a), be(a)]
    }, () => ({}), {
        resetStyle: !1
    });
var ve = function(e, a) {
    var r = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
    return r
};
const xe = u.forwardRef((e, a) => {
        var r;
        const {
            getPrefixCls: t,
            direction: n,
            size: l,
            className: o,
            style: i,
            classNames: f,
            styles: m
        } = le("space"), {
            size: d = l ?? "small",
            align: p,
            className: s,
            rootClassName: y,
            children: S,
            direction: c = "horizontal",
            prefixCls: b,
            split: q,
            style: F,
            wrap: H = !1,
            classNames: O,
            styles: N
        } = e, W = ve(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [v, x] = Array.isArray(d) ? d : [d, d], P = T(x), $ = T(v), X = L(x), B = L(v), w = ce(S, {
            keepEmpty: !0
        }), j = p === void 0 && c === "horizontal" ? "center" : p, g = t("space", b), [K, J, Q] = Ce(g), Y = D(g, o, J, `${g}-${c}`, {
            [`${g}-rtl`]: n === "rtl",
            [`${g}-align-${j}`]: j,
            [`${g}-gap-row-${x}`]: P,
            [`${g}-gap-col-${v}`]: $
        }, s, y, Q), A = D(`${g}-item`, (r = O == null ? void 0 : O.item) !== null && r !== void 0 ? r : f.item), Z = Object.assign(Object.assign({}, m.item), N == null ? void 0 : N.item), ee = w.map((C, h) => {
            const E = (C == null ? void 0 : C.key) || `${A}-${h}`;
            return u.createElement(ye, {
                className: A,
                key: E,
                index: h,
                split: q,
                style: Z
            }, C)
        }), te = u.useMemo(() => ({
            latestIndex: w.reduce((h, E, ae) => E != null ? ae : h, 0)
        }), [w]);
        if (w.length === 0) return null;
        const z = {};
        return H && (z.flexWrap = "wrap"), !$ && B && (z.columnGap = v), !P && X && (z.rowGap = x), K(u.createElement("div", Object.assign({
            ref: a,
            className: Y,
            style: Object.assign(Object.assign(Object.assign({}, z), i), F)
        }, W), u.createElement(ge, {
            value: te
        }, ee)))
    }),
    k = xe;
k.Compact = ie;
k.Addon = fe;
var R, M;

function we() {
    return M || (M = 1, R = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var a = document.activeElement, r = [], t = 0; t < e.rangeCount; t++) r.push(e.getRangeAt(t));
        switch (a.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                a.blur();
                break;
            default:
                a = null;
                break
        }
        return e.removeAllRanges(),
            function() {
                e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(n) {
                    e.addRange(n)
                }), a && a.focus()
            }
    }), R
}
var G, V;

function ze() {
    if (V) return G;
    V = 1;
    var e = we(),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        },
        r = "Copy to clipboard: #{key}, Enter";

    function t(l) {
        var o = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return l.replace(/#{\s*key\s*}/g, o)
    }

    function n(l, o) {
        var i, f, m, d, p, s, y = !1;
        o || (o = {}), i = o.debug || !1;
        try {
            m = e(), d = document.createRange(), p = document.getSelection(), s = document.createElement("span"), s.textContent = l, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(c) {
                if (c.stopPropagation(), o.format)
                    if (c.preventDefault(), typeof c.clipboardData > "u") {
                        i && console.warn("unable to use e.clipboardData"), i && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                        var b = a[o.format] || a.default;
                        window.clipboardData.setData(b, l)
                    } else c.clipboardData.clearData(), c.clipboardData.setData(o.format, l);
                o.onCopy && (c.preventDefault(), o.onCopy(c.clipboardData))
            }), document.body.appendChild(s), d.selectNodeContents(s), p.addRange(d);
            var S = document.execCommand("copy");
            if (!S) throw new Error("copy command was unsuccessful");
            y = !0
        } catch (c) {
            i && console.error("unable to copy using execCommand: ", c), i && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(o.format || "text", l), o.onCopy && o.onCopy(window.clipboardData), y = !0
            } catch (b) {
                i && console.error("unable to copy using clipboardData: ", b), i && console.error("falling back to prompt"), f = t("message" in o ? o.message : r), window.prompt(f, l)
            }
        } finally {
            p && (typeof p.removeRange == "function" ? p.removeRange(d) : p.removeAllRanges()), s && document.body.removeChild(s), m()
        }
        return y
    }
    return G = n, G
}
var he = ze();
const Ie = de(he);
export {
    k as S, Ie as c
};