import {
    u as i,
    r as c,
    j as r,
    e as d,
    d as o,
    U as g
} from "./_index.js";
import {
    a as l
} from "./ElementIds.js";
import {
    c as m
} from "./polished.esm.js";
import {
    G as u
} from "./GetAssetPath.js";
import {
    A as x
} from "./AccessibleAnchor.js";
const h = e => u("cosmos/packs/" + e + ".png"),
    p = 280,
    H = e => {
        const [t, a, n] = i(!1), s = c.useMemo(() => `radial-gradient(circle, ${m(.25,e.color)} 0%, ${e.color} 100%)`, [e.color, t]);
        return r.jsx(f, {
            to: e.redirect ? `/rewards/pack/${e.id}` : void 0,
            onClick: e.handleClick,
            children: r.jsx(b, {
                onMouseEnter: a,
                onMouseLeave: n,
                background: s,
                children: r.jsxs(v, {
                    children: [r.jsx($, {
                        imageUrl: h(e.id),
                        hovering: t,
                        draggable: !1
                    }), r.jsx(k, {
                        children: e.name
                    }), r.jsx(l, {
                        amount: e.cost,
                        size: 15
                    })]
                })
            })
        })
    },
    f = o(x)`
  text-decoration: none;
  color: ${d.White} !important;
`,
    b = o.div.attrs({
        className: "medium-shadow"
    })`
  background: ${e=>e.background};

  border-radius: 8px;
  width: 280px;
  font-family: ${g.FugazOne};
  text-transform: uppercase;
  width: ${()=>p}px;
  position: relative;
  cursor: pointer;
`,
    v = o.div.attrs({
        className: "maxWidth flex-center flex-column"
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
    k = o.div`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`,
    $ = o.div`
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
    H as P, $ as a, h as g
};