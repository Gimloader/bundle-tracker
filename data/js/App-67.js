import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./select.js";
import {
    t as r
} from "./space.js";
import {
    t as i
} from "./typography.js";
import {
    r as a
} from "./SixteenByNineScaler.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    c as s,
    l as c,
    n as l,
    s as u,
    y as d
} from "./_index.js";
import {
    r as f
} from "./mobxreact.esm.js";
import {
    t as p
} from "./FontAwesomeIcon.js";
import {
    n as m,
    t as h
} from "./Centered.js";
import {
    n as g
} from "./Button-2.js";
import {
    t as _
} from "./phaser.js";
import {
    f as v,
    g as y,
    p as b,
    t as x,
    y as S
} from "./stores-2.js";
import {
    t as C
} from "./useStore.js";
import {
    r as w,
    t as T
} from "./setCurrentAction.js";
import {
    n as E
} from "./TutorialConsts.js";
import {
    t as D
} from "./CapitalizeFirstLetter.js";
import {
    t as O
} from "./KeyShortcuts.js";
import {
    t as k
} from "./createKeyListener.js";
import {
    L as A,
    j,
    ot as M
} from "./App-42.js";
import {
    t as N
} from "./FetchDeviceName.js";
import {
    t as P
} from "./ReactionToMultipleProps.js";
import {
    t as F
} from "./TerrainLayerNames.js";
import {
    Container as I,
    Content as L
} from "./App-57.js";
var R = e(t()),
    z = () => {
        let {
            me: {
                removing: {
                    tilesToRemove: e,
                    deviceIdToRemove: t,
                    wireIdToRemove: n
                }
            }
        } = x, r, i, a;
        if (e.length) {
            if (r = D(j.terrain.singular), i = `Unknown ${r}`, e.length === 1) {
                let t = x.world.terrain.tiles.get(e[0].id);
                if (t) {
                    let e = x.worldOptions.terrainOptions.find(e => e.id === t.terrain);
                    e && (i = e.name), a = t.collides ? `Wall` : `Floor`
                }
            } else i = `Multiple ${D(j.terrain.singular)} Pieces`
        }
        if (t) {
            r = D(j.device.singular), i = `Unknown ${r}`;
            let e = x.world.devices.devices.get(t);
            e && (e.deviceOption.id === E.prop && (r = D(j.prop.singular), i = `Unknown ${r}`), i = N(t))
        }
        return n && (r = D(j.wire.singular), i = r), !r || !i ? null : {
            type: r,
            name: i,
            description: a
        }
    },
    B = () => {
        let [e, t] = R.useState(!1), [n, r] = R.useState(``), [i, a] = R.useState(``), [o, s] = R.useState(``);
        return R.useEffect(() => {
            let e = P([() => x.me.removing.tilesToRemove, () => x.me.removing.deviceIdToRemove, () => x.me.removing.wireIdToRemove], () => {
                let e = z();
                e ? (r(e.type), a(e.name), s(e.description || ``), t(!0)) : t(!1)
            }, {
                fireImmediately: !0
            });
            return () => e()
        }, []), e ? {
            type: n,
            name: i,
            description: o
        } : null
    },
    V = e(_()),
    H = o(),
    U = 99,
    W = 100,
    G = f(() => {
        let {
            me: {
                removing: e
            }
        } = C(), t = R.useRef(), i = R.useRef(), o = R.useRef(), s = () => {
            var e, n, r, a, s, c;
            t == null || (e = t.current) == null || (n = e.blur) == null || n.call(e), i == null || (r = i.current) == null || (a = r.blur) == null || a.call(r), o == null || (s = o.current) == null || (c = s.blur) == null || c.call(s)
        }, c = e => {
            let t = e === v.propsAndDevices ? `${D(j.prop.plural)} & ${D(j.device.plural)}` : e === v.tiles ? D(j.terrain.singular) : e === v.wires ? D(j.wire.plural) : e;
            return (0, H.jsx)(n.Option, {
                value: e,
                children: t
            }, `remove-options-mode-${e}`)
        }, l = (e, t) => {
            if (e === b.allLayers) return (0, H.jsx)(n.Option, {
                ref: i,
                value: U,
                children: e
            }, `remove-tiles-mode-${e}`);
            if (e === b.topLayer) return (0, H.jsx)(n.Option, {
                value: W,
                children: e
            }, `remove-tiles-mode-${e}`);
            let r = `${e}-${t}`;
            return (0, H.jsx)(n.Option, {
                value: t,
                children: t + ` - ` + F[t - 1] || `Layer`
            }, `remove-tiles-mode-${r}`)
        }, u = e => (0, H.jsx)(n.Option, {
            value: e,
            children: e
        }, `remove-tiles-eraser-size-${e}`);
        return (0, H.jsx)(a, {
            className: `maxWidth`,
            children: (0, H.jsxs)(r, {
                className: `maxWidth`,
                direction: `vertical`,
                size: 13,
                children: [(0, H.jsxs)(K, {
                    children: [(0, H.jsx)(q, {
                        children: `Eraser Mode:`
                    }), (0, H.jsxs)(n, {
                        ref: t,
                        style: {
                            width: 200
                        },
                        value: e.removingMode,
                        onChange: t => {
                            e.removingMode = t, s()
                        },
                        children: [c(v.everything), c(v.tiles), c(v.propsAndDevices), c(v.wires)]
                    })]
                }), e.removingMode === v.tiles ? (0, H.jsxs)(K, {
                    children: [(0, H.jsx)(q, {
                        children: `Layer:`
                    }), (0, H.jsxs)(n, {
                        ref: i,
                        style: {
                            width: 200
                        },
                        value: e.removingTilesMode === b.allLayers ? U : e.removingTilesMode === b.topLayer ? W : e.removingTilesLayer,
                        onChange: t => {
                            t === U ? e.removingTilesMode = b.allLayers : t === W ? e.removingTilesMode = b.topLayer : (e.removingTilesMode = b.layer, e.removingTilesLayer = t), s()
                        },
                        children: [l(b.topLayer), l(b.allLayers), Array.from([, , , , , ].keys()).map(e => l(b.layer, e + 1))]
                    })]
                }) : null, e.removingMode === v.tiles ? (0, H.jsxs)(K, {
                    children: [(0, H.jsx)(q, {
                        children: `Eraser Size:`
                    }), (0, H.jsx)(n, {
                        ref: o,
                        style: {
                            width: 200
                        },
                        value: e.removingTilesEraserSize,
                        onChange: t => {
                            e.removingTilesEraserSize = t, s()
                        },
                        children: Array.from([, , , ].keys()).map(e => u(e + 1))
                    })]
                }) : null]
            })
        })
    }),
    K = c.div.attrs({
        className: `maxWidth vc between flex`
    })``,
    q = e => (0, H.jsx)(i.Text, {
        style: {
            fontWeight: u.Bold,
            color: g.White
        },
        children: e.children
    }),
    J = () => (0, H.jsxs)(Y, {
        children: [(0, H.jsx)(X, {
            children: (0, H.jsx)(p, {
                name: `fas fa-eraser`
            })
        }), (0, H.jsx)(`div`, {
            children: (0, H.jsx)(i.Text, {
                style: {
                    color: l.White
                },
                children: `Hover over anything and click to erase it!`
            })
        })]
    }),
    Y = c(m)``,
    X = c.div`
  font-size: 24px;
  color: ${l.White};
`,
    Z = e => {
        let {
            removalInfo: {
                type: t,
                name: n,
                description: r
            }
        } = e;
        return (0, H.jsxs)(Q, {
            children: [(0, H.jsx)($, {
                style: r ? {
                    marginBottom: 10
                } : void 0,
                children: (0, H.jsx)(i.Text, {
                    italic: !0,
                    children: t
                })
            }), (0, H.jsx)(`div`, {
                children: (0, H.jsx)(i.Title, {
                    style: {
                        color: l.White
                    },
                    level: 4,
                    children: n
                })
            }), r ? (0, H.jsx)(`div`, {
                children: (0, H.jsx)(i.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: r
                })
            }) : null]
        })
    },
    Q = c(m).attrs({
        className: `maxAll`
    })``,
    $ = c.div``,
    ee = f(() => {
        let e = B(),
            t = () => {
                T(S.none)
            };
        R.useEffect(() => {
            let e = k(O.Removing.SwitchToAddingMode(), () => {
                x.me.adding.mode = y.terrain, T(S.adding)
            });
            return () => {
                e()
            }
        }, []);
        let n = w();
        return R.useEffect(() => {
            n || t()
        }, [n, t]), M(V.default.Input.Keyboard.KeyCodes.ESC, t, [t]), (0, H.jsx)(I, {
            children: (0, H.jsxs)(L, {
                style: {
                    paddingTop: 53
                },
                children: [(0, H.jsx)(A, {
                    onClick: t,
                    padding: 20,
                    fontSize: 20
                }), (0, H.jsx)(i.Title, {
                    level: 2,
                    style: {
                        fontFamily: s.FugazOne,
                        textTransform: `uppercase`,
                        color: g.White
                    },
                    children: `Eraser`
                }), (0, H.jsx)(te, {
                    children: e ? (0, H.jsx)(Z, {
                        removalInfo: e
                    }) : (0, H.jsx)(J, {})
                }), (0, H.jsx)(d, {
                    style: {
                        borderTopColor: `rgba(255,255,255,0.25)`
                    }
                }), (0, H.jsx)(G, {})]
            })
        })
    }),
    te = c(h).attrs({
        className: `maxWidth`
    })`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`;
export {
    ee as
    default
};