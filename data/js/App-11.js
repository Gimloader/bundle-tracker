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
} from "./index-JueF_e_O.js";
import {
    E as N
} from "./ErrorMessage-BmZBzmwA.js";
import {
    S as T
} from "./App-CVsQbxzN.js";
import {
    I as c
} from "./index-CrBw-JUo.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./index-DWUaWm5X.js";
import "./index-Dx05C7sF.js";
import "./index-txCQgMuj.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./App-BKUv5aDr.js";
import "./Sizes-BhgpZp_e.js";
import "./motion-C-xmDj6Z.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./StarOutlined-BGGlbh6F.js";
import "./NavigateTo-B9Fkdix9.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./index-D2z5EOhv.js";
import "./index-DwJM4HGs.js";
import "./move-BQfrK9lH.js";
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