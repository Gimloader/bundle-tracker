import {
    j as s,
    b5 as m,
    d as t,
    F as r,
    b6 as u,
    y as d,
    U as f,
    e as h
} from "./_index.js";
import {
    S as g
} from "./SeasonTicketName.js";
import {
    G as x
} from "./GetAssetPath.js";
import {
    u as p
} from "./useQuery.js";
var v = (e => (e.character = "character", e.sticker = "sticker", e.trail = "trail", e))(v || {}),
    k = (e => (e.common = "common", e.uncommon = "uncommon", e.rare = "rare", e.epic = "epic", e.legendary = "legendary", e.mythic = "mythic", e))(k || {}),
    b = (e => (e.color = "color", e.select = "select", e))(b || {});
const j = e => {
        const n = e.size || 18,
            i = Math.ceil(n * 1.22),
            l = Math.floor(n / 3),
            o = {
                height: i
            };
        return e.grayscale && (o.filter = "grayscale(1)"), s.jsxs(y, {
            style: {
                fontSize: e.size
            },
            children: [s.jsx(z, {
                draggable: !1,
                style: o
            }), s.jsx(N, {
                style: {
                    marginLeft: l
                },
                children: m(e.amount)
            })]
        })
    },
    y = t.div.attrs({
        className: "flex vc"
    })``,
    z = t.img.attrs({
        src: x("cosmos/currency_v2.svg")
    })``,
    N = t.div`
  line-height: 1;
  font-weight: ${r.Bold};
  margin-top: 0.15em;
`;
var a = (e => (e.xp = "xp", e.locker = "locker", e.seasonTicket = "seasonTicket", e.shop = "shop", e.pack = "pack", e))(a || {});
const I = {
        [a.xp]: {
            title: "Home",
            icon: "fas fa-home"
        },
        [a.locker]: {
            title: "Locker",
            icon: "fas fa-th-large"
        },
        [a.seasonTicket]: {
            title: s.jsxs("div", {
                className: "flex vc",
                children: [s.jsx("div", {
                    children: g.name
                }), s.jsx("div", {
                    style: {
                        fontSize: "0.7em",
                        padding: "0.3em 0.5em",
                        borderRadius: 50,
                        fontWeight: r.Bold,
                        background: "#009933",
                        marginLeft: "0.5em"
                    },
                    children: "New!"
                })]
            }),
            icon: "fas fa-ticket-alt"
        },
        [a.shop]: {
            title: "Shop",
            icon: "fas fa-store"
        }
    },
    c = ["cosmos-basics"],
    A = () => p(c, () => d({
        url: "/api/cosmos/basics"
    }), {
        staleTime: 2e4
    }),
    L = () => u.invalidateQueries(c),
    M = () => {
        const {
            data: e
        } = A();
        return e ? s.jsx(B, {
            children: s.jsx(j, {
                amount: e.currency,
                size: 16
            })
        }) : null
    },
    B = t.div`
  margin-left: 20px;
  font-family: ${f.FugazOne};
  color: ${h.White};
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`,
    Q = {
        container: "cosmos-container",
        content: "cosmos-content"
    };
export {
    b as C, j as a, I as b, a as c, M as d, Q as e, v as f, k as g, L as i, A as u
};