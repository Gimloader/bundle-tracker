import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t,
    w as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    t as i
} from "./space.js";
import {
    Q as a
} from "./Paths.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    c as s,
    d as c,
    f as l,
    l as u,
    n as d,
    r as f,
    t as p,
    u as m
} from "./ShopItem.js";
import {
    t as h
} from "./useQuery.js";
import {
    c as g,
    l as _,
    n as v,
    s as y
} from "./_index.js";
import {
    t as b
} from "./AccessibleAnchor.js";
import {
    t as x
} from "./FontAwesomeIcon.js";
import {
    u as S
} from "./Navigation.js";
import {
    n as C
} from "./Centered.js";
import {
    n as w,
    t as T
} from "./SeasonTicketName.js";
import {
    t as E
} from "./OwnsSeasonTicket.js";
import {
    n as D,
    t as O
} from "./App-46.js";
import {
    l as k,
    o as A,
    t as j
} from "./App-74.js";
import {
    t as M
} from "./Button-2.js";
import {
    n as N,
    r as P,
    t as F
} from "./Benefits.js";
var I = e(r()),
    L = o(),
    R = e => (0, L.jsxs)(z, {
        children: [(0, L.jsx)(ee, {}), (0, L.jsxs)(B, {
            children: [w.seasonName, ` `, w.seasonNumber]
        }), (0, L.jsx)(V, {
            children: T.name
        }), E() ? (0, L.jsxs)(H, {
            children: [`You already own this `, T.name, `. Thanks so much for your support!`]
        }) : (0, L.jsx)(b, {
            to: a,
            style: {
                textDecoration: `none`
            },
            target: e.pageMode ? void 0 : `_blank`,
            children: (0, L.jsxs)(M, {
                style: {
                    fontFamily: g.SFPro,
                    marginTop: 15
                },
                customFontWeight: y.Bold,
                customColor: `#1677ff`,
                ariaLabel: `Purchase ${T.name}`,
                children: [(0, L.jsx)(x, {
                    name: `fal fa-sparkles`,
                    style: {
                        marginRight: 10
                    }
                }), `Purchase `, T.name]
            })
        }), (0, L.jsxs)(U, {
            children: [`Season ends `, N, `.`]
        })]
    }),
    z = _(C).attrs({
        className: `maxWidth medium-shadow`
    })`
  font-family: ${g.FugazOne};
  text-transform: uppercase;
  padding: 60px 30px;
  border-radius: 8px;
  border: 4px solid ${v.White};
  background-image: linear-gradient(
    179deg,
    rgb(255 192 34) 9.2%,
    rgb(188 60 43) 103.9%
  );
  @media (max-width: 820px) {
    text-align: center;
  }
`,
    ee = _.img.attrs({
        src: P
    })`
  height: 120px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`,
    B = _.div`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`,
    V = _.div`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`,
    H = _.div`
  text-transform: none;
  font-family: ${g.SFPro};
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`,
    U = _.div`
  text-transform: none;
  font-family: ${g.SFPro};
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`,
    W = e => (0, L.jsxs)(G, {
        children: [(0, L.jsx)(K, {
            children: e.title
        }), (0, L.jsx)(q, {
            children: e.description
        }), e.children]
    }),
    G = _.div``,
    K = _.div`
  font-family: ${g.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
`,
    q = _.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`,
    J = [`season-ticket-cosmetics`],
    Y = () => h(J, () => n({
        url: `/api/cosmos/season-ticket`
    })),
    X = e => {
        let {
            cosmetic: n
        } = e, [r, i, a] = t(!1), [o, h, g] = t(!1), _ = I.useMemo(() => n.type === S.sticker ? 30 : 10, [n.type]);
        return (0, L.jsxs)(L.Fragment, {
            children: [(0, L.jsxs)(p, {
                onMouseEnter: h,
                onMouseLeave: g,
                onClick: i,
                children: [(0, L.jsx)(d, {
                    children: (0, L.jsx)(f, {
                        style: {
                            transform: `scale(${o?1.1:1})`
                        },
                        children: (0, L.jsx)(s, {
                            image: D({
                                id: n.id,
                                type: n.type
                            }),
                            background: k(n.rarity),
                            padding: _
                        })
                    })
                }), (0, L.jsx)(u, {
                    style: {
                        background: k(n.rarity)
                    },
                    children: (0, L.jsx)(m, {
                        className: `flex-center`,
                        children: (0, L.jsxs)(`div`, {
                            className: `flex-column flex-center`,
                            children: [(0, L.jsx)(l, {
                                children: n.name
                            }), (0, L.jsx)(c, {
                                children: A(n.type)
                            })]
                        })
                    })
                })]
            }), (0, L.jsx)(j, {
                open: r,
                close: a,
                pack: n.packName,
                ...n,
                image: D({
                    id: n.id,
                    type: n.type
                }),
                callToAction: () => void 0
            })]
        })
    },
    Z = () => {
        let {
            data: e
        } = Y();
        return !e || !e.length ? null : (0, L.jsx)(W, {
            title: `Cosmetics`,
            description: `Instantly earn these exclusive cosmetics`,
            children: e.map(e => (0, L.jsx)(X, {
                cosmetic: e
            }, e.id + `-item`))
        })
    },
    Q = e => E() ? null : (0, L.jsxs)($, {
        children: [(0, L.jsx)(b, {
            to: a,
            style: {
                textDecoration: `none`
            },
            target: e.pageMode ? void 0 : `_blank`,
            children: (0, L.jsxs)(M, {
                style: {
                    fontFamily: g.SFPro,
                    marginTop: 15
                },
                size: `large`,
                customFontWeight: y.Bold,
                customColor: `#1677ff`,
                ariaLabel: `Purchase ${T.name}`,
                children: [(0, L.jsx)(x, {
                    name: `fal fa-sparkles`,
                    style: {
                        marginRight: 10
                    }
                }), `Purchase `, T.name]
            })
        }), (0, L.jsxs)(te, {
            children: [`Season ends `, N, `.`]
        })]
    }),
    $ = _(C).attrs({
        className: `maxWidth`
    })`
  padding: 6px 0px;
`,
    te = _.div`
  text-transform: none;
  font-family: ${g.SFPro};
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`,
    ne = e => (0, L.jsx)(O, {
        children: (0, L.jsxs)(i, {
            direction: `vertical`,
            size: 30,
            className: `maxWidth`,
            children: [(0, L.jsx)(R, {
                pageMode: e.pageMode
            }), (0, L.jsx)(W, {
                title: `Benefits`,
                description: `Access these exclusive benefits all season long`,
                children: (0, L.jsx)(F, {
                    forSelf: !0
                })
            }), (0, L.jsx)(Z, {}), (0, L.jsx)(Q, {
                pageMode: e.pageMode
            })]
        })
    });
export {
    ne as
    default
};