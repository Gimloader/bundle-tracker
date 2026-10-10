import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    s as r
} from "./assertThisInitialized.js";
import {
    B as i,
    E as a,
    Ft as o,
    H as s,
    Ht as c,
    Ut as l,
    Vt as u,
    X as d,
    b as f,
    ct as p,
    lt as m,
    m as h,
    nt as g,
    s as _,
    tt as v,
    ut as y
} from "./Compact.js";
import {
    _ as b,
    i as x
} from "./color.js";
import {
    i as S,
    r as C
} from "./InfoCircleFilled.js";
import {
    t as w
} from "./tooltip.js";
import {
    n as T
} from "./useCSSVarCls.js";
import {
    t as E
} from "./CheckOutlined.js";
var D = e(l()),
    O = e(t()),
    k = {
        percent: 0,
        prefixCls: `rc-progress`,
        strokeColor: `#2db7f5`,
        strokeLinecap: `round`,
        strokeWidth: 1,
        trailColor: `#D9D9D9`,
        trailWidth: 1,
        gapPosition: `bottom`
    },
    A = function() {
        var e = (0, O.useRef)([]),
            t = (0, O.useRef)(null);
        return (0, O.useEffect)(function() {
            var n = Date.now(),
                r = !1;
            e.current.forEach(function(e) {
                if (e) {
                    r = !0;
                    var i = e.style;
                    i.transitionDuration = `.3s, .3s, .3s, .06s`, t.current && n - t.current < 100 && (i.transitionDuration = `0s, 0s`)
                }
            }), r && (t.current = Date.now())
        }), e.current
    };
c(), y();
var j = 0,
    M = p();

function N() {
    var e;
    return M ? (e = j, j += 1) : e = `TEST_OR_SSR`, e
}
var P = (function(e) {
        var t = O.useState(),
            n = m(t, 2),
            r = n[0],
            i = n[1];
        return O.useEffect(function() {
            i(`rc_progress_${N()}`)
        }, []), e || r
    }),
    F = function(e) {
        var t = e.bg,
            n = e.children;
        return O.createElement(`div`, {
            style: {
                width: `100%`,
                height: `100%`,
                background: t
            }
        }, n)
    };

function I(e, t) {
    return Object.keys(e).map(function(n) {
        var r = `${Math.floor(parseFloat(n)*t)}%`;
        return `${e[n]} ${r}`
    })
}
var L = O.forwardRef(function(e, t) {
        var n = e.prefixCls,
            r = e.color,
            i = e.gradientId,
            a = e.radius,
            o = e.style,
            s = e.ptg,
            c = e.strokeLinecap,
            l = e.strokeWidth,
            d = e.size,
            f = e.gapDegree,
            p = r && u(r) === `object`,
            m = p ? `#FFF` : void 0,
            h = d / 2,
            g = O.createElement(`circle`, {
                className: `${n}-circle-path`,
                r: a,
                cx: h,
                cy: h,
                stroke: m,
                strokeLinecap: c,
                strokeWidth: l,
                opacity: s === 0 ? 0 : 1,
                style: o,
                ref: t
            });
        if (!p) return g;
        var _ = `${i}-conic`,
            v = f ? `${180+f/2}deg` : `0deg`,
            y = I(r, (360 - f) / 360),
            b = I(r, 1),
            x = `conic-gradient(from ${v}, ${y.join(`, `)})`,
            S = `linear-gradient(to ${f?`bottom`:`top`}, ${b.join(`, `)})`;
        return O.createElement(O.Fragment, null, O.createElement(`mask`, {
            id: _
        }, g), O.createElement(`foreignObject`, {
            x: 0,
            y: 0,
            width: d,
            height: d,
            mask: `url(#${_})`
        }, O.createElement(F, {
            bg: S
        }, O.createElement(F, {
            bg: x
        }))))
    }),
    R = function(e, t, n, r, i, a, o, s, c, l) {
        var u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0,
            d = n / 100 * 360 * ((360 - a) / 360),
            f = a === 0 ? 0 : {
                bottom: 0,
                top: 180,
                left: 90,
                right: -90
            } [o],
            p = (100 - r) / 100 * t;
        c === `round` && r !== 100 && (p += l / 2, p >= t && (p = t - .01));
        var m = 50;
        return {
            stroke: typeof s == `string` ? s : void 0,
            strokeDasharray: `${t}px ${e}`,
            strokeDashoffset: p + u,
            transform: `rotate(${i+d+f}deg)`,
            transformOrigin: `${m}px ${m}px`,
            transition: `stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s`,
            fillOpacity: 0
        }
    };
n(), c(), g();
var z = [`id`, `prefixCls`, `steps`, `strokeWidth`, `trailWidth`, `gapDegree`, `gapPosition`, `trailColor`, `strokeLinecap`, `style`, `className`, `strokeColor`, `percent`];

function B(e) {
    var t = e ?? [];
    return Array.isArray(t) ? t : [t]
}
var V = function(e) {
    var t = o(o({}, k), e),
        n = t.id,
        i = t.prefixCls,
        a = t.steps,
        s = t.strokeWidth,
        c = t.trailWidth,
        l = t.gapDegree,
        d = l === void 0 ? 0 : l,
        f = t.gapPosition,
        p = t.trailColor,
        m = t.strokeLinecap,
        h = t.style,
        g = t.className,
        _ = t.strokeColor,
        y = t.percent,
        b = v(t, z),
        x = 50,
        S = `${P(n)}-gradient`,
        C = x - s / 2,
        w = Math.PI * 2 * C,
        T = d > 0 ? 90 + d / 2 : -90,
        E = w * ((360 - d) / 360),
        j = u(a) === `object` ? a : {
            count: a,
            gap: 2
        },
        M = j.count,
        N = j.gap,
        F = B(y),
        I = B(_),
        V = I.find(function(e) {
            return e && u(e) === `object`
        }),
        H = V && u(V) === `object` ? `butt` : m,
        U = R(w, E, 0, 100, T, d, f, p, H, s),
        W = A();
    return O.createElement(`svg`, r({
        className: (0, D.default)(`${i}-circle`, g),
        viewBox: `0 0 100 100`,
        style: h,
        id: n,
        role: `presentation`
    }, b), !M && O.createElement(`circle`, {
        className: `${i}-circle-trail`,
        r: C,
        cx: x,
        cy: x,
        stroke: p,
        strokeLinecap: H,
        strokeWidth: c || s,
        style: U
    }), M ? function() {
        var e = Math.round(M * (F[0] / 100)),
            t = 100 / M,
            n = 0;
        return Array(M).fill(null).map(function(r, a) {
            var o = a <= e - 1 ? I[0] : p,
                c = o && u(o) === `object` ? `url(#${S})` : void 0,
                l = R(w, E, n, t, T, d, f, o, `butt`, s, N);
            return n += (E - l.strokeDashoffset + N) * 100 / E, O.createElement(`circle`, {
                key: a,
                className: `${i}-circle-path`,
                r: C,
                cx: x,
                cy: x,
                stroke: c,
                strokeWidth: s,
                opacity: 1,
                style: l,
                ref: function(e) {
                    W[a] = e
                }
            })
        })
    }() : function() {
        var e = 0;
        return F.map(function(t, n) {
            var r = I[n] || I[I.length - 1],
                a = R(w, E, e, t, T, d, f, r, H, s);
            return e += t, O.createElement(L, {
                key: n,
                color: r,
                ptg: t,
                radius: C,
                prefixCls: i,
                gradientId: S,
                style: a,
                strokeLinecap: H,
                strokeWidth: s,
                gapDegree: d,
                ref: function(e) {
                    W[n] = e
                },
                size: 100
            })
        }).reverse()
    }())
};

function H(e) {
    return !e || e < 0 ? 0 : e > 100 ? 100 : e
}

function U({
    success: e,
    successPercent: t
}) {
    let n = t;
    return e && `progress` in e && (n = e.progress), e && `percent` in e && (n = e.percent), n
}
var W = ({
        percent: e,
        success: t,
        successPercent: n
    }) => {
        let r = H(U({
            success: t,
            successPercent: n
        }));
        return [r, H(H(e) - r)]
    },
    G = ({
        success: e = {},
        strokeColor: t
    }) => {
        let {
            strokeColor: n
        } = e;
        return [n || i.green, t || null]
    },
    K = (e, t, n) => {
        let r = -1,
            i = -1;
        if (t === `step`) {
            let t = n.steps,
                a = n.strokeWidth;
            typeof e == `string` || e === void 0 ? (r = e === `small` ? 2 : 14, i = a ?? 8) : typeof e == `number` ? [r, i] = [e, e] : [r = 14, i = 8] = Array.isArray(e) ? e : [e.width, e.height], r *= t
        } else if (t === `line`) {
            let t = n == null ? void 0 : n.strokeWidth;
            typeof e == `string` || e === void 0 ? i = t || (e === `small` ? 6 : 8) : typeof e == `number` ? [r, i] = [e, e] : [r = -1, i = 8] = Array.isArray(e) ? e : [e.width, e.height]
        } else(t === `circle` || t === `dashboard`) && (typeof e == `string` || e === void 0 ? [r, i] = e === `small` ? [60, 60] : [120, 120] : typeof e == `number` ? [r, i] = [e, e] : Array.isArray(e) && (r = e[0] ?? e[1] ?? 120, i = e[0] ?? e[1] ?? 120));
        return [r, i]
    },
    ee = 3,
    q = e => ee / e * 100,
    J = e => {
        let {
            prefixCls: t,
            trailColor: n = null,
            strokeLinecap: r = `round`,
            gapPosition: i,
            gapDegree: a,
            width: o = 120,
            type: s,
            children: c,
            success: l,
            size: u = o,
            steps: d
        } = e, [f, p] = K(u, `circle`), {
            strokeWidth: m
        } = e;
        m === void 0 && (m = Math.max(q(f), 6));
        let h = {
                width: f,
                height: p,
                fontSize: f * .15 + 6
            },
            g = O.useMemo(() => {
                if (a || a === 0) return a;
                if (s === `dashboard`) return 75
            }, [a, s]),
            _ = W(e),
            v = i || s === `dashboard` && `bottom` || void 0,
            y = Object.prototype.toString.call(e.strokeColor) === `[object Object]`,
            b = G({
                success: l,
                strokeColor: e.strokeColor
            }),
            x = (0, D.default)(`${t}-inner`, {
                [`${t}-circle-gradient`]: y
            }),
            S = O.createElement(V, {
                steps: d,
                percent: d ? _[1] : _,
                strokeWidth: m,
                trailWidth: m,
                strokeColor: d ? b[1] : b,
                strokeLinecap: r,
                trailColor: n,
                prefixCls: t,
                gapDegree: g,
                gapPosition: v
            }),
            C = f <= 20,
            T = O.createElement(`div`, {
                className: x,
                style: h
            }, S, !C && c);
        return C ? O.createElement(w, {
            title: c
        }, T) : T
    },
    Y = `--progress-line-stroke-color`,
    X = `--progress-percent`,
    Z = e => {
        let t = e ? `100%` : `-100%`;
        return new b(`antProgress${e?`RTL`:`LTR`}Active`, {
            "0%": {
                transform: `translateX(${t}) scaleX(0)`,
                opacity: .1
            },
            "20%": {
                transform: `translateX(${t}) scaleX(0)`,
                opacity: .5
            },
            to: {
                transform: `translateX(0) scaleX(1)`,
                opacity: 0
            }
        })
    },
    Q = e => {
        let {
            componentCls: t,
            iconCls: n
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, h(e)), {
                display: `inline-block`,
                "&-rtl": {
                    direction: `rtl`
                },
                "&-line": {
                    position: `relative`,
                    width: `100%`,
                    fontSize: e.fontSize
                },
                [`${t}-outer`]: {
                    display: `inline-flex`,
                    alignItems: `center`,
                    width: `100%`
                },
                [`${t}-inner`]: {
                    position: `relative`,
                    display: `inline-block`,
                    width: `100%`,
                    flex: 1,
                    overflow: `hidden`,
                    verticalAlign: `middle`,
                    backgroundColor: e.remainingColor,
                    borderRadius: e.lineBorderRadius
                },
                [`${t}-inner:not(${t}-circle-gradient)`]: {
                    [`${t}-circle-path`]: {
                        stroke: e.defaultColor
                    }
                },
                [`${t}-success-bg, ${t}-bg`]: {
                    position: `relative`,
                    background: e.defaultColor,
                    borderRadius: e.lineBorderRadius,
                    transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
                },
                [`${t}-layout-bottom`]: {
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    [`${t}-text`]: {
                        width: `max-content`,
                        marginInlineStart: 0,
                        marginTop: e.marginXXS
                    }
                },
                [`${t}-bg`]: {
                    overflow: `hidden`,
                    "&::after": {
                        content: `""`,
                        background: {
                            _multi_value_: !0,
                            value: [`inherit`, `var(${Y})`]
                        },
                        height: `100%`,
                        width: `calc(1 / var(${X}) * 100%)`,
                        display: `block`
                    },
                    [`&${t}-bg-inner`]: {
                        minWidth: `max-content`,
                        "&::after": {
                            content: `none`
                        },
                        [`${t}-text-inner`]: {
                            color: e.colorWhite,
                            [`&${t}-text-bright`]: {
                                color: `rgba(0, 0, 0, 0.45)`
                            }
                        }
                    }
                },
                [`${t}-success-bg`]: {
                    position: `absolute`,
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    backgroundColor: e.colorSuccess
                },
                [`${t}-text`]: {
                    display: `inline-block`,
                    marginInlineStart: e.marginXS,
                    color: e.colorText,
                    lineHeight: 1,
                    width: `2em`,
                    whiteSpace: `nowrap`,
                    textAlign: `start`,
                    verticalAlign: `middle`,
                    wordBreak: `normal`,
                    [n]: {
                        fontSize: e.fontSize
                    },
                    [`&${t}-text-outer`]: {
                        width: `max-content`
                    },
                    [`&${t}-text-outer${t}-text-start`]: {
                        width: `max-content`,
                        marginInlineStart: 0,
                        marginInlineEnd: e.marginXS
                    }
                },
                [`${t}-text-inner`]: {
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    width: `100%`,
                    height: `100%`,
                    marginInlineStart: 0,
                    padding: `0 ${d(e.paddingXXS)}`,
                    [`&${t}-text-start`]: {
                        justifyContent: `start`
                    },
                    [`&${t}-text-end`]: {
                        justifyContent: `end`
                    }
                },
                [`&${t}-status-active`]: {
                    [`${t}-bg::before`]: {
                        position: `absolute`,
                        inset: 0,
                        backgroundColor: e.colorBgContainer,
                        borderRadius: e.lineBorderRadius,
                        opacity: 0,
                        animationName: Z(),
                        animationDuration: e.progressActiveMotionDuration,
                        animationTimingFunction: e.motionEaseOutQuint,
                        animationIterationCount: `infinite`,
                        content: `""`
                    }
                },
                [`&${t}-rtl${t}-status-active`]: {
                    [`${t}-bg::before`]: {
                        animationName: Z(!0)
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
    te = e => {
        let {
            componentCls: t,
            iconCls: n
        } = e;
        return {
            [t]: {
                [`${t}-circle-trail`]: {
                    stroke: e.remainingColor
                },
                [`&${t}-circle ${t}-inner`]: {
                    position: `relative`,
                    lineHeight: 1,
                    backgroundColor: `transparent`
                },
                [`&${t}-circle ${t}-text`]: {
                    position: `absolute`,
                    insetBlockStart: `50%`,
                    insetInlineStart: 0,
                    width: `100%`,
                    margin: 0,
                    padding: 0,
                    color: e.circleTextColor,
                    fontSize: e.circleTextFontSize,
                    lineHeight: 1,
                    whiteSpace: `normal`,
                    textAlign: `center`,
                    transform: `translateY(-50%)`,
                    [n]: {
                        fontSize: e.circleIconFontSize
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
                    verticalAlign: `bottom`
                }
            }
        }
    },
    ne = e => {
        let {
            componentCls: t
        } = e;
        return {
            [t]: {
                [`${t}-steps`]: {
                    display: `inline-block`,
                    "&-outer": {
                        display: `flex`,
                        flexDirection: `row`,
                        alignItems: `center`
                    },
                    "&-item": {
                        flexShrink: 0,
                        minWidth: e.progressStepMinWidth,
                        marginInlineEnd: e.progressStepMarginInlineEnd,
                        backgroundColor: e.remainingColor,
                        transition: `all ${e.motionDurationSlow}`,
                        "&-active": {
                            backgroundColor: e.defaultColor
                        }
                    }
                }
            }
        }
    },
    re = e => {
        let {
            componentCls: t,
            iconCls: n
        } = e;
        return {
            [t]: {
                [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
                    fontSize: e.fontSizeSM
                }
            }
        }
    },
    ie = _(`Progress`, e => {
        let t = e.calc(e.marginXXS).div(2).equal(),
            n = f(e, {
                progressStepMarginInlineEnd: t,
                progressStepMinWidth: t,
                progressActiveMotionDuration: `2.4s`
            });
        return [Q(n), te(n), ne(n), re(n)]
    }, e => ({
        circleTextColor: e.colorText,
        defaultColor: e.colorInfo,
        remainingColor: e.colorFillSecondary,
        lineBorderRadius: 100,
        circleTextFontSize: `1em`,
        circleIconFontSize: `${e.fontSize/e.fontSizeSM}em`
    })),
    ae = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    oe = e => {
        let t = [];
        return Object.keys(e).forEach(n => {
            let r = parseFloat(n.replace(/%/g, ``));
            Number.isNaN(r) || t.push({
                key: r,
                value: e[n]
            })
        }), t = t.sort((e, t) => e.key - t.key), t.map(({
            key: e,
            value: t
        }) => `${t} ${e}%`).join(`, `)
    },
    se = (e, t) => {
        let {
            from: n = i.blue,
            to: r = i.blue,
            direction: a = t === `rtl` ? `to left` : `to right`
        } = e, o = ae(e, [`from`, `to`, `direction`]);
        if (Object.keys(o).length !== 0) {
            let e = `linear-gradient(${a}, ${oe(o)})`;
            return {
                background: e,
                [Y]: e
            }
        }
        let s = `linear-gradient(${a}, ${n}, ${r})`;
        return {
            background: s,
            [Y]: s
        }
    },
    $ = e => {
        let {
            prefixCls: t,
            direction: n,
            percent: r,
            size: i,
            strokeWidth: a,
            strokeColor: o,
            strokeLinecap: s = `round`,
            children: c,
            trailColor: l = null,
            percentPosition: u,
            success: d
        } = e, {
            align: f,
            type: p
        } = u, m = o && typeof o != `string` ? se(o, n) : {
            [Y]: o,
            background: o
        }, h = s === `square` || s === `butt` ? 0 : void 0, [g, _] = K(i ?? [-1, a || (i === `small` ? 6 : 8)], `line`, {
            strokeWidth: a
        }), v = {
            backgroundColor: l || void 0,
            borderRadius: h
        }, y = Object.assign(Object.assign({
            width: `${H(r)}%`,
            height: _,
            borderRadius: h
        }, m), {
            [X]: H(r) / 100
        }), b = U(e), x = {
            width: `${H(b)}%`,
            height: _,
            borderRadius: h,
            backgroundColor: d == null ? void 0 : d.strokeColor
        }, S = {
            width: g < 0 ? `100%` : g
        }, C = O.createElement(`div`, {
            className: `${t}-inner`,
            style: v
        }, O.createElement(`div`, {
            className: (0, D.default)(`${t}-bg`, `${t}-bg-${p}`),
            style: y
        }, p === `inner` && c), b !== void 0 && O.createElement(`div`, {
            className: `${t}-success-bg`,
            style: x
        })), w = p === `outer` && f === `start`, T = p === `outer` && f === `end`;
        return p === `outer` && f === `center` ? O.createElement(`div`, {
            className: `${t}-layout-bottom`
        }, C, c) : O.createElement(`div`, {
            className: `${t}-outer`,
            style: S
        }, w && c, C, T && c)
    },
    ce = e => {
        let {
            size: t,
            steps: n,
            rounding: r = Math.round,
            percent: i = 0,
            strokeWidth: a = 8,
            strokeColor: o,
            trailColor: s = null,
            prefixCls: c,
            children: l
        } = e, u = r(i / 100 * n), [d, f] = K(t ?? [t === `small` ? 2 : 14, a], `step`, {
            steps: n,
            strokeWidth: a
        }), p = d / n, m = Array.from({
            length: n
        });
        for (let e = 0; e < n; e++) {
            let t = Array.isArray(o) ? o[e] : o;
            m[e] = O.createElement(`div`, {
                key: e,
                className: (0, D.default)(`${c}-steps-item`, {
                    [`${c}-steps-item-active`]: e <= u - 1
                }),
                style: {
                    backgroundColor: e <= u - 1 ? t : s,
                    width: p,
                    height: f
                }
            })
        }
        return O.createElement(`div`, {
            className: `${c}-steps-outer`
        }, m, l)
    },
    le = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    ue = [`normal`, `exception`, `active`, `success`],
    de = O.forwardRef((e, t) => {
        let {
            prefixCls: n,
            className: r,
            rootClassName: i,
            steps: o,
            strokeColor: c,
            percent: l = 0,
            size: u = `default`,
            showInfo: d = !0,
            type: f = `line`,
            status: p,
            format: m,
            style: h,
            percentPosition: g = {}
        } = e, _ = le(e, [`prefixCls`, `className`, `rootClassName`, `steps`, `strokeColor`, `percent`, `size`, `showInfo`, `type`, `status`, `format`, `style`, `percentPosition`]), {
            align: v = `end`,
            type: y = `outer`
        } = g, b = Array.isArray(c) ? c[0] : c, w = typeof c == `string` || Array.isArray(c) ? c : void 0, k = O.useMemo(() => {
            if (b) {
                let e = typeof b == `string` ? b : Object.values(b)[0];
                return new s(e).isLight()
            }
            return !1
        }, [c]), A = O.useMemo(() => {
            var t, n;
            let r = U(e);
            return parseInt(r === void 0 ? (n = l ?? 0) == null ? void 0 : n.toString() : (t = r ?? 0) == null ? void 0 : t.toString(), 10)
        }, [l, e.success, e.successPercent]), j = O.useMemo(() => !ue.includes(p) && A >= 100 ? `success` : p || `normal`, [p, A]), {
            getPrefixCls: M,
            direction: N,
            progress: P
        } = O.useContext(a), F = M(`progress`, n), [I, L, R] = ie(F), z = f === `line`, B = z && !o, V = O.useMemo(() => {
            if (!d) return null;
            let t = U(e),
                n, r = m || (e => `${e}%`),
                i = z && k && y === `inner`;
            return y === `inner` || m || j !== `exception` && j !== `success` ? n = r(H(l), H(t)) : j === `exception` ? n = z ? O.createElement(T, null) : O.createElement(C, null) : j === `success` && (n = z ? O.createElement(S, null) : O.createElement(E, null)), O.createElement(`span`, {
                className: (0, D.default)(`${F}-text`, {
                    [`${F}-text-bright`]: i,
                    [`${F}-text-${v}`]: B,
                    [`${F}-text-${y}`]: B
                }),
                title: typeof n == `string` ? n : void 0
            }, n)
        }, [d, l, A, j, f, F, m]), W;
        f === `line` ? W = o ? O.createElement(ce, Object.assign({}, e, {
            strokeColor: w,
            prefixCls: F,
            steps: typeof o == `object` ? o.count : o
        }), V) : O.createElement($, Object.assign({}, e, {
            strokeColor: b,
            prefixCls: F,
            direction: N,
            percentPosition: {
                align: v,
                type: y
            }
        }), V) : (f === `circle` || f === `dashboard`) && (W = O.createElement(J, Object.assign({}, e, {
            strokeColor: b,
            prefixCls: F,
            progressStatus: j
        }), V));
        let G = (0, D.default)(F, `${F}-status-${j}`, {
            [`${F}-${f===`dashboard`&&`circle`||f}`]: f !== `line`,
            [`${F}-inline-circle`]: f === `circle` && K(u, `circle`)[0] <= 20,
            [`${F}-line`]: B,
            [`${F}-line-align-${v}`]: B,
            [`${F}-line-position-${y}`]: B,
            [`${F}-steps`]: o,
            [`${F}-show-info`]: d,
            [`${F}-${u}`]: typeof u == `string`,
            [`${F}-rtl`]: N === `rtl`
        }, P == null ? void 0 : P.className, r, i, L, R);
        return I(O.createElement(`div`, Object.assign({
            ref: t,
            style: Object.assign(Object.assign({}, P == null ? void 0 : P.style), h),
            className: G,
            role: `progressbar`,
            "aria-valuenow": A,
            "aria-valuemin": 0,
            "aria-valuemax": 100
        }, x(_, [`trailColor`, `strokeWidth`, `width`, `gapDegree`, `gapPosition`, `strokeLinecap`, `success`, `successPercent`])), W))
    });
export {
    de as t
};