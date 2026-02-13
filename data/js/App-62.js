const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-77.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/App-41.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/howler.js", "assets/mobxreact.esm.js", "assets/index-21.js", "assets/QuizTypes.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/index-5.js", "assets/index-18.js", "assets/context.js", "assets/FontAwesomeIcon.js", "assets/Centered.js", "assets/CapitalizeFirstLetter.js", "assets/index-4.js", "assets/motion.js", "assets/index-2.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/index-3.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/SixteenByNineScaler.js", "assets/index-20.js", "assets/index-22.js", "assets/index-1.js", "assets/progress.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/util-1.js", "assets/util-2.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-motion-value.js", "assets/use-transform.js", "assets/index-6.js", "assets/AccessibleAnchor.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/index-17.js", "assets/use-force-update.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/Tooltip.js", "assets/index-9.js", "assets/index-23.js", "assets/useIntervalWhen.js", "assets/index-10.js", "assets/move.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/FillRemainingSpace.js", "assets/index-24.js", "assets/App-53.js", "assets/ReplaceDevice.js", "assets/GetCurrentMapStyle.js", "assets/index-28.js", "assets/index-7.js", "assets/DownOutlined.js", "assets/LoadGoogleFontAfterSceneStart.js", "assets/index-8.js", "assets/useItemAmount.js", "assets/index-29.js", "assets/StopPropagation.js", "assets/useTimeout.js", "assets/useWarningOnMountInDevelopment.js", "assets/ReactionToMultipleProps.js", "assets/FetchDeviceName.js", "assets/DeleteOutlined.js"]))) => i.map(i => d[i]);
import {
    j as i,
    d as c,
    r as u,
    b5 as H,
    u as _,
    M as K,
    B as U,
    a4 as De,
    F as ge,
    ar as Ae,
    R as Me,
    dO as ie,
    U as We,
    d$ as te,
    e as $e,
    p as Re
} from "./_index.js";
import {
    y as k,
    F as Le,
    z as J,
    R as ne,
    B as Be,
    D as se,
    b as L,
    E as ve,
    P as Pe,
    V as Fe,
    t as xe,
    M as S,
    H as he,
    S as pe,
    J as fe,
    N as Ve,
    O as b,
    u as I,
    Q as ze,
    T as He,
    w as _e,
    r as Ke,
    U as re,
    s as q,
    q as Ue,
    o as B,
    W as Je,
    X as ye,
    Y as qe,
    Z as Ye
} from "./App-41.js";
import {
    s as l,
    a as Y,
    i as Qe,
    I as Xe,
    L as P,
    M as Q,
    P as F
} from "./FixSpinePlugin.js";
import {
    S as X
} from "./SixteenByNineScaler.js";
import {
    V as W,
    C as Ce,
    a as Ze
} from "./Centered.js";
import {
    C as T
} from "./Button.js";
import {
    F as Z
} from "./FontAwesomeIcon.js";
import {
    S as D
} from "./StopPropagation.js";
import {
    T as h
} from "./index-14.js";
import {
    o as j
} from "./mobxreact.esm.js";
import {
    C as M,
    M as f,
    F as ei,
    a as ii,
    D as ti,
    u as ni
} from "./App-53.js";
import {
    C as V
} from "./CapitalizeFirstLetter.js";
import {
    R as je
} from "./ReactionToMultipleProps.js";
import {
    F as z
} from "./FetchDeviceName.js";
import {
    R as be
} from "./ReplaceDevice.js";
import {
    T as si
} from "./index-5.js";
import {
    I as ri
} from "./index-3.js";
import {
    S as $
} from "./index-2.js";
import {
    m as ee
} from "./motion.js";
import {
    A as oi
} from "./index-29.js";
import {
    D as di
} from "./index-10.js";
import {
    R as ai
} from "./DeleteOutlined.js";
import {
    D as oe
} from "./TutorialConsts.js";
import {
    u as ci
} from "./useWillUnmount.js";
import {
    E as li,
    T as mi
} from "./ActionButton.js";
import {
    u as ui
} from "./useTimeout.js";
const w = {
        enterExit: {
            duration: .22,
            ease: "easeInOut"
        }
    },
    R = e => {
        const {
            selected: t,
            name: s,
            icon: r,
            onSelect: n
        } = e, a = o => {
            D(o), k(), n()
        };
        return i.jsxs(gi, {
            onClick: a,
            children: [i.jsx(vi, {
                selected: t,
                children: i.jsx(Z, {
                    name: r
                })
            }), i.jsx(xi, {
                children: i.jsx(h.Title, {
                    level: 4,
                    children: s
                })
            })]
        })
    },
    gi = c(W)`
  padding: 8px 15px;
  padding-left: 0px;
  border-radius: 6px;
  cursor: pointer;
  width: 300px;
  transition: all 0.2s ease;
  &:hover {
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.1);
  }
`,
    vi = c(Ce)`
  height: 36px;
  width: 36px;
  border: 2px solid ${T.White};
  background: ${e=>e.selected?"#269900":"rgba(0,0,0,0.2)"};
  border-radius: 50%;
  transition: background 0.2s ease;
`,
    xi = c.div`
  margin-left: 14px;
`,
    hi = (e, t) => {
        const s = Le(e);
        if (!s) return !1;
        const r = s.codeGridSchema.triggers.find(o => o.type === t);
        if (!r) return !1;
        const n = r.minimumRoleLevel,
            a = r.maximumRoleLevel;
        return J(n, a)
    },
    pi = () => {
        const e = ne.codeGrids.minimumRoleLevel,
            t = ne.codeGrids.maximumRoleLevel;
        return J(e, t)
    },
    we = (e, t) => {
        var a, o;
        const s = l.worldOptions.deviceOptions.find(d => d.id === e);
        if (!s) return [];
        if (!Be(e, t)) return [];
        if (!pi()) return [];
        let r = [];
        const {
            codeGridSchema: n
        } = s;
        return n.allowChannelGrids && J((a = n == null ? void 0 : n.channelGridsRoleLevel) == null ? void 0 : a.min, (o = n == null ? void 0 : n.channelGridsRoleLevel) == null ? void 0 : o.max) && r.push({
            type: M.broadcastMessage,
            name: "When receiving on channel..."
        }), n.triggers.forEach(d => {
            hi(s.id, d.type) && r.push({
                type: d.type,
                name: d.name
            })
        }), r
    },
    fi = (e, t) => !!we(e, t).length,
    yi = e => {
        const {
            deviceId: t,
            deviceOption: s
        } = e, [r, n] = u.useState(se({
            deviceId: t
        }));
        return u.useEffect(() => je([() => {
            var a;
            return (a = l.world.devices.codeGrids.get(t)) == null ? void 0 : a.items.size
        }, () => l.memorySystem.counters.devices.get(s.id)], () => {
            n(se({
                deviceId: t
            }))
        }, {
            fireImmediately: !0
        }), [t]), i.jsxs(h.Text, {
            italic: !0,
            children: [H(r), " ", L]
        })
    },
    Ie = e => Array.from(l.world.wires.wires.keys()).filter(t => t.startsWith(e)).map(t => l.world.wires.wires.get(t)),
    Ee = e => Array.from(l.world.wires.wires.keys()).filter(t => t.endsWith(e)).map(t => l.world.wires.wires.get(t)),
    Ne = e => !!(Ie(e).length || Ee(e).length),
    Ci = () => {
        const e = Y().worldManager.devices.getDeviceById(l.me.editing.device.currentlyEditedDevice.id ?? "");
        return e ? e.visualEditing.uses() : !1
    },
    ji = () => {
        const e = ve();
        if (!e) return;
        e.parts.forceHide(), e.colliders.hideDebug(), e.shadows.hide(), e.onHide && e.onHide(), l.me.editing.device.visualEditing = {
            active: !0,
            instruction: "",
            keyboardHelpers: [],
            cursor: "default",
            id: e.id
        };
        const t = e.layers.isOnNaturalDepth() ? void 0 : e.layers.getDepth();
        Pe({
            id: Fe.previewId,
            deviceOption: e.deviceOption,
            isPreview: !0,
            options: {
                ...e.options
            },
            placedByClient: !0,
            state: {
                ...e.deviceOption.defaultState
            },
            x: e.x,
            y: e.y,
            depth: t,
            name: e.name
        })
    },
    bi = j(e => {
        const [t, s, r] = _(!1), [n, a] = u.useState(""), o = u.useRef(null);
        u.useEffect(() => {
            var p;
            t && (a(""), (p = o == null ? void 0 : o.current) == null || p.focus())
        }, [t]);
        const d = p => {
                a(p.target.value)
            },
            x = () => {
                const p = n == null ? void 0 : n.trim(),
                    g = Y().worldManager.devices.getDeviceById(e.deviceId);
                g && (be({
                    depth: g.layers.getOptionsDepth(),
                    layerId: g.layers.getOptionsLayer(),
                    name: p,
                    deviceOption: g.deviceOption,
                    id: g.id,
                    isPreview: !1,
                    options: g.options,
                    placedByClient: !1,
                    state: g.deviceOption.defaultState,
                    x: g.x,
                    y: g.y
                }), r())
            },
            v = xe();
        return i.jsx(X, {
            className: "maxWidth",
            children: i.jsxs("div", {
                className: "flex",
                onClick: D,
                children: [i.jsx(si, {
                    title: v ? "Rename" : void 0,
                    placement: "right",
                    children: i.jsx(h.Title, {
                        level: 2,
                        style: {
                            color: T.White,
                            marginBottom: 2,
                            cursor: v ? "pointer" : "auto"
                        },
                        onClick: v ? s : void 0,
                        children: z(e.deviceId)
                    })
                }), i.jsxs(K, {
                    open: t && v,
                    onCancel: r,
                    onOk: x,
                    children: [i.jsx(h.Title, {
                        level: 5,
                        children: "Change name"
                    }), i.jsx(ri, {
                        ref: o,
                        maxLength: 64,
                        style: {
                            marginTop: 10
                        },
                        placeholder: "New name...",
                        value: n,
                        onChange: d,
                        onPressEnter: x
                    })]
                })]
            })
        })
    }),
    wi = j(e => {
        const {
            device: t,
            deviceOption: s,
            options: r,
            tab: n,
            setTab: a
        } = e, o = () => Ci() && !he() && xe(), d = fi(s.id, r), x = Ne(t.id);
        return i.jsxs(Ii, {
            children: [i.jsxs("div", {
                className: "maxWidth",
                children: [i.jsx(bi, {
                    deviceId: t.id
                }), i.jsx(yi, {
                    deviceId: t.id,
                    deviceOption: s
                }), i.jsxs($, {
                    direction: "vertical",
                    size: 4,
                    className: "maxWidth",
                    style: {
                        marginTop: 16
                    },
                    children: [i.jsx(R, {
                        icon: "fas fa-cog",
                        name: "Options",
                        selected: n === C.options,
                        onSelect: () => {
                            a(C.options)
                        }
                    }), d ? i.jsx(R, {
                        icon: "fas fa-cubes",
                        name: V(f.grid.plural),
                        selected: n === C.codeGrids,
                        onSelect: () => {
                            a(C.codeGrids)
                        }
                    }) : null, x ? i.jsx(R, {
                        icon: "fas fa-plug",
                        name: V(S.wire.plural),
                        selected: n === C.wires,
                        onSelect: () => {
                            a(C.wires)
                        }
                    }) : null]
                })]
            }), i.jsx("div", {
                children: o() ? i.jsx(U, {
                    size: "large",
                    type: "primary",
                    onClick: v => {
                        D(v), k(), ji()
                    },
                    children: "Change Size"
                }) : null
            })]
        })
    }),
    Ii = c(ee.div).attrs({
        className: "flex-column between maxWidth",
        transition: {
            duration: w.enterExit.duration,
            ease: w.enterExit.ease
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    })`
  padding: 25px;
`,
    Oe = c.div.attrs({
        className: "maxWidth"
    })`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`,
    Ge = e => i.jsxs(Ei, {
        onClick: e.onClick,
        children: [e.children, i.jsx(h.Text, {
            children: e.label
        })]
    }),
    Ei = c(Ce).attrs({
        className: "maxWidth"
    })`
  padding: 30px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  cursor: pointer;
  border: 2px dashed rgba(255, 244, 212, 0.5);
  transition: background 0.2s ease;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,
    de = e => {
        pe(fe.createCodeGrid, {
            deviceId: e.deviceId,
            triggerType: e.triggerType,
            triggerValue: e.triggerValue
        })
    },
    ae = e => {
        var o;
        const t = l.memorySystem.costs.codeGrid;
        if (!Ve({
                memory: t
            })) return {
            canAdd: !1,
            reason: b.noMemory
        };
        const r = l.memorySystem.counters.codeGrids,
            n = l.memorySystem.limits.codeGrids;
        return r >= n ? {
            canAdd: !1,
            reason: b.limit
        } : (((o = l.world.devices.codeGrids.get(e)) == null ? void 0 : o.items.size) ?? 0) >= l.memorySystem.limits.codeGridsPerDevice ? {
            canAdd: !1,
            reason: b.codeGridPerDeviceLimit
        } : {
            canAdd: !0
        }
    },
    Ni = e => {
        if (e.reason === b.codeGridPerDeviceLimit) return `Cannot create more ${f.grid.plural}. Reached limit of ${l.memorySystem.limits.codeGridsPerDevice} ${f.grid.plural} per device.`;
        if (e.reason === b.limit) return `Cannot create more ${f.grid.plural}. Reached limit of ${l.memorySystem.limits.codeGrids} ${f.grid.plural} on map.`;
        const t = l.memorySystem.costs.codeGrid;
        return e.reason === b.noMemory ? `Not enough ${L} to create ${f.grid.singular}. Requires ${H(t)} available ${L}.` : ""
    },
    Oi = e => {
        const {
            memorySystem: t
        } = I(), [s, r] = u.useState(ae(e.deviceId)), [n, a, o] = _(!1), [d, x] = u.useState(""), v = u.useRef(null);
        u.useEffect(() => je([() => l.memorySystem.counters.codeGrids, () => l.memorySystem.usedMemoryCost], () => {
            r(ae(e.deviceId))
        }, {
            fireImmediately: !0
        }), [e.deviceId]), u.useEffect(() => {
            var m;
            (m = v == null ? void 0 : v.current) == null || m.focus()
        }, [n]);
        const p = u.useMemo(() => ei(ii.channel), []),
            g = () => {
                const m = d == null ? void 0 : d.trim();
                !m || !m.length || (e.setIsCreatingNewGrid(), de({
                    deviceId: e.deviceId,
                    triggerType: M.broadcastMessage,
                    triggerValue: d
                }), o(), x(""))
            },
            E = Ni({
                reason: s.reason
            });
        return i.jsxs(Gi, {
            children: [i.jsxs(Si, {
                children: [i.jsxs(h.Title, {
                    level: 4,
                    style: {
                        color: T.White
                    },
                    children: ["Create a new ", f.grid.singular]
                }), i.jsxs(h.Text, {
                    italic: !0,
                    children: ["+", H(t.costs.codeGrid), " memory"]
                })]
            }), s.canAdd ? i.jsx(Oe, {
                style: {
                    marginTop: 20
                },
                children: e.codeGridOptions.map(m => i.jsx(Ge, {
                    label: m.name,
                    onClick: () => {
                        if (k(), m.type === M.broadcastMessage) {
                            a();
                            return
                        }
                        e.setIsCreatingNewGrid(), de({
                            deviceId: e.deviceId,
                            triggerType: m.type,
                            triggerValue: ""
                        })
                    }
                }, m.type + "-option"))
            }) : i.jsx(De, {
                type: "error",
                showIcon: !0,
                message: E,
                style: {
                    marginTop: 15
                }
            }), i.jsxs(K, {
                open: n,
                onCancel: o,
                onOk: g,
                children: [i.jsx(h.Title, {
                    level: 5,
                    children: "Channel name"
                }), i.jsxs(h.Text, {
                    children: ["The ", f.grid.singular, " will run when receiving a message from this channel"]
                }), i.jsx(oi, {
                    ref: v,
                    value: d,
                    className: "maxWidth",
                    placeholder: "Channel name...",
                    onChange: x,
                    maxLength: 512,
                    style: {
                        marginTop: 10,
                        marginBottom: 3
                    },
                    autoFocus: !0,
                    options: p.map(m => ({
                        value: m
                    })),
                    filterOption: (m, y) => y.value.toUpperCase().indexOf(m.toUpperCase()) !== -1
                })]
            })]
        })
    },
    Gi = c.div.attrs({
        className: "maxWidth"
    })``,
    Si = c(W).attrs({
        className: "maxWidth between"
    })``,
    Se = e => {
        var s, r;
        if (!Qe() || ze() || !Xe()) return !1;
        const t = He();
        return ((r = (s = l.characters.characters.get(t)) == null ? void 0 : s.permissions) == null ? void 0 : r.manageCodeGrids) || !1
    },
    ki = (e, t) => {
        var o, d;
        const s = _e(e);
        if (!s) return null;
        const r = (d = (o = l.world.devices.codeGrids.get(e)) == null ? void 0 : o.items) == null ? void 0 : d.get(t);
        if (!r) return null;
        const n = r.triggerType;
        if (n === M.broadcastMessage) return i.jsxs("span", {
            children: ["When receiving on channel", " ", i.jsx("span", {
                style: {
                    fontWeight: ge.Bold,
                    color: "#57f784"
                },
                children: r.triggerValue || "channel"
            })]
        });
        const a = s.deviceOption.codeGridSchema.triggers.find(x => x.type === n);
        return a ? a.name : null
    },
    Ti = (e, t) => ki(e, t) || "Block",
    Di = e => {
        pe(fe.deleteCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    },
    Ai = j(e => {
        const {
            deviceId: t
        } = e, s = Array.from(e.codeGrids), r = Se();
        return u.useEffect(() => {
            e.isCreatingNewGrid && (e.setIsNotCreatingNewGrid(), s.length >= 1 && ce(Ae.last(s)[0]))
        }, [s.length]), i.jsxs(Mi, {
            children: [i.jsxs(h.Title, {
                style: {
                    color: T.White
                },
                level: 4,
                children: [r ? "Edit" : "View", " an existing", " ", f.grid.singular]
            }), i.jsx(Oe, {
                style: {
                    marginTop: 20
                },
                children: s.map(n => i.jsx(Ge, {
                    label: Ti(t, n[0]),
                    onClick: () => {
                        k(), ce(n[0])
                    },
                    children: r ? i.jsx(Wi, {
                        children: i.jsx(di, {
                            menu: {
                                items: [{
                                    key: `remove-grid-${n[0]}`,
                                    label: `Delete ${f.grid.singular}`,
                                    icon: i.jsx(ai, {}),
                                    onClick: Ke(() => {
                                        K.confirm({
                                            title: `Are you sure you want to delete this ${f.grid.singular}?`,
                                            onOk: () => {
                                                Di({
                                                    deviceId: t,
                                                    gridId: n[0]
                                                })
                                            },
                                            okText: "Yes",
                                            cancelText: "No"
                                        })
                                    })
                                }]
                            },
                            children: i.jsx(U, {
                                type: "text",
                                size: "small",
                                icon: i.jsx(Me, {}),
                                onClick: D
                            })
                        })
                    }) : null
                }, n[0] + "-grid"))
            })]
        })
    }),
    ce = e => {
        l.me.editing.device.currentlyEditedGridId = e, l.me.editing.device.screen = P.grid
    },
    Mi = c.div.attrs({
        className: "maxWidth"
    })``,
    Wi = c.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
`,
    $i = () => i.jsxs(Ze, {
        className: "maxAll",
        children: [i.jsx("div", {
            style: {
                fontSize: 54,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 5
            },
            children: i.jsx(Z, {
                name: "fal fa-cubes"
            })
        }), i.jsxs(h.Text, {
            children: ["No ", f.grid.plural, " have been created for this", " ", S.device.singular, "."]
        })]
    }),
    Ri = j(e => {
        var g;
        const {
            world: {
                devices: {
                    codeGrids: t
                }
            }
        } = I(), s = e.device.id, [r, n, a] = _(!1), o = (g = t.get(s)) == null ? void 0 : g.items, d = we(e.deviceOption.id, e.options), x = o && o.size >= 1, v = d.length >= 1, p = Se();
        return !x && !p ? i.jsx($i, {}) : i.jsx(Li, {
            children: i.jsxs($, {
                direction: "vertical",
                size: 40,
                className: "maxWidth",
                children: [x ? i.jsx(Ai, {
                    deviceId: s,
                    codeGrids: o,
                    isCreatingNewGrid: r,
                    setIsNotCreatingNewGrid: a
                }) : null, v && p ? i.jsx(Oi, {
                    codeGridOptions: d,
                    deviceId: s,
                    setIsCreatingNewGrid: n
                }) : null]
            })
        })
    }),
    Li = c.div``,
    Bi = j(e => {
        const {
            wire: t,
            deviceId: s
        } = e, {
            me: {
                editing: r
            }
        } = I(), n = t.startDevice === s, a = !n, o = re(t.startDevice), d = re(t.endDevice), x = z(t.startDevice), v = z(t.endDevice), p = u.useMemo(() => {
            var y, N, O, G;
            if ((o == null ? void 0 : o.deviceOption.id) === oe.wireRepeater) return "Pulse received";
            const m = (G = (O = (N = (y = o == null ? void 0 : o.deviceOption) == null ? void 0 : y.wireConfig) == null ? void 0 : N.out) == null ? void 0 : O.connections) == null ? void 0 : G.find(A => A.id === t.startConnection);
            return m ? m.name : "No event"
        }, [t.startConnection]), g = u.useMemo(() => {
            var y, N, O, G, A;
            if (((y = d == null ? void 0 : d.deviceOption) == null ? void 0 : y.id) === oe.wireRepeater) return "Relay pulse";
            const m = (A = (G = (O = (N = d == null ? void 0 : d.deviceOption) == null ? void 0 : N.wireConfig) == null ? void 0 : O.in) == null ? void 0 : G.connections) == null ? void 0 : A.find(Te => Te.id === t.endConnection);
            return m ? m.name : "No action"
        }, [t.endConnection]), E = () => {
            r.wire.currentlyEditedWireId = t.id, q(Q.editingWire)
        };
        return i.jsxs(Pi, {
            onClick: E,
            children: [i.jsxs(Fi, {
                children: [i.jsx(le, {
                    selected: n
                }), i.jsxs(Vi, {
                    children: [i.jsx(zi, {}), i.jsx(Hi, {
                        children: i.jsx(Z, {
                            name: "fas fa-caret-right"
                        })
                    })]
                }), i.jsx(le, {
                    selected: a
                })]
            }), i.jsxs(_i, {
                children: [i.jsxs(Ki, {
                    children: [a ? i.jsx(me, {
                        children: x
                    }) : null, i.jsx("div", {
                        children: i.jsx(h.Text, {
                            children: p
                        })
                    })]
                }), i.jsxs(Ui, {
                    children: [n ? i.jsx(me, {
                        children: v
                    }) : null, i.jsx(h.Text, {
                        children: g
                    })]
                })]
            })]
        })
    }),
    Pi = c.div`
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`,
    Fi = c(W).attrs({
        className: "maxWidth"
    })``,
    le = c.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: ${e=>e.selected?"#269900":"rgba(255,255,255,0.14)"};
  border: 2px solid rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
`,
    Vi = c(W)`
  flex: 1;
  padding: 0px 20px;
`,
    zi = c.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
`,
    Hi = c.div`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  line-height: 1;
`,
    _i = c.div.attrs({
        className: "maxWidth between flex"
    })`
  align-items: flex-start;
  margin-top: 10px;
`,
    ke = c.div`
  max-width: 45%;
  line-height: 1;
`,
    Ki = c(ke)``,
    Ui = c(ke)`
  text-align: right;
`,
    me = e => i.jsx(h.Title, {
        level: 5,
        style: {
            fontWeight: ge.Bold
        },
        children: e.children
    }),
    ue = j(e => {
        const t = e.direction === "in" ? Ee(e.deviceId) : Ie(e.deviceId);
        return t.length ? i.jsxs(Ji, {
            children: [i.jsxs(h.Title, {
                level: 4,
                style: {
                    color: T.White
                },
                children: [V(S.wire.plural), " ", e.direction]
            }), i.jsx($, {
                direction: "vertical",
                size: 12,
                style: {
                    marginTop: 15
                },
                className: "maxWidth",
                children: t.map(s => i.jsx(Bi, {
                    wire: s,
                    deviceId: e.deviceId
                }, s.id))
            })]
        }) : null
    }),
    Ji = c.div``,
    qi = j(e => Ne(e.deviceId) ? i.jsx(Yi, {
        children: i.jsxs($, {
            direction: "vertical",
            size: 25,
            className: "maxWidth",
            children: [i.jsx(ue, {
                direction: "in",
                deviceId: e.deviceId
            }), i.jsx(ue, {
                direction: "out",
                deviceId: e.deviceId
            })]
        })
    }) : i.jsxs(h.Text, {
        children: ["No ", S.wire.plural, " are connected to this", " ", S.device.singular, "."]
    })),
    Yi = c.div``,
    Qi = e => {
        const t = () => e.tab === C.options ? i.jsx(ti, {
            device: e.device,
            deviceOption: e.deviceOption,
            position: e.position,
            options: e.options,
            hooks: e.hooks
        }) : e.tab === C.codeGrids ? i.jsx(Ri, {
            device: e.device,
            deviceOption: e.deviceOption,
            options: e.options
        }) : i.jsx(qi, {
            deviceId: e.device.id
        });
        return i.jsxs(Xi, {
            children: [i.jsx(Zi, {
                onClick: D,
                children: t()
            }), i.jsx(Ue, {
                padding: 25
            })]
        })
    },
    Xi = c.div.attrs({
        className: "maxAll flex"
    })`
  position: relative;
  justify-content: flex-end;
`,
    Zi = c(ee.div).attrs({
        className: "maxAll scroll-y medium-shadow",
        transition: {
            duration: w.enterExit.duration,
            ease: w.enterExit.ease
        },
        initial: {
            opacity: .25,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%"
        },
        exit: {
            opacity: .25,
            x: "100%"
        }
    })`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  width: 490px;
  padding: 25px;
  padding-top: 68px;
  position: relative;
`;
var C = (e => (e.options = "options", e.codeGrids = "codeGrids", e.wires = "wires", e))(C || {});
const et = e => {
        B(F.Input.Keyboard.KeyCodes.ESC, e.close, [e.close]);
        const [t, s] = u.useState("options");
        return i.jsxs(it, {
            children: [i.jsx(wi, {
                device: e.device,
                deviceOption: e.deviceOption,
                options: e.options,
                tab: t,
                setTab: s
            }), i.jsx(Qi, {
                device: e.device,
                options: e.options,
                hooks: e.hooks,
                position: e.position,
                deviceOption: e.deviceOption,
                tab: t
            })]
        })
    },
    it = c.div.attrs({
        className: "maxAll flex between"
    })``,
    tt = () => {
        const {
            me: {
                editing: {
                    device: {
                        currentlyEditedDevice: e
                    }
                }
            },
            worldOptions: {
                deviceOptions: t
            }
        } = I(), s = u.useMemo(() => Y().worldManager.devices.getDeviceById(e.id), [e.id]), r = t.find(n => n.id === e.deviceOptionId);
        return {
            device: s,
            deviceOption: r
        }
    },
    nt = () => {
        q(Q.editingDevice);
        const e = Je(),
            t = ve();
        ye(), !(!t || !e) && be({
            deviceOption: t.deviceOption,
            id: t.id,
            x: Math.round(e.x),
            y: Math.round(e.y),
            depth: e.layers.getDepth(),
            layerId: t.layers.getOptionsLayer(),
            name: e.name,
            isPreview: !1,
            options: {
                ...e.options
            },
            placedByClient: !0,
            state: t.deviceOption.defaultState
        })
    },
    st = j(() => {
        const {
            me: {
                editing: {
                    device: {
                        visualEditing: {
                            instruction: e,
                            keyboardHelpers: t
                        }
                    }
                }
            }
        } = I();
        B(F.Input.Keyboard.KeyCodes.ENTER, () => {
            o()
        }), B(F.Input.Keyboard.KeyCodes.ESC, () => {
            o()
        }), ci(() => {
            ye()
        });
        const [s, r] = u.useState(e), [n, a] = u.useState(JSON.stringify(t));
        u.useEffect(() => {
            const d = ie(() => e, () => {
                s !== l.me.editing.device.visualEditing.instruction && r(l.me.editing.device.visualEditing.instruction)
            }, {
                fireImmediately: !0
            });
            return () => {
                d()
            }
        }, [e, s]), u.useEffect(() => {
            const d = ie(() => t, () => {
                n !== JSON.stringify(l.me.editing.device.visualEditing.keyboardHelpers) && a(JSON.stringify(l.me.editing.device.visualEditing.keyboardHelpers))
            }, {
                fireImmediately: !0
            });
            return () => {
                d()
            }
        }, [n, t]);
        const o = () => {
            nt()
        };
        return i.jsxs(rt, {
            children: [i.jsx(qe, {
                items: JSON.parse(n),
                visible: !0
            }), i.jsxs(ot, {
                children: [i.jsx(X, {
                    children: i.jsx("div", {
                        children: i.jsx(U, {
                            type: "primary",
                            size: "large",
                            onClick: () => {
                                k(), o()
                            },
                            children: "Done"
                        })
                    })
                }), i.jsx(dt, {
                    children: i.jsx("div", {
                        children: s
                    })
                })]
            })]
        })
    }),
    rt = c.div.attrs({
        className: "maxAll flex"
    })`
  align-items: flex-end;
`,
    ot = c.div.attrs({
        className: "maxWidth flex"
    })`
  position: relative;
  padding: 25px;
`,
    dt = c.div.attrs({
        className: "maxAll flex-center"
    })`
  position: absolute;
  text-align: center;
  font-family: ${We.FugazOne};
  text-transform: uppercase;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
  font-size: 22px;
  top: 0px;
  left: 0px;
`,
    at = u.lazy(() => Re(() => import("./App-77.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87]))),
    ct = j(() => {
        const {
            me: e,
            world: {
                devices: t
            }
        } = I(), {
            options: s,
            hooks: r,
            position: n
        } = ni(), {
            device: a,
            deviceOption: o
        } = tt(), d = he();
        u.useEffect(() => d ? () => {} : Ye().dispose, [d]);
        const x = () => {
                t.devices.get(e.editing.device.currentlyEditedDevice.id) || g()
            },
            {
                start: v,
                clear: p
            } = ui(x, 25);
        if (u.useEffect(() => {
                const m = te(() => !t.devices.get(e.editing.device.currentlyEditedDevice.id), () => {
                        v()
                    }),
                    y = te(() => !!t.devices.get(e.editing.device.currentlyEditedDevice.id), () => {
                        p()
                    });
                return () => {
                    m(), y()
                }
            }, [e.editing.device.currentlyEditedDevice.id]), !a || !o) return null;
        const g = () => {
                q(Q.none), li({
                    event: mi.CLOSE_DEVICE_OPTIONS,
                    device: a
                })
            },
            E = () => e.editing.device.screen === P.grid ? i.jsx(at, {
                close: () => {
                    e.editing.device.screen = P.home
                },
                deviceId: a.id
            }) : i.jsx(et, {
                device: a,
                deviceOption: o,
                position: n,
                options: s,
                hooks: r,
                close: g
            });
        return d ? i.jsx(st, {}) : i.jsx(X, {
            className: "maxAll",
            children: i.jsx(lt, {
                onClick: g,
                children: i.jsx(u.Suspense, {
                    fallback: null,
                    children: E()
                })
            })
        })
    }),
    lt = c(ee.div).attrs({
        className: "maxAll",
        transition: {
            duration: w.enterExit.duration,
            ease: w.enterExit.ease
        },
        initial: {
            background: "rgba(0,0,0,0)"
        },
        animate: {
            background: "rgba(0,0,0,0.6)"
        },
        exit: {
            background: "rgba(0,0,0,0)"
        }
    })`
  color: ${$e.White};
`,
    Rt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ct
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Rt as A, Ti as N, Se as c
};