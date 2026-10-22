import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t,
    x as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    r as i
} from "./InfoCircleFilled.js";
import {
    t as a
} from "./drawer.js";
import {
    r as o
} from "./SixteenByNineScaler.js";
import {
    t as s
} from "./jsx-runtime.js";
import {
    c,
    l,
    s as u,
    u as d
} from "./_index.js";
import {
    r as f
} from "./mobxreact.esm.js";
import {
    t as p
} from "./GetAssetPath.js";
import {
    n as m,
    t as h
} from "./Button-2.js";
import {
    t as ee
} from "./playSound.js";
import {
    f as g,
    g as _,
    i as v,
    l as te,
    m as y,
    o as b,
    t as x
} from "./motion.js";
import {
    t as ne
} from "./use-motion-value.js";
import {
    t as S
} from "./use-transform.js";
import {
    t as re
} from "./phaser.js";
import {
    o as ie,
    s as ae,
    u as C
} from "./FixPhaserBootProcess.js";
import {
    t as w
} from "./stores-2.js";
import {
    t as T
} from "./useStore.js";
import {
    n as E,
    t as D
} from "./Send.js";
import {
    t as O
} from "./FetchItemById.js";
import {
    $ as k,
    G as A,
    J as j,
    L as oe,
    Q as M,
    W as N,
    X as P,
    Y as F,
    Z as I,
    et as L,
    ot as R,
    q as z
} from "./App-42.js";
import {
    t as B
} from "./InventoryItemNameWithCount.js";
var V = e(r(), 1),
    H = (0, V.createContext)(null);

function U(e, t, n, r) {
    if (!r) return e;
    let i = e.findIndex(e => e.value === t);
    if (i === -1) return e;
    let a = r > 0 ? 1 : -1,
        o = e[i + a];
    if (!o) return e;
    let s = e[i],
        c = o.layout,
        l = v(c.min, c.max, .5);
    return a === 1 && s.layout.max + n > l || a === -1 && s.layout.min + n < l ? te(e, i, i + a) : e
}

function W({
    children: e,
    as: t = `ul`,
    axis: n = `y`,
    onReorder: r,
    values: i,
    ...a
}, o) {
    let s = _(() => x(t)),
        c = [],
        l = (0, V.useRef)(!1);
    b(!!i, `Reorder.Group must be provided a values prop`);
    let u = {
        axis: n,
        registerItem: (e, t) => {
            t && c.findIndex(t => e === t.value) === -1 && (c.push({
                value: e,
                layout: t[n]
            }), c.sort(q))
        },
        updateOrder: (e, t, n) => {
            if (l.current) return;
            let a = U(c, e, t, n);
            c !== a && (l.current = !0, r(a.map(K).filter(e => i.indexOf(e) !== -1)))
        }
    };
    return (0, V.useEffect)(() => {
        l.current = !1
    }), V.createElement(s, {
        ...a,
        ref: o
    }, V.createElement(H.Provider, {
        value: u
    }, e))
}
var G = (0, V.forwardRef)(W);

function K(e) {
    return e.value
}

function q(e, t) {
    return e.layout.min - t.layout.min
}

function J(e, t = 0) {
    return y(e) ? e : ne(t)
}

function se({
    children: e,
    style: t = {},
    value: n,
    as: r = `li`,
    onDrag: i,
    layout: a = !0,
    ...o
}, s) {
    let c = _(() => x(r)),
        l = (0, V.useContext)(H),
        u = {
            x: J(t.x),
            y: J(t.y)
        },
        d = S([u.x, u.y], ([e, t]) => e || t ? 1 : `unset`),
        f = (0, V.useRef)(null);
    b(!!l, `Reorder.Item must be a child of Reorder.Group`);
    let {
        axis: p,
        registerItem: m,
        updateOrder: h
    } = l;
    return (0, V.useEffect)(() => {
        m(n, f.current)
    }, [l]), V.createElement(c, {
        drag: p,
        ...o,
        dragSnapToOrigin: !0,
        style: {
            ...t,
            x: u.x,
            y: u.y,
            zIndex: d
        },
        layout: a,
        onDrag: (e, t) => {
            let {
                velocity: r
            } = t;
            r[p] && h(n, u[p].get(), r[p]), i && i(e, t)
        },
        onLayoutMeasure: e => {
            f.current = e
        },
        ref: s
    }, e)
}
var Y = {
        Group: G,
        Item: (0, V.forwardRef)(se)
    },
    X = s(),
    ce = () => (0, X.jsx)(le, {
        children: `You have no items/resources in your inventory.`
    }),
    le = l.div.attrs({
        className: `maxWidth`
    })`
  text-align: center;
  font-family: ${c.ProductSans};
  font-weight: ${u.Bold};
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
  padding: 30px;
`,
    ue = f(e => {
        let n = V.useRef(null),
            [r, i, a] = t(!1),
            [o, s] = V.useState(0),
            c = V.useMemo(() => r ? `grabbing` : e.empty ? `grab` : `pointer`, [e.empty, r]);
        return (0, X.jsx)(de, {
            ref: n,
            style: {
                cursor: c
            },
            onMouseDown: () => {
                var e;
                i(), s((e = n.current) == null || (e = e.getBoundingClientRect()) == null ? void 0 : e.x)
            },
            onMouseUp: () => {
                var t;
                let r = (t = n.current) == null || (t = t.getBoundingClientRect()) == null ? void 0 : t.x;
                if (o === r) {
                    var i;
                    (i = e.onSelect) == null || i.call(e)
                }
                a()
            },
            children: e.empty ? (0, X.jsx)(fe, {}) : (0, X.jsxs)(pe, {
                style: {
                    background: L(e.rarity)
                },
                children: [(0, X.jsx)(me, {
                    src: e.previewImage
                }), I({
                    durability: e.durability
                }) ? (0, X.jsx)(P, {
                    durability: e.durability
                }) : null, k({
                    count: e.count,
                    itemId: e.id
                }) ? (0, X.jsx)(he, {
                    children: M({
                        count: e.count,
                        itemId: e.id
                    })
                }) : null]
            })
        })
    }),
    de = l.div`
  height: 90px;
  width: 90px;
  margin-right: 10px !important;
  &:last-child {
    margin-right: 0px;
  }
`,
    fe = l.div.attrs({
        className: `maxAll`
    })`
  border-radius: 4px;
  border: 2px dashed rgba(255, 255, 255, 0.25);
  &:hover {
    border: 2px dashed rgba(255, 255, 255, 0.5);
  }
`,
    pe = l.div.attrs({
        className: `maxAll`
    })`
  position: relative;
  border-radius: 4px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  &:hover {
    border: 3px solid rgba(255, 255, 0, 0.75);
  }
`,
    me = l.img`
  padding: 16px;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.65));
`,
    he = l.div`
  position: absolute;
  font-family: ${c.FugazOne};
  bottom: 3px;
  right: 5px;
  font-size: 12px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  line-height: 1;
`,
    ge = e => {
        D(E.setInteractiveSlotsOrder, {
            order: e.order
        })
    },
    _e = f(e => {
        let {
            me: {
                inventory: t
            }
        } = T(), n = z();
        return n.length === 0 ? null : (0, X.jsxs)(ve, {
            children: [(0, X.jsx)(ye, {
                children: `Items`
            }), (0, X.jsx)(be, {
                axis: `x`,
                values: n,
                onReorder: e => {
                    let n = e.map(e => e.slotNumber);
                    for (let e = n.length + 1; e <= 5; e++) n.push(e);
                    t.interactiveSlotsOrder.replace(n), ge({
                        order: n
                    })
                },
                children: n.map(t => (0, X.jsx)(Y.Item, {
                    value: t,
                    transition: {
                        duration: .35,
                        ease: `easeOut`
                    },
                    children: (0, X.jsx)(ue, {
                        id: t.id,
                        empty: t.empty,
                        previewImage: t.previewImage,
                        rarity: t.rarity,
                        count: t.count,
                        durability: t.durability,
                        onSelect: t.empty ? void 0 : () => e.select(t.slotNumber)
                    })
                }, t.slotNumber + `-item`))
            })]
        })
    }),
    ve = l.div`
  padding: 0px 30px;
`,
    ye = l.div`
  font-family: ${c.FugazOne};
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 6px;
`,
    be = l(Y.Group).attrs({
        className: `flex vc`
    })`
  margin-top: 10px;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`,
    xe = e => {
        let t = V.useMemo(() => {
            let t = e.name;
            return e.amount > 1 && (t += ` (${n(e.amount)})`), t
        }, [e.name, e.amount]);
        return (0, X.jsxs)(Se, {
            onClick: e.onSelect,
            children: [(0, X.jsx)(Ce, {
                src: e.image
            }), (0, X.jsx)(we, {
                children: t
            })]
        })
    },
    Se = l.div.attrs({
        className: `flex vc`
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:last-child {
    margin-bottom: 0px;
  }
`,
    Ce = l.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`,
    we = l.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
`,
    Te = f(e => {
        let {
            me: {
                inventory: t
            },
            worldOptions: n
        } = T(), r = [];
        return t.slots.forEach((e, t) => {
            let i = n.itemOptions.find(e => e.id === t);
            i && !j(i.id) && !F(i.id) && r.push({
                id: i.id,
                previewImage: i.previewImage,
                name: i.name,
                amount: e.amount
            })
        }), (0, X.jsxs)(Ee, {
            children: [(0, X.jsx)(De, {
                children: `Resources`
            }), r.map(t => (0, X.jsx)(xe, {
                onSelect: () => e.select(t.id),
                image: t.previewImage,
                name: A(t.id),
                amount: t.amount
            }, t.id + `-resource`))]
        })
    }),
    Ee = l.div`
  font-family: ${c.FugazOne};
  line-height: 1;
  text-transform: uppercase;
  padding: 0px 30px;
`,
    De = l.div`
  font-size: 24px;
  margin-bottom: 14px;
`,
    Oe = e => j(e) ? !w.me.zoneDropOverrides.allowWeaponDrop : F(e) ? !w.me.zoneDropOverrides.allowItemDrop : !w.me.zoneDropOverrides.allowResourceDrop,
    Z = e => {
        D(E.dropItem, {
            amount: e.amount,
            itemId: e.itemId,
            interactiveSlotNumber: e.interactiveSlotNumber
        })
    },
    ke = () => {
        ee({
            path: p(`sounds/core/dropItem.mp3`),
            volume: ae({
                volume: .45,
                type: ie.soundEffect
            })
        })
    },
    Ae = e => {
        let {
            info: t
        } = e, {
            slotNumber: n,
            itemId: r,
            count: i
        } = t;
        if (Oe(r)) return null;
        let a = t => {
            ke(), n ? Z({
                interactiveSlotNumber: n,
                amount: t
            }) : r && Z({
                itemId: r,
                amount: t
            }), e.closeModal()
        };
        return (0, X.jsxs)(je, {
            children: [(0, X.jsx)(h, {
                onClick: () => a(i),
                ariaLabel: `Drop`,
                children: i === 1 ? `Drop` : `Drop All`
            }), i > 1 ? (0, X.jsx)(h, {
                onClick: () => a(Math.ceil(i / 2)),
                style: {
                    marginLeft: 10
                },
                ariaLabel: `Drop Half`,
                children: `Drop Half`
            }) : null]
        })
    },
    je = l.div.attrs({
        className: `flex vc`
    })`
  margin-top: 15px;
`,
    Me = e => {
        let {
            info: t
        } = e, {
            name: n,
            count: r,
            description: i,
            previewImage: a
        } = t;
        return (0, X.jsxs)(Ne, {
            children: [(0, X.jsx)(Pe, {
                src: a
            }), (0, X.jsxs)(Fe, {
                children: [(0, X.jsx)(Ie, {
                    children: B(n, r)
                }), (0, X.jsx)(Le, {
                    children: i
                }), (0, X.jsx)(Ae, {
                    info: t,
                    closeModal: e.closeModal
                })]
            })]
        })
    },
    Ne = l.div.attrs({
        className: `maxWidth flex vc`
    })``,
    Pe = l.img`
  height: 80px;
  width: 80px;
`,
    Fe = l.div`
  line-height: 1;
  margin-left: 30px;
`,
    Ie = l.div`
  font-family: ${c.FugazOne};
  text-transform: uppercase;
  font-size: 28px;
`,
    Le = l.div`
  font-size: 18px;
  margin-top: 9px;
  color: rgba(255, 255, 255, 0.8);
`,
    Re = f(e => {
        let {
            open: t,
            close: n,
            selectedSlotNumber: r,
            selectedItemId: o
        } = e, {
            me: {
                inventory: s
            }
        } = T(), [c, l] = V.useState(), u = (() => {
            if (!r && !o) return null;
            if (r) {
                let e = s.interactiveSlots.get(`${r}`);
                if (!e) return null;
                let t = O(e.itemId);
                return t ? {
                    slotNumber: r,
                    itemId: e.itemId,
                    name: A(e.itemId),
                    count: e.count,
                    description: N(e.itemId),
                    previewImage: t.previewImage
                } : null
            }
            if (o) {
                let e = s.slots.get(o);
                if (!e) return null;
                let t = O(o);
                return t ? {
                    itemId: o,
                    name: A(o),
                    count: e.amount,
                    description: N(o),
                    previewImage: t.previewImage
                } : null
            }
            return null
        })();
        return V.useEffect(() => {
            u && l(u), u || n()
        }, [u == null ? void 0 : u.itemId, u == null ? void 0 : u.slotNumber, u == null ? void 0 : u.count]), (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(a, {
                open: t,
                onClose: n,
                placement: `bottom`,
                rootClassName: `selected-item-drawer`,
                closeIcon: (0, X.jsx)(i, {
                    style: {
                        color: m.White
                    }
                }),
                height: `auto`,
                closable: !0,
                bodyStyle: {
                    padding: 40,
                    paddingTop: 35
                },
                children: (0, X.jsx)(Be, {
                    children: c ? (0, X.jsx)(Me, {
                        info: c,
                        closeModal: e.closeModal
                    }) : null
                })
            }), (0, X.jsx)(ze, {})]
        })
    }),
    ze = d`
  .selected-item-drawer .ant-drawer-content {
    background: rgba(48, 28, 86, 0.8) !important;
    backdrop-filter: blur(3px);
  }
`,
    Be = l.div.attrs({
        className: `maxWidth`
    })`
  color: ${m.White};
  font-family: ${c.ProductSans};
`,
    Ve = f(e => {
        let {
            me: {
                inventory: n
            }
        } = T(), [r, i, a] = t(!1), [o, s] = V.useState(), [c, l] = V.useState(0), u = e => {
            l(0), s(e), i()
        }, d = e => {
            s(void 0), l(e), i()
        };
        return (0, X.jsxs)(X.Fragment, {
            children: [(() => {
                let e = [];
                n.slots.forEach((t, n) => {
                    t.amount > 0 && e.push(n)
                });
                let t = e.some(e => !F(e) && !j(e)),
                    r = C().interactiveItemsSlots > 0;
                return !t && !r ? (0, X.jsx)(ce, {}) : (0, X.jsxs)(X.Fragment, {
                    children: [r ? (0, X.jsx)(_e, {
                        select: d
                    }) : null, r && t ? (0, X.jsx)(`div`, {
                        style: {
                            height: 30,
                            flexShrink: 0
                        }
                    }) : null, t ? (0, X.jsx)(Te, {
                        select: u
                    }) : null]
                })
            })(), (0, X.jsx)(Re, {
                selectedSlotNumber: c,
                selectedItemId: o,
                open: r,
                close: a,
                closeModal: e.close
            })]
        })
    }),
    Q = {
        out: {
            y: `100%`,
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    },
    He = e => {
        let t = g();
        return (0, X.jsx)(Ue, {
            onClick: e => {
                e.stopPropagation()
            },
            initial: Q.out,
            animate: Q.in,
            exit: Q.out,
            transition: {
                duration: t ? .3 : .2,
                ease: `easeOut`
            },
            children: (0, X.jsx)(Ve, {
                close: e.close
            })
        })
    },
    Ue = l(x.div).attrs({
        className: `medium-shadow flex-column scroll-y`
    })`
  background: rgba(48, 28, 86, 0.9);
  backdrop-filter: blur(4px);
  color: ${m.White};
  width: 90%;
  max-width: 800px;
  height: auto;
  max-height: 80%;
  border-radius: 10px;
  padding: 30px 0px;
`,
    We = e(re()),
    $ = {
        out: {
            background: `rgba(0,0,0,0)`
        },
        in: {
            background: `rgba(0,0,0,0.6)`
        }
    },
    Ge = e => {
        let t = g(),
            n = () => e.setToHomeScreen();
        return R(We.default.Input.Keyboard.KeyCodes.ESC, n, [n]), (0, X.jsxs)(o, {
            children: [(0, X.jsx)(Ke, {
                onClick: n,
                initial: $.out,
                animate: $.in,
                exit: $.out,
                transition: {
                    duration: t ? .3 : .2,
                    ease: `easeOut`
                },
                children: (0, X.jsx)(He, {
                    close: n
                })
            }), (0, X.jsx)(oe, {
                onClick: n
            })]
        })
    },
    Ke = l(x.div).attrs({
        className: `maxAll flex-center flex-column`
    })`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
export {
    Ge as
    default
};