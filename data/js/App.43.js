function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _q;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....');
    var _q = () => {
        const [r, s] = g.useState(''), [t, u] = g.useState(''), [v, w] = g.useState(null), [x, y] = g.useState(!1), z = !(!r || !t || x), A = () => {
                if (!z)
                    return;
                if (r.length < 6)
                    return w('Password must contain at least 6 characters');
                if (r !== t)
                    return w('Passwords do not match');
                const B = (0, n.getUrlVariable)('token');
                if (!B)
                    return w('Invalid password reset link');
                y(!0), (0, n.request)({
                    url: '/api/user/reset',
                    method: 'post',
                    data: {
                        newPassword: r,
                        token: decodeURIComponent(B)
                    },
                    success: () => {
                        (0, n.request)({
                            url: '/logout',
                            both: () => window.location.href = 'login?pwr=true'
                        });
                    },
                    error: C => {
                        C && C.message && C.message.text && 'Invalid token' === C.message.text ? w('This password reset link has expired.') : w(C);
                    },
                    both: () => y(!1)
                });
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(n.Title, { title: 'New Gimkit Password' }),
                (0, f.jsxs)('div', {
                    className: 'flex-column maxWidth vc',
                    children: [
                        (0, f.jsx)(p.default, { includeSpacer: !0 }),
                        (0, f.jsxs)(i.default, {
                            style: {
                                marginTop: 10,
                                width: '85%',
                                maxWidth: 450,
                                color: k.default.Black,
                                fontFamily: l.Fonts.SFPro
                            },
                            children: [
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontSize: 31,
                                        fontWeight: l.FontWeights.UltraBold
                                    },
                                    children: [
                                        'New ',
                                        o.COMPANY_NAME,
                                        ' Password'
                                    ]
                                }),
                                (0, f.jsx)(j.default.Password, {
                                    size: 'large',
                                    placeholder: 'New password...',
                                    style: {
                                        marginTop: -1,
                                        display: 'flex'
                                    },
                                    onChange: B => s(B.target.value),
                                    onPressEnter: A,
                                    maxLength: 96
                                }),
                                (0, f.jsx)(j.default.Password, {
                                    size: 'large',
                                    placeholder: 'Confirm new password...',
                                    style: {
                                        marginTop: 5,
                                        display: 'flex'
                                    },
                                    onChange: B => u(B.target.value),
                                    onPressEnter: A
                                }),
                                (0, f.jsx)(h.default, {
                                    onClick: A,
                                    disabled: !z,
                                    type: 'primary',
                                    loading: x,
                                    style: {
                                        marginTop: 5,
                                        width: '100%'
                                    },
                                    children: 'Submit'
                                }),
                                (0, f.jsx)(m.default, {
                                    style: { marginTop: 5 },
                                    error: v
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    var _g = h => h.error ? (0, e.jsx)(f.default, {
        message: 'Error',
        style: h.style,
        type: 'error',
        description: h.error && h.error.message && h.error.message.text ? h.error.message.text : 'string' == typeof h.error ? h.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
});