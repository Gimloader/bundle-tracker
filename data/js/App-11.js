import {
    r as a,
    j as s,
    T as x,
    c as P,
    U as C,
    e as j,
    C as S,
    F as y,
    B as k,
    V as E,
    a as p
} from "./_index.js";
import {
    E as N
} from "./ErrorMessage.js";
import {
    S as T
} from "./App-4.js";
import {
    I as c
} from "./index-3.js";
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
const ts = () => {
    const [o, u] = a.useState(""), [n, h] = a.useState(""), [w, r] = a.useState(null), [l, m] = a.useState(!1), g = t => u(t.target.value), f = t => h(t.target.value), d = !!(o && n && !l), i = () => {
        if (!d) return;
        if (o.length < 6) return r("Password must contain at least 6 characters");
        if (o !== n) return r("Passwords do not match");
        const t = E("token");
        if (!t) return r("Invalid password reset link");
        m(!0), p({
            url: "/api/user/reset",
            method: "post",
            data: {
                newPassword: o,
                token: decodeURIComponent(t)
            },
            success: () => {
                p({
                    url: "/logout",
                    both: () => window.location.href = "login?pwr=true"
                })
            },
            error: e => {
                e && e.message && e.message.text && e.message.text === "Invalid token" ? r("This password reset link has expired.") : r(e)
            },
            both: () => m(!1)
        })
    };
    return s.jsxs(s.Fragment, {
        children: [s.jsx(x, {
            title: "New Gimkit Password"
        }), s.jsxs("div", {
            className: "flex-column maxWidth vc",
            children: [s.jsx(T, {
                includeSpacer: !0
            }), s.jsxs(P, {
                style: {
                    marginTop: 10,
                    width: "85%",
                    maxWidth: 450,
                    color: j.Black,
                    fontFamily: C.SFPro
                },
                children: [s.jsxs("div", {
                    style: {
                        fontSize: 31,
                        fontWeight: y.UltraBold
                    },
                    children: ["New ", S, " Password"]
                }), s.jsx(c.Password, {
                    size: "large",
                    placeholder: "New password...",
                    style: {
                        marginTop: -1,
                        display: "flex"
                    },
                    onChange: g,
                    onPressEnter: i,
                    maxLength: 96
                }), s.jsx(c.Password, {
                    size: "large",
                    placeholder: "Confirm new password...",
                    style: {
                        marginTop: 5,
                        display: "flex"
                    },
                    onChange: f,
                    onPressEnter: i
                }), s.jsx(k, {
                    onClick: i,
                    disabled: !d,
                    type: "primary",
                    loading: l,
                    style: {
                        marginTop: 5,
                        width: "100%"
                    },
                    children: "Submit"
                }), s.jsx(N, {
                    style: {
                        marginTop: 5
                    },
                    error: w
                })]
            })]
        })]
    })
};
export {
    ts as
    default
};