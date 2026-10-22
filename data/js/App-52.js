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
    r
} from "./SixteenByNineScaler.js";
import {
    t as i
} from "./jsx-runtime.js";
import {
    c as a,
    l as o,
    s,
    y as c
} from "./_index.js";
import {
    t as l
} from "./AccessibleAnchor.js";
import {
    r as u
} from "./mobxreact.esm.js";
import {
    t as ee
} from "./FontAwesomeIcon.js";
import {
    i as d,
    t as f
} from "./Centered.js";
import {
    n as p,
    t as m
} from "./Button-2.js";
import {
    t as h
} from "./lodash.js";
import {
    f as g,
    t as _
} from "./motion.js";
import {
    t as v
} from "./phaser.js";
import {
    u as y
} from "./FixPhaserBootProcess.js";
import {
    i as b,
    s as x,
    t as S
} from "./stores-2.js";
import {
    t as C
} from "./useStore.js";
import {
    t as w
} from "./FetchMyId.js";
import {
    t as T
} from "./CharacterType.js";
import {
    At as E,
    L as D,
    it as O,
    ot as k,
    tt as A
} from "./App-42.js";
import {
    Container as j,
    Content as M,
    containerAnim as N,
    contentAnim as P
} from "./App-53.js";
var F = e(t()),
    I = e(v()),
    L = () => {
        S.session.customTeams.characterToTeamMap.clear()
    },
    R = h(),
    z = () => {
        let e = !1;
        y().allowGameOwnerToSpectate && S.session.ownerRole === b.spectator && (e = !0);
        let t = w(),
            n = [];
        return S.characters.characters.forEach(r => {
            r.type === T.player && (e && r.id === t || n.push(r))
        }), n
    },
    B = () => {
        let e = (0, R.shuffle)(z()),
            t = A(),
            n = 0;
        e.forEach(e => {
            S.session.customTeams.characterToTeamMap.has(e.id) || (S.session.customTeams.characterToTeamMap.set(e.id, t[n].id), n++, n >= t.length && (n = 0))
        })
    },
    V = i(),
    H = () => (0, V.jsxs)(U, {
        children: [(0, V.jsx)(W, {
            children: `Customize teams`
        }), (0, V.jsx)(G, {
            children: `Click a player's name to add them to that team. Unassigned players are assigned randomly at game start.`
        }), (0, V.jsxs)(n, {
            style: {
                fontFamily: a.ProductSans,
                marginTop: 18
            },
            size: 15,
            children: [(0, V.jsx)(m, {
                size: `small`,
                onClick: B,
                ariaLabel: `Split teams evenly`,
                children: `Split evenly`
            }), (0, V.jsx)(m, {
                size: `small`,
                onClick: L,
                ariaLabel: `Clear team assignments`,
                children: `Clear team assignments`
            })]
        })]
    }),
    U = o.div``,
    W = o.div`
  font-size: 32px;
  text-transform: uppercase;
  font-family: ${a.FugazOne};
  line-height: 1;
`,
    G = o.div`
  font-size: 16px;
  margin-top: 7px;
  color: rgba(255, 255, 255, 0.9);
`,
    K = e => (0, V.jsx)(_.div, {
        layout: !0,
        transition: {
            duration: .2
        },
        onClick: e.onSelect,
        children: (0, V.jsxs)(q, {
            selected: e.selected,
            children: [e.selected ? (0, V.jsx)(`div`, {
                style: {
                    marginRight: 4
                },
                children: (0, V.jsx)(ee, {
                    name: `fas fa-check`
                })
            }) : null, (0, V.jsx)(`span`, {
                children: e.name
            })]
        })
    }),
    q = o(f)`
  font-family: ${a.ProductSans};
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 14px;
  background: ${e=>e.selected?`green`:`rgba(255,255,255,0.1)`};
  cursor: pointer;
  will-change: transform, background;
  transition: background 0.1s, transform 0.2s;
  &:hover {
    transform: scale(1.05);
    background: ${e=>e.selected?`green`:`rgba(255,255,255,0.2)`};
  }
`,
    J = e => {
        let {
            session: {
                customTeams: t
            }
        } = C(), n = z(), r = [];
        n.forEach(n => {
            let i = t.characterToTeamMap.get(n.id);
            i && i !== e || r.push({
                id: n.id,
                name: n.name,
                selected: i === e
            })
        });
        let i = r.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            a = i.filter(e => e.selected),
            o = i.filter(e => !e.selected);
        return a.concat(o)
    },
    Y = (e, t) => {
        t ? S.session.customTeams.characterToTeamMap.has(e) ? S.session.customTeams.characterToTeamMap.delete(e) : S.session.customTeams.characterToTeamMap.set(e, t) : S.session.customTeams.characterToTeamMap.delete(e)
    },
    X = e => {
        z().forEach(t => {
            S.session.customTeams.characterToTeamMap.has(t.id) || S.session.customTeams.characterToTeamMap.set(t.id, e)
        })
    },
    Z = u(e => {
        let t = J(e.id),
            r = t.filter(e => e.selected).length;
        return (0, V.jsxs)(Q, {
            children: [(0, V.jsxs)($, {
                children: [(0, V.jsx)(te, {
                    children: e.name
                }), (0, V.jsx)(`div`, {
                    children: r === t.length ? null : (0, V.jsx)(l, {
                        style: {
                            color: p.Yellow,
                            fontFamily: a.ProductSans,
                            fontStyle: `italic`,
                            textDecoration: `underline`
                        },
                        onClick: () => {
                            X(e.id)
                        },
                        children: `Assign all remaining players`
                    })
                })]
            }), (0, V.jsx)(n, {
                wrap: !0,
                direction: `horizontal`,
                style: {
                    marginTop: 22
                },
                children: t.map(t => (0, V.jsx)(K, {
                    name: t.name,
                    selected: t.selected,
                    onSelect: () => {
                        Y(t.id, e.id)
                    }
                }, e.id + t.id))
            })]
        })
    }),
    Q = o.div.attrs({
        className: `maxWidth light-shadow`
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 6px;
`,
    $ = o(d).attrs({
        className: `maxWidth between`
    })``,
    te = o.div`
  font-family: ${a.ProductSans};
  font-weight: ${s.Bold};
  font-size: 18px;
`,
    ne = () => {
        let e = A();
        return (0, V.jsxs)(re, {
            children: [(0, V.jsx)(H, {}), (0, V.jsx)(c, {}), (0, V.jsx)(n, {
                className: `maxWidth`,
                direction: `vertical`,
                size: 15,
                children: e.map(e => (0, V.jsx)(Z, {
                    id: e.id,
                    name: e.name
                }, e.id))
            })]
        })
    },
    re = o.div.attrs({
        className: `maxAll scroll-y`
    })`
  padding: 35px;
`,
    ie = () => {
        let e = g(),
            t = () => {
                E(x.startScreen)
            },
            n = F.useMemo(() => e ? .3 : .2, [e]);
        return k(I.default.Input.Keyboard.KeyCodes.ESC, t, [t]), O(), (0, V.jsxs)(ae, {
            children: [(0, V.jsx)(j, {
                initial: N.out,
                animate: N.in,
                exit: N.out,
                transition: {
                    duration: n,
                    ease: `easeOut`
                },
                onClick: t,
                children: (0, V.jsx)(oe, {
                    initial: P.out,
                    animate: P.in,
                    exit: P.out,
                    transition: {
                        duration: n,
                        ease: `easeOut`
                    },
                    onClick: e => e.stopPropagation(),
                    children: (0, V.jsx)(ne, {})
                })
            }), (0, V.jsx)(D, {
                onClick: t
            })]
        })
    },
    ae = o(r).attrs({
        className: `maxAll`
    })``,
    oe = o(M)`
  max-width: 1000px;
  height: 90%;
`;
export {
    ie as
    default
};