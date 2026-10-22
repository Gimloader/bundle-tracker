import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    n,
    t as r
} from "./dist-1.js";
import {
    A as i,
    E as a,
    L as o,
    O as s,
    t as c,
    w as l,
    z as u
} from "./utils.js";
import {
    t as d
} from "./react-1.js";
import {
    c as f,
    l as p,
    s as m
} from "./assertThisInitialized.js";
import {
    l as h
} from "./dist-3.js";
import {
    it as g,
    rt as _
} from "./Compact.js";
import {
    t as v
} from "./space.js";
import {
    t as y
} from "./jsx-runtime.js";
import {
    n as b,
    t as x
} from "./AnimatePresence.js";
import {
    t as S
} from "./useQuery.js";
import {
    a as ee,
    c as C,
    l as w,
    n as te
} from "./_index.js";
import {
    t as ne
} from "./FontAwesomeIcon.js";
import {
    t as re
} from "./toNumber.js";
import {
    n as ie,
    r as ae,
    t as oe
} from "./toInteger.js";
import {
    t as T
} from "./GetAssetPath.js";
import {
    i as se,
    o as ce,
    r as le,
    s as ue,
    u as de
} from "./Navigation.js";
import {
    t as fe
} from "./Centered.js";
import {
    t as pe
} from "./Names.js";
import {
    A as me,
    C as he,
    D as ge,
    E as _e,
    F as ve,
    M as ye,
    N as E,
    O as be,
    P as xe,
    S as Se,
    T as Ce,
    _ as we,
    b as Te,
    f as Ee,
    g as De,
    h as Oe,
    j as ke,
    k as Ae,
    v as je,
    w as Me,
    x as Ne,
    y as Pe
} from "./clsx.m.js";
import {
    t as Fe
} from "./CircularProgress.js";
import {
    n as D,
    t as Ie
} from "./App-46.js";
import {
    a as Le,
    f as Re,
    i as ze,
    l as O,
    o as Be,
    p as Ve,
    r as He,
    t as Ue,
    u as We
} from "./App-74.js";
import {
    t as Ge
} from "./Button-2.js";
import {
    t as Ke
} from "./lodash.js";
import {
    n as k,
    t as A
} from "./playSound.js";
import {
    n as qe,
    r as Je
} from "./Pack.js";
import {
    a as Ye,
    d as Xe,
    f as Ze,
    t as Qe,
    u as $e,
    y as et
} from "./motion.js";
import {
    t as j
} from "./use-motion-value.js";
import {
    t as tt
} from "./use-transform.js";
var M = y(),
    nt = e => {
        let [t, n, r] = s(!1);
        return (0, M.jsx)(`div`, {
            onMouseEnter: n,
            onMouseLeave: r,
            children: (0, M.jsx)(qe, {
                imageUrl: Je(e.packId),
                hovering: t
            })
        })
    },
    rt = e => (0, M.jsx)(it, {
        children: e.title
    }),
    it = w.div`
  font-size: 40px;
  font-family: ${C.FugazOne};
  margin-bottom: 10px;
`,
    N = e(d()),
    at = e => {
        let {
            cost: t,
            packCount: n,
            canAfford: r
        } = e, i = N.useMemo(() => `Open for ${t} ${pe.currency}`, [t]), a = !r || e.isLoading;
        return (0, M.jsx)(Ge, {
            ariaLabel: i,
            onClick: e.onClick,
            type: `success`,
            disabled: a,
            size: `large`,
            children: (0, M.jsxs)(ot, {
                children: [(0, M.jsxs)(`div`, {
                    style: {
                        marginTop: 3.5
                    },
                    children: [`Open`, n > 1 ? ` ${n} Packs` : ``, ` For`]
                }), (0, M.jsx)(`div`, {
                    style: {
                        marginLeft: 10
                    },
                    children: (0, M.jsx)(se, {
                        amount: t,
                        size: 16,
                        grayscale: a
                    })
                })]
            })
        })
    },
    ot = w.div.attrs({
        className: `flex vc`
    })`
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1;
  font-family: ${C.FugazOne};
`,
    P = 116,
    st = e => {
        let [t, n, r] = s(!1), {
            data: i
        } = Ve(), {
            cosmetic: a
        } = e, o = i && i.ownedCosmetics.some(e => e.cosmetic.id === a.id);
        return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsxs)(ut, {
                children: [(0, M.jsx)(ft, {
                    onClick: () => {
                        ze(), n()
                    },
                    children: (0, M.jsx)(dt, {
                        style: {
                            background: O(a.rarity),
                            padding: a.type === de.sticker ? 28 : 12
                        },
                        children: (0, M.jsx)(`img`, {
                            src: D({
                                id: a.id,
                                type: a.type
                            }),
                            draggable: !1,
                            className: `maxWidth`
                        })
                    })
                }), (0, M.jsxs)(`div`, {
                    className: `flex vc`,
                    style: {
                        marginTop: 10,
                        lineHeight: 1
                    },
                    children: [(0, M.jsxs)(pt, {
                        children: [e.percentage.toFixed(2), `%`]
                    }), o ? (0, M.jsx)(`div`, {
                        className: `flex`,
                        style: {
                            marginLeft: 6
                        },
                        children: (0, M.jsx)(ne, {
                            style: {
                                color: `#81C784`,
                                fontSize: 12
                            },
                            name: `fas fa-check`
                        })
                    }) : null]
                })]
            }), (0, M.jsx)(Ue, {
                open: t,
                image: D({
                    id: a.id,
                    type: a.type
                }),
                close: r,
                callToAction: () => void 0,
                ...a
            })]
        })
    },
    ct = e => {
        let t = N.useMemo(() => e.items.map(t => {
            let n = e.cosmetics.find(e => e.id === t.cosmeticId),
                r = e.items.reduce((e, t) => e + t.count, 0);
            return {
                cosmetic: n,
                percentage: t.count / r * 100
            }
        }), [e.cosmetics, e.items]);
        return (0, M.jsx)(lt, {
            children: t.map(e => (0, M.jsx)(st, {
                cosmetic: e.cosmetic,
                percentage: e.percentage
            }, e.cosmetic.id))
        })
    },
    lt = w.div.attrs({
        className: `maxWidth`
    })`
  background: rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${P}px);
  grid-gap: 20px;
  justify-content: center;
  border-radius: 8px;
`,
    ut = w.div`
  width: ${P}px;
`,
    dt = w.div.attrs({
        className: `flex-center maxAll`
    })`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
`,
    ft = w.div`
  overflow: hidden;
  height: ${P}px;
  width: ${P}px;
  border: 4px solid white;
  border-radius: 8px;
`,
    pt = w.div`
  font-family: ${C.FugazOne};
  font-size: 14px;
`,
    mt = e => {
        let [t, n] = N.useState(!1), [r, i] = N.useState(1), {
            packData: o,
            cosmosData: s
        } = e;
        return ee(() => {
            k({
                path: T(`cosmos/drumroll.mp3`)
            }), k({
                path: T(`cosmos/packPurchased.mp3`)
            }), k({
                path: T(`cosmos/packOpen1.mp3`)
            }), k({
                path: T(`cosmos/packOpen2.mp3`)
            })
        }), (0, M.jsxs)(M.Fragment, {
            children: [e.pageMode ? (0, M.jsx)(c, {
                title: o.name
            }) : null, (0, M.jsx)(Ie, {
                customWidth: 740,
                children: (0, M.jsxs)(ht, {
                    children: [(0, M.jsxs)(v, {
                        className: `maxWidth`,
                        size: 20,
                        direction: `vertical`,
                        align: `center`,
                        style: {
                            justifyContent: `center`
                        },
                        children: [(0, M.jsx)(nt, {
                            packId: e.packId
                        }), (0, M.jsxs)(gt, {
                            children: [(0, M.jsx)(rt, {
                                title: o.name
                            }), (0, M.jsx)(at, {
                                cost: o.currencyCost * r,
                                isLoading: t,
                                canAfford: s.currency >= o.currencyCost * r,
                                onClick: () => {
                                    t || (A({
                                        path: T(`cosmos/packPurchased.mp3`),
                                        volume: .7
                                    }), u({
                                        url: `/api/cosmos/pack/open`,
                                        data: {
                                            pack: e.packId,
                                            count: r
                                        },
                                        success: t => {
                                            e.setPackItems(t), Re(), ce()
                                        },
                                        error: e => {
                                            a({
                                                e,
                                                default: {
                                                    title: `Error purchasing pack`,
                                                    content: `Please try again.`
                                                }
                                            })
                                        },
                                        both: () => {
                                            n(!1)
                                        }
                                    }))
                                },
                                packCount: r
                            }), (0, M.jsx)(He, {
                                count: r,
                                setCount: i
                            })]
                        })]
                    }), (0, M.jsx)(ct, {
                        items: o.items,
                        cosmetics: o.cosmetics
                    })]
                })
            })]
        })
    },
    ht = w.div.attrs({
        className: `flex-center flex-column`
    })`
  padding-top: 20px;
  font-family: ${C.FugazOne};
  text-transform: uppercase;
  flex: 1;
`,
    gt = w.div.attrs({
        className: `flex-center flex-column`
    })``;

function _t(e) {
    let t = (0, N.useRef)(0),
        {
            isStatic: n
        } = (0, N.useContext)(et);
    (0, N.useEffect)(() => {
        if (n) return;
        let r = ({
            timestamp: n,
            delta: r
        }) => {
            t.current || (t.current = n), e(n - t.current, r)
        };
        return Xe.update(r, !0), () => $e.update(r)
    }, [e])
}
var F = {
        pack: {
            scale: 1.15,
            delay: 200,
            duration: 3e3,
            intensity: 30,
            exit: {
                scale: 3.5,
                duration: 300,
                ease: `anticipate`,
                confetti: {
                    delay: 70
                }
            }
        }
    },
    vt = e => {
        let t = j(0),
            n = j(0),
            r = j(0),
            i = tt(r, e => `invert(${e/2}) brightness(${e+1})`),
            a = N.useRef(null),
            [o, c] = s(!1),
            l = N.useRef(!1),
            u = () => {
                a.current && a.current.stop(), d()
            },
            d = () => {
                c(), l.current || (l.current = !0, e.onComplete())
            };
        N.useEffect(() => {
            a.current = A({
                path: T(`cosmos/drumroll.mp3`),
                volume: .6
            })
        }, []), _t(e => {
            if (e < F.pack.delay) return;
            let i = Ye(Math.min(1, (e - F.pack.delay) / F.pack.duration));
            i === 1 && d(), r.set(i);
            let a = F.pack.intensity * i,
                o = Math.sin(e / 35) * a;
            t.set(o);
            let s = o * 2;
            n.set(s)
        });
        let f = N.useMemo(() => o ? {
                scale: F.pack.exit.scale,
                opacity: 0
            } : {
                scale: F.pack.scale
            }, [o]),
            p = N.useMemo(() => o ? {
                duration: F.pack.exit.duration / 1e3,
                ease: F.pack.exit.ease
            } : {
                duration: F.pack.duration / 1e3,
                delay: F.pack.delay / 1e3
            }, [o]),
            m = N.useCallback(() => {
                o && e.onExit()
            }, [o]);
        return (0, M.jsx)(yt, {
            onDoubleClick: u,
            children: (0, M.jsx)(bt, {
                animate: f,
                transition: p,
                style: {
                    x: n,
                    rotate: t,
                    filter: i
                },
                onAnimationComplete: m,
                src: Je(e.packId),
                draggable: !1
            })
        })
    },
    yt = w.div.attrs({
        className: `maxAll flex-center animated fadeIn`
    })`
  position: absolute;
  top: 0;
  left: 0;
`,
    bt = w(Qe.img)`
  height: 400px;
  transform-origin: center;
  @media (max-width: 620px) {
    height: 300px;
  }
`,
    xt = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })),
    I = e(p());
f(), g();
var St = e(ie()),
    Ct = e(Ee());
xt();

function L(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R() {
    return R = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, R.apply(this, arguments)
}

function wt(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function z(e) {
    if (e === void 0) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e
}

function Tt(e) {
    return function(t) {
        wt(n, t);

        function n() {
            var n, r = [...arguments];
            return n = t.call.apply(t, [this].concat(r)) || this, L(z(z(n)), `cachedTheme`, void 0), L(z(z(n)), `lastOuterTheme`, void 0), L(z(z(n)), `lastTheme`, void 0), L(z(z(n)), `renderProvider`, function(t) {
                var r = n.props.children;
                return N.createElement(e.Provider, {
                    value: n.getTheme(t)
                }, r)
            }), n
        }
        var r = n.prototype;
        return r.getTheme = function(e) {
            if (this.props.theme !== this.lastTheme || e !== this.lastOuterTheme || !this.cachedTheme) {
                if (this.lastOuterTheme = e, this.lastTheme = this.props.theme, typeof this.lastTheme == `function`) {
                    var t = this.props.theme;
                    this.cachedTheme = t(e)
                } else {
                    var n = this.props.theme;
                    this.cachedTheme = e ? R({}, e, n) : n
                }
            }
            return this.cachedTheme
        }, r.render = function() {
            return this.props.children ? N.createElement(e.Consumer, null, this.renderProvider) : null
        }, n
    }(N.Component)
}

function Et(e) {
    return function(t) {
        var n = N.forwardRef(function(n, r) {
            return N.createElement(e.Consumer, null, function(e) {
                return N.createElement(t, R({
                    theme: e,
                    ref: r
                }, n))
            })
        });
        return (0, Ct.default)(n, t), n
    }
}

function Dt(e) {
    return function() {
        return N.useContext(e)
    }
}

function Ot(e) {
    return {
        context: e,
        withTheme: Et(e),
        useTheme: Dt(e),
        ThemeProvider: Tt(e)
    }
}
var kt = (0, N.createContext)(),
    B = Ot(kt);
B.withTheme, B.ThemeProvider, B.useTheme, n(), xe(), E(), be();

function At(e) {
    var t, n = e.Symbol;
    return typeof n == `function` ? n.observable ? t = n.observable : (t = n(`observable`), n.observable = t) : t = `@@observable`, t
}
var jt = At(typeof self < `u` ? self : typeof window < `u` ? window : r === void 0 ? typeof module < `u` ? module : Function(`return this`)() : r),
    Mt = function(e) {
        return e && e[jt] && e === e[jt]()
    },
    Nt = function(e) {
        return {
            onCreateRule: function(t, n, r) {
                if (!Mt(n)) return null;
                var i = n,
                    a = ke(t, {}, r);
                return i.subscribe(function(t) {
                    for (var n in t) a.prop(n, t[n], e)
                }), a
            },
            onProcessRule: function(t) {
                if (!(t && t.type !== `style`)) {
                    var n = t,
                        r = n.style,
                        i = function(t) {
                            var i = r[t];
                            if (!Mt(i)) return `continue`;
                            delete r[t], i.subscribe({
                                next: function(r) {
                                    n.prop(t, r, e)
                                }
                            })
                        };
                    for (var a in r)
                        if (i(a) === `continue`) continue
                }
            }
        }
    },
    Pt = /;\n/,
    Ft = function(e) {
        for (var t = {}, n = e.split(Pt), r = 0; r < n.length; r++) {
            var i = (n[r] || ``).trim();
            if (i) {
                var a = i.indexOf(`:`);
                if (a !== -1) {
                    var o = i.substr(0, a).trim();
                    t[o] = i.substr(a + 1).trim()
                }
            }
        }
        return t
    },
    It = function(e) {
        typeof e.style == `string` && (e.style = Ft(e.style))
    };

function Lt() {
    return {
        onProcessRule: It
    }
}
Ce();
var V = function(e) {
        return e && typeof e == `object` && !Array.isArray(e)
    },
    H = `extendCurrValue` + Date.now();

function Rt(e, t, n, r) {
    if (typeof e.extend == `string`) {
        if (!n) return;
        var i = n.getRule(e.extend);
        if (!i || i === t) return;
        var a = i.options.parent;
        if (a) {
            var o = a.rules.raw[e.extend];
            U(o, t, n, r)
        }
    } else if (Array.isArray(e.extend))
        for (var s = 0; s < e.extend.length; s++) {
            var c = e.extend[s];
            U(typeof c == `string` ? m({}, e, {
                extend: c
            }) : e.extend[s], t, n, r)
        } else
            for (var l in e.extend) l === `extend` ? U(e.extend.extend, t, n, r) : V(e.extend[l]) ? (l in r || (r[l] = {}), U(e.extend[l], t, n, r[l])) : r[l] = e.extend[l]
}

function zt(e, t, n, r) {
    for (var i in e) i !== `extend` && (V(r[i]) && V(e[i]) ? U(e[i], t, n, r[i]) : r[i] = V(e[i]) ? U(e[i], t, n) : e[i])
}

function U(e, t, n, r) {
    return r === void 0 && (r = {}), Rt(e, t, n, r), zt(e, t, n, r), r
}

function Bt() {
    function e(e, t, n) {
        return `extend` in e ? U(e, t, n) : e
    }

    function t(e, t, n) {
        if (t !== `extend`) return e;
        if (e == null || e === !1) {
            for (var r in n[H]) n.prop(r, null);
            return n[H] = null, null
        }
        if (typeof e == `object`) {
            for (var i in e) n.prop(i, e[i]);
            n[H] = e
        }
        return null
    }
    return {
        onProcessStyle: e,
        onChangeValue: t
    }
}
he();

function W(e, t) {
    if (!t) return !0;
    if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++)
            if (!W(e, t[n])) return !1;
        return !0
    }
    if (t.indexOf(` `) > -1) return W(e, t.split(` `));
    var r = e.options.parent;
    if (t[0] === `$`) {
        var i = r.getRule(t.substr(1));
        return !i || i === e ? !1 : (r.classes[e.key] += ` ` + r.classes[i.key], !0)
    }
    return r.classes[e.key] += ` ` + t, !0
}

function Vt() {
    function e(e, t) {
        return `composes` in e && (W(t, e.composes), delete e.composes), e
    }
    return {
        onProcessStyle: e
    }
}
Se(), Te();
var Ht = {
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
    Ut = {
        position: !0,
        size: !0
    },
    G = {
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
    K = {
        border: {
            radius: `border-radius`,
            image: `border-image`,
            width: `border-width`,
            style: `border-style`,
            color: `border-color`
        },
        "border-bottom": {
            width: `border-bottom-width`,
            style: `border-bottom-style`,
            color: `border-bottom-color`
        },
        "border-top": {
            width: `border-top-width`,
            style: `border-top-style`,
            color: `border-top-color`
        },
        "border-left": {
            width: `border-left-width`,
            style: `border-left-style`,
            color: `border-left-color`
        },
        "border-right": {
            width: `border-right-width`,
            style: `border-right-style`,
            color: `border-right-color`
        },
        background: {
            size: `background-size`,
            image: `background-image`
        },
        font: {
            style: `font-style`,
            variant: `font-variant`,
            weight: `font-weight`,
            stretch: `font-stretch`,
            size: `font-size`,
            family: `font-family`,
            lineHeight: `line-height`,
            "line-height": `line-height`
        },
        flex: {
            grow: `flex-grow`,
            basis: `flex-basis`,
            direction: `flex-direction`,
            wrap: `flex-wrap`,
            flow: `flex-flow`,
            shrink: `flex-shrink`
        },
        align: {
            self: `align-self`,
            items: `align-items`,
            content: `align-content`
        },
        grid: {
            "template-columns": `grid-template-columns`,
            templateColumns: `grid-template-columns`,
            "template-rows": `grid-template-rows`,
            templateRows: `grid-template-rows`,
            "template-areas": `grid-template-areas`,
            templateAreas: `grid-template-areas`,
            template: `grid-template`,
            "auto-columns": `grid-auto-columns`,
            autoColumns: `grid-auto-columns`,
            "auto-rows": `grid-auto-rows`,
            autoRows: `grid-auto-rows`,
            "auto-flow": `grid-auto-flow`,
            autoFlow: `grid-auto-flow`,
            row: `grid-row`,
            column: `grid-column`,
            "row-start": `grid-row-start`,
            rowStart: `grid-row-start`,
            "row-end": `grid-row-end`,
            rowEnd: `grid-row-end`,
            "column-start": `grid-column-start`,
            columnStart: `grid-column-start`,
            "column-end": `grid-column-end`,
            columnEnd: `grid-column-end`,
            area: `grid-area`,
            gap: `grid-gap`,
            "row-gap": `grid-row-gap`,
            rowGap: `grid-row-gap`,
            "column-gap": `grid-column-gap`,
            columnGap: `grid-column-gap`
        }
    };

function Wt(e, t, n) {
    return e.map(function(e) {
        return Kt(e, t, n, !1, !0)
    })
}

function Gt(e, t, n, r) {
    return n[t] == null ? e : e.length === 0 ? [] : Array.isArray(e[0]) ? Gt(e[0], t, n, r) : typeof e[0] == `object` ? Wt(e, t, r) : [e]
}

function Kt(e, t, n, r, i) {
    if (!(G[t] || K[t])) return [];
    var a = [];
    if (K[t] && (e = qt(e, n, K[t], r)), Object.keys(e).length)
        for (var o in G[t]) e[o] ? Array.isArray(e[o]) ? a.push(Ut[o] === null ? e[o] : e[o].join(` `)) : a.push(e[o]) : G[t][o] != null && a.push(G[t][o]);
    return !a.length || i ? a : [a]
}

function qt(e, t, n, r) {
    for (var i in n) {
        var a = n[i];
        if (e[i] !== void 0 && (r || !t.prop(a))) {
            var o, s = q((o = {}, o[a] = e[i], o), t)[a];
            r ? t.style.fallbacks[a] = s : t.style[a] = s
        }
        delete e[i]
    }
    return e
}

function q(e, t, n) {
    for (var r in e) {
        var i = e[r];
        if (Array.isArray(i)) {
            if (!Array.isArray(i[0])) {
                if (r === `fallbacks`) {
                    for (var a = 0; a < e.fallbacks.length; a++) e.fallbacks[a] = q(e.fallbacks[a], t, !0);
                    continue
                }
                e[r] = Gt(i, r, Ht, t), e[r].length || delete e[r]
            }
        } else if (typeof i == `object`) {
            if (r === `fallbacks`) {
                e.fallbacks = q(e.fallbacks, t, !0);
                continue
            }
            e[r] = Kt(i, r, t, n), e[r].length || delete e[r]
        } else e[r] === `` && delete e[r]
    }
    return e
}

function Jt() {
    function e(e, t) {
        if (!e || t.type !== `style`) return e;
        if (Array.isArray(e)) {
            for (var n = 0; n < e.length; n++) e[n] = q(e[n], t);
            return e
        }
        return q(e, t)
    }
    return {
        onProcessStyle: e
    }
}
we(), Oe();
var Yt = function(e) {
    return e === void 0 && (e = {}), {
        plugins: [ge(), Nt(e.observable), Lt(), _e(), Bt(), Me(), Vt(), Ne(), Pe(e.defaultUnit), Jt(), je(), De()]
    }
};
E();
var Xt = 1e4,
    Zt = me(Yt()),
    Qt = function(e) {
        e === void 0 && (e = Zt);
        var t = new Map,
            n = 0,
            r, i = function() {
                return (!r || r.rules.index.length > Xt) && (r = e.createStyleSheet().attach()), r
            };

        function a() {
            var e = arguments,
                r = JSON.stringify(e),
                a = t.get(r);
            if (a) return a.className;
            var o = [];
            for (var s in e) {
                var c = e[s];
                if (!Array.isArray(c)) o.push(c);
                else
                    for (var l = 0; l < c.length; l++) o.push(c[l])
            }
            for (var u = {}, d = [], f = 0; f < o.length; f++) {
                var p = o[f];
                if (p) {
                    var m = p;
                    if (typeof p == `string`) {
                        var h = t.get(p);
                        h && (h.labels.length && d.push.apply(d, h.labels), m = h.style)
                    }
                    m.label && d.indexOf(m.label) === -1 && d.push(m.label), Object.assign(u, m)
                }
            }
            delete u.label;
            var g = (d.length === 0 ? `css` : d.join(`-`)) + `-` + n++;
            i().addRule(g, u);
            var _ = i().classes[g],
                v = {
                    style: u,
                    labels: d,
                    className: _
                };
            return t.set(r, v), t.set(_, v), _
        }
        return a.getSheet = i, a
    }();
f(), E();
var $t = -(2 ** 53 - 1) || -1e9,
    en = function() {
        return $t++
    },
    tn = (0, N.createContext)({
        classNamePrefix: ``,
        disableStylesGeneration: !1,
        isSSR: !ve
    }),
    nn = new Map,
    J = function(e, t) {
        var n = e.managers;
        if (n) return n[t] || (n[t] = new Ae), n[t];
        var r = nn.get(t);
        return r || (r = new Ae, nn.set(t, r)), r
    },
    rn = function(e) {
        var t = e.sheet,
            n = e.context,
            r = e.index,
            i = e.theme;
        t && (J(n, r).manage(i), n.registry && n.registry.add(t))
    },
    an = function(e) {
        e.sheet && J(e.context, e.index).unmanage(e.theme)
    },
    on = me(Yt()),
    sn = new WeakMap,
    cn = function(e) {
        return sn.get(e)
    },
    ln = function(e, t) {
        sn.set(e, t)
    },
    un = function(e) {
        var t = e.styles;
        return typeof t == `function` ? t(e.theme) : t
    };

function dn(e, t) {
    var n;
    e.context.id && e.context.id.minify != null && (n = e.context.id.minify);
    var r = e.context.classNamePrefix || ``;
    e.name && !n && (r += e.name.replace(/\s/g, `-`) + `-`);
    var i = ``;
    return e.name && (i = e.name + `, `), i += typeof e.styles == `function` ? `Themed` : `Unthemed`, m({}, e.sheetOptions, {
        index: e.index,
        meta: i,
        classNamePrefix: r,
        link: t,
        generateId: e.sheetOptions && e.sheetOptions.generateId ? e.sheetOptions.generateId : e.context.generateId
    })
}
var fn = function(e) {
        if (!e.context.disableStylesGeneration) {
            var t = J(e.context, e.index),
                n = t.get(e.theme);
            if (n) return n;
            var r = e.context.jss || on,
                i = un(e),
                a = ye(i),
                o = r.createStyleSheet(i, dn(e, a !== null));
            return ln(o, {
                dynamicStyles: a,
                styles: i
            }), t.add(e.theme, o), o
        }
    },
    pn = function(e, t) {
        for (var n in t) e.deleteRule(t[n])
    },
    mn = function(e, t, n) {
        for (var r in n) t.updateOne(n[r], e)
    },
    hn = function(e, t) {
        var n = cn(e);
        if (n) {
            var r = {};
            for (var i in n.dynamicStyles)
                for (var a = e.rules.index.length, o = e.addRule(i, n.dynamicStyles[i]), s = a; s < e.rules.index.length; s++) {
                    var c = e.rules.index[s];
                    e.updateOne(c, t), r[o === c ? i : c.key] = c
                }
            return r
        }
    },
    gn = function(e, t) {
        if (!t) return e.classes;
        var n = cn(e);
        if (!n) return e.classes;
        var r = {};
        for (var i in n.styles) r[i] = e.classes[i], i in t && (r[i] += ` ` + e.classes[t[i].key]);
        return r
    };

function _n(e) {
    return e ? N.useEffect : N.useInsertionEffect || N.useLayoutEffect
}
var vn = {},
    yn = function(e, t) {
        t === void 0 && (t = {});
        var n = t,
            r = n.index,
            i = r === void 0 ? en() : r,
            a = n.theming,
            o = n.name,
            s = _(n, [`index`, `theming`, `name`]),
            c = a && a.context || kt,
            l = function(t) {
                return typeof e == `function` && (t || (0, N.useContext)(c)) || vn
            },
            u = {};
        return function(t) {
            var n = (0, N.useRef)(!0),
                r = (0, N.useContext)(tn),
                a = l(t && t.theme),
                c = (0, N.useMemo)(function() {
                    var n = fn({
                        context: r,
                        styles: e,
                        name: o,
                        theme: a,
                        index: i,
                        sheetOptions: s
                    });
                    return n && r.isSSR && rn({
                        index: i,
                        context: r,
                        sheet: n,
                        theme: a
                    }), [n, n ? hn(n, t) : null]
                }, [r, a]),
                d = c[0],
                f = c[1];
            _n(r.isSSR)(function() {
                d && f && !n.current && mn(t, d, f)
            }, [t]), _n(r.isSSR)(function() {
                return d && rn({
                        index: i,
                        context: r,
                        sheet: d,
                        theme: a
                    }),
                    function() {
                        d && (an({
                            index: i,
                            context: r,
                            sheet: d,
                            theme: a
                        }), f && pn(d, f))
                    }
            }, [d]);
            var p = (0, N.useMemo)(function() {
                return d && f ? gn(d, f) : u
            }, [d, f]);
            return (0, N.useDebugValue)(p), (0, N.useDebugValue)(a === vn ? `No theme` : a), (0, N.useEffect)(function() {
                n.current = !1
            }), p
        }
    };
(function(e) {
    return e === void 0 && (e = Qt),
        function(t, n) {
            var r = arguments;
            if (n && n.css) {
                var i = e(n.css),
                    a = Object.assign({}, n);
                a.className = n.className ? n.className + ` ` + i : i, delete a.css, r[1] = a
            }
            return N.createElement.apply(void 0, r)
        }
})();
var bn = t(((e, t) => {
        var n = o(),
            r = oe(),
            a = re(),
            s = i(),
            c = n.isFinite,
            l = Math.min;

        function u(e) {
            var t = Math[e];
            return function(e, n) {
                if (e = a(e), n = n == null ? 0 : l(r(n), 292), n && c(e)) {
                    var i = (s(e) + `e`).split(`e`);
                    return i = (s(t(i[0] + `e` + (+i[1] + n))) + `e`).split(`e`), +(i[0] + `e` + (+i[1] - n))
                }
                return t(e)
            }
        }
        t.exports = u
    })),
    Y = e(t(((e, t) => {
        t.exports = bn()(`round`)
    }))()),
    xn = e(ae()),
    X = function() {
        return X = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, X.apply(this, arguments)
    };

function Sn(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Z = function(e, t, n, r, i) {
        return (e - t) * (i - r) / (n - t) + r
    },
    Cn = function(e, t) {
        var n = e + t;
        return n > 360 ? n - 360 : n
    },
    Q = function() {
        return Math.random() > .5
    },
    wn = [0, 0, 1],
    $ = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
        [1, 0, 0],
        [0, 1, 0], wn
    ],
    Tn = function(e) {
        return !(0, xn.default)($[e], wn) && Q()
    },
    En = 200,
    Dn = 800,
    On = .1,
    kn = .25,
    An = .5,
    jn = $.reduce(function(e, t, n) {
        var r;
        return X(X({}, e), (r = {}, r[`@keyframes rotation-${n}`] = {
            "50%": {
                transform: `rotate3d(${t.map(function(e){return e/2}).join()}, 180deg)`
            },
            "100%": {
                transform: `rotate3d(${t.join()}, 360deg)`
            }
        }, r))
    }, {}),
    Mn = function(e, t, n) {
        var r = typeof t == `string` ? t : `${t}px`,
            i = e.reduce(function(e, t, r) {
                var i, a = Z(Math.abs(Cn(t, 90) - 180), 0, 180, -n / 2, n / 2);
                return X(X({}, e), (i = {}, i[`@keyframes x-axis-${r}`] = {
                    to: {
                        transform: `translateX(${a}px)`
                    }
                }, i))
            }, {});
        return X({
            "@keyframes y-axis": {
                to: {
                    transform: `translateY(${r})`
                }
            }
        }, i)
    },
    Nn = function(e, t, n, r, i) {
        var a, o = Math.round(Math.random() * (Dn - En) + En),
            s = Math.round(Math.random() * ($.length - 1)),
            c = t - Math.round(Math.random() * 1e3),
            l = Math.random() < On,
            u = Tn(s),
            d = l ? (0, Y.default)(Math.random() * kn, 2) : 0,
            f = d * -1,
            p = d,
            m = (0, Y.default)(Math.abs(Z(Math.abs(Cn(e.degree, 90) - 180), 0, 180, -1, 1)), 4),
            h = (0, Y.default)(Math.random() * An, 4),
            g = (0, Y.default)(Math.random() * n * (Q() ? 1 : -1), 4),
            _ = An,
            v = (0, Y.default)(Math.max(Z(Math.abs(e.degree - 180), 0, 180, n, -n), 0), 4);
        return a = {}, a[`&#confetti-particle-${i}`] = {
            animation: `$x-axis-${i} ${c}ms forwards cubic-bezier(${d}, ${f}, ${p}, ${m})`,
            "& > div": {
                width: u ? r : Math.round(Math.random() * 4) + r / 2,
                height: u ? r : Math.round(Math.random() * 2) + r,
                animation: `$y-axis ${c}ms forwards cubic-bezier(${h}, ${g}, ${_}, ${v})`,
                "&:after": X({
                    backgroundColor: e.color,
                    animation: `$rotation-${s} ${o}ms infinite linear`
                }, u ? {
                    borderRadius: `50%`
                } : {})
            }
        }, a
    },
    Pn = function(e) {
        var t = e.particles,
            n = e.duration,
            r = e.height,
            i = e.width,
            a = e.force,
            o = e.particleSize,
            s = t.reduce(function(e, t, r) {
                return X(X({}, e), Nn(t, n, a, o, r))
            }, {});
        return yn(X(X(X({}, jn), Mn(t.map(function(e) {
            return e.degree
        }), r, i)), {
            container: {
                width: 0,
                height: 0,
                position: `relative`
            },
            screen: {
                position: `fixed`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: `hidden`,
                pointerEvents: `none`
            },
            particle: X(X({}, s), {
                "& > div": {
                    position: `absolute`,
                    left: 0,
                    top: 0,
                    "&:after": {
                        content: `''`,
                        display: `block`,
                        width: `100%`,
                        height: `100%`
                    }
                }
            })
        }), {
            name: `confetti-explosion`
        })
    },
    Fn = .5,
    In = 12,
    Ln = `120vh`,
    Rn = 1e3,
    zn = 100,
    Bn = 2200,
    Vn = [`#FFC700`, `#FF0000`, `#2E3191`, `#41BBC7`],
    Hn = function(e, t) {
        var n = 360 / e;
        return (0, St.default)(e).map(function(e) {
            return {
                color: t[e % t.length],
                degree: n * e
            }
        })
    };

function Un(e) {
    var t = e.particleCount,
        n = t === void 0 ? zn : t,
        r = e.duration,
        i = r === void 0 ? Bn : r,
        a = e.colors,
        o = a === void 0 ? Vn : a,
        s = e.particleSize,
        c = s === void 0 ? In : s,
        l = e.force,
        u = l === void 0 ? Fn : l,
        d = e.height,
        f = d === void 0 ? Ln : d,
        p = e.width,
        m = p === void 0 ? Rn : p,
        h = e.zIndex,
        g = e.onComplete,
        _ = Sn(e, [`particleCount`, `duration`, `colors`, `particleSize`, `force`, `height`, `width`, `zIndex`, `onComplete`]),
        v = N.useState(),
        y = v[0],
        b = v[1],
        x = Hn(n, o),
        S = Pn({
            particles: x,
            duration: i,
            particleSize: c,
            force: u,
            width: m,
            height: f
        })(),
        ee = N.useCallback(function(e) {
            if (e) {
                var t = e.getBoundingClientRect(),
                    n = t.top,
                    r = t.left;
                b({
                    top: n,
                    left: r
                })
            }
        }, []);
    return N.useEffect(function() {
        if (typeof g == `function`) {
            var e = setTimeout(g, i);
            return function() {
                return clearTimeout(e)
            }
        }
    }, [i, g]), (0, M.jsx)(`div`, X({
        ref: ee,
        className: S.container
    }, _, {
        children: y && (0, I.createPortal)((0, M.jsx)(`div`, X({
            className: S.screen
        }, h ? {
            style: {
                zIndex: h
            }
        } : null, {
            children: (0, M.jsx)(`div`, X({
                style: {
                    position: `absolute`,
                    top: y.top,
                    left: y.left
                }
            }, {
                children: x.map(function(e, t) {
                    return (0, M.jsx)(`div`, X({
                        id: `confetti-particle-${t}`,
                        className: S.particle
                    }, {
                        children: (0, M.jsx)(`div`, {})
                    }), e.degree)
                })
            }))
        })), document.body)
    }))
}
var Wn = () => {
        let [e, t] = s(!1);
        return b(() => {
            t()
        }, F.pack.exit.confetti.delay), (0, M.jsx)(yt, {
            children: e ? (0, M.jsx)(Un, {
                colors: [`#ffffff`],
                width: window.innerWidth * 1.5,
                force: .6,
                zIndex: 2,
                duration: 1200
            }) : null
        })
    },
    Gn = e => {
        let {
            cosmetic: t,
            isNew: n,
            percentage: r,
            itemIndex: i,
            totalItems: a,
            handleClick: o
        } = e, s = i === a - 1, c = Ze();
        return (0, M.jsxs)(Kn, {
            initial: {
                opacity: 0,
                scale: .2
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: i === 0 && c ? {
                duration: .27,
                ease: `easeOut`
            } : {
                duration: .3,
                ease: `anticipate`
            },
            exit: {
                opacity: 0,
                scale: 0
            },
            children: [a >= 2 ? (0, M.jsxs)(qn, {
                style: {
                    marginBottom: n ? 6 : 10
                },
                children: [`Item `, i + 1, `/`, a]
            }) : null, n ? (0, M.jsx)(Jn, {
                children: (0, M.jsx)(Yn, {
                    children: `New!`
                })
            }) : null, (0, M.jsx)(Xn, {
                style: {
                    background: O(t.rarity)
                },
                children: (0, M.jsx)(Qn, {
                    src: D({
                        id: t.id,
                        type: t.type
                    }),
                    draggable: !1
                })
            }), (0, M.jsx)(Zn, {
                children: t.name
            }), (0, M.jsxs)($n, {
                children: [Be(t.type), ` • `, t.rarity, ` •`, ` `, r.toFixed(2), `%`]
            }), (0, M.jsx)(Ge, {
                ariaLabel: s ? `Close` : `Next Item`,
                style: {
                    marginTop: 25
                },
                onClick: o,
                type: s ? `success` : `default`,
                children: (0, M.jsx)(`span`, {
                    style: {
                        textTransform: `uppercase`
                    },
                    children: s ? `Close` : `Next Item`
                })
            })]
        })
    },
    Kn = w(Qe.div).attrs({
        className: `maxAll flex-center scroll-y flex-column`
    })`
  justify-content: safe center;
  align-items: safe center;
  font-family: ${C.FugazOne};
  text-transform: uppercase;
  padding: 40px 25px;
  text-align: center;
  will-change: transform;
`,
    qn = w.div`
  font-size: 12px;
  opacity: 0.75;
`,
    Jn = w.div`
  line-height: 1;
  padding: 7px 18px;
  border-radius: 60px;
  margin-bottom: 12px;
  font-size: 17px;
  background: #43a047;
`,
    Yn = w.div`
  margin-top: 2px;
`,
    Xn = w.div.attrs({
        className: `flex-center`
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
    Zn = w.div`
  font-size: 56px;
  margin-top: 18px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 620px) {
    font-size: 48px;
    margin-top: 14px;
  }
`,
    Qn = w.img`
  max-height: 100%;
  max-width: 100%;
`,
    $n = w.div`
  font-size: 22px;
  opacity: 0.9;
  margin-top: -8px;
  @media (max-width: 620px) {
    font-size: 18px;
  }
`,
    er = Ke(),
    tr = e => {
        let [t, n] = s(!1), [r, i] = N.useState(0);
        b(n, 140);
        let a = N.useMemo(() => {
            let t = e.items[r],
                n = e.packData.cosmetics.find(e => e.id === t.cosmeticId),
                i = e.packData.items.reduce((e, t) => e + t.count, 0);
            return {
                item: t,
                cosmetic: n,
                percentage: e.packData.items.find(e => e.cosmeticId === t.cosmeticId).count / i * 100
            }
        }, [e.items, e.packData.cosmetics, r]);
        return t ? (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(rr, {
                rarity: a.cosmetic.rarity
            }), (0, M.jsx)(x, {
                mode: `wait`,
                children: (0, M.jsx)(Gn, {
                    itemIndex: r,
                    isNew: !a.item.owned,
                    totalItems: e.items.length,
                    cosmetic: a.cosmetic,
                    percentage: a.percentage,
                    handleClick: () => {
                        Le(), r === e.items.length - 1 ? e.close() : (i(e => e + 1), A({
                            path: T(`cosmos/zoom${(0,er.random)(1,2)}.mp3`),
                            volume: .5,
                            delay: 160
                        }))
                    }
                }, a.cosmetic.id + r)
            })]
        }) : null
    },
    nr = e => {
        let t = We(e.rarity),
            n = N.useRef(null),
            r = N.useMemo(() => t, []);
        return N.useEffect(() => {
            n.current && n.current.style.setProperty(`--c`, t)
        }, [t]), (0, M.jsx)(ir, {
            ref: n,
            defaultColor: r
        })
    },
    rr = e => (0, I.createPortal)((0, M.jsx)(nr, {
        ...e
    }), document.getElementById(le.container)),
    ir = w.div.attrs({
        className: `maxAll animated fadeIn`
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
    ar = e => {
        let [t, n] = N.useState(`shake`), [r, i] = s(!1), [a, o] = N.useState(!0);
        return b(() => {
            o(!1)
        }, 250, r), (0, M.jsxs)(`div`, {
            className: `maxAll animated`,
            style: {
                color: te.White,
                minHeight: e.pageMode ? `auto` : 600
            },
            children: [a ? (0, M.jsx)(vt, {
                packId: e.packId,
                onComplete: () => {
                    n(`result`), A({
                        path: T(`cosmos/packOpen${(0,er.random)(1,2)}.mp3`),
                        volume: .5
                    })
                },
                onExit: i
            }) : null, t === `result` ? (0, M.jsx)(Wn, {}) : null, t === `result` ? (0, M.jsx)(tr, {
                items: e.items,
                packData: e.packData,
                close: e.close
            }) : null]
        })
    },
    or = e => (0, I.createPortal)((0, M.jsxs)(`div`, {
        className: `maxAll`,
        style: {
            overflow: `hidden`,
            position: `absolute`,
            top: 0,
            left: 0,
            userSelect: `none`
        },
        children: [(0, M.jsx)(ar, {
            ...e
        }), `,`]
    }), document.getElementById(le.content)),
    sr = [`pack-details`],
    cr = e => S([sr, e], () => l({
        url: `/api/cosmos/pack/details/` + e
    })),
    lr = e => {
        let {
            secondary: t
        } = h(), [n, r] = N.useState([]), i = e.metadata ?? t, {
            data: a,
            isLoading: o,
            error: s
        } = cr(i), {
            data: c,
            isLoading: l,
            error: u
        } = ue(), d = o || l, f = s || u;
        if (d) return (0, M.jsx)(fe, {
            className: `maxAll`,
            children: (0, M.jsx)(Fe, {
                style: {
                    color: te.White
                }
            })
        });
        if (f) {
            var p;
            let e = f == null || (p = f.message) == null ? void 0 : p.text;
            return (0, M.jsx)(fe, {
                className: `maxAll`,
                children: e ?? `There was an fetching this pack. Please refresh and try again.`
            })
        }
        return n.length ? (0, M.jsxs)(M.Fragment, {
            children: [e.pageMode ? null : (0, M.jsx)(`div`, {
                style: {
                    height: 650
                }
            }), (0, M.jsx)(or, {
                packData: a,
                items: n,
                close: () => r([]),
                packId: i,
                pageMode: e.pageMode
            })]
        }) : (0, M.jsx)(mt, {
            pageMode: e.pageMode,
            packId: i,
            setPackItems: r,
            packData: a,
            cosmosData: c
        })
    };
export {
    lr as
    default
};