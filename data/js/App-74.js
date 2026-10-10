const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-84.js", "assets/rolldown-runtime.js", "assets/react-1.js", "assets/jsx-runtime.js", "assets/_index.js", "assets/dist-1.js", "assets/utils.js", "assets/modal.js", "assets/assertThisInitialized.js", "assets/Compact.js", "assets/color.js", "assets/ContextIsolator.js", "assets/dist-2.js", "assets/wrapNativeSuper.js", "assets/InfoCircleFilled.js", "assets/compact-item.js", "assets/useLocale.js", "assets/useCSSVarCls.js", "assets/pickAttrs.js", "assets/button.js", "assets/PurePanel.js", "assets/Company.js", "assets/Paths.js", "assets/decorate.js", "assets/dist-3.js", "assets/spin.js", "assets/QueryClientProvider.js", "assets/queryClient.js", "assets/infiniteQueryBehavior.js", "assets/index-Tu04tXLf.css", "assets/GetAssetPath.js", "assets/Navigation.js", "assets/useQuery.js", "assets/SeasonTicketName.js", "assets/phaser.js", "assets/FixPhaserBootProcess.js", "assets/lodash.js", "assets/MapSound.js", "assets/howler.js", "assets/playSound.js", "assets/defineProperty.js", "assets/stores-2.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/FetchScene.js", "assets/isVersion.js", "assets/InPhase.js", "assets/FetchRoom.js"]))) => i.map(i => d[i]);
import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    O as r,
    w as i,
    x as a,
    z as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    a as c
} from "./InfoCircleFilled.js";
import {
    t as l
} from "./modal.js";
import {
    t as u
} from "./space.js";
import {
    t as d
} from "./jsx-runtime.js";
import {
    t as f
} from "./useQuery.js";
import {
    a as ee,
    c as p,
    h as te,
    l as m,
    n as h,
    r as ne,
    s as g
} from "./_index.js";
import {
    t as _
} from "./FontAwesomeIcon.js";
import {
    t as v
} from "./GetAssetPath.js";
import {
    c as y,
    i as b,
    l as re,
    o as ie,
    u as x
} from "./Navigation.js";
import {
    i as ae,
    n as S,
    t as C
} from "./Centered.js";
import {
    t as w
} from "./Names.js";
import {
    n as oe,
    t as se
} from "./Button.js";
import {
    t as ce
} from "./lodash.js";
import {
    t as T
} from "./playSound.js";
import {
    t as le
} from "./confetti.js";
var E = e(s()),
    D = d(),
    O = [`cosmos-owned-cosmetics`],
    ue = () => f(O, () => i({
        url: `/api/cosmos/owned-cosmetics`
    })),
    de = () => {
        ne.invalidateQueries(O)
    },
    k = () => {
        ne.refetchQueries(O)
    },
    A = {
        rarities: {
            common: `#606060`,
            uncommon: `rgb(6 143 0)`,
            rare: `rgb(8 97 190)`,
            epic: `rgb(53 6 146)`,
            legendary: `#ba5605`,
            mythic: `#cba638`
        }
    },
    fe = e => e === y.common ? A.rarities.common : e === y.uncommon ? A.rarities.uncommon : e === y.rare ? A.rarities.rare : e === y.epic ? A.rarities.epic : e === y.legendary ? A.rarities.legendary : e === y.mythic ? A.rarities.mythic : h.White,
    pe = e => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${fe(e)} 100%)`,
    me = e => (0, D.jsxs)(ge, {
        selected: e.selected,
        children: [(0, D.jsx)(j, {
            children: (0, D.jsx)(M, {
                style: {
                    background: e.background,
                    padding: e.imagePadding ?? 10
                },
                children: (0, D.jsx)(_e, {
                    src: e.image
                })
            })
        }), e.count > 1 ? (0, D.jsx)(N, {
            children: a(e.count)
        }) : null]
    }),
    he = e => (0, D.jsx)(ge, {
        selected: e.selected,
        style: {
            width: e.width,
            cursor: `pointer`
        },
        onClick: e.onSelect,
        children: (0, D.jsx)(j, {
            children: (0, D.jsx)(M, {
                style: {
                    background: `radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )`,
                    fontSize: 42,
                    color: `rgba(255,255,255,0.5)`
                },
                children: (0, D.jsx)(_, {
                    name: `fal fa-times`
                })
            })
        })
    }),
    ge = m.div.attrs({
        className: `maxWidth`
    })`
  height: 140px;
  border: 4px solid;
  border-color: ${e=>e.selected?`#fdd835`:h.White};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`,
    j = m.div.attrs({
        className: `maxAll`
    })`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`,
    M = m(C).attrs({
        className: `maxAll`
    })``,
    _e = m.img`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`,
    N = m.div.attrs({
        className: `flex-center`
    })`
  position: absolute;
  top: 7px;
  left: 7px;
  padding: 3px 6px;
  background: #ff6f00;
  color: ${h.White};
  border-radius: 50px;
  line-height: 1;
  font-weight: ${g.Bold};
  font-size: 10px;
`,
    ve = E.lazy(() => te(() => import(`./App-84.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]))),
    P = e => {
        let t = pe(e.rarity);
        return (0, D.jsxs)(ye, {
            style: {
                background: t
            },
            children: [e.count > 1 ? (0, D.jsx)(N, {
                style: {
                    right: 20,
                    top: 42,
                    left: `auto`
                },
                children: a(e.count)
            }) : null, (0, D.jsxs)(E.Suspense, {
                fallback: null,
                children: [(() => {
                    let t = (0, D.jsx)(be, {
                        style: {
                            padding: e.type === x.sticker ? 24 : 8
                        },
                        children: (0, D.jsx)(xe, {
                            draggable: !1,
                            src: e.image
                        })
                    });
                    return e.type === x.character && !e.blockCharacterPreview ? (0, D.jsx)(ve, {
                        id: e.id.replace(`character_`, ``),
                        editStyles: e.editStyles,
                        fallback: t
                    }) : t
                })(), ` `]
            })]
        })
    },
    ye = m.div.attrs({
        className: `maxWidth`
    })`
  height: 150px;
  overflow: hidden;
  position: relative;
`,
    be = m(C).attrs({
        className: `maxAll`
    })``,
    xe = m.img`
  max-height: 100%;
  max-width: 100%;
`,
    Se = e => e === x.character ? w.character : e === x.sticker ? w.sticker : e === x.trail ? w.trail : `Cosmetic`,
    Ce = e => {
        let {
            name: t,
            type: n,
            rarity: r
        } = e, i = [];
        return i.push(Se(n)), i.push(r), (0, D.jsxs)(we, {
            children: [(0, D.jsx)(Te, {
                children: t
            }), i.length ? (0, D.jsx)(u, {
                direction: `horizontal`,
                size: 10,
                wrap: !0,
                style: {
                    marginTop: 4
                },
                children: i.map(t => (0, D.jsx)(Ee, {
                    children: t
                }, e.id + t))
            }) : null]
        })
    },
    we = m(S).attrs({
        className: `maxWidth`
    })`
  font-family: ${p.FugazOne};
  text-transform: uppercase;
`,
    Te = m.div`
  font-size: 36px;
  font-weight: ${g.Bold};
  text-align: center;
`,
    Ee = m.div`
  font-family: ${p.FugazOne};
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
    De = ce(),
    F = () => {
        T({
            path: v(`cosmos/pop.mp3`),
            volume: .4
        })
    },
    I = () => {
        T({
            path: v(`cosmos/packButton${(0,De.random)(1,2)}.mp3`),
            volume: .4
        })
    },
    L = e => {
        let t = e.callToAction({
                editStyles: e.editStyles
            }),
            n = !!(e.count > 1 && e.sellCost && e.setToSellScreen);
        return t ? (0, D.jsxs)(S, {
            className: `maxAll`,
            style: {
                marginTop: 20
            },
            children: [(0, D.jsx)(se, {
                type: `success`,
                customHorizontalPadding: 35,
                disabled: t.disabled,
                ariaLabel: t.ariaLabel,
                onClick: () => {
                    t.onClick()
                },
                children: (0, D.jsx)(`div`, {
                    style: {
                        fontFamily: p.FugazOne,
                        textTransform: `uppercase`,
                        fontSize: 16
                    },
                    children: t.text
                })
            }, `cta-${t.disabled}}`), n ? (0, D.jsx)(Oe, {
                onClick: () => {
                    I(), e.setToSellScreen()
                },
                children: `Sell`
            }) : null]
        }) : null
    },
    Oe = m.div`
  color: ${oe.Yellow};
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
    ke = e => {
        let {
            option: t
        } = e;
        return (0, D.jsx)(Ae, {
            selected: e.selected,
            onClick: e.selected ? void 0 : e.select,
            children: t.preview.type === `color` ? (0, D.jsx)(je, {
                style: {
                    background: `radial-gradient(circle at 13px 13px, ${t.preview.color}, #000)`
                }
            }) : null
        })
    },
    Ae = m.div.attrs({
        className: `flex-center`
    })`
  width: 65px;
  height: 65px;
  background: rgba(255, 255, 255, ${e=>e.selected?.24:.1});
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${e=>e.selected?`#fdd835`:h.White};
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
    je = m.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

function R() {
    return (R = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function z(e, t) {
    if (e == null) return {};
    var n, r, i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
    return i
}

function B(e) {
    var t = (0, E.useRef)(e),
        n = (0, E.useRef)(function(e) {
            t.current && t.current(e)
        });
    return t.current = e, n.current
}
var V = function(e, t, n) {
        return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e
    },
    H = function(e) {
        return `touches` in e
    },
    U = function(e) {
        return e && e.ownerDocument.defaultView || self
    },
    W = function(e, t, n) {
        var r = e.getBoundingClientRect(),
            i = H(t) ? function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n].identifier === t) return e[n];
                return e[0]
            }(t.touches, n) : t;
        return {
            left: V((i.pageX - (r.left + U(e).pageXOffset)) / r.width),
            top: V((i.pageY - (r.top + U(e).pageYOffset)) / r.height)
        }
    },
    G = function(e) {
        !H(e) && e.preventDefault()
    },
    Me = E.memo(function(e) {
        var t = e.onMove,
            n = e.onKey,
            r = z(e, [`onMove`, `onKey`]),
            i = (0, E.useRef)(null),
            a = B(t),
            o = B(n),
            s = (0, E.useRef)(null),
            c = (0, E.useRef)(!1),
            l = (0, E.useMemo)(function() {
                var e = function(e) {
                        G(e), (H(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(W(i.current, e, s.current)) : n(!1)
                    },
                    t = function() {
                        return n(!1)
                    };

                function n(n) {
                    var r = c.current,
                        a = U(i.current),
                        o = n ? a.addEventListener : a.removeEventListener;
                    o(r ? `touchmove` : `mousemove`, e), o(r ? `touchend` : `mouseup`, t)
                }
                return [function(e) {
                    var t = e.nativeEvent,
                        r = i.current;
                    if (r && (G(t), ! function(e, t) {
                            return t && !H(e)
                        }(t, c.current) && r)) {
                        if (H(t)) {
                            c.current = !0;
                            var o = t.changedTouches || [];
                            o.length && (s.current = o[0].identifier)
                        }
                        r.focus(), a(W(r, t, s.current)), n(!0)
                    }
                }, function(e) {
                    var t = e.which || e.keyCode;
                    t < 37 || t > 40 || (e.preventDefault(), o({
                        left: t === 39 ? .05 : t === 37 ? -.05 : 0,
                        top: t === 40 ? .05 : t === 38 ? -.05 : 0
                    }))
                }, n]
            }, [o, a]),
            u = l[0],
            d = l[1],
            f = l[2];
        return (0, E.useEffect)(function() {
            return f
        }, [f]), E.createElement(`div`, R({}, r, {
            onTouchStart: u,
            onMouseDown: u,
            className: `react-colorful__interactive`,
            ref: i,
            onKeyDown: d,
            tabIndex: 0,
            role: `slider`
        }))
    }),
    K = function(e) {
        return e.filter(Boolean).join(` `)
    },
    Ne = function(e) {
        var t = e.color,
            n = e.left,
            r = e.top,
            i = r === void 0 ? .5 : r,
            a = K([`react-colorful__pointer`, e.className]);
        return E.createElement(`div`, {
            className: a,
            style: {
                top: 100 * i + `%`,
                left: 100 * n + `%`
            }
        }, E.createElement(`div`, {
            className: `react-colorful__pointer-fill`,
            style: {
                backgroundColor: t
            }
        }))
    },
    q = function(e, t, n) {
        return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n
    },
    Pe = function(e) {
        return ze(J(e))
    },
    J = function(e) {
        return e[0] === `#` && (e = e.substring(1)), e.length < 6 ? {
            r: parseInt(e[0] + e[0], 16),
            g: parseInt(e[1] + e[1], 16),
            b: parseInt(e[2] + e[2], 16),
            a: e.length === 4 ? q(parseInt(e[3] + e[3], 16) / 255, 2) : 1
        } : {
            r: parseInt(e.substring(0, 2), 16),
            g: parseInt(e.substring(2, 4), 16),
            b: parseInt(e.substring(4, 6), 16),
            a: e.length === 8 ? q(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
        }
    },
    Fe = function(e) {
        return Re(Le(e))
    },
    Ie = function(e) {
        var t = e.s,
            n = e.v,
            r = e.a,
            i = (200 - t) * n / 100;
        return {
            h: q(e.h),
            s: q(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
            l: q(i / 2),
            a: q(r, 2)
        }
    },
    Y = function(e) {
        var t = Ie(e);
        return `hsl(` + t.h + `, ` + t.s + `%, ` + t.l + `%)`
    },
    Le = function(e) {
        var t = e.h,
            n = e.s,
            r = e.v,
            i = e.a;
        t = t / 360 * 6, n /= 100, r /= 100;
        var a = Math.floor(t),
            o = r * (1 - n),
            s = r * (1 - (t - a) * n),
            c = r * (1 - (1 - t + a) * n),
            l = a % 6;
        return {
            r: q(255 * [r, s, o, o, c, r][l]),
            g: q(255 * [c, r, r, s, o, o][l]),
            b: q(255 * [o, o, c, r, r, s][l]),
            a: q(i, 2)
        }
    },
    X = function(e) {
        var t = e.toString(16);
        return t.length < 2 ? `0` + t : t
    },
    Re = function(e) {
        var t = e.r,
            n = e.g,
            r = e.b,
            i = e.a,
            a = i < 1 ? X(q(255 * i)) : ``;
        return `#` + X(t) + X(n) + X(r) + a
    },
    ze = function(e) {
        var t = e.r,
            n = e.g,
            r = e.b,
            i = e.a,
            a = Math.max(t, n, r),
            o = a - Math.min(t, n, r),
            s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
        return {
            h: q(60 * (s < 0 ? s + 6 : s)),
            s: q(a ? o / a * 100 : 0),
            v: q(a / 255 * 100),
            a: i
        }
    },
    Be = E.memo(function(e) {
        var t = e.hue,
            n = e.onChange,
            r = K([`react-colorful__hue`, e.className]);
        return E.createElement(`div`, {
            className: r
        }, E.createElement(Me, {
            onMove: function(e) {
                n({
                    h: 360 * e.left
                })
            },
            onKey: function(e) {
                n({
                    h: V(t + 360 * e.left, 0, 360)
                })
            },
            "aria-label": `Hue`,
            "aria-valuenow": q(t),
            "aria-valuemax": `360`,
            "aria-valuemin": `0`
        }, E.createElement(Ne, {
            className: `react-colorful__hue-pointer`,
            left: t / 360,
            color: Y({
                h: t,
                s: 100,
                v: 100,
                a: 1
            })
        })))
    }),
    Ve = E.memo(function(e) {
        var t = e.hsva,
            n = e.onChange,
            r = {
                backgroundColor: Y({
                    h: t.h,
                    s: 100,
                    v: 100,
                    a: 1
                })
            };
        return E.createElement(`div`, {
            className: `react-colorful__saturation`,
            style: r
        }, E.createElement(Me, {
            onMove: function(e) {
                n({
                    s: 100 * e.left,
                    v: 100 - 100 * e.top
                })
            },
            onKey: function(e) {
                n({
                    s: V(t.s + 100 * e.left, 0, 100),
                    v: V(t.v - 100 * e.top, 0, 100)
                })
            },
            "aria-label": `Color`,
            "aria-valuetext": `Saturation ` + q(t.s) + `%, Brightness ` + q(t.v) + `%`
        }, E.createElement(Ne, {
            className: `react-colorful__saturation-pointer`,
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: Y(t)
        })))
    }),
    He = function(e, t) {
        if (e === t) return !0;
        for (var n in e)
            if (e[n] !== t[n]) return !1;
        return !0
    },
    Ue = function(e, t) {
        return e.toLowerCase() === t.toLowerCase() || He(J(e), J(t))
    };

function We(e, t, n) {
    var r = B(n),
        i = (0, E.useState)(function() {
            return e.toHsva(t)
        }),
        a = i[0],
        o = i[1],
        s = (0, E.useRef)({
            color: t,
            hsva: a
        });
    return (0, E.useEffect)(function() {
        if (!e.equal(t, s.current.color)) {
            var n = e.toHsva(t);
            s.current = {
                hsva: n,
                color: t
            }, o(n)
        }
    }, [t, e]), (0, E.useEffect)(function() {
        var t;
        He(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
            hsva: a,
            color: t
        }, r(t))
    }, [a, e, r]), [a, (0, E.useCallback)(function(e) {
        o(function(t) {
            return Object.assign({}, t, e)
        })
    }, [])]
}
var Ge = typeof window < `u` ? E.useLayoutEffect : E.useEffect,
    Ke = function() {
        return typeof __webpack_nonce__ < `u` ? __webpack_nonce__ : void 0
    },
    qe = new Map,
    Je = function(e) {
        Ge(function() {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !qe.has(t)) {
                var n = t.createElement(`style`);
                n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, qe.set(t, n);
                var r = Ke();
                r && n.setAttribute(`nonce`, r), t.head.appendChild(n)
            }
        }, [])
    },
    Ye = function(e) {
        var t = e.className,
            n = e.colorModel,
            r = e.color,
            i = r === void 0 ? n.defaultColor : r,
            a = e.onChange,
            o = z(e, [`className`, `colorModel`, `color`, `onChange`]),
            s = (0, E.useRef)(null);
        Je(s);
        var c = We(n, i, a),
            l = c[0],
            u = c[1],
            d = K([`react-colorful`, t]);
        return E.createElement(`div`, R({}, o, {
            ref: s,
            className: d
        }), E.createElement(Ve, {
            hsva: l,
            onChange: u
        }), E.createElement(Be, {
            hue: l.h,
            onChange: u,
            className: `react-colorful__last-control`
        }))
    },
    Xe = {
        defaultColor: `000`,
        toHsva: Pe,
        fromHsva: function(e) {
            return Fe({
                h: e.h,
                s: e.s,
                v: e.v,
                a: 1
            })
        },
        equal: Ue
    },
    Ze = function(e) {
        return E.createElement(Ye, R({}, e, {
            colorModel: Xe
        }))
    },
    Qe = e => (0, D.jsx)($e, {
        children: (0, D.jsx)(Ze, {
            style: {
                width: `100%`
            },
            color: e.value,
            onChange: t => {
                e.onChange(t)
            }
        })
    }),
    $e = m.div.attrs({
        className: `maxWidth`
    })`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`,
    et = e => {
        let {
            category: t
        } = e, [n, r] = E.useState(!0), i = () => {
            r(e => !e)
        }, a = E.useMemo(() => {
            var n;
            return (n = t.options) != null && n.length ? t.options.find(t => t.name === e.value) || t.options[0] : void 0
        }, [t, e.value]), o = E.useMemo(() => {
            if (t.color) return t.color.defaultColor
        }, [t.color]), s = E.useMemo(() => {
            let e = t.name;
            return a ? `${e} - ${a.name}` : e
        }, [t, a]);
        return (0, D.jsxs)(tt, {
            children: [(0, D.jsxs)(nt, {
                onClick: i,
                children: [(0, D.jsx)(rt, {
                    children: s
                }), (0, D.jsx)(it, {
                    children: (0, D.jsx)(_, {
                        name: `fas fa-caret-${n?`up`:`down`}`
                    })
                })]
            }), n ? e.category.type === re.color ? (0, D.jsx)(Qe, {
                value: e.value ?? o,
                onChange: e.onChange
            }) : (0, D.jsx)(u, {
                direction: `horizontal`,
                size: 7,
                wrap: !0,
                children: t.options.map(n => (0, D.jsx)(ke, {
                    option: n,
                    selected: n.name === a.name,
                    select: () => {
                        F(), e.onChange(n.name)
                    }
                }, n.name + t.name))
            }) : null]
        })
    },
    tt = m.div.attrs({
        className: `maxWidth`
    })``,
    nt = m.div.attrs({
        className: `maxWidth flex vc between`
    })`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`,
    rt = m.div`
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`,
    it = m.div`
  font-size: 16px;
  opacity: 0.9;
`,
    at = e => (0, D.jsx)(`div`, {
        className: `maxWidth`,
        style: {
            marginTop: 17
        },
        children: (0, D.jsx)(u, {
            className: `maxWidth`,
            direction: `vertical`,
            size: 15,
            children: e.style.categories.map(t => (0, D.jsx)(et, {
                category: t,
                value: e.currentStyles[t.name],
                onChange: n => {
                    e.updateEditStyle(t.name, n)
                }
            }, t.name + `-category`))
        })
    }),
    Z = 25,
    ot = e => {
        let t = t => {
            let n = Math.max(1, Math.min(Z, t));
            e.setCount(n), I()
        };
        return (0, D.jsxs)(u, {
            size: 6,
            style: {
                marginTop: 10
            },
            children: [(0, D.jsx)(Q, {
                disabled: e.count === 1,
                onClick: () => {
                    t(e.count - 1)
                },
                children: `-1`
            }), (0, D.jsx)(Q, {
                disabled: e.count === Z,
                onClick: () => {
                    t(e.count + 1)
                },
                children: `+1`
            }), (0, D.jsx)(Q, {
                disabled: e.count === Z,
                onClick: () => {
                    t(e.count + 5)
                },
                children: `+5`
            })]
        })
    },
    Q = m.div`
  background: rgba(255, 255, 255, 0.1);
  opacity: ${e=>e.disabled?.5:1};
  padding: 6px 12px;
  line-height: 1;
  font-size: 11px;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  will-change: transform, background;
  user-select: none;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  ${e=>!e.disabled&&`&:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }`}
`,
    st = e => {
        let [t, r] = E.useState(!1), [i, s] = E.useState(e.count - 1), {
            closeSellScreen: c
        } = e, l = e.count - 1, u = e => {
            s(Math.max(1, Math.min(l, e))), I()
        };
        return (0, D.jsxs)(ct, {
            children: [(0, D.jsxs)(lt, {
                children: [(0, D.jsxs)(C, {
                    className: `maxWidth`,
                    style: {
                        gap: 6
                    },
                    children: [(0, D.jsx)(Q, {
                        disabled: i === 1,
                        onClick: () => {
                            u(i - 5)
                        },
                        children: `-5`
                    }), (0, D.jsx)(Q, {
                        disabled: i === 1,
                        onClick: () => {
                            u(i - 1)
                        },
                        children: `-1`
                    }), (0, D.jsx)(ut, {
                        children: a(i)
                    }), (0, D.jsx)(Q, {
                        disabled: i === l,
                        onClick: () => {
                            u(i + 1)
                        },
                        children: `+1`
                    }), (0, D.jsx)(Q, {
                        disabled: i === l,
                        onClick: () => {
                            u(i + 5)
                        },
                        children: `+5`
                    })]
                }), (0, D.jsxs)(dt, {
                    children: [(0, D.jsxs)(`span`, {
                        children: [`Selling `, a(i), ` `, (0, D.jsx)(`span`, {
                            style: {
                                fontWeight: g.Bold,
                                textDecoration: `underline`
                            },
                            children: e.name
                        }), ` `, `for`]
                    }), (0, D.jsx)(b, {
                        size: 12,
                        amount: e.sellCost * i
                    })]
                })]
            }), (0, D.jsx)(se, {
                type: `success`,
                customHorizontalPadding: 35,
                ariaLabel: `Sell`,
                onClick: () => {
                    t || (T({
                        path: v(`cosmos/sold.mp3`),
                        volume: .6
                    }), r(!0), o({
                        url: `/api/cosmos/sell`,
                        data: {
                            cosmeticId: e.id,
                            count: i
                        },
                        success: t => {
                            e.setSoldAmount(t.amount), k(), ie()
                        },
                        error: e => {
                            n({
                                e,
                                default: {
                                    title: `Error selling this item`,
                                    content: `Please try again later`
                                }
                            })
                        },
                        both: () => {
                            r(!1)
                        }
                    }))
                },
                style: {
                    marginTop: 20
                },
                children: (0, D.jsx)(`div`, {
                    style: {
                        fontFamily: p.FugazOne,
                        textTransform: `uppercase`,
                        fontSize: 16
                    },
                    children: `Sell`
                })
            }), (0, D.jsx)(Oe, {
                onClick: () => {
                    I(), c()
                },
                children: `Go back`
            })]
        })
    },
    ct = m(S).attrs({
        className: `maxWidth`
    })``,
    lt = m(S).attrs({
        className: `maxWidth`
    })`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`,
    ut = m.div`
  font-size: 24px;
  font-family: ${p.FugazOne};
  line-height: 1;
  border: 2px solid ${oe.Yellow};
  border-radius: 4px;
  padding: 10px 30px;
  padding-top: 13px;
  margin: 0px 10px;
  background: rgba(255, 255, 255, 0.05);
`,
    dt = m.div.attrs({
        className: `flex wrap`
    })`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`,
    ft = e => (0, D.jsx)(D.Fragment, {
        children: (0, D.jsxs)(mt, {
            children: [e.description ? (0, D.jsx)(pt, {
                icon: `fad fa-sparkles`,
                children: e.description
            }) : null, e.pack ? (0, D.jsxs)(pt, {
                icon: `fad fa-box`,
                style: {
                    marginTop: e.description ? 10 : 0
                },
                children: [`Part of the`, ` `, (0, D.jsx)(`span`, {
                    style: {
                        fontWeight: g.Bold,
                        color: `#ffecb3`
                    },
                    children: e.pack
                })]
            }) : null]
        })
    }),
    pt = e => (0, D.jsxs)(ht, {
        style: e.style,
        children: [(0, D.jsx)(`div`, {
            style: {
                marginRight: 15,
                flexShrink: 0
            },
            children: (0, D.jsx)(_, {
                name: e.icon
            })
        }), (0, D.jsx)(`div`, {
            children: e.children
        })]
    }),
    mt = m.div`
  margin-top: 19px;
`,
    ht = m(ae)`
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
m.div``;
var gt = e => {
        let [t, n] = E.useState(e.editStyles ?? {}), [r, i] = E.useState(!1), a = (e, r) => {
            n({
                ...t,
                [e]: r
            })
        }, o = () => r ? (0, D.jsx)(st, {
            ...e,
            setSoldAmount: e.setSoldAmount,
            closeSellScreen: () => {
                i(!1)
            }
        }) : (0, D.jsxs)(D.Fragment, {
            children: [e.description || e.pack ? (0, D.jsx)(ft, {
                ...e
            }) : null, e.style ? (0, D.jsx)(at, {
                style: e.style,
                currentStyles: t,
                updateEditStyle: a
            }) : null, (0, D.jsx)(L, {
                ...e,
                editStyles: t,
                setToSellScreen: () => {
                    i(!0)
                }
            })]
        });
        return (0, D.jsxs)(`div`, {
            className: `maxWidth`,
            children: [(0, D.jsx)(P, {
                ...e,
                editStyles: t
            }), (0, D.jsxs)($, {
                children: [(0, D.jsx)(Ce, {
                    ...e
                }), o()]
            })]
        })
    },
    $ = m.div`
  padding: 20px 20px 25px 20px;
`,
    _t = () => (0, D.jsx)(vt, {
        children: (0, D.jsx)(_, {
            name: `fas fa-times`
        })
    }),
    vt = m.div`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,
    yt = e(le()),
    bt = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: .87
    },
    xt = e => {
        let [t, n] = r(!1);
        return ee(n), (0, D.jsxs)(St, {
            children: [(0, D.jsx)(Ct, {
                children: e.name
            }), (0, D.jsx)(yt.default, {
                active: t,
                config: bt
            }), (0, D.jsx)(wt, {
                children: `Purchased!`
            })]
        })
    },
    St = m.div.attrs({
        className: `flex-center flex-column animated bounceIn`
    })`
  text-align: center;
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  animation-duration: 0.6s;
`,
    Ct = m.div`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`,
    wt = m.div`
  font-size: 48px;
  line-height: 1;
`,
    Tt = ({
        cosmeticId: e,
        cosmeticType: n,
        editStyles: r,
        onSuccess: i
    }) => {
        let a = {
            cosmeticId: e,
            cosmeticType: n
        };
        r && Object.keys(r).length > 0 && (a.editStyles = r), t({
            url: `/api/cosmos/select-cosmetic`,
            data: a,
            success: () => {
                ie(), i()
            }
        })
    },
    Et = e => {
        let t = e.type !== x.sticker;
        return (0, D.jsxs)(`div`, {
            className: `maxWidth`,
            children: [(0, D.jsx)(P, {
                ...e,
                editStyles: {}
            }), (0, D.jsxs)($, {
                className: `flex-center flex-column`,
                children: [(0, D.jsx)(xt, {
                    ...e
                }), (0, D.jsx)(L, {
                    ...e,
                    callToAction: () => {
                        let n = t ? `Equip` : `Close`;
                        return {
                            text: n,
                            ariaLabel: n,
                            onClick: () => {
                                F(), t ? Tt({
                                    cosmeticId: e.id,
                                    cosmeticType: e.type,
                                    onSuccess: () => {
                                        e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged(), e.close()
                                    }
                                }) : e.close()
                            }
                        }
                    }
                }), t ? (0, D.jsx)(Dt, {
                    onClick: e.close,
                    children: `Close`
                }) : null]
            })]
        })
    },
    Dt = m.div`
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
    Ot = e => (0, D.jsxs)(`div`, {
        className: `maxWidth`,
        children: [(0, D.jsx)(P, {
            ...e,
            editStyles: {}
        }), (0, D.jsxs)($, {
            className: `flex-center flex-column`,
            children: [(0, D.jsxs)(St, {
                children: [(0, D.jsx)(Ct, {
                    children: e.name
                }), (0, D.jsx)(wt, {
                    children: `Sold!`
                })]
            }), (0, D.jsx)(kt, {
                children: (0, D.jsxs)(At, {
                    children: [(0, D.jsx)(`span`, {
                        style: {
                            marginTop: 3,
                            marginRight: 8
                        },
                        children: `You earned`
                    }), (0, D.jsx)(b, {
                        size: 14,
                        amount: e.soldAmount
                    })]
                })
            }), (0, D.jsx)(L, {
                ...e,
                callToAction: () => {
                    let t = `Close`;
                    return {
                        text: t,
                        ariaLabel: t,
                        onClick: () => {
                            F(), e.close()
                        }
                    }
                }
            })]
        })]
    }),
    kt = m.div.attrs({
        className: `maxWidth flex-center`
    })`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  margin-top: 12px;
`,
    At = m.div.attrs({
        className: `flex`
    })``,
    jt = e => {
        let [t, n] = E.useState(0);
        return (0, D.jsx)(c, {
            theme: {
                token: {
                    colorText: h.White,
                    colorBgBase: `#453267`
                }
            },
            children: (0, D.jsx)(l, {
                open: e.open,
                onCancel: e.close,
                afterClose: e.afterClose,
                closeIcon: (0, D.jsx)(_t, {}),
                footer: null,
                styles: {
                    content: {
                        padding: 0,
                        borderRadius: 10,
                        overflow: `hidden`
                    }
                },
                children: t ? (0, D.jsx)(Ot, {
                    ...e,
                    soldAmount: t
                }) : e.purchased ? (0, D.jsx)(Et, {
                    ...e
                }) : (0, D.jsx)(gt, {
                    ...e,
                    setSoldAmount: n
                })
            })
        })
    },
    Mt = e => {
        let [t, n] = E.useState(!0), {
            open: r,
            close: i
        } = e;
        E.useEffect(() => {
            e.open && n(!1)
        }, [r]);
        let a = () => {
            n(!0)
        };
        return !r && t ? null : (0, D.jsx)(jt, {
            ...e,
            open: r,
            close: i,
            afterClose: a
        })
    };
export {
    I as a, me as c, de as d, k as f, F as i, pe as l, Tt as n, Se as o, ue as p, ot as r, he as s, Mt as t, fe as u
};