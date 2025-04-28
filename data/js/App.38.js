function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Jhh4y', function(b, c) {
    _F(b.exports, 'validateEmail', function() {
        return _D;
    }), _F(b.exports, 'default', function() {
        return _E;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('2x11J'),
        h = a('b5kvC'),
        i = a('NIZyA'),
        j = a('fmVdR'),
        k = a('ewwAh'),
        l = a('MSsQO'),
        m = a('sHRDd'),
        n = a('pYmyT1'),
        o = a('NmrDs1'),
        p = a('uvADe0'),
        q = a('PMl60'),
        r = a('Hi0/F0'),
        s = a('wvD0o'),
        t = a('h8z+4'),
        u = a('gs4MT'),
        v = a('iwgXa'),
        w = a('9oUwF'),
        x = a('x6cBr'),
        y = a('PeH+r');
    let z, A, B, C = _F => _F;
    const _D = _F => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(_F).toLowerCase());
    var _E = (0, g.observer)(() => {
        const [_F, G] = e.useState(!1), [H, I] = e.useState(!1), [J, K] = e.useState(''), [L, M] = e.useState(!1), [N, O] = e.useState(null), [P, Q] = e.useState(!1), {
            login: R,
            navigation: S
        } = e.useContext(o.default), {
            emailSignInBlocked: T
        } = S;
        e.useEffect(() => {
            (0, q.request)({
                url: '/api/users/google-token',
                success: _F => {
                    _F && _F.token && K(_F.token);
                }
            });
        }, []);
        const U = _F => {
                if (O(null), H)
                    return;
                const V = _F.target.value || '';
                R.email = V, G(_D(V));
            },
            V = () => {
                _F && _X();
            },
            W = () => {
                R.informationNeeded.replace(R.informationNeeded.filter(_F => _F !== r.informationTypes.email));
            },
            _X = () => {
                H || (O(null), I(!0), Q(!1), (0, q.request)({
                    url: '/api/users/register/email-info',
                    method: 'post',
                    data: {
                        email: R.email
                    },
                    success: _F => {
                        if (I(!1), window.location.pathname.includes('login') && !_F.accountExists)
                            return R.googleToken = '', void Q(!0);
                        if (_F.accountExists) {
                            if (R.userExists = !0, !R.googleToken) {
                                if (_F.noPassword)
                                    return void(S.emailSignInBlocked = !0);
                                R.informationNeeded.replace([
                                    ...R.informationNeeded,
                                    r.informationTypes.password
                                ]);
                            }
                            W();
                        } else
                            W(), R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.accountType
                            ]), R.firstName || R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.firstName
                            ]), R.lastName || R.informationNeeded.replace([
                                ...R.informationNeeded,
                                r.informationTypes.lastName
                            ]), W();
                    },
                    error: _F => {
                        I(!1), O(_F);
                    }
                }));
            },
            Y = () => {
                l.default.error('Error with Google Authentication. Please try again.');
            },
            Z = _F => {
                (0, y.default)(_F).then(_F => {
                    (_F => {
                        const {
                            firstName: $,
                            lastName: ab,
                            email: bb,
                            emailVerified: cb,
                            userToken: db
                        } = _F;
                        bb && (cb && db && (R.googleToken = db), R.email = bb, R.firstName = $, R.lastName = ab, _X());
                    })(_F);
                }).catch(_F => {
                    Y();
                });
            };
        return (0, d.jsx)(_F, {
            children: (() => {
                const $ = S.classJoiningName ? 'Join' : 'Continue';
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
                                S.classJoiningName ? 'join' : 'login'
                            ]
                        }),
                        J ? (0, d.jsx)(s.GoogleOAuthProvider, {
                            clientId: J,
                            children: (0, d.jsx)(x.default, {
                                text: $,
                                onToken: Z,
                                onError: Y
                            })
                        }) : (0, d.jsx)(w.default, {
                            text: $
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
                            children: (0, d.jsxs)(_G, {
                                children: [
                                    (0, d.jsxs)(_H, {
                                        children: [
                                            S.classJoiningName ? 'Join' : 'Continue',
                                            ' with email...'
                                        ]
                                    }),
                                    (0, d.jsx)(k.default, {
                                        onChange: U,
                                        size: 'large',
                                        placeholder: 'Email address...',
                                        onPressEnter: V,
                                        maxLength: 256
                                    }),
                                    (0, d.jsx)(n.default, {
                                        disabled: !_F,
                                        style: {
                                            marginTop: 5
                                        },
                                        onClick: V,
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
                        S.classJoiningName ? (0, d.jsxs)('div', {
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
    const _F = f.default.div(z || (z = C`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`)),
        _G = f.default.div(A || (A = C`
  width: 100%;
  color: ${ 0 };
`), m.default.Black),
        _H = f.default.div(B || (B = C`
  font-size: 18px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), a.register('wvD0o', function(b, c) {
    _g(b.exports, 'GoogleOAuthProvider', function() {
        return _f;
    }), _g(b.exports, 'useGoogleLogin', function() {
        return _f;
    });
    var d = a('LEQ5w');
    const e = (0, d.createContext)(null);

    function _f({
        clientId: _g,
        onScriptLoadSuccess: h,
        onScriptLoadError: i,
        children: j
    }) {
        const k = function(l = {}) {
                const {
                    onScriptLoadSuccess: m,
                    onScriptLoadError: n
                } = l, [o, p] = (0, d.useState)(!1), q = (0, d.useRef)(m);
                q.current = m;
                const r = (0, d.useRef)(n);
                return r.current = n, (0, d.useEffect)(() => {
                    const s = document.createElement('script');
                    return s.src = 'https://accounts.google.com/gsi/client', s.async = !0, s.defer = !0, s.onload = () => {
                        var t;
                        p(!0), null === (t = q.current) || void 0 === t || t.call(q);
                    }, s.onerror = () => {
                        var t;
                        p(!1), null === (t = r.current) || void 0 === t || t.call(r);
                    }, document.body.appendChild(s), () => {
                        document.body.removeChild(s);
                    };
                }, []), o;
            }({
                onScriptLoadSuccess: h,
                onScriptLoadError: i
            }),
            l = (0, d.useMemo)(() => ({
                clientId: _g,
                scriptLoadedSuccessfully: k
            }), [
                _g,
                k
            ]);
        return _h(d).createElement(e.Provider, {
            value: l
        }, j);
    }

    function f() {
        const g = (0, d.useContext)(e);
        if (!g)
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
        return g;
    }

    function _f({
        flow: g = 'implicit',
        scope: _h = '',
        onSuccess: i,
        onError: j,
        ...k
    }) {
        const {
            clientId: l,
            scriptLoadedSuccessfully: m
        } = _h(), n = (0, d.useRef)(), o = (0, d.useRef)(i);
        o.current = i;
        const p = (0, d.useRef)(j);
        p.current = j, (0, d.useEffect)(() => {
            var q;
            if (!m)
                return;
            const r = 'implicit' === g ? 'initTokenClient' : 'initCodeClient',
                s = null === (q = window.google) || void 0 === q ? void 0 : q.accounts.oauth2[r]({
                    client_id: l,
                    scope: `openid profile email ${ _h }`,
                    callback: g => {
                        var t, u;
                        if (g.error)
                            return null === (t = p.current) || void 0 === t ? void 0 : t.call(p, g);
                        null === (u = o.current) || void 0 === u || u.call(o, g);
                    },
                    ...k
                });
            n.current = s;
        }, [
            l,
            m,
            g,
            _h
        ]);
        const q = (0, d.useCallback)(g => n.current.requestAccessToken(g), []),
            r = (0, d.useCallback)(() => n.current.requestCode(), []);
        return 'implicit' === g ? q : r;
    }
}), a.register('h8z+4', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('NIZyA'),
        g = a('2x11J'),
        _h = a('NmrDs1');
    var _i = (0, g.observer)(() => {
        const {
            navigation: _j
        } = e.useContext(_h.default);
        return _j.loginError ? (0, d.jsx)(f.default, {
            style: {
                marginTop: 5
            },
            message: _j.loginError && _j.loginError.message && _j.loginError.message.text ? _j.loginError.message.text : 'Error logging in. Please try again.',
            type: 'error',
            showIcon: !0
        }) : null;
    });
}), a.register('iwgXa', function(b, c) {
    e(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('oXQNI'),
        h = a('fmVdR'),
        i = a('YRlpt'),
        j = a('6CIVV'),
        k = a('b5kvC'),
        l = a('sHRDd'),
        m = a('PMl60');
    const n = () => (0, d.jsx)('div', {
        style: {
            height: 150
        },
        className: 'maxWidth flex hc vc',
        children: (0, d.jsx)(j.default, {
            size: 'large'
        })
    });
    var _o = e => {
        const [p, q] = e.useState([]), [r, s] = e.useState(!1), [t, u] = e.useState(!1), [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState('');
        e.useEffect(() => {
            e.open ? (u(!0), (0, m.request)({
                url: '/api/users/password-reset-options',
                method: 'post',
                data: {
                    email: e.defaultEmail
                },
                success: e => {
                    e.passwordless && s(e.passwordless), e.others && e.others.length ? q(e.others) : _C();
                },
                error: e => {
                    (0, m.throwMessageError)({
                        e: e,
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
        }, [e.open]);
        const B = (p, q) => {
                v || (w(!0), (0, m.request)({
                    url: '/api/users/requestPasswordReset',
                    method: 'post',
                    data: {
                        email: e.defaultEmail,
                        target: p
                    },
                    success: () => {
                        A(q), y(!0), w(!1);
                    },
                    error: e => {
                        (0, m.throwMessageError)({
                            e: e,
                            default: {
                                title: 'Error sending reset link'
                            },
                            onOk: () => window.location.reload()
                        });
                    }
                }));
            },
            _C = () => B();
        return (0, d.jsx)(i.default, {
            style: {
                fontFamily: k.Fonts.SFPro,
                color: l.default.Black
            },
            footer: [(0, d.jsx)(f.default, {
                onClick: e.close,
                children: 'Close'
            }, 1)],
            closable: !1,
            width: 700,
            open: e.open,
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
                        onClick: _C,
                        hoverable: !0,
                        children: 'Me'
                    }),
                    p.map(e => (0, d.jsx)(g.default, {
                        style: {
                            color: l.default.Black,
                            fontFamily: k.Fonts.SFPro,
                            marginBottom: 10
                        },
                        hoverable: !0,
                        onClick: () => B(e.id, e.name),
                        children: e.name
                    }, `reset-${ e.id }`))
                ]
            }) : null
        });
    };
}), a.register('9oUwF', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('b5kvC'),
        f = a('ulE4q');
    var _g = e => (0, d.jsx)(f.default, {
        style: {
            padding: '10px 20px',
            height: 'auto'
        },
        disabled: !e.onClick,
        onClick: e.onClick,
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
                        e.text,
                        ' with Google'
                    ]
                })
            ]
        })
    });
}), a.register('x6cBr', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('wvD0o');
    a('LEQ5w');
    var f = a('9oUwF');
    var _g = e => {
        const h = (0, e.useGoogleLogin)({
            onSuccess: h => {
                e.onToken(h.code);
            },
            onError: h => {
                e.onError(h);
            },
            flow: 'auth-code'
        });
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(f.default, {
                text: e.text,
                onClick: h
            })
        });
    };
}), a.register('PeH+r', function(b, c) {
    e(b.exports, 'default', function() {
        return _e;
    });
    var d = a('PMl60');
    var _e = e => new Promise((b, a) => {
        (0, d.request)({
            url: '/api/users/google-auth-details',
            data: {
                jwt: e
            },
            success: e => {
                b(e);
            },
            error: e => {
                a(e);
            }
        });
    });
});