function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("fI2SP", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = r("32zan").default
})), r.register("32zan", (function(n, o) {
    e(n.exports, "default", (function() {
        return k
    }), (function(e) {
        return k = e
    }));
    var s = r("26dWa"),
        i = r("kLpOI"),
        a = r("tdMvL"),
        l = r("legzE"),
        c = r("fe1on"),
        u = r("8mdco"),
        f = r("fywoC"),
        d = r("4gMdJ"),
        p = r("gLq83"),
        g = r("gwnbB"),
        m = r("jhhj0"),
        y = r("8AW4e"),
        b = r("3VJvj"),
        v = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = ["normal", "exception", "active", "success"];
    var k = e => {
        const {
            prefixCls: r,
            className: n,
            rootClassName: o,
            steps: k,
            strokeColor: C,
            percent: x = 0,
            size: $ = "default",
            showInfo: S = !0,
            type: w = "line",
            status: E,
            format: O
        } = e, j = v(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format"]), P = f.useMemo((() => {
            var t, r;
            const n = (0, b.getSuccessPercent)(e);
            return parseInt(void 0 !== n ? null === (t = null != n ? n : 0) || void 0 === t ? void 0 : t.toString() : null === (r = null != x ? x : 0) || void 0 === r ? void 0 : r.toString(), 10)
        }), [x, e.success, e.successPercent]), I = f.useMemo((() => !h.includes(E) && P >= 100 ? "success" : E || "normal"), [E, P]), {
            getPrefixCls: L,
            direction: A
        } = f.useContext(d.ConfigContext), N = L("progress", r), [W, D] = (0, y.default)(N), M = f.useMemo((() => {
            if (!S) return null;
            const t = (0, b.getSuccessPercent)(e);
            let r;
            const n = "line" === w;
            return O || "exception" !== I && "success" !== I ? r = (O || (e => `${e}%`))((0, b.validProgress)(x), (0, b.validProgress)(t)) : "exception" === I ? r = n ? f.createElement(a.default, null) : f.createElement(l.default, null) : "success" === I && (r = n ? f.createElement(s.default, null) : f.createElement(i.default, null)), f.createElement("span", {
                className: `${N}-text`,
                title: "string" == typeof r ? r : void 0
            }, r)
        }), [S, P, I, w, N, O]), z = Array.isArray(C) ? C[0] : C, R = "string" == typeof C || Array.isArray(C) ? C : void 0;
        let T;
        "line" === w ? T = k ? f.createElement(m.default, Object.assign({}, e, {
            strokeColor: R,
            prefixCls: N,
            steps: k
        }), M) : f.createElement(g.default, Object.assign({}, e, {
            strokeColor: z,
            prefixCls: N,
            direction: A
        }), M) : "circle" !== w && "dashboard" !== w || (T = f.createElement(p.default, Object.assign({}, e, {
            strokeColor: z,
            prefixCls: N,
            progressStatus: I
        }), M));
        const X = t(c)(N, {
            [`${N}-inline-circle`]: "circle" === w && e.width <= 20,
            [`${N}-${("dashboard"===w?"circle":k&&"steps")||w}`]: !0,
            [`${N}-status-${I}`]: !0,
            [`${N}-show-info`]: S,
            [`${N}-${$}`]: $,
            [`${N}-rtl`]: "rtl" === A
        }, n, o, D);
        return W(f.createElement("div", Object.assign({
            className: X,
            role: "progressbar"
        }, (0, u.default)(j, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), T))
    }
})), r.register("gLq83", (function(n, o) {
    e(n.exports, "default", (function() {
        return f
    }));
    var s = r("fe1on");
    r("byKbE");
    var i = r("fZIf7"),
        a = r("fywoC"),
        l = r("e4KJZ"),
        c = r("3VJvj");
    const u = e => 3 / e * 100;
    var f = e => {
        const {
            prefixCls: r,
            width: n = 120,
            strokeWidth: o = Math.max(u(n), 6),
            trailColor: f = null,
            strokeLinecap: d = "round",
            gapPosition: p,
            gapDegree: g,
            type: m,
            children: y,
            success: b
        } = e, v = {
            width: n,
            height: n,
            fontSize: .15 * n + 6
        }, h = a.useMemo((() => g || 0 === g ? g : "dashboard" === m ? 75 : void 0), [g, m]), k = p || "dashboard" === m && "bottom" || void 0, C = "[object Object]" === Object.prototype.toString.call(e.strokeColor), x = (0, c.getStrokeColor)({
            success: b,
            strokeColor: e.strokeColor
        }), $ = t(s)(`${r}-inner`, {
            [`${r}-circle-gradient`]: C
        }), S = a.createElement(i.default, {
            percent: (0, c.getPercentage)(e),
            strokeWidth: o,
            trailWidth: o,
            strokeColor: x,
            strokeLinecap: d,
            trailColor: f,
            prefixCls: r,
            gapDegree: h,
            gapPosition: k
        });
        return a.createElement("div", {
            className: $,
            style: v
        }, n <= 20 ? a.createElement(l.default, {
            title: y
        }, S) : a.createElement(a.Fragment, null, S, y))
    }
})), r.register("byKbE", (function(t, n) {
    e(t.exports, "Circle", (function() {
        return r("fZIf7").default
    }));
    var o = r("dp9eo"),
        s = r("fZIf7");
    o.default, s.default
})), r.register("dp9eo", (function(n, o) {
    e(n.exports, "default", (function() {
        return d
    }));
    var s = r("kF5zS"),
        i = r("lvfs4"),
        a = r("fywoC"),
        l = r("fe1on"),
        c = r("f5EEa"),
        u = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"],
        f = function(e) {
            var r = e.className,
                n = e.percent,
                o = e.prefixCls,
                f = e.strokeColor,
                d = e.strokeLinecap,
                p = e.strokeWidth,
                g = e.style,
                m = e.trailColor,
                y = e.trailWidth,
                b = e.transition,
                v = (0, i.default)(e, u);
            delete v.gapPosition;
            var h = Array.isArray(n) ? n : [n],
                k = Array.isArray(f) ? f : [f],
                C = (0, c.useTransitionDuration)(),
                x = p / 2,
                $ = 100 - p / 2,
                S = "M ".concat("round" === d ? x : 0, ",").concat(x, "\n         L ").concat("round" === d ? $ : 100, ",").concat(x),
                w = "0 0 100 ".concat(p),
                E = 0;
            return a.createElement("svg", (0, s.default)({
                className: t(l)("".concat(o, "-line"), r),
                viewBox: w,
                preserveAspectRatio: "none",
                style: g
            }, v), a.createElement("path", {
                className: "".concat(o, "-line-trail"),
                d: S,
                strokeLinecap: d,
                stroke: m,
                strokeWidth: y || p,
                fillOpacity: "0"
            }), h.map((function(e, t) {
                var r = 1;
                switch (d) {
                    case "round":
                        r = 1 - p / 100;
                        break;
                    case "square":
                        r = 1 - p / 2 / 100;
                        break;
                    default:
                        r = 1
                }
                var n = {
                        strokeDasharray: "".concat(e * r, "px, 100px"),
                        strokeDashoffset: "-".concat(E, "px"),
                        transition: b || "stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"
                    },
                    s = k[t] || k[k.length - 1];
                return E += e, a.createElement("path", {
                    key: t,
                    className: "".concat(o, "-line-path"),
                    d: S,
                    strokeLinecap: d,
                    stroke: s,
                    strokeWidth: p,
                    fillOpacity: "0",
                    ref: function(e) {
                        C[t] = e
                    },
                    style: n
                })
            })))
        };
    f.defaultProps = c.defaultProps, f.displayName = "Line";
    var d = f
})), r.register("kF5zS", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lvfs4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("kwX01");

    function s(e, t) {
        if (null == e) return {};
        var r, n, s = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
    }
})), r.register("kwX01", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            s = Object.keys(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("f5EEa", (function(t, n) {
    e(t.exports, "defaultProps", (function() {
        return s
    })), e(t.exports, "useTransitionDuration", (function() {
        return i
    }));
    var o = r("fywoC"),
        s = {
            className: "",
            percent: 0,
            prefixCls: "rc-progress",
            strokeColor: "#2db7f5",
            strokeLinecap: "round",
            strokeWidth: 1,
            style: {},
            trailColor: "#D9D9D9",
            trailWidth: 1,
            gapPosition: "bottom"
        },
        i = function() {
            var e = (0, o.useRef)([]),
                t = (0, o.useRef)(null);
            return (0, o.useEffect)((function() {
                var r = Date.now(),
                    n = !1;
                e.current.forEach((function(e) {
                    if (e) {
                        n = !0;
                        var o = e.style;
                        o.transitionDuration = ".3s, .3s, .3s, .06s", t.current && r - t.current < 100 && (o.transitionDuration = "0s, 0s")
                    }
                })), n && (t.current = Date.now())
            })), e.current
        }
})), r.register("fZIf7", (function(n, o) {
    e(n.exports, "default", (function() {
        return v
    }));
    var s = r("kF5zS"),
        i = r("j50LI"),
        a = r("lvfs4"),
        l = r("fywoC"),
        c = r("fe1on"),
        u = r("f5EEa"),
        f = r("jbHnL"),
        d = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];

    function p(e) {
        return +e.replace("%", "")
    }

    function g(e) {
        var t = null != e ? e : [];
        return Array.isArray(t) ? t : [t]
    }
    var m = 100,
        y = function(e, t, r, n, o, s, i, a, l, c) {
            var u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                f = r / 100 * 360 * ((360 - s) / 360),
                d = 0 === s ? 0 : {
                    bottom: 0,
                    top: 180,
                    left: 90,
                    right: -90
                } [i],
                p = (100 - n) / 100 * t;
            return "round" === l && 100 !== n && (p += c / 2) >= t && (p = t - .01), {
                stroke: "string" == typeof a ? a : void 0,
                strokeDasharray: "".concat(t, "px ").concat(e),
                strokeDashoffset: p + u,
                transform: "rotate(".concat(o + f + d, "deg)"),
                transformOrigin: "0 0",
                transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
                fillOpacity: 0
            }
        },
        b = function(e) {
            var r, n, o, b = e.id,
                v = e.prefixCls,
                h = e.steps,
                k = e.strokeWidth,
                C = e.trailWidth,
                x = e.gapDegree,
                $ = void 0 === x ? 0 : x,
                S = e.gapPosition,
                w = e.trailColor,
                E = e.strokeLinecap,
                O = e.style,
                j = e.className,
                P = e.strokeColor,
                I = e.percent,
                L = (0, a.default)(e, d),
                A = (0, f.default)(b),
                N = "".concat(A, "-gradient"),
                W = 50 - k / 2,
                D = 2 * Math.PI * W,
                M = $ > 0 ? 90 + $ / 2 : -90,
                z = D * ((360 - $) / 360),
                R = "object" === (0, i.default)(h) ? h : {
                    count: h,
                    space: 2
                },
                T = R.count,
                X = R.space,
                B = y(D, z, 0, 100, M, $, S, w, E, k),
                F = g(I),
                H = g(P),
                J = H.find((function(e) {
                    return e && "object" === (0, i.default)(e)
                })),
                K = (0, u.useTransitionDuration)();
            return l.createElement("svg", (0, s.default)({
                className: t(c)("".concat(v, "-circle"), j),
                viewBox: "".concat(-50, " ").concat(-50, " ").concat(m, " ").concat(m),
                style: O,
                id: b,
                role: "presentation"
            }, L), J && l.createElement("defs", null, l.createElement("linearGradient", {
                id: N,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
            }, Object.keys(J).sort((function(e, t) {
                return p(e) - p(t)
            })).map((function(e, t) {
                return l.createElement("stop", {
                    key: t,
                    offset: e,
                    stopColor: J[e]
                })
            })))), !T && l.createElement("circle", {
                className: "".concat(v, "-circle-trail"),
                r: W,
                cx: 0,
                cy: 0,
                stroke: w,
                strokeLinecap: E,
                strokeWidth: C || k,
                style: B
            }), T ? (r = Math.round(T * (F[0] / 100)), n = 100 / T, o = 0, new Array(T).fill(null).map((function(e, t) {
                var s = t <= r - 1 ? H[0] : w,
                    a = s && "object" === (0, i.default)(s) ? "url(#".concat(N, ")") : void 0,
                    c = y(D, z, o, n, M, $, S, s, "butt", k, X);
                return o += 100 * (z - c.strokeDashoffset + X) / z, l.createElement("circle", {
                    key: t,
                    className: "".concat(v, "-circle-path"),
                    r: W,
                    cx: 0,
                    cy: 0,
                    stroke: a,
                    strokeWidth: k,
                    opacity: 1,
                    style: c,
                    ref: function(e) {
                        K[t] = e
                    }
                })
            }))) : function() {
                var e = 0;
                return F.map((function(t, r) {
                    var n = H[r] || H[H.length - 1],
                        o = n && "object" === (0, i.default)(n) ? "url(#".concat(N, ")") : void 0,
                        s = y(D, z, e, t, M, $, S, n, E, k);
                    return e += t, l.createElement("circle", {
                        key: r,
                        className: "".concat(v, "-circle-path"),
                        r: W,
                        cx: 0,
                        cy: 0,
                        stroke: o,
                        strokeLinecap: E,
                        strokeWidth: k,
                        opacity: 0 === t ? 0 : 1,
                        style: s,
                        ref: function(e) {
                            K[r] = e
                        }
                    })
                })).reverse()
            }())
        };
    b.defaultProps = u.defaultProps, b.displayName = "Circle";
    var v = b
})), r.register("j50LI", (function(t, r) {
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("jbHnL", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dTCHA"),
        s = r("fywoC"),
        i = r("9U8Wa"),
        a = 0,
        l = (0, i.default)();
    var c = function(e) {
        var t = s.useState(),
            r = (0, o.default)(t, 2),
            n = r[0],
            i = r[1];
        return s.useEffect((function() {
            var e;
            i("rc_progress_".concat((l ? (e = a, a += 1) : e = "TEST_OR_SSR", e)))
        }), []), e || n
    }
})), r.register("dTCHA", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("lj6yL"),
        s = r("gl2JL"),
        i = r("WvhuT"),
        a = r("it4BK");

    function l(e, t) {
        return (0, o.default)(e) || (0, s.default)(e, t) || (0, i.default)(e, t) || (0, a.default)()
    }
})), r.register("lj6yL", (function(t, r) {
    function n(e) {
        if (Array.isArray(e)) return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("gl2JL", (function(t, r) {
    function n(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, s = [],
                i = !0,
                a = !1;
            try {
                for (r = r.call(e); !(i = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); i = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if (a) throw o
                }
            }
            return s
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("WvhuT", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("lLhEK");

    function s(e, t) {
        if (e) {
            if ("string" == typeof e) return (0, o.default)(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, o.default)(e, t) : void 0
        }
    }
})), r.register("lLhEK", (function(t, r) {
    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("it4BK", (function(t, r) {
    function n() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("3VJvj", (function(t, n) {
    e(t.exports, "validProgress", (function() {
        return s
    })), e(t.exports, "getSuccessPercent", (function() {
        return i
    })), e(t.exports, "getPercentage", (function() {
        return a
    })), e(t.exports, "getStrokeColor", (function() {
        return l
    }));
    var o = r("ewAdL");

    function s(e) {
        return !e || e < 0 ? 0 : e > 100 ? 100 : e
    }

    function i(e) {
        let {
            success: t,
            successPercent: r
        } = e, n = r;
        return t && "progress" in t && (n = t.progress), t && "percent" in t && (n = t.percent), n
    }
    const a = e => {
            let {
                percent: t,
                success: r,
                successPercent: n
            } = e;
            const o = s(i({
                success: r,
                successPercent: n
            }));
            return [o, s(s(t) - o)]
        },
        l = e => {
            let {
                success: t = {},
                strokeColor: r
            } = e;
            const {
                strokeColor: n
            } = t;
            return [n || o.presetPrimaryColors.green, r || null]
        }
})), r.register("gwnbB", (function(t, n) {
    e(t.exports, "sortGradient", (function() {
        return l
    }), (function(e) {
        return l = e
    })), e(t.exports, "handleGradient", (function() {
        return c
    }), (function(e) {
        return c = e
    })), e(t.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var o = r("ewAdL"),
        s = r("fywoC"),
        i = r("3VJvj"),
        a = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const l = e => {
            let t = [];
            return Object.keys(e).forEach((r => {
                const n = parseFloat(r.replace(/%/g, ""));
                isNaN(n) || t.push({
                    key: n,
                    value: e[r]
                })
            })), t = t.sort(((e, t) => e.key - t.key)), t.map((e => {
                let {
                    key: t,
                    value: r
                } = e;
                return `${r} ${t}%`
            })).join(", ")
        },
        c = (e, t) => {
            const {
                from: r = o.presetPrimaryColors.blue,
                to: n = o.presetPrimaryColors.blue,
                direction: s = ("rtl" === t ? "to left" : "to right")
            } = e, i = a(e, ["from", "to", "direction"]);
            if (0 !== Object.keys(i).length) {
                return {
                    backgroundImage: `linear-gradient(${s}, ${l(i)})`
                }
            }
            return {
                backgroundImage: `linear-gradient(${s}, ${r}, ${n})`
            }
        };
    var u = e => {
        const {
            prefixCls: t,
            direction: r,
            percent: n,
            strokeWidth: o,
            size: a,
            strokeColor: l,
            strokeLinecap: u = "round",
            children: f,
            trailColor: d = null,
            success: p
        } = e, g = l && "string" != typeof l ? c(l, r) : {
            backgroundColor: l
        }, m = "square" === u || "butt" === u ? 0 : void 0, y = {
            backgroundColor: d || void 0,
            borderRadius: m
        }, b = Object.assign({
            width: `${(0,i.validProgress)(n)}%`,
            height: o || ("small" === a ? 6 : 8),
            borderRadius: m
        }, g), v = (0, i.getSuccessPercent)(e), h = {
            width: `${(0,i.validProgress)(v)}%`,
            height: o || ("small" === a ? 6 : 8),
            borderRadius: m,
            backgroundColor: null == p ? void 0 : p.strokeColor
        };
        return s.createElement(s.Fragment, null, s.createElement("div", {
            className: `${t}-outer`
        }, s.createElement("div", {
            className: `${t}-inner`,
            style: y
        }, s.createElement("div", {
            className: `${t}-bg`,
            style: b
        }), void 0 !== v ? s.createElement("div", {
            className: `${t}-success-bg`,
            style: h
        }) : null)), f)
    }
})), r.register("jhhj0", (function(n, o) {
    e(n.exports, "default", (function() {
        return a
    }));
    var s = r("fe1on"),
        i = r("fywoC");
    var a = e => {
        const {
            size: r,
            steps: n,
            percent: o = 0,
            strokeWidth: a = 8,
            strokeColor: l,
            trailColor: c = null,
            prefixCls: u,
            children: f
        } = e, d = Math.round(n * (o / 100)), p = "small" === r ? 2 : 14, g = new Array(n);
        for (let e = 0; e < n; e++) {
            const r = Array.isArray(l) ? l[e] : l;
            g[e] = i.createElement("div", {
                key: e,
                className: t(s)(`${u}-steps-item`, {
                    [`${u}-steps-item-active`]: e <= d - 1
                }),
                style: {
                    backgroundColor: e <= d - 1 ? r : c,
                    width: p,
                    height: a
                }
            })
        }
        return i.createElement("div", {
            className: `${u}-steps-outer`
        }, g, f)
    }
})), r.register("8AW4e", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("lt5sb"),
        s = r("huF4L"),
        i = r("1QMe3"),
        a = r("kCC5O");
    const l = new(0, o.Keyframes)("antProgressActive", {
            "0%": {
                transform: "translateX(-100%) scaleX(0)",
                opacity: .1
            },
            "20%": {
                transform: "translateX(-100%) scaleX(0)",
                opacity: .5
            },
            to: {
                transform: "translateX(0) scaleX(1)",
                opacity: 0
            }
        }),
        c = e => {
            const {
                componentCls: t,
                iconCls: r
            } = e;
            return {
                [t]: Object.assign(Object.assign({}, (0, a.resetComponent)(e)), {
                    display: "inline-block",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-line": {
                        position: "relative",
                        width: "100%",
                        fontSize: e.fontSize,
                        marginInlineEnd: e.marginXS,
                        marginBottom: e.marginXS
                    },
                    [`${t}-outer`]: {
                        display: "inline-block",
                        width: "100%"
                    },
                    [`&${t}-show-info`]: {
                        [`${t}-outer`]: {
                            marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
                            paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`
                        }
                    },
                    [`${t}-inner`]: {
                        position: "relative",
                        display: "inline-block",
                        width: "100%",
                        overflow: "hidden",
                        verticalAlign: "middle",
                        backgroundColor: e.progressRemainingColor,
                        borderRadius: e.progressLineRadius
                    },
                    [`${t}-inner:not(${t}-circle-gradient)`]: {
                        [`${t}-circle-path`]: {
                            stroke: e.colorInfo
                        }
                    },
                    [`${t}-success-bg, ${t}-bg`]: {
                        position: "relative",
                        backgroundColor: e.colorInfo,
                        borderRadius: e.progressLineRadius,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
                    },
                    [`${t}-success-bg`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        backgroundColor: e.colorSuccess
                    },
                    [`${t}-text`]: {
                        display: "inline-block",
                        width: "2em",
                        marginInlineStart: e.marginXS,
                        color: e.progressInfoTextColor,
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        textAlign: "start",
                        verticalAlign: "middle",
                        wordBreak: "normal",
                        [r]: {
                            fontSize: e.fontSize
                        }
                    },
                    [`&${t}-status-active`]: {
                        [`${t}-bg::before`]: {
                            position: "absolute",
                            inset: 0,
                            backgroundColor: e.colorBgContainer,
                            borderRadius: e.progressLineRadius,
                            opacity: 0,
                            animationName: l,
                            animationDuration: e.progressActiveMotionDuration,
                            animationTimingFunction: e.motionEaseOutQuint,
                            animationIterationCount: "infinite",
                            content: '""'
                        }
                    },
                    [`&${t}-status-exception`]: {
                        [`${t}-bg`]: {
                            backgroundColor: e.colorError
                        },
                        [`${t}-text`]: {
                            color: e.colorError
                        }
                    },
                    [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
                        [`${t}-circle-path`]: {
                            stroke: e.colorError
                        }
                    },
                    [`&${t}-status-success`]: {
                        [`${t}-bg`]: {
                            backgroundColor: e.colorSuccess
                        },
                        [`${t}-text`]: {
                            color: e.colorSuccess
                        }
                    },
                    [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
                        [`${t}-circle-path`]: {
                            stroke: e.colorSuccess
                        }
                    }
                })
            }
        },
        u = e => {
            const {
                componentCls: t,
                iconCls: r
            } = e;
            return {
                [t]: {
                    [`${t}-circle-trail`]: {
                        stroke: e.progressRemainingColor
                    },
                    [`&${t}-circle ${t}-inner`]: {
                        position: "relative",
                        lineHeight: 1,
                        backgroundColor: "transparent"
                    },
                    [`&${t}-circle ${t}-text`]: {
                        position: "absolute",
                        insetBlockStart: "50%",
                        insetInlineStart: 0,
                        width: "100%",
                        margin: 0,
                        padding: 0,
                        color: e.colorText,
                        lineHeight: 1,
                        whiteSpace: "normal",
                        textAlign: "center",
                        transform: "translateY(-50%)",
                        [r]: {
                            fontSize: e.fontSize / e.fontSizeSM + "em"
                        }
                    },
                    [`${t}-circle&-status-exception`]: {
                        [`${t}-text`]: {
                            color: e.colorError
                        }
                    },
                    [`${t}-circle&-status-success`]: {
                        [`${t}-text`]: {
                            color: e.colorSuccess
                        }
                    }
                },
                [`${t}-inline-circle`]: {
                    lineHeight: 1,
                    [`${t}-inner`]: {
                        verticalAlign: "bottom"
                    }
                }
            }
        },
        f = e => {
            const {
                componentCls: t
            } = e;
            return {
                [t]: {
                    [`${t}-steps`]: {
                        display: "inline-block",
                        "&-outer": {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        },
                        "&-item": {
                            flexShrink: 0,
                            minWidth: e.progressStepMinWidth,
                            marginInlineEnd: e.progressStepMarginInlineEnd,
                            backgroundColor: e.progressRemainingColor,
                            transition: `all ${e.motionDurationSlow}`,
                            "&-active": {
                                backgroundColor: e.colorInfo
                            }
                        }
                    }
                }
            }
        },
        d = e => {
            const {
                componentCls: t,
                iconCls: r
            } = e;
            return {
                [t]: {
                    [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: {
                        fontSize: e.fontSizeSM
                    }
                }
            }
        };
    var p = (0, s.default)("Progress", (e => {
        const t = e.marginXXS / 2,
            r = (0, i.merge)(e, {
                progressLineRadius: 100,
                progressInfoTextColor: e.colorText,
                progressDefaultColor: e.colorInfo,
                progressRemainingColor: e.colorFillSecondary,
                progressStepMarginInlineEnd: t,
                progressStepMinWidth: t,
                progressActiveMotionDuration: "2.4s"
            });
        return [c(r), u(r), f(r), d(r)]
    }))
}));