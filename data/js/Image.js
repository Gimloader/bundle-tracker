import {
    j as t,
    d as i,
    U as r,
    i as a
} from "./_index.js";
import {
    b as c
} from "./Centered.js";
import {
    G as n
} from "./GetAssetPath.js";
import {
    S as d
} from "./SeasonTicketName.js";
import {
    C as l
} from "./Names.js";
import {
    S as u
} from "./index-2.js";
const m = e => t.jsxs(p, {
        children: [t.jsx(g, {
            children: t.jsx(x, {
                src: n(`seasonTicket/${e.icon}.svg`)
            })
        }), t.jsxs(h, {
            children: [e.tag ? t.jsx(f, {
                children: e.tag
            }) : null, t.jsx(b, {
                children: e.title
            }), t.jsx(v, {
                children: e.description
            })]
        })]
    }),
    p = i(c).attrs({
        className: "maxWidth light-shadow"
    })`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    g = i.div`
  margin-right: 32px;
`,
    x = i.img`
  width: 40px;
`,
    h = i.div.attrs({
        className: "flex-column"
    })`
  align-items: flex-start;
`,
    f = i.div`
  font-family: ${r.FugazOne};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  text-transform: uppercase;
  font-size: 12px;
  padding: 6px 14px 4px 14px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  margin-bottom: 7px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    b = i.div`
  font-family: ${r.FugazOne};
  text-transform: uppercase;
  font-size: 22px;
`,
    v = i.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`,
    y = [{
        icon: "vip",
        title: "Exclusive Cosmetics",
        description: `Instantly earn over 20 exclusive cosmetics, only available by purchasing this season's ${d.singularName}. Cosmetics stay in your Locker after the season ends.`
    }, {
        icon: "rise",
        title: "Increased XP Limit",
        description: "Weekly XP limit increased to 20,000. Earn more GimBucks and rewards for your learning!"
    }, {
        icon: "hammer",
        title: "Terrains, Props, & Devices",
        description: "Exclusive access to over 75 terrains, props, and devices to use in your Gimkit Creative maps."
    }, {
        icon: "megaphone",
        title: "Free Creative Publishing",
        description: `Publish your maps to the world without paying 1,000 ${l.currency}!`
    }, {
        icon: "idea",
        title: "Creative Slots",
        description: "Store up to 25 maps on your account!"
    }, {
        icon: "dog",
        title: "Play With Friends",
        description: "Host live games with up to 15 players!",
        show: e => e ? a() : !0
    }],
    w = e => t.jsx(u, {
        direction: "vertical",
        size: 20,
        className: "maxWidth",
        children: y.filter(s => s.show ? s.show(e.forSelf) : !0).map((s, o) => t.jsx(m, {
            ...s
        }, "benefit" + o))
    }),
    N = "August 26th",
    I = n("stickers/season_2_2026.png");
export {
    w as B, N as S, I as a
};