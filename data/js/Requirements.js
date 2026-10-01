import {
    j as e,
    U as o,
    B as a,
    dP as c,
    C as u,
    D as d,
    X as h,
    F as x
} from "./_index.js";
import {
    S as t
} from "./SeasonTicketName.js";
import {
    C as m
} from "./Names.js";
import {
    A as s
} from "./AccessibleAnchor.js";
import {
    C as n
} from "./Button.js";
import {
    T as r
} from "./index-14.js";
import {
    S as g
} from "./index-2.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-5.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
const p = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
    U = i => e.jsxs("div", {
        className: "maxWidth",
        children: [e.jsx(r.Title, {
            style: {
                fontFamily: o.FugazOne,
                textTransform: "uppercase",
                marginBottom: 5
            },
            level: 3,
            children: "Community Guidelines"
        }), e.jsxs(r.Text, {
            children: ["All published content must follow our", " ", e.jsx(s, {
                style: {
                    color: n.Yellow,
                    textDecoration: "underline"
                },
                to: p,
                target: "_blank",
                external: !0,
                children: "community guidelines."
            }), " ", "Failure to meet our guidelines may result in permanent account suspension."]
        }), e.jsx(r.Title, {
            style: {
                fontFamily: o.FugazOne,
                textTransform: "uppercase",
                marginTop: 35
            },
            level: 3,
            children: "Publishing Requirements"
        }), e.jsxs(g, {
            className: "maxWidth",
            direction: "vertical",
            size: 14,
            style: {
                marginTop: 10
            },
            children: [e.jsx(l, {
                title: "Username",
                description: e.jsxs(e.Fragment, {
                    children: ["All creators must set a username in", " ", e.jsx(s, {
                        style: {
                            color: n.Yellow,
                            textDecoration: "underline"
                        },
                        to: c,
                        target: "_blank",
                        children: "account settings"
                    }), " ", "before publishing a map"]
                }),
                children: i.requiresUsername ? e.jsx(a, {
                    block: !0,
                    onClick: i.refetch,
                    style: {
                        marginTop: 12
                    },
                    children: "I've added my username"
                }) : null
            }), e.jsx(l, {
                title: "Career Level 50+",
                description: `You must have leveled up 50+ times in all your time playing ${u}, unless you're a ${t.name} holder!`
            }), e.jsx(l, {
                title: `1,000+ ${m.currency}`,
                description: `Publishing a map costs 1,000 ${m.currency}. ${t.name} holders publish for free!`
            })]
        }), e.jsx(d, {}), i.publishRequirementError && !i.requiresUsername ? e.jsx("div", {
            style: {
                background: "rgba(255,0,0,0.1)",
                padding: 25,
                borderRadius: 8,
                border: "1px solid rgba(255,0,0,0.5)"
            },
            children: e.jsxs(r.Text, {
                children: [i.publishRequirementError, " ", e.jsx("br", {}), e.jsx("br", {}), e.jsxs(s, {
                    style: {
                        color: n.Yellow,
                        textDecoration: "underline"
                    },
                    to: h,
                    target: "_blank",
                    children: ["Purchase the ", t.name]
                }), " ", "to immediately become eligible & publish for free!"]
            })
        }) : e.jsxs("div", {
            className: "maxWidth flex-center flex-column",
            children: [e.jsx(a, {
                size: "large",
                block: !0,
                type: "primary",
                style: {
                    height: 55
                },
                onClick: i.next,
                disabled: i.requiresUsername,
                children: "Continue"
            }), e.jsx(r.Text, {
                italic: !0,
                style: {
                    marginTop: 10,
                    opacity: .7
                },
                children: i.requiresUsername ? "Set a username in account settings to continue." : "You pass all the requirements."
            })]
        })]
    }),
    l = i => e.jsxs("div", {
        style: {
            padding: 25,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8
        },
        children: [e.jsx("div", {
            style: {
                marginBottom: 5
            },
            children: e.jsx(r.Text, {
                style: {
                    fontWeight: x.Bold
                },
                children: i.title
            })
        }), e.jsx(r.Text, {
            italic: !0,
            children: i.description
        }), i.children]
    });
export {
    U as
    default
};