import {
    j as e,
    b6 as l,
    d as t,
    F as m,
    b7 as u,
    y as f,
    U as d,
    e as h
} from "./index-25.js";
import {
    S as g
} from "./SeasonTicketName.js";
import {
    G as x
} from "./GetAssetPath.js";
import {
    u as p
} from "./useQuery.js";
var v = (s => (s.character = "character", s.sticker = "sticker", s.trail = "trail", s))(v || {}),
    k = (s => (s.common = "common", s.uncommon = "uncommon", s.rare = "rare", s.epic = "epic", s.legendary = "legendary", s.mythic = "mythic", s))(k || {}),
    b = (s => (s.color = "color", s.select = "select", s))(b || {});
const j = s => {
        const n = s.size || 18,
            c = Math.ceil(n * 1.22),
            i = Math.floor(n / 3),
            o = {
                height: c
            };
        return s.grayscale && (o.filter = "grayscale(1)"), e.jsxs(y, {
            style: {
                fontSize: s.size
            },
            children: [e.jsx(z, {
                draggable: !1,
                style: o
            }), e.jsx(A, {
                style: {
                    marginLeft: i
                },
                children: l(s.amount)
            })]
        })
    },
    y = t.div.attrs({
        className: "flex vc"
    })``,
    z = t.img.attrs({
        src: x("cosmos/currency_v2.svg")
    })``,
    A = t.div`
  line-height: 1;
  font-weight: ${m.Bold};
  margin-top: 0.15em;
`;
var a = (s => (s.xp = "xp", s.locker = "locker", s.seasonTicket = "seasonTicket", s.shop = "shop", s.pack = "pack", s))(a || {});
const M = {
        [a.xp]: {
            title: "Home",
            icon: "fas fa-home"
        },
        [a.locker]: {
            title: "Locker",
            icon: "fas fa-th-large"
        },
        [a.seasonTicket]: {
            title: e.jsx("div", {
                className: "flex vc",
                children: e.jsx("div", {
                    children: g.name
                })
            }),
            icon: "fas fa-ticket-alt"
        },
        [a.shop]: {
            title: "Shop",
            icon: "fas fa-store"
        }
    },
    r = ["cosmos-basics"],
    F = () => p(r, () => f({
        url: "/api/cosmos/basics"
    }), {
        staleTime: 2e4
    }),
    Q = () => u.invalidateQueries(r),
    T = () => {
        const {
            data: s
        } = F();
        return s ? e.jsx(N, {
            children: e.jsx(j, {
                amount: s.currency,
                size: 16
            })
        }) : null
    },
    N = t.div`
  margin-left: 20px;
  font-family: ${d.FugazOne};
  color: ${h.White};
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`,
    W = {
        container: "cosmos-container",
        content: "cosmos-content"
    };
export {
    b as C, j as a, M as b, a as c, T as d, W as e, v as f, k as g, Q as i, F as u
};