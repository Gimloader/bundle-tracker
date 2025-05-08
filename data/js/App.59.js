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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _B;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y = z => z;
    const z = 'cc', A = 'po';
    var _B = () => {
        const [C, D] = h.useState(null), [E, F] = h.useState(null), [G, H] = h.useState(!1), [I, J] = h.useState(null), {
                id: K,
                source: L
            } = (0, s.useParams)();
        h.useEffect(() => {
            L !== z && L !== A && (0, u.NavigateTo)(t.HOMEPAGE);
        }, [L]), h.useEffect(() => {
            (0, i.request)({
                url: '/api/quote/fetch/' + K,
                success: M => {
                    const {
                        quote: N,
                        plan: O
                    } = M;
                    H(!!M.quote.renewalForExistingBulk), D(N), F(O);
                },
                error: M => {
                    J(M), (0, j.throwError)({ title: 'Error fetching quote' });
                }
            });
        }, [K]);
        return (0, g.jsxs)(_C, {
            className: 'flex-column vc',
            children: [
                (0, g.jsx)(v.default, { includeSpacer: !0 }),
                (0, g.jsx)(_D, {
                    children: (() => {
                        if (I)
                            return (0, g.jsx)(n.default, {
                                type: 'error',
                                message: 'Error fetching quote'
                            });
                        if (!C || !E)
                            return (0, g.jsx)(o.default, {});
                        let M = '';
                        L === A && (M = 'Purchase Order'), L === z && (M = 'Credit Card ');
                        return (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)(q.default, {
                                    title: G ? `Renew with a ${ M }` : `Paying with ${ M }`,
                                    plan: E.name,
                                    cost: C.price
                                }),
                                L === A && (0, g.jsx)(p.default, {
                                    quote: C,
                                    planId: E.id,
                                    planLengthInDays: E.days
                                }),
                                L === z && (0, g.jsx)(r.default, {
                                    quote: C,
                                    planId: E.id,
                                    planLengthInDays: E.days
                                })
                            ]
                        });
                    })()
                })
            ]
        });
    };
    const _C = k.default.div(w || (w = y`
  min-height: 100%;
  background: ${ 0 };
  width: 100%;
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 20px;
`), l.default.Snow, l.default.Black, m.Fonts.SFPro), _D = k.default.div(x || (x = y`
  width: 100%;
  max-width: 700px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'MANAGER_DOES_NOT_EXIST_ERROR', function () {
        return _A;
    }), a(d.exports, 'PeopleFormContainer', function () {
        return _E;
    }), a(d.exports, 'PeopleFormHeader', function () {
        return _F;
    }), a(d.exports, 'default', function () {
        return _B;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x, y, z = A => A;
    const _A = 'Managers are required to have a Gimkit account, and it looks like one doesn\'t exist under this email.';
    var _B = C => {
        const [D, E] = g.useState(!1), [F, G] = g.useState(C.quote.name), [H, I] = g.useState(''), [J, K] = g.useState(''), [L, M] = g.useState(!1), [N, O] = g.useState(''), [P, Q] = g.useState([]), [R, S] = g.useState([]), T = !!(F && J && N && H);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(_D, { children: 'Group Name' }),
                (0, f.jsx)(k.default, {
                    placeholder: 'Name here...',
                    onChange: U => G(U.target.value),
                    value: F,
                    maxLength: 50,
                    autoComplete: 'chrome-off'
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                (0, f.jsx)(_D, { children: 'School or District Name' }),
                (0, f.jsx)(k.default, {
                    placeholder: 'Name here...',
                    onChange: U => I(U.target.value),
                    value: H,
                    maxLength: 100,
                    autoComplete: 'chrome-off'
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                (0, f.jsx)(_D, { children: 'Purchase Order Number' }),
                (0, f.jsx)(k.default, {
                    placeholder: 'Purchase order number here...',
                    value: J,
                    onChange: U => K(U.target.value)
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsxs)('div', {
                    className: 'flex',
                    children: [
                        (0, f.jsxs)(_E, {
                            children: [
                                (0, f.jsx)(_F, { children: 'Send a copy of the invoice to...' }),
                                (0, f.jsx)(s.default, {
                                    type: 'invoiceCopy',
                                    initialEmail: (0, p.getUser)().email,
                                    addType: 'Recipient',
                                    onChange: Q
                                })
                            ]
                        }),
                        (0, f.jsx)('div', { style: { width: 12 } }),
                        (0, f.jsxs)(_E, {
                            children: [
                                (0, f.jsx)(_F, { children: 'Group license managers...' }),
                                (0, f.jsx)(s.default, {
                                    type: 'manager',
                                    initialEmail: (0, p.getUser)().email,
                                    addType: 'Manager',
                                    ensureActiveUser: !0,
                                    ensureActiveUserErrorMessage: _A,
                                    onChange: S
                                })
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(_D, { children: 'Purchase Order PDF' }),
                (0, f.jsx)(_C, {
                    children: (0, f.jsx)(n.default.Dragger, {
                        disabled: !(!L && !N),
                        multiple: !1,
                        height: 200,
                        showUploadList: !1,
                        accept: 'application/pdf',
                        beforeUpload: U => {
                            const V = U.size / 1024 / 1024 < 5;
                            return V || l.default.error('PDF must be less than 5MB'), V;
                        },
                        customRequest: ({file: U}) => {
                            const V = new FormData();
                            V.append('file', U), M(!0), (0, p.request)({
                                url: '/bulk/purchase-order/upload',
                                method: 'post',
                                data: V,
                                success: W => O(W.url),
                                error: () => (0, q.throwError)({
                                    title: 'Error uploading document',
                                    content: 'Please try again'
                                }),
                                both: () => M(!1)
                            });
                        },
                        children: (0, f.jsx)(f.Fragment, {
                            children: N ? (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)('p', {
                                        className: 'ant-upload-drag-icon',
                                        children: (0, f.jsx)(h.default, {})
                                    }),
                                    (0, f.jsx)('p', {
                                        className: 'ant-upload-text',
                                        children: 'Purchase Order Uploaded!'
                                    })
                                ]
                            }) : L ? (0, f.jsx)(m.default, {}) : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)('p', {
                                        className: 'ant-upload-drag-icon',
                                        children: (0, f.jsx)(h.default, {})
                                    }),
                                    (0, f.jsx)('p', {
                                        className: 'ant-upload-text',
                                        children: 'Click or drag to upload a PDF'
                                    }),
                                    (0, f.jsx)('p', {
                                        className: 'ant-upload-hint',
                                        children: 'Document must be less than 5MB.'
                                    })
                                ]
                            })
                        })
                    })
                }),
                (0, f.jsxs)(i.default, {
                    style: { marginTop: 10 },
                    onClick: () => {
                        !D && T && (E(!0), (0, p.request)({
                            url: '/api/bulk/createFromPlan',
                            method: 'post',
                            data: {
                                name: F,
                                billingName: H,
                                quoteId: C.quote.quoteId,
                                purchaseOrderDocument: N,
                                purchaseOrderNumber: J,
                                invoiceEmails: P,
                                adminEmails: R
                            },
                            success: U => (0, t.NavigateTo)(`/group-subscription/complete?subscriptionId=${ U.subscriptionId }`),
                            error: U => (0, p.throwMessageError)({
                                e: U,
                                default: { title: 'Error creating subscription' }
                            }),
                            both: () => E(!1)
                        }));
                    },
                    loading: D,
                    type: 'primary',
                    block: !0,
                    size: 'large',
                    disabled: !T,
                    children: [
                        C.quote.renewalForExistingBulk ? 'Renew' : 'Start',
                        ' License'
                    ]
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)('div', {
                    style: { marginBottom: 20 },
                    children: C.quote.renewalForExistingBulk ? (0, f.jsxs)(f.Fragment, {
                        children: [
                            'This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:',
                            ' ',
                            (0, f.jsxs)('b', {
                                children: [
                                    b(u)().add(C.planLengthInDays, 'day').format('L'),
                                    ' or a year after the current group license expiration.'
                                ]
                            }),
                            ' ',
                            'If payment is not received within 45 days, the license will automatically deactivate.'
                        ]
                    }) : (0, f.jsxs)(f.Fragment, {
                        children: [
                            'This group license will become active immediately. Educators covered under this license will have full Pro access until',
                            ' ',
                            (0, f.jsxs)('b', {
                                children: [
                                    b(u)().add(C.planLengthInDays, 'day').format('L'),
                                    '.'
                                ]
                            }),
                            ' If payment is not received within 45 days, the license will automatically deactivate.'
                        ]
                    })
                })
            ]
        });
    };
    const _C = o.default.div(v || (v = z`
  .ant-upload.ant-upload-drag {
    height: 200px;
  }
`)), _D = o.default.div(w || (w = z`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 2px;
`), r.FontWeights.Bold), _E = o.default.div(x || (x = z`
  width: calc(50% - 6px);
`)), _F = o.default.div(y || (y = z`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 6px;
`), r.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UploadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'upload',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r, s, t, u, v = w => w;
    var _w = x => {
        const [y, z] = p.useState([x.initialEmail]), [A, B] = p.useState(''), [C, D] = p.useState(!1), [E, F] = p.useState(!1), G = () => D(!1);
        p.useEffect(() => {
            x.onChange(y);
        }, [y.length]);
        const H = !(!A || !(0, n.validateEmail)(A)), I = J => {
                z(K => [
                    ...K,
                    J
                ]), G(), B('');
            }, J = () => {
                H && (E || (y.includes(A) ? (0, m.throwError)({ title: 'Email is already on the list!' }) : x.ensureActiveUser ? (F(!0), (0, o.request)({
                    url: '/api/bulk/user/exists',
                    data: { email: A },
                    success: K => {
                        K.exists ? I(A) : (0, m.throwError)({
                            title: 'Couldn\'t add them!',
                            content: x.ensureActiveUserErrorMessage || 'User not found'
                        });
                    },
                    error: () => {
                        (0, m.throwError)({ title: 'We ran into an error. Please try again later.' });
                    },
                    both: () => F(!1)
                })) : I(A)));
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_x, {
                    children: [
                        y.map(K => (0, f.jsx)(_y, { children: K }, `${ x.type }-${ K }`)),
                        (0, f.jsx)(_z, {
                            children: (0, f.jsxs)(h.default, {
                                type: 'primary',
                                icon: (0, f.jsx)(g.default, {}),
                                onClick: () => {
                                    D(!0);
                                },
                                children: [
                                    'Add ',
                                    x.addType
                                ]
                            })
                        })
                    ]
                }),
                (0, f.jsxs)(j.default, {
                    open: C,
                    onCancel: G,
                    closable: !0,
                    style: {
                        color: k.default.Black,
                        fontFamily: l.Fonts.SFPro
                    },
                    footer: null,
                    children: [
                        (0, f.jsxs)(_A, {
                            children: [
                                'Add ',
                                x.addType
                            ]
                        }),
                        (0, f.jsxs)('div', {
                            className: 'flex',
                            style: { marginTop: 3 },
                            children: [
                                (0, f.jsx)(i.default, {
                                    type: 'email',
                                    placeholder: 'Email address here...',
                                    autoFocus: !0,
                                    value: A,
                                    onChange: K => B(K.target.value.trim().toLowerCase()),
                                    onPressEnter: K => {
                                        K.preventDefault(), J();
                                    },
                                    autoComplete: 'chrome-off'
                                }),
                                (0, f.jsx)(h.default, {
                                    type: 'primary',
                                    icon: (0, f.jsx)(g.default, {}),
                                    style: { marginLeft: 10 },
                                    disabled: !H,
                                    onClick: J,
                                    loading: E,
                                    children: 'Add'
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _x = q.default.div.attrs({ className: 'maxWidth' })(r || (r = v`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`), k.default.White), _y = q.default.div(s || (s = v`
  border: 1px solid #d9d9d9;
  padding: 6px 12px;
  border-radius: 3px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)), _z = q.default.div.attrs({ className: 'maxWidth flex hc' })(t || (t = v`
  margin-top: 30px;
`)), _A = q.default.div(u || (u = v`
  font-size: 24px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m = n => n;
    var _n = o => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(_o, { children: o.title }),
            (0, f.jsxs)(_p, {
                children: [
                    o.plan,
                    ' - ',
                    (0, g.getMoney)(o.cost / 100, { forceUSD: !0 })
                ]
            })
        ]
    });
    const _o = h.default.h2(k || (k = m`
  font-weight: ${ 0 };
  font-size: 37px;
  color: ${ 0 };
`), i.FontWeights.UltraBold, j.default.Black), _p = h.default.p(l || (l = m`
  margin-top: -26px;
  font-size: 17px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    var _t = u => {
        const [v, w] = g.useState(!1), [x, y] = g.useState(u.quote.name), [z, A] = g.useState(''), [B, C] = g.useState(''), [D, E] = g.useState([]), [F, G] = g.useState([]), H = !(!x || !z);
        if (g.useEffect(() => {
                w(!0), (0, m.request)({
                    url: '/api/billing/stripe-key',
                    success: I => {
                        I && I.key && C(I.key);
                    },
                    error: I => (0, m.throwMessageError)({
                        e: I,
                        default: {
                            title: 'Our payment processor is currently down',
                            content: 'Please try again later'
                        }
                    }),
                    both: () => w(!1)
                });
            }, []), !B)
            return (0, f.jsx)(k.default, {});
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {}),
                (0, f.jsx)(_u, { children: 'Group Name' }),
                (0, f.jsx)(j.default, {
                    placeholder: 'Name here...',
                    onChange: I => y(I.target.value),
                    value: x,
                    maxLength: 50,
                    autoComplete: 'chrome-off'
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                (0, f.jsx)(_u, { children: 'School or District Name' }),
                (0, f.jsx)(j.default, {
                    placeholder: 'Name here...',
                    onChange: I => A(I.target.value),
                    value: z,
                    maxLength: 100,
                    autoComplete: 'chrome-off'
                }),
                (0, f.jsx)(i.default, {}),
                (0, f.jsxs)('div', {
                    className: 'flex',
                    children: [
                        (0, f.jsxs)(p.PeopleFormContainer, {
                            children: [
                                (0, f.jsx)(p.PeopleFormHeader, { children: 'Send a copy of the receipt to...' }),
                                (0, f.jsx)(q.default, {
                                    type: 'receiptCopy',
                                    initialEmail: (0, m.getUser)().email,
                                    addType: 'Recipient',
                                    onChange: E
                                })
                            ]
                        }),
                        (0, f.jsx)('div', { style: { width: 12 } }),
                        (0, f.jsxs)(p.PeopleFormContainer, {
                            children: [
                                (0, f.jsx)(p.PeopleFormHeader, { children: 'Group license managers...' }),
                                (0, f.jsx)(q.default, {
                                    type: 'manager',
                                    initialEmail: (0, m.getUser)().email,
                                    addType: 'Manager',
                                    ensureActiveUser: !0,
                                    ensureActiveUserErrorMessage: p.MANAGER_DOES_NOT_EXIST_ERROR,
                                    onChange: G
                                })
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(i.default, {}),
                (0, f.jsx)(h.default, {
                    id: 'checkout-button',
                    style: { marginBottom: 20 },
                    loading: v,
                    type: 'primary',
                    block: !0,
                    size: 'large',
                    onClick: async I => {
                        if (v || !H)
                            return;
                        let J;
                        w(!0);
                        try {
                            J = await (0, o.loadStripe)(B);
                        } catch (u) {
                            w(!1), (0, m.throwMessageError)({
                                e: u,
                                default: {
                                    title: 'Issue connecting to our payment provider',
                                    content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                }
                            });
                        }
                        (0, m.request)({
                            url: '/api/billing/create-bulk-session',
                            method: 'POST',
                            data: {
                                name: x,
                                billingName: z,
                                quoteId: u.quote.quoteId,
                                receiptEmails: D,
                                adminEmails: F
                            },
                            success: async K => {
                                const L = K;
                                let M;
                                try {
                                    if (M = await J.redirectToCheckout({ sessionId: L.id }), M && M.error)
                                        throw M.error;
                                } catch (K) {
                                    (0, m.throwMessageError)({
                                        e: K,
                                        default: {
                                            title: 'Error',
                                            content: 'An error ocurred. Please try again later'
                                        }
                                    });
                                }
                            },
                            error: K => {
                                (0, m.throwMessageError)({
                                    e: K,
                                    default: {
                                        title: 'Error',
                                        content: 'An error ocurred. Please try again later'
                                    }
                                });
                            },
                            both: () => w(!1)
                        });
                    },
                    disabled: !H,
                    children: 'Checkout'
                }),
                (0, f.jsx)('div', {
                    style: { marginBottom: 20 },
                    children: u.quote.renewalForExistingBulk ? (0, f.jsxs)(f.Fragment, {
                        children: [
                            'This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:',
                            ' ',
                            (0, f.jsxs)('b', {
                                children: [
                                    b(r)().add(1, 'year').format('L'),
                                    ', or a year after the current group license expiration.'
                                ]
                            }),
                            ' '
                        ]
                    }) : (0, f.jsxs)(f.Fragment, {
                        children: [
                            'This group license will become active immediately. Educators covered under the license will have full Pro access until',
                            ' ',
                            (0, f.jsxs)('b', {
                                children: [
                                    ' ',
                                    b(r)().add(1, 'year').format('L'),
                                    '.'
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _u = l.default.div(s || (s = (v => v)`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 2px;
`), n.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'loadStripe', function () {
        return _n;
    });
    var f = 'https://js.stripe.com/v3', g = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, h = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used', i = null, j = function (k) {
            return null !== i || (i = new Promise(function (l, m) {
                if ('undefined' != typeof window)
                    if (window.Stripe && k && console.warn(h), window.Stripe)
                        l(window.Stripe);
                    else
                        try {
                            var n = function () {
                                for (var o = document.querySelectorAll('script[src^="'.concat(f, '"]')), p = 0; p < o.length; p++) {
                                    var q = o[p];
                                    if (g.test(q.src))
                                        return q;
                                }
                                return null;
                            }();
                            n && k ? console.warn(h) : n || (n = function (o) {
                                var p = o && !o.advancedFraudSignals ? '?advancedFraudSignals=false' : '', q = document.createElement('script');
                                q.src = ''.concat(f).concat(p);
                                var r = document.head || document.body;
                                if (!r)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return r.appendChild(q), q;
                            }(k)), n.addEventListener('load', function () {
                                window.Stripe ? l(window.Stripe) : m(new Error('Stripe.js not available'));
                            }), n.addEventListener('error', function () {
                                m(new Error('Failed to load Stripe.js'));
                            });
                        } catch (k) {
                            return void m(k);
                        }
                else
                    l(null);
            })), i;
        }, k = function (l, m, n) {
            if (null === l)
                return null;
            var o = l.apply(void 0, m);
            return function (p, q) {
                p && p._registerWrapper && p._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: q
                });
            }(o, n), o;
        }, l = Promise.resolve().then(function () {
            return j(null);
        }), m = !1;
    l.catch(function (n) {
        m || console.warn(n);
    });
    var _n = function () {
        for (var o = arguments.length, p = new Array(o), q = 0; q < o; q++)
            p[q] = arguments[q];
        m = !0;
        var r = Date.now();
        return l.then(function (s) {
            return k(s, p, r);
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z' }
                }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PaperClipOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z' }
                }]
        },
        name: 'paper-clip',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g() {
        const [, h] = f.useReducer(i => i + 1, 0);
        return h;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = {
        login: new (0, f.default)(),
        navigation: new (0, g.default)()
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'informationTypes', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....');
    const _h = {
            email: 'EMAIL',
            password: 'PASSWORD',
            accountPassword: 'ACCOUNT_PASSWORD',
            firstName: 'FIRST_NAME',
            lastName: 'LAST_NAME',
            accountType: 'ACCOUNT_TYPE',
            country: 'COUNTRY',
            areaOfExpertise: 'AREA_OF_EXPERTISE',
            gradeLevel: 'GRADE_LEVEL',
            organization: 'ORGANIZATION',
            acceptedLatestPolicies: 'ACCEPTED_LATEST_POLICIES',
            schoolId: 'SCHOOL_ID',
            districtId: 'DISTRICT_ID'
        }, i = {
            userExists: !1,
            email: '',
            accountType: null,
            googleToken: '',
            firstName: '',
            lastName: '',
            password: '',
            schoolId: '',
            districtId: '',
            country: '',
            areaOfExpertise: '',
            gradeLevel: '',
            organization: '',
            acceptsLatestPolicies: !1,
            authenticated: !1
        }, {
            userExists: j,
            email: k,
            accountType: l,
            googleToken: m,
            firstName: n,
            lastName: o,
            password: p,
            schoolId: q,
            districtId: r,
            country: s,
            areaOfExpertise: t,
            gradeLevel: u,
            organization: v,
            acceptsLatestPolicies: w,
            authenticated: x
        } = i;
    class y {
        constructor() {
            this.userExists = j, this.email = k, this.accountType = l, this.googleToken = m, this.firstName = n, this.lastName = o, this.password = p, this.schoolId = q, this.districtId = r, this.country = s, this.areaOfExpertise = t, this.gradeLevel = u, this.organization = v, this.acceptsLatestPolicies = w, this.authenticated = x, this.informationNeeded = g.observable.array([_h.email]), this.reset = () => {
                Object.keys(i).forEach(z => this[z] = i[z]), this.informationNeeded.replace([_h.email]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], y.prototype, 'userExists', void 0), (0, f.__decorate)([g.observable], y.prototype, 'email', void 0), (0, f.__decorate)([g.observable], y.prototype, 'accountType', void 0), (0, f.__decorate)([g.observable], y.prototype, 'googleToken', void 0), (0, f.__decorate)([g.observable], y.prototype, 'firstName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'lastName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'password', void 0), (0, f.__decorate)([g.observable], y.prototype, 'schoolId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'districtId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'country', void 0), (0, f.__decorate)([g.observable], y.prototype, 'areaOfExpertise', void 0), (0, f.__decorate)([g.observable], y.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], y.prototype, 'organization', void 0), (0, f.__decorate)([g.observable], y.prototype, 'acceptsLatestPolicies', void 0), (0, f.__decorate)([g.observable], y.prototype, 'authenticated', void 0), (0, f.__decorate)([g.observable], y.prototype, 'informationNeeded', void 0), (0, f.__decorate)([g.action], y.prototype, 'reset', void 0);
    var _z = y;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....');
    const h = {
            currentStage: c('.....').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        }, {
            currentStage: i,
            emailSignInBlocked: j,
            creatingAccount: k,
            loggingIn: l,
            updatingAccountInformation: m,
            loginError: n,
            redirectUri: o,
            classJoiningId: p,
            classJoiningName: q,
            classJoiningTeacherName: r
        } = h;
    class s {
        constructor() {
            this.currentStage = i, this.emailSignInBlocked = j, this.creatingAccount = k, this.loggingIn = l, this.updatingAccountInformation = m, this.loginError = n, this.redirectUri = o, this.classJoiningId = p, this.classJoiningName = q, this.classJoiningTeacherName = r, this.reset = () => {
                Object.keys(h).forEach(t => this[t] = h[t]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], s.prototype, 'currentStage', void 0), (0, f.__decorate)([g.observable], s.prototype, 'emailSignInBlocked', void 0), (0, f.__decorate)([g.observable], s.prototype, 'creatingAccount', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loggingIn', void 0), (0, f.__decorate)([g.observable], s.prototype, 'updatingAccountInformation', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loginError', void 0), (0, f.__decorate)([g.observable], s.prototype, 'redirectUri', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningId', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningName', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningTeacherName', void 0), (0, f.__decorate)([g.action], s.prototype, 'reset', void 0);
    var _t = s;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).email = 'email', g.password = 'password', g.accountType = 'accountType', g.studentSpecificInfo = 'studentSpecificInfo', g.nameAndPassword = 'nameAndPassword', g.school = 'school', g.educatorSpecificInfo = 'educatorSpecificInfo', g.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', g.acceptPolicies = 'acceptPolicies', g.verifyClass = 'verifyClass';
    var _h = f;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = (0, g.observer)(j => (0, f.jsx)(h.default, {
        disabled: j.disabled,
        size: j.size || 'middle',
        type: 'primary',
        onClick: j.onClick,
        style: Object.assign({ width: '100%' }, j.style),
        loading: j.loading,
        children: j.children
    }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => i.error ? (0, f.jsx)(g.default, {
        message: 'Error',
        style: i.style,
        type: 'error',
        description: i.error && i.error.message && i.error.message.text ? i.error.message.text : 'string' == typeof i.error ? i.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'download',
        theme: 'outlined'
    };
});