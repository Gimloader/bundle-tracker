import {
    o as e
} from "./rolldown-runtime.js";
import {
    Q as t,
    t as n,
    y as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    r as a,
    t as o
} from "./dropdown.js";
import {
    t as s
} from "./EllipsisOutlined.js";
import {
    t as c
} from "./spin.js";
import {
    t as l
} from "./App-4.js";
import {
    t as u
} from "./jsx-runtime.js";
import {
    a as d,
    l as f,
    n as p,
    s as m,
    y as h
} from "./_index.js";
import {
    t as g
} from "./InfiniteScroller.js";
var _ = e(t());
i();
var v = u(),
    y = e => {
        let {
            item: {
                _id: t,
                image: n,
                term: r,
                createdAt: i
            }
        } = e;
        return (0, v.jsxs)(E, {
            children: [(0, v.jsxs)(D, {
                children: [(0, v.jsxs)(`div`, {
                    children: [(0, v.jsx)(O, {
                        children: r
                    }), (0, v.jsxs)(k, {
                        children: [`Added to the gallery `, (0, _.default)(i).fromNow()]
                    })]
                }), (0, v.jsx)(`div`, {
                    children: (0, v.jsx)(o, {
                        overlay: (0, v.jsx)(a, {
                            children: (0, v.jsx)(a.Item, {
                                children: (0, v.jsx)(`a`, {
                                    href: `mailto:hello@gimkit.com?body=Art ID: ${t}`,
                                    children: `Report Abuse`
                                })
                            })
                        }),
                        children: (0, v.jsx)(s, {
                            style: {
                                cursor: `pointer`
                            }
                        })
                    })
                })]
            }), (0, v.jsx)(A, {
                src: n
            })]
        })
    },
    b = () => (d(() => {
        r(`https://fonts.googleapis.com/css2?family=Pangolin&display=swap`)
    }), (0, v.jsxs)(x, {
        children: [(0, v.jsx)(n, {
            title: `Draw That - Student Art Gallery`,
            description: `Art created by students in Gimkit's Draw That!`,
            override: !0
        }), (0, v.jsx)(l, {
            includeSpacer: !0
        }), (0, v.jsxs)(S, {
            children: [(0, v.jsx)(C, {}), (0, v.jsx)(w, {
                children: `Draw That!`
            }), (0, v.jsx)(T, {
                children: `Student Art Gallery - est. 2021`
            }), (0, v.jsx)(h, {}), (0, v.jsx)(g, {
                url: `/api/v1/fun/draw-that/fetch`,
                limit: 7,
                defaultPage: 1,
                scrollStyle: {
                    width: `100%`,
                    overflow: `hidden`
                },
                toRender: e => (0, v.jsx)(y, {
                    item: e
                }, e._id),
                loader: (0, v.jsx)(`div`, {
                    className: `maxWidth flex hc`,
                    style: {
                        marginTop: 20
                    },
                    children: (0, v.jsx)(c, {
                        size: `large`
                    })
                })
            })]
        })]
    })),
    x = f.div.attrs({
        className: `flex-column vc`
    })`
  flex: 1;
  background: linear-gradient(
      rgba(253, 250, 250, 0.4),
      rgba(253, 250, 250, 0.4)
    ),
    url('/client/img/drawThat/pattern.png') repeat 0 0;
  color: ${p.Black};
  font-family: 'Pangolin', sans-serif;
`,
    S = f.div.attrs({
        className: `flex flex-column vc`
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
    C = f.img.attrs({
        src: `/client/img/drawThat/art-gallery.svg`
    })`
  height: 150px;
  margin-bottom: 12px;
`,
    w = f.div`
  font-size: 65px;
  font-weight: ${m.Black};
  text-align: center;
`,
    T = f.div`
  font-size: 19px;
`,
    E = f.div.attrs({
        className: `maxWidth`
    })`
  margin-bottom: 30px;
`,
    D = f.div.attrs({
        className: `flex maxWidth vc`
    })`
  justify-content: space-between;
  margin-bottom: 12px;
`,
    O = f.div`
  font-size: 26px;
  font-weight: ${m.Bold};
`,
    k = f.div`
  font-size: 14px;
  opacity: 0.8;
`,
    A = f.img.attrs({
        className: `maxWidth`
    })`
  border-radius: 5px;
  border: 1px solid ${p.BorderGray};
`;
export {
    b as
    default
};