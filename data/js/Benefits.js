import "./rolldown-runtime.js";
import {
    _ as e
} from "./utils.js";
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
    c as i,
    l as a
} from "./_index.js";
import {
    t as o
} from "./GetAssetPath.js";
import {
    r as s
} from "./Centered.js";
import {
    t as c
} from "./Names.js";
import {
    t as l
} from "./SeasonTicketName.js";
var u = o(`stickers/circus_ticket.png`),
    d = `December 9th`;
t();
var f = r(),
    p = e => (0, f.jsxs)(m, {
        children: [(0, f.jsx)(h, {
            children: (0, f.jsx)(g, {
                src: o(`seasonTicket/${e.icon}.svg`)
            })
        }), (0, f.jsxs)(_, {
            children: [e.tag ? (0, f.jsx)(v, {
                children: e.tag
            }) : null, (0, f.jsx)(y, {
                children: e.title
            }), (0, f.jsx)(b, {
                children: e.description
            })]
        })]
    }),
    m = a(s).attrs({
        className: `maxWidth light-shadow`
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
    h = a.div`
  margin-right: 32px;
`,
    g = a.img`
  width: 40px;
`,
    _ = a.div.attrs({
        className: `flex-column`
    })`
  align-items: flex-start;
`,
    v = a.div`
  font-family: ${i.FugazOne};
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
    y = a.div`
  font-family: ${i.FugazOne};
  text-transform: uppercase;
  font-size: 22px;
`,
    b = a.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`,
    x = [{
        icon: `vip`,
        title: `Exclusive Cosmetics`,
        description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${l.singularName}. Cosmetics stay in your Locker after the season ends.`
    }, {
        icon: `rise`,
        title: `Increased XP Limit`,
        description: `Weekly XP limit increased to 20,000. Earn more GimBucks and rewards for your learning!`
    }, {
        icon: `hammer`,
        title: `Terrains, Props, & Devices`,
        description: `Exclusive access to over 75 terrains, props, and devices to use in your Gimkit Creative maps.`
    }, {
        icon: `megaphone`,
        title: `Free Creative Publishing`,
        description: `Publish your maps to the world without paying 1,000 ${c.currency}!`
    }, {
        icon: `idea`,
        title: `Creative Slots`,
        description: `Store up to 25 maps on your account!`
    }, {
        icon: `dog`,
        title: `Play With Friends`,
        description: `Host live games with up to 15 players!`,
        show: t => !t || e()
    }],
    S = e => (0, f.jsx)(n, {
        direction: `vertical`,
        size: 20,
        className: `maxWidth`,
        children: x.filter(t => !t.show || t.show(e.forSelf)).map((e, t) => (0, f.jsx)(p, {
            ...e
        }, `benefit` + t))
    });
export {
    d as n, u as r, S as t
};