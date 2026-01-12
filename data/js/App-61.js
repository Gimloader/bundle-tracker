import {
    r as p,
    j as r,
    d as j,
    F as I,
    e as A,
    U as W,
    D as N
} from "./_index.js";
import {
    o as b
} from "./mobxreact.esm.js";
import {
    C as O
} from "./Button.js";
import {
    s as h,
    R as d,
    q as l,
    P as k,
    A as D,
    M as E
} from "./FixSpinePlugin.js";
import {
    F as z
} from "./FetchDeviceName.js";
import {
    C as u
} from "./CapitalizeFirstLetter.js";
import {
    M as v,
    u as P,
    c as U,
    K,
    a as _,
    o as Y,
    q as B,
    s as $
} from "./App-41.js";
import {
    D as q
} from "./TutorialConsts.js";
import {
    R as H
} from "./ReactionToMultipleProps.js";
import {
    S as V
} from "./SixteenByNineScaler.js";
import {
    T as G
} from "./TerrainLayerNames.js";
import {
    S as J
} from "./index-2.js";
import {
    S as f
} from "./index-8.js";
import {
    T as y
} from "./index-14.js";
import {
    Container as Q,
    Content as X
} from "./App-50.js";
import {
    a as F,
    C as Z
} from "./Centered.js";
import {
    F as ee
} from "./FontAwesomeIcon.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./index-4.js";
import "./motion.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./index-1.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./index-3.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./index-20.js";
import "./index-22.js";
import "./DownOutlined.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
import "./ReplaceDevice.js";
const re = () => {
        const {
            me: {
                removing: {
                    tilesToRemove: t,
                    deviceIdToRemove: i,
                    wireIdToRemove: n
                }
            }
        } = h;
        let o, s, c;
        if (t.length)
            if (o = u(v.terrain.singular), s = `Unknown ${o}`, t.length === 1) {
                const m = h.world.terrain.tiles.get(t[0].id);
                if (m) {
                    const g = h.worldOptions.terrainOptions.find(e => e.id === m.terrain);
                    g && (s = g.name), c = m.collides ? "Wall" : "Floor"
                }
            } else s = `Multiple ${u(v.terrain.singular)} Pieces`;
        if (i) {
            o = u(v.device.singular), s = `Unknown ${o}`;
            const m = h.world.devices.devices.get(i);
            m && (m.deviceOption.id === q.prop && (o = u(v.prop.singular), s = `Unknown ${o}`), s = z(i))
        }
        return n && (o = u(v.wire.singular), s = o), !o || !s ? null : {
            type: o,
            name: s,
            description: c
        }
    },
    te = () => {
        const [t, i] = p.useState(!1), [n, o] = p.useState(""), [s, c] = p.useState(""), [m, g] = p.useState("");
        return p.useEffect(() => {
            const e = H([() => h.me.removing.tilesToRemove, () => h.me.removing.deviceIdToRemove, () => h.me.removing.wireIdToRemove], () => {
                const a = re();
                a ? (o(a.type), c(a.name), g(a.description || ""), i(!0)) : i(!1)
            }, {
                fireImmediately: !0
            });
            return () => e()
        }, []), t ? {
            type: n,
            name: s,
            description: m
        } : null
    },
    C = 99,
    R = 100,
    oe = b(() => {
        const {
            me: {
                removing: t
            }
        } = P(), i = p.useRef(), n = p.useRef(), o = p.useRef(), s = () => {
            var e, a, x, S, T, w;
            (a = (e = i == null ? void 0 : i.current) == null ? void 0 : e.blur) == null || a.call(e), (S = (x = n == null ? void 0 : n.current) == null ? void 0 : x.blur) == null || S.call(x), (w = (T = o == null ? void 0 : o.current) == null ? void 0 : T.blur) == null || w.call(T)
        }, c = e => {
            const a = e === d.propsAndDevices ? `${u(v.prop.plural)} & ${u(v.device.plural)}` : e === d.tiles ? u(v.terrain.singular) : e === d.wires ? u(v.wire.plural) : e;
            return r.jsx(f.Option, {
                value: e,
                children: a
            }, `remove-options-mode-${e}`)
        }, m = (e, a) => {
            if (e === l.allLayers) return r.jsx(f.Option, {
                ref: n,
                value: C,
                children: e
            }, `remove-tiles-mode-${e}`);
            if (e === l.topLayer) return r.jsx(f.Option, {
                value: R,
                children: e
            }, `remove-tiles-mode-${e}`);
            const x = `${e}-${a}`;
            return r.jsx(f.Option, {
                value: a,
                children: a + " - " + G[a - 1] || "Layer"
            }, `remove-tiles-mode-${x}`)
        }, g = e => r.jsx(f.Option, {
            value: e,
            children: e
        }, `remove-tiles-eraser-size-${e}`);
        return r.jsx(V, {
            className: "maxWidth",
            children: r.jsxs(J, {
                className: "maxWidth",
                direction: "vertical",
                size: 13,
                children: [r.jsxs(L, {
                    children: [r.jsx(M, {
                        children: "Eraser Mode:"
                    }), r.jsxs(f, {
                        ref: i,
                        style: {
                            width: 200
                        },
                        value: t.removingMode,
                        onChange: e => {
                            t.removingMode = e, s()
                        },
                        children: [c(d.everything), c(d.tiles), c(d.propsAndDevices), c(d.wires)]
                    })]
                }), t.removingMode === d.tiles ? r.jsxs(L, {
                    children: [r.jsx(M, {
                        children: "Layer:"
                    }), r.jsxs(f, {
                        ref: n,
                        style: {
                            width: 200
                        },
                        value: t.removingTilesMode === l.allLayers ? C : t.removingTilesMode === l.topLayer ? R : t.removingTilesLayer,
                        onChange: e => {
                            e === C ? t.removingTilesMode = l.allLayers : e === R ? t.removingTilesMode = l.topLayer : (t.removingTilesMode = l.layer, t.removingTilesLayer = e), s()
                        },
                        children: [m(l.topLayer), m(l.allLayers), Array.from(Array(5).keys()).map(e => m(l.layer, e + 1))]
                    })]
                }) : null, t.removingMode === d.tiles ? r.jsxs(L, {
                    children: [r.jsx(M, {
                        children: "Eraser Size:"
                    }), r.jsx(f, {
                        ref: o,
                        style: {
                            width: 200
                        },
                        value: t.removingTilesEraserSize,
                        onChange: e => {
                            t.removingTilesEraserSize = e, s()
                        },
                        children: Array.from(Array(3).keys()).map(e => g(e + 1))
                    })]
                }) : null]
            })
        })
    }),
    L = j.div.attrs({
        className: "maxWidth vc between flex"
    })``,
    M = t => r.jsx(y.Text, {
        style: {
            fontWeight: I.Bold,
            color: O.White
        },
        children: t.children
    }),
    ie = () => r.jsxs(se, {
        children: [r.jsx(ne, {
            children: r.jsx(ee, {
                name: "fas fa-eraser"
            })
        }), r.jsx("div", {
            children: r.jsx(y.Text, {
                style: {
                    color: A.White
                },
                children: "Hover over anything and click to erase it!"
            })
        })]
    }),
    se = j(F)``,
    ne = j.div`
  font-size: 24px;
  color: ${A.White};
`,
    ae = t => {
        const {
            removalInfo: {
                type: i,
                name: n,
                description: o
            }
        } = t;
        return r.jsxs(me, {
            children: [r.jsx(le, {
                style: o ? {
                    marginBottom: 10
                } : void 0,
                children: r.jsx(y.Text, {
                    italic: !0,
                    children: i
                })
            }), r.jsx("div", {
                children: r.jsx(y.Title, {
                    style: {
                        color: A.White
                    },
                    level: 4,
                    children: n
                })
            }), o ? r.jsx("div", {
                children: r.jsx(y.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: o
                })
            }) : null]
        })
    },
    me = j(F).attrs({
        className: "maxAll"
    })``,
    le = j.div``,
    Ir = b(() => {
        const t = te(),
            i = () => {
                $(E.none)
            };
        p.useEffect(() => {
            const o = U(K.Removing.SwitchToAddingMode(), () => {
                h.me.adding.mode = D.terrain, $(E.adding)
            });
            return () => {
                o()
            }
        }, []);
        const n = _();
        return p.useEffect(() => {
            n || i()
        }, [n, i]), Y(k.Input.Keyboard.KeyCodes.ESC, i, [i]), r.jsx(Q, {
            children: r.jsxs(X, {
                style: {
                    paddingTop: 53
                },
                children: [r.jsx(B, {
                    onClick: i,
                    padding: 20,
                    fontSize: 20
                }), r.jsx(y.Title, {
                    level: 2,
                    style: {
                        fontFamily: W.FugazOne,
                        textTransform: "uppercase",
                        color: O.White
                    },
                    children: "Eraser"
                }), r.jsx(pe, {
                    children: t ? r.jsx(ae, {
                        removalInfo: t
                    }) : r.jsx(ie, {})
                }), r.jsx(N, {
                    style: {
                        borderTopColor: "rgba(255,255,255,0.25)"
                    }
                }), r.jsx(oe, {})]
            })
        })
    }),
    pe = j(Z).attrs({
        className: "maxWidth"
    })`
  margin-top: 10px;
  padding: 20px;
  min-height: 190px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 2px dashed rgba(255, 255, 255, 0.5);
`;
export {
    Ir as
    default
};