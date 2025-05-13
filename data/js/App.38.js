function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    a(d.exports, 'validateEmail', function() {
        return _F;
    }), a(d.exports, 'default', function() {
        return _G;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....');
    let B, C, D, E = F => F;
    const _F = G => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(G).toLowerCase());
    var _G = (0, i.observer)(() => {
        const [H, I] = g.useState(!1), [J, K] = g.useState(!1), [L, M] = g.useState(''), [N, O] = g.useState(!1), [P, Q] = g.useState(null), [R, S] = g.useState(!1), {
            login: T,
            navigation: U
        } = g.useContext(q.default), {
            emailSignInBlocked: V
        } = U;
        g.useEffect(() => {
            (0, s.request)({
                url: '/api/users/google-token',
                success: W => {
                    W && W.token && M(W.token);
                }
            });
        }, []);
        const W = X => {
                if (Q(null), J)
                    return;
                const Y = X.target.value || '';
                T.email = Y, I(_F(Y));
            },
            X = () => {
                H && _Z();
            },
            Y = () => {
                T.informationNeeded.replace(T.informationNeeded.filter(Z => Z !== t.informationTypes.email));
            },
            _Z = () => {
                J || (Q(null), K(!0), S(!1), (0, s.request)({
                    url: '/api/users/register/email-info',
                    method: 'post',
                    data: {
                        email: T.email
                    },
                    success: $ => {
                        if (K(!1), window.location.pathname.includes('login') && !$.accountExists)
                            return T.googleToken = '', void S(!0);
                        if ($.accountExists) {
                            if (T.userExists = !0, !T.googleToken) {
                                if ($.noPassword)
                                    return void(U.emailSignInBlocked = !0);
                                T.informationNeeded.replace([
                                    ...T.informationNeeded,
                                    t.informationTypes.password
                                ]);
                            }
                            Y();
                        } else
                            Y(), T.informationNeeded.replace([
                                ...T.informationNeeded,
                                t.informationTypes.accountType
                            ]), T.firstName || T.informationNeeded.replace([
                                ...T.informationNeeded,
                                t.informationTypes.firstName
                            ]), T.lastName || T.informationNeeded.replace([
                                ...T.informationNeeded,
                                t.informationTypes.lastName
                            ]), Y();
                    },
                    error: $ => {
                        K(!1), Q($);
                    }
                }));
            },
            $ = () => {
                n.default.error('Error with Google Authentication. Please try again.');
            },
            ab = bb => {
                (0, A.default)(bb).then(cb => {
                    (db => {
                        const {
                            firstName: eb,
                            lastName: fb,
                            email: gb,
                            emailVerified: hb,
                            userToken: ib
                        } = db;
                        gb && (hb && ib && (T.googleToken = ib), T.email = gb, T.firstName = eb, T.lastName = fb, _Z());
                    })(cb);
                }).catch(cb => {
                    $();
                });
            };
        return (0, f.jsx)(_H, {
            children: (() => {
                const bb = U.classJoiningName ? 'Join' : 'Continue';
                return (0, f.jsxs)(f.Fragment, {
                    children: [
                        V && (0, f.jsxs)('div', {
                            style: {
                                fontWeight: j.FontWeights.Bold,
                                color: o.default.Black,
                                fontSize: 19,
                                marginBottom: 11
                            },
                            children: [
                                'Authenticate with Google to',
                                ' ',
                                U.classJoiningName ? 'join' : 'login'
                            ]
                        }),
                        L ? (0, f.jsx)(u.GoogleOAuthProvider, {
                            clientId: L,
                            children: (0, f.jsx)(z.default, {
                                text: bb,
                                onToken: ab,
                                onError: $
                            })
                        }) : (0, f.jsx)(y.default, {
                            text: bb
                        }),
                        V ? (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(l.default, {}),
                                (0, f.jsx)('a', {
                                    onClick: () => O(!0),
                                    children: 'or add a password...'
                                }),
                                (0, f.jsx)(x.default, {
                                    defaultEmail: T.email,
                                    open: N,
                                    close: () => O(!1)
                                })
                            ]
                        }) : null,
                        V ? null : (0, f.jsx)('div', {
                            className: 'maxWidth',
                            children: (0, f.jsx)(l.default, {
                                children: 'or'
                            })
                        }),
                        !V && (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsxs)(_I, {
                                children: [
                                    (0, f.jsxs)(_J, {
                                        children: [
                                            U.classJoiningName ? 'Join' : 'Continue',
                                            ' with email...'
                                        ]
                                    }),
                                    (0, f.jsx)(m.default, {
                                        onChange: W,
                                        size: 'large',
                                        placeholder: 'Email address...',
                                        onPressEnter: X,
                                        maxLength: 256
                                    }),
                                    (0, f.jsx)(p.default, {
                                        disabled: !H,
                                        style: {
                                            marginTop: 5
                                        },
                                        onClick: X,
                                        loading: J,
                                        children: 'Continue'
                                    })
                                ]
                            })
                        }),
                        !P && R ? (0, f.jsx)(k.default, {
                            type: 'warning',
                            style: {
                                marginTop: 10
                            },
                            message: (0, f.jsxs)('div', {
                                children: [
                                    'No account found.',
                                    ' ',
                                    (0, s.getUrlVariable)('blockRedirect') ? null : (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            'Click here to ',
                                            (0, f.jsx)('a', {
                                                href: w.REGISTER_BASE,
                                                children: 'sign up.'
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null,
                        (0, f.jsx)(r.default, {
                            error: P,
                            style: {
                                marginTop: 10
                            }
                        }),
                        (0, f.jsx)(v.default, {}),
                        U.classJoiningName ? (0, f.jsxs)('div', {
                            style: {
                                marginTop: 25
                            },
                            children: [
                                'By joining, you agree to our',
                                ' ',
                                (0, f.jsx)('a', {
                                    href: w.PRIVACY_POLICY,
                                    target: '_blank',
                                    children: 'Privacy Policy'
                                }),
                                ' ',
                                'and',
                                ' ',
                                (0, f.jsx)('a', {
                                    href: w.TERMS_OF_SERVICE,
                                    target: '_blank',
                                    children: 'Terms Of Service'
                                }),
                                '.'
                            ]
                        }) : null
                    ]
                });
            })()
        });
    });
    const _H = h.default.div(B || (B = E`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`)),
        _I = h.default.div(C || (C = E`
  width: 100%;
  color: ${ 0 };
`), o.default.Black),
        _J = h.default.div(D || (D = E`
  font-size: 18px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), c.register('.....', function(d, e) {
    a(d.exports, 'GoogleOAuthProvider', function() {
        return _h;
    }), a(d.exports, 'useGoogleLogin', function() {
        return _m;
    });
    var f = c('.....');
    const g = (0, f.createContext)(null);

    function _h({
        clientId: i,
        onScriptLoadSuccess: j,
        onScriptLoadError: k,
        children: l
    }) {
        const m = function(n = {}) {
                const {
                    onScriptLoadSuccess: o,
                    onScriptLoadError: p
                } = n, [q, r] = (0, f.useState)(!1), s = (0, f.useRef)(o);
                s.current = o;
                const t = (0, f.useRef)(p);
                return t.current = p, (0, f.useEffect)(() => {
                    const u = document.createElement('script');
                    return u.src = 'https://accounts.google.com/gsi/client', u.async = !0, u.defer = !0, u.onload = () => {
                        var v;
                        r(!0), null === (v = s.current) || void 0 === v || v.call(s);
                    }, u.onerror = () => {
                        var v;
                        r(!1), null === (v = t.current) || void 0 === v || v.call(t);
                    }, document.body.appendChild(u), () => {
                        document.body.removeChild(u);
                    };
                }, []), q;
            }({
                onScriptLoadSuccess: j,
                onScriptLoadError: k
            }),
            n = (0, f.useMemo)(() => ({
                clientId: i,
                scriptLoadedSuccessfully: _h
            }), [
                i,
                _h
            ]);
        return b(f).createElement(g.Provider, {
            value: n
        }, l);
    }

    function k() {
        const l = (0, f.useContext)(g);
        if (!l)
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
        return l;
    }

    function _m({
        flow: n = 'implicit',
        scope: o = '',
        onSuccess: p,
        onError: q,
        ...r
    }) {
        const {
            clientId: s,
            scriptLoadedSuccessfully: t
        } = k(), u = (0, f.useRef)(), v = (0, f.useRef)(p);
        v.current = p;
        const w = (0, f.useRef)(q);
        w.current = q, (0, f.useEffect)(() => {
            var x;
            if (!_h)
                return;
            const y = 'implicit' === n ? 'initTokenClient' : 'initCodeClient',
                z = null === (x = window.google) || void 0 === x ? void 0 : x.accounts.oauth2[y]({
                    client_id: s,
                    scope: `openid profile email ${ o }`,
                    callback: A => {
                        var B, C;
                        if (A.error)
                            return null === (B = w.current) || void 0 === B ? void 0 : B.call(w, A);
                        null === (C = v.current) || void 0 === C || C.call(v, A);
                    },
                    ...r
                });
            _m.current = z;
        }, [
            s,
            _h,
            n,
            o
        ]);
        const x = (0, f.useCallback)(y => _m.current.requestAccessToken(y), []),
            y = (0, f.useCallback)(() => _m.current.requestCode(), []);
        return 'implicit' === n ? x : y;
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    var _k = (0, i.observer)(() => {
        const {
            navigation: l
        } = g.useContext(j.default);
        return l.loginError ? (0, f.jsx)(h.default, {
            style: {
                marginTop: 5
            },
            message: l.loginError && l.loginError.message && l.loginError.message.text ? l.loginError.message.text : 'Error logging in. Please try again.',
            type: 'error',
            showIcon: !0
        }) : null;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    const p = () => (0, f.jsx)('div', {
        style: {
            height: 150
        },
        className: 'maxWidth flex hc vc',
        children: (0, f.jsx)(l.default, {
            size: 'large'
        })
    });
    var _q = r => {
        const [s, t] = g.useState([]), [u, v] = g.useState(!1), [w, x] = g.useState(!1), [y, z] = g.useState(!1), [A, B] = g.useState(!1), [C, D] = g.useState('');
        g.useEffect(() => {
            r.open ? (x(!0), (0, o.request)({
                url: '/api/users/password-reset-options',
                method: 'post',
                data: {
                    email: r.defaultEmail
                },
                success: E => {
                    E.passwordless && v(E.passwordless), E.others && E.others.length ? t(E.others) : _F();
                },
                error: E => {
                    (0, o.throwMessageError)({
                        e: E,
                        default: {
                            title: 'We ran into an error...'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => {
                    x(!1);
                }
            })) : (t([]), v(!1), x(!1), z(!1), B(!1), D(''));
        }, [r.open]);
        const E = (F, G) => {
                y || (z(!0), (0, o.request)({
                    url: '/api/users/requestPasswordReset',
                    method: 'post',
                    data: {
                        email: r.defaultEmail,
                        target: F
                    },
                    success: () => {
                        D(G), B(!0), z(!1);
                    },
                    error: H => {
                        (0, o.throwMessageError)({
                            e: H,
                            default: {
                                title: 'Error sending reset link'
                            },
                            onOk: () => window.location.reload()
                        });
                    }
                }));
            },
            _F = () => E();
        return (0, f.jsx)(k.default, {
            style: {
                fontFamily: m.Fonts.SFPro,
                color: n.default.Black
            },
            footer: [(0, f.jsx)(h.default, {
                onClick: r.close,
                children: 'Close'
            }, 1)],
            closable: !1,
            width: 700,
            open: r.open,
            children: w || y ? (0, f.jsx)(p, {}) : A ? (0, f.jsxs)('div', {
                className: 'flex flex-column maxWidth vc hc',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)('i', {
                            className: 'fas fa-check-circle',
                            style: {
                                fontSize: 75,
                                marginBottom: 15,
                                color: '#2e7d32'
                            }
                        })
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 22,
                            textAlign: 'center'
                        },
                        children: C ? `We just sent ${ u ? 'an add password link' : 'a password reset link' } to ${ C }. Ask them for the link and you should be good to go!` : `We just sent ${ u ? 'an add password link' : 'a password reset link' } to your email. Open that link and you should be good to go!`
                    })
                ]
            }) : s.length ? (0, f.jsxs)('div', {
                children: [
                    (0, f.jsxs)('div', {
                        style: {
                            fontSize: 23,
                            fontWeight: m.FontWeights.Bold,
                            textAlign: 'center',
                            marginTop: 15,
                            marginBottom: 5
                        },
                        children: [
                            'Where should we send the link to',
                            ' ',
                            u ? 'add a password' : 'reset your password',
                            '?'
                        ]
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 17,
                            textAlign: 'center',
                            color: 'rgba(0,0,0,0.7)'
                        },
                        children: 'If your school doesn\'t allow you to receive emails, select one of your teachers and they can give the link to you.'
                    }),
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsx)(i.default, {
                        style: {
                            color: n.default.Black,
                            fontFamily: m.Fonts.SFPro,
                            marginBottom: 10
                        },
                        onClick: _F,
                        hoverable: !0,
                        children: 'Me'
                    }),
                    s.map(G => (0, f.jsx)(i.default, {
                        style: {
                            color: n.default.Black,
                            fontFamily: m.Fonts.SFPro,
                            marginBottom: 10
                        },
                        hoverable: !0,
                        onClick: () => E(G.id, G.name),
                        children: G.name
                    }, `reset-${ G.id }`))
                ]
            }) : null
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    var _i = j => (0, f.jsx)(h.default, {
        style: {
            padding: '10px 20px',
            height: 'auto'
        },
        disabled: !j.onClick,
        onClick: j.onClick,
        children: (0, f.jsxs)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                color: 'rgba(0,0,0,0.75)'
            },
            className: 'flex vc',
            children: [
                (0, f.jsx)('img', {
                    src: '/client/img/signup/google.svg',
                    alt: 'Google Logo',
                    style: {
                        height: 18,
                        marginRight: 11
                    }
                }),
                (0, f.jsxs)('div', {
                    children: [
                        j.text,
                        ' with Google'
                    ]
                })
            ]
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....');
    var _i = j => {
        const k = (0, g.useGoogleLogin)({
            onSuccess: l => {
                j.onToken(l.code);
            },
            onError: l => {
                j.onError(l);
            },
            flow: 'auth-code'
        });
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsx)(h.default, {
                text: j.text,
                onClick: k
            })
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = h => new Promise((i, j) => {
        (0, f.request)({
            url: '/api/users/google-auth-details',
            data: {
                jwt: h
            },
            success: k => {
                i(k);
            },
            error: k => {
                j(k);
            }
        });
    });
});