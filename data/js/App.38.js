function e(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("dknAM", (function(t, n) {
    e(t.exports, "validateEmail", (function() {
        return F
    })), e(t.exports, "default", (function() {
        return R
    }));
    var r = o("hxEiv"),
        i = o("fywoC"),
        s = o("2FDaO"),
        l = o("lpEVe"),
        a = o("69SUA"),
        c = o("bfV0l"),
        d = o("fC6cp"),
        u = o("b9Zw0"),
        f = o("cy4A6"),
        g = o("lKmIF"),
        m = o("7abSH"),
        h = o("bcnSK"),
        p = o("da8gK"),
        x = o("iMOcM"),
        v = o("g4NpA"),
        y = o("4qFAu"),
        j = o("krV2e"),
        w = o("b1oE9"),
        k = o("54fdb"),
        S = o("fTRRg"),
        E = o("l6pAm"),
        C = o("68AGY");
    let b, N, A, T = e => e;
    const F = e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
    var R = (0, l.observer)((() => {
        const [e, t] = i.useState(!1), [o, n] = i.useState(!1), [s, l] = i.useState(""), [b, N] = i.useState(!1), [A, T] = i.useState(null), [R, O] = i.useState(!1), {
            login: G,
            navigation: L
        } = i.useContext(h.default), {
            emailSignInBlocked: M
        } = L;
        i.useEffect((() => {
            (0, x.request)({
                url: "/api/users/google-token",
                success: e => {
                    e && e.token && l(e.token)
                }
            })
        }), []);
        const q = e => {
                if (T(null), o) return;
                const n = e.target.value || "";
                G.email = n, t(F(n))
            },
            W = () => {
                e && V()
            },
            z = () => {
                G.informationNeeded.replace(G.informationNeeded.filter((e => e !== v.informationTypes.email)))
            },
            V = () => {
                o || (T(null), n(!0), O(!1), (0, x.request)({
                    url: "/api/users/register/email-info",
                    method: "post",
                    data: {
                        email: G.email
                    },
                    success: e => {
                        if (n(!1), window.location.pathname.includes("login") && !e.accountExists) return G.googleToken = "", void O(!0);
                        if (e.accountExists) {
                            if (G.userExists = !0, !G.googleToken) {
                                if (e.noPassword) return void(L.emailSignInBlocked = !0);
                                G.informationNeeded.replace([...G.informationNeeded, v.informationTypes.password])
                            }
                            z()
                        } else z(), G.informationNeeded.replace([...G.informationNeeded, v.informationTypes.accountType]), G.firstName || G.informationNeeded.replace([...G.informationNeeded, v.informationTypes.firstName]), G.lastName || G.informationNeeded.replace([...G.informationNeeded, v.informationTypes.lastName]), z()
                    },
                    error: e => {
                        n(!1), T(e)
                    }
                }))
            },
            _ = () => {
                f.default.error("Error with Google Authentication. Please try again.")
            },
            $ = e => {
                (0, C.default)(e).then((e => {
                    (e => {
                        const {
                            firstName: t,
                            lastName: o,
                            email: n,
                            emailVerified: r,
                            userToken: i
                        } = e;
                        n && (r && i && (G.googleToken = i), G.email = n, G.firstName = t, G.lastName = o, V())
                    })(e)
                })).catch((e => {
                    _()
                }))
            };
        return (0, r.jsx)(P, {
            children: (() => {
                const t = L.classJoiningName ? "Join" : "Continue";
                return (0, r.jsxs)(r.Fragment, {
                    children: [M && (0, r.jsxs)("div", {
                        style: {
                            fontWeight: a.FontWeights.Bold,
                            color: g.default.Black,
                            fontSize: 19,
                            marginBottom: 11
                        },
                        children: ["Authenticate with Google to", " ", L.classJoiningName ? "join" : "login"]
                    }), s ? (0, r.jsx)(y.GoogleOAuthProvider, {
                        clientId: s,
                        children: (0, r.jsx)(E.default, {
                            text: t,
                            onToken: $,
                            onError: _
                        })
                    }) : (0, r.jsx)(S.default, {
                        text: t
                    }), M ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.default, {}), (0, r.jsx)("a", {
                            onClick: () => N(!0),
                            children: "or add a password..."
                        }), (0, r.jsx)(k.default, {
                            defaultEmail: G.email,
                            open: b,
                            close: () => N(!1)
                        })]
                    }) : null, M ? null : (0, r.jsx)("div", {
                        className: "maxWidth",
                        children: (0, r.jsx)(d.default, {
                            children: "or"
                        })
                    }), !M && (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(B, {
                            children: [(0, r.jsxs)(I, {
                                children: [L.classJoiningName ? "Join" : "Continue", " with email..."]
                            }), (0, r.jsx)(u.default, {
                                onChange: q,
                                size: "large",
                                placeholder: "Email address...",
                                onPressEnter: W,
                                maxLength: 256
                            }), (0, r.jsx)(m.default, {
                                disabled: !e,
                                style: {
                                    marginTop: 5
                                },
                                onClick: W,
                                loading: o,
                                children: "Continue"
                            })]
                        })
                    }), !A && R ? (0, r.jsx)(c.default, {
                        type: "warning",
                        style: {
                            marginTop: 10
                        },
                        message: (0, r.jsxs)("div", {
                            children: ["No account found.", " ", (0, x.getUrlVariable)("blockRedirect") ? null : (0, r.jsxs)(r.Fragment, {
                                children: ["Click here to ", (0, r.jsx)("a", {
                                    href: w.REGISTER_BASE,
                                    children: "sign up."
                                })]
                            })]
                        })
                    }) : null, (0, r.jsx)(p.default, {
                        error: A,
                        style: {
                            marginTop: 10
                        }
                    }), (0, r.jsx)(j.default, {}), L.classJoiningName ? (0, r.jsxs)("div", {
                        style: {
                            marginTop: 25
                        },
                        children: ["By joining, you agree to our", " ", (0, r.jsx)("a", {
                            href: w.PRIVACY_POLICY,
                            target: "_blank",
                            children: "Privacy Policy"
                        }), " ", "and", " ", (0, r.jsx)("a", {
                            href: w.TERMS_OF_SERVICE,
                            target: "_blank",
                            children: "Terms Of Service"
                        }), "."]
                    }) : null]
                })
            })()
        })
    }));
    const P = s.default.div(b || (b = T`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`)),
        B = s.default.div(N || (N = T`
  width: 100%;
  color: ${0};
`), g.default.Black),
        I = s.default.div(A || (A = T`
  font-size: 18px;
  font-weight: ${0};
`), a.FontWeights.Bold)
})), o.register("4qFAu", (function(n, r) {
    e(n.exports, "GoogleOAuthProvider", (function() {
        return l
    })), e(n.exports, "useGoogleLogin", (function() {
        return c
    }));
    var i = o("fywoC");
    const s = (0, i.createContext)(null);

    function l({
        clientId: e,
        onScriptLoadSuccess: o,
        onScriptLoadError: n,
        children: r
    }) {
        const l = function(e = {}) {
                const {
                    onScriptLoadSuccess: t,
                    onScriptLoadError: o
                } = e, [n, r] = (0, i.useState)(!1), s = (0, i.useRef)(t);
                s.current = t;
                const l = (0, i.useRef)(o);
                return l.current = o, (0, i.useEffect)((() => {
                    const e = document.createElement("script");
                    return e.src = "https://accounts.google.com/gsi/client", e.async = !0, e.defer = !0, e.onload = () => {
                        var e;
                        r(!0), null === (e = s.current) || void 0 === e || e.call(s)
                    }, e.onerror = () => {
                        var e;
                        r(!1), null === (e = l.current) || void 0 === e || e.call(l)
                    }, document.body.appendChild(e), () => {
                        document.body.removeChild(e)
                    }
                }), []), n
            }({
                onScriptLoadSuccess: o,
                onScriptLoadError: n
            }),
            a = (0, i.useMemo)((() => ({
                clientId: e,
                scriptLoadedSuccessfully: l
            })), [e, l]);
        return t(i).createElement(s.Provider, {
            value: a
        }, r)
    }

    function a() {
        const e = (0, i.useContext)(s);
        if (!e) throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
        return e
    }

    function c({
        flow: e = "implicit",
        scope: t = "",
        onSuccess: o,
        onError: n,
        ...r
    }) {
        const {
            clientId: s,
            scriptLoadedSuccessfully: l
        } = a(), c = (0, i.useRef)(), d = (0, i.useRef)(o);
        d.current = o;
        const u = (0, i.useRef)(n);
        u.current = n, (0, i.useEffect)((() => {
            var o;
            if (!l) return;
            const n = "implicit" === e ? "initTokenClient" : "initCodeClient",
                i = null === (o = window.google) || void 0 === o ? void 0 : o.accounts.oauth2[n]({
                    client_id: s,
                    scope: `openid profile email ${t}`,
                    callback: e => {
                        var t, o;
                        if (e.error) return null === (t = u.current) || void 0 === t ? void 0 : t.call(u, e);
                        null === (o = d.current) || void 0 === o || o.call(d, e)
                    },
                    ...r
                });
            c.current = i
        }), [s, l, e, t]);
        const f = (0, i.useCallback)((e => c.current.requestAccessToken(e)), []),
            g = (0, i.useCallback)((() => c.current.requestCode()), []);
        return "implicit" === e ? f : g
    }
})), o.register("krV2e", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var r = o("hxEiv"),
        i = o("fywoC"),
        s = o("bfV0l"),
        l = o("lpEVe"),
        a = o("bcnSK");
    var c = (0, l.observer)((() => {
        const {
            navigation: e
        } = i.useContext(a.default);
        return e.loginError ? (0, r.jsx)(s.default, {
            style: {
                marginTop: 5
            },
            message: e.loginError && e.loginError.message && e.loginError.message.text ? e.loginError.message.text : "Error logging in. Please try again.",
            type: "error",
            showIcon: !0
        }) : null
    }))
})), o.register("54fdb", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var r = o("hxEiv"),
        i = o("fywoC"),
        s = o("93yIm"),
        l = o("7ECC6"),
        a = o("fC6cp"),
        c = o("fBuQJ"),
        d = o("gHmyG"),
        u = o("69SUA"),
        f = o("lKmIF"),
        g = o("iMOcM");
    const m = () => (0, r.jsx)("div", {
        style: {
            height: 150
        },
        className: "maxWidth flex hc vc",
        children: (0, r.jsx)(d.default, {
            size: "large"
        })
    });
    var h = e => {
        const [t, o] = i.useState([]), [n, d] = i.useState(!1), [h, p] = i.useState(!1), [x, v] = i.useState(!1), [y, j] = i.useState(!1), [w, k] = i.useState("");
        i.useEffect((() => {
            e.open ? (p(!0), (0, g.request)({
                url: "/api/users/password-reset-options",
                method: "post",
                data: {
                    email: e.defaultEmail
                },
                success: e => {
                    e.passwordless && d(e.passwordless), e.others && e.others.length ? o(e.others) : E()
                },
                error: e => {
                    (0, g.throwMessageError)({
                        e: e,
                        default: {
                            title: "We ran into an error..."
                        },
                        onOk: () => window.location.reload()
                    })
                },
                both: () => {
                    p(!1)
                }
            })) : (o([]), d(!1), p(!1), v(!1), j(!1), k(""))
        }), [e.open]);
        const S = (t, o) => {
                x || (v(!0), (0, g.request)({
                    url: "/api/users/requestPasswordReset",
                    method: "post",
                    data: {
                        email: e.defaultEmail,
                        target: t
                    },
                    success: () => {
                        k(o), j(!0), v(!1)
                    },
                    error: e => {
                        (0, g.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error sending reset link"
                            },
                            onOk: () => window.location.reload()
                        })
                    }
                }))
            },
            E = () => S();
        return (0, r.jsx)(c.default, {
            style: {
                fontFamily: u.Fonts.SFPro,
                color: f.default.Black
            },
            footer: [(0, r.jsx)(s.default, {
                onClick: e.close,
                children: "Close"
            }, 1)],
            closable: !1,
            width: 700,
            open: e.open,
            children: h || x ? (0, r.jsx)(m, {}) : y ? (0, r.jsxs)("div", {
                className: "flex flex-column maxWidth vc hc",
                children: [(0, r.jsx)("div", {
                    children: (0, r.jsx)("i", {
                        className: "fas fa-check-circle",
                        style: {
                            fontSize: 75,
                            marginBottom: 15,
                            color: "#2e7d32"
                        }
                    })
                }), (0, r.jsx)("div", {
                    style: {
                        fontSize: 22,
                        textAlign: "center"
                    },
                    children: w ? `We just sent ${n?"an add password link":"a password reset link"} to ${w}. Ask them for the link and you should be good to go!` : `We just sent ${n?"an add password link":"a password reset link"} to your email. Open that link and you should be good to go!`
                })]
            }) : t.length ? (0, r.jsxs)("div", {
                children: [(0, r.jsxs)("div", {
                    style: {
                        fontSize: 23,
                        fontWeight: u.FontWeights.Bold,
                        textAlign: "center",
                        marginTop: 15,
                        marginBottom: 5
                    },
                    children: ["Where should we send the link to", " ", n ? "add a password" : "reset your password", "?"]
                }), (0, r.jsx)("div", {
                    style: {
                        fontSize: 17,
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    },
                    children: "If your school doesn't allow you to receive emails, select one of your teachers and they can give the link to you."
                }), (0, r.jsx)(a.default, {}), (0, r.jsx)(l.default, {
                    style: {
                        color: f.default.Black,
                        fontFamily: u.Fonts.SFPro,
                        marginBottom: 10
                    },
                    onClick: E,
                    hoverable: !0,
                    children: "Me"
                }), t.map((e => (0, r.jsx)(l.default, {
                    style: {
                        color: f.default.Black,
                        fontFamily: u.Fonts.SFPro,
                        marginBottom: 10
                    },
                    hoverable: !0,
                    onClick: () => S(e.id, e.name),
                    children: e.name
                }, `reset-${e.id}`)))]
            }) : null
        })
    }
})), o.register("fTRRg", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = o("hxEiv");
    o("fywoC");
    var i = o("69SUA"),
        s = o("93yIm");
    var l = e => (0, r.jsx)(s.default, {
        style: {
            padding: "10px 20px",
            height: "auto"
        },
        disabled: !e.onClick,
        onClick: e.onClick,
        children: (0, r.jsxs)("div", {
            style: {
                fontFamily: i.Fonts.SFPro,
                color: "rgba(0,0,0,0.75)"
            },
            className: "flex vc",
            children: [(0, r.jsx)("img", {
                src: "/client/img/signup/google.svg",
                alt: "Google Logo",
                style: {
                    height: 18,
                    marginRight: 11
                }
            }), (0, r.jsxs)("div", {
                children: [e.text, " with Google"]
            })]
        })
    })
})), o.register("l6pAm", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var r = o("hxEiv"),
        i = o("4qFAu");
    o("fywoC");
    var s = o("fTRRg");
    var l = e => {
        const t = (0, i.useGoogleLogin)({
            onSuccess: t => {
                e.onToken(t.code)
            },
            onError: t => {
                e.onError(t)
            },
            flow: "auth-code"
        });
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(s.default, {
                text: e.text,
                onClick: t
            })
        })
    }
})), o.register("68AGY", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var r = o("iMOcM");
    var i = e => new Promise(((t, o) => {
        (0, r.request)({
            url: "/api/users/google-auth-details",
            data: {
                jwt: e
            },
            success: e => {
                t(e)
            },
            error: e => {
                o(e)
            }
        })
    }))
}));