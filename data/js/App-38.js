import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    O as r,
    _ as i,
    h as a,
    t as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    t as c
} from "./modal.js";
import {
    t as l
} from "./button.js";
import {
    t as u
} from "./input.js";
import {
    t as d
} from "./App-4.js";
import {
    $ as f
} from "./Paths.js";
import {
    t as p
} from "./jsx-runtime.js";
import {
    l as m,
    n as h,
    s as g,
    y as _
} from "./_index.js";
import {
    t as v
} from "./Paper.js";
import {
    t as y
} from "./NavigateTo.js";
var b = e(s()),
    x = p(),
    S = e => (0, x.jsx)(l, {
        block: !0,
        size: `large`,
        type: `primary`,
        disabled: e.disabled,
        loading: e.loading,
        onClick: e.onClick,
        children: e.children
    }),
    C = (0, x.jsxs)(x.Fragment, {
        children: [`If you are looking to downgrade/cancel your subscription, you can do so by visiting the "Plan & Billing" tab in settings. `, (0, x.jsx)(`br`, {}), ` `, (0, x.jsx)(`br`, {}), `By requesting account deletion, you will lose all of your kits, assignments, classes, and more. You also won't be able to login to your account again.`]
    }),
    w = `By deleting your account, you will be removed from all classes
you're currently part of. You will also lose any content you've
created and cosmetics earned.`,
    T = `delete my account`,
    E = e => {
        let [t, n] = b.useState(``), r = t !== T, a = () => {
            r || e.continue()
        };
        return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(`h1`, {
                children: `Are you sure you want to delete your account?`
            }), (0, x.jsxs)(`p`, {
                children: [i() ? w : C, ` To continue deleting your account, type `, (0, x.jsx)(`b`, {
                    style: {
                        userSelect: `none`
                    },
                    children: T
                }), ` `, `below.`]
            }), (0, x.jsx)(_, {}), (0, x.jsx)(u, {
                size: `large`,
                placeholder: `Enter here...`,
                onChange: e => n(e.target.value),
                style: {
                    marginBottom: 10
                },
                onPressEnter: a
            }), (0, x.jsx)(S, {
                onClick: a,
                disabled: r,
                children: `Continue`
            })]
        })
    },
    D = () => (0, x.jsxs)(x.Fragment, {
        children: [(0, x.jsx)(`h1`, {
            children: `Add a password to delete your account`
        }), (0, x.jsx)(`p`, {
            children: `In order to delete your account, you'll first need to attach a password to your account. You can attach a password in settings.`
        }), (0, x.jsx)(_, {}), (0, x.jsx)(S, {
            onClick: () => y(f),
            children: `Go To Settings`
        })]
    }),
    O = () => {
        let [e, a, o] = r(!1), [s, l] = b.useState(``), d = !s.length;
        return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(`h1`, {
                children: `Last chance.`
            }), (0, x.jsx)(`p`, {
                children: `Deleting your account is permanent and cannot be reversed. If you are confident you want to delete your account, enter your password below. Once you click "Delete My Account", your account will be permanently deleted.`
            }), (0, x.jsx)(_, {}), (0, x.jsx)(u.Password, {
                size: `large`,
                placeholder: `Password`,
                onChange: e => l(e.target.value),
                style: {
                    marginBottom: 10
                }
            }), (0, x.jsx)(S, {
                onClick: () => {
                    if (d || e) return;
                    let r = i();
                    a(), t({
                        url: `/api/user/delete`,
                        data: {
                            password: s
                        },
                        success: () => {
                            t({
                                url: `/logout`
                            }), c.success({
                                title: `Account deleted`,
                                content: r ? `You will be removed from all classes you are part of and all content you've created on Gimkit will be deleted. This process normally takes a few minutes, but can sometimes take up to a few hours.` : `Your account and all the content you've created will be deleted. Additionally, if you had an active subscriptions, we've canceled them. This process normally only takes a few minutes, but can sometimes take a few hours.`,
                                onOk: () => window.location.href = `/`
                            })
                        },
                        error: e => {
                            n({
                                e,
                                default: {
                                    title: `Error deleting account`
                                }
                            }), o()
                        }
                    })
                },
                disabled: d,
                loading: e,
                children: `Delete My Account`
            })]
        })
    },
    k = () => {
        let [e, t] = r(!1);
        return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(o, {
                override: !0,
                title: `Delete Account`
            }), (0, x.jsxs)(A, {
                children: [(0, x.jsx)(d, {
                    includeSpacer: !0
                }), (0, x.jsx)(v, {
                    style: {
                        width: `90%`,
                        maxWidth: 700,
                        marginTop: 30,
                        marginBottom: 50,
                        padding: 35,
                        flexDirection: `column`
                    },
                    children: a().passwordless ? (0, x.jsx)(D, {}) : e ? (0, x.jsx)(O, {}) : (0, x.jsx)(E, {
                        continue: t
                    })
                })]
            })]
        })
    },
    A = m.div.attrs({
        className: `flex-column vc`
    })`
  flex: 1;
  background: ${h.Snow};
  color: ${h.Black};
  h1 {
    font-size: 32px;
    font-weight: ${g.UltraBold};
  }
  p {
    font-size: 18px;
  }
`;
export {
    k as
    default
};