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
        return _z;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    let v, w, x = y => y;
    const y = 'Error fetching subscription info. Try refreshing the page. If you continue to see this error, please contact support.';
    var _z = () => {
        const [A, B] = g.useState(!0), [C, D] = g.useState(''), [E, F] = g.useState(''), [G, H] = g.useState(''), [I, J] = g.useState(!1);
        g.useEffect(() => {
            (0, t.default)({});
        }, []), g.useEffect(() => {
            const K = (0, r.getUrlVariable)('session_id');
            if (K)
                (0, r.verifyStripe)({
                    sessionId: K,
                    onSuccess: L => {
                        (0, r.request)({
                            url: `/api/bulk/complete/${ L.subscriptionId }`,
                            success: M => {
                                D(M.paymentMethod), F(M.receiptUrl), H(M.invoiceUrl), J(M.renewal), B(!1);
                            },
                            error: M => (0, s.throwError)({ title: y })
                        });
                    },
                    onError: L => (0, s.throwError)({ title: y }),
                    onBoth: () => B(!1)
                });
            else {
                const L = (0, r.getUrlVariable)('subscriptionId');
                (0, r.request)({
                    url: `/api/bulk/complete/${ L }`,
                    success: M => {
                        D(M.paymentMethod), F(M.receiptUrl), H(M.invoiceUrl), J(M.renewal), B(!1);
                    },
                    error: M => (0, r.throwMessageError)({
                        e: M,
                        default: { title: y }
                    })
                });
            }
        }, []);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(r.Title, { title: 'Group License Complete' }),
                (0, f.jsxs)(_A, {
                    className: 'flex-column vc',
                    children: [
                        (0, f.jsx)(u.default, { includeSpacer: !0 }),
                        (0, f.jsx)(_B, {
                            children: A ? (0, f.jsx)('div', {
                                className: 'maxWidth flex hc',
                                children: (0, f.jsx)(n.default, {})
                            }) : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)(k.default, { isRenewal: I }),
                                    (0, f.jsx)(m.default, {}),
                                    'creditCard' === C && (0, f.jsx)(o.default, { receiptLink: E }),
                                    'purchaseOrder' === C && (0, f.jsx)(l.default, { invoiceLink: G }),
                                    (0, f.jsx)('div', { style: { height: 10 } }),
                                    (0, f.jsx)(p.default, { isRenewal: I }),
                                    (0, f.jsx)(m.default, {}),
                                    (0, f.jsx)(q.default, {})
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _A = h.default.div(v || (v = x`
  flex: 1;
  background: ${ 0 };
  width: 100%;
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 20px;
  min-height: 900px;
`), i.default.Snow, i.default.Black, j.Fonts.SFPro), _B = h.default.div(w || (w = x`
  width: 100%;
  max-width: 550px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    let i, j, k = l => l;
    var _l = m => (0, e.jsxs)('div', {
        className: 'flex vc flex-column',
        children: [
            (0, e.jsx)('img', {
                src: '/client/img/quote/medal.svg',
                style: { height: 130 }
            }),
            (0, e.jsx)(_m, { children: 'Woohoo!' }),
            (0, e.jsx)(_n, { children: m.isRenewal ? 'Your group license renewal is complete!' : 'Your group license is ready to go!' })
        ]
    });
    const _m = f.default.h1(i || (i = k`
  color: ${ 0 };
  font-weight: ${ 0 };
  font-size: 50px;
`), g.default.Black, h.FontWeights.UltraBold), _n = f.default.p(j || (j = k`
  margin-top: -41px;
  font-size: 18px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = k => (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)(f.AntCard, {
                children: [
                    (0, e.jsx)(f.Header, { children: 'Invoice' }),
                    (0, e.jsx)(f.Description, { children: 'Click the button below to print out your invoice. A copy of this invoice has also been sent to your email.' }),
                    (0, e.jsx)(g.default, {
                        style: { marginTop: 5 },
                        href: k.invoiceLink,
                        target: '_blank',
                        type: 'primary',
                        block: !0,
                        children: 'Print Invoice'
                    })
                ]
            }),
            (0, e.jsx)('div', { style: { height: 10 } }),
            (0, e.jsxs)(f.AntCard, {
                children: [
                    (0, e.jsx)(f.Header, { children: 'Payment Information' }),
                    (0, e.jsxs)(f.Description, {
                        children: [
                            (0, e.jsx)('div', {
                                style: { marginTop: 3 },
                                children: 'Please send your check to the following address:'
                            }),
                            (0, e.jsx)('br', {}),
                            (0, e.jsx)('div', { children: (0, e.jsx)('b', { children: 'Gimkit, Inc' }) }),
                            (0, e.jsx)('div', { children: i.COMPANY_TOP_ADDRESS }),
                            (0, e.jsx)('div', { children: i.COMPANY_BOTTOM_ADDRESS }),
                            (0, e.jsx)(h.default, {}),
                            (0, e.jsx)('div', { children: 'With the check, please include a copy of the invoice. All Gimkit invoices on Purchase Orders have NET45 Terms.' })
                        ]
                    })
                ]
            })
        ]
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    var _h = i => (0, e.jsx)(e.Fragment, {
        children: (0, e.jsxs)(f.AntCard, {
            children: [
                (0, e.jsx)(f.Header, { children: 'Receipt' }),
                (0, e.jsx)(f.Description, { children: 'Click the button below to print out your receipt A copy of this receipt has also been sent to your email.' }),
                (0, e.jsx)(g.default, {
                    style: { marginTop: 5 },
                    href: i.receiptLink,
                    target: '_blank',
                    type: 'primary',
                    block: !0,
                    children: 'Print Receipt'
                })
            ]
        })
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = k => {
        const {isRenewal: l} = k;
        return (0, e.jsxs)(f.AntCard, {
            children: [
                (0, e.jsx)(f.Header, { children: l ? 'Renewal Complete!' : 'Get Started!' }),
                (0, e.jsx)(f.Description, { children: l ? 'Your new group license is active! All of your teachers have been imported over from your expiring group. Click the button below to manage your new group license!' : `Your group license is active! Click the button below to invite your teachers to join your license and gain ${ i.COMPANY_NAME } Pro access!` }),
                (0, e.jsx)(g.default, {
                    href: h.GROUP_DASHBOARD,
                    type: 'primary',
                    style: { marginTop: 5 },
                    block: !0,
                    children: 'Manage Group'
                })
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _o;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    let j, k, l, m = n => n;
    const n = [
        {
            text: 'Group license help center',
            link: 'https://help.gimkit.com/en/category/group-subscriptions-3m7198/'
        },
        {
            text: 'Managing group licenses',
            link: 'https://help.gimkit.com/en/article/managing-group-subscriptions-117yzia/'
        }
    ];
    var _o = () => (0, e.jsxs)(_p, {
        className: 'flex vc flex-column',
        children: [
            (0, e.jsx)(_q, { children: '\uD83D\uDCDA Resources' }),
            (0, e.jsx)(_r, { children: 'Take a look at the resources below to help you use your group license!' }),
            n.map(p => (0, e.jsx)('div', {
                style: {
                    fontSize: 16,
                    marginBottom: 5
                },
                children: (0, e.jsx)('a', {
                    href: p.link,
                    target: '_blank',
                    children: p.text
                })
            }, p.link)),
            (0, e.jsx)(i.default, {}),
            (0, e.jsx)(_q, { children: '\uD83D\uDC4B Need Help?' }),
            (0, e.jsx)('div', { style: { height: 5 } }),
            (0, e.jsxs)(_r, {
                children: [
                    'Just email us at',
                    ' ',
                    (0, e.jsx)('a', {
                        href: 'mailto:groups@gimkit.com',
                        children: 'groups@gimkit.com'
                    }),
                    '!'
                ]
            })
        ]
    });
    const _p = f.default.div(j || (j = m`
  text-align: center;
`)), _q = f.default.h2(k || (k = m`
  font-size: 32px;
  font-weight: ${ 0 };
  color: ${ 0 };
`), h.FontWeights.UltraBold, g.default.Black), _r = f.default.p(l || (l = m`
  font-size: 17px;
  margin-top: -25px;
`));
});