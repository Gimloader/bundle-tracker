import {
    j as e,
    r,
    ay as s,
    d as a
} from "./_index.js";
import {
    q as o
} from "./mathlive.min.js";
const l = t => {
        const n = r.useRef(null);
        return r.useEffect(() => {
            o(n.current, {})
        }, []), e.jsxs(e.Fragment, {
            children: [e.jsx(c, {}), e.jsx(x, {
                children: e.jsx("math-field", {
                    className: "latex",
                    tabIndex: "-1",
                    ref: n,
                    "read-only": !0,
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: t.latex
                })
            })]
        })
    },
    f = t => e.jsx(l, {
        ...t
    }, t.latex),
    x = a.div`
  pointer-events: none;
`,
    c = s`
  .latex {
    .ML__base {
      cursor: inherit !important;
    }
  }
`;
export {
    f as
    default
};