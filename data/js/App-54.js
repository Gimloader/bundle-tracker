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
} from "./progress.js";
import {
    t as i
} from "./jsx-runtime.js";
import {
    l as a
} from "./_index.js";
import {
    r as o
} from "./mobxreact.esm.js";
import {
    t as s
} from "./useStore.js";
import {
    it as c,
    nt as l
} from "./App-42.js";
var u = e(n()),
    d = i(),
    f = o(e => {
        let [n, i, a] = t(!1), {
            assignment: {
                percentageComplete: o
            }
        } = s();
        return c(), u.useEffect(() => {
            i()
        }, []), (0, d.jsx)(l, {
            visible: n,
            close: a,
            afterVisibilityChange: t => {
                t || e.setToHomeScreen()
            },
            children: typeof o == `number` ? (0, d.jsxs)(p, {
                children: [(0, d.jsxs)(m, {
                    children: [o, `% complete`]
                }), (0, d.jsx)(h, {
                    children: (0, d.jsx)(r, {
                        percent: Math.max(o, 1),
                        showInfo: !1,
                        status: `active`
                    })
                })]
            }) : null
        })
    }),
    p = a.div.attrs({
        className: `maxWidth`
    })`
  text-align: left;
  margin-top: 25px;
`,
    m = a.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-bottom: 5px;
`,
    h = a.div`
  .ant-progress-bg {
    height: 32px !important;
  }
`;
export {
    f as
    default
};