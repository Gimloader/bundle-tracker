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
a.register('53KEB', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _A(b.exports, 'default', function() {
        return _z;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('PMl60'),
        h = a('INKb2'),
        i = a('Axq+p'),
        j = a('sHRDd'),
        k = a('b5kvC'),
        l = a('NIZyA'),
        m = a('6CIVV'),
        n = a('cQ3Oz'),
        o = a('TLYzA'),
        p = a('brN/2'),
        q = a('70AkF'),
        r = a('gs4MT'),
        s = a('jzxyj10'),
        t = a('RJjEi');
    let u, v, w = _A => _A;
    const x = 'cc',
        y = 'po';
    var _z = () => {
        const [_A, B] = f.useState(null), [C, D] = f.useState(null), [E, F] = f.useState(!1), [G, H] = f.useState(null), {
            id: I,
            source: J
        } = (0, q.useParams)();
        f.useEffect(() => {
            J !== x && J !== y && (0, s.NavigateTo)(r.HOMEPAGE);
        }, [J]), f.useEffect(() => {
            (0, g.request)({
                url: '/api/quote/fetch/' + I,
                success: _A => {
                    const {
                        quote: K,
                        plan: L
                    } = _A;
                    F(!!_A.quote.renewalForExistingBulk), B(K), D(L);
                },
                error: _A => {
                    H(_A), (0, h.throwError)({
                        title: 'Error fetching quote'
                    });
                }
            });
        }, [I]);
        return (0, e.jsxs)(_A, {
            className: 'flex-column vc',
            children: [
                (0, e.jsx)(t.default, {
                    includeSpacer: !0
                }),
                (0, e.jsx)(_B, {
                    children: (() => {
                        if (G)
                            return (0, e.jsx)(l.default, {
                                type: 'error',
                                message: 'Error fetching quote'
                            });
                        if (!_A || !C)
                            return (0, e.jsx)(m.default, {});
                        let K = '';
                        J === y && (K = 'Purchase Order'), J === x && (K = 'Credit Card ');
                        return (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(o.default, {
                                    title: E ? `Renew with a ${ K }` : `Paying with ${ K }`,
                                    plan: C.name,
                                    cost: _A.price
                                }),
                                J === y && (0, e.jsx)(n.default, {
                                    quote: _A,
                                    planId: C.id,
                                    planLengthInDays: C.days
                                }),
                                J === x && (0, e.jsx)(p.default, {
                                    quote: _A,
                                    planId: C.id,
                                    planLengthInDays: C.days
                                })
                            ]
                        });
                    })()
                })
            ]
        });
    };
    const _A = i.default.div(u || (u = w`
  min-height: 100%;
  background: ${ 0 };
  width: 100%;
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 20px;
`), j.default.Snow, j.default.Black, k.Fonts.SFPro),
        _B = i.default.div(v || (v = w`
  width: 100%;
  max-width: 700px;
`));
}), a.register('cQ3Oz', function(b, c) {
    _R(b.exports, 'MANAGER_DOES_NOT_EXIST_ERROR', function() {
        return _y;
    }), _R(b.exports, 'PeopleFormContainer', function() {
        return _C;
    }), _R(b.exports, 'PeopleFormHeader', function() {
        return _D;
    }), _R(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('BBnjf'),
        g = a('ulE4q'),
        h = a('fmVdR'),
        i = a('ewwAh'),
        j = a('MSsQO'),
        k = a('6CIVV'),
        l = a('vGnv2'),
        m = a('Axq+p'),
        n = a('PMl60'),
        o = a('INKb2'),
        p = a('b5kvC'),
        q = a('0qK6n'),
        r = a('jzxyj10'),
        s = a('ECzOP');
    let t, u, v, w, x = _R => _R;
    const _y = 'Managers are required to have a Gimkit account, and it looks like one doesn\'t exist under this email.';
    var _z = _R => {
        const [A, B] = e.useState(!1), [C, D] = e.useState(_R.quote.name), [E, F] = e.useState(''), [G, H] = e.useState(''), [I, J] = e.useState(!1), [K, L] = e.useState(''), [M, N] = e.useState([]), [O, P] = e.useState([]), Q = !!(C && G && K && E);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(_B, {
                    children: 'Group Name'
                }),
                (0, d.jsx)(i.default, {
                    placeholder: 'Name here...',
                    onChange: _R => D(_R.target.value),
                    value: C,
                    maxLength: 50,
                    autoComplete: 'chrome-off'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(_B, {
                    children: 'School or District Name'
                }),
                (0, d.jsx)(i.default, {
                    placeholder: 'Name here...',
                    onChange: _R => F(_R.target.value),
                    value: E,
                    maxLength: 100,
                    autoComplete: 'chrome-off'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(_B, {
                    children: 'Purchase Order Number'
                }),
                (0, d.jsx)(i.default, {
                    placeholder: 'Purchase order number here...',
                    value: G,
                    onChange: _R => H(_R.target.value)
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsxs)('div', {
                    className: 'flex',
                    children: [
                        (0, d.jsxs)(_C, {
                            children: [
                                (0, d.jsx)(_D, {
                                    children: 'Send a copy of the invoice to...'
                                }),
                                (0, d.jsx)(q.default, {
                                    type: 'invoiceCopy',
                                    initialEmail: (0, n.getUser)().email,
                                    addType: 'Recipient',
                                    onChange: N
                                })
                            ]
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                width: 12
                            }
                        }),
                        (0, d.jsxs)(_C, {
                            children: [
                                (0, d.jsx)(_D, {
                                    children: 'Group license managers...'
                                }),
                                (0, d.jsx)(q.default, {
                                    type: 'manager',
                                    initialEmail: (0, n.getUser)().email,
                                    addType: 'Manager',
                                    ensureActiveUser: !0,
                                    ensureActiveUserErrorMessage: _y,
                                    onChange: P
                                })
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(_B, {
                    children: 'Purchase Order PDF'
                }),
                (0, d.jsx)(_A, {
                    children: (0, d.jsx)(l.default.Dragger, {
                        disabled: !(!I && !K),
                        multiple: !1,
                        height: 200,
                        showUploadList: !1,
                        accept: 'application/pdf',
                        beforeUpload: _R => {
                            const R = _R.size / 1024 / 1024 < 5;
                            return R || j.default.error('PDF must be less than 5MB'), R;
                        },
                        customRequest: ({
                            file: _R
                        }) => {
                            const S = new FormData();
                            S.append('file', _R), J(!0), (0, n.request)({
                                url: '/bulk/purchase-order/upload',
                                method: 'post',
                                data: S,
                                success: _R => L(_R.url),
                                error: () => (0, o.throwError)({
                                    title: 'Error uploading document',
                                    content: 'Please try again'
                                }),
                                both: () => J(!1)
                            });
                        },
                        children: (0, d.jsx)(d.Fragment, {
                            children: K ? (0, d.jsxs)(d.Fragment, {
                                children: [
                                    (0, d.jsx)('p', {
                                        className: 'ant-upload-drag-icon',
                                        children: (0, d.jsx)(f.default, {})
                                    }),
                                    (0, d.jsx)('p', {
                                        className: 'ant-upload-text',
                                        children: 'Purchase Order Uploaded!'
                                    })
                                ]
                            }) : I ? (0, d.jsx)(k.default, {}) : (0, d.jsxs)(d.Fragment, {
                                children: [
                                    (0, d.jsx)('p', {
                                        className: 'ant-upload-drag-icon',
                                        children: (0, d.jsx)(f.default, {})
                                    }),
                                    (0, d.jsx)('p', {
                                        className: 'ant-upload-text',
                                        children: 'Click or drag to upload a PDF'
                                    }),
                                    (0, d.jsx)('p', {
                                        className: 'ant-upload-hint',
                                        children: 'Document must be less than 5MB.'
                                    })
                                ]
                            })
                        })
                    })
                }),
                (0, d.jsxs)(g.default, {
                    style: {
                        marginTop: 10
                    },
                    onClick: () => {
                        !A && Q && (B(!0), (0, n.request)({
                            url: '/api/bulk/createFromPlan',
                            method: 'post',
                            data: {
                                name: C,
                                billingName: E,
                                quoteId: _R.quote.quoteId,
                                purchaseOrderDocument: K,
                                purchaseOrderNumber: G,
                                invoiceEmails: M,
                                adminEmails: O
                            },
                            success: _R => (0, r.NavigateTo)(`/group-subscription/complete?subscriptionId=${ _R.subscriptionId }`),
                            error: _R => (0, n.throwMessageError)({
                                e: _R,
                                default: {
                                    title: 'Error creating subscription'
                                }
                            }),
                            both: () => B(!1)
                        }));
                    },
                    loading: A,
                    type: 'primary',
                    block: !0,
                    size: 'large',
                    disabled: !Q,
                    children: [
                        _R.quote.renewalForExistingBulk ? 'Renew' : 'Start',
                        ' License'
                    ]
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)('div', {
                    style: {
                        marginBottom: 20
                    },
                    children: _R.quote.renewalForExistingBulk ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            'This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:',
                            ' ',
                            (0, d.jsxs)('b', {
                                children: [
                                    _b(s)().add(_R.planLengthInDays, 'day').format('L'),
                                    ' or a year after the current group license expiration.'
                                ]
                            }),
                            ' ',
                            'If payment is not received within 45 days, the license will automatically deactivate.'
                        ]
                    }) : (0, d.jsxs)(d.Fragment, {
                        children: [
                            'This group license will become active immediately. Educators covered under this license will have full Pro access until',
                            ' ',
                            (0, d.jsxs)('b', {
                                children: [
                                    _b(s)().add(_R.planLengthInDays, 'day').format('L'),
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
    const _A = m.default.div(t || (t = x`
  .ant-upload.ant-upload-drag {
    height: 200px;
  }
`)),
        _B = m.default.div(u || (u = x`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 2px;
`), p.FontWeights.Bold),
        _C = m.default.div(v || (v = x`
  width: calc(50% - 6px);
`)),
        _D = m.default.div(w || (w = x`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 6px;
`), p.FontWeights.Bold);
}), a.register('BBnjf', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('XJIlE'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UploadOutlined';
    var _i = e.forwardRef(h);
}), a.register('XJIlE', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'upload',
        theme: 'outlined'
    };
}), a.register('0qK6n', function(b, c) {
    _i(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('NiL4/'),
        f = a('ulE4q'),
        g = a('ewwAh'),
        h = a('YRlpt'),
        i = a('sHRDd'),
        j = a('b5kvC'),
        k = a('INKb2'),
        l = a('Jhh4y'),
        m = a('PMl60'),
        n = a('LEQ5w'),
        o = a('Axq+p');
    let p, q, r, s, t = _i => _i;
    var _u = _i => {
        const [v, w] = n.useState([_i.initialEmail]), [x, y] = n.useState(''), [z, A] = n.useState(!1), [B, C] = n.useState(!1), D = () => A(!1);
        n.useEffect(() => {
            _i.onChange(v);
        }, [v.length]);
        const E = !(!x || !(0, l.validateEmail)(x)),
            F = _i => {
                w(v => [
                    ...v,
                    _i
                ]), D(), y('');
            },
            G = () => {
                E && (B || (v.includes(x) ? (0, k.throwError)({
                    title: 'Email is already on the list!'
                }) : _i.ensureActiveUser ? (C(!0), (0, m.request)({
                    url: '/api/bulk/user/exists',
                    data: {
                        email: x
                    },
                    success: v => {
                        v.exists ? F(x) : (0, k.throwError)({
                            title: 'Couldn\'t add them!',
                            content: _i.ensureActiveUserErrorMessage || 'User not found'
                        });
                    },
                    error: () => {
                        (0, k.throwError)({
                            title: 'We ran into an error. Please try again later.'
                        });
                    },
                    both: () => C(!1)
                })) : F(x)));
            };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_v, {
                    children: [
                        v.map(v => (0, d.jsx)(_w, {
                            children: v
                        }, `${ _i.type }-${ v }`)),
                        (0, d.jsx)(_x, {
                            children: (0, d.jsxs)(f.default, {
                                type: 'primary',
                                icon: (0, d.jsx)(e.default, {}),
                                onClick: () => {
                                    A(!0);
                                },
                                children: [
                                    'Add ',
                                    _i.addType
                                ]
                            })
                        })
                    ]
                }),
                (0, d.jsxs)(h.default, {
                    open: z,
                    onCancel: D,
                    closable: !0,
                    style: {
                        color: i.default.Black,
                        fontFamily: j.Fonts.SFPro
                    },
                    footer: null,
                    children: [
                        (0, d.jsxs)(_y, {
                            children: [
                                'Add ',
                                _i.addType
                            ]
                        }),
                        (0, d.jsxs)('div', {
                            className: 'flex',
                            style: {
                                marginTop: 3
                            },
                            children: [
                                (0, d.jsx)(g.default, {
                                    type: 'email',
                                    placeholder: 'Email address here...',
                                    autoFocus: !0,
                                    value: x,
                                    onChange: _i => y(_i.target.value.trim().toLowerCase()),
                                    onPressEnter: _i => {
                                        _i.preventDefault(), G();
                                    },
                                    autoComplete: 'chrome-off'
                                }),
                                (0, d.jsx)(f.default, {
                                    type: 'primary',
                                    icon: (0, d.jsx)(e.default, {}),
                                    style: {
                                        marginLeft: 10
                                    },
                                    disabled: !E,
                                    onClick: G,
                                    loading: B,
                                    children: 'Add'
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _v = o.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = t`
  background: ${ 0 };
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`), i.default.White),
        _w = o.default.div(q || (q = t`
  border: 1px solid #d9d9d9;
  padding: 6px 12px;
  border-radius: 3px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        _x = o.default.div.attrs({
            className: 'maxWidth flex hc'
        })(r || (r = t`
  margin-top: 30px;
`)),
        _y = o.default.div(s || (s = t`
  font-size: 24px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), a.register('jzxyj10', function(b, c) {
    _i(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _i => {
        d.history.push(_i);
    };
}), a.register('TLYzA', function(b, c) {
    _i(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('PMl60'),
        f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('sHRDd');
    let i, j, k = _i => _i;
    var _l = _i => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(_m, {
                children: _i.title
            }),
            (0, d.jsxs)(_n, {
                children: [
                    _i.plan,
                    ' - ',
                    (0, e.getMoney)(_i.cost / 100, {
                        forceUSD: !0
                    })
                ]
            })
        ]
    });
    const _m = f.default.h2(i || (i = k`
  font-weight: ${ 0 };
  font-size: 37px;
  color: ${ 0 };
`), g.FontWeights.UltraBold, h.default.Black),
        _n = f.default.p(j || (j = k`
  margin-top: -26px;
  font-size: 17px;
`));
}), a.register('brN/2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('ewwAh'),
        i = a('6CIVV'),
        j = a('Axq+p'),
        k = a('PMl60'),
        l = a('b5kvC'),
        m = a('AzS0C1'),
        n = a('cQ3Oz'),
        o = a('0qK6n'),
        p = a('ECzOP');
    let q;
    var _r = _i => {
        const [s, t] = e.useState(!1), [u, v] = e.useState(_i.quote.name), [w, x] = e.useState(''), [y, z] = e.useState(''), [A, B] = e.useState([]), [C, D] = e.useState([]), E = !(!u || !w);
        if (e.useEffect(() => {
                t(!0), (0, k.request)({
                    url: '/api/billing/stripe-key',
                    success: _i => {
                        _i && _i.key && z(_i.key);
                    },
                    error: _i => (0, k.throwMessageError)({
                        e: _i,
                        default: {
                            title: 'Our payment processor is currently down',
                            content: 'Please try again later'
                        }
                    }),
                    both: () => t(!1)
                });
            }, []), !y)
            return (0, d.jsx)(i.default, {});
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {}),
                (0, d.jsx)(_s, {
                    children: 'Group Name'
                }),
                (0, d.jsx)(h.default, {
                    placeholder: 'Name here...',
                    onChange: _i => v(_i.target.value),
                    value: u,
                    maxLength: 50,
                    autoComplete: 'chrome-off'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(_s, {
                    children: 'School or District Name'
                }),
                (0, d.jsx)(h.default, {
                    placeholder: 'Name here...',
                    onChange: _i => x(_i.target.value),
                    value: w,
                    maxLength: 100,
                    autoComplete: 'chrome-off'
                }),
                (0, d.jsx)(g.default, {}),
                (0, d.jsxs)('div', {
                    className: 'flex',
                    children: [
                        (0, d.jsxs)(n.PeopleFormContainer, {
                            children: [
                                (0, d.jsx)(n.PeopleFormHeader, {
                                    children: 'Send a copy of the receipt to...'
                                }),
                                (0, d.jsx)(o.default, {
                                    type: 'receiptCopy',
                                    initialEmail: (0, k.getUser)().email,
                                    addType: 'Recipient',
                                    onChange: B
                                })
                            ]
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                width: 12
                            }
                        }),
                        (0, d.jsxs)(n.PeopleFormContainer, {
                            children: [
                                (0, d.jsx)(n.PeopleFormHeader, {
                                    children: 'Group license managers...'
                                }),
                                (0, d.jsx)(o.default, {
                                    type: 'manager',
                                    initialEmail: (0, k.getUser)().email,
                                    addType: 'Manager',
                                    ensureActiveUser: !0,
                                    ensureActiveUserErrorMessage: n.MANAGER_DOES_NOT_EXIST_ERROR,
                                    onChange: D
                                })
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(g.default, {}),
                (0, d.jsx)(f.default, {
                    id: 'checkout-button',
                    style: {
                        marginBottom: 20
                    },
                    loading: s,
                    type: 'primary',
                    block: !0,
                    size: 'large',
                    onClick: async _G => {
                        if (s || !E)
                            return;
                        let F;
                        t(!0);
                        try {
                            F = await (0, m.loadStripe)(y);
                        } catch (_i) {
                            t(!1), (0, k.throwMessageError)({
                                e: _i,
                                default: {
                                    title: 'Issue connecting to our payment provider',
                                    content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                }
                            });
                        }
                        (0, k.request)({
                            url: '/api/billing/create-bulk-session',
                            method: 'POST',
                            data: {
                                name: u,
                                billingName: w,
                                quoteId: _i.quote.quoteId,
                                receiptEmails: A,
                                adminEmails: C
                            },
                            success: async _i => {
                                const _G = _i;
                                let H;
                                try {
                                    if (H = await F.redirectToCheckout({
                                            sessionId: _G.id
                                        }), H && H.error)
                                        throw H.error;
                                } catch (_i) {
                                    (0, k.throwMessageError)({
                                        e: _i,
                                        default: {
                                            title: 'Error',
                                            content: 'An error ocurred. Please try again later'
                                        }
                                    });
                                }
                            },
                            error: _i => {
                                (0, k.throwMessageError)({
                                    e: _i,
                                    default: {
                                        title: 'Error',
                                        content: 'An error ocurred. Please try again later'
                                    }
                                });
                            },
                            both: () => t(!1)
                        });
                    },
                    disabled: !E,
                    children: 'Checkout'
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginBottom: 20
                    },
                    children: _i.quote.renewalForExistingBulk ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            'This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:',
                            ' ',
                            (0, d.jsxs)('b', {
                                children: [
                                    _b(p)().add(1, 'year').format('L'),
                                    ', or a year after the current group license expiration.'
                                ]
                            }),
                            ' '
                        ]
                    }) : (0, d.jsxs)(d.Fragment, {
                        children: [
                            'This group license will become active immediately. Educators covered under the license will have full Pro access until',
                            ' ',
                            (0, d.jsxs)('b', {
                                children: [
                                    ' ',
                                    _b(p)().add(1, 'year').format('L'),
                                    '.'
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _s = j.default.div(q || (q = (_i => _i)`
  font-weight: ${ 0 };
  font-size: 19px;
  margin-bottom: 2px;
`), l.FontWeights.Bold);
}), a.register('AzS0C1', function(_b, c) {
    _i(_b.exports, 'loadStripe', function() {
        return _l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(_i) {
            return null !== g || (g = new Promise(function(j, k) {
                if ('undefined' != typeof window)
                    if (window.Stripe && _i && console.warn(f), window.Stripe)
                        j(window.Stripe);
                    else
                        try {
                            var l = function() {
                                for (var m = document.querySelectorAll('script[src^="'.concat(d, '"]')), n = 0; n < m.length; n++) {
                                    var o = m[n];
                                    if (e.test(o.src))
                                        return o;
                                }
                                return null;
                            }();
                            l && _i ? console.warn(f) : l || (l = function(m) {
                                var n = m && !m.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    o = document.createElement('script');
                                o.src = ''.concat(d).concat(n);
                                var p = document.head || document.body;
                                if (!p)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return p.appendChild(o), o;
                            }(_i)), l.addEventListener('load', function() {
                                window.Stripe ? j(window.Stripe) : k(new Error('Stripe.js not available'));
                            }), l.addEventListener('error', function() {
                                k(new Error('Failed to load Stripe.js'));
                            });
                        } catch (_i) {
                            return void k(_i);
                        }
                else
                    j(null);
            })), g;
        },
        i = function(j, k, l) {
            if (null === j)
                return null;
            var m = j.apply(void 0, k);
            return function(n, o) {
                n && n._registerWrapper && n._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: o
                });
            }(m, l), m;
        },
        j = Promise.resolve().then(function() {
            return h(null);
        }),
        k = !1;
    j.catch(function(l) {
        k || console.warn(l);
    });
    var _l = function() {
        for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
            n[o] = arguments[o];
        k = !0;
        var p = Date.now();
        return j.then(function(q) {
            return i(q, n, p);
        });
    };
}), a.register('ieNls8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('8auc66'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var _i = e.forwardRef(h);
}), a.register('8auc66', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), a.register('jnjmk3', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F1Ocd'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PaperClipOutlined';
    var _i = e.forwardRef(h);
}), a.register('F1Ocd', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z'
                }
            }]
        },
        name: 'paper-clip',
        theme: 'outlined'
    };
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _d(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_d, b) => {
            const {
                antCls: n
            } = _d, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _d.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _d.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _d.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('jlX4s16', function(b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), a.register('2HvvA11', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _i => _i.external || !_i.to ? (0, d.jsx)('a', {
        href: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        onKeyPress: b => {
            _i.onClick && 'Enter' === b.key && (b.preventDefault(), _i.onClick());
        },
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    }) : (0, d.jsx)(e.Link, {
        to: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        className: _i.className,
        target: _i.target,
        style: _i.style,
        children: _i.children
    });
}), a.register('Rtfgy20', function(b, c) {
    _i(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _j(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('9R7cy', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _f => (0, d.jsx)('i', {
        className: `${ _f.name }${ _f.className ? ` ${ _f.className }` : '' }`,
        style: _f.style
    });
}), a.register('VckKB', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e() {
        const [, _f] = d.useReducer(_f => _f + 1, 0);
        return _f;
    }
}), a.register('7B+hJ16', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), a.register('NmrDs1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('Hi0/F0', function(b, c) {
    _i(b.exports, 'informationTypes', function() {
        return _f;
    }), _i(b.exports, 'default', function() {
        return _x;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const _f = {
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
        },
        g = {
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
        },
        {
            userExists: h,
            email: i,
            accountType: j,
            googleToken: k,
            firstName: l,
            lastName: m,
            password: n,
            schoolId: o,
            districtId: p,
            country: q,
            areaOfExpertise: r,
            gradeLevel: s,
            organization: t,
            acceptsLatestPolicies: u,
            authenticated: v
        } = g;
    class w {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([_f.email]), this.reset = () => {
                Object.keys(g).forEach(_i => this[_i] = g[_i]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
}), a.register('5ka2e1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _r;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = {
            currentStage: a('AUbBm1').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        },
        {
            currentStage: g,
            emailSignInBlocked: h,
            creatingAccount: i,
            loggingIn: j,
            updatingAccountInformation: k,
            loginError: l,
            redirectUri: m,
            classJoiningId: n,
            classJoiningName: o,
            classJoiningTeacherName: p
        } = f;
    class q {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(f).forEach(_i => this[_i] = f[_i]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('pYmyT1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(_i => (0, d.jsx)(f.default, {
        disabled: _i.disabled,
        size: _i.size || 'middle',
        type: 'primary',
        onClick: _i.onClick,
        style: Object.assign({
            width: '100%'
        }, _i.style),
        loading: _i.loading,
        children: _i.children
    }));
}), a.register('uvADe0', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('NIZyA');
    var _f = _i => _i.error ? (0, d.jsx)(e.default, {
        message: 'Error',
        style: _i.style,
        type: 'error',
        description: _i.error && _i.error.message && _i.error.message.text ? _i.error.message.text : 'string' == typeof _i.error ? _i.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), a.register('PElTf4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F10jM4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var _i = e.forwardRef(h);
}), a.register('F10jM4', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});