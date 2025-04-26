function a(a, b, c, I) {
    Object.defineProperty(a, b, {
        get: c,
        set: I,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('6jNxr', function(b, I) {
    a(b.exports, 'validateEmail', function() {
        return D;
    }), a(b.exports, 'default', function() {
        return E;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('Vlfxs'),
        h = c('gSUVO'),
        i = c('bPH7V'),
        j = c('ExtIT'),
        k = c('c6x8w'),
        l = c('jrTkz0'),
        m = c('lmfrI'),
        n = c('+qN5a2'),
        o = c('/rcVD4'),
        p = c('nHGjF'),
        q = c('PjB0f'),
        r = c('MHioT3'),
        s = c('2bcqz'),
        t = c('4xJGr'),
        u = c('q721a'),
        v = c('MxXR+'),
        w = c('x32su'),
        x = c('nMlgC'),
        y = c('GDWDD');
    let z, A, B, C = a => a;
    const D = a => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase());
    var E = (0, g.observer)(() => {
        const [F, G] = e.useState(!1), [H, I] = e.useState(!1), [J, K] = e.useState(''), [L, M] = e.useState(!1), [N, O] = e.useState(null), [P, Q] = e.useState(!1), {
            login: R,
            navigation: S
        } = e.useContext(o.default), {
            emailSignInBlocked: T
        } = U;
        e.useEffect(() => {
            (0, q.request)({
                url: '/api/users/google-token',
                success: F => {
                    F && F.token && K(F.token);
                }
            });
        }, []);
        const V = F => {
                if (O(null), H)
                    return;
                const W = F.target.value || '';
                R.email = W, G(D(W));
            },
            W = () => {
                F && Y();
            },
            X = () => {
                R.informationNeeded.replace(R.informationNeeded.filter(F => F !== r.informationTypes.email));
            },
            Y = () => {
                H || (O(null), I(!0), Q(!1), (0, q.request)({
                    url: '/api/users/register/email-info',
                    method: 'post',
                    data: {
                        email: R.email
                    },
                    success: F => {
                        if (I(!1), window.location.pathname.includes('login') && !F.accountExists)
                            return R.googleToken = '', void Q(!0);
                        if (F.accountExists) {
                            if (R.userExists = !0, !R.googleToken) {
                                if (F.noPassword)
                                    return void(U.emailSignInBlocked = !0);
                                R.informationNeeded.replace([
                                    ...R.informationNeeded,
                                    r.informationTypes.password
                                ]);
                            }
                            X();
                        } else
                            X(), R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.accountType
                            ]), R.firstName || R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.firstName
                            ]), R.lastName || R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.lastName
                            ]), X();
                    },
                    error: F => {
                        I(!1), O(F);
                    }
                }));
            },
            Z = () => {
                l.default.error('Error with Google Authentication. Please try again.');
            },
            $ = F => {
                (0, y.default)(F).then(F => {
                    (F => {
                        const {
                            firstName: _,
                            lastName: ab,
                            email: bb,
                            emailVerified: cb,
                            userToken: db
                        } = eb;
                        bb && (cb && db && (R.googleToken = db), R.email = bb, R.firstName = _, R.lastName = ab, Y());
                    })(F);
                }).catch(F => {
                    Z();
                });
            };
        return (0, d.jsx)(F, {
            children: (() => {
                const _ = U.classJoiningName ? 'Join' : 'Continue';
                return (0, d.jsxs)(d.Fragment, {
                    children: [
                        T && (0, d.jsxs)('div', {
                            style: {
                                fontWeight: h.FontWeights.Bold,
                                color: m.default.Black,
                                fontSize: 19,
                                marginBottom: 11
                            },
                            children: [
                                'Authenticate with Google to',
                                ' ',
                                U.classJoiningName ? 'join' : 'login'
                            ]
                        }),
                        J ? (0, d.jsx)(s.GoogleOAuthProvider, {
                            clientId: J,
                            children: (0, d.jsx)(x.default, {
                                text: _,
                                onToken: $,
                                onError: Z
                            })
                        }) : (0, d.jsx)(w.default, {
                            text: _
                        }),
                        T ? (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(j.default, {}),
                                (0, d.jsx)('a', {
                                    onClick: () => M(!0),
                                    children: 'or add a password...'
                                }),
                                (0, d.jsx)(v.default, {
                                    defaultEmail: R.email,
                                    open: L,
                                    close: () => M(!1)
                                })
                            ]
                        }) : null,
                        T ? null : (0, d.jsx)('div', {
                            className: 'maxWidth',
                            children: (0, d.jsx)(j.default, {
                                children: 'or'
                            })
                        }),
                        !T && (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)(G, {
                                children: [
                                    (0, d.jsxs)(H, {
                                        children: [
                                            U.classJoiningName ? 'Join' : 'Continue',
                                            ' with email...'
                                        ]
                                    }),
                                    (0, d.jsx)(k.default, {
                                        onChange: V,
                                        size: 'large',
                                        placeholder: 'Email address...',
                                        onPressEnter: W,
                                        maxLength: 256
                                    }),
                                    (0, d.jsx)(n.default, {
                                        disabled: !F,
                                        style: {
                                            marginTop: 5
                                        },
                                        onClick: W,
                                        loading: H,
                                        children: 'Continue'
                                    })
                                ]
                            })
                        }),
                        !N && P ? (0, d.jsx)(i.default, {
                            type: 'warning',
                            style: {
                                marginTop: 10
                            },
                            message: (0, d.jsxs)('div', {
                                children: [
                                    'No account found.',
                                    ' ',
                                    (0, q.getUrlVariable)('blockRedirect') ? null : (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            'Click here to ',
                                            (0, d.jsx)('a', {
                                                href: u.REGISTER_BASE,
                                                children: 'sign up.'
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null,
                        (0, d.jsx)(p.default, {
                            error: N,
                            style: {
                                marginTop: 10
                            }
                        }),
                        (0, d.jsx)(t.default, {}),
                        U.classJoiningName ? (0, d.jsxs)('div', {
                            style: {
                                marginTop: 25
                            },
                            children: [
                                'By joining, you agree to our',
                                ' ',
                                (0, d.jsx)('a', {
                                    href: u.PRIVACY_POLICY,
                                    target: '_blank',
                                    children: 'Privacy Policy'
                                }),
                                ' ',
                                'and',
                                ' ',
                                (0, d.jsx)('a', {
                                    href: u.TERMS_OF_SERVICE,
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
    const F = f.default.div(z || (z = C`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`)),
        G = f.default.div(A || (A = C`
  width: 100%;
  color: ${ 0 };
`), m.default.Black),
        H = f.default.div(B || (B = C`
  font-size: 18px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), c.register('2bcqz', function(i, j) {
    a(i.exports, 'GoogleOAuthProvider', function() {
        return f;
    }), a(i.exports, 'useGoogleLogin', function() {
        return l;
    });
    var d = c('uPP4W');
    const e = (0, d.createContext)(null);

    function f({
        clientId: g,
        onScriptLoadSuccess: h,
        onScriptLoadError: i,
        children: j
    }) {
        const k = function(l = {}) {
                const {
                    onScriptLoadSuccess: m,
                    onScriptLoadError: n
                } = o, [p, q] = (0, d.useState)(!1), r = (0, d.useRef)(m);
                r.current = m;
                const s = (0, d.useRef)(n);
                return s.current = n, (0, d.useEffect)(() => {
                    const t = document.createElement('script');
                    return t.src = 'https://accounts.google.com/gsi/client', t.async = !0, t.defer = !0, t.onload = () => {
                        var u;
                        q(!0), null === (u = r.current) || void 0 === u || u.call(r);
                    }, t.onerror = () => {
                        var u;
                        q(!1), null === (u = s.current) || void 0 === u || u.call(s);
                    }, document.body.appendChild(t), () => {
                        document.body.removeChild(t);
                    };
                }, []), p;
            }({
                onScriptLoadSuccess: h,
                onScriptLoadError: i
            }),
            m = (0, d.useMemo)(() => ({
                clientId: l,
                scriptLoadedSuccessfully: k
            }), [
                l,
                k
            ]);
        return b(d).createElement(e.Provider, {
            value: m
        }, j);
    }

    function k() {
        const l = (0, d.useContext)(e);
        if (!l)
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
        return l;
    }

    function l({
        flow: m = 'implicit',
        scope: n = '',
        onSuccess: o,
        onError: p,
        ...q
    }) {
        const {
            clientId: r,
            scriptLoadedSuccessfully: s
        } = k(), t = (0, d.useRef)(), u = (0, d.useRef)(o);
        u.current = o;
        const v = (0, d.useRef)(p);
        v.current = p, (0, d.useEffect)(() => {
            var w;
            if (!s)
                return;
            const x = 'implicit' === m ? 'initTokenClient' : 'initCodeClient',
                y = null === (w = window.google) || void 0 === w ? void 0 : w.accounts.oauth2[x]({
                    client_id: r,
                    scope: `openid profile email ${ n }`,
                    callback: m => {
                        var z, A;
                        if (m.error)
                            return null === (z = v.current) || void 0 === z ? void 0 : z.call(v, m);
                        null === (A = u.current) || void 0 === A || A.call(u, m);
                    },
                    ...q
                });
            t.current = y;
        }, [
            r,
            s,
            m,
            n
        ]);
        const w = (0, d.useCallback)(m => t.current.requestAccessToken(m), []),
            x = (0, d.useCallback)(() => t.current.requestCode(), []);
        return 'implicit' === m ? w : x;
    }
}), c.register('4xJGr', function(b, r) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('bPH7V'),
        g = c('Vlfxs'),
        h = c('/rcVD4');
    var i = (0, g.observer)(() => {
        const {
            navigation: j
        } = e.useContext(h.default);
        return j.loginError ? (0, d.jsx)(f.default, {
            style: {
                marginTop: 5
            },
            message: j.loginError && j.loginError.message && j.loginError.message.text ? j.loginError.message.text : 'Error logging in. Please try again.',
            type: 'error',
            showIcon: !0
        }) : null;
    });
}), c.register('MxXR+', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('f9f+a'),
        h = c('ExtIT'),
        i = c('cR5QE'),
        j = c('iHElh'),
        k = c('gSUVO'),
        l = c('lmfrI'),
        m = c('PjB0f');
    const n = () => (0, d.jsx)('div', {
        style: {
            height: 150
        },
        className: 'maxWidth flex hc vc',
        children: (0, d.jsx)(j.default, {
            size: 'large'
        })
    });
    var o = a => {
        const [p, q] = e.useState([]), [r, s] = e.useState(!1), [t, u] = e.useState(!1), [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState('');
        e.useEffect(() => {
            a.open ? (u(!0), (0, m.request)({
                url: '/api/users/password-reset-options',
                method: 'post',
                data: {
                    email: a.defaultEmail
                },
                success: a => {
                    a.passwordless && s(a.passwordless), a.others && a.others.length ? q(a.others) : C();
                },
                error: a => {
                    (0, m.throwMessageError)({
                        e: a,
                        default: {
                            title: 'We ran into an error...'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => {
                    u(!1);
                }
            })) : (q([]), s(!1), u(!1), w(!1), y(!1), A(''));
        }, [a.open]);
        const B = (p, q) => {
                v || (w(!0), (0, m.request)({
                    url: '/api/users/requestPasswordReset',
                    method: 'post',
                    data: {
                        email: a.defaultEmail,
                        target: p
                    },
                    success: () => {
                        A(q), y(!0), w(!1);
                    },
                    error: a => {
                        (0, m.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error sending reset link'
                            },
                            onOk: () => window.location.reload()
                        });
                    }
                }));
            },
            C = () => B();
        return (0, d.jsx)(i.default, {
            style: {
                fontFamily: k.Fonts.SFPro,
                color: l.default.Black
            },
            footer: [(0, d.jsx)(f.default, {
                onClick: a.close,
                children: 'Close'
            }, 1)],
            closable: !1,
            width: 700,
            open: a.open,
            children: t || v ? (0, d.jsx)(n, {}) : x ? (0, d.jsxs)('div', {
                className: 'flex flex-column maxWidth vc hc',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)('i', {
                            className: 'fas fa-check-circle',
                            style: {
                                fontSize: 75,
                                marginBottom: 15,
                                color: '#2e7d32'
                            }
                        })
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 22,
                            textAlign: 'center'
                        },
                        children: z ? `We just sent ${ r ? 'an add password link' : 'a password reset link' } to ${ z }. Ask them for the link and you should be good to go!` : `We just sent ${ r ? 'an add password link' : 'a password reset link' } to your email. Open that link and you should be good to go!`
                    })
                ]
            }) : p.length ? (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        style: {
                            fontSize: 23,
                            fontWeight: k.FontWeights.Bold,
                            textAlign: 'center',
                            marginTop: 15,
                            marginBottom: 5
                        },
                        children: [
                            'Where should we send the link to',
                            ' ',
                            r ? 'add a password' : 'reset your password',
                            '?'
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 17,
                            textAlign: 'center',
                            color: 'rgba(0,0,0,0.7)'
                        },
                        children: 'If your school doesn\'t allow you to receive emails, select one of your teachers and they can give the link to you.'
                    }),
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsx)(g.default, {
                        style: {
                            color: l.default.Black,
                            fontFamily: k.Fonts.SFPro,
                            marginBottom: 10
                        },
                        onClick: C,
                        hoverable: !0,
                        children: 'Me'
                    }),
                    p.map(a => (0, d.jsx)(g.default, {
                        style: {
                            color: l.default.Black,
                            fontFamily: k.Fonts.SFPro,
                            marginBottom: 10
                        },
                        hoverable: !0,
                        onClick: () => B(a.id, a.name),
                        children: a.name
                    }, `reset-${ a.id }`))
                ]
            }) : null
        });
    };
}), c.register('x32su', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('gSUVO'),
        f = c('IsmrL');
    var g = a => (0, d.jsx)(f.default, {
        style: {
            padding: '10px 20px',
            height: 'auto'
        },
        disabled: !a.onClick,
        onClick: a.onClick,
        children: (0, d.jsxs)('div', {
            style: {
                fontFamily: e.Fonts.SFPro,
                color: 'rgba(0,0,0,0.75)'
            },
            className: 'flex vc',
            children: [
                (0, d.jsx)('img', {
                    src: '/client/img/signup/google.svg',
                    alt: 'Google Logo',
                    style: {
                        height: 18,
                        marginRight: 11
                    }
                }),
                (0, d.jsxs)('div', {
                    children: [
                        a.text,
                        ' with Google'
                    ]
                })
            ]
        })
    });
}), c.register('nMlgC', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('2bcqz');
    c('uPP4W');
    var f = c('x32su');
    var g = a => {
        const h = (0, e.useGoogleLogin)({
            onSuccess: h => {
                a.onToken(h.code);
            },
            onError: h => {
                a.onError(h);
            },
            flow: 'auth-code'
        });
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(f.default, {
                text: a.text,
                onClick: h
            })
        });
    };
}), c.register('GDWDD', function(b, n) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('PjB0f');
    var e = a => new Promise((b, c) => {
        (0, d.request)({
            url: '/api/users/google-auth-details',
            data: {
                jwt: a
            },
            success: a => {
                b(a);
            },
            error: a => {
                c(a);
            }
        });
    });
});