import {
    j as e,
    U as i,
    e as o,
    d as a,
    r as n,
    s as j,
    T as v,
    aj as y,
    aY as b
} from "./_index.js";
import {
    S
} from "./App-4.js";
import {
    a as k
} from "./Shortcut.js";
import {
    S as m
} from "./index-2.js";
import {
    C as z
} from "./CircularProgress.js";
import "./mobxreact.esm.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
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
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./Names.js";
import "./capitalize.js";
import "./inheritsLoose.js";
const F = t => e.jsx("div", {
        className: "maxWidth flex-center",
        style: {
            padding: 20,
            minHeight: "50vh"
        },
        children: e.jsxs("div", {
            className: "maxWidth flex-center flex-column",
            children: [e.jsx("img", {
                src: "/client/img/svgLogoWhite.svg",
                style: {
                    height: 45,
                    opacity: .9
                }
            }), e.jsx("div", {
                style: {
                    fontFamily: i.FugazOne,
                    textTransform: "uppercase",
                    fontSize: 75,
                    marginTop: 15,
                    textAlign: "center",
                    lineHeight: 1
                },
                children: "Rewind 2025"
            }), t.errorMessage ? e.jsx("div", {
                style: {
                    fontFamily: i.SFPro,
                    background: "rgba(255,255,255,0.1)",
                    padding: 20,
                    borderRadius: 6,
                    maxWidth: 500,
                    textAlign: "center",
                    marginTop: 15
                },
                children: t.errorMessage
            }) : null]
        })
    }),
    N = t => e.jsx(x, {
        background: t.background,
        children: e.jsxs(T, {
            children: [e.jsx(p, {
                children: t.title
            }), e.jsx(g, {
                children: t.label
            }), e.jsx(W, {
                children: t.value
            })]
        })
    }),
    x = a.div.attrs({
        className: "medium-shadow"
    })`
  background: ${t=>t.background};
  font-family: ${i.SFPro};
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
  color: ${o.White};
`,
    T = a.div.attrs({
        className: "maxWidth"
    })`
  padding: 40px;
  background: rgba(0, 0, 0, 0.1);
`,
    p = a.div`
  font-family: ${i.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
`,
    g = a.div`
  font-size: 20px;
  font-style: italic;
  opacity: 0.9;
  margin-top: -6px;
`,
    W = a.div`
  font-weight: 900;
  font-size: 80px;
  margin-top: 20px;
`,
    c = t => e.jsxs(w, {
        children: [e.jsx("div", {
            children: e.jsx("i", {
                className: t.completed ? "fas fa-check" : "fas fa-times",
                style: {
                    color: t.completed ? "#66BB6A" : "#EF9A9A",
                    fontSize: 20
                }
            })
        }), e.jsx("div", {
            style: {
                fontFamily: i.FugazOne,
                textTransform: "uppercase",
                marginLeft: 11,
                marginTop: 3
            },
            children: t.label
        })]
    }),
    C = t => e.jsxs(x, {
        background: "rgba(255,255,255,0.3)",
        style: {
            padding: 40
        },
        children: [e.jsx(p, {
            children: t.title
        }), e.jsx(g, {
            children: t.label
        }), e.jsxs(m, {
            className: "maxWidth",
            direction: "vertical",
            size: 8,
            style: {
                marginTop: 20
            },
            children: [t.completed.map(r => e.jsx(c, {
                label: r,
                completed: !0
            }, r + t.title)), t.notCompleted.map(r => e.jsx(c, {
                label: r,
                completed: !1
            }, r + t.title))]
        })]
    }),
    w = a.div.attrs({
        className: "maxWidth flex vc"
    })`
  background: rgba(0, 0, 0, 0.14);
  padding: 14px 20px;
  border-radius: 8px;
  line-height: 1;
`,
    $ = t => e.jsx(A, {
        className: "animated fadeIn",
        children: e.jsxs(m, {
            direction: "vertical",
            className: "maxWidth",
            size: 30,
            style: {
                marginBottom: 35
            },
            children: [t.items.map(r => r.type === "stat" ? e.jsx(N, {
                title: r.title,
                label: r.label,
                value: r.value,
                background: r.color
            }, r.title) : e.jsx(C, {
                title: r.title,
                label: r.label,
                completed: r.list.completed,
                notCompleted: r.list.notCompleted
            }, r.title)), e.jsx("div", {
                style: {
                    fontFamily: i.FugazOne,
                    textTransform: "uppercase",
                    fontSize: 16
                },
                children: "Thanks for a great year! See you in 2026!"
            })]
        })
    }),
    A = a.div.attrs({
        className: "maxWidth"
    })`
  .ant-space-item {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
`,
    me = () => {
        const [t, r] = n.useState(!0), [u, h] = n.useState([]), [l, f] = n.useState(null);
        return j(() => {
            y("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"), b({
                url: "/api/rewind",
                success: s => {
                    h(s)
                },
                error: s => {
                    var d;
                    f(((d = s == null ? void 0 : s.message) == null ? void 0 : d.text) ?? "An error occurred. Please try again later.")
                },
                both: () => {
                    r(!1)
                }
            })
        }), e.jsxs(L, {
            children: [e.jsx(v, {
                title: "Gimkit Rewind 2025",
                override: !0
            }), e.jsx(R, {}), e.jsx(S, {
                theme: k.dark,
                includeSpacer: !0
            }), e.jsxs(B, {
                children: [e.jsx(F, {
                    errorMessage: l
                }), t ? e.jsx("div", {
                    className: "maxWidth flex-center",
                    children: e.jsx(z, {
                        style: {
                            color: o.White
                        },
                        size: 60
                    })
                }) : l ? null : e.jsx($, {
                    items: u
                })]
            })]
        })
    },
    L = a.div.attrs({
        className: "flex-column scroll-y"
    })`
  color: ${o.White};
  height: 100vh;
`,
    R = a.div.attrs({
        className: "maxAll"
    })`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(151, 41, 247, 1) 0%,
    rgba(24, 22, 39, 1) 90%
  );
`,
    B = a.div`
  flex: 1;
`;
export {
    me as
    default
};