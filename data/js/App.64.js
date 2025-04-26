function a(a, b, c, y) {
    Object.defineProperty(a, b, {
        get: c,
        set: y,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('eqwqZ', function(b, y) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return p;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('bmRaR'),
        g = c('h99Nu'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('OrwLw'),
        k = c('hl5ws'),
        l = c('9MSfK'),
        m = c('0R8EW'),
        n = c('1//3g');
    let o;
    var p = () => {
        const {
            id: q
        } = (0, m.useParams)(), r = s;
        return (0, e.jsx)(f.QueryClientProvider, {
            client: j.default,
            children: (0, e.jsxs)(q, {
                children: [
                    (0, e.jsx)(n.default, {
                        includeSpacer: !0
                    }),
                    r ? (0, e.jsx)(k.default, {
                        bulkId: r
                    }) : (0, e.jsx)(l.default, {})
                ]
            })
        });
    };
    const q = g.default.div.attrs({
        className: 'flex-column'
    })(o || (o = (a => a)`
  flex: 1;
  color: ${ 0 };
  background: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, h.default.Snow, i.Fonts.SFPro);
}), c.register('OrwLw', function(b, y) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = new(0, (c('Wj38c')).QueryClient)();
}), c.register('hl5ws', function(b, y) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('iHElh'),
        f = c('/nMwY'),
        g = c('uPP4W'),
        h = c('q721a'),
        i = c('VF2Dt'),
        j = c('ovhV9'),
        k = c('2tyK4'),
        l = c('oELFp'),
        m = c('EKzOJ'),
        n = c('cRfEu'),
        o = c('PjB0f'),
        p = c('k0s2g17');
    const q = g.lazy(() => c('5Ey98'));
    let r;
    var s;
    (s = r || (r = {})).invite = 'invite', s.members = 'members', s.managers = 'managers', s.analytics = 'analytics', s.invoice = 'invoice', s.receipt = 'receipt';
    const {
        TabPane: t
    } = f.default;
    var u = a => {
        const {
            bulkId: v
        } = w, [x, y] = g.useState(r.invite), {
            data: z,
            error: A,
            isLoading: B
        } = (0, i.default)(v);
        if (B)
            return (0, d.jsxs)('div', {
                style: {
                    flex: 1
                },
                className: 'flex-center',
                children: [
                    (0, d.jsx)(o.Title, {
                        title: 'Group License'
                    }),
                    (0, d.jsx)(e.default, {
                        size: 'large'
                    })
                ]
            });
        if (A)
            return (0, p.NavigateTo)(h.GROUP_DASHBOARD), null;
        return (0, d.jsxs)(j.Container, {
            children: [
                (0, d.jsx)(o.Title, {
                    title: `${ z.name } | Group License`
                }),
                (0, d.jsxs)(j.Content, {
                    children: [
                        (0, d.jsx)(l.default, {
                            bulk: z,
                            bulkId: w.bulkId
                        }),
                        (0, d.jsx)(j.PrimaryContent, {
                            children: (0, d.jsxs)(f.default, {
                                type: 'card',
                                activeKey: x,
                                onChange: w => {
                                    const C = D;
                                    C !== r.invoice ? C !== r.receipt ? y(C) : z.receiptUrl && window.open(z.receiptUrl) : z.invoiceUrl && window.open(z.invoiceUrl);
                                },
                                children: [
                                    (0, d.jsx)(t, {
                                        tab: 'Invite',
                                        children: (0, d.jsx)(m.default, {
                                            bulk: z,
                                            bulkId: v
                                        })
                                    }, r.invite),
                                    (0, d.jsx)(t, {
                                        tab: 'Members',
                                        children: (0, d.jsx)(n.default, {
                                            bulk: z,
                                            bulkId: v
                                        })
                                    }, r.members),
                                    (0, d.jsx)(t, {
                                        tab: 'Managers',
                                        children: (0, d.jsx)(k.default, {
                                            bulk: z,
                                            bulkId: v
                                        })
                                    }, r.managers),
                                    (0, d.jsx)(t, {
                                        tab: 'Usage Report',
                                        children: (0, d.jsx)(g.Suspense, {
                                            fallback: null,
                                            children: (0, d.jsx)(q, {
                                                bulkId: v
                                            })
                                        })
                                    }, r.analytics),
                                    z.receiptUrl ? (0, d.jsx)(t, {
                                        tab: 'View Receipt'
                                    }, r.receipt) : null,
                                    z.invoiceUrl ? (0, d.jsx)(t, {
                                        tab: 'View Invoice'
                                    }, r.invoice) : null
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
}), c.register('VF2Dt', function(b, q) {
    a(b.exports, 'refetchSpecificBulk', function() {
        return h;
    }), a(b.exports, 'default', function() {
        return i;
    });
    var d = c('IsAdf'),
        e = c('PjB0f'),
        f = c('OrwLw');
    const g = ['specific-bulk'],
        h = a => f.default.refetchQueries([
            g,
            a
        ]);
    var i = a => (0, d.useQuery)([
        g,
        a
    ], () => (0, e.requestAsPromise)({
        url: '/api/bulk/fetch/' + a
    }));
}), c.register('ovhV9', function(q, d) {
    a(q.exports, 'Container', function() {
        return w;
    }), a(q.exports, 'Content', function() {
        return x;
    }), a(q.exports, 'Title', function() {
        return y;
    }), a(q.exports, 'PrimaryContent', function() {
        return A;
    }), a(q.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('lnkpW'),
        f = c('IsmrL'),
        g = c('2MCaL');
    c('uPP4W');
    var h = c('h99Nu'),
        i = c('0wLl2'),
        j = c('gSUVO'),
        k = c('q721a'),
        l = c('iYEuk12'),
        m = c('FfkIK1'),
        n = c('PjB0f'),
        o = c('XincZ');
    let p, q, r, s, t, u = a => a;
    var v = a => (0, d.jsx)(w, {
        children: (0, d.jsxs)(x, {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    className: 'flex-column flex-center',
                    children: [
                        (0, d.jsxs)(y, {
                            children: [
                                i.COMPANY_NAME,
                                ' Groups'
                            ]
                        }),
                        (0, d.jsxs)(z, {
                            children: [
                                'Welcome to ',
                                i.COMPANY_NAME,
                                ' Groups! Below are the group licenses you manage. Click into a license to invite members, add managers, view usage analytics, and more!'
                            ]
                        }),
                        (0, d.jsx)(l.default, {
                            to: k.GROUP_PRICING,
                            style: {
                                marginBottom: 30,
                                marginTop: -10
                            },
                            children: (0, d.jsx)(f.default, {
                                size: 'large',
                                type: 'primary',
                                icon: (0, d.jsx)(e.default, {}),
                                children: 'Start New Group'
                            })
                        })
                    ]
                }),
                (0, d.jsx)(A, {
                    children: a.bulks.map(a => (0, d.jsx)(o.default, {
                        id: a.id,
                        name: a.name,
                        isActive: a.isActive,
                        startDate: b(g)((0, n.dateFromId)(a.id)).format('MMMM Do, YYYY')
                    }, a.id + '-item'))
                })
            ]
        })
    });
    const w = h.default.div.attrs({
            className: 'flex-column vc'
        })(p || (p = u`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`)),
        x = h.default.div.attrs({
            className: 'flex-column'
        })(q || (q = u`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`)),
        y = h.default.div(r || (r = u`
  font-size: 54px;
  font-weight: ${ 0 };
`), j.FontWeights.UltraBold),
        z = h.default.div(s || (s = u`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`)),
        A = (0, h.default)(m.default).attrs({
            className: 'maxWidth'
        })(t || (t = u`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`));
}), c.register('iYEuk12', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('FfkIK1', function(b, q) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI');
    let g;
    var h = a => (0, d.jsx)(i, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const i = e.default.div(g || (g = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), c.register('XincZ', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('gSUVO'),
        h = c('iYEuk12');
    let i, j, k, l, m = a => a;
    var n = a => {
        const {
            id: o,
            name: p,
            startDate: q,
            isActive: r
        } = s;
        return (0, d.jsxs)(o, {
            to: `/groups/${ o }`,
            children: [
                (0, d.jsx)(p, {
                    style: {
                        background: r ? '#388e3c' : '#f44336'
                    },
                    children: r ? 'Active' : 'Inactive'
                }),
                (0, d.jsx)(q, {
                    children: p
                }),
                q ? (0, d.jsxs)(r, {
                    children: [
                        'Started on ',
                        q
                    ]
                }) : null
            ]
        });
    };
    const o = (0, e.default)(h.default).attrs({
            className: 'flex-column'
        })(i || (i = m`
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
`), f.default.BorderGray, f.default.Black, f.default.Black),
        p = e.default.div(j || (j = m`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${ 0 };
  margin-bottom: 9px;
  font-size: 12px;
`), f.default.White),
        q = e.default.div(k || (k = m`
  font-weight: ${ 0 };
  font-size: 16px;
`), g.FontWeights.Bold),
        r = e.default.div(l || (l = m`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), c.register('2tyK4', function(b, y) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('f9f+a'),
        h = c('c6x8w'),
        i = c('jrTkz0'),
        j = c('cR5QE'),
        k = c('gSUVO'),
        l = c('lmfrI'),
        m = c('Ex2wZ'),
        n = c('cBb/w'),
        o = c('VF2Dt'),
        p = c('GFgjD'),
        q = c('6jNxr'),
        r = c('PjB0f'),
        s = c('nHGjF');
    const t = {
        fontFamily: k.Fonts.SFPro,
        color: l.default.Black
    };
    var u = a => {
        const {
            bulk: v,
            bulkId: w
        } = x, [y, z] = e.useState(''), [A, B] = e.useState(!1), [C, D] = e.useState(null), E = y && (0, q.validateEmail)(y), F = () => {
            E && (B(!0), (0, r.request)({
                url: '/api/bulk/add-admin',
                data: {
                    bulk: w,
                    newAdmin: y
                },
                success: () => {
                    (0, o.refetchSpecificBulk)(w), i.default.success('Manager added!'), z('');
                },
                error: x => {
                    x && x.message && x.message.text && 'USER NOT FOUND' === x.message.text ? (0, p.throwError)({
                        title: 'User not found',
                        content: 'This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first.'
                    }) : D(x);
                },
                both: () => B(!1)
            }));
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {
                    style: t,
                    children: (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    fontSize: 25,
                                    fontWeight: k.FontWeights.UltraBold
                                },
                                children: 'Managers'
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    fontSize: 15,
                                    marginTop: -6
                                },
                                children: 'Managers can remove members, add other managers, and modify group options'
                            })
                        ]
                    })
                }),
                (0, d.jsxs)(g.default, {
                    style: {
                        ...t,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontWeight: k.FontWeights.UltraBold,
                                fontSize: 25
                            },
                            children: 'Add Manager'
                        }),
                        (0, d.jsx)(h.default, {
                            size: 'large',
                            placeholder: 'Manager email...',
                            style: {
                                width: '100%',
                                marginTop: -1
                            },
                            value: y,
                            onChange: x => {
                                z(x.target.value.toLowerCase()), D(null);
                            },
                            onPressEnter: F
                        }),
                        (0, d.jsx)(f.default, {
                            style: {
                                width: '100%',
                                marginTop: 5
                            },
                            type: 'primary',
                            disabled: !E,
                            loading: A,
                            onClick: F,
                            children: 'Add'
                        }),
                        (0, d.jsx)(s.default, {
                            error: C,
                            style: {
                                marginTop: 5
                            }
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    children: v.owners.map(x => (0, d.jsx)('div', {
                        children: (0, d.jsx)(m.default, {
                            email: x,
                            remove: () => {
                                return y = x, void(v.owners.length < 2 ? (0, p.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Please add another admin before removing yourself'
                                }) : (0, r.getUser)().email === y ? j.default.confirm({
                                    title: 'Are you sure you want to remove yourself as a manager?',
                                    onOk: () => {
                                        (0, r.request)({
                                            url: '/api/bulk/remove-admin',
                                            data: {
                                                bulk: w
                                            },
                                            success: () => window.location.reload(),
                                            error: () => (0, p.throwError)({
                                                title: 'Error removing user from license'
                                            })
                                        });
                                    }
                                }) : (0, p.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Managers can only remove themselves'
                                }));
                                var G;
                            }
                        })
                    }, 'admin-' + x))
                })
            ]
        });
    };
}), c.register('Ex2wZ', function(b, d) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('4jOgw8'),
        f = c('f9f+a'),
        g = c('YfLmS'),
        h = c('gSUVO'),
        i = c('lmfrI');
    var j = a => (0, d.jsx)(f.default, {
        style: {
            fontFamily: h.Fonts.SFPro,
            color: i.default.Black,
            marginBottom: 5
        },
        children: (0, d.jsxs)('div', {
            className: 'flex maxWidth vc',
            style: {
                justifyContent: 'space-between'
            },
            children: [
                (0, d.jsx)('div', {
                    children: a.email
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(g.default, {
                        title: 'Remove',
                        children: (0, d.jsx)(e.default, {
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
}), c.register('4jOgw8', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('4LDCB8'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var i = e.forwardRef(h);
}), c.register('4LDCB8', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('nHGjF', function(b, w) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bPH7V');
    var f = a => a.error ? (0, d.jsx)(e.default, {
        message: 'Error',
        style: a.style,
        type: 'error',
        description: a.error && a.error.message && a.error.message.text ? a.error.message.text : 'string' == typeof a.error ? a.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), c.register('oELFp', function(w, x) {
    a(w.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('gSUVO'),
        g = c('zgQWX27'),
        h = c('bPH7V'),
        i = c('IsmrL'),
        j = c('c6x8w'),
        k = c('cR5QE'),
        l = c('JQ8A18'),
        m = c('YfLmS'),
        n = c('PjB0f'),
        o = c('iYEuk12'),
        p = c('VF2Dt'),
        q = c('AZuy8'),
        r = c('k0s2g17'),
        s = c('2MCaL');
    const t = a => {
        const [u, v] = e.useState(''), w = !!u, x = () => {
            w && (a.onNewName(u), a.close());
        };
        return (0, d.jsx)(k.default, {
            open: a.open,
            closable: !0,
            onCancel: a.close,
            title: 'Rename Group',
            afterClose: () => v(''),
            footer: (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(i.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }),
                    (0, d.jsx)(i.default, {
                        disabled: !w,
                        type: 'primary',
                        onClick: x,
                        children: 'Rename'
                    })
                ]
            }),
            children: (0, d.jsx)(j.default, {
                size: 'large',
                style: {
                    width: '100%'
                },
                autoFocus: !0,
                placeholder: 'New group name...',
                value: u,
                maxLength: 32,
                onChange: a => v(a.target.value),
                onPressEnter: x
            })
        });
    };
    var u = a => {
        const {
            bulk: v,
            bulkId: w
        } = x, [y, z] = e.useState(!1), [A, B] = e.useState(!1), {
            isActive: C,
            name: D,
            expiration: E,
            statusText: F
        } = G;
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)('div', {
                className: 'maxWidth',
                style: {
                    paddingBottom: 39
                },
                children: [
                    (0, d.jsxs)('div', {
                        className: 'maxWidth flex vc',
                        style: {
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginBottom: -11
                                        },
                                        children: [
                                            (0, d.jsx)('div', {
                                                style: {
                                                    fontWeight: f.FontWeights.UltraBold,
                                                    fontSize: 34,
                                                    cursor: 'pointer'
                                                },
                                                onClick: () => B(!0),
                                                children: (0, d.jsx)(m.default, {
                                                    title: 'Rename Group License',
                                                    placement: 'topLeft',
                                                    children: D
                                                })
                                            }),
                                            (0, d.jsx)(l.default, {
                                                style: {
                                                    marginLeft: 10
                                                },
                                                color: C ? 'green' : 'red',
                                                children: C ? F || 'Active' : E && b(s)().isAfter(b(s).unix(E)) ? 'Inactive' : F || 'Inactive'
                                            })
                                        ]
                                    }),
                                    (0, d.jsx)('div', {
                                        style: {
                                            fontSize: 18,
                                            opacity: 0.8
                                        },
                                        children: C ? E ? `Expires on ${ b(s).unix(E).format('L') }` : 'Paid with credit/debit card' : E && b(s)().isAfter(b(s).unix(E)) ? `Expired on ${ b(s).unix(E).format('L') }` : 'Inactive group license'
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: G.allowedToRenew ? (0, d.jsx)(i.default, {
                                    size: 'large',
                                    type: 'primary',
                                    onClick: () => {
                                        z(!0), (0, n.request)({
                                            url: '/api/quote/createFromRenewal',
                                            method: 'post',
                                            data: {
                                                id: w
                                            },
                                            success: x => {
                                                (0, r.NavigateTo)(`/quote/${ x }`);
                                            },
                                            error: x => {
                                                (0, n.throwMessageError)({
                                                    e: x,
                                                    default: {
                                                        title: 'Error generating a renewal quote. Please try again later'
                                                    }
                                                });
                                            },
                                            both: () => z(!1)
                                        });
                                    },
                                    loading: y,
                                    icon: (0, d.jsx)(g.default, {}),
                                    children: 'Renew'
                                }) : null
                            })
                        ]
                    }),
                    G.isActive ? null : (0, d.jsx)(h.default, {
                        type: 'error',
                        message: 'Group License No Longer Active',
                        description: (0, d.jsxs)(d.Fragment, {
                            children: [
                                'To reactivate this group license,',
                                ' ',
                                (0, d.jsx)(o.default, {
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
                    (0, d.jsx)(t, {
                        open: A,
                        close: () => B(!1),
                        onNewName: x => {
                            (0, n.request)({
                                url: '/api/bulk/rename',
                                data: {
                                    id: w,
                                    name: x
                                }
                            }), (0, p.refetchSpecificBulk)(w), (0, q.invalidateAllBulks)();
                        }
                    })
                ]
            })
        });
    };
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
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
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('AZuy8', function(b, D) {
    a(b.exports, 'invalidateAllBulks', function() {
        return h;
    }), a(b.exports, 'default', function() {
        return i;
    });
    var d = c('IsAdf'),
        e = c('PjB0f'),
        f = c('OrwLw');
    const g = ['all-bulks'],
        h = () => {
            f.default.invalidateQueries(g);
        };
    var i = () => (0, d.useQuery)(g, () => (0, e.requestAsPromise)({
        url: '/api/bulk/fetch-all'
    }));
}), c.register('k0s2g17', function(b, D) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('EKzOJ', function(D, E) {
    a(D.exports, 'default', function() {
        return B;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('BSqHU'),
        g = c('qgO2124'),
        h = c('IsmrL'),
        i = c('f9f+a'),
        j = c('ExtIT'),
        k = c('c6x8w'),
        l = c('jrTkz0'),
        m = c('cRfEu'),
        n = c('h99Nu'),
        o = c('gSUVO'),
        p = c('SlNZ027'),
        q = c('iYEuk12'),
        r = c('PjB0f'),
        s = c('0wLl2'),
        t = c('VF2Dt'),
        u = c('AZuy8'),
        v = c('5XmoU');
    let w, x, y = a => a;
    const z = {
            ...m.CardStyle,
            width: 'calc(50% - 4px)',
            flex: 1
        },
        A = {
            textAlign: 'center',
            fontSize: 32
        };
    var B = a => {
        const [C, D] = e.useState(!1), E = (0, u.default)().data, {
            bulkId: F,
            bulk: G
        } = H, I = `${ (0, r.getDomain)() }/group/join/${ F }`, J = (E || []).filter(H => H.id !== F), K = !G.joinByLinkEnabled;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)('div', {
                    style: m.CardStyle,
                    children: [
                        (0, d.jsxs)('div', {
                            style: {
                                opacity: K ? 0.6 : 1,
                                pointerEvents: K ? 'none' : 'auto'
                            },
                            children: [
                                (0, d.jsx)(C, {
                                    children: 'Invite'
                                }),
                                (0, d.jsx)(D, {
                                    children: 'Get educators under your group license! Share the invite link below to have them automatically join this group.'
                                }),
                                (0, d.jsxs)('div', {
                                    className: 'maxWidth flex vc',
                                    style: {
                                        marginTop: 7
                                    },
                                    children: [
                                        (0, d.jsx)(k.default, {
                                            value: I,
                                            readOnly: !0,
                                            size: 'large'
                                        }),
                                        (0, d.jsx)(h.default, {
                                            onClick: () => {
                                                b(p)(I), l.default.success('Link copied to clipboard!');
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
                                (0, d.jsx)(j.default, {}),
                                (0, d.jsxs)('div', {
                                    className: 'flex',
                                    children: [
                                        (0, d.jsxs)(i.default, {
                                            style: z,
                                            hoverable: !0,
                                            bodyStyle: A,
                                            className: 'flex hc vc flex-column',
                                            children: [
                                                (0, d.jsx)(f.default, {}),
                                                (0, d.jsx)(j.default, {}),
                                                (0, d.jsxs)('div', {
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: [
                                                        s.COMPANY_NAME,
                                                        ' Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time.'
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, d.jsx)('div', {
                                            style: {
                                                width: 8
                                            }
                                        }),
                                        (0, d.jsxs)(i.default, {
                                            style: z,
                                            hoverable: !0,
                                            bodyStyle: A,
                                            className: 'flex hc vc flex-column',
                                            children: [
                                                (0, d.jsx)(g.default, {}),
                                                (0, d.jsx)(j.default, {}),
                                                (0, d.jsxs)('div', {
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: [
                                                        'You can view and remove members by clicking the ',
                                                        (0, d.jsx)('b', {
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
                                (0, d.jsx)(j.default, {})
                            ]
                        }),
                        (0, d.jsxs)('div', {
                            className: 'flex flex-column',
                            children: [
                                (0, d.jsxs)(q.default, {
                                    onClick: () => {
                                        (0, r.request)({
                                            url: '/api/bulk/toggle-join-by-link',
                                            method: 'post',
                                            data: {
                                                bulk: F
                                            },
                                            success: () => {
                                                l.default.success(`Group is ${ G.joinByLinkEnabled ? 'closed' : 'open' } to new members!`), (0, t.refetchSpecificBulk)(F);
                                            },
                                            error: H => (0, r.throwMessageError)({
                                                e: H,
                                                default: {
                                                    title: 'Error switching.'
                                                }
                                            })
                                        });
                                    },
                                    children: [
                                        K ? 'Open' : 'Close',
                                        ' group to new members'
                                    ]
                                }),
                                J.length && G.isActive ? (0, d.jsx)(q.default, {
                                    onClick: () => D(!0),
                                    children: 'Import members from previous group license'
                                }) : null,
                                (0, d.jsx)(q.default, {
                                    to: 'mailto:groups@gimkit.com',
                                    external: !0,
                                    children: 'Contact support'
                                })
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(v.default, {
                    visible: C,
                    currentBulk: F,
                    otherBulks: J,
                    close: () => D(!1)
                })
            ]
        });
    };
    const C = n.default.div(w || (w = y`
  font-weight: ${ 0 };
  font-size: 30px;
`), o.FontWeights.UltraBold),
        D = n.default.div(x || (x = y`
  font-size: 18px;
  margin-top: -7px;
`));
}), c.register('BSqHU', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('YqSK/'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DollarOutlined';
    var i = e.forwardRef(h);
}), c.register('YqSK/', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('cRfEu', function(b, u) {
    a(b.exports, 'CardStyle', function() {
        return n;
    }), a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('f9f+a'),
        f = c('ExtIT'),
        g = c('gSUVO'),
        h = c('lmfrI'),
        i = c('0wLl2'),
        j = c('Ex2wZ'),
        k = c('cBb/w'),
        l = c('PjB0f'),
        m = c('VF2Dt');
    const n = {
            fontFamily: g.Fonts.SFPro,
            color: h.default.Black
        },
        o = a => (0, d.jsx)(e.default, {
            style: {
                ...n,
                minWidth: 215,
                marginLeft: 20
            },
            children: (0, d.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, d.jsx)(p, {
                        count: a.maxSeats,
                        description: 'total seats'
                    }),
                    (0, d.jsx)(f.default, {
                        type: 'vertical',
                        style: {
                            marginLeft: 20,
                            marginRight: 20
                        }
                    }),
                    (0, d.jsx)(p, {
                        count: a.seatsRemaining,
                        description: `${ (0, l.plural)('seat', a.seatsRemaining) } remaining`
                    })
                ]
            })
        }),
        p = a => (0, d.jsxs)('div', {
            className: 'flex flex-column vc',
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 23,
                        fontWeight: g.FontWeights.UltraBold
                    },
                    children: a.count
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: -7,
                        fontSize: 11,
                        opacity: 0.8
                    },
                    children: a.description
                })
            ]
        });
    var q = a => {
        const {
            bulkId: r,
            bulk: s
        } = t, u = Math.abs(s.maxSeats - s.seats.length);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(e.default, {
                    style: n,
                    children: (0, d.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)('div', {
                                        style: {
                                            fontSize: 25,
                                            fontWeight: g.FontWeights.UltraBold
                                        },
                                        children: 'Members'
                                    }),
                                    (0, d.jsxs)('div', {
                                        style: {
                                            fontSize: 15,
                                            marginTop: -6
                                        },
                                        children: [
                                            'Members receive ',
                                            i.COMPANY_NAME,
                                            ' Pro covered by this group license'
                                        ]
                                    })
                                ]
                            }),
                            !s.hiddenSeatLimit && (0, d.jsx)(o, {
                                maxSeats: s.maxSeats,
                                seatsRemaining: u
                            })
                        ]
                    })
                }),
                s.seats.length ? (0, d.jsx)(k.default, {
                    style: {
                        marginTop: 10
                    },
                    children: s.seats.map(t => (0, d.jsx)('div', {
                        children: (0, d.jsx)(j.default, {
                            email: t,
                            remove: () => {
                                return s = t, void(0, l.request)({
                                    url: '/api/bulk/remove-member',
                                    data: {
                                        bulk: r,
                                        removedMember: s
                                    },
                                    success: () => (0, m.refetchSpecificBulk)(r),
                                    error: t => (0, l.throwMessageError)({
                                        e: t,
                                        default: {
                                            title: 'Error removing user from license'
                                        }
                                    })
                                });
                                var v;
                            }
                        })
                    }, 'member-' + t))
                }) : (0, d.jsx)(e.default, {
                    className: 'maxWidth',
                    style: {
                        marginTop: 10
                    },
                    children: 'Nobody is a member of this group license...yet!'
                })
            ]
        });
    };
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('5XmoU', function(u, d) {
    a(u.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('f9f+a'),
        f = c('ExtIT'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('GFgjD'),
        k = c('PjB0f'),
        l = c('2MCaL'),
        m = c('uPP4W'),
        n = c('h99Nu'),
        o = c('VF2Dt');
    let p, q, r = a => a;
    var s = a => {
        const [t, u] = m.useState(!1);
        return (0, d.jsx)(g.default, {
            open: a.visible,
            onCancel: a.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: (0, d.jsxs)(t, {
                children: [
                    (0, d.jsx)(u, {
                        children: 'Import members from which group license?'
                    }),
                    (0, d.jsx)(f.default, {
                        style: {
                            margin: '30px 0px'
                        }
                    }),
                    a.otherBulks.map(d => (0, d.jsxs)(e.default, {
                        style: {
                            marginBottom: 10,
                            color: h.default.Black
                        },
                        className: 'maxWidth',
                        onClick: () => {
                            return b = d.id, e = d.name, void(t || (u(!0), (0, k.request)({
                                url: '/api/bulk/members/import',
                                data: {
                                    bulk: a.currentBulk,
                                    importedBulk: b
                                },
                                success: () => {
                                    (0, o.refetchSpecificBulk)(a.currentBulk), g.default.success({
                                        title: 'Members imported!',
                                        content: (0, d.jsxs)(d.Fragment, {
                                            children: [
                                                'All members from ',
                                                (0, d.jsx)('b', {
                                                    children: e
                                                }),
                                                ' have been imported into this group license.'
                                            ]
                                        })
                                    });
                                },
                                error: a => {
                                    (0, j.throwError)({
                                        title: 'Error importing members',
                                        content: 'Please try again.'
                                    });
                                },
                                both: () => {
                                    u(!1), a.close();
                                }
                            })));
                            var v, w;
                        },
                        hoverable: !0,
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    fontSize: 18,
                                    fontWeight: i.FontWeights.Bold
                                },
                                children: d.name
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    'Started',
                                    ' ',
                                    b(l)((0, k.dateFromObjectId)(d.id)).format('MMMM Do, YYYY')
                                ]
                            })
                        ]
                    }, `import-sub-${ d.id }`))
                ]
            })
        });
    };
    const t = n.default.div(p || (p = r`
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro),
        u = n.default.div(q || (q = r`
  font-size: 28px;
  font-weight: ${ 0 };
  line-height: 1;
  margin-top: 20px;
`), i.FontWeights.Bold);
}), c.register('5Ey98', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('fzXqn')),
        import('./' + c('tIOy4').resolve('kKpXS')),
        import('./' + c('tIOy4').resolve('bRCFZ'))
    ]).then(() => c('nGQWW'));
}), c.register('9MSfK', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('AZuy8'),
        f = c('h99Nu'),
        g = c('iHElh'),
        h = c('ovhV9'),
        i = c('PjB0f'),
        j = c('DuGQ5');
    let k;
    var l = () => {
        const {
            isLoading: m,
            data: n
        } = (0, e.default)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(i.Title, {
                    title: 'Group Licenses'
                }),
                (() => {
                    if (m)
                        return (0, d.jsx)(m, {
                            children: (0, d.jsx)(g.default, {
                                size: 'large'
                            })
                        });
                    const o = n && Array.isArray(n) ? n : [];
                    return o.length ? (0, d.jsx)(h.default, {
                        bulks: o
                    }) : (0, d.jsx)(j.default, {});
                })()
            ]
        });
    };
    const m = f.default.div.attrs({
        className: 'maxAll flex-center'
    })(k || (k = (a => a)``));
}), c.register('DuGQ5', function(b, j) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('0wLl2'),
        h = c('lmfrI'),
        i = c('q721a'),
        j = c('iYEuk12'),
        k = c('ovhV9');
    let l, m, n, o = a => a;
    var p = () => (0, d.jsx)(q, {
        children: (0, d.jsxs)(r, {
            children: [
                (0, d.jsxs)(k.Title, {
                    children: [
                        g.COMPANY_NAME,
                        ' Groups'
                    ]
                }),
                (0, d.jsxs)(s, {
                    children: [
                        'Welcome to ',
                        g.COMPANY_NAME,
                        ' Groups! You don\u2019t manage any group licenses yet. Click the button below to get your group started!'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    to: i.GROUP_PRICING,
                    className: 'maxWidth',
                    children: (0, d.jsx)(e.default, {
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
    const q = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(l || (l = o``)),
        r = f.default.div.attrs({
            className: 'flex-center flex-column medium-shadow'
        })(m || (m = o`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${ 0 };
  padding: 45px;
  border-radius: 6px;
`), h.default.White),
        s = f.default.div(n || (n = o`
  font-size: 16px;
  margin-top: 3px;
`));
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
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
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
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
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
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
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
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
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = arguments.length; f < g; f++)
                    for (var h in e = arguments[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, arguments);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
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
        return h.useLayoutEffect(function() {
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
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('bdX0N23', function(b, i) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = arguments.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = arguments[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
}), c.register('iMnBi', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('/rcVD4', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('J7Y504');
    var f = d.createContext(e.default);
}), c.register('J7Y504', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('MHioT3'),
        e = c('Ek+Wy4');
    var f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), c.register('MHioT3', function(b, d) {
    a(b.exports, 'informationTypes', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return y;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
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
        } = w;
    class x {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([f.email]), this.reset = () => {
                Object.keys(w).forEach(a => this[a] = w[a]), this.informationNeeded.replace([f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], x.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], x.prototype, 'email', void 0), (0, d.__decorate)([e.observable], x.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], x.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], x.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'password', void 0), (0, d.__decorate)([e.observable], x.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'country', void 0), (0, d.__decorate)([e.observable], x.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], x.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], x.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], x.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], x.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], x.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], x.prototype, 'reset', void 0);
    var y = z;
}), c.register('Ek+Wy4', function(b, d) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
            currentStage: c('bDt8q4').default.email,
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
        } = q;
    class r {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(q).forEach(a => this[a] = q[a]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], r.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], r.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], r.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], r.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], r.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], r.prototype, 'reset', void 0);
    var s = t;
}), c.register('bDt8q4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var f = g;
}), c.register('+qN5a2', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Vlfxs'),
        f = c('IsmrL');
    var g = (0, e.observer)(a => (0, d.jsx)(f.default, {
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