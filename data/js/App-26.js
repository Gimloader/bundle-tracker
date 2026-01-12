import {
    j as e,
    c as a,
    e as o,
    F as s,
    d as r,
    a3 as x,
    Z as g,
    U as l,
    T as f,
    D as c
} from "./_index.js";
import {
    A as j
} from "./AccessibleAnchor.js";
import {
    S as u
} from "./App-4.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
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
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const y = ["Simple and transparent pricing.", "No quote forms asking a million things.", "No calls with the sales team."],
    v = () => e.jsx(a, {
        style: {
            color: o.Black,
            textAlign: "left"
        },
        children: y.map(t => e.jsx(S, {
            children: t
        }, t))
    }),
    S = r.div`
  font-size: 23px;
  font-weight: ${s.Bold};
`,
    k = r.div`
  background: ${t=>t.background||"#101da5"};
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  color: ${o.White};
  font-family: ${l.SFPro};
  text-align: left;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.04);
  }
`,
    d = t => {
        const i = t.size == "large",
            n = {
                imageHeight: i ? 14 : 10,
                planNameFontSize: i ? 48 : 30,
                planNameMarginTop: i ? 5 : 7,
                planNameLineHeight: i ? "35px" : "17px",
                priceFontSize: i ? 37 : 24,
                priceDescriptionFontSize: i ? 11 : 9,
                priceDescriptionMarginTop: i ? -9 : -7
            },
            m = x() && t.plan.id ? g : t.plan.link,
            h = () => e.jsx(k, {
                background: t.plan.background,
                children: e.jsxs("div", {
                    className: "flex flex-wrap vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [e.jsxs("div", {
                        children: [e.jsx("img", {
                            src: "/client/img/svgLogoWhite.svg",
                            style: {
                                opacity: .7,
                                height: n.imageHeight
                            }
                        }), e.jsx("div", {
                            style: {
                                fontWeight: s.UltraBold,
                                fontSize: n.planNameFontSize,
                                marginTop: n.planNameMarginTop,
                                lineHeight: n.planNameLineHeight
                            },
                            children: t.plan.name
                        })]
                    }), e.jsxs("div", {
                        style: {
                            textAlign: "right"
                        },
                        children: [e.jsx("div", {
                            style: {
                                fontSize: n.priceFontSize,
                                fontWeight: s.UltraBold
                            },
                            children: t.plan.price
                        }), t.plan.description && e.jsx("div", {
                            style: {
                                fontSize: n.priceDescriptionFontSize,
                                opacity: .7,
                                marginTop: n.priceDescriptionMarginTop
                            },
                            children: t.plan.description
                        })]
                    })]
                })
            });
        return e.jsx(j, {
            to: m,
            className: "maxWidth",
            onClick: t.onClick,
            style: {
                textDecoration: "none"
            },
            children: h()
        })
    },
    z = {
        name: "Department",
        price: "$650",
        description: e.jsx("span", {
            style: {
                fontSize: 16
            },
            children: "per year, Pro for 20 teachers"
        }),
        background: "#311b92",
        link: "/quote/new/department-1"
    },
    w = {
        name: "School",
        price: "$1,000",
        description: e.jsx("span", {
            style: {
                fontSize: 16
            },
            children: "per year, Pro for every teacher at your school"
        }),
        background: "#2e7d32",
        link: "/quote/new/school-1"
    },
    F = () => e.jsxs("div", {
        className: "flex vc maxWidth hc flex-column",
        style: {
            marginTop: 35
        },
        children: [e.jsx("img", {
            src: "/client/img/svgLogo.svg",
            style: {
                height: 36,
                opacity: .86
            }
        }), e.jsx("div", {
            style: {
                fontSize: 83,
                marginTop: -28,
                fontWeight: s.UltraBold
            },
            children: "Groups"
        })]
    }),
    N = t => e.jsxs("div", {
        className: "flex vc",
        style: {
            margin: 10
        },
        children: [e.jsx("div", {
            style: {
                marginRight: 7,
                fontSize: 25
            },
            children: t.good ? e.jsx("i", {
                className: "fad fa-check-circle",
                style: {
                    color: "green"
                }
            }) : e.jsx("i", {
                className: "fad fa-times-circle",
                style: {
                    color: "red"
                }
            })
        }), e.jsx("div", {
            children: t.text
        })]
    }),
    C = t => e.jsx(b, {
        className: "flex maxWidth wrap vc hc",
        children: t.features.map(i => e.jsx(N, {
            good: i.good,
            text: i.text
        }, `feat-${i.good}-${i.text}`))
    }),
    b = r.div`
  text-align: left;
  font-size: 17px;
`,
    p = {
        width: "calc(100% - 10px)",
        color: o.Black,
        textAlign: "center",
        fontFamily: l.SFPro,
        fontSize: 25,
        fontWeight: s.Bold,
        cursor: "pointer"
    },
    W = () => {
        const t = () => window.open("https://help.gimkit.com/en/category/group-subscriptions-3m7198/"),
            i = () => window.open("mailto:groups@gimkit.com", "_self");
        return e.jsxs("div", {
            className: "maxWidth flex",
            children: [e.jsx(a, {
                onClick: t,
                style: p,
                hoverable: !0,
                children: "FAQ"
            }), e.jsx("div", {
                style: {
                    width: 20
                }
            }), e.jsx(a, {
                onClick: i,
                style: p,
                hoverable: !0,
                children: "Ask a question"
            })]
        })
    },
    $ = ["Payment with purchase order", "Payment with credit/debit card", "Group admin panel", "Discounted pricing"],
    re = () => e.jsxs(e.Fragment, {
        children: [e.jsx(f, {
            title: "Group Pricing"
        }), e.jsxs(A, {
            children: [e.jsx(u, {
                includeSpacer: !0
            }), e.jsxs(T, {
                style: {
                    maxWidth: 700
                },
                children: [e.jsx(F, {}), e.jsx(v, {}), e.jsx("div", {
                    style: {
                        height: 20
                    }
                }), e.jsx(C, {
                    features: $.map(t => ({
                        good: !0,
                        text: t
                    }))
                }), e.jsx("div", {
                    style: {
                        height: 20
                    }
                }), e.jsx(c, {
                    children: e.jsx("div", {
                        style: {
                            fontSize: 23
                        },
                        children: "Choose a plan to get a quote"
                    })
                }), e.jsx(d, {
                    plan: w,
                    size: "large"
                }), e.jsx("div", {
                    style: {
                        height: 10
                    }
                }), e.jsx(d, {
                    plan: z,
                    size: "small"
                }), e.jsx("div", {
                    style: {
                        height: 10
                    }
                }), e.jsxs(c, {
                    children: [" ", e.jsx("div", {
                        style: {
                            fontSize: 23
                        },
                        children: "Have some more questions?"
                    })]
                }), e.jsx(W, {}), e.jsx("div", {
                    style: {
                        height: 40
                    }
                })]
            })]
        })]
    }),
    A = r.div.attrs({
        className: "flex-column vc maxWidth"
    })`
  background: ${o.Snow};
  font-family: ${l.SFPro};
  color: ${o.Black};
`,
    T = r.div`
  width: 90%;
  max-width: 1000px;
`;
export {
    re as
    default
};