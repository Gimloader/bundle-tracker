import {
    r as h,
    j as i,
    U as B,
    F as Y,
    B as I,
    d as l,
    aq as q,
    w as se
} from "./_index.js";
import {
    o as O
} from "./mobxreact.esm.js";
import {
    C as E
} from "./Button.js";
import {
    M as L,
    N as Z,
    c as D,
    s as r,
    E as M,
    a as $,
    T as _,
    K as ae,
    P as de
} from "./FixSpinePlugin.js";
import {
    u as K,
    c as p,
    a as ce,
    s as k,
    K as g,
    i as x,
    F as ee,
    O as v,
    M as d,
    b as y,
    C as le,
    d as me,
    e as ue,
    f as pe,
    g as ge,
    h as H,
    j as ye,
    k as he,
    I as ie,
    l as fe,
    m as ve,
    n as xe,
    o as Te
} from "./App-41.js";
import {
    D as P
} from "./TutorialConsts.js";
import {
    C as w
} from "./CapitalizeFirstLetter.js";
import {
    F as R
} from "./FetchDeviceName.js";
import {
    s as Ce
} from "./setAddMenuScreen.js";
import {
    R as Se
} from "./ReactionToMultipleProps.js";
import {
    F as Ae
} from "./FontAwesomeIcon.js";
import {
    T as f
} from "./index-14.js";
import {
    S as te
} from "./SixteenByNineScaler.js";
import {
    T as je
} from "./TerrainLayerNames.js";
import {
    S as V
} from "./index-2.js";
import {
    S as b
} from "./index-8.js";
import {
    a as Me,
    C as re
} from "./Centered.js";
import {
    m as $e
} from "./motion.js";
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
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
import "./index-20.js";
import "./index-22.js";
import "./DownOutlined.js";
const be = e => {
        const {
            me: t,
            gui: n
        } = K();
        h.useEffect(() => {
            const s = p(g.Adding.SwitchToRemoveMode(), () => {
                    ce() && k(L.removing)
                }),
                c = p(g.Adding.GoBack(), () => {
                    k(L.none), n.none.screen = Z.add
                }),
                a = p(g.Adding.Terrain.TogglePiece(), () => {
                    if (x()) {
                        if (D()) return;
                        t.adding.terrain.buildTerrainAsWall = !t.adding.terrain.buildTerrainAsWall
                    }
                }),
                u = p(g.Adding.Terrain.BrushSize.One(), () => {
                    x() && (t.adding.terrain.brushSize = 1)
                }),
                o = p(g.Adding.Terrain.BrushSize.Two(), () => {
                    x() && (t.adding.terrain.brushSize = 2)
                }),
                m = p(g.Adding.Terrain.BrushSize.Three(), () => {
                    x() && (t.adding.terrain.brushSize = 3)
                }),
                W = p(g.Adding.Terrain.BrushSize.Four(), () => {
                    x() && (t.adding.terrain.brushSize = 4)
                }),
                S = p(g.Adding.ToggleShow(), () => {
                    e.setShow(A => !A)
                });
            return () => {
                s(), c(), a(), u(), o(), m(), W(), S()
            }
        }, [])
    },
    ne = e => {
        var s;
        const t = r.memorySystem.counters.devices.get(e.deviceTypeId) ?? 0,
            n = ((s = ee(e.deviceTypeId)) == null ? void 0 : s.maxOnMap) ?? r.memorySystem.limits.deviceMaxOnMapDefault;
        return {
            current: t,
            max: n
        }
    },
    J = e => {
        if (e.reason === v.limit) {
            const n = ne({
                deviceTypeId: e.deviceTypeId
            });
            return `Reached placement limit for this ${d.device.singular} (${n.current}/${n.max})`
        }
        let t = d.device.singular;
        return e.deviceTypeId === P.prop && (t = d.prop.singular), e.reason === v.noMemory ? `Not enough ${y} available to place this ${t}` : ""
    },
    De = e => {
        var t;
        if (e.reason === v.limit) {
            const n = (t = ee(e.limitReachedDeviceTypeId)) == null ? void 0 : t.name,
                s = ne({
                    deviceTypeId: e.limitReachedDeviceTypeId
                });
            return `Cannot add additional ${n} ${d.device.plural}. Used ${s.current}/${s.max}.`
        }
        return e.reason === v.noMemory ? `Not enough memory to copy. Requires ${e.totalCost}, used ${r.memorySystem.usedMemoryCost}/${r.memorySystem.maxUsedMemory}` : ""
    },
    we = e => {
        const t = e.colliding ? r.memorySystem.counters.collidingTiles : r.memorySystem.counters.nonCollidingTiles,
            n = e.colliding ? r.memorySystem.limits.collidingTiles : r.memorySystem.limits.nonCollidingTiles,
            s = e.colliding ? "wall" : "floor",
            a = (e.colliding ? r.memorySystem.costs.collidingTile : r.memorySystem.costs.nonCollidingTile) * e.count;
        return e.reason === v.limit ? `Can't add ${e.count} more ${s} ${d.terrain.singular}. Used ${t}/${n}` : e.reason === v.noMemory ? `Not enough ${y} to add ${e.count} ${s} ${d.terrain.singular}. Requires ${a} ${y}.` : ""
    },
    Oe = e => {
        const t = r.memorySystem.counters.wires,
            n = r.memorySystem.limits.wires;
        if (e.reason === v.limit) return `Can't add more wires. Used ${t}/${n}`;
        const s = r.memorySystem.costs.wire;
        return e.reason === v.noMemory ? `Not enough memory to add wire. Requires ${s}, used ${r.memorySystem.usedMemoryCost}/${r.memorySystem.maxUsedMemory}` : ""
    },
    Q = () => {
        var e;
        if (x()) {
            const t = r.worldOptions.terrainOptions.find(a => a.id === r.me.adding.terrain.currentlySelectedTerrain),
                n = le({
                    colliding: r.me.adding.terrain.buildTerrainAsWall,
                    count: r.me.adding.terrain.brushSize * r.me.adding.terrain.brushSize
                }),
                s = we({
                    reason: n.reason,
                    colliding: r.me.adding.terrain.buildTerrainAsWall,
                    count: r.me.adding.terrain.brushSize * r.me.adding.terrain.brushSize
                }),
                c = r.me.adding.terrain.buildTerrainAsWall ? r.memorySystem.costs.collidingTile : r.memorySystem.costs.nonCollidingTile;
            return {
                tagline: "Adding",
                title: `${(t==null?void 0:t.name)||"Terrain"}`,
                memoryCost: `+${c} ${y} per tile`,
                notAllowedToAddMessage: s
            }
        }
        if (me()) {
            if (ue()) {
                if (r.me.editing.device.usingMultiselect) {
                    const o = pe(),
                        m = De(o),
                        W = r.me.adding.devices.existingDevice.action === M.copy,
                        S = $().actionManager.multiselect.movedOrCopiedDevices,
                        A = $().actionManager.multiselect.movedOrCopiedDevices.filter(T => T.deviceOption.id === P.prop),
                        oe = A.length > 0,
                        U = $().actionManager.multiselect.movedOrCopiedDevices.length === A.length;
                    let j = `Multiple ${d.device.plural}`;
                    if (oe && !U ? j = `Multiple ${d.device.plural}/${d.prop.plural}` : U && (j = `Multiple ${d.prop.plural}`), S.length === 1) {
                        const T = S[0],
                            G = R(T == null ? void 0 : T.id);
                        G && (j = G)
                    }
                    return {
                        tagline: W ? "Copying" : "Moving",
                        title: j,
                        memoryCost: o.totalCost ? `+${o.totalCost} ${y}` : void 0,
                        notAllowedToAddMessage: m
                    }
                }
                const t = $().worldManager.devices.getDeviceById(r.me.adding.devices.existingDevice.id),
                    n = r.worldOptions.deviceOptions.find(o => {
                        var m;
                        return o.id === ((m = t == null ? void 0 : t.deviceOption) == null ? void 0 : m.id)
                    }),
                    s = r.me.adding.devices.existingDevice.action === M.copy,
                    c = ge({
                        deviceId: (e = H()) == null ? void 0 : e.id
                    });
                let a = "Device";
                if (n) {
                    const o = R(t.id);
                    o && (a = o)
                }
                if (!n) return {
                    tagline: s ? "Copying" : "Moving",
                    title: w(d.device.singular)
                };
                let u = "";
                if (c.memoryCost && (u = `+${c.memoryCost} ${y}`), !c.canCopy && s) {
                    const o = J({
                        reason: c.reason,
                        deviceTypeId: n.id,
                        deviceId: H().id
                    });
                    return {
                        tagline: "Copying",
                        title: a,
                        memoryCost: u,
                        notAllowedToAddMessage: o
                    }
                }
                return {
                    tagline: r.me.adding.devices.existingDevice.action === M.cut ? "Moving" : "Copying",
                    title: a,
                    memoryCost: r.me.adding.devices.existingDevice.action === M.cut ? void 0 : u
                }
            }
            if (r.me.adding.devices.selectedDeviceType) {
                const t = r.worldOptions.deviceOptions.find(a => a.id === r.me.adding.devices.selectedDeviceType),
                    n = ye({
                        deviceTypeId: t.id
                    }),
                    s = J({
                        deviceTypeId: t.id,
                        reason: n.reason
                    });
                let c = t.name;
                if (t.id === P.prop && r.me.adding.devices.currentlySelectedProp) {
                    const a = he(r.me.adding.devices.currentlySelectedProp);
                    a != null && a.name && (c = a.name)
                }
                return {
                    tagline: "Adding",
                    title: c || w(d.device.singular),
                    memoryCost: n.memoryCost ? `+${n.memoryCost} ${y}` : void 0,
                    notAllowedToAddMessage: s
                }
            }
        }
        if (ie()) {
            const t = fe(),
                n = Oe({
                    reason: t.reason
                });
            return {
                tagline: "Adding",
                title: w(d.wire.singular),
                memoryCost: `+${r.memorySystem.costs.wire} ${y}`,
                notAllowedToAddMessage: n
            }
        }
        return {
            tagline: "Adding",
            title: "Unknown Entity"
        }
    },
    We = e => {
        const t = e.addingInfo;
        return i.jsxs("div", {
            children: [i.jsxs(f.Text, {
                style: {
                    fontFamily: B.FugazOne
                },
                className: "allCaps",
                children: [t.tagline, ":"]
            }), i.jsx(f.Title, {
                level: 2,
                style: {
                    fontFamily: B.FugazOne,
                    color: E.White,
                    marginTop: 2
                },
                className: "allCaps",
                children: t.title
            }), t.memoryCost ? i.jsx(f.Text, {
                style: {
                    marginTop: 5
                },
                children: t.memoryCost
            }) : null]
        })
    },
    Ie = O(() => {
        const {
            me: {
                adding: {
                    terrain: e
                }
            }
        } = K(), t = h.useRef(), n = h.useRef(), s = e.buildTerrainAsWall, c = () => {
            D() || (e.buildTerrainAsWall = !1)
        }, a = () => {
            D() || (e.buildTerrainAsWall = !0)
        };
        return i.jsx(te, {
            children: i.jsx(ze, {
                children: i.jsxs(V, {
                    direction: "vertical",
                    size: 10,
                    children: [i.jsxs(V, {
                        size: 10,
                        children: [i.jsxs(z, {
                            children: [i.jsx(F, {
                                children: i.jsx(f.Text, {
                                    style: N,
                                    children: "Layer"
                                })
                            }), i.jsx(C, {
                                children: i.jsx(b, {
                                    ref: t,
                                    style: {
                                        width: 150
                                    },
                                    value: e.currentlySelectedTerrainDepth,
                                    onChange: u => {
                                        var o, m;
                                        e.currentlySelectedTerrainDepth = u, (m = (o = t == null ? void 0 : t.current) == null ? void 0 : o.blur) == null || m.call(o)
                                    },
                                    children: new Array(_.maxDepth - _.minDepth + 1).fill(0).map((u, o) => i.jsxs(b.Option, {
                                        value: o + 1,
                                        children: [o + 1, " - ", je[o] || "Layer"]
                                    }, `terrain-layer-${o}`))
                                })
                            })]
                        }), i.jsxs(z, {
                            children: [i.jsx(F, {
                                children: i.jsx(f.Text, {
                                    style: N,
                                    children: "Brush Size"
                                })
                            }), i.jsx(C, {
                                children: i.jsx(b, {
                                    ref: n,
                                    style: {
                                        width: 100
                                    },
                                    value: e.brushSize,
                                    onChange: u => {
                                        var o, m;
                                        e.brushSize = u, (m = (o = n == null ? void 0 : n.current) == null ? void 0 : o.blur) == null || m.call(o)
                                    },
                                    children: new Array(4).fill(0).map((u, o) => i.jsx(b.Option, {
                                        value: o + 1,
                                        children: o + 1
                                    }, `terrain-brush-size-${o}`))
                                })
                            })]
                        })]
                    }), D() ? null : i.jsxs(z, {
                        children: [i.jsx(F, {
                            children: i.jsxs(f.Text, {
                                style: N,
                                children: [w(d.terrain.singular), " ", "Type"]
                            })
                        }), i.jsx(C, {
                            children: i.jsxs(I.Group, {
                                style: {
                                    width: "100%"
                                },
                                children: [i.jsx(I, {
                                    type: s ? "default" : "primary",
                                    onClick: c,
                                    block: !0,
                                    children: "Floor"
                                }), i.jsx(I, {
                                    type: s ? "primary" : "default",
                                    onClick: a,
                                    block: !0,
                                    children: "Wall"
                                })]
                            })
                        })]
                    })]
                })
            })
        })
    }),
    ze = l.div``,
    C = l.div.attrs({
        className: "maxWidth"
    })``,
    z = l(C)``,
    F = l(C)`
  margin-bottom: 4px;
`,
    N = {
        fontWeight: Y.Bold,
        fontStyle: "italic"
    },
    Fe = () => x() ? i.jsx(Ie, {}) : i.jsx("div", {}),
    Ne = O(() => {
        const {
            me: {
                adding: {
                    wires: e
                },
                context: {
                    __devicesUnderCursor: t
                }
            }
        } = K(), n = h.useMemo(() => e.hoveringOverSupportedDevice ? t[0] ? R(t[0]) ?? q(d.device.singular) : q(d.device.singular) : `Select a ${d.device.singular} or ${d.prop.singular} to ${e.startDeviceSelected?"complete":"start"} the ${d.wire.singular}`, [e.hoveringOverSupportedDevice, t, e.startDeviceSelected]);
        return i.jsxs(Me, {
            className: "maxWidth",
            children: [i.jsx(Be, {
                children: i.jsx(f.Text, {
                    italic: !0,
                    children: n
                })
            }), i.jsxs(Le, {
                children: [i.jsx(X, {
                    selected: !e.startDeviceSelected,
                    children: "Out"
                }), i.jsx(ke, {}), i.jsx(X, {
                    selected: e.startDeviceSelected,
                    children: "In"
                })]
            })]
        })
    }),
    Be = l.div``,
    Le = l(re).attrs({
        className: "maxWidth"
    })``,
    X = e => i.jsx(re, {
        style: {
            height: 50,
            width: 50,
            color: E.White,
            fontFamily: B.FugazOne,
            textTransform: "uppercase",
            lineHeight: 1,
            fontSize: 10,
            background: "rgba(255,255,255,0.15)",
            border: `${e.selected?3:0}px solid #ffca28`,
            flexShrink: 0,
            borderRadius: "50%"
        },
        children: e.children
    }),
    ke = l.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
`,
    Pe = O(() => ie() ? i.jsx(Ne, {}) : null),
    Re = e => i.jsxs(Ee, {
        children: [i.jsxs(Ke, {
            children: [i.jsx(We, {
                addingInfo: e.addingInfo
            }), i.jsx(Fe, {})]
        }), i.jsx(Pe, {})]
    }),
    Ee = l.div`
  padding: 25px;
`,
    Ke = l.div.attrs({
        className: "flex between vc"
    })``,
    yt = O(() => {
        const [e, t] = h.useState(!0), [n, s] = h.useState(Q());
        h.useEffect(() => Se([() => r.memorySystem.usedMemoryCost, () => r.me.adding.terrain.brushSize, () => r.me.adding.terrain.buildTerrainAsWall, () => r.memorySystem.counters.collidingTiles, () => r.memorySystem.counters.nonCollidingTiles, () => r.memorySystem.counters.wires, () => r.memorySystem.counters.codeGrids], () => {
            s(Q())
        }, {
            fireImmediately: !0
        }), []), be({
            setShow: t
        });
        const c = ve();
        h.useEffect(() => {
            c || a()
        }, [c]);
        const a = () => {
            xe(Z.home), k(L.none), Ce(ae.home)
        };
        return Te(de.Input.Keyboard.KeyCodes.ESC, a), e ? i.jsx(i.Fragment, {
            children: i.jsx(Ue, {
                children: i.jsxs(qe, {
                    initial: {
                        y: "100%",
                        opacity: .25
                    },
                    animate: {
                        y: "0%",
                        opacity: 1
                    },
                    exit: {
                        y: "100%",
                        opacity: .25
                    },
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    },
                    children: [i.jsx(Ge, {
                        children: i.jsx(te, {
                            children: i.jsx(se, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: a
                            })
                        })
                    }), i.jsx(Re, {
                        addingInfo: n
                    }), n.notAllowedToAddMessage ? i.jsx(_e, {
                        children: i.jsxs(f.Text, {
                            style: {
                                fontWeight: Y.Bold
                            },
                            children: [i.jsx(Ae, {
                                name: "fas fa-exclamation-circle"
                            }), "  ", n.notAllowedToAddMessage]
                        })
                    }) : null]
                })
            })
        }) : null
    }),
    Ue = l.div.attrs({
        className: "flex maxAll"
    })`
  align-items: flex-end;
  position: relative;
`,
    Ge = l.div.attrs({
        className: "maxAll flex"
    })`
  position: absolute;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`,
    qe = l($e.div).attrs({
        className: "maxWidth"
    })`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${E.White};
`,
    _e = l.div.attrs({
        className: "maxWidth"
    })`
  padding: 10px 25px;
  background: #c62828;
`;
export {
    yt as
    default
};