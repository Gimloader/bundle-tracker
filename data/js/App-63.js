import {
    j as e,
    F as w,
    d as i,
    r as h,
    e as N,
    dO as D
} from "./_index.js";
import {
    t as T,
    a2 as L,
    w as A,
    z as F,
    s as W,
    u as $,
    o as M,
    a3 as P,
    q as z,
    y as B,
    a4 as U,
    a5 as K
} from "./App-41.js";
import {
    s as g,
    M as y,
    P as _
} from "./FixSpinePlugin.js";
import {
    S as V
} from "./SixteenByNineScaler.js";
import {
    S as q
} from "./StopPropagation.js";
import {
    V as G,
    C as v,
    a as H
} from "./Centered.js";
import {
    F as C
} from "./FontAwesomeIcon.js";
import {
    T as f
} from "./index-14.js";
import {
    o as E
} from "./mobxreact.esm.js";
import {
    F as J
} from "./FetchDeviceName.js";
import {
    D as Q
} from "./TutorialConsts.js";
import {
    C as X
} from "./Button.js";
import {
    S as Y
} from "./index-2.js";
import {
    E as Z,
    T as ee
} from "./ActionButton.js";
import {
    u as te
} from "./index-17.js";
import {
    m as I
} from "./motion.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
import "./playSound.js";
import "./howler.js";
import "./index-18.js";
import "./context.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./index-5.js";
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
import "./inheritsLoose.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./polished.esm.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./index-20.js";
import "./index-22.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
import "./use-force-update.js";
const ie = t => e.jsxs(re, {
        onClick: t.readOnly ? void 0 : t.onClick,
        readOnly: t.readOnly,
        children: [e.jsx(oe, {
            selected: t.selected,
            children: t.selected ? e.jsx(C, {
                name: "fas fa-check"
            }) : null
        }), e.jsx(f.Text, {
            style: {
                fontWeight: t.selected ? w.Bold : w.Normal
            },
            children: t.children
        })]
    }),
    re = i(G)`
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.23s ease;
  cursor: ${t=>t.readOnly?"not-allowed":"pointer"};
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    oe = i(v)`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${t=>t.selected?"#269900":"transparent"};
  flex-shrink: 0;
  transition: background 0.18s ease;
`,
    R = t => e.jsxs(ae, {
        children: [e.jsx(ce, {
            children: e.jsx(C, {
                name: "fas fa-plug"
            })
        }), e.jsx(f.Text, {
            style: {
                color: X.White
            },
            children: t.children
        })]
    }),
    ne = () => e.jsx(R, {
        children: "When the wire repeater receives a pulse..."
    }),
    se = () => e.jsx(R, {
        children: "Repeat the wire pulse!"
    }),
    ae = i(H).attrs({
        className: "maxWidth"
    })`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`,
    ce = i.div`
  font-size: 24px;
  margin-bottom: 6px;
`,
    k = E(t => {
        var o;
        const a = !T() || !L(),
            s = t.side === "left",
            p = s ? t.wire.startDevice : t.wire.endDevice,
            r = A(p),
            c = ((o = r == null ? void 0 : r.deviceOption) == null ? void 0 : o.id) === Q.wireRepeater,
            u = () => {
                r && (g.me.editing.device.currentlyEditedDevice = {
                    id: r.id,
                    deviceOptionId: r.deviceOption.id
                }, W(y.editingDevice))
            },
            x = h.useMemo(() => {
                var d, l, b, j;
                return (((j = (b = (l = (d = r == null ? void 0 : r.deviceOption) == null ? void 0 : d.wireConfig) == null ? void 0 : l[s ? "out" : "in"]) == null ? void 0 : b.connections) == null ? void 0 : j.map(n => ({
                    id: n.id,
                    name: n.name,
                    minimumRoleLevel: n.minimumRoleLevel,
                    maximumRoleLevel: n.maximumRoleLevel
                }))) || []).filter(n => F(n.minimumRoleLevel, n.maximumRoleLevel)).map(n => ({
                    id: n.id,
                    name: n.name
                }))
            }, [p, s]);
        return e.jsxs(me, {
            onClick: q,
            children: [e.jsx(de, {
                children: e.jsx(le, {
                    style: {
                        color: N.White
                    },
                    level: 4,
                    onClick: u,
                    children: J(p)
                })
            }), c ? s ? e.jsx(ne, {}) : e.jsx(se, {}) : e.jsxs(e.Fragment, {
                children: [e.jsx(pe, {
                    children: e.jsx(f.Text, {
                        italic: !0,
                        children: s ? "When this event occurs..." : "Run this action..."
                    })
                }), e.jsx(Y, {
                    direction: "vertical",
                    size: 10,
                    className: "maxWidth",
                    children: x.map(m => {
                        const d = m.id === (s ? t.wire.startConnection : t.wire.endConnection);
                        return e.jsx(ie, {
                            readOnly: a,
                            onClick: () => {
                                s ? t.modifyWire(l => ({
                                    ...l,
                                    startConnection: d ? void 0 : m.id
                                })) : t.modifyWire(l => ({
                                    ...l,
                                    endConnection: d ? void 0 : m.id
                                }))
                            },
                            selected: d,
                            children: m.name
                        }, m.id)
                    })
                })]
            })]
        })
    }),
    me = i.div.attrs({
        className: "flex-column vc scroll-y light-shadow"
    })`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`,
    de = i.div`
  text-align: center;
  margin-bottom: 2px;
`,
    le = i(f.Title)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,
    pe = i(v).attrs({
        className: "maxWidth"
    })`
  margin-bottom: 20px;
  text-align: center;
`,
    O = "rgba(255,255,255,0.8)",
    xe = () => e.jsxs(ue, {
        children: [e.jsx(he, {}), e.jsx(ge, {
            children: e.jsx(C, {
                name: "fas fa-caret-right"
            })
        })]
    }),
    ue = i(v)`
  flex: 1;
  padding: 0px 30px;
`,
    he = i.div`
  height: 4px;
  flex: 1;
  background: ${O};
`,
    ge = i.div`
  flex-shrink: 0;
  color: ${O};
  font-size: 42px;
  line-height: 1;
`,
    $t = E(() => {
        const {
            world: {
                wires: t
            }
        } = $(), [a, s] = h.useState(t.wires.get(g.me.editing.wire.currentlyEditedWireId)), [p, r] = h.useState(a !== void 0), c = () => {
            W(y.none)
        };
        te(c, 25, !p), M(_.Input.Keyboard.KeyCodes.ESC, c, [c]), P();
        const u = x => {
            if (B(), t.wires.has(a.id)) {
                const o = x(a);
                Z({
                    event: ee.CONFIGURE_WIRE,
                    wire: o
                }), U(o), K({
                    startDevice: o.startDevice,
                    endDevice: o.endDevice,
                    startConnection: o.startConnection,
                    endConnection: o.endConnection
                })
            }
        };
        return h.useEffect(() => {
            const x = D(() => g.world.wires.wires.get(g.me.editing.wire.currentlyEditedWireId), o => {
                o ? (r(!0), s(o)) : r(!1)
            });
            return () => x()
        }, []), a ? e.jsx(V, {
            className: "maxAll",
            children: e.jsx(fe, {
                onClick: c,
                children: e.jsxs(ve, {
                    children: [e.jsx(k, {
                        wire: a,
                        side: "left",
                        modifyWire: u
                    }), e.jsx(xe, {}), e.jsx(k, {
                        wire: a,
                        side: "right",
                        modifyWire: u
                    }), e.jsx(z, {})]
                })
            })
        }) : null
    }),
    S = .2,
    fe = i(I.div).attrs({
        className: "maxAll flex-center",
        initial: {
            background: "rgba(0,0,0,0)"
        },
        animate: {
            background: "rgba(0,0,0,0.68)"
        },
        exit: {
            background: "rgba(0,0,0,0)"
        },
        transition: {
            duration: S
        }
    })`
  position: relative;
`,
    ve = i(I.div).attrs({
        className: "maxAll flex vc",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: S
        }
    })`
  padding: 25px;
  backdrop-filter: blur(3px);
`;
export {
    $t as
    default
};