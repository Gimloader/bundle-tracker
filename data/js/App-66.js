import {
    j as e,
    X as l,
    F as d,
    U as r,
    e as P,
    d as o,
    y as F,
    u as n,
    r as $
} from "./_index.js";
import {
    a as p
} from "./Centered.js";
import {
    M as x
} from "./Button.js";
import {
    F as f
} from "./FontAwesomeIcon.js";
import {
    A as g
} from "./AccessibleAnchor.js";
import {
    a as i,
    S as a
} from "./SeasonTicketName.js";
import {
    S as u,
    a as E,
    B as w
} from "./Image.js";
import {
    O as h
} from "./OwnsSeasonTicket.js";
import {
    u as A
} from "./useQuery.js";
import {
    f as M
} from "./ElementIds.js";
import {
    C as N,
    P as z,
    a as B,
    b as I,
    c as _,
    d as D,
    T as O,
    D as W
} from "./ShopItem.js";
import {
    g as c,
    L
} from "./App-44.js";
import {
    r as m,
    c as K,
    P as H
} from "./App-67.js";
import {
    S as R
} from "./index-2.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./GetAssetPath.js";
import "./Names.js";
import "./motion.js";
import "./playSound.js";
import "./howler.js";
import "./TrackEvent.js";
import "./TrackPostHogEvent.js";
import "./SeasonTicketInlineUpsell.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./confetti.js";
const q = t => e.jsxs(G, {
        children: [e.jsx(Q, {}), e.jsxs(U, {
            children: [i.seasonName, " ", i.seasonNumber]
        }), e.jsx(X, {
            children: a.name
        }), h() ? e.jsxs(Y, {
            children: ["You already own this ", a.name, ". Thanks so much for your support!"]
        }) : e.jsx(g, {
            to: l,
            style: {
                textDecoration: "none"
            },
            target: t.pageMode ? void 0 : "_blank",
            children: e.jsxs(x, {
                style: {
                    fontFamily: r.SFPro,
                    marginTop: 15
                },
                customFontWeight: d.Bold,
                customColor: "#1677ff",
                ariaLabel: `Purchase ${a.name}`,
                children: [e.jsx(f, {
                    name: "fal fa-sparkles",
                    style: {
                        marginRight: 10
                    }
                }), "Purchase ", a.name]
            })
        }), e.jsxs(J, {
            children: ["Season ends ", u, "."]
        })]
    }),
    G = o(p).attrs({
        className: "maxWidth medium-shadow"
    })`
  font-family: ${r.FugazOne};
  text-transform: uppercase;
  padding: 60px 30px;
  border-radius: 8px;
  border: 4px solid ${P.White};
  background-image: linear-gradient(
    179deg,
    rgb(222 193 139) 9.2%,
    rgb(143 82 35) 103.9%
  );
  @media (max-width: 820px) {
    text-align: center;
  }
`,
    Q = o.img.attrs({
        src: E
    })`
  height: 120px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`,
    U = o.div`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`,
    X = o.div`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`,
    Y = o.div`
  text-transform: none;
  font-family: ${r.SFPro};
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`,
    J = o.div`
  text-transform: none;
  font-family: ${r.SFPro};
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`,
    j = t => e.jsxs(V, {
        children: [e.jsx(Z, {
            children: t.title
        }), e.jsx(ee, {
            children: t.description
        }), t.children]
    }),
    V = o.div``,
    Z = o.div`
  font-family: ${r.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
`,
    ee = o.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`,
    te = ["season-ticket-cosmetics"],
    se = () => A(te, () => F({
        url: "/api/cosmos/season-ticket"
    })),
    oe = t => {
        const {
            cosmetic: s
        } = t, [y, b, S] = n(!1), [T, C, v] = n(!1), k = $.useMemo(() => s.type === M.sticker ? 30 : 10, [s.type]);
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(N, {
                onMouseEnter: C,
                onMouseLeave: v,
                onClick: b,
                children: [e.jsx(z, {
                    children: e.jsx(B, {
                        style: {
                            transform: `scale(${T?1.1:1})`
                        },
                        children: e.jsx(I, {
                            image: c({
                                id: s.id,
                                type: s.type
                            }),
                            background: m(s.rarity),
                            padding: k
                        })
                    })
                }), e.jsx(_, {
                    style: {
                        background: m(s.rarity)
                    },
                    children: e.jsx(D, {
                        className: "flex-center",
                        children: e.jsxs("div", {
                            className: "flex-column flex-center",
                            children: [e.jsx(O, {
                                children: s.name
                            }), e.jsx(W, {
                                children: K(s.type)
                            })]
                        })
                    })
                })]
            }), e.jsx(H, {
                open: y,
                close: S,
                pack: s.packName,
                ...s,
                image: c({
                    id: s.id,
                    type: s.type
                }),
                callToAction: () => {}
            })]
        })
    },
    re = () => {
        const {
            data: t
        } = se();
        return !t || !t.length ? null : e.jsx(j, {
            title: "Cosmetics",
            description: "Instantly earn these exclusive cosmetics",
            children: t.map(s => e.jsx(oe, {
                cosmetic: s
            }, s.id + "-item"))
        })
    },
    ae = t => h() ? null : e.jsxs(ne, {
        children: [e.jsx(g, {
            to: l,
            style: {
                textDecoration: "none"
            },
            target: t.pageMode ? void 0 : "_blank",
            children: e.jsxs(x, {
                style: {
                    fontFamily: r.SFPro,
                    marginTop: 15
                },
                size: "large",
                customFontWeight: d.Bold,
                customColor: "#1677ff",
                ariaLabel: `Purchase ${a.name}`,
                children: [e.jsx(f, {
                    name: "fal fa-sparkles",
                    style: {
                        marginRight: 10
                    }
                }), "Purchase ", a.name]
            })
        }), e.jsxs(ie, {
            children: ["Season ends ", u, "."]
        })]
    }),
    ne = o(p).attrs({
        className: "maxWidth"
    })`
  padding: 6px 0px;
`,
    ie = o.div`
  text-transform: none;
  font-family: ${r.SFPro};
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`,
    Be = t => e.jsx(L, {
        children: e.jsxs(R, {
            direction: "vertical",
            size: 30,
            className: "maxWidth",
            children: [e.jsx(q, {
                pageMode: t.pageMode
            }), e.jsx(j, {
                title: "Benefits",
                description: "Access these exclusive benefits all season long",
                children: e.jsx(w, {
                    forSelf: !0
                })
            }), e.jsx(re, {}), e.jsx(ae, {
                pageMode: t.pageMode
            })]
        })
    });
export {
    Be as
    default
};