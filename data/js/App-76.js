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
} from "./jsx-runtime.js";
import {
    t as i
} from "./useIntervalWhen.js";
import {
    a,
    i as o,
    o as s,
    s as c
} from "./ShopItem.js";
import {
    t as l
} from "./useWillUnmount.js";
import {
    c as u,
    l as d,
    n as f
} from "./_index.js";
import {
    s as p
} from "./Navigation.js";
import {
    t as m
} from "./Centered.js";
import {
    t as h
} from "./CircularProgress.js";
import {
    n as g,
    t as _
} from "./App-46.js";
import {
    a as v
} from "./App-74.js";
import {
    t as y
} from "./Pack.js";
var b = e(t()),
    x = r(),
    S = (e, t) => {
        let n = e % t;
        return [Math.floor(e / t), n]
    },
    C = e => {
        let [t, n] = S(e, 86400), [r, i] = S(n, 3600), [a, o] = S(i, 60), s = ``;
        return t && (s += `${t}d `), (r || t) && (s += `${r}h `), s += `${a}m `, s += `${o}s`, s
    },
    w = e => {
        let [t, n] = b.useState(Math.floor(Date.now() / 1e3) - e.serverNowTime), [r, o] = b.useState(-999999);
        b.useEffect(() => {
            n(Math.floor(Date.now() / 1e3) - e.serverNowTime), s()
        }, [e.serverNowTime]);
        let s = () => {
            let n = e.shopRefreshTime - (Math.floor(Date.now() / 1e3) - t);
            o(n)
        };
        return b.useEffect(() => {
            s()
        }, []), b.useEffect(() => {
            r < 0 && r > -999 && a()
        }, [r]), i(() => {
            s()
        }, 1e3), r < 0 ? null : (0, x.jsx)(T, {
            children: C(r)
        })
    },
    T = d.div`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${u.FugazOne};
  color: rgba(255, 255, 255, 0.9);
`,
    E = e => {
        let {
            isLoading: t,
            data: r,
            error: i
        } = c(), {
            data: a,
            isLoading: u,
            error: d
        } = p();
        return l(() => {
            s()
        }), t || u ? (0, x.jsx)(m, {
            className: `maxAll`,
            children: (0, x.jsx)(h, {
                style: {
                    color: f.White
                }
            })
        }) : i || d ? (0, x.jsx)(m, {
            className: `maxAll`,
            children: `There was an error loading The Shop. Please refresh and try again.`
        }) : (0, x.jsx)(_, {
            customWidth: 900,
            children: (0, x.jsxs)(D, {
                children: [(0, x.jsx)(O, {
                    children: `Packs`
                }), (0, x.jsx)(k, {
                    children: `Open packs to earn new items that you can use in-game!`
                }), (0, x.jsx)(A, {
                    style: {
                        marginTop: 20
                    },
                    children: r.packs.map(t => (0, x.jsx)(y, {
                        id: t.id,
                        name: t.name,
                        color: t.color,
                        cost: t.currencyCost,
                        redirect: !e.setToPackScreen,
                        handleClick: () => {
                            v(), e.setToPackScreen && e.setToPackScreen(t.id)
                        }
                    }, t.id))
                }), r.shop.items.length ? (0, x.jsxs)(`div`, {
                    className: `maxWidth`,
                    style: {
                        marginTop: 40
                    },
                    children: [(0, x.jsxs)(`div`, {
                        className: `maxWidth flex between vc`,
                        children: [(0, x.jsx)(O, {
                            children: `Items`
                        }), (0, x.jsx)(w, {
                            serverNowTime: r.shop.now,
                            shopRefreshTime: r.shop.endUnix
                        })]
                    }), (0, x.jsxs)(k, {
                        children: [`Purchase new items to use in-game!`, (0, x.jsx)(`br`, {}), `Make sure to get the items you want before the shop refreshes!`]
                    }), (0, x.jsx)(`div`, {
                        className: `maxWidth`,
                        style: {
                            marginTop: 20
                        },
                        children: (0, x.jsx)(n, {
                            direction: `vertical`,
                            size: 20,
                            className: `maxWidth`,
                            children: r.shop.items.map(t => (0, x.jsx)(o, {
                                id: t.cosmetic.id,
                                name: t.cosmetic.name,
                                image: g({
                                    id: t.cosmetic.id,
                                    type: t.cosmetic.type
                                }),
                                description: t.cosmetic.description,
                                type: t.cosmetic.type,
                                rarity: t.cosmetic.rarity,
                                cost: t.currencyCost,
                                owned: t.owned,
                                tag: t.tag,
                                style: t.cosmetic.style,
                                currentCurrency: a.currency,
                                onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                                blockCharacterPreview: e.blockCharacterPreview
                            }, t.cosmetic.id + `-item`))
                        })
                    })]
                }) : null]
            })
        })
    },
    D = d.div.attrs({
        className: `flex-column`
    })``,
    O = d.div`
  font-family: ${u.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
`,
    k = d.div`
  font-family: ${u.SFPro};
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`,
    A = d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`;
export {
    E as
    default
};