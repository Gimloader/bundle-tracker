import {
    j as e,
    B as w,
    r as p,
    i as y,
    D as l,
    dK as j,
    u as g,
    a as u,
    t as b,
    M as S,
    T as k,
    e as d,
    F as v,
    d as C,
    l as E
} from "./_index.js";
import {
    P as T
} from "./Paper.js";
import {
    I as h
} from "./index-3.js";
import {
    N as A
} from "./NavigateTo.js";
import {
    S as B
} from "./App-4.js";
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
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const c = t => e.jsx(w, {
        block: !0,
        size: "large",
        type: "primary",
        disabled: t.disabled,
        loading: t.loading,
        onClick: t.onClick,
        children: t.children
    }),
    P = e.jsxs(e.Fragment, {
        children: ['If you are looking to downgrade/cancel your subscription, you can do so by visiting the "Plan & Billing" tab in settings. ', e.jsx("br", {}), " ", e.jsx("br", {}), "By requesting account deletion, you will lose all of your kits, assignments, classes, and more. You also won't be able to login to your account again."]
    }),
    D = `By deleting your account, you will be removed from all classes
you're currently part of. You will also lose any content you've
created and cosmetics earned.`,
    m = "delete my account",
    F = t => {
        const [o, n] = p.useState(""), s = o !== m, r = () => {
            s || t.continue()
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx("h1", {
                children: "Are you sure you want to delete your account?"
            }), e.jsxs("p", {
                children: [y() ? D : P, " To continue deleting your account, type ", e.jsx("b", {
                    style: {
                        userSelect: "none"
                    },
                    children: m
                }), " ", "below."]
            }), e.jsx(l, {}), e.jsx(h, {
                size: "large",
                placeholder: "Enter here...",
                onChange: a => n(a.target.value),
                style: {
                    marginBottom: 10
                },
                onPressEnter: r
            }), e.jsx(c, {
                onClick: r,
                disabled: s,
                children: "Continue"
            })]
        })
    },
    I = () => e.jsxs(e.Fragment, {
        children: [e.jsx("h1", {
            children: "Add a password to delete your account"
        }), e.jsx("p", {
            children: "In order to delete your account, you'll first need to attach a password to your account. You can attach a password in settings."
        }), e.jsx(l, {}), e.jsx(c, {
            onClick: () => A(j),
            children: "Go To Settings"
        })]
    }),
    M = () => {
        const [t, o, n] = g(!1), [s, r] = p.useState(""), a = !s.length, x = () => {
            if (a || t) return;
            const i = y();
            o(), u({
                url: "/api/user/delete",
                data: {
                    password: s
                },
                success: () => {
                    u({
                        url: "/logout"
                    }), S.success({
                        title: "Account deleted",
                        content: i ? "You will be removed from all classes you are part of and all content you've created on Gimkit will be deleted. This process normally takes a few minutes, but can sometimes take up to a few hours." : "Your account and all the content you've created will be deleted. Additionally, if you had an active subscriptions, we've canceled them. This process normally only takes a few minutes, but can sometimes take a few hours.",
                        onOk: () => window.location.href = "/"
                    })
                },
                error: f => {
                    b({
                        e: f,
                        default: {
                            title: "Error deleting account"
                        }
                    }), n()
                }
            })
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx("h1", {
                children: "Last chance."
            }), e.jsx("p", {
                children: 'Deleting your account is permanent and cannot be reversed. If you are confident you want to delete your account, enter your password below. Once you click "Delete My Account", your account will be permanently deleted.'
            }), e.jsx(l, {}), e.jsx(h.Password, {
                size: "large",
                placeholder: "Password",
                onChange: i => r(i.target.value),
                style: {
                    marginBottom: 10
                }
            }), e.jsx(c, {
                onClick: x,
                disabled: a,
                loading: t,
                children: "Delete My Account"
            })]
        })
    },
    ce = () => {
        const [t, o] = g(!1), n = () => E().passwordless ? e.jsx(I, {}) : t ? e.jsx(M, {}) : e.jsx(F, {
            continue: o
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(k, {
                override: !0,
                title: "Delete Account"
            }), e.jsxs(N, {
                children: [e.jsx(B, {
                    includeSpacer: !0
                }), e.jsx(T, {
                    style: {
                        width: "90%",
                        maxWidth: 700,
                        marginTop: 30,
                        marginBottom: 50,
                        padding: 35,
                        flexDirection: "column"
                    },
                    children: n()
                })]
            })]
        })
    },
    N = C.div.attrs({
        className: "flex-column vc"
    })`
  flex: 1;
  background: ${d.Snow};
  color: ${d.Black};
  h1 {
    font-size: 32px;
    font-weight: ${v.UltraBold};
  }
  p {
    font-size: 18px;
  }
`;
export {
    ce as
    default
};