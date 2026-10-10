import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    n
} from "./dist-3.js";
import {
    t as r
} from "./jsx-runtime.js";
import {
    c as i,
    l as a
} from "./_index.js";
import {
    n as o,
    t as s
} from "./PublishedDate.js";
import {
    t as c
} from "./getCloudinaryUrl.js";
var l = e(t()),
    u = r(),
    d = ({
        map: e
    }) => {
        let t = o(e.lastPublishedAt);
        return (0, u.jsxs)(m, {
            children: [(0, u.jsx)(w, {
                to: `/creative/map/${e._id}`,
                "aria-label": e.title
            }), (0, u.jsx)(h, {
                children: (0, u.jsx)(p, {
                    src: c(e.image),
                    alt: ``,
                    loading: `lazy`
                })
            }), (0, u.jsxs)(g, {
                children: [(0, u.jsx)(f, {
                    tags: e.tags
                }), (0, u.jsx)(x, {
                    title: e.title,
                    children: e.title
                }), e.username || t ? (0, u.jsxs)(S, {
                    children: [e.username ? (0, u.jsxs)(T, {
                        children: [`@`, e.username]
                    }) : null, t ? (0, u.jsxs)(C, {
                        children: [e.hasBeenUpdated ? `Updated` : `Published`, ` `, (0, u.jsx)(s, {
                            value: e.lastPublishedAt
                        })]
                    }) : null]
                }) : null]
            })]
        })
    },
    f = ({
        tags: e
    }) => {
        let t = (0, l.useRef)(null),
            n = (0, l.useRef)(null),
            [r, i] = (0, l.useState)([]);
        return (0, l.useEffect)(() => {
            let e = !0,
                r = () => {
                    if (!e || !t.current || !n.current) return;
                    let r = t.current.clientWidth,
                        a = [];
                    Array.from(n.current.children).forEach((e, t) => {
                        let n = e.getBoundingClientRect().width + (a.length ? 6 : 0);
                        n <= r && (a.push(t), r -= n)
                    }), i(e => e.join(`,`) === a.join(`,`) ? e : a)
                },
                a = new ResizeObserver(r);
            return t.current && a.observe(t.current), r(), document.fonts.ready.then(r), () => {
                e = !1, a.disconnect()
            }
        }, [e]), (0, u.jsxs)(_, {
            ref: t,
            children: [(0, u.jsx)(v, {
                ref: n,
                "aria-hidden": `true`,
                children: e.map((e, t) => (0, u.jsx)(b, {
                    children: e
                }, t))
            }), r.length ? (0, u.jsx)(y, {
                children: r.map(t => (0, u.jsx)(b, {
                    children: e[t]
                }, t))
            }) : null]
        })
    },
    p = a.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.22s ease;
`,
    m = a.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;
  color: white;
  background: transparent;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover,
  &:focus-within {
    color: white;
    background: transparent;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
    &:hover ${p} {
      transform: scale(1.035);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    &,
    ${p} {
      transition: none;
    }
    &:hover,
    &:hover ${p} {
      transform: none;
    }
  }
`,
    h = a.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  overflow: hidden;
  background: rgba(27, 6, 91, 0.25);
`,
    g = a.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding: 12px 4px 6px;
`,
    _ = a.div`
  position: relative;
  min-width: 0;
`,
    v = a.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  pointer-events: none;
  width: max-content;
`,
    y = a.div`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 6px;
`,
    b = a.span`
  flex-shrink: 0;
  white-space: nowrap;
  font-family: ${i.SFPro};
  font-size: 10px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #eee5ff;
  background: rgba(103, 58, 183, 0.22);
  box-shadow: inset 0 0 0 1px rgba(214, 196, 255, 0.2);
  border-radius: 5px;
  padding: 4px 7px;
`,
    x = a.h3`
  font-family: ${i.SFPro};
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`,
    S = a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 5px;
  font-family: ${i.SFPro};
`,
    C = a.div`
  color: rgba(255, 255, 255, 0.65);
  font-family: ${i.SFPro};
  font-size: 12px;
  line-height: 1.4;
`,
    w = a(n)`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: inherit;
  &:focus-visible {
    outline: 3px solid #d6c4ff;
    outline-offset: -3px;
  }
`,
    T = a.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  overflow-wrap: anywhere;
`;
export {
    d as t
};