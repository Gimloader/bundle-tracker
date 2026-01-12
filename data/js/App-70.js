import {
    r as d,
    u as E,
    j as s,
    U as z,
    d as v,
    x as k,
    s as $e,
    T as Le,
    aW as Be,
    t as We,
    dI as oe,
    _ as ye,
    dg as qe,
    aw as Ue,
    bg as re,
    ar as be,
    e as we,
    y as Ge,
    n as He
} from "./_index.js";
import {
    g as X,
    L as Ve
} from "./App-44.js";
import {
    a as Ze,
    g as Ce
} from "./Pack.js";
import {
    M as je
} from "./Button.js";
import {
    a as Ye,
    f as Je,
    i as Ke,
    e as ke,
    u as Qe
} from "./ElementIds.js";
import {
    C as Xe
} from "./Names.js";
import {
    u as et,
    r as Ie,
    p as tt,
    P as rt,
    C as nt,
    b as at,
    c as it,
    a as ot,
    d as st
} from "./App-67.js";
import {
    F as ct
} from "./FontAwesomeIcon.js";
import {
    a as _,
    p as G
} from "./playSound.js";
import {
    G as T
} from "./GetAssetPath.js";
import {
    S as lt
} from "./index-2.js";
import {
    u as V
} from "./use-motion-value.js";
import {
    u as ut
} from "./use-transform.js";
import {
    M as dt,
    s as mt,
    j as ft,
    m as Se,
    k as gt,
    g as ht
} from "./motion.js";
import {
    b as vt,
    a as xt,
    i as pt
} from "./toInteger.js";
import {
    j as yt,
    k as bt,
    l as wt,
    m as Ct,
    o as jt,
    p as kt,
    q as It,
    r as St,
    s as Pt,
    t as Tt,
    v as Mt,
    x as Ot,
    S as se
} from "./capitalize.js";
import {
    f as At,
    G as Et,
    A as Rt
} from "./toNumber.js";
import {
    u as ne,
    A as Nt
} from "./index-17.js";
import {
    u as zt
} from "./useQuery.js";
import {
    C as ce
} from "./Centered.js";
import {
    C as Dt
} from "./CircularProgress.js";
import "./SeasonTicketName.js";
import "./SeasonTicketInlineUpsell.js";
import "./AccessibleAnchor.js";
import "./OwnsSeasonTicket.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./confetti.js";
import "./howler.js";
import "./use-force-update.js";

function Ft(e) {
    const t = d.useRef(0),
        {
            isStatic: n
        } = d.useContext(dt);
    d.useEffect(() => {
        if (n) return;
        const r = ({
            timestamp: a,
            delta: i
        }) => {
            t.current || (t.current = a), e(a - t.current, i)
        };
        return mt.update(r, !0), () => ft.update(r)
    }, [e])
}
const _t = e => {
        const [t, n, r] = E(!1);
        return s.jsx("div", {
            onMouseEnter: n,
            onMouseLeave: r,
            children: s.jsx(Ze, {
                imageUrl: Ce(e.packId),
                hovering: t
            })
        })
    },
    $t = e => s.jsx(Lt, {
        children: e.title
    }),
    Lt = v.div`
  font-size: 40px;
  font-family: ${z.FugazOne};
  margin-bottom: 10px;
`,
    Bt = e => {
        const {
            cost: t,
            packCount: n,
            canAfford: r
        } = e, a = d.useMemo(() => `Open for ${t} ${Xe.currency}`, [t]), i = !r || e.isLoading;
        return s.jsx(je, {
            ariaLabel: a,
            onClick: e.onClick,
            type: "success",
            disabled: i,
            size: "large",
            children: s.jsxs(Wt, {
                children: [s.jsxs("div", {
                    style: {
                        marginTop: 3.5
                    },
                    children: ["Open", n > 1 ? ` ${n} Packs` : "", " For"]
                }), s.jsx("div", {
                    style: {
                        marginLeft: 10
                    },
                    children: s.jsx(Ye, {
                        amount: t,
                        size: 16,
                        grayscale: i
                    })
                })]
            })
        })
    },
    Wt = v.div.attrs({
        className: "flex vc"
    })`
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1;
  font-family: ${z.FugazOne};
`,
    q = 116,
    qt = e => {
        const [t, n, r] = E(!1), {
            data: a
        } = et(), {
            cosmetic: i
        } = e, o = a && a.ownedCosmetics.some(c => c.cosmetic.id === i.id);
        return s.jsxs(s.Fragment, {
            children: [s.jsxs(Ht, {
                children: [s.jsx(Zt, {
                    onClick: () => {
                        tt(), n()
                    },
                    children: s.jsx(Vt, {
                        style: {
                            background: Ie(i.rarity),
                            padding: i.type === Je.sticker ? 28 : 12
                        },
                        children: s.jsx("img", {
                            src: X({
                                id: i.id,
                                type: i.type
                            }),
                            draggable: !1,
                            className: "maxWidth"
                        })
                    })
                }), s.jsxs("div", {
                    className: "flex vc",
                    style: {
                        marginTop: 10,
                        lineHeight: 1
                    },
                    children: [s.jsxs(Yt, {
                        children: [e.percentage.toFixed(2), "%"]
                    }), o ? s.jsx("div", {
                        className: "flex",
                        style: {
                            marginLeft: 6
                        },
                        children: s.jsx(ct, {
                            style: {
                                color: "#81C784",
                                fontSize: 12
                            },
                            name: "fas fa-check"
                        })
                    }) : null]
                })]
            }), s.jsx(rt, {
                open: t,
                image: X({
                    id: i.id,
                    type: i.type
                }),
                close: r,
                callToAction: () => {},
                ...i
            })]
        })
    },
    Ut = e => {
        const t = k.useMemo(() => e.items.map(n => {
            const r = e.cosmetics.find(o => o.id === n.cosmeticId),
                a = e.items.reduce((o, c) => o + c.count, 0),
                i = n.count / a * 100;
            return {
                cosmetic: r,
                percentage: i
            }
        }), [e.cosmetics, e.items]);
        return s.jsx(Gt, {
            children: t.map(n => s.jsx(qt, {
                cosmetic: n.cosmetic,
                percentage: n.percentage
            }, n.cosmetic.id))
        })
    },
    Gt = v.div.attrs({
        className: "maxWidth"
    })`
  background: rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${q}px);
  grid-gap: 20px;
  justify-content: center;
  border-radius: 8px;
`,
    Ht = v.div`
  width: ${q}px;
`,
    Vt = v.div.attrs({
        className: "flex-center maxAll"
    })`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
`,
    Zt = v.div`
  overflow: hidden;
  height: ${q}px;
  width: ${q}px;
  border: 4px solid white;
  border-radius: 8px;
`,
    Yt = v.div`
  font-family: ${z.FugazOne};
  font-size: 14px;
`,
    Jt = e => {
        const [t, n] = k.useState(!1), [r, a] = k.useState(1), {
            packData: i,
            cosmosData: o
        } = e;
        $e(() => {
            _({
                path: T("cosmos/drumroll.mp3")
            }), _({
                path: T("cosmos/packPurchased.mp3")
            }), _({
                path: T("cosmos/packOpen1.mp3")
            }), _({
                path: T("cosmos/packOpen2.mp3")
            })
        });
        const c = () => {
            t || (G({
                path: T("cosmos/packPurchased.mp3"),
                volume: .7
            }), Be({
                url: "/api/cosmos/pack/open",
                data: {
                    pack: e.packId,
                    count: r
                },
                success: l => {
                    e.setPackItems(l), at(), Ke()
                },
                error: l => {
                    We({
                        e: l,
                        default: {
                            title: "Error purchasing pack",
                            content: "Please try again."
                        }
                    })
                },
                both: () => {
                    n(!1)
                }
            }))
        };
        return s.jsxs(s.Fragment, {
            children: [e.pageMode ? s.jsx(Le, {
                title: i.name
            }) : null, s.jsx(Ve, {
                customWidth: 740,
                children: s.jsxs(Kt, {
                    children: [s.jsxs(lt, {
                        className: "maxWidth",
                        size: 20,
                        direction: "vertical",
                        align: "center",
                        style: {
                            justifyContent: "center"
                        },
                        children: [s.jsx(_t, {
                            packId: e.packId
                        }), s.jsxs(Qt, {
                            children: [s.jsx($t, {
                                title: i.name
                            }), s.jsx(Bt, {
                                cost: i.currencyCost * r,
                                isLoading: t,
                                canAfford: o.currency >= i.currencyCost * r,
                                onClick: c,
                                packCount: r
                            }), s.jsx(nt, {
                                count: r,
                                setCount: a
                            })]
                        })]
                    }), s.jsx(Ut, {
                        items: i.items,
                        cosmetics: i.cosmetics
                    })]
                })
            })]
        })
    },
    Kt = v.div.attrs({
        className: "flex-center flex-column"
    })`
  padding-top: 20px;
  font-family: ${z.FugazOne};
  text-transform: uppercase;
  flex: 1;
`,
    Qt = v.div.attrs({
        className: "flex-center flex-column"
    })``,
    j = {
        pack: {
            scale: 1.15,
            delay: 200,
            duration: 3e3,
            intensity: 30,
            exit: {
                scale: 3.5,
                duration: 300,
                ease: "anticipate",
                confetti: {
                    delay: 70
                }
            }
        }
    },
    Xt = e => {
        const t = V(0),
            n = V(0),
            r = V(0),
            a = ut(r, b => `invert(${b/2}) brightness(${b+1})`),
            i = d.useRef(null),
            [o, c] = E(!1),
            l = d.useRef(!1),
            u = () => {
                i.current && i.current.stop(), f()
            },
            f = () => {
                c(), l.current || (l.current = !0, e.onComplete())
            };
        d.useEffect(() => {
            i.current = G({
                path: T("cosmos/drumroll.mp3"),
                volume: .6
            })
        }, []), Ft(b => {
            if (b < j.pack.delay) return;
            const y = gt(Math.min(1, (b - j.pack.delay) / j.pack.duration));
            y === 1 && f(), r.set(y);
            const w = j.pack.intensity * y,
                I = Math.sin(b / 35) * w;
            t.set(I);
            const p = I * 2;
            n.set(p)
        });
        const m = d.useMemo(() => o ? {
                scale: j.pack.exit.scale,
                opacity: 0
            } : {
                scale: j.pack.scale
            }, [o]),
            g = d.useMemo(() => o ? {
                duration: j.pack.exit.duration / 1e3,
                ease: j.pack.exit.ease
            } : {
                duration: j.pack.duration / 1e3,
                delay: j.pack.delay / 1e3
            }, [o]),
            h = d.useCallback(() => {
                o && e.onExit()
            }, [o]);
        return s.jsx(Pe, {
            onDoubleClick: u,
            children: s.jsx(er, {
                animate: m,
                transition: g,
                style: {
                    x: n,
                    rotate: t,
                    filter: a
                },
                onAnimationComplete: h,
                src: Ce(e.packId),
                draggable: !1
            })
        })
    },
    Pe = v.div.attrs({
        className: "maxAll flex-center animated fadeIn"
    })`
  position: absolute;
  top: 0;
  left: 0;
`,
    er = v(Se.img)`
  height: 400px;
  transform-origin: center;
  @media (max-width: 620px) {
    height: 300px;
  }
`;
var $ = {},
    le;

function tr() {
    if (le) return $;
    le = 1, Object.defineProperty($, "__esModule", {
        value: !0
    }), $.default = e;

    function e(t) {
        return t.displayName || t.name || (typeof t == "string" && t.length > 0 ? t : "Unknown")
    }
    return $
}
tr();

function L(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function U() {
    return U = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, U.apply(this, arguments)
}

function rr(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function P(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function nr(e) {
    var t = function(n) {
        rr(r, n);

        function r() {
            for (var i, o = arguments.length, c = new Array(o), l = 0; l < o; l++) c[l] = arguments[l];
            return i = n.call.apply(n, [this].concat(c)) || this, L(P(P(i)), "cachedTheme", void 0), L(P(P(i)), "lastOuterTheme", void 0), L(P(P(i)), "lastTheme", void 0), L(P(P(i)), "renderProvider", function(u) {
                var f = i.props.children;
                return k.createElement(e.Provider, {
                    value: i.getTheme(u)
                }, f)
            }), i
        }
        var a = r.prototype;
        return a.getTheme = function(o) {
            if (this.props.theme !== this.lastTheme || o !== this.lastOuterTheme || !this.cachedTheme)
                if (this.lastOuterTheme = o, this.lastTheme = this.props.theme, typeof this.lastTheme == "function") {
                    var c = this.props.theme;
                    this.cachedTheme = c(o)
                } else {
                    var l = this.props.theme;
                    this.cachedTheme = o ? U({}, o, l) : l
                } return this.cachedTheme
        }, a.render = function() {
            var o = this.props.children;
            return o ? k.createElement(e.Consumer, null, this.renderProvider) : null
        }, r
    }(k.Component);
    return t
}

function ar(e) {
    return function(n) {
        var r = k.forwardRef(function(a, i) {
            return k.createElement(e.Consumer, null, function(o) {
                return k.createElement(n, U({
                    theme: o,
                    ref: i
                }, a))
            })
        });
        return yt(r, n), r
    }
}

function ir(e) {
    var t = function() {
        var r = k.useContext(e);
        return r
    };
    return t
}

function or(e) {
    return {
        context: e,
        withTheme: ar(e),
        useTheme: ir(e),
        ThemeProvider: nr(e)
    }
}
var Te = d.createContext();
or(Te);

function sr(e) {
    var t, n = e.Symbol;
    return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
}
var A;
typeof self < "u" ? A = self : typeof window < "u" ? A = window : typeof oe < "u" ? A = oe : typeof module < "u" ? A = module : A = Function("return this")();
var ue = sr(A),
    de = function(t) {
        return t && t[ue] && t === t[ue]()
    },
    cr = function(t) {
        return {
            onCreateRule: function(r, a, i) {
                if (!de(a)) return null;
                var o = a,
                    c = bt(r, {}, i);
                return o.subscribe(function(l) {
                    for (var u in l) c.prop(u, l[u], t)
                }), c
            },
            onProcessRule: function(r) {
                if (!(r && r.type !== "style")) {
                    var a = r,
                        i = a.style,
                        o = function(f) {
                            var m = i[f];
                            if (!de(m)) return "continue";
                            delete i[f], m.subscribe({
                                next: function(h) {
                                    a.prop(f, h, t)
                                }
                            })
                        };
                    for (var c in i) var l = o(c)
                }
            }
        }
    },
    lr = /;\n/,
    ur = function(t) {
        for (var n = {}, r = t.split(lr), a = 0; a < r.length; a++) {
            var i = (r[a] || "").trim();
            if (i) {
                var o = i.indexOf(":");
                if (o !== -1) {
                    var c = i.substr(0, o).trim(),
                        l = i.substr(o + 1).trim();
                    n[c] = l
                }
            }
        }
        return n
    },
    dr = function(t) {
        typeof t.style == "string" && (t.style = ur(t.style))
    };

function mr() {
    return {
        onProcessRule: dr
    }
}
var W = function(t) {
        return t && typeof t == "object" && !Array.isArray(t)
    },
    Z = "extendCurrValue" + Date.now();

function fr(e, t, n, r) {
    var a = typeof e.extend;
    if (a === "string") {
        if (!n) return;
        var i = n.getRule(e.extend);
        if (!i || i === t) return;
        var o = i.options.parent;
        if (o) {
            var c = o.rules.raw[e.extend];
            M(c, t, n, r)
        }
        return
    }
    if (Array.isArray(e.extend)) {
        for (var l = 0; l < e.extend.length; l++) {
            var u = e.extend[l],
                f = typeof u == "string" ? ye({}, e, {
                    extend: u
                }) : e.extend[l];
            M(f, t, n, r)
        }
        return
    }
    for (var m in e.extend) {
        if (m === "extend") {
            M(e.extend.extend, t, n, r);
            continue
        }
        if (W(e.extend[m])) {
            m in r || (r[m] = {}), M(e.extend[m], t, n, r[m]);
            continue
        }
        r[m] = e.extend[m]
    }
}

function gr(e, t, n, r) {
    for (var a in e)
        if (a !== "extend") {
            if (W(r[a]) && W(e[a])) {
                M(e[a], t, n, r[a]);
                continue
            }
            if (W(e[a])) {
                r[a] = M(e[a], t, n);
                continue
            }
            r[a] = e[a]
        }
}

function M(e, t, n, r) {
    return r === void 0 && (r = {}), fr(e, t, n, r), gr(e, t, n, r), r
}

function hr() {
    function e(n, r, a) {
        return "extend" in n ? M(n, r, a) : n
    }

    function t(n, r, a) {
        if (r !== "extend") return n;
        if (n == null || n === !1) {
            for (var i in a[Z]) a.prop(i, null);
            return a[Z] = null, null
        }
        if (typeof n == "object") {
            for (var o in n) a.prop(o, n[o]);
            a[Z] = n
        }
        return null
    }
    return {
        onProcessStyle: e,
        onChangeValue: t
    }
}

function ee(e, t) {
    if (!t) return !0;
    if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++) {
            var r = ee(e, t[n]);
            if (!r) return !1
        }
        return !0
    }
    if (t.indexOf(" ") > -1) return ee(e, t.split(" "));
    var a = e.options.parent;
    if (t[0] === "$") {
        var i = a.getRule(t.substr(1));
        return !i || i === e ? !1 : (a.classes[e.key] += " " + a.classes[i.key], !0)
    }
    return a.classes[e.key] += " " + t, !0
}

function vr() {
    function e(t, n) {
        return "composes" in t && (ee(n, t.composes), delete t.composes), t
    }
    return {
        onProcessStyle: e
    }
}
var xr = {
        "background-size": !0,
        "background-position": !0,
        border: !0,
        "border-bottom": !0,
        "border-left": !0,
        "border-top": !0,
        "border-right": !0,
        "border-radius": !0,
        "border-image": !0,
        "border-width": !0,
        "border-style": !0,
        "border-color": !0,
        "box-shadow": !0,
        flex: !0,
        margin: !0,
        padding: !0,
        outline: !0,
        "transform-origin": !0,
        transform: !0,
        transition: !0
    },
    pr = {
        position: !0,
        size: !0
    },
    B = {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        background: {
            attachment: null,
            color: null,
            image: null,
            position: null,
            repeat: null
        },
        border: {
            width: null,
            style: null,
            color: null
        },
        "border-top": {
            width: null,
            style: null,
            color: null
        },
        "border-right": {
            width: null,
            style: null,
            color: null
        },
        "border-bottom": {
            width: null,
            style: null,
            color: null
        },
        "border-left": {
            width: null,
            style: null,
            color: null
        },
        outline: {
            width: null,
            style: null,
            color: null
        },
        "list-style": {
            type: null,
            position: null,
            image: null
        },
        transition: {
            property: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null
        },
        animation: {
            name: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null,
            "iteration-count": null,
            iterationCount: null,
            direction: null,
            "fill-mode": null,
            fillMode: null,
            "play-state": null,
            playState: null
        },
        "box-shadow": {
            x: 0,
            y: 0,
            blur: 0,
            spread: 0,
            color: null,
            inset: null
        },
        "text-shadow": {
            x: 0,
            y: 0,
            blur: null,
            color: null
        }
    },
    Y = {
        border: {
            radius: "border-radius",
            image: "border-image",
            width: "border-width",
            style: "border-style",
            color: "border-color"
        },
        "border-bottom": {
            width: "border-bottom-width",
            style: "border-bottom-style",
            color: "border-bottom-color"
        },
        "border-top": {
            width: "border-top-width",
            style: "border-top-style",
            color: "border-top-color"
        },
        "border-left": {
            width: "border-left-width",
            style: "border-left-style",
            color: "border-left-color"
        },
        "border-right": {
            width: "border-right-width",
            style: "border-right-style",
            color: "border-right-color"
        },
        background: {
            size: "background-size",
            image: "background-image"
        },
        font: {
            style: "font-style",
            variant: "font-variant",
            weight: "font-weight",
            stretch: "font-stretch",
            size: "font-size",
            family: "font-family",
            lineHeight: "line-height",
            "line-height": "line-height"
        },
        flex: {
            grow: "flex-grow",
            basis: "flex-basis",
            direction: "flex-direction",
            wrap: "flex-wrap",
            flow: "flex-flow",
            shrink: "flex-shrink"
        },
        align: {
            self: "align-self",
            items: "align-items",
            content: "align-content"
        },
        grid: {
            "template-columns": "grid-template-columns",
            templateColumns: "grid-template-columns",
            "template-rows": "grid-template-rows",
            templateRows: "grid-template-rows",
            "template-areas": "grid-template-areas",
            templateAreas: "grid-template-areas",
            template: "grid-template",
            "auto-columns": "grid-auto-columns",
            autoColumns: "grid-auto-columns",
            "auto-rows": "grid-auto-rows",
            autoRows: "grid-auto-rows",
            "auto-flow": "grid-auto-flow",
            autoFlow: "grid-auto-flow",
            row: "grid-row",
            column: "grid-column",
            "row-start": "grid-row-start",
            rowStart: "grid-row-start",
            "row-end": "grid-row-end",
            rowEnd: "grid-row-end",
            "column-start": "grid-column-start",
            columnStart: "grid-column-start",
            "column-end": "grid-column-end",
            columnEnd: "grid-column-end",
            area: "grid-area",
            gap: "grid-gap",
            "row-gap": "grid-row-gap",
            rowGap: "grid-row-gap",
            "column-gap": "grid-column-gap",
            columnGap: "grid-column-gap"
        }
    };

function yr(e, t, n) {
    return e.map(function(r) {
        return Oe(r, t, n, !1, !0)
    })
}

function Me(e, t, n, r) {
    return n[t] == null ? e : e.length === 0 ? [] : Array.isArray(e[0]) ? Me(e[0], t, n, r) : typeof e[0] == "object" ? yr(e, t, r) : [e]
}

function Oe(e, t, n, r, a) {
    if (!(B[t] || Y[t])) return [];
    var i = [];
    if (Y[t] && (e = br(e, n, Y[t], r)), Object.keys(e).length)
        for (var o in B[t]) {
            if (e[o]) {
                Array.isArray(e[o]) ? i.push(pr[o] === null ? e[o] : e[o].join(" ")) : i.push(e[o]);
                continue
            }
            B[t][o] != null && i.push(B[t][o])
        }
    return !i.length || a ? i : [i]
}

function br(e, t, n, r) {
    for (var a in n) {
        var i = n[a];
        if (typeof e[a] < "u" && (r || !t.prop(i))) {
            var o, c = N((o = {}, o[i] = e[a], o), t)[i];
            r ? t.style.fallbacks[i] = c : t.style[i] = c
        }
        delete e[a]
    }
    return e
}

function N(e, t, n) {
    for (var r in e) {
        var a = e[r];
        if (Array.isArray(a)) {
            if (!Array.isArray(a[0])) {
                if (r === "fallbacks") {
                    for (var i = 0; i < e.fallbacks.length; i++) e.fallbacks[i] = N(e.fallbacks[i], t, !0);
                    continue
                }
                e[r] = Me(a, r, xr, t), e[r].length || delete e[r]
            }
        } else if (typeof a == "object") {
            if (r === "fallbacks") {
                e.fallbacks = N(e.fallbacks, t, !0);
                continue
            }
            e[r] = Oe(a, r, t, n), e[r].length || delete e[r]
        } else e[r] === "" && delete e[r]
    }
    return e
}

function wr() {
    function e(t, n) {
        if (!t || n.type !== "style") return t;
        if (Array.isArray(t)) {
            for (var r = 0; r < t.length; r++) t[r] = N(t[r], n);
            return t
        }
        return N(t, n)
    }
    return {
        onProcessStyle: e
    }
}
var Cr = function(t) {
        return t === void 0 && (t = {}), {
            plugins: [wt(), cr(t.observable), mr(), Ct(), hr(), jt(), vr(), kt(), It(t.defaultUnit), wr(), St(), Pt()]
        }
    },
    jr = Number.MIN_SAFE_INTEGER || -1e9,
    kr = function() {
        return jr++
    },
    Ir = d.createContext({
        classNamePrefix: "",
        disableStylesGeneration: !1,
        isSSR: !Tt
    }),
    me = new Map,
    ae = function(t, n) {
        var r = t.managers;
        if (r) return r[n] || (r[n] = new se), r[n];
        var a = me.get(n);
        return a || (a = new se, me.set(n, a)), a
    },
    fe = function(t) {
        var n = t.sheet,
            r = t.context,
            a = t.index,
            i = t.theme;
        if (n) {
            var o = ae(r, a);
            o.manage(i), r.registry && r.registry.add(n)
        }
    },
    Sr = function(t) {
        if (t.sheet) {
            var n = ae(t.context, t.index);
            n.unmanage(t.theme)
        }
    },
    Pr = Ot(Cr()),
    Ae = new WeakMap,
    Ee = function(t) {
        return Ae.get(t)
    },
    Tr = function(t, n) {
        Ae.set(t, n)
    },
    Mr = function(t) {
        var n = t.styles;
        return typeof n != "function" ? n : n(t.theme)
    };

function Or(e, t) {
    var n;
    e.context.id && e.context.id.minify != null && (n = e.context.id.minify);
    var r = e.context.classNamePrefix || "";
    e.name && !n && (r += e.name.replace(/\s/g, "-") + "-");
    var a = "";
    return e.name && (a = e.name + ", "), a += typeof e.styles == "function" ? "Themed" : "Unthemed", ye({}, e.sheetOptions, {
        index: e.index,
        meta: a,
        classNamePrefix: r,
        link: t,
        generateId: e.sheetOptions && e.sheetOptions.generateId ? e.sheetOptions.generateId : e.context.generateId
    })
}
var Ar = function(t) {
        if (!t.context.disableStylesGeneration) {
            var n = ae(t.context, t.index),
                r = n.get(t.theme);
            if (r) return r;
            var a = t.context.jss || Pr,
                i = Mr(t),
                o = Mt(i),
                c = a.createStyleSheet(i, Or(t, o !== null));
            return Tr(c, {
                dynamicStyles: o,
                styles: i
            }), n.add(t.theme, c), c
        }
    },
    Er = function(t, n) {
        for (var r in n) t.deleteRule(n[r])
    },
    Rr = function(t, n, r) {
        for (var a in r) n.updateOne(r[a], t)
    },
    Nr = function(t, n) {
        var r = Ee(t);
        if (r) {
            var a = {};
            for (var i in r.dynamicStyles)
                for (var o = t.rules.index.length, c = t.addRule(i, r.dynamicStyles[i]), l = o; l < t.rules.index.length; l++) {
                    var u = t.rules.index[l];
                    t.updateOne(u, n), a[c === u ? i : u.key] = u
                }
            return a
        }
    },
    zr = function(t, n) {
        if (!n) return t.classes;
        var r = Ee(t);
        if (!r) return t.classes;
        var a = {};
        for (var i in r.styles) a[i] = t.classes[i], i in n && (a[i] += " " + t.classes[n[i].key]);
        return a
    };

function ge(e) {
    return e ? d.useEffect : k.useInsertionEffect || d.useLayoutEffect
}
var J = {},
    Dr = function(t, n) {
        n === void 0 && (n = {});
        var r = n,
            a = r.index,
            i = a === void 0 ? kr() : a,
            o = r.theming,
            c = r.name,
            l = qe(r, ["index", "theming", "name"]),
            u = o && o.context || Te,
            f = function(h) {
                return typeof t == "function" && (h || d.useContext(u)) || J
            },
            m = {};
        return function(h) {
            var b = d.useRef(!0),
                y = d.useContext(Ir),
                w = f(h && h.theme),
                I = d.useMemo(function() {
                    var S = Ar({
                        context: y,
                        styles: t,
                        name: c,
                        theme: w,
                        index: i,
                        sheetOptions: l
                    });
                    return S && y.isSSR && fe({
                        index: i,
                        context: y,
                        sheet: S,
                        theme: w
                    }), [S, S ? Nr(S, h) : null]
                }, [y, w]),
                p = I[0],
                C = I[1];
            ge(y.isSSR)(function() {
                p && C && !b.current && Rr(h, p, C)
            }, [h]), ge(y.isSSR)(function() {
                return p && fe({
                        index: i,
                        context: y,
                        sheet: p,
                        theme: w
                    }),
                    function() {
                        p && (Sr({
                            index: i,
                            context: y,
                            sheet: p,
                            theme: w
                        }), C && Er(p, C))
                    }
            }, [p]);
            var D = d.useMemo(function() {
                return p && C ? zr(p, C) : m
            }, [p, C]);
            return d.useDebugValue(D), d.useDebugValue(w === J ? "No theme" : w), d.useEffect(function() {
                b.current = !1
            }), D
        }
    },
    K, he;

function Fr() {
    if (he) return K;
    he = 1;
    var e = At(),
        t = vt(),
        n = Et(),
        r = Rt(),
        a = e.isFinite,
        i = Math.min;

    function o(c) {
        var l = Math[c];
        return function(u, f) {
            if (u = n(u), f = f == null ? 0 : i(t(f), 292), f && a(u)) {
                var m = (r(u) + "e").split("e"),
                    g = l(m[0] + "e" + (+m[1] + f));
                return m = (r(g) + "e").split("e"), +(m[0] + "e" + (+m[1] - f))
            }
            return l(u)
        }
    }
    return K = o, K
}
var Q, ve;

function _r() {
    if (ve) return Q;
    ve = 1;
    var e = Fr(),
        t = e("round");
    return Q = t, Q
}
var $r = _r();
const R = Ue($r);
var x = function() {
    return x = Object.assign || function(t) {
        for (var n, r = 1, a = arguments.length; r < a; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, x.apply(this, arguments)
};

function Lr(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
}
var te = function(e, t, n, r, a) {
        return (e - t) * (a - r) / (n - t) + r
    },
    Re = function(e, t) {
        var n = e + t;
        return n > 360 ? n - 360 : n
    },
    Ne = function() {
        return Math.random() > .5
    },
    ze = [0, 0, 1],
    ie = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
        [1, 0, 0],
        [0, 1, 0], ze
    ],
    Br = function(e) {
        return !pt(ie[e], ze) && Ne()
    },
    xe = 200,
    Wr = 800,
    qr = .1,
    Ur = .25,
    pe = .5,
    Gr = ie.reduce(function(e, t, n) {
        var r;
        return x(x({}, e), (r = {}, r["@keyframes rotation-".concat(n)] = {
            "50%": {
                transform: "rotate3d(".concat(t.map(function(a) {
                    return a / 2
                }).join(), ", 180deg)")
            },
            "100%": {
                transform: "rotate3d(".concat(t.join(), ", 360deg)")
            }
        }, r))
    }, {}),
    Hr = function(e, t, n) {
        var r = typeof t == "string" ? t : "".concat(t, "px"),
            a = e.reduce(function(i, o, c) {
                var l, u = te(Math.abs(Re(o, 90) - 180), 0, 180, -n / 2, n / 2);
                return x(x({}, i), (l = {}, l["@keyframes x-axis-".concat(c)] = {
                    to: {
                        transform: "translateX(".concat(u, "px)")
                    }
                }, l))
            }, {});
        return x({
            "@keyframes y-axis": {
                to: {
                    transform: "translateY(".concat(r, ")")
                }
            }
        }, a)
    },
    Vr = function(e, t, n, r, a) {
        var i, o = Math.round(Math.random() * (Wr - xe) + xe),
            c = Math.round(Math.random() * (ie.length - 1)),
            l = t - Math.round(Math.random() * 1e3),
            u = Math.random() < qr,
            f = Br(c),
            m = u ? R(Math.random() * Ur, 2) : 0,
            g = m * -1,
            h = m,
            b = R(Math.abs(te(Math.abs(Re(e.degree, 90) - 180), 0, 180, -1, 1)), 4),
            y = R(Math.random() * pe, 4),
            w = R(Math.random() * n * (Ne() ? 1 : -1), 4),
            I = pe,
            p = R(Math.max(te(Math.abs(e.degree - 180), 0, 180, n, -n), 0), 4);
        return i = {}, i["&#confetti-particle-".concat(a)] = {
            animation: "$x-axis-".concat(a, " ").concat(l, "ms forwards cubic-bezier(").concat(m, ", ").concat(g, ", ").concat(h, ", ").concat(b, ")"),
            "& > div": {
                width: f ? r : Math.round(Math.random() * 4) + r / 2,
                height: f ? r : Math.round(Math.random() * 2) + r,
                animation: "$y-axis ".concat(l, "ms forwards cubic-bezier(").concat(y, ", ").concat(w, ", ").concat(I, ", ").concat(p, ")"),
                "&:after": x({
                    backgroundColor: e.color,
                    animation: "$rotation-".concat(c, " ").concat(o, "ms infinite linear")
                }, f ? {
                    borderRadius: "50%"
                } : {})
            }
        }, i
    },
    Zr = function(e) {
        var t = e.particles,
            n = e.duration,
            r = e.height,
            a = e.width,
            i = e.force,
            o = e.particleSize,
            c = t.reduce(function(l, u, f) {
                return x(x({}, l), Vr(u, n, i, o, f))
            }, {});
        return Dr(x(x(x({}, Gr), Hr(t.map(function(l) {
            return l.degree
        }), r, a)), {
            container: {
                width: 0,
                height: 0,
                position: "relative"
            },
            screen: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
                pointerEvents: "none"
            },
            particle: x(x({}, c), {
                "& > div": {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    "&:after": {
                        content: "''",
                        display: "block",
                        width: "100%",
                        height: "100%"
                    }
                }
            })
        }), {
            name: "confetti-explosion"
        })
    },
    Yr = .5,
    Jr = 12,
    Kr = "120vh",
    Qr = 1e3,
    Xr = 100,
    en = 2200,
    tn = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
    rn = function(e, t) {
        var n = 360 / e;
        return xt(e).map(function(r) {
            return {
                color: t[r % t.length],
                degree: n * r
            }
        })
    };

function nn(e) {
    var t = e.particleCount,
        n = t === void 0 ? Xr : t,
        r = e.duration,
        a = r === void 0 ? en : r,
        i = e.colors,
        o = i === void 0 ? tn : i,
        c = e.particleSize,
        l = c === void 0 ? Jr : c,
        u = e.force,
        f = u === void 0 ? Yr : u,
        m = e.height,
        g = m === void 0 ? Kr : m,
        h = e.width,
        b = h === void 0 ? Qr : h,
        y = e.zIndex,
        w = e.onComplete,
        I = Lr(e, ["particleCount", "duration", "colors", "particleSize", "force", "height", "width", "zIndex", "onComplete"]),
        p = d.useState(),
        C = p[0],
        D = p[1],
        S = rn(n, o),
        H = Zr({
            particles: S,
            duration: a,
            particleSize: l,
            force: f,
            width: b,
            height: g
        })(),
        De = d.useCallback(function(O) {
            if (O) {
                var F = O.getBoundingClientRect(),
                    Fe = F.top,
                    _e = F.left;
                D({
                    top: Fe,
                    left: _e
                })
            }
        }, []);
    return d.useEffect(function() {
        if (typeof w == "function") {
            var O = setTimeout(w, a);
            return function() {
                return clearTimeout(O)
            }
        }
    }, [a, w]), s.jsx("div", x({
        ref: De,
        className: H.container
    }, I, {
        children: C && re.createPortal(s.jsx("div", x({
            className: H.screen
        }, y ? {
            style: {
                zIndex: y
            }
        } : null, {
            children: s.jsx("div", x({
                style: {
                    position: "absolute",
                    top: C.top,
                    left: C.left
                }
            }, {
                children: S.map(function(O, F) {
                    return s.jsx("div", x({
                        id: "confetti-particle-".concat(F),
                        className: H.particle
                    }, {
                        children: s.jsx("div", {})
                    }), O.degree)
                })
            }))
        })), document.body)
    }))
}
const an = () => {
        const [e, t] = E(!1);
        return ne(() => {
            t()
        }, j.pack.exit.confetti.delay), s.jsx(Pe, {
            children: e ? s.jsx(nn, {
                colors: ["#ffffff"],
                width: window.innerWidth * 1.5,
                force: .6,
                zIndex: 2,
                duration: 1200
            }) : null
        })
    },
    on = e => {
        const {
            cosmetic: t,
            isNew: n,
            percentage: r,
            itemIndex: a,
            totalItems: i,
            handleClick: o
        } = e, c = a === i - 1, l = ht();
        return s.jsxs(sn, {
            initial: {
                opacity: 0,
                scale: .2
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: a === 0 && l ? {
                duration: .27,
                ease: "easeOut"
            } : {
                duration: .3,
                ease: "anticipate"
            },
            exit: {
                opacity: 0,
                scale: 0
            },
            children: [i >= 2 ? s.jsxs(cn, {
                style: {
                    marginBottom: n ? 6 : 10
                },
                children: ["Item ", a + 1, "/", i]
            }) : null, n ? s.jsx(ln, {
                children: s.jsx(un, {
                    children: "New!"
                })
            }) : null, s.jsx(dn, {
                style: {
                    background: Ie(t.rarity)
                },
                children: s.jsx(fn, {
                    src: X({
                        id: t.id,
                        type: t.type
                    }),
                    draggable: !1
                })
            }), s.jsx(mn, {
                children: t.name
            }), s.jsxs(gn, {
                children: [it(t.type), " • ", t.rarity, " •", " ", r.toFixed(2), "%"]
            }), s.jsx(je, {
                ariaLabel: c ? "Close" : "Next Item",
                style: {
                    marginTop: 25
                },
                onClick: o,
                type: c ? "success" : "default",
                children: s.jsx("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: c ? "Close" : "Next Item"
                })
            })]
        })
    },
    sn = v(Se.div).attrs({
        className: "maxAll flex-center scroll-y flex-column"
    })`
  justify-content: safe center;
  align-items: safe center;
  font-family: ${z.FugazOne};
  text-transform: uppercase;
  padding: 40px 25px;
  text-align: center;
  will-change: transform;
`,
    cn = v.div`
  font-size: 12px;
  opacity: 0.75;
`,
    ln = v.div`
  line-height: 1;
  padding: 7px 18px;
  border-radius: 60px;
  margin-bottom: 12px;
  font-size: 17px;
  background: #43a047;
`,
    un = v.div`
  margin-top: 2px;
`,
    dn = v.div.attrs({
        className: "flex-center"
    })`
  height: 230px;
  width: 230px;
  border-radius: 8px;
  border: 4px solid white;
  padding: 20px;
  @media (max-width: 620px) {
    height: 175px;
    width: 175px;
  }
`,
    mn = v.div`
  font-size: 56px;
  margin-top: 18px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 620px) {
    font-size: 48px;
    margin-top: 14px;
  }
`,
    fn = v.img`
  max-height: 100%;
  max-width: 100%;
`,
    gn = v.div`
  font-size: 22px;
  opacity: 0.9;
  margin-top: -8px;
  @media (max-width: 620px) {
    font-size: 18px;
  }
`,
    hn = e => {
        const [t, n] = E(!1), [r, a] = d.useState(0);
        ne(n, 140);
        const i = d.useMemo(() => {
                const c = e.items[r],
                    l = e.packData.cosmetics.find(g => g.id === c.cosmeticId),
                    u = e.packData.items.reduce((g, h) => g + h.count, 0),
                    m = e.packData.items.find(g => g.cosmeticId === c.cosmeticId).count / u * 100;
                return {
                    item: c,
                    cosmetic: l,
                    percentage: m
                }
            }, [e.items, e.packData.cosmetics, r]),
            o = () => s.jsx(on, {
                itemIndex: r,
                isNew: !i.item.owned,
                totalItems: e.items.length,
                cosmetic: i.cosmetic,
                percentage: i.percentage,
                handleClick: () => {
                    if (ot(), r === e.items.length - 1) {
                        e.close();
                        return
                    }
                    a(c => c + 1), G({
                        path: T(`cosmos/zoom${be.random(1,2)}.mp3`),
                        volume: .5,
                        delay: 160
                    })
                }
            }, i.cosmetic.id + r);
        return t ? s.jsxs(s.Fragment, {
            children: [s.jsx(xn, {
                rarity: i.cosmetic.rarity
            }), s.jsx(Nt, {
                mode: "wait",
                children: o()
            })]
        }) : null
    },
    vn = e => {
        const t = st(e.rarity),
            n = d.useRef(null),
            r = d.useMemo(() => t, []);
        return d.useEffect(() => {
            n.current && n.current.style.setProperty("--c", t)
        }, [t]), s.jsx(pn, {
            ref: n,
            defaultColor: r
        })
    },
    xn = e => re.createPortal(s.jsx(vn, {
        ...e
    }), document.getElementById(ke.container)),
    pn = v.div.attrs({
        className: "maxAll animated fadeIn"
    })`
  @property --c {
    syntax: '<color>';
    inherits: false;
    initial-value: ${e=>e.defaultColor};
  }

  position: absolute;
  top: 0;
  left: 0;
  transition: --c 0.5s ease-out;
  background: linear-gradient(142deg, rgb(255, 255, 255) 0%, var(--c) 100%);
`,
    yn = e => {
        const [t, n] = d.useState("shake"), [r, a] = E(!1), [i, o] = d.useState(!0);
        return ne(() => {
            o(!1)
        }, 250, r), s.jsxs("div", {
            className: "maxAll animated",
            style: {
                color: we.White,
                minHeight: e.pageMode ? "auto" : 600
            },
            children: [i ? s.jsx(Xt, {
                packId: e.packId,
                onComplete: () => {
                    n("result"), G({
                        path: T(`cosmos/packOpen${be.random(1,2)}.mp3`),
                        volume: .5
                    })
                },
                onExit: a
            }) : null, t === "result" ? s.jsx(an, {}) : null, t === "result" ? s.jsx(hn, {
                items: e.items,
                packData: e.packData,
                close: e.close
            }) : null]
        })
    },
    bn = e => re.createPortal(s.jsxs("div", {
        className: "maxAll",
        style: {
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            userSelect: "none"
        },
        children: [s.jsx(yn, {
            ...e
        }), ","]
    }), document.getElementById(ke.content)),
    wn = ["pack-details"],
    Cn = e => zt([wn, e], () => Ge({
        url: "/api/cosmos/pack/details/" + e
    })),
    Xn = e => {
        var h;
        const {
            secondary: t
        } = He(), [n, r] = d.useState([]), a = e.metadata ?? t, {
            data: i,
            isLoading: o,
            error: c
        } = Cn(a), {
            data: l,
            isLoading: u,
            error: f
        } = Qe(), m = o || u, g = c || f;
        if (m) return s.jsx(ce, {
            className: "maxAll",
            children: s.jsx(Dt, {
                style: {
                    color: we.White
                }
            })
        });
        if (g) {
            const b = (h = g == null ? void 0 : g.message) == null ? void 0 : h.text;
            return s.jsx(ce, {
                className: "maxAll",
                children: b ?? "There was an fetching this pack. Please refresh and try again."
            })
        }
        return n.length ? s.jsxs(s.Fragment, {
            children: [e.pageMode ? null : s.jsx("div", {
                style: {
                    height: 650
                }
            }), s.jsx(bn, {
                packData: i,
                items: n,
                close: () => r([]),
                packId: a,
                pageMode: e.pageMode
            })]
        }) : s.jsx(Jt, {
            pageMode: e.pageMode,
            packId: a,
            setPackItems: r,
            packData: i,
            cosmosData: l
        })
    };
export {
    Xn as
    default
};