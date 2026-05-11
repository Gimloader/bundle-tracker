import {
    r as d,
    j as t,
    e as S,
    d as s,
    b6 as C,
    y as M,
    a as A,
    t as E,
    u as y,
    U as N
} from "./_index.js";
import {
    a as p,
    i as T,
    f as $
} from "./ElementIds.js";
import {
    r as j,
    c as O,
    P as z,
    p as B
} from "./App-67.js";
import {
    n as D
} from "./motion.js";
import {
    g as R
} from "./App-44.js";
import {
    p as H
} from "./playSound.js";
import {
    G as L
} from "./GetAssetPath.js";
import {
    u as Q
} from "./useQuery.js";
import {
    A as V
} from "./TrackEvent.js";
var W = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: [0, 1]
};

function _(e, r) {
    e === void 0 && (e = function() {}), r === void 0 && (r = W);
    var a = r.root,
        m = a === void 0 ? null : a,
        u = r.rootMargin,
        n = r.threshold,
        o = d.useState(null),
        i = o[0],
        c = o[1],
        g = d.useState(!1),
        x = g[0],
        h = g[1];
    d.useEffect(function() {
        if (i) {
            var l = new IntersectionObserver(function(w, P) {
                w.forEach(function(k) {
                    var I = k.isIntersecting;
                    return h(I)
                }), e(w, P)
            }, r);
            return l.observe(i),
                function() {
                    l.disconnect()
                }
        }
        return D
    }, [i, e, m, u, n]);
    var f = d.useCallback(function(l) {
        c(l)
    }, []);
    return [f, x]
}
const F = e => t.jsx(G, {
        style: {
            background: j(e.rarity)
        },
        children: t.jsxs(q, {
            children: [t.jsxs("div", {
                className: "flex-column",
                style: {
                    alignItems: "flex-start"
                },
                children: [e.tag ? t.jsx(X, {
                    children: e.tag
                }) : null, t.jsx(U, {
                    children: e.name
                }), t.jsx(J, {
                    children: e.owned ? "Owned" : O(e.type)
                })]
            }), t.jsx(K, {
                children: e.owned ? null : t.jsx(p, {
                    amount: e.cost
                })
            })]
        })
    }),
    G = s.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${S.White};
  text-transform: uppercase;
  border-bottom-left-radius: ${()=>v}px;
  border-bottom-right-radius: ${()=>v}px;
  overflow: hidden;
  line-height: 1;
`,
    q = s.div.attrs({
        className: "maxWidth flex vc between"
    })`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`,
    U = s.div`
  font-size: 24px;
`,
    J = s.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`,
    K = s.div`
  margin-left: 10px;
`,
    X = s.div`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`,
    Y = e => {
        const [r, a] = _();
        return t.jsx(Z, {
            ref: r,
            style: {
                padding: e.padding,
                background: e.background
            },
            children: a ? t.jsx(ee, {
                draggable: !1,
                src: e.image
            }) : null
        })
    },
    Z = s.div.attrs({
        className: "maxAll flex-center"
    })`
  background: rgb(255, 255, 255);
  overflow: hidden;
`,
    ee = s.img`
  max-width: 100%;
  max-height: 100%;
`,
    b = ["cosmos-item-shop"],
    xe = () => Q(b, () => M({
        url: "/api/cosmos/shop"
    })),
    fe = () => {
        C.removeQueries(b)
    },
    te = () => C.refetchQueries(b),
    re = e => {
        const [r, a] = d.useState(!1), [m, u] = d.useState(!1), {
            id: n,
            name: o,
            rarity: i,
            type: c,
            description: g,
            style: x
        } = e, h = e.owned || e.currentCurrency < e.cost, f = () => {
            h || r || (a(!0), A({
                url: "/api/cosmos/purchase-item",
                data: {
                    cosmeticId: e.id
                },
                success: () => {
                    V({
                        event: "cosmetic_purchased",
                        properties: {
                            id: n,
                            name: o,
                            type: c
                        }
                    }), H({
                        path: L("cosmos/cosmeticPurchased.mp3"),
                        volume: .6
                    }), T(), te(), u(!0)
                },
                error: l => {
                    E({
                        e: l,
                        default: {
                            title: "Error purchasing item.",
                            content: "Please try again later."
                        }
                    }), e.close()
                }
            }))
        };
        return t.jsx(z, {
            open: e.open,
            close: e.close,
            id: n,
            name: o,
            image: R({
                id: n,
                type: c
            }),
            rarity: i,
            type: c,
            description: g,
            style: x,
            purchased: m,
            callToAction: () => ({
                text: e.owned ? "Owned" : t.jsxs("div", {
                    className: "flex vc",
                    style: {
                        lineHeight: 1,
                        padding: "2px 0px"
                    },
                    children: [t.jsx("div", {
                        style: {
                            marginTop: 2
                        },
                        children: "Purchase"
                    }), t.jsx("div", {
                        style: {
                            margin: "0px 7px"
                        },
                        children: "-"
                    }), t.jsx(p, {
                        amount: e.cost,
                        size: 16,
                        grayscale: h
                    })]
                }),
                ariaLabel: e.owned ? "Owned" : "Purchase",
                disabled: h,
                onClick: f
            }),
            blockCharacterPreview: e.blockCharacterPreview,
            onCosmeticSelectionChanged: e.onCosmeticSelectionChanged
        })
    },
    v = 6,
    ve = e => {
        const [r, a, m] = y(!1), [u, n, o] = y(!1), i = () => {
            B(), a()
        }, c = d.useMemo(() => e.type === $.sticker ? 30 : 10, [e.type]);
        return t.jsxs(t.Fragment, {
            children: [t.jsxs(se, {
                onMouseEnter: n,
                onMouseLeave: o,
                onClick: i,
                children: [t.jsx(ae, {
                    children: t.jsx(ne, {
                        style: {
                            transform: `scale(${u?1.1:1})`
                        },
                        children: t.jsx(Y, {
                            image: e.image,
                            background: j(e.rarity),
                            padding: c
                        })
                    })
                }), t.jsx(F, {
                    name: e.name,
                    type: e.type,
                    rarity: e.rarity,
                    owned: e.owned,
                    cost: e.cost,
                    tag: e.tag
                })]
            }), t.jsx(re, {
                open: r,
                close: m,
                ...e
            })]
        })
    },
    se = s.div.attrs({
        className: "maxWidth medium-shadow"
    })`
  border-radius: ${v}px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${N.FugazOne};
  &:last-child {
    margin-bottom: 0px;
  }
`,
    ae = s.div.attrs({
        className: "maxWidth"
    })`
  height: 140px;
  overflow: hidden;
`,
    ne = s.div.attrs({
        className: "maxAll"
    })`
  transition: transform 0.25s;
`;
export {
    se as C, J as D, ae as P, ve as S, U as T, ne as a, Y as b, G as c, q as d, fe as e, te as r, xe as u
};