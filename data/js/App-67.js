const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-78.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/howler.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js"]))) => i.map(i => d[i]);
import {
    e as z,
    ar as we,
    j as n,
    d as c,
    b5 as T,
    F as O,
    r as d,
    p as _e,
    U as b,
    x as h,
    b6 as oe,
    y as Ne,
    aW as ze,
    t as Ee,
    u as $e,
    s as Te,
    a as Me,
    E as Oe,
    M as Ae
} from "./_index.js";
import {
    C as q,
    a as A,
    V as We
} from "./Centered.js";
import {
    g as j,
    f as S,
    C as Ie,
    a as ae,
    i as se
} from "./ElementIds.js";
import {
    F as W
} from "./FontAwesomeIcon.js";
import {
    C as B
} from "./Names.js";
import {
    S as I
} from "./index-2.js";
import {
    M as ie,
    C as ce
} from "./Button.js";
import {
    G as V
} from "./GetAssetPath.js";
import {
    p as G
} from "./playSound.js";
import {
    u as Pe
} from "./useQuery.js";
import {
    C as Be
} from "./confetti.js";
const y = {
        rarities: {
            common: "#606060",
            uncommon: "rgb(6 143 0)",
            rare: "rgb(8 97 190)",
            epic: "rgb(53 6 146)",
            legendary: "#ba5605",
            mythic: "#cba638"
        }
    },
    Fe = e => e === j.common ? y.rarities.common : e === j.uncommon ? y.rarities.uncommon : e === j.rare ? y.rarities.rare : e === j.epic ? y.rarities.epic : e === j.legendary ? y.rarities.legendary : e === j.mythic ? y.rarities.mythic : z.White,
    Re = e => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${Fe(e)} 100%)`,
    Le = e => e === S.character ? B.character : e === S.sticker ? B.sticker : e === S.trail ? B.trail : "Cosmetic",
    K = () => {
        G({
            path: V("cosmos/pop.mp3"),
            volume: .4
        })
    },
    M = () => {
        G({
            path: V(`cosmos/packButton${we.random(1,2)}.mp3`),
            volume: .4
        })
    },
    nn = e => n.jsxs(le, {
        selected: e.selected,
        children: [n.jsx(ue, {
            children: n.jsx(de, {
                style: {
                    background: e.background,
                    padding: e.imagePadding ?? 10
                },
                children: n.jsx(De, {
                    src: e.image
                })
            })
        }), e.count > 1 ? n.jsx(fe, {
            children: T(e.count)
        }) : null]
    }),
    rn = e => n.jsx(le, {
        selected: e.selected,
        style: {
            width: e.width,
            cursor: "pointer"
        },
        onClick: e.onSelect,
        children: n.jsx(ue, {
            children: n.jsx(de, {
                style: {
                    background: "radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )",
                    fontSize: 42,
                    color: "rgba(255,255,255,0.5)"
                },
                children: n.jsx(W, {
                    name: "fal fa-times"
                })
            })
        })
    }),
    le = c.div.attrs({
        className: "maxWidth"
    })`
  height: 140px;
  border: 4px solid;
  border-color: ${e=>e.selected?"#fdd835":z.White};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`,
    ue = c.div.attrs({
        className: "maxAll"
    })`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`,
    de = c(q).attrs({
        className: "maxAll"
    })``,
    De = c.img`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`,
    fe = c.div.attrs({
        className: "flex-center"
    })`
  position: absolute;
  top: 7px;
  left: 7px;
  padding: 3px 6px;
  background: #ff6f00;
  color: ${z.White};
  border-radius: 50px;
  line-height: 1;
  font-weight: ${O.Bold};
  font-size: 10px;
`,
    He = d.lazy(() => _e(() => import("./App-78.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))),
    Y = e => {
        const t = Re(e.rarity),
            r = () => {
                const o = n.jsx(Ve, {
                    style: {
                        padding: e.type === S.sticker ? 24 : 8
                    },
                    children: n.jsx(Ge, {
                        draggable: !1,
                        src: e.image
                    })
                });
                return e.type === S.character && !e.blockCharacterPreview ? n.jsx(He, {
                    id: e.id.replace("character_", ""),
                    editStyles: e.editStyles,
                    fallback: o
                }) : o
            };
        return n.jsxs(qe, {
            style: {
                background: t
            },
            children: [e.count > 1 ? n.jsx(fe, {
                style: {
                    right: 20,
                    top: 42,
                    left: "auto"
                },
                children: T(e.count)
            }) : null, n.jsxs(d.Suspense, {
                fallback: null,
                children: [r(), " "]
            })]
        })
    },
    qe = c.div.attrs({
        className: "maxWidth"
    })`
  height: 150px;
  overflow: hidden;
  position: relative;
`,
    Ve = c(q).attrs({
        className: "maxAll"
    })``,
    Ge = c.img`
  max-height: 100%;
  max-width: 100%;
`,
    Ke = e => {
        const {
            name: t,
            type: r,
            rarity: o
        } = e, a = [];
        return a.push(Le(r)), a.push(o), n.jsxs(Ye, {
            children: [n.jsx(Qe, {
                children: t
            }), a.length ? n.jsx(I, {
                direction: "horizontal",
                size: 10,
                wrap: !0,
                style: {
                    marginTop: 4
                },
                children: a.map(s => n.jsx(Xe, {
                    children: s
                }, e.id + s))
            }) : null]
        })
    },
    Ye = c(A).attrs({
        className: "maxWidth"
    })`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
`,
    Qe = c.div`
  font-size: 36px;
  font-weight: ${O.Bold};
  text-align: center;
`,
    Xe = c.div`
  font-family: ${b.FugazOne};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    Q = e => {
        const t = e.callToAction({
                editStyles: e.editStyles
            }),
            r = !!(e.count > 1 && e.sellCost && e.setToSellScreen);
        return t ? n.jsxs(A, {
            className: "maxAll",
            style: {
                marginTop: 20
            },
            children: [n.jsx(ie, {
                type: "success",
                customHorizontalPadding: 35,
                disabled: t.disabled,
                ariaLabel: t.ariaLabel,
                onClick: () => {
                    t.onClick()
                },
                children: n.jsx("div", {
                    style: {
                        fontFamily: b.FugazOne,
                        textTransform: "uppercase",
                        fontSize: 16
                    },
                    children: t.text
                })
            }, `cta-${t.disabled}}`), r ? n.jsx(me, {
                onClick: () => {
                    M(), e.setToSellScreen()
                },
                children: "Sell"
            }) : null]
        }) : null
    },
    me = c.div`
  color: ${ce.Yellow};
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  font-style: italic;
  &:hover {
    color: #ffff99;
  }
`,
    Ue = e => {
        const {
            option: t
        } = e, r = () => t.preview.type === "color" ? n.jsx(Ze, {
            style: {
                background: `radial-gradient(circle at 13px 13px, ${t.preview.color}, #000)`
            }
        }) : null;
        return n.jsx(Je, {
            selected: e.selected,
            onClick: e.selected ? void 0 : e.select,
            children: r()
        })
    },
    Je = c.div.attrs({
        className: "flex-center"
    })`
  width: 65px;
  height: 65px;
  background: rgba(255, 255, 255, ${e=>e.selected?.24:.1});
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${e=>e.selected?"#fdd835":z.White};
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(
      255,
      255,
      255,
      ${e=>e.selected?.24:.17}
    );
  }
`,
    Ze = c.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

function P() {
    return (P = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }).apply(this, arguments)
}

function he(e, t) {
    if (e == null) return {};
    var r, o, a = {},
        s = Object.keys(e);
    for (o = 0; o < s.length; o++) t.indexOf(r = s[o]) >= 0 || (a[r] = e[r]);
    return a
}

function R(e) {
    var t = d.useRef(e),
        r = d.useRef(function(o) {
            t.current && t.current(o)
        });
    return t.current = e, r.current
}
var N = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e
    },
    _ = function(e) {
        return "touches" in e
    },
    L = function(e) {
        return e && e.ownerDocument.defaultView || self
    },
    ee = function(e, t, r) {
        var o = e.getBoundingClientRect(),
            a = _(t) ? function(s, u) {
                for (var l = 0; l < s.length; l++)
                    if (s[l].identifier === u) return s[l];
                return s[0]
            }(t.touches, r) : t;
        return {
            left: N((a.pageX - (o.left + L(e).pageXOffset)) / o.width),
            top: N((a.pageY - (o.top + L(e).pageYOffset)) / o.height)
        }
    },
    te = function(e) {
        !_(e) && e.preventDefault()
    },
    xe = h.memo(function(e) {
        var t = e.onMove,
            r = e.onKey,
            o = he(e, ["onMove", "onKey"]),
            a = d.useRef(null),
            s = R(t),
            u = R(r),
            l = d.useRef(null),
            f = d.useRef(!1),
            i = d.useMemo(function() {
                var je = function(g) {
                        te(g), (_(g) ? g.touches.length > 0 : g.buttons > 0) && a.current ? s(ee(a.current, g, l.current)) : E(!1)
                    },
                    ye = function() {
                        return E(!1)
                    };

                function E(g) {
                    var x = f.current,
                        p = L(a.current),
                        w = g ? p.addEventListener : p.removeEventListener;
                    w(x ? "touchmove" : "mousemove", je), w(x ? "touchend" : "mouseup", ye)
                }
                return [function(g) {
                    var x = g.nativeEvent,
                        p = a.current;
                    if (p && (te(x), ! function(Se, ke) {
                            return ke && !_(Se)
                        }(x, f.current) && p)) {
                        if (_(x)) {
                            f.current = !0;
                            var w = x.changedTouches || [];
                            w.length && (l.current = w[0].identifier)
                        }
                        p.focus(), s(ee(p, x, l.current)), E(!0)
                    }
                }, function(g) {
                    var x = g.which || g.keyCode;
                    x < 37 || x > 40 || (g.preventDefault(), u({
                        left: x === 39 ? .05 : x === 37 ? -.05 : 0,
                        top: x === 40 ? .05 : x === 38 ? -.05 : 0
                    }))
                }, E]
            }, [u, s]),
            v = i[0],
            k = i[1],
            Z = i[2];
        return d.useEffect(function() {
            return Z
        }, [Z]), h.createElement("div", P({}, o, {
            onTouchStart: v,
            onMouseDown: v,
            className: "react-colorful__interactive",
            ref: a,
            onKeyDown: k,
            tabIndex: 0,
            role: "slider"
        }))
    }),
    X = function(e) {
        return e.filter(Boolean).join(" ")
    },
    ge = function(e) {
        var t = e.color,
            r = e.left,
            o = e.top,
            a = o === void 0 ? .5 : o,
            s = X(["react-colorful__pointer", e.className]);
        return h.createElement("div", {
            className: s,
            style: {
                top: 100 * a + "%",
                left: 100 * r + "%"
            }
        }, h.createElement("div", {
            className: "react-colorful__pointer-fill",
            style: {
                backgroundColor: t
            }
        }))
    },
    m = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r
    },
    et = function(e) {
        return at(D(e))
    },
    D = function(e) {
        return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
            r: parseInt(e[0] + e[0], 16),
            g: parseInt(e[1] + e[1], 16),
            b: parseInt(e[2] + e[2], 16),
            a: e.length === 4 ? m(parseInt(e[3] + e[3], 16) / 255, 2) : 1
        } : {
            r: parseInt(e.substring(0, 2), 16),
            g: parseInt(e.substring(2, 4), 16),
            b: parseInt(e.substring(4, 6), 16),
            a: e.length === 8 ? m(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
        }
    },
    tt = function(e) {
        return ot(rt(e))
    },
    nt = function(e) {
        var t = e.s,
            r = e.v,
            o = e.a,
            a = (200 - t) * r / 100;
        return {
            h: m(e.h),
            s: m(a > 0 && a < 200 ? t * r / 100 / (a <= 100 ? a : 200 - a) * 100 : 0),
            l: m(a / 2),
            a: m(o, 2)
        }
    },
    H = function(e) {
        var t = nt(e);
        return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
    },
    rt = function(e) {
        var t = e.h,
            r = e.s,
            o = e.v,
            a = e.a;
        t = t / 360 * 6, r /= 100, o /= 100;
        var s = Math.floor(t),
            u = o * (1 - r),
            l = o * (1 - (t - s) * r),
            f = o * (1 - (1 - t + s) * r),
            i = s % 6;
        return {
            r: m(255 * [o, l, u, u, f, o][i]),
            g: m(255 * [f, o, o, l, u, u][i]),
            b: m(255 * [u, u, f, o, o, l][i]),
            a: m(a, 2)
        }
    },
    $ = function(e) {
        var t = e.toString(16);
        return t.length < 2 ? "0" + t : t
    },
    ot = function(e) {
        var t = e.r,
            r = e.g,
            o = e.b,
            a = e.a,
            s = a < 1 ? $(m(255 * a)) : "";
        return "#" + $(t) + $(r) + $(o) + s
    },
    at = function(e) {
        var t = e.r,
            r = e.g,
            o = e.b,
            a = e.a,
            s = Math.max(t, r, o),
            u = s - Math.min(t, r, o),
            l = u ? s === t ? (r - o) / u : s === r ? 2 + (o - t) / u : 4 + (t - r) / u : 0;
        return {
            h: m(60 * (l < 0 ? l + 6 : l)),
            s: m(s ? u / s * 100 : 0),
            v: m(s / 255 * 100),
            a
        }
    },
    st = h.memo(function(e) {
        var t = e.hue,
            r = e.onChange,
            o = X(["react-colorful__hue", e.className]);
        return h.createElement("div", {
            className: o
        }, h.createElement(xe, {
            onMove: function(a) {
                r({
                    h: 360 * a.left
                })
            },
            onKey: function(a) {
                r({
                    h: N(t + 360 * a.left, 0, 360)
                })
            },
            "aria-label": "Hue",
            "aria-valuenow": m(t),
            "aria-valuemax": "360",
            "aria-valuemin": "0"
        }, h.createElement(ge, {
            className: "react-colorful__hue-pointer",
            left: t / 360,
            color: H({
                h: t,
                s: 100,
                v: 100,
                a: 1
            })
        })))
    }),
    it = h.memo(function(e) {
        var t = e.hsva,
            r = e.onChange,
            o = {
                backgroundColor: H({
                    h: t.h,
                    s: 100,
                    v: 100,
                    a: 1
                })
            };
        return h.createElement("div", {
            className: "react-colorful__saturation",
            style: o
        }, h.createElement(xe, {
            onMove: function(a) {
                r({
                    s: 100 * a.left,
                    v: 100 - 100 * a.top
                })
            },
            onKey: function(a) {
                r({
                    s: N(t.s + 100 * a.left, 0, 100),
                    v: N(t.v - 100 * a.top, 0, 100)
                })
            },
            "aria-label": "Color",
            "aria-valuetext": "Saturation " + m(t.s) + "%, Brightness " + m(t.v) + "%"
        }, h.createElement(ge, {
            className: "react-colorful__saturation-pointer",
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: H(t)
        })))
    }),
    ve = function(e, t) {
        if (e === t) return !0;
        for (var r in e)
            if (e[r] !== t[r]) return !1;
        return !0
    },
    ct = function(e, t) {
        return e.toLowerCase() === t.toLowerCase() || ve(D(e), D(t))
    };

function lt(e, t, r) {
    var o = R(r),
        a = d.useState(function() {
            return e.toHsva(t)
        }),
        s = a[0],
        u = a[1],
        l = d.useRef({
            color: t,
            hsva: s
        });
    d.useEffect(function() {
        if (!e.equal(t, l.current.color)) {
            var i = e.toHsva(t);
            l.current = {
                hsva: i,
                color: t
            }, u(i)
        }
    }, [t, e]), d.useEffect(function() {
        var i;
        ve(s, l.current.hsva) || e.equal(i = e.fromHsva(s), l.current.color) || (l.current = {
            hsva: s,
            color: i
        }, o(i))
    }, [s, e, o]);
    var f = d.useCallback(function(i) {
        u(function(v) {
            return Object.assign({}, v, i)
        })
    }, []);
    return [s, f]
}
var ut = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
    dt = function() {
        return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0
    },
    ne = new Map,
    ft = function(e) {
        ut(function() {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !ne.has(t)) {
                var r = t.createElement("style");
                r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, ne.set(t, r);
                var o = dt();
                o && r.setAttribute("nonce", o), t.head.appendChild(r)
            }
        }, [])
    },
    mt = function(e) {
        var t = e.className,
            r = e.colorModel,
            o = e.color,
            a = o === void 0 ? r.defaultColor : o,
            s = e.onChange,
            u = he(e, ["className", "colorModel", "color", "onChange"]),
            l = d.useRef(null);
        ft(l);
        var f = lt(r, a, s),
            i = f[0],
            v = f[1],
            k = X(["react-colorful", t]);
        return h.createElement("div", P({}, u, {
            ref: l,
            className: k
        }), h.createElement(it, {
            hsva: i,
            onChange: v
        }), h.createElement(st, {
            hue: i.h,
            onChange: v,
            className: "react-colorful__last-control"
        }))
    },
    ht = {
        defaultColor: "000",
        toHsva: et,
        fromHsva: function(e) {
            return tt({
                h: e.h,
                s: e.s,
                v: e.v,
                a: 1
            })
        },
        equal: ct
    },
    xt = function(e) {
        return h.createElement(mt, P({}, e, {
            colorModel: ht
        }))
    };
const gt = e => {
        const t = r => {
            e.onChange(r)
        };
        return n.jsx(vt, {
            children: n.jsx(xt, {
                style: {
                    width: "100%"
                },
                color: e.value,
                onChange: t
            })
        })
    },
    vt = c.div.attrs({
        className: "maxWidth"
    })`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`,
    bt = e => {
        const {
            category: t
        } = e, [r, o] = d.useState(!0), a = () => {
            o(i => !i)
        }, s = d.useMemo(() => {
            var v;
            if (!((v = t.options) != null && v.length)) return;
            const i = t.options.find(k => k.name === e.value);
            return i || t.options[0]
        }, [t, e.value]), u = d.useMemo(() => {
            if (t.color) return t.color.defaultColor
        }, [t.color]), l = d.useMemo(() => {
            let i = t.name;
            return s ? `${i} - ${s.name}` : i
        }, [t, s]), f = () => r ? e.category.type === Ie.color ? n.jsx(gt, {
            value: e.value ?? u,
            onChange: e.onChange
        }) : n.jsx(I, {
            direction: "horizontal",
            size: 7,
            wrap: !0,
            children: t.options.map(i => n.jsx(Ue, {
                option: i,
                selected: i.name === s.name,
                select: () => {
                    K(), e.onChange(i.name)
                }
            }, i.name + t.name))
        }) : null;
        return n.jsxs(pt, {
            children: [n.jsxs(Ct, {
                onClick: a,
                children: [n.jsx(jt, {
                    children: l
                }), n.jsx(yt, {
                    children: n.jsx(W, {
                        name: `fas fa-caret-${r?"up":"down"}`
                    })
                })]
            }), f()]
        })
    },
    pt = c.div.attrs({
        className: "maxWidth"
    })``,
    Ct = c.div.attrs({
        className: "maxWidth flex vc between"
    })`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`,
    jt = c.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`,
    yt = c.div`
  font-size: 16px;
  opacity: 0.9;
`,
    St = e => n.jsx("div", {
        className: "maxWidth",
        style: {
            marginTop: 17
        },
        children: n.jsx(I, {
            className: "maxWidth",
            direction: "vertical",
            size: 15,
            children: e.style.categories.map(t => n.jsx(bt, {
                category: t,
                value: e.currentStyles[t.name],
                onChange: r => {
                    e.updateEditStyle(t.name, r)
                }
            }, t.name + "-category"))
        })
    }),
    F = 25,
    on = e => {
        const t = r => {
            const o = Math.max(1, Math.min(F, r));
            e.setCount(o), M()
        };
        return n.jsxs(I, {
            size: 6,
            style: {
                marginTop: 10
            },
            children: [n.jsx(C, {
                disabled: e.count === 1,
                onClick: () => {
                    t(e.count - 1)
                },
                children: "-1"
            }), n.jsx(C, {
                disabled: e.count === F,
                onClick: () => {
                    t(e.count + 1)
                },
                children: "+1"
            }), n.jsx(C, {
                disabled: e.count === F,
                onClick: () => {
                    t(e.count + 5)
                },
                children: "+5"
            })]
        })
    },
    C = c.div`
  background: rgba(255, 255, 255, 0.1);
  opacity: ${e=>e.disabled?.5:1};
  padding: 6px 12px;
  line-height: 1;
  font-size: 11px;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  will-change: transform, background;
  user-select: none;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  ${e=>!e.disabled&&`&:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }`}
`,
    U = ["cosmos-owned-cosmetics"],
    an = () => Pe(U, () => Ne({
        url: "/api/cosmos/owned-cosmetics"
    })),
    sn = () => {
        oe.invalidateQueries(U)
    },
    kt = () => {
        oe.refetchQueries(U)
    },
    wt = e => {
        const [t, r] = d.useState(!1), [o, a] = d.useState(e.count - 1), {
            closeSellScreen: s
        } = e, u = e.count - 1, l = i => {
            const v = Math.max(1, Math.min(u, i));
            a(v), M()
        }, f = () => {
            t || (G({
                path: V("cosmos/sold.mp3"),
                volume: .6
            }), r(!0), ze({
                url: "/api/cosmos/sell",
                data: {
                    cosmeticId: e.id,
                    count: o
                },
                success: i => {
                    e.setSoldAmount(i.amount), kt(), se()
                },
                error: i => {
                    Ee({
                        e: i,
                        default: {
                            title: "Error selling this item",
                            content: "Please try again later"
                        }
                    })
                },
                both: () => {
                    r(!1)
                }
            }))
        };
        return n.jsxs(_t, {
            children: [n.jsxs(Nt, {
                children: [n.jsxs(q, {
                    className: "maxWidth",
                    style: {
                        gap: 6
                    },
                    children: [n.jsx(C, {
                        disabled: o === 1,
                        onClick: () => {
                            l(o - 5)
                        },
                        children: "-5"
                    }), n.jsx(C, {
                        disabled: o === 1,
                        onClick: () => {
                            l(o - 1)
                        },
                        children: "-1"
                    }), n.jsx(zt, {
                        children: T(o)
                    }), n.jsx(C, {
                        disabled: o === u,
                        onClick: () => {
                            l(o + 1)
                        },
                        children: "+1"
                    }), n.jsx(C, {
                        disabled: o === u,
                        onClick: () => {
                            l(o + 5)
                        },
                        children: "+5"
                    })]
                }), n.jsxs(Et, {
                    children: [n.jsxs("span", {
                        children: ["Selling ", T(o), " ", n.jsx("span", {
                            style: {
                                fontWeight: O.Bold,
                                textDecoration: "underline"
                            },
                            children: e.name
                        }), " ", "for"]
                    }), n.jsx(ae, {
                        size: 12,
                        amount: e.sellCost * o
                    })]
                })]
            }), n.jsx(ie, {
                type: "success",
                customHorizontalPadding: 35,
                ariaLabel: "Sell",
                onClick: f,
                style: {
                    marginTop: 20
                },
                children: n.jsx("div", {
                    style: {
                        fontFamily: b.FugazOne,
                        textTransform: "uppercase",
                        fontSize: 16
                    },
                    children: "Sell"
                })
            }), n.jsx(me, {
                onClick: () => {
                    M(), s()
                },
                children: "Go back"
            })]
        })
    },
    _t = c(A).attrs({
        className: "maxWidth"
    })``,
    Nt = c(A).attrs({
        className: "maxWidth"
    })`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`,
    zt = c.div`
  font-size: 24px;
  font-family: ${b.FugazOne};
  line-height: 1;
  border: 2px solid ${ce.Yellow};
  border-radius: 4px;
  padding: 10px 30px;
  padding-top: 13px;
  margin: 0px 10px;
  background: rgba(255, 255, 255, 0.05);
`,
    Et = c.div.attrs({
        className: "flex wrap"
    })`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`,
    $t = e => n.jsx(n.Fragment, {
        children: n.jsxs(Tt, {
            children: [e.description ? n.jsx(re, {
                icon: "fad fa-sparkles",
                children: e.description
            }) : null, e.pack ? n.jsxs(re, {
                icon: "fad fa-box",
                style: {
                    marginTop: e.description ? 10 : 0
                },
                children: ["Part of the", " ", n.jsx("span", {
                    style: {
                        fontWeight: O.Bold,
                        color: "#ffecb3"
                    },
                    children: e.pack
                })]
            }) : null]
        })
    }),
    re = e => n.jsxs(Mt, {
        style: e.style,
        children: [n.jsx("div", {
            style: {
                marginRight: 15,
                flexShrink: 0
            },
            children: n.jsx(W, {
                name: e.icon
            })
        }), n.jsx("div", {
            children: e.children
        })]
    }),
    Tt = c.div`
  margin-top: 19px;
`,
    Mt = c(We)`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`;
c.div``;
const Ot = e => {
        const [t, r] = d.useState(e.editStyles ?? {}), [o, a] = d.useState(!1), s = (l, f) => {
            r({
                ...t,
                [l]: f
            })
        }, u = () => o ? n.jsx(wt, {
            ...e,
            setSoldAmount: e.setSoldAmount,
            closeSellScreen: () => {
                a(!1)
            }
        }) : n.jsxs(n.Fragment, {
            children: [e.description || e.pack ? n.jsx($t, {
                ...e
            }) : null, e.style ? n.jsx(St, {
                style: e.style,
                currentStyles: t,
                updateEditStyle: s
            }) : null, n.jsx(Q, {
                ...e,
                editStyles: t,
                setToSellScreen: () => {
                    a(!0)
                }
            })]
        });
        return n.jsxs("div", {
            className: "maxWidth",
            children: [n.jsx(Y, {
                ...e,
                editStyles: t
            }), n.jsxs(J, {
                children: [n.jsx(Ke, {
                    ...e
                }), u()]
            })]
        })
    },
    J = c.div`
  padding: 20px 20px 25px 20px;
`,
    At = () => n.jsx(Wt, {
        children: n.jsx(W, {
            name: "fas fa-times"
        })
    }),
    Wt = c.div`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,
    It = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: .87
    },
    Pt = e => {
        const [t, r] = $e(!1);
        return Te(r), n.jsxs(be, {
            children: [n.jsx(pe, {
                children: e.name
            }), n.jsx(Be, {
                active: t,
                config: It
            }), n.jsx(Ce, {
                children: "Purchased!"
            })]
        })
    },
    be = c.div.attrs({
        className: "flex-center flex-column animated bounceIn"
    })`
  text-align: center;
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  animation-duration: 0.6s;
`,
    pe = c.div`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`,
    Ce = c.div`
  font-size: 48px;
  line-height: 1;
`,
    Bt = ({
        cosmeticId: e,
        cosmeticType: t,
        editStyles: r,
        onSuccess: o
    }) => {
        const a = {
            cosmeticId: e,
            cosmeticType: t
        };
        r && Object.keys(r).length > 0 && (a.editStyles = r), Me({
            url: "/api/cosmos/select-cosmetic",
            data: a,
            success: () => {
                se(), o()
            }
        })
    },
    Ft = e => {
        const t = e.type !== S.sticker;
        return n.jsxs("div", {
            className: "maxWidth",
            children: [n.jsx(Y, {
                ...e,
                editStyles: {}
            }), n.jsxs(J, {
                className: "flex-center flex-column",
                children: [n.jsx(Pt, {
                    ...e
                }), n.jsx(Q, {
                    ...e,
                    callToAction: () => {
                        const r = t ? "Equip" : "Close";
                        return {
                            text: r,
                            ariaLabel: r,
                            onClick: () => {
                                if (K(), !t) {
                                    e.close();
                                    return
                                }
                                Bt({
                                    cosmeticId: e.id,
                                    cosmeticType: e.type,
                                    onSuccess: () => {
                                        e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged(), e.close()
                                    }
                                })
                            }
                        }
                    }
                }), t ? n.jsx(Rt, {
                    onClick: e.close,
                    children: "Close"
                }) : null]
            })]
        })
    },
    Rt = c.div`
  color: #bbdefb;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #e3f2fd;
  }
`,
    Lt = e => n.jsxs("div", {
        className: "maxWidth",
        children: [n.jsx(Y, {
            ...e,
            editStyles: {}
        }), n.jsxs(J, {
            className: "flex-center flex-column",
            children: [n.jsxs(be, {
                children: [n.jsx(pe, {
                    children: e.name
                }), n.jsx(Ce, {
                    children: "Sold!"
                })]
            }), n.jsx(Dt, {
                children: n.jsxs(Ht, {
                    children: [n.jsx("span", {
                        style: {
                            marginTop: 3,
                            marginRight: 8
                        },
                        children: "You earned"
                    }), n.jsx(ae, {
                        size: 14,
                        amount: e.soldAmount
                    })]
                })
            }), n.jsx(Q, {
                ...e,
                callToAction: () => {
                    const t = "Close";
                    return {
                        text: t,
                        ariaLabel: t,
                        onClick: () => {
                            K(), e.close()
                        }
                    }
                }
            })]
        })]
    }),
    Dt = c.div.attrs({
        className: "maxWidth flex-center"
    })`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  margin-top: 12px;
`,
    Ht = c.div.attrs({
        className: "flex"
    })``,
    qt = e => {
        const [t, r] = d.useState(0), o = () => t ? n.jsx(Lt, {
            ...e,
            soldAmount: t
        }) : e.purchased ? n.jsx(Ft, {
            ...e
        }) : n.jsx(Ot, {
            ...e,
            setSoldAmount: r
        });
        return n.jsx(Oe, {
            theme: {
                token: {
                    colorText: z.White,
                    colorBgBase: "#453267"
                }
            },
            children: n.jsx(Ae, {
                open: e.open,
                onCancel: e.close,
                afterClose: e.afterClose,
                closeIcon: n.jsx(At, {}),
                footer: null,
                styles: {
                    content: {
                        padding: 0,
                        borderRadius: 10,
                        overflow: "hidden"
                    }
                },
                children: o()
            })
        })
    },
    cn = e => {
        const [t, r] = d.useState(!0), {
            open: o,
            close: a
        } = e;
        d.useEffect(() => {
            e.open && r(!1)
        }, [o]);
        const s = () => {
            r(!0)
        };
        return !o && t ? null : n.jsx(qt, {
            ...e,
            open: o,
            close: a,
            afterClose: s
        })
    };
export {
    on as C, rn as E, nn as G, cn as P, M as a, kt as b, Le as c, Fe as d, sn as i, K as p, Re as r, Bt as s, an as u
};