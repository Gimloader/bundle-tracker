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
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p;
    var _q = () => {
        const [r, s] = (0, k.useBoolean)(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.Title, {
                    override: !0,
                    title: 'Delete Account'
                }),
                (0, f.jsxs)(_r, {
                    children: [
                        (0, f.jsx)(o.default, { includeSpacer: !0 }),
                        (0, f.jsx)(j.default, {
                            style: {
                                width: '90%',
                                maxWidth: 700,
                                marginTop: 30,
                                marginBottom: 50,
                                padding: 35,
                                flexDirection: 'column'
                            },
                            children: (0, k.getUser)().passwordless ? (0, f.jsx)(m.default, {}) : r ? (0, f.jsx)(n.default, {}) : (0, f.jsx)(l.default, { continue: s })
                        })
                    ]
                })
            ]
        });
    };
    const _r = g.default.div.attrs({ className: 'flex-column vc' })(p || (p = (s => s)`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  h1 {
    font-size: 32px;
    font-weight: ${ 0 };
  }
  p {
    font-size: 18px;
  }
`), h.default.Snow, h.default.Black, i.FontWeights.UltraBold);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    let h;
    var _i = j => (0, e.jsx)(_j, {
        onClick: j.onClick,
        className: j.className,
        style: j.style,
        children: j.children
    });
    const _j = f.default.div(h || (h = (k => k)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), g.default.White);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _m;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    const k = (0, e.jsxs)(e.Fragment, {
            children: [
                'If you are looking to downgrade/cancel your subscription, you can do so by visiting the "Plan & Billing" tab in settings. ',
                (0, e.jsx)('br', {}),
                ' ',
                (0, e.jsx)('br', {}),
                'By requesting account deletion, you will lose all of your kits, assignments, classes, and more. You also won\'t be able to login to your account again.'
            ]
        }), l = 'delete my account';
    var _m = n => {
        const [o, p] = h.useState(''), q = o !== l, r = () => {
                q || n.continue();
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('h1', { children: 'Are you sure you want to delete your account?' }),
                (0, e.jsxs)('p', {
                    children: [
                        (0, i.isStudent)() ? 'By deleting your account, you will be removed from all classes\nyou\'re currently part of. You will also lose any content you\'ve\ncreated and cosmetics earned.' : k,
                        ' To continue deleting your account, type ',
                        (0, e.jsx)('b', {
                            style: { userSelect: 'none' },
                            children: l
                        }),
                        ' ',
                        'below.'
                    ]
                }),
                (0, e.jsx)(f.default, {}),
                (0, e.jsx)(g.default, {
                    size: 'large',
                    placeholder: 'Enter here...',
                    onChange: s => p(s.target.value),
                    style: { marginBottom: 10 },
                    onPressEnter: r
                }),
                (0, e.jsx)(j.default, {
                    onClick: r,
                    disabled: q,
                    children: 'Continue'
                })
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var _g = h => (0, e.jsx)(f.default, {
        block: !0,
        size: 'large',
        type: 'primary',
        disabled: h.disabled,
        loading: h.loading,
        onClick: h.onClick,
        children: h.children
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....');
    var _j = () => (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)('h1', { children: 'Add a password to delete your account' }),
            (0, e.jsx)('p', { children: 'In order to delete your account, you\'ll first need to attach a password to your account. You can attach a password in settings.' }),
            (0, e.jsx)(f.default, {}),
            (0, e.jsx)(i.default, {
                onClick: () => (0, h.NavigateTo)(g.SETTINGS),
                children: 'Go To Settings'
            })
        ]
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    var _l = () => {
        const [m, n, o] = (0, j.useBoolean)(!1), [p, q] = i.useState(''), r = !p.length;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('h1', { children: 'Last chance.' }),
                (0, e.jsx)('p', { children: 'Deleting your account is permanent and cannot be reversed. If you are confident you want to delete your account, enter your password below. Once you click "Delete My Account", your account will be permanently deleted.' }),
                (0, e.jsx)(f.default, {}),
                (0, e.jsx)(g.default.Password, {
                    size: 'large',
                    placeholder: 'Password',
                    onChange: s => q(s.target.value),
                    style: { marginBottom: 10 }
                }),
                (0, e.jsx)(k.default, {
                    onClick: () => {
                        if (r || m)
                            return;
                        const s = (0, j.isStudent)();
                        n(), (0, j.request)({
                            url: '/api/user/delete',
                            data: { password: p },
                            success: () => {
                                (0, j.request)({ url: '/logout' }), h.default.success({
                                    title: 'Account deleted',
                                    content: s ? 'You will be removed from all classes you are part of and all content you\'ve created on Gimkit will be deleted. This process normally takes a few minutes, but can sometimes take up to a few hours.' : 'Your account and all the content you\'ve created will be deleted. Additionally, if you had an active subscriptions, we\'ve canceled them. This process normally only takes a few minutes, but can sometimes take a few hours.',
                                    onOk: () => window.location.href = '/'
                                });
                            },
                            error: t => {
                                (0, j.throwMessageError)({
                                    e: t,
                                    default: { title: 'Error deleting account' }
                                }), o();
                            }
                        });
                    },
                    disabled: r,
                    loading: m,
                    children: 'Delete My Account'
                })
            ]
        });
    };
});