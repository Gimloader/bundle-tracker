import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    b as n
} from "./color.js";
import {
    d as r
} from "./ContextIsolator.js";
var i = e(t()),
    a = e => typeof e == `object` && !!e && e.nodeType === 1,
    o = (e, t) => (!t || e !== `hidden`) && e !== `visible` && e !== `clip`,
    s = (e, t) => {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            let n = getComputedStyle(e, null);
            return o(n.overflowY, t) || o(n.overflowX, t) || (e => {
                let t = (e => {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement
                    } catch {
                        return null
                    }
                })(e);
                return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
            })(e)
        }
        return !1
    },
    c = (e, t, n, r, i, a, o, s) => a < e && o > t || a > e && o < t ? 0 : a <= e && s <= n || o >= t && s >= n ? a - e - r : o > t && s < n || a < e && s > n ? o - t + i : 0,
    l = e => e.parentElement ?? (e.getRootNode().host || null),
    u = (e, t) => {
        var n, r;
        if (typeof document > `u`) return [];
        let {
            scrollMode: i,
            block: o,
            inline: u,
            boundary: d,
            skipOverflowHiddenElements: f
        } = t, p = typeof d == `function` ? d : e => e !== d;
        if (!a(e)) throw TypeError(`Invalid target`);
        let m = document.scrollingElement || document.documentElement,
            h = [],
            g = e;
        for (; a(g) && p(g);) {
            if (g = l(g), g === m) {
                h.push(g);
                break
            }
            g != null && g === document.body && s(g) && !s(document.documentElement) || g != null && s(g, f) && h.push(g)
        }
        let _ = ((n = window.visualViewport) == null ? void 0 : n.width) ?? innerWidth,
            v = ((r = window.visualViewport) == null ? void 0 : r.height) ?? innerHeight,
            {
                scrollX: y,
                scrollY: b
            } = window,
            {
                height: x,
                width: S,
                top: C,
                right: w,
                bottom: T,
                left: E
            } = e.getBoundingClientRect(),
            {
                top: D,
                right: O,
                bottom: k,
                left: A
            } = (e => {
                let t = window.getComputedStyle(e);
                return {
                    top: parseFloat(t.scrollMarginTop) || 0,
                    right: parseFloat(t.scrollMarginRight) || 0,
                    bottom: parseFloat(t.scrollMarginBottom) || 0,
                    left: parseFloat(t.scrollMarginLeft) || 0
                }
            })(e),
            j = o === `start` || o === `nearest` ? C - D : o === `end` ? T + k : C + x / 2 - D + k,
            M = u === `center` ? E + S / 2 - A + O : u === `end` ? w + O : E - A,
            N = [];
        for (let e = 0; e < h.length; e++) {
            let t = h[e],
                {
                    height: n,
                    width: r,
                    top: a,
                    right: l,
                    bottom: d,
                    left: f
                } = t.getBoundingClientRect();
            if (i === `if-needed` && C >= 0 && E >= 0 && T <= v && w <= _ && (t === m && !s(t) || C >= a && T <= d && E >= f && w <= l)) return N;
            let p = getComputedStyle(t),
                g = parseInt(p.borderLeftWidth, 10),
                D = parseInt(p.borderTopWidth, 10),
                O = parseInt(p.borderRightWidth, 10),
                k = parseInt(p.borderBottomWidth, 10),
                A = 0,
                P = 0,
                F = `offsetWidth` in t ? t.offsetWidth - t.clientWidth - g - O : 0,
                I = `offsetHeight` in t ? t.offsetHeight - t.clientHeight - D - k : 0,
                L = `offsetWidth` in t ? t.offsetWidth === 0 ? 0 : r / t.offsetWidth : 0,
                R = `offsetHeight` in t ? t.offsetHeight === 0 ? 0 : n / t.offsetHeight : 0;
            if (m === t) A = o === `start` ? j : o === `end` ? j - v : o === `nearest` ? c(b, b + v, v, D, k, b + j, b + j + x, x) : j - v / 2, P = u === `start` ? M : u === `center` ? M - _ / 2 : u === `end` ? M - _ : c(y, y + _, _, g, O, y + M, y + M + S, S), A = Math.max(0, A + b), P = Math.max(0, P + y);
            else {
                A = o === `start` ? j - a - D : o === `end` ? j - d + k + I : o === `nearest` ? c(a, d, n, D, k + I, j, j + x, x) : j - (a + n / 2) + I / 2, P = u === `start` ? M - f - g : u === `center` ? M - (f + r / 2) + F / 2 : u === `end` ? M - l + O + F : c(f, l, r, g, O + F, M, M + S, S);
                let {
                    scrollLeft: e,
                    scrollTop: i
                } = t;
                A = R === 0 ? 0 : Math.max(0, Math.min(i + A / R, t.scrollHeight - n / R + I)), P = L === 0 ? 0 : Math.max(0, Math.min(e + P / L, t.scrollWidth - r / L + F)), j += i - A, M += e - P
            }
            N.push({
                el: t,
                top: A,
                left: P
            })
        }
        return N
    },
    d = e => !1 === e ? {
        block: `end`,
        inline: `nearest`
    } : (e => e === Object(e) && Object.keys(e).length !== 0)(e) ? e : {
        block: `start`,
        inline: `nearest`
    };

function f(e, t) {
    if (!e.isConnected || !(e => {
            let t = e;
            for (; t && t.parentNode;) {
                if (t.parentNode === document) return !0;
                t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode
            }
            return !1
        })(e)) return;
    let n = (e => {
        let t = window.getComputedStyle(e);
        return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0
        }
    })(e);
    if ((e => typeof e == `object` && typeof e.behavior == `function`)(t)) return t.behavior(u(e, t));
    let r = typeof t == `boolean` || t == null ? void 0 : t.behavior;
    for (let {
            el: i,
            top: a,
            left: o
        }
        of u(e, d(t))) {
        let e = a - n.top + n.bottom,
            t = o - n.left + n.right;
        i.scroll({
            top: e,
            left: t,
            behavior: r
        })
    }
}
var p = [`parentNode`],
    m = `form_item`;

function h(e) {
    return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e]
}

function g(e, t) {
    if (!e.length) return;
    let n = e.join(`_`);
    return t ? `${t}_${n}` : p.includes(n) ? `${m}_${n}` : n
}

function _(e, t, n, r, i, a) {
    let o = r;
    return a === void 0 ? n.validating ? o = `validating` : e.length ? o = `error` : t.length ? o = `warning` : (n.touched || i && n.validated) && (o = `success`) : o = a, o
}
var v = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

function y(e) {
    return h(e).join(`_`)
}

function b(e, t) {
    let r = t.getFieldInstance(e),
        i = n(r);
    if (i) return i;
    let a = g(h(e), t.__INTERNAL__.name);
    if (a) return document.getElementById(a)
}

function x(e) {
    let [t] = r(), n = i.useRef({}), a = i.useMemo(() => e ?? Object.assign(Object.assign({}, t), {
        __INTERNAL__: {
            itemRef: e => t => {
                let r = y(e);
                t ? n.current[r] = t : delete n.current[r]
            }
        },
        scrollToField: (e, t = {}) => {
            let {
                focus: n
            } = t, r = v(t, [`focus`]), i = b(e, a);
            i && (f(i, Object.assign({
                scrollMode: `if-needed`,
                block: `nearest`
            }, r)), n && a.focusField(e))
        },
        focusField: e => {
            var t, n;
            let r = a.getFieldInstance(e);
            typeof(r == null ? void 0 : r.focus) == `function` ? r.focus(): (n = (t = b(e, a)) == null ? void 0 : t.focus) == null || n.call(t)
        },
        getFieldInstance: e => {
            let t = y(e);
            return n.current[t]
        }
    }), [e, t]);
    return [a]
}
export {
    h as a, _ as i, x as n, g as r, y as t
};