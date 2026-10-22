import "./rolldown-runtime.js";
import {
    t as e
} from "./react-1.js";
import {
    t
} from "./card.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    c as r,
    l as i,
    s as a
} from "./_index.js";
import {
    n as o
} from "./Button-2.js";
import {
    t as s
} from "./Hook.js";
var c = {
    name: `Hook`,
    drawer: {
        placement: `left`,
        widths: {
            default: 450,
            testValues: 700
        }
    }
};
e();
var l = n(),
    u = e => (0, l.jsx)(f, {
        hoverable: !0,
        onClick: e.onClick,
        style: e.style,
        children: (0, l.jsx)(p, {
            children: (0, l.jsxs)(`div`, {
                className: `flex vc`,
                children: [(0, l.jsx)(`i`, {
                    style: {
                        color: `#2e7d32`,
                        marginRight: 10,
                        fontSize: 28
                    },
                    className: `fas fa-plus-circle`
                }), (0, l.jsx)(`div`, {
                    children: e.children
                })]
            })
        })
    }),
    d = e => (0, l.jsx)(f, {
        hoverable: !0,
        onClick: e.onClick,
        style: e.style,
        children: (0, l.jsx)(p, {
            children: e.children
        })
    }),
    f = i(t)``,
    p = i.div`
  color: ${o.Black};
  font-size: 18px;
  font-weight: ${a.Bold};
`,
    m = e => e === s.selectBox ? `Select Box` : e === s.number ? `Number` : e === s.kit ? `Kit` : `Unknown Type`,
    h = e => (0, l.jsxs)(g, {
        children: [(0, l.jsx)(_, {
            children: e.descriptor
        }), (0, l.jsx)(v, {
            children: e.title
        })]
    }),
    g = i.div``,
    _ = i.div`
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    v = i.div`
  font-size: 28px;
  font-weight: ${a.Bold};
`,
    y = i.div`
  font-size: 18px;
  font-weight: ${a.Bold};
  margin-bottom: 4px;
`,
    b = i.div`
  font-size: 14px;
  margin-bottom: 4px;
`,
    x = i.div`
  color: ${o.Black};
  font-family: ${r.ProductSans};
`;
export {
    m as a, c, h as i, y as n, d as o, b as r, u as s, x as t
};