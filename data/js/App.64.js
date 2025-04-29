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
c.register('iah6l', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _r;
    });
    var g = c('gRbUn');
    c('O0Kav');
    var h = c('eDhiy'),
        i = c('u4s09'),
        j = c('8KqQ+'),
        k = c('Eh2Wh'),
        l = c('V69Df'),
        m = c('+uvEi'),
        n = c('xK/pQ'),
        o = c('zcfNM'),
        p = c('tBC08');
    let q;
    var _r = () => {
        const {
            id: s
        } = (0, o.useParams)(), t = s;
        return (0, g.jsx)(h.QueryClientProvider, {
            client: l.default,
            children: (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(p.default, {
                        includeSpacer: !0
                    }),
                    t ? (0, g.jsx)(m.default, {
                        bulkId: t
                    }) : (0, g.jsx)(n.default, {})
                ]
            })
        });
    };
    const _s = i.default.div.attrs({
        className: 'flex-column'
    })(q || (q = (a => a)`
  flex: 1;
  color: ${ 0 };
  background: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, j.default.Snow, k.Fonts.SFPro);
}), c.register('V69Df', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = new(0, (c('8HicB')).QueryClient)();
}), c.register('+uvEi', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('yruHD'),
        h = c('Ll6/N'),
        i = c('O0Kav'),
        j = c('nKuOQ'),
        k = c('W6wAQ'),
        l = c('ikTj4'),
        m = c('PC4WN'),
        n = c('gJ9M1'),
        o = c('MLf6c'),
        p = c('U2vkT'),
        q = c('quE27'),
        r = c('KxkP827');
    const s = i.lazy(() => c('hFITr'));
    let t;
    var u;
    (u = t || (t = {})).invite = 'invite', u.members = 'members', u.managers = 'managers', u.analytics = 'analytics', u.invoice = 'invoice', u.receipt = 'receipt';
    const {
        TabPane: v
    } = h.default;
    var _w = a => {
        const {
            bulkId: x
        } = a, [y, z] = i.useState(t.invite), {
            data: A,
            error: B,
            isLoading: C
        } = (0, k.default)(x);
        if (C)
            return (0, f.jsxs)('div', {
                style: {
                    flex: 1
                },
                className: 'flex-center',
                children: [
                    (0, f.jsx)(q.Title, {
                        title: 'Group License'
                    }),
                    (0, f.jsx)(g.default, {
                        size: 'large'
                    })
                ]
            });
        if (B)
            return (0, r.NavigateTo)(j.GROUP_DASHBOARD), null;
        return (0, f.jsxs)(l.Container, {
            children: [
                (0, f.jsx)(q.Title, {
                    title: `${ A.name } | Group License`
                }),
                (0, f.jsxs)(l.Content, {
                    children: [
                        (0, f.jsx)(n.default, {
                            bulk: A,
                            bulkId: a.bulkId
                        }),
                        (0, f.jsx)(l.PrimaryContent, {
                            children: (0, f.jsxs)(h.default, {
                                type: 'card',
                                activeKey: y,
                                onChange: a => {
                                    const D = a;
                                    D !== t.invoice ? D !== t.receipt ? z(D) : A.receiptUrl && window.open(A.receiptUrl) : A.invoiceUrl && window.open(A.invoiceUrl);
                                },
                                children: [
                                    (0, f.jsx)(v, {
                                        tab: 'Invite',
                                        children: (0, f.jsx)(o.default, {
                                            bulk: A,
                                            bulkId: x
                                        })
                                    }, t.invite),
                                    (0, f.jsx)(v, {
                                        tab: 'Members',
                                        children: (0, f.jsx)(p.default, {
                                            bulk: A,
                                            bulkId: x
                                        })
                                    }, t.members),
                                    (0, f.jsx)(v, {
                                        tab: 'Managers',
                                        children: (0, f.jsx)(m.default, {
                                            bulk: A,
                                            bulkId: x
                                        })
                                    }, t.managers),
                                    (0, f.jsx)(v, {
                                        tab: 'Usage Report',
                                        children: (0, f.jsx)(i.Suspense, {
                                            fallback: null,
                                            children: (0, f.jsx)(s, {
                                                bulkId: x
                                            })
                                        })
                                    }, t.analytics),
                                    A.receiptUrl ? (0, f.jsx)(v, {
                                        tab: 'View Receipt'
                                    }, t.receipt) : null,
                                    A.invoiceUrl ? (0, f.jsx)(v, {
                                        tab: 'View Invoice'
                                    }, t.invoice) : null
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
}), c.register('W6wAQ', function(d, e) {
    a(d.exports, 'refetchSpecificBulk', function() {
        return _j;
    }), a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('GmO9j'),
        g = c('quE27'),
        h = c('V69Df');
    const i = ['specific-bulk'],
        _j = a => h.default.refetchQueries([
            i,
            a
        ]);
    var _k = a => (0, f.useQuery)([
        i,
        a
    ], () => (0, g.requestAsPromise)({
        url: '/api/bulk/fetch/' + a
    }));
}), c.register('ikTj4', function(d, e) {
    a(d.exports, 'Container', function() {
        return _y;
    }), a(d.exports, 'Content', function() {
        return _z;
    }), a(d.exports, 'Title', function() {
        return _A;
    }), a(d.exports, 'PrimaryContent', function() {
        return _C;
    }), a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn'),
        g = c('ej/50'),
        h = c('P1KtI'),
        i = c('Tzf4u');
    c('O0Kav');
    var j = c('u4s09'),
        k = c('jw1ib'),
        l = c('Eh2Wh'),
        m = c('nKuOQ'),
        n = c('FB7HT26'),
        o = c('F0ESS9'),
        p = c('quE27'),
        q = c('05WN2');
    let r, s, t, u, v, w = a => a;
    var _x = a => (0, f.jsx)(_y, {
        children: (0, f.jsxs)(_z, {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
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
                    children: a.bulks.map(a => (0, f.jsx)(q.default, {
                        id: a.id,
                        name: a.name,
                        isActive: a.isActive,
                        startDate: b(i)((0, p.dateFromId)(a.id)).format('MMMM Do, YYYY')
                    }, a.id + '-item'))
                })
            ]
        })
    });
    const _y = j.default.div.attrs({
            className: 'flex-column vc'
        })(r || (r = w`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`)),
        _z = j.default.div.attrs({
            className: 'flex-column'
        })(s || (s = w`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`)),
        _A = j.default.div(t || (t = w`
  font-size: 54px;
  font-weight: ${ 0 };
`), l.FontWeights.UltraBold),
        _B = j.default.div(u || (u = w`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`)),
        _C = (0, j.default)(o.default).attrs({
            className: 'maxWidth'
        })(v || (v = w`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`));
}), c.register('FB7HT26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('+cTfn');
    c('O0Kav');
    var _h = a => a.external || !a.to ? (0, f.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: d => {
            a.onClick && 'Enter' === d.key && (d.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, f.jsx)(g.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('F0ESS9', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+');
    let i;
    var _j = a => (0, f.jsx)(_k, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const _k = g.default.div(i || (i = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('05WN2', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+'),
        i = c('Eh2Wh'),
        j = c('FB7HT26');
    let k, l, m, n, o = a => a;
    var _p = a => {
        const {
            id: q,
            name: r,
            startDate: s,
            isActive: t
        } = a;
        return (0, f.jsxs)(_q, {
            to: `/groups/${ q }`,
            children: [
                (0, f.jsx)(_r, {
                    style: {
                        background: t ? '#388e3c' : '#f44336'
                    },
                    children: t ? 'Active' : 'Inactive'
                }),
                (0, f.jsx)(_s, {
                    children: r
                }),
                s ? (0, f.jsxs)(_t, {
                    children: [
                        'Started on ',
                        s
                    ]
                }) : null
            ]
        });
    };
    const _q = (0, g.default)(j.default).attrs({
            className: 'flex-column'
        })(k || (k = o`
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
`), h.default.BorderGray, h.default.Black, h.default.Black),
        _r = g.default.div(l || (l = o`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${ 0 };
  margin-bottom: 9px;
  font-size: 12px;
`), h.default.White),
        _s = g.default.div(m || (m = o`
  font-weight: ${ 0 };
  font-size: 16px;
`), i.FontWeights.Bold),
        _t = g.default.div(n || (n = o`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), c.register('PC4WN', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('QZ0Z+'),
        j = c('aevdF'),
        k = c('Bjl070'),
        l = c('AE7vR'),
        m = c('Eh2Wh'),
        n = c('8KqQ+'),
        o = c('uPd9w'),
        p = c('hQxzs'),
        q = c('W6wAQ'),
        r = c('lptuh'),
        s = c('BTX4Q'),
        t = c('quE27'),
        u = c('AvOwZ2');
    const v = {
        fontFamily: m.Fonts.SFPro,
        color: n.default.Black
    };
    var _w = a => {
        const {
            bulk: x,
            bulkId: y
        } = a, [z, A] = g.useState(''), [B, C] = g.useState(!1), [D, E] = g.useState(null), F = z && (0, s.validateEmail)(z), G = () => {
            F && (C(!0), (0, t.request)({
                url: '/api/bulk/add-admin',
                data: {
                    bulk: y,
                    newAdmin: z
                },
                success: () => {
                    (0, q.refetchSpecificBulk)(y), k.default.success('Manager added!'), A('');
                },
                error: a => {
                    a && a.message && a.message.text && 'USER NOT FOUND' === a.message.text ? (0, r.throwError)({
                        title: 'User not found',
                        content: 'This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first.'
                    }) : E(a);
                },
                both: () => C(!1)
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
                            value: z,
                            onChange: a => {
                                A(a.target.value.toLowerCase()), E(null);
                            },
                            onPressEnter: G
                        }),
                        (0, f.jsx)(h.default, {
                            style: {
                                width: '100%',
                                marginTop: 5
                            },
                            type: 'primary',
                            disabled: !F,
                            loading: B,
                            onClick: G,
                            children: 'Add'
                        }),
                        (0, f.jsx)(u.default, {
                            error: D,
                            style: {
                                marginTop: 5
                            }
                        })
                    ]
                }),
                (0, f.jsx)(p.default, {
                    children: x.owners.map(a => (0, f.jsx)('div', {
                        children: (0, f.jsx)(o.default, {
                            email: a,
                            remove: () => {
                                return z = a, void(x.owners.length < 2 ? (0, r.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Please add another admin before removing yourself'
                                }) : (0, t.getUser)().email === z ? l.default.confirm({
                                    title: 'Are you sure you want to remove yourself as a manager?',
                                    onOk: () => {
                                        (0, t.request)({
                                            url: '/api/bulk/remove-admin',
                                            data: {
                                                bulk: y
                                            },
                                            success: () => window.location.reload(),
                                            error: () => (0, r.throwError)({
                                                title: 'Error removing user from license'
                                            })
                                        });
                                    }
                                }) : (0, r.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Managers can only remove themselves'
                                }));
                                var H;
                            }
                        })
                    }, 'admin-' + a))
                })
            ]
        });
    };
}), c.register('uPd9w', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('Y6i538'),
        h = c('QZ0Z+'),
        i = c('Dn89R'),
        j = c('Eh2Wh'),
        k = c('8KqQ+');
    var _l = a => (0, f.jsx)(h.default, {
        style: {
            fontFamily: j.Fonts.SFPro,
            color: k.default.Black,
            marginBottom: 5
        },
        children: (0, f.jsxs)('div', {
            className: 'flex maxWidth vc',
            style: {
                justifyContent: 'space-between'
            },
            children: [
                (0, f.jsx)('div', {
                    children: a.email
                }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(i.default, {
                        title: 'Remove',
                        children: (0, f.jsx)(g.default, {
                            onClick: a.remove,
                            style: {
                                cursor: 'pointer'
                            }
                        })
                    })
                })
            ]
        })
    });
}), c.register('Y6i538', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('goKxN8'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('goKxN8', function(d, e) {
    a(d.exports, 'default', function() {
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
                attrs: {
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('AvOwZ2', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('qMSe6');
    var _h = a => a.error ? (0, f.jsx)(g.default, {
        message: 'Error',
        style: a.style,
        type: 'error',
        description: a.error && a.error.message && a.error.message.text ? a.error.message.text : 'string' == typeof a.error ? a.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), c.register('gJ9M1', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Eh2Wh'),
        i = c('/poDA27'),
        j = c('qMSe6'),
        k = c('P1KtI'),
        l = c('aevdF'),
        m = c('AE7vR'),
        n = c('LBLT38'),
        o = c('Dn89R'),
        p = c('quE27'),
        q = c('FB7HT26'),
        r = c('W6wAQ'),
        s = c('vMDSX'),
        t = c('KxkP827'),
        u = c('Tzf4u');
    const v = a => {
        const [w, x] = g.useState(''), y = !!w, z = () => {
            y && (a.onNewName(w), a.close());
        };
        return (0, f.jsx)(m.default, {
            open: a.open,
            closable: !0,
            onCancel: a.close,
            title: 'Rename Group',
            afterClose: () => x(''),
            footer: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }),
                    (0, f.jsx)(k.default, {
                        disabled: !y,
                        type: 'primary',
                        onClick: z,
                        children: 'Rename'
                    })
                ]
            }),
            children: (0, f.jsx)(l.default, {
                size: 'large',
                style: {
                    width: '100%'
                },
                autoFocus: !0,
                placeholder: 'New group name...',
                value: w,
                maxLength: 32,
                onChange: a => x(a.target.value),
                onPressEnter: z
            })
        });
    };
    var _w = a => {
        const {
            bulk: x,
            bulkId: y
        } = a, [z, A] = g.useState(!1), [B, C] = g.useState(!1), {
            isActive: D,
            name: E,
            expiration: F,
            statusText: G
        } = x;
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)('div', {
                className: 'maxWidth',
                style: {
                    paddingBottom: 39
                },
                children: [
                    (0, f.jsxs)('div', {
                        className: 'maxWidth flex vc',
                        style: {
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginBottom: -11
                                        },
                                        children: [
                                            (0, f.jsx)('div', {
                                                style: {
                                                    fontWeight: h.FontWeights.UltraBold,
                                                    fontSize: 34,
                                                    cursor: 'pointer'
                                                },
                                                onClick: () => C(!0),
                                                children: (0, f.jsx)(o.default, {
                                                    title: 'Rename Group License',
                                                    placement: 'topLeft',
                                                    children: E
                                                })
                                            }),
                                            (0, f.jsx)(n.default, {
                                                style: {
                                                    marginLeft: 10
                                                },
                                                color: D ? 'green' : 'red',
                                                children: D ? G || 'Active' : F && b(u)().isAfter(b(u).unix(F)) ? 'Inactive' : G || 'Inactive'
                                            })
                                        ]
                                    }),
                                    (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 18,
                                            opacity: 0.8
                                        },
                                        children: D ? F ? `Expires on ${ b(u).unix(F).format('L') }` : 'Paid with credit/debit card' : F && b(u)().isAfter(b(u).unix(F)) ? `Expired on ${ b(u).unix(F).format('L') }` : 'Inactive group license'
                                    })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                children: x.allowedToRenew ? (0, f.jsx)(k.default, {
                                    size: 'large',
                                    type: 'primary',
                                    onClick: () => {
                                        A(!0), (0, p.request)({
                                            url: '/api/quote/createFromRenewal',
                                            method: 'post',
                                            data: {
                                                id: y
                                            },
                                            success: a => {
                                                (0, t.NavigateTo)(`/quote/${ a }`);
                                            },
                                            error: a => {
                                                (0, p.throwMessageError)({
                                                    e: a,
                                                    default: {
                                                        title: 'Error generating a renewal quote. Please try again later'
                                                    }
                                                });
                                            },
                                            both: () => A(!1)
                                        });
                                    },
                                    loading: z,
                                    icon: (0, f.jsx)(i.default, {}),
                                    children: 'Renew'
                                }) : null
                            })
                        ]
                    }),
                    x.isActive ? null : (0, f.jsx)(j.default, {
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
                        style: {
                            marginTop: 15
                        },
                        showIcon: !0
                    }),
                    (0, f.jsx)(v, {
                        open: B,
                        close: () => C(!1),
                        onNewName: a => {
                            (0, p.request)({
                                url: '/api/bulk/rename',
                                data: {
                                    id: y,
                                    name: a
                                }
                            }), (0, r.refetchSpecificBulk)(y), (0, s.invalidateAllBulks)();
                        }
                    })
                ]
            })
        });
    };
}), c.register('/poDA27', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('mQ0iF27'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('mQ0iF27', function(d, e) {
    a(d.exports, 'default', function() {
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
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('LBLT38', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    }, function(f) {
        return _u = f;
    });
    var f = c('ReZvd'),
        g = c('/U36/'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('puH1V'),
        k = c('Zs019'),
        l = c('4AW2P8'),
        m = c('8/APV8'),
        n = function(o, p) {
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
    const o = (a, c) => {
            var {
                prefixCls: p,
                className: q,
                rootClassName: r,
                style: s,
                children: t,
                icon: _u,
                color: v,
                onClose: w,
                closeIcon: x,
                closable: y = !1
            } = a, z = n(a, [
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
                getPrefixCls: A,
                direction: B
            } = h.useContext(i.ConfigContext), [C, D] = h.useState(!0);
            h.useEffect(() => {
                'visible' in z && D(z.visible);
            }, [z.visible]);
            const E = (0, j.isPresetColor)(v) || (0, j.isPresetStatusColor)(v),
                F = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, s),
                G = A('tag', p),
                [H, I] = (0, m.default)(G),
                J = b(g)(G, {
                    [`${ G }-${ v }`]: E,
                    [`${ G }-has-color`]: v && !E,
                    [`${ G }-hidden`]: !C,
                    [`${ G }-rtl`]: 'rtl' === B
                }, q, r, I),
                K = a => {
                    a.stopPropagation(), null == w || w(a), a.defaultPrevented || D(!1);
                },
                L = 'function' == typeof z.onClick || t && 'a' === t.type,
                M = _u || null,
                N = M ? h.createElement(h.Fragment, null, M, h.createElement('span', null, t)) : t,
                O = h.createElement('span', Object.assign({}, z, {
                    ref: c,
                    className: J,
                    style: F
                }), N, y ? x ? h.createElement('span', {
                    className: `${ G }-close-icon`,
                    onClick: K
                }, x) : h.createElement(f.default, {
                    className: `${ G }-close-icon`,
                    onClick: K
                }) : null);
            return H(L ? h.createElement(k.default, null, O) : O);
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var q = p;
}), c.register('4AW2P8', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('/U36/'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('8/APV8'),
        j = function(k, l) {
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
    var _k = a => {
        var {
            prefixCls: l,
            className: m,
            checked: n,
            onChange: o,
            onClick: p
        } = a, q = j(a, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: r
        } = g.useContext(h.ConfigContext), s = r('tag', l), [t, u] = (0, i.default)(s), v = b(f)(s, {
            [`${ s }-checkable`]: !0,
            [`${ s }-checkable-checked`]: n
        }, m, u);
        return t(g.createElement('span', Object.assign({}, q, {
            className: v,
            onClick: a => {
                null == o || o(!n), null == p || p(a);
            }
        })));
    };
}), c.register('8/APV8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('zn07B8'),
        i = c('OVjjp'),
        j = c('/zzpx');
    const k = (a, d, c) => {
            const l = (0, h.default)(c);
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ l }Bg`],
                    borderColor: a[`color${ l }Border`]
                }
            };
        },
        l = a => (0, i.genPresetColor)(a, (d, c) => {
            let {
                textColor: m,
                lightBorderColor: n,
                lightColor: o,
                darkColor: p
            } = c;
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: m,
                    background: o,
                    borderColor: n,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: p,
                        borderColor: p
                    }
                }
            };
        }),
        m = a => {
            const {
                paddingXXS: n,
                lineWidth: o,
                tagPaddingHorizontal: p,
                componentCls: q
            } = a, r = p - o, s = n - o;
            return {
                [q]: Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: a.marginXS,
                    paddingInline: r,
                    fontSize: a.tagFontSize,
                    lineHeight: `${ a.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: a.tagDefaultBg,
                    border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                    borderRadius: a.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ a.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ q }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: a.tagDefaultColor
                    },
                    [`${ q }-close-icon`]: {
                        marginInlineStart: s,
                        color: a.colorTextDescription,
                        fontSize: a.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ a.motionDurationMid }`,
                        '&:hover': {
                            color: a.colorTextHeading
                        }
                    },
                    [`&${ q }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ a.iconCls }-close, ${ a.iconCls }-close:hover`]: {
                            color: a.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ q }-checkable-checked):hover`]: {
                            color: a.colorPrimary,
                            backgroundColor: a.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: a.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: a.colorPrimary,
                            '&:hover': {
                                backgroundColor: a.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: a.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ a.iconCls } + span, > span + ${ a.iconCls }`]: {
                        marginInlineStart: r
                    }
                })
            };
        };
    var _n = (0, f.default)('Tag', a => {
        const {
            fontSize: o,
            lineHeight: p,
            lineWidth: q,
            fontSizeIcon: r
        } = a, s = Math.round(o * p), t = a.fontSizeSM, u = s - 2 * q, v = a.colorFillAlter, w = a.colorText, x = (0, g.merge)(a, {
            tagFontSize: t,
            tagLineHeight: u,
            tagDefaultBg: v,
            tagDefaultColor: w,
            tagIconSize: r - 2 * q,
            tagPaddingHorizontal: 8
        });
        return [
            m(x),
            l(x),
            k(x, 'success', 'Success'),
            k(x, 'processing', 'Info'),
            k(x, 'error', 'Error'),
            k(x, 'warning', 'Warning')
        ];
    });
}), c.register('zn07B8', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('vMDSX', function(d, e) {
    a(d.exports, 'invalidateAllBulks', function() {
        return _j;
    }), a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('GmO9j'),
        g = c('quE27'),
        h = c('V69Df');
    const i = ['all-bulks'],
        _j = () => {
            h.default.invalidateQueries(i);
        };
    var _k = () => (0, f.useQuery)(i, () => (0, g.requestAsPromise)({
        url: '/api/bulk/fetch-all'
    }));
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('MLf6c', function(d, e) {
    a(d.exports, 'default', function() {
        return _D;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('oIHMK'),
        i = c('8sxYw24'),
        j = c('P1KtI'),
        k = c('QZ0Z+'),
        l = c('VNuyu'),
        m = c('aevdF'),
        n = c('Bjl070'),
        o = c('U2vkT'),
        p = c('u4s09'),
        q = c('Eh2Wh'),
        r = c('gS4g327'),
        s = c('FB7HT26'),
        t = c('quE27'),
        u = c('jw1ib'),
        v = c('W6wAQ'),
        w = c('vMDSX'),
        x = c('YGXzp');
    let y, z, A = a => a;
    const B = {
            ...o.CardStyle,
            width: 'calc(50% - 4px)',
            flex: 1
        },
        C = {
            textAlign: 'center',
            fontSize: 32
        };
    var _D = a => {
        const [E, F] = g.useState(!1), G = (0, w.default)().data, {
            bulkId: H,
            bulk: I
        } = a, J = `${ (0, t.getDomain)() }/group/join/${ H }`, K = (G || []).filter(a => a.id !== H), L = !I.joinByLinkEnabled;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)('div', {
                    style: o.CardStyle,
                    children: [
                        (0, f.jsxs)('div', {
                            style: {
                                opacity: L ? 0.6 : 1,
                                pointerEvents: L ? 'none' : 'auto'
                            },
                            children: [
                                (0, f.jsx)(_E, {
                                    children: 'Invite'
                                }),
                                (0, f.jsx)(_F, {
                                    children: 'Get educators under your group license! Share the invite link below to have them automatically join this group.'
                                }),
                                (0, f.jsxs)('div', {
                                    className: 'maxWidth flex vc',
                                    style: {
                                        marginTop: 7
                                    },
                                    children: [
                                        (0, f.jsx)(m.default, {
                                            value: J,
                                            readOnly: !0,
                                            size: 'large'
                                        }),
                                        (0, f.jsx)(j.default, {
                                            onClick: () => {
                                                b(r)(J), n.default.success('Link copied to clipboard!');
                                            },
                                            style: {
                                                marginLeft: 10
                                            },
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
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: [
                                                        u.COMPANY_NAME,
                                                        ' Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time.'
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, f.jsx)('div', {
                                            style: {
                                                width: 8
                                            }
                                        }),
                                        (0, f.jsxs)(k.default, {
                                            style: B,
                                            hoverable: !0,
                                            bodyStyle: C,
                                            className: 'flex hc vc flex-column',
                                            children: [
                                                (0, f.jsx)(i.default, {}),
                                                (0, f.jsx)(l.default, {}),
                                                (0, f.jsxs)('div', {
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: [
                                                        'You can view and remove members by clicking the ',
                                                        (0, f.jsx)('b', {
                                                            children: 'Members'
                                                        }),
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
                                            data: {
                                                bulk: H
                                            },
                                            success: () => {
                                                n.default.success(`Group is ${ I.joinByLinkEnabled ? 'closed' : 'open' } to new members!`), (0, v.refetchSpecificBulk)(H);
                                            },
                                            error: a => (0, t.throwMessageError)({
                                                e: a,
                                                default: {
                                                    title: 'Error switching.'
                                                }
                                            })
                                        });
                                    },
                                    children: [
                                        L ? 'Open' : 'Close',
                                        ' group to new members'
                                    ]
                                }),
                                K.length && I.isActive ? (0, f.jsx)(s.default, {
                                    onClick: () => F(!0),
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
                    visible: E,
                    currentBulk: H,
                    otherBulks: K,
                    close: () => F(!1)
                })
            ]
        });
    };
    const _E = p.default.div(y || (y = A`
  font-weight: ${ 0 };
  font-size: 30px;
`), q.FontWeights.UltraBold),
        _F = p.default.div(z || (z = A`
  font-size: 18px;
  margin-top: -7px;
`));
}), c.register('oIHMK', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('U0WLD'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DollarOutlined';
    var _k = g.forwardRef(j);
}), c.register('U0WLD', function(d, e) {
    a(d.exports, 'default', function() {
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
                attrs: {
                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z'
                }
            }]
        },
        name: 'dollar',
        theme: 'outlined'
    };
}), c.register('8sxYw24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('2lnmQ24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('2lnmQ24', function(d, e) {
    a(d.exports, 'default', function() {
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
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('U2vkT', function(d, e) {
    a(d.exports, 'CardStyle', function() {
        return _p;
    }), a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('QZ0Z+'),
        h = c('VNuyu'),
        i = c('Eh2Wh'),
        j = c('8KqQ+'),
        k = c('jw1ib'),
        l = c('uPd9w'),
        m = c('hQxzs'),
        n = c('quE27'),
        o = c('W6wAQ');
    const _p = {
            fontFamily: i.Fonts.SFPro,
            color: j.default.Black
        },
        q = a => (0, f.jsx)(g.default, {
            style: {
                ..._p,
                minWidth: 215,
                marginLeft: 20
            },
            children: (0, f.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, f.jsx)(_r, {
                        count: a.maxSeats,
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
                        count: a.seatsRemaining,
                        description: `${ (0, n.plural)('seat', a.seatsRemaining) } remaining`
                    })
                ]
            })
        }),
        _r = a => (0, f.jsxs)('div', {
            className: 'flex flex-column vc',
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 23,
                        fontWeight: i.FontWeights.UltraBold
                    },
                    children: a.count
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: -7,
                        fontSize: 11,
                        opacity: 0.8
                    },
                    children: a.description
                })
            ]
        });
    var _s = a => {
        const {
            bulkId: t,
            bulk: u
        } = a, v = Math.abs(u.maxSeats - u.seats.length);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(g.default, {
                    style: _p,
                    children: (0, f.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            justifyContent: 'space-between'
                        },
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
                            !u.hiddenSeatLimit && (0, f.jsx)(q, {
                                maxSeats: u.maxSeats,
                                seatsRemaining: v
                            })
                        ]
                    })
                }),
                u.seats.length ? (0, f.jsx)(m.default, {
                    style: {
                        marginTop: 10
                    },
                    children: u.seats.map(a => (0, f.jsx)('div', {
                        children: (0, f.jsx)(l.default, {
                            email: a,
                            remove: () => {
                                return u = a, void(0, n.request)({
                                    url: '/api/bulk/remove-member',
                                    data: {
                                        bulk: t,
                                        removedMember: u
                                    },
                                    success: () => (0, o.refetchSpecificBulk)(t),
                                    error: a => (0, n.throwMessageError)({
                                        e: a,
                                        default: {
                                            title: 'Error removing user from license'
                                        }
                                    })
                                });
                                var w;
                            }
                        })
                    }, 'member-' + a))
                }) : (0, f.jsx)(g.default, {
                    className: 'maxWidth',
                    style: {
                        marginTop: 10
                    },
                    children: 'Nobody is a member of this group license...yet!'
                })
            ]
        });
    };
}), c.register('gS4g327', function(d, e) {
    var f = c('OG3rI27'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
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
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('OG3rI27', function(d, e) {
    d.exports = function() {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function() {};
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
        return f.removeAllRanges(),
            function() {
                'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function(j) {
                    f.addRange(j);
                }), g && g.focus();
            };
    };
}), c.register('YGXzp', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('QZ0Z+'),
        h = c('VNuyu'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('Eh2Wh'),
        l = c('lptuh'),
        m = c('quE27'),
        n = c('Tzf4u'),
        o = c('O0Kav'),
        p = c('u4s09'),
        q = c('W6wAQ');
    let r, s, t = a => a;
    var _u = a => {
        const [v, w] = o.useState(!1);
        return (0, f.jsx)(i.default, {
            open: a.visible,
            onCancel: a.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: (0, f.jsxs)(_v, {
                children: [
                    (0, f.jsx)(_w, {
                        children: 'Import members from which group license?'
                    }),
                    (0, f.jsx)(h.default, {
                        style: {
                            margin: '30px 0px'
                        }
                    }),
                    a.otherBulks.map(e => (0, f.jsxs)(g.default, {
                        style: {
                            marginBottom: 10,
                            color: j.default.Black
                        },
                        className: 'maxWidth',
                        onClick: () => {
                            return b = e.id, g = e.name, void(v || (w(!0), (0, m.request)({
                                url: '/api/bulk/members/import',
                                data: {
                                    bulk: a.currentBulk,
                                    importedBulk: b
                                },
                                success: () => {
                                    (0, q.refetchSpecificBulk)(a.currentBulk), i.default.success({
                                        title: 'Members imported!',
                                        content: (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                'All members from ',
                                                (0, f.jsx)('b', {
                                                    children: g
                                                }),
                                                ' have been imported into this group license.'
                                            ]
                                        })
                                    });
                                },
                                error: a => {
                                    (0, l.throwError)({
                                        title: 'Error importing members',
                                        content: 'Please try again.'
                                    });
                                },
                                both: () => {
                                    w(!1), a.close();
                                }
                            })));
                            var x, y;
                        },
                        hoverable: !0,
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 18,
                                    fontWeight: k.FontWeights.Bold
                                },
                                children: e.name
                            }),
                            (0, f.jsxs)('div', {
                                children: [
                                    'Started',
                                    ' ',
                                    b(n)((0, m.dateFromObjectId)(e.id)).format('MMMM Do, YYYY')
                                ]
                            })
                        ]
                    }, `import-sub-${ e.id }`))
                ]
            })
        });
    };
    const _v = p.default.div(r || (r = t`
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro),
        _w = p.default.div(s || (s = t`
  font-size: 28px;
  font-weight: ${ 0 };
  line-height: 1;
  margin-top: 20px;
`), k.FontWeights.Bold);
}), c.register('hFITr', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('hgN00')),
        import('./' + c('Dq3qN').resolve('h8E7U')),
        import('./' + c('Dq3qN').resolve('bRCFZ'))
    ]).then(() => c('jKeM0'));
}), c.register('xK/pQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('vMDSX'),
        h = c('u4s09'),
        i = c('yruHD'),
        j = c('ikTj4'),
        k = c('quE27'),
        l = c('zzxN3');
    let m;
    var _n = () => {
        const {
            isLoading: o,
            data: p
        } = (0, g.default)();
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.Title, {
                    title: 'Group Licenses'
                }),
                (() => {
                    if (o)
                        return (0, f.jsx)(_o, {
                            children: (0, f.jsx)(i.default, {
                                size: 'large'
                            })
                        });
                    const q = p && Array.isArray(p) ? p : [];
                    return q.length ? (0, f.jsx)(j.default, {
                        bulks: q
                    }) : (0, f.jsx)(l.default, {});
                })()
            ]
        });
    };
    const _o = h.default.div.attrs({
        className: 'maxAll flex-center'
    })(m || (m = (a => a)``));
}), c.register('zzxN3', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('P1KtI');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('jw1ib'),
        j = c('8KqQ+'),
        k = c('nKuOQ'),
        l = c('FB7HT26'),
        m = c('ikTj4');
    let n, o, p, q = a => a;
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
    const _s = h.default.div.attrs({
            className: 'maxAll flex-center'
        })(n || (n = q``)),
        _t = h.default.div.attrs({
            className: 'flex-center flex-column medium-shadow'
        })(o || (o = q`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${ 0 };
  padding: 45px;
  border-radius: 6px;
`), j.default.White),
        _u = h.default.div(p || (p = q`
  font-size: 16px;
  margin-top: 3px;
`));
}), c.register('e5xHg25', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('MsxQz'),
        g = c('O0Kav'),
        h = c('R2nG3');

    function _i(j, k, l) {
        return function(m) {
            const {
                prefixCls: n,
                style: o
            } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, {
                value: m.open
            }), {
                getPrefixCls: w
            } = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(y => {
                            const z = y[0].target;
                            r(z.offsetHeight + 8), t(z.offsetWidth);
                        }),
                        z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`,
                                C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
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
                style: Object.assign(Object.assign({}, o), {
                    margin: 0
                }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('kufQf25', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('ZyWBF'),
        g = c('6vEai');
    const h = new(0, f.Keyframes)('antMoveDownIn', {
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
        i = new(0, f.Keyframes)('antMoveDownOut', {
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
        j = new(0, f.Keyframes)('antMoveLeftIn', {
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
        k = new(0, f.Keyframes)('antMoveLeftOut', {
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
        l = new(0, f.Keyframes)('antMoveRightIn', {
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
        m = new(0, f.Keyframes)('antMoveRightOut', {
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
        n = {
            'move-up': {
                inKeyframes: new(0, f.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, f.Keyframes)('antMoveUpOut', {
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
        },
        _o = (a, d) => {
            const {
                antCls: p
            } = a, q = `${ p }-${ d }`, {
                inKeyframes: r,
                outKeyframes: s
            } = n[d];
            return [
                (0, g.initMotion)(q, r, s, a.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('E2AMI26', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('42T6R26'),
        k = c('yRLYd'),
        l = c('qW/eZ26'),
        m = c('AzDc2'),
        n = function(o, p) {
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
        }),
        p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = a => {
        const {
            getPrefixCls: r,
            space: s,
            direction: t
        } = h.useContext(i.ConfigContext), {
            size: u = (null == s ? void 0 : s.size) || 'small',
            align: v,
            className: _w,
            rootClassName: x,
            children: y,
            direction: z = 'horizontal',
            prefixCls: A,
            split: B,
            style: C,
            wrap: D = !1
        } = a, E = n(a, [
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
        ]), F = (0, j.default)(), [G, H] = h.useMemo(() => (Array.isArray(u) ? u : [
            u,
            u
        ]).map(a => function(I) {
            return 'string' == typeof I ? p[I] : I || 0;
        }(a)), [u]), I = (0, g.default)(y, {
            keepEmpty: !0
        }), J = void 0 === v && 'horizontal' === z ? 'center' : v, K = r('space', A), [L, M] = (0, m.default)(K), N = b(f)(K, M, `${ K }-${ z }`, {
            [`${ K }-rtl`]: 'rtl' === t,
            [`${ K }-align-${ J }`]: J
        }, _w, x), O = `${ K }-item`, P = 'rtl' === t ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((a, b) => {
                null != a && (Q = b);
                const S = a && a.key || `${ O }-${ b }`;
                return h.createElement(l.default, {
                    className: O,
                    key: S,
                    direction: z,
                    index: b,
                    marginDirection: P,
                    split: B,
                    wrap: D
                }, a);
            }),
            S = h.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return D && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(h.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), C)
        }, E), h.createElement(_o.Provider, {
            value: S
        }, R)));
    };
    q.Compact = k.default;
    var r = q;
}), c.register('42T6R26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nzHVd'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('qW/eZ26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('E2AMI26');

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
        return t || ('vertical' === k ? l < s && (u = {
            marginBottom: q / (o ? 2 : 1)
        }) : u = Object.assign(Object.assign({}, l < s && {
            [m]: q / (o ? 2 : 1)
        }), p && {
            paddingBottom: r
        })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('ZIYAX24', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function() {
                return window.matchMedia(h);
            }, [h]),
            j = (0, f.useState)(function() {
                return i.matches;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useEffect)(function() {
            l(i.matches);
            var m = function(n) {
                return l(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('d/TAL25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__exportStar || function(h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), g(c('Tn4aA25'), d.exports), g(c('R+vNj25'), d.exports), g(c('5nRuZ25'), d.exports);
}), c.register('Tn4aA25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('5nRuZ25');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('5nRuZ25', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__setModuleDefault || (Object.create ? function(h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function(h, i) {
            h.default = i;
        }),
        h = d.exports && d.exports.__importStar || function(i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useWindowSize = void 0;
    var i = h(c('O0Kav'));

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function() {
        var k = i.useState(j()),
            l = k[0],
            m = k[1];
        return i.useLayoutEffect(function() {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n),
                function() {
                    return window.removeEventListener('resize', n);
                };
        }, []), l;
    };
}), c.register('R+vNj25', function(d, e) {
    var f = d.exports && d.exports.__assign || function() {
            return f = Object.assign || function(g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        },
        g = d.exports && d.exports.__createBinding || (Object.create ? function(h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function() {
                    return i[j];
                }
            });
        } : function(h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }),
        h = d.exports && d.exports.__setModuleDefault || (Object.create ? function(i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function(i, j) {
            i.default = j;
        }),
        i = d.exports && d.exports.__importStar || function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useComponentSize = void 0;
    var j = i(c('O0Kav'));
    d.exports.useComponentSize = function() {
        var k = j.useState({
                height: 0,
                width: 0
            }),
            l = k[0],
            m = k[1],
            n = j.useRef(),
            o = j.useCallback(function() {
                if (n.current) {
                    var p = n.current.offsetHeight,
                        q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function() {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current),
                    function() {
                        return p.disconnect();
                    };
            }
        }, [
            n,
            o
        ]), f({
            ref: n
        }, l);
    };
}), c.register('W/XnX24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('zOtFd24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('vJWh924', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('LE3I425').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('LE3I425', function(d, e) {
    a(d.exports, 'default', function() {
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
}), c.register('JTTlV24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('P++lt24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('P++lt24', function(d, e) {
    a(d.exports, 'default', function() {
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
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
}), c.register('bQWYI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('GkLtI'),
        h = c('Nnw7z');
    var _i = (a, d) => {
        const [j, k] = f.useState(() => {
            var l, m;
            const n = a && 'current' in a ? a.current : a;
            return n ? [
                n.offsetWidth,
                n.offsetHeight
            ] : [
                null !== (l = null == d ? void 0 : d.initialWidth) && void 0 !== l ? l : 0,
                null !== (m = null == d ? void 0 : d.initialHeight) && void 0 !== m ? m : 0
            ];
        });
        return (0, h.default)(() => {
            const l = a && 'current' in a ? a.current : a;
            l && k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }, [a]), (0, g.default)(a, a => {
            const l = a.target;
            k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }), j;
    };
}), c.register('GkLtI', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('1PitP'),
        g = c('Nnw7z'),
        h = c('xRoVg'),
        i = c('8Q3ZG');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((m, c) => {
                var n;
                if (1 === m.length)
                    null === (n = l.get(m[0].target)) || void 0 === n || n(m[0], c);
                else
                    for (let o = 0; o < m.length; o++) {
                        var p;
                        null === (p = l.get(m[o].target)) || void 0 === p || p(m[o], c);
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
    var _l = function(m, n) {
        const o = k(),
            p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (m, o) => {
                    q || p.current(m, o);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('Nnw7z', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('xRoVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = a => {
        const h = f.useRef(a);
        return f.useEffect(() => {
            h.current = a;
        }), h;
    };
}), c.register('8Q3ZG', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = [],
            i = null,
            j = function() {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function() {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function() {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('t52Ep', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('AKtTq25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('O0Kav');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : k);
                return (0, f.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, m));
            });
        return l.preload = function() {
            return j || (j = h().then(function(m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('44iM223', function(d, e) {
    a(d.exports, 'default', function() {
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
}), c.register('hxyXq25', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1XwWU13'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('1XwWU13', function(d, e) {
    a(d.exports, 'default', function() {
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
}), c.register('UmTL74', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('Wf/oP4');
    var _h = f.createContext(g.default);
}), c.register('Wf/oP4', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('zB1Rq4'),
        g = c('ZbPFC4');
    var _h = {
        login: new(0, f.default)(),
        navigation: new(0, g.default)()
    };
}), c.register('zB1Rq4', function(d, e) {
    a(d.exports, 'informationTypes', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
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
        },
        i = {
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
                Object.keys(i).forEach(a => this[a] = i[a]), this.informationNeeded.replace([_h.email]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], y.prototype, 'userExists', void 0), (0, f.__decorate)([g.observable], y.prototype, 'email', void 0), (0, f.__decorate)([g.observable], y.prototype, 'accountType', void 0), (0, f.__decorate)([g.observable], y.prototype, 'googleToken', void 0), (0, f.__decorate)([g.observable], y.prototype, 'firstName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'lastName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'password', void 0), (0, f.__decorate)([g.observable], y.prototype, 'schoolId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'districtId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'country', void 0), (0, f.__decorate)([g.observable], y.prototype, 'areaOfExpertise', void 0), (0, f.__decorate)([g.observable], y.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], y.prototype, 'organization', void 0), (0, f.__decorate)([g.observable], y.prototype, 'acceptsLatestPolicies', void 0), (0, f.__decorate)([g.observable], y.prototype, 'authenticated', void 0), (0, f.__decorate)([g.observable], y.prototype, 'informationNeeded', void 0), (0, f.__decorate)([g.action], y.prototype, 'reset', void 0);
    var _z = y;
}), c.register('ZbPFC4', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    const h = {
            currentStage: c('wM8kY4').default.email,
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
                Object.keys(h).forEach(a => this[a] = h[a]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], s.prototype, 'currentStage', void 0), (0, f.__decorate)([g.observable], s.prototype, 'emailSignInBlocked', void 0), (0, f.__decorate)([g.observable], s.prototype, 'creatingAccount', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loggingIn', void 0), (0, f.__decorate)([g.observable], s.prototype, 'updatingAccountInformation', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loginError', void 0), (0, f.__decorate)([g.observable], s.prototype, 'redirectUri', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningId', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningName', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningTeacherName', void 0), (0, f.__decorate)([g.action], s.prototype, 'reset', void 0);
    var _t = s;
}), c.register('wM8kY4', function(d, e) {
    let f;
    var g;
    a(d.exports, 'default', function() {
        return _h;
    }), (g = f || (f = {})).email = 'email', g.password = 'password', g.accountType = 'accountType', g.studentSpecificInfo = 'studentSpecificInfo', g.nameAndPassword = 'nameAndPassword', g.school = 'school', g.educatorSpecificInfo = 'educatorSpecificInfo', g.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', g.acceptPolicies = 'acceptPolicies', g.verifyClass = 'verifyClass';
    var _h = f;
}), c.register('qfXCk3', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('6jmvl'),
        h = c('P1KtI');
    var _i = (0, g.observer)(a => (0, f.jsx)(h.default, {
        disabled: a.disabled,
        size: a.size || 'middle',
        type: 'primary',
        onClick: a.onClick,
        style: Object.assign({
            width: '100%'
        }, a.style),
        loading: a.loading,
        children: a.children
    }));
});