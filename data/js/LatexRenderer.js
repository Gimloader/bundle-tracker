import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    l as r,
    u as i
} from "./_index.js";
import {
    t as a
} from "./mathlive.min.js";
var o = e(t()),
    s = n(),
    c = e => {
        let t = o.useRef(null);
        return o.useEffect(() => {
            a(t.current, {})
        }, []), (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(d, {}), (0, s.jsx)(u, {
                children: (0, s.jsx)(`math-field`, {
                    className: `latex`,
                    tabIndex: `-1`,
                    ref: t,
                    "read-only": !0,
                    style: {
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`
                    },
                    children: e.latex
                })
            })]
        })
    },
    l = e => (0, s.jsx)(c, {
        ...e
    }, e.latex),
    u = r.div`
  pointer-events: none;
`,
    d = i`
  .latex {
    .ML__base {
      cursor: inherit !important;
    }
  }
`;
export {
    l as
    default
};