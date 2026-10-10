import {
    o as e
} from "./rolldown-runtime.js";
import {
    O as t
} from "./utils.js";
import {
    t as n
} from "./react-1.js";
import {
    t as r
} from "./jsx-runtime.js";
import {
    c as i,
    l as a,
    n as o
} from "./_index.js";
import {
    t as s
} from "./AccessibleAnchor.js";
import {
    t as c
} from "./GetAssetPath.js";
import {
    i as l
} from "./Navigation.js";
import {
    n as u
} from "./polished.esm.js";
var d = e(n()),
    f = e => c(`cosmos/packs/` + e + `.png`),
    p = r(),
    m = e => {
        let [n, r, i] = t(!1), a = (0, d.useMemo)(() => `radial-gradient(circle, ${u(.25,e.color)} 0%, ${e.color} 100%)`, [e.color, n]);
        return (0, p.jsx)(h, {
            to: e.redirect ? `/rewards/pack/${e.id}` : void 0,
            onClick: e.handleClick,
            children: (0, p.jsx)(g, {
                onMouseEnter: r,
                onMouseLeave: i,
                background: a,
                children: (0, p.jsxs)(_, {
                    children: [(0, p.jsx)(y, {
                        imageUrl: f(e.id),
                        hovering: n,
                        draggable: !1
                    }), (0, p.jsx)(v, {
                        children: e.name
                    }), (0, p.jsx)(l, {
                        amount: e.cost,
                        size: 15
                    })]
                })
            })
        })
    },
    h = a(s)`
  text-decoration: none;
  color: ${o.White} !important;
`,
    g = a.div.attrs({
        className: `medium-shadow`
    })`
  background: ${e=>e.background};

  border-radius: 8px;
  width: 280px;
  font-family: ${i.FugazOne};
  text-transform: uppercase;
  width: ${()=>280}px;
  position: relative;
  cursor: pointer;
`,
    _ = a.div.attrs({
        className: `maxWidth flex-center flex-column`
    })`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`,
    v = a.div`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`,
    y = a.div`
  width: 195px;
  height: 333px;
  transform: rotate(
      ${e=>e.hovering?0:3}deg
    )
    scale(${e=>e.hovering?1.02:.98});
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5))
    brightness(${e=>e.hovering?1.2:1});
  transition: transform 0.22s ease-out, filter 0.22s ease-out;
  background-image: url(${e=>e.imageUrl});
  background-size: cover;
`;
export {
    y as n, f as r, m as t
};