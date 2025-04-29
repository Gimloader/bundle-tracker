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
c.register('BTX4Q', function(d, e) {
    a(d.exports, 'validateEmail', function() {
        return _F;
    }), a(d.exports, 'default', function() {
        return _G;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('6jmvl'),
        j = c('Eh2Wh'),
        k = c('qMSe6'),
        l = c('VNuyu'),
        m = c('aevdF'),
        n = c('Bjl070'),
        o = c('8KqQ+'),
        p = c('qfXCk3'),
        q = c('UmTL74'),
        r = c('AvOwZ2'),
        s = c('quE27'),
        t = c('zB1Rq4'),
        u = c('CNAYr'),
        v = c('30iJZ'),
        w = c('nKuOQ'),
        x = c('sL56x'),
        y = c('yCNJL'),
        z = c('vrjQO'),
        A = c('uEqa5');
    let B, C, D, E = a => a;
    const _F = a => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase());
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
                success: H => {
                    H && H.token && M(H.token);
                }
            });
        }, []);
        const W = H => {
                if (Q(null), J)
                    return;
                const X = H.target.value || '';
                T.email = X, I(_F(X));
            },
            X = () => {
                H && _Z();
            },
            Y = () => {
                T.informationNeeded.replace(T.informationNeeded.filter(H => H !== t.informationTypes.email));
            },
            _Z = () => {
                J || (Q(null), K(!0), S(!1), (0, s.request)({
                    url: '/api/users/register/email-info',
                    method: 'post',
                    data: {
                        email: T.email
                    },
                    success: H => {
                        if (K(!1), window.location.pathname.includes('login') && !H.accountExists)
                            return T.googleToken = '', void S(!0);
                        if (H.accountExists) {
                            if (T.userExists = !0, !T.googleToken) {
                                if (H.noPassword)
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
                    error: H => {
                        K(!1), Q(H);
                    }
                }));
            },
            $ = () => {
                n.default.error('Error with Google Authentication. Please try again.');
            },
            ab = H => {
                (0, A.default)(H).then(H => {
                    (H => {
                        const {
                            firstName: bb,
                            lastName: cb,
                            email: db,
                            emailVerified: eb,
                            userToken: fb
                        } = H;
                        db && (eb && fb && (T.googleToken = fb), T.email = db, T.firstName = bb, T.lastName = cb, _Z());
                    })(H);
                }).catch(H => {
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
}), c.register('CNAYr', function(d, e) {
    a(d.exports, 'GoogleOAuthProvider', function() {
        return _h;
    }), a(d.exports, 'useGoogleLogin', function() {
        return _j;
    });
    var f = c('O0Kav');
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
                scriptLoadedSuccessfully: m
            }), [
                i,
                m
            ]);
        return b(f).createElement(g.Provider, {
            value: n
        }, l);
    }

    function i() {
        const j = (0, f.useContext)(g);
        if (!j)
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
        return j;
    }

    function _j({
        flow: k = 'implicit',
        scope: l = '',
        onSuccess: m,
        onError: n,
        ...o
    }) {
        const {
            clientId: p,
            scriptLoadedSuccessfully: q
        } = i(), r = (0, f.useRef)(), s = (0, f.useRef)(m);
        s.current = m;
        const t = (0, f.useRef)(n);
        t.current = n, (0, f.useEffect)(() => {
            var u;
            if (!q)
                return;
            const v = 'implicit' === k ? 'initTokenClient' : 'initCodeClient',
                w = null === (u = window.google) || void 0 === u ? void 0 : u.accounts.oauth2[v]({
                    client_id: p,
                    scope: `openid profile email ${ l }`,
                    callback: k => {
                        var x, y;
                        if (k.error)
                            return null === (x = t.current) || void 0 === x ? void 0 : x.call(t, k);
                        null === (y = s.current) || void 0 === y || y.call(s, k);
                    },
                    ...o
                });
            r.current = w;
        }, [
            p,
            q,
            k,
            l
        ]);
        const u = (0, f.useCallback)(k => r.current.requestAccessToken(k), []),
            v = (0, f.useCallback)(() => r.current.requestCode(), []);
        return 'implicit' === k ? u : v;
    }
}), c.register('30iJZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('qMSe6'),
        i = c('6jmvl'),
        j = c('UmTL74');
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
}), c.register('sL56x', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('QZ0Z+'),
        j = c('VNuyu'),
        k = c('AE7vR'),
        l = c('yruHD'),
        m = c('Eh2Wh'),
        n = c('8KqQ+'),
        o = c('quE27');
    const p = () => (0, f.jsx)('div', {
        style: {
            height: 150
        },
        className: 'maxWidth flex hc vc',
        children: (0, f.jsx)(l.default, {
            size: 'large'
        })
    });
    var _q = a => {
        const [r, s] = g.useState([]), [t, u] = g.useState(!1), [v, w] = g.useState(!1), [x, y] = g.useState(!1), [z, A] = g.useState(!1), [B, C] = g.useState('');
        g.useEffect(() => {
            a.open ? (w(!0), (0, o.request)({
                url: '/api/users/password-reset-options',
                method: 'post',
                data: {
                    email: a.defaultEmail
                },
                success: a => {
                    a.passwordless && u(a.passwordless), a.others && a.others.length ? s(a.others) : _E();
                },
                error: a => {
                    (0, o.throwMessageError)({
                        e: a,
                        default: {
                            title: 'We ran into an error...'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => {
                    w(!1);
                }
            })) : (s([]), u(!1), w(!1), y(!1), A(!1), C(''));
        }, [a.open]);
        const D = (r, s) => {
                x || (y(!0), (0, o.request)({
                    url: '/api/users/requestPasswordReset',
                    method: 'post',
                    data: {
                        email: a.defaultEmail,
                        target: r
                    },
                    success: () => {
                        C(s), A(!0), y(!1);
                    },
                    error: a => {
                        (0, o.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error sending reset link'
                            },
                            onOk: () => window.location.reload()
                        });
                    }
                }));
            },
            _E = () => D();
        return (0, f.jsx)(k.default, {
            style: {
                fontFamily: m.Fonts.SFPro,
                color: n.default.Black
            },
            footer: [(0, f.jsx)(h.default, {
                onClick: a.close,
                children: 'Close'
            }, 1)],
            closable: !1,
            width: 700,
            open: a.open,
            children: v || x ? (0, f.jsx)(p, {}) : z ? (0, f.jsxs)('div', {
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
                        children: B ? `We just sent ${ t ? 'an add password link' : 'a password reset link' } to ${ B }. Ask them for the link and you should be good to go!` : `We just sent ${ t ? 'an add password link' : 'a password reset link' } to your email. Open that link and you should be good to go!`
                    })
                ]
            }) : r.length ? (0, f.jsxs)('div', {
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
                            t ? 'add a password' : 'reset your password',
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
                        onClick: _E,
                        hoverable: !0,
                        children: 'Me'
                    }),
                    r.map(a => (0, f.jsx)(i.default, {
                        style: {
                            color: n.default.Black,
                            fontFamily: m.Fonts.SFPro,
                            marginBottom: 10
                        },
                        hoverable: !0,
                        onClick: () => D(a.id, a.name),
                        children: a.name
                    }, `reset-${ a.id }`))
                ]
            }) : null
        });
    };
}), c.register('yCNJL', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('Eh2Wh'),
        h = c('P1KtI');
    var _i = a => (0, f.jsx)(h.default, {
        style: {
            padding: '10px 20px',
            height: 'auto'
        },
        disabled: !a.onClick,
        onClick: a.onClick,
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
                        a.text,
                        ' with Google'
                    ]
                })
            ]
        })
    });
}), c.register('vrjQO', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('CNAYr');
    c('O0Kav');
    var h = c('yCNJL');
    var _i = a => {
        const j = (0, g.useGoogleLogin)({
            onSuccess: j => {
                a.onToken(j.code);
            },
            onError: j => {
                a.onError(j);
            },
            flow: 'auth-code'
        });
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsx)(h.default, {
                text: a.text,
                onClick: j
            })
        });
    };
}), c.register('uEqa5', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('quE27');
    var _g = a => new Promise((d, c) => {
        (0, f.request)({
            url: '/api/users/google-auth-details',
            data: {
                jwt: a
            },
            success: a => {
                d(a);
            },
            error: a => {
                c(a);
            }
        });
    });
});