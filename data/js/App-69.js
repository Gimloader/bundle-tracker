import {
    r as m,
    j as t,
    U as f,
    d,
    e as x
} from "./_index.js";
import {
    r as g,
    u as y,
    e as C,
    S as j
} from "./ShopItem.js";
import {
    C as h
} from "./Centered.js";
import {
    L as S,
    g as w
} from "./App-44.js";
import {
    u as v
} from "./ElementIds.js";
import {
    P as T
} from "./Pack.js";
import {
    a as P
} from "./App-67.js";
import {
    u as N
} from "./useIntervalWhen.js";
import {
    u as L
} from "./useWillUnmount.js";
import {
    C as b
} from "./CircularProgress.js";
import {
    S as k
} from "./index-2.js";
import "./motion.js";
import "./playSound.js";
import "./howler.js";
import "./GetAssetPath.js";
import "./useQuery.js";
import "./TrackEvent.js";
import "./TrackPostHogEvent.js";
import "./Names.js";
import "./SeasonTicketName.js";
import "./SeasonTicketInlineUpsell.js";
import "./AccessibleAnchor.js";
import "./OwnsSeasonTicket.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./FontAwesomeIcon.js";
import "./Button.js";
import "./confetti.js";
import "./capitalize.js";
const l = (s, i) => {
        const o = s % i;
        return [Math.floor(s / i), o]
    },
    D = s => {
        const [i, o] = l(s, 86400), [r, a] = l(o, 3600), [n, c] = l(a, 60);
        let e = "";
        return i && (e += `${i}d `), (r || i) && (e += `${r}h `), e += `${n}m `, e += `${c}s`, e
    },
    W = s => {
        const [i, o] = m.useState(Math.floor(Date.now() / 1e3) - s.serverNowTime), [r, a] = m.useState(-999999);
        m.useEffect(() => {
            o(Math.floor(Date.now() / 1e3) - s.serverNowTime), n()
        }, [s.serverNowTime]);
        const n = () => {
            const c = s.shopRefreshTime - (Math.floor(Date.now() / 1e3) - i);
            a(c)
        };
        return m.useEffect(() => {
            n()
        }, []), m.useEffect(() => {
            r < 0 && r > -999 && g()
        }, [r]), N(() => {
            n()
        }, 1e3), r < 0 ? null : t.jsx($, {
            children: D(r)
        })
    },
    $ = d.div`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${f.FugazOne};
  color: rgba(255, 255, 255, 0.9);
`,
    de = s => {
        const {
            isLoading: i,
            data: o,
            error: r
        } = y(), {
            data: a,
            isLoading: n,
            error: c
        } = v();
        return L(() => {
            C()
        }), i || n ? t.jsx(h, {
            className: "maxAll",
            children: t.jsx(b, {
                style: {
                    color: x.White
                }
            })
        }) : r || c ? t.jsx(h, {
            className: "maxAll",
            children: "There was an error loading The Shop. Please refresh and try again."
        }) : t.jsx(S, {
            customWidth: 900,
            children: t.jsxs(I, {
                children: [t.jsx(p, {
                    children: "Packs"
                }), t.jsx(u, {
                    children: "Open packs to earn new items that you can use in-game!"
                }), t.jsx(z, {
                    style: {
                        marginTop: 20
                    },
                    children: o.packs.map(e => t.jsx(T, {
                        id: e.id,
                        name: e.name,
                        color: e.color,
                        cost: e.currencyCost,
                        redirect: !s.setToPackScreen,
                        handleClick: () => {
                            P(), s.setToPackScreen && s.setToPackScreen(e.id)
                        }
                    }, e.id))
                }), o.shop.items.length ? t.jsxs("div", {
                    className: "maxWidth",
                    style: {
                        marginTop: 40
                    },
                    children: [t.jsxs("div", {
                        className: "maxWidth flex between vc",
                        children: [t.jsx(p, {
                            children: "Items"
                        }), t.jsx(W, {
                            serverNowTime: o.shop.now,
                            shopRefreshTime: o.shop.endUnix
                        })]
                    }), t.jsxs(u, {
                        children: ["Purchase new items to use in-game!", t.jsx("br", {}), "Make sure to get the items you want before the shop refreshes!"]
                    }), t.jsx("div", {
                        className: "maxWidth",
                        style: {
                            marginTop: 20
                        },
                        children: t.jsx(k, {
                            direction: "vertical",
                            size: 20,
                            className: "maxWidth",
                            children: o.shop.items.map(e => t.jsx(j, {
                                id: e.cosmetic.id,
                                name: e.cosmetic.name,
                                image: w({
                                    id: e.cosmetic.id,
                                    type: e.cosmetic.type
                                }),
                                description: e.cosmetic.description,
                                type: e.cosmetic.type,
                                rarity: e.cosmetic.rarity,
                                cost: e.currencyCost,
                                owned: e.owned,
                                tag: e.tag,
                                style: e.cosmetic.style,
                                currentCurrency: a.currency,
                                onCosmeticSelectionChanged: s.onCosmeticSelectionChanged,
                                blockCharacterPreview: s.blockCharacterPreview
                            }, e.cosmetic.id + "-item"))
                        })
                    })]
                }) : null]
            })
        })
    },
    I = d.div.attrs({
        className: "flex-column"
    })``,
    p = d.div`
  font-family: ${f.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
`,
    u = d.div`
  font-family: ${f.SFPro};
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`,
    z = d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`;
export {
    de as
    default
};