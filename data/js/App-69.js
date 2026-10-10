import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./space.js";
import {
    t as r
} from "./typography.js";
import {
    r as i
} from "./SixteenByNineScaler.js";
import {
    m as a
} from "./decorate.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    n as s
} from "./AnimatePresence.js";
import {
    l as c,
    n as l,
    s as u
} from "./_index.js";
import {
    r as d
} from "./mobxreact.esm.js";
import {
    t as f
} from "./FontAwesomeIcon.js";
import {
    i as p,
    n as m,
    t as h
} from "./Centered.js";
import {
    n as g
} from "./Button.js";
import {
    t as _
} from "./motion.js";
import {
    t as v
} from "./phaser.js";
import {
    t as y,
    y as b
} from "./stores-2.js";
import {
    t as x
} from "./useStore.js";
import {
    t as S
} from "./setCurrentAction.js";
import {
    r as C
} from "./isModeType.js";
import {
    n as w
} from "./TutorialConsts.js";
import {
    i as ee,
    n as T
} from "./ActionButton.js";
import {
    t as E
} from "./PlaceWire.js";
import {
    t as D
} from "./canEditOnMap.js";
import {
    t as O
} from "./playClickSound.js";
import {
    t as k
} from "./IsRoleLevelBetween.js";
import {
    L as A,
    it as j,
    n as M,
    ot as N,
    r as P
} from "./App-42.js";
import {
    t as F
} from "./StopPropagation.js";
import {
    t as I
} from "./FetchDeviceName.js";
var L = e(v()),
    R = e(t()),
    z = o(),
    te = e => (0, z.jsxs)(B, {
        onClick: e.readOnly ? void 0 : e.onClick,
        readOnly: e.readOnly,
        children: [(0, z.jsx)(V, {
            selected: e.selected,
            children: e.selected ? (0, z.jsx)(f, {
                name: `fas fa-check`
            }) : null
        }), (0, z.jsx)(r.Text, {
            style: {
                fontWeight: e.selected ? u.Bold : u.Normal
            },
            children: e.children
        })]
    }),
    B = c(p)`
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.23s ease;
  cursor: ${e=>e.readOnly?`not-allowed`:`pointer`};
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    V = c(h)`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${e=>e.selected?`#269900`:`transparent`};
  flex-shrink: 0;
  transition: background 0.18s ease;
`,
    H = e => (0, z.jsxs)(G, {
        children: [(0, z.jsx)(K, {
            children: (0, z.jsx)(f, {
                name: `fas fa-plug`
            })
        }), (0, z.jsx)(r.Text, {
            style: {
                color: g.White
            },
            children: e.children
        })]
    }),
    U = () => (0, z.jsx)(H, {
        children: `When the wire repeater receives a pulse...`
    }),
    W = () => (0, z.jsx)(H, {
        children: `Repeat the wire pulse!`
    }),
    G = c(m).attrs({
        className: `maxWidth`
    })`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`,
    K = c.div`
  font-size: 24px;
  margin-bottom: 6px;
`,
    q = d(e => {
        var t;
        let i = !D() || !P(),
            a = e.side === `left`,
            o = a ? e.wire.startDevice : e.wire.endDevice,
            s = C(o),
            c = (s == null || (t = s.deviceOption) == null ? void 0 : t.id) === w.wireRepeater,
            u = () => {
                s && (y.me.editing.device.currentlyEditedDevice = {
                    id: s.id,
                    deviceOptionId: s.deviceOption.id
                }, S(b.editingDevice))
            },
            d = R.useMemo(() => {
                var e;
                return ((s == null || (e = s.deviceOption) == null || (e = e.wireConfig) == null || (e = e[a ? `out` : `in`]) == null || (e = e.connections) == null ? void 0 : e.map(e => ({
                    id: e.id,
                    name: e.name,
                    minimumRoleLevel: e.minimumRoleLevel,
                    maximumRoleLevel: e.maximumRoleLevel
                }))) || []).filter(e => k(e.minimumRoleLevel, e.maximumRoleLevel)).map(e => ({
                    id: e.id,
                    name: e.name
                }))
            }, [o, a]);
        return (0, z.jsxs)(J, {
            onClick: F,
            children: [(0, z.jsx)(Y, {
                children: (0, z.jsx)(X, {
                    style: {
                        color: l.White
                    },
                    level: 4,
                    onClick: u,
                    children: I(o)
                })
            }), c ? a ? (0, z.jsx)(U, {}) : (0, z.jsx)(W, {}) : (0, z.jsxs)(z.Fragment, {
                children: [(0, z.jsx)(Z, {
                    children: (0, z.jsx)(r.Text, {
                        italic: !0,
                        children: a ? `When this event occurs...` : `Run this action...`
                    })
                }), (0, z.jsx)(n, {
                    direction: `vertical`,
                    size: 10,
                    className: `maxWidth`,
                    children: d.map(t => {
                        let n = t.id === (a ? e.wire.startConnection : e.wire.endConnection);
                        return (0, z.jsx)(te, {
                            readOnly: i,
                            onClick: () => {
                                a ? e.modifyWire(e => ({
                                    ...e,
                                    startConnection: n ? void 0 : t.id
                                })) : e.modifyWire(e => ({
                                    ...e,
                                    endConnection: n ? void 0 : t.id
                                }))
                            },
                            selected: n,
                            children: t.name
                        }, t.id)
                    })
                })]
            })]
        })
    }),
    J = c.div.attrs({
        className: `flex-column vc scroll-y light-shadow`
    })`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`,
    Y = c.div`
  text-align: center;
  margin-bottom: 2px;
`,
    X = c(r.Title)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,
    Z = c(h).attrs({
        className: `maxWidth`
    })`
  margin-bottom: 20px;
  text-align: center;
`,
    Q = `rgba(255,255,255,0.8)`,
    ne = () => (0, z.jsxs)(re, {
        children: [(0, z.jsx)(ie, {}), (0, z.jsx)(ae, {
            children: (0, z.jsx)(f, {
                name: `fas fa-caret-right`
            })
        })]
    }),
    re = c(h)`
  flex: 1;
  padding: 0px 30px;
`,
    ie = c.div`
  height: 4px;
  flex: 1;
  background: ${Q};
`,
    ae = c.div`
  flex-shrink: 0;
  color: ${Q};
  font-size: 42px;
  line-height: 1;
`,
    oe = d(() => {
        let {
            world: {
                wires: e
            }
        } = x(), [t, n] = R.useState(e.wires.get(y.me.editing.wire.currentlyEditedWireId)), [r, o] = R.useState(t !== void 0), c = () => {
            S(b.none)
        };
        s(c, 25, !r), N(L.default.Input.Keyboard.KeyCodes.ESC, c, [c]), j();
        let l = n => {
            if (O(), e.wires.has(t.id)) {
                let e = n(t);
                T({
                    event: ee.CONFIGURE_WIRE,
                    wire: e
                }), E(e, !0), M({
                    startDevice: e.startDevice,
                    endDevice: e.endDevice,
                    startConnection: e.startConnection,
                    endConnection: e.endConnection
                })
            }
        };
        return R.useEffect(() => {
            let e = a(() => y.world.wires.wires.get(y.me.editing.wire.currentlyEditedWireId), e => {
                e ? (o(!0), n(e)) : o(!1)
            });
            return () => e()
        }, []), t ? (0, z.jsx)(i, {
            className: `maxAll`,
            children: (0, z.jsx)(se, {
                onClick: c,
                children: (0, z.jsxs)(ce, {
                    children: [(0, z.jsx)(q, {
                        wire: t,
                        side: `left`,
                        modifyWire: l
                    }), (0, z.jsx)(ne, {}), (0, z.jsx)(q, {
                        wire: t,
                        side: `right`,
                        modifyWire: l
                    }), (0, z.jsx)(A, {})]
                })
            })
        }) : null
    }),
    $ = .2,
    se = c(_.div).attrs({
        className: `maxAll flex-center`,
        initial: {
            background: `rgba(0,0,0,0)`
        },
        animate: {
            background: `rgba(0,0,0,0.68)`
        },
        exit: {
            background: `rgba(0,0,0,0)`
        },
        transition: {
            duration: $
        }
    })`
  position: relative;
`,
    ce = c(_.div).attrs({
        className: `maxAll flex vc`,
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
            duration: $
        }
    })`
  padding: 25px;
  backdrop-filter: blur(3px);
`;
export {
    oe as
    default
};