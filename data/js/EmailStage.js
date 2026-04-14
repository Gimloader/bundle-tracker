import {
    r as n,
    x as D,
    j as e,
    a4 as I,
    a as w,
    t as A,
    M as Y,
    e as y,
    U as C,
    B as O,
    F as T,
    D as L,
    c as G,
    S as Z,
    V as H,
    ad as K,
    a6 as Q,
    a7 as X,
    d as b
} from "./_index.js";
import {
    o as W
} from "./mobxreact.esm.js";
import {
    a as _,
    C as ee,
    i as v
} from "./ContinueButton.js";
import {
    E as te
} from "./ErrorMessage.js";
import {
    I as oe
} from "./index-3.js";
import {
    s as ne
} from "./index-4.js";

function se(t = {}) {
    const {
        onScriptLoadSuccess: a,
        onScriptLoadError: i
    } = t, [l, u] = n.useState(!1), g = n.useRef(a);
    g.current = a;
    const m = n.useRef(i);
    return m.current = i, n.useEffect(() => {
        const d = document.createElement("script");
        return d.src = "https://accounts.google.com/gsi/client", d.async = !0, d.defer = !0, d.onload = () => {
            var c;
            u(!0), (c = g.current) === null || c === void 0 || c.call(g)
        }, d.onerror = () => {
            var c;
            u(!1), (c = m.current) === null || c === void 0 || c.call(m)
        }, document.body.appendChild(d), () => {
            document.body.removeChild(d)
        }
    }, []), l
}
const z = n.createContext(null);

function ie({
    clientId: t,
    onScriptLoadSuccess: a,
    onScriptLoadError: i,
    children: l
}) {
    const u = se({
            onScriptLoadSuccess: a,
            onScriptLoadError: i
        }),
        g = n.useMemo(() => ({
            clientId: t,
            scriptLoadedSuccessfully: u
        }), [t, u]);
    return D.createElement(z.Provider, {
        value: g
    }, l)
}

function re() {
    const t = n.useContext(z);
    if (!t) throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
    return t
}

function ae({
    flow: t = "implicit",
    scope: a = "",
    onSuccess: i,
    onError: l,
    ...u
}) {
    const {
        clientId: g,
        scriptLoadedSuccessfully: m
    } = re(), d = n.useRef(), c = n.useRef(i);
    c.current = i;
    const h = n.useRef(l);
    h.current = l, n.useEffect(() => {
        var o;
        if (!m) return;
        const f = t === "implicit" ? "initTokenClient" : "initCodeClient",
            x = (o = window.google) === null || o === void 0 ? void 0 : o.accounts.oauth2[f]({
                client_id: g,
                scope: `openid profile email ${a}`,
                callback: k => {
                    var s, p;
                    if (k.error) return (s = h.current) === null || s === void 0 ? void 0 : s.call(h, k);
                    (p = c.current) === null || p === void 0 || p.call(c, k)
                },
                ...u
            });
        d.current = x
    }, [g, m, t, a]);
    const E = n.useCallback(o => d.current.requestAccessToken(o), []),
        S = n.useCallback(() => d.current.requestCode(), []);
    return t === "implicit" ? E : S
}
const le = W(() => {
        const {
            navigation: t
        } = n.useContext(_);
        return t.loginError ? e.jsx(I, {
            style: {
                marginTop: 5
            },
            message: t.loginError && t.loginError.message && t.loginError.message.text ? t.loginError.message.text : "Error logging in. Please try again.",
            type: "error",
            showIcon: !0
        }) : null
    }),
    ce = () => e.jsx("div", {
        style: {
            height: 150
        },
        className: "maxWidth flex hc vc",
        children: e.jsx(Z, {
            size: "large"
        })
    }),
    de = t => {
        const [a, i] = n.useState([]), [l, u] = n.useState(!1), [g, m] = n.useState(!1), [d, c] = n.useState(!1), [h, E] = n.useState(!1), [S, o] = n.useState("");
        n.useEffect(() => {
            t.open ? (m(!0), w({
                url: "/api/users/password-reset-options",
                method: "post",
                data: {
                    email: t.defaultEmail
                },
                success: s => {
                    s.passwordless && u(s.passwordless), s.others && s.others.length ? i(s.others) : x()
                },
                error: s => {
                    A({
                        e: s,
                        default: {
                            title: "We ran into an error..."
                        },
                        onOk: () => window.location.reload()
                    })
                },
                both: () => {
                    m(!1)
                }
            })) : (i([]), u(!1), m(!1), c(!1), E(!1), o(""))
        }, [t.open]);
        const f = (s, p) => {
                d || (c(!0), w({
                    url: "/api/users/requestPasswordReset",
                    method: "post",
                    data: {
                        email: t.defaultEmail,
                        target: s
                    },
                    success: () => {
                        o(p), E(!0), c(!1)
                    },
                    error: N => {
                        A({
                            e: N,
                            default: {
                                title: "Error sending reset link"
                            },
                            onOk: () => window.location.reload()
                        })
                    }
                }))
            },
            x = () => f(),
            k = () => g || d ? e.jsx(ce, {}) : h ? e.jsxs("div", {
                className: "flex flex-column maxWidth vc hc",
                children: [e.jsx("div", {
                    children: e.jsx("i", {
                        className: "fas fa-check-circle",
                        style: {
                            fontSize: 75,
                            marginBottom: 15,
                            color: "#2e7d32"
                        }
                    })
                }), e.jsx("div", {
                    style: {
                        fontSize: 22,
                        textAlign: "center"
                    },
                    children: S ? `We just sent ${l?"an add password link":"a password reset link"} to ${S}. Ask them for the link and you should be good to go!` : `We just sent ${l?"an add password link":"a password reset link"} to your email. Open that link and you should be good to go!`
                })]
            }) : a.length ? e.jsxs("div", {
                children: [e.jsxs("div", {
                    style: {
                        fontSize: 23,
                        fontWeight: T.Bold,
                        textAlign: "center",
                        marginTop: 15,
                        marginBottom: 5
                    },
                    children: ["Where should we send the link to", " ", l ? "add a password" : "reset your password", "?"]
                }), e.jsx("div", {
                    style: {
                        fontSize: 17,
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    },
                    children: "If your school doesn't allow you to receive emails, select one of your teachers and they can give the link to you."
                }), e.jsx(L, {}), e.jsx(G, {
                    style: {
                        color: y.Black,
                        fontFamily: C.SFPro,
                        marginBottom: 10
                    },
                    onClick: x,
                    hoverable: !0,
                    children: "Me"
                }), a.map(s => e.jsx(G, {
                    style: {
                        color: y.Black,
                        fontFamily: C.SFPro,
                        marginBottom: 10
                    },
                    hoverable: !0,
                    onClick: () => f(s.id, s.name),
                    children: s.name
                }, `reset-${s.id}`))]
            }) : null;
        return e.jsx(Y, {
            style: {
                fontFamily: C.SFPro,
                color: y.Black
            },
            footer: [e.jsx(O, {
                onClick: t.close,
                children: "Close"
            }, 1)],
            closable: !1,
            width: 700,
            open: t.open,
            children: k()
        })
    },
    M = t => e.jsx(O, {
        style: {
            padding: "10px 20px",
            height: "auto"
        },
        disabled: !t.onClick,
        onClick: t.onClick,
        children: e.jsxs("div", {
            style: {
                fontFamily: C.SFPro,
                color: "rgba(0,0,0,0.75)"
            },
            className: "flex vc",
            children: [e.jsx("img", {
                src: "/client/img/signup/google.svg",
                alt: "Google Logo",
                style: {
                    height: 18,
                    marginRight: 11
                }
            }), e.jsxs("div", {
                children: [t.text, " with Google"]
            })]
        })
    }),
    ue = t => {
        const a = ae({
            onSuccess: i => {
                t.onToken(i.code)
            },
            onError: i => {
                t.onError(i)
            },
            flow: "auth-code"
        });
        return e.jsx(e.Fragment, {
            children: e.jsx(M, {
                text: t.text,
                onClick: a
            })
        })
    },
    ge = t => new Promise((a, i) => {
        w({
            url: "/api/users/google-auth-details",
            data: {
                jwt: t
            },
            success: l => {
                a(l)
            },
            error: l => {
                i(l)
            }
        })
    }),
    me = t => {
        var a = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return a.test(String(t).toLowerCase())
    },
    ye = W(() => {
        const [t, a] = n.useState(!1), [i, l] = n.useState(!1), [u, g] = n.useState(""), [m, d] = n.useState(!1), [c, h] = n.useState(null), [E, S] = n.useState(!1), {
            login: o,
            navigation: f
        } = n.useContext(_), {
            emailSignInBlocked: x
        } = f;
        n.useEffect(() => {
            w({
                url: "/api/users/google-token",
                success: r => {
                    r && r.token && g(r.token)
                }
            })
        }, []);
        const k = r => {
                if (h(null), i) return;
                const j = r.target.value || "";
                o.email = j, a(me(j))
            },
            s = () => {
                t && B()
            },
            p = () => {
                o.informationNeeded.replace(o.informationNeeded.filter(r => r !== v.email))
            },
            N = () => {
                o.informationNeeded.replace([...o.informationNeeded, v.accountType]), o.firstName || o.informationNeeded.replace([...o.informationNeeded, v.firstName]), o.lastName || o.informationNeeded.replace([...o.informationNeeded, v.lastName]), p()
            },
            B = () => {
                i || (h(null), l(!0), S(!1), w({
                    url: "/api/users/register/email-info",
                    method: "post",
                    data: {
                        email: o.email
                    },
                    success: r => {
                        if (l(!1), window.location.pathname.includes("login") && !r.accountExists) {
                            o.googleToken = "", S(!0);
                            return
                        }
                        if (r.accountExists) {
                            if (o.userExists = !0, !o.googleToken) {
                                if (r.noPassword) {
                                    f.emailSignInBlocked = !0;
                                    return
                                }
                                o.informationNeeded.replace([...o.informationNeeded, v.password])
                            }
                            p()
                        } else p(), N()
                    },
                    error: r => {
                        l(!1), h(r)
                    }
                }))
            },
            V = r => {
                const {
                    firstName: j,
                    lastName: q,
                    email: P,
                    emailVerified: U,
                    userToken: R
                } = r;
                P && (U && R && (o.googleToken = R), o.email = P, o.firstName = j, o.lastName = q, B())
            },
            F = () => {
                ne.error("Error with Google Authentication. Please try again.")
            },
            $ = r => {
                ge(r).then(j => {
                    V(j)
                }).catch(j => {
                    F()
                })
            },
            J = () => {
                const r = f.classJoiningName ? "Join" : "Continue";
                return e.jsxs(e.Fragment, {
                    children: [x && e.jsxs("div", {
                        style: {
                            fontWeight: T.Bold,
                            color: y.Black,
                            fontSize: 19,
                            marginBottom: 11
                        },
                        children: ["Authenticate with Google to", " ", f.classJoiningName ? "join" : "login"]
                    }), u ? e.jsx(ie, {
                        clientId: u,
                        children: e.jsx(ue, {
                            text: r,
                            onToken: $,
                            onError: F
                        })
                    }) : e.jsx(M, {
                        text: r
                    }), x ? e.jsxs(e.Fragment, {
                        children: [e.jsx(L, {}), e.jsx("a", {
                            onClick: () => d(!0),
                            children: "or add a password..."
                        }), e.jsx(de, {
                            defaultEmail: o.email,
                            open: m,
                            close: () => d(!1)
                        })]
                    }) : null, x ? null : e.jsx("div", {
                        className: "maxWidth",
                        children: e.jsx(L, {
                            children: "or"
                        })
                    }), !x && e.jsx(e.Fragment, {
                        children: e.jsxs(he, {
                            children: [e.jsxs(xe, {
                                children: [f.classJoiningName ? "Join" : "Continue", " with email..."]
                            }), e.jsx(oe, {
                                onChange: k,
                                size: "large",
                                placeholder: "Email address...",
                                onPressEnter: s,
                                maxLength: 256
                            }), e.jsx(ee, {
                                disabled: !t,
                                style: {
                                    marginTop: 5
                                },
                                onClick: s,
                                loading: i,
                                children: "Continue"
                            })]
                        })
                    }), !c && E ? e.jsx(I, {
                        type: "warning",
                        style: {
                            marginTop: 10
                        },
                        message: e.jsxs("div", {
                            children: ["No account found.", " ", H("blockRedirect") ? null : e.jsxs(e.Fragment, {
                                children: ["Click here to ", e.jsx("a", {
                                    href: K,
                                    children: "sign up."
                                })]
                            })]
                        })
                    }) : null, e.jsx(te, {
                        error: c,
                        style: {
                            marginTop: 10
                        }
                    }), e.jsx(le, {}), f.classJoiningName ? e.jsxs("div", {
                        style: {
                            marginTop: 25
                        },
                        children: ["By joining, you agree to our", " ", e.jsx("a", {
                            href: Q,
                            target: "_blank",
                            children: "Privacy Policy"
                        }), " ", "and", " ", e.jsx("a", {
                            href: X,
                            target: "_blank",
                            children: "Terms Of Service"
                        }), "."]
                    }) : null]
                })
            };
        return e.jsx(fe, {
            children: J()
        })
    }),
    fe = b.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,
    he = b.div`
  width: 100%;
  color: ${y.Black};
`,
    xe = b.div`
  font-size: 18px;
  font-weight: ${T.Bold};
`;
export {
    ye as E, de as F, le as L, me as v
};