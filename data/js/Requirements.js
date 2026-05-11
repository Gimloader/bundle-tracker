import {
    j as e,
    U as s,
    C as m,
    D as c,
    X as u,
    B as d,
    F as p
} from "./_index.js";
import {
    S as r
} from "./SeasonTicketName.js";
import {
    C as o
} from "./Names.js";
import {
    A as l
} from "./AccessibleAnchor.js";
import {
    C as n
} from "./Button.js";
import {
    T as i
} from "./index-14.js";
import {
    S as h
} from "./index-2.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-5.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
const x = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
    q = t => e.jsxs("div", {
        className: "maxWidth",
        children: [e.jsx(i.Title, {
            style: {
                fontFamily: s.FugazOne,
                textTransform: "uppercase",
                marginBottom: 5
            },
            level: 3,
            children: "Community Guidelines"
        }), e.jsxs(i.Text, {
            children: ["All published content must follow our", " ", e.jsx(l, {
                style: {
                    color: n.Yellow,
                    textDecoration: "underline"
                },
                to: x,
                target: "_blank",
                external: !0,
                children: "community guidelines."
            }), " ", "Failure to meet our guidelines may result in permanent account suspension."]
        }), e.jsx(i.Title, {
            style: {
                fontFamily: s.FugazOne,
                textTransform: "uppercase",
                marginTop: 35
            },
            level: 3,
            children: "Publishing Requirements"
        }), e.jsxs(h, {
            className: "maxWidth",
            direction: "vertical",
            size: 14,
            style: {
                marginTop: 10
            },
            children: [e.jsx(a, {
                title: "Career Level 50+",
                description: `You must have leveled up 50+ times in all your time playing ${m}, unless you're a ${r.name} holder!`
            }), e.jsx(a, {
                title: `1,000+ ${o.currency}`,
                description: `Publishing a map costs 1,000 ${o.currency}. ${r.name} holders publish for free!`
            })]
        }), e.jsx(c, {}), t.publishRequirementError ? e.jsx("div", {
            style: {
                background: "rgba(255,0,0,0.1)",
                padding: 25,
                borderRadius: 8,
                border: "1px solid rgba(255,0,0,0.5)"
            },
            children: e.jsxs(i.Text, {
                children: [t.publishRequirementError, " ", e.jsx("br", {}), e.jsx("br", {}), e.jsxs(l, {
                    style: {
                        color: n.Yellow,
                        textDecoration: "underline"
                    },
                    to: u,
                    target: "_blank",
                    children: ["Purchase the ", r.name]
                }), " ", "to immediately become eligible & publish for free!"]
            })
        }) : e.jsxs("div", {
            className: "maxWidth flex-center flex-column",
            children: [e.jsx(d, {
                size: "large",
                block: !0,
                type: "primary",
                style: {
                    height: 55
                },
                onClick: t.next,
                children: "Continue"
            }), e.jsx(i.Text, {
                italic: !0,
                style: {
                    marginTop: 10,
                    opacity: .7
                },
                children: "You pass all the requirements."
            })]
        })]
    }),
    a = t => e.jsxs("div", {
        style: {
            padding: 25,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8
        },
        children: [e.jsx("div", {
            style: {
                marginBottom: 5
            },
            children: e.jsx(i.Text, {
                style: {
                    fontWeight: p.Bold
                },
                children: t.title
            })
        }), e.jsx(i.Text, {
            italic: !0,
            children: t.description
        })]
    });
export {
    q as
    default
};