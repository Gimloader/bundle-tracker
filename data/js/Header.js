import {
    U as a,
    d as o,
    j as e,
    F as s,
    c
} from "./_index.js";
import {
    C as r
} from "./Button.js";
import {
    H as n
} from "./Hook.js";
const k = {
        name: "Hook",
        drawer: {
            placement: "left",
            widths: {
                default: 450,
                testValues: 700
            }
        }
    },
    C = o.div`
  color: ${r.Black};
  font-family: ${a.ProductSans};
`,
    H = t => e.jsx(i, {
        hoverable: !0,
        onClick: t.onClick,
        style: t.style,
        children: e.jsx(l, {
            children: e.jsxs("div", {
                className: "flex vc",
                children: [e.jsx("i", {
                    style: {
                        color: "#2e7d32",
                        marginRight: 10,
                        fontSize: 28
                    },
                    className: "fas fa-plus-circle"
                }), e.jsx("div", {
                    children: t.children
                })]
            })
        })
    }),
    j = t => e.jsx(i, {
        hoverable: !0,
        onClick: t.onClick,
        style: t.style,
        children: e.jsx(l, {
            children: t.children
        })
    }),
    i = o(c)``,
    l = o.div`
  color: ${r.Black};
  font-size: 18px;
  font-weight: ${s.Bold};
`,
    p = t => t === n.selectBox ? "Select Box" : t === n.number ? "Number" : t === n.kit ? "Kit" : "Unknown Type",
    v = o.div`
  font-size: 18px;
  font-weight: ${s.Bold};
  margin-bottom: 4px;
`,
    g = o.div`
  font-size: 14px;
  margin-bottom: 4px;
`,
    b = t => e.jsxs(d, {
        children: [e.jsx(f, {
            children: t.descriptor
        }), e.jsx(x, {
            children: t.title
        })]
    }),
    d = o.div``,
    f = o.div`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    x = o.div`
  font-size: 28px;
  font-weight: ${s.Bold};
`;
export {
    k as H, j as a, C as b, v as c, b as d, H as e, g as f, p as g
};