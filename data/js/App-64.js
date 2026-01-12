import {
    y as L,
    j as e,
    U as p,
    d as s,
    u as c,
    r as b,
    n as M,
    f as P,
    i as E,
    C as y,
    Z as q,
    M as D,
    B as g,
    a as v,
    t as O,
    K as Y,
    F as _,
    T as B,
    E as U,
    cm as G,
    D as H
} from "./_index.js";
import {
    u as Q
} from "./useQuery.js";
import {
    b as Z
} from "./index-1.js";
import {
    a as m
} from "./Centered.js";
import {
    S as j
} from "./index-2.js";
import {
    C as n,
    M as J
} from "./Button.js";
import {
    A as l
} from "./AccessibleAnchor.js";
import {
    A as V
} from "./TrackEvent.js";
import {
    I as X
} from "./index-3.js";
import {
    g as z
} from "./getCloudinaryUrl.js";
import {
    F as ee
} from "./FontAwesomeIcon.js";
import {
    C as te
} from "./CircularProgress.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./TrackPostHogEvent.js";
import "./capitalize.js";
const re = ["creative-map-listing"],
    se = t => Q({
        queryKey: [re, t],
        retry: !1,
        queryFn: () => L({
            url: `/api/created-map/listing/info/${t}`
        })
    }),
    ie = t => e.jsxs(ae, {
        children: [t.tags.length ? e.jsx(j, {
            wrap: !0,
            direction: "horizontal",
            size: 10,
            style: {
                marginBottom: 6
            },
            children: t.tags.map((r, i) => e.jsx(ne, {
                children: r
            }, r + i))
        }) : null, e.jsx(oe, {
            children: t.title
        }), e.jsx(le, {
            children: t.description
        })]
    }),
    ae = s(m).attrs({
        className: "maxWidth"
    })`
  font-family: ${p.FugazOne};
  font-size: 42px;
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
`,
    oe = s.div`
  margin-bottom: 2px;
  font-size: 42px;
`,
    ne = s.div`
  font-family: ${p.FugazOne};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`,
    le = s.div`
  font-family: ${p.SFPro};
  text-transform: none;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
`,
    w = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
    de = t => {
        const [r, i, a] = c(!1), [o, R, S] = c(!1), [k, $] = c(!1), [I, N] = b.useState(""), [F, W, u] = c(!1), {
            id: x
        } = M(), A = () => {
            if (r) return;
            i();
            const d = {
                listing: x
            };
            t.kitId && (d.kit = t.kitId), V({
                event: "creative_discovery_hosted",
                properties: {
                    id: x
                }
            }), v({
                url: "/api/matchmaker/intent/map/play/listing/create",
                data: d,
                success: h => {
                    window.location.href = `/host?id=${h}`
                },
                error: h => {
                    O({
                        e: h,
                        default: {
                            title: "There was an error loading you in."
                        }
                    })
                },
                both: a
            })
        }, K = () => {
            o || (R(), v({
                url: `/api/created-map/listing/report/${x}`,
                data: {
                    comment: I
                },
                success: () => {
                    $()
                },
                both: () => {
                    S()
                }
            }))
        };
        return e.jsxs(ce, {
            children: [!P() && !E() ? e.jsxs(pe, {
                children: ["This map is limited to 5 players.", " ", e.jsxs(l, {
                    to: q,
                    style: {
                        color: n.Yellow,
                        textDecoration: "underline"
                    },
                    children: ["Upgrade to ", y, " Pro"]
                }), " ", "to remove this limit."]
            }) : null, e.jsx(J, {
                size: "large",
                type: "success",
                block: !0,
                onClick: A,
                ariaLabel: "Play Live",
                style: {
                    fontFamily: p.FugazOne,
                    width: "100%",
                    maxWidth: 350,
                    lineHeight: 1
                },
                children: e.jsx("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: "Play Live"
                })
            }), e.jsxs(me, {
                children: ["This map was not created by ", y, ". If anything in this map breaks our", " ", e.jsx(l, {
                    to: w,
                    external: !0,
                    target: "_blank",
                    style: {
                        color: n.Yellow,
                        textDecoration: "underline"
                    },
                    children: "Community Guidelines"
                }), ", please", " ", e.jsx(l, {
                    style: {
                        color: n.Yellow,
                        textDecoration: "underline",
                        cursor: "pointer"
                    },
                    onClick: W,
                    children: "report"
                }), " ", "and we will take proper action."]
            }), e.jsx(D, {
                open: F,
                onCancel: u,
                title: "Report map",
                footer: k ? e.jsx(g, {
                    onClick: u,
                    type: "primary",
                    children: "Close"
                }, "reported-close") : [e.jsx(g, {
                    onClick: u,
                    children: "Cancel"
                }, "reporting-close"), e.jsx(g, {
                    danger: !0,
                    loading: o,
                    onClick: K,
                    children: "Report Map"
                }, "reporting-submit")],
                children: k ? e.jsx(e.Fragment, {
                    children: "Your report was sent to our team. Thanks for keeping Gimkit safe!"
                }) : e.jsxs(e.Fragment, {
                    children: ["Found a map that breaks our", " ", e.jsx(l, {
                        to: w,
                        external: !0,
                        target: "_blank",
                        style: {
                            textDecoration: "underline"
                        },
                        children: "Community Guidelines"
                    }), "? Report it here and our team will take a look. Thanks for keeping Gimkit safe!", e.jsx(X.TextArea, {
                        placeholder: "Optional comment...",
                        style: {
                            marginTop: 10
                        },
                        maxLength: 1e3,
                        onChange: d => N(d.target.value)
                    })]
                })
            })]
        })
    },
    ce = s(m).attrs({
        className: "maxWidth"
    })`
  padding-top: 10px;
`,
    pe = s.div`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.15);
  padding: 14px 22px;
  border-radius: 6px;
`,
    me = s.div`
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`,
    ue = t => t.kits.length ? e.jsxs(C, {
        children: [e.jsxs(T, {
            children: ["This map allows players to answer questions.", e.jsx("br", {}), "Select the kit you would like players to answer questions from:"]
        }), e.jsx(j, {
            direction: "vertical",
            size: 15,
            className: "maxWidth",
            style: {
                marginTop: 25
            },
            children: t.kits.map(r => e.jsx(xe, {
                onSelect: () => t.selectKit(r._id),
                title: r.title,
                gif: r.gif
            }, r._id))
        })]
    }) : e.jsx(C, {
        children: e.jsxs(T, {
            children: ["This map has players answer questions from a kit, but you", " ", e.jsx("b", {
                children: "do not currently have any kits with questions."
            }), e.jsx("br", {}), e.jsx("br", {}), e.jsx(l, {
                to: Y,
                style: {
                    color: n.Yellow,
                    textDecoration: "underline"
                },
                children: "Create a kit,"
            }), " ", "add some questions and then come back here to play this map!"]
        })
    }),
    xe = t => e.jsx(he, {
        onClick: t.onSelect,
        children: e.jsxs(j, {
            direction: "horizontal",
            size: 16,
            wrap: !0,
            align: "center",
            children: [e.jsx(ge, {
                style: {
                    backgroundImage: `url(${z(t.gif)})`
                }
            }), e.jsx(fe, {
                children: t.title
            })]
        })
    }),
    C = s(m).attrs({
        className: "maxWidth"
    })``,
    T = s.div`
  text-align: center;
`,
    he = s.div.attrs({
        className: "maxWidth flex vc"
    })`
  cursor: pointer;

  border-radius: 6px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
    border-color: ${n.Yellow};
  }
`,
    ge = s.div.attrs({
        className: "light-shadow"
    })`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`,
    fe = s.div`
  font-weight: ${_.Bold};
  font-size: 16px;
`,
    ye = t => {
        const [r, i] = b.useState();
        return !r && t.response.kits ? e.jsx(ue, {
            kits: t.response.kits,
            selectKit: i
        }) : e.jsx(de, {
            kitId: r
        })
    },
    be = t => {
        const r = b.useRef(null),
            [i] = Z(r),
            a = Math.min(500, i * .9),
            o = a * (9 / 16);
        return e.jsxs(je, {
            ref: r,
            children: [e.jsx(ke, {
                style: {
                    width: a,
                    height: o,
                    backgroundImage: `url(${z(t.response.image)})`
                }
            }), e.jsxs(ve, {
                style: {
                    marginTop: o / 2 * -1,
                    paddingTop: o / 2 + 35
                },
                children: [e.jsx(B, {
                    title: `${t.response.title} | ${y} Creative`,
                    override: !0
                }), e.jsx(ie, {
                    ...t.response
                }), e.jsx(U, {
                    theme: {
                        algorithm: G.darkAlgorithm
                    },
                    children: e.jsx(H, {})
                }), e.jsx(ye, {
                    response: t.response
                })]
            })]
        })
    },
    je = s.div.attrs({
        className: "flex-column flex-center"
    })`
  width: 80%;
  max-width: 900px;
`,
    ke = s.div.attrs({
        className: "medium-shadow"
    })`
  border-radius: 8px;
  background-size: cover;
  z-index: 2;
`,
    ve = s.div.attrs({
        className: "maxWidth light-shadow"
    })`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 35px;
  border-radius: 12px;
`,
    Ee = () => {
        var o;
        const {
            id: t
        } = M(), {
            data: r,
            isLoading: i,
            error: a
        } = se(t);
        return i ? e.jsx(f, {
            children: e.jsx(te, {
                style: {
                    color: n.White,
                    marginTop: 50
                }
            })
        }) : a ? e.jsx(f, {
            children: e.jsxs(m, {
                className: "light-shadow",
                style: {
                    background: "rgba(255,255,255,0.1)",
                    padding: 30,
                    borderRadius: 8,
                    width: "90%",
                    marginTop: 25,
                    maxWidth: 500
                },
                children: [e.jsx("div", {
                    children: e.jsx(ee, {
                        name: "fas fa-exclamation-triangle",
                        style: {
                            color: n.Yellow,
                            fontSize: 42,
                            marginBottom: 20
                        }
                    })
                }), e.jsx("div", {
                    style: {
                        fontSize: 16
                    },
                    children: ((o = a == null ? void 0 : a.message) == null ? void 0 : o.text) || "There was an error. Please refresh and try again."
                })]
            })
        }) : e.jsx(f, {
            children: r ? e.jsx(be, {
                response: r
            }) : null
        })
    },
    f = s.div.attrs({
        className: "maxWidth flex-center"
    })`
  padding: 35px 0px;
`;
export {
    Ee as
    default
};