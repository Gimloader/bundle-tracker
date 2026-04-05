import {
    x as i,
    a as j,
    h as y,
    j as e,
    T as v,
    b as M,
    S as b,
    l as S,
    d as a,
    F as E,
    e as K
} from "./_index.js";
import {
    K as k
} from "./KitPreview.js";
import {
    I as w
} from "./index.es.js";
import "./ImagePreview.js";
import "./getCloudinaryUrl.js";
import "./AccessibleAnchor.js";
import "./NavigateTo.js";
const C = "GIMKIT_LIBRARY_CACHE",
    L = () => {
        const [h, n] = i.useState(!0), [r, d] = i.useState([]), [m, x] = i.useState(!0), [g, u] = i.useState(0);
        i.useEffect(() => {
            l()
        }, []);
        const f = () => {
                const t = new Map;
                return r.forEach(s => {
                    const o = M(s.createdDate).format("MMMM YYYY").toString();
                    t[o] ? t[o].push(s) : t[o] = [s]
                }), t
            },
            l = () => {
                n(!0), j({
                    cacheKey: C,
                    url: `/api/get-school-library/${g}`,
                    method: "GET",
                    success: t => {
                        d([...r, ...t.games]), x(t.hasMore), u(t.newPage)
                    },
                    error: () => y({
                        title: "Error fetching Kits"
                    }),
                    both: () => n(!1)
                })
            },
            c = f(),
            p = () => h && !r.length ? e.jsx("div", {
                className: "maxAll flex-center",
                children: e.jsx(b, {
                    size: "large"
                })
            }) : r.length ? e.jsx("div", {
                children: e.jsx(w, {
                    dataLength: r.length,
                    hasMore: m,
                    style: {
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "visible"
                    },
                    next: l,
                    loader: null,
                    children: Object.keys(c).map(t => e.jsxs(B, {
                        children: [e.jsxs(I, {
                            children: [e.jsx(R, {
                                children: t
                            }), e.jsx(A, {})]
                        }), c[t].map(s => e.jsx(k, {
                            id: s._id,
                            title: s.title,
                            gif: s.gif,
                            numberOfQuestions: s.questions,
                            creator: s.creator,
                            redirectOnImageClick: !0,
                            size: "small"
                        }, s._id))]
                    }, t))
                })
            }) : e.jsxs("div", {
                className: "maxAll flex-center flex-column",
                children: [e.jsx("img", {
                    src: "/client/img/dashboard/bookshelf.svg",
                    style: {
                        height: 80,
                        marginBottom: 9
                    }
                }), e.jsxs("div", {
                    style: {
                        fontSize: 16,
                        textAlign: "center"
                    },
                    children: ["Find kits made by other educators at your school (", S().schoolName, "). ", e.jsx("br", {}), " Once they make their kits, you'll see them here."]
                })]
            });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(v, {
                title: "My School"
            }), e.jsx("div", {
                className: "maxHeight",
                children: p()
            })]
        })
    },
    I = a.div.attrs({
        className: "flex vc maxWidth"
    })`
  margin-bottom: 20px;
`,
    R = a.div`
  font-weight: ${E.Bold};
  font-size: 28px;
  flex-shrink: 0;
  margin-right: 30px;
  line-height: 1;
`,
    A = a.div.attrs({
        className: "maxWidth"
    })`
  height: 1px;
  background: ${K.BorderGray};
`,
    B = a.div.attrs({
        className: "maxWidth"
    })`
  margin-bottom: 20px;
`;
export {
    C as LIBRARY_CACHE_KEY, L as
    default
};