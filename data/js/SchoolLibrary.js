import {
    o as e,
    r as t
} from "./rolldown-runtime.js";
import {
    C as n,
    G as r,
    Q as i,
    h as a,
    t as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    t as c
} from "./spin.js";
import {
    t as l
} from "./jsx-runtime.js";
import {
    l as u,
    n as d,
    s as f
} from "./_index.js";
import {
    t as p
} from "./index.es.js";
import {
    t as m
} from "./KitPreview.js";
var h = t({
        LIBRARY_CACHE_KEY: () => y,
        default: () => b
    }),
    g = e(s()),
    _ = e(i()),
    v = l(),
    y = `GIMKIT_LIBRARY_CACHE`,
    b = () => {
        let [e, t] = g.useState(!0), [i, s] = g.useState([]), [l, u] = g.useState(!0), [d, f] = g.useState(0);
        g.useEffect(() => {
            b()
        }, []);
        let h = () => {
                let e = new Map;
                return i.forEach(t => {
                    let n = (0, _.default)(t.createdDate).format(`MMMM YYYY`).toString();
                    e[n] ? e[n].push(t) : e[n] = [t]
                }), e
            },
            b = () => {
                t(!0), n({
                    cacheKey: y,
                    url: `/api/get-school-library/${d}`,
                    method: `GET`,
                    success: e => {
                        s([...i, ...e.games]), u(e.hasMore), f(e.newPage)
                    },
                    error: () => r({
                        title: `Error fetching Kits`
                    }),
                    both: () => t(!1)
                })
            },
            T = h();
        return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(o, {
                title: `My School`
            }), (0, v.jsx)(`div`, {
                className: `maxHeight`,
                children: e && !i.length ? (0, v.jsx)(`div`, {
                    className: `maxAll flex-center`,
                    children: (0, v.jsx)(c, {
                        size: `large`
                    })
                }) : i.length ? (0, v.jsx)(`div`, {
                    children: (0, v.jsx)(p, {
                        dataLength: i.length,
                        hasMore: l,
                        style: {
                            width: `100%`,
                            display: `flex`,
                            flexWrap: `wrap`,
                            overflow: `visible`
                        },
                        next: b,
                        loader: null,
                        children: Object.keys(T).map(e => (0, v.jsxs)(w, {
                            children: [(0, v.jsxs)(x, {
                                children: [(0, v.jsx)(S, {
                                    children: e
                                }), (0, v.jsx)(C, {})]
                            }), T[e].map(e => (0, v.jsx)(m, {
                                id: e._id,
                                title: e.title,
                                gif: e.gif,
                                numberOfQuestions: e.questions,
                                creator: e.creator,
                                redirectOnImageClick: !0,
                                size: `small`
                            }, e._id))]
                        }, e))
                    })
                }) : (0, v.jsxs)(`div`, {
                    className: `maxAll flex-center flex-column`,
                    children: [(0, v.jsx)(`img`, {
                        src: `/client/img/dashboard/bookshelf.svg`,
                        style: {
                            height: 80,
                            marginBottom: 9
                        }
                    }), (0, v.jsxs)(`div`, {
                        style: {
                            fontSize: 16,
                            textAlign: `center`
                        },
                        children: [`Find kits made by other educators at your school (`, a().schoolName, `). `, (0, v.jsx)(`br`, {}), ` Once they make their kits, you'll see them here.`]
                    })]
                })
            })]
        })
    },
    x = u.div.attrs({
        className: `flex vc maxWidth`
    })`
  margin-bottom: 20px;
`,
    S = u.div`
  font-weight: ${f.Bold};
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`,
    C = u.div.attrs({
        className: `maxWidth`
    })`
  height: 1px;
  background: ${d.BorderGray};
`,
    w = u.div.attrs({
        className: `maxWidth`
    })`
  margin-bottom: 20px;
`;
export {
    h as n, y as t
};