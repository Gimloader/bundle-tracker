import {
    s as m,
    j as t,
    T as p,
    D as c,
    S as x,
    e as o,
    d as r,
    F as s,
    b as h,
    R as g,
    ah as f
} from "./_index.js";
import {
    I as u
} from "./InfiniteScroller.js";
import {
    S as j
} from "./App-4.js";
import {
    D as b,
    M as i
} from "./index-10.js";
import "./index.es.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
import "./index-2.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-5.js";
import "./move.js";
const v = e => {
        const {
            item: {
                _id: a,
                image: n,
                term: l,
                createdAt: d
            }
        } = e;
        return t.jsxs(S, {
            children: [t.jsxs(k, {
                children: [t.jsxs("div", {
                    children: [t.jsx(A, {
                        children: l
                    }), t.jsxs(N, {
                        children: ["Added to the gallery ", h(d).fromNow()]
                    })]
                }), t.jsx("div", {
                    children: t.jsx(b, {
                        overlay: t.jsx(i, {
                            children: t.jsx(i.Item, {
                                children: t.jsx("a", {
                                    href: `mailto:hello@gimkit.com?body=Art ID: ${a}`,
                                    children: "Report Abuse"
                                })
                            })
                        }),
                        children: t.jsx(g, {
                            style: {
                                cursor: "pointer"
                            }
                        })
                    })
                })]
            }), t.jsx($, {
                src: n
            })]
        })
    },
    st = () => (m(() => {
        f("https://fonts.googleapis.com/css2?family=Pangolin&display=swap")
    }), t.jsxs(w, {
        children: [t.jsx(p, {
            title: "Draw That - Student Art Gallery",
            description: "Art created by students in Gimkit's Draw That!",
            override: !0
        }), t.jsx(j, {
            includeSpacer: !0
        }), t.jsxs(y, {
            children: [t.jsx(T, {}), t.jsx(I, {
                children: "Draw That!"
            }), t.jsx(D, {
                children: "Student Art Gallery - est. 2021"
            }), t.jsx(c, {}), t.jsx(u, {
                url: "/api/v1/fun/draw-that/fetch",
                limit: 7,
                defaultPage: 1,
                scrollStyle: {
                    width: "100%",
                    overflow: "hidden"
                },
                toRender: e => t.jsx(v, {
                    item: e
                }, e._id),
                loader: t.jsx("div", {
                    className: "maxWidth flex hc",
                    style: {
                        marginTop: 20
                    },
                    children: t.jsx(x, {
                        size: "large"
                    })
                })
            })]
        })]
    })),
    w = r.div.attrs({
        className: "flex-column vc"
    })`
  flex: 1;
  background: linear-gradient(
      rgba(253, 250, 250, 0.4),
      rgba(253, 250, 250, 0.4)
    ),
    url('/client/img/drawThat/pattern.png') repeat 0 0;
  color: ${o.Black};
  font-family: 'Pangolin', sans-serif;
`,
    y = r.div.attrs({
        className: "flex flex-column vc"
    })`
  width: 90%;
  max-width: 650px;
  margin: 40px 0px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
`,
    T = r.img.attrs({
        src: "/client/img/drawThat/art-gallery.svg"
    })`
  height: 150px;
  margin-bottom: 12px;
`,
    I = r.div`
  font-size: 65px;
  font-weight: ${s.Black};
  text-align: center;
`,
    D = r.div`
  font-size: 19px;
`,
    S = r.div.attrs({
        className: "maxWidth"
    })`
  margin-bottom: 30px;
`,
    k = r.div.attrs({
        className: "flex maxWidth vc"
    })`
  justify-content: space-between;
  margin-bottom: 12px;
`,
    A = r.div`
  font-size: 26px;
  font-weight: ${s.Bold};
`,
    N = r.div`
  font-size: 14px;
  opacity: 0.8;
`,
    $ = r.img.attrs({
        className: "maxWidth"
    })`
  border-radius: 5px;
  border: 1px solid ${o.BorderGray};
`;
export {
    st as
    default
};