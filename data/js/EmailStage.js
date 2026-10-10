import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    m as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./message.js";
import {
    t as o
} from "./modal.js";
import {
    t as s
} from "./button.js";
import {
    t as c
} from "./input.js";
import {
    t as l
} from "./card.js";
import {
    t as u
} from "./spin.js";
import {
    W as d,
    et as f,
    q as p
} from "./Paths.js";
import {
    t as m
} from "./jsx-runtime.js";
import {
    b as h,
    c as g,
    l as _,
    n as v,
    s as y,
    y as b
} from "./_index.js";
import {
    r as x
} from "./mobxreact.esm.js";
import {
    a as S,
    i as C,
    t as w
} from "./StoreContext.js";
import {
    t as T
} from "./ErrorMessage.js";
var E = e(i());

function D(e = {}) {
    let {
        onScriptLoadSuccess: t,
        onScriptLoadError: n
    } = e, [r, i] = (0, E.useState)(!1), a = (0, E.useRef)(t);
    a.current = t;
    let o = (0, E.useRef)(n);
    return o.current = n, (0, E.useEffect)(() => {
        let e = document.createElement(`script`);
        return e.src = `https://accounts.google.com/gsi/client`, e.async = !0, e.defer = !0, e.onload = () => {
            var e;
            i(!0), (e = a.current) == null || e.call(a)
        }, e.onerror = () => {
            var e;
            i(!1), (e = o.current) == null || e.call(o)
        }, document.body.appendChild(e), () => {
            document.body.removeChild(e)
        }
    }, []), r
}
var O = (0, E.createContext)(null);

function k({
    clientId: e,
    onScriptLoadSuccess: t,
    onScriptLoadError: n,
    children: r
}) {
    let i = D({
            onScriptLoadSuccess: t,
            onScriptLoadError: n
        }),
        a = (0, E.useMemo)(() => ({
            clientId: e,
            scriptLoadedSuccessfully: i
        }), [e, i]);
    return E.createElement(O.Provider, {
        value: a
    }, r)
}

function A() {
    let e = (0, E.useContext)(O);
    if (!e) throw Error(`Google OAuth components must be used within GoogleOAuthProvider`);
    return e
}

function j({
    flow: e = `implicit`,
    scope: t = ``,
    onSuccess: n,
    onError: r,
    ...i
}) {
    let {
        clientId: a,
        scriptLoadedSuccessfully: o
    } = A(), s = (0, E.useRef)(), c = (0, E.useRef)(n);
    c.current = n;
    let l = (0, E.useRef)(r);
    l.current = r, (0, E.useEffect)(() => {
        var n;
        if (!o) return;
        let r = e === `implicit` ? `initTokenClient` : `initCodeClient`,
            u = (n = window.google) == null ? void 0 : n.accounts.oauth2[r]({
                client_id: a,
                scope: `openid profile email ${t}`,
                callback: e => {
                    var t, n;
                    if (e.error) return (t = l.current) == null ? void 0 : t.call(l, e);
                    (n = c.current) == null || n.call(c, e)
                },
                ...i
            });
        s.current = u
    }, [a, o, e, t]);
    let u = (0, E.useCallback)(e => s.current.requestAccessToken(e), []),
        d = (0, E.useCallback)(() => s.current.requestCode(), []);
    return e === `implicit` ? u : d
}
var M = m(),
    N = x(() => {
        let {
            navigation: e
        } = E.useContext(w);
        return e.loginError ? (0, M.jsx)(h, {
            style: {
                marginTop: 5
            },
            message: e.loginError && e.loginError.message && e.loginError.message.text ? e.loginError.message.text : `Error logging in. Please try again.`,
            type: `error`,
            showIcon: !0
        }) : null
    }),
    P = () => (0, M.jsx)(`div`, {
        style: {
            height: 150
        },
        className: `maxWidth flex hc vc`,
        children: (0, M.jsx)(u, {
            size: `large`
        })
    }),
    F = e => {
        let [r, i] = E.useState([]), [a, c] = E.useState(!1), [u, d] = E.useState(!1), [f, p] = E.useState(!1), [m, h] = E.useState(!1), [_, x] = E.useState(``);
        E.useEffect(() => {
            e.open ? (d(!0), t({
                url: `/api/users/password-reset-options`,
                method: `post`,
                data: {
                    email: e.defaultEmail
                },
                success: e => {
                    e.passwordless && c(e.passwordless), e.others && e.others.length ? i(e.others) : C()
                },
                error: e => {
                    n({
                        e,
                        default: {
                            title: `We ran into an error...`
                        },
                        onOk: () => window.location.reload()
                    })
                },
                both: () => {
                    d(!1)
                }
            })) : (i([]), c(!1), d(!1), p(!1), h(!1), x(``))
        }, [e.open]);
        let S = (r, i) => {
                f || (p(!0), t({
                    url: `/api/users/requestPasswordReset`,
                    method: `post`,
                    data: {
                        email: e.defaultEmail,
                        target: r
                    },
                    success: () => {
                        x(i), h(!0), p(!1)
                    },
                    error: e => {
                        n({
                            e,
                            default: {
                                title: `Error sending reset link`
                            },
                            onOk: () => window.location.reload()
                        })
                    }
                }))
            },
            C = () => S();
        return (0, M.jsx)(o, {
            style: {
                fontFamily: g.SFPro,
                color: v.Black
            },
            footer: [(0, M.jsx)(s, {
                onClick: e.close,
                children: `Close`
            }, 1)],
            closable: !1,
            width: 700,
            open: e.open,
            children: u || f ? (0, M.jsx)(P, {}) : m ? (0, M.jsxs)(`div`, {
                className: `flex flex-column maxWidth vc hc`,
                children: [(0, M.jsx)(`div`, {
                    children: (0, M.jsx)(`i`, {
                        className: `fas fa-check-circle`,
                        style: {
                            fontSize: 75,
                            marginBottom: 15,
                            color: `#2e7d32`
                        }
                    })
                }), (0, M.jsx)(`div`, {
                    style: {
                        fontSize: 22,
                        textAlign: `center`
                    },
                    children: _ ? `We just sent ${a?`an add password link`:`a password reset link`} to ${_}. Ask them for the link and you should be good to go!` : `We just sent ${a?`an add password link`:`a password reset link`} to your email. Open that link and you should be good to go!`
                })]
            }) : r.length ? (0, M.jsxs)(`div`, {
                children: [(0, M.jsxs)(`div`, {
                    style: {
                        fontSize: 23,
                        fontWeight: y.Bold,
                        textAlign: `center`,
                        marginTop: 15,
                        marginBottom: 5
                    },
                    children: [`Where should we send the link to`, ` `, a ? `add a password` : `reset your password`, `?`]
                }), (0, M.jsx)(`div`, {
                    style: {
                        fontSize: 17,
                        textAlign: `center`,
                        color: `rgba(0,0,0,0.7)`
                    },
                    children: `If your school doesn't allow you to receive emails, select one of your teachers and they can give the link to you.`
                }), (0, M.jsx)(b, {}), (0, M.jsx)(l, {
                    style: {
                        color: v.Black,
                        fontFamily: g.SFPro,
                        marginBottom: 10
                    },
                    onClick: C,
                    hoverable: !0,
                    children: `Me`
                }), r.map(e => (0, M.jsx)(l, {
                    style: {
                        color: v.Black,
                        fontFamily: g.SFPro,
                        marginBottom: 10
                    },
                    hoverable: !0,
                    onClick: () => S(e.id, e.name),
                    children: e.name
                }, `reset-${e.id}`))]
            }) : null
        })
    },
    I = e => (0, M.jsx)(s, {
        style: {
            padding: `10px 20px`,
            height: `auto`
        },
        disabled: !e.onClick,
        onClick: e.onClick,
        children: (0, M.jsxs)(`div`, {
            style: {
                fontFamily: g.SFPro,
                color: `rgba(0,0,0,0.75)`
            },
            className: `flex vc`,
            children: [(0, M.jsx)(`img`, {
                src: `/client/img/signup/google.svg`,
                alt: `Google Logo`,
                style: {
                    height: 18,
                    marginRight: 11
                }
            }), (0, M.jsxs)(`div`, {
                children: [e.text, ` with Google`]
            })]
        })
    }),
    L = e => {
        let t = j({
            onSuccess: t => {
                e.onToken(t.code)
            },
            onError: t => {
                e.onError(t)
            },
            flow: `auth-code`
        });
        return (0, M.jsx)(M.Fragment, {
            children: (0, M.jsx)(I, {
                text: e.text,
                onClick: t
            })
        })
    },
    R = e => new Promise((n, r) => {
        t({
            url: `/api/users/google-auth-details`,
            data: {
                jwt: e
            },
            success: e => {
                n(e)
            },
            error: e => {
                r(e)
            }
        })
    }),
    z = e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),
    B = x(() => {
        let [e, n] = E.useState(!1), [i, o] = E.useState(!1), [s, l] = E.useState(``), [u, m] = E.useState(!1), [g, _] = E.useState(null), [x, D] = E.useState(!1), {
            login: O,
            navigation: A
        } = E.useContext(w), {
            emailSignInBlocked: j
        } = A;
        E.useEffect(() => {
            t({
                url: `/api/users/google-token`,
                success: e => {
                    e && e.token && l(e.token)
                }
            })
        }, []);
        let P = e => {
                if (_(null), i) return;
                let t = e.target.value || ``;
                O.email = t, n(z(t))
            },
            B = () => {
                e && K()
            },
            W = () => {
                O.informationNeeded.replace(O.informationNeeded.filter(e => e !== C.email))
            },
            G = () => {
                O.informationNeeded.replace([...O.informationNeeded, C.accountType]), O.firstName || O.informationNeeded.replace([...O.informationNeeded, C.firstName]), O.lastName || O.informationNeeded.replace([...O.informationNeeded, C.lastName]), W()
            },
            K = () => {
                i || (_(null), o(!0), D(!1), t({
                    url: `/api/users/register/email-info`,
                    method: `post`,
                    data: {
                        email: O.email
                    },
                    success: e => {
                        if (o(!1), window.location.pathname.includes(`login`) && !e.accountExists) O.googleToken = ``, D(!0);
                        else if (e.accountExists) {
                            if (O.userExists = !0, !O.googleToken) {
                                if (e.noPassword) {
                                    A.emailSignInBlocked = !0;
                                    return
                                }
                                O.informationNeeded.replace([...O.informationNeeded, C.password])
                            }
                            W()
                        } else W(), G()
                    },
                    error: e => {
                        o(!1), _(e)
                    }
                }))
            },
            q = e => {
                let {
                    firstName: t,
                    lastName: n,
                    email: r,
                    emailVerified: i,
                    userToken: a
                } = e;
                r && (i && a && (O.googleToken = a), O.email = r, O.firstName = t, O.lastName = n, K())
            },
            J = () => {
                a.error(`Error with Google Authentication. Please try again.`)
            },
            Y = e => {
                R(e).then(e => {
                    q(e)
                }).catch(e => {
                    J()
                })
            };
        return (0, M.jsx)(V, {
            children: (() => {
                let t = A.classJoiningName ? `Join` : `Continue`;
                return (0, M.jsxs)(M.Fragment, {
                    children: [j && (0, M.jsxs)(`div`, {
                        style: {
                            fontWeight: y.Bold,
                            color: v.Black,
                            fontSize: 19,
                            marginBottom: 11
                        },
                        children: [`Authenticate with Google to`, ` `, A.classJoiningName ? `join` : `login`]
                    }), s ? (0, M.jsx)(k, {
                        clientId: s,
                        children: (0, M.jsx)(L, {
                            text: t,
                            onToken: Y,
                            onError: J
                        })
                    }) : (0, M.jsx)(I, {
                        text: t
                    }), j ? (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(b, {}), (0, M.jsx)(`a`, {
                            style: {
                                cursor: `pointer`
                            },
                            onClick: () => m(!0),
                            children: `or add a password...`
                        }), (0, M.jsx)(F, {
                            defaultEmail: O.email,
                            open: u,
                            close: () => m(!1)
                        })]
                    }) : null, j ? null : (0, M.jsx)(`div`, {
                        className: `maxWidth`,
                        children: (0, M.jsx)(b, {
                            children: `or`
                        })
                    }), !j && (0, M.jsx)(M.Fragment, {
                        children: (0, M.jsxs)(H, {
                            children: [(0, M.jsxs)(U, {
                                children: [A.classJoiningName ? `Join` : `Continue`, ` with email...`]
                            }), (0, M.jsx)(c, {
                                onChange: P,
                                size: `large`,
                                placeholder: `Email address...`,
                                onPressEnter: B,
                                maxLength: 256
                            }), (0, M.jsx)(S, {
                                disabled: !e,
                                style: {
                                    marginTop: 5
                                },
                                onClick: B,
                                loading: i,
                                children: `Continue`
                            })]
                        })
                    }), !g && x ? (0, M.jsx)(h, {
                        type: `warning`,
                        style: {
                            marginTop: 10
                        },
                        message: (0, M.jsxs)(`div`, {
                            children: [`No account found.`, ` `, r(`blockRedirect`) ? null : (0, M.jsxs)(M.Fragment, {
                                children: [`Click here to `, (0, M.jsx)(`a`, {
                                    href: p,
                                    children: `sign up.`
                                })]
                            })]
                        })
                    }) : null, (0, M.jsx)(T, {
                        error: g,
                        style: {
                            marginTop: 10
                        }
                    }), (0, M.jsx)(N, {}), A.classJoiningName ? (0, M.jsxs)(`div`, {
                        style: {
                            marginTop: 25
                        },
                        children: [`By joining, you agree to our`, ` `, (0, M.jsx)(`a`, {
                            href: d,
                            target: `_blank`,
                            children: `Privacy Policy`
                        }), ` `, `and`, ` `, (0, M.jsx)(`a`, {
                            href: f,
                            target: `_blank`,
                            children: `Terms Of Service`
                        }), `.`]
                    }) : null]
                })
            })()
        })
    }),
    V = _.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,
    H = _.div`
  width: 100%;
  color: ${v.Black};
`,
    U = _.div`
  font-size: 18px;
  font-weight: ${y.Bold};
`;
export {
    N as i, z as n, F as r, B as t
};