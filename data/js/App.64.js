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
        return _r;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    var _r = () => {
        const {id: s} = (0, o.useParams)(), t = s;
        return (0, g.jsx)(h.QueryClientProvider, {
            client: l.default,
            children: (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(p.default, { includeSpacer: !0 }),
                    t ? (0, g.jsx)(m.default, { bulkId: t }) : (0, g.jsx)(n.default, {})
                ]
            })
        });
    };
    const _s = i.default.div.attrs({ className: 'flex-column' })(q || (q = (t => t)`
  flex: 1;
  color: ${ 0 };
  background: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, j.default.Snow, k.Fonts.SFPro);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = new (0, (c('.....')).QueryClient)();
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    const s = i.lazy(() => c('.....'));
    let t;
    var u;
    (u = t || (t = {})).invite = 'invite', u.members = 'members', u.managers = 'managers', u.analytics = 'analytics', u.invoice = 'invoice', u.receipt = 'receipt';
    const {TabPane: v} = h.default;
    var _w = x => {
        const {bulkId: y} = x, [z, A] = i.useState(t.invite), {
                data: B,
                error: C,
                isLoading: D
            } = (0, k.default)(y);
        if (D)
            return (0, f.jsxs)('div', {
                style: { flex: 1 },
                className: 'flex-center',
                children: [
                    (0, f.jsx)(q.Title, { title: 'Group License' }),
                    (0, f.jsx)(g.default, { size: 'large' })
                ]
            });
        if (C)
            return (0, r.NavigateTo)(j.GROUP_DASHBOARD), null;
        return (0, f.jsxs)(l.Container, {
            children: [
                (0, f.jsx)(q.Title, { title: `${ B.name } | Group License` }),
                (0, f.jsxs)(l.Content, {
                    children: [
                        (0, f.jsx)(n.default, {
                            bulk: B,
                            bulkId: x.bulkId
                        }),
                        (0, f.jsx)(l.PrimaryContent, {
                            children: (0, f.jsxs)(h.default, {
                                type: 'card',
                                activeKey: z,
                                onChange: E => {
                                    const F = E;
                                    F !== t.invoice ? F !== t.receipt ? A(F) : B.receiptUrl && window.open(B.receiptUrl) : B.invoiceUrl && window.open(B.invoiceUrl);
                                },
                                children: [
                                    (0, f.jsx)(v, {
                                        tab: 'Invite',
                                        children: (0, f.jsx)(o.default, {
                                            bulk: B,
                                            bulkId: y
                                        })
                                    }, t.invite),
                                    (0, f.jsx)(v, {
                                        tab: 'Members',
                                        children: (0, f.jsx)(p.default, {
                                            bulk: B,
                                            bulkId: y
                                        })
                                    }, t.members),
                                    (0, f.jsx)(v, {
                                        tab: 'Managers',
                                        children: (0, f.jsx)(m.default, {
                                            bulk: B,
                                            bulkId: y
                                        })
                                    }, t.managers),
                                    (0, f.jsx)(v, {
                                        tab: 'Usage Report',
                                        children: (0, f.jsx)(i.Suspense, {
                                            fallback: null,
                                            children: (0, f.jsx)(s, { bulkId: y })
                                        })
                                    }, t.analytics),
                                    B.receiptUrl ? (0, f.jsx)(v, { tab: 'View Receipt' }, t.receipt) : null,
                                    B.invoiceUrl ? (0, f.jsx)(v, { tab: 'View Invoice' }, t.invoice) : null
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'refetchSpecificBulk', function () {
        return _j;
    }), a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = ['specific-bulk'], _j = k => h.default.refetchQueries([
            i,
            k
        ]);
    var _k = l => (0, f.useQuery)([
        i,
        l
    ], () => (0, g.requestAsPromise)({ url: '/api/bulk/fetch/' + l }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'Container', function () {
        return _y;
    }), a(d.exports, 'Content', function () {
        return _z;
    }), a(d.exports, 'Title', function () {
        return _A;
    }), a(d.exports, 'PrimaryContent', function () {
        return _C;
    }), a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r, s, t, u, v, w = x => x;
    var _x = y => (0, f.jsx)(_y, {
        children: (0, f.jsxs)(_z, {
            children: [
                (0, f.jsxs)('div', {
                    style: { textAlign: 'center' },
                    className: 'flex-column flex-center',
                    children: [
                        (0, f.jsxs)(_A, {
                            children: [
                                k.COMPANY_NAME,
                                ' Groups'
                            ]
                        }),
                        (0, f.jsxs)(_B, {
                            children: [
                                'Welcome to ',
                                k.COMPANY_NAME,
                                ' Groups! Below are the group licenses you manage. Click into a license to invite members, add managers, view usage analytics, and more!'
                            ]
                        }),
                        (0, f.jsx)(n.default, {
                            to: m.GROUP_PRICING,
                            style: {
                                marginBottom: 30,
                                marginTop: -10
                            },
                            children: (0, f.jsx)(h.default, {
                                size: 'large',
                                type: 'primary',
                                icon: (0, f.jsx)(g.default, {}),
                                children: 'Start New Group'
                            })
                        })
                    ]
                }),
                (0, f.jsx)(_C, {
                    children: y.bulks.map(z => (0, f.jsx)(q.default, {
                        id: z.id,
                        name: z.name,
                        isActive: z.isActive,
                        startDate: b(i)((0, p.dateFromId)(z.id)).format('MMMM Do, YYYY')
                    }, z.id + '-item'))
                })
            ]
        })
    });
    const _y = j.default.div.attrs({ className: 'flex-column vc' })(r || (r = w`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`)), _z = j.default.div.attrs({ className: 'flex-column' })(s || (s = w`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`)), _A = j.default.div(t || (t = w`
  font-size: 54px;
  font-weight: ${ 0 };
`), l.FontWeights.UltraBold), _B = j.default.div(u || (u = w`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`)), _C = (0, j.default)(o.default).attrs({ className: 'maxWidth' })(v || (v = w`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var _h = i => i.external || !i.to ? (0, f.jsx)('a', {
        href: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        onKeyPress: j => {
            i.onClick && 'Enter' === j.key && (j.preventDefault(), i.onClick());
        },
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    }) : (0, f.jsx)(g.Link, {
        to: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        onClick: k.onClick,
        className: k.className,
        style: k.style,
        children: k.children
    });
    const _k = g.default.div(i || (i = (l => l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n, o = p => p;
    var _p = q => {
        const {
            id: r,
            name: s,
            startDate: t,
            isActive: u
        } = q;
        return (0, f.jsxs)(_q, {
            to: `/groups/${ r }`,
            children: [
                (0, f.jsx)(_r, {
                    style: { background: u ? '#388e3c' : '#f44336' },
                    children: u ? 'Active' : 'Inactive'
                }),
                (0, f.jsx)(_s, { children: s }),
                t ? (0, f.jsxs)(_t, {
                    children: [
                        'Started on ',
                        t
                    ]
                }) : null
            ]
        });
    };
    const _q = (0, g.default)(j.default).attrs({ className: 'flex-column' })(k || (k = o`
  padding-top: 0px;
  border: 1px solid;
  border-color: ${ 0 };
  border-radius: 3px;
  align-items: flex-start;
  padding: 24px;
  transition: background 0.15s;
  margin-bottom: 10px;
  color: ${ 0 };
  text-decoration: none;
  &:hover {
    background: rgba(232, 245, 233, 0.2);
    cursor: pointer;
    color: ${ 0 };
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
`), h.default.BorderGray, h.default.Black, h.default.Black), _r = g.default.div(l || (l = o`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${ 0 };
  margin-bottom: 9px;
  font-size: 12px;
`), h.default.White), _s = g.default.div(m || (m = o`
  font-weight: ${ 0 };
  font-size: 16px;
`), i.FontWeights.Bold), _t = g.default.div(n || (n = o`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    const v = {
        fontFamily: m.Fonts.SFPro,
        color: n.default.Black
    };
    var _w = x => {
        const {
                bulk: y,
                bulkId: z
            } = x, [A, B] = g.useState(''), [C, D] = g.useState(!1), [E, F] = g.useState(null), G = A && (0, s.validateEmail)(A), H = () => {
                G && (D(!0), (0, t.request)({
                    url: '/api/bulk/add-admin',
                    data: {
                        bulk: z,
                        newAdmin: A
                    },
                    success: () => {
                        (0, q.refetchSpecificBulk)(z), k.default.success('Manager added!'), B('');
                    },
                    error: I => {
                        I && I.message && I.message.text && 'USER NOT FOUND' === I.message.text ? (0, r.throwError)({
                            title: 'User not found',
                            content: 'This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first.'
                        }) : F(I);
                    },
                    both: () => D(!1)
                }));
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {
                    style: v,
                    children: (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 25,
                                    fontWeight: m.FontWeights.UltraBold
                                },
                                children: 'Managers'
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 15,
                                    marginTop: -6
                                },
                                children: 'Managers can remove members, add other managers, and modify group options'
                            })
                        ]
                    })
                }),
                (0, f.jsxs)(i.default, {
                    style: {
                        ...v,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontWeight: m.FontWeights.UltraBold,
                                fontSize: 25
                            },
                            children: 'Add Manager'
                        }),
                        (0, f.jsx)(j.default, {
                            size: 'large',
                            placeholder: 'Manager email...',
                            style: {
                                width: '100%',
                                marginTop: -1
                            },
                            value: A,
                            onChange: I => {
                                B(I.target.value.toLowerCase()), F(null);
                            },
                            onPressEnter: H
                        }),
                        (0, f.jsx)(h.default, {
                            style: {
                                width: '100%',
                                marginTop: 5
                            },
                            type: 'primary',
                            disabled: !G,
                            loading: C,
                            onClick: H,
                            children: 'Add'
                        }),
                        (0, f.jsx)(u.default, {
                            error: E,
                            style: { marginTop: 5 }
                        })
                    ]
                }),
                (0, f.jsx)(p.default, {
                    children: y.owners.map(I => (0, f.jsx)('div', {
                        children: (0, f.jsx)(o.default, {
                            email: I,
                            remove: () => {
                                return A = I, void (y.owners.length < 2 ? (0, r.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Please add another admin before removing yourself'
                                }) : (0, t.getUser)().email === A ? l.default.confirm({
                                    title: 'Are you sure you want to remove yourself as a manager?',
                                    onOk: () => {
                                        (0, t.request)({
                                            url: '/api/bulk/remove-admin',
                                            data: { bulk: z },
                                            success: () => window.location.reload(),
                                            error: () => (0, r.throwError)({ title: 'Error removing user from license' })
                                        });
                                    }
                                }) : (0, r.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Managers can only remove themselves'
                                }));
                                var J;
                            }
                        })
                    }, 'admin-' + I))
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = m => (0, f.jsx)(h.default, {
        style: {
            fontFamily: j.Fonts.SFPro,
            color: k.default.Black,
            marginBottom: 5
        },
        children: (0, f.jsxs)('div', {
            className: 'flex maxWidth vc',
            style: { justifyContent: 'space-between' },
            children: [
                (0, f.jsx)('div', { children: m.email }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(i.default, {
                        title: 'Remove',
                        children: (0, f.jsx)(g.default, {
                            onClick: m.remove,
                            style: { cursor: 'pointer' }
                        })
                    })
                })
            ]
        })
    });
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
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    const v = w => {
        const [x, y] = g.useState(''), z = !!x, A = () => {
                z && (w.onNewName(x), w.close());
            };
        return (0, f.jsx)(m.default, {
            open: w.open,
            closable: !0,
            onCancel: w.close,
            title: 'Rename Group',
            afterClose: () => y(''),
            footer: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.default, {
                        onClick: w.close,
                        children: 'Cancel'
                    }),
                    (0, f.jsx)(k.default, {
                        disabled: !z,
                        type: 'primary',
                        onClick: A,
                        children: 'Rename'
                    })
                ]
            }),
            children: (0, f.jsx)(l.default, {
                size: 'large',
                style: { width: '100%' },
                autoFocus: !0,
                placeholder: 'New group name...',
                value: x,
                maxLength: 32,
                onChange: B => y(B.target.value),
                onPressEnter: A
            })
        });
    };
    var _w = x => {
        const {
                bulk: y,
                bulkId: z
            } = x, [A, B] = g.useState(!1), [C, D] = g.useState(!1), {
                isActive: E,
                name: F,
                expiration: G,
                statusText: H
            } = y;
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)('div', {
                className: 'maxWidth',
                style: { paddingBottom: 39 },
                children: [
                    (0, f.jsxs)('div', {
                        className: 'maxWidth flex vc',
                        style: { justifyContent: 'space-between' },
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsxs)('div', {
                                        className: 'flex vc',
                                        style: { marginBottom: -11 },
                                        children: [
                                            (0, f.jsx)('div', {
                                                style: {
                                                    fontWeight: h.FontWeights.UltraBold,
                                                    fontSize: 34,
                                                    cursor: 'pointer'
                                                },
                                                onClick: () => D(!0),
                                                children: (0, f.jsx)(o.default, {
                                                    title: 'Rename Group License',
                                                    placement: 'topLeft',
                                                    children: F
                                                })
                                            }),
                                            (0, f.jsx)(n.default, {
                                                style: { marginLeft: 10 },
                                                color: E ? 'green' : 'red',
                                                children: E ? H || 'Active' : G && b(u)().isAfter(b(u).unix(G)) ? 'Inactive' : H || 'Inactive'
                                            })
                                        ]
                                    }),
                                    (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 18,
                                            opacity: 0.8
                                        },
                                        children: E ? G ? `Expires on ${ b(u).unix(G).format('L') }` : 'Paid with credit/debit card' : G && b(u)().isAfter(b(u).unix(G)) ? `Expired on ${ b(u).unix(G).format('L') }` : 'Inactive group license'
                                    })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                children: y.allowedToRenew ? (0, f.jsx)(k.default, {
                                    size: 'large',
                                    type: 'primary',
                                    onClick: () => {
                                        B(!0), (0, p.request)({
                                            url: '/api/quote/createFromRenewal',
                                            method: 'post',
                                            data: { id: z },
                                            success: I => {
                                                (0, t.NavigateTo)(`/quote/${ I }`);
                                            },
                                            error: I => {
                                                (0, p.throwMessageError)({
                                                    e: I,
                                                    default: { title: 'Error generating a renewal quote. Please try again later' }
                                                });
                                            },
                                            both: () => B(!1)
                                        });
                                    },
                                    loading: A,
                                    icon: (0, f.jsx)(i.default, {}),
                                    children: 'Renew'
                                }) : null
                            })
                        ]
                    }),
                    y.isActive ? null : (0, f.jsx)(j.default, {
                        type: 'error',
                        message: 'Group License No Longer Active',
                        description: (0, f.jsxs)(f.Fragment, {
                            children: [
                                'To reactivate this group license,',
                                ' ',
                                (0, f.jsx)(q.default, {
                                    to: 'mailto:groups@gimkit.com',
                                    external: !0,
                                    children: 'contact support.'
                                })
                            ]
                        }),
                        style: { marginTop: 15 },
                        showIcon: !0
                    }),
                    (0, f.jsx)(v, {
                        open: C,
                        close: () => D(!1),
                        onNewName: I => {
                            (0, p.request)({
                                url: '/api/bulk/rename',
                                data: {
                                    id: z,
                                    name: I
                                }
                            }), (0, r.refetchSpecificBulk)(z), (0, s.invalidateAllBulks)();
                        }
                    })
                ]
            })
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
    j.displayName = 'StarOutlined';
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
                    attrs: { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z' }
                }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (p, q) => {
            var {
                    prefixCls: r,
                    className: s,
                    rootClassName: t,
                    style: u,
                    children: v,
                    icon: w,
                    color: x,
                    onClose: y,
                    closeIcon: z,
                    closable: A = !1
                } = p, B = n(p, [
                    'prefixCls',
                    'className',
                    'rootClassName',
                    'style',
                    'children',
                    'icon',
                    'color',
                    'onClose',
                    'closeIcon',
                    'closable'
                ]);
            const {
                    getPrefixCls: C,
                    direction: D
                } = h.useContext(i.ConfigContext), [E, F] = h.useState(!0);
            h.useEffect(() => {
                'visible' in B && F(B.visible);
            }, [B.visible]);
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x), H = Object.assign({ backgroundColor: x && !G ? x : void 0 }, u), I = C('tag', r), [J, K] = (0, m.default)(I), L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K), M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                }, N = 'function' == typeof B.onClick || v && 'a' === v.type, O = w || null, P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v, Q = h.createElement('span', Object.assign({}, B, {
                    ref: q,
                    className: L,
                    style: H
                }), P, A ? z ? h.createElement('span', {
                    className: `${ I }-close-icon`,
                    onClick: M
                }, z) : h.createElement(f.default, {
                    className: `${ I }-close-icon`,
                    onClick: M
                }) : null);
            return J(N ? h.createElement(k.default, null, Q) : Q);
        }, p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    var _k = l => {
        var {
                prefixCls: m,
                className: n,
                checked: o,
                onChange: p,
                onClick: q
            } = l, r = j(l, [
                'prefixCls',
                'className',
                'checked',
                'onChange',
                'onClick'
            ]);
        const {getPrefixCls: s} = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
                [`${ t }-checkable`]: !0,
                [`${ t }-checkable-checked`]: o
            }, n, v);
        return u(g.createElement('span', Object.assign({}, r, {
            className: w,
            onClick: x => {
                null == p || p(!o), null == q || q(x);
            }
        })));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        }, l = m => (0, i.genPresetColor)(m, (n, o) => {
            let {
                textColor: p,
                lightBorderColor: q,
                lightColor: r,
                darkColor: s
            } = o;
            return {
                [`${ m.componentCls }-${ n }`]: {
                    color: p,
                    background: r,
                    borderColor: q,
                    '&-inverse': {
                        color: m.colorTextLightSolid,
                        background: s,
                        borderColor: s
                    }
                }
            };
        }), m = n => {
            const {
                    paddingXXS: o,
                    lineWidth: p,
                    tagPaddingHorizontal: q,
                    componentCls: r
                } = n, s = q - p, t = o - p;
            return {
                [r]: Object.assign(Object.assign({}, (0, j.resetComponent)(n)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: n.marginXS,
                    paddingInline: s,
                    fontSize: n.tagFontSize,
                    lineHeight: `${ n.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: n.tagDefaultBg,
                    border: `${ n.lineWidth }px ${ n.lineType } ${ n.colorBorder }`,
                    borderRadius: n.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ n.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ r }-rtl`]: { direction: 'rtl' },
                    '&, a, a:hover': { color: n.tagDefaultColor },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': { color: n.colorTextHeading }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: { color: n.colorTextLightSolid }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': { color: n.colorTextLightSolid },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': { backgroundColor: n.colorPrimaryHover }
                        },
                        '&:active': { backgroundColor: n.colorPrimaryActive }
                    },
                    '&-hidden': { display: 'none' },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: { marginInlineStart: s }
                })
            };
        };
    var _n = (0, f.default)('Tag', o => {
        const {
                fontSize: p,
                lineHeight: q,
                lineWidth: r,
                fontSizeIcon: s
            } = o, t = Math.round(p * q), u = o.fontSizeSM, v = t - 2 * r, w = o.colorFillAlter, x = o.colorText, y = (0, g.merge)(o, {
                tagFontSize: u,
                tagLineHeight: v,
                tagDefaultBg: w,
                tagDefaultColor: x,
                tagIconSize: s - 2 * r,
                tagPaddingHorizontal: 8
            });
        return [
            m(y),
            l(y),
            k(y, 'success', 'Success'),
            k(y, 'processing', 'Info'),
            k(y, 'error', 'Error'),
            k(y, 'warning', 'Warning')
        ];
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'invalidateAllBulks', function () {
        return _j;
    }), a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = ['all-bulks'], _j = () => {
            h.default.invalidateQueries(i);
        };
    var _k = () => (0, f.useQuery)(i, () => (0, g.requestAsPromise)({ url: '/api/bulk/fetch-all' }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'NavigateTo', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _D;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....');
    let y, z, A = B => B;
    const B = {
            ...o.CardStyle,
            width: 'calc(50% - 4px)',
            flex: 1
        }, C = {
            textAlign: 'center',
            fontSize: 32
        };
    var _D = E => {
        const [F, G] = g.useState(!1), H = (0, w.default)().data, {
                bulkId: I,
                bulk: J
            } = E, K = `${ (0, t.getDomain)() }/group/join/${ I }`, L = (H || []).filter(M => M.id !== I), M = !J.joinByLinkEnabled;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)('div', {
                    style: o.CardStyle,
                    children: [
                        (0, f.jsxs)('div', {
                            style: {
                                opacity: M ? 0.6 : 1,
                                pointerEvents: M ? 'none' : 'auto'
                            },
                            children: [
                                (0, f.jsx)(_E, { children: 'Invite' }),
                                (0, f.jsx)(_F, { children: 'Get educators under your group license! Share the invite link below to have them automatically join this group.' }),
                                (0, f.jsxs)('div', {
                                    className: 'maxWidth flex vc',
                                    style: { marginTop: 7 },
                                    children: [
                                        (0, f.jsx)(m.default, {
                                            value: K,
                                            readOnly: !0,
                                            size: 'large'
                                        }),
                                        (0, f.jsx)(j.default, {
                                            onClick: () => {
                                                b(r)(K), n.default.success('Link copied to clipboard!');
                                            },
                                            style: { marginLeft: 10 },
                                            type: 'primary',
                                            size: 'large',
                                            children: 'Copy Link'
                                        })
                                    ]
                                }),
                                (0, f.jsx)(l.default, {}),
                                (0, f.jsxs)('div', {
                                    className: 'flex',
                                    children: [
                                        (0, f.jsxs)(k.default, {
                                            style: B,
                                            hoverable: !0,
                                            bodyStyle: C,
                                            className: 'flex hc vc flex-column',
                                            children: [
                                                (0, f.jsx)(h.default, {}),
                                                (0, f.jsx)(l.default, {}),
                                                (0, f.jsxs)('div', {
                                                    style: { fontSize: 16 },
                                                    children: [
                                                        u.COMPANY_NAME,
                                                        ' Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time.'
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, f.jsx)('div', { style: { width: 8 } }),
                                        (0, f.jsxs)(k.default, {
                                            style: B,
                                            hoverable: !0,
                                            bodyStyle: C,
                                            className: 'flex hc vc flex-column',
                                            children: [
                                                (0, f.jsx)(i.default, {}),
                                                (0, f.jsx)(l.default, {}),
                                                (0, f.jsxs)('div', {
                                                    style: { fontSize: 16 },
                                                    children: [
                                                        'You can view and remove members by clicking the ',
                                                        (0, f.jsx)('b', { children: 'Members' }),
                                                        ' ',
                                                        'tab above.'
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, f.jsx)(l.default, {})
                            ]
                        }),
                        (0, f.jsxs)('div', {
                            className: 'flex flex-column',
                            children: [
                                (0, f.jsxs)(s.default, {
                                    onClick: () => {
                                        (0, t.request)({
                                            url: '/api/bulk/toggle-join-by-link',
                                            method: 'post',
                                            data: { bulk: I },
                                            success: () => {
                                                n.default.success(`Group is ${ J.joinByLinkEnabled ? 'closed' : 'open' } to new members!`), (0, v.refetchSpecificBulk)(I);
                                            },
                                            error: N => (0, t.throwMessageError)({
                                                e: N,
                                                default: { title: 'Error switching.' }
                                            })
                                        });
                                    },
                                    children: [
                                        M ? 'Open' : 'Close',
                                        ' group to new members'
                                    ]
                                }),
                                L.length && J.isActive ? (0, f.jsx)(s.default, {
                                    onClick: () => G(!0),
                                    children: 'Import members from previous group license'
                                }) : null,
                                (0, f.jsx)(s.default, {
                                    to: 'mailto:groups@gimkit.com',
                                    external: !0,
                                    children: 'Contact support'
                                })
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(x.default, {
                    visible: F,
                    currentBulk: I,
                    otherBulks: L,
                    close: () => G(!1)
                })
            ]
        });
    };
    const _E = p.default.div(y || (y = A`
  font-weight: ${ 0 };
  font-size: 30px;
`), q.FontWeights.UltraBold), _F = p.default.div(z || (z = A`
  font-size: 18px;
  margin-top: -7px;
`));
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
    j.displayName = 'DollarOutlined';
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
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z' }
                }]
        },
        name: 'dollar',
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
    j.displayName = 'UsergroupAddOutlined';
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
                    attrs: { d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z' }
                }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CardStyle', function () {
        return _p;
    }), a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    const _p = {
            fontFamily: i.Fonts.SFPro,
            color: j.default.Black
        }, q = r => (0, f.jsx)(g.default, {
            style: {
                ..._p,
                minWidth: 215,
                marginLeft: 20
            },
            children: (0, f.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, f.jsx)(_r, {
                        count: r.maxSeats,
                        description: 'total seats'
                    }),
                    (0, f.jsx)(h.default, {
                        type: 'vertical',
                        style: {
                            marginLeft: 20,
                            marginRight: 20
                        }
                    }),
                    (0, f.jsx)(_r, {
                        count: r.seatsRemaining,
                        description: `${ (0, n.plural)('seat', r.seatsRemaining) } remaining`
                    })
                ]
            })
        }), _r = s => (0, f.jsxs)('div', {
            className: 'flex flex-column vc',
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 23,
                        fontWeight: i.FontWeights.UltraBold
                    },
                    children: s.count
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: -7,
                        fontSize: 11,
                        opacity: 0.8
                    },
                    children: s.description
                })
            ]
        });
    var _s = t => {
        const {
                bulkId: u,
                bulk: v
            } = t, w = Math.abs(v.maxSeats - v.seats.length);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(g.default, {
                    style: _p,
                    children: (0, f.jsxs)('div', {
                        className: 'flex vc',
                        style: { justifyContent: 'space-between' },
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 25,
                                            fontWeight: i.FontWeights.UltraBold
                                        },
                                        children: 'Members'
                                    }),
                                    (0, f.jsxs)('div', {
                                        style: {
                                            fontSize: 15,
                                            marginTop: -6
                                        },
                                        children: [
                                            'Members receive ',
                                            k.COMPANY_NAME,
                                            ' Pro covered by this group license'
                                        ]
                                    })
                                ]
                            }),
                            !v.hiddenSeatLimit && (0, f.jsx)(q, {
                                maxSeats: v.maxSeats,
                                seatsRemaining: w
                            })
                        ]
                    })
                }),
                v.seats.length ? (0, f.jsx)(m.default, {
                    style: { marginTop: 10 },
                    children: v.seats.map(x => (0, f.jsx)('div', {
                        children: (0, f.jsx)(l.default, {
                            email: x,
                            remove: () => {
                                return v = x, void (0, n.request)({
                                    url: '/api/bulk/remove-member',
                                    data: {
                                        bulk: u,
                                        removedMember: v
                                    },
                                    success: () => (0, o.refetchSpecificBulk)(u),
                                    error: y => (0, n.throwMessageError)({
                                        e: y,
                                        default: { title: 'Error removing user from license' }
                                    })
                                });
                                var y;
                            }
                        })
                    }, 'member-' + x))
                }) : (0, f.jsx)(g.default, {
                    className: 'maxWidth',
                    style: { marginTop: 10 },
                    children: 'Nobody is a member of this group license...yet!'
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function (h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function (q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function (q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('.....', function (d, e) {
    d.exports = function () {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function () {
            };
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
            g.blur();
            break;
        default:
            g = null;
        }
        return f.removeAllRanges(), function () {
            'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function (j) {
                f.addRange(j);
            }), g && g.focus();
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r, s, t = u => u;
    var _u = v => {
        const [w, x] = o.useState(!1);
        return (0, f.jsx)(i.default, {
            open: v.visible,
            onCancel: v.close,
            width: 650,
            footer: null,
            closable: !0,
            style: { top: 25 },
            children: (0, f.jsxs)(_v, {
                children: [
                    (0, f.jsx)(_w, { children: 'Import members from which group license?' }),
                    (0, f.jsx)(h.default, { style: { margin: '30px 0px' } }),
                    v.otherBulks.map(y => (0, f.jsxs)(g.default, {
                        style: {
                            marginBottom: 10,
                            color: j.default.Black
                        },
                        className: 'maxWidth',
                        onClick: () => {
                            return b = y.id, g = y.name, void (w || (x(!0), (0, m.request)({
                                url: '/api/bulk/members/import',
                                data: {
                                    bulk: v.currentBulk,
                                    importedBulk: b
                                },
                                success: () => {
                                    (0, q.refetchSpecificBulk)(v.currentBulk), i.default.success({
                                        title: 'Members imported!',
                                        content: (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                'All members from ',
                                                (0, f.jsx)('b', { children: g }),
                                                ' have been imported into this group license.'
                                            ]
                                        })
                                    });
                                },
                                error: z => {
                                    (0, l.throwError)({
                                        title: 'Error importing members',
                                        content: 'Please try again.'
                                    });
                                },
                                both: () => {
                                    x(!1), v.close();
                                }
                            })));
                            var z, A;
                        },
                        hoverable: !0,
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 18,
                                    fontWeight: k.FontWeights.Bold
                                },
                                children: y.name
                            }),
                            (0, f.jsxs)('div', {
                                children: [
                                    'Started',
                                    ' ',
                                    b(n)((0, m.dateFromObjectId)(y.id)).format('MMMM Do, YYYY')
                                ]
                            })
                        ]
                    }, `import-sub-${ y.id }`))
                ]
            })
        });
    };
    const _v = p.default.div(r || (r = t`
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro), _w = p.default.div(s || (s = t`
  font-size: 28px;
  font-weight: ${ 0 };
  line-height: 1;
  margin-top: 20px;
`), k.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('hgN00')),
        import('./' + c('.....').resolve('h8E7U')),
        import('./' + c('.....').resolve('bRCFZ'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m;
    var _n = () => {
        const {
            isLoading: o,
            data: p
        } = (0, g.default)();
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.Title, { title: 'Group Licenses' }),
                (() => {
                    if (o)
                        return (0, f.jsx)(_o, { children: (0, f.jsx)(i.default, { size: 'large' }) });
                    const q = p && Array.isArray(p) ? p : [];
                    return q.length ? (0, f.jsx)(j.default, { bulks: q }) : (0, f.jsx)(l.default, {});
                })()
            ]
        });
    };
    const _o = h.default.div.attrs({ className: 'maxAll flex-center' })(m || (m = (p => p)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p, q = r => r;
    var _r = () => (0, f.jsx)(_s, {
        children: (0, f.jsxs)(_t, {
            children: [
                (0, f.jsxs)(m.Title, {
                    children: [
                        i.COMPANY_NAME,
                        ' Groups'
                    ]
                }),
                (0, f.jsxs)(_u, {
                    children: [
                        'Welcome to ',
                        i.COMPANY_NAME,
                        ' Groups! You don\u2019t manage any group licenses yet. Click the button below to get your group started!'
                    ]
                }),
                (0, f.jsx)(l.default, {
                    to: k.GROUP_PRICING,
                    className: 'maxWidth',
                    children: (0, f.jsx)(g.default, {
                        block: !0,
                        size: 'large',
                        type: 'primary',
                        style: {
                            height: 50,
                            marginTop: 20
                        },
                        children: 'Start New Group'
                    })
                })
            ]
        })
    });
    const _s = h.default.div.attrs({ className: 'maxAll flex-center' })(n || (n = q``)), _t = h.default.div.attrs({ className: 'flex-center flex-column medium-shadow' })(o || (o = q`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${ 0 };
  padding: 45px;
  border-radius: 6px;
`), j.default.White), _u = h.default.div(p || (p = q`
  font-size: 16px;
  margin-top: 3px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l) {
        return function (m) {
            const {
                    prefixCls: n,
                    style: o
                } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, { value: m.open }), {getPrefixCls: w} = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(z => {
                            const A = z[0].target;
                            r(A.offsetHeight + 8), t(A.offsetWidth);
                        }), z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`, C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), { margin: 0 }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'initMoveMotion', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....');
    const h = new (0, f.Keyframes)('antMoveDownIn', {
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
        }), i = new (0, f.Keyframes)('antMoveDownOut', {
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
        }), j = new (0, f.Keyframes)('antMoveLeftIn', {
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
        }), k = new (0, f.Keyframes)('antMoveLeftOut', {
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
        }), l = new (0, f.Keyframes)('antMoveRightIn', {
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
        }), m = new (0, f.Keyframes)('antMoveRightOut', {
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
        }), n = {
            'move-up': {
                inKeyframes: new (0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new (0, f.Keyframes)('antMoveUpOut', {
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
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        }, _o = (p, q) => {
            const {antCls: r} = p, s = `${ r }-${ q }`, {
                    inKeyframes: t,
                    outKeyframes: u
                } = n[q];
            return [
                (0, g.initMotion)(s, t, u, p.motionDurationMid),
                {
                    [`\n        ${ s }-enter,\n        ${ s }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: p.motionEaseOutCirc
                    },
                    [`${ s }-leave`]: { animationTimingFunction: p.motionEaseInOutCirc }
                }
            ];
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SpaceContext', function () {
        return _o;
    }, function (f) {
        return _o = f;
    }), a(d.exports, 'default', function () {
        return _r;
    }, function (f) {
        return _r = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }), p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = r => {
        const {
                getPrefixCls: s,
                space: t,
                direction: u
            } = h.useContext(i.ConfigContext), {
                size: v = (null == t ? void 0 : t.size) || 'small',
                align: w,
                className: x,
                rootClassName: y,
                children: z,
                direction: A = 'horizontal',
                prefixCls: B,
                split: C,
                style: D,
                wrap: E = !1
            } = r, F = n(r, [
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
            ]), G = (0, j.default)(), [H, I] = h.useMemo(() => (Array.isArray(v) ? v : [
                v,
                v
            ]).map(J => function (K) {
                return 'string' == typeof K ? p[K] : K || 0;
            }(J)), [v]), J = (0, g.default)(z, { keepEmpty: !0 }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, m.default)(L), O = b(f)(L, N, `${ L }-${ A }`, {
                [`${ L }-rtl`]: 'rtl' === u,
                [`${ L }-align-${ K }`]: K
            }, x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((T, U) => {
                null != T && (R = U);
                const V = T && T.key || `${ P }-${ U }`;
                return h.createElement(l.default, {
                    className: P,
                    key: V,
                    direction: A,
                    index: U,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, T);
            }), T = h.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(h.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), h.createElement(_o.Provider, { value: T }, S)));
    };
    q.Compact = k.default;
    var _r = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....'), _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = { marginBottom: q / (o ? 2 : 1) }) : u = Object.assign(Object.assign({}, l < s && { [m]: q / (o ? 2 : 1) }), p && { paddingBottom: r })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useMediaMatch', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function () {
                return window.matchMedia(h);
            }, [h]), j = (0, f.useState)(function () {
                return i.matches;
            }), k = j[0], l = j[1];
        return (0, f.useEffect)(function () {
            _g(i.matches);
            var m = function (n) {
                return _g(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function () {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function () {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__exportStar || function (h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), g(c('.....'), d.exports), g(c('.....'), d.exports), g(c('.....'), d.exports);
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('.....');
    d.exports.useBreakpoint = function (g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function (g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function (i) {
            return h < i;
        });
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__setModuleDefault || (Object.create ? function (h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function (h, i) {
            h.default = i;
        }), h = d.exports && d.exports.__importStar || function (i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useWindowSize = void 0;
    var i = h(c('.....'));
    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function () {
        var k = i.useState(j()), l = k[0], m = k[1];
        return i.useLayoutEffect(function () {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n), function () {
                return window.removeEventListener('resize', n);
            };
        }, []), l;
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__assign || function () {
            return f = Object.assign || function (g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        }, g = d.exports && d.exports.__createBinding || (Object.create ? function (h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function () {
                    return i[j];
                }
            });
        } : function (h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }), h = d.exports && d.exports.__setModuleDefault || (Object.create ? function (i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function (i, j) {
            i.default = j;
        }), i = d.exports && d.exports.__importStar || function (j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useComponentSize = void 0;
    var j = i(c('.....'));
    d.exports.useComponentSize = function () {
        var k = j.useState({
                height: 0,
                width: 0
            }), l = k[0], m = k[1], n = j.useRef(), o = j.useCallback(function () {
                if (n.current) {
                    var p = n.current.offsetHeight, q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function () {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current), function () {
                    return p.disconnect();
                };
            }
        }, [
            n,
            o
        ]), f({ ref: n }, l);
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function () {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function () {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        name: c('.....').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
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
    j.displayName = 'LogoutOutlined';
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
                    attrs: { d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z' }
                }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function () {
        return _f;
    });
    const _f = () => !1;
}), c.register('.....', function (d, e) {
    a(d.exports, 'TrackPostHogEvent', function () {
        return _f;
    });
    c('.....');
    const _f = g => {
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = (j, k) => {
        const [l, m] = f.useState(() => {
            var n, o;
            const p = j && 'current' in j ? j.current : j;
            return p ? [
                p.offsetWidth,
                p.offsetHeight
            ] : [
                null !== (n = null == k ? void 0 : k.initialWidth) && void 0 !== n ? n : 0,
                null !== (o = null == k ? void 0 : k.initialHeight) && void 0 !== o ? o : 0
            ];
        });
        return (0, h.default)(() => {
            const n = j && 'current' in j ? j.current : j;
            n && m([
                n.offsetWidth,
                n.offsetHeight
            ]);
        }, [j]), (0, g.default)(j, n => {
            const o = n.target;
            m([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }), l;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    const k = () => j || (j = function () {
        const l = new Map(), m = new (0, f.default)((0, i.default)((n, o) => {
                var p;
                if (1 === n.length)
                    null === (p = l.get(n[0].target)) || void 0 === p || p(n[0], o);
                else
                    for (let q = 0; q < n.length; q++) {
                        var r;
                        null === (r = l.get(n[q].target)) || void 0 === r || r(n[q], o);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function (m, n) {
        const o = k(), p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (s, t) => {
                    q || p.current(s, t);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = b(c('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.useRef(h);
        return f.useEffect(() => {
            i.current = h;
        }), i;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = function (g) {
        var h = [], i = null, j = function () {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function () {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function () {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    c('.....');
    var _g = h => (0, f.jsx)('i', {
        className: `${ h.name }${ h.className ? ` ${ h.className }` : '' }`,
        style: h.style
    });
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.lazyWithPreload = void 0;
    var f = c('.....');
    function g(h) {
        var i, j, k = (0, f.lazy)(h), l = (0, f.forwardRef)(function (m, n) {
                var o = (0, f.useRef)(null != i ? i : g);
                return (0, f.createElement)(o.current, Object.assign(n ? { ref: n } : {}, m));
            });
        return l.preload = function () {
            return j || (j = h().then(function (m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
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
    j.displayName = 'QuestionCircleOutlined';
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
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z' }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
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
});