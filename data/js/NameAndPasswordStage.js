import {
    r as n,
    I as y,
    _ as P,
    j as t,
    B as S,
    D as x,
    e as L,
    F,
    U as k
} from "./_index.js";
import {
    a as C,
    i as a,
    C as E
} from "./ContinueButton.js";
import {
    T as z
} from "./index-5.js";
import {
    I as m
} from "./index-3.js";
var I = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
                }
            }]
        },
        name: "lock",
        theme: "outlined"
    },
    b = function(o, c) {
        return n.createElement(y, P({}, o, {
            ref: c,
            icon: I
        }))
    },
    M = n.forwardRef(b),
    g = (e => (e.educator = "educator", e.student = "student", e.guardian = "guardian", e.nonSchool = "nonSchool", e))(g || {});
const T = e => t.jsx(z, {
        title: "Learn more on why we collect this data",
        children: t.jsx(S, {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shape: "circle",
            icon: t.jsx(M, {}),
            href: e.link || "",
            target: "_blank"
        })
    }),
    _ = e => t.jsxs("div", {
        style: {
            justifyContent: "space-between"
        },
        className: "flex maxWidth",
        children: [t.jsx("div", {}), t.jsx(T, {
            link: e.link
        })]
    }),
    B = 20,
    H = 25,
    h = e => t.jsx("div", {
        style: {
            fontFamily: k.SFPro,
            fontWeight: F.Bold,
            color: L.Black,
            fontSize: 18
        },
        children: e.children
    }),
    f = {
        width: "100%",
        display: "flex",
        marginTop: 0,
        minHeight: 0
    },
    W = () => {
        const {
            login: e
        } = n.useContext(C), [o, c] = n.useState(e.firstName), [d, N] = n.useState(e.lastName), [i, j] = n.useState(e.password), p = s => c(s.target.value), v = s => N(s.target.value), w = s => j(s.target.value), u = () => {
            let s = !0;
            return e.informationNeeded.includes(a.firstName) && (o || (s = !1)), e.informationNeeded.includes(a.lastName) && (d || (s = !1)), e.informationNeeded.includes(a.accountPassword) && (!i || i.length < 6) && (s = !1), s
        }, r = () => {
            u() && (o && (e.firstName = o), d && (e.lastName = d), i && (e.password = i), e.informationNeeded.replace(e.informationNeeded.filter(s => s !== a.firstName && s !== a.lastName && s !== a.accountPassword)))
        }, l = e.accountType === g.student;
        return t.jsxs(t.Fragment, {
            children: [t.jsx(h, {
                children: "First Name"
            }), t.jsx(m, {
                maxLength: B,
                style: f,
                size: "large",
                placeholder: "First Name here...",
                onChange: p,
                onPressEnter: r,
                autoFocus: !0
            }), t.jsx("div", {
                style: {
                    height: 10
                }
            }), t.jsxs(h, {
                children: ["Last ", l ? "Initial" : "Name"]
            }), t.jsx(m, {
                maxLength: l ? 1 : H,
                style: f,
                size: "large",
                placeholder: `Last ${l?"Initial":"Name"} here...`,
                onChange: v,
                onPressEnter: r
            }), e.informationNeeded.includes(a.accountPassword) && t.jsxs(t.Fragment, {
                children: [t.jsx(x, {}), t.jsx(h, {
                    children: "Password"
                }), t.jsx("div", {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: "Must contain at least 6 characters"
                }), t.jsx(m.Password, {
                    style: f,
                    onChange: w,
                    placeholder: "Password here...",
                    size: "large",
                    maxLength: 96,
                    onPressEnter: r
                })]
            }), t.jsx(x, {}), t.jsx(E, {
                disabled: !u(),
                onClick: r,
                style: {
                    width: "100%"
                },
                size: "large",
                children: "Continue"
            }), t.jsx("div", {
                style: {
                    height: 10
                }
            }), !l && t.jsx(_, {
                link: "https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061"
            })]
        })
    };
export {
    g as A, H as M, W as N, _ as P, M as R, h as T, B as a
};