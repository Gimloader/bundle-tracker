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
a.register('KINYN', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('sQsFp'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('x/+rF'),
        k = a('SpgBu'),
        l = a('2uW6I'),
        m = a('70AkF'),
        n = a('RJjEi');
    let o;
    var _p = () => {
        const {
            id: _q
        } = (0, m.useParams)(), r = _q;
        return (0, e.jsx)(f.QueryClientProvider, {
            client: j.default,
            children: (0, e.jsxs)(_q, {
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
    const _q = g.default.div.attrs({
        className: 'flex-column'
    })(o || (o = (_i => _i)`
  flex: 1;
  color: ${ 0 };
  background: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, h.default.Snow, i.Fonts.SFPro);
}), a.register('x/+rF', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = new(0, (a('2Letd')).QueryClient)();
}), a.register('SpgBu', function(b, c) {
    _i(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('6CIVV'),
        f = a('CAKUf'),
        g = a('LEQ5w'),
        h = a('gs4MT'),
        i = a('wQa8B'),
        j = a('jXz1K'),
        k = a('hk77B'),
        l = a('bemuk'),
        m = a('BtGn5'),
        n = a('q7Uge'),
        o = a('PMl60'),
        p = a('jzxyj10');
    const q = g.lazy(() => a('MvRMF'));
    let r;
    var s;
    (s = r || (r = {})).invite = 'invite', s.members = 'members', s.managers = 'managers', s.analytics = 'analytics', s.invoice = 'invoice', s.receipt = 'receipt';
    const {
        TabPane: t
    } = f.default;
    var _u = _i => {
        const {
            bulkId: v
        } = _i, [w, x] = g.useState(r.invite), {
            data: y,
            error: z,
            isLoading: A
        } = (0, i.default)(v);
        if (A)
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
        if (z)
            return (0, p.NavigateTo)(h.GROUP_DASHBOARD), null;
        return (0, d.jsxs)(j.Container, {
            children: [
                (0, d.jsx)(o.Title, {
                    title: `${ y.name } | Group License`
                }),
                (0, d.jsxs)(j.Content, {
                    children: [
                        (0, d.jsx)(l.default, {
                            bulk: y,
                            bulkId: _i.bulkId
                        }),
                        (0, d.jsx)(j.PrimaryContent, {
                            children: (0, d.jsxs)(f.default, {
                                type: 'card',
                                activeKey: w,
                                onChange: _i => {
                                    const B = _i;
                                    B !== r.invoice ? B !== r.receipt ? x(B) : y.receiptUrl && window.open(y.receiptUrl) : y.invoiceUrl && window.open(y.invoiceUrl);
                                },
                                children: [
                                    (0, d.jsx)(t, {
                                        tab: 'Invite',
                                        children: (0, d.jsx)(m.default, {
                                            bulk: y,
                                            bulkId: v
                                        })
                                    }, r.invite),
                                    (0, d.jsx)(t, {
                                        tab: 'Members',
                                        children: (0, d.jsx)(n.default, {
                                            bulk: y,
                                            bulkId: v
                                        })
                                    }, r.members),
                                    (0, d.jsx)(t, {
                                        tab: 'Managers',
                                        children: (0, d.jsx)(k.default, {
                                            bulk: y,
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
                                    y.receiptUrl ? (0, d.jsx)(t, {
                                        tab: 'View Receipt'
                                    }, r.receipt) : null,
                                    y.invoiceUrl ? (0, d.jsx)(t, {
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
}), a.register('wQa8B', function(b, c) {
    _i(b.exports, 'refetchSpecificBulk', function() {
        return _h;
    }), _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('UapK50'),
        e = a('PMl60'),
        f = a('x/+rF');
    const g = ['specific-bulk'],
        _h = _i => f.default.refetchQueries([
            g,
            _i
        ]);
    var _i = _i => (0, d.useQuery)([
        g,
        _i
    ], () => (0, e.requestAsPromise)({
        url: '/api/bulk/fetch/' + _i
    }));
}), a.register('jXz1K', function(b, c) {
    _i(b.exports, 'Container', function() {
        return _w;
    }), _i(b.exports, 'Content', function() {
        return _x;
    }), _i(b.exports, 'Title', function() {
        return _y;
    }), _i(b.exports, 'PrimaryContent', function() {
        return _A;
    }), _i(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('NiL4/'),
        f = a('ulE4q'),
        g = a('ECzOP');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('hHkFq'),
        j = a('b5kvC'),
        k = a('gs4MT'),
        l = a('2HvvA11'),
        m = a('7s5R80'),
        n = a('PMl60'),
        o = a('zoqzn');
    let p, q, r, s, t, u = _i => _i;
    var _v = _i => (0, d.jsx)(_w, {
        children: (0, d.jsxs)(_x, {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    className: 'flex-column flex-center',
                    children: [
                        (0, d.jsxs)(_y, {
                            children: [
                                i.COMPANY_NAME,
                                ' Groups'
                            ]
                        }),
                        (0, d.jsxs)(_z, {
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
                (0, d.jsx)(_A, {
                    children: _i.bulks.map(_i => (0, d.jsx)(o.default, {
                        id: _i.id,
                        name: _i.name,
                        isActive: _i.isActive,
                        startDate: _b(g)((0, n.dateFromId)(_i.id)).format('MMMM Do, YYYY')
                    }, _i.id + '-item'))
                })
            ]
        })
    });
    const _w = h.default.div.attrs({
            className: 'flex-column vc'
        })(p || (p = u`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`)),
        _x = h.default.div.attrs({
            className: 'flex-column'
        })(q || (q = u`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`)),
        _y = h.default.div(r || (r = u`
  font-size: 54px;
  font-weight: ${ 0 };
`), j.FontWeights.UltraBold),
        _z = h.default.div(s || (s = u`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`)),
        _A = (0, h.default)(m.default).attrs({
            className: 'maxWidth'
        })(t || (t = u`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`));
}), a.register('2HvvA11', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _i => _i.external || !_i.to ? (0, d.jsx)('a', {
        href: _i.to,
        tabIndex: Number(_i.tabIndex || '0'),
        onClick: _i.onClick,
        onKeyPress: _b => {
            _i.onClick && 'Enter' === _b.key && (_b.preventDefault(), _i.onClick());
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
}), a.register('7s5R80', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _i => (0, d.jsx)(_i, {
        onClick: _i.onClick,
        className: _i.className,
        style: _i.style,
        children: _i.children
    });
    const _i = e.default.div(g || (g = (_i => _i)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('zoqzn', function(b, c) {
    _i(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('2HvvA11');
    let i, j, k, l, m = _i => _i;
    var _n = _i => {
        const {
            id: o,
            name: p,
            startDate: q,
            isActive: r
        } = _i;
        return (0, d.jsxs)(_o, {
            to: `/groups/${ o }`,
            children: [
                (0, d.jsx)(_p, {
                    style: {
                        background: r ? '#388e3c' : '#f44336'
                    },
                    children: r ? 'Active' : 'Inactive'
                }),
                (0, d.jsx)(_q, {
                    children: p
                }),
                q ? (0, d.jsxs)(_r, {
                    children: [
                        'Started on ',
                        q
                    ]
                }) : null
            ]
        });
    };
    const _o = (0, e.default)(h.default).attrs({
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
        _p = e.default.div(j || (j = m`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${ 0 };
  margin-bottom: 9px;
  font-size: 12px;
`), f.default.White),
        _q = e.default.div(k || (k = m`
  font-weight: ${ 0 };
  font-size: 16px;
`), g.FontWeights.Bold),
        _r = e.default.div(l || (l = m`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), a.register('hk77B', function(b, c) {
    _i(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('oXQNI'),
        h = a('ewwAh'),
        i = a('MSsQO'),
        j = a('YRlpt'),
        k = a('b5kvC'),
        l = a('sHRDd'),
        m = a('p+dWb'),
        n = a('R6gfH'),
        o = a('wQa8B'),
        p = a('INKb2'),
        q = a('Jhh4y'),
        r = a('PMl60'),
        s = a('uvADe0');
    const t = {
        fontFamily: k.Fonts.SFPro,
        color: l.default.Black
    };
    var _u = _i => {
        const {
            bulk: v,
            bulkId: w
        } = _i, [x, y] = e.useState(''), [z, A] = e.useState(!1), [B, C] = e.useState(null), D = x && (0, q.validateEmail)(x), E = () => {
            D && (A(!0), (0, r.request)({
                url: '/api/bulk/add-admin',
                data: {
                    bulk: w,
                    newAdmin: x
                },
                success: () => {
                    (0, o.refetchSpecificBulk)(w), i.default.success('Manager added!'), y('');
                },
                error: _i => {
                    _i && _i.message && _i.message.text && 'USER NOT FOUND' === _i.message.text ? (0, p.throwError)({
                        title: 'User not found',
                        content: 'This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first.'
                    }) : C(_i);
                },
                both: () => A(!1)
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
                            value: x,
                            onChange: _i => {
                                y(_i.target.value.toLowerCase()), C(null);
                            },
                            onPressEnter: E
                        }),
                        (0, d.jsx)(f.default, {
                            style: {
                                width: '100%',
                                marginTop: 5
                            },
                            type: 'primary',
                            disabled: !D,
                            loading: z,
                            onClick: E,
                            children: 'Add'
                        }),
                        (0, d.jsx)(s.default, {
                            error: B,
                            style: {
                                marginTop: 5
                            }
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    children: v.owners.map(_i => (0, d.jsx)('div', {
                        children: (0, d.jsx)(m.default, {
                            email: _i,
                            remove: () => {
                                return x = _i, void(v.owners.length < 2 ? (0, p.throwError)({
                                    title: 'Cannot remove',
                                    content: 'Please add another admin before removing yourself'
                                }) : (0, r.getUser)().email === x ? j.default.confirm({
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
                                var F;
                            }
                        })
                    }, 'admin-' + _i))
                })
            ]
        });
    };
}), a.register('p+dWb', function(b, c) {
    _i(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ieNls8'),
        f = a('oXQNI'),
        g = a('ijg0s'),
        h = a('b5kvC'),
        i = a('sHRDd');
    var _j = _i => (0, d.jsx)(f.default, {
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
                    children: _i.email
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(g.default, {
                        title: 'Remove',
                        children: (0, d.jsx)(e.default, {
                            onClick: _i.remove,
                            style: {
                                cursor: 'pointer'
                            }
                        })
                    })
                })
            ]
        })
    });
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
}), a.register('bemuk', function(b, c) {
    _i(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('b5kvC'),
        g = a('xQDqe25'),
        h = a('NIZyA'),
        i = a('ulE4q'),
        j = a('ewwAh'),
        k = a('YRlpt'),
        l = a('6BM9K6'),
        m = a('ijg0s'),
        n = a('PMl60'),
        o = a('2HvvA11'),
        p = a('wQa8B'),
        q = a('Y0Ni9'),
        r = a('jzxyj10'),
        s = a('ECzOP');
    const t = _i => {
        const [u, v] = e.useState(''), w = !!u, x = () => {
            w && (_i.onNewName(u), _i.close());
        };
        return (0, d.jsx)(k.default, {
            open: _i.open,
            closable: !0,
            onCancel: _i.close,
            title: 'Rename Group',
            afterClose: () => v(''),
            footer: (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(i.default, {
                        onClick: _i.close,
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
                onChange: _i => v(_i.target.value),
                onPressEnter: x
            })
        });
    };
    var _u = _i => {
        const {
            bulk: v,
            bulkId: w
        } = _i, [x, y] = e.useState(!1), [z, A] = e.useState(!1), {
            isActive: B,
            name: C,
            expiration: D,
            statusText: E
        } = v;
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
                                                onClick: () => A(!0),
                                                children: (0, d.jsx)(m.default, {
                                                    title: 'Rename Group License',
                                                    placement: 'topLeft',
                                                    children: C
                                                })
                                            }),
                                            (0, d.jsx)(l.default, {
                                                style: {
                                                    marginLeft: 10
                                                },
                                                color: B ? 'green' : 'red',
                                                children: B ? E || 'Active' : D && _b(s)().isAfter(_b(s).unix(D)) ? 'Inactive' : E || 'Inactive'
                                            })
                                        ]
                                    }),
                                    (0, d.jsx)('div', {
                                        style: {
                                            fontSize: 18,
                                            opacity: 0.8
                                        },
                                        children: B ? D ? `Expires on ${ _b(s).unix(D).format('L') }` : 'Paid with credit/debit card' : D && _b(s)().isAfter(_b(s).unix(D)) ? `Expired on ${ _b(s).unix(D).format('L') }` : 'Inactive group license'
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: v.allowedToRenew ? (0, d.jsx)(i.default, {
                                    size: 'large',
                                    type: 'primary',
                                    onClick: () => {
                                        y(!0), (0, n.request)({
                                            url: '/api/quote/createFromRenewal',
                                            method: 'post',
                                            data: {
                                                id: w
                                            },
                                            success: _i => {
                                                (0, r.NavigateTo)(`/quote/${ _i }`);
                                            },
                                            error: _i => {
                                                (0, n.throwMessageError)({
                                                    e: _i,
                                                    default: {
                                                        title: 'Error generating a renewal quote. Please try again later'
                                                    }
                                                });
                                            },
                                            both: () => y(!1)
                                        });
                                    },
                                    loading: x,
                                    icon: (0, d.jsx)(g.default, {}),
                                    children: 'Renew'
                                }) : null
                            })
                        ]
                    }),
                    v.isActive ? null : (0, d.jsx)(h.default, {
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
                        open: z,
                        close: () => A(!1),
                        onNewName: _i => {
                            (0, n.request)({
                                url: '/api/bulk/rename',
                                data: {
                                    id: w,
                                    name: _i
                                }
                            }), (0, p.refetchSpecificBulk)(w), (0, q.invalidateAllBulks)();
                        }
                    })
                ]
            })
        });
    };
}), a.register('xQDqe25', function(_b, c) {
    _i(_b.exports, 'default', function() {
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
    _d(b.exports, 'default', function() {
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
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
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
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
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
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _i(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Y0Ni9', function(b, _c) {
    _i(b.exports, 'invalidateAllBulks', function() {
        return _h;
    }), _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('UapK50'),
        e = a('PMl60'),
        f = a('x/+rF');
    const g = ['all-bulks'],
        _h = () => {
            f.default.invalidateQueries(g);
        };
    var _i = () => (0, d.useQuery)(g, () => (0, e.requestAsPromise)({
        url: '/api/bulk/fetch-all'
    }));
}), a.register('jzxyj10', function(b, c) {
    _i(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _i => {
        d.history.push(_i);
    };
}), a.register('BtGn5', function(b, c) {
    _i(b.exports, 'default', function() {
        return _B;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('rPP+1'),
        g = a('gCqar24'),
        h = a('ulE4q'),
        i = a('oXQNI'),
        j = a('fmVdR'),
        k = a('ewwAh'),
        l = a('MSsQO'),
        m = a('q7Uge'),
        n = a('Axq+p'),
        o = a('b5kvC'),
        p = a('jlX4s16'),
        q = a('2HvvA11'),
        r = a('PMl60'),
        s = a('hHkFq'),
        t = a('wQa8B'),
        u = a('Y0Ni9'),
        v = a('g9B6V');
    let w, x, y = _i => _i;
    const z = {
            ...m.CardStyle,
            width: 'calc(50% - 4px)',
            flex: 1
        },
        A = {
            textAlign: 'center',
            fontSize: 32
        };
    var _B = _i => {
        const [C, D] = e.useState(!1), E = (0, u.default)().data, {
            bulkId: F,
            bulk: G
        } = _i, H = `${ (0, r.getDomain)() }/group/join/${ F }`, I = (E || []).filter(_i => _i.id !== F), J = !G.joinByLinkEnabled;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)('div', {
                    style: m.CardStyle,
                    children: [
                        (0, d.jsxs)('div', {
                            style: {
                                opacity: J ? 0.6 : 1,
                                pointerEvents: J ? 'none' : 'auto'
                            },
                            children: [
                                (0, d.jsx)(_C, {
                                    children: 'Invite'
                                }),
                                (0, d.jsx)(_D, {
                                    children: 'Get educators under your group license! Share the invite link below to have them automatically join this group.'
                                }),
                                (0, d.jsxs)('div', {
                                    className: 'maxWidth flex vc',
                                    style: {
                                        marginTop: 7
                                    },
                                    children: [
                                        (0, d.jsx)(k.default, {
                                            value: H,
                                            readOnly: !0,
                                            size: 'large'
                                        }),
                                        (0, d.jsx)(h.default, {
                                            onClick: () => {
                                                _b(p)(H), l.default.success('Link copied to clipboard!');
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
                                            error: _i => (0, r.throwMessageError)({
                                                e: _i,
                                                default: {
                                                    title: 'Error switching.'
                                                }
                                            })
                                        });
                                    },
                                    children: [
                                        J ? 'Open' : 'Close',
                                        ' group to new members'
                                    ]
                                }),
                                I.length && G.isActive ? (0, d.jsx)(q.default, {
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
                    otherBulks: I,
                    close: () => D(!1)
                })
            ]
        });
    };
    const _C = n.default.div(w || (w = y`
  font-weight: ${ 0 };
  font-size: 30px;
`), o.FontWeights.UltraBold),
        _D = n.default.div(x || (x = y`
  font-size: 18px;
  margin-top: -7px;
`));
}), a.register('rPP+1', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('rZa1L'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DollarOutlined';
    var _i = e.forwardRef(h);
}), a.register('rZa1L', function(b, c) {
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
                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z'
                }
            }]
        },
        name: 'dollar',
        theme: 'outlined'
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
    _b(b.exports, 'default', function() {
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
}), a.register('q7Uge', function(b, c) {
    _b(b.exports, 'CardStyle', function() {
        return _n;
    }), _b(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('fmVdR'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('hHkFq'),
        j = a('p+dWb'),
        k = a('R6gfH'),
        l = a('PMl60'),
        m = a('wQa8B');
    const _n = {
            fontFamily: g.Fonts.SFPro,
            color: h.default.Black
        },
        o = _b => (0, d.jsx)(e.default, {
            style: {
                ..._n,
                minWidth: 215,
                marginLeft: 20
            },
            children: (0, d.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, d.jsx)(_p, {
                        count: _b.maxSeats,
                        description: 'total seats'
                    }),
                    (0, d.jsx)(f.default, {
                        type: 'vertical',
                        style: {
                            marginLeft: 20,
                            marginRight: 20
                        }
                    }),
                    (0, d.jsx)(_p, {
                        count: _b.seatsRemaining,
                        description: `${ (0, l.plural)('seat', _b.seatsRemaining) } remaining`
                    })
                ]
            })
        }),
        _p = _b => (0, d.jsxs)('div', {
            className: 'flex flex-column vc',
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 23,
                        fontWeight: g.FontWeights.UltraBold
                    },
                    children: _b.count
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: -7,
                        fontSize: 11,
                        opacity: 0.8
                    },
                    children: _b.description
                })
            ]
        });
    var _q = _b => {
        const {
            bulkId: r,
            bulk: s
        } = _b, t = Math.abs(s.maxSeats - s.seats.length);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(e.default, {
                    style: _n,
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
                                seatsRemaining: t
                            })
                        ]
                    })
                }),
                s.seats.length ? (0, d.jsx)(k.default, {
                    style: {
                        marginTop: 10
                    },
                    children: s.seats.map(_b => (0, d.jsx)('div', {
                        children: (0, d.jsx)(j.default, {
                            email: _b,
                            remove: () => {
                                return s = _b, void(0, l.request)({
                                    url: '/api/bulk/remove-member',
                                    data: {
                                        bulk: r,
                                        removedMember: s
                                    },
                                    success: () => (0, m.refetchSpecificBulk)(r),
                                    error: _b => (0, l.throwMessageError)({
                                        e: _b,
                                        default: {
                                            title: 'Error removing user from license'
                                        }
                                    })
                                });
                                var u;
                            }
                        })
                    }, 'member-' + _b))
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
}), a.register('jlX4s16', function(_b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
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
}), a.register('g9B6V', function(b, c) {
    _b(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('oXQNI'),
        f = a('fmVdR'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('INKb2'),
        k = a('PMl60'),
        l = a('ECzOP'),
        m = a('LEQ5w'),
        n = a('Axq+p'),
        o = a('wQa8B');
    let p, q, r = _b => _b;
    var _s = _b => {
        const [t, u] = m.useState(!1);
        return (0, d.jsx)(g.default, {
            open: _b.visible,
            onCancel: _b.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: (0, d.jsxs)(_t, {
                children: [
                    (0, d.jsx)(_u, {
                        children: 'Import members from which group license?'
                    }),
                    (0, d.jsx)(f.default, {
                        style: {
                            margin: '30px 0px'
                        }
                    }),
                    _b.otherBulks.map(c => (0, d.jsxs)(e.default, {
                        style: {
                            marginBottom: 10,
                            color: h.default.Black
                        },
                        className: 'maxWidth',
                        onClick: () => {
                            return _v = c.id, e = c.name, void(t || (u(!0), (0, k.request)({
                                url: '/api/bulk/members/import',
                                data: {
                                    bulk: _b.currentBulk,
                                    importedBulk: _v
                                },
                                success: () => {
                                    (0, o.refetchSpecificBulk)(_b.currentBulk), g.default.success({
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
                                error: _b => {
                                    (0, j.throwError)({
                                        title: 'Error importing members',
                                        content: 'Please try again.'
                                    });
                                },
                                both: () => {
                                    u(!1), _b.close();
                                }
                            })));
                            var _v, w;
                        },
                        hoverable: !0,
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    fontSize: 18,
                                    fontWeight: i.FontWeights.Bold
                                },
                                children: c.name
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    'Started',
                                    ' ',
                                    _c(l)((0, k.dateFromObjectId)(c.id)).format('MMMM Do, YYYY')
                                ]
                            })
                        ]
                    }, `import-sub-${ c.id }`))
                ]
            })
        });
    };
    const _t = n.default.div(p || (p = r`
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro),
        _u = n.default.div(q || (q = r`
  font-size: 28px;
  font-weight: ${ 0 };
  line-height: 1;
  margin-top: 20px;
`), i.FontWeights.Bold);
}), a.register('MvRMF', function(_b, _c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('fzXqn')),
        import('./' + a('HmN9A').resolve('kKpXS')),
        import('./' + a('HmN9A').resolve('bRCFZ'))
    ]).then(() => a('/G2V3'));
}), a.register('2uW6I', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Y0Ni9'),
        f = a('Axq+p'),
        g = a('6CIVV'),
        h = a('jXz1K'),
        i = a('PMl60'),
        j = a('RfJdQ');
    let k;
    var _l = () => {
        const {
            isLoading: _m,
            data: n
        } = (0, e.default)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(i.Title, {
                    title: 'Group Licenses'
                }),
                (() => {
                    if (_m)
                        return (0, d.jsx)(_m, {
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
    const _m = f.default.div.attrs({
        className: 'maxAll flex-center'
    })(k || (k = (_h => _h)``));
}), a.register('RfJdQ', function(b, c) {
    _h(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('ulE4q');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('hHkFq'),
        h = a('sHRDd'),
        i = a('gs4MT'),
        j = a('2HvvA11'),
        k = a('jXz1K');
    let l, m, n, o = _h => _h;
    var _p = () => (0, d.jsx)(_q, {
        children: (0, d.jsxs)(_r, {
            children: [
                (0, d.jsxs)(k.Title, {
                    children: [
                        g.COMPANY_NAME,
                        ' Groups'
                    ]
                }),
                (0, d.jsxs)(_s, {
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
    const _q = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(l || (l = o``)),
        _r = f.default.div.attrs({
            className: 'flex-center flex-column medium-shadow'
        })(m || (m = o`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${ 0 };
  padding: 45px;
  border-radius: 6px;
`), h.default.White),
        _s = f.default.div(n || (n = o`
  font-size: 16px;
  margin-top: 3px;
`));
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('Rtfgy20', function(b, c) {
    _j(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
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
    _b(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _b => (0, d.jsx)('i', {
        className: `${ _b.name }${ _b.className ? ` ${ _b.className }` : '' }`,
        style: _b.style
    });
}), a.register('7B+hJ16', function(_b, c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), _b.exports.lazyWithPreload = void 0;
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
    _b.exports.lazyWithPreload = _d, _b.exports.default = _d;
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
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('Hi0/F0', function(b, c) {
    e(b.exports, 'informationTypes', function() {
        return _f;
    }), e(b.exports, 'default', function() {
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
                Object.keys(g).forEach(e => this[e] = g[e]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
}), a.register('5ka2e1', function(b, c) {
    e(b.exports, 'default', function() {
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
                Object.keys(f).forEach(e => this[e] = f[e]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    e(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('pYmyT1', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(e => (0, d.jsx)(f.default, {
        disabled: e.disabled,
        size: e.size || 'middle',
        type: 'primary',
        onClick: e.onClick,
        style: Object.assign({
            width: '100%'
        }, e.style),
        loading: e.loading,
        children: e.children
    }));
});