import {
    j as a,
    cm as G,
    B as I,
    d as s,
    U as _
} from "./_index.js";
import {
    o as B
} from "./mobxreact.esm.js";
import {
    C as q
} from "./Button.js";
import {
    S as J
} from "./SixteenByNineScaler.js";
import {
    a as p,
    s as u,
    M as E,
    P as Q,
    c as g
} from "./FixSpinePlugin.js";
import {
    r as D,
    L as l,
    t as U,
    s as X,
    G as m,
    v as w,
    M as v,
    o as Y,
    q as Z
} from "./App-41.js";
import {
    V as T,
    C as ee
} from "./Centered.js";
import {
    F as f
} from "./FontAwesomeIcon.js";
import {
    R as C
} from "./ReplaceDevice.js";
import {
    E as te,
    T as re
} from "./ActionButton.js";
import {
    T as b
} from "./index-14.js";
import {
    D as ne
} from "./index-10.js";
import {
    m as R
} from "./motion.js";
import {
    F as ae
} from "./FetchDeviceName.js";
import {
    S as ie
} from "./index-2.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./index-20.js";
import "./index-5.js";
import "./index-22.js";
import "./index-4.js";
import "./context.js";
import "./index-1.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./index-18.js";
import "./CapitalizeFirstLetter.js";
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
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
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
import "./move.js";
const j = (t, e) => {
        const r = p().worldManager.devices.getDeviceById(t);
        r && r.layers.getLayer() !== e && C({
            depth: r.layers.getOptionsDepth(),
            layerId: e,
            name: r.name,
            deviceOption: r.deviceOption,
            id: r.id,
            isPreview: !1,
            options: r.options,
            placedByClient: !1,
            state: r.deviceOption.defaultState,
            x: r.x,
            y: r.y
        })
    },
    S = (t, e) => {
        const r = p().worldManager.devices.getDeviceById(t);
        return r ? r.layers.getLayer() === e : !1
    },
    $ = t => {
        const e = p().worldManager.devices.getDeviceById(t);
        e && C({
            depth: void 0,
            layerId: e.layers.getOptionsLayer(),
            name: e.name,
            deviceOption: e.deviceOption,
            id: e.id,
            isPreview: !1,
            options: e.options,
            placedByClient: !1,
            state: e.deviceOption.defaultState,
            x: e.x,
            y: e.y
        })
    },
    oe = t => {
        const {
            props: e
        } = t, r = [];
        return e.depth !== e.y && r.push({
            key: "reset-natural",
            label: "Reset To Natural Depth",
            icon: a.jsx(f, {
                name: "fas fa-bring-forward"
            }),
            onClick: D(() => $(e.deviceId))
        }), S(e.deviceId, l.DevicesAboveCharacters) || r.push({
            key: "above-layer",
            label: "Move To Above Layer",
            icon: a.jsx(f, {
                name: "fas fa-level-up"
            }),
            onClick: D(() => j(e.deviceId, l.DevicesAboveCharacters))
        }), S(e.deviceId, l.DepthSortedCharactersAndDevices) || r.push({
            key: "primary-layer",
            label: "Move To Primary Layer",
            icon: a.jsx(f, {
                name: "fas fa-dot-circle"
            }),
            onClick: D(() => j(e.deviceId, l.DepthSortedCharactersAndDevices))
        }), S(e.deviceId, l.DevicesUnderCharacters) || r.push({
            key: "below-layer",
            label: "Move To Below Layer",
            icon: a.jsx(f, {
                name: "fas fa-level-down"
            }),
            onClick: D(() => j(e.deviceId, l.DevicesUnderCharacters))
        }), r
    },
    le = B(t => {
        const {
            token: {
                borderRadius: e
            }
        } = G.useToken(), r = () => {
            if (u.me.editing.device.currentlySortedDeviceId = "", u.me.currentAction === E.none) {
                const o = p().worldManager.devices.getDeviceById(t.deviceId);
                o && (u.me.editing.device.currentlyEditedDevice = {
                    id: o.id,
                    deviceOptionId: o.deviceOption.id
                }, X(E.editingDevice), te({
                    event: re.OPEN_DEVICE_OPTIONS,
                    device: o
                }))
            }
        }, i = () => {
            u.me.editing.device.currentlySortedDeviceId = t.deviceId
        }, n = () => {
            u.me.editing.device.currentlySortedDeviceId === t.deviceId && (u.me.editing.device.currentlySortedDeviceId = "")
        };
        return a.jsxs(se, {
            onMouseEnter: i,
            onMouseLeave: n,
            onClick: r,
            layout: !0,
            layoutId: `sort-${t.deviceId}`,
            children: [a.jsxs(ce, {
                style: {
                    borderRadius: e
                },
                children: [a.jsx(b.Text, {
                    style: {
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                    },
                    children: t.deviceName
                }), U() ? a.jsx("div", {
                    style: {
                        flexShrink: 0
                    },
                    children: a.jsx(ne, {
                        menu: {
                            items: oe({
                                props: t
                            })
                        },
                        children: a.jsx(I, {
                            icon: a.jsx(f, {
                                name: "far fa-ellipsis-h"
                            }),
                            type: "text",
                            onClick: o => {
                                o.stopPropagation()
                            }
                        })
                    })
                }) : null]
            }), U() ? a.jsxs(de, {
                onClick: o => o.stopPropagation(),
                children: [a.jsx(I, {
                    icon: a.jsx(f, {
                        name: "fas fa-arrow-up"
                    }),
                    disabled: !t.onUp,
                    onClick: o => {
                        o.stopPropagation(), t == null || t.onUp(t.deviceId)
                    },
                    type: "text"
                }), a.jsx(I, {
                    icon: a.jsx(f, {
                        name: "fas fa-arrow-down"
                    }),
                    type: "text",
                    disabled: !t.onDown,
                    onClick: o => {
                        o.stopPropagation(), t == null || t.onDown(t.deviceId)
                    }
                })]
            }) : null]
        })
    }),
    se = s(R.div).attrs({
        className: "maxWidth flex vc"
    })``,
    ce = s(T).attrs({
        className: "between"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 12px 10px 18px;
  flex: 1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,
    de = s(T)`
  margin-left: 5px;
  flex-shrink: 0;
`;
s.div`
  overflow: hidden;
  margin-right: 15px;
`;
s.div`
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
s.div`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;
s.div`
  display: flex;
  align-items: center;
`;
s.div`
  display: flex;
  flex-direction: column;
`;
const M = (t, e) => {
        const r = t.layer === e.layer,
            i = W(t.layer) === e.layer;
        return r ? Math.max(e.globalDepth + 1, m(t.y, t.layer)) : i ? Math.min(e.globalDepth - 1, m(t.y, e.layer)) : m(t.y, l.DepthSortedCharactersAndDevices)
    },
    L = (t, e) => {
        const r = t.layer === e.layer,
            i = K(t.layer) === e.layer;
        return r ? Math.min(e.globalDepth - 1, m(t.y, t.layer)) : i ? Math.max(e.globalDepth + 1, m(t.y, e.layer)) : m(t.y, l.DepthSortedCharactersAndDevices)
    },
    z = (t, e, r) => {
        const i = w(r.globalDepth).layer,
            n = m(t.y, i);
        return n > r.globalDepth && n < e.globalDepth ? n : (e.globalDepth + r.globalDepth) / 2
    },
    pe = (t, e, r) => {
        if (!r) {
            const i = W(t.layer);
            return i ? m(t.y, i) : t.globalDepth
        }
        return !e || r.layer !== e.layer || t.layer !== r.layer ? M(t, r) : z(t, e, r)
    },
    me = (t, e, r) => {
        if (!e) {
            const i = K(t.layer);
            return i ? m(t.y, i) : t.globalDepth
        }
        return !r || r.layer !== e.layer || t.layer !== e.layer ? L(t, e) : z(t, e, r)
    },
    W = t => t === l.DepthSortedCharactersAndDevices ? l.DevicesAboveCharacters : t === l.DevicesUnderCharacters ? l.DepthSortedCharactersAndDevices : null,
    K = t => t === l.DepthSortedCharactersAndDevices ? l.DevicesUnderCharacters : t === l.DevicesAboveCharacters ? l.DepthSortedCharactersAndDevices : null,
    he = (t, e) => {
        const r = e.findIndex(c => c.deviceId === t);
        if (e[r] && e[r - 1] && e[r].globalDepth === e[r - 1].globalDepth) {
            H(e, r, r - 1);
            return
        }
        const i = pe(e[r], e[r - 2], e[r - 1]),
            n = p().worldManager.devices.getDeviceById(t);
        if (!n) return;
        const {
            depthOnLayer: o,
            layer: d
        } = w(i);
        e[r].layer = d, e[r].depth = o, e[r].globalDepth = i, C({
            depth: o,
            layerId: d,
            name: n.name,
            deviceOption: n.deviceOption,
            id: n.id,
            isPreview: !1,
            options: n.options,
            placedByClient: !1,
            state: n.deviceOption.defaultState,
            x: n.x,
            y: n.y
        }), V(e)
    },
    ye = (t, e) => {
        const r = e.findIndex(c => c.deviceId === t);
        if (e[r] && e[r + 1] && e[r].globalDepth === e[r + 1].globalDepth) {
            H(e, r, r + 1);
            return
        }
        const i = me(e[r], e[r + 1], e[r + 2]),
            n = p().worldManager.devices.getDeviceById(t);
        if (!n) return;
        const {
            depthOnLayer: o,
            layer: d
        } = w(i);
        e[r].layer = d, e[r].depth = o, e[r].globalDepth = i, C({
            depth: o,
            layerId: d,
            name: n.name,
            deviceOption: n.deviceOption,
            id: n.id,
            isPreview: !1,
            options: n.options,
            placedByClient: !1,
            state: n.deviceOption.defaultState,
            x: n.x,
            y: n.y
        }), V(e)
    },
    V = t => {
        t = t.sort((i, n) => n.globalDepth - i.globalDepth);
        const e = [];
        let r = !0;
        for (; r && !u.me.editing.device.usingMultiselect;) {
            r = !1;
            for (let i = 0; i < t.length; i++) {
                const n = t[i],
                    o = m(n.y, n.layer);
                if (!(o === n.globalDepth)) {
                    const c = i === 0 || t[i - 1].globalDepth > o,
                        x = i === t.length - 1 || t[i + 1].globalDepth < o;
                    c && x && (n.globalDepth = o, n.depth = w(o).depthOnLayer, e.push(n), r = !0)
                }
            }
            e.forEach(i => {
                $(i.deviceId)
            })
        }
    },
    H = (t, e, r) => {
        const i = t[e];
        t[e] = t[r], t[r] = i;
        const n = p().worldManager.devices.allDevices.findIndex(c => c.id === t[r].deviceId),
            o = p().worldManager.devices.allDevices.findIndex(c => c.id === t[e].deviceId),
            d = p().worldManager.devices.allDevices[n];
        p().worldManager.devices.allDevices[n] = p().worldManager.devices.allDevices[o], p().worldManager.devices.allDevices[o] = d
    },
    O = t => {
        const {
            token: {
                borderRadius: e
            }
        } = G.useToken();
        return a.jsxs(ue, {
            children: [a.jsx(fe, {
                children: a.jsx(b.Title, {
                    level: 4,
                    style: {
                        fontFamily: _.FugazOne
                    },
                    children: t.layerName
                })
            }), a.jsx(b.Text, {
                children: t.layerDescription
            }), t.devicesInLayer ? a.jsx("div", {
                style: {
                    height: 10
                }
            }) : a.jsx(ge, {
                style: {
                    borderRadius: e
                },
                children: a.jsxs(b.Text, {
                    children: ["No ", v.device.plural, " or", " ", v.prop.plural, " on this layer"]
                })
            })]
        })
    },
    ue = s.div.attrs({
        className: "maxWidth"
    })``,
    fe = s.div`
  text-transform: uppercase;
`,
    ge = s(ee)`
  padding: 30px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-top: 10px;
`,
    Gt = B(t => {
        const e = () => {
            t.setToHomeScreen()
        };
        Y(Q.Input.Keyboard.KeyCodes.ESC, e, [e]);
        const r = u.me.editing.device.sortingState,
            i = h => {
                he(h, r)
            },
            n = h => {
                ye(h, r)
            },
            o = h => {
                const A = r.filter(y => y.layer === h);
                return A.map((y, P) => a.jsx(le, {
                    onUp: P === 0 && h === l.DevicesAboveCharacters ? void 0 : i,
                    onDown: P === A.length - 1 && h === l.DevicesUnderCharacters ? void 0 : n,
                    deviceId: y.deviceId,
                    deviceName: ae(y.deviceId),
                    layer: y.layer,
                    y: y.y,
                    depth: y.depth,
                    globalDepth: y.globalDepth
                }, y.deviceId))
            },
            d = o(l.DevicesAboveCharacters),
            c = o(l.DepthSortedCharactersAndDevices),
            x = o(l.DevicesUnderCharacters);
        return a.jsx(J, {
            className: "maxAll",
            children: a.jsx(xe, {
                onClick: e,
                children: a.jsxs(ve, {
                    onClick: h => h.stopPropagation(),
                    children: [a.jsx(Z, {
                        onClick: e,
                        padding: 20,
                        fontSize: 20
                    }), a.jsxs(k, {
                        children: [a.jsx(O, {
                            layerName: g() ? "In Front" : "Above",
                            layerDescription: g() ? `In front of players and ${v.terrain.singular}` : "Above players",
                            devicesInLayer: d.length
                        }), d.length ? a.jsx(N, {
                            children: d
                        }) : null]
                    }), a.jsx(F, {}), a.jsxs(k, {
                        children: [a.jsx(O, {
                            layerName: g() ? "Between" : "Primary",
                            layerDescription: g() ? `In front of players, but behind ${v.terrain.singular}` : "Above or below players depending on their position",
                            devicesInLayer: c.length
                        }), c.length ? a.jsx(N, {
                            children: c
                        }) : null]
                    }), a.jsx(F, {}), a.jsxs(k, {
                        children: [a.jsx(O, {
                            layerName: g() ? "Behind" : "Below",
                            layerDescription: g() ? `Behind players and ${v.terrain.singular}` : "Under players",
                            devicesInLayer: x.length
                        }), x.length ? a.jsx(N, {
                            children: x
                        }) : null]
                    })]
                })
            })
        })
    }),
    xe = s(T).attrs({
        className: "maxAll"
    })``,
    ve = s(R.div).attrs({
        className: "maxHeight scroll-y medium-shadow",
        initial: {
            x: "-100%",
            opacity: .25
        },
        animate: {
            x: "0%",
            opacity: 1
        },
        exit: {
            x: "-100%",
            opacity: .25
        },
        transition: {
            duration: .2,
            ease: "easeOut"
        }
    })`
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${q.White};
  padding: 20px;
  width: 410px;
`,
    k = s.div.attrs({
        className: "maxWidth"
    })``,
    N = t => a.jsx(ie, {
        size: 10,
        direction: "vertical",
        className: "maxWidth",
        children: t.children
    }),
    F = () => a.jsx("div", {
        style: {
            height: 30
        }
    });
export {
    xe as Container, ve as Content, Gt as
    default
};